# SIT901.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = 3
var[6] = 0
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[4] == 0)):
        goto L14
    # else: falls through here, rejoins L14
    var[4] = (random_below(var[17]) + var[18])
    # --- L14 ---
    set_unit_objective(unit=1, state=2)
    var[10] = stat(9)
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00b7] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[12] = 0
        if not (timer_expired(2)):
            goto L4087
        # else: falls through here, rejoins L4087
        timer[2] = current_turn + 1
        var[3] = 0
        if not (group_all_alive(4)):
            goto L570
        # else: falls through here, rejoins L570
        var[42] = 0
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 6):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L865
        # --- L579 ---
        if not ((set_unit_behavior(9, 6) > 0)):
            goto L860
        # else: falls through here, rejoins L860
        var[43] = random_below(100)
        if not (((var[3] == 0) and (var[43] < 4))):
            goto L853
        # else: falls through here, rejoins L853
        var[3] = (var[3] + 1)
        phase_table[4] = 1562  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L599
            case 1: goto L603
            case 2: goto L607
            case 7: goto L611
            default: goto L615
        phase_table[4] = 1563  # raw literal, not evaluated
        pass
        # --- L603 ---
        phase_table[4] = 1598  # raw literal, not evaluated
        pass
        # --- L607 ---
        phase_table[4] = 1625  # raw literal, not evaluated
        pass
        # --- L611 ---
        phase_table[4] = 1664  # raw literal, not evaluated
        pass
        # --- L615 ---
        phase_table[4] = 1692  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L629 ---
        phase_table[5] = 1745  # raw literal, not evaluated
        var[44] = random_below(1)
        if not (((random_below(4) != 7) and (var[44] >= 3))):
            goto L642
        # else: falls through here, rejoins L642
        var[44] = random_below(3)
        # --- L642 ---
        switch(var[44]):
            case 0: goto L645
            case 1: goto L649
            case 3: goto L653
            case 4: goto L657
            case 5: goto L661
            case 6: goto L665
            case 7: goto L669
            default: goto L673
        phase_table[5] = 1746  # raw literal, not evaluated
        pass
        # --- L649 ---
        phase_table[5] = 1750  # raw literal, not evaluated
        pass
        # --- L653 ---
        phase_table[5] = 1761  # raw literal, not evaluated
        pass
        # --- L657 ---
        phase_table[5] = 1782  # raw literal, not evaluated
        pass
        # --- L661 ---
        phase_table[5] = 1809  # raw literal, not evaluated
        pass
        # --- L665 ---
        phase_table[5] = 1840  # raw literal, not evaluated
        pass
        # --- L669 ---
        phase_table[5] = 1869  # raw literal, not evaluated
        pass
        # --- L673 ---
        phase_table[5] = 1899  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L693 ---
        phase_table[6] = 1914  # raw literal, not evaluated
        switch(10):
            case 1: goto L699
            case 2: goto L705
            case 3: goto L711
            case 4: goto L717
            case 5: goto L723
            case 6: goto L729
            case 7: goto L735
            case 8: goto L741
            case 9: goto L747
            case 10: goto L753
            case 11: goto L759
            case 12: goto L765
            case 13: goto L769
            case 14: goto L773
            case 512: goto L777
            case 32: goto L783
            case 64: goto L789
            case 128: goto L795
            case 256: goto L801
            default: goto L807
        phase_table[6] = 1915  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L705 ---
        phase_table[6] = 1942  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L711 ---
        phase_table[6] = 1968  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L717 ---
        phase_table[6] = 1998  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L723 ---
        phase_table[6] = 2022  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L729 ---
        phase_table[6] = 2047  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L735 ---
        phase_table[6] = 2101  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L741 ---
        phase_table[6] = 2125  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L747 ---
        phase_table[6] = 2180  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L753 ---
        phase_table[6] = 2225  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L759 ---
        phase_table[6] = 2276  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L765 ---
        phase_table[6] = 2359  # raw literal, not evaluated
        pass
        # --- L769 ---
        phase_table[6] = 2423  # raw literal, not evaluated
        pass
        # --- L773 ---
        phase_table[6] = 2477  # raw literal, not evaluated
        pass
        # --- L777 ---
        phase_table[6] = 2549  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L783 ---
        phase_table[6] = 2583  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L789 ---
        phase_table[6] = 2622  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L795 ---
        phase_table[6] = 2661  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L801 ---
        phase_table[6] = 2702  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L807 ---
        phase_table[6] = 2742  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L851 ---
        system_message(2781 /*" þ"*/)
        # --- L853 ---
        if not (((set_unit_behavior(8, 6) & var[16]) == 0)):
            goto L860
        # else: falls through here, rejoins L860
        var[16] = (var[16] + (set_unit_behavior(8, 6) & 7136))
        # --- L860 ---
        unit[6] = next_unit_in_group(unit[6], group=2)
        goto L579
        # --- L865 ---
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L899
        # --- L871 ---
        if not (group_condition_ref_2(7, 2)):
            goto L878
        # else: falls through here, rejoins L885
        unit[1].attr8 = 2
        # --- L878 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L885
        # else: falls through here, rejoins L885
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L885 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L894
        # else: falls through here, rejoins L894
        var[42] = (var[42] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0aef] - dead end, not decoded further (other branches continue independently)
        # --- L894 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L871
        # --- L899 ---
        if not (group_condition_ref_2(8, 2)):
            goto L906
        # else: falls through here, rejoins L913
        unit[1].attr8 = 2
        # --- L906 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L913
        # else: falls through here, rejoins L913
        unit[1].attr8 = (set_unit_behavior(8, 1) - 1)
        # --- L913 ---
        if not ((set_unit_behavior(8, 1) > 0)):
            goto L922
        # else: falls through here, rejoins L922
        var[42] = (var[42] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0b02] - dead end, not decoded further (other branches continue independently)
        # --- L922 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        var[46] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 6):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4087
        if not ((set_unit_behavior(5, 6) < 60)):
            goto L943
        # else: falls through here, rejoins L4080
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        # --- L943 ---
        switch((set_unit_behavior(8, 6) & 15)):
            case 0: goto L946
            case 1: goto L1229
            case 2: goto L2062
            case 3: goto L2621
            case 4: goto L2631
            case 5: goto L2676
            case 10: goto L2961
            case 11: goto L2971
            case 12: goto L3369
            case 13: goto L3370
            case 14: goto L3665
            case 15: goto L3666
            default: goto L4052
        if not (((set_unit_behavior(8, 6) & 1024) == 0)):
            goto L1228
        # else: falls through here, rejoins L1228
        var[47] = random_below(100)
        if not (((var[3] == 0) and (var[47] < 40))):
            goto L1220
        # else: falls through here, rejoins L1220
        var[3] = (var[3] + 1)
        phase_table[7] = 2837  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L966
            case 1: goto L970
            case 2: goto L974
            case 7: goto L978
            default: goto L982
        phase_table[7] = 2838  # raw literal, not evaluated
        pass
        # --- L970 ---
        phase_table[7] = 2873  # raw literal, not evaluated
        pass
        # --- L974 ---
        phase_table[7] = 2900  # raw literal, not evaluated
        pass
        # --- L978 ---
        phase_table[7] = 2939  # raw literal, not evaluated
        pass
        # --- L982 ---
        phase_table[7] = 2967  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L996 ---
        phase_table[8] = 3020  # raw literal, not evaluated
        var[48] = random_below(4)
        if not (((random_below(1) != 7) and (var[48] >= 3))):
            goto L1009
        # else: falls through here, rejoins L1009
        var[48] = random_below(3)
        # --- L1009 ---
        switch(var[48]):
            case 0: goto L1012
            case 1: goto L1016
            case 3: goto L1020
            case 4: goto L1024
            case 5: goto L1028
            case 6: goto L1032
            case 7: goto L1036
            default: goto L1040
        phase_table[8] = 3021  # raw literal, not evaluated
        pass
        # --- L1016 ---
        phase_table[8] = 3025  # raw literal, not evaluated
        pass
        # --- L1020 ---
        phase_table[8] = 3036  # raw literal, not evaluated
        pass
        # --- L1024 ---
        phase_table[8] = 3057  # raw literal, not evaluated
        pass
        # --- L1028 ---
        phase_table[8] = 3084  # raw literal, not evaluated
        pass
        # --- L1032 ---
        phase_table[8] = 3115  # raw literal, not evaluated
        pass
        # --- L1036 ---
        phase_table[8] = 3144  # raw literal, not evaluated
        pass
        # --- L1040 ---
        phase_table[8] = 3174  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1060 ---
        phase_table[9] = 3189  # raw literal, not evaluated
        switch(8):
            case 1: goto L1066
            case 2: goto L1072
            case 3: goto L1078
            case 4: goto L1084
            case 5: goto L1090
            case 6: goto L1096
            case 7: goto L1102
            case 8: goto L1108
            case 9: goto L1114
            case 10: goto L1120
            case 11: goto L1126
            case 12: goto L1132
            case 13: goto L1136
            case 14: goto L1140
            case 512: goto L1144
            case 32: goto L1150
            case 64: goto L1156
            case 128: goto L1162
            case 256: goto L1168
            default: goto L1174
        phase_table[9] = 3190  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1072 ---
        phase_table[9] = 3217  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1078 ---
        phase_table[9] = 3243  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1084 ---
        phase_table[9] = 3273  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1090 ---
        phase_table[9] = 3297  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1096 ---
        phase_table[9] = 3322  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1102 ---
        phase_table[9] = 3376  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1108 ---
        phase_table[9] = 3400  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1114 ---
        phase_table[9] = 3455  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1120 ---
        phase_table[9] = 3500  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1126 ---
        phase_table[9] = 3551  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1132 ---
        phase_table[9] = 3634  # raw literal, not evaluated
        pass
        # --- L1136 ---
        phase_table[9] = 3698  # raw literal, not evaluated
        pass
        # --- L1140 ---
        phase_table[9] = 3752  # raw literal, not evaluated
        pass
        # --- L1144 ---
        phase_table[9] = 3824  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1150 ---
        phase_table[9] = 3858  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1156 ---
        phase_table[9] = 3897  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1162 ---
        phase_table[9] = 3936  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1168 ---
        phase_table[9] = 3977  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1174 ---
        phase_table[9] = 4017  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1218 ---
        system_message(4056 /*" þ"*/)
        # --- L1220 ---
        move_unit(unit[6], priority=var[46], dest_type=0, dest_arg=0)
        unit[6].attr8 = (set_unit_behavior(8, 6) + 1024)
        # --- L1228 ---
        pass
        # --- L1229 ---
        if not ((group_condition_ref_2(9, 1) or (set_unit_behavior(9, 6) != 0))):
            goto L1512
        # else: falls through here, rejoins L2061
        if not ((set_unit_behavior(7, 6) != 6)):
            goto L1512
        # else: falls through here, rejoins L1512
        var[50] = random_below(100)
        if not (((var[3] == 0) and (var[50] < 40))):
            goto L1507
        # else: falls through here, rejoins L1507
        var[3] = (var[3] + 1)
        phase_table[10] = 4074  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1253
            case 1: goto L1257
            case 2: goto L1261
            case 7: goto L1265
            default: goto L1269
        phase_table[10] = 4075  # raw literal, not evaluated
        pass
        # --- L1257 ---
        phase_table[10] = 4110  # raw literal, not evaluated
        pass
        # --- L1261 ---
        phase_table[10] = 4137  # raw literal, not evaluated
        pass
        # --- L1265 ---
        phase_table[10] = 4176  # raw literal, not evaluated
        pass
        # --- L1269 ---
        phase_table[10] = 4204  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1283 ---
        phase_table[11] = 4257  # raw literal, not evaluated
        var[51] = random_below(4)
        if not (((random_below(1) != 7) and (var[51] >= 3))):
            goto L1296
        # else: falls through here, rejoins L1296
        var[51] = random_below(3)
        # --- L1296 ---
        switch(var[51]):
            case 0: goto L1299
            case 1: goto L1303
            case 3: goto L1307
            case 4: goto L1311
            case 5: goto L1315
            case 6: goto L1319
            case 7: goto L1323
            default: goto L1327
        phase_table[11] = 4258  # raw literal, not evaluated
        pass
        # --- L1303 ---
        phase_table[11] = 4262  # raw literal, not evaluated
        pass
        # --- L1307 ---
        phase_table[11] = 4273  # raw literal, not evaluated
        pass
        # --- L1311 ---
        phase_table[11] = 4294  # raw literal, not evaluated
        pass
        # --- L1315 ---
        phase_table[11] = 4321  # raw literal, not evaluated
        pass
        # --- L1319 ---
        phase_table[11] = 4352  # raw literal, not evaluated
        pass
        # --- L1323 ---
        phase_table[11] = 4381  # raw literal, not evaluated
        pass
        # --- L1327 ---
        phase_table[11] = 4411  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1347 ---
        phase_table[12] = 4426  # raw literal, not evaluated
        switch(3):
            case 1: goto L1353
            case 2: goto L1359
            case 3: goto L1365
            case 4: goto L1371
            case 5: goto L1377
            case 6: goto L1383
            case 7: goto L1389
            case 8: goto L1395
            case 9: goto L1401
            case 10: goto L1407
            case 11: goto L1413
            case 12: goto L1419
            case 13: goto L1423
            case 14: goto L1427
            case 512: goto L1431
            case 32: goto L1437
            case 64: goto L1443
            case 128: goto L1449
            case 256: goto L1455
            default: goto L1461
        phase_table[12] = 4427  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1359 ---
        phase_table[12] = 4454  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1365 ---
        phase_table[12] = 4480  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1371 ---
        phase_table[12] = 4510  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1377 ---
        phase_table[12] = 4534  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1383 ---
        phase_table[12] = 4559  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1389 ---
        phase_table[12] = 4613  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1395 ---
        phase_table[12] = 4637  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1401 ---
        phase_table[12] = 4692  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1407 ---
        phase_table[12] = 4737  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1413 ---
        phase_table[12] = 4788  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1419 ---
        phase_table[12] = 4871  # raw literal, not evaluated
        pass
        # --- L1423 ---
        phase_table[12] = 4935  # raw literal, not evaluated
        pass
        # --- L1427 ---
        phase_table[12] = 4989  # raw literal, not evaluated
        pass
        # --- L1431 ---
        phase_table[12] = 5061  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1437 ---
        phase_table[12] = 5095  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1443 ---
        phase_table[12] = 5134  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1449 ---
        phase_table[12] = 5173  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1455 ---
        phase_table[12] = 5214  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1461 ---
        phase_table[12] = 5254  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1505 ---
        system_message(5293 /*" þ
"*/)
        # --- L1507 ---
        move_unit(unit[6], priority=6, dest_type=0, dest_arg=0)
        # --- L1512 ---
        if not ((set_unit_behavior(7, 6) != 2)):
            goto L1791
        # else: falls through here, rejoins L2061
        move_unit(unit[6], priority=2, dest_type=0, dest_arg=0)
        var[53] = random_below(100)
        if not (((var[3] == 0) and (var[53] < 4))):
            goto L1791
        # else: falls through here, rejoins L1791
        var[3] = (var[3] + 1)
        phase_table[13] = 5311  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1537
            case 1: goto L1541
            case 2: goto L1545
            case 7: goto L1549
            default: goto L1553
        phase_table[13] = 5312  # raw literal, not evaluated
        pass
        # --- L1541 ---
        phase_table[13] = 5347  # raw literal, not evaluated
        pass
        # --- L1545 ---
        phase_table[13] = 5374  # raw literal, not evaluated
        pass
        # --- L1549 ---
        phase_table[13] = 5413  # raw literal, not evaluated
        pass
        # --- L1553 ---
        phase_table[13] = 5441  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1567 ---
        phase_table[14] = 5494  # raw literal, not evaluated
        var[54] = random_below(4)
        if not (((random_below(1) != 7) and (var[54] >= 3))):
            goto L1580
        # else: falls through here, rejoins L1580
        var[54] = random_below(3)
        # --- L1580 ---
        switch(var[54]):
            case 0: goto L1583
            case 1: goto L1587
            case 3: goto L1591
            case 4: goto L1595
            case 5: goto L1599
            case 6: goto L1603
            case 7: goto L1607
            default: goto L1611
        phase_table[14] = 5495  # raw literal, not evaluated
        pass
        # --- L1587 ---
        phase_table[14] = 5499  # raw literal, not evaluated
        pass
        # --- L1591 ---
        phase_table[14] = 5510  # raw literal, not evaluated
        pass
        # --- L1595 ---
        phase_table[14] = 5531  # raw literal, not evaluated
        pass
        # --- L1599 ---
        phase_table[14] = 5558  # raw literal, not evaluated
        pass
        # --- L1603 ---
        phase_table[14] = 5589  # raw literal, not evaluated
        pass
        # --- L1607 ---
        phase_table[14] = 5618  # raw literal, not evaluated
        pass
        # --- L1611 ---
        phase_table[14] = 5648  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1631 ---
        phase_table[15] = 5663  # raw literal, not evaluated
        switch(2):
            case 1: goto L1637
            case 2: goto L1643
            case 3: goto L1649
            case 4: goto L1655
            case 5: goto L1661
            case 6: goto L1667
            case 7: goto L1673
            case 8: goto L1679
            case 9: goto L1685
            case 10: goto L1691
            case 11: goto L1697
            case 12: goto L1703
            case 13: goto L1707
            case 14: goto L1711
            case 512: goto L1715
            case 32: goto L1721
            case 64: goto L1727
            case 128: goto L1733
            case 256: goto L1739
            default: goto L1745
        phase_table[15] = 5664  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1643 ---
        phase_table[15] = 5691  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1649 ---
        phase_table[15] = 5717  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1655 ---
        phase_table[15] = 5747  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1661 ---
        phase_table[15] = 5771  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1667 ---
        phase_table[15] = 5796  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1673 ---
        phase_table[15] = 5850  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1679 ---
        phase_table[15] = 5874  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1685 ---
        phase_table[15] = 5929  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1691 ---
        phase_table[15] = 5974  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1697 ---
        phase_table[15] = 6025  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1703 ---
        phase_table[15] = 6108  # raw literal, not evaluated
        pass
        # --- L1707 ---
        phase_table[15] = 6172  # raw literal, not evaluated
        pass
        # --- L1711 ---
        phase_table[15] = 6226  # raw literal, not evaluated
        pass
        # --- L1715 ---
        phase_table[15] = 6298  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1721 ---
        phase_table[15] = 6332  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1727 ---
        phase_table[15] = 6371  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1733 ---
        phase_table[15] = 6410  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1739 ---
        phase_table[15] = 6451  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1745 ---
        phase_table[15] = 6491  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1789 ---
        system_message(6530 /*" þ"*/)
        # --- L1791 ---
        var[56] = random_below(100)
        if not (((var[3] == 0) and (var[56] < 4))):
            goto L2061
        # else: falls through here, rejoins L2061
        var[3] = (var[3] + 1)
        phase_table[16] = 6548  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L1807
            case 1: goto L1811
            case 2: goto L1815
            case 7: goto L1819
            default: goto L1823
        phase_table[16] = 6549  # raw literal, not evaluated
        pass
        # --- L1811 ---
        phase_table[16] = 6584  # raw literal, not evaluated
        pass
        # --- L1815 ---
        phase_table[16] = 6611  # raw literal, not evaluated
        pass
        # --- L1819 ---
        phase_table[16] = 6650  # raw literal, not evaluated
        pass
        # --- L1823 ---
        phase_table[16] = 6678  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1837 ---
        phase_table[17] = 6731  # raw literal, not evaluated
        var[57] = random_below(4)
        if not (((random_below(1) != 7) and (var[57] >= 3))):
            goto L1850
        # else: falls through here, rejoins L1850
        var[57] = random_below(3)
        # --- L1850 ---
        switch(var[57]):
            case 0: goto L1853
            case 1: goto L1857
            case 3: goto L1861
            case 4: goto L1865
            case 5: goto L1869
            case 6: goto L1873
            case 7: goto L1877
            default: goto L1881
        phase_table[17] = 6732  # raw literal, not evaluated
        pass
        # --- L1857 ---
        phase_table[17] = 6736  # raw literal, not evaluated
        pass
        # --- L1861 ---
        phase_table[17] = 6747  # raw literal, not evaluated
        pass
        # --- L1865 ---
        phase_table[17] = 6768  # raw literal, not evaluated
        pass
        # --- L1869 ---
        phase_table[17] = 6795  # raw literal, not evaluated
        pass
        # --- L1873 ---
        phase_table[17] = 6826  # raw literal, not evaluated
        pass
        # --- L1877 ---
        phase_table[17] = 6855  # raw literal, not evaluated
        pass
        # --- L1881 ---
        phase_table[17] = 6885  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1901 ---
        phase_table[18] = 6900  # raw literal, not evaluated
        switch(1):
            case 1: goto L1907
            case 2: goto L1913
            case 3: goto L1919
            case 4: goto L1925
            case 5: goto L1931
            case 6: goto L1937
            case 7: goto L1943
            case 8: goto L1949
            case 9: goto L1955
            case 10: goto L1961
            case 11: goto L1967
            case 12: goto L1973
            case 13: goto L1977
            case 14: goto L1981
            case 512: goto L1985
            case 32: goto L1991
            case 64: goto L1997
            case 128: goto L2003
            case 256: goto L2009
            default: goto L2015
        phase_table[18] = 6901  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1913 ---
        phase_table[18] = 6928  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1919 ---
        phase_table[18] = 6954  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1925 ---
        phase_table[18] = 6984  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1931 ---
        phase_table[18] = 7008  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1937 ---
        phase_table[18] = 7033  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1943 ---
        phase_table[18] = 7087  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1949 ---
        phase_table[18] = 7111  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1955 ---
        phase_table[18] = 7166  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1961 ---
        phase_table[18] = 7211  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1967 ---
        phase_table[18] = 7262  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1973 ---
        phase_table[18] = 7345  # raw literal, not evaluated
        pass
        # --- L1977 ---
        phase_table[18] = 7409  # raw literal, not evaluated
        pass
        # --- L1981 ---
        phase_table[18] = 7463  # raw literal, not evaluated
        pass
        # --- L1985 ---
        phase_table[18] = 7535  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1991 ---
        phase_table[18] = 7569  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1997 ---
        phase_table[18] = 7608  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2003 ---
        phase_table[18] = 7647  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2009 ---
        phase_table[18] = 7688  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2015 ---
        phase_table[18] = 7728  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2059 ---
        system_message(7767 /*" þ"*/)
        # --- L2061 ---
        pass
        # --- L2062 ---
        if not (((var[16] & 512) > 0)):
            goto L2341
        # else: falls through here, rejoins L2620
        var[59] = random_below(100)
        if not (((var[3] == 0) and (var[59] < 4))):
            goto L2336
        # else: falls through here, rejoins L2336
        var[3] = (var[3] + 1)
        phase_table[19] = 7785  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2082
            case 1: goto L2086
            case 2: goto L2090
            case 7: goto L2094
            default: goto L2098
        phase_table[19] = 7786  # raw literal, not evaluated
        pass
        # --- L2086 ---
        phase_table[19] = 7821  # raw literal, not evaluated
        pass
        # --- L2090 ---
        phase_table[19] = 7848  # raw literal, not evaluated
        pass
        # --- L2094 ---
        phase_table[19] = 7887  # raw literal, not evaluated
        pass
        # --- L2098 ---
        phase_table[19] = 7915  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2112 ---
        phase_table[20] = 7968  # raw literal, not evaluated
        var[60] = random_below(4)
        if not (((random_below(1) != 7) and (var[60] >= 3))):
            goto L2125
        # else: falls through here, rejoins L2125
        var[60] = random_below(3)
        # --- L2125 ---
        switch(var[60]):
            case 0: goto L2128
            case 1: goto L2132
            case 3: goto L2136
            case 4: goto L2140
            case 5: goto L2144
            case 6: goto L2148
            case 7: goto L2152
            default: goto L2156
        phase_table[20] = 7969  # raw literal, not evaluated
        pass
        # --- L2132 ---
        phase_table[20] = 7973  # raw literal, not evaluated
        pass
        # --- L2136 ---
        phase_table[20] = 7984  # raw literal, not evaluated
        pass
        # --- L2140 ---
        phase_table[20] = 8005  # raw literal, not evaluated
        pass
        # --- L2144 ---
        phase_table[20] = 8032  # raw literal, not evaluated
        pass
        # --- L2148 ---
        phase_table[20] = 8063  # raw literal, not evaluated
        pass
        # --- L2152 ---
        phase_table[20] = 8092  # raw literal, not evaluated
        pass
        # --- L2156 ---
        phase_table[20] = 8122  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2176 ---
        phase_table[21] = 8137  # raw literal, not evaluated
        switch(4):
            case 1: goto L2182
            case 2: goto L2188
            case 3: goto L2194
            case 4: goto L2200
            case 5: goto L2206
            case 6: goto L2212
            case 7: goto L2218
            case 8: goto L2224
            case 9: goto L2230
            case 10: goto L2236
            case 11: goto L2242
            case 12: goto L2248
            case 13: goto L2252
            case 14: goto L2256
            case 512: goto L2260
            case 32: goto L2266
            case 64: goto L2272
            case 128: goto L2278
            case 256: goto L2284
            default: goto L2290
        phase_table[21] = 8138  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2188 ---
        phase_table[21] = 8165  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2194 ---
        phase_table[21] = 8191  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2200 ---
        phase_table[21] = 8221  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2206 ---
        phase_table[21] = 8245  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2212 ---
        phase_table[21] = 8270  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2218 ---
        phase_table[21] = 8324  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2224 ---
        phase_table[21] = 8348  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2230 ---
        phase_table[21] = 8403  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2236 ---
        phase_table[21] = 8448  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2242 ---
        phase_table[21] = 8499  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2248 ---
        phase_table[21] = 8582  # raw literal, not evaluated
        pass
        # --- L2252 ---
        phase_table[21] = 8646  # raw literal, not evaluated
        pass
        # --- L2256 ---
        phase_table[21] = 8700  # raw literal, not evaluated
        pass
        # --- L2260 ---
        phase_table[21] = 8772  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2266 ---
        phase_table[21] = 8806  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2272 ---
        phase_table[21] = 8845  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2278 ---
        phase_table[21] = 8884  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2284 ---
        phase_table[21] = 8925  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2290 ---
        phase_table[21] = 8965  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2334 ---
        system_message(9004 /*" þ"*/)
        # --- L2336 ---
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        # --- L2341 ---
        if not (((var[16] & 128) > 0)):
            goto L2620
        # else: falls through here, rejoins L2620
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=3)
        var[62] = random_below(100)
        if not (((var[3] == 0) and (var[62] < 4))):
            goto L2620
        # else: falls through here, rejoins L2620
        var[3] = (var[3] + 1)
        phase_table[22] = 9022  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2366
            case 1: goto L2370
            case 2: goto L2374
            case 7: goto L2378
            default: goto L2382
        phase_table[22] = 9023  # raw literal, not evaluated
        pass
        # --- L2370 ---
        phase_table[22] = 9058  # raw literal, not evaluated
        pass
        # --- L2374 ---
        phase_table[22] = 9085  # raw literal, not evaluated
        pass
        # --- L2378 ---
        phase_table[22] = 9124  # raw literal, not evaluated
        pass
        # --- L2382 ---
        phase_table[22] = 9152  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2396 ---
        phase_table[23] = 9205  # raw literal, not evaluated
        var[63] = random_below(4)
        if not (((random_below(1) != 7) and (var[63] >= 3))):
            goto L2409
        # else: falls through here, rejoins L2409
        var[63] = random_below(3)
        # --- L2409 ---
        switch(var[63]):
            case 0: goto L2412
            case 1: goto L2416
            case 3: goto L2420
            case 4: goto L2424
            case 5: goto L2428
            case 6: goto L2432
            case 7: goto L2436
            default: goto L2440
        phase_table[23] = 9206  # raw literal, not evaluated
        pass
        # --- L2416 ---
        phase_table[23] = 9210  # raw literal, not evaluated
        pass
        # --- L2420 ---
        phase_table[23] = 9221  # raw literal, not evaluated
        pass
        # --- L2424 ---
        phase_table[23] = 9242  # raw literal, not evaluated
        pass
        # --- L2428 ---
        phase_table[23] = 9269  # raw literal, not evaluated
        pass
        # --- L2432 ---
        phase_table[23] = 9300  # raw literal, not evaluated
        pass
        # --- L2436 ---
        phase_table[23] = 9329  # raw literal, not evaluated
        pass
        # --- L2440 ---
        phase_table[23] = 9359  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2460 ---
        phase_table[24] = 9374  # raw literal, not evaluated
        switch(5):
            case 1: goto L2466
            case 2: goto L2472
            case 3: goto L2478
            case 4: goto L2484
            case 5: goto L2490
            case 6: goto L2496
            case 7: goto L2502
            case 8: goto L2508
            case 9: goto L2514
            case 10: goto L2520
            case 11: goto L2526
            case 12: goto L2532
            case 13: goto L2536
            case 14: goto L2540
            case 512: goto L2544
            case 32: goto L2550
            case 64: goto L2556
            case 128: goto L2562
            case 256: goto L2568
            default: goto L2574
        phase_table[24] = 9375  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2472 ---
        phase_table[24] = 9402  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2478 ---
        phase_table[24] = 9428  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2484 ---
        phase_table[24] = 9458  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2490 ---
        phase_table[24] = 9482  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2496 ---
        phase_table[24] = 9507  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2502 ---
        phase_table[24] = 9561  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2508 ---
        phase_table[24] = 9585  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2514 ---
        phase_table[24] = 9640  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2520 ---
        phase_table[24] = 9685  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2526 ---
        phase_table[24] = 9736  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2532 ---
        phase_table[24] = 9819  # raw literal, not evaluated
        pass
        # --- L2536 ---
        phase_table[24] = 9883  # raw literal, not evaluated
        pass
        # --- L2540 ---
        phase_table[24] = 9937  # raw literal, not evaluated
        pass
        # --- L2544 ---
        phase_table[24] = 10009  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2550 ---
        phase_table[24] = 10043  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2556 ---
        phase_table[24] = 10082  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2562 ---
        phase_table[24] = 10121  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2568 ---
        phase_table[24] = 10162  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2574 ---
        phase_table[24] = 10202  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2618 ---
        system_message(10241 /*" þ"*/)
        # --- L2620 ---
        pass
        # --- L2621 ---
        if not (((var[16] & 512) > 0)):
            goto L2630
        # else: falls through here, rejoins L2630
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        # --- L2630 ---
        pass
        # --- L2631 ---
        switch((set_unit_behavior(8, 6) & 7136)):
            case 32: goto L2634
            case 64: goto L2640
            case 128: goto L2646
            case 256: goto L2652
            default: goto L2658
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L2640 ---
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L2646 ---
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L2652 ---
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L2658 ---
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2675 ---
        pass
        # --- L2676 ---
        if not ((var[42] > 0)):
            goto L2955
        # else: falls through here, rejoins L2960
        move_unit(unit[6], priority=6, dest_type=0, dest_arg=0)
        var[65] = random_below(100)
        if not (((var[3] == 0) and (var[65] < 4))):
            goto L2955
        # else: falls through here, rejoins L2955
        var[3] = (var[3] + 1)
        phase_table[25] = 10259  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2701
            case 1: goto L2705
            case 2: goto L2709
            case 7: goto L2713
            default: goto L2717
        phase_table[25] = 10260  # raw literal, not evaluated
        pass
        # --- L2705 ---
        phase_table[25] = 10295  # raw literal, not evaluated
        pass
        # --- L2709 ---
        phase_table[25] = 10322  # raw literal, not evaluated
        pass
        # --- L2713 ---
        phase_table[25] = 10361  # raw literal, not evaluated
        pass
        # --- L2717 ---
        phase_table[25] = 10389  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2731 ---
        phase_table[26] = 10442  # raw literal, not evaluated
        var[66] = random_below(4)
        if not (((random_below(1) != 7) and (var[66] >= 3))):
            goto L2744
        # else: falls through here, rejoins L2744
        var[66] = random_below(3)
        # --- L2744 ---
        switch(var[66]):
            case 0: goto L2747
            case 1: goto L2751
            case 3: goto L2755
            case 4: goto L2759
            case 5: goto L2763
            case 6: goto L2767
            case 7: goto L2771
            default: goto L2775
        phase_table[26] = 10443  # raw literal, not evaluated
        pass
        # --- L2751 ---
        phase_table[26] = 10447  # raw literal, not evaluated
        pass
        # --- L2755 ---
        phase_table[26] = 10458  # raw literal, not evaluated
        pass
        # --- L2759 ---
        phase_table[26] = 10479  # raw literal, not evaluated
        pass
        # --- L2763 ---
        phase_table[26] = 10506  # raw literal, not evaluated
        pass
        # --- L2767 ---
        phase_table[26] = 10537  # raw literal, not evaluated
        pass
        # --- L2771 ---
        phase_table[26] = 10566  # raw literal, not evaluated
        pass
        # --- L2775 ---
        phase_table[26] = 10596  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2795 ---
        phase_table[27] = 10611  # raw literal, not evaluated
        switch(6):
            case 1: goto L2801
            case 2: goto L2807
            case 3: goto L2813
            case 4: goto L2819
            case 5: goto L2825
            case 6: goto L2831
            case 7: goto L2837
            case 8: goto L2843
            case 9: goto L2849
            case 10: goto L2855
            case 11: goto L2861
            case 12: goto L2867
            case 13: goto L2871
            case 14: goto L2875
            case 512: goto L2879
            case 32: goto L2885
            case 64: goto L2891
            case 128: goto L2897
            case 256: goto L2903
            default: goto L2909
        phase_table[27] = 10612  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2807 ---
        phase_table[27] = 10639  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2813 ---
        phase_table[27] = 10665  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2819 ---
        phase_table[27] = 10695  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2825 ---
        phase_table[27] = 10719  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2831 ---
        phase_table[27] = 10744  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2837 ---
        phase_table[27] = 10798  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2843 ---
        phase_table[27] = 10822  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2849 ---
        phase_table[27] = 10877  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2855 ---
        phase_table[27] = 10922  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2861 ---
        phase_table[27] = 10973  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2867 ---
        phase_table[27] = 11056  # raw literal, not evaluated
        pass
        # --- L2871 ---
        phase_table[27] = 11120  # raw literal, not evaluated
        pass
        # --- L2875 ---
        phase_table[27] = 11174  # raw literal, not evaluated
        pass
        # --- L2879 ---
        phase_table[27] = 11246  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2885 ---
        phase_table[27] = 11280  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2891 ---
        phase_table[27] = 11319  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2897 ---
        phase_table[27] = 11358  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2903 ---
        phase_table[27] = 11399  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2909 ---
        phase_table[27] = 11439  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2953 ---
        system_message(11478 /*" þ"*/)
        # --- L2955 ---
        move_unit(unit[6], priority=0, dest_type=0, dest_arg=0)
        # --- L2960 ---
        pass
        # --- L2961 ---
        if not ((set_unit_behavior(7, 6) != 3)):
            goto L2970
        # else: falls through here, rejoins L2970
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        # --- L2970 ---
        pass
        # --- L2971 ---
        if not ((((var[16] & 7136) == 0) and (var[42] == 0))):
            goto L3344
        # else: falls through here, rejoins L3368
        var[68] = random_below(100)
        if not (((var[3] == 0) and (var[68] < 4))):
            goto L3245
        # else: falls through here, rejoins L3245
        var[3] = (var[3] + 1)
        phase_table[28] = 11496  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2991
            case 1: goto L2995
            case 2: goto L2999
            case 7: goto L3003
            default: goto L3007
        phase_table[28] = 11497  # raw literal, not evaluated
        pass
        # --- L2995 ---
        phase_table[28] = 11532  # raw literal, not evaluated
        pass
        # --- L2999 ---
        phase_table[28] = 11559  # raw literal, not evaluated
        pass
        # --- L3003 ---
        phase_table[28] = 11598  # raw literal, not evaluated
        pass
        # --- L3007 ---
        phase_table[28] = 11626  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3021 ---
        phase_table[29] = 11679  # raw literal, not evaluated
        var[69] = random_below(4)
        if not (((random_below(1) != 7) and (var[69] >= 3))):
            goto L3034
        # else: falls through here, rejoins L3034
        var[69] = random_below(3)
        # --- L3034 ---
        switch(var[69]):
            case 0: goto L3037
            case 1: goto L3041
            case 3: goto L3045
            case 4: goto L3049
            case 5: goto L3053
            case 6: goto L3057
            case 7: goto L3061
            default: goto L3065
        phase_table[29] = 11680  # raw literal, not evaluated
        pass
        # --- L3041 ---
        phase_table[29] = 11684  # raw literal, not evaluated
        pass
        # --- L3045 ---
        phase_table[29] = 11695  # raw literal, not evaluated
        pass
        # --- L3049 ---
        phase_table[29] = 11716  # raw literal, not evaluated
        pass
        # --- L3053 ---
        phase_table[29] = 11743  # raw literal, not evaluated
        pass
        # --- L3057 ---
        phase_table[29] = 11774  # raw literal, not evaluated
        pass
        # --- L3061 ---
        phase_table[29] = 11803  # raw literal, not evaluated
        pass
        # --- L3065 ---
        phase_table[29] = 11833  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3085 ---
        phase_table[30] = 11848  # raw literal, not evaluated
        switch(7):
            case 1: goto L3091
            case 2: goto L3097
            case 3: goto L3103
            case 4: goto L3109
            case 5: goto L3115
            case 6: goto L3121
            case 7: goto L3127
            case 8: goto L3133
            case 9: goto L3139
            case 10: goto L3145
            case 11: goto L3151
            case 12: goto L3157
            case 13: goto L3161
            case 14: goto L3165
            case 512: goto L3169
            case 32: goto L3175
            case 64: goto L3181
            case 128: goto L3187
            case 256: goto L3193
            default: goto L3199
        phase_table[30] = 11849  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3097 ---
        phase_table[30] = 11876  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3103 ---
        phase_table[30] = 11902  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3109 ---
        phase_table[30] = 11932  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3115 ---
        phase_table[30] = 11956  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3121 ---
        phase_table[30] = 11981  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3127 ---
        phase_table[30] = 12035  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3133 ---
        phase_table[30] = 12059  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3139 ---
        phase_table[30] = 12114  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3145 ---
        phase_table[30] = 12159  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3151 ---
        phase_table[30] = 12210  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3157 ---
        phase_table[30] = 12293  # raw literal, not evaluated
        pass
        # --- L3161 ---
        phase_table[30] = 12357  # raw literal, not evaluated
        pass
        # --- L3165 ---
        phase_table[30] = 12411  # raw literal, not evaluated
        pass
        # --- L3169 ---
        phase_table[30] = 12483  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3175 ---
        phase_table[30] = 12517  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3181 ---
        phase_table[30] = 12556  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3187 ---
        phase_table[30] = 12595  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3193 ---
        phase_table[30] = 12636  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3199 ---
        phase_table[30] = 12676  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3243 ---
        system_message(12715 /*" þ"*/)
        # --- L3245 ---
        switch((set_unit_behavior(8, 6) & 7136)):
            case 32: goto L3248
            case 64: goto L3266
            case 128: goto L3284
            case 256: goto L3302
            default: goto L3320
        if not (group_condition_ref(1, 6)):
            goto L3256
        # else: falls through here, rejoins L3256
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3256 ---
        condition[1] = Condition(var_ref=1, expr_offset=2393)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L3266 ---
        if not (group_condition_ref(2, 6)):
            goto L3274
        # else: falls through here, rejoins L3274
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3274 ---
        condition[2] = Condition(var_ref=2, expr_offset=2414)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L3284 ---
        if not (group_condition_ref(3, 6)):
            goto L3292
        # else: falls through here, rejoins L3292
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3292 ---
        condition[3] = Condition(var_ref=3, expr_offset=2435)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L3302 ---
        if not (group_condition_ref(4, 6)):
            goto L3310
        # else: falls through here, rejoins L3310
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3310 ---
        condition[4] = Condition(var_ref=4, expr_offset=2456)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L3320 ---
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3337 ---
        if not (((set_unit_behavior(8, 6) & 1024) > 0)):
            goto L3344
        # else: falls through here, rejoins L3344
        unit[6].attr8 = (set_unit_behavior(8, 6) - 1024)
        # --- L3344 ---
        if not (((set_unit_behavior(8, 6) & 1024) == 0)):
            goto L3359
        # else: falls through here, rejoins L3368
        timer[1] = current_turn + 2
        unit[6].attr8 = (set_unit_behavior(8, 6) + 1024)
        move_unit(unit[6], priority=var[46], dest_type=0, dest_arg=0)
        # --- L3359 ---
        if not (timer_expired(1)):
            goto L3368
        # else: falls through here, rejoins L3368
        move_unit(unit[6], priority=3, dest_type=2, dest_arg=5)
        # --- L3368 ---
        pass
        # --- L3369 ---
        pass
        # --- L3370 ---
        if not ((set_unit_behavior(7, 6) != 4)):
            goto L3649
        # else: falls through here, rejoins L3664
        var[71] = random_below(100)
        if not (((var[3] == 0) and (var[71] < 4))):
            goto L3644
        # else: falls through here, rejoins L3644
        var[3] = (var[3] + 1)
        phase_table[31] = 12733  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3390
            case 1: goto L3394
            case 2: goto L3398
            case 7: goto L3402
            default: goto L3406
        phase_table[31] = 12734  # raw literal, not evaluated
        pass
        # --- L3394 ---
        phase_table[31] = 12769  # raw literal, not evaluated
        pass
        # --- L3398 ---
        phase_table[31] = 12796  # raw literal, not evaluated
        pass
        # --- L3402 ---
        phase_table[31] = 12835  # raw literal, not evaluated
        pass
        # --- L3406 ---
        phase_table[31] = 12863  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3420 ---
        phase_table[32] = 12916  # raw literal, not evaluated
        var[72] = random_below(4)
        if not (((random_below(1) != 7) and (var[72] >= 3))):
            goto L3433
        # else: falls through here, rejoins L3433
        var[72] = random_below(3)
        # --- L3433 ---
        switch(var[72]):
            case 0: goto L3436
            case 1: goto L3440
            case 3: goto L3444
            case 4: goto L3448
            case 5: goto L3452
            case 6: goto L3456
            case 7: goto L3460
            default: goto L3464
        phase_table[32] = 12917  # raw literal, not evaluated
        pass
        # --- L3440 ---
        phase_table[32] = 12921  # raw literal, not evaluated
        pass
        # --- L3444 ---
        phase_table[32] = 12932  # raw literal, not evaluated
        pass
        # --- L3448 ---
        phase_table[32] = 12953  # raw literal, not evaluated
        pass
        # --- L3452 ---
        phase_table[32] = 12980  # raw literal, not evaluated
        pass
        # --- L3456 ---
        phase_table[32] = 13011  # raw literal, not evaluated
        pass
        # --- L3460 ---
        phase_table[32] = 13040  # raw literal, not evaluated
        pass
        # --- L3464 ---
        phase_table[32] = 13070  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3484 ---
        phase_table[33] = 13085  # raw literal, not evaluated
        switch(9):
            case 1: goto L3490
            case 2: goto L3496
            case 3: goto L3502
            case 4: goto L3508
            case 5: goto L3514
            case 6: goto L3520
            case 7: goto L3526
            case 8: goto L3532
            case 9: goto L3538
            case 10: goto L3544
            case 11: goto L3550
            case 12: goto L3556
            case 13: goto L3560
            case 14: goto L3564
            case 512: goto L3568
            case 32: goto L3574
            case 64: goto L3580
            case 128: goto L3586
            case 256: goto L3592
            default: goto L3598
        phase_table[33] = 13086  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3496 ---
        phase_table[33] = 13113  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3502 ---
        phase_table[33] = 13139  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3508 ---
        phase_table[33] = 13169  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3514 ---
        phase_table[33] = 13193  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3520 ---
        phase_table[33] = 13218  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3526 ---
        phase_table[33] = 13272  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3532 ---
        phase_table[33] = 13296  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3538 ---
        phase_table[33] = 13351  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3544 ---
        phase_table[33] = 13396  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3550 ---
        phase_table[33] = 13447  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3556 ---
        phase_table[33] = 13530  # raw literal, not evaluated
        pass
        # --- L3560 ---
        phase_table[33] = 13594  # raw literal, not evaluated
        pass
        # --- L3564 ---
        phase_table[33] = 13648  # raw literal, not evaluated
        pass
        # --- L3568 ---
        phase_table[33] = 13720  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3574 ---
        phase_table[33] = 13754  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3580 ---
        phase_table[33] = 13793  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3586 ---
        phase_table[33] = 13832  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3592 ---
        phase_table[33] = 13873  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3598 ---
        phase_table[33] = 13913  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3642 ---
        system_message(13952 /*" þ"*/)
        # --- L3644 ---
        move_unit(unit[6], priority=4, dest_type=3, dest_arg=7)
        # --- L3649 ---
        var[74] = set_unit_behavior(10, 6)
        unit[8] = var[74]
        if not (group_condition(8)):
            goto L3664
        # else: falls through here, rejoins L3664
        move_unit(unit[6], priority=6, dest_type=0, dest_arg=0)
        # --- L3664 ---
        pass
        # --- L3665 ---
        pass
        # --- L3666 ---
        if not ((((var[16] & 7136) == 0) & (var[42] == 0))):
            goto L4039
        # else: falls through here, rejoins L4051
        var[75] = random_below(100)
        if not (((var[3] == 0) and (var[75] < 4))):
            goto L3940
        # else: falls through here, rejoins L3940
        var[3] = (var[3] + 1)
        phase_table[34] = 13970  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3686
            case 1: goto L3690
            case 2: goto L3694
            case 7: goto L3698
            default: goto L3702
        phase_table[34] = 13971  # raw literal, not evaluated
        pass
        # --- L3690 ---
        phase_table[34] = 14006  # raw literal, not evaluated
        pass
        # --- L3694 ---
        phase_table[34] = 14033  # raw literal, not evaluated
        pass
        # --- L3698 ---
        phase_table[34] = 14072  # raw literal, not evaluated
        pass
        # --- L3702 ---
        phase_table[34] = 14100  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3716 ---
        phase_table[35] = 14153  # raw literal, not evaluated
        var[76] = random_below(4)
        if not (((random_below(1) != 7) and (var[76] >= 3))):
            goto L3729
        # else: falls through here, rejoins L3729
        var[76] = random_below(3)
        # --- L3729 ---
        switch(var[76]):
            case 0: goto L3732
            case 1: goto L3736
            case 3: goto L3740
            case 4: goto L3744
            case 5: goto L3748
            case 6: goto L3752
            case 7: goto L3756
            default: goto L3760
        phase_table[35] = 14154  # raw literal, not evaluated
        pass
        # --- L3736 ---
        phase_table[35] = 14158  # raw literal, not evaluated
        pass
        # --- L3740 ---
        phase_table[35] = 14169  # raw literal, not evaluated
        pass
        # --- L3744 ---
        phase_table[35] = 14190  # raw literal, not evaluated
        pass
        # --- L3748 ---
        phase_table[35] = 14217  # raw literal, not evaluated
        pass
        # --- L3752 ---
        phase_table[35] = 14248  # raw literal, not evaluated
        pass
        # --- L3756 ---
        phase_table[35] = 14277  # raw literal, not evaluated
        pass
        # --- L3760 ---
        phase_table[35] = 14307  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3780 ---
        phase_table[36] = 14322  # raw literal, not evaluated
        switch(7):
            case 1: goto L3786
            case 2: goto L3792
            case 3: goto L3798
            case 4: goto L3804
            case 5: goto L3810
            case 6: goto L3816
            case 7: goto L3822
            case 8: goto L3828
            case 9: goto L3834
            case 10: goto L3840
            case 11: goto L3846
            case 12: goto L3852
            case 13: goto L3856
            case 14: goto L3860
            case 512: goto L3864
            case 32: goto L3870
            case 64: goto L3876
            case 128: goto L3882
            case 256: goto L3888
            default: goto L3894
        phase_table[36] = 14323  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3792 ---
        phase_table[36] = 14350  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3798 ---
        phase_table[36] = 14376  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3804 ---
        phase_table[36] = 14406  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3810 ---
        phase_table[36] = 14430  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3816 ---
        phase_table[36] = 14455  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3822 ---
        phase_table[36] = 14509  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3828 ---
        phase_table[36] = 14533  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3834 ---
        phase_table[36] = 14588  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3840 ---
        phase_table[36] = 14633  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3846 ---
        phase_table[36] = 14684  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3852 ---
        phase_table[36] = 14767  # raw literal, not evaluated
        pass
        # --- L3856 ---
        phase_table[36] = 14831  # raw literal, not evaluated
        pass
        # --- L3860 ---
        phase_table[36] = 14885  # raw literal, not evaluated
        pass
        # --- L3864 ---
        phase_table[36] = 14957  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3870 ---
        phase_table[36] = 14991  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3876 ---
        phase_table[36] = 15030  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3882 ---
        phase_table[36] = 15069  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3888 ---
        phase_table[36] = 15110  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3894 ---
        phase_table[36] = 15150  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3938 ---
        system_message(15189 /*" þ\""*/)
        # --- L3940 ---
        switch((set_unit_behavior(8, 6) & 7136)):
            case 32: goto L3943
            case 64: goto L3961
            case 128: goto L3979
            case 256: goto L3997
            default: goto L4015
        if not (group_condition_ref(1, 6)):
            goto L3951
        # else: falls through here, rejoins L3951
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3951 ---
        condition[1] = Condition(var_ref=1, expr_offset=2889)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L3961 ---
        if not (group_condition_ref(2, 6)):
            goto L3969
        # else: falls through here, rejoins L3969
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3969 ---
        condition[2] = Condition(var_ref=2, expr_offset=2910)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L3979 ---
        if not (group_condition_ref(3, 6)):
            goto L3987
        # else: falls through here, rejoins L3987
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L3987 ---
        condition[3] = Condition(var_ref=3, expr_offset=2931)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L3997 ---
        if not (group_condition_ref(4, 6)):
            goto L4005
        # else: falls through here, rejoins L4005
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4005 ---
        condition[4] = Condition(var_ref=4, expr_offset=2952)
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L4015 ---
        move_unit(unit[6], priority=1, dest_type=2, dest_arg=5)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4032 ---
        if not (((set_unit_behavior(8, 6) & 1024) > 0)):
            goto L4039
        # else: falls through here, rejoins L4039
        unit[6].attr8 = (set_unit_behavior(8, 6) - 1024)
        # --- L4039 ---
        if not (((set_unit_behavior(8, 6) & 1024) == 0)):
            goto L4051
        # else: falls through here, rejoins L4051
        unit[6].attr8 = (set_unit_behavior(8, 6) + 1024)
        move_unit(unit[6], priority=var[46], dest_type=0, dest_arg=0)
        # --- L4051 ---
        pass
        # --- L4052 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L4080 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x3b67] - dead end, not decoded further (other branches continue independently)
        # --- L4087 ---
        if not ((((not all_group_alive(2)) and (not var[6])) and stat(0))):
            goto L4096
        # else: falls through here, rejoins L4096
        system_message(15238 /*"Cybrid threat eliminated.
"*/)
        var[6] = 1
        # --- L4096 ---
        var[78] = 0
        var[79] = 0
        var[80] = 0
        unit[1] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 1):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4180
        # --- L4111 ---
        var[81] = set_unit_behavior(10, 1)
        switch(var[81]):
            case 1: goto L4117
            case 2: goto L4121
            case 3: goto L4125
            case 4: goto L4129
            case 5: goto L4133
            case 6: goto L4137
            case 7: goto L4141
            case 8: goto L4145
            default: goto L4149
        var[80] = 1
        pass
        # --- L4121 ---
        var[80] = 2
        pass
        # --- L4125 ---
        var[80] = 4
        pass
        # --- L4129 ---
        var[80] = 8
        pass
        # --- L4133 ---
        var[80] = 16
        pass
        # --- L4137 ---
        var[80] = 32
        pass
        # --- L4141 ---
        var[80] = 64
        pass
        # --- L4145 ---
        var[80] = 128
        pass
        # --- L4149 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4168 ---
        if not (((var[78] & var[80]) == 0)):
            goto L4175
        # else: falls through here, rejoins L4175
        var[78] = (var[78] + var[80])
        # --- L4175 ---
        unit[1] = next_unit_in_group(unit[1], group=1)
        goto L4111
        # --- L4180 ---
        if not ((var[78] < var[5])):
            goto L4334
        # else: falls through here, rejoins L4334
        var[82] = (var[5] - var[78])
        var[83] = 0
        var[84] = 0
        while (var[83] < var[8]):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L4261
        # --- L4196 ---
        switch(var[83]):
            case 1: goto L4199
            case 2: goto L4203
            case 3: goto L4207
            case 4: goto L4211
            case 5: goto L4215
            case 6: goto L4219
            case 7: goto L4223
            case 8: goto L4227
            default: goto L4231
        var[84] = 1
        pass
        # --- L4203 ---
        var[84] = 2
        pass
        # --- L4207 ---
        var[84] = 4
        pass
        # --- L4211 ---
        var[84] = 8
        pass
        # --- L4215 ---
        var[84] = 16
        pass
        # --- L4219 ---
        var[84] = 32
        pass
        # --- L4223 ---
        var[84] = 64
        pass
        # --- L4227 ---
        var[84] = 128
        pass
        # --- L4231 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4250 ---
        if not (((var[84] & var[5]) > (var[84] & var[78]))):
            goto L4256
        # else: falls through here, rejoins L4256
        system_message(15265 /*"Player üX"*/)
        # --- L4256 ---
        var[83] = (var[83] + 1)
        goto L4196
        # --- L4261 ---
        var[5] = var[78]
        switch(var[10]):
            case 1: goto L4267
            case 2: goto L4271
            case 3: goto L4275
            case 4: goto L4279
            case 5: goto L4283
            case 6: goto L4287
            case 7: goto L4291
            case 8: goto L4295
            default: goto L4299
        var[84] = 1
        pass
        # --- L4271 ---
        var[84] = 2
        pass
        # --- L4275 ---
        var[84] = 4
        pass
        # --- L4279 ---
        var[84] = 8
        pass
        # --- L4283 ---
        var[84] = 16
        pass
        # --- L4287 ---
        var[84] = 32
        pass
        # --- L4291 ---
        var[84] = 64
        pass
        # --- L4295 ---
        var[84] = 128
        pass
        # --- L4299 ---
        pass
        # [UNKNOWN OPCODE 0x0008] - dead end, not decoded further (other branches continue independently)
        # --- L4318 ---
        if not ((var[84] == var[5])):
            goto L4326
        # else: falls through here, rejoins L4334
        var[11] = 1
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4326 ---
        if not (((var[84] & var[5]) == 0)):
            goto L4334
        # else: falls through here, rejoins L4334
        var[11] = 2
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4334 ---
        if not (((stat(0) == 0) and (var[8] == 1))):
            goto L4342
        # else: falls through here, rejoins L4342
        var[11] = 1
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4342 ---
        if not (((stat(0) > 0) and (not all_group_alive(2)))):
            goto L4350
        # else: falls through here, rejoins L4350
        var[11] = 3
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L4350 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((var[11] == 1)):
                goto L4362
            # else: falls through here, rejoins L4380
            play_sound(35)
            system_message(15287 /*"All immediate threats eliminated. "*/)
            set_unit_objective(unit=1, state=1)
            # --- L4362 ---
            if not ((var[11] == 3)):
                goto L4375
            # else: falls through here, rejoins L4380
            play_sound(35)
            set_unit_objective(unit=1, state=1)
            system_message(15322 /*"The Cybrid forces have been eliminated."*/)
            end_turn(reason=15362)
            goto_phase(3)
            # --- L4375 ---
            system_message(15418 /*"Your mission was a failure."*/)
            set_unit_objective(unit=1, state=2)
            # --- L4380 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
