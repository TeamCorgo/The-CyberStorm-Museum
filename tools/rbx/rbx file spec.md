# .RBX Archive Format Specification

**Subject:** `CYBDATA1.RBX` – `CYBDATA4.RBX`, the resource archives used by *Missionforce: Cyberstorm* (`cstorm.exe`, GOG build, 32-bit, base `0x400000`).

**Status:** Reverse-engineered from the game binary via Ghidra decompilation. The directory-entry layout and data-record layout are derived directly from decompiled code and are high-confidence. The exact location/size of the count field and directory table is **not** confirmed against a live archive (no `.RBX` sample was available during this analysis) — see [Open Questions](#open-questions).

## Provenance

Reversed from these functions in `cstorm.exe`:

| Function | Address | Role |
|---|---|---|
| `OpenResourceFile_FromArchive_2` | `0x481580` | Binary-searches the directory table, resolves an entry to its data offset/length |
| `FindResourceFile_InSearchPaths` | `0x47c710` | Dispatches a resource-name lookup to either a plain directory (type 1) or an archive (type 2) search-path entry |
| `LoadResourceFile_WithDecompression` | `0x47c920` | Loads a whole resource file and optionally decompresses it if it carries the separate `PKX:` wrapper (see [Compression note](#compression-note)) |
| `DecompressResourceData_Dispatch` | `0x481290` | Codec dispatch for the `PKX:` wrapper (RLE / LZSS variants) |
| `GameInit_LoadCoreResources` | `0x4756d5` | Probes for `CYBDATA1.RBX` … `CYBDATA4.RBX` at startup |

## Directory entry layout (confirmed)

Each directory entry is **16 bytes**, and entries are sorted ascending by name (a precondition for the binary search in `OpenResourceFile_FromArchive_2`):

| Offset | Size | Field | Notes |
|---|---|---|---|
| `0x00` | 12 bytes | `name` | Uppercase ASCII, NUL/space padded. Matched with a 12-byte `memcmp` (`RTL_MemCmp`), so comparisons are case-sensitive and exactly 12 bytes wide — no separate length field. |
| `0x0C` | 4 bytes (u32 LE) | `data_ptr` | Absolute byte offset into the archive file of this entry's **length-prefixed data record** (see below) — *not* the start of the raw payload itself. |

Binary search compares only the first 12 bytes (`RTL_MemCmp(entry, name_upper, 0xc)`), confirming the name field is fixed-width with no separate terminator/length byte.

## Data record layout (confirmed)

At the file offset given by an entry's `data_ptr`:

| Offset (relative to `data_ptr`) | Size | Field |
|---|---|---|
| `+0x00` | 4 bytes (u32 LE) | `length` — size in bytes of the payload that follows |
| `+0x04` | `length` bytes | raw payload |

This is read directly in `OpenResourceFile_FromArchive_2`: it seeks to `data_ptr`, reads 4 bytes as the length, then hands the caller a virtual file window starting at `data_ptr + 4` with that length (`FileHandle_SetVirtualWindow(handle, altHandle, data_ptr + 4, length)`).

Payload bytes are **not compressed** at this layer — the length-prefixed record is handed back as-is to the resource system. (A separate, unrelated compression wrapper can appear on whole *standalone* resource files loaded outside the archive — see below.)

## Archive-level header (unconfirmed — best-effort default)

The directory table itself (its starting offset and entry count) is populated lazily elsewhere in the engine, and no single "open archive" routine that reads a header was found during this pass — only the routine that *searches* an already-loaded table (`OpenResourceFile_FromArchive_2`, which takes the entry count and table pointer as pre-populated fields of its search-path struct). The struct fields observed are:

```
archive_entry[+0x08] : int32   entry_count      // param_1[2] in OpenResourceFile_FromArchive_2
archive_entry[+0x0C] : int32*  table_ptr        // param_1[3] — pointer to the in-memory directory table
archive_entry[+0x10..0x28] : file handle #1     // 7 dwords, primary FileHandle
archive_entry[+0x2C..]      : file handle #2    // alternate handle, used when a 4th arg is set
```

Nothing in the decompiled code shows *how* `table_ptr`/`entry_count` get filled from the file's own bytes. The best-effort default assumed by the companion extractor tool ([`rbx-extractor.html`](rbx-extractor.html)) is the conventional layout for this class of format:

```
offset 0x00 : u32 LE   entry_count
offset 0x04 : entry_count × 16-byte directory entries (see above)
```

i.e., the directory table sits at the very start of the file, immediately after a 4-byte count. Directory-relative `data_ptr` values are absolute offsets from the start of the file (not relative to the end of the table), consistent with how they're used directly as `FileHandle_Seek` targets.

## Compression note

A *different*, unrelated wrapper format exists for individually-compressed standalone resource files (not the `.RBX` archive itself), detected in `LoadResourceFile_WithDecompression`:

| Offset | Size | Field |
|---|---|---|
| `0x00` | 4 bytes | magic `0x3A584B50` (little-endian bytes `50 4B 58 3A`, i.e. ASCII `"PKX:"` reversed) |
| `0x04` | 4 bytes | version, must equal `0x10011966` |
| `0x08` | 4 bytes | checksum/tag, must equal `0x9BAEBACF` (`-0x64514531` signed) |
| `0x0C` | 4 bytes | codec id, `1`–`0xE` (see table below) |
| `0x10` | 4 bytes | compressed size (must equal `file_size - 0x18`) |
| `0x14` | 4 bytes | decompressed size (`1`–`9,999,999`) |
| `0x18` | … | compressed payload |

Codec id is a nibble-packed dispatch (`DecompressResourceData_Dispatch`, handles a high-nibble "pre-stage" recursively before the low nibble):

| Codec id (low nibble) | Decompressor |
|---|---|
| `0x1` | `RLE_Decompress_ZeroRunOptimized` |
| `0xC` | `RLE_Decompress` |
| `0xE` | `LZSS_Decompress` |
| other | unsupported / no-op (returns 0, triggers a fatal-error dialog in-game) |

This wrapper has **not** been observed applied to whole `.RBX` archives or to individual archive data records in the decompiled code paths examined — it only appears in the single-resource-file loader. It is documented here because it uses the same file family and would be easy to mistake for the archive's own header if encountered.

## Open questions

- **Directory table location/size is unverified.** No `.RBX` sample was available to check the `[u32 count][entries]`-at-offset-0 assumption against real bytes. If a real file's first 4 bytes don't decode to a plausible entry count (roughly 1–20,000, table fitting within the file, entries sorted, offsets in range), the true header differs from this default.
- **Whether `data_ptr` values can overlap/alias** across entries (e.g. shared/deduplicated payloads) was not checked.
- **Whether the `PKX:` wrapper is ever applied per-entry inside an `.RBX` archive** (as opposed to only to standalone resource files) is unconfirmed — worth checking if extracted entries don't decode as expected raw asset data.
- Codec ids `0x2`–`0xB`, `0xD` are unhandled by `DecompressResourceData_Dispatch` in the decompiled code seen — either unused in practice or handled by a path not yet located.

## See also

- [`rbx-extractor.html`](rbx-extractor.html) — browser-based extractor implementing this spec, with a header-detection fallback for when the offset-0 assumption doesn't hold.
