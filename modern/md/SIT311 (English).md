# SIT311.CS

```text
; warning: file length 55991 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=692, phase1=696, phase2=1409, phase3=7810
; 27303 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = (random_below(4) + 3)
[    3] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    4] IF NOT((var(4) == 0)): GOTO #11  (else falls through, rejoins #11)
    [    8] set script variable #4 = (random_below(var(8)) + var(9))
    [   11] set script variable #10 = (stat(0) / 1)
    [   14] set script variable #10 = (var(10) - 200)
    [   17] set script variable #11 = 8192
    [   20] WHILE (var(11) > 500): loop below; exit -> #35 (500-iteration guard)
    [   23] IF NOT((var(10) < var(11))): GOTO #30  (else falls through, rejoins #30)
    [   27] set script variable #6 = (var(6) + 1)
    [   30] set script variable #11 = (var(11) / 4)
    [   33] GOTO #23
    [   35] set script variable #12 = 0
    [   38] set script variable #13 = 0
    [   41] set script variable #14 = 25
    [   44] set script variable #15 = 27
    [   47] set script variable #16 = 0
    [   50] set script variable #17 = 360
    [   53] IF NOT((var(14) > (var(6) + 5))): GOTO #60  (else falls through, rejoins #63)
    [   57] set script variable #14 = (var(14) - var(6))
    [   60] set script variable #14 = 5
    [   63] IF NOT((var(15) > (var(6) + 10))): GOTO #70  (else falls through, rejoins #73)
    [   67] set script variable #15 = (var(15) - var(6))
    [   70] set script variable #15 = 10
    [   73] IF NOT((var(12) == 0)): GOTO #80  (else falls through, rejoins #80)
    [   77] set script variable #12 = (var(14) + random_below((var(15) - var(14))))
    [   80] IF NOT((var(13) == 0)): GOTO #87  (else falls through, rejoins #87)
    [   84] set script variable #13 = ((random_below(var(17)) + var(16)) - (var(17) / 2))
    [   87] set hex-var #7 = the point var(13) steps along the path toward var(12)
    [   91] set hex-var #10 = the point 180 steps along the path toward 1
    [   95] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #10, remember it as unit-slot #2
    [  100] set hex-var #11 = (0, 0)
    [  104] set script variable #18 = set_objective_at_hex(8)
    [  107] place an objective marker at hex-var #10 with params ((random_below(3) + var(18)) - 1), 6, 8, 50
    [  113] define condition-slot #7 as (variable-ref 7, expression-offset 207)
    [  117] arm timer #3 to expire 2 turn(s) from now
    [  120] set script variable #19 = 0
    [  123] set script variable #19 = (var(19) + 1)
    [  126] IF NOT((var(10) > 300)): GOTO #147  (else falls through, rejoins #150)
    [  130] set script variable #7 = (var(10) / 2)
    [  133] IF NOT((var(7) < 300)): GOTO #140  (else falls through, rejoins #147)
    [  137] set script variable #7 = 300
    [  140] IF NOT((var(7) > 1200)): GOTO #147  (else falls through, rejoins #147)
    [  144] set script variable #7 = 1200
    [  147] set script variable #7 = var(10)
    [  150] set script variable #10 = (var(10) - var(7))
    [  153] set hex-var #1 = the point var(13) steps along the path toward (var(12) - 2)
    [  157] define condition-slot #1 as (variable-ref 1, expression-offset 268)
    [  161] spawn an AI squad with point-budget var(7) at hex-ref #1, remember all its units as group #3
    [  165] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 1
    [  170] set attribute #8 to 47 for every unit in group #3
    [  173] IF NOT((var(10) > 0)): GOTO #227  (else falls through, rejoins #227)
    [  177] set script variable #19 = (var(19) + 1)
    [  180] IF NOT((var(10) > 300)): GOTO #201  (else falls through, rejoins #204)
    [  184] set script variable #7 = (var(10) / 2)
    [  187] IF NOT((var(7) < 300)): GOTO #194  (else falls through, rejoins #201)
    [  191] set script variable #7 = 300
    [  194] IF NOT((var(7) > 1200)): GOTO #201  (else falls through, rejoins #201)
    [  198] set script variable #7 = 1200
    [  201] set script variable #7 = var(10)
    [  204] set script variable #10 = (var(10) - var(7))
    [  207] set hex-var #2 = the point ((var(13) - 20) - random_below(10)) steps along the path toward (var(12) - random_below(3))
    [  211] define condition-slot #2 as (variable-ref 2, expression-offset 345)
    [  215] spawn an AI squad with point-budget var(7) at hex-ref #2, remember all its units as group #3
    [  219] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 2
    [  224] set attribute #8 to 79 for every unit in group #3
    [  227] IF NOT((var(10) > 0)): GOTO #281  (else falls through, rejoins #281)
    [  231] set script variable #19 = (var(19) + 1)
    [  234] IF NOT((var(10) > 300)): GOTO #255  (else falls through, rejoins #258)
    [  238] set script variable #7 = (var(10) / 2)
    [  241] IF NOT((var(7) < 300)): GOTO #248  (else falls through, rejoins #255)
    [  245] set script variable #7 = 300
    [  248] IF NOT((var(7) > 1200)): GOTO #255  (else falls through, rejoins #255)
    [  252] set script variable #7 = 1200
    [  255] set script variable #7 = var(10)
    [  258] set script variable #10 = (var(10) - var(7))
    [  261] set hex-var #3 = the point (var(13) + random_below(10)) steps along the path toward (var(12) - random_below(3))
    [  265] define condition-slot #3 as (variable-ref 3, expression-offset 420)
    [  269] spawn an AI squad with point-budget var(7) at hex-ref #3, remember all its units as group #3
    [  273] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 3
    [  278] set attribute #8 to 143 for every unit in group #3
    [  281] IF NOT((var(10) > 0)): GOTO #335  (else falls through, rejoins #335)
    [  285] set script variable #19 = (var(19) + 1)
    [  288] IF NOT((var(10) > 300)): GOTO #309  (else falls through, rejoins #312)
    [  292] set script variable #7 = (var(10) / 2)
    [  295] IF NOT((var(7) < 300)): GOTO #302  (else falls through, rejoins #309)
    [  299] set script variable #7 = 300
    [  302] IF NOT((var(7) > 1200)): GOTO #309  (else falls through, rejoins #309)
    [  306] set script variable #7 = 1200
    [  309] set script variable #7 = var(10)
    [  312] set script variable #10 = (var(10) - var(7))
    [  315] set hex-var #4 = the point (var(13) - random_below(10)) steps along the path toward (var(12) - random_below(3))
    [  319] define condition-slot #4 as (variable-ref 4, expression-offset 495)
    [  323] spawn an AI squad with point-budget var(7) at hex-ref #4, remember all its units as group #3
    [  327] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 4
    [  332] set attribute #8 to 271 for every unit in group #3
    [  335] IF NOT((var(10) > 0)): GOTO #389  (else falls through, rejoins #389)
    [  339] set script variable #19 = (var(19) + 1)
    [  342] IF NOT((var(10) > 300)): GOTO #363  (else falls through, rejoins #366)
    [  346] set script variable #7 = (var(10) / 2)
    [  349] IF NOT((var(7) < 300)): GOTO #356  (else falls through, rejoins #363)
    [  353] set script variable #7 = 300
    [  356] IF NOT((var(7) > 1200)): GOTO #363  (else falls through, rejoins #363)
    [  360] set script variable #7 = 1200
    [  363] set script variable #7 = var(10)
    [  366] set script variable #10 = (var(10) - var(7))
    [  369] set hex-var #5 = the point (var(13) - 60) steps along the path toward ((random_below(5) + 5) - var(6))
    [  373] define condition-slot #5 as (variable-ref 5, expression-offset 571)
    [  377] spawn an AI squad with point-budget var(7) at hex-ref #5, remember all its units as group #3
    [  381] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 5
    [  386] set attribute #8 to 2063 for every unit in group #3
    [  389] IF NOT((var(10) > 0)): GOTO #443  (else falls through, rejoins #443)
    [  393] set script variable #19 = (var(19) + 1)
    [  396] IF NOT((var(10) > 300)): GOTO #417  (else falls through, rejoins #420)
    [  400] set script variable #7 = (var(10) / 1)
    [  403] IF NOT((var(7) < 300)): GOTO #410  (else falls through, rejoins #417)
    [  407] set script variable #7 = 300
    [  410] IF NOT((var(7) > 1200)): GOTO #417  (else falls through, rejoins #417)
    [  414] set script variable #7 = 1200
    [  417] set script variable #7 = var(10)
    [  420] set script variable #10 = (var(10) - var(7))
    [  423] set hex-var #6 = the point (var(13) + 60) steps along the path toward ((random_below(5) + 5) - var(6))
    [  427] define condition-slot #6 as (variable-ref 6, expression-offset 647)
    [  431] spawn an AI squad with point-budget var(7) at hex-ref #6, remember all its units as group #3
    [  435] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 6
    [  440] set attribute #8 to 4107 for every unit in group #3
    [  443] arm timer #2 to expire 1 turn(s) from now
    [  446] set script variable #20 = random_below(100)
    [  449] IF NOT(((var(3) == 0) && (var(20) < 100))): GOTO #716  (else falls through, rejoins #716)
    [  453] set script variable #3 = (var(3) + 1)
    [  456] store the literal value 216 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  459] SWITCH 7: {0->#462, 1->#466, 2->#470, 7->#474} else #478
    [  462] store the literal value 217 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  465] do nothing
    [  466] store the literal value 252 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  469] do nothing
    [  470] store the literal value 279 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  473] do nothing
    [  474] store the literal value 318 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  477] do nothing
    [  478] store the literal value 346 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  481] do nothing
    [  482] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
    [  492] store the literal value 399 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  495] set script variable #21 = var(1)
    [  498] IF NOT((0 && (var(21) >= 3))): GOTO #505  (else falls through, rejoins #505)
    [  502] set script variable #21 = random_below(3)
    [  505] SWITCH var(21): {0->#508, 1->#512, 3->#516, 4->#520, 5->#524, 6->#528, 7->#532} else #536
    [  508] store the literal value 400 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  511] do nothing
    [  512] store the literal value 404 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  515] do nothing
    [  516] store the literal value 415 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  519] do nothing
    [  520] store the literal value 436 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  523] do nothing
    [  524] store the literal value 463 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  527] do nothing
    [  528] store the literal value 494 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  531] do nothing
    [  532] store the literal value 523 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  535] do nothing
    [  536] store the literal value 553 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  539] do nothing
    [  540] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
    [  556] store the literal value 568 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  559] SWITCH 12: {1->#562, 2->#568, 3->#574, 4->#580, 5->#586, 6->#592, 7->#598, 8->#604, 9->#610, 10->#616, 11->#622, 12->#628, 13->#632, 14->#636, 512->#640, 32->#646, 64->#652, 128->#658, 256->#664} else #670
    [  562] store the literal value 569 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  565] play sound effect 257
    [  567] do nothing
    [  568] store the literal value 596 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  571] play sound effect 257
    [  573] do nothing
    [  574] store the literal value 622 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  577] play sound effect 260
    [  579] do nothing
    [  580] store the literal value 652 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  583] play sound effect 260
    [  585] do nothing
    [  586] store the literal value 676 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  589] play sound effect 260
    [  591] do nothing
    [  592] store the literal value 701 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  595] play sound effect 261
    [  597] do nothing
    [  598] store the literal value 755 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  601] play sound effect 257
    [  603] do nothing
    [  604] store the literal value 779 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  607] play sound effect 261
    [  609] do nothing
    [  610] store the literal value 834 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  613] play sound effect 262
    [  615] do nothing
    [  616] store the literal value 879 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  619] play sound effect 262
    [  621] do nothing
    [  622] store the literal value 930 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  625] play sound effect 259
    [  627] do nothing
    [  628] store the literal value 1013 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  631] do nothing
    [  632] store the literal value 1077 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  635] do nothing
    [  636] store the literal value 1131 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  639] do nothing
    [  640] store the literal value 1203 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  643] play sound effect 258
    [  645] do nothing
    [  646] store the literal value 1237 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  649] play sound effect 258
    [  651] do nothing
    [  652] store the literal value 1276 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  655] play sound effect 258
    [  657] do nothing
    [  658] store the literal value 1315 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  661] play sound effect 258
    [  663] do nothing
    [  664] store the literal value 1356 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  667] play sound effect 258
    [  669] do nothing
    [  670] store the literal value 1396 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  673] do nothing
    [  674] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
    [  714] display system/chat message #1435: " þ"
    [  716] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [  717] set script variable #5 = 0
        [  720] set script variable #23 = 0
        [  723] set script variable #24 = 0
        [  726] ONCE(1, flag[1]): run block below -> #749
        [  730] set script variable #25 = 0
        [  733] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #4
        [  736] WHILE set_unit_behavior(0, 4): loop below; exit -> #747 (500-iteration guard)
        [  739] set script variable #25 = (var(25) + 1)
        [  742] advance unit-slot #4 to the next unit in group #2 after the current one
        [  745] GOTO #739
        [  747] do nothing (message no-op)
        [  748] (UNKNOWN OPCODE 0x05ad) - dead end, not decoded further (other branches continue independently)
        [  749] IF NOT(timer_expired(2)): GOTO #7106  (else falls through, rejoins #7106)
        [  753] arm timer #2 to expire 1 turn(s) from now
        [  756] set script variable #3 = 0
        [  759] IF NOT(group_condition(2)): GOTO #765  (else falls through, rejoins #765)
        [  763] do nothing (message no-op)
        [  764] (UNKNOWN OPCODE 0x05c3) - dead end, not decoded further (other branches continue independently)
        [  765] IF NOT(!group_all_alive(2)): GOTO #771  (else falls through, rejoins #771)
        [  769] do nothing (message no-op)
        [  770] (UNKNOWN OPCODE 0x05db) - dead end, not decoded further (other branches continue independently)
        [  771] do nothing (message no-op)
        [  772] (UNKNOWN OPCODE 0x05f7) - dead end, not decoded further (other branches continue independently)
        [ 7106] ONCE(((!all_group_alive(2) || any_group_alive(1)) || !all_group_alive(1)), flag[4]): run block below -> #7111
        [ 7110] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 7111] ONCE((timer_expired(3) && (var(5) > 0)), flag[5]): run block below -> #7117
        [ 7115] display system/chat message #26849: "Mobile defense node threatened. Call all nearby units from defense pool."
        [ 7117] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 7118] IF NOT(!all_group_alive(2)): GOTO #7129  (else falls through, rejoins #7134)
            [ 7122] play sound effect 35
            [ 7124] display system/chat message #26922: "Objective Achieved.  The Cybrid defense node has been removed and Unitech elements are now landing in the region. Remaining duty time will be spent in garrison of the area.  Well done!"
            [ 7126] set the objective state of unit 1 to 1
            [ 7129] display system/chat message #27107: "The mission was a failure.  The Cybrids still maintain their defense node in your area.Unitech non-combatants in the region are now at risk and Unitech profits will suffer accordingly. Unless you can still field a force with your remaining credit reserve, your career with Unitech is over."
            [ 7131] set the objective state of unit 1 to 2
            [ 7134] advance to the next scenario phase (no effect if already at the last phase)
            [ 7135] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
