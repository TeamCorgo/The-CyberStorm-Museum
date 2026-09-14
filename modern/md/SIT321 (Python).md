# SIT321.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[2] = (random_below(4) + 3)
var[5] = 0
var[7] = 0
var[9] = (8 + random_below(7))
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    hex[1] = hex_along_path(toward=0, steps=0)
    if not ((var[4] == 0)):
        goto L24
    # else: falls through here, rejoins L24
    var[4] = (random_below(var[11]) + var[12])
    # --- L24 ---
    var[13] = (stat(0) / 1)
    var[13] = (var[13] - 200)
    var[14] = 1
    var[15] = 179
    hex[8] = hex_along_path(toward=var[14], steps=var[15])
    hex[11] = (0, 0)
    var[16] = set_objective_at_hex(8)
    place_objective_marker(hex[8], ((random_below(3) + var[16]) - 1), 6, 8, 50)
    if not ((random_below(10) < 3)):
        goto L62
    # else: falls through here, rejoins L62
    unit[2] = spawn_unit(type=26, min_weapon_range=0, hex_ref=8)
    # --- L62 ---
    if not ((random_below(10) < 3)):
        goto L71
    # else: falls through here, rejoins L71
    unit[2] = spawn_unit(type=27, min_weapon_range=0, hex_ref=8)
    # --- L71 ---
    if not ((random_below(10) < 3)):
        goto L80
    # else: falls through here, rejoins L80
    unit[2] = spawn_unit(type=28, min_weapon_range=0, hex_ref=8)
    # --- L80 ---
    if not ((random_below(10) < 3)):
        goto L89
    # else: falls through here, rejoins L89
    unit[2] = spawn_unit(type=29, min_weapon_range=0, hex_ref=8)
    # --- L89 ---
    unit[2] = spawn_unit(type=25, min_weapon_range=0, hex_ref=8)
    var[18] = 5
    var[19] = 179
    hex[12] = hex_along_path(toward=var[18], steps=var[19])
    unit[3] = spawn_unit(type=31 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=12)
    place_objective_marker(hex[8], (4 + stat(4)), 6, 8, 50)
    place_objective_marker(hex[8], (2 + stat(4)), 4, 6, 100)
    timer[3] = current_turn + 2
    var[20] = 0
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L151
    # else: falls through here, rejoins L154
    var[6] = (var[13] / 2)
    if not ((var[6] < 300)):
        goto L144
    # else: falls through here, rejoins L151
    var[6] = 300
    # --- L144 ---
    if not ((var[6] > 1200)):
        goto L151
    # else: falls through here, rejoins L151
    var[6] = 1200
    # --- L151 ---
    var[6] = var[13]
    # --- L154 ---
    var[13] = (var[13] - var[6])
    var[21] = (random_below(8) + 12)
    var[22] = (random_below(180) - 90)
    hex[2] = hex_along_path(toward=var[21], steps=var[22])
    condition[2] = Condition(var_ref=2, expr_offset=263)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=2)
    move_group(group[3], priority=4, dest_type=3, dest_arg=2)
    for u in group[3]: u.attr8 = 45
    if not ((var[13] > 0)):
        goto L243
    # else: falls through here, rejoins L243
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L211
    # else: falls through here, rejoins L214
    var[6] = (var[13] / 2)
    if not ((var[6] < 300)):
        goto L204
    # else: falls through here, rejoins L211
    var[6] = 300
    # --- L204 ---
    if not ((var[6] > 1200)):
        goto L211
    # else: falls through here, rejoins L211
    var[6] = 1200
    # --- L211 ---
    var[6] = var[13]
    # --- L214 ---
    var[13] = (var[13] - var[6])
    var[23] = (random_below(8) + 12)
    var[24] = (random_below(180) - 90)
    hex[3] = hex_along_path(toward=var[23], steps=var[24])
    condition[3] = Condition(var_ref=3, expr_offset=344)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=3)
    move_group(group[3], priority=3, dest_type=2, dest_arg=3)
    for u in group[3]: u.attr8 = 79
    # --- L243 ---
    if not ((var[13] > 0)):
        goto L303
    # else: falls through here, rejoins L303
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L271
    # else: falls through here, rejoins L274
    var[6] = (var[13] / 2)
    if not ((var[6] < 300)):
        goto L264
    # else: falls through here, rejoins L271
    var[6] = 300
    # --- L264 ---
    if not ((var[6] > 1200)):
        goto L271
    # else: falls through here, rejoins L271
    var[6] = 1200
    # --- L271 ---
    var[6] = var[13]
    # --- L274 ---
    var[13] = (var[13] - var[6])
    var[25] = (random_below(8) + 12)
    var[26] = (random_below(180) - 90)
    hex[4] = hex_along_path(toward=var[25], steps=var[26])
    condition[4] = Condition(var_ref=4, expr_offset=425)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=4)
    move_group(group[3], priority=3, dest_type=2, dest_arg=4)
    for u in group[3]: u.attr8 = 143
    # --- L303 ---
    if not ((var[13] > 0)):
        goto L363
    # else: falls through here, rejoins L363
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L331
    # else: falls through here, rejoins L334
    var[6] = (var[13] / 2)
    if not ((var[6] < 300)):
        goto L324
    # else: falls through here, rejoins L331
    var[6] = 300
    # --- L324 ---
    if not ((var[6] > 1200)):
        goto L331
    # else: falls through here, rejoins L331
    var[6] = 1200
    # --- L331 ---
    var[6] = var[13]
    # --- L334 ---
    var[13] = (var[13] - var[6])
    var[27] = (random_below(8) + 12)
    var[28] = (random_below(180) - 90)
    hex[5] = hex_along_path(toward=var[27], steps=var[28])
    condition[5] = Condition(var_ref=5, expr_offset=506)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=5)
    move_group(group[3], priority=3, dest_type=2, dest_arg=5)
    for u in group[3]: u.attr8 = 271
    # --- L363 ---
    if not ((var[13] > 0)):
        goto L423
    # else: falls through here, rejoins L423
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L391
    # else: falls through here, rejoins L394
    var[6] = (var[13] / 2)
    if not ((var[6] < 300)):
        goto L384
    # else: falls through here, rejoins L391
    var[6] = 300
    # --- L384 ---
    if not ((var[6] > 1200)):
        goto L391
    # else: falls through here, rejoins L391
    var[6] = 1200
    # --- L391 ---
    var[6] = var[13]
    # --- L394 ---
    var[13] = (var[13] - var[6])
    var[29] = (random_below(8) + 12)
    var[30] = (random_below(180) - 90)
    hex[6] = hex_along_path(toward=var[29], steps=var[30])
    condition[6] = Condition(var_ref=6, expr_offset=587)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=6)
    move_group(group[3], priority=3, dest_type=2, dest_arg=6)
    for u in group[3]: u.attr8 = 2063
    # --- L423 ---
    if not ((var[13] > 0)):
        goto L483
    # else: falls through here, rejoins L483
    var[20] = (var[20] + 1)
    if not ((var[13] > 300)):
        goto L451
    # else: falls through here, rejoins L454
    var[6] = (var[13] / 1)
    if not ((var[6] < 300)):
        goto L444
    # else: falls through here, rejoins L451
    var[6] = 300
    # --- L444 ---
    if not ((var[6] > 1200)):
        goto L451
    # else: falls through here, rejoins L451
    var[6] = 1200
    # --- L451 ---
    var[6] = var[13]
    # --- L454 ---
    var[13] = (var[13] - var[6])
    var[31] = (random_below(8) + 12)
    var[32] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[31], steps=var[32])
    condition[7] = Condition(var_ref=5, expr_offset=668)
    group[3] = spawn_ai_squad(point_budget=var[6], hex_ref=7)
    move_group(group[3], priority=3, dest_type=2, dest_arg=7)
    for u in group[3]: u.attr8 = 4111
    # --- L483 ---
    timer[2] = current_turn + 1
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[33] = 0
        var[34] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L516
        var[35] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L514
        # --- L506 ---
        var[35] = (var[35] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L506
        # --- L514 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x00fe] - dead end, not decoded further (other branches continue independently)
        # --- L516 ---
        if not (timer_expired(2)):
            goto L5992
        # else: falls through here, rejoins L5992
        timer[2] = current_turn + 1
        var[1] = 0
        var[36] = 0
        if not ((group_condition_ref_2(2, 1) and group_condition_ref_2(2, 2))):
            goto L813
        # else: falls through here, rejoins L820
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[37] = random_below(100)
        if not (((var[1] == 0) and (var[37] < 2))):
            goto L806
        # else: falls through here, rejoins L806
        var[1] = (var[1] + 1)
        phase_table[1] = 404  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L552
            case 1: goto L556
            case 2: goto L560
            case 7: goto L564
            default: goto L568
        phase_table[1] = 405  # raw literal, not evaluated
        pass
        # --- L556 ---
        phase_table[1] = 440  # raw literal, not evaluated
        pass
        # --- L560 ---
        phase_table[1] = 467  # raw literal, not evaluated
        pass
        # --- L564 ---
        phase_table[1] = 506  # raw literal, not evaluated
        pass
        # --- L568 ---
        phase_table[1] = 534  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L582 ---
        phase_table[2] = 587  # raw literal, not evaluated
        var[38] = random_below(4)
        if not (((random_below(4) != 7) and (var[38] >= 3))):
            goto L595
        # else: falls through here, rejoins L595
        var[38] = random_below(3)
        # --- L595 ---
        switch(var[38]):
            case 0: goto L598
            case 1: goto L602
            case 3: goto L606
            case 4: goto L610
            case 5: goto L614
            case 6: goto L618
            case 7: goto L622
            default: goto L626
        phase_table[2] = 588  # raw literal, not evaluated
        pass
        # --- L602 ---
        phase_table[2] = 592  # raw literal, not evaluated
        pass
        # --- L606 ---
        phase_table[2] = 603  # raw literal, not evaluated
        pass
        # --- L610 ---
        phase_table[2] = 624  # raw literal, not evaluated
        pass
        # --- L614 ---
        phase_table[2] = 651  # raw literal, not evaluated
        pass
        # --- L618 ---
        phase_table[2] = 682  # raw literal, not evaluated
        pass
        # --- L622 ---
        phase_table[2] = 711  # raw literal, not evaluated
        pass
        # --- L626 ---
        phase_table[2] = 741  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L646 ---
        phase_table[3] = 756  # raw literal, not evaluated
        switch(32):
            case 1: goto L652
            case 2: goto L658
            case 3: goto L664
            case 4: goto L670
            case 5: goto L676
            case 6: goto L682
            case 7: goto L688
            case 8: goto L694
            case 9: goto L700
            case 10: goto L706
            case 11: goto L712
            case 12: goto L718
            case 13: goto L722
            case 14: goto L726
            case 512: goto L730
            case 32: goto L736
            case 64: goto L742
            case 128: goto L748
            case 256: goto L754
            default: goto L760
        phase_table[3] = 757  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L658 ---
        phase_table[3] = 784  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L664 ---
        phase_table[3] = 810  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L670 ---
        phase_table[3] = 840  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L676 ---
        phase_table[3] = 864  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L682 ---
        phase_table[3] = 889  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L688 ---
        phase_table[3] = 943  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L694 ---
        phase_table[3] = 967  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L700 ---
        phase_table[3] = 1022  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L706 ---
        phase_table[3] = 1067  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L712 ---
        phase_table[3] = 1118  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L718 ---
        phase_table[3] = 1201  # raw literal, not evaluated
        pass
        # --- L722 ---
        phase_table[3] = 1265  # raw literal, not evaluated
        pass
        # --- L726 ---
        phase_table[3] = 1319  # raw literal, not evaluated
        pass
        # --- L730 ---
        phase_table[3] = 1391  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L736 ---
        phase_table[3] = 1425  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L742 ---
        phase_table[3] = 1464  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L748 ---
        phase_table[3] = 1503  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L754 ---
        phase_table[3] = 1544  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L760 ---
        phase_table[3] = 1584  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L804 ---
        system_message(1623 /*" þ"*/)
        # --- L806 ---
        if not (((var[36] & 32) == 0)):
            goto L813
        # else: falls through here, rejoins L813
        var[36] = (var[36] + 32)
        # --- L813 ---
        if not (((var[36] & 32) > 0)):
            goto L820
        # else: falls through here, rejoins L820
        var[36] = (var[36] - 32)
        # --- L820 ---
        if not ((group_condition_ref_2(3, 1) and group_condition_ref_2(3, 2))):
            goto L1104
        # else: falls through here, rejoins L1111
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[40] = random_below(100)
        if not (((var[1] == 0) and (var[40] < 2))):
            goto L1097
        # else: falls through here, rejoins L1097
        var[1] = (var[1] + 1)
        phase_table[4] = 1641  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L843
            case 1: goto L847
            case 2: goto L851
            case 7: goto L855
            default: goto L859
        phase_table[4] = 1642  # raw literal, not evaluated
        pass
        # --- L847 ---
        phase_table[4] = 1677  # raw literal, not evaluated
        pass
        # --- L851 ---
        phase_table[4] = 1704  # raw literal, not evaluated
        pass
        # --- L855 ---
        phase_table[4] = 1743  # raw literal, not evaluated
        pass
        # --- L859 ---
        phase_table[4] = 1771  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L873 ---
        phase_table[5] = 1824  # raw literal, not evaluated
        var[41] = random_below(4)
        if not (((random_below(4) != 7) and (var[41] >= 3))):
            goto L886
        # else: falls through here, rejoins L886
        var[41] = random_below(3)
        # --- L886 ---
        switch(var[41]):
            case 0: goto L889
            case 1: goto L893
            case 3: goto L897
            case 4: goto L901
            case 5: goto L905
            case 6: goto L909
            case 7: goto L913
            default: goto L917
        phase_table[5] = 1825  # raw literal, not evaluated
        pass
        # --- L893 ---
        phase_table[5] = 1829  # raw literal, not evaluated
        pass
        # --- L897 ---
        phase_table[5] = 1840  # raw literal, not evaluated
        pass
        # --- L901 ---
        phase_table[5] = 1861  # raw literal, not evaluated
        pass
        # --- L905 ---
        phase_table[5] = 1888  # raw literal, not evaluated
        pass
        # --- L909 ---
        phase_table[5] = 1919  # raw literal, not evaluated
        pass
        # --- L913 ---
        phase_table[5] = 1948  # raw literal, not evaluated
        pass
        # --- L917 ---
        phase_table[5] = 1978  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L937 ---
        phase_table[6] = 1993  # raw literal, not evaluated
        switch(64):
            case 1: goto L943
            case 2: goto L949
            case 3: goto L955
            case 4: goto L961
            case 5: goto L967
            case 6: goto L973
            case 7: goto L979
            case 8: goto L985
            case 9: goto L991
            case 10: goto L997
            case 11: goto L1003
            case 12: goto L1009
            case 13: goto L1013
            case 14: goto L1017
            case 512: goto L1021
            case 32: goto L1027
            case 64: goto L1033
            case 128: goto L1039
            case 256: goto L1045
            default: goto L1051
        phase_table[6] = 1994  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L949 ---
        phase_table[6] = 2021  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L955 ---
        phase_table[6] = 2047  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L961 ---
        phase_table[6] = 2077  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L967 ---
        phase_table[6] = 2101  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L973 ---
        phase_table[6] = 2126  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L979 ---
        phase_table[6] = 2180  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L985 ---
        phase_table[6] = 2204  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L991 ---
        phase_table[6] = 2259  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L997 ---
        phase_table[6] = 2304  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1003 ---
        phase_table[6] = 2355  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1009 ---
        phase_table[6] = 2438  # raw literal, not evaluated
        pass
        # --- L1013 ---
        phase_table[6] = 2502  # raw literal, not evaluated
        pass
        # --- L1017 ---
        phase_table[6] = 2556  # raw literal, not evaluated
        pass
        # --- L1021 ---
        phase_table[6] = 2628  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1027 ---
        phase_table[6] = 2662  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1033 ---
        phase_table[6] = 2701  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1039 ---
        phase_table[6] = 2740  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1045 ---
        phase_table[6] = 2781  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1051 ---
        phase_table[6] = 2821  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1095 ---
        system_message(2860 /*" þ"*/)
        # --- L1097 ---
        if not (((var[36] & 64) == 0)):
            goto L1104
        # else: falls through here, rejoins L1104
        var[36] = (var[36] + 64)
        # --- L1104 ---
        if not (((var[36] & 64) > 0)):
            goto L1111
        # else: falls through here, rejoins L1111
        var[36] = (var[36] - 64)
        # --- L1111 ---
        if not ((group_condition_ref_2(4, 1) and group_condition_ref_2(4, 2))):
            goto L1395
        # else: falls through here, rejoins L1402
        unit[8] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[43] = random_below(100)
        if not (((var[1] == 0) and (var[43] < 2))):
            goto L1388
        # else: falls through here, rejoins L1388
        var[1] = (var[1] + 1)
        phase_table[7] = 2878  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1134
            case 1: goto L1138
            case 2: goto L1142
            case 7: goto L1146
            default: goto L1150
        phase_table[7] = 2879  # raw literal, not evaluated
        pass
        # --- L1138 ---
        phase_table[7] = 2914  # raw literal, not evaluated
        pass
        # --- L1142 ---
        phase_table[7] = 2941  # raw literal, not evaluated
        pass
        # --- L1146 ---
        phase_table[7] = 2980  # raw literal, not evaluated
        pass
        # --- L1150 ---
        phase_table[7] = 3008  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1164 ---
        phase_table[8] = 3061  # raw literal, not evaluated
        var[44] = random_below(4)
        if not (((random_below(4) != 7) and (var[44] >= 3))):
            goto L1177
        # else: falls through here, rejoins L1177
        var[44] = random_below(3)
        # --- L1177 ---
        switch(var[44]):
            case 0: goto L1180
            case 1: goto L1184
            case 3: goto L1188
            case 4: goto L1192
            case 5: goto L1196
            case 6: goto L1200
            case 7: goto L1204
            default: goto L1208
        phase_table[8] = 3062  # raw literal, not evaluated
        pass
        # --- L1184 ---
        phase_table[8] = 3066  # raw literal, not evaluated
        pass
        # --- L1188 ---
        phase_table[8] = 3077  # raw literal, not evaluated
        pass
        # --- L1192 ---
        phase_table[8] = 3098  # raw literal, not evaluated
        pass
        # --- L1196 ---
        phase_table[8] = 3125  # raw literal, not evaluated
        pass
        # --- L1200 ---
        phase_table[8] = 3156  # raw literal, not evaluated
        pass
        # --- L1204 ---
        phase_table[8] = 3185  # raw literal, not evaluated
        pass
        # --- L1208 ---
        phase_table[8] = 3215  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1228 ---
        phase_table[9] = 3230  # raw literal, not evaluated
        switch(128):
            case 1: goto L1234
            case 2: goto L1240
            case 3: goto L1246
            case 4: goto L1252
            case 5: goto L1258
            case 6: goto L1264
            case 7: goto L1270
            case 8: goto L1276
            case 9: goto L1282
            case 10: goto L1288
            case 11: goto L1294
            case 12: goto L1300
            case 13: goto L1304
            case 14: goto L1308
            case 512: goto L1312
            case 32: goto L1318
            case 64: goto L1324
            case 128: goto L1330
            case 256: goto L1336
            default: goto L1342
        phase_table[9] = 3231  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1240 ---
        phase_table[9] = 3258  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1246 ---
        phase_table[9] = 3284  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1252 ---
        phase_table[9] = 3314  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1258 ---
        phase_table[9] = 3338  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1264 ---
        phase_table[9] = 3363  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1270 ---
        phase_table[9] = 3417  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1276 ---
        phase_table[9] = 3441  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1282 ---
        phase_table[9] = 3496  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1288 ---
        phase_table[9] = 3541  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1294 ---
        phase_table[9] = 3592  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1300 ---
        phase_table[9] = 3675  # raw literal, not evaluated
        pass
        # --- L1304 ---
        phase_table[9] = 3739  # raw literal, not evaluated
        pass
        # --- L1308 ---
        phase_table[9] = 3793  # raw literal, not evaluated
        pass
        # --- L1312 ---
        phase_table[9] = 3865  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1318 ---
        phase_table[9] = 3899  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1324 ---
        phase_table[9] = 3938  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1330 ---
        phase_table[9] = 3977  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1336 ---
        phase_table[9] = 4018  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1342 ---
        phase_table[9] = 4058  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1386 ---
        system_message(4097 /*" þ"*/)
        # --- L1388 ---
        if not (((var[36] & 128) == 0)):
            goto L1395
        # else: falls through here, rejoins L1395
        var[36] = (var[36] + 128)
        # --- L1395 ---
        if not (((var[36] & 128) > 0)):
            goto L1402
        # else: falls through here, rejoins L1402
        var[36] = (var[36] - 128)
        # --- L1402 ---
        if not ((group_condition_ref_2(5, 1) and group_condition_ref_2(5, 2))):
            goto L1686
        # else: falls through here, rejoins L1693
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[46] = random_below(100)
        if not (((var[1] == 0) and (var[46] < 2))):
            goto L1679
        # else: falls through here, rejoins L1679
        var[1] = (var[1] + 1)
        phase_table[10] = 4115  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1425
            case 1: goto L1429
            case 2: goto L1433
            case 7: goto L1437
            default: goto L1441
        phase_table[10] = 4116  # raw literal, not evaluated
        pass
        # --- L1429 ---
        phase_table[10] = 4151  # raw literal, not evaluated
        pass
        # --- L1433 ---
        phase_table[10] = 4178  # raw literal, not evaluated
        pass
        # --- L1437 ---
        phase_table[10] = 4217  # raw literal, not evaluated
        pass
        # --- L1441 ---
        phase_table[10] = 4245  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1455 ---
        phase_table[11] = 4298  # raw literal, not evaluated
        var[47] = random_below(4)
        if not (((random_below(4) != 7) and (var[47] >= 3))):
            goto L1468
        # else: falls through here, rejoins L1468
        var[47] = random_below(3)
        # --- L1468 ---
        switch(var[47]):
            case 0: goto L1471
            case 1: goto L1475
            case 3: goto L1479
            case 4: goto L1483
            case 5: goto L1487
            case 6: goto L1491
            case 7: goto L1495
            default: goto L1499
        phase_table[11] = 4299  # raw literal, not evaluated
        pass
        # --- L1475 ---
        phase_table[11] = 4303  # raw literal, not evaluated
        pass
        # --- L1479 ---
        phase_table[11] = 4314  # raw literal, not evaluated
        pass
        # --- L1483 ---
        phase_table[11] = 4335  # raw literal, not evaluated
        pass
        # --- L1487 ---
        phase_table[11] = 4362  # raw literal, not evaluated
        pass
        # --- L1491 ---
        phase_table[11] = 4393  # raw literal, not evaluated
        pass
        # --- L1495 ---
        phase_table[11] = 4422  # raw literal, not evaluated
        pass
        # --- L1499 ---
        phase_table[11] = 4452  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1519 ---
        phase_table[12] = 4467  # raw literal, not evaluated
        switch(256):
            case 1: goto L1525
            case 2: goto L1531
            case 3: goto L1537
            case 4: goto L1543
            case 5: goto L1549
            case 6: goto L1555
            case 7: goto L1561
            case 8: goto L1567
            case 9: goto L1573
            case 10: goto L1579
            case 11: goto L1585
            case 12: goto L1591
            case 13: goto L1595
            case 14: goto L1599
            case 512: goto L1603
            case 32: goto L1609
            case 64: goto L1615
            case 128: goto L1621
            case 256: goto L1627
            default: goto L1633
        phase_table[12] = 4468  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1531 ---
        phase_table[12] = 4495  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1537 ---
        phase_table[12] = 4521  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1543 ---
        phase_table[12] = 4551  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1549 ---
        phase_table[12] = 4575  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1555 ---
        phase_table[12] = 4600  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1561 ---
        phase_table[12] = 4654  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1567 ---
        phase_table[12] = 4678  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1573 ---
        phase_table[12] = 4733  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1579 ---
        phase_table[12] = 4778  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1585 ---
        phase_table[12] = 4829  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1591 ---
        phase_table[12] = 4912  # raw literal, not evaluated
        pass
        # --- L1595 ---
        phase_table[12] = 4976  # raw literal, not evaluated
        pass
        # --- L1599 ---
        phase_table[12] = 5030  # raw literal, not evaluated
        pass
        # --- L1603 ---
        phase_table[12] = 5102  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1609 ---
        phase_table[12] = 5136  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1615 ---
        phase_table[12] = 5175  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1621 ---
        phase_table[12] = 5214  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1627 ---
        phase_table[12] = 5255  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1633 ---
        phase_table[12] = 5295  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1677 ---
        system_message(5334 /*" þ
"*/)
        # --- L1679 ---
        if not (((var[36] & 256) == 0)):
            goto L1686
        # else: falls through here, rejoins L1686
        var[36] = (var[36] + 256)
        # --- L1686 ---
        if not (((var[36] & 256) > 0)):
            goto L1693
        # else: falls through here, rejoins L1693
        var[36] = (var[36] - 256)
        # --- L1693 ---
        if not ((group_condition_ref_2(6, 1) and group_condition_ref_2(6, 2))):
            goto L1977
        # else: falls through here, rejoins L1984
        unit[10] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[49] = random_below(100)
        if not (((var[1] == 0) and (var[49] < 2))):
            goto L1970
        # else: falls through here, rejoins L1970
        var[1] = (var[1] + 1)
        phase_table[13] = 5352  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1716
            case 1: goto L1720
            case 2: goto L1724
            case 7: goto L1728
            default: goto L1732
        phase_table[13] = 5353  # raw literal, not evaluated
        pass
        # --- L1720 ---
        phase_table[13] = 5388  # raw literal, not evaluated
        pass
        # --- L1724 ---
        phase_table[13] = 5415  # raw literal, not evaluated
        pass
        # --- L1728 ---
        phase_table[13] = 5454  # raw literal, not evaluated
        pass
        # --- L1732 ---
        phase_table[13] = 5482  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1746 ---
        phase_table[14] = 5535  # raw literal, not evaluated
        var[50] = random_below(4)
        if not (((random_below(4) != 7) and (var[50] >= 3))):
            goto L1759
        # else: falls through here, rejoins L1759
        var[50] = random_below(3)
        # --- L1759 ---
        switch(var[50]):
            case 0: goto L1762
            case 1: goto L1766
            case 3: goto L1770
            case 4: goto L1774
            case 5: goto L1778
            case 6: goto L1782
            case 7: goto L1786
            default: goto L1790
        phase_table[14] = 5536  # raw literal, not evaluated
        pass
        # --- L1766 ---
        phase_table[14] = 5540  # raw literal, not evaluated
        pass
        # --- L1770 ---
        phase_table[14] = 5551  # raw literal, not evaluated
        pass
        # --- L1774 ---
        phase_table[14] = 5572  # raw literal, not evaluated
        pass
        # --- L1778 ---
        phase_table[14] = 5599  # raw literal, not evaluated
        pass
        # --- L1782 ---
        phase_table[14] = 5630  # raw literal, not evaluated
        pass
        # --- L1786 ---
        phase_table[14] = 5659  # raw literal, not evaluated
        pass
        # --- L1790 ---
        phase_table[14] = 5689  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1810 ---
        phase_table[15] = 5704  # raw literal, not evaluated
        switch(2048):
            case 1: goto L1816
            case 2: goto L1822
            case 3: goto L1828
            case 4: goto L1834
            case 5: goto L1840
            case 6: goto L1846
            case 7: goto L1852
            case 8: goto L1858
            case 9: goto L1864
            case 10: goto L1870
            case 11: goto L1876
            case 12: goto L1882
            case 13: goto L1886
            case 14: goto L1890
            case 512: goto L1894
            case 32: goto L1900
            case 64: goto L1906
            case 128: goto L1912
            case 256: goto L1918
            default: goto L1924
        phase_table[15] = 5705  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1822 ---
        phase_table[15] = 5732  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1828 ---
        phase_table[15] = 5758  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1834 ---
        phase_table[15] = 5788  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1840 ---
        phase_table[15] = 5812  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1846 ---
        phase_table[15] = 5837  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1852 ---
        phase_table[15] = 5891  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1858 ---
        phase_table[15] = 5915  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1864 ---
        phase_table[15] = 5970  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1870 ---
        phase_table[15] = 6015  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1876 ---
        phase_table[15] = 6066  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1882 ---
        phase_table[15] = 6149  # raw literal, not evaluated
        pass
        # --- L1886 ---
        phase_table[15] = 6213  # raw literal, not evaluated
        pass
        # --- L1890 ---
        phase_table[15] = 6267  # raw literal, not evaluated
        pass
        # --- L1894 ---
        phase_table[15] = 6339  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1900 ---
        phase_table[15] = 6373  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1906 ---
        phase_table[15] = 6412  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1912 ---
        phase_table[15] = 6451  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1918 ---
        phase_table[15] = 6492  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1924 ---
        phase_table[15] = 6532  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1968 ---
        system_message(6571 /*" þ"*/)
        # --- L1970 ---
        if not (((var[36] & 2048) == 0)):
            goto L1977
        # else: falls through here, rejoins L1977
        var[36] = (var[36] + 2048)
        # --- L1977 ---
        if not (((var[36] & 2048) > 0)):
            goto L1984
        # else: falls through here, rejoins L1984
        var[36] = (var[36] - 2048)
        # --- L1984 ---
        if not ((group_condition_ref_2(7, 1) and group_condition_ref_2(7, 2))):
            goto L2268
        # else: falls through here, rejoins L2275
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[52] = random_below(100)
        if not (((var[1] == 0) and (var[52] < 2))):
            goto L2261
        # else: falls through here, rejoins L2261
        var[1] = (var[1] + 1)
        phase_table[16] = 6589  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2007
            case 1: goto L2011
            case 2: goto L2015
            case 7: goto L2019
            default: goto L2023
        phase_table[16] = 6590  # raw literal, not evaluated
        pass
        # --- L2011 ---
        phase_table[16] = 6625  # raw literal, not evaluated
        pass
        # --- L2015 ---
        phase_table[16] = 6652  # raw literal, not evaluated
        pass
        # --- L2019 ---
        phase_table[16] = 6691  # raw literal, not evaluated
        pass
        # --- L2023 ---
        phase_table[16] = 6719  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2037 ---
        phase_table[17] = 6772  # raw literal, not evaluated
        var[53] = random_below(4)
        if not (((random_below(4) != 7) and (var[53] >= 3))):
            goto L2050
        # else: falls through here, rejoins L2050
        var[53] = random_below(3)
        # --- L2050 ---
        switch(var[53]):
            case 0: goto L2053
            case 1: goto L2057
            case 3: goto L2061
            case 4: goto L2065
            case 5: goto L2069
            case 6: goto L2073
            case 7: goto L2077
            default: goto L2081
        phase_table[17] = 6773  # raw literal, not evaluated
        pass
        # --- L2057 ---
        phase_table[17] = 6777  # raw literal, not evaluated
        pass
        # --- L2061 ---
        phase_table[17] = 6788  # raw literal, not evaluated
        pass
        # --- L2065 ---
        phase_table[17] = 6809  # raw literal, not evaluated
        pass
        # --- L2069 ---
        phase_table[17] = 6836  # raw literal, not evaluated
        pass
        # --- L2073 ---
        phase_table[17] = 6867  # raw literal, not evaluated
        pass
        # --- L2077 ---
        phase_table[17] = 6896  # raw literal, not evaluated
        pass
        # --- L2081 ---
        phase_table[17] = 6926  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2101 ---
        phase_table[18] = 6941  # raw literal, not evaluated
        switch(4096):
            case 1: goto L2107
            case 2: goto L2113
            case 3: goto L2119
            case 4: goto L2125
            case 5: goto L2131
            case 6: goto L2137
            case 7: goto L2143
            case 8: goto L2149
            case 9: goto L2155
            case 10: goto L2161
            case 11: goto L2167
            case 12: goto L2173
            case 13: goto L2177
            case 14: goto L2181
            case 512: goto L2185
            case 32: goto L2191
            case 64: goto L2197
            case 128: goto L2203
            case 256: goto L2209
            default: goto L2215
        phase_table[18] = 6942  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2113 ---
        phase_table[18] = 6969  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2119 ---
        phase_table[18] = 6995  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2125 ---
        phase_table[18] = 7025  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2131 ---
        phase_table[18] = 7049  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2137 ---
        phase_table[18] = 7074  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2143 ---
        phase_table[18] = 7128  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2149 ---
        phase_table[18] = 7152  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2155 ---
        phase_table[18] = 7207  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2161 ---
        phase_table[18] = 7252  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2167 ---
        phase_table[18] = 7303  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2173 ---
        phase_table[18] = 7386  # raw literal, not evaluated
        pass
        # --- L2177 ---
        phase_table[18] = 7450  # raw literal, not evaluated
        pass
        # --- L2181 ---
        phase_table[18] = 7504  # raw literal, not evaluated
        pass
        # --- L2185 ---
        phase_table[18] = 7576  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2191 ---
        phase_table[18] = 7610  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2197 ---
        phase_table[18] = 7649  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2203 ---
        phase_table[18] = 7688  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2209 ---
        phase_table[18] = 7729  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2215 ---
        phase_table[18] = 7769  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2259 ---
        system_message(7808 /*" þ"*/)
        # --- L2261 ---
        if not (((var[36] & 4096) == 0)):
            goto L2268
        # else: falls through here, rejoins L2268
        var[36] = (var[36] + 4096)
        # --- L2268 ---
        if not (((var[36] & 4096) > 0)):
            goto L2275
        # else: falls through here, rejoins L2275
        var[36] = (var[36] - 4096)
        # --- L2275 ---
        var[55] = 0
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L2570
        # --- L2284 ---
        if not ((set_unit_behavior(9, 12) > 0)):
            goto L2565
        # else: falls through here, rejoins L2565
        var[56] = random_below(100)
        if not (((var[1] == 0) and (var[56] < 4))):
            goto L2558
        # else: falls through here, rejoins L2558
        var[1] = (var[1] + 1)
        phase_table[19] = 7826  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2304
            case 1: goto L2308
            case 2: goto L2312
            case 7: goto L2316
            default: goto L2320
        phase_table[19] = 7827  # raw literal, not evaluated
        pass
        # --- L2308 ---
        phase_table[19] = 7862  # raw literal, not evaluated
        pass
        # --- L2312 ---
        phase_table[19] = 7889  # raw literal, not evaluated
        pass
        # --- L2316 ---
        phase_table[19] = 7928  # raw literal, not evaluated
        pass
        # --- L2320 ---
        phase_table[19] = 7956  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2334 ---
        phase_table[20] = 8009  # raw literal, not evaluated
        var[57] = random_below(1)
        if not (((random_below(4) != 7) and (var[57] >= 3))):
            goto L2347
        # else: falls through here, rejoins L2347
        var[57] = random_below(3)
        # --- L2347 ---
        switch(var[57]):
            case 0: goto L2350
            case 1: goto L2354
            case 3: goto L2358
            case 4: goto L2362
            case 5: goto L2366
            case 6: goto L2370
            case 7: goto L2374
            default: goto L2378
        phase_table[20] = 8010  # raw literal, not evaluated
        pass
        # --- L2354 ---
        phase_table[20] = 8014  # raw literal, not evaluated
        pass
        # --- L2358 ---
        phase_table[20] = 8025  # raw literal, not evaluated
        pass
        # --- L2362 ---
        phase_table[20] = 8046  # raw literal, not evaluated
        pass
        # --- L2366 ---
        phase_table[20] = 8073  # raw literal, not evaluated
        pass
        # --- L2370 ---
        phase_table[20] = 8104  # raw literal, not evaluated
        pass
        # --- L2374 ---
        phase_table[20] = 8133  # raw literal, not evaluated
        pass
        # --- L2378 ---
        phase_table[20] = 8163  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2398 ---
        phase_table[21] = 8178  # raw literal, not evaluated
        switch(10):
            case 1: goto L2404
            case 2: goto L2410
            case 3: goto L2416
            case 4: goto L2422
            case 5: goto L2428
            case 6: goto L2434
            case 7: goto L2440
            case 8: goto L2446
            case 9: goto L2452
            case 10: goto L2458
            case 11: goto L2464
            case 12: goto L2470
            case 13: goto L2474
            case 14: goto L2478
            case 512: goto L2482
            case 32: goto L2488
            case 64: goto L2494
            case 128: goto L2500
            case 256: goto L2506
            default: goto L2512
        phase_table[21] = 8179  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2410 ---
        phase_table[21] = 8206  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2416 ---
        phase_table[21] = 8232  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2422 ---
        phase_table[21] = 8262  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2428 ---
        phase_table[21] = 8286  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2434 ---
        phase_table[21] = 8311  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2440 ---
        phase_table[21] = 8365  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2446 ---
        phase_table[21] = 8389  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2452 ---
        phase_table[21] = 8444  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2458 ---
        phase_table[21] = 8489  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2464 ---
        phase_table[21] = 8540  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2470 ---
        phase_table[21] = 8623  # raw literal, not evaluated
        pass
        # --- L2474 ---
        phase_table[21] = 8687  # raw literal, not evaluated
        pass
        # --- L2478 ---
        phase_table[21] = 8741  # raw literal, not evaluated
        pass
        # --- L2482 ---
        phase_table[21] = 8813  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2488 ---
        phase_table[21] = 8847  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2494 ---
        phase_table[21] = 8886  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2500 ---
        phase_table[21] = 8925  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2506 ---
        phase_table[21] = 8966  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2512 ---
        phase_table[21] = 9006  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2556 ---
        system_message(9045 /*" þ"*/)
        # --- L2558 ---
        if not (((set_unit_behavior(8, 12) & var[36]) == 0)):
            goto L2565
        # else: falls through here, rejoins L2565
        var[36] = (var[36] + (set_unit_behavior(8, 12) & 7136))
        # --- L2565 ---
        unit[12] = next_unit_in_group(unit[12], group=2)
        goto L2284
        # --- L2570 ---
        unit[13] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 13):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L2604
        # --- L2576 ---
        if not (group_condition_ref_2(9, 2)):
            goto L2583
        # else: falls through here, rejoins L2590
        unit[13].attr8 = 2
        # --- L2583 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2590
        # else: falls through here, rejoins L2590
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L2590 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2599
        # else: falls through here, rejoins L2599
        var[55] = (var[55] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2367] - dead end, not decoded further (other branches continue independently)
        # --- L2599 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        goto L2576
        # --- L2604 ---
        if not (group_condition_ref_2(10, 2)):
            goto L2611
        # else: falls through here, rejoins L2618
        unit[13].attr8 = 2
        # --- L2611 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2618
        # else: falls through here, rejoins L2618
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L2618 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L2627
        # else: falls through here, rejoins L2627
        var[55] = (var[55] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x237a] - dead end, not decoded further (other branches continue independently)
        # --- L2627 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        var[59] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L5790
        # --- L2639 ---
        if not ((set_unit_behavior(5, 12) < 60)):
            goto L2648
        # else: falls through here, rejoins L5785
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L2648 ---
        switch((set_unit_behavior(8, 12) & 15)):
            case 0: goto L2651
            case 1: goto L2934
            case 2: goto L3767
            case 3: goto L4326
            case 4: goto L4336
            case 5: goto L4381
            case 10: goto L4666
            case 11: goto L4676
            case 12: goto L5074
            case 13: goto L5075
            case 14: goto L5370
            case 15: goto L5371
            default: goto L5757
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L2933
        # else: falls through here, rejoins L2933
        var[60] = random_below(100)
        if not (((var[1] == 0) and (var[60] < 40))):
            goto L2925
        # else: falls through here, rejoins L2925
        var[1] = (var[1] + 1)
        phase_table[22] = 9101  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2671
            case 1: goto L2675
            case 2: goto L2679
            case 7: goto L2683
            default: goto L2687
        phase_table[22] = 9102  # raw literal, not evaluated
        pass
        # --- L2675 ---
        phase_table[22] = 9137  # raw literal, not evaluated
        pass
        # --- L2679 ---
        phase_table[22] = 9164  # raw literal, not evaluated
        pass
        # --- L2683 ---
        phase_table[22] = 9203  # raw literal, not evaluated
        pass
        # --- L2687 ---
        phase_table[22] = 9231  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2701 ---
        phase_table[23] = 9284  # raw literal, not evaluated
        var[61] = random_below(4)
        if not (((random_below(1) != 7) and (var[61] >= 3))):
            goto L2714
        # else: falls through here, rejoins L2714
        var[61] = random_below(3)
        # --- L2714 ---
        switch(var[61]):
            case 0: goto L2717
            case 1: goto L2721
            case 3: goto L2725
            case 4: goto L2729
            case 5: goto L2733
            case 6: goto L2737
            case 7: goto L2741
            default: goto L2745
        phase_table[23] = 9285  # raw literal, not evaluated
        pass
        # --- L2721 ---
        phase_table[23] = 9289  # raw literal, not evaluated
        pass
        # --- L2725 ---
        phase_table[23] = 9300  # raw literal, not evaluated
        pass
        # --- L2729 ---
        phase_table[23] = 9321  # raw literal, not evaluated
        pass
        # --- L2733 ---
        phase_table[23] = 9348  # raw literal, not evaluated
        pass
        # --- L2737 ---
        phase_table[23] = 9379  # raw literal, not evaluated
        pass
        # --- L2741 ---
        phase_table[23] = 9408  # raw literal, not evaluated
        pass
        # --- L2745 ---
        phase_table[23] = 9438  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2765 ---
        phase_table[24] = 9453  # raw literal, not evaluated
        switch(8):
            case 1: goto L2771
            case 2: goto L2777
            case 3: goto L2783
            case 4: goto L2789
            case 5: goto L2795
            case 6: goto L2801
            case 7: goto L2807
            case 8: goto L2813
            case 9: goto L2819
            case 10: goto L2825
            case 11: goto L2831
            case 12: goto L2837
            case 13: goto L2841
            case 14: goto L2845
            case 512: goto L2849
            case 32: goto L2855
            case 64: goto L2861
            case 128: goto L2867
            case 256: goto L2873
            default: goto L2879
        phase_table[24] = 9454  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2777 ---
        phase_table[24] = 9481  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2783 ---
        phase_table[24] = 9507  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2789 ---
        phase_table[24] = 9537  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2795 ---
        phase_table[24] = 9561  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2801 ---
        phase_table[24] = 9586  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2807 ---
        phase_table[24] = 9640  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2813 ---
        phase_table[24] = 9664  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2819 ---
        phase_table[24] = 9719  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2825 ---
        phase_table[24] = 9764  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2831 ---
        phase_table[24] = 9815  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2837 ---
        phase_table[24] = 9898  # raw literal, not evaluated
        pass
        # --- L2841 ---
        phase_table[24] = 9962  # raw literal, not evaluated
        pass
        # --- L2845 ---
        phase_table[24] = 10016  # raw literal, not evaluated
        pass
        # --- L2849 ---
        phase_table[24] = 10088  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2855 ---
        phase_table[24] = 10122  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2861 ---
        phase_table[24] = 10161  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2867 ---
        phase_table[24] = 10200  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2873 ---
        phase_table[24] = 10241  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2879 ---
        phase_table[24] = 10281  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2923 ---
        system_message(10320 /*" þ"*/)
        # --- L2925 ---
        move_unit(unit[12], priority=var[59], dest_type=0, dest_arg=0)
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        # --- L2933 ---
        pass
        # --- L2934 ---
        if not ((group_condition_ref_2(11, 1) or (set_unit_behavior(9, 12) != 0))):
            goto L3217
        # else: falls through here, rejoins L3766
        if not ((set_unit_behavior(7, 12) != 6)):
            goto L3217
        # else: falls through here, rejoins L3217
        var[63] = random_below(100)
        if not (((var[1] == 0) and (var[63] < 40))):
            goto L3212
        # else: falls through here, rejoins L3212
        var[1] = (var[1] + 1)
        phase_table[25] = 10338  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L2958
            case 1: goto L2962
            case 2: goto L2966
            case 7: goto L2970
            default: goto L2974
        phase_table[25] = 10339  # raw literal, not evaluated
        pass
        # --- L2962 ---
        phase_table[25] = 10374  # raw literal, not evaluated
        pass
        # --- L2966 ---
        phase_table[25] = 10401  # raw literal, not evaluated
        pass
        # --- L2970 ---
        phase_table[25] = 10440  # raw literal, not evaluated
        pass
        # --- L2974 ---
        phase_table[25] = 10468  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2988 ---
        phase_table[26] = 10521  # raw literal, not evaluated
        var[64] = random_below(4)
        if not (((random_below(1) != 7) and (var[64] >= 3))):
            goto L3001
        # else: falls through here, rejoins L3001
        var[64] = random_below(3)
        # --- L3001 ---
        switch(var[64]):
            case 0: goto L3004
            case 1: goto L3008
            case 3: goto L3012
            case 4: goto L3016
            case 5: goto L3020
            case 6: goto L3024
            case 7: goto L3028
            default: goto L3032
        phase_table[26] = 10522  # raw literal, not evaluated
        pass
        # --- L3008 ---
        phase_table[26] = 10526  # raw literal, not evaluated
        pass
        # --- L3012 ---
        phase_table[26] = 10537  # raw literal, not evaluated
        pass
        # --- L3016 ---
        phase_table[26] = 10558  # raw literal, not evaluated
        pass
        # --- L3020 ---
        phase_table[26] = 10585  # raw literal, not evaluated
        pass
        # --- L3024 ---
        phase_table[26] = 10616  # raw literal, not evaluated
        pass
        # --- L3028 ---
        phase_table[26] = 10645  # raw literal, not evaluated
        pass
        # --- L3032 ---
        phase_table[26] = 10675  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3052 ---
        phase_table[27] = 10690  # raw literal, not evaluated
        switch(3):
            case 1: goto L3058
            case 2: goto L3064
            case 3: goto L3070
            case 4: goto L3076
            case 5: goto L3082
            case 6: goto L3088
            case 7: goto L3094
            case 8: goto L3100
            case 9: goto L3106
            case 10: goto L3112
            case 11: goto L3118
            case 12: goto L3124
            case 13: goto L3128
            case 14: goto L3132
            case 512: goto L3136
            case 32: goto L3142
            case 64: goto L3148
            case 128: goto L3154
            case 256: goto L3160
            default: goto L3166
        phase_table[27] = 10691  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3064 ---
        phase_table[27] = 10718  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3070 ---
        phase_table[27] = 10744  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3076 ---
        phase_table[27] = 10774  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3082 ---
        phase_table[27] = 10798  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3088 ---
        phase_table[27] = 10823  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3094 ---
        phase_table[27] = 10877  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3100 ---
        phase_table[27] = 10901  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3106 ---
        phase_table[27] = 10956  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3112 ---
        phase_table[27] = 11001  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3118 ---
        phase_table[27] = 11052  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3124 ---
        phase_table[27] = 11135  # raw literal, not evaluated
        pass
        # --- L3128 ---
        phase_table[27] = 11199  # raw literal, not evaluated
        pass
        # --- L3132 ---
        phase_table[27] = 11253  # raw literal, not evaluated
        pass
        # --- L3136 ---
        phase_table[27] = 11325  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3142 ---
        phase_table[27] = 11359  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3148 ---
        phase_table[27] = 11398  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3154 ---
        phase_table[27] = 11437  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3160 ---
        phase_table[27] = 11478  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3166 ---
        phase_table[27] = 11518  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3210 ---
        system_message(11557 /*" þ"*/)
        # --- L3212 ---
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L3217 ---
        if not ((set_unit_behavior(7, 12) != 2)):
            goto L3496
        # else: falls through here, rejoins L3766
        move_unit(unit[12], priority=2, dest_type=0, dest_arg=0)
        var[66] = random_below(100)
        if not (((var[1] == 0) and (var[66] < 4))):
            goto L3496
        # else: falls through here, rejoins L3496
        var[1] = (var[1] + 1)
        phase_table[28] = 11575  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3242
            case 1: goto L3246
            case 2: goto L3250
            case 7: goto L3254
            default: goto L3258
        phase_table[28] = 11576  # raw literal, not evaluated
        pass
        # --- L3246 ---
        phase_table[28] = 11611  # raw literal, not evaluated
        pass
        # --- L3250 ---
        phase_table[28] = 11638  # raw literal, not evaluated
        pass
        # --- L3254 ---
        phase_table[28] = 11677  # raw literal, not evaluated
        pass
        # --- L3258 ---
        phase_table[28] = 11705  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3272 ---
        phase_table[29] = 11758  # raw literal, not evaluated
        var[67] = random_below(4)
        if not (((random_below(1) != 7) and (var[67] >= 3))):
            goto L3285
        # else: falls through here, rejoins L3285
        var[67] = random_below(3)
        # --- L3285 ---
        switch(var[67]):
            case 0: goto L3288
            case 1: goto L3292
            case 3: goto L3296
            case 4: goto L3300
            case 5: goto L3304
            case 6: goto L3308
            case 7: goto L3312
            default: goto L3316
        phase_table[29] = 11759  # raw literal, not evaluated
        pass
        # --- L3292 ---
        phase_table[29] = 11763  # raw literal, not evaluated
        pass
        # --- L3296 ---
        phase_table[29] = 11774  # raw literal, not evaluated
        pass
        # --- L3300 ---
        phase_table[29] = 11795  # raw literal, not evaluated
        pass
        # --- L3304 ---
        phase_table[29] = 11822  # raw literal, not evaluated
        pass
        # --- L3308 ---
        phase_table[29] = 11853  # raw literal, not evaluated
        pass
        # --- L3312 ---
        phase_table[29] = 11882  # raw literal, not evaluated
        pass
        # --- L3316 ---
        phase_table[29] = 11912  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3336 ---
        phase_table[30] = 11927  # raw literal, not evaluated
        switch(2):
            case 1: goto L3342
            case 2: goto L3348
            case 3: goto L3354
            case 4: goto L3360
            case 5: goto L3366
            case 6: goto L3372
            case 7: goto L3378
            case 8: goto L3384
            case 9: goto L3390
            case 10: goto L3396
            case 11: goto L3402
            case 12: goto L3408
            case 13: goto L3412
            case 14: goto L3416
            case 512: goto L3420
            case 32: goto L3426
            case 64: goto L3432
            case 128: goto L3438
            case 256: goto L3444
            default: goto L3450
        phase_table[30] = 11928  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3348 ---
        phase_table[30] = 11955  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3354 ---
        phase_table[30] = 11981  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3360 ---
        phase_table[30] = 12011  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3366 ---
        phase_table[30] = 12035  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3372 ---
        phase_table[30] = 12060  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3378 ---
        phase_table[30] = 12114  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3384 ---
        phase_table[30] = 12138  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3390 ---
        phase_table[30] = 12193  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3396 ---
        phase_table[30] = 12238  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3402 ---
        phase_table[30] = 12289  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3408 ---
        phase_table[30] = 12372  # raw literal, not evaluated
        pass
        # --- L3412 ---
        phase_table[30] = 12436  # raw literal, not evaluated
        pass
        # --- L3416 ---
        phase_table[30] = 12490  # raw literal, not evaluated
        pass
        # --- L3420 ---
        phase_table[30] = 12562  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3426 ---
        phase_table[30] = 12596  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3432 ---
        phase_table[30] = 12635  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3438 ---
        phase_table[30] = 12674  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3444 ---
        phase_table[30] = 12715  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3450 ---
        phase_table[30] = 12755  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3494 ---
        system_message(12794 /*" þ"*/)
        # --- L3496 ---
        var[69] = random_below(100)
        if not (((var[1] == 0) and (var[69] < 4))):
            goto L3766
        # else: falls through here, rejoins L3766
        var[1] = (var[1] + 1)
        phase_table[31] = 12812  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3512
            case 1: goto L3516
            case 2: goto L3520
            case 7: goto L3524
            default: goto L3528
        phase_table[31] = 12813  # raw literal, not evaluated
        pass
        # --- L3516 ---
        phase_table[31] = 12848  # raw literal, not evaluated
        pass
        # --- L3520 ---
        phase_table[31] = 12875  # raw literal, not evaluated
        pass
        # --- L3524 ---
        phase_table[31] = 12914  # raw literal, not evaluated
        pass
        # --- L3528 ---
        phase_table[31] = 12942  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3542 ---
        phase_table[32] = 12995  # raw literal, not evaluated
        var[70] = random_below(4)
        if not (((random_below(1) != 7) and (var[70] >= 3))):
            goto L3555
        # else: falls through here, rejoins L3555
        var[70] = random_below(3)
        # --- L3555 ---
        switch(var[70]):
            case 0: goto L3558
            case 1: goto L3562
            case 3: goto L3566
            case 4: goto L3570
            case 5: goto L3574
            case 6: goto L3578
            case 7: goto L3582
            default: goto L3586
        phase_table[32] = 12996  # raw literal, not evaluated
        pass
        # --- L3562 ---
        phase_table[32] = 13000  # raw literal, not evaluated
        pass
        # --- L3566 ---
        phase_table[32] = 13011  # raw literal, not evaluated
        pass
        # --- L3570 ---
        phase_table[32] = 13032  # raw literal, not evaluated
        pass
        # --- L3574 ---
        phase_table[32] = 13059  # raw literal, not evaluated
        pass
        # --- L3578 ---
        phase_table[32] = 13090  # raw literal, not evaluated
        pass
        # --- L3582 ---
        phase_table[32] = 13119  # raw literal, not evaluated
        pass
        # --- L3586 ---
        phase_table[32] = 13149  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3606 ---
        phase_table[33] = 13164  # raw literal, not evaluated
        switch(1):
            case 1: goto L3612
            case 2: goto L3618
            case 3: goto L3624
            case 4: goto L3630
            case 5: goto L3636
            case 6: goto L3642
            case 7: goto L3648
            case 8: goto L3654
            case 9: goto L3660
            case 10: goto L3666
            case 11: goto L3672
            case 12: goto L3678
            case 13: goto L3682
            case 14: goto L3686
            case 512: goto L3690
            case 32: goto L3696
            case 64: goto L3702
            case 128: goto L3708
            case 256: goto L3714
            default: goto L3720
        phase_table[33] = 13165  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3618 ---
        phase_table[33] = 13192  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3624 ---
        phase_table[33] = 13218  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3630 ---
        phase_table[33] = 13248  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3636 ---
        phase_table[33] = 13272  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3642 ---
        phase_table[33] = 13297  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3648 ---
        phase_table[33] = 13351  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3654 ---
        phase_table[33] = 13375  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3660 ---
        phase_table[33] = 13430  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3666 ---
        phase_table[33] = 13475  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3672 ---
        phase_table[33] = 13526  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3678 ---
        phase_table[33] = 13609  # raw literal, not evaluated
        pass
        # --- L3682 ---
        phase_table[33] = 13673  # raw literal, not evaluated
        pass
        # --- L3686 ---
        phase_table[33] = 13727  # raw literal, not evaluated
        pass
        # --- L3690 ---
        phase_table[33] = 13799  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3696 ---
        phase_table[33] = 13833  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3702 ---
        phase_table[33] = 13872  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3708 ---
        phase_table[33] = 13911  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3714 ---
        phase_table[33] = 13952  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3720 ---
        phase_table[33] = 13992  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3764 ---
        system_message(14031 /*" þ"*/)
        # --- L3766 ---
        pass
        # --- L3767 ---
        if not (((var[36] & 512) > 0)):
            goto L4046
        # else: falls through here, rejoins L4325
        var[72] = random_below(100)
        if not (((var[1] == 0) and (var[72] < 4))):
            goto L4041
        # else: falls through here, rejoins L4041
        var[1] = (var[1] + 1)
        phase_table[34] = 14049  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3787
            case 1: goto L3791
            case 2: goto L3795
            case 7: goto L3799
            default: goto L3803
        phase_table[34] = 14050  # raw literal, not evaluated
        pass
        # --- L3791 ---
        phase_table[34] = 14085  # raw literal, not evaluated
        pass
        # --- L3795 ---
        phase_table[34] = 14112  # raw literal, not evaluated
        pass
        # --- L3799 ---
        phase_table[34] = 14151  # raw literal, not evaluated
        pass
        # --- L3803 ---
        phase_table[34] = 14179  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3817 ---
        phase_table[35] = 14232  # raw literal, not evaluated
        var[73] = random_below(4)
        if not (((random_below(1) != 7) and (var[73] >= 3))):
            goto L3830
        # else: falls through here, rejoins L3830
        var[73] = random_below(3)
        # --- L3830 ---
        switch(var[73]):
            case 0: goto L3833
            case 1: goto L3837
            case 3: goto L3841
            case 4: goto L3845
            case 5: goto L3849
            case 6: goto L3853
            case 7: goto L3857
            default: goto L3861
        phase_table[35] = 14233  # raw literal, not evaluated
        pass
        # --- L3837 ---
        phase_table[35] = 14237  # raw literal, not evaluated
        pass
        # --- L3841 ---
        phase_table[35] = 14248  # raw literal, not evaluated
        pass
        # --- L3845 ---
        phase_table[35] = 14269  # raw literal, not evaluated
        pass
        # --- L3849 ---
        phase_table[35] = 14296  # raw literal, not evaluated
        pass
        # --- L3853 ---
        phase_table[35] = 14327  # raw literal, not evaluated
        pass
        # --- L3857 ---
        phase_table[35] = 14356  # raw literal, not evaluated
        pass
        # --- L3861 ---
        phase_table[35] = 14386  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3881 ---
        phase_table[36] = 14401  # raw literal, not evaluated
        switch(4):
            case 1: goto L3887
            case 2: goto L3893
            case 3: goto L3899
            case 4: goto L3905
            case 5: goto L3911
            case 6: goto L3917
            case 7: goto L3923
            case 8: goto L3929
            case 9: goto L3935
            case 10: goto L3941
            case 11: goto L3947
            case 12: goto L3953
            case 13: goto L3957
            case 14: goto L3961
            case 512: goto L3965
            case 32: goto L3971
            case 64: goto L3977
            case 128: goto L3983
            case 256: goto L3989
            default: goto L3995
        phase_table[36] = 14402  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3893 ---
        phase_table[36] = 14429  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3899 ---
        phase_table[36] = 14455  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3905 ---
        phase_table[36] = 14485  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3911 ---
        phase_table[36] = 14509  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3917 ---
        phase_table[36] = 14534  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3923 ---
        phase_table[36] = 14588  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3929 ---
        phase_table[36] = 14612  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3935 ---
        phase_table[36] = 14667  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3941 ---
        phase_table[36] = 14712  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3947 ---
        phase_table[36] = 14763  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3953 ---
        phase_table[36] = 14846  # raw literal, not evaluated
        pass
        # --- L3957 ---
        phase_table[36] = 14910  # raw literal, not evaluated
        pass
        # --- L3961 ---
        phase_table[36] = 14964  # raw literal, not evaluated
        pass
        # --- L3965 ---
        phase_table[36] = 15036  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3971 ---
        phase_table[36] = 15070  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3977 ---
        phase_table[36] = 15109  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3983 ---
        phase_table[36] = 15148  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3989 ---
        phase_table[36] = 15189  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3995 ---
        phase_table[36] = 15229  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4039 ---
        system_message(15268 /*" þ\""*/)
        # --- L4041 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4046 ---
        if not (((var[36] & 128) > 0)):
            goto L4325
        # else: falls through here, rejoins L4325
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=4)
        var[75] = random_below(100)
        if not (((var[1] == 0) and (var[75] < 4))):
            goto L4325
        # else: falls through here, rejoins L4325
        var[1] = (var[1] + 1)
        phase_table[37] = 15286  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4071
            case 1: goto L4075
            case 2: goto L4079
            case 7: goto L4083
            default: goto L4087
        phase_table[37] = 15287  # raw literal, not evaluated
        pass
        # --- L4075 ---
        phase_table[37] = 15322  # raw literal, not evaluated
        pass
        # --- L4079 ---
        phase_table[37] = 15349  # raw literal, not evaluated
        pass
        # --- L4083 ---
        phase_table[37] = 15388  # raw literal, not evaluated
        pass
        # --- L4087 ---
        phase_table[37] = 15416  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4101 ---
        phase_table[38] = 15469  # raw literal, not evaluated
        var[76] = random_below(4)
        if not (((random_below(1) != 7) and (var[76] >= 3))):
            goto L4114
        # else: falls through here, rejoins L4114
        var[76] = random_below(3)
        # --- L4114 ---
        switch(var[76]):
            case 0: goto L4117
            case 1: goto L4121
            case 3: goto L4125
            case 4: goto L4129
            case 5: goto L4133
            case 6: goto L4137
            case 7: goto L4141
            default: goto L4145
        phase_table[38] = 15470  # raw literal, not evaluated
        pass
        # --- L4121 ---
        phase_table[38] = 15474  # raw literal, not evaluated
        pass
        # --- L4125 ---
        phase_table[38] = 15485  # raw literal, not evaluated
        pass
        # --- L4129 ---
        phase_table[38] = 15506  # raw literal, not evaluated
        pass
        # --- L4133 ---
        phase_table[38] = 15533  # raw literal, not evaluated
        pass
        # --- L4137 ---
        phase_table[38] = 15564  # raw literal, not evaluated
        pass
        # --- L4141 ---
        phase_table[38] = 15593  # raw literal, not evaluated
        pass
        # --- L4145 ---
        phase_table[38] = 15623  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4165 ---
        phase_table[39] = 15638  # raw literal, not evaluated
        switch(5):
            case 1: goto L4171
            case 2: goto L4177
            case 3: goto L4183
            case 4: goto L4189
            case 5: goto L4195
            case 6: goto L4201
            case 7: goto L4207
            case 8: goto L4213
            case 9: goto L4219
            case 10: goto L4225
            case 11: goto L4231
            case 12: goto L4237
            case 13: goto L4241
            case 14: goto L4245
            case 512: goto L4249
            case 32: goto L4255
            case 64: goto L4261
            case 128: goto L4267
            case 256: goto L4273
            default: goto L4279
        phase_table[39] = 15639  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4177 ---
        phase_table[39] = 15666  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4183 ---
        phase_table[39] = 15692  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4189 ---
        phase_table[39] = 15722  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4195 ---
        phase_table[39] = 15746  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4201 ---
        phase_table[39] = 15771  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4207 ---
        phase_table[39] = 15825  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4213 ---
        phase_table[39] = 15849  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4219 ---
        phase_table[39] = 15904  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4225 ---
        phase_table[39] = 15949  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4231 ---
        phase_table[39] = 16000  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4237 ---
        phase_table[39] = 16083  # raw literal, not evaluated
        pass
        # --- L4241 ---
        phase_table[39] = 16147  # raw literal, not evaluated
        pass
        # --- L4245 ---
        phase_table[39] = 16201  # raw literal, not evaluated
        pass
        # --- L4249 ---
        phase_table[39] = 16273  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4255 ---
        phase_table[39] = 16307  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4261 ---
        phase_table[39] = 16346  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4267 ---
        phase_table[39] = 16385  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4273 ---
        phase_table[39] = 16426  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4279 ---
        phase_table[39] = 16466  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4323 ---
        system_message(16505 /*" þ%"*/)
        # --- L4325 ---
        pass
        # --- L4326 ---
        if not (((var[36] & 512) > 0)):
            goto L4335
        # else: falls through here, rejoins L4335
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4335 ---
        pass
        # --- L4336 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L4339
            case 64: goto L4345
            case 128: goto L4351
            case 256: goto L4357
            default: goto L4363
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L4345 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L4351 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L4357 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=5)
        pass
        # --- L4363 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4380 ---
        pass
        # --- L4381 ---
        if not ((var[55] > 0)):
            goto L4660
        # else: falls through here, rejoins L4665
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        var[78] = random_below(100)
        if not (((var[1] == 0) and (var[78] < 4))):
            goto L4660
        # else: falls through here, rejoins L4660
        var[1] = (var[1] + 1)
        phase_table[40] = 16523  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4406
            case 1: goto L4410
            case 2: goto L4414
            case 7: goto L4418
            default: goto L4422
        phase_table[40] = 16524  # raw literal, not evaluated
        pass
        # --- L4410 ---
        phase_table[40] = 16559  # raw literal, not evaluated
        pass
        # --- L4414 ---
        phase_table[40] = 16586  # raw literal, not evaluated
        pass
        # --- L4418 ---
        phase_table[40] = 16625  # raw literal, not evaluated
        pass
        # --- L4422 ---
        phase_table[40] = 16653  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4436 ---
        phase_table[41] = 16706  # raw literal, not evaluated
        var[79] = random_below(4)
        if not (((random_below(1) != 7) and (var[79] >= 3))):
            goto L4449
        # else: falls through here, rejoins L4449
        var[79] = random_below(3)
        # --- L4449 ---
        switch(var[79]):
            case 0: goto L4452
            case 1: goto L4456
            case 3: goto L4460
            case 4: goto L4464
            case 5: goto L4468
            case 6: goto L4472
            case 7: goto L4476
            default: goto L4480
        phase_table[41] = 16707  # raw literal, not evaluated
        pass
        # --- L4456 ---
        phase_table[41] = 16711  # raw literal, not evaluated
        pass
        # --- L4460 ---
        phase_table[41] = 16722  # raw literal, not evaluated
        pass
        # --- L4464 ---
        phase_table[41] = 16743  # raw literal, not evaluated
        pass
        # --- L4468 ---
        phase_table[41] = 16770  # raw literal, not evaluated
        pass
        # --- L4472 ---
        phase_table[41] = 16801  # raw literal, not evaluated
        pass
        # --- L4476 ---
        phase_table[41] = 16830  # raw literal, not evaluated
        pass
        # --- L4480 ---
        phase_table[41] = 16860  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4500 ---
        phase_table[42] = 16875  # raw literal, not evaluated
        switch(6):
            case 1: goto L4506
            case 2: goto L4512
            case 3: goto L4518
            case 4: goto L4524
            case 5: goto L4530
            case 6: goto L4536
            case 7: goto L4542
            case 8: goto L4548
            case 9: goto L4554
            case 10: goto L4560
            case 11: goto L4566
            case 12: goto L4572
            case 13: goto L4576
            case 14: goto L4580
            case 512: goto L4584
            case 32: goto L4590
            case 64: goto L4596
            case 128: goto L4602
            case 256: goto L4608
            default: goto L4614
        phase_table[42] = 16876  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4512 ---
        phase_table[42] = 16903  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4518 ---
        phase_table[42] = 16929  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4524 ---
        phase_table[42] = 16959  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4530 ---
        phase_table[42] = 16983  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4536 ---
        phase_table[42] = 17008  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4542 ---
        phase_table[42] = 17062  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4548 ---
        phase_table[42] = 17086  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4554 ---
        phase_table[42] = 17141  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4560 ---
        phase_table[42] = 17186  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4566 ---
        phase_table[42] = 17237  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4572 ---
        phase_table[42] = 17320  # raw literal, not evaluated
        pass
        # --- L4576 ---
        phase_table[42] = 17384  # raw literal, not evaluated
        pass
        # --- L4580 ---
        phase_table[42] = 17438  # raw literal, not evaluated
        pass
        # --- L4584 ---
        phase_table[42] = 17510  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4590 ---
        phase_table[42] = 17544  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4596 ---
        phase_table[42] = 17583  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4602 ---
        phase_table[42] = 17622  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4608 ---
        phase_table[42] = 17663  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4614 ---
        phase_table[42] = 17703  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4658 ---
        system_message(17742 /*" þ("*/)
        # --- L4660 ---
        move_unit(unit[12], priority=0, dest_type=0, dest_arg=0)
        # --- L4665 ---
        pass
        # --- L4666 ---
        if not ((set_unit_behavior(7, 12) != 3)):
            goto L4675
        # else: falls through here, rejoins L4675
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L4675 ---
        pass
        # --- L4676 ---
        if not ((((var[36] & 7136) == 0) and (var[55] == 0))):
            goto L5049
        # else: falls through here, rejoins L5073
        var[81] = random_below(100)
        if not (((var[1] == 0) and (var[81] < 4))):
            goto L4950
        # else: falls through here, rejoins L4950
        var[1] = (var[1] + 1)
        phase_table[43] = 17760  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4696
            case 1: goto L4700
            case 2: goto L4704
            case 7: goto L4708
            default: goto L4712
        phase_table[43] = 17761  # raw literal, not evaluated
        pass
        # --- L4700 ---
        phase_table[43] = 17796  # raw literal, not evaluated
        pass
        # --- L4704 ---
        phase_table[43] = 17823  # raw literal, not evaluated
        pass
        # --- L4708 ---
        phase_table[43] = 17862  # raw literal, not evaluated
        pass
        # --- L4712 ---
        phase_table[43] = 17890  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4726 ---
        phase_table[44] = 17943  # raw literal, not evaluated
        var[82] = random_below(4)
        if not (((random_below(1) != 7) and (var[82] >= 3))):
            goto L4739
        # else: falls through here, rejoins L4739
        var[82] = random_below(3)
        # --- L4739 ---
        switch(var[82]):
            case 0: goto L4742
            case 1: goto L4746
            case 3: goto L4750
            case 4: goto L4754
            case 5: goto L4758
            case 6: goto L4762
            case 7: goto L4766
            default: goto L4770
        phase_table[44] = 17944  # raw literal, not evaluated
        pass
        # --- L4746 ---
        phase_table[44] = 17948  # raw literal, not evaluated
        pass
        # --- L4750 ---
        phase_table[44] = 17959  # raw literal, not evaluated
        pass
        # --- L4754 ---
        phase_table[44] = 17980  # raw literal, not evaluated
        pass
        # --- L4758 ---
        phase_table[44] = 18007  # raw literal, not evaluated
        pass
        # --- L4762 ---
        phase_table[44] = 18038  # raw literal, not evaluated
        pass
        # --- L4766 ---
        phase_table[44] = 18067  # raw literal, not evaluated
        pass
        # --- L4770 ---
        phase_table[44] = 18097  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4790 ---
        phase_table[45] = 18112  # raw literal, not evaluated
        switch(7):
            case 1: goto L4796
            case 2: goto L4802
            case 3: goto L4808
            case 4: goto L4814
            case 5: goto L4820
            case 6: goto L4826
            case 7: goto L4832
            case 8: goto L4838
            case 9: goto L4844
            case 10: goto L4850
            case 11: goto L4856
            case 12: goto L4862
            case 13: goto L4866
            case 14: goto L4870
            case 512: goto L4874
            case 32: goto L4880
            case 64: goto L4886
            case 128: goto L4892
            case 256: goto L4898
            default: goto L4904
        phase_table[45] = 18113  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4802 ---
        phase_table[45] = 18140  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4808 ---
        phase_table[45] = 18166  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4814 ---
        phase_table[45] = 18196  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4820 ---
        phase_table[45] = 18220  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4826 ---
        phase_table[45] = 18245  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4832 ---
        phase_table[45] = 18299  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4838 ---
        phase_table[45] = 18323  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4844 ---
        phase_table[45] = 18378  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4850 ---
        phase_table[45] = 18423  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4856 ---
        phase_table[45] = 18474  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4862 ---
        phase_table[45] = 18557  # raw literal, not evaluated
        pass
        # --- L4866 ---
        phase_table[45] = 18621  # raw literal, not evaluated
        pass
        # --- L4870 ---
        phase_table[45] = 18675  # raw literal, not evaluated
        pass
        # --- L4874 ---
        phase_table[45] = 18747  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4880 ---
        phase_table[45] = 18781  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4886 ---
        phase_table[45] = 18820  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4892 ---
        phase_table[45] = 18859  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4898 ---
        phase_table[45] = 18900  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4904 ---
        phase_table[45] = 18940  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4948 ---
        system_message(18979 /*" þ+"*/)
        # --- L4950 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L4953
            case 64: goto L4971
            case 128: goto L4989
            case 256: goto L5007
            default: goto L5025
        if not (group_condition_ref(2, 12)):
            goto L4961
        # else: falls through here, rejoins L4961
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4961 ---
        condition[2] = Condition(var_ref=2, expr_offset=3616)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L4971 ---
        if not (group_condition_ref(3, 12)):
            goto L4979
        # else: falls through here, rejoins L4979
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4979 ---
        condition[3] = Condition(var_ref=3, expr_offset=3637)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L4989 ---
        if not (group_condition_ref(4, 12)):
            goto L4997
        # else: falls through here, rejoins L4997
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L4997 ---
        condition[4] = Condition(var_ref=4, expr_offset=3658)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5007 ---
        if not (group_condition_ref(5, 12)):
            goto L5015
        # else: falls through here, rejoins L5015
        hex[5] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5015 ---
        condition[5] = Condition(var_ref=5, expr_offset=3679)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=5)
        pass
        # --- L5025 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5042 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L5049
        # else: falls through here, rejoins L5049
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L5049 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L5064
        # else: falls through here, rejoins L5073
        timer[1] = current_turn + 2
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[59], dest_type=0, dest_arg=0)
        # --- L5064 ---
        if not (timer_expired(1)):
            goto L5073
        # else: falls through here, rejoins L5073
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        # --- L5073 ---
        pass
        # --- L5074 ---
        pass
        # --- L5075 ---
        if not ((set_unit_behavior(7, 12) != 4)):
            goto L5354
        # else: falls through here, rejoins L5369
        var[84] = random_below(100)
        if not (((var[1] == 0) and (var[84] < 4))):
            goto L5349
        # else: falls through here, rejoins L5349
        var[1] = (var[1] + 1)
        phase_table[46] = 18997  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5095
            case 1: goto L5099
            case 2: goto L5103
            case 7: goto L5107
            default: goto L5111
        phase_table[46] = 18998  # raw literal, not evaluated
        pass
        # --- L5099 ---
        phase_table[46] = 19033  # raw literal, not evaluated
        pass
        # --- L5103 ---
        phase_table[46] = 19060  # raw literal, not evaluated
        pass
        # --- L5107 ---
        phase_table[46] = 19099  # raw literal, not evaluated
        pass
        # --- L5111 ---
        phase_table[46] = 19127  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5125 ---
        phase_table[47] = 19180  # raw literal, not evaluated
        var[85] = random_below(4)
        if not (((random_below(1) != 7) and (var[85] >= 3))):
            goto L5138
        # else: falls through here, rejoins L5138
        var[85] = random_below(3)
        # --- L5138 ---
        switch(var[85]):
            case 0: goto L5141
            case 1: goto L5145
            case 3: goto L5149
            case 4: goto L5153
            case 5: goto L5157
            case 6: goto L5161
            case 7: goto L5165
            default: goto L5169
        phase_table[47] = 19181  # raw literal, not evaluated
        pass
        # --- L5145 ---
        phase_table[47] = 19185  # raw literal, not evaluated
        pass
        # --- L5149 ---
        phase_table[47] = 19196  # raw literal, not evaluated
        pass
        # --- L5153 ---
        phase_table[47] = 19217  # raw literal, not evaluated
        pass
        # --- L5157 ---
        phase_table[47] = 19244  # raw literal, not evaluated
        pass
        # --- L5161 ---
        phase_table[47] = 19275  # raw literal, not evaluated
        pass
        # --- L5165 ---
        phase_table[47] = 19304  # raw literal, not evaluated
        pass
        # --- L5169 ---
        phase_table[47] = 19334  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5189 ---
        phase_table[48] = 19349  # raw literal, not evaluated
        switch(9):
            case 1: goto L5195
            case 2: goto L5201
            case 3: goto L5207
            case 4: goto L5213
            case 5: goto L5219
            case 6: goto L5225
            case 7: goto L5231
            case 8: goto L5237
            case 9: goto L5243
            case 10: goto L5249
            case 11: goto L5255
            case 12: goto L5261
            case 13: goto L5265
            case 14: goto L5269
            case 512: goto L5273
            case 32: goto L5279
            case 64: goto L5285
            case 128: goto L5291
            case 256: goto L5297
            default: goto L5303
        phase_table[48] = 19350  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5201 ---
        phase_table[48] = 19377  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5207 ---
        phase_table[48] = 19403  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5213 ---
        phase_table[48] = 19433  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5219 ---
        phase_table[48] = 19457  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5225 ---
        phase_table[48] = 19482  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5231 ---
        phase_table[48] = 19536  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5237 ---
        phase_table[48] = 19560  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5243 ---
        phase_table[48] = 19615  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5249 ---
        phase_table[48] = 19660  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5255 ---
        phase_table[48] = 19711  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5261 ---
        phase_table[48] = 19794  # raw literal, not evaluated
        pass
        # --- L5265 ---
        phase_table[48] = 19858  # raw literal, not evaluated
        pass
        # --- L5269 ---
        phase_table[48] = 19912  # raw literal, not evaluated
        pass
        # --- L5273 ---
        phase_table[48] = 19984  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5279 ---
        phase_table[48] = 20018  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5285 ---
        phase_table[48] = 20057  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5291 ---
        phase_table[48] = 20096  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5297 ---
        phase_table[48] = 20137  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5303 ---
        phase_table[48] = 20177  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5347 ---
        system_message(20216 /*" þ."*/)
        # --- L5349 ---
        move_unit(unit[12], priority=4, dest_type=3, dest_arg=2)
        # --- L5354 ---
        var[87] = set_unit_behavior(10, 12)
        unit[14] = var[87]
        if not (group_condition(14)):
            goto L5369
        # else: falls through here, rejoins L5369
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L5369 ---
        pass
        # --- L5370 ---
        pass
        # --- L5371 ---
        if not ((((var[36] & 7136) == 0) & (var[55] == 0))):
            goto L5744
        # else: falls through here, rejoins L5756
        var[88] = random_below(100)
        if not (((var[1] == 0) and (var[88] < 4))):
            goto L5645
        # else: falls through here, rejoins L5645
        var[1] = (var[1] + 1)
        phase_table[49] = 20234  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5391
            case 1: goto L5395
            case 2: goto L5399
            case 7: goto L5403
            default: goto L5407
        phase_table[49] = 20235  # raw literal, not evaluated
        pass
        # --- L5395 ---
        phase_table[49] = 20270  # raw literal, not evaluated
        pass
        # --- L5399 ---
        phase_table[49] = 20297  # raw literal, not evaluated
        pass
        # --- L5403 ---
        phase_table[49] = 20336  # raw literal, not evaluated
        pass
        # --- L5407 ---
        phase_table[49] = 20364  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5421 ---
        phase_table[50] = 20417  # raw literal, not evaluated
        var[89] = random_below(4)
        if not (((random_below(1) != 7) and (var[89] >= 3))):
            goto L5434
        # else: falls through here, rejoins L5434
        var[89] = random_below(3)
        # --- L5434 ---
        switch(var[89]):
            case 0: goto L5437
            case 1: goto L5441
            case 3: goto L5445
            case 4: goto L5449
            case 5: goto L5453
            case 6: goto L5457
            case 7: goto L5461
            default: goto L5465
        phase_table[50] = 20418  # raw literal, not evaluated
        pass
        # --- L5441 ---
        phase_table[50] = 20422  # raw literal, not evaluated
        pass
        # --- L5445 ---
        phase_table[50] = 20433  # raw literal, not evaluated
        pass
        # --- L5449 ---
        phase_table[50] = 20454  # raw literal, not evaluated
        pass
        # --- L5453 ---
        phase_table[50] = 20481  # raw literal, not evaluated
        pass
        # --- L5457 ---
        phase_table[50] = 20512  # raw literal, not evaluated
        pass
        # --- L5461 ---
        phase_table[50] = 20541  # raw literal, not evaluated
        pass
        # --- L5465 ---
        phase_table[50] = 20571  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5485 ---
        phase_table[51] = 20586  # raw literal, not evaluated
        switch(7):
            case 1: goto L5491
            case 2: goto L5497
            case 3: goto L5503
            case 4: goto L5509
            case 5: goto L5515
            case 6: goto L5521
            case 7: goto L5527
            case 8: goto L5533
            case 9: goto L5539
            case 10: goto L5545
            case 11: goto L5551
            case 12: goto L5557
            case 13: goto L5561
            case 14: goto L5565
            case 512: goto L5569
            case 32: goto L5575
            case 64: goto L5581
            case 128: goto L5587
            case 256: goto L5593
            default: goto L5599
        phase_table[51] = 20587  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5497 ---
        phase_table[51] = 20614  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5503 ---
        phase_table[51] = 20640  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5509 ---
        phase_table[51] = 20670  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5515 ---
        phase_table[51] = 20694  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5521 ---
        phase_table[51] = 20719  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5527 ---
        phase_table[51] = 20773  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5533 ---
        phase_table[51] = 20797  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5539 ---
        phase_table[51] = 20852  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5545 ---
        phase_table[51] = 20897  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5551 ---
        phase_table[51] = 20948  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5557 ---
        phase_table[51] = 21031  # raw literal, not evaluated
        pass
        # --- L5561 ---
        phase_table[51] = 21095  # raw literal, not evaluated
        pass
        # --- L5565 ---
        phase_table[51] = 21149  # raw literal, not evaluated
        pass
        # --- L5569 ---
        phase_table[51] = 21221  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5575 ---
        phase_table[51] = 21255  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5581 ---
        phase_table[51] = 21294  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5587 ---
        phase_table[51] = 21333  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5593 ---
        phase_table[51] = 21374  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5599 ---
        phase_table[51] = 21414  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5643 ---
        system_message(21453 /*" þ1"*/)
        # --- L5645 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L5648
            case 64: goto L5666
            case 128: goto L5684
            case 256: goto L5702
            default: goto L5720
        if not (group_condition_ref(2, 12)):
            goto L5656
        # else: falls through here, rejoins L5656
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5656 ---
        condition[2] = Condition(var_ref=2, expr_offset=4112)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L5666 ---
        if not (group_condition_ref(3, 12)):
            goto L5674
        # else: falls through here, rejoins L5674
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5674 ---
        condition[3] = Condition(var_ref=3, expr_offset=4133)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5684 ---
        if not (group_condition_ref(4, 12)):
            goto L5692
        # else: falls through here, rejoins L5692
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5692 ---
        condition[4] = Condition(var_ref=4, expr_offset=4154)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5702 ---
        if not (group_condition_ref(5, 12)):
            goto L5710
        # else: falls through here, rejoins L5710
        hex[5] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5710 ---
        condition[5] = Condition(var_ref=5, expr_offset=4175)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=5)
        pass
        # --- L5720 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5737 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L5744
        # else: falls through here, rejoins L5744
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L5744 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L5756
        # else: falls through here, rejoins L5756
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[59], dest_type=0, dest_arg=0)
        # --- L5756 ---
        pass
        # --- L5757 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L5785 ---
        unit[12] = next_unit_in_group(unit[12], group=2)
        goto L2639
        # --- L5790 ---
        var[8] = (var[8] + 1)
        var[10] = 0
        if not ((var[8] >= var[9])):
            goto L5803
        # else: falls through here, rejoins L5803
        var[10] = 1
        # --- L5803 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x53df] - dead end, not decoded further (other branches continue independently)
        # --- L5992 ---
        if (timer_expired(3) and (var[5] > 0)) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L5998
        system_message(21863 /*"Attack on human installation has commenced. Encountering human infestation. Requisitioning all nearby units from defense pool."*/)
        # --- L5998 ---
        var[98] = ((var[10] and (not any_group_alive(1))) and (not group_condition(2)))
        var[99] = ((not all_group_alive(2)) and (not group_condition(2)))
        if ((((var[98] or var[99]) or any_group_alive(1)) or (not all_group_alive(2))) or group_condition(2)) and not flag[3]:
            flag[3] = True
            ...  # run block below, converges at L6009
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6009 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (((var[98] > 0) or (var[99] > 0))):
                goto L6021
            # else: falls through here, rejoins L6026
            play_sound(35)
            system_message(21990 /*"The base on ÿ"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6021 ---
            system_message(22199 /*"Your mission was a failure. The base on ÿ£"*/)
            set_unit_objective(unit=1, state=2)
            # --- L6026 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
