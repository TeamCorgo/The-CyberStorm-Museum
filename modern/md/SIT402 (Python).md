# SIT402.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
var[1] = (random_below(4) + 3)
var[5] = 3
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    if not ((var[7] == 0)):
        goto L14
    # else: falls through here, rejoins L14
    var[7] = (random_below(var[10]) + var[11])
    # --- L14 ---
    var[12] = 6500
    var[12] = ((var[12] * 85) / 100)
    if not ((stat(12) == 0)):
        goto L27
    # else: falls through here, rejoins L27
    var[12] = ((var[12] * 90) / 100)
    # --- L27 ---
    if not ((stat(12) == 1)):
        goto L34
    # else: falls through here, rejoins L34
    var[12] = ((var[12] * 100) / 100)
    # --- L34 ---
    if not ((stat(12) == 2)):
        goto L41
    # else: falls through here, rejoins L41
    var[12] = ((var[12] * 125) / 100)
    # --- L41 ---
    pass  # message no-op
    # [UNKNOWN OPCODE 0x00f3] - dead end, not decoded further (other branches continue independently)
# === PHASE 2 ===
        var[8] = 0
        var[30] = 0
        var[31] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L791
        var[32] = 0
        unit[5] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 5):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L789
        # --- L781 ---
        var[32] = (var[32] + 1)
        unit[5] = next_unit_in_group(unit[5], group=2)
        goto L781
        # --- L789 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0601] - dead end, not decoded further (other branches continue independently)
        # --- L791 ---
        if not (timer_expired(2)):
            goto L6566
        # else: falls through here, rejoins L6566
        timer[2] = current_turn + 1
        var[6] = 0
        if not (group_condition(3)):
            goto L807
        # else: falls through here, rejoins L807
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0617] - dead end, not decoded further (other branches continue independently)
        # --- L807 ---
        if not ((not group_all_alive(3))):
            goto L813
        # else: falls through here, rejoins L813
        pass  # message no-op
        # [UNKNOWN OPCODE 0x062f] - dead end, not decoded further (other branches continue independently)
        # --- L813 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x064b] - dead end, not decoded further (other branches continue independently)
        # --- L6566 ---
        if (((group_condition(2) and (not all_group_alive(2))) or any_group_alive(1)) or (not all_group_alive(1))) and not flag[4]:
            flag[4] = True
            ...  # run block below, converges at L6571
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L6571 ---
        if (timer_expired(3) and (var[8] > 0)) and not flag[5]:
            flag[5] = True
            ...  # run block below, converges at L6845
        var[98] = random_below(100)
        if not (((var[6] == 0) and (var[98] < 100))):
            goto L6845
        # else: falls through here, rejoins L6845
        var[6] = (var[6] + 1)
        phase_table[58] = 24459  # raw literal, not evaluated
        switch(random_below(4)):
            case 0: goto L6591
            case 1: goto L6595
            case 2: goto L6599
            case 7: goto L6603
            default: goto L6607
        phase_table[58] = 24460  # raw literal, not evaluated
        pass
        # --- L6595 ---
        phase_table[58] = 24495  # raw literal, not evaluated
        pass
        # --- L6599 ---
        phase_table[58] = 24522  # raw literal, not evaluated
        pass
        # --- L6603 ---
        phase_table[58] = 24561  # raw literal, not evaluated
        pass
        # --- L6607 ---
        phase_table[58] = 24589  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L6621 ---
        phase_table[59] = 24642  # raw literal, not evaluated
        var[99] = random_below(1)
        if not (((random_below(4) != 7) and (var[99] >= 3))):
            goto L6634
        # else: falls through here, rejoins L6634
        var[99] = random_below(3)
        # --- L6634 ---
        switch(var[99]):
            case 0: goto L6637
            case 1: goto L6641
            case 3: goto L6645
            case 4: goto L6649
            case 5: goto L6653
            case 6: goto L6657
            case 7: goto L6661
            default: goto L6665
        phase_table[59] = 24643  # raw literal, not evaluated
        pass
        # --- L6641 ---
        phase_table[59] = 24647  # raw literal, not evaluated
        pass
        # --- L6645 ---
        phase_table[59] = 24658  # raw literal, not evaluated
        pass
        # --- L6649 ---
        phase_table[59] = 24679  # raw literal, not evaluated
        pass
        # --- L6653 ---
        phase_table[59] = 24706  # raw literal, not evaluated
        pass
        # --- L6657 ---
        phase_table[59] = 24737  # raw literal, not evaluated
        pass
        # --- L6661 ---
        phase_table[59] = 24766  # raw literal, not evaluated
        pass
        # --- L6665 ---
        phase_table[59] = 24796  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0007] - dead end, not decoded further (other branches continue independently)
        # --- L6685 ---
        phase_table[60] = 24811  # raw literal, not evaluated
        switch(11):
            case 1: goto L6691
            case 2: goto L6697
            case 3: goto L6703
            case 4: goto L6709
            case 5: goto L6715
            case 6: goto L6721
            case 7: goto L6727
            case 8: goto L6733
            case 9: goto L6739
            case 10: goto L6745
            case 11: goto L6751
            case 12: goto L6757
            case 13: goto L6761
            case 14: goto L6765
            case 512: goto L6769
            case 32: goto L6775
            case 64: goto L6781
            case 128: goto L6787
            case 256: goto L6793
            default: goto L6799
        phase_table[60] = 24812  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6697 ---
        phase_table[60] = 24839  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6703 ---
        phase_table[60] = 24865  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6709 ---
        phase_table[60] = 24895  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6715 ---
        phase_table[60] = 24919  # raw literal, not evaluated
        play_sound(260)
        pass
        # --- L6721 ---
        phase_table[60] = 24944  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6727 ---
        phase_table[60] = 24998  # raw literal, not evaluated
        play_sound(257)
        pass
        # --- L6733 ---
        phase_table[60] = 25022  # raw literal, not evaluated
        play_sound(261)
        pass
        # --- L6739 ---
        phase_table[60] = 25077  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6745 ---
        phase_table[60] = 25122  # raw literal, not evaluated
        play_sound(262)
        pass
        # --- L6751 ---
        phase_table[60] = 25173  # raw literal, not evaluated
        play_sound(259)
        pass
        # --- L6757 ---
        phase_table[60] = 25256  # raw literal, not evaluated
        pass
        # --- L6761 ---
        phase_table[60] = 25320  # raw literal, not evaluated
        pass
        # --- L6765 ---
        phase_table[60] = 25374  # raw literal, not evaluated
        pass
        # --- L6769 ---
        phase_table[60] = 25446  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6775 ---
        phase_table[60] = 25480  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6781 ---
        phase_table[60] = 25519  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6787 ---
        phase_table[60] = 25558  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6793 ---
        phase_table[60] = 25599  # raw literal, not evaluated
        play_sound(258)
        pass
        # --- L6799 ---
        phase_table[60] = 25639  # raw literal, not evaluated
        pass
        # [UNKNOWN OPCODE 0x0013] - dead end, not decoded further (other branches continue independently)
        # --- L6843 ---
        system_message(25678 /*" þ:"*/)
        # --- L6845 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (group_condition(2)):
                goto L6857
            # else: falls through here, rejoins L6862
            play_sound(35)
            system_message(25696 /*"You have destroyed the Cybrid central command! The ÿ¹"*/)
            set_unit_objective(unit=1, state=1)
            # --- L6857 ---
            system_message(26036 /*"The mission was a failure. The Cybrid primary base on ÿ¿"*/)
            set_unit_objective(unit=1, state=2)
            # --- L6862 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
