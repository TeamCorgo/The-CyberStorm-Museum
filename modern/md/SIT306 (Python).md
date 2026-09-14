# SIT306.CS

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
    var[5] = (random_below(var[10]) + var[11])
    # --- L14 ---
    var[12] = (stat(0) / 1)
    var[12] = (var[12] - 200)
    var[13] = 8192
    while (var[13] > 500):  # 500-iteration guard
        ...  # loop body below, loops back here
    # exit ->
    goto L38
    # --- L26 ---
    if not ((var[12] < var[13])):
        goto L33
    # else: falls through here, rejoins L33
    var[8] = (var[8] + 1)
    # --- L33 ---
    var[13] = (var[13] / 2)
    goto L26
    # --- L38 ---
    if not ((var[12] > 50)):
        goto L59
    # else: falls through here, rejoins L62
    var[9] = (var[12] / 4)
    if not ((var[9] < 50)):
        goto L52
    # else: falls through here, rejoins L59
    var[9] = 50
    # --- L52 ---
    if not ((var[9] > 1200)):
        goto L59
    # else: falls through here, rejoins L59
    var[9] = 1200
    # --- L59 ---
    var[9] = var[12]
    # --- L62 ---
    var[12] = (var[12] - var[9])
    var[14] = 0
    var[15] = 0
    var[16] = 12
    var[17] = 27
    var[18] = 45
    var[19] = 90
    if not ((var[16] > (var[8] + 5))):
        goto L90
    # else: falls through here, rejoins L93
    var[16] = (var[16] - var[8])
    # --- L90 ---
    var[16] = 5
    # --- L93 ---
    if not ((var[17] > (var[8] + 10))):
        goto L100
    # else: falls through here, rejoins L103
    var[17] = (var[17] - var[8])
    # --- L100 ---
    var[17] = 10
    # --- L103 ---
    hex[8] = hex_along_path(toward=((31 - (var[8] * 2)) - 5), steps=180)
    unit[3] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=8)
    hex[9] = (0, 0)
    var[20] = set_objective_at_hex(6)
    place_objective_marker(hex[8], ((random_below(3) + var[20]) - 1), 6, 8, 50)
    if not ((var[14] == 0)):
        goto L132
    # else: falls through here, rejoins L132
    var[14] = (var[16] + random_below((var[17] - var[16])))
    # --- L132 ---
    if not ((var[15] == 0)):
        goto L139
    # else: falls through here, rejoins L139
    var[15] = ((random_below(var[19]) + var[18]) - (var[19] / 2))
    # --- L139 ---
    hex[5] = hex_along_path(toward=var[14], steps=var[15])
    pass  # message no-op
    # [UNKNOWN OPCODE 0x01cf] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[7] = 0
        var[33] = 0
        var[34] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L816
        var[35] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L814
        # --- L806 ---
        var[35] = (var[35] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L806
        # --- L814 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06bc] - dead end, not decoded further (other branches continue independently)
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
        # [UNKNOWN OPCODE 0x06d2] - dead end, not decoded further (other branches continue independently)
        # --- L832 ---
        if not ((not group_all_alive(3))):
            goto L838
        # else: falls through here, rejoins L838
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06ea] - dead end, not decoded further (other branches continue independently)
        # --- L838 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0706] - dead end, not decoded further (other branches continue independently)
        # --- L6591 ---
        var[6] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L6608
        # --- L6600 ---
        var[6] = 1
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L6600
        # --- L6608 ---
        if (((group_condition(2) or any_group_alive(1)) or group_condition_ref_2(5, 1)) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6613
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6613 ---
        if (timer_expired(3) and (var[7] > 0)) and not flag[5]:
            flag[5] = True
            ...  # run block below, converges at L6887
        var[101] = random_below(100)
        if not (((var[4] == 0) and (var[101] < 100))):
            goto L6887
        # else: falls through here, rejoins L6887
        var[4] = (var[4] + 1)
        phase_table[58] = 24646  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L6633
            case 1: goto L6637
            case 2: goto L6641
            case 7: goto L6645
            default: goto L6649
        phase_table[58] = 24647  # raw literal, not evaluated
        pass
        # --- L6637 ---
        phase_table[58] = 24682  # raw literal, not evaluated
        pass
        # --- L6641 ---
        phase_table[58] = 24709  # raw literal, not evaluated
        pass
        # --- L6645 ---
        phase_table[58] = 24748  # raw literal, not evaluated
        pass
        # --- L6649 ---
        phase_table[58] = 24776  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6663 ---
        phase_table[59] = 24829  # raw literal, not evaluated
        var[102] = random_below(1)
        if not (((random_below(4) != 7) and (var[102] >= 3))):
            goto L6676
        # else: falls through here, rejoins L6676
        var[102] = random_below(3)
        # --- L6676 ---
        switch(var[102]):
            case 0: goto L6679
            case 1: goto L6683
            case 3: goto L6687
            case 4: goto L6691
            case 5: goto L6695
            case 6: goto L6699
            case 7: goto L6703
            default: goto L6707
        phase_table[59] = 24830  # raw literal, not evaluated
        pass
        # --- L6683 ---
        phase_table[59] = 24834  # raw literal, not evaluated
        pass
        # --- L6687 ---
        phase_table[59] = 24845  # raw literal, not evaluated
        pass
        # --- L6691 ---
        phase_table[59] = 24866  # raw literal, not evaluated
        pass
        # --- L6695 ---
        phase_table[59] = 24893  # raw literal, not evaluated
        pass
        # --- L6699 ---
        phase_table[59] = 24924  # raw literal, not evaluated
        pass
        # --- L6703 ---
        phase_table[59] = 24953  # raw literal, not evaluated
        pass
        # --- L6707 ---
        phase_table[59] = 24983  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L6727 ---
        phase_table[60] = 24998  # raw literal, not evaluated
        switch(11):
            case 1: goto L6733
            case 2: goto L6739
            case 3: goto L6745
            case 4: goto L6751
            case 5: goto L6757
            case 6: goto L6763
            case 7: goto L6769
            case 8: goto L6775
            case 9: goto L6781
            case 10: goto L6787
            case 11: goto L6793
            case 12: goto L6799
            case 13: goto L6803
            case 14: goto L6807
            case 512: goto L6811
            case 32: goto L6817
            case 64: goto L6823
            case 128: goto L6829
            case 256: goto L6835
            default: goto L6841
        phase_table[60] = 24999  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6739 ---
        phase_table[60] = 25026  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6745 ---
        phase_table[60] = 25052  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6751 ---
        phase_table[60] = 25082  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6757 ---
        phase_table[60] = 25106  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6763 ---
        phase_table[60] = 25131  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6769 ---
        phase_table[60] = 25185  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6775 ---
        phase_table[60] = 25209  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6781 ---
        phase_table[60] = 25264  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6787 ---
        phase_table[60] = 25309  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6793 ---
        phase_table[60] = 25360  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6799 ---
        phase_table[60] = 25443  # raw literal, not evaluated
        pass
        # --- L6803 ---
        phase_table[60] = 25507  # raw literal, not evaluated
        pass
        # --- L6807 ---
        phase_table[60] = 25561  # raw literal, not evaluated
        pass
        # --- L6811 ---
        phase_table[60] = 25633  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6817 ---
        phase_table[60] = 25667  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6823 ---
        phase_table[60] = 25706  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6829 ---
        phase_table[60] = 25745  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6835 ---
        phase_table[60] = 25786  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6841 ---
        phase_table[60] = 25826  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6885 ---
        system_message(25865 /*" þ:"*/)
        # --- L6887 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not ((group_condition_ref_2(5, 1) and var[6])):
                goto L6899
            # else: falls through here, rejoins L6928
            play_sound(35)
            system_message(25883 /*"ý"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6899 ---
            if not ((group_condition_ref_2(5, 1) and (not var[6]))):
                goto L6912
            # else: falls through here, rejoins L6928
            play_sound(35)
            system_message(25949 /*"ý"*/)
            set_unit_objective(unit=1, state=1)
            end_turn(reason=26014)
            goto_phase(3)
            # --- L6912 ---
            if not (group_condition(2)):
                goto L6923
            # else: falls through here, rejoins L6928
            play_sound(35)
            system_message(26062 /*"Objective Achieved.  You have destroyed the Cybrid facility. Though the information gathered is now useless as the facility has been destroyed, Unitech command still considers your mission a success."*/)
            set_unit_objective(unit=1, state=1)
            # --- L6923 ---
            system_message(26262 /*"The mission was a failure.  The Cybrid ý"*/)
            set_unit_objective(unit=1, state=2)
            # --- L6928 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
