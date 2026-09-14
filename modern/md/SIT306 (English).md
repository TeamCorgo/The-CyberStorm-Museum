# SIT306.CS

```text
; warning: file length 54557 is odd, trailing byte ignored
; recognized .CS header (version 5) - phase table, expression pool, and string pool offsets read directly, no scanning needed
; phase entry points (word offsets): phase0=678, phase1=685, phase2=1462, phase3=7566
; 26600 instruction word(s) available from the start offset
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
    [   11] set script variable #5 = (random_below(var(10)) + var(11))
    [   14] set script variable #12 = (stat(0) / 1)
    [   17] set script variable #12 = (var(12) - 200)
    [   20] set script variable #13 = 8192
    [   23] WHILE (var(13) > 500): loop below; exit -> #38 (500-iteration guard)
    [   26] IF NOT((var(12) < var(13))): GOTO #33  (else falls through, rejoins #33)
    [   30] set script variable #8 = (var(8) + 1)
    [   33] set script variable #13 = (var(13) / 2)
    [   36] GOTO #26
    [   38] IF NOT((var(12) > 50)): GOTO #59  (else falls through, rejoins #62)
    [   42] set script variable #9 = (var(12) / 4)
    [   45] IF NOT((var(9) < 50)): GOTO #52  (else falls through, rejoins #59)
    [   49] set script variable #9 = 50
    [   52] IF NOT((var(9) > 1200)): GOTO #59  (else falls through, rejoins #59)
    [   56] set script variable #9 = 1200
    [   59] set script variable #9 = var(12)
    [   62] set script variable #12 = (var(12) - var(9))
    [   65] set script variable #14 = 0
    [   68] set script variable #15 = 0
    [   71] set script variable #16 = 12
    [   74] set script variable #17 = 27
    [   77] set script variable #18 = 45
    [   80] set script variable #19 = 90
    [   83] IF NOT((var(16) > (var(8) + 5))): GOTO #90  (else falls through, rejoins #93)
    [   87] set script variable #16 = (var(16) - var(8))
    [   90] set script variable #16 = 5
    [   93] IF NOT((var(17) > (var(8) + 10))): GOTO #100  (else falls through, rejoins #103)
    [   97] set script variable #17 = (var(17) - var(8))
    [  100] set script variable #17 = 10
    [  103] set hex-var #8 = the point 180 steps along the path toward ((31 - (var(8) * 2)) - 5)
    [  107] spawn a unit of type 30 (stationary structure/turret) (minimum weapon range 0) at hex-ref #8, remember it as unit-slot #3
    [  112] set hex-var #9 = (0, 0)
    [  116] set script variable #20 = set_objective_at_hex(6)
    [  119] place an objective marker at hex-var #8 with params ((random_below(3) + var(20)) - 1), 6, 8, 50
    [  125] IF NOT((var(14) == 0)): GOTO #132  (else falls through, rejoins #132)
    [  129] set script variable #14 = (var(16) + random_below((var(17) - var(16))))
    [  132] IF NOT((var(15) == 0)): GOTO #139  (else falls through, rejoins #139)
    [  136] set script variable #15 = ((random_below(var(19)) + var(18)) - (var(19) / 2))
    [  139] set hex-var #5 = the point var(15) steps along the path toward var(14)
    [  143] do nothing (message no-op)
    [  144] (UNKNOWN OPCODE 0x01cf) - dead end, not decoded further (other branches continue independently)
=== PHASE 2 ===
        [  784] set script variable #7 = 0
        [  787] set script variable #33 = 0
        [  790] set script variable #34 = 0
        [  793] ONCE(1, flag[1]): run block below -> #816
        [  797] set script variable #35 = 0
        [  800] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [  803] WHILE set_unit_behavior(0, 5): loop below; exit -> #814 (500-iteration guard)
        [  806] set script variable #35 = (var(35) + 1)
        [  809] advance unit-slot #5 to the next unit in group #2 after the current one
        [  812] GOTO #806
        [  814] do nothing (message no-op)
        [  815] (UNKNOWN OPCODE 0x06bc) - dead end, not decoded further (other branches continue independently)
        [  816] IF NOT(timer_expired(2)): GOTO #6591  (else falls through, rejoins #6591)
        [  820] arm timer #2 to expire 1 turn(s) from now
        [  823] set script variable #4 = 0
        [  826] IF NOT(group_condition(3)): GOTO #832  (else falls through, rejoins #832)
        [  830] do nothing (message no-op)
        [  831] (UNKNOWN OPCODE 0x06d2) - dead end, not decoded further (other branches continue independently)
        [  832] IF NOT(!group_all_alive(3)): GOTO #838  (else falls through, rejoins #838)
        [  836] do nothing (message no-op)
        [  837] (UNKNOWN OPCODE 0x06ea) - dead end, not decoded further (other branches continue independently)
        [  838] do nothing (message no-op)
        [  839] (UNKNOWN OPCODE 0x0706) - dead end, not decoded further (other branches continue independently)
        [ 6591] set script variable #6 = 0
        [ 6594] remember the first living unit of group #2 (1=ally, 2=enemy, else a named group) as unit-slot #5
        [ 6597] WHILE set_unit_behavior(0, 5): loop below; exit -> #6608 (500-iteration guard)
        [ 6600] set script variable #6 = 1
        [ 6603] advance unit-slot #5 to the next unit in group #2 after the current one
        [ 6606] GOTO #6600
        [ 6608] ONCE((((group_condition(2) || any_group_alive(1)) || group_condition_ref_2(5, 1)) || !all_group_alive(1)), flag[4]): run block below -> #6613
        [ 6612] jump straight to scenario phase 3 (end-game/resolution phase)
        [ 6613] ONCE((timer_expired(3) && (var(7) > 0)), flag[5]): run block below -> #6887
        [ 6617] set script variable #101 = random_below(100)
        [ 6620] IF NOT(((var(4) == 0) && (var(101) < 100))): GOTO #6887  (else falls through, rejoins #6887)
        [ 6624] set script variable #4 = (var(4) + 1)
        [ 6627] store the literal value 24646 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6630] SWITCH random_below(4): {0->#6633, 1->#6637, 2->#6641, 7->#6645} else #6649
        [ 6633] store the literal value 24647 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6636] do nothing
        [ 6637] store the literal value 24682 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6640] do nothing
        [ 6641] store the literal value 24709 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6644] do nothing
        [ 6645] store the literal value 24748 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6648] do nothing
        [ 6649] store the literal value 24776 into phase table slot #58 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6652] do nothing
        [ 6653] (UNKNOWN OPCODE 0x0004) - dead end, not decoded further (other branches continue independently)
        [ 6663] store the literal value 24829 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6666] set script variable #102 = random_below(1)
        [ 6669] IF NOT(((random_below(4) != 7) && (var(102) >= 3))): GOTO #6676  (else falls through, rejoins #6676)
        [ 6673] set script variable #102 = random_below(3)
        [ 6676] SWITCH var(102): {0->#6679, 1->#6683, 3->#6687, 4->#6691, 5->#6695, 6->#6699, 7->#6703} else #6707
        [ 6679] store the literal value 24830 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6682] do nothing
        [ 6683] store the literal value 24834 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6686] do nothing
        [ 6687] store the literal value 24845 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6690] do nothing
        [ 6691] store the literal value 24866 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6694] do nothing
        [ 6695] store the literal value 24893 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6698] do nothing
        [ 6699] store the literal value 24924 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6702] do nothing
        [ 6703] store the literal value 24953 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6706] do nothing
        [ 6707] store the literal value 24983 into phase table slot #59 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6710] do nothing
        [ 6711] (UNKNOWN OPCODE 0x0007) - dead end, not decoded further (other branches continue independently)
        [ 6727] store the literal value 24998 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6730] SWITCH 11: {1->#6733, 2->#6739, 3->#6745, 4->#6751, 5->#6757, 6->#6763, 7->#6769, 8->#6775, 9->#6781, 10->#6787, 11->#6793, 12->#6799, 13->#6803, 14->#6807, 512->#6811, 32->#6817, 64->#6823, 128->#6829, 256->#6835} else #6841
        [ 6733] store the literal value 24999 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6736] play sound effect 257
        [ 6738] do nothing
        [ 6739] store the literal value 25026 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6742] play sound effect 257
        [ 6744] do nothing
        [ 6745] store the literal value 25052 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6748] play sound effect 260
        [ 6750] do nothing
        [ 6751] store the literal value 25082 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6754] play sound effect 260
        [ 6756] do nothing
        [ 6757] store the literal value 25106 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6760] play sound effect 260
        [ 6762] do nothing
        [ 6763] store the literal value 25131 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6766] play sound effect 261
        [ 6768] do nothing
        [ 6769] store the literal value 25185 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6772] play sound effect 257
        [ 6774] do nothing
        [ 6775] store the literal value 25209 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6778] play sound effect 261
        [ 6780] do nothing
        [ 6781] store the literal value 25264 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6784] play sound effect 262
        [ 6786] do nothing
        [ 6787] store the literal value 25309 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6790] play sound effect 262
        [ 6792] do nothing
        [ 6793] store the literal value 25360 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6796] play sound effect 259
        [ 6798] do nothing
        [ 6799] store the literal value 25443 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6802] do nothing
        [ 6803] store the literal value 25507 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6806] do nothing
        [ 6807] store the literal value 25561 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6810] do nothing
        [ 6811] store the literal value 25633 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6814] play sound effect 258
        [ 6816] do nothing
        [ 6817] store the literal value 25667 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6820] play sound effect 258
        [ 6822] do nothing
        [ 6823] store the literal value 25706 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6826] play sound effect 258
        [ 6828] do nothing
        [ 6829] store the literal value 25745 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6832] play sound effect 258
        [ 6834] do nothing
        [ 6835] store the literal value 25786 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6838] play sound effect 258
        [ 6840] do nothing
        [ 6841] store the literal value 25826 into phase table slot #60 (stored as-is, not evaluated - purpose not fully confirmed)
        [ 6844] do nothing
        [ 6845] (UNKNOWN OPCODE 0x0013) - dead end, not decoded further (other branches continue independently)
        [ 6885] display system/chat message #25865: " þ:"
        [ 6887] advance to the next scenario phase (no effect if already at the last phase)
=== PHASE 3 ===
            [ 6888] IF NOT((group_condition_ref_2(5, 1) && var(6))): GOTO #6899  (else falls through, rejoins #6928)
            [ 6892] play sound effect 35
            [ 6894] display system/chat message #25883: "ý"
            [ 6896] set the objective state of unit 1 to 1
            [ 6899] IF NOT((group_condition_ref_2(5, 1) && !var(6))): GOTO #6912  (else falls through, rejoins #6928)
            [ 6903] play sound effect 35
            [ 6905] display system/chat message #25949: "ý"
            [ 6907] set the objective state of unit 1 to 1
            [ 6910] end the current turn (reason/flag #26014), then jump to scenario phase 3
            [ 6912] IF NOT(group_condition(2)): GOTO #6923  (else falls through, rejoins #6928)
            [ 6916] play sound effect 35
            [ 6918] display system/chat message #26062: "Objective Achieved.  You have destroyed the Cybrid facility. Though the information gathered is now useless as the facility has been destroyed, Unitech command still considers your mission a success."
            [ 6920] set the objective state of unit 1 to 1
            [ 6923] display system/chat message #26262: "The mission was a failure.  The Cybrid ý"
            [ 6925] set the objective state of unit 1 to 2
            [ 6928] advance to the next scenario phase (no effect if already at the last phase)
            [ 6929] (UNKNOWN OPCODE 0x0000) - dead end, not decoded further (other branches continue independently)
```
