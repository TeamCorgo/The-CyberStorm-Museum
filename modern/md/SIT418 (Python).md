# SIT418.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = (random_below(4) + 3)
var[3] = 3
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[5] == 0)):
        goto L14
    # else: falls through here, rejoins L14
    var[5] = (random_below(var[9]) + var[10])
    # --- L14 ---
    var[11] = 10000
    var[11] = ((var[11] * 160) / 100)
    if not ((stat(12) == 0)):
        goto L27
    # else: falls through here, rejoins L27
    var[11] = ((var[11] * 75) / 100)
    # --- L27 ---
    if not ((stat(12) == 1)):
        goto L34
    # else: falls through here, rejoins L34
    var[11] = ((var[11] * 100) / 100)
    # --- L34 ---
    if not ((stat(12) == 2)):
        goto L41
    # else: falls through here, rejoins L41
    var[11] = ((var[11] * 125) / 100)
    # --- L41 ---
    pass  # message no-op
    # [UNKNOWN OPCODE 0x016a] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[6] = 0
        var[31] = 0
        var[32] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L821
        var[33] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L819
        # --- L811 ---
        var[33] = (var[33] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L811
        # --- L819 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0678] - dead end, not decoded further (other branches continue independently)
        # --- L821 ---
        if not (timer_expired(2)):
            goto L6596
        # else: falls through here, rejoins L6596
        timer[2] = current_turn + 1
        var[4] = 0
        if not (group_condition(3)):
            goto L837
        # else: falls through here, rejoins L837
        pass  # message no-op
        # [UNKNOWN OPCODE 0x068e] - dead end, not decoded further (other branches continue independently)
        # --- L837 ---
        if not ((not group_all_alive(3))):
            goto L843
        # else: falls through here, rejoins L843
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06a6] - dead end, not decoded further (other branches continue independently)
        # --- L843 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x06c2] - dead end, not decoded further (other branches continue independently)
        # --- L6596 ---
        if (((group_condition(2) and (not all_group_alive(2))) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6601
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6601 ---
        if (timer_expired(3) and (var[6] > 0)) and not flag[5]:
            flag[5] = True
            ...  # run block below, converges at L6875
        var[99] = random_below(100)
        if not (((var[4] == 0) and (var[99] < 100))):
            goto L6875
        # else: falls through here, rejoins L6875
        var[4] = (var[4] + 1)
        phase_table[58] = 24578  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L6621
            case 1: goto L6625
            case 2: goto L6629
            case 7: goto L6633
            default: goto L6637
        phase_table[58] = 24579  # raw literal, not evaluated
        pass
        # --- L6625 ---
        phase_table[58] = 24614  # raw literal, not evaluated
        pass
        # --- L6629 ---
        phase_table[58] = 24641  # raw literal, not evaluated
        pass
        # --- L6633 ---
        phase_table[58] = 24680  # raw literal, not evaluated
        pass
        # --- L6637 ---
        phase_table[58] = 24708  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6651 ---
        phase_table[59] = 24761  # raw literal, not evaluated
        var[100] = random_below(1)
        if not (((random_below(4) != 7) and (var[100] >= 3))):
            goto L6664
        # else: falls through here, rejoins L6664
        var[100] = random_below(3)
        # --- L6664 ---
        switch(var[100]):
            case 0: goto L6667
            case 1: goto L6671
            case 3: goto L6675
            case 4: goto L6679
            case 5: goto L6683
            case 6: goto L6687
            case 7: goto L6691
            default: goto L6695
        phase_table[59] = 24762  # raw literal, not evaluated
        pass
        # --- L6671 ---
        phase_table[59] = 24766  # raw literal, not evaluated
        pass
        # --- L6675 ---
        phase_table[59] = 24777  # raw literal, not evaluated
        pass
        # --- L6679 ---
        phase_table[59] = 24798  # raw literal, not evaluated
        pass
        # --- L6683 ---
        phase_table[59] = 24825  # raw literal, not evaluated
        pass
        # --- L6687 ---
        phase_table[59] = 24856  # raw literal, not evaluated
        pass
        # --- L6691 ---
        phase_table[59] = 24885  # raw literal, not evaluated
        pass
        # --- L6695 ---
        phase_table[59] = 24915  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L6715 ---
        phase_table[60] = 24930  # raw literal, not evaluated
        switch(11):
            case 1: goto L6721
            case 2: goto L6727
            case 3: goto L6733
            case 4: goto L6739
            case 5: goto L6745
            case 6: goto L6751
            case 7: goto L6757
            case 8: goto L6763
            case 9: goto L6769
            case 10: goto L6775
            case 11: goto L6781
            case 12: goto L6787
            case 13: goto L6791
            case 14: goto L6795
            case 512: goto L6799
            case 32: goto L6805
            case 64: goto L6811
            case 128: goto L6817
            case 256: goto L6823
            default: goto L6829
        phase_table[60] = 24931  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6727 ---
        phase_table[60] = 24958  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6733 ---
        phase_table[60] = 24984  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6739 ---
        phase_table[60] = 25014  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6745 ---
        phase_table[60] = 25038  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6751 ---
        phase_table[60] = 25063  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6757 ---
        phase_table[60] = 25117  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6763 ---
        phase_table[60] = 25141  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6769 ---
        phase_table[60] = 25196  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6775 ---
        phase_table[60] = 25241  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6781 ---
        phase_table[60] = 25292  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6787 ---
        phase_table[60] = 25375  # raw literal, not evaluated
        pass
        # --- L6791 ---
        phase_table[60] = 25439  # raw literal, not evaluated
        pass
        # --- L6795 ---
        phase_table[60] = 25493  # raw literal, not evaluated
        pass
        # --- L6799 ---
        phase_table[60] = 25565  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6805 ---
        phase_table[60] = 25599  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6811 ---
        phase_table[60] = 25638  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6817 ---
        phase_table[60] = 25677  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6823 ---
        phase_table[60] = 25718  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6829 ---
        phase_table[60] = 25758  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6873 ---
        system_message(25797 /*" þ:"*/)
        # --- L6875 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (group_condition(2)):
                goto L6887
            # else: falls through here, rejoins L6892
            play_sound(35)
            system_message(25815 /*"You have destroyed the Cybrid primary base on their homeworld. Unitech shall reign supreme among the corporations! Congratulations on your achievement for Unitech and humankind."*/)
            set_unit_objective(unit=1, state=1)
            # --- L6887 ---
            system_message(25993 /*"The mission was a failure. The Cybrids may now have time to stage a counteroffensive, due to your incompetence. Unless you have sufficient forces to continue your service with Unitech, you will be removed from command. As always, failure is not an option with Unitech."*/)
            set_unit_objective(unit=1, state=2)
            # --- L6892 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
