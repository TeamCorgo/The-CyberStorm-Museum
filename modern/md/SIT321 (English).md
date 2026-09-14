# SIT321.CS

```text
; warning: file length 47307 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=672, phase1=685, phase2=1159, phase3=6682
; 22981 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #2 = (random_below(4) + 3)
[    3] set script variable #5 = 0
[    6] set script variable #7 = 0
[    9] set script variable #9 = (8 + random_below(7))
[   12] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   13] set hex-var #1 = the point 0 steps along the path toward 0
    [   17] IF NOT((var(4) == 0)): GOTO #24  (else falls through, rejoins #24)
    [   21] set script variable #4 = (random_below(var(11)) + var(12))
    [   24] set script variable #13 = (stat(0) / 1)
    [   27] set script variable #13 = (var(13) - 200)
    [   30] set script variable #14 = 1
    [   33] set script variable #15 = 179
    [   36] set hex-var #8 = the point var(15) steps along the path toward var(14)
    [   40] set hex-var #11 = (0, 0)
    [   44] set script variable #16 = set_objective_at_hex(8)
    [   47] place an objective marker at hex-var #8 with params ((random_below(3) + var(16)) - 1), 6, 8, 50
    [   53] IF NOT((random_below(10) < 3)): GOTO #62  (else falls through, rejoins #62)
    [   57] spawn a unit of type 26 (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #2
    [   62] IF NOT((random_below(10) < 3)): GOTO #71  (else falls through, rejoins #71)
    [   66] spawn a unit of type 27 (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #2
    [   71] IF NOT((random_below(10) < 3)): GOTO #80  (else falls through, rejoins #80)
    [   75] spawn a unit of type 28 (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #2
    [   80] IF NOT((random_below(10) < 3)): GOTO #89  (else falls through, rejoins #89)
    [   84] spawn a unit of type 29 (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #2
    [   89] spawn a unit of type 25 (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #2
    [   94] set script variable #18 = 5
    [   97] set script variable #19 = 179
    [  100] set hex-var #12 = the point var(19) steps along the path toward var(18)
    [  104] spawn a unit of type 31 (stationary structure/turret) (minimum weapon range 0) at hex-ref #12, remember it as unit-slot #3
    [  109] place an objective marker at hex-var #8 with params (4 + stat(4)), 6, 8, 50
    [  115] place an objective marker at hex-var #8 with params (2 + stat(4)), 4, 6, 100
    [  121] arm timer #3 to expire 2 turn(s) from now
    [  124] set script variable #20 = 0
    [  127] set script variable #20 = (var(20) + 1)
    [  130] IF NOT((var(13) > 300)): GOTO #151  (else falls through, rejoins #154)
    [  134] set script variable #6 = (var(13) / 2)
    [  137] IF NOT((var(6) < 300)): GOTO #144  (else falls through, rejoins #151)
    [  141] set script variable #6 = 300
    [  144] IF NOT((var(6) > 1200)): GOTO #151  (else falls through, rejoins #151)
    [  148] set script variable #6 = 1200
    [  151] set script variable #6 = var(13)
    [  154] set script variable #13 = (var(13) - var(6))
    [  157] set script variable #21 = (random_below(8) + 12)
    [  160] set script variable #22 = (random_below(180) - 90)
    [  163] set hex-var #2 = the point var(22) steps along the path toward var(21)
    [  167] define condition-slot #2 as (variable-ref 2, expression-offset 263)
    [  171] spawn an AI squad with point-budget var(6) at hex-ref #2, remember all its units as group #3
    [  175] order every unit in group #3 to move, speed/priority 4, destination-type tag 3, destination arg 2
    [  180] set attribute #8 to 45 for every unit in group #3
    [  183] IF NOT((var(13) > 0)): GOTO #243  (else falls through, rejoins #243)
    [  187] set script variable #20 = (var(20) + 1)
    [  190] IF NOT((var(13) > 300)): GOTO #211  (else falls through, rejoins #214)
    [  194] set script variable #6 = (var(13) / 2)
    [  197] IF NOT((var(6) < 300)): GOTO #204  (else falls through, rejoins #211)
    [  201] set script variable #6 = 300
    [  204] IF NOT((var(6) > 1200)): GOTO #211  (else falls through, rejoins #211)
    [  208] set script variable #6 = 1200
    [  211] set script variable #6 = var(13)
    [  214] set script variable #13 = (var(13) - var(6))
    [  217] set script variable #23 = (random_below(8) + 12)
    [  220] set script variable #24 = (random_below(180) - 90)
    [  223] set hex-var #3 = the point var(24) steps along the path toward var(23)
    [  227] define condition-slot #3 as (variable-ref 3, expression-offset 344)
    [  231] spawn an AI squad with point-budget var(6) at hex-ref #3, remember all its units as group #3
    [  235] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 3
    [  240] set attribute #8 to 79 for every unit in group #3
    [  243] IF NOT((var(13) > 0)): GOTO #303  (else falls through, rejoins #303)
    [  247] set script variable #20 = (var(20) + 1)
    [  250] IF NOT((var(13) > 300)): GOTO #271  (else falls through, rejoins #274)
    [  254] set script variable #6 = (var(13) / 2)
    [  257] IF NOT((var(6) < 300)): GOTO #264  (else falls through, rejoins #271)
    [  261] set script variable #6 = 300
    [  264] IF NOT((var(6) > 1200)): GOTO #271  (else falls through, rejoins #271)
    [  268] set script variable #6 = 1200
    [  271] set script variable #6 = var(13)
    [  274] set script variable #13 = (var(13) - var(6))
    [  277] set script variable #25 = (random_below(8) + 12)
    [  280] set script variable #26 = (random_below(180) - 90)
    [  283] set hex-var #4 = the point var(26) steps along the path toward var(25)
    [  287] define condition-slot #4 as (variable-ref 4, expression-offset 425)
    [  291] spawn an AI squad with point-budget var(6) at hex-ref #4, remember all its units as group #3
    [  295] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 4
    [  300] set attribute #8 to 143 for every unit in group #3
    [  303] IF NOT((var(13) > 0)): GOTO #363  (else falls through, rejoins #363)
    [  307] set script variable #20 = (var(20) + 1)
    [  310] IF NOT((var(13) > 300)): GOTO #331  (else falls through, rejoins #334)
    [  314] set script variable #6 = (var(13) / 2)
    [  317] IF NOT((var(6) < 300)): GOTO #324  (else falls through, rejoins #331)
    [  321] set script variable #6 = 300
    [  324] IF NOT((var(6) > 1200)): GOTO #331  (else falls through, rejoins #331)
    [  328] set script variable #6 = 1200
    [  331] set script variable #6 = var(13)
    [  334] set script variable #13 = (var(13) - var(6))
    [  337] set script variable #27 = (random_below(8) + 12)
    [  340] set script variable #28 = (random_below(180) - 90)
    [  343] set hex-var #5 = the point var(28) steps along the path toward var(27)
    [  347] define condition-slot #5 as (variable-ref 5, expression-offset 506)
    [  351] spawn an AI squad with point-budget var(6) at hex-ref #5, remember all its units as group #3
    [  355] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 5
    [  360] set attribute #8 to 271 for every unit in group #3
    [  363] IF NOT((var(13) > 0)): GOTO #423  (else falls through, rejoins #423)
    [  367] set script variable #20 = (var(20) + 1)
    [  370] IF NOT((var(13) > 300)): GOTO #391  (else falls through, rejoins #394)
    [  374] set script variable #6 = (var(13) / 2)
    [  377] IF NOT((var(6) < 300)): GOTO #384  (else falls through, rejoins #391)
    [  381] set script variable #6 = 300
    [  384] IF NOT((var(6) > 1200)): GOTO #391  (else falls through, rejoins #391)
    [  388] set script variable #6 = 1200
    [  391] set script variable #6 = var(13)
    [  394] set script variable #13 = (var(13) - var(6))
    [  397] set script variable #29 = (random_below(8) + 12)
    [  400] set script variable #30 = (random_below(180) - 90)
    [  403] set hex-var #6 = the point var(30) steps along the path toward var(29)
    [  407] define condition-slot #6 as (variable-ref 6, expression-offset 587)
    [  411] spawn an AI squad with point-budget var(6) at hex-ref #6, remember all its units as group #3
    [  415] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 6
    [  420] set attribute #8 to 2063 for every unit in group #3
    [  423] IF NOT((var(13) > 0)): GOTO #483  (else falls through, rejoins #483)
    [  427] set script variable #20 = (var(20) + 1)
    [  430] IF NOT((var(13) > 300)): GOTO #451  (else falls through, rejoins #454)
    [  434] set script variable #6 = (var(13) / 1)
    [  437] IF NOT((var(6) < 300)): GOTO #444  (else falls through, rejoins #451)
    [  441] set script variable #6 = 300
    [  444] IF NOT((var(6) > 1200)): GOTO #451  (else falls through, rejoins #451)
    [  448] set script variable #6 = 1200
    [  451] set script variable #6 = var(13)
    [  454] set script variable #13 = (var(13) - var(6))
    [  457] set script variable #31 = (random_below(8) + 12)
    [  460] set script variable #32 = (random_below(180) - 90)
    [  463] set hex-var #7 = the point var(32) steps along the path toward var(31)
    [  467] define condition-slot #7 as (variable-ref 5, expression-offset 668)
    [  471] spawn an AI squad with point-budget var(6) at hex-ref #7, remember all its units as group #3
    [  475] order every unit in group #3 to move, speed/priority 3, destination-type tag 2, destination arg 7
    [  480] set attribute #8 to 4111 for every unit in group #3
    [  483] arm timer #2 to expire 1 turn(s) from now
    [  486] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 2 ===
        [  487] set script variable #33 = 0
        [  490] set script variable #34 = 0
        [  493] ONCE(1, flag[1]): run block below -> #516
        [  497] set script variable #35 = 0
        [  500] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  503] WHILE set_unit_behavior(0, 5): loop below; exit -> #514 (500-iteration guard)
        [  506] set script variable #35 = (var(35) + 1)
        [  509] advance unit-slot #5 to the next unit in group #2 after the current one
        [  512] GOTO #506
        [  514] do nothing (message no-op)
        [  515] (UNKNOWN OPCODE 0x00fe) - dead end, not decoded further (other branches continue independently)
        [  516] IF NOT(timer_expired(2)): GOTO #5992  (else falls through, rejoins #5992)
        [  520] arm timer #2 to expire 1 turn(s) from now
        [  523] set script variable #1 = 0
        [  526] set script variable #36 = 0
        [  529] IF NOT((group_condition_ref_2(2, 1) && group_condition_ref_2(2, 2))): GOTO #813  (else falls through, rejoins #820)
        [  533] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [  536] set script variable #37 = random_below(100)
        [  539] IF NOT(((var(1) == 0) && (var(37) < 2))): GOTO #806  (else falls through, rejoins #806)
        [  543] set script variable #1 = (var(1) + 1)
        [  546] store the literal value 404 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  549] SWITCH random_below(4): {0->#552, 1->#556, 2->#560, 7->#564} else #568
        [  552] store the literal value 405 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  555] do nothing
        [  556] store the literal value 440 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  559] do nothing
        [  560] store the literal value 467 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  563] do nothing
        [  564] store the literal value 506 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  567] do nothing
        [  568] store the literal value 534 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  571] do nothing
        [  572] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  582] store the literal value 587 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  585] set script variable #38 = random_below(4)
        [  588] IF NOT(((random_below(4) != 7) && (var(38) >= 3))): GOTO #595  (else falls through, rejoins #595)
        [  592] set script variable #38 = random_below(3)
        [  595] SWITCH var(38): {0->#598, 1->#602, 3->#606, 4->#610, 5->#614, 6->#618, 7->#622} else #626
        [  598] store the literal value 588 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  601] do nothing
        [  602] store the literal value 592 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  605] do nothing
        [  606] store the literal value 603 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  609] do nothing
        [  610] store the literal value 624 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  613] do nothing
        [  614] store the literal value 651 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  617] do nothing
        [  618] store the literal value 682 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  621] do nothing
        [  622] store the literal value 711 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  625] do nothing
        [  626] store the literal value 741 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  629] do nothing
        [  630] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  646] store the literal value 756 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  649] SWITCH 32: {1->#652, 2->#658, 3->#664, 4->#670, 5->#676, 6->#682, 7->#688, 8->#694, 9->#700, 10->#706, 11->#712, 12->#718, 13->#722, 14->#726, 512->#730, 32->#736, 64->#742, 128->#748, 256->#754} else #760
        [  652] store the literal value 757 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  655] play sound effect 257
        [  657] do nothing
        [  658] store the literal value 784 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  661] play sound effect 257
        [  663] do nothing
        [  664] store the literal value 810 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  667] play sound effect 260
        [  669] do nothing
        [  670] store the literal value 840 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  673] play sound effect 260
        [  675] do nothing
        [  676] store the literal value 864 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  679] play sound effect 260
        [  681] do nothing
        [  682] store the literal value 889 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  685] play sound effect 261
        [  687] do nothing
        [  688] store the literal value 943 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  691] play sound effect 257
        [  693] do nothing
        [  694] store the literal value 967 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  697] play sound effect 261
        [  699] do nothing
        [  700] store the literal value 1022 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  703] play sound effect 262
        [  705] do nothing
        [  706] store the literal value 1067 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  709] play sound effect 262
        [  711] do nothing
        [  712] store the literal value 1118 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  715] play sound effect 259
        [  717] do nothing
        [  718] store the literal value 1201 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  721] do nothing
        [  722] store the literal value 1265 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  725] do nothing
        [  726] store the literal value 1319 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  729] do nothing
        [  730] store the literal value 1391 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  733] play sound effect 258
        [  735] do nothing
        [  736] store the literal value 1425 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  739] play sound effect 258
        [  741] do nothing
        [  742] store the literal value 1464 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  745] play sound effect 258
        [  747] do nothing
        [  748] store the literal value 1503 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  751] play sound effect 258
        [  753] do nothing
        [  754] store the literal value 1544 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  757] play sound effect 258
        [  759] do nothing
        [  760] store the literal value 1584 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  763] do nothing
        [  764] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [  804] display system/chat message #1623: " þ"
        [  806] IF NOT(((var(36) & 32) == 0)): GOTO #813  (else falls through, rejoins #813)
        [  810] set script variable #36 = (var(36) + 32)
        [  813] IF NOT(((var(36) & 32) > 0)): GOTO #820  (else falls through, rejoins #820)
        [  817] set script variable #36 = (var(36) - 32)
        [  820] IF NOT((group_condition_ref_2(3, 1) && group_condition_ref_2(3, 2))): GOTO #1104  (else falls through, rejoins #1111)
        [  824] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [  827] set script variable #40 = random_below(100)
        [  830] IF NOT(((var(1) == 0) && (var(40) < 2))): GOTO #1097  (else falls through, rejoins #1097)
        [  834] set script variable #1 = (var(1) + 1)
        [  837] store the literal value 1641 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  840] SWITCH random_below(4): {0->#843, 1->#847, 2->#851, 7->#855} else #859
        [  843] store the literal value 1642 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  846] do nothing
        [  847] store the literal value 1677 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  850] do nothing
        [  851] store the literal value 1704 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  854] do nothing
        [  855] store the literal value 1743 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  858] do nothing
        [  859] store the literal value 1771 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  862] do nothing
        [  863] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  873] store the literal value 1824 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  876] set script variable #41 = random_below(4)
        [  879] IF NOT(((random_below(4) != 7) && (var(41) >= 3))): GOTO #886  (else falls through, rejoins #886)
        [  883] set script variable #41 = random_below(3)
        [  886] SWITCH var(41): {0->#889, 1->#893, 3->#897, 4->#901, 5->#905, 6->#909, 7->#913} else #917
        [  889] store the literal value 1825 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  892] do nothing
        [  893] store the literal value 1829 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  896] do nothing
        [  897] store the literal value 1840 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  900] do nothing
        [  901] store the literal value 1861 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  904] do nothing
        [  905] store the literal value 1888 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  908] do nothing
        [  909] store the literal value 1919 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  912] do nothing
        [  913] store the literal value 1948 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  916] do nothing
        [  917] store the literal value 1978 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  920] do nothing
        [  921] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  937] store the literal value 1993 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  940] SWITCH 64: {1->#943, 2->#949, 3->#955, 4->#961, 5->#967, 6->#973, 7->#979, 8->#985, 9->#991, 10->#997, 11->#1003, 12->#1009, 13->#1013, 14->#1017, 512->#1021, 32->#1027, 64->#1033, 128->#1039, 256->#1045} else #1051
        [  943] store the literal value 1994 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  946] play sound effect 257
        [  948] do nothing
        [  949] store the literal value 2021 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  952] play sound effect 257
        [  954] do nothing
        [  955] store the literal value 2047 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  958] play sound effect 260
        [  960] do nothing
        [  961] store the literal value 2077 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  964] play sound effect 260
        [  966] do nothing
        [  967] store the literal value 2101 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  970] play sound effect 260
        [  972] do nothing
        [  973] store the literal value 2126 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  976] play sound effect 261
        [  978] do nothing
        [  979] store the literal value 2180 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  982] play sound effect 257
        [  984] do nothing
        [  985] store the literal value 2204 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  988] play sound effect 261
        [  990] do nothing
        [  991] store the literal value 2259 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  994] play sound effect 262
        [  996] do nothing
        [  997] store the literal value 2304 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1000] play sound effect 262
        [ 1002] do nothing
        [ 1003] store the literal value 2355 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1006] play sound effect 259
        [ 1008] do nothing
        [ 1009] store the literal value 2438 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1012] do nothing
        [ 1013] store the literal value 2502 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1016] do nothing
        [ 1017] store the literal value 2556 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1020] do nothing
        [ 1021] store the literal value 2628 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1024] play sound effect 258
        [ 1026] do nothing
        [ 1027] store the literal value 2662 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1030] play sound effect 258
        [ 1032] do nothing
        [ 1033] store the literal value 2701 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1036] play sound effect 258
        [ 1038] do nothing
        [ 1039] store the literal value 2740 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1042] play sound effect 258
        [ 1044] do nothing
        [ 1045] store the literal value 2781 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1048] play sound effect 258
        [ 1050] do nothing
        [ 1051] store the literal value 2821 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1054] do nothing
        [ 1055] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1095] display system/chat message #2860: " þ"
        [ 1097] IF NOT(((var(36) & 64) == 0)): GOTO #1104  (else falls through, rejoins #1104)
        [ 1101] set script variable #36 = (var(36) + 64)
        [ 1104] IF NOT(((var(36) & 64) > 0)): GOTO #1111  (else falls through, rejoins #1111)
        [ 1108] set script variable #36 = (var(36) - 64)
        [ 1111] IF NOT((group_condition_ref_2(4, 1) && group_condition_ref_2(4, 2))): GOTO #1395  (else falls through, rejoins #1402)
        [ 1115] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #8
        [ 1118] set script variable #43 = random_below(100)
        [ 1121] IF NOT(((var(1) == 0) && (var(43) < 2))): GOTO #1388  (else falls through, rejoins #1388)
        [ 1125] set script variable #1 = (var(1) + 1)
        [ 1128] store the literal value 2878 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1131] SWITCH random_below(4): {0->#1134, 1->#1138, 2->#1142, 7->#1146} else #1150
        [ 1134] store the literal value 2879 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1137] do nothing
        [ 1138] store the literal value 2914 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1141] do nothing
        [ 1142] store the literal value 2941 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1145] do nothing
        [ 1146] store the literal value 2980 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1149] do nothing
        [ 1150] store the literal value 3008 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1153] do nothing
        [ 1154] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1164] store the literal value 3061 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1167] set script variable #44 = random_below(4)
        [ 1170] IF NOT(((random_below(4) != 7) && (var(44) >= 3))): GOTO #1177  (else falls through, rejoins #1177)
        [ 1174] set script variable #44 = random_below(3)
        [ 1177] SWITCH var(44): {0->#1180, 1->#1184, 3->#1188, 4->#1192, 5->#1196, 6->#1200, 7->#1204} else #1208
        [ 1180] store the literal value 3062 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1183] do nothing
        [ 1184] store the literal value 3066 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1187] do nothing
        [ 1188] store the literal value 3077 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1191] do nothing
        [ 1192] store the literal value 3098 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1195] do nothing
        [ 1196] store the literal value 3125 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1199] do nothing
        [ 1200] store the literal value 3156 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1203] do nothing
        [ 1204] store the literal value 3185 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1207] do nothing
        [ 1208] store the literal value 3215 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1211] do nothing
        [ 1212] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1228] store the literal value 3230 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1231] SWITCH 128: {1->#1234, 2->#1240, 3->#1246, 4->#1252, 5->#1258, 6->#1264, 7->#1270, 8->#1276, 9->#1282, 10->#1288, 11->#1294, 12->#1300, 13->#1304, 14->#1308, 512->#1312, 32->#1318, 64->#1324, 128->#1330, 256->#1336} else #1342
        [ 1234] store the literal value 3231 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1237] play sound effect 257
        [ 1239] do nothing
        [ 1240] store the literal value 3258 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1243] play sound effect 257
        [ 1245] do nothing
        [ 1246] store the literal value 3284 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1249] play sound effect 260
        [ 1251] do nothing
        [ 1252] store the literal value 3314 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1255] play sound effect 260
        [ 1257] do nothing
        [ 1258] store the literal value 3338 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1261] play sound effect 260
        [ 1263] do nothing
        [ 1264] store the literal value 3363 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1267] play sound effect 261
        [ 1269] do nothing
        [ 1270] store the literal value 3417 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1273] play sound effect 257
        [ 1275] do nothing
        [ 1276] store the literal value 3441 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1279] play sound effect 261
        [ 1281] do nothing
        [ 1282] store the literal value 3496 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1285] play sound effect 262
        [ 1287] do nothing
        [ 1288] store the literal value 3541 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1291] play sound effect 262
        [ 1293] do nothing
        [ 1294] store the literal value 3592 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1297] play sound effect 259
        [ 1299] do nothing
        [ 1300] store the literal value 3675 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1303] do nothing
        [ 1304] store the literal value 3739 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1307] do nothing
        [ 1308] store the literal value 3793 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1311] do nothing
        [ 1312] store the literal value 3865 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1315] play sound effect 258
        [ 1317] do nothing
        [ 1318] store the literal value 3899 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1321] play sound effect 258
        [ 1323] do nothing
        [ 1324] store the literal value 3938 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1327] play sound effect 258
        [ 1329] do nothing
        [ 1330] store the literal value 3977 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1333] play sound effect 258
        [ 1335] do nothing
        [ 1336] store the literal value 4018 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1339] play sound effect 258
        [ 1341] do nothing
        [ 1342] store the literal value 4058 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1345] do nothing
        [ 1346] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1386] display system/chat message #4097: " þ"
        [ 1388] IF NOT(((var(36) & 128) == 0)): GOTO #1395  (else falls through, rejoins #1395)
        [ 1392] set script variable #36 = (var(36) + 128)
        [ 1395] IF NOT(((var(36) & 128) > 0)): GOTO #1402  (else falls through, rejoins #1402)
        [ 1399] set script variable #36 = (var(36) - 128)
        [ 1402] IF NOT((group_condition_ref_2(5, 1) && group_condition_ref_2(5, 2))): GOTO #1686  (else falls through, rejoins #1693)
        [ 1406] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1409] set script variable #46 = random_below(100)
        [ 1412] IF NOT(((var(1) == 0) && (var(46) < 2))): GOTO #1679  (else falls through, rejoins #1679)
        [ 1416] set script variable #1 = (var(1) + 1)
        [ 1419] store the literal value 4115 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1422] SWITCH random_below(4): {0->#1425, 1->#1429, 2->#1433, 7->#1437} else #1441
        [ 1425] store the literal value 4116 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1428] do nothing
        [ 1429] store the literal value 4151 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1432] do nothing
        [ 1433] store the literal value 4178 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1436] do nothing
        [ 1437] store the literal value 4217 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1440] do nothing
        [ 1441] store the literal value 4245 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1444] do nothing
        [ 1445] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1455] store the literal value 4298 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1458] set script variable #47 = random_below(4)
        [ 1461] IF NOT(((random_below(4) != 7) && (var(47) >= 3))): GOTO #1468  (else falls through, rejoins #1468)
        [ 1465] set script variable #47 = random_below(3)
        [ 1468] SWITCH var(47): {0->#1471, 1->#1475, 3->#1479, 4->#1483, 5->#1487, 6->#1491, 7->#1495} else #1499
        [ 1471] store the literal value 4299 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1474] do nothing
        [ 1475] store the literal value 4303 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1478] do nothing
        [ 1479] store the literal value 4314 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1482] do nothing
        [ 1483] store the literal value 4335 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1486] do nothing
        [ 1487] store the literal value 4362 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1490] do nothing
        [ 1491] store the literal value 4393 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1494] do nothing
        [ 1495] store the literal value 4422 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1498] do nothing
        [ 1499] store the literal value 4452 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1502] do nothing
        [ 1503] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1519] store the literal value 4467 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1522] SWITCH 256: {1->#1525, 2->#1531, 3->#1537, 4->#1543, 5->#1549, 6->#1555, 7->#1561, 8->#1567, 9->#1573, 10->#1579, 11->#1585, 12->#1591, 13->#1595, 14->#1599, 512->#1603, 32->#1609, 64->#1615, 128->#1621, 256->#1627} else #1633
        [ 1525] store the literal value 4468 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1528] play sound effect 257
        [ 1530] do nothing
        [ 1531] store the literal value 4495 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1534] play sound effect 257
        [ 1536] do nothing
        [ 1537] store the literal value 4521 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1540] play sound effect 260
        [ 1542] do nothing
        [ 1543] store the literal value 4551 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1546] play sound effect 260
        [ 1548] do nothing
        [ 1549] store the literal value 4575 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1552] play sound effect 260
        [ 1554] do nothing
        [ 1555] store the literal value 4600 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1558] play sound effect 261
        [ 1560] do nothing
        [ 1561] store the literal value 4654 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1564] play sound effect 257
        [ 1566] do nothing
        [ 1567] store the literal value 4678 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1570] play sound effect 261
        [ 1572] do nothing
        [ 1573] store the literal value 4733 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1576] play sound effect 262
        [ 1578] do nothing
        [ 1579] store the literal value 4778 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1582] play sound effect 262
        [ 1584] do nothing
        [ 1585] store the literal value 4829 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1588] play sound effect 259
        [ 1590] do nothing
        [ 1591] store the literal value 4912 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1594] do nothing
        [ 1595] store the literal value 4976 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1598] do nothing
        [ 1599] store the literal value 5030 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1602] do nothing
        [ 1603] store the literal value 5102 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1606] play sound effect 258
        [ 1608] do nothing
        [ 1609] store the literal value 5136 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1612] play sound effect 258
        [ 1614] do nothing
        [ 1615] store the literal value 5175 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1618] play sound effect 258
        [ 1620] do nothing
        [ 1621] store the literal value 5214 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1624] play sound effect 258
        [ 1626] do nothing
        [ 1627] store the literal value 5255 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1630] play sound effect 258
        [ 1632] do nothing
        [ 1633] store the literal value 5295 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1636] do nothing
        [ 1637] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1677] display system/chat message #5334: " þ
"
        [ 1679] IF NOT(((var(36) & 256) == 0)): GOTO #1686  (else falls through, rejoins #1686)
        [ 1683] set script variable #36 = (var(36) + 256)
        [ 1686] IF NOT(((var(36) & 256) > 0)): GOTO #1693  (else falls through, rejoins #1693)
        [ 1690] set script variable #36 = (var(36) - 256)
        [ 1693] IF NOT((group_condition_ref_2(6, 1) && group_condition_ref_2(6, 2))): GOTO #1977  (else falls through, rejoins #1984)
        [ 1697] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #10
        [ 1700] set script variable #49 = random_below(100)
        [ 1703] IF NOT(((var(1) == 0) && (var(49) < 2))): GOTO #1970  (else falls through, rejoins #1970)
        [ 1707] set script variable #1 = (var(1) + 1)
        [ 1710] store the literal value 5352 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1713] SWITCH random_below(4): {0->#1716, 1->#1720, 2->#1724, 7->#1728} else #1732
        [ 1716] store the literal value 5353 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1719] do nothing
        [ 1720] store the literal value 5388 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1723] do nothing
        [ 1724] store the literal value 5415 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1727] do nothing
        [ 1728] store the literal value 5454 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1731] do nothing
        [ 1732] store the literal value 5482 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1735] do nothing
        [ 1736] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1746] store the literal value 5535 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1749] set script variable #50 = random_below(4)
        [ 1752] IF NOT(((random_below(4) != 7) && (var(50) >= 3))): GOTO #1759  (else falls through, rejoins #1759)
        [ 1756] set script variable #50 = random_below(3)
        [ 1759] SWITCH var(50): {0->#1762, 1->#1766, 3->#1770, 4->#1774, 5->#1778, 6->#1782, 7->#1786} else #1790
        [ 1762] store the literal value 5536 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1765] do nothing
        [ 1766] store the literal value 5540 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1769] do nothing
        [ 1770] store the literal value 5551 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1773] do nothing
        [ 1774] store the literal value 5572 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1777] do nothing
        [ 1778] store the literal value 5599 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1781] do nothing
        [ 1782] store the literal value 5630 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1785] do nothing
        [ 1786] store the literal value 5659 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1789] do nothing
        [ 1790] store the literal value 5689 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1793] do nothing
        [ 1794] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1810] store the literal value 5704 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1813] SWITCH 2048: {1->#1816, 2->#1822, 3->#1828, 4->#1834, 5->#1840, 6->#1846, 7->#1852, 8->#1858, 9->#1864, 10->#1870, 11->#1876, 12->#1882, 13->#1886, 14->#1890, 512->#1894, 32->#1900, 64->#1906, 128->#1912, 256->#1918} else #1924
        [ 1816] store the literal value 5705 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1819] play sound effect 257
        [ 1821] do nothing
        [ 1822] store the literal value 5732 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1825] play sound effect 257
        [ 1827] do nothing
        [ 1828] store the literal value 5758 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1831] play sound effect 260
        [ 1833] do nothing
        [ 1834] store the literal value 5788 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1837] play sound effect 260
        [ 1839] do nothing
        [ 1840] store the literal value 5812 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1843] play sound effect 260
        [ 1845] do nothing
        [ 1846] store the literal value 5837 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1849] play sound effect 261
        [ 1851] do nothing
        [ 1852] store the literal value 5891 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1855] play sound effect 257
        [ 1857] do nothing
        [ 1858] store the literal value 5915 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1861] play sound effect 261
        [ 1863] do nothing
        [ 1864] store the literal value 5970 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1867] play sound effect 262
        [ 1869] do nothing
        [ 1870] store the literal value 6015 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1873] play sound effect 262
        [ 1875] do nothing
        [ 1876] store the literal value 6066 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1879] play sound effect 259
        [ 1881] do nothing
        [ 1882] store the literal value 6149 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1885] do nothing
        [ 1886] store the literal value 6213 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1889] do nothing
        [ 1890] store the literal value 6267 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1893] do nothing
        [ 1894] store the literal value 6339 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1897] play sound effect 258
        [ 1899] do nothing
        [ 1900] store the literal value 6373 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1903] play sound effect 258
        [ 1905] do nothing
        [ 1906] store the literal value 6412 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1909] play sound effect 258
        [ 1911] do nothing
        [ 1912] store the literal value 6451 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1915] play sound effect 258
        [ 1917] do nothing
        [ 1918] store the literal value 6492 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1921] play sound effect 258
        [ 1923] do nothing
        [ 1924] store the literal value 6532 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1927] do nothing
        [ 1928] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1968] display system/chat message #6571: " þ"
        [ 1970] IF NOT(((var(36) & 2048) == 0)): GOTO #1977  (else falls through, rejoins #1977)
        [ 1974] set script variable #36 = (var(36) + 2048)
        [ 1977] IF NOT(((var(36) & 2048) > 0)): GOTO #1984  (else falls through, rejoins #1984)
        [ 1981] set script variable #36 = (var(36) - 2048)
        [ 1984] IF NOT((group_condition_ref_2(7, 1) && group_condition_ref_2(7, 2))): GOTO #2268  (else falls through, rejoins #2275)
        [ 1988] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 1991] set script variable #52 = random_below(100)
        [ 1994] IF NOT(((var(1) == 0) && (var(52) < 2))): GOTO #2261  (else falls through, rejoins #2261)
        [ 1998] set script variable #1 = (var(1) + 1)
        [ 2001] store the literal value 6589 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2004] SWITCH random_below(4): {0->#2007, 1->#2011, 2->#2015, 7->#2019} else #2023
        [ 2007] store the literal value 6590 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2010] do nothing
        [ 2011] store the literal value 6625 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2014] do nothing
        [ 2015] store the literal value 6652 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2018] do nothing
        [ 2019] store the literal value 6691 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2022] do nothing
        [ 2023] store the literal value 6719 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2026] do nothing
        [ 2027] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2037] store the literal value 6772 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2040] set script variable #53 = random_below(4)
        [ 2043] IF NOT(((random_below(4) != 7) && (var(53) >= 3))): GOTO #2050  (else falls through, rejoins #2050)
        [ 2047] set script variable #53 = random_below(3)
        [ 2050] SWITCH var(53): {0->#2053, 1->#2057, 3->#2061, 4->#2065, 5->#2069, 6->#2073, 7->#2077} else #2081
        [ 2053] store the literal value 6773 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2056] do nothing
        [ 2057] store the literal value 6777 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2060] do nothing
        [ 2061] store the literal value 6788 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2064] do nothing
        [ 2065] store the literal value 6809 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2068] do nothing
        [ 2069] store the literal value 6836 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2072] do nothing
        [ 2073] store the literal value 6867 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2076] do nothing
        [ 2077] store the literal value 6896 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2080] do nothing
        [ 2081] store the literal value 6926 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2084] do nothing
        [ 2085] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2101] store the literal value 6941 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2104] SWITCH 4096: {1->#2107, 2->#2113, 3->#2119, 4->#2125, 5->#2131, 6->#2137, 7->#2143, 8->#2149, 9->#2155, 10->#2161, 11->#2167, 12->#2173, 13->#2177, 14->#2181, 512->#2185, 32->#2191, 64->#2197, 128->#2203, 256->#2209} else #2215
        [ 2107] store the literal value 6942 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2110] play sound effect 257
        [ 2112] do nothing
        [ 2113] store the literal value 6969 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2116] play sound effect 257
        [ 2118] do nothing
        [ 2119] store the literal value 6995 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2122] play sound effect 260
        [ 2124] do nothing
        [ 2125] store the literal value 7025 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2128] play sound effect 260
        [ 2130] do nothing
        [ 2131] store the literal value 7049 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2134] play sound effect 260
        [ 2136] do nothing
        [ 2137] store the literal value 7074 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2140] play sound effect 261
        [ 2142] do nothing
        [ 2143] store the literal value 7128 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2146] play sound effect 257
        [ 2148] do nothing
        [ 2149] store the literal value 7152 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2152] play sound effect 261
        [ 2154] do nothing
        [ 2155] store the literal value 7207 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2158] play sound effect 262
        [ 2160] do nothing
        [ 2161] store the literal value 7252 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2164] play sound effect 262
        [ 2166] do nothing
        [ 2167] store the literal value 7303 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2170] play sound effect 259
        [ 2172] do nothing
        [ 2173] store the literal value 7386 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2176] do nothing
        [ 2177] store the literal value 7450 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2180] do nothing
        [ 2181] store the literal value 7504 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2184] do nothing
        [ 2185] store the literal value 7576 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2188] play sound effect 258
        [ 2190] do nothing
        [ 2191] store the literal value 7610 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2194] play sound effect 258
        [ 2196] do nothing
        [ 2197] store the literal value 7649 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2200] play sound effect 258
        [ 2202] do nothing
        [ 2203] store the literal value 7688 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2206] play sound effect 258
        [ 2208] do nothing
        [ 2209] store the literal value 7729 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2212] play sound effect 258
        [ 2214] do nothing
        [ 2215] store the literal value 7769 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2218] do nothing
        [ 2219] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2259] display system/chat message #7808: " þ"
        [ 2261] IF NOT(((var(36) & 4096) == 0)): GOTO #2268  (else falls through, rejoins #2268)
        [ 2265] set script variable #36 = (var(36) + 4096)
        [ 2268] IF NOT(((var(36) & 4096) > 0)): GOTO #2275  (else falls through, rejoins #2275)
        [ 2272] set script variable #36 = (var(36) - 4096)
        [ 2275] set script variable #55 = 0
        [ 2278] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 2281] WHILE set_unit_behavior(0, 12): loop below; exit -> #2570 (500-iteration guard)
        [ 2284] IF NOT((set_unit_behavior(9, 12) > 0)): GOTO #2565  (else falls through, rejoins #2565)
        [ 2288] set script variable #56 = random_below(100)
        [ 2291] IF NOT(((var(1) == 0) && (var(56) < 4))): GOTO #2558  (else falls through, rejoins #2558)
        [ 2295] set script variable #1 = (var(1) + 1)
        [ 2298] store the literal value 7826 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2301] SWITCH random_below(4): {0->#2304, 1->#2308, 2->#2312, 7->#2316} else #2320
        [ 2304] store the literal value 7827 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2307] do nothing
        [ 2308] store the literal value 7862 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2311] do nothing
        [ 2312] store the literal value 7889 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2315] do nothing
        [ 2316] store the literal value 7928 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2319] do nothing
        [ 2320] store the literal value 7956 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2323] do nothing
        [ 2324] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2334] store the literal value 8009 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2337] set script variable #57 = random_below(1)
        [ 2340] IF NOT(((random_below(4) != 7) && (var(57) >= 3))): GOTO #2347  (else falls through, rejoins #2347)
        [ 2344] set script variable #57 = random_below(3)
        [ 2347] SWITCH var(57): {0->#2350, 1->#2354, 3->#2358, 4->#2362, 5->#2366, 6->#2370, 7->#2374} else #2378
        [ 2350] store the literal value 8010 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2353] do nothing
        [ 2354] store the literal value 8014 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2357] do nothing
        [ 2358] store the literal value 8025 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2361] do nothing
        [ 2362] store the literal value 8046 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2365] do nothing
        [ 2366] store the literal value 8073 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2369] do nothing
        [ 2370] store the literal value 8104 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2373] do nothing
        [ 2374] store the literal value 8133 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2377] do nothing
        [ 2378] store the literal value 8163 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2381] do nothing
        [ 2382] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2398] store the literal value 8178 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2401] SWITCH 10: {1->#2404, 2->#2410, 3->#2416, 4->#2422, 5->#2428, 6->#2434, 7->#2440, 8->#2446, 9->#2452, 10->#2458, 11->#2464, 12->#2470, 13->#2474, 14->#2478, 512->#2482, 32->#2488, 64->#2494, 128->#2500, 256->#2506} else #2512
        [ 2404] store the literal value 8179 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2407] play sound effect 257
        [ 2409] do nothing
        [ 2410] store the literal value 8206 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2413] play sound effect 257
        [ 2415] do nothing
        [ 2416] store the literal value 8232 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2419] play sound effect 260
        [ 2421] do nothing
        [ 2422] store the literal value 8262 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2425] play sound effect 260
        [ 2427] do nothing
        [ 2428] store the literal value 8286 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2431] play sound effect 260
        [ 2433] do nothing
        [ 2434] store the literal value 8311 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2437] play sound effect 261
        [ 2439] do nothing
        [ 2440] store the literal value 8365 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2443] play sound effect 257
        [ 2445] do nothing
        [ 2446] store the literal value 8389 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2449] play sound effect 261
        [ 2451] do nothing
        [ 2452] store the literal value 8444 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2455] play sound effect 262
        [ 2457] do nothing
        [ 2458] store the literal value 8489 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2461] play sound effect 262
        [ 2463] do nothing
        [ 2464] store the literal value 8540 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2467] play sound effect 259
        [ 2469] do nothing
        [ 2470] store the literal value 8623 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2473] do nothing
        [ 2474] store the literal value 8687 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2477] do nothing
        [ 2478] store the literal value 8741 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2481] do nothing
        [ 2482] store the literal value 8813 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2485] play sound effect 258
        [ 2487] do nothing
        [ 2488] store the literal value 8847 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2491] play sound effect 258
        [ 2493] do nothing
        [ 2494] store the literal value 8886 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2497] play sound effect 258
        [ 2499] do nothing
        [ 2500] store the literal value 8925 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2503] play sound effect 258
        [ 2505] do nothing
        [ 2506] store the literal value 8966 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2509] play sound effect 258
        [ 2511] do nothing
        [ 2512] store the literal value 9006 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2515] do nothing
        [ 2516] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2556] display system/chat message #9045: " þ"
        [ 2558] IF NOT(((set_unit_behavior(8, 12) & var(36)) == 0)): GOTO #2565  (else falls through, rejoins #2565)
        [ 2562] set script variable #36 = (var(36) + (set_unit_behavior(8, 12) & 7136))
        [ 2565] advance unit-slot #12 to the next unit in group #2 after the current one
        [ 2568] GOTO #2284
        [ 2570] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #13
        [ 2573] WHILE set_unit_behavior(0, 13): loop below; exit -> #2604 (500-iteration guard)
        [ 2576] IF NOT(group_condition_ref_2(9, 2)): GOTO #2583  (else falls through, rejoins #2590)
        [ 2580] set attribute #8 of unit-slot #13 to 2
        [ 2583] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2590  (else falls through, rejoins #2590)
        [ 2587] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 2590] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2599  (else falls through, rejoins #2599)
        [ 2594] set script variable #55 = (var(55) + 1)
        [ 2597] do nothing (message no-op)
        [ 2598] (UNKNOWN OPCODE 0x2367) - dead end, not decoded further (other branches continue independently)
        [ 2599] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 2602] GOTO #2576
        [ 2604] IF NOT(group_condition_ref_2(10, 2)): GOTO #2611  (else falls through, rejoins #2618)
        [ 2608] set attribute #8 of unit-slot #13 to 2
        [ 2611] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2618  (else falls through, rejoins #2618)
        [ 2615] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 2618] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2627  (else falls through, rejoins #2627)
        [ 2622] set script variable #55 = (var(55) + 1)
        [ 2625] do nothing (message no-op)
        [ 2626] (UNKNOWN OPCODE 0x237a) - dead end, not decoded further (other branches continue independently)
        [ 2627] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 2630] set script variable #59 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 2633] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 2636] WHILE set_unit_behavior(0, 12): loop below; exit -> #5790 (500-iteration guard)
        [ 2639] IF NOT((set_unit_behavior(5, 12) < 60)): GOTO #2648  (else falls through, rejoins #5785)
        [ 2643] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 2648] SWITCH (set_unit_behavior(8, 12) & 15): {0->#2651, 1->#2934, 2->#3767, 3->#4326, 4->#4336, 5->#4381, 10->#4666, 11->#4676, 12->#5074, 13->#5075, 14->#5370, 15->#5371} else #5757
        [ 2651] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #2933  (else falls through, rejoins #2933)
        [ 2655] set script variable #60 = random_below(100)
        [ 2658] IF NOT(((var(1) == 0) && (var(60) < 40))): GOTO #2925  (else falls through, rejoins #2925)
        [ 2662] set script variable #1 = (var(1) + 1)
        [ 2665] store the literal value 9101 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2668] SWITCH random_below(1): {0->#2671, 1->#2675, 2->#2679, 7->#2683} else #2687
        [ 2671] store the literal value 9102 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2674] do nothing
        [ 2675] store the literal value 9137 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2678] do nothing
        [ 2679] store the literal value 9164 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2682] do nothing
        [ 2683] store the literal value 9203 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2686] do nothing
        [ 2687] store the literal value 9231 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2690] do nothing
        [ 2691] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2701] store the literal value 9284 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2704] set script variable #61 = random_below(4)
        [ 2707] IF NOT(((random_below(1) != 7) && (var(61) >= 3))): GOTO #2714  (else falls through, rejoins #2714)
        [ 2711] set script variable #61 = random_below(3)
        [ 2714] SWITCH var(61): {0->#2717, 1->#2721, 3->#2725, 4->#2729, 5->#2733, 6->#2737, 7->#2741} else #2745
        [ 2717] store the literal value 9285 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2720] do nothing
        [ 2721] store the literal value 9289 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2724] do nothing
        [ 2725] store the literal value 9300 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2728] do nothing
        [ 2729] store the literal value 9321 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2732] do nothing
        [ 2733] store the literal value 9348 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2736] do nothing
        [ 2737] store the literal value 9379 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2740] do nothing
        [ 2741] store the literal value 9408 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2744] do nothing
        [ 2745] store the literal value 9438 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2748] do nothing
        [ 2749] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2765] store the literal value 9453 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2768] SWITCH 8: {1->#2771, 2->#2777, 3->#2783, 4->#2789, 5->#2795, 6->#2801, 7->#2807, 8->#2813, 9->#2819, 10->#2825, 11->#2831, 12->#2837, 13->#2841, 14->#2845, 512->#2849, 32->#2855, 64->#2861, 128->#2867, 256->#2873} else #2879
        [ 2771] store the literal value 9454 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2774] play sound effect 257
        [ 2776] do nothing
        [ 2777] store the literal value 9481 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2780] play sound effect 257
        [ 2782] do nothing
        [ 2783] store the literal value 9507 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2786] play sound effect 260
        [ 2788] do nothing
        [ 2789] store the literal value 9537 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2792] play sound effect 260
        [ 2794] do nothing
        [ 2795] store the literal value 9561 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2798] play sound effect 260
        [ 2800] do nothing
        [ 2801] store the literal value 9586 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2804] play sound effect 261
        [ 2806] do nothing
        [ 2807] store the literal value 9640 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2810] play sound effect 257
        [ 2812] do nothing
        [ 2813] store the literal value 9664 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2816] play sound effect 261
        [ 2818] do nothing
        [ 2819] store the literal value 9719 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2822] play sound effect 262
        [ 2824] do nothing
        [ 2825] store the literal value 9764 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2828] play sound effect 262
        [ 2830] do nothing
        [ 2831] store the literal value 9815 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2834] play sound effect 259
        [ 2836] do nothing
        [ 2837] store the literal value 9898 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2840] do nothing
        [ 2841] store the literal value 9962 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2844] do nothing
        [ 2845] store the literal value 10016 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2848] do nothing
        [ 2849] store the literal value 10088 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2852] play sound effect 258
        [ 2854] do nothing
        [ 2855] store the literal value 10122 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2858] play sound effect 258
        [ 2860] do nothing
        [ 2861] store the literal value 10161 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2864] play sound effect 258
        [ 2866] do nothing
        [ 2867] store the literal value 10200 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2870] play sound effect 258
        [ 2872] do nothing
        [ 2873] store the literal value 10241 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2876] play sound effect 258
        [ 2878] do nothing
        [ 2879] store the literal value 10281 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2882] do nothing
        [ 2883] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2923] display system/chat message #10320: " þ"
        [ 2925] order unit-slot #12 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 2930] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 2933] do nothing
        [ 2934] IF NOT((group_condition_ref_2(11, 1) || (set_unit_behavior(9, 12) != 0))): GOTO #3217  (else falls through, rejoins #3766)
        [ 2938] IF NOT((set_unit_behavior(7, 12) != 6)): GOTO #3217  (else falls through, rejoins #3217)
        [ 2942] set script variable #63 = random_below(100)
        [ 2945] IF NOT(((var(1) == 0) && (var(63) < 40))): GOTO #3212  (else falls through, rejoins #3212)
        [ 2949] set script variable #1 = (var(1) + 1)
        [ 2952] store the literal value 10338 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2955] SWITCH random_below(1): {0->#2958, 1->#2962, 2->#2966, 7->#2970} else #2974
        [ 2958] store the literal value 10339 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2961] do nothing
        [ 2962] store the literal value 10374 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2965] do nothing
        [ 2966] store the literal value 10401 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2969] do nothing
        [ 2970] store the literal value 10440 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2973] do nothing
        [ 2974] store the literal value 10468 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2977] do nothing
        [ 2978] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2988] store the literal value 10521 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2991] set script variable #64 = random_below(4)
        [ 2994] IF NOT(((random_below(1) != 7) && (var(64) >= 3))): GOTO #3001  (else falls through, rejoins #3001)
        [ 2998] set script variable #64 = random_below(3)
        [ 3001] SWITCH var(64): {0->#3004, 1->#3008, 3->#3012, 4->#3016, 5->#3020, 6->#3024, 7->#3028} else #3032
        [ 3004] store the literal value 10522 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3007] do nothing
        [ 3008] store the literal value 10526 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3011] do nothing
        [ 3012] store the literal value 10537 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3015] do nothing
        [ 3016] store the literal value 10558 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3019] do nothing
        [ 3020] store the literal value 10585 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3023] do nothing
        [ 3024] store the literal value 10616 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3027] do nothing
        [ 3028] store the literal value 10645 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3031] do nothing
        [ 3032] store the literal value 10675 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3035] do nothing
        [ 3036] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3052] store the literal value 10690 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3055] SWITCH 3: {1->#3058, 2->#3064, 3->#3070, 4->#3076, 5->#3082, 6->#3088, 7->#3094, 8->#3100, 9->#3106, 10->#3112, 11->#3118, 12->#3124, 13->#3128, 14->#3132, 512->#3136, 32->#3142, 64->#3148, 128->#3154, 256->#3160} else #3166
        [ 3058] store the literal value 10691 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3061] play sound effect 257
        [ 3063] do nothing
        [ 3064] store the literal value 10718 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3067] play sound effect 257
        [ 3069] do nothing
        [ 3070] store the literal value 10744 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3073] play sound effect 260
        [ 3075] do nothing
        [ 3076] store the literal value 10774 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3079] play sound effect 260
        [ 3081] do nothing
        [ 3082] store the literal value 10798 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3085] play sound effect 260
        [ 3087] do nothing
        [ 3088] store the literal value 10823 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3091] play sound effect 261
        [ 3093] do nothing
        [ 3094] store the literal value 10877 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3097] play sound effect 257
        [ 3099] do nothing
        [ 3100] store the literal value 10901 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3103] play sound effect 261
        [ 3105] do nothing
        [ 3106] store the literal value 10956 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3109] play sound effect 262
        [ 3111] do nothing
        [ 3112] store the literal value 11001 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3115] play sound effect 262
        [ 3117] do nothing
        [ 3118] store the literal value 11052 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3121] play sound effect 259
        [ 3123] do nothing
        [ 3124] store the literal value 11135 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3127] do nothing
        [ 3128] store the literal value 11199 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3131] do nothing
        [ 3132] store the literal value 11253 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3135] do nothing
        [ 3136] store the literal value 11325 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3139] play sound effect 258
        [ 3141] do nothing
        [ 3142] store the literal value 11359 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3145] play sound effect 258
        [ 3147] do nothing
        [ 3148] store the literal value 11398 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3151] play sound effect 258
        [ 3153] do nothing
        [ 3154] store the literal value 11437 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3157] play sound effect 258
        [ 3159] do nothing
        [ 3160] store the literal value 11478 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3163] play sound effect 258
        [ 3165] do nothing
        [ 3166] store the literal value 11518 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3169] do nothing
        [ 3170] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3210] display system/chat message #11557: " þ"
        [ 3212] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3217] IF NOT((set_unit_behavior(7, 12) != 2)): GOTO #3496  (else falls through, rejoins #3766)
        [ 3221] order unit-slot #12 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 3226] set script variable #66 = random_below(100)
        [ 3229] IF NOT(((var(1) == 0) && (var(66) < 4))): GOTO #3496  (else falls through, rejoins #3496)
        [ 3233] set script variable #1 = (var(1) + 1)
        [ 3236] store the literal value 11575 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3239] SWITCH random_below(1): {0->#3242, 1->#3246, 2->#3250, 7->#3254} else #3258
        [ 3242] store the literal value 11576 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3245] do nothing
        [ 3246] store the literal value 11611 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3249] do nothing
        [ 3250] store the literal value 11638 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3253] do nothing
        [ 3254] store the literal value 11677 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3257] do nothing
        [ 3258] store the literal value 11705 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3261] do nothing
        [ 3262] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3272] store the literal value 11758 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3275] set script variable #67 = random_below(4)
        [ 3278] IF NOT(((random_below(1) != 7) && (var(67) >= 3))): GOTO #3285  (else falls through, rejoins #3285)
        [ 3282] set script variable #67 = random_below(3)
        [ 3285] SWITCH var(67): {0->#3288, 1->#3292, 3->#3296, 4->#3300, 5->#3304, 6->#3308, 7->#3312} else #3316
        [ 3288] store the literal value 11759 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3291] do nothing
        [ 3292] store the literal value 11763 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3295] do nothing
        [ 3296] store the literal value 11774 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3299] do nothing
        [ 3300] store the literal value 11795 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3303] do nothing
        [ 3304] store the literal value 11822 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3307] do nothing
        [ 3308] store the literal value 11853 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3311] do nothing
        [ 3312] store the literal value 11882 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3315] do nothing
        [ 3316] store the literal value 11912 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3319] do nothing
        [ 3320] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3336] store the literal value 11927 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3339] SWITCH 2: {1->#3342, 2->#3348, 3->#3354, 4->#3360, 5->#3366, 6->#3372, 7->#3378, 8->#3384, 9->#3390, 10->#3396, 11->#3402, 12->#3408, 13->#3412, 14->#3416, 512->#3420, 32->#3426, 64->#3432, 128->#3438, 256->#3444} else #3450
        [ 3342] store the literal value 11928 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3345] play sound effect 257
        [ 3347] do nothing
        [ 3348] store the literal value 11955 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3351] play sound effect 257
        [ 3353] do nothing
        [ 3354] store the literal value 11981 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3357] play sound effect 260
        [ 3359] do nothing
        [ 3360] store the literal value 12011 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3363] play sound effect 260
        [ 3365] do nothing
        [ 3366] store the literal value 12035 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3369] play sound effect 260
        [ 3371] do nothing
        [ 3372] store the literal value 12060 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3375] play sound effect 261
        [ 3377] do nothing
        [ 3378] store the literal value 12114 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3381] play sound effect 257
        [ 3383] do nothing
        [ 3384] store the literal value 12138 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3387] play sound effect 261
        [ 3389] do nothing
        [ 3390] store the literal value 12193 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3393] play sound effect 262
        [ 3395] do nothing
        [ 3396] store the literal value 12238 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3399] play sound effect 262
        [ 3401] do nothing
        [ 3402] store the literal value 12289 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3405] play sound effect 259
        [ 3407] do nothing
        [ 3408] store the literal value 12372 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3411] do nothing
        [ 3412] store the literal value 12436 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3415] do nothing
        [ 3416] store the literal value 12490 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3419] do nothing
        [ 3420] store the literal value 12562 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3423] play sound effect 258
        [ 3425] do nothing
        [ 3426] store the literal value 12596 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3429] play sound effect 258
        [ 3431] do nothing
        [ 3432] store the literal value 12635 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3435] play sound effect 258
        [ 3437] do nothing
        [ 3438] store the literal value 12674 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3441] play sound effect 258
        [ 3443] do nothing
        [ 3444] store the literal value 12715 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3447] play sound effect 258
        [ 3449] do nothing
        [ 3450] store the literal value 12755 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3453] do nothing
        [ 3454] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3494] display system/chat message #12794: " þ"
        [ 3496] set script variable #69 = random_below(100)
        [ 3499] IF NOT(((var(1) == 0) && (var(69) < 4))): GOTO #3766  (else falls through, rejoins #3766)
        [ 3503] set script variable #1 = (var(1) + 1)
        [ 3506] store the literal value 12812 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3509] SWITCH random_below(1): {0->#3512, 1->#3516, 2->#3520, 7->#3524} else #3528
        [ 3512] store the literal value 12813 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3515] do nothing
        [ 3516] store the literal value 12848 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3519] do nothing
        [ 3520] store the literal value 12875 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3523] do nothing
        [ 3524] store the literal value 12914 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3527] do nothing
        [ 3528] store the literal value 12942 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3531] do nothing
        [ 3532] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3542] store the literal value 12995 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3545] set script variable #70 = random_below(4)
        [ 3548] IF NOT(((random_below(1) != 7) && (var(70) >= 3))): GOTO #3555  (else falls through, rejoins #3555)
        [ 3552] set script variable #70 = random_below(3)
        [ 3555] SWITCH var(70): {0->#3558, 1->#3562, 3->#3566, 4->#3570, 5->#3574, 6->#3578, 7->#3582} else #3586
        [ 3558] store the literal value 12996 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3561] do nothing
        [ 3562] store the literal value 13000 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3565] do nothing
        [ 3566] store the literal value 13011 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3569] do nothing
        [ 3570] store the literal value 13032 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3573] do nothing
        [ 3574] store the literal value 13059 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3577] do nothing
        [ 3578] store the literal value 13090 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3581] do nothing
        [ 3582] store the literal value 13119 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3585] do nothing
        [ 3586] store the literal value 13149 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3589] do nothing
        [ 3590] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3606] store the literal value 13164 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3609] SWITCH 1: {1->#3612, 2->#3618, 3->#3624, 4->#3630, 5->#3636, 6->#3642, 7->#3648, 8->#3654, 9->#3660, 10->#3666, 11->#3672, 12->#3678, 13->#3682, 14->#3686, 512->#3690, 32->#3696, 64->#3702, 128->#3708, 256->#3714} else #3720
        [ 3612] store the literal value 13165 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3615] play sound effect 257
        [ 3617] do nothing
        [ 3618] store the literal value 13192 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3621] play sound effect 257
        [ 3623] do nothing
        [ 3624] store the literal value 13218 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3627] play sound effect 260
        [ 3629] do nothing
        [ 3630] store the literal value 13248 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3633] play sound effect 260
        [ 3635] do nothing
        [ 3636] store the literal value 13272 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3639] play sound effect 260
        [ 3641] do nothing
        [ 3642] store the literal value 13297 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3645] play sound effect 261
        [ 3647] do nothing
        [ 3648] store the literal value 13351 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3651] play sound effect 257
        [ 3653] do nothing
        [ 3654] store the literal value 13375 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3657] play sound effect 261
        [ 3659] do nothing
        [ 3660] store the literal value 13430 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3663] play sound effect 262
        [ 3665] do nothing
        [ 3666] store the literal value 13475 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3669] play sound effect 262
        [ 3671] do nothing
        [ 3672] store the literal value 13526 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3675] play sound effect 259
        [ 3677] do nothing
        [ 3678] store the literal value 13609 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3681] do nothing
        [ 3682] store the literal value 13673 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3685] do nothing
        [ 3686] store the literal value 13727 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3689] do nothing
        [ 3690] store the literal value 13799 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3693] play sound effect 258
        [ 3695] do nothing
        [ 3696] store the literal value 13833 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3699] play sound effect 258
        [ 3701] do nothing
        [ 3702] store the literal value 13872 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3705] play sound effect 258
        [ 3707] do nothing
        [ 3708] store the literal value 13911 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3711] play sound effect 258
        [ 3713] do nothing
        [ 3714] store the literal value 13952 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3717] play sound effect 258
        [ 3719] do nothing
        [ 3720] store the literal value 13992 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3723] do nothing
        [ 3724] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3764] display system/chat message #14031: " þ"
        [ 3766] do nothing
        [ 3767] IF NOT(((var(36) & 512) > 0)): GOTO #4046  (else falls through, rejoins #4325)
        [ 3771] set script variable #72 = random_below(100)
        [ 3774] IF NOT(((var(1) == 0) && (var(72) < 4))): GOTO #4041  (else falls through, rejoins #4041)
        [ 3778] set script variable #1 = (var(1) + 1)
        [ 3781] store the literal value 14049 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3784] SWITCH random_below(1): {0->#3787, 1->#3791, 2->#3795, 7->#3799} else #3803
        [ 3787] store the literal value 14050 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3790] do nothing
        [ 3791] store the literal value 14085 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3794] do nothing
        [ 3795] store the literal value 14112 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3798] do nothing
        [ 3799] store the literal value 14151 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3802] do nothing
        [ 3803] store the literal value 14179 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3806] do nothing
        [ 3807] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3817] store the literal value 14232 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3820] set script variable #73 = random_below(4)
        [ 3823] IF NOT(((random_below(1) != 7) && (var(73) >= 3))): GOTO #3830  (else falls through, rejoins #3830)
        [ 3827] set script variable #73 = random_below(3)
        [ 3830] SWITCH var(73): {0->#3833, 1->#3837, 3->#3841, 4->#3845, 5->#3849, 6->#3853, 7->#3857} else #3861
        [ 3833] store the literal value 14233 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3836] do nothing
        [ 3837] store the literal value 14237 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3840] do nothing
        [ 3841] store the literal value 14248 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3844] do nothing
        [ 3845] store the literal value 14269 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3848] do nothing
        [ 3849] store the literal value 14296 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3852] do nothing
        [ 3853] store the literal value 14327 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3856] do nothing
        [ 3857] store the literal value 14356 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3860] do nothing
        [ 3861] store the literal value 14386 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3864] do nothing
        [ 3865] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3881] store the literal value 14401 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3884] SWITCH 4: {1->#3887, 2->#3893, 3->#3899, 4->#3905, 5->#3911, 6->#3917, 7->#3923, 8->#3929, 9->#3935, 10->#3941, 11->#3947, 12->#3953, 13->#3957, 14->#3961, 512->#3965, 32->#3971, 64->#3977, 128->#3983, 256->#3989} else #3995
        [ 3887] store the literal value 14402 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3890] play sound effect 257
        [ 3892] do nothing
        [ 3893] store the literal value 14429 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3896] play sound effect 257
        [ 3898] do nothing
        [ 3899] store the literal value 14455 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3902] play sound effect 260
        [ 3904] do nothing
        [ 3905] store the literal value 14485 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3908] play sound effect 260
        [ 3910] do nothing
        [ 3911] store the literal value 14509 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3914] play sound effect 260
        [ 3916] do nothing
        [ 3917] store the literal value 14534 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3920] play sound effect 261
        [ 3922] do nothing
        [ 3923] store the literal value 14588 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3926] play sound effect 257
        [ 3928] do nothing
        [ 3929] store the literal value 14612 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3932] play sound effect 261
        [ 3934] do nothing
        [ 3935] store the literal value 14667 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3938] play sound effect 262
        [ 3940] do nothing
        [ 3941] store the literal value 14712 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3944] play sound effect 262
        [ 3946] do nothing
        [ 3947] store the literal value 14763 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3950] play sound effect 259
        [ 3952] do nothing
        [ 3953] store the literal value 14846 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3956] do nothing
        [ 3957] store the literal value 14910 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3960] do nothing
        [ 3961] store the literal value 14964 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3964] do nothing
        [ 3965] store the literal value 15036 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3968] play sound effect 258
        [ 3970] do nothing
        [ 3971] store the literal value 15070 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3974] play sound effect 258
        [ 3976] do nothing
        [ 3977] store the literal value 15109 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3980] play sound effect 258
        [ 3982] do nothing
        [ 3983] store the literal value 15148 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3986] play sound effect 258
        [ 3988] do nothing
        [ 3989] store the literal value 15189 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3992] play sound effect 258
        [ 3994] do nothing
        [ 3995] store the literal value 15229 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3998] do nothing
        [ 3999] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4039] display system/chat message #15268: " þ""
        [ 4041] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4046] IF NOT(((var(36) & 128) > 0)): GOTO #4325  (else falls through, rejoins #4325)
        [ 4050] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4055] set script variable #75 = random_below(100)
        [ 4058] IF NOT(((var(1) == 0) && (var(75) < 4))): GOTO #4325  (else falls through, rejoins #4325)
        [ 4062] set script variable #1 = (var(1) + 1)
        [ 4065] store the literal value 15286 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4068] SWITCH random_below(1): {0->#4071, 1->#4075, 2->#4079, 7->#4083} else #4087
        [ 4071] store the literal value 15287 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4074] do nothing
        [ 4075] store the literal value 15322 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4078] do nothing
        [ 4079] store the literal value 15349 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4082] do nothing
        [ 4083] store the literal value 15388 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4086] do nothing
        [ 4087] store the literal value 15416 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4090] do nothing
        [ 4091] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4101] store the literal value 15469 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4104] set script variable #76 = random_below(4)
        [ 4107] IF NOT(((random_below(1) != 7) && (var(76) >= 3))): GOTO #4114  (else falls through, rejoins #4114)
        [ 4111] set script variable #76 = random_below(3)
        [ 4114] SWITCH var(76): {0->#4117, 1->#4121, 3->#4125, 4->#4129, 5->#4133, 6->#4137, 7->#4141} else #4145
        [ 4117] store the literal value 15470 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4120] do nothing
        [ 4121] store the literal value 15474 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4124] do nothing
        [ 4125] store the literal value 15485 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4128] do nothing
        [ 4129] store the literal value 15506 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4132] do nothing
        [ 4133] store the literal value 15533 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4136] do nothing
        [ 4137] store the literal value 15564 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4140] do nothing
        [ 4141] store the literal value 15593 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4144] do nothing
        [ 4145] store the literal value 15623 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4148] do nothing
        [ 4149] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4165] store the literal value 15638 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4168] SWITCH 5: {1->#4171, 2->#4177, 3->#4183, 4->#4189, 5->#4195, 6->#4201, 7->#4207, 8->#4213, 9->#4219, 10->#4225, 11->#4231, 12->#4237, 13->#4241, 14->#4245, 512->#4249, 32->#4255, 64->#4261, 128->#4267, 256->#4273} else #4279
        [ 4171] store the literal value 15639 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4174] play sound effect 257
        [ 4176] do nothing
        [ 4177] store the literal value 15666 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4180] play sound effect 257
        [ 4182] do nothing
        [ 4183] store the literal value 15692 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4186] play sound effect 260
        [ 4188] do nothing
        [ 4189] store the literal value 15722 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4192] play sound effect 260
        [ 4194] do nothing
        [ 4195] store the literal value 15746 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4198] play sound effect 260
        [ 4200] do nothing
        [ 4201] store the literal value 15771 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4204] play sound effect 261
        [ 4206] do nothing
        [ 4207] store the literal value 15825 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4210] play sound effect 257
        [ 4212] do nothing
        [ 4213] store the literal value 15849 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4216] play sound effect 261
        [ 4218] do nothing
        [ 4219] store the literal value 15904 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4222] play sound effect 262
        [ 4224] do nothing
        [ 4225] store the literal value 15949 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4228] play sound effect 262
        [ 4230] do nothing
        [ 4231] store the literal value 16000 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4234] play sound effect 259
        [ 4236] do nothing
        [ 4237] store the literal value 16083 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4240] do nothing
        [ 4241] store the literal value 16147 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4244] do nothing
        [ 4245] store the literal value 16201 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4248] do nothing
        [ 4249] store the literal value 16273 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4252] play sound effect 258
        [ 4254] do nothing
        [ 4255] store the literal value 16307 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4258] play sound effect 258
        [ 4260] do nothing
        [ 4261] store the literal value 16346 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4264] play sound effect 258
        [ 4266] do nothing
        [ 4267] store the literal value 16385 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4270] play sound effect 258
        [ 4272] do nothing
        [ 4273] store the literal value 16426 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4276] play sound effect 258
        [ 4278] do nothing
        [ 4279] store the literal value 16466 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4282] do nothing
        [ 4283] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4323] display system/chat message #16505: " þ%"
        [ 4325] do nothing
        [ 4326] IF NOT(((var(36) & 512) > 0)): GOTO #4335  (else falls through, rejoins #4335)
        [ 4330] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4335] do nothing
        [ 4336] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#4339, 64->#4345, 128->#4351, 256->#4357} else #4363
        [ 4339] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 4344] do nothing
        [ 4345] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4350] do nothing
        [ 4351] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4356] do nothing
        [ 4357] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 4362] do nothing
        [ 4363] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4368] do nothing
        [ 4369] do nothing
        [ 4370] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4380] do nothing
        [ 4381] IF NOT((var(55) > 0)): GOTO #4660  (else falls through, rejoins #4665)
        [ 4385] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4390] set script variable #78 = random_below(100)
        [ 4393] IF NOT(((var(1) == 0) && (var(78) < 4))): GOTO #4660  (else falls through, rejoins #4660)
        [ 4397] set script variable #1 = (var(1) + 1)
        [ 4400] store the literal value 16523 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4403] SWITCH random_below(1): {0->#4406, 1->#4410, 2->#4414, 7->#4418} else #4422
        [ 4406] store the literal value 16524 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4409] do nothing
        [ 4410] store the literal value 16559 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4413] do nothing
        [ 4414] store the literal value 16586 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4417] do nothing
        [ 4418] store the literal value 16625 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4421] do nothing
        [ 4422] store the literal value 16653 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4425] do nothing
        [ 4426] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4436] store the literal value 16706 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4439] set script variable #79 = random_below(4)
        [ 4442] IF NOT(((random_below(1) != 7) && (var(79) >= 3))): GOTO #4449  (else falls through, rejoins #4449)
        [ 4446] set script variable #79 = random_below(3)
        [ 4449] SWITCH var(79): {0->#4452, 1->#4456, 3->#4460, 4->#4464, 5->#4468, 6->#4472, 7->#4476} else #4480
        [ 4452] store the literal value 16707 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4455] do nothing
        [ 4456] store the literal value 16711 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4459] do nothing
        [ 4460] store the literal value 16722 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4463] do nothing
        [ 4464] store the literal value 16743 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4467] do nothing
        [ 4468] store the literal value 16770 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4471] do nothing
        [ 4472] store the literal value 16801 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4475] do nothing
        [ 4476] store the literal value 16830 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4479] do nothing
        [ 4480] store the literal value 16860 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4483] do nothing
        [ 4484] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4500] store the literal value 16875 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4503] SWITCH 6: {1->#4506, 2->#4512, 3->#4518, 4->#4524, 5->#4530, 6->#4536, 7->#4542, 8->#4548, 9->#4554, 10->#4560, 11->#4566, 12->#4572, 13->#4576, 14->#4580, 512->#4584, 32->#4590, 64->#4596, 128->#4602, 256->#4608} else #4614
        [ 4506] store the literal value 16876 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4509] play sound effect 257
        [ 4511] do nothing
        [ 4512] store the literal value 16903 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4515] play sound effect 257
        [ 4517] do nothing
        [ 4518] store the literal value 16929 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4521] play sound effect 260
        [ 4523] do nothing
        [ 4524] store the literal value 16959 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4527] play sound effect 260
        [ 4529] do nothing
        [ 4530] store the literal value 16983 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4533] play sound effect 260
        [ 4535] do nothing
        [ 4536] store the literal value 17008 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4539] play sound effect 261
        [ 4541] do nothing
        [ 4542] store the literal value 17062 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4545] play sound effect 257
        [ 4547] do nothing
        [ 4548] store the literal value 17086 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4551] play sound effect 261
        [ 4553] do nothing
        [ 4554] store the literal value 17141 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4557] play sound effect 262
        [ 4559] do nothing
        [ 4560] store the literal value 17186 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4563] play sound effect 262
        [ 4565] do nothing
        [ 4566] store the literal value 17237 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4569] play sound effect 259
        [ 4571] do nothing
        [ 4572] store the literal value 17320 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4575] do nothing
        [ 4576] store the literal value 17384 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4579] do nothing
        [ 4580] store the literal value 17438 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4583] do nothing
        [ 4584] store the literal value 17510 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4587] play sound effect 258
        [ 4589] do nothing
        [ 4590] store the literal value 17544 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4593] play sound effect 258
        [ 4595] do nothing
        [ 4596] store the literal value 17583 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4599] play sound effect 258
        [ 4601] do nothing
        [ 4602] store the literal value 17622 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4605] play sound effect 258
        [ 4607] do nothing
        [ 4608] store the literal value 17663 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4611] play sound effect 258
        [ 4613] do nothing
        [ 4614] store the literal value 17703 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4617] do nothing
        [ 4618] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4658] display system/chat message #17742: " þ("
        [ 4660] order unit-slot #12 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 4665] do nothing
        [ 4666] IF NOT((set_unit_behavior(7, 12) != 3)): GOTO #4675  (else falls through, rejoins #4675)
        [ 4670] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4675] do nothing
        [ 4676] IF NOT((((var(36) & 7136) == 0) && (var(55) == 0))): GOTO #5049  (else falls through, rejoins #5073)
        [ 4680] set script variable #81 = random_below(100)
        [ 4683] IF NOT(((var(1) == 0) && (var(81) < 4))): GOTO #4950  (else falls through, rejoins #4950)
        [ 4687] set script variable #1 = (var(1) + 1)
        [ 4690] store the literal value 17760 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4693] SWITCH random_below(1): {0->#4696, 1->#4700, 2->#4704, 7->#4708} else #4712
        [ 4696] store the literal value 17761 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4699] do nothing
        [ 4700] store the literal value 17796 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4703] do nothing
        [ 4704] store the literal value 17823 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4707] do nothing
        [ 4708] store the literal value 17862 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4711] do nothing
        [ 4712] store the literal value 17890 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4715] do nothing
        [ 4716] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4726] store the literal value 17943 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4729] set script variable #82 = random_below(4)
        [ 4732] IF NOT(((random_below(1) != 7) && (var(82) >= 3))): GOTO #4739  (else falls through, rejoins #4739)
        [ 4736] set script variable #82 = random_below(3)
        [ 4739] SWITCH var(82): {0->#4742, 1->#4746, 3->#4750, 4->#4754, 5->#4758, 6->#4762, 7->#4766} else #4770
        [ 4742] store the literal value 17944 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4745] do nothing
        [ 4746] store the literal value 17948 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4749] do nothing
        [ 4750] store the literal value 17959 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4753] do nothing
        [ 4754] store the literal value 17980 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4757] do nothing
        [ 4758] store the literal value 18007 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4761] do nothing
        [ 4762] store the literal value 18038 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4765] do nothing
        [ 4766] store the literal value 18067 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4769] do nothing
        [ 4770] store the literal value 18097 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4773] do nothing
        [ 4774] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4790] store the literal value 18112 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4793] SWITCH 7: {1->#4796, 2->#4802, 3->#4808, 4->#4814, 5->#4820, 6->#4826, 7->#4832, 8->#4838, 9->#4844, 10->#4850, 11->#4856, 12->#4862, 13->#4866, 14->#4870, 512->#4874, 32->#4880, 64->#4886, 128->#4892, 256->#4898} else #4904
        [ 4796] store the literal value 18113 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4799] play sound effect 257
        [ 4801] do nothing
        [ 4802] store the literal value 18140 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4805] play sound effect 257
        [ 4807] do nothing
        [ 4808] store the literal value 18166 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4811] play sound effect 260
        [ 4813] do nothing
        [ 4814] store the literal value 18196 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4817] play sound effect 260
        [ 4819] do nothing
        [ 4820] store the literal value 18220 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4823] play sound effect 260
        [ 4825] do nothing
        [ 4826] store the literal value 18245 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4829] play sound effect 261
        [ 4831] do nothing
        [ 4832] store the literal value 18299 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4835] play sound effect 257
        [ 4837] do nothing
        [ 4838] store the literal value 18323 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4841] play sound effect 261
        [ 4843] do nothing
        [ 4844] store the literal value 18378 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4847] play sound effect 262
        [ 4849] do nothing
        [ 4850] store the literal value 18423 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4853] play sound effect 262
        [ 4855] do nothing
        [ 4856] store the literal value 18474 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4859] play sound effect 259
        [ 4861] do nothing
        [ 4862] store the literal value 18557 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4865] do nothing
        [ 4866] store the literal value 18621 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4869] do nothing
        [ 4870] store the literal value 18675 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4873] do nothing
        [ 4874] store the literal value 18747 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4877] play sound effect 258
        [ 4879] do nothing
        [ 4880] store the literal value 18781 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4883] play sound effect 258
        [ 4885] do nothing
        [ 4886] store the literal value 18820 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4889] play sound effect 258
        [ 4891] do nothing
        [ 4892] store the literal value 18859 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4895] play sound effect 258
        [ 4897] do nothing
        [ 4898] store the literal value 18900 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4901] play sound effect 258
        [ 4903] do nothing
        [ 4904] store the literal value 18940 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4907] do nothing
        [ 4908] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4948] display system/chat message #18979: " þ+"
        [ 4950] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#4953, 64->#4971, 128->#4989, 256->#5007} else #5025
        [ 4953] IF NOT(group_condition_ref(2, 12)): GOTO #4961  (else falls through, rejoins #4961)
        [ 4957] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4961] define condition-slot #2 as (variable-ref 2, expression-offset 3616)
        [ 4965] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 4970] do nothing
        [ 4971] IF NOT(group_condition_ref(3, 12)): GOTO #4979  (else falls through, rejoins #4979)
        [ 4975] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4979] define condition-slot #3 as (variable-ref 3, expression-offset 3637)
        [ 4983] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 4988] do nothing
        [ 4989] IF NOT(group_condition_ref(4, 12)): GOTO #4997  (else falls through, rejoins #4997)
        [ 4993] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4997] define condition-slot #4 as (variable-ref 4, expression-offset 3658)
        [ 5001] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5006] do nothing
        [ 5007] IF NOT(group_condition_ref(5, 12)): GOTO #5015  (else falls through, rejoins #5015)
        [ 5011] set hex-var #5 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5015] define condition-slot #5 as (variable-ref 5, expression-offset 3679)
        [ 5019] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 5024] do nothing
        [ 5025] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5030] do nothing
        [ 5031] do nothing
        [ 5032] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5042] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #5049  (else falls through, rejoins #5049)
        [ 5046] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 5049] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #5064  (else falls through, rejoins #5073)
        [ 5053] arm timer #1 to expire 2 turn(s) from now
        [ 5056] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 5059] order unit-slot #12 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 5064] IF NOT(timer_expired(1)): GOTO #5073  (else falls through, rejoins #5073)
        [ 5068] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 5073] do nothing
        [ 5074] do nothing
        [ 5075] IF NOT((set_unit_behavior(7, 12) != 4)): GOTO #5354  (else falls through, rejoins #5369)
        [ 5079] set script variable #84 = random_below(100)
        [ 5082] IF NOT(((var(1) == 0) && (var(84) < 4))): GOTO #5349  (else falls through, rejoins #5349)
        [ 5086] set script variable #1 = (var(1) + 1)
        [ 5089] store the literal value 18997 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5092] SWITCH random_below(1): {0->#5095, 1->#5099, 2->#5103, 7->#5107} else #5111
        [ 5095] store the literal value 18998 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5098] do nothing
        [ 5099] store the literal value 19033 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5102] do nothing
        [ 5103] store the literal value 19060 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5106] do nothing
        [ 5107] store the literal value 19099 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5110] do nothing
        [ 5111] store the literal value 19127 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5114] do nothing
        [ 5115] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5125] store the literal value 19180 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5128] set script variable #85 = random_below(4)
        [ 5131] IF NOT(((random_below(1) != 7) && (var(85) >= 3))): GOTO #5138  (else falls through, rejoins #5138)
        [ 5135] set script variable #85 = random_below(3)
        [ 5138] SWITCH var(85): {0->#5141, 1->#5145, 3->#5149, 4->#5153, 5->#5157, 6->#5161, 7->#5165} else #5169
        [ 5141] store the literal value 19181 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5144] do nothing
        [ 5145] store the literal value 19185 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5148] do nothing
        [ 5149] store the literal value 19196 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5152] do nothing
        [ 5153] store the literal value 19217 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5156] do nothing
        [ 5157] store the literal value 19244 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5160] do nothing
        [ 5161] store the literal value 19275 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5164] do nothing
        [ 5165] store the literal value 19304 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5168] do nothing
        [ 5169] store the literal value 19334 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5172] do nothing
        [ 5173] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5189] store the literal value 19349 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5192] SWITCH 9: {1->#5195, 2->#5201, 3->#5207, 4->#5213, 5->#5219, 6->#5225, 7->#5231, 8->#5237, 9->#5243, 10->#5249, 11->#5255, 12->#5261, 13->#5265, 14->#5269, 512->#5273, 32->#5279, 64->#5285, 128->#5291, 256->#5297} else #5303
        [ 5195] store the literal value 19350 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5198] play sound effect 257
        [ 5200] do nothing
        [ 5201] store the literal value 19377 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5204] play sound effect 257
        [ 5206] do nothing
        [ 5207] store the literal value 19403 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5210] play sound effect 260
        [ 5212] do nothing
        [ 5213] store the literal value 19433 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5216] play sound effect 260
        [ 5218] do nothing
        [ 5219] store the literal value 19457 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5222] play sound effect 260
        [ 5224] do nothing
        [ 5225] store the literal value 19482 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5228] play sound effect 261
        [ 5230] do nothing
        [ 5231] store the literal value 19536 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5234] play sound effect 257
        [ 5236] do nothing
        [ 5237] store the literal value 19560 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5240] play sound effect 261
        [ 5242] do nothing
        [ 5243] store the literal value 19615 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5246] play sound effect 262
        [ 5248] do nothing
        [ 5249] store the literal value 19660 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5252] play sound effect 262
        [ 5254] do nothing
        [ 5255] store the literal value 19711 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5258] play sound effect 259
        [ 5260] do nothing
        [ 5261] store the literal value 19794 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5264] do nothing
        [ 5265] store the literal value 19858 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5268] do nothing
        [ 5269] store the literal value 19912 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5272] do nothing
        [ 5273] store the literal value 19984 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5276] play sound effect 258
        [ 5278] do nothing
        [ 5279] store the literal value 20018 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5282] play sound effect 258
        [ 5284] do nothing
        [ 5285] store the literal value 20057 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5288] play sound effect 258
        [ 5290] do nothing
        [ 5291] store the literal value 20096 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5294] play sound effect 258
        [ 5296] do nothing
        [ 5297] store the literal value 20137 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5300] play sound effect 258
        [ 5302] do nothing
        [ 5303] store the literal value 20177 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5306] do nothing
        [ 5307] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5347] display system/chat message #20216: " þ."
        [ 5349] order unit-slot #12 to move, speed/priority 4, destination-type tag 3, destination arg 2
        [ 5354] set script variable #87 = set_unit_behavior(10, 12)
        [ 5357] set unit-slot #14 = var(87)
        [ 5360] IF NOT(group_condition(14)): GOTO #5369  (else falls through, rejoins #5369)
        [ 5364] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 5369] do nothing
        [ 5370] do nothing
        [ 5371] IF NOT((((var(36) & 7136) == 0) & (var(55) == 0))): GOTO #5744  (else falls through, rejoins #5756)
        [ 5375] set script variable #88 = random_below(100)
        [ 5378] IF NOT(((var(1) == 0) && (var(88) < 4))): GOTO #5645  (else falls through, rejoins #5645)
        [ 5382] set script variable #1 = (var(1) + 1)
        [ 5385] store the literal value 20234 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5388] SWITCH random_below(1): {0->#5391, 1->#5395, 2->#5399, 7->#5403} else #5407
        [ 5391] store the literal value 20235 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5394] do nothing
        [ 5395] store the literal value 20270 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5398] do nothing
        [ 5399] store the literal value 20297 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5402] do nothing
        [ 5403] store the literal value 20336 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5406] do nothing
        [ 5407] store the literal value 20364 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5410] do nothing
        [ 5411] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5421] store the literal value 20417 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5424] set script variable #89 = random_below(4)
        [ 5427] IF NOT(((random_below(1) != 7) && (var(89) >= 3))): GOTO #5434  (else falls through, rejoins #5434)
        [ 5431] set script variable #89 = random_below(3)
        [ 5434] SWITCH var(89): {0->#5437, 1->#5441, 3->#5445, 4->#5449, 5->#5453, 6->#5457, 7->#5461} else #5465
        [ 5437] store the literal value 20418 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5440] do nothing
        [ 5441] store the literal value 20422 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5444] do nothing
        [ 5445] store the literal value 20433 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5448] do nothing
        [ 5449] store the literal value 20454 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5452] do nothing
        [ 5453] store the literal value 20481 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5456] do nothing
        [ 5457] store the literal value 20512 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5460] do nothing
        [ 5461] store the literal value 20541 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5464] do nothing
        [ 5465] store the literal value 20571 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5468] do nothing
        [ 5469] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5485] store the literal value 20586 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5488] SWITCH 7: {1->#5491, 2->#5497, 3->#5503, 4->#5509, 5->#5515, 6->#5521, 7->#5527, 8->#5533, 9->#5539, 10->#5545, 11->#5551, 12->#5557, 13->#5561, 14->#5565, 512->#5569, 32->#5575, 64->#5581, 128->#5587, 256->#5593} else #5599
        [ 5491] store the literal value 20587 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5494] play sound effect 257
        [ 5496] do nothing
        [ 5497] store the literal value 20614 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5500] play sound effect 257
        [ 5502] do nothing
        [ 5503] store the literal value 20640 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5506] play sound effect 260
        [ 5508] do nothing
        [ 5509] store the literal value 20670 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5512] play sound effect 260
        [ 5514] do nothing
        [ 5515] store the literal value 20694 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5518] play sound effect 260
        [ 5520] do nothing
        [ 5521] store the literal value 20719 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5524] play sound effect 261
        [ 5526] do nothing
        [ 5527] store the literal value 20773 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5530] play sound effect 257
        [ 5532] do nothing
        [ 5533] store the literal value 20797 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5536] play sound effect 261
        [ 5538] do nothing
        [ 5539] store the literal value 20852 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5542] play sound effect 262
        [ 5544] do nothing
        [ 5545] store the literal value 20897 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5548] play sound effect 262
        [ 5550] do nothing
        [ 5551] store the literal value 20948 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5554] play sound effect 259
        [ 5556] do nothing
        [ 5557] store the literal value 21031 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5560] do nothing
        [ 5561] store the literal value 21095 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5564] do nothing
        [ 5565] store the literal value 21149 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5568] do nothing
        [ 5569] store the literal value 21221 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5572] play sound effect 258
        [ 5574] do nothing
        [ 5575] store the literal value 21255 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5578] play sound effect 258
        [ 5580] do nothing
        [ 5581] store the literal value 21294 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5584] play sound effect 258
        [ 5586] do nothing
        [ 5587] store the literal value 21333 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5590] play sound effect 258
        [ 5592] do nothing
        [ 5593] store the literal value 21374 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5596] play sound effect 258
        [ 5598] do nothing
        [ 5599] store the literal value 21414 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5602] do nothing
        [ 5603] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5643] display system/chat message #21453: " þ1"
        [ 5645] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#5648, 64->#5666, 128->#5684, 256->#5702} else #5720
        [ 5648] IF NOT(group_condition_ref(2, 12)): GOTO #5656  (else falls through, rejoins #5656)
        [ 5652] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5656] define condition-slot #2 as (variable-ref 2, expression-offset 4112)
        [ 5660] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 5665] do nothing
        [ 5666] IF NOT(group_condition_ref(3, 12)): GOTO #5674  (else falls through, rejoins #5674)
        [ 5670] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5674] define condition-slot #3 as (variable-ref 3, expression-offset 4133)
        [ 5678] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5683] do nothing
        [ 5684] IF NOT(group_condition_ref(4, 12)): GOTO #5692  (else falls through, rejoins #5692)
        [ 5688] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5692] define condition-slot #4 as (variable-ref 4, expression-offset 4154)
        [ 5696] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5701] do nothing
        [ 5702] IF NOT(group_condition_ref(5, 12)): GOTO #5710  (else falls through, rejoins #5710)
        [ 5706] set hex-var #5 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5710] define condition-slot #5 as (variable-ref 5, expression-offset 4175)
        [ 5714] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 5719] do nothing
        [ 5720] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5725] do nothing
        [ 5726] do nothing
        [ 5727] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5737] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #5744  (else falls through, rejoins #5744)
        [ 5741] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 5744] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #5756  (else falls through, rejoins #5756)
        [ 5748] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 5751] order unit-slot #12 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 5756] do nothing
        [ 5757] do nothing
        [ 5758] do nothing
        [ 5759] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 5785] advance unit-slot #12 to the next unit in group #2 after the current one
        [ 5788] GOTO #2639
        [ 5790] set script variable #8 = (var(8) + 1)
        [ 5793] set script variable #10 = 0
        [ 5796] IF NOT((var(8) >= var(9))): GOTO #5803  (else falls through, rejoins #5803)
        [ 5800] set script variable #10 = 1
        [ 5803] do nothing (message no-op)
        [ 5804] (UNKNOWN OPCODE 0x53df) - dead end, not decoded further (other branches continue independently)
        [ 5992] ONCE((timer_expired(3) && (var(5) > 0)), flag[2]): run block below -> #5998
        [ 5996] display system/chat message #21863: "Attack on human installation has commenced. Encountering human infestation. Requisitioning all nearby units from defense pool."
        [ 5998] set script variable #98 = ((var(10) && !any_group_alive(1)) && !group_condition(2))
        [ 6001] set script variable #99 = (!all_group_alive(2) && !group_condition(2))
        [ 6004] ONCE(((((var(98) || var(99)) || any_group_alive(1)) || !all_group_alive(2)) || group_condition(2)), flag[3]): run block below -> #6009
        [ 6008] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6009] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6010] IF NOT(((var(98) > 0) || (var(99) > 0))): GOTO #6021  (else falls through, rejoins #6026)
            [ 6014] play sound effect 35
            [ 6016] display system/chat message #21990: "The base on ÿ"
            [ 6018] set the objective state of unit 1 to 1
            [ 6021] display system/chat message #22199: "Your mission was a failure. The base on ÿ£"
            [ 6023] set the objective state of unit 1 to 2
            [ 6026] advance to the next scenario phase (no effect if already at the last phase)
            [ 6027] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
