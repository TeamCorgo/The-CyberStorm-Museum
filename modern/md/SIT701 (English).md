# SIT701.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=612, phase1=622, phase2=1599, phase3=5407
; 17579 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = 3
[    3] set script variable #5 = 0
[    6] set script variable #6 = 0
[    9] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   10] IF NOT((var(8) == 0)): GOTO #17  (else falls through, rejoins #17)
    [   14] set script variable #8 = (random_below(var(19)) + var(20))
    [   17] set the objective state of unit 1 to 2
    [   20] set script variable #12 = stat(9)
    [   23] set script variable #10 = (stat(8) - 1)
    [   26] set script variable #11 = stat(10)
    [   29] set script variable #15 = ((13 - var(10)) - var(11))
    [   32] IF NOT((var(15) < 0)): GOTO #39  (else falls through, rejoins #39)
    [   36] set script variable #15 = 0
    [   39] set script variable #21 = 1
    [   42] set script variable #22 = 1
    [   45] WHILE (var(21) <= var(10)): loop below; exit -> #110 (500-iteration guard)
    [   48] SWITCH var(21): {1->#51, 2->#55, 3->#59, 4->#63, 5->#67, 6->#71, 7->#75, 8->#79} else #83
    [   51] set script variable #22 = 1
    [   54] do nothing
    [   55] set script variable #22 = 2
    [   58] do nothing
    [   59] set script variable #22 = 4
    [   62] do nothing
    [   63] set script variable #22 = 8
    [   66] do nothing
    [   67] set script variable #22 = 16
    [   70] do nothing
    [   71] set script variable #22 = 32
    [   74] do nothing
    [   75] set script variable #22 = 64
    [   78] do nothing
    [   79] set script variable #22 = 128
    [   82] do nothing
    [   83] do nothing
    [   84] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
    [  102] set script variable #9 = (var(9) + var(22))
    [  105] set script variable #21 = (var(21) + 1)
    [  108] GOTO #48
    [  110] set script variable #23 = (((360 / var(10)) * var(12)) + (var(10) + (var(11) * 2)))
    [  113] set script variable #24 = ((31 - var(15)) - 3)
    [  116] set hex-var #8 = the point (var(23) - 180) steps along the path toward var(24)
    [  120] set script variable #25 = stat(7)
    [  123] set script variable #26 = random_below((var(10) - 1))
    [  126] set script variable #27 = (var(26) + 1)
    [  129] set script variable #28 = (((360 / var(10)) * var(26)) + (var(10) + (var(11) * 2)))
    [  132] set script variable #29 = (((360 / var(10)) * var(27)) + (var(10) + (var(11) * 2)))
    [  135] set script variable #30 = ((var(28) + var(29)) / 2)
    [  138] set script variable #31 = 1
    [  141] set hex-var #10 = (0, 0)
    [  145] set script variable #34 = set_objective_at_hex(6)
    [  148] WHILE (var(31) <= var(10)): loop below; exit -> #224 (500-iteration guard)
    [  151] set script variable #35 = random_below(180)
    [  154] set script variable #33 = var(24)
    [  157] set script variable #32 = (((360 / var(10)) * var(31)) + (var(10) + (var(11) * 2)))
    [  160] IF NOT((var(10) == 2)): GOTO #167  (else falls through, rejoins #167)
    [  164] set script variable #32 = ((var(32) - 90) + var(35))
    [  167] IF NOT((var(10) == 3)): GOTO #174  (else falls through, rejoins #174)
    [  171] set script variable #32 = ((var(32) - 60) + (var(35) / 2))
    [  174] set hex-var #9 = the point (var(32) - 180) steps along the path toward var(33)
    [  178] IF NOT((var(25) == 1)): GOTO #208  (else falls through, rejoins #219)
    [  182] IF NOT((var(31) == var(12))): GOTO #197  (else falls through, rejoins #208)
    [  186] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #7
    [  191] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  197] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #6
    [  202] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  208] spawn a unit of type 31 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #6
    [  213] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  219] set script variable #31 = (var(31) + 1)
    [  222] GOTO #151
    [  224] IF NOT((var(8) == 0)): GOTO #231  (else falls through, rejoins #231)
    [  228] set script variable #8 = (random_below(var(36)) + var(37))
    [  231] set script variable #17 = ((stat(0) * 3) / 1)
    [  234] set script variable #17 = (var(17) - 200)
    [  237] set script variable #38 = 32
    [  240] set script variable #21 = 8192
    [  243] WHILE (var(21) > 500): loop below; exit -> #258 (500-iteration guard)
    [  246] IF NOT((var(17) < var(21))): GOTO #253  (else falls through, rejoins #253)
    [  250] set script variable #38 = (var(38) - 3)
    [  253] set script variable #21 = (var(21) / 2)
    [  256] GOTO #246
    [  258] IF NOT((var(17) > 50)): GOTO #279  (else falls through, rejoins #282)
    [  262] set script variable #16 = (var(17) / 4)
    [  265] IF NOT((var(16) < 50)): GOTO #272  (else falls through, rejoins #279)
    [  269] set script variable #16 = 50
    [  272] IF NOT((var(16) > 1200)): GOTO #279  (else falls through, rejoins #279)
    [  276] set script variable #16 = 1200
    [  279] set script variable #16 = var(17)
    [  282] set script variable #17 = (var(17) - var(16))
    [  285] set script variable #39 = 0
    [  288] set script variable #40 = 12
    [  291] set script variable #41 = 27
    [  294] set script variable #42 = 45
    [  297] set script variable #43 = 90
    [  300] IF NOT((var(40) > (var(15) + 5))): GOTO #307  (else falls through, rejoins #310)
    [  304] set script variable #40 = (var(40) - var(15))
    [  307] set script variable #40 = 5
    [  310] IF NOT((var(41) > (var(15) + 10))): GOTO #317  (else falls through, rejoins #320)
    [  314] set script variable #41 = (var(41) - var(15))
    [  317] set script variable #41 = 10
    [  320] IF NOT((var(10) == 1)): GOTO #327  (else falls through, rejoins #327)
    [  324] set script variable #30 = ((var(32) - 60) + random_below(90))
    [  327] IF NOT((var(39) == 0)): GOTO #334  (else falls through, rejoins #334)
    [  331] set script variable #39 = (var(40) + random_below((var(41) - var(40))))
    [  334] IF NOT((var(30) == 0)): GOTO #341  (else falls through, rejoins #341)
    [  338] set script variable #30 = ((random_below(var(43)) + var(42)) - (var(43) / 2))
    [  341] set hex-var #5 = the point var(30) steps along the path toward var(39)
    [  345] do nothing (message no-op)
    [  346] (UNKNOWN OPCODE 0x00b7) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  987] set script variable #14 = 0
        [  990] IF NOT(timer_expired(2)): GOTO #4519  (else falls through, rejoins #4519)
        [  994] arm timer #2 to expire 1 turn(s) from now
        [  997] set script variable #7 = 0
        [ 1000] IF NOT(group_all_alive(7)): GOTO #1004  (else falls through, rejoins #1004)
        [ 1004] set script variable #55 = 0
        [ 1007] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1010] WHILE set_unit_behavior(0, 9): loop below; exit -> #1299 (500-iteration guard)
        [ 1013] IF NOT((set_unit_behavior(9, 9) > 0)): GOTO #1294  (else falls through, rejoins #1294)
        [ 1017] set script variable #56 = random_below(100)
        [ 1020] IF NOT(((var(7) == 0) && (var(56) < 4))): GOTO #1287  (else falls through, rejoins #1287)
        [ 1024] set script variable #7 = (var(7) + 1)
        [ 1027] store the literal value 1572 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1030] SWITCH random_below(4): {0->#1033, 1->#1037, 2->#1041, 7->#1045} else #1049
        [ 1033] store the literal value 1573 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1036] do nothing
        [ 1037] store the literal value 1608 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1040] do nothing
        [ 1041] store the literal value 1635 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1044] do nothing
        [ 1045] store the literal value 1674 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1048] do nothing
        [ 1049] store the literal value 1702 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1052] do nothing
        [ 1053] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1063] store the literal value 1755 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1066] set script variable #57 = random_below(1)
        [ 1069] IF NOT(((random_below(4) != 7) && (var(57) >= 3))): GOTO #1076  (else falls through, rejoins #1076)
        [ 1073] set script variable #57 = random_below(3)
        [ 1076] SWITCH var(57): {0->#1079, 1->#1083, 3->#1087, 4->#1091, 5->#1095, 6->#1099, 7->#1103} else #1107
        [ 1079] store the literal value 1756 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1082] do nothing
        [ 1083] store the literal value 1760 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1086] do nothing
        [ 1087] store the literal value 1771 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1090] do nothing
        [ 1091] store the literal value 1792 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1094] do nothing
        [ 1095] store the literal value 1819 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1098] do nothing
        [ 1099] store the literal value 1850 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1102] do nothing
        [ 1103] store the literal value 1879 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1106] do nothing
        [ 1107] store the literal value 1909 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1110] do nothing
        [ 1111] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1127] store the literal value 1924 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1130] SWITCH 10: {1->#1133, 2->#1139, 3->#1145, 4->#1151, 5->#1157, 6->#1163, 7->#1169, 8->#1175, 9->#1181, 10->#1187, 11->#1193, 12->#1199, 13->#1203, 14->#1207, 512->#1211, 32->#1217, 64->#1223, 128->#1229, 256->#1235} else #1241
        [ 1133] store the literal value 1925 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1136] play sound effect 257
        [ 1138] do nothing
        [ 1139] store the literal value 1952 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1142] play sound effect 257
        [ 1144] do nothing
        [ 1145] store the literal value 1978 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1148] play sound effect 260
        [ 1150] do nothing
        [ 1151] store the literal value 2008 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1154] play sound effect 260
        [ 1156] do nothing
        [ 1157] store the literal value 2032 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1160] play sound effect 260
        [ 1162] do nothing
        [ 1163] store the literal value 2057 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1166] play sound effect 261
        [ 1168] do nothing
        [ 1169] store the literal value 2111 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1172] play sound effect 257
        [ 1174] do nothing
        [ 1175] store the literal value 2135 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1178] play sound effect 261
        [ 1180] do nothing
        [ 1181] store the literal value 2190 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1184] play sound effect 262
        [ 1186] do nothing
        [ 1187] store the literal value 2235 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1190] play sound effect 262
        [ 1192] do nothing
        [ 1193] store the literal value 2286 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1196] play sound effect 259
        [ 1198] do nothing
        [ 1199] store the literal value 2369 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1202] do nothing
        [ 1203] store the literal value 2433 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1206] do nothing
        [ 1207] store the literal value 2487 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1210] do nothing
        [ 1211] store the literal value 2559 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1214] play sound effect 258
        [ 1216] do nothing
        [ 1217] store the literal value 2593 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1220] play sound effect 258
        [ 1222] do nothing
        [ 1223] store the literal value 2632 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1226] play sound effect 258
        [ 1228] do nothing
        [ 1229] store the literal value 2671 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1232] play sound effect 258
        [ 1234] do nothing
        [ 1235] store the literal value 2712 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1238] play sound effect 258
        [ 1240] do nothing
        [ 1241] store the literal value 2752 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1244] do nothing
        [ 1245] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1285] display system/chat message #2791: " þ"
        [ 1287] IF NOT(((set_unit_behavior(8, 9) & var(18)) == 0)): GOTO #1294  (else falls through, rejoins #1294)
        [ 1291] set script variable #18 = (var(18) + (set_unit_behavior(8, 9) & 7136))
        [ 1294] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 1297] GOTO #1013
        [ 1299] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 1302] WHILE set_unit_behavior(0, 1): loop below; exit -> #1333 (500-iteration guard)
        [ 1305] IF NOT(group_condition_ref_2(7, 2)): GOTO #1312  (else falls through, rejoins #1319)
        [ 1309] set attribute #8 of unit-slot #1 to 2
        [ 1312] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1319  (else falls through, rejoins #1319)
        [ 1316] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1319] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1328  (else falls through, rejoins #1328)
        [ 1323] set script variable #55 = (var(55) + 1)
        [ 1326] do nothing (message no-op)
        [ 1327] (UNKNOWN OPCODE 0x0af9) - dead end, not decoded further (other branches continue independently)
        [ 1328] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1331] GOTO #1305
        [ 1333] IF NOT(group_condition_ref_2(8, 2)): GOTO #1340  (else falls through, rejoins #1347)
        [ 1337] set attribute #8 of unit-slot #1 to 2
        [ 1340] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1347  (else falls through, rejoins #1347)
        [ 1344] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1347] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1356  (else falls through, rejoins #1356)
        [ 1351] set script variable #55 = (var(55) + 1)
        [ 1354] do nothing (message no-op)
        [ 1355] (UNKNOWN OPCODE 0x0b0c) - dead end, not decoded further (other branches continue independently)
        [ 1356] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1359] set script variable #59 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 1362] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1365] WHILE set_unit_behavior(0, 9): loop below; exit -> #4519 (500-iteration guard)
        [ 1368] IF NOT((set_unit_behavior(5, 9) < 60)): GOTO #1377  (else falls through, rejoins #4514)
        [ 1372] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 1377] SWITCH (set_unit_behavior(8, 9) & 15): {0->#1380, 1->#1663, 2->#2496, 3->#3055, 4->#3065, 5->#3110, 10->#3395, 11->#3405, 12->#3803, 13->#3804, 14->#4099, 15->#4100} else #4486
        [ 1380] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #1662  (else falls through, rejoins #1662)
        [ 1384] set script variable #60 = random_below(100)
        [ 1387] IF NOT(((var(7) == 0) && (var(60) < 40))): GOTO #1654  (else falls through, rejoins #1654)
        [ 1391] set script variable #7 = (var(7) + 1)
        [ 1394] store the literal value 2847 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1397] SWITCH random_below(1): {0->#1400, 1->#1404, 2->#1408, 7->#1412} else #1416
        [ 1400] store the literal value 2848 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1403] do nothing
        [ 1404] store the literal value 2883 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1407] do nothing
        [ 1408] store the literal value 2910 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1411] do nothing
        [ 1412] store the literal value 2949 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1415] do nothing
        [ 1416] store the literal value 2977 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1419] do nothing
        [ 1420] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1430] store the literal value 3030 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1433] set script variable #61 = random_below(4)
        [ 1436] IF NOT(((random_below(1) != 7) && (var(61) >= 3))): GOTO #1443  (else falls through, rejoins #1443)
        [ 1440] set script variable #61 = random_below(3)
        [ 1443] SWITCH var(61): {0->#1446, 1->#1450, 3->#1454, 4->#1458, 5->#1462, 6->#1466, 7->#1470} else #1474
        [ 1446] store the literal value 3031 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1449] do nothing
        [ 1450] store the literal value 3035 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1453] do nothing
        [ 1454] store the literal value 3046 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1457] do nothing
        [ 1458] store the literal value 3067 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1461] do nothing
        [ 1462] store the literal value 3094 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1465] do nothing
        [ 1466] store the literal value 3125 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1469] do nothing
        [ 1470] store the literal value 3154 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1473] do nothing
        [ 1474] store the literal value 3184 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1477] do nothing
        [ 1478] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1494] store the literal value 3199 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1497] SWITCH 8: {1->#1500, 2->#1506, 3->#1512, 4->#1518, 5->#1524, 6->#1530, 7->#1536, 8->#1542, 9->#1548, 10->#1554, 11->#1560, 12->#1566, 13->#1570, 14->#1574, 512->#1578, 32->#1584, 64->#1590, 128->#1596, 256->#1602} else #1608
        [ 1500] store the literal value 3200 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1503] play sound effect 257
        [ 1505] do nothing
        [ 1506] store the literal value 3227 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1509] play sound effect 257
        [ 1511] do nothing
        [ 1512] store the literal value 3253 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1515] play sound effect 260
        [ 1517] do nothing
        [ 1518] store the literal value 3283 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1521] play sound effect 260
        [ 1523] do nothing
        [ 1524] store the literal value 3307 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1527] play sound effect 260
        [ 1529] do nothing
        [ 1530] store the literal value 3332 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1533] play sound effect 261
        [ 1535] do nothing
        [ 1536] store the literal value 3386 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1539] play sound effect 257
        [ 1541] do nothing
        [ 1542] store the literal value 3410 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1545] play sound effect 261
        [ 1547] do nothing
        [ 1548] store the literal value 3465 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1551] play sound effect 262
        [ 1553] do nothing
        [ 1554] store the literal value 3510 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1557] play sound effect 262
        [ 1559] do nothing
        [ 1560] store the literal value 3561 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1563] play sound effect 259
        [ 1565] do nothing
        [ 1566] store the literal value 3644 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1569] do nothing
        [ 1570] store the literal value 3708 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1573] do nothing
        [ 1574] store the literal value 3762 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1577] do nothing
        [ 1578] store the literal value 3834 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1581] play sound effect 258
        [ 1583] do nothing
        [ 1584] store the literal value 3868 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1587] play sound effect 258
        [ 1589] do nothing
        [ 1590] store the literal value 3907 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1593] play sound effect 258
        [ 1595] do nothing
        [ 1596] store the literal value 3946 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1599] play sound effect 258
        [ 1601] do nothing
        [ 1602] store the literal value 3987 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1605] play sound effect 258
        [ 1607] do nothing
        [ 1608] store the literal value 4027 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1611] do nothing
        [ 1612] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1652] display system/chat message #4066: " þ"
        [ 1654] order unit-slot #9 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 1659] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 1662] do nothing
        [ 1663] IF NOT((group_condition_ref_2(9, 1) || (set_unit_behavior(9, 9) != 0))): GOTO #1946  (else falls through, rejoins #2495)
        [ 1667] IF NOT((set_unit_behavior(7, 9) != 6)): GOTO #1946  (else falls through, rejoins #1946)
        [ 1671] set script variable #63 = random_below(100)
        [ 1674] IF NOT(((var(7) == 0) && (var(63) < 40))): GOTO #1941  (else falls through, rejoins #1941)
        [ 1678] set script variable #7 = (var(7) + 1)
        [ 1681] store the literal value 4084 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1684] SWITCH random_below(1): {0->#1687, 1->#1691, 2->#1695, 7->#1699} else #1703
        [ 1687] store the literal value 4085 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1690] do nothing
        [ 1691] store the literal value 4120 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1694] do nothing
        [ 1695] store the literal value 4147 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1698] do nothing
        [ 1699] store the literal value 4186 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1702] do nothing
        [ 1703] store the literal value 4214 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1706] do nothing
        [ 1707] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1717] store the literal value 4267 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1720] set script variable #64 = random_below(4)
        [ 1723] IF NOT(((random_below(1) != 7) && (var(64) >= 3))): GOTO #1730  (else falls through, rejoins #1730)
        [ 1727] set script variable #64 = random_below(3)
        [ 1730] SWITCH var(64): {0->#1733, 1->#1737, 3->#1741, 4->#1745, 5->#1749, 6->#1753, 7->#1757} else #1761
        [ 1733] store the literal value 4268 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1736] do nothing
        [ 1737] store the literal value 4272 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1740] do nothing
        [ 1741] store the literal value 4283 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1744] do nothing
        [ 1745] store the literal value 4304 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1748] do nothing
        [ 1749] store the literal value 4331 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1752] do nothing
        [ 1753] store the literal value 4362 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1756] do nothing
        [ 1757] store the literal value 4391 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1760] do nothing
        [ 1761] store the literal value 4421 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1764] do nothing
        [ 1765] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1781] store the literal value 4436 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1784] SWITCH 3: {1->#1787, 2->#1793, 3->#1799, 4->#1805, 5->#1811, 6->#1817, 7->#1823, 8->#1829, 9->#1835, 10->#1841, 11->#1847, 12->#1853, 13->#1857, 14->#1861, 512->#1865, 32->#1871, 64->#1877, 128->#1883, 256->#1889} else #1895
        [ 1787] store the literal value 4437 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1790] play sound effect 257
        [ 1792] do nothing
        [ 1793] store the literal value 4464 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1796] play sound effect 257
        [ 1798] do nothing
        [ 1799] store the literal value 4490 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1802] play sound effect 260
        [ 1804] do nothing
        [ 1805] store the literal value 4520 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1808] play sound effect 260
        [ 1810] do nothing
        [ 1811] store the literal value 4544 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1814] play sound effect 260
        [ 1816] do nothing
        [ 1817] store the literal value 4569 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1820] play sound effect 261
        [ 1822] do nothing
        [ 1823] store the literal value 4623 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1826] play sound effect 257
        [ 1828] do nothing
        [ 1829] store the literal value 4647 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1832] play sound effect 261
        [ 1834] do nothing
        [ 1835] store the literal value 4702 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1838] play sound effect 262
        [ 1840] do nothing
        [ 1841] store the literal value 4747 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1844] play sound effect 262
        [ 1846] do nothing
        [ 1847] store the literal value 4798 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1850] play sound effect 259
        [ 1852] do nothing
        [ 1853] store the literal value 4881 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1856] do nothing
        [ 1857] store the literal value 4945 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1860] do nothing
        [ 1861] store the literal value 4999 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1864] do nothing
        [ 1865] store the literal value 5071 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1868] play sound effect 258
        [ 1870] do nothing
        [ 1871] store the literal value 5105 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1874] play sound effect 258
        [ 1876] do nothing
        [ 1877] store the literal value 5144 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1880] play sound effect 258
        [ 1882] do nothing
        [ 1883] store the literal value 5183 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1886] play sound effect 258
        [ 1888] do nothing
        [ 1889] store the literal value 5224 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1892] play sound effect 258
        [ 1894] do nothing
        [ 1895] store the literal value 5264 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1898] do nothing
        [ 1899] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1939] display system/chat message #5303: " þ
"
        [ 1941] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 1946] IF NOT((set_unit_behavior(7, 9) != 2)): GOTO #2225  (else falls through, rejoins #2495)
        [ 1950] order unit-slot #9 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 1955] set script variable #66 = random_below(100)
        [ 1958] IF NOT(((var(7) == 0) && (var(66) < 4))): GOTO #2225  (else falls through, rejoins #2225)
        [ 1962] set script variable #7 = (var(7) + 1)
        [ 1965] store the literal value 5321 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1968] SWITCH random_below(1): {0->#1971, 1->#1975, 2->#1979, 7->#1983} else #1987
        [ 1971] store the literal value 5322 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1974] do nothing
        [ 1975] store the literal value 5357 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1978] do nothing
        [ 1979] store the literal value 5384 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1982] do nothing
        [ 1983] store the literal value 5423 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1986] do nothing
        [ 1987] store the literal value 5451 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1990] do nothing
        [ 1991] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2001] store the literal value 5504 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2004] set script variable #67 = random_below(4)
        [ 2007] IF NOT(((random_below(1) != 7) && (var(67) >= 3))): GOTO #2014  (else falls through, rejoins #2014)
        [ 2011] set script variable #67 = random_below(3)
        [ 2014] SWITCH var(67): {0->#2017, 1->#2021, 3->#2025, 4->#2029, 5->#2033, 6->#2037, 7->#2041} else #2045
        [ 2017] store the literal value 5505 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2020] do nothing
        [ 2021] store the literal value 5509 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2024] do nothing
        [ 2025] store the literal value 5520 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2028] do nothing
        [ 2029] store the literal value 5541 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2032] do nothing
        [ 2033] store the literal value 5568 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2036] do nothing
        [ 2037] store the literal value 5599 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2040] do nothing
        [ 2041] store the literal value 5628 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2044] do nothing
        [ 2045] store the literal value 5658 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2048] do nothing
        [ 2049] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2065] store the literal value 5673 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2068] SWITCH 2: {1->#2071, 2->#2077, 3->#2083, 4->#2089, 5->#2095, 6->#2101, 7->#2107, 8->#2113, 9->#2119, 10->#2125, 11->#2131, 12->#2137, 13->#2141, 14->#2145, 512->#2149, 32->#2155, 64->#2161, 128->#2167, 256->#2173} else #2179
        [ 2071] store the literal value 5674 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2074] play sound effect 257
        [ 2076] do nothing
        [ 2077] store the literal value 5701 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2080] play sound effect 257
        [ 2082] do nothing
        [ 2083] store the literal value 5727 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2086] play sound effect 260
        [ 2088] do nothing
        [ 2089] store the literal value 5757 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2092] play sound effect 260
        [ 2094] do nothing
        [ 2095] store the literal value 5781 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2098] play sound effect 260
        [ 2100] do nothing
        [ 2101] store the literal value 5806 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2104] play sound effect 261
        [ 2106] do nothing
        [ 2107] store the literal value 5860 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2110] play sound effect 257
        [ 2112] do nothing
        [ 2113] store the literal value 5884 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2116] play sound effect 261
        [ 2118] do nothing
        [ 2119] store the literal value 5939 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2122] play sound effect 262
        [ 2124] do nothing
        [ 2125] store the literal value 5984 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2128] play sound effect 262
        [ 2130] do nothing
        [ 2131] store the literal value 6035 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2134] play sound effect 259
        [ 2136] do nothing
        [ 2137] store the literal value 6118 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2140] do nothing
        [ 2141] store the literal value 6182 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2144] do nothing
        [ 2145] store the literal value 6236 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2148] do nothing
        [ 2149] store the literal value 6308 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2152] play sound effect 258
        [ 2154] do nothing
        [ 2155] store the literal value 6342 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2158] play sound effect 258
        [ 2160] do nothing
        [ 2161] store the literal value 6381 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2164] play sound effect 258
        [ 2166] do nothing
        [ 2167] store the literal value 6420 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2170] play sound effect 258
        [ 2172] do nothing
        [ 2173] store the literal value 6461 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2176] play sound effect 258
        [ 2178] do nothing
        [ 2179] store the literal value 6501 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2182] do nothing
        [ 2183] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2223] display system/chat message #6540: " þ"
        [ 2225] set script variable #69 = random_below(100)
        [ 2228] IF NOT(((var(7) == 0) && (var(69) < 4))): GOTO #2495  (else falls through, rejoins #2495)
        [ 2232] set script variable #7 = (var(7) + 1)
        [ 2235] store the literal value 6558 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2238] SWITCH random_below(1): {0->#2241, 1->#2245, 2->#2249, 7->#2253} else #2257
        [ 2241] store the literal value 6559 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2244] do nothing
        [ 2245] store the literal value 6594 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2248] do nothing
        [ 2249] store the literal value 6621 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2252] do nothing
        [ 2253] store the literal value 6660 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2256] do nothing
        [ 2257] store the literal value 6688 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2260] do nothing
        [ 2261] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2271] store the literal value 6741 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2274] set script variable #70 = random_below(4)
        [ 2277] IF NOT(((random_below(1) != 7) && (var(70) >= 3))): GOTO #2284  (else falls through, rejoins #2284)
        [ 2281] set script variable #70 = random_below(3)
        [ 2284] SWITCH var(70): {0->#2287, 1->#2291, 3->#2295, 4->#2299, 5->#2303, 6->#2307, 7->#2311} else #2315
        [ 2287] store the literal value 6742 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2290] do nothing
        [ 2291] store the literal value 6746 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2294] do nothing
        [ 2295] store the literal value 6757 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2298] do nothing
        [ 2299] store the literal value 6778 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2302] do nothing
        [ 2303] store the literal value 6805 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2306] do nothing
        [ 2307] store the literal value 6836 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2310] do nothing
        [ 2311] store the literal value 6865 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2314] do nothing
        [ 2315] store the literal value 6895 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2318] do nothing
        [ 2319] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2335] store the literal value 6910 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2338] SWITCH 1: {1->#2341, 2->#2347, 3->#2353, 4->#2359, 5->#2365, 6->#2371, 7->#2377, 8->#2383, 9->#2389, 10->#2395, 11->#2401, 12->#2407, 13->#2411, 14->#2415, 512->#2419, 32->#2425, 64->#2431, 128->#2437, 256->#2443} else #2449
        [ 2341] store the literal value 6911 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2344] play sound effect 257
        [ 2346] do nothing
        [ 2347] store the literal value 6938 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2350] play sound effect 257
        [ 2352] do nothing
        [ 2353] store the literal value 6964 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2356] play sound effect 260
        [ 2358] do nothing
        [ 2359] store the literal value 6994 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2362] play sound effect 260
        [ 2364] do nothing
        [ 2365] store the literal value 7018 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2368] play sound effect 260
        [ 2370] do nothing
        [ 2371] store the literal value 7043 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2374] play sound effect 261
        [ 2376] do nothing
        [ 2377] store the literal value 7097 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2380] play sound effect 257
        [ 2382] do nothing
        [ 2383] store the literal value 7121 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2386] play sound effect 261
        [ 2388] do nothing
        [ 2389] store the literal value 7176 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2392] play sound effect 262
        [ 2394] do nothing
        [ 2395] store the literal value 7221 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2398] play sound effect 262
        [ 2400] do nothing
        [ 2401] store the literal value 7272 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2404] play sound effect 259
        [ 2406] do nothing
        [ 2407] store the literal value 7355 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2410] do nothing
        [ 2411] store the literal value 7419 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2414] do nothing
        [ 2415] store the literal value 7473 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2418] do nothing
        [ 2419] store the literal value 7545 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2422] play sound effect 258
        [ 2424] do nothing
        [ 2425] store the literal value 7579 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2428] play sound effect 258
        [ 2430] do nothing
        [ 2431] store the literal value 7618 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2434] play sound effect 258
        [ 2436] do nothing
        [ 2437] store the literal value 7657 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2440] play sound effect 258
        [ 2442] do nothing
        [ 2443] store the literal value 7698 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2446] play sound effect 258
        [ 2448] do nothing
        [ 2449] store the literal value 7738 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2452] do nothing
        [ 2453] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2493] display system/chat message #7777: " þ"
        [ 2495] do nothing
        [ 2496] IF NOT(((var(18) & 512) > 0)): GOTO #2775  (else falls through, rejoins #3054)
        [ 2500] set script variable #72 = random_below(100)
        [ 2503] IF NOT(((var(7) == 0) && (var(72) < 4))): GOTO #2770  (else falls through, rejoins #2770)
        [ 2507] set script variable #7 = (var(7) + 1)
        [ 2510] store the literal value 7795 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2513] SWITCH random_below(1): {0->#2516, 1->#2520, 2->#2524, 7->#2528} else #2532
        [ 2516] store the literal value 7796 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2519] do nothing
        [ 2520] store the literal value 7831 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2523] do nothing
        [ 2524] store the literal value 7858 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2527] do nothing
        [ 2528] store the literal value 7897 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2531] do nothing
        [ 2532] store the literal value 7925 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2535] do nothing
        [ 2536] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2546] store the literal value 7978 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2549] set script variable #73 = random_below(4)
        [ 2552] IF NOT(((random_below(1) != 7) && (var(73) >= 3))): GOTO #2559  (else falls through, rejoins #2559)
        [ 2556] set script variable #73 = random_below(3)
        [ 2559] SWITCH var(73): {0->#2562, 1->#2566, 3->#2570, 4->#2574, 5->#2578, 6->#2582, 7->#2586} else #2590
        [ 2562] store the literal value 7979 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2565] do nothing
        [ 2566] store the literal value 7983 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2569] do nothing
        [ 2570] store the literal value 7994 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2573] do nothing
        [ 2574] store the literal value 8015 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2577] do nothing
        [ 2578] store the literal value 8042 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2581] do nothing
        [ 2582] store the literal value 8073 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2585] do nothing
        [ 2586] store the literal value 8102 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2589] do nothing
        [ 2590] store the literal value 8132 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2593] do nothing
        [ 2594] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2610] store the literal value 8147 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2613] SWITCH 4: {1->#2616, 2->#2622, 3->#2628, 4->#2634, 5->#2640, 6->#2646, 7->#2652, 8->#2658, 9->#2664, 10->#2670, 11->#2676, 12->#2682, 13->#2686, 14->#2690, 512->#2694, 32->#2700, 64->#2706, 128->#2712, 256->#2718} else #2724
        [ 2616] store the literal value 8148 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2619] play sound effect 257
        [ 2621] do nothing
        [ 2622] store the literal value 8175 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2625] play sound effect 257
        [ 2627] do nothing
        [ 2628] store the literal value 8201 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2631] play sound effect 260
        [ 2633] do nothing
        [ 2634] store the literal value 8231 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2637] play sound effect 260
        [ 2639] do nothing
        [ 2640] store the literal value 8255 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2643] play sound effect 260
        [ 2645] do nothing
        [ 2646] store the literal value 8280 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2649] play sound effect 261
        [ 2651] do nothing
        [ 2652] store the literal value 8334 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2655] play sound effect 257
        [ 2657] do nothing
        [ 2658] store the literal value 8358 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2661] play sound effect 261
        [ 2663] do nothing
        [ 2664] store the literal value 8413 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2667] play sound effect 262
        [ 2669] do nothing
        [ 2670] store the literal value 8458 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2673] play sound effect 262
        [ 2675] do nothing
        [ 2676] store the literal value 8509 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2679] play sound effect 259
        [ 2681] do nothing
        [ 2682] store the literal value 8592 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2685] do nothing
        [ 2686] store the literal value 8656 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2689] do nothing
        [ 2690] store the literal value 8710 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2693] do nothing
        [ 2694] store the literal value 8782 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2697] play sound effect 258
        [ 2699] do nothing
        [ 2700] store the literal value 8816 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2703] play sound effect 258
        [ 2705] do nothing
        [ 2706] store the literal value 8855 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2709] play sound effect 258
        [ 2711] do nothing
        [ 2712] store the literal value 8894 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2715] play sound effect 258
        [ 2717] do nothing
        [ 2718] store the literal value 8935 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2721] play sound effect 258
        [ 2723] do nothing
        [ 2724] store the literal value 8975 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2727] do nothing
        [ 2728] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2768] display system/chat message #9014: " þ"
        [ 2770] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2775] IF NOT(((var(18) & 128) > 0)): GOTO #3054  (else falls through, rejoins #3054)
        [ 2779] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 2784] set script variable #75 = random_below(100)
        [ 2787] IF NOT(((var(7) == 0) && (var(75) < 4))): GOTO #3054  (else falls through, rejoins #3054)
        [ 2791] set script variable #7 = (var(7) + 1)
        [ 2794] store the literal value 9032 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2797] SWITCH random_below(1): {0->#2800, 1->#2804, 2->#2808, 7->#2812} else #2816
        [ 2800] store the literal value 9033 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2803] do nothing
        [ 2804] store the literal value 9068 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2807] do nothing
        [ 2808] store the literal value 9095 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2811] do nothing
        [ 2812] store the literal value 9134 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2815] do nothing
        [ 2816] store the literal value 9162 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2819] do nothing
        [ 2820] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2830] store the literal value 9215 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2833] set script variable #76 = random_below(4)
        [ 2836] IF NOT(((random_below(1) != 7) && (var(76) >= 3))): GOTO #2843  (else falls through, rejoins #2843)
        [ 2840] set script variable #76 = random_below(3)
        [ 2843] SWITCH var(76): {0->#2846, 1->#2850, 3->#2854, 4->#2858, 5->#2862, 6->#2866, 7->#2870} else #2874
        [ 2846] store the literal value 9216 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2849] do nothing
        [ 2850] store the literal value 9220 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2853] do nothing
        [ 2854] store the literal value 9231 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2857] do nothing
        [ 2858] store the literal value 9252 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2861] do nothing
        [ 2862] store the literal value 9279 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2865] do nothing
        [ 2866] store the literal value 9310 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2869] do nothing
        [ 2870] store the literal value 9339 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2873] do nothing
        [ 2874] store the literal value 9369 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2877] do nothing
        [ 2878] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2894] store the literal value 9384 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2897] SWITCH 5: {1->#2900, 2->#2906, 3->#2912, 4->#2918, 5->#2924, 6->#2930, 7->#2936, 8->#2942, 9->#2948, 10->#2954, 11->#2960, 12->#2966, 13->#2970, 14->#2974, 512->#2978, 32->#2984, 64->#2990, 128->#2996, 256->#3002} else #3008
        [ 2900] store the literal value 9385 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2903] play sound effect 257
        [ 2905] do nothing
        [ 2906] store the literal value 9412 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2909] play sound effect 257
        [ 2911] do nothing
        [ 2912] store the literal value 9438 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2915] play sound effect 260
        [ 2917] do nothing
        [ 2918] store the literal value 9468 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2921] play sound effect 260
        [ 2923] do nothing
        [ 2924] store the literal value 9492 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2927] play sound effect 260
        [ 2929] do nothing
        [ 2930] store the literal value 9517 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2933] play sound effect 261
        [ 2935] do nothing
        [ 2936] store the literal value 9571 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2939] play sound effect 257
        [ 2941] do nothing
        [ 2942] store the literal value 9595 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2945] play sound effect 261
        [ 2947] do nothing
        [ 2948] store the literal value 9650 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2951] play sound effect 262
        [ 2953] do nothing
        [ 2954] store the literal value 9695 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2957] play sound effect 262
        [ 2959] do nothing
        [ 2960] store the literal value 9746 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2963] play sound effect 259
        [ 2965] do nothing
        [ 2966] store the literal value 9829 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2969] do nothing
        [ 2970] store the literal value 9893 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2973] do nothing
        [ 2974] store the literal value 9947 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2977] do nothing
        [ 2978] store the literal value 10019 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2981] play sound effect 258
        [ 2983] do nothing
        [ 2984] store the literal value 10053 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2987] play sound effect 258
        [ 2989] do nothing
        [ 2990] store the literal value 10092 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2993] play sound effect 258
        [ 2995] do nothing
        [ 2996] store the literal value 10131 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2999] play sound effect 258
        [ 3001] do nothing
        [ 3002] store the literal value 10172 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3005] play sound effect 258
        [ 3007] do nothing
        [ 3008] store the literal value 10212 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3011] do nothing
        [ 3012] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3052] display system/chat message #10251: " þ"
        [ 3054] do nothing
        [ 3055] IF NOT(((var(18) & 512) > 0)): GOTO #3064  (else falls through, rejoins #3064)
        [ 3059] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3064] do nothing
        [ 3065] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3068, 64->#3074, 128->#3080, 256->#3086} else #3092
        [ 3068] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 3073] do nothing
        [ 3074] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 3079] do nothing
        [ 3080] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 3085] do nothing
        [ 3086] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 3091] do nothing
        [ 3092] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3097] do nothing
        [ 3098] do nothing
        [ 3099] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3109] do nothing
        [ 3110] IF NOT((var(55) > 0)): GOTO #3389  (else falls through, rejoins #3394)
        [ 3114] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3119] set script variable #78 = random_below(100)
        [ 3122] IF NOT(((var(7) == 0) && (var(78) < 4))): GOTO #3389  (else falls through, rejoins #3389)
        [ 3126] set script variable #7 = (var(7) + 1)
        [ 3129] store the literal value 10269 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3132] SWITCH random_below(1): {0->#3135, 1->#3139, 2->#3143, 7->#3147} else #3151
        [ 3135] store the literal value 10270 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3138] do nothing
        [ 3139] store the literal value 10305 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3142] do nothing
        [ 3143] store the literal value 10332 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3146] do nothing
        [ 3147] store the literal value 10371 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3150] do nothing
        [ 3151] store the literal value 10399 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3154] do nothing
        [ 3155] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3165] store the literal value 10452 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3168] set script variable #79 = random_below(4)
        [ 3171] IF NOT(((random_below(1) != 7) && (var(79) >= 3))): GOTO #3178  (else falls through, rejoins #3178)
        [ 3175] set script variable #79 = random_below(3)
        [ 3178] SWITCH var(79): {0->#3181, 1->#3185, 3->#3189, 4->#3193, 5->#3197, 6->#3201, 7->#3205} else #3209
        [ 3181] store the literal value 10453 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3184] do nothing
        [ 3185] store the literal value 10457 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3188] do nothing
        [ 3189] store the literal value 10468 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3192] do nothing
        [ 3193] store the literal value 10489 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3196] do nothing
        [ 3197] store the literal value 10516 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3200] do nothing
        [ 3201] store the literal value 10547 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3204] do nothing
        [ 3205] store the literal value 10576 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3208] do nothing
        [ 3209] store the literal value 10606 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3212] do nothing
        [ 3213] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3229] store the literal value 10621 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3232] SWITCH 6: {1->#3235, 2->#3241, 3->#3247, 4->#3253, 5->#3259, 6->#3265, 7->#3271, 8->#3277, 9->#3283, 10->#3289, 11->#3295, 12->#3301, 13->#3305, 14->#3309, 512->#3313, 32->#3319, 64->#3325, 128->#3331, 256->#3337} else #3343
        [ 3235] store the literal value 10622 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3238] play sound effect 257
        [ 3240] do nothing
        [ 3241] store the literal value 10649 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3244] play sound effect 257
        [ 3246] do nothing
        [ 3247] store the literal value 10675 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3250] play sound effect 260
        [ 3252] do nothing
        [ 3253] store the literal value 10705 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3256] play sound effect 260
        [ 3258] do nothing
        [ 3259] store the literal value 10729 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3262] play sound effect 260
        [ 3264] do nothing
        [ 3265] store the literal value 10754 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3268] play sound effect 261
        [ 3270] do nothing
        [ 3271] store the literal value 10808 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3274] play sound effect 257
        [ 3276] do nothing
        [ 3277] store the literal value 10832 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3280] play sound effect 261
        [ 3282] do nothing
        [ 3283] store the literal value 10887 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3286] play sound effect 262
        [ 3288] do nothing
        [ 3289] store the literal value 10932 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3292] play sound effect 262
        [ 3294] do nothing
        [ 3295] store the literal value 10983 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3298] play sound effect 259
        [ 3300] do nothing
        [ 3301] store the literal value 11066 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3304] do nothing
        [ 3305] store the literal value 11130 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3308] do nothing
        [ 3309] store the literal value 11184 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3312] do nothing
        [ 3313] store the literal value 11256 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3316] play sound effect 258
        [ 3318] do nothing
        [ 3319] store the literal value 11290 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3322] play sound effect 258
        [ 3324] do nothing
        [ 3325] store the literal value 11329 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3328] play sound effect 258
        [ 3330] do nothing
        [ 3331] store the literal value 11368 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3334] play sound effect 258
        [ 3336] do nothing
        [ 3337] store the literal value 11409 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3340] play sound effect 258
        [ 3342] do nothing
        [ 3343] store the literal value 11449 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3346] do nothing
        [ 3347] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3387] display system/chat message #11488: " þ"
        [ 3389] order unit-slot #9 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 3394] do nothing
        [ 3395] IF NOT((set_unit_behavior(7, 9) != 3)): GOTO #3404  (else falls through, rejoins #3404)
        [ 3399] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3404] do nothing
        [ 3405] IF NOT((((var(18) & 7136) == 0) && (var(55) == 0))): GOTO #3778  (else falls through, rejoins #3802)
        [ 3409] set script variable #81 = random_below(100)
        [ 3412] IF NOT(((var(7) == 0) && (var(81) < 4))): GOTO #3679  (else falls through, rejoins #3679)
        [ 3416] set script variable #7 = (var(7) + 1)
        [ 3419] store the literal value 11506 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3422] SWITCH random_below(1): {0->#3425, 1->#3429, 2->#3433, 7->#3437} else #3441
        [ 3425] store the literal value 11507 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3428] do nothing
        [ 3429] store the literal value 11542 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3432] do nothing
        [ 3433] store the literal value 11569 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3436] do nothing
        [ 3437] store the literal value 11608 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3440] do nothing
        [ 3441] store the literal value 11636 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3444] do nothing
        [ 3445] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3455] store the literal value 11689 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3458] set script variable #82 = random_below(4)
        [ 3461] IF NOT(((random_below(1) != 7) && (var(82) >= 3))): GOTO #3468  (else falls through, rejoins #3468)
        [ 3465] set script variable #82 = random_below(3)
        [ 3468] SWITCH var(82): {0->#3471, 1->#3475, 3->#3479, 4->#3483, 5->#3487, 6->#3491, 7->#3495} else #3499
        [ 3471] store the literal value 11690 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3474] do nothing
        [ 3475] store the literal value 11694 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3478] do nothing
        [ 3479] store the literal value 11705 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3482] do nothing
        [ 3483] store the literal value 11726 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3486] do nothing
        [ 3487] store the literal value 11753 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3490] do nothing
        [ 3491] store the literal value 11784 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3494] do nothing
        [ 3495] store the literal value 11813 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3498] do nothing
        [ 3499] store the literal value 11843 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3502] do nothing
        [ 3503] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3519] store the literal value 11858 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3522] SWITCH 7: {1->#3525, 2->#3531, 3->#3537, 4->#3543, 5->#3549, 6->#3555, 7->#3561, 8->#3567, 9->#3573, 10->#3579, 11->#3585, 12->#3591, 13->#3595, 14->#3599, 512->#3603, 32->#3609, 64->#3615, 128->#3621, 256->#3627} else #3633
        [ 3525] store the literal value 11859 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3528] play sound effect 257
        [ 3530] do nothing
        [ 3531] store the literal value 11886 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3534] play sound effect 257
        [ 3536] do nothing
        [ 3537] store the literal value 11912 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3540] play sound effect 260
        [ 3542] do nothing
        [ 3543] store the literal value 11942 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3546] play sound effect 260
        [ 3548] do nothing
        [ 3549] store the literal value 11966 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3552] play sound effect 260
        [ 3554] do nothing
        [ 3555] store the literal value 11991 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3558] play sound effect 261
        [ 3560] do nothing
        [ 3561] store the literal value 12045 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3564] play sound effect 257
        [ 3566] do nothing
        [ 3567] store the literal value 12069 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3570] play sound effect 261
        [ 3572] do nothing
        [ 3573] store the literal value 12124 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3576] play sound effect 262
        [ 3578] do nothing
        [ 3579] store the literal value 12169 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3582] play sound effect 262
        [ 3584] do nothing
        [ 3585] store the literal value 12220 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3588] play sound effect 259
        [ 3590] do nothing
        [ 3591] store the literal value 12303 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3594] do nothing
        [ 3595] store the literal value 12367 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3598] do nothing
        [ 3599] store the literal value 12421 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3602] do nothing
        [ 3603] store the literal value 12493 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3606] play sound effect 258
        [ 3608] do nothing
        [ 3609] store the literal value 12527 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3612] play sound effect 258
        [ 3614] do nothing
        [ 3615] store the literal value 12566 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3618] play sound effect 258
        [ 3620] do nothing
        [ 3621] store the literal value 12605 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3624] play sound effect 258
        [ 3626] do nothing
        [ 3627] store the literal value 12646 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3630] play sound effect 258
        [ 3632] do nothing
        [ 3633] store the literal value 12686 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3636] do nothing
        [ 3637] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3677] display system/chat message #12725: " þ"
        [ 3679] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3682, 64->#3700, 128->#3718, 256->#3736} else #3754
        [ 3682] IF NOT(group_condition_ref(1, 9)): GOTO #3690  (else falls through, rejoins #3690)
        [ 3686] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3690] define condition-slot #1 as (variable-ref 1, expression-offset 3058)
        [ 3694] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 3699] do nothing
        [ 3700] IF NOT(group_condition_ref(2, 9)): GOTO #3708  (else falls through, rejoins #3708)
        [ 3704] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3708] define condition-slot #2 as (variable-ref 2, expression-offset 3079)
        [ 3712] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 3717] do nothing
        [ 3718] IF NOT(group_condition_ref(3, 9)): GOTO #3726  (else falls through, rejoins #3726)
        [ 3722] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3726] define condition-slot #3 as (variable-ref 3, expression-offset 3100)
        [ 3730] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 3735] do nothing
        [ 3736] IF NOT(group_condition_ref(4, 9)): GOTO #3744  (else falls through, rejoins #3744)
        [ 3740] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3744] define condition-slot #4 as (variable-ref 4, expression-offset 3121)
        [ 3748] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 3753] do nothing
        [ 3754] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 3759] do nothing
        [ 3760] do nothing
        [ 3761] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3771] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #3778  (else falls through, rejoins #3778)
        [ 3775] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 3778] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #3793  (else falls through, rejoins #3802)
        [ 3782] arm timer #1 to expire 2 turn(s) from now
        [ 3785] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 3788] order unit-slot #9 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 3793] IF NOT(timer_expired(1)): GOTO #3802  (else falls through, rejoins #3802)
        [ 3797] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3802] do nothing
        [ 3803] do nothing
        [ 3804] IF NOT((set_unit_behavior(7, 9) != 4)): GOTO #4083  (else falls through, rejoins #4098)
        [ 3808] set script variable #84 = random_below(100)
        [ 3811] IF NOT(((var(7) == 0) && (var(84) < 4))): GOTO #4078  (else falls through, rejoins #4078)
        [ 3815] set script variable #7 = (var(7) + 1)
        [ 3818] store the literal value 12743 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3821] SWITCH random_below(1): {0->#3824, 1->#3828, 2->#3832, 7->#3836} else #3840
        [ 3824] store the literal value 12744 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3827] do nothing
        [ 3828] store the literal value 12779 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3831] do nothing
        [ 3832] store the literal value 12806 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3835] do nothing
        [ 3836] store the literal value 12845 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3839] do nothing
        [ 3840] store the literal value 12873 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3843] do nothing
        [ 3844] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3854] store the literal value 12926 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3857] set script variable #85 = random_below(4)
        [ 3860] IF NOT(((random_below(1) != 7) && (var(85) >= 3))): GOTO #3867  (else falls through, rejoins #3867)
        [ 3864] set script variable #85 = random_below(3)
        [ 3867] SWITCH var(85): {0->#3870, 1->#3874, 3->#3878, 4->#3882, 5->#3886, 6->#3890, 7->#3894} else #3898
        [ 3870] store the literal value 12927 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3873] do nothing
        [ 3874] store the literal value 12931 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3877] do nothing
        [ 3878] store the literal value 12942 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3881] do nothing
        [ 3882] store the literal value 12963 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3885] do nothing
        [ 3886] store the literal value 12990 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3889] do nothing
        [ 3890] store the literal value 13021 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3893] do nothing
        [ 3894] store the literal value 13050 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3897] do nothing
        [ 3898] store the literal value 13080 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3901] do nothing
        [ 3902] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3918] store the literal value 13095 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3921] SWITCH 9: {1->#3924, 2->#3930, 3->#3936, 4->#3942, 5->#3948, 6->#3954, 7->#3960, 8->#3966, 9->#3972, 10->#3978, 11->#3984, 12->#3990, 13->#3994, 14->#3998, 512->#4002, 32->#4008, 64->#4014, 128->#4020, 256->#4026} else #4032
        [ 3924] store the literal value 13096 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3927] play sound effect 257
        [ 3929] do nothing
        [ 3930] store the literal value 13123 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3933] play sound effect 257
        [ 3935] do nothing
        [ 3936] store the literal value 13149 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3939] play sound effect 260
        [ 3941] do nothing
        [ 3942] store the literal value 13179 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3945] play sound effect 260
        [ 3947] do nothing
        [ 3948] store the literal value 13203 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3951] play sound effect 260
        [ 3953] do nothing
        [ 3954] store the literal value 13228 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3957] play sound effect 261
        [ 3959] do nothing
        [ 3960] store the literal value 13282 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3963] play sound effect 257
        [ 3965] do nothing
        [ 3966] store the literal value 13306 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3969] play sound effect 261
        [ 3971] do nothing
        [ 3972] store the literal value 13361 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3975] play sound effect 262
        [ 3977] do nothing
        [ 3978] store the literal value 13406 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3981] play sound effect 262
        [ 3983] do nothing
        [ 3984] store the literal value 13457 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3987] play sound effect 259
        [ 3989] do nothing
        [ 3990] store the literal value 13540 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3993] do nothing
        [ 3994] store the literal value 13604 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3997] do nothing
        [ 3998] store the literal value 13658 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4001] do nothing
        [ 4002] store the literal value 13730 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4005] play sound effect 258
        [ 4007] do nothing
        [ 4008] store the literal value 13764 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4011] play sound effect 258
        [ 4013] do nothing
        [ 4014] store the literal value 13803 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4017] play sound effect 258
        [ 4019] do nothing
        [ 4020] store the literal value 13842 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4023] play sound effect 258
        [ 4025] do nothing
        [ 4026] store the literal value 13883 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4029] play sound effect 258
        [ 4031] do nothing
        [ 4032] store the literal value 13923 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4035] do nothing
        [ 4036] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4076] display system/chat message #13962: " þ"
        [ 4078] order unit-slot #9 to move, speed/priority 4, destination-type tag 3, destination arg 10
        [ 4083] set script variable #87 = set_unit_behavior(10, 9)
        [ 4086] set unit-slot #11 = var(87)
        [ 4089] IF NOT(group_condition(11)): GOTO #4098  (else falls through, rejoins #4098)
        [ 4093] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4098] do nothing
        [ 4099] do nothing
        [ 4100] IF NOT((((var(18) & 7136) == 0) & (var(55) == 0))): GOTO #4473  (else falls through, rejoins #4485)
        [ 4104] set script variable #88 = random_below(100)
        [ 4107] IF NOT(((var(7) == 0) && (var(88) < 4))): GOTO #4374  (else falls through, rejoins #4374)
        [ 4111] set script variable #7 = (var(7) + 1)
        [ 4114] store the literal value 13980 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4117] SWITCH random_below(1): {0->#4120, 1->#4124, 2->#4128, 7->#4132} else #4136
        [ 4120] store the literal value 13981 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4123] do nothing
        [ 4124] store the literal value 14016 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4127] do nothing
        [ 4128] store the literal value 14043 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4131] do nothing
        [ 4132] store the literal value 14082 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4135] do nothing
        [ 4136] store the literal value 14110 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4139] do nothing
        [ 4140] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4150] store the literal value 14163 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4153] set script variable #89 = random_below(4)
        [ 4156] IF NOT(((random_below(1) != 7) && (var(89) >= 3))): GOTO #4163  (else falls through, rejoins #4163)
        [ 4160] set script variable #89 = random_below(3)
        [ 4163] SWITCH var(89): {0->#4166, 1->#4170, 3->#4174, 4->#4178, 5->#4182, 6->#4186, 7->#4190} else #4194
        [ 4166] store the literal value 14164 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4169] do nothing
        [ 4170] store the literal value 14168 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4173] do nothing
        [ 4174] store the literal value 14179 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4177] do nothing
        [ 4178] store the literal value 14200 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4181] do nothing
        [ 4182] store the literal value 14227 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4185] do nothing
        [ 4186] store the literal value 14258 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4189] do nothing
        [ 4190] store the literal value 14287 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4193] do nothing
        [ 4194] store the literal value 14317 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4197] do nothing
        [ 4198] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4214] store the literal value 14332 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4217] SWITCH 7: {1->#4220, 2->#4226, 3->#4232, 4->#4238, 5->#4244, 6->#4250, 7->#4256, 8->#4262, 9->#4268, 10->#4274, 11->#4280, 12->#4286, 13->#4290, 14->#4294, 512->#4298, 32->#4304, 64->#4310, 128->#4316, 256->#4322} else #4328
        [ 4220] store the literal value 14333 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4223] play sound effect 257
        [ 4225] do nothing
        [ 4226] store the literal value 14360 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4229] play sound effect 257
        [ 4231] do nothing
        [ 4232] store the literal value 14386 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4235] play sound effect 260
        [ 4237] do nothing
        [ 4238] store the literal value 14416 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4241] play sound effect 260
        [ 4243] do nothing
        [ 4244] store the literal value 14440 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4247] play sound effect 260
        [ 4249] do nothing
        [ 4250] store the literal value 14465 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4253] play sound effect 261
        [ 4255] do nothing
        [ 4256] store the literal value 14519 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4259] play sound effect 257
        [ 4261] do nothing
        [ 4262] store the literal value 14543 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4265] play sound effect 261
        [ 4267] do nothing
        [ 4268] store the literal value 14598 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4271] play sound effect 262
        [ 4273] do nothing
        [ 4274] store the literal value 14643 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4277] play sound effect 262
        [ 4279] do nothing
        [ 4280] store the literal value 14694 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4283] play sound effect 259
        [ 4285] do nothing
        [ 4286] store the literal value 14777 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4289] do nothing
        [ 4290] store the literal value 14841 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4293] do nothing
        [ 4294] store the literal value 14895 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4297] do nothing
        [ 4298] store the literal value 14967 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4301] play sound effect 258
        [ 4303] do nothing
        [ 4304] store the literal value 15001 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4307] play sound effect 258
        [ 4309] do nothing
        [ 4310] store the literal value 15040 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4313] play sound effect 258
        [ 4315] do nothing
        [ 4316] store the literal value 15079 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4319] play sound effect 258
        [ 4321] do nothing
        [ 4322] store the literal value 15120 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4325] play sound effect 258
        [ 4327] do nothing
        [ 4328] store the literal value 15160 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4331] do nothing
        [ 4332] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4372] display system/chat message #15199: " þ""
        [ 4374] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#4377, 64->#4395, 128->#4413, 256->#4431} else #4449
        [ 4377] IF NOT(group_condition_ref(1, 9)): GOTO #4385  (else falls through, rejoins #4385)
        [ 4381] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4385] define condition-slot #1 as (variable-ref 1, expression-offset 3554)
        [ 4389] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 4394] do nothing
        [ 4395] IF NOT(group_condition_ref(2, 9)): GOTO #4403  (else falls through, rejoins #4403)
        [ 4399] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4403] define condition-slot #2 as (variable-ref 2, expression-offset 3575)
        [ 4407] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 4412] do nothing
        [ 4413] IF NOT(group_condition_ref(3, 9)): GOTO #4421  (else falls through, rejoins #4421)
        [ 4417] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4421] define condition-slot #3 as (variable-ref 3, expression-offset 3596)
        [ 4425] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 4430] do nothing
        [ 4431] IF NOT(group_condition_ref(4, 9)): GOTO #4439  (else falls through, rejoins #4439)
        [ 4435] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4439] define condition-slot #4 as (variable-ref 4, expression-offset 3617)
        [ 4443] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 4448] do nothing
        [ 4449] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 4454] do nothing
        [ 4455] do nothing
        [ 4456] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4466] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #4473  (else falls through, rejoins #4473)
        [ 4470] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 4473] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #4485  (else falls through, rejoins #4485)
        [ 4477] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 4480] order unit-slot #9 to move, speed/priority var(59), destination-type tag 0, destination arg 0
        [ 4485] do nothing
        [ 4486] do nothing
        [ 4487] do nothing
        [ 4488] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 4514] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 4517] GOTO #1368
        [ 4519] IF NOT(((!all_group_alive(2) && !var(6)) && stat(0))): GOTO #4528  (else falls through, rejoins #4528)
        [ 4523] display system/chat message #15217: "Cybrid threat eliminated."
        [ 4525] set script variable #6 = 1
        [ 4528] set script variable #91 = 0
        [ 4531] set script variable #92 = 0
        [ 4534] set script variable #93 = 0
        [ 4537] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 4540] WHILE set_unit_behavior(0, 1): loop below; exit -> #4612 (500-iteration guard)
        [ 4543] set script variable #94 = set_unit_behavior(10, 1)
        [ 4546] SWITCH var(94): {1->#4549, 2->#4553, 3->#4557, 4->#4561, 5->#4565, 6->#4569, 7->#4573, 8->#4577} else #4581
        [ 4549] set script variable #93 = 1
        [ 4552] do nothing
        [ 4553] set script variable #93 = 2
        [ 4556] do nothing
        [ 4557] set script variable #93 = 4
        [ 4560] do nothing
        [ 4561] set script variable #93 = 8
        [ 4564] do nothing
        [ 4565] set script variable #93 = 16
        [ 4568] do nothing
        [ 4569] set script variable #93 = 32
        [ 4572] do nothing
        [ 4573] set script variable #93 = 64
        [ 4576] do nothing
        [ 4577] set script variable #93 = 128
        [ 4580] do nothing
        [ 4581] do nothing
        [ 4582] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4600] IF NOT(((var(91) & var(93)) == 0)): GOTO #4607  (else falls through, rejoins #4607)
        [ 4604] set script variable #91 = (var(91) + var(93))
        [ 4607] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 4610] GOTO #4543
        [ 4612] IF NOT((var(91) < var(9))): GOTO #4758  (else falls through, rejoins #4758)
        [ 4616] set script variable #95 = (var(9) - var(91))
        [ 4619] set script variable #96 = 0
        [ 4622] set script variable #97 = 0
        [ 4625] WHILE (var(96) < var(10)): loop below; exit -> #4693 (500-iteration guard)
        [ 4628] SWITCH var(96): {1->#4631, 2->#4635, 3->#4639, 4->#4643, 5->#4647, 6->#4651, 7->#4655, 8->#4659} else #4663
        [ 4631] set script variable #97 = 1
        [ 4634] do nothing
        [ 4635] set script variable #97 = 2
        [ 4638] do nothing
        [ 4639] set script variable #97 = 4
        [ 4642] do nothing
        [ 4643] set script variable #97 = 8
        [ 4646] do nothing
        [ 4647] set script variable #97 = 16
        [ 4650] do nothing
        [ 4651] set script variable #97 = 32
        [ 4654] do nothing
        [ 4655] set script variable #97 = 64
        [ 4658] do nothing
        [ 4659] set script variable #97 = 128
        [ 4662] do nothing
        [ 4663] do nothing
        [ 4664] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4682] IF NOT(((var(97) & var(9)) > (var(97) & var(91)))): GOTO #4688  (else falls through, rejoins #4688)
        [ 4686] display system/chat message #15243: "Player üç"
        [ 4688] set script variable #96 = (var(96) + 1)
        [ 4691] GOTO #4628
        [ 4693] set script variable #9 = var(91)
        [ 4696] SWITCH var(12): {1->#4699, 2->#4703, 3->#4707, 4->#4711, 5->#4715, 6->#4719, 7->#4723, 8->#4727} else #4731
        [ 4699] set script variable #97 = 1
        [ 4702] do nothing
        [ 4703] set script variable #97 = 2
        [ 4706] do nothing
        [ 4707] set script variable #97 = 4
        [ 4710] do nothing
        [ 4711] set script variable #97 = 8
        [ 4714] do nothing
        [ 4715] set script variable #97 = 16
        [ 4718] do nothing
        [ 4719] set script variable #97 = 32
        [ 4722] do nothing
        [ 4723] set script variable #97 = 64
        [ 4726] do nothing
        [ 4727] set script variable #97 = 128
        [ 4730] do nothing
        [ 4731] do nothing
        [ 4732] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4750] IF NOT(((var(97) & var(9)) == 0)): GOTO #4758  (else falls through, rejoins #4758)
        [ 4754] set script variable #13 = 2
        [ 4757] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4758] set script variable #3 = 0
        [ 4761] set script variable #98 = 0
        [ 4764] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #2
        [ 4767] WHILE set_unit_behavior(0, 2): loop below; exit -> #4781 (500-iteration guard)
        [ 4770] set script variable #3 = 1
        [ 4773] set script variable #98 = (var(98) + 1)
        [ 4776] advance unit-slot #2 to the next unit in group #2 after the current one
        [ 4779] GOTO #4770
        [ 4781] IF NOT((group_condition(3) && !all_group_alive(2))): GOTO #4789  (else falls through, rejoins #4789)
        [ 4785] set script variable #13 = 3
        [ 4788] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4789] ONCE((var(13) > 0), flag[1]): run block below -> #4794
        [ 4793] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4794] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 4795] IF NOT((var(13) == 1)): GOTO #4806  (else falls through, rejoins #4824)
            [ 4799] play sound effect 35
            [ 4801] display system/chat message #15265: "All immediate threats eliminated. "
            [ 4803] set the objective state of unit 1 to 1
            [ 4806] IF NOT((var(13) == 3)): GOTO #4819  (else falls through, rejoins #4824)
            [ 4810] play sound effect 35
            [ 4812] set the objective state of unit 1 to 1
            [ 4815] display system/chat message #15300: "The Cybrid forces have been eliminated."
            [ 4817] end the current turn (reason/flag #15340), then jump to scenario phase 3
            [ 4819] display system/chat message #15396: "Your mission was a failure."
            [ 4821] set the objective state of unit 1 to 2
            [ 4824] advance to the next scenario phase (no effect if already at the last phase)
            [ 4825] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
