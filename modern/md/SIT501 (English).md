# SIT501.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=654, phase1=664, phase2=1153, phase3=6676
; 23301 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = (random_below(4) + 3)
[    3] set script variable #5 = 0
[    6] set script variable #8 = (8 + random_below(7))
[    9] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [   10] set hex-var #1 = the point 0 steps along the path toward 0
    [   14] IF NOT((var(4) == 0)): GOTO #21  (else falls through, rejoins #21)
    [   18] set script variable #4 = (random_below(var(10)) + var(11))
    [   21] set script variable #12 = (stat(0) / 1)
    [   24] set script variable #12 = (var(12) - 200)
    [   27] set script variable #13 = 1
    [   30] set script variable #14 = 179
    [   33] do nothing (message no-op)
    [   34] (UNKNOWN OPCODE 0x0141) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  499] set script variable #31 = 0
        [  502] set script variable #32 = 0
        [  505] ONCE(1, flag[1]): run block below -> #528
        [  509] set script variable #33 = 0
        [  512] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  515] WHILE set_unit_behavior(0, 5): loop below; exit -> #526 (500-iteration guard)
        [  518] set script variable #33 = (var(33) + 1)
        [  521] advance unit-slot #5 to the next unit in group #2 after the current one
        [  524] GOTO #518
        [  526] do nothing (message no-op)
        [  527] (UNKNOWN OPCODE 0x0262) - dead end, not decoded further (other branches continue independently)
        [  528] IF NOT(timer_expired(2)): GOTO #6010  (else falls through, rejoins #6010)
        [  532] arm timer #2 to expire 1 turn(s) from now
        [  535] set script variable #3 = 0
        [  538] set script variable #34 = 0
        [  541] IF NOT((group_condition_ref_2(2, 1) && group_condition_ref_2(2, 2))): GOTO #825  (else falls through, rejoins #832)
        [  545] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #6
        [  548] set script variable #35 = random_below(100)
        [  551] IF NOT(((var(3) == 0) && (var(35) < 2))): GOTO #818  (else falls through, rejoins #818)
        [  555] set script variable #3 = (var(3) + 1)
        [  558] store the literal value 760 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  561] SWITCH random_below(4): {0->#564, 1->#568, 2->#572, 7->#576} else #580
        [  564] store the literal value 761 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  567] do nothing
        [  568] store the literal value 796 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  571] do nothing
        [  572] store the literal value 823 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  575] do nothing
        [  576] store the literal value 862 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  579] do nothing
        [  580] store the literal value 890 into phase table slot #1 (stored as-is, not evaluated - purpose not fully confirmed)
        [  583] do nothing
        [  584] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  594] store the literal value 943 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  597] set script variable #36 = random_below(4)
        [  600] IF NOT(((random_below(4) != 7) && (var(36) >= 3))): GOTO #607  (else falls through, rejoins #607)
        [  604] set script variable #36 = random_below(3)
        [  607] SWITCH var(36): {0->#610, 1->#614, 3->#618, 4->#622, 5->#626, 6->#630, 7->#634} else #638
        [  610] store the literal value 944 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  613] do nothing
        [  614] store the literal value 948 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  617] do nothing
        [  618] store the literal value 959 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  621] do nothing
        [  622] store the literal value 980 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  625] do nothing
        [  626] store the literal value 1007 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  629] do nothing
        [  630] store the literal value 1038 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  633] do nothing
        [  634] store the literal value 1067 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  637] do nothing
        [  638] store the literal value 1097 into phase table slot #2 (stored as-is, not evaluated - purpose not fully confirmed)
        [  641] do nothing
        [  642] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  658] store the literal value 1112 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  661] SWITCH 32: {1->#664, 2->#670, 3->#676, 4->#682, 5->#688, 6->#694, 7->#700, 8->#706, 9->#712, 10->#718, 11->#724, 12->#730, 13->#734, 14->#738, 512->#742, 32->#748, 64->#754, 128->#760, 256->#766} else #772
        [  664] store the literal value 1113 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  667] play sound effect 257
        [  669] do nothing
        [  670] store the literal value 1140 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  673] play sound effect 257
        [  675] do nothing
        [  676] store the literal value 1166 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  679] play sound effect 260
        [  681] do nothing
        [  682] store the literal value 1196 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  685] play sound effect 260
        [  687] do nothing
        [  688] store the literal value 1220 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  691] play sound effect 260
        [  693] do nothing
        [  694] store the literal value 1245 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  697] play sound effect 261
        [  699] do nothing
        [  700] store the literal value 1299 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  703] play sound effect 257
        [  705] do nothing
        [  706] store the literal value 1323 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  709] play sound effect 261
        [  711] do nothing
        [  712] store the literal value 1378 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  715] play sound effect 262
        [  717] do nothing
        [  718] store the literal value 1423 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  721] play sound effect 262
        [  723] do nothing
        [  724] store the literal value 1474 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  727] play sound effect 259
        [  729] do nothing
        [  730] store the literal value 1557 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  733] do nothing
        [  734] store the literal value 1621 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  737] do nothing
        [  738] store the literal value 1675 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  741] do nothing
        [  742] store the literal value 1747 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  745] play sound effect 258
        [  747] do nothing
        [  748] store the literal value 1781 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  751] play sound effect 258
        [  753] do nothing
        [  754] store the literal value 1820 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  757] play sound effect 258
        [  759] do nothing
        [  760] store the literal value 1859 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  763] play sound effect 258
        [  765] do nothing
        [  766] store the literal value 1900 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  769] play sound effect 258
        [  771] do nothing
        [  772] store the literal value 1940 into phase table slot #3 (stored as-is, not evaluated - purpose not fully confirmed)
        [  775] do nothing
        [  776] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [  816] display system/chat message #1979: " þ"
        [  818] IF NOT(((var(34) & 32) == 0)): GOTO #825  (else falls through, rejoins #825)
        [  822] set script variable #34 = (var(34) + 32)
        [  825] IF NOT(((var(34) & 32) > 0)): GOTO #832  (else falls through, rejoins #832)
        [  829] set script variable #34 = (var(34) - 32)
        [  832] IF NOT((group_condition_ref_2(3, 1) && group_condition_ref_2(3, 2))): GOTO #1116  (else falls through, rejoins #1123)
        [  836] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #7
        [  839] set script variable #38 = random_below(100)
        [  842] IF NOT(((var(3) == 0) && (var(38) < 2))): GOTO #1109  (else falls through, rejoins #1109)
        [  846] set script variable #3 = (var(3) + 1)
        [  849] store the literal value 1997 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  852] SWITCH random_below(4): {0->#855, 1->#859, 2->#863, 7->#867} else #871
        [  855] store the literal value 1998 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  858] do nothing
        [  859] store the literal value 2033 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  862] do nothing
        [  863] store the literal value 2060 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  866] do nothing
        [  867] store the literal value 2099 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  870] do nothing
        [  871] store the literal value 2127 into phase table slot #4 (stored as-is, not evaluated - purpose not fully confirmed)
        [  874] do nothing
        [  875] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [  885] store the literal value 2180 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  888] set script variable #39 = random_below(4)
        [  891] IF NOT(((random_below(4) != 7) && (var(39) >= 3))): GOTO #898  (else falls through, rejoins #898)
        [  895] set script variable #39 = random_below(3)
        [  898] SWITCH var(39): {0->#901, 1->#905, 3->#909, 4->#913, 5->#917, 6->#921, 7->#925} else #929
        [  901] store the literal value 2181 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  904] do nothing
        [  905] store the literal value 2185 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  908] do nothing
        [  909] store the literal value 2196 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  912] do nothing
        [  913] store the literal value 2217 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  916] do nothing
        [  917] store the literal value 2244 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  920] do nothing
        [  921] store the literal value 2275 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  924] do nothing
        [  925] store the literal value 2304 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  928] do nothing
        [  929] store the literal value 2334 into phase table slot #5 (stored as-is, not evaluated - purpose not fully confirmed)
        [  932] do nothing
        [  933] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [  949] store the literal value 2349 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  952] SWITCH 64: {1->#955, 2->#961, 3->#967, 4->#973, 5->#979, 6->#985, 7->#991, 8->#997, 9->#1003, 10->#1009, 11->#1015, 12->#1021, 13->#1025, 14->#1029, 512->#1033, 32->#1039, 64->#1045, 128->#1051, 256->#1057} else #1063
        [  955] store the literal value 2350 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  958] play sound effect 257
        [  960] do nothing
        [  961] store the literal value 2377 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  964] play sound effect 257
        [  966] do nothing
        [  967] store the literal value 2403 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  970] play sound effect 260
        [  972] do nothing
        [  973] store the literal value 2433 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  976] play sound effect 260
        [  978] do nothing
        [  979] store the literal value 2457 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  982] play sound effect 260
        [  984] do nothing
        [  985] store the literal value 2482 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  988] play sound effect 261
        [  990] do nothing
        [  991] store the literal value 2536 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [  994] play sound effect 257
        [  996] do nothing
        [  997] store the literal value 2560 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1000] play sound effect 261
        [ 1002] do nothing
        [ 1003] store the literal value 2615 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1006] play sound effect 262
        [ 1008] do nothing
        [ 1009] store the literal value 2660 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1012] play sound effect 262
        [ 1014] do nothing
        [ 1015] store the literal value 2711 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1018] play sound effect 259
        [ 1020] do nothing
        [ 1021] store the literal value 2794 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1024] do nothing
        [ 1025] store the literal value 2858 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1028] do nothing
        [ 1029] store the literal value 2912 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1032] do nothing
        [ 1033] store the literal value 2984 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1036] play sound effect 258
        [ 1038] do nothing
        [ 1039] store the literal value 3018 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1042] play sound effect 258
        [ 1044] do nothing
        [ 1045] store the literal value 3057 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1048] play sound effect 258
        [ 1050] do nothing
        [ 1051] store the literal value 3096 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1054] play sound effect 258
        [ 1056] do nothing
        [ 1057] store the literal value 3137 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1060] play sound effect 258
        [ 1062] do nothing
        [ 1063] store the literal value 3177 into phase table slot #6 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1066] do nothing
        [ 1067] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1107] display system/chat message #3216: " þ"
        [ 1109] IF NOT(((var(34) & 64) == 0)): GOTO #1116  (else falls through, rejoins #1116)
        [ 1113] set script variable #34 = (var(34) + 64)
        [ 1116] IF NOT(((var(34) & 64) > 0)): GOTO #1123  (else falls through, rejoins #1123)
        [ 1120] set script variable #34 = (var(34) - 64)
        [ 1123] IF NOT((group_condition_ref_2(4, 1) && group_condition_ref_2(4, 2))): GOTO #1407  (else falls through, rejoins #1414)
        [ 1127] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #8
        [ 1130] set script variable #41 = random_below(100)
        [ 1133] IF NOT(((var(3) == 0) && (var(41) < 2))): GOTO #1400  (else falls through, rejoins #1400)
        [ 1137] set script variable #3 = (var(3) + 1)
        [ 1140] store the literal value 3234 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1143] SWITCH random_below(4): {0->#1146, 1->#1150, 2->#1154, 7->#1158} else #1162
        [ 1146] store the literal value 3235 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1149] do nothing
        [ 1150] store the literal value 3270 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1153] do nothing
        [ 1154] store the literal value 3297 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1157] do nothing
        [ 1158] store the literal value 3336 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1161] do nothing
        [ 1162] store the literal value 3364 into phase table slot #7 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1165] do nothing
        [ 1166] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1176] store the literal value 3417 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1179] set script variable #42 = random_below(4)
        [ 1182] IF NOT(((random_below(4) != 7) && (var(42) >= 3))): GOTO #1189  (else falls through, rejoins #1189)
        [ 1186] set script variable #42 = random_below(3)
        [ 1189] SWITCH var(42): {0->#1192, 1->#1196, 3->#1200, 4->#1204, 5->#1208, 6->#1212, 7->#1216} else #1220
        [ 1192] store the literal value 3418 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1195] do nothing
        [ 1196] store the literal value 3422 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1199] do nothing
        [ 1200] store the literal value 3433 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1203] do nothing
        [ 1204] store the literal value 3454 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1207] do nothing
        [ 1208] store the literal value 3481 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1211] do nothing
        [ 1212] store the literal value 3512 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1215] do nothing
        [ 1216] store the literal value 3541 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1219] do nothing
        [ 1220] store the literal value 3571 into phase table slot #8 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1223] do nothing
        [ 1224] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1240] store the literal value 3586 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1243] SWITCH 128: {1->#1246, 2->#1252, 3->#1258, 4->#1264, 5->#1270, 6->#1276, 7->#1282, 8->#1288, 9->#1294, 10->#1300, 11->#1306, 12->#1312, 13->#1316, 14->#1320, 512->#1324, 32->#1330, 64->#1336, 128->#1342, 256->#1348} else #1354
        [ 1246] store the literal value 3587 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1249] play sound effect 257
        [ 1251] do nothing
        [ 1252] store the literal value 3614 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1255] play sound effect 257
        [ 1257] do nothing
        [ 1258] store the literal value 3640 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1261] play sound effect 260
        [ 1263] do nothing
        [ 1264] store the literal value 3670 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1267] play sound effect 260
        [ 1269] do nothing
        [ 1270] store the literal value 3694 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1273] play sound effect 260
        [ 1275] do nothing
        [ 1276] store the literal value 3719 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1279] play sound effect 261
        [ 1281] do nothing
        [ 1282] store the literal value 3773 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1285] play sound effect 257
        [ 1287] do nothing
        [ 1288] store the literal value 3797 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1291] play sound effect 261
        [ 1293] do nothing
        [ 1294] store the literal value 3852 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1297] play sound effect 262
        [ 1299] do nothing
        [ 1300] store the literal value 3897 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1303] play sound effect 262
        [ 1305] do nothing
        [ 1306] store the literal value 3948 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1309] play sound effect 259
        [ 1311] do nothing
        [ 1312] store the literal value 4031 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1315] do nothing
        [ 1316] store the literal value 4095 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1319] do nothing
        [ 1320] store the literal value 4149 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1323] do nothing
        [ 1324] store the literal value 4221 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1327] play sound effect 258
        [ 1329] do nothing
        [ 1330] store the literal value 4255 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1333] play sound effect 258
        [ 1335] do nothing
        [ 1336] store the literal value 4294 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1339] play sound effect 258
        [ 1341] do nothing
        [ 1342] store the literal value 4333 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1345] play sound effect 258
        [ 1347] do nothing
        [ 1348] store the literal value 4374 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1351] play sound effect 258
        [ 1353] do nothing
        [ 1354] store the literal value 4414 into phase table slot #9 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1357] do nothing
        [ 1358] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1398] display system/chat message #4453: " þ"
        [ 1400] IF NOT(((var(34) & 128) == 0)): GOTO #1407  (else falls through, rejoins #1407)
        [ 1404] set script variable #34 = (var(34) + 128)
        [ 1407] IF NOT(((var(34) & 128) > 0)): GOTO #1414  (else falls through, rejoins #1414)
        [ 1411] set script variable #34 = (var(34) - 128)
        [ 1414] IF NOT((group_condition_ref_2(5, 1) && group_condition_ref_2(5, 2))): GOTO #1698  (else falls through, rejoins #1705)
        [ 1418] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #9
        [ 1421] set script variable #44 = random_below(100)
        [ 1424] IF NOT(((var(3) == 0) && (var(44) < 2))): GOTO #1691  (else falls through, rejoins #1691)
        [ 1428] set script variable #3 = (var(3) + 1)
        [ 1431] store the literal value 4471 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1434] SWITCH random_below(4): {0->#1437, 1->#1441, 2->#1445, 7->#1449} else #1453
        [ 1437] store the literal value 4472 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1440] do nothing
        [ 1441] store the literal value 4507 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1444] do nothing
        [ 1445] store the literal value 4534 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1448] do nothing
        [ 1449] store the literal value 4573 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1452] do nothing
        [ 1453] store the literal value 4601 into phase table slot #10 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1456] do nothing
        [ 1457] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1467] store the literal value 4654 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1470] set script variable #45 = random_below(4)
        [ 1473] IF NOT(((random_below(4) != 7) && (var(45) >= 3))): GOTO #1480  (else falls through, rejoins #1480)
        [ 1477] set script variable #45 = random_below(3)
        [ 1480] SWITCH var(45): {0->#1483, 1->#1487, 3->#1491, 4->#1495, 5->#1499, 6->#1503, 7->#1507} else #1511
        [ 1483] store the literal value 4655 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1486] do nothing
        [ 1487] store the literal value 4659 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1490] do nothing
        [ 1491] store the literal value 4670 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1494] do nothing
        [ 1495] store the literal value 4691 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1498] do nothing
        [ 1499] store the literal value 4718 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1502] do nothing
        [ 1503] store the literal value 4749 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1506] do nothing
        [ 1507] store the literal value 4778 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1510] do nothing
        [ 1511] store the literal value 4808 into phase table slot #11 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1514] do nothing
        [ 1515] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1531] store the literal value 4823 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1534] SWITCH 256: {1->#1537, 2->#1543, 3->#1549, 4->#1555, 5->#1561, 6->#1567, 7->#1573, 8->#1579, 9->#1585, 10->#1591, 11->#1597, 12->#1603, 13->#1607, 14->#1611, 512->#1615, 32->#1621, 64->#1627, 128->#1633, 256->#1639} else #1645
        [ 1537] store the literal value 4824 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1540] play sound effect 257
        [ 1542] do nothing
        [ 1543] store the literal value 4851 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1546] play sound effect 257
        [ 1548] do nothing
        [ 1549] store the literal value 4877 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1552] play sound effect 260
        [ 1554] do nothing
        [ 1555] store the literal value 4907 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1558] play sound effect 260
        [ 1560] do nothing
        [ 1561] store the literal value 4931 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1564] play sound effect 260
        [ 1566] do nothing
        [ 1567] store the literal value 4956 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1570] play sound effect 261
        [ 1572] do nothing
        [ 1573] store the literal value 5010 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1576] play sound effect 257
        [ 1578] do nothing
        [ 1579] store the literal value 5034 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1582] play sound effect 261
        [ 1584] do nothing
        [ 1585] store the literal value 5089 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1588] play sound effect 262
        [ 1590] do nothing
        [ 1591] store the literal value 5134 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1594] play sound effect 262
        [ 1596] do nothing
        [ 1597] store the literal value 5185 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1600] play sound effect 259
        [ 1602] do nothing
        [ 1603] store the literal value 5268 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1606] do nothing
        [ 1607] store the literal value 5332 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1610] do nothing
        [ 1611] store the literal value 5386 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1614] do nothing
        [ 1615] store the literal value 5458 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1618] play sound effect 258
        [ 1620] do nothing
        [ 1621] store the literal value 5492 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1624] play sound effect 258
        [ 1626] do nothing
        [ 1627] store the literal value 5531 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1630] play sound effect 258
        [ 1632] do nothing
        [ 1633] store the literal value 5570 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1636] play sound effect 258
        [ 1638] do nothing
        [ 1639] store the literal value 5611 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1642] play sound effect 258
        [ 1644] do nothing
        [ 1645] store the literal value 5651 into phase table slot #12 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1648] do nothing
        [ 1649] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1689] display system/chat message #5690: " þ
"
        [ 1691] IF NOT(((var(34) & 256) == 0)): GOTO #1698  (else falls through, rejoins #1698)
        [ 1695] set script variable #34 = (var(34) + 256)
        [ 1698] IF NOT(((var(34) & 256) > 0)): GOTO #1705  (else falls through, rejoins #1705)
        [ 1702] set script variable #34 = (var(34) - 256)
        [ 1705] IF NOT((group_condition_ref_2(6, 1) && group_condition_ref_2(6, 2))): GOTO #1989  (else falls through, rejoins #1996)
        [ 1709] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #10
        [ 1712] set script variable #47 = random_below(100)
        [ 1715] IF NOT(((var(3) == 0) && (var(47) < 2))): GOTO #1982  (else falls through, rejoins #1982)
        [ 1719] set script variable #3 = (var(3) + 1)
        [ 1722] store the literal value 5708 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1725] SWITCH random_below(4): {0->#1728, 1->#1732, 2->#1736, 7->#1740} else #1744
        [ 1728] store the literal value 5709 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1731] do nothing
        [ 1732] store the literal value 5744 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1735] do nothing
        [ 1736] store the literal value 5771 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1739] do nothing
        [ 1740] store the literal value 5810 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1743] do nothing
        [ 1744] store the literal value 5838 into phase table slot #13 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1747] do nothing
        [ 1748] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 1758] store the literal value 5891 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1761] set script variable #48 = random_below(4)
        [ 1764] IF NOT(((random_below(4) != 7) && (var(48) >= 3))): GOTO #1771  (else falls through, rejoins #1771)
        [ 1768] set script variable #48 = random_below(3)
        [ 1771] SWITCH var(48): {0->#1774, 1->#1778, 3->#1782, 4->#1786, 5->#1790, 6->#1794, 7->#1798} else #1802
        [ 1774] store the literal value 5892 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1777] do nothing
        [ 1778] store the literal value 5896 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1781] do nothing
        [ 1782] store the literal value 5907 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1785] do nothing
        [ 1786] store the literal value 5928 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1789] do nothing
        [ 1790] store the literal value 5955 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1793] do nothing
        [ 1794] store the literal value 5986 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1797] do nothing
        [ 1798] store the literal value 6015 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1801] do nothing
        [ 1802] store the literal value 6045 into phase table slot #14 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1805] do nothing
        [ 1806] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 1822] store the literal value 6060 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1825] SWITCH 2048: {1->#1828, 2->#1834, 3->#1840, 4->#1846, 5->#1852, 6->#1858, 7->#1864, 8->#1870, 9->#1876, 10->#1882, 11->#1888, 12->#1894, 13->#1898, 14->#1902, 512->#1906, 32->#1912, 64->#1918, 128->#1924, 256->#1930} else #1936
        [ 1828] store the literal value 6061 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1831] play sound effect 257
        [ 1833] do nothing
        [ 1834] store the literal value 6088 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1837] play sound effect 257
        [ 1839] do nothing
        [ 1840] store the literal value 6114 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1843] play sound effect 260
        [ 1845] do nothing
        [ 1846] store the literal value 6144 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1849] play sound effect 260
        [ 1851] do nothing
        [ 1852] store the literal value 6168 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1855] play sound effect 260
        [ 1857] do nothing
        [ 1858] store the literal value 6193 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1861] play sound effect 261
        [ 1863] do nothing
        [ 1864] store the literal value 6247 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1867] play sound effect 257
        [ 1869] do nothing
        [ 1870] store the literal value 6271 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1873] play sound effect 261
        [ 1875] do nothing
        [ 1876] store the literal value 6326 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1879] play sound effect 262
        [ 1881] do nothing
        [ 1882] store the literal value 6371 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1885] play sound effect 262
        [ 1887] do nothing
        [ 1888] store the literal value 6422 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1891] play sound effect 259
        [ 1893] do nothing
        [ 1894] store the literal value 6505 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1897] do nothing
        [ 1898] store the literal value 6569 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1901] do nothing
        [ 1902] store the literal value 6623 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1905] do nothing
        [ 1906] store the literal value 6695 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1909] play sound effect 258
        [ 1911] do nothing
        [ 1912] store the literal value 6729 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1915] play sound effect 258
        [ 1917] do nothing
        [ 1918] store the literal value 6768 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1921] play sound effect 258
        [ 1923] do nothing
        [ 1924] store the literal value 6807 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1927] play sound effect 258
        [ 1929] do nothing
        [ 1930] store the literal value 6848 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1933] play sound effect 258
        [ 1935] do nothing
        [ 1936] store the literal value 6888 into phase table slot #15 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 1939] do nothing
        [ 1940] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 1980] display system/chat message #6927: " þ"
        [ 1982] IF NOT(((var(34) & 2048) == 0)): GOTO #1989  (else falls through, rejoins #1989)
        [ 1986] set script variable #34 = (var(34) + 2048)
        [ 1989] IF NOT(((var(34) & 2048) > 0)): GOTO #1996  (else falls through, rejoins #1996)
        [ 1993] set script variable #34 = (var(34) - 2048)
        [ 1996] IF NOT((group_condition_ref_2(7, 1) && group_condition_ref_2(7, 2))): GOTO #2280  (else falls through, rejoins #2287)
        [ 2000] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #11
        [ 2003] set script variable #50 = random_below(100)
        [ 2006] IF NOT(((var(3) == 0) && (var(50) < 2))): GOTO #2273  (else falls through, rejoins #2273)
        [ 2010] set script variable #3 = (var(3) + 1)
        [ 2013] store the literal value 6945 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2016] SWITCH random_below(4): {0->#2019, 1->#2023, 2->#2027, 7->#2031} else #2035
        [ 2019] store the literal value 6946 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2022] do nothing
        [ 2023] store the literal value 6981 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2026] do nothing
        [ 2027] store the literal value 7008 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2030] do nothing
        [ 2031] store the literal value 7047 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2034] do nothing
        [ 2035] store the literal value 7075 into phase table slot #16 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2038] do nothing
        [ 2039] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2049] store the literal value 7128 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2052] set script variable #51 = random_below(4)
        [ 2055] IF NOT(((random_below(4) != 7) && (var(51) >= 3))): GOTO #2062  (else falls through, rejoins #2062)
        [ 2059] set script variable #51 = random_below(3)
        [ 2062] SWITCH var(51): {0->#2065, 1->#2069, 3->#2073, 4->#2077, 5->#2081, 6->#2085, 7->#2089} else #2093
        [ 2065] store the literal value 7129 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2068] do nothing
        [ 2069] store the literal value 7133 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2072] do nothing
        [ 2073] store the literal value 7144 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2076] do nothing
        [ 2077] store the literal value 7165 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2080] do nothing
        [ 2081] store the literal value 7192 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2084] do nothing
        [ 2085] store the literal value 7223 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2088] do nothing
        [ 2089] store the literal value 7252 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2092] do nothing
        [ 2093] store the literal value 7282 into phase table slot #17 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2096] do nothing
        [ 2097] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2113] store the literal value 7297 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2116] SWITCH 4096: {1->#2119, 2->#2125, 3->#2131, 4->#2137, 5->#2143, 6->#2149, 7->#2155, 8->#2161, 9->#2167, 10->#2173, 11->#2179, 12->#2185, 13->#2189, 14->#2193, 512->#2197, 32->#2203, 64->#2209, 128->#2215, 256->#2221} else #2227
        [ 2119] store the literal value 7298 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2122] play sound effect 257
        [ 2124] do nothing
        [ 2125] store the literal value 7325 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2128] play sound effect 257
        [ 2130] do nothing
        [ 2131] store the literal value 7351 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2134] play sound effect 260
        [ 2136] do nothing
        [ 2137] store the literal value 7381 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2140] play sound effect 260
        [ 2142] do nothing
        [ 2143] store the literal value 7405 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2146] play sound effect 260
        [ 2148] do nothing
        [ 2149] store the literal value 7430 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2152] play sound effect 261
        [ 2154] do nothing
        [ 2155] store the literal value 7484 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2158] play sound effect 257
        [ 2160] do nothing
        [ 2161] store the literal value 7508 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2164] play sound effect 261
        [ 2166] do nothing
        [ 2167] store the literal value 7563 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2170] play sound effect 262
        [ 2172] do nothing
        [ 2173] store the literal value 7608 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2176] play sound effect 262
        [ 2178] do nothing
        [ 2179] store the literal value 7659 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2182] play sound effect 259
        [ 2184] do nothing
        [ 2185] store the literal value 7742 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2188] do nothing
        [ 2189] store the literal value 7806 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2192] do nothing
        [ 2193] store the literal value 7860 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2196] do nothing
        [ 2197] store the literal value 7932 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2200] play sound effect 258
        [ 2202] do nothing
        [ 2203] store the literal value 7966 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2206] play sound effect 258
        [ 2208] do nothing
        [ 2209] store the literal value 8005 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2212] play sound effect 258
        [ 2214] do nothing
        [ 2215] store the literal value 8044 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2218] play sound effect 258
        [ 2220] do nothing
        [ 2221] store the literal value 8085 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2224] play sound effect 258
        [ 2226] do nothing
        [ 2227] store the literal value 8125 into phase table slot #18 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2230] do nothing
        [ 2231] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2271] display system/chat message #8164: " þ"
        [ 2273] IF NOT(((var(34) & 4096) == 0)): GOTO #2280  (else falls through, rejoins #2280)
        [ 2277] set script variable #34 = (var(34) + 4096)
        [ 2280] IF NOT(((var(34) & 4096) > 0)): GOTO #2287  (else falls through, rejoins #2287)
        [ 2284] set script variable #34 = (var(34) - 4096)
        [ 2287] set script variable #53 = 0
        [ 2290] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 2293] WHILE set_unit_behavior(0, 12): loop below; exit -> #2584 (500-iteration guard)
        [ 2296] IF NOT((set_unit_behavior(9, 12) > 0)): GOTO #2579  (else falls through, rejoins #2579)
        [ 2300] set script variable #54 = random_below(100)
        [ 2303] IF NOT(((var(3) == 0) && (var(54) < 4))): GOTO #2570  (else falls through, rejoins #2570)
        [ 2307] set script variable #3 = (var(3) + 1)
        [ 2310] store the literal value 8182 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2313] SWITCH random_below(4): {0->#2316, 1->#2320, 2->#2324, 7->#2328} else #2332
        [ 2316] store the literal value 8183 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2319] do nothing
        [ 2320] store the literal value 8218 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2323] do nothing
        [ 2324] store the literal value 8245 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2327] do nothing
        [ 2328] store the literal value 8284 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2331] do nothing
        [ 2332] store the literal value 8312 into phase table slot #19 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2335] do nothing
        [ 2336] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2346] store the literal value 8365 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2349] set script variable #55 = random_below(2)
        [ 2352] IF NOT(((random_below(4) != 7) && (var(55) >= 3))): GOTO #2359  (else falls through, rejoins #2359)
        [ 2356] set script variable #55 = random_below(3)
        [ 2359] SWITCH var(55): {0->#2362, 1->#2366, 3->#2370, 4->#2374, 5->#2378, 6->#2382, 7->#2386} else #2390
        [ 2362] store the literal value 8366 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2365] do nothing
        [ 2366] store the literal value 8370 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2369] do nothing
        [ 2370] store the literal value 8381 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2373] do nothing
        [ 2374] store the literal value 8402 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2377] do nothing
        [ 2378] store the literal value 8429 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2381] do nothing
        [ 2382] store the literal value 8460 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2385] do nothing
        [ 2386] store the literal value 8489 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2389] do nothing
        [ 2390] store the literal value 8519 into phase table slot #20 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2393] do nothing
        [ 2394] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2410] store the literal value 8534 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2413] SWITCH 10: {1->#2416, 2->#2422, 3->#2428, 4->#2434, 5->#2440, 6->#2446, 7->#2452, 8->#2458, 9->#2464, 10->#2470, 11->#2476, 12->#2482, 13->#2486, 14->#2490, 512->#2494, 32->#2500, 64->#2506, 128->#2512, 256->#2518} else #2524
        [ 2416] store the literal value 8535 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2419] play sound effect 257
        [ 2421] do nothing
        [ 2422] store the literal value 8562 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2425] play sound effect 257
        [ 2427] do nothing
        [ 2428] store the literal value 8588 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2431] play sound effect 260
        [ 2433] do nothing
        [ 2434] store the literal value 8618 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2437] play sound effect 260
        [ 2439] do nothing
        [ 2440] store the literal value 8642 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2443] play sound effect 260
        [ 2445] do nothing
        [ 2446] store the literal value 8667 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2449] play sound effect 261
        [ 2451] do nothing
        [ 2452] store the literal value 8721 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2455] play sound effect 257
        [ 2457] do nothing
        [ 2458] store the literal value 8745 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2461] play sound effect 261
        [ 2463] do nothing
        [ 2464] store the literal value 8800 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2467] play sound effect 262
        [ 2469] do nothing
        [ 2470] store the literal value 8845 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2473] play sound effect 262
        [ 2475] do nothing
        [ 2476] store the literal value 8896 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2479] play sound effect 259
        [ 2481] do nothing
        [ 2482] store the literal value 8979 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2485] do nothing
        [ 2486] store the literal value 9043 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2489] do nothing
        [ 2490] store the literal value 9097 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2493] do nothing
        [ 2494] store the literal value 9169 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2497] play sound effect 258
        [ 2499] do nothing
        [ 2500] store the literal value 9203 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2503] play sound effect 258
        [ 2505] do nothing
        [ 2506] store the literal value 9242 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2509] play sound effect 258
        [ 2511] do nothing
        [ 2512] store the literal value 9281 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2515] play sound effect 258
        [ 2517] do nothing
        [ 2518] store the literal value 9322 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2521] play sound effect 258
        [ 2523] do nothing
        [ 2524] store the literal value 9362 into phase table slot #21 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2527] do nothing
        [ 2528] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2568] display system/chat message #9401: " þ"
        [ 2570] IF NOT(((set_unit_behavior(8, 12) & var(34)) == 0)): GOTO #2579  (else falls through, rejoins #2579)
        [ 2574] do nothing (message no-op)
        [ 2575] (UNKNOWN OPCODE 0x24cb) - dead end, not decoded further (other branches continue independently)
        [ 2579] advance unit-slot #12 to the next unit in group #2 after the current one
        [ 2582] GOTO #2296
        [ 2584] remember the first living unit of group #1 (1=ally, 2=enemy, else a named group) as unit-slot #13
        [ 2587] WHILE set_unit_behavior(0, 13): loop below; exit -> #2618 (500-iteration guard)
        [ 2590] IF NOT(group_condition_ref_2(8, 2)): GOTO #2597  (else falls through, rejoins #2604)
        [ 2594] set attribute #8 of unit-slot #13 to 2
        [ 2597] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2604  (else falls through, rejoins #2604)
        [ 2601] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 2604] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2613  (else falls through, rejoins #2613)
        [ 2608] set script variable #53 = (var(53) + 1)
        [ 2611] do nothing (message no-op)
        [ 2612] (UNKNOWN OPCODE 0x24ec) - dead end, not decoded further (other branches continue independently)
        [ 2613] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 2616] GOTO #2590
        [ 2618] IF NOT(group_condition_ref_2(9, 2)): GOTO #2625  (else falls through, rejoins #2632)
        [ 2622] set attribute #8 of unit-slot #13 to 2
        [ 2625] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2632  (else falls through, rejoins #2632)
        [ 2629] set attribute #8 of unit-slot #13 to (set_unit_behavior(8, 13) - 1)
        [ 2632] IF NOT((set_unit_behavior(8, 13) > 0)): GOTO #2641  (else falls through, rejoins #2641)
        [ 2636] set script variable #53 = (var(53) + 1)
        [ 2639] do nothing (message no-op)
        [ 2640] (UNKNOWN OPCODE 0x24ff) - dead end, not decoded further (other branches continue independently)
        [ 2641] advance unit-slot #13 to the next unit in group #1 after the current one
        [ 2644] set script variable #57 = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        [ 2647] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #12
        [ 2650] WHILE set_unit_behavior(0, 12): loop below; exit -> #5806 (500-iteration guard)
        [ 2653] IF NOT((set_unit_behavior(5, 12) < 60)): GOTO #2662  (else falls through, rejoins #5799)
        [ 2657] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 2662] SWITCH (set_unit_behavior(8, 12) & 15): {0->#2665, 1->#2948, 2->#3781, 3->#4340, 4->#4350, 5->#4395, 10->#4680, 11->#4690, 12->#5088, 13->#5089, 14->#5384, 15->#5385} else #5771
        [ 2665] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #2947  (else falls through, rejoins #2947)
        [ 2669] set script variable #58 = random_below(100)
        [ 2672] IF NOT(((var(3) == 0) && (var(58) < 40))): GOTO #2939  (else falls through, rejoins #2939)
        [ 2676] set script variable #3 = (var(3) + 1)
        [ 2679] store the literal value 9490 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2682] SWITCH random_below(1): {0->#2685, 1->#2689, 2->#2693, 7->#2697} else #2701
        [ 2685] store the literal value 9491 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2688] do nothing
        [ 2689] store the literal value 9526 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2692] do nothing
        [ 2693] store the literal value 9553 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2696] do nothing
        [ 2697] store the literal value 9592 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2700] do nothing
        [ 2701] store the literal value 9620 into phase table slot #22 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2704] do nothing
        [ 2705] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 2715] store the literal value 9673 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2718] set script variable #59 = random_below(4)
        [ 2721] IF NOT(((random_below(1) != 7) && (var(59) >= 3))): GOTO #2728  (else falls through, rejoins #2728)
        [ 2725] set script variable #59 = random_below(3)
        [ 2728] SWITCH var(59): {0->#2731, 1->#2735, 3->#2739, 4->#2743, 5->#2747, 6->#2751, 7->#2755} else #2759
        [ 2731] store the literal value 9674 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2734] do nothing
        [ 2735] store the literal value 9678 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2738] do nothing
        [ 2739] store the literal value 9689 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2742] do nothing
        [ 2743] store the literal value 9710 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2746] do nothing
        [ 2747] store the literal value 9737 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2750] do nothing
        [ 2751] store the literal value 9768 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2754] do nothing
        [ 2755] store the literal value 9797 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2758] do nothing
        [ 2759] store the literal value 9827 into phase table slot #23 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2762] do nothing
        [ 2763] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 2779] store the literal value 9842 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2782] SWITCH 8: {1->#2785, 2->#2791, 3->#2797, 4->#2803, 5->#2809, 6->#2815, 7->#2821, 8->#2827, 9->#2833, 10->#2839, 11->#2845, 12->#2851, 13->#2855, 14->#2859, 512->#2863, 32->#2869, 64->#2875, 128->#2881, 256->#2887} else #2893
        [ 2785] store the literal value 9843 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2788] play sound effect 257
        [ 2790] do nothing
        [ 2791] store the literal value 9870 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2794] play sound effect 257
        [ 2796] do nothing
        [ 2797] store the literal value 9896 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2800] play sound effect 260
        [ 2802] do nothing
        [ 2803] store the literal value 9926 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2806] play sound effect 260
        [ 2808] do nothing
        [ 2809] store the literal value 9950 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2812] play sound effect 260
        [ 2814] do nothing
        [ 2815] store the literal value 9975 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2818] play sound effect 261
        [ 2820] do nothing
        [ 2821] store the literal value 10029 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2824] play sound effect 257
        [ 2826] do nothing
        [ 2827] store the literal value 10053 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2830] play sound effect 261
        [ 2832] do nothing
        [ 2833] store the literal value 10108 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2836] play sound effect 262
        [ 2838] do nothing
        [ 2839] store the literal value 10153 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2842] play sound effect 262
        [ 2844] do nothing
        [ 2845] store the literal value 10204 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2848] play sound effect 259
        [ 2850] do nothing
        [ 2851] store the literal value 10287 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2854] do nothing
        [ 2855] store the literal value 10351 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2858] do nothing
        [ 2859] store the literal value 10405 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2862] do nothing
        [ 2863] store the literal value 10477 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2866] play sound effect 258
        [ 2868] do nothing
        [ 2869] store the literal value 10511 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2872] play sound effect 258
        [ 2874] do nothing
        [ 2875] store the literal value 10550 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2878] play sound effect 258
        [ 2880] do nothing
        [ 2881] store the literal value 10589 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2884] play sound effect 258
        [ 2886] do nothing
        [ 2887] store the literal value 10630 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2890] play sound effect 258
        [ 2892] do nothing
        [ 2893] store the literal value 10670 into phase table slot #24 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2896] do nothing
        [ 2897] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 2937] display system/chat message #10709: " þ"
        [ 2939] order unit-slot #12 to move, speed/priority var(57), destination-type tag 0, destination arg 0
        [ 2944] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 2947] do nothing
        [ 2948] IF NOT((group_condition_ref_2(10, 1) || (set_unit_behavior(9, 12) != 0))): GOTO #3231  (else falls through, rejoins #3780)
        [ 2952] IF NOT((set_unit_behavior(7, 12) != 6)): GOTO #3231  (else falls through, rejoins #3231)
        [ 2956] set script variable #61 = random_below(100)
        [ 2959] IF NOT(((var(3) == 0) && (var(61) < 40))): GOTO #3226  (else falls through, rejoins #3226)
        [ 2963] set script variable #3 = (var(3) + 1)
        [ 2966] store the literal value 10727 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2969] SWITCH random_below(1): {0->#2972, 1->#2976, 2->#2980, 7->#2984} else #2988
        [ 2972] store the literal value 10728 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2975] do nothing
        [ 2976] store the literal value 10763 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2979] do nothing
        [ 2980] store the literal value 10790 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2983] do nothing
        [ 2984] store the literal value 10829 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2987] do nothing
        [ 2988] store the literal value 10857 into phase table slot #25 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 2991] do nothing
        [ 2992] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3002] store the literal value 10910 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3005] set script variable #62 = random_below(4)
        [ 3008] IF NOT(((random_below(1) != 7) && (var(62) >= 3))): GOTO #3015  (else falls through, rejoins #3015)
        [ 3012] set script variable #62 = random_below(3)
        [ 3015] SWITCH var(62): {0->#3018, 1->#3022, 3->#3026, 4->#3030, 5->#3034, 6->#3038, 7->#3042} else #3046
        [ 3018] store the literal value 10911 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3021] do nothing
        [ 3022] store the literal value 10915 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3025] do nothing
        [ 3026] store the literal value 10926 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3029] do nothing
        [ 3030] store the literal value 10947 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3033] do nothing
        [ 3034] store the literal value 10974 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3037] do nothing
        [ 3038] store the literal value 11005 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3041] do nothing
        [ 3042] store the literal value 11034 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3045] do nothing
        [ 3046] store the literal value 11064 into phase table slot #26 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3049] do nothing
        [ 3050] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3066] store the literal value 11079 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3069] SWITCH 3: {1->#3072, 2->#3078, 3->#3084, 4->#3090, 5->#3096, 6->#3102, 7->#3108, 8->#3114, 9->#3120, 10->#3126, 11->#3132, 12->#3138, 13->#3142, 14->#3146, 512->#3150, 32->#3156, 64->#3162, 128->#3168, 256->#3174} else #3180
        [ 3072] store the literal value 11080 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3075] play sound effect 257
        [ 3077] do nothing
        [ 3078] store the literal value 11107 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3081] play sound effect 257
        [ 3083] do nothing
        [ 3084] store the literal value 11133 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3087] play sound effect 260
        [ 3089] do nothing
        [ 3090] store the literal value 11163 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3093] play sound effect 260
        [ 3095] do nothing
        [ 3096] store the literal value 11187 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3099] play sound effect 260
        [ 3101] do nothing
        [ 3102] store the literal value 11212 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3105] play sound effect 261
        [ 3107] do nothing
        [ 3108] store the literal value 11266 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3111] play sound effect 257
        [ 3113] do nothing
        [ 3114] store the literal value 11290 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3117] play sound effect 261
        [ 3119] do nothing
        [ 3120] store the literal value 11345 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3123] play sound effect 262
        [ 3125] do nothing
        [ 3126] store the literal value 11390 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3129] play sound effect 262
        [ 3131] do nothing
        [ 3132] store the literal value 11441 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3135] play sound effect 259
        [ 3137] do nothing
        [ 3138] store the literal value 11524 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3141] do nothing
        [ 3142] store the literal value 11588 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3145] do nothing
        [ 3146] store the literal value 11642 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3149] do nothing
        [ 3150] store the literal value 11714 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3153] play sound effect 258
        [ 3155] do nothing
        [ 3156] store the literal value 11748 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3159] play sound effect 258
        [ 3161] do nothing
        [ 3162] store the literal value 11787 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3165] play sound effect 258
        [ 3167] do nothing
        [ 3168] store the literal value 11826 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3171] play sound effect 258
        [ 3173] do nothing
        [ 3174] store the literal value 11867 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3177] play sound effect 258
        [ 3179] do nothing
        [ 3180] store the literal value 11907 into phase table slot #27 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3183] do nothing
        [ 3184] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3224] display system/chat message #11946: " þ"
        [ 3226] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 3231] IF NOT((set_unit_behavior(7, 12) != 2)): GOTO #3510  (else falls through, rejoins #3780)
        [ 3235] order unit-slot #12 to move, speed/priority 2, destination-type tag 0, destination arg 0
        [ 3240] set script variable #64 = random_below(100)
        [ 3243] IF NOT(((var(3) == 0) && (var(64) < 4))): GOTO #3510  (else falls through, rejoins #3510)
        [ 3247] set script variable #3 = (var(3) + 1)
        [ 3250] store the literal value 11964 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3253] SWITCH random_below(1): {0->#3256, 1->#3260, 2->#3264, 7->#3268} else #3272
        [ 3256] store the literal value 11965 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3259] do nothing
        [ 3260] store the literal value 12000 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3263] do nothing
        [ 3264] store the literal value 12027 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3267] do nothing
        [ 3268] store the literal value 12066 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3271] do nothing
        [ 3272] store the literal value 12094 into phase table slot #28 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3275] do nothing
        [ 3276] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3286] store the literal value 12147 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3289] set script variable #65 = random_below(4)
        [ 3292] IF NOT(((random_below(1) != 7) && (var(65) >= 3))): GOTO #3299  (else falls through, rejoins #3299)
        [ 3296] set script variable #65 = random_below(3)
        [ 3299] SWITCH var(65): {0->#3302, 1->#3306, 3->#3310, 4->#3314, 5->#3318, 6->#3322, 7->#3326} else #3330
        [ 3302] store the literal value 12148 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3305] do nothing
        [ 3306] store the literal value 12152 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3309] do nothing
        [ 3310] store the literal value 12163 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3313] do nothing
        [ 3314] store the literal value 12184 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3317] do nothing
        [ 3318] store the literal value 12211 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3321] do nothing
        [ 3322] store the literal value 12242 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3325] do nothing
        [ 3326] store the literal value 12271 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3329] do nothing
        [ 3330] store the literal value 12301 into phase table slot #29 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3333] do nothing
        [ 3334] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3350] store the literal value 12316 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3353] SWITCH 2: {1->#3356, 2->#3362, 3->#3368, 4->#3374, 5->#3380, 6->#3386, 7->#3392, 8->#3398, 9->#3404, 10->#3410, 11->#3416, 12->#3422, 13->#3426, 14->#3430, 512->#3434, 32->#3440, 64->#3446, 128->#3452, 256->#3458} else #3464
        [ 3356] store the literal value 12317 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3359] play sound effect 257
        [ 3361] do nothing
        [ 3362] store the literal value 12344 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3365] play sound effect 257
        [ 3367] do nothing
        [ 3368] store the literal value 12370 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3371] play sound effect 260
        [ 3373] do nothing
        [ 3374] store the literal value 12400 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3377] play sound effect 260
        [ 3379] do nothing
        [ 3380] store the literal value 12424 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3383] play sound effect 260
        [ 3385] do nothing
        [ 3386] store the literal value 12449 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3389] play sound effect 261
        [ 3391] do nothing
        [ 3392] store the literal value 12503 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3395] play sound effect 257
        [ 3397] do nothing
        [ 3398] store the literal value 12527 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3401] play sound effect 261
        [ 3403] do nothing
        [ 3404] store the literal value 12582 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3407] play sound effect 262
        [ 3409] do nothing
        [ 3410] store the literal value 12627 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3413] play sound effect 262
        [ 3415] do nothing
        [ 3416] store the literal value 12678 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3419] play sound effect 259
        [ 3421] do nothing
        [ 3422] store the literal value 12761 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3425] do nothing
        [ 3426] store the literal value 12825 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3429] do nothing
        [ 3430] store the literal value 12879 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3433] do nothing
        [ 3434] store the literal value 12951 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3437] play sound effect 258
        [ 3439] do nothing
        [ 3440] store the literal value 12985 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3443] play sound effect 258
        [ 3445] do nothing
        [ 3446] store the literal value 13024 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3449] play sound effect 258
        [ 3451] do nothing
        [ 3452] store the literal value 13063 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3455] play sound effect 258
        [ 3457] do nothing
        [ 3458] store the literal value 13104 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3461] play sound effect 258
        [ 3463] do nothing
        [ 3464] store the literal value 13144 into phase table slot #30 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3467] do nothing
        [ 3468] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3508] display system/chat message #13183: " þ"
        [ 3510] set script variable #67 = random_below(100)
        [ 3513] IF NOT(((var(3) == 0) && (var(67) < 4))): GOTO #3780  (else falls through, rejoins #3780)
        [ 3517] set script variable #3 = (var(3) + 1)
        [ 3520] store the literal value 13201 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3523] SWITCH random_below(1): {0->#3526, 1->#3530, 2->#3534, 7->#3538} else #3542
        [ 3526] store the literal value 13202 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3529] do nothing
        [ 3530] store the literal value 13237 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3533] do nothing
        [ 3534] store the literal value 13264 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3537] do nothing
        [ 3538] store the literal value 13303 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3541] do nothing
        [ 3542] store the literal value 13331 into phase table slot #31 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3545] do nothing
        [ 3546] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3556] store the literal value 13384 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3559] set script variable #68 = random_below(4)
        [ 3562] IF NOT(((random_below(1) != 7) && (var(68) >= 3))): GOTO #3569  (else falls through, rejoins #3569)
        [ 3566] set script variable #68 = random_below(3)
        [ 3569] SWITCH var(68): {0->#3572, 1->#3576, 3->#3580, 4->#3584, 5->#3588, 6->#3592, 7->#3596} else #3600
        [ 3572] store the literal value 13385 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3575] do nothing
        [ 3576] store the literal value 13389 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3579] do nothing
        [ 3580] store the literal value 13400 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3583] do nothing
        [ 3584] store the literal value 13421 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3587] do nothing
        [ 3588] store the literal value 13448 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3591] do nothing
        [ 3592] store the literal value 13479 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3595] do nothing
        [ 3596] store the literal value 13508 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3599] do nothing
        [ 3600] store the literal value 13538 into phase table slot #32 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3603] do nothing
        [ 3604] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3620] store the literal value 13553 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3623] SWITCH 1: {1->#3626, 2->#3632, 3->#3638, 4->#3644, 5->#3650, 6->#3656, 7->#3662, 8->#3668, 9->#3674, 10->#3680, 11->#3686, 12->#3692, 13->#3696, 14->#3700, 512->#3704, 32->#3710, 64->#3716, 128->#3722, 256->#3728} else #3734
        [ 3626] store the literal value 13554 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3629] play sound effect 257
        [ 3631] do nothing
        [ 3632] store the literal value 13581 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3635] play sound effect 257
        [ 3637] do nothing
        [ 3638] store the literal value 13607 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3641] play sound effect 260
        [ 3643] do nothing
        [ 3644] store the literal value 13637 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3647] play sound effect 260
        [ 3649] do nothing
        [ 3650] store the literal value 13661 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3653] play sound effect 260
        [ 3655] do nothing
        [ 3656] store the literal value 13686 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3659] play sound effect 261
        [ 3661] do nothing
        [ 3662] store the literal value 13740 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3665] play sound effect 257
        [ 3667] do nothing
        [ 3668] store the literal value 13764 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3671] play sound effect 261
        [ 3673] do nothing
        [ 3674] store the literal value 13819 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3677] play sound effect 262
        [ 3679] do nothing
        [ 3680] store the literal value 13864 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3683] play sound effect 262
        [ 3685] do nothing
        [ 3686] store the literal value 13915 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3689] play sound effect 259
        [ 3691] do nothing
        [ 3692] store the literal value 13998 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3695] do nothing
        [ 3696] store the literal value 14062 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3699] do nothing
        [ 3700] store the literal value 14116 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3703] do nothing
        [ 3704] store the literal value 14188 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3707] play sound effect 258
        [ 3709] do nothing
        [ 3710] store the literal value 14222 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3713] play sound effect 258
        [ 3715] do nothing
        [ 3716] store the literal value 14261 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3719] play sound effect 258
        [ 3721] do nothing
        [ 3722] store the literal value 14300 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3725] play sound effect 258
        [ 3727] do nothing
        [ 3728] store the literal value 14341 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3731] play sound effect 258
        [ 3733] do nothing
        [ 3734] store the literal value 14381 into phase table slot #33 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3737] do nothing
        [ 3738] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 3778] display system/chat message #14420: " þ"
        [ 3780] do nothing
        [ 3781] IF NOT(((var(34) & 512) > 0)): GOTO #4060  (else falls through, rejoins #4339)
        [ 3785] set script variable #70 = random_below(100)
        [ 3788] IF NOT(((var(3) == 0) && (var(70) < 4))): GOTO #4055  (else falls through, rejoins #4055)
        [ 3792] set script variable #3 = (var(3) + 1)
        [ 3795] store the literal value 14438 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3798] SWITCH random_below(1): {0->#3801, 1->#3805, 2->#3809, 7->#3813} else #3817
        [ 3801] store the literal value 14439 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3804] do nothing
        [ 3805] store the literal value 14474 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3808] do nothing
        [ 3809] store the literal value 14501 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3812] do nothing
        [ 3813] store the literal value 14540 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3816] do nothing
        [ 3817] store the literal value 14568 into phase table slot #34 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3820] do nothing
        [ 3821] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 3831] store the literal value 14621 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3834] set script variable #71 = random_below(4)
        [ 3837] IF NOT(((random_below(1) != 7) && (var(71) >= 3))): GOTO #3844  (else falls through, rejoins #3844)
        [ 3841] set script variable #71 = random_below(3)
        [ 3844] SWITCH var(71): {0->#3847, 1->#3851, 3->#3855, 4->#3859, 5->#3863, 6->#3867, 7->#3871} else #3875
        [ 3847] store the literal value 14622 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3850] do nothing
        [ 3851] store the literal value 14626 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3854] do nothing
        [ 3855] store the literal value 14637 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3858] do nothing
        [ 3859] store the literal value 14658 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3862] do nothing
        [ 3863] store the literal value 14685 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3866] do nothing
        [ 3867] store the literal value 14716 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3870] do nothing
        [ 3871] store the literal value 14745 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3874] do nothing
        [ 3875] store the literal value 14775 into phase table slot #35 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3878] do nothing
        [ 3879] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 3895] store the literal value 14790 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3898] SWITCH 4: {1->#3901, 2->#3907, 3->#3913, 4->#3919, 5->#3925, 6->#3931, 7->#3937, 8->#3943, 9->#3949, 10->#3955, 11->#3961, 12->#3967, 13->#3971, 14->#3975, 512->#3979, 32->#3985, 64->#3991, 128->#3997, 256->#4003} else #4009
        [ 3901] store the literal value 14791 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3904] play sound effect 257
        [ 3906] do nothing
        [ 3907] store the literal value 14818 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3910] play sound effect 257
        [ 3912] do nothing
        [ 3913] store the literal value 14844 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3916] play sound effect 260
        [ 3918] do nothing
        [ 3919] store the literal value 14874 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3922] play sound effect 260
        [ 3924] do nothing
        [ 3925] store the literal value 14898 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3928] play sound effect 260
        [ 3930] do nothing
        [ 3931] store the literal value 14923 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3934] play sound effect 261
        [ 3936] do nothing
        [ 3937] store the literal value 14977 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3940] play sound effect 257
        [ 3942] do nothing
        [ 3943] store the literal value 15001 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3946] play sound effect 261
        [ 3948] do nothing
        [ 3949] store the literal value 15056 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3952] play sound effect 262
        [ 3954] do nothing
        [ 3955] store the literal value 15101 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3958] play sound effect 262
        [ 3960] do nothing
        [ 3961] store the literal value 15152 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3964] play sound effect 259
        [ 3966] do nothing
        [ 3967] store the literal value 15235 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3970] do nothing
        [ 3971] store the literal value 15299 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3974] do nothing
        [ 3975] store the literal value 15353 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3978] do nothing
        [ 3979] store the literal value 15425 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3982] play sound effect 258
        [ 3984] do nothing
        [ 3985] store the literal value 15459 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3988] play sound effect 258
        [ 3990] do nothing
        [ 3991] store the literal value 15498 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 3994] play sound effect 258
        [ 3996] do nothing
        [ 3997] store the literal value 15537 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4000] play sound effect 258
        [ 4002] do nothing
        [ 4003] store the literal value 15578 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4006] play sound effect 258
        [ 4008] do nothing
        [ 4009] store the literal value 15618 into phase table slot #36 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4012] do nothing
        [ 4013] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4053] display system/chat message #15657: " þ""
        [ 4055] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4060] IF NOT(((var(34) & 128) > 0)): GOTO #4339  (else falls through, rejoins #4339)
        [ 4064] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4069] set script variable #73 = random_below(100)
        [ 4072] IF NOT(((var(3) == 0) && (var(73) < 4))): GOTO #4339  (else falls through, rejoins #4339)
        [ 4076] set script variable #3 = (var(3) + 1)
        [ 4079] store the literal value 15675 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4082] SWITCH random_below(1): {0->#4085, 1->#4089, 2->#4093, 7->#4097} else #4101
        [ 4085] store the literal value 15676 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4088] do nothing
        [ 4089] store the literal value 15711 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4092] do nothing
        [ 4093] store the literal value 15738 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4096] do nothing
        [ 4097] store the literal value 15777 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4100] do nothing
        [ 4101] store the literal value 15805 into phase table slot #37 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4104] do nothing
        [ 4105] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4115] store the literal value 15858 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4118] set script variable #74 = random_below(4)
        [ 4121] IF NOT(((random_below(1) != 7) && (var(74) >= 3))): GOTO #4128  (else falls through, rejoins #4128)
        [ 4125] set script variable #74 = random_below(3)
        [ 4128] SWITCH var(74): {0->#4131, 1->#4135, 3->#4139, 4->#4143, 5->#4147, 6->#4151, 7->#4155} else #4159
        [ 4131] store the literal value 15859 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4134] do nothing
        [ 4135] store the literal value 15863 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4138] do nothing
        [ 4139] store the literal value 15874 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4142] do nothing
        [ 4143] store the literal value 15895 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4146] do nothing
        [ 4147] store the literal value 15922 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4150] do nothing
        [ 4151] store the literal value 15953 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4154] do nothing
        [ 4155] store the literal value 15982 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4158] do nothing
        [ 4159] store the literal value 16012 into phase table slot #38 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4162] do nothing
        [ 4163] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4179] store the literal value 16027 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4182] SWITCH 5: {1->#4185, 2->#4191, 3->#4197, 4->#4203, 5->#4209, 6->#4215, 7->#4221, 8->#4227, 9->#4233, 10->#4239, 11->#4245, 12->#4251, 13->#4255, 14->#4259, 512->#4263, 32->#4269, 64->#4275, 128->#4281, 256->#4287} else #4293
        [ 4185] store the literal value 16028 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4188] play sound effect 257
        [ 4190] do nothing
        [ 4191] store the literal value 16055 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4194] play sound effect 257
        [ 4196] do nothing
        [ 4197] store the literal value 16081 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4200] play sound effect 260
        [ 4202] do nothing
        [ 4203] store the literal value 16111 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4206] play sound effect 260
        [ 4208] do nothing
        [ 4209] store the literal value 16135 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4212] play sound effect 260
        [ 4214] do nothing
        [ 4215] store the literal value 16160 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4218] play sound effect 261
        [ 4220] do nothing
        [ 4221] store the literal value 16214 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4224] play sound effect 257
        [ 4226] do nothing
        [ 4227] store the literal value 16238 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4230] play sound effect 261
        [ 4232] do nothing
        [ 4233] store the literal value 16293 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4236] play sound effect 262
        [ 4238] do nothing
        [ 4239] store the literal value 16338 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4242] play sound effect 262
        [ 4244] do nothing
        [ 4245] store the literal value 16389 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4248] play sound effect 259
        [ 4250] do nothing
        [ 4251] store the literal value 16472 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4254] do nothing
        [ 4255] store the literal value 16536 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4258] do nothing
        [ 4259] store the literal value 16590 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4262] do nothing
        [ 4263] store the literal value 16662 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4266] play sound effect 258
        [ 4268] do nothing
        [ 4269] store the literal value 16696 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4272] play sound effect 258
        [ 4274] do nothing
        [ 4275] store the literal value 16735 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4278] play sound effect 258
        [ 4280] do nothing
        [ 4281] store the literal value 16774 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4284] play sound effect 258
        [ 4286] do nothing
        [ 4287] store the literal value 16815 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4290] play sound effect 258
        [ 4292] do nothing
        [ 4293] store the literal value 16855 into phase table slot #39 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4296] do nothing
        [ 4297] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4337] display system/chat message #16894: " þ%"
        [ 4339] do nothing
        [ 4340] IF NOT(((var(34) & 512) > 0)): GOTO #4349  (else falls through, rejoins #4349)
        [ 4344] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4349] do nothing
        [ 4350] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#4353, 64->#4359, 128->#4365, 256->#4371} else #4377
        [ 4353] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 2
        [ 4358] do nothing
        [ 4359] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 3
        [ 4364] do nothing
        [ 4365] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 4
        [ 4370] do nothing
        [ 4371] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 5
        [ 4376] do nothing
        [ 4377] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4382] do nothing
        [ 4383] do nothing
        [ 4384] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4394] do nothing
        [ 4395] IF NOT((var(53) > 0)): GOTO #4674  (else falls through, rejoins #4679)
        [ 4399] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 4404] set script variable #76 = random_below(100)
        [ 4407] IF NOT(((var(3) == 0) && (var(76) < 4))): GOTO #4674  (else falls through, rejoins #4674)
        [ 4411] set script variable #3 = (var(3) + 1)
        [ 4414] store the literal value 16912 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4417] SWITCH random_below(1): {0->#4420, 1->#4424, 2->#4428, 7->#4432} else #4436
        [ 4420] store the literal value 16913 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4423] do nothing
        [ 4424] store the literal value 16948 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4427] do nothing
        [ 4428] store the literal value 16975 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4431] do nothing
        [ 4432] store the literal value 17014 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4435] do nothing
        [ 4436] store the literal value 17042 into phase table slot #40 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4439] do nothing
        [ 4440] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4450] store the literal value 17095 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4453] set script variable #77 = random_below(4)
        [ 4456] IF NOT(((random_below(1) != 7) && (var(77) >= 3))): GOTO #4463  (else falls through, rejoins #4463)
        [ 4460] set script variable #77 = random_below(3)
        [ 4463] SWITCH var(77): {0->#4466, 1->#4470, 3->#4474, 4->#4478, 5->#4482, 6->#4486, 7->#4490} else #4494
        [ 4466] store the literal value 17096 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4469] do nothing
        [ 4470] store the literal value 17100 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4473] do nothing
        [ 4474] store the literal value 17111 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4477] do nothing
        [ 4478] store the literal value 17132 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4481] do nothing
        [ 4482] store the literal value 17159 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4485] do nothing
        [ 4486] store the literal value 17190 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4489] do nothing
        [ 4490] store the literal value 17219 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4493] do nothing
        [ 4494] store the literal value 17249 into phase table slot #41 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4497] do nothing
        [ 4498] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4514] store the literal value 17264 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4517] SWITCH 6: {1->#4520, 2->#4526, 3->#4532, 4->#4538, 5->#4544, 6->#4550, 7->#4556, 8->#4562, 9->#4568, 10->#4574, 11->#4580, 12->#4586, 13->#4590, 14->#4594, 512->#4598, 32->#4604, 64->#4610, 128->#4616, 256->#4622} else #4628
        [ 4520] store the literal value 17265 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4523] play sound effect 257
        [ 4525] do nothing
        [ 4526] store the literal value 17292 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4529] play sound effect 257
        [ 4531] do nothing
        [ 4532] store the literal value 17318 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4535] play sound effect 260
        [ 4537] do nothing
        [ 4538] store the literal value 17348 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4541] play sound effect 260
        [ 4543] do nothing
        [ 4544] store the literal value 17372 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4547] play sound effect 260
        [ 4549] do nothing
        [ 4550] store the literal value 17397 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4553] play sound effect 261
        [ 4555] do nothing
        [ 4556] store the literal value 17451 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4559] play sound effect 257
        [ 4561] do nothing
        [ 4562] store the literal value 17475 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4565] play sound effect 261
        [ 4567] do nothing
        [ 4568] store the literal value 17530 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4571] play sound effect 262
        [ 4573] do nothing
        [ 4574] store the literal value 17575 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4577] play sound effect 262
        [ 4579] do nothing
        [ 4580] store the literal value 17626 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4583] play sound effect 259
        [ 4585] do nothing
        [ 4586] store the literal value 17709 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4589] do nothing
        [ 4590] store the literal value 17773 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4593] do nothing
        [ 4594] store the literal value 17827 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4597] do nothing
        [ 4598] store the literal value 17899 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4601] play sound effect 258
        [ 4603] do nothing
        [ 4604] store the literal value 17933 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4607] play sound effect 258
        [ 4609] do nothing
        [ 4610] store the literal value 17972 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4613] play sound effect 258
        [ 4615] do nothing
        [ 4616] store the literal value 18011 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4619] play sound effect 258
        [ 4621] do nothing
        [ 4622] store the literal value 18052 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4625] play sound effect 258
        [ 4627] do nothing
        [ 4628] store the literal value 18092 into phase table slot #42 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4631] do nothing
        [ 4632] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4672] display system/chat message #18131: " þ("
        [ 4674] order unit-slot #12 to move, speed/priority 0, destination-type tag 0, destination arg 0
        [ 4679] do nothing
        [ 4680] IF NOT((set_unit_behavior(7, 12) != 3)): GOTO #4689  (else falls through, rejoins #4689)
        [ 4684] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 4689] do nothing
        [ 4690] IF NOT((((var(34) & 7136) == 0) && (var(53) == 0))): GOTO #5063  (else falls through, rejoins #5087)
        [ 4694] set script variable #79 = random_below(100)
        [ 4697] IF NOT(((var(3) == 0) && (var(79) < 4))): GOTO #4964  (else falls through, rejoins #4964)
        [ 4701] set script variable #3 = (var(3) + 1)
        [ 4704] store the literal value 18149 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4707] SWITCH random_below(1): {0->#4710, 1->#4714, 2->#4718, 7->#4722} else #4726
        [ 4710] store the literal value 18150 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4713] do nothing
        [ 4714] store the literal value 18185 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4717] do nothing
        [ 4718] store the literal value 18212 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4721] do nothing
        [ 4722] store the literal value 18251 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4725] do nothing
        [ 4726] store the literal value 18279 into phase table slot #43 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4729] do nothing
        [ 4730] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 4740] store the literal value 18332 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4743] set script variable #80 = random_below(4)
        [ 4746] IF NOT(((random_below(1) != 7) && (var(80) >= 3))): GOTO #4753  (else falls through, rejoins #4753)
        [ 4750] set script variable #80 = random_below(3)
        [ 4753] SWITCH var(80): {0->#4756, 1->#4760, 3->#4764, 4->#4768, 5->#4772, 6->#4776, 7->#4780} else #4784
        [ 4756] store the literal value 18333 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4759] do nothing
        [ 4760] store the literal value 18337 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4763] do nothing
        [ 4764] store the literal value 18348 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4767] do nothing
        [ 4768] store the literal value 18369 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4771] do nothing
        [ 4772] store the literal value 18396 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4775] do nothing
        [ 4776] store the literal value 18427 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4779] do nothing
        [ 4780] store the literal value 18456 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4783] do nothing
        [ 4784] store the literal value 18486 into phase table slot #44 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4787] do nothing
        [ 4788] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 4804] store the literal value 18501 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4807] SWITCH 7: {1->#4810, 2->#4816, 3->#4822, 4->#4828, 5->#4834, 6->#4840, 7->#4846, 8->#4852, 9->#4858, 10->#4864, 11->#4870, 12->#4876, 13->#4880, 14->#4884, 512->#4888, 32->#4894, 64->#4900, 128->#4906, 256->#4912} else #4918
        [ 4810] store the literal value 18502 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4813] play sound effect 257
        [ 4815] do nothing
        [ 4816] store the literal value 18529 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4819] play sound effect 257
        [ 4821] do nothing
        [ 4822] store the literal value 18555 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4825] play sound effect 260
        [ 4827] do nothing
        [ 4828] store the literal value 18585 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4831] play sound effect 260
        [ 4833] do nothing
        [ 4834] store the literal value 18609 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4837] play sound effect 260
        [ 4839] do nothing
        [ 4840] store the literal value 18634 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4843] play sound effect 261
        [ 4845] do nothing
        [ 4846] store the literal value 18688 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4849] play sound effect 257
        [ 4851] do nothing
        [ 4852] store the literal value 18712 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4855] play sound effect 261
        [ 4857] do nothing
        [ 4858] store the literal value 18767 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4861] play sound effect 262
        [ 4863] do nothing
        [ 4864] store the literal value 18812 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4867] play sound effect 262
        [ 4869] do nothing
        [ 4870] store the literal value 18863 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4873] play sound effect 259
        [ 4875] do nothing
        [ 4876] store the literal value 18946 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4879] do nothing
        [ 4880] store the literal value 19010 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4883] do nothing
        [ 4884] store the literal value 19064 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4887] do nothing
        [ 4888] store the literal value 19136 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4891] play sound effect 258
        [ 4893] do nothing
        [ 4894] store the literal value 19170 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4897] play sound effect 258
        [ 4899] do nothing
        [ 4900] store the literal value 19209 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4903] play sound effect 258
        [ 4905] do nothing
        [ 4906] store the literal value 19248 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4909] play sound effect 258
        [ 4911] do nothing
        [ 4912] store the literal value 19289 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4915] play sound effect 258
        [ 4917] do nothing
        [ 4918] store the literal value 19329 into phase table slot #45 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 4921] do nothing
        [ 4922] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 4962] display system/chat message #19368: " þ+"
        [ 4964] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#4967, 64->#4985, 128->#5003, 256->#5021} else #5039
        [ 4967] IF NOT(group_condition_ref(2, 12)): GOTO #4975  (else falls through, rejoins #4975)
        [ 4971] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4975] define condition-slot #2 as (variable-ref 2, expression-offset 3673)
        [ 4979] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 4984] do nothing
        [ 4985] IF NOT(group_condition_ref(3, 12)): GOTO #4993  (else falls through, rejoins #4993)
        [ 4989] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 4993] define condition-slot #3 as (variable-ref 3, expression-offset 3694)
        [ 4997] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5002] do nothing
        [ 5003] IF NOT(group_condition_ref(4, 12)): GOTO #5011  (else falls through, rejoins #5011)
        [ 5007] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5011] define condition-slot #4 as (variable-ref 4, expression-offset 3715)
        [ 5015] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5020] do nothing
        [ 5021] IF NOT(group_condition_ref(5, 12)): GOTO #5029  (else falls through, rejoins #5029)
        [ 5025] set hex-var #5 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5029] define condition-slot #5 as (variable-ref 5, expression-offset 3736)
        [ 5033] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 5038] do nothing
        [ 5039] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5044] do nothing
        [ 5045] do nothing
        [ 5046] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5056] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #5063  (else falls through, rejoins #5063)
        [ 5060] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 5063] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #5078  (else falls through, rejoins #5087)
        [ 5067] arm timer #1 to expire 2 turn(s) from now
        [ 5070] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 5073] order unit-slot #12 to move, speed/priority var(57), destination-type tag 0, destination arg 0
        [ 5078] IF NOT(timer_expired(1)): GOTO #5087  (else falls through, rejoins #5087)
        [ 5082] order unit-slot #12 to move, speed/priority 3, destination-type tag 2, destination arg 1
        [ 5087] do nothing
        [ 5088] do nothing
        [ 5089] IF NOT((set_unit_behavior(7, 12) != 4)): GOTO #5368  (else falls through, rejoins #5383)
        [ 5093] set script variable #82 = random_below(100)
        [ 5096] IF NOT(((var(3) == 0) && (var(82) < 4))): GOTO #5363  (else falls through, rejoins #5363)
        [ 5100] set script variable #3 = (var(3) + 1)
        [ 5103] store the literal value 19386 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5106] SWITCH random_below(1): {0->#5109, 1->#5113, 2->#5117, 7->#5121} else #5125
        [ 5109] store the literal value 19387 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5112] do nothing
        [ 5113] store the literal value 19422 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5116] do nothing
        [ 5117] store the literal value 19449 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5120] do nothing
        [ 5121] store the literal value 19488 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5124] do nothing
        [ 5125] store the literal value 19516 into phase table slot #46 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5128] do nothing
        [ 5129] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5139] store the literal value 19569 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5142] set script variable #83 = random_below(4)
        [ 5145] IF NOT(((random_below(1) != 7) && (var(83) >= 3))): GOTO #5152  (else falls through, rejoins #5152)
        [ 5149] set script variable #83 = random_below(3)
        [ 5152] SWITCH var(83): {0->#5155, 1->#5159, 3->#5163, 4->#5167, 5->#5171, 6->#5175, 7->#5179} else #5183
        [ 5155] store the literal value 19570 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5158] do nothing
        [ 5159] store the literal value 19574 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5162] do nothing
        [ 5163] store the literal value 19585 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5166] do nothing
        [ 5167] store the literal value 19606 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5170] do nothing
        [ 5171] store the literal value 19633 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5174] do nothing
        [ 5175] store the literal value 19664 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5178] do nothing
        [ 5179] store the literal value 19693 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5182] do nothing
        [ 5183] store the literal value 19723 into phase table slot #47 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5186] do nothing
        [ 5187] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5203] store the literal value 19738 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5206] SWITCH 9: {1->#5209, 2->#5215, 3->#5221, 4->#5227, 5->#5233, 6->#5239, 7->#5245, 8->#5251, 9->#5257, 10->#5263, 11->#5269, 12->#5275, 13->#5279, 14->#5283, 512->#5287, 32->#5293, 64->#5299, 128->#5305, 256->#5311} else #5317
        [ 5209] store the literal value 19739 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5212] play sound effect 257
        [ 5214] do nothing
        [ 5215] store the literal value 19766 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5218] play sound effect 257
        [ 5220] do nothing
        [ 5221] store the literal value 19792 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5224] play sound effect 260
        [ 5226] do nothing
        [ 5227] store the literal value 19822 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5230] play sound effect 260
        [ 5232] do nothing
        [ 5233] store the literal value 19846 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5236] play sound effect 260
        [ 5238] do nothing
        [ 5239] store the literal value 19871 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5242] play sound effect 261
        [ 5244] do nothing
        [ 5245] store the literal value 19925 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5248] play sound effect 257
        [ 5250] do nothing
        [ 5251] store the literal value 19949 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5254] play sound effect 261
        [ 5256] do nothing
        [ 5257] store the literal value 20004 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5260] play sound effect 262
        [ 5262] do nothing
        [ 5263] store the literal value 20049 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5266] play sound effect 262
        [ 5268] do nothing
        [ 5269] store the literal value 20100 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5272] play sound effect 259
        [ 5274] do nothing
        [ 5275] store the literal value 20183 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5278] do nothing
        [ 5279] store the literal value 20247 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5282] do nothing
        [ 5283] store the literal value 20301 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5286] do nothing
        [ 5287] store the literal value 20373 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5290] play sound effect 258
        [ 5292] do nothing
        [ 5293] store the literal value 20407 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5296] play sound effect 258
        [ 5298] do nothing
        [ 5299] store the literal value 20446 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5302] play sound effect 258
        [ 5304] do nothing
        [ 5305] store the literal value 20485 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5308] play sound effect 258
        [ 5310] do nothing
        [ 5311] store the literal value 20526 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5314] play sound effect 258
        [ 5316] do nothing
        [ 5317] store the literal value 20566 into phase table slot #48 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5320] do nothing
        [ 5321] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5361] display system/chat message #20605: " þ."
        [ 5363] order unit-slot #12 to move, speed/priority 4, destination-type tag 3, destination arg 2
        [ 5368] set script variable #85 = set_unit_behavior(10, 12)
        [ 5371] set unit-slot #14 = var(85)
        [ 5374] IF NOT(group_condition(14)): GOTO #5383  (else falls through, rejoins #5383)
        [ 5378] order unit-slot #12 to move, speed/priority 6, destination-type tag 0, destination arg 0
        [ 5383] do nothing
        [ 5384] do nothing
        [ 5385] IF NOT((((var(34) & 7136) == 0) & (var(53) == 0))): GOTO #5758  (else falls through, rejoins #5770)
        [ 5389] set script variable #86 = random_below(100)
        [ 5392] IF NOT(((var(3) == 0) && (var(86) < 4))): GOTO #5659  (else falls through, rejoins #5659)
        [ 5396] set script variable #3 = (var(3) + 1)
        [ 5399] store the literal value 20623 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5402] SWITCH random_below(1): {0->#5405, 1->#5409, 2->#5413, 7->#5417} else #5421
        [ 5405] store the literal value 20624 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5408] do nothing
        [ 5409] store the literal value 20659 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5412] do nothing
        [ 5413] store the literal value 20686 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5416] do nothing
        [ 5417] store the literal value 20725 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5420] do nothing
        [ 5421] store the literal value 20753 into phase table slot #49 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5424] do nothing
        [ 5425] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5435] store the literal value 20806 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5438] set script variable #87 = random_below(4)
        [ 5441] IF NOT(((random_below(1) != 7) && (var(87) >= 3))): GOTO #5448  (else falls through, rejoins #5448)
        [ 5445] set script variable #87 = random_below(3)
        [ 5448] SWITCH var(87): {0->#5451, 1->#5455, 3->#5459, 4->#5463, 5->#5467, 6->#5471, 7->#5475} else #5479
        [ 5451] store the literal value 20807 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5454] do nothing
        [ 5455] store the literal value 20811 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5458] do nothing
        [ 5459] store the literal value 20822 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5462] do nothing
        [ 5463] store the literal value 20843 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5466] do nothing
        [ 5467] store the literal value 20870 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5470] do nothing
        [ 5471] store the literal value 20901 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5474] do nothing
        [ 5475] store the literal value 20930 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5478] do nothing
        [ 5479] store the literal value 20960 into phase table slot #50 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5482] do nothing
        [ 5483] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 5499] store the literal value 20975 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5502] SWITCH 7: {1->#5505, 2->#5511, 3->#5517, 4->#5523, 5->#5529, 6->#5535, 7->#5541, 8->#5547, 9->#5553, 10->#5559, 11->#5565, 12->#5571, 13->#5575, 14->#5579, 512->#5583, 32->#5589, 64->#5595, 128->#5601, 256->#5607} else #5613
        [ 5505] store the literal value 20976 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5508] play sound effect 257
        [ 5510] do nothing
        [ 5511] store the literal value 21003 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5514] play sound effect 257
        [ 5516] do nothing
        [ 5517] store the literal value 21029 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5520] play sound effect 260
        [ 5522] do nothing
        [ 5523] store the literal value 21059 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5526] play sound effect 260
        [ 5528] do nothing
        [ 5529] store the literal value 21083 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5532] play sound effect 260
        [ 5534] do nothing
        [ 5535] store the literal value 21108 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5538] play sound effect 261
        [ 5540] do nothing
        [ 5541] store the literal value 21162 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5544] play sound effect 257
        [ 5546] do nothing
        [ 5547] store the literal value 21186 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5550] play sound effect 261
        [ 5552] do nothing
        [ 5553] store the literal value 21241 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5556] play sound effect 262
        [ 5558] do nothing
        [ 5559] store the literal value 21286 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5562] play sound effect 262
        [ 5564] do nothing
        [ 5565] store the literal value 21337 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5568] play sound effect 259
        [ 5570] do nothing
        [ 5571] store the literal value 21420 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5574] do nothing
        [ 5575] store the literal value 21484 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5578] do nothing
        [ 5579] store the literal value 21538 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5582] do nothing
        [ 5583] store the literal value 21610 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5586] play sound effect 258
        [ 5588] do nothing
        [ 5589] store the literal value 21644 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5592] play sound effect 258
        [ 5594] do nothing
        [ 5595] store the literal value 21683 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5598] play sound effect 258
        [ 5600] do nothing
        [ 5601] store the literal value 21722 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5604] play sound effect 258
        [ 5606] do nothing
        [ 5607] store the literal value 21763 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5610] play sound effect 258
        [ 5612] do nothing
        [ 5613] store the literal value 21803 into phase table slot #51 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 5616] do nothing
        [ 5617] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 5657] display system/chat message #21842: " þ1"
        [ 5659] SWITCH (set_unit_behavior(8, 12) & 7136): {32->#5662, 64->#5680, 128->#5698, 256->#5716} else #5734
        [ 5662] IF NOT(group_condition_ref(2, 12)): GOTO #5670  (else falls through, rejoins #5670)
        [ 5666] set hex-var #2 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5670] define condition-slot #2 as (variable-ref 2, expression-offset 4169)
        [ 5674] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 2
        [ 5679] do nothing
        [ 5680] IF NOT(group_condition_ref(3, 12)): GOTO #5688  (else falls through, rejoins #5688)
        [ 5684] set hex-var #3 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5688] define condition-slot #3 as (variable-ref 3, expression-offset 4190)
        [ 5692] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 3
        [ 5697] do nothing
        [ 5698] IF NOT(group_condition_ref(4, 12)): GOTO #5706  (else falls through, rejoins #5706)
        [ 5702] set hex-var #4 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5706] define condition-slot #4 as (variable-ref 4, expression-offset 4211)
        [ 5710] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 4
        [ 5715] do nothing
        [ 5716] IF NOT(group_condition_ref(5, 12)): GOTO #5724  (else falls through, rejoins #5724)
        [ 5720] set hex-var #5 = the point (random_below(200) + 80) steps along the path toward random_below(31)
        [ 5724] define condition-slot #5 as (variable-ref 5, expression-offset 4232)
        [ 5728] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 5
        [ 5733] do nothing
        [ 5734] order unit-slot #12 to move, speed/priority 1, destination-type tag 2, destination arg 1
        [ 5739] do nothing
        [ 5740] do nothing
        [ 5741] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 5751] IF NOT(((set_unit_behavior(8, 12) & 1024) > 0)): GOTO #5758  (else falls through, rejoins #5758)
        [ 5755] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) - 1024)
        [ 5758] IF NOT(((set_unit_behavior(8, 12) & 1024) == 0)): GOTO #5770  (else falls through, rejoins #5770)
        [ 5762] set attribute #8 of unit-slot #12 to (set_unit_behavior(8, 12) + 1024)
        [ 5765] order unit-slot #12 to move, speed/priority var(57), destination-type tag 0, destination arg 0
        [ 5770] do nothing
        [ 5771] do nothing
        [ 5772] do nothing
        [ 5773] (UNKNOWN OPCODE 0x000c) - dead end, not decoded further (other branches continue independently)
        [ 5799] do nothing (message no-op)
        [ 5800] (UNKNOWN OPCODE 0x5564) - dead end, not decoded further (other branches continue independently)
        [ 5806] set script variable #7 = (var(7) + 1)
        [ 5809] do nothing (message no-op)
        [ 5810] (UNKNOWN OPCODE 0x5583) - dead end, not decoded further (other branches continue independently)
        [ 6010] ONCE((timer_expired(3) && (var(5) > 0)), flag[2]): run block below -> #6016
        [ 6014] display system/chat message #22296: "Attack on human installation has commenced. Encountering human infestation. Requisitioning all nearby units from defense pool."
        [ 6016] ONCE((((any_group_alive(1) || group_condition(2)) || any_group_alive(2)) || !all_group_alive(1)), flag[3]): run block below -> #6021
        [ 6020] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6021] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6022] set script variable #96 = ((var(9) && !any_group_alive(1)) && !group_condition(2))
            [ 6025] do nothing (message no-op)
            [ 6026] (UNKNOWN OPCODE 0x5797) - dead end, not decoded further (other branches continue independently)
```
