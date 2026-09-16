(function(){
  // Pure-JS ZIP writer using STORE (no compression) — no external libs needed.
  // Format: local file headers + data + central directory + end-of-central-directory.
  function makeZip(files){
    // files: [{name, data: Uint8Array}]
    const enc = new TextEncoder();
    const parts = [];
    const central = [];
    let offset = 0;

    function crc32(data){
      let crc = 0xFFFFFFFF;
      const table = crc32.table || (crc32.table = (() => {
        const t = new Uint32Array(256);
        for (let i = 0; i < 256; i++){ let c = i; for (let j = 0; j < 8; j++) c = c & 1 ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[i] = c; }
        return t;
      })());
      for (let i = 0; i < data.length; i++) crc = table[(crc ^ data[i]) & 0xFF] ^ (crc >>> 8);
      return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    for (const f of files){
      const name = enc.encode(f.name);
      const crc = crc32(f.data);
      const size = f.data.length;
      // Local file header
      const lfh = new Uint8Array(30 + name.length);
      const lv = new DataView(lfh.buffer);
      lv.setUint32(0, 0x04034b50, true);  // signature
      lv.setUint16(4, 20, true);           // version needed
      lv.setUint16(6, 0, true);            // flags
      lv.setUint16(8, 0, true);            // compression: STORE
      lv.setUint16(10, 0, true);           // mod time
      lv.setUint16(12, 0, true);           // mod date
      lv.setUint32(14, crc, true);
      lv.setUint32(18, size, true);        // compressed size
      lv.setUint32(22, size, true);        // uncompressed size
      lv.setUint16(26, name.length, true);
      lv.setUint16(28, 0, true);           // extra length
      lfh.set(name, 30);

      // Central directory entry
      const cde = new Uint8Array(46 + name.length);
      const cv = new DataView(cde.buffer);
      cv.setUint32(0, 0x02014b50, true);   // signature
      cv.setUint16(4, 20, true);           // version made by
      cv.setUint16(6, 20, true);           // version needed
      cv.setUint16(8, 0, true);            // flags
      cv.setUint16(10, 0, true);           // compression: STORE
      cv.setUint16(12, 0, true); cv.setUint16(14, 0, true); // mod time/date
      cv.setUint32(16, crc, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, name.length, true);
      cv.setUint16(30, 0, true);           // extra
      cv.setUint16(32, 0, true);           // comment
      cv.setUint16(34, 0, true);           // disk start
      cv.setUint16(36, 0, true);           // internal attr
      cv.setUint32(38, 0, true);           // external attr
      cv.setUint32(42, offset, true);      // local header offset
      cde.set(name, 46);

      parts.push(lfh, f.data);
      central.push(cde);
      offset += lfh.length + size;
    }

    const centralData = concat(central);
    const cdOffset = offset;
    const cdSize = centralData.length;

    // End of central directory record
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true); ev.setUint16(6, 0, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, cdOffset, true);
    ev.setUint16(20, 0, true);

    return concat([...parts, centralData, eocd]);
  }

  function concat(arrays){
    const total = arrays.reduce((s, a) => s + a.length, 0);
    const out = new Uint8Array(total);
    let off = 0;
    for (const a of arrays){ out.set(a, off); off += a.length; }
    return out;
  }

  function saveBlob(filename, blob){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const dropEl = document.getElementById('drop');
  const fileInput = document.getElementById('file');
  const filebar = document.getElementById('filebar');
  const fnameEl = document.getElementById('fname');
  const fsizeEl = document.getElementById('fsize');
  const clearBtn = document.getElementById('clearBtn');
  const statusEl = document.getElementById('status');
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const metarow = document.getElementById('metarow');
  const tableSection = document.getElementById('tableSection');
  const entriesBody = document.getElementById('entriesBody');
  const actionsRow = document.getElementById('actionsRow');
  const extractBtn = document.getElementById('extractBtn');
  const progressWrap = document.getElementById('progressWrap');
  const progressBar = document.getElementById('progressBar');

  let currentBuf = null;
  let currentEntries = null;
  let currentBaseName = 'archive';

  function fmtBytes(n){
    if(n < 1024) return n + ' B';
    if(n < 1024*1024) return (n/1024).toFixed(1) + ' KB';
    return (n/(1024*1024)).toFixed(2) + ' MB';
  }
  function hex(n){ return '0x' + n.toString(16).toUpperCase().padStart(6,'0'); }

  function setStatus(kind, msg){
    statusEl.hidden = false;
    statusDot.className = 'dot' + (kind ? ' ' + kind : '');
    statusText.textContent = msg;
  }
  function resetOutput(){
    metarow.hidden = true; metarow.innerHTML = '';
    tableSection.hidden = true; entriesBody.innerHTML = '';
    actionsRow.hidden = true;
    statusEl.hidden = true;
    progressWrap.hidden = true; progressBar.style.width = '0%';
  }

  // --- Directory-table parsing -------------------------------------------------
  // Entry layout (16 bytes): 12-byte name (space/NUL padded, uppercase) + u32 LE offset.
  // At that offset in the file: u32 LE length, then `length` bytes of raw data.
  function isPlausibleNameByte(b){
    // printable ASCII, excluding control chars; allow space/NUL as padding
    return b === 0 || b === 0x20 || (b >= 0x21 && b <= 0x7e);
  }

  function parseCandidate(view, bytes, tableOffset, count){
    const entries = [];
    const fileLen = bytes.length;
    if (count <= 0 || count > 20000) return null;
    const tableBytes = count * 16;
    if (tableOffset + tableBytes > fileLen) return null;

    let prevOffset = -1;
    for (let i = 0; i < count; i++){
      const base = tableOffset + i * 16;
      const nameBytes = bytes.subarray(base, base + 12);
      for (let j = 0; j < 12; j++){
        if (!isPlausibleNameByte(nameBytes[j])) return null;
      }
      let nameEnd = 12;
      while (nameEnd > 0 && (nameBytes[nameEnd-1] === 0 || nameBytes[nameEnd-1] === 0x20)) nameEnd--;
      if (nameEnd === 0) return null;
      const name = new TextDecoder('ascii').decode(nameBytes.subarray(0, nameEnd));
      const dataOffset = view.getUint32(base + 12, true);
      if (dataOffset < 4 || dataOffset + 4 > fileLen) return null;
      // directory should be sorted ascending by name (binary-search precondition)
      entries.push({ name, dataOffset });
    }

    // verify sortedness (binary search requires it) — reject if wildly out of order
    let outOfOrder = 0;
    for (let i = 1; i < entries.length; i++){
      if (entries[i].name < entries[i-1].name) outOfOrder++;
    }
    if (entries.length > 1 && outOfOrder / entries.length > 0.15) return null;

    // resolve lengths and validate they fit in the file
    let validCount = 0;
    for (const e of entries){
      const len = view.getUint32(e.dataOffset, true);
      if (len >= 0 && e.dataOffset + 4 + len <= fileLen + 0){
        e.length = len;
        e.dataStart = e.dataOffset + 4;
        if (e.dataOffset + 4 + len <= fileLen) validCount++;
      } else {
        e.length = null;
      }
    }
    if (validCount / entries.length < 0.7) return null;

    return entries.filter(e => e.length !== null && e.dataStart + e.length <= fileLen);
  }

  function findDirectory(bytes){
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    // Primary assumption: u32 count at offset 0, table right after.
    const attempts = [];
    if (bytes.length >= 4){
      const count0 = view.getUint32(0, true);
      attempts.push({ tableOffset: 4, count: count0, label: 'count-prefixed @ 0x0' });
    }
    // Fallback: scan small header offsets (some archive variants pad the count field
    // or precede it with a short fixed header) for a table that parses cleanly.
    for (let off = 0; off <= 64; off += 4){
      if (off + 4 > bytes.length) break;
      const c = view.getUint32(off, true);
      attempts.push({ tableOffset: off + 4, count: c, label: 'count-prefixed @ ' + hex(off) });
    }

    let best = null;
    for (const a of attempts){
      const result = parseCandidate(view, bytes, a.tableOffset, a.count);
      if (result && result.length > 0 && (!best || result.length > best.entries.length)){
        best = { entries: result, label: a.label, count: a.count };
      }
    }
    return best;
  }

  function renderEntries(entries){
    resetOutput();
    if (!entries || entries.length === 0){
      setStatus('err', 'Could not locate a valid directory table in this file — the header layout differs from the assumed format.');
      return;
    }
    setStatus('ok', `Parsed ${entries.length} ${entries.length === 1 ? 'entry' : 'entries'} from the directory table.`);
    metarow.hidden = false;
    const totalBytes = entries.reduce((s,e)=>s+e.length,0);
    metarow.innerHTML = `
      <span>Entries: <b>${entries.length}</b></span>
      <span>Total extracted size: <b>${fmtBytes(totalBytes)}</b></span>
    `;
    tableSection.hidden = false;
    entriesBody.innerHTML = entries.map(e => `
      <tr>
        <td class="name">${e.name}</td>
        <td class="num">${hex(e.dataOffset)}</td>
        <td class="num">${fmtBytes(e.length)}</td>
      </tr>
    `).join('');
    actionsRow.hidden = false;
  }

  function handleFile(file){
    resetOutput();
    currentBaseName = file.name.replace(/\.[^.]+$/, '') || 'archive';
    fnameEl.textContent = file.name;
    fsizeEl.textContent = fmtBytes(file.size);
    filebar.hidden = false;
    setStatus(null, 'Reading file…');

    const reader = new FileReader();
    reader.onload = () => {
      currentBuf = reader.result;
      const bytes = new Uint8Array(currentBuf);
      setStatus(null, 'Scanning for directory table…');
      const found = findDirectory(bytes);
      currentEntries = found ? found.entries : null;
      renderEntries(currentEntries);
    };
    reader.onerror = () => setStatus('err', 'Could not read the file.');
    reader.readAsArrayBuffer(file);
  }

  dropEl.addEventListener('click', () => fileInput.click());
  dropEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); fileInput.click(); } });
  fileInput.addEventListener('change', () => { if (fileInput.files[0]) handleFile(fileInput.files[0]); });

  ['dragenter','dragover'].forEach(evt => dropEl.addEventListener(evt, (e) => {
    e.preventDefault(); dropEl.classList.add('drag');
  }));
  ['dragleave','drop'].forEach(evt => dropEl.addEventListener(evt, (e) => {
    e.preventDefault(); dropEl.classList.remove('drag');
  }));
  dropEl.addEventListener('drop', (e) => {
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) handleFile(f);
  });

  clearBtn.addEventListener('click', () => {
    fileInput.value = '';
    currentBuf = null; currentEntries = null;
    filebar.hidden = true;
    resetOutput();
  });

  extractBtn.addEventListener('click', async () => {
    if (!currentEntries || !currentBuf) return;
    extractBtn.disabled = true;
    progressWrap.hidden = false;
    const bytes = new Uint8Array(currentBuf);
    const files = [];
    const seen = new Map();

    for (let i = 0; i < currentEntries.length; i++){
      const e = currentEntries[i];
      let outName = e.name || ('ENTRY_' + i);
      if (seen.has(outName)){
        const n = seen.get(outName) + 1;
        seen.set(outName, n);
        outName = outName + '_' + n;
      } else {
        seen.set(outName, 0);
      }
      const data = bytes.subarray(e.dataStart, e.dataStart + e.length);
      files.push({ name: outName, data });
      progressBar.style.width = Math.round(((i+1)/currentEntries.length) * 70) + '%';
    }

    setStatus(null, 'Building .zip…');
    await new Promise(r => setTimeout(r, 0));
    const zipData = makeZip(files);

    progressBar.style.width = '100%';
    const blob = new Blob([zipData], { type: 'application/zip' });
    const filename = currentBaseName + '_extracted.zip';

    try {
      saveBlob(filename, blob);
      setStatus('ok', `Done — ${currentEntries.length} files written to ${filename}`);
    } catch (err){
      setStatus('err', 'Save failed: ' + (err && err.message ? err.message : err));
    }
    extractBtn.disabled = false;
  });
})();
