# SIT418.CS

```text
; warning: file length 54145 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=668, phase1=675, phase2=1457, phase3=7544
; 26404 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = (random_below(4) + 3)
[    3] set script variable #3 = 3
[    6] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    7] IF NOT((var(5) == 0)): GOTO #14  (else falls through, rejoins #14)
    [   11] set script variable #5 = (random_below(var(9)) + var(10))
    [   14] set script variable #11 = 10000
    [   17] set script variable #11 = ((var(11) * 160) / 100)
    [   20] IF NOT((stat(12) == 0)): GOTO #27  (else falls through, rejoins #27)
    [   24] set script variable #11 = ((var(11) * 75) / 100)
    [   27] IF NOT((stat(12) == 1)): GOTO #34  (else falls through, rejoins #34)
    [   31] set script variable #11 = ((var(11) * 100) / 100)
    [   34] IF NOT((stat(12) == 2)): GOTO #41  (else falls through, rejoins #41)
    [   38] set script variable #11 = ((var(11) * 125) / 100)
    [   41] do nothing (message no-op)
    [   42] (UNKNOWN OPCODE 0x016a) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  789] set script variable #6 = 0
        [  792] set script variable #31 = 0
        [  795] set script variable #32 = 0
        [  798] ONCE(1, flag[1]): run block below -> #821
        [  802] set script variable #33 = 0
        [  805] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  808] WHILE set_unit_behavior(0, 5): loop below; exit -> #819 (500-iteration guard)
        [  811] set script variable #33 = (var(33) + 1)
        [  814] advance unit-slot #5 to the next unit in group #2 after the current one
        [  817] GOTO #811
        [  819] do nothing (message no-op)
        [  820] (UNKNOWN OPCODE 0x0678) - dead end, not decoded further (other branches continue independently)
        [  821] IF NOT(timer_expired(2)): GOTO #6596  (else falls through, rejoins #6596)
        [  825] arm timer #2 to expire 1 turn(s) from now
        [  828] set script variable #4 = 0
        [  831] IF NOT(group_condition(3)): GOTO #837  (else falls through, rejoins #837)
        [  835] do nothing (message no-op)
        [  836] (UNKNOWN OPCODE 0x068e) - dead end, not decoded further (other branches continue independently)
        [  837] IF NOT(!group_all_alive(3)): GOTO #843  (else falls through, rejoins #843)
        [  841] do nothing (message no-op)
        [  842] (UNKNOWN OPCODE 0x06a6) - dead end, not decoded further (other branches continue independently)
        [  843] do nothing (message no-op)
        [  844] (UNKNOWN OPCODE 0x06c2) - dead end, not decoded further (other branches continue independently)
        [ 6596] ONCE((((group_condition(2) && !all_group_alive(2)) || any_group_alive(1)) || !all_group_alive(1)), flag[4]): run block below -> #6601
        [ 6600] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6601] ONCE((timer_expired(3) && (var(6) > 0)), flag[5]): run block below -> #6875
        [ 6605] set script variable #99 = random_below(100)
        [ 6608] IF NOT(((var(4) == 0) && (var(99) < 100))): GOTO #6875  (else falls through, rejoins #6875)
        [ 6612] set script variable #4 = (var(4) + 1)
        [ 6615] store the literal value 24578 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6618] SWITCH random_below(4): {0->#6621, 1->#6625, 2->#6629, 7->#6633} else #6637
        [ 6621] store the literal value 24579 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6624] do nothing
        [ 6625] store the literal value 24614 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6628] do nothing
        [ 6629] store the literal value 24641 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6632] do nothing
        [ 6633] store the literal value 24680 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6636] do nothing
        [ 6637] store the literal value 24708 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6640] do nothing
        [ 6641] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6651] store the literal value 24761 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6654] set script variable #100 = random_below(1)
        [ 6657] IF NOT(((random_below(4) != 7) && (var(100) >= 3))): GOTO #6664  (else falls through, rejoins #6664)
        [ 6661] set script variable #100 = random_below(3)
        [ 6664] SWITCH var(100): {0->#6667, 1->#6671, 3->#6675, 4->#6679, 5->#6683, 6->#6687, 7->#6691} else #6695
        [ 6667] store the literal value 24762 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6670] do nothing
        [ 6671] store the literal value 24766 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6674] do nothing
        [ 6675] store the literal value 24777 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6678] do nothing
        [ 6679] store the literal value 24798 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6682] do nothing
        [ 6683] store the literal value 24825 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6686] do nothing
        [ 6687] store the literal value 24856 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6690] do nothing
        [ 6691] store the literal value 24885 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6694] do nothing
        [ 6695] store the literal value 24915 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6698] do nothing
        [ 6699] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 6715] store the literal value 24930 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6718] SWITCH 11: {1->#6721, 2->#6727, 3->#6733, 4->#6739, 5->#6745, 6->#6751, 7->#6757, 8->#6763, 9->#6769, 10->#6775, 11->#6781, 12->#6787, 13->#6791, 14->#6795, 512->#6799, 32->#6805, 64->#6811, 128->#6817, 256->#6823} else #6829
        [ 6721] store the literal value 24931 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6724] play sound effect 257
        [ 6726] do nothing
        [ 6727] store the literal value 24958 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6730] play sound effect 257
        [ 6732] do nothing
        [ 6733] store the literal value 24984 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6736] play sound effect 260
        [ 6738] do nothing
        [ 6739] store the literal value 25014 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6742] play sound effect 260
        [ 6744] do nothing
        [ 6745] store the literal value 25038 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6748] play sound effect 260
        [ 6750] do nothing
        [ 6751] store the literal value 25063 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6754] play sound effect 261
        [ 6756] do nothing
        [ 6757] store the literal value 25117 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6760] play sound effect 257
        [ 6762] do nothing
        [ 6763] store the literal value 25141 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6766] play sound effect 261
        [ 6768] do nothing
        [ 6769] store the literal value 25196 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6772] play sound effect 262
        [ 6774] do nothing
        [ 6775] store the literal value 25241 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6778] play sound effect 262
        [ 6780] do nothing
        [ 6781] store the literal value 25292 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6784] play sound effect 259
        [ 6786] do nothing
        [ 6787] store the literal value 25375 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6790] do nothing
        [ 6791] store the literal value 25439 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6794] do nothing
        [ 6795] store the literal value 25493 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6798] do nothing
        [ 6799] store the literal value 25565 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6802] play sound effect 258
        [ 6804] do nothing
        [ 6805] store the literal value 25599 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6808] play sound effect 258
        [ 6810] do nothing
        [ 6811] store the literal value 25638 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6814] play sound effect 258
        [ 6816] do nothing
        [ 6817] store the literal value 25677 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6820] play sound effect 258
        [ 6822] do nothing
        [ 6823] store the literal value 25718 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6826] play sound effect 258
        [ 6828] do nothing
        [ 6829] store the literal value 25758 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6832] do nothing
        [ 6833] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6873] display system/chat message #25797: " þ:"
        [ 6875] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6876] IF NOT(group_condition(2)): GOTO #6887  (else falls through, rejoins #6892)
            [ 6880] play sound effect 35
            [ 6882] display system/chat message #25815: "You have destroyed the Cybrid primary base on their homeworld. Unitech shall reign supreme among the corporations! Congratulations on your achievement for Unitech and humankind."
            [ 6884] set the objective state of unit 1 to 1
            [ 6887] display system/chat message #25993: "The mission was a failure. The Cybrids may now have time to stage a counteroffensive, due to your incompetence. Unless you have sufficient forces to continue your service with Unitech, you will be removed from command. As always, failure is not an option with Unitech."
            [ 6889] set the objective state of unit 1 to 2
            [ 6892] advance to the next scenario phase (no effect if already at the last phase)
            [ 6893] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
