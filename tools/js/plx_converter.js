(() => {
  "use strict";

  // ---------- shared decode engine (container + codecs) ----------

  function u32(dv, off){ return dv.getUint32(off, true); }

  class DecodeError extends Error {}

  function lzssDecompress(src, expectedOutSize){
    let pos = 0;
    const header = src[pos];
    let segmentFlag, blockCount;
    if (header < 8){
      segmentFlag = header;
      blockCount = src[pos+1] | (src[pos+2] << 8);
      pos += 3;
      if (blockCount === 0xFFFF){
        blockCount = (src[pos] | (src[pos+1]<<8) | (src[pos+2]<<16) | (src[pos+3]<<24)) >>> 0;
        pos += 4;
      }
    } else {
      segmentFlag = header & 0x07;
      blockCount = (header >> 3) - 1;
      pos += 1;
    }

    const out = [];

    while (true){
      let bitBudget = segmentFlag;
      blockCount -= 1;
      let flag;
      if (blockCount < 0){
        if (segmentFlag === 0) break;
        segmentFlag = 0;
        flag = src[pos]; pos += 1;
      } else {
        flag = src[pos]; pos += 1;
        if (flag === 0x00){
          for (let k=0;k<8;k++) out.push(src[pos+k]);
          pos += 8;
          continue;
        }
        bitBudget = 8;
      }

      let bitsDone = 0;
      while (bitsDone < bitBudget){
        const bit = (flag >> (7 - bitsDone)) & 1;
        bitsDone += 1;
        if (bit){
          const token = src[pos] | (src[pos+1] << 8);
          pos += 2;
          const length = (token & 0x0F) + 3;
          const distance = (token >> 4) + 1;
          let start = out.length - distance;
          for (let i=0;i<length;i++) out.push(out[start+i]);
        } else {
          out.push(src[pos]); pos += 1;
        }
      }
    }
    const data = Uint8Array.from(out);
    if (expectedOutSize !== undefined && expectedOutSize !== null && data.length !== expectedOutSize){
      throw new DecodeError(`LZSS size mismatch: got ${data.length}, expected ${expectedOutSize}`);
    }
    return { data, consumed: pos };
  }

  function rleDecompressCodec1(src, maxLen){
    const out = [];
    let pos = 0;
    while (true){
      if (pos >= src.length) throw new DecodeError("codec1: ran off end of buffer");
      const c = src[pos]; pos += 1;
      if ((c & 0x7F) === 0) break;
      if (c & 0x80){
        const count = c & 0x7F;
        const f = src[pos]; pos += 1;
        for (let i=0;i<count;i++) out.push(f);
      } else {
        for (let i=0;i<c;i++) out.push(src[pos+i]);
        pos += c;
      }
      if (maxLen && out.length > maxLen + 4096) throw new DecodeError("codec1: runaway decode");
    }
    return { data: Uint8Array.from(out), consumed: pos };
  }

  function rleDecompressCodec12(src, maxLen){
    const out = [];
    let pos = 0;
    while (true){
      if (pos >= src.length) throw new DecodeError("codec12: ran off end of buffer");
      const c = src[pos]; pos += 1;
      if (c >= 0x01 && c <= 0x7F){
        for (let i=0;i<c;i++) out.push(src[pos+i]);
        pos += c;
      } else if (c === 0x00){
        const k = src[pos]; const f = src[pos+1]; pos += 2;
        for (let i=0;i<k;i++) out.push(f);
      } else if (c === 0x80){
        const raw16 = src[pos] | (src[pos+1] << 8); pos += 2;
        if (raw16 === 0x0000){
          break;
        } else if (raw16 <= 0x7FFF){
          for (let i=0;i<raw16;i++) out.push(0);
        } else if (raw16 <= 0xBFFF){
          const n = raw16 - 0x8000;
          for (let i=0;i<n;i++) out.push(src[pos+i]);
          pos += n;
        } else {
          const n = raw16 - 0xC000;
          const f = src[pos]; pos += 1;
          for (let i=0;i<n;i++) out.push(f);
        }
      } else {
        const skip = c & 0x7F;
        for (let i=0;i<skip;i++) out.push(0);
      }
      if (maxLen && out.length > maxLen + 4096) throw new DecodeError("codec12: runaway decode");
    }
    return { data: Uint8Array.from(out), consumed: pos };
  }

  function decompress(codecId, src, expectedSize){
    if (codecId === 14) return lzssDecompress(src, expectedSize);
    if (codecId === 1)  return rleDecompressCodec1(src, expectedSize);
    if (codecId === 12) return rleDecompressCodec12(src, expectedSize);
    if (codecId === 0)  return { data: src.slice(0, expectedSize), consumed: expectedSize };
    throw new DecodeError(`unsupported/unimplemented codec ${codecId}`);
  }

  const MAGIC1 = 0x3A584B50, MAGIC2 = 0x10011966, MAGIC3 = 0x9BAEBACF;

  // ---------- .PLX decode (see the companion .PLX specification) ----------

  function decodePlx(bytes){
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    let payload, container = null;

    if (bytes.length >= 0x18 &&
        u32(dv,0) === MAGIC1 && u32(dv,4) === MAGIC2 && u32(dv,8) === MAGIC3){
      const codecId = u32(dv, 0x0C);
      const compressedSize = u32(dv, 0x10);
      const decompressedSize = u32(dv, 0x14);
      container = { codecId, compressedSize, decompressedSize, fileSize: bytes.length };
      if (compressedSize !== bytes.length - 0x18){
        throw new DecodeError(`compressedSize (${compressedSize}) != fileSize-0x18 (${bytes.length-0x18})`);
      }
      if (!(decompressedSize >= 1 && decompressedSize <= 9999999)){
        throw new DecodeError(`decompressedSize out of range: ${decompressedSize}`);
      }
      const compData = bytes.subarray(0x18);
      const res = decompress(codecId, compData, decompressedSize);
      if (res.data.length !== decompressedSize){
        throw new DecodeError(`decompressed length ${res.data.length} != header ${decompressedSize}`);
      }
      payload = res.data;
    } else {
      payload = bytes;
    }

    if (payload.length < 1024){
      throw new DecodeError(`payload too short for a 256-entry palette: ${payload.length} bytes (need >= 1024)`);
    }

    const entries = [];
    for (let i=0;i<256;i++){
      const off = i*4;
      entries.push({
        r: payload[off+0],
        g: payload[off+1],
        b: payload[off+2],
        flags: payload[off+3],
        reserved: (i < 10 || i > 245),
      });
    }

    return { container, payloadSize: payload.length, entries };
  }

  // ---------- byte-array text parsing (C-style ucDataBlock paste) ----------

  function parseByteArrayText(text){
    const matches = text.match(/0x[0-9A-Fa-f]{1,2}/g);
    if (!matches || matches.length === 0) return null;
    const out = new Uint8Array(matches.length);
    for (let i=0;i<matches.length;i++) out[i] = parseInt(matches[i], 16);
    return out;
  }

  // ---------- GPL export ----------

  function buildGpl(entries, name, columns, includeReserved){
    const lines = [];
    lines.push("GIMP Palette");
    lines.push(`Name: ${name || "palette"}`);
    lines.push(`Columns: ${columns || 16}`);
    lines.push("#");
    entries.forEach((e, i) => {
      if (e.reserved && !includeReserved) return;
      const r = String(e.r).padStart(3, ' ');
      const g = String(e.g).padStart(3, ' ');
      const b = String(e.b).padStart(3, ' ');
      const label = e.reserved ? `index_${String(i).padStart(3,'0')} (reserved)` : `index_${String(i).padStart(3,'0')}`;
      lines.push(`${r} ${g} ${b}\t${label}`);
    });
    return lines.join("\n") + "\n";
  }

  function triggerBrowserDownload(blob, filename){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  // ---------- UI wiring ----------

  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const pasteArea = document.getElementById('pasteArea');
  const parseBtn = document.getElementById('parseBtn');
  const pasteCount = document.getElementById('pasteCount');
  const headerPanel = document.getElementById('headerPanel');
  const headerKv = document.getElementById('headerKv');
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const errBoxHost = document.getElementById('errBoxHost');
  const previewPanel = document.getElementById('previewPanel');
  const swatchHost = document.getElementById('swatchHost');
  const paletteNameInput = document.getElementById('paletteName');
  const columnsInput = document.getElementById('columns');
  const includeReservedInput = document.getElementById('includeReserved');
  const exportBtn = document.getElementById('exportBtn');

  let currentEntries = null;
  let currentName = 'palette';

  dropZone.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault(); dropZone.classList.remove('drag');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) loadFile(fileInput.files[0]);
  });

  function loadFile(file){
    const reader = new FileReader();
    reader.onload = () => {
      const bytes = new Uint8Array(reader.result);
      const name = file.name.replace(/\.[^/.]+$/, '') || 'palette';
      runDecode(bytes, file.name, name);
    };
    reader.readAsArrayBuffer(file);
  }

  parseBtn.addEventListener('click', () => {
    const bytes = parseByteArrayText(pasteArea.value);
    if (!bytes){
      pasteCount.textContent = 'no hex bytes found';
      pasteCount.style.color = 'var(--bad)';
      return;
    }
    pasteCount.textContent = `${bytes.length} bytes parsed`;
    pasteCount.style.color = 'var(--text-dim)';
    runDecode(bytes, 'pasted-array.plx', 'palette');
  });

  function setStatus(kind, text){
    statusDot.className = 'dot ' + kind;
    statusText.textContent = text;
  }

  function runDecode(bytes, displayName, baseName){
    headerPanel.style.display = 'block';
    errBoxHost.innerHTML = '';
    headerKv.innerHTML = '';
    setStatus('wait', 'parsing…');

    let result;
    try{
      result = decodePlx(bytes);
    } catch(err){
      setStatus('err', 'decode failed');
      const box = document.createElement('div');
      box.className = 'errbox';
      box.textContent = err.message || String(err);
      errBoxHost.appendChild(box);
      previewPanel.style.display = 'none';
      currentEntries = null;
      return;
    }

    setStatus('ok', `parsed OK — ${displayName}`);
    currentEntries = result.entries;
    currentName = baseName;
    paletteNameInput.value = baseName;
    renderHeader(result, bytes.length);
    renderSwatches(result.entries);
    previewPanel.style.display = 'block';
  }

  function renderHeader(result, fileSize){
    const rows = [];
    rows.push(['file size', fileSize + ' bytes']);
    if (result.container){
      const c = result.container;
      const codecName = {1:'RLE (zero-run)', 12:'RLE (standard)', 14:'LZSS', 0:'raw'}[c.codecId] || ('unknown ('+c.codecId+')');
      rows.push(['container', '<span class="ok">PKX: detected</span>']);
      rows.push(['codec', codecName]);
      rows.push(['decompressed', c.decompressedSize + ' bytes']);
    } else {
      rows.push(['container', 'none (raw payload)']);
    }
    rows.push(['entries', '256 (10–245 usable)']);
    headerKv.innerHTML = rows.map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  }

  function renderSwatches(entries){
    swatchHost.innerHTML = '';
    entries.forEach((e, i) => {
      const sw = document.createElement('div');
      sw.className = 'swatch' + (e.reserved ? ' reserved' : '');
      sw.style.background = `rgb(${e.r},${e.g},${e.b})`;
      sw.setAttribute('data-tip', `#${i}: ${e.r},${e.g},${e.b}${e.reserved ? ' (reserved)' : ''}`);
      swatchHost.appendChild(sw);
    });
  }

  exportBtn.addEventListener('click', () => {
    if (!currentEntries) return;
    const name = (paletteNameInput.value || currentName || 'palette').trim();
    const columns = parseInt(columnsInput.value, 10) || 16;
    const includeReserved = includeReservedInput.checked;
    const gpl = buildGpl(currentEntries, name, columns, includeReserved);
    const blob = new Blob([gpl], { type: 'text/plain' });
    const filename = (name.replace(/[^a-z0-9_\-]+/gi, '_') || 'palette') + '.gpl';
    triggerBrowserDownload(blob, filename);
  });

})();
