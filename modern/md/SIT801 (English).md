# SIT801.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=610, phase1=620, phase2=1603, phase3=5411
; 17599 instruction word(s) available from the start offset
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
    [   29] set script variable #15 = ((10 + var(10)) - var(11))
    [   32] set script variable #15 = (var(15) / 2)
    [   35] IF NOT((var(15) < 0)): GOTO #42  (else falls through, rejoins #42)
    [   39] set script variable #15 = 0
    [   42] set script variable #21 = 1
    [   45] set script variable #22 = 1
    [   48] WHILE (var(21) <= var(10)): loop below; exit -> #113 (500-iteration guard)
    [   51] SWITCH var(21): {1->#54, 2->#58, 3->#62, 4->#66, 5->#70, 6->#74, 7->#78, 8->#82} else #86
    [   54] set script variable #22 = 1
    [   57] do nothing
    [   58] set script variable #22 = 2
    [   61] do nothing
    [   62] set script variable #22 = 4
    [   65] do nothing
    [   66] set script variable #22 = 8
    [   69] do nothing
    [   70] set script variable #22 = 16
    [   73] do nothing
    [   74] set script variable #22 = 32
    [   77] do nothing
    [   78] set script variable #22 = 64
    [   81] do nothing
    [   82] set script variable #22 = 128
    [   85] do nothing
    [   86] do nothing
    [   87] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
    [  105] set script variable #9 = (var(9) + var(22))
    [  108] set script variable #21 = (var(21) + 1)
    [  111] GOTO #51
    [  113] set script variable #23 = (((360 / var(10)) * var(12)) + (var(10) + (var(11) * 2)))
    [  116] set script variable #24 = ((31 - var(15)) - 3)
    [  119] set hex-var #8 = the point (var(23) - 180) steps along the path toward var(24)
    [  123] set script variable #25 = stat(7)
    [  126] set script variable #26 = random_below((var(10) - 1))
    [  129] set script variable #27 = (var(26) + 1)
    [  132] set script variable #28 = (((360 / var(10)) * var(26)) + (var(10) + (var(11) * 2)))
    [  135] set script variable #29 = (((360 / var(10)) * var(27)) + (var(10) + (var(11) * 2)))
    [  138] set script variable #30 = ((var(28) + var(29)) / 2)
    [  141] set script variable #31 = 1
    [  144] set hex-var #10 = (0, 0)
    [  148] set script variable #34 = set_objective_at_hex(6)
    [  151] WHILE (var(31) <= var(10)): loop below; exit -> #227 (500-iteration guard)
    [  154] set script variable #35 = random_below(180)
    [  157] set script variable #33 = var(24)
    [  160] set script variable #32 = (((360 / var(10)) * var(31)) + (var(10) + (var(11) * 2)))
    [  163] IF NOT((var(10) == 2)): GOTO #170  (else falls through, rejoins #170)
    [  167] set script variable #32 = ((var(32) - 90) + var(35))
    [  170] IF NOT((var(10) == 3)): GOTO #177  (else falls through, rejoins #177)
    [  174] set script variable #32 = ((var(32) - 60) + (var(35) / 2))
    [  177] set hex-var #9 = the point (var(32) - 180) steps along the path toward var(33)
    [  181] IF NOT((var(25) == 1)): GOTO #211  (else falls through, rejoins #222)
    [  185] IF NOT((var(31) == var(12))): GOTO #200  (else falls through, rejoins #211)
    [  189] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #5
    [  194] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  200] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #7
    [  205] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  211] spawn a unit of type 31 (stationary structure/turret) (minimum weapon range var(31)) at hex-ref #9, remember it as unit-slot #7
    [  216] place an objective marker at hex-var #9 with params ((random_below(3) + var(34)) - 1), 4, 7, 100
    [  222] set script variable #31 = (var(31) + 1)
    [  225] GOTO #154
    [  227] IF NOT((var(8) == 0)): GOTO #234  (else falls through, rejoins #234)
    [  231] set script variable #8 = (random_below(var(36)) + var(37))
    [  234] set script variable #17 = ((stat(0) * 4) / 1)
    [  237] set script variable #17 = (var(17) - 200)
    [  240] set script variable #21 = 8192
    [  243] WHILE (var(21) > 500): loop below; exit -> #258 (500-iteration guard)
    [  246] IF NOT((var(17) < var(21))): GOTO #253  (else falls through, rejoins #253)
    [  250] set script variable #15 = (var(15) + 1)
    [  253] set script variable #21 = (var(21) / 3)
    [  256] GOTO #246
    [  258] IF NOT((var(17) > 50)): GOTO #279  (else falls through, rejoins #282)
    [  262] set script variable #16 = (var(17) / 4)
    [  265] IF NOT((var(16) < 50)): GOTO #272  (else falls through, rejoins #279)
    [  269] set script variable #16 = 50
    [  272] IF NOT((var(16) > 1200)): GOTO #279  (else falls through, rejoins #279)
    [  276] set script variable #16 = 1200
    [  279] set script variable #16 = var(17)
    [  282] set script variable #17 = (var(17) - var(16))
    [  285] set script variable #38 = 0
    [  288] set script variable #39 = 12
    [  291] set script variable #40 = 27
    [  294] set script variable #41 = 45
    [  297] set script variable #42 = 90
    [  300] IF NOT((var(39) > (var(15) + 5))): GOTO #307  (else falls through, rejoins #310)
    [  304] set script variable #39 = (var(39) - var(15))
    [  307] set script variable #39 = 5
    [  310] IF NOT((var(40) > (var(15) + 10))): GOTO #317  (else falls through, rejoins #320)
    [  314] set script variable #40 = (var(40) - var(15))
    [  317] set script variable #40 = 10
    [  320] set script variable #39 = ((var(39) * 4) / 10)
    [  323] set script variable #40 = ((var(40) * 7) / 10)
    [  326] IF NOT((var(10) == 1)): GOTO #333  (else falls through, rejoins #333)
    [  330] set script variable #30 = ((var(32) - 60) + random_below(90))
    [  333] IF NOT((var(38) == 0)): GOTO #340  (else falls through, rejoins #340)
    [  337] set script variable #38 = (var(39) + random_below((var(40) - var(39))))
    [  340] IF NOT((var(30) == 0)): GOTO #347  (else falls through, rejoins #347)
    [  344] set script variable #30 = ((random_below(var(42)) + var(41)) - (var(42) / 2))
    [  347] set hex-var #5 = the point var(30) steps along the path toward var(38)
    [  351] do nothing (message no-op)
    [  352] (UNKNOWN OPCODE 0x00bb) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  993] set script variable #14 = 0
        [  996] IF NOT(timer_expired(2)): GOTO #4525  (else falls through, rejoins #4525)
        [ 1000] arm timer #2 to expire 1 turn(s) from now
        [ 1003] set script variable #7 = 0
        [ 1006] IF NOT(group_all_alive(5)): GOTO #1010  (else falls through, rejoins #1010)
        [ 1010] set script variable #54 = 0
        [ 1013] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1016] WHILE set_unit_behavior(0, 9): loop below; exit -> #1305 (500-iteration guard)
        [ 1019] IF NOT((set_unit_behavior(9, 9) > 0)): GOTO #1300  (else falls through, rejoins #1300)
        [ 1023] set script variable #55 = random_below(100)
        [ 1026] IF NOT(((var(7) == 0) && (var(55) < 4))): GOTO #1293  (else falls through, rejoins #1293)
        [ 1030] set script variable #7 = (var(7) + 1)
        [ 1033] store the literal value 1576 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1036] SWITCH random_below(4): {0->#1039, 1->#1043, 2->#1047, 7->#1051} else #1055
        [ 1039] store the literal value 1577 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1042] do nothing
        [ 1043] store the literal value 1612 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1046] do nothing
        [ 1047] store the literal value 1639 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1050] do nothing
        [ 1051] store the literal value 1678 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1054] do nothing
        [ 1055] store the literal value 1706 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1058] do nothing
        [ 1059] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1069] store the literal value 1759 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1072] set script variable #56 = random_below(1)
        [ 1075] IF NOT(((random_below(4) != 7) && (var(56) >= 3))): GOTO #1082  (else falls through, rejoins #1082)
        [ 1079] set script variable #56 = random_below(3)
        [ 1082] SWITCH var(56): {0->#1085, 1->#1089, 3->#1093, 4->#1097, 5->#1101, 6->#1105, 7->#1109} else #1113
        [ 1085] store the literal value 1760 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1088] do nothing
        [ 1089] store the literal value 1764 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1092] do nothing
        [ 1093] store the literal value 1775 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1096] do nothing
        [ 1097] store the literal value 1796 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1100] do nothing
        [ 1101] store the literal value 1823 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1104] do nothing
        [ 1105] store the literal value 1854 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1108] do nothing
        [ 1109] store the literal value 1883 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1112] do nothing
        [ 1113] store the literal value 1913 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1116] do nothing
        [ 1117] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1133] store the literal value 1928 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1136] SWITCH 10: {1->#1139, 2->#1145, 3->#1151, 4->#1157, 5->#1163, 6->#1169, 7->#1175, 8->#1181, 9->#1187, 10->#1193, 11->#1199, 12->#1205, 13->#1209, 14->#1213, 512->#1217, 32->#1223, 64->#1229, 128->#1235, 256->#1241} else #1247
        [ 1139] store the literal value 1929 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1142] play sound effect 257
        [ 1144] do nothing
        [ 1145] store the literal value 1956 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1148] play sound effect 257
        [ 1150] do nothing
        [ 1151] store the literal value 1982 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1154] play sound effect 260
        [ 1156] do nothing
        [ 1157] store the literal value 2012 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1160] play sound effect 260
        [ 1162] do nothing
        [ 1163] store the literal value 2036 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1166] play sound effect 260
        [ 1168] do nothing
        [ 1169] store the literal value 2061 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1172] play sound effect 261
        [ 1174] do nothing
        [ 1175] store the literal value 2115 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1178] play sound effect 257
        [ 1180] do nothing
        [ 1181] store the literal value 2139 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1184] play sound effect 261
        [ 1186] do nothing
        [ 1187] store the literal value 2194 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1190] play sound effect 262
        [ 1192] do nothing
        [ 1193] store the literal value 2239 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1196] play sound effect 262
        [ 1198] do nothing
        [ 1199] store the literal value 2290 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1202] play sound effect 259
        [ 1204] do nothing
        [ 1205] store the literal value 2373 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1208] do nothing
        [ 1209] store the literal value 2437 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1212] do nothing
        [ 1213] store the literal value 2491 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1216] do nothing
        [ 1217] store the literal value 2563 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1220] play sound effect 258
        [ 1222] do nothing
        [ 1223] store the literal value 2597 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1226] play sound effect 258
        [ 1228] do nothing
        [ 1229] store the literal value 2636 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1232] play sound effect 258
        [ 1234] do nothing
        [ 1235] store the literal value 2675 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1238] play sound effect 258
        [ 1240] do nothing
        [ 1241] store the literal value 2716 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1244] play sound effect 258
        [ 1246] do nothing
        [ 1247] store the literal value 2756 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1250] do nothing
        [ 1251] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1291] display system/chat message #2795: " þ"
        [ 1293] IF NOT(((set_unit_behavior(8, 9) & var(18)) == 0)): GOTO #1300  (else falls through, rejoins #1300)
        [ 1297] set script variable #18 = (var(18) + (set_unit_behavior(8, 9) & 7136))
        [ 1300] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 1303] GOTO #1019
        [ 1305] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 1308] WHILE set_unit_behavior(0, 1): loop below; exit -> #1339 (500-iteration guard)
        [ 1311] IF NOT(group_condition_ref_2(7, 2)): GOTO #1318  (else falls through, rejoins #1325)
        [ 1315] set attribute #8 of unit-slot #1 to 2
        [ 1318] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1325  (else falls through, rejoins #1325)
        [ 1322] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1325] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1334  (else falls through, rejoins #1334)
        [ 1329] set script variable #54 = (var(54) + 1)
        [ 1332] do nothing (message no-op)
        [ 1333] (UNKNOWN OPCODE 0x0afd) - dead end, not decoded further (other branches continue independently)
        [ 1334] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1337] GOTO #1311
        [ 1339] IF NOT(group_condition_ref_2(8, 2)): GOTO #1346  (else falls through, rejoins #1353)
        [ 1343] set attribute #8 of unit-slot #1 to 2
        [ 1346] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1353  (else falls through, rejoins #1353)
        [ 1350] set attribute #8 of unit-slot #1 to (set_unit_behavior(8, 1) - 1)
        [ 1353] IF NOT((set_unit_behavior(8, 1) > 0)): GOTO #1362  (else falls through, rejoins #1362)
        [ 1357] set script variable #54 = (var(54) + 1)
        [ 1360] do nothing (message no-op)
        [ 1361] (UNKNOWN OPCODE 0x0b10) - dead end, not decoded further (other branches continue independently)
        [ 1362] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 1365] set script variable #58 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 1368] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1371] WHILE set_unit_behavior(0, 9): loop below; exit -> #4525 (500-iteration guard)
        [ 1374] IF NOT((set_unit_behavior(5, 9) < 60)): GOTO #1383  (else falls through, rejoins #4520)
        [ 1378] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 1383] SWITCH (set_unit_behavior(8, 9) & 15): {0->#1386, 1->#1669, 2->#2502, 3->#3061, 4->#3071, 5->#3116, 10->#3401, 11->#3411, 12->#3809, 13->#3810, 14->#4105, 15->#4106} else #4492
        [ 1386] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #1668  (else falls through, rejoins #1668)
        [ 1390] set script variable #59 = random_below(100)
        [ 1393] IF NOT(((var(7) == 0) && (var(59) < 40))): GOTO #1660  (else falls through, rejoins #1660)
        [ 1397] set script variable #7 = (var(7) + 1)
        [ 1400] store the literal value 2851 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1403] SWITCH random_below(1): {0->#1406, 1->#1410, 2->#1414, 7->#1418} else #1422
        [ 1406] store the literal value 2852 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1409] do nothing
        [ 1410] store the literal value 2887 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1413] do nothing
        [ 1414] store the literal value 2914 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1417] do nothing
        [ 1418] store the literal value 2953 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1421] do nothing
        [ 1422] store the literal value 2981 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1425] do nothing
        [ 1426] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1436] store the literal value 3034 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1439] set script variable #60 = random_below(4)
        [ 1442] IF NOT(((random_below(1) != 7) && (var(60) >= 3))): GOTO #1449  (else falls through, rejoins #1449)
        [ 1446] set script variable #60 = random_below(3)
        [ 1449] SWITCH var(60): {0->#1452, 1->#1456, 3->#1460, 4->#1464, 5->#1468, 6->#1472, 7->#1476} else #1480
        [ 1452] store the literal value 3035 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1455] do nothing
        [ 1456] store the literal value 3039 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1459] do nothing
        [ 1460] store the literal value 3050 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1463] do nothing
        [ 1464] store the literal value 3071 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1467] do nothing
        [ 1468] store the literal value 3098 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1471] do nothing
        [ 1472] store the literal value 3129 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1475] do nothing
        [ 1476] store the literal value 3158 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1479] do nothing
        [ 1480] store the literal value 3188 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1483] do nothing
        [ 1484] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1500] store the literal value 3203 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1503] SWITCH 8: {1->#1506, 2->#1512, 3->#1518, 4->#1524, 5->#1530, 6->#1536, 7->#1542, 8->#1548, 9->#1554, 10->#1560, 11->#1566, 12->#1572, 13->#1576, 14->#1580, 512->#1584, 32->#1590, 64->#1596, 128->#1602, 256->#1608} else #1614
        [ 1506] store the literal value 3204 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1509] play sound effect 257
        [ 1511] do nothing
        [ 1512] store the literal value 3231 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1515] play sound effect 257
        [ 1517] do nothing
        [ 1518] store the literal value 3257 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1521] play sound effect 260
        [ 1523] do nothing
        [ 1524] store the literal value 3287 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1527] play sound effect 260
        [ 1529] do nothing
        [ 1530] store the literal value 3311 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1533] play sound effect 260
        [ 1535] do nothing
        [ 1536] store the literal value 3336 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1539] play sound effect 261
        [ 1541] do nothing
        [ 1542] store the literal value 3390 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1545] play sound effect 257
        [ 1547] do nothing
        [ 1548] store the literal value 3414 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1551] play sound effect 261
        [ 1553] do nothing
        [ 1554] store the literal value 3469 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1557] play sound effect 262
        [ 1559] do nothing
        [ 1560] store the literal value 3514 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1563] play sound effect 262
        [ 1565] do nothing
        [ 1566] store the literal value 3565 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1569] play sound effect 259
        [ 1571] do nothing
        [ 1572] store the literal value 3648 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1575] do nothing
        [ 1576] store the literal value 3712 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1579] do nothing
        [ 1580] store the literal value 3766 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1583] do nothing
        [ 1584] store the literal value 3838 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1587] play sound effect 258
        [ 1589] do nothing
        [ 1590] store the literal value 3872 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1593] play sound effect 258
        [ 1595] do nothing
        [ 1596] store the literal value 3911 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1599] play sound effect 258
        [ 1601] do nothing
        [ 1602] store the literal value 3950 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1605] play sound effect 258
        [ 1607] do nothing
        [ 1608] store the literal value 3991 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1611] play sound effect 258
        [ 1613] do nothing
        [ 1614] store the literal value 4031 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1617] do nothing
        [ 1618] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1658] display system/chat message #4070: " þ"
        [ 1660] order unit-slot #9 to move, speed/priority var(58), destination-type tag 0, destination arg 0
        [ 1665] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 1668] do nothing
        [ 1669] IF NOT((group_condition_ref_2(9, 1) || (set_unit_behavior(9, 9) != 0))): GOTO #1952  (else falls through, rejoins #2501)
        [ 1673] IF NOT((set_unit_behavior(7, 9) != 6)): GOTO #1952  (else falls through, rejoins #1952)
        [ 1677] set script variable #62 = random_below(100)
        [ 1680] IF NOT(((var(7) == 0) && (var(62) < 40))): GOTO #1947  (else falls through, rejoins #1947)
        [ 1684] set script variable #7 = (var(7) + 1)
        [ 1687] store the literal value 4088 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1690] SWITCH random_below(1): {0->#1693, 1->#1697, 2->#1701, 7->#1705} else #1709
        [ 1693] store the literal value 4089 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1696] do nothing
        [ 1697] store the literal value 4124 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1700] do nothing
        [ 1701] store the literal value 4151 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1704] do nothing
        [ 1705] store the literal value 4190 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1708] do nothing
        [ 1709] store the literal value 4218 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1712] do nothing
        [ 1713] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1723] store the literal value 4271 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1726] set script variable #63 = random_below(4)
        [ 1729] IF NOT(((random_below(1) != 7) && (var(63) >= 3))): GOTO #1736  (else falls through, rejoins #1736)
        [ 1733] set script variable #63 = random_below(3)
        [ 1736] SWITCH var(63): {0->#1739, 1->#1743, 3->#1747, 4->#1751, 5->#1755, 6->#1759, 7->#1763} else #1767
        [ 1739] store the literal value 4272 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1742] do nothing
        [ 1743] store the literal value 4276 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1746] do nothing
        [ 1747] store the literal value 4287 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1750] do nothing
        [ 1751] store the literal value 4308 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1754] do nothing
        [ 1755] store the literal value 4335 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1758] do nothing
        [ 1759] store the literal value 4366 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1762] do nothing
        [ 1763] store the literal value 4395 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1766] do nothing
        [ 1767] store the literal value 4425 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1770] do nothing
        [ 1771] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1787] store the literal value 4440 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1790] SWITCH 3: {1->#1793, 2->#1799, 3->#1805, 4->#1811, 5->#1817, 6->#1823, 7->#1829, 8->#1835, 9->#1841, 10->#1847, 11->#1853, 12->#1859, 13->#1863, 14->#1867, 512->#1871, 32->#1877, 64->#1883, 128->#1889, 256->#1895} else #1901
        [ 1793] store the literal value 4441 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1796] play sound effect 257
        [ 1798] do nothing
        [ 1799] store the literal value 4468 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1802] play sound effect 257
        [ 1804] do nothing
        [ 1805] store the literal value 4494 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1808] play sound effect 260
        [ 1810] do nothing
        [ 1811] store the literal value 4524 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1814] play sound effect 260
        [ 1816] do nothing
        [ 1817] store the literal value 4548 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1820] play sound effect 260
        [ 1822] do nothing
        [ 1823] store the literal value 4573 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1826] play sound effect 261
        [ 1828] do nothing
        [ 1829] store the literal value 4627 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1832] play sound effect 257
        [ 1834] do nothing
        [ 1835] store the literal value 4651 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1838] play sound effect 261
        [ 1840] do nothing
        [ 1841] store the literal value 4706 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1844] play sound effect 262
        [ 1846] do nothing
        [ 1847] store the literal value 4751 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1850] play sound effect 262
        [ 1852] do nothing
        [ 1853] store the literal value 4802 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1856] play sound effect 259
        [ 1858] do nothing
        [ 1859] store the literal value 4885 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1862] do nothing
        [ 1863] store the literal value 4949 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1866] do nothing
        [ 1867] store the literal value 5003 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1870] do nothing
        [ 1871] store the literal value 5075 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1874] play sound effect 258
        [ 1876] do nothing
        [ 1877] store the literal value 5109 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1880] play sound effect 258
        [ 1882] do nothing
        [ 1883] store the literal value 5148 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1886] play sound effect 258
        [ 1888] do nothing
        [ 1889] store the literal value 5187 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1892] play sound effect 258
        [ 1894] do nothing
        [ 1895] store the literal value 5228 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1898] play sound effect 258
        [ 1900] do nothing
        [ 1901] store the literal value 5268 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1904] do nothing
        [ 1905] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1945] display system/chat message #5307: " þ
"
        [ 1947] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 1952] IF NOT((set_unit_behavior(7, 9) != 2)): GOTO #2231  (else falls through, rejoins #2501)
        [ 1956] order unit-slot #9 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 1961] set script variable #65 = random_below(100)
        [ 1964] IF NOT(((var(7) == 0) && (var(65) < 4))): GOTO #2231  (else falls through, rejoins #2231)
        [ 1968] set script variable #7 = (var(7) + 1)
        [ 1971] store the literal value 5325 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1974] SWITCH random_below(1): {0->#1977, 1->#1981, 2->#1985, 7->#1989} else #1993
        [ 1977] store the literal value 5326 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1980] do nothing
        [ 1981] store the literal value 5361 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1984] do nothing
        [ 1985] store the literal value 5388 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1988] do nothing
        [ 1989] store the literal value 5427 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1992] do nothing
        [ 1993] store the literal value 5455 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1996] do nothing
        [ 1997] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2007] store the literal value 5508 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2010] set script variable #66 = random_below(4)
        [ 2013] IF NOT(((random_below(1) != 7) && (var(66) >= 3))): GOTO #2020  (else falls through, rejoins #2020)
        [ 2017] set script variable #66 = random_below(3)
        [ 2020] SWITCH var(66): {0->#2023, 1->#2027, 3->#2031, 4->#2035, 5->#2039, 6->#2043, 7->#2047} else #2051
        [ 2023] store the literal value 5509 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2026] do nothing
        [ 2027] store the literal value 5513 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2030] do nothing
        [ 2031] store the literal value 5524 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2034] do nothing
        [ 2035] store the literal value 5545 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2038] do nothing
        [ 2039] store the literal value 5572 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2042] do nothing
        [ 2043] store the literal value 5603 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2046] do nothing
        [ 2047] store the literal value 5632 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2050] do nothing
        [ 2051] store the literal value 5662 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2054] do nothing
        [ 2055] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2071] store the literal value 5677 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2074] SWITCH 2: {1->#2077, 2->#2083, 3->#2089, 4->#2095, 5->#2101, 6->#2107, 7->#2113, 8->#2119, 9->#2125, 10->#2131, 11->#2137, 12->#2143, 13->#2147, 14->#2151, 512->#2155, 32->#2161, 64->#2167, 128->#2173, 256->#2179} else #2185
        [ 2077] store the literal value 5678 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2080] play sound effect 257
        [ 2082] do nothing
        [ 2083] store the literal value 5705 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2086] play sound effect 257
        [ 2088] do nothing
        [ 2089] store the literal value 5731 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2092] play sound effect 260
        [ 2094] do nothing
        [ 2095] store the literal value 5761 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2098] play sound effect 260
        [ 2100] do nothing
        [ 2101] store the literal value 5785 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2104] play sound effect 260
        [ 2106] do nothing
        [ 2107] store the literal value 5810 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2110] play sound effect 261
        [ 2112] do nothing
        [ 2113] store the literal value 5864 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2116] play sound effect 257
        [ 2118] do nothing
        [ 2119] store the literal value 5888 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2122] play sound effect 261
        [ 2124] do nothing
        [ 2125] store the literal value 5943 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2128] play sound effect 262
        [ 2130] do nothing
        [ 2131] store the literal value 5988 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2134] play sound effect 262
        [ 2136] do nothing
        [ 2137] store the literal value 6039 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2140] play sound effect 259
        [ 2142] do nothing
        [ 2143] store the literal value 6122 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2146] do nothing
        [ 2147] store the literal value 6186 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2150] do nothing
        [ 2151] store the literal value 6240 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2154] do nothing
        [ 2155] store the literal value 6312 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2158] play sound effect 258
        [ 2160] do nothing
        [ 2161] store the literal value 6346 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2164] play sound effect 258
        [ 2166] do nothing
        [ 2167] store the literal value 6385 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2170] play sound effect 258
        [ 2172] do nothing
        [ 2173] store the literal value 6424 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2176] play sound effect 258
        [ 2178] do nothing
        [ 2179] store the literal value 6465 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2182] play sound effect 258
        [ 2184] do nothing
        [ 2185] store the literal value 6505 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2188] do nothing
        [ 2189] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2229] display system/chat message #6544: " þ"
        [ 2231] set script variable #68 = random_below(100)
        [ 2234] IF NOT(((var(7) == 0) && (var(68) < 4))): GOTO #2501  (else falls through, rejoins #2501)
        [ 2238] set script variable #7 = (var(7) + 1)
        [ 2241] store the literal value 6562 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2244] SWITCH random_below(1): {0->#2247, 1->#2251, 2->#2255, 7->#2259} else #2263
        [ 2247] store the literal value 6563 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2250] do nothing
        [ 2251] store the literal value 6598 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2254] do nothing
        [ 2255] store the literal value 6625 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2258] do nothing
        [ 2259] store the literal value 6664 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2262] do nothing
        [ 2263] store the literal value 6692 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2266] do nothing
        [ 2267] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2277] store the literal value 6745 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2280] set script variable #69 = random_below(4)
        [ 2283] IF NOT(((random_below(1) != 7) && (var(69) >= 3))): GOTO #2290  (else falls through, rejoins #2290)
        [ 2287] set script variable #69 = random_below(3)
        [ 2290] SWITCH var(69): {0->#2293, 1->#2297, 3->#2301, 4->#2305, 5->#2309, 6->#2313, 7->#2317} else #2321
        [ 2293] store the literal value 6746 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2296] do nothing
        [ 2297] store the literal value 6750 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2300] do nothing
        [ 2301] store the literal value 6761 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2304] do nothing
        [ 2305] store the literal value 6782 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2308] do nothing
        [ 2309] store the literal value 6809 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2312] do nothing
        [ 2313] store the literal value 6840 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2316] do nothing
        [ 2317] store the literal value 6869 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2320] do nothing
        [ 2321] store the literal value 6899 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2324] do nothing
        [ 2325] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2341] store the literal value 6914 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2344] SWITCH 1: {1->#2347, 2->#2353, 3->#2359, 4->#2365, 5->#2371, 6->#2377, 7->#2383, 8->#2389, 9->#2395, 10->#2401, 11->#2407, 12->#2413, 13->#2417, 14->#2421, 512->#2425, 32->#2431, 64->#2437, 128->#2443, 256->#2449} else #2455
        [ 2347] store the literal value 6915 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2350] play sound effect 257
        [ 2352] do nothing
        [ 2353] store the literal value 6942 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2356] play sound effect 257
        [ 2358] do nothing
        [ 2359] store the literal value 6968 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2362] play sound effect 260
        [ 2364] do nothing
        [ 2365] store the literal value 6998 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2368] play sound effect 260
        [ 2370] do nothing
        [ 2371] store the literal value 7022 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2374] play sound effect 260
        [ 2376] do nothing
        [ 2377] store the literal value 7047 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2380] play sound effect 261
        [ 2382] do nothing
        [ 2383] store the literal value 7101 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2386] play sound effect 257
        [ 2388] do nothing
        [ 2389] store the literal value 7125 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2392] play sound effect 261
        [ 2394] do nothing
        [ 2395] store the literal value 7180 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2398] play sound effect 262
        [ 2400] do nothing
        [ 2401] store the literal value 7225 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2404] play sound effect 262
        [ 2406] do nothing
        [ 2407] store the literal value 7276 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2410] play sound effect 259
        [ 2412] do nothing
        [ 2413] store the literal value 7359 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2416] do nothing
        [ 2417] store the literal value 7423 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2420] do nothing
        [ 2421] store the literal value 7477 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2424] do nothing
        [ 2425] store the literal value 7549 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2428] play sound effect 258
        [ 2430] do nothing
        [ 2431] store the literal value 7583 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2434] play sound effect 258
        [ 2436] do nothing
        [ 2437] store the literal value 7622 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2440] play sound effect 258
        [ 2442] do nothing
        [ 2443] store the literal value 7661 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2446] play sound effect 258
        [ 2448] do nothing
        [ 2449] store the literal value 7702 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2452] play sound effect 258
        [ 2454] do nothing
        [ 2455] store the literal value 7742 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2458] do nothing
        [ 2459] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2499] display system/chat message #7781: " þ"
        [ 2501] do nothing
        [ 2502] IF NOT(((var(18) & 512) > 0)): GOTO #2781  (else falls through, rejoins #3060)
        [ 2506] set script variable #71 = random_below(100)
        [ 2509] IF NOT(((var(7) == 0) && (var(71) < 4))): GOTO #2776  (else falls through, rejoins #2776)
        [ 2513] set script variable #7 = (var(7) + 1)
        [ 2516] store the literal value 7799 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2519] SWITCH random_below(1): {0->#2522, 1->#2526, 2->#2530, 7->#2534} else #2538
        [ 2522] store the literal value 7800 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2525] do nothing
        [ 2526] store the literal value 7835 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2529] do nothing
        [ 2530] store the literal value 7862 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2533] do nothing
        [ 2534] store the literal value 7901 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2537] do nothing
        [ 2538] store the literal value 7929 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2541] do nothing
        [ 2542] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2552] store the literal value 7982 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2555] set script variable #72 = random_below(4)
        [ 2558] IF NOT(((random_below(1) != 7) && (var(72) >= 3))): GOTO #2565  (else falls through, rejoins #2565)
        [ 2562] set script variable #72 = random_below(3)
        [ 2565] SWITCH var(72): {0->#2568, 1->#2572, 3->#2576, 4->#2580, 5->#2584, 6->#2588, 7->#2592} else #2596
        [ 2568] store the literal value 7983 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2571] do nothing
        [ 2572] store the literal value 7987 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2575] do nothing
        [ 2576] store the literal value 7998 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2579] do nothing
        [ 2580] store the literal value 8019 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2583] do nothing
        [ 2584] store the literal value 8046 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2587] do nothing
        [ 2588] store the literal value 8077 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2591] do nothing
        [ 2592] store the literal value 8106 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2595] do nothing
        [ 2596] store the literal value 8136 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2599] do nothing
        [ 2600] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2616] store the literal value 8151 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2619] SWITCH 4: {1->#2622, 2->#2628, 3->#2634, 4->#2640, 5->#2646, 6->#2652, 7->#2658, 8->#2664, 9->#2670, 10->#2676, 11->#2682, 12->#2688, 13->#2692, 14->#2696, 512->#2700, 32->#2706, 64->#2712, 128->#2718, 256->#2724} else #2730
        [ 2622] store the literal value 8152 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2625] play sound effect 257
        [ 2627] do nothing
        [ 2628] store the literal value 8179 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2631] play sound effect 257
        [ 2633] do nothing
        [ 2634] store the literal value 8205 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2637] play sound effect 260
        [ 2639] do nothing
        [ 2640] store the literal value 8235 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2643] play sound effect 260
        [ 2645] do nothing
        [ 2646] store the literal value 8259 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2649] play sound effect 260
        [ 2651] do nothing
        [ 2652] store the literal value 8284 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2655] play sound effect 261
        [ 2657] do nothing
        [ 2658] store the literal value 8338 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2661] play sound effect 257
        [ 2663] do nothing
        [ 2664] store the literal value 8362 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2667] play sound effect 261
        [ 2669] do nothing
        [ 2670] store the literal value 8417 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2673] play sound effect 262
        [ 2675] do nothing
        [ 2676] store the literal value 8462 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2679] play sound effect 262
        [ 2681] do nothing
        [ 2682] store the literal value 8513 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2685] play sound effect 259
        [ 2687] do nothing
        [ 2688] store the literal value 8596 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2691] do nothing
        [ 2692] store the literal value 8660 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2695] do nothing
        [ 2696] store the literal value 8714 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2699] do nothing
        [ 2700] store the literal value 8786 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2703] play sound effect 258
        [ 2705] do nothing
        [ 2706] store the literal value 8820 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2709] play sound effect 258
        [ 2711] do nothing
        [ 2712] store the literal value 8859 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2715] play sound effect 258
        [ 2717] do nothing
        [ 2718] store the literal value 8898 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2721] play sound effect 258
        [ 2723] do nothing
        [ 2724] store the literal value 8939 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2727] play sound effect 258
        [ 2729] do nothing
        [ 2730] store the literal value 8979 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2733] do nothing
        [ 2734] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2774] display system/chat message #9018: " þ"
        [ 2776] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 2781] IF NOT(((var(18) & 128) > 0)): GOTO #3060  (else falls through, rejoins #3060)
        [ 2785] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 2790] set script variable #74 = random_below(100)
        [ 2793] IF NOT(((var(7) == 0) && (var(74) < 4))): GOTO #3060  (else falls through, rejoins #3060)
        [ 2797] set script variable #7 = (var(7) + 1)
        [ 2800] store the literal value 9036 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2803] SWITCH random_below(1): {0->#2806, 1->#2810, 2->#2814, 7->#2818} else #2822
        [ 2806] store the literal value 9037 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2809] do nothing
        [ 2810] store the literal value 9072 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2813] do nothing
        [ 2814] store the literal value 9099 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2817] do nothing
        [ 2818] store the literal value 9138 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2821] do nothing
        [ 2822] store the literal value 9166 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2825] do nothing
        [ 2826] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2836] store the literal value 9219 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2839] set script variable #75 = random_below(4)
        [ 2842] IF NOT(((random_below(1) != 7) && (var(75) >= 3))): GOTO #2849  (else falls through, rejoins #2849)
        [ 2846] set script variable #75 = random_below(3)
        [ 2849] SWITCH var(75): {0->#2852, 1->#2856, 3->#2860, 4->#2864, 5->#2868, 6->#2872, 7->#2876} else #2880
        [ 2852] store the literal value 9220 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2855] do nothing
        [ 2856] store the literal value 9224 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2859] do nothing
        [ 2860] store the literal value 9235 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2863] do nothing
        [ 2864] store the literal value 9256 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2867] do nothing
        [ 2868] store the literal value 9283 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2871] do nothing
        [ 2872] store the literal value 9314 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2875] do nothing
        [ 2876] store the literal value 9343 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2879] do nothing
        [ 2880] store the literal value 9373 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2883] do nothing
        [ 2884] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2900] store the literal value 9388 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2903] SWITCH 5: {1->#2906, 2->#2912, 3->#2918, 4->#2924, 5->#2930, 6->#2936, 7->#2942, 8->#2948, 9->#2954, 10->#2960, 11->#2966, 12->#2972, 13->#2976, 14->#2980, 512->#2984, 32->#2990, 64->#2996, 128->#3002, 256->#3008} else #3014
        [ 2906] store the literal value 9389 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2909] play sound effect 257
        [ 2911] do nothing
        [ 2912] store the literal value 9416 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2915] play sound effect 257
        [ 2917] do nothing
        [ 2918] store the literal value 9442 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2921] play sound effect 260
        [ 2923] do nothing
        [ 2924] store the literal value 9472 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2927] play sound effect 260
        [ 2929] do nothing
        [ 2930] store the literal value 9496 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2933] play sound effect 260
        [ 2935] do nothing
        [ 2936] store the literal value 9521 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2939] play sound effect 261
        [ 2941] do nothing
        [ 2942] store the literal value 9575 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2945] play sound effect 257
        [ 2947] do nothing
        [ 2948] store the literal value 9599 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2951] play sound effect 261
        [ 2953] do nothing
        [ 2954] store the literal value 9654 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2957] play sound effect 262
        [ 2959] do nothing
        [ 2960] store the literal value 9699 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2963] play sound effect 262
        [ 2965] do nothing
        [ 2966] store the literal value 9750 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2969] play sound effect 259
        [ 2971] do nothing
        [ 2972] store the literal value 9833 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2975] do nothing
        [ 2976] store the literal value 9897 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2979] do nothing
        [ 2980] store the literal value 9951 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2983] do nothing
        [ 2984] store the literal value 10023 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2987] play sound effect 258
        [ 2989] do nothing
        [ 2990] store the literal value 10057 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2993] play sound effect 258
        [ 2995] do nothing
        [ 2996] store the literal value 10096 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2999] play sound effect 258
        [ 3001] do nothing
        [ 3002] store the literal value 10135 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3005] play sound effect 258
        [ 3007] do nothing
        [ 3008] store the literal value 10176 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3011] play sound effect 258
        [ 3013] do nothing
        [ 3014] store the literal value 10216 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3017] do nothing
        [ 3018] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3058] display system/chat message #10255: " þ"
        [ 3060] do nothing
        [ 3061] IF NOT(((var(18) & 512) > 0)): GOTO #3070  (else falls through, rejoins #3070)
        [ 3065] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3070] do nothing
        [ 3071] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3074, 64->#3080, 128->#3086, 256->#3092} else #3098
        [ 3074] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 3079] do nothing
        [ 3080] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 3085] do nothing
        [ 3086] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 3091] do nothing
        [ 3092] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 3097] do nothing
        [ 3098] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3103] do nothing
        [ 3104] do nothing
        [ 3105] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3115] do nothing
        [ 3116] IF NOT((var(54) > 0)): GOTO #3395  (else falls through, rejoins #3400)
        [ 3120] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3125] set script variable #77 = random_below(100)
        [ 3128] IF NOT(((var(7) == 0) && (var(77) < 4))): GOTO #3395  (else falls through, rejoins #3395)
        [ 3132] set script variable #7 = (var(7) + 1)
        [ 3135] store the literal value 10273 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3138] SWITCH random_below(1): {0->#3141, 1->#3145, 2->#3149, 7->#3153} else #3157
        [ 3141] store the literal value 10274 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3144] do nothing
        [ 3145] store the literal value 10309 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3148] do nothing
        [ 3149] store the literal value 10336 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3152] do nothing
        [ 3153] store the literal value 10375 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3156] do nothing
        [ 3157] store the literal value 10403 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3160] do nothing
        [ 3161] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3171] store the literal value 10456 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3174] set script variable #78 = random_below(4)
        [ 3177] IF NOT(((random_below(1) != 7) && (var(78) >= 3))): GOTO #3184  (else falls through, rejoins #3184)
        [ 3181] set script variable #78 = random_below(3)
        [ 3184] SWITCH var(78): {0->#3187, 1->#3191, 3->#3195, 4->#3199, 5->#3203, 6->#3207, 7->#3211} else #3215
        [ 3187] store the literal value 10457 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3190] do nothing
        [ 3191] store the literal value 10461 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3194] do nothing
        [ 3195] store the literal value 10472 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3198] do nothing
        [ 3199] store the literal value 10493 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3202] do nothing
        [ 3203] store the literal value 10520 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3206] do nothing
        [ 3207] store the literal value 10551 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3210] do nothing
        [ 3211] store the literal value 10580 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3214] do nothing
        [ 3215] store the literal value 10610 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3218] do nothing
        [ 3219] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3235] store the literal value 10625 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3238] SWITCH 6: {1->#3241, 2->#3247, 3->#3253, 4->#3259, 5->#3265, 6->#3271, 7->#3277, 8->#3283, 9->#3289, 10->#3295, 11->#3301, 12->#3307, 13->#3311, 14->#3315, 512->#3319, 32->#3325, 64->#3331, 128->#3337, 256->#3343} else #3349
        [ 3241] store the literal value 10626 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3244] play sound effect 257
        [ 3246] do nothing
        [ 3247] store the literal value 10653 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3250] play sound effect 257
        [ 3252] do nothing
        [ 3253] store the literal value 10679 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3256] play sound effect 260
        [ 3258] do nothing
        [ 3259] store the literal value 10709 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3262] play sound effect 260
        [ 3264] do nothing
        [ 3265] store the literal value 10733 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3268] play sound effect 260
        [ 3270] do nothing
        [ 3271] store the literal value 10758 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3274] play sound effect 261
        [ 3276] do nothing
        [ 3277] store the literal value 10812 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3280] play sound effect 257
        [ 3282] do nothing
        [ 3283] store the literal value 10836 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3286] play sound effect 261
        [ 3288] do nothing
        [ 3289] store the literal value 10891 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3292] play sound effect 262
        [ 3294] do nothing
        [ 3295] store the literal value 10936 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3298] play sound effect 262
        [ 3300] do nothing
        [ 3301] store the literal value 10987 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3304] play sound effect 259
        [ 3306] do nothing
        [ 3307] store the literal value 11070 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3310] do nothing
        [ 3311] store the literal value 11134 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3314] do nothing
        [ 3315] store the literal value 11188 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3318] do nothing
        [ 3319] store the literal value 11260 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3322] play sound effect 258
        [ 3324] do nothing
        [ 3325] store the literal value 11294 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3328] play sound effect 258
        [ 3330] do nothing
        [ 3331] store the literal value 11333 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3334] play sound effect 258
        [ 3336] do nothing
        [ 3337] store the literal value 11372 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3340] play sound effect 258
        [ 3342] do nothing
        [ 3343] store the literal value 11413 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3346] play sound effect 258
        [ 3348] do nothing
        [ 3349] store the literal value 11453 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3352] do nothing
        [ 3353] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3393] display system/chat message #11492: " þ"
        [ 3395] order unit-slot #9 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 3400] do nothing
        [ 3401] IF NOT((set_unit_behavior(7, 9) != 3)): GOTO #3410  (else falls through, rejoins #3410)
        [ 3405] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3410] do nothing
        [ 3411] IF NOT((((var(18) & 7136) == 0) && (var(54) == 0))): GOTO #3784  (else falls through, rejoins #3808)
        [ 3415] set script variable #80 = random_below(100)
        [ 3418] IF NOT(((var(7) == 0) && (var(80) < 4))): GOTO #3685  (else falls through, rejoins #3685)
        [ 3422] set script variable #7 = (var(7) + 1)
        [ 3425] store the literal value 11510 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3428] SWITCH random_below(1): {0->#3431, 1->#3435, 2->#3439, 7->#3443} else #3447
        [ 3431] store the literal value 11511 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3434] do nothing
        [ 3435] store the literal value 11546 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3438] do nothing
        [ 3439] store the literal value 11573 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3442] do nothing
        [ 3443] store the literal value 11612 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3446] do nothing
        [ 3447] store the literal value 11640 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3450] do nothing
        [ 3451] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3461] store the literal value 11693 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3464] set script variable #81 = random_below(4)
        [ 3467] IF NOT(((random_below(1) != 7) && (var(81) >= 3))): GOTO #3474  (else falls through, rejoins #3474)
        [ 3471] set script variable #81 = random_below(3)
        [ 3474] SWITCH var(81): {0->#3477, 1->#3481, 3->#3485, 4->#3489, 5->#3493, 6->#3497, 7->#3501} else #3505
        [ 3477] store the literal value 11694 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3480] do nothing
        [ 3481] store the literal value 11698 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3484] do nothing
        [ 3485] store the literal value 11709 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3488] do nothing
        [ 3489] store the literal value 11730 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3492] do nothing
        [ 3493] store the literal value 11757 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3496] do nothing
        [ 3497] store the literal value 11788 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3500] do nothing
        [ 3501] store the literal value 11817 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3504] do nothing
        [ 3505] store the literal value 11847 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3508] do nothing
        [ 3509] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3525] store the literal value 11862 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3528] SWITCH 7: {1->#3531, 2->#3537, 3->#3543, 4->#3549, 5->#3555, 6->#3561, 7->#3567, 8->#3573, 9->#3579, 10->#3585, 11->#3591, 12->#3597, 13->#3601, 14->#3605, 512->#3609, 32->#3615, 64->#3621, 128->#3627, 256->#3633} else #3639
        [ 3531] store the literal value 11863 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3534] play sound effect 257
        [ 3536] do nothing
        [ 3537] store the literal value 11890 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3540] play sound effect 257
        [ 3542] do nothing
        [ 3543] store the literal value 11916 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3546] play sound effect 260
        [ 3548] do nothing
        [ 3549] store the literal value 11946 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3552] play sound effect 260
        [ 3554] do nothing
        [ 3555] store the literal value 11970 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3558] play sound effect 260
        [ 3560] do nothing
        [ 3561] store the literal value 11995 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3564] play sound effect 261
        [ 3566] do nothing
        [ 3567] store the literal value 12049 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3570] play sound effect 257
        [ 3572] do nothing
        [ 3573] store the literal value 12073 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3576] play sound effect 261
        [ 3578] do nothing
        [ 3579] store the literal value 12128 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3582] play sound effect 262
        [ 3584] do nothing
        [ 3585] store the literal value 12173 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3588] play sound effect 262
        [ 3590] do nothing
        [ 3591] store the literal value 12224 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3594] play sound effect 259
        [ 3596] do nothing
        [ 3597] store the literal value 12307 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3600] do nothing
        [ 3601] store the literal value 12371 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3604] do nothing
        [ 3605] store the literal value 12425 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3608] do nothing
        [ 3609] store the literal value 12497 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3612] play sound effect 258
        [ 3614] do nothing
        [ 3615] store the literal value 12531 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3618] play sound effect 258
        [ 3620] do nothing
        [ 3621] store the literal value 12570 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3624] play sound effect 258
        [ 3626] do nothing
        [ 3627] store the literal value 12609 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3630] play sound effect 258
        [ 3632] do nothing
        [ 3633] store the literal value 12650 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3636] play sound effect 258
        [ 3638] do nothing
        [ 3639] store the literal value 12690 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3642] do nothing
        [ 3643] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3683] display system/chat message #12729: " þ"
        [ 3685] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#3688, 64->#3706, 128->#3724, 256->#3742} else #3760
        [ 3688] IF NOT(group_condition_ref(1, 9)): GOTO #3696  (else falls through, rejoins #3696)
        [ 3692] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3696] define condition-slot #1 as (variable-ref 1, expression-offset 3078)
        [ 3700] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 3705] do nothing
        [ 3706] IF NOT(group_condition_ref(2, 9)): GOTO #3714  (else falls through, rejoins #3714)
        [ 3710] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3714] define condition-slot #2 as (variable-ref 2, expression-offset 3099)
        [ 3718] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 3723] do nothing
        [ 3724] IF NOT(group_condition_ref(3, 9)): GOTO #3732  (else falls through, rejoins #3732)
        [ 3728] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3732] define condition-slot #3 as (variable-ref 3, expression-offset 3120)
        [ 3736] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 3741] do nothing
        [ 3742] IF NOT(group_condition_ref(4, 9)): GOTO #3750  (else falls through, rejoins #3750)
        [ 3746] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 3750] define condition-slot #4 as (variable-ref 4, expression-offset 3141)
        [ 3754] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 3759] do nothing
        [ 3760] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 3765] do nothing
        [ 3766] do nothing
        [ 3767] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3777] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #3784  (else falls through, rejoins #3784)
        [ 3781] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 3784] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #3799  (else falls through, rejoins #3808)
        [ 3788] arm timer #1 to expire 2 turn(s) from now
        [ 3791] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 3794] order unit-slot #9 to move, speed/priority var(58), destination-type tag 0, destination arg 0
        [ 3799] IF NOT(timer_expired(1)): GOTO #3808  (else falls through, rejoins #3808)
        [ 3803] order unit-slot #9 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 3808] do nothing
        [ 3809] do nothing
        [ 3810] IF NOT((set_unit_behavior(7, 9) != 4)): GOTO #4089  (else falls through, rejoins #4104)
        [ 3814] set script variable #83 = random_below(100)
        [ 3817] IF NOT(((var(7) == 0) && (var(83) < 4))): GOTO #4084  (else falls through, rejoins #4084)
        [ 3821] set script variable #7 = (var(7) + 1)
        [ 3824] store the literal value 12747 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3827] SWITCH random_below(1): {0->#3830, 1->#3834, 2->#3838, 7->#3842} else #3846
        [ 3830] store the literal value 12748 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3833] do nothing
        [ 3834] store the literal value 12783 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3837] do nothing
        [ 3838] store the literal value 12810 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3841] do nothing
        [ 3842] store the literal value 12849 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3845] do nothing
        [ 3846] store the literal value 12877 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3849] do nothing
        [ 3850] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3860] store the literal value 12930 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3863] set script variable #84 = random_below(4)
        [ 3866] IF NOT(((random_below(1) != 7) && (var(84) >= 3))): GOTO #3873  (else falls through, rejoins #3873)
        [ 3870] set script variable #84 = random_below(3)
        [ 3873] SWITCH var(84): {0->#3876, 1->#3880, 3->#3884, 4->#3888, 5->#3892, 6->#3896, 7->#3900} else #3904
        [ 3876] store the literal value 12931 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3879] do nothing
        [ 3880] store the literal value 12935 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3883] do nothing
        [ 3884] store the literal value 12946 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3887] do nothing
        [ 3888] store the literal value 12967 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3891] do nothing
        [ 3892] store the literal value 12994 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3895] do nothing
        [ 3896] store the literal value 13025 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3899] do nothing
        [ 3900] store the literal value 13054 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3903] do nothing
        [ 3904] store the literal value 13084 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3907] do nothing
        [ 3908] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3924] store the literal value 13099 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3927] SWITCH 9: {1->#3930, 2->#3936, 3->#3942, 4->#3948, 5->#3954, 6->#3960, 7->#3966, 8->#3972, 9->#3978, 10->#3984, 11->#3990, 12->#3996, 13->#4000, 14->#4004, 512->#4008, 32->#4014, 64->#4020, 128->#4026, 256->#4032} else #4038
        [ 3930] store the literal value 13100 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3933] play sound effect 257
        [ 3935] do nothing
        [ 3936] store the literal value 13127 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3939] play sound effect 257
        [ 3941] do nothing
        [ 3942] store the literal value 13153 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3945] play sound effect 260
        [ 3947] do nothing
        [ 3948] store the literal value 13183 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3951] play sound effect 260
        [ 3953] do nothing
        [ 3954] store the literal value 13207 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3957] play sound effect 260
        [ 3959] do nothing
        [ 3960] store the literal value 13232 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3963] play sound effect 261
        [ 3965] do nothing
        [ 3966] store the literal value 13286 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3969] play sound effect 257
        [ 3971] do nothing
        [ 3972] store the literal value 13310 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3975] play sound effect 261
        [ 3977] do nothing
        [ 3978] store the literal value 13365 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3981] play sound effect 262
        [ 3983] do nothing
        [ 3984] store the literal value 13410 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3987] play sound effect 262
        [ 3989] do nothing
        [ 3990] store the literal value 13461 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3993] play sound effect 259
        [ 3995] do nothing
        [ 3996] store the literal value 13544 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3999] do nothing
        [ 4000] store the literal value 13608 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4003] do nothing
        [ 4004] store the literal value 13662 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4007] do nothing
        [ 4008] store the literal value 13734 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4011] play sound effect 258
        [ 4013] do nothing
        [ 4014] store the literal value 13768 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4017] play sound effect 258
        [ 4019] do nothing
        [ 4020] store the literal value 13807 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4023] play sound effect 258
        [ 4025] do nothing
        [ 4026] store the literal value 13846 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4029] play sound effect 258
        [ 4031] do nothing
        [ 4032] store the literal value 13887 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4035] play sound effect 258
        [ 4037] do nothing
        [ 4038] store the literal value 13927 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4041] do nothing
        [ 4042] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4082] display system/chat message #13966: " þ"
        [ 4084] order unit-slot #9 to move, speed/priority 4, destination-type tag 3, destination arg 10
        [ 4089] set script variable #86 = set_unit_behavior(10, 9)
        [ 4092] set unit-slot #11 = var(86)
        [ 4095] IF NOT(group_condition(11)): GOTO #4104  (else falls through, rejoins #4104)
        [ 4099] order unit-slot #9 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4104] do nothing
        [ 4105] do nothing
        [ 4106] IF NOT((((var(18) & 7136) == 0) & (var(54) == 0))): GOTO #4479  (else falls through, rejoins #4491)
        [ 4110] set script variable #87 = random_below(100)
        [ 4113] IF NOT(((var(7) == 0) && (var(87) < 4))): GOTO #4380  (else falls through, rejoins #4380)
        [ 4117] set script variable #7 = (var(7) + 1)
        [ 4120] store the literal value 13984 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4123] SWITCH random_below(1): {0->#4126, 1->#4130, 2->#4134, 7->#4138} else #4142
        [ 4126] store the literal value 13985 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4129] do nothing
        [ 4130] store the literal value 14020 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4133] do nothing
        [ 4134] store the literal value 14047 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4137] do nothing
        [ 4138] store the literal value 14086 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4141] do nothing
        [ 4142] store the literal value 14114 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4145] do nothing
        [ 4146] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4156] store the literal value 14167 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4159] set script variable #88 = random_below(4)
        [ 4162] IF NOT(((random_below(1) != 7) && (var(88) >= 3))): GOTO #4169  (else falls through, rejoins #4169)
        [ 4166] set script variable #88 = random_below(3)
        [ 4169] SWITCH var(88): {0->#4172, 1->#4176, 3->#4180, 4->#4184, 5->#4188, 6->#4192, 7->#4196} else #4200
        [ 4172] store the literal value 14168 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4175] do nothing
        [ 4176] store the literal value 14172 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4179] do nothing
        [ 4180] store the literal value 14183 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4183] do nothing
        [ 4184] store the literal value 14204 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4187] do nothing
        [ 4188] store the literal value 14231 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4191] do nothing
        [ 4192] store the literal value 14262 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4195] do nothing
        [ 4196] store the literal value 14291 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4199] do nothing
        [ 4200] store the literal value 14321 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4203] do nothing
        [ 4204] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4220] store the literal value 14336 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4223] SWITCH 7: {1->#4226, 2->#4232, 3->#4238, 4->#4244, 5->#4250, 6->#4256, 7->#4262, 8->#4268, 9->#4274, 10->#4280, 11->#4286, 12->#4292, 13->#4296, 14->#4300, 512->#4304, 32->#4310, 64->#4316, 128->#4322, 256->#4328} else #4334
        [ 4226] store the literal value 14337 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4229] play sound effect 257
        [ 4231] do nothing
        [ 4232] store the literal value 14364 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4235] play sound effect 257
        [ 4237] do nothing
        [ 4238] store the literal value 14390 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4241] play sound effect 260
        [ 4243] do nothing
        [ 4244] store the literal value 14420 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4247] play sound effect 260
        [ 4249] do nothing
        [ 4250] store the literal value 14444 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4253] play sound effect 260
        [ 4255] do nothing
        [ 4256] store the literal value 14469 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4259] play sound effect 261
        [ 4261] do nothing
        [ 4262] store the literal value 14523 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4265] play sound effect 257
        [ 4267] do nothing
        [ 4268] store the literal value 14547 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4271] play sound effect 261
        [ 4273] do nothing
        [ 4274] store the literal value 14602 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4277] play sound effect 262
        [ 4279] do nothing
        [ 4280] store the literal value 14647 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4283] play sound effect 262
        [ 4285] do nothing
        [ 4286] store the literal value 14698 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4289] play sound effect 259
        [ 4291] do nothing
        [ 4292] store the literal value 14781 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4295] do nothing
        [ 4296] store the literal value 14845 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4299] do nothing
        [ 4300] store the literal value 14899 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4303] do nothing
        [ 4304] store the literal value 14971 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4307] play sound effect 258
        [ 4309] do nothing
        [ 4310] store the literal value 15005 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4313] play sound effect 258
        [ 4315] do nothing
        [ 4316] store the literal value 15044 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4319] play sound effect 258
        [ 4321] do nothing
        [ 4322] store the literal value 15083 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4325] play sound effect 258
        [ 4327] do nothing
        [ 4328] store the literal value 15124 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4331] play sound effect 258
        [ 4333] do nothing
        [ 4334] store the literal value 15164 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4337] do nothing
        [ 4338] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4378] display system/chat message #15203: " þ""
        [ 4380] SWITCH (set_unit_behavior(8, 9) & 7136): {32->#4383, 64->#4401, 128->#4419, 256->#4437} else #4455
        [ 4383] IF NOT(group_condition_ref(1, 9)): GOTO #4391  (else falls through, rejoins #4391)
        [ 4387] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4391] define condition-slot #1 as (variable-ref 1, expression-offset 3574)
        [ 4395] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 4400] do nothing
        [ 4401] IF NOT(group_condition_ref(2, 9)): GOTO #4409  (else falls through, rejoins #4409)
        [ 4405] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4409] define condition-slot #2 as (variable-ref 2, expression-offset 3595)
        [ 4413] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 4418] do nothing
        [ 4419] IF NOT(group_condition_ref(3, 9)): GOTO #4427  (else falls through, rejoins #4427)
        [ 4423] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4427] define condition-slot #3 as (variable-ref 3, expression-offset 3616)
        [ 4431] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 4436] do nothing
        [ 4437] IF NOT(group_condition_ref(4, 9)): GOTO #4445  (else falls through, rejoins #4445)
        [ 4441] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4445] define condition-slot #4 as (variable-ref 4, expression-offset 3637)
        [ 4449] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 4454] do nothing
        [ 4455] order unit-slot #9 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 4460] do nothing
        [ 4461] do nothing
        [ 4462] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4472] IF NOT(((set_unit_behavior(8, 9) & 1024) > 0)): GOTO #4479  (else falls through, rejoins #4479)
        [ 4476] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) - 1024)
        [ 4479] IF NOT(((set_unit_behavior(8, 9) & 1024) == 0)): GOTO #4491  (else falls through, rejoins #4491)
        [ 4483] set attribute #8 of unit-slot #9 to (set_unit_behavior(8, 9) + 1024)
        [ 4486] order unit-slot #9 to move, speed/priority var(58), destination-type tag 0, destination arg 0
        [ 4491] do nothing
        [ 4492] do nothing
        [ 4493] do nothing
        [ 4494] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 4520] advance unit-slot #9 to the next unit in group #2 after the current one
        [ 4523] GOTO #1374
        [ 4525] IF NOT(((!all_group_alive(2) && !var(6)) && stat(0))): GOTO #4534  (else falls through, rejoins #4534)
        [ 4529] display system/chat message #15221: "Cybrid threat eliminated."
        [ 4531] set script variable #6 = 1
        [ 4534] set script variable #90 = 0
        [ 4537] set script variable #91 = 0
        [ 4540] set script variable #92 = 0
        [ 4543] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #1
        [ 4546] WHILE set_unit_behavior(0, 1): loop below; exit -> #4618 (500-iteration guard)
        [ 4549] set script variable #93 = set_unit_behavior(10, 1)
        [ 4552] SWITCH var(93): {1->#4555, 2->#4559, 3->#4563, 4->#4567, 5->#4571, 6->#4575, 7->#4579, 8->#4583} else #4587
        [ 4555] set script variable #92 = 1
        [ 4558] do nothing
        [ 4559] set script variable #92 = 2
        [ 4562] do nothing
        [ 4563] set script variable #92 = 4
        [ 4566] do nothing
        [ 4567] set script variable #92 = 8
        [ 4570] do nothing
        [ 4571] set script variable #92 = 16
        [ 4574] do nothing
        [ 4575] set script variable #92 = 32
        [ 4578] do nothing
        [ 4579] set script variable #92 = 64
        [ 4582] do nothing
        [ 4583] set script variable #92 = 128
        [ 4586] do nothing
        [ 4587] do nothing
        [ 4588] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4606] IF NOT(((var(90) & var(92)) == 0)): GOTO #4613  (else falls through, rejoins #4613)
        [ 4610] set script variable #90 = (var(90) + var(92))
        [ 4613] advance unit-slot #1 to the next unit in group #1 after the current one
        [ 4616] GOTO #4549
        [ 4618] IF NOT((var(90) < var(9))): GOTO #4764  (else falls through, rejoins #4764)
        [ 4622] set script variable #94 = (var(9) - var(90))
        [ 4625] set script variable #95 = 0
        [ 4628] set script variable #96 = 0
        [ 4631] WHILE (var(95) < var(10)): loop below; exit -> #4699 (500-iteration guard)
        [ 4634] SWITCH var(95): {1->#4637, 2->#4641, 3->#4645, 4->#4649, 5->#4653, 6->#4657, 7->#4661, 8->#4665} else #4669
        [ 4637] set script variable #96 = 1
        [ 4640] do nothing
        [ 4641] set script variable #96 = 2
        [ 4644] do nothing
        [ 4645] set script variable #96 = 4
        [ 4648] do nothing
        [ 4649] set script variable #96 = 8
        [ 4652] do nothing
        [ 4653] set script variable #96 = 16
        [ 4656] do nothing
        [ 4657] set script variable #96 = 32
        [ 4660] do nothing
        [ 4661] set script variable #96 = 64
        [ 4664] do nothing
        [ 4665] set script variable #96 = 128
        [ 4668] do nothing
        [ 4669] do nothing
        [ 4670] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4688] IF NOT(((var(96) & var(9)) > (var(96) & var(90)))): GOTO #4694  (else falls through, rejoins #4694)
        [ 4692] display system/chat message #15247: "Player üû"
        [ 4694] set script variable #95 = (var(95) + 1)
        [ 4697] GOTO #4634
        [ 4699] set script variable #9 = var(90)
        [ 4702] SWITCH var(12): {1->#4705, 2->#4709, 3->#4713, 4->#4717, 5->#4721, 6->#4725, 7->#4729, 8->#4733} else #4737
        [ 4705] set script variable #96 = 1
        [ 4708] do nothing
        [ 4709] set script variable #96 = 2
        [ 4712] do nothing
        [ 4713] set script variable #96 = 4
        [ 4716] do nothing
        [ 4717] set script variable #96 = 8
        [ 4720] do nothing
        [ 4721] set script variable #96 = 16
        [ 4724] do nothing
        [ 4725] set script variable #96 = 32
        [ 4728] do nothing
        [ 4729] set script variable #96 = 64
        [ 4732] do nothing
        [ 4733] set script variable #96 = 128
        [ 4736] do nothing
        [ 4737] do nothing
        [ 4738] (UNKNOWN OPCODE 0x0008) - dead end, not decoded further (other branches continue independently)
        [ 4756] IF NOT(((var(96) & var(9)) == 0)): GOTO #4764  (else falls through, rejoins #4764)
        [ 4760] set script variable #13 = 2
        [ 4763] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4764] set script variable #3 = 0
        [ 4767] set script variable #97 = 0
        [ 4770] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #2
        [ 4773] WHILE set_unit_behavior(0, 2): loop below; exit -> #4787 (500-iteration guard)
        [ 4776] set script variable #3 = 1
        [ 4779] set script variable #97 = (var(97) + 1)
        [ 4782] advance unit-slot #2 to the next unit in group #2 after the current one
        [ 4785] GOTO #4776
        [ 4787] IF NOT((group_condition(3) && !all_group_alive(2))): GOTO #4795  (else falls through, rejoins #4795)
        [ 4791] set script variable #13 = 3
        [ 4794] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4795] ONCE((var(13) > 0), flag[1]): run block below -> #4800
        [ 4799] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 4800] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 4801] IF NOT((var(13) == 1)): GOTO #4812  (else falls through, rejoins #4830)
            [ 4805] play sound effect 35
            [ 4807] display system/chat message #15269: "All immediate threats eliminated. "
            [ 4809] set the objective state of unit 1 to 1
            [ 4812] IF NOT((var(13) == 3)): GOTO #4825  (else falls through, rejoins #4830)
            [ 4816] play sound effect 35
            [ 4818] set the objective state of unit 1 to 1
            [ 4821] display system/chat message #15304: "The Cybrid forces have been eliminated."
            [ 4823] end the current turn (reason/flag #15344), then jump to scenario phase 3
            [ 4825] display system/chat message #15400: "Your mission was a failure."
            [ 4827] set the objective state of unit 1 to 2
            [ 4830] advance to the next scenario phase (no effect if already at the last phase)
            [ 4831] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
