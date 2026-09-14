# SIT305.CS

```text
; warning: file length 51355 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=646, phase1=650, phase2=1344, phase3=7142
; 25031 instruction word(s) available from the start offset
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
    [   91] define condition-slot #7 as (variable-ref 7, expression-offset 174)
    [   95] arm timer #3 to expire 2 turn(s) from now
    [   98] set script variable #18 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
    [  101] set script variable #19 = 0
    [  104] set script variable #19 = (var(19) + 1)
    [  107] IF NOT((var(10) > 300)): GOTO #128  (else falls through, rejoins #131)
    [  111] set script variable #7 = (var(10) / 2)
    [  114] IF NOT((var(7) < 300)): GOTO #121  (else falls through, rejoins #128)
    [  118] set script variable #7 = 300
    [  121] IF NOT((var(7) > 1200)): GOTO #128  (else falls through, rejoins #128)
    [  125] set script variable #7 = 1200
    [  128] set script variable #7 = var(10)
    [  131] set script variable #10 = (var(10) - var(7))
    [  134] set hex-var #1 = the point (var(13) + 30) steps along the path toward ((random_below(5) + 5) - var(6))
    [  138] define condition-slot #1 as (variable-ref 1, expression-offset 256)
    [  142] spawn an AI squad with point-budget var(7) at hex-ref #1, remember all its units as group #3
    [  146] order every unit in group #3 to move, speed/priority var(18), destination-type tag 2, destination arg 1
    [  151] set attribute #8 to 47 for every unit in group #3
    [  154] IF NOT((var(10) > 0)): GOTO #208  (else falls through, rejoins #208)
    [  158] set script variable #19 = (var(19) + 1)
    [  161] IF NOT((var(10) > 300)): GOTO #182  (else falls through, rejoins #185)
    [  165] set script variable #7 = (var(10) / 2)
    [  168] IF NOT((var(7) < 300)): GOTO #175  (else falls through, rejoins #182)
    [  172] set script variable #7 = 300
    [  175] IF NOT((var(7) > 1200)): GOTO #182  (else falls through, rejoins #182)
    [  179] set script variable #7 = 1200
    [  182] set script variable #7 = var(10)
    [  185] set script variable #10 = (var(10) - var(7))
    [  188] set hex-var #2 = the point (var(13) + 120) steps along the path toward ((random_below(5) + 5) - var(6))
    [  192] define condition-slot #2 as (variable-ref 2, expression-offset 334)
    [  196] spawn an AI squad with point-budget var(7) at hex-ref #2, remember all its units as group #3
    [  200] order every unit in group #3 to move, speed/priority var(18), destination-type tag 0, destination arg 0
    [  205] set attribute #8 to (var(18) + 15) for every unit in group #3
    [  208] IF NOT((var(10) > 0)): GOTO #262  (else falls through, rejoins #262)
    [  212] set script variable #19 = (var(19) + 1)
    [  215] IF NOT((var(10) > 300)): GOTO #236  (else falls through, rejoins #239)
    [  219] set script variable #7 = (var(10) / 2)
    [  222] IF NOT((var(7) < 300)): GOTO #229  (else falls through, rejoins #236)
    [  226] set script variable #7 = 300
    [  229] IF NOT((var(7) > 1200)): GOTO #236  (else falls through, rejoins #236)
    [  233] set script variable #7 = 1200
    [  236] set script variable #7 = var(10)
    [  239] set script variable #10 = (var(10) - var(7))
    [  242] set hex-var #3 = the point (var(13) - 30) steps along the path toward ((random_below(5) + 5) - var(6))
    [  246] define condition-slot #3 as (variable-ref 3, expression-offset 416)
    [  250] spawn an AI squad with point-budget var(7) at hex-ref #3, remember all its units as group #3
    [  254] order every unit in group #3 to move, speed/priority var(18), destination-type tag 0, destination arg 0
    [  259] set attribute #8 to (var(18) + 15) for every unit in group #3
    [  262] IF NOT((var(10) > 0)): GOTO #316  (else falls through, rejoins #316)
    [  266] set script variable #19 = (var(19) + 1)
    [  269] IF NOT((var(10) > 300)): GOTO #290  (else falls through, rejoins #293)
    [  273] set script variable #7 = (var(10) / 2)
    [  276] IF NOT((var(7) < 300)): GOTO #283  (else falls through, rejoins #290)
    [  280] set script variable #7 = 300
    [  283] IF NOT((var(7) > 1200)): GOTO #290  (else falls through, rejoins #290)
    [  287] set script variable #7 = 1200
    [  290] set script variable #7 = var(10)
    [  293] set script variable #10 = (var(10) - var(7))
    [  296] set hex-var #4 = the point (var(13) - 120) steps along the path toward ((random_below(5) + 5) - var(6))
    [  300] define condition-slot #4 as (variable-ref 4, expression-offset 498)
    [  304] spawn an AI squad with point-budget var(7) at hex-ref #4, remember all its units as group #3
    [  308] order every unit in group #3 to move, speed/priority var(18), destination-type tag 0, destination arg 0
    [  313] set attribute #8 to (var(18) + 15) for every unit in group #3
    [  316] IF NOT((var(10) > 0)): GOTO #370  (else falls through, rejoins #370)
    [  320] set script variable #19 = (var(19) + 1)
    [  323] IF NOT((var(10) > 300)): GOTO #344  (else falls through, rejoins #347)
    [  327] set script variable #7 = (var(10) / 2)
    [  330] IF NOT((var(7) < 300)): GOTO #337  (else falls through, rejoins #344)
    [  334] set script variable #7 = 300
    [  337] IF NOT((var(7) > 1200)): GOTO #344  (else falls through, rejoins #344)
    [  341] set script variable #7 = 1200
    [  344] set script variable #7 = var(10)
    [  347] set script variable #10 = (var(10) - var(7))
    [  350] set hex-var #5 = the point (var(13) - 60) steps along the path toward ((random_below(5) + 5) - var(6))
    [  354] define condition-slot #5 as (variable-ref 5, expression-offset 580)
    [  358] spawn an AI squad with point-budget var(7) at hex-ref #5, remember all its units as group #3
    [  362] order every unit in group #3 to move, speed/priority var(18), destination-type tag 0, destination arg 0
    [  367] set attribute #8 to (var(18) + 15) for every unit in group #3
    [  370] IF NOT((var(10) > 0)): GOTO #424  (else falls through, rejoins #424)
    [  374] set script variable #19 = (var(19) + 1)
    [  377] IF NOT((var(10) > 300)): GOTO #398  (else falls through, rejoins #401)
    [  381] set script variable #7 = (var(10) / 1)
    [  384] IF NOT((var(7) < 300)): GOTO #391  (else falls through, rejoins #398)
    [  388] set script variable #7 = 300
    [  391] IF NOT((var(7) > 1200)): GOTO #398  (else falls through, rejoins #398)
    [  395] set script variable #7 = 1200
    [  398] set script variable #7 = var(10)
    [  401] set script variable #10 = (var(10) - var(7))
    [  404] set hex-var #6 = the point (var(13) + 60) steps along the path toward ((random_below(5) + 5) - var(6))
    [  408] define condition-slot #6 as (variable-ref 6, expression-offset 662)
    [  412] spawn an AI squad with point-budget var(7) at hex-ref #6, remember all its units as group #3
    [  416] order every unit in group #3 to move, speed/priority var(18), destination-type tag 0, destination arg 0
    [  421] set attribute #8 to (var(18) + 11) for every unit in group #3
    [  424] arm timer #2 to expire 1 turn(s) from now
    [  427] set script variable #20 = random_below(100)
    [  430] IF NOT(((var(3) == 0) && (var(20) < 100))): GOTO #697  (else falls through, rejoins #697)
    [  434] set script variable #3 = (var(3) + 1)
    [  437] store the literal value 310 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  440] SWITCH 7: {0->#443, 1->#447, 2->#451, 7->#455} else #459
    [  443] store the literal value 311 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  446] do nothing
    [  447] store the literal value 346 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  450] do nothing
    [  451] store the literal value 373 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  454] do nothing
    [  455] store the literal value 412 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  458] do nothing
    [  459] store the literal value 440 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
    [  462] do nothing
    [  463] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
    [  473] store the literal value 493 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  476] set script variable #21 = var(1)
    [  479] IF NOT((0 && (var(21) >= 3))): GOTO #486  (else falls through, rejoins #486)
    [  483] set script variable #21 = random_below(3)
    [  486] SWITCH var(21): {0->#489, 1->#493, 3->#497, 4->#501, 5->#505, 6->#509, 7->#513} else #517
    [  489] store the literal value 494 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  492] do nothing
    [  493] store the literal value 498 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  496] do nothing
    [  497] store the literal value 509 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  500] do nothing
    [  501] store the literal value 530 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  504] do nothing
    [  505] store the literal value 557 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  508] do nothing
    [  509] store the literal value 588 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  512] do nothing
    [  513] store the literal value 617 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  516] do nothing
    [  517] store the literal value 647 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
    [  520] do nothing
    [  521] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
    [  537] store the literal value 662 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  540] SWITCH 14: {1->#543, 2->#549, 3->#555, 4->#561, 5->#567, 6->#573, 7->#579, 8->#585, 9->#591, 10->#597, 11->#603, 12->#609, 13->#613, 14->#617, 512->#621, 32->#627, 64->#633, 128->#639, 256->#645} else #651
    [  543] store the literal value 663 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  546] play sound effect 257
    [  548] do nothing
    [  549] store the literal value 690 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  552] play sound effect 257
    [  554] do nothing
    [  555] store the literal value 716 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  558] play sound effect 260
    [  560] do nothing
    [  561] store the literal value 746 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  564] play sound effect 260
    [  566] do nothing
    [  567] store the literal value 770 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  570] play sound effect 260
    [  572] do nothing
    [  573] store the literal value 795 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  576] play sound effect 261
    [  578] do nothing
    [  579] store the literal value 849 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  582] play sound effect 257
    [  584] do nothing
    [  585] store the literal value 873 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  588] play sound effect 261
    [  590] do nothing
    [  591] store the literal value 928 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  594] play sound effect 262
    [  596] do nothing
    [  597] store the literal value 973 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  600] play sound effect 262
    [  602] do nothing
    [  603] store the literal value 1024 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  606] play sound effect 259
    [  608] do nothing
    [  609] store the literal value 1107 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  612] do nothing
    [  613] store the literal value 1171 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  616] do nothing
    [  617] store the literal value 1225 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  620] do nothing
    [  621] store the literal value 1297 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  624] play sound effect 258
    [  626] do nothing
    [  627] store the literal value 1331 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  630] play sound effect 258
    [  632] do nothing
    [  633] store the literal value 1370 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  636] play sound effect 258
    [  638] do nothing
    [  639] store the literal value 1409 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  642] play sound effect 258
    [  644] do nothing
    [  645] store the literal value 1450 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  648] play sound effect 258
    [  650] do nothing
    [  651] store the literal value 1490 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
    [  654] do nothing
    [  655] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
    [  695] display system/chat message #1529: " þ"
    [  697] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [  698] set script variable #5 = 0
        [  701] set script variable #23 = 0
        [  704] set script variable #24 = 0
        [  707] ONCE(1, flag[1]): run block below -> #730
        [  711] set script variable #25 = 0
        [  714] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #4
        [  717] WHILE set_unit_behavior(0, 4): loop below; exit -> #728 (500-iteration guard)
        [  720] set script variable #25 = (var(25) + 1)
        [  723] advance unit-slot #4 to the next unit in group #2 after the current one
        [  726] GOTO #720
        [  728] do nothing (message no-op)
        [  729] (UNKNOWN OPCODE 0x060b) - dead end, not decoded further (other branches continue independently)
        [  730] IF NOT(timer_expired(2)): GOTO #6484  (else falls through, rejoins #6484)
        [  734] arm timer #2 to expire 1 turn(s) from now
        [  737] set script variable #3 = 0
        [  740] set script variable #26 = 0
        [  743] IF NOT((group_condition_ref_2(7, 1) && group_condition_ref_2(7, 2))): GOTO #1027  (else falls through, rejoins #1034)
        [  747] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  750] set script variable #27 = random_below(100)
        [  753] IF NOT(((var(3) == 0) && (var(27) < 2))): GOTO #1020  (else falls through, rejoins #1020)
        [  757] set script variable #3 = (var(3) + 1)
        [  760] store the literal value 1697 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  763] SWITCH random_below(4): {0->#766, 1->#770, 2->#774, 7->#778} else #782
        [  766] store the literal value 1698 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  769] do nothing
        [  770] store the literal value 1733 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  773] do nothing
        [  774] store the literal value 1760 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  777] do nothing
        [  778] store the literal value 1799 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  781] do nothing
        [  782] store the literal value 1827 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  785] do nothing
        [  786] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  796] store the literal value 1880 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  799] set script variable #28 = random_below(4)
        [  802] IF NOT(((random_below(4) != 7) && (var(28) >= 3))): GOTO #809  (else falls through, rejoins #809)
        [  806] set script variable #28 = random_below(3)
        [  809] SWITCH var(28): {0->#812, 1->#816, 3->#820, 4->#824, 5->#828, 6->#832, 7->#836} else #840
        [  812] store the literal value 1881 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  815] do nothing
        [  816] store the literal value 1885 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  819] do nothing
        [  820] store the literal value 1896 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  823] do nothing
        [  824] store the literal value 1917 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  827] do nothing
        [  828] store the literal value 1944 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  831] do nothing
        [  832] store the literal value 1975 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  835] do nothing
        [  836] store the literal value 2004 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  839] do nothing
        [  840] store the literal value 2034 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  843] do nothing
        [  844] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  860] store the literal value 2049 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  863] SWITCH 512: {1->#866, 2->#872, 3->#878, 4->#884, 5->#890, 6->#896, 7->#902, 8->#908, 9->#914, 10->#920, 11->#926, 12->#932, 13->#936, 14->#940, 512->#944, 32->#950, 64->#956, 128->#962, 256->#968} else #974
        [  866] store the literal value 2050 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  869] play sound effect 257
        [  871] do nothing
        [  872] store the literal value 2077 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  875] play sound effect 257
        [  877] do nothing
        [  878] store the literal value 2103 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  881] play sound effect 260
        [  883] do nothing
        [  884] store the literal value 2133 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  887] play sound effect 260
        [  889] do nothing
        [  890] store the literal value 2157 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  893] play sound effect 260
        [  895] do nothing
        [  896] store the literal value 2182 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  899] play sound effect 261
        [  901] do nothing
        [  902] store the literal value 2236 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  905] play sound effect 257
        [  907] do nothing
        [  908] store the literal value 2260 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  911] play sound effect 261
        [  913] do nothing
        [  914] store the literal value 2315 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  917] play sound effect 262
        [  919] do nothing
        [  920] store the literal value 2360 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  923] play sound effect 262
        [  925] do nothing
        [  926] store the literal value 2411 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  929] play sound effect 259
        [  931] do nothing
        [  932] store the literal value 2494 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  935] do nothing
        [  936] store the literal value 2558 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  939] do nothing
        [  940] store the literal value 2612 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  943] do nothing
        [  944] store the literal value 2684 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  947] play sound effect 258
        [  949] do nothing
        [  950] store the literal value 2718 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  953] play sound effect 258
        [  955] do nothing
        [  956] store the literal value 2757 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  959] play sound effect 258
        [  961] do nothing
        [  962] store the literal value 2796 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  965] play sound effect 258
        [  967] do nothing
        [  968] store the literal value 2837 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  971] play sound effect 258
        [  973] do nothing
        [  974] store the literal value 2877 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  977] do nothing
        [  978] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1018] display system/chat message #2916: " þ"
        [ 1020] IF NOT(((var(26) & 512) == 0)): GOTO #1027  (else falls through, rejoins #1027)
        [ 1024] set script variable #26 = (var(26) + 512)
        [ 1027] IF NOT(((var(26) & 512) > 0)): GOTO #1034  (else falls through, rejoins #1034)
        [ 1031] set script variable #26 = (var(26) - 512)
        [ 1034] IF NOT((group_condition_ref_2(1, 1) && group_condition_ref_2(1, 2))): GOTO #1318  (else falls through, rejoins #1325)
        [ 1038] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [ 1041] set script variable #30 = random_below(100)
        [ 1044] IF NOT(((var(3) == 0) && (var(30) < 2))): GOTO #1311  (else falls through, rejoins #1311)
        [ 1048] set script variable #3 = (var(3) + 1)
        [ 1051] store the literal value 2934 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1054] SWITCH random_below(4): {0->#1057, 1->#1061, 2->#1065, 7->#1069} else #1073
        [ 1057] store the literal value 2935 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1060] do nothing
        [ 1061] store the literal value 2970 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1064] do nothing
        [ 1065] store the literal value 2997 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1068] do nothing
        [ 1069] store the literal value 3036 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1072] do nothing
        [ 1073] store the literal value 3064 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1076] do nothing
        [ 1077] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1087] store the literal value 3117 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1090] set script variable #31 = random_below(4)
        [ 1093] IF NOT(((random_below(4) != 7) && (var(31) >= 3))): GOTO #1100  (else falls through, rejoins #1100)
        [ 1097] set script variable #31 = random_below(3)
        [ 1100] SWITCH var(31): {0->#1103, 1->#1107, 3->#1111, 4->#1115, 5->#1119, 6->#1123, 7->#1127} else #1131
        [ 1103] store the literal value 3118 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1106] do nothing
        [ 1107] store the literal value 3122 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1110] do nothing
        [ 1111] store the literal value 3133 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1114] do nothing
        [ 1115] store the literal value 3154 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1118] do nothing
        [ 1119] store the literal value 3181 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1122] do nothing
        [ 1123] store the literal value 3212 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1126] do nothing
        [ 1127] store the literal value 3241 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1130] do nothing
        [ 1131] store the literal value 3271 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1134] do nothing
        [ 1135] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1151] store the literal value 3286 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1154] SWITCH 32: {1->#1157, 2->#1163, 3->#1169, 4->#1175, 5->#1181, 6->#1187, 7->#1193, 8->#1199, 9->#1205, 10->#1211, 11->#1217, 12->#1223, 13->#1227, 14->#1231, 512->#1235, 32->#1241, 64->#1247, 128->#1253, 256->#1259} else #1265
        [ 1157] store the literal value 3287 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1160] play sound effect 257
        [ 1162] do nothing
        [ 1163] store the literal value 3314 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1166] play sound effect 257
        [ 1168] do nothing
        [ 1169] store the literal value 3340 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1172] play sound effect 260
        [ 1174] do nothing
        [ 1175] store the literal value 3370 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1178] play sound effect 260
        [ 1180] do nothing
        [ 1181] store the literal value 3394 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1184] play sound effect 260
        [ 1186] do nothing
        [ 1187] store the literal value 3419 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1190] play sound effect 261
        [ 1192] do nothing
        [ 1193] store the literal value 3473 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1196] play sound effect 257
        [ 1198] do nothing
        [ 1199] store the literal value 3497 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1202] play sound effect 261
        [ 1204] do nothing
        [ 1205] store the literal value 3552 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1208] play sound effect 262
        [ 1210] do nothing
        [ 1211] store the literal value 3597 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1214] play sound effect 262
        [ 1216] do nothing
        [ 1217] store the literal value 3648 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1220] play sound effect 259
        [ 1222] do nothing
        [ 1223] store the literal value 3731 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1226] do nothing
        [ 1227] store the literal value 3795 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1230] do nothing
        [ 1231] store the literal value 3849 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1234] do nothing
        [ 1235] store the literal value 3921 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1238] play sound effect 258
        [ 1240] do nothing
        [ 1241] store the literal value 3955 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1244] play sound effect 258
        [ 1246] do nothing
        [ 1247] store the literal value 3994 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1250] play sound effect 258
        [ 1252] do nothing
        [ 1253] store the literal value 4033 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1256] play sound effect 258
        [ 1258] do nothing
        [ 1259] store the literal value 4074 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1262] play sound effect 258
        [ 1264] do nothing
        [ 1265] store the literal value 4114 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1268] do nothing
        [ 1269] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1309] display system/chat message #4153: " þ"
        [ 1311] IF NOT(((var(26) & 32) == 0)): GOTO #1318  (else falls through, rejoins #1318)
        [ 1315] set script variable #26 = (var(26) + 32)
        [ 1318] IF NOT(((var(26) & 32) > 0)): GOTO #1325  (else falls through, rejoins #1325)
        [ 1322] set script variable #26 = (var(26) - 32)
        [ 1325] IF NOT((group_condition_ref_2(2, 1) && group_condition_ref_2(2, 2))): GOTO #1609  (else falls through, rejoins #1616)
        [ 1329] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [ 1332] set script variable #33 = random_below(100)
        [ 1335] IF NOT(((var(3) == 0) && (var(33) < 2))): GOTO #1602  (else falls through, rejoins #1602)
        [ 1339] set script variable #3 = (var(3) + 1)
        [ 1342] store the literal value 4171 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1345] SWITCH random_below(4): {0->#1348, 1->#1352, 2->#1356, 7->#1360} else #1364
        [ 1348] store the literal value 4172 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1351] do nothing
        [ 1352] store the literal value 4207 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1355] do nothing
        [ 1356] store the literal value 4234 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1359] do nothing
        [ 1360] store the literal value 4273 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1363] do nothing
        [ 1364] store the literal value 4301 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1367] do nothing
        [ 1368] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1378] store the literal value 4354 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1381] set script variable #34 = random_below(4)
        [ 1384] IF NOT(((random_below(4) != 7) && (var(34) >= 3))): GOTO #1391  (else falls through, rejoins #1391)
        [ 1388] set script variable #34 = random_below(3)
        [ 1391] SWITCH var(34): {0->#1394, 1->#1398, 3->#1402, 4->#1406, 5->#1410, 6->#1414, 7->#1418} else #1422
        [ 1394] store the literal value 4355 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1397] do nothing
        [ 1398] store the literal value 4359 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1401] do nothing
        [ 1402] store the literal value 4370 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1405] do nothing
        [ 1406] store the literal value 4391 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1409] do nothing
        [ 1410] store the literal value 4418 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1413] do nothing
        [ 1414] store the literal value 4449 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1417] do nothing
        [ 1418] store the literal value 4478 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1421] do nothing
        [ 1422] store the literal value 4508 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1425] do nothing
        [ 1426] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1442] store the literal value 4523 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1445] SWITCH 64: {1->#1448, 2->#1454, 3->#1460, 4->#1466, 5->#1472, 6->#1478, 7->#1484, 8->#1490, 9->#1496, 10->#1502, 11->#1508, 12->#1514, 13->#1518, 14->#1522, 512->#1526, 32->#1532, 64->#1538, 128->#1544, 256->#1550} else #1556
        [ 1448] store the literal value 4524 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1451] play sound effect 257
        [ 1453] do nothing
        [ 1454] store the literal value 4551 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1457] play sound effect 257
        [ 1459] do nothing
        [ 1460] store the literal value 4577 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1463] play sound effect 260
        [ 1465] do nothing
        [ 1466] store the literal value 4607 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1469] play sound effect 260
        [ 1471] do nothing
        [ 1472] store the literal value 4631 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1475] play sound effect 260
        [ 1477] do nothing
        [ 1478] store the literal value 4656 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1481] play sound effect 261
        [ 1483] do nothing
        [ 1484] store the literal value 4710 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1487] play sound effect 257
        [ 1489] do nothing
        [ 1490] store the literal value 4734 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1493] play sound effect 261
        [ 1495] do nothing
        [ 1496] store the literal value 4789 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1499] play sound effect 262
        [ 1501] do nothing
        [ 1502] store the literal value 4834 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1505] play sound effect 262
        [ 1507] do nothing
        [ 1508] store the literal value 4885 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1511] play sound effect 259
        [ 1513] do nothing
        [ 1514] store the literal value 4968 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1517] do nothing
        [ 1518] store the literal value 5032 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1521] do nothing
        [ 1522] store the literal value 5086 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1525] do nothing
        [ 1526] store the literal value 5158 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1529] play sound effect 258
        [ 1531] do nothing
        [ 1532] store the literal value 5192 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1535] play sound effect 258
        [ 1537] do nothing
        [ 1538] store the literal value 5231 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1541] play sound effect 258
        [ 1543] do nothing
        [ 1544] store the literal value 5270 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1547] play sound effect 258
        [ 1549] do nothing
        [ 1550] store the literal value 5311 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1553] play sound effect 258
        [ 1555] do nothing
        [ 1556] store the literal value 5351 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1559] do nothing
        [ 1560] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1600] display system/chat message #5390: " þ
"
        [ 1602] IF NOT(((var(26) & 64) == 0)): GOTO #1609  (else falls through, rejoins #1609)
        [ 1606] set script variable #26 = (var(26) + 64)
        [ 1609] IF NOT(((var(26) & 64) > 0)): GOTO #1616  (else falls through, rejoins #1616)
        [ 1613] set script variable #26 = (var(26) - 64)
        [ 1616] IF NOT((group_condition_ref_2(3, 1) && group_condition_ref_2(3, 2))): GOTO #1900  (else falls through, rejoins #1907)
        [ 1620] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #8
        [ 1623] set script variable #36 = random_below(100)
        [ 1626] IF NOT(((var(3) == 0) && (var(36) < 2))): GOTO #1893  (else falls through, rejoins #1893)
        [ 1630] set script variable #3 = (var(3) + 1)
        [ 1633] store the literal value 5408 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1636] SWITCH random_below(4): {0->#1639, 1->#1643, 2->#1647, 7->#1651} else #1655
        [ 1639] store the literal value 5409 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1642] do nothing
        [ 1643] store the literal value 5444 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1646] do nothing
        [ 1647] store the literal value 5471 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1650] do nothing
        [ 1651] store the literal value 5510 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1654] do nothing
        [ 1655] store the literal value 5538 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1658] do nothing
        [ 1659] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1669] store the literal value 5591 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1672] set script variable #37 = random_below(4)
        [ 1675] IF NOT(((random_below(4) != 7) && (var(37) >= 3))): GOTO #1682  (else falls through, rejoins #1682)
        [ 1679] set script variable #37 = random_below(3)
        [ 1682] SWITCH var(37): {0->#1685, 1->#1689, 3->#1693, 4->#1697, 5->#1701, 6->#1705, 7->#1709} else #1713
        [ 1685] store the literal value 5592 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1688] do nothing
        [ 1689] store the literal value 5596 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1692] do nothing
        [ 1693] store the literal value 5607 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1696] do nothing
        [ 1697] store the literal value 5628 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1700] do nothing
        [ 1701] store the literal value 5655 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1704] do nothing
        [ 1705] store the literal value 5686 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1708] do nothing
        [ 1709] store the literal value 5715 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1712] do nothing
        [ 1713] store the literal value 5745 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1716] do nothing
        [ 1717] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1733] store the literal value 5760 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1736] SWITCH 128: {1->#1739, 2->#1745, 3->#1751, 4->#1757, 5->#1763, 6->#1769, 7->#1775, 8->#1781, 9->#1787, 10->#1793, 11->#1799, 12->#1805, 13->#1809, 14->#1813, 512->#1817, 32->#1823, 64->#1829, 128->#1835, 256->#1841} else #1847
        [ 1739] store the literal value 5761 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1742] play sound effect 257
        [ 1744] do nothing
        [ 1745] store the literal value 5788 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1748] play sound effect 257
        [ 1750] do nothing
        [ 1751] store the literal value 5814 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1754] play sound effect 260
        [ 1756] do nothing
        [ 1757] store the literal value 5844 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1760] play sound effect 260
        [ 1762] do nothing
        [ 1763] store the literal value 5868 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1766] play sound effect 260
        [ 1768] do nothing
        [ 1769] store the literal value 5893 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1772] play sound effect 261
        [ 1774] do nothing
        [ 1775] store the literal value 5947 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1778] play sound effect 257
        [ 1780] do nothing
        [ 1781] store the literal value 5971 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1784] play sound effect 261
        [ 1786] do nothing
        [ 1787] store the literal value 6026 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1790] play sound effect 262
        [ 1792] do nothing
        [ 1793] store the literal value 6071 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1796] play sound effect 262
        [ 1798] do nothing
        [ 1799] store the literal value 6122 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1802] play sound effect 259
        [ 1804] do nothing
        [ 1805] store the literal value 6205 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1808] do nothing
        [ 1809] store the literal value 6269 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1812] do nothing
        [ 1813] store the literal value 6323 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1816] do nothing
        [ 1817] store the literal value 6395 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1820] play sound effect 258
        [ 1822] do nothing
        [ 1823] store the literal value 6429 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1826] play sound effect 258
        [ 1828] do nothing
        [ 1829] store the literal value 6468 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1832] play sound effect 258
        [ 1834] do nothing
        [ 1835] store the literal value 6507 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1838] play sound effect 258
        [ 1840] do nothing
        [ 1841] store the literal value 6548 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1844] play sound effect 258
        [ 1846] do nothing
        [ 1847] store the literal value 6588 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1850] do nothing
        [ 1851] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1891] display system/chat message #6627: " þ"
        [ 1893] IF NOT(((var(26) & 128) == 0)): GOTO #1900  (else falls through, rejoins #1900)
        [ 1897] set script variable #26 = (var(26) + 128)
        [ 1900] IF NOT(((var(26) & 128) > 0)): GOTO #1907  (else falls through, rejoins #1907)
        [ 1904] set script variable #26 = (var(26) - 128)
        [ 1907] IF NOT((group_condition_ref_2(4, 1) && group_condition_ref_2(4, 2))): GOTO #2191  (else falls through, rejoins #2198)
        [ 1911] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1914] set script variable #39 = random_below(100)
        [ 1917] IF NOT(((var(3) == 0) && (var(39) < 2))): GOTO #2184  (else falls through, rejoins #2184)
        [ 1921] set script variable #3 = (var(3) + 1)
        [ 1924] store the literal value 6645 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1927] SWITCH random_below(4): {0->#1930, 1->#1934, 2->#1938, 7->#1942} else #1946
        [ 1930] store the literal value 6646 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1933] do nothing
        [ 1934] store the literal value 6681 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1937] do nothing
        [ 1938] store the literal value 6708 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1941] do nothing
        [ 1942] store the literal value 6747 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1945] do nothing
        [ 1946] store the literal value 6775 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1949] do nothing
        [ 1950] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1960] store the literal value 6828 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1963] set script variable #40 = random_below(4)
        [ 1966] IF NOT(((random_below(4) != 7) && (var(40) >= 3))): GOTO #1973  (else falls through, rejoins #1973)
        [ 1970] set script variable #40 = random_below(3)
        [ 1973] SWITCH var(40): {0->#1976, 1->#1980, 3->#1984, 4->#1988, 5->#1992, 6->#1996, 7->#2000} else #2004
        [ 1976] store the literal value 6829 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1979] do nothing
        [ 1980] store the literal value 6833 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1983] do nothing
        [ 1984] store the literal value 6844 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1987] do nothing
        [ 1988] store the literal value 6865 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1991] do nothing
        [ 1992] store the literal value 6892 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1995] do nothing
        [ 1996] store the literal value 6923 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1999] do nothing
        [ 2000] store the literal value 6952 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2003] do nothing
        [ 2004] store the literal value 6982 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2007] do nothing
        [ 2008] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2024] store the literal value 6997 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2027] SWITCH 256: {1->#2030, 2->#2036, 3->#2042, 4->#2048, 5->#2054, 6->#2060, 7->#2066, 8->#2072, 9->#2078, 10->#2084, 11->#2090, 12->#2096, 13->#2100, 14->#2104, 512->#2108, 32->#2114, 64->#2120, 128->#2126, 256->#2132} else #2138
        [ 2030] store the literal value 6998 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2033] play sound effect 257
        [ 2035] do nothing
        [ 2036] store the literal value 7025 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2039] play sound effect 257
        [ 2041] do nothing
        [ 2042] store the literal value 7051 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2045] play sound effect 260
        [ 2047] do nothing
        [ 2048] store the literal value 7081 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2051] play sound effect 260
        [ 2053] do nothing
        [ 2054] store the literal value 7105 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2057] play sound effect 260
        [ 2059] do nothing
        [ 2060] store the literal value 7130 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2063] play sound effect 261
        [ 2065] do nothing
        [ 2066] store the literal value 7184 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2069] play sound effect 257
        [ 2071] do nothing
        [ 2072] store the literal value 7208 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2075] play sound effect 261
        [ 2077] do nothing
        [ 2078] store the literal value 7263 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2081] play sound effect 262
        [ 2083] do nothing
        [ 2084] store the literal value 7308 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2087] play sound effect 262
        [ 2089] do nothing
        [ 2090] store the literal value 7359 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2093] play sound effect 259
        [ 2095] do nothing
        [ 2096] store the literal value 7442 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2099] do nothing
        [ 2100] store the literal value 7506 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2103] do nothing
        [ 2104] store the literal value 7560 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2107] do nothing
        [ 2108] store the literal value 7632 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2111] play sound effect 258
        [ 2113] do nothing
        [ 2114] store the literal value 7666 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2117] play sound effect 258
        [ 2119] do nothing
        [ 2120] store the literal value 7705 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2123] play sound effect 258
        [ 2125] do nothing
        [ 2126] store the literal value 7744 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2129] play sound effect 258
        [ 2131] do nothing
        [ 2132] store the literal value 7785 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2135] play sound effect 258
        [ 2137] do nothing
        [ 2138] store the literal value 7825 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2141] do nothing
        [ 2142] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2182] display system/chat message #7864: " þ"
        [ 2184] IF NOT(((var(26) & 256) == 0)): GOTO #2191  (else falls through, rejoins #2191)
        [ 2188] set script variable #26 = (var(26) + 256)
        [ 2191] IF NOT(((var(26) & 256) > 0)): GOTO #2198  (else falls through, rejoins #2198)
        [ 2195] set script variable #26 = (var(26) - 256)
        [ 2198] IF NOT((group_condition_ref_2(5, 1) && group_condition_ref_2(5, 2))): GOTO #2482  (else falls through, rejoins #2489)
        [ 2202] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #10
        [ 2205] set script variable #42 = random_below(100)
        [ 2208] IF NOT(((var(3) == 0) && (var(42) < 2))): GOTO #2475  (else falls through, rejoins #2475)
        [ 2212] set script variable #3 = (var(3) + 1)
        [ 2215] store the literal value 7882 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2218] SWITCH random_below(4): {0->#2221, 1->#2225, 2->#2229, 7->#2233} else #2237
        [ 2221] store the literal value 7883 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2224] do nothing
        [ 2225] store the literal value 7918 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2228] do nothing
        [ 2229] store the literal value 7945 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2232] do nothing
        [ 2233] store the literal value 7984 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2236] do nothing
        [ 2237] store the literal value 8012 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2240] do nothing
        [ 2241] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2251] store the literal value 8065 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2254] set script variable #43 = random_below(4)
        [ 2257] IF NOT(((random_below(4) != 7) && (var(43) >= 3))): GOTO #2264  (else falls through, rejoins #2264)
        [ 2261] set script variable #43 = random_below(3)
        [ 2264] SWITCH var(43): {0->#2267, 1->#2271, 3->#2275, 4->#2279, 5->#2283, 6->#2287, 7->#2291} else #2295
        [ 2267] store the literal value 8066 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2270] do nothing
        [ 2271] store the literal value 8070 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2274] do nothing
        [ 2275] store the literal value 8081 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2278] do nothing
        [ 2279] store the literal value 8102 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2282] do nothing
        [ 2283] store the literal value 8129 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2286] do nothing
        [ 2287] store the literal value 8160 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2290] do nothing
        [ 2291] store the literal value 8189 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2294] do nothing
        [ 2295] store the literal value 8219 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2298] do nothing
        [ 2299] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2315] store the literal value 8234 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2318] SWITCH 2048: {1->#2321, 2->#2327, 3->#2333, 4->#2339, 5->#2345, 6->#2351, 7->#2357, 8->#2363, 9->#2369, 10->#2375, 11->#2381, 12->#2387, 13->#2391, 14->#2395, 512->#2399, 32->#2405, 64->#2411, 128->#2417, 256->#2423} else #2429
        [ 2321] store the literal value 8235 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2324] play sound effect 257
        [ 2326] do nothing
        [ 2327] store the literal value 8262 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2330] play sound effect 257
        [ 2332] do nothing
        [ 2333] store the literal value 8288 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2336] play sound effect 260
        [ 2338] do nothing
        [ 2339] store the literal value 8318 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2342] play sound effect 260
        [ 2344] do nothing
        [ 2345] store the literal value 8342 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2348] play sound effect 260
        [ 2350] do nothing
        [ 2351] store the literal value 8367 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2354] play sound effect 261
        [ 2356] do nothing
        [ 2357] store the literal value 8421 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2360] play sound effect 257
        [ 2362] do nothing
        [ 2363] store the literal value 8445 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2366] play sound effect 261
        [ 2368] do nothing
        [ 2369] store the literal value 8500 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2372] play sound effect 262
        [ 2374] do nothing
        [ 2375] store the literal value 8545 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2378] play sound effect 262
        [ 2380] do nothing
        [ 2381] store the literal value 8596 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2384] play sound effect 259
        [ 2386] do nothing
        [ 2387] store the literal value 8679 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2390] do nothing
        [ 2391] store the literal value 8743 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2394] do nothing
        [ 2395] store the literal value 8797 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2398] do nothing
        [ 2399] store the literal value 8869 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2402] play sound effect 258
        [ 2404] do nothing
        [ 2405] store the literal value 8903 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2408] play sound effect 258
        [ 2410] do nothing
        [ 2411] store the literal value 8942 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2414] play sound effect 258
        [ 2416] do nothing
        [ 2417] store the literal value 8981 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2420] play sound effect 258
        [ 2422] do nothing
        [ 2423] store the literal value 9022 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2426] play sound effect 258
        [ 2428] do nothing
        [ 2429] store the literal value 9062 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2432] do nothing
        [ 2433] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2473] display system/chat message #9101: " þ"
        [ 2475] IF NOT(((var(26) & 2048) == 0)): GOTO #2482  (else falls through, rejoins #2482)
        [ 2479] set script variable #26 = (var(26) + 2048)
        [ 2482] IF NOT(((var(26) & 2048) > 0)): GOTO #2489  (else falls through, rejoins #2489)
        [ 2486] set script variable #26 = (var(26) - 2048)
        [ 2489] IF NOT((group_condition_ref_2(6, 1) && group_condition_ref_2(6, 2))): GOTO #2773  (else falls through, rejoins #2780)
        [ 2493] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 2496] set script variable #45 = random_below(100)
        [ 2499] IF NOT(((var(3) == 0) && (var(45) < 2))): GOTO #2766  (else falls through, rejoins #2766)
        [ 2503] set script variable #3 = (var(3) + 1)
        [ 2506] store the literal value 9119 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2509] SWITCH random_below(4): {0->#2512, 1->#2516, 2->#2520, 7->#2524} else #2528
        [ 2512] store the literal value 9120 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2515] do nothing
        [ 2516] store the literal value 9155 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2519] do nothing
        [ 2520] store the literal value 9182 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2523] do nothing
        [ 2524] store the literal value 9221 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2527] do nothing
        [ 2528] store the literal value 9249 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2531] do nothing
        [ 2532] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2542] store the literal value 9302 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2545] set script variable #46 = random_below(4)
        [ 2548] IF NOT(((random_below(4) != 7) && (var(46) >= 3))): GOTO #2555  (else falls through, rejoins #2555)
        [ 2552] set script variable #46 = random_below(3)
        [ 2555] SWITCH var(46): {0->#2558, 1->#2562, 3->#2566, 4->#2570, 5->#2574, 6->#2578, 7->#2582} else #2586
        [ 2558] store the literal value 9303 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2561] do nothing
        [ 2562] store the literal value 9307 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2565] do nothing
        [ 2566] store the literal value 9318 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2569] do nothing
        [ 2570] store the literal value 9339 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2573] do nothing
        [ 2574] store the literal value 9366 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2577] do nothing
        [ 2578] store the literal value 9397 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2581] do nothing
        [ 2582] store the literal value 9426 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2585] do nothing
        [ 2586] store the literal value 9456 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2589] do nothing
        [ 2590] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2606] store the literal value 9471 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2609] SWITCH 4096: {1->#2612, 2->#2618, 3->#2624, 4->#2630, 5->#2636, 6->#2642, 7->#2648, 8->#2654, 9->#2660, 10->#2666, 11->#2672, 12->#2678, 13->#2682, 14->#2686, 512->#2690, 32->#2696, 64->#2702, 128->#2708, 256->#2714} else #2720
        [ 2612] store the literal value 9472 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2615] play sound effect 257
        [ 2617] do nothing
        [ 2618] store the literal value 9499 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2621] play sound effect 257
        [ 2623] do nothing
        [ 2624] store the literal value 9525 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2627] play sound effect 260
        [ 2629] do nothing
        [ 2630] store the literal value 9555 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2633] play sound effect 260
        [ 2635] do nothing
        [ 2636] store the literal value 9579 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2639] play sound effect 260
        [ 2641] do nothing
        [ 2642] store the literal value 9604 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2645] play sound effect 261
        [ 2647] do nothing
        [ 2648] store the literal value 9658 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2651] play sound effect 257
        [ 2653] do nothing
        [ 2654] store the literal value 9682 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2657] play sound effect 261
        [ 2659] do nothing
        [ 2660] store the literal value 9737 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2663] play sound effect 262
        [ 2665] do nothing
        [ 2666] store the literal value 9782 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2669] play sound effect 262
        [ 2671] do nothing
        [ 2672] store the literal value 9833 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2675] play sound effect 259
        [ 2677] do nothing
        [ 2678] store the literal value 9916 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2681] do nothing
        [ 2682] store the literal value 9980 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2685] do nothing
        [ 2686] store the literal value 10034 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2689] do nothing
        [ 2690] store the literal value 10106 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2693] play sound effect 258
        [ 2695] do nothing
        [ 2696] store the literal value 10140 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2699] play sound effect 258
        [ 2701] do nothing
        [ 2702] store the literal value 10179 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2705] play sound effect 258
        [ 2707] do nothing
        [ 2708] store the literal value 10218 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2711] play sound effect 258
        [ 2713] do nothing
        [ 2714] store the literal value 10259 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2717] play sound effect 258
        [ 2719] do nothing
        [ 2720] store the literal value 10299 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2723] do nothing
        [ 2724] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2764] display system/chat message #10338: " þ"
        [ 2766] IF NOT(((var(26) & 4096) == 0)): GOTO #2773  (else falls through, rejoins #2773)
        [ 2770] set script variable #26 = (var(26) + 4096)
        [ 2773] IF NOT(((var(26) & 4096) > 0)): GOTO #2780  (else falls through, rejoins #2780)
        [ 2777] set script variable #26 = (var(26) - 4096)
        [ 2780] set script variable #48 = 0
        [ 2783] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 2786] WHILE set_unit_behavior(0, 12): loop below; exit -> #3075 (500-iteration guard)
        [ 2789] IF NOT((set_unit_behavior(9, 12) > 0)): GOTO #3070  (else falls through, rejoins #3070)
        [ 2793] set script variable #49 = random_below(100)
        [ 2796] IF NOT(((var(3) == 0) && (var(49) < 4))): GOTO #3063  (else falls through, rejoins #3063)
        [ 2800] set script variable #3 = (var(3) + 1)
        [ 2803] store the literal value 10356 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2806] SWITCH random_below(4): {0->#2809, 1->#2813, 2->#2817, 7->#2821} else #2825
        [ 2809] store the literal value 10357 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2812] do nothing
        [ 2813] store the literal value 10392 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2816] do nothing
        [ 2817] store the literal value 10419 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2820] do nothing
        [ 2821] store the literal value 10458 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2824] do nothing
        [ 2825] store the literal value 10486 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2828] do nothing
        [ 2829] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2839] store the literal value 10539 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2842] set script variable #50 = random_below(1)
        [ 2845] IF NOT(((random_below(4) != 7) && (var(50) >= 3))): GOTO #2852  (else falls through, rejoins #2852)
        [ 2849] set script variable #50 = random_below(3)
        [ 2852] SWITCH var(50): {0->#2855, 1->#2859, 3->#2863, 4->#2867, 5->#2871, 6->#2875, 7->#2879} else #2883
        [ 2855] store the literal value 10540 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2858] do nothing
        [ 2859] store the literal value 10544 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2862] do nothing
        [ 2863] store the literal value 10555 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2866] do nothing
        [ 2867] store the literal value 10576 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2870] do nothing
        [ 2871] store the literal value 10603 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2874] do nothing
        [ 2875] store the literal value 10634 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2878] do nothing
        [ 2879] store the literal value 10663 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2882] do nothing
        [ 2883] store the literal value 10693 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2886] do nothing
        [ 2887] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2903] store the literal value 10708 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2906] SWITCH 10: {1->#2909, 2->#2915, 3->#2921, 4->#2927, 5->#2933, 6->#2939, 7->#2945, 8->#2951, 9->#2957, 10->#2963, 11->#2969, 12->#2975, 13->#2979, 14->#2983, 512->#2987, 32->#2993, 64->#2999, 128->#3005, 256->#3011} else #3017
        [ 2909] store the literal value 10709 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2912] play sound effect 257
        [ 2914] do nothing
        [ 2915] store the literal value 10736 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2918] play sound effect 257
        [ 2920] do nothing
        [ 2921] store the literal value 10762 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2924] play sound effect 260
        [ 2926] do nothing
        [ 2927] store the literal value 10792 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2930] play sound effect 260
        [ 2932] do nothing
        [ 2933] store the literal value 10816 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2936] play sound effect 260
        [ 2938] do nothing
        [ 2939] store the literal value 10841 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2942] play sound effect 261
        [ 2944] do nothing
        [ 2945] store the literal value 10895 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2948] play sound effect 257
        [ 2950] do nothing
        [ 2951] store the literal value 10919 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2954] play sound effect 261
        [ 2956] do nothing
        [ 2957] store the literal value 10974 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2960] play sound effect 262
        [ 2962] do nothing
        [ 2963] store the literal value 11019 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2966] play sound effect 262
        [ 2968] do nothing
        [ 2969] store the literal value 11070 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2972] play sound effect 259
        [ 2974] do nothing
        [ 2975] store the literal value 11153 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2978] do nothing
        [ 2979] store the literal value 11217 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2982] do nothing
        [ 2983] store the literal value 11271 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2986] do nothing
        [ 2987] store the literal value 11343 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2990] play sound effect 258
        [ 2992] do nothing
        [ 2993] store the literal value 11377 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2996] play sound effect 258
        [ 2998] do nothing
        [ 2999] store the literal value 11416 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3002] play sound effect 258
        [ 3004] do nothing
        [ 3005] store the literal value 11455 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3008] play sound effect 258
        [ 3010] do nothing
        [ 3011] store the literal value 11496 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3014] play sound effect 258
        [ 3016] do nothing
        [ 3017] store the literal value 11536 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3020] do nothing
        [ 3021] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3061] display system/chat message #11575: " þ"
        [ 3063] IF NOT(((set_unit_behavior(8, 12) & var(26)) == 0)): GOTO #3070  (else falls through, rejoins #3070)
        [ 3067] set script variable #26 = (var(26) + (set_unit_behavior(8, 12) & 7136))
        [ 3070] advance unit-slot #12 to the next unit in group #2 after the current one
        [ 3073] GOTO #2789
        [ 3075] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #13
        [ 3078] WHILE set_unit_behavior(0, 13): loop below; exit -> #3109 (500-iteration guard)
        [ 3081] IF NOT(group_condition_ref_2(8, 2)): GOTO #3088  (else falls through, rejoins #3095)
        [ 3085] set attribute #8 of unit-slot #13 to 2
        [ 3088] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #3095  (else falls through, rejoins #3095)
        [ 3092] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 3095] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #3104  (else falls through, rejoins #3104)
        [ 3099] set script variable #48 = (var(48) + 1)
        [ 3102] do nothing (message no-op)
        [ 3103] (UNKNOWN OPCODE 0x2d49) - dead end, not decoded further (other branches continue independently)
        [ 3104] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 3107] GOTO #3081
        [ 3109] IF NOT(group_condition_ref_2(9, 2)): GOTO #3116  (else falls through, rejoins #3123)
        [ 3113] set attribute #8 of unit-slot #13 to 2
        [ 3116] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #3123  (else falls through, rejoins #3123)
        [ 3120] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 3123] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #3132  (else falls through, rejoins #3132)
        [ 3127] set script variable #48 = (var(48) + 1)
        [ 3130] do nothing (message no-op)
        [ 3131] (UNKNOWN OPCODE 0x2d5c) - dead end, not decoded further (other branches continue independently)
        [ 3132] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 3135] set script variable #52 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 3138] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 3141] WHILE set_unit_behavior(0, 12): loop below; exit -> #6295 (500-iteration guard)
        [ 3144] IF NOT((set_unit_behavior(5, 12) < 60)): GOTO #3153  (else falls through, rejoins #6290)
        [ 3148] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 3153] SWITCH (set_unit_behavior(8, 12) & 15): {0->#3156, 1->#3439, 2->#4272, 3->#4831, 4->#4841, 5->#4886, 10->#5171, 11->#5181, 12->#5579, 13->#5580, 14->#5875, 15->#5876} else #6262
        [ 3156] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #3438  (else falls through, rejoins #3438)
        [ 3160] set script variable #53 = random_below(100)
        [ 3163] IF NOT(((var(3) == 0) && (var(53) < 40))): GOTO #3430  (else falls through, rejoins #3430)
        [ 3167] set script variable #3 = (var(3) + 1)
        [ 3170] store the literal value 11631 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3173] SWITCH random_below(1): {0->#3176, 1->#3180, 2->#3184, 7->#3188} else #3192
        [ 3176] store the literal value 11632 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3179] do nothing
        [ 3180] store the literal value 11667 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3183] do nothing
        [ 3184] store the literal value 11694 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3187] do nothing
        [ 3188] store the literal value 11733 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3191] do nothing
        [ 3192] store the literal value 11761 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3195] do nothing
        [ 3196] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3206] store the literal value 11814 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3209] set script variable #54 = random_below(4)
        [ 3212] IF NOT(((random_below(1) != 7) && (var(54) >= 3))): GOTO #3219  (else falls through, rejoins #3219)
        [ 3216] set script variable #54 = random_below(3)
        [ 3219] SWITCH var(54): {0->#3222, 1->#3226, 3->#3230, 4->#3234, 5->#3238, 6->#3242, 7->#3246} else #3250
        [ 3222] store the literal value 11815 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3225] do nothing
        [ 3226] store the literal value 11819 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3229] do nothing
        [ 3230] store the literal value 11830 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3233] do nothing
        [ 3234] store the literal value 11851 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3237] do nothing
        [ 3238] store the literal value 11878 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3241] do nothing
        [ 3242] store the literal value 11909 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3245] do nothing
        [ 3246] store the literal value 11938 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3249] do nothing
        [ 3250] store the literal value 11968 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3253] do nothing
        [ 3254] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3270] store the literal value 11983 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3273] SWITCH 8: {1->#3276, 2->#3282, 3->#3288, 4->#3294, 5->#3300, 6->#3306, 7->#3312, 8->#3318, 9->#3324, 10->#3330, 11->#3336, 12->#3342, 13->#3346, 14->#3350, 512->#3354, 32->#3360, 64->#3366, 128->#3372, 256->#3378} else #3384
        [ 3276] store the literal value 11984 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3279] play sound effect 257
        [ 3281] do nothing
        [ 3282] store the literal value 12011 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3285] play sound effect 257
        [ 3287] do nothing
        [ 3288] store the literal value 12037 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3291] play sound effect 260
        [ 3293] do nothing
        [ 3294] store the literal value 12067 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3297] play sound effect 260
        [ 3299] do nothing
        [ 3300] store the literal value 12091 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3303] play sound effect 260
        [ 3305] do nothing
        [ 3306] store the literal value 12116 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3309] play sound effect 261
        [ 3311] do nothing
        [ 3312] store the literal value 12170 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3315] play sound effect 257
        [ 3317] do nothing
        [ 3318] store the literal value 12194 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3321] play sound effect 261
        [ 3323] do nothing
        [ 3324] store the literal value 12249 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3327] play sound effect 262
        [ 3329] do nothing
        [ 3330] store the literal value 12294 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3333] play sound effect 262
        [ 3335] do nothing
        [ 3336] store the literal value 12345 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3339] play sound effect 259
        [ 3341] do nothing
        [ 3342] store the literal value 12428 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3345] do nothing
        [ 3346] store the literal value 12492 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3349] do nothing
        [ 3350] store the literal value 12546 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3353] do nothing
        [ 3354] store the literal value 12618 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3357] play sound effect 258
        [ 3359] do nothing
        [ 3360] store the literal value 12652 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3363] play sound effect 258
        [ 3365] do nothing
        [ 3366] store the literal value 12691 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3369] play sound effect 258
        [ 3371] do nothing
        [ 3372] store the literal value 12730 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3375] play sound effect 258
        [ 3377] do nothing
        [ 3378] store the literal value 12771 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3381] play sound effect 258
        [ 3383] do nothing
        [ 3384] store the literal value 12811 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3387] do nothing
        [ 3388] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3428] display system/chat message #12850: " þ"
        [ 3430] order unit-slot #12 to move, speed/priority var(52), destination-type tag 0, destination arg 0
        [ 3435] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 3438] do nothing
        [ 3439] IF NOT((group_condition_ref_2(10, 1) || (set_unit_behavior(9, 12) != 0))): GOTO #3722  (else falls through, rejoins #4271)
        [ 3443] IF NOT((set_unit_behavior(7, 12) != 6)): GOTO #3722  (else falls through, rejoins #3722)
        [ 3447] set script variable #56 = random_below(100)
        [ 3450] IF NOT(((var(3) == 0) && (var(56) < 40))): GOTO #3717  (else falls through, rejoins #3717)
        [ 3454] set script variable #3 = (var(3) + 1)
        [ 3457] store the literal value 12868 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3460] SWITCH random_below(1): {0->#3463, 1->#3467, 2->#3471, 7->#3475} else #3479
        [ 3463] store the literal value 12869 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3466] do nothing
        [ 3467] store the literal value 12904 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3470] do nothing
        [ 3471] store the literal value 12931 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3474] do nothing
        [ 3475] store the literal value 12970 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3478] do nothing
        [ 3479] store the literal value 12998 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3482] do nothing
        [ 3483] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3493] store the literal value 13051 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3496] set script variable #57 = random_below(4)
        [ 3499] IF NOT(((random_below(1) != 7) && (var(57) >= 3))): GOTO #3506  (else falls through, rejoins #3506)
        [ 3503] set script variable #57 = random_below(3)
        [ 3506] SWITCH var(57): {0->#3509, 1->#3513, 3->#3517, 4->#3521, 5->#3525, 6->#3529, 7->#3533} else #3537
        [ 3509] store the literal value 13052 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3512] do nothing
        [ 3513] store the literal value 13056 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3516] do nothing
        [ 3517] store the literal value 13067 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3520] do nothing
        [ 3521] store the literal value 13088 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3524] do nothing
        [ 3525] store the literal value 13115 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3528] do nothing
        [ 3529] store the literal value 13146 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3532] do nothing
        [ 3533] store the literal value 13175 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3536] do nothing
        [ 3537] store the literal value 13205 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3540] do nothing
        [ 3541] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3557] store the literal value 13220 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3560] SWITCH 3: {1->#3563, 2->#3569, 3->#3575, 4->#3581, 5->#3587, 6->#3593, 7->#3599, 8->#3605, 9->#3611, 10->#3617, 11->#3623, 12->#3629, 13->#3633, 14->#3637, 512->#3641, 32->#3647, 64->#3653, 128->#3659, 256->#3665} else #3671
        [ 3563] store the literal value 13221 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3566] play sound effect 257
        [ 3568] do nothing
        [ 3569] store the literal value 13248 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3572] play sound effect 257
        [ 3574] do nothing
        [ 3575] store the literal value 13274 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3578] play sound effect 260
        [ 3580] do nothing
        [ 3581] store the literal value 13304 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3584] play sound effect 260
        [ 3586] do nothing
        [ 3587] store the literal value 13328 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3590] play sound effect 260
        [ 3592] do nothing
        [ 3593] store the literal value 13353 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3596] play sound effect 261
        [ 3598] do nothing
        [ 3599] store the literal value 13407 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3602] play sound effect 257
        [ 3604] do nothing
        [ 3605] store the literal value 13431 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3608] play sound effect 261
        [ 3610] do nothing
        [ 3611] store the literal value 13486 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3614] play sound effect 262
        [ 3616] do nothing
        [ 3617] store the literal value 13531 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3620] play sound effect 262
        [ 3622] do nothing
        [ 3623] store the literal value 13582 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3626] play sound effect 259
        [ 3628] do nothing
        [ 3629] store the literal value 13665 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3632] do nothing
        [ 3633] store the literal value 13729 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3636] do nothing
        [ 3637] store the literal value 13783 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3640] do nothing
        [ 3641] store the literal value 13855 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3644] play sound effect 258
        [ 3646] do nothing
        [ 3647] store the literal value 13889 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3650] play sound effect 258
        [ 3652] do nothing
        [ 3653] store the literal value 13928 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3656] play sound effect 258
        [ 3658] do nothing
        [ 3659] store the literal value 13967 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3662] play sound effect 258
        [ 3664] do nothing
        [ 3665] store the literal value 14008 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3668] play sound effect 258
        [ 3670] do nothing
        [ 3671] store the literal value 14048 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3674] do nothing
        [ 3675] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3715] display system/chat message #14087: " þ"
        [ 3717] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3722] IF NOT((set_unit_behavior(7, 12) != 2)): GOTO #4001  (else falls through, rejoins #4271)
        [ 3726] order unit-slot #12 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 3731] set script variable #59 = random_below(100)
        [ 3734] IF NOT(((var(3) == 0) && (var(59) < 4))): GOTO #4001  (else falls through, rejoins #4001)
        [ 3738] set script variable #3 = (var(3) + 1)
        [ 3741] store the literal value 14105 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3744] SWITCH random_below(1): {0->#3747, 1->#3751, 2->#3755, 7->#3759} else #3763
        [ 3747] store the literal value 14106 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3750] do nothing
        [ 3751] store the literal value 14141 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3754] do nothing
        [ 3755] store the literal value 14168 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3758] do nothing
        [ 3759] store the literal value 14207 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3762] do nothing
        [ 3763] store the literal value 14235 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3766] do nothing
        [ 3767] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3777] store the literal value 14288 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3780] set script variable #60 = random_below(4)
        [ 3783] IF NOT(((random_below(1) != 7) && (var(60) >= 3))): GOTO #3790  (else falls through, rejoins #3790)
        [ 3787] set script variable #60 = random_below(3)
        [ 3790] SWITCH var(60): {0->#3793, 1->#3797, 3->#3801, 4->#3805, 5->#3809, 6->#3813, 7->#3817} else #3821
        [ 3793] store the literal value 14289 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3796] do nothing
        [ 3797] store the literal value 14293 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3800] do nothing
        [ 3801] store the literal value 14304 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3804] do nothing
        [ 3805] store the literal value 14325 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3808] do nothing
        [ 3809] store the literal value 14352 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3812] do nothing
        [ 3813] store the literal value 14383 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3816] do nothing
        [ 3817] store the literal value 14412 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3820] do nothing
        [ 3821] store the literal value 14442 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3824] do nothing
        [ 3825] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3841] store the literal value 14457 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3844] SWITCH 2: {1->#3847, 2->#3853, 3->#3859, 4->#3865, 5->#3871, 6->#3877, 7->#3883, 8->#3889, 9->#3895, 10->#3901, 11->#3907, 12->#3913, 13->#3917, 14->#3921, 512->#3925, 32->#3931, 64->#3937, 128->#3943, 256->#3949} else #3955
        [ 3847] store the literal value 14458 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3850] play sound effect 257
        [ 3852] do nothing
        [ 3853] store the literal value 14485 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3856] play sound effect 257
        [ 3858] do nothing
        [ 3859] store the literal value 14511 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3862] play sound effect 260
        [ 3864] do nothing
        [ 3865] store the literal value 14541 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3868] play sound effect 260
        [ 3870] do nothing
        [ 3871] store the literal value 14565 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3874] play sound effect 260
        [ 3876] do nothing
        [ 3877] store the literal value 14590 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3880] play sound effect 261
        [ 3882] do nothing
        [ 3883] store the literal value 14644 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3886] play sound effect 257
        [ 3888] do nothing
        [ 3889] store the literal value 14668 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3892] play sound effect 261
        [ 3894] do nothing
        [ 3895] store the literal value 14723 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3898] play sound effect 262
        [ 3900] do nothing
        [ 3901] store the literal value 14768 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3904] play sound effect 262
        [ 3906] do nothing
        [ 3907] store the literal value 14819 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3910] play sound effect 259
        [ 3912] do nothing
        [ 3913] store the literal value 14902 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3916] do nothing
        [ 3917] store the literal value 14966 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3920] do nothing
        [ 3921] store the literal value 15020 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3924] do nothing
        [ 3925] store the literal value 15092 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3928] play sound effect 258
        [ 3930] do nothing
        [ 3931] store the literal value 15126 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3934] play sound effect 258
        [ 3936] do nothing
        [ 3937] store the literal value 15165 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3940] play sound effect 258
        [ 3942] do nothing
        [ 3943] store the literal value 15204 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3946] play sound effect 258
        [ 3948] do nothing
        [ 3949] store the literal value 15245 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3952] play sound effect 258
        [ 3954] do nothing
        [ 3955] store the literal value 15285 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3958] do nothing
        [ 3959] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3999] display system/chat message #15324: " þ""
        [ 4001] set script variable #62 = random_below(100)
        [ 4004] IF NOT(((var(3) == 0) && (var(62) < 4))): GOTO #4271  (else falls through, rejoins #4271)
        [ 4008] set script variable #3 = (var(3) + 1)
        [ 4011] store the literal value 15342 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4014] SWITCH random_below(1): {0->#4017, 1->#4021, 2->#4025, 7->#4029} else #4033
        [ 4017] store the literal value 15343 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4020] do nothing
        [ 4021] store the literal value 15378 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4024] do nothing
        [ 4025] store the literal value 15405 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4028] do nothing
        [ 4029] store the literal value 15444 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4032] do nothing
        [ 4033] store the literal value 15472 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4036] do nothing
        [ 4037] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4047] store the literal value 15525 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4050] set script variable #63 = random_below(4)
        [ 4053] IF NOT(((random_below(1) != 7) && (var(63) >= 3))): GOTO #4060  (else falls through, rejoins #4060)
        [ 4057] set script variable #63 = random_below(3)
        [ 4060] SWITCH var(63): {0->#4063, 1->#4067, 3->#4071, 4->#4075, 5->#4079, 6->#4083, 7->#4087} else #4091
        [ 4063] store the literal value 15526 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4066] do nothing
        [ 4067] store the literal value 15530 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4070] do nothing
        [ 4071] store the literal value 15541 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4074] do nothing
        [ 4075] store the literal value 15562 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4078] do nothing
        [ 4079] store the literal value 15589 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4082] do nothing
        [ 4083] store the literal value 15620 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4086] do nothing
        [ 4087] store the literal value 15649 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4090] do nothing
        [ 4091] store the literal value 15679 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4094] do nothing
        [ 4095] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4111] store the literal value 15694 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4114] SWITCH 1: {1->#4117, 2->#4123, 3->#4129, 4->#4135, 5->#4141, 6->#4147, 7->#4153, 8->#4159, 9->#4165, 10->#4171, 11->#4177, 12->#4183, 13->#4187, 14->#4191, 512->#4195, 32->#4201, 64->#4207, 128->#4213, 256->#4219} else #4225
        [ 4117] store the literal value 15695 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4120] play sound effect 257
        [ 4122] do nothing
        [ 4123] store the literal value 15722 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4126] play sound effect 257
        [ 4128] do nothing
        [ 4129] store the literal value 15748 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4132] play sound effect 260
        [ 4134] do nothing
        [ 4135] store the literal value 15778 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4138] play sound effect 260
        [ 4140] do nothing
        [ 4141] store the literal value 15802 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4144] play sound effect 260
        [ 4146] do nothing
        [ 4147] store the literal value 15827 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4150] play sound effect 261
        [ 4152] do nothing
        [ 4153] store the literal value 15881 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4156] play sound effect 257
        [ 4158] do nothing
        [ 4159] store the literal value 15905 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4162] play sound effect 261
        [ 4164] do nothing
        [ 4165] store the literal value 15960 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4168] play sound effect 262
        [ 4170] do nothing
        [ 4171] store the literal value 16005 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4174] play sound effect 262
        [ 4176] do nothing
        [ 4177] store the literal value 16056 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4180] play sound effect 259
        [ 4182] do nothing
        [ 4183] store the literal value 16139 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4186] do nothing
        [ 4187] store the literal value 16203 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4190] do nothing
        [ 4191] store the literal value 16257 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4194] do nothing
        [ 4195] store the literal value 16329 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4198] play sound effect 258
        [ 4200] do nothing
        [ 4201] store the literal value 16363 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4204] play sound effect 258
        [ 4206] do nothing
        [ 4207] store the literal value 16402 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4210] play sound effect 258
        [ 4212] do nothing
        [ 4213] store the literal value 16441 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4216] play sound effect 258
        [ 4218] do nothing
        [ 4219] store the literal value 16482 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4222] play sound effect 258
        [ 4224] do nothing
        [ 4225] store the literal value 16522 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4228] do nothing
        [ 4229] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4269] display system/chat message #16561: " þ%"
        [ 4271] do nothing
        [ 4272] IF NOT(((var(26) & 512) > 0)): GOTO #4551  (else falls through, rejoins #4830)
        [ 4276] set script variable #65 = random_below(100)
        [ 4279] IF NOT(((var(3) == 0) && (var(65) < 4))): GOTO #4546  (else falls through, rejoins #4546)
        [ 4283] set script variable #3 = (var(3) + 1)
        [ 4286] store the literal value 16579 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4289] SWITCH random_below(1): {0->#4292, 1->#4296, 2->#4300, 7->#4304} else #4308
        [ 4292] store the literal value 16580 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4295] do nothing
        [ 4296] store the literal value 16615 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4299] do nothing
        [ 4300] store the literal value 16642 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4303] do nothing
        [ 4304] store the literal value 16681 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4307] do nothing
        [ 4308] store the literal value 16709 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4311] do nothing
        [ 4312] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4322] store the literal value 16762 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4325] set script variable #66 = random_below(4)
        [ 4328] IF NOT(((random_below(1) != 7) && (var(66) >= 3))): GOTO #4335  (else falls through, rejoins #4335)
        [ 4332] set script variable #66 = random_below(3)
        [ 4335] SWITCH var(66): {0->#4338, 1->#4342, 3->#4346, 4->#4350, 5->#4354, 6->#4358, 7->#4362} else #4366
        [ 4338] store the literal value 16763 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4341] do nothing
        [ 4342] store the literal value 16767 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4345] do nothing
        [ 4346] store the literal value 16778 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4349] do nothing
        [ 4350] store the literal value 16799 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4353] do nothing
        [ 4354] store the literal value 16826 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4357] do nothing
        [ 4358] store the literal value 16857 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4361] do nothing
        [ 4362] store the literal value 16886 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4365] do nothing
        [ 4366] store the literal value 16916 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4369] do nothing
        [ 4370] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4386] store the literal value 16931 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4389] SWITCH 4: {1->#4392, 2->#4398, 3->#4404, 4->#4410, 5->#4416, 6->#4422, 7->#4428, 8->#4434, 9->#4440, 10->#4446, 11->#4452, 12->#4458, 13->#4462, 14->#4466, 512->#4470, 32->#4476, 64->#4482, 128->#4488, 256->#4494} else #4500
        [ 4392] store the literal value 16932 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4395] play sound effect 257
        [ 4397] do nothing
        [ 4398] store the literal value 16959 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4401] play sound effect 257
        [ 4403] do nothing
        [ 4404] store the literal value 16985 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4407] play sound effect 260
        [ 4409] do nothing
        [ 4410] store the literal value 17015 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4413] play sound effect 260
        [ 4415] do nothing
        [ 4416] store the literal value 17039 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4419] play sound effect 260
        [ 4421] do nothing
        [ 4422] store the literal value 17064 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4425] play sound effect 261
        [ 4427] do nothing
        [ 4428] store the literal value 17118 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4431] play sound effect 257
        [ 4433] do nothing
        [ 4434] store the literal value 17142 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4437] play sound effect 261
        [ 4439] do nothing
        [ 4440] store the literal value 17197 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4443] play sound effect 262
        [ 4445] do nothing
        [ 4446] store the literal value 17242 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4449] play sound effect 262
        [ 4451] do nothing
        [ 4452] store the literal value 17293 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4455] play sound effect 259
        [ 4457] do nothing
        [ 4458] store the literal value 17376 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4461] do nothing
        [ 4462] store the literal value 17440 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4465] do nothing
        [ 4466] store the literal value 17494 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4469] do nothing
        [ 4470] store the literal value 17566 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4473] play sound effect 258
        [ 4475] do nothing
        [ 4476] store the literal value 17600 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4479] play sound effect 258
        [ 4481] do nothing
        [ 4482] store the literal value 17639 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4485] play sound effect 258
        [ 4487] do nothing
        [ 4488] store the literal value 17678 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4491] play sound effect 258
        [ 4493] do nothing
        [ 4494] store the literal value 17719 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4497] play sound effect 258
        [ 4499] do nothing
        [ 4500] store the literal value 17759 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4503] do nothing
        [ 4504] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4544] display system/chat message #17798: " þ("
        [ 4546] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4551] IF NOT(((var(26) & 128) > 0)): GOTO #4830  (else falls through, rejoins #4830)
        [ 4555] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4560] set script variable #68 = random_below(100)
        [ 4563] IF NOT(((var(3) == 0) && (var(68) < 4))): GOTO #4830  (else falls through, rejoins #4830)
        [ 4567] set script variable #3 = (var(3) + 1)
        [ 4570] store the literal value 17816 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4573] SWITCH random_below(1): {0->#4576, 1->#4580, 2->#4584, 7->#4588} else #4592
        [ 4576] store the literal value 17817 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4579] do nothing
        [ 4580] store the literal value 17852 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4583] do nothing
        [ 4584] store the literal value 17879 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4587] do nothing
        [ 4588] store the literal value 17918 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4591] do nothing
        [ 4592] store the literal value 17946 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4595] do nothing
        [ 4596] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4606] store the literal value 17999 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4609] set script variable #69 = random_below(4)
        [ 4612] IF NOT(((random_below(1) != 7) && (var(69) >= 3))): GOTO #4619  (else falls through, rejoins #4619)
        [ 4616] set script variable #69 = random_below(3)
        [ 4619] SWITCH var(69): {0->#4622, 1->#4626, 3->#4630, 4->#4634, 5->#4638, 6->#4642, 7->#4646} else #4650
        [ 4622] store the literal value 18000 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4625] do nothing
        [ 4626] store the literal value 18004 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4629] do nothing
        [ 4630] store the literal value 18015 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4633] do nothing
        [ 4634] store the literal value 18036 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4637] do nothing
        [ 4638] store the literal value 18063 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4641] do nothing
        [ 4642] store the literal value 18094 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4645] do nothing
        [ 4646] store the literal value 18123 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4649] do nothing
        [ 4650] store the literal value 18153 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4653] do nothing
        [ 4654] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4670] store the literal value 18168 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4673] SWITCH 5: {1->#4676, 2->#4682, 3->#4688, 4->#4694, 5->#4700, 6->#4706, 7->#4712, 8->#4718, 9->#4724, 10->#4730, 11->#4736, 12->#4742, 13->#4746, 14->#4750, 512->#4754, 32->#4760, 64->#4766, 128->#4772, 256->#4778} else #4784
        [ 4676] store the literal value 18169 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4679] play sound effect 257
        [ 4681] do nothing
        [ 4682] store the literal value 18196 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4685] play sound effect 257
        [ 4687] do nothing
        [ 4688] store the literal value 18222 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4691] play sound effect 260
        [ 4693] do nothing
        [ 4694] store the literal value 18252 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4697] play sound effect 260
        [ 4699] do nothing
        [ 4700] store the literal value 18276 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4703] play sound effect 260
        [ 4705] do nothing
        [ 4706] store the literal value 18301 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4709] play sound effect 261
        [ 4711] do nothing
        [ 4712] store the literal value 18355 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4715] play sound effect 257
        [ 4717] do nothing
        [ 4718] store the literal value 18379 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4721] play sound effect 261
        [ 4723] do nothing
        [ 4724] store the literal value 18434 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4727] play sound effect 262
        [ 4729] do nothing
        [ 4730] store the literal value 18479 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4733] play sound effect 262
        [ 4735] do nothing
        [ 4736] store the literal value 18530 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4739] play sound effect 259
        [ 4741] do nothing
        [ 4742] store the literal value 18613 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4745] do nothing
        [ 4746] store the literal value 18677 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4749] do nothing
        [ 4750] store the literal value 18731 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4753] do nothing
        [ 4754] store the literal value 18803 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4757] play sound effect 258
        [ 4759] do nothing
        [ 4760] store the literal value 18837 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4763] play sound effect 258
        [ 4765] do nothing
        [ 4766] store the literal value 18876 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4769] play sound effect 258
        [ 4771] do nothing
        [ 4772] store the literal value 18915 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4775] play sound effect 258
        [ 4777] do nothing
        [ 4778] store the literal value 18956 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4781] play sound effect 258
        [ 4783] do nothing
        [ 4784] store the literal value 18996 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4787] do nothing
        [ 4788] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4828] display system/chat message #19035: " þ+"
        [ 4830] do nothing
        [ 4831] IF NOT(((var(26) & 512) > 0)): GOTO #4840  (else falls through, rejoins #4840)
        [ 4835] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4840] do nothing
        [ 4841] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#4844, 64->#4850, 128->#4856, 256->#4862} else #4868
        [ 4844] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4849] do nothing
        [ 4850] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 4855] do nothing
        [ 4856] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4861] do nothing
        [ 4862] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4867] do nothing
        [ 4868] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4873] do nothing
        [ 4874] do nothing
        [ 4875] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4885] do nothing
        [ 4886] IF NOT((var(48) > 0)): GOTO #5165  (else falls through, rejoins #5170)
        [ 4890] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4895] set script variable #71 = random_below(100)
        [ 4898] IF NOT(((var(3) == 0) && (var(71) < 4))): GOTO #5165  (else falls through, rejoins #5165)
        [ 4902] set script variable #3 = (var(3) + 1)
        [ 4905] store the literal value 19053 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4908] SWITCH random_below(1): {0->#4911, 1->#4915, 2->#4919, 7->#4923} else #4927
        [ 4911] store the literal value 19054 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4914] do nothing
        [ 4915] store the literal value 19089 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4918] do nothing
        [ 4919] store the literal value 19116 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4922] do nothing
        [ 4923] store the literal value 19155 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4926] do nothing
        [ 4927] store the literal value 19183 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4930] do nothing
        [ 4931] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4941] store the literal value 19236 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4944] set script variable #72 = random_below(4)
        [ 4947] IF NOT(((random_below(1) != 7) && (var(72) >= 3))): GOTO #4954  (else falls through, rejoins #4954)
        [ 4951] set script variable #72 = random_below(3)
        [ 4954] SWITCH var(72): {0->#4957, 1->#4961, 3->#4965, 4->#4969, 5->#4973, 6->#4977, 7->#4981} else #4985
        [ 4957] store the literal value 19237 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4960] do nothing
        [ 4961] store the literal value 19241 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4964] do nothing
        [ 4965] store the literal value 19252 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4968] do nothing
        [ 4969] store the literal value 19273 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4972] do nothing
        [ 4973] store the literal value 19300 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4976] do nothing
        [ 4977] store the literal value 19331 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4980] do nothing
        [ 4981] store the literal value 19360 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4984] do nothing
        [ 4985] store the literal value 19390 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4988] do nothing
        [ 4989] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5005] store the literal value 19405 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5008] SWITCH 6: {1->#5011, 2->#5017, 3->#5023, 4->#5029, 5->#5035, 6->#5041, 7->#5047, 8->#5053, 9->#5059, 10->#5065, 11->#5071, 12->#5077, 13->#5081, 14->#5085, 512->#5089, 32->#5095, 64->#5101, 128->#5107, 256->#5113} else #5119
        [ 5011] store the literal value 19406 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5014] play sound effect 257
        [ 5016] do nothing
        [ 5017] store the literal value 19433 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5020] play sound effect 257
        [ 5022] do nothing
        [ 5023] store the literal value 19459 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5026] play sound effect 260
        [ 5028] do nothing
        [ 5029] store the literal value 19489 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5032] play sound effect 260
        [ 5034] do nothing
        [ 5035] store the literal value 19513 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5038] play sound effect 260
        [ 5040] do nothing
        [ 5041] store the literal value 19538 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5044] play sound effect 261
        [ 5046] do nothing
        [ 5047] store the literal value 19592 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5050] play sound effect 257
        [ 5052] do nothing
        [ 5053] store the literal value 19616 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5056] play sound effect 261
        [ 5058] do nothing
        [ 5059] store the literal value 19671 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5062] play sound effect 262
        [ 5064] do nothing
        [ 5065] store the literal value 19716 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5068] play sound effect 262
        [ 5070] do nothing
        [ 5071] store the literal value 19767 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5074] play sound effect 259
        [ 5076] do nothing
        [ 5077] store the literal value 19850 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5080] do nothing
        [ 5081] store the literal value 19914 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5084] do nothing
        [ 5085] store the literal value 19968 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5088] do nothing
        [ 5089] store the literal value 20040 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5092] play sound effect 258
        [ 5094] do nothing
        [ 5095] store the literal value 20074 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5098] play sound effect 258
        [ 5100] do nothing
        [ 5101] store the literal value 20113 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5104] play sound effect 258
        [ 5106] do nothing
        [ 5107] store the literal value 20152 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5110] play sound effect 258
        [ 5112] do nothing
        [ 5113] store the literal value 20193 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5116] play sound effect 258
        [ 5118] do nothing
        [ 5119] store the literal value 20233 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5122] do nothing
        [ 5123] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5163] display system/chat message #20272: " þ."
        [ 5165] order unit-slot #12 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 5170] do nothing
        [ 5171] IF NOT((set_unit_behavior(7, 12) != 3)): GOTO #5180  (else falls through, rejoins #5180)
        [ 5175] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5180] do nothing
        [ 5181] IF NOT((((var(26) & 7136) == 0) && (var(48) == 0))): GOTO #5554  (else falls through, rejoins #5578)
        [ 5185] set script variable #74 = random_below(100)
        [ 5188] IF NOT(((var(3) == 0) && (var(74) < 4))): GOTO #5455  (else falls through, rejoins #5455)
        [ 5192] set script variable #3 = (var(3) + 1)
        [ 5195] store the literal value 20290 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5198] SWITCH random_below(1): {0->#5201, 1->#5205, 2->#5209, 7->#5213} else #5217
        [ 5201] store the literal value 20291 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5204] do nothing
        [ 5205] store the literal value 20326 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5208] do nothing
        [ 5209] store the literal value 20353 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5212] do nothing
        [ 5213] store the literal value 20392 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5216] do nothing
        [ 5217] store the literal value 20420 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5220] do nothing
        [ 5221] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5231] store the literal value 20473 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5234] set script variable #75 = random_below(4)
        [ 5237] IF NOT(((random_below(1) != 7) && (var(75) >= 3))): GOTO #5244  (else falls through, rejoins #5244)
        [ 5241] set script variable #75 = random_below(3)
        [ 5244] SWITCH var(75): {0->#5247, 1->#5251, 3->#5255, 4->#5259, 5->#5263, 6->#5267, 7->#5271} else #5275
        [ 5247] store the literal value 20474 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5250] do nothing
        [ 5251] store the literal value 20478 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5254] do nothing
        [ 5255] store the literal value 20489 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5258] do nothing
        [ 5259] store the literal value 20510 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5262] do nothing
        [ 5263] store the literal value 20537 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5266] do nothing
        [ 5267] store the literal value 20568 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5270] do nothing
        [ 5271] store the literal value 20597 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5274] do nothing
        [ 5275] store the literal value 20627 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5278] do nothing
        [ 5279] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5295] store the literal value 20642 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5298] SWITCH 7: {1->#5301, 2->#5307, 3->#5313, 4->#5319, 5->#5325, 6->#5331, 7->#5337, 8->#5343, 9->#5349, 10->#5355, 11->#5361, 12->#5367, 13->#5371, 14->#5375, 512->#5379, 32->#5385, 64->#5391, 128->#5397, 256->#5403} else #5409
        [ 5301] store the literal value 20643 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5304] play sound effect 257
        [ 5306] do nothing
        [ 5307] store the literal value 20670 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5310] play sound effect 257
        [ 5312] do nothing
        [ 5313] store the literal value 20696 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5316] play sound effect 260
        [ 5318] do nothing
        [ 5319] store the literal value 20726 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5322] play sound effect 260
        [ 5324] do nothing
        [ 5325] store the literal value 20750 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5328] play sound effect 260
        [ 5330] do nothing
        [ 5331] store the literal value 20775 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5334] play sound effect 261
        [ 5336] do nothing
        [ 5337] store the literal value 20829 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5340] play sound effect 257
        [ 5342] do nothing
        [ 5343] store the literal value 20853 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5346] play sound effect 261
        [ 5348] do nothing
        [ 5349] store the literal value 20908 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5352] play sound effect 262
        [ 5354] do nothing
        [ 5355] store the literal value 20953 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5358] play sound effect 262
        [ 5360] do nothing
        [ 5361] store the literal value 21004 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5364] play sound effect 259
        [ 5366] do nothing
        [ 5367] store the literal value 21087 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5370] do nothing
        [ 5371] store the literal value 21151 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5374] do nothing
        [ 5375] store the literal value 21205 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5378] do nothing
        [ 5379] store the literal value 21277 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5382] play sound effect 258
        [ 5384] do nothing
        [ 5385] store the literal value 21311 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5388] play sound effect 258
        [ 5390] do nothing
        [ 5391] store the literal value 21350 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5394] play sound effect 258
        [ 5396] do nothing
        [ 5397] store the literal value 21389 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5400] play sound effect 258
        [ 5402] do nothing
        [ 5403] store the literal value 21430 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5406] play sound effect 258
        [ 5408] do nothing
        [ 5409] store the literal value 21470 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5412] do nothing
        [ 5413] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5453] display system/chat message #21509: " þ1"
        [ 5455] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#5458, 64->#5476, 128->#5494, 256->#5512} else #5530
        [ 5458] IF NOT(group_condition_ref(1, 12)): GOTO #5466  (else falls through, rejoins #5466)
        [ 5462] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5466] define condition-slot #1 as (variable-ref 1, expression-offset 3962)
        [ 5470] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5475] do nothing
        [ 5476] IF NOT(group_condition_ref(2, 12)): GOTO #5484  (else falls through, rejoins #5484)
        [ 5480] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5484] define condition-slot #2 as (variable-ref 2, expression-offset 3983)
        [ 5488] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 5493] do nothing
        [ 5494] IF NOT(group_condition_ref(3, 12)): GOTO #5502  (else falls through, rejoins #5502)
        [ 5498] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5502] define condition-slot #3 as (variable-ref 3, expression-offset 4004)
        [ 5506] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5511] do nothing
        [ 5512] IF NOT(group_condition_ref(4, 12)): GOTO #5520  (else falls through, rejoins #5520)
        [ 5516] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5520] define condition-slot #4 as (variable-ref 4, expression-offset 4025)
        [ 5524] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5529] do nothing
        [ 5530] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 5535] do nothing
        [ 5536] do nothing
        [ 5537] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5547] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #5554  (else falls through, rejoins #5554)
        [ 5551] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 5554] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #5569  (else falls through, rejoins #5578)
        [ 5558] arm timer #1 to expire 2 turn(s) from now
        [ 5561] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 5564] order unit-slot #12 to move, speed/priority var(52), destination-type tag 0, destination arg 0
        [ 5569] IF NOT(timer_expired(1)): GOTO #5578  (else falls through, rejoins #5578)
        [ 5573] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5578] do nothing
        [ 5579] do nothing
        [ 5580] IF NOT((set_unit_behavior(7, 12) != 4)): GOTO #5859  (else falls through, rejoins #5874)
        [ 5584] set script variable #77 = random_below(100)
        [ 5587] IF NOT(((var(3) == 0) && (var(77) < 4))): GOTO #5854  (else falls through, rejoins #5854)
        [ 5591] set script variable #3 = (var(3) + 1)
        [ 5594] store the literal value 21527 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5597] SWITCH random_below(1): {0->#5600, 1->#5604, 2->#5608, 7->#5612} else #5616
        [ 5600] store the literal value 21528 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5603] do nothing
        [ 5604] store the literal value 21563 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5607] do nothing
        [ 5608] store the literal value 21590 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5611] do nothing
        [ 5612] store the literal value 21629 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5615] do nothing
        [ 5616] store the literal value 21657 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5619] do nothing
        [ 5620] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5630] store the literal value 21710 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5633] set script variable #78 = random_below(4)
        [ 5636] IF NOT(((random_below(1) != 7) && (var(78) >= 3))): GOTO #5643  (else falls through, rejoins #5643)
        [ 5640] set script variable #78 = random_below(3)
        [ 5643] SWITCH var(78): {0->#5646, 1->#5650, 3->#5654, 4->#5658, 5->#5662, 6->#5666, 7->#5670} else #5674
        [ 5646] store the literal value 21711 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5649] do nothing
        [ 5650] store the literal value 21715 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5653] do nothing
        [ 5654] store the literal value 21726 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5657] do nothing
        [ 5658] store the literal value 21747 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5661] do nothing
        [ 5662] store the literal value 21774 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5665] do nothing
        [ 5666] store the literal value 21805 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5669] do nothing
        [ 5670] store the literal value 21834 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5673] do nothing
        [ 5674] store the literal value 21864 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5677] do nothing
        [ 5678] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5694] store the literal value 21879 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5697] SWITCH 9: {1->#5700, 2->#5706, 3->#5712, 4->#5718, 5->#5724, 6->#5730, 7->#5736, 8->#5742, 9->#5748, 10->#5754, 11->#5760, 12->#5766, 13->#5770, 14->#5774, 512->#5778, 32->#5784, 64->#5790, 128->#5796, 256->#5802} else #5808
        [ 5700] store the literal value 21880 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5703] play sound effect 257
        [ 5705] do nothing
        [ 5706] store the literal value 21907 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5709] play sound effect 257
        [ 5711] do nothing
        [ 5712] store the literal value 21933 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5715] play sound effect 260
        [ 5717] do nothing
        [ 5718] store the literal value 21963 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5721] play sound effect 260
        [ 5723] do nothing
        [ 5724] store the literal value 21987 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5727] play sound effect 260
        [ 5729] do nothing
        [ 5730] store the literal value 22012 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5733] play sound effect 261
        [ 5735] do nothing
        [ 5736] store the literal value 22066 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5739] play sound effect 257
        [ 5741] do nothing
        [ 5742] store the literal value 22090 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5745] play sound effect 261
        [ 5747] do nothing
        [ 5748] store the literal value 22145 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5751] play sound effect 262
        [ 5753] do nothing
        [ 5754] store the literal value 22190 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5757] play sound effect 262
        [ 5759] do nothing
        [ 5760] store the literal value 22241 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5763] play sound effect 259
        [ 5765] do nothing
        [ 5766] store the literal value 22324 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5769] do nothing
        [ 5770] store the literal value 22388 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5773] do nothing
        [ 5774] store the literal value 22442 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5777] do nothing
        [ 5778] store the literal value 22514 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5781] play sound effect 258
        [ 5783] do nothing
        [ 5784] store the literal value 22548 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5787] play sound effect 258
        [ 5789] do nothing
        [ 5790] store the literal value 22587 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5793] play sound effect 258
        [ 5795] do nothing
        [ 5796] store the literal value 22626 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5799] play sound effect 258
        [ 5801] do nothing
        [ 5802] store the literal value 22667 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5805] play sound effect 258
        [ 5807] do nothing
        [ 5808] store the literal value 22707 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5811] do nothing
        [ 5812] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5852] display system/chat message #22746: " þ4"
        [ 5854] order unit-slot #12 to move, speed/priority 4, destination-type tag 3, destination arg 14
        [ 5859] set script variable #80 = set_unit_behavior(10, 12)
        [ 5862] set unit-slot #15 = var(80)
        [ 5865] IF NOT(group_condition(15)): GOTO #5874  (else falls through, rejoins #5874)
        [ 5869] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 5874] do nothing
        [ 5875] do nothing
        [ 5876] IF NOT((((var(26) & 7136) == 0) & (var(48) == 0))): GOTO #6249  (else falls through, rejoins #6261)
        [ 5880] set script variable #81 = random_below(100)
        [ 5883] IF NOT(((var(3) == 0) && (var(81) < 4))): GOTO #6150  (else falls through, rejoins #6150)
        [ 5887] set script variable #3 = (var(3) + 1)
        [ 5890] store the literal value 22764 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5893] SWITCH random_below(1): {0->#5896, 1->#5900, 2->#5904, 7->#5908} else #5912
        [ 5896] store the literal value 22765 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5899] do nothing
        [ 5900] store the literal value 22800 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5903] do nothing
        [ 5904] store the literal value 22827 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5907] do nothing
        [ 5908] store the literal value 22866 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5911] do nothing
        [ 5912] store the literal value 22894 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5915] do nothing
        [ 5916] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5926] store the literal value 22947 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5929] set script variable #82 = random_below(4)
        [ 5932] IF NOT(((random_below(1) != 7) && (var(82) >= 3))): GOTO #5939  (else falls through, rejoins #5939)
        [ 5936] set script variable #82 = random_below(3)
        [ 5939] SWITCH var(82): {0->#5942, 1->#5946, 3->#5950, 4->#5954, 5->#5958, 6->#5962, 7->#5966} else #5970
        [ 5942] store the literal value 22948 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5945] do nothing
        [ 5946] store the literal value 22952 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5949] do nothing
        [ 5950] store the literal value 22963 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5953] do nothing
        [ 5954] store the literal value 22984 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5957] do nothing
        [ 5958] store the literal value 23011 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5961] do nothing
        [ 5962] store the literal value 23042 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5965] do nothing
        [ 5966] store the literal value 23071 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5969] do nothing
        [ 5970] store the literal value 23101 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5973] do nothing
        [ 5974] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5990] store the literal value 23116 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5993] SWITCH 7: {1->#5996, 2->#6002, 3->#6008, 4->#6014, 5->#6020, 6->#6026, 7->#6032, 8->#6038, 9->#6044, 10->#6050, 11->#6056, 12->#6062, 13->#6066, 14->#6070, 512->#6074, 32->#6080, 64->#6086, 128->#6092, 256->#6098} else #6104
        [ 5996] store the literal value 23117 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5999] play sound effect 257
        [ 6001] do nothing
        [ 6002] store the literal value 23144 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6005] play sound effect 257
        [ 6007] do nothing
        [ 6008] store the literal value 23170 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6011] play sound effect 260
        [ 6013] do nothing
        [ 6014] store the literal value 23200 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6017] play sound effect 260
        [ 6019] do nothing
        [ 6020] store the literal value 23224 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6023] play sound effect 260
        [ 6025] do nothing
        [ 6026] store the literal value 23249 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6029] play sound effect 261
        [ 6031] do nothing
        [ 6032] store the literal value 23303 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6035] play sound effect 257
        [ 6037] do nothing
        [ 6038] store the literal value 23327 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6041] play sound effect 261
        [ 6043] do nothing
        [ 6044] store the literal value 23382 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6047] play sound effect 262
        [ 6049] do nothing
        [ 6050] store the literal value 23427 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6053] play sound effect 262
        [ 6055] do nothing
        [ 6056] store the literal value 23478 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6059] play sound effect 259
        [ 6061] do nothing
        [ 6062] store the literal value 23561 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6065] do nothing
        [ 6066] store the literal value 23625 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6069] do nothing
        [ 6070] store the literal value 23679 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6073] do nothing
        [ 6074] store the literal value 23751 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6077] play sound effect 258
        [ 6079] do nothing
        [ 6080] store the literal value 23785 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6083] play sound effect 258
        [ 6085] do nothing
        [ 6086] store the literal value 23824 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6089] play sound effect 258
        [ 6091] do nothing
        [ 6092] store the literal value 23863 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6095] play sound effect 258
        [ 6097] do nothing
        [ 6098] store the literal value 23904 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6101] play sound effect 258
        [ 6103] do nothing
        [ 6104] store the literal value 23944 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6107] do nothing
        [ 6108] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6148] display system/chat message #23983: " þ7"
        [ 6150] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#6153, 64->#6171, 128->#6189, 256->#6207} else #6225
        [ 6153] IF NOT(group_condition_ref(1, 12)): GOTO #6161  (else falls through, rejoins #6161)
        [ 6157] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6161] define condition-slot #1 as (variable-ref 1, expression-offset 4458)
        [ 6165] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 6170] do nothing
        [ 6171] IF NOT(group_condition_ref(2, 12)): GOTO #6179  (else falls through, rejoins #6179)
        [ 6175] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6179] define condition-slot #2 as (variable-ref 2, expression-offset 4479)
        [ 6183] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 6188] do nothing
        [ 6189] IF NOT(group_condition_ref(3, 12)): GOTO #6197  (else falls through, rejoins #6197)
        [ 6193] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6197] define condition-slot #3 as (variable-ref 3, expression-offset 4500)
        [ 6201] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 6206] do nothing
        [ 6207] IF NOT(group_condition_ref(4, 12)): GOTO #6215  (else falls through, rejoins #6215)
        [ 6211] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6215] define condition-slot #4 as (variable-ref 4, expression-offset 4521)
        [ 6219] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 6224] do nothing
        [ 6225] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 6230] do nothing
        [ 6231] do nothing
        [ 6232] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6242] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #6249  (else falls through, rejoins #6249)
        [ 6246] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 6249] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #6261  (else falls through, rejoins #6261)
        [ 6253] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 6256] order unit-slot #12 to move, speed/priority var(52), destination-type tag 0, destination arg 0
        [ 6261] do nothing
        [ 6262] do nothing
        [ 6263] do nothing
        [ 6264] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 6290] advance unit-slot #12 to the next unit in group #2 after the current one
        [ 6293] GOTO #3144
        [ 6295] do nothing (message no-op)
        [ 6296] (UNKNOWN OPCODE 0x5dc1) - dead end, not decoded further (other branches continue independently)
        [ 6484] ONCE(((!all_group_alive(2) || any_group_alive(1)) || !all_group_alive(1)), flag[2]): run block below -> #6489
        [ 6488] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6489] ONCE((timer_expired(3) && (var(5) > 0)), flag[3]): run block below -> #6495
        [ 6493] display system/chat message #24393: "Mobile defense node threatened. Call all nearby units from defense pool."
        [ 6495] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6496] IF NOT(!all_group_alive(2)): GOTO #6507  (else falls through, rejoins #6512)
            [ 6500] play sound effect 35
            [ 6502] display system/chat message #24466: "Objective Achieved.  The Cybrid forces were caught by total surprise and destroyed. Unitech now has control of this region. Once neighboring regions have been secured, Unitech will use this location for a staging area. Excellent work, commander!"
            [ 6504] set the objective state of unit 1 to 1
            [ 6507] display system/chat message #24712: "The mission was a failure.  The Cybrids still maintain an active defense node in your area and may now mount a counterstrike on neighboring regions. You were warned failure was not an option... now Unitech command is considering your viability as a commander."
            [ 6509] set the objective state of unit 1 to 2
            [ 6512] advance to the next scenario phase (no effect if already at the last phase)
            [ 6513] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
