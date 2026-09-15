# .BOX File Format Specification

## Overview

A `.BOX` file is a screen layout descriptor: it defines where each widget (button, list, label, and so on) sits on a particular UI screen and how big it is. It is loaded once when that screen is initialized. The file itself holds only positions and sizes — the graphics for each widget are bound separately from a matching visual-resource archive, keyed by widget index.

The format has no magic number, no version field, and no compression. It is read in full and interpreted directly, unlike some other resource types in the same family which are decompressed on load.

All integer values are little-endian.

## File structure

The file has three consecutive sections with no padding between them.

### 1. Screen header (bytes 0–15)

Four signed 32-bit integers describing the screen's base position and two additional fields.

| Offset | Size | Type | Field | Notes |
|---|---|---|---|---|
| +0 | 4 | int32 | screen_x | Base X position of the screen on the display canvas |
| +4 | 4 | int32 | screen_y | Base Y position of the screen on the display canvas |
| +8 | 4 | int32 | field2 | Purpose not confirmed. Observed value: 0xFF |
| +12 | 4 | int32 | field3 | Purpose not confirmed |

### 2. Reserved (bytes 16–19)

| Offset | Size | Type | Field | Notes |
|---|---|---|---|---|
| +16 | 4 | int32 | reserved | Not used by the loader. Observed value: 0 |

The widget count is **not** stored in the file — it must be known ahead of time by whatever code is initializing the screen (see §4).

### 3. Widget records (bytes 20–EOF)

Each record is exactly 20 bytes. The number of records equals the widget count supplied externally.

#### Per-widget record layout (20 bytes)

| Offset | Size | Type | Field | Notes |
|---|---|---|---|---|
| +0 | 4 | int32 | rel_x | X offset relative to screen_x. May be negative |
| +4 | 4 | int32 | rel_y | Y offset relative to screen_y. May be negative |
| +8 | 4 | int32 | width | Widget width in pixels |
| +12 | 4 | int32 | height | Widget height in pixels |
| +16 | 1 | uint8 | extra[0] | Resource/type identifier byte |
| +17 | 1 | uint8 | extra[1] | Resource/type identifier byte |
| +18 | 1 | uint8 | extra[2] | Resource/type identifier byte |
| +19 | 1 | uint8 | extra[3] | Resource/type identifier byte |

#### Absolute position resolution

At load time, absolute screen coordinates are computed as:

```
abs_x = screen_x + rel_x
abs_y = screen_y + rel_y
```

#### Extra bytes

The four extra bytes appear to encode a resource or type identifier. Widgets that form a uniform group (e.g. a menu list) typically share the same first two extra bytes while the last two vary per widget. Widgets with all-zero extra bytes have no special resource binding.

## File size formula

```
file_size = 20 + (widget_count × 20)
```

A file with 10 widgets is 220 bytes; a file with 0 widgets is 20 bytes (header plus reserved field only).

**Validation:** if `(file_size − 20) % 20 ≠ 0`, the file is malformed or not a `.BOX` file.

## Load sequence

1. Locate the file on the configured asset search paths.
2. Determine its size and allocate a scratch buffer of that size.
3. Read the entire file into the buffer in one pass.
4. Copy the four header fields into the screen's live state.
5. Iterate the known widget count, resolving each widget's absolute position and copying its extra bytes into the widget's runtime record.
6. Close the file and free the scratch buffer.

Unlike some sibling bitmap formats in the same resource family, `.BOX` files are never decompressed — they are always read raw.

## Relationship to other formats

`.BOX` handles placement only. A screen's full presentation pipeline draws on several file types together:

| Format | Role |
|---|---|
| `.BOX` | Widget positions and sizes (this format) |
| Visual-resource archive | Bitmaps/animations bound to widget slots by index |
| Background bitmap | Background/GUI art loaded separately before the layout |
| Palette file | Palette loaded alongside the background |

After the layout is applied, each widget is matched to its graphics by looking it up in the visual-resource archive using the widget's index plus a base resource ID.

## Open questions

- **field2 / field3** — carried into the live screen state but their downstream use is not traced.
- **extra[0..3]** — non-zero on grouped widgets. Likely encodes a widget type and/or a resource index into the visual archive.
- **Widget count source** — not stored in the file; presumably hardcoded per screen or held in a separate screen-descriptor table.
