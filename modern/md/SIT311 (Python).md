# SIT311.CS

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
    hex[10] = hex_along_path(toward=1, steps=180)
    unit[2] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=10)
    hex[11] = (0, 0)
    var[18] = set_objective_at_hex(8)
    place_objective_marker(hex[10], ((random_below(3) + var[18]) - 1), 6, 8, 50)
    condition[7] = Condition(var_ref=7, expr_offset=207)
    timer[3] = current_turn + 2
    var[19] = 0
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L147
    # else: falls through here, rejoins L150
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L140
    # else: falls through here, rejoins L147
    var[7] = 300
    # --- L140 ---
    if not ((var[7] > 1200)):
        goto L147
    # else: falls through here, rejoins L147
    var[7] = 1200
    # --- L147 ---
    var[7] = var[10]
    # --- L150 ---
    var[10] = (var[10] - var[7])
    hex[1] = hex_along_path(toward=(var[12] - 2), steps=var[13])
    condition[1] = Condition(var_ref=1, expr_offset=268)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=1)
    move_group(group[3], priority=3, dest_type=2, dest_arg=1)
    for u in group[3]: u.attr8 = 47
    if not ((var[10] > 0)):
        goto L227
    # else: falls through here, rejoins L227
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L201
    # else: falls through here, rejoins L204
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L194
    # else: falls through here, rejoins L201
    var[7] = 300
    # --- L194 ---
    if not ((var[7] > 1200)):
        goto L201
    # else: falls through here, rejoins L201
    var[7] = 1200
    # --- L201 ---
    var[7] = var[10]
    # --- L204 ---
    var[10] = (var[10] - var[7])
    hex[2] = hex_along_path(toward=(var[12] - random_below(3)), steps=((var[13] - 20) - random_below(10)))
    condition[2] = Condition(var_ref=2, expr_offset=345)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=2)
    move_group(group[3], priority=3, dest_type=2, dest_arg=2)
    for u in group[3]: u.attr8 = 79
    # --- L227 ---
    if not ((var[10] > 0)):
        goto L281
    # else: falls through here, rejoins L281
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L255
    # else: falls through here, rejoins L258
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L248
    # else: falls through here, rejoins L255
    var[7] = 300
    # --- L248 ---
    if not ((var[7] > 1200)):
        goto L255
    # else: falls through here, rejoins L255
    var[7] = 1200
    # --- L255 ---
    var[7] = var[10]
    # --- L258 ---
    var[10] = (var[10] - var[7])
    hex[3] = hex_along_path(toward=(var[12] - random_below(3)), steps=(var[13] + random_below(10)))
    condition[3] = Condition(var_ref=3, expr_offset=420)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=3)
    move_group(group[3], priority=3, dest_type=2, dest_arg=3)
    for u in group[3]: u.attr8 = 143
    # --- L281 ---
    if not ((var[10] > 0)):
        goto L335
    # else: falls through here, rejoins L335
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L309
    # else: falls through here, rejoins L312
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L302
    # else: falls through here, rejoins L309
    var[7] = 300
    # --- L302 ---
    if not ((var[7] > 1200)):
        goto L309
    # else: falls through here, rejoins L309
    var[7] = 1200
    # --- L309 ---
    var[7] = var[10]
    # --- L312 ---
    var[10] = (var[10] - var[7])
    hex[4] = hex_along_path(toward=(var[12] - random_below(3)), steps=(var[13] - random_below(10)))
    condition[4] = Condition(var_ref=4, expr_offset=495)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=4)
    move_group(group[3], priority=3, dest_type=2, dest_arg=4)
    for u in group[3]: u.attr8 = 271
    # --- L335 ---
    if not ((var[10] > 0)):
        goto L389
    # else: falls through here, rejoins L389
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L363
    # else: falls through here, rejoins L366
    var[7] = (var[10] / 2)
    if not ((var[7] < 300)):
        goto L356
    # else: falls through here, rejoins L363
    var[7] = 300
    # --- L356 ---
    if not ((var[7] > 1200)):
        goto L363
    # else: falls through here, rejoins L363
    var[7] = 1200
    # --- L363 ---
    var[7] = var[10]
    # --- L366 ---
    var[10] = (var[10] - var[7])
    hex[5] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] - 60))
    condition[5] = Condition(var_ref=5, expr_offset=571)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=5)
    move_group(group[3], priority=3, dest_type=2, dest_arg=5)
    for u in group[3]: u.attr8 = 2063
    # --- L389 ---
    if not ((var[10] > 0)):
        goto L443
    # else: falls through here, rejoins L443
    var[19] = (var[19] + 1)
    if not ((var[10] > 300)):
        goto L417
    # else: falls through here, rejoins L420
    var[7] = (var[10] / 1)
    if not ((var[7] < 300)):
        goto L410
    # else: falls through here, rejoins L417
    var[7] = 300
    # --- L410 ---
    if not ((var[7] > 1200)):
        goto L417
    # else: falls through here, rejoins L417
    var[7] = 1200
    # --- L417 ---
    var[7] = var[10]
    # --- L420 ---
    var[10] = (var[10] - var[7])
    hex[6] = hex_along_path(toward=((random_below(5) + 5) - var[6]), steps=(var[13] + 60))
    condition[6] = Condition(var_ref=6, expr_offset=647)
    group[3] = spawn_ai_squad(point_budget=var[7], hex_ref=6)
    move_group(group[3], priority=3, dest_type=2, dest_arg=6)
    for u in group[3]: u.attr8 = 4107
    # --- L443 ---
    timer[2] = current_turn + 1
    var[20] = random_below(100)
    if not (((var[3] == 0) and (var[20] < 100))):
        goto L716
    # else: falls through here, rejoins L716
    var[3] = (var[3] + 1)
    phase_table[1] = 216  # raw literal, not evaluated
    switch(7):
        case 0: goto L462
        case 1: goto L466
        case 2: goto L470
        case 7: goto L474
        default: goto L478
    phase_table[1] = 217  # raw literal, not evaluated
    pass
    # --- L466 ---
    phase_table[1] = 252  # raw literal, not evaluated
    pass
    # --- L470 ---
    phase_table[1] = 279  # raw literal, not evaluated
    pass
    # --- L474 ---
    phase_table[1] = 318  # raw literal, not evaluated
    pass
    # --- L478 ---
    phase_table[1] = 346  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
    # --- L492 ---
    phase_table[2] = 399  # raw literal, not evaluated
    var[21] = var[1]
    if not ((0 and (var[21] >= 3))):
        goto L505
    # else: falls through here, rejoins L505
    var[21] = random_below(3)
    # --- L505 ---
    switch(var[21]):
        case 0: goto L508
        case 1: goto L512
        case 3: goto L516
        case 4: goto L520
        case 5: goto L524
        case 6: goto L528
        case 7: goto L532
        default: goto L536
    phase_table[2] = 400  # raw literal, not evaluated
    pass
    # --- L512 ---
    phase_table[2] = 404  # raw literal, not evaluated
    pass
    # --- L516 ---
    phase_table[2] = 415  # raw literal, not evaluated
    pass
    # --- L520 ---
    phase_table[2] = 436  # raw literal, not evaluated
    pass
    # --- L524 ---
    phase_table[2] = 463  # raw literal, not evaluated
    pass
    # --- L528 ---
    phase_table[2] = 494  # raw literal, not evaluated
    pass
    # --- L532 ---
    phase_table[2] = 523  # raw literal, not evaluated
    pass
    # --- L536 ---
    phase_table[2] = 553  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
    # --- L556 ---
    phase_table[3] = 568  # raw literal, not evaluated
    switch(12):
        case 1: goto L562
        case 2: goto L568
        case 3: goto L574
        case 4: goto L580
        case 5: goto L586
        case 6: goto L592
        case 7: goto L598
        case 8: goto L604
        case 9: goto L610
        case 10: goto L616
        case 11: goto L622
        case 12: goto L628
        case 13: goto L632
        case 14: goto L636
        case 512: goto L640
        case 32: goto L646
        case 64: goto L652
        case 128: goto L658
        case 256: goto L664
        default: goto L670
    phase_table[3] = 569  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L568 ---
    phase_table[3] = 596  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L574 ---
    phase_table[3] = 622  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L580 ---
    phase_table[3] = 652  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L586 ---
    phase_table[3] = 676  # raw literal, not evaluated
    play_sound(260)
    pass
    # --- L592 ---
    phase_table[3] = 701  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L598 ---
    phase_table[3] = 755  # raw literal, not evaluated
    play_sound(257)
    pass
    # --- L604 ---
    phase_table[3] = 779  # raw literal, not evaluated
    play_sound(261)
    pass
    # --- L610 ---
    phase_table[3] = 834  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L616 ---
    phase_table[3] = 879  # raw literal, not evaluated
    play_sound(262)
    pass
    # --- L622 ---
    phase_table[3] = 930  # raw literal, not evaluated
    play_sound(259)
    pass
    # --- L628 ---
    phase_table[3] = 1013  # raw literal, not evaluated
    pass
    # --- L632 ---
    phase_table[3] = 1077  # raw literal, not evaluated
    pass
    # --- L636 ---
    phase_table[3] = 1131  # raw literal, not evaluated
    pass
    # --- L640 ---
    phase_table[3] = 1203  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L646 ---
    phase_table[3] = 1237  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L652 ---
    phase_table[3] = 1276  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L658 ---
    phase_table[3] = 1315  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L664 ---
    phase_table[3] = 1356  # raw literal, not evaluated
    play_sound(258)
    pass
    # --- L670 ---
    phase_table[3] = 1396  # raw literal, not evaluated
    pass
    # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
    # --- L714 ---
    system_message(1435 /*" þ"*/)
    # --- L716 ---
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[5] = 0
        var[23] = 0
        var[24] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L749
        var[25] = 0
        unit[4] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 4):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L747
        # --- L739 ---
        var[25] = (var[25] + 1)
        unit[4] = next_unit_in_group(unit[4], group=2)
        goto L739
        # --- L747 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x05ad] - dead end, not decoded further (other branches continue independently)
        # --- L749 ---
        if not (timer_expired(2)):
            goto L7106
        # else: falls through here, rejoins L7106
        timer[2] = current_turn + 1
        var[3] = 0
        if not (group_condition(2)):
            goto L765
        # else: falls through here, rejoins L765
        pass  # message no-op
        # [UNKNOWN OPCODE 0x05c3] - dead end, not decoded further (other branches continue independently)
        # --- L765 ---
        if not ((not group_all_alive(2))):
            goto L771
        # else: falls through here, rejoins L771
        pass  # message no-op
        # [UNKNOWN OPCODE 0x05db] - dead end, not decoded further (other branches continue independently)
        # --- L771 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x05f7] - dead end, not decoded further (other branches continue independently)
        # --- L7106 ---
        if (((not all_group_alive(2)) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L7111
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L7111 ---
        if (timer_expired(3) and (var[5] > 0)) and not flag[5]:
            flag[5] = True
            ...  # run block below, converges at L7117
        system_message(26849 /*"Mobile defense node threatened. Call all nearby units from defense pool."*/)
        # --- L7117 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((not all_group_alive(2))):
                goto L7129
            # else: falls through here, rejoins L7134
            play_sound(35)
            system_message(26922 /*"Objective Achieved.  The Cybrid defense node has been removed and Unitech elements are now landing in the region. Remaining duty time will be spent in garrison of the area.  Well done!"*/)
            set_unit_objective(unit=1, state=1)
            # --- L7129 ---
            system_message(27107 /*"The mission was a failure.  The Cybrids still maintain their defense node in your area.Unitech non-combatants in the region are now at risk and Unitech profits will suffer accordingly. Unless you can still field a force with your remaining credit reserve, your career with Unitech is over."*/)
            set_unit_objective(unit=1, state=2)
            # --- L7134 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
