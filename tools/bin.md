# .BIN Text Resource Format Specification

## Overview

A `.BIN` file is the game's text-resource format: a flat binary blob holding a large set of numbered strings — mission briefings, unit names, tooltip descriptions, menu labels, and so on. Rather than storing each piece of text in its own file, one `.BIN` file packs hundreds of strings together, each addressable by a small integer ID, with an offset table up front so any one string can be located without scanning the whole file. Some files are optionally compressed on disk with the same wrapper used elsewhere in this engine's resource files.

Text domains covered by known files include mission briefings and campaign narrative, unit/mech names and short labels, upgrade stat tooltip text, star system/planet names, shell UI (menus, save/load, multiplayer), error and status messages, multiplayer UI strings, and cutscene title/body text pairs. Some files share an ID namespace: the same integer ID in two different files can describe the same object from different angles (e.g. a short label in one file, a long description in another) — IDs are never globally unique across files.

**Filename length:** any `.BIN` filename longer than 12 characters (8.3 format) cannot be packed into this engine's resource archives and must ship as a loose file on disk (see §10).

## 1. File Layout

```
┌─────────────────────────────────────┐
│  Header          24 bytes           │
├─────────────────────────────────────┤
│  Offset table    variable           │
│    Dense:  (max_id − min_id + 1)    │
│            × 4 bytes                │
│    Sparse: count × 8 bytes          │
│            + 4 byte sentinel        │
├─────────────────────────────────────┤
│  String data     variable           │
│  (null-terminated, packed)          │
└─────────────────────────────────────┘
```

## 2. Header

24 bytes, all fields little-endian uint32.

| Offset | Size | Field | Description |
|---|---|---|---|
| 0x00 | 4 | min_id | Lowest valid string ID in this file. ID 0 is always invalid. |
| 0x04 | 4 | max_id | Highest valid string ID in this file. |
| 0x08 | 4 | count | Number of entries in the offset table. |
| 0x0C | 4 | str_blob_start | Byte offset from start of buffer where string data begins. |
| 0x10 | 4 | str_blob_end | Hint: last used byte offset in the string data region. Not read at load or lookup time — useful for authoring tools only. |
| 0x14 | 4 | is_sparse | 0 = dense table layout. Any non-zero value = sparse table layout. |

**Constraints enforced by the reader:**
- `count == 0` → file is treated as corrupt; lookups return nothing.
- `min_id > max_id` → same treatment.
- ID 0 is always skipped, even if it falls within [min_id, max_id].

**Example header values (a large briefing-text file):**

```
min_id        = 100   (0x64)
max_id        = 253   (0xFD)
count         = 136   (0x88)
str_blob_start= 0x458
str_blob_end  = 0x74C
is_sparse     = 1     -> sparse layout
```

## 3. Dense Offset Table (is_sparse == 0)

Begins at byte 0x18 (immediately after the header).

Contains `(max_id − min_id + 1)` consecutive uint32 values. Each value is a byte offset **from the start of the buffer** pointing to the start of the string for that ID.

```
table[0]  -> string for ID min_id
table[1]  -> string for ID min_id + 1
...
table[N]  -> string for ID max_id
```

String length for entry `i` is: `length = table[i+1] − table[i]`.

If `length == 0`, fall back to a null-terminator scan. This is mandatory for the last entry — reading past `table[N]` into the string data blob would produce a garbage value, so the last dense entry always uses the terminator-scan fallback.

## 4. Sparse Offset Table (is_sparse != 0)

Begins at byte 0x18. Uses a sliding-window layout.

The table consists of `count + 1` uint32 values in groups of 2, advancing by 2 dwords per entry. The last extra dword is a sentinel providing the final string's length:

```
[off_0] [id_0]
[off_1] [id_1]     <- off_1 also acts as next_offset for entry 0
[off_2] [id_2]
...
[off_N] [id_N]
[sentinel]         <- off_{N+1}, provides length of last entry
```

Each entry:

| Sub-offset | Size | Field | Description |
|---|---|---|---|
| +0 | 4 | str_offset | Byte offset from buffer start to the string. |
| +4 | 4 | id | The string ID for this entry. |

String length for entry `i`: `length = str_offset[i+1] − str_offset[i]`.

If `length == 0`, fall back to a null-terminator scan. If the sentinel dword is missing (file truncated), the last entry falls back to the scan automatically.

Total table size: `count × 8 + 4` bytes (including the sentinel).

Entries are scanned in table order, not ID order, using a simple linear search. A tool consuming this format should sort by ID after parsing.

## 5. String Data

Immediately follows the offset table (at str_blob_start). Strings are packed, null-terminated byte sequences encoded in a Latin-1-style single-byte character set.

### 5.1 Dual-String Entries

Some entries contain two strings packed back-to-back:

```
"Primary string\0Alt string\0"
```

The byte immediately after the first null terminator is checked: if non-zero, a second string follows.

Usage depends on file context:

| Context | Primary | Alt |
|---|---|---|
| Unit/tech text pairs | Full label | Abbreviated form |
| Cutscene text | Title text (large font) | Body text (small font, offset vertically) |
| Obfuscated option-menu text (§6) | Menu label | Cheat keyword |

A deliberate pattern also exists where the primary string is empty and only the alt string is populated — this is an intentional redirect, not a corrupt or missing string: the reader detects the empty primary and advances straight to the alt string.

### 5.2 Parameterized Strings

Strings may contain format specifiers consumed by the engine's own string-formatting routine. The `.BIN` string is always the *argument* to formatting, never the format template itself (templates live in the executable).

| Specifier | Meaning |
|---|---|
| %s / %S | String substitution slot |
| %d / %i | Signed decimal integer |
| %u | Unsigned decimal |
| %x / %X | Hexadecimal |
| %o | Octal |
| %c | Single character |
| %f / %e / %E / %g / %G | Float |
| %p / %P | 16.16 fixed-point decimal — **not** a pointer format |
| %% | Literal % |

Width, precision, and flags (`-`, `+`, `#`, ` `, `0`) are supported. Length modifiers `h` (short) and `l`/`L`/`N`/`w` (wide/long) are also supported.

`%p`/`%P` formats a uint32 as a 16.16 fixed-point decimal number (e.g. `0x00018000` → `"1.5000"`).

### 5.3 Hotkey Strings

Strings beginning with `~` are hotkey bindings, not display text:

```
~ [keycode] [optional display text...]
```

The byte at index 1 encodes the key: high bit set means a raw character code (`keycode & 0x7F`); high bit clear means an index into an A–Z mapping.

Display text, if any, starts at byte index 2. Many hotkey strings have no display text at all (length 2: just the marker plus keycode).

### 5.4 String Length Limits

Certain call sites impose hard limits via fixed-size buffers:

| Context | Limit | Enforced by |
|---|---|---|
| A rename-dialog string | 12 characters | Input buffer for a rename dialog |
| Cutscene/skill text | 99 characters | A fixed stack buffer in a modal-loop UI handler |

Exceeding these limits causes a stack/buffer overwrite at runtime — any tool generating or editing `.BIN` content for these specific IDs must respect the limit.

## 6. Obfuscated Text (option-menu file only)

One specific file (holding a hidden cheat/options menu) has all of its string bytes XOR-encoded with a fixed byte value before storage.

**Decode:** `decoded_byte = stored_byte ^ 0xBF`

Apply to every byte of every string (primary and alt) before display or comparison. Both the primary (menu label) and alt (cheat keyword) strings in that file are encoded this way.

## 7. Lookup Algorithm

Looking up a string by ID:

1. Return nothing immediately if `id == 0`.
2. Load the file if it hasn't been loaded yet (lazy load on first use).
3. Validate `min_id ≤ id ≤ max_id`; return nothing if out of range.
4. **Dense:** index directly — `offset = table[id − min_id]`.
5. **Sparse:** linear scan from entry 0 until an entry's id matches; scans at most `count` times.
6. Compute the string's byte length as `next_offset − this_offset`; fall back to a terminator scan if zero.
7. Return the string at that offset.

For the alt-string variant: perform the lookup above, then check the byte right after the first null terminator. If non-zero, return the string starting there instead of the primary.

**Two-file fallback pattern** (used in at least one music-cue lookup): look up an ID in one file first; if not found, look it up in a second file. The same ID may exist in both files with different content — file order determines which value wins.

## 8. Resource Handle Layout

A small in-memory handle structure tracks each loaded file (not stored in the `.BIN` file itself):

| Field | Description |
|---|---|
| filename_ptr | Pointer to the filename string |
| scratch_buf_ptr | Optional pre-allocated copy buffer for single-use mode |
| scratch_buf_size | Maximum bytes for the scratch buffer |
| loaded_data_ptr | Heap pointer to the decompressed file data; unset = not loaded |
| last_lookup_len | Set by every lookup call; not part of the file itself |

**Single-use / copy-and-free mode:** when a scratch buffer is configured, a successful lookup copies the string into that buffer, frees the entire loaded file, and returns the scratch buffer pointer. The file is reloaded on the next access. Used for infrequently accessed files (skill descriptions, cutscene text) to save memory.

## 9. Optional Compression

On-disk files may be compressed with the same wrapper used across this engine's resource files. Detected by checking the first three fields against fixed magic values.

### 9.1 Container header

| Offset | Size | Field | Description |
|---|---|---|---|
| 0x00 | 4 | magic1 | Fixed signature — all three magic fields must match exactly, or it's a fatal error |
| 0x04 | 4 | magic2 | Fixed constant |
| 0x08 | 4 | magic3 | Fixed constant |
| 0x0C | 4 | algorithm | Compression algorithm (see §9.2). Range 1–14. |
| 0x10 | 4 | comp_size | Compressed data size. Must equal `file_size − 0x18`. |
| 0x14 | 4 | decomp_size | Decompressed size. Must be in range [1, 9999999]. |
| 0x18 | … | data | Compressed payload. |

The high nibble of `algorithm` may be non-zero to indicate cascaded compression: the data is decompressed first with `(algorithm >> 4) & 0xF`, then again with `algorithm & 0xF`.

Compressed files may only be loaded into newly allocated buffers — passing a pre-allocated scratch buffer for a compressed file is a fatal error.

### 9.2 Compression Algorithms

| Nibble | Name | Description |
|---|---|---|
| 0x1 | Run-length, zero-run optimized | High bit of control byte = run; low 7 bits = count (max 127). Long zero runs get an aligned 4-byte fast-fill path for counts over 11. |
| 0xC | Run-length, standard | Control byte > 0 = literal run (`count & 0x3FFF` bytes). Control byte == 0 = fill run (next byte = count, byte after = value). Extended counts use a 16-bit value with a sign bit selecting run type. |
| 0xE | LZ-style sliding window | 12-bit offset, 4-bit length (match length = low nibble + 3, min 3, max 18). Two header variants: a short form (first byte < 8, block count in a 16-bit value, extended if that's 0xFFFF) and a compact form (first byte ≥ 8, block count embedded in the remaining bits). A zero control byte means a raw 8-byte copy. |

Values 0x2–0xB, 0xD, 0xF are unimplemented and cause a fatal error. This applies to each nibble independently — a cascaded value like 0x1E (outer LZ, inner zero-run RLE) is valid, but 0x2E is fatal because nibble 0x2 has no handler.

## 10. Archive Storage

`.BIN` files may reside inside numbered resource archive files rather than as loose files on disk. A search-path system (up to 10 entries, tried in registration order) handles both loose-file and archive lookups transparently.

### Archive index entry (16 bytes each, sorted ascending by filename)

| Offset | Size | Description |
|---|---|---|
| 0x00 | 12 | Filename, uppercase, null-padded (8.3 format, max 12 chars) |
| 0x0C | 4 | Byte offset of the file's data within the archive |

Lookup is a binary search on the 12-byte uppercase filename field. Filenames are uppercased before comparison, making lookup case-insensitive in practice.

At the located offset plus 4 bytes into the archive, a uint32 file size is read; the following bytes are then treated as a normal seekable virtual file for all subsequent reads.

**Filename length limit:** any `.BIN` filename longer than 12 characters cannot exist inside an archive and must be a loose file on disk.

## 11. Known ID Ranges (example file)

One large briefing-text file (IDs 100–253) breaks down roughly as follows:

| Range | Content |
|---|---|
| 100–130 | Character/unit stat labels (Name, Model, Age, Rank, Exp, Max, …) |
| 115–119 | Lifecycle status messages |
| 120–130 | Tooltip stat names (Health, Stability, Toxin Level, …) |
| 150–151 | Screen titles |
| 152–199 | Mission debriefing labels and parameters |
| 200–219 | Mission type names and rank titles |
| 220–230 | Location information labels |
| 226–230 | Mission outcome messages |
| 231–253 | Combat HUD strings, promotion messages, input prompts |
| 250 | A rename-dialog title (max 12 chars, per §5.4) |

A related pair of files sharing an ID namespace store short labels (with an abbreviated form) in one file and long descriptions in the other for the same set of objects.

## Appendix A: Reference Pseudocode

```
struct BinHeader {
    uint32 min_id
    uint32 max_id
    uint32 count
    uint32 str_blob_start
    uint32 str_blob_end   // hint only, not used at lookup time
    uint32 is_sparse
}

function dense_lookup(buf, id):
    h = read_header(buf)
    if id == 0 or id < h.min_id or id > h.max_id: return null
    table = uint32_array(buf, offset=24)
    idx = id - h.min_id
    off = table[idx]
    return string_at(buf, off)

function sparse_lookup(buf, id):
    h = read_header(buf)
    table = uint32_array(buf, offset=24)
    for i in 0..h.count-1:
        entry_id = table[i*2 + 1]
        if entry_id == id:
            off = table[i*2]
            return string_at(buf, off)
    return null

function lookup_alt(buf, id):
    primary = lookup(buf, id)
    if primary == null: return null
    plen = strlen(primary)
    if primary[plen + 1] != 0:
        return primary[plen + 1:]
    return primary
```
