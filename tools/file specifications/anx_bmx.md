# .ANX / .BMX File Format Specification

## Overview

An `.ANX` file (and its structural twin, `.BMX`) stores a small **indexed sprite animation frame table**: a count of frames, a fixed-size descriptor for each one, and the pixel data those descriptors point into. `.ANX` is used for unit sprites; `.BMX` is used for the same structure applied to non-unit sprite sets such as effects and damage icons — there is no on-disk difference between the two beyond the file extension.

Each frame descriptor is small and self-contained: it says how big the frame is and where to find its pixel bytes, which may be compressed independently of the rest of the file. Pixel data does not need to sit in frame order or be contiguous — each frame locates its own bytes via an offset stored in its own descriptor.

All integers are little-endian. No fields are padded beyond what is listed below.

## 1. Optional compressed container

A file may optionally be wrapped in a generic compressed-resource envelope, identified by a fixed 12-byte signature at the start of the file. If present, the remainder of the file is a compressed blob that must be inflated before the frame table (§2) can be parsed.

| Offset | Type | Field | Notes |
|---|---|---|---|
| 0x00 | uint32 | magic1 | Fixed constant, ASCII `PKX:` |
| 0x04 | uint32 | magic2 | Fixed constant, acts as a format-version tag |
| 0x08 | uint32 | magic3 | Fixed constant, second half of the signature |
| 0x0C | uint32 | method | Compression method ID (§1.1); must be 1–14 |
| 0x10 | uint32 | compressedSize | Must equal `fileSize − 0x18` |
| 0x14 | uint32 | decompressedSize | Size of the inflated frame table, 1–9,999,999 bytes |
| 0x18 | bytes | payload | Compressed data, length = compressedSize |

All three magic values must match for the envelope to be recognized. A reader should validate `compressedSize` and `decompressedSize` against the actual file size and reject the file if they don't match, rather than trusting them blindly.

If the signature is absent, the file is the uncompressed frame table directly (§2). This envelope is a generic wrapper, not specific to `.ANX`/`.BMX` — when it does wrap one of these files, its decompressed payload is always the frame table described in §2.

### 1.1 Compression method encoding

`method` is a byte-ish value where a nonzero high nibble means "apply a second decompression pass first with that nibble as its own method ID," then apply the low nibble.

| ID (low nibble) | Algorithm |
|---|---|
| 0x1 | Run-length encoding (zero-run optimized variant) |
| 0xC | Run-length encoding (standard byte/count pairs) |
| 0xE | LZ-style sliding-window compression |
| other | Not a valid/handled method |

## 2. Frame table

The frame table begins with a 4-byte frame count, followed by that many 12-byte frame descriptors, followed by the trailing pixel data the descriptors reference.

- `frameCount` — number of entries in the descriptor array.
- Descriptor `i` starts at byte offset `4 + i × 12` from the start of the file (post-decompression).

### 2.1 Frame descriptor (12 bytes)

| Offset | Type | Field | Description |
|---|---|---|---|
| 0x00 | int32 | dataOffset | Byte offset **from the start of this descriptor** to the frame's pixel data: pixel data address = descriptor address + dataOffset |
| 0x04 | uint16 | width | Frame width, in pixels |
| 0x06 | uint16 | height | Frame height, in pixels |
| 0x08 | uint8 | reserved | No known meaning |
| 0x09 | uint8 | compressionMethod | 0 = pixel data is raw; nonzero = compressed with this method (same ID space as §1.1) and must be inflated before use |
| 0x0A | uint16 | reserved | No known meaning |

### 2.2 Pixel data

- Format: 8 bits per pixel, palette-indexed (one byte per pixel; the palette itself lives outside this file).
- Layout: row-major, `width × height` bytes total, no row padding.
- If `compressionMethod` is nonzero, the bytes at `dataOffset` are a compressed stream (per §1.1) whose decompressed size is `width × height` bytes.

## 3. Embedded palette

Some `.ANX`/`.BMX` files carry their own color palette instead of relying solely on an external/shared one. This embedded palette data is tagged as a distinct chunk and, when present, supplies the RGB color table for the 8-bit indexed pixel data described in §2.2.

- Presence is optional — a file without an embedded palette must be displayed using whatever external palette the consumer already has active (e.g. a shared unit/scene palette).
- When present, the palette provides up to 256 entries (one per possible pixel-index value), each an RGB triplet.
- Generic expected layout of the palette chunk:

| Field | Type | Notes |
|---|---|---|
| tag | 4 bytes | Chunk signature, identifies this as a palette chunk |
| colorCount | uint16/uint32 | Number of palette entries that follow |
| entries[] | 3 bytes each | R, G, B per entry, colorCount entries total |

Where in the file this chunk sits (before the frame table, after it, or as a separate sub-resource inside the compressed envelope from §1) is not yet pinned down precisely — treat the byte layout above as the shape of the chunk itself, and locate it by scanning if the exact offset convention for a given file variant is unknown.

This is a distinct mechanism from the compression envelope in §1: that envelope wraps/compresses arbitrary resource payloads (including a whole frame table), while this palette chunk is a color-table payload that can be embedded alongside frame/pixel data within an `.ANX`/`.BMX` file.

## 4. Structure summary

```
File
├── (optional) compressed container header (24 bytes)
└── frame table
    ├── frameCount (4 bytes)
    ├── frame descriptors (12 bytes × frameCount)
    └── pixel data (referenced by each descriptor's dataOffset)
```

A frame descriptor's 12 bytes are, in order: a self-relative pixel-data offset, a width, a height, a reserved byte, a compression-method byte, and two reserved trailing bytes.

## 5. Notes / open questions

- The two reserved bytes (offsets 0x08 and 0x0A–0x0B of the frame descriptor) have no confirmed meaning — they may be padding, a hotspot/anchor value, or per-frame flags.
- Frame indices with no matching descriptor (index ≥ frameCount) should be treated as invalid/absent by a reader; producers should keep indices in range.
