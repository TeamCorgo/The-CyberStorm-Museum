# SIT103.CS

```text
; warning: file length 8607 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=264, phase1=265, phase2=997, phase3=1364
; 4039 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    1] set script variable #5 = 40
    [    4] set script variable #2 = stat(7)
    [    7] set script variable #1 = stat(8)
    [   10] set script variable #7 = stat(0)
    [   13] set script variable #8 = random_below(360)
    [   16] do nothing (message no-op)
    [   17] (UNKNOWN OPCODE 0x00c0) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  733] IF NOT(timer_expired(1)): GOTO #1094  (else falls through, rejoins #1094)
        [  737] do nothing (message no-op)
        [  738] (UNKNOWN OPCODE 0x0294) - dead end, not decoded further (other branches continue independently)
        [ 1094] ONCE(any_group_alive(1), flag[1]): run block below -> #1099
        [ 1098] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 1099] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 1100] advance to the next scenario phase (no effect if already at the last phase)
            [ 1101] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
