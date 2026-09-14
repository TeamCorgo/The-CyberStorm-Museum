# SIT203.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = 0
var[2] = (random_below(4) + 3)
var[4] = 500
var[5] = random_below(7)
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[7] == 0)):
        goto L20
    # else: falls through here, rejoins L20
    var[7] = (random_below(var[11]) + var[12])
    # --- L20 ---
    var[13] = (stat(0) / 1)
    var[13] = (var[13] - 200)
    if not ((stat(10) < (stat(11) / 3))):
        goto L36
    # else: falls through here, rejoins L39
    var[13] = ((stat(0) * 2) / 1)
    var[13] = (var[13] - 200)
    # --- L36 ---
    var[13] = ((stat(0) / 3) / 1)
    # --- L39 ---
    var[13] = (var[13] - 200)
    var[13] = (var[13] - 200)
    var[14] = 8192
    while (var[14] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L63
    # --- L51 ---
    if not ((var[13] < var[14])):
        goto L58
    # else: falls through here, rejoins L58
    var[9] = (var[9] + 1)
    # --- L58 ---
    var[14] = (var[14] / 2)
    goto L51
    # --- L63 ---
    var[15] = (26 - random_below((var[9] + 1)))
    var[16] = (random_below(360) - 180)
    hex[6] = hex_along_path(toward=var[15], steps=var[16])
    condition[5] = Condition(var_ref=6, expr_offset=156)
    var[17] = 1
    var[18] = 179
    hex[5] = hex_along_path(toward=var[17], steps=var[18])
    unit[3] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=5)
    unit[3].attr8 = 999
    hex[9] = (0, 0)
    var[19] = set_objective_at_hex(6)
    place_objective_marker(hex[5], ((random_below(3) + var[19]) - 1), 6, 8, 50)
    timer[3] = current_turn + 2
    var[20] = 0
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L138
    # else: falls through here, rejoins L141
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L131
    # else: falls through here, rejoins L138
    var[10] = 100
    # --- L131 ---
    if not ((var[10] > 1300)):
        goto L138
    # else: falls through here, rejoins L138
    var[10] = 1300
    # --- L138 ---
    var[10] = var[13]
    # --- L141 ---
    var[13] = (var[13] - var[10])
    hex[1] = hex_along_path(toward=(var[15] - 3), steps=var[16])
    condition[1] = Condition(var_ref=1, expr_offset=260)
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=1)
    move_group(group[3], priority=3, dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 33
    if not ((stat(10) < (stat(11) / 3))):
        goto L173
    # else: falls through here, rejoins L173
    unit[2] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=1)
    # --- L173 ---
    if not ((var[13] > 0)):
        goto L236
    # else: falls through here, rejoins L236
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L201
    # else: falls through here, rejoins L204
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L194
    # else: falls through here, rejoins L201
    var[10] = 100
    # --- L194 ---
    if not ((var[10] > 1200)):
        goto L201
    # else: falls through here, rejoins L201
    var[10] = 1200
    # --- L201 ---
    var[10] = var[13]
    # --- L204 ---
    var[13] = (var[13] - var[10])
    hex[2] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] - 40) - random_below(10)))
    condition[2] = Condition(var_ref=2, expr_offset=352)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=2)
    move_group(group[3], priority=3, dest_type=2, dest_arg=2)
    for u in group[3]: u.attr8 = 79
    if not ((stat(10) < (stat(11) / 3))):
        goto L236
    # else: falls through here, rejoins L236
    unit[2] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=2)
    # --- L236 ---
    if not ((var[13] > 0)):
        goto L299
    # else: falls through here, rejoins L299
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L264
    # else: falls through here, rejoins L267
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L257
    # else: falls through here, rejoins L264
    var[10] = 100
    # --- L257 ---
    if not ((var[10] > 1200)):
        goto L264
    # else: falls through here, rejoins L264
    var[10] = 1200
    # --- L264 ---
    var[10] = var[13]
    # --- L267 ---
    var[13] = (var[13] - var[10])
    hex[3] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] + 40) + random_below(10)))
    condition[3] = Condition(var_ref=3, expr_offset=446)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=3)
    move_group(group[3], priority=3, dest_type=2, dest_arg=3)
    for u in group[3]: u.attr8 = 143
    if not ((stat(10) < (stat(11) / 3))):
        goto L299
    # else: falls through here, rejoins L299
    unit[2] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=3)
    # --- L299 ---
    if not ((var[13] > 0)):
        goto L362
    # else: falls through here, rejoins L362
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L327
    # else: falls through here, rejoins L330
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L320
    # else: falls through here, rejoins L327
    var[10] = 100
    # --- L320 ---
    if not ((var[10] > 1200)):
        goto L327
    # else: falls through here, rejoins L327
    var[10] = 1200
    # --- L327 ---
    var[10] = var[13]
    # --- L330 ---
    var[13] = (var[13] - var[10])
    hex[4] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] - 40) - random_below(10)))
    condition[4] = Condition(var_ref=4, expr_offset=540)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=4)
    move_group(group[3], priority=3, dest_type=2, dest_arg=4)
    for u in group[3]: u.attr8 = 271
    if not ((stat(10) < (stat(11) / 3))):
        goto L362
    # else: falls through here, rejoins L362
    unit[2] = spawn_unit(type=13 /*spawns with escorts*/, min_weapon_range=12, hex_ref=4)
    # --- L362 ---
    var[21] = 0
    if not ((var[13] > 50)):
        goto L485
    # else: falls through here, rejoins L485
    while (var[13] > 50):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L485
    # --- L372 ---
    if not ((var[13] > 200)):
        goto L393
    # else: falls through here, rejoins L396
    var[10] = (var[13] / 2)
    if not ((var[10] < 200)):
        goto L386
    # else: falls through here, rejoins L393
    var[10] = 200
    # --- L386 ---
    if not ((var[10] > 1300)):
        goto L393
    # else: falls through here, rejoins L393
    var[10] = 1300
    # --- L393 ---
    var[10] = var[13]
    # --- L396 ---
    var[13] = (var[13] - var[10])
    var[22] = random_below(100)
    if not (((var[22] < 40) or (var[20] >= 4))):
        goto L438
    # else: falls through here, rejoins L483
    var[23] = 31
    var[24] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[23], steps=var[24])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    var[21] = (6 + random_below(10))
    if not ((var[21] > var[8])):
        goto L435
    # else: falls through here, rejoins L435
    var[8] = var[21]
    # --- L435 ---
    for u in group[3]: u.attr1 = var[21]
    # --- L438 ---
    var[20] = (var[20] + 1)
    if not ((var[22] < 70)):
        goto L464
    # else: falls through here, rejoins L483
    var[25] = 31
    var[26] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[25], steps=var[26])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    # --- L464 ---
    var[27] = 31
    var[28] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[27], steps=var[28])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    # --- L483 ---
    goto L372
    # --- L485 ---
    timer[2] = current_turn + 1
    if not ((stat(11) < 3)):
        goto L494
    # else: falls through here, rejoins L494
    system_message(306 /*"Warning: Ore extractors disengaged. You may engage extractors in the internals display."*/)
    # --- L494 ---
    if not ((stat(11) > 2)):
        goto L768
    # else: falls through here, rejoins L768
    var[29] = random_below(100)
    if not (((var[6] == 0) and (var[29] < 100))):
        goto L768
    # else: falls through here, rejoins L768
    var[6] = (var[6] + 1)
    phase_table[1] = 394  # raw literal, not evaluated
    switch(7):
        case 0: goto L514
        case 1: goto L518
        case 2: goto L522
        case 7: goto L526
        default: goto L530
    phase_table[1] = 395  # raw literal, not evaluated
    pass
    # --- L518 ---
    phase_table[1] = 430  # raw literal, not evaluated
    pass
    # --- L522 ---
    phase_table[1] = 457  # raw literal, not evaluated
    pass
    # --- L526 ---
    phase_table[1] = 496  # raw literal, not evaluated
    pass
    # --- L530 ---
    phase_table[1] = 524  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
    # --- L544 ---
    phase_table[2] = 577  # raw literal, not evaluated
    var[30] = var[2]
    if not ((0 and (var[30] >= 3))):
        goto L557
    # else: falls through here, rejoins L557
    var[30] = random_below(3)
    # --- L557 ---
    switch(var[30]):
        case 0: goto L560
        case 1: goto L564
        case 3: goto L568
        case 4: goto L572
        case 5: goto L576
        case 6: goto L580
        case 7: goto L584
        default: goto L588
    phase_table[2] = 578  # raw literal, not evaluated
    pass
    # --- L564 ---
    phase_table[2] = 582  # raw literal, not evaluated
    pass
    # --- L568 ---
    phase_table[2] = 593  # raw literal, not evaluated
    pass
    # --- L572 ---
    phase_table[2] = 614  # raw literal, not evaluated
    pass
    # --- L576 ---
    phase_table[2] = 641  # raw literal, not evaluated
    pass
    # --- L580 ---
    phase_table[2] = 672  # raw literal, not evaluated
    pass
    # --- L584 ---
    phase_table[2] = 701  # raw literal, not evaluated
    pass
    # --- L588 ---
    phase_table[2] = 731  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
    # --- L608 ---
    phase_table[3] = 746  # raw literal, not evaluated
    switch(12):
        case 1: goto L614
        case 2: goto L620
        case 3: goto L626
        case 4: goto L632
        case 5: goto L638
        case 6: goto L644
        case 7: goto L650
        case 8: goto L656
        case 9: goto L662
        case 10: goto L668
        case 11: goto L674
        case 12: goto L680
        case 13: goto L684
        case 14: goto L688
        case 512: goto L692
        case 32: goto L698
        case 64: goto L704
        case 128: goto L710
        case 256: goto L716
        default: goto L722
    phase_table[3] = 747  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L620 ---
    phase_table[3] = 774  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L626 ---
    phase_table[3] = 800  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L632 ---
    phase_table[3] = 830  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L638 ---
    phase_table[3] = 854  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L644 ---
    phase_table[3] = 879  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L650 ---
    phase_table[3] = 933  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L656 ---
    phase_table[3] = 957  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L662 ---
    phase_table[3] = 1012  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L668 ---
    phase_table[3] = 1057  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L674 ---
    phase_table[3] = 1108  # raw literal, not evaluated
    play_sound(259)
    pass
    # --- L680 ---
    phase_table[3] = 1191  # raw literal, not evaluated
    pass
    # --- L684 ---
    phase_table[3] = 1255  # raw literal, not evaluated
    pass
    # --- L688 ---
    phase_table[3] = 1309  # raw literal, not evaluated
    pass
    # --- L692 ---
    phase_table[3] = 1381  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L698 ---
    phase_table[3] = 1415  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L704 ---
    phase_table[3] = 1454  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L710 ---
    phase_table[3] = 1493  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L716 ---
    phase_table[3] = 1534  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L722 ---
    phase_table[3] = 1574  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
    # --- L766 ---
    system_message(1613 /*" þ"*/)
    # --- L768 ---
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[8] = 0
        var[32] = 0
        var[33] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L801
        var[34] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L799
        # --- L791 ---
        var[34] = (var[34] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L791
        # --- L799 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x065f] - dead end, not decoded further (other branches continue independently)
        # --- L801 ---
        if not (timer_expired(2)):
            goto L6580
        # else: falls through here, rejoins L6580
        timer[2] = current_turn + 1
        var[6] = 0
        if not (group_condition(3)):
            goto L817
        # else: falls through here, rejoins L817
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0675] - dead end, not decoded further (other branches continue independently)
        # --- L817 ---
        if not ((not group_all_alive(3))):
            goto L823
        # else: falls through here, rejoins L823
        pass  # message no-op
        # [UNKNOWN OPCODE 0x068d] - dead end, not decoded further (other branches continue independently)
        # --- L823 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06a9] - dead end, not decoded further (other branches continue independently)
        # --- L6580 ---
        if (((any_group_alive(1) or (not all_group_alive(2))) or (stat(3) >= var[4])) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6585
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6585 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((stat(3) >= var[4])):
                goto L6613
            # else: falls through here, rejoins L6629
            play_sound(35)
            if not (((not group_condition(3)) and group_all_alive(3))):
                goto L6598
            # else: falls through here, rejoins L6598
            system_message(24553 /*"Congratulations! You have mined your target amount of ore. Return to the Herc Carrier for pickup."*/)
            # --- L6598 ---
            if not (((not group_all_alive(3)) and (not group_condition(3)))):
                goto L6604
            # else: falls through here, rejoins L6604
            system_message(24651 /*"Congratulations! You have mined your target amount of ore. You will be picked up when you secure the area."*/)
            # --- L6604 ---
            if not (group_condition(3)):
                goto L6610
            # else: falls through here, rejoins L6610
            system_message(24758 /*"You have mined your target amount of ore. Since your Herc Carrier is destroyed, you must clear the area of all Cybrids for pickup."*/)
            # --- L6610 ---
            set_unit_objective(unit=1, state=1)
            # --- L6613 ---
            if not ((not all_group_alive(2))):
                goto L6624
            # else: falls through here, rejoins L6629
            play_sound(35)
            system_message(24889 /*"The immediate Cybrid threat has been eliminated. All ore not retrieved by your units will be automined by Unitech teams. Congratulations, your success has once again increased Unitech profits."*/)
            set_unit_objective(unit=1, state=1)
            # --- L6624 ---
            system_message(25082 /*"The mission was a failure.  The Cybrids remain in control of this region.  Your defeat has been noted by Unitech command and the appropriate measures have been initiated. "*/)
            set_unit_objective(unit=1, state=2)
            # --- L6629 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
