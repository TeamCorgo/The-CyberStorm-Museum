# .CS File Format Specification

## Overview

A `.CS` file is a compiled mission script. In plain terms, it's the "director's script" for a single mission: it tells the game when to spawn units, when to move them, what dialogue or on-screen messages to show, and when the mission has been won or lost. It is stored as a small custom bytecode program — a compact list of numbered instructions — rather than as human-readable text, so the game can execute it quickly without re-parsing anything.

The mission logic is split into two cooperating layers:

- A **control-flow layer** (branch, loop, spawn-unit, move-unit, play-sound, and similar "do something" instructions).
- An **expression layer** — a small calculator used to compute values and yes/no conditions (comparisons, arithmetic, variable lookups) that the control-flow instructions consume.

Think of the control-flow layer as the sentences of the script and the expression layer as the arithmetic inside those sentences (e.g. "if `enemy count > 3`, then...").

## How instructions are found

Both layers use the same lookup mechanism: a fixed list of known instruction codes, paired one-to-one with a list of the routines that carry each one out. To run an instruction, the engine scans the code list for a match and jumps to the paired handler at that position. If nothing matches, execution falls through to a default/error handler. This is a standard technique for a compact, table-driven instruction set — the code doesn't need a big cascading if/else chain to dispatch tens of instruction types.

Every instruction code carries its own operand count baked into it (specifically, the low 4 bits of the code equal the number of following data values it consumes) — verified across the entire instruction set. Because of that, a reader can walk the instruction stream and always know exactly how many bytes to skip to reach the next instruction, without needing any other bookkeeping.

## Main instruction set

Grouped by category. "Semantics" describes what running the instruction does; operand numbers (op0, op1, …) refer to the values following the instruction code in the stream.

### Control flow

| Code | Name | Semantics |
|---|---|---|
| `0x1013` | IF_ONCE | Evaluate a condition (op0); if true and a per-instance "already ran" flag (op1) is still unset, run a sub-block once (op2 = length), then set the flag. |
| `0x1023` | IF_ELSE | If the condition is false, jump to the "else" block (op1); if true, fall through and run in place until reaching the join point (op2). |
| `0x1032` | SWITCH | Evaluate a key value, scan a list of (case-value, case-offset) pairs that follow, and jump to the matching case or the default. |
| `0x1042` | WHILE | Loop while a condition (op0) holds, running the body in place. Guarded by a hard 500-iteration limit to catch runaway loops. |
| `0x1051` | GOTO | Unconditional jump to op0, no side effects. |
| `0x1060` | NEXT_PHASE | Advance the mission's phase counter by one (clamped once phase reaches 2). |
| `0x1070` | GOTO_PHASE_3 | Force the phase counter to 3 outright. Also used by the message/fallback path on end-of-turn. |
| `0x1080` | NOP | No operation. |

### Variables / objectives / phase table

| Code | Name | Semantics |
|---|---|---|
| `0x1092` | SET_UNIT_OBJECTIVE | Sets a unit's current objective state, evaluated from op0/op1. |
| `0x10a2` | SET_VARIABLE | Writes an evaluated value (op1) into script variable slot op0. |
| `0x10b2` | STORE_RAW_TO_PHASE_TABLE | Writes a **raw literal** (not evaluated) into a per-phase table. The only instruction that stores a literal instead of a computed value — full semantics unconfirmed. |
| `0x7013` | SET_CONDITION_REF | Writes a condition descriptor (a variable reference plus an expression offset) into condition-slot op0. Read back later by the condition-query instructions below. |

### Audio

| Code | Name | Semantics |
|---|---|---|
| `0x2031` | PLAY_SOUND | Plays sound effect op0. |
| `0x2041` | PLAY_MUSIC | Plays music track op0. |

### Timers

| Code | Name | Semantics |
|---|---|---|
| `0x3012` | SET_TIMER | Sets timer slot op0 to expire op1 turns from the current turn. |
| `0x3021` | CLEAR_TIMER | Clears timer slot op0. |

### Unit control (single unit, plus group-broadcast variants)

| Code | Name | Semantics |
|---|---|---|
| `0x4014` | SPAWN_UNIT | Spawns a unit into handle-slot op0. **op1 is a unit-type ID, op2 is a minimum weapon-range requirement, op3 is the spawn location** (a resolved location reference, not a raw x/y pair). Unit types in one sub-range spawn with an escort group; a separate sub-range places a stationary structure/turret instead of a mobile unit (how missions place static objective buildings). The range operand filters the unit's weapon loadout down to options meeting that minimum range, then makes a weighted-random pick among the survivors — a loadout-selection hint, not a spendable budget. |
| `0x4024` | MOVE_UNIT | Issues a move order for a single unit to a location or unit-relative destination. |
| `0x4032` | SET_UNIT_ATTR_1 | Sets unit attribute 1 to an evaluated value. Attribute meaning not fully identified. |
| `0x4042` | SET_UNIT_ATTR_8 | Sets unit attribute 8 to an evaluated value. Attribute meaning not fully identified. |
| `0x4052` | GET_FIRST_UNIT_IN_GROUP | Sets handle-slot op0 to the first live unit in group op1 (ally, enemy, or an indexed group). |
| `0x4062` | GET_NEXT_UNIT_IN_GROUP | Advances handle-slot op0 to the next unit after the current one in group op1. |
| `0x4073` | GET_NEAREST_UNIT_IN_GROUP | Sets handle-slot op0 to the unit in group op1 nearest to location op2. |
| `0x4082` | SET_UNIT_HANDLE_VAR | Generic scalar assignment: handle-slot op0 = evaluated value op1. |
| `0x5013` | SPAWN_UNIT_GROUP | Spawns a squad into a group table. **op1 is an AI point-budget** (spent down across a randomly rolled loadout of units), **op2 is the spawn location**. |
| `0x5024` | MOVE_UNIT_GROUP | Group version of MOVE_UNIT. |
| `0x5032` | SET_GROUP_ATTR_1 | Broadcasts attribute 1 to every unit in group op0. |
| `0x5042` | SET_GROUP_ATTR_8 | Broadcasts attribute 8 to every unit in group op0. |

### Location / waypoint arithmetic

Locations are stored as x/y pairs in a small variable table.

| Code | Name | Semantics |
|---|---|---|
| `0x6013` | SET_LOCATION | location-slot op0 = {op1, op2}. |
| `0x6022` | COPY_LOCATION | location-slot op0 = *op1 (copies another resolved location). |
| `0x6032` | ADD_LOCATION | Vector-adds into location-slot op0. |
| `0x6042` | SUB_LOCATION | Vector-subtracts into location-slot op0. |
| `0x6053` | GET_LOCATION_ALONG_PATH | location-slot op0 = a point some distance (op1) along the path toward destination op2 — likely used for staged movement. |

### Objectives / fog / messaging

| Code | Name | Semantics |
|---|---|---|
| `0x8015` | PLACE_OBJECTIVE_MARKER | Places an objective marker at a resolved location, with four additional evaluated parameters. |
| `0x8024` | UPDATE_FOG_TWO_CELLS | Updates the fog-of-war state around two given locations. |
| `0x8034` | MARK_OBJECTIVE | Marks a location as an objective; wiring of three additional operands not fully confirmed. |
| — | MESSAGE_OR_DEFAULT | The dispatcher's default/fallback case. Doubles as a secondary handler for a family of "message" codes not present in the main table (see below). Anything unrecognized here triggers a fatal error. |

### Secondary message family (outside the main table)

| Code | Name | Operands | Semantics |
|---|---|---|---|
| `0x2010` | MSG_NOP | 0 | No operation. |
| `0x2020` | SYSTEM_MESSAGE | 1 | Displays a chat/system message (string-table index op0). |
| `0x2050` | BRIEFING_TEXT | 1 | Displays briefing text (string-table index op0). |
| `0x2060` | END_TURN | 1 | Ends the current turn, then forces phase 3 (equivalent to GOTO_PHASE_3). |

## Expression calculator

Used everywhere the instruction set above needs a computed value or a yes/no condition. Same code/handler dispatch mechanism as the main instruction set, with a clean grouping by leading digit: unary ops, binary arithmetic/bitwise ops, comparisons, logical ops, and a variable/constant load.

| Code | Operation |
|---|---|
| `0x1011` | Negate |
| `0x1021` | Bitwise complement |
| `0x1031` | Logical not (`x == 0`) |
| `0x2012` | Add |
| `0x2022` | Subtract |
| `0x2032` | Multiply |
| `0x2042` | Divide (signed; division by zero is a fatal error) |
| `0x2052` | Modulo (signed remainder) |
| `0x2062` | Bitwise AND |
| `0x2072` | Bitwise XOR |
| `0x2082` | Bitwise OR |
| `0x2092` | Shift left |
| `0x20a2` | Arithmetic shift right |
| `0x3012` | Less than |
| `0x3022` | Less than or equal |
| `0x3032` | Greater than |
| `0x3042` | Greater than or equal |
| `0x3052` | Equal |
| `0x3062` | Not equal |
| `0x4012` | Logical AND |
| `0x4022` | Logical OR |
| `0xa011` | Load — resolves a variable, constant, or stat operand |
| — | Default/fallback — unknown opcode, fatal error |

A further family of query codes (roughly `0xB0xx`/`0xC0xx`) layers condition/lookup primitives on top of this calculator: stat lookups, a random-number draw (backed by a simple pseudo-random generator), a weighted-random pick, and the mission-condition mini-language — turn/timer comparisons, unit-group state checks (ally/enemy/all alive), distance checks, and "is this location an objective" checks.

## Runtime context layout

The instruction and expression layers share a per-mission context record with roughly this shape (offsets in bytes):

| Offset | Meaning |
|---|---|
| `+0x8` | Instruction stream base |
| `+0xc` | Phase-block table pointer |
| `+0x10` | Numeric variable table |
| `+0x14` | Timer/deadline array |
| `+0x18` | Location variable table |
| `+0x1c` | Condition descriptor table |
| `+0x20` | Unit-handle variable table |
| `+0x24` | Unit-group table |
| `+0x28` | "Already ran once" flags array |
| `+0x2c`/`+0x30` | Current turn counter |
| `+0x34` | Current phase index |

## File layout

A `.CS` file begins with a fixed magic value, followed by a small header of monotonically increasing section offsets, then the instruction stream(s), an expression pool, and a trailing string pool holding the mission's dialogue/message text.

| Field | Description |
|---|---|
| Magic | Fixed 4-byte signature identifying the file, followed by a format-version value. |
| Phase table | Four entries (one per mission phase), each the byte offset — relative to the header — of that phase's instruction stream start. |
| Expression pool offset | Byte offset to the pool of compiled expressions, itself word-indexed. |
| String pool offset | Byte offset to the string pool, indexed directly by message/string ID with no extra scaling. |

Each entry in the expression pool is either a bare immediate constant (when its header word is zero) or a small stack-machine program: a bitmask word saying which of the following tokens are operators versus literal values, followed by the tokens themselves in postfix order.

Control-flow operands that represent jump targets (IF/WHILE/GOTO/SWITCH) are word offsets **relative to the current phase's own start**, using the same phase-table entry the header itself provides — not the file start, and not the current instruction.

### IF_ELSE successor semantics

The false path jumps directly to the "else" offset. The true path does **not** jump — it falls through and executes the block in place until the instruction pointer reaches the else-offset, at which point control redirects to the join-point offset that follows it. A naive reader that treats both operands as unconditional jump targets will silently skip the entire "true" branch.

### SWITCH case values

Case match-values inside a SWITCH's table are themselves expression-pool references, not raw literals — they must be evaluated the same way as any other operand before comparing against the key.

## Known limitations / open items

1. Attribute IDs 1, 7, and 8 (used by the single-unit and group attribute instructions, and by MOVE_UNIT) have not been decoded to their real meanings.
2. The exact operand wiring for MARK_OBJECTIVE's three extra parameters is not fully confirmed.
3. STORE_RAW_TO_PHASE_TABLE remains the only instruction whose semantics (storing a literal rather than a computed value) are not well understood.
4. The `group_condition` / `any_group_alive` / `all_group_alive` family of condition-query primitives are identified by behavior but not yet given precise, confirmed names.
5. A block's natural end (the join point of an IF/WHILE/SWITCH case) is not tracked as a hard stop during a straight-line walk of the instruction stream — a walker can occasionally overrun by one no-op instruction into the tail of an adjacent SWITCH's case table before self-halting on an invalid code. This is cosmetic and does not affect correctly-decoded instructions.
