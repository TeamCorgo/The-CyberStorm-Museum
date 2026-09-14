# SIT501.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = (random_below(4) + 3)
var[5] = 0
var[8] = (8 + random_below(7))
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    hex[1] = hex_along_path(toward=0, steps=0)
    if not ((var[4] == 0)):
        goto L21
    # else: falls through here, rejoins L21
    var[4] = (random_below(var[10]) + var[11])
    # --- L21 ---
    var[12] = (stat(0) / 1)
    var[12] = (var[12] - 200)
    var[13] = 1
    var[14] = 179
    pass  # message no-op
    # [UNKNOWN OPCODE 0x0141] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[31] = 0
        var[32] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L528
        var[33] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L526
        # --- L518 ---
        var[33] = (var[33] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L518
        # --- L526 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0262] - dead end, not decoded further (other branches continue independently)
        # --- L528 ---
        if not (timer_expired(2)):
            goto L6010
        # else: falls through here, rejoins L6010
        timer[2] = current_turn + 1
        var[3] = 0
        var[34] = 0
        if not ((group_condition_ref_2(2, 1) and group_condition_ref_2(2, 2))):
            goto L825
        # else: falls through here, rejoins L832
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[35] = random_below(100)
        if not (((var[3] == 0) and (var[35] < 2))):
            goto L818
        # else: falls through here, rejoins L818
        var[3] = (var[3] + 1)
        phase_table[1] = 760  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L564
            case 1: goto L568
            case 2: goto L572
            case 7: goto L576
            default: goto L580
        phase_table[1] = 761  # raw literal, not evaluated
        pass
        # --- L568 ---
        phase_table[1] = 796  # raw literal, not evaluated
        pass
        # --- L572 ---
        phase_table[1] = 823  # raw literal, not evaluated
        pass
        # --- L576 ---
        phase_table[1] = 862  # raw literal, not evaluated
        pass
        # --- L580 ---
        phase_table[1] = 890  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L594 ---
        phase_table[2] = 943  # raw literal, not evaluated
        var[36] = random_below(4)
        if not (((random_below(4) != 7) and (var[36] >= 3))):
            goto L607
        # else: falls through here, rejoins L607
        var[36] = random_below(3)
        # --- L607 ---
        switch(var[36]):
            case 0: goto L610
            case 1: goto L614
            case 3: goto L618
            case 4: goto L622
            case 5: goto L626
            case 6: goto L630
            case 7: goto L634
            default: goto L638
        phase_table[2] = 944  # raw literal, not evaluated
        pass
        # --- L614 ---
        phase_table[2] = 948  # raw literal, not evaluated
        pass
        # --- L618 ---
        phase_table[2] = 959  # raw literal, not evaluated
        pass
        # --- L622 ---
        phase_table[2] = 980  # raw literal, not evaluated
        pass
        # --- L626 ---
        phase_table[2] = 1007  # raw literal, not evaluated
        pass
        # --- L630 ---
        phase_table[2] = 1038  # raw literal, not evaluated
        pass
        # --- L634 ---
        phase_table[2] = 1067  # raw literal, not evaluated
        pass
        # --- L638 ---
        phase_table[2] = 1097  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L658 ---
        phase_table[3] = 1112  # raw literal, not evaluated
        switch(32):
            case 1: goto L664
            case 2: goto L670
            case 3: goto L676
            case 4: goto L682
            case 5: goto L688
            case 6: goto L694
            case 7: goto L700
            case 8: goto L706
            case 9: goto L712
            case 10: goto L718
            case 11: goto L724
            case 12: goto L730
            case 13: goto L734
            case 14: goto L738
            case 512: goto L742
            case 32: goto L748
            case 64: goto L754
            case 128: goto L760
            case 256: goto L766
            default: goto L772
        phase_table[3] = 1113  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L670 ---
        phase_table[3] = 1140  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L676 ---
        phase_table[3] = 1166  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L682 ---
        phase_table[3] = 1196  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L688 ---
        phase_table[3] = 1220  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L694 ---
        phase_table[3] = 1245  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L700 ---
        phase_table[3] = 1299  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L706 ---
        phase_table[3] = 1323  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L712 ---
        phase_table[3] = 1378  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L718 ---
        phase_table[3] = 1423  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L724 ---
        phase_table[3] = 1474  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L730 ---
        phase_table[3] = 1557  # raw literal, not evaluated
        pass
        # --- L734 ---
        phase_table[3] = 1621  # raw literal, not evaluated
        pass
        # --- L738 ---
        phase_table[3] = 1675  # raw literal, not evaluated
        pass
        # --- L742 ---
        phase_table[3] = 1747  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L748 ---
        phase_table[3] = 1781  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L754 ---
        phase_table[3] = 1820  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L760 ---
        phase_table[3] = 1859  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L766 ---
        phase_table[3] = 1900  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L772 ---
        phase_table[3] = 1940  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L816 ---
        system_message(1979 /*" þ"*/)
        # --- L818 ---
        if not (((var[34] & 32) == 0)):
            goto L825
        # else: falls through here, rejoins L825
        var[34] = (var[34] + 32)
        # --- L825 ---
        if not (((var[34] & 32) > 0)):
            goto L832
        # else: falls through here, rejoins L832
        var[34] = (var[34] - 32)
        # --- L832 ---
        if not ((group_condition_ref_2(3, 1) and group_condition_ref_2(3, 2))):
            goto L1116
        # else: falls through here, rejoins L1123
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[38] = random_below(100)
        if not (((var[3] == 0) and (var[38] < 2))):
            goto L1109
        # else: falls through here, rejoins L1109
        var[3] = (var[3] + 1)
        phase_table[4] = 1997  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L855
            case 1: goto L859
            case 2: goto L863
            case 7: goto L867
            default: goto L871
        phase_table[4] = 1998  # raw literal, not evaluated
        pass
        # --- L859 ---
        phase_table[4] = 2033  # raw literal, not evaluated
        pass
        # --- L863 ---
        phase_table[4] = 2060  # raw literal, not evaluated
        pass
        # --- L867 ---
        phase_table[4] = 2099  # raw literal, not evaluated
        pass
        # --- L871 ---
        phase_table[4] = 2127  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L885 ---
        phase_table[5] = 2180  # raw literal, not evaluated
        var[39] = random_below(4)
        if not (((random_below(4) != 7) and (var[39] >= 3))):
            goto L898
        # else: falls through here, rejoins L898
        var[39] = random_below(3)
        # --- L898 ---
        switch(var[39]):
            case 0: goto L901
            case 1: goto L905
            case 3: goto L909
            case 4: goto L913
            case 5: goto L917
            case 6: goto L921
            case 7: goto L925
            default: goto L929
        phase_table[5] = 2181  # raw literal, not evaluated
        pass
        # --- L905 ---
        phase_table[5] = 2185  # raw literal, not evaluated
        pass
        # --- L909 ---
        phase_table[5] = 2196  # raw literal, not evaluated
        pass
        # --- L913 ---
        phase_table[5] = 2217  # raw literal, not evaluated
        pass
        # --- L917 ---
        phase_table[5] = 2244  # raw literal, not evaluated
        pass
        # --- L921 ---
        phase_table[5] = 2275  # raw literal, not evaluated
        pass
        # --- L925 ---
        phase_table[5] = 2304  # raw literal, not evaluated
        pass
        # --- L929 ---
        phase_table[5] = 2334  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L949 ---
        phase_table[6] = 2349  # raw literal, not evaluated
        switch(64):
            case 1: goto L955
            case 2: goto L961
            case 3: goto L967
            case 4: goto L973
            case 5: goto L979
            case 6: goto L985
            case 7: goto L991
            case 8: goto L997
            case 9: goto L1003
            case 10: goto L1009
            case 11: goto L1015
            case 12: goto L1021
            case 13: goto L1025
            case 14: goto L1029
            case 512: goto L1033
            case 32: goto L1039
            case 64: goto L1045
            case 128: goto L1051
            case 256: goto L1057
            default: goto L1063
        phase_table[6] = 2350  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L961 ---
        phase_table[6] = 2377  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L967 ---
        phase_table[6] = 2403  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L973 ---
        phase_table[6] = 2433  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L979 ---
        phase_table[6] = 2457  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L985 ---
        phase_table[6] = 2482  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L991 ---
        phase_table[6] = 2536  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L997 ---
        phase_table[6] = 2560  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1003 ---
        phase_table[6] = 2615  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1009 ---
        phase_table[6] = 2660  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1015 ---
        phase_table[6] = 2711  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1021 ---
        phase_table[6] = 2794  # raw literal, not evaluated
        pass
        # --- L1025 ---
        phase_table[6] = 2858  # raw literal, not evaluated
        pass
        # --- L1029 ---
        phase_table[6] = 2912  # raw literal, not evaluated
        pass
        # --- L1033 ---
        phase_table[6] = 2984  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1039 ---
        phase_table[6] = 3018  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1045 ---
        phase_table[6] = 3057  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1051 ---
        phase_table[6] = 3096  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1057 ---
        phase_table[6] = 3137  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1063 ---
        phase_table[6] = 3177  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1107 ---
        system_message(3216 /*" þ"*/)
        # --- L1109 ---
        if not (((var[34] & 64) == 0)):
            goto L1116
        # else: falls through here, rejoins L1116
        var[34] = (var[34] + 64)
        # --- L1116 ---
        if not (((var[34] & 64) > 0)):
            goto L1123
        # else: falls through here, rejoins L1123
        var[34] = (var[34] - 64)
        # --- L1123 ---
        if not ((group_condition_ref_2(4, 1) and group_condition_ref_2(4, 2))):
            goto L1407
        # else: falls through here, rejoins L1414
        unit[8] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[41] = random_below(100)
        if not (((var[3] == 0) and (var[41] < 2))):
            goto L1400
        # else: falls through here, rejoins L1400
        var[3] = (var[3] + 1)
        phase_table[7] = 3234  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1146
            case 1: goto L1150
            case 2: goto L1154
            case 7: goto L1158
            default: goto L1162
        phase_table[7] = 3235  # raw literal, not evaluated
        pass
        # --- L1150 ---
        phase_table[7] = 3270  # raw literal, not evaluated
        pass
        # --- L1154 ---
        phase_table[7] = 3297  # raw literal, not evaluated
        pass
        # --- L1158 ---
        phase_table[7] = 3336  # raw literal, not evaluated
        pass
        # --- L1162 ---
        phase_table[7] = 3364  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1176 ---
        phase_table[8] = 3417  # raw literal, not evaluated
        var[42] = random_below(4)
        if not (((random_below(4) != 7) and (var[42] >= 3))):
            goto L1189
        # else: falls through here, rejoins L1189
        var[42] = random_below(3)
        # --- L1189 ---
        switch(var[42]):
            case 0: goto L1192
            case 1: goto L1196
            case 3: goto L1200
            case 4: goto L1204
            case 5: goto L1208
            case 6: goto L1212
            case 7: goto L1216
            default: goto L1220
        phase_table[8] = 3418  # raw literal, not evaluated
        pass
        # --- L1196 ---
        phase_table[8] = 3422  # raw literal, not evaluated
        pass
        # --- L1200 ---
        phase_table[8] = 3433  # raw literal, not evaluated
        pass
        # --- L1204 ---
        phase_table[8] = 3454  # raw literal, not evaluated
        pass
        # --- L1208 ---
        phase_table[8] = 3481  # raw literal, not evaluated
        pass
        # --- L1212 ---
        phase_table[8] = 3512  # raw literal, not evaluated
        pass
        # --- L1216 ---
        phase_table[8] = 3541  # raw literal, not evaluated
        pass
        # --- L1220 ---
        phase_table[8] = 3571  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1240 ---
        phase_table[9] = 3586  # raw literal, not evaluated
        switch(128):
            case 1: goto L1246
            case 2: goto L1252
            case 3: goto L1258
            case 4: goto L1264
            case 5: goto L1270
            case 6: goto L1276
            case 7: goto L1282
            case 8: goto L1288
            case 9: goto L1294
            case 10: goto L1300
            case 11: goto L1306
            case 12: goto L1312
            case 13: goto L1316
            case 14: goto L1320
            case 512: goto L1324
            case 32: goto L1330
            case 64: goto L1336
            case 128: goto L1342
            case 256: goto L1348
            default: goto L1354
        phase_table[9] = 3587  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1252 ---
        phase_table[9] = 3614  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1258 ---
        phase_table[9] = 3640  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1264 ---
        phase_table[9] = 3670  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1270 ---
        phase_table[9] = 3694  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1276 ---
        phase_table[9] = 3719  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1282 ---
        phase_table[9] = 3773  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1288 ---
        phase_table[9] = 3797  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1294 ---
        phase_table[9] = 3852  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1300 ---
        phase_table[9] = 3897  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1306 ---
        phase_table[9] = 3948  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1312 ---
        phase_table[9] = 4031  # raw literal, not evaluated
        pass
        # --- L1316 ---
        phase_table[9] = 4095  # raw literal, not evaluated
        pass
        # --- L1320 ---
        phase_table[9] = 4149  # raw literal, not evaluated
        pass
        # --- L1324 ---
        phase_table[9] = 4221  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1330 ---
        phase_table[9] = 4255  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1336 ---
        phase_table[9] = 4294  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1342 ---
        phase_table[9] = 4333  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1348 ---
        phase_table[9] = 4374  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1354 ---
        phase_table[9] = 4414  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1398 ---
        system_message(4453 /*" þ"*/)
        # --- L1400 ---
        if not (((var[34] & 128) == 0)):
            goto L1407
        # else: falls through here, rejoins L1407
        var[34] = (var[34] + 128)
        # --- L1407 ---
        if not (((var[34] & 128) > 0)):
            goto L1414
        # else: falls through here, rejoins L1414
        var[34] = (var[34] - 128)
        # --- L1414 ---
        if not ((group_condition_ref_2(5, 1) and group_condition_ref_2(5, 2))):
            goto L1698
        # else: falls through here, rejoins L1705
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[44] = random_below(100)
        if not (((var[3] == 0) and (var[44] < 2))):
            goto L1691
        # else: falls through here, rejoins L1691
        var[3] = (var[3] + 1)
        phase_table[10] = 4471  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1437
            case 1: goto L1441
            case 2: goto L1445
            case 7: goto L1449
            default: goto L1453
        phase_table[10] = 4472  # raw literal, not evaluated
        pass
        # --- L1441 ---
        phase_table[10] = 4507  # raw literal, not evaluated
        pass
        # --- L1445 ---
        phase_table[10] = 4534  # raw literal, not evaluated
        pass
        # --- L1449 ---
        phase_table[10] = 4573  # raw literal, not evaluated
        pass
        # --- L1453 ---
        phase_table[10] = 4601  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1467 ---
        phase_table[11] = 4654  # raw literal, not evaluated
        var[45] = random_below(4)
        if not (((random_below(4) != 7) and (var[45] >= 3))):
            goto L1480
        # else: falls through here, rejoins L1480
        var[45] = random_below(3)
        # --- L1480 ---
        switch(var[45]):
            case 0: goto L1483
            case 1: goto L1487
            case 3: goto L1491
            case 4: goto L1495
            case 5: goto L1499
            case 6: goto L1503
            case 7: goto L1507
            default: goto L1511
        phase_table[11] = 4655  # raw literal, not evaluated
        pass
        # --- L1487 ---
        phase_table[11] = 4659  # raw literal, not evaluated
        pass
        # --- L1491 ---
        phase_table[11] = 4670  # raw literal, not evaluated
        pass
        # --- L1495 ---
        phase_table[11] = 4691  # raw literal, not evaluated
        pass
        # --- L1499 ---
        phase_table[11] = 4718  # raw literal, not evaluated
        pass
        # --- L1503 ---
        phase_table[11] = 4749  # raw literal, not evaluated
        pass
        # --- L1507 ---
        phase_table[11] = 4778  # raw literal, not evaluated
        pass
        # --- L1511 ---
        phase_table[11] = 4808  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1531 ---
        phase_table[12] = 4823  # raw literal, not evaluated
        switch(256):
            case 1: goto L1537
            case 2: goto L1543
            case 3: goto L1549
            case 4: goto L1555
            case 5: goto L1561
            case 6: goto L1567
            case 7: goto L1573
            case 8: goto L1579
            case 9: goto L1585
            case 10: goto L1591
            case 11: goto L1597
            case 12: goto L1603
            case 13: goto L1607
            case 14: goto L1611
            case 512: goto L1615
            case 32: goto L1621
            case 64: goto L1627
            case 128: goto L1633
            case 256: goto L1639
            default: goto L1645
        phase_table[12] = 4824  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1543 ---
        phase_table[12] = 4851  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1549 ---
        phase_table[12] = 4877  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1555 ---
        phase_table[12] = 4907  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1561 ---
        phase_table[12] = 4931  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1567 ---
        phase_table[12] = 4956  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1573 ---
        phase_table[12] = 5010  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1579 ---
        phase_table[12] = 5034  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1585 ---
        phase_table[12] = 5089  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1591 ---
        phase_table[12] = 5134  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1597 ---
        phase_table[12] = 5185  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1603 ---
        phase_table[12] = 5268  # raw literal, not evaluated
        pass
        # --- L1607 ---
        phase_table[12] = 5332  # raw literal, not evaluated
        pass
        # --- L1611 ---
        phase_table[12] = 5386  # raw literal, not evaluated
        pass
        # --- L1615 ---
        phase_table[12] = 5458  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1621 ---
        phase_table[12] = 5492  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1627 ---
        phase_table[12] = 5531  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1633 ---
        phase_table[12] = 5570  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1639 ---
        phase_table[12] = 5611  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1645 ---
        phase_table[12] = 5651  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1689 ---
        system_message(5690 /*" þ
"*/)
        # --- L1691 ---
        if not (((var[34] & 256) == 0)):
            goto L1698
        # else: falls through here, rejoins L1698
        var[34] = (var[34] + 256)
        # --- L1698 ---
        if not (((var[34] & 256) > 0)):
            goto L1705
        # else: falls through here, rejoins L1705
        var[34] = (var[34] - 256)
        # --- L1705 ---
        if not ((group_condition_ref_2(6, 1) and group_condition_ref_2(6, 2))):
            goto L1989
        # else: falls through here, rejoins L1996
        unit[10] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[47] = random_below(100)
        if not (((var[3] == 0) and (var[47] < 2))):
            goto L1982
        # else: falls through here, rejoins L1982
        var[3] = (var[3] + 1)
        phase_table[13] = 5708  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1728
            case 1: goto L1732
            case 2: goto L1736
            case 7: goto L1740
            default: goto L1744
        phase_table[13] = 5709  # raw literal, not evaluated
        pass
        # --- L1732 ---
        phase_table[13] = 5744  # raw literal, not evaluated
        pass
        # --- L1736 ---
        phase_table[13] = 5771  # raw literal, not evaluated
        pass
        # --- L1740 ---
        phase_table[13] = 5810  # raw literal, not evaluated
        pass
        # --- L1744 ---
        phase_table[13] = 5838  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1758 ---
        phase_table[14] = 5891  # raw literal, not evaluated
        var[48] = random_below(4)
        if not (((random_below(4) != 7) and (var[48] >= 3))):
            goto L1771
        # else: falls through here, rejoins L1771
        var[48] = random_below(3)
        # --- L1771 ---
        switch(var[48]):
            case 0: goto L1774
            case 1: goto L1778
            case 3: goto L1782
            case 4: goto L1786
            case 5: goto L1790
            case 6: goto L1794
            case 7: goto L1798
            default: goto L1802
        phase_table[14] = 5892  # raw literal, not evaluated
        pass
        # --- L1778 ---
        phase_table[14] = 5896  # raw literal, not evaluated
        pass
        # --- L1782 ---
        phase_table[14] = 5907  # raw literal, not evaluated
        pass
        # --- L1786 ---
        phase_table[14] = 5928  # raw literal, not evaluated
        pass
        # --- L1790 ---
        phase_table[14] = 5955  # raw literal, not evaluated
        pass
        # --- L1794 ---
        phase_table[14] = 5986  # raw literal, not evaluated
        pass
        # --- L1798 ---
        phase_table[14] = 6015  # raw literal, not evaluated
        pass
        # --- L1802 ---
        phase_table[14] = 6045  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1822 ---
        phase_table[15] = 6060  # raw literal, not evaluated
        switch(2048):
            case 1: goto L1828
            case 2: goto L1834
            case 3: goto L1840
            case 4: goto L1846
            case 5: goto L1852
            case 6: goto L1858
            case 7: goto L1864
            case 8: goto L1870
            case 9: goto L1876
            case 10: goto L1882
            case 11: goto L1888
            case 12: goto L1894
            case 13: goto L1898
            case 14: goto L1902
            case 512: goto L1906
            case 32: goto L1912
            case 64: goto L1918
            case 128: goto L1924
            case 256: goto L1930
            default: goto L1936
        phase_table[15] = 6061  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1834 ---
        phase_table[15] = 6088  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1840 ---
        phase_table[15] = 6114  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1846 ---
        phase_table[15] = 6144  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1852 ---
        phase_table[15] = 6168  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1858 ---
        phase_table[15] = 6193  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1864 ---
        phase_table[15] = 6247  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1870 ---
        phase_table[15] = 6271  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1876 ---
        phase_table[15] = 6326  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1882 ---
        phase_table[15] = 6371  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1888 ---
        phase_table[15] = 6422  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1894 ---
        phase_table[15] = 6505  # raw literal, not evaluated
        pass
        # --- L1898 ---
        phase_table[15] = 6569  # raw literal, not evaluated
        pass
        # --- L1902 ---
        phase_table[15] = 6623  # raw literal, not evaluated
        pass
        # --- L1906 ---
        phase_table[15] = 6695  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1912 ---
        phase_table[15] = 6729  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1918 ---
        phase_table[15] = 6768  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1924 ---
        phase_table[15] = 6807  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1930 ---
        phase_table[15] = 6848  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1936 ---
        phase_table[15] = 6888  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1980 ---
        system_message(6927 /*" þ"*/)
        # --- L1982 ---
        if not (((var[34] & 2048) == 0)):
            goto L1989
        # else: falls through here, rejoins L1989
        var[34] = (var[34] + 2048)
        # --- L1989 ---
        if not (((var[34] & 2048) > 0)):
            goto L1996
        # else: falls through here, rejoins L1996
        var[34] = (var[34] - 2048)
        # --- L1996 ---
        if not ((group_condition_ref_2(7, 1) and group_condition_ref_2(7, 2))):
            goto L2280
        # else: falls through here, rejoins L2287
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[50] = random_below(100)
        if not (((var[3] == 0) and (var[50] < 2))):
            goto L2273
        # else: falls through here, rejoins L2273
        var[3] = (var[3] + 1)
        phase_table[16] = 6945  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2019
            case 1: goto L2023
            case 2: goto L2027
            case 7: goto L2031
            default: goto L2035
        phase_table[16] = 6946  # raw literal, not evaluated
        pass
        # --- L2023 ---
        phase_table[16] = 6981  # raw literal, not evaluated
        pass
        # --- L2027 ---
        phase_table[16] = 7008  # raw literal, not evaluated
        pass
        # --- L2031 ---
        phase_table[16] = 7047  # raw literal, not evaluated
        pass
        # --- L2035 ---
        phase_table[16] = 7075  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2049 ---
        phase_table[17] = 7128  # raw literal, not evaluated
        var[51] = random_below(4)
        if not (((random_below(4) != 7) and (var[51] >= 3))):
            goto L2062
        # else: falls through here, rejoins L2062
        var[51] = random_below(3)
        # --- L2062 ---
        switch(var[51]):
            case 0: goto L2065
            case 1: goto L2069
            case 3: goto L2073
            case 4: goto L2077
            case 5: goto L2081
            case 6: goto L2085
            case 7: goto L2089
            default: goto L2093
        phase_table[17] = 7129  # raw literal, not evaluated
        pass
        # --- L2069 ---
        phase_table[17] = 7133  # raw literal, not evaluated
        pass
        # --- L2073 ---
        phase_table[17] = 7144  # raw literal, not evaluated
        pass
        # --- L2077 ---
        phase_table[17] = 7165  # raw literal, not evaluated
        pass
        # --- L2081 ---
        phase_table[17] = 7192  # raw literal, not evaluated
        pass
        # --- L2085 ---
        phase_table[17] = 7223  # raw literal, not evaluated
        pass
        # --- L2089 ---
        phase_table[17] = 7252  # raw literal, not evaluated
        pass
        # --- L2093 ---
        phase_table[17] = 7282  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2113 ---
        phase_table[18] = 7297  # raw literal, not evaluated
        switch(4096):
            case 1: goto L2119
            case 2: goto L2125
            case 3: goto L2131
            case 4: goto L2137
            case 5: goto L2143
            case 6: goto L2149
            case 7: goto L2155
            case 8: goto L2161
            case 9: goto L2167
            case 10: goto L2173
            case 11: goto L2179
            case 12: goto L2185
            case 13: goto L2189
            case 14: goto L2193
            case 512: goto L2197
            case 32: goto L2203
            case 64: goto L2209
            case 128: goto L2215
            case 256: goto L2221
            default: goto L2227
        phase_table[18] = 7298  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2125 ---
        phase_table[18] = 7325  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2131 ---
        phase_table[18] = 7351  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2137 ---
        phase_table[18] = 7381  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2143 ---
        phase_table[18] = 7405  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2149 ---
        phase_table[18] = 7430  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2155 ---
        phase_table[18] = 7484  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2161 ---
        phase_table[18] = 7508  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2167 ---
        phase_table[18] = 7563  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2173 ---
        phase_table[18] = 7608  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2179 ---
        phase_table[18] = 7659  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2185 ---
        phase_table[18] = 7742  # raw literal, not evaluated
        pass
        # --- L2189 ---
        phase_table[18] = 7806  # raw literal, not evaluated
        pass
        # --- L2193 ---
        phase_table[18] = 7860  # raw literal, not evaluated
        pass
        # --- L2197 ---
        phase_table[18] = 7932  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2203 ---
        phase_table[18] = 7966  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2209 ---
        phase_table[18] = 8005  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2215 ---
        phase_table[18] = 8044  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2221 ---
        phase_table[18] = 8085  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2227 ---
        phase_table[18] = 8125  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2271 ---
        system_message(8164 /*" þ"*/)
        # --- L2273 ---
        if not (((var[34] & 4096) == 0)):
            goto L2280
        # else: falls through here, rejoins L2280
        var[34] = (var[34] + 4096)
        # --- L2280 ---
        if not (((var[34] & 4096) > 0)):
            goto L2287
        # else: falls through here, rejoins L2287
        var[34] = (var[34] - 4096)
        # --- L2287 ---
        var[53] = 0
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L2584
        # --- L2296 ---
        if not ((set_unit_behavior(9, 12) > 0)):
            goto L2579
        # else: falls through here, rejoins L2579
        var[54] = random_below(100)
        if not (((var[3] == 0) and (var[54] < 4))):
            goto L2570
        # else: falls through here, rejoins L2570
        var[3] = (var[3] + 1)
        phase_table[19] = 8182  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2316
            case 1: goto L2320
            case 2: goto L2324
            case 7: goto L2328
            default: goto L2332
        phase_table[19] = 8183  # raw literal, not evaluated
        pass
        # --- L2320 ---
        phase_table[19] = 8218  # raw literal, not evaluated
        pass
        # --- L2324 ---
        phase_table[19] = 8245  # raw literal, not evaluated
        pass
        # --- L2328 ---
        phase_table[19] = 8284  # raw literal, not evaluated
        pass
        # --- L2332 ---
        phase_table[19] = 8312  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2346 ---
        phase_table[20] = 8365  # raw literal, not evaluated
        var[55] = random_below(2)
        if not (((random_below(4) != 7) and (var[55] >= 3))):
            goto L2359
        # else: falls through here, rejoins L2359
        var[55] = random_below(3)
        # --- L2359 ---
        switch(var[55]):
            case 0: goto L2362
            case 1: goto L2366
            case 3: goto L2370
            case 4: goto L2374
            case 5: goto L2378
            case 6: goto L2382
            case 7: goto L2386
            default: goto L2390
        phase_table[20] = 8366  # raw literal, not evaluated
        pass
        # --- L2366 ---
        phase_table[20] = 8370  # raw literal, not evaluated
        pass
        # --- L2370 ---
        phase_table[20] = 8381  # raw literal, not evaluated
        pass
        # --- L2374 ---
        phase_table[20] = 8402  # raw literal, not evaluated
        pass
        # --- L2378 ---
        phase_table[20] = 8429  # raw literal, not evaluated
        pass
        # --- L2382 ---
        phase_table[20] = 8460  # raw literal, not evaluated
        pass
        # --- L2386 ---
        phase_table[20] = 8489  # raw literal, not evaluated
        pass
        # --- L2390 ---
        phase_table[20] = 8519  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2410 ---
        phase_table[21] = 8534  # raw literal, not evaluated
        switch(10):
            case 1: goto L2416
            case 2: goto L2422
            case 3: goto L2428
            case 4: goto L2434
            case 5: goto L2440
            case 6: goto L2446
            case 7: goto L2452
            case 8: goto L2458
            case 9: goto L2464
            case 10: goto L2470
            case 11: goto L2476
            case 12: goto L2482
            case 13: goto L2486
            case 14: goto L2490
            case 512: goto L2494
            case 32: goto L2500
            case 64: goto L2506
            case 128: goto L2512
            case 256: goto L2518
            default: goto L2524
        phase_table[21] = 8535  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2422 ---
        phase_table[21] = 8562  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2428 ---
        phase_table[21] = 8588  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2434 ---
        phase_table[21] = 8618  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2440 ---
        phase_table[21] = 8642  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2446 ---
        phase_table[21] = 8667  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2452 ---
        phase_table[21] = 8721  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2458 ---
        phase_table[21] = 8745  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2464 ---
        phase_table[21] = 8800  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2470 ---
        phase_table[21] = 8845  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2476 ---
        phase_table[21] = 8896  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2482 ---
        phase_table[21] = 8979  # raw literal, not evaluated
        pass
        # --- L2486 ---
        phase_table[21] = 9043  # raw literal, not evaluated
        pass
        # --- L2490 ---
        phase_table[21] = 9097  # raw literal, not evaluated
        pass
        # --- L2494 ---
        phase_table[21] = 9169  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2500 ---
        phase_table[21] = 9203  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2506 ---
        phase_table[21] = 9242  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2512 ---
        phase_table[21] = 9281  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2518 ---
        phase_table[21] = 9322  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2524 ---
        phase_table[21] = 9362  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2568 ---
        system_message(9401 /*" þ"*/)
        # --- L2570 ---
        if not (((set_unit_behavior(8, 12) & var[34]) == 0)):
            goto L2579
        # else: falls through here, rejoins L2579
        pass  # message no-op
        # [UNKNOWN OPCODE 0x24cb] - dead end, not decoded further (other branches continue independently)
        # --- L2579 ---
        unit[12] = next_unit_in_group(unit[12], group=2)
        goto L2296
        # --- L2584 ---
        unit[13] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 13):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L2618
        # --- L2590 ---
        if not (group_condition_ref_2(8, 2)):
            goto L2597
        # else: falls through here, rejoins L2604
        unit[13].attr8 = 2
        # --- L2597 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2604
        # else: falls through here, rejoins L2604
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L2604 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2613
        # else: falls through here, rejoins L2613
        var[53] = (var[53] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x24ec] - dead end, not decoded further (other branches continue independently)
        # --- L2613 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        goto L2590
        # --- L2618 ---
        if not (group_condition_ref_2(9, 2)):
            goto L2625
        # else: falls through here, rejoins L2632
        unit[13].attr8 = 2
        # --- L2625 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2632
        # else: falls through here, rejoins L2632
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L2632 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2641
        # else: falls through here, rejoins L2641
        var[53] = (var[53] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x24ff] - dead end, not decoded further (other branches continue independently)
        # --- L2641 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        var[57] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L5806
        if not ((set_unit_behavior(5, 12) < 60)):
            goto L2662
        # else: falls through here, rejoins L5799
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L2662 ---
        switch((set_unit_behavior(8, 12) & 15)):
            case 0: goto L2665
            case 1: goto L2948
            case 2: goto L3781
            case 3: goto L4340
            case 4: goto L4350
            case 5: goto L4395
            case 10: goto L4680
            case 11: goto L4690
            case 12: goto L5088
            case 13: goto L5089
            case 14: goto L5384
            case 15: goto L5385
            default: goto L5771
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L2947
        # else: falls through here, rejoins L2947
        var[58] = random_below(100)
        if not (((var[3] == 0) and (var[58] < 40))):
            goto L2939
        # else: falls through here, rejoins L2939
        var[3] = (var[3] + 1)
        phase_table[22] = 9490  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2685
            case 1: goto L2689
            case 2: goto L2693
            case 7: goto L2697
            default: goto L2701
        phase_table[22] = 9491  # raw literal, not evaluated
        pass
        # --- L2689 ---
        phase_table[22] = 9526  # raw literal, not evaluated
        pass
        # --- L2693 ---
        phase_table[22] = 9553  # raw literal, not evaluated
        pass
        # --- L2697 ---
        phase_table[22] = 9592  # raw literal, not evaluated
        pass
        # --- L2701 ---
        phase_table[22] = 9620  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2715 ---
        phase_table[23] = 9673  # raw literal, not evaluated
        var[59] = random_below(4)
        if not (((random_below(1) != 7) and (var[59] >= 3))):
            goto L2728
        # else: falls through here, rejoins L2728
        var[59] = random_below(3)
        # --- L2728 ---
        switch(var[59]):
            case 0: goto L2731
            case 1: goto L2735
            case 3: goto L2739
            case 4: goto L2743
            case 5: goto L2747
            case 6: goto L2751
            case 7: goto L2755
            default: goto L2759
        phase_table[23] = 9674  # raw literal, not evaluated
        pass
        # --- L2735 ---
        phase_table[23] = 9678  # raw literal, not evaluated
        pass
        # --- L2739 ---
        phase_table[23] = 9689  # raw literal, not evaluated
        pass
        # --- L2743 ---
        phase_table[23] = 9710  # raw literal, not evaluated
        pass
        # --- L2747 ---
        phase_table[23] = 9737  # raw literal, not evaluated
        pass
        # --- L2751 ---
        phase_table[23] = 9768  # raw literal, not evaluated
        pass
        # --- L2755 ---
        phase_table[23] = 9797  # raw literal, not evaluated
        pass
        # --- L2759 ---
        phase_table[23] = 9827  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2779 ---
        phase_table[24] = 9842  # raw literal, not evaluated
        switch(8):
            case 1: goto L2785
            case 2: goto L2791
            case 3: goto L2797
            case 4: goto L2803
            case 5: goto L2809
            case 6: goto L2815
            case 7: goto L2821
            case 8: goto L2827
            case 9: goto L2833
            case 10: goto L2839
            case 11: goto L2845
            case 12: goto L2851
            case 13: goto L2855
            case 14: goto L2859
            case 512: goto L2863
            case 32: goto L2869
            case 64: goto L2875
            case 128: goto L2881
            case 256: goto L2887
            default: goto L2893
        phase_table[24] = 9843  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2791 ---
        phase_table[24] = 9870  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2797 ---
        phase_table[24] = 9896  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2803 ---
        phase_table[24] = 9926  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2809 ---
        phase_table[24] = 9950  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2815 ---
        phase_table[24] = 9975  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2821 ---
        phase_table[24] = 10029  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2827 ---
        phase_table[24] = 10053  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2833 ---
        phase_table[24] = 10108  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2839 ---
        phase_table[24] = 10153  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2845 ---
        phase_table[24] = 10204  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2851 ---
        phase_table[24] = 10287  # raw literal, not evaluated
        pass
        # --- L2855 ---
        phase_table[24] = 10351  # raw literal, not evaluated
        pass
        # --- L2859 ---
        phase_table[24] = 10405  # raw literal, not evaluated
        pass
        # --- L2863 ---
        phase_table[24] = 10477  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2869 ---
        phase_table[24] = 10511  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2875 ---
        phase_table[24] = 10550  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2881 ---
        phase_table[24] = 10589  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2887 ---
        phase_table[24] = 10630  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2893 ---
        phase_table[24] = 10670  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2937 ---
        system_message(10709 /*" þ"*/)
        # --- L2939 ---
        move_unit(unit[12], priority=var[57], dest_type=0, dest_arg=0)
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        # --- L2947 ---
        pass
        # --- L2948 ---
        if not ((group_condition_ref_2(10, 1) or (set_unit_behavior(9, 12) != 0))):
            goto L3231
        # else: falls through here, rejoins L3780
        if not ((set_unit_behavior(7, 12) != 6)):
            goto L3231
        # else: falls through here, rejoins L3231
        var[61] = random_below(100)
        if not (((var[3] == 0) and (var[61] < 40))):
            goto L3226
        # else: falls through here, rejoins L3226
        var[3] = (var[3] + 1)
        phase_table[25] = 10727  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2972
            case 1: goto L2976
            case 2: goto L2980
            case 7: goto L2984
            default: goto L2988
        phase_table[25] = 10728  # raw literal, not evaluated
        pass
        # --- L2976 ---
        phase_table[25] = 10763  # raw literal, not evaluated
        pass
        # --- L2980 ---
        phase_table[25] = 10790  # raw literal, not evaluated
        pass
        # --- L2984 ---
        phase_table[25] = 10829  # raw literal, not evaluated
        pass
        # --- L2988 ---
        phase_table[25] = 10857  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3002 ---
        phase_table[26] = 10910  # raw literal, not evaluated
        var[62] = random_below(4)
        if not (((random_below(1) != 7) and (var[62] >= 3))):
            goto L3015
        # else: falls through here, rejoins L3015
        var[62] = random_below(3)
        # --- L3015 ---
        switch(var[62]):
            case 0: goto L3018
            case 1: goto L3022
            case 3: goto L3026
            case 4: goto L3030
            case 5: goto L3034
            case 6: goto L3038
            case 7: goto L3042
            default: goto L3046
        phase_table[26] = 10911  # raw literal, not evaluated
        pass
        # --- L3022 ---
        phase_table[26] = 10915  # raw literal, not evaluated
        pass
        # --- L3026 ---
        phase_table[26] = 10926  # raw literal, not evaluated
        pass
        # --- L3030 ---
        phase_table[26] = 10947  # raw literal, not evaluated
        pass
        # --- L3034 ---
        phase_table[26] = 10974  # raw literal, not evaluated
        pass
        # --- L3038 ---
        phase_table[26] = 11005  # raw literal, not evaluated
        pass
        # --- L3042 ---
        phase_table[26] = 11034  # raw literal, not evaluated
        pass
        # --- L3046 ---
        phase_table[26] = 11064  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3066 ---
        phase_table[27] = 11079  # raw literal, not evaluated
        switch(3):
            case 1: goto L3072
            case 2: goto L3078
            case 3: goto L3084
            case 4: goto L3090
            case 5: goto L3096
            case 6: goto L3102
            case 7: goto L3108
            case 8: goto L3114
            case 9: goto L3120
            case 10: goto L3126
            case 11: goto L3132
            case 12: goto L3138
            case 13: goto L3142
            case 14: goto L3146
            case 512: goto L3150
            case 32: goto L3156
            case 64: goto L3162
            case 128: goto L3168
            case 256: goto L3174
            default: goto L3180
        phase_table[27] = 11080  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3078 ---
        phase_table[27] = 11107  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3084 ---
        phase_table[27] = 11133  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3090 ---
        phase_table[27] = 11163  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3096 ---
        phase_table[27] = 11187  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3102 ---
        phase_table[27] = 11212  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3108 ---
        phase_table[27] = 11266  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3114 ---
        phase_table[27] = 11290  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3120 ---
        phase_table[27] = 11345  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3126 ---
        phase_table[27] = 11390  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3132 ---
        phase_table[27] = 11441  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3138 ---
        phase_table[27] = 11524  # raw literal, not evaluated
        pass
        # --- L3142 ---
        phase_table[27] = 11588  # raw literal, not evaluated
        pass
        # --- L3146 ---
        phase_table[27] = 11642  # raw literal, not evaluated
        pass
        # --- L3150 ---
        phase_table[27] = 11714  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3156 ---
        phase_table[27] = 11748  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3162 ---
        phase_table[27] = 11787  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3168 ---
        phase_table[27] = 11826  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3174 ---
        phase_table[27] = 11867  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3180 ---
        phase_table[27] = 11907  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3224 ---
        system_message(11946 /*" þ"*/)
        # --- L3226 ---
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L3231 ---
        if not ((set_unit_behavior(7, 12) != 2)):
            goto L3510
        # else: falls through here, rejoins L3780
        move_unit(unit[12], priority=2, dest_type=0, dest_arg=0)
        var[64] = random_below(100)
        if not (((var[3] == 0) and (var[64] < 4))):
            goto L3510
        # else: falls through here, rejoins L3510
        var[3] = (var[3] + 1)
        phase_table[28] = 11964  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3256
            case 1: goto L3260
            case 2: goto L3264
            case 7: goto L3268
            default: goto L3272
        phase_table[28] = 11965  # raw literal, not evaluated
        pass
        # --- L3260 ---
        phase_table[28] = 12000  # raw literal, not evaluated
        pass
        # --- L3264 ---
        phase_table[28] = 12027  # raw literal, not evaluated
        pass
        # --- L3268 ---
        phase_table[28] = 12066  # raw literal, not evaluated
        pass
        # --- L3272 ---
        phase_table[28] = 12094  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3286 ---
        phase_table[29] = 12147  # raw literal, not evaluated
        var[65] = random_below(4)
        if not (((random_below(1) != 7) and (var[65] >= 3))):
            goto L3299
        # else: falls through here, rejoins L3299
        var[65] = random_below(3)
        # --- L3299 ---
        switch(var[65]):
            case 0: goto L3302
            case 1: goto L3306
            case 3: goto L3310
            case 4: goto L3314
            case 5: goto L3318
            case 6: goto L3322
            case 7: goto L3326
            default: goto L3330
        phase_table[29] = 12148  # raw literal, not evaluated
        pass
        # --- L3306 ---
        phase_table[29] = 12152  # raw literal, not evaluated
        pass
        # --- L3310 ---
        phase_table[29] = 12163  # raw literal, not evaluated
        pass
        # --- L3314 ---
        phase_table[29] = 12184  # raw literal, not evaluated
        pass
        # --- L3318 ---
        phase_table[29] = 12211  # raw literal, not evaluated
        pass
        # --- L3322 ---
        phase_table[29] = 12242  # raw literal, not evaluated
        pass
        # --- L3326 ---
        phase_table[29] = 12271  # raw literal, not evaluated
        pass
        # --- L3330 ---
        phase_table[29] = 12301  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3350 ---
        phase_table[30] = 12316  # raw literal, not evaluated
        switch(2):
            case 1: goto L3356
            case 2: goto L3362
            case 3: goto L3368
            case 4: goto L3374
            case 5: goto L3380
            case 6: goto L3386
            case 7: goto L3392
            case 8: goto L3398
            case 9: goto L3404
            case 10: goto L3410
            case 11: goto L3416
            case 12: goto L3422
            case 13: goto L3426
            case 14: goto L3430
            case 512: goto L3434
            case 32: goto L3440
            case 64: goto L3446
            case 128: goto L3452
            case 256: goto L3458
            default: goto L3464
        phase_table[30] = 12317  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3362 ---
        phase_table[30] = 12344  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3368 ---
        phase_table[30] = 12370  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3374 ---
        phase_table[30] = 12400  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3380 ---
        phase_table[30] = 12424  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3386 ---
        phase_table[30] = 12449  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3392 ---
        phase_table[30] = 12503  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3398 ---
        phase_table[30] = 12527  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3404 ---
        phase_table[30] = 12582  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3410 ---
        phase_table[30] = 12627  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3416 ---
        phase_table[30] = 12678  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3422 ---
        phase_table[30] = 12761  # raw literal, not evaluated
        pass
        # --- L3426 ---
        phase_table[30] = 12825  # raw literal, not evaluated
        pass
        # --- L3430 ---
        phase_table[30] = 12879  # raw literal, not evaluated
        pass
        # --- L3434 ---
        phase_table[30] = 12951  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3440 ---
        phase_table[30] = 12985  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3446 ---
        phase_table[30] = 13024  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3452 ---
        phase_table[30] = 13063  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3458 ---
        phase_table[30] = 13104  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3464 ---
        phase_table[30] = 13144  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3508 ---
        system_message(13183 /*" þ"*/)
        # --- L3510 ---
        var[67] = random_below(100)
        if not (((var[3] == 0) and (var[67] < 4))):
            goto L3780
        # else: falls through here, rejoins L3780
        var[3] = (var[3] + 1)
        phase_table[31] = 13201  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3526
            case 1: goto L3530
            case 2: goto L3534
            case 7: goto L3538
            default: goto L3542
        phase_table[31] = 13202  # raw literal, not evaluated
        pass
        # --- L3530 ---
        phase_table[31] = 13237  # raw literal, not evaluated
        pass
        # --- L3534 ---
        phase_table[31] = 13264  # raw literal, not evaluated
        pass
        # --- L3538 ---
        phase_table[31] = 13303  # raw literal, not evaluated
        pass
        # --- L3542 ---
        phase_table[31] = 13331  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3556 ---
        phase_table[32] = 13384  # raw literal, not evaluated
        var[68] = random_below(4)
        if not (((random_below(1) != 7) and (var[68] >= 3))):
            goto L3569
        # else: falls through here, rejoins L3569
        var[68] = random_below(3)
        # --- L3569 ---
        switch(var[68]):
            case 0: goto L3572
            case 1: goto L3576
            case 3: goto L3580
            case 4: goto L3584
            case 5: goto L3588
            case 6: goto L3592
            case 7: goto L3596
            default: goto L3600
        phase_table[32] = 13385  # raw literal, not evaluated
        pass
        # --- L3576 ---
        phase_table[32] = 13389  # raw literal, not evaluated
        pass
        # --- L3580 ---
        phase_table[32] = 13400  # raw literal, not evaluated
        pass
        # --- L3584 ---
        phase_table[32] = 13421  # raw literal, not evaluated
        pass
        # --- L3588 ---
        phase_table[32] = 13448  # raw literal, not evaluated
        pass
        # --- L3592 ---
        phase_table[32] = 13479  # raw literal, not evaluated
        pass
        # --- L3596 ---
        phase_table[32] = 13508  # raw literal, not evaluated
        pass
        # --- L3600 ---
        phase_table[32] = 13538  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3620 ---
        phase_table[33] = 13553  # raw literal, not evaluated
        switch(1):
            case 1: goto L3626
            case 2: goto L3632
            case 3: goto L3638
            case 4: goto L3644
            case 5: goto L3650
            case 6: goto L3656
            case 7: goto L3662
            case 8: goto L3668
            case 9: goto L3674
            case 10: goto L3680
            case 11: goto L3686
            case 12: goto L3692
            case 13: goto L3696
            case 14: goto L3700
            case 512: goto L3704
            case 32: goto L3710
            case 64: goto L3716
            case 128: goto L3722
            case 256: goto L3728
            default: goto L3734
        phase_table[33] = 13554  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3632 ---
        phase_table[33] = 13581  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3638 ---
        phase_table[33] = 13607  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3644 ---
        phase_table[33] = 13637  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3650 ---
        phase_table[33] = 13661  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3656 ---
        phase_table[33] = 13686  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3662 ---
        phase_table[33] = 13740  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3668 ---
        phase_table[33] = 13764  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3674 ---
        phase_table[33] = 13819  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3680 ---
        phase_table[33] = 13864  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3686 ---
        phase_table[33] = 13915  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3692 ---
        phase_table[33] = 13998  # raw literal, not evaluated
        pass
        # --- L3696 ---
        phase_table[33] = 14062  # raw literal, not evaluated
        pass
        # --- L3700 ---
        phase_table[33] = 14116  # raw literal, not evaluated
        pass
        # --- L3704 ---
        phase_table[33] = 14188  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3710 ---
        phase_table[33] = 14222  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3716 ---
        phase_table[33] = 14261  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3722 ---
        phase_table[33] = 14300  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3728 ---
        phase_table[33] = 14341  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3734 ---
        phase_table[33] = 14381  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3778 ---
        system_message(14420 /*" þ"*/)
        # --- L3780 ---
        pass
        # --- L3781 ---
        if not (((var[34] & 512) > 0)):
            goto L4060
        # else: falls through here, rejoins L4339
        var[70] = random_below(100)
        if not (((var[3] == 0) and (var[70] < 4))):
            goto L4055
        # else: falls through here, rejoins L4055
        var[3] = (var[3] + 1)
        phase_table[34] = 14438  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3801
            case 1: goto L3805
            case 2: goto L3809
            case 7: goto L3813
            default: goto L3817
        phase_table[34] = 14439  # raw literal, not evaluated
        pass
        # --- L3805 ---
        phase_table[34] = 14474  # raw literal, not evaluated
        pass
        # --- L3809 ---
        phase_table[34] = 14501  # raw literal, not evaluated
        pass
        # --- L3813 ---
        phase_table[34] = 14540  # raw literal, not evaluated
        pass
        # --- L3817 ---
        phase_table[34] = 14568  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3831 ---
        phase_table[35] = 14621  # raw literal, not evaluated
        var[71] = random_below(4)
        if not (((random_below(1) != 7) and (var[71] >= 3))):
            goto L3844
        # else: falls through here, rejoins L3844
        var[71] = random_below(3)
        # --- L3844 ---
        switch(var[71]):
            case 0: goto L3847
            case 1: goto L3851
            case 3: goto L3855
            case 4: goto L3859
            case 5: goto L3863
            case 6: goto L3867
            case 7: goto L3871
            default: goto L3875
        phase_table[35] = 14622  # raw literal, not evaluated
        pass
        # --- L3851 ---
        phase_table[35] = 14626  # raw literal, not evaluated
        pass
        # --- L3855 ---
        phase_table[35] = 14637  # raw literal, not evaluated
        pass
        # --- L3859 ---
        phase_table[35] = 14658  # raw literal, not evaluated
        pass
        # --- L3863 ---
        phase_table[35] = 14685  # raw literal, not evaluated
        pass
        # --- L3867 ---
        phase_table[35] = 14716  # raw literal, not evaluated
        pass
        # --- L3871 ---
        phase_table[35] = 14745  # raw literal, not evaluated
        pass
        # --- L3875 ---
        phase_table[35] = 14775  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3895 ---
        phase_table[36] = 14790  # raw literal, not evaluated
        switch(4):
            case 1: goto L3901
            case 2: goto L3907
            case 3: goto L3913
            case 4: goto L3919
            case 5: goto L3925
            case 6: goto L3931
            case 7: goto L3937
            case 8: goto L3943
            case 9: goto L3949
            case 10: goto L3955
            case 11: goto L3961
            case 12: goto L3967
            case 13: goto L3971
            case 14: goto L3975
            case 512: goto L3979
            case 32: goto L3985
            case 64: goto L3991
            case 128: goto L3997
            case 256: goto L4003
            default: goto L4009
        phase_table[36] = 14791  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3907 ---
        phase_table[36] = 14818  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3913 ---
        phase_table[36] = 14844  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3919 ---
        phase_table[36] = 14874  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3925 ---
        phase_table[36] = 14898  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3931 ---
        phase_table[36] = 14923  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3937 ---
        phase_table[36] = 14977  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3943 ---
        phase_table[36] = 15001  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3949 ---
        phase_table[36] = 15056  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3955 ---
        phase_table[36] = 15101  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3961 ---
        phase_table[36] = 15152  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3967 ---
        phase_table[36] = 15235  # raw literal, not evaluated
        pass
        # --- L3971 ---
        phase_table[36] = 15299  # raw literal, not evaluated
        pass
        # --- L3975 ---
        phase_table[36] = 15353  # raw literal, not evaluated
        pass
        # --- L3979 ---
        phase_table[36] = 15425  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3985 ---
        phase_table[36] = 15459  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3991 ---
        phase_table[36] = 15498  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3997 ---
        phase_table[36] = 15537  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4003 ---
        phase_table[36] = 15578  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4009 ---
        phase_table[36] = 15618  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4053 ---
        system_message(15657 /*" þ\""*/)
        # --- L4055 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4060 ---
        if not (((var[34] & 128) > 0)):
            goto L4339
        # else: falls through here, rejoins L4339
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=4)
        var[73] = random_below(100)
        if not (((var[3] == 0) and (var[73] < 4))):
            goto L4339
        # else: falls through here, rejoins L4339
        var[3] = (var[3] + 1)
        phase_table[37] = 15675  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4085
            case 1: goto L4089
            case 2: goto L4093
            case 7: goto L4097
            default: goto L4101
        phase_table[37] = 15676  # raw literal, not evaluated
        pass
        # --- L4089 ---
        phase_table[37] = 15711  # raw literal, not evaluated
        pass
        # --- L4093 ---
        phase_table[37] = 15738  # raw literal, not evaluated
        pass
        # --- L4097 ---
        phase_table[37] = 15777  # raw literal, not evaluated
        pass
        # --- L4101 ---
        phase_table[37] = 15805  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4115 ---
        phase_table[38] = 15858  # raw literal, not evaluated
        var[74] = random_below(4)
        if not (((random_below(1) != 7) and (var[74] >= 3))):
            goto L4128
        # else: falls through here, rejoins L4128
        var[74] = random_below(3)
        # --- L4128 ---
        switch(var[74]):
            case 0: goto L4131
            case 1: goto L4135
            case 3: goto L4139
            case 4: goto L4143
            case 5: goto L4147
            case 6: goto L4151
            case 7: goto L4155
            default: goto L4159
        phase_table[38] = 15859  # raw literal, not evaluated
        pass
        # --- L4135 ---
        phase_table[38] = 15863  # raw literal, not evaluated
        pass
        # --- L4139 ---
        phase_table[38] = 15874  # raw literal, not evaluated
        pass
        # --- L4143 ---
        phase_table[38] = 15895  # raw literal, not evaluated
        pass
        # --- L4147 ---
        phase_table[38] = 15922  # raw literal, not evaluated
        pass
        # --- L4151 ---
        phase_table[38] = 15953  # raw literal, not evaluated
        pass
        # --- L4155 ---
        phase_table[38] = 15982  # raw literal, not evaluated
        pass
        # --- L4159 ---
        phase_table[38] = 16012  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4179 ---
        phase_table[39] = 16027  # raw literal, not evaluated
        switch(5):
            case 1: goto L4185
            case 2: goto L4191
            case 3: goto L4197
            case 4: goto L4203
            case 5: goto L4209
            case 6: goto L4215
            case 7: goto L4221
            case 8: goto L4227
            case 9: goto L4233
            case 10: goto L4239
            case 11: goto L4245
            case 12: goto L4251
            case 13: goto L4255
            case 14: goto L4259
            case 512: goto L4263
            case 32: goto L4269
            case 64: goto L4275
            case 128: goto L4281
            case 256: goto L4287
            default: goto L4293
        phase_table[39] = 16028  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4191 ---
        phase_table[39] = 16055  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4197 ---
        phase_table[39] = 16081  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4203 ---
        phase_table[39] = 16111  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4209 ---
        phase_table[39] = 16135  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4215 ---
        phase_table[39] = 16160  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4221 ---
        phase_table[39] = 16214  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4227 ---
        phase_table[39] = 16238  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4233 ---
        phase_table[39] = 16293  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4239 ---
        phase_table[39] = 16338  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4245 ---
        phase_table[39] = 16389  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4251 ---
        phase_table[39] = 16472  # raw literal, not evaluated
        pass
        # --- L4255 ---
        phase_table[39] = 16536  # raw literal, not evaluated
        pass
        # --- L4259 ---
        phase_table[39] = 16590  # raw literal, not evaluated
        pass
        # --- L4263 ---
        phase_table[39] = 16662  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4269 ---
        phase_table[39] = 16696  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4275 ---
        phase_table[39] = 16735  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4281 ---
        phase_table[39] = 16774  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4287 ---
        phase_table[39] = 16815  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4293 ---
        phase_table[39] = 16855  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4337 ---
        system_message(16894 /*" þ%"*/)
        # --- L4339 ---
        pass
        # --- L4340 ---
        if not (((var[34] & 512) > 0)):
            goto L4349
        # else: falls through here, rejoins L4349
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4349 ---
        pass
        # --- L4350 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L4353
            case 64: goto L4359
            case 128: goto L4365
            case 256: goto L4371
            default: goto L4377
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L4359 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L4365 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L4371 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=5)
        pass
        # --- L4377 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4394 ---
        pass
        # --- L4395 ---
        if not ((var[53] > 0)):
            goto L4674
        # else: falls through here, rejoins L4679
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        var[76] = random_below(100)
        if not (((var[3] == 0) and (var[76] < 4))):
            goto L4674
        # else: falls through here, rejoins L4674
        var[3] = (var[3] + 1)
        phase_table[40] = 16912  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4420
            case 1: goto L4424
            case 2: goto L4428
            case 7: goto L4432
            default: goto L4436
        phase_table[40] = 16913  # raw literal, not evaluated
        pass
        # --- L4424 ---
        phase_table[40] = 16948  # raw literal, not evaluated
        pass
        # --- L4428 ---
        phase_table[40] = 16975  # raw literal, not evaluated
        pass
        # --- L4432 ---
        phase_table[40] = 17014  # raw literal, not evaluated
        pass
        # --- L4436 ---
        phase_table[40] = 17042  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4450 ---
        phase_table[41] = 17095  # raw literal, not evaluated
        var[77] = random_below(4)
        if not (((random_below(1) != 7) and (var[77] >= 3))):
            goto L4463
        # else: falls through here, rejoins L4463
        var[77] = random_below(3)
        # --- L4463 ---
        switch(var[77]):
            case 0: goto L4466
            case 1: goto L4470
            case 3: goto L4474
            case 4: goto L4478
            case 5: goto L4482
            case 6: goto L4486
            case 7: goto L4490
            default: goto L4494
        phase_table[41] = 17096  # raw literal, not evaluated
        pass
        # --- L4470 ---
        phase_table[41] = 17100  # raw literal, not evaluated
        pass
        # --- L4474 ---
        phase_table[41] = 17111  # raw literal, not evaluated
        pass
        # --- L4478 ---
        phase_table[41] = 17132  # raw literal, not evaluated
        pass
        # --- L4482 ---
        phase_table[41] = 17159  # raw literal, not evaluated
        pass
        # --- L4486 ---
        phase_table[41] = 17190  # raw literal, not evaluated
        pass
        # --- L4490 ---
        phase_table[41] = 17219  # raw literal, not evaluated
        pass
        # --- L4494 ---
        phase_table[41] = 17249  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4514 ---
        phase_table[42] = 17264  # raw literal, not evaluated
        switch(6):
            case 1: goto L4520
            case 2: goto L4526
            case 3: goto L4532
            case 4: goto L4538
            case 5: goto L4544
            case 6: goto L4550
            case 7: goto L4556
            case 8: goto L4562
            case 9: goto L4568
            case 10: goto L4574
            case 11: goto L4580
            case 12: goto L4586
            case 13: goto L4590
            case 14: goto L4594
            case 512: goto L4598
            case 32: goto L4604
            case 64: goto L4610
            case 128: goto L4616
            case 256: goto L4622
            default: goto L4628
        phase_table[42] = 17265  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4526 ---
        phase_table[42] = 17292  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4532 ---
        phase_table[42] = 17318  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4538 ---
        phase_table[42] = 17348  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4544 ---
        phase_table[42] = 17372  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4550 ---
        phase_table[42] = 17397  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4556 ---
        phase_table[42] = 17451  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4562 ---
        phase_table[42] = 17475  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4568 ---
        phase_table[42] = 17530  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4574 ---
        phase_table[42] = 17575  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4580 ---
        phase_table[42] = 17626  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4586 ---
        phase_table[42] = 17709  # raw literal, not evaluated
        pass
        # --- L4590 ---
        phase_table[42] = 17773  # raw literal, not evaluated
        pass
        # --- L4594 ---
        phase_table[42] = 17827  # raw literal, not evaluated
        pass
        # --- L4598 ---
        phase_table[42] = 17899  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4604 ---
        phase_table[42] = 17933  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4610 ---
        phase_table[42] = 17972  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4616 ---
        phase_table[42] = 18011  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4622 ---
        phase_table[42] = 18052  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4628 ---
        phase_table[42] = 18092  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4672 ---
        system_message(18131 /*" þ("*/)
        # --- L4674 ---
        move_unit(unit[12], priority=0, dest_type=0, dest_arg=0)
        # --- L4679 ---
        pass
        # --- L4680 ---
        if not ((set_unit_behavior(7, 12) != 3)):
            goto L4689
        # else: falls through here, rejoins L4689
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4689 ---
        pass
        # --- L4690 ---
        if not ((((var[34] & 7136) == 0) and (var[53] == 0))):
            goto L5063
        # else: falls through here, rejoins L5087
        var[79] = random_below(100)
        if not (((var[3] == 0) and (var[79] < 4))):
            goto L4964
        # else: falls through here, rejoins L4964
        var[3] = (var[3] + 1)
        phase_table[43] = 18149  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4710
            case 1: goto L4714
            case 2: goto L4718
            case 7: goto L4722
            default: goto L4726
        phase_table[43] = 18150  # raw literal, not evaluated
        pass
        # --- L4714 ---
        phase_table[43] = 18185  # raw literal, not evaluated
        pass
        # --- L4718 ---
        phase_table[43] = 18212  # raw literal, not evaluated
        pass
        # --- L4722 ---
        phase_table[43] = 18251  # raw literal, not evaluated
        pass
        # --- L4726 ---
        phase_table[43] = 18279  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4740 ---
        phase_table[44] = 18332  # raw literal, not evaluated
        var[80] = random_below(4)
        if not (((random_below(1) != 7) and (var[80] >= 3))):
            goto L4753
        # else: falls through here, rejoins L4753
        var[80] = random_below(3)
        # --- L4753 ---
        switch(var[80]):
            case 0: goto L4756
            case 1: goto L4760
            case 3: goto L4764
            case 4: goto L4768
            case 5: goto L4772
            case 6: goto L4776
            case 7: goto L4780
            default: goto L4784
        phase_table[44] = 18333  # raw literal, not evaluated
        pass
        # --- L4760 ---
        phase_table[44] = 18337  # raw literal, not evaluated
        pass
        # --- L4764 ---
        phase_table[44] = 18348  # raw literal, not evaluated
        pass
        # --- L4768 ---
        phase_table[44] = 18369  # raw literal, not evaluated
        pass
        # --- L4772 ---
        phase_table[44] = 18396  # raw literal, not evaluated
        pass
        # --- L4776 ---
        phase_table[44] = 18427  # raw literal, not evaluated
        pass
        # --- L4780 ---
        phase_table[44] = 18456  # raw literal, not evaluated
        pass
        # --- L4784 ---
        phase_table[44] = 18486  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4804 ---
        phase_table[45] = 18501  # raw literal, not evaluated
        switch(7):
            case 1: goto L4810
            case 2: goto L4816
            case 3: goto L4822
            case 4: goto L4828
            case 5: goto L4834
            case 6: goto L4840
            case 7: goto L4846
            case 8: goto L4852
            case 9: goto L4858
            case 10: goto L4864
            case 11: goto L4870
            case 12: goto L4876
            case 13: goto L4880
            case 14: goto L4884
            case 512: goto L4888
            case 32: goto L4894
            case 64: goto L4900
            case 128: goto L4906
            case 256: goto L4912
            default: goto L4918
        phase_table[45] = 18502  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4816 ---
        phase_table[45] = 18529  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4822 ---
        phase_table[45] = 18555  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4828 ---
        phase_table[45] = 18585  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4834 ---
        phase_table[45] = 18609  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4840 ---
        phase_table[45] = 18634  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4846 ---
        phase_table[45] = 18688  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4852 ---
        phase_table[45] = 18712  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4858 ---
        phase_table[45] = 18767  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4864 ---
        phase_table[45] = 18812  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4870 ---
        phase_table[45] = 18863  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4876 ---
        phase_table[45] = 18946  # raw literal, not evaluated
        pass
        # --- L4880 ---
        phase_table[45] = 19010  # raw literal, not evaluated
        pass
        # --- L4884 ---
        phase_table[45] = 19064  # raw literal, not evaluated
        pass
        # --- L4888 ---
        phase_table[45] = 19136  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4894 ---
        phase_table[45] = 19170  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4900 ---
        phase_table[45] = 19209  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4906 ---
        phase_table[45] = 19248  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4912 ---
        phase_table[45] = 19289  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4918 ---
        phase_table[45] = 19329  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4962 ---
        system_message(19368 /*" þ+"*/)
        # --- L4964 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L4967
            case 64: goto L4985
            case 128: goto L5003
            case 256: goto L5021
            default: goto L5039
        if not (group_condition_ref(2, 12)):
            goto L4975
        # else: falls through here, rejoins L4975
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4975 ---
        condition[2] = Condition(var_ref=2, expr_offset=3673)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L4985 ---
        if not (group_condition_ref(3, 12)):
            goto L4993
        # else: falls through here, rejoins L4993
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4993 ---
        condition[3] = Condition(var_ref=3, expr_offset=3694)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5003 ---
        if not (group_condition_ref(4, 12)):
            goto L5011
        # else: falls through here, rejoins L5011
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5011 ---
        condition[4] = Condition(var_ref=4, expr_offset=3715)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5021 ---
        if not (group_condition_ref(5, 12)):
            goto L5029
        # else: falls through here, rejoins L5029
        hex[5] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5029 ---
        condition[5] = Condition(var_ref=5, expr_offset=3736)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=5)
        pass
        # --- L5039 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5056 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L5063
        # else: falls through here, rejoins L5063
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L5063 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L5078
        # else: falls through here, rejoins L5087
        timer[1] = current_turn + 2
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[57], dest_type=0, dest_arg=0)
        # --- L5078 ---
        if not (timer_expired(1)):
            goto L5087
        # else: falls through here, rejoins L5087
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L5087 ---
        pass
        # --- L5088 ---
        pass
        # --- L5089 ---
        if not ((set_unit_behavior(7, 12) != 4)):
            goto L5368
        # else: falls through here, rejoins L5383
        var[82] = random_below(100)
        if not (((var[3] == 0) and (var[82] < 4))):
            goto L5363
        # else: falls through here, rejoins L5363
        var[3] = (var[3] + 1)
        phase_table[46] = 19386  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5109
            case 1: goto L5113
            case 2: goto L5117
            case 7: goto L5121
            default: goto L5125
        phase_table[46] = 19387  # raw literal, not evaluated
        pass
        # --- L5113 ---
        phase_table[46] = 19422  # raw literal, not evaluated
        pass
        # --- L5117 ---
        phase_table[46] = 19449  # raw literal, not evaluated
        pass
        # --- L5121 ---
        phase_table[46] = 19488  # raw literal, not evaluated
        pass
        # --- L5125 ---
        phase_table[46] = 19516  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5139 ---
        phase_table[47] = 19569  # raw literal, not evaluated
        var[83] = random_below(4)
        if not (((random_below(1) != 7) and (var[83] >= 3))):
            goto L5152
        # else: falls through here, rejoins L5152
        var[83] = random_below(3)
        # --- L5152 ---
        switch(var[83]):
            case 0: goto L5155
            case 1: goto L5159
            case 3: goto L5163
            case 4: goto L5167
            case 5: goto L5171
            case 6: goto L5175
            case 7: goto L5179
            default: goto L5183
        phase_table[47] = 19570  # raw literal, not evaluated
        pass
        # --- L5159 ---
        phase_table[47] = 19574  # raw literal, not evaluated
        pass
        # --- L5163 ---
        phase_table[47] = 19585  # raw literal, not evaluated
        pass
        # --- L5167 ---
        phase_table[47] = 19606  # raw literal, not evaluated
        pass
        # --- L5171 ---
        phase_table[47] = 19633  # raw literal, not evaluated
        pass
        # --- L5175 ---
        phase_table[47] = 19664  # raw literal, not evaluated
        pass
        # --- L5179 ---
        phase_table[47] = 19693  # raw literal, not evaluated
        pass
        # --- L5183 ---
        phase_table[47] = 19723  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5203 ---
        phase_table[48] = 19738  # raw literal, not evaluated
        switch(9):
            case 1: goto L5209
            case 2: goto L5215
            case 3: goto L5221
            case 4: goto L5227
            case 5: goto L5233
            case 6: goto L5239
            case 7: goto L5245
            case 8: goto L5251
            case 9: goto L5257
            case 10: goto L5263
            case 11: goto L5269
            case 12: goto L5275
            case 13: goto L5279
            case 14: goto L5283
            case 512: goto L5287
            case 32: goto L5293
            case 64: goto L5299
            case 128: goto L5305
            case 256: goto L5311
            default: goto L5317
        phase_table[48] = 19739  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5215 ---
        phase_table[48] = 19766  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5221 ---
        phase_table[48] = 19792  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5227 ---
        phase_table[48] = 19822  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5233 ---
        phase_table[48] = 19846  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5239 ---
        phase_table[48] = 19871  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5245 ---
        phase_table[48] = 19925  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5251 ---
        phase_table[48] = 19949  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5257 ---
        phase_table[48] = 20004  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5263 ---
        phase_table[48] = 20049  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5269 ---
        phase_table[48] = 20100  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5275 ---
        phase_table[48] = 20183  # raw literal, not evaluated
        pass
        # --- L5279 ---
        phase_table[48] = 20247  # raw literal, not evaluated
        pass
        # --- L5283 ---
        phase_table[48] = 20301  # raw literal, not evaluated
        pass
        # --- L5287 ---
        phase_table[48] = 20373  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5293 ---
        phase_table[48] = 20407  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5299 ---
        phase_table[48] = 20446  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5305 ---
        phase_table[48] = 20485  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5311 ---
        phase_table[48] = 20526  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5317 ---
        phase_table[48] = 20566  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5361 ---
        system_message(20605 /*" þ."*/)
        # --- L5363 ---
        move_unit(unit[12], priority=4, dest_type=3, dest_arg=2)
        # --- L5368 ---
        var[85] = set_unit_behavior(10, 12)
        unit[14] = var[85]
        if not (group_condition(14)):
            goto L5383
        # else: falls through here, rejoins L5383
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L5383 ---
        pass
        # --- L5384 ---
        pass
        # --- L5385 ---
        if not ((((var[34] & 7136) == 0) & (var[53] == 0))):
            goto L5758
        # else: falls through here, rejoins L5770
        var[86] = random_below(100)
        if not (((var[3] == 0) and (var[86] < 4))):
            goto L5659
        # else: falls through here, rejoins L5659
        var[3] = (var[3] + 1)
        phase_table[49] = 20623  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5405
            case 1: goto L5409
            case 2: goto L5413
            case 7: goto L5417
            default: goto L5421
        phase_table[49] = 20624  # raw literal, not evaluated
        pass
        # --- L5409 ---
        phase_table[49] = 20659  # raw literal, not evaluated
        pass
        # --- L5413 ---
        phase_table[49] = 20686  # raw literal, not evaluated
        pass
        # --- L5417 ---
        phase_table[49] = 20725  # raw literal, not evaluated
        pass
        # --- L5421 ---
        phase_table[49] = 20753  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5435 ---
        phase_table[50] = 20806  # raw literal, not evaluated
        var[87] = random_below(4)
        if not (((random_below(1) != 7) and (var[87] >= 3))):
            goto L5448
        # else: falls through here, rejoins L5448
        var[87] = random_below(3)
        # --- L5448 ---
        switch(var[87]):
            case 0: goto L5451
            case 1: goto L5455
            case 3: goto L5459
            case 4: goto L5463
            case 5: goto L5467
            case 6: goto L5471
            case 7: goto L5475
            default: goto L5479
        phase_table[50] = 20807  # raw literal, not evaluated
        pass
        # --- L5455 ---
        phase_table[50] = 20811  # raw literal, not evaluated
        pass
        # --- L5459 ---
        phase_table[50] = 20822  # raw literal, not evaluated
        pass
        # --- L5463 ---
        phase_table[50] = 20843  # raw literal, not evaluated
        pass
        # --- L5467 ---
        phase_table[50] = 20870  # raw literal, not evaluated
        pass
        # --- L5471 ---
        phase_table[50] = 20901  # raw literal, not evaluated
        pass
        # --- L5475 ---
        phase_table[50] = 20930  # raw literal, not evaluated
        pass
        # --- L5479 ---
        phase_table[50] = 20960  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5499 ---
        phase_table[51] = 20975  # raw literal, not evaluated
        switch(7):
            case 1: goto L5505
            case 2: goto L5511
            case 3: goto L5517
            case 4: goto L5523
            case 5: goto L5529
            case 6: goto L5535
            case 7: goto L5541
            case 8: goto L5547
            case 9: goto L5553
            case 10: goto L5559
            case 11: goto L5565
            case 12: goto L5571
            case 13: goto L5575
            case 14: goto L5579
            case 512: goto L5583
            case 32: goto L5589
            case 64: goto L5595
            case 128: goto L5601
            case 256: goto L5607
            default: goto L5613
        phase_table[51] = 20976  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5511 ---
        phase_table[51] = 21003  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5517 ---
        phase_table[51] = 21029  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5523 ---
        phase_table[51] = 21059  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5529 ---
        phase_table[51] = 21083  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5535 ---
        phase_table[51] = 21108  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5541 ---
        phase_table[51] = 21162  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5547 ---
        phase_table[51] = 21186  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5553 ---
        phase_table[51] = 21241  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5559 ---
        phase_table[51] = 21286  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5565 ---
        phase_table[51] = 21337  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5571 ---
        phase_table[51] = 21420  # raw literal, not evaluated
        pass
        # --- L5575 ---
        phase_table[51] = 21484  # raw literal, not evaluated
        pass
        # --- L5579 ---
        phase_table[51] = 21538  # raw literal, not evaluated
        pass
        # --- L5583 ---
        phase_table[51] = 21610  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5589 ---
        phase_table[51] = 21644  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5595 ---
        phase_table[51] = 21683  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5601 ---
        phase_table[51] = 21722  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5607 ---
        phase_table[51] = 21763  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5613 ---
        phase_table[51] = 21803  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5657 ---
        system_message(21842 /*" þ1"*/)
        # --- L5659 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L5662
            case 64: goto L5680
            case 128: goto L5698
            case 256: goto L5716
            default: goto L5734
        if not (group_condition_ref(2, 12)):
            goto L5670
        # else: falls through here, rejoins L5670
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5670 ---
        condition[2] = Condition(var_ref=2, expr_offset=4169)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L5680 ---
        if not (group_condition_ref(3, 12)):
            goto L5688
        # else: falls through here, rejoins L5688
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5688 ---
        condition[3] = Condition(var_ref=3, expr_offset=4190)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5698 ---
        if not (group_condition_ref(4, 12)):
            goto L5706
        # else: falls through here, rejoins L5706
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5706 ---
        condition[4] = Condition(var_ref=4, expr_offset=4211)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5716 ---
        if not (group_condition_ref(5, 12)):
            goto L5724
        # else: falls through here, rejoins L5724
        hex[5] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5724 ---
        condition[5] = Condition(var_ref=5, expr_offset=4232)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=5)
        pass
        # --- L5734 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5751 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L5758
        # else: falls through here, rejoins L5758
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L5758 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L5770
        # else: falls through here, rejoins L5770
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[57], dest_type=0, dest_arg=0)
        # --- L5770 ---
        pass
        # --- L5771 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L5799 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5564] - dead end, not decoded further (other branches continue independently)
        # --- L5806 ---
        var[7] = (var[7] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5583] - dead end, not decoded further (other branches continue independently)
        # --- L6010 ---
        if (timer_expired(3) and (var[5] > 0)) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L6016
        system_message(22296 /*"Attack on human installation has commenced. Encountering human infestation. Requisitioning all nearby units from defense pool."*/)
        # --- L6016 ---
        if (((any_group_alive(1) or group_condition(2)) or any_group_alive(2)) or (not all_group_alive(1))) and not flag[3]:
            flag[3] = True
            ...  # run block below, converges at L6021
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6021 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            var[96] = ((var[9] and (not any_group_alive(1))) and (not group_condition(2)))
            pass  # message no-op
            # [UNKNOWN OPCODE 0x5797] - dead end, not decoded further (other branches continue independently)
```
