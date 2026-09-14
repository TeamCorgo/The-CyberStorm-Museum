# SIT332.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[3] = 0
var[4] = 0
var[5] = 0
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[2] == 0)):
        goto L17
    # else: falls through here, rejoins L17
    var[2] = (random_below(var[9]) + var[10])
    # --- L17 ---
    var[11] = (stat(0) / 1)
    var[11] = (var[11] - 200)
    var[12] = 8192
    while (var[12] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L41
    # --- L29 ---
    if not ((var[11] < var[12])):
        goto L36
    # else: falls through here, rejoins L36
    var[7] = (var[7] + 1)
    # --- L36 ---
    var[12] = (var[12] / 4)
    goto L29
    # --- L41 ---
    var[13] = 0
    var[14] = 0
    var[15] = 25
    var[16] = 27
    var[17] = 0
    var[18] = 360
    if not ((var[15] > (var[7] + 5))):
        goto L66
    # else: falls through here, rejoins L69
    var[15] = (var[15] - var[7])
    # --- L66 ---
    var[15] = 5
    # --- L69 ---
    if not ((var[16] > (var[7] + 10))):
        goto L76
    # else: falls through here, rejoins L79
    var[16] = (var[16] - var[7])
    # --- L76 ---
    var[16] = 10
    # --- L79 ---
    if not ((var[13] == 0)):
        goto L86
    # else: falls through here, rejoins L86
    var[13] = (var[15] + random_below((var[16] - var[15])))
    # --- L86 ---
    if not ((var[14] == 0)):
        goto L93
    # else: falls through here, rejoins L93
    var[14] = ((random_below(var[18]) + var[17]) - (var[18] / 2))
    # --- L93 ---
    hex[7] = hex_along_path(toward=30, steps=275)
    var[19] = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
    var[20] = 0
    var[20] = (var[20] + 1)
    if not ((var[11] > 300)):
        goto L127
    # else: falls through here, rejoins L130
    var[8] = (var[11] / 2)
    if not ((var[8] < 300)):
        goto L120
    # else: falls through here, rejoins L127
    var[8] = 300
    # --- L120 ---
    if not ((var[8] > 1200)):
        goto L127
    # else: falls through here, rejoins L127
    var[8] = 1200
    # --- L127 ---
    var[8] = var[11]
    # --- L130 ---
    var[11] = (var[11] - var[8])
    hex[1] = hex_along_path(toward=((random_below(10) + 5) - var[7]), steps=(var[14] + random_below(30)))
    condition[1] = Condition(var_ref=1, expr_offset=249)
    group[3] = spawn_ai_squad(point_budget=var[8], hex_ref=1)
    move_group(group[3], priority=var[19], dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 47
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00a1] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[6] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L732
        unit[3] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 3):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L730
        # --- L722 ---
        var[3] = (var[3] + 1)
        unit[3] = next_unit_in_group(unit[3], group=2)
        goto L722
        # --- L730 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x071a] - dead end, not decoded further (other branches continue independently)
        # --- L732 ---
        if not (timer_expired(2)):
            goto L6442
        # else: falls through here, rejoins L6442
        timer[2] = current_turn + 1
        var[1] = 0
        var[24] = 0
        if not ((group_condition_ref_2(7, 1) and group_condition_ref_2(7, 2))):
            goto L1029
        # else: falls through here, rejoins L1036
        unit[4] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[25] = random_below(100)
        if not (((var[1] == 0) and (var[25] < 2))):
            goto L1022
        # else: falls through here, rejoins L1022
        var[1] = (var[1] + 1)
        phase_table[4] = 1968  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L768
            case 1: goto L772
            case 2: goto L776
            case 7: goto L780
            default: goto L784
        phase_table[4] = 1969  # raw literal, not evaluated
        pass
        # --- L772 ---
        phase_table[4] = 2004  # raw literal, not evaluated
        pass
        # --- L776 ---
        phase_table[4] = 2031  # raw literal, not evaluated
        pass
        # --- L780 ---
        phase_table[4] = 2070  # raw literal, not evaluated
        pass
        # --- L784 ---
        phase_table[4] = 2098  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L798 ---
        phase_table[5] = 2151  # raw literal, not evaluated
        var[26] = random_below(4)
        if not (((random_below(4) != 7) and (var[26] >= 3))):
            goto L811
        # else: falls through here, rejoins L811
        var[26] = random_below(3)
        # --- L811 ---
        switch(var[26]):
            case 0: goto L814
            case 1: goto L818
            case 3: goto L822
            case 4: goto L826
            case 5: goto L830
            case 6: goto L834
            case 7: goto L838
            default: goto L842
        phase_table[5] = 2152  # raw literal, not evaluated
        pass
        # --- L818 ---
        phase_table[5] = 2156  # raw literal, not evaluated
        pass
        # --- L822 ---
        phase_table[5] = 2167  # raw literal, not evaluated
        pass
        # --- L826 ---
        phase_table[5] = 2188  # raw literal, not evaluated
        pass
        # --- L830 ---
        phase_table[5] = 2215  # raw literal, not evaluated
        pass
        # --- L834 ---
        phase_table[5] = 2246  # raw literal, not evaluated
        pass
        # --- L838 ---
        phase_table[5] = 2275  # raw literal, not evaluated
        pass
        # --- L842 ---
        phase_table[5] = 2305  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L862 ---
        phase_table[6] = 2320  # raw literal, not evaluated
        switch(512):
            case 1: goto L868
            case 2: goto L874
            case 3: goto L880
            case 4: goto L886
            case 5: goto L892
            case 6: goto L898
            case 7: goto L904
            case 8: goto L910
            case 9: goto L916
            case 10: goto L922
            case 11: goto L928
            case 12: goto L934
            case 13: goto L938
            case 14: goto L942
            case 512: goto L946
            case 32: goto L952
            case 64: goto L958
            case 128: goto L964
            case 256: goto L970
            default: goto L976
        phase_table[6] = 2321  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L874 ---
        phase_table[6] = 2348  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L880 ---
        phase_table[6] = 2374  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L886 ---
        phase_table[6] = 2404  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L892 ---
        phase_table[6] = 2428  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L898 ---
        phase_table[6] = 2453  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L904 ---
        phase_table[6] = 2507  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L910 ---
        phase_table[6] = 2531  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L916 ---
        phase_table[6] = 2586  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L922 ---
        phase_table[6] = 2631  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L928 ---
        phase_table[6] = 2682  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L934 ---
        phase_table[6] = 2765  # raw literal, not evaluated
        pass
        # --- L938 ---
        phase_table[6] = 2829  # raw literal, not evaluated
        pass
        # --- L942 ---
        phase_table[6] = 2883  # raw literal, not evaluated
        pass
        # --- L946 ---
        phase_table[6] = 2955  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L952 ---
        phase_table[6] = 2989  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L958 ---
        phase_table[6] = 3028  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L964 ---
        phase_table[6] = 3067  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L970 ---
        phase_table[6] = 3108  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L976 ---
        phase_table[6] = 3148  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1020 ---
        system_message(3187 /*" þ"*/)
        # --- L1022 ---
        if not (((var[24] & 512) == 0)):
            goto L1029
        # else: falls through here, rejoins L1029
        var[24] = (var[24] + 512)
        # --- L1029 ---
        if not (((var[24] & 512) > 0)):
            goto L1036
        # else: falls through here, rejoins L1036
        var[24] = (var[24] - 512)
        # --- L1036 ---
        if not ((group_condition_ref_2(1, 1) and group_condition_ref_2(1, 2))):
            goto L1320
        # else: falls through here, rejoins L1327
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[28] = random_below(100)
        if not (((var[1] == 0) and (var[28] < 2))):
            goto L1313
        # else: falls through here, rejoins L1313
        var[1] = (var[1] + 1)
        phase_table[7] = 3205  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1059
            case 1: goto L1063
            case 2: goto L1067
            case 7: goto L1071
            default: goto L1075
        phase_table[7] = 3206  # raw literal, not evaluated
        pass
        # --- L1063 ---
        phase_table[7] = 3241  # raw literal, not evaluated
        pass
        # --- L1067 ---
        phase_table[7] = 3268  # raw literal, not evaluated
        pass
        # --- L1071 ---
        phase_table[7] = 3307  # raw literal, not evaluated
        pass
        # --- L1075 ---
        phase_table[7] = 3335  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1089 ---
        phase_table[8] = 3388  # raw literal, not evaluated
        var[29] = random_below(4)
        if not (((random_below(4) != 7) and (var[29] >= 3))):
            goto L1102
        # else: falls through here, rejoins L1102
        var[29] = random_below(3)
        # --- L1102 ---
        switch(var[29]):
            case 0: goto L1105
            case 1: goto L1109
            case 3: goto L1113
            case 4: goto L1117
            case 5: goto L1121
            case 6: goto L1125
            case 7: goto L1129
            default: goto L1133
        phase_table[8] = 3389  # raw literal, not evaluated
        pass
        # --- L1109 ---
        phase_table[8] = 3393  # raw literal, not evaluated
        pass
        # --- L1113 ---
        phase_table[8] = 3404  # raw literal, not evaluated
        pass
        # --- L1117 ---
        phase_table[8] = 3425  # raw literal, not evaluated
        pass
        # --- L1121 ---
        phase_table[8] = 3452  # raw literal, not evaluated
        pass
        # --- L1125 ---
        phase_table[8] = 3483  # raw literal, not evaluated
        pass
        # --- L1129 ---
        phase_table[8] = 3512  # raw literal, not evaluated
        pass
        # --- L1133 ---
        phase_table[8] = 3542  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1153 ---
        phase_table[9] = 3557  # raw literal, not evaluated
        switch(32):
            case 1: goto L1159
            case 2: goto L1165
            case 3: goto L1171
            case 4: goto L1177
            case 5: goto L1183
            case 6: goto L1189
            case 7: goto L1195
            case 8: goto L1201
            case 9: goto L1207
            case 10: goto L1213
            case 11: goto L1219
            case 12: goto L1225
            case 13: goto L1229
            case 14: goto L1233
            case 512: goto L1237
            case 32: goto L1243
            case 64: goto L1249
            case 128: goto L1255
            case 256: goto L1261
            default: goto L1267
        phase_table[9] = 3558  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1165 ---
        phase_table[9] = 3585  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1171 ---
        phase_table[9] = 3611  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1177 ---
        phase_table[9] = 3641  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1183 ---
        phase_table[9] = 3665  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1189 ---
        phase_table[9] = 3690  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1195 ---
        phase_table[9] = 3744  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1201 ---
        phase_table[9] = 3768  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1207 ---
        phase_table[9] = 3823  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1213 ---
        phase_table[9] = 3868  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1219 ---
        phase_table[9] = 3919  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1225 ---
        phase_table[9] = 4002  # raw literal, not evaluated
        pass
        # --- L1229 ---
        phase_table[9] = 4066  # raw literal, not evaluated
        pass
        # --- L1233 ---
        phase_table[9] = 4120  # raw literal, not evaluated
        pass
        # --- L1237 ---
        phase_table[9] = 4192  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1243 ---
        phase_table[9] = 4226  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1249 ---
        phase_table[9] = 4265  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1255 ---
        phase_table[9] = 4304  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1261 ---
        phase_table[9] = 4345  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1267 ---
        phase_table[9] = 4385  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1311 ---
        system_message(4424 /*" þ"*/)
        # --- L1313 ---
        if not (((var[24] & 32) == 0)):
            goto L1320
        # else: falls through here, rejoins L1320
        var[24] = (var[24] + 32)
        # --- L1320 ---
        if not (((var[24] & 32) > 0)):
            goto L1327
        # else: falls through here, rejoins L1327
        var[24] = (var[24] - 32)
        # --- L1327 ---
        if not ((group_condition_ref_2(2, 1) and group_condition_ref_2(2, 2))):
            goto L1611
        # else: falls through here, rejoins L1618
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[31] = random_below(100)
        if not (((var[1] == 0) and (var[31] < 2))):
            goto L1604
        # else: falls through here, rejoins L1604
        var[1] = (var[1] + 1)
        phase_table[10] = 4442  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1350
            case 1: goto L1354
            case 2: goto L1358
            case 7: goto L1362
            default: goto L1366
        phase_table[10] = 4443  # raw literal, not evaluated
        pass
        # --- L1354 ---
        phase_table[10] = 4478  # raw literal, not evaluated
        pass
        # --- L1358 ---
        phase_table[10] = 4505  # raw literal, not evaluated
        pass
        # --- L1362 ---
        phase_table[10] = 4544  # raw literal, not evaluated
        pass
        # --- L1366 ---
        phase_table[10] = 4572  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1380 ---
        phase_table[11] = 4625  # raw literal, not evaluated
        var[32] = random_below(4)
        if not (((random_below(4) != 7) and (var[32] >= 3))):
            goto L1393
        # else: falls through here, rejoins L1393
        var[32] = random_below(3)
        # --- L1393 ---
        switch(var[32]):
            case 0: goto L1396
            case 1: goto L1400
            case 3: goto L1404
            case 4: goto L1408
            case 5: goto L1412
            case 6: goto L1416
            case 7: goto L1420
            default: goto L1424
        phase_table[11] = 4626  # raw literal, not evaluated
        pass
        # --- L1400 ---
        phase_table[11] = 4630  # raw literal, not evaluated
        pass
        # --- L1404 ---
        phase_table[11] = 4641  # raw literal, not evaluated
        pass
        # --- L1408 ---
        phase_table[11] = 4662  # raw literal, not evaluated
        pass
        # --- L1412 ---
        phase_table[11] = 4689  # raw literal, not evaluated
        pass
        # --- L1416 ---
        phase_table[11] = 4720  # raw literal, not evaluated
        pass
        # --- L1420 ---
        phase_table[11] = 4749  # raw literal, not evaluated
        pass
        # --- L1424 ---
        phase_table[11] = 4779  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1444 ---
        phase_table[12] = 4794  # raw literal, not evaluated
        switch(64):
            case 1: goto L1450
            case 2: goto L1456
            case 3: goto L1462
            case 4: goto L1468
            case 5: goto L1474
            case 6: goto L1480
            case 7: goto L1486
            case 8: goto L1492
            case 9: goto L1498
            case 10: goto L1504
            case 11: goto L1510
            case 12: goto L1516
            case 13: goto L1520
            case 14: goto L1524
            case 512: goto L1528
            case 32: goto L1534
            case 64: goto L1540
            case 128: goto L1546
            case 256: goto L1552
            default: goto L1558
        phase_table[12] = 4795  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1456 ---
        phase_table[12] = 4822  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1462 ---
        phase_table[12] = 4848  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1468 ---
        phase_table[12] = 4878  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1474 ---
        phase_table[12] = 4902  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1480 ---
        phase_table[12] = 4927  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1486 ---
        phase_table[12] = 4981  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1492 ---
        phase_table[12] = 5005  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1498 ---
        phase_table[12] = 5060  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1504 ---
        phase_table[12] = 5105  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1510 ---
        phase_table[12] = 5156  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1516 ---
        phase_table[12] = 5239  # raw literal, not evaluated
        pass
        # --- L1520 ---
        phase_table[12] = 5303  # raw literal, not evaluated
        pass
        # --- L1524 ---
        phase_table[12] = 5357  # raw literal, not evaluated
        pass
        # --- L1528 ---
        phase_table[12] = 5429  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1534 ---
        phase_table[12] = 5463  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1540 ---
        phase_table[12] = 5502  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1546 ---
        phase_table[12] = 5541  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1552 ---
        phase_table[12] = 5582  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1558 ---
        phase_table[12] = 5622  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1602 ---
        system_message(5661 /*" þ
"*/)
        # --- L1604 ---
        if not (((var[24] & 64) == 0)):
            goto L1611
        # else: falls through here, rejoins L1611
        var[24] = (var[24] + 64)
        # --- L1611 ---
        if not (((var[24] & 64) > 0)):
            goto L1618
        # else: falls through here, rejoins L1618
        var[24] = (var[24] - 64)
        # --- L1618 ---
        if not ((group_condition_ref_2(3, 1) and group_condition_ref_2(3, 2))):
            goto L1902
        # else: falls through here, rejoins L1909
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[34] = random_below(100)
        if not (((var[1] == 0) and (var[34] < 2))):
            goto L1895
        # else: falls through here, rejoins L1895
        var[1] = (var[1] + 1)
        phase_table[13] = 5679  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1641
            case 1: goto L1645
            case 2: goto L1649
            case 7: goto L1653
            default: goto L1657
        phase_table[13] = 5680  # raw literal, not evaluated
        pass
        # --- L1645 ---
        phase_table[13] = 5715  # raw literal, not evaluated
        pass
        # --- L1649 ---
        phase_table[13] = 5742  # raw literal, not evaluated
        pass
        # --- L1653 ---
        phase_table[13] = 5781  # raw literal, not evaluated
        pass
        # --- L1657 ---
        phase_table[13] = 5809  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1671 ---
        phase_table[14] = 5862  # raw literal, not evaluated
        var[35] = random_below(4)
        if not (((random_below(4) != 7) and (var[35] >= 3))):
            goto L1684
        # else: falls through here, rejoins L1684
        var[35] = random_below(3)
        # --- L1684 ---
        switch(var[35]):
            case 0: goto L1687
            case 1: goto L1691
            case 3: goto L1695
            case 4: goto L1699
            case 5: goto L1703
            case 6: goto L1707
            case 7: goto L1711
            default: goto L1715
        phase_table[14] = 5863  # raw literal, not evaluated
        pass
        # --- L1691 ---
        phase_table[14] = 5867  # raw literal, not evaluated
        pass
        # --- L1695 ---
        phase_table[14] = 5878  # raw literal, not evaluated
        pass
        # --- L1699 ---
        phase_table[14] = 5899  # raw literal, not evaluated
        pass
        # --- L1703 ---
        phase_table[14] = 5926  # raw literal, not evaluated
        pass
        # --- L1707 ---
        phase_table[14] = 5957  # raw literal, not evaluated
        pass
        # --- L1711 ---
        phase_table[14] = 5986  # raw literal, not evaluated
        pass
        # --- L1715 ---
        phase_table[14] = 6016  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1735 ---
        phase_table[15] = 6031  # raw literal, not evaluated
        switch(128):
            case 1: goto L1741
            case 2: goto L1747
            case 3: goto L1753
            case 4: goto L1759
            case 5: goto L1765
            case 6: goto L1771
            case 7: goto L1777
            case 8: goto L1783
            case 9: goto L1789
            case 10: goto L1795
            case 11: goto L1801
            case 12: goto L1807
            case 13: goto L1811
            case 14: goto L1815
            case 512: goto L1819
            case 32: goto L1825
            case 64: goto L1831
            case 128: goto L1837
            case 256: goto L1843
            default: goto L1849
        phase_table[15] = 6032  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1747 ---
        phase_table[15] = 6059  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1753 ---
        phase_table[15] = 6085  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1759 ---
        phase_table[15] = 6115  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1765 ---
        phase_table[15] = 6139  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1771 ---
        phase_table[15] = 6164  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1777 ---
        phase_table[15] = 6218  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1783 ---
        phase_table[15] = 6242  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1789 ---
        phase_table[15] = 6297  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1795 ---
        phase_table[15] = 6342  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1801 ---
        phase_table[15] = 6393  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1807 ---
        phase_table[15] = 6476  # raw literal, not evaluated
        pass
        # --- L1811 ---
        phase_table[15] = 6540  # raw literal, not evaluated
        pass
        # --- L1815 ---
        phase_table[15] = 6594  # raw literal, not evaluated
        pass
        # --- L1819 ---
        phase_table[15] = 6666  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1825 ---
        phase_table[15] = 6700  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1831 ---
        phase_table[15] = 6739  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1837 ---
        phase_table[15] = 6778  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1843 ---
        phase_table[15] = 6819  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1849 ---
        phase_table[15] = 6859  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1893 ---
        system_message(6898 /*" þ"*/)
        # --- L1895 ---
        if not (((var[24] & 128) == 0)):
            goto L1902
        # else: falls through here, rejoins L1902
        var[24] = (var[24] + 128)
        # --- L1902 ---
        if not (((var[24] & 128) > 0)):
            goto L1909
        # else: falls through here, rejoins L1909
        var[24] = (var[24] - 128)
        # --- L1909 ---
        if not ((group_condition_ref_2(4, 1) and group_condition_ref_2(4, 2))):
            goto L2193
        # else: falls through here, rejoins L2200
        unit[8] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[37] = random_below(100)
        if not (((var[1] == 0) and (var[37] < 2))):
            goto L2186
        # else: falls through here, rejoins L2186
        var[1] = (var[1] + 1)
        phase_table[16] = 6916  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1932
            case 1: goto L1936
            case 2: goto L1940
            case 7: goto L1944
            default: goto L1948
        phase_table[16] = 6917  # raw literal, not evaluated
        pass
        # --- L1936 ---
        phase_table[16] = 6952  # raw literal, not evaluated
        pass
        # --- L1940 ---
        phase_table[16] = 6979  # raw literal, not evaluated
        pass
        # --- L1944 ---
        phase_table[16] = 7018  # raw literal, not evaluated
        pass
        # --- L1948 ---
        phase_table[16] = 7046  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1962 ---
        phase_table[17] = 7099  # raw literal, not evaluated
        var[38] = random_below(4)
        if not (((random_below(4) != 7) and (var[38] >= 3))):
            goto L1975
        # else: falls through here, rejoins L1975
        var[38] = random_below(3)
        # --- L1975 ---
        switch(var[38]):
            case 0: goto L1978
            case 1: goto L1982
            case 3: goto L1986
            case 4: goto L1990
            case 5: goto L1994
            case 6: goto L1998
            case 7: goto L2002
            default: goto L2006
        phase_table[17] = 7100  # raw literal, not evaluated
        pass
        # --- L1982 ---
        phase_table[17] = 7104  # raw literal, not evaluated
        pass
        # --- L1986 ---
        phase_table[17] = 7115  # raw literal, not evaluated
        pass
        # --- L1990 ---
        phase_table[17] = 7136  # raw literal, not evaluated
        pass
        # --- L1994 ---
        phase_table[17] = 7163  # raw literal, not evaluated
        pass
        # --- L1998 ---
        phase_table[17] = 7194  # raw literal, not evaluated
        pass
        # --- L2002 ---
        phase_table[17] = 7223  # raw literal, not evaluated
        pass
        # --- L2006 ---
        phase_table[17] = 7253  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2026 ---
        phase_table[18] = 7268  # raw literal, not evaluated
        switch(256):
            case 1: goto L2032
            case 2: goto L2038
            case 3: goto L2044
            case 4: goto L2050
            case 5: goto L2056
            case 6: goto L2062
            case 7: goto L2068
            case 8: goto L2074
            case 9: goto L2080
            case 10: goto L2086
            case 11: goto L2092
            case 12: goto L2098
            case 13: goto L2102
            case 14: goto L2106
            case 512: goto L2110
            case 32: goto L2116
            case 64: goto L2122
            case 128: goto L2128
            case 256: goto L2134
            default: goto L2140
        phase_table[18] = 7269  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2038 ---
        phase_table[18] = 7296  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2044 ---
        phase_table[18] = 7322  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2050 ---
        phase_table[18] = 7352  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2056 ---
        phase_table[18] = 7376  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2062 ---
        phase_table[18] = 7401  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2068 ---
        phase_table[18] = 7455  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2074 ---
        phase_table[18] = 7479  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2080 ---
        phase_table[18] = 7534  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2086 ---
        phase_table[18] = 7579  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2092 ---
        phase_table[18] = 7630  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2098 ---
        phase_table[18] = 7713  # raw literal, not evaluated
        pass
        # --- L2102 ---
        phase_table[18] = 7777  # raw literal, not evaluated
        pass
        # --- L2106 ---
        phase_table[18] = 7831  # raw literal, not evaluated
        pass
        # --- L2110 ---
        phase_table[18] = 7903  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2116 ---
        phase_table[18] = 7937  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2122 ---
        phase_table[18] = 7976  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2128 ---
        phase_table[18] = 8015  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2134 ---
        phase_table[18] = 8056  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2140 ---
        phase_table[18] = 8096  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2184 ---
        system_message(8135 /*" þ"*/)
        # --- L2186 ---
        if not (((var[24] & 256) == 0)):
            goto L2193
        # else: falls through here, rejoins L2193
        var[24] = (var[24] + 256)
        # --- L2193 ---
        if not (((var[24] & 256) > 0)):
            goto L2200
        # else: falls through here, rejoins L2200
        var[24] = (var[24] - 256)
        # --- L2200 ---
        if not ((group_condition_ref_2(5, 1) and group_condition_ref_2(5, 2))):
            goto L2484
        # else: falls through here, rejoins L2491
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[40] = random_below(100)
        if not (((var[1] == 0) and (var[40] < 2))):
            goto L2477
        # else: falls through here, rejoins L2477
        var[1] = (var[1] + 1)
        phase_table[19] = 8153  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2223
            case 1: goto L2227
            case 2: goto L2231
            case 7: goto L2235
            default: goto L2239
        phase_table[19] = 8154  # raw literal, not evaluated
        pass
        # --- L2227 ---
        phase_table[19] = 8189  # raw literal, not evaluated
        pass
        # --- L2231 ---
        phase_table[19] = 8216  # raw literal, not evaluated
        pass
        # --- L2235 ---
        phase_table[19] = 8255  # raw literal, not evaluated
        pass
        # --- L2239 ---
        phase_table[19] = 8283  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2253 ---
        phase_table[20] = 8336  # raw literal, not evaluated
        var[41] = random_below(4)
        if not (((random_below(4) != 7) and (var[41] >= 3))):
            goto L2266
        # else: falls through here, rejoins L2266
        var[41] = random_below(3)
        # --- L2266 ---
        switch(var[41]):
            case 0: goto L2269
            case 1: goto L2273
            case 3: goto L2277
            case 4: goto L2281
            case 5: goto L2285
            case 6: goto L2289
            case 7: goto L2293
            default: goto L2297
        phase_table[20] = 8337  # raw literal, not evaluated
        pass
        # --- L2273 ---
        phase_table[20] = 8341  # raw literal, not evaluated
        pass
        # --- L2277 ---
        phase_table[20] = 8352  # raw literal, not evaluated
        pass
        # --- L2281 ---
        phase_table[20] = 8373  # raw literal, not evaluated
        pass
        # --- L2285 ---
        phase_table[20] = 8400  # raw literal, not evaluated
        pass
        # --- L2289 ---
        phase_table[20] = 8431  # raw literal, not evaluated
        pass
        # --- L2293 ---
        phase_table[20] = 8460  # raw literal, not evaluated
        pass
        # --- L2297 ---
        phase_table[20] = 8490  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2317 ---
        phase_table[21] = 8505  # raw literal, not evaluated
        switch(2048):
            case 1: goto L2323
            case 2: goto L2329
            case 3: goto L2335
            case 4: goto L2341
            case 5: goto L2347
            case 6: goto L2353
            case 7: goto L2359
            case 8: goto L2365
            case 9: goto L2371
            case 10: goto L2377
            case 11: goto L2383
            case 12: goto L2389
            case 13: goto L2393
            case 14: goto L2397
            case 512: goto L2401
            case 32: goto L2407
            case 64: goto L2413
            case 128: goto L2419
            case 256: goto L2425
            default: goto L2431
        phase_table[21] = 8506  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2329 ---
        phase_table[21] = 8533  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2335 ---
        phase_table[21] = 8559  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2341 ---
        phase_table[21] = 8589  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2347 ---
        phase_table[21] = 8613  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2353 ---
        phase_table[21] = 8638  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2359 ---
        phase_table[21] = 8692  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2365 ---
        phase_table[21] = 8716  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2371 ---
        phase_table[21] = 8771  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2377 ---
        phase_table[21] = 8816  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2383 ---
        phase_table[21] = 8867  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2389 ---
        phase_table[21] = 8950  # raw literal, not evaluated
        pass
        # --- L2393 ---
        phase_table[21] = 9014  # raw literal, not evaluated
        pass
        # --- L2397 ---
        phase_table[21] = 9068  # raw literal, not evaluated
        pass
        # --- L2401 ---
        phase_table[21] = 9140  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2407 ---
        phase_table[21] = 9174  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2413 ---
        phase_table[21] = 9213  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2419 ---
        phase_table[21] = 9252  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2425 ---
        phase_table[21] = 9293  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2431 ---
        phase_table[21] = 9333  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2475 ---
        system_message(9372 /*" þ"*/)
        # --- L2477 ---
        if not (((var[24] & 2048) == 0)):
            goto L2484
        # else: falls through here, rejoins L2484
        var[24] = (var[24] + 2048)
        # --- L2484 ---
        if not (((var[24] & 2048) > 0)):
            goto L2491
        # else: falls through here, rejoins L2491
        var[24] = (var[24] - 2048)
        # --- L2491 ---
        if not ((group_condition_ref_2(6, 1) and group_condition_ref_2(6, 2))):
            goto L2775
        # else: falls through here, rejoins L2782
        unit[10] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[43] = random_below(100)
        if not (((var[1] == 0) and (var[43] < 2))):
            goto L2768
        # else: falls through here, rejoins L2768
        var[1] = (var[1] + 1)
        phase_table[22] = 9390  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2514
            case 1: goto L2518
            case 2: goto L2522
            case 7: goto L2526
            default: goto L2530
        phase_table[22] = 9391  # raw literal, not evaluated
        pass
        # --- L2518 ---
        phase_table[22] = 9426  # raw literal, not evaluated
        pass
        # --- L2522 ---
        phase_table[22] = 9453  # raw literal, not evaluated
        pass
        # --- L2526 ---
        phase_table[22] = 9492  # raw literal, not evaluated
        pass
        # --- L2530 ---
        phase_table[22] = 9520  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2544 ---
        phase_table[23] = 9573  # raw literal, not evaluated
        var[44] = random_below(4)
        if not (((random_below(4) != 7) and (var[44] >= 3))):
            goto L2557
        # else: falls through here, rejoins L2557
        var[44] = random_below(3)
        # --- L2557 ---
        switch(var[44]):
            case 0: goto L2560
            case 1: goto L2564
            case 3: goto L2568
            case 4: goto L2572
            case 5: goto L2576
            case 6: goto L2580
            case 7: goto L2584
            default: goto L2588
        phase_table[23] = 9574  # raw literal, not evaluated
        pass
        # --- L2564 ---
        phase_table[23] = 9578  # raw literal, not evaluated
        pass
        # --- L2568 ---
        phase_table[23] = 9589  # raw literal, not evaluated
        pass
        # --- L2572 ---
        phase_table[23] = 9610  # raw literal, not evaluated
        pass
        # --- L2576 ---
        phase_table[23] = 9637  # raw literal, not evaluated
        pass
        # --- L2580 ---
        phase_table[23] = 9668  # raw literal, not evaluated
        pass
        # --- L2584 ---
        phase_table[23] = 9697  # raw literal, not evaluated
        pass
        # --- L2588 ---
        phase_table[23] = 9727  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2608 ---
        phase_table[24] = 9742  # raw literal, not evaluated
        switch(4096):
            case 1: goto L2614
            case 2: goto L2620
            case 3: goto L2626
            case 4: goto L2632
            case 5: goto L2638
            case 6: goto L2644
            case 7: goto L2650
            case 8: goto L2656
            case 9: goto L2662
            case 10: goto L2668
            case 11: goto L2674
            case 12: goto L2680
            case 13: goto L2684
            case 14: goto L2688
            case 512: goto L2692
            case 32: goto L2698
            case 64: goto L2704
            case 128: goto L2710
            case 256: goto L2716
            default: goto L2722
        phase_table[24] = 9743  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2620 ---
        phase_table[24] = 9770  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2626 ---
        phase_table[24] = 9796  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2632 ---
        phase_table[24] = 9826  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2638 ---
        phase_table[24] = 9850  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2644 ---
        phase_table[24] = 9875  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2650 ---
        phase_table[24] = 9929  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2656 ---
        phase_table[24] = 9953  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2662 ---
        phase_table[24] = 10008  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2668 ---
        phase_table[24] = 10053  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2674 ---
        phase_table[24] = 10104  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2680 ---
        phase_table[24] = 10187  # raw literal, not evaluated
        pass
        # --- L2684 ---
        phase_table[24] = 10251  # raw literal, not evaluated
        pass
        # --- L2688 ---
        phase_table[24] = 10305  # raw literal, not evaluated
        pass
        # --- L2692 ---
        phase_table[24] = 10377  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2698 ---
        phase_table[24] = 10411  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2704 ---
        phase_table[24] = 10450  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2710 ---
        phase_table[24] = 10489  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2716 ---
        phase_table[24] = 10530  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2722 ---
        phase_table[24] = 10570  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2766 ---
        system_message(10609 /*" þ"*/)
        # --- L2768 ---
        if not (((var[24] & 4096) == 0)):
            goto L2775
        # else: falls through here, rejoins L2775
        var[24] = (var[24] + 4096)
        # --- L2775 ---
        if not (((var[24] & 4096) > 0)):
            goto L2782
        # else: falls through here, rejoins L2782
        var[24] = (var[24] - 4096)
        # --- L2782 ---
        var[46] = 0
        var[47] = 0
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 11):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3103
        var[46] = (var[46] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2983] - dead end, not decoded further (other branches continue independently)
        # --- L3103 ---
        unit[12] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3137
        # --- L3109 ---
        if not (group_condition_ref_2(8, 2)):
            goto L3116
        # else: falls through here, rejoins L3123
        unit[12].attr8 = 2
        # --- L3116 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3123
        # else: falls through here, rejoins L3123
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1)
        # --- L3123 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3132
        # else: falls through here, rejoins L3132
        var[47] = (var[47] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2f24] - dead end, not decoded further (other branches continue independently)
        # --- L3132 ---
        unit[12] = next_unit_in_group(unit[12], group=1)
        goto L3109
        # --- L3137 ---
        if not (group_condition_ref_2(9, 2)):
            goto L3144
        # else: falls through here, rejoins L3151
        unit[12].attr8 = 2
        # --- L3144 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3151
        # else: falls through here, rejoins L3151
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1)
        # --- L3151 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3160
        # else: falls through here, rejoins L3160
        var[47] = (var[47] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2f37] - dead end, not decoded further (other branches continue independently)
        # --- L3160 ---
        unit[12] = next_unit_in_group(unit[12], group=1)
        var[51] = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 11):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L6325
        if not ((set_unit_behavior(5, 11) < 60)):
            goto L3181
        # else: falls through here, rejoins L6318
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L3181 ---
        switch((set_unit_behavior(8, 11) & 15)):
            case 0: goto L3184
            case 1: goto L3467
            case 2: goto L4300
            case 3: goto L4859
            case 4: goto L4869
            case 5: goto L4914
            case 10: goto L5199
            case 11: goto L5209
            case 12: goto L5607
            case 13: goto L5608
            case 14: goto L5903
            case 15: goto L5904
            default: goto L6290
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L3466
        # else: falls through here, rejoins L3466
        var[52] = random_below(100)
        if not (((var[1] == 0) and (var[52] < 40))):
            goto L3458
        # else: falls through here, rejoins L3458
        var[1] = (var[1] + 1)
        phase_table[28] = 12106  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3204
            case 1: goto L3208
            case 2: goto L3212
            case 7: goto L3216
            default: goto L3220
        phase_table[28] = 12107  # raw literal, not evaluated
        pass
        # --- L3208 ---
        phase_table[28] = 12142  # raw literal, not evaluated
        pass
        # --- L3212 ---
        phase_table[28] = 12169  # raw literal, not evaluated
        pass
        # --- L3216 ---
        phase_table[28] = 12208  # raw literal, not evaluated
        pass
        # --- L3220 ---
        phase_table[28] = 12236  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3234 ---
        phase_table[29] = 12289  # raw literal, not evaluated
        var[53] = random_below(4)
        if not (((random_below(1) != 7) and (var[53] >= 3))):
            goto L3247
        # else: falls through here, rejoins L3247
        var[53] = random_below(3)
        # --- L3247 ---
        switch(var[53]):
            case 0: goto L3250
            case 1: goto L3254
            case 3: goto L3258
            case 4: goto L3262
            case 5: goto L3266
            case 6: goto L3270
            case 7: goto L3274
            default: goto L3278
        phase_table[29] = 12290  # raw literal, not evaluated
        pass
        # --- L3254 ---
        phase_table[29] = 12294  # raw literal, not evaluated
        pass
        # --- L3258 ---
        phase_table[29] = 12305  # raw literal, not evaluated
        pass
        # --- L3262 ---
        phase_table[29] = 12326  # raw literal, not evaluated
        pass
        # --- L3266 ---
        phase_table[29] = 12353  # raw literal, not evaluated
        pass
        # --- L3270 ---
        phase_table[29] = 12384  # raw literal, not evaluated
        pass
        # --- L3274 ---
        phase_table[29] = 12413  # raw literal, not evaluated
        pass
        # --- L3278 ---
        phase_table[29] = 12443  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3298 ---
        phase_table[30] = 12458  # raw literal, not evaluated
        switch(8):
            case 1: goto L3304
            case 2: goto L3310
            case 3: goto L3316
            case 4: goto L3322
            case 5: goto L3328
            case 6: goto L3334
            case 7: goto L3340
            case 8: goto L3346
            case 9: goto L3352
            case 10: goto L3358
            case 11: goto L3364
            case 12: goto L3370
            case 13: goto L3374
            case 14: goto L3378
            case 512: goto L3382
            case 32: goto L3388
            case 64: goto L3394
            case 128: goto L3400
            case 256: goto L3406
            default: goto L3412
        phase_table[30] = 12459  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3310 ---
        phase_table[30] = 12486  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3316 ---
        phase_table[30] = 12512  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3322 ---
        phase_table[30] = 12542  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3328 ---
        phase_table[30] = 12566  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3334 ---
        phase_table[30] = 12591  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3340 ---
        phase_table[30] = 12645  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3346 ---
        phase_table[30] = 12669  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3352 ---
        phase_table[30] = 12724  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3358 ---
        phase_table[30] = 12769  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3364 ---
        phase_table[30] = 12820  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3370 ---
        phase_table[30] = 12903  # raw literal, not evaluated
        pass
        # --- L3374 ---
        phase_table[30] = 12967  # raw literal, not evaluated
        pass
        # --- L3378 ---
        phase_table[30] = 13021  # raw literal, not evaluated
        pass
        # --- L3382 ---
        phase_table[30] = 13093  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3388 ---
        phase_table[30] = 13127  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3394 ---
        phase_table[30] = 13166  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3400 ---
        phase_table[30] = 13205  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3406 ---
        phase_table[30] = 13246  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3412 ---
        phase_table[30] = 13286  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3456 ---
        system_message(13325 /*" þ"*/)
        # --- L3458 ---
        move_unit(unit[11], priority=var[51], dest_type=0, dest_arg=0)
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        # --- L3466 ---
        pass
        # --- L3467 ---
        if not ((group_condition_ref_2(10, 1) or (set_unit_behavior(9, 11) != 0))):
            goto L3750
        # else: falls through here, rejoins L4299
        if not ((set_unit_behavior(7, 11) != 6)):
            goto L3750
        # else: falls through here, rejoins L3750
        var[55] = random_below(100)
        if not (((var[1] == 0) and (var[55] < 40))):
            goto L3745
        # else: falls through here, rejoins L3745
        var[1] = (var[1] + 1)
        phase_table[31] = 13343  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3491
            case 1: goto L3495
            case 2: goto L3499
            case 7: goto L3503
            default: goto L3507
        phase_table[31] = 13344  # raw literal, not evaluated
        pass
        # --- L3495 ---
        phase_table[31] = 13379  # raw literal, not evaluated
        pass
        # --- L3499 ---
        phase_table[31] = 13406  # raw literal, not evaluated
        pass
        # --- L3503 ---
        phase_table[31] = 13445  # raw literal, not evaluated
        pass
        # --- L3507 ---
        phase_table[31] = 13473  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3521 ---
        phase_table[32] = 13526  # raw literal, not evaluated
        var[56] = random_below(4)
        if not (((random_below(1) != 7) and (var[56] >= 3))):
            goto L3534
        # else: falls through here, rejoins L3534
        var[56] = random_below(3)
        # --- L3534 ---
        switch(var[56]):
            case 0: goto L3537
            case 1: goto L3541
            case 3: goto L3545
            case 4: goto L3549
            case 5: goto L3553
            case 6: goto L3557
            case 7: goto L3561
            default: goto L3565
        phase_table[32] = 13527  # raw literal, not evaluated
        pass
        # --- L3541 ---
        phase_table[32] = 13531  # raw literal, not evaluated
        pass
        # --- L3545 ---
        phase_table[32] = 13542  # raw literal, not evaluated
        pass
        # --- L3549 ---
        phase_table[32] = 13563  # raw literal, not evaluated
        pass
        # --- L3553 ---
        phase_table[32] = 13590  # raw literal, not evaluated
        pass
        # --- L3557 ---
        phase_table[32] = 13621  # raw literal, not evaluated
        pass
        # --- L3561 ---
        phase_table[32] = 13650  # raw literal, not evaluated
        pass
        # --- L3565 ---
        phase_table[32] = 13680  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3585 ---
        phase_table[33] = 13695  # raw literal, not evaluated
        switch(3):
            case 1: goto L3591
            case 2: goto L3597
            case 3: goto L3603
            case 4: goto L3609
            case 5: goto L3615
            case 6: goto L3621
            case 7: goto L3627
            case 8: goto L3633
            case 9: goto L3639
            case 10: goto L3645
            case 11: goto L3651
            case 12: goto L3657
            case 13: goto L3661
            case 14: goto L3665
            case 512: goto L3669
            case 32: goto L3675
            case 64: goto L3681
            case 128: goto L3687
            case 256: goto L3693
            default: goto L3699
        phase_table[33] = 13696  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3597 ---
        phase_table[33] = 13723  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3603 ---
        phase_table[33] = 13749  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3609 ---
        phase_table[33] = 13779  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3615 ---
        phase_table[33] = 13803  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3621 ---
        phase_table[33] = 13828  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3627 ---
        phase_table[33] = 13882  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3633 ---
        phase_table[33] = 13906  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3639 ---
        phase_table[33] = 13961  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3645 ---
        phase_table[33] = 14006  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3651 ---
        phase_table[33] = 14057  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3657 ---
        phase_table[33] = 14140  # raw literal, not evaluated
        pass
        # --- L3661 ---
        phase_table[33] = 14204  # raw literal, not evaluated
        pass
        # --- L3665 ---
        phase_table[33] = 14258  # raw literal, not evaluated
        pass
        # --- L3669 ---
        phase_table[33] = 14330  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3675 ---
        phase_table[33] = 14364  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3681 ---
        phase_table[33] = 14403  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3687 ---
        phase_table[33] = 14442  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3693 ---
        phase_table[33] = 14483  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3699 ---
        phase_table[33] = 14523  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3743 ---
        system_message(14562 /*" þ"*/)
        # --- L3745 ---
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        # --- L3750 ---
        if not ((set_unit_behavior(7, 11) != 2)):
            goto L4029
        # else: falls through here, rejoins L4299
        move_unit(unit[11], priority=2, dest_type=0, dest_arg=0)
        var[58] = random_below(100)
        if not (((var[1] == 0) and (var[58] < 4))):
            goto L4029
        # else: falls through here, rejoins L4029
        var[1] = (var[1] + 1)
        phase_table[34] = 14580  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3775
            case 1: goto L3779
            case 2: goto L3783
            case 7: goto L3787
            default: goto L3791
        phase_table[34] = 14581  # raw literal, not evaluated
        pass
        # --- L3779 ---
        phase_table[34] = 14616  # raw literal, not evaluated
        pass
        # --- L3783 ---
        phase_table[34] = 14643  # raw literal, not evaluated
        pass
        # --- L3787 ---
        phase_table[34] = 14682  # raw literal, not evaluated
        pass
        # --- L3791 ---
        phase_table[34] = 14710  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3805 ---
        phase_table[35] = 14763  # raw literal, not evaluated
        var[59] = random_below(4)
        if not (((random_below(1) != 7) and (var[59] >= 3))):
            goto L3818
        # else: falls through here, rejoins L3818
        var[59] = random_below(3)
        # --- L3818 ---
        switch(var[59]):
            case 0: goto L3821
            case 1: goto L3825
            case 3: goto L3829
            case 4: goto L3833
            case 5: goto L3837
            case 6: goto L3841
            case 7: goto L3845
            default: goto L3849
        phase_table[35] = 14764  # raw literal, not evaluated
        pass
        # --- L3825 ---
        phase_table[35] = 14768  # raw literal, not evaluated
        pass
        # --- L3829 ---
        phase_table[35] = 14779  # raw literal, not evaluated
        pass
        # --- L3833 ---
        phase_table[35] = 14800  # raw literal, not evaluated
        pass
        # --- L3837 ---
        phase_table[35] = 14827  # raw literal, not evaluated
        pass
        # --- L3841 ---
        phase_table[35] = 14858  # raw literal, not evaluated
        pass
        # --- L3845 ---
        phase_table[35] = 14887  # raw literal, not evaluated
        pass
        # --- L3849 ---
        phase_table[35] = 14917  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3869 ---
        phase_table[36] = 14932  # raw literal, not evaluated
        switch(2):
            case 1: goto L3875
            case 2: goto L3881
            case 3: goto L3887
            case 4: goto L3893
            case 5: goto L3899
            case 6: goto L3905
            case 7: goto L3911
            case 8: goto L3917
            case 9: goto L3923
            case 10: goto L3929
            case 11: goto L3935
            case 12: goto L3941
            case 13: goto L3945
            case 14: goto L3949
            case 512: goto L3953
            case 32: goto L3959
            case 64: goto L3965
            case 128: goto L3971
            case 256: goto L3977
            default: goto L3983
        phase_table[36] = 14933  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3881 ---
        phase_table[36] = 14960  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3887 ---
        phase_table[36] = 14986  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3893 ---
        phase_table[36] = 15016  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3899 ---
        phase_table[36] = 15040  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3905 ---
        phase_table[36] = 15065  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3911 ---
        phase_table[36] = 15119  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3917 ---
        phase_table[36] = 15143  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3923 ---
        phase_table[36] = 15198  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3929 ---
        phase_table[36] = 15243  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3935 ---
        phase_table[36] = 15294  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3941 ---
        phase_table[36] = 15377  # raw literal, not evaluated
        pass
        # --- L3945 ---
        phase_table[36] = 15441  # raw literal, not evaluated
        pass
        # --- L3949 ---
        phase_table[36] = 15495  # raw literal, not evaluated
        pass
        # --- L3953 ---
        phase_table[36] = 15567  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3959 ---
        phase_table[36] = 15601  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3965 ---
        phase_table[36] = 15640  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3971 ---
        phase_table[36] = 15679  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3977 ---
        phase_table[36] = 15720  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3983 ---
        phase_table[36] = 15760  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4027 ---
        system_message(15799 /*" þ\""*/)
        # --- L4029 ---
        var[61] = random_below(100)
        if not (((var[1] == 0) and (var[61] < 4))):
            goto L4299
        # else: falls through here, rejoins L4299
        var[1] = (var[1] + 1)
        phase_table[37] = 15817  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4045
            case 1: goto L4049
            case 2: goto L4053
            case 7: goto L4057
            default: goto L4061
        phase_table[37] = 15818  # raw literal, not evaluated
        pass
        # --- L4049 ---
        phase_table[37] = 15853  # raw literal, not evaluated
        pass
        # --- L4053 ---
        phase_table[37] = 15880  # raw literal, not evaluated
        pass
        # --- L4057 ---
        phase_table[37] = 15919  # raw literal, not evaluated
        pass
        # --- L4061 ---
        phase_table[37] = 15947  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4075 ---
        phase_table[38] = 16000  # raw literal, not evaluated
        var[62] = random_below(4)
        if not (((random_below(1) != 7) and (var[62] >= 3))):
            goto L4088
        # else: falls through here, rejoins L4088
        var[62] = random_below(3)
        # --- L4088 ---
        switch(var[62]):
            case 0: goto L4091
            case 1: goto L4095
            case 3: goto L4099
            case 4: goto L4103
            case 5: goto L4107
            case 6: goto L4111
            case 7: goto L4115
            default: goto L4119
        phase_table[38] = 16001  # raw literal, not evaluated
        pass
        # --- L4095 ---
        phase_table[38] = 16005  # raw literal, not evaluated
        pass
        # --- L4099 ---
        phase_table[38] = 16016  # raw literal, not evaluated
        pass
        # --- L4103 ---
        phase_table[38] = 16037  # raw literal, not evaluated
        pass
        # --- L4107 ---
        phase_table[38] = 16064  # raw literal, not evaluated
        pass
        # --- L4111 ---
        phase_table[38] = 16095  # raw literal, not evaluated
        pass
        # --- L4115 ---
        phase_table[38] = 16124  # raw literal, not evaluated
        pass
        # --- L4119 ---
        phase_table[38] = 16154  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4139 ---
        phase_table[39] = 16169  # raw literal, not evaluated
        switch(1):
            case 1: goto L4145
            case 2: goto L4151
            case 3: goto L4157
            case 4: goto L4163
            case 5: goto L4169
            case 6: goto L4175
            case 7: goto L4181
            case 8: goto L4187
            case 9: goto L4193
            case 10: goto L4199
            case 11: goto L4205
            case 12: goto L4211
            case 13: goto L4215
            case 14: goto L4219
            case 512: goto L4223
            case 32: goto L4229
            case 64: goto L4235
            case 128: goto L4241
            case 256: goto L4247
            default: goto L4253
        phase_table[39] = 16170  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4151 ---
        phase_table[39] = 16197  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4157 ---
        phase_table[39] = 16223  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4163 ---
        phase_table[39] = 16253  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4169 ---
        phase_table[39] = 16277  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4175 ---
        phase_table[39] = 16302  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4181 ---
        phase_table[39] = 16356  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4187 ---
        phase_table[39] = 16380  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4193 ---
        phase_table[39] = 16435  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4199 ---
        phase_table[39] = 16480  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4205 ---
        phase_table[39] = 16531  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4211 ---
        phase_table[39] = 16614  # raw literal, not evaluated
        pass
        # --- L4215 ---
        phase_table[39] = 16678  # raw literal, not evaluated
        pass
        # --- L4219 ---
        phase_table[39] = 16732  # raw literal, not evaluated
        pass
        # --- L4223 ---
        phase_table[39] = 16804  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4229 ---
        phase_table[39] = 16838  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4235 ---
        phase_table[39] = 16877  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4241 ---
        phase_table[39] = 16916  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4247 ---
        phase_table[39] = 16957  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4253 ---
        phase_table[39] = 16997  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4297 ---
        system_message(17036 /*" þ%"*/)
        # --- L4299 ---
        pass
        # --- L4300 ---
        if not (((var[24] & 512) > 0)):
            goto L4579
        # else: falls through here, rejoins L4858
        var[64] = random_below(100)
        if not (((var[1] == 0) and (var[64] < 4))):
            goto L4574
        # else: falls through here, rejoins L4574
        var[1] = (var[1] + 1)
        phase_table[40] = 17054  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4320
            case 1: goto L4324
            case 2: goto L4328
            case 7: goto L4332
            default: goto L4336
        phase_table[40] = 17055  # raw literal, not evaluated
        pass
        # --- L4324 ---
        phase_table[40] = 17090  # raw literal, not evaluated
        pass
        # --- L4328 ---
        phase_table[40] = 17117  # raw literal, not evaluated
        pass
        # --- L4332 ---
        phase_table[40] = 17156  # raw literal, not evaluated
        pass
        # --- L4336 ---
        phase_table[40] = 17184  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4350 ---
        phase_table[41] = 17237  # raw literal, not evaluated
        var[65] = random_below(4)
        if not (((random_below(1) != 7) and (var[65] >= 3))):
            goto L4363
        # else: falls through here, rejoins L4363
        var[65] = random_below(3)
        # --- L4363 ---
        switch(var[65]):
            case 0: goto L4366
            case 1: goto L4370
            case 3: goto L4374
            case 4: goto L4378
            case 5: goto L4382
            case 6: goto L4386
            case 7: goto L4390
            default: goto L4394
        phase_table[41] = 17238  # raw literal, not evaluated
        pass
        # --- L4370 ---
        phase_table[41] = 17242  # raw literal, not evaluated
        pass
        # --- L4374 ---
        phase_table[41] = 17253  # raw literal, not evaluated
        pass
        # --- L4378 ---
        phase_table[41] = 17274  # raw literal, not evaluated
        pass
        # --- L4382 ---
        phase_table[41] = 17301  # raw literal, not evaluated
        pass
        # --- L4386 ---
        phase_table[41] = 17332  # raw literal, not evaluated
        pass
        # --- L4390 ---
        phase_table[41] = 17361  # raw literal, not evaluated
        pass
        # --- L4394 ---
        phase_table[41] = 17391  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4414 ---
        phase_table[42] = 17406  # raw literal, not evaluated
        switch(4):
            case 1: goto L4420
            case 2: goto L4426
            case 3: goto L4432
            case 4: goto L4438
            case 5: goto L4444
            case 6: goto L4450
            case 7: goto L4456
            case 8: goto L4462
            case 9: goto L4468
            case 10: goto L4474
            case 11: goto L4480
            case 12: goto L4486
            case 13: goto L4490
            case 14: goto L4494
            case 512: goto L4498
            case 32: goto L4504
            case 64: goto L4510
            case 128: goto L4516
            case 256: goto L4522
            default: goto L4528
        phase_table[42] = 17407  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4426 ---
        phase_table[42] = 17434  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4432 ---
        phase_table[42] = 17460  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4438 ---
        phase_table[42] = 17490  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4444 ---
        phase_table[42] = 17514  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4450 ---
        phase_table[42] = 17539  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4456 ---
        phase_table[42] = 17593  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4462 ---
        phase_table[42] = 17617  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4468 ---
        phase_table[42] = 17672  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4474 ---
        phase_table[42] = 17717  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4480 ---
        phase_table[42] = 17768  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4486 ---
        phase_table[42] = 17851  # raw literal, not evaluated
        pass
        # --- L4490 ---
        phase_table[42] = 17915  # raw literal, not evaluated
        pass
        # --- L4494 ---
        phase_table[42] = 17969  # raw literal, not evaluated
        pass
        # --- L4498 ---
        phase_table[42] = 18041  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4504 ---
        phase_table[42] = 18075  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4510 ---
        phase_table[42] = 18114  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4516 ---
        phase_table[42] = 18153  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4522 ---
        phase_table[42] = 18194  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4528 ---
        phase_table[42] = 18234  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4572 ---
        system_message(18273 /*" þ("*/)
        # --- L4574 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L4579 ---
        if not (((var[24] & 128) > 0)):
            goto L4858
        # else: falls through here, rejoins L4858
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=3)
        var[67] = random_below(100)
        if not (((var[1] == 0) and (var[67] < 4))):
            goto L4858
        # else: falls through here, rejoins L4858
        var[1] = (var[1] + 1)
        phase_table[43] = 18291  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4604
            case 1: goto L4608
            case 2: goto L4612
            case 7: goto L4616
            default: goto L4620
        phase_table[43] = 18292  # raw literal, not evaluated
        pass
        # --- L4608 ---
        phase_table[43] = 18327  # raw literal, not evaluated
        pass
        # --- L4612 ---
        phase_table[43] = 18354  # raw literal, not evaluated
        pass
        # --- L4616 ---
        phase_table[43] = 18393  # raw literal, not evaluated
        pass
        # --- L4620 ---
        phase_table[43] = 18421  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4634 ---
        phase_table[44] = 18474  # raw literal, not evaluated
        var[68] = random_below(4)
        if not (((random_below(1) != 7) and (var[68] >= 3))):
            goto L4647
        # else: falls through here, rejoins L4647
        var[68] = random_below(3)
        # --- L4647 ---
        switch(var[68]):
            case 0: goto L4650
            case 1: goto L4654
            case 3: goto L4658
            case 4: goto L4662
            case 5: goto L4666
            case 6: goto L4670
            case 7: goto L4674
            default: goto L4678
        phase_table[44] = 18475  # raw literal, not evaluated
        pass
        # --- L4654 ---
        phase_table[44] = 18479  # raw literal, not evaluated
        pass
        # --- L4658 ---
        phase_table[44] = 18490  # raw literal, not evaluated
        pass
        # --- L4662 ---
        phase_table[44] = 18511  # raw literal, not evaluated
        pass
        # --- L4666 ---
        phase_table[44] = 18538  # raw literal, not evaluated
        pass
        # --- L4670 ---
        phase_table[44] = 18569  # raw literal, not evaluated
        pass
        # --- L4674 ---
        phase_table[44] = 18598  # raw literal, not evaluated
        pass
        # --- L4678 ---
        phase_table[44] = 18628  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4698 ---
        phase_table[45] = 18643  # raw literal, not evaluated
        switch(5):
            case 1: goto L4704
            case 2: goto L4710
            case 3: goto L4716
            case 4: goto L4722
            case 5: goto L4728
            case 6: goto L4734
            case 7: goto L4740
            case 8: goto L4746
            case 9: goto L4752
            case 10: goto L4758
            case 11: goto L4764
            case 12: goto L4770
            case 13: goto L4774
            case 14: goto L4778
            case 512: goto L4782
            case 32: goto L4788
            case 64: goto L4794
            case 128: goto L4800
            case 256: goto L4806
            default: goto L4812
        phase_table[45] = 18644  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4710 ---
        phase_table[45] = 18671  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4716 ---
        phase_table[45] = 18697  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4722 ---
        phase_table[45] = 18727  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4728 ---
        phase_table[45] = 18751  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4734 ---
        phase_table[45] = 18776  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4740 ---
        phase_table[45] = 18830  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4746 ---
        phase_table[45] = 18854  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4752 ---
        phase_table[45] = 18909  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4758 ---
        phase_table[45] = 18954  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4764 ---
        phase_table[45] = 19005  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4770 ---
        phase_table[45] = 19088  # raw literal, not evaluated
        pass
        # --- L4774 ---
        phase_table[45] = 19152  # raw literal, not evaluated
        pass
        # --- L4778 ---
        phase_table[45] = 19206  # raw literal, not evaluated
        pass
        # --- L4782 ---
        phase_table[45] = 19278  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4788 ---
        phase_table[45] = 19312  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4794 ---
        phase_table[45] = 19351  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4800 ---
        phase_table[45] = 19390  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4806 ---
        phase_table[45] = 19431  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4812 ---
        phase_table[45] = 19471  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4856 ---
        system_message(19510 /*" þ+"*/)
        # --- L4858 ---
        pass
        # --- L4859 ---
        if not (((var[24] & 512) > 0)):
            goto L4868
        # else: falls through here, rejoins L4868
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L4868 ---
        pass
        # --- L4869 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L4872
            case 64: goto L4878
            case 128: goto L4884
            case 256: goto L4890
            default: goto L4896
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L4878 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L4884 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L4890 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L4896 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4913 ---
        pass
        # --- L4914 ---
        if not ((var[47] > 0)):
            goto L5193
        # else: falls through here, rejoins L5198
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        var[70] = random_below(100)
        if not (((var[1] == 0) and (var[70] < 4))):
            goto L5193
        # else: falls through here, rejoins L5193
        var[1] = (var[1] + 1)
        phase_table[46] = 19528  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4939
            case 1: goto L4943
            case 2: goto L4947
            case 7: goto L4951
            default: goto L4955
        phase_table[46] = 19529  # raw literal, not evaluated
        pass
        # --- L4943 ---
        phase_table[46] = 19564  # raw literal, not evaluated
        pass
        # --- L4947 ---
        phase_table[46] = 19591  # raw literal, not evaluated
        pass
        # --- L4951 ---
        phase_table[46] = 19630  # raw literal, not evaluated
        pass
        # --- L4955 ---
        phase_table[46] = 19658  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4969 ---
        phase_table[47] = 19711  # raw literal, not evaluated
        var[71] = random_below(4)
        if not (((random_below(1) != 7) and (var[71] >= 3))):
            goto L4982
        # else: falls through here, rejoins L4982
        var[71] = random_below(3)
        # --- L4982 ---
        switch(var[71]):
            case 0: goto L4985
            case 1: goto L4989
            case 3: goto L4993
            case 4: goto L4997
            case 5: goto L5001
            case 6: goto L5005
            case 7: goto L5009
            default: goto L5013
        phase_table[47] = 19712  # raw literal, not evaluated
        pass
        # --- L4989 ---
        phase_table[47] = 19716  # raw literal, not evaluated
        pass
        # --- L4993 ---
        phase_table[47] = 19727  # raw literal, not evaluated
        pass
        # --- L4997 ---
        phase_table[47] = 19748  # raw literal, not evaluated
        pass
        # --- L5001 ---
        phase_table[47] = 19775  # raw literal, not evaluated
        pass
        # --- L5005 ---
        phase_table[47] = 19806  # raw literal, not evaluated
        pass
        # --- L5009 ---
        phase_table[47] = 19835  # raw literal, not evaluated
        pass
        # --- L5013 ---
        phase_table[47] = 19865  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5033 ---
        phase_table[48] = 19880  # raw literal, not evaluated
        switch(6):
            case 1: goto L5039
            case 2: goto L5045
            case 3: goto L5051
            case 4: goto L5057
            case 5: goto L5063
            case 6: goto L5069
            case 7: goto L5075
            case 8: goto L5081
            case 9: goto L5087
            case 10: goto L5093
            case 11: goto L5099
            case 12: goto L5105
            case 13: goto L5109
            case 14: goto L5113
            case 512: goto L5117
            case 32: goto L5123
            case 64: goto L5129
            case 128: goto L5135
            case 256: goto L5141
            default: goto L5147
        phase_table[48] = 19881  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5045 ---
        phase_table[48] = 19908  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5051 ---
        phase_table[48] = 19934  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5057 ---
        phase_table[48] = 19964  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5063 ---
        phase_table[48] = 19988  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5069 ---
        phase_table[48] = 20013  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5075 ---
        phase_table[48] = 20067  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5081 ---
        phase_table[48] = 20091  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5087 ---
        phase_table[48] = 20146  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5093 ---
        phase_table[48] = 20191  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5099 ---
        phase_table[48] = 20242  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5105 ---
        phase_table[48] = 20325  # raw literal, not evaluated
        pass
        # --- L5109 ---
        phase_table[48] = 20389  # raw literal, not evaluated
        pass
        # --- L5113 ---
        phase_table[48] = 20443  # raw literal, not evaluated
        pass
        # --- L5117 ---
        phase_table[48] = 20515  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5123 ---
        phase_table[48] = 20549  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5129 ---
        phase_table[48] = 20588  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5135 ---
        phase_table[48] = 20627  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5141 ---
        phase_table[48] = 20668  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5147 ---
        phase_table[48] = 20708  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5191 ---
        system_message(20747 /*" þ."*/)
        # --- L5193 ---
        move_unit(unit[11], priority=0, dest_type=0, dest_arg=0)
        # --- L5198 ---
        pass
        # --- L5199 ---
        if not ((set_unit_behavior(7, 11) != 3)):
            goto L5208
        # else: falls through here, rejoins L5208
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L5208 ---
        pass
        # --- L5209 ---
        if not ((((var[24] & 7136) == 0) and (var[47] == 0))):
            goto L5582
        # else: falls through here, rejoins L5606
        var[73] = random_below(100)
        if not (((var[1] == 0) and (var[73] < 4))):
            goto L5483
        # else: falls through here, rejoins L5483
        var[1] = (var[1] + 1)
        phase_table[49] = 20765  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5229
            case 1: goto L5233
            case 2: goto L5237
            case 7: goto L5241
            default: goto L5245
        phase_table[49] = 20766  # raw literal, not evaluated
        pass
        # --- L5233 ---
        phase_table[49] = 20801  # raw literal, not evaluated
        pass
        # --- L5237 ---
        phase_table[49] = 20828  # raw literal, not evaluated
        pass
        # --- L5241 ---
        phase_table[49] = 20867  # raw literal, not evaluated
        pass
        # --- L5245 ---
        phase_table[49] = 20895  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5259 ---
        phase_table[50] = 20948  # raw literal, not evaluated
        var[74] = random_below(4)
        if not (((random_below(1) != 7) and (var[74] >= 3))):
            goto L5272
        # else: falls through here, rejoins L5272
        var[74] = random_below(3)
        # --- L5272 ---
        switch(var[74]):
            case 0: goto L5275
            case 1: goto L5279
            case 3: goto L5283
            case 4: goto L5287
            case 5: goto L5291
            case 6: goto L5295
            case 7: goto L5299
            default: goto L5303
        phase_table[50] = 20949  # raw literal, not evaluated
        pass
        # --- L5279 ---
        phase_table[50] = 20953  # raw literal, not evaluated
        pass
        # --- L5283 ---
        phase_table[50] = 20964  # raw literal, not evaluated
        pass
        # --- L5287 ---
        phase_table[50] = 20985  # raw literal, not evaluated
        pass
        # --- L5291 ---
        phase_table[50] = 21012  # raw literal, not evaluated
        pass
        # --- L5295 ---
        phase_table[50] = 21043  # raw literal, not evaluated
        pass
        # --- L5299 ---
        phase_table[50] = 21072  # raw literal, not evaluated
        pass
        # --- L5303 ---
        phase_table[50] = 21102  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5323 ---
        phase_table[51] = 21117  # raw literal, not evaluated
        switch(7):
            case 1: goto L5329
            case 2: goto L5335
            case 3: goto L5341
            case 4: goto L5347
            case 5: goto L5353
            case 6: goto L5359
            case 7: goto L5365
            case 8: goto L5371
            case 9: goto L5377
            case 10: goto L5383
            case 11: goto L5389
            case 12: goto L5395
            case 13: goto L5399
            case 14: goto L5403
            case 512: goto L5407
            case 32: goto L5413
            case 64: goto L5419
            case 128: goto L5425
            case 256: goto L5431
            default: goto L5437
        phase_table[51] = 21118  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5335 ---
        phase_table[51] = 21145  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5341 ---
        phase_table[51] = 21171  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5347 ---
        phase_table[51] = 21201  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5353 ---
        phase_table[51] = 21225  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5359 ---
        phase_table[51] = 21250  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5365 ---
        phase_table[51] = 21304  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5371 ---
        phase_table[51] = 21328  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5377 ---
        phase_table[51] = 21383  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5383 ---
        phase_table[51] = 21428  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5389 ---
        phase_table[51] = 21479  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5395 ---
        phase_table[51] = 21562  # raw literal, not evaluated
        pass
        # --- L5399 ---
        phase_table[51] = 21626  # raw literal, not evaluated
        pass
        # --- L5403 ---
        phase_table[51] = 21680  # raw literal, not evaluated
        pass
        # --- L5407 ---
        phase_table[51] = 21752  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5413 ---
        phase_table[51] = 21786  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5419 ---
        phase_table[51] = 21825  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5425 ---
        phase_table[51] = 21864  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5431 ---
        phase_table[51] = 21905  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5437 ---
        phase_table[51] = 21945  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5481 ---
        system_message(21984 /*" þ1"*/)
        # --- L5483 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L5486
            case 64: goto L5504
            case 128: goto L5522
            case 256: goto L5540
            default: goto L5558
        if not (group_condition_ref(1, 11)):
            goto L5494
        # else: falls through here, rejoins L5494
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5494 ---
        condition[1] = Condition(var_ref=1, expr_offset=4053)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L5504 ---
        if not (group_condition_ref(2, 11)):
            goto L5512
        # else: falls through here, rejoins L5512
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5512 ---
        condition[2] = Condition(var_ref=2, expr_offset=4074)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L5522 ---
        if not (group_condition_ref(3, 11)):
            goto L5530
        # else: falls through here, rejoins L5530
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5530 ---
        condition[3] = Condition(var_ref=3, expr_offset=4095)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5540 ---
        if not (group_condition_ref(4, 11)):
            goto L5548
        # else: falls through here, rejoins L5548
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5548 ---
        condition[4] = Condition(var_ref=4, expr_offset=4116)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5558 ---
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5575 ---
        if not (((set_unit_behavior(8, 11) & 1024) > 0)):
            goto L5582
        # else: falls through here, rejoins L5582
        unit[11].attr8 = (set_unit_behavior(8, 11) - 1024)
        # --- L5582 ---
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L5597
        # else: falls through here, rejoins L5606
        timer[1] = current_turn + 2
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        move_unit(unit[11], priority=var[51], dest_type=0, dest_arg=0)
        # --- L5597 ---
        if not (timer_expired(1)):
            goto L5606
        # else: falls through here, rejoins L5606
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L5606 ---
        pass
        # --- L5607 ---
        pass
        # --- L5608 ---
        if not ((set_unit_behavior(7, 11) != 4)):
            goto L5887
        # else: falls through here, rejoins L5902
        var[76] = random_below(100)
        if not (((var[1] == 0) and (var[76] < 4))):
            goto L5882
        # else: falls through here, rejoins L5882
        var[1] = (var[1] + 1)
        phase_table[52] = 22002  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5628
            case 1: goto L5632
            case 2: goto L5636
            case 7: goto L5640
            default: goto L5644
        phase_table[52] = 22003  # raw literal, not evaluated
        pass
        # --- L5632 ---
        phase_table[52] = 22038  # raw literal, not evaluated
        pass
        # --- L5636 ---
        phase_table[52] = 22065  # raw literal, not evaluated
        pass
        # --- L5640 ---
        phase_table[52] = 22104  # raw literal, not evaluated
        pass
        # --- L5644 ---
        phase_table[52] = 22132  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5658 ---
        phase_table[53] = 22185  # raw literal, not evaluated
        var[77] = random_below(4)
        if not (((random_below(1) != 7) and (var[77] >= 3))):
            goto L5671
        # else: falls through here, rejoins L5671
        var[77] = random_below(3)
        # --- L5671 ---
        switch(var[77]):
            case 0: goto L5674
            case 1: goto L5678
            case 3: goto L5682
            case 4: goto L5686
            case 5: goto L5690
            case 6: goto L5694
            case 7: goto L5698
            default: goto L5702
        phase_table[53] = 22186  # raw literal, not evaluated
        pass
        # --- L5678 ---
        phase_table[53] = 22190  # raw literal, not evaluated
        pass
        # --- L5682 ---
        phase_table[53] = 22201  # raw literal, not evaluated
        pass
        # --- L5686 ---
        phase_table[53] = 22222  # raw literal, not evaluated
        pass
        # --- L5690 ---
        phase_table[53] = 22249  # raw literal, not evaluated
        pass
        # --- L5694 ---
        phase_table[53] = 22280  # raw literal, not evaluated
        pass
        # --- L5698 ---
        phase_table[53] = 22309  # raw literal, not evaluated
        pass
        # --- L5702 ---
        phase_table[53] = 22339  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5722 ---
        phase_table[54] = 22354  # raw literal, not evaluated
        switch(9):
            case 1: goto L5728
            case 2: goto L5734
            case 3: goto L5740
            case 4: goto L5746
            case 5: goto L5752
            case 6: goto L5758
            case 7: goto L5764
            case 8: goto L5770
            case 9: goto L5776
            case 10: goto L5782
            case 11: goto L5788
            case 12: goto L5794
            case 13: goto L5798
            case 14: goto L5802
            case 512: goto L5806
            case 32: goto L5812
            case 64: goto L5818
            case 128: goto L5824
            case 256: goto L5830
            default: goto L5836
        phase_table[54] = 22355  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5734 ---
        phase_table[54] = 22382  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5740 ---
        phase_table[54] = 22408  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5746 ---
        phase_table[54] = 22438  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5752 ---
        phase_table[54] = 22462  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5758 ---
        phase_table[54] = 22487  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5764 ---
        phase_table[54] = 22541  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5770 ---
        phase_table[54] = 22565  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5776 ---
        phase_table[54] = 22620  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5782 ---
        phase_table[54] = 22665  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5788 ---
        phase_table[54] = 22716  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5794 ---
        phase_table[54] = 22799  # raw literal, not evaluated
        pass
        # --- L5798 ---
        phase_table[54] = 22863  # raw literal, not evaluated
        pass
        # --- L5802 ---
        phase_table[54] = 22917  # raw literal, not evaluated
        pass
        # --- L5806 ---
        phase_table[54] = 22989  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5812 ---
        phase_table[54] = 23023  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5818 ---
        phase_table[54] = 23062  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5824 ---
        phase_table[54] = 23101  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5830 ---
        phase_table[54] = 23142  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5836 ---
        phase_table[54] = 23182  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5880 ---
        system_message(23221 /*" þ4"*/)
        # --- L5882 ---
        move_unit(unit[11], priority=4, dest_type=3, dest_arg=13)
        # --- L5887 ---
        var[79] = set_unit_behavior(10, 11)
        unit[14] = var[79]
        if not (group_condition(14)):
            goto L5902
        # else: falls through here, rejoins L5902
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        # --- L5902 ---
        pass
        # --- L5903 ---
        pass
        # --- L5904 ---
        if not ((((var[24] & 7136) == 0) & (var[47] == 0))):
            goto L6277
        # else: falls through here, rejoins L6289
        var[80] = random_below(100)
        if not (((var[1] == 0) and (var[80] < 4))):
            goto L6178
        # else: falls through here, rejoins L6178
        var[1] = (var[1] + 1)
        phase_table[55] = 23239  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5924
            case 1: goto L5928
            case 2: goto L5932
            case 7: goto L5936
            default: goto L5940
        phase_table[55] = 23240  # raw literal, not evaluated
        pass
        # --- L5928 ---
        phase_table[55] = 23275  # raw literal, not evaluated
        pass
        # --- L5932 ---
        phase_table[55] = 23302  # raw literal, not evaluated
        pass
        # --- L5936 ---
        phase_table[55] = 23341  # raw literal, not evaluated
        pass
        # --- L5940 ---
        phase_table[55] = 23369  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5954 ---
        phase_table[56] = 23422  # raw literal, not evaluated
        var[81] = random_below(4)
        if not (((random_below(1) != 7) and (var[81] >= 3))):
            goto L5967
        # else: falls through here, rejoins L5967
        var[81] = random_below(3)
        # --- L5967 ---
        switch(var[81]):
            case 0: goto L5970
            case 1: goto L5974
            case 3: goto L5978
            case 4: goto L5982
            case 5: goto L5986
            case 6: goto L5990
            case 7: goto L5994
            default: goto L5998
        phase_table[56] = 23423  # raw literal, not evaluated
        pass
        # --- L5974 ---
        phase_table[56] = 23427  # raw literal, not evaluated
        pass
        # --- L5978 ---
        phase_table[56] = 23438  # raw literal, not evaluated
        pass
        # --- L5982 ---
        phase_table[56] = 23459  # raw literal, not evaluated
        pass
        # --- L5986 ---
        phase_table[56] = 23486  # raw literal, not evaluated
        pass
        # --- L5990 ---
        phase_table[56] = 23517  # raw literal, not evaluated
        pass
        # --- L5994 ---
        phase_table[56] = 23546  # raw literal, not evaluated
        pass
        # --- L5998 ---
        phase_table[56] = 23576  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L6018 ---
        phase_table[57] = 23591  # raw literal, not evaluated
        switch(7):
            case 1: goto L6024
            case 2: goto L6030
            case 3: goto L6036
            case 4: goto L6042
            case 5: goto L6048
            case 6: goto L6054
            case 7: goto L6060
            case 8: goto L6066
            case 9: goto L6072
            case 10: goto L6078
            case 11: goto L6084
            case 12: goto L6090
            case 13: goto L6094
            case 14: goto L6098
            case 512: goto L6102
            case 32: goto L6108
            case 64: goto L6114
            case 128: goto L6120
            case 256: goto L6126
            default: goto L6132
        phase_table[57] = 23592  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6030 ---
        phase_table[57] = 23619  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6036 ---
        phase_table[57] = 23645  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6042 ---
        phase_table[57] = 23675  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6048 ---
        phase_table[57] = 23699  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6054 ---
        phase_table[57] = 23724  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6060 ---
        phase_table[57] = 23778  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6066 ---
        phase_table[57] = 23802  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6072 ---
        phase_table[57] = 23857  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6078 ---
        phase_table[57] = 23902  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6084 ---
        phase_table[57] = 23953  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6090 ---
        phase_table[57] = 24036  # raw literal, not evaluated
        pass
        # --- L6094 ---
        phase_table[57] = 24100  # raw literal, not evaluated
        pass
        # --- L6098 ---
        phase_table[57] = 24154  # raw literal, not evaluated
        pass
        # --- L6102 ---
        phase_table[57] = 24226  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6108 ---
        phase_table[57] = 24260  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6114 ---
        phase_table[57] = 24299  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6120 ---
        phase_table[57] = 24338  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6126 ---
        phase_table[57] = 24379  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6132 ---
        phase_table[57] = 24419  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6176 ---
        system_message(24458 /*" þ7"*/)
        # --- L6178 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L6181
            case 64: goto L6199
            case 128: goto L6217
            case 256: goto L6235
            default: goto L6253
        if not (group_condition_ref(1, 11)):
            goto L6189
        # else: falls through here, rejoins L6189
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6189 ---
        condition[1] = Condition(var_ref=1, expr_offset=4549)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L6199 ---
        if not (group_condition_ref(2, 11)):
            goto L6207
        # else: falls through here, rejoins L6207
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6207 ---
        condition[2] = Condition(var_ref=2, expr_offset=4570)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L6217 ---
        if not (group_condition_ref(3, 11)):
            goto L6225
        # else: falls through here, rejoins L6225
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6225 ---
        condition[3] = Condition(var_ref=3, expr_offset=4591)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L6235 ---
        if not (group_condition_ref(4, 11)):
            goto L6243
        # else: falls through here, rejoins L6243
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6243 ---
        condition[4] = Condition(var_ref=4, expr_offset=4612)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L6253 ---
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6270 ---
        if not (((set_unit_behavior(8, 11) & 1024) > 0)):
            goto L6277
        # else: falls through here, rejoins L6277
        unit[11].attr8 = (set_unit_behavior(8, 11) - 1024)
        # --- L6277 ---
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L6289
        # else: falls through here, rejoins L6289
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        move_unit(unit[11], priority=var[51], dest_type=0, dest_arg=0)
        # --- L6289 ---
        pass
        # --- L6290 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L6318 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5f9c] - dead end, not decoded further (other branches continue independently)
        # --- L6325 ---
        var[4] = 0
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 11):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L6342
        # --- L6334 ---
        var[4] = (var[4] + 1)
        unit[11] = next_unit_in_group(unit[11], group=2)
        goto L6334
        # --- L6342 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5fba] - dead end, not decoded further (other branches continue independently)
        # --- L6442 ---
        if ((any_group_alive(2) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L6447
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6447 ---
        if (timer_expired(3) and (var[6] > 0)) and not flag[3]:
            flag[3] = True
            ...  # run block below, converges at L6453
        system_message(24768 /*"Mobile defense node threatened. Call all nearby units from defense pool."*/)
        # --- L6453 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (any_group_alive(2)):
                goto L6465
            # else: falls through here, rejoins L6470
            play_sound(35)
            system_message(24841 /*"You rock, dude!"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6465 ---
            system_message(24857 /*"Mission failed! You suck!"*/)
            set_unit_objective(unit=1, state=2)
            # --- L6470 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
