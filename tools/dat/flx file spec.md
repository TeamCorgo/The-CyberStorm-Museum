# Missionforce: Cyberstorm — `.DAT` File Format Specification

Reverse-engineered from `CSTORM.EXE` (32-bit, base `0x400000`) via Ghidra decompilation of the
resource-loading *and* resource-*consuming* (rendering/gameplay) code, cross-checked against the
real `.DAT` samples in this folder. Multiplayer/script/save files (`.CS`, `.CBM`, `.HRC`, …) are
**not** covered here — see `cyberstorm_script_disasm.py` / the mission-script memory notes for `.CS`.

**How to read this document if you don't have the code or the game files in front of you:** each
section below starts with a one-paragraph plain-English description of what the file is *for* —
what part of the game reads it and what you'd see on screen if it were changed or deleted — before
getting into byte offsets. The byte-level layout after that is only useful if you're trying to
parse or edit the file yourself.

All multi-byte fields are little-endian (x86). "Record N" always means 0-based indexing.

---

## 0. Generic resource-file wrapper (applies to *any* file loaded through
`LoadResourceFile_WithDecompression` @ `0x…`, incl. every `.DAT` below)

Every resource load goes through one function that optionally transparently decompresses the
file. **None of the sample `.DAT` files in this folder carry this wrapper** (verified — none
start with the magic below), so on-disk game data ships pre-decompressed/raw. The wrapper exists
for completeness since other resource types (`.RBX`, `.BMX`, …) may use it:

```
offset 0x00  dword  magic1        = 0x3A584B50  ("PKX:" as ASCII bytes 50 4B 58 3A)
offset 0x04  dword  magic2        = 0x10011966
offset 0x08  dword  magic3        = 0x9BAEBACF  (0xFFFFFFFF - 0x64514531 + 1, i.e. -0x64514531)
offset 0x0C  dword  method        (1..14)
offset 0x10  dword  compSize      = filesize - 0x18
offset 0x14  dword  rawSize       (1..9999999)
offset 0x18  ...    compressed payload, decompressed by DecompressResourceData_Dispatch(method, ...)
```

If the first 3 dwords don't match, the file is used as-is (raw). All formats below describe the
**raw/decompressed** layout, which is exactly what's on disk in this folder.

---

## 1. `SCAPEnn.DAT` — heightmap / terrain-generation seed

**Plain-English purpose:** this is the "recipe" the game follows to procedurally generate the
terrain for one world map tile — it is *not* a finished map. It stores a name (e.g. "Erosion I"),
a small coarse elevation grid (as few as 10×10 cells), and a handful of small tables that say
"scatter N patches of terrain-feature X somewhere randomly, sized between MIN and MAX." At load
time the game runs that coarse grid through a classic fractal terrain-refinement algorithm
(midpoint displacement / "diamond-square", the same family of technique used in countless other
procedural-landscape generators) to blow it up into a much larger, natural-looking final terrain
grid — confirmed by the fact the file's own declared "final size" field is always a power of two
plus one (129, 257, or 513), which is the signature grid size that algorithm requires. That's why
the files are so small (many are under 1KB) even though the terrain that results is far larger:
the file only stores the small seed, not the finished landscape.

Loaded by `Scape_LoadFromFile` (called from `GenerateTerrainMap_FromScapeData`), file name built
as `"scape%d.dat"` where `%d` is a global scenario/world map index.

```
0x00  dword   magic          = 0x88888888
0x04  char[]  name           NUL-terminated display name (e.g. "Erosion I"), max 0x4F (79) chars
        ...   7 dwords immediately after the NUL terminator (byte-aligned, not padded):
              dword  field_54   0 or 1 in every sample checked (10/10) — likely a boolean flag
                                 (candidate: "has water/ocean", "coastal", going by names like
                                 "Cliff World"=1 vs "Twisty Passages"=0 — not confirmed)
              dword  field_58   = 3 in EVERY sample checked (10/10) — effectively constant;
                                 candidate: algorithm-version or terrain-type-count tag
              dword  field_5c   varies widely, 0-127 — paired with field_60 below
              dword  field_60   varies widely, 0-90  — candidates for field_5c/field_60 together:
                                 an elevation min/max range, an erosion/water-level percentage
                                 pair, or similar generation-shaping parameters (the two values
                                 are clearly correlated with the terrain "theme" implied by the
                                 file's name, e.g. "Flat"=0/80, "Running Lava"=20/80, but no
                                 confirming code read pins down which is which)
              dword  field_64   small integer, 1-3 in every sample checked — candidate: an
                                 erosion-pass count or a roughness/algorithm-variant selector
              dword  field_68  = coarse heightmap edge length ("seed grid" the file actually
                                 ships pixels for) — values seen: 10, 18, 34
              dword  field_94  = final fractal terrain size, and IMPORTANT: every value seen is
                                 exactly 2^n + 1 (129, 257, 513 — the classic "diamond-square"/
                                 midpoint-displacement fractal-terrain grid size). This confirms
                                 SCAPEnn.DAT ships a small coarse elevation seed which
                                 `Terrain_SubdivideHeightmap` (called right after loading, see
                                 `GenerateTerrainMap_FromScapeData`) recursively subdivides up to
                                 this much larger power-of-two-plus-one grid for the final terrain
        ...   heightmapSide * heightmapSide  bytes   — coarse elevation seed grid (raw copy)
        ...   heightmapSide * heightmapSide  words   — coarse terrain-type seed grid (2 bytes/cell)
        ...   0x100 bytes   — palette/remap table (256 entries, copied to runtime +0xbc)
        ...   0x20  bytes   — 8-entry table copied to runtime +0x74 (4 bytes/entry: count,min,max,?)
        ...   0x20  bytes   — 8-entry "random feature scatter" table copied to runtime +0x9c;
                              each 4-byte entry is {count:u8, unused:u8, min:u8, max:u8} and is used
                              post-load to scatter `count` random byte values in [min,max] across
                              the fine (field_94-sized) terrain grid, not the coarse seed grid
                              (see `Scape_RandomizeElevation_AndScatterFeatures`)
        ...   4 trailing bytes present in every sample checked, past everything the loader code
                              reads — unexplained (see Open questions)
```
Header values are now cross-checked against 10 samples: `SCAPE1` ("Erosion I"), `SCAPE2`
("Cliff World"), `SCAPE6` ("Twisty Passages"), `SCAPE7` ("Flat"), `SCAPE8` ("Maze World"),
`SCAPE11` ("Test"), `SCAPE12` ("Fun Mesa"), `SCAPE20` ("Running Lava"), `SCAPE99` ("Special
MULTIPLAYER Ore surface file"), `SCAPE124` ("Random Lakes"). File size is fully explained by the
formula `headerBytes + heightmapSide² × 3 + 0x140 (320) + 4` — e.g. `SCAPE1.DAT` (heightmapSide
10, name "Erosion I", header ends at file offset 42) is `42 + 300 + 320 + 4 = 666` bytes, matching
the file exactly; `SCAPE6.DAT` (heightmapSide 34) is `48 + 3468 + 320 + 4 = 3840` bytes, also
exact.

---

## 2. `SnPn.DAT` (`S1P1.DAT` … `S3P3.DAT`) — per-scenario hex-map visual/lighting settings

**Plain-English purpose:** one file per campaign mission slot (`SnPn` = Season/act `n`, mission
`P`osition `n` within it — 7 missions in act 1, 13 in act 2, 3 in act 3, matching the 7/13/3
file counts actually present in this folder). It's loaded right before a mission's terrain is
drawn and supplies small, mission-specific look-and-feel numbers: a byte→byte lookup table used
to remap the 8 generic map-edge/orientation IDs used elsewhere in the engine, and a value that
scales a global lighting ramp (8-step light/dark gradient applied across the hex grid, probably
to give each mission a distinct ambient-lighting mood — dawn/dusk/interior, etc.). It does **not**
contain the terrain itself (that's `SCAPEnn.DAT` + `WORLDCOL.DAT`) — think of it as a small
"lighting & remap preset" attached to a specific mission.

Loaded inside `LoadHexMapResources_ByScenario`, filename built as `"s%dp%d.%s"` where the two
`%d` are (episode, phase-within-episode) derived from the global scenario index via a
lookup/subtraction loop against a table at `0x490604` (episode boundary table), extension is
`"dat"`. Scenario 99 is special-cased to the literal name `"s99p99.dat"`.

Read fully into a fixed 0x4C5 (1221)-byte buffer (`RTL_MemSet` zero-fills first, so the file may
be shorter than the buffer):

```
0x00  dword  magic       = 0xABBAABBA
0x04  dword  field_04    per-file sequence number, unique and small in every sample checked
                          (S1P1=9, S1P2=2, S1P3=2, S2P1=7, S2P5=11, S3P1=14, S3P2=16) — most
                          likely a mission/slot ID assigned at content-authoring time, not
                          derived from the filename (it does not match episode/phase numbers)
0x08  word   field_08a   varies per file (0x0058 in S1P1, 0x0065 in S1P2, 0x01F2 in S2P1, …) —
                          large and file-specific; candidate: a byte offset/size further into
                          this same record (see below), but not confirmed by any code read
0x0A  word   field_08b   varies per file, always small (0x0007, 0x000D, 0x0003, 0x000E, …) —
                          candidate: a count paired with field_08a (e.g. "N entries starting at
                          offset field_08a"), not confirmed
0x0C  byte   field_0C    = 0x00 in every sample checked (7/7) — likely always zero/padding
0x0D  byte   field_0D    varies per file across a narrow, plausible-dimension range: 0x30(48),
                          0x27(39), 0x30(48), 0x30(48), 0x2A(42), 0x30(48), 0x2D(45) — a single
                          small integer that's the same order of magnitude for every sample,
                          consistent with a hex-grid width/height or similar per-mission map-size
                          parameter, but not traced to a specific consumer
0x0E  byte   field_0E    = 0x00 in every sample checked (7/7) — likely always zero/padding
0x0F  byte   field_0F    = 0x08 in every sample checked (7/7) — constant; candidate format/
                          version tag rather than per-mission data
0x10  ...    remaining bytes: per-scenario hex-cell/appearance data, consumed by the same
             routine that builds the byte→index remap table (`(&DAT_004c6d69)[...]`) and the
             lighting-ramp table (`DAT_004c7e30[8]`) — a 16-entry byte remap immediately
             follows the header (offset ~0x10, values seen: 2d 00 01 02 03 04 05 06 …)
```
Byte `+0x12` of the *runtime* struct (`param_1`, not the file) also drives a lighting-ramp
scale factor (`byte * 500 / 100`), separate from the file itself.

Findings above are now cross-checked against 7 samples (S1P1, S1P2, S1P3, S2P1, S2P5, S3P1,
S3P2) rather than the original 2. Files in this family (S1P1‑7, S2P1‑13, S3P1‑3) range
789–1141 bytes; all begin with the same `ABBAABBA` magic and all 7 sampled files agree on the
"constant" bytes above.

---

## 3. `WORLDS.DAT` — master scenario/world-tile lookup table

**Plain-English purpose:** this is the master index the whole "current mission" system pivots on
— every other per-mission file in this document (`SnPn.DAT`, `WORLDCOL.DAT`, `SCAPEnn.DAT`) is
ultimately reached by first looking up a 104-byte record here. When the campaign UI needs to know
"what world/scenario is the player on right now," it loads one record from `WORLDS.DAT` into a
global "current scenario" struct that the rest of the engine (terrain shading, mission scripting,
world-select screen) reads from for the rest of that mission's lifetime. Two of its fields are
confirmed by tracing their use elsewhere: a **world-map-tile index** (byte offset `0x04`) — this
is the very same number plugged into `SCAPEnn.DAT`'s `%d` and `WORLDCOL.DAT`'s record index, so
it's effectively a pointer from "scenario" to "which physical world tile/terrain this scenario
takes place on" — and a **terrain-generation-mode flag** (byte offset `0x0F`) which, when ≥99,
tells the engine to generate fully randomized, non-canonical terrain instead of the mission's
normal fixed heightmap (this is the mechanism behind Skirmish/Quick-Battle random maps).

Loaded by `World_LoadScenarioDef(index, out)` / `World_LoadDefaultPlaceholderScenario`. Whole
file is read raw (no header stripping in code), then indexed as a flat array:

```
record[i] @ byte offset  i * 0x68   (0x68 = 104 bytes/record)
  +0x00  ?       first field of the record — value 0xDEADBEEF in record 0 of the sample file;
                 this looks like a per-record sentinel/placeholder value rather than a file magic
                 (it is read as ordinary record data, not checked against anything on load)
  +0x04  dword   world-map-tile index — same number used to build "scapeN.dat" and to select
                 the WORLDCOL.DAT record for this scenario (confirmed via ComputeHexTileShading)
  +0x0E  byte    flavor-text selector — confirmed (via MissionSlot_BuildDisplayData) to be added
                 as an offset into the string-resource table (base id 0x630) to fetch a piece of
                 mission-briefing flavor text; exact meaning of the selected text not traced
  +0x0F  byte    dual-purpose: (a) confirmed (via ComputeHexTileShading) as the terrain-
                 generation mode — <99 = load the scenario's own fixed SCAPEnn.DAT heightmap;
                 >=99 = generate fully randomized terrain instead (skirmish/quick-battle
                 random-map mode); (b) confirmed (via MissionSlot_BuildDisplayData) that the SAME
                 byte is also added to a string-resource base id (0x63b) to fetch another piece
                 of flavor text — consistent with this being a small "world/region type" id
                 (e.g. 0 = normal, 1 = ice, 2 = desert, …) that happens to double as both a
                 terrain-style selector and a flavor-text selector, with 99 reserved as a special
                 "randomized/skirmish" sentinel value for both purposes
  +0x11  byte    flavor-text selector — added to string-resource base id 0x650 (same pattern as
                 +0x0E/+0x0F, likely another descriptive detail about the world/scenario)
  +0x16  byte    flavor-text selector — added to string-resource base id 0x618
  +0x19  byte    flavor-text selector — added to string-resource base id 0x621
  +0x54  byte    flavor-text selector — added to string-resource base id 0x35 (a much lower base
                 id than the others, suggesting a different string category, e.g. a faction or
                 culture name rather than a world description)
  ...    remaining ~85 bytes: not individually decoded (see Open questions)
```
The five single-byte "flavor-text selector" fields above all follow the same pattern: the raw
byte value from the record is added to a fixed base string-resource ID and the result is looked
up in the game's string-resource file to produce a line of the mission-briefing text shown to the
player (via `Campaign_BuildMissionBriefingText`/`MissionSlot_BuildDisplayData`) — in other words,
this record doesn't store any text itself, it stores small *choices* ("which of the N pre-written
descriptions of this world's climate/threat/etc. applies here") that get resolved to text later.
Which specific piece of briefing text each of the five corresponds to (climate? enemy faction?
resource type? threat level?) was not individually confirmed — only the mechanism.
`World_LoadScenarioDef` copies `0x68` bytes from `record[index]` into the live "current scenario
def" struct. Scenario index **99** is remapped to record **24** (`0x18`), and that record
additionally gets a marker dword written at file-dword-offset `0x271` after loading — this is a
*different*, much larger table elsewhere in memory (offset 0x271 dwords = byte 0x9C4, far past any
single 104-byte record), so it's a separate "is this the special random-scenario slot" flag array,
not part of the record layout above. `World_LoadDefaultPlaceholderScenario` always loads record
**23** (`0x256` dwords `/ 26` = 23) as the fallback/default world shown before any real mission is
selected (e.g. the initial world-select screen backdrop).

`WORLDS.DAT` is 2608 bytes = 25 × 104 + 8 trailing bytes (likely padding/reserved — not accessed
by either loader observed).

The internal layout of the remaining ~90 bytes/record was not further decoded (would need to walk
every read of the "current scenario" struct across the scenario-briefing/world-select UI code —
candidates visible nearby in the string table suggest per-scenario display name, briefing/debrief
text IDs, and reward/difficulty numbers, but none of those specific offsets were traced).

---

## 4. `WORLDCOL.DAT` — per-scenario terrain background art + per-terrain-type color tables

**Plain-English purpose:** this file supplies the *painted* backdrop and terrain color palette for
a world map tile, as opposed to `SCAPEnn.DAT` which only supplies the raw elevation/feature
recipe. Every one of the 23 records is a bundle of three things needed to actually draw a world's
terrain on screen: (1) a big pre-drawn background bitmap chunk, (2) a small table of "haze" colors
used to tint hexes the player hasn't scouted/explored yet, one shade per terrain type per
map-edge direction, and (3) a table of three colors per terrain type used to draw the little
colored elevation/resource indicator bars that appear on top of each hex tile. In short: `WORLDS`
says *which* world you're on, `SCAPEnn` says *what shape* the terrain is, and `WORLDCOL` says
*what color* to paint it.

Opened directly with `FileSystem_OpenResourceFile` + `ResourceFile_Seek` (not through the
generic wrapper), indexed by the same global scenario/world-tile index used for `WORLDS.DAT`
(`WORLDS.DAT` offset `0x04`):

```
record[i] @ byte offset  i * 0x4A5   (0x4A5 = 1189 bytes/record)
  +0x000  0x400 (1024) bytes  — raw background-art bitmap chunk (copied via CopyRawFrameBuffer
                                 into the world-map background buffer, drawn behind the hex grid
                                 on the world-select/mission-briefing map screen)
  +0x400  0x78  (120)  bytes  — "unexplored hex" fog/haze fill-color table: confirmed (via
                                 Terrain_DrawHexTile) to be indexed as [terrainType*8 + facing],
                                 i.e. 15 terrain types x 8 hex-edge orientations, one palette-index
                                 color each — this is the flat, featureless color drawn over hexes
                                 outside a unit's sight range instead of real terrain art
  +0x478  0x2D  (45)   bytes  — elevation/resource "hex bar" color table: confirmed (via
                                 Terrain_DrawHexBars) to be indexed as [terrainType*3 + which],
                                 i.e. 15 terrain types x 3 colors each (back bar / main bar /
                                 front bar) — these are the small colored bar graphics drawn on
                                 each hex showing relative elevation or resource yield
```
File is 27347 bytes = 23 × 1189 exactly — 23 records, one per world/scenario. (15 terrain types
is inferred from 120/8 = 45/3 = 15, consistent both ways.)

---

## 5. `HEXMASK.DAT` — animated hex-tile highlight/cursor overlay

**Plain-English purpose:** this is the pixel stencil used to draw the animated highlight ring you
see under a hex when it's the mouse cursor's current target or a selected unit's hex — the kind of
pulsing/rotating highlight common in hex-based strategy games. It's confirmed (via
`Terrain_DrawHexTile`, which blits it as an overlay onto a hex-terrain bitmap using a live
"animation phase" counter that cycles 0–5) to be **6 successive animation frames**, each a
512-byte pixel/transparency mask the same shape as one hex tile — the engine advances through the
6 frames over time to animate the highlight. Not tied to any particular scenario/world — it's a
single shared asset used everywhere in the game a hex needs to be visually highlighted.

```
frame[f] @ byte offset  f * 0x200   (0x200 = 512 bytes/frame, f = 0..5)
```
Loaded whole via `LoadResourceFile_WithDecompression(..., DAT_004c6d84, 0xC00)` — total size
`0xC00` = 3072 bytes = 6 × 512, matching the sample file's exact size exactly.

---

## 6. `MPREMAP.DAT` — per-faction unit-sprite "team color" swap table

**Plain-English purpose:** strategy games of this era commonly paint unit sprite artwork only
once, using one placeholder range of the game's shared color palette for whatever should end up
being the "team color," and then recolor that same artwork differently for each owning
faction/player by swapping which real palette colors that placeholder range points to at draw
time — avoiding the need to separately hand-paint every unit sprite once per faction. This file is
exactly that swap table: confirmed (via `SelectDrawMode_ByUnitTypeAndFrame`, which selects one of
8 blocks using `factionId & 7`) to hold **8 per-faction blocks of 256 bytes each**, one block per
possible unit-owning faction/side (0–7), where each block is a byte→byte palette-index remap
(`block[i]` = the palette index to actually draw wherever the unit's artwork specifies color
index `i`). Re-examining the sample file byte-by-byte (not just visually) shows **block 0 is a
pure identity map (no recolor — the default/neutral case), while blocks 1–7 are identity for
palette indices 0–15 and then diverge starting at index 16**, each remapping indices 16–255 to a
different run of palette colors — i.e. indices 16+ are confirmed to be the reserved "team color"
placeholder range, and this file supplies 7 distinct alternate color ramps for it, one per
non-neutral faction. The exact rule `SelectDrawMode_ByUnitTypeAndFrame` uses to pick which of a
block's 256 entries applies to a given unit type + animation frame is unit-type-dependent inline
arithmetic and wasn't fully unwound, but the palette-remap nature and the 8×256 layout are now
both confirmed by data, not just by the loader's buffer size.

```
factionBlock[f] @ byte offset  f * 0x100   (0x100 = 256 bytes/block, f = faction id 0..7, low 3 bits)
  block[f][i]     = palette index to substitute for source-art color index i, for faction f
                    (block 0 = identity/no recolor; blocks 1-7 = identity for i<16, remapped for
                    i>=16, confirmed by diffing every byte of the sample file against 0..255)
```
Loaded whole via `LoadMpRemapTable` into a flat 0x800 (2048)-byte buffer, matching the sample
file's exact size.

---

## 7. `SITTAB.DAT` — random-mission-generator reward/selection weights

**Plain-English purpose:** when the game needs to generate a mission for a campaign slot (rather
than load a hand-authored one), it has to pick *which* pre-written mission script to run and
what difficulty-scaled reward to attach to it. This file is the weighted-random lookup table
that drives that choice. Concretely, it's a set of 9 rows of 32 weight bytes each, one row per
mission-type category; the game draws a random number 0–99 and walks along the chosen row
subtracting each byte's weight until it "lands," and whichever slot it lands on becomes the
`SIT###.CS` mission-script number that gets run for that slot (confirmed: the selected value
is combined as `(missionType+1)*100 + slotIndex+1`, which is exactly the numbering pattern of the
game's `sit%03d.cs` script files, e.g. `SIT101.CS`). So this table is effectively "the odds of
which numbered mission plays," re-rolled per campaign slot.

```
row[missionType] @ byte offset  missionType * 0x20   (0x20 = 32 bytes/row, missionType = 0..8)
```
Loaded whole via `LoadResourceFile_WithDecompression(..., local_130, 0x120)` inside
`MissionSlot_AssignTypeAndReward` — a flat 0x120 (288)-byte buffer = 9 × 32, matching the sample
file size exactly (288 bytes ÷ 32 = 9 rows). For one specific mission type (type 3), the game
additionally narrows the draw to just an 8-byte sub-range of that row (offset `tier*8..tier*8+7`,
selected by the player's chosen difficulty 0–2) instead of scanning the full 32 bytes — giving
that mission type separate weighted odds per difficulty tier where the others use one flat set of
odds regardless of difficulty.

**The actual sample file's contents confirm this design exactly**, resolving what was previously
an open question ("why does type 3 get special-cased?"): every row's *bytes sum to 100* — except
row 3, whose 32 bytes sum to **300**, because it's really three independent 8-byte groups
(offsets 0–7, 8–15, 16–23) that each separately sum to 100 (one weight-100 entry at byte offset
1, 9, and 17 respectively in the shipped file). In other words, mission type 3 is the one type
whose "which mission plays" odds genuinely change with difficulty — every other type uses one
fixed distribution regardless of difficulty (types 0, 4, 5, 6, 7, 8 in the sample file are
completely deterministic, 100% chance of slot 0 / `SIT`*type*`01.CS`; type 1 is a 75%/25% split
between two scripts; type 2 is a 5-way even split at 20% each).

---

## Summary table

| File            | Size (bytes) | Magic        | What it's for (short) | Record/sub-block size | Count | Indexed by |
|-----------------|-------------:|--------------|------------------------|------------:|--------------:|------------|
| `SCAPEnn.DAT`    | varies (661–3840) | `0x88888888` | procedural terrain "recipe" | n/a (header + scatter tables) | 1 | world-map-tile index (`WORLDS.DAT`+0x04) |
| `SnPn.DAT`       | varies (789–1141) | `0xABBAABBA` | per-mission lighting/remap preset | n/a (single struct) | 1 | act `n`, mission `n` |
| `WORLDS.DAT`     | 2608         | none (raw)   | master scenario index | 0x68 (104) | 25 (+8B pad) | global scenario index |
| `WORLDCOL.DAT`   | 27347        | none (raw)   | world background art + terrain colors | 0x4A5 (1189) | 23 | world-map-tile index |
| `HEXMASK.DAT`    | 3072         | none (raw)   | animated hex highlight overlay | 0x200 (512)/frame | 6 frames | animation phase 0–5 |
| `MPREMAP.DAT`    | 2048         | none (raw)   | per-faction unit color-swap table | 0x100 (256)/block | 8 factions | faction id & 7 |
| `SITTAB.DAT`     | 288          | none (raw)   | random-mission odds table | 0x20 (32)/row | 9 rows | mission type (0–8) |

## Key functions (Ghidra, `CSTORM.EXE` @ base `0x400000`)
- `LoadResourceFile_WithDecompression` — generic loader/optional-decompress wrapper (§0)
- `Scape_LoadFromFile` / `GenerateTerrainMap_FromScapeData` — §1
- `LoadHexMapResources_ByScenario` — §2, §4 (WORLDCOL), §5 (HEXMASK) all loaded from here
- `World_LoadScenarioDef` / `World_LoadDefaultPlaceholderScenario` / `Planet_LoadScenario_FromSlot` — §3
- `ComputeHexTileShading` — confirms `WORLDS.DAT`+0x04 (world-tile index) and +0x0F (terrain mode) — §1, §3
- `Terrain_DrawHexTile` / `Terrain_DrawHexBars` — confirm `WORLDCOL.DAT`'s two color sub-tables — §4
- `Terrain_DrawHexTile` (HEXMASK blit path) — confirms 6-frame animated overlay — §5
- `SelectDrawMode_ByUnitTypeAndFrame` — confirms `MPREMAP.DAT`'s 8×256 per-faction layout — §6
- `MissionSlot_AssignTypeAndReward` / `MissionSlot_BuildDisplayData` — confirm `SITTAB.DAT`'s
  row layout and the `SIT###.CS` script-number formula — §7
- `Campaign_BuildMissionBriefingText` — confirms 5 of `WORLDS.DAT`'s flavor-text selector byte
  fields (identifies the string-resource-lookup pattern, doesn't name the individual fields) — §3

## Open questions / follow-ups

**Resolved since the first pass of this document** (kept here briefly for anyone comparing
against an earlier copy): `WORLDCOL.DAT`'s two mystery blocks are now identified (fog-color and
hex-bar-color tables); `HEXMASK.DAT` is confirmed to be 6 animation frames, not an opaque blob;
`MPREMAP.DAT` is confirmed to be a genuine per-faction "team color" palette swap (not a shipped
no-op identity table — only block 0 is identity, blocks 1–7 diverge starting at palette index 16);
`SITTAB.DAT`'s "why does type 3 get an 8-byte sub-range" question is resolved by the file's own
byte sums (type 3's row sums to 300 = three independent 100%-summing 8-byte groups, every other
row sums to a clean 100); `SCAPEnn.DAT`'s two grid-size fields are now understood as a small
coarse seed grid refined via fractal subdivision to a power-of-two-plus-one final size, rather
than two independent, unexplained dimensions; `WORLDS.DAT` gained 5 more identified fields (all
flavor-text selectors) beyond the original 2; `SnPn.DAT`'s per-file fields are now cross-checked
against 7 samples instead of 2, correcting an earlier wrong claim that offset 0x0C/0x0E were
constant (only 0x0C, 0x0E, and 0x0F are; 0x0D genuinely varies per file).

**Still open:**
- `WORLDS.DAT`: 7 of ~26 fields in the 104-byte record are now identified (world-tile index @0x04,
  five flavor-text selector bytes @0x0E/0x0F/0x11/0x16/0x19/0x54, terrain-mode flag reusing @0x0F).
  The remaining ~19 fields (most of the record's ~85 undecoded bytes) are still unknown; likely
  candidates based on what a campaign scenario needs are a display name or name-string ID, a
  reward/credit value, enemy-faction/garrison composition data, and win/lose condition
  parameters, but none of these were confirmed against a specific code read.
- `WORLDS.DAT`: what exactly the separate `piVar1[0x271]` flag-array write means for scenario 99,
  and what (if anything) lives in the file's 8 trailing bytes past record 24, are both unresolved.
- `SnPn.DAT`: offset 0x04 (per-file sequence number) and the 0x08/0x0A word pair are confirmed to
  vary meaningfully per file across all 7 samples checked, but no consuming code was found that
  reads them back out (only the header-parsing/zero-fill code was traced) — their semantic
  meaning (what they configure) remains a guess. Offset 0x0D (also varies, narrow integer range
  39–48) likewise has no confirmed consumer.
- `MPREMAP.DAT`: the exact index formula mapping "unit type + animation frame" to which of a
  faction block's 256 entries gets read wasn't fully unwound (it's inline bit/mod arithmetic that
  differs per unit-type range in `SelectDrawMode_ByUnitTypeAndFrame`) — the 8-faction × 256-byte
  outer structure and the "identity below 16, remapped at 16+" split are both confirmed by data,
  the inner per-unit-type sub-layout is not.
- `SCAPEnn.DAT`: the 4 trailing bytes present past everything the loader code reads (confirmed
  present in all 10 samples checked, via the exact-match size formula) are unexplained — likely
  either an end marker/checksum or a genuinely unused padding artifact of however the original
  developers' terrain-editing tool saved the file.
- `SCAPEnn.DAT`: `field_54` (0/1 flag), `field_58` (constant 3), `field_5c`/`field_60` (paired
  0–127 values), and `field_64` (small int 1–3) are described only by cross-sample pattern-
  matching against the files' display names, not by tracing a specific consuming function — none
  of these four were confirmed by finding the code that reads them back out of the runtime struct.
- General caveat: every "constant across samples" or "confirmed range" claim in this document
  reflects the specific sample files present in this folder (10 `SCAPEnn.DAT` of 24, 7 `SnPn.DAT`
  of 23, single copies of the one-off files) — not the complete original game archive. A field
  that looks constant here could still vary in a sample not present in this folder.
