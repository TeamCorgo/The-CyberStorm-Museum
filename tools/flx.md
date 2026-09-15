# .FLX File Format Specification

## Overview

An `.FLX` file is an 8-bit indexed-color animation — essentially a compact video clip built from a sequence of palette-driven frames, each describing only what changed since the last one. It is a superset of the standard Autodesk FLIC animation format (FLI/FLC), adding a handful of format-specific chunk types tuned for fast playback and an on-disk compression wrapper. A companion `.PLX` file (§10) supplies a baseline color palette that the animation's own palette updates build on top of.

Because most frames only encode a *delta* from the previous frame, playback cannot jump to an arbitrary frame — the decoder always advances forward, and seeking backward means replaying from frame zero.

### Key properties

- **Color depth:** 8-bit indexed (a 256-entry palette)
- **Pixel storage:** bottom-up (row 0 in memory is the bottom row of the image)
- **Delta encoding:** frames accumulate; there is no random access
- **On-disk:** almost always wrapped in the compressed container below
- **In-memory:** raw, uncompressed animation data after decompression

### Magic values

| Magic | Hex | Description |
|---|---|---|
| FLI | 0xAF11 | Original format, frame speed in jiffies |
| FLC | 0xAF12 | Later format, frame speed in milliseconds |
| FLX | 0xAF20 | This format's variant A |
| FLX2 | 0xAF21 | This format's variant B |

FLX and FLX2 are structurally identical — same header, same frame and chunk formats.

## 1. Compressed container (on-disk wrapper)

Nearly all `.FLX` and `.PLX` files on disk are wrapped in this container. Detect and decompress before parsing the animation itself.

24 bytes, all little-endian:

```
Offset  Size  Field      Value / Notes
------  ----  ---------  --------------------------------------------------
+0      u32   magic1     fixed signature
+4      u32   magic2     fixed constant
+8      u32   magic3     fixed constant (two variants observed, both valid)
+12     u32   compType   Compression method (see below)
+16     u32   compSize   Byte size of compressed payload (= fileSize - 24)
+20     u32   rawSize    Expected byte size of decompressed output
```

Payload data begins at byte 24.

### Compression types

| compType | Meaning |
|---|---|
| 0xC | Run-length encoding only |
| 0xE | LZ-style sliding-window compression only |
| 0x1 | Run-length encoding, zero-run optimized |
| hi/lo | Two-pass: high nibble decompressor first, then low nibble |

For a two-pass value (e.g. `0xEC`), apply the high-nibble decompressor first to produce an intermediate buffer, then apply the low-nibble decompressor to that buffer to produce the final output.

### LZ decompressor (compType 0xE)

The header byte at the start of the compressed data sets up the loop:

```
if b0 >= 8:
    groupCount = (b0 >> 3) - 1
    data starts at byte 1
else:
    cnt16 = 16-bit value at bytes 1-2
    if cnt16 == 0xFFFF:
        groupCount = 32-bit value at bytes 3-6
        data starts at byte 7
    else:
        groupCount = cnt16
        data starts at byte 3
```

The decode loop runs `groupCount + 1` times. Each iteration reads a control byte: if it's zero, the next 8 bytes are copied verbatim to the output. Otherwise, each of its 8 bits (most-significant first) is either a literal-byte copy or a back-reference: a 16-bit value is read, giving a back-distance of `(value >> 4) + 1` and a length of `(value & 0xF) + 3`, copied from that many bytes before the current output position (overlapping copies are expected and correct).

### Run-length decompressor (compType 0xC)

Uses the same algorithm as chunk type 100 below (§5.9).

## 2. File header

128 bytes, little-endian. Frame data always begins at byte 128.

```
Offset  Size  Field        Notes
------  ----  -----------  ---------------------------------------------------
+0      u32   fileSize     Total file bytes (after decompression)
+4      u16   magic        one of the magic values above
+6      u16   frameCount   Playable frames (not counting the ring/loop frame)
+8      u16   width        Pixels wide
+10     u16   height       Pixels tall
+12     u16   depth        Bits per pixel (always 8)
+14     u16   flags        Bit 0: has ring frame; Bit 1: has a second offset field
+16     u32   speed        Jiffies (older variant) or milliseconds; 0 = treat as 70ms
+20     u16   reserved
+22     u32   created      Creation timestamp
+26     u32   creator      Creator program ID
+30     u32   updated      Last update timestamp
+34     u32   updater      Updater ID
+38     u16   aspectX      Pixel aspect ratio X (cosmetic only)
+40     u16   aspectY      Pixel aspect ratio Y (cosmetic only)
+42     u16   extFlags     Extended flags (older format variant only)
+44     u16   keyFrames    Key frame count (older format variant only)
+46     u16   totalFrames  Total including ring frame (older format variant only)
+48     u32   reqMemory    Required memory hint (older format variant only)
+52     u16   maxRegions   Max dirty regions (older format variant only)
+54     u16   transpNum    Transparent color count (older format variant only)
+56..79 --    reserved     Zero padding
+80     u32   oframe1      File offset of frame 0 (always 128)
+84     u32   oframe2      File offset of the loop-back frame (ring frame target)
+88     u16   palBits      Palette bits (older format variant only)
+90..127 --   reserved     Zero padding
```

### Speed conversion

Older-style speed values are in jiffies and must be converted: `ms_per_frame = round(speed × 1000 / 70)`. Newer variants store milliseconds directly. Either way, a speed of 0 means 70ms (~14fps).

### oframe2 usage

`oframe2` is the loop-back target — the file offset of the frame to seek to once the last playable frame has completed. Frame 0 is always decoded first regardless of `oframe2`. On loop, seek to `oframe2` and resume forward from there.

## 3. Frame structure

Frames are stored sequentially starting at byte 128.

### Frame header (16 bytes)

```
Offset  Size  Field       Notes
------  ----  ----------  ---------------------------------------------------
+0      u32   frameSize   Total frame bytes including this 16-byte header
+4      u16   magic       0xF1FA = data frame; 0xF1FB = audio/prefix frame
+6      u16   chunkCount  Number of chunks in this frame
+8      u64   reserved    Always zero
```

| Magic | Meaning |
|---|---|
| 0xF1FA | Data frame — contains palette and/or pixel chunks |
| 0xF1FB | Audio/prefix frame — skip entirely; no pixel content |

### Walking the frame list

Starting at byte 128, read each frame's size/magic/chunk-count, decode its chunks if it's a data frame (0xF1FA), then advance by `frameSize` to reach the next one. Stop when the remaining bytes are too few for a header, when a frame size is zero, or when a frame would run past the end of the file. A 0xF1FB frame is simply skipped — its bytes are consumed but no chunks inside it are decoded.

### Playable frame count

Playback covers exactly `frameCount` frames (from the header), then loops back to `oframe2`. The ring frame at `oframe2` — and any frames indexed beyond `frameCount` — are not displayed. Use `min(indexed_count, frameCount)` as the playable total.

## 4. Chunk types

### Chunk header (6 bytes)

```
Offset  Size  Field      Notes
+0      u32   chunkSize  Total chunk bytes including this 6-byte header
+4      i16   chunkType  Signed integer; selects the decoder
```

Chunk data begins right after the header; the next chunk begins at `chunkBase + chunkSize`.

### Type 4 — 8-bit palette update

Updates a subset of the 256-entry palette.

```
+0  i16  packetCount   Number of packets (signed)

Packets (repeated packetCount times):
  u8  skip    Add to current palette index
  u8  count   Entries to set (0 = 256)
  [count × 3 bytes]  R, G, B  (8-bit each)
```

After all packets are applied, entry 0 of the palette is forced to (0,0,0) — this happens unconditionally and must not be skipped by a reader.

### Type 7 — word-oriented delta (standard FLI style)

```
+0  u16  lineCount   Number of lines to update

Per line, read signed 16-bit words until a non-negative one is found:
  top two bits == 10  -> skip (word & 0x3FFF) lines
  top two bits == 11  -> set the last pixel of the current line to (word & 0xFF)
  non-negative word   -> this is the packet count for the line

Per packet:
  u8   colSkip   Columns to skip
  i8   count
    count > 0  -> literal: copy count word-pairs (2 bytes each) from input
    count < 0  -> run: repeat the next word-pair |count| times
```

### Type 11 — 6-bit palette update

Same packet structure as type 4, but each color component is 6-bit (range 0–63); shift left 2 bits to convert to 8-bit (`r8 = r6 << 2`). Unlike type 4, palette entry 0 is **not** zeroed after this chunk.

### Type 13 — fill black

Fills the entire pixel buffer with color index 0. No data bytes follow the chunk header.

### Type 15 — byte-oriented delta (standard FLC style)

```
+0  u16  lineCount    Number of lines to update
+2  u16  firstLine    First line index (0-based)

Per line (lineCount lines starting at firstLine):
  u8  packetCount

  Per packet:
    u8   skip    Columns to skip
    i8   count
      count > 0  -> literal: copy count bytes from input to output
      count < 0  -> run: repeat the next byte |count| times
```

### Type 16 — full-frame run-length

Covers every row of the frame.

```
Per row:
  u8  (ignored)   Legacy packet-count byte; discard
  Packets until the row is full:
    i8  count
      count > 0  -> literal: copy count bytes
      count < 0  -> run: repeat the next byte |count| times
      count == 0 -> end of row
```

### Type 18 — raw copy

An uncompressed frame: `width × height` bytes, row-major, top-to-bottom. Copied directly into the pixel buffer.

### Type 19 — thumbnail

A small preview frame (typically 1/16 scale). Not used for playback; safe to ignore.

### Type 100 — format-specific full-frame run-length

A continuous byte stream with no per-line framing — the output pointer walks linearly through the pixel buffer starting at position 0.

```
Read byte b continuously until output is full or an END opcode is hit:

  b interpreted as a SIGNED byte:

  signed(b) >= 1   [b = 0x01..0x7F]:
      LITERAL — count = b & 0x3FFF
      Copy the next count bytes from input to output
      Advance input by 1 (count byte) + count (data bytes)

  b == 0x00:
      FILL — count = nextByte & 0x3FFF, value = the byte after that
      Fill count output pixels with value
      Advance input by 3

  b == 0x80:
      EXTENDED — read a signed 16-bit value v from the next 2 bytes (little-endian)

      v == 0:          END OF FRAME — stop decoding immediately
      v >= 1:          SKIP — advance the output pointer by v pixels (transparent)
      v < 0:
          uMasked = v as unsigned 16-bit, masked to 15 bits
          if uMasked < 0x4000:
              EXTENDED LITERAL — copy the next uMasked bytes from input to output
          else:
              EXTENDED FILL — count = uMasked & 0x3FFF, value = the next byte
              Fill count output pixels with value

  b = 0x81..0xFF   [signed(b) = -127..-1]:
      SKIP — advance the output pointer by (b & 0x7F) pixels
      Advance input by 1 (opcode byte only; no data bytes follow)
```

**Critical detail:** the opcode test is a *signed* byte comparison. Byte value `0x80` (128 unsigned, −128 signed) is negative and must fall into the EXTENDED branch, never the literal branch — an unsigned comparison here is the single most common source of decoder bugs. In a language without native signed bytes: `signed_value = b < 128 ? b : b - 256`, then test `signed_value >= 1`.

The frame terminates on the exact byte sequence `0x80 0x00 0x00` (EXTENDED with a 16-bit value of 0), and also implicitly once the output pointer reaches `width × height`.

### Type 101 — full-frame run-length with blit offset

```
+0  u32  destX   Destination X coordinate
+4  u32  destY   Destination Y coordinate
+8  ...  type-100 stream (identical algorithm to §above)
```

The stream is conceptually decoded into a temporary surface and then blitted onto the main pixel buffer at (destX, destY). A reader using a single pixel buffer can decode the stream directly into the main buffer at that offset instead, since SKIP opcodes preserve existing pixels rather than overwriting them.

### Type 102 — dirty rectangle (metadata only)

```
+0  u32  x
+4  u32  y
+8  u32  width
+12 u32  height
```

Contains no pixel data — it only marks which screen region changed, for renderers doing partial-redraw optimization. A renderer doing full-frame redraws can skip this chunk entirely.

### Type 104 — two-stage compression

Stage 1: apply the LZ decompressor (same algorithm as the container in §1) to the chunk data, into a scratch buffer. Stage 2: apply the type-100 run-length decompressor to that scratch buffer. The scratch buffer must be at least `width × height` bytes — for a 640×480 frame, at least 307,200 bytes.

## 5. Pixel buffer layout

The pixel buffer is `width × height` bytes, one byte per pixel (a palette index).

**Bottom-up storage:** the buffer follows a bottom-up convention — row 0 in memory corresponds to the *bottom* row on screen. All of the run-length decoders above write top-to-bottom into memory (the first bytes decoded are the visual top of the image); because storage is bottom-up, the visual top ends up at the *end* of the memory buffer.

For correct display, flip row order when converting the indexed buffer to a displayable format:

```
for y in 0..height-1:
    src_row = (height - 1 - y) * width   // read from end of buffer
    dst_row = y * width                   // write to start of output
    for x in 0..width-1:
        output[dst_row + x] = palette[pixels[src_row + x]]
```

## 6. Palette system

### Palette buffer

256 entries, 4 bytes each: R, G, B, A. Alpha is always 0 internally — use 255 (fully opaque) when rendering.

### Update flow

1. **Initialize:** fill with a grey ramp or zeros before decoding frame 0.
2. **Per frame:** apply palette chunks (type 4 or 11) first, in the order they appear.
3. **After a type-4 chunk:** zero entry 0.
4. **Apply pixels:** use the current palette to map indices to displayable colors.

### Palette override from a companion file

A `.PLX` palette file (§10) is typically loaded before animation playback begins, to set all 256 baseline entries. Per-frame type-4/11 chunks then partially overwrite specific slots on top of that baseline.

## 7. Playback

### Initialization

1. Detect and decompress the container if present (§1).
2. Parse the file header (§2).
3. Walk all 0xF1FA frames from byte 128, building a frame index.
4. Playable frames = `min(indexed_count, header.frameCount)`.
5. Find `loopFrame` = the index of the frame located at `oframe2`.
6. Allocate a pixel buffer (`width × height` bytes), fill with 0.
7. Initialize the palette (grey ramp or zeros).
8. If a companion palette file is available, apply it now.
9. Decode frame 0 (always, even if `oframe2` points elsewhere).

### Per-frame decode

Apply every chunk in the current frame, in order, to the pixel buffer and/or palette. After all chunks, if a palette chunk was present, flush the palette to the renderer. Render the pixel buffer (with the row flip from §5). Wait the frame's duration before advancing.

### Loop control

An internal frame counter increments after each frame. When it would exceed the playable frame count, it wraps: reset the pixel buffer to 0, reset the palette (re-applying the companion palette file if present), then re-decode frames 0 through `loopFrame − 1` to rebuild the accumulated delta state, landing on `loopFrame`.

**Loop count:**
- `−1` (all bits set): infinite loop — used by ambient/idle animations.
- `0`: play once, then stop.
- `N`: play N times, then stop.

### Return flags

| Bit | Meaning |
|---|---|
| 0x01 | A new frame was decoded this tick |
| 0x04 | Animation complete (loop count exhausted) |
| 0x08 | Frame counter just wrapped to loopFrame |
| 0x10 | Frame index was reset |
| 0x20 | A palette chunk was applied — flush the palette now |

## 8. Audio cue table

Audio is not embedded in `.FLX` files. A separate cue table can be attached alongside an animation, firing sound cues frame-accurately as new frames are decoded.

### Cue entry (8 bytes, null-terminated list)

```
u16  soundId     Sound asset ID to play
u16  frameIndex  1-based frame counter value to match
u8   volume      0-127
u8   pan         -64 to +63, encoded as an unsigned byte
u8   flagsLo     Bit 6: loop
u8   flagsHi     Bit 7: preload on attach; Bit 5: use queue-and-play; Bit 6: loop
```

The list is terminated by the first entry whose `soundId` is 0.

### Flag bits (flagsHi)

| Bit | Value | Meaning |
|---|---|---|
| 7 | 0x80 | Preload the sound asset when the table is attached |
| 5 | 0x20 | Queue the sound rather than playing it immediately |
| 6 | 0x40 | Loop the sound |

### Pan decoding

The stored pan byte is sign-extended as an 8-bit signed value: 0–63 maps to right pan, 64–127 wraps to −64..−1 (left pan).

## 9. Confirmed behavior reference

| # | Behavior |
|---|---|
| 1 | Frame walk always starts at byte 128 |
| 2 | `oframe2` is a loop-back target only; frame 0 is always decoded first |
| 3 | Type-4 palette chunks zero entry 0 after applying |
| 4 | Type-11 palette chunks do not zero entry 0 |
| 5 | Type-100 run-length uses a signed byte comparison for its opcode dispatch |
| 6 | LZ decompression: `groupCount = (b0 >> 3) - 1`; the loop runs `groupCount + 1` times |
| 7 | LZ back-references: `back = (u16 >> 4) + 1`, `length = (u16 & 0xF) + 3` |
| 8 | Pixel buffer is bottom-up (row 0 = screen bottom) |
| 9 | Speed field sits at header offset +16 |
| 10 | Speed of 0 defaults to 70ms |
| 11 | Playable count = `min(indexed, frameCount)` — the ring frame is excluded |
| 12 | Frame header is exactly 16 bytes |
| 13 | Chunk header is exactly 6 bytes (4-byte size + 2-byte signed type) |
| 14 | `chunkSize` includes its own 6-byte header |
| 15 | Both magic variants (0xAF20/0xAF21) share identical chunk formats |
| 16 | Type-102 (dirty rect) carries no pixel data |
| 17 | Audio cue pan is encoded as −64..+63 in an unsigned byte |
| 18 | Audio cue frame index is 1-based |
| 19 | A loop count of −1 (all bits set) means infinite |
| 20 | Two valid variants of the third container magic value have been observed in real files |
| 21 | The scratch buffer for type-104 chunks must be at least `width × height` bytes |
| 22 | 0xF1FB prefix frames contain no pixel chunks and are skipped entirely |

## 10. Companion palette files

A palette file stores a full 256-entry RGBA palette used to set the baseline before animation playback, especially for animations that only touch part of the palette themselves.

### Raw layout

Exactly 1024 bytes: 256 × 4 bytes, R, G, B, A per entry. Alpha is always 0 in storage.

### On disk

Palette files are almost always wrapped in the same compressed container as §1. Detect it, decompress, then read the raw 1024-byte palette.

### Application order

1. Load the palette file and apply all 256 entries as the baseline.
2. Start animation playback.
3. Per frame, type-4/11 chunks overwrite specific palette slots — the baseline remains wherever the animation doesn't touch a slot.

If the baseline should unconditionally override the animation's own palette chunks, re-apply the palette file after each frame's chunks are processed.

## 11. Implementation checklist

```
[ ] Detect the compressed container
[ ] Decompress the payload (LZ for compType 0xE, run-length for 0xC)
[ ] Validate the magic value
[ ] Parse header: width, height, frameCount, speed, oframe2
[ ] Walk 0xF1FA frames from byte 128 - build an offset index
[ ] Allocate pixel buffer: width x height bytes
[ ] Allocate an RGBA output buffer
[ ] Allocate a 256-entry RGBA palette
[ ] Implement type-4 palette chunk with entry-0 zeroing
[ ] Implement type-100 full-frame run-length with SIGNED byte opcode dispatch
[ ] Implement type-104 two-stage decompression
[ ] Implement row-flip when converting indexed pixels to RGBA (bottom-up storage)
[ ] Implement loop-frame seek on wrap (re-decode from frame 0)
```

### Common pitfalls

1. **Byte 0x80 decoded as a literal in type-100.** The opcode check must be signed; `0x80` is negative and belongs to the EXTENDED branch.
2. **Image appears upside-down.** Storage is bottom-up; flip rows only during output conversion, never the stored buffer itself.
3. **Black screen on delta frames.** Delta chunk types (100, 101, 104) only update changed regions — never clear the pixel buffer between frames, only when looping back to frame 0.
4. **Last frame duplicated.** The ring frame is a structural frame stored one past the last playable frame; cap playback at `frameCount`, not the total indexed frame count.
5. **Wrong frame count after seeking.** There is no random access — seeking to frame N means re-decoding from frame 0 through frame N, accumulating delta state along the way.
6. **Speed of 0.** Treat as 70ms per frame.
7. **oframe2 not found in the frame index.** Default to looping from frame 0.
8. **LZ scratch buffer too small.** Allocate at least `width × height` bytes for type-104 chunks — 307,200 bytes for a 640×480 frame.
