# .RBX Archive Format Specification

## Overview

An `.RBX` file is a resource archive — a single file bundling many named assets (text, images, layouts, and so on) together, with a small directory at the front so any one of them can be found quickly by name instead of scanning the whole file. This is the standard "pack many small files into one big file" pattern used to keep an installation's file count manageable and reduce filesystem overhead.

**Status:** the directory-entry layout and per-entry data-record layout below are high-confidence, derived directly from the code that reads an already-open archive. The exact location and size of the entry count and directory table at the very start of the file is a best-effort default, not confirmed against a live sample archive — see the open questions at the end.

## Directory entry layout (confirmed)

Each directory entry is 16 bytes, and entries are sorted ascending by name (a precondition for the binary search used to find them).

| Offset | Size | Field | Notes |
|---|---|---|---|
| 0x00 | 12 bytes | name | Uppercase ASCII, null/space padded. Matched with a fixed 12-byte comparison, so lookups are case-sensitive and exactly 12 bytes wide — no separate length field. |
| 0x0C | 4 bytes (uint32 LE) | data_ptr | Absolute byte offset into the archive file of this entry's **length-prefixed data record** (see below) — not the start of the raw payload itself. |

The binary search compares only the first 12 bytes of each entry, confirming the name field is fixed-width with no separate terminator or length byte.

## Data record layout (confirmed)

At the file offset given by an entry's `data_ptr`:

| Offset (relative to data_ptr) | Size | Field |
|---|---|---|
| +0x00 | 4 bytes (uint32 LE) | length — size in bytes of the payload that follows |
| +0x04 | length bytes | raw payload |

A lookup seeks to `data_ptr`, reads 4 bytes as the length, then treats the following `length` bytes (starting at `data_ptr + 4`) as the resource's raw contents.

Payload bytes are **not** compressed at this layer — the length-prefixed record is handed back as-is. (A separate, unrelated compression wrapper can appear on whole standalone resource files loaded outside the archive — see below.)

## Archive-level header (unconfirmed — best-effort default)

Where the directory table itself starts, and how many entries it holds, is populated from a search-path structure that's already been filled in by the time an archive is searched — no single "open archive and read its header" routine was identified during analysis, only the routine that searches an already-loaded table. The observed in-memory structure fields are:

```
archive_entry[+0x08] : int32   entry_count
archive_entry[+0x0C] : int32*  table_ptr        // pointer to the in-memory directory table
archive_entry[+0x10..0x28] : file handle #1     // 7 dwords, primary file handle
archive_entry[+0x2C..]      : file handle #2    // alternate handle, used when a 4th arg is set
```

Nothing traced so far shows *how* `table_ptr`/`entry_count` get filled from the file's own bytes. The best-effort default assumed by tools working with this format is the conventional layout for this class of archive:

```
offset 0x00 : uint32 LE   entry_count
offset 0x04 : entry_count × 16-byte directory entries (see above)
```

That is: the directory table sits at the very start of the file, immediately after a 4-byte count. Directory-relative `data_ptr` values are absolute offsets from the start of the file (not relative to the end of the table), consistent with how they're used directly as file-seek targets.

## Compression note

A different, unrelated wrapper format exists for individually-compressed standalone resource files (not the `.RBX` archive itself):

| Offset | Size | Field |
|---|---|---|
| 0x00 | 4 bytes | magic — fixed signature |
| 0x04 | 4 bytes | version — fixed constant |
| 0x08 | 4 bytes | checksum/tag — fixed constant |
| 0x0C | 4 bytes | codec id, 1–0xE (see table below) |
| 0x10 | 4 bytes | compressed size (must equal file_size − 0x18) |
| 0x14 | 4 bytes | decompressed size (1–9,999,999) |
| 0x18 | … | compressed payload |

The codec id is nibble-packed: a high-nibble "pre-stage" is applied recursively before the low nibble.

| Codec id (low nibble) | Decompressor |
|---|---|
| 0x1 | Run-length encoding, zero-run optimized |
| 0xC | Run-length encoding, standard |
| 0xE | LZ-style sliding-window compression |
| other | Unsupported |

This wrapper has not been observed applied to whole `.RBX` archives or to individual archive data records in the code paths examined — it only appears in the single-resource-file loader. It's documented here because it shares the same file family and could easily be mistaken for the archive's own header if encountered unexpectedly.

## Open questions

- **Directory table location/size is unverified.** No `.RBX` sample was available to check the "count-then-entries at offset 0" assumption against real bytes. If a real file's first 4 bytes don't decode to a plausible entry count (roughly 1–20,000, with the table fitting within the file, entries sorted, and offsets in range), the true header differs from this default.
- **Whether `data_ptr` values can overlap/alias** across entries (e.g. shared/deduplicated payloads) has not been checked.
- **Whether the compression wrapper is ever applied per-entry inside an archive** (as opposed to only to standalone resource files) is unconfirmed — worth checking if extracted entries don't decode as expected raw asset data.
- Codec ids 0x2–0xB and 0xD are unhandled in the code paths examined — either unused in practice or handled by a path not yet located.
