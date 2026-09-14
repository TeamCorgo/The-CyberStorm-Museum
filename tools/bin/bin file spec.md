# MechCommander `.BIN` Text Resource Format

**Reverse-engineered from:** `FLX_ResourceLookup`, `FLX_ResourceLookup_GetAltString`,
`LoadResourceFile_WithDecompression`, `DecompressResourceData_Dispatch`, and ~80 call sites.
All field names and behaviours are confirmed against live binary analysis in Ghidra.

---

## Overview

`.BIN` files are the game's primary text/string resource format. Each file is a flat binary
blob containing a 24-byte header, an offset table, and a packed string data region. Files are
loaded into a heap buffer at runtime by `LoadResourceFile_WithDecompression` and looked up by
integer ID via `FLX_ResourceLookup`. Some files are optionally PKX-compressed on disk.

Files in use:

| File | Handle Address | Domain |
|---|---|---|
| `CoreTxt.bin`  | `0x00511DDC` | Mission briefings, combat events, campaign narrative |
| `HercTxt.bin`  | `0x00511E04` | Mech/unit names and short labels |
| `TechTxt.bin`  | `0x00511E18` | Upgrade stat descriptions (tooltip body) |
| `ParaTech.bin` | `0x00511E2C` | Star system / planet names |
| `ShellTxt.bin` | `0x00511E7C` | Shell UI — menus, save/load, multiplayer |
| `ErrorTxt.bin` | *unconfirmed¹* | Error and status messages |
| `MultiTxt.bin` | *unconfirmed¹* | Multiplayer UI strings |
| `SimTxt.bin`   | *unconfirmed¹* | Simulation/skirmish strings |
| `QStart.bin`   | *unconfirmed¹* | Quick-start UI strings |
| `HelpLink.bin` | *unconfirmed¹* | Help link labels |
| `OPTIONS.bin`  | *(stack-local)* | Cheat menu — XOR-obfuscated (see §6) |
| *(cutscene)*   | `0x00511E90` | Cutscene title + body text pairs |

> ¹ **Correction:** earlier drafts of this table listed `ErrorTxt.bin` at `0x00511E04`, which is
> actually `HercTxt.bin`'s handle address — a copy/paste duplicate, not a confirmed value — and
> `MultiTxt.bin`/`SimTxt.bin`/`QStart.bin`/`HelpLink.bin` at a placeholder `0x00511EXX` that was
> never resolved to a real address. All five are unconfirmed pending Ghidra cross-reference of
> their `ResourceHandle_EnsureLoaded` call sites; do not treat the old values as verified.

> **Cross-file namespace:** `HercTxt.bin` and `TechTxt.bin` share ID namespaces. The same
> integer ID in both files describes the same game object from different angles — short label
> in HercTxt, long description in TechTxt. IDs are **never** globally unique across files.
>
> **Filename length:** per §10, any `.BIN` filename longer than 12 characters (8.3 format)
> cannot be packed into a `CYBDATA*.RBX` archive and must ship as a loose file on disk.

---

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

---

## 2. Header

24 bytes, all fields little-endian `uint32`.

| Offset | Size | Field | Description |
|---|---|---|---|
| `0x00` | 4 | `min_id` | Lowest valid string ID in this file. ID 0 is always invalid. |
| `0x04` | 4 | `max_id` | Highest valid string ID in this file. |
| `0x08` | 4 | `count` | Number of entries in the offset table. |
| `0x0C` | 4 | `str_blob_start` | Byte offset from start of buffer where string data begins. |
| `0x10` | 4 | `str_blob_end` | Hint: last used byte offset in the string data region. **Never read at runtime.** Useful for tools. |
| `0x14` | 4 | `is_sparse` | `0` = dense table layout. Any non-zero value = sparse table layout. |

**Constraints enforced by engine:**
- `count == 0` → file is treated as corrupt; `FLX_ResourceLookup` returns `NULL`.
- `min_id > max_id` → same treatment.
- ID `0` is always skipped, even if it falls within `[min_id, max_id]`.

**CORETXT.BIN example:**

```
min_id        = 100   (0x64)
max_id        = 253   (0xFD)
count         = 136   (0x88)
str_blob_start= 0x458
str_blob_end  = 0x74C
is_sparse     = 1     → sparse layout
```

---

## 3. Dense Offset Table (`is_sparse == 0`)

Begins at byte `0x18` (immediately after the header).

Contains `(max_id − min_id + 1)` consecutive `uint32` values. Each value is a byte offset
**from the start of the buffer** pointing to the start of the string for that ID.

```
table[0]  → string for ID min_id
table[1]  → string for ID min_id + 1
...
table[N]  → string for ID max_id
```

**String length** for entry `i` is computed as:

```
length = table[i+1] − table[i]
```

If `length == 0`, fall back to `strlen` (null-terminator scan). This is **mandatory** for the
last entry — `table[N+1]` reads into the string data blob and produces a garbage value; the
engine always uses `strlen` for the last dense entry.

---

## 4. Sparse Offset Table (`is_sparse != 0`)

Begins at byte `0x18`. Uses a **sliding-window** layout.

The table consists of `count + 1` `uint32` values in groups of 2, advancing by 2 dwords per
entry. The last extra dword is a sentinel providing the final string's length:

```
[off_0] [id_0]
[off_1] [id_1]     ← off_1 also acts as next_offset for entry 0
[off_2] [id_2]
...
[off_N] [id_N]
[sentinel]         ← off_{N+1}, provides length of last entry
```

Each entry:

| Sub-offset | Size | Field | Description |
|---|---|---|---|
| `+0` | 4 | `str_offset` | Byte offset from buffer start to the string. |
| `+4` | 4 | `id` | The string ID for this entry. |

**String length** for entry `i`:

```
length = str_offset[i+1] − str_offset[i]
```

If `length == 0`, fall back to `strlen`. If the sentinel dword is missing (file truncated),
the last entry falls back to `strlen` automatically.

**Total table size:** `count × 8 + 4` bytes (includes sentinel).

The engine iterates entries in table order (not ID order) using a simple linear scan. Tools
should sort by ID after parsing.

---

## 5. String Data

Immediately follows the offset table (at `str_blob_start`). Strings are packed
null-terminated byte sequences encoded in **Windows-1252 / Latin-1**.

### 5.1 Dual-String Entries

Some entries contain two strings packed back-to-back:

```
"Primary string\0Alt string\0"
```

The engine checks the byte immediately after the first null terminator. If it is non-zero, a
second string follows. This is accessed via `FLX_ResourceLookup_GetAltString` (`FUN_0047c4f0`).

Usage depends on file context:

| Context | Primary | Alt |
|---|---|---|
| `HercTxt.bin` / `TechTxt.bin` | Full label | Abbreviated form |
| Cutscene BIN | Title text (large font) | Body text (small font, Y offset +14px) |
| `OPTIONS.bin` | Menu label (XOR-decoded) | Cheat keyword (XOR-decoded) |

A deliberate pattern exists where **primary is empty and alt is non-empty**. This is an
intentional redirect used by `Herc_BuildStatTooltipText` — the engine detects `*pcVar3 == '\0'`
and advances to `pcVar3 + 1`. It is not a corrupt or missing string.

### 5.2 Parameterized Strings

Strings may contain format specifiers from the game's custom `RTL_FormatString_Engine`. The
BIN string is **always the argument**, never the format template (templates live in `.rodata`).

Supported specifiers:

| Specifier | Meaning |
|---|---|
| `%s` / `%S` | String substitution slot |
| `%d` / `%i` | Signed decimal integer |
| `%u` | Unsigned decimal |
| `%x` / `%X` | Hexadecimal |
| `%o` | Octal |
| `%c` | Single character |
| `%f` / `%e` / `%E` / `%g` / `%G` | Float |
| `%p` / `%P` | **16.16 fixed-point decimal** — NOT a pointer |
| `%%` | Literal `%` |

Width, precision, and flags (`-`, `+`, `#`, ` `, `0`) are supported. Length modifiers: `h`
(short), `l` / `L` / `N` / `w` (wide/long).

`%p`/`%P` formats a `uint32` as a 16.16 fixed-point decimal number (e.g. `0x00018000`
→ `"1.5000"`). It is **not** a standard pointer format.

### 5.3 Hotkey Strings

Strings beginning with `~` are hotkey bindings, not display text:

```
~ [keycode] [optional display text...]
```

The byte at index 1 encodes the key:
- High bit set (`0x80`): raw character code `keycode & 0x7F`
- High bit clear: index into A–Z mapping (`a`–`z` → `A`–`Z` via `+= 0x20`)

Display text, if any, starts at byte index 2. Many hotkey strings have no display text
(length = 2, just `~` + keycode).

### 5.4 String Length Limits

Certain call sites impose hard limits via fixed-size buffers:

| File | ID | Limit | Enforced by |
|---|---|---|---|
| `CoreTxt.bin` | `0xFA` | **12 chars** | Rename dialog input buffer (`Campaign_ShowRenameDialog`) |
| Skill/cutscene BIN (`0x511E90`) | all | **99 chars** | Stack buffer in `InGameMenu_RunModalLoop` (`char[100]`) |

Exceeding these limits causes a stack/buffer overwrite at runtime.

> **Tooling note:** the cutscene BIN's on-disk filename has not been confirmed (see §1 footnote),
> so any tool that flags the 99-char limit by filename pattern is guessing and may both miss
> real occurrences and false-positive on unrelated files. Treat such warnings as advisory only
> until the filename is confirmed in Ghidra.

---

## 6. XOR Encoding (`OPTIONS.bin` only)

All string bytes in `OPTIONS.bin` are XOR-encoded with `0xBF` before storage.

**Decode:** `decoded_byte = stored_byte ^ 0xBF`

Apply to every byte of every string (primary and alt) before display or comparison. The
engine decodes in-place via a byte loop immediately after lookup. Both the primary (menu
label) and alt (cheat keyword) strings are encoded.

---

## 7. Lookup Algorithm

`FLX_ResourceLookup(handle, id, fatal)`:

1. Return `NULL` immediately if `id == 0`.
2. Load the BIN if `handle->loaded_data == NULL` (lazy load via `ResourceHandle_EnsureLoaded`).
3. Validate `min_id ≤ id ≤ max_id`; return `NULL` if out of range (silent unless `fatal == 1`).
4. **Dense:** index directly — `offset = table[id − min_id]`.
5. **Sparse:** linear scan from entry 0 until `table[i].id == id`; iterates at most `count` times.
6. Compute string byte length as `next_offset − this_offset`; fall back to `strlen + 1` if zero.
7. Store byte length in `handle->last_lookup_len` (field `[4]`).
8. Return pointer to string in loaded buffer.

`FLX_ResourceLookup_GetAltString(handle, id, fatal)`:

Calls `FLX_ResourceLookup`, then checks `ptr[strlen(ptr) + 1]`. If non-zero, advances past
the first null and returns the second string. Otherwise returns the primary string unchanged.

**Two-file fallback** (used by `Music_UpdateTrack`):

```c
pcVar1 = FLX_ResourceLookup(fileA, id, 1);
if (pcVar1 == NULL)
    pcVar1 = FLX_ResourceLookup(fileB, id, 1);
```

The same ID may exist in both files with different content. File order determines which value
is used.

---

## 8. Resource Handle Layout

The handle is a plain struct, not stored in the BIN file. Documented here for completeness.

| Field | Offset | Description |
|---|---|---|
| `filename_ptr`       | `[0]` | Pointer to filename string (e.g. `"CoreTxt.bin"`) |
| `scratch_buf_ptr`    | `[1]` | Optional pre-allocated copy buffer for single-use mode |
| `scratch_buf_size`   | `[2]` | Maximum bytes for scratch buffer |
| `loaded_data_ptr`    | `[3]` | Heap pointer to decompressed BIN data; `0` = not loaded |
| `last_lookup_len`    | `[4]` | Written by every `FLX_ResourceLookup` call; not a file field |

**Single-use / copy-and-free mode:** When `scratch_buf_ptr` is non-null, after a successful
lookup the engine copies the string into the scratch buffer, frees the entire loaded BIN, and
returns the scratch buffer pointer. The file is reloaded on the next access. Used for
infrequently accessed files (skill descriptions, cutscene text).

---

## 9. PKX Compression

On-disk files may be PKX-compressed. The engine detects this by checking the first 12 bytes.

### 9.1 PKX Header

| Offset | Size | Value | Description |
|---|---|---|---|
| `0x00` | 4 | `0x3A584B50` | Magic `"PKX:"` |
| `0x04` | 4 | `0x10011966` | Magic |
| `0x08` | 4 | `0x9BAEBACF` | Magic — **all three must match**. Partial match is a fatal error. |
| `0x0C` | 4 | `algorithm` | Compression algorithm (see §9.2). Range: 1–14. |
| `0x10` | 4 | `comp_size` | Compressed data size. Must equal `file_size − 0x18`. |
| `0x14` | 4 | `decomp_size` | Decompressed size. Must be in range `[1, 9999999]`. |
| `0x18` | … | data | Compressed payload. |

The high nibble of `algorithm` may be non-zero to indicate **cascaded compression** — the
data is first decompressed with `(algorithm >> 4) & 0xF`, then again with `algorithm & 0xF`.

Compressed files may only be loaded into newly heap-allocated buffers. Passing a pre-allocated
scratch buffer to `LoadResourceFile_WithDecompression` when the file is compressed is a fatal
error.

### 9.2 Compression Algorithms

| Nibble | Name | Description |
|---|---|---|
| `0x1` | RLE zero-run | Run-length with DWORD-aligned zero-fill optimisation for long zero runs. High bit of control byte = run; low 7 bits = count (max 127). Zero fill uses aligned 4-byte writes for counts > 11. |
| `0xC` | RLE standard | Control byte `> 0` → literal run (`count & 0x3FFF` bytes). Control byte `== 0` → fill run (next byte = count, byte after = value). Extended counts via u16 with sign bit selecting run type. |
| `0xE` | LZSS | Sliding-window LZ with 12-bit offset, 4-bit length (match length = low4 + 3, min 3 max 18). Two header variants: short (first byte `< 8`, block count in u16 at `[1..2]`; extended if `0xFFFF`), compact (first byte `≥ 8`, block count embedded as `(byte >> 3) − 1`). Null control byte = raw 8-byte (2 × DWORD) copy. |

Values `0x2`–`0xB`, `0xD`, `0xF` are unimplemented and cause a fatal error. This applies to
**each nibble independently** — a cascaded value like `0x1E` (outer LZSS, inner RLE zero-run)
is valid even though `0x1` alone as a full byte would not appear, but `0x2E` is fatal because
nibble `0x2` has no handler.

---

## 10. Archive Format (`.RBX` files)

`.BIN` files may reside inside `CYBDATA1.RBX` – `CYBDATA4.RBX` archive files rather than
as loose files on disk. The search path system (up to 10 entries, tried in registration order)
handles both loose files (type 1) and archive lookups (type 2) transparently.

### Archive index entry (16 bytes each, sorted ascending by filename)

| Offset | Size | Description |
|---|---|---|
| `0x00` | 12 | Filename, uppercase, null-padded (8.3 format, max 12 chars) |
| `0x0C` | 4 | Byte offset of the file's data within the `.RBX` archive |

Lookup is a **binary search** on the 12-byte uppercase filename field. Filenames are
uppercased before comparison, making lookup case-insensitive in practice.

At the located offset + 4 bytes into the archive: a `uint32` file size is read. A virtual
file window is then set, making the archive entry appear as a normal seekable file to all
subsequent read operations.

**Filename length limit:** Any `.BIN` filename longer than 12 characters cannot exist inside
an RBX archive and must be a loose file on disk.

---

## 11. Known ID Ranges by File

### CoreTxt.bin (IDs 100–253)

| Range | Content |
|---|---|
| 100–130 | Bioderm stat labels (`Name`, `Model`, `Age`, `Rank`, `Exp`, `Max`, …) |
| 115–119 | Bioderm lifecycle messages (`Life signs weakening`, `Genetic cohesion lost`, …) |
| 120–130 | Tooltip stat names (`Health`, `Stability`, `Toxin Level`, …) |
| 150–151 | Screen titles (`Commander Herc configuration`, `MISSION BRIEFING`) |
| 152–199 | Mission debriefing labels and parameters |
| 200–219 | Mission type names and rank titles |
| 220–230 | Planet information labels |
| 226–230 | Mission outcome messages (`MISSION ABORTED`, `MISSION FAILED`, …) |
| 231–253 | Combat HUD strings, promotion messages, input prompts |
| `0xFA` (250) | Bioderm rename dialog title (**max 12 chars**) |

### HercTxt.bin / TechTxt.bin (shared ID namespace)

Same integer ID in both files refers to the same game object:
- `HercTxt.bin`: short label + abbreviated form (dual-string)
- `TechTxt.bin`: long description text

---

## Appendix A: Pseudocode

```c
typedef struct {
    uint32_t min_id;
    uint32_t max_id;
    uint32_t count;
    uint32_t str_blob_start;
    uint32_t str_blob_end;   // hint only, not used at runtime
    uint32_t is_sparse;
} BinHeader;

// Dense entry access
char* dense_lookup(uint8_t* buf, uint32_t id) {
    BinHeader* h = (BinHeader*)buf;
    if (id == 0 || id < h->min_id || id > h->max_id) return NULL;
    uint32_t* table = (uint32_t*)(buf + 24);
    uint32_t  idx   = id - h->min_id;
    uint32_t  off   = table[idx];
    return (char*)(buf + off);
}

// Sparse entry access
char* sparse_lookup(uint8_t* buf, uint32_t id) {
    BinHeader* h     = (BinHeader*)buf;
    uint32_t*  table = (uint32_t*)(buf + 24);
    for (uint32_t i = 0; i < h->count; i++) {
        uint32_t entry_id = table[i * 2 + 1];
        if (entry_id == id) {
            uint32_t off = table[i * 2];
            return (char*)(buf + off);
        }
    }
    return NULL;
}

// Alt string access (FLX_ResourceLookup_GetAltString)
char* lookup_alt(uint8_t* buf, uint32_t id) {
    char* primary = lookup(buf, id);
    if (!primary) return NULL;
    size_t plen = strlen(primary);
    if (primary[plen + 1] != '\0')
        return primary + plen + 1;
    return primary;
}
```

---

*Specification derived from reverse engineering of the MechCommander executable.
All addresses reference the retail binary. Field names are reconstructed from context.*
