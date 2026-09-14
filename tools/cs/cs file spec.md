# Missionforce: Cyberstorm — Mission Scripting VM

Reverse-engineered from `cstorm.exe` (GOG install, `C:\GOG Games\Missionforce Cyberstorm\CSTORM.EXE`, 32-bit, loaded at base `0x400000` in both Ghidra and x32dbg — addresses map 1:1, no rebasing needed).

## Overview

The game's mission scenarios are driven by a custom bytecode VM: a **stack-based instruction dispatcher** (37 opcodes — control flow, unit control, map/UI actions) layered over a **stack-based expression evaluator** (23 opcodes — arithmetic/logical ALU) used for conditions and computed values inside those instructions.

## Dispatch mechanism

Both dispatchers use the same pattern: a `REPNE SCASW` linear scan through a table of 16-bit opcode values, followed by an indexed `JMP` into a parallel table of handler addresses.

```asm
MOV ECX, <table_size>
MOV EDI, <opcode_table_addr>
SCASW.REPNE ES:EDI          ; scan for AX == opcode
JMP dword ptr [ECX*4 + <handler_table_addr>]
```

**Index math**: `REPNE SCASW` decrements `ECX` on every comparison and stops on a match. If the match happens at table position `k` (0-based), the final `ECX` used for the jump is `(table_size - 1) - k`. So `handler_table[table_size-1-k]` is the handler for `opcode_table[k]`. When no entry matches, `ECX` reaches 0 and the jump lands on `handler_table[0]` — a default/error fallback (both tables have this; a matching "unreachable" placeholder value sits at the end of the opcode array).

Both opcode/handler tables were dumped by attaching x32dbg (module `cstorm.exe`) and reading raw process memory directly, rather than fighting Ghidra's switch-recovery analyzer (which can't handle a `SCASW`-driven index — it expects a bounds-checked compare before the jump). Where a target needed a real Ghidra function (for decompilation), it was created manually: `G` to the address, `D` to disassemble if needed, `F` to create function.

## Main instruction set — `Script_DispatchInstruction` @ `0x4682dc`

Opcode table at `0x468200` (37 × `short`), handler table at `0x468248` (37 × function pointer).

Encoding: high nibble(s) = instruction class, low nibble = operand count.

### Control flow

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x1013` | `Script_Op_IfOnce` | `0x468353` | Eval condition (op0); if true and a per-instance "already-ran" flag (op1) is still 0, run a sub-block (op2 = length) once, then set the flag. |
| `0x1023` | `Script_Op_IfElse` | `0x4683e1` | If/then/else: false → run then-block (op1 offset), true → run else-block (op2 offset). |
| `0x1032` | `Script_Op_Switch` | `0x468573` | Eval a key expr, scan (case-value, case-offset) pairs following the instruction, jump to match or fall through to default. |
| `0x1042` | `Script_Op_While` | `0x4684c9` | Loop while condition (op0) true, running the body via recursive `Script_DispatchInstruction` calls. Hard **500-iteration guard** → fatal error dialog on runaway loops. |
| `0x1051` | `Script_Op_Goto` | `0x46854e` | Unconditional jump (op0 = offset), no side effects. |
| `0x1060` | `Script_Op_NextPhase` | `0x46832b` | Advance scenario phase counter by 1, clamped once phase == 2. |
| `0x1070` | `Script_Op_GotoPhase3` | `0x46833b` | Force phase = 3 outright. Bytecode counterpart of native `Script_ForcePhase3AndRun`. Also called from the message/fallback handler on end-turn. |
| `0x1080` | `Script_Op_Nop` | `0x468547` | No-op. |

### Variables / objectives / phase table

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x1092` | `Script_Op_SetUnitObjective` | `0x468671` | `Script_SetUnitObjectiveState(eval(op0), eval(op1))`. |
| `0x10a2` | `Script_Op_SetVariable` | `0x4686ac` | Script variable table (`param_1+0x10`)[op0] = eval(op1). Write-side of `Scenario_ResolveVariableRef`/`Scenario_EvalExpression`. |
| `0x10b2` | `Script_Op_StoreRawToPhaseTable` | `0x4686d6` | Writes a **raw literal** (not evaluated) op1 into a per-phase table. Only opcode that stores a literal instead of an evaluated expression — semantics not fully confirmed. |
| `0x7013` | `Script_Op_SetConditionRef` | `0x468d3b` | Writes a 20-byte condition descriptor `{varRef=op1, exprOffset=op2}` into `condition_table(param_1+0x1c)[op0]`. Read back by condition opcodes `0xC052`/`0xC092`/`0xC0B1` in the expression side (`Script_ExecuteOpcode`). |

### Audio

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x2031` | `Script_Op_PlaySound` | `0x4686f8` | `Script_PlaySoundEffect(eval(op0))`. |
| `0x2041` | `Script_Op_PlayMusic` | `0x46871f` | `Script_PlayMusicTrack(eval(op0))`. |

### Timers

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x3012` | `Script_Op_SetTimer` | `0x468740` | `timer_array(param_1+0x14)[op0] = current_turn(param_1+0x30) + eval(op1)`. Read by "timer expired" condition opcodes `0xC010`/`0xC011`. |
| `0x3021` | `Script_Op_ClearTimer` | `0x46876f` | `timer_array[op0] = 0`. |

### Unit control (single-unit) and group-broadcast variants

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x4014` | `Script_Op_SpawnUnit` | `0x468787` | `unit_handles(param_1+0x20)[op0] = Script_SpawnUnitAtCoord(eval(op1), eval(op2), ResolveVariableRef(op3))`. **op1 is a unit-type ID (1-31), op2 is a minimum weapon-range requirement, op3 is the hex location** — not an (x,y) pair, despite how the operand order might first read. Confirmed via `Combat_SpawnUnitByType`: type range 10-16 spawns with escorts (`Unit_SpawnWithEscorts`); type 30/31 places a stationary structure/turret instead of a mobile unit (`Iso_HitTestTile`+`SlotArray_AddEntry`) — this is how missions place static objective structures like a Cybrid base. `op2` (the "minimum weapon range" operand) feeds `Herc_SelectWeaponForRange`, decompiled directly: it filters the unit's weapon slots down to ones whose own range stat meets or exceeds this value, then does a weighted-random pick among the survivors (weighted by range, via the LFSR PRNG) — falling back to an unfiltered pick if nothing qualifies. It's a loadout-selection hint, **not a spendable budget** (contrast with `SPAWN_UNIT_GROUP` below, which genuinely is one). |
| `0x4024` | `Script_Op_MoveUnit` | `0x468866` | `Scenario_ApplyObjectiveAction(param_1, 4/*single*/, ops)` → sets unit attribute 7, then `Script_SetUnitMoveOrder` to a hex/unit-relative destination. |
| `0x4032` | `Script_Op_SetUnitAttr1` | `0x468884` | `Script_SetUnitAttribute(handle, attrId=1, eval(op1))`. Attribute meaning TBD. |
| `0x4042` | `Script_Op_SetUnitAttr8` | `0x468913` | `Script_SetUnitAttribute(handle, attrId=8, eval(op1))`. Attribute meaning TBD. |
| `0x4052` | `Script_Op_GetFirstUnitInGroup` | `0x468994` | `unit_handles[op0]` = first live unit in group op1 (1=ally, 2=enemy, else indexed unit-group table). |
| `0x4062` | `Script_Op_GetNextUnitInGroup` | `0x4689f8` | Advances `unit_handles[op0]` to the next unit after the current handle in group op1. |
| `0x4073` | `Script_Op_GetNearestUnitInGroup` | `0x468a8b` | `unit_handles[op0]` = nearest unit in group op1 to hex ref (op2), via `Script_HexDistance`. |
| `0x4082` | `Script_Op_SetUnitHandleVar` | `0x468bed` | Generic `unit_handles[op0] = eval(op1)` scalar assign. |
| `0x5013` | `Script_Op_SpawnUnitGroup` | `0x4687ed` | `Script_SpawnAISquadAtCoord` → copies a `-1`-terminated handle array into a unit-group table. **op1 is an AI point-budget** (feeds `AI_BuildLoadoutForBudget`, which randomly rolls a loadout of units costing up to that budget), **op2 is the hex location** (`ResolveVariableRef`). |
| `0x5024` | `Script_Op_MoveUnitGroup` | `0x46887b` | Group version of `MoveUnit` (`Scenario_ApplyObjectiveAction` mode 5). |
| `0x5032` | `Script_Op_SetGroupAttr1` | `0x4688c0` | Attribute-1 broadcast to every unit in group op0. |
| `0x5042` | `Script_Op_SetGroupAttr8` | `0x468941` | Attribute-8 broadcast to every unit in group op0. |

### Hex/waypoint coordinate math (8-byte x/y slots at `param_1+0x18`)

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x6013` | `Script_Op_SetHex` | `0x468c19` | `hex_var[op0] = {eval(op1), eval(op2)}`. |
| `0x6022` | `Script_Op_CopyHex` | `0x468c58` | `hex_var[op0] = *ResolveVariableRef(op1)`. |
| `0x6032` | `Script_Op_AddHex` | `0x468c86` | Vector add into `hex_var[op0]`. |
| `0x6042` | `Script_Op_SubHex` | `0x468cba` | Vector subtract into `hex_var[op0]`. |
| `0x6053` | `Script_Op_GetHexAlongPath` | `0x468cee` | `hex_var[op0] = Script_GetHexAlongPath(eval(op1), eval(op2))` — likely "N hexes along the path toward a destination" for staged movement. |

### Objectives / fog / messaging

| Opcode | Name | Address | Semantics |
|---|---|---|---|
| `0x8015` | `Script_Op_PlaceObjectiveMarker` | `0x468d6d` | `Script_PlaceObjectiveMarkerAtHex(ResolveVariableRef(op0), eval(op1..op4))`. |
| `0x8024` | `Script_Op_UpdateFogTwoHexes` | `0x468dfb` | `Fog_UpdateTwoHexCells(hex(op0), hex(op1))` — fog-of-war reveal/update around two points. |
| `0x8034` | `Script_Op_MarkHexObjective` | `0x468e7a` | `Script_MarkHexAsObjective(hex(op0))` plus 3 more evaluated operands (exact wiring of the extra args not fully confirmed). |
| `0x8f5e`* | `Script_Op_MessageOrUnknown` | `0x468f5e` | **Default/sentinel** for the main dispatcher. Also a secondary dispatcher for `0x20xx`-class message opcodes outside the main table: `0x2010`=nop, `0x2011`–`0x2020`=system chat message (`Scenario_FormatAndResolveString` + `Chat_AppendSystemMessage`), ~`0x2050`=briefing display text, `0x2060`=end-turn (`Combat_SetEndTurnFlag` then calls `Script_Op_GotoPhase3`). Anything else here is a genuinely unknown opcode → fatal error dialog. |

\* This value never actually appears as an incoming opcode; it's a placeholder in the opcode array that maps to jump-table slot 0, the real default-case target.

## Expression ALU — `Script_DispatchOpcodeOrBuiltin` / `Script_ExecuteOpcode` @ `0x4697a8`

Opcode table at `0x469720` (23 × `short`), case bodies inline in the same function at `0x46974c`+. Used by `Scenario_EvalExpression` for computing operand values and conditions everywhere in the instruction set above. Clean nibble-class pattern: `0x1xxx` = unary, `0x2xxx` = binary arithmetic/bitwise, `0x3xxx` = comparisons, `0x4xxx` = logical, `0xa011` = variable/const load.

| Opcode | Operation | Address |
|---|---|---|
| `0x1011` | `NEG` — unary negate | `0x469816` |
| `0x1021` | `NOT` — bitwise complement | `0x46981d` |
| `0x1031` | `ISZERO` — logical not (`x == 0`) | `0x469824` |
| `0x2012` | `ADD` | `0x469834` |
| `0x2022` | `SUB` | `0x46983e` |
| `0x2032` | `MUL` | `0x469848` |
| `0x2042` | `DIV` (signed; div-by-zero → fatal error dialog) | `0x469855` |
| `0x2052` | `MOD` (signed remainder) | `0x469885` |
| `0x2062` | `AND` (bitwise) | `0x469898` |
| `0x2072` | `XOR` | `0x4698a2` |
| `0x2082` | `OR` (bitwise) | `0x4698ac` |
| `0x2092` | `SHL` | `0x4698b6` |
| `0x20a2` | `SAR` (arithmetic shift right) | `0x4698c0` |
| `0x3012` | `LT` (`<`) | `0x4698ca` |
| `0x3022` | `LE` (`<=`) | `0x4698d7` |
| `0x3032` | `GT` (`>`) | `0x4698e4` |
| `0x3042` | `GE` (`>=`) | `0x4698f1` |
| `0x3052` | `EQ` (`==`) | `0x4698fe` |
| `0x3062` | `NE` (`!=`) | `0x469908` |
| `0x4012` | `LOGICAL_AND` (`x!=0 && y!=0`) | `0x469915` |
| `0x4022` | `LOGICAL_OR` (`x!=0 \|\| y!=0`) | `0x469930` |
| `0xa011` | `LOAD` — resolve a variable/const/stat operand. `0x8xx`/`0x9xx` ranges route through resolver `0x467ed7`; otherwise indexes a global table at `[EDX+0x10][idx]`. | `0x469937` |
| `0x999d`* | Default/sentinel — unknown-opcode fatal error | `0x46999d` |

Also from `Script_ExecuteOpcode`'s `0xB0xx`/`0xC0xx` classes (condition/query primitives layered on this ALU):
- `0xB011`: stat lookup via `Combat_GetStatByIndex`.
- `0xB021`: random int mod N, via `LFSR_Advance` (confirms an LFSR-based PRNG drives script randomness).
- `0xB03x`: weighted-random-pick loop.
- `0xC0xx` block: turn-counter/timer compare, unit-group conditions (ally/enemy/all), hex distance, set-objective-at-hex — the mission-condition mini-language.

## Known VM context struct offsets (`param_1` / `unaff_EBP` in handler functions)

| Offset | Meaning |
|---|---|
| `+0x8` | Instruction stream base |
| `+0xc` | Phase-block table pointer |
| `+0x10` | Numeric variable table |
| `+0x14` | Timer/deadline array (compared against `+0x30`) |
| `+0x18` | Hex/waypoint coordinate variable table (8 bytes/slot) |
| `+0x1c` | Condition descriptor table (20 bytes/slot: `{varRef, exprOffset, ...}`) |
| `+0x20` | Unit-handle variable table |
| `+0x24` | Unit-group table (`0x24` bytes/slot; count at `+0x20` within each group entry) |
| `+0x28` | "Once"-flags array (used by `IfOnce`) |
| `+0x2c`/`+0x30` | Current turn counter |
| `+0x34` | Current scenario phase index |

## Disassembler + validation against a real mission file

A plain-English disassembler (`cyberstorm_script_disasm.py`) was built from this opcode table. It decodes a raw little-endian `uint16` instruction stream and prints one plain-English line per instruction, using the fact that **every main-table opcode's low nibble equals its exact operand-word count** (verified across all 37 opcodes) — so instruction boundaries are unambiguous even without knowing the file container format.

Tested against a real shipped mission file, `SIT101.CS` (4737 bytes). File starts with magic `0xabcdabcd`, a header of monotonically increasing offsets (likely a section table), and ends with a string pool (mission dialogue text) plus a symbol table of variable names that **directly confirms the VM struct layout**: `situationNum/turnNum/...` (numeric vars, `+0x10`), `cloc/enemySquad/playerLoc/centerLoc` (hex vars, `+0x18`), `enemyArea/startArea/centerArea` (condition/group table, `+0x1c`/`+0x24`), `dropShip/theCybrid/theBase` (unit handles, `+0x20`), `player/cybrid` (unit groups).

The actual bytecode stream was located by scanning for a dense run of known opcode values, found starting at word offset 244 (byte `0x1e8`). Disassembling from there decoded **153 consecutive real instructions cleanly** — mission init (spawn drop ship/Cybrid/base, place 3 objective markers, arm a timer, set 3 scenario variables), then a `WHILE` loop scanning ally units, `SWITCH`-driven branching, and a long run of `display system/chat message #N` calls with steadily increasing message indices — which lines up exactly with the mission's narrated dialogue text ("Destroy the lone Cybrid...", "Good job moving out!", etc.) found in the file's string pool.

This also turned up an opcode family **not in the main 37-entry table**: `0x20xx`-masked "message" opcodes, handled by `Script_Op_MessageOrUnknown` (the same function that's the main table's default fallback) rather than the primary dispatch table:

| Opcode mask | Name | Operands | Semantics |
|---|---|---|---|
| `0x2010` | `MSG_NOP` | 0 | No-op. |
| `0x2020` | `SYSTEM_MESSAGE` | 1 | Display chat/system message #op0 (string-table index). Confirmed live: opcode `0x2021` was followed by exactly one operand word before the next valid main-table opcode. |
| `0x2050` | `BRIEFING_TEXT` | 1 | Display briefing text #op0. |
| `0x2060` | `END_TURN` | 1 | End turn (reason/flag #op0), then jump to phase 3 — calls `Script_Op_GotoPhase3` internally. |

**Known limitation**: jump/block/switch targets (`IfElse`, `While`, `Goto`, `Switch`) are decoded but shown as raw word-offset numbers, not resolved to absolute stream positions — that requires decoding the phase-table/block-anchoring format in the file header, which hasn't been reverse-engineered yet (see follow-ups).

### Expression pool decoding

`Scenario_EvalExpression(ctx, id)` (decompiled directly) indexes a **per-scenario pool of compiled postfix expressions** at `instr_base + phase_table[phase].offset_0x38 + id*2`. Each pool entry is: a token-count header word (`0` ⇒ the next word is a plain immediate constant), else a bitmask word (bit *i* says whether postfix token *i* is an operator or a literal push) followed by the tokens themselves.

The key insight that makes this fully decodable without knowing the exact pool-base formula from the file: **every opcode anywhere in the VM — main table, ALU, and the `0xB0xx`/`0xC0xx` condition/query class — encodes its own pop-count in its low nibble** (already proven for all 37 main-table opcodes; the same rule turned out to hold for the expression sub-language too). That's enough structural redundancy to brute-force the correct pool base: try every candidate word offset, and keep the one where *every* expression ID actually referenced by the disassembled script decodes into a balanced postfix stack program (with a minimum of 3 genuinely computed expressions required, to reject trivial false positives — small integers in the file's header/offset table technically "validate" as all-immediate pools otherwise). Against `SIT101.CS` this uniquely identified word offset **619** with zero ambiguity.

`Scenario_ResolveVariableRef` was also decompiled and confirms the hex-var addressing modes used elsewhere: plain index (`param2 & 0xf800 == 0`) into the hex-var table (`+0x18`), a `0x6000`-masked computed pair of two sub-expressions, and an `0xa000`-masked "resolve to a unit's world position" (`unit_handles[param2 & 0x7ff]`).

Rendering uses the ALU's infix/prefix symbols (`+ - * / % & | ^ << >> < <= > >= == != && || ! ~`), `var(N)` for the `LOAD` opcode, and best-effort names for the `0xB0xx`/`0xC0xx` class pulled from the opcode-table writeup above (`stat`, `random_below`, `timer_expired`, `hex_distance`, `set_unit_behavior`, condition-slot lookups, etc.) — a few of these (`group_condition`/`group_condition_2`/`any_group_alive`/`all_group_alive`) are still generic placeholders pending exact semantics. Real output against `SIT101.CS`:

```
[   10] place an objective marker at hex-var #3 with params (4 + stat(4)), 6, 8, 50
[   69] IF timer_expired(1) is false: jump to word-offset 252 ("then" branch); ...
[   73] set script variable #2 = (var(2) + 1)
[   97] IF group_condition_ref(2, 4) is false: jump to word-offset 35 ("then" branch); ...
[  146] IF (group_condition_ref_2(2, 1) && (var(6) > 0)) is false: jump to word-offset 83 (...); ...
```

Both the instruction-stream start and the expression-pool base are now auto-detected by default (`--start`/`--expr-pool-base` override manually; `--no-expr-decode` reverts to opaque `<expr#N>` ids).

### Real .CS file header, decoded exactly (no more brute force)

Decompiling `ScenarioFile_ParseAndValidateHeader`, `ScenarioScript_LoadAndRun`, and `Scenario_FormatAndResolveString` pinned down the real file format precisely:

- `dword[0]` @ file offset `0x00` = magic `0xABCDABCD`; `dword[1]` @ `0x04` = format version (`5` in files seen so far)
- **`header_ptr = file_start + 0x1c`** — every other offset below is relative to this, not file start
- `header_ptr+0x24`, `+0x28`, `+0x2c`, `+0x30` = **4 phase-table entries** (phases 0–3), each a byte offset (relative to `header_ptr`) to that phase's instruction stream start
- `header_ptr+0x38` = byte offset to the **expression pool** (itself then word-indexed: `pool_base + id*2`)
- `header_ptr+0x3c` = byte offset to the **string pool** (byte-indexed directly: `pool_base + message_id`, no scaling)

Validated exactly against `SIT101.CS`: phase0=488(word244)/phase1=490(word245)/phase2=626(word313)/phase3=1204(word602), expression pool=word619, string pool byte base=2012 — all matching the earlier brute-force results with zero discrepancy, and phase2's header entry (word313, i.e. relative word 69 from phase0) lands exactly on the `NEXT_PHASE` transition the disassembler already found live. Message #813 resolves to byte `2012+813=2825`, which is the real string `"With a small force like yours, stay together. That'll concentrate your firepower."`

The disassembler now parses this header directly by default (checks the magic, falls back to brute-force scanning only for `--hex` input or files without a valid header) — no more scanning needed for a real `.CS` file. `SYSTEM_MESSAGE`/`BRIEFING_TEXT` opcodes now print actual dialogue text pulled live from the file instead of a bare index number. Manual overrides (`--start`, `--expr-pool-base`, `--string-pool-base`, `--no-string-decode`) still work for edge cases.

### Jump/switch/while target resolution

Decompiling `Script_Op_IfElse` (and cross-checking `IfOnce`/`Switch`/`While`/`Goto`, all built the same pattern) pinned this down: a control-flow operand is a **word offset relative to the current phase's own start** — using the exact same `phase_table[phase]` field the header parser already reads, not the file start and not the current instruction. The target-address computation literally reuses `Script_GetInstructionPtrForPhase`'s formula with the *current* phase instead of an arbitrary one.

Validated against `SIT101.CS`: every resolved `IF`/`WHILE`/`GOTO` target lands exactly on a valid opcode, `SWITCH` case tables decode into well-formed `{count, default, case-offsets[], case-values[]}` structures, and the results are self-consistent — e.g. instruction `[110] GOTO instruction #97` lands exactly back on the loop's own condition check at `[97]`, and switch case `105->#85` lands on the very next instruction (the normal fallthrough case).

The disassembler now prints targets as `instruction #N`, matching the `[N]` labels already on every line, so branches can be followed directly by eye.

### Recursive/CFG-following disassembly

The single-linear-pass limitation above is now fixed: `disassemble_cfg()` runs a worklist starting from all 4 phase entry points and visits **every** control-flow successor of every instruction (both branches of `IF_ELSE`, every `SWITCH` case plus its default plus its exit, both paths of `WHILE`, `GOTO`'s target), not just fallthrough. A dead end in one branch (an unrecognized opcode, an out-of-range target) no longer stops the rest of the script from being decoded — it's reported inline and the walker moves on to its other queued branches.

Building this required re-deriving the exact successor semantics by decompile, which caught two real bugs in the first version:

1. **`IF_ELSE`'s successors were backwards.** Re-reading `Script_Op_IfElse` closely: the **false** path jumps to `op1`; the **true** path actually *falls through* to the instruction right after the operands, runs in place until address equals `op1`, then redirects to `op2` (the join point). The first version treated both `op1` and `op2` as jump targets and never added fallthrough as a successor — for `SIT101.CS`'s very first `IF_ELSE` (word 69), `op1` and `op2` happened to be numerically identical, so this silently discarded **80 real instructions** (the entire dialogue state-machine) until it was caught by comparing output before/after the CFG rewrite.
2. **`SWITCH` case match-values are themselves expression IDs**, evaluated via `Scenario_EvalExpression` inside `Script_Op_Switch` — not raw literals as originally displayed. Fixed to route them through the same expression renderer as everything else.

Both fixes are validated against `SIT101.CS`: the disassembler now decodes the mission end-to-end, including phase 3 content (win/lose narration, final objective-state changes) that was never reached before. Sanity-checked further after a report that the output "didn't seem right" (too complex/wordy) — traced one 15-token expression by hand against raw bytes and it matched the tool's rendering exactly; confirmed zero duplicate/phantom instructions (119 real instructions, each address visited exactly once); confirmed the decoded range (words 244-618) exactly abuts the expression pool start (word 619) with nothing left over; and confirmed the `IF_ELSE` "convergence safety-net" successor is provably inert (removing it produces byte-identical output). The complexity is real content, not a decoding artifact — this is a training mission's full trigger/dialogue script (tutorial hints, state-machine branching, win/lose logic), not enemy-unit AI behavior code (that lives elsewhere, e.g. `AI_BuildLoadoutForBudget`).

Known cosmetic limitation: the walker's fallthrough is "naive" (it doesn't track each block's specific designated join address as a hard stop), so it occasionally overruns a block's natural end by one `NOP` and strays one word into an adjacent `SWITCH`'s table *data* — this reliably self-halts immediately as an `UNKNOWN OPCODE` (real opcodes are all `>= 0x1000`; table data is small counts/bitmasks) and is harmless, just a few extra benign dead-end lines in the output rather than any mis-decoded instruction.

### Terser control-flow phrasing

The first version of jump/switch rendering over-explained the underlying mechanism ("IF true: run the next block in place until reaching X, then continue at Y ('then' branch's join point)") on every single line, which made even simple tutorial-hint conditionals hard to scan. Simplified to a compact, conventional if/goto style:

```
IF NOT(timer_expired(1)): GOTO #321  (else falls through, rejoins #321)
SWITCH var(1): {0->#85, 1->#165, 2->#241} else #288
WHILE set_unit_behavior(0, 4): loop below; exit -> #112 (500-iteration guard)
ONCE(cond, flag[1]): run block below -> #326
GOTO #97
```
Jump targets are now just `#N` (matching the `[N]` line labels) instead of a verbose `instruction #N (word-offset M from phase start)` on every reference.

### Spawn opcode operand correction

`SPAWN_UNIT`/`SPAWN_UNIT_GROUP`'s operands were originally mislabeled as coordinates. Decompiling `Script_SpawnUnitAtCoord`, `Combat_SpawnUnitByType`, `Script_SpawnAISquadAtCoord`, and `AI_BuildLoadoutForBudget` showed the real layout: a **unit-type ID** (single unit) or **AI point-budget** (squad), a **minimum weapon-range requirement** (single unit only), and the **hex location** as a separate resolved-var operand — not an `(x, y)` pair. `Combat_SpawnUnitByType` also revealed two special type-ID ranges worth calling out: **10–16** spawn with escorts, and **30/31** place a stationary structure/turret instead of a mobile unit (confirmed against `SIT101.CS`: unit-slot #1 spawns as type 30 — the mission's Cybrid structure objective — and unit-slot #3 spawns as type 14 with escorts, matching a drop-ship-delivered squad). The disassembler now prints type/range/hex-ref explicitly and annotates types 10–16 and 30/31 inline.

The single-unit "minimum weapon range" operand was initially mislabeled a "budget" too — decompiling `Herc_SelectWeaponForRange` clarified it: it filters the spawned unit's weapon slots down to ones whose own range stat meets or exceeds this value, then weighted-randomly picks among the survivors (falling back to an unfiltered pick if none qualify). It's a loadout-selection hint, not a spendable currency — unlike `SPAWN_UNIT_GROUP`'s point-budget (`AI_BuildLoadoutForBudget`), which genuinely is one (a running total spent down across randomly-rolled units/weapons, capped 200–2400 depending on difficulty).

### Phase-level indentation

The disassembler now tracks scenario-phase level live during the linear pass (bumped by `NEXT_PHASE`, pinned to 3 by `GOTO_PHASE_3`) and indents every instruction by that level, with a `=== PHASE N ===` separator on each transition. Against `SIT101.CS` this cleanly shows the mission's real structure: phase 0 is a single `NEXT_PHASE` bump, phase 1 is one-time setup (spawn drop ship/Cybrid/base, place markers, arm timer 1, zero out state variables), and phase 2 is the main per-turn loop — an ally-group scan (`WHILE`/`GetNextUnitInGroup`), a dialogue `SWITCH`/state machine driven entirely by script variables (`var(6)`, `var(7)`) and `timer_expired(1)`, ending in the long run of state-gated `display system/chat message` calls that narrate the mission.

### Auto-detecting the bytecode start

Pointing the disassembler at a raw `.CS` file directly (rather than a pre-sliced instruction-stream blob) doesn't work out of the box — the file's header/magic (`0xabcdabcd`), offset table, and trailing string pool/symbol table aren't valid opcodes, so decoding from byte 0 immediately fails (`(0xabcd) UNKNOWN OPCODE`).

To fix this, `cyberstorm_script_disasm.py` now **auto-detects the bytecode start** by default: it scans every word offset whose value matches a known opcode (main table or `0x20xx` message family), simulates a linear decode from each candidate, and picks the offset with the longest unbroken run of valid instructions (threshold: 15+ clean instructions to avoid false positives from coincidental opcode-looking values in the string pool). It prints which offset it picked and how many header/string bytes were skipped before the listing. `--start <word_offset>` overrides this manually (e.g. if you've found a second script blob at a different offset, or auto-detection picks the wrong run in a file with multiple embedded streams), and `--no-auto` disables detection entirely and starts at word 0 (or `--start`).

This was necessary because running the tool on `SIT101.CS` directly (instead of a manually pre-sliced 244-word-offset blob) surfaced the gap: the tool needs to find its own way into real files, not just decode blobs a human has already located by hand.

## Open follow-ups

1. Decode `UnitGroup_SetAttributeByIndex`'s switch to get real names for unit attribute IDs `1`, `7`, `8` (used by `SetUnitAttr1/8`, `SetGroupAttr1/8`, and `MoveUnit`).
2. Confirm exact operand wiring for `Script_Op_MarkHexObjective` (`0x8034`) — the decompiler didn't clearly show all 3 extra operands reaching the native call.
3. Clarify `Script_Op_StoreRawToPhaseTable` (`0x10b2`) — the only opcode that stores a literal instead of an evaluated expression.
4. ~~Write an actual bytecode disassembler for the game's mission-script data files~~ — done: `cyberstorm_script_disasm.py`, validated against `SIT101.CS`.
5. Decode the header/section-table format in `.CS` files properly, so jump/switch/block offsets resolve to absolute positions instead of raw numbers, and so the bytecode start is computed structurally instead of found by scanning.
6. Decode the string-pool format so `SYSTEM_MESSAGE`/`BRIEFING_TEXT` opcodes can print actual dialogue text instead of just an index number.
7. ~~Decode expression operands instead of showing an opaque `<expr#N>` id~~ — done: expression pool located and decoded (see "Expression pool decoding" above). Remaining: pin down exact semantics of `group_condition`/`group_condition_2`/`any_group_alive`/`all_group_alive` (currently generic placeholder names).
8. ~~Confirm the pool-base formula against the file's actual header bytes~~ — done: see "Real .CS file header, decoded exactly" above. Confirmed the expression and string pools are genuinely global (single fixed header fields, not phase-indexed), while the instruction stream is phase-indexed (4 separate entries).
9. ~~Resolve jump/block/switch targets to absolute positions~~ — done: see "Jump/switch/while target resolution" above. Targets are phase-start-relative and print as `instruction #N`.
10. ~~Upgrade to a recursive/CFG-following disassembler~~ — done: see "Recursive/CFG-following disassembly" above. Full mission (all 4 phases) now decodes.
11. (Minor/cosmetic) Give each block scope (the body of an `IF_ONCE`/`IF_ELSE`/`WHILE`/`SWITCH` case) a hard fallthrough stop at its own designated join address, instead of letting naive per-instruction fallthrough run until something fails to decode — would eliminate the handful of benign "ran one `NOP` past the join point into adjacent switch-table data" dead-end lines.
