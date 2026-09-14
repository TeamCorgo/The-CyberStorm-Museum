# SIT102.CS

```python
# Auto-generated Python pseudocode from a Missionforce: Cyberstorm
# mission (.CS) script. Not executable as-is: `goto`, `var`, `unit`,
# `hex`, `group`, `timer`, `flag`, `condition`, and the helper
# functions (spawn_unit, move_unit, system_message, ...) are stand-ins
# for native VM operations, not real Python builtins.

# === PHASE 0 ===
next_phase()  # no-op if already at the last phase
# === PHASE 1 ===
    hex[4] = hex_along_path(toward=28, steps=180)
    unit[1] = spawn_unit(type=30 /*stationary structure/turret*/, min_weapon_range=0, hex_ref=4)
    place_objective_marker(hex[4], (4 + stat(4)), 6, 8, 50)
    place_objective_marker(hex[4], (2 + stat(4)), 4, 6, 100)
    var[1] = 200
    hex[2] = hex_along_path(toward=0, steps=1)
    hex[3] = hex_along_path(toward=10, steps=10)
    group[3] = spawn_ai_squad(point_budget=5, hex_ref=2)
    move_group(group[3], priority=3, dest_type=2, dest_arg=1)
    group[3] = spawn_ai_squad(point_budget=3, hex_ref=2)
    move_group(group[3], priority=1, dest_type=2, dest_arg=2)
    next_phase()  # no-op if already at the last phase
# === PHASE 2 ===
        var[2] = 0
        var[3] = 0
        if 1 and not flag[1]:
            flag[1] = True
            ...  # run block below, converges at L81
        var[4] = 0
        unit[2] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 2):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L79
        # --- L71 ---
        var[4] = (var[4] + 1)
        unit[2] = next_unit_in_group(unit[2], group=2)
        goto L71
        # --- L79 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0072] - dead end, not decoded further (other branches continue independently)
        # --- L81 ---
        if not (timer_expired(1)):
            goto L191
        # else: falls through here, rejoins L191
        timer[1] = current_turn + 1
        unit[3] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 3):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L101
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0108] - dead end, not decoded further (other branches continue independently)
        # --- L101 ---
        var[2] = 0
        unit[3] = first_living_unit(group=2)  # 1=ally, 2=enemy
        while set_unit_behavior(0, 3):  # 500-iteration guard
            ...  # loop body below, loops back here
        # exit ->
        goto L118
        # --- L110 ---
        var[2] = (var[2] + 1)
        unit[3] = next_unit_in_group(unit[3], group=2)
        goto L110
        # --- L118 ---
        pass  # message no-op
        # [UNKNOWN OPCODE 0x0127] - dead end, not decoded further (other branches continue independently)
        # --- L191 ---
        if any_group_alive(1) and not flag[2]:
            flag[2] = True
            ...  # run block below, converges at L196
        goto_phase(3)  # jump to end-game/resolution phase
        # --- L196 ---
        next_phase()  # no-op if already at the last phase
# === PHASE 3 ===
            set_unit_objective(unit=1, state=1)
            if not (any_group_alive(1)):
                goto L206
            # else: falls through here, rejoins L208
            system_message(462 /*"The training mission was a failure. The Cybrid destroyed your Hercs. "*/)
            # --- L206 ---
            play_sound(35)
            # --- L208 ---
            next_phase()  # no-op if already at the last phase
            # [UNKNOWN OPCODE 0x0000] - dead end, not decoded further (other branches continue independently)
```
