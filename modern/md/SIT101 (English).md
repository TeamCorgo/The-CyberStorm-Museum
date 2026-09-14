# SIT101.CS

```text
; warning: file length 4737 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=244, phase1=245, phase2=313, phase3=602
; 2124 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    1] set hex-var #3 = the point 180 steps along the path toward 25
    [    5] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #3, remember it as unit-slot #1
    [   10] place an objective marker at hex-var #3 with params (4 + stat(4)), 6, 8, 50
    [   16] place an objective marker at hex-var #3 with params (2 + stat(4)), 4, 6, 100
    [   22] place an objective marker at hex-var #4 with params (2 + stat(4)), 4, 6, 100
    [   28] set hex-var #2 = the point 0 steps along the path toward 21
    [   32] spawn a unit of type 5 (minimum weapon range 20) at hex-ref #2, remember it as unit-slot #2
    [   37] order unit-slot #2 to move, speed/priority 0, destination-type tag 0, destination arg 0
    [   42] set attribute #8 of unit-slot #2 to 1
    [   45] set hex-var #4 = the point 1 steps along the path toward 100
    [   49] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #4, remember it as unit-slot #3
    [   54] arm timer #1 to expire 1 turn(s) from now
    [   57] set script variable #1 = 0
    [   60] set script variable #2 = 0
    [   63] set script variable #3 = 1
    [   66] display system/chat message #252: "The remaining structure is in the center of your mini map. When you have moved all of your Hercs press the 'End Turn' button."
    [   68] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [   69] IF NOT(timer_expired(1)): GOTO #321  (else falls through, rejoins #321)
        [   73] set script variable #2 = (var(2) + 1)
        [   76] set script variable #5 = 0
        [   79] arm timer #1 to expire 1 turn(s) from now
        [   82] SWITCH var(1): {0->#85, 1->#165, 2->#241} else #288
        [   85] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #4
        [   88] set script variable #6 = 0
        [   91] set script variable #7 = 0
        [   94] WHILE set_unit_behavior(0, 4): loop below; exit -> #112 (500-iteration guard)
        [   97] IF NOT(group_condition_ref(2, 4)): GOTO #104  (else falls through, rejoins #107)
        [  101] set script variable #7 = 1
        [  104] set script variable #6 = 1
        [  107] advance unit-slot #4 to the next unit in group #1 after the current one
        [  110] GOTO #97
        [  112] SWITCH (var(2) - var(3)): {0->#115, 1->#132, 2->#139, 3->#146} else #153
        [  115] IF NOT((var(6) == 0)): GOTO #123  (else falls through, rejoins #131)
        [  119] display system/chat message #378: "Start moving towards the center of the target zone shown on your mini map."
        [  121] display system/chat message #453: "Just select a Bioderm and point to where you want it to move."
        [  123] IF NOT((var(7) == 1)): GOTO #129  (else falls through, rejoins #131)
        [  127] display system/chat message #515: "You can move both your Hercs each turn. Cycle through them with the arrows near the pilot's face."
        [  129] display system/chat message #613: "Good job moving out!"
        [  131] do nothing
        [  132] IF NOT((var(6) == 0)): GOTO #138  (else falls through, rejoins #138)
        [  136] display system/chat message #634: "Get that Fast Shadow moving! He'll be able to scout ahead and locate potential opponents."
        [  138] do nothing
        [  139] IF NOT((var(6) == 0)): GOTO #145  (else falls through, rejoins #145)
        [  143] display system/chat message #724: "Move out! Better to engage a possible threat than give them a shot at your Herc Carrier."
        [  145] do nothing
        [  146] IF NOT((group_condition_ref_2(2, 1) && (var(6) > 0))): GOTO #152  (else falls through, rejoins #152)
        [  150] display system/chat message #813: "With a small force like yours, stay together. That'll concentrate your firepower."
        [  152] do nothing
        [  153] do nothing
        [  154] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  164] do nothing
        [  165] set script variable #8 = 0
        [  168] set script variable #9 = 0
        [  171] IF NOT(group_condition(3)): GOTO #178  (else falls through, rejoins #185)
        [  175] set script variable #8 = 1
        [  178] IF NOT(((set_unit_behavior(9, 3) > 0) || (set_unit_behavior(5, 3) < 100))): GOTO #185  (else falls through, rejoins #185)
        [  182] set script variable #9 = 1
        [  185] IF NOT((var(8) == 0)): GOTO #235  (else falls through, rejoins #240)
        [  189] SWITCH (var(2) - var(3)): {1->#192, 2->#199, 3->#208, 4->#217} else #224
        [  192] IF NOT((var(9) == 0)): GOTO #198  (else falls through, rejoins #198)
        [  196] display system/chat message #895: "Destroy the turret by selecting a herc and placing the cursor over the the turret. When it's a bullseye, double-left click."
        [  198] do nothing
        [  199] IF NOT((var(9) == 0)): GOTO #205  (else falls through, rejoins #207)
        [  203] display system/chat message #1019: "Are you having problems firing or just following orders?! Shoot that turret!"
        [  205] display system/chat message #1096: "Concentrate all of your firepower on one side of the turret."
        [  207] do nothing
        [  208] IF NOT((var(9) == 1)): GOTO #214  (else falls through, rejoins #216)
        [  212] display system/chat message #1157: "First drop one of structure's shields with your lasers, then pepper it with autocannons and missiles."
        [  214] display system/chat message #1259: "If you can't hit a stationary target, we've got a problem. Consult your training video for a refresher."
        [  216] do nothing
        [  217] IF NOT((var(9) == 1)): GOTO #223  (else falls through, rejoins #223)
        [  221] display system/chat message #1363: "Get both your Hercs to fire every weapon every round. No need to hold back!"
        [  223] do nothing
        [  224] do nothing
        [  225] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  235] display system/chat message #1439: "Good job destroying the turret. Return to your Herc Carrier for evacuation."
        [  237] set script variable #5 = 1
        [  240] do nothing
        [  241] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [  244] set script variable #10 = set_unit_behavior(8, 6)
        [  247] IF NOT((var(10) == 1)): GOTO #288  (else falls through, rejoins #288)
        [  251] IF NOT(!group_condition(6)): GOTO #285  (else falls through, rejoins #288)
        [  255] SWITCH (var(2) - var(3)): {1->#258, 2->#270, 4->#273} else #276
        [  258] IF NOT((set_unit_behavior(7, 6) != 6)): GOTO #269  (else falls through, rejoins #269)
        [  262] order unit-slot #6 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [  267] display system/chat message #1515: "We've detected a Cybrid! It's heading your way! Either get back to the Herc Carrier, or fight it!"
        [  269] do nothing
        [  270] display system/chat message #1613: "Your mission is accomplished. You don't need to kill the Cybrid to get your bonus!"
        [  272] do nothing
        [  273] display system/chat message #1696: "Concentrate your firepower on that Cybrid!"
        [  275] do nothing
        [  276] do nothing
        [  277] (UNKNOWN OPCODE 0x0003) - dead end, not decoded further (other branches continue independently)
        [  285] set script variable #5 = 1
        [  288] IF NOT((var(1) > 5)): GOTO #295  (else falls through, rejoins #295)
        [  292] set script variable #4 = 1
        [  295] do nothing
        [  296] (UNKNOWN OPCODE 0x0003) - dead end, not decoded further (other branches continue independently)
        [  304] IF NOT((var(4) > 0)): GOTO #311  (else falls through, rejoins #321)
        [  308] set script variable #1 = 999
        [  311] IF NOT((var(5) > 0)): GOTO #321  (else falls through, rejoins #321)
        [  315] set script variable #3 = var(2)
        [  318] set script variable #1 = (var(1) + 1)
        [  321] ONCE((((var(1) == 999) || (!all_group_alive(2) && group_condition(3))) || !all_group_alive(1)), flag[1]): run block below -> #326
        [  325] jump straight to scenario phase 3 (end-game/resolution phase)
        [  326] ONCE(group_condition_ref_2(1, 1), flag[2]): run block below -> #348
        [  330] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [  333] IF NOT((set_unit_behavior(8, 7) == 1)): GOTO #348  (else falls through, rejoins #348)
        [  337] IF NOT(!group_condition(7)): GOTO #348  (else falls through, rejoins #348)
        [  341] order unit-slot #7 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [  346] display system/chat message #1739: "We've detected a Cybrid! It's heading your way! Either get back to the Herc Carrier, or fight it!"
        [  348] ONCE(group_condition_ref_2(3, 1), flag[3]): run block below -> #357
        [  352] set script variable #1 = (var(1) + 1)
        [  355] display system/chat message #1837: "This turret is all that's left of the Cybrid's Mox Draconis mining facility. "
        [  357] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [  358] IF NOT((!any_group_alive(1) && group_condition(3))): GOTO #369  (else falls through, rejoins #374)
            [  362] play sound effect 35
            [  364] display system/chat message #1915: "Objective Achieved.  You have destroyed the remaining structure at the Mox Draconis facility.  Return to base to prepare for your next assignment."
            [  366] set the objective state of unit 1 to 1
            [  369] display system/chat message #2062: "The mission was a failure. Unitech does not tolerate failure.  Unless you have sufficient net worth to attempt another mission, you will be relieved of command."
            [  371] set the objective state of unit 1 to 2
            [  374] advance to the next scenario phase (no effect if already at the last phase)
            [  375] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
