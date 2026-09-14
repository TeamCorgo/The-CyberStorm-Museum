# SIT304.CS

```text
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=678, phase1=685, phase2=1462, phase3=7549
; 26429 instruction word(s) available from the start offset
; recursive/CFG-following disassembly: visiting every branch target (IF/SWITCH/WHILE/GOTO), not just fallthrough - a dead end in one branch doesn't stop the others from being decoded
; 0xB0xx/0xC0xx condition/query opcodes are rendered with best-effort names (stat/timer_expired/hex_distance/etc.) from cyberstorm-script-vm.md; a few (group_condition/group_condition_2/any_group_alive/all_group_alive) are generic placeholders pending exact semantics.
; jump/block/switch targets are resolved to instruction #N (matching the [N] labels below); a target outside the printed range is still valid code, just not reached by this single linear pass (e.g. a SWITCH's non-fallthrough cases, or code past an early UNKNOWN OPCODE stop)
; indentation tracks scenario-phase level (NEXT_PHASE/GOTO_PHASE_3)

=== PHASE 0 ===
[    0] set script variable #1 = (random_below(4) + 3)
[    3] set script variable #3 = random_below(7)
[    6] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 1 ===
    [    7] IF NOT((var(5) == 0)): GOTO #14  (else falls through, rejoins #14)
    [   11] set script variable #5 = (random_below(var(9)) + var(10))
    [   14] set script variable #11 = (stat(0) / 1)
    [   17] set script variable #11 = (var(11) - 200)
    [   20] set script variable #12 = 8192
    [   23] WHILE (var(12) > 500): loop below; exit -> #38 (500-iteration guard)
    [   26] IF NOT((var(11) < var(12))): GOTO #33  (else falls through, rejoins #33)
    [   30] set script variable #7 = (var(7) + 1)
    [   33] set script variable #12 = (var(12) / 2)
    [   36] GOTO #26
    [   38] IF NOT((var(11) > 200)): GOTO #59  (else falls through, rejoins #62)
    [   42] set script variable #8 = (var(11) / 2)
    [   45] IF NOT((var(8) < 200)): GOTO #52  (else falls through, rejoins #59)
    [   49] set script variable #8 = 200
    [   52] IF NOT((var(8) > 1800)): GOTO #59  (else falls through, rejoins #59)
    [   56] set script variable #8 = 1800
    [   59] set script variable #8 = var(11)
    [   62] set script variable #11 = (var(11) - var(8))
    [   65] set script variable #13 = 0
    [   68] set script variable #14 = 0
    [   71] set script variable #15 = 12
    [   74] set script variable #16 = 27
    [   77] set script variable #17 = 45
    [   80] set script variable #18 = 90
    [   83] IF NOT((var(15) > (var(7) + 5))): GOTO #90  (else falls through, rejoins #93)
    [   87] set script variable #15 = (var(15) - var(7))
    [   90] set script variable #15 = 5
    [   93] IF NOT((var(16) > (var(7) + 10))): GOTO #100  (else falls through, rejoins #103)
    [   97] set script variable #16 = (var(16) - var(7))
    [  100] set script variable #16 = 10
    [  103] set hex-var #8 = the point 180 steps along the path toward ((31 - (var(7) * 2)) - 3)
    [  107] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #3
    [  112] set hex-var #9 = (0, 0)
    [  116] set script variable #19 = set_objective_at_hex(6)
    [  119] place an objective marker at hex-var #8 with params ((random_below(3) + var(19)) - 1), 6, 8, 50
    [  125] IF NOT((var(13) == 0)): GOTO #132  (else falls through, rejoins #132)
    [  129] set script variable #13 = (var(15) + random_below((var(16) - var(15))))
    [  132] IF NOT((var(14) == 0)): GOTO #139  (else falls through, rejoins #139)
    [  136] set script variable #14 = ((random_below(var(18)) + var(17)) - (var(18) / 2))
    [  139] set hex-var #5 = the point var(14) steps along the path toward var(13)
    [  143] do nothing (message no-op)
    [  144] (UNKNOWN OPCODE 0x017a) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  784] set script variable #6 = 0
        [  787] set script variable #32 = 0
        [  790] set script variable #33 = 0
        [  793] ONCE(1, flag[1]): run block below -> #816
        [  797] set script variable #34 = 0
        [  800] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  803] WHILE set_unit_behavior(0, 5): loop below; exit -> #814 (500-iteration guard)
        [  806] set script variable #34 = (var(34) + 1)
        [  809] advance unit-slot #5 to the next unit in group #2 after the current one
        [  812] GOTO #806
        [  814] do nothing (message no-op)
        [  815] (UNKNOWN OPCODE 0x0667) - dead end, not decoded further (other branches continue independently)
        [  816] IF NOT(timer_expired(2)): GOTO #6591  (else falls through, rejoins #6591)
        [  820] arm timer #2 to expire 1 turn(s) from now
        [  823] set script variable #4 = 0
        [  826] IF NOT(group_condition(3)): GOTO #832  (else falls through, rejoins #832)
        [  830] do nothing (message no-op)
        [  831] (UNKNOWN OPCODE 0x067d) - dead end, not decoded further (other branches continue independently)
        [  832] IF NOT(!group_all_alive(3)): GOTO #838  (else falls through, rejoins #838)
        [  836] do nothing (message no-op)
        [  837] (UNKNOWN OPCODE 0x0695) - dead end, not decoded further (other branches continue independently)
        [  838] do nothing (message no-op)
        [  839] (UNKNOWN OPCODE 0x06b1) - dead end, not decoded further (other branches continue independently)
        [ 6591] ONCE(((group_condition(2) || any_group_alive(1)) || !all_group_alive(1)), flag[4]): run block below -> #6596
        [ 6595] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6596] ONCE((timer_expired(3) && (var(6) > 0)), flag[5]): run block below -> #6870
        [ 6600] set script variable #100 = random_below(100)
        [ 6603] IF NOT(((var(4) == 0) && (var(100) < 100))): GOTO #6870  (else falls through, rejoins #6870)
        [ 6607] set script variable #4 = (var(4) + 1)
        [ 6610] store the literal value 24561 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6613] SWITCH random_below(4): {0->#6616, 1->#6620, 2->#6624, 7->#6628} else #6632
        [ 6616] store the literal value 24562 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6619] do nothing
        [ 6620] store the literal value 24597 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6623] do nothing
        [ 6624] store the literal value 24624 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6627] do nothing
        [ 6628] store the literal value 24663 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6631] do nothing
        [ 6632] store the literal value 24691 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6635] do nothing
        [ 6636] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6646] store the literal value 24744 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6649] set script variable #101 = random_below(1)
        [ 6652] IF NOT(((random_below(4) != 7) && (var(101) >= 3))): GOTO #6659  (else falls through, rejoins #6659)
        [ 6656] set script variable #101 = random_below(3)
        [ 6659] SWITCH var(101): {0->#6662, 1->#6666, 3->#6670, 4->#6674, 5->#6678, 6->#6682, 7->#6686} else #6690
        [ 6662] store the literal value 24745 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6665] do nothing
        [ 6666] store the literal value 24749 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6669] do nothing
        [ 6670] store the literal value 24760 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6673] do nothing
        [ 6674] store the literal value 24781 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6677] do nothing
        [ 6678] store the literal value 24808 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6681] do nothing
        [ 6682] store the literal value 24839 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6685] do nothing
        [ 6686] store the literal value 24868 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6689] do nothing
        [ 6690] store the literal value 24898 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6693] do nothing
        [ 6694] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 6710] store the literal value 24913 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6713] SWITCH 11: {1->#6716, 2->#6722, 3->#6728, 4->#6734, 5->#6740, 6->#6746, 7->#6752, 8->#6758, 9->#6764, 10->#6770, 11->#6776, 12->#6782, 13->#6786, 14->#6790, 512->#6794, 32->#6800, 64->#6806, 128->#6812, 256->#6818} else #6824
        [ 6716] store the literal value 24914 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6719] play sound effect 257
        [ 6721] do nothing
        [ 6722] store the literal value 24941 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6725] play sound effect 257
        [ 6727] do nothing
        [ 6728] store the literal value 24967 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6731] play sound effect 260
        [ 6733] do nothing
        [ 6734] store the literal value 24997 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6737] play sound effect 260
        [ 6739] do nothing
        [ 6740] store the literal value 25021 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6743] play sound effect 260
        [ 6745] do nothing
        [ 6746] store the literal value 25046 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6749] play sound effect 261
        [ 6751] do nothing
        [ 6752] store the literal value 25100 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6755] play sound effect 257
        [ 6757] do nothing
        [ 6758] store the literal value 25124 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6761] play sound effect 261
        [ 6763] do nothing
        [ 6764] store the literal value 25179 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6767] play sound effect 262
        [ 6769] do nothing
        [ 6770] store the literal value 25224 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6773] play sound effect 262
        [ 6775] do nothing
        [ 6776] store the literal value 25275 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6779] play sound effect 259
        [ 6781] do nothing
        [ 6782] store the literal value 25358 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6785] do nothing
        [ 6786] store the literal value 25422 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6789] do nothing
        [ 6790] store the literal value 25476 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6793] do nothing
        [ 6794] store the literal value 25548 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6797] play sound effect 258
        [ 6799] do nothing
        [ 6800] store the literal value 25582 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6803] play sound effect 258
        [ 6805] do nothing
        [ 6806] store the literal value 25621 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6809] play sound effect 258
        [ 6811] do nothing
        [ 6812] store the literal value 25660 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6815] play sound effect 258
        [ 6817] do nothing
        [ 6818] store the literal value 25701 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6821] play sound effect 258
        [ 6823] do nothing
        [ 6824] store the literal value 25741 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6827] do nothing
        [ 6828] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6868] display system/chat message #25780: " þ:"
        [ 6870] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6871] IF NOT(group_condition(2)): GOTO #6882  (else falls through, rejoins #6887)
            [ 6875] play sound effect 35
            [ 6877] display system/chat message #25798: "Objective Achieved. You have destroyed the Cybrid base. Unitech forces may now use this region for forward deployment and mining. Your accomplishments have been noted and may lead Unitech command to trust you with more and better resources. Congratulations!"
            [ 6879] set the objective state of unit 1 to 1
            [ 6882] display system/chat message #26056: "The mission was a failure.  The Cybrid base remains intact. Your inability to destroy this facility will greatly diminish our ability to operate in this sector. Unitech command will take appropriate action regarding your failure."
            [ 6884] set the objective state of unit 1 to 2
            [ 6887] advance to the next scenario phase (no effect if already at the last phase)
            [ 6888] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
