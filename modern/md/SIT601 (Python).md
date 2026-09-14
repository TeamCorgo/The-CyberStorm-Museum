# SIT601.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = 3
var[4] = 0
var[6] = 0
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    set_unit_objective(unit=1, state=2)
    if not ((var[9] == 0)):
        goto L20
    # else: falls through here, rejoins L20
    var[9] = (random_below(var[21]) + var[22])
    # --- L20 ---
    var[14] = stat(9)
    var[12] = (stat(8) - 1)
    var[13] = stat(10)
    var[17] = ((13 - var[12]) - var[13])
    if not ((var[17] < 0)):
        goto L39
    # else: falls through here, rejoins L39
    var[17] = 0
    # --- L39 ---
    var[23] = 1
    var[24] = 1
    while (var[23] <= var[12]):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L110
    # --- L48 ---
    switch(var[23]):
        case 1: goto L51
        case 2: goto L55
        case 3: goto L59
        case 4: goto L63
        case 5: goto L67
        case 6: goto L71
        case 7: goto L75
        case 8: goto L79
        default: goto L83
    var[24] = 1
    pass
    # --- L55 ---
    var[24] = 2
    pass
    # --- L59 ---
    var[24] = 4
    pass
    # --- L63 ---
    var[24] = 8
    pass
    # --- L67 ---
    var[24] = 16
    pass
    # --- L71 ---
    var[24] = 32
    pass
    # --- L75 ---
    var[24] = 64
    pass
    # --- L79 ---
    var[24] = 128
    pass
    # --- L83 ---
    pass
    # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
    # --- L102 ---
    var[10] = (var[10] + var[24])
    var[23] = (var[23] + 1)
    goto L48
    # --- L110 ---
    var[25] = (((360 / var[12]) * var[14]) + (var[12] + (var[13] * 2)))
    var[26] = ((31 - var[17]) - 3)
    hex[8] = hex_along_path(toward=var[26], steps=(var[25] - 180))
    var[27] = stat(7)
    var[28] = random_below((var[12] - 1))
    var[29] = (var[28] + 1)
    var[30] = (((360 / var[12]) * var[28]) + (var[12] + (var[13] * 2)))
    var[31] = (((360 / var[12]) * var[29]) + (var[12] + (var[13] * 2)))
    var[32] = ((var[30] + var[31]) / 2)
    var[33] = 1
    hex[10] = (0, 0)
    var[36] = set_objective_at_hex(6)
    while (var[33] <= var[12]):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L224
    # --- L151 ---
    var[37] = random_below(180)
    var[35] = var[26]
    var[34] = (((360 / var[12]) * var[33]) + (var[12] + (var[13] * 2)))
    if not ((var[12] == 2)):
        goto L167
    # else: falls through here, rejoins L167
    var[34] = ((var[34] - 90) + var[37])
    # --- L167 ---
    if not ((var[12] == 3)):
        goto L174
    # else: falls through here, rejoins L174
    var[34] = ((var[34] - 60) + (var[37] / 2))
    # --- L174 ---
    hex[9] = hex_along_path(toward=var[35], steps=(var[34] - 180))
    if not ((var[27] == 1)):
        goto L208
    # else: falls through here, rejoins L219
    if not ((var[33] == var[14])):
        goto L197
    # else: falls through here, rejoins L208
    unit[7] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[33], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[36]) - 1), 6, 8, 50)
    # --- L197 ---
    unit[6] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[33], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[36]) - 1), 6, 8, 50)
    # --- L208 ---
    unit[6] = spawn_unit(type=31 /*stationary structure/turret*/, min_weapon_range=var[33], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[36]) - 1), 6, 8, 50)
    # --- L219 ---
    var[33] = (var[33] + 1)
    goto L151
    # --- L224 ---
    if not ((var[9] == 0)):
        goto L231
    # else: falls through here, rejoins L231
    var[9] = (random_below(var[38]) + var[39])
    # --- L231 ---
    var[19] = (stat(0) / 1)
    var[19] = (var[19] - 200)
    var[23] = 8192
    while (var[23] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L255
    # --- L243 ---
    if not ((var[19] < var[23])):
        goto L250
    # else: falls through here, rejoins L250
    var[17] = (var[17] + 1)
    # --- L250 ---
    var[23] = (var[23] / 3)
    goto L243
    # --- L255 ---
    if not ((var[19] > 50)):
        goto L276
    # else: falls through here, rejoins L279
    var[18] = (var[19] / 4)
    if not ((var[18] < 50)):
        goto L269
    # else: falls through here, rejoins L276
    var[18] = 50
    # --- L269 ---
    if not ((var[18] > 1200)):
        goto L276
    # else: falls through here, rejoins L276
    var[18] = 1200
    # --- L276 ---
    var[18] = var[19]
    # --- L279 ---
    var[19] = (var[19] - var[18])
    var[40] = 0
    var[41] = 12
    var[42] = 27
    var[43] = 45
    var[44] = 90
    if not ((var[41] > (var[17] + 5))):
        goto L304
    # else: falls through here, rejoins L307
    var[41] = (var[41] - var[17])
    # --- L304 ---
    var[41] = 5
    # --- L307 ---
    if not ((var[42] > (var[17] + 10))):
        goto L314
    # else: falls through here, rejoins L317
    var[42] = (var[42] - var[17])
    # --- L314 ---
    var[42] = 10
    # --- L317 ---
    if not ((var[12] == 1)):
        goto L324
    # else: falls through here, rejoins L324
    var[32] = ((var[34] - 60) + random_below(90))
    # --- L324 ---
    if not ((var[40] == 0)):
        goto L331
    # else: falls through here, rejoins L331
    var[40] = (var[41] + random_below((var[42] - var[41])))
    # --- L331 ---
    if not ((var[32] == 0)):
        goto L338
    # else: falls through here, rejoins L338
    var[32] = ((random_below(var[44]) + var[43]) - (var[44] / 2))
    # --- L338 ---
    hex[5] = hex_along_path(toward=var[40], steps=var[32])
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00b7] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[16] = 0
        if not (timer_expired(2)):
            goto L4516
        # else: falls through here, rejoins L4516
        timer[2] = current_turn + 1
        var[8] = 0
        if not (group_all_alive(7)):
            goto L1001
        # else: falls through here, rejoins L1001
        var[56] = 0
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1296
        # --- L1010 ---
        if not ((set_unit_behavior(9, 9) > 0)):
            goto L1291
        # else: falls through here, rejoins L1291
        var[57] = random_below(100)
        if not (((var[8] == 0) and (var[57] < 4))):
            goto L1284
        # else: falls through here, rejoins L1284
        var[8] = (var[8] + 1)
        phase_table[4] = 1572  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1030
            case 1: goto L1034
            case 2: goto L1038
            case 7: goto L1042
            default: goto L1046
        phase_table[4] = 1573  # raw literal, not evaluated
        pass
        # --- L1034 ---
        phase_table[4] = 1608  # raw literal, not evaluated
        pass
        # --- L1038 ---
        phase_table[4] = 1635  # raw literal, not evaluated
        pass
        # --- L1042 ---
        phase_table[4] = 1674  # raw literal, not evaluated
        pass
        # --- L1046 ---
        phase_table[4] = 1702  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1060 ---
        phase_table[5] = 1755  # raw literal, not evaluated
        var[58] = random_below(1)
        if not (((random_below(4) != 7) and (var[58] >= 3))):
            goto L1073
        # else: falls through here, rejoins L1073
        var[58] = random_below(3)
        # --- L1073 ---
        switch(var[58]):
            case 0: goto L1076
            case 1: goto L1080
            case 3: goto L1084
            case 4: goto L1088
            case 5: goto L1092
            case 6: goto L1096
            case 7: goto L1100
            default: goto L1104
        phase_table[5] = 1756  # raw literal, not evaluated
        pass
        # --- L1080 ---
        phase_table[5] = 1760  # raw literal, not evaluated
        pass
        # --- L1084 ---
        phase_table[5] = 1771  # raw literal, not evaluated
        pass
        # --- L1088 ---
        phase_table[5] = 1792  # raw literal, not evaluated
        pass
        # --- L1092 ---
        phase_table[5] = 1819  # raw literal, not evaluated
        pass
        # --- L1096 ---
        phase_table[5] = 1850  # raw literal, not evaluated
        pass
        # --- L1100 ---
        phase_table[5] = 1879  # raw literal, not evaluated
        pass
        # --- L1104 ---
        phase_table[5] = 1909  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1124 ---
        phase_table[6] = 1924  # raw literal, not evaluated
        switch(10):
            case 1: goto L1130
            case 2: goto L1136
            case 3: goto L1142
            case 4: goto L1148
            case 5: goto L1154
            case 6: goto L1160
            case 7: goto L1166
            case 8: goto L1172
            case 9: goto L1178
            case 10: goto L1184
            case 11: goto L1190
            case 12: goto L1196
            case 13: goto L1200
            case 14: goto L1204
            case 512: goto L1208
            case 32: goto L1214
            case 64: goto L1220
            case 128: goto L1226
            case 256: goto L1232
            default: goto L1238
        phase_table[6] = 1925  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1136 ---
        phase_table[6] = 1952  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1142 ---
        phase_table[6] = 1978  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1148 ---
        phase_table[6] = 2008  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1154 ---
        phase_table[6] = 2032  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1160 ---
        phase_table[6] = 2057  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1166 ---
        phase_table[6] = 2111  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1172 ---
        phase_table[6] = 2135  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1178 ---
        phase_table[6] = 2190  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1184 ---
        phase_table[6] = 2235  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1190 ---
        phase_table[6] = 2286  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1196 ---
        phase_table[6] = 2369  # raw literal, not evaluated
        pass
        # --- L1200 ---
        phase_table[6] = 2433  # raw literal, not evaluated
        pass
        # --- L1204 ---
        phase_table[6] = 2487  # raw literal, not evaluated
        pass
        # --- L1208 ---
        phase_table[6] = 2559  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1214 ---
        phase_table[6] = 2593  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1220 ---
        phase_table[6] = 2632  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1226 ---
        phase_table[6] = 2671  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1232 ---
        phase_table[6] = 2712  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1238 ---
        phase_table[6] = 2752  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1282 ---
        system_message(2791 /*" þ"*/)
        # --- L1284 ---
        if not (((set_unit_behavior(8, 9) & var[20]) == 0)):
            goto L1291
        # else: falls through here, rejoins L1291
        var[20] = (var[20] + (set_unit_behavior(8, 9) & 7136))
        # --- L1291 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1010
        # --- L1296 ---
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1330
        # --- L1302 ---
        if not (group_condition_ref_2(7, 2)):
            goto L1309
        # else: falls through here, rejoins L1316
        unit[1].attr8 = 2
        # --- L1309 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1316
        # else: falls through here, rejoins L1316
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1316 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1325
        # else: falls through here, rejoins L1325
        var[56] = (var[56] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0af9] - dead end, not decoded further (other branches continue independently)
        # --- L1325 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L1302
        # --- L1330 ---
        if not (group_condition_ref_2(8, 2)):
            goto L1337
        # else: falls through here, rejoins L1344
        unit[1].attr8 = 2
        # --- L1337 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1344
        # else: falls through here, rejoins L1344
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1344 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1353
        # else: falls through here, rejoins L1353
        var[56] = (var[56] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0b0c] - dead end, not decoded further (other branches continue independently)
        # --- L1353 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        var[60] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4516
        # --- L1365 ---
        if not ((set_unit_behavior(5, 9) < 60)):
            goto L1374
        # else: falls through here, rejoins L4511
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L1374 ---
        switch((set_unit_behavior(8, 9) & 15)):
            case 0: goto L1377
            case 1: goto L1660
            case 2: goto L2493
            case 3: goto L3052
            case 4: goto L3062
            case 5: goto L3107
            case 10: goto L3392
            case 11: goto L3402
            case 12: goto L3800
            case 13: goto L3801
            case 14: goto L4096
            case 15: goto L4097
            default: goto L4483
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L1659
        # else: falls through here, rejoins L1659
        var[61] = random_below(100)
        if not (((var[8] == 0) and (var[61] < 40))):
            goto L1651
        # else: falls through here, rejoins L1651
        var[8] = (var[8] + 1)
        phase_table[7] = 2847  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1397
            case 1: goto L1401
            case 2: goto L1405
            case 7: goto L1409
            default: goto L1413
        phase_table[7] = 2848  # raw literal, not evaluated
        pass
        # --- L1401 ---
        phase_table[7] = 2883  # raw literal, not evaluated
        pass
        # --- L1405 ---
        phase_table[7] = 2910  # raw literal, not evaluated
        pass
        # --- L1409 ---
        phase_table[7] = 2949  # raw literal, not evaluated
        pass
        # --- L1413 ---
        phase_table[7] = 2977  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1427 ---
        phase_table[8] = 3030  # raw literal, not evaluated
        var[62] = random_below(4)
        if not (((random_below(1) != 7) and (var[62] >= 3))):
            goto L1440
        # else: falls through here, rejoins L1440
        var[62] = random_below(3)
        # --- L1440 ---
        switch(var[62]):
            case 0: goto L1443
            case 1: goto L1447
            case 3: goto L1451
            case 4: goto L1455
            case 5: goto L1459
            case 6: goto L1463
            case 7: goto L1467
            default: goto L1471
        phase_table[8] = 3031  # raw literal, not evaluated
        pass
        # --- L1447 ---
        phase_table[8] = 3035  # raw literal, not evaluated
        pass
        # --- L1451 ---
        phase_table[8] = 3046  # raw literal, not evaluated
        pass
        # --- L1455 ---
        phase_table[8] = 3067  # raw literal, not evaluated
        pass
        # --- L1459 ---
        phase_table[8] = 3094  # raw literal, not evaluated
        pass
        # --- L1463 ---
        phase_table[8] = 3125  # raw literal, not evaluated
        pass
        # --- L1467 ---
        phase_table[8] = 3154  # raw literal, not evaluated
        pass
        # --- L1471 ---
        phase_table[8] = 3184  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1491 ---
        phase_table[9] = 3199  # raw literal, not evaluated
        switch(8):
            case 1: goto L1497
            case 2: goto L1503
            case 3: goto L1509
            case 4: goto L1515
            case 5: goto L1521
            case 6: goto L1527
            case 7: goto L1533
            case 8: goto L1539
            case 9: goto L1545
            case 10: goto L1551
            case 11: goto L1557
            case 12: goto L1563
            case 13: goto L1567
            case 14: goto L1571
            case 512: goto L1575
            case 32: goto L1581
            case 64: goto L1587
            case 128: goto L1593
            case 256: goto L1599
            default: goto L1605
        phase_table[9] = 3200  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1503 ---
        phase_table[9] = 3227  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1509 ---
        phase_table[9] = 3253  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1515 ---
        phase_table[9] = 3283  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1521 ---
        phase_table[9] = 3307  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1527 ---
        phase_table[9] = 3332  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1533 ---
        phase_table[9] = 3386  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1539 ---
        phase_table[9] = 3410  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1545 ---
        phase_table[9] = 3465  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1551 ---
        phase_table[9] = 3510  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1557 ---
        phase_table[9] = 3561  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1563 ---
        phase_table[9] = 3644  # raw literal, not evaluated
        pass
        # --- L1567 ---
        phase_table[9] = 3708  # raw literal, not evaluated
        pass
        # --- L1571 ---
        phase_table[9] = 3762  # raw literal, not evaluated
        pass
        # --- L1575 ---
        phase_table[9] = 3834  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1581 ---
        phase_table[9] = 3868  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1587 ---
        phase_table[9] = 3907  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1593 ---
        phase_table[9] = 3946  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1599 ---
        phase_table[9] = 3987  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1605 ---
        phase_table[9] = 4027  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1649 ---
        system_message(4066 /*" þ"*/)
        # --- L1651 ---
        move_unit(unit[9], priority=var[60], dest_type=0, dest_arg=0)
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        # --- L1659 ---
        pass
        # --- L1660 ---
        if not ((group_condition_ref_2(9, 1) or (set_unit_behavior(9, 9) != 0))):
            goto L1943
        # else: falls through here, rejoins L2492
        if not ((set_unit_behavior(7, 9) != 6)):
            goto L1943
        # else: falls through here, rejoins L1943
        var[64] = random_below(100)
        if not (((var[8] == 0) and (var[64] < 40))):
            goto L1938
        # else: falls through here, rejoins L1938
        var[8] = (var[8] + 1)
        phase_table[10] = 4084  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1684
            case 1: goto L1688
            case 2: goto L1692
            case 7: goto L1696
            default: goto L1700
        phase_table[10] = 4085  # raw literal, not evaluated
        pass
        # --- L1688 ---
        phase_table[10] = 4120  # raw literal, not evaluated
        pass
        # --- L1692 ---
        phase_table[10] = 4147  # raw literal, not evaluated
        pass
        # --- L1696 ---
        phase_table[10] = 4186  # raw literal, not evaluated
        pass
        # --- L1700 ---
        phase_table[10] = 4214  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1714 ---
        phase_table[11] = 4267  # raw literal, not evaluated
        var[65] = random_below(4)
        if not (((random_below(1) != 7) and (var[65] >= 3))):
            goto L1727
        # else: falls through here, rejoins L1727
        var[65] = random_below(3)
        # --- L1727 ---
        switch(var[65]):
            case 0: goto L1730
            case 1: goto L1734
            case 3: goto L1738
            case 4: goto L1742
            case 5: goto L1746
            case 6: goto L1750
            case 7: goto L1754
            default: goto L1758
        phase_table[11] = 4268  # raw literal, not evaluated
        pass
        # --- L1734 ---
        phase_table[11] = 4272  # raw literal, not evaluated
        pass
        # --- L1738 ---
        phase_table[11] = 4283  # raw literal, not evaluated
        pass
        # --- L1742 ---
        phase_table[11] = 4304  # raw literal, not evaluated
        pass
        # --- L1746 ---
        phase_table[11] = 4331  # raw literal, not evaluated
        pass
        # --- L1750 ---
        phase_table[11] = 4362  # raw literal, not evaluated
        pass
        # --- L1754 ---
        phase_table[11] = 4391  # raw literal, not evaluated
        pass
        # --- L1758 ---
        phase_table[11] = 4421  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1778 ---
        phase_table[12] = 4436  # raw literal, not evaluated
        switch(3):
            case 1: goto L1784
            case 2: goto L1790
            case 3: goto L1796
            case 4: goto L1802
            case 5: goto L1808
            case 6: goto L1814
            case 7: goto L1820
            case 8: goto L1826
            case 9: goto L1832
            case 10: goto L1838
            case 11: goto L1844
            case 12: goto L1850
            case 13: goto L1854
            case 14: goto L1858
            case 512: goto L1862
            case 32: goto L1868
            case 64: goto L1874
            case 128: goto L1880
            case 256: goto L1886
            default: goto L1892
        phase_table[12] = 4437  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1790 ---
        phase_table[12] = 4464  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1796 ---
        phase_table[12] = 4490  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1802 ---
        phase_table[12] = 4520  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1808 ---
        phase_table[12] = 4544  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1814 ---
        phase_table[12] = 4569  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1820 ---
        phase_table[12] = 4623  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1826 ---
        phase_table[12] = 4647  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1832 ---
        phase_table[12] = 4702  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1838 ---
        phase_table[12] = 4747  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1844 ---
        phase_table[12] = 4798  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1850 ---
        phase_table[12] = 4881  # raw literal, not evaluated
        pass
        # --- L1854 ---
        phase_table[12] = 4945  # raw literal, not evaluated
        pass
        # --- L1858 ---
        phase_table[12] = 4999  # raw literal, not evaluated
        pass
        # --- L1862 ---
        phase_table[12] = 5071  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1868 ---
        phase_table[12] = 5105  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1874 ---
        phase_table[12] = 5144  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1880 ---
        phase_table[12] = 5183  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1886 ---
        phase_table[12] = 5224  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1892 ---
        phase_table[12] = 5264  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1936 ---
        system_message(5303 /*" þ
"*/)
        # --- L1938 ---
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L1943 ---
        if not ((set_unit_behavior(7, 9) != 2)):
            goto L2222
        # else: falls through here, rejoins L2492
        move_unit(unit[9], priority=2, dest_type=0, dest_arg=0)
        var[67] = random_below(100)
        if not (((var[8] == 0) and (var[67] < 4))):
            goto L2222
        # else: falls through here, rejoins L2222
        var[8] = (var[8] + 1)
        phase_table[13] = 5321  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1968
            case 1: goto L1972
            case 2: goto L1976
            case 7: goto L1980
            default: goto L1984
        phase_table[13] = 5322  # raw literal, not evaluated
        pass
        # --- L1972 ---
        phase_table[13] = 5357  # raw literal, not evaluated
        pass
        # --- L1976 ---
        phase_table[13] = 5384  # raw literal, not evaluated
        pass
        # --- L1980 ---
        phase_table[13] = 5423  # raw literal, not evaluated
        pass
        # --- L1984 ---
        phase_table[13] = 5451  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1998 ---
        phase_table[14] = 5504  # raw literal, not evaluated
        var[68] = random_below(4)
        if not (((random_below(1) != 7) and (var[68] >= 3))):
            goto L2011
        # else: falls through here, rejoins L2011
        var[68] = random_below(3)
        # --- L2011 ---
        switch(var[68]):
            case 0: goto L2014
            case 1: goto L2018
            case 3: goto L2022
            case 4: goto L2026
            case 5: goto L2030
            case 6: goto L2034
            case 7: goto L2038
            default: goto L2042
        phase_table[14] = 5505  # raw literal, not evaluated
        pass
        # --- L2018 ---
        phase_table[14] = 5509  # raw literal, not evaluated
        pass
        # --- L2022 ---
        phase_table[14] = 5520  # raw literal, not evaluated
        pass
        # --- L2026 ---
        phase_table[14] = 5541  # raw literal, not evaluated
        pass
        # --- L2030 ---
        phase_table[14] = 5568  # raw literal, not evaluated
        pass
        # --- L2034 ---
        phase_table[14] = 5599  # raw literal, not evaluated
        pass
        # --- L2038 ---
        phase_table[14] = 5628  # raw literal, not evaluated
        pass
        # --- L2042 ---
        phase_table[14] = 5658  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2062 ---
        phase_table[15] = 5673  # raw literal, not evaluated
        switch(2):
            case 1: goto L2068
            case 2: goto L2074
            case 3: goto L2080
            case 4: goto L2086
            case 5: goto L2092
            case 6: goto L2098
            case 7: goto L2104
            case 8: goto L2110
            case 9: goto L2116
            case 10: goto L2122
            case 11: goto L2128
            case 12: goto L2134
            case 13: goto L2138
            case 14: goto L2142
            case 512: goto L2146
            case 32: goto L2152
            case 64: goto L2158
            case 128: goto L2164
            case 256: goto L2170
            default: goto L2176
        phase_table[15] = 5674  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2074 ---
        phase_table[15] = 5701  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2080 ---
        phase_table[15] = 5727  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2086 ---
        phase_table[15] = 5757  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2092 ---
        phase_table[15] = 5781  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2098 ---
        phase_table[15] = 5806  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2104 ---
        phase_table[15] = 5860  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2110 ---
        phase_table[15] = 5884  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2116 ---
        phase_table[15] = 5939  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2122 ---
        phase_table[15] = 5984  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2128 ---
        phase_table[15] = 6035  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2134 ---
        phase_table[15] = 6118  # raw literal, not evaluated
        pass
        # --- L2138 ---
        phase_table[15] = 6182  # raw literal, not evaluated
        pass
        # --- L2142 ---
        phase_table[15] = 6236  # raw literal, not evaluated
        pass
        # --- L2146 ---
        phase_table[15] = 6308  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2152 ---
        phase_table[15] = 6342  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2158 ---
        phase_table[15] = 6381  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2164 ---
        phase_table[15] = 6420  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2170 ---
        phase_table[15] = 6461  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2176 ---
        phase_table[15] = 6501  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2220 ---
        system_message(6540 /*" þ"*/)
        # --- L2222 ---
        var[70] = random_below(100)
        if not (((var[8] == 0) and (var[70] < 4))):
            goto L2492
        # else: falls through here, rejoins L2492
        var[8] = (var[8] + 1)
        phase_table[16] = 6558  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2238
            case 1: goto L2242
            case 2: goto L2246
            case 7: goto L2250
            default: goto L2254
        phase_table[16] = 6559  # raw literal, not evaluated
        pass
        # --- L2242 ---
        phase_table[16] = 6594  # raw literal, not evaluated
        pass
        # --- L2246 ---
        phase_table[16] = 6621  # raw literal, not evaluated
        pass
        # --- L2250 ---
        phase_table[16] = 6660  # raw literal, not evaluated
        pass
        # --- L2254 ---
        phase_table[16] = 6688  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2268 ---
        phase_table[17] = 6741  # raw literal, not evaluated
        var[71] = random_below(4)
        if not (((random_below(1) != 7) and (var[71] >= 3))):
            goto L2281
        # else: falls through here, rejoins L2281
        var[71] = random_below(3)
        # --- L2281 ---
        switch(var[71]):
            case 0: goto L2284
            case 1: goto L2288
            case 3: goto L2292
            case 4: goto L2296
            case 5: goto L2300
            case 6: goto L2304
            case 7: goto L2308
            default: goto L2312
        phase_table[17] = 6742  # raw literal, not evaluated
        pass
        # --- L2288 ---
        phase_table[17] = 6746  # raw literal, not evaluated
        pass
        # --- L2292 ---
        phase_table[17] = 6757  # raw literal, not evaluated
        pass
        # --- L2296 ---
        phase_table[17] = 6778  # raw literal, not evaluated
        pass
        # --- L2300 ---
        phase_table[17] = 6805  # raw literal, not evaluated
        pass
        # --- L2304 ---
        phase_table[17] = 6836  # raw literal, not evaluated
        pass
        # --- L2308 ---
        phase_table[17] = 6865  # raw literal, not evaluated
        pass
        # --- L2312 ---
        phase_table[17] = 6895  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2332 ---
        phase_table[18] = 6910  # raw literal, not evaluated
        switch(1):
            case 1: goto L2338
            case 2: goto L2344
            case 3: goto L2350
            case 4: goto L2356
            case 5: goto L2362
            case 6: goto L2368
            case 7: goto L2374
            case 8: goto L2380
            case 9: goto L2386
            case 10: goto L2392
            case 11: goto L2398
            case 12: goto L2404
            case 13: goto L2408
            case 14: goto L2412
            case 512: goto L2416
            case 32: goto L2422
            case 64: goto L2428
            case 128: goto L2434
            case 256: goto L2440
            default: goto L2446
        phase_table[18] = 6911  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2344 ---
        phase_table[18] = 6938  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2350 ---
        phase_table[18] = 6964  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2356 ---
        phase_table[18] = 6994  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2362 ---
        phase_table[18] = 7018  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2368 ---
        phase_table[18] = 7043  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2374 ---
        phase_table[18] = 7097  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2380 ---
        phase_table[18] = 7121  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2386 ---
        phase_table[18] = 7176  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2392 ---
        phase_table[18] = 7221  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2398 ---
        phase_table[18] = 7272  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2404 ---
        phase_table[18] = 7355  # raw literal, not evaluated
        pass
        # --- L2408 ---
        phase_table[18] = 7419  # raw literal, not evaluated
        pass
        # --- L2412 ---
        phase_table[18] = 7473  # raw literal, not evaluated
        pass
        # --- L2416 ---
        phase_table[18] = 7545  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2422 ---
        phase_table[18] = 7579  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2428 ---
        phase_table[18] = 7618  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2434 ---
        phase_table[18] = 7657  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2440 ---
        phase_table[18] = 7698  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2446 ---
        phase_table[18] = 7738  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2490 ---
        system_message(7777 /*" þ"*/)
        # --- L2492 ---
        pass
        # --- L2493 ---
        if not (((var[20] & 512) > 0)):
            goto L2772
        # else: falls through here, rejoins L3051
        var[73] = random_below(100)
        if not (((var[8] == 0) and (var[73] < 4))):
            goto L2767
        # else: falls through here, rejoins L2767
        var[8] = (var[8] + 1)
        phase_table[19] = 7795  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2513
            case 1: goto L2517
            case 2: goto L2521
            case 7: goto L2525
            default: goto L2529
        phase_table[19] = 7796  # raw literal, not evaluated
        pass
        # --- L2517 ---
        phase_table[19] = 7831  # raw literal, not evaluated
        pass
        # --- L2521 ---
        phase_table[19] = 7858  # raw literal, not evaluated
        pass
        # --- L2525 ---
        phase_table[19] = 7897  # raw literal, not evaluated
        pass
        # --- L2529 ---
        phase_table[19] = 7925  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2543 ---
        phase_table[20] = 7978  # raw literal, not evaluated
        var[74] = random_below(4)
        if not (((random_below(1) != 7) and (var[74] >= 3))):
            goto L2556
        # else: falls through here, rejoins L2556
        var[74] = random_below(3)
        # --- L2556 ---
        switch(var[74]):
            case 0: goto L2559
            case 1: goto L2563
            case 3: goto L2567
            case 4: goto L2571
            case 5: goto L2575
            case 6: goto L2579
            case 7: goto L2583
            default: goto L2587
        phase_table[20] = 7979  # raw literal, not evaluated
        pass
        # --- L2563 ---
        phase_table[20] = 7983  # raw literal, not evaluated
        pass
        # --- L2567 ---
        phase_table[20] = 7994  # raw literal, not evaluated
        pass
        # --- L2571 ---
        phase_table[20] = 8015  # raw literal, not evaluated
        pass
        # --- L2575 ---
        phase_table[20] = 8042  # raw literal, not evaluated
        pass
        # --- L2579 ---
        phase_table[20] = 8073  # raw literal, not evaluated
        pass
        # --- L2583 ---
        phase_table[20] = 8102  # raw literal, not evaluated
        pass
        # --- L2587 ---
        phase_table[20] = 8132  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2607 ---
        phase_table[21] = 8147  # raw literal, not evaluated
        switch(4):
            case 1: goto L2613
            case 2: goto L2619
            case 3: goto L2625
            case 4: goto L2631
            case 5: goto L2637
            case 6: goto L2643
            case 7: goto L2649
            case 8: goto L2655
            case 9: goto L2661
            case 10: goto L2667
            case 11: goto L2673
            case 12: goto L2679
            case 13: goto L2683
            case 14: goto L2687
            case 512: goto L2691
            case 32: goto L2697
            case 64: goto L2703
            case 128: goto L2709
            case 256: goto L2715
            default: goto L2721
        phase_table[21] = 8148  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2619 ---
        phase_table[21] = 8175  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2625 ---
        phase_table[21] = 8201  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2631 ---
        phase_table[21] = 8231  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2637 ---
        phase_table[21] = 8255  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2643 ---
        phase_table[21] = 8280  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2649 ---
        phase_table[21] = 8334  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2655 ---
        phase_table[21] = 8358  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2661 ---
        phase_table[21] = 8413  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2667 ---
        phase_table[21] = 8458  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2673 ---
        phase_table[21] = 8509  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2679 ---
        phase_table[21] = 8592  # raw literal, not evaluated
        pass
        # --- L2683 ---
        phase_table[21] = 8656  # raw literal, not evaluated
        pass
        # --- L2687 ---
        phase_table[21] = 8710  # raw literal, not evaluated
        pass
        # --- L2691 ---
        phase_table[21] = 8782  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2697 ---
        phase_table[21] = 8816  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2703 ---
        phase_table[21] = 8855  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2709 ---
        phase_table[21] = 8894  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2715 ---
        phase_table[21] = 8935  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2721 ---
        phase_table[21] = 8975  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2765 ---
        system_message(9014 /*" þ"*/)
        # --- L2767 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L2772 ---
        if not (((var[20] & 128) > 0)):
            goto L3051
        # else: falls through here, rejoins L3051
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        var[76] = random_below(100)
        if not (((var[8] == 0) and (var[76] < 4))):
            goto L3051
        # else: falls through here, rejoins L3051
        var[8] = (var[8] + 1)
        phase_table[22] = 9032  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2797
            case 1: goto L2801
            case 2: goto L2805
            case 7: goto L2809
            default: goto L2813
        phase_table[22] = 9033  # raw literal, not evaluated
        pass
        # --- L2801 ---
        phase_table[22] = 9068  # raw literal, not evaluated
        pass
        # --- L2805 ---
        phase_table[22] = 9095  # raw literal, not evaluated
        pass
        # --- L2809 ---
        phase_table[22] = 9134  # raw literal, not evaluated
        pass
        # --- L2813 ---
        phase_table[22] = 9162  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2827 ---
        phase_table[23] = 9215  # raw literal, not evaluated
        var[77] = random_below(4)
        if not (((random_below(1) != 7) and (var[77] >= 3))):
            goto L2840
        # else: falls through here, rejoins L2840
        var[77] = random_below(3)
        # --- L2840 ---
        switch(var[77]):
            case 0: goto L2843
            case 1: goto L2847
            case 3: goto L2851
            case 4: goto L2855
            case 5: goto L2859
            case 6: goto L2863
            case 7: goto L2867
            default: goto L2871
        phase_table[23] = 9216  # raw literal, not evaluated
        pass
        # --- L2847 ---
        phase_table[23] = 9220  # raw literal, not evaluated
        pass
        # --- L2851 ---
        phase_table[23] = 9231  # raw literal, not evaluated
        pass
        # --- L2855 ---
        phase_table[23] = 9252  # raw literal, not evaluated
        pass
        # --- L2859 ---
        phase_table[23] = 9279  # raw literal, not evaluated
        pass
        # --- L2863 ---
        phase_table[23] = 9310  # raw literal, not evaluated
        pass
        # --- L2867 ---
        phase_table[23] = 9339  # raw literal, not evaluated
        pass
        # --- L2871 ---
        phase_table[23] = 9369  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2891 ---
        phase_table[24] = 9384  # raw literal, not evaluated
        switch(5):
            case 1: goto L2897
            case 2: goto L2903
            case 3: goto L2909
            case 4: goto L2915
            case 5: goto L2921
            case 6: goto L2927
            case 7: goto L2933
            case 8: goto L2939
            case 9: goto L2945
            case 10: goto L2951
            case 11: goto L2957
            case 12: goto L2963
            case 13: goto L2967
            case 14: goto L2971
            case 512: goto L2975
            case 32: goto L2981
            case 64: goto L2987
            case 128: goto L2993
            case 256: goto L2999
            default: goto L3005
        phase_table[24] = 9385  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2903 ---
        phase_table[24] = 9412  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2909 ---
        phase_table[24] = 9438  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2915 ---
        phase_table[24] = 9468  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2921 ---
        phase_table[24] = 9492  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2927 ---
        phase_table[24] = 9517  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2933 ---
        phase_table[24] = 9571  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2939 ---
        phase_table[24] = 9595  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2945 ---
        phase_table[24] = 9650  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2951 ---
        phase_table[24] = 9695  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2957 ---
        phase_table[24] = 9746  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2963 ---
        phase_table[24] = 9829  # raw literal, not evaluated
        pass
        # --- L2967 ---
        phase_table[24] = 9893  # raw literal, not evaluated
        pass
        # --- L2971 ---
        phase_table[24] = 9947  # raw literal, not evaluated
        pass
        # --- L2975 ---
        phase_table[24] = 10019  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2981 ---
        phase_table[24] = 10053  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2987 ---
        phase_table[24] = 10092  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2993 ---
        phase_table[24] = 10131  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2999 ---
        phase_table[24] = 10172  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3005 ---
        phase_table[24] = 10212  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3049 ---
        system_message(10251 /*" þ"*/)
        # --- L3051 ---
        pass
        # --- L3052 ---
        if not (((var[20] & 512) > 0)):
            goto L3061
        # else: falls through here, rejoins L3061
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3061 ---
        pass
        # --- L3062 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3065
            case 64: goto L3071
            case 128: goto L3077
            case 256: goto L3083
            default: goto L3089
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L3071 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L3077 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L3083 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L3089 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3106 ---
        pass
        # --- L3107 ---
        if not ((var[56] > 0)):
            goto L3386
        # else: falls through here, rejoins L3391
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        var[79] = random_below(100)
        if not (((var[8] == 0) and (var[79] < 4))):
            goto L3386
        # else: falls through here, rejoins L3386
        var[8] = (var[8] + 1)
        phase_table[25] = 10269  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3132
            case 1: goto L3136
            case 2: goto L3140
            case 7: goto L3144
            default: goto L3148
        phase_table[25] = 10270  # raw literal, not evaluated
        pass
        # --- L3136 ---
        phase_table[25] = 10305  # raw literal, not evaluated
        pass
        # --- L3140 ---
        phase_table[25] = 10332  # raw literal, not evaluated
        pass
        # --- L3144 ---
        phase_table[25] = 10371  # raw literal, not evaluated
        pass
        # --- L3148 ---
        phase_table[25] = 10399  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3162 ---
        phase_table[26] = 10452  # raw literal, not evaluated
        var[80] = random_below(4)
        if not (((random_below(1) != 7) and (var[80] >= 3))):
            goto L3175
        # else: falls through here, rejoins L3175
        var[80] = random_below(3)
        # --- L3175 ---
        switch(var[80]):
            case 0: goto L3178
            case 1: goto L3182
            case 3: goto L3186
            case 4: goto L3190
            case 5: goto L3194
            case 6: goto L3198
            case 7: goto L3202
            default: goto L3206
        phase_table[26] = 10453  # raw literal, not evaluated
        pass
        # --- L3182 ---
        phase_table[26] = 10457  # raw literal, not evaluated
        pass
        # --- L3186 ---
        phase_table[26] = 10468  # raw literal, not evaluated
        pass
        # --- L3190 ---
        phase_table[26] = 10489  # raw literal, not evaluated
        pass
        # --- L3194 ---
        phase_table[26] = 10516  # raw literal, not evaluated
        pass
        # --- L3198 ---
        phase_table[26] = 10547  # raw literal, not evaluated
        pass
        # --- L3202 ---
        phase_table[26] = 10576  # raw literal, not evaluated
        pass
        # --- L3206 ---
        phase_table[26] = 10606  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3226 ---
        phase_table[27] = 10621  # raw literal, not evaluated
        switch(6):
            case 1: goto L3232
            case 2: goto L3238
            case 3: goto L3244
            case 4: goto L3250
            case 5: goto L3256
            case 6: goto L3262
            case 7: goto L3268
            case 8: goto L3274
            case 9: goto L3280
            case 10: goto L3286
            case 11: goto L3292
            case 12: goto L3298
            case 13: goto L3302
            case 14: goto L3306
            case 512: goto L3310
            case 32: goto L3316
            case 64: goto L3322
            case 128: goto L3328
            case 256: goto L3334
            default: goto L3340
        phase_table[27] = 10622  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3238 ---
        phase_table[27] = 10649  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3244 ---
        phase_table[27] = 10675  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3250 ---
        phase_table[27] = 10705  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3256 ---
        phase_table[27] = 10729  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3262 ---
        phase_table[27] = 10754  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3268 ---
        phase_table[27] = 10808  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3274 ---
        phase_table[27] = 10832  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3280 ---
        phase_table[27] = 10887  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3286 ---
        phase_table[27] = 10932  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3292 ---
        phase_table[27] = 10983  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3298 ---
        phase_table[27] = 11066  # raw literal, not evaluated
        pass
        # --- L3302 ---
        phase_table[27] = 11130  # raw literal, not evaluated
        pass
        # --- L3306 ---
        phase_table[27] = 11184  # raw literal, not evaluated
        pass
        # --- L3310 ---
        phase_table[27] = 11256  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3316 ---
        phase_table[27] = 11290  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3322 ---
        phase_table[27] = 11329  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3328 ---
        phase_table[27] = 11368  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3334 ---
        phase_table[27] = 11409  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3340 ---
        phase_table[27] = 11449  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3384 ---
        system_message(11488 /*" þ"*/)
        # --- L3386 ---
        move_unit(unit[9], priority=0, dest_type=0, dest_arg=0)
        # --- L3391 ---
        pass
        # --- L3392 ---
        if not ((set_unit_behavior(7, 9) != 3)):
            goto L3401
        # else: falls through here, rejoins L3401
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3401 ---
        pass
        # --- L3402 ---
        if not ((((var[20] & 7136) == 0) and (var[56] == 0))):
            goto L3775
        # else: falls through here, rejoins L3799
        var[82] = random_below(100)
        if not (((var[8] == 0) and (var[82] < 4))):
            goto L3676
        # else: falls through here, rejoins L3676
        var[8] = (var[8] + 1)
        phase_table[28] = 11506  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3422
            case 1: goto L3426
            case 2: goto L3430
            case 7: goto L3434
            default: goto L3438
        phase_table[28] = 11507  # raw literal, not evaluated
        pass
        # --- L3426 ---
        phase_table[28] = 11542  # raw literal, not evaluated
        pass
        # --- L3430 ---
        phase_table[28] = 11569  # raw literal, not evaluated
        pass
        # --- L3434 ---
        phase_table[28] = 11608  # raw literal, not evaluated
        pass
        # --- L3438 ---
        phase_table[28] = 11636  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3452 ---
        phase_table[29] = 11689  # raw literal, not evaluated
        var[83] = random_below(4)
        if not (((random_below(1) != 7) and (var[83] >= 3))):
            goto L3465
        # else: falls through here, rejoins L3465
        var[83] = random_below(3)
        # --- L3465 ---
        switch(var[83]):
            case 0: goto L3468
            case 1: goto L3472
            case 3: goto L3476
            case 4: goto L3480
            case 5: goto L3484
            case 6: goto L3488
            case 7: goto L3492
            default: goto L3496
        phase_table[29] = 11690  # raw literal, not evaluated
        pass
        # --- L3472 ---
        phase_table[29] = 11694  # raw literal, not evaluated
        pass
        # --- L3476 ---
        phase_table[29] = 11705  # raw literal, not evaluated
        pass
        # --- L3480 ---
        phase_table[29] = 11726  # raw literal, not evaluated
        pass
        # --- L3484 ---
        phase_table[29] = 11753  # raw literal, not evaluated
        pass
        # --- L3488 ---
        phase_table[29] = 11784  # raw literal, not evaluated
        pass
        # --- L3492 ---
        phase_table[29] = 11813  # raw literal, not evaluated
        pass
        # --- L3496 ---
        phase_table[29] = 11843  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3516 ---
        phase_table[30] = 11858  # raw literal, not evaluated
        switch(7):
            case 1: goto L3522
            case 2: goto L3528
            case 3: goto L3534
            case 4: goto L3540
            case 5: goto L3546
            case 6: goto L3552
            case 7: goto L3558
            case 8: goto L3564
            case 9: goto L3570
            case 10: goto L3576
            case 11: goto L3582
            case 12: goto L3588
            case 13: goto L3592
            case 14: goto L3596
            case 512: goto L3600
            case 32: goto L3606
            case 64: goto L3612
            case 128: goto L3618
            case 256: goto L3624
            default: goto L3630
        phase_table[30] = 11859  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3528 ---
        phase_table[30] = 11886  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3534 ---
        phase_table[30] = 11912  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3540 ---
        phase_table[30] = 11942  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3546 ---
        phase_table[30] = 11966  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3552 ---
        phase_table[30] = 11991  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3558 ---
        phase_table[30] = 12045  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3564 ---
        phase_table[30] = 12069  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3570 ---
        phase_table[30] = 12124  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3576 ---
        phase_table[30] = 12169  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3582 ---
        phase_table[30] = 12220  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3588 ---
        phase_table[30] = 12303  # raw literal, not evaluated
        pass
        # --- L3592 ---
        phase_table[30] = 12367  # raw literal, not evaluated
        pass
        # --- L3596 ---
        phase_table[30] = 12421  # raw literal, not evaluated
        pass
        # --- L3600 ---
        phase_table[30] = 12493  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3606 ---
        phase_table[30] = 12527  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3612 ---
        phase_table[30] = 12566  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3618 ---
        phase_table[30] = 12605  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3624 ---
        phase_table[30] = 12646  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3630 ---
        phase_table[30] = 12686  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3674 ---
        system_message(12725 /*" þ"*/)
        # --- L3676 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3679
            case 64: goto L3697
            case 128: goto L3715
            case 256: goto L3733
            default: goto L3751
        if not (group_condition_ref(1, 9)):
            goto L3687
        # else: falls through here, rejoins L3687
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3687 ---
        condition[1] = Condition(var_ref=1, expr_offset=3054)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L3697 ---
        if not (group_condition_ref(2, 9)):
            goto L3705
        # else: falls through here, rejoins L3705
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3705 ---
        condition[2] = Condition(var_ref=2, expr_offset=3075)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L3715 ---
        if not (group_condition_ref(3, 9)):
            goto L3723
        # else: falls through here, rejoins L3723
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3723 ---
        condition[3] = Condition(var_ref=3, expr_offset=3096)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L3733 ---
        if not (group_condition_ref(4, 9)):
            goto L3741
        # else: falls through here, rejoins L3741
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3741 ---
        condition[4] = Condition(var_ref=4, expr_offset=3117)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L3751 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3768 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L3775
        # else: falls through here, rejoins L3775
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L3775 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L3790
        # else: falls through here, rejoins L3799
        timer[1] = current_turn + 2
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[60], dest_type=0, dest_arg=0)
        # --- L3790 ---
        if not (timer_expired(1)):
            goto L3799
        # else: falls through here, rejoins L3799
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3799 ---
        pass
        # --- L3800 ---
        pass
        # --- L3801 ---
        if not ((set_unit_behavior(7, 9) != 4)):
            goto L4080
        # else: falls through here, rejoins L4095
        var[85] = random_below(100)
        if not (((var[8] == 0) and (var[85] < 4))):
            goto L4075
        # else: falls through here, rejoins L4075
        var[8] = (var[8] + 1)
        phase_table[31] = 12743  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3821
            case 1: goto L3825
            case 2: goto L3829
            case 7: goto L3833
            default: goto L3837
        phase_table[31] = 12744  # raw literal, not evaluated
        pass
        # --- L3825 ---
        phase_table[31] = 12779  # raw literal, not evaluated
        pass
        # --- L3829 ---
        phase_table[31] = 12806  # raw literal, not evaluated
        pass
        # --- L3833 ---
        phase_table[31] = 12845  # raw literal, not evaluated
        pass
        # --- L3837 ---
        phase_table[31] = 12873  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3851 ---
        phase_table[32] = 12926  # raw literal, not evaluated
        var[86] = random_below(4)
        if not (((random_below(1) != 7) and (var[86] >= 3))):
            goto L3864
        # else: falls through here, rejoins L3864
        var[86] = random_below(3)
        # --- L3864 ---
        switch(var[86]):
            case 0: goto L3867
            case 1: goto L3871
            case 3: goto L3875
            case 4: goto L3879
            case 5: goto L3883
            case 6: goto L3887
            case 7: goto L3891
            default: goto L3895
        phase_table[32] = 12927  # raw literal, not evaluated
        pass
        # --- L3871 ---
        phase_table[32] = 12931  # raw literal, not evaluated
        pass
        # --- L3875 ---
        phase_table[32] = 12942  # raw literal, not evaluated
        pass
        # --- L3879 ---
        phase_table[32] = 12963  # raw literal, not evaluated
        pass
        # --- L3883 ---
        phase_table[32] = 12990  # raw literal, not evaluated
        pass
        # --- L3887 ---
        phase_table[32] = 13021  # raw literal, not evaluated
        pass
        # --- L3891 ---
        phase_table[32] = 13050  # raw literal, not evaluated
        pass
        # --- L3895 ---
        phase_table[32] = 13080  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3915 ---
        phase_table[33] = 13095  # raw literal, not evaluated
        switch(9):
            case 1: goto L3921
            case 2: goto L3927
            case 3: goto L3933
            case 4: goto L3939
            case 5: goto L3945
            case 6: goto L3951
            case 7: goto L3957
            case 8: goto L3963
            case 9: goto L3969
            case 10: goto L3975
            case 11: goto L3981
            case 12: goto L3987
            case 13: goto L3991
            case 14: goto L3995
            case 512: goto L3999
            case 32: goto L4005
            case 64: goto L4011
            case 128: goto L4017
            case 256: goto L4023
            default: goto L4029
        phase_table[33] = 13096  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3927 ---
        phase_table[33] = 13123  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3933 ---
        phase_table[33] = 13149  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3939 ---
        phase_table[33] = 13179  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3945 ---
        phase_table[33] = 13203  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3951 ---
        phase_table[33] = 13228  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3957 ---
        phase_table[33] = 13282  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3963 ---
        phase_table[33] = 13306  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3969 ---
        phase_table[33] = 13361  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3975 ---
        phase_table[33] = 13406  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3981 ---
        phase_table[33] = 13457  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3987 ---
        phase_table[33] = 13540  # raw literal, not evaluated
        pass
        # --- L3991 ---
        phase_table[33] = 13604  # raw literal, not evaluated
        pass
        # --- L3995 ---
        phase_table[33] = 13658  # raw literal, not evaluated
        pass
        # --- L3999 ---
        phase_table[33] = 13730  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4005 ---
        phase_table[33] = 13764  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4011 ---
        phase_table[33] = 13803  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4017 ---
        phase_table[33] = 13842  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4023 ---
        phase_table[33] = 13883  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4029 ---
        phase_table[33] = 13923  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4073 ---
        system_message(13962 /*" þ"*/)
        # --- L4075 ---
        move_unit(unit[9], priority=4, dest_type=3, dest_arg=10)
        # --- L4080 ---
        var[88] = set_unit_behavior(10, 9)
        unit[11] = var[88]
        if not (group_condition(11)):
            goto L4095
        # else: falls through here, rejoins L4095
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L4095 ---
        pass
        # --- L4096 ---
        pass
        # --- L4097 ---
        if not ((((var[20] & 7136) == 0) & (var[56] == 0))):
            goto L4470
        # else: falls through here, rejoins L4482
        var[89] = random_below(100)
        if not (((var[8] == 0) and (var[89] < 4))):
            goto L4371
        # else: falls through here, rejoins L4371
        var[8] = (var[8] + 1)
        phase_table[34] = 13980  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4117
            case 1: goto L4121
            case 2: goto L4125
            case 7: goto L4129
            default: goto L4133
        phase_table[34] = 13981  # raw literal, not evaluated
        pass
        # --- L4121 ---
        phase_table[34] = 14016  # raw literal, not evaluated
        pass
        # --- L4125 ---
        phase_table[34] = 14043  # raw literal, not evaluated
        pass
        # --- L4129 ---
        phase_table[34] = 14082  # raw literal, not evaluated
        pass
        # --- L4133 ---
        phase_table[34] = 14110  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4147 ---
        phase_table[35] = 14163  # raw literal, not evaluated
        var[90] = random_below(4)
        if not (((random_below(1) != 7) and (var[90] >= 3))):
            goto L4160
        # else: falls through here, rejoins L4160
        var[90] = random_below(3)
        # --- L4160 ---
        switch(var[90]):
            case 0: goto L4163
            case 1: goto L4167
            case 3: goto L4171
            case 4: goto L4175
            case 5: goto L4179
            case 6: goto L4183
            case 7: goto L4187
            default: goto L4191
        phase_table[35] = 14164  # raw literal, not evaluated
        pass
        # --- L4167 ---
        phase_table[35] = 14168  # raw literal, not evaluated
        pass
        # --- L4171 ---
        phase_table[35] = 14179  # raw literal, not evaluated
        pass
        # --- L4175 ---
        phase_table[35] = 14200  # raw literal, not evaluated
        pass
        # --- L4179 ---
        phase_table[35] = 14227  # raw literal, not evaluated
        pass
        # --- L4183 ---
        phase_table[35] = 14258  # raw literal, not evaluated
        pass
        # --- L4187 ---
        phase_table[35] = 14287  # raw literal, not evaluated
        pass
        # --- L4191 ---
        phase_table[35] = 14317  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4211 ---
        phase_table[36] = 14332  # raw literal, not evaluated
        switch(7):
            case 1: goto L4217
            case 2: goto L4223
            case 3: goto L4229
            case 4: goto L4235
            case 5: goto L4241
            case 6: goto L4247
            case 7: goto L4253
            case 8: goto L4259
            case 9: goto L4265
            case 10: goto L4271
            case 11: goto L4277
            case 12: goto L4283
            case 13: goto L4287
            case 14: goto L4291
            case 512: goto L4295
            case 32: goto L4301
            case 64: goto L4307
            case 128: goto L4313
            case 256: goto L4319
            default: goto L4325
        phase_table[36] = 14333  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4223 ---
        phase_table[36] = 14360  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4229 ---
        phase_table[36] = 14386  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4235 ---
        phase_table[36] = 14416  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4241 ---
        phase_table[36] = 14440  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4247 ---
        phase_table[36] = 14465  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4253 ---
        phase_table[36] = 14519  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4259 ---
        phase_table[36] = 14543  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4265 ---
        phase_table[36] = 14598  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4271 ---
        phase_table[36] = 14643  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4277 ---
        phase_table[36] = 14694  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4283 ---
        phase_table[36] = 14777  # raw literal, not evaluated
        pass
        # --- L4287 ---
        phase_table[36] = 14841  # raw literal, not evaluated
        pass
        # --- L4291 ---
        phase_table[36] = 14895  # raw literal, not evaluated
        pass
        # --- L4295 ---
        phase_table[36] = 14967  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4301 ---
        phase_table[36] = 15001  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4307 ---
        phase_table[36] = 15040  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4313 ---
        phase_table[36] = 15079  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4319 ---
        phase_table[36] = 15120  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4325 ---
        phase_table[36] = 15160  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4369 ---
        system_message(15199 /*" þ\""*/)
        # --- L4371 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L4374
            case 64: goto L4392
            case 128: goto L4410
            case 256: goto L4428
            default: goto L4446
        if not (group_condition_ref(1, 9)):
            goto L4382
        # else: falls through here, rejoins L4382
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4382 ---
        condition[1] = Condition(var_ref=1, expr_offset=3550)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L4392 ---
        if not (group_condition_ref(2, 9)):
            goto L4400
        # else: falls through here, rejoins L4400
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4400 ---
        condition[2] = Condition(var_ref=2, expr_offset=3571)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L4410 ---
        if not (group_condition_ref(3, 9)):
            goto L4418
        # else: falls through here, rejoins L4418
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4418 ---
        condition[3] = Condition(var_ref=3, expr_offset=3592)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L4428 ---
        if not (group_condition_ref(4, 9)):
            goto L4436
        # else: falls through here, rejoins L4436
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4436 ---
        condition[4] = Condition(var_ref=4, expr_offset=3613)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L4446 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4463 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L4470
        # else: falls through here, rejoins L4470
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L4470 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L4482
        # else: falls through here, rejoins L4482
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[60], dest_type=0, dest_arg=0)
        # --- L4482 ---
        pass
        # --- L4483 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L4511 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1365
        # --- L4516 ---
        var[92] = 0
        var[93] = 0
        var[94] = 0
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4600
        # --- L4531 ---
        var[95] = set_unit_behavior(10, 1)
        switch(var[95]):
            case 1: goto L4537
            case 2: goto L4541
            case 3: goto L4545
            case 4: goto L4549
            case 5: goto L4553
            case 6: goto L4557
            case 7: goto L4561
            case 8: goto L4565
            default: goto L4569
        var[94] = 1
        pass
        # --- L4541 ---
        var[94] = 2
        pass
        # --- L4545 ---
        var[94] = 4
        pass
        # --- L4549 ---
        var[94] = 8
        pass
        # --- L4553 ---
        var[94] = 16
        pass
        # --- L4557 ---
        var[94] = 32
        pass
        # --- L4561 ---
        var[94] = 64
        pass
        # --- L4565 ---
        var[94] = 128
        pass
        # --- L4569 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4588 ---
        if not (((var[92] & var[94]) == 0)):
            goto L4595
        # else: falls through here, rejoins L4595
        var[92] = (var[92] + var[94])
        # --- L4595 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L4531
        # --- L4600 ---
        if not ((((not all_group_alive(2)) and (not var[4])) and stat(0))):
            goto L4609
        # else: falls through here, rejoins L4609
        system_message(15217 /*"Cybrid threat eliminated."*/)
        var[4] = 1
        # --- L4609 ---
        if not ((var[92] < var[10])):
            goto L4754
        # else: falls through here, rejoins L4754
        var[96] = (var[10] - var[92])
        var[97] = 0
        var[98] = 0
        while (var[97] < var[12]):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4690
        # --- L4625 ---
        switch(var[97]):
            case 1: goto L4628
            case 2: goto L4632
            case 3: goto L4636
            case 4: goto L4640
            case 5: goto L4644
            case 6: goto L4648
            case 7: goto L4652
            case 8: goto L4656
            default: goto L4660
        var[98] = 1
        pass
        # --- L4632 ---
        var[98] = 2
        pass
        # --- L4636 ---
        var[98] = 4
        pass
        # --- L4640 ---
        var[98] = 8
        pass
        # --- L4644 ---
        var[98] = 16
        pass
        # --- L4648 ---
        var[98] = 32
        pass
        # --- L4652 ---
        var[98] = 64
        pass
        # --- L4656 ---
        var[98] = 128
        pass
        # --- L4660 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4679 ---
        if not (((var[98] & var[10]) > (var[98] & var[92]))):
            goto L4685
        # else: falls through here, rejoins L4685
        system_message(15243 /*"Player üã"*/)
        # --- L4685 ---
        var[97] = (var[97] + 1)
        goto L4625
        # --- L4690 ---
        var[10] = var[92]
        switch(var[14]):
            case 1: goto L4696
            case 2: goto L4700
            case 3: goto L4704
            case 4: goto L4708
            case 5: goto L4712
            case 6: goto L4716
            case 7: goto L4720
            case 8: goto L4724
            default: goto L4728
        var[98] = 1
        pass
        # --- L4700 ---
        var[98] = 2
        pass
        # --- L4704 ---
        var[98] = 4
        pass
        # --- L4708 ---
        var[98] = 8
        pass
        # --- L4712 ---
        var[98] = 16
        pass
        # --- L4716 ---
        var[98] = 32
        pass
        # --- L4720 ---
        var[98] = 64
        pass
        # --- L4724 ---
        var[98] = 128
        pass
        # --- L4728 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4747 ---
        if not (((var[98] & var[10]) == 0)):
            goto L4754
        # else: falls through here, rejoins L4754
        var[15] = 2
        # --- L4754 ---
        var[3] = 0
        var[99] = 0
        unit[2] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 2):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4777
        # --- L4766 ---
        var[3] = 1
        var[99] = (var[99] + 1)
        unit[2] = next_unit_in_group(unit[2], group=2)
        goto L4766
        # --- L4777 ---
        if not ((group_condition(3) and (not all_group_alive(2)))):
            goto L4785
        # else: falls through here, rejoins L4785
        var[15] = 3
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4785 ---
        if (var[15] > 0) and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L4790
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4790 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((var[15] == 1)):
                goto L4802
            # else: falls through here, rejoins L4820
            play_sound(35)
            system_message(15265 /*"All immediate threats eliminated. "*/)
            set_unit_objective(unit=1, state=1)
            # --- L4802 ---
            if not ((var[15] == 3)):
                goto L4815
            # else: falls through here, rejoins L4820
            play_sound(35)
            set_unit_objective(unit=1, state=1)
            system_message(15300 /*"The Cybrid forces have been eliminated."*/)
            end_turn(reason=15340)
            goto_phase(3)
            # --- L4815 ---
            system_message(15396 /*"Your mission was a failure."*/)
            set_unit_objective(unit=1, state=2)
            # --- L4820 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
