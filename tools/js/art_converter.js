// ═══════════════════════════════════════════════════════════════════
// File input
// ═══════════════════════════════════════════════════════════════════
const fileInput = document.getElementById('fileInput');
document.getElementById('openBtn').onclick = () => fileInput.click();
document.getElementById('art-drop-zone').onclick = () => fileInput.click();
fileInput.onchange = e => { if (e.target.files[0]) { loadFile(e.target.files[0]); fileInput.value = ''; } };

document.getElementById('resetBtn').onclick = () => {
  state = null;
  document.getElementById('art-main').classList.remove('visible');
  document.getElementById('art-drop-zone').hidden = false;
  document.getElementById('resetBtn').hidden = true;
  document.getElementById('exportBtn').disabled = true;
  setStatus('Ready.');
};

const dz = document.getElementById('art-drop-zone');
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
dz.addEventListener('dragleave', () => dz.classList.remove('over'));
dz.addEventListener('drop', e => {
  e.preventDefault(); dz.classList.remove('over');
  e.dataTransfer.files[0] && loadFile(e.dataTransfer.files[0]);
});

// ═══════════════════════════════════════════════════════════════════
// Display state
// ═══════════════════════════════════════════════════════════════════
let state = null; // { pixels, width, height, palette }

// ── Export dropdown ───────────────────────────────────────────────────────
const exportBtn  = document.getElementById('exportBtn');
const exportMenu = document.getElementById('exportMenu');

exportBtn.onclick = e => {
  e.stopPropagation();
  exportMenu.classList.toggle('open');
};
document.addEventListener('click', () => exportMenu.classList.remove('open'));

document.getElementById('exp-png').onclick = () => { exportMenu.classList.remove('open'); exportPNG(); };
document.getElementById('exp-bmp').onclick = () => { exportMenu.classList.remove('open'); exportBMP(); };
document.getElementById('exp-act').onclick = () => { exportMenu.classList.remove('open'); exportACT(); };
document.getElementById('exp-bin').onclick = () => { exportMenu.classList.remove('open'); exportRaw(); };

function redraw() {
  if (!state) return;
  const { pixels, width, height, palette } = state;

  const canvas = document.getElementById('canvas');
  canvas.width  = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const id  = ctx.createImageData(width, height);
  const d   = id.data;

  for (let i = 0; i < pixels.length; i++) {
    const pi = pixels[i] * 4;
    const di = i * 4;
    d[di]   = palette[pi];
    d[di+1] = palette[pi+1];
    d[di+2] = palette[pi+2];
    d[di+3] = 255;
  }
  ctx.putImageData(id, 0, 0);
}

// ═══════════════════════════════════════════════════════════════════
// File loader
// ═══════════════════════════════════════════════════════════════════
function loadFile(file) {
  setStatus(`Loading ${file.name}…`);
  const reader = new FileReader();
  reader.onload = e => {
    try {
      processBuffer(e.target.result, file.name, file.size);
    } catch (ex) {
      setStatus('Error: ' + ex.message, 'err');
      console.error(ex);
    }
  };
  reader.readAsArrayBuffer(file);
}

function processBuffer(buf, name, fileSize) {
  const bytes = new Uint8Array(buf);
  const view  = new DataView(buf);

  // ── Validate PKX header (24 bytes) ──────────────────────────────
  if (bytes.length < 24)
    throw new Error('Too small to be a PKX file');

  const m0 = view.getUint32(0, true);
  const m1 = view.getUint32(4, true);
  const m2 = view.getUint32(8, true) >>> 0;

  if (m0 !== 0x3A584B50)
    throw new Error(`Bad magic[0]: expected 3A584B50, got ${hex32(m0)}`);
  if (m1 !== 0x10011966)
    throw new Error(`Bad magic[1]: expected 10011966, got ${hex32(m1)}`);
  if (m2 !== 0x9BAEBACF)
    throw new Error(`Bad magic[2]: expected 9BAEBACF, got ${hex32(m2)}`);

  const compType = view.getUint32(12, true);
  const compSz   = view.getUint32(16, true);
  const uncompSz = view.getUint32(20, true);

  if (compType < 1 || compType > 14)
    throw new Error(`Unknown compression type: ${compType}`);
  if (compSz !== bytes.length - 24)
    throw new Error(`compSz mismatch: header says ${compSz}, file has ${bytes.length-24}`);
  if (uncompSz < 1 || uncompSz > 9_999_999)
    throw new Error(`Suspicious uncompressedSize: ${uncompSz}`);

  set('i-file',  shortName(name));
  set('i-fsz',   fmtBytes(fileSize));
  set('i-comp',  compTypeName(compType));
  set('i-csz',   fmtBytes(compSz));
  set('i-usz',   fmtBytes(uncompSz));
  set('i-ratio', ((compSz / uncompSz) * 100).toFixed(1) + '%');

  // ── Decompress payload ──────────────────────────────────────────
  setStatus('Decompressing…');
  const payload = bytes.subarray(24, 24 + compSz);

  const loNibble = compType & 0xF;
  const hiNibble = (compType >> 4) & 0xF;
  let decompressed;

  if (hiNibble !== 0) {
    // Two-pass: first decompress with hiNibble, then loNibble
    const stage1 = decompress(hiNibble, payload, uncompSz * 4);
    decompressed  = decompress(loNibble, stage1, uncompSz);
  } else {
    decompressed = decompress(loNibble, payload, uncompSz);
  }

  // ── Parse FrameRecord structure ─────────────────────────────────
  //   Decompressed layout:
  //     [0]    uint32  frame_count
  //     [4]    Frame0  (12 bytes) — bitmap frame
  //     [16]   Frame1  (12 bytes) — palette frame (if frame_count > 1)
  //     [28+]  pixel data, palette data
  //
  //   FrameRecord (12 bytes):
  //     [+0]  int32   data_offset  — self-relative: pixel data at &frame+data_offset
  //     [+4]  uint16  width        (or palette_start for palette frames)
  //     [+6]  uint16  height       (or palette_count for palette frames)
  //     [+8]  uint8   unknown
  //     [+9]  uint8   format_flags — lo nibble = type (0xD = RLE12), hi = secondary comp

  const dv = new DataView(decompressed.buffer, decompressed.byteOffset, decompressed.byteLength);

  if (decompressed.length < 16)
    throw new Error('Decompressed data too short to contain a FrameRecord');

  const frameCount = dv.getUint32(0, true);

  // Frame 0 (bitmap) — at byte offset 4
  const f0DataOff = dv.getInt32(4, true);         // self-relative
  const f0Width   = dv.getUint16(8, true);
  const f0Height  = dv.getUint16(10, true);
  const f0Flags   = decompressed[13];             // byte +9 of frame0 (4+9=13)
  const f0FmtType = f0Flags & 0xF;
  const f0PixSrc  = 4 + f0DataOff;               // absolute index into decompressed

  set('i-fcount', frameCount);
  set('i-w',      f0Width  + ' px');
  set('i-h',      f0Height + ' px');
  set('i-fmt',    fmtTypeName(f0FmtType));
  set('i-doff',   hex16(f0DataOff));

  // ── Extract palette ─────────────────────────────────────────────
  //   Palette entries are RGBA, 4 bytes each (256 max).
  //   Default: greyscale fallback.
  const palette = new Uint8Array(256 * 4);
  for (let i = 0; i < 256; i++) {
    palette[i*4] = palette[i*4+1] = palette[i*4+2] = i;
    palette[i*4+3] = 255;
  }

  let palStart = 0, palCount = 0;

  if (frameCount > 1 && decompressed.length >= 28) {
    // Frame 1 (palette) — at byte offset 16
    const f1DataOff = dv.getInt32(16, true);       // self-relative
    palStart        = dv.getUint16(20, true);       // first palette entry index
    palCount        = dv.getUint16(22, true);       // number of entries
    const palSrc    = 16 + f1DataOff;              // absolute index into decompressed

    for (let i = 0; i < palCount; i++) {
      const si = palSrc + i * 4;
      const di = (palStart + i) * 4;
      if (di + 3 < palette.length && si + 3 < decompressed.length) {
        palette[di]   = decompressed[si];
        palette[di+1] = decompressed[si+1];
        palette[di+2] = decompressed[si+2];
        palette[di+3] = 255;
      }
    }
  }

  set('i-pstart', palCount > 0 ? palStart : '—');
  set('i-pcount', palCount > 0 ? palCount : '—');
  set('i-ptotal', palCount > 0 ? fmtBytes(palCount * 4) : '—');

  // ── Decode pixels ───────────────────────────────────────────────
  if (f0Width === 0 || f0Height === 0)
    throw new Error(`Invalid dimensions: ${f0Width}×${f0Height}`);
  if (f0FmtType !== 0xD)
    throw new Error(`Unsupported frame format 0x${f0FmtType.toString(16).toUpperCase()} (only RLE12/0xD is implemented)`);

  setStatus('Decoding pixels…');
  const pixels = decodeRle12(decompressed, f0PixSrc, f0Width, f0Height);

  // ── Build palette grid ──────────────────────────────────────────
  const pg = document.getElementById('palette-grid');
  pg.innerHTML = '';
  for (let i = 0; i < 256; i++) {
    const el = document.createElement('div');
    el.className = 'swatch';
    const r = palette[i*4], g = palette[i*4+1], b = palette[i*4+2];
    el.style.background = `rgb(${r},${g},${b})`;
    el.setAttribute('data-tip', `#${i.toString().padStart(3,' ')}: ${r},${g},${b}`);
    pg.appendChild(el);
  }

  // ── Show UI ─────────────────────────────────────────────────────
  dz.hidden = true;
  document.getElementById('art-main').classList.add('visible');
  setStatus(`${name}  —  ${f0Width}×${f0Height}  —  ${fmtBytes(fileSize)}`, 'ok');

  state = { pixels, width: f0Width, height: f0Height, palette, name };
  redraw();
  document.getElementById('exportBtn').disabled = false;
  document.getElementById('resetBtn').hidden = false;
}


// ═══════════════════════════════════════════════════════════════════
// Decompression dispatch
//   Implements the engine's DecompressResourceData_Dispatch logic.
//   Types confirmed from Ghidra: 0x01=ZRL, 0x0C=RLE, 0x0E=LZSS
// ═══════════════════════════════════════════════════════════════════
function decompress(type, src, outSize) {
  switch (type) {
    case 0x01: return decompressZRL(src, outSize);
    case 0x0C: return decompressRLE(src, outSize);
    case 0x0E: return decompressLZSS(src, outSize);
    default:
      throw new Error(`Unsupported compression type 0x${type.toString(16).toUpperCase()}`);
  }
}

// ── LZSS decompressor (type 0x0E) ───────────────────────────────────────────
//   Reconstructed from LZSS_Decompress in Ghidra (0x0047ed10).
//
//   Stream layout determined by first byte:
//     first < 8  → extraBits=first, numChunks=uint16@[1] (uint32 if 0xFFFF), data@[3] or [7]
//     first >= 8 → extraBits=first&7, numChunks=(first>>3)-1, data@[1]
//
//   Each chunk starts with a flag byte (0x00 = raw 8-byte block).
//   Non-zero flag byte: 8 bits MSB-first, 1=backref, 0=literal.
//     backref: 2-byte LE token — bits[15:4]=offset-1, bits[3:0]=length-3
//     literal: 1 raw byte
//
//   After numChunks full chunks, one final chunk with extraBits bits.
function decompressLZSS(src, outSize) {
  const out = new Uint8Array(outSize);
  let si = 0, di = 0;

  const first = src[si++];
  let numChunks, extraBits;

  if (first < 8) {
    let cnt = src[si] | (src[si+1] << 8); si += 2;
    if (cnt === 0xFFFF) {
      cnt = (src[si] | (src[si+1]<<8) | (src[si+2]<<16) | (src[si+3]<<24)) >>> 0;
      si += 4;
    }
    numChunks = cnt;
    extraBits = first;
  } else {
    numChunks = (first >> 3) - 1;
    extraBits = first & 7;
  }

  function processBits(fb, nbits) {
    for (let b = 0; b < nbits; b++) {
      if (fb & 0x80) {
        // Back-reference: 12-bit offset (>>4)+1, 4-bit length (&0xF)+3
        const tok    = src[si] | (src[si+1] << 8); si += 2;
        const offset = (tok >> 4) + 1;
        const len    = (tok & 0xF) + 3;
        for (let j = 0; j < len; j++, di++)
          out[di] = di >= offset ? out[di - offset] : 0;
      } else {
        // Literal byte
        out[di++] = src[si++];
      }
      fb = (fb << 1) & 0xFF;
    }
  }

  for (let c = 0; c < numChunks; c++) {
    const fb = src[si++];
    if (fb === 0) {
      // Special: 0x00 flag byte = raw 8-byte block (game optimisation)
      for (let i = 0; i < 8; i++) out[di++] = src[si++];
    } else {
      processBits(fb, 8);
    }
  }

  if (extraBits > 0) processBits(src[si++], extraBits);

  return out;
}

// ── RLE decompressor (type 0x0C) ────────────────────────────────────────────
//   High bit 1 → run: (count & 0x7F)+1 repeats of next byte
//   High bit 0 → literal: (byte)+1 raw bytes follow
function decompressRLE(src, outSize) {
  const out = new Uint8Array(outSize);
  let si = 0, di = 0;
  while (di < outSize && si < src.length) {
    const b = src[si++];
    if (b & 0x80) {
      const count = (b & 0x7F) + 1;
      const val   = src[si++];
      for (let i = 0; i < count && di < outSize; i++) out[di++] = val;
    } else {
      const count = b + 1;
      for (let i = 0; i < count && di < outSize; i++) out[di++] = src[si++];
    }
  }
  return out;
}

// ── Zero-run RLE (type 0x01) ─────────────────────────────────────────────────
//   0x00 byte → next byte is run-count of zeros (skip output)
//   non-zero → literal
function decompressZRL(src, outSize) {
  const out = new Uint8Array(outSize);
  let si = 0, di = 0;
  while (di < outSize && si < src.length) {
    const b = src[si++];
    if (b === 0) {
      di += src[si++]; // skip this many bytes (they stay zero)
    } else {
      out[di++] = b;
    }
  }
  return out;
}


// ═══════════════════════════════════════════════════════════════════
// RLE12 scanline decoder
//   Reconstructed from DecodeAndBlit_RLE12_Unscaled (0x004071b0).
//
//   Each scanline is a stream of tokens ending with a 0x00 byte:
//     byte & 0x80 == 0  → literal: copy (byte & 0x7F) pixels verbatim
//     byte & 0x80 == 1  → run:     next byte = color, repeated (byte & 0x7F) times
//                          if color == 0 → transparent skip (destination advances, no write)
//   Scanline terminator: any byte where (byte & 0x7F) == 0 (i.e. 0x00 or 0x80)
// ═══════════════════════════════════════════════════════════════════
function decodeRle12(data, srcOff, width, height) {
  const pixels = new Uint8Array(width * height);
  let si = srcOff;

  for (let row = 0; row < height; row++) {
    let col = 0;
    const rowBase = row * width;

    while (true) {
      const b     = data[si++];
      const count = b & 0x7F;
      if (count === 0) break;  // end-of-scanline marker

      if (b & 0x80) {
        // Run token
        const color = data[si++];
        if (color !== 0) {
          // Solid run — fill pixels
          const end = Math.min(col + count, width);
          pixels.fill(color, rowBase + col, rowBase + end);
        }
        // color == 0 → transparent skip: dst advances, no write (pixels stay 0)
        col += count;
      } else {
        // Literal token — copy bytes from source
        for (let i = 0; i < count; i++) {
          const px = data[si++];
          if (col < width) pixels[rowBase + col] = px;
          col++;
        }
      }
    }
  }
  return pixels;
}


// ═══════════════════════════════════════════════════════════════════
// Exporters
// ═══════════════════════════════════════════════════════════════════

// Build a native-resolution RGBA canvas from current state + settings.
// Used by PNG and BMP exporters so they share exactly the same pixel logic.
function buildNativeCanvas() {
  const { pixels, width, height, palette } = state;
  const tmp  = document.createElement('canvas');
  tmp.width  = width;
  tmp.height = height;
  const ctx  = tmp.getContext('2d');
  const id   = ctx.createImageData(width, height);
  const d    = id.data;
  for (let i = 0; i < pixels.length; i++) {
    const pi = pixels[i] * 4;
    const di = i * 4;
    d[di]   = palette[pi];
    d[di+1] = palette[pi+1];
    d[di+2] = palette[pi+2];
    d[di+3] = 255;
  }
  ctx.putImageData(id, 0, 0);
  return tmp;
}

// ── PNG export ────────────────────────────────────────────────────────────
// Native 1× resolution, full 24-bit colour.
function exportPNG() {
  if (!state) return;
  setStatus('Encoding PNG…');
  buildNativeCanvas().toBlob(blob => {
    triggerDownload(blob, exportName('.png'));
    setStatus(`Exported ${exportName('.png')}  (${fmtBytes(blob.size)})`, 'ok');
  }, 'image/png');
}

// ── BMP export ────────────────────────────────────────────────────────────
// Uncompressed 24-bit DIB. Uses a negative height field so rows are stored
// top-down (same as our pixel buffer), avoiding the need to flip the image.
// Row stride is padded to a 4-byte boundary as the BMP spec requires.
function exportBMP() {
  if (!state) return;
  const { width, height } = state;

  // Render to canvas to get the same RGBA pixels as PNG/display
  const tmp  = buildNativeCanvas();
  const ctx  = tmp.getContext('2d');
  const id   = ctx.getImageData(0, 0, width, height);
  const src  = id.data; // RGBA, top-down

  const rowStride     = Math.ceil(width * 3 / 4) * 4; // pad to 4 bytes
  const pixelDataSize = rowStride * height;
  const fileSize      = 14 + 40 + pixelDataSize;

  const buf  = new ArrayBuffer(fileSize);
  const view = new DataView(buf);
  const out  = new Uint8Array(buf);

  // ── BITMAPFILEHEADER (14 bytes) ──
  out[0] = 0x42; out[1] = 0x4D;            // 'BM'
  view.setUint32( 2, fileSize,  true);      // bfSize
  view.setUint32( 6, 0,         true);      // bfReserved
  view.setUint32(10, 54,        true);      // bfOffBits (14 + 40)

  // ── BITMAPINFOHEADER (40 bytes) ──
  view.setUint32(14, 40,        true);      // biSize
  view.setInt32 (18, width,     true);      // biWidth
  view.setInt32 (22, -height,   true);      // biHeight — negative = top-down
  view.setUint16(26, 1,         true);      // biPlanes
  view.setUint16(28, 24,        true);      // biBitCount
  view.setUint32(30, 0,         true);      // biCompression (BI_RGB)
  view.setUint32(34, pixelDataSize, true);  // biSizeImage
  view.setInt32 (38, 0,         true);      // biXPelsPerMeter
  view.setInt32 (42, 0,         true);      // biYPelsPerMeter
  view.setUint32(46, 0,         true);      // biClrUsed
  view.setUint32(50, 0,         true);      // biClrImportant

  // ── Pixel data — BGR order (BMP convention) ──
  let off = 54;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const si  = (row * width + col) * 4;
      out[off++] = src[si + 2]; // B
      out[off++] = src[si + 1]; // G
      out[off++] = src[si + 0]; // R
    }
    off += rowStride - width * 3; // row padding (stays 0)
  }

  triggerDownload(new Blob([out], { type: 'image/bmp' }), exportName('.bmp'));
  setStatus(`Exported ${exportName('.bmp')}  (${fmtBytes(fileSize)})`, 'ok');
}

// ── Adobe Color Table (.act) export ──────────────────────────────────────
// Standard 768-byte file: 256 entries × 3 bytes (R, G, B).
// Photoshop, GIMP, Aseprite, and most other tools can import this directly.
function exportACT() {
  if (!state) return;
  const { palette } = state;
  const out = new Uint8Array(768);
  for (let i = 0; i < 256; i++) {
    out[i*3]   = palette[i*4];   // R
    out[i*3+1] = palette[i*4+1]; // G
    out[i*3+2] = palette[i*4+2]; // B
  }
  triggerDownload(new Blob([out], { type: 'application/octet-stream' }), exportName('.act'));
  setStatus(`Exported ${exportName('.act')}  (768 bytes, 256 entries)`, 'ok');
}

// ── Raw indexed pixel export (.bin) ──────────────────────────────────────
// One byte per pixel: the raw 8-bit palette index, width×height bytes,
// row-major, top-down. No header. For scripting and further processing.
function exportRaw() {
  if (!state) return;
  const { pixels, width, height } = state;
  triggerDownload(
    new Blob([pixels], { type: 'application/octet-stream' }),
    exportName('.bin')
  );
  setStatus(`Exported ${exportName('.bin')}  (${fmtBytes(pixels.length)}, ${width}×${height})`, 'ok');
}

// ── Shared helpers ────────────────────────────────────────────────────────
function exportName(ext) {
  const base = (state?.name ?? 'export').replace(/\.[^.]+$/, '');
  return base + ext;
}
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

// ═══════════════════════════════════════════════════════════════════
// Utilities
// ═══════════════════════════════════════════════════════════════════
function setStatus(msg, cls = '') {
  const el = document.getElementById('status-bar');
  el.textContent = msg;
  el.className = cls;
}

function set(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function hex32(n) {
  return (n >>> 0).toString(16).toUpperCase().padStart(8, '0');
}
function hex16(n) {
  return '0x' + (n & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}
function fmtBytes(n) {
  if (n < 1024)        return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}
function shortName(name) {
  return name.length > 18 ? '…' + name.slice(-16) : name;
}
function compTypeName(t) {
  const lo = t & 0xF, hi = (t >> 4) & 0xF;
  const n = { 1: 'ZRL', 0xC: 'RLE', 0xE: 'LZSS' };
  const loN = n[lo] || `0x${lo.toString(16).toUpperCase()}`;
  if (hi) return `${n[hi]||'?'}+${loN} (2-pass)`;
  return loN;
}
function fmtTypeName(t) {
  return t === 0xD ? 'RLE12 (0xD)' : `Unknown (0x${t.toString(16).toUpperCase()})`;
}
