# SIT331.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[2] == 0)):
        goto L8
    # else: falls through here, rejoins L8
    var[2] = (random_below(var[6]) + var[7])
    # --- L8 ---
    var[8] = (stat(0) / 1)
    var[8] = (var[8] - 200)
    var[9] = 8192
    while (var[9] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L32
    # --- L20 ---
    if not ((var[8] < var[9])):
        goto L27
    # else: falls through here, rejoins L27
    var[4] = (var[4] + 1)
    # --- L27 ---
    var[9] = (var[9] / 4)
    goto L20
    # --- L32 ---
    var[10] = 0
    var[11] = 0
    var[12] = 25
    var[13] = 27
    var[14] = 0
    var[15] = 360
    if not ((var[12] > (var[4] + 5))):
        goto L57
    # else: falls through here, rejoins L60
    var[12] = (var[12] - var[4])
    # --- L57 ---
    var[12] = 5
    # --- L60 ---
    if not ((var[13] > (var[4] + 10))):
        goto L67
    # else: falls through here, rejoins L70
    var[13] = (var[13] - var[4])
    # --- L67 ---
    var[13] = 10
    # --- L70 ---
    if not ((var[10] == 0)):
        goto L77
    # else: falls through here, rejoins L77
    var[10] = (var[12] + random_below((var[13] - var[12])))
    # --- L77 ---
    if not ((var[11] == 0)):
        goto L84
    # else: falls through here, rejoins L84
    var[11] = ((random_below(var[15]) + var[14]) - (var[15] / 2))
    # --- L84 ---
    hex[7] = hex_along_path(toward=var[10], steps=var[11])
    var[16] = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
    var[17] = 0
    var[17] = (var[17] + 1)
    if not ((var[8] > 300)):
        goto L118
    # else: falls through here, rejoins L121
    var[5] = (var[8] / 2)
    if not ((var[5] < 300)):
        goto L111
    # else: falls through here, rejoins L118
    var[5] = 300
    # --- L111 ---
    if not ((var[5] > 1200)):
        goto L118
    # else: falls through here, rejoins L118
    var[5] = 1200
    # --- L118 ---
    var[5] = var[8]
    # --- L121 ---
    var[8] = (var[8] - var[5])
    hex[1] = hex_along_path(toward=random_below(32), steps=random_below(360))
    condition[1] = Condition(var_ref=1, expr_offset=239)
    group[3] = spawn_ai_squad(point_budget=var[5], hex_ref=1)
    move_group(group[3], priority=var[16], dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 47
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00a1] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[3] = 0
        if not (timer_expired(2)):
            goto L6272
        # else: falls through here, rejoins L6272
        timer[2] = current_turn + 1
        var[1] = 0
        var[21] = 0
        if not ((group_condition_ref_2(7, 1) and group_condition_ref_2(7, 2))):
            goto L1000
        # else: falls through here, rejoins L1007
        unit[4] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[22] = random_below(100)
        if not (((var[1] == 0) and (var[22] < 2))):
            goto L993
        # else: falls through here, rejoins L993
        var[1] = (var[1] + 1)
        phase_table[4] = 1946  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L739
            case 1: goto L743
            case 2: goto L747
            case 7: goto L751
            default: goto L755
        phase_table[4] = 1947  # raw literal, not evaluated
        pass
        # --- L743 ---
        phase_table[4] = 1982  # raw literal, not evaluated
        pass
        # --- L747 ---
        phase_table[4] = 2009  # raw literal, not evaluated
        pass
        # --- L751 ---
        phase_table[4] = 2048  # raw literal, not evaluated
        pass
        # --- L755 ---
        phase_table[4] = 2076  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L769 ---
        phase_table[5] = 2129  # raw literal, not evaluated
        var[23] = random_below(4)
        if not (((random_below(4) != 7) and (var[23] >= 3))):
            goto L782
        # else: falls through here, rejoins L782
        var[23] = random_below(3)
        # --- L782 ---
        switch(var[23]):
            case 0: goto L785
            case 1: goto L789
            case 3: goto L793
            case 4: goto L797
            case 5: goto L801
            case 6: goto L805
            case 7: goto L809
            default: goto L813
        phase_table[5] = 2130  # raw literal, not evaluated
        pass
        # --- L789 ---
        phase_table[5] = 2134  # raw literal, not evaluated
        pass
        # --- L793 ---
        phase_table[5] = 2145  # raw literal, not evaluated
        pass
        # --- L797 ---
        phase_table[5] = 2166  # raw literal, not evaluated
        pass
        # --- L801 ---
        phase_table[5] = 2193  # raw literal, not evaluated
        pass
        # --- L805 ---
        phase_table[5] = 2224  # raw literal, not evaluated
        pass
        # --- L809 ---
        phase_table[5] = 2253  # raw literal, not evaluated
        pass
        # --- L813 ---
        phase_table[5] = 2283  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L833 ---
        phase_table[6] = 2298  # raw literal, not evaluated
        switch(512):
            case 1: goto L839
            case 2: goto L845
            case 3: goto L851
            case 4: goto L857
            case 5: goto L863
            case 6: goto L869
            case 7: goto L875
            case 8: goto L881
            case 9: goto L887
            case 10: goto L893
            case 11: goto L899
            case 12: goto L905
            case 13: goto L909
            case 14: goto L913
            case 512: goto L917
            case 32: goto L923
            case 64: goto L929
            case 128: goto L935
            case 256: goto L941
            default: goto L947
        phase_table[6] = 2299  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L845 ---
        phase_table[6] = 2326  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L851 ---
        phase_table[6] = 2352  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L857 ---
        phase_table[6] = 2382  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L863 ---
        phase_table[6] = 2406  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L869 ---
        phase_table[6] = 2431  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L875 ---
        phase_table[6] = 2485  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L881 ---
        phase_table[6] = 2509  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L887 ---
        phase_table[6] = 2564  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L893 ---
        phase_table[6] = 2609  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L899 ---
        phase_table[6] = 2660  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L905 ---
        phase_table[6] = 2743  # raw literal, not evaluated
        pass
        # --- L909 ---
        phase_table[6] = 2807  # raw literal, not evaluated
        pass
        # --- L913 ---
        phase_table[6] = 2861  # raw literal, not evaluated
        pass
        # --- L917 ---
        phase_table[6] = 2933  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L923 ---
        phase_table[6] = 2967  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L929 ---
        phase_table[6] = 3006  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L935 ---
        phase_table[6] = 3045  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L941 ---
        phase_table[6] = 3086  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L947 ---
        phase_table[6] = 3126  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L991 ---
        system_message(3165 /*" þ"*/)
        # --- L993 ---
        if not (((var[21] & 512) == 0)):
            goto L1000
        # else: falls through here, rejoins L1000
        var[21] = (var[21] + 512)
        # --- L1000 ---
        if not (((var[21] & 512) > 0)):
            goto L1007
        # else: falls through here, rejoins L1007
        var[21] = (var[21] - 512)
        # --- L1007 ---
        if not ((group_condition_ref_2(1, 1) and group_condition_ref_2(1, 2))):
            goto L1291
        # else: falls through here, rejoins L1298
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[25] = random_below(100)
        if not (((var[1] == 0) and (var[25] < 2))):
            goto L1284
        # else: falls through here, rejoins L1284
        var[1] = (var[1] + 1)
        phase_table[7] = 3183  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1030
            case 1: goto L1034
            case 2: goto L1038
            case 7: goto L1042
            default: goto L1046
        phase_table[7] = 3184  # raw literal, not evaluated
        pass
        # --- L1034 ---
        phase_table[7] = 3219  # raw literal, not evaluated
        pass
        # --- L1038 ---
        phase_table[7] = 3246  # raw literal, not evaluated
        pass
        # --- L1042 ---
        phase_table[7] = 3285  # raw literal, not evaluated
        pass
        # --- L1046 ---
        phase_table[7] = 3313  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1060 ---
        phase_table[8] = 3366  # raw literal, not evaluated
        var[26] = random_below(4)
        if not (((random_below(4) != 7) and (var[26] >= 3))):
            goto L1073
        # else: falls through here, rejoins L1073
        var[26] = random_below(3)
        # --- L1073 ---
        switch(var[26]):
            case 0: goto L1076
            case 1: goto L1080
            case 3: goto L1084
            case 4: goto L1088
            case 5: goto L1092
            case 6: goto L1096
            case 7: goto L1100
            default: goto L1104
        phase_table[8] = 3367  # raw literal, not evaluated
        pass
        # --- L1080 ---
        phase_table[8] = 3371  # raw literal, not evaluated
        pass
        # --- L1084 ---
        phase_table[8] = 3382  # raw literal, not evaluated
        pass
        # --- L1088 ---
        phase_table[8] = 3403  # raw literal, not evaluated
        pass
        # --- L1092 ---
        phase_table[8] = 3430  # raw literal, not evaluated
        pass
        # --- L1096 ---
        phase_table[8] = 3461  # raw literal, not evaluated
        pass
        # --- L1100 ---
        phase_table[8] = 3490  # raw literal, not evaluated
        pass
        # --- L1104 ---
        phase_table[8] = 3520  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1124 ---
        phase_table[9] = 3535  # raw literal, not evaluated
        switch(32):
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
        phase_table[9] = 3536  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1136 ---
        phase_table[9] = 3563  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1142 ---
        phase_table[9] = 3589  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1148 ---
        phase_table[9] = 3619  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1154 ---
        phase_table[9] = 3643  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1160 ---
        phase_table[9] = 3668  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1166 ---
        phase_table[9] = 3722  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1172 ---
        phase_table[9] = 3746  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1178 ---
        phase_table[9] = 3801  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1184 ---
        phase_table[9] = 3846  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1190 ---
        phase_table[9] = 3897  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1196 ---
        phase_table[9] = 3980  # raw literal, not evaluated
        pass
        # --- L1200 ---
        phase_table[9] = 4044  # raw literal, not evaluated
        pass
        # --- L1204 ---
        phase_table[9] = 4098  # raw literal, not evaluated
        pass
        # --- L1208 ---
        phase_table[9] = 4170  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1214 ---
        phase_table[9] = 4204  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1220 ---
        phase_table[9] = 4243  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1226 ---
        phase_table[9] = 4282  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1232 ---
        phase_table[9] = 4323  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1238 ---
        phase_table[9] = 4363  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1282 ---
        system_message(4402 /*" þ"*/)
        # --- L1284 ---
        if not (((var[21] & 32) == 0)):
            goto L1291
        # else: falls through here, rejoins L1291
        var[21] = (var[21] + 32)
        # --- L1291 ---
        if not (((var[21] & 32) > 0)):
            goto L1298
        # else: falls through here, rejoins L1298
        var[21] = (var[21] - 32)
        # --- L1298 ---
        if not ((group_condition_ref_2(2, 1) and group_condition_ref_2(2, 2))):
            goto L1582
        # else: falls through here, rejoins L1589
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[28] = random_below(100)
        if not (((var[1] == 0) and (var[28] < 2))):
            goto L1575
        # else: falls through here, rejoins L1575
        var[1] = (var[1] + 1)
        phase_table[10] = 4420  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1321
            case 1: goto L1325
            case 2: goto L1329
            case 7: goto L1333
            default: goto L1337
        phase_table[10] = 4421  # raw literal, not evaluated
        pass
        # --- L1325 ---
        phase_table[10] = 4456  # raw literal, not evaluated
        pass
        # --- L1329 ---
        phase_table[10] = 4483  # raw literal, not evaluated
        pass
        # --- L1333 ---
        phase_table[10] = 4522  # raw literal, not evaluated
        pass
        # --- L1337 ---
        phase_table[10] = 4550  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1351 ---
        phase_table[11] = 4603  # raw literal, not evaluated
        var[29] = random_below(4)
        if not (((random_below(4) != 7) and (var[29] >= 3))):
            goto L1364
        # else: falls through here, rejoins L1364
        var[29] = random_below(3)
        # --- L1364 ---
        switch(var[29]):
            case 0: goto L1367
            case 1: goto L1371
            case 3: goto L1375
            case 4: goto L1379
            case 5: goto L1383
            case 6: goto L1387
            case 7: goto L1391
            default: goto L1395
        phase_table[11] = 4604  # raw literal, not evaluated
        pass
        # --- L1371 ---
        phase_table[11] = 4608  # raw literal, not evaluated
        pass
        # --- L1375 ---
        phase_table[11] = 4619  # raw literal, not evaluated
        pass
        # --- L1379 ---
        phase_table[11] = 4640  # raw literal, not evaluated
        pass
        # --- L1383 ---
        phase_table[11] = 4667  # raw literal, not evaluated
        pass
        # --- L1387 ---
        phase_table[11] = 4698  # raw literal, not evaluated
        pass
        # --- L1391 ---
        phase_table[11] = 4727  # raw literal, not evaluated
        pass
        # --- L1395 ---
        phase_table[11] = 4757  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1415 ---
        phase_table[12] = 4772  # raw literal, not evaluated
        switch(64):
            case 1: goto L1421
            case 2: goto L1427
            case 3: goto L1433
            case 4: goto L1439
            case 5: goto L1445
            case 6: goto L1451
            case 7: goto L1457
            case 8: goto L1463
            case 9: goto L1469
            case 10: goto L1475
            case 11: goto L1481
            case 12: goto L1487
            case 13: goto L1491
            case 14: goto L1495
            case 512: goto L1499
            case 32: goto L1505
            case 64: goto L1511
            case 128: goto L1517
            case 256: goto L1523
            default: goto L1529
        phase_table[12] = 4773  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1427 ---
        phase_table[12] = 4800  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1433 ---
        phase_table[12] = 4826  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1439 ---
        phase_table[12] = 4856  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1445 ---
        phase_table[12] = 4880  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1451 ---
        phase_table[12] = 4905  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1457 ---
        phase_table[12] = 4959  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1463 ---
        phase_table[12] = 4983  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1469 ---
        phase_table[12] = 5038  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1475 ---
        phase_table[12] = 5083  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1481 ---
        phase_table[12] = 5134  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1487 ---
        phase_table[12] = 5217  # raw literal, not evaluated
        pass
        # --- L1491 ---
        phase_table[12] = 5281  # raw literal, not evaluated
        pass
        # --- L1495 ---
        phase_table[12] = 5335  # raw literal, not evaluated
        pass
        # --- L1499 ---
        phase_table[12] = 5407  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1505 ---
        phase_table[12] = 5441  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1511 ---
        phase_table[12] = 5480  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1517 ---
        phase_table[12] = 5519  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1523 ---
        phase_table[12] = 5560  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1529 ---
        phase_table[12] = 5600  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1573 ---
        system_message(5639 /*" þ
"*/)
        # --- L1575 ---
        if not (((var[21] & 64) == 0)):
            goto L1582
        # else: falls through here, rejoins L1582
        var[21] = (var[21] + 64)
        # --- L1582 ---
        if not (((var[21] & 64) > 0)):
            goto L1589
        # else: falls through here, rejoins L1589
        var[21] = (var[21] - 64)
        # --- L1589 ---
        if not ((group_condition_ref_2(3, 1) and group_condition_ref_2(3, 2))):
            goto L1873
        # else: falls through here, rejoins L1880
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[31] = random_below(100)
        if not (((var[1] == 0) and (var[31] < 2))):
            goto L1866
        # else: falls through here, rejoins L1866
        var[1] = (var[1] + 1)
        phase_table[13] = 5657  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1612
            case 1: goto L1616
            case 2: goto L1620
            case 7: goto L1624
            default: goto L1628
        phase_table[13] = 5658  # raw literal, not evaluated
        pass
        # --- L1616 ---
        phase_table[13] = 5693  # raw literal, not evaluated
        pass
        # --- L1620 ---
        phase_table[13] = 5720  # raw literal, not evaluated
        pass
        # --- L1624 ---
        phase_table[13] = 5759  # raw literal, not evaluated
        pass
        # --- L1628 ---
        phase_table[13] = 5787  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1642 ---
        phase_table[14] = 5840  # raw literal, not evaluated
        var[32] = random_below(4)
        if not (((random_below(4) != 7) and (var[32] >= 3))):
            goto L1655
        # else: falls through here, rejoins L1655
        var[32] = random_below(3)
        # --- L1655 ---
        switch(var[32]):
            case 0: goto L1658
            case 1: goto L1662
            case 3: goto L1666
            case 4: goto L1670
            case 5: goto L1674
            case 6: goto L1678
            case 7: goto L1682
            default: goto L1686
        phase_table[14] = 5841  # raw literal, not evaluated
        pass
        # --- L1662 ---
        phase_table[14] = 5845  # raw literal, not evaluated
        pass
        # --- L1666 ---
        phase_table[14] = 5856  # raw literal, not evaluated
        pass
        # --- L1670 ---
        phase_table[14] = 5877  # raw literal, not evaluated
        pass
        # --- L1674 ---
        phase_table[14] = 5904  # raw literal, not evaluated
        pass
        # --- L1678 ---
        phase_table[14] = 5935  # raw literal, not evaluated
        pass
        # --- L1682 ---
        phase_table[14] = 5964  # raw literal, not evaluated
        pass
        # --- L1686 ---
        phase_table[14] = 5994  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1706 ---
        phase_table[15] = 6009  # raw literal, not evaluated
        switch(128):
            case 1: goto L1712
            case 2: goto L1718
            case 3: goto L1724
            case 4: goto L1730
            case 5: goto L1736
            case 6: goto L1742
            case 7: goto L1748
            case 8: goto L1754
            case 9: goto L1760
            case 10: goto L1766
            case 11: goto L1772
            case 12: goto L1778
            case 13: goto L1782
            case 14: goto L1786
            case 512: goto L1790
            case 32: goto L1796
            case 64: goto L1802
            case 128: goto L1808
            case 256: goto L1814
            default: goto L1820
        phase_table[15] = 6010  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1718 ---
        phase_table[15] = 6037  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1724 ---
        phase_table[15] = 6063  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1730 ---
        phase_table[15] = 6093  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1736 ---
        phase_table[15] = 6117  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1742 ---
        phase_table[15] = 6142  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1748 ---
        phase_table[15] = 6196  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1754 ---
        phase_table[15] = 6220  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1760 ---
        phase_table[15] = 6275  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1766 ---
        phase_table[15] = 6320  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1772 ---
        phase_table[15] = 6371  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1778 ---
        phase_table[15] = 6454  # raw literal, not evaluated
        pass
        # --- L1782 ---
        phase_table[15] = 6518  # raw literal, not evaluated
        pass
        # --- L1786 ---
        phase_table[15] = 6572  # raw literal, not evaluated
        pass
        # --- L1790 ---
        phase_table[15] = 6644  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1796 ---
        phase_table[15] = 6678  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1802 ---
        phase_table[15] = 6717  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1808 ---
        phase_table[15] = 6756  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1814 ---
        phase_table[15] = 6797  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1820 ---
        phase_table[15] = 6837  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1864 ---
        system_message(6876 /*" þ"*/)
        # --- L1866 ---
        if not (((var[21] & 128) == 0)):
            goto L1873
        # else: falls through here, rejoins L1873
        var[21] = (var[21] + 128)
        # --- L1873 ---
        if not (((var[21] & 128) > 0)):
            goto L1880
        # else: falls through here, rejoins L1880
        var[21] = (var[21] - 128)
        # --- L1880 ---
        if not ((group_condition_ref_2(4, 1) and group_condition_ref_2(4, 2))):
            goto L2164
        # else: falls through here, rejoins L2171
        unit[8] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[34] = random_below(100)
        if not (((var[1] == 0) and (var[34] < 2))):
            goto L2157
        # else: falls through here, rejoins L2157
        var[1] = (var[1] + 1)
        phase_table[16] = 6894  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1903
            case 1: goto L1907
            case 2: goto L1911
            case 7: goto L1915
            default: goto L1919
        phase_table[16] = 6895  # raw literal, not evaluated
        pass
        # --- L1907 ---
        phase_table[16] = 6930  # raw literal, not evaluated
        pass
        # --- L1911 ---
        phase_table[16] = 6957  # raw literal, not evaluated
        pass
        # --- L1915 ---
        phase_table[16] = 6996  # raw literal, not evaluated
        pass
        # --- L1919 ---
        phase_table[16] = 7024  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1933 ---
        phase_table[17] = 7077  # raw literal, not evaluated
        var[35] = random_below(4)
        if not (((random_below(4) != 7) and (var[35] >= 3))):
            goto L1946
        # else: falls through here, rejoins L1946
        var[35] = random_below(3)
        # --- L1946 ---
        switch(var[35]):
            case 0: goto L1949
            case 1: goto L1953
            case 3: goto L1957
            case 4: goto L1961
            case 5: goto L1965
            case 6: goto L1969
            case 7: goto L1973
            default: goto L1977
        phase_table[17] = 7078  # raw literal, not evaluated
        pass
        # --- L1953 ---
        phase_table[17] = 7082  # raw literal, not evaluated
        pass
        # --- L1957 ---
        phase_table[17] = 7093  # raw literal, not evaluated
        pass
        # --- L1961 ---
        phase_table[17] = 7114  # raw literal, not evaluated
        pass
        # --- L1965 ---
        phase_table[17] = 7141  # raw literal, not evaluated
        pass
        # --- L1969 ---
        phase_table[17] = 7172  # raw literal, not evaluated
        pass
        # --- L1973 ---
        phase_table[17] = 7201  # raw literal, not evaluated
        pass
        # --- L1977 ---
        phase_table[17] = 7231  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1997 ---
        phase_table[18] = 7246  # raw literal, not evaluated
        switch(256):
            case 1: goto L2003
            case 2: goto L2009
            case 3: goto L2015
            case 4: goto L2021
            case 5: goto L2027
            case 6: goto L2033
            case 7: goto L2039
            case 8: goto L2045
            case 9: goto L2051
            case 10: goto L2057
            case 11: goto L2063
            case 12: goto L2069
            case 13: goto L2073
            case 14: goto L2077
            case 512: goto L2081
            case 32: goto L2087
            case 64: goto L2093
            case 128: goto L2099
            case 256: goto L2105
            default: goto L2111
        phase_table[18] = 7247  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2009 ---
        phase_table[18] = 7274  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2015 ---
        phase_table[18] = 7300  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2021 ---
        phase_table[18] = 7330  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2027 ---
        phase_table[18] = 7354  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2033 ---
        phase_table[18] = 7379  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2039 ---
        phase_table[18] = 7433  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2045 ---
        phase_table[18] = 7457  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2051 ---
        phase_table[18] = 7512  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2057 ---
        phase_table[18] = 7557  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2063 ---
        phase_table[18] = 7608  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2069 ---
        phase_table[18] = 7691  # raw literal, not evaluated
        pass
        # --- L2073 ---
        phase_table[18] = 7755  # raw literal, not evaluated
        pass
        # --- L2077 ---
        phase_table[18] = 7809  # raw literal, not evaluated
        pass
        # --- L2081 ---
        phase_table[18] = 7881  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2087 ---
        phase_table[18] = 7915  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2093 ---
        phase_table[18] = 7954  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2099 ---
        phase_table[18] = 7993  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2105 ---
        phase_table[18] = 8034  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2111 ---
        phase_table[18] = 8074  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2155 ---
        system_message(8113 /*" þ"*/)
        # --- L2157 ---
        if not (((var[21] & 256) == 0)):
            goto L2164
        # else: falls through here, rejoins L2164
        var[21] = (var[21] + 256)
        # --- L2164 ---
        if not (((var[21] & 256) > 0)):
            goto L2171
        # else: falls through here, rejoins L2171
        var[21] = (var[21] - 256)
        # --- L2171 ---
        if not ((group_condition_ref_2(5, 1) and group_condition_ref_2(5, 2))):
            goto L2455
        # else: falls through here, rejoins L2462
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[37] = random_below(100)
        if not (((var[1] == 0) and (var[37] < 2))):
            goto L2448
        # else: falls through here, rejoins L2448
        var[1] = (var[1] + 1)
        phase_table[19] = 8131  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2194
            case 1: goto L2198
            case 2: goto L2202
            case 7: goto L2206
            default: goto L2210
        phase_table[19] = 8132  # raw literal, not evaluated
        pass
        # --- L2198 ---
        phase_table[19] = 8167  # raw literal, not evaluated
        pass
        # --- L2202 ---
        phase_table[19] = 8194  # raw literal, not evaluated
        pass
        # --- L2206 ---
        phase_table[19] = 8233  # raw literal, not evaluated
        pass
        # --- L2210 ---
        phase_table[19] = 8261  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2224 ---
        phase_table[20] = 8314  # raw literal, not evaluated
        var[38] = random_below(4)
        if not (((random_below(4) != 7) and (var[38] >= 3))):
            goto L2237
        # else: falls through here, rejoins L2237
        var[38] = random_below(3)
        # --- L2237 ---
        switch(var[38]):
            case 0: goto L2240
            case 1: goto L2244
            case 3: goto L2248
            case 4: goto L2252
            case 5: goto L2256
            case 6: goto L2260
            case 7: goto L2264
            default: goto L2268
        phase_table[20] = 8315  # raw literal, not evaluated
        pass
        # --- L2244 ---
        phase_table[20] = 8319  # raw literal, not evaluated
        pass
        # --- L2248 ---
        phase_table[20] = 8330  # raw literal, not evaluated
        pass
        # --- L2252 ---
        phase_table[20] = 8351  # raw literal, not evaluated
        pass
        # --- L2256 ---
        phase_table[20] = 8378  # raw literal, not evaluated
        pass
        # --- L2260 ---
        phase_table[20] = 8409  # raw literal, not evaluated
        pass
        # --- L2264 ---
        phase_table[20] = 8438  # raw literal, not evaluated
        pass
        # --- L2268 ---
        phase_table[20] = 8468  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2288 ---
        phase_table[21] = 8483  # raw literal, not evaluated
        switch(2048):
            case 1: goto L2294
            case 2: goto L2300
            case 3: goto L2306
            case 4: goto L2312
            case 5: goto L2318
            case 6: goto L2324
            case 7: goto L2330
            case 8: goto L2336
            case 9: goto L2342
            case 10: goto L2348
            case 11: goto L2354
            case 12: goto L2360
            case 13: goto L2364
            case 14: goto L2368
            case 512: goto L2372
            case 32: goto L2378
            case 64: goto L2384
            case 128: goto L2390
            case 256: goto L2396
            default: goto L2402
        phase_table[21] = 8484  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2300 ---
        phase_table[21] = 8511  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2306 ---
        phase_table[21] = 8537  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2312 ---
        phase_table[21] = 8567  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2318 ---
        phase_table[21] = 8591  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2324 ---
        phase_table[21] = 8616  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2330 ---
        phase_table[21] = 8670  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2336 ---
        phase_table[21] = 8694  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2342 ---
        phase_table[21] = 8749  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2348 ---
        phase_table[21] = 8794  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2354 ---
        phase_table[21] = 8845  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2360 ---
        phase_table[21] = 8928  # raw literal, not evaluated
        pass
        # --- L2364 ---
        phase_table[21] = 8992  # raw literal, not evaluated
        pass
        # --- L2368 ---
        phase_table[21] = 9046  # raw literal, not evaluated
        pass
        # --- L2372 ---
        phase_table[21] = 9118  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2378 ---
        phase_table[21] = 9152  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2384 ---
        phase_table[21] = 9191  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2390 ---
        phase_table[21] = 9230  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2396 ---
        phase_table[21] = 9271  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2402 ---
        phase_table[21] = 9311  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2446 ---
        system_message(9350 /*" þ"*/)
        # --- L2448 ---
        if not (((var[21] & 2048) == 0)):
            goto L2455
        # else: falls through here, rejoins L2455
        var[21] = (var[21] + 2048)
        # --- L2455 ---
        if not (((var[21] & 2048) > 0)):
            goto L2462
        # else: falls through here, rejoins L2462
        var[21] = (var[21] - 2048)
        # --- L2462 ---
        if not ((group_condition_ref_2(6, 1) and group_condition_ref_2(6, 2))):
            goto L2746
        # else: falls through here, rejoins L2753
        unit[10] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[40] = random_below(100)
        if not (((var[1] == 0) and (var[40] < 2))):
            goto L2739
        # else: falls through here, rejoins L2739
        var[1] = (var[1] + 1)
        phase_table[22] = 9368  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2485
            case 1: goto L2489
            case 2: goto L2493
            case 7: goto L2497
            default: goto L2501
        phase_table[22] = 9369  # raw literal, not evaluated
        pass
        # --- L2489 ---
        phase_table[22] = 9404  # raw literal, not evaluated
        pass
        # --- L2493 ---
        phase_table[22] = 9431  # raw literal, not evaluated
        pass
        # --- L2497 ---
        phase_table[22] = 9470  # raw literal, not evaluated
        pass
        # --- L2501 ---
        phase_table[22] = 9498  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2515 ---
        phase_table[23] = 9551  # raw literal, not evaluated
        var[41] = random_below(4)
        if not (((random_below(4) != 7) and (var[41] >= 3))):
            goto L2528
        # else: falls through here, rejoins L2528
        var[41] = random_below(3)
        # --- L2528 ---
        switch(var[41]):
            case 0: goto L2531
            case 1: goto L2535
            case 3: goto L2539
            case 4: goto L2543
            case 5: goto L2547
            case 6: goto L2551
            case 7: goto L2555
            default: goto L2559
        phase_table[23] = 9552  # raw literal, not evaluated
        pass
        # --- L2535 ---
        phase_table[23] = 9556  # raw literal, not evaluated
        pass
        # --- L2539 ---
        phase_table[23] = 9567  # raw literal, not evaluated
        pass
        # --- L2543 ---
        phase_table[23] = 9588  # raw literal, not evaluated
        pass
        # --- L2547 ---
        phase_table[23] = 9615  # raw literal, not evaluated
        pass
        # --- L2551 ---
        phase_table[23] = 9646  # raw literal, not evaluated
        pass
        # --- L2555 ---
        phase_table[23] = 9675  # raw literal, not evaluated
        pass
        # --- L2559 ---
        phase_table[23] = 9705  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2579 ---
        phase_table[24] = 9720  # raw literal, not evaluated
        switch(4096):
            case 1: goto L2585
            case 2: goto L2591
            case 3: goto L2597
            case 4: goto L2603
            case 5: goto L2609
            case 6: goto L2615
            case 7: goto L2621
            case 8: goto L2627
            case 9: goto L2633
            case 10: goto L2639
            case 11: goto L2645
            case 12: goto L2651
            case 13: goto L2655
            case 14: goto L2659
            case 512: goto L2663
            case 32: goto L2669
            case 64: goto L2675
            case 128: goto L2681
            case 256: goto L2687
            default: goto L2693
        phase_table[24] = 9721  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2591 ---
        phase_table[24] = 9748  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2597 ---
        phase_table[24] = 9774  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2603 ---
        phase_table[24] = 9804  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2609 ---
        phase_table[24] = 9828  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2615 ---
        phase_table[24] = 9853  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2621 ---
        phase_table[24] = 9907  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2627 ---
        phase_table[24] = 9931  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2633 ---
        phase_table[24] = 9986  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2639 ---
        phase_table[24] = 10031  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2645 ---
        phase_table[24] = 10082  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2651 ---
        phase_table[24] = 10165  # raw literal, not evaluated
        pass
        # --- L2655 ---
        phase_table[24] = 10229  # raw literal, not evaluated
        pass
        # --- L2659 ---
        phase_table[24] = 10283  # raw literal, not evaluated
        pass
        # --- L2663 ---
        phase_table[24] = 10355  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2669 ---
        phase_table[24] = 10389  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2675 ---
        phase_table[24] = 10428  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2681 ---
        phase_table[24] = 10467  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2687 ---
        phase_table[24] = 10508  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2693 ---
        phase_table[24] = 10548  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2737 ---
        system_message(10587 /*" þ"*/)
        # --- L2739 ---
        if not (((var[21] & 4096) == 0)):
            goto L2746
        # else: falls through here, rejoins L2746
        var[21] = (var[21] + 4096)
        # --- L2746 ---
        if not (((var[21] & 4096) > 0)):
            goto L2753
        # else: falls through here, rejoins L2753
        var[21] = (var[21] - 4096)
        # --- L2753 ---
        var[43] = 0
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 11):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3050
        # --- L2762 ---
        if not ((set_unit_behavior(9, 11) > 0)):
            goto L3045
        # else: falls through here, rejoins L3045
        var[44] = random_below(100)
        if not (((var[1] == 0) and (var[44] < 4))):
            goto L3036
        # else: falls through here, rejoins L3036
        var[1] = (var[1] + 1)
        phase_table[25] = 10605  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2782
            case 1: goto L2786
            case 2: goto L2790
            case 7: goto L2794
            default: goto L2798
        phase_table[25] = 10606  # raw literal, not evaluated
        pass
        # --- L2786 ---
        phase_table[25] = 10641  # raw literal, not evaluated
        pass
        # --- L2790 ---
        phase_table[25] = 10668  # raw literal, not evaluated
        pass
        # --- L2794 ---
        phase_table[25] = 10707  # raw literal, not evaluated
        pass
        # --- L2798 ---
        phase_table[25] = 10735  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2812 ---
        phase_table[26] = 10788  # raw literal, not evaluated
        var[45] = random_below(4)
        if not (((random_below(4) != 7) and (var[45] >= 3))):
            goto L2825
        # else: falls through here, rejoins L2825
        var[45] = random_below(3)
        # --- L2825 ---
        switch(var[45]):
            case 0: goto L2828
            case 1: goto L2832
            case 3: goto L2836
            case 4: goto L2840
            case 5: goto L2844
            case 6: goto L2848
            case 7: goto L2852
            default: goto L2856
        phase_table[26] = 10789  # raw literal, not evaluated
        pass
        # --- L2832 ---
        phase_table[26] = 10793  # raw literal, not evaluated
        pass
        # --- L2836 ---
        phase_table[26] = 10804  # raw literal, not evaluated
        pass
        # --- L2840 ---
        phase_table[26] = 10825  # raw literal, not evaluated
        pass
        # --- L2844 ---
        phase_table[26] = 10852  # raw literal, not evaluated
        pass
        # --- L2848 ---
        phase_table[26] = 10883  # raw literal, not evaluated
        pass
        # --- L2852 ---
        phase_table[26] = 10912  # raw literal, not evaluated
        pass
        # --- L2856 ---
        phase_table[26] = 10942  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2876 ---
        phase_table[27] = 10957  # raw literal, not evaluated
        switch(10):
            case 1: goto L2882
            case 2: goto L2888
            case 3: goto L2894
            case 4: goto L2900
            case 5: goto L2906
            case 6: goto L2912
            case 7: goto L2918
            case 8: goto L2924
            case 9: goto L2930
            case 10: goto L2936
            case 11: goto L2942
            case 12: goto L2948
            case 13: goto L2952
            case 14: goto L2956
            case 512: goto L2960
            case 32: goto L2966
            case 64: goto L2972
            case 128: goto L2978
            case 256: goto L2984
            default: goto L2990
        phase_table[27] = 10958  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2888 ---
        phase_table[27] = 10985  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2894 ---
        phase_table[27] = 11011  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2900 ---
        phase_table[27] = 11041  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2906 ---
        phase_table[27] = 11065  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2912 ---
        phase_table[27] = 11090  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2918 ---
        phase_table[27] = 11144  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2924 ---
        phase_table[27] = 11168  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2930 ---
        phase_table[27] = 11223  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2936 ---
        phase_table[27] = 11268  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2942 ---
        phase_table[27] = 11319  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2948 ---
        phase_table[27] = 11402  # raw literal, not evaluated
        pass
        # --- L2952 ---
        phase_table[27] = 11466  # raw literal, not evaluated
        pass
        # --- L2956 ---
        phase_table[27] = 11520  # raw literal, not evaluated
        pass
        # --- L2960 ---
        phase_table[27] = 11592  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2966 ---
        phase_table[27] = 11626  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2972 ---
        phase_table[27] = 11665  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2978 ---
        phase_table[27] = 11704  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2984 ---
        phase_table[27] = 11745  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2990 ---
        phase_table[27] = 11785  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3034 ---
        system_message(11824 /*" þ"*/)
        # --- L3036 ---
        if not (((set_unit_behavior(8, 11) & var[21]) == 0)):
            goto L3045
        # else: falls through here, rejoins L3045
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2e42] - dead end, not decoded further (other branches continue independently)
        # --- L3045 ---
        unit[11] = next_unit_in_group(unit[11], group=2)
        goto L2762
        # --- L3050 ---
        unit[12] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3084
        # --- L3056 ---
        if not (group_condition_ref_2(8, 2)):
            goto L3063
        # else: falls through here, rejoins L3070
        unit[12].attr8 = 2
        # --- L3063 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3070
        # else: falls through here, rejoins L3070
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1)
        # --- L3070 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3079
        # else: falls through here, rejoins L3079
        var[43] = (var[43] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2e63] - dead end, not decoded further (other branches continue independently)
        # --- L3079 ---
        unit[12] = next_unit_in_group(unit[12], group=1)
        goto L3056
        # --- L3084 ---
        if not (group_condition_ref_2(9, 2)):
            goto L3091
        # else: falls through here, rejoins L3098
        unit[12].attr8 = 2
        # --- L3091 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3098
        # else: falls through here, rejoins L3098
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1)
        # --- L3098 ---
        if not ((set_unit_behavior(8, 12) > 0)):
            goto L3107
        # else: falls through here, rejoins L3107
        var[43] = (var[43] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2e76] - dead end, not decoded further (other branches continue independently)
        # --- L3107 ---
        unit[12] = next_unit_in_group(unit[12], group=1)
        var[47] = op_0xb03d(5, 10, 6, 10, 7, 10, 8, 10, 9, 10, 10, 10, 60)
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 11):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L6272
        if not ((set_unit_behavior(5, 11) < 60)):
            goto L3128
        # else: falls through here, rejoins L6265
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L3128 ---
        switch((set_unit_behavior(8, 11) & 15)):
            case 0: goto L3131
            case 1: goto L3414
            case 2: goto L4247
            case 3: goto L4806
            case 4: goto L4816
            case 5: goto L4861
            case 10: goto L5146
            case 11: goto L5156
            case 12: goto L5554
            case 13: goto L5555
            case 14: goto L5850
            case 15: goto L5851
            default: goto L6237
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L3413
        # else: falls through here, rejoins L3413
        var[48] = random_below(100)
        if not (((var[1] == 0) and (var[48] < 40))):
            goto L3405
        # else: falls through here, rejoins L3405
        var[1] = (var[1] + 1)
        phase_table[28] = 11913  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3151
            case 1: goto L3155
            case 2: goto L3159
            case 7: goto L3163
            default: goto L3167
        phase_table[28] = 11914  # raw literal, not evaluated
        pass
        # --- L3155 ---
        phase_table[28] = 11949  # raw literal, not evaluated
        pass
        # --- L3159 ---
        phase_table[28] = 11976  # raw literal, not evaluated
        pass
        # --- L3163 ---
        phase_table[28] = 12015  # raw literal, not evaluated
        pass
        # --- L3167 ---
        phase_table[28] = 12043  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3181 ---
        phase_table[29] = 12096  # raw literal, not evaluated
        var[49] = random_below(4)
        if not (((random_below(1) != 7) and (var[49] >= 3))):
            goto L3194
        # else: falls through here, rejoins L3194
        var[49] = random_below(3)
        # --- L3194 ---
        switch(var[49]):
            case 0: goto L3197
            case 1: goto L3201
            case 3: goto L3205
            case 4: goto L3209
            case 5: goto L3213
            case 6: goto L3217
            case 7: goto L3221
            default: goto L3225
        phase_table[29] = 12097  # raw literal, not evaluated
        pass
        # --- L3201 ---
        phase_table[29] = 12101  # raw literal, not evaluated
        pass
        # --- L3205 ---
        phase_table[29] = 12112  # raw literal, not evaluated
        pass
        # --- L3209 ---
        phase_table[29] = 12133  # raw literal, not evaluated
        pass
        # --- L3213 ---
        phase_table[29] = 12160  # raw literal, not evaluated
        pass
        # --- L3217 ---
        phase_table[29] = 12191  # raw literal, not evaluated
        pass
        # --- L3221 ---
        phase_table[29] = 12220  # raw literal, not evaluated
        pass
        # --- L3225 ---
        phase_table[29] = 12250  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3245 ---
        phase_table[30] = 12265  # raw literal, not evaluated
        switch(8):
            case 1: goto L3251
            case 2: goto L3257
            case 3: goto L3263
            case 4: goto L3269
            case 5: goto L3275
            case 6: goto L3281
            case 7: goto L3287
            case 8: goto L3293
            case 9: goto L3299
            case 10: goto L3305
            case 11: goto L3311
            case 12: goto L3317
            case 13: goto L3321
            case 14: goto L3325
            case 512: goto L3329
            case 32: goto L3335
            case 64: goto L3341
            case 128: goto L3347
            case 256: goto L3353
            default: goto L3359
        phase_table[30] = 12266  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3257 ---
        phase_table[30] = 12293  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3263 ---
        phase_table[30] = 12319  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3269 ---
        phase_table[30] = 12349  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3275 ---
        phase_table[30] = 12373  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3281 ---
        phase_table[30] = 12398  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3287 ---
        phase_table[30] = 12452  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3293 ---
        phase_table[30] = 12476  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3299 ---
        phase_table[30] = 12531  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3305 ---
        phase_table[30] = 12576  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3311 ---
        phase_table[30] = 12627  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3317 ---
        phase_table[30] = 12710  # raw literal, not evaluated
        pass
        # --- L3321 ---
        phase_table[30] = 12774  # raw literal, not evaluated
        pass
        # --- L3325 ---
        phase_table[30] = 12828  # raw literal, not evaluated
        pass
        # --- L3329 ---
        phase_table[30] = 12900  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3335 ---
        phase_table[30] = 12934  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3341 ---
        phase_table[30] = 12973  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3347 ---
        phase_table[30] = 13012  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3353 ---
        phase_table[30] = 13053  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3359 ---
        phase_table[30] = 13093  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3403 ---
        system_message(13132 /*" þ"*/)
        # --- L3405 ---
        move_unit(unit[11], priority=var[47], dest_type=0, dest_arg=0)
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        # --- L3413 ---
        pass
        # --- L3414 ---
        if not ((group_condition_ref_2(10, 1) or (set_unit_behavior(9, 11) != 0))):
            goto L3697
        # else: falls through here, rejoins L4246
        if not ((set_unit_behavior(7, 11) != 6)):
            goto L3697
        # else: falls through here, rejoins L3697
        var[51] = random_below(100)
        if not (((var[1] == 0) and (var[51] < 40))):
            goto L3692
        # else: falls through here, rejoins L3692
        var[1] = (var[1] + 1)
        phase_table[31] = 13150  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3438
            case 1: goto L3442
            case 2: goto L3446
            case 7: goto L3450
            default: goto L3454
        phase_table[31] = 13151  # raw literal, not evaluated
        pass
        # --- L3442 ---
        phase_table[31] = 13186  # raw literal, not evaluated
        pass
        # --- L3446 ---
        phase_table[31] = 13213  # raw literal, not evaluated
        pass
        # --- L3450 ---
        phase_table[31] = 13252  # raw literal, not evaluated
        pass
        # --- L3454 ---
        phase_table[31] = 13280  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3468 ---
        phase_table[32] = 13333  # raw literal, not evaluated
        var[52] = random_below(4)
        if not (((random_below(1) != 7) and (var[52] >= 3))):
            goto L3481
        # else: falls through here, rejoins L3481
        var[52] = random_below(3)
        # --- L3481 ---
        switch(var[52]):
            case 0: goto L3484
            case 1: goto L3488
            case 3: goto L3492
            case 4: goto L3496
            case 5: goto L3500
            case 6: goto L3504
            case 7: goto L3508
            default: goto L3512
        phase_table[32] = 13334  # raw literal, not evaluated
        pass
        # --- L3488 ---
        phase_table[32] = 13338  # raw literal, not evaluated
        pass
        # --- L3492 ---
        phase_table[32] = 13349  # raw literal, not evaluated
        pass
        # --- L3496 ---
        phase_table[32] = 13370  # raw literal, not evaluated
        pass
        # --- L3500 ---
        phase_table[32] = 13397  # raw literal, not evaluated
        pass
        # --- L3504 ---
        phase_table[32] = 13428  # raw literal, not evaluated
        pass
        # --- L3508 ---
        phase_table[32] = 13457  # raw literal, not evaluated
        pass
        # --- L3512 ---
        phase_table[32] = 13487  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3532 ---
        phase_table[33] = 13502  # raw literal, not evaluated
        switch(3):
            case 1: goto L3538
            case 2: goto L3544
            case 3: goto L3550
            case 4: goto L3556
            case 5: goto L3562
            case 6: goto L3568
            case 7: goto L3574
            case 8: goto L3580
            case 9: goto L3586
            case 10: goto L3592
            case 11: goto L3598
            case 12: goto L3604
            case 13: goto L3608
            case 14: goto L3612
            case 512: goto L3616
            case 32: goto L3622
            case 64: goto L3628
            case 128: goto L3634
            case 256: goto L3640
            default: goto L3646
        phase_table[33] = 13503  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3544 ---
        phase_table[33] = 13530  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3550 ---
        phase_table[33] = 13556  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3556 ---
        phase_table[33] = 13586  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3562 ---
        phase_table[33] = 13610  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3568 ---
        phase_table[33] = 13635  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3574 ---
        phase_table[33] = 13689  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3580 ---
        phase_table[33] = 13713  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3586 ---
        phase_table[33] = 13768  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3592 ---
        phase_table[33] = 13813  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3598 ---
        phase_table[33] = 13864  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3604 ---
        phase_table[33] = 13947  # raw literal, not evaluated
        pass
        # --- L3608 ---
        phase_table[33] = 14011  # raw literal, not evaluated
        pass
        # --- L3612 ---
        phase_table[33] = 14065  # raw literal, not evaluated
        pass
        # --- L3616 ---
        phase_table[33] = 14137  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3622 ---
        phase_table[33] = 14171  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3628 ---
        phase_table[33] = 14210  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3634 ---
        phase_table[33] = 14249  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3640 ---
        phase_table[33] = 14290  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3646 ---
        phase_table[33] = 14330  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3690 ---
        system_message(14369 /*" þ"*/)
        # --- L3692 ---
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        # --- L3697 ---
        if not ((set_unit_behavior(7, 11) != 2)):
            goto L3976
        # else: falls through here, rejoins L4246
        move_unit(unit[11], priority=2, dest_type=0, dest_arg=0)
        var[54] = random_below(100)
        if not (((var[1] == 0) and (var[54] < 4))):
            goto L3976
        # else: falls through here, rejoins L3976
        var[1] = (var[1] + 1)
        phase_table[34] = 14387  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3722
            case 1: goto L3726
            case 2: goto L3730
            case 7: goto L3734
            default: goto L3738
        phase_table[34] = 14388  # raw literal, not evaluated
        pass
        # --- L3726 ---
        phase_table[34] = 14423  # raw literal, not evaluated
        pass
        # --- L3730 ---
        phase_table[34] = 14450  # raw literal, not evaluated
        pass
        # --- L3734 ---
        phase_table[34] = 14489  # raw literal, not evaluated
        pass
        # --- L3738 ---
        phase_table[34] = 14517  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3752 ---
        phase_table[35] = 14570  # raw literal, not evaluated
        var[55] = random_below(4)
        if not (((random_below(1) != 7) and (var[55] >= 3))):
            goto L3765
        # else: falls through here, rejoins L3765
        var[55] = random_below(3)
        # --- L3765 ---
        switch(var[55]):
            case 0: goto L3768
            case 1: goto L3772
            case 3: goto L3776
            case 4: goto L3780
            case 5: goto L3784
            case 6: goto L3788
            case 7: goto L3792
            default: goto L3796
        phase_table[35] = 14571  # raw literal, not evaluated
        pass
        # --- L3772 ---
        phase_table[35] = 14575  # raw literal, not evaluated
        pass
        # --- L3776 ---
        phase_table[35] = 14586  # raw literal, not evaluated
        pass
        # --- L3780 ---
        phase_table[35] = 14607  # raw literal, not evaluated
        pass
        # --- L3784 ---
        phase_table[35] = 14634  # raw literal, not evaluated
        pass
        # --- L3788 ---
        phase_table[35] = 14665  # raw literal, not evaluated
        pass
        # --- L3792 ---
        phase_table[35] = 14694  # raw literal, not evaluated
        pass
        # --- L3796 ---
        phase_table[35] = 14724  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3816 ---
        phase_table[36] = 14739  # raw literal, not evaluated
        switch(2):
            case 1: goto L3822
            case 2: goto L3828
            case 3: goto L3834
            case 4: goto L3840
            case 5: goto L3846
            case 6: goto L3852
            case 7: goto L3858
            case 8: goto L3864
            case 9: goto L3870
            case 10: goto L3876
            case 11: goto L3882
            case 12: goto L3888
            case 13: goto L3892
            case 14: goto L3896
            case 512: goto L3900
            case 32: goto L3906
            case 64: goto L3912
            case 128: goto L3918
            case 256: goto L3924
            default: goto L3930
        phase_table[36] = 14740  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3828 ---
        phase_table[36] = 14767  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3834 ---
        phase_table[36] = 14793  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3840 ---
        phase_table[36] = 14823  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3846 ---
        phase_table[36] = 14847  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3852 ---
        phase_table[36] = 14872  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3858 ---
        phase_table[36] = 14926  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3864 ---
        phase_table[36] = 14950  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3870 ---
        phase_table[36] = 15005  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3876 ---
        phase_table[36] = 15050  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3882 ---
        phase_table[36] = 15101  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3888 ---
        phase_table[36] = 15184  # raw literal, not evaluated
        pass
        # --- L3892 ---
        phase_table[36] = 15248  # raw literal, not evaluated
        pass
        # --- L3896 ---
        phase_table[36] = 15302  # raw literal, not evaluated
        pass
        # --- L3900 ---
        phase_table[36] = 15374  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3906 ---
        phase_table[36] = 15408  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3912 ---
        phase_table[36] = 15447  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3918 ---
        phase_table[36] = 15486  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3924 ---
        phase_table[36] = 15527  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3930 ---
        phase_table[36] = 15567  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3974 ---
        system_message(15606 /*" þ\""*/)
        # --- L3976 ---
        var[57] = random_below(100)
        if not (((var[1] == 0) and (var[57] < 4))):
            goto L4246
        # else: falls through here, rejoins L4246
        var[1] = (var[1] + 1)
        phase_table[37] = 15624  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3992
            case 1: goto L3996
            case 2: goto L4000
            case 7: goto L4004
            default: goto L4008
        phase_table[37] = 15625  # raw literal, not evaluated
        pass
        # --- L3996 ---
        phase_table[37] = 15660  # raw literal, not evaluated
        pass
        # --- L4000 ---
        phase_table[37] = 15687  # raw literal, not evaluated
        pass
        # --- L4004 ---
        phase_table[37] = 15726  # raw literal, not evaluated
        pass
        # --- L4008 ---
        phase_table[37] = 15754  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4022 ---
        phase_table[38] = 15807  # raw literal, not evaluated
        var[58] = random_below(4)
        if not (((random_below(1) != 7) and (var[58] >= 3))):
            goto L4035
        # else: falls through here, rejoins L4035
        var[58] = random_below(3)
        # --- L4035 ---
        switch(var[58]):
            case 0: goto L4038
            case 1: goto L4042
            case 3: goto L4046
            case 4: goto L4050
            case 5: goto L4054
            case 6: goto L4058
            case 7: goto L4062
            default: goto L4066
        phase_table[38] = 15808  # raw literal, not evaluated
        pass
        # --- L4042 ---
        phase_table[38] = 15812  # raw literal, not evaluated
        pass
        # --- L4046 ---
        phase_table[38] = 15823  # raw literal, not evaluated
        pass
        # --- L4050 ---
        phase_table[38] = 15844  # raw literal, not evaluated
        pass
        # --- L4054 ---
        phase_table[38] = 15871  # raw literal, not evaluated
        pass
        # --- L4058 ---
        phase_table[38] = 15902  # raw literal, not evaluated
        pass
        # --- L4062 ---
        phase_table[38] = 15931  # raw literal, not evaluated
        pass
        # --- L4066 ---
        phase_table[38] = 15961  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4086 ---
        phase_table[39] = 15976  # raw literal, not evaluated
        switch(1):
            case 1: goto L4092
            case 2: goto L4098
            case 3: goto L4104
            case 4: goto L4110
            case 5: goto L4116
            case 6: goto L4122
            case 7: goto L4128
            case 8: goto L4134
            case 9: goto L4140
            case 10: goto L4146
            case 11: goto L4152
            case 12: goto L4158
            case 13: goto L4162
            case 14: goto L4166
            case 512: goto L4170
            case 32: goto L4176
            case 64: goto L4182
            case 128: goto L4188
            case 256: goto L4194
            default: goto L4200
        phase_table[39] = 15977  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4098 ---
        phase_table[39] = 16004  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4104 ---
        phase_table[39] = 16030  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4110 ---
        phase_table[39] = 16060  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4116 ---
        phase_table[39] = 16084  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4122 ---
        phase_table[39] = 16109  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4128 ---
        phase_table[39] = 16163  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4134 ---
        phase_table[39] = 16187  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4140 ---
        phase_table[39] = 16242  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4146 ---
        phase_table[39] = 16287  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4152 ---
        phase_table[39] = 16338  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4158 ---
        phase_table[39] = 16421  # raw literal, not evaluated
        pass
        # --- L4162 ---
        phase_table[39] = 16485  # raw literal, not evaluated
        pass
        # --- L4166 ---
        phase_table[39] = 16539  # raw literal, not evaluated
        pass
        # --- L4170 ---
        phase_table[39] = 16611  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4176 ---
        phase_table[39] = 16645  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4182 ---
        phase_table[39] = 16684  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4188 ---
        phase_table[39] = 16723  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4194 ---
        phase_table[39] = 16764  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4200 ---
        phase_table[39] = 16804  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4244 ---
        system_message(16843 /*" þ%"*/)
        # --- L4246 ---
        pass
        # --- L4247 ---
        if not (((var[21] & 512) > 0)):
            goto L4526
        # else: falls through here, rejoins L4805
        var[60] = random_below(100)
        if not (((var[1] == 0) and (var[60] < 4))):
            goto L4521
        # else: falls through here, rejoins L4521
        var[1] = (var[1] + 1)
        phase_table[40] = 16861  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4267
            case 1: goto L4271
            case 2: goto L4275
            case 7: goto L4279
            default: goto L4283
        phase_table[40] = 16862  # raw literal, not evaluated
        pass
        # --- L4271 ---
        phase_table[40] = 16897  # raw literal, not evaluated
        pass
        # --- L4275 ---
        phase_table[40] = 16924  # raw literal, not evaluated
        pass
        # --- L4279 ---
        phase_table[40] = 16963  # raw literal, not evaluated
        pass
        # --- L4283 ---
        phase_table[40] = 16991  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4297 ---
        phase_table[41] = 17044  # raw literal, not evaluated
        var[61] = random_below(4)
        if not (((random_below(1) != 7) and (var[61] >= 3))):
            goto L4310
        # else: falls through here, rejoins L4310
        var[61] = random_below(3)
        # --- L4310 ---
        switch(var[61]):
            case 0: goto L4313
            case 1: goto L4317
            case 3: goto L4321
            case 4: goto L4325
            case 5: goto L4329
            case 6: goto L4333
            case 7: goto L4337
            default: goto L4341
        phase_table[41] = 17045  # raw literal, not evaluated
        pass
        # --- L4317 ---
        phase_table[41] = 17049  # raw literal, not evaluated
        pass
        # --- L4321 ---
        phase_table[41] = 17060  # raw literal, not evaluated
        pass
        # --- L4325 ---
        phase_table[41] = 17081  # raw literal, not evaluated
        pass
        # --- L4329 ---
        phase_table[41] = 17108  # raw literal, not evaluated
        pass
        # --- L4333 ---
        phase_table[41] = 17139  # raw literal, not evaluated
        pass
        # --- L4337 ---
        phase_table[41] = 17168  # raw literal, not evaluated
        pass
        # --- L4341 ---
        phase_table[41] = 17198  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4361 ---
        phase_table[42] = 17213  # raw literal, not evaluated
        switch(4):
            case 1: goto L4367
            case 2: goto L4373
            case 3: goto L4379
            case 4: goto L4385
            case 5: goto L4391
            case 6: goto L4397
            case 7: goto L4403
            case 8: goto L4409
            case 9: goto L4415
            case 10: goto L4421
            case 11: goto L4427
            case 12: goto L4433
            case 13: goto L4437
            case 14: goto L4441
            case 512: goto L4445
            case 32: goto L4451
            case 64: goto L4457
            case 128: goto L4463
            case 256: goto L4469
            default: goto L4475
        phase_table[42] = 17214  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4373 ---
        phase_table[42] = 17241  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4379 ---
        phase_table[42] = 17267  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4385 ---
        phase_table[42] = 17297  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4391 ---
        phase_table[42] = 17321  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4397 ---
        phase_table[42] = 17346  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4403 ---
        phase_table[42] = 17400  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4409 ---
        phase_table[42] = 17424  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4415 ---
        phase_table[42] = 17479  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4421 ---
        phase_table[42] = 17524  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4427 ---
        phase_table[42] = 17575  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4433 ---
        phase_table[42] = 17658  # raw literal, not evaluated
        pass
        # --- L4437 ---
        phase_table[42] = 17722  # raw literal, not evaluated
        pass
        # --- L4441 ---
        phase_table[42] = 17776  # raw literal, not evaluated
        pass
        # --- L4445 ---
        phase_table[42] = 17848  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4451 ---
        phase_table[42] = 17882  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4457 ---
        phase_table[42] = 17921  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4463 ---
        phase_table[42] = 17960  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4469 ---
        phase_table[42] = 18001  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4475 ---
        phase_table[42] = 18041  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4519 ---
        system_message(18080 /*" þ("*/)
        # --- L4521 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L4526 ---
        if not (((var[21] & 128) > 0)):
            goto L4805
        # else: falls through here, rejoins L4805
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=3)
        var[63] = random_below(100)
        if not (((var[1] == 0) and (var[63] < 4))):
            goto L4805
        # else: falls through here, rejoins L4805
        var[1] = (var[1] + 1)
        phase_table[43] = 18098  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4551
            case 1: goto L4555
            case 2: goto L4559
            case 7: goto L4563
            default: goto L4567
        phase_table[43] = 18099  # raw literal, not evaluated
        pass
        # --- L4555 ---
        phase_table[43] = 18134  # raw literal, not evaluated
        pass
        # --- L4559 ---
        phase_table[43] = 18161  # raw literal, not evaluated
        pass
        # --- L4563 ---
        phase_table[43] = 18200  # raw literal, not evaluated
        pass
        # --- L4567 ---
        phase_table[43] = 18228  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4581 ---
        phase_table[44] = 18281  # raw literal, not evaluated
        var[64] = random_below(4)
        if not (((random_below(1) != 7) and (var[64] >= 3))):
            goto L4594
        # else: falls through here, rejoins L4594
        var[64] = random_below(3)
        # --- L4594 ---
        switch(var[64]):
            case 0: goto L4597
            case 1: goto L4601
            case 3: goto L4605
            case 4: goto L4609
            case 5: goto L4613
            case 6: goto L4617
            case 7: goto L4621
            default: goto L4625
        phase_table[44] = 18282  # raw literal, not evaluated
        pass
        # --- L4601 ---
        phase_table[44] = 18286  # raw literal, not evaluated
        pass
        # --- L4605 ---
        phase_table[44] = 18297  # raw literal, not evaluated
        pass
        # --- L4609 ---
        phase_table[44] = 18318  # raw literal, not evaluated
        pass
        # --- L4613 ---
        phase_table[44] = 18345  # raw literal, not evaluated
        pass
        # --- L4617 ---
        phase_table[44] = 18376  # raw literal, not evaluated
        pass
        # --- L4621 ---
        phase_table[44] = 18405  # raw literal, not evaluated
        pass
        # --- L4625 ---
        phase_table[44] = 18435  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4645 ---
        phase_table[45] = 18450  # raw literal, not evaluated
        switch(5):
            case 1: goto L4651
            case 2: goto L4657
            case 3: goto L4663
            case 4: goto L4669
            case 5: goto L4675
            case 6: goto L4681
            case 7: goto L4687
            case 8: goto L4693
            case 9: goto L4699
            case 10: goto L4705
            case 11: goto L4711
            case 12: goto L4717
            case 13: goto L4721
            case 14: goto L4725
            case 512: goto L4729
            case 32: goto L4735
            case 64: goto L4741
            case 128: goto L4747
            case 256: goto L4753
            default: goto L4759
        phase_table[45] = 18451  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4657 ---
        phase_table[45] = 18478  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4663 ---
        phase_table[45] = 18504  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4669 ---
        phase_table[45] = 18534  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4675 ---
        phase_table[45] = 18558  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4681 ---
        phase_table[45] = 18583  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4687 ---
        phase_table[45] = 18637  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4693 ---
        phase_table[45] = 18661  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4699 ---
        phase_table[45] = 18716  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4705 ---
        phase_table[45] = 18761  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4711 ---
        phase_table[45] = 18812  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4717 ---
        phase_table[45] = 18895  # raw literal, not evaluated
        pass
        # --- L4721 ---
        phase_table[45] = 18959  # raw literal, not evaluated
        pass
        # --- L4725 ---
        phase_table[45] = 19013  # raw literal, not evaluated
        pass
        # --- L4729 ---
        phase_table[45] = 19085  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4735 ---
        phase_table[45] = 19119  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4741 ---
        phase_table[45] = 19158  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4747 ---
        phase_table[45] = 19197  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4753 ---
        phase_table[45] = 19238  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4759 ---
        phase_table[45] = 19278  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4803 ---
        system_message(19317 /*" þ+"*/)
        # --- L4805 ---
        pass
        # --- L4806 ---
        if not (((var[21] & 512) > 0)):
            goto L4815
        # else: falls through here, rejoins L4815
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L4815 ---
        pass
        # --- L4816 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L4819
            case 64: goto L4825
            case 128: goto L4831
            case 256: goto L4837
            default: goto L4843
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L4825 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L4831 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L4837 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L4843 ---
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4860 ---
        pass
        # --- L4861 ---
        if not ((var[43] > 0)):
            goto L5140
        # else: falls through here, rejoins L5145
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        var[66] = random_below(100)
        if not (((var[1] == 0) and (var[66] < 4))):
            goto L5140
        # else: falls through here, rejoins L5140
        var[1] = (var[1] + 1)
        phase_table[46] = 19335  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4886
            case 1: goto L4890
            case 2: goto L4894
            case 7: goto L4898
            default: goto L4902
        phase_table[46] = 19336  # raw literal, not evaluated
        pass
        # --- L4890 ---
        phase_table[46] = 19371  # raw literal, not evaluated
        pass
        # --- L4894 ---
        phase_table[46] = 19398  # raw literal, not evaluated
        pass
        # --- L4898 ---
        phase_table[46] = 19437  # raw literal, not evaluated
        pass
        # --- L4902 ---
        phase_table[46] = 19465  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4916 ---
        phase_table[47] = 19518  # raw literal, not evaluated
        var[67] = random_below(4)
        if not (((random_below(1) != 7) and (var[67] >= 3))):
            goto L4929
        # else: falls through here, rejoins L4929
        var[67] = random_below(3)
        # --- L4929 ---
        switch(var[67]):
            case 0: goto L4932
            case 1: goto L4936
            case 3: goto L4940
            case 4: goto L4944
            case 5: goto L4948
            case 6: goto L4952
            case 7: goto L4956
            default: goto L4960
        phase_table[47] = 19519  # raw literal, not evaluated
        pass
        # --- L4936 ---
        phase_table[47] = 19523  # raw literal, not evaluated
        pass
        # --- L4940 ---
        phase_table[47] = 19534  # raw literal, not evaluated
        pass
        # --- L4944 ---
        phase_table[47] = 19555  # raw literal, not evaluated
        pass
        # --- L4948 ---
        phase_table[47] = 19582  # raw literal, not evaluated
        pass
        # --- L4952 ---
        phase_table[47] = 19613  # raw literal, not evaluated
        pass
        # --- L4956 ---
        phase_table[47] = 19642  # raw literal, not evaluated
        pass
        # --- L4960 ---
        phase_table[47] = 19672  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4980 ---
        phase_table[48] = 19687  # raw literal, not evaluated
        switch(6):
            case 1: goto L4986
            case 2: goto L4992
            case 3: goto L4998
            case 4: goto L5004
            case 5: goto L5010
            case 6: goto L5016
            case 7: goto L5022
            case 8: goto L5028
            case 9: goto L5034
            case 10: goto L5040
            case 11: goto L5046
            case 12: goto L5052
            case 13: goto L5056
            case 14: goto L5060
            case 512: goto L5064
            case 32: goto L5070
            case 64: goto L5076
            case 128: goto L5082
            case 256: goto L5088
            default: goto L5094
        phase_table[48] = 19688  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4992 ---
        phase_table[48] = 19715  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4998 ---
        phase_table[48] = 19741  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5004 ---
        phase_table[48] = 19771  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5010 ---
        phase_table[48] = 19795  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5016 ---
        phase_table[48] = 19820  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5022 ---
        phase_table[48] = 19874  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5028 ---
        phase_table[48] = 19898  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5034 ---
        phase_table[48] = 19953  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5040 ---
        phase_table[48] = 19998  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5046 ---
        phase_table[48] = 20049  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5052 ---
        phase_table[48] = 20132  # raw literal, not evaluated
        pass
        # --- L5056 ---
        phase_table[48] = 20196  # raw literal, not evaluated
        pass
        # --- L5060 ---
        phase_table[48] = 20250  # raw literal, not evaluated
        pass
        # --- L5064 ---
        phase_table[48] = 20322  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5070 ---
        phase_table[48] = 20356  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5076 ---
        phase_table[48] = 20395  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5082 ---
        phase_table[48] = 20434  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5088 ---
        phase_table[48] = 20475  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5094 ---
        phase_table[48] = 20515  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5138 ---
        system_message(20554 /*" þ."*/)
        # --- L5140 ---
        move_unit(unit[11], priority=0, dest_type=0, dest_arg=0)
        # --- L5145 ---
        pass
        # --- L5146 ---
        if not ((set_unit_behavior(7, 11) != 3)):
            goto L5155
        # else: falls through here, rejoins L5155
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L5155 ---
        pass
        # --- L5156 ---
        if not ((((var[21] & 7136) == 0) and (var[43] == 0))):
            goto L5529
        # else: falls through here, rejoins L5553
        var[69] = random_below(100)
        if not (((var[1] == 0) and (var[69] < 4))):
            goto L5430
        # else: falls through here, rejoins L5430
        var[1] = (var[1] + 1)
        phase_table[49] = 20572  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5176
            case 1: goto L5180
            case 2: goto L5184
            case 7: goto L5188
            default: goto L5192
        phase_table[49] = 20573  # raw literal, not evaluated
        pass
        # --- L5180 ---
        phase_table[49] = 20608  # raw literal, not evaluated
        pass
        # --- L5184 ---
        phase_table[49] = 20635  # raw literal, not evaluated
        pass
        # --- L5188 ---
        phase_table[49] = 20674  # raw literal, not evaluated
        pass
        # --- L5192 ---
        phase_table[49] = 20702  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5206 ---
        phase_table[50] = 20755  # raw literal, not evaluated
        var[70] = random_below(4)
        if not (((random_below(1) != 7) and (var[70] >= 3))):
            goto L5219
        # else: falls through here, rejoins L5219
        var[70] = random_below(3)
        # --- L5219 ---
        switch(var[70]):
            case 0: goto L5222
            case 1: goto L5226
            case 3: goto L5230
            case 4: goto L5234
            case 5: goto L5238
            case 6: goto L5242
            case 7: goto L5246
            default: goto L5250
        phase_table[50] = 20756  # raw literal, not evaluated
        pass
        # --- L5226 ---
        phase_table[50] = 20760  # raw literal, not evaluated
        pass
        # --- L5230 ---
        phase_table[50] = 20771  # raw literal, not evaluated
        pass
        # --- L5234 ---
        phase_table[50] = 20792  # raw literal, not evaluated
        pass
        # --- L5238 ---
        phase_table[50] = 20819  # raw literal, not evaluated
        pass
        # --- L5242 ---
        phase_table[50] = 20850  # raw literal, not evaluated
        pass
        # --- L5246 ---
        phase_table[50] = 20879  # raw literal, not evaluated
        pass
        # --- L5250 ---
        phase_table[50] = 20909  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5270 ---
        phase_table[51] = 20924  # raw literal, not evaluated
        switch(7):
            case 1: goto L5276
            case 2: goto L5282
            case 3: goto L5288
            case 4: goto L5294
            case 5: goto L5300
            case 6: goto L5306
            case 7: goto L5312
            case 8: goto L5318
            case 9: goto L5324
            case 10: goto L5330
            case 11: goto L5336
            case 12: goto L5342
            case 13: goto L5346
            case 14: goto L5350
            case 512: goto L5354
            case 32: goto L5360
            case 64: goto L5366
            case 128: goto L5372
            case 256: goto L5378
            default: goto L5384
        phase_table[51] = 20925  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5282 ---
        phase_table[51] = 20952  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5288 ---
        phase_table[51] = 20978  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5294 ---
        phase_table[51] = 21008  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5300 ---
        phase_table[51] = 21032  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5306 ---
        phase_table[51] = 21057  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5312 ---
        phase_table[51] = 21111  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5318 ---
        phase_table[51] = 21135  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5324 ---
        phase_table[51] = 21190  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5330 ---
        phase_table[51] = 21235  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5336 ---
        phase_table[51] = 21286  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5342 ---
        phase_table[51] = 21369  # raw literal, not evaluated
        pass
        # --- L5346 ---
        phase_table[51] = 21433  # raw literal, not evaluated
        pass
        # --- L5350 ---
        phase_table[51] = 21487  # raw literal, not evaluated
        pass
        # --- L5354 ---
        phase_table[51] = 21559  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5360 ---
        phase_table[51] = 21593  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5366 ---
        phase_table[51] = 21632  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5372 ---
        phase_table[51] = 21671  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5378 ---
        phase_table[51] = 21712  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5384 ---
        phase_table[51] = 21752  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5428 ---
        system_message(21791 /*" þ1"*/)
        # --- L5430 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L5433
            case 64: goto L5451
            case 128: goto L5469
            case 256: goto L5487
            default: goto L5505
        if not (group_condition_ref(1, 11)):
            goto L5441
        # else: falls through here, rejoins L5441
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5441 ---
        condition[1] = Condition(var_ref=1, expr_offset=3937)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L5451 ---
        if not (group_condition_ref(2, 11)):
            goto L5459
        # else: falls through here, rejoins L5459
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5459 ---
        condition[2] = Condition(var_ref=2, expr_offset=3958)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L5469 ---
        if not (group_condition_ref(3, 11)):
            goto L5477
        # else: falls through here, rejoins L5477
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5477 ---
        condition[3] = Condition(var_ref=3, expr_offset=3979)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5487 ---
        if not (group_condition_ref(4, 11)):
            goto L5495
        # else: falls through here, rejoins L5495
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5495 ---
        condition[4] = Condition(var_ref=4, expr_offset=4000)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5505 ---
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5522 ---
        if not (((set_unit_behavior(8, 11) & 1024) > 0)):
            goto L5529
        # else: falls through here, rejoins L5529
        unit[11].attr8 = (set_unit_behavior(8, 11) - 1024)
        # --- L5529 ---
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L5544
        # else: falls through here, rejoins L5553
        timer[1] = current_turn + 2
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        move_unit(unit[11], priority=var[47], dest_type=0, dest_arg=0)
        # --- L5544 ---
        if not (timer_expired(1)):
            goto L5553
        # else: falls through here, rejoins L5553
        move_unit(unit[11], priority=3, dest_type=2, dest_arg=7)
        # --- L5553 ---
        pass
        # --- L5554 ---
        pass
        # --- L5555 ---
        if not ((set_unit_behavior(7, 11) != 4)):
            goto L5834
        # else: falls through here, rejoins L5849
        var[72] = random_below(100)
        if not (((var[1] == 0) and (var[72] < 4))):
            goto L5829
        # else: falls through here, rejoins L5829
        var[1] = (var[1] + 1)
        phase_table[52] = 21809  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5575
            case 1: goto L5579
            case 2: goto L5583
            case 7: goto L5587
            default: goto L5591
        phase_table[52] = 21810  # raw literal, not evaluated
        pass
        # --- L5579 ---
        phase_table[52] = 21845  # raw literal, not evaluated
        pass
        # --- L5583 ---
        phase_table[52] = 21872  # raw literal, not evaluated
        pass
        # --- L5587 ---
        phase_table[52] = 21911  # raw literal, not evaluated
        pass
        # --- L5591 ---
        phase_table[52] = 21939  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5605 ---
        phase_table[53] = 21992  # raw literal, not evaluated
        var[73] = random_below(4)
        if not (((random_below(1) != 7) and (var[73] >= 3))):
            goto L5618
        # else: falls through here, rejoins L5618
        var[73] = random_below(3)
        # --- L5618 ---
        switch(var[73]):
            case 0: goto L5621
            case 1: goto L5625
            case 3: goto L5629
            case 4: goto L5633
            case 5: goto L5637
            case 6: goto L5641
            case 7: goto L5645
            default: goto L5649
        phase_table[53] = 21993  # raw literal, not evaluated
        pass
        # --- L5625 ---
        phase_table[53] = 21997  # raw literal, not evaluated
        pass
        # --- L5629 ---
        phase_table[53] = 22008  # raw literal, not evaluated
        pass
        # --- L5633 ---
        phase_table[53] = 22029  # raw literal, not evaluated
        pass
        # --- L5637 ---
        phase_table[53] = 22056  # raw literal, not evaluated
        pass
        # --- L5641 ---
        phase_table[53] = 22087  # raw literal, not evaluated
        pass
        # --- L5645 ---
        phase_table[53] = 22116  # raw literal, not evaluated
        pass
        # --- L5649 ---
        phase_table[53] = 22146  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5669 ---
        phase_table[54] = 22161  # raw literal, not evaluated
        switch(9):
            case 1: goto L5675
            case 2: goto L5681
            case 3: goto L5687
            case 4: goto L5693
            case 5: goto L5699
            case 6: goto L5705
            case 7: goto L5711
            case 8: goto L5717
            case 9: goto L5723
            case 10: goto L5729
            case 11: goto L5735
            case 12: goto L5741
            case 13: goto L5745
            case 14: goto L5749
            case 512: goto L5753
            case 32: goto L5759
            case 64: goto L5765
            case 128: goto L5771
            case 256: goto L5777
            default: goto L5783
        phase_table[54] = 22162  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5681 ---
        phase_table[54] = 22189  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5687 ---
        phase_table[54] = 22215  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5693 ---
        phase_table[54] = 22245  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5699 ---
        phase_table[54] = 22269  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5705 ---
        phase_table[54] = 22294  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5711 ---
        phase_table[54] = 22348  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5717 ---
        phase_table[54] = 22372  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5723 ---
        phase_table[54] = 22427  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5729 ---
        phase_table[54] = 22472  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5735 ---
        phase_table[54] = 22523  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5741 ---
        phase_table[54] = 22606  # raw literal, not evaluated
        pass
        # --- L5745 ---
        phase_table[54] = 22670  # raw literal, not evaluated
        pass
        # --- L5749 ---
        phase_table[54] = 22724  # raw literal, not evaluated
        pass
        # --- L5753 ---
        phase_table[54] = 22796  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5759 ---
        phase_table[54] = 22830  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5765 ---
        phase_table[54] = 22869  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5771 ---
        phase_table[54] = 22908  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5777 ---
        phase_table[54] = 22949  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5783 ---
        phase_table[54] = 22989  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5827 ---
        system_message(23028 /*" þ4"*/)
        # --- L5829 ---
        move_unit(unit[11], priority=4, dest_type=3, dest_arg=13)
        # --- L5834 ---
        var[75] = set_unit_behavior(10, 11)
        unit[14] = var[75]
        if not (group_condition(14)):
            goto L5849
        # else: falls through here, rejoins L5849
        move_unit(unit[11], priority=6, dest_type=0, dest_arg=0)
        # --- L5849 ---
        pass
        # --- L5850 ---
        pass
        # --- L5851 ---
        if not ((((var[21] & 7136) == 0) & (var[43] == 0))):
            goto L6224
        # else: falls through here, rejoins L6236
        var[76] = random_below(100)
        if not (((var[1] == 0) and (var[76] < 4))):
            goto L6125
        # else: falls through here, rejoins L6125
        var[1] = (var[1] + 1)
        phase_table[55] = 23046  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5871
            case 1: goto L5875
            case 2: goto L5879
            case 7: goto L5883
            default: goto L5887
        phase_table[55] = 23047  # raw literal, not evaluated
        pass
        # --- L5875 ---
        phase_table[55] = 23082  # raw literal, not evaluated
        pass
        # --- L5879 ---
        phase_table[55] = 23109  # raw literal, not evaluated
        pass
        # --- L5883 ---
        phase_table[55] = 23148  # raw literal, not evaluated
        pass
        # --- L5887 ---
        phase_table[55] = 23176  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5901 ---
        phase_table[56] = 23229  # raw literal, not evaluated
        var[77] = random_below(4)
        if not (((random_below(1) != 7) and (var[77] >= 3))):
            goto L5914
        # else: falls through here, rejoins L5914
        var[77] = random_below(3)
        # --- L5914 ---
        switch(var[77]):
            case 0: goto L5917
            case 1: goto L5921
            case 3: goto L5925
            case 4: goto L5929
            case 5: goto L5933
            case 6: goto L5937
            case 7: goto L5941
            default: goto L5945
        phase_table[56] = 23230  # raw literal, not evaluated
        pass
        # --- L5921 ---
        phase_table[56] = 23234  # raw literal, not evaluated
        pass
        # --- L5925 ---
        phase_table[56] = 23245  # raw literal, not evaluated
        pass
        # --- L5929 ---
        phase_table[56] = 23266  # raw literal, not evaluated
        pass
        # --- L5933 ---
        phase_table[56] = 23293  # raw literal, not evaluated
        pass
        # --- L5937 ---
        phase_table[56] = 23324  # raw literal, not evaluated
        pass
        # --- L5941 ---
        phase_table[56] = 23353  # raw literal, not evaluated
        pass
        # --- L5945 ---
        phase_table[56] = 23383  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5965 ---
        phase_table[57] = 23398  # raw literal, not evaluated
        switch(7):
            case 1: goto L5971
            case 2: goto L5977
            case 3: goto L5983
            case 4: goto L5989
            case 5: goto L5995
            case 6: goto L6001
            case 7: goto L6007
            case 8: goto L6013
            case 9: goto L6019
            case 10: goto L6025
            case 11: goto L6031
            case 12: goto L6037
            case 13: goto L6041
            case 14: goto L6045
            case 512: goto L6049
            case 32: goto L6055
            case 64: goto L6061
            case 128: goto L6067
            case 256: goto L6073
            default: goto L6079
        phase_table[57] = 23399  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5977 ---
        phase_table[57] = 23426  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5983 ---
        phase_table[57] = 23452  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5989 ---
        phase_table[57] = 23482  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5995 ---
        phase_table[57] = 23506  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6001 ---
        phase_table[57] = 23531  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6007 ---
        phase_table[57] = 23585  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6013 ---
        phase_table[57] = 23609  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6019 ---
        phase_table[57] = 23664  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6025 ---
        phase_table[57] = 23709  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6031 ---
        phase_table[57] = 23760  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6037 ---
        phase_table[57] = 23843  # raw literal, not evaluated
        pass
        # --- L6041 ---
        phase_table[57] = 23907  # raw literal, not evaluated
        pass
        # --- L6045 ---
        phase_table[57] = 23961  # raw literal, not evaluated
        pass
        # --- L6049 ---
        phase_table[57] = 24033  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6055 ---
        phase_table[57] = 24067  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6061 ---
        phase_table[57] = 24106  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6067 ---
        phase_table[57] = 24145  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6073 ---
        phase_table[57] = 24186  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6079 ---
        phase_table[57] = 24226  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6123 ---
        system_message(24265 /*" þ7"*/)
        # --- L6125 ---
        switch((set_unit_behavior(8, 11) & 7136)):
            case 32: goto L6128
            case 64: goto L6146
            case 128: goto L6164
            case 256: goto L6182
            default: goto L6200
        if not (group_condition_ref(1, 11)):
            goto L6136
        # else: falls through here, rejoins L6136
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6136 ---
        condition[1] = Condition(var_ref=1, expr_offset=4433)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L6146 ---
        if not (group_condition_ref(2, 11)):
            goto L6154
        # else: falls through here, rejoins L6154
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6154 ---
        condition[2] = Condition(var_ref=2, expr_offset=4454)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L6164 ---
        if not (group_condition_ref(3, 11)):
            goto L6172
        # else: falls through here, rejoins L6172
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6172 ---
        condition[3] = Condition(var_ref=3, expr_offset=4475)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L6182 ---
        if not (group_condition_ref(4, 11)):
            goto L6190
        # else: falls through here, rejoins L6190
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6190 ---
        condition[4] = Condition(var_ref=4, expr_offset=4496)
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L6200 ---
        move_unit(unit[11], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6217 ---
        if not (((set_unit_behavior(8, 11) & 1024) > 0)):
            goto L6224
        # else: falls through here, rejoins L6224
        unit[11].attr8 = (set_unit_behavior(8, 11) - 1024)
        # --- L6224 ---
        if not (((set_unit_behavior(8, 11) & 1024) == 0)):
            goto L6236
        # else: falls through here, rejoins L6236
        unit[11].attr8 = (set_unit_behavior(8, 11) + 1024)
        move_unit(unit[11], priority=var[47], dest_type=0, dest_arg=0)
        # --- L6236 ---
        pass
        # --- L6237 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L6265 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5edb] - dead end, not decoded further (other branches continue independently)
        # --- L6272 ---
        if ((any_group_alive(2) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L6277
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6277 ---
        if (timer_expired(3) and (var[3] > 0)) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L6283
        system_message(24313 /*"Mobile defense node threatened. Call all nearby units from defense pool."*/)
        # --- L6283 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (any_group_alive(2)):
                goto L6295
            # else: falls through here, rejoins L6300
            play_sound(35)
            system_message(24386 /*"You rock, dude!"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6295 ---
            system_message(24402 /*"Mission failed! You suck!"*/)
            set_unit_objective(unit=1, state=2)
            # --- L6300 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
