# SIT402.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=666, phase1=673, phase2=1425, phase3=7512
; 26368 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = (random_below(4) + 3)
[    3] set script variable #5 = 3
[    6] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    7] IF NOT((var(7) == 0)): GOTO #14  (else falls through, rejoins #14)
    [   11] set script variable #7 = (random_below(var(10)) + var(11))
    [   14] set script variable #12 = 6500
    [   17] set script variable #12 = ((var(12) * 85) / 100)
    [   20] IF NOT((stat(12) == 0)): GOTO #27  (else falls through, rejoins #27)
    [   24] set script variable #12 = ((var(12) * 90) / 100)
    [   27] IF NOT((stat(12) == 1)): GOTO #34  (else falls through, rejoins #34)
    [   31] set script variable #12 = ((var(12) * 100) / 100)
    [   34] IF NOT((stat(12) == 2)): GOTO #41  (else falls through, rejoins #41)
    [   38] set script variable #12 = ((var(12) * 125) / 100)
    [   41] do nothing (message no-op)
    [   42] (UNKNOWN OPCODE 0x00f3) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  759] set script variable #8 = 0
        [  762] set script variable #30 = 0
        [  765] set script variable #31 = 0
        [  768] ONCE(1, flag[1]): run block below -> #791
        [  772] set script variable #32 = 0
        [  775] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  778] WHILE set_unit_behavior(0, 5): loop below; exit -> #789 (500-iteration guard)
        [  781] set script variable #32 = (var(32) + 1)
        [  784] advance unit-slot #5 to the next unit in group #2 after the current one
        [  787] GOTO #781
        [  789] do nothing (message no-op)
        [  790] (UNKNOWN OPCODE 0x0601) - dead end, not decoded further (other branches continue independently)
        [  791] IF NOT(timer_expired(2)): GOTO #6566  (else falls through, rejoins #6566)
        [  795] arm timer #2 to expire 1 turn(s) from now
        [  798] set script variable #6 = 0
        [  801] IF NOT(group_condition(3)): GOTO #807  (else falls through, rejoins #807)
        [  805] do nothing (message no-op)
        [  806] (UNKNOWN OPCODE 0x0617) - dead end, not decoded further (other branches continue independently)
        [  807] IF NOT(!group_all_alive(3)): GOTO #813  (else falls through, rejoins #813)
        [  811] do nothing (message no-op)
        [  812] (UNKNOWN OPCODE 0x062f) - dead end, not decoded further (other branches continue independently)
        [  813] do nothing (message no-op)
        [  814] (UNKNOWN OPCODE 0x064b) - dead end, not decoded further (other branches continue independently)
        [ 6566] ONCE((((group_condition(2) && !all_group_alive(2)) || any_group_alive(1)) || !all_group_alive(1)), flag[4]): run block below -> #6571
        [ 6570] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6571] ONCE((timer_expired(3) && (var(8) > 0)), flag[5]): run block below -> #6845
        [ 6575] set script variable #98 = random_below(100)
        [ 6578] IF NOT(((var(6) == 0) && (var(98) < 100))): GOTO #6845  (else falls through, rejoins #6845)
        [ 6582] set script variable #6 = (var(6) + 1)
        [ 6585] store the literal value 24459 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6588] SWITCH random_below(4): {0->#6591, 1->#6595, 2->#6599, 7->#6603} else #6607
        [ 6591] store the literal value 24460 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6594] do nothing
        [ 6595] store the literal value 24495 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6598] do nothing
        [ 6599] store the literal value 24522 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6602] do nothing
        [ 6603] store the literal value 24561 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6606] do nothing
        [ 6607] store the literal value 24589 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6610] do nothing
        [ 6611] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6621] store the literal value 24642 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6624] set script variable #99 = random_below(1)
        [ 6627] IF NOT(((random_below(4) != 7) && (var(99) >= 3))): GOTO #6634  (else falls through, rejoins #6634)
        [ 6631] set script variable #99 = random_below(3)
        [ 6634] SWITCH var(99): {0->#6637, 1->#6641, 3->#6645, 4->#6649, 5->#6653, 6->#6657, 7->#6661} else #6665
        [ 6637] store the literal value 24643 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6640] do nothing
        [ 6641] store the literal value 24647 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6644] do nothing
        [ 6645] store the literal value 24658 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6648] do nothing
        [ 6649] store the literal value 24679 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6652] do nothing
        [ 6653] store the literal value 24706 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6656] do nothing
        [ 6657] store the literal value 24737 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6660] do nothing
        [ 6661] store the literal value 24766 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6664] do nothing
        [ 6665] store the literal value 24796 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6668] do nothing
        [ 6669] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 6685] store the literal value 24811 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6688] SWITCH 11: {1->#6691, 2->#6697, 3->#6703, 4->#6709, 5->#6715, 6->#6721, 7->#6727, 8->#6733, 9->#6739, 10->#6745, 11->#6751, 12->#6757, 13->#6761, 14->#6765, 512->#6769, 32->#6775, 64->#6781, 128->#6787, 256->#6793} else #6799
        [ 6691] store the literal value 24812 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6694] play sound effect 257
        [ 6696] do nothing
        [ 6697] store the literal value 24839 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6700] play sound effect 257
        [ 6702] do nothing
        [ 6703] store the literal value 24865 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6706] play sound effect 260
        [ 6708] do nothing
        [ 6709] store the literal value 24895 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6712] play sound effect 260
        [ 6714] do nothing
        [ 6715] store the literal value 24919 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6718] play sound effect 260
        [ 6720] do nothing
        [ 6721] store the literal value 24944 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6724] play sound effect 261
        [ 6726] do nothing
        [ 6727] store the literal value 24998 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6730] play sound effect 257
        [ 6732] do nothing
        [ 6733] store the literal value 25022 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6736] play sound effect 261
        [ 6738] do nothing
        [ 6739] store the literal value 25077 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6742] play sound effect 262
        [ 6744] do nothing
        [ 6745] store the literal value 25122 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6748] play sound effect 262
        [ 6750] do nothing
        [ 6751] store the literal value 25173 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6754] play sound effect 259
        [ 6756] do nothing
        [ 6757] store the literal value 25256 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6760] do nothing
        [ 6761] store the literal value 25320 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6764] do nothing
        [ 6765] store the literal value 25374 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6768] do nothing
        [ 6769] store the literal value 25446 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6772] play sound effect 258
        [ 6774] do nothing
        [ 6775] store the literal value 25480 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6778] play sound effect 258
        [ 6780] do nothing
        [ 6781] store the literal value 25519 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6784] play sound effect 258
        [ 6786] do nothing
        [ 6787] store the literal value 25558 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6790] play sound effect 258
        [ 6792] do nothing
        [ 6793] store the literal value 25599 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6796] play sound effect 258
        [ 6798] do nothing
        [ 6799] store the literal value 25639 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6802] do nothing
        [ 6803] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6843] display system/chat message #25678: " þ:"
        [ 6845] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6846] IF NOT(group_condition(2)): GOTO #6857  (else falls through, rejoins #6862)
            [ 6850] play sound effect 35
            [ 6852] display system/chat message #25696: "You have destroyed the Cybrid central command! The ÿ¹"
            [ 6854] set the objective state of unit 1 to 1
            [ 6857] display system/chat message #26036: "The mission was a failure. The Cybrid primary base on ÿ¿"
            [ 6859] set the objective state of unit 1 to 2
            [ 6862] advance to the next scenario phase (no effect if already at the last phase)
            [ 6863] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
