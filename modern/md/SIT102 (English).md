# SIT102.CS

```text
; warning: file length 2307 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=224, phase1=225, phase2=276, phase3=421
; 929 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    1] set hex-var #4 = the point 180 steps along the path toward 28
    [    5] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #4, remember it as unit-slot #1
    [   10] place an objective marker at hex-var #4 with params (4 + stat(4)), 6, 8, 50
    [   16] place an objective marker at hex-var #4 with params (2 + stat(4)), 4, 6, 100
    [   22] set script variable #1 = 200
    [   25] set hex-var #2 = the point 1 steps along the path toward 0
    [   29] set hex-var #3 = the point 10 steps along the path toward 10
    [   33] spawn an AI squad with point-budget 5 at hex-ref #2, remember all its units as group #3
    [   37] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 1
    [   42] spawn an AI squad with point-budget 3 at hex-ref #2, remember all its units as group #3
    [   46] order every unit in group #3 to move, speed/priority 1, destination-type tag 2, destination arg 2
    [   51] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [   52] set script variable #2 = 0
        [   55] set script variable #3 = 0
        [   58] ONCE(1, flag[1]): run block below -> #81
        [   62] set script variable #4 = 0
        [   65] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #2
        [   68] WHILE set_unit_behavior(0, 2): loop below; exit -> #79 (500-iteration guard)
        [   71] set script variable #4 = (var(4) + 1)
        [   74] advance unit-slot #2 to the next unit in group #2 after the current one
        [   77] GOTO #71
        [   79] do nothing (message no-op)
        [   80] (UNKNOWN OPCODE 0x0072) - dead end, not decoded further (other branches continue independently)
        [   81] IF NOT(timer_expired(1)): GOTO #191  (else falls through, rejoins #191)
        [   85] arm timer #1 to expire 1 turn(s) from now
        [   88] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #3
        [   91] WHILE set_unit_behavior(0, 3): loop below; exit -> #101 (500-iteration guard)
        [   94] do nothing (message no-op)
        [   95] (UNKNOWN OPCODE 0x0108) - dead end, not decoded further (other branches continue independently)
        [  101] set script variable #2 = 0
        [  104] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #3
        [  107] WHILE set_unit_behavior(0, 3): loop below; exit -> #118 (500-iteration guard)
        [  110] set script variable #2 = (var(2) + 1)
        [  113] advance unit-slot #3 to the next unit in group #2 after the current one
        [  116] GOTO #110
        [  118] do nothing (message no-op)
        [  119] (UNKNOWN OPCODE 0x0127) - dead end, not decoded further (other branches continue independently)
        [  191] ONCE(any_group_alive(1), flag[2]): run block below -> #196
        [  195] jump straight to scenario phase 3 (end-game/resolution phase)
        [  196] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [  197] set the objective state of unit 1 to 1
            [  200] IF NOT(any_group_alive(1)): GOTO #206  (else falls through, rejoins #208)
            [  204] display system/chat message #462: "The training mission was a failure. The Cybrid destroyed your Hercs. "
            [  206] play sound effect 35
            [  208] advance to the next scenario phase (no effect if already at the last phase)
            [  209] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
