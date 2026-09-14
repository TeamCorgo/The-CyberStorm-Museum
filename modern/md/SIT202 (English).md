# SIT202.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=638, phase1=651, phase2=1401, phase3=7104
; 25015 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = 500
[    3] set script variable #2 = random_below(7)
[    6] set script variable #3 = 0
[    9] set script variable #4 = (random_below(4) + 3)
[   12] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   13] IF NOT((var(7) == 0)): GOTO #20  (else falls through, rejoins #20)
    [   17] set script variable #7 = (random_below(var(11)) + var(12))
    [   20] IF NOT((stat(10) < (stat(11) / 3))): GOTO #30  (else falls through, rejoins #33)
    [   24] set script variable #13 = (stat(0) / 1)
    [   27] set script variable #13 = (var(13) - 200)
    [   30] set script variable #13 = ((stat(0) / 3) / 1)
    [   33] set script variable #13 = (var(13) - 200)
    [   36] set script variable #13 = (var(13) - 200)
    [   39] set script variable #14 = 8192
    [   42] WHILE (var(14) > 500): loop below; exit -> #57 (500-iteration guard)
    [   45] IF NOT((var(13) < var(14))): GOTO #52  (else falls through, rejoins #52)
    [   49] set script variable #9 = (var(9) + 1)
    [   52] set script variable #14 = (var(14) / 2)
    [   55] GOTO #45
    [   57] set script variable #15 = (26 - random_below((var(9) + 1)))
    [   60] set script variable #16 = (random_below(360) - 180)
    [   63] set hex-var #6 = the point var(16) steps along the path toward var(15)
    [   67] define condition-slot #5 as (variable-ref 6, expression-offset 142)
    [   71] set script variable #17 = 1
    [   74] set script variable #18 = 179
    [   77] set hex-var #5 = the point var(18) steps along the path toward var(17)
    [   81] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #5, remember it as unit-slot #3
    [   86] set attribute #8 of unit-slot #3 to 999
    [   89] set hex-var #9 = (0, 0)
    [   93] set script variable #19 = set_objective_at_hex(6)
    [   96] place an objective marker at hex-var #5 with params ((random_below(3) + var(19)) - 1), 6, 8, 50
    [  102] arm timer #3 to expire 2 turn(s) from now
    [  105] set script variable #20 = 0
    [  108] set script variable #20 = (var(20) + 1)
    [  111] IF NOT((var(13) > 100)): GOTO #132  (else falls through, rejoins #135)
    [  115] set script variable #10 = (var(13) / 2)
    [  118] IF NOT((var(10) < 100)): GOTO #125  (else falls through, rejoins #132)
    [  122] set script variable #10 = 100
    [  125] IF NOT((var(10) > 1300)): GOTO #132  (else falls through, rejoins #132)
    [  129] set script variable #10 = 1300
    [  132] set script variable #10 = var(13)
    [  135] set script variable #13 = (var(13) - var(10))
    [  138] set hex-var #1 = the point var(16) steps along the path toward (var(15) - 3)
    [  142] define condition-slot #1 as (variable-ref 1, expression-offset 246)
    [  146] spawn an AI squad with point-budget var(10) at hex-ref #1, remember all its units as group #3
    [  150] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 1
    [  155] set attribute #8 to 33 for every unit in group #3
    [  158] IF NOT((stat(10) < (stat(11) / 3))): GOTO #167  (else falls through, rejoins #167)
    [  162] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #1, remember it as unit-slot #2
    [  167] IF NOT((var(13) > 0)): GOTO #230  (else falls through, rejoins #230)
    [  171] set script variable #20 = (var(20) + 1)
    [  174] IF NOT((var(13) > 100)): GOTO #195  (else falls through, rejoins #198)
    [  178] set script variable #10 = (var(13) / 2)
    [  181] IF NOT((var(10) < 100)): GOTO #188  (else falls through, rejoins #195)
    [  185] set script variable #10 = 100
    [  188] IF NOT((var(10) > 1200)): GOTO #195  (else falls through, rejoins #195)
    [  192] set script variable #10 = 1200
    [  195] set script variable #10 = var(13)
    [  198] set script variable #13 = (var(13) - var(10))
    [  201] set hex-var #2 = the point ((var(16) - 40) - random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  205] define condition-slot #2 as (variable-ref 2, expression-offset 338)
    [  209] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #2, remember all its units as group #3
    [  213] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 2
    [  218] set attribute #8 to 65 for every unit in group #3
    [  221] IF NOT((stat(10) < (stat(11) / 3))): GOTO #230  (else falls through, rejoins #230)
    [  225] spawn a unit of type 14 (spawns with escorts) (minimum weapon range 12) at hex-ref #2, remember it as unit-slot #2
    [  230] IF NOT((var(13) > 0)): GOTO #293  (else falls through, rejoins #293)
    [  234] set script variable #20 = (var(20) + 1)
    [  237] IF NOT((var(13) > 100)): GOTO #258  (else falls through, rejoins #261)
    [  241] set script variable #10 = (var(13) / 2)
    [  244] IF NOT((var(10) < 100)): GOTO #251  (else falls through, rejoins #258)
    [  248] set script variable #10 = 100
    [  251] IF NOT((var(10) > 1200)): GOTO #258  (else falls through, rejoins #258)
    [  255] set script variable #10 = 1200
    [  258] set script variable #10 = var(13)
    [  261] set script variable #13 = (var(13) - var(10))
    [  264] set hex-var #3 = the point ((var(16) + 40) + random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  268] define condition-slot #3 as (variable-ref 3, expression-offset 432)
    [  272] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #3, remember all its units as group #3
    [  276] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 3
    [  281] set attribute #8 to 129 for every unit in group #3
    [  284] IF NOT((stat(10) < (stat(11) / 3))): GOTO #293  (else falls through, rejoins #293)
    [  288] spawn a unit of type 15 (spawns with escorts) (minimum weapon range 12) at hex-ref #3, remember it as unit-slot #2
    [  293] IF NOT((var(13) > 0)): GOTO #356  (else falls through, rejoins #356)
    [  297] set script variable #20 = (var(20) + 1)
    [  300] IF NOT((var(13) > 100)): GOTO #321  (else falls through, rejoins #324)
    [  304] set script variable #10 = (var(13) / 2)
    [  307] IF NOT((var(10) < 100)): GOTO #314  (else falls through, rejoins #321)
    [  311] set script variable #10 = 100
    [  314] IF NOT((var(10) > 1200)): GOTO #321  (else falls through, rejoins #321)
    [  318] set script variable #10 = 1200
    [  321] set script variable #10 = var(13)
    [  324] set script variable #13 = (var(13) - var(10))
    [  327] set hex-var #4 = the point ((var(16) - 40) - random_below(10)) steps along the path toward ((var(15) - 3) - random_below(3))
    [  331] define condition-slot #4 as (variable-ref 4, expression-offset 526)
    [  335] spawn an AI squad with point-budget (var(10) / 2) at hex-ref #4, remember all its units as group #3
    [  339] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 4
    [  344] set attribute #8 to 257 for every unit in group #3
    [  347] IF NOT((stat(10) < (stat(11) / 3))): GOTO #356  (else falls through, rejoins #356)
    [  351] spawn a unit of type 15 (spawns with escorts) (minimum weapon range 12) at hex-ref #4, remember it as unit-slot #2
    [  356] set script variable #21 = 0
    [  359] IF NOT((var(13) > 50)): GOTO #479  (else falls through, rejoins #479)
    [  363] WHILE (var(13) > 50): loop below; exit -> #479 (500-iteration guard)
    [  366] IF NOT((var(13) > 200)): GOTO #387  (else falls through, rejoins #390)
    [  370] set script variable #10 = (var(13) / 2)
    [  373] IF NOT((var(10) < 200)): GOTO #380  (else falls through, rejoins #387)
    [  377] set script variable #10 = 200
    [  380] IF NOT((var(10) > 1300)): GOTO #387  (else falls through, rejoins #387)
    [  384] set script variable #10 = 1300
    [  387] set script variable #10 = var(13)
    [  390] set script variable #13 = (var(13) - var(10))
    [  393] set script variable #22 = random_below(100)
    [  396] IF NOT(((var(22) < 40) || (var(20) >= 4))): GOTO #432  (else falls through, rejoins #477)
    [  400] set script variable #23 = 31
    [  403] set script variable #24 = (random_below(180) - 90)
    [  406] set hex-var #7 = the point var(24) steps along the path toward var(23)
    [  410] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  414] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  419] set script variable #21 = (6 + random_below(10))
    [  422] IF NOT((var(21) > var(8))): GOTO #429  (else falls through, rejoins #429)
    [  426] set script variable #8 = var(21)
    [  429] set attribute #1 to var(21) for every unit in group #3
    [  432] set script variable #20 = (var(20) + 1)
    [  435] IF NOT((var(22) < 70)): GOTO #458  (else falls through, rejoins #477)
    [  439] set script variable #25 = 31
    [  442] set script variable #26 = (random_below(180) - 90)
    [  445] set hex-var #7 = the point var(26) steps along the path toward var(25)
    [  449] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  453] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  458] set script variable #27 = 31
    [  461] set script variable #28 = (random_below(180) - 90)
    [  464] set hex-var #7 = the point var(28) steps along the path toward var(27)
    [  468] spawn an AI squad with point-budget var(10) at hex-ref #7, remember all its units as group #3
    [  472] order every unit in group #3 to move, speed/priority op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), destination-type tag 0, destination arg 0
    [  477] GOTO #366
    [  479] arm timer #2 to expire 1 turn(s) from now
    [  482] IF NOT((stat(11) < 3)): GOTO #488  (else falls through, rejoins #488)
    [  486] display system/chat message #304: "Warning: Ore extractors disengaged. You may engage extractors in the internals display."
    [  488] IF NOT((stat(11) > 2)): GOTO #762  (else falls through, rejoins #762)
    [  492] set script variable #29 = random_below(100)
    [  495] IF NOT(((var(6) == 0) && (var(29) < 100))): GOTO #762  (else falls through, rejoins #762)
    [  499] set script variable #6 = (var(6) + 1)
    [  502] store the literal value 392 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  505] SWITCH 7: {0->#508, 1->#512, 2->#516, 7->#520} else #524
    [  508] store the literal value 393 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  511] do nothing
    [  512] store the literal value 428 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  515] do nothing
    [  516] store the literal value 455 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  519] do nothing
    [  520] store the literal value 494 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  523] do nothing
    [  524] store the literal value 522 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  527] do nothing
    [  528] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
    [  538] store the literal value 575 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  541] set script variable #30 = var(4)
    [  544] IF NOT((0 && (var(30) >= 3))): GOTO #551  (else falls through, rejoins #551)
    [  548] set script variable #30 = random_below(3)
    [  551] SWITCH var(30): {0->#554, 1->#558, 3->#562, 4->#566, 5->#570, 6->#574, 7->#578} else #582
    [  554] store the literal value 576 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  557] do nothing
    [  558] store the literal value 580 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  561] do nothing
    [  562] store the literal value 591 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  565] do nothing
    [  566] store the literal value 612 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  569] do nothing
    [  570] store the literal value 639 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  573] do nothing
    [  574] store the literal value 670 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  577] do nothing
    [  578] store the literal value 699 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  581] do nothing
    [  582] store the literal value 729 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  585] do nothing
    [  586] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
    [  602] store the literal value 744 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  605] SWITCH 12: {1->#608, 2->#614, 3->#620, 4->#626, 5->#632, 6->#638, 7->#644, 8->#650, 9->#656, 10->#662, 11->#668, 12->#674, 13->#678, 14->#682, 512->#686, 32->#692, 64->#698, 128->#704, 256->#710} else #716
    [  608] store the literal value 745 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  611] play sound effect 257
    [  613] do nothing
    [  614] store the literal value 772 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  617] play sound effect 257
    [  619] do nothing
    [  620] store the literal value 798 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  623] play sound effect 260
    [  625] do nothing
    [  626] store the literal value 828 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  629] play sound effect 260
    [  631] do nothing
    [  632] store the literal value 852 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  635] play sound effect 260
    [  637] do nothing
    [  638] store the literal value 877 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  641] play sound effect 261
    [  643] do nothing
    [  644] store the literal value 931 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  647] play sound effect 257
    [  649] do nothing
    [  650] store the literal value 955 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  653] play sound effect 261
    [  655] do nothing
    [  656] store the literal value 1010 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  659] play sound effect 262
    [  661] do nothing
    [  662] store the literal value 1055 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  665] play sound effect 262
    [  667] do nothing
    [  668] store the literal value 1106 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  671] play sound effect 259
    [  673] do nothing
    [  674] store the literal value 1189 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  677] do nothing
    [  678] store the literal value 1253 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  681] do nothing
    [  682] store the literal value 1307 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  685] do nothing
    [  686] store the literal value 1379 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  689] play sound effect 258
    [  691] do nothing
    [  692] store the literal value 1413 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  695] play sound effect 258
    [  697] do nothing
    [  698] store the literal value 1452 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  701] play sound effect 258
    [  703] do nothing
    [  704] store the literal value 1491 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  707] play sound effect 258
    [  709] do nothing
    [  710] store the literal value 1532 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  713] play sound effect 258
    [  715] do nothing
    [  716] store the literal value 1572 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  719] do nothing
    [  720] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
    [  760] display system/chat message #1611: " þ"
    [  762] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [  763] set script variable #8 = 0
        [  766] set script variable #32 = 0
        [  769] set script variable #33 = 0
        [  772] ONCE(1, flag[1]): run block below -> #795
        [  776] set script variable #34 = 0
        [  779] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  782] WHILE set_unit_behavior(0, 5): loop below; exit -> #793 (500-iteration guard)
        [  785] set script variable #34 = (var(34) + 1)
        [  788] advance unit-slot #5 to the next unit in group #2 after the current one
        [  791] GOTO #785
        [  793] do nothing (message no-op)
        [  794] (UNKNOWN OPCODE 0x065d) - dead end, not decoded further (other branches continue independently)
        [  795] IF NOT(timer_expired(2)): GOTO #6460  (else falls through, rejoins #6460)
        [  799] arm timer #2 to expire 1 turn(s) from now
        [  802] set script variable #6 = 0
        [  805] IF NOT(group_condition(3)): GOTO #811  (else falls through, rejoins #811)
        [  809] do nothing (message no-op)
        [  810] (UNKNOWN OPCODE 0x0673) - dead end, not decoded further (other branches continue independently)
        [  811] IF NOT(!group_all_alive(3)): GOTO #817  (else falls through, rejoins #817)
        [  815] do nothing (message no-op)
        [  816] (UNKNOWN OPCODE 0x068b) - dead end, not decoded further (other branches continue independently)
        [  817] do nothing (message no-op)
        [  818] (UNKNOWN OPCODE 0x06a7) - dead end, not decoded further (other branches continue independently)
        [ 6460] ONCE((((any_group_alive(1) || (stat(3) >= var(1))) || !all_group_alive(1)) || !all_group_alive(2)), flag[4]): run block below -> #6465
        [ 6464] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6465] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6466] IF NOT((stat(3) >= var(1))): GOTO #6493  (else falls through, rejoins #6509)
            [ 6470] play sound effect 35
            [ 6472] IF NOT((group_all_alive(3) && !group_condition(3))): GOTO #6478  (else falls through, rejoins #6478)
            [ 6476] display system/chat message #24367: "Congratulations! You have mined your target amount of ore. Return to the Herc Carrier for pickup."
            [ 6478] IF NOT((!group_all_alive(3) && !group_condition(3))): GOTO #6484  (else falls through, rejoins #6484)
            [ 6482] display system/chat message #24465: "Congratulations! You have mined your target amount of ore. You will be picked up when you secure the area."
            [ 6484] IF NOT(group_condition(3)): GOTO #6490  (else falls through, rejoins #6490)
            [ 6488] display system/chat message #24572: "You have mined your target amount of ore. Since your Herc Carrier is destroyed, you must clear the area of all Cybrids for pickup."
            [ 6490] set the objective state of unit 1 to 1
            [ 6493] IF NOT((any_group_alive(2) || !all_group_alive(2))): GOTO #6504  (else falls through, rejoins #6509)
            [ 6497] play sound effect 35
            [ 6499] display system/chat message #24703: "The immediate Cybrid threat has been eliminated. All ore not retrieved by your units will be automined by Unitech teams. Congratulations, your success has once again increased Unitech profits."
            [ 6501] set the objective state of unit 1 to 1
            [ 6504] display system/chat message #24896: "The mission was a failure.  The Cybrids remain in control of this region.  Your defeat has been noted by Unitech command and the appropriate measures have been initiated. "
            [ 6506] set the objective state of unit 1 to 2
            [ 6509] advance to the next scenario phase (no effect if already at the last phase)
            [ 6510] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
