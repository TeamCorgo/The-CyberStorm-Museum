# SIT202.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = 500
var[2] = random_below(7)
var[3] = 0
var[4] = (random_below(4) + 3)
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[7] == 0)):
        goto L20
    # else: falls through here, rejoins L20
    var[7] = (random_below(var[11]) + var[12])
    # --- L20 ---
    if not ((stat(10) < (stat(11) / 3))):
        goto L30
    # else: falls through here, rejoins L33
    var[13] = (stat(0) / 1)
    var[13] = (var[13] - 200)
    # --- L30 ---
    var[13] = ((stat(0) / 3) / 1)
    # --- L33 ---
    var[13] = (var[13] - 200)
    var[13] = (var[13] - 200)
    var[14] = 8192
    while (var[14] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L57
    # --- L45 ---
    if not ((var[13] < var[14])):
        goto L52
    # else: falls through here, rejoins L52
    var[9] = (var[9] + 1)
    # --- L52 ---
    var[14] = (var[14] / 2)
    goto L45
    # --- L57 ---
    var[15] = (26 - random_below((var[9] + 1)))
    var[16] = (random_below(360) - 180)
    hex[6] = hex_along_path(toward=var[15], steps=var[16])
    condition[5] = Condition(var_ref=6, expr_offset=142)
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
        goto L132
    # else: falls through here, rejoins L135
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L125
    # else: falls through here, rejoins L132
    var[10] = 100
    # --- L125 ---
    if not ((var[10] > 1300)):
        goto L132
    # else: falls through here, rejoins L132
    var[10] = 1300
    # --- L132 ---
    var[10] = var[13]
    # --- L135 ---
    var[13] = (var[13] - var[10])
    hex[1] = hex_along_path(toward=(var[15] - 3), steps=var[16])
    condition[1] = Condition(var_ref=1, expr_offset=246)
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=1)
    move_group(group[3], priority=3, dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 33
    if not ((stat(10) < (stat(11) / 3))):
        goto L167
    # else: falls through here, rejoins L167
    unit[2] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=1)
    # --- L167 ---
    if not ((var[13] > 0)):
        goto L230
    # else: falls through here, rejoins L230
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L195
    # else: falls through here, rejoins L198
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L188
    # else: falls through here, rejoins L195
    var[10] = 100
    # --- L188 ---
    if not ((var[10] > 1200)):
        goto L195
    # else: falls through here, rejoins L195
    var[10] = 1200
    # --- L195 ---
    var[10] = var[13]
    # --- L198 ---
    var[13] = (var[13] - var[10])
    hex[2] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] - 40) - random_below(10)))
    condition[2] = Condition(var_ref=2, expr_offset=338)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=2)
    move_group(group[3], priority=3, dest_type=2, dest_arg=2)
    for u in group[3]: u.attr8 = 65
    if not ((stat(10) < (stat(11) / 3))):
        goto L230
    # else: falls through here, rejoins L230
    unit[2] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=2)
    # --- L230 ---
    if not ((var[13] > 0)):
        goto L293
    # else: falls through here, rejoins L293
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L258
    # else: falls through here, rejoins L261
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L251
    # else: falls through here, rejoins L258
    var[10] = 100
    # --- L251 ---
    if not ((var[10] > 1200)):
        goto L258
    # else: falls through here, rejoins L258
    var[10] = 1200
    # --- L258 ---
    var[10] = var[13]
    # --- L261 ---
    var[13] = (var[13] - var[10])
    hex[3] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] + 40) + random_below(10)))
    condition[3] = Condition(var_ref=3, expr_offset=432)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=3)
    move_group(group[3], priority=3, dest_type=2, dest_arg=3)
    for u in group[3]: u.attr8 = 129
    if not ((stat(10) < (stat(11) / 3))):
        goto L293
    # else: falls through here, rejoins L293
    unit[2] = spawn_unit(type=15 /*spawns with escorts*/, min_weapon_range=12, hex_ref=3)
    # --- L293 ---
    if not ((var[13] > 0)):
        goto L356
    # else: falls through here, rejoins L356
    var[20] = (var[20] + 1)
    if not ((var[13] > 100)):
        goto L321
    # else: falls through here, rejoins L324
    var[10] = (var[13] / 2)
    if not ((var[10] < 100)):
        goto L314
    # else: falls through here, rejoins L321
    var[10] = 100
    # --- L314 ---
    if not ((var[10] > 1200)):
        goto L321
    # else: falls through here, rejoins L321
    var[10] = 1200
    # --- L321 ---
    var[10] = var[13]
    # --- L324 ---
    var[13] = (var[13] - var[10])
    hex[4] = hex_along_path(toward=((var[15] - 3) - random_below(3)), steps=((var[16] - 40) - random_below(10)))
    condition[4] = Condition(var_ref=4, expr_offset=526)
    group[3] = spawn_ai_squad(point_budget=(var[10] / 2), hex_ref=4)
    move_group(group[3], priority=3, dest_type=2, dest_arg=4)
    for u in group[3]: u.attr8 = 257
    if not ((stat(10) < (stat(11) / 3))):
        goto L356
    # else: falls through here, rejoins L356
    unit[2] = spawn_unit(type=15 /*spawns with escorts*/, min_weapon_range=12, hex_ref=4)
    # --- L356 ---
    var[21] = 0
    if not ((var[13] > 50)):
        goto L479
    # else: falls through here, rejoins L479
    while (var[13] > 50):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L479
    # --- L366 ---
    if not ((var[13] > 200)):
        goto L387
    # else: falls through here, rejoins L390
    var[10] = (var[13] / 2)
    if not ((var[10] < 200)):
        goto L380
    # else: falls through here, rejoins L387
    var[10] = 200
    # --- L380 ---
    if not ((var[10] > 1300)):
        goto L387
    # else: falls through here, rejoins L387
    var[10] = 1300
    # --- L387 ---
    var[10] = var[13]
    # --- L390 ---
    var[13] = (var[13] - var[10])
    var[22] = random_below(100)
    if not (((var[22] < 40) or (var[20] >= 4))):
        goto L432
    # else: falls through here, rejoins L477
    var[23] = 31
    var[24] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[23], steps=var[24])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    var[21] = (6 + random_below(10))
    if not ((var[21] > var[8])):
        goto L429
    # else: falls through here, rejoins L429
    var[8] = var[21]
    # --- L429 ---
    for u in group[3]: u.attr1 = var[21]
    # --- L432 ---
    var[20] = (var[20] + 1)
    if not ((var[22] < 70)):
        goto L458
    # else: falls through here, rejoins L477
    var[25] = 31
    var[26] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[25], steps=var[26])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    # --- L458 ---
    var[27] = 31
    var[28] = (random_below(180) - 90)
    hex[7] = hex_along_path(toward=var[27], steps=var[28])
    group[3] = spawn_ai_squad(point_budget=var[10], hex_ref=7)
    move_group(group[3], priority=op_0xb03d(5, 8, 6, 15, 7, 15, 8, 10, 9, 10, 10, 13, 71), dest_type=0, dest_arg=0)
    # --- L477 ---
    goto L366
    # --- L479 ---
    timer[2] = current_turn + 1
    if not ((stat(11) < 3)):
        goto L488
    # else: falls through here, rejoins L488
    system_message(304 /*"Warning: Ore extractors disengaged. You may engage extractors in the internals display."*/)
    # --- L488 ---
    if not ((stat(11) > 2)):
        goto L762
    # else: falls through here, rejoins L762
    var[29] = random_below(100)
    if not (((var[6] == 0) and (var[29] < 100))):
        goto L762
    # else: falls through here, rejoins L762
    var[6] = (var[6] + 1)
    phase_table[1] = 392  # raw literal, not evaluated
    switch(7):
        case 0: goto L508
        case 1: goto L512
        case 2: goto L516
        case 7: goto L520
        default: goto L524
    phase_table[1] = 393  # raw literal, not evaluated
    pass
    # --- L512 ---
    phase_table[1] = 428  # raw literal, not evaluated
    pass
    # --- L516 ---
    phase_table[1] = 455  # raw literal, not evaluated
    pass
    # --- L520 ---
    phase_table[1] = 494  # raw literal, not evaluated
    pass
    # --- L524 ---
    phase_table[1] = 522  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
    # --- L538 ---
    phase_table[2] = 575  # raw literal, not evaluated
    var[30] = var[4]
    if not ((0 and (var[30] >= 3))):
        goto L551
    # else: falls through here, rejoins L551
    var[30] = random_below(3)
    # --- L551 ---
    switch(var[30]):
        case 0: goto L554
        case 1: goto L558
        case 3: goto L562
        case 4: goto L566
        case 5: goto L570
        case 6: goto L574
        case 7: goto L578
        default: goto L582
    phase_table[2] = 576  # raw literal, not evaluated
    pass
    # --- L558 ---
    phase_table[2] = 580  # raw literal, not evaluated
    pass
    # --- L562 ---
    phase_table[2] = 591  # raw literal, not evaluated
    pass
    # --- L566 ---
    phase_table[2] = 612  # raw literal, not evaluated
    pass
    # --- L570 ---
    phase_table[2] = 639  # raw literal, not evaluated
    pass
    # --- L574 ---
    phase_table[2] = 670  # raw literal, not evaluated
    pass
    # --- L578 ---
    phase_table[2] = 699  # raw literal, not evaluated
    pass
    # --- L582 ---
    phase_table[2] = 729  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
    # --- L602 ---
    phase_table[3] = 744  # raw literal, not evaluated
    switch(12):
        case 1: goto L608
        case 2: goto L614
        case 3: goto L620
        case 4: goto L626
        case 5: goto L632
        case 6: goto L638
        case 7: goto L644
        case 8: goto L650
        case 9: goto L656
        case 10: goto L662
        case 11: goto L668
        case 12: goto L674
        case 13: goto L678
        case 14: goto L682
        case 512: goto L686
        case 32: goto L692
        case 64: goto L698
        case 128: goto L704
        case 256: goto L710
        default: goto L716
    phase_table[3] = 745  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L614 ---
    phase_table[3] = 772  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L620 ---
    phase_table[3] = 798  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L626 ---
    phase_table[3] = 828  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L632 ---
    phase_table[3] = 852  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L638 ---
    phase_table[3] = 877  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L644 ---
    phase_table[3] = 931  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L650 ---
    phase_table[3] = 955  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L656 ---
    phase_table[3] = 1010  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L662 ---
    phase_table[3] = 1055  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L668 ---
    phase_table[3] = 1106  # raw literal, not evaluated
    play_sound(259)
    pass
    # --- L674 ---
    phase_table[3] = 1189  # raw literal, not evaluated
    pass
    # --- L678 ---
    phase_table[3] = 1253  # raw literal, not evaluated
    pass
    # --- L682 ---
    phase_table[3] = 1307  # raw literal, not evaluated
    pass
    # --- L686 ---
    phase_table[3] = 1379  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L692 ---
    phase_table[3] = 1413  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L698 ---
    phase_table[3] = 1452  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L704 ---
    phase_table[3] = 1491  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L710 ---
    phase_table[3] = 1532  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L716 ---
    phase_table[3] = 1572  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
    # --- L760 ---
    system_message(1611 /*" þ"*/)
    # --- L762 ---
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[8] = 0
        var[32] = 0
        var[33] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L795
        var[34] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L793
        # --- L785 ---
        var[34] = (var[34] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L785
        # --- L793 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x065d] - dead end, not decoded further (other branches continue independently)
        # --- L795 ---
        if not (timer_expired(2)):
            goto L6460
        # else: falls through here, rejoins L6460
        timer[2] = current_turn + 1
        var[6] = 0
        if not (group_condition(3)):
            goto L811
        # else: falls through here, rejoins L811
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0673] - dead end, not decoded further (other branches continue independently)
        # --- L811 ---
        if not ((not group_all_alive(3))):
            goto L817
        # else: falls through here, rejoins L817
        pass  # message no-op
        # [UNKNOWN OPCODE 0x068b] - dead end, not decoded further (other branches continue independently)
        # --- L817 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06a7] - dead end, not decoded further (other branches continue independently)
        # --- L6460 ---
        if (((any_group_alive(1) or (stat(3) >= var[1])) or (not all_group_alive(1))) or (not all_group_alive(2))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6465
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6465 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((stat(3) >= var[1])):
                goto L6493
            # else: falls through here, rejoins L6509
            play_sound(35)
            if not ((group_all_alive(3) and (not group_condition(3)))):
                goto L6478
            # else: falls through here, rejoins L6478
            system_message(24367 /*"Congratulations! You have mined your target amount of ore. Return to the Herc Carrier for pickup."*/)
            # --- L6478 ---
            if not (((not group_all_alive(3)) and (not group_condition(3)))):
                goto L6484
            # else: falls through here, rejoins L6484
            system_message(24465 /*"Congratulations! You have mined your target amount of ore. You will be picked up when you secure the area."*/)
            # --- L6484 ---
            if not (group_condition(3)):
                goto L6490
            # else: falls through here, rejoins L6490
            system_message(24572 /*"You have mined your target amount of ore. Since your Herc Carrier is destroyed, you must clear the area of all Cybrids for pickup."*/)
            # --- L6490 ---
            set_unit_objective(unit=1, state=1)
            # --- L6493 ---
            if not ((any_group_alive(2) or (not all_group_alive(2)))):
                goto L6504
            # else: falls through here, rejoins L6509
            play_sound(35)
            system_message(24703 /*"The immediate Cybrid threat has been eliminated. All ore not retrieved by your units will be automined by Unitech teams. Congratulations, your success has once again increased Unitech profits."*/)
            set_unit_objective(unit=1, state=1)
            # --- L6504 ---
            system_message(24896 /*"The mission was a failure.  The Cybrids remain in control of this region.  Your defeat has been noted by Unitech command and the appropriate measures have been initiated. "*/)
            set_unit_objective(unit=1, state=2)
            # --- L6509 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
