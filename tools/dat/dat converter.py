"""
Export parsed CSTORM .DAT data into CSV files, per the layouts documented in
CSTORM_DAT_FORMAT_SPEC.md. Reads every matching sample file in this folder and writes one CSV
per file family into ./csv_export/.

Run: python export_dat_csv.py
"""
import csv
import glob
import os
import struct

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "csv_export")
os.makedirs(OUT, exist_ok=True)


def write_csv(name, header, rows):
    path = os.path.join(OUT, name)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(rows)
    print(f"wrote {path} ({len(rows)} rows)")


# ---------------------------------------------------------------------------
# 1. SCAPEnn.DAT -> scape_headers.csv
# ---------------------------------------------------------------------------
def export_scape():
    rows = []
    for path in sorted(glob.glob(os.path.join(HERE, "SCAPE*.DAT"))):
        data = open(path, "rb").read()
        fname = os.path.basename(path)
        if data[0:4] != b"\x88\x88\x88\x88":
            rows.append([fname, len(data), "BAD MAGIC"] + [""] * 9)
            continue
        nul = data.index(b"\x00", 4)
        name = data[4:nul].decode("latin1", errors="replace")
        off = nul + 1
        if off + 28 > len(data):
            rows.append([fname, len(data), "TOO SHORT"] + [""] * 9)
            continue
        f54, f58, f5c, f60, f64, hSide, finalSize = struct.unpack_from("<7i", data, off)
        header_end = off + 28
        remaining = len(data) - header_end
        expected_remaining = hSide * hSide * 3 + 0x140 + 4
        rows.append([
            fname, len(data), name, f54, f58, f5c, f60, f64, hSide, finalSize,
            header_end, remaining, expected_remaining, remaining == expected_remaining,
        ])
    write_csv(
        "scape_headers.csv",
        ["file", "filesize", "name", "field_54", "field_58", "field_5c", "field_60",
         "field_64", "heightmap_side", "final_fractal_size", "header_end_offset",
         "bytes_after_header", "expected_bytes_after_header", "size_formula_matches"],
        rows,
    )


# ---------------------------------------------------------------------------
# 2. SnPn.DAT -> snpn_headers.csv
# ---------------------------------------------------------------------------
def export_snpn():
    rows = []
    for path in sorted(glob.glob(os.path.join(HERE, "S[123]P*.DAT"))):
        data = open(path, "rb").read()
        fname = os.path.basename(path)
        magic = struct.unpack_from("<I", data, 0)[0]
        if magic != 0xABBAABBA:
            rows.append([fname, len(data), hex(magic), "BAD MAGIC"] + [""] * 7)
            continue
        field_04 = struct.unpack_from("<i", data, 4)[0]
        field_08a = struct.unpack_from("<H", data, 8)[0]
        field_08b = struct.unpack_from("<H", data, 0xA)[0]
        b0c, b0d, b0e, b0f = data[0xC], data[0xD], data[0xE], data[0xF]
        rows.append([fname, len(data), hex(magic), field_04, field_08a, field_08b,
                     b0c, b0d, b0e, b0f])
    write_csv(
        "snpn_headers.csv",
        ["file", "filesize", "magic", "field_04", "field_08a", "field_08b",
         "byte_0x0C", "byte_0x0D", "byte_0x0E", "byte_0x0F"],
        rows,
    )


# ---------------------------------------------------------------------------
# 3. WORLDS.DAT -> worlds_records.csv (25 records, 104 bytes each; known fields
#    broken out, remaining bytes dumped as hex for manual inspection)
# ---------------------------------------------------------------------------
def export_worlds():
    path = os.path.join(HERE, "WORLDS.DAT")
    if not os.path.exists(path):
        return
    data = open(path, "rb").read()
    rows = []
    REC = 0x68
    for i in range(len(data) // REC):
        rec = data[i * REC:(i + 1) * REC]
        first_dword = struct.unpack_from("<I", rec, 0)[0]
        world_tile_index = struct.unpack_from("<i", rec, 4)[0]
        flavor_0e = rec[0x0E]
        terrain_mode_0f = rec[0x0F]
        flavor_11 = rec[0x11]
        flavor_16 = rec[0x16]
        flavor_19 = rec[0x19]
        flavor_54 = rec[0x54]
        rows.append([
            i, first_dword, world_tile_index, flavor_0e, terrain_mode_0f, flavor_11,
            flavor_16, flavor_19, flavor_54, rec.hex(),
        ])
    write_csv(
        "worlds_records.csv",
        ["record_index", "first_dword_0x00", "world_tile_index_0x04",
         "flavor_text_selector_0x0E", "terrain_mode_flag_0x0F", "flavor_text_selector_0x11",
         "flavor_text_selector_0x16", "flavor_text_selector_0x19",
         "flavor_text_selector_0x54", "raw_record_hex_104B"],
        rows,
    )


# ---------------------------------------------------------------------------
# 4. WORLDCOL.DAT -> worldcol_fog_colors.csv + worldcol_bar_colors.csv
#    (the 1024-byte background-art chunk is dumped separately as .bin, not CSV)
# ---------------------------------------------------------------------------
def export_worldcol():
    path = os.path.join(HERE, "WORLDCOL.DAT")
    if not os.path.exists(path):
        return
    data = open(path, "rb").read()
    REC = 0x4A5
    fog_rows = []
    bar_rows = []
    for i in range(len(data) // REC):
        rec = data[i * REC:(i + 1) * REC]
        art = rec[0x000:0x400]
        fog = rec[0x400:0x478]
        bars = rec[0x478:0x4A5]
        art_path = os.path.join(OUT, f"worldcol_record{i:02d}_art.bin")
        with open(art_path, "wb") as bf:
            bf.write(art)
        for tileType in range(15):
            for facing in range(8):
                fog_rows.append([i, tileType, facing, fog[tileType * 8 + facing]])
        for tileType in range(15):
            back, main, front = bars[tileType * 3:tileType * 3 + 3]
            bar_rows.append([i, tileType, back, main, front])
    write_csv(
        "worldcol_fog_colors.csv",
        ["record_index", "tile_art_index", "hex_facing_0to7", "fog_palette_index"],
        fog_rows,
    )
    write_csv(
        "worldcol_bar_colors.csv",
        ["record_index", "tile_art_index", "back_bar_color", "main_bar_color", "front_bar_color"],
        bar_rows,
    )
    print(f"wrote {len(data) // REC} worldcol_recordNN_art.bin files (1024B raw art chunks)")


# ---------------------------------------------------------------------------
# 5. HEXMASK.DAT -> hexmask_frames.csv (per-frame byte stats; raw frames as .bin)
# ---------------------------------------------------------------------------
def export_hexmask():
    path = os.path.join(HERE, "HEXMASK.DAT")
    if not os.path.exists(path):
        return
    data = open(path, "rb").read()
    FRAME = 0x200
    rows = []
    for f in range(len(data) // FRAME):
        frame = data[f * FRAME:(f + 1) * FRAME]
        nonzero = sum(1 for b in frame if b != 0)
        frame_path = os.path.join(OUT, f"hexmask_frame{f}.bin")
        with open(frame_path, "wb") as bf:
            bf.write(frame)
        rows.append([f, len(frame), nonzero, frame[:8].hex()])
    write_csv(
        "hexmask_frames.csv",
        ["frame_index_0to5", "frame_size_bytes", "nonzero_byte_count", "first_8_bytes_hex"],
        rows,
    )


# ---------------------------------------------------------------------------
# 6. MPREMAP.DAT -> mpremap_table.csv (long format: faction, source_index, remapped_index)
# ---------------------------------------------------------------------------
def export_mpremap():
    path = os.path.join(HERE, "MPREMAP.DAT")
    if not os.path.exists(path):
        return
    data = open(path, "rb").read()
    BLOCK = 0x100
    rows = []
    for faction in range(len(data) // BLOCK):
        block = data[faction * BLOCK:(faction + 1) * BLOCK]
        for src_index in range(256):
            remapped = block[src_index]
            if remapped != src_index:  # only log actual remaps, table is mostly identity
                rows.append([faction, src_index, remapped])
    write_csv(
        "mpremap_table.csv",
        ["faction_id_0to7", "source_palette_index", "remapped_palette_index"],
        rows,
    )


# ---------------------------------------------------------------------------
# 7. SITTAB.DAT -> sittab_weights.csv (long format: mission_type, slot, weight)
# ---------------------------------------------------------------------------
def export_sittab():
    path = os.path.join(HERE, "SITTAB.DAT")
    if not os.path.exists(path):
        return
    data = open(path, "rb").read()
    ROW = 0x20
    rows = []
    for missionType in range(len(data) // ROW):
        row = data[missionType * ROW:(missionType + 1) * ROW]
        for slot in range(32):
            weight = row[slot]
            if weight != 0:
                sit_number = (missionType + 1) * 100 + slot + 1
                rows.append([missionType, slot, weight, f"SIT{sit_number:03d}.CS"])
    write_csv(
        "sittab_weights.csv",
        ["mission_type_0to8", "slot_index", "weight_0to100", "resulting_script"],
        rows,
    )


if __name__ == "__main__":
    export_scape()
    export_snpn()
    export_worlds()
    export_worldcol()
    export_hexmask()
    export_mpremap()
    export_sittab()
    print("done.")
