# SIT701.CS

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
    var[15] = ((13 - var[10]) - var[11])
    if not ((var[15] < 0)):
        goto L39
    # else: falls through here, rejoins L39
    var[15] = 0
    # --- L39 ---
    var[21] = 1
    var[22] = 1
    while (var[21] <= var[10]):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L110
    # --- L48 ---
    switch(var[21]):
        case 1: goto L51
        case 2: goto L55
        case 3: goto L59
        case 4: goto L63
        case 5: goto L67
        case 6: goto L71
        case 7: goto L75
        case 8: goto L79
        default: goto L83
    var[22] = 1
    pass
    # --- L55 ---
    var[22] = 2
    pass
    # --- L59 ---
    var[22] = 4
    pass
    # --- L63 ---
    var[22] = 8
    pass
    # --- L67 ---
    var[22] = 16
    pass
    # --- L71 ---
    var[22] = 32
    pass
    # --- L75 ---
    var[22] = 64
    pass
    # --- L79 ---
    var[22] = 128
    pass
    # --- L83 ---
    pass
    # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
    # --- L102 ---
    var[9] = (var[9] + var[22])
    var[21] = (var[21] + 1)
    goto L48
    # --- L110 ---
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
    goto L224
    # --- L151 ---
    var[35] = random_below(180)
    var[33] = var[24]
    var[32] = (((360 / var[10]) * var[31]) + (var[10] + (var[11] * 2)))
    if not ((var[10] == 2)):
        goto L167
    # else: falls through here, rejoins L167
    var[32] = ((var[32] - 90) + var[35])
    # --- L167 ---
    if not ((var[10] == 3)):
        goto L174
    # else: falls through here, rejoins L174
    var[32] = ((var[32] - 60) + (var[35] / 2))
    # --- L174 ---
    hex[9] = hex_along_path(toward=var[33], steps=(var[32] - 180))
    if not ((var[25] == 1)):
        goto L208
    # else: falls through here, rejoins L219
    if not ((var[31] == var[12])):
        goto L197
    # else: falls through here, rejoins L208
    unit[7] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L197 ---
    unit[6] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L208 ---
    unit[6] = spawn_unit(type=31 /*stationary structure/turret*/, min_weapon_range=var[31], hex_ref=9)
    place_objective_marker(hex[9], ((random_below(3) + var[34]) - 1), 4, 7, 100)
    # --- L219 ---
    var[31] = (var[31] + 1)
    goto L151
    # --- L224 ---
    if not ((var[8] == 0)):
        goto L231
    # else: falls through here, rejoins L231
    var[8] = (random_below(var[36]) + var[37])
    # --- L231 ---
    var[17] = ((stat(0) * 3) / 1)
    var[17] = (var[17] - 200)
    var[38] = 32
    var[21] = 8192
    while (var[21] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L258
    # --- L246 ---
    if not ((var[17] < var[21])):
        goto L253
    # else: falls through here, rejoins L253
    var[38] = (var[38] - 3)
    # --- L253 ---
    var[21] = (var[21] / 2)
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
    var[39] = 0
    var[40] = 12
    var[41] = 27
    var[42] = 45
    var[43] = 90
    if not ((var[40] > (var[15] + 5))):
        goto L307
    # else: falls through here, rejoins L310
    var[40] = (var[40] - var[15])
    # --- L307 ---
    var[40] = 5
    # --- L310 ---
    if not ((var[41] > (var[15] + 10))):
        goto L317
    # else: falls through here, rejoins L320
    var[41] = (var[41] - var[15])
    # --- L317 ---
    var[41] = 10
    # --- L320 ---
    if not ((var[10] == 1)):
        goto L327
    # else: falls through here, rejoins L327
    var[30] = ((var[32] - 60) + random_below(90))
    # --- L327 ---
    if not ((var[39] == 0)):
        goto L334
    # else: falls through here, rejoins L334
    var[39] = (var[40] + random_below((var[41] - var[40])))
    # --- L334 ---
    if not ((var[30] == 0)):
        goto L341
    # else: falls through here, rejoins L341
    var[30] = ((random_below(var[43]) + var[42]) - (var[43] / 2))
    # --- L341 ---
    hex[5] = hex_along_path(toward=var[39], steps=var[30])
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00b7] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[14] = 0
        if not (timer_expired(2)):
            goto L4519
        # else: falls through here, rejoins L4519
        timer[2] = current_turn + 1
        var[7] = 0
        if not (group_all_alive(7)):
            goto L1004
        # else: falls through here, rejoins L1004
        var[55] = 0
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1299
        # --- L1013 ---
        if not ((set_unit_behavior(9, 9) > 0)):
            goto L1294
        # else: falls through here, rejoins L1294
        var[56] = random_below(100)
        if not (((var[7] == 0) and (var[56] < 4))):
            goto L1287
        # else: falls through here, rejoins L1287
        var[7] = (var[7] + 1)
        phase_table[4] = 1572  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1033
            case 1: goto L1037
            case 2: goto L1041
            case 7: goto L1045
            default: goto L1049
        phase_table[4] = 1573  # raw literal, not evaluated
        pass
        # --- L1037 ---
        phase_table[4] = 1608  # raw literal, not evaluated
        pass
        # --- L1041 ---
        phase_table[4] = 1635  # raw literal, not evaluated
        pass
        # --- L1045 ---
        phase_table[4] = 1674  # raw literal, not evaluated
        pass
        # --- L1049 ---
        phase_table[4] = 1702  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1063 ---
        phase_table[5] = 1755  # raw literal, not evaluated
        var[57] = random_below(1)
        if not (((random_below(4) != 7) and (var[57] >= 3))):
            goto L1076
        # else: falls through here, rejoins L1076
        var[57] = random_below(3)
        # --- L1076 ---
        switch(var[57]):
            case 0: goto L1079
            case 1: goto L1083
            case 3: goto L1087
            case 4: goto L1091
            case 5: goto L1095
            case 6: goto L1099
            case 7: goto L1103
            default: goto L1107
        phase_table[5] = 1756  # raw literal, not evaluated
        pass
        # --- L1083 ---
        phase_table[5] = 1760  # raw literal, not evaluated
        pass
        # --- L1087 ---
        phase_table[5] = 1771  # raw literal, not evaluated
        pass
        # --- L1091 ---
        phase_table[5] = 1792  # raw literal, not evaluated
        pass
        # --- L1095 ---
        phase_table[5] = 1819  # raw literal, not evaluated
        pass
        # --- L1099 ---
        phase_table[5] = 1850  # raw literal, not evaluated
        pass
        # --- L1103 ---
        phase_table[5] = 1879  # raw literal, not evaluated
        pass
        # --- L1107 ---
        phase_table[5] = 1909  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1127 ---
        phase_table[6] = 1924  # raw literal, not evaluated
        switch(10):
            case 1: goto L1133
            case 2: goto L1139
            case 3: goto L1145
            case 4: goto L1151
            case 5: goto L1157
            case 6: goto L1163
            case 7: goto L1169
            case 8: goto L1175
            case 9: goto L1181
            case 10: goto L1187
            case 11: goto L1193
            case 12: goto L1199
            case 13: goto L1203
            case 14: goto L1207
            case 512: goto L1211
            case 32: goto L1217
            case 64: goto L1223
            case 128: goto L1229
            case 256: goto L1235
            default: goto L1241
        phase_table[6] = 1925  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1139 ---
        phase_table[6] = 1952  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1145 ---
        phase_table[6] = 1978  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1151 ---
        phase_table[6] = 2008  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1157 ---
        phase_table[6] = 2032  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1163 ---
        phase_table[6] = 2057  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1169 ---
        phase_table[6] = 2111  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1175 ---
        phase_table[6] = 2135  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1181 ---
        phase_table[6] = 2190  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1187 ---
        phase_table[6] = 2235  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1193 ---
        phase_table[6] = 2286  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1199 ---
        phase_table[6] = 2369  # raw literal, not evaluated
        pass
        # --- L1203 ---
        phase_table[6] = 2433  # raw literal, not evaluated
        pass
        # --- L1207 ---
        phase_table[6] = 2487  # raw literal, not evaluated
        pass
        # --- L1211 ---
        phase_table[6] = 2559  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1217 ---
        phase_table[6] = 2593  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1223 ---
        phase_table[6] = 2632  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1229 ---
        phase_table[6] = 2671  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1235 ---
        phase_table[6] = 2712  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1241 ---
        phase_table[6] = 2752  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1285 ---
        system_message(2791 /*" þ"*/)
        # --- L1287 ---
        if not (((set_unit_behavior(8, 9) & var[18]) == 0)):
            goto L1294
        # else: falls through here, rejoins L1294
        var[18] = (var[18] + (set_unit_behavior(8, 9) & 7136))
        # --- L1294 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1013
        # --- L1299 ---
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L1333
        # --- L1305 ---
        if not (group_condition_ref_2(7, 2)):
            goto L1312
        # else: falls through here, rejoins L1319
        unit[1].attr8 = 2
        # --- L1312 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1319
        # else: falls through here, rejoins L1319
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1319 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1328
        # else: falls through here, rejoins L1328
        var[55] = (var[55] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0af9] - dead end, not decoded further (other branches continue independently)
        # --- L1328 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L1305
        # --- L1333 ---
        if not (group_condition_ref_2(8, 2)):
            goto L1340
        # else: falls through here, rejoins L1347
        unit[1].attr8 = 2
        # --- L1340 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1347
        # else: falls through here, rejoins L1347
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L1347 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L1356
        # else: falls through here, rejoins L1356
        var[55] = (var[55] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0b0c] - dead end, not decoded further (other branches continue independently)
        # --- L1356 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        var[59] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 9):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4519
        # --- L1368 ---
        if not ((set_unit_behavior(5, 9) < 60)):
            goto L1377
        # else: falls through here, rejoins L4514
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L1377 ---
        switch((set_unit_behavior(8, 9) & 15)):
            case 0: goto L1380
            case 1: goto L1663
            case 2: goto L2496
            case 3: goto L3055
            case 4: goto L3065
            case 5: goto L3110
            case 10: goto L3395
            case 11: goto L3405
            case 12: goto L3803
            case 13: goto L3804
            case 14: goto L4099
            case 15: goto L4100
            default: goto L4486
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L1662
        # else: falls through here, rejoins L1662
        var[60] = random_below(100)
        if not (((var[7] == 0) and (var[60] < 40))):
            goto L1654
        # else: falls through here, rejoins L1654
        var[7] = (var[7] + 1)
        phase_table[7] = 2847  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1400
            case 1: goto L1404
            case 2: goto L1408
            case 7: goto L1412
            default: goto L1416
        phase_table[7] = 2848  # raw literal, not evaluated
        pass
        # --- L1404 ---
        phase_table[7] = 2883  # raw literal, not evaluated
        pass
        # --- L1408 ---
        phase_table[7] = 2910  # raw literal, not evaluated
        pass
        # --- L1412 ---
        phase_table[7] = 2949  # raw literal, not evaluated
        pass
        # --- L1416 ---
        phase_table[7] = 2977  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1430 ---
        phase_table[8] = 3030  # raw literal, not evaluated
        var[61] = random_below(4)
        if not (((random_below(1) != 7) and (var[61] >= 3))):
            goto L1443
        # else: falls through here, rejoins L1443
        var[61] = random_below(3)
        # --- L1443 ---
        switch(var[61]):
            case 0: goto L1446
            case 1: goto L1450
            case 3: goto L1454
            case 4: goto L1458
            case 5: goto L1462
            case 6: goto L1466
            case 7: goto L1470
            default: goto L1474
        phase_table[8] = 3031  # raw literal, not evaluated
        pass
        # --- L1450 ---
        phase_table[8] = 3035  # raw literal, not evaluated
        pass
        # --- L1454 ---
        phase_table[8] = 3046  # raw literal, not evaluated
        pass
        # --- L1458 ---
        phase_table[8] = 3067  # raw literal, not evaluated
        pass
        # --- L1462 ---
        phase_table[8] = 3094  # raw literal, not evaluated
        pass
        # --- L1466 ---
        phase_table[8] = 3125  # raw literal, not evaluated
        pass
        # --- L1470 ---
        phase_table[8] = 3154  # raw literal, not evaluated
        pass
        # --- L1474 ---
        phase_table[8] = 3184  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1494 ---
        phase_table[9] = 3199  # raw literal, not evaluated
        switch(8):
            case 1: goto L1500
            case 2: goto L1506
            case 3: goto L1512
            case 4: goto L1518
            case 5: goto L1524
            case 6: goto L1530
            case 7: goto L1536
            case 8: goto L1542
            case 9: goto L1548
            case 10: goto L1554
            case 11: goto L1560
            case 12: goto L1566
            case 13: goto L1570
            case 14: goto L1574
            case 512: goto L1578
            case 32: goto L1584
            case 64: goto L1590
            case 128: goto L1596
            case 256: goto L1602
            default: goto L1608
        phase_table[9] = 3200  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1506 ---
        phase_table[9] = 3227  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1512 ---
        phase_table[9] = 3253  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1518 ---
        phase_table[9] = 3283  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1524 ---
        phase_table[9] = 3307  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1530 ---
        phase_table[9] = 3332  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1536 ---
        phase_table[9] = 3386  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1542 ---
        phase_table[9] = 3410  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1548 ---
        phase_table[9] = 3465  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1554 ---
        phase_table[9] = 3510  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1560 ---
        phase_table[9] = 3561  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1566 ---
        phase_table[9] = 3644  # raw literal, not evaluated
        pass
        # --- L1570 ---
        phase_table[9] = 3708  # raw literal, not evaluated
        pass
        # --- L1574 ---
        phase_table[9] = 3762  # raw literal, not evaluated
        pass
        # --- L1578 ---
        phase_table[9] = 3834  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1584 ---
        phase_table[9] = 3868  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1590 ---
        phase_table[9] = 3907  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1596 ---
        phase_table[9] = 3946  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1602 ---
        phase_table[9] = 3987  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1608 ---
        phase_table[9] = 4027  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1652 ---
        system_message(4066 /*" þ"*/)
        # --- L1654 ---
        move_unit(unit[9], priority=var[59], dest_type=0, dest_arg=0)
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        # --- L1662 ---
        pass
        # --- L1663 ---
        if not ((group_condition_ref_2(9, 1) or (set_unit_behavior(9, 9) != 0))):
            goto L1946
        # else: falls through here, rejoins L2495
        if not ((set_unit_behavior(7, 9) != 6)):
            goto L1946
        # else: falls through here, rejoins L1946
        var[63] = random_below(100)
        if not (((var[7] == 0) and (var[63] < 40))):
            goto L1941
        # else: falls through here, rejoins L1941
        var[7] = (var[7] + 1)
        phase_table[10] = 4084  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1687
            case 1: goto L1691
            case 2: goto L1695
            case 7: goto L1699
            default: goto L1703
        phase_table[10] = 4085  # raw literal, not evaluated
        pass
        # --- L1691 ---
        phase_table[10] = 4120  # raw literal, not evaluated
        pass
        # --- L1695 ---
        phase_table[10] = 4147  # raw literal, not evaluated
        pass
        # --- L1699 ---
        phase_table[10] = 4186  # raw literal, not evaluated
        pass
        # --- L1703 ---
        phase_table[10] = 4214  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1717 ---
        phase_table[11] = 4267  # raw literal, not evaluated
        var[64] = random_below(4)
        if not (((random_below(1) != 7) and (var[64] >= 3))):
            goto L1730
        # else: falls through here, rejoins L1730
        var[64] = random_below(3)
        # --- L1730 ---
        switch(var[64]):
            case 0: goto L1733
            case 1: goto L1737
            case 3: goto L1741
            case 4: goto L1745
            case 5: goto L1749
            case 6: goto L1753
            case 7: goto L1757
            default: goto L1761
        phase_table[11] = 4268  # raw literal, not evaluated
        pass
        # --- L1737 ---
        phase_table[11] = 4272  # raw literal, not evaluated
        pass
        # --- L1741 ---
        phase_table[11] = 4283  # raw literal, not evaluated
        pass
        # --- L1745 ---
        phase_table[11] = 4304  # raw literal, not evaluated
        pass
        # --- L1749 ---
        phase_table[11] = 4331  # raw literal, not evaluated
        pass
        # --- L1753 ---
        phase_table[11] = 4362  # raw literal, not evaluated
        pass
        # --- L1757 ---
        phase_table[11] = 4391  # raw literal, not evaluated
        pass
        # --- L1761 ---
        phase_table[11] = 4421  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1781 ---
        phase_table[12] = 4436  # raw literal, not evaluated
        switch(3):
            case 1: goto L1787
            case 2: goto L1793
            case 3: goto L1799
            case 4: goto L1805
            case 5: goto L1811
            case 6: goto L1817
            case 7: goto L1823
            case 8: goto L1829
            case 9: goto L1835
            case 10: goto L1841
            case 11: goto L1847
            case 12: goto L1853
            case 13: goto L1857
            case 14: goto L1861
            case 512: goto L1865
            case 32: goto L1871
            case 64: goto L1877
            case 128: goto L1883
            case 256: goto L1889
            default: goto L1895
        phase_table[12] = 4437  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1793 ---
        phase_table[12] = 4464  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1799 ---
        phase_table[12] = 4490  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1805 ---
        phase_table[12] = 4520  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1811 ---
        phase_table[12] = 4544  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1817 ---
        phase_table[12] = 4569  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1823 ---
        phase_table[12] = 4623  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1829 ---
        phase_table[12] = 4647  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1835 ---
        phase_table[12] = 4702  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1841 ---
        phase_table[12] = 4747  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1847 ---
        phase_table[12] = 4798  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1853 ---
        phase_table[12] = 4881  # raw literal, not evaluated
        pass
        # --- L1857 ---
        phase_table[12] = 4945  # raw literal, not evaluated
        pass
        # --- L1861 ---
        phase_table[12] = 4999  # raw literal, not evaluated
        pass
        # --- L1865 ---
        phase_table[12] = 5071  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1871 ---
        phase_table[12] = 5105  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1877 ---
        phase_table[12] = 5144  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1883 ---
        phase_table[12] = 5183  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1889 ---
        phase_table[12] = 5224  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1895 ---
        phase_table[12] = 5264  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1939 ---
        system_message(5303 /*" þ
"*/)
        # --- L1941 ---
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L1946 ---
        if not ((set_unit_behavior(7, 9) != 2)):
            goto L2225
        # else: falls through here, rejoins L2495
        move_unit(unit[9], priority=2, dest_type=0, dest_arg=0)
        var[66] = random_below(100)
        if not (((var[7] == 0) and (var[66] < 4))):
            goto L2225
        # else: falls through here, rejoins L2225
        var[7] = (var[7] + 1)
        phase_table[13] = 5321  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1971
            case 1: goto L1975
            case 2: goto L1979
            case 7: goto L1983
            default: goto L1987
        phase_table[13] = 5322  # raw literal, not evaluated
        pass
        # --- L1975 ---
        phase_table[13] = 5357  # raw literal, not evaluated
        pass
        # --- L1979 ---
        phase_table[13] = 5384  # raw literal, not evaluated
        pass
        # --- L1983 ---
        phase_table[13] = 5423  # raw literal, not evaluated
        pass
        # --- L1987 ---
        phase_table[13] = 5451  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2001 ---
        phase_table[14] = 5504  # raw literal, not evaluated
        var[67] = random_below(4)
        if not (((random_below(1) != 7) and (var[67] >= 3))):
            goto L2014
        # else: falls through here, rejoins L2014
        var[67] = random_below(3)
        # --- L2014 ---
        switch(var[67]):
            case 0: goto L2017
            case 1: goto L2021
            case 3: goto L2025
            case 4: goto L2029
            case 5: goto L2033
            case 6: goto L2037
            case 7: goto L2041
            default: goto L2045
        phase_table[14] = 5505  # raw literal, not evaluated
        pass
        # --- L2021 ---
        phase_table[14] = 5509  # raw literal, not evaluated
        pass
        # --- L2025 ---
        phase_table[14] = 5520  # raw literal, not evaluated
        pass
        # --- L2029 ---
        phase_table[14] = 5541  # raw literal, not evaluated
        pass
        # --- L2033 ---
        phase_table[14] = 5568  # raw literal, not evaluated
        pass
        # --- L2037 ---
        phase_table[14] = 5599  # raw literal, not evaluated
        pass
        # --- L2041 ---
        phase_table[14] = 5628  # raw literal, not evaluated
        pass
        # --- L2045 ---
        phase_table[14] = 5658  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2065 ---
        phase_table[15] = 5673  # raw literal, not evaluated
        switch(2):
            case 1: goto L2071
            case 2: goto L2077
            case 3: goto L2083
            case 4: goto L2089
            case 5: goto L2095
            case 6: goto L2101
            case 7: goto L2107
            case 8: goto L2113
            case 9: goto L2119
            case 10: goto L2125
            case 11: goto L2131
            case 12: goto L2137
            case 13: goto L2141
            case 14: goto L2145
            case 512: goto L2149
            case 32: goto L2155
            case 64: goto L2161
            case 128: goto L2167
            case 256: goto L2173
            default: goto L2179
        phase_table[15] = 5674  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2077 ---
        phase_table[15] = 5701  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2083 ---
        phase_table[15] = 5727  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2089 ---
        phase_table[15] = 5757  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2095 ---
        phase_table[15] = 5781  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2101 ---
        phase_table[15] = 5806  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2107 ---
        phase_table[15] = 5860  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2113 ---
        phase_table[15] = 5884  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2119 ---
        phase_table[15] = 5939  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2125 ---
        phase_table[15] = 5984  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2131 ---
        phase_table[15] = 6035  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2137 ---
        phase_table[15] = 6118  # raw literal, not evaluated
        pass
        # --- L2141 ---
        phase_table[15] = 6182  # raw literal, not evaluated
        pass
        # --- L2145 ---
        phase_table[15] = 6236  # raw literal, not evaluated
        pass
        # --- L2149 ---
        phase_table[15] = 6308  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2155 ---
        phase_table[15] = 6342  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2161 ---
        phase_table[15] = 6381  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2167 ---
        phase_table[15] = 6420  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2173 ---
        phase_table[15] = 6461  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2179 ---
        phase_table[15] = 6501  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2223 ---
        system_message(6540 /*" þ"*/)
        # --- L2225 ---
        var[69] = random_below(100)
        if not (((var[7] == 0) and (var[69] < 4))):
            goto L2495
        # else: falls through here, rejoins L2495
        var[7] = (var[7] + 1)
        phase_table[16] = 6558  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2241
            case 1: goto L2245
            case 2: goto L2249
            case 7: goto L2253
            default: goto L2257
        phase_table[16] = 6559  # raw literal, not evaluated
        pass
        # --- L2245 ---
        phase_table[16] = 6594  # raw literal, not evaluated
        pass
        # --- L2249 ---
        phase_table[16] = 6621  # raw literal, not evaluated
        pass
        # --- L2253 ---
        phase_table[16] = 6660  # raw literal, not evaluated
        pass
        # --- L2257 ---
        phase_table[16] = 6688  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2271 ---
        phase_table[17] = 6741  # raw literal, not evaluated
        var[70] = random_below(4)
        if not (((random_below(1) != 7) and (var[70] >= 3))):
            goto L2284
        # else: falls through here, rejoins L2284
        var[70] = random_below(3)
        # --- L2284 ---
        switch(var[70]):
            case 0: goto L2287
            case 1: goto L2291
            case 3: goto L2295
            case 4: goto L2299
            case 5: goto L2303
            case 6: goto L2307
            case 7: goto L2311
            default: goto L2315
        phase_table[17] = 6742  # raw literal, not evaluated
        pass
        # --- L2291 ---
        phase_table[17] = 6746  # raw literal, not evaluated
        pass
        # --- L2295 ---
        phase_table[17] = 6757  # raw literal, not evaluated
        pass
        # --- L2299 ---
        phase_table[17] = 6778  # raw literal, not evaluated
        pass
        # --- L2303 ---
        phase_table[17] = 6805  # raw literal, not evaluated
        pass
        # --- L2307 ---
        phase_table[17] = 6836  # raw literal, not evaluated
        pass
        # --- L2311 ---
        phase_table[17] = 6865  # raw literal, not evaluated
        pass
        # --- L2315 ---
        phase_table[17] = 6895  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2335 ---
        phase_table[18] = 6910  # raw literal, not evaluated
        switch(1):
            case 1: goto L2341
            case 2: goto L2347
            case 3: goto L2353
            case 4: goto L2359
            case 5: goto L2365
            case 6: goto L2371
            case 7: goto L2377
            case 8: goto L2383
            case 9: goto L2389
            case 10: goto L2395
            case 11: goto L2401
            case 12: goto L2407
            case 13: goto L2411
            case 14: goto L2415
            case 512: goto L2419
            case 32: goto L2425
            case 64: goto L2431
            case 128: goto L2437
            case 256: goto L2443
            default: goto L2449
        phase_table[18] = 6911  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2347 ---
        phase_table[18] = 6938  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2353 ---
        phase_table[18] = 6964  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2359 ---
        phase_table[18] = 6994  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2365 ---
        phase_table[18] = 7018  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2371 ---
        phase_table[18] = 7043  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2377 ---
        phase_table[18] = 7097  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2383 ---
        phase_table[18] = 7121  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2389 ---
        phase_table[18] = 7176  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2395 ---
        phase_table[18] = 7221  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2401 ---
        phase_table[18] = 7272  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2407 ---
        phase_table[18] = 7355  # raw literal, not evaluated
        pass
        # --- L2411 ---
        phase_table[18] = 7419  # raw literal, not evaluated
        pass
        # --- L2415 ---
        phase_table[18] = 7473  # raw literal, not evaluated
        pass
        # --- L2419 ---
        phase_table[18] = 7545  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2425 ---
        phase_table[18] = 7579  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2431 ---
        phase_table[18] = 7618  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2437 ---
        phase_table[18] = 7657  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2443 ---
        phase_table[18] = 7698  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2449 ---
        phase_table[18] = 7738  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2493 ---
        system_message(7777 /*" þ"*/)
        # --- L2495 ---
        pass
        # --- L2496 ---
        if not (((var[18] & 512) > 0)):
            goto L2775
        # else: falls through here, rejoins L3054
        var[72] = random_below(100)
        if not (((var[7] == 0) and (var[72] < 4))):
            goto L2770
        # else: falls through here, rejoins L2770
        var[7] = (var[7] + 1)
        phase_table[19] = 7795  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2516
            case 1: goto L2520
            case 2: goto L2524
            case 7: goto L2528
            default: goto L2532
        phase_table[19] = 7796  # raw literal, not evaluated
        pass
        # --- L2520 ---
        phase_table[19] = 7831  # raw literal, not evaluated
        pass
        # --- L2524 ---
        phase_table[19] = 7858  # raw literal, not evaluated
        pass
        # --- L2528 ---
        phase_table[19] = 7897  # raw literal, not evaluated
        pass
        # --- L2532 ---
        phase_table[19] = 7925  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2546 ---
        phase_table[20] = 7978  # raw literal, not evaluated
        var[73] = random_below(4)
        if not (((random_below(1) != 7) and (var[73] >= 3))):
            goto L2559
        # else: falls through here, rejoins L2559
        var[73] = random_below(3)
        # --- L2559 ---
        switch(var[73]):
            case 0: goto L2562
            case 1: goto L2566
            case 3: goto L2570
            case 4: goto L2574
            case 5: goto L2578
            case 6: goto L2582
            case 7: goto L2586
            default: goto L2590
        phase_table[20] = 7979  # raw literal, not evaluated
        pass
        # --- L2566 ---
        phase_table[20] = 7983  # raw literal, not evaluated
        pass
        # --- L2570 ---
        phase_table[20] = 7994  # raw literal, not evaluated
        pass
        # --- L2574 ---
        phase_table[20] = 8015  # raw literal, not evaluated
        pass
        # --- L2578 ---
        phase_table[20] = 8042  # raw literal, not evaluated
        pass
        # --- L2582 ---
        phase_table[20] = 8073  # raw literal, not evaluated
        pass
        # --- L2586 ---
        phase_table[20] = 8102  # raw literal, not evaluated
        pass
        # --- L2590 ---
        phase_table[20] = 8132  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2610 ---
        phase_table[21] = 8147  # raw literal, not evaluated
        switch(4):
            case 1: goto L2616
            case 2: goto L2622
            case 3: goto L2628
            case 4: goto L2634
            case 5: goto L2640
            case 6: goto L2646
            case 7: goto L2652
            case 8: goto L2658
            case 9: goto L2664
            case 10: goto L2670
            case 11: goto L2676
            case 12: goto L2682
            case 13: goto L2686
            case 14: goto L2690
            case 512: goto L2694
            case 32: goto L2700
            case 64: goto L2706
            case 128: goto L2712
            case 256: goto L2718
            default: goto L2724
        phase_table[21] = 8148  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2622 ---
        phase_table[21] = 8175  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2628 ---
        phase_table[21] = 8201  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2634 ---
        phase_table[21] = 8231  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2640 ---
        phase_table[21] = 8255  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2646 ---
        phase_table[21] = 8280  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2652 ---
        phase_table[21] = 8334  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2658 ---
        phase_table[21] = 8358  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2664 ---
        phase_table[21] = 8413  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2670 ---
        phase_table[21] = 8458  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2676 ---
        phase_table[21] = 8509  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2682 ---
        phase_table[21] = 8592  # raw literal, not evaluated
        pass
        # --- L2686 ---
        phase_table[21] = 8656  # raw literal, not evaluated
        pass
        # --- L2690 ---
        phase_table[21] = 8710  # raw literal, not evaluated
        pass
        # --- L2694 ---
        phase_table[21] = 8782  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2700 ---
        phase_table[21] = 8816  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2706 ---
        phase_table[21] = 8855  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2712 ---
        phase_table[21] = 8894  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2718 ---
        phase_table[21] = 8935  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2724 ---
        phase_table[21] = 8975  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2768 ---
        system_message(9014 /*" þ"*/)
        # --- L2770 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L2775 ---
        if not (((var[18] & 128) > 0)):
            goto L3054
        # else: falls through here, rejoins L3054
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        var[75] = random_below(100)
        if not (((var[7] == 0) and (var[75] < 4))):
            goto L3054
        # else: falls through here, rejoins L3054
        var[7] = (var[7] + 1)
        phase_table[22] = 9032  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2800
            case 1: goto L2804
            case 2: goto L2808
            case 7: goto L2812
            default: goto L2816
        phase_table[22] = 9033  # raw literal, not evaluated
        pass
        # --- L2804 ---
        phase_table[22] = 9068  # raw literal, not evaluated
        pass
        # --- L2808 ---
        phase_table[22] = 9095  # raw literal, not evaluated
        pass
        # --- L2812 ---
        phase_table[22] = 9134  # raw literal, not evaluated
        pass
        # --- L2816 ---
        phase_table[22] = 9162  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2830 ---
        phase_table[23] = 9215  # raw literal, not evaluated
        var[76] = random_below(4)
        if not (((random_below(1) != 7) and (var[76] >= 3))):
            goto L2843
        # else: falls through here, rejoins L2843
        var[76] = random_below(3)
        # --- L2843 ---
        switch(var[76]):
            case 0: goto L2846
            case 1: goto L2850
            case 3: goto L2854
            case 4: goto L2858
            case 5: goto L2862
            case 6: goto L2866
            case 7: goto L2870
            default: goto L2874
        phase_table[23] = 9216  # raw literal, not evaluated
        pass
        # --- L2850 ---
        phase_table[23] = 9220  # raw literal, not evaluated
        pass
        # --- L2854 ---
        phase_table[23] = 9231  # raw literal, not evaluated
        pass
        # --- L2858 ---
        phase_table[23] = 9252  # raw literal, not evaluated
        pass
        # --- L2862 ---
        phase_table[23] = 9279  # raw literal, not evaluated
        pass
        # --- L2866 ---
        phase_table[23] = 9310  # raw literal, not evaluated
        pass
        # --- L2870 ---
        phase_table[23] = 9339  # raw literal, not evaluated
        pass
        # --- L2874 ---
        phase_table[23] = 9369  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2894 ---
        phase_table[24] = 9384  # raw literal, not evaluated
        switch(5):
            case 1: goto L2900
            case 2: goto L2906
            case 3: goto L2912
            case 4: goto L2918
            case 5: goto L2924
            case 6: goto L2930
            case 7: goto L2936
            case 8: goto L2942
            case 9: goto L2948
            case 10: goto L2954
            case 11: goto L2960
            case 12: goto L2966
            case 13: goto L2970
            case 14: goto L2974
            case 512: goto L2978
            case 32: goto L2984
            case 64: goto L2990
            case 128: goto L2996
            case 256: goto L3002
            default: goto L3008
        phase_table[24] = 9385  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2906 ---
        phase_table[24] = 9412  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2912 ---
        phase_table[24] = 9438  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2918 ---
        phase_table[24] = 9468  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2924 ---
        phase_table[24] = 9492  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2930 ---
        phase_table[24] = 9517  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2936 ---
        phase_table[24] = 9571  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2942 ---
        phase_table[24] = 9595  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2948 ---
        phase_table[24] = 9650  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2954 ---
        phase_table[24] = 9695  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2960 ---
        phase_table[24] = 9746  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2966 ---
        phase_table[24] = 9829  # raw literal, not evaluated
        pass
        # --- L2970 ---
        phase_table[24] = 9893  # raw literal, not evaluated
        pass
        # --- L2974 ---
        phase_table[24] = 9947  # raw literal, not evaluated
        pass
        # --- L2978 ---
        phase_table[24] = 10019  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2984 ---
        phase_table[24] = 10053  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2990 ---
        phase_table[24] = 10092  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2996 ---
        phase_table[24] = 10131  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3002 ---
        phase_table[24] = 10172  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3008 ---
        phase_table[24] = 10212  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3052 ---
        system_message(10251 /*" þ"*/)
        # --- L3054 ---
        pass
        # --- L3055 ---
        if not (((var[18] & 512) > 0)):
            goto L3064
        # else: falls through here, rejoins L3064
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3064 ---
        pass
        # --- L3065 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3068
            case 64: goto L3074
            case 128: goto L3080
            case 256: goto L3086
            default: goto L3092
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L3074 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L3080 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L3086 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L3092 ---
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3109 ---
        pass
        # --- L3110 ---
        if not ((var[55] > 0)):
            goto L3389
        # else: falls through here, rejoins L3394
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        var[78] = random_below(100)
        if not (((var[7] == 0) and (var[78] < 4))):
            goto L3389
        # else: falls through here, rejoins L3389
        var[7] = (var[7] + 1)
        phase_table[25] = 10269  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3135
            case 1: goto L3139
            case 2: goto L3143
            case 7: goto L3147
            default: goto L3151
        phase_table[25] = 10270  # raw literal, not evaluated
        pass
        # --- L3139 ---
        phase_table[25] = 10305  # raw literal, not evaluated
        pass
        # --- L3143 ---
        phase_table[25] = 10332  # raw literal, not evaluated
        pass
        # --- L3147 ---
        phase_table[25] = 10371  # raw literal, not evaluated
        pass
        # --- L3151 ---
        phase_table[25] = 10399  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3165 ---
        phase_table[26] = 10452  # raw literal, not evaluated
        var[79] = random_below(4)
        if not (((random_below(1) != 7) and (var[79] >= 3))):
            goto L3178
        # else: falls through here, rejoins L3178
        var[79] = random_below(3)
        # --- L3178 ---
        switch(var[79]):
            case 0: goto L3181
            case 1: goto L3185
            case 3: goto L3189
            case 4: goto L3193
            case 5: goto L3197
            case 6: goto L3201
            case 7: goto L3205
            default: goto L3209
        phase_table[26] = 10453  # raw literal, not evaluated
        pass
        # --- L3185 ---
        phase_table[26] = 10457  # raw literal, not evaluated
        pass
        # --- L3189 ---
        phase_table[26] = 10468  # raw literal, not evaluated
        pass
        # --- L3193 ---
        phase_table[26] = 10489  # raw literal, not evaluated
        pass
        # --- L3197 ---
        phase_table[26] = 10516  # raw literal, not evaluated
        pass
        # --- L3201 ---
        phase_table[26] = 10547  # raw literal, not evaluated
        pass
        # --- L3205 ---
        phase_table[26] = 10576  # raw literal, not evaluated
        pass
        # --- L3209 ---
        phase_table[26] = 10606  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3229 ---
        phase_table[27] = 10621  # raw literal, not evaluated
        switch(6):
            case 1: goto L3235
            case 2: goto L3241
            case 3: goto L3247
            case 4: goto L3253
            case 5: goto L3259
            case 6: goto L3265
            case 7: goto L3271
            case 8: goto L3277
            case 9: goto L3283
            case 10: goto L3289
            case 11: goto L3295
            case 12: goto L3301
            case 13: goto L3305
            case 14: goto L3309
            case 512: goto L3313
            case 32: goto L3319
            case 64: goto L3325
            case 128: goto L3331
            case 256: goto L3337
            default: goto L3343
        phase_table[27] = 10622  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3241 ---
        phase_table[27] = 10649  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3247 ---
        phase_table[27] = 10675  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3253 ---
        phase_table[27] = 10705  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3259 ---
        phase_table[27] = 10729  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3265 ---
        phase_table[27] = 10754  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3271 ---
        phase_table[27] = 10808  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3277 ---
        phase_table[27] = 10832  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3283 ---
        phase_table[27] = 10887  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3289 ---
        phase_table[27] = 10932  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3295 ---
        phase_table[27] = 10983  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3301 ---
        phase_table[27] = 11066  # raw literal, not evaluated
        pass
        # --- L3305 ---
        phase_table[27] = 11130  # raw literal, not evaluated
        pass
        # --- L3309 ---
        phase_table[27] = 11184  # raw literal, not evaluated
        pass
        # --- L3313 ---
        phase_table[27] = 11256  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3319 ---
        phase_table[27] = 11290  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3325 ---
        phase_table[27] = 11329  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3331 ---
        phase_table[27] = 11368  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3337 ---
        phase_table[27] = 11409  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3343 ---
        phase_table[27] = 11449  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3387 ---
        system_message(11488 /*" þ"*/)
        # --- L3389 ---
        move_unit(unit[9], priority=0, dest_type=0, dest_arg=0)
        # --- L3394 ---
        pass
        # --- L3395 ---
        if not ((set_unit_behavior(7, 9) != 3)):
            goto L3404
        # else: falls through here, rejoins L3404
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3404 ---
        pass
        # --- L3405 ---
        if not ((((var[18] & 7136) == 0) and (var[55] == 0))):
            goto L3778
        # else: falls through here, rejoins L3802
        var[81] = random_below(100)
        if not (((var[7] == 0) and (var[81] < 4))):
            goto L3679
        # else: falls through here, rejoins L3679
        var[7] = (var[7] + 1)
        phase_table[28] = 11506  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3425
            case 1: goto L3429
            case 2: goto L3433
            case 7: goto L3437
            default: goto L3441
        phase_table[28] = 11507  # raw literal, not evaluated
        pass
        # --- L3429 ---
        phase_table[28] = 11542  # raw literal, not evaluated
        pass
        # --- L3433 ---
        phase_table[28] = 11569  # raw literal, not evaluated
        pass
        # --- L3437 ---
        phase_table[28] = 11608  # raw literal, not evaluated
        pass
        # --- L3441 ---
        phase_table[28] = 11636  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3455 ---
        phase_table[29] = 11689  # raw literal, not evaluated
        var[82] = random_below(4)
        if not (((random_below(1) != 7) and (var[82] >= 3))):
            goto L3468
        # else: falls through here, rejoins L3468
        var[82] = random_below(3)
        # --- L3468 ---
        switch(var[82]):
            case 0: goto L3471
            case 1: goto L3475
            case 3: goto L3479
            case 4: goto L3483
            case 5: goto L3487
            case 6: goto L3491
            case 7: goto L3495
            default: goto L3499
        phase_table[29] = 11690  # raw literal, not evaluated
        pass
        # --- L3475 ---
        phase_table[29] = 11694  # raw literal, not evaluated
        pass
        # --- L3479 ---
        phase_table[29] = 11705  # raw literal, not evaluated
        pass
        # --- L3483 ---
        phase_table[29] = 11726  # raw literal, not evaluated
        pass
        # --- L3487 ---
        phase_table[29] = 11753  # raw literal, not evaluated
        pass
        # --- L3491 ---
        phase_table[29] = 11784  # raw literal, not evaluated
        pass
        # --- L3495 ---
        phase_table[29] = 11813  # raw literal, not evaluated
        pass
        # --- L3499 ---
        phase_table[29] = 11843  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3519 ---
        phase_table[30] = 11858  # raw literal, not evaluated
        switch(7):
            case 1: goto L3525
            case 2: goto L3531
            case 3: goto L3537
            case 4: goto L3543
            case 5: goto L3549
            case 6: goto L3555
            case 7: goto L3561
            case 8: goto L3567
            case 9: goto L3573
            case 10: goto L3579
            case 11: goto L3585
            case 12: goto L3591
            case 13: goto L3595
            case 14: goto L3599
            case 512: goto L3603
            case 32: goto L3609
            case 64: goto L3615
            case 128: goto L3621
            case 256: goto L3627
            default: goto L3633
        phase_table[30] = 11859  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3531 ---
        phase_table[30] = 11886  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3537 ---
        phase_table[30] = 11912  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3543 ---
        phase_table[30] = 11942  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3549 ---
        phase_table[30] = 11966  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3555 ---
        phase_table[30] = 11991  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3561 ---
        phase_table[30] = 12045  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3567 ---
        phase_table[30] = 12069  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3573 ---
        phase_table[30] = 12124  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3579 ---
        phase_table[30] = 12169  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3585 ---
        phase_table[30] = 12220  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3591 ---
        phase_table[30] = 12303  # raw literal, not evaluated
        pass
        # --- L3595 ---
        phase_table[30] = 12367  # raw literal, not evaluated
        pass
        # --- L3599 ---
        phase_table[30] = 12421  # raw literal, not evaluated
        pass
        # --- L3603 ---
        phase_table[30] = 12493  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3609 ---
        phase_table[30] = 12527  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3615 ---
        phase_table[30] = 12566  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3621 ---
        phase_table[30] = 12605  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3627 ---
        phase_table[30] = 12646  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3633 ---
        phase_table[30] = 12686  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3677 ---
        system_message(12725 /*" þ"*/)
        # --- L3679 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L3682
            case 64: goto L3700
            case 128: goto L3718
            case 256: goto L3736
            default: goto L3754
        if not (group_condition_ref(1, 9)):
            goto L3690
        # else: falls through here, rejoins L3690
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3690 ---
        condition[1] = Condition(var_ref=1, expr_offset=3058)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L3700 ---
        if not (group_condition_ref(2, 9)):
            goto L3708
        # else: falls through here, rejoins L3708
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3708 ---
        condition[2] = Condition(var_ref=2, expr_offset=3079)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L3718 ---
        if not (group_condition_ref(3, 9)):
            goto L3726
        # else: falls through here, rejoins L3726
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3726 ---
        condition[3] = Condition(var_ref=3, expr_offset=3100)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L3736 ---
        if not (group_condition_ref(4, 9)):
            goto L3744
        # else: falls through here, rejoins L3744
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3744 ---
        condition[4] = Condition(var_ref=4, expr_offset=3121)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L3754 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3771 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L3778
        # else: falls through here, rejoins L3778
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L3778 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L3793
        # else: falls through here, rejoins L3802
        timer[1] = current_turn + 2
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[59], dest_type=0, dest_arg=0)
        # --- L3793 ---
        if not (timer_expired(1)):
            goto L3802
        # else: falls through here, rejoins L3802
        move_unit(unit[9], priority=3, dest_type=2, dest_arg=5)
        # --- L3802 ---
        pass
        # --- L3803 ---
        pass
        # --- L3804 ---
        if not ((set_unit_behavior(7, 9) != 4)):
            goto L4083
        # else: falls through here, rejoins L4098
        var[84] = random_below(100)
        if not (((var[7] == 0) and (var[84] < 4))):
            goto L4078
        # else: falls through here, rejoins L4078
        var[7] = (var[7] + 1)
        phase_table[31] = 12743  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3824
            case 1: goto L3828
            case 2: goto L3832
            case 7: goto L3836
            default: goto L3840
        phase_table[31] = 12744  # raw literal, not evaluated
        pass
        # --- L3828 ---
        phase_table[31] = 12779  # raw literal, not evaluated
        pass
        # --- L3832 ---
        phase_table[31] = 12806  # raw literal, not evaluated
        pass
        # --- L3836 ---
        phase_table[31] = 12845  # raw literal, not evaluated
        pass
        # --- L3840 ---
        phase_table[31] = 12873  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3854 ---
        phase_table[32] = 12926  # raw literal, not evaluated
        var[85] = random_below(4)
        if not (((random_below(1) != 7) and (var[85] >= 3))):
            goto L3867
        # else: falls through here, rejoins L3867
        var[85] = random_below(3)
        # --- L3867 ---
        switch(var[85]):
            case 0: goto L3870
            case 1: goto L3874
            case 3: goto L3878
            case 4: goto L3882
            case 5: goto L3886
            case 6: goto L3890
            case 7: goto L3894
            default: goto L3898
        phase_table[32] = 12927  # raw literal, not evaluated
        pass
        # --- L3874 ---
        phase_table[32] = 12931  # raw literal, not evaluated
        pass
        # --- L3878 ---
        phase_table[32] = 12942  # raw literal, not evaluated
        pass
        # --- L3882 ---
        phase_table[32] = 12963  # raw literal, not evaluated
        pass
        # --- L3886 ---
        phase_table[32] = 12990  # raw literal, not evaluated
        pass
        # --- L3890 ---
        phase_table[32] = 13021  # raw literal, not evaluated
        pass
        # --- L3894 ---
        phase_table[32] = 13050  # raw literal, not evaluated
        pass
        # --- L3898 ---
        phase_table[32] = 13080  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3918 ---
        phase_table[33] = 13095  # raw literal, not evaluated
        switch(9):
            case 1: goto L3924
            case 2: goto L3930
            case 3: goto L3936
            case 4: goto L3942
            case 5: goto L3948
            case 6: goto L3954
            case 7: goto L3960
            case 8: goto L3966
            case 9: goto L3972
            case 10: goto L3978
            case 11: goto L3984
            case 12: goto L3990
            case 13: goto L3994
            case 14: goto L3998
            case 512: goto L4002
            case 32: goto L4008
            case 64: goto L4014
            case 128: goto L4020
            case 256: goto L4026
            default: goto L4032
        phase_table[33] = 13096  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3930 ---
        phase_table[33] = 13123  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3936 ---
        phase_table[33] = 13149  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3942 ---
        phase_table[33] = 13179  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3948 ---
        phase_table[33] = 13203  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3954 ---
        phase_table[33] = 13228  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3960 ---
        phase_table[33] = 13282  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3966 ---
        phase_table[33] = 13306  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3972 ---
        phase_table[33] = 13361  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3978 ---
        phase_table[33] = 13406  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3984 ---
        phase_table[33] = 13457  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3990 ---
        phase_table[33] = 13540  # raw literal, not evaluated
        pass
        # --- L3994 ---
        phase_table[33] = 13604  # raw literal, not evaluated
        pass
        # --- L3998 ---
        phase_table[33] = 13658  # raw literal, not evaluated
        pass
        # --- L4002 ---
        phase_table[33] = 13730  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4008 ---
        phase_table[33] = 13764  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4014 ---
        phase_table[33] = 13803  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4020 ---
        phase_table[33] = 13842  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4026 ---
        phase_table[33] = 13883  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4032 ---
        phase_table[33] = 13923  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4076 ---
        system_message(13962 /*" þ"*/)
        # --- L4078 ---
        move_unit(unit[9], priority=4, dest_type=3, dest_arg=10)
        # --- L4083 ---
        var[87] = set_unit_behavior(10, 9)
        unit[11] = var[87]
        if not (group_condition(11)):
            goto L4098
        # else: falls through here, rejoins L4098
        move_unit(unit[9], priority=6, dest_type=0, dest_arg=0)
        # --- L4098 ---
        pass
        # --- L4099 ---
        pass
        # --- L4100 ---
        if not ((((var[18] & 7136) == 0) & (var[55] == 0))):
            goto L4473
        # else: falls through here, rejoins L4485
        var[88] = random_below(100)
        if not (((var[7] == 0) and (var[88] < 4))):
            goto L4374
        # else: falls through here, rejoins L4374
        var[7] = (var[7] + 1)
        phase_table[34] = 13980  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4120
            case 1: goto L4124
            case 2: goto L4128
            case 7: goto L4132
            default: goto L4136
        phase_table[34] = 13981  # raw literal, not evaluated
        pass
        # --- L4124 ---
        phase_table[34] = 14016  # raw literal, not evaluated
        pass
        # --- L4128 ---
        phase_table[34] = 14043  # raw literal, not evaluated
        pass
        # --- L4132 ---
        phase_table[34] = 14082  # raw literal, not evaluated
        pass
        # --- L4136 ---
        phase_table[34] = 14110  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4150 ---
        phase_table[35] = 14163  # raw literal, not evaluated
        var[89] = random_below(4)
        if not (((random_below(1) != 7) and (var[89] >= 3))):
            goto L4163
        # else: falls through here, rejoins L4163
        var[89] = random_below(3)
        # --- L4163 ---
        switch(var[89]):
            case 0: goto L4166
            case 1: goto L4170
            case 3: goto L4174
            case 4: goto L4178
            case 5: goto L4182
            case 6: goto L4186
            case 7: goto L4190
            default: goto L4194
        phase_table[35] = 14164  # raw literal, not evaluated
        pass
        # --- L4170 ---
        phase_table[35] = 14168  # raw literal, not evaluated
        pass
        # --- L4174 ---
        phase_table[35] = 14179  # raw literal, not evaluated
        pass
        # --- L4178 ---
        phase_table[35] = 14200  # raw literal, not evaluated
        pass
        # --- L4182 ---
        phase_table[35] = 14227  # raw literal, not evaluated
        pass
        # --- L4186 ---
        phase_table[35] = 14258  # raw literal, not evaluated
        pass
        # --- L4190 ---
        phase_table[35] = 14287  # raw literal, not evaluated
        pass
        # --- L4194 ---
        phase_table[35] = 14317  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4214 ---
        phase_table[36] = 14332  # raw literal, not evaluated
        switch(7):
            case 1: goto L4220
            case 2: goto L4226
            case 3: goto L4232
            case 4: goto L4238
            case 5: goto L4244
            case 6: goto L4250
            case 7: goto L4256
            case 8: goto L4262
            case 9: goto L4268
            case 10: goto L4274
            case 11: goto L4280
            case 12: goto L4286
            case 13: goto L4290
            case 14: goto L4294
            case 512: goto L4298
            case 32: goto L4304
            case 64: goto L4310
            case 128: goto L4316
            case 256: goto L4322
            default: goto L4328
        phase_table[36] = 14333  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4226 ---
        phase_table[36] = 14360  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4232 ---
        phase_table[36] = 14386  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4238 ---
        phase_table[36] = 14416  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4244 ---
        phase_table[36] = 14440  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4250 ---
        phase_table[36] = 14465  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4256 ---
        phase_table[36] = 14519  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4262 ---
        phase_table[36] = 14543  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4268 ---
        phase_table[36] = 14598  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4274 ---
        phase_table[36] = 14643  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4280 ---
        phase_table[36] = 14694  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4286 ---
        phase_table[36] = 14777  # raw literal, not evaluated
        pass
        # --- L4290 ---
        phase_table[36] = 14841  # raw literal, not evaluated
        pass
        # --- L4294 ---
        phase_table[36] = 14895  # raw literal, not evaluated
        pass
        # --- L4298 ---
        phase_table[36] = 14967  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4304 ---
        phase_table[36] = 15001  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4310 ---
        phase_table[36] = 15040  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4316 ---
        phase_table[36] = 15079  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4322 ---
        phase_table[36] = 15120  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4328 ---
        phase_table[36] = 15160  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4372 ---
        system_message(15199 /*" þ\""*/)
        # --- L4374 ---
        switch((set_unit_behavior(8, 9) & 7136)):
            case 32: goto L4377
            case 64: goto L4395
            case 128: goto L4413
            case 256: goto L4431
            default: goto L4449
        if not (group_condition_ref(1, 9)):
            goto L4385
        # else: falls through here, rejoins L4385
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4385 ---
        condition[1] = Condition(var_ref=1, expr_offset=3554)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L4395 ---
        if not (group_condition_ref(2, 9)):
            goto L4403
        # else: falls through here, rejoins L4403
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4403 ---
        condition[2] = Condition(var_ref=2, expr_offset=3575)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L4413 ---
        if not (group_condition_ref(3, 9)):
            goto L4421
        # else: falls through here, rejoins L4421
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4421 ---
        condition[3] = Condition(var_ref=3, expr_offset=3596)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L4431 ---
        if not (group_condition_ref(4, 9)):
            goto L4439
        # else: falls through here, rejoins L4439
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4439 ---
        condition[4] = Condition(var_ref=4, expr_offset=3617)
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L4449 ---
        move_unit(unit[9], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4466 ---
        if not (((set_unit_behavior(8, 9) & 1024) > 0)):
            goto L4473
        # else: falls through here, rejoins L4473
        unit[9].attr8 = (set_unit_behavior(8, 9) - 1024)
        # --- L4473 ---
        if not (((set_unit_behavior(8, 9) & 1024) == 0)):
            goto L4485
        # else: falls through here, rejoins L4485
        unit[9].attr8 = (set_unit_behavior(8, 9) + 1024)
        move_unit(unit[9], priority=var[59], dest_type=0, dest_arg=0)
        # --- L4485 ---
        pass
        # --- L4486 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L4514 ---
        unit[9] = next_unit_in_group(unit[9], group=2)
        goto L1368
        # --- L4519 ---
        if not ((((not all_group_alive(2)) and (not var[6])) and stat(0))):
            goto L4528
        # else: falls through here, rejoins L4528
        system_message(15217 /*"Cybrid threat eliminated."*/)
        var[6] = 1
        # --- L4528 ---
        var[91] = 0
        var[92] = 0
        var[93] = 0
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4612
        # --- L4543 ---
        var[94] = set_unit_behavior(10, 1)
        switch(var[94]):
            case 1: goto L4549
            case 2: goto L4553
            case 3: goto L4557
            case 4: goto L4561
            case 5: goto L4565
            case 6: goto L4569
            case 7: goto L4573
            case 8: goto L4577
            default: goto L4581
        var[93] = 1
        pass
        # --- L4553 ---
        var[93] = 2
        pass
        # --- L4557 ---
        var[93] = 4
        pass
        # --- L4561 ---
        var[93] = 8
        pass
        # --- L4565 ---
        var[93] = 16
        pass
        # --- L4569 ---
        var[93] = 32
        pass
        # --- L4573 ---
        var[93] = 64
        pass
        # --- L4577 ---
        var[93] = 128
        pass
        # --- L4581 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4600 ---
        if not (((var[91] & var[93]) == 0)):
            goto L4607
        # else: falls through here, rejoins L4607
        var[91] = (var[91] + var[93])
        # --- L4607 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L4543
        # --- L4612 ---
        if not ((var[91] < var[9])):
            goto L4758
        # else: falls through here, rejoins L4758
        var[95] = (var[9] - var[91])
        var[96] = 0
        var[97] = 0
        while (var[96] < var[10]):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4693
        # --- L4628 ---
        switch(var[96]):
            case 1: goto L4631
            case 2: goto L4635
            case 3: goto L4639
            case 4: goto L4643
            case 5: goto L4647
            case 6: goto L4651
            case 7: goto L4655
            case 8: goto L4659
            default: goto L4663
        var[97] = 1
        pass
        # --- L4635 ---
        var[97] = 2
        pass
        # --- L4639 ---
        var[97] = 4
        pass
        # --- L4643 ---
        var[97] = 8
        pass
        # --- L4647 ---
        var[97] = 16
        pass
        # --- L4651 ---
        var[97] = 32
        pass
        # --- L4655 ---
        var[97] = 64
        pass
        # --- L4659 ---
        var[97] = 128
        pass
        # --- L4663 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4682 ---
        if not (((var[97] & var[9]) > (var[97] & var[91]))):
            goto L4688
        # else: falls through here, rejoins L4688
        system_message(15243 /*"Player üç"*/)
        # --- L4688 ---
        var[96] = (var[96] + 1)
        goto L4628
        # --- L4693 ---
        var[9] = var[91]
        switch(var[12]):
            case 1: goto L4699
            case 2: goto L4703
            case 3: goto L4707
            case 4: goto L4711
            case 5: goto L4715
            case 6: goto L4719
            case 7: goto L4723
            case 8: goto L4727
            default: goto L4731
        var[97] = 1
        pass
        # --- L4703 ---
        var[97] = 2
        pass
        # --- L4707 ---
        var[97] = 4
        pass
        # --- L4711 ---
        var[97] = 8
        pass
        # --- L4715 ---
        var[97] = 16
        pass
        # --- L4719 ---
        var[97] = 32
        pass
        # --- L4723 ---
        var[97] = 64
        pass
        # --- L4727 ---
        var[97] = 128
        pass
        # --- L4731 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4750 ---
        if not (((var[97] & var[9]) == 0)):
            goto L4758
        # else: falls through here, rejoins L4758
        var[13] = 2
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4758 ---
        var[3] = 0
        var[98] = 0
        unit[2] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 2):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4781
        # --- L4770 ---
        var[3] = 1
        var[98] = (var[98] + 1)
        unit[2] = next_unit_in_group(unit[2], group=2)
        goto L4770
        # --- L4781 ---
        if not ((group_condition(3) and (not all_group_alive(2)))):
            goto L4789
        # else: falls through here, rejoins L4789
        var[13] = 3
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4789 ---
        if (var[13] > 0) and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L4794
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4794 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((var[13] == 1)):
                goto L4806
            # else: falls through here, rejoins L4824
            play_sound(35)
            system_message(15265 /*"All immediate threats eliminated. "*/)
            set_unit_objective(unit=1, state=1)
            # --- L4806 ---
            if not ((var[13] == 3)):
                goto L4819
            # else: falls through here, rejoins L4824
            play_sound(35)
            set_unit_objective(unit=1, state=1)
            system_message(15300 /*"The Cybrid forces have been eliminated."*/)
            end_turn(reason=15340)
            goto_phase(3)
            # --- L4819 ---
            system_message(15396 /*"Your mission was a failure."*/)
            set_unit_objective(unit=1, state=2)
            # --- L4824 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
