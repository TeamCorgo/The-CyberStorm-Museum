# .PLY File Format Specification

## Overview

A `.PLY` file defines a flat list of 2D polygon "hot zones" used for mouse hit-testing on a UI screen — the invisible clickable shapes layered over menu artwork so the game knows which button or region the cursor is currently over. Each record is a simple, fixed-size slot holding up to 16 vertices and a count of how many of them are actually used. There is no header: the file is just these records back-to-back, and the number of records is inferred from the file's size.

At runtime, a screen loads its `.PLY` file once, and on every mouse event walks the record list in order, testing whether the cursor point falls inside each polygon. The first match wins and becomes the active menu item.

All values are little-endian, 32-bit signed integers.

## 1. File Layout

```
File = Record[0], Record[1], …, Record[N-1]
```

The record count is derived from the file size:

```
N = file_size_bytes / 132   // integer division; remainder bytes are ignored
```

There is no file header — the first record begins immediately at byte offset 0.

## 2. Record Structure

Each record is exactly 132 bytes and is self-contained.

```
Offset  Size   Type       Field
──────────────────────────────────────────────────────────────
0x00    8      int32[2]   vertex[0]  — first (x, y) pair
0x08    8      int32[2]   vertex[1]
0x10    8      int32[2]   vertex[2]
0x18    8      int32[2]   vertex[3]
0x20    8      int32[2]   vertex[4]
0x28    8      int32[2]   vertex[5]
0x30    8      int32[2]   vertex[6]
0x38    8      int32[2]   vertex[7]
0x40    8      int32[2]   vertex[8]
0x48    8      int32[2]   vertex[9]
0x50    8      int32[2]   vertex[10]
0x58    8      int32[2]   vertex[11]
0x60    8      int32[2]   vertex[12]
0x68    8      int32[2]   vertex[13]
0x70    8      int32[2]   vertex[14]
0x78    8      int32[2]   vertex[15]
0x80    4      int32      vertex_count  — number of valid vertex[] entries
0x84    —      —          (end of record / start of next)
```

A record is, in order: sixteen (x, y) vertex slots, each an (int32, int32) pair, followed by a single int32 vertex count.

### 2.1 Vertex array

- Slots `vertex[0]` through `vertex[vertex_count − 1]` are valid screen coordinates.
- Slots `vertex[vertex_count]` through `vertex[15]` are unused padding and may contain any value — they are not read.
- Coordinates are in screen pixels, origin (0, 0) at the top-left corner. X increases rightward, Y increases downward.
- Values are signed — coordinates outside the visible screen area are legal and used for off-screen clipping geometry.

### 2.2 vertex_count

- Valid range: 1–16 inclusive.
- A meaningful hit-test only happens when `vertex_count > 2`; records with fewer than 3 vertices can never match.
- This field is not validated before use — a corrupted value outside 1–16 causes an out-of-bounds read.

## 3. Coordinate System

```
(0,0) ──────────────────► x
  │
  │       polygon vertex (x, y)
  │
  ▼
  y
```

Coordinates fall within the game's fixed UI resolution, typically 0–639 for x and 0–479 for y.

## 4. Hit-Test Algorithm

The hit test is a ray-casting point-in-polygon check: a horizontal ray is cast rightward from the query point, and the number of polygon edge crossings is counted — an odd count means the point is inside.

Several edge cases are handled with consistent tie-breaking rules: the query point lying exactly on a horizontal edge, exactly on a vertex, or exactly on a non-horizontal edge.

The test returns a simple inside/outside boolean. The first record (lowest index) that matches wins; subsequent records are not checked.

## 5. Reader Outline

```
open file
size = file size in bytes
record_count = size / 132
read record_count records sequentially, 132 bytes each

for each mouse event (px, py):
    for i in 0..record_count-1:
        if point_in_polygon(record[i], px, py):
            return i   // hit
    return -1          // no region hit
```

## 6. Writing a .ply File

To create a valid `.ply` file:

1. For each polygon region, populate a record:
   - Write vertex coordinates into `vertex[0]` … `vertex[n-1]`.
   - Set `vertex_count = n`.
   - Leave remaining `vertex[n]` … `vertex[15]` as zero (or any value).
2. Concatenate records in hit-priority order (record 0 is tested first).
3. Write the raw bytes with no header or padding between records.

Minimum file size for one triangle: 132 bytes.
Maximum useful polygon count is limited only by file size.

## 7. Summary of Key Constants

| Constant | Value | Notes |
|---|---|---|
| Record size | 0x84 | 132 bytes |
| Max vertices | 16 | per record |
| Vertex slot size | 8 | bytes (two int32s: x, y) |
| vertex_count offset | 0x80 | byte offset within record |
| Minimum valid count | 3 | for a meaningful hit-test |
| Coordinate origin | (0,0) | top-left of the UI screen |
| Scalar type | int32 | little-endian signed 32-bit |
