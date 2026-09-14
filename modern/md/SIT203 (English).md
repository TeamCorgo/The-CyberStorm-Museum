# SIT203.CS

```text
; warning: file length 52205 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=654, phase1=667, phase2=1423, phase3=7240
; 25448 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = 0
[    3] set script variable #2 = (random_below(4) + 3)
[    6] set script variable #4 = 500
[    9] set script variable #5 = random_below(7)
[   12] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   13] IF NOT((var(7) == 0)): GOTO #20  (else falls through, rejoins #20)
    [   17] set script variable #7 = (random_below(var(11)) + var(12))
    [   20] set script variable #13 = (stat(0) / 1)
    [   23] set script variable #13 = (var(13) - 200)
    [   26] IF NOT((stat(10) < (stat(11) / 3))): GOTO #36  (else falls through, rejoins #39)
    [   30] set script variable #13 = ((stat(0) * 2) / 1)
    [   33] set script variable #13 = (var(13) - 200)
    [   36] set script variable #13 = ((stat(0) / 3) / 1)
    [   39] set script variable #13 = (var(13) - 200)
    [   42] set script variable #13 = (var(13) - 200)
    [   45] set script variable #14 = 8192
    [   48] WHILE (var(14) > 500): loop below; exit -> #63 (500-iteration guard)
    [   51] IF NOT((var(13) < var(14))): GOTO #58  (else falls through, rejoins #58)
    [   55] set script variable #9 = (var(9) + 1)
    [   58] set script variable #14 = (var(14) / 2)
    [   61] GOTO #51
    [   63] set script variable #15 = (26 - random_below((var(9) + 1)))
    [   66] set script variable #16 = (random_below(360) - 180)
    [   69] set hex-var #6 = the point var(16) steps along the path toward var(15)
    [   73] define condition-slot #5 as (variable-ref 6, expression-offset 156)
    [   77] set script variable #17 = 1
    [   80] set script variable #18 = 179
    [   83] set hex-var #5 = the point var(18) steps along the path toward var(17)
    [   87] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #5, remember it as unit-slot #3
    [   92] set attribute #8 of unit-slot #3 to 999
    [   95] set hex-var #9 = (0, 0)
    [   99] set script variable #19 = set_objective_at_hex(6)
    [  102] place an objective marker at hex-var #5 with params ((random_below(3) + var(19)) - 1), 6, 8, 50
    [  108] arm timer #3 to expire 2 turn(s) from now
    [  111] set script variable #20 = 0
    [  114] set script variable #20 = (var(20) + 1)
    [  117] IF NOT((var(13) > 100)): GOTO #138  (else falls through, rejoins #141)
    [  121] set script variable #10 = (var(13) / 2)
    [  124] IF NOT((var(10) < 100)): GOTO #131  (else falls through, rejoins #138)
    [  128] set script variable #10 = 100
    [  131] IF NOT((var(10) > 1300)): GOTO #138  (else falls through, rejoins #138)
    [  135] set script variable #10 = 1300
    [  138] set script variable #10 = var(13)
    [  141] set script variable #13 = (var(13) - var(10))
    [  144] set hex-var #1 = the point var(16) steps along the path toward (var(15) - 3)
    [  148] define condition-slot #1 as (variable-ref 1, expression-offset 260)
    [  152] spawn an AI squad with point-budget var(10) at hex-ref #1, remember all its units as group #3
    [  156] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 1
    [  161] set attribute #8 to 33 for every unit in group #3
    [  164] IF NOT((stat(10) < (stat(11) / 3))): GOTO #173  (else falls through, rejoins #173)
    [  168] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #1, remember it as unit-slot #2
    [  173] IF NOT((var(13) > 0)): GOTO #236  (else falls through, rejoins #236)
    [  177] set script variable #20 = (var(20) + 1)
    [  180] IF NOT((var(13) > 100)): GOTO #201  (else falls through, rejoins #204)
    [  184] set script variable #10 = (var(13) / 2)
    [  187] IF NOT((var(10) < 100)): GOTO #194  (else falls through, rejoins #201)
    [  191] set script variable #10 = 100
    [  194] IF NOT((var(10) > 1200)): GOTO #201  (else falls through, rejoins #201)
    [  198] set script variable #10 = 1200
    [  201] set script variable #10 = var(13)
    [  204] set script variable #13 = (var(13) - var(10))
    [  207] set hex-var #2 = the point ((var(16) - 40) - random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  211] define condition-slot #2 as (variable-ref 2, expression-offset 352)
    [  215] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #2, remember all its units as group #3
    [  219] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 2
    [  224] set attribute #8 to 79 for every unit in group #3
    [  227] IF NOT((stat(10) < (stat(11) / 3))): GOTO #236  (else falls through, rejoins #236)
    [  231] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #2, remember it as unit-slot #2
    [  236] IF NOT((var(13) > 0)): GOTO #299  (else falls through, rejoins #299)
    [  240] set script variable #20 = (var(20) + 1)
    [  243] IF NOT((var(13) > 100)): GOTO #264  (else falls through, rejoins #267)
    [  247] set script variable #10 = (var(13) / 2)
    [  250] IF NOT((var(10) < 100)): GOTO #257  (else falls through, rejoins #264)
    [  254] set script variable #10 = 100
    [  257] IF NOT((var(10) > 1200)): GOTO #264  (else falls through, rejoins #264)
    [  261] set script variable #10 = 1200
    [  264] set script variable #10 = var(13)
    [  267] set script variable #13 = (var(13) - var(10))
    [  270] set hex-var #3 = the point ((var(16) + 40) + random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  274] define condition-slot #3 as (variable-ref 3, expression-offset 446)
    [  278] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #3, remember all its units as group #3
    [  282] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 3
    [  287] set attribute #8 to 143 for every unit in group #3
    [  290] IF NOT((stat(10) < (stat(11) / 3))): GOTO #299  (else falls through, rejoins #299)
    [  294] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #3, remember it as unit-slot #2
    [  299] IF NOT((var(13) > 0)): GOTO #362  (else falls through, rejoins #362)
    [  303] set script variable #20 = (var(20) + 1)
    [  306] IF NOT((var(13) > 100)): GOTO #327  (else falls through, rejoins #330)
    [  310] set script variable #10 = (var(13) / 2)
    [  313] IF NOT((var(10) < 100)): GOTO #320  (else falls through, rejoins #327)
    [  317] set script variable #10 = 100
    [  320] IF NOT((var(10) > 1200)): GOTO #327  (else falls through, rejoins #327)
    [  324] set script variable #10 = 1200
    [  327] set script variable #10 = var(13)
    [  330] set script variable #13 = (var(13) - var(10))
    [  333] set hex-var #4 = the point ((var(16) - 40) - random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  337] define condition-slot #4 as (variable-ref 4, expression-offset 540)
    [  341] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #4, remember all its units as group #3
    [  345] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 4
    [  350] set attribute #8 to 271 for every unit in group #3
    [  353] IF NOT((stat(10) < (stat(11) / 3))): GOTO #362  (else falls through, rejoins #362)
    [  357] spawn a unit of type 13 (spawns with escorts) (minimum weapon range 12) at hex-ref #4, remember it as unit-slot #2
    [  362] set script variable #21 = 0
    [  365] IF NOT((var(13) > 50)): GOTO #485  (else falls through, rejoins #485)
    [  369] WHILE (var(13) > 50): loop below; exit -> #485 (500-iteration guard)
    [  372] IF NOT((var(13) > 200)): GOTO #393  (else falls through, rejoins #396)
    [  376] set script variable #10 = (var(13) / 2)
    [  379] IF NOT((var(10) < 200)): GOTO #386  (else falls through, rejoins #393)
    [  383] set script variable #10 = 200
    [  386] IF NOT((var(10) > 1300)): GOTO #393  (else falls through, rejoins #393)
    [  390] set script variable #10 = 1300
    [  393] set script variable #10 = var(13)
    [  396] set script variable #13 = (var(13) - var(10))
    [  399] set script variable #22 = random_below(100)
    [  402] IF NOT(((var(22) < 40) || (var(20) >= 4))): GOTO #438  (else falls through, rejoins #483)
    [  406] set script variable #23 = 31
    [  409] set script variable #24 = (random_below(180) - 90)
    [  412] set hex-var #7 = the point var(24) steps along the path toward var(23)
    [  416] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  420] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  425] set script variable #21 = (6 + random_below(10))
    [  428] IF NOT((var(21) > var(8))): GOTO #435  (else falls through, rejoins #435)
    [  432] set script variable #8 = var(21)
    [  435] set attribute #1 to var(21) for every unit in group #3
    [  438] set script variable #20 = (var(20) + 1)
    [  441] IF NOT((var(22) < 70)): GOTO #464  (else falls through, rejoins #483)
    [  445] set script variable #25 = 31
    [  448] set script variable #26 = (random_below(180) - 90)
    [  451] set hex-var #7 = the point var(26) steps along the path toward var(25)
    [  455] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  459] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  464] set script variable #27 = 31
    [  467] set script variable #28 = (random_below(180) - 90)
    [  470] set hex-var #7 = the point var(28) steps along the path toward var(27)
    [  474] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  478] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  483] GOTO #372
    [  485] arm timer #2 to expire 1 turn(s) from now
    [  488] IF NOT((stat(11) < 3)): GOTO #494  (else falls through, rejoins #494)
    [  492] display system/chat message #306: "Warning: Ore extractors disengaged. You may engage extractors in the internals display."
    [  494] IF NOT((stat(11) > 2)): GOTO #768  (else falls through, rejoins #768)
    [  498] set script variable #29 = random_below(100)
    [  501] IF NOT(((var(6) == 0) && (var(29) < 100))): GOTO #768  (else falls through, rejoins #768)
    [  505] set script variable #6 = (var(6) + 1)
    [  508] store the literal value 394 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  511] SWITCH 7: {0->#514, 1->#518, 2->#522, 7->#526} else #530
    [  514] store the literal value 395 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  517] do nothing
    [  518] store the literal value 430 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  521] do nothing
    [  522] store the literal value 457 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  525] do nothing
    [  526] store the literal value 496 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  529] do nothing
    [  530] store the literal value 524 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  533] do nothing
    [  534] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
    [  544] store the literal value 577 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  547] set script variable #30 = var(2)
    [  550] IF NOT((0 && (var(30) >= 3))): GOTO #557  (else falls through, rejoins #557)
    [  554] set script variable #30 = random_below(3)
    [  557] SWITCH var(30): {0->#560, 1->#564, 3->#568, 4->#572, 5->#576, 6->#580, 7->#584} else #588
    [  560] store the literal value 578 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  563] do nothing
    [  564] store the literal value 582 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  567] do nothing
    [  568] store the literal value 593 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  571] do nothing
    [  572] store the literal value 614 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  575] do nothing
    [  576] store the literal value 641 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  579] do nothing
    [  580] store the literal value 672 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  583] do nothing
    [  584] store the literal value 701 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  587] do nothing
    [  588] store the literal value 731 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  591] do nothing
    [  592] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
    [  608] store the literal value 746 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  611] SWITCH 12: {1->#614, 2->#620, 3->#626, 4->#632, 5->#638, 6->#644, 7->#650, 8->#656, 9->#662, 10->#668, 11->#674, 12->#680, 13->#684, 14->#688, 512->#692, 32->#698, 64->#704, 128->#710, 256->#716} else #722
    [  614] store the literal value 747 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  617] play sound effect 257
    [  619] do nothing
    [  620] store the literal value 774 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  623] play sound effect 257
    [  625] do nothing
    [  626] store the literal value 800 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  629] play sound effect 260
    [  631] do nothing
    [  632] store the literal value 830 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  635] play sound effect 260
    [  637] do nothing
    [  638] store the literal value 854 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  641] play sound effect 260
    [  643] do nothing
    [  644] store the literal value 879 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  647] play sound effect 261
    [  649] do nothing
    [  650] store the literal value 933 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  653] play sound effect 257
    [  655] do nothing
    [  656] store the literal value 957 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  659] play sound effect 261
    [  661] do nothing
    [  662] store the literal value 1012 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  665] play sound effect 262
    [  667] do nothing
    [  668] store the literal value 1057 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  671] play sound effect 262
    [  673] do nothing
    [  674] store the literal value 1108 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  677] play sound effect 259
    [  679] do nothing
    [  680] store the literal value 1191 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  683] do nothing
    [  684] store the literal value 1255 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  687] do nothing
    [  688] store the literal value 1309 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  691] do nothing
    [  692] store the literal value 1381 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  695] play sound effect 258
    [  697] do nothing
    [  698] store the literal value 1415 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  701] play sound effect 258
    [  703] do nothing
    [  704] store the literal value 1454 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  707] play sound effect 258
    [  709] do nothing
    [  710] store the literal value 1493 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  713] play sound effect 258
    [  715] do nothing
    [  716] store the literal value 1534 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  719] play sound effect 258
    [  721] do nothing
    [  722] store the literal value 1574 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  725] do nothing
    [  726] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
    [  766] display system/chat message #1613: " þ"
    [  768] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [  769] set script variable #8 = 0
        [  772] set script variable #32 = 0
        [  775] set script variable #33 = 0
        [  778] ONCE(1, flag[1]): run block below -> #801
        [  782] set script variable #34 = 0
        [  785] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  788] WHILE set_unit_behavior(0, 5): loop below; exit -> #799 (500-iteration guard)
        [  791] set script variable #34 = (var(34) + 1)
        [  794] advance unit-slot #5 to the next unit in group #2 after the current one
        [  797] GOTO #791
        [  799] do nothing (message no-op)
        [  800] (UNKNOWN OPCODE 0x065f) - dead end, not decoded further (other branches continue independently)
        [  801] IF NOT(timer_expired(2)): GOTO #6580  (else falls through, rejoins #6580)
        [  805] arm timer #2 to expire 1 turn(s) from now
        [  808] set script variable #6 = 0
        [  811] IF NOT(group_condition(3)): GOTO #817  (else falls through, rejoins #817)
        [  815] do nothing (message no-op)
        [  816] (UNKNOWN OPCODE 0x0675) - dead end, not decoded further (other branches continue independently)
        [  817] IF NOT(!group_all_alive(3)): GOTO #823  (else falls through, rejoins #823)
        [  821] do nothing (message no-op)
        [  822] (UNKNOWN OPCODE 0x068d) - dead end, not decoded further (other branches continue independently)
        [  823] do nothing (message no-op)
        [  824] (UNKNOWN OPCODE 0x06a9) - dead end, not decoded further (other branches continue independently)
        [ 6580] ONCE((((any_group_alive(1) || !all_group_alive(2)) || (stat(3) >= var(4))) || !all_group_alive(1)), flag[4]): run block below -> #6585
        [ 6584] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6585] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6586] IF NOT((stat(3) >= var(4))): GOTO #6613  (else falls through, rejoins #6629)
            [ 6590] play sound effect 35
            [ 6592] IF NOT((!group_condition(3) && group_all_alive(3))): GOTO #6598  (else falls through, rejoins #6598)
            [ 6596] display system/chat message #24553: "Congratulations! You have mined your target amount of ore. Return to the Herc Carrier for pickup."
            [ 6598] IF NOT((!group_all_alive(3) && !group_condition(3))): GOTO #6604  (else falls through, rejoins #6604)
            [ 6602] display system/chat message #24651: "Congratulations! You have mined your target amount of ore. You will be picked up when you secure the area."
            [ 6604] IF NOT(group_condition(3)): GOTO #6610  (else falls through, rejoins #6610)
            [ 6608] display system/chat message #24758: "You have mined your target amount of ore. Since your Herc Carrier is destroyed, you must clear the area of all Cybrids for pickup."
            [ 6610] set the objective state of unit 1 to 1
            [ 6613] IF NOT(!all_group_alive(2)): GOTO #6624  (else falls through, rejoins #6629)
            [ 6617] play sound effect 35
            [ 6619] display system/chat message #24889: "The immediate Cybrid threat has been eliminated. All ore not retrieved by your units will be automined by Unitech teams. Congratulations, your success has once again increased Unitech profits."
            [ 6621] set the objective state of unit 1 to 1
            [ 6624] display system/chat message #25082: "The mission was a failure.  The Cybrids remain in control of this region.  Your defeat has been noted by Unitech command and the appropriate measures have been initiated. "
            [ 6626] set the objective state of unit 1 to 2
            [ 6629] advance to the next scenario phase (no effect if already at the last phase)
            [ 6630] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
