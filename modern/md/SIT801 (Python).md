# SIT801.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = 3
var[5] = 0
var[6] = 0
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[8] == 0)):
        goto L17
    # else: falls through here, rejoins L17
    var[8] = (random_below(var[19]) + var[20])
    # --- L17 ---
    set_unit_objective(unit=1, state=2)
    var[12] = stat(9)
    var[10] = (stat(8) - 1)
    var[11] = stat(10)
    var[15] = ((10 + var[10]) - var[11])
    var[15] = (var[15] / 2)
    if not ((var[15] < 0)):
        goto L42
    # else: falls through here, rejoins L42
    var[15] = 0
    # --- L42 ---
    var[21] = 1
    var[22] = 1
    while (var[21] <= var[10]):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L113
    # --- L51 ---
    switch(var[21]):
        case 1: goto L54
        case 2: goto L58
        case 3: goto L62
        case 4: goto L66
        case 5: goto L70
        case 6: goto L74
        case 7: goto L78
        case 8: goto L82
        default: goto L86
    var[22] = 1
    pass
    # --- L58 ---
    var[22] = 2
    pass
    # --- L62 ---
    var[22] = 4
    pass
    # --- L66 ---
    var[22] = 8
    pass
    # --- L70 ---
    var[22] = 16
    pass
    # --- L74 ---
    var[22] = 32
    pass
    # --- L78 ---
    var[22] = 64
    pass
    # --- L82 ---
    var[22] = 128
    pass
    # --- L86 ---
    pass
    # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
    # --- L105 ---
    var[9] = (var[9] + var[22])
    var[21] = (var[21] + 1)
    goto L51
    # --- L113 ---
    var[23] = (((360 / var[10]) * var[12]) + (var[10] + (var[11] * 2)))
    var[24] = ((31 - var[15]) - 3)
    hex[8] = hex_along_path(toward=var[24], steps=(var[23] - 180))
    var[25] = stat(7)
    var[26] = random_below((var[10] - 1))
    var[27] = (var[26] + 1)
    var[28] = (((360 / var[10]) * var[26]) + (var[10] + (var[11] * 2)))
    var[29] = (((360 / var[10]) * var[27]) + (var[10] + (var[11] * 2)))
    var[30] = ((var[28] + var[29]) / 2)
    var[31] = 1
    hex[10] = (0, 0)
    var[34] = set_objective_at_hex(6)
    while (var[31] <= var[10]):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L227
    # --- L154 ---
    var[35] = random_below(180)
    var[33] = var[24]
    var[32] = (((360 / var[10]) * var[31]) + (var[10] + (var[11] * 2)))
    if not ((var[10] == 2)):
        goto L170
    # else: falls through here, rejoins L170
    var[32] = ((var[32] - 90) + var[35])
    # --- L170 ---
    if not ((var[10] == 3)):
        goto L177
    # else: falls through here, rejoins L177
    var[32] = ((var[32] - 60) + (var[35] / 2))
    # --- L177 ---
    hex[9] = hex_along_path(toward=var[33], steps=(var[32] - 180))
    if not ((var[25] == 1)):
        goto L211
    # else: falls through here, rejoins L222
    if not ((var[31] == var[12])):
        goto L200
    # else: falls through here, rejoins L211
    unit[5] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L200 ---
    unit[7] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L211 ---
    unit[7] = spawn_unit(type=31 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L222 ---
    var[31] = (var[31] + 1)
    goto L154
    # --- L227 ---
    if not ((var[8] == 0)):
        goto L234
    # else: falls through here, rejoins L234
    var[8] = (random_below(var[36]) + var[37])
    # --- L234 ---
    var[17] = ((stat(0) * 4) / 1)
    var[17] = (var[17] - 200)
    var[21] = 8192
    while (var[21] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L258
    # --- L246 ---
    if not ((var[17] < var[21])):
        goto L253
    # else: falls through here, rejoins L253
    var[15] = (var[15] + 1)
    # --- L253 ---
    var[21] = (var[21] / 3)
    goto L246
    # --- L258 ---
    if not ((var[17] > 50)):
        goto L279
    # else: falls through here, rejoins L282
    var[16] = (var[17] / 4)
    if not ((var[16] < 50)):
        goto L272
    # else: falls through here, rejoins L279
    var[16] = 50
    # --- L272 ---
    if not ((var[16] > 1200)):
        goto L279
    # else: falls through here, rejoins L279
    var[16] = 1200
    # --- L279 ---
    var[16] = var[17]
    # --- L282 ---
    var[17] = (var[17] - var[16])
    var[38] = 0
    var[39] = 12
    var[40] = 27
    var[41] = 45
    var[42] = 90
    if not ((var[39] > (var[15] + 5))):
        goto L307
    # else: falls through here, rejoins L310
    var[39] = (var[39] - var[15])
    # --- L307 ---
    var[39] = 5
    # --- L310 ---
    if not ((var[40] > (var[15] + 10))):
        goto L317
    # else: falls through here, rejoins L320
    var[40] = (var[40] - var[15])
    # --- L317 ---
    var[40] = 10
    # --- L320 ---
    var[39] = ((var[39] * 4) / 10)
    var[40] = ((var[40] * 7) / 10)
    if not ((var[10] == 1)):
        goto L333
    # else: falls through here, rejoins L333
    var[30] = ((var[32] - 60) + random_below(90))
    # --- L333 ---
    if not ((var[38] == 0)):
        goto L340
    # else: falls through here, rejoins L340
    var[38] = (var[39] + random_below((var[40] - var[39])))
    # --- L340 ---
    if not ((var[30] == 0)):
        goto L347
    # else: falls through here, rejoins L347
    var[30] = ((random_below(var[42]) + var[41]) - (var[42] / 2))
    # --- L347 ---
    hex[5] = hex_along_path(toward=var[38], steps=var[30])
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00bb] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[14] = 0
        if not (timer_expired(2)):
            goto L4525
        # else: falls through here, rejoins L4525
        timer[2] = current_turn + 1
        var[7] = 0
        if not (group_all_alive(5)):
            goto L1010
        # else: falls through here, rejoins L1010
        var[54] = 0
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1305
        # --- L1019 ---
        if not ((set_unit_behavior(9, 9) > 0)):
            goto L1300
        # else: falls through here, rejoins L1300
        var[55] = random_below(100)
        if not (((var[7] == 0) and (var[55] < 4))):
            goto L1293
        # else: falls through here, rejoins L1293
        var[7] = (var[7] + 1)
        phase_table[4] = 1576  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1039
            case 1: goto L1043
            case 2: goto L1047
            case 7: goto L1051
            default: goto L1055
        phase_table[4] = 1577  # raw literal, not evaluated
        pass
        # --- L1043 ---
        phase_table[4] = 1612  # raw literal, not evaluated
        pass
        # --- L1047 ---
        phase_table[4] = 1639  # raw literal, not evaluated
        pass
        # --- L1051 ---
        phase_table[4] = 1678  # raw literal, not evaluated
        pass
        # --- L1055 ---
        phase_table[4] = 1706  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1069 ---
        phase_table[5] = 1759  # raw literal, not evaluated
        var[56] = random_below(1)
        if not (((random_below(4) != 7) and (var[56] >= 3))):
            goto L1082
        # else: falls through here, rejoins L1082
        var[56] = random_below(3)
        # --- L1082 ---
        switch(var[56]):
            case 0: goto L1085
            case 1: goto L1089
            case 3: goto L1093
            case 4: goto L1097
            case 5: goto L1101
            case 6: goto L1105
            case 7: goto L1109
            default: goto L1113
        phase_table[5] = 1760  # raw literal, not evaluated
        pass
        # --- L1089 ---
        phase_table[5] = 1764  # raw literal, not evaluated
        pass
        # --- L1093 ---
        phase_table[5] = 1775  # raw literal, not evaluated
        pass
        # --- L1097 ---
        phase_table[5] = 1796  # raw literal, not evaluated
        pass
        # --- L1101 ---
        phase_table[5] = 1823  # raw literal, not evaluated
        pass
        # --- L1105 ---
        phase_table[5] = 1854  # raw literal, not evaluated
        pass
        # --- L1109 ---
        phase_table[5] = 1883  # raw literal, not evaluated
        pass
        # --- L1113 ---
        phase_table[5] = 1913  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1133 ---
        phase_table[6] = 1928  # raw literal, not evaluated
        switch(10):
            case 1: goto L1139
            case 2: goto L1145
            case 3: goto L1151
            case 4: goto L1157
            case 5: goto L1163
            case 6: goto L1169
            case 7: goto L1175
            case 8: goto L1181
            case 9: goto L1187
            case 10: goto L1193
            case 11: goto L1199
            case 12: goto L1205
            case 13: goto L1209
            case 14: goto L1213
            case 512: goto L1217
            case 32: goto L1223
            case 64: goto L1229
            case 128: goto L1235
            case 256: goto L1241
            default: goto L1247
        phase_table[6] = 1929  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1145 ---
        phase_table[6] = 1956  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1151 ---
        phase_table[6] = 1982  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1157 ---
        phase_table[6] = 2012  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1163 ---
        phase_table[6] = 2036  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1169 ---
        phase_table[6] = 2061  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1175 ---
        phase_table[6] = 2115  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1181 ---
        phase_table[6] = 2139  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1187 ---
        phase_table[6] = 2194  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1193 ---
        phase_table[6] = 2239  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1199 ---
        phase_table[6] = 2290  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1205 ---
        phase_table[6] = 2373  # raw literal, not evaluated
        pass
        # --- L1209 ---
        phase_table[6] = 2437  # raw literal, not evaluated
        pass
        # --- L1213 ---
        phase_table[6] = 2491  # raw literal, not evaluated
        pass
        # --- L1217 ---
        phase_table[6] = 2563  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1223 ---
        phase_table[6] = 2597  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1229 ---
        phase_table[6] = 2636  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1235 ---
        phase_table[6] = 2675  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1241 ---
        phase_table[6] = 2716  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1247 ---
        phase_table[6] = 2756  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1291 ---
        system_message(2795 /*" þ"*/)
        # --- L1293 ---
        if not (((set_unit_behavior(8, 9) & var[18]) == 0)):
            goto L1300
        # else: falls through here, rejoins L1300
        var[18] = (var[18] + (set_unit_behavior(8, 9) & 7136))
        # --- L1300 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1019
        # --- L1305 ---
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1339
        # --- L1311 ---
        if not (group_condition_ref_2(7, 2)):
            goto L1318
        # else: falls through here, rejoins L1325
        unit[1].attr8 = 2
        # --- L1318 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1325
        # else: falls through here, rejoins L1325
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1325 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1334
        # else: falls through here, rejoins L1334
        var[54] = (var[54] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0afd] - dead end, not decoded further (other branches continue independently)
        # --- L1334 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L1311
        # --- L1339 ---
        if not (group_condition_ref_2(8, 2)):
            goto L1346
        # else: falls through here, rejoins L1353
        unit[1].attr8 = 2
        # --- L1346 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1353
        # else: falls through here, rejoins L1353
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1353 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1362
        # else: falls through here, rejoins L1362
        var[54] = (var[54] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0b10] - dead end, not decoded further (other branches continue independently)
        # --- L1362 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        var[58] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4525
        # --- L1374 ---
        if not ((set_unit_behavior(5, 9) < 60)):
            goto L1383
        # else: falls through here, rejoins L4520
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L1383 ---
        switch((set_unit_behavior(8, 9) & 15)):
            case 0: goto L1386
            case 1: goto L1669
            case 2: goto L2502
            case 3: goto L3061
            case 4: goto L3071
            case 5: goto L3116
            case 10: goto L3401
            case 11: goto L3411
            case 12: goto L3809
            case 13: goto L3810
            case 14: goto L4105
            case 15: goto L4106
            default: goto L4492
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L1668
        # else: falls through here, rejoins L1668
        var[59] = random_below(100)
        if not (((var[7] == 0) and (var[59] < 40))):
            goto L1660
        # else: falls through here, rejoins L1660
        var[7] = (var[7] + 1)
        phase_table[7] = 2851  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1406
            case 1: goto L1410
            case 2: goto L1414
            case 7: goto L1418
            default: goto L1422
        phase_table[7] = 2852  # raw literal, not evaluated
        pass
        # --- L1410 ---
        phase_table[7] = 2887  # raw literal, not evaluated
        pass
        # --- L1414 ---
        phase_table[7] = 2914  # raw literal, not evaluated
        pass
        # --- L1418 ---
        phase_table[7] = 2953  # raw literal, not evaluated
        pass
        # --- L1422 ---
        phase_table[7] = 2981  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1436 ---
        phase_table[8] = 3034  # raw literal, not evaluated
        var[60] = random_below(4)
        if not (((random_below(1) != 7) and (var[60] >= 3))):
            goto L1449
        # else: falls through here, rejoins L1449
        var[60] = random_below(3)
        # --- L1449 ---
        switch(var[60]):
            case 0: goto L1452
            case 1: goto L1456
            case 3: goto L1460
            case 4: goto L1464
            case 5: goto L1468
            case 6: goto L1472
            case 7: goto L1476
            default: goto L1480
        phase_table[8] = 3035  # raw literal, not evaluated
        pass
        # --- L1456 ---
        phase_table[8] = 3039  # raw literal, not evaluated
        pass
        # --- L1460 ---
        phase_table[8] = 3050  # raw literal, not evaluated
        pass
        # --- L1464 ---
        phase_table[8] = 3071  # raw literal, not evaluated
        pass
        # --- L1468 ---
        phase_table[8] = 3098  # raw literal, not evaluated
        pass
        # --- L1472 ---
        phase_table[8] = 3129  # raw literal, not evaluated
        pass
        # --- L1476 ---
        phase_table[8] = 3158  # raw literal, not evaluated
        pass
        # --- L1480 ---
        phase_table[8] = 3188  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1500 ---
        phase_table[9] = 3203  # raw literal, not evaluated
        switch(8):
            case 1: goto L1506
            case 2: goto L1512
            case 3: goto L1518
            case 4: goto L1524
            case 5: goto L1530
            case 6: goto L1536
            case 7: goto L1542
            case 8: goto L1548
            case 9: goto L1554
            case 10: goto L1560
            case 11: goto L1566
            case 12: goto L1572
            case 13: goto L1576
            case 14: goto L1580
            case 512: goto L1584
            case 32: goto L1590
            case 64: goto L1596
            case 128: goto L1602
            case 256: goto L1608
            default: goto L1614
        phase_table[9] = 3204  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1512 ---
        phase_table[9] = 3231  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1518 ---
        phase_table[9] = 3257  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1524 ---
        phase_table[9] = 3287  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1530 ---
        phase_table[9] = 3311  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1536 ---
        phase_table[9] = 3336  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1542 ---
        phase_table[9] = 3390  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1548 ---
        phase_table[9] = 3414  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1554 ---
        phase_table[9] = 3469  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1560 ---
        phase_table[9] = 3514  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1566 ---
        phase_table[9] = 3565  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1572 ---
        phase_table[9] = 3648  # raw literal, not evaluated
        pass
        # --- L1576 ---
        phase_table[9] = 3712  # raw literal, not evaluated
        pass
        # --- L1580 ---
        phase_table[9] = 3766  # raw literal, not evaluated
        pass
        # --- L1584 ---
        phase_table[9] = 3838  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1590 ---
        phase_table[9] = 3872  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1596 ---
        phase_table[9] = 3911  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1602 ---
        phase_table[9] = 3950  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1608 ---
        phase_table[9] = 3991  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1614 ---
        phase_table[9] = 4031  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1658 ---
        system_message(4070 /*" þ"*/)
        # --- L1660 ---
        move_unit(unit[9], priority=var[58], dest_type=0, dest_arg=0)
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        # --- L1668 ---
        pass
        # --- L1669 ---
        if not ((group_condition_ref_2(9, 1) or (set_unit_behavior(9, 9) != 0))):
            goto L1952
        # else: falls through here, rejoins L2501
        if not ((set_unit_behavior(7, 9) != 6)):
            goto L1952
        # else: falls through here, rejoins L1952
        var[62] = random_below(100)
        if not (((var[7] == 0) and (var[62] < 40))):
            goto L1947
        # else: falls through here, rejoins L1947
        var[7] = (var[7] + 1)
        phase_table[10] = 4088  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1693
            case 1: goto L1697
            case 2: goto L1701
            case 7: goto L1705
            default: goto L1709
        phase_table[10] = 4089  # raw literal, not evaluated
        pass
        # --- L1697 ---
        phase_table[10] = 4124  # raw literal, not evaluated
        pass
        # --- L1701 ---
        phase_table[10] = 4151  # raw literal, not evaluated
        pass
        # --- L1705 ---
        phase_table[10] = 4190  # raw literal, not evaluated
        pass
        # --- L1709 ---
        phase_table[10] = 4218  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1723 ---
        phase_table[11] = 4271  # raw literal, not evaluated
        var[63] = random_below(4)
        if not (((random_below(1) != 7) and (var[63] >= 3))):
            goto L1736
        # else: falls through here, rejoins L1736
        var[63] = random_below(3)
        # --- L1736 ---
        switch(var[63]):
            case 0: goto L1739
            case 1: goto L1743
            case 3: goto L1747
            case 4: goto L1751
            case 5: goto L1755
            case 6: goto L1759
            case 7: goto L1763
            default: goto L1767
        phase_table[11] = 4272  # raw literal, not evaluated
        pass
        # --- L1743 ---
        phase_table[11] = 4276  # raw literal, not evaluated
        pass
        # --- L1747 ---
        phase_table[11] = 4287  # raw literal, not evaluated
        pass
        # --- L1751 ---
        phase_table[11] = 4308  # raw literal, not evaluated
        pass
        # --- L1755 ---
        phase_table[11] = 4335  # raw literal, not evaluated
        pass
        # --- L1759 ---
        phase_table[11] = 4366  # raw literal, not evaluated
        pass
        # --- L1763 ---
        phase_table[11] = 4395  # raw literal, not evaluated
        pass
        # --- L1767 ---
        phase_table[11] = 4425  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1787 ---
        phase_table[12] = 4440  # raw literal, not evaluated
        switch(3):
            case 1: goto L1793
            case 2: goto L1799
            case 3: goto L1805
            case 4: goto L1811
            case 5: goto L1817
            case 6: goto L1823
            case 7: goto L1829
            case 8: goto L1835
            case 9: goto L1841
            case 10: goto L1847
            case 11: goto L1853
            case 12: goto L1859
            case 13: goto L1863
            case 14: goto L1867
            case 512: goto L1871
            case 32: goto L1877
            case 64: goto L1883
            case 128: goto L1889
            case 256: goto L1895
            default: goto L1901
        phase_table[12] = 4441  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1799 ---
        phase_table[12] = 4468  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1805 ---
        phase_table[12] = 4494  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1811 ---
        phase_table[12] = 4524  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1817 ---
        phase_table[12] = 4548  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1823 ---
        phase_table[12] = 4573  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1829 ---
        phase_table[12] = 4627  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1835 ---
        phase_table[12] = 4651  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1841 ---
        phase_table[12] = 4706  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1847 ---
        phase_table[12] = 4751  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1853 ---
        phase_table[12] = 4802  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1859 ---
        phase_table[12] = 4885  # raw literal, not evaluated
        pass
        # --- L1863 ---
        phase_table[12] = 4949  # raw literal, not evaluated
        pass
        # --- L1867 ---
        phase_table[12] = 5003  # raw literal, not evaluated
        pass
        # --- L1871 ---
        phase_table[12] = 5075  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1877 ---
        phase_table[12] = 5109  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1883 ---
        phase_table[12] = 5148  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1889 ---
        phase_table[12] = 5187  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1895 ---
        phase_table[12] = 5228  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1901 ---
        phase_table[12] = 5268  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1945 ---
        system_message(5307 /*" þ
"*/)
        # --- L1947 ---
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L1952 ---
        if not ((set_unit_behavior(7, 9) != 2)):
            goto L2231
        # else: falls through here, rejoins L2501
        move_unit(unit[9], priority=2, dest_type=0, dest_arg=0)
        var[65] = random_below(100)
        if not (((var[7] == 0) and (var[65] < 4))):
            goto L2231
        # else: falls through here, rejoins L2231
        var[7] = (var[7] + 1)
        phase_table[13] = 5325  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1977
            case 1: goto L1981
            case 2: goto L1985
            case 7: goto L1989
            default: goto L1993
        phase_table[13] = 5326  # raw literal, not evaluated
        pass
        # --- L1981 ---
        phase_table[13] = 5361  # raw literal, not evaluated
        pass
        # --- L1985 ---
        phase_table[13] = 5388  # raw literal, not evaluated
        pass
        # --- L1989 ---
        phase_table[13] = 5427  # raw literal, not evaluated
        pass
        # --- L1993 ---
        phase_table[13] = 5455  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2007 ---
        phase_table[14] = 5508  # raw literal, not evaluated
        var[66] = random_below(4)
        if not (((random_below(1) != 7) and (var[66] >= 3))):
            goto L2020
        # else: falls through here, rejoins L2020
        var[66] = random_below(3)
        # --- L2020 ---
        switch(var[66]):
            case 0: goto L2023
            case 1: goto L2027
            case 3: goto L2031
            case 4: goto L2035
            case 5: goto L2039
            case 6: goto L2043
            case 7: goto L2047
            default: goto L2051
        phase_table[14] = 5509  # raw literal, not evaluated
        pass
        # --- L2027 ---
        phase_table[14] = 5513  # raw literal, not evaluated
        pass
        # --- L2031 ---
        phase_table[14] = 5524  # raw literal, not evaluated
        pass
        # --- L2035 ---
        phase_table[14] = 5545  # raw literal, not evaluated
        pass
        # --- L2039 ---
        phase_table[14] = 5572  # raw literal, not evaluated
        pass
        # --- L2043 ---
        phase_table[14] = 5603  # raw literal, not evaluated
        pass
        # --- L2047 ---
        phase_table[14] = 5632  # raw literal, not evaluated
        pass
        # --- L2051 ---
        phase_table[14] = 5662  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2071 ---
        phase_table[15] = 5677  # raw literal, not evaluated
        switch(2):
            case 1: goto L2077
            case 2: goto L2083
            case 3: goto L2089
            case 4: goto L2095
            case 5: goto L2101
            case 6: goto L2107
            case 7: goto L2113
            case 8: goto L2119
            case 9: goto L2125
            case 10: goto L2131
            case 11: goto L2137
            case 12: goto L2143
            case 13: goto L2147
            case 14: goto L2151
            case 512: goto L2155
            case 32: goto L2161
            case 64: goto L2167
            case 128: goto L2173
            case 256: goto L2179
            default: goto L2185
        phase_table[15] = 5678  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2083 ---
        phase_table[15] = 5705  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2089 ---
        phase_table[15] = 5731  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2095 ---
        phase_table[15] = 5761  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2101 ---
        phase_table[15] = 5785  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2107 ---
        phase_table[15] = 5810  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2113 ---
        phase_table[15] = 5864  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2119 ---
        phase_table[15] = 5888  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2125 ---
        phase_table[15] = 5943  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2131 ---
        phase_table[15] = 5988  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2137 ---
        phase_table[15] = 6039  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2143 ---
        phase_table[15] = 6122  # raw literal, not evaluated
        pass
        # --- L2147 ---
        phase_table[15] = 6186  # raw literal, not evaluated
        pass
        # --- L2151 ---
        phase_table[15] = 6240  # raw literal, not evaluated
        pass
        # --- L2155 ---
        phase_table[15] = 6312  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2161 ---
        phase_table[15] = 6346  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2167 ---
        phase_table[15] = 6385  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2173 ---
        phase_table[15] = 6424  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2179 ---
        phase_table[15] = 6465  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2185 ---
        phase_table[15] = 6505  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2229 ---
        system_message(6544 /*" þ"*/)
        # --- L2231 ---
        var[68] = random_below(100)
        if not (((var[7] == 0) and (var[68] < 4))):
            goto L2501
        # else: falls through here, rejoins L2501
        var[7] = (var[7] + 1)
        phase_table[16] = 6562  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2247
            case 1: goto L2251
            case 2: goto L2255
            case 7: goto L2259
            default: goto L2263
        phase_table[16] = 6563  # raw literal, not evaluated
        pass
        # --- L2251 ---
        phase_table[16] = 6598  # raw literal, not evaluated
        pass
        # --- L2255 ---
        phase_table[16] = 6625  # raw literal, not evaluated
        pass
        # --- L2259 ---
        phase_table[16] = 6664  # raw literal, not evaluated
        pass
        # --- L2263 ---
        phase_table[16] = 6692  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2277 ---
        phase_table[17] = 6745  # raw literal, not evaluated
        var[69] = random_below(4)
        if not (((random_below(1) != 7) and (var[69] >= 3))):
            goto L2290
        # else: falls through here, rejoins L2290
        var[69] = random_below(3)
        # --- L2290 ---
        switch(var[69]):
            case 0: goto L2293
            case 1: goto L2297
            case 3: goto L2301
            case 4: goto L2305
            case 5: goto L2309
            case 6: goto L2313
            case 7: goto L2317
            default: goto L2321
        phase_table[17] = 6746  # raw literal, not evaluated
        pass
        # --- L2297 ---
        phase_table[17] = 6750  # raw literal, not evaluated
        pass
        # --- L2301 ---
        phase_table[17] = 6761  # raw literal, not evaluated
        pass
        # --- L2305 ---
        phase_table[17] = 6782  # raw literal, not evaluated
        pass
        # --- L2309 ---
        phase_table[17] = 6809  # raw literal, not evaluated
        pass
        # --- L2313 ---
        phase_table[17] = 6840  # raw literal, not evaluated
        pass
        # --- L2317 ---
        phase_table[17] = 6869  # raw literal, not evaluated
        pass
        # --- L2321 ---
        phase_table[17] = 6899  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2341 ---
        phase_table[18] = 6914  # raw literal, not evaluated
        switch(1):
            case 1: goto L2347
            case 2: goto L2353
            case 3: goto L2359
            case 4: goto L2365
            case 5: goto L2371
            case 6: goto L2377
            case 7: goto L2383
            case 8: goto L2389
            case 9: goto L2395
            case 10: goto L2401
            case 11: goto L2407
            case 12: goto L2413
            case 13: goto L2417
            case 14: goto L2421
            case 512: goto L2425
            case 32: goto L2431
            case 64: goto L2437
            case 128: goto L2443
            case 256: goto L2449
            default: goto L2455
        phase_table[18] = 6915  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2353 ---
        phase_table[18] = 6942  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2359 ---
        phase_table[18] = 6968  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2365 ---
        phase_table[18] = 6998  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2371 ---
        phase_table[18] = 7022  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2377 ---
        phase_table[18] = 7047  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2383 ---
        phase_table[18] = 7101  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2389 ---
        phase_table[18] = 7125  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2395 ---
        phase_table[18] = 7180  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2401 ---
        phase_table[18] = 7225  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2407 ---
        phase_table[18] = 7276  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2413 ---
        phase_table[18] = 7359  # raw literal, not evaluated
        pass
        # --- L2417 ---
        phase_table[18] = 7423  # raw literal, not evaluated
        pass
        # --- L2421 ---
        phase_table[18] = 7477  # raw literal, not evaluated
        pass
        # --- L2425 ---
        phase_table[18] = 7549  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2431 ---
        phase_table[18] = 7583  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2437 ---
        phase_table[18] = 7622  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2443 ---
        phase_table[18] = 7661  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2449 ---
        phase_table[18] = 7702  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2455 ---
        phase_table[18] = 7742  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2499 ---
        system_message(7781 /*" þ"*/)
        # --- L2501 ---
        pass
        # --- L2502 ---
        if not (((var[18] & 512) > 0)):
            goto L2781
        # else: falls through here, rejoins L3060
        var[71] = random_below(100)
        if not (((var[7] == 0) and (var[71] < 4))):
            goto L2776
        # else: falls through here, rejoins L2776
        var[7] = (var[7] + 1)
        phase_table[19] = 7799  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2522
            case 1: goto L2526
            case 2: goto L2530
            case 7: goto L2534
            default: goto L2538
        phase_table[19] = 7800  # raw literal, not evaluated
        pass
        # --- L2526 ---
        phase_table[19] = 7835  # raw literal, not evaluated
        pass
        # --- L2530 ---
        phase_table[19] = 7862  # raw literal, not evaluated
        pass
        # --- L2534 ---
        phase_table[19] = 7901  # raw literal, not evaluated
        pass
        # --- L2538 ---
        phase_table[19] = 7929  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2552 ---
        phase_table[20] = 7982  # raw literal, not evaluated
        var[72] = random_below(4)
        if not (((random_below(1) != 7) and (var[72] >= 3))):
            goto L2565
        # else: falls through here, rejoins L2565
        var[72] = random_below(3)
        # --- L2565 ---
        switch(var[72]):
            case 0: goto L2568
            case 1: goto L2572
            case 3: goto L2576
            case 4: goto L2580
            case 5: goto L2584
            case 6: goto L2588
            case 7: goto L2592
            default: goto L2596
        phase_table[20] = 7983  # raw literal, not evaluated
        pass
        # --- L2572 ---
        phase_table[20] = 7987  # raw literal, not evaluated
        pass
        # --- L2576 ---
        phase_table[20] = 7998  # raw literal, not evaluated
        pass
        # --- L2580 ---
        phase_table[20] = 8019  # raw literal, not evaluated
        pass
        # --- L2584 ---
        phase_table[20] = 8046  # raw literal, not evaluated
        pass
        # --- L2588 ---
        phase_table[20] = 8077  # raw literal, not evaluated
        pass
        # --- L2592 ---
        phase_table[20] = 8106  # raw literal, not evaluated
        pass
        # --- L2596 ---
        phase_table[20] = 8136  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2616 ---
        phase_table[21] = 8151  # raw literal, not evaluated
        switch(4):
            case 1: goto L2622
            case 2: goto L2628
            case 3: goto L2634
            case 4: goto L2640
            case 5: goto L2646
            case 6: goto L2652
            case 7: goto L2658
            case 8: goto L2664
            case 9: goto L2670
            case 10: goto L2676
            case 11: goto L2682
            case 12: goto L2688
            case 13: goto L2692
            case 14: goto L2696
            case 512: goto L2700
            case 32: goto L2706
            case 64: goto L2712
            case 128: goto L2718
            case 256: goto L2724
            default: goto L2730
        phase_table[21] = 8152  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2628 ---
        phase_table[21] = 8179  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2634 ---
        phase_table[21] = 8205  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2640 ---
        phase_table[21] = 8235  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2646 ---
        phase_table[21] = 8259  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2652 ---
        phase_table[21] = 8284  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2658 ---
        phase_table[21] = 8338  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2664 ---
        phase_table[21] = 8362  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2670 ---
        phase_table[21] = 8417  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2676 ---
        phase_table[21] = 8462  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2682 ---
        phase_table[21] = 8513  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2688 ---
        phase_table[21] = 8596  # raw literal, not evaluated
        pass
        # --- L2692 ---
        phase_table[21] = 8660  # raw literal, not evaluated
        pass
        # --- L2696 ---
        phase_table[21] = 8714  # raw literal, not evaluated
        pass
        # --- L2700 ---
        phase_table[21] = 8786  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2706 ---
        phase_table[21] = 8820  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2712 ---
        phase_table[21] = 8859  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2718 ---
        phase_table[21] = 8898  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2724 ---
        phase_table[21] = 8939  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2730 ---
        phase_table[21] = 8979  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2774 ---
        system_message(9018 /*" þ"*/)
        # --- L2776 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L2781 ---
        if not (((var[18] & 128) > 0)):
            goto L3060
        # else: falls through here, rejoins L3060
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        var[74] = random_below(100)
        if not (((var[7] == 0) and (var[74] < 4))):
            goto L3060
        # else: falls through here, rejoins L3060
        var[7] = (var[7] + 1)
        phase_table[22] = 9036  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2806
            case 1: goto L2810
            case 2: goto L2814
            case 7: goto L2818
            default: goto L2822
        phase_table[22] = 9037  # raw literal, not evaluated
        pass
        # --- L2810 ---
        phase_table[22] = 9072  # raw literal, not evaluated
        pass
        # --- L2814 ---
        phase_table[22] = 9099  # raw literal, not evaluated
        pass
        # --- L2818 ---
        phase_table[22] = 9138  # raw literal, not evaluated
        pass
        # --- L2822 ---
        phase_table[22] = 9166  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2836 ---
        phase_table[23] = 9219  # raw literal, not evaluated
        var[75] = random_below(4)
        if not (((random_below(1) != 7) and (var[75] >= 3))):
            goto L2849
        # else: falls through here, rejoins L2849
        var[75] = random_below(3)
        # --- L2849 ---
        switch(var[75]):
            case 0: goto L2852
            case 1: goto L2856
            case 3: goto L2860
            case 4: goto L2864
            case 5: goto L2868
            case 6: goto L2872
            case 7: goto L2876
            default: goto L2880
        phase_table[23] = 9220  # raw literal, not evaluated
        pass
        # --- L2856 ---
        phase_table[23] = 9224  # raw literal, not evaluated
        pass
        # --- L2860 ---
        phase_table[23] = 9235  # raw literal, not evaluated
        pass
        # --- L2864 ---
        phase_table[23] = 9256  # raw literal, not evaluated
        pass
        # --- L2868 ---
        phase_table[23] = 9283  # raw literal, not evaluated
        pass
        # --- L2872 ---
        phase_table[23] = 9314  # raw literal, not evaluated
        pass
        # --- L2876 ---
        phase_table[23] = 9343  # raw literal, not evaluated
        pass
        # --- L2880 ---
        phase_table[23] = 9373  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2900 ---
        phase_table[24] = 9388  # raw literal, not evaluated
        switch(5):
            case 1: goto L2906
            case 2: goto L2912
            case 3: goto L2918
            case 4: goto L2924
            case 5: goto L2930
            case 6: goto L2936
            case 7: goto L2942
            case 8: goto L2948
            case 9: goto L2954
            case 10: goto L2960
            case 11: goto L2966
            case 12: goto L2972
            case 13: goto L2976
            case 14: goto L2980
            case 512: goto L2984
            case 32: goto L2990
            case 64: goto L2996
            case 128: goto L3002
            case 256: goto L3008
            default: goto L3014
        phase_table[24] = 9389  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2912 ---
        phase_table[24] = 9416  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2918 ---
        phase_table[24] = 9442  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2924 ---
        phase_table[24] = 9472  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2930 ---
        phase_table[24] = 9496  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2936 ---
        phase_table[24] = 9521  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2942 ---
        phase_table[24] = 9575  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2948 ---
        phase_table[24] = 9599  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2954 ---
        phase_table[24] = 9654  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2960 ---
        phase_table[24] = 9699  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2966 ---
        phase_table[24] = 9750  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2972 ---
        phase_table[24] = 9833  # raw literal, not evaluated
        pass
        # --- L2976 ---
        phase_table[24] = 9897  # raw literal, not evaluated
        pass
        # --- L2980 ---
        phase_table[24] = 9951  # raw literal, not evaluated
        pass
        # --- L2984 ---
        phase_table[24] = 10023  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2990 ---
        phase_table[24] = 10057  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2996 ---
        phase_table[24] = 10096  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3002 ---
        phase_table[24] = 10135  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3008 ---
        phase_table[24] = 10176  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3014 ---
        phase_table[24] = 10216  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3058 ---
        system_message(10255 /*" þ"*/)
        # --- L3060 ---
        pass
        # --- L3061 ---
        if not (((var[18] & 512) > 0)):
            goto L3070
        # else: falls through here, rejoins L3070
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3070 ---
        pass
        # --- L3071 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3074
            case 64: goto L3080
            case 128: goto L3086
            case 256: goto L3092
            default: goto L3098
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L3080 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L3086 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L3092 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L3098 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3115 ---
        pass
        # --- L3116 ---
        if not ((var[54] > 0)):
            goto L3395
        # else: falls through here, rejoins L3400
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        var[77] = random_below(100)
        if not (((var[7] == 0) and (var[77] < 4))):
            goto L3395
        # else: falls through here, rejoins L3395
        var[7] = (var[7] + 1)
        phase_table[25] = 10273  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3141
            case 1: goto L3145
            case 2: goto L3149
            case 7: goto L3153
            default: goto L3157
        phase_table[25] = 10274  # raw literal, not evaluated
        pass
        # --- L3145 ---
        phase_table[25] = 10309  # raw literal, not evaluated
        pass
        # --- L3149 ---
        phase_table[25] = 10336  # raw literal, not evaluated
        pass
        # --- L3153 ---
        phase_table[25] = 10375  # raw literal, not evaluated
        pass
        # --- L3157 ---
        phase_table[25] = 10403  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3171 ---
        phase_table[26] = 10456  # raw literal, not evaluated
        var[78] = random_below(4)
        if not (((random_below(1) != 7) and (var[78] >= 3))):
            goto L3184
        # else: falls through here, rejoins L3184
        var[78] = random_below(3)
        # --- L3184 ---
        switch(var[78]):
            case 0: goto L3187
            case 1: goto L3191
            case 3: goto L3195
            case 4: goto L3199
            case 5: goto L3203
            case 6: goto L3207
            case 7: goto L3211
            default: goto L3215
        phase_table[26] = 10457  # raw literal, not evaluated
        pass
        # --- L3191 ---
        phase_table[26] = 10461  # raw literal, not evaluated
        pass
        # --- L3195 ---
        phase_table[26] = 10472  # raw literal, not evaluated
        pass
        # --- L3199 ---
        phase_table[26] = 10493  # raw literal, not evaluated
        pass
        # --- L3203 ---
        phase_table[26] = 10520  # raw literal, not evaluated
        pass
        # --- L3207 ---
        phase_table[26] = 10551  # raw literal, not evaluated
        pass
        # --- L3211 ---
        phase_table[26] = 10580  # raw literal, not evaluated
        pass
        # --- L3215 ---
        phase_table[26] = 10610  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3235 ---
        phase_table[27] = 10625  # raw literal, not evaluated
        switch(6):
            case 1: goto L3241
            case 2: goto L3247
            case 3: goto L3253
            case 4: goto L3259
            case 5: goto L3265
            case 6: goto L3271
            case 7: goto L3277
            case 8: goto L3283
            case 9: goto L3289
            case 10: goto L3295
            case 11: goto L3301
            case 12: goto L3307
            case 13: goto L3311
            case 14: goto L3315
            case 512: goto L3319
            case 32: goto L3325
            case 64: goto L3331
            case 128: goto L3337
            case 256: goto L3343
            default: goto L3349
        phase_table[27] = 10626  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3247 ---
        phase_table[27] = 10653  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3253 ---
        phase_table[27] = 10679  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3259 ---
        phase_table[27] = 10709  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3265 ---
        phase_table[27] = 10733  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3271 ---
        phase_table[27] = 10758  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3277 ---
        phase_table[27] = 10812  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3283 ---
        phase_table[27] = 10836  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3289 ---
        phase_table[27] = 10891  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3295 ---
        phase_table[27] = 10936  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3301 ---
        phase_table[27] = 10987  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3307 ---
        phase_table[27] = 11070  # raw literal, not evaluated
        pass
        # --- L3311 ---
        phase_table[27] = 11134  # raw literal, not evaluated
        pass
        # --- L3315 ---
        phase_table[27] = 11188  # raw literal, not evaluated
        pass
        # --- L3319 ---
        phase_table[27] = 11260  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3325 ---
        phase_table[27] = 11294  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3331 ---
        phase_table[27] = 11333  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3337 ---
        phase_table[27] = 11372  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3343 ---
        phase_table[27] = 11413  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3349 ---
        phase_table[27] = 11453  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3393 ---
        system_message(11492 /*" þ"*/)
        # --- L3395 ---
        move_unit(unit[9], priority=0, dest_type=0, dest_arg=0)
        # --- L3400 ---
        pass
        # --- L3401 ---
        if not ((set_unit_behavior(7, 9) != 3)):
            goto L3410
        # else: falls through here, rejoins L3410
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3410 ---
        pass
        # --- L3411 ---
        if not ((((var[18] & 7136) == 0) and (var[54] == 0))):
            goto L3784
        # else: falls through here, rejoins L3808
        var[80] = random_below(100)
        if not (((var[7] == 0) and (var[80] < 4))):
            goto L3685
        # else: falls through here, rejoins L3685
        var[7] = (var[7] + 1)
        phase_table[28] = 11510  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3431
            case 1: goto L3435
            case 2: goto L3439
            case 7: goto L3443
            default: goto L3447
        phase_table[28] = 11511  # raw literal, not evaluated
        pass
        # --- L3435 ---
        phase_table[28] = 11546  # raw literal, not evaluated
        pass
        # --- L3439 ---
        phase_table[28] = 11573  # raw literal, not evaluated
        pass
        # --- L3443 ---
        phase_table[28] = 11612  # raw literal, not evaluated
        pass
        # --- L3447 ---
        phase_table[28] = 11640  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3461 ---
        phase_table[29] = 11693  # raw literal, not evaluated
        var[81] = random_below(4)
        if not (((random_below(1) != 7) and (var[81] >= 3))):
            goto L3474
        # else: falls through here, rejoins L3474
        var[81] = random_below(3)
        # --- L3474 ---
        switch(var[81]):
            case 0: goto L3477
            case 1: goto L3481
            case 3: goto L3485
            case 4: goto L3489
            case 5: goto L3493
            case 6: goto L3497
            case 7: goto L3501
            default: goto L3505
        phase_table[29] = 11694  # raw literal, not evaluated
        pass
        # --- L3481 ---
        phase_table[29] = 11698  # raw literal, not evaluated
        pass
        # --- L3485 ---
        phase_table[29] = 11709  # raw literal, not evaluated
        pass
        # --- L3489 ---
        phase_table[29] = 11730  # raw literal, not evaluated
        pass
        # --- L3493 ---
        phase_table[29] = 11757  # raw literal, not evaluated
        pass
        # --- L3497 ---
        phase_table[29] = 11788  # raw literal, not evaluated
        pass
        # --- L3501 ---
        phase_table[29] = 11817  # raw literal, not evaluated
        pass
        # --- L3505 ---
        phase_table[29] = 11847  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3525 ---
        phase_table[30] = 11862  # raw literal, not evaluated
        switch(7):
            case 1: goto L3531
            case 2: goto L3537
            case 3: goto L3543
            case 4: goto L3549
            case 5: goto L3555
            case 6: goto L3561
            case 7: goto L3567
            case 8: goto L3573
            case 9: goto L3579
            case 10: goto L3585
            case 11: goto L3591
            case 12: goto L3597
            case 13: goto L3601
            case 14: goto L3605
            case 512: goto L3609
            case 32: goto L3615
            case 64: goto L3621
            case 128: goto L3627
            case 256: goto L3633
            default: goto L3639
        phase_table[30] = 11863  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3537 ---
        phase_table[30] = 11890  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3543 ---
        phase_table[30] = 11916  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3549 ---
        phase_table[30] = 11946  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3555 ---
        phase_table[30] = 11970  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3561 ---
        phase_table[30] = 11995  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3567 ---
        phase_table[30] = 12049  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3573 ---
        phase_table[30] = 12073  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3579 ---
        phase_table[30] = 12128  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3585 ---
        phase_table[30] = 12173  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3591 ---
        phase_table[30] = 12224  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3597 ---
        phase_table[30] = 12307  # raw literal, not evaluated
        pass
        # --- L3601 ---
        phase_table[30] = 12371  # raw literal, not evaluated
        pass
        # --- L3605 ---
        phase_table[30] = 12425  # raw literal, not evaluated
        pass
        # --- L3609 ---
        phase_table[30] = 12497  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3615 ---
        phase_table[30] = 12531  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3621 ---
        phase_table[30] = 12570  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3627 ---
        phase_table[30] = 12609  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3633 ---
        phase_table[30] = 12650  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3639 ---
        phase_table[30] = 12690  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3683 ---
        system_message(12729 /*" þ"*/)
        # --- L3685 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3688
            case 64: goto L3706
            case 128: goto L3724
            case 256: goto L3742
            default: goto L3760
        if not (group_condition_ref(1, 9)):
            goto L3696
        # else: falls through here, rejoins L3696
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3696 ---
        condition[1] = Condition(var_ref=1, expr_offset=3078)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L3706 ---
        if not (group_condition_ref(2, 9)):
            goto L3714
        # else: falls through here, rejoins L3714
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3714 ---
        condition[2] = Condition(var_ref=2, expr_offset=3099)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L3724 ---
        if not (group_condition_ref(3, 9)):
            goto L3732
        # else: falls through here, rejoins L3732
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3732 ---
        condition[3] = Condition(var_ref=3, expr_offset=3120)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L3742 ---
        if not (group_condition_ref(4, 9)):
            goto L3750
        # else: falls through here, rejoins L3750
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3750 ---
        condition[4] = Condition(var_ref=4, expr_offset=3141)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L3760 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3777 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L3784
        # else: falls through here, rejoins L3784
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L3784 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L3799
        # else: falls through here, rejoins L3808
        timer[1] = current_turn + 2
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[58], dest_type=0, dest_arg=0)
        # --- L3799 ---
        if not (timer_expired(1)):
            goto L3808
        # else: falls through here, rejoins L3808
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3808 ---
        pass
        # --- L3809 ---
        pass
        # --- L3810 ---
        if not ((set_unit_behavior(7, 9) != 4)):
            goto L4089
        # else: falls through here, rejoins L4104
        var[83] = random_below(100)
        if not (((var[7] == 0) and (var[83] < 4))):
            goto L4084
        # else: falls through here, rejoins L4084
        var[7] = (var[7] + 1)
        phase_table[31] = 12747  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3830
            case 1: goto L3834
            case 2: goto L3838
            case 7: goto L3842
            default: goto L3846
        phase_table[31] = 12748  # raw literal, not evaluated
        pass
        # --- L3834 ---
        phase_table[31] = 12783  # raw literal, not evaluated
        pass
        # --- L3838 ---
        phase_table[31] = 12810  # raw literal, not evaluated
        pass
        # --- L3842 ---
        phase_table[31] = 12849  # raw literal, not evaluated
        pass
        # --- L3846 ---
        phase_table[31] = 12877  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3860 ---
        phase_table[32] = 12930  # raw literal, not evaluated
        var[84] = random_below(4)
        if not (((random_below(1) != 7) and (var[84] >= 3))):
            goto L3873
        # else: falls through here, rejoins L3873
        var[84] = random_below(3)
        # --- L3873 ---
        switch(var[84]):
            case 0: goto L3876
            case 1: goto L3880
            case 3: goto L3884
            case 4: goto L3888
            case 5: goto L3892
            case 6: goto L3896
            case 7: goto L3900
            default: goto L3904
        phase_table[32] = 12931  # raw literal, not evaluated
        pass
        # --- L3880 ---
        phase_table[32] = 12935  # raw literal, not evaluated
        pass
        # --- L3884 ---
        phase_table[32] = 12946  # raw literal, not evaluated
        pass
        # --- L3888 ---
        phase_table[32] = 12967  # raw literal, not evaluated
        pass
        # --- L3892 ---
        phase_table[32] = 12994  # raw literal, not evaluated
        pass
        # --- L3896 ---
        phase_table[32] = 13025  # raw literal, not evaluated
        pass
        # --- L3900 ---
        phase_table[32] = 13054  # raw literal, not evaluated
        pass
        # --- L3904 ---
        phase_table[32] = 13084  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3924 ---
        phase_table[33] = 13099  # raw literal, not evaluated
        switch(9):
            case 1: goto L3930
            case 2: goto L3936
            case 3: goto L3942
            case 4: goto L3948
            case 5: goto L3954
            case 6: goto L3960
            case 7: goto L3966
            case 8: goto L3972
            case 9: goto L3978
            case 10: goto L3984
            case 11: goto L3990
            case 12: goto L3996
            case 13: goto L4000
            case 14: goto L4004
            case 512: goto L4008
            case 32: goto L4014
            case 64: goto L4020
            case 128: goto L4026
            case 256: goto L4032
            default: goto L4038
        phase_table[33] = 13100  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3936 ---
        phase_table[33] = 13127  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3942 ---
        phase_table[33] = 13153  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3948 ---
        phase_table[33] = 13183  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3954 ---
        phase_table[33] = 13207  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3960 ---
        phase_table[33] = 13232  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3966 ---
        phase_table[33] = 13286  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3972 ---
        phase_table[33] = 13310  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3978 ---
        phase_table[33] = 13365  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3984 ---
        phase_table[33] = 13410  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3990 ---
        phase_table[33] = 13461  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3996 ---
        phase_table[33] = 13544  # raw literal, not evaluated
        pass
        # --- L4000 ---
        phase_table[33] = 13608  # raw literal, not evaluated
        pass
        # --- L4004 ---
        phase_table[33] = 13662  # raw literal, not evaluated
        pass
        # --- L4008 ---
        phase_table[33] = 13734  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4014 ---
        phase_table[33] = 13768  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4020 ---
        phase_table[33] = 13807  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4026 ---
        phase_table[33] = 13846  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4032 ---
        phase_table[33] = 13887  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4038 ---
        phase_table[33] = 13927  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4082 ---
        system_message(13966 /*" þ"*/)
        # --- L4084 ---
        move_unit(unit[9], priority=4, dest_type=3, dest_arg=10)
        # --- L4089 ---
        var[86] = set_unit_behavior(10, 9)
        unit[11] = var[86]
        if not (group_condition(11)):
            goto L4104
        # else: falls through here, rejoins L4104
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L4104 ---
        pass
        # --- L4105 ---
        pass
        # --- L4106 ---
        if not ((((var[18] & 7136) == 0) & (var[54] == 0))):
            goto L4479
        # else: falls through here, rejoins L4491
        var[87] = random_below(100)
        if not (((var[7] == 0) and (var[87] < 4))):
            goto L4380
        # else: falls through here, rejoins L4380
        var[7] = (var[7] + 1)
        phase_table[34] = 13984  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4126
            case 1: goto L4130
            case 2: goto L4134
            case 7: goto L4138
            default: goto L4142
        phase_table[34] = 13985  # raw literal, not evaluated
        pass
        # --- L4130 ---
        phase_table[34] = 14020  # raw literal, not evaluated
        pass
        # --- L4134 ---
        phase_table[34] = 14047  # raw literal, not evaluated
        pass
        # --- L4138 ---
        phase_table[34] = 14086  # raw literal, not evaluated
        pass
        # --- L4142 ---
        phase_table[34] = 14114  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4156 ---
        phase_table[35] = 14167  # raw literal, not evaluated
        var[88] = random_below(4)
        if not (((random_below(1) != 7) and (var[88] >= 3))):
            goto L4169
        # else: falls through here, rejoins L4169
        var[88] = random_below(3)
        # --- L4169 ---
        switch(var[88]):
            case 0: goto L4172
            case 1: goto L4176
            case 3: goto L4180
            case 4: goto L4184
            case 5: goto L4188
            case 6: goto L4192
            case 7: goto L4196
            default: goto L4200
        phase_table[35] = 14168  # raw literal, not evaluated
        pass
        # --- L4176 ---
        phase_table[35] = 14172  # raw literal, not evaluated
        pass
        # --- L4180 ---
        phase_table[35] = 14183  # raw literal, not evaluated
        pass
        # --- L4184 ---
        phase_table[35] = 14204  # raw literal, not evaluated
        pass
        # --- L4188 ---
        phase_table[35] = 14231  # raw literal, not evaluated
        pass
        # --- L4192 ---
        phase_table[35] = 14262  # raw literal, not evaluated
        pass
        # --- L4196 ---
        phase_table[35] = 14291  # raw literal, not evaluated
        pass
        # --- L4200 ---
        phase_table[35] = 14321  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4220 ---
        phase_table[36] = 14336  # raw literal, not evaluated
        switch(7):
            case 1: goto L4226
            case 2: goto L4232
            case 3: goto L4238
            case 4: goto L4244
            case 5: goto L4250
            case 6: goto L4256
            case 7: goto L4262
            case 8: goto L4268
            case 9: goto L4274
            case 10: goto L4280
            case 11: goto L4286
            case 12: goto L4292
            case 13: goto L4296
            case 14: goto L4300
            case 512: goto L4304
            case 32: goto L4310
            case 64: goto L4316
            case 128: goto L4322
            case 256: goto L4328
            default: goto L4334
        phase_table[36] = 14337  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4232 ---
        phase_table[36] = 14364  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4238 ---
        phase_table[36] = 14390  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4244 ---
        phase_table[36] = 14420  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4250 ---
        phase_table[36] = 14444  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4256 ---
        phase_table[36] = 14469  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4262 ---
        phase_table[36] = 14523  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4268 ---
        phase_table[36] = 14547  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4274 ---
        phase_table[36] = 14602  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4280 ---
        phase_table[36] = 14647  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4286 ---
        phase_table[36] = 14698  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4292 ---
        phase_table[36] = 14781  # raw literal, not evaluated
        pass
        # --- L4296 ---
        phase_table[36] = 14845  # raw literal, not evaluated
        pass
        # --- L4300 ---
        phase_table[36] = 14899  # raw literal, not evaluated
        pass
        # --- L4304 ---
        phase_table[36] = 14971  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4310 ---
        phase_table[36] = 15005  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4316 ---
        phase_table[36] = 15044  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4322 ---
        phase_table[36] = 15083  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4328 ---
        phase_table[36] = 15124  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4334 ---
        phase_table[36] = 15164  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4378 ---
        system_message(15203 /*" þ\""*/)
        # --- L4380 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L4383
            case 64: goto L4401
            case 128: goto L4419
            case 256: goto L4437
            default: goto L4455
        if not (group_condition_ref(1, 9)):
            goto L4391
        # else: falls through here, rejoins L4391
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4391 ---
        condition[1] = Condition(var_ref=1, expr_offset=3574)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L4401 ---
        if not (group_condition_ref(2, 9)):
            goto L4409
        # else: falls through here, rejoins L4409
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4409 ---
        condition[2] = Condition(var_ref=2, expr_offset=3595)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L4419 ---
        if not (group_condition_ref(3, 9)):
            goto L4427
        # else: falls through here, rejoins L4427
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4427 ---
        condition[3] = Condition(var_ref=3, expr_offset=3616)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L4437 ---
        if not (group_condition_ref(4, 9)):
            goto L4445
        # else: falls through here, rejoins L4445
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4445 ---
        condition[4] = Condition(var_ref=4, expr_offset=3637)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L4455 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4472 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L4479
        # else: falls through here, rejoins L4479
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L4479 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L4491
        # else: falls through here, rejoins L4491
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[58], dest_type=0, dest_arg=0)
        # --- L4491 ---
        pass
        # --- L4492 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L4520 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1374
        # --- L4525 ---
        if not ((((not all_group_alive(2)) and (not var[6])) and stat(0))):
            goto L4534
        # else: falls through here, rejoins L4534
        system_message(15221 /*"Cybrid threat eliminated."*/)
        var[6] = 1
        # --- L4534 ---
        var[90] = 0
        var[91] = 0
        var[92] = 0
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4618
        # --- L4549 ---
        var[93] = set_unit_behavior(10, 1)
        switch(var[93]):
            case 1: goto L4555
            case 2: goto L4559
            case 3: goto L4563
            case 4: goto L4567
            case 5: goto L4571
            case 6: goto L4575
            case 7: goto L4579
            case 8: goto L4583
            default: goto L4587
        var[92] = 1
        pass
        # --- L4559 ---
        var[92] = 2
        pass
        # --- L4563 ---
        var[92] = 4
        pass
        # --- L4567 ---
        var[92] = 8
        pass
        # --- L4571 ---
        var[92] = 16
        pass
        # --- L4575 ---
        var[92] = 32
        pass
        # --- L4579 ---
        var[92] = 64
        pass
        # --- L4583 ---
        var[92] = 128
        pass
        # --- L4587 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4606 ---
        if not (((var[90] & var[92]) == 0)):
            goto L4613
        # else: falls through here, rejoins L4613
        var[90] = (var[90] + var[92])
        # --- L4613 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L4549
        # --- L4618 ---
        if not ((var[90] < var[9])):
            goto L4764
        # else: falls through here, rejoins L4764
        var[94] = (var[9] - var[90])
        var[95] = 0
        var[96] = 0
        while (var[95] < var[10]):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4699
        # --- L4634 ---
        switch(var[95]):
            case 1: goto L4637
            case 2: goto L4641
            case 3: goto L4645
            case 4: goto L4649
            case 5: goto L4653
            case 6: goto L4657
            case 7: goto L4661
            case 8: goto L4665
            default: goto L4669
        var[96] = 1
        pass
        # --- L4641 ---
        var[96] = 2
        pass
        # --- L4645 ---
        var[96] = 4
        pass
        # --- L4649 ---
        var[96] = 8
        pass
        # --- L4653 ---
        var[96] = 16
        pass
        # --- L4657 ---
        var[96] = 32
        pass
        # --- L4661 ---
        var[96] = 64
        pass
        # --- L4665 ---
        var[96] = 128
        pass
        # --- L4669 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4688 ---
        if not (((var[96] & var[9]) > (var[96] & var[90]))):
            goto L4694
        # else: falls through here, rejoins L4694
        system_message(15247 /*"Player üû"*/)
        # --- L4694 ---
        var[95] = (var[95] + 1)
        goto L4634
        # --- L4699 ---
        var[9] = var[90]
        switch(var[12]):
            case 1: goto L4705
            case 2: goto L4709
            case 3: goto L4713
            case 4: goto L4717
            case 5: goto L4721
            case 6: goto L4725
            case 7: goto L4729
            case 8: goto L4733
            default: goto L4737
        var[96] = 1
        pass
        # --- L4709 ---
        var[96] = 2
        pass
        # --- L4713 ---
        var[96] = 4
        pass
        # --- L4717 ---
        var[96] = 8
        pass
        # --- L4721 ---
        var[96] = 16
        pass
        # --- L4725 ---
        var[96] = 32
        pass
        # --- L4729 ---
        var[96] = 64
        pass
        # --- L4733 ---
        var[96] = 128
        pass
        # --- L4737 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4756 ---
        if not (((var[96] & var[9]) == 0)):
            goto L4764
        # else: falls through here, rejoins L4764
        var[13] = 2
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4764 ---
        var[3] = 0
        var[97] = 0
        unit[2] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 2):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4787
        # --- L4776 ---
        var[3] = 1
        var[97] = (var[97] + 1)
        unit[2] = next_unit_in_group(unit[2], group=2)
        goto L4776
        # --- L4787 ---
        if not ((group_condition(3) and (not all_group_alive(2)))):
            goto L4795
        # else: falls through here, rejoins L4795
        var[13] = 3
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4795 ---
        if (var[13] > 0) and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L4800
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4800 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((var[13] == 1)):
                goto L4812
            # else: falls through here, rejoins L4830
            play_sound(35)
            system_message(15269 /*"All immediate threats eliminated. "*/)
            set_unit_objective(unit=1, state=1)
            # --- L4812 ---
            if not ((var[13] == 3)):
                goto L4825
            # else: falls through here, rejoins L4830
            play_sound(35)
            set_unit_objective(unit=1, state=1)
            system_message(15304 /*"The Cybrid forces have been eliminated."*/)
            end_turn(reason=15344)
            goto_phase(3)
            # --- L4825 ---
            system_message(15400 /*"Your mission was a failure."*/)
            set_unit_objective(unit=1, state=2)
            # --- L4830 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
