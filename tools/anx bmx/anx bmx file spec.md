# .ANX File Format Specification

`.ANX` (and the structurally identical `.BMX`) files store an **indexed
sprite animation frame table**: a header giving a frame count, followed by
a fixed-size frame-descriptor array, followed by the pixel data those
descriptors point into.

All integers are little-endian. No fields are byte-aligned/padded beyond
what's listed.

## 1. Optional "PKX:" embedding (outer compressed container)

A file may optionally be wrapped in a generic compressed-resource envelope,
identified by a 4-byte ASCII tag `"PKX:"`. If the first 12 bytes match the
signature below, the rest of the file is a compressed blob that must be
inflated before parsing the frame table (§2):

| Offset | Type     | Field            | Notes                              |
|-------:|----------|------------------|-------------------------------------|
| 0x00   | uint32   | magic1 ("PKX:")  | `0x3A584B50` — bytes `50 4B 58 3A`, i.e. ASCII `P`,`K`,`X`,`:` in file order |
| 0x04   | uint32   | magic2           | `0x10011966` — fixed constant, acts as a format-version tag |
| 0x08   | uint32   | magic3           | `0x9BAEBACF` — fixed constant, second half of the signature |
| 0x0C   | uint32   | method           | compression method id (§1.1); must be in range 1–14 |
| 0x10   | uint32   | compressedSize   | must equal `fileSize - 0x18` (remaining bytes after this header) |
| 0x14   | uint32   | decompressedSize | size of the inflated frame table in bytes; must be in range 1–9,999,999 |
| 0x18   | byte[]   | payload          | compressed bytes, length = compressedSize |

All three magic values must match exactly for the envelope to be recognized —
this 12-byte signature (`magic1`/`magic2`/`magic3`) is what identifies the
"PKX:" embedding as distinct from a bare, unwrapped frame table. A decoder
should validate `compressedSize` and `decompressedSize` against the actual
file size and reject the file if they don't match, rather than trusting them
blindly.

If the signature is absent, the file is the uncompressed frame table
directly (§2). The PKX envelope is a generic wrapper — it is not specific to
`.ANX`/`.BMX` and may be reused around other resource types in the same file
family; when it wraps an `.ANX`/`.BMX` file, its decompressed payload is
always the `AnxFile` structure of §2.

### 1.1 Compression method encoding

`method` is a byte-ish value where a nonzero high nibble means "apply a
second decompression pass first with that nibble as its own method id",
then apply the low nibble:

| id (low nibble) | Algorithm                        |
|---|-------------------------------------------|
| 0x1 | RLE (zero-run optimized variant)         |
| 0xC | RLE (standard byte/count pairs)          |
| 0xE | LZSS                                     |
| other | not a valid/handled method              |

## 2. Frame table

```
struct AnxFile {
    uint32  frameCount;              // offset 0x00
    AnxFrame frames[frameCount];     // offset 0x04, 12 bytes each
    byte    pixelData[...];          // trailing, referenced by frame offsets
};
```

* `frameCount` — number of entries in `frames[]`.
* `frames[i]` starts at byte offset `4 + i * 12` from the start of the file
  (post-decompression).
* Pixel data is not necessarily contiguous or in frame order — each frame
  locates its own pixels via a self-relative offset (see below).

### 2.1 Frame descriptor (12 bytes)

| Offset | Type   | Field             | Description |
|-------:|--------|-------------------|-------------|
| 0x00   | int32  | dataOffset        | Byte offset **from the start of this 12-byte descriptor** to the frame's pixel data: `pixelData = (byte*)&descriptor + dataOffset` |
| 0x04   | uint16 | width             | Frame width, in pixels |
| 0x06   | uint16 | height            | Frame height, in pixels |
| 0x08   | uint8  | reserved          | No known meaning |
| 0x09   | uint8  | compressionMethod | `0` = pixel data is raw; nonzero = pixel data is compressed with this method (same id space as §1.1) and must be inflated before use |
| 0x0A   | uint16 | reserved          | No known meaning |

### 2.2 Pixel data

* Format: 8 bits per pixel, palette-indexed (one byte per pixel; the
  palette itself is external to this file).
* Layout: row-major, `width * height` bytes total, no row padding/stride.
* If `compressionMethod` (offset 0x09) is nonzero, the bytes at
  `dataOffset` are a compressed stream (method per §1.1) whose decompressed
  size is `width * height` bytes.

## 3. Embedded palette ("PLX")

Some `.ANX`/`.BMX` files carry their own color palette instead of relying
solely on an external/shared one. This embedded palette data is tagged
`PLX` and, when present, supplies the RGB color table for the 8bpp indexed
pixel data described in §2.2.

* Presence is optional — a file without an embedded `PLX` palette must be
  displayed using whatever external palette the consumer already has
  active (e.g. a shared unit/scene palette).
* When present, the palette provides up to 256 entries (one per possible
  index value of the 8bpp pixel data), each an RGB triplet.
* Generic expected layout of a `PLX` palette chunk:

| Field        | Type      | Notes                                   |
|--------------|-----------|-------------------------------------------|
| tag          | 4 bytes   | ASCII `PLX` + terminator/version byte, identifies the chunk |
| colorCount   | uint16/uint32 | number of palette entries that follow |
| entries[]    | 3 bytes each  | `R, G, B` per entry, `colorCount` entries total |

* Where in the file this chunk sits (before the frame table, after it, or
  as a separate sub-resource inside the same `PKX:`-compressed envelope
  from §1) is not yet pinned down precisely — treat the byte layout above
  as the shape of the chunk itself, and locate it by scanning for the
  `PLX` tag if the exact offset convention for a given title/file variant
  is unknown.
* This is a distinct mechanism from the `PKX:` compression envelope in §1:
  `PKX:` wraps/compresses arbitrary resource payloads (including a whole
  `.ANX` frame table), while `PLX` is a color-table payload that can be
  embedded alongside frame/pixel data within an `.ANX`/`.BMX` file.

## 4. C reference structs

```c
#pragma pack(push, 1)

typedef struct AnxFrame {
    int32_t  dataOffset;          // relative to &this
    uint16_t width;
    uint16_t height;
    uint8_t  reserved0;
    uint8_t  compressionMethod;   // 0 = raw 8bpp; else see compression table
    uint16_t reserved1;
} AnxFrame;                       // sizeof == 12

typedef struct AnxFile {
    uint32_t frameCount;
    AnxFrame frames[/* frameCount */];
    // pixel bytes follow, addressed via each frame's dataOffset
} AnxFile;

#pragma pack(pop)
```

## 5. Notes / open questions

* The two `reserved` bytes (offsets 0x08 and 0x0A–0x0B) have no confirmed
  meaning — they may be padding, a hotspot/anchor value, or per-frame flags.
* Frame indices with no matching descriptor (index `>= frameCount`) should
  be treated as invalid/absent by a reader; producers should keep indices
  in range.
* File extension `.BMX` is used for the same structure for non-unit sprite
  sets (effects, damage icons); there is no on-disk difference from `.ANX`.
