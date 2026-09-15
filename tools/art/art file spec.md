# .ART File Format Specification

## Overview

An `.ART` file stores a small compressed bundle containing one bitmap and its accompanying color palette — the on-disk form of a single piece of sprite/tile artwork plus the colors it needs to display correctly. The bitmap uses a compact run-length scheme built for mostly-flat, mostly-transparent 2D art (large runs of a single color, with runs of zero treated specially as "skip, don't draw"), and the whole bundle is typically further compressed with a general-purpose LZ-style pass on top.

All integers are little-endian.

## 1. Container header

24 bytes.

| Offset | Size | Value / meaning |
|---|---|---|
| 0x00 | 4 | Magic value (part 1) |
| 0x04 | 4 | Magic value (part 2) |
| 0x08 | 4 | Magic value (part 3) |
| 0x0C | 4 | Compression type (see §2) |
| 0x10 | 4 | Compressed payload size (must equal `file_size − 24`) |
| 0x14 | 4 | Decompressed size, in bytes |
| 0x18 | … | Compressed payload |

## 2. Compression type field

Split into nibbles. High nibble = first-pass algorithm, low nibble = second-pass (or only pass). If the high nibble is non-zero, decompress with it first, then decompress the result with the low nibble.

| ID | Algorithm |
|---|---|
| 0x01 | Run-length encoding (zero-run optimized) |
| 0x0C | Run-length encoding (standard) |
| 0x0E | LZ-style sliding-window compression |

All observed `.ART` files use `0x0E` (single-pass LZ compression).

## 3. LZ decompressor (type 0x0E)

The first byte of the compressed payload sets up the decode loop:

- If the first byte is less than 8: the low bits give a small "extra bits" count, and a 16-bit chunk count follows. A chunk count of `0xFFFF` signals a 32-bit chunk count instead, read from the next 4 bytes; otherwise the compressed data starts right after the 16-bit count.
- If the first byte is 8 or greater: the low 3 bits give the "extra bits" count, and the chunk count is packed into the remaining bits of that same byte, with the compressed data starting immediately after it.

The decoder processes that many full chunks, then one partial chunk of the given extra-bits length (skipped entirely if that count is zero).

**Each full chunk:**

- Read one flag byte.
- If the flag byte is zero: copy the next 8 bytes verbatim to the output — chunk done.
- Otherwise, process the flag byte's 8 bits most-significant-bit first. For each bit: `0` means copy one literal byte from input to output; `1` means read a 2-byte back-reference token — offset = (token >> 4) + 1, length = (token & 0xF) + 3 — and copy that many bytes from `output[current position − offset]`.

**Partial final chunk:** identical process, but stop after the given number of bits instead of a full 8.

## 4. Decompressed layout — frame record array

```
[0x00]  uint32   frame_count
[0x04]  12 bytes Frame 0  (bitmap)
[0x10]  12 bytes Frame 1  (palette — present if frame_count > 1)
[0x1C+] ...      pixel data, then palette data
```

### Frame record structure (12 bytes)

| Offset | Size | Field |
|---|---|---|
| +0 | int32 | data_offset — self-relative: the frame's data starts at (record address) + data_offset |
| +4 | uint16 | Width in pixels (or palette start index, for Frame 1) |
| +6 | uint16 | Height in pixels (or palette entry count, for Frame 1) |
| +8 | uint8 | Reserved |
| +9 | uint8 | Format flags — low nibble = pixel format (`0xD` = the run-length pixel format described below); high nibble = per-frame compression method (0 = none) |
| +10 | 2 bytes | Reserved |

## 5. Pixel data (format type 0xD)

Pixel data for the bitmap frame starts at `decompressed[4 + frame0.data_offset]`. It is encoded as `height` scanlines, each a sequence of tokens terminated by a zero byte.

For each token byte `b`:

- `count = b & 0x7F`. If `count == 0`, the scanline ends.
- If the high bit of `b` is set: this is a **run**. Read the next byte as the color. If that color is 0, advance the output position by `count` pixels without writing (a transparent skip). Otherwise, write that color `count` times.
- If the high bit is clear: this is a **literal**. Copy the next `count` bytes verbatim.

Output is 8-bit palette indices, `width × height` bytes, row-major, top-down.

## 6. Palette (Frame 1)

Palette data starts at `decompressed[16 + frame1.data_offset]`.

- `frame1.width` gives the first palette slot to write (0–255).
- `frame1.height` gives the number of entries.

Each entry is 4 bytes in R, G, B, flags order (matching the standard Windows palette-entry layout; the flags byte is unused). Entries are copied into a 256-entry table starting at the given slot index.

The stored byte order is R, G, B — a renderer that needs B, G, R order for its display pipeline must swap channels itself; the file stores plain RGB.
