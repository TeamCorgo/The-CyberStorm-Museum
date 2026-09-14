# SIT601.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=610, phase1=620, phase2=1594, phase3=5401
; 17569 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = 3
[    3] set script variable #4 = 0
[    6] set script variable #6 = 0
[    9] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   10] set the objective state of unit 1 to 2
    [   13] IF NOT((var(9) == 0)): GOTO #20  (else falls through, rejoins #20)
    [   17] set script variable #9 = (random_below(var(21)) + var(22))
    [   20] set script variable #14 = stat(9)
    [   23] set script variable #12 = (stat(8) - 1)
    [   26] set script variable #13 = stat(10)
    [   29] set script variable #17 = ((13 - var(12)) - var(13))
    [   32] IF NOT((var(17) < 0)): GOTO #39  (else falls through, rejoins #39)
    [   36] set script variable #17 = 0
    [   39] set script variable #23 = 1
    [   42] set script variable #24 = 1
    [   45] WHILE (var(23) <= var(12)): loop below; exit -> #110 (500-iteration guard)
    [   48] SWITCH var(23): {1->#51, 2->#55, 3->#59, 4->#63, 5->#67, 6->#71, 7->#75, 8->#79} else #83
    [   51] set script variable #24 = 1
    [   54] do nothing
    [   55] set script variable #24 = 2
    [   58] do nothing
    [   59] set script variable #24 = 4
    [   62] do nothing
    [   63] set script variable #24 = 8
    [   66] do nothing
    [   67] set script variable #24 = 16
    [   70] do nothing
    [   71] set script variable #24 = 32
    [   74] do nothing
    [   75] set script variable #24 = 64
    [   78] do nothing
    [   79] set script variable #24 = 128
    [   82] do nothing
    [   83] do nothing
    [   84] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
    [  102] set script variable #10 = (var(10) + var(24))
    [  105] set script variable #23 = (var(23) + 1)
    [  108] GOTO #48
    [  110] set script variable #25 = (((360 / var(12)) * var(14)) + (var(12) + (var(13) * 2)))
    [  113] set script variable #26 = ((31 - var(17)) - 3)
    [  116] set hex-var #8 = the point (var(25) - 180) steps along the path toward var(26)
    [  120] set script variable #27 = stat(7)
    [  123] set script variable #28 = random_below((var(12) - 1))
    [  126] set script variable #29 = (var(28) + 1)
    [  129] set script variable #30 = (((360 / var(12)) * var(28)) + (var(12) + (var(13) * 2)))
    [  132] set script variable #31 = (((360 / var(12)) * var(29)) + (var(12) + (var(13) * 2)))
    [  135] set script variable #32 = ((var(30) + var(31)) / 2)
    [  138] set script variable #33 = 1
    [  141] set hex-var #10 = (0, 0)
    [  145] set script variable #36 = set_objective_at_hex(6)
    [  148] WHILE (var(33) <= var(12)): loop below; exit -> #224 (500-iteration guard)
    [  151] set script variable #37 = random_below(180)
    [  154] set script variable #35 = var(26)
    [  157] set script variable #34 = (((360 / var(12)) * var(33)) + (var(12) + (var(13) * 2)))
    [  160] IF NOT((var(12) == 2)): GOTO #167  (else falls through, rejoins #167)
    [  164] set script variable #34 = ((var(34) - 90) + var(37))
    [  167] IF NOT((var(12) == 3)): GOTO #174  (else falls through, rejoins #174)
    [  171] set script variable #34 = ((var(34) - 60) + (var(37) / 2))
    [  174] set hex-var #9 = the point (var(34) - 180) steps along the path toward var(35)
    [  178] IF NOT((var(27) == 1)): GOTO #208  (else falls through, rejoins #219)
    [  182] IF NOT((var(33) == var(14))): GOTO #197  (else falls through, rejoins #208)
    [  186] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(33)) at hex-ref #9, remember it as unit-slot #7
    [  191] place an objective marker at hex-var #9 with params ((random_below(3) + var(36)) - 1), 6, 8, 50
    [  197] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(33)) at hex-ref #9, remember it as unit-slot #6
    [  202] place an objective marker at hex-var #9 with params ((random_below(3) + var(36)) - 1), 6, 8, 50
    [  208] spawn a unit of type 31 (stationary structure/turret) (minimum weapon range var(33)) at hex-ref #9, remember it as unit-slot #6
    [  213] place an objective marker at hex-var #9 with params ((random_below(3) + var(36)) - 1), 6, 8, 50
    [  219] set script variable #33 = (var(33) + 1)
    [  222] GOTO #151
    [  224] IF NOT((var(9) == 0)): GOTO #231  (else falls through, rejoins #231)
    [  228] set script variable #9 = (random_below(var(38)) + var(39))
    [  231] set script variable #19 = (stat(0) / 1)
    [  234] set script variable #19 = (var(19) - 200)
    [  237] set script variable #23 = 8192
    [  240] WHILE (var(23) > 500): loop below; exit -> #255 (500-iteration guard)
    [  243] IF NOT((var(19) < var(23))): GOTO #250  (else falls through, rejoins #250)
    [  247] set script variable #17 = (var(17) + 1)
    [  250] set script variable #23 = (var(23) / 3)
    [  253] GOTO #243
    [  255] IF NOT((var(19) > 50)): GOTO #276  (else falls through, rejoins #279)
    [  259] set script variable #18 = (var(19) / 4)
    [  262] IF NOT((var(18) < 50)): GOTO #269  (else falls through, rejoins #276)
    [  266] set script variable #18 = 50
    [  269] IF NOT((var(18) > 1200)): GOTO #276  (else falls through, rejoins #276)
    [  273] set script variable #18 = 1200
    [  276] set script variable #18 = var(19)
    [  279] set script variable #19 = (var(19) - var(18))
    [  282] set script variable #40 = 0
    [  285] set script variable #41 = 12
    [  288] set script variable #42 = 27
    [  291] set script variable #43 = 45
    [  294] set script variable #44 = 90
    [  297] IF NOT((var(41) > (var(17) + 5))): GOTO #304  (else falls through, rejoins #307)
    [  301] set script variable #41 = (var(41) - var(17))
    [  304] set script variable #41 = 5
    [  307] IF NOT((var(42) > (var(17) + 10))): GOTO #314  (else falls through, rejoins #317)
    [  311] set script variable #42 = (var(42) - var(17))
    [  314] set script variable #42 = 10
    [  317] IF NOT((var(12) == 1)): GOTO #324  (else falls through, rejoins #324)
    [  321] set script variable #32 = ((var(34) - 60) + random_below(90))
    [  324] IF NOT((var(40) == 0)): GOTO #331  (else falls through, rejoins #331)
    [  328] set script variable #40 = (var(41) + random_below((var(42) - var(41))))
    [  331] IF NOT((var(32) == 0)): GOTO #338  (else falls through, rejoins #338)
    [  335] set script variable #32 = ((random_below(var(44)) + var(43)) - (var(44) / 2))
    [  338] set hex-var #5 = the point var(32) steps along the path toward var(40)
    [  342] do nothing (message no-op)
    [  343] (UNKNOWN OPCODE 0x00b7) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  984] set script variable #16 = 0
        [  987] IF NOT(timer_expired(2)): GOTO #4516  (else falls through, rejoins #4516)
        [  991] arm timer #2 to expire 1 turn(s) from now
        [  994] set script variable #8 = 0
        [  997] IF NOT(group_all_alive(7)): GOTO #1001  (else falls through, rejoins #1001)
        [ 1001] set script variable #56 = 0
        [ 1004] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1007] WHILE set_unit_behavior(0, 9): loop below; exit -> #1296 (500-iteration guard)
        [ 1010] IF NOT((set_unit_behavior(9, 9) > 0)): GOTO #1291  (else falls through, rejoins #1291)
        [ 1014] set script variable #57 = random_below(100)
        [ 1017] IF NOT(((var(8) == 0) && (var(57) < 4))): GOTO #1284  (else falls through, rejoins #1284)
        [ 1021] set script variable #8 = (var(8) + 1)
        [ 1024] store the literal value 1572 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1027] SWITCH random_below(4): {0->#1030, 1->#1034, 2->#1038, 7->#1042} else #1046
        [ 1030] store the literal value 1573 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1033] do nothing
        [ 1034] store the literal value 1608 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1037] do nothing
        [ 1038] store the literal value 1635 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1041] do nothing
        [ 1042] store the literal value 1674 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1045] do nothing
        [ 1046] store the literal value 1702 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1049] do nothing
        [ 1050] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1060] store the literal value 1755 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1063] set script variable #58 = random_below(1)
        [ 1066] IF NOT(((random_below(4) != 7) && (var(58) >= 3))): GOTO #1073  (else falls through, rejoins #1073)
        [ 1070] set script variable #58 = random_below(3)
        [ 1073] SWITCH var(58): {0->#1076, 1->#1080, 3->#1084, 4->#1088, 5->#1092, 6->#1096, 7->#1100} else #1104
        [ 1076] store the literal value 1756 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1079] do nothing
        [ 1080] store the literal value 1760 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1083] do nothing
        [ 1084] store the literal value 1771 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1087] do nothing
        [ 1088] store the literal value 1792 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1091] do nothing
        [ 1092] store the literal value 1819 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1095] do nothing
        [ 1096] store the literal value 1850 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1099] do nothing
        [ 1100] store the literal value 1879 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1103] do nothing
        [ 1104] store the literal value 1909 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1107] do nothing
        [ 1108] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1124] store the literal value 1924 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1127] SWITCH 10: {1->#1130, 2->#1136, 3->#1142, 4->#1148, 5->#1154, 6->#1160, 7->#1166, 8->#1172, 9->#1178, 10->#1184, 11->#1190, 12->#1196, 13->#1200, 14->#1204, 512->#1208, 32->#1214, 64->#1220, 128->#1226, 256->#1232} else #1238
        [ 1130] store the literal value 1925 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1133] play sound effect 257
        [ 1135] do nothing
        [ 1136] store the literal value 1952 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1139] play sound effect 257
        [ 1141] do nothing
        [ 1142] store the literal value 1978 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1145] play sound effect 260
        [ 1147] do nothing
        [ 1148] store the literal value 2008 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1151] play sound effect 260
        [ 1153] do nothing
        [ 1154] store the literal value 2032 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1157] play sound effect 260
        [ 1159] do nothing
        [ 1160] store the literal value 2057 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1163] play sound effect 261
        [ 1165] do nothing
        [ 1166] store the literal value 2111 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1169] play sound effect 257
        [ 1171] do nothing
        [ 1172] store the literal value 2135 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1175] play sound effect 261
        [ 1177] do nothing
        [ 1178] store the literal value 2190 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1181] play sound effect 262
        [ 1183] do nothing
        [ 1184] store the literal value 2235 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1187] play sound effect 262
        [ 1189] do nothing
        [ 1190] store the literal value 2286 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1193] play sound effect 259
        [ 1195] do nothing
        [ 1196] store the literal value 2369 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1199] do nothing
        [ 1200] store the literal value 2433 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1203] do nothing
        [ 1204] store the literal value 2487 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1207] do nothing
        [ 1208] store the literal value 2559 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1211] play sound effect 258
        [ 1213] do nothing
        [ 1214] store the literal value 2593 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1217] play sound effect 258
        [ 1219] do nothing
        [ 1220] store the literal value 2632 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1223] play sound effect 258
        [ 1225] do nothing
        [ 1226] store the literal value 2671 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1229] play sound effect 258
        [ 1231] do nothing
        [ 1232] store the literal value 2712 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1235] play sound effect 258
        [ 1237] do nothing
        [ 1238] store the literal value 2752 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1241] do nothing
        [ 1242] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1282] display system/chat message #2791: " þ"
        [ 1284] IF NOT(((set_unit_behavior(8, 9) & var(20)) == 0)): GOTO #1291  (else falls through, rejoins #1291)
        [ 1288] set script variable #20 = (var(20) + (set_unit_behavior(8, 9) & 7136))
        [ 1291] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 1294] GOTO #1010
        [ 1296] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 1299] WHILE set_unit_behavior(0, 1): loop below; exit -> #1330 (500-iteration guard)
        [ 1302] IF NOT(group_condition_ref_2(7, 2)): GOTO #1309  (else falls through, rejoins #1316)
        [ 1306] set attribute #8 of unit-slot #1 to 2
        [ 1309] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1316  (else falls through, rejoins #1316)
        [ 1313] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1316] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1325  (else falls through, rejoins #1325)
        [ 1320] set script variable #56 = (var(56) + 1)
        [ 1323] do nothing (message no-op)
        [ 1324] (UNKNOWN OPCODE 0x0af9) - dead end, not decoded further (other branches continue independently)
        [ 1325] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1328] GOTO #1302
        [ 1330] IF NOT(group_condition_ref_2(8, 2)): GOTO #1337  (else falls through, rejoins #1344)
        [ 1334] set attribute #8 of unit-slot #1 to 2
        [ 1337] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1344  (else falls through, rejoins #1344)
        [ 1341] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1344] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1353  (else falls through, rejoins #1353)
        [ 1348] set script variable #56 = (var(56) + 1)
        [ 1351] do nothing (message no-op)
        [ 1352] (UNKNOWN OPCODE 0x0b0c) - dead end, not decoded further (other branches continue independently)
        [ 1353] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1356] set script variable #60 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 1359] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1362] WHILE set_unit_behavior(0, 9): loop below; exit -> #4516 (500-iteration guard)
        [ 1365] IF NOT((set_unit_behavior(5, 9) < 60)): GOTO #1374  (else falls through, rejoins #4511)
        [ 1369] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 1374] SWITCH (set_unit_behavior(8, 9) & 15): {0->#1377, 1->#1660, 2->#2493, 3->#3052, 4->#3062, 5->#3107, 10->#3392, 11->#3402, 12->#3800, 13->#3801, 14->#4096, 15->#4097} else #4483
        [ 1377] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #1659  (else falls through, rejoins #1659)
        [ 1381] set script variable #61 = random_below(100)
        [ 1384] IF NOT(((var(8) == 0) && (var(61) < 40))): GOTO #1651  (else falls through, rejoins #1651)
        [ 1388] set script variable #8 = (var(8) + 1)
        [ 1391] store the literal value 2847 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1394] SWITCH random_below(1): {0->#1397, 1->#1401, 2->#1405, 7->#1409} else #1413
        [ 1397] store the literal value 2848 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1400] do nothing
        [ 1401] store the literal value 2883 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1404] do nothing
        [ 1405] store the literal value 2910 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1408] do nothing
        [ 1409] store the literal value 2949 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1412] do nothing
        [ 1413] store the literal value 2977 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1416] do nothing
        [ 1417] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1427] store the literal value 3030 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1430] set script variable #62 = random_below(4)
        [ 1433] IF NOT(((random_below(1) != 7) && (var(62) >= 3))): GOTO #1440  (else falls through, rejoins #1440)
        [ 1437] set script variable #62 = random_below(3)
        [ 1440] SWITCH var(62): {0->#1443, 1->#1447, 3->#1451, 4->#1455, 5->#1459, 6->#1463, 7->#1467} else #1471
        [ 1443] store the literal value 3031 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1446] do nothing
        [ 1447] store the literal value 3035 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1450] do nothing
        [ 1451] store the literal value 3046 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1454] do nothing
        [ 1455] store the literal value 3067 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1458] do nothing
        [ 1459] store the literal value 3094 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1462] do nothing
        [ 1463] store the literal value 3125 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1466] do nothing
        [ 1467] store the literal value 3154 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1470] do nothing
        [ 1471] store the literal value 3184 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1474] do nothing
        [ 1475] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1491] store the literal value 3199 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1494] SWITCH 8: {1->#1497, 2->#1503, 3->#1509, 4->#1515, 5->#1521, 6->#1527, 7->#1533, 8->#1539, 9->#1545, 10->#1551, 11->#1557, 12->#1563, 13->#1567, 14->#1571, 512->#1575, 32->#1581, 64->#1587, 128->#1593, 256->#1599} else #1605
        [ 1497] store the literal value 3200 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1500] play sound effect 257
        [ 1502] do nothing
        [ 1503] store the literal value 3227 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1506] play sound effect 257
        [ 1508] do nothing
        [ 1509] store the literal value 3253 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1512] play sound effect 260
        [ 1514] do nothing
        [ 1515] store the literal value 3283 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1518] play sound effect 260
        [ 1520] do nothing
        [ 1521] store the literal value 3307 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1524] play sound effect 260
        [ 1526] do nothing
        [ 1527] store the literal value 3332 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1530] play sound effect 261
        [ 1532] do nothing
        [ 1533] store the literal value 3386 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1536] play sound effect 257
        [ 1538] do nothing
        [ 1539] store the literal value 3410 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1542] play sound effect 261
        [ 1544] do nothing
        [ 1545] store the literal value 3465 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1548] play sound effect 262
        [ 1550] do nothing
        [ 1551] store the literal value 3510 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1554] play sound effect 262
        [ 1556] do nothing
        [ 1557] store the literal value 3561 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1560] play sound effect 259
        [ 1562] do nothing
        [ 1563] store the literal value 3644 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1566] do nothing
        [ 1567] store the literal value 3708 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1570] do nothing
        [ 1571] store the literal value 3762 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1574] do nothing
        [ 1575] store the literal value 3834 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1578] play sound effect 258
        [ 1580] do nothing
        [ 1581] store the literal value 3868 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1584] play sound effect 258
        [ 1586] do nothing
        [ 1587] store the literal value 3907 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1590] play sound effect 258
        [ 1592] do nothing
        [ 1593] store the literal value 3946 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1596] play sound effect 258
        [ 1598] do nothing
        [ 1599] store the literal value 3987 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1602] play sound effect 258
        [ 1604] do nothing
        [ 1605] store the literal value 4027 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1608] do nothing
        [ 1609] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1649] display system/chat message #4066: " þ"
        [ 1651] order unit-slot #9 to move, speed/priority var(60), destination-type tag 0, destination arg 0
        [ 1656] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 1659] do nothing
        [ 1660] IF NOT((group_condition_ref_2(9, 1) || (set_unit_behavior(9, 9) != 0))): GOTO #1943  (else falls through, rejoins #2492)
        [ 1664] IF NOT((set_unit_behavior(7, 9) != 6)): GOTO #1943  (else falls through, rejoins #1943)
        [ 1668] set script variable #64 = random_below(100)
        [ 1671] IF NOT(((var(8) == 0) && (var(64) < 40))): GOTO #1938  (else falls through, rejoins #1938)
        [ 1675] set script variable #8 = (var(8) + 1)
        [ 1678] store the literal value 4084 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1681] SWITCH random_below(1): {0->#1684, 1->#1688, 2->#1692, 7->#1696} else #1700
        [ 1684] store the literal value 4085 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1687] do nothing
        [ 1688] store the literal value 4120 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1691] do nothing
        [ 1692] store the literal value 4147 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1695] do nothing
        [ 1696] store the literal value 4186 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1699] do nothing
        [ 1700] store the literal value 4214 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1703] do nothing
        [ 1704] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1714] store the literal value 4267 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1717] set script variable #65 = random_below(4)
        [ 1720] IF NOT(((random_below(1) != 7) && (var(65) >= 3))): GOTO #1727  (else falls through, rejoins #1727)
        [ 1724] set script variable #65 = random_below(3)
        [ 1727] SWITCH var(65): {0->#1730, 1->#1734, 3->#1738, 4->#1742, 5->#1746, 6->#1750, 7->#1754} else #1758
        [ 1730] store the literal value 4268 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1733] do nothing
        [ 1734] store the literal value 4272 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1737] do nothing
        [ 1738] store the literal value 4283 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1741] do nothing
        [ 1742] store the literal value 4304 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1745] do nothing
        [ 1746] store the literal value 4331 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1749] do nothing
        [ 1750] store the literal value 4362 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1753] do nothing
        [ 1754] store the literal value 4391 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1757] do nothing
        [ 1758] store the literal value 4421 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1761] do nothing
        [ 1762] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1778] store the literal value 4436 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1781] SWITCH 3: {1->#1784, 2->#1790, 3->#1796, 4->#1802, 5->#1808, 6->#1814, 7->#1820, 8->#1826, 9->#1832, 10->#1838, 11->#1844, 12->#1850, 13->#1854, 14->#1858, 512->#1862, 32->#1868, 64->#1874, 128->#1880, 256->#1886} else #1892
        [ 1784] store the literal value 4437 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1787] play sound effect 257
        [ 1789] do nothing
        [ 1790] store the literal value 4464 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1793] play sound effect 257
        [ 1795] do nothing
        [ 1796] store the literal value 4490 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1799] play sound effect 260
        [ 1801] do nothing
        [ 1802] store the literal value 4520 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1805] play sound effect 260
        [ 1807] do nothing
        [ 1808] store the literal value 4544 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1811] play sound effect 260
        [ 1813] do nothing
        [ 1814] store the literal value 4569 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1817] play sound effect 261
        [ 1819] do nothing
        [ 1820] store the literal value 4623 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1823] play sound effect 257
        [ 1825] do nothing
        [ 1826] store the literal value 4647 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1829] play sound effect 261
        [ 1831] do nothing
        [ 1832] store the literal value 4702 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1835] play sound effect 262
        [ 1837] do nothing
        [ 1838] store the literal value 4747 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1841] play sound effect 262
        [ 1843] do nothing
        [ 1844] store the literal value 4798 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1847] play sound effect 259
        [ 1849] do nothing
        [ 1850] store the literal value 4881 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1853] do nothing
        [ 1854] store the literal value 4945 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1857] do nothing
        [ 1858] store the literal value 4999 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1861] do nothing
        [ 1862] store the literal value 5071 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1865] play sound effect 258
        [ 1867] do nothing
        [ 1868] store the literal value 5105 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1871] play sound effect 258
        [ 1873] do nothing
        [ 1874] store the literal value 5144 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1877] play sound effect 258
        [ 1879] do nothing
        [ 1880] store the literal value 5183 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1883] play sound effect 258
        [ 1885] do nothing
        [ 1886] store the literal value 5224 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1889] play sound effect 258
        [ 1891] do nothing
        [ 1892] store the literal value 5264 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1895] do nothing
        [ 1896] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1936] display system/chat message #5303: " þ
"
        [ 1938] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 1943] IF NOT((set_unit_behavior(7, 9) != 2)): GOTO #2222  (else falls through, rejoins #2492)
        [ 1947] order unit-slot #9 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 1952] set script variable #67 = random_below(100)
        [ 1955] IF NOT(((var(8) == 0) && (var(67) < 4))): GOTO #2222  (else falls through, rejoins #2222)
        [ 1959] set script variable #8 = (var(8) + 1)
        [ 1962] store the literal value 5321 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1965] SWITCH random_below(1): {0->#1968, 1->#1972, 2->#1976, 7->#1980} else #1984
        [ 1968] store the literal value 5322 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1971] do nothing
        [ 1972] store the literal value 5357 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1975] do nothing
        [ 1976] store the literal value 5384 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1979] do nothing
        [ 1980] store the literal value 5423 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1983] do nothing
        [ 1984] store the literal value 5451 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1987] do nothing
        [ 1988] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1998] store the literal value 5504 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2001] set script variable #68 = random_below(4)
        [ 2004] IF NOT(((random_below(1) != 7) && (var(68) >= 3))): GOTO #2011  (else falls through, rejoins #2011)
        [ 2008] set script variable #68 = random_below(3)
        [ 2011] SWITCH var(68): {0->#2014, 1->#2018, 3->#2022, 4->#2026, 5->#2030, 6->#2034, 7->#2038} else #2042
        [ 2014] store the literal value 5505 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2017] do nothing
        [ 2018] store the literal value 5509 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2021] do nothing
        [ 2022] store the literal value 5520 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2025] do nothing
        [ 2026] store the literal value 5541 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2029] do nothing
        [ 2030] store the literal value 5568 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2033] do nothing
        [ 2034] store the literal value 5599 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2037] do nothing
        [ 2038] store the literal value 5628 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2041] do nothing
        [ 2042] store the literal value 5658 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2045] do nothing
        [ 2046] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2062] store the literal value 5673 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2065] SWITCH 2: {1->#2068, 2->#2074, 3->#2080, 4->#2086, 5->#2092, 6->#2098, 7->#2104, 8->#2110, 9->#2116, 10->#2122, 11->#2128, 12->#2134, 13->#2138, 14->#2142, 512->#2146, 32->#2152, 64->#2158, 128->#2164, 256->#2170} else #2176
        [ 2068] store the literal value 5674 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2071] play sound effect 257
        [ 2073] do nothing
        [ 2074] store the literal value 5701 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2077] play sound effect 257
        [ 2079] do nothing
        [ 2080] store the literal value 5727 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2083] play sound effect 260
        [ 2085] do nothing
        [ 2086] store the literal value 5757 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2089] play sound effect 260
        [ 2091] do nothing
        [ 2092] store the literal value 5781 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2095] play sound effect 260
        [ 2097] do nothing
        [ 2098] store the literal value 5806 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2101] play sound effect 261
        [ 2103] do nothing
        [ 2104] store the literal value 5860 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2107] play sound effect 257
        [ 2109] do nothing
        [ 2110] store the literal value 5884 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2113] play sound effect 261
        [ 2115] do nothing
        [ 2116] store the literal value 5939 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2119] play sound effect 262
        [ 2121] do nothing
        [ 2122] store the literal value 5984 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2125] play sound effect 262
        [ 2127] do nothing
        [ 2128] store the literal value 6035 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2131] play sound effect 259
        [ 2133] do nothing
        [ 2134] store the literal value 6118 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2137] do nothing
        [ 2138] store the literal value 6182 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2141] do nothing
        [ 2142] store the literal value 6236 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2145] do nothing
        [ 2146] store the literal value 6308 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2149] play sound effect 258
        [ 2151] do nothing
        [ 2152] store the literal value 6342 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2155] play sound effect 258
        [ 2157] do nothing
        [ 2158] store the literal value 6381 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2161] play sound effect 258
        [ 2163] do nothing
        [ 2164] store the literal value 6420 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2167] play sound effect 258
        [ 2169] do nothing
        [ 2170] store the literal value 6461 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2173] play sound effect 258
        [ 2175] do nothing
        [ 2176] store the literal value 6501 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2179] do nothing
        [ 2180] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2220] display system/chat message #6540: " þ"
        [ 2222] set script variable #70 = random_below(100)
        [ 2225] IF NOT(((var(8) == 0) && (var(70) < 4))): GOTO #2492  (else falls through, rejoins #2492)
        [ 2229] set script variable #8 = (var(8) + 1)
        [ 2232] store the literal value 6558 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2235] SWITCH random_below(1): {0->#2238, 1->#2242, 2->#2246, 7->#2250} else #2254
        [ 2238] store the literal value 6559 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2241] do nothing
        [ 2242] store the literal value 6594 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2245] do nothing
        [ 2246] store the literal value 6621 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2249] do nothing
        [ 2250] store the literal value 6660 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2253] do nothing
        [ 2254] store the literal value 6688 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2257] do nothing
        [ 2258] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2268] store the literal value 6741 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2271] set script variable #71 = random_below(4)
        [ 2274] IF NOT(((random_below(1) != 7) && (var(71) >= 3))): GOTO #2281  (else falls through, rejoins #2281)
        [ 2278] set script variable #71 = random_below(3)
        [ 2281] SWITCH var(71): {0->#2284, 1->#2288, 3->#2292, 4->#2296, 5->#2300, 6->#2304, 7->#2308} else #2312
        [ 2284] store the literal value 6742 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2287] do nothing
        [ 2288] store the literal value 6746 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2291] do nothing
        [ 2292] store the literal value 6757 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2295] do nothing
        [ 2296] store the literal value 6778 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2299] do nothing
        [ 2300] store the literal value 6805 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2303] do nothing
        [ 2304] store the literal value 6836 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2307] do nothing
        [ 2308] store the literal value 6865 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2311] do nothing
        [ 2312] store the literal value 6895 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2315] do nothing
        [ 2316] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2332] store the literal value 6910 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2335] SWITCH 1: {1->#2338, 2->#2344, 3->#2350, 4->#2356, 5->#2362, 6->#2368, 7->#2374, 8->#2380, 9->#2386, 10->#2392, 11->#2398, 12->#2404, 13->#2408, 14->#2412, 512->#2416, 32->#2422, 64->#2428, 128->#2434, 256->#2440} else #2446
        [ 2338] store the literal value 6911 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2341] play sound effect 257
        [ 2343] do nothing
        [ 2344] store the literal value 6938 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2347] play sound effect 257
        [ 2349] do nothing
        [ 2350] store the literal value 6964 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2353] play sound effect 260
        [ 2355] do nothing
        [ 2356] store the literal value 6994 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2359] play sound effect 260
        [ 2361] do nothing
        [ 2362] store the literal value 7018 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2365] play sound effect 260
        [ 2367] do nothing
        [ 2368] store the literal value 7043 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2371] play sound effect 261
        [ 2373] do nothing
        [ 2374] store the literal value 7097 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2377] play sound effect 257
        [ 2379] do nothing
        [ 2380] store the literal value 7121 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2383] play sound effect 261
        [ 2385] do nothing
        [ 2386] store the literal value 7176 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2389] play sound effect 262
        [ 2391] do nothing
        [ 2392] store the literal value 7221 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2395] play sound effect 262
        [ 2397] do nothing
        [ 2398] store the literal value 7272 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2401] play sound effect 259
        [ 2403] do nothing
        [ 2404] store the literal value 7355 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2407] do nothing
        [ 2408] store the literal value 7419 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2411] do nothing
        [ 2412] store the literal value 7473 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2415] do nothing
        [ 2416] store the literal value 7545 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2419] play sound effect 258
        [ 2421] do nothing
        [ 2422] store the literal value 7579 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2425] play sound effect 258
        [ 2427] do nothing
        [ 2428] store the literal value 7618 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2431] play sound effect 258
        [ 2433] do nothing
        [ 2434] store the literal value 7657 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2437] play sound effect 258
        [ 2439] do nothing
        [ 2440] store the literal value 7698 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2443] play sound effect 258
        [ 2445] do nothing
        [ 2446] store the literal value 7738 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2449] do nothing
        [ 2450] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2490] display system/chat message #7777: " þ"
        [ 2492] do nothing
        [ 2493] IF NOT(((var(20) & 512) > 0)): GOTO #2772  (else falls through, rejoins #3051)
        [ 2497] set script variable #73 = random_below(100)
        [ 2500] IF NOT(((var(8) == 0) && (var(73) < 4))): GOTO #2767  (else falls through, rejoins #2767)
        [ 2504] set script variable #8 = (var(8) + 1)
        [ 2507] store the literal value 7795 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2510] SWITCH random_below(1): {0->#2513, 1->#2517, 2->#2521, 7->#2525} else #2529
        [ 2513] store the literal value 7796 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2516] do nothing
        [ 2517] store the literal value 7831 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2520] do nothing
        [ 2521] store the literal value 7858 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2524] do nothing
        [ 2525] store the literal value 7897 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2528] do nothing
        [ 2529] store the literal value 7925 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2532] do nothing
        [ 2533] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2543] store the literal value 7978 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2546] set script variable #74 = random_below(4)
        [ 2549] IF NOT(((random_below(1) != 7) && (var(74) >= 3))): GOTO #2556  (else falls through, rejoins #2556)
        [ 2553] set script variable #74 = random_below(3)
        [ 2556] SWITCH var(74): {0->#2559, 1->#2563, 3->#2567, 4->#2571, 5->#2575, 6->#2579, 7->#2583} else #2587
        [ 2559] store the literal value 7979 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2562] do nothing
        [ 2563] store the literal value 7983 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2566] do nothing
        [ 2567] store the literal value 7994 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2570] do nothing
        [ 2571] store the literal value 8015 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2574] do nothing
        [ 2575] store the literal value 8042 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2578] do nothing
        [ 2579] store the literal value 8073 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2582] do nothing
        [ 2583] store the literal value 8102 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2586] do nothing
        [ 2587] store the literal value 8132 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2590] do nothing
        [ 2591] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2607] store the literal value 8147 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2610] SWITCH 4: {1->#2613, 2->#2619, 3->#2625, 4->#2631, 5->#2637, 6->#2643, 7->#2649, 8->#2655, 9->#2661, 10->#2667, 11->#2673, 12->#2679, 13->#2683, 14->#2687, 512->#2691, 32->#2697, 64->#2703, 128->#2709, 256->#2715} else #2721
        [ 2613] store the literal value 8148 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2616] play sound effect 257
        [ 2618] do nothing
        [ 2619] store the literal value 8175 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2622] play sound effect 257
        [ 2624] do nothing
        [ 2625] store the literal value 8201 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2628] play sound effect 260
        [ 2630] do nothing
        [ 2631] store the literal value 8231 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2634] play sound effect 260
        [ 2636] do nothing
        [ 2637] store the literal value 8255 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2640] play sound effect 260
        [ 2642] do nothing
        [ 2643] store the literal value 8280 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2646] play sound effect 261
        [ 2648] do nothing
        [ 2649] store the literal value 8334 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2652] play sound effect 257
        [ 2654] do nothing
        [ 2655] store the literal value 8358 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2658] play sound effect 261
        [ 2660] do nothing
        [ 2661] store the literal value 8413 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2664] play sound effect 262
        [ 2666] do nothing
        [ 2667] store the literal value 8458 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2670] play sound effect 262
        [ 2672] do nothing
        [ 2673] store the literal value 8509 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2676] play sound effect 259
        [ 2678] do nothing
        [ 2679] store the literal value 8592 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2682] do nothing
        [ 2683] store the literal value 8656 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2686] do nothing
        [ 2687] store the literal value 8710 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2690] do nothing
        [ 2691] store the literal value 8782 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2694] play sound effect 258
        [ 2696] do nothing
        [ 2697] store the literal value 8816 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2700] play sound effect 258
        [ 2702] do nothing
        [ 2703] store the literal value 8855 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2706] play sound effect 258
        [ 2708] do nothing
        [ 2709] store the literal value 8894 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2712] play sound effect 258
        [ 2714] do nothing
        [ 2715] store the literal value 8935 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2718] play sound effect 258
        [ 2720] do nothing
        [ 2721] store the literal value 8975 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2724] do nothing
        [ 2725] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2765] display system/chat message #9014: " þ"
        [ 2767] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2772] IF NOT(((var(20) & 128) > 0)): GOTO #3051  (else falls through, rejoins #3051)
        [ 2776] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 2781] set script variable #76 = random_below(100)
        [ 2784] IF NOT(((var(8) == 0) && (var(76) < 4))): GOTO #3051  (else falls through, rejoins #3051)
        [ 2788] set script variable #8 = (var(8) + 1)
        [ 2791] store the literal value 9032 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2794] SWITCH random_below(1): {0->#2797, 1->#2801, 2->#2805, 7->#2809} else #2813
        [ 2797] store the literal value 9033 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2800] do nothing
        [ 2801] store the literal value 9068 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2804] do nothing
        [ 2805] store the literal value 9095 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2808] do nothing
        [ 2809] store the literal value 9134 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2812] do nothing
        [ 2813] store the literal value 9162 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2816] do nothing
        [ 2817] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2827] store the literal value 9215 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2830] set script variable #77 = random_below(4)
        [ 2833] IF NOT(((random_below(1) != 7) && (var(77) >= 3))): GOTO #2840  (else falls through, rejoins #2840)
        [ 2837] set script variable #77 = random_below(3)
        [ 2840] SWITCH var(77): {0->#2843, 1->#2847, 3->#2851, 4->#2855, 5->#2859, 6->#2863, 7->#2867} else #2871
        [ 2843] store the literal value 9216 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2846] do nothing
        [ 2847] store the literal value 9220 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2850] do nothing
        [ 2851] store the literal value 9231 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2854] do nothing
        [ 2855] store the literal value 9252 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2858] do nothing
        [ 2859] store the literal value 9279 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2862] do nothing
        [ 2863] store the literal value 9310 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2866] do nothing
        [ 2867] store the literal value 9339 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2870] do nothing
        [ 2871] store the literal value 9369 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2874] do nothing
        [ 2875] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2891] store the literal value 9384 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2894] SWITCH 5: {1->#2897, 2->#2903, 3->#2909, 4->#2915, 5->#2921, 6->#2927, 7->#2933, 8->#2939, 9->#2945, 10->#2951, 11->#2957, 12->#2963, 13->#2967, 14->#2971, 512->#2975, 32->#2981, 64->#2987, 128->#2993, 256->#2999} else #3005
        [ 2897] store the literal value 9385 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2900] play sound effect 257
        [ 2902] do nothing
        [ 2903] store the literal value 9412 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2906] play sound effect 257
        [ 2908] do nothing
        [ 2909] store the literal value 9438 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2912] play sound effect 260
        [ 2914] do nothing
        [ 2915] store the literal value 9468 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2918] play sound effect 260
        [ 2920] do nothing
        [ 2921] store the literal value 9492 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2924] play sound effect 260
        [ 2926] do nothing
        [ 2927] store the literal value 9517 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2930] play sound effect 261
        [ 2932] do nothing
        [ 2933] store the literal value 9571 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2936] play sound effect 257
        [ 2938] do nothing
        [ 2939] store the literal value 9595 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2942] play sound effect 261
        [ 2944] do nothing
        [ 2945] store the literal value 9650 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2948] play sound effect 262
        [ 2950] do nothing
        [ 2951] store the literal value 9695 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2954] play sound effect 262
        [ 2956] do nothing
        [ 2957] store the literal value 9746 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2960] play sound effect 259
        [ 2962] do nothing
        [ 2963] store the literal value 9829 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2966] do nothing
        [ 2967] store the literal value 9893 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2970] do nothing
        [ 2971] store the literal value 9947 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2974] do nothing
        [ 2975] store the literal value 10019 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2978] play sound effect 258
        [ 2980] do nothing
        [ 2981] store the literal value 10053 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2984] play sound effect 258
        [ 2986] do nothing
        [ 2987] store the literal value 10092 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2990] play sound effect 258
        [ 2992] do nothing
        [ 2993] store the literal value 10131 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2996] play sound effect 258
        [ 2998] do nothing
        [ 2999] store the literal value 10172 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3002] play sound effect 258
        [ 3004] do nothing
        [ 3005] store the literal value 10212 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3008] do nothing
        [ 3009] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3049] display system/chat message #10251: " þ"
        [ 3051] do nothing
        [ 3052] IF NOT(((var(20) & 512) > 0)): GOTO #3061  (else falls through, rejoins #3061)
        [ 3056] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3061] do nothing
        [ 3062] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3065, 64->#3071, 128->#3077, 256->#3083} else #3089
        [ 3065] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 3070] do nothing
        [ 3071] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 3076] do nothing
        [ 3077] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 3082] do nothing
        [ 3083] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 3088] do nothing
        [ 3089] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3094] do nothing
        [ 3095] do nothing
        [ 3096] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3106] do nothing
        [ 3107] IF NOT((var(56) > 0)): GOTO #3386  (else falls through, rejoins #3391)
        [ 3111] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3116] set script variable #79 = random_below(100)
        [ 3119] IF NOT(((var(8) == 0) && (var(79) < 4))): GOTO #3386  (else falls through, rejoins #3386)
        [ 3123] set script variable #8 = (var(8) + 1)
        [ 3126] store the literal value 10269 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3129] SWITCH random_below(1): {0->#3132, 1->#3136, 2->#3140, 7->#3144} else #3148
        [ 3132] store the literal value 10270 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3135] do nothing
        [ 3136] store the literal value 10305 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3139] do nothing
        [ 3140] store the literal value 10332 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3143] do nothing
        [ 3144] store the literal value 10371 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3147] do nothing
        [ 3148] store the literal value 10399 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3151] do nothing
        [ 3152] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3162] store the literal value 10452 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3165] set script variable #80 = random_below(4)
        [ 3168] IF NOT(((random_below(1) != 7) && (var(80) >= 3))): GOTO #3175  (else falls through, rejoins #3175)
        [ 3172] set script variable #80 = random_below(3)
        [ 3175] SWITCH var(80): {0->#3178, 1->#3182, 3->#3186, 4->#3190, 5->#3194, 6->#3198, 7->#3202} else #3206
        [ 3178] store the literal value 10453 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3181] do nothing
        [ 3182] store the literal value 10457 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3185] do nothing
        [ 3186] store the literal value 10468 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3189] do nothing
        [ 3190] store the literal value 10489 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3193] do nothing
        [ 3194] store the literal value 10516 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3197] do nothing
        [ 3198] store the literal value 10547 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3201] do nothing
        [ 3202] store the literal value 10576 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3205] do nothing
        [ 3206] store the literal value 10606 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3209] do nothing
        [ 3210] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3226] store the literal value 10621 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3229] SWITCH 6: {1->#3232, 2->#3238, 3->#3244, 4->#3250, 5->#3256, 6->#3262, 7->#3268, 8->#3274, 9->#3280, 10->#3286, 11->#3292, 12->#3298, 13->#3302, 14->#3306, 512->#3310, 32->#3316, 64->#3322, 128->#3328, 256->#3334} else #3340
        [ 3232] store the literal value 10622 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3235] play sound effect 257
        [ 3237] do nothing
        [ 3238] store the literal value 10649 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3241] play sound effect 257
        [ 3243] do nothing
        [ 3244] store the literal value 10675 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3247] play sound effect 260
        [ 3249] do nothing
        [ 3250] store the literal value 10705 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3253] play sound effect 260
        [ 3255] do nothing
        [ 3256] store the literal value 10729 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3259] play sound effect 260
        [ 3261] do nothing
        [ 3262] store the literal value 10754 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3265] play sound effect 261
        [ 3267] do nothing
        [ 3268] store the literal value 10808 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3271] play sound effect 257
        [ 3273] do nothing
        [ 3274] store the literal value 10832 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3277] play sound effect 261
        [ 3279] do nothing
        [ 3280] store the literal value 10887 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3283] play sound effect 262
        [ 3285] do nothing
        [ 3286] store the literal value 10932 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3289] play sound effect 262
        [ 3291] do nothing
        [ 3292] store the literal value 10983 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3295] play sound effect 259
        [ 3297] do nothing
        [ 3298] store the literal value 11066 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3301] do nothing
        [ 3302] store the literal value 11130 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3305] do nothing
        [ 3306] store the literal value 11184 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3309] do nothing
        [ 3310] store the literal value 11256 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3313] play sound effect 258
        [ 3315] do nothing
        [ 3316] store the literal value 11290 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3319] play sound effect 258
        [ 3321] do nothing
        [ 3322] store the literal value 11329 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3325] play sound effect 258
        [ 3327] do nothing
        [ 3328] store the literal value 11368 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3331] play sound effect 258
        [ 3333] do nothing
        [ 3334] store the literal value 11409 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3337] play sound effect 258
        [ 3339] do nothing
        [ 3340] store the literal value 11449 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3343] do nothing
        [ 3344] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3384] display system/chat message #11488: " þ"
        [ 3386] order unit-slot #9 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 3391] do nothing
        [ 3392] IF NOT((set_unit_behavior(7, 9) != 3)): GOTO #3401  (else falls through, rejoins #3401)
        [ 3396] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3401] do nothing
        [ 3402] IF NOT((((var(20) & 7136) == 0) && (var(56) == 0))): GOTO #3775  (else falls through, rejoins #3799)
        [ 3406] set script variable #82 = random_below(100)
        [ 3409] IF NOT(((var(8) == 0) && (var(82) < 4))): GOTO #3676  (else falls through, rejoins #3676)
        [ 3413] set script variable #8 = (var(8) + 1)
        [ 3416] store the literal value 11506 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3419] SWITCH random_below(1): {0->#3422, 1->#3426, 2->#3430, 7->#3434} else #3438
        [ 3422] store the literal value 11507 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3425] do nothing
        [ 3426] store the literal value 11542 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3429] do nothing
        [ 3430] store the literal value 11569 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3433] do nothing
        [ 3434] store the literal value 11608 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3437] do nothing
        [ 3438] store the literal value 11636 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3441] do nothing
        [ 3442] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3452] store the literal value 11689 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3455] set script variable #83 = random_below(4)
        [ 3458] IF NOT(((random_below(1) != 7) && (var(83) >= 3))): GOTO #3465  (else falls through, rejoins #3465)
        [ 3462] set script variable #83 = random_below(3)
        [ 3465] SWITCH var(83): {0->#3468, 1->#3472, 3->#3476, 4->#3480, 5->#3484, 6->#3488, 7->#3492} else #3496
        [ 3468] store the literal value 11690 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3471] do nothing
        [ 3472] store the literal value 11694 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3475] do nothing
        [ 3476] store the literal value 11705 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3479] do nothing
        [ 3480] store the literal value 11726 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3483] do nothing
        [ 3484] store the literal value 11753 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3487] do nothing
        [ 3488] store the literal value 11784 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3491] do nothing
        [ 3492] store the literal value 11813 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3495] do nothing
        [ 3496] store the literal value 11843 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3499] do nothing
        [ 3500] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3516] store the literal value 11858 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3519] SWITCH 7: {1->#3522, 2->#3528, 3->#3534, 4->#3540, 5->#3546, 6->#3552, 7->#3558, 8->#3564, 9->#3570, 10->#3576, 11->#3582, 12->#3588, 13->#3592, 14->#3596, 512->#3600, 32->#3606, 64->#3612, 128->#3618, 256->#3624} else #3630
        [ 3522] store the literal value 11859 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3525] play sound effect 257
        [ 3527] do nothing
        [ 3528] store the literal value 11886 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3531] play sound effect 257
        [ 3533] do nothing
        [ 3534] store the literal value 11912 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3537] play sound effect 260
        [ 3539] do nothing
        [ 3540] store the literal value 11942 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3543] play sound effect 260
        [ 3545] do nothing
        [ 3546] store the literal value 11966 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3549] play sound effect 260
        [ 3551] do nothing
        [ 3552] store the literal value 11991 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3555] play sound effect 261
        [ 3557] do nothing
        [ 3558] store the literal value 12045 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3561] play sound effect 257
        [ 3563] do nothing
        [ 3564] store the literal value 12069 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3567] play sound effect 261
        [ 3569] do nothing
        [ 3570] store the literal value 12124 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3573] play sound effect 262
        [ 3575] do nothing
        [ 3576] store the literal value 12169 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3579] play sound effect 262
        [ 3581] do nothing
        [ 3582] store the literal value 12220 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3585] play sound effect 259
        [ 3587] do nothing
        [ 3588] store the literal value 12303 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3591] do nothing
        [ 3592] store the literal value 12367 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3595] do nothing
        [ 3596] store the literal value 12421 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3599] do nothing
        [ 3600] store the literal value 12493 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3603] play sound effect 258
        [ 3605] do nothing
        [ 3606] store the literal value 12527 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3609] play sound effect 258
        [ 3611] do nothing
        [ 3612] store the literal value 12566 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3615] play sound effect 258
        [ 3617] do nothing
        [ 3618] store the literal value 12605 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3621] play sound effect 258
        [ 3623] do nothing
        [ 3624] store the literal value 12646 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3627] play sound effect 258
        [ 3629] do nothing
        [ 3630] store the literal value 12686 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3633] do nothing
        [ 3634] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3674] display system/chat message #12725: " þ"
        [ 3676] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3679, 64->#3697, 128->#3715, 256->#3733} else #3751
        [ 3679] IF NOT(group_condition_ref(1, 9)): GOTO #3687  (else falls through, rejoins #3687)
        [ 3683] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3687] define condition-slot #1 as (variable-ref 1, expression-offset 3054)
        [ 3691] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 3696] do nothing
        [ 3697] IF NOT(group_condition_ref(2, 9)): GOTO #3705  (else falls through, rejoins #3705)
        [ 3701] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3705] define condition-slot #2 as (variable-ref 2, expression-offset 3075)
        [ 3709] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 3714] do nothing
        [ 3715] IF NOT(group_condition_ref(3, 9)): GOTO #3723  (else falls through, rejoins #3723)
        [ 3719] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3723] define condition-slot #3 as (variable-ref 3, expression-offset 3096)
        [ 3727] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 3732] do nothing
        [ 3733] IF NOT(group_condition_ref(4, 9)): GOTO #3741  (else falls through, rejoins #3741)
        [ 3737] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3741] define condition-slot #4 as (variable-ref 4, expression-offset 3117)
        [ 3745] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 3750] do nothing
        [ 3751] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 3756] do nothing
        [ 3757] do nothing
        [ 3758] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3768] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #3775  (else falls through, rejoins #3775)
        [ 3772] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 3775] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #3790  (else falls through, rejoins #3799)
        [ 3779] arm timer #1 to expire 2 turn(s) from now
        [ 3782] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 3785] order unit-slot #9 to move, speed/priority var(60), destination-type tag 0, destination arg 0
        [ 3790] IF NOT(timer_expired(1)): GOTO #3799  (else falls through, rejoins #3799)
        [ 3794] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3799] do nothing
        [ 3800] do nothing
        [ 3801] IF NOT((set_unit_behavior(7, 9) != 4)): GOTO #4080  (else falls through, rejoins #4095)
        [ 3805] set script variable #85 = random_below(100)
        [ 3808] IF NOT(((var(8) == 0) && (var(85) < 4))): GOTO #4075  (else falls through, rejoins #4075)
        [ 3812] set script variable #8 = (var(8) + 1)
        [ 3815] store the literal value 12743 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3818] SWITCH random_below(1): {0->#3821, 1->#3825, 2->#3829, 7->#3833} else #3837
        [ 3821] store the literal value 12744 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3824] do nothing
        [ 3825] store the literal value 12779 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3828] do nothing
        [ 3829] store the literal value 12806 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3832] do nothing
        [ 3833] store the literal value 12845 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3836] do nothing
        [ 3837] store the literal value 12873 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3840] do nothing
        [ 3841] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3851] store the literal value 12926 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3854] set script variable #86 = random_below(4)
        [ 3857] IF NOT(((random_below(1) != 7) && (var(86) >= 3))): GOTO #3864  (else falls through, rejoins #3864)
        [ 3861] set script variable #86 = random_below(3)
        [ 3864] SWITCH var(86): {0->#3867, 1->#3871, 3->#3875, 4->#3879, 5->#3883, 6->#3887, 7->#3891} else #3895
        [ 3867] store the literal value 12927 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3870] do nothing
        [ 3871] store the literal value 12931 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3874] do nothing
        [ 3875] store the literal value 12942 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3878] do nothing
        [ 3879] store the literal value 12963 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3882] do nothing
        [ 3883] store the literal value 12990 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3886] do nothing
        [ 3887] store the literal value 13021 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3890] do nothing
        [ 3891] store the literal value 13050 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3894] do nothing
        [ 3895] store the literal value 13080 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3898] do nothing
        [ 3899] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3915] store the literal value 13095 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3918] SWITCH 9: {1->#3921, 2->#3927, 3->#3933, 4->#3939, 5->#3945, 6->#3951, 7->#3957, 8->#3963, 9->#3969, 10->#3975, 11->#3981, 12->#3987, 13->#3991, 14->#3995, 512->#3999, 32->#4005, 64->#4011, 128->#4017, 256->#4023} else #4029
        [ 3921] store the literal value 13096 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3924] play sound effect 257
        [ 3926] do nothing
        [ 3927] store the literal value 13123 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3930] play sound effect 257
        [ 3932] do nothing
        [ 3933] store the literal value 13149 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3936] play sound effect 260
        [ 3938] do nothing
        [ 3939] store the literal value 13179 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3942] play sound effect 260
        [ 3944] do nothing
        [ 3945] store the literal value 13203 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3948] play sound effect 260
        [ 3950] do nothing
        [ 3951] store the literal value 13228 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3954] play sound effect 261
        [ 3956] do nothing
        [ 3957] store the literal value 13282 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3960] play sound effect 257
        [ 3962] do nothing
        [ 3963] store the literal value 13306 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3966] play sound effect 261
        [ 3968] do nothing
        [ 3969] store the literal value 13361 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3972] play sound effect 262
        [ 3974] do nothing
        [ 3975] store the literal value 13406 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3978] play sound effect 262
        [ 3980] do nothing
        [ 3981] store the literal value 13457 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3984] play sound effect 259
        [ 3986] do nothing
        [ 3987] store the literal value 13540 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3990] do nothing
        [ 3991] store the literal value 13604 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3994] do nothing
        [ 3995] store the literal value 13658 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3998] do nothing
        [ 3999] store the literal value 13730 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4002] play sound effect 258
        [ 4004] do nothing
        [ 4005] store the literal value 13764 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4008] play sound effect 258
        [ 4010] do nothing
        [ 4011] store the literal value 13803 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4014] play sound effect 258
        [ 4016] do nothing
        [ 4017] store the literal value 13842 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4020] play sound effect 258
        [ 4022] do nothing
        [ 4023] store the literal value 13883 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4026] play sound effect 258
        [ 4028] do nothing
        [ 4029] store the literal value 13923 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4032] do nothing
        [ 4033] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4073] display system/chat message #13962: " þ"
        [ 4075] order unit-slot #9 to move, speed/priority 4, destination-type tag 3, destination arg 10
        [ 4080] set script variable #88 = set_unit_behavior(10, 9)
        [ 4083] set unit-slot #11 = var(88)
        [ 4086] IF NOT(group_condition(11)): GOTO #4095  (else falls through, rejoins #4095)
        [ 4090] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4095] do nothing
        [ 4096] do nothing
        [ 4097] IF NOT((((var(20) & 7136) == 0) & (var(56) == 0))): GOTO #4470  (else falls through, rejoins #4482)
        [ 4101] set script variable #89 = random_below(100)
        [ 4104] IF NOT(((var(8) == 0) && (var(89) < 4))): GOTO #4371  (else falls through, rejoins #4371)
        [ 4108] set script variable #8 = (var(8) + 1)
        [ 4111] store the literal value 13980 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4114] SWITCH random_below(1): {0->#4117, 1->#4121, 2->#4125, 7->#4129} else #4133
        [ 4117] store the literal value 13981 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4120] do nothing
        [ 4121] store the literal value 14016 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4124] do nothing
        [ 4125] store the literal value 14043 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4128] do nothing
        [ 4129] store the literal value 14082 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4132] do nothing
        [ 4133] store the literal value 14110 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4136] do nothing
        [ 4137] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4147] store the literal value 14163 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4150] set script variable #90 = random_below(4)
        [ 4153] IF NOT(((random_below(1) != 7) && (var(90) >= 3))): GOTO #4160  (else falls through, rejoins #4160)
        [ 4157] set script variable #90 = random_below(3)
        [ 4160] SWITCH var(90): {0->#4163, 1->#4167, 3->#4171, 4->#4175, 5->#4179, 6->#4183, 7->#4187} else #4191
        [ 4163] store the literal value 14164 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4166] do nothing
        [ 4167] store the literal value 14168 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4170] do nothing
        [ 4171] store the literal value 14179 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4174] do nothing
        [ 4175] store the literal value 14200 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4178] do nothing
        [ 4179] store the literal value 14227 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4182] do nothing
        [ 4183] store the literal value 14258 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4186] do nothing
        [ 4187] store the literal value 14287 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4190] do nothing
        [ 4191] store the literal value 14317 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4194] do nothing
        [ 4195] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4211] store the literal value 14332 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4214] SWITCH 7: {1->#4217, 2->#4223, 3->#4229, 4->#4235, 5->#4241, 6->#4247, 7->#4253, 8->#4259, 9->#4265, 10->#4271, 11->#4277, 12->#4283, 13->#4287, 14->#4291, 512->#4295, 32->#4301, 64->#4307, 128->#4313, 256->#4319} else #4325
        [ 4217] store the literal value 14333 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4220] play sound effect 257
        [ 4222] do nothing
        [ 4223] store the literal value 14360 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4226] play sound effect 257
        [ 4228] do nothing
        [ 4229] store the literal value 14386 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4232] play sound effect 260
        [ 4234] do nothing
        [ 4235] store the literal value 14416 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4238] play sound effect 260
        [ 4240] do nothing
        [ 4241] store the literal value 14440 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4244] play sound effect 260
        [ 4246] do nothing
        [ 4247] store the literal value 14465 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4250] play sound effect 261
        [ 4252] do nothing
        [ 4253] store the literal value 14519 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4256] play sound effect 257
        [ 4258] do nothing
        [ 4259] store the literal value 14543 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4262] play sound effect 261
        [ 4264] do nothing
        [ 4265] store the literal value 14598 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4268] play sound effect 262
        [ 4270] do nothing
        [ 4271] store the literal value 14643 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4274] play sound effect 262
        [ 4276] do nothing
        [ 4277] store the literal value 14694 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4280] play sound effect 259
        [ 4282] do nothing
        [ 4283] store the literal value 14777 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4286] do nothing
        [ 4287] store the literal value 14841 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4290] do nothing
        [ 4291] store the literal value 14895 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4294] do nothing
        [ 4295] store the literal value 14967 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4298] play sound effect 258
        [ 4300] do nothing
        [ 4301] store the literal value 15001 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4304] play sound effect 258
        [ 4306] do nothing
        [ 4307] store the literal value 15040 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4310] play sound effect 258
        [ 4312] do nothing
        [ 4313] store the literal value 15079 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4316] play sound effect 258
        [ 4318] do nothing
        [ 4319] store the literal value 15120 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4322] play sound effect 258
        [ 4324] do nothing
        [ 4325] store the literal value 15160 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4328] do nothing
        [ 4329] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4369] display system/chat message #15199: " þ""
        [ 4371] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#4374, 64->#4392, 128->#4410, 256->#4428} else #4446
        [ 4374] IF NOT(group_condition_ref(1, 9)): GOTO #4382  (else falls through, rejoins #4382)
        [ 4378] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4382] define condition-slot #1 as (variable-ref 1, expression-offset 3550)
        [ 4386] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 4391] do nothing
        [ 4392] IF NOT(group_condition_ref(2, 9)): GOTO #4400  (else falls through, rejoins #4400)
        [ 4396] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4400] define condition-slot #2 as (variable-ref 2, expression-offset 3571)
        [ 4404] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 4409] do nothing
        [ 4410] IF NOT(group_condition_ref(3, 9)): GOTO #4418  (else falls through, rejoins #4418)
        [ 4414] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4418] define condition-slot #3 as (variable-ref 3, expression-offset 3592)
        [ 4422] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 4427] do nothing
        [ 4428] IF NOT(group_condition_ref(4, 9)): GOTO #4436  (else falls through, rejoins #4436)
        [ 4432] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4436] define condition-slot #4 as (variable-ref 4, expression-offset 3613)
        [ 4440] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 4445] do nothing
        [ 4446] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 4451] do nothing
        [ 4452] do nothing
        [ 4453] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4463] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #4470  (else falls through, rejoins #4470)
        [ 4467] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 4470] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #4482  (else falls through, rejoins #4482)
        [ 4474] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 4477] order unit-slot #9 to move, speed/priority var(60), destination-type tag 0, destination arg 0
        [ 4482] do nothing
        [ 4483] do nothing
        [ 4484] do nothing
        [ 4485] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 4511] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 4514] GOTO #1365
        [ 4516] set script variable #92 = 0
        [ 4519] set script variable #93 = 0
        [ 4522] set script variable #94 = 0
        [ 4525] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 4528] WHILE set_unit_behavior(0, 1): loop below; exit -> #4600 (500-iteration guard)
        [ 4531] set script variable #95 = set_unit_behavior(10, 1)
        [ 4534] SWITCH var(95): {1->#4537, 2->#4541, 3->#4545, 4->#4549, 5->#4553, 6->#4557, 7->#4561, 8->#4565} else #4569
        [ 4537] set script variable #94 = 1
        [ 4540] do nothing
        [ 4541] set script variable #94 = 2
        [ 4544] do nothing
        [ 4545] set script variable #94 = 4
        [ 4548] do nothing
        [ 4549] set script variable #94 = 8
        [ 4552] do nothing
        [ 4553] set script variable #94 = 16
        [ 4556] do nothing
        [ 4557] set script variable #94 = 32
        [ 4560] do nothing
        [ 4561] set script variable #94 = 64
        [ 4564] do nothing
        [ 4565] set script variable #94 = 128
        [ 4568] do nothing
        [ 4569] do nothing
        [ 4570] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4588] IF NOT(((var(92) & var(94)) == 0)): GOTO #4595  (else falls through, rejoins #4595)
        [ 4592] set script variable #92 = (var(92) + var(94))
        [ 4595] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 4598] GOTO #4531
        [ 4600] IF NOT(((!all_group_alive(2) && !var(4)) && stat(0))): GOTO #4609  (else falls through, rejoins #4609)
        [ 4604] display system/chat message #15217: "Cybrid threat eliminated."
        [ 4606] set script variable #4 = 1
        [ 4609] IF NOT((var(92) < var(10))): GOTO #4754  (else falls through, rejoins #4754)
        [ 4613] set script variable #96 = (var(10) - var(92))
        [ 4616] set script variable #97 = 0
        [ 4619] set script variable #98 = 0
        [ 4622] WHILE (var(97) < var(12)): loop below; exit -> #4690 (500-iteration guard)
        [ 4625] SWITCH var(97): {1->#4628, 2->#4632, 3->#4636, 4->#4640, 5->#4644, 6->#4648, 7->#4652, 8->#4656} else #4660
        [ 4628] set script variable #98 = 1
        [ 4631] do nothing
        [ 4632] set script variable #98 = 2
        [ 4635] do nothing
        [ 4636] set script variable #98 = 4
        [ 4639] do nothing
        [ 4640] set script variable #98 = 8
        [ 4643] do nothing
        [ 4644] set script variable #98 = 16
        [ 4647] do nothing
        [ 4648] set script variable #98 = 32
        [ 4651] do nothing
        [ 4652] set script variable #98 = 64
        [ 4655] do nothing
        [ 4656] set script variable #98 = 128
        [ 4659] do nothing
        [ 4660] do nothing
        [ 4661] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4679] IF NOT(((var(98) & var(10)) > (var(98) & var(92)))): GOTO #4685  (else falls through, rejoins #4685)
        [ 4683] display system/chat message #15243: "Player üã"
        [ 4685] set script variable #97 = (var(97) + 1)
        [ 4688] GOTO #4625
        [ 4690] set script variable #10 = var(92)
        [ 4693] SWITCH var(14): {1->#4696, 2->#4700, 3->#4704, 4->#4708, 5->#4712, 6->#4716, 7->#4720, 8->#4724} else #4728
        [ 4696] set script variable #98 = 1
        [ 4699] do nothing
        [ 4700] set script variable #98 = 2
        [ 4703] do nothing
        [ 4704] set script variable #98 = 4
        [ 4707] do nothing
        [ 4708] set script variable #98 = 8
        [ 4711] do nothing
        [ 4712] set script variable #98 = 16
        [ 4715] do nothing
        [ 4716] set script variable #98 = 32
        [ 4719] do nothing
        [ 4720] set script variable #98 = 64
        [ 4723] do nothing
        [ 4724] set script variable #98 = 128
        [ 4727] do nothing
        [ 4728] do nothing
        [ 4729] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4747] IF NOT(((var(98) & var(10)) == 0)): GOTO #4754  (else falls through, rejoins #4754)
        [ 4751] set script variable #15 = 2
        [ 4754] set script variable #3 = 0
        [ 4757] set script variable #99 = 0
        [ 4760] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #2
        [ 4763] WHILE set_unit_behavior(0, 2): loop below; exit -> #4777 (500-iteration guard)
        [ 4766] set script variable #3 = 1
        [ 4769] set script variable #99 = (var(99) + 1)
        [ 4772] advance unit-slot #2 to the next unit in group #2 after the current one
        [ 4775] GOTO #4766
        [ 4777] IF NOT((group_condition(3) && !all_group_alive(2))): GOTO #4785  (else falls through, rejoins #4785)
        [ 4781] set script variable #15 = 3
        [ 4784] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4785] ONCE((var(15) > 0), flag[1]): run block below -> #4790
        [ 4789] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4790] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 4791] IF NOT((var(15) == 1)): GOTO #4802  (else falls through, rejoins #4820)
            [ 4795] play sound effect 35
            [ 4797] display system/chat message #15265: "All immediate threats eliminated. "
            [ 4799] set the objective state of unit 1 to 1
            [ 4802] IF NOT((var(15) == 3)): GOTO #4815  (else falls through, rejoins #4820)
            [ 4806] play sound effect 35
            [ 4808] set the objective state of unit 1 to 1
            [ 4811] display system/chat message #15300: "The Cybrid forces have been eliminated."
            [ 4813] end the current turn (reason/flag #15340), then jump to scenario phase 3
            [ 4815] display system/chat message #15396: "Your mission was a failure."
            [ 4817] set the objective state of unit 1 to 2
            [ 4820] advance to the next scenario phase (no effect if already at the last phase)
            [ 4821] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
