# .PLX File Format Specification

## Overview

A `.PLX` file holds a 256-color palette used to display 8-bit indexed pixel data found in this engine's sprite and image formats. Sprites and background images in this engine store 8-bit palette *indices*, not RGB pixels directly — the same sprite artwork can be redrawn under a different palette depending on context, so the palette is a separate resource loaded per scene rather than baked into each image. The naming pattern of known palette files (one per game screen/location) suggests one palette is loaded whenever its matching screen becomes active.

All multi-byte fields are little-endian.

## 1. Optional Compressed Container

`.PLX` files may optionally be wrapped in the same generic compressed-resource container used by this engine's other sprite/image formats.

### 1.1 Container header (24 bytes)

| Offset | Size | Type | Field | Notes |
|---|---|---|---|---|
| 0x00 | 4 | uint32 | magic1 | Fixed signature |
| 0x04 | 4 | uint32 | magic2 | Fixed constant |
| 0x08 | 4 | uint32 | magic3 | Fixed constant |
| 0x0C | 4 | uint32 | codecId | 1–14; selects decompressor (see §1.2) |
| 0x10 | 4 | uint32 | compressedSize | Must equal `fileSize − 0x18` |
| 0x14 | 4 | uint32 | decompressedSize | Must be in range [1, 9999999] |
| 0x18 | — | bytes | compressedData | compressedSize bytes, runs to EOF |

**Detection:** if the first three fields don't match the expected magic values, the entire file is the raw, uncontained payload — skip straight to §2.

### 1.2 Codec dispatch

| codecId | Decompressor | Notes |
|---|---|---|
| 1 | Run-length encoding (zero-run optimized) | Single-byte control scheme |
| 12 (0xC) | Run-length encoding (standard) | Control-byte scheme with an extended 16-bit form |
| 14 (0xE) | LZ-style sliding window | 8-bit flag byte per 8 tokens |
| 2–11, 13 | unimplemented | Not expected in valid files |

These codecs are the same ones used by this engine's other compressed sprite/image formats — a reader that already implements them elsewhere can reuse that code unchanged here.

**Decode result:** the decompressed bytes (or the raw file bytes, if no container was present) are the `.PLX` payload described in §2.

## 2. Payload Layout

Unlike some sibling formats, there is no header at all — the payload is a flat, tightly packed table of exactly 256 fixed-size entries:

```
+0x0000  entry[256]     4 bytes each: {red, green, blue, flags}
                         = 1024 bytes total, nothing else
```

| Offset (within entry) | Size | Field | Notes |
|---|---|---|---|
| +0 | 1 byte | red | 0–255 |
| +1 | 1 byte | green | 0–255 |
| +2 | 1 byte | blue | 0–255 |
| +3 | 1 byte | flags | Rendering-system palette flags. Not meaningful for extracting plain pixel color — safe to ignore unless replicating exact display-hardware palette behavior. |

Entry `i` sits at payload offset `i × 4`. A valid payload must be at least 1024 bytes (256 × 4); anything shorter is malformed.

## 3. Which Slots Actually Matter

Not all 256 entries are actually used at display time — this is not obvious from the file bytes alone.

### 3.1 The reserved-slot boundary

Two independent pieces of the rendering pipeline agree on the same boundary: palette updates and nearest-color lookups both operate only on slots **10 through 245**. This is the standard reserved-slot convention for 8-bit paletted display applications of this era.

**What happens to the rest:** slots 0–9 and 246–255 (20 slots total) are populated from the fixed system-reserved palette rather than from the `.plx` file's own bytes — those slots are shared across every application running at once, so no single one can freely repurpose them.

| Slot range | Source |
|---|---|
| 0–9 | Fixed system-reserved palette — not from the file |
| 10–245 (236 entries) | The file's own data — the real, usable image palette |
| 246–255 | Fixed system-reserved palette — not from the file |

A `.plx` file's bytes at slots 0–9 and 246–255 are not meaningless, but they are never read by this engine's palette-loading path — don't treat their presence or absence as a validity signal.

### 3.2 What happens after merging

For completeness, the pipeline beyond the raw merge (useful for exactly replicating on-screen appearance, not just extracting colors):

1. The 236 usable entries are merged with the 20 system-reserved entries. Any of the 236 real entries that happens to duplicate a reserved system color is flagged as shareable; otherwise it's protected from being collapsed into a neighboring system color when the palette is realized on the display hardware.
2. The merged 256 entries are separately reordered into blue/green/red order for a software rendering path that composites into device-independent bitmaps.
3. A lightweight re-apply step re-selects an already-built palette (e.g. on window focus regain) without reloading or re-merging anything.

None of this changes what colors are *stored* in the file — it's how the engine gets them onto the screen. A reader that only wants to extract usable RGB values doesn't need to replicate any of this, only the slot-range rule in §3.1.

### 3.3 Related machinery (context only)

Beyond basic palette loading, the same pipeline also builds a small table mapping "nearest palette index for a named/reference color" — used by UI elements needing a specific semantic color regardless of which scene's palette happens to be active, via a perceptually-weighted color-distance metric (green weighted highest, then red, then blue, matching human luminance sensitivity). There's also gradient-ramp construction for UI elements like health bars that need a smooth-looking transition despite only having discrete palette entries — since 8-bit indexed rendering can't blend colors directly, gradients are built by interpolating in RGB space and snapping each step to the nearest real palette entry. Neither of these affects the `.plx` file format itself.

## 4. Reference Decode Algorithm

```
function load_plx(file_bytes):
    // Layer 1: optional container
    if file_bytes has valid container magic at offset 0x00-0x08:
        codec_id          = uint32 at 0x0C
        compressed_size   = uint32 at 0x10
        decompressed_size = uint32 at 0x14
        assert compressed_size == len(file_bytes) - 0x18
        assert 1 <= decompressed_size <= 9999999
        payload = decompress(codec_id, file_bytes[0x18:], decompressed_size)
    else:
        payload = file_bytes

    // Layer 2: flat 256-entry table, no header
    assert len(payload) >= 1024

    entries = []
    for i in 0..255:
        off = i * 4
        r, g, b, flags = payload[off], payload[off+1], payload[off+2], payload[off+3]
        entries.append({r, g, b, flags, reserved: (i < 10 or i > 245)})
    return entries
```

To extract only the usable colors: iterate the 256 entries and keep the (r, g, b) of every entry where `reserved` is false.

## 5. Rendering Indexed Pixels With a Loaded Palette

Given a decoded pixel index array from a companion sprite/image format and a loaded palette's entry list:

- A pixel index of 0 is always treated as transparent, regardless of what color slot 0 happens to hold.
- For any other index, look up `entries[index]`. If that entry falls in the reserved range, this should not normally happen for real sprite data — index 0 is the only slot sprites are expected to reference in the reserved range, so treat it as a red flag rather than guessing a color.
- Otherwise, the pixel's display color is that entry's (r, g, b), fully opaque.

## 6. Verification Summary

- Container format: shared with this engine's other sprite/image formats.
- Payload layout (flat 256-entry table, no header): the loader reads a fixed-size buffer and passes it straight to palette-application logic with no header-skipping step, consistent with "no header."
- Reserved-slot boundary (10–245 usable): confirmed by two independent code paths arriving at the identical range.
- Not yet verified against a real file's actual bytes end-to-end — running a real sample through §4's algorithm and checking the resulting colors visually would be the natural next step to raise confidence from "structurally confirmed" to "data-verified."
