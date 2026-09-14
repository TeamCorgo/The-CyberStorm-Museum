# SIT305.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = (random_below(4) + 3)
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[4] == 0)):
        goto L11
    # else: falls through here, rejoins L11
    var[4] = (random_below(var[8]) + var[9])
    # --- L11 ---
    var[10] = (stat(0) / 1)
    var[10] = (var[10] - 200)
    var[11] = 8192
    while (var[11] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L35
    # --- L23 ---
    if not ((var[10] < var[11])):
        goto L30
    # else: falls through here, rejoins L30
    var[6] = (var[6] + 1)
    # --- L30 ---
    var[11] = (var[11] / 4)
    goto L23
    # --- L35 ---
    var[12] = 0
    var[13] = 0
    var[14] = 25
    var[15] = 27
    var[16] = 0
    var[17] = 360
    if not ((var[14] > (var[6] + 5))):
        goto L60
    # else: falls through here, rejoins L63
    var[14] = (var[14] - var[6])
    # --- L60 ---
    var[14] = 5
    # --- L63 ---
    if not ((var[15] > (var[6] + 10))):
        goto L70
    # else: falls through here, rejoins L73
    var[15] = (var[15] - var[6])
    # --- L70 ---
    var[15] = 10
    # --- L73 ---
    if not ((var[12] == 0)):
        goto L80
    # else: falls through here, rejoins L80
    var[12] = (var[14] + random_below((var[15] - var[14])))
    # --- L80 ---
    if not ((var[13] == 0)):
        goto L87
    # else: falls through here, rejoins L87
    var[13] = ((random_below(var[17]) + var[16]) - (var[17] / 2))
    # --- L87 ---
    hex[7] = hex_along_path(toward=var[12], steps=var[13])
    condition[7] = Condition(var_ref=7, expr_offset=174)
    timer[3] = current_turn + 2
    var[18] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
    var[19] = 0
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L128
    # else: falls through here, rejoins L131
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L121
    # else: falls through here, rejoins L128
    var[7] = 300
    # --- L121 ---
    if not ((var[7] > 1200)):
        goto L128
    # else: falls through here, rejoins L128
    var[7] = 1200
    # --- L128 ---
    var[7] = var[10]
    # --- L131 ---
    var[10] = (var[10] - var[7])
    hex[1] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] + 30))
    condition[1] = Condition(var_ref=1, expr_offset=256)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=1)
    move_group(group[3], priority=var[18], dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 47
    if not ((var[10] > 0)):
        goto L208
    # else: falls through here, rejoins L208
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L182
    # else: falls through here, rejoins L185
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L175
    # else: falls through here, rejoins L182
    var[7] = 300
    # --- L175 ---
    if not ((var[7] > 1200)):
        goto L182
    # else: falls through here, rejoins L182
    var[7] = 1200
    # --- L182 ---
    var[7] = var[10]
    # --- L185 ---
    var[10] = (var[10] - var[7])
    hex[2] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] + 120))
    condition[2] = Condition(var_ref=2, expr_offset=334)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=2)
    move_group(group[3], priority=var[18], dest_type=0, dest_arg=0)
    for u in group[3]: u.attr8 = (var[18] + 15)
    # --- L208 ---
    if not ((var[10] > 0)):
        goto L262
    # else: falls through here, rejoins L262
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L236
    # else: falls through here, rejoins L239
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L229
    # else: falls through here, rejoins L236
    var[7] = 300
    # --- L229 ---
    if not ((var[7] > 1200)):
        goto L236
    # else: falls through here, rejoins L236
    var[7] = 1200
    # --- L236 ---
    var[7] = var[10]
    # --- L239 ---
    var[10] = (var[10] - var[7])
    hex[3] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] - 30))
    condition[3] = Condition(var_ref=3, expr_offset=416)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=3)
    move_group(group[3], priority=var[18], dest_type=0, dest_arg=0)
    for u in group[3]: u.attr8 = (var[18] + 15)
    # --- L262 ---
    if not ((var[10] > 0)):
        goto L316
    # else: falls through here, rejoins L316
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L290
    # else: falls through here, rejoins L293
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L283
    # else: falls through here, rejoins L290
    var[7] = 300
    # --- L283 ---
    if not ((var[7] > 1200)):
        goto L290
    # else: falls through here, rejoins L290
    var[7] = 1200
    # --- L290 ---
    var[7] = var[10]
    # --- L293 ---
    var[10] = (var[10] - var[7])
    hex[4] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] - 120))
    condition[4] = Condition(var_ref=4, expr_offset=498)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=4)
    move_group(group[3], priority=var[18], dest_type=0, dest_arg=0)
    for u in group[3]: u.attr8 = (var[18] + 15)
    # --- L316 ---
    if not ((var[10] > 0)):
        goto L370
    # else: falls through here, rejoins L370
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L344
    # else: falls through here, rejoins L347
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L337
    # else: falls through here, rejoins L344
    var[7] = 300
    # --- L337 ---
    if not ((var[7] > 1200)):
        goto L344
    # else: falls through here, rejoins L344
    var[7] = 1200
    # --- L344 ---
    var[7] = var[10]
    # --- L347 ---
    var[10] = (var[10] - var[7])
    hex[5] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] - 60))
    condition[5] = Condition(var_ref=5, expr_offset=580)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=5)
    move_group(group[3], priority=var[18], dest_type=0, dest_arg=0)
    for u in group[3]: u.attr8 = (var[18] + 15)
    # --- L370 ---
    if not ((var[10] > 0)):
        goto L424
    # else: falls through here, rejoins L424
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L398
    # else: falls through here, rejoins L401
    var[7] = (var[10] / 1)
    if not ((var[7] < 300)):
        goto L391
    # else: falls through here, rejoins L398
    var[7] = 300
    # --- L391 ---
    if not ((var[7] > 1200)):
        goto L398
    # else: falls through here, rejoins L398
    var[7] = 1200
    # --- L398 ---
    var[7] = var[10]
    # --- L401 ---
    var[10] = (var[10] - var[7])
    hex[6] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] + 60))
    condition[6] = Condition(var_ref=6, expr_offset=662)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=6)
    move_group(group[3], priority=var[18], dest_type=0, dest_arg=0)
    for u in group[3]: u.attr8 = (var[18] + 11)
    # --- L424 ---
    timer[2] = current_turn + 1
    var[20] = random_below(100)
    if not (((var[3] == 0) and (var[20] < 100))):
        goto L697
    # else: falls through here, rejoins L697
    var[3] = (var[3] + 1)
    phase_table[1] = 310  # raw literal, not evaluated
    switch(7):
        case 0: goto L443
        case 1: goto L447
        case 2: goto L451
        case 7: goto L455
        default: goto L459
    phase_table[1] = 311  # raw literal, not evaluated
    pass
    # --- L447 ---
    phase_table[1] = 346  # raw literal, not evaluated
    pass
    # --- L451 ---
    phase_table[1] = 373  # raw literal, not evaluated
    pass
    # --- L455 ---
    phase_table[1] = 412  # raw literal, not evaluated
    pass
    # --- L459 ---
    phase_table[1] = 440  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
    # --- L473 ---
    phase_table[2] = 493  # raw literal, not evaluated
    var[21] = var[1]
    if not ((0 and (var[21] >= 3))):
        goto L486
    # else: falls through here, rejoins L486
    var[21] = random_below(3)
    # --- L486 ---
    switch(var[21]):
        case 0: goto L489
        case 1: goto L493
        case 3: goto L497
        case 4: goto L501
        case 5: goto L505
        case 6: goto L509
        case 7: goto L513
        default: goto L517
    phase_table[2] = 494  # raw literal, not evaluated
    pass
    # --- L493 ---
    phase_table[2] = 498  # raw literal, not evaluated
    pass
    # --- L497 ---
    phase_table[2] = 509  # raw literal, not evaluated
    pass
    # --- L501 ---
    phase_table[2] = 530  # raw literal, not evaluated
    pass
    # --- L505 ---
    phase_table[2] = 557  # raw literal, not evaluated
    pass
    # --- L509 ---
    phase_table[2] = 588  # raw literal, not evaluated
    pass
    # --- L513 ---
    phase_table[2] = 617  # raw literal, not evaluated
    pass
    # --- L517 ---
    phase_table[2] = 647  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
    # --- L537 ---
    phase_table[3] = 662  # raw literal, not evaluated
    switch(14):
        case 1: goto L543
        case 2: goto L549
        case 3: goto L555
        case 4: goto L561
        case 5: goto L567
        case 6: goto L573
        case 7: goto L579
        case 8: goto L585
        case 9: goto L591
        case 10: goto L597
        case 11: goto L603
        case 12: goto L609
        case 13: goto L613
        case 14: goto L617
        case 512: goto L621
        case 32: goto L627
        case 64: goto L633
        case 128: goto L639
        case 256: goto L645
        default: goto L651
    phase_table[3] = 663  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L549 ---
    phase_table[3] = 690  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L555 ---
    phase_table[3] = 716  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L561 ---
    phase_table[3] = 746  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L567 ---
    phase_table[3] = 770  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L573 ---
    phase_table[3] = 795  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L579 ---
    phase_table[3] = 849  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L585 ---
    phase_table[3] = 873  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L591 ---
    phase_table[3] = 928  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L597 ---
    phase_table[3] = 973  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L603 ---
    phase_table[3] = 1024  # raw literal, not evaluated
    play_sound(259)
    pass
    # --- L609 ---
    phase_table[3] = 1107  # raw literal, not evaluated
    pass
    # --- L613 ---
    phase_table[3] = 1171  # raw literal, not evaluated
    pass
    # --- L617 ---
    phase_table[3] = 1225  # raw literal, not evaluated
    pass
    # --- L621 ---
    phase_table[3] = 1297  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L627 ---
    phase_table[3] = 1331  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L633 ---
    phase_table[3] = 1370  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L639 ---
    phase_table[3] = 1409  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L645 ---
    phase_table[3] = 1450  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L651 ---
    phase_table[3] = 1490  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
    # --- L695 ---
    system_message(1529 /*" þ"*/)
    # --- L697 ---
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[5] = 0
        var[23] = 0
        var[24] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L730
        var[25] = 0
        unit[4] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 4):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L728
        # --- L720 ---
        var[25] = (var[25] + 1)
        unit[4] = next_unit_in_group(unit[4], group=2)
        goto L720
        # --- L728 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x060b] - dead end, not decoded further (other branches continue independently)
        # --- L730 ---
        if not (timer_expired(2)):
            goto L6484
        # else: falls through here, rejoins L6484
        timer[2] = current_turn + 1
        var[3] = 0
        var[26] = 0
        if not ((group_condition_ref_2(7, 1) and group_condition_ref_2(7, 2))):
            goto L1027
        # else: falls through here, rejoins L1034
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[27] = random_below(100)
        if not (((var[3] == 0) and (var[27] < 2))):
            goto L1020
        # else: falls through here, rejoins L1020
        var[3] = (var[3] + 1)
        phase_table[4] = 1697  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L766
            case 1: goto L770
            case 2: goto L774
            case 7: goto L778
            default: goto L782
        phase_table[4] = 1698  # raw literal, not evaluated
        pass
        # --- L770 ---
        phase_table[4] = 1733  # raw literal, not evaluated
        pass
        # --- L774 ---
        phase_table[4] = 1760  # raw literal, not evaluated
        pass
        # --- L778 ---
        phase_table[4] = 1799  # raw literal, not evaluated
        pass
        # --- L782 ---
        phase_table[4] = 1827  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L796 ---
        phase_table[5] = 1880  # raw literal, not evaluated
        var[28] = random_below(4)
        if not (((random_below(4) != 7) and (var[28] >= 3))):
            goto L809
        # else: falls through here, rejoins L809
        var[28] = random_below(3)
        # --- L809 ---
        switch(var[28]):
            case 0: goto L812
            case 1: goto L816
            case 3: goto L820
            case 4: goto L824
            case 5: goto L828
            case 6: goto L832
            case 7: goto L836
            default: goto L840
        phase_table[5] = 1881  # raw literal, not evaluated
        pass
        # --- L816 ---
        phase_table[5] = 1885  # raw literal, not evaluated
        pass
        # --- L820 ---
        phase_table[5] = 1896  # raw literal, not evaluated
        pass
        # --- L824 ---
        phase_table[5] = 1917  # raw literal, not evaluated
        pass
        # --- L828 ---
        phase_table[5] = 1944  # raw literal, not evaluated
        pass
        # --- L832 ---
        phase_table[5] = 1975  # raw literal, not evaluated
        pass
        # --- L836 ---
        phase_table[5] = 2004  # raw literal, not evaluated
        pass
        # --- L840 ---
        phase_table[5] = 2034  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L860 ---
        phase_table[6] = 2049  # raw literal, not evaluated
        switch(512):
            case 1: goto L866
            case 2: goto L872
            case 3: goto L878
            case 4: goto L884
            case 5: goto L890
            case 6: goto L896
            case 7: goto L902
            case 8: goto L908
            case 9: goto L914
            case 10: goto L920
            case 11: goto L926
            case 12: goto L932
            case 13: goto L936
            case 14: goto L940
            case 512: goto L944
            case 32: goto L950
            case 64: goto L956
            case 128: goto L962
            case 256: goto L968
            default: goto L974
        phase_table[6] = 2050  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L872 ---
        phase_table[6] = 2077  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L878 ---
        phase_table[6] = 2103  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L884 ---
        phase_table[6] = 2133  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L890 ---
        phase_table[6] = 2157  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L896 ---
        phase_table[6] = 2182  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L902 ---
        phase_table[6] = 2236  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L908 ---
        phase_table[6] = 2260  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L914 ---
        phase_table[6] = 2315  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L920 ---
        phase_table[6] = 2360  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L926 ---
        phase_table[6] = 2411  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L932 ---
        phase_table[6] = 2494  # raw literal, not evaluated
        pass
        # --- L936 ---
        phase_table[6] = 2558  # raw literal, not evaluated
        pass
        # --- L940 ---
        phase_table[6] = 2612  # raw literal, not evaluated
        pass
        # --- L944 ---
        phase_table[6] = 2684  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L950 ---
        phase_table[6] = 2718  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L956 ---
        phase_table[6] = 2757  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L962 ---
        phase_table[6] = 2796  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L968 ---
        phase_table[6] = 2837  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L974 ---
        phase_table[6] = 2877  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1018 ---
        system_message(2916 /*" þ"*/)
        # --- L1020 ---
        if not (((var[26] & 512) == 0)):
            goto L1027
        # else: falls through here, rejoins L1027
        var[26] = (var[26] + 512)
        # --- L1027 ---
        if not (((var[26] & 512) > 0)):
            goto L1034
        # else: falls through here, rejoins L1034
        var[26] = (var[26] - 512)
        # --- L1034 ---
        if not ((group_condition_ref_2(1, 1) and group_condition_ref_2(1, 2))):
            goto L1318
        # else: falls through here, rejoins L1325
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[30] = random_below(100)
        if not (((var[3] == 0) and (var[30] < 2))):
            goto L1311
        # else: falls through here, rejoins L1311
        var[3] = (var[3] + 1)
        phase_table[7] = 2934  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1057
            case 1: goto L1061
            case 2: goto L1065
            case 7: goto L1069
            default: goto L1073
        phase_table[7] = 2935  # raw literal, not evaluated
        pass
        # --- L1061 ---
        phase_table[7] = 2970  # raw literal, not evaluated
        pass
        # --- L1065 ---
        phase_table[7] = 2997  # raw literal, not evaluated
        pass
        # --- L1069 ---
        phase_table[7] = 3036  # raw literal, not evaluated
        pass
        # --- L1073 ---
        phase_table[7] = 3064  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1087 ---
        phase_table[8] = 3117  # raw literal, not evaluated
        var[31] = random_below(4)
        if not (((random_below(4) != 7) and (var[31] >= 3))):
            goto L1100
        # else: falls through here, rejoins L1100
        var[31] = random_below(3)
        # --- L1100 ---
        switch(var[31]):
            case 0: goto L1103
            case 1: goto L1107
            case 3: goto L1111
            case 4: goto L1115
            case 5: goto L1119
            case 6: goto L1123
            case 7: goto L1127
            default: goto L1131
        phase_table[8] = 3118  # raw literal, not evaluated
        pass
        # --- L1107 ---
        phase_table[8] = 3122  # raw literal, not evaluated
        pass
        # --- L1111 ---
        phase_table[8] = 3133  # raw literal, not evaluated
        pass
        # --- L1115 ---
        phase_table[8] = 3154  # raw literal, not evaluated
        pass
        # --- L1119 ---
        phase_table[8] = 3181  # raw literal, not evaluated
        pass
        # --- L1123 ---
        phase_table[8] = 3212  # raw literal, not evaluated
        pass
        # --- L1127 ---
        phase_table[8] = 3241  # raw literal, not evaluated
        pass
        # --- L1131 ---
        phase_table[8] = 3271  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1151 ---
        phase_table[9] = 3286  # raw literal, not evaluated
        switch(32):
            case 1: goto L1157
            case 2: goto L1163
            case 3: goto L1169
            case 4: goto L1175
            case 5: goto L1181
            case 6: goto L1187
            case 7: goto L1193
            case 8: goto L1199
            case 9: goto L1205
            case 10: goto L1211
            case 11: goto L1217
            case 12: goto L1223
            case 13: goto L1227
            case 14: goto L1231
            case 512: goto L1235
            case 32: goto L1241
            case 64: goto L1247
            case 128: goto L1253
            case 256: goto L1259
            default: goto L1265
        phase_table[9] = 3287  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1163 ---
        phase_table[9] = 3314  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1169 ---
        phase_table[9] = 3340  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1175 ---
        phase_table[9] = 3370  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1181 ---
        phase_table[9] = 3394  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1187 ---
        phase_table[9] = 3419  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1193 ---
        phase_table[9] = 3473  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1199 ---
        phase_table[9] = 3497  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1205 ---
        phase_table[9] = 3552  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1211 ---
        phase_table[9] = 3597  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1217 ---
        phase_table[9] = 3648  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1223 ---
        phase_table[9] = 3731  # raw literal, not evaluated
        pass
        # --- L1227 ---
        phase_table[9] = 3795  # raw literal, not evaluated
        pass
        # --- L1231 ---
        phase_table[9] = 3849  # raw literal, not evaluated
        pass
        # --- L1235 ---
        phase_table[9] = 3921  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1241 ---
        phase_table[9] = 3955  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1247 ---
        phase_table[9] = 3994  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1253 ---
        phase_table[9] = 4033  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1259 ---
        phase_table[9] = 4074  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1265 ---
        phase_table[9] = 4114  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1309 ---
        system_message(4153 /*" þ"*/)
        # --- L1311 ---
        if not (((var[26] & 32) == 0)):
            goto L1318
        # else: falls through here, rejoins L1318
        var[26] = (var[26] + 32)
        # --- L1318 ---
        if not (((var[26] & 32) > 0)):
            goto L1325
        # else: falls through here, rejoins L1325
        var[26] = (var[26] - 32)
        # --- L1325 ---
        if not ((group_condition_ref_2(2, 1) and group_condition_ref_2(2, 2))):
            goto L1609
        # else: falls through here, rejoins L1616
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[33] = random_below(100)
        if not (((var[3] == 0) and (var[33] < 2))):
            goto L1602
        # else: falls through here, rejoins L1602
        var[3] = (var[3] + 1)
        phase_table[10] = 4171  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1348
            case 1: goto L1352
            case 2: goto L1356
            case 7: goto L1360
            default: goto L1364
        phase_table[10] = 4172  # raw literal, not evaluated
        pass
        # --- L1352 ---
        phase_table[10] = 4207  # raw literal, not evaluated
        pass
        # --- L1356 ---
        phase_table[10] = 4234  # raw literal, not evaluated
        pass
        # --- L1360 ---
        phase_table[10] = 4273  # raw literal, not evaluated
        pass
        # --- L1364 ---
        phase_table[10] = 4301  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1378 ---
        phase_table[11] = 4354  # raw literal, not evaluated
        var[34] = random_below(4)
        if not (((random_below(4) != 7) and (var[34] >= 3))):
            goto L1391
        # else: falls through here, rejoins L1391
        var[34] = random_below(3)
        # --- L1391 ---
        switch(var[34]):
            case 0: goto L1394
            case 1: goto L1398
            case 3: goto L1402
            case 4: goto L1406
            case 5: goto L1410
            case 6: goto L1414
            case 7: goto L1418
            default: goto L1422
        phase_table[11] = 4355  # raw literal, not evaluated
        pass
        # --- L1398 ---
        phase_table[11] = 4359  # raw literal, not evaluated
        pass
        # --- L1402 ---
        phase_table[11] = 4370  # raw literal, not evaluated
        pass
        # --- L1406 ---
        phase_table[11] = 4391  # raw literal, not evaluated
        pass
        # --- L1410 ---
        phase_table[11] = 4418  # raw literal, not evaluated
        pass
        # --- L1414 ---
        phase_table[11] = 4449  # raw literal, not evaluated
        pass
        # --- L1418 ---
        phase_table[11] = 4478  # raw literal, not evaluated
        pass
        # --- L1422 ---
        phase_table[11] = 4508  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1442 ---
        phase_table[12] = 4523  # raw literal, not evaluated
        switch(64):
            case 1: goto L1448
            case 2: goto L1454
            case 3: goto L1460
            case 4: goto L1466
            case 5: goto L1472
            case 6: goto L1478
            case 7: goto L1484
            case 8: goto L1490
            case 9: goto L1496
            case 10: goto L1502
            case 11: goto L1508
            case 12: goto L1514
            case 13: goto L1518
            case 14: goto L1522
            case 512: goto L1526
            case 32: goto L1532
            case 64: goto L1538
            case 128: goto L1544
            case 256: goto L1550
            default: goto L1556
        phase_table[12] = 4524  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1454 ---
        phase_table[12] = 4551  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1460 ---
        phase_table[12] = 4577  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1466 ---
        phase_table[12] = 4607  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1472 ---
        phase_table[12] = 4631  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1478 ---
        phase_table[12] = 4656  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1484 ---
        phase_table[12] = 4710  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1490 ---
        phase_table[12] = 4734  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1496 ---
        phase_table[12] = 4789  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1502 ---
        phase_table[12] = 4834  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1508 ---
        phase_table[12] = 4885  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1514 ---
        phase_table[12] = 4968  # raw literal, not evaluated
        pass
        # --- L1518 ---
        phase_table[12] = 5032  # raw literal, not evaluated
        pass
        # --- L1522 ---
        phase_table[12] = 5086  # raw literal, not evaluated
        pass
        # --- L1526 ---
        phase_table[12] = 5158  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1532 ---
        phase_table[12] = 5192  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1538 ---
        phase_table[12] = 5231  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1544 ---
        phase_table[12] = 5270  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1550 ---
        phase_table[12] = 5311  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1556 ---
        phase_table[12] = 5351  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1600 ---
        system_message(5390 /*" þ
"*/)
        # --- L1602 ---
        if not (((var[26] & 64) == 0)):
            goto L1609
        # else: falls through here, rejoins L1609
        var[26] = (var[26] + 64)
        # --- L1609 ---
        if not (((var[26] & 64) > 0)):
            goto L1616
        # else: falls through here, rejoins L1616
        var[26] = (var[26] - 64)
        # --- L1616 ---
        if not ((group_condition_ref_2(3, 1) and group_condition_ref_2(3, 2))):
            goto L1900
        # else: falls through here, rejoins L1907
        unit[8] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[36] = random_below(100)
        if not (((var[3] == 0) and (var[36] < 2))):
            goto L1893
        # else: falls through here, rejoins L1893
        var[3] = (var[3] + 1)
        phase_table[13] = 5408  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1639
            case 1: goto L1643
            case 2: goto L1647
            case 7: goto L1651
            default: goto L1655
        phase_table[13] = 5409  # raw literal, not evaluated
        pass
        # --- L1643 ---
        phase_table[13] = 5444  # raw literal, not evaluated
        pass
        # --- L1647 ---
        phase_table[13] = 5471  # raw literal, not evaluated
        pass
        # --- L1651 ---
        phase_table[13] = 5510  # raw literal, not evaluated
        pass
        # --- L1655 ---
        phase_table[13] = 5538  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1669 ---
        phase_table[14] = 5591  # raw literal, not evaluated
        var[37] = random_below(4)
        if not (((random_below(4) != 7) and (var[37] >= 3))):
            goto L1682
        # else: falls through here, rejoins L1682
        var[37] = random_below(3)
        # --- L1682 ---
        switch(var[37]):
            case 0: goto L1685
            case 1: goto L1689
            case 3: goto L1693
            case 4: goto L1697
            case 5: goto L1701
            case 6: goto L1705
            case 7: goto L1709
            default: goto L1713
        phase_table[14] = 5592  # raw literal, not evaluated
        pass
        # --- L1689 ---
        phase_table[14] = 5596  # raw literal, not evaluated
        pass
        # --- L1693 ---
        phase_table[14] = 5607  # raw literal, not evaluated
        pass
        # --- L1697 ---
        phase_table[14] = 5628  # raw literal, not evaluated
        pass
        # --- L1701 ---
        phase_table[14] = 5655  # raw literal, not evaluated
        pass
        # --- L1705 ---
        phase_table[14] = 5686  # raw literal, not evaluated
        pass
        # --- L1709 ---
        phase_table[14] = 5715  # raw literal, not evaluated
        pass
        # --- L1713 ---
        phase_table[14] = 5745  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L1733 ---
        phase_table[15] = 5760  # raw literal, not evaluated
        switch(128):
            case 1: goto L1739
            case 2: goto L1745
            case 3: goto L1751
            case 4: goto L1757
            case 5: goto L1763
            case 6: goto L1769
            case 7: goto L1775
            case 8: goto L1781
            case 9: goto L1787
            case 10: goto L1793
            case 11: goto L1799
            case 12: goto L1805
            case 13: goto L1809
            case 14: goto L1813
            case 512: goto L1817
            case 32: goto L1823
            case 64: goto L1829
            case 128: goto L1835
            case 256: goto L1841
            default: goto L1847
        phase_table[15] = 5761  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1745 ---
        phase_table[15] = 5788  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1751 ---
        phase_table[15] = 5814  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1757 ---
        phase_table[15] = 5844  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1763 ---
        phase_table[15] = 5868  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L1769 ---
        phase_table[15] = 5893  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1775 ---
        phase_table[15] = 5947  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L1781 ---
        phase_table[15] = 5971  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L1787 ---
        phase_table[15] = 6026  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1793 ---
        phase_table[15] = 6071  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L1799 ---
        phase_table[15] = 6122  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L1805 ---
        phase_table[15] = 6205  # raw literal, not evaluated
        pass
        # --- L1809 ---
        phase_table[15] = 6269  # raw literal, not evaluated
        pass
        # --- L1813 ---
        phase_table[15] = 6323  # raw literal, not evaluated
        pass
        # --- L1817 ---
        phase_table[15] = 6395  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1823 ---
        phase_table[15] = 6429  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1829 ---
        phase_table[15] = 6468  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1835 ---
        phase_table[15] = 6507  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1841 ---
        phase_table[15] = 6548  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L1847 ---
        phase_table[15] = 6588  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L1891 ---
        system_message(6627 /*" þ"*/)
        # --- L1893 ---
        if not (((var[26] & 128) == 0)):
            goto L1900
        # else: falls through here, rejoins L1900
        var[26] = (var[26] + 128)
        # --- L1900 ---
        if not (((var[26] & 128) > 0)):
            goto L1907
        # else: falls through here, rejoins L1907
        var[26] = (var[26] - 128)
        # --- L1907 ---
        if not ((group_condition_ref_2(4, 1) and group_condition_ref_2(4, 2))):
            goto L2191
        # else: falls through here, rejoins L2198
        unit[9] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[39] = random_below(100)
        if not (((var[3] == 0) and (var[39] < 2))):
            goto L2184
        # else: falls through here, rejoins L2184
        var[3] = (var[3] + 1)
        phase_table[16] = 6645  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L1930
            case 1: goto L1934
            case 2: goto L1938
            case 7: goto L1942
            default: goto L1946
        phase_table[16] = 6646  # raw literal, not evaluated
        pass
        # --- L1934 ---
        phase_table[16] = 6681  # raw literal, not evaluated
        pass
        # --- L1938 ---
        phase_table[16] = 6708  # raw literal, not evaluated
        pass
        # --- L1942 ---
        phase_table[16] = 6747  # raw literal, not evaluated
        pass
        # --- L1946 ---
        phase_table[16] = 6775  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L1960 ---
        phase_table[17] = 6828  # raw literal, not evaluated
        var[40] = random_below(4)
        if not (((random_below(4) != 7) and (var[40] >= 3))):
            goto L1973
        # else: falls through here, rejoins L1973
        var[40] = random_below(3)
        # --- L1973 ---
        switch(var[40]):
            case 0: goto L1976
            case 1: goto L1980
            case 3: goto L1984
            case 4: goto L1988
            case 5: goto L1992
            case 6: goto L1996
            case 7: goto L2000
            default: goto L2004
        phase_table[17] = 6829  # raw literal, not evaluated
        pass
        # --- L1980 ---
        phase_table[17] = 6833  # raw literal, not evaluated
        pass
        # --- L1984 ---
        phase_table[17] = 6844  # raw literal, not evaluated
        pass
        # --- L1988 ---
        phase_table[17] = 6865  # raw literal, not evaluated
        pass
        # --- L1992 ---
        phase_table[17] = 6892  # raw literal, not evaluated
        pass
        # --- L1996 ---
        phase_table[17] = 6923  # raw literal, not evaluated
        pass
        # --- L2000 ---
        phase_table[17] = 6952  # raw literal, not evaluated
        pass
        # --- L2004 ---
        phase_table[17] = 6982  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2024 ---
        phase_table[18] = 6997  # raw literal, not evaluated
        switch(256):
            case 1: goto L2030
            case 2: goto L2036
            case 3: goto L2042
            case 4: goto L2048
            case 5: goto L2054
            case 6: goto L2060
            case 7: goto L2066
            case 8: goto L2072
            case 9: goto L2078
            case 10: goto L2084
            case 11: goto L2090
            case 12: goto L2096
            case 13: goto L2100
            case 14: goto L2104
            case 512: goto L2108
            case 32: goto L2114
            case 64: goto L2120
            case 128: goto L2126
            case 256: goto L2132
            default: goto L2138
        phase_table[18] = 6998  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2036 ---
        phase_table[18] = 7025  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2042 ---
        phase_table[18] = 7051  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2048 ---
        phase_table[18] = 7081  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2054 ---
        phase_table[18] = 7105  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2060 ---
        phase_table[18] = 7130  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2066 ---
        phase_table[18] = 7184  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2072 ---
        phase_table[18] = 7208  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2078 ---
        phase_table[18] = 7263  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2084 ---
        phase_table[18] = 7308  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2090 ---
        phase_table[18] = 7359  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2096 ---
        phase_table[18] = 7442  # raw literal, not evaluated
        pass
        # --- L2100 ---
        phase_table[18] = 7506  # raw literal, not evaluated
        pass
        # --- L2104 ---
        phase_table[18] = 7560  # raw literal, not evaluated
        pass
        # --- L2108 ---
        phase_table[18] = 7632  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2114 ---
        phase_table[18] = 7666  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2120 ---
        phase_table[18] = 7705  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2126 ---
        phase_table[18] = 7744  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2132 ---
        phase_table[18] = 7785  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2138 ---
        phase_table[18] = 7825  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2182 ---
        system_message(7864 /*" þ"*/)
        # --- L2184 ---
        if not (((var[26] & 256) == 0)):
            goto L2191
        # else: falls through here, rejoins L2191
        var[26] = (var[26] + 256)
        # --- L2191 ---
        if not (((var[26] & 256) > 0)):
            goto L2198
        # else: falls through here, rejoins L2198
        var[26] = (var[26] - 256)
        # --- L2198 ---
        if not ((group_condition_ref_2(5, 1) and group_condition_ref_2(5, 2))):
            goto L2482
        # else: falls through here, rejoins L2489
        unit[10] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[42] = random_below(100)
        if not (((var[3] == 0) and (var[42] < 2))):
            goto L2475
        # else: falls through here, rejoins L2475
        var[3] = (var[3] + 1)
        phase_table[19] = 7882  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2221
            case 1: goto L2225
            case 2: goto L2229
            case 7: goto L2233
            default: goto L2237
        phase_table[19] = 7883  # raw literal, not evaluated
        pass
        # --- L2225 ---
        phase_table[19] = 7918  # raw literal, not evaluated
        pass
        # --- L2229 ---
        phase_table[19] = 7945  # raw literal, not evaluated
        pass
        # --- L2233 ---
        phase_table[19] = 7984  # raw literal, not evaluated
        pass
        # --- L2237 ---
        phase_table[19] = 8012  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2251 ---
        phase_table[20] = 8065  # raw literal, not evaluated
        var[43] = random_below(4)
        if not (((random_below(4) != 7) and (var[43] >= 3))):
            goto L2264
        # else: falls through here, rejoins L2264
        var[43] = random_below(3)
        # --- L2264 ---
        switch(var[43]):
            case 0: goto L2267
            case 1: goto L2271
            case 3: goto L2275
            case 4: goto L2279
            case 5: goto L2283
            case 6: goto L2287
            case 7: goto L2291
            default: goto L2295
        phase_table[20] = 8066  # raw literal, not evaluated
        pass
        # --- L2271 ---
        phase_table[20] = 8070  # raw literal, not evaluated
        pass
        # --- L2275 ---
        phase_table[20] = 8081  # raw literal, not evaluated
        pass
        # --- L2279 ---
        phase_table[20] = 8102  # raw literal, not evaluated
        pass
        # --- L2283 ---
        phase_table[20] = 8129  # raw literal, not evaluated
        pass
        # --- L2287 ---
        phase_table[20] = 8160  # raw literal, not evaluated
        pass
        # --- L2291 ---
        phase_table[20] = 8189  # raw literal, not evaluated
        pass
        # --- L2295 ---
        phase_table[20] = 8219  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2315 ---
        phase_table[21] = 8234  # raw literal, not evaluated
        switch(2048):
            case 1: goto L2321
            case 2: goto L2327
            case 3: goto L2333
            case 4: goto L2339
            case 5: goto L2345
            case 6: goto L2351
            case 7: goto L2357
            case 8: goto L2363
            case 9: goto L2369
            case 10: goto L2375
            case 11: goto L2381
            case 12: goto L2387
            case 13: goto L2391
            case 14: goto L2395
            case 512: goto L2399
            case 32: goto L2405
            case 64: goto L2411
            case 128: goto L2417
            case 256: goto L2423
            default: goto L2429
        phase_table[21] = 8235  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2327 ---
        phase_table[21] = 8262  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2333 ---
        phase_table[21] = 8288  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2339 ---
        phase_table[21] = 8318  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2345 ---
        phase_table[21] = 8342  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2351 ---
        phase_table[21] = 8367  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2357 ---
        phase_table[21] = 8421  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2363 ---
        phase_table[21] = 8445  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2369 ---
        phase_table[21] = 8500  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2375 ---
        phase_table[21] = 8545  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2381 ---
        phase_table[21] = 8596  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2387 ---
        phase_table[21] = 8679  # raw literal, not evaluated
        pass
        # --- L2391 ---
        phase_table[21] = 8743  # raw literal, not evaluated
        pass
        # --- L2395 ---
        phase_table[21] = 8797  # raw literal, not evaluated
        pass
        # --- L2399 ---
        phase_table[21] = 8869  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2405 ---
        phase_table[21] = 8903  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2411 ---
        phase_table[21] = 8942  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2417 ---
        phase_table[21] = 8981  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2423 ---
        phase_table[21] = 9022  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2429 ---
        phase_table[21] = 9062  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2473 ---
        system_message(9101 /*" þ"*/)
        # --- L2475 ---
        if not (((var[26] & 2048) == 0)):
            goto L2482
        # else: falls through here, rejoins L2482
        var[26] = (var[26] + 2048)
        # --- L2482 ---
        if not (((var[26] & 2048) > 0)):
            goto L2489
        # else: falls through here, rejoins L2489
        var[26] = (var[26] - 2048)
        # --- L2489 ---
        if not ((group_condition_ref_2(6, 1) and group_condition_ref_2(6, 2))):
            goto L2773
        # else: falls through here, rejoins L2780
        unit[11] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[45] = random_below(100)
        if not (((var[3] == 0) and (var[45] < 2))):
            goto L2766
        # else: falls through here, rejoins L2766
        var[3] = (var[3] + 1)
        phase_table[22] = 9119  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2512
            case 1: goto L2516
            case 2: goto L2520
            case 7: goto L2524
            default: goto L2528
        phase_table[22] = 9120  # raw literal, not evaluated
        pass
        # --- L2516 ---
        phase_table[22] = 9155  # raw literal, not evaluated
        pass
        # --- L2520 ---
        phase_table[22] = 9182  # raw literal, not evaluated
        pass
        # --- L2524 ---
        phase_table[22] = 9221  # raw literal, not evaluated
        pass
        # --- L2528 ---
        phase_table[22] = 9249  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2542 ---
        phase_table[23] = 9302  # raw literal, not evaluated
        var[46] = random_below(4)
        if not (((random_below(4) != 7) and (var[46] >= 3))):
            goto L2555
        # else: falls through here, rejoins L2555
        var[46] = random_below(3)
        # --- L2555 ---
        switch(var[46]):
            case 0: goto L2558
            case 1: goto L2562
            case 3: goto L2566
            case 4: goto L2570
            case 5: goto L2574
            case 6: goto L2578
            case 7: goto L2582
            default: goto L2586
        phase_table[23] = 9303  # raw literal, not evaluated
        pass
        # --- L2562 ---
        phase_table[23] = 9307  # raw literal, not evaluated
        pass
        # --- L2566 ---
        phase_table[23] = 9318  # raw literal, not evaluated
        pass
        # --- L2570 ---
        phase_table[23] = 9339  # raw literal, not evaluated
        pass
        # --- L2574 ---
        phase_table[23] = 9366  # raw literal, not evaluated
        pass
        # --- L2578 ---
        phase_table[23] = 9397  # raw literal, not evaluated
        pass
        # --- L2582 ---
        phase_table[23] = 9426  # raw literal, not evaluated
        pass
        # --- L2586 ---
        phase_table[23] = 9456  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2606 ---
        phase_table[24] = 9471  # raw literal, not evaluated
        switch(4096):
            case 1: goto L2612
            case 2: goto L2618
            case 3: goto L2624
            case 4: goto L2630
            case 5: goto L2636
            case 6: goto L2642
            case 7: goto L2648
            case 8: goto L2654
            case 9: goto L2660
            case 10: goto L2666
            case 11: goto L2672
            case 12: goto L2678
            case 13: goto L2682
            case 14: goto L2686
            case 512: goto L2690
            case 32: goto L2696
            case 64: goto L2702
            case 128: goto L2708
            case 256: goto L2714
            default: goto L2720
        phase_table[24] = 9472  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2618 ---
        phase_table[24] = 9499  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2624 ---
        phase_table[24] = 9525  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2630 ---
        phase_table[24] = 9555  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2636 ---
        phase_table[24] = 9579  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2642 ---
        phase_table[24] = 9604  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2648 ---
        phase_table[24] = 9658  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2654 ---
        phase_table[24] = 9682  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2660 ---
        phase_table[24] = 9737  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2666 ---
        phase_table[24] = 9782  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2672 ---
        phase_table[24] = 9833  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2678 ---
        phase_table[24] = 9916  # raw literal, not evaluated
        pass
        # --- L2682 ---
        phase_table[24] = 9980  # raw literal, not evaluated
        pass
        # --- L2686 ---
        phase_table[24] = 10034  # raw literal, not evaluated
        pass
        # --- L2690 ---
        phase_table[24] = 10106  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2696 ---
        phase_table[24] = 10140  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2702 ---
        phase_table[24] = 10179  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2708 ---
        phase_table[24] = 10218  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2714 ---
        phase_table[24] = 10259  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2720 ---
        phase_table[24] = 10299  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L2764 ---
        system_message(10338 /*" þ"*/)
        # --- L2766 ---
        if not (((var[26] & 4096) == 0)):
            goto L2773
        # else: falls through here, rejoins L2773
        var[26] = (var[26] + 4096)
        # --- L2773 ---
        if not (((var[26] & 4096) > 0)):
            goto L2780
        # else: falls through here, rejoins L2780
        var[26] = (var[26] - 4096)
        # --- L2780 ---
        var[48] = 0
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3075
        # --- L2789 ---
        if not ((set_unit_behavior(9, 12) > 0)):
            goto L3070
        # else: falls through here, rejoins L3070
        var[49] = random_below(100)
        if not (((var[3] == 0) and (var[49] < 4))):
            goto L3063
        # else: falls through here, rejoins L3063
        var[3] = (var[3] + 1)
        phase_table[25] = 10356  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L2809
            case 1: goto L2813
            case 2: goto L2817
            case 7: goto L2821
            default: goto L2825
        phase_table[25] = 10357  # raw literal, not evaluated
        pass
        # --- L2813 ---
        phase_table[25] = 10392  # raw literal, not evaluated
        pass
        # --- L2817 ---
        phase_table[25] = 10419  # raw literal, not evaluated
        pass
        # --- L2821 ---
        phase_table[25] = 10458  # raw literal, not evaluated
        pass
        # --- L2825 ---
        phase_table[25] = 10486  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L2839 ---
        phase_table[26] = 10539  # raw literal, not evaluated
        var[50] = random_below(1)
        if not (((random_below(4) != 7) and (var[50] >= 3))):
            goto L2852
        # else: falls through here, rejoins L2852
        var[50] = random_below(3)
        # --- L2852 ---
        switch(var[50]):
            case 0: goto L2855
            case 1: goto L2859
            case 3: goto L2863
            case 4: goto L2867
            case 5: goto L2871
            case 6: goto L2875
            case 7: goto L2879
            default: goto L2883
        phase_table[26] = 10540  # raw literal, not evaluated
        pass
        # --- L2859 ---
        phase_table[26] = 10544  # raw literal, not evaluated
        pass
        # --- L2863 ---
        phase_table[26] = 10555  # raw literal, not evaluated
        pass
        # --- L2867 ---
        phase_table[26] = 10576  # raw literal, not evaluated
        pass
        # --- L2871 ---
        phase_table[26] = 10603  # raw literal, not evaluated
        pass
        # --- L2875 ---
        phase_table[26] = 10634  # raw literal, not evaluated
        pass
        # --- L2879 ---
        phase_table[26] = 10663  # raw literal, not evaluated
        pass
        # --- L2883 ---
        phase_table[26] = 10693  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L2903 ---
        phase_table[27] = 10708  # raw literal, not evaluated
        switch(10):
            case 1: goto L2909
            case 2: goto L2915
            case 3: goto L2921
            case 4: goto L2927
            case 5: goto L2933
            case 6: goto L2939
            case 7: goto L2945
            case 8: goto L2951
            case 9: goto L2957
            case 10: goto L2963
            case 11: goto L2969
            case 12: goto L2975
            case 13: goto L2979
            case 14: goto L2983
            case 512: goto L2987
            case 32: goto L2993
            case 64: goto L2999
            case 128: goto L3005
            case 256: goto L3011
            default: goto L3017
        phase_table[27] = 10709  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2915 ---
        phase_table[27] = 10736  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2921 ---
        phase_table[27] = 10762  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2927 ---
        phase_table[27] = 10792  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2933 ---
        phase_table[27] = 10816  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L2939 ---
        phase_table[27] = 10841  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2945 ---
        phase_table[27] = 10895  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L2951 ---
        phase_table[27] = 10919  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L2957 ---
        phase_table[27] = 10974  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2963 ---
        phase_table[27] = 11019  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L2969 ---
        phase_table[27] = 11070  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L2975 ---
        phase_table[27] = 11153  # raw literal, not evaluated
        pass
        # --- L2979 ---
        phase_table[27] = 11217  # raw literal, not evaluated
        pass
        # --- L2983 ---
        phase_table[27] = 11271  # raw literal, not evaluated
        pass
        # --- L2987 ---
        phase_table[27] = 11343  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2993 ---
        phase_table[27] = 11377  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L2999 ---
        phase_table[27] = 11416  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3005 ---
        phase_table[27] = 11455  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3011 ---
        phase_table[27] = 11496  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3017 ---
        phase_table[27] = 11536  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3061 ---
        system_message(11575 /*" þ"*/)
        # --- L3063 ---
        if not (((set_unit_behavior(8, 12) & var[26]) == 0)):
            goto L3070
        # else: falls through here, rejoins L3070
        var[26] = (var[26] + (set_unit_behavior(8, 12) & 7136))
        # --- L3070 ---
        unit[12] = next_unit_in_group(unit[12], group=2)
        goto L2789
        # --- L3075 ---
        unit[13] = first_living_unit(group=1)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 13):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L3109
        # --- L3081 ---
        if not (group_condition_ref_2(8, 2)):
            goto L3088
        # else: falls through here, rejoins L3095
        unit[13].attr8 = 2
        # --- L3088 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L3095
        # else: falls through here, rejoins L3095
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L3095 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L3104
        # else: falls through here, rejoins L3104
        var[48] = (var[48] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2d49] - dead end, not decoded further (other branches continue independently)
        # --- L3104 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        goto L3081
        # --- L3109 ---
        if not (group_condition_ref_2(9, 2)):
            goto L3116
        # else: falls through here, rejoins L3123
        unit[13].attr8 = 2
        # --- L3116 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L3123
        # else: falls through here, rejoins L3123
        unit[13].attr8 = (set_unit_behavior(8, 13) - 1)
        # --- L3123 ---
        if not ((set_unit_behavior(8, 13) > 0)):
            goto L3132
        # else: falls through here, rejoins L3132
        var[48] = (var[48] + 1)
        pass  # message no-op
        # [UNKNOWN OPCODE 0x2d5c] - dead end, not decoded further (other branches continue independently)
        # --- L3132 ---
        unit[13] = next_unit_in_group(unit[13], group=1)
        var[52] = op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71)
        unit[12] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 12):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L6295
        # --- L3144 ---
        if not ((set_unit_behavior(5, 12) < 60)):
            goto L3153
        # else: falls through here, rejoins L6290
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        # --- L3153 ---
        switch((set_unit_behavior(8, 12) & 15)):
            case 0: goto L3156
            case 1: goto L3439
            case 2: goto L4272
            case 3: goto L4831
            case 4: goto L4841
            case 5: goto L4886
            case 10: goto L5171
            case 11: goto L5181
            case 12: goto L5579
            case 13: goto L5580
            case 14: goto L5875
            case 15: goto L5876
            default: goto L6262
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L3438
        # else: falls through here, rejoins L3438
        var[53] = random_below(100)
        if not (((var[3] == 0) and (var[53] < 40))):
            goto L3430
        # else: falls through here, rejoins L3430
        var[3] = (var[3] + 1)
        phase_table[28] = 11631  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3176
            case 1: goto L3180
            case 2: goto L3184
            case 7: goto L3188
            default: goto L3192
        phase_table[28] = 11632  # raw literal, not evaluated
        pass
        # --- L3180 ---
        phase_table[28] = 11667  # raw literal, not evaluated
        pass
        # --- L3184 ---
        phase_table[28] = 11694  # raw literal, not evaluated
        pass
        # --- L3188 ---
        phase_table[28] = 11733  # raw literal, not evaluated
        pass
        # --- L3192 ---
        phase_table[28] = 11761  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3206 ---
        phase_table[29] = 11814  # raw literal, not evaluated
        var[54] = random_below(4)
        if not (((random_below(1) != 7) and (var[54] >= 3))):
            goto L3219
        # else: falls through here, rejoins L3219
        var[54] = random_below(3)
        # --- L3219 ---
        switch(var[54]):
            case 0: goto L3222
            case 1: goto L3226
            case 3: goto L3230
            case 4: goto L3234
            case 5: goto L3238
            case 6: goto L3242
            case 7: goto L3246
            default: goto L3250
        phase_table[29] = 11815  # raw literal, not evaluated
        pass
        # --- L3226 ---
        phase_table[29] = 11819  # raw literal, not evaluated
        pass
        # --- L3230 ---
        phase_table[29] = 11830  # raw literal, not evaluated
        pass
        # --- L3234 ---
        phase_table[29] = 11851  # raw literal, not evaluated
        pass
        # --- L3238 ---
        phase_table[29] = 11878  # raw literal, not evaluated
        pass
        # --- L3242 ---
        phase_table[29] = 11909  # raw literal, not evaluated
        pass
        # --- L3246 ---
        phase_table[29] = 11938  # raw literal, not evaluated
        pass
        # --- L3250 ---
        phase_table[29] = 11968  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3270 ---
        phase_table[30] = 11983  # raw literal, not evaluated
        switch(8):
            case 1: goto L3276
            case 2: goto L3282
            case 3: goto L3288
            case 4: goto L3294
            case 5: goto L3300
            case 6: goto L3306
            case 7: goto L3312
            case 8: goto L3318
            case 9: goto L3324
            case 10: goto L3330
            case 11: goto L3336
            case 12: goto L3342
            case 13: goto L3346
            case 14: goto L3350
            case 512: goto L3354
            case 32: goto L3360
            case 64: goto L3366
            case 128: goto L3372
            case 256: goto L3378
            default: goto L3384
        phase_table[30] = 11984  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3282 ---
        phase_table[30] = 12011  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3288 ---
        phase_table[30] = 12037  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3294 ---
        phase_table[30] = 12067  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3300 ---
        phase_table[30] = 12091  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3306 ---
        phase_table[30] = 12116  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3312 ---
        phase_table[30] = 12170  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3318 ---
        phase_table[30] = 12194  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3324 ---
        phase_table[30] = 12249  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3330 ---
        phase_table[30] = 12294  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3336 ---
        phase_table[30] = 12345  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3342 ---
        phase_table[30] = 12428  # raw literal, not evaluated
        pass
        # --- L3346 ---
        phase_table[30] = 12492  # raw literal, not evaluated
        pass
        # --- L3350 ---
        phase_table[30] = 12546  # raw literal, not evaluated
        pass
        # --- L3354 ---
        phase_table[30] = 12618  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3360 ---
        phase_table[30] = 12652  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3366 ---
        phase_table[30] = 12691  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3372 ---
        phase_table[30] = 12730  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3378 ---
        phase_table[30] = 12771  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3384 ---
        phase_table[30] = 12811  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3428 ---
        system_message(12850 /*" þ"*/)
        # --- L3430 ---
        move_unit(unit[12], priority=var[52], dest_type=0, dest_arg=0)
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        # --- L3438 ---
        pass
        # --- L3439 ---
        if not ((group_condition_ref_2(10, 1) or (set_unit_behavior(9, 12) != 0))):
            goto L3722
        # else: falls through here, rejoins L4271
        if not ((set_unit_behavior(7, 12) != 6)):
            goto L3722
        # else: falls through here, rejoins L3722
        var[56] = random_below(100)
        if not (((var[3] == 0) and (var[56] < 40))):
            goto L3717
        # else: falls through here, rejoins L3717
        var[3] = (var[3] + 1)
        phase_table[31] = 12868  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3463
            case 1: goto L3467
            case 2: goto L3471
            case 7: goto L3475
            default: goto L3479
        phase_table[31] = 12869  # raw literal, not evaluated
        pass
        # --- L3467 ---
        phase_table[31] = 12904  # raw literal, not evaluated
        pass
        # --- L3471 ---
        phase_table[31] = 12931  # raw literal, not evaluated
        pass
        # --- L3475 ---
        phase_table[31] = 12970  # raw literal, not evaluated
        pass
        # --- L3479 ---
        phase_table[31] = 12998  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3493 ---
        phase_table[32] = 13051  # raw literal, not evaluated
        var[57] = random_below(4)
        if not (((random_below(1) != 7) and (var[57] >= 3))):
            goto L3506
        # else: falls through here, rejoins L3506
        var[57] = random_below(3)
        # --- L3506 ---
        switch(var[57]):
            case 0: goto L3509
            case 1: goto L3513
            case 3: goto L3517
            case 4: goto L3521
            case 5: goto L3525
            case 6: goto L3529
            case 7: goto L3533
            default: goto L3537
        phase_table[32] = 13052  # raw literal, not evaluated
        pass
        # --- L3513 ---
        phase_table[32] = 13056  # raw literal, not evaluated
        pass
        # --- L3517 ---
        phase_table[32] = 13067  # raw literal, not evaluated
        pass
        # --- L3521 ---
        phase_table[32] = 13088  # raw literal, not evaluated
        pass
        # --- L3525 ---
        phase_table[32] = 13115  # raw literal, not evaluated
        pass
        # --- L3529 ---
        phase_table[32] = 13146  # raw literal, not evaluated
        pass
        # --- L3533 ---
        phase_table[32] = 13175  # raw literal, not evaluated
        pass
        # --- L3537 ---
        phase_table[32] = 13205  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3557 ---
        phase_table[33] = 13220  # raw literal, not evaluated
        switch(3):
            case 1: goto L3563
            case 2: goto L3569
            case 3: goto L3575
            case 4: goto L3581
            case 5: goto L3587
            case 6: goto L3593
            case 7: goto L3599
            case 8: goto L3605
            case 9: goto L3611
            case 10: goto L3617
            case 11: goto L3623
            case 12: goto L3629
            case 13: goto L3633
            case 14: goto L3637
            case 512: goto L3641
            case 32: goto L3647
            case 64: goto L3653
            case 128: goto L3659
            case 256: goto L3665
            default: goto L3671
        phase_table[33] = 13221  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3569 ---
        phase_table[33] = 13248  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3575 ---
        phase_table[33] = 13274  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3581 ---
        phase_table[33] = 13304  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3587 ---
        phase_table[33] = 13328  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3593 ---
        phase_table[33] = 13353  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3599 ---
        phase_table[33] = 13407  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3605 ---
        phase_table[33] = 13431  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3611 ---
        phase_table[33] = 13486  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3617 ---
        phase_table[33] = 13531  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3623 ---
        phase_table[33] = 13582  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3629 ---
        phase_table[33] = 13665  # raw literal, not evaluated
        pass
        # --- L3633 ---
        phase_table[33] = 13729  # raw literal, not evaluated
        pass
        # --- L3637 ---
        phase_table[33] = 13783  # raw literal, not evaluated
        pass
        # --- L3641 ---
        phase_table[33] = 13855  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3647 ---
        phase_table[33] = 13889  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3653 ---
        phase_table[33] = 13928  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3659 ---
        phase_table[33] = 13967  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3665 ---
        phase_table[33] = 14008  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3671 ---
        phase_table[33] = 14048  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3715 ---
        system_message(14087 /*" þ"*/)
        # --- L3717 ---
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L3722 ---
        if not ((set_unit_behavior(7, 12) != 2)):
            goto L4001
        # else: falls through here, rejoins L4271
        move_unit(unit[12], priority=2, dest_type=0, dest_arg=0)
        var[59] = random_below(100)
        if not (((var[3] == 0) and (var[59] < 4))):
            goto L4001
        # else: falls through here, rejoins L4001
        var[3] = (var[3] + 1)
        phase_table[34] = 14105  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L3747
            case 1: goto L3751
            case 2: goto L3755
            case 7: goto L3759
            default: goto L3763
        phase_table[34] = 14106  # raw literal, not evaluated
        pass
        # --- L3751 ---
        phase_table[34] = 14141  # raw literal, not evaluated
        pass
        # --- L3755 ---
        phase_table[34] = 14168  # raw literal, not evaluated
        pass
        # --- L3759 ---
        phase_table[34] = 14207  # raw literal, not evaluated
        pass
        # --- L3763 ---
        phase_table[34] = 14235  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L3777 ---
        phase_table[35] = 14288  # raw literal, not evaluated
        var[60] = random_below(4)
        if not (((random_below(1) != 7) and (var[60] >= 3))):
            goto L3790
        # else: falls through here, rejoins L3790
        var[60] = random_below(3)
        # --- L3790 ---
        switch(var[60]):
            case 0: goto L3793
            case 1: goto L3797
            case 3: goto L3801
            case 4: goto L3805
            case 5: goto L3809
            case 6: goto L3813
            case 7: goto L3817
            default: goto L3821
        phase_table[35] = 14289  # raw literal, not evaluated
        pass
        # --- L3797 ---
        phase_table[35] = 14293  # raw literal, not evaluated
        pass
        # --- L3801 ---
        phase_table[35] = 14304  # raw literal, not evaluated
        pass
        # --- L3805 ---
        phase_table[35] = 14325  # raw literal, not evaluated
        pass
        # --- L3809 ---
        phase_table[35] = 14352  # raw literal, not evaluated
        pass
        # --- L3813 ---
        phase_table[35] = 14383  # raw literal, not evaluated
        pass
        # --- L3817 ---
        phase_table[35] = 14412  # raw literal, not evaluated
        pass
        # --- L3821 ---
        phase_table[35] = 14442  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L3841 ---
        phase_table[36] = 14457  # raw literal, not evaluated
        switch(2):
            case 1: goto L3847
            case 2: goto L3853
            case 3: goto L3859
            case 4: goto L3865
            case 5: goto L3871
            case 6: goto L3877
            case 7: goto L3883
            case 8: goto L3889
            case 9: goto L3895
            case 10: goto L3901
            case 11: goto L3907
            case 12: goto L3913
            case 13: goto L3917
            case 14: goto L3921
            case 512: goto L3925
            case 32: goto L3931
            case 64: goto L3937
            case 128: goto L3943
            case 256: goto L3949
            default: goto L3955
        phase_table[36] = 14458  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3853 ---
        phase_table[36] = 14485  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3859 ---
        phase_table[36] = 14511  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3865 ---
        phase_table[36] = 14541  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3871 ---
        phase_table[36] = 14565  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L3877 ---
        phase_table[36] = 14590  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3883 ---
        phase_table[36] = 14644  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L3889 ---
        phase_table[36] = 14668  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L3895 ---
        phase_table[36] = 14723  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3901 ---
        phase_table[36] = 14768  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L3907 ---
        phase_table[36] = 14819  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L3913 ---
        phase_table[36] = 14902  # raw literal, not evaluated
        pass
        # --- L3917 ---
        phase_table[36] = 14966  # raw literal, not evaluated
        pass
        # --- L3921 ---
        phase_table[36] = 15020  # raw literal, not evaluated
        pass
        # --- L3925 ---
        phase_table[36] = 15092  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3931 ---
        phase_table[36] = 15126  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3937 ---
        phase_table[36] = 15165  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3943 ---
        phase_table[36] = 15204  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3949 ---
        phase_table[36] = 15245  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L3955 ---
        phase_table[36] = 15285  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L3999 ---
        system_message(15324 /*" þ\""*/)
        # --- L4001 ---
        var[62] = random_below(100)
        if not (((var[3] == 0) and (var[62] < 4))):
            goto L4271
        # else: falls through here, rejoins L4271
        var[3] = (var[3] + 1)
        phase_table[37] = 15342  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4017
            case 1: goto L4021
            case 2: goto L4025
            case 7: goto L4029
            default: goto L4033
        phase_table[37] = 15343  # raw literal, not evaluated
        pass
        # --- L4021 ---
        phase_table[37] = 15378  # raw literal, not evaluated
        pass
        # --- L4025 ---
        phase_table[37] = 15405  # raw literal, not evaluated
        pass
        # --- L4029 ---
        phase_table[37] = 15444  # raw literal, not evaluated
        pass
        # --- L4033 ---
        phase_table[37] = 15472  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4047 ---
        phase_table[38] = 15525  # raw literal, not evaluated
        var[63] = random_below(4)
        if not (((random_below(1) != 7) and (var[63] >= 3))):
            goto L4060
        # else: falls through here, rejoins L4060
        var[63] = random_below(3)
        # --- L4060 ---
        switch(var[63]):
            case 0: goto L4063
            case 1: goto L4067
            case 3: goto L4071
            case 4: goto L4075
            case 5: goto L4079
            case 6: goto L4083
            case 7: goto L4087
            default: goto L4091
        phase_table[38] = 15526  # raw literal, not evaluated
        pass
        # --- L4067 ---
        phase_table[38] = 15530  # raw literal, not evaluated
        pass
        # --- L4071 ---
        phase_table[38] = 15541  # raw literal, not evaluated
        pass
        # --- L4075 ---
        phase_table[38] = 15562  # raw literal, not evaluated
        pass
        # --- L4079 ---
        phase_table[38] = 15589  # raw literal, not evaluated
        pass
        # --- L4083 ---
        phase_table[38] = 15620  # raw literal, not evaluated
        pass
        # --- L4087 ---
        phase_table[38] = 15649  # raw literal, not evaluated
        pass
        # --- L4091 ---
        phase_table[38] = 15679  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4111 ---
        phase_table[39] = 15694  # raw literal, not evaluated
        switch(1):
            case 1: goto L4117
            case 2: goto L4123
            case 3: goto L4129
            case 4: goto L4135
            case 5: goto L4141
            case 6: goto L4147
            case 7: goto L4153
            case 8: goto L4159
            case 9: goto L4165
            case 10: goto L4171
            case 11: goto L4177
            case 12: goto L4183
            case 13: goto L4187
            case 14: goto L4191
            case 512: goto L4195
            case 32: goto L4201
            case 64: goto L4207
            case 128: goto L4213
            case 256: goto L4219
            default: goto L4225
        phase_table[39] = 15695  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4123 ---
        phase_table[39] = 15722  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4129 ---
        phase_table[39] = 15748  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4135 ---
        phase_table[39] = 15778  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4141 ---
        phase_table[39] = 15802  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4147 ---
        phase_table[39] = 15827  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4153 ---
        phase_table[39] = 15881  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4159 ---
        phase_table[39] = 15905  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4165 ---
        phase_table[39] = 15960  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4171 ---
        phase_table[39] = 16005  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4177 ---
        phase_table[39] = 16056  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4183 ---
        phase_table[39] = 16139  # raw literal, not evaluated
        pass
        # --- L4187 ---
        phase_table[39] = 16203  # raw literal, not evaluated
        pass
        # --- L4191 ---
        phase_table[39] = 16257  # raw literal, not evaluated
        pass
        # --- L4195 ---
        phase_table[39] = 16329  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4201 ---
        phase_table[39] = 16363  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4207 ---
        phase_table[39] = 16402  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4213 ---
        phase_table[39] = 16441  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4219 ---
        phase_table[39] = 16482  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4225 ---
        phase_table[39] = 16522  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4269 ---
        system_message(16561 /*" þ%"*/)
        # --- L4271 ---
        pass
        # --- L4272 ---
        if not (((var[26] & 512) > 0)):
            goto L4551
        # else: falls through here, rejoins L4830
        var[65] = random_below(100)
        if not (((var[3] == 0) and (var[65] < 4))):
            goto L4546
        # else: falls through here, rejoins L4546
        var[3] = (var[3] + 1)
        phase_table[40] = 16579  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4292
            case 1: goto L4296
            case 2: goto L4300
            case 7: goto L4304
            default: goto L4308
        phase_table[40] = 16580  # raw literal, not evaluated
        pass
        # --- L4296 ---
        phase_table[40] = 16615  # raw literal, not evaluated
        pass
        # --- L4300 ---
        phase_table[40] = 16642  # raw literal, not evaluated
        pass
        # --- L4304 ---
        phase_table[40] = 16681  # raw literal, not evaluated
        pass
        # --- L4308 ---
        phase_table[40] = 16709  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4322 ---
        phase_table[41] = 16762  # raw literal, not evaluated
        var[66] = random_below(4)
        if not (((random_below(1) != 7) and (var[66] >= 3))):
            goto L4335
        # else: falls through here, rejoins L4335
        var[66] = random_below(3)
        # --- L4335 ---
        switch(var[66]):
            case 0: goto L4338
            case 1: goto L4342
            case 3: goto L4346
            case 4: goto L4350
            case 5: goto L4354
            case 6: goto L4358
            case 7: goto L4362
            default: goto L4366
        phase_table[41] = 16763  # raw literal, not evaluated
        pass
        # --- L4342 ---
        phase_table[41] = 16767  # raw literal, not evaluated
        pass
        # --- L4346 ---
        phase_table[41] = 16778  # raw literal, not evaluated
        pass
        # --- L4350 ---
        phase_table[41] = 16799  # raw literal, not evaluated
        pass
        # --- L4354 ---
        phase_table[41] = 16826  # raw literal, not evaluated
        pass
        # --- L4358 ---
        phase_table[41] = 16857  # raw literal, not evaluated
        pass
        # --- L4362 ---
        phase_table[41] = 16886  # raw literal, not evaluated
        pass
        # --- L4366 ---
        phase_table[41] = 16916  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4386 ---
        phase_table[42] = 16931  # raw literal, not evaluated
        switch(4):
            case 1: goto L4392
            case 2: goto L4398
            case 3: goto L4404
            case 4: goto L4410
            case 5: goto L4416
            case 6: goto L4422
            case 7: goto L4428
            case 8: goto L4434
            case 9: goto L4440
            case 10: goto L4446
            case 11: goto L4452
            case 12: goto L4458
            case 13: goto L4462
            case 14: goto L4466
            case 512: goto L4470
            case 32: goto L4476
            case 64: goto L4482
            case 128: goto L4488
            case 256: goto L4494
            default: goto L4500
        phase_table[42] = 16932  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4398 ---
        phase_table[42] = 16959  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4404 ---
        phase_table[42] = 16985  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4410 ---
        phase_table[42] = 17015  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4416 ---
        phase_table[42] = 17039  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4422 ---
        phase_table[42] = 17064  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4428 ---
        phase_table[42] = 17118  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4434 ---
        phase_table[42] = 17142  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4440 ---
        phase_table[42] = 17197  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4446 ---
        phase_table[42] = 17242  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4452 ---
        phase_table[42] = 17293  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4458 ---
        phase_table[42] = 17376  # raw literal, not evaluated
        pass
        # --- L4462 ---
        phase_table[42] = 17440  # raw literal, not evaluated
        pass
        # --- L4466 ---
        phase_table[42] = 17494  # raw literal, not evaluated
        pass
        # --- L4470 ---
        phase_table[42] = 17566  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4476 ---
        phase_table[42] = 17600  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4482 ---
        phase_table[42] = 17639  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4488 ---
        phase_table[42] = 17678  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4494 ---
        phase_table[42] = 17719  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4500 ---
        phase_table[42] = 17759  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4544 ---
        system_message(17798 /*" þ("*/)
        # --- L4546 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        # --- L4551 ---
        if not (((var[26] & 128) > 0)):
            goto L4830
        # else: falls through here, rejoins L4830
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=3)
        var[68] = random_below(100)
        if not (((var[3] == 0) and (var[68] < 4))):
            goto L4830
        # else: falls through here, rejoins L4830
        var[3] = (var[3] + 1)
        phase_table[43] = 17816  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4576
            case 1: goto L4580
            case 2: goto L4584
            case 7: goto L4588
            default: goto L4592
        phase_table[43] = 17817  # raw literal, not evaluated
        pass
        # --- L4580 ---
        phase_table[43] = 17852  # raw literal, not evaluated
        pass
        # --- L4584 ---
        phase_table[43] = 17879  # raw literal, not evaluated
        pass
        # --- L4588 ---
        phase_table[43] = 17918  # raw literal, not evaluated
        pass
        # --- L4592 ---
        phase_table[43] = 17946  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4606 ---
        phase_table[44] = 17999  # raw literal, not evaluated
        var[69] = random_below(4)
        if not (((random_below(1) != 7) and (var[69] >= 3))):
            goto L4619
        # else: falls through here, rejoins L4619
        var[69] = random_below(3)
        # --- L4619 ---
        switch(var[69]):
            case 0: goto L4622
            case 1: goto L4626
            case 3: goto L4630
            case 4: goto L4634
            case 5: goto L4638
            case 6: goto L4642
            case 7: goto L4646
            default: goto L4650
        phase_table[44] = 18000  # raw literal, not evaluated
        pass
        # --- L4626 ---
        phase_table[44] = 18004  # raw literal, not evaluated
        pass
        # --- L4630 ---
        phase_table[44] = 18015  # raw literal, not evaluated
        pass
        # --- L4634 ---
        phase_table[44] = 18036  # raw literal, not evaluated
        pass
        # --- L4638 ---
        phase_table[44] = 18063  # raw literal, not evaluated
        pass
        # --- L4642 ---
        phase_table[44] = 18094  # raw literal, not evaluated
        pass
        # --- L4646 ---
        phase_table[44] = 18123  # raw literal, not evaluated
        pass
        # --- L4650 ---
        phase_table[44] = 18153  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L4670 ---
        phase_table[45] = 18168  # raw literal, not evaluated
        switch(5):
            case 1: goto L4676
            case 2: goto L4682
            case 3: goto L4688
            case 4: goto L4694
            case 5: goto L4700
            case 6: goto L4706
            case 7: goto L4712
            case 8: goto L4718
            case 9: goto L4724
            case 10: goto L4730
            case 11: goto L4736
            case 12: goto L4742
            case 13: goto L4746
            case 14: goto L4750
            case 512: goto L4754
            case 32: goto L4760
            case 64: goto L4766
            case 128: goto L4772
            case 256: goto L4778
            default: goto L4784
        phase_table[45] = 18169  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4682 ---
        phase_table[45] = 18196  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4688 ---
        phase_table[45] = 18222  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4694 ---
        phase_table[45] = 18252  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4700 ---
        phase_table[45] = 18276  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L4706 ---
        phase_table[45] = 18301  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4712 ---
        phase_table[45] = 18355  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L4718 ---
        phase_table[45] = 18379  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L4724 ---
        phase_table[45] = 18434  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4730 ---
        phase_table[45] = 18479  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L4736 ---
        phase_table[45] = 18530  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L4742 ---
        phase_table[45] = 18613  # raw literal, not evaluated
        pass
        # --- L4746 ---
        phase_table[45] = 18677  # raw literal, not evaluated
        pass
        # --- L4750 ---
        phase_table[45] = 18731  # raw literal, not evaluated
        pass
        # --- L4754 ---
        phase_table[45] = 18803  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4760 ---
        phase_table[45] = 18837  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4766 ---
        phase_table[45] = 18876  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4772 ---
        phase_table[45] = 18915  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4778 ---
        phase_table[45] = 18956  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L4784 ---
        phase_table[45] = 18996  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L4828 ---
        system_message(19035 /*" þ+"*/)
        # --- L4830 ---
        pass
        # --- L4831 ---
        if not (((var[26] & 512) > 0)):
            goto L4840
        # else: falls through here, rejoins L4840
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        # --- L4840 ---
        pass
        # --- L4841 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L4844
            case 64: goto L4850
            case 128: goto L4856
            case 256: goto L4862
            default: goto L4868
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=1)
        pass
        # --- L4850 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=2)
        pass
        # --- L4856 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=3)
        pass
        # --- L4862 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=4)
        pass
        # --- L4868 ---
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4885 ---
        pass
        # --- L4886 ---
        if not ((var[48] > 0)):
            goto L5165
        # else: falls through here, rejoins L5170
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        var[71] = random_below(100)
        if not (((var[3] == 0) and (var[71] < 4))):
            goto L5165
        # else: falls through here, rejoins L5165
        var[3] = (var[3] + 1)
        phase_table[46] = 19053  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L4911
            case 1: goto L4915
            case 2: goto L4919
            case 7: goto L4923
            default: goto L4927
        phase_table[46] = 19054  # raw literal, not evaluated
        pass
        # --- L4915 ---
        phase_table[46] = 19089  # raw literal, not evaluated
        pass
        # --- L4919 ---
        phase_table[46] = 19116  # raw literal, not evaluated
        pass
        # --- L4923 ---
        phase_table[46] = 19155  # raw literal, not evaluated
        pass
        # --- L4927 ---
        phase_table[46] = 19183  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L4941 ---
        phase_table[47] = 19236  # raw literal, not evaluated
        var[72] = random_below(4)
        if not (((random_below(1) != 7) and (var[72] >= 3))):
            goto L4954
        # else: falls through here, rejoins L4954
        var[72] = random_below(3)
        # --- L4954 ---
        switch(var[72]):
            case 0: goto L4957
            case 1: goto L4961
            case 3: goto L4965
            case 4: goto L4969
            case 5: goto L4973
            case 6: goto L4977
            case 7: goto L4981
            default: goto L4985
        phase_table[47] = 19237  # raw literal, not evaluated
        pass
        # --- L4961 ---
        phase_table[47] = 19241  # raw literal, not evaluated
        pass
        # --- L4965 ---
        phase_table[47] = 19252  # raw literal, not evaluated
        pass
        # --- L4969 ---
        phase_table[47] = 19273  # raw literal, not evaluated
        pass
        # --- L4973 ---
        phase_table[47] = 19300  # raw literal, not evaluated
        pass
        # --- L4977 ---
        phase_table[47] = 19331  # raw literal, not evaluated
        pass
        # --- L4981 ---
        phase_table[47] = 19360  # raw literal, not evaluated
        pass
        # --- L4985 ---
        phase_table[47] = 19390  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5005 ---
        phase_table[48] = 19405  # raw literal, not evaluated
        switch(6):
            case 1: goto L5011
            case 2: goto L5017
            case 3: goto L5023
            case 4: goto L5029
            case 5: goto L5035
            case 6: goto L5041
            case 7: goto L5047
            case 8: goto L5053
            case 9: goto L5059
            case 10: goto L5065
            case 11: goto L5071
            case 12: goto L5077
            case 13: goto L5081
            case 14: goto L5085
            case 512: goto L5089
            case 32: goto L5095
            case 64: goto L5101
            case 128: goto L5107
            case 256: goto L5113
            default: goto L5119
        phase_table[48] = 19406  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5017 ---
        phase_table[48] = 19433  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5023 ---
        phase_table[48] = 19459  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5029 ---
        phase_table[48] = 19489  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5035 ---
        phase_table[48] = 19513  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5041 ---
        phase_table[48] = 19538  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5047 ---
        phase_table[48] = 19592  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5053 ---
        phase_table[48] = 19616  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5059 ---
        phase_table[48] = 19671  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5065 ---
        phase_table[48] = 19716  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5071 ---
        phase_table[48] = 19767  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5077 ---
        phase_table[48] = 19850  # raw literal, not evaluated
        pass
        # --- L5081 ---
        phase_table[48] = 19914  # raw literal, not evaluated
        pass
        # --- L5085 ---
        phase_table[48] = 19968  # raw literal, not evaluated
        pass
        # --- L5089 ---
        phase_table[48] = 20040  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5095 ---
        phase_table[48] = 20074  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5101 ---
        phase_table[48] = 20113  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5107 ---
        phase_table[48] = 20152  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5113 ---
        phase_table[48] = 20193  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5119 ---
        phase_table[48] = 20233  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5163 ---
        system_message(20272 /*" þ."*/)
        # --- L5165 ---
        move_unit(unit[12], priority=0, dest_type=0, dest_arg=0)
        # --- L5170 ---
        pass
        # --- L5171 ---
        if not ((set_unit_behavior(7, 12) != 3)):
            goto L5180
        # else: falls through here, rejoins L5180
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        # --- L5180 ---
        pass
        # --- L5181 ---
        if not ((((var[26] & 7136) == 0) and (var[48] == 0))):
            goto L5554
        # else: falls through here, rejoins L5578
        var[74] = random_below(100)
        if not (((var[3] == 0) and (var[74] < 4))):
            goto L5455
        # else: falls through here, rejoins L5455
        var[3] = (var[3] + 1)
        phase_table[49] = 20290  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5201
            case 1: goto L5205
            case 2: goto L5209
            case 7: goto L5213
            default: goto L5217
        phase_table[49] = 20291  # raw literal, not evaluated
        pass
        # --- L5205 ---
        phase_table[49] = 20326  # raw literal, not evaluated
        pass
        # --- L5209 ---
        phase_table[49] = 20353  # raw literal, not evaluated
        pass
        # --- L5213 ---
        phase_table[49] = 20392  # raw literal, not evaluated
        pass
        # --- L5217 ---
        phase_table[49] = 20420  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5231 ---
        phase_table[50] = 20473  # raw literal, not evaluated
        var[75] = random_below(4)
        if not (((random_below(1) != 7) and (var[75] >= 3))):
            goto L5244
        # else: falls through here, rejoins L5244
        var[75] = random_below(3)
        # --- L5244 ---
        switch(var[75]):
            case 0: goto L5247
            case 1: goto L5251
            case 3: goto L5255
            case 4: goto L5259
            case 5: goto L5263
            case 6: goto L5267
            case 7: goto L5271
            default: goto L5275
        phase_table[50] = 20474  # raw literal, not evaluated
        pass
        # --- L5251 ---
        phase_table[50] = 20478  # raw literal, not evaluated
        pass
        # --- L5255 ---
        phase_table[50] = 20489  # raw literal, not evaluated
        pass
        # --- L5259 ---
        phase_table[50] = 20510  # raw literal, not evaluated
        pass
        # --- L5263 ---
        phase_table[50] = 20537  # raw literal, not evaluated
        pass
        # --- L5267 ---
        phase_table[50] = 20568  # raw literal, not evaluated
        pass
        # --- L5271 ---
        phase_table[50] = 20597  # raw literal, not evaluated
        pass
        # --- L5275 ---
        phase_table[50] = 20627  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5295 ---
        phase_table[51] = 20642  # raw literal, not evaluated
        switch(7):
            case 1: goto L5301
            case 2: goto L5307
            case 3: goto L5313
            case 4: goto L5319
            case 5: goto L5325
            case 6: goto L5331
            case 7: goto L5337
            case 8: goto L5343
            case 9: goto L5349
            case 10: goto L5355
            case 11: goto L5361
            case 12: goto L5367
            case 13: goto L5371
            case 14: goto L5375
            case 512: goto L5379
            case 32: goto L5385
            case 64: goto L5391
            case 128: goto L5397
            case 256: goto L5403
            default: goto L5409
        phase_table[51] = 20643  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5307 ---
        phase_table[51] = 20670  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5313 ---
        phase_table[51] = 20696  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5319 ---
        phase_table[51] = 20726  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5325 ---
        phase_table[51] = 20750  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5331 ---
        phase_table[51] = 20775  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5337 ---
        phase_table[51] = 20829  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5343 ---
        phase_table[51] = 20853  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5349 ---
        phase_table[51] = 20908  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5355 ---
        phase_table[51] = 20953  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5361 ---
        phase_table[51] = 21004  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5367 ---
        phase_table[51] = 21087  # raw literal, not evaluated
        pass
        # --- L5371 ---
        phase_table[51] = 21151  # raw literal, not evaluated
        pass
        # --- L5375 ---
        phase_table[51] = 21205  # raw literal, not evaluated
        pass
        # --- L5379 ---
        phase_table[51] = 21277  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5385 ---
        phase_table[51] = 21311  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5391 ---
        phase_table[51] = 21350  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5397 ---
        phase_table[51] = 21389  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5403 ---
        phase_table[51] = 21430  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5409 ---
        phase_table[51] = 21470  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5453 ---
        system_message(21509 /*" þ1"*/)
        # --- L5455 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L5458
            case 64: goto L5476
            case 128: goto L5494
            case 256: goto L5512
            default: goto L5530
        if not (group_condition_ref(1, 12)):
            goto L5466
        # else: falls through here, rejoins L5466
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5466 ---
        condition[1] = Condition(var_ref=1, expr_offset=3962)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L5476 ---
        if not (group_condition_ref(2, 12)):
            goto L5484
        # else: falls through here, rejoins L5484
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5484 ---
        condition[2] = Condition(var_ref=2, expr_offset=3983)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L5494 ---
        if not (group_condition_ref(3, 12)):
            goto L5502
        # else: falls through here, rejoins L5502
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5502 ---
        condition[3] = Condition(var_ref=3, expr_offset=4004)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L5512 ---
        if not (group_condition_ref(4, 12)):
            goto L5520
        # else: falls through here, rejoins L5520
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L5520 ---
        condition[4] = Condition(var_ref=4, expr_offset=4025)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L5530 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5547 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L5554
        # else: falls through here, rejoins L5554
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L5554 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L5569
        # else: falls through here, rejoins L5578
        timer[1] = current_turn + 2
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[52], dest_type=0, dest_arg=0)
        # --- L5569 ---
        if not (timer_expired(1)):
            goto L5578
        # else: falls through here, rejoins L5578
        move_unit(unit[12], priority=3, dest_type=2, dest_arg=7)
        # --- L5578 ---
        pass
        # --- L5579 ---
        pass
        # --- L5580 ---
        if not ((set_unit_behavior(7, 12) != 4)):
            goto L5859
        # else: falls through here, rejoins L5874
        var[77] = random_below(100)
        if not (((var[3] == 0) and (var[77] < 4))):
            goto L5854
        # else: falls through here, rejoins L5854
        var[3] = (var[3] + 1)
        phase_table[52] = 21527  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5600
            case 1: goto L5604
            case 2: goto L5608
            case 7: goto L5612
            default: goto L5616
        phase_table[52] = 21528  # raw literal, not evaluated
        pass
        # --- L5604 ---
        phase_table[52] = 21563  # raw literal, not evaluated
        pass
        # --- L5608 ---
        phase_table[52] = 21590  # raw literal, not evaluated
        pass
        # --- L5612 ---
        phase_table[52] = 21629  # raw literal, not evaluated
        pass
        # --- L5616 ---
        phase_table[52] = 21657  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5630 ---
        phase_table[53] = 21710  # raw literal, not evaluated
        var[78] = random_below(4)
        if not (((random_below(1) != 7) and (var[78] >= 3))):
            goto L5643
        # else: falls through here, rejoins L5643
        var[78] = random_below(3)
        # --- L5643 ---
        switch(var[78]):
            case 0: goto L5646
            case 1: goto L5650
            case 3: goto L5654
            case 4: goto L5658
            case 5: goto L5662
            case 6: goto L5666
            case 7: goto L5670
            default: goto L5674
        phase_table[53] = 21711  # raw literal, not evaluated
        pass
        # --- L5650 ---
        phase_table[53] = 21715  # raw literal, not evaluated
        pass
        # --- L5654 ---
        phase_table[53] = 21726  # raw literal, not evaluated
        pass
        # --- L5658 ---
        phase_table[53] = 21747  # raw literal, not evaluated
        pass
        # --- L5662 ---
        phase_table[53] = 21774  # raw literal, not evaluated
        pass
        # --- L5666 ---
        phase_table[53] = 21805  # raw literal, not evaluated
        pass
        # --- L5670 ---
        phase_table[53] = 21834  # raw literal, not evaluated
        pass
        # --- L5674 ---
        phase_table[53] = 21864  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5694 ---
        phase_table[54] = 21879  # raw literal, not evaluated
        switch(9):
            case 1: goto L5700
            case 2: goto L5706
            case 3: goto L5712
            case 4: goto L5718
            case 5: goto L5724
            case 6: goto L5730
            case 7: goto L5736
            case 8: goto L5742
            case 9: goto L5748
            case 10: goto L5754
            case 11: goto L5760
            case 12: goto L5766
            case 13: goto L5770
            case 14: goto L5774
            case 512: goto L5778
            case 32: goto L5784
            case 64: goto L5790
            case 128: goto L5796
            case 256: goto L5802
            default: goto L5808
        phase_table[54] = 21880  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5706 ---
        phase_table[54] = 21907  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5712 ---
        phase_table[54] = 21933  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5718 ---
        phase_table[54] = 21963  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5724 ---
        phase_table[54] = 21987  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L5730 ---
        phase_table[54] = 22012  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5736 ---
        phase_table[54] = 22066  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L5742 ---
        phase_table[54] = 22090  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L5748 ---
        phase_table[54] = 22145  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5754 ---
        phase_table[54] = 22190  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L5760 ---
        phase_table[54] = 22241  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L5766 ---
        phase_table[54] = 22324  # raw literal, not evaluated
        pass
        # --- L5770 ---
        phase_table[54] = 22388  # raw literal, not evaluated
        pass
        # --- L5774 ---
        phase_table[54] = 22442  # raw literal, not evaluated
        pass
        # --- L5778 ---
        phase_table[54] = 22514  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5784 ---
        phase_table[54] = 22548  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5790 ---
        phase_table[54] = 22587  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5796 ---
        phase_table[54] = 22626  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5802 ---
        phase_table[54] = 22667  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L5808 ---
        phase_table[54] = 22707  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L5852 ---
        system_message(22746 /*" þ4"*/)
        # --- L5854 ---
        move_unit(unit[12], priority=4, dest_type=3, dest_arg=14)
        # --- L5859 ---
        var[80] = set_unit_behavior(10, 12)
        unit[15] = var[80]
        if not (group_condition(15)):
            goto L5874
        # else: falls through here, rejoins L5874
        move_unit(unit[12], priority=6, dest_type=0, dest_arg=0)
        # --- L5874 ---
        pass
        # --- L5875 ---
        pass
        # --- L5876 ---
        if not ((((var[26] & 7136) == 0) & (var[48] == 0))):
            goto L6249
        # else: falls through here, rejoins L6261
        var[81] = random_below(100)
        if not (((var[3] == 0) and (var[81] < 4))):
            goto L6150
        # else: falls through here, rejoins L6150
        var[3] = (var[3] + 1)
        phase_table[55] = 22764  # raw literal, not evaluated
        switch(random_below(1)):
            case 0: goto L5896
            case 1: goto L5900
            case 2: goto L5904
            case 7: goto L5908
            default: goto L5912
        phase_table[55] = 22765  # raw literal, not evaluated
        pass
        # --- L5900 ---
        phase_table[55] = 22800  # raw literal, not evaluated
        pass
        # --- L5904 ---
        phase_table[55] = 22827  # raw literal, not evaluated
        pass
        # --- L5908 ---
        phase_table[55] = 22866  # raw literal, not evaluated
        pass
        # --- L5912 ---
        phase_table[55] = 22894  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L5926 ---
        phase_table[56] = 22947  # raw literal, not evaluated
        var[82] = random_below(4)
        if not (((random_below(1) != 7) and (var[82] >= 3))):
            goto L5939
        # else: falls through here, rejoins L5939
        var[82] = random_below(3)
        # --- L5939 ---
        switch(var[82]):
            case 0: goto L5942
            case 1: goto L5946
            case 3: goto L5950
            case 4: goto L5954
            case 5: goto L5958
            case 6: goto L5962
            case 7: goto L5966
            default: goto L5970
        phase_table[56] = 22948  # raw literal, not evaluated
        pass
        # --- L5946 ---
        phase_table[56] = 22952  # raw literal, not evaluated
        pass
        # --- L5950 ---
        phase_table[56] = 22963  # raw literal, not evaluated
        pass
        # --- L5954 ---
        phase_table[56] = 22984  # raw literal, not evaluated
        pass
        # --- L5958 ---
        phase_table[56] = 23011  # raw literal, not evaluated
        pass
        # --- L5962 ---
        phase_table[56] = 23042  # raw literal, not evaluated
        pass
        # --- L5966 ---
        phase_table[56] = 23071  # raw literal, not evaluated
        pass
        # --- L5970 ---
        phase_table[56] = 23101  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L5990 ---
        phase_table[57] = 23116  # raw literal, not evaluated
        switch(7):
            case 1: goto L5996
            case 2: goto L6002
            case 3: goto L6008
            case 4: goto L6014
            case 5: goto L6020
            case 6: goto L6026
            case 7: goto L6032
            case 8: goto L6038
            case 9: goto L6044
            case 10: goto L6050
            case 11: goto L6056
            case 12: goto L6062
            case 13: goto L6066
            case 14: goto L6070
            case 512: goto L6074
            case 32: goto L6080
            case 64: goto L6086
            case 128: goto L6092
            case 256: goto L6098
            default: goto L6104
        phase_table[57] = 23117  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6002 ---
        phase_table[57] = 23144  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6008 ---
        phase_table[57] = 23170  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6014 ---
        phase_table[57] = 23200  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6020 ---
        phase_table[57] = 23224  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6026 ---
        phase_table[57] = 23249  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6032 ---
        phase_table[57] = 23303  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6038 ---
        phase_table[57] = 23327  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6044 ---
        phase_table[57] = 23382  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6050 ---
        phase_table[57] = 23427  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6056 ---
        phase_table[57] = 23478  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6062 ---
        phase_table[57] = 23561  # raw literal, not evaluated
        pass
        # --- L6066 ---
        phase_table[57] = 23625  # raw literal, not evaluated
        pass
        # --- L6070 ---
        phase_table[57] = 23679  # raw literal, not evaluated
        pass
        # --- L6074 ---
        phase_table[57] = 23751  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6080 ---
        phase_table[57] = 23785  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6086 ---
        phase_table[57] = 23824  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6092 ---
        phase_table[57] = 23863  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6098 ---
        phase_table[57] = 23904  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6104 ---
        phase_table[57] = 23944  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6148 ---
        system_message(23983 /*" þ7"*/)
        # --- L6150 ---
        switch((set_unit_behavior(8, 12) & 7136)):
            case 32: goto L6153
            case 64: goto L6171
            case 128: goto L6189
            case 256: goto L6207
            default: goto L6225
        if not (group_condition_ref(1, 12)):
            goto L6161
        # else: falls through here, rejoins L6161
        hex[1] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6161 ---
        condition[1] = Condition(var_ref=1, expr_offset=4458)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=1)
        pass
        # --- L6171 ---
        if not (group_condition_ref(2, 12)):
            goto L6179
        # else: falls through here, rejoins L6179
        hex[2] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6179 ---
        condition[2] = Condition(var_ref=2, expr_offset=4479)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=2)
        pass
        # --- L6189 ---
        if not (group_condition_ref(3, 12)):
            goto L6197
        # else: falls through here, rejoins L6197
        hex[3] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6197 ---
        condition[3] = Condition(var_ref=3, expr_offset=4500)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=3)
        pass
        # --- L6207 ---
        if not (group_condition_ref(4, 12)):
            goto L6215
        # else: falls through here, rejoins L6215
        hex[4] = hex_along_path(toward=random_below(31), steps=(random_below(200) + 80))
        # --- L6215 ---
        condition[4] = Condition(var_ref=4, expr_offset=4521)
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=4)
        pass
        # --- L6225 ---
        move_unit(unit[12], priority=1, dest_type=2, dest_arg=7)
        pass
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6242 ---
        if not (((set_unit_behavior(8, 12) & 1024) > 0)):
            goto L6249
        # else: falls through here, rejoins L6249
        unit[12].attr8 = (set_unit_behavior(8, 12) - 1024)
        # --- L6249 ---
        if not (((set_unit_behavior(8, 12) & 1024) == 0)):
            goto L6261
        # else: falls through here, rejoins L6261
        unit[12].attr8 = (set_unit_behavior(8, 12) + 1024)
        move_unit(unit[12], priority=var[52], dest_type=0, dest_arg=0)
        # --- L6261 ---
        pass
        # --- L6262 ---
        pass
        pass
        # [UNKNOWN OPCODE 0x000c] - dead end, not decoded further (other branches continue independently)
        # --- L6290 ---
        unit[12] = next_unit_in_group(unit[12], group=2)
        goto L3144
        # --- L6295 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x5dc1] - dead end, not decoded further (other branches continue independently)
        # --- L6484 ---
        if (((not all_group_alive(2)) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L6489
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6489 ---
        if (timer_expired(3) and (var[5] > 0)) and not flag[3]:
            flag[3] = True
            ...  # run block below, converges at L6495
        system_message(24393 /*"Mobile defense node threatened. Call all nearby units from defense pool."*/)
        # --- L6495 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((not all_group_alive(2))):
                goto L6507
            # else: falls through here, rejoins L6512
            play_sound(35)
            system_message(24466 /*"Objective Achieved.  The Cybrid forces were caught by total surprise and destroyed. Unitech now has control of this region. Once neighboring regions have been secured, Unitech will use this location for a staging area. Excellent work, commander!"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6507 ---
            system_message(24712 /*"The mission was a failure.  The Cybrids still maintain an active defense node in your area and may now mount a counterstrike on neighboring regions. You were warned failure was not an option... now Unitech command is considering your viability as a commander."*/)
            set_unit_objective(unit=1, state=2)
            # --- L6512 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
