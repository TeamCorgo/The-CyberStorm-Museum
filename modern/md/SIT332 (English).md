# SIT332.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=630, phase1=640, phase2=1339, phase3=7084
; 24912 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #3 = 0
[    3] set script variable #4 = 0
[    6] set script variable #5 = 0
[    9] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   10] IF NOT((var(2) == 0)): GOTO #17  (else falls through, rejoins #17)
    [   14] set script variable #2 = (random_below(var(9)) + var(10))
    [   17] set script variable #11 = (stat(0) / 1)
    [   20] set script variable #11 = (var(11) - 200)
    [   23] set script variable #12 = 8192
    [   26] WHILE (var(12) > 500): loop below; exit -> #41 (500-iteration guard)
    [   29] IF NOT((var(11) < var(12))): GOTO #36  (else falls through, rejoins #36)
    [   33] set script variable #7 = (var(7) + 1)
    [   36] set script variable #12 = (var(12) / 4)
    [   39] GOTO #29
    [   41] set script variable #13 = 0
    [   44] set script variable #14 = 0
    [   47] set script variable #15 = 25
    [   50] set script variable #16 = 27
    [   53] set script variable #17 = 0
    [   56] set script variable #18 = 360
    [   59] IF NOT((var(15) > (var(7) + 5))): GOTO #66  (else falls through, rejoins #69)
    [   63] set script variable #15 = (var(15) - var(7))
    [   66] set script variable #15 = 5
    [   69] IF NOT((var(16) > (var(7) + 10))): GOTO #76  (else falls through, rejoins #79)
    [   73] set script variable #16 = (var(16) - var(7))
    [   76] set script variable #16 = 10
    [   79] IF NOT((var(13) == 0)): GOTO #86  (else falls through, rejoins #86)
    [   83] set script variable #13 = (var(15) + random_below((var(16) - var(15))))
    [   86] IF NOT((var(14) == 0)): GOTO #93  (else falls through, rejoins #93)
    [   90] set script variable #14 = ((random_below(var(18)) + var(17)) - (var(18) / 2))
    [   93] set hex-var #7 = the point 275 steps along the path toward 30
    [   97] set script variable #19 = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
    [  100] set script variable #20 = 0
    [  103] set script variable #20 = (var(20) + 1)
    [  106] IF NOT((var(11) > 300)): GOTO #127  (else falls through, rejoins #130)
    [  110] set script variable #8 = (var(11) / 2)
    [  113] IF NOT((var(8) < 300)): GOTO #120  (else falls through, rejoins #127)
    [  117] set script variable #8 = 300
    [  120] IF NOT((var(8) > 1200)): GOTO #127  (else falls through, rejoins #127)
    [  124] set script variable #8 = 1200
    [  127] set script variable #8 = var(11)
    [  130] set script variable #11 = (var(11) - var(8))
    [  133] set hex-var #1 = the point (var(14) + random_below(30)) steps along the path toward ((random_below(10) + 5) - var(7))
    [  137] define condition-slot #1 as (variable-ref 1, expression-offset 249)
    [  141] spawn an AI squad with point-budget var(8) at hex-ref #1, remember all its units as group #3
    [  145] order every unit in group #3 to move, speed/priority var(19), destination-type tag 2, destination arg 1
    [  150] set attribute #8 to 47 for every unit in group #3
    [  153] do nothing (message no-op)
    [  154] (UNKNOWN OPCODE 0x00a1) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  709] set script variable #6 = 0
        [  712] ONCE(1, flag[1]): run block below -> #732
        [  716] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #3
        [  719] WHILE set_unit_behavior(0, 3): loop below; exit -> #730 (500-iteration guard)
        [  722] set script variable #3 = (var(3) + 1)
        [  725] advance unit-slot #3 to the next unit in group #2 after the current one
        [  728] GOTO #722
        [  730] do nothing (message no-op)
        [  731] (UNKNOWN OPCODE 0x071a) - dead end, not decoded further (other branches continue independently)
        [  732] IF NOT(timer_expired(2)): GOTO #6442  (else falls through, rejoins #6442)
        [  736] arm timer #2 to expire 1 turn(s) from now
        [  739] set script variable #1 = 0
        [  742] set script variable #24 = 0
        [  745] IF NOT((group_condition_ref_2(7, 1) && group_condition_ref_2(7, 2))): GOTO #1029  (else falls through, rejoins #1036)
        [  749] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #4
        [  752] set script variable #25 = random_below(100)
        [  755] IF NOT(((var(1) == 0) && (var(25) < 2))): GOTO #1022  (else falls through, rejoins #1022)
        [  759] set script variable #1 = (var(1) + 1)
        [  762] store the literal value 1968 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  765] SWITCH random_below(4): {0->#768, 1->#772, 2->#776, 7->#780} else #784
        [  768] store the literal value 1969 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  771] do nothing
        [  772] store the literal value 2004 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  775] do nothing
        [  776] store the literal value 2031 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  779] do nothing
        [  780] store the literal value 2070 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  783] do nothing
        [  784] store the literal value 2098 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  787] do nothing
        [  788] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  798] store the literal value 2151 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  801] set script variable #26 = random_below(4)
        [  804] IF NOT(((random_below(4) != 7) && (var(26) >= 3))): GOTO #811  (else falls through, rejoins #811)
        [  808] set script variable #26 = random_below(3)
        [  811] SWITCH var(26): {0->#814, 1->#818, 3->#822, 4->#826, 5->#830, 6->#834, 7->#838} else #842
        [  814] store the literal value 2152 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  817] do nothing
        [  818] store the literal value 2156 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  821] do nothing
        [  822] store the literal value 2167 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  825] do nothing
        [  826] store the literal value 2188 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  829] do nothing
        [  830] store the literal value 2215 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  833] do nothing
        [  834] store the literal value 2246 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  837] do nothing
        [  838] store the literal value 2275 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  841] do nothing
        [  842] store the literal value 2305 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  845] do nothing
        [  846] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  862] store the literal value 2320 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  865] SWITCH 512: {1->#868, 2->#874, 3->#880, 4->#886, 5->#892, 6->#898, 7->#904, 8->#910, 9->#916, 10->#922, 11->#928, 12->#934, 13->#938, 14->#942, 512->#946, 32->#952, 64->#958, 128->#964, 256->#970} else #976
        [  868] store the literal value 2321 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  871] play sound effect 257
        [  873] do nothing
        [  874] store the literal value 2348 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  877] play sound effect 257
        [  879] do nothing
        [  880] store the literal value 2374 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  883] play sound effect 260
        [  885] do nothing
        [  886] store the literal value 2404 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  889] play sound effect 260
        [  891] do nothing
        [  892] store the literal value 2428 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  895] play sound effect 260
        [  897] do nothing
        [  898] store the literal value 2453 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  901] play sound effect 261
        [  903] do nothing
        [  904] store the literal value 2507 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  907] play sound effect 257
        [  909] do nothing
        [  910] store the literal value 2531 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  913] play sound effect 261
        [  915] do nothing
        [  916] store the literal value 2586 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  919] play sound effect 262
        [  921] do nothing
        [  922] store the literal value 2631 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  925] play sound effect 262
        [  927] do nothing
        [  928] store the literal value 2682 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  931] play sound effect 259
        [  933] do nothing
        [  934] store the literal value 2765 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  937] do nothing
        [  938] store the literal value 2829 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  941] do nothing
        [  942] store the literal value 2883 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  945] do nothing
        [  946] store the literal value 2955 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  949] play sound effect 258
        [  951] do nothing
        [  952] store the literal value 2989 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  955] play sound effect 258
        [  957] do nothing
        [  958] store the literal value 3028 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  961] play sound effect 258
        [  963] do nothing
        [  964] store the literal value 3067 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  967] play sound effect 258
        [  969] do nothing
        [  970] store the literal value 3108 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  973] play sound effect 258
        [  975] do nothing
        [  976] store the literal value 3148 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  979] do nothing
        [  980] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1020] display system/chat message #3187: " þ"
        [ 1022] IF NOT(((var(24) & 512) == 0)): GOTO #1029  (else falls through, rejoins #1029)
        [ 1026] set script variable #24 = (var(24) + 512)
        [ 1029] IF NOT(((var(24) & 512) > 0)): GOTO #1036  (else falls through, rejoins #1036)
        [ 1033] set script variable #24 = (var(24) - 512)
        [ 1036] IF NOT((group_condition_ref_2(1, 1) && group_condition_ref_2(1, 2))): GOTO #1320  (else falls through, rejoins #1327)
        [ 1040] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [ 1043] set script variable #28 = random_below(100)
        [ 1046] IF NOT(((var(1) == 0) && (var(28) < 2))): GOTO #1313  (else falls through, rejoins #1313)
        [ 1050] set script variable #1 = (var(1) + 1)
        [ 1053] store the literal value 3205 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1056] SWITCH random_below(4): {0->#1059, 1->#1063, 2->#1067, 7->#1071} else #1075
        [ 1059] store the literal value 3206 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1062] do nothing
        [ 1063] store the literal value 3241 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1066] do nothing
        [ 1067] store the literal value 3268 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1070] do nothing
        [ 1071] store the literal value 3307 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1074] do nothing
        [ 1075] store the literal value 3335 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1078] do nothing
        [ 1079] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1089] store the literal value 3388 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1092] set script variable #29 = random_below(4)
        [ 1095] IF NOT(((random_below(4) != 7) && (var(29) >= 3))): GOTO #1102  (else falls through, rejoins #1102)
        [ 1099] set script variable #29 = random_below(3)
        [ 1102] SWITCH var(29): {0->#1105, 1->#1109, 3->#1113, 4->#1117, 5->#1121, 6->#1125, 7->#1129} else #1133
        [ 1105] store the literal value 3389 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1108] do nothing
        [ 1109] store the literal value 3393 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1112] do nothing
        [ 1113] store the literal value 3404 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1116] do nothing
        [ 1117] store the literal value 3425 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1120] do nothing
        [ 1121] store the literal value 3452 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1124] do nothing
        [ 1125] store the literal value 3483 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1128] do nothing
        [ 1129] store the literal value 3512 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1132] do nothing
        [ 1133] store the literal value 3542 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1136] do nothing
        [ 1137] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1153] store the literal value 3557 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1156] SWITCH 32: {1->#1159, 2->#1165, 3->#1171, 4->#1177, 5->#1183, 6->#1189, 7->#1195, 8->#1201, 9->#1207, 10->#1213, 11->#1219, 12->#1225, 13->#1229, 14->#1233, 512->#1237, 32->#1243, 64->#1249, 128->#1255, 256->#1261} else #1267
        [ 1159] store the literal value 3558 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1162] play sound effect 257
        [ 1164] do nothing
        [ 1165] store the literal value 3585 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1168] play sound effect 257
        [ 1170] do nothing
        [ 1171] store the literal value 3611 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1174] play sound effect 260
        [ 1176] do nothing
        [ 1177] store the literal value 3641 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1180] play sound effect 260
        [ 1182] do nothing
        [ 1183] store the literal value 3665 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1186] play sound effect 260
        [ 1188] do nothing
        [ 1189] store the literal value 3690 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1192] play sound effect 261
        [ 1194] do nothing
        [ 1195] store the literal value 3744 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1198] play sound effect 257
        [ 1200] do nothing
        [ 1201] store the literal value 3768 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1204] play sound effect 261
        [ 1206] do nothing
        [ 1207] store the literal value 3823 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1210] play sound effect 262
        [ 1212] do nothing
        [ 1213] store the literal value 3868 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1216] play sound effect 262
        [ 1218] do nothing
        [ 1219] store the literal value 3919 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1222] play sound effect 259
        [ 1224] do nothing
        [ 1225] store the literal value 4002 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1228] do nothing
        [ 1229] store the literal value 4066 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1232] do nothing
        [ 1233] store the literal value 4120 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1236] do nothing
        [ 1237] store the literal value 4192 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1240] play sound effect 258
        [ 1242] do nothing
        [ 1243] store the literal value 4226 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1246] play sound effect 258
        [ 1248] do nothing
        [ 1249] store the literal value 4265 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1252] play sound effect 258
        [ 1254] do nothing
        [ 1255] store the literal value 4304 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1258] play sound effect 258
        [ 1260] do nothing
        [ 1261] store the literal value 4345 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1264] play sound effect 258
        [ 1266] do nothing
        [ 1267] store the literal value 4385 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1270] do nothing
        [ 1271] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1311] display system/chat message #4424: " þ"
        [ 1313] IF NOT(((var(24) & 32) == 0)): GOTO #1320  (else falls through, rejoins #1320)
        [ 1317] set script variable #24 = (var(24) + 32)
        [ 1320] IF NOT(((var(24) & 32) > 0)): GOTO #1327  (else falls through, rejoins #1327)
        [ 1324] set script variable #24 = (var(24) - 32)
        [ 1327] IF NOT((group_condition_ref_2(2, 1) && group_condition_ref_2(2, 2))): GOTO #1611  (else falls through, rejoins #1618)
        [ 1331] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [ 1334] set script variable #31 = random_below(100)
        [ 1337] IF NOT(((var(1) == 0) && (var(31) < 2))): GOTO #1604  (else falls through, rejoins #1604)
        [ 1341] set script variable #1 = (var(1) + 1)
        [ 1344] store the literal value 4442 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1347] SWITCH random_below(4): {0->#1350, 1->#1354, 2->#1358, 7->#1362} else #1366
        [ 1350] store the literal value 4443 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1353] do nothing
        [ 1354] store the literal value 4478 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1357] do nothing
        [ 1358] store the literal value 4505 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1361] do nothing
        [ 1362] store the literal value 4544 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1365] do nothing
        [ 1366] store the literal value 4572 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1369] do nothing
        [ 1370] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1380] store the literal value 4625 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1383] set script variable #32 = random_below(4)
        [ 1386] IF NOT(((random_below(4) != 7) && (var(32) >= 3))): GOTO #1393  (else falls through, rejoins #1393)
        [ 1390] set script variable #32 = random_below(3)
        [ 1393] SWITCH var(32): {0->#1396, 1->#1400, 3->#1404, 4->#1408, 5->#1412, 6->#1416, 7->#1420} else #1424
        [ 1396] store the literal value 4626 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1399] do nothing
        [ 1400] store the literal value 4630 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1403] do nothing
        [ 1404] store the literal value 4641 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1407] do nothing
        [ 1408] store the literal value 4662 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1411] do nothing
        [ 1412] store the literal value 4689 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1415] do nothing
        [ 1416] store the literal value 4720 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1419] do nothing
        [ 1420] store the literal value 4749 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1423] do nothing
        [ 1424] store the literal value 4779 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1427] do nothing
        [ 1428] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1444] store the literal value 4794 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1447] SWITCH 64: {1->#1450, 2->#1456, 3->#1462, 4->#1468, 5->#1474, 6->#1480, 7->#1486, 8->#1492, 9->#1498, 10->#1504, 11->#1510, 12->#1516, 13->#1520, 14->#1524, 512->#1528, 32->#1534, 64->#1540, 128->#1546, 256->#1552} else #1558
        [ 1450] store the literal value 4795 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1453] play sound effect 257
        [ 1455] do nothing
        [ 1456] store the literal value 4822 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1459] play sound effect 257
        [ 1461] do nothing
        [ 1462] store the literal value 4848 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1465] play sound effect 260
        [ 1467] do nothing
        [ 1468] store the literal value 4878 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1471] play sound effect 260
        [ 1473] do nothing
        [ 1474] store the literal value 4902 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1477] play sound effect 260
        [ 1479] do nothing
        [ 1480] store the literal value 4927 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1483] play sound effect 261
        [ 1485] do nothing
        [ 1486] store the literal value 4981 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1489] play sound effect 257
        [ 1491] do nothing
        [ 1492] store the literal value 5005 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1495] play sound effect 261
        [ 1497] do nothing
        [ 1498] store the literal value 5060 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1501] play sound effect 262
        [ 1503] do nothing
        [ 1504] store the literal value 5105 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1507] play sound effect 262
        [ 1509] do nothing
        [ 1510] store the literal value 5156 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1513] play sound effect 259
        [ 1515] do nothing
        [ 1516] store the literal value 5239 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1519] do nothing
        [ 1520] store the literal value 5303 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1523] do nothing
        [ 1524] store the literal value 5357 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1527] do nothing
        [ 1528] store the literal value 5429 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1531] play sound effect 258
        [ 1533] do nothing
        [ 1534] store the literal value 5463 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1537] play sound effect 258
        [ 1539] do nothing
        [ 1540] store the literal value 5502 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1543] play sound effect 258
        [ 1545] do nothing
        [ 1546] store the literal value 5541 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1549] play sound effect 258
        [ 1551] do nothing
        [ 1552] store the literal value 5582 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1555] play sound effect 258
        [ 1557] do nothing
        [ 1558] store the literal value 5622 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1561] do nothing
        [ 1562] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1602] display system/chat message #5661: " þ
"
        [ 1604] IF NOT(((var(24) & 64) == 0)): GOTO #1611  (else falls through, rejoins #1611)
        [ 1608] set script variable #24 = (var(24) + 64)
        [ 1611] IF NOT(((var(24) & 64) > 0)): GOTO #1618  (else falls through, rejoins #1618)
        [ 1615] set script variable #24 = (var(24) - 64)
        [ 1618] IF NOT((group_condition_ref_2(3, 1) && group_condition_ref_2(3, 2))): GOTO #1902  (else falls through, rejoins #1909)
        [ 1622] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [ 1625] set script variable #34 = random_below(100)
        [ 1628] IF NOT(((var(1) == 0) && (var(34) < 2))): GOTO #1895  (else falls through, rejoins #1895)
        [ 1632] set script variable #1 = (var(1) + 1)
        [ 1635] store the literal value 5679 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1638] SWITCH random_below(4): {0->#1641, 1->#1645, 2->#1649, 7->#1653} else #1657
        [ 1641] store the literal value 5680 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1644] do nothing
        [ 1645] store the literal value 5715 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1648] do nothing
        [ 1649] store the literal value 5742 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1652] do nothing
        [ 1653] store the literal value 5781 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1656] do nothing
        [ 1657] store the literal value 5809 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1660] do nothing
        [ 1661] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1671] store the literal value 5862 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1674] set script variable #35 = random_below(4)
        [ 1677] IF NOT(((random_below(4) != 7) && (var(35) >= 3))): GOTO #1684  (else falls through, rejoins #1684)
        [ 1681] set script variable #35 = random_below(3)
        [ 1684] SWITCH var(35): {0->#1687, 1->#1691, 3->#1695, 4->#1699, 5->#1703, 6->#1707, 7->#1711} else #1715
        [ 1687] store the literal value 5863 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1690] do nothing
        [ 1691] store the literal value 5867 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1694] do nothing
        [ 1695] store the literal value 5878 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1698] do nothing
        [ 1699] store the literal value 5899 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1702] do nothing
        [ 1703] store the literal value 5926 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1706] do nothing
        [ 1707] store the literal value 5957 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1710] do nothing
        [ 1711] store the literal value 5986 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1714] do nothing
        [ 1715] store the literal value 6016 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1718] do nothing
        [ 1719] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1735] store the literal value 6031 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1738] SWITCH 128: {1->#1741, 2->#1747, 3->#1753, 4->#1759, 5->#1765, 6->#1771, 7->#1777, 8->#1783, 9->#1789, 10->#1795, 11->#1801, 12->#1807, 13->#1811, 14->#1815, 512->#1819, 32->#1825, 64->#1831, 128->#1837, 256->#1843} else #1849
        [ 1741] store the literal value 6032 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1744] play sound effect 257
        [ 1746] do nothing
        [ 1747] store the literal value 6059 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1750] play sound effect 257
        [ 1752] do nothing
        [ 1753] store the literal value 6085 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1756] play sound effect 260
        [ 1758] do nothing
        [ 1759] store the literal value 6115 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1762] play sound effect 260
        [ 1764] do nothing
        [ 1765] store the literal value 6139 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1768] play sound effect 260
        [ 1770] do nothing
        [ 1771] store the literal value 6164 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1774] play sound effect 261
        [ 1776] do nothing
        [ 1777] store the literal value 6218 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1780] play sound effect 257
        [ 1782] do nothing
        [ 1783] store the literal value 6242 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1786] play sound effect 261
        [ 1788] do nothing
        [ 1789] store the literal value 6297 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1792] play sound effect 262
        [ 1794] do nothing
        [ 1795] store the literal value 6342 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1798] play sound effect 262
        [ 1800] do nothing
        [ 1801] store the literal value 6393 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1804] play sound effect 259
        [ 1806] do nothing
        [ 1807] store the literal value 6476 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1810] do nothing
        [ 1811] store the literal value 6540 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1814] do nothing
        [ 1815] store the literal value 6594 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1818] do nothing
        [ 1819] store the literal value 6666 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1822] play sound effect 258
        [ 1824] do nothing
        [ 1825] store the literal value 6700 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1828] play sound effect 258
        [ 1830] do nothing
        [ 1831] store the literal value 6739 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1834] play sound effect 258
        [ 1836] do nothing
        [ 1837] store the literal value 6778 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1840] play sound effect 258
        [ 1842] do nothing
        [ 1843] store the literal value 6819 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1846] play sound effect 258
        [ 1848] do nothing
        [ 1849] store the literal value 6859 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1852] do nothing
        [ 1853] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1893] display system/chat message #6898: " þ"
        [ 1895] IF NOT(((var(24) & 128) == 0)): GOTO #1902  (else falls through, rejoins #1902)
        [ 1899] set script variable #24 = (var(24) + 128)
        [ 1902] IF NOT(((var(24) & 128) > 0)): GOTO #1909  (else falls through, rejoins #1909)
        [ 1906] set script variable #24 = (var(24) - 128)
        [ 1909] IF NOT((group_condition_ref_2(4, 1) && group_condition_ref_2(4, 2))): GOTO #2193  (else falls through, rejoins #2200)
        [ 1913] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #8
        [ 1916] set script variable #37 = random_below(100)
        [ 1919] IF NOT(((var(1) == 0) && (var(37) < 2))): GOTO #2186  (else falls through, rejoins #2186)
        [ 1923] set script variable #1 = (var(1) + 1)
        [ 1926] store the literal value 6916 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1929] SWITCH random_below(4): {0->#1932, 1->#1936, 2->#1940, 7->#1944} else #1948
        [ 1932] store the literal value 6917 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1935] do nothing
        [ 1936] store the literal value 6952 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1939] do nothing
        [ 1940] store the literal value 6979 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1943] do nothing
        [ 1944] store the literal value 7018 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1947] do nothing
        [ 1948] store the literal value 7046 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1951] do nothing
        [ 1952] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1962] store the literal value 7099 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1965] set script variable #38 = random_below(4)
        [ 1968] IF NOT(((random_below(4) != 7) && (var(38) >= 3))): GOTO #1975  (else falls through, rejoins #1975)
        [ 1972] set script variable #38 = random_below(3)
        [ 1975] SWITCH var(38): {0->#1978, 1->#1982, 3->#1986, 4->#1990, 5->#1994, 6->#1998, 7->#2002} else #2006
        [ 1978] store the literal value 7100 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1981] do nothing
        [ 1982] store the literal value 7104 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1985] do nothing
        [ 1986] store the literal value 7115 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1989] do nothing
        [ 1990] store the literal value 7136 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1993] do nothing
        [ 1994] store the literal value 7163 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1997] do nothing
        [ 1998] store the literal value 7194 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2001] do nothing
        [ 2002] store the literal value 7223 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2005] do nothing
        [ 2006] store the literal value 7253 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2009] do nothing
        [ 2010] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2026] store the literal value 7268 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2029] SWITCH 256: {1->#2032, 2->#2038, 3->#2044, 4->#2050, 5->#2056, 6->#2062, 7->#2068, 8->#2074, 9->#2080, 10->#2086, 11->#2092, 12->#2098, 13->#2102, 14->#2106, 512->#2110, 32->#2116, 64->#2122, 128->#2128, 256->#2134} else #2140
        [ 2032] store the literal value 7269 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2035] play sound effect 257
        [ 2037] do nothing
        [ 2038] store the literal value 7296 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2041] play sound effect 257
        [ 2043] do nothing
        [ 2044] store the literal value 7322 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2047] play sound effect 260
        [ 2049] do nothing
        [ 2050] store the literal value 7352 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2053] play sound effect 260
        [ 2055] do nothing
        [ 2056] store the literal value 7376 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2059] play sound effect 260
        [ 2061] do nothing
        [ 2062] store the literal value 7401 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2065] play sound effect 261
        [ 2067] do nothing
        [ 2068] store the literal value 7455 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2071] play sound effect 257
        [ 2073] do nothing
        [ 2074] store the literal value 7479 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2077] play sound effect 261
        [ 2079] do nothing
        [ 2080] store the literal value 7534 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2083] play sound effect 262
        [ 2085] do nothing
        [ 2086] store the literal value 7579 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2089] play sound effect 262
        [ 2091] do nothing
        [ 2092] store the literal value 7630 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2095] play sound effect 259
        [ 2097] do nothing
        [ 2098] store the literal value 7713 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2101] do nothing
        [ 2102] store the literal value 7777 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2105] do nothing
        [ 2106] store the literal value 7831 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2109] do nothing
        [ 2110] store the literal value 7903 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2113] play sound effect 258
        [ 2115] do nothing
        [ 2116] store the literal value 7937 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2119] play sound effect 258
        [ 2121] do nothing
        [ 2122] store the literal value 7976 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2125] play sound effect 258
        [ 2127] do nothing
        [ 2128] store the literal value 8015 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2131] play sound effect 258
        [ 2133] do nothing
        [ 2134] store the literal value 8056 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2137] play sound effect 258
        [ 2139] do nothing
        [ 2140] store the literal value 8096 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2143] do nothing
        [ 2144] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2184] display system/chat message #8135: " þ"
        [ 2186] IF NOT(((var(24) & 256) == 0)): GOTO #2193  (else falls through, rejoins #2193)
        [ 2190] set script variable #24 = (var(24) + 256)
        [ 2193] IF NOT(((var(24) & 256) > 0)): GOTO #2200  (else falls through, rejoins #2200)
        [ 2197] set script variable #24 = (var(24) - 256)
        [ 2200] IF NOT((group_condition_ref_2(5, 1) && group_condition_ref_2(5, 2))): GOTO #2484  (else falls through, rejoins #2491)
        [ 2204] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 2207] set script variable #40 = random_below(100)
        [ 2210] IF NOT(((var(1) == 0) && (var(40) < 2))): GOTO #2477  (else falls through, rejoins #2477)
        [ 2214] set script variable #1 = (var(1) + 1)
        [ 2217] store the literal value 8153 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2220] SWITCH random_below(4): {0->#2223, 1->#2227, 2->#2231, 7->#2235} else #2239
        [ 2223] store the literal value 8154 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2226] do nothing
        [ 2227] store the literal value 8189 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2230] do nothing
        [ 2231] store the literal value 8216 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2234] do nothing
        [ 2235] store the literal value 8255 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2238] do nothing
        [ 2239] store the literal value 8283 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2242] do nothing
        [ 2243] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2253] store the literal value 8336 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2256] set script variable #41 = random_below(4)
        [ 2259] IF NOT(((random_below(4) != 7) && (var(41) >= 3))): GOTO #2266  (else falls through, rejoins #2266)
        [ 2263] set script variable #41 = random_below(3)
        [ 2266] SWITCH var(41): {0->#2269, 1->#2273, 3->#2277, 4->#2281, 5->#2285, 6->#2289, 7->#2293} else #2297
        [ 2269] store the literal value 8337 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2272] do nothing
        [ 2273] store the literal value 8341 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2276] do nothing
        [ 2277] store the literal value 8352 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2280] do nothing
        [ 2281] store the literal value 8373 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2284] do nothing
        [ 2285] store the literal value 8400 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2288] do nothing
        [ 2289] store the literal value 8431 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2292] do nothing
        [ 2293] store the literal value 8460 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2296] do nothing
        [ 2297] store the literal value 8490 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2300] do nothing
        [ 2301] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2317] store the literal value 8505 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2320] SWITCH 2048: {1->#2323, 2->#2329, 3->#2335, 4->#2341, 5->#2347, 6->#2353, 7->#2359, 8->#2365, 9->#2371, 10->#2377, 11->#2383, 12->#2389, 13->#2393, 14->#2397, 512->#2401, 32->#2407, 64->#2413, 128->#2419, 256->#2425} else #2431
        [ 2323] store the literal value 8506 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2326] play sound effect 257
        [ 2328] do nothing
        [ 2329] store the literal value 8533 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2332] play sound effect 257
        [ 2334] do nothing
        [ 2335] store the literal value 8559 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2338] play sound effect 260
        [ 2340] do nothing
        [ 2341] store the literal value 8589 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2344] play sound effect 260
        [ 2346] do nothing
        [ 2347] store the literal value 8613 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2350] play sound effect 260
        [ 2352] do nothing
        [ 2353] store the literal value 8638 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2356] play sound effect 261
        [ 2358] do nothing
        [ 2359] store the literal value 8692 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2362] play sound effect 257
        [ 2364] do nothing
        [ 2365] store the literal value 8716 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2368] play sound effect 261
        [ 2370] do nothing
        [ 2371] store the literal value 8771 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2374] play sound effect 262
        [ 2376] do nothing
        [ 2377] store the literal value 8816 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2380] play sound effect 262
        [ 2382] do nothing
        [ 2383] store the literal value 8867 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2386] play sound effect 259
        [ 2388] do nothing
        [ 2389] store the literal value 8950 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2392] do nothing
        [ 2393] store the literal value 9014 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2396] do nothing
        [ 2397] store the literal value 9068 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2400] do nothing
        [ 2401] store the literal value 9140 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2404] play sound effect 258
        [ 2406] do nothing
        [ 2407] store the literal value 9174 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2410] play sound effect 258
        [ 2412] do nothing
        [ 2413] store the literal value 9213 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2416] play sound effect 258
        [ 2418] do nothing
        [ 2419] store the literal value 9252 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2422] play sound effect 258
        [ 2424] do nothing
        [ 2425] store the literal value 9293 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2428] play sound effect 258
        [ 2430] do nothing
        [ 2431] store the literal value 9333 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2434] do nothing
        [ 2435] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2475] display system/chat message #9372: " þ"
        [ 2477] IF NOT(((var(24) & 2048) == 0)): GOTO #2484  (else falls through, rejoins #2484)
        [ 2481] set script variable #24 = (var(24) + 2048)
        [ 2484] IF NOT(((var(24) & 2048) > 0)): GOTO #2491  (else falls through, rejoins #2491)
        [ 2488] set script variable #24 = (var(24) - 2048)
        [ 2491] IF NOT((group_condition_ref_2(6, 1) && group_condition_ref_2(6, 2))): GOTO #2775  (else falls through, rejoins #2782)
        [ 2495] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #10
        [ 2498] set script variable #43 = random_below(100)
        [ 2501] IF NOT(((var(1) == 0) && (var(43) < 2))): GOTO #2768  (else falls through, rejoins #2768)
        [ 2505] set script variable #1 = (var(1) + 1)
        [ 2508] store the literal value 9390 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2511] SWITCH random_below(4): {0->#2514, 1->#2518, 2->#2522, 7->#2526} else #2530
        [ 2514] store the literal value 9391 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2517] do nothing
        [ 2518] store the literal value 9426 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2521] do nothing
        [ 2522] store the literal value 9453 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2525] do nothing
        [ 2526] store the literal value 9492 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2529] do nothing
        [ 2530] store the literal value 9520 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2533] do nothing
        [ 2534] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2544] store the literal value 9573 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2547] set script variable #44 = random_below(4)
        [ 2550] IF NOT(((random_below(4) != 7) && (var(44) >= 3))): GOTO #2557  (else falls through, rejoins #2557)
        [ 2554] set script variable #44 = random_below(3)
        [ 2557] SWITCH var(44): {0->#2560, 1->#2564, 3->#2568, 4->#2572, 5->#2576, 6->#2580, 7->#2584} else #2588
        [ 2560] store the literal value 9574 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2563] do nothing
        [ 2564] store the literal value 9578 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2567] do nothing
        [ 2568] store the literal value 9589 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2571] do nothing
        [ 2572] store the literal value 9610 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2575] do nothing
        [ 2576] store the literal value 9637 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2579] do nothing
        [ 2580] store the literal value 9668 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2583] do nothing
        [ 2584] store the literal value 9697 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2587] do nothing
        [ 2588] store the literal value 9727 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2591] do nothing
        [ 2592] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2608] store the literal value 9742 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2611] SWITCH 4096: {1->#2614, 2->#2620, 3->#2626, 4->#2632, 5->#2638, 6->#2644, 7->#2650, 8->#2656, 9->#2662, 10->#2668, 11->#2674, 12->#2680, 13->#2684, 14->#2688, 512->#2692, 32->#2698, 64->#2704, 128->#2710, 256->#2716} else #2722
        [ 2614] store the literal value 9743 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2617] play sound effect 257
        [ 2619] do nothing
        [ 2620] store the literal value 9770 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2623] play sound effect 257
        [ 2625] do nothing
        [ 2626] store the literal value 9796 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2629] play sound effect 260
        [ 2631] do nothing
        [ 2632] store the literal value 9826 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2635] play sound effect 260
        [ 2637] do nothing
        [ 2638] store the literal value 9850 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2641] play sound effect 260
        [ 2643] do nothing
        [ 2644] store the literal value 9875 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2647] play sound effect 261
        [ 2649] do nothing
        [ 2650] store the literal value 9929 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2653] play sound effect 257
        [ 2655] do nothing
        [ 2656] store the literal value 9953 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2659] play sound effect 261
        [ 2661] do nothing
        [ 2662] store the literal value 10008 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2665] play sound effect 262
        [ 2667] do nothing
        [ 2668] store the literal value 10053 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2671] play sound effect 262
        [ 2673] do nothing
        [ 2674] store the literal value 10104 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2677] play sound effect 259
        [ 2679] do nothing
        [ 2680] store the literal value 10187 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2683] do nothing
        [ 2684] store the literal value 10251 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2687] do nothing
        [ 2688] store the literal value 10305 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2691] do nothing
        [ 2692] store the literal value 10377 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2695] play sound effect 258
        [ 2697] do nothing
        [ 2698] store the literal value 10411 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2701] play sound effect 258
        [ 2703] do nothing
        [ 2704] store the literal value 10450 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2707] play sound effect 258
        [ 2709] do nothing
        [ 2710] store the literal value 10489 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2713] play sound effect 258
        [ 2715] do nothing
        [ 2716] store the literal value 10530 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2719] play sound effect 258
        [ 2721] do nothing
        [ 2722] store the literal value 10570 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2725] do nothing
        [ 2726] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2766] display system/chat message #10609: " þ"
        [ 2768] IF NOT(((var(24) & 4096) == 0)): GOTO #2775  (else falls through, rejoins #2775)
        [ 2772] set script variable #24 = (var(24) + 4096)
        [ 2775] IF NOT(((var(24) & 4096) > 0)): GOTO #2782  (else falls through, rejoins #2782)
        [ 2779] set script variable #24 = (var(24) - 4096)
        [ 2782] set script variable #46 = 0
        [ 2785] set script variable #47 = 0
        [ 2788] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 2791] WHILE set_unit_behavior(0, 11): loop below; exit -> #3103 (500-iteration guard)
        [ 2794] set script variable #46 = (var(46) + 1)
        [ 2797] do nothing (message no-op)
        [ 2798] (UNKNOWN OPCODE 0x2983) - dead end, not decoded further (other branches continue independently)
        [ 3103] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 3106] WHILE set_unit_behavior(0, 12): loop below; exit -> #3137 (500-iteration guard)
        [ 3109] IF NOT(group_condition_ref_2(8, 2)): GOTO #3116  (else falls through, rejoins #3123)
        [ 3113] set attribute #8 of unit-slot #12 to 2
        [ 3116] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3123  (else falls through, rejoins #3123)
        [ 3120] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1)
        [ 3123] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3132  (else falls through, rejoins #3132)
        [ 3127] set script variable #47 = (var(47) + 1)
        [ 3130] do nothing (message no-op)
        [ 3131] (UNKNOWN OPCODE 0x2f24) - dead end, not decoded further (other branches continue independently)
        [ 3132] advance unit-slot #12 to the next unit in group #1 after the current one
        [ 3135] GOTO #3109
        [ 3137] IF NOT(group_condition_ref_2(9, 2)): GOTO #3144  (else falls through, rejoins #3151)
        [ 3141] set attribute #8 of unit-slot #12 to 2
        [ 3144] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3151  (else falls through, rejoins #3151)
        [ 3148] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1)
        [ 3151] IF NOT((set_unit_behavior(8, 12) > 0)): GOTO #3160  (else falls through, rejoins #3160)
        [ 3155] set script variable #47 = (var(47) + 1)
        [ 3158] do nothing (message no-op)
        [ 3159] (UNKNOWN OPCODE 0x2f37) - dead end, not decoded further (other branches continue independently)
        [ 3160] advance unit-slot #12 to the next unit in group #1 after the current one
        [ 3163] set script variable #51 = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
        [ 3166] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 3169] WHILE set_unit_behavior(0, 11): loop below; exit -> #6325 (500-iteration guard)
        [ 3172] IF NOT((set_unit_behavior(5, 11) < 60)): GOTO #3181  (else falls through, rejoins #6318)
        [ 3176] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 3181] SWITCH (set_unit_behavior(8, 11) & 15): {0->#3184, 1->#3467, 2->#4300, 3->#4859, 4->#4869, 5->#4914, 10->#5199, 11->#5209, 12->#5607, 13->#5608, 14->#5903, 15->#5904} else #6290
        [ 3184] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #3466  (else falls through, rejoins #3466)
        [ 3188] set script variable #52 = random_below(100)
        [ 3191] IF NOT(((var(1) == 0) && (var(52) < 40))): GOTO #3458  (else falls through, rejoins #3458)
        [ 3195] set script variable #1 = (var(1) + 1)
        [ 3198] store the literal value 12106 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3201] SWITCH random_below(1): {0->#3204, 1->#3208, 2->#3212, 7->#3216} else #3220
        [ 3204] store the literal value 12107 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3207] do nothing
        [ 3208] store the literal value 12142 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3211] do nothing
        [ 3212] store the literal value 12169 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3215] do nothing
        [ 3216] store the literal value 12208 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3219] do nothing
        [ 3220] store the literal value 12236 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3223] do nothing
        [ 3224] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3234] store the literal value 12289 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3237] set script variable #53 = random_below(4)
        [ 3240] IF NOT(((random_below(1) != 7) && (var(53) >= 3))): GOTO #3247  (else falls through, rejoins #3247)
        [ 3244] set script variable #53 = random_below(3)
        [ 3247] SWITCH var(53): {0->#3250, 1->#3254, 3->#3258, 4->#3262, 5->#3266, 6->#3270, 7->#3274} else #3278
        [ 3250] store the literal value 12290 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3253] do nothing
        [ 3254] store the literal value 12294 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3257] do nothing
        [ 3258] store the literal value 12305 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3261] do nothing
        [ 3262] store the literal value 12326 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3265] do nothing
        [ 3266] store the literal value 12353 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3269] do nothing
        [ 3270] store the literal value 12384 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3273] do nothing
        [ 3274] store the literal value 12413 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3277] do nothing
        [ 3278] store the literal value 12443 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3281] do nothing
        [ 3282] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3298] store the literal value 12458 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3301] SWITCH 8: {1->#3304, 2->#3310, 3->#3316, 4->#3322, 5->#3328, 6->#3334, 7->#3340, 8->#3346, 9->#3352, 10->#3358, 11->#3364, 12->#3370, 13->#3374, 14->#3378, 512->#3382, 32->#3388, 64->#3394, 128->#3400, 256->#3406} else #3412
        [ 3304] store the literal value 12459 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3307] play sound effect 257
        [ 3309] do nothing
        [ 3310] store the literal value 12486 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3313] play sound effect 257
        [ 3315] do nothing
        [ 3316] store the literal value 12512 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3319] play sound effect 260
        [ 3321] do nothing
        [ 3322] store the literal value 12542 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3325] play sound effect 260
        [ 3327] do nothing
        [ 3328] store the literal value 12566 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3331] play sound effect 260
        [ 3333] do nothing
        [ 3334] store the literal value 12591 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3337] play sound effect 261
        [ 3339] do nothing
        [ 3340] store the literal value 12645 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3343] play sound effect 257
        [ 3345] do nothing
        [ 3346] store the literal value 12669 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3349] play sound effect 261
        [ 3351] do nothing
        [ 3352] store the literal value 12724 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3355] play sound effect 262
        [ 3357] do nothing
        [ 3358] store the literal value 12769 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3361] play sound effect 262
        [ 3363] do nothing
        [ 3364] store the literal value 12820 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3367] play sound effect 259
        [ 3369] do nothing
        [ 3370] store the literal value 12903 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3373] do nothing
        [ 3374] store the literal value 12967 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3377] do nothing
        [ 3378] store the literal value 13021 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3381] do nothing
        [ 3382] store the literal value 13093 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3385] play sound effect 258
        [ 3387] do nothing
        [ 3388] store the literal value 13127 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3391] play sound effect 258
        [ 3393] do nothing
        [ 3394] store the literal value 13166 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3397] play sound effect 258
        [ 3399] do nothing
        [ 3400] store the literal value 13205 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3403] play sound effect 258
        [ 3405] do nothing
        [ 3406] store the literal value 13246 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3409] play sound effect 258
        [ 3411] do nothing
        [ 3412] store the literal value 13286 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3415] do nothing
        [ 3416] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3456] display system/chat message #13325: " þ"
        [ 3458] order unit-slot #11 to move, speed/priority var(51), destination-type tag 0, destination arg 0
        [ 3463] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 3466] do nothing
        [ 3467] IF NOT((group_condition_ref_2(10, 1) || (set_unit_behavior(9, 11) != 0))): GOTO #3750  (else falls through, rejoins #4299)
        [ 3471] IF NOT((set_unit_behavior(7, 11) != 6)): GOTO #3750  (else falls through, rejoins #3750)
        [ 3475] set script variable #55 = random_below(100)
        [ 3478] IF NOT(((var(1) == 0) && (var(55) < 40))): GOTO #3745  (else falls through, rejoins #3745)
        [ 3482] set script variable #1 = (var(1) + 1)
        [ 3485] store the literal value 13343 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3488] SWITCH random_below(1): {0->#3491, 1->#3495, 2->#3499, 7->#3503} else #3507
        [ 3491] store the literal value 13344 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3494] do nothing
        [ 3495] store the literal value 13379 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3498] do nothing
        [ 3499] store the literal value 13406 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3502] do nothing
        [ 3503] store the literal value 13445 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3506] do nothing
        [ 3507] store the literal value 13473 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3510] do nothing
        [ 3511] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3521] store the literal value 13526 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3524] set script variable #56 = random_below(4)
        [ 3527] IF NOT(((random_below(1) != 7) && (var(56) >= 3))): GOTO #3534  (else falls through, rejoins #3534)
        [ 3531] set script variable #56 = random_below(3)
        [ 3534] SWITCH var(56): {0->#3537, 1->#3541, 3->#3545, 4->#3549, 5->#3553, 6->#3557, 7->#3561} else #3565
        [ 3537] store the literal value 13527 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3540] do nothing
        [ 3541] store the literal value 13531 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3544] do nothing
        [ 3545] store the literal value 13542 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3548] do nothing
        [ 3549] store the literal value 13563 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3552] do nothing
        [ 3553] store the literal value 13590 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3556] do nothing
        [ 3557] store the literal value 13621 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3560] do nothing
        [ 3561] store the literal value 13650 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3564] do nothing
        [ 3565] store the literal value 13680 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3568] do nothing
        [ 3569] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3585] store the literal value 13695 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3588] SWITCH 3: {1->#3591, 2->#3597, 3->#3603, 4->#3609, 5->#3615, 6->#3621, 7->#3627, 8->#3633, 9->#3639, 10->#3645, 11->#3651, 12->#3657, 13->#3661, 14->#3665, 512->#3669, 32->#3675, 64->#3681, 128->#3687, 256->#3693} else #3699
        [ 3591] store the literal value 13696 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3594] play sound effect 257
        [ 3596] do nothing
        [ 3597] store the literal value 13723 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3600] play sound effect 257
        [ 3602] do nothing
        [ 3603] store the literal value 13749 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3606] play sound effect 260
        [ 3608] do nothing
        [ 3609] store the literal value 13779 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3612] play sound effect 260
        [ 3614] do nothing
        [ 3615] store the literal value 13803 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3618] play sound effect 260
        [ 3620] do nothing
        [ 3621] store the literal value 13828 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3624] play sound effect 261
        [ 3626] do nothing
        [ 3627] store the literal value 13882 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3630] play sound effect 257
        [ 3632] do nothing
        [ 3633] store the literal value 13906 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3636] play sound effect 261
        [ 3638] do nothing
        [ 3639] store the literal value 13961 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3642] play sound effect 262
        [ 3644] do nothing
        [ 3645] store the literal value 14006 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3648] play sound effect 262
        [ 3650] do nothing
        [ 3651] store the literal value 14057 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3654] play sound effect 259
        [ 3656] do nothing
        [ 3657] store the literal value 14140 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3660] do nothing
        [ 3661] store the literal value 14204 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3664] do nothing
        [ 3665] store the literal value 14258 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3668] do nothing
        [ 3669] store the literal value 14330 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3672] play sound effect 258
        [ 3674] do nothing
        [ 3675] store the literal value 14364 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3678] play sound effect 258
        [ 3680] do nothing
        [ 3681] store the literal value 14403 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3684] play sound effect 258
        [ 3686] do nothing
        [ 3687] store the literal value 14442 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3690] play sound effect 258
        [ 3692] do nothing
        [ 3693] store the literal value 14483 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3696] play sound effect 258
        [ 3698] do nothing
        [ 3699] store the literal value 14523 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3702] do nothing
        [ 3703] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3743] display system/chat message #14562: " þ"
        [ 3745] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3750] IF NOT((set_unit_behavior(7, 11) != 2)): GOTO #4029  (else falls through, rejoins #4299)
        [ 3754] order unit-slot #11 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 3759] set script variable #58 = random_below(100)
        [ 3762] IF NOT(((var(1) == 0) && (var(58) < 4))): GOTO #4029  (else falls through, rejoins #4029)
        [ 3766] set script variable #1 = (var(1) + 1)
        [ 3769] store the literal value 14580 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3772] SWITCH random_below(1): {0->#3775, 1->#3779, 2->#3783, 7->#3787} else #3791
        [ 3775] store the literal value 14581 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3778] do nothing
        [ 3779] store the literal value 14616 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3782] do nothing
        [ 3783] store the literal value 14643 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3786] do nothing
        [ 3787] store the literal value 14682 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3790] do nothing
        [ 3791] store the literal value 14710 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3794] do nothing
        [ 3795] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3805] store the literal value 14763 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3808] set script variable #59 = random_below(4)
        [ 3811] IF NOT(((random_below(1) != 7) && (var(59) >= 3))): GOTO #3818  (else falls through, rejoins #3818)
        [ 3815] set script variable #59 = random_below(3)
        [ 3818] SWITCH var(59): {0->#3821, 1->#3825, 3->#3829, 4->#3833, 5->#3837, 6->#3841, 7->#3845} else #3849
        [ 3821] store the literal value 14764 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3824] do nothing
        [ 3825] store the literal value 14768 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3828] do nothing
        [ 3829] store the literal value 14779 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3832] do nothing
        [ 3833] store the literal value 14800 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3836] do nothing
        [ 3837] store the literal value 14827 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3840] do nothing
        [ 3841] store the literal value 14858 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3844] do nothing
        [ 3845] store the literal value 14887 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3848] do nothing
        [ 3849] store the literal value 14917 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3852] do nothing
        [ 3853] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3869] store the literal value 14932 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3872] SWITCH 2: {1->#3875, 2->#3881, 3->#3887, 4->#3893, 5->#3899, 6->#3905, 7->#3911, 8->#3917, 9->#3923, 10->#3929, 11->#3935, 12->#3941, 13->#3945, 14->#3949, 512->#3953, 32->#3959, 64->#3965, 128->#3971, 256->#3977} else #3983
        [ 3875] store the literal value 14933 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3878] play sound effect 257
        [ 3880] do nothing
        [ 3881] store the literal value 14960 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3884] play sound effect 257
        [ 3886] do nothing
        [ 3887] store the literal value 14986 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3890] play sound effect 260
        [ 3892] do nothing
        [ 3893] store the literal value 15016 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3896] play sound effect 260
        [ 3898] do nothing
        [ 3899] store the literal value 15040 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3902] play sound effect 260
        [ 3904] do nothing
        [ 3905] store the literal value 15065 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3908] play sound effect 261
        [ 3910] do nothing
        [ 3911] store the literal value 15119 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3914] play sound effect 257
        [ 3916] do nothing
        [ 3917] store the literal value 15143 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3920] play sound effect 261
        [ 3922] do nothing
        [ 3923] store the literal value 15198 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3926] play sound effect 262
        [ 3928] do nothing
        [ 3929] store the literal value 15243 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3932] play sound effect 262
        [ 3934] do nothing
        [ 3935] store the literal value 15294 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3938] play sound effect 259
        [ 3940] do nothing
        [ 3941] store the literal value 15377 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3944] do nothing
        [ 3945] store the literal value 15441 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3948] do nothing
        [ 3949] store the literal value 15495 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3952] do nothing
        [ 3953] store the literal value 15567 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3956] play sound effect 258
        [ 3958] do nothing
        [ 3959] store the literal value 15601 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3962] play sound effect 258
        [ 3964] do nothing
        [ 3965] store the literal value 15640 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3968] play sound effect 258
        [ 3970] do nothing
        [ 3971] store the literal value 15679 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3974] play sound effect 258
        [ 3976] do nothing
        [ 3977] store the literal value 15720 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3980] play sound effect 258
        [ 3982] do nothing
        [ 3983] store the literal value 15760 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3986] do nothing
        [ 3987] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4027] display system/chat message #15799: " þ""
        [ 4029] set script variable #61 = random_below(100)
        [ 4032] IF NOT(((var(1) == 0) && (var(61) < 4))): GOTO #4299  (else falls through, rejoins #4299)
        [ 4036] set script variable #1 = (var(1) + 1)
        [ 4039] store the literal value 15817 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4042] SWITCH random_below(1): {0->#4045, 1->#4049, 2->#4053, 7->#4057} else #4061
        [ 4045] store the literal value 15818 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4048] do nothing
        [ 4049] store the literal value 15853 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4052] do nothing
        [ 4053] store the literal value 15880 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4056] do nothing
        [ 4057] store the literal value 15919 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4060] do nothing
        [ 4061] store the literal value 15947 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4064] do nothing
        [ 4065] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4075] store the literal value 16000 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4078] set script variable #62 = random_below(4)
        [ 4081] IF NOT(((random_below(1) != 7) && (var(62) >= 3))): GOTO #4088  (else falls through, rejoins #4088)
        [ 4085] set script variable #62 = random_below(3)
        [ 4088] SWITCH var(62): {0->#4091, 1->#4095, 3->#4099, 4->#4103, 5->#4107, 6->#4111, 7->#4115} else #4119
        [ 4091] store the literal value 16001 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4094] do nothing
        [ 4095] store the literal value 16005 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4098] do nothing
        [ 4099] store the literal value 16016 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4102] do nothing
        [ 4103] store the literal value 16037 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4106] do nothing
        [ 4107] store the literal value 16064 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4110] do nothing
        [ 4111] store the literal value 16095 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4114] do nothing
        [ 4115] store the literal value 16124 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4118] do nothing
        [ 4119] store the literal value 16154 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4122] do nothing
        [ 4123] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4139] store the literal value 16169 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4142] SWITCH 1: {1->#4145, 2->#4151, 3->#4157, 4->#4163, 5->#4169, 6->#4175, 7->#4181, 8->#4187, 9->#4193, 10->#4199, 11->#4205, 12->#4211, 13->#4215, 14->#4219, 512->#4223, 32->#4229, 64->#4235, 128->#4241, 256->#4247} else #4253
        [ 4145] store the literal value 16170 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4148] play sound effect 257
        [ 4150] do nothing
        [ 4151] store the literal value 16197 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4154] play sound effect 257
        [ 4156] do nothing
        [ 4157] store the literal value 16223 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4160] play sound effect 260
        [ 4162] do nothing
        [ 4163] store the literal value 16253 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4166] play sound effect 260
        [ 4168] do nothing
        [ 4169] store the literal value 16277 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4172] play sound effect 260
        [ 4174] do nothing
        [ 4175] store the literal value 16302 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4178] play sound effect 261
        [ 4180] do nothing
        [ 4181] store the literal value 16356 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4184] play sound effect 257
        [ 4186] do nothing
        [ 4187] store the literal value 16380 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4190] play sound effect 261
        [ 4192] do nothing
        [ 4193] store the literal value 16435 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4196] play sound effect 262
        [ 4198] do nothing
        [ 4199] store the literal value 16480 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4202] play sound effect 262
        [ 4204] do nothing
        [ 4205] store the literal value 16531 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4208] play sound effect 259
        [ 4210] do nothing
        [ 4211] store the literal value 16614 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4214] do nothing
        [ 4215] store the literal value 16678 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4218] do nothing
        [ 4219] store the literal value 16732 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4222] do nothing
        [ 4223] store the literal value 16804 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4226] play sound effect 258
        [ 4228] do nothing
        [ 4229] store the literal value 16838 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4232] play sound effect 258
        [ 4234] do nothing
        [ 4235] store the literal value 16877 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4238] play sound effect 258
        [ 4240] do nothing
        [ 4241] store the literal value 16916 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4244] play sound effect 258
        [ 4246] do nothing
        [ 4247] store the literal value 16957 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4250] play sound effect 258
        [ 4252] do nothing
        [ 4253] store the literal value 16997 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4256] do nothing
        [ 4257] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4297] display system/chat message #17036: " þ%"
        [ 4299] do nothing
        [ 4300] IF NOT(((var(24) & 512) > 0)): GOTO #4579  (else falls through, rejoins #4858)
        [ 4304] set script variable #64 = random_below(100)
        [ 4307] IF NOT(((var(1) == 0) && (var(64) < 4))): GOTO #4574  (else falls through, rejoins #4574)
        [ 4311] set script variable #1 = (var(1) + 1)
        [ 4314] store the literal value 17054 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4317] SWITCH random_below(1): {0->#4320, 1->#4324, 2->#4328, 7->#4332} else #4336
        [ 4320] store the literal value 17055 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4323] do nothing
        [ 4324] store the literal value 17090 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4327] do nothing
        [ 4328] store the literal value 17117 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4331] do nothing
        [ 4332] store the literal value 17156 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4335] do nothing
        [ 4336] store the literal value 17184 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4339] do nothing
        [ 4340] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4350] store the literal value 17237 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4353] set script variable #65 = random_below(4)
        [ 4356] IF NOT(((random_below(1) != 7) && (var(65) >= 3))): GOTO #4363  (else falls through, rejoins #4363)
        [ 4360] set script variable #65 = random_below(3)
        [ 4363] SWITCH var(65): {0->#4366, 1->#4370, 3->#4374, 4->#4378, 5->#4382, 6->#4386, 7->#4390} else #4394
        [ 4366] store the literal value 17238 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4369] do nothing
        [ 4370] store the literal value 17242 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4373] do nothing
        [ 4374] store the literal value 17253 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4377] do nothing
        [ 4378] store the literal value 17274 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4381] do nothing
        [ 4382] store the literal value 17301 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4385] do nothing
        [ 4386] store the literal value 17332 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4389] do nothing
        [ 4390] store the literal value 17361 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4393] do nothing
        [ 4394] store the literal value 17391 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4397] do nothing
        [ 4398] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4414] store the literal value 17406 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4417] SWITCH 4: {1->#4420, 2->#4426, 3->#4432, 4->#4438, 5->#4444, 6->#4450, 7->#4456, 8->#4462, 9->#4468, 10->#4474, 11->#4480, 12->#4486, 13->#4490, 14->#4494, 512->#4498, 32->#4504, 64->#4510, 128->#4516, 256->#4522} else #4528
        [ 4420] store the literal value 17407 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4423] play sound effect 257
        [ 4425] do nothing
        [ 4426] store the literal value 17434 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4429] play sound effect 257
        [ 4431] do nothing
        [ 4432] store the literal value 17460 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4435] play sound effect 260
        [ 4437] do nothing
        [ 4438] store the literal value 17490 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4441] play sound effect 260
        [ 4443] do nothing
        [ 4444] store the literal value 17514 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4447] play sound effect 260
        [ 4449] do nothing
        [ 4450] store the literal value 17539 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4453] play sound effect 261
        [ 4455] do nothing
        [ 4456] store the literal value 17593 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4459] play sound effect 257
        [ 4461] do nothing
        [ 4462] store the literal value 17617 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4465] play sound effect 261
        [ 4467] do nothing
        [ 4468] store the literal value 17672 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4471] play sound effect 262
        [ 4473] do nothing
        [ 4474] store the literal value 17717 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4477] play sound effect 262
        [ 4479] do nothing
        [ 4480] store the literal value 17768 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4483] play sound effect 259
        [ 4485] do nothing
        [ 4486] store the literal value 17851 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4489] do nothing
        [ 4490] store the literal value 17915 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4493] do nothing
        [ 4494] store the literal value 17969 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4497] do nothing
        [ 4498] store the literal value 18041 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4501] play sound effect 258
        [ 4503] do nothing
        [ 4504] store the literal value 18075 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4507] play sound effect 258
        [ 4509] do nothing
        [ 4510] store the literal value 18114 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4513] play sound effect 258
        [ 4515] do nothing
        [ 4516] store the literal value 18153 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4519] play sound effect 258
        [ 4521] do nothing
        [ 4522] store the literal value 18194 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4525] play sound effect 258
        [ 4527] do nothing
        [ 4528] store the literal value 18234 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4531] do nothing
        [ 4532] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4572] display system/chat message #18273: " þ("
        [ 4574] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4579] IF NOT(((var(24) & 128) > 0)): GOTO #4858  (else falls through, rejoins #4858)
        [ 4583] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4588] set script variable #67 = random_below(100)
        [ 4591] IF NOT(((var(1) == 0) && (var(67) < 4))): GOTO #4858  (else falls through, rejoins #4858)
        [ 4595] set script variable #1 = (var(1) + 1)
        [ 4598] store the literal value 18291 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4601] SWITCH random_below(1): {0->#4604, 1->#4608, 2->#4612, 7->#4616} else #4620
        [ 4604] store the literal value 18292 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4607] do nothing
        [ 4608] store the literal value 18327 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4611] do nothing
        [ 4612] store the literal value 18354 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4615] do nothing
        [ 4616] store the literal value 18393 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4619] do nothing
        [ 4620] store the literal value 18421 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4623] do nothing
        [ 4624] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4634] store the literal value 18474 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4637] set script variable #68 = random_below(4)
        [ 4640] IF NOT(((random_below(1) != 7) && (var(68) >= 3))): GOTO #4647  (else falls through, rejoins #4647)
        [ 4644] set script variable #68 = random_below(3)
        [ 4647] SWITCH var(68): {0->#4650, 1->#4654, 3->#4658, 4->#4662, 5->#4666, 6->#4670, 7->#4674} else #4678
        [ 4650] store the literal value 18475 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4653] do nothing
        [ 4654] store the literal value 18479 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4657] do nothing
        [ 4658] store the literal value 18490 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4661] do nothing
        [ 4662] store the literal value 18511 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4665] do nothing
        [ 4666] store the literal value 18538 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4669] do nothing
        [ 4670] store the literal value 18569 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4673] do nothing
        [ 4674] store the literal value 18598 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4677] do nothing
        [ 4678] store the literal value 18628 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4681] do nothing
        [ 4682] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4698] store the literal value 18643 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4701] SWITCH 5: {1->#4704, 2->#4710, 3->#4716, 4->#4722, 5->#4728, 6->#4734, 7->#4740, 8->#4746, 9->#4752, 10->#4758, 11->#4764, 12->#4770, 13->#4774, 14->#4778, 512->#4782, 32->#4788, 64->#4794, 128->#4800, 256->#4806} else #4812
        [ 4704] store the literal value 18644 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4707] play sound effect 257
        [ 4709] do nothing
        [ 4710] store the literal value 18671 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4713] play sound effect 257
        [ 4715] do nothing
        [ 4716] store the literal value 18697 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4719] play sound effect 260
        [ 4721] do nothing
        [ 4722] store the literal value 18727 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4725] play sound effect 260
        [ 4727] do nothing
        [ 4728] store the literal value 18751 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4731] play sound effect 260
        [ 4733] do nothing
        [ 4734] store the literal value 18776 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4737] play sound effect 261
        [ 4739] do nothing
        [ 4740] store the literal value 18830 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4743] play sound effect 257
        [ 4745] do nothing
        [ 4746] store the literal value 18854 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4749] play sound effect 261
        [ 4751] do nothing
        [ 4752] store the literal value 18909 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4755] play sound effect 262
        [ 4757] do nothing
        [ 4758] store the literal value 18954 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4761] play sound effect 262
        [ 4763] do nothing
        [ 4764] store the literal value 19005 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4767] play sound effect 259
        [ 4769] do nothing
        [ 4770] store the literal value 19088 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4773] do nothing
        [ 4774] store the literal value 19152 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4777] do nothing
        [ 4778] store the literal value 19206 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4781] do nothing
        [ 4782] store the literal value 19278 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4785] play sound effect 258
        [ 4787] do nothing
        [ 4788] store the literal value 19312 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4791] play sound effect 258
        [ 4793] do nothing
        [ 4794] store the literal value 19351 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4797] play sound effect 258
        [ 4799] do nothing
        [ 4800] store the literal value 19390 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4803] play sound effect 258
        [ 4805] do nothing
        [ 4806] store the literal value 19431 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4809] play sound effect 258
        [ 4811] do nothing
        [ 4812] store the literal value 19471 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4815] do nothing
        [ 4816] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4856] display system/chat message #19510: " þ+"
        [ 4858] do nothing
        [ 4859] IF NOT(((var(24) & 512) > 0)): GOTO #4868  (else falls through, rejoins #4868)
        [ 4863] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4868] do nothing
        [ 4869] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#4872, 64->#4878, 128->#4884, 256->#4890} else #4896
        [ 4872] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4877] do nothing
        [ 4878] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 4883] do nothing
        [ 4884] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4889] do nothing
        [ 4890] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4895] do nothing
        [ 4896] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 4901] do nothing
        [ 4902] do nothing
        [ 4903] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4913] do nothing
        [ 4914] IF NOT((var(47) > 0)): GOTO #5193  (else falls through, rejoins #5198)
        [ 4918] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4923] set script variable #70 = random_below(100)
        [ 4926] IF NOT(((var(1) == 0) && (var(70) < 4))): GOTO #5193  (else falls through, rejoins #5193)
        [ 4930] set script variable #1 = (var(1) + 1)
        [ 4933] store the literal value 19528 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4936] SWITCH random_below(1): {0->#4939, 1->#4943, 2->#4947, 7->#4951} else #4955
        [ 4939] store the literal value 19529 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4942] do nothing
        [ 4943] store the literal value 19564 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4946] do nothing
        [ 4947] store the literal value 19591 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4950] do nothing
        [ 4951] store the literal value 19630 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4954] do nothing
        [ 4955] store the literal value 19658 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4958] do nothing
        [ 4959] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4969] store the literal value 19711 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4972] set script variable #71 = random_below(4)
        [ 4975] IF NOT(((random_below(1) != 7) && (var(71) >= 3))): GOTO #4982  (else falls through, rejoins #4982)
        [ 4979] set script variable #71 = random_below(3)
        [ 4982] SWITCH var(71): {0->#4985, 1->#4989, 3->#4993, 4->#4997, 5->#5001, 6->#5005, 7->#5009} else #5013
        [ 4985] store the literal value 19712 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4988] do nothing
        [ 4989] store the literal value 19716 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4992] do nothing
        [ 4993] store the literal value 19727 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4996] do nothing
        [ 4997] store the literal value 19748 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5000] do nothing
        [ 5001] store the literal value 19775 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5004] do nothing
        [ 5005] store the literal value 19806 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5008] do nothing
        [ 5009] store the literal value 19835 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5012] do nothing
        [ 5013] store the literal value 19865 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5016] do nothing
        [ 5017] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5033] store the literal value 19880 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5036] SWITCH 6: {1->#5039, 2->#5045, 3->#5051, 4->#5057, 5->#5063, 6->#5069, 7->#5075, 8->#5081, 9->#5087, 10->#5093, 11->#5099, 12->#5105, 13->#5109, 14->#5113, 512->#5117, 32->#5123, 64->#5129, 128->#5135, 256->#5141} else #5147
        [ 5039] store the literal value 19881 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5042] play sound effect 257
        [ 5044] do nothing
        [ 5045] store the literal value 19908 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5048] play sound effect 257
        [ 5050] do nothing
        [ 5051] store the literal value 19934 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5054] play sound effect 260
        [ 5056] do nothing
        [ 5057] store the literal value 19964 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5060] play sound effect 260
        [ 5062] do nothing
        [ 5063] store the literal value 19988 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5066] play sound effect 260
        [ 5068] do nothing
        [ 5069] store the literal value 20013 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5072] play sound effect 261
        [ 5074] do nothing
        [ 5075] store the literal value 20067 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5078] play sound effect 257
        [ 5080] do nothing
        [ 5081] store the literal value 20091 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5084] play sound effect 261
        [ 5086] do nothing
        [ 5087] store the literal value 20146 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5090] play sound effect 262
        [ 5092] do nothing
        [ 5093] store the literal value 20191 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5096] play sound effect 262
        [ 5098] do nothing
        [ 5099] store the literal value 20242 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5102] play sound effect 259
        [ 5104] do nothing
        [ 5105] store the literal value 20325 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5108] do nothing
        [ 5109] store the literal value 20389 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5112] do nothing
        [ 5113] store the literal value 20443 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5116] do nothing
        [ 5117] store the literal value 20515 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5120] play sound effect 258
        [ 5122] do nothing
        [ 5123] store the literal value 20549 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5126] play sound effect 258
        [ 5128] do nothing
        [ 5129] store the literal value 20588 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5132] play sound effect 258
        [ 5134] do nothing
        [ 5135] store the literal value 20627 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5138] play sound effect 258
        [ 5140] do nothing
        [ 5141] store the literal value 20668 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5144] play sound effect 258
        [ 5146] do nothing
        [ 5147] store the literal value 20708 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5150] do nothing
        [ 5151] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5191] display system/chat message #20747: " þ."
        [ 5193] order unit-slot #11 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 5198] do nothing
        [ 5199] IF NOT((set_unit_behavior(7, 11) != 3)): GOTO #5208  (else falls through, rejoins #5208)
        [ 5203] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5208] do nothing
        [ 5209] IF NOT((((var(24) & 7136) == 0) && (var(47) == 0))): GOTO #5582  (else falls through, rejoins #5606)
        [ 5213] set script variable #73 = random_below(100)
        [ 5216] IF NOT(((var(1) == 0) && (var(73) < 4))): GOTO #5483  (else falls through, rejoins #5483)
        [ 5220] set script variable #1 = (var(1) + 1)
        [ 5223] store the literal value 20765 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5226] SWITCH random_below(1): {0->#5229, 1->#5233, 2->#5237, 7->#5241} else #5245
        [ 5229] store the literal value 20766 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5232] do nothing
        [ 5233] store the literal value 20801 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5236] do nothing
        [ 5237] store the literal value 20828 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5240] do nothing
        [ 5241] store the literal value 20867 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5244] do nothing
        [ 5245] store the literal value 20895 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5248] do nothing
        [ 5249] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5259] store the literal value 20948 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5262] set script variable #74 = random_below(4)
        [ 5265] IF NOT(((random_below(1) != 7) && (var(74) >= 3))): GOTO #5272  (else falls through, rejoins #5272)
        [ 5269] set script variable #74 = random_below(3)
        [ 5272] SWITCH var(74): {0->#5275, 1->#5279, 3->#5283, 4->#5287, 5->#5291, 6->#5295, 7->#5299} else #5303
        [ 5275] store the literal value 20949 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5278] do nothing
        [ 5279] store the literal value 20953 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5282] do nothing
        [ 5283] store the literal value 20964 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5286] do nothing
        [ 5287] store the literal value 20985 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5290] do nothing
        [ 5291] store the literal value 21012 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5294] do nothing
        [ 5295] store the literal value 21043 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5298] do nothing
        [ 5299] store the literal value 21072 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5302] do nothing
        [ 5303] store the literal value 21102 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5306] do nothing
        [ 5307] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5323] store the literal value 21117 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5326] SWITCH 7: {1->#5329, 2->#5335, 3->#5341, 4->#5347, 5->#5353, 6->#5359, 7->#5365, 8->#5371, 9->#5377, 10->#5383, 11->#5389, 12->#5395, 13->#5399, 14->#5403, 512->#5407, 32->#5413, 64->#5419, 128->#5425, 256->#5431} else #5437
        [ 5329] store the literal value 21118 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5332] play sound effect 257
        [ 5334] do nothing
        [ 5335] store the literal value 21145 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5338] play sound effect 257
        [ 5340] do nothing
        [ 5341] store the literal value 21171 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5344] play sound effect 260
        [ 5346] do nothing
        [ 5347] store the literal value 21201 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5350] play sound effect 260
        [ 5352] do nothing
        [ 5353] store the literal value 21225 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5356] play sound effect 260
        [ 5358] do nothing
        [ 5359] store the literal value 21250 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5362] play sound effect 261
        [ 5364] do nothing
        [ 5365] store the literal value 21304 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5368] play sound effect 257
        [ 5370] do nothing
        [ 5371] store the literal value 21328 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5374] play sound effect 261
        [ 5376] do nothing
        [ 5377] store the literal value 21383 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5380] play sound effect 262
        [ 5382] do nothing
        [ 5383] store the literal value 21428 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5386] play sound effect 262
        [ 5388] do nothing
        [ 5389] store the literal value 21479 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5392] play sound effect 259
        [ 5394] do nothing
        [ 5395] store the literal value 21562 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5398] do nothing
        [ 5399] store the literal value 21626 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5402] do nothing
        [ 5403] store the literal value 21680 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5406] do nothing
        [ 5407] store the literal value 21752 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5410] play sound effect 258
        [ 5412] do nothing
        [ 5413] store the literal value 21786 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5416] play sound effect 258
        [ 5418] do nothing
        [ 5419] store the literal value 21825 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5422] play sound effect 258
        [ 5424] do nothing
        [ 5425] store the literal value 21864 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5428] play sound effect 258
        [ 5430] do nothing
        [ 5431] store the literal value 21905 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5434] play sound effect 258
        [ 5436] do nothing
        [ 5437] store the literal value 21945 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5440] do nothing
        [ 5441] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5481] display system/chat message #21984: " þ1"
        [ 5483] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#5486, 64->#5504, 128->#5522, 256->#5540} else #5558
        [ 5486] IF NOT(group_condition_ref(1, 11)): GOTO #5494  (else falls through, rejoins #5494)
        [ 5490] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5494] define condition-slot #1 as (variable-ref 1, expression-offset 4053)
        [ 5498] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5503] do nothing
        [ 5504] IF NOT(group_condition_ref(2, 11)): GOTO #5512  (else falls through, rejoins #5512)
        [ 5508] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5512] define condition-slot #2 as (variable-ref 2, expression-offset 4074)
        [ 5516] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 5521] do nothing
        [ 5522] IF NOT(group_condition_ref(3, 11)): GOTO #5530  (else falls through, rejoins #5530)
        [ 5526] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5530] define condition-slot #3 as (variable-ref 3, expression-offset 4095)
        [ 5534] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5539] do nothing
        [ 5540] IF NOT(group_condition_ref(4, 11)): GOTO #5548  (else falls through, rejoins #5548)
        [ 5544] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5548] define condition-slot #4 as (variable-ref 4, expression-offset 4116)
        [ 5552] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5557] do nothing
        [ 5558] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 5563] do nothing
        [ 5564] do nothing
        [ 5565] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5575] IF NOT(((set_unit_behavior(8, 11) & 1024) > 0)): GOTO #5582  (else falls through, rejoins #5582)
        [ 5579] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) - 1024)
        [ 5582] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #5597  (else falls through, rejoins #5606)
        [ 5586] arm timer #1 to expire 2 turn(s) from now
        [ 5589] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 5592] order unit-slot #11 to move, speed/priority var(51), destination-type tag 0, destination arg 0
        [ 5597] IF NOT(timer_expired(1)): GOTO #5606  (else falls through, rejoins #5606)
        [ 5601] order unit-slot #11 to move, speed/priority 3, destination-type tag 2, destination arg 7
        [ 5606] do nothing
        [ 5607] do nothing
        [ 5608] IF NOT((set_unit_behavior(7, 11) != 4)): GOTO #5887  (else falls through, rejoins #5902)
        [ 5612] set script variable #76 = random_below(100)
        [ 5615] IF NOT(((var(1) == 0) && (var(76) < 4))): GOTO #5882  (else falls through, rejoins #5882)
        [ 5619] set script variable #1 = (var(1) + 1)
        [ 5622] store the literal value 22002 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5625] SWITCH random_below(1): {0->#5628, 1->#5632, 2->#5636, 7->#5640} else #5644
        [ 5628] store the literal value 22003 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5631] do nothing
        [ 5632] store the literal value 22038 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5635] do nothing
        [ 5636] store the literal value 22065 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5639] do nothing
        [ 5640] store the literal value 22104 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5643] do nothing
        [ 5644] store the literal value 22132 into phase table slot #52 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5647] do nothing
        [ 5648] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5658] store the literal value 22185 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5661] set script variable #77 = random_below(4)
        [ 5664] IF NOT(((random_below(1) != 7) && (var(77) >= 3))): GOTO #5671  (else falls through, rejoins #5671)
        [ 5668] set script variable #77 = random_below(3)
        [ 5671] SWITCH var(77): {0->#5674, 1->#5678, 3->#5682, 4->#5686, 5->#5690, 6->#5694, 7->#5698} else #5702
        [ 5674] store the literal value 22186 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5677] do nothing
        [ 5678] store the literal value 22190 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5681] do nothing
        [ 5682] store the literal value 22201 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5685] do nothing
        [ 5686] store the literal value 22222 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5689] do nothing
        [ 5690] store the literal value 22249 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5693] do nothing
        [ 5694] store the literal value 22280 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5697] do nothing
        [ 5698] store the literal value 22309 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5701] do nothing
        [ 5702] store the literal value 22339 into phase table slot #53 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5705] do nothing
        [ 5706] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5722] store the literal value 22354 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5725] SWITCH 9: {1->#5728, 2->#5734, 3->#5740, 4->#5746, 5->#5752, 6->#5758, 7->#5764, 8->#5770, 9->#5776, 10->#5782, 11->#5788, 12->#5794, 13->#5798, 14->#5802, 512->#5806, 32->#5812, 64->#5818, 128->#5824, 256->#5830} else #5836
        [ 5728] store the literal value 22355 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5731] play sound effect 257
        [ 5733] do nothing
        [ 5734] store the literal value 22382 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5737] play sound effect 257
        [ 5739] do nothing
        [ 5740] store the literal value 22408 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5743] play sound effect 260
        [ 5745] do nothing
        [ 5746] store the literal value 22438 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5749] play sound effect 260
        [ 5751] do nothing
        [ 5752] store the literal value 22462 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5755] play sound effect 260
        [ 5757] do nothing
        [ 5758] store the literal value 22487 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5761] play sound effect 261
        [ 5763] do nothing
        [ 5764] store the literal value 22541 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5767] play sound effect 257
        [ 5769] do nothing
        [ 5770] store the literal value 22565 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5773] play sound effect 261
        [ 5775] do nothing
        [ 5776] store the literal value 22620 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5779] play sound effect 262
        [ 5781] do nothing
        [ 5782] store the literal value 22665 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5785] play sound effect 262
        [ 5787] do nothing
        [ 5788] store the literal value 22716 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5791] play sound effect 259
        [ 5793] do nothing
        [ 5794] store the literal value 22799 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5797] do nothing
        [ 5798] store the literal value 22863 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5801] do nothing
        [ 5802] store the literal value 22917 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5805] do nothing
        [ 5806] store the literal value 22989 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5809] play sound effect 258
        [ 5811] do nothing
        [ 5812] store the literal value 23023 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5815] play sound effect 258
        [ 5817] do nothing
        [ 5818] store the literal value 23062 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5821] play sound effect 258
        [ 5823] do nothing
        [ 5824] store the literal value 23101 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5827] play sound effect 258
        [ 5829] do nothing
        [ 5830] store the literal value 23142 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5833] play sound effect 258
        [ 5835] do nothing
        [ 5836] store the literal value 23182 into phase table slot #54 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5839] do nothing
        [ 5840] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5880] display system/chat message #23221: " þ4"
        [ 5882] order unit-slot #11 to move, speed/priority 4, destination-type tag 3, destination arg 13
        [ 5887] set script variable #79 = set_unit_behavior(10, 11)
        [ 5890] set unit-slot #14 = var(79)
        [ 5893] IF NOT(group_condition(14)): GOTO #5902  (else falls through, rejoins #5902)
        [ 5897] order unit-slot #11 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 5902] do nothing
        [ 5903] do nothing
        [ 5904] IF NOT((((var(24) & 7136) == 0) & (var(47) == 0))): GOTO #6277  (else falls through, rejoins #6289)
        [ 5908] set script variable #80 = random_below(100)
        [ 5911] IF NOT(((var(1) == 0) && (var(80) < 4))): GOTO #6178  (else falls through, rejoins #6178)
        [ 5915] set script variable #1 = (var(1) + 1)
        [ 5918] store the literal value 23239 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5921] SWITCH random_below(1): {0->#5924, 1->#5928, 2->#5932, 7->#5936} else #5940
        [ 5924] store the literal value 23240 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5927] do nothing
        [ 5928] store the literal value 23275 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5931] do nothing
        [ 5932] store the literal value 23302 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5935] do nothing
        [ 5936] store the literal value 23341 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5939] do nothing
        [ 5940] store the literal value 23369 into phase table slot #55 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5943] do nothing
        [ 5944] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5954] store the literal value 23422 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5957] set script variable #81 = random_below(4)
        [ 5960] IF NOT(((random_below(1) != 7) && (var(81) >= 3))): GOTO #5967  (else falls through, rejoins #5967)
        [ 5964] set script variable #81 = random_below(3)
        [ 5967] SWITCH var(81): {0->#5970, 1->#5974, 3->#5978, 4->#5982, 5->#5986, 6->#5990, 7->#5994} else #5998
        [ 5970] store the literal value 23423 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5973] do nothing
        [ 5974] store the literal value 23427 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5977] do nothing
        [ 5978] store the literal value 23438 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5981] do nothing
        [ 5982] store the literal value 23459 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5985] do nothing
        [ 5986] store the literal value 23486 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5989] do nothing
        [ 5990] store the literal value 23517 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5993] do nothing
        [ 5994] store the literal value 23546 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5997] do nothing
        [ 5998] store the literal value 23576 into phase table slot #56 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6001] do nothing
        [ 6002] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 6018] store the literal value 23591 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6021] SWITCH 7: {1->#6024, 2->#6030, 3->#6036, 4->#6042, 5->#6048, 6->#6054, 7->#6060, 8->#6066, 9->#6072, 10->#6078, 11->#6084, 12->#6090, 13->#6094, 14->#6098, 512->#6102, 32->#6108, 64->#6114, 128->#6120, 256->#6126} else #6132
        [ 6024] store the literal value 23592 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6027] play sound effect 257
        [ 6029] do nothing
        [ 6030] store the literal value 23619 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6033] play sound effect 257
        [ 6035] do nothing
        [ 6036] store the literal value 23645 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6039] play sound effect 260
        [ 6041] do nothing
        [ 6042] store the literal value 23675 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6045] play sound effect 260
        [ 6047] do nothing
        [ 6048] store the literal value 23699 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6051] play sound effect 260
        [ 6053] do nothing
        [ 6054] store the literal value 23724 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6057] play sound effect 261
        [ 6059] do nothing
        [ 6060] store the literal value 23778 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6063] play sound effect 257
        [ 6065] do nothing
        [ 6066] store the literal value 23802 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6069] play sound effect 261
        [ 6071] do nothing
        [ 6072] store the literal value 23857 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6075] play sound effect 262
        [ 6077] do nothing
        [ 6078] store the literal value 23902 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6081] play sound effect 262
        [ 6083] do nothing
        [ 6084] store the literal value 23953 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6087] play sound effect 259
        [ 6089] do nothing
        [ 6090] store the literal value 24036 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6093] do nothing
        [ 6094] store the literal value 24100 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6097] do nothing
        [ 6098] store the literal value 24154 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6101] do nothing
        [ 6102] store the literal value 24226 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6105] play sound effect 258
        [ 6107] do nothing
        [ 6108] store the literal value 24260 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6111] play sound effect 258
        [ 6113] do nothing
        [ 6114] store the literal value 24299 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6117] play sound effect 258
        [ 6119] do nothing
        [ 6120] store the literal value 24338 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6123] play sound effect 258
        [ 6125] do nothing
        [ 6126] store the literal value 24379 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6129] play sound effect 258
        [ 6131] do nothing
        [ 6132] store the literal value 24419 into phase table slot #57 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6135] do nothing
        [ 6136] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6176] display system/chat message #24458: " þ7"
        [ 6178] SWITCH (set_unit_behavior(8, 11) & 7136): {32->#6181, 64->#6199, 128->#6217, 256->#6235} else #6253
        [ 6181] IF NOT(group_condition_ref(1, 11)): GOTO #6189  (else falls through, rejoins #6189)
        [ 6185] set hex-var #1 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6189] define condition-slot #1 as (variable-ref 1, expression-offset 4549)
        [ 6193] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 6198] do nothing
        [ 6199] IF NOT(group_condition_ref(2, 11)): GOTO #6207  (else falls through, rejoins #6207)
        [ 6203] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6207] define condition-slot #2 as (variable-ref 2, expression-offset 4570)
        [ 6211] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 6216] do nothing
        [ 6217] IF NOT(group_condition_ref(3, 11)): GOTO #6225  (else falls through, rejoins #6225)
        [ 6221] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6225] define condition-slot #3 as (variable-ref 3, expression-offset 4591)
        [ 6229] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 6234] do nothing
        [ 6235] IF NOT(group_condition_ref(4, 11)): GOTO #6243  (else falls through, rejoins #6243)
        [ 6239] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 6243] define condition-slot #4 as (variable-ref 4, expression-offset 4612)
        [ 6247] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 6252] do nothing
        [ 6253] order unit-slot #11 to move, speed/priority 1, destination-type tag 2, destination arg 7
        [ 6258] do nothing
        [ 6259] do nothing
        [ 6260] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6270] IF NOT(((set_unit_behavior(8, 11) & 1024) > 0)): GOTO #6277  (else falls through, rejoins #6277)
        [ 6274] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) - 1024)
        [ 6277] IF NOT(((set_unit_behavior(8, 11) & 1024) == 0)): GOTO #6289  (else falls through, rejoins #6289)
        [ 6281] set attribute #8 of unit-slot #11 to (set_unit_behavior(8, 11) + 1024)
        [ 6284] order unit-slot #11 to move, speed/priority var(51), destination-type tag 0, destination arg 0
        [ 6289] do nothing
        [ 6290] do nothing
        [ 6291] do nothing
        [ 6292] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 6318] do nothing (message no-op)
        [ 6319] (UNKNOWN OPCODE 0x5f9c) - dead end, not decoded further (other branches continue independently)
        [ 6325] set script variable #4 = 0
        [ 6328] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 6331] WHILE set_unit_behavior(0, 11): loop below; exit -> #6342 (500-iteration guard)
        [ 6334] set script variable #4 = (var(4) + 1)
        [ 6337] advance unit-slot #11 to the next unit in group #2 after the current one
        [ 6340] GOTO #6334
        [ 6342] do nothing (message no-op)
        [ 6343] (UNKNOWN OPCODE 0x5fba) - dead end, not decoded further (other branches continue independently)
        [ 6442] ONCE(((any_group_alive(2) || any_group_alive(1)) || !all_group_alive(1)), flag[2]): run block below -> #6447
        [ 6446] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6447] ONCE((timer_expired(3) && (var(6) > 0)), flag[3]): run block below -> #6453
        [ 6451] display system/chat message #24768: "Mobile defense node threatened. Call all nearby units from defense pool."
        [ 6453] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6454] IF NOT(any_group_alive(2)): GOTO #6465  (else falls through, rejoins #6470)
            [ 6458] play sound effect 35
            [ 6460] display system/chat message #24841: "You rock, dude!"
            [ 6462] set the objective state of unit 1 to 1
            [ 6465] display system/chat message #24857: "Mission failed! You suck!"
            [ 6467] set the objective state of unit 1 to 2
            [ 6470] advance to the next scenario phase (no effect if already at the last phase)
            [ 6471] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
