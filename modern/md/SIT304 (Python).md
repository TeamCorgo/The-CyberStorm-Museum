# SIT304.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = (random_below(4) + 3)
var[3] = random_below(7)
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[5] == 0)):
        goto L14
    # else: falls through here, rejoins L14
    var[5] = (random_below(var[9]) + var[10])
    # --- L14 ---
    var[11] = (stat(0) / 1)
    var[11] = (var[11] - 200)
    var[12] = 8192
    while (var[12] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L38
    # --- L26 ---
    if not ((var[11] < var[12])):
        goto L33
    # else: falls through here, rejoins L33
    var[7] = (var[7] + 1)
    # --- L33 ---
    var[12] = (var[12] / 2)
    goto L26
    # --- L38 ---
    if not ((var[11] > 200)):
        goto L59
    # else: falls through here, rejoins L62
    var[8] = (var[11] / 2)
    if not ((var[8] < 200)):
        goto L52
    # else: falls through here, rejoins L59
    var[8] = 200
    # --- L52 ---
    if not ((var[8] > 1800)):
        goto L59
    # else: falls through here, rejoins L59
    var[8] = 1800
    # --- L59 ---
    var[8] = var[11]
    # --- L62 ---
    var[11] = (var[11] - var[8])
    var[13] = 0
    var[14] = 0
    var[15] = 12
    var[16] = 27
    var[17] = 45
    var[18] = 90
    if not ((var[15] > (var[7] + 5))):
        goto L90
    # else: falls through here, rejoins L93
    var[15] = (var[15] - var[7])
    # --- L90 ---
    var[15] = 5
    # --- L93 ---
    if not ((var[16] > (var[7] + 10))):
        goto L100
    # else: falls through here, rejoins L103
    var[16] = (var[16] - var[7])
    # --- L100 ---
    var[16] = 10
    # --- L103 ---
    hex[8] = hex_along_path(toward=((31 - (var[7] * 2)) - 3), steps=180)
    unit[3] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=8)
    hex[9] = (0, 0)
    var[19] = set_objective_at_hex(6)
    place_objective_marker(hex[8], ((random_below(3) + var[19]) - 1), 6, 8, 50)
    if not ((var[13] == 0)):
        goto L132
    # else: falls through here, rejoins L132
    var[13] = (var[15] + random_below((var[16] - var[15])))
    # --- L132 ---
    if not ((var[14] == 0)):
        goto L139
    # else: falls through here, rejoins L139
    var[14] = ((random_below(var[18]) + var[17]) - (var[18] / 2))
    # --- L139 ---
    hex[5] = hex_along_path(toward=var[13], steps=var[14])
    pass  # message no-op
    # [UNKNOWN OPCODE 0x017a] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[6] = 0
        var[32] = 0
        var[33] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L816
        var[34] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L814
        # --- L806 ---
        var[34] = (var[34] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L806
        # --- L814 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0667] - dead end, not decoded further (other branches continue independently)
        # --- L816 ---
        if not (timer_expired(2)):
            goto L6591
        # else: falls through here, rejoins L6591
        timer[2] = current_turn + 1
        var[4] = 0
        if not (group_condition(3)):
            goto L832
        # else: falls through here, rejoins L832
        pass  # message no-op
        # [UNKNOWN OPCODE 0x067d] - dead end, not decoded further (other branches continue independently)
        # --- L832 ---
        if not ((not group_all_alive(3))):
            goto L838
        # else: falls through here, rejoins L838
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0695] - dead end, not decoded further (other branches continue independently)
        # --- L838 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06b1] - dead end, not decoded further (other branches continue independently)
        # --- L6591 ---
        if ((group_condition(2) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6596
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6596 ---
        if (timer_expired(3) and (var[6] > 0)) and not flag[5]:
            flag[5] = True
            ...  # run block below, converges at L6870
        var[100] = random_below(100)
        if not (((var[4] == 0) and (var[100] < 100))):
            goto L6870
        # else: falls through here, rejoins L6870
        var[4] = (var[4] + 1)
        phase_table[58] = 24561  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L6616
            case 1: goto L6620
            case 2: goto L6624
            case 7: goto L6628
            default: goto L6632
        phase_table[58] = 24562  # raw literal, not evaluated
        pass
        # --- L6620 ---
        phase_table[58] = 24597  # raw literal, not evaluated
        pass
        # --- L6624 ---
        phase_table[58] = 24624  # raw literal, not evaluated
        pass
        # --- L6628 ---
        phase_table[58] = 24663  # raw literal, not evaluated
        pass
        # --- L6632 ---
        phase_table[58] = 24691  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6646 ---
        phase_table[59] = 24744  # raw literal, not evaluated
        var[101] = random_below(1)
        if not (((random_below(4) != 7) and (var[101] >= 3))):
            goto L6659
        # else: falls through here, rejoins L6659
        var[101] = random_below(3)
        # --- L6659 ---
        switch(var[101]):
            case 0: goto L6662
            case 1: goto L6666
            case 3: goto L6670
            case 4: goto L6674
            case 5: goto L6678
            case 6: goto L6682
            case 7: goto L6686
            default: goto L6690
        phase_table[59] = 24745  # raw literal, not evaluated
        pass
        # --- L6666 ---
        phase_table[59] = 24749  # raw literal, not evaluated
        pass
        # --- L6670 ---
        phase_table[59] = 24760  # raw literal, not evaluated
        pass
        # --- L6674 ---
        phase_table[59] = 24781  # raw literal, not evaluated
        pass
        # --- L6678 ---
        phase_table[59] = 24808  # raw literal, not evaluated
        pass
        # --- L6682 ---
        phase_table[59] = 24839  # raw literal, not evaluated
        pass
        # --- L6686 ---
        phase_table[59] = 24868  # raw literal, not evaluated
        pass
        # --- L6690 ---
        phase_table[59] = 24898  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L6710 ---
        phase_table[60] = 24913  # raw literal, not evaluated
        switch(11):
            case 1: goto L6716
            case 2: goto L6722
            case 3: goto L6728
            case 4: goto L6734
            case 5: goto L6740
            case 6: goto L6746
            case 7: goto L6752
            case 8: goto L6758
            case 9: goto L6764
            case 10: goto L6770
            case 11: goto L6776
            case 12: goto L6782
            case 13: goto L6786
            case 14: goto L6790
            case 512: goto L6794
            case 32: goto L6800
            case 64: goto L6806
            case 128: goto L6812
            case 256: goto L6818
            default: goto L6824
        phase_table[60] = 24914  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6722 ---
        phase_table[60] = 24941  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6728 ---
        phase_table[60] = 24967  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6734 ---
        phase_table[60] = 24997  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6740 ---
        phase_table[60] = 25021  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6746 ---
        phase_table[60] = 25046  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6752 ---
        phase_table[60] = 25100  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6758 ---
        phase_table[60] = 25124  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6764 ---
        phase_table[60] = 25179  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6770 ---
        phase_table[60] = 25224  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6776 ---
        phase_table[60] = 25275  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6782 ---
        phase_table[60] = 25358  # raw literal, not evaluated
        pass
        # --- L6786 ---
        phase_table[60] = 25422  # raw literal, not evaluated
        pass
        # --- L6790 ---
        phase_table[60] = 25476  # raw literal, not evaluated
        pass
        # --- L6794 ---
        phase_table[60] = 25548  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6800 ---
        phase_table[60] = 25582  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6806 ---
        phase_table[60] = 25621  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6812 ---
        phase_table[60] = 25660  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6818 ---
        phase_table[60] = 25701  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6824 ---
        phase_table[60] = 25741  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6868 ---
        system_message(25780 /*" þ:"*/)
        # --- L6870 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (group_condition(2)):
                goto L6882
            # else: falls through here, rejoins L6887
            play_sound(35)
            system_message(25798 /*"Objective Achieved. You have destroyed the Cybrid base. Unitech forces may now use this region for forward deployment and mining. Your accomplishments have been noted and may lead Unitech command to trust you with more and better resources. Congratulations!"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6882 ---
            system_message(26056 /*"The mission was a failure.  The Cybrid base remains intact. Your inability to destroy this facility will greatly diminish our ability to operate in this sector. Unitech command will take appropriate action regarding your failure."*/)
            set_unit_objective(unit=1, state=2)
            # --- L6887 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
