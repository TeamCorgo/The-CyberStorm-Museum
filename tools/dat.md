# .DAT File Format Specification

## Overview

`.DAT` is not one format but a family of small, purpose-built binary files that each hold one kind of game-world data: procedural terrain recipes, per-mission lighting presets, a master scenario index, background art and terrain colors, an animated cursor overlay, a per-faction unit color-swap table, and a random-mission weighting table. They share a naming convention and, in most cases, a common optional compression wrapper, but each one's internal layout is specific to what it stores. This document covers the eight files in that family that have been analyzed; other file types with different extensions (mission scripts, saves, multiplayer records) are documented separately.

All multi-byte fields are little-endian. "Record N" always means 0-based indexing.

## 0. Generic optional compression wrapper

Any resource file in this family can, in principle, be wrapped in a transparent compression envelope before being read. None of the specific `.DAT` samples examined carry this wrapper — verified by checking that none start with the signature below — so on-disk data for these files ships pre-decompressed. It's documented here for completeness, since sibling resource types (archives, sprites) do use it:

```
offset 0x00  dword  magic1        fixed signature
offset 0x04  dword  magic2        fixed constant
offset 0x08  dword  magic3        fixed constant
offset 0x0C  dword  method        1..14
offset 0x10  dword  compSize      = filesize - 0x18
offset 0x14  dword  rawSize       1..9999999
offset 0x18  ...    compressed payload
```

If the first 3 dwords don't match, the file is used as-is, raw. All formats described below are the raw/decompressed layout — exactly what's on disk for these particular files.

## 1. Terrain-generation seed file

**Plain-English purpose:** this is a "recipe" the game follows to procedurally generate the terrain for one world-map tile — it is not a finished map. It stores a display name, a small coarse elevation grid (as few as 10×10 cells), and a handful of small tables that say "scatter N patches of terrain-feature X somewhere randomly, sized between MIN and MAX." At load time, the coarse grid is run through a classic fractal terrain-refinement technique (midpoint displacement, the same family of algorithm used in countless procedural-landscape generators) to expand it into a much larger, natural-looking final terrain grid — confirmed by the fact that the file's declared "final size" field is always a power of two plus one (129, 257, or 513), the signature grid size that technique requires. That's why these files are so small (many under 1KB) even though the resulting terrain is far larger: the file stores only the seed, not the finished landscape.

```
0x00  dword   magic          fixed signature
0x04  char[]  name           null-terminated display name, max 79 chars
        ...   7 dwords immediately after the null terminator (byte-aligned, not padded):
              dword  field_a   0 or 1 in every sample checked — likely a boolean flag
              dword  field_b   constant across every sample checked — likely a format/
                                algorithm-version tag
              dword  field_c   varies widely — paired with the next field
              dword  field_d   varies widely — together with field_c, candidates include
                                an elevation min/max range or an erosion/water-level
                                percentage pair; not confirmed which is which
              dword  field_e   small integer (1-3) — candidate: an erosion-pass count or
                                roughness/algorithm-variant selector
              dword  coarseSize    coarse heightmap edge length (values seen: 10, 18, 34)
              dword  finalSize     final fractal terrain size — always exactly 2^n + 1
                                    (129, 257, 513), confirming the fractal-subdivision
                                    design described above
        ...   coarseSize * coarseSize  bytes   — coarse elevation seed grid (raw copy)
        ...   coarseSize * coarseSize  words   — coarse terrain-type seed grid (2 bytes/cell)
        ...   0x100 bytes   — palette/remap table (256 entries)
        ...   0x20  bytes   — an 8-entry table (purpose not fully traced)
        ...   0x20  bytes   — an 8-entry "random feature scatter" table; each 4-byte entry
                              is {count, unused, min, max} and is used post-load to scatter
                              `count` random byte values in [min,max] across the fine
                              (finalSize-sized) terrain grid, not the coarse seed grid
        ...   4 trailing bytes present in every sample checked, past everything the
                              loader reads — unexplained
```

File size is fully explained by the formula `headerBytes + coarseSize² × 3 + 320 + 4`, confirmed exactly against multiple real samples ranging from 661 to 3840 bytes.

## 2. Per-scenario lighting/remap preset

**Plain-English purpose:** one file per campaign mission slot. It's loaded right before a mission's terrain is drawn and supplies small, mission-specific look-and-feel numbers: a byte-to-byte lookup table remapping a set of generic map-edge/orientation IDs, and a value scaling a global 8-step lighting ramp applied across the map — probably giving each mission a distinct ambient mood (dawn/dusk/interior, etc). It does not contain the terrain itself — think of it as a small "lighting & remap preset" attached to one specific mission.

Read fully into a fixed 1221-byte buffer (zero-filled first, so the file may be shorter than the buffer):

```
0x00  dword  magic       fixed signature
0x04  dword  field_04    a per-file sequence number, unique and small in every sample
                          checked — most likely a mission/slot ID assigned at
                          content-authoring time, not derived from the filename
0x08  word   field_08a   varies per file, large and file-specific — candidate: a byte
                          offset/size further into this same record, not confirmed
0x0A  word   field_08b   varies per file, always small — candidate: a count paired
                          with field_08a, not confirmed
0x0C  byte   field_0C    always zero in every sample checked — likely padding
0x0D  byte   field_0D    varies per file across a narrow, plausible-dimension range —
                          consistent with a map width/height or similar per-mission
                          size parameter, but not traced to a specific consumer
0x0E  byte   field_0E    always zero in every sample checked — likely padding
0x0F  byte   field_0F    constant across every sample checked — candidate format/
                          version tag rather than per-mission data
0x10  ...    remaining bytes: per-scenario map-cell/appearance data, consumed by the
             same routine that builds the byte-to-index remap table and the lighting-
             ramp table — a 16-entry byte remap immediately follows the header
```

A separate runtime-only byte (not part of the file) drives a lighting-ramp scale factor.

Findings above are cross-checked against 7 samples; files in this family range 789–1141 bytes, all begin with the same magic value, and all sampled files agree on the constant fields noted above.

## 3. Master scenario/world-tile index

**Plain-English purpose:** this is the master index the "current mission" system pivots on — every other per-mission file in this document is ultimately reached by first looking up a 104-byte record here. When the campaign UI needs to know "what world/scenario is the player on right now," it loads one record into a global "current scenario" state that the rest of the game (terrain shading, mission scripting, world-select screen) reads from for that mission's lifetime. Two fields are confirmed by tracing their use elsewhere: a world-map-tile index, and a terrain-generation-mode flag that, above a threshold, tells the game to generate fully randomized, non-canonical terrain instead of the mission's normal fixed heightmap (the mechanism behind randomized quick-battle maps).

The whole file is read raw and indexed as a flat array:

```
record[i] @ byte offset  i * 104   (104 bytes/record)
  +0x00  ?       first field of record 0 has a fixed sentinel-looking value; read as
                 ordinary record data, not checked against anything on load
  +0x04  dword   world-map-tile index — same number used to select the matching
                 terrain-seed and background-art records for this scenario
  +0x0E  byte    flavor-text selector — added as an offset into a string-resource
                 table to fetch a piece of mission-briefing flavor text
  +0x0F  byte    dual-purpose: (a) terrain-generation mode — below a threshold, load
                 the scenario's own fixed heightmap; at or above it, generate fully
                 randomized terrain instead; (b) the same byte also selects another
                 piece of flavor text — consistent with a small "world/region type" id
                 that happens to double as both a terrain-style and flavor-text
                 selector, with the threshold value reserved as a "randomized" sentinel
                 for both purposes
  +0x11  byte    flavor-text selector (same pattern as +0x0E/+0x0F)
  +0x16  byte    flavor-text selector
  +0x19  byte    flavor-text selector
  +0x54  byte    flavor-text selector, using a much lower base id than the others,
                 suggesting a different string category (e.g. a faction/culture name
                 rather than a world description)
  ...    remaining ~85 bytes: not individually decoded
```

All five "flavor-text selector" fields follow the same pattern: the raw byte value is added to a fixed base string-resource ID and the result is looked up to produce one line of mission-briefing text shown to the player — the record doesn't store text itself, it stores small choices (which pre-written description applies here) that get resolved to text later. Which specific aspect each selector governs (climate? enemy type? resource type? threat level?) is not individually confirmed, only the mechanism.

Loading this table copies 104 bytes from the indexed record into the live "current scenario" state. One special scenario index is remapped to a specific record, and that record additionally gets a marker written into a separate, much larger flag-array table elsewhere — unrelated to the 104-byte record layout above, just a "is this the special random-scenario slot" flag. A separate fixed record index is always used as the fallback/default world shown before any real mission is selected (e.g. the initial world-select backdrop).

The file itself is 2608 bytes = 25 × 104 + 8 trailing bytes (likely padding — not accessed by either loading routine observed).

The internal layout of the remaining ~90 bytes/record was not further decoded; plausible candidates (going by what a campaign scenario needs) include a display-name string ID, briefing/debrief text IDs, and reward/difficulty numbers, but none of those specific offsets were confirmed.

## 4. Per-scenario background art + terrain color tables

**Plain-English purpose:** this file supplies the painted backdrop and terrain color palette for a world-map tile, as opposed to the terrain-seed file which only supplies the raw elevation/feature recipe. Each record bundles three things needed to draw a world's terrain on screen: (1) a pre-drawn background bitmap chunk, (2) a small table of "haze" colors used to tint map cells the player hasn't scouted yet — one shade per terrain type per map-edge direction, and (3) a table of three colors per terrain type used to draw small colored elevation/resource indicator bars on top of each map cell. In short: the master index says *which* world you're on, the terrain-seed file says *what shape* the terrain is, and this file says *what color* to paint it.

Indexed by the same world-tile index used in §3:

```
record[i] @ byte offset  i * 1189   (1189 bytes/record)
  +0x000  1024 bytes  — raw background-art bitmap chunk, drawn behind the map grid on
                         the world-select/mission-briefing screen
  +0x400  120  bytes  — "unexplored cell" fog/haze fill-color table: indexed as
                         [terrainType*8 + facing], i.e. 15 terrain types x 8 edge
                         orientations, one palette-index color each — the flat,
                         featureless color drawn over cells outside a unit's sight range
  +0x478  45   bytes  — elevation/resource "bar" color table: indexed as
                         [terrainType*3 + which], i.e. 15 terrain types x 3 colors each
                         (back bar / main bar / front bar) — small colored bar graphics
                         showing relative elevation or resource yield on each cell
```

File is 27347 bytes = 23 × 1189 exactly — 23 records, one per world/scenario. (15 terrain types is inferred from 120/8 = 45/3 = 15, consistent both ways.)

## 5. Animated highlight/cursor overlay

**Plain-English purpose:** this is the pixel stencil used to draw the animated highlight ring under a map cell when it's the mouse cursor's current target or a selected unit's cell — the kind of pulsing/rotating highlight common in grid-based strategy games. It's **6 successive animation frames**, each a 512-byte pixel/transparency mask the same shape as one map cell — the animation cycles through the 6 frames over time. Not tied to any particular scenario/world — a single shared asset used wherever a cell needs to be visually highlighted.

```
frame[f] @ byte offset  f * 512   (f = 0..5)
```

Total file size is 3072 bytes = 6 × 512, matching sample files exactly.

## 6. Per-faction unit color-swap table

**Plain-English purpose:** strategy games of this era commonly paint unit sprite artwork only once, using one placeholder range of the shared color palette for whatever should end up being the "team color," and then recolor that same artwork differently per owning faction by swapping which real palette colors that placeholder range points to at draw time — avoiding the need to separately hand-paint every unit sprite once per faction. This file is exactly that swap table: **8 per-faction blocks of 256 bytes each**, one block per possible unit-owning faction/side (0–7), where each block is a byte-to-byte palette-index remap (`block[i]` = the palette index to actually draw wherever the unit's artwork specifies color index `i`). Byte-by-byte inspection of a sample file shows block 0 is a pure identity map (no recolor — the default/neutral case), while blocks 1–7 are identity for palette indices 0–15 and diverge starting at index 16, each remapping indices 16–255 to a different run of colors — confirming indices 16+ are the reserved "team color" placeholder range, with 7 distinct alternate color ramps supplied for it, one per non-neutral faction.

```
factionBlock[f] @ byte offset  f * 256   (f = faction id 0..7, low 3 bits)
  block[f][i]     = palette index to substitute for source-art color index i, for
                    faction f (block 0 = identity/no recolor; blocks 1-7 = identity
                    for i<16, remapped for i>=16)
```

Loaded whole into a flat 2048-byte buffer, matching the sample file's exact size. The exact rule selecting which of a block's 256 entries applies to a given unit type and animation frame is unit-type-dependent inline arithmetic and was not fully unwound — the 8×256 outer structure and the "identity below 16, remapped at 16+" split are both confirmed by data; the inner per-unit-type sub-layout is not.

## 7. Random-mission weighting table

**Plain-English purpose:** when the game needs to generate a mission for a campaign slot rather than load a hand-authored one, it must pick which pre-written mission script to run and what difficulty-scaled reward to attach. This file is the weighted-random lookup table driving that choice: 9 rows of 32 weight bytes each, one row per mission-type category. The game draws a random number 0–99 and walks along the chosen row subtracting each byte's weight until it "lands"; the landing slot becomes the numbered mission script that runs for that slot.

```
row[missionType] @ byte offset  missionType * 32   (missionType = 0..8)
```

Loaded whole into a flat 288-byte buffer = 9 × 32, matching the sample file size exactly (288 ÷ 32 = 9 rows). One specific mission type additionally narrows the draw to just an 8-byte sub-range of its row (selected by difficulty tier 0–2) instead of scanning the full 32 bytes — giving that mission type separate weighted odds per difficulty where the others use one flat set of odds regardless of difficulty.

The sample file's contents confirm this design exactly: every row's bytes sum to 100 — except the difficulty-tiered row, whose 32 bytes sum to 300, because it's really three independent 8-byte groups that each separately sum to 100. In other words, that one mission type is the only one whose "which mission plays" odds genuinely change with difficulty; every other type uses one fixed distribution (several types in the sample file are fully deterministic — 100% chance of the same slot regardless of difficulty; one type is a 75/25 split between two options; another is a 5-way even split at 20% each).

## Summary table

| File | Size (bytes) | Magic | What it's for (short) | Record/sub-block size | Count | Indexed by |
|---|---:|---|---|---:|---:|---|
| Terrain-seed file | varies (661–3840) | fixed | procedural terrain "recipe" | n/a (header + scatter tables) | 1 | world-tile index (§3) |
| Lighting/remap preset | varies (789–1141) | fixed | per-mission lighting/remap preset | n/a (single struct) | 1 | act, mission slot |
| Master scenario index | 2608 | none (raw) | master scenario index | 104 | 25 (+8B pad) | global scenario index |
| Background art + colors | 27347 | none (raw) | world background art + terrain colors | 1189 | 23 | world-tile index |
| Highlight overlay | 3072 | none (raw) | animated cell highlight overlay | 512/frame | 6 frames | animation phase 0–5 |
| Faction color-swap table | 2048 | none (raw) | per-faction unit color-swap table | 256/block | 8 factions | faction id & 7 |
| Mission-odds table | 288 | none (raw) | random-mission odds table | 32/row | 9 rows | mission type (0–8) |

## Open questions / follow-ups

- **Master scenario index:** roughly 7 of ~26 fields in the 104-byte record are identified (world-tile index, five flavor-text selector bytes, a terrain-mode flag reusing one of those bytes). The remaining ~19 fields are unknown; likely candidates include a display-name string ID, a reward/credit value, enemy composition data, and win/lose condition parameters, but none of these were confirmed against a specific consumer.
- **Master scenario index:** what exactly the separate flag-array write means for the special scenario slot, and what (if anything) lives in the file's 8 trailing bytes past the last record, are both unresolved.
- **Lighting/remap preset:** the per-file sequence number and the small word pair at offsets 0x08/0x0A are confirmed to vary meaningfully across samples, but no consuming code was found that reads them back out — their semantic meaning remains a guess. The per-file size-like byte at 0x0D likewise has no confirmed consumer.
- **Faction color-swap table:** the exact index formula mapping "unit type + animation frame" to which of a block's 256 entries gets read was not fully unwound — the 8×256 outer structure and the 16-index split point are confirmed by data, the inner per-unit-type sub-layout is not.
- **Terrain-seed file:** the 4 trailing bytes present past everything the loader reads (confirmed present in every sample checked) are unexplained — likely either an end marker/checksum or an unused artifact of whatever authoring tool saved the file.
- **Terrain-seed file:** several header fields (a 0/1 flag, a constant value, a paired min/max-looking pair, and a small 1–3 integer) are described only by cross-sample pattern-matching against the files' display names, not by tracing a specific consuming routine — none of these were confirmed by finding the code that reads them back out.
- **General caveat:** every "constant across samples" or "confirmed range" claim in this document reflects only the specific sample files examined (a subset of the full set that exists in a complete installation) — not a complete survey. A field that looks constant in this sample set could still vary in a sample not examined.
