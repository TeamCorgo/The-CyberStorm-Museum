# SIT101.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    hex[3] = hex_along_path(toward=25, steps=180)
    unit[1] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=3)
    place_objective_marker(hex[3], (4 + stat(4)), 6, 8, 50)
    place_objective_marker(hex[3], (2 + stat(4)), 4, 6, 100)
    place_objective_marker(hex[4], (2 + stat(4)), 4, 6, 100)
    hex[2] = hex_along_path(toward=21, steps=0)
    unit[2] = spawn_unit(type=5, min_weapon_range=20, hex_ref=2)
    move_unit(unit[2], priority=0, dest_type=0, dest_arg=0)
    unit[2].attr8 = 1
    hex[4] = hex_along_path(toward=100, steps=1)
    unit[3] = spawn_unit(type=14 /*spawns with escorts*/, min_weapon_range=12, hex_ref=4)
    timer[1] = current_turn + 1
    var[1] = 0
    var[2] = 0
    var[3] = 1
    system_message(252 /*"The remaining structure is in the center of your mini map. When you have moved all of your Hercs press the 'End Turn' button."*/)
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        if not (timer_expired(1)):
            goto L321
        # else: falls through here, rejoins L321
        var[2] = (var[2] + 1)
        var[5] = 0
        timer[1] = current_turn + 1
        switch(var[1]):
            case 0: goto L85
            case 1: goto L165
            case 2: goto L241
            default: goto L288
        unit[4] = first_living_unit(group=1)  # 1=ally, 2=enemy
        var[6] = 0
        var[7] = 0
        while set_unit_behavior(0, 4):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L112
        # --- L97 ---
        if not (group_condition_ref(2, 4)):
            goto L104
        # else: falls through here, rejoins L107
        var[7] = 1
        # --- L104 ---
        var[6] = 1
        # --- L107 ---
        unit[4] = next_unit_in_group(unit[4], group=1)
        goto L97
        # --- L112 ---
        switch((var[2] - var[3])):
            case 0: goto L115
            case 1: goto L132
            case 2: goto L139
            case 3: goto L146
            default: goto L153
        if not ((var[6] == 0)):
            goto L123
        # else: falls through here, rejoins L131
        system_message(378 /*"Start moving towards the center of the target zone shown on your mini map."*/)
        system_message(453 /*"Just select a Bioderm and point to where you want it to move."*/)
        # --- L123 ---
        if not ((var[7] == 1)):
            goto L129
        # else: falls through here, rejoins L131
        system_message(515 /*"You can move both your Hercs each turn. Cycle through them with the arrows near the pilot's face."*/)
        # --- L129 ---
        system_message(613 /*"Good job moving out!"*/)
        # --- L131 ---
        pass
        # --- L132 ---
        if not ((var[6] == 0)):
            goto L138
        # else: falls through here, rejoins L138
        system_message(634 /*"Get that Fast Shadow moving! He'll be able to scout ahead and locate potential opponents."*/)
        # --- L138 ---
        pass
        # --- L139 ---
        if not ((var[6] == 0)):
            goto L145
        # else: falls through here, rejoins L145
        system_message(724 /*"Move out! Better to engage a possible threat than give them a shot at your Herc Carrier."*/)
        # --- L145 ---
        pass
        # --- L146 ---
        if not ((group_condition_ref_2(2, 1) and (var[6] > 0))):
            goto L152
        # else: falls through here, rejoins L152
        system_message(813 /*"With a small force like yours, stay together. That'll concentrate your firepower."*/)
        # --- L152 ---
        pass
        # --- L153 ---
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L164 ---
        pass
        # --- L165 ---
        var[8] = 0
        var[9] = 0
        if not (group_condition(3)):
            goto L178
        # else: falls through here, rejoins L185
        var[8] = 1
        # --- L178 ---
        if not (((set_unit_behavior(9, 3) > 0) or (set_unit_behavior(5, 3) < 100))):
            goto L185
        # else: falls through here, rejoins L185
        var[9] = 1
        # --- L185 ---
        if not ((var[8] == 0)):
            goto L235
        # else: falls through here, rejoins L240
        switch((var[2] - var[3])):
            case 1: goto L192
            case 2: goto L199
            case 3: goto L208
            case 4: goto L217
            default: goto L224
        if not ((var[9] == 0)):
            goto L198
        # else: falls through here, rejoins L198
        system_message(895 /*"Destroy the turret by selecting a herc and placing the cursor over the the turret. When it's a bullseye, double-left click."*/)
        # --- L198 ---
        pass
        # --- L199 ---
        if not ((var[9] == 0)):
            goto L205
        # else: falls through here, rejoins L207
        system_message(1019 /*"Are you having problems firing or just following orders?! Shoot that turret!"*/)
        # --- L205 ---
        system_message(1096 /*"Concentrate all of your firepower on one side of the turret."*/)
        # --- L207 ---
        pass
        # --- L208 ---
        if not ((var[9] == 1)):
            goto L214
        # else: falls through here, rejoins L216
        system_message(1157 /*"First drop one of structure's shields with your lasers, then pepper it with autocannons and missiles."*/)
        # --- L214 ---
        system_message(1259 /*"If you can't hit a stationary target, we've got a problem. Consult your training video for a refresher."*/)
        # --- L216 ---
        pass
        # --- L217 ---
        if not ((var[9] == 1)):
            goto L223
        # else: falls through here, rejoins L223
        system_message(1363 /*"Get both your Hercs to fire every weapon every round. No need to hold back!"*/)
        # --- L223 ---
        pass
        # --- L224 ---
        pass
        # [UNKNOWN OPCODE 0x0004] - dead end, not decoded further (other branches continue independently)
        # --- L235 ---
        system_message(1439 /*"Good job destroying the turret. Return to your Herc Carrier for evacuation."*/)
        var[5] = 1
        # --- L240 ---
        pass
        # --- L241 ---
        unit[6] = first_living_unit(group=2)  # 1=ally, 2=enemy
        var[10] = set_unit_behavior(8, 6)
        if not ((var[10] == 1)):
            goto L288
        # else: falls through here, rejoins L288
        if not ((not group_condition(6))):
            goto L285
        # else: falls through here, rejoins L288
        switch((var[2] - var[3])):
            case 1: goto L258
            case 2: goto L270
            case 4: goto L273
            default: goto L276
        if not ((set_unit_behavior(7, 6) != 6)):
            goto L269
        # else: falls through here, rejoins L269
        move_unit(unit[6], priority=6, dest_type=0, dest_arg=0)
        system_message(1515 /*"We've detected a Cybrid! It's heading your way! Either get back to the Herc Carrier, or fight it!"*/)
        # --- L269 ---
        pass
        # --- L270 ---
        system_message(1613 /*"Your mission is accomplished. You don't need to kill the Cybrid to get your bonus!"*/)
        pass
        # --- L273 ---
        system_message(1696 /*"Concentrate your firepower on that Cybrid!"*/)
        pass
        # --- L276 ---
        pass
        # [UNKNOWN OPCODE 0x0003] - dead end, not decoded further (other branches continue independently)
        # --- L285 ---
        var[5] = 1
        # --- L288 ---
        if not ((var[1] > 5)):
            goto L295
        # else: falls through here, rejoins L295
        var[4] = 1
        # --- L295 ---
        pass
        # [UNKNOWN OPCODE 0x0003] - dead end, not decoded further (other branches continue independently)
        # --- L304 ---
        if not ((var[4] > 0)):
            goto L311
        # else: falls through here, rejoins L321
        var[1] = 999
        # --- L311 ---
        if not ((var[5] > 0)):
            goto L321
        # else: falls through here, rejoins L321
        var[3] = var[2]
        var[1] = (var[1] + 1)
        # --- L321 ---
        if (((var[1] == 999) or ((not all_group_alive(2)) and group_condition(3))) or (not all_group_alive(1))) and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L326
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L326 ---
        if group_condition_ref_2(1, 1) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L348
        unit[7] = first_living_unit(group=2)  # 1=ally, 2=enemy
        if not ((set_unit_behavior(8, 7) == 1)):
            goto L348
        # else: falls through here, rejoins L348
        if not ((not group_condition(7))):
            goto L348
        # else: falls through here, rejoins L348
        move_unit(unit[7], priority=6, dest_type=0, dest_arg=0)
        system_message(1739 /*"We've detected a Cybrid! It's heading your way! Either get back to the Herc Carrier, or fight it!"*/)
        # --- L348 ---
        if group_condition_ref_2(3, 1) and not flag[3]:
            flag[3] = True
            ...  # run block below, converges at L357
        var[1] = (var[1] + 1)
        system_message(1837 /*"This turret is all that's left of the Cybrid's Mox Draconis mining facility. "*/)
        # --- L357 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            if not (((not any_group_alive(1)) and group_condition(3))):
                goto L369
            # else: falls through here, rejoins L374
            play_sound(35)
            system_message(1915 /*"Objective Achieved.  You have destroyed the remaining structure at the Mox Draconis facility.  Return to base to prepare for your next assignment."*/)
            set_unit_objective(unit=1, state=1)
            # --- L369 ---
            system_message(2062 /*"The mission was a failure. Unitech does not tolerate failure.  Unless you have sufficient net worth to attempt another mission, you will be relieved of command."*/)
            set_unit_objective(unit=1, state=2)
            # --- L374 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
