# SIT331.CS

```text
; warning: file length 49599 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=606, phase1=607, phase2=1306, phase3=6890
; 24193 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    1] IF NOT((var(2) == 0)): GOTO #8  (else falls through, rejoins #8)
    [    5] set script variable #2 = (random_below(var(6)) + var(7))
    [    8] set script variable #8 = (stat(0) / 1)
    [   11] set script variable #8 = (var(8) - 200)
    [   14] set script variable #9 = 8192
    [   17] WHILE (var(9) > 500): loop below; exit -> #32 (500-iteration guard)
    [   20] IF NOT((var(8) < var(9))): GOTO #27  (else falls through, rejoins #27)
    [   24] set script variable #4 = (var(4) + 1)
    [   27] set script variable #9 = (var(9) / 4)
    [   30] GOTO #20
    [   32] set script variable #10 = 0
    [   35] set script variable #11 = 0
    [   38] set script variable #12 = 25
    [   41] set script variable #13 = 27
    [   44] set script variable #14 = 0
    [   47] set script variable #15 = 360
    [   50] IF NOT((var(12) > (var(4) + 5))): GOTO #57  (else falls through, rejoins #60)
    [   54] set script variable #12 = (var(12) - var(4))
    [   57] set script variable #12 = 5
    [   60] IF NOT((var(13) > (var(4) + 10))): GOTO #67  (else falls through, rejoins #70)
    [   64] set script variable #13 = (var(13) - var(4))
    [   67] set script variable #13 = 10
    [   70] IF NOT((var(10) == 0)): GOTO #77  (else falls through, rejoins #77)
    [   74] set script variable #10 = (var(12) + random_below((var(13) - var(12))))
    [   77] IF NOT((var(11) == 0)): GOTO #84  (else falls through, rejoins #84)
    [   81] set script variable #11 = ((random_below(var(15)) + var(14)) - (var(15) / 2))
    [   84] set hex-var #7 = the point var(11) steps along the path toward var(10)
    [   88] set script variable #16 = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
    [   91] set script variable #17 = 0
    [   94] set script variable #17 = (var(17) + 1)
    [   97] IF NOT((var(8) > 300)): GOTO #118  (else falls through, rejoins #121)
    [  101] set script variable #5 = (var(8) / 2)
    [  104] IF NOT((var(5) < 300)): GOTO #111  (else falls through, rejoins #118)
    [  108] set script variable #5 = 300
    [  111] IF NOT((var(5) > 1200)): GOTO #118  (else falls through, rejoins #118)
    [  115] set script variable #5 = 1200
    [  118] set script variable #5 = var(8)
    [  121] set script variable #8 = (var(8) - var(5))
    [  124] set hex-var #1 = the point random_below(360) steps along the path toward random_below(32)
    [  128] define condition-slot #1 as (variable-ref 1, expression-offset 239)
    [  132] spawn an AI squad with point-budget var(5) at hex-ref #1, remember all its units as group #3
    [  136] order every unit in group #3 to move, speed/priority var(16), destination-type tag 2, destination arg 1
    [  141] set attribute #8 to 47 for every unit in group #3
    [  144] do nothing (message no-op)
    [  145] (UNKNOWN OPCODE 0x00a1) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  700] set script variable #3 = 0
        [  703] IF NOT(timer_expired(2)): GOTO #6272  (else falls through, rejoins #6272)
        [  707] arm timer #2 to expire 1 turn(s) from now
        [  710] set script variable #1 = 0
        [  713] set script variable #21 = 0
        [  716] IF NOT((group_condition_ref_2(7, 1) && group_condition_ref_2(7, 2))): GOTO #1000  (else falls through, rejoins #1007)
        [  720] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #4
        [  723] set script variable #22 = random_below(100)
        [  726] IF NOT(((var(1) == 0) && (var(22) < 2))): GOTO #993  (else falls through, rejoins #993)
        [  730] set script variable #1 = (var(1) + 1)
        [  733] store the literal value 1946 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  736] SWITCH random_below(4): {0->#739, 1->#743, 2->#747, 7->#751} else #755
        [  739] store the literal value 1947 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  742] do nothing
        [  743] store the literal value 1982 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  746] do nothing
        [  747] store the literal value 2009 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  750] do nothing
        [  751] store the literal value 2048 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  754] do nothing
        [  755] store the literal value 2076 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  758] do nothing
        [  759] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  769] store the literal value 2129 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  772] set script variable #23 = random_below(4)
        [  775] IF NOT(((random_below(4) != 7) && (var(23) >= 3))): GOTO #782  (else falls through, rejoins #782)
        [  779] set script variable #23 = random_below(3)
        [  782] SWITCH var(23): {0->#785, 1->#789, 3->#793, 4->#797, 5->#801, 6->#805, 7->#809} else #813
        [  785] store the literal value 2130 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  788] do nothing
        [  789] store the literal value 2134 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  792] do nothing
        [  793] store the literal value 2145 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  796] do nothing
        [  797] store the literal value 2166 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  800] do nothing
        [  801] store the literal value 2193 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  804] do nothing
        [  805] store the literal value 2224 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  808] do nothing
        [  809] store the literal value 2253 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  812] do nothing
        [  813] store the literal value 2283 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  816] do nothing
        [  817] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  833] store the literal value 2298 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  836] SWITCH 512: {1->#839, 2->#845, 3->#851, 4->#857, 5->#863, 6->#869, 7->#875, 8->#881, 9->#887, 10->#893, 11->#899, 12->#905, 13->#909, 14->#913, 512->#917, 32->#923, 64->#929, 128->#935, 256->#941} else #947
        [  839] store the literal value 2299 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  842] play sound effect 257
        [  844] do nothing
        [  845] store the literal value 2326 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  848] play sound effect 257
        [  850] do nothing
        [  851] store the literal value 2352 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  854] play sound effect 260
        [  856] do nothing
        [  857] store the literal value 2382 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  860] play sound effect 260
        [  862] do nothing
        [  863] store the literal value 2406 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  866] play sound effect 260
        [  868] do nothing
        [  869] store the literal value 2431 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  872] play sound effect 261
        [  874] do nothing
        [  875] store the literal value 2485 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  878] play sound effect 257
        [  880] do nothing
        [  881] store the literal value 2509 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  884] play sound effect 261
        [  886] do nothing
        [  887] store the literal value 2564 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  890] play sound effect 262
        [  892] do nothing
        [  893] store the literal value 2609 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  896] play sound effect 262
        [  898] do nothing
        [  899] store the literal value 2660 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  902] play sound effect 259
        [  904] do nothing
        [  905] store the literal value 2743 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  908] do nothing
        [  909] store the literal value 2807 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  912] do nothing
        [  913] store the literal value 2861 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  916] do nothing
        [  917] store the literal value 2933 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  920] play sound effect 258
        [  922] do nothing
        [  923] store the literal value 2967 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  926] play sound effect 258
        [  928] do nothing
        [  929] store the literal value 3006 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  932] play sound effect 258
        [  934] do nothing
        [  935] store the literal value 3045 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  938] play sound effect 258
        [  940] do nothing
        [  941] store the literal value 3086 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  944] play sound effect 258
        [  946] do nothing
        [  947] store the literal value 3126 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  950] do nothing
        [  951] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [  991] display system/chat message #3165: " þ"
        [  993] IF NOT(((var(21) & 512) == 0)): GOTO #1000  (else falls through, rejoins #1000)
        [  997] set script variable #21 = (var(21) + 512)
        [ 1000] IF NOT(((var(21) & 512) > 0)): GOTO #1007  (else falls through, rejoins #1007)
        [ 1004] set script variable #21 = (var(21) - 512)
        [ 1007] IF NOT((group_condition_ref_2(1, 1) && group_condition_ref_2(1, 2))): GOTO #1291  (else falls through, rejoins #1298)
        [ 1011] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [ 1014] set script variable #25 = random_below(100)
        [ 1017] IF NOT(((var(1) == 0) && (var(25) < 2))): GOTO #1284  (else falls through, rejoins #1284)
        [ 1021] set script variable #1 = (var(1) + 1)
        [ 1024] store the literal value 3183 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1027] SWITCH random_below(4): {0->#1030, 1->#1034, 2->#1038, 7->#1042} else #1046
        [ 1030] store the literal value 3184 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1033] do nothing
        [ 1034] store the literal value 3219 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1037] do nothing
        [ 1038] store the literal value 3246 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1041] do nothing
        [ 1042] store the literal value 3285 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1045] do nothing
        [ 1046] store the literal value 3313 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1049] do nothing
        [ 1050] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1060] store the literal value 3366 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1063] set script variable #26 = random_below(4)
        [ 1066] IF NOT(((random_below(4) != 7) && (var(26) >= 3))): GOTO #1073  (else falls through, rejoins #1073)
        [ 1070] set script variable #26 = random_below(3)
        [ 1073] SWITCH var(26): {0->#1076, 1->#1080, 3->#1084, 4->#1088, 5->#1092, 6->#1096, 7->#1100} else #1104
        [ 1076] store the literal value 3367 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1079] do nothing
        [ 1080] store the literal value 3371 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1083] do nothing
        [ 1084] store the literal value 3382 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1087] do nothing
        [ 1088] store the literal value 3403 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1091] do nothing
        [ 1092] store the literal value 3430 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1095] do nothing
        [ 1096] store the literal value 3461 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1099] do nothing
        [ 1100] store the literal value 3490 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1103] do nothing
        [ 1104] store the literal value 3520 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1107] do nothing
        [ 1108] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1124] store the literal value 3535 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1127] SWITCH 32: {1->#1130, 2->#1136, 3->#1142, 4->#1148, 5->#1154, 6->#1160, 7->#1166, 8->#1172, 9->#1178, 10->#1184, 11->#1190, 12->#1196, 13->#1200, 14->#1204, 512->#1208, 32->#1214, 64->#1220, 128->#1226, 256->#1232} else #1238
        [ 1130] store the literal value 3536 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1133] play sound effect 257
        [ 1135] do nothing
        [ 1136] store the literal value 3563 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1139] play sound effect 257
        [ 1141] do nothing
        [ 1142] store the literal value 3589 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1145] play sound effect 260
        [ 1147] do nothing
        [ 1148] store the literal value 3619 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1151] play sound effect 260
        [ 1153] do nothing
        [ 1154] store the literal value 3643 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1157] play sound effect 260
        [ 1159] do nothing
        [ 1160] store the literal value 3668 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1163] play sound effect 261
        [ 1165] do nothing
        [ 1166] store the literal value 3722 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1169] play sound effect 257
        [ 1171] do nothing
        [ 1172] store the literal value 3746 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1175] play sound effect 261
        [ 1177] do nothing
        [ 1178] store the literal value 3801 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1181] play sound effect 262
        [ 1183] do nothing
        [ 1184] store the literal value 3846 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1187] play sound effect 262
        [ 1189] do nothing
        [ 1190] store the literal value 3897 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1193] play sound effect 259
        [ 1195] do nothing
        [ 1196] store the literal value 3980 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1199] do nothing
        [ 1200] store the literal value 4044 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1203] do nothing
        [ 1204] store the literal value 4098 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1207] do nothing
        [ 1208] store the literal value 4170 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1211] play sound effect 258
        [ 1213] do nothing
        [ 1214] store the literal value 4204 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1217] play sound effect 258
        [ 1219] do nothing
        [ 1220] store the literal value 4243 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1223] play sound effect 258
        [ 1225] do nothing
        [ 1226] store the literal value 4282 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1229] play sound effect 258
        [ 1231] do nothing
        [ 1232] store the literal value 4323 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1235] play sound effect 258
        [ 1237] do nothing
        [ 1238] store the literal value 4363 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1241] do nothing
        [ 1242] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1282] display system/chat message #4402: " þ"
        [ 1284] IF NOT(((var(21) & 32) == 0)): GOTO #1291  (else falls through, rejoins #1291)
        [ 1288] set script variable #21 = (var(21) + 32)
        [ 1291] IF NOT(((var(21) & 32) > 0)): GOTO #1298  (else falls through, rejoins #1298)
        [ 1295] set script variable #21 = (var(21) - 32)
        [ 1298] IF NOT((group_condition_ref_2(2, 1) && group_condition_ref_2(2, 2))): GOTO #1582  (else falls through, rejoins #1589)
        [ 1302] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [ 1305] set script variable #28 = random_below(100)
        [ 1308] IF NOT(((var(1) == 0) && (var(28) < 2))): GOTO #1575  (else falls through, rejoins #1575)
        [ 1312] set script variable #1 = (var(1) + 1)
        [ 1315] store the literal value 4420 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1318] SWITCH random_below(4): {0->#1321, 1->#1325, 2->#1329, 7->#1333} else #1337
        [ 1321] store the literal value 4421 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1324] do nothing
        [ 1325] store the literal value 4456 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1328] do nothing
        [ 1329] store the literal value 4483 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1332] do nothing
        [ 1333] store the literal value 4522 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1336] do nothing
        [ 1337] store the literal value 4550 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1340] do nothing
        [ 1341] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1351] store the literal value 4603 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1354] set script variable #29 = random_below(4)
        [ 1357] IF NOT(((random_below(4) != 7) && (var(29) >= 3))): GOTO #1364  (else falls through, rejoins #1364)
        [ 1361] set script variable #29 = random_below(3)
        [ 1364] SWITCH var(29): {0->#1367, 1->#1371, 3->#1375, 4->#1379, 5->#1383, 6->#1387, 7->#1391} else #1395
        [ 1367] store the literal value 4604 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1370] do nothing
        [ 1371] store the literal value 4608 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1374] do nothing
        [ 1375] store the literal value 4619 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1378] do nothing
        [ 1379] store the literal value 4640 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1382] do nothing
        [ 1383] store the literal value 4667 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1386] do nothing
        [ 1387] store the literal value 4698 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1390] do nothing
        [ 1391] store the literal value 4727 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1394] do nothing
        [ 1395] store the literal value 4757 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1398] do nothing
        [ 1399] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1415] store the literal value 4772 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1418] SWITCH 64: {1->#1421, 2->#1427, 3->#1433, 4->#1439, 5->#1445, 6->#1451, 7->#1457, 8->#1463, 9->#1469, 10->#1475, 11->#1481, 12->#1487, 13->#1491, 14->#1495, 512->#1499, 32->#1505, 64->#1511, 128->#1517, 256->#1523} else #1529
        [ 1421] store the literal value 4773 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1424] play sound effect 257
        [ 1426] do nothing
        [ 1427] store the literal value 4800 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1430] play sound effect 257
        [ 1432] do nothing
        [ 1433] store the literal value 4826 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1436] play sound effect 260
        [ 1438] do nothing
        [ 1439] store the literal value 4856 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1442] play sound effect 260
        [ 1444] do nothing
        [ 1445] store the literal value 4880 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1448] play sound effect 260
        [ 1450] do nothing
        [ 1451] store the literal value 4905 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1454] play sound effect 261
        [ 1456] do nothing
        [ 1457] store the literal value 4959 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1460] play sound effect 257
        [ 1462] do nothing
        [ 1463] store the literal value 4983 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1466] play sound effect 261
        [ 1468] do nothing
        [ 1469] store the literal value 5038 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1472] play sound effect 262
        [ 1474] do nothing
        [ 1475] store the literal value 5083 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1478] play sound effect 262
        [ 1480] do nothing
        [ 1481] store the literal value 5134 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1484] play sound effect 259
        [ 1486] do nothing
        [ 1487] store the literal value 5217 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1490] do nothing
        [ 1491] store the literal value 5281 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1494] do nothing
        [ 1495] store the literal value 5335 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1498] do nothing
        [ 1499] store the literal value 5407 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1502] play sound effect 258
        [ 1504] do nothing
        [ 1505] store the literal value 5441 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1508] play sound effect 258
        [ 1510] do nothing
        [ 1511] store the literal value 5480 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1514] play sound effect 258
        [ 1516] do nothing
        [ 1517] store the literal value 5519 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1520] play sound effect 258
        [ 1522] do nothing
        [ 1523] store the literal value 5560 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1526] play sound effect 258
        [ 1528] do nothing
        [ 1529] store the literal value 5600 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1532] do nothing
        [ 1533] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1573] display system/chat message #5639: " þ
"
        [ 1575] IF NOT(((var(21) & 64) == 0)): GOTO #1582  (else falls through, rejoins #1582)
        [ 1579] set script variable #21 = (var(21) + 64)
        [ 1582] IF NOT(((var(21) & 64) > 0)): GOTO #1589  (else falls through, rejoins #1589)
        [ 1586] set script variable #21 = (var(21) - 64)
        [ 1589] IF NOT((group_condition_ref_2(3, 1) && group_condition_ref_2(3, 2))): GOTO #1873  (else falls through, rejoins #1880)
        [ 1593] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [ 1596] set script variable #31 = random_below(100)
        [ 1599] IF NOT(((var(1) == 0) && (var(31) < 2))): GOTO #1866  (else falls through, rejoins #1866)
        [ 1603] set script variable #1 = (var(1) + 1)
        [ 1606] store the literal value 5657 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1609] SWITCH random_below(4): {0->#1612, 1->#1616, 2->#1620, 7->#1624} else #1628
        [ 1612] store the literal value 5658 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1615] do nothing
        [ 1616] store the literal value 5693 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1619] do nothing
        [ 1620] store the literal value 5720 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1623] do nothing
        [ 1624] store the literal value 5759 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1627] do nothing
        [ 1628] store the literal value 5787 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1631] do nothing
        [ 1632] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1642] store the literal value 5840 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1645] set script variable #32 = random_below(4)
        [ 1648] IF NOT(((random_below(4) != 7) && (var(32) >= 3))): GOTO #1655  (else falls through, rejoins #1655)
        [ 1652] set script variable #32 = random_below(3)
        [ 1655] SWITCH var(32): {0->#1658, 1->#1662, 3->#1666, 4->#1670, 5->#1674, 6->#1678, 7->#1682} else #1686
        [ 1658] store the literal value 5841 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1661] do nothing
        [ 1662] store the literal value 5845 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1665] do nothing
        [ 1666] store the literal value 5856 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1669] do nothing
        [ 1670] store the literal value 5877 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1673] do nothing
        [ 1674] store the literal value 5904 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1677] do nothing
        [ 1678] store the literal value 5935 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1681] do nothing
        [ 1682] store the literal value 5964 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1685] do nothing
        [ 1686] store the literal value 5994 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1689] do nothing
        [ 1690] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1706] store the literal value 6009 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1709] SWITCH 128: {1->#1712, 2->#1718, 3->#1724, 4->#1730, 5->#1736, 6->#1742, 7->#1748, 8->#1754, 9->#1760, 10->#1766, 11->#1772, 12->#1778, 13->#1782, 14->#1786, 512->#1790, 32->#1796, 64->#1802, 128->#1808, 256->#1814} else #1820
        [ 1712] store the literal value 6010 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1715] play sound effect 257
        [ 1717] do nothing
        [ 1718] store the literal value 6037 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1721] play sound effect 257
        [ 1723] do nothing
        [ 1724] store the literal value 6063 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1727] play sound effect 260
        [ 1729] do nothing
        [ 1730] store the literal value 6093 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1733] play sound effect 260
        [ 1735] do nothing
        [ 1736] store the literal value 6117 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1739] play sound effect 260
        [ 1741] do nothing
        [ 1742] store the literal value 6142 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1745] play sound effect 261
        [ 1747] do nothing
        [ 1748] store the literal value 6196 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1751] play sound effect 257
        [ 1753] do nothing
        [ 1754] store the literal value 6220 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1757] play sound effect 261
        [ 1759] do nothing
        [ 1760] store the literal value 6275 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1763] play sound effect 262
        [ 1765] do nothing
        [ 1766] store the literal value 6320 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1769] play sound effect 262
        [ 1771] do nothing
        [ 1772] store the literal value 6371 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1775] play sound effect 259
        [ 1777] do nothing
        [ 1778] store the literal value 6454 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1781] do nothing
        [ 1782] store the literal value 6518 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1785] do nothing
        [ 1786] store the literal value 6572 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1789] do nothing
        [ 1790] store the literal value 6644 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1793] play sound effect 258
        [ 1795] do nothing
        [ 1796] store the literal value 6678 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1799] play sound effect 258
        [ 1801] do nothing
        [ 1802] store the literal value 6717 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1805] play sound effect 258
        [ 1807] do nothing
        [ 1808] store the literal value 6756 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1811] play sound effect 258
        [ 1813] do nothing
        [ 1814] store the literal value 6797 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1817] play sound effect 258
        [ 1819] do nothing
        [ 1820] store the literal value 6837 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1823] do nothing
        [ 1824] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1864] display system/chat message #6876: " þ"
        [ 1866] IF NOT(((var(21) & 128) == 0)): GOTO #1873  (else falls through, rejoins #1873)
        [ 1870] set script variable #21 = (var(21) + 128)
        [ 1873] IF NOT(((var(21) & 128) > 0)): GOTO #1880  (else falls through, rejoins #1880)
        [ 1877] set script variable #21 = (var(21) - 128)
        [ 1880] IF NOT((group_condition_ref_2(4, 1) && group_condition_ref_2(4, 2))): GOTO #2164  (else falls through, rejoins #2171)
        [ 1884] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #8
        [ 1887] set script variable #34 = random_below(100)
        [ 1890] IF NOT(((var(1) == 0) && (var(34) < 2))): GOTO #2157  (else falls through, rejoins #2157)
        [ 1894] set script variable #1 = (var(1) + 1)
        [ 1897] store the literal value 6894 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1900] SWITCH random_below(4): {0->#1903, 1->#1907, 2->#1911, 7->#1915} else #1919
        [ 1903] store the literal value 6895 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1906] do nothing
        [ 1907] store the literal value 6930 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1910] do nothing
        [ 1911] store the literal value 6957 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1914] do nothing
        [ 1915] store the literal value 6996 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1918] do nothing
        [ 1919] store the literal value 7024 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1922] do nothing
        [ 1923] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1933] store the literal value 7077 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1936] set script variable #35 = random_below(4)
        [ 1939] IF NOT(((random_below(4) != 7) && (var(35) >= 3))): GOTO #1946  (else falls through, rejoins #1946)
        [ 1943] set script variable #35 = random_below(3)
        [ 1946] SWITCH var(35): {0->#1949, 1->#1953, 3->#1957, 4->#1961, 5->#1965, 6->#1969, 7->#1973} else #1977
        [ 1949] store the literal value 7078 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1952] do nothing
        [ 1953] store the literal value 7082 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1956] do nothing
        [ 1957] store the literal value 7093 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1960] do nothing
        [ 1961] store the literal value 7114 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1964] do nothing
        [ 1965] store the literal value 7141 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1968] do nothing
        [ 1969] store the literal value 7172 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1972] do nothing
        [ 1973] store the literal value 7201 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1976] do nothing
        [ 1977] store the literal value 7231 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1980] do nothing
        [ 1981] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1997] store the literal value 7246 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2000] SWITCH 256: {1->#2003, 2->#2009, 3->#2015, 4->#2021, 5->#2027, 6->#2033, 7->#2039, 8->#2045, 9->#2051, 10->#2057, 11->#2063, 12->#2069, 13->#2073, 14->#2077, 512->#2081, 32->#2087, 64->#2093, 128->#2099, 256->#2105} else #2111
        [ 2003] store the literal value 7247 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2006] play sound effect 257
        [ 2008] do nothing
        [ 2009] store the literal value 7274 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2012] play sound effect 257
        [ 2014] do nothing
        [ 2015] store the literal value 7300 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2018] play sound effect 260
        [ 2020] do nothing
        [ 2021] store the literal value 7330 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2024] play sound effect 260
        [ 2026] do nothing
        [ 2027] store the literal value 7354 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2030] play sound effect 260
        [ 2032] do nothing
        [ 2033] store the literal value 7379 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2036] play sound effect 261
        [ 2038] do nothing
        [ 2039] store the literal value 7433 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2042] play sound effect 257
        [ 2044] do nothing
        [ 2045] store the literal value 7457 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2048] play sound effect 261
        [ 2050] do nothing
        [ 2051] store the literal value 7512 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2054] play sound effect 262
        [ 2056] do nothing
        [ 2057] store the literal value 7557 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2060] play sound effect 262
        [ 2062] do nothing
        [ 2063] store the literal value 7608 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2066] play sound effect 259
        [ 2068] do nothing
        [ 2069] store the literal value 7691 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2072] do nothing
        [ 2073] store the literal value 7755 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2076] do nothing
        [ 2077] store the literal value 7809 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2080] do nothing
        [ 2081] store the literal value 7881 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2084] play sound effect 258
        [ 2086] do nothing
        [ 2087] store the literal value 7915 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2090] play sound effect 258
        [ 2092] do nothing
        [ 2093] store the literal value 7954 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2096] play sound effect 258
        [ 2098] do nothing
        [ 2099] store the literal value 7993 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2102] play sound effect 258
        [ 2104] do nothing
        [ 2105] store the literal value 8034 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2108] play sound effect 258
        [ 2110] do nothing
        [ 2111] store the literal value 8074 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2114] do nothing
        [ 2115] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2155] display system/chat message #8113: " þ"
        [ 2157] IF NOT(((var(21) & 256) == 0)): GOTO #2164  (else falls through, rejoins #2164)
        [ 2161] set script variable #21 = (var(21) + 256)
        [ 2164] IF NOT(((var(21) & 256) > 0)): GOTO #2171  (else falls through, rejoins #2171)
        [ 2168] set script variable #21 = (var(21) - 256)
        [ 2171] IF NOT((group_condition_ref_2(5, 1) && group_condition_ref_2(5, 2))): GOTO #2455  (else falls through, rejoins #2462)
        [ 2175] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 2178] set script variable #37 = random_below(100)
        [ 2181] IF NOT(((var(1) == 0) && (var(37) < 2))): GOTO #2448  (else falls through, rejoins #2448)
        [ 2185] set script variable #1 = (var(1) + 1)
        [ 2188] store the literal value 8131 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2191] SWITCH random_below(4): {0->#2194, 1->#2198, 2->#2202, 7->#2206} else #2210
        [ 2194] store the literal value 8132 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2197] do nothing
        [ 2198] store the literal value 8167 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2201] do nothing
        [ 2202] store the literal value 8194 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2205] do nothing
        [ 2206] store the literal value 8233 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2209] do nothing
        [ 2210] store the literal value 8261 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2213] do nothing
        [ 2214] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2224] store the literal value 8314 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2227] set script variable #38 = random_below(4)
        [ 2230] IF NOT(((random_below(4) != 7) && (var(38) >= 3))): GOTO #2237  (else falls through, rejoins #2237)
        [ 2234] set script variable #38 = random_below(3)
        [ 2237] SWITCH var(38): {0->#2240, 1->#2244, 3->#2248, 4->#2252, 5->#2256, 6->#2260, 7->#2264} else #2268
        [ 2240] store the literal value 8315 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2243] do nothing
        [ 2244] store the literal value 8319 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2247] do nothing
        [ 2248] store the literal value 8330 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2251] do nothing
        [ 2252] store the literal value 8351 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2255] do nothing
        [ 2256] store the literal value 8378 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2259] do nothing
        [ 2260] store the literal value 8409 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2263] do nothing
        [ 2264] store the literal value 8438 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2267] do nothing
        [ 2268] store the literal value 8468 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2271] do nothing
        [ 2272] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2288] store the literal value 8483 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2291] SWITCH 2048: {1->#2294, 2->#2300, 3->#2306, 4->#2312, 5->#2318, 6->#2324, 7->#2330, 8->#2336, 9->#2342, 10->#2348, 11->#2354, 12->#2360, 13->#2364, 14->#2368, 512->#2372, 32->#2378, 64->#2384, 128->#2390, 256->#2396} else #2402
        [ 2294] store the literal value 8484 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2297] play sound effect 257
        [ 2299] do nothing
        [ 2300] store the literal value 8511 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2303] play sound effect 257
        [ 2305] do nothing
        [ 2306] store the literal value 8537 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2309] play sound effect 260
        [ 2311] do nothing
        [ 2312] store the literal value 8567 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2315] play sound effect 260
        [ 2317] do nothing
        [ 2318] store the literal value 8591 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2321] play sound effect 260
        [ 2323] do nothing
        [ 2324] store the literal value 8616 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2327] play sound effect 261
        [ 2329] do nothing
        [ 2330] store the literal value 8670 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2333] play sound effect 257
        [ 2335] do nothing
        [ 2336] store the literal value 8694 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2339] play sound effect 261
        [ 2341] do nothing
        [ 2342] store the literal value 8749 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2345] play sound effect 262
        [ 2347] do nothing
        [ 2348] store the literal value 8794 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2351] play sound effect 262
        [ 2353] do nothing
        [ 2354] store the literal value 8845 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2357] play sound effect 259
        [ 2359] do nothing
        [ 2360] store the literal value 8928 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2363] do nothing
        [ 2364] store the literal value 8992 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2367] do nothing
        [ 2368] store the literal value 9046 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2371] do nothing
        [ 2372] store the literal value 9118 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2375] play sound effect 258
        [ 2377] do nothing
        [ 2378] store the literal value 9152 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2381] play sound effect 258
        [ 2383] do nothing
        [ 2384] store the literal value 9191 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2387] play sound effect 258
        [ 2389] do nothing
        [ 2390] store the literal value 9230 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2393] play sound effect 258
        [ 2395] do nothing
        [ 2396] store the literal value 9271 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2399] play sound effect 258
        [ 2401] do nothing
        [ 2402] store the literal value 9311 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2405] do nothing
        [ 2406] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2446] display system/chat message #9350: " þ"
        [ 2448] IF NOT(((var(21) & 2048) == 0)): GOTO #2455  (else falls through, rejoins #2455)
        [ 2452] set script variable #21 = (var(21) + 2048)
        [ 2455] IF NOT(((var(21) & 2048) > 0)): GOTO #2462  (else falls through, rejoins #2462)
        [ 2459] set script variable #21 = (var(21) - 2048)
        [ 2462] IF NOT((group_condition_ref_2(6, 1) && group_condition_ref_2(6, 2))): GOTO #2746  (else falls through, rejoins #2753)
        [ 2466] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #10
        [ 2469] set script variable #40 = random_below(100)
        [ 2472] IF NOT(((var(1) == 0) && (var(40) < 2))): GOTO #2739  (else falls through, rejoins #2739)
        [ 2476] set script variable #1 = (var(1) + 1)
        [ 2479] store the literal value 9368 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2482] SWITCH random_below(4): {0->#2485, 1->#2489, 2->#2493, 7->#2497} else #2501
        [ 2485] store the literal value 9369 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2488] do nothing
        [ 2489] store the literal value 9404 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2492] do nothing
        [ 2493] store the literal value 9431 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2496] do nothing
        [ 2497] store the literal value 9470 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2500] do nothing
        [ 2501] store the literal value 9498 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2504] do nothing
        [ 2505] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2515] store the literal value 9551 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2518] set script variable #41 = random_below(4)
        [ 2521] IF NOT(((random_below(4) != 7) && (var(41) >= 3))): GOTO #2528  (else falls through, rejoins #2528)
        [ 2525] set script variable #41 = random_below(3)
        [ 2528] SWITCH var(41): {0->#2531, 1->#2535, 3->#2539, 4->#2543, 5->#2547, 6->#2551, 7->#2555} else #2559
        [ 2531] store the literal value 9552 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2534] do nothing
        [ 2535] store the literal value 9556 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2538] do nothing
        [ 2539] store the literal value 9567 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2542] do nothing
        [ 2543] store the literal value 9588 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2546] do nothing
        [ 2547] store the literal value 9615 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2550] do nothing
        [ 2551] store the literal value 9646 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2554] do nothing
        [ 2555] store the literal value 9675 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2558] do nothing
        [ 2559] store the literal value 9705 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2562] do nothing
        [ 2563] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2579] store the literal value 9720 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2582] SWITCH 4096: {1->#2585, 2->#2591, 3->#2597, 4->#2603, 5->#2609, 6->#2615, 7->#2621, 8->#2627, 9->#2633, 10->#2639, 11->#2645, 12->#2651, 13->#2655, 14->#2659, 512->#2663, 32->#2669, 64->#2675, 128->#2681, 256->#2687} else #2693
        [ 2585] store the literal value 9721 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2588] play sound effect 257
        [ 2590] do nothing
        [ 2591] store the literal value 9748 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2594] play sound effect 257
        [ 2596] do nothing
        [ 2597] store the literal value 9774 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2600] play sound effect 260
        [ 2602] do nothing
        [ 2603] store the literal value 9804 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2606] play sound effect 260
        [ 2608] do nothing
        [ 2609] store the literal value 9828 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2612] play sound effect 260
        [ 2614] do nothing
        [ 2615] store the literal value 9853 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2618] play sound effect 261
        [ 2620] do nothing
        [ 2621] store the literal value 9907 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2624] play sound effect 257
        [ 2626] do nothing
        [ 2627] store the literal value 9931 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2630] play sound effect 261
        [ 2632] do nothing
        [ 2633] store the literal value 9986 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2636] play sound effect 262
        [ 2638] do nothing
        [ 2639] store the literal value 10031 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2642] play sound effect 262
        [ 2644] do nothing
        [ 2645] store the literal value 10082 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2648] play sound effect 259
        [ 2650] do nothing
        [ 2651] store the literal value 10165 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2654] do nothing
        [ 2655] store the literal value 10229 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2658] do nothing
        [ 2659] store the literal value 10283 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2662] do nothing
        [ 2663] store the literal value 10355 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2666] play sound effect 258
        [ 2668] do nothing
        [ 2669] store the literal value 10389 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2672] play sound effect 258
        [ 2674] do nothing
        [ 2675] store the literal value 10428 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2678] play sound effect 258
        [ 2680] do nothing
        [ 2681] store the literal value 10467 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2684] play sound effect 258
        [ 2686] do nothing
        [ 2687] store the literal value 10508 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2690] play sound effect 258
        [ 2692] do nothing
        [ 2693] store the literal value 10548 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2696] do nothing
        [ 2697] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2737] display system/chat message #10587: " þ"
        [ 2739] IF NOT(((var(21) & 4096) == 0)): GOTO #2746  (else falls through, rejoins #2746)
        [ 2743] set script variable #21 = (var(21) + 4096)
        [ 2746] IF NOT(((var(21) & 4096) > 0)): GOTO #2753  (else falls through, rejoins #2753)
        [ 2750] set script variable #21 = (var(21) - 4096)
        [ 2753] set script variable #43 = 0
        [ 2756] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 2759] WHILE set_unit_behavior(0, 11): loop below; exit -> #3050 (500-iteration guard)
        [ 2762] IF NOT((set_unit_behavior(9, 11) > 0)): GOTO #3045  (else falls through, rejoins #3045)
        [ 2766] set script variable #44 = random_below(100)
        [ 2769] IF NOT(((var(1) == 0) && (var(44) < 4))): GOTO #3036  (else falls through, rejoins #3036)
        [ 2773] set script variable #1 = (var(1) + 1)
        [ 2776] store the literal value 10605 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2779] SWITCH random_below(4): {0->#2782, 1->#2786, 2->#2790, 7->#2794} else #2798
        [ 2782] store the literal value 10606 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2785] do nothing
        [ 2786] store the literal value 10641 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2789] do nothing
        [ 2790] store the literal value 10668 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2793] do nothing
        [ 2794] store the literal value 10707 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2797] do nothing
        [ 2798] store the literal value 10735 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2801] do nothing
        [ 2802] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2812] store the literal value 10788 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2815] set script variable #45 = random_below(4)
        [ 2818] IF NOT(((random_below(4) != 7) && (var(45) >= 3))): GOTO #2825  (else falls through, rejoins #2825)
        [ 2822] set script variable #45 = random_below(3)
        [ 2825] SWITCH var(45): {0->#2828, 1->#2832, 3->#2836, 4->#2840, 5->#2844, 6->#2848, 7->#2852} else #2856
        [ 2828] store the literal value 10789 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2831] do nothing
        [ 2832] store the literal value 10793 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2835] do nothing
        [ 2836] store the literal value 10804 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2839] do nothing
        [ 2840] store the literal value 10825 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2843] do nothing
        [ 2844] store the literal value 10852 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2847] do nothing
        [ 2848] store the literal value 10883 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2851] do nothing
        [ 2852] store the literal value 10912 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2855] do nothing
        [ 2856] store the literal value 10942 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2859] do nothing
        [ 2860] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2876] store the literal value 10957 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2879] SWITCH 10: {1->#2882, 2->#2888, 3->#2894, 4->#2900, 5->#2906, 6->#2912, 7->#2918, 8->#2924, 9->#2930, 10->#2936, 11->#2942, 12->#2948, 13->#2952, 14->#2956, 512->#2960, 32->#2966, 64->#2972, 128->#2978, 256->#2984} else #2990
        [ 2882] store the literal value 10958 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2885] play sound effect 257
        [ 2887] do nothing
        [ 2888] store the literal value 10985 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2891] play sound effect 257
        [ 2893] do nothing
        [ 2894] store the literal value 11011 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2897] play sound effect 260
        [ 2899] do nothing
        [ 2900] store the literal value 11041 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2903] play sound effect 260
        [ 2905] do nothing
        [ 2906] store the literal value 11065 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2909] play sound effect 260
        [ 2911] do nothing
        [ 2912] store the literal value 11090 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2915] play sound effect 261
        [ 2917] do nothing
        [ 2918] store the literal value 11144 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2921] play sound effect 257
        [ 2923] do nothing
        [ 2924] store the literal value 11168 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2927] play sound effect 261
        [ 2929] do nothing
        [ 2930] store the literal value 11223 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2933] play sound effect 262
        [ 2935] do nothing
        [ 2936] store the literal value 11268 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2939] play sound effect 262
        [ 2941] do nothing
        [ 2942] store the literal value 11319 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2945] play sound effect 259
        [ 2947] do nothing
        [ 2948] store the literal value 11402 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2951] do nothing
        [ 2952] store the literal value 11466 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2955] do nothing
        [ 2956] store the literal value 11520 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2959] do nothing
        [ 2960] store the literal value 11592 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2963] play sound effect 258
        [ 2965] do nothing
        [ 2966] store the literal value 11626 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2969] play sound effect 258
        [ 2971] do nothing
        [ 2972] store the literal value 11665 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2975] play sound effect 258
        [ 2977] do nothing
        [ 2978] store the literal value 11704 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2981] play sound effect 258
        [ 2983] do nothing
        [ 2984] store the literal value 11745 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2987] play sound effect 258
        [ 2989] do nothing
        [ 2990] store the literal value 11785 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2993] do nothing
        [ 2994] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3034] display system/chat message #11824: " þ"
        [ 3036] IF NOT(((set_unit_behavior(8, 11) & var(21)) == 0)): GOTO #3045  (else falls through, rejoins #3045)
        [ 3040] do nothing (message no-op)
        [ 3041] (UNKNOWN OPCODE 0x2e42) - dead end, not decoded further (other branches continue independently)
        [ 3045] advance unit-slot #11 to the next unit in group #2 after the current one
        [ 3048] GOTO #2762
        [ 3050] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 3053] WHILE set_unit_behavior(0, 12): loop below; exit -> #3084 (500-iteration guard)
        [ 3056] IF NOT(group_condition_ref_2(8, 2)): GOTO #3063  (else falls through, rejoins #3070)
        [ 3060] set attribute #8 of unit-slot #12 to 2
        [ 3063] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3070  (else falls through, rejoins #3070)
        [ 3067] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1)
        [ 3070] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3079  (else falls through, rejoins #3079)
        [ 3074] set script variable #43 = (var(43) + 1)
        [ 3077] do nothing (message no-op)
        [ 3078] (UNKNOWN OPCODE 0x2e63) - dead end, not decoded further (other branches continue independently)
        [ 3079] advance unit-slot #12 to the next unit in group #1 after the current one
        [ 3082] GOTO #3056
        [ 3084] IF NOT(group_condition_ref_2(9, 2)): GOTO #3091  (else falls through, rejoins #3098)
        [ 3088] set attribute #8 of unit-slot #12 to 2
        [ 3091] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3098  (else falls through, rejoins #3098)
        [ 3095] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1)
        [ 3098] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3107  (else falls through, rejoins #3107)
        [ 3102] set script variable #43 = (var(43) + 1)
        [ 3105] do nothing (message no-op)
        [ 3106] (UNKNOWN OPCODE 0x2e76) - dead end, not decoded further (other branches continue independently)
        [ 3107] advance unit-slot #12 to the next unit in group #1 after the current one
        [ 3110] set script variable #47 = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
        [ 3113] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 3116] WHILE set_unit_behavior(0, 11): loop below; exit -> #6272 (500-iteration guard)
        [ 3119] IF NOT((set_unit_behavior(5, 11) < 60)): GOTO #3128  (else falls through, rejoins #6265)
        [ 3123] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 3128] SWITCH (set_unit_behavior(8, 11) & 15): {0->#3131, 1->#3414, 2->#4247, 3->#4806, 4->#4816, 5->#4861, 10->#5146, 11->#5156, 12->#5554, 13->#5555, 14->#5850, 15->#5851} else #6237
        [ 3131] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #3413  (else falls through, rejoins #3413)
        [ 3135] set script variable #48 = random_below(100)
        [ 3138] IF NOT(((var(1) == 0) && (var(48) < 40))): GOTO #3405  (else falls through, rejoins #3405)
        [ 3142] set script variable #1 = (var(1) + 1)
        [ 3145] store the literal value 11913 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3148] SWITCH random_below(1): {0->#3151, 1->#3155, 2->#3159, 7->#3163} else #3167
        [ 3151] store the literal value 11914 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3154] do nothing
        [ 3155] store the literal value 11949 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3158] do nothing
        [ 3159] store the literal value 11976 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3162] do nothing
        [ 3163] store the literal value 12015 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3166] do nothing
        [ 3167] store the literal value 12043 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3170] do nothing
        [ 3171] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3181] store the literal value 12096 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3184] set script variable #49 = random_below(4)
        [ 3187] IF NOT(((random_below(1) != 7) && (var(49) >= 3))): GOTO #3194  (else falls through, rejoins #3194)
        [ 3191] set script variable #49 = random_below(3)
        [ 3194] SWITCH var(49): {0->#3197, 1->#3201, 3->#3205, 4->#3209, 5->#3213, 6->#3217, 7->#3221} else #3225
        [ 3197] store the literal value 12097 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3200] do nothing
        [ 3201] store the literal value 12101 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3204] do nothing
        [ 3205] store the literal value 12112 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3208] do nothing
        [ 3209] store the literal value 12133 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3212] do nothing
        [ 3213] store the literal value 12160 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3216] do nothing
        [ 3217] store the literal value 12191 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3220] do nothing
        [ 3221] store the literal value 12220 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3224] do nothing
        [ 3225] store the literal value 12250 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3228] do nothing
        [ 3229] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3245] store the literal value 12265 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3248] SWITCH 8: {1->#3251, 2->#3257, 3->#3263, 4->#3269, 5->#3275, 6->#3281, 7->#3287, 8->#3293, 9->#3299, 10->#3305, 11->#3311, 12->#3317, 13->#3321, 14->#3325, 512->#3329, 32->#3335, 64->#3341, 128->#3347, 256->#3353} else #3359
        [ 3251] store the literal value 12266 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3254] play sound effect 257
        [ 3256] do nothing
        [ 3257] store the literal value 12293 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3260] play sound effect 257
        [ 3262] do nothing
        [ 3263] store the literal value 12319 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3266] play sound effect 260
        [ 3268] do nothing
        [ 3269] store the literal value 12349 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3272] play sound effect 260
        [ 3274] do nothing
        [ 3275] store the literal value 12373 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3278] play sound effect 260
        [ 3280] do nothing
        [ 3281] store the literal value 12398 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3284] play sound effect 261
        [ 3286] do nothing
        [ 3287] store the literal value 12452 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3290] play sound effect 257
        [ 3292] do nothing
        [ 3293] store the literal value 12476 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3296] play sound effect 261
        [ 3298] do nothing
        [ 3299] store the literal value 12531 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3302] play sound effect 262
        [ 3304] do nothing
        [ 3305] store the literal value 12576 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3308] play sound effect 262
        [ 3310] do nothing
        [ 3311] store the literal value 12627 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3314] play sound effect 259
        [ 3316] do nothing
        [ 3317] store the literal value 12710 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3320] do nothing
        [ 3321] store the literal value 12774 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3324] do nothing
        [ 3325] store the literal value 12828 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3328] do nothing
        [ 3329] store the literal value 12900 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3332] play sound effect 258
        [ 3334] do nothing
        [ 3335] store the literal value 12934 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3338] play sound effect 258
        [ 3340] do nothing
        [ 3341] store the literal value 12973 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3344] play sound effect 258
        [ 3346] do nothing
        [ 3347] store the literal value 13012 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3350] play sound effect 258
        [ 3352] do nothing
        [ 3353] store the literal value 13053 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3356] play sound effect 258
        [ 3358] do nothing
        [ 3359] store the literal value 13093 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3362] do nothing
        [ 3363] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3403] display system/chat message #13132: " þ"
        [ 3405] order unit-slot #11 to move, speed/priority var(47), destination-type tag 0, destination arg 0
        [ 3410] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 3413] do nothing
        [ 3414] IF NOT((group_condition_ref_2(10, 1) || (set_unit_behavior(9, 11) != 0))): GOTO #3697  (else falls through, rejoins #4246)
        [ 3418] IF NOT((set_unit_behavior(7, 11) != 6)): GOTO #3697  (else falls through, rejoins #3697)
        [ 3422] set script variable #51 = random_below(100)
        [ 3425] IF NOT(((var(1) == 0) && (var(51) < 40))): GOTO #3692  (else falls through, rejoins #3692)
        [ 3429] set script variable #1 = (var(1) + 1)
        [ 3432] store the literal value 13150 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3435] SWITCH random_below(1): {0->#3438, 1->#3442, 2->#3446, 7->#3450} else #3454
        [ 3438] store the literal value 13151 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3441] do nothing
        [ 3442] store the literal value 13186 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3445] do nothing
        [ 3446] store the literal value 13213 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3449] do nothing
        [ 3450] store the literal value 13252 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3453] do nothing
        [ 3454] store the literal value 13280 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3457] do nothing
        [ 3458] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3468] store the literal value 13333 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3471] set script variable #52 = random_below(4)
        [ 3474] IF NOT(((random_below(1) != 7) && (var(52) >= 3))): GOTO #3481  (else falls through, rejoins #3481)
        [ 3478] set script variable #52 = random_below(3)
        [ 3481] SWITCH var(52): {0->#3484, 1->#3488, 3->#3492, 4->#3496, 5->#3500, 6->#3504, 7->#3508} else #3512
        [ 3484] store the literal value 13334 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3487] do nothing
        [ 3488] store the literal value 13338 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3491] do nothing
        [ 3492] store the literal value 13349 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3495] do nothing
        [ 3496] store the literal value 13370 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3499] do nothing
        [ 3500] store the literal value 13397 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3503] do nothing
        [ 3504] store the literal value 13428 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3507] do nothing
        [ 3508] store the literal value 13457 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3511] do nothing
        [ 3512] store the literal value 13487 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3515] do nothing
        [ 3516] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3532] store the literal value 13502 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3535] SWITCH 3: {1->#3538, 2->#3544, 3->#3550, 4->#3556, 5->#3562, 6->#3568, 7->#3574, 8->#3580, 9->#3586, 10->#3592, 11->#3598, 12->#3604, 13->#3608, 14->#3612, 512->#3616, 32->#3622, 64->#3628, 128->#3634, 256->#3640} else #3646
        [ 3538] store the literal value 13503 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3541] play sound effect 257
        [ 3543] do nothing
        [ 3544] store the literal value 13530 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3547] play sound effect 257
        [ 3549] do nothing
        [ 3550] store the literal value 13556 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3553] play sound effect 260
        [ 3555] do nothing
        [ 3556] store the literal value 13586 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3559] play sound effect 260
        [ 3561] do nothing
        [ 3562] store the literal value 13610 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3565] play sound effect 260
        [ 3567] do nothing
        [ 3568] store the literal value 13635 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3571] play sound effect 261
        [ 3573] do nothing
        [ 3574] store the literal value 13689 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3577] play sound effect 257
        [ 3579] do nothing
        [ 3580] store the literal value 13713 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3583] play sound effect 261
        [ 3585] do nothing
        [ 3586] store the literal value 13768 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3589] play sound effect 262
        [ 3591] do nothing
        [ 3592] store the literal value 13813 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3595] play sound effect 262
        [ 3597] do nothing
        [ 3598] store the literal value 13864 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3601] play sound effect 259
        [ 3603] do nothing
        [ 3604] store the literal value 13947 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3607] do nothing
        [ 3608] store the literal value 14011 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3611] do nothing
        [ 3612] store the literal value 14065 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3615] do nothing
        [ 3616] store the literal value 14137 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3619] play sound effect 258
        [ 3621] do nothing
        [ 3622] store the literal value 14171 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3625] play sound effect 258
        [ 3627] do nothing
        [ 3628] store the literal value 14210 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3631] play sound effect 258
        [ 3633] do nothing
        [ 3634] store the literal value 14249 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3637] play sound effect 258
        [ 3639] do nothing
        [ 3640] store the literal value 14290 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3643] play sound effect 258
        [ 3645] do nothing
        [ 3646] store the literal value 14330 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3649] do nothing
        [ 3650] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3690] display system/chat message #14369: " þ"
        [ 3692] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3697] IF NOT((set_unit_behavior(7, 11) != 2)): GOTO #3976  (else falls through, rejoins #4246)
        [ 3701] order unit-slot #11 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 3706] set script variable #54 = random_below(100)
        [ 3709] IF NOT(((var(1) == 0) && (var(54) < 4))): GOTO #3976  (else falls through, rejoins #3976)
        [ 3713] set script variable #1 = (var(1) + 1)
        [ 3716] store the literal value 14387 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3719] SWITCH random_below(1): {0->#3722, 1->#3726, 2->#3730, 7->#3734} else #3738
        [ 3722] store the literal value 14388 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3725] do nothing
        [ 3726] store the literal value 14423 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3729] do nothing
        [ 3730] store the literal value 14450 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3733] do nothing
        [ 3734] store the literal value 14489 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3737] do nothing
        [ 3738] store the literal value 14517 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3741] do nothing
        [ 3742] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3752] store the literal value 14570 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3755] set script variable #55 = random_below(4)
        [ 3758] IF NOT(((random_below(1) != 7) && (var(55) >= 3))): GOTO #3765  (else falls through, rejoins #3765)
        [ 3762] set script variable #55 = random_below(3)
        [ 3765] SWITCH var(55): {0->#3768, 1->#3772, 3->#3776, 4->#3780, 5->#3784, 6->#3788, 7->#3792} else #3796
        [ 3768] store the literal value 14571 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3771] do nothing
        [ 3772] store the literal value 14575 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3775] do nothing
        [ 3776] store the literal value 14586 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3779] do nothing
        [ 3780] store the literal value 14607 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3783] do nothing
        [ 3784] store the literal value 14634 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3787] do nothing
        [ 3788] store the literal value 14665 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3791] do nothing
        [ 3792] store the literal value 14694 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3795] do nothing
        [ 3796] store the literal value 14724 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3799] do nothing
        [ 3800] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3816] store the literal value 14739 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3819] SWITCH 2: {1->#3822, 2->#3828, 3->#3834, 4->#3840, 5->#3846, 6->#3852, 7->#3858, 8->#3864, 9->#3870, 10->#3876, 11->#3882, 12->#3888, 13->#3892, 14->#3896, 512->#3900, 32->#3906, 64->#3912, 128->#3918, 256->#3924} else #3930
        [ 3822] store the literal value 14740 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3825] play sound effect 257
        [ 3827] do nothing
        [ 3828] store the literal value 14767 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3831] play sound effect 257
        [ 3833] do nothing
        [ 3834] store the literal value 14793 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3837] play sound effect 260
        [ 3839] do nothing
        [ 3840] store the literal value 14823 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3843] play sound effect 260
        [ 3845] do nothing
        [ 3846] store the literal value 14847 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3849] play sound effect 260
        [ 3851] do nothing
        [ 3852] store the literal value 14872 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3855] play sound effect 261
        [ 3857] do nothing
        [ 3858] store the literal value 14926 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3861] play sound effect 257
        [ 3863] do nothing
        [ 3864] store the literal value 14950 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3867] play sound effect 261
        [ 3869] do nothing
        [ 3870] store the literal value 15005 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3873] play sound effect 262
        [ 3875] do nothing
        [ 3876] store the literal value 15050 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3879] play sound effect 262
        [ 3881] do nothing
        [ 3882] store the literal value 15101 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3885] play sound effect 259
        [ 3887] do nothing
        [ 3888] store the literal value 15184 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3891] do nothing
        [ 3892] store the literal value 15248 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3895] do nothing
        [ 3896] store the literal value 15302 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3899] do nothing
        [ 3900] store the literal value 15374 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3903] play sound effect 258
        [ 3905] do nothing
        [ 3906] store the literal value 15408 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3909] play sound effect 258
        [ 3911] do nothing
        [ 3912] store the literal value 15447 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3915] play sound effect 258
        [ 3917] do nothing
        [ 3918] store the literal value 15486 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3921] play sound effect 258
        [ 3923] do nothing
        [ 3924] store the literal value 15527 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3927] play sound effect 258
        [ 3929] do nothing
        [ 3930] store the literal value 15567 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3933] do nothing
        [ 3934] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3974] display system/chat message #15606: " þ""
        [ 3976] set script variable #57 = random_below(100)
        [ 3979] IF NOT(((var(1) == 0) && (var(57) < 4))): GOTO #4246  (else falls through, rejoins #4246)
        [ 3983] set script variable #1 = (var(1) + 1)
        [ 3986] store the literal value 15624 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3989] SWITCH random_below(1): {0->#3992, 1->#3996, 2->#4000, 7->#4004} else #4008
        [ 3992] store the literal value 15625 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3995] do nothing
        [ 3996] store the literal value 15660 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3999] do nothing
        [ 4000] store the literal value 15687 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4003] do nothing
        [ 4004] store the literal value 15726 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4007] do nothing
        [ 4008] store the literal value 15754 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4011] do nothing
        [ 4012] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4022] store the literal value 15807 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4025] set script variable #58 = random_below(4)
        [ 4028] IF NOT(((random_below(1) != 7) && (var(58) >= 3))): GOTO #4035  (else falls through, rejoins #4035)
        [ 4032] set script variable #58 = random_below(3)
        [ 4035] SWITCH var(58): {0->#4038, 1->#4042, 3->#4046, 4->#4050, 5->#4054, 6->#4058, 7->#4062} else #4066
        [ 4038] store the literal value 15808 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4041] do nothing
        [ 4042] store the literal value 15812 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4045] do nothing
        [ 4046] store the literal value 15823 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4049] do nothing
        [ 4050] store the literal value 15844 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4053] do nothing
        [ 4054] store the literal value 15871 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4057] do nothing
        [ 4058] store the literal value 15902 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4061] do nothing
        [ 4062] store the literal value 15931 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4065] do nothing
        [ 4066] store the literal value 15961 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4069] do nothing
        [ 4070] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4086] store the literal value 15976 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4089] SWITCH 1: {1->#4092, 2->#4098, 3->#4104, 4->#4110, 5->#4116, 6->#4122, 7->#4128, 8->#4134, 9->#4140, 10->#4146, 11->#4152, 12->#4158, 13->#4162, 14->#4166, 512->#4170, 32->#4176, 64->#4182, 128->#4188, 256->#4194} else #4200
        [ 4092] store the literal value 15977 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4095] play sound effect 257
        [ 4097] do nothing
        [ 4098] store the literal value 16004 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4101] play sound effect 257
        [ 4103] do nothing
        [ 4104] store the literal value 16030 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4107] play sound effect 260
        [ 4109] do nothing
        [ 4110] store the literal value 16060 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4113] play sound effect 260
        [ 4115] do nothing
        [ 4116] store the literal value 16084 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4119] play sound effect 260
        [ 4121] do nothing
        [ 4122] store the literal value 16109 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4125] play sound effect 261
        [ 4127] do nothing
        [ 4128] store the literal value 16163 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4131] play sound effect 257
        [ 4133] do nothing
        [ 4134] store the literal value 16187 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4137] play sound effect 261
        [ 4139] do nothing
        [ 4140] store the literal value 16242 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4143] play sound effect 262
        [ 4145] do nothing
        [ 4146] store the literal value 16287 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4149] play sound effect 262
        [ 4151] do nothing
        [ 4152] store the literal value 16338 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4155] play sound effect 259
        [ 4157] do nothing
        [ 4158] store the literal value 16421 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4161] do nothing
        [ 4162] store the literal value 16485 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4165] do nothing
        [ 4166] store the literal value 16539 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4169] do nothing
        [ 4170] store the literal value 16611 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4173] play sound effect 258
        [ 4175] do nothing
        [ 4176] store the literal value 16645 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4179] play sound effect 258
        [ 4181] do nothing
        [ 4182] store the literal value 16684 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4185] play sound effect 258
        [ 4187] do nothing
        [ 4188] store the literal value 16723 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4191] play sound effect 258
        [ 4193] do nothing
        [ 4194] store the literal value 16764 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4197] play sound effect 258
        [ 4199] do nothing
        [ 4200] store the literal value 16804 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4203] do nothing
        [ 4204] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4244] display system/chat message #16843: " þ%"
        [ 4246] do nothing
        [ 4247] IF NOT(((var(21) & 512) > 0)): GOTO #4526  (else falls through, rejoins #4805)
        [ 4251] set script variable #60 = random_below(100)
        [ 4254] IF NOT(((var(1) == 0) && (var(60) < 4))): GOTO #4521  (else falls through, rejoins #4521)
        [ 4258] set script variable #1 = (var(1) + 1)
        [ 4261] store the literal value 16861 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4264] SWITCH random_below(1): {0->#4267, 1->#4271, 2->#4275, 7->#4279} else #4283
        [ 4267] store the literal value 16862 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4270] do nothing
        [ 4271] store the literal value 16897 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4274] do nothing
        [ 4275] store the literal value 16924 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4278] do nothing
        [ 4279] store the literal value 16963 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4282] do nothing
        [ 4283] store the literal value 16991 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4286] do nothing
        [ 4287] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4297] store the literal value 17044 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4300] set script variable #61 = random_below(4)
        [ 4303] IF NOT(((random_below(1) != 7) && (var(61) >= 3))): GOTO #4310  (else falls through, rejoins #4310)
        [ 4307] set script variable #61 = random_below(3)
        [ 4310] SWITCH var(61): {0->#4313, 1->#4317, 3->#4321, 4->#4325, 5->#4329, 6->#4333, 7->#4337} else #4341
        [ 4313] store the literal value 17045 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4316] do nothing
        [ 4317] store the literal value 17049 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4320] do nothing
        [ 4321] store the literal value 17060 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4324] do nothing
        [ 4325] store the literal value 17081 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4328] do nothing
        [ 4329] store the literal value 17108 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4332] do nothing
        [ 4333] store the literal value 17139 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4336] do nothing
        [ 4337] store the literal value 17168 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4340] do nothing
        [ 4341] store the literal value 17198 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4344] do nothing
        [ 4345] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4361] store the literal value 17213 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4364] SWITCH 4: {1->#4367, 2->#4373, 3->#4379, 4->#4385, 5->#4391, 6->#4397, 7->#4403, 8->#4409, 9->#4415, 10->#4421, 11->#4427, 12->#4433, 13->#4437, 14->#4441, 512->#4445, 32->#4451, 64->#4457, 128->#4463, 256->#4469} else #4475
        [ 4367] store the literal value 17214 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4370] play sound effect 257
        [ 4372] do nothing
        [ 4373] store the literal value 17241 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4376] play sound effect 257
        [ 4378] do nothing
        [ 4379] store the literal value 17267 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4382] play sound effect 260
        [ 4384] do nothing
        [ 4385] store the literal value 17297 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4388] play sound effect 260
        [ 4390] do nothing
        [ 4391] store the literal value 17321 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4394] play sound effect 260
        [ 4396] do nothing
        [ 4397] store the literal value 17346 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4400] play sound effect 261
        [ 4402] do nothing
        [ 4403] store the literal value 17400 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4406] play sound effect 257
        [ 4408] do nothing
        [ 4409] store the literal value 17424 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4412] play sound effect 261
        [ 4414] do nothing
        [ 4415] store the literal value 17479 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4418] play sound effect 262
        [ 4420] do nothing
        [ 4421] store the literal value 17524 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4424] play sound effect 262
        [ 4426] do nothing
        [ 4427] store the literal value 17575 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4430] play sound effect 259
        [ 4432] do nothing
        [ 4433] store the literal value 17658 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4436] do nothing
        [ 4437] store the literal value 17722 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4440] do nothing
        [ 4441] store the literal value 17776 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4444] do nothing
        [ 4445] store the literal value 17848 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4448] play sound effect 258
        [ 4450] do nothing
        [ 4451] store the literal value 17882 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4454] play sound effect 258
        [ 4456] do nothing
        [ 4457] store the literal value 17921 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4460] play sound effect 258
        [ 4462] do nothing
        [ 4463] store the literal value 17960 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4466] play sound effect 258
        [ 4468] do nothing
        [ 4469] store the literal value 18001 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4472] play sound effect 258
        [ 4474] do nothing
        [ 4475] store the literal value 18041 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4478] do nothing
        [ 4479] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4519] display system/chat message #18080: " þ("
        [ 4521] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4526] IF NOT(((var(21) & 128) > 0)): GOTO #4805  (else falls through, rejoins #4805)
        [ 4530] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4535] set script variable #63 = random_below(100)
        [ 4538] IF NOT(((var(1) == 0) && (var(63) < 4))): GOTO #4805  (else falls through, rejoins #4805)
        [ 4542] set script variable #1 = (var(1) + 1)
        [ 4545] store the literal value 18098 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4548] SWITCH random_below(1): {0->#4551, 1->#4555, 2->#4559, 7->#4563} else #4567
        [ 4551] store the literal value 18099 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4554] do nothing
        [ 4555] store the literal value 18134 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4558] do nothing
        [ 4559] store the literal value 18161 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4562] do nothing
        [ 4563] store the literal value 18200 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4566] do nothing
        [ 4567] store the literal value 18228 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4570] do nothing
        [ 4571] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4581] store the literal value 18281 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4584] set script variable #64 = random_below(4)
        [ 4587] IF NOT(((random_below(1) != 7) && (var(64) >= 3))): GOTO #4594  (else falls through, rejoins #4594)
        [ 4591] set script variable #64 = random_below(3)
        [ 4594] SWITCH var(64): {0->#4597, 1->#4601, 3->#4605, 4->#4609, 5->#4613, 6->#4617, 7->#4621} else #4625
        [ 4597] store the literal value 18282 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4600] do nothing
        [ 4601] store the literal value 18286 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4604] do nothing
        [ 4605] store the literal value 18297 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4608] do nothing
        [ 4609] store the literal value 18318 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4612] do nothing
        [ 4613] store the literal value 18345 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4616] do nothing
        [ 4617] store the literal value 18376 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4620] do nothing
        [ 4621] store the literal value 18405 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4624] do nothing
        [ 4625] store the literal value 18435 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4628] do nothing
        [ 4629] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4645] store the literal value 18450 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4648] SWITCH 5: {1->#4651, 2->#4657, 3->#4663, 4->#4669, 5->#4675, 6->#4681, 7->#4687, 8->#4693, 9->#4699, 10->#4705, 11->#4711, 12->#4717, 13->#4721, 14->#4725, 512->#4729, 32->#4735, 64->#4741, 128->#4747, 256->#4753} else #4759
        [ 4651] store the literal value 18451 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4654] play sound effect 257
        [ 4656] do nothing
        [ 4657] store the literal value 18478 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4660] play sound effect 257
        [ 4662] do nothing
        [ 4663] store the literal value 18504 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4666] play sound effect 260
        [ 4668] do nothing
        [ 4669] store the literal value 18534 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4672] play sound effect 260
        [ 4674] do nothing
        [ 4675] store the literal value 18558 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4678] play sound effect 260
        [ 4680] do nothing
        [ 4681] store the literal value 18583 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4684] play sound effect 261
        [ 4686] do nothing
        [ 4687] store the literal value 18637 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4690] play sound effect 257
        [ 4692] do nothing
        [ 4693] store the literal value 18661 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4696] play sound effect 261
        [ 4698] do nothing
        [ 4699] store the literal value 18716 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4702] play sound effect 262
        [ 4704] do nothing
        [ 4705] store the literal value 18761 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4708] play sound effect 262
        [ 4710] do nothing
        [ 4711] store the literal value 18812 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4714] play sound effect 259
        [ 4716] do nothing
        [ 4717] store the literal value 18895 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4720] do nothing
        [ 4721] store the literal value 18959 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4724] do nothing
        [ 4725] store the literal value 19013 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4728] do nothing
        [ 4729] store the literal value 19085 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4732] play sound effect 258
        [ 4734] do nothing
        [ 4735] store the literal value 19119 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4738] play sound effect 258
        [ 4740] do nothing
        [ 4741] store the literal value 19158 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4744] play sound effect 258
        [ 4746] do nothing
        [ 4747] store the literal value 19197 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4750] play sound effect 258
        [ 4752] do nothing
        [ 4753] store the literal value 19238 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4756] play sound effect 258
        [ 4758] do nothing
        [ 4759] store the literal value 19278 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4762] do nothing
        [ 4763] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4803] display system/chat message #19317: " þ+"
        [ 4805] do nothing
        [ 4806] IF NOT(((var(21) & 512) > 0)): GOTO #4815  (else falls through, rejoins #4815)
        [ 4810] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4815] do nothing
        [ 4816] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#4819, 64->#4825, 128->#4831, 256->#4837} else #4843
        [ 4819] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4824] do nothing
        [ 4825] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 4830] do nothing
        [ 4831] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4836] do nothing
        [ 4837] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4842] do nothing
        [ 4843] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4848] do nothing
        [ 4849] do nothing
        [ 4850] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4860] do nothing
        [ 4861] IF NOT((var(43) > 0)): GOTO #5140  (else falls through, rejoins #5145)
        [ 4865] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4870] set script variable #66 = random_below(100)
        [ 4873] IF NOT(((var(1) == 0) && (var(66) < 4))): GOTO #5140  (else falls through, rejoins #5140)
        [ 4877] set script variable #1 = (var(1) + 1)
        [ 4880] store the literal value 19335 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4883] SWITCH random_below(1): {0->#4886, 1->#4890, 2->#4894, 7->#4898} else #4902
        [ 4886] store the literal value 19336 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4889] do nothing
        [ 4890] store the literal value 19371 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4893] do nothing
        [ 4894] store the literal value 19398 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4897] do nothing
        [ 4898] store the literal value 19437 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4901] do nothing
        [ 4902] store the literal value 19465 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4905] do nothing
        [ 4906] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4916] store the literal value 19518 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4919] set script variable #67 = random_below(4)
        [ 4922] IF NOT(((random_below(1) != 7) && (var(67) >= 3))): GOTO #4929  (else falls through, rejoins #4929)
        [ 4926] set script variable #67 = random_below(3)
        [ 4929] SWITCH var(67): {0->#4932, 1->#4936, 3->#4940, 4->#4944, 5->#4948, 6->#4952, 7->#4956} else #4960
        [ 4932] store the literal value 19519 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4935] do nothing
        [ 4936] store the literal value 19523 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4939] do nothing
        [ 4940] store the literal value 19534 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4943] do nothing
        [ 4944] store the literal value 19555 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4947] do nothing
        [ 4948] store the literal value 19582 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4951] do nothing
        [ 4952] store the literal value 19613 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4955] do nothing
        [ 4956] store the literal value 19642 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4959] do nothing
        [ 4960] store the literal value 19672 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4963] do nothing
        [ 4964] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4980] store the literal value 19687 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4983] SWITCH 6: {1->#4986, 2->#4992, 3->#4998, 4->#5004, 5->#5010, 6->#5016, 7->#5022, 8->#5028, 9->#5034, 10->#5040, 11->#5046, 12->#5052, 13->#5056, 14->#5060, 512->#5064, 32->#5070, 64->#5076, 128->#5082, 256->#5088} else #5094
        [ 4986] store the literal value 19688 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4989] play sound effect 257
        [ 4991] do nothing
        [ 4992] store the literal value 19715 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4995] play sound effect 257
        [ 4997] do nothing
        [ 4998] store the literal value 19741 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5001] play sound effect 260
        [ 5003] do nothing
        [ 5004] store the literal value 19771 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5007] play sound effect 260
        [ 5009] do nothing
        [ 5010] store the literal value 19795 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5013] play sound effect 260
        [ 5015] do nothing
        [ 5016] store the literal value 19820 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5019] play sound effect 261
        [ 5021] do nothing
        [ 5022] store the literal value 19874 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5025] play sound effect 257
        [ 5027] do nothing
        [ 5028] store the literal value 19898 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5031] play sound effect 261
        [ 5033] do nothing
        [ 5034] store the literal value 19953 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5037] play sound effect 262
        [ 5039] do nothing
        [ 5040] store the literal value 19998 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5043] play sound effect 262
        [ 5045] do nothing
        [ 5046] store the literal value 20049 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5049] play sound effect 259
        [ 5051] do nothing
        [ 5052] store the literal value 20132 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5055] do nothing
        [ 5056] store the literal value 20196 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5059] do nothing
        [ 5060] store the literal value 20250 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5063] do nothing
        [ 5064] store the literal value 20322 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5067] play sound effect 258
        [ 5069] do nothing
        [ 5070] store the literal value 20356 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5073] play sound effect 258
        [ 5075] do nothing
        [ 5076] store the literal value 20395 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5079] play sound effect 258
        [ 5081] do nothing
        [ 5082] store the literal value 20434 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5085] play sound effect 258
        [ 5087] do nothing
        [ 5088] store the literal value 20475 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5091] play sound effect 258
        [ 5093] do nothing
        [ 5094] store the literal value 20515 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5097] do nothing
        [ 5098] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5138] display system/chat message #20554: " þ."
        [ 5140] order unit-slot #11 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 5145] do nothing
        [ 5146] IF NOT((set_unit_behavior(7, 11) != 3)): GOTO #5155  (else falls through, rejoins #5155)
        [ 5150] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5155] do nothing
        [ 5156] IF NOT((((var(21) & 7136) == 0) && (var(43) == 0))): GOTO #5529  (else falls through, rejoins #5553)
        [ 5160] set script variable #69 = random_below(100)
        [ 5163] IF NOT(((var(1) == 0) && (var(69) < 4))): GOTO #5430  (else falls through, rejoins #5430)
        [ 5167] set script variable #1 = (var(1) + 1)
        [ 5170] store the literal value 20572 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5173] SWITCH random_below(1): {0->#5176, 1->#5180, 2->#5184, 7->#5188} else #5192
        [ 5176] store the literal value 20573 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5179] do nothing
        [ 5180] store the literal value 20608 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5183] do nothing
        [ 5184] store the literal value 20635 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5187] do nothing
        [ 5188] store the literal value 20674 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5191] do nothing
        [ 5192] store the literal value 20702 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5195] do nothing
        [ 5196] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5206] store the literal value 20755 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5209] set script variable #70 = random_below(4)
        [ 5212] IF NOT(((random_below(1) != 7) && (var(70) >= 3))): GOTO #5219  (else falls through, rejoins #5219)
        [ 5216] set script variable #70 = random_below(3)
        [ 5219] SWITCH var(70): {0->#5222, 1->#5226, 3->#5230, 4->#5234, 5->#5238, 6->#5242, 7->#5246} else #5250
        [ 5222] store the literal value 20756 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5225] do nothing
        [ 5226] store the literal value 20760 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5229] do nothing
        [ 5230] store the literal value 20771 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5233] do nothing
        [ 5234] store the literal value 20792 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5237] do nothing
        [ 5238] store the literal value 20819 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5241] do nothing
        [ 5242] store the literal value 20850 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5245] do nothing
        [ 5246] store the literal value 20879 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5249] do nothing
        [ 5250] store the literal value 20909 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5253] do nothing
        [ 5254] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5270] store the literal value 20924 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5273] SWITCH 7: {1->#5276, 2->#5282, 3->#5288, 4->#5294, 5->#5300, 6->#5306, 7->#5312, 8->#5318, 9->#5324, 10->#5330, 11->#5336, 12->#5342, 13->#5346, 14->#5350, 512->#5354, 32->#5360, 64->#5366, 128->#5372, 256->#5378} else #5384
        [ 5276] store the literal value 20925 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5279] play sound effect 257
        [ 5281] do nothing
        [ 5282] store the literal value 20952 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5285] play sound effect 257
        [ 5287] do nothing
        [ 5288] store the literal value 20978 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5291] play sound effect 260
        [ 5293] do nothing
        [ 5294] store the literal value 21008 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5297] play sound effect 260
        [ 5299] do nothing
        [ 5300] store the literal value 21032 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5303] play sound effect 260
        [ 5305] do nothing
        [ 5306] store the literal value 21057 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5309] play sound effect 261
        [ 5311] do nothing
        [ 5312] store the literal value 21111 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5315] play sound effect 257
        [ 5317] do nothing
        [ 5318] store the literal value 21135 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5321] play sound effect 261
        [ 5323] do nothing
        [ 5324] store the literal value 21190 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5327] play sound effect 262
        [ 5329] do nothing
        [ 5330] store the literal value 21235 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5333] play sound effect 262
        [ 5335] do nothing
        [ 5336] store the literal value 21286 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5339] play sound effect 259
        [ 5341] do nothing
        [ 5342] store the literal value 21369 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5345] do nothing
        [ 5346] store the literal value 21433 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5349] do nothing
        [ 5350] store the literal value 21487 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5353] do nothing
        [ 5354] store the literal value 21559 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5357] play sound effect 258
        [ 5359] do nothing
        [ 5360] store the literal value 21593 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5363] play sound effect 258
        [ 5365] do nothing
        [ 5366] store the literal value 21632 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5369] play sound effect 258
        [ 5371] do nothing
        [ 5372] store the literal value 21671 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5375] play sound effect 258
        [ 5377] do nothing
        [ 5378] store the literal value 21712 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5381] play sound effect 258
        [ 5383] do nothing
        [ 5384] store the literal value 21752 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5387] do nothing
        [ 5388] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5428] display system/chat message #21791: " þ1"
        [ 5430] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#5433, 64->#5451, 128->#5469, 256->#5487} else #5505
        [ 5433] IF NOT(group_condition_ref(1, 11)): GOTO #5441  (else falls through, rejoins #5441)
        [ 5437] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5441] define condition-slot #1 as (variable-ref 1, expression-offset 3937)
        [ 5445] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5450] do nothing
        [ 5451] IF NOT(group_condition_ref(2, 11)): GOTO #5459  (else falls through, rejoins #5459)
        [ 5455] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5459] define condition-slot #2 as (variable-ref 2, expression-offset 3958)
        [ 5463] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 5468] do nothing
        [ 5469] IF NOT(group_condition_ref(3, 11)): GOTO #5477  (else falls through, rejoins #5477)
        [ 5473] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5477] define condition-slot #3 as (variable-ref 3, expression-offset 3979)
        [ 5481] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5486] do nothing
        [ 5487] IF NOT(group_condition_ref(4, 11)): GOTO #5495  (else falls through, rejoins #5495)
        [ 5491] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5495] define condition-slot #4 as (variable-ref 4, expression-offset 4000)
        [ 5499] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5504] do nothing
        [ 5505] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 5510] do nothing
        [ 5511] do nothing
        [ 5512] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5522] IF NOT(((set_unit_behavior(8, 11) & 1024) > 0)): GOTO #5529  (else falls through, rejoins #5529)
        [ 5526] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) - 1024)
        [ 5529] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #5544  (else falls through, rejoins #5553)
        [ 5533] arm timer #1 to expire 2 turn(s) from now
        [ 5536] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 5539] order unit-slot #11 to move, speed/priority var(47), destination-type tag 0, destination arg 0
        [ 5544] IF NOT(timer_expired(1)): GOTO #5553  (else falls through, rejoins #5553)
        [ 5548] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5553] do nothing
        [ 5554] do nothing
        [ 5555] IF NOT((set_unit_behavior(7, 11) != 4)): GOTO #5834  (else falls through, rejoins #5849)
        [ 5559] set script variable #72 = random_below(100)
        [ 5562] IF NOT(((var(1) == 0) && (var(72) < 4))): GOTO #5829  (else falls through, rejoins #5829)
        [ 5566] set script variable #1 = (var(1) + 1)
        [ 5569] store the literal value 21809 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5572] SWITCH random_below(1): {0->#5575, 1->#5579, 2->#5583, 7->#5587} else #5591
        [ 5575] store the literal value 21810 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5578] do nothing
        [ 5579] store the literal value 21845 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5582] do nothing
        [ 5583] store the literal value 21872 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5586] do nothing
        [ 5587] store the literal value 21911 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5590] do nothing
        [ 5591] store the literal value 21939 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5594] do nothing
        [ 5595] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5605] store the literal value 21992 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5608] set script variable #73 = random_below(4)
        [ 5611] IF NOT(((random_below(1) != 7) && (var(73) >= 3))): GOTO #5618  (else falls through, rejoins #5618)
        [ 5615] set script variable #73 = random_below(3)
        [ 5618] SWITCH var(73): {0->#5621, 1->#5625, 3->#5629, 4->#5633, 5->#5637, 6->#5641, 7->#5645} else #5649
        [ 5621] store the literal value 21993 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5624] do nothing
        [ 5625] store the literal value 21997 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5628] do nothing
        [ 5629] store the literal value 22008 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5632] do nothing
        [ 5633] store the literal value 22029 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5636] do nothing
        [ 5637] store the literal value 22056 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5640] do nothing
        [ 5641] store the literal value 22087 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5644] do nothing
        [ 5645] store the literal value 22116 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5648] do nothing
        [ 5649] store the literal value 22146 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5652] do nothing
        [ 5653] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5669] store the literal value 22161 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5672] SWITCH 9: {1->#5675, 2->#5681, 3->#5687, 4->#5693, 5->#5699, 6->#5705, 7->#5711, 8->#5717, 9->#5723, 10->#5729, 11->#5735, 12->#5741, 13->#5745, 14->#5749, 512->#5753, 32->#5759, 64->#5765, 128->#5771, 256->#5777} else #5783
        [ 5675] store the literal value 22162 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5678] play sound effect 257
        [ 5680] do nothing
        [ 5681] store the literal value 22189 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5684] play sound effect 257
        [ 5686] do nothing
        [ 5687] store the literal value 22215 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5690] play sound effect 260
        [ 5692] do nothing
        [ 5693] store the literal value 22245 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5696] play sound effect 260
        [ 5698] do nothing
        [ 5699] store the literal value 22269 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5702] play sound effect 260
        [ 5704] do nothing
        [ 5705] store the literal value 22294 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5708] play sound effect 261
        [ 5710] do nothing
        [ 5711] store the literal value 22348 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5714] play sound effect 257
        [ 5716] do nothing
        [ 5717] store the literal value 22372 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5720] play sound effect 261
        [ 5722] do nothing
        [ 5723] store the literal value 22427 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5726] play sound effect 262
        [ 5728] do nothing
        [ 5729] store the literal value 22472 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5732] play sound effect 262
        [ 5734] do nothing
        [ 5735] store the literal value 22523 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5738] play sound effect 259
        [ 5740] do nothing
        [ 5741] store the literal value 22606 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5744] do nothing
        [ 5745] store the literal value 22670 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5748] do nothing
        [ 5749] store the literal value 22724 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5752] do nothing
        [ 5753] store the literal value 22796 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5756] play sound effect 258
        [ 5758] do nothing
        [ 5759] store the literal value 22830 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5762] play sound effect 258
        [ 5764] do nothing
        [ 5765] store the literal value 22869 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5768] play sound effect 258
        [ 5770] do nothing
        [ 5771] store the literal value 22908 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5774] play sound effect 258
        [ 5776] do nothing
        [ 5777] store the literal value 22949 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5780] play sound effect 258
        [ 5782] do nothing
        [ 5783] store the literal value 22989 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5786] do nothing
        [ 5787] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5827] display system/chat message #23028: " þ4"
        [ 5829] order unit-slot #11 to move, speed/priority 4, destination-type tag 3, destination arg 13
        [ 5834] set script variable #75 = set_unit_behavior(10, 11)
        [ 5837] set unit-slot #14 = var(75)
        [ 5840] IF NOT(group_condition(14)): GOTO #5849  (else falls through, rejoins #5849)
        [ 5844] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 5849] do nothing
        [ 5850] do nothing
        [ 5851] IF NOT((((var(21) & 7136) == 0) & (var(43) == 0))): GOTO #6224  (else falls through, rejoins #6236)
        [ 5855] set script variable #76 = random_below(100)
        [ 5858] IF NOT(((var(1) == 0) && (var(76) < 4))): GOTO #6125  (else falls through, rejoins #6125)
        [ 5862] set script variable #1 = (var(1) + 1)
        [ 5865] store the literal value 23046 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5868] SWITCH random_below(1): {0->#5871, 1->#5875, 2->#5879, 7->#5883} else #5887
        [ 5871] store the literal value 23047 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5874] do nothing
        [ 5875] store the literal value 23082 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5878] do nothing
        [ 5879] store the literal value 23109 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5882] do nothing
        [ 5883] store the literal value 23148 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5886] do nothing
        [ 5887] store the literal value 23176 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5890] do nothing
        [ 5891] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5901] store the literal value 23229 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5904] set script variable #77 = random_below(4)
        [ 5907] IF NOT(((random_below(1) != 7) && (var(77) >= 3))): GOTO #5914  (else falls through, rejoins #5914)
        [ 5911] set script variable #77 = random_below(3)
        [ 5914] SWITCH var(77): {0->#5917, 1->#5921, 3->#5925, 4->#5929, 5->#5933, 6->#5937, 7->#5941} else #5945
        [ 5917] store the literal value 23230 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5920] do nothing
        [ 5921] store the literal value 23234 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5924] do nothing
        [ 5925] store the literal value 23245 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5928] do nothing
        [ 5929] store the literal value 23266 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5932] do nothing
        [ 5933] store the literal value 23293 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5936] do nothing
        [ 5937] store the literal value 23324 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5940] do nothing
        [ 5941] store the literal value 23353 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5944] do nothing
        [ 5945] store the literal value 23383 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5948] do nothing
        [ 5949] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5965] store the literal value 23398 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5968] SWITCH 7: {1->#5971, 2->#5977, 3->#5983, 4->#5989, 5->#5995, 6->#6001, 7->#6007, 8->#6013, 9->#6019, 10->#6025, 11->#6031, 12->#6037, 13->#6041, 14->#6045, 512->#6049, 32->#6055, 64->#6061, 128->#6067, 256->#6073} else #6079
        [ 5971] store the literal value 23399 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5974] play sound effect 257
        [ 5976] do nothing
        [ 5977] store the literal value 23426 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5980] play sound effect 257
        [ 5982] do nothing
        [ 5983] store the literal value 23452 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5986] play sound effect 260
        [ 5988] do nothing
        [ 5989] store the literal value 23482 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5992] play sound effect 260
        [ 5994] do nothing
        [ 5995] store the literal value 23506 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5998] play sound effect 260
        [ 6000] do nothing
        [ 6001] store the literal value 23531 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6004] play sound effect 261
        [ 6006] do nothing
        [ 6007] store the literal value 23585 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6010] play sound effect 257
        [ 6012] do nothing
        [ 6013] store the literal value 23609 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6016] play sound effect 261
        [ 6018] do nothing
        [ 6019] store the literal value 23664 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6022] play sound effect 262
        [ 6024] do nothing
        [ 6025] store the literal value 23709 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6028] play sound effect 262
        [ 6030] do nothing
        [ 6031] store the literal value 23760 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6034] play sound effect 259
        [ 6036] do nothing
        [ 6037] store the literal value 23843 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6040] do nothing
        [ 6041] store the literal value 23907 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6044] do nothing
        [ 6045] store the literal value 23961 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6048] do nothing
        [ 6049] store the literal value 24033 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6052] play sound effect 258
        [ 6054] do nothing
        [ 6055] store the literal value 24067 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6058] play sound effect 258
        [ 6060] do nothing
        [ 6061] store the literal value 24106 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6064] play sound effect 258
        [ 6066] do nothing
        [ 6067] store the literal value 24145 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6070] play sound effect 258
        [ 6072] do nothing
        [ 6073] store the literal value 24186 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6076] play sound effect 258
        [ 6078] do nothing
        [ 6079] store the literal value 24226 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6082] do nothing
        [ 6083] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6123] display system/chat message #24265: " þ7"
        [ 6125] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#6128, 64->#6146, 128->#6164, 256->#6182} else #6200
        [ 6128] IF NOT(group_condition_ref(1, 11)): GOTO #6136  (else falls through, rejoins #6136)
        [ 6132] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6136] define condition-slot #1 as (variable-ref 1, expression-offset 4433)
        [ 6140] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 6145] do nothing
        [ 6146] IF NOT(group_condition_ref(2, 11)): GOTO #6154  (else falls through, rejoins #6154)
        [ 6150] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6154] define condition-slot #2 as (variable-ref 2, expression-offset 4454)
        [ 6158] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 6163] do nothing
        [ 6164] IF NOT(group_condition_ref(3, 11)): GOTO #6172  (else falls through, rejoins #6172)
        [ 6168] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6172] define condition-slot #3 as (variable-ref 3, expression-offset 4475)
        [ 6176] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 6181] do nothing
        [ 6182] IF NOT(group_condition_ref(4, 11)): GOTO #6190  (else falls through, rejoins #6190)
        [ 6186] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6190] define condition-slot #4 as (variable-ref 4, expression-offset 4496)
        [ 6194] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 6199] do nothing
        [ 6200] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 6205] do nothing
        [ 6206] do nothing
        [ 6207] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6217] IF NOT(((set_unit_behavior(8, 11) & 1024) > 0)): GOTO #6224  (else falls through, rejoins #6224)
        [ 6221] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) - 1024)
        [ 6224] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #6236  (else falls through, rejoins #6236)
        [ 6228] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 6231] order unit-slot #11 to move, speed/priority var(47), destination-type tag 0, destination arg 0
        [ 6236] do nothing
        [ 6237] do nothing
        [ 6238] do nothing
        [ 6239] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 6265] do nothing (message no-op)
        [ 6266] (UNKNOWN OPCODE 0x5edb) - dead end, not decoded further (other branches continue independently)
        [ 6272] ONCE(((any_group_alive(2) || any_group_alive(1)) || !all_group_alive(1)), flag[1]): run block below -> #6277
        [ 6276] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6277] ONCE((timer_expired(3) && (var(3) > 0)), flag[2]): run block below -> #6283
        [ 6281] display system/chat message #24313: "Mobile defense node threatened. Call all nearby units from defense pool."
        [ 6283] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6284] IF NOT(any_group_alive(2)): GOTO #6295  (else falls through, rejoins #6300)
            [ 6288] play sound effect 35
            [ 6290] display system/chat message #24386: "You rock, dude!"
            [ 6292] set the objective state of unit 1 to 1
            [ 6295] display system/chat message #24402: "Mission failed! You suck!"
            [ 6297] set the objective state of unit 1 to 2
            [ 6300] advance to the next scenario phase (no effect if already at the last phase)
            [ 6301] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
