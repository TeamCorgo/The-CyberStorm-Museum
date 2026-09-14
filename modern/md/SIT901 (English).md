# SIT901.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=550, phase1=557, phase2=1103, phase3=4901
; 16384 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = 3
[    3] set script variable #6 = 0
[    6] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    7] IF NOT((var(4) == 0)): GOTO #14  (else falls through, rejoins #14)
    [   11] set script variable #4 = (random_below(var(17)) + var(18))
    [   14] set the objective state of unit 1 to 2
    [   17] set script variable #10 = stat(9)
    [   20] do nothing (message no-op)
    [   21] (UNKNOWN OPCODE 0x00b7) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  553] set script variable #12 = 0
        [  556] IF NOT(timer_expired(2)): GOTO #4087  (else falls through, rejoins #4087)
        [  560] arm timer #2 to expire 1 turn(s) from now
        [  563] set script variable #3 = 0
        [  566] IF NOT(group_all_alive(4)): GOTO #570  (else falls through, rejoins #570)
        [  570] set script variable #42 = 0
        [  573] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [  576] WHILE set_unit_behavior(0, 6): loop below; exit -> #865 (500-iteration guard)
        [  579] IF NOT((set_unit_behavior(9, 6) > 0)): GOTO #860  (else falls through, rejoins #860)
        [  583] set script variable #43 = random_below(100)
        [  586] IF NOT(((var(3) == 0) && (var(43) < 4))): GOTO #853  (else falls through, rejoins #853)
        [  590] set script variable #3 = (var(3) + 1)
        [  593] store the literal value 1562 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  596] SWITCH random_below(4): {0->#599, 1->#603, 2->#607, 7->#611} else #615
        [  599] store the literal value 1563 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  602] do nothing
        [  603] store the literal value 1598 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  606] do nothing
        [  607] store the literal value 1625 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  610] do nothing
        [  611] store the literal value 1664 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  614] do nothing
        [  615] store the literal value 1692 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  618] do nothing
        [  619] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  629] store the literal value 1745 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  632] set script variable #44 = random_below(1)
        [  635] IF NOT(((random_below(4) != 7) && (var(44) >= 3))): GOTO #642  (else falls through, rejoins #642)
        [  639] set script variable #44 = random_below(3)
        [  642] SWITCH var(44): {0->#645, 1->#649, 3->#653, 4->#657, 5->#661, 6->#665, 7->#669} else #673
        [  645] store the literal value 1746 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  648] do nothing
        [  649] store the literal value 1750 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  652] do nothing
        [  653] store the literal value 1761 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  656] do nothing
        [  657] store the literal value 1782 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  660] do nothing
        [  661] store the literal value 1809 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  664] do nothing
        [  665] store the literal value 1840 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  668] do nothing
        [  669] store the literal value 1869 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  672] do nothing
        [  673] store the literal value 1899 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  676] do nothing
        [  677] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  693] store the literal value 1914 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  696] SWITCH 10: {1->#699, 2->#705, 3->#711, 4->#717, 5->#723, 6->#729, 7->#735, 8->#741, 9->#747, 10->#753, 11->#759, 12->#765, 13->#769, 14->#773, 512->#777, 32->#783, 64->#789, 128->#795, 256->#801} else #807
        [  699] store the literal value 1915 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  702] play sound effect 257
        [  704] do nothing
        [  705] store the literal value 1942 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  708] play sound effect 257
        [  710] do nothing
        [  711] store the literal value 1968 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  714] play sound effect 260
        [  716] do nothing
        [  717] store the literal value 1998 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  720] play sound effect 260
        [  722] do nothing
        [  723] store the literal value 2022 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  726] play sound effect 260
        [  728] do nothing
        [  729] store the literal value 2047 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  732] play sound effect 261
        [  734] do nothing
        [  735] store the literal value 2101 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  738] play sound effect 257
        [  740] do nothing
        [  741] store the literal value 2125 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  744] play sound effect 261
        [  746] do nothing
        [  747] store the literal value 2180 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  750] play sound effect 262
        [  752] do nothing
        [  753] store the literal value 2225 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  756] play sound effect 262
        [  758] do nothing
        [  759] store the literal value 2276 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  762] play sound effect 259
        [  764] do nothing
        [  765] store the literal value 2359 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  768] do nothing
        [  769] store the literal value 2423 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  772] do nothing
        [  773] store the literal value 2477 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  776] do nothing
        [  777] store the literal value 2549 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  780] play sound effect 258
        [  782] do nothing
        [  783] store the literal value 2583 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  786] play sound effect 258
        [  788] do nothing
        [  789] store the literal value 2622 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  792] play sound effect 258
        [  794] do nothing
        [  795] store the literal value 2661 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  798] play sound effect 258
        [  800] do nothing
        [  801] store the literal value 2702 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  804] play sound effect 258
        [  806] do nothing
        [  807] store the literal value 2742 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  810] do nothing
        [  811] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [  851] display system/chat message #2781: " þ"
        [  853] IF NOT(((set_unit_behavior(8, 6) & var(16)) == 0)): GOTO #860  (else falls through, rejoins #860)
        [  857] set script variable #16 = (var(16) + (set_unit_behavior(8, 6) & 7136))
        [  860] advance unit-slot #6 to the next unit in group #2 after the current one
        [  863] GOTO #579
        [  865] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [  868] WHILE set_unit_behavior(0, 1): loop below; exit -> #899 (500-iteration guard)
        [  871] IF NOT(group_condition_ref_2(7, 2)): GOTO #878  (else falls through, rejoins #885)
        [  875] set attribute #8 of unit-slot #1 to 2
        [  878] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #885  (else falls through, rejoins #885)
        [  882] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [  885] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #894  (else falls through, rejoins #894)
        [  889] set script variable #42 = (var(42) + 1)
        [  892] do nothing (message no-op)
        [  893] (UNKNOWN OPCODE 0x0aef) - dead end, not decoded further (other branches continue independently)
        [  894] advance unit-slot #1 to the next unit in group #1 after the current one
        [  897] GOTO #871
        [  899] IF NOT(group_condition_ref_2(8, 2)): GOTO #906  (else falls through, rejoins #913)
        [  903] set attribute #8 of unit-slot #1 to 2
        [  906] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #913  (else falls through, rejoins #913)
        [  910] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [  913] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #922  (else falls through, rejoins #922)
        [  917] set script variable #42 = (var(42) + 1)
        [  920] do nothing (message no-op)
        [  921] (UNKNOWN OPCODE 0x0b02) - dead end, not decoded further (other branches continue independently)
        [  922] advance unit-slot #1 to the next unit in group #1 after the current one
        [  925] set script variable #46 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [  928] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [  931] WHILE set_unit_behavior(0, 6): loop below; exit -> #4087 (500-iteration guard)
        [  934] IF NOT((set_unit_behavior(5, 6) < 60)): GOTO #943  (else falls through, rejoins #4080)
        [  938] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [  943] SWITCH (set_unit_behavior(8, 6) & 15): {0->#946, 1->#1229, 2->#2062, 3->#2621, 4->#2631, 5->#2676, 10->#2961, 11->#2971, 12->#3369, 13->#3370, 14->#3665, 15->#3666} else #4052
        [  946] IF NOT(((set_unit_behavior(8, 6) & 1024) == 0)): GOTO #1228  (else falls through, rejoins #1228)
        [  950] set script variable #47 = random_below(100)
        [  953] IF NOT(((var(3) == 0) && (var(47) < 40))): GOTO #1220  (else falls through, rejoins #1220)
        [  957] set script variable #3 = (var(3) + 1)
        [  960] store the literal value 2837 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  963] SWITCH random_below(1): {0->#966, 1->#970, 2->#974, 7->#978} else #982
        [  966] store the literal value 2838 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  969] do nothing
        [  970] store the literal value 2873 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  973] do nothing
        [  974] store the literal value 2900 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  977] do nothing
        [  978] store the literal value 2939 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  981] do nothing
        [  982] store the literal value 2967 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [  985] do nothing
        [  986] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  996] store the literal value 3020 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [  999] set script variable #48 = random_below(4)
        [ 1002] IF NOT(((random_below(1) != 7) && (var(48) >= 3))): GOTO #1009  (else falls through, rejoins #1009)
        [ 1006] set script variable #48 = random_below(3)
        [ 1009] SWITCH var(48): {0->#1012, 1->#1016, 3->#1020, 4->#1024, 5->#1028, 6->#1032, 7->#1036} else #1040
        [ 1012] store the literal value 3021 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1015] do nothing
        [ 1016] store the literal value 3025 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1019] do nothing
        [ 1020] store the literal value 3036 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1023] do nothing
        [ 1024] store the literal value 3057 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1027] do nothing
        [ 1028] store the literal value 3084 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1031] do nothing
        [ 1032] store the literal value 3115 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1035] do nothing
        [ 1036] store the literal value 3144 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1039] do nothing
        [ 1040] store the literal value 3174 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1043] do nothing
        [ 1044] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1060] store the literal value 3189 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1063] SWITCH 8: {1->#1066, 2->#1072, 3->#1078, 4->#1084, 5->#1090, 6->#1096, 7->#1102, 8->#1108, 9->#1114, 10->#1120, 11->#1126, 12->#1132, 13->#1136, 14->#1140, 512->#1144, 32->#1150, 64->#1156, 128->#1162, 256->#1168} else #1174
        [ 1066] store the literal value 3190 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1069] play sound effect 257
        [ 1071] do nothing
        [ 1072] store the literal value 3217 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1075] play sound effect 257
        [ 1077] do nothing
        [ 1078] store the literal value 3243 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1081] play sound effect 260
        [ 1083] do nothing
        [ 1084] store the literal value 3273 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1087] play sound effect 260
        [ 1089] do nothing
        [ 1090] store the literal value 3297 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1093] play sound effect 260
        [ 1095] do nothing
        [ 1096] store the literal value 3322 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1099] play sound effect 261
        [ 1101] do nothing
        [ 1102] store the literal value 3376 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1105] play sound effect 257
        [ 1107] do nothing
        [ 1108] store the literal value 3400 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1111] play sound effect 261
        [ 1113] do nothing
        [ 1114] store the literal value 3455 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1117] play sound effect 262
        [ 1119] do nothing
        [ 1120] store the literal value 3500 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1123] play sound effect 262
        [ 1125] do nothing
        [ 1126] store the literal value 3551 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1129] play sound effect 259
        [ 1131] do nothing
        [ 1132] store the literal value 3634 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1135] do nothing
        [ 1136] store the literal value 3698 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1139] do nothing
        [ 1140] store the literal value 3752 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1143] do nothing
        [ 1144] store the literal value 3824 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1147] play sound effect 258
        [ 1149] do nothing
        [ 1150] store the literal value 3858 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1153] play sound effect 258
        [ 1155] do nothing
        [ 1156] store the literal value 3897 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1159] play sound effect 258
        [ 1161] do nothing
        [ 1162] store the literal value 3936 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1165] play sound effect 258
        [ 1167] do nothing
        [ 1168] store the literal value 3977 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1171] play sound effect 258
        [ 1173] do nothing
        [ 1174] store the literal value 4017 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1177] do nothing
        [ 1178] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1218] display system/chat message #4056: " þ"
        [ 1220] order unit-slot #6 to move, speed/priority var(46), destination-type tag 0, destination arg 0
        [ 1225] set attribute #8 of unit-slot #6 to (set_unit_behavior(8, 6) + 1024)
        [ 1228] do nothing
        [ 1229] IF NOT((group_condition_ref_2(9, 1) || (set_unit_behavior(9, 6) != 0))): GOTO #1512  (else falls through, rejoins #2061)
        [ 1233] IF NOT((set_unit_behavior(7, 6) != 6)): GOTO #1512  (else falls through, rejoins #1512)
        [ 1237] set script variable #50 = random_below(100)
        [ 1240] IF NOT(((var(3) == 0) && (var(50) < 40))): GOTO #1507  (else falls through, rejoins #1507)
        [ 1244] set script variable #3 = (var(3) + 1)
        [ 1247] store the literal value 4074 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1250] SWITCH random_below(1): {0->#1253, 1->#1257, 2->#1261, 7->#1265} else #1269
        [ 1253] store the literal value 4075 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1256] do nothing
        [ 1257] store the literal value 4110 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1260] do nothing
        [ 1261] store the literal value 4137 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1264] do nothing
        [ 1265] store the literal value 4176 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1268] do nothing
        [ 1269] store the literal value 4204 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1272] do nothing
        [ 1273] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1283] store the literal value 4257 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1286] set script variable #51 = random_below(4)
        [ 1289] IF NOT(((random_below(1) != 7) && (var(51) >= 3))): GOTO #1296  (else falls through, rejoins #1296)
        [ 1293] set script variable #51 = random_below(3)
        [ 1296] SWITCH var(51): {0->#1299, 1->#1303, 3->#1307, 4->#1311, 5->#1315, 6->#1319, 7->#1323} else #1327
        [ 1299] store the literal value 4258 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1302] do nothing
        [ 1303] store the literal value 4262 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1306] do nothing
        [ 1307] store the literal value 4273 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1310] do nothing
        [ 1311] store the literal value 4294 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1314] do nothing
        [ 1315] store the literal value 4321 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1318] do nothing
        [ 1319] store the literal value 4352 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1322] do nothing
        [ 1323] store the literal value 4381 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1326] do nothing
        [ 1327] store the literal value 4411 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1330] do nothing
        [ 1331] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1347] store the literal value 4426 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1350] SWITCH 3: {1->#1353, 2->#1359, 3->#1365, 4->#1371, 5->#1377, 6->#1383, 7->#1389, 8->#1395, 9->#1401, 10->#1407, 11->#1413, 12->#1419, 13->#1423, 14->#1427, 512->#1431, 32->#1437, 64->#1443, 128->#1449, 256->#1455} else #1461
        [ 1353] store the literal value 4427 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1356] play sound effect 257
        [ 1358] do nothing
        [ 1359] store the literal value 4454 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1362] play sound effect 257
        [ 1364] do nothing
        [ 1365] store the literal value 4480 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1368] play sound effect 260
        [ 1370] do nothing
        [ 1371] store the literal value 4510 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1374] play sound effect 260
        [ 1376] do nothing
        [ 1377] store the literal value 4534 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1380] play sound effect 260
        [ 1382] do nothing
        [ 1383] store the literal value 4559 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1386] play sound effect 261
        [ 1388] do nothing
        [ 1389] store the literal value 4613 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1392] play sound effect 257
        [ 1394] do nothing
        [ 1395] store the literal value 4637 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1398] play sound effect 261
        [ 1400] do nothing
        [ 1401] store the literal value 4692 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1404] play sound effect 262
        [ 1406] do nothing
        [ 1407] store the literal value 4737 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1410] play sound effect 262
        [ 1412] do nothing
        [ 1413] store the literal value 4788 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1416] play sound effect 259
        [ 1418] do nothing
        [ 1419] store the literal value 4871 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1422] do nothing
        [ 1423] store the literal value 4935 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1426] do nothing
        [ 1427] store the literal value 4989 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1430] do nothing
        [ 1431] store the literal value 5061 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1434] play sound effect 258
        [ 1436] do nothing
        [ 1437] store the literal value 5095 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1440] play sound effect 258
        [ 1442] do nothing
        [ 1443] store the literal value 5134 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1446] play sound effect 258
        [ 1448] do nothing
        [ 1449] store the literal value 5173 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1452] play sound effect 258
        [ 1454] do nothing
        [ 1455] store the literal value 5214 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1458] play sound effect 258
        [ 1460] do nothing
        [ 1461] store the literal value 5254 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1464] do nothing
        [ 1465] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1505] display system/chat message #5293: " þ
"
        [ 1507] order unit-slot #6 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 1512] IF NOT((set_unit_behavior(7, 6) != 2)): GOTO #1791  (else falls through, rejoins #2061)
        [ 1516] order unit-slot #6 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 1521] set script variable #53 = random_below(100)
        [ 1524] IF NOT(((var(3) == 0) && (var(53) < 4))): GOTO #1791  (else falls through, rejoins #1791)
        [ 1528] set script variable #3 = (var(3) + 1)
        [ 1531] store the literal value 5311 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1534] SWITCH random_below(1): {0->#1537, 1->#1541, 2->#1545, 7->#1549} else #1553
        [ 1537] store the literal value 5312 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1540] do nothing
        [ 1541] store the literal value 5347 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1544] do nothing
        [ 1545] store the literal value 5374 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1548] do nothing
        [ 1549] store the literal value 5413 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1552] do nothing
        [ 1553] store the literal value 5441 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1556] do nothing
        [ 1557] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1567] store the literal value 5494 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1570] set script variable #54 = random_below(4)
        [ 1573] IF NOT(((random_below(1) != 7) && (var(54) >= 3))): GOTO #1580  (else falls through, rejoins #1580)
        [ 1577] set script variable #54 = random_below(3)
        [ 1580] SWITCH var(54): {0->#1583, 1->#1587, 3->#1591, 4->#1595, 5->#1599, 6->#1603, 7->#1607} else #1611
        [ 1583] store the literal value 5495 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1586] do nothing
        [ 1587] store the literal value 5499 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1590] do nothing
        [ 1591] store the literal value 5510 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1594] do nothing
        [ 1595] store the literal value 5531 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1598] do nothing
        [ 1599] store the literal value 5558 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1602] do nothing
        [ 1603] store the literal value 5589 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1606] do nothing
        [ 1607] store the literal value 5618 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1610] do nothing
        [ 1611] store the literal value 5648 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1614] do nothing
        [ 1615] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1631] store the literal value 5663 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1634] SWITCH 2: {1->#1637, 2->#1643, 3->#1649, 4->#1655, 5->#1661, 6->#1667, 7->#1673, 8->#1679, 9->#1685, 10->#1691, 11->#1697, 12->#1703, 13->#1707, 14->#1711, 512->#1715, 32->#1721, 64->#1727, 128->#1733, 256->#1739} else #1745
        [ 1637] store the literal value 5664 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1640] play sound effect 257
        [ 1642] do nothing
        [ 1643] store the literal value 5691 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1646] play sound effect 257
        [ 1648] do nothing
        [ 1649] store the literal value 5717 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1652] play sound effect 260
        [ 1654] do nothing
        [ 1655] store the literal value 5747 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1658] play sound effect 260
        [ 1660] do nothing
        [ 1661] store the literal value 5771 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1664] play sound effect 260
        [ 1666] do nothing
        [ 1667] store the literal value 5796 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1670] play sound effect 261
        [ 1672] do nothing
        [ 1673] store the literal value 5850 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1676] play sound effect 257
        [ 1678] do nothing
        [ 1679] store the literal value 5874 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1682] play sound effect 261
        [ 1684] do nothing
        [ 1685] store the literal value 5929 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1688] play sound effect 262
        [ 1690] do nothing
        [ 1691] store the literal value 5974 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1694] play sound effect 262
        [ 1696] do nothing
        [ 1697] store the literal value 6025 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1700] play sound effect 259
        [ 1702] do nothing
        [ 1703] store the literal value 6108 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1706] do nothing
        [ 1707] store the literal value 6172 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1710] do nothing
        [ 1711] store the literal value 6226 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1714] do nothing
        [ 1715] store the literal value 6298 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1718] play sound effect 258
        [ 1720] do nothing
        [ 1721] store the literal value 6332 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1724] play sound effect 258
        [ 1726] do nothing
        [ 1727] store the literal value 6371 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1730] play sound effect 258
        [ 1732] do nothing
        [ 1733] store the literal value 6410 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1736] play sound effect 258
        [ 1738] do nothing
        [ 1739] store the literal value 6451 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1742] play sound effect 258
        [ 1744] do nothing
        [ 1745] store the literal value 6491 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1748] do nothing
        [ 1749] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1789] display system/chat message #6530: " þ"
        [ 1791] set script variable #56 = random_below(100)
        [ 1794] IF NOT(((var(3) == 0) && (var(56) < 4))): GOTO #2061  (else falls through, rejoins #2061)
        [ 1798] set script variable #3 = (var(3) + 1)
        [ 1801] store the literal value 6548 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1804] SWITCH random_below(1): {0->#1807, 1->#1811, 2->#1815, 7->#1819} else #1823
        [ 1807] store the literal value 6549 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1810] do nothing
        [ 1811] store the literal value 6584 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1814] do nothing
        [ 1815] store the literal value 6611 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1818] do nothing
        [ 1819] store the literal value 6650 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1822] do nothing
        [ 1823] store the literal value 6678 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1826] do nothing
        [ 1827] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1837] store the literal value 6731 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1840] set script variable #57 = random_below(4)
        [ 1843] IF NOT(((random_below(1) != 7) && (var(57) >= 3))): GOTO #1850  (else falls through, rejoins #1850)
        [ 1847] set script variable #57 = random_below(3)
        [ 1850] SWITCH var(57): {0->#1853, 1->#1857, 3->#1861, 4->#1865, 5->#1869, 6->#1873, 7->#1877} else #1881
        [ 1853] store the literal value 6732 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1856] do nothing
        [ 1857] store the literal value 6736 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1860] do nothing
        [ 1861] store the literal value 6747 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1864] do nothing
        [ 1865] store the literal value 6768 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1868] do nothing
        [ 1869] store the literal value 6795 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1872] do nothing
        [ 1873] store the literal value 6826 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1876] do nothing
        [ 1877] store the literal value 6855 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1880] do nothing
        [ 1881] store the literal value 6885 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1884] do nothing
        [ 1885] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1901] store the literal value 6900 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1904] SWITCH 1: {1->#1907, 2->#1913, 3->#1919, 4->#1925, 5->#1931, 6->#1937, 7->#1943, 8->#1949, 9->#1955, 10->#1961, 11->#1967, 12->#1973, 13->#1977, 14->#1981, 512->#1985, 32->#1991, 64->#1997, 128->#2003, 256->#2009} else #2015
        [ 1907] store the literal value 6901 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1910] play sound effect 257
        [ 1912] do nothing
        [ 1913] store the literal value 6928 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1916] play sound effect 257
        [ 1918] do nothing
        [ 1919] store the literal value 6954 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1922] play sound effect 260
        [ 1924] do nothing
        [ 1925] store the literal value 6984 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1928] play sound effect 260
        [ 1930] do nothing
        [ 1931] store the literal value 7008 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1934] play sound effect 260
        [ 1936] do nothing
        [ 1937] store the literal value 7033 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1940] play sound effect 261
        [ 1942] do nothing
        [ 1943] store the literal value 7087 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1946] play sound effect 257
        [ 1948] do nothing
        [ 1949] store the literal value 7111 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1952] play sound effect 261
        [ 1954] do nothing
        [ 1955] store the literal value 7166 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1958] play sound effect 262
        [ 1960] do nothing
        [ 1961] store the literal value 7211 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1964] play sound effect 262
        [ 1966] do nothing
        [ 1967] store the literal value 7262 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1970] play sound effect 259
        [ 1972] do nothing
        [ 1973] store the literal value 7345 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1976] do nothing
        [ 1977] store the literal value 7409 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1980] do nothing
        [ 1981] store the literal value 7463 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1984] do nothing
        [ 1985] store the literal value 7535 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1988] play sound effect 258
        [ 1990] do nothing
        [ 1991] store the literal value 7569 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1994] play sound effect 258
        [ 1996] do nothing
        [ 1997] store the literal value 7608 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2000] play sound effect 258
        [ 2002] do nothing
        [ 2003] store the literal value 7647 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2006] play sound effect 258
        [ 2008] do nothing
        [ 2009] store the literal value 7688 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2012] play sound effect 258
        [ 2014] do nothing
        [ 2015] store the literal value 7728 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2018] do nothing
        [ 2019] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2059] display system/chat message #7767: " þ"
        [ 2061] do nothing
        [ 2062] IF NOT(((var(16) & 512) > 0)): GOTO #2341  (else falls through, rejoins #2620)
        [ 2066] set script variable #59 = random_below(100)
        [ 2069] IF NOT(((var(3) == 0) && (var(59) < 4))): GOTO #2336  (else falls through, rejoins #2336)
        [ 2073] set script variable #3 = (var(3) + 1)
        [ 2076] store the literal value 7785 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2079] SWITCH random_below(1): {0->#2082, 1->#2086, 2->#2090, 7->#2094} else #2098
        [ 2082] store the literal value 7786 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2085] do nothing
        [ 2086] store the literal value 7821 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2089] do nothing
        [ 2090] store the literal value 7848 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2093] do nothing
        [ 2094] store the literal value 7887 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2097] do nothing
        [ 2098] store the literal value 7915 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2101] do nothing
        [ 2102] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2112] store the literal value 7968 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2115] set script variable #60 = random_below(4)
        [ 2118] IF NOT(((random_below(1) != 7) && (var(60) >= 3))): GOTO #2125  (else falls through, rejoins #2125)
        [ 2122] set script variable #60 = random_below(3)
        [ 2125] SWITCH var(60): {0->#2128, 1->#2132, 3->#2136, 4->#2140, 5->#2144, 6->#2148, 7->#2152} else #2156
        [ 2128] store the literal value 7969 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2131] do nothing
        [ 2132] store the literal value 7973 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2135] do nothing
        [ 2136] store the literal value 7984 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2139] do nothing
        [ 2140] store the literal value 8005 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2143] do nothing
        [ 2144] store the literal value 8032 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2147] do nothing
        [ 2148] store the literal value 8063 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2151] do nothing
        [ 2152] store the literal value 8092 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2155] do nothing
        [ 2156] store the literal value 8122 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2159] do nothing
        [ 2160] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2176] store the literal value 8137 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2179] SWITCH 4: {1->#2182, 2->#2188, 3->#2194, 4->#2200, 5->#2206, 6->#2212, 7->#2218, 8->#2224, 9->#2230, 10->#2236, 11->#2242, 12->#2248, 13->#2252, 14->#2256, 512->#2260, 32->#2266, 64->#2272, 128->#2278, 256->#2284} else #2290
        [ 2182] store the literal value 8138 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2185] play sound effect 257
        [ 2187] do nothing
        [ 2188] store the literal value 8165 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2191] play sound effect 257
        [ 2193] do nothing
        [ 2194] store the literal value 8191 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2197] play sound effect 260
        [ 2199] do nothing
        [ 2200] store the literal value 8221 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2203] play sound effect 260
        [ 2205] do nothing
        [ 2206] store the literal value 8245 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2209] play sound effect 260
        [ 2211] do nothing
        [ 2212] store the literal value 8270 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2215] play sound effect 261
        [ 2217] do nothing
        [ 2218] store the literal value 8324 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2221] play sound effect 257
        [ 2223] do nothing
        [ 2224] store the literal value 8348 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2227] play sound effect 261
        [ 2229] do nothing
        [ 2230] store the literal value 8403 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2233] play sound effect 262
        [ 2235] do nothing
        [ 2236] store the literal value 8448 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2239] play sound effect 262
        [ 2241] do nothing
        [ 2242] store the literal value 8499 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2245] play sound effect 259
        [ 2247] do nothing
        [ 2248] store the literal value 8582 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2251] do nothing
        [ 2252] store the literal value 8646 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2255] do nothing
        [ 2256] store the literal value 8700 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2259] do nothing
        [ 2260] store the literal value 8772 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2263] play sound effect 258
        [ 2265] do nothing
        [ 2266] store the literal value 8806 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2269] play sound effect 258
        [ 2271] do nothing
        [ 2272] store the literal value 8845 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2275] play sound effect 258
        [ 2277] do nothing
        [ 2278] store the literal value 8884 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2281] play sound effect 258
        [ 2283] do nothing
        [ 2284] store the literal value 8925 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2287] play sound effect 258
        [ 2289] do nothing
        [ 2290] store the literal value 8965 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2293] do nothing
        [ 2294] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2334] display system/chat message #9004: " þ"
        [ 2336] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2341] IF NOT(((var(16) & 128) > 0)): GOTO #2620  (else falls through, rejoins #2620)
        [ 2345] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 2350] set script variable #62 = random_below(100)
        [ 2353] IF NOT(((var(3) == 0) && (var(62) < 4))): GOTO #2620  (else falls through, rejoins #2620)
        [ 2357] set script variable #3 = (var(3) + 1)
        [ 2360] store the literal value 9022 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2363] SWITCH random_below(1): {0->#2366, 1->#2370, 2->#2374, 7->#2378} else #2382
        [ 2366] store the literal value 9023 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2369] do nothing
        [ 2370] store the literal value 9058 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2373] do nothing
        [ 2374] store the literal value 9085 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2377] do nothing
        [ 2378] store the literal value 9124 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2381] do nothing
        [ 2382] store the literal value 9152 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2385] do nothing
        [ 2386] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2396] store the literal value 9205 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2399] set script variable #63 = random_below(4)
        [ 2402] IF NOT(((random_below(1) != 7) && (var(63) >= 3))): GOTO #2409  (else falls through, rejoins #2409)
        [ 2406] set script variable #63 = random_below(3)
        [ 2409] SWITCH var(63): {0->#2412, 1->#2416, 3->#2420, 4->#2424, 5->#2428, 6->#2432, 7->#2436} else #2440
        [ 2412] store the literal value 9206 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2415] do nothing
        [ 2416] store the literal value 9210 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2419] do nothing
        [ 2420] store the literal value 9221 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2423] do nothing
        [ 2424] store the literal value 9242 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2427] do nothing
        [ 2428] store the literal value 9269 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2431] do nothing
        [ 2432] store the literal value 9300 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2435] do nothing
        [ 2436] store the literal value 9329 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2439] do nothing
        [ 2440] store the literal value 9359 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2443] do nothing
        [ 2444] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2460] store the literal value 9374 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2463] SWITCH 5: {1->#2466, 2->#2472, 3->#2478, 4->#2484, 5->#2490, 6->#2496, 7->#2502, 8->#2508, 9->#2514, 10->#2520, 11->#2526, 12->#2532, 13->#2536, 14->#2540, 512->#2544, 32->#2550, 64->#2556, 128->#2562, 256->#2568} else #2574
        [ 2466] store the literal value 9375 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2469] play sound effect 257
        [ 2471] do nothing
        [ 2472] store the literal value 9402 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2475] play sound effect 257
        [ 2477] do nothing
        [ 2478] store the literal value 9428 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2481] play sound effect 260
        [ 2483] do nothing
        [ 2484] store the literal value 9458 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2487] play sound effect 260
        [ 2489] do nothing
        [ 2490] store the literal value 9482 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2493] play sound effect 260
        [ 2495] do nothing
        [ 2496] store the literal value 9507 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2499] play sound effect 261
        [ 2501] do nothing
        [ 2502] store the literal value 9561 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2505] play sound effect 257
        [ 2507] do nothing
        [ 2508] store the literal value 9585 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2511] play sound effect 261
        [ 2513] do nothing
        [ 2514] store the literal value 9640 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2517] play sound effect 262
        [ 2519] do nothing
        [ 2520] store the literal value 9685 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2523] play sound effect 262
        [ 2525] do nothing
        [ 2526] store the literal value 9736 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2529] play sound effect 259
        [ 2531] do nothing
        [ 2532] store the literal value 9819 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2535] do nothing
        [ 2536] store the literal value 9883 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2539] do nothing
        [ 2540] store the literal value 9937 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2543] do nothing
        [ 2544] store the literal value 10009 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2547] play sound effect 258
        [ 2549] do nothing
        [ 2550] store the literal value 10043 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2553] play sound effect 258
        [ 2555] do nothing
        [ 2556] store the literal value 10082 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2559] play sound effect 258
        [ 2561] do nothing
        [ 2562] store the literal value 10121 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2565] play sound effect 258
        [ 2567] do nothing
        [ 2568] store the literal value 10162 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2571] play sound effect 258
        [ 2573] do nothing
        [ 2574] store the literal value 10202 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2577] do nothing
        [ 2578] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2618] display system/chat message #10241: " þ"
        [ 2620] do nothing
        [ 2621] IF NOT(((var(16) & 512) > 0)): GOTO #2630  (else falls through, rejoins #2630)
        [ 2625] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2630] do nothing
        [ 2631] SWITCH (set_unit_behavior(8, 6) & 7136): {32->#2634, 64->#2640, 128->#2646, 256->#2652} else #2658
        [ 2634] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 2639] do nothing
        [ 2640] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 2645] do nothing
        [ 2646] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 2651] do nothing
        [ 2652] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 2657] do nothing
        [ 2658] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2663] do nothing
        [ 2664] do nothing
        [ 2665] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2675] do nothing
        [ 2676] IF NOT((var(42) > 0)): GOTO #2955  (else falls through, rejoins #2960)
        [ 2680] order unit-slot #6 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 2685] set script variable #65 = random_below(100)
        [ 2688] IF NOT(((var(3) == 0) && (var(65) < 4))): GOTO #2955  (else falls through, rejoins #2955)
        [ 2692] set script variable #3 = (var(3) + 1)
        [ 2695] store the literal value 10259 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2698] SWITCH random_below(1): {0->#2701, 1->#2705, 2->#2709, 7->#2713} else #2717
        [ 2701] store the literal value 10260 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2704] do nothing
        [ 2705] store the literal value 10295 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2708] do nothing
        [ 2709] store the literal value 10322 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2712] do nothing
        [ 2713] store the literal value 10361 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2716] do nothing
        [ 2717] store the literal value 10389 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2720] do nothing
        [ 2721] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2731] store the literal value 10442 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2734] set script variable #66 = random_below(4)
        [ 2737] IF NOT(((random_below(1) != 7) && (var(66) >= 3))): GOTO #2744  (else falls through, rejoins #2744)
        [ 2741] set script variable #66 = random_below(3)
        [ 2744] SWITCH var(66): {0->#2747, 1->#2751, 3->#2755, 4->#2759, 5->#2763, 6->#2767, 7->#2771} else #2775
        [ 2747] store the literal value 10443 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2750] do nothing
        [ 2751] store the literal value 10447 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2754] do nothing
        [ 2755] store the literal value 10458 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2758] do nothing
        [ 2759] store the literal value 10479 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2762] do nothing
        [ 2763] store the literal value 10506 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2766] do nothing
        [ 2767] store the literal value 10537 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2770] do nothing
        [ 2771] store the literal value 10566 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2774] do nothing
        [ 2775] store the literal value 10596 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2778] do nothing
        [ 2779] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2795] store the literal value 10611 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2798] SWITCH 6: {1->#2801, 2->#2807, 3->#2813, 4->#2819, 5->#2825, 6->#2831, 7->#2837, 8->#2843, 9->#2849, 10->#2855, 11->#2861, 12->#2867, 13->#2871, 14->#2875, 512->#2879, 32->#2885, 64->#2891, 128->#2897, 256->#2903} else #2909
        [ 2801] store the literal value 10612 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2804] play sound effect 257
        [ 2806] do nothing
        [ 2807] store the literal value 10639 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2810] play sound effect 257
        [ 2812] do nothing
        [ 2813] store the literal value 10665 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2816] play sound effect 260
        [ 2818] do nothing
        [ 2819] store the literal value 10695 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2822] play sound effect 260
        [ 2824] do nothing
        [ 2825] store the literal value 10719 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2828] play sound effect 260
        [ 2830] do nothing
        [ 2831] store the literal value 10744 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2834] play sound effect 261
        [ 2836] do nothing
        [ 2837] store the literal value 10798 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2840] play sound effect 257
        [ 2842] do nothing
        [ 2843] store the literal value 10822 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2846] play sound effect 261
        [ 2848] do nothing
        [ 2849] store the literal value 10877 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2852] play sound effect 262
        [ 2854] do nothing
        [ 2855] store the literal value 10922 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2858] play sound effect 262
        [ 2860] do nothing
        [ 2861] store the literal value 10973 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2864] play sound effect 259
        [ 2866] do nothing
        [ 2867] store the literal value 11056 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2870] do nothing
        [ 2871] store the literal value 11120 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2874] do nothing
        [ 2875] store the literal value 11174 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2878] do nothing
        [ 2879] store the literal value 11246 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2882] play sound effect 258
        [ 2884] do nothing
        [ 2885] store the literal value 11280 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2888] play sound effect 258
        [ 2890] do nothing
        [ 2891] store the literal value 11319 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2894] play sound effect 258
        [ 2896] do nothing
        [ 2897] store the literal value 11358 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2900] play sound effect 258
        [ 2902] do nothing
        [ 2903] store the literal value 11399 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2906] play sound effect 258
        [ 2908] do nothing
        [ 2909] store the literal value 11439 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2912] do nothing
        [ 2913] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2953] display system/chat message #11478: " þ"
        [ 2955] order unit-slot #6 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 2960] do nothing
        [ 2961] IF NOT((set_unit_behavior(7, 6) != 3)): GOTO #2970  (else falls through, rejoins #2970)
        [ 2965] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2970] do nothing
        [ 2971] IF NOT((((var(16) & 7136) == 0) && (var(42) == 0))): GOTO #3344  (else falls through, rejoins #3368)
        [ 2975] set script variable #68 = random_below(100)
        [ 2978] IF NOT(((var(3) == 0) && (var(68) < 4))): GOTO #3245  (else falls through, rejoins #3245)
        [ 2982] set script variable #3 = (var(3) + 1)
        [ 2985] store the literal value 11496 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2988] SWITCH random_below(1): {0->#2991, 1->#2995, 2->#2999, 7->#3003} else #3007
        [ 2991] store the literal value 11497 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2994] do nothing
        [ 2995] store the literal value 11532 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2998] do nothing
        [ 2999] store the literal value 11559 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3002] do nothing
        [ 3003] store the literal value 11598 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3006] do nothing
        [ 3007] store the literal value 11626 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3010] do nothing
        [ 3011] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3021] store the literal value 11679 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3024] set script variable #69 = random_below(4)
        [ 3027] IF NOT(((random_below(1) != 7) && (var(69) >= 3))): GOTO #3034  (else falls through, rejoins #3034)
        [ 3031] set script variable #69 = random_below(3)
        [ 3034] SWITCH var(69): {0->#3037, 1->#3041, 3->#3045, 4->#3049, 5->#3053, 6->#3057, 7->#3061} else #3065
        [ 3037] store the literal value 11680 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3040] do nothing
        [ 3041] store the literal value 11684 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3044] do nothing
        [ 3045] store the literal value 11695 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3048] do nothing
        [ 3049] store the literal value 11716 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3052] do nothing
        [ 3053] store the literal value 11743 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3056] do nothing
        [ 3057] store the literal value 11774 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3060] do nothing
        [ 3061] store the literal value 11803 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3064] do nothing
        [ 3065] store the literal value 11833 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3068] do nothing
        [ 3069] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3085] store the literal value 11848 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3088] SWITCH 7: {1->#3091, 2->#3097, 3->#3103, 4->#3109, 5->#3115, 6->#3121, 7->#3127, 8->#3133, 9->#3139, 10->#3145, 11->#3151, 12->#3157, 13->#3161, 14->#3165, 512->#3169, 32->#3175, 64->#3181, 128->#3187, 256->#3193} else #3199
        [ 3091] store the literal value 11849 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3094] play sound effect 257
        [ 3096] do nothing
        [ 3097] store the literal value 11876 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3100] play sound effect 257
        [ 3102] do nothing
        [ 3103] store the literal value 11902 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3106] play sound effect 260
        [ 3108] do nothing
        [ 3109] store the literal value 11932 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3112] play sound effect 260
        [ 3114] do nothing
        [ 3115] store the literal value 11956 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3118] play sound effect 260
        [ 3120] do nothing
        [ 3121] store the literal value 11981 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3124] play sound effect 261
        [ 3126] do nothing
        [ 3127] store the literal value 12035 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3130] play sound effect 257
        [ 3132] do nothing
        [ 3133] store the literal value 12059 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3136] play sound effect 261
        [ 3138] do nothing
        [ 3139] store the literal value 12114 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3142] play sound effect 262
        [ 3144] do nothing
        [ 3145] store the literal value 12159 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3148] play sound effect 262
        [ 3150] do nothing
        [ 3151] store the literal value 12210 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3154] play sound effect 259
        [ 3156] do nothing
        [ 3157] store the literal value 12293 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3160] do nothing
        [ 3161] store the literal value 12357 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3164] do nothing
        [ 3165] store the literal value 12411 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3168] do nothing
        [ 3169] store the literal value 12483 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3172] play sound effect 258
        [ 3174] do nothing
        [ 3175] store the literal value 12517 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3178] play sound effect 258
        [ 3180] do nothing
        [ 3181] store the literal value 12556 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3184] play sound effect 258
        [ 3186] do nothing
        [ 3187] store the literal value 12595 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3190] play sound effect 258
        [ 3192] do nothing
        [ 3193] store the literal value 12636 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3196] play sound effect 258
        [ 3198] do nothing
        [ 3199] store the literal value 12676 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3202] do nothing
        [ 3203] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3243] display system/chat message #12715: " þ"
        [ 3245] SWITCH (set_unit_behavior(8, 6) & 7136): {32->#3248, 64->#3266, 128->#3284, 256->#3302} else #3320
        [ 3248] IF NOT(group_condition_ref(1, 6)): GOTO #3256  (else falls through, rejoins #3256)
        [ 3252] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3256] define condition-slot #1 as (variable-ref 1, expression-offset 2393)
        [ 3260] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 3265] do nothing
        [ 3266] IF NOT(group_condition_ref(2, 6)): GOTO #3274  (else falls through, rejoins #3274)
        [ 3270] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3274] define condition-slot #2 as (variable-ref 2, expression-offset 2414)
        [ 3278] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 3283] do nothing
        [ 3284] IF NOT(group_condition_ref(3, 6)): GOTO #3292  (else falls through, rejoins #3292)
        [ 3288] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3292] define condition-slot #3 as (variable-ref 3, expression-offset 2435)
        [ 3296] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 3301] do nothing
        [ 3302] IF NOT(group_condition_ref(4, 6)): GOTO #3310  (else falls through, rejoins #3310)
        [ 3306] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3310] define condition-slot #4 as (variable-ref 4, expression-offset 2456)
        [ 3314] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 3319] do nothing
        [ 3320] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 3325] do nothing
        [ 3326] do nothing
        [ 3327] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3337] IF NOT(((set_unit_behavior(8, 6) & 1024) > 0)): GOTO #3344  (else falls through, rejoins #3344)
        [ 3341] set attribute #8 of unit-slot #6 to (set_unit_behavior(8, 6) - 1024)
        [ 3344] IF NOT(((set_unit_behavior(8, 6) & 1024) == 0)): GOTO #3359  (else falls through, rejoins #3368)
        [ 3348] arm timer #1 to expire 2 turn(s) from now
        [ 3351] set attribute #8 of unit-slot #6 to (set_unit_behavior(8, 6) + 1024)
        [ 3354] order unit-slot #6 to move, speed/priority var(46), destination-type tag 0, destination arg 0
        [ 3359] IF NOT(timer_expired(1)): GOTO #3368  (else falls through, rejoins #3368)
        [ 3363] order unit-slot #6 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3368] do nothing
        [ 3369] do nothing
        [ 3370] IF NOT((set_unit_behavior(7, 6) != 4)): GOTO #3649  (else falls through, rejoins #3664)
        [ 3374] set script variable #71 = random_below(100)
        [ 3377] IF NOT(((var(3) == 0) && (var(71) < 4))): GOTO #3644  (else falls through, rejoins #3644)
        [ 3381] set script variable #3 = (var(3) + 1)
        [ 3384] store the literal value 12733 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3387] SWITCH random_below(1): {0->#3390, 1->#3394, 2->#3398, 7->#3402} else #3406
        [ 3390] store the literal value 12734 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3393] do nothing
        [ 3394] store the literal value 12769 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3397] do nothing
        [ 3398] store the literal value 12796 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3401] do nothing
        [ 3402] store the literal value 12835 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3405] do nothing
        [ 3406] store the literal value 12863 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3409] do nothing
        [ 3410] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3420] store the literal value 12916 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3423] set script variable #72 = random_below(4)
        [ 3426] IF NOT(((random_below(1) != 7) && (var(72) >= 3))): GOTO #3433  (else falls through, rejoins #3433)
        [ 3430] set script variable #72 = random_below(3)
        [ 3433] SWITCH var(72): {0->#3436, 1->#3440, 3->#3444, 4->#3448, 5->#3452, 6->#3456, 7->#3460} else #3464
        [ 3436] store the literal value 12917 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3439] do nothing
        [ 3440] store the literal value 12921 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3443] do nothing
        [ 3444] store the literal value 12932 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3447] do nothing
        [ 3448] store the literal value 12953 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3451] do nothing
        [ 3452] store the literal value 12980 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3455] do nothing
        [ 3456] store the literal value 13011 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3459] do nothing
        [ 3460] store the literal value 13040 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3463] do nothing
        [ 3464] store the literal value 13070 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3467] do nothing
        [ 3468] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3484] store the literal value 13085 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3487] SWITCH 9: {1->#3490, 2->#3496, 3->#3502, 4->#3508, 5->#3514, 6->#3520, 7->#3526, 8->#3532, 9->#3538, 10->#3544, 11->#3550, 12->#3556, 13->#3560, 14->#3564, 512->#3568, 32->#3574, 64->#3580, 128->#3586, 256->#3592} else #3598
        [ 3490] store the literal value 13086 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3493] play sound effect 257
        [ 3495] do nothing
        [ 3496] store the literal value 13113 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3499] play sound effect 257
        [ 3501] do nothing
        [ 3502] store the literal value 13139 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3505] play sound effect 260
        [ 3507] do nothing
        [ 3508] store the literal value 13169 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3511] play sound effect 260
        [ 3513] do nothing
        [ 3514] store the literal value 13193 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3517] play sound effect 260
        [ 3519] do nothing
        [ 3520] store the literal value 13218 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3523] play sound effect 261
        [ 3525] do nothing
        [ 3526] store the literal value 13272 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3529] play sound effect 257
        [ 3531] do nothing
        [ 3532] store the literal value 13296 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3535] play sound effect 261
        [ 3537] do nothing
        [ 3538] store the literal value 13351 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3541] play sound effect 262
        [ 3543] do nothing
        [ 3544] store the literal value 13396 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3547] play sound effect 262
        [ 3549] do nothing
        [ 3550] store the literal value 13447 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3553] play sound effect 259
        [ 3555] do nothing
        [ 3556] store the literal value 13530 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3559] do nothing
        [ 3560] store the literal value 13594 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3563] do nothing
        [ 3564] store the literal value 13648 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3567] do nothing
        [ 3568] store the literal value 13720 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3571] play sound effect 258
        [ 3573] do nothing
        [ 3574] store the literal value 13754 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3577] play sound effect 258
        [ 3579] do nothing
        [ 3580] store the literal value 13793 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3583] play sound effect 258
        [ 3585] do nothing
        [ 3586] store the literal value 13832 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3589] play sound effect 258
        [ 3591] do nothing
        [ 3592] store the literal value 13873 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3595] play sound effect 258
        [ 3597] do nothing
        [ 3598] store the literal value 13913 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3601] do nothing
        [ 3602] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3642] display system/chat message #13952: " þ"
        [ 3644] order unit-slot #6 to move, speed/priority 4, destination-type tag 3, destination arg 7
        [ 3649] set script variable #74 = set_unit_behavior(10, 6)
        [ 3652] set unit-slot #8 = var(74)
        [ 3655] IF NOT(group_condition(8)): GOTO #3664  (else falls through, rejoins #3664)
        [ 3659] order unit-slot #6 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3664] do nothing
        [ 3665] do nothing
        [ 3666] IF NOT((((var(16) & 7136) == 0) & (var(42) == 0))): GOTO #4039  (else falls through, rejoins #4051)
        [ 3670] set script variable #75 = random_below(100)
        [ 3673] IF NOT(((var(3) == 0) && (var(75) < 4))): GOTO #3940  (else falls through, rejoins #3940)
        [ 3677] set script variable #3 = (var(3) + 1)
        [ 3680] store the literal value 13970 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3683] SWITCH random_below(1): {0->#3686, 1->#3690, 2->#3694, 7->#3698} else #3702
        [ 3686] store the literal value 13971 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3689] do nothing
        [ 3690] store the literal value 14006 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3693] do nothing
        [ 3694] store the literal value 14033 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3697] do nothing
        [ 3698] store the literal value 14072 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3701] do nothing
        [ 3702] store the literal value 14100 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3705] do nothing
        [ 3706] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3716] store the literal value 14153 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3719] set script variable #76 = random_below(4)
        [ 3722] IF NOT(((random_below(1) != 7) && (var(76) >= 3))): GOTO #3729  (else falls through, rejoins #3729)
        [ 3726] set script variable #76 = random_below(3)
        [ 3729] SWITCH var(76): {0->#3732, 1->#3736, 3->#3740, 4->#3744, 5->#3748, 6->#3752, 7->#3756} else #3760
        [ 3732] store the literal value 14154 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3735] do nothing
        [ 3736] store the literal value 14158 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3739] do nothing
        [ 3740] store the literal value 14169 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3743] do nothing
        [ 3744] store the literal value 14190 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3747] do nothing
        [ 3748] store the literal value 14217 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3751] do nothing
        [ 3752] store the literal value 14248 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3755] do nothing
        [ 3756] store the literal value 14277 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3759] do nothing
        [ 3760] store the literal value 14307 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3763] do nothing
        [ 3764] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3780] store the literal value 14322 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3783] SWITCH 7: {1->#3786, 2->#3792, 3->#3798, 4->#3804, 5->#3810, 6->#3816, 7->#3822, 8->#3828, 9->#3834, 10->#3840, 11->#3846, 12->#3852, 13->#3856, 14->#3860, 512->#3864, 32->#3870, 64->#3876, 128->#3882, 256->#3888} else #3894
        [ 3786] store the literal value 14323 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3789] play sound effect 257
        [ 3791] do nothing
        [ 3792] store the literal value 14350 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3795] play sound effect 257
        [ 3797] do nothing
        [ 3798] store the literal value 14376 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3801] play sound effect 260
        [ 3803] do nothing
        [ 3804] store the literal value 14406 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3807] play sound effect 260
        [ 3809] do nothing
        [ 3810] store the literal value 14430 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3813] play sound effect 260
        [ 3815] do nothing
        [ 3816] store the literal value 14455 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3819] play sound effect 261
        [ 3821] do nothing
        [ 3822] store the literal value 14509 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3825] play sound effect 257
        [ 3827] do nothing
        [ 3828] store the literal value 14533 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3831] play sound effect 261
        [ 3833] do nothing
        [ 3834] store the literal value 14588 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3837] play sound effect 262
        [ 3839] do nothing
        [ 3840] store the literal value 14633 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3843] play sound effect 262
        [ 3845] do nothing
        [ 3846] store the literal value 14684 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3849] play sound effect 259
        [ 3851] do nothing
        [ 3852] store the literal value 14767 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3855] do nothing
        [ 3856] store the literal value 14831 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3859] do nothing
        [ 3860] store the literal value 14885 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3863] do nothing
        [ 3864] store the literal value 14957 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3867] play sound effect 258
        [ 3869] do nothing
        [ 3870] store the literal value 14991 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3873] play sound effect 258
        [ 3875] do nothing
        [ 3876] store the literal value 15030 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3879] play sound effect 258
        [ 3881] do nothing
        [ 3882] store the literal value 15069 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3885] play sound effect 258
        [ 3887] do nothing
        [ 3888] store the literal value 15110 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3891] play sound effect 258
        [ 3893] do nothing
        [ 3894] store the literal value 15150 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3897] do nothing
        [ 3898] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3938] display system/chat message #15189: " þ""
        [ 3940] SWITCH (set_unit_behavior(8, 6) & 7136): {32->#3943, 64->#3961, 128->#3979, 256->#3997} else #4015
        [ 3943] IF NOT(group_condition_ref(1, 6)): GOTO #3951  (else falls through, rejoins #3951)
        [ 3947] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3951] define condition-slot #1 as (variable-ref 1, expression-offset 2889)
        [ 3955] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 3960] do nothing
        [ 3961] IF NOT(group_condition_ref(2, 6)): GOTO #3969  (else falls through, rejoins #3969)
        [ 3965] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3969] define condition-slot #2 as (variable-ref 2, expression-offset 2910)
        [ 3973] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 3978] do nothing
        [ 3979] IF NOT(group_condition_ref(3, 6)): GOTO #3987  (else falls through, rejoins #3987)
        [ 3983] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3987] define condition-slot #3 as (variable-ref 3, expression-offset 2931)
        [ 3991] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 3996] do nothing
        [ 3997] IF NOT(group_condition_ref(4, 6)): GOTO #4005  (else falls through, rejoins #4005)
        [ 4001] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4005] define condition-slot #4 as (variable-ref 4, expression-offset 2952)
        [ 4009] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 4014] do nothing
        [ 4015] order unit-slot #6 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 4020] do nothing
        [ 4021] do nothing
        [ 4022] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4032] IF NOT(((set_unit_behavior(8, 6) & 1024) > 0)): GOTO #4039  (else falls through, rejoins #4039)
        [ 4036] set attribute #8 of unit-slot #6 to (set_unit_behavior(8, 6) - 1024)
        [ 4039] IF NOT(((set_unit_behavior(8, 6) & 1024) == 0)): GOTO #4051  (else falls through, rejoins #4051)
        [ 4043] set attribute #8 of unit-slot #6 to (set_unit_behavior(8, 6) + 1024)
        [ 4046] order unit-slot #6 to move, speed/priority var(46), destination-type tag 0, destination arg 0
        [ 4051] do nothing
        [ 4052] do nothing
        [ 4053] do nothing
        [ 4054] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 4080] do nothing (message no-op)
        [ 4081] (UNKNOWN OPCODE 0x3b67) - dead end, not decoded further (other branches continue independently)
        [ 4087] IF NOT(((!all_group_alive(2) && !var(6)) && stat(0))): GOTO #4096  (else falls through, rejoins #4096)
        [ 4091] display system/chat message #15238: "Cybrid threat eliminated.
"
        [ 4093] set script variable #6 = 1
        [ 4096] set script variable #78 = 0
        [ 4099] set script variable #79 = 0
        [ 4102] set script variable #80 = 0
        [ 4105] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 4108] WHILE set_unit_behavior(0, 1): loop below; exit -> #4180 (500-iteration guard)
        [ 4111] set script variable #81 = set_unit_behavior(10, 1)
        [ 4114] SWITCH var(81): {1->#4117, 2->#4121, 3->#4125, 4->#4129, 5->#4133, 6->#4137, 7->#4141, 8->#4145} else #4149
        [ 4117] set script variable #80 = 1
        [ 4120] do nothing
        [ 4121] set script variable #80 = 2
        [ 4124] do nothing
        [ 4125] set script variable #80 = 4
        [ 4128] do nothing
        [ 4129] set script variable #80 = 8
        [ 4132] do nothing
        [ 4133] set script variable #80 = 16
        [ 4136] do nothing
        [ 4137] set script variable #80 = 32
        [ 4140] do nothing
        [ 4141] set script variable #80 = 64
        [ 4144] do nothing
        [ 4145] set script variable #80 = 128
        [ 4148] do nothing
        [ 4149] do nothing
        [ 4150] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4168] IF NOT(((var(78) & var(80)) == 0)): GOTO #4175  (else falls through, rejoins #4175)
        [ 4172] set script variable #78 = (var(78) + var(80))
        [ 4175] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 4178] GOTO #4111
        [ 4180] IF NOT((var(78) < var(5))): GOTO #4334  (else falls through, rejoins #4334)
        [ 4184] set script variable #82 = (var(5) - var(78))
        [ 4187] set script variable #83 = 0
        [ 4190] set script variable #84 = 0
        [ 4193] WHILE (var(83) < var(8)): loop below; exit -> #4261 (500-iteration guard)
        [ 4196] SWITCH var(83): {1->#4199, 2->#4203, 3->#4207, 4->#4211, 5->#4215, 6->#4219, 7->#4223, 8->#4227} else #4231
        [ 4199] set script variable #84 = 1
        [ 4202] do nothing
        [ 4203] set script variable #84 = 2
        [ 4206] do nothing
        [ 4207] set script variable #84 = 4
        [ 4210] do nothing
        [ 4211] set script variable #84 = 8
        [ 4214] do nothing
        [ 4215] set script variable #84 = 16
        [ 4218] do nothing
        [ 4219] set script variable #84 = 32
        [ 4222] do nothing
        [ 4223] set script variable #84 = 64
        [ 4226] do nothing
        [ 4227] set script variable #84 = 128
        [ 4230] do nothing
        [ 4231] do nothing
        [ 4232] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4250] IF NOT(((var(84) & var(5)) > (var(84) & var(78)))): GOTO #4256  (else falls through, rejoins #4256)
        [ 4254] display system/chat message #15265: "Player üX"
        [ 4256] set script variable #83 = (var(83) + 1)
        [ 4259] GOTO #4196
        [ 4261] set script variable #5 = var(78)
        [ 4264] SWITCH var(10): {1->#4267, 2->#4271, 3->#4275, 4->#4279, 5->#4283, 6->#4287, 7->#4291, 8->#4295} else #4299
        [ 4267] set script variable #84 = 1
        [ 4270] do nothing
        [ 4271] set script variable #84 = 2
        [ 4274] do nothing
        [ 4275] set script variable #84 = 4
        [ 4278] do nothing
        [ 4279] set script variable #84 = 8
        [ 4282] do nothing
        [ 4283] set script variable #84 = 16
        [ 4286] do nothing
        [ 4287] set script variable #84 = 32
        [ 4290] do nothing
        [ 4291] set script variable #84 = 64
        [ 4294] do nothing
        [ 4295] set script variable #84 = 128
        [ 4298] do nothing
        [ 4299] do nothing
        [ 4300] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4318] IF NOT((var(84) == var(5))): GOTO #4326  (else falls through, rejoins #4334)
        [ 4322] set script variable #11 = 1
        [ 4325] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4326] IF NOT(((var(84) & var(5)) == 0)): GOTO #4334  (else falls through, rejoins #4334)
        [ 4330] set script variable #11 = 2
        [ 4333] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4334] IF NOT(((stat(0) == 0) && (var(8) == 1))): GOTO #4342  (else falls through, rejoins #4342)
        [ 4338] set script variable #11 = 1
        [ 4341] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4342] IF NOT(((stat(0) > 0) && !all_group_alive(2))): GOTO #4350  (else falls through, rejoins #4350)
        [ 4346] set script variable #11 = 3
        [ 4349] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4350] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 4351] IF NOT((var(11) == 1)): GOTO #4362  (else falls through, rejoins #4380)
            [ 4355] play sound effect 35
            [ 4357] display system/chat message #15287: "All immediate threats eliminated. "
            [ 4359] set the objective state of unit 1 to 1
            [ 4362] IF NOT((var(11) == 3)): GOTO #4375  (else falls through, rejoins #4380)
            [ 4366] play sound effect 35
            [ 4368] set the objective state of unit 1 to 1
            [ 4371] display system/chat message #15322: "The Cybrid forces have been eliminated."
            [ 4373] end the current turn (reason/flag #15362), then jump to scenario phase 3
            [ 4375] display system/chat message #15418: "Your mission was a failure."
            [ 4377] set the objective state of unit 1 to 2
            [ 4380] advance to the next scenario phase (no effect if already at the last phase)
            [ 4381] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
