// ── BIN parser ────────────────────────────────────────────────────────────────
// Fully verified format (FLX_ResourceLookup + all caller analysis):
//
//   Header (24 bytes / 6 × u32, little-endian):
//     [0] min_id           — lowest valid string ID (ID 0 always invalid)
//     [1] max_id           — highest valid string ID
//     [2] count            — number of entries
//     [3] str_blob_start   — byte offset of string data
//     [4] str_blob_end     — hint: last used byte in string region (never read at runtime)
//     [5] is_sparse        — 0=dense, non-zero=sparse
//
//   Dense (is_sparse==0):
//     (max_id−min_id+1) u32 offsets at byte 24, one per ID.
//     Length = next_offset−this_offset; 0→strlen fallback.
//     Last entry ALWAYS uses strlen (next dword hits string blob, not a valid offset).
//     ID 0 skipped even if in range.
//
//   Sparse (is_sparse!=0), sliding-window:
//     [off_0][id_0] [off_1][id_1] ... [off_N][id_N] [sentinel_off]
//     Length of entry i = off_{i+1}−off_i; 0→strlen fallback.
//     Table size = count*8+4 bytes. ID 0 skipped.
//
//   Dual-string entries (FLX_ResourceLookup_GetAltString pattern):
//     Byte after first null checked — if non-zero, a second string follows.
//     Usage varies by file:
//       HercTxt/TechTxt  → primary=label, alt=abbreviated form
//       CutScene BIN     → primary=title (large font), alt=body text (small font, Y+14px)
//       OPTIONS.BIN      → primary=menu label (XOR'd), alt=cheat keyword (XOR'd)
//     Same ID across HercTxt + TechTxt = same game object (cross-file namespace).
//
//   Special string forms (annotated in output):
//     ~XX     → hotkey binding: byte after ~ is keycode (0x80 set=raw char, else A-Z index)
//               display text starts at byte 2 if present
//     %s/%S   → parameterized string slot (NOT a format template — BIN string is the argument)
//     %d/%i/%u/%x/%o → parameterized number slot
//     %f/%e/%g/%E/%G → parameterized float slot
//     %p/%P   → 16.16 fixed-point decimal (NOT a pointer — custom engine format)
//     %%      → literal %
//
//   String length limits (enforced by callers):
//     CoreTxt ID 0xFA  → rename dialog input max = 12 chars
//     Skill/cutscene BIN (DAT_00511e90) → stack buffer = 99 chars max
//
//   XOR encoding (OPTIONS.BIN only):
//     All string bytes XOR'd with 0xBF before storage. Decoded on load here.
//
//   PKX Compression (full header, validated by engine):
//     [0] u32 0x3a584b50   magic "PKX:"
//     [1] u32 0x10011966   magic
//     [2] u32 0x9BAEBACF   magic (all 3 must match — engine fatal-errors on partial match)
//     [3] u32 algorithm    low nibble=inner/only pass, high nibble=outer pass (cascaded);
//                          each nibble independently must be 0x1=RLE-zero-run, 0xC=RLE, 0xE=LZSS
//     [4] u32 comp_size    must == file_size − 0x18
//     [5] u32 decomp_size  must be 1–9,999,999
//     [6+] compressed data
//
//   RBX archive filenames (§10): loose .BIN filenames > 12 chars (8.3 format) cannot be
//     packed into a CYBDATA*.RBX archive — flagged in the meta bar when detected.
//
//   Known gaps (see BIN_Format_Specification.md footnotes):
//     - Handle addresses for ErrorTxt/MultiTxt/SimTxt/QStart/HelpLink.bin are unconfirmed.
//     - The cutscene/skill BIN's real filename is unconfirmed; the 99-char length-limit
//       warning below matches by filename guess and is advisory only, not authoritative.

// ── File-specific knowledge ───────────────────────────────────────────────────

// Files known to use XOR 0xBF encoding
const XOR_FILES = /OPTIONS/i;

// Files where same IDs span multiple files for the same game object
const CROSSFILE_GROUPS = [
  { pattern: /HercTxt/i,  partner: 'TechTxt.bin', note: 'Same IDs in TechTxt = long description' },
  { pattern: /TechTxt/i,  partner: 'HercTxt.bin', note: 'Same IDs in HercTxt = short label' },
];

// Known length-constrained IDs: { file pattern, id range [min,max], max chars, reason }
// NOTE: the cutscene/skill BIN's real on-disk filename is unconfirmed (spec §1/§5.4) — the
// 99-char rule below is a best-effort guess by filename and may miss the real file or
// false-positive on unrelated ones. Treat "warn:>99chars" as advisory, not authoritative.
const LENGTH_LIMITS = [
  { pattern: /CoreTxt/i,  idMin: 0xFA, idMax: 0xFA,  maxLen: 12, reason: 'rename dialog input limit (confirmed)' },
  { pattern: /cutscene|skill|miniSh|paraSh|miniMenu/i, idMin: 0, idMax: 0xFFFFFF, maxLen: 99, reason: 'stack buffer in InGameMenu_RunModalLoop (filename unconfirmed — guess)' },
];

function getFileLimits(filename, id) {
  const limits = [];
  for (const l of LENGTH_LIMITS) {
    if (l.pattern.test(filename) && id >= l.idMin && id <= l.idMax) {
      limits.push({ maxLen: l.maxLen, reason: l.reason });
    }
  }
  return limits;
}

// ── Annotation helpers ────────────────────────────────────────────────────────

function annotateString(s, filename, id) {
  const tags = [];
  if (s === null) return tags;

  if (s.startsWith('~')) tags.push('hotkey');

  // Parameterized string detection — BIN strings are arguments, not format templates
  if (/%([-#+ 0]*(\d+|\*)?(\.\d+|\.\*)?[hl]?[diouxXcseEfgGnpPS%])/.test(s)) {
    if (/%[pP]/.test(s))              tags.push('param:fixed-point');
    else if (/%[eEfgG]/.test(s))      tags.push('param:float');
    else if (/%[diouxXi]/.test(s))    tags.push('param:number');
    else if (/%[sS]/.test(s))         tags.push('param:string');
    else                               tags.push('param:template');
  }

  // Length limit warnings
  const limits = getFileLimits(filename, id);
  for (const l of limits) {
    if (s.length > l.maxLen) tags.push(`warn:>${l.maxLen}chars`);
  }

  return tags;
}

function xorDecode(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) out += String.fromCharCode(s.charCodeAt(i) ^ 0xBF);
  return out;
}

function parseHotkey(s) {
  if (!s.startsWith('~') || s.length < 2) return { hotkey: '?', display: '' };
  const code = s.charCodeAt(1);
  let hotkey;
  if (code & 0x80) {
    hotkey = `0x${(code & 0x7F).toString(16).toUpperCase()}`;
  } else {
    const ch = code >= 0x61 && code <= 0x7A ? code - 0x20 : code;
    hotkey = String.fromCharCode(ch);
  }
  return { hotkey, display: s.slice(2) };
}

// ── BIN parser ────────────────────────────────────────────────────────────────
function parseBin(buffer, filename) {
  const dv  = new DataView(buffer);
  const u32 = (o) => dv.getUint32(o, true);
  const len = buffer.byteLength;
  const entries = [];
  const errors  = [];

  // Full PKX compression magic — all three words must match.
  // Engine calls ShowFatalErrorDialog on partial match (first two match, third doesn't).
  if (len >= 12) {
    const m0 = u32(0), m1 = u32(4), m2 = u32(8);
    if (m0 === 0x3a584b50 && m1 === 0x10011966) {
      if (m2 === 0x9BAEBACF) {
        // Valid PKX — check additional header fields
        if (len >= 24) {
          const algo     = u32(12);
          const compSize = u32(16);
          const decompSz = u32(20);
          const expectedCompSize = len - 0x18;
          // Each nibble is validated independently — cascaded compression (§9.2) means the
          // high nibble (outer pass) and low nibble (inner pass) are separate algorithm IDs,
          // each of which must be one of the implemented values on its own.
          const VALID_ALGOS = new Set([0x1, 0xC, 0xE]);
          const loNibble = algo & 0xF, hiNibble = (algo >> 4) & 0xF;
          const badNibbles = [loNibble, ...(hiNibble ? [hiNibble] : [])].filter(n => !VALID_ALGOS.has(n));
          if (badNibbles.length)
            errors.push(`PKX: invalid algorithm nibble(s) ${badNibbles.map(n => '0x' + n.toString(16).toUpperCase()).join(', ')} in algorithm byte 0x${algo.toString(16).toUpperCase()} (valid: 0x1=RLE-zero, 0xC=RLE, 0xE=LZSS; cascaded = hi<<4|lo).`);
          if (compSize !== expectedCompSize)
            errors.push(`PKX: compressed_size (${compSize}) ≠ file_size−0x18 (${expectedCompSize}).`);
          if (decompSz < 1 || decompSz > 9999999)
            errors.push(`PKX: decompressed_size ${decompSz} outside valid range 1–9,999,999.`);
        }
        errors.push('File is PKX-compressed. Decompress it first before loading.');
        return { entries, errors, meta: null };
      } else {
        errors.push(`Corrupt PKX header: first two magic words match but third is 0x${m2.toString(16).toUpperCase()} (expected 0x9BAEBACF). Engine would fatal-error here.`);
        return { entries, errors, meta: null };
      }
    }
  }

  if (len < 24) {
    errors.push(`File too small to be a valid text BIN (${len} bytes, need ≥ 24).`);
    return { entries, errors, meta: null };
  }

  const minId        = u32(0);
  const maxId        = u32(4);
  const count        = u32(8);
  const strBlobStart = u32(12);
  const strBlobEnd   = u32(16); // runtime hint only — never read by engine
  const isSparse     = u32(20) !== 0;
  const isXorFile    = XOR_FILES.test(filename);

  // Cross-file relationship note
  const crossFile = CROSSFILE_GROUPS.find(g => g.pattern.test(filename));

  // §10: filenames > 12 chars (8.3 format) cannot live inside a CYBDATA*.RBX archive
  const bareName = filename.replace(/^.*[\\/]/, '');
  const rbxTooLong = bareName.length > 12;

  const meta = { minId, maxId, count, strBlobStart, strBlobEnd, isSparse, isXorFile, crossFile: crossFile || null, rbxTooLong };

  if (count === 0) {
    errors.push('Entry count is 0 — file may be empty or corrupt.');
    return { entries, errors, meta };
  }
  if (minId > maxId) {
    errors.push(`min_id (${minId}) > max_id (${maxId}) — invalid header.`);
    return { entries, errors, meta };
  }

  const bytes   = new Uint8Array(buffer);
  const decoder = new TextDecoder('latin1');

  const readCStr = (offset) => {
    if (offset === 0 || offset >= len) return '';
    let end = offset;
    while (end < len && bytes[end] !== 0) end++;
    return decoder.decode(bytes.subarray(offset, end));
  };

  const processStr = (s) => isXorFile ? xorDecode(s) : s;

  const readEntry = (offset, byteLen, isLastDense) => {
    if (offset === 0 || offset >= len) return { content: '', alt: null };
    let primary, altOffset;
    // Last dense entry always uses strlen — next dword reads into string blob
    const effectiveLen = isLastDense ? 0 : byteLen;
    if (effectiveLen > 0) {
      const end = Math.min(offset + effectiveLen, len);
      let nullPos = offset;
      while (nullPos < end && bytes[nullPos] !== 0) nullPos++;
      primary   = processStr(decoder.decode(bytes.subarray(offset, nullPos)));
      altOffset = nullPos + 1;
    } else {
      let end = offset;
      while (end < len && bytes[end] !== 0) end++;
      primary   = processStr(decoder.decode(bytes.subarray(offset, end)));
      altOffset = end + 1;
    }
    let alt = null;
    if (altOffset < len && bytes[altOffset] !== 0) {
      alt = processStr(readCStr(altOffset));
    }
    return { content: primary, alt };
  };

  const buildTags = (content, alt, id) => [
    ...annotateString(content, filename, id),
    ...(alt !== null ? annotateString(alt, filename, id).map(t => 'alt:' + t) : [])
  ];

  if (!isSparse) {
    const tableCount = maxId - minId + 1;
    const tableEnd   = 24 + tableCount * 4;
    if (tableEnd > len) {
      errors.push(`Dense table (${tableCount} entries) extends past end of file.`);
      return { entries, errors, meta };
    }
    for (let i = 0; i < tableCount; i++) {
      const id = minId + i;
      if (id === 0) continue;
      const offset  = u32(24 + i * 4);
      const nextOff = (i + 1 < tableCount) ? u32(24 + (i + 1) * 4) : 0;
      const byteLen = nextOff - offset;
      const isLast  = (i === tableCount - 1);
      const { content, alt } = readEntry(offset, byteLen, isLast);
      entries.push({ id, content, alt, tags: buildTags(content, alt, id) });
    }
  } else {
    const tableEnd = 24 + count * 8 + 4;
    if (tableEnd > len) {
      if (24 + count * 8 > len) {
        errors.push(`Sparse table (${count} entries) extends past end of file.`);
        return { entries, errors, meta };
      }
      errors.push('Warning: sparse sentinel dword missing — last entry uses strlen fallback.');
    }
    for (let i = 0; i < count; i++) {
      const base    = 24 + i * 8;
      const offset  = u32(base);
      const id      = u32(base + 4);
      if (id === 0) continue;
      const nextBase = base + 8;
      const nextOff  = (nextBase + 4 <= len) ? u32(nextBase) : 0;
      const byteLen  = nextOff - offset;
      const { content, alt } = readEntry(offset, byteLen < 0 ? 0 : byteLen, false);
      entries.push({ id, content, alt, tags: buildTags(content, alt, id) });
    }
    entries.sort((a, b) => a.id - b.id);
  }

  return { entries, errors, meta };
}

// ── State ─────────────────────────────────────────────────────────────────────
const files   = new Map();
let activeFile = null;
let sortCol    = 'id';
let sortDir    = 1;

// ── DOM refs ──────────────────────────────────────────────────────────────────
const dropZone  = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const exportBtn = document.getElementById('exportBtn');
const tabBar    = document.getElementById('tabBar');
const content   = document.getElementById('content');

// ── File loading ───────────────────────────────────────────────────────────────
function loadFiles(fileList) {
  for (const f of fileList) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const name = f.name;
      const result = parseBin(e.target.result, name);
      files.set(name, result);
      activeFile = name;
      renderTabs();
      renderTable();
    };
    reader.readAsArrayBuffer(f);
  }
}

fileInput.addEventListener('change', (e) => { loadFiles(e.target.files); fileInput.value = ''; });

// Click anywhere on the empty state (when no files loaded) to browse too.
content.addEventListener('click', (e) => {
  if (e.target.closest('#emptyState')) fileInput.click();
});

// ── Whole-page drag & drop ───────────────────────────────────────────────────
// A dragenter/dragleave counter avoids flicker as the drag crosses child element
// boundaries (dragleave fires when moving between children, not just off the page).
const dropOverlay = document.getElementById('dropOverlay');
let dragDepth = 0;

function hasFiles(e) {
  return e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files');
}

window.addEventListener('dragenter', (e) => {
  if (!hasFiles(e)) return;
  e.preventDefault();
  dragDepth++;
  dropOverlay.classList.add('active');
});
window.addEventListener('dragover', (e) => {
  if (!hasFiles(e)) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
});
window.addEventListener('dragleave', (e) => {
  if (!hasFiles(e)) return;
  dragDepth = Math.max(0, dragDepth - 1);
  if (dragDepth === 0) dropOverlay.classList.remove('active');
});
window.addEventListener('drop', (e) => {
  e.preventDefault();
  dragDepth = 0;
  dropOverlay.classList.remove('active');
  if (e.dataTransfer && e.dataTransfer.files.length) loadFiles(e.dataTransfer.files);
});
// Belt-and-suspenders: a drop or drag ending outside the window also clears the overlay.
window.addEventListener('dragend', () => { dragDepth = 0; dropOverlay.classList.remove('active'); });

// ── Tabs ───────────────────────────────────────────────────────────────────────
function renderTabs() {
  tabBar.style.display = files.size ? 'flex' : 'none';
  tabBar.innerHTML = '';
  for (const [name] of files) {
    const tab = document.createElement('div');
    tab.className = 'tab' + (name === activeFile ? ' active' : '');
    const label = document.createElement('span');
    label.textContent = name;
    const rm = document.createElement('span');
    rm.className = 'remove';
    rm.textContent = '✕';
    rm.title = 'Remove';
    rm.addEventListener('click', (ev) => {
      ev.stopPropagation();
      files.delete(name);
      if (activeFile === name) activeFile = files.size ? [...files.keys()][0] : null;
      renderTabs();
      renderTable();
    });
    tab.appendChild(label);
    tab.appendChild(rm);
    tab.addEventListener('click', () => { activeFile = name; renderTabs(); renderTable(); });
    tabBar.appendChild(tab);
  }
  exportBtn.disabled = files.size === 0;
}

// ── Rendering helpers ─────────────────────────────────────────────────────────
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const TAG_COLORS = {
  'hotkey':             ['#6a3fc8','#c4b0ff'],
  'param:fixed-point':  ['#a05010','#ffcc88'],
  'param:float':        ['#a05010','#ffcc88'],
  'param:number':       ['#1a6a8a','#80d8ff'],
  'param:string':       ['#1a6a8a','#80d8ff'],
  'param:template':     ['#1a6a8a','#80d8ff'],
  'warn:>12chars':      ['#c03030','#ffaaaa'],
  'warn:>99chars':      ['#c03030','#ffaaaa'],
};

function renderTags(tags) {
  if (!tags || tags.length === 0) return '';
  return tags.map(t => {
    const base = t.replace(/^alt:/, '');
    let colors = TAG_COLORS[base];
    if (!colors && base.startsWith('warn:')) colors = ['#c03030','#ffaaaa'];
    const [dark, light] = colors || ['#555','#bbb'];
    const prefix = t.startsWith('alt:') ? 'alt:' : '';
    return `<span class="tag" style="--tc:${dark};--tl:${light}">${prefix}${base}</span>`;
  }).join(' ');
}

// Render a single content cell, handling special cases
function renderContent(str, alt, tags) {
  // Case: empty primary + non-empty alt = intentional redirect (not a missing string)
  if (str.length === 0 && alt !== null) {
    return `<span class="empty alt-redirect">→ alt</span>`;
  }
  if (str.length === 0) {
    return `<span class="empty">(empty)</span>`;
  }

  // Hotkey: show decoded form
  if (str.startsWith('~')) {
    const { hotkey, display } = parseHotkey(str);
    const dispHtml = display ? escHtml(display) : '<span class="empty">(no display text)</span>';
    return `<span class="hotkey-key">[${escHtml(hotkey)}]</span> ${dispHtml}`;
  }

  return escHtml(str);
}

// ── Table render ───────────────────────────────────────────────────────────────
function renderTable() {
  if (!activeFile || !files.has(activeFile)) {
    content.innerHTML = `<div class="empty-state is-dropzone" id="emptyState">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
      </svg>
      <p>No file loaded</p>
      <small>Drop one or more <code>.bin</code> files anywhere on this page, or <kbd>click</kbd> to browse</small>
    </div>`;
    return;
  }

  const { entries, errors, meta } = files.get(activeFile);

  let html = '';

  if (errors.length) {
    html += `<div class="error-banner">⚠ ${errors.map(escHtml).join('<br>')}</div>`;
  }

  if (meta) {
    const xorNote    = meta.isXorFile ? ' &nbsp;·&nbsp; <span style="color:var(--red)">XOR 0xBF</span>' : '';
    const crossNote  = meta.crossFile  ? ` &nbsp;·&nbsp; <span style="color:var(--accent)">↔ ${meta.crossFile.note}</span>` : '';
    const rbxNote    = meta.rbxTooLong ? ' &nbsp;·&nbsp; <span style="color:var(--red)">filename &gt;12 chars — cannot live in a .RBX archive</span>' : '';
    html += `<div style="padding:8px 24px 4px;font-size:11px;color:var(--text-dim)">
      IDs ${meta.minId}–${meta.maxId} &nbsp;·&nbsp; ${meta.count} entries &nbsp;·&nbsp;
      ${meta.isSparse ? 'sparse' : 'dense'} &nbsp;·&nbsp;
      blob @ 0x${meta.strBlobStart.toString(16)}–0x${meta.strBlobEnd.toString(16)}${xorNote}${crossNote}${rbxNote}
      <span class="badge">${activeFile}</span>
    </div>`;
  }

  let rows = [...entries].sort((a, b) => {
    if (sortCol === 'id') return (a.id - b.id) * sortDir;
    return a.content.localeCompare(b.content) * sortDir;
  });

  const sortArrow = (col) => {
    if (sortCol !== col) return '<span class="sort-indicator">⇅</span>';
    return `<span class="sort-indicator">${sortDir === 1 ? '↑' : '↓'}</span>`;
  };

  html += `<div class="table-wrap"><table>
    <thead>
      <tr>
        <th class="${sortCol==='id'?'sorted':''}" data-col="id">Filename${sortArrow('id')}</th>
        <th data-col="id_num" style="cursor:default">ID (dec)</th>
        <th class="${sortCol==='content'?'sorted':''}" data-col="content">Content${sortArrow('content')}</th>
        <th data-col="alt" style="cursor:default">Alt / Body</th>
        <th data-col="tags" style="cursor:default">Flags</th>
      </tr>
    </thead>
    <tbody>`;

  for (const e of rows) {
    const contentDisp = renderContent(e.content, e.alt, e.tags);

    // Alt column: distinguish intentional-empty-redirect from plain absent
    let altDisp;
    if (e.alt === null) {
      altDisp = '<span class="empty">—</span>';
    } else {
      altDisp = e.alt.startsWith('~')
        ? (() => { const { hotkey, display } = parseHotkey(e.alt); return `<span class="hotkey-key">[${escHtml(hotkey)}]</span> ${display ? escHtml(display) : ''}`; })()
        : escHtml(e.alt);
    }

    const tagsDisp = renderTags(e.tags);

    html += `<tr>
      <td class="col-id">${escHtml(activeFile)}</td>
      <td class="col-id-num">${escHtml(String(e.id))}</td>
      <td class="col-content">${contentDisp}</td>
      <td class="col-content">${altDisp}</td>
      <td class="col-tags">${tagsDisp}</td>
    </tr>`;
  }

  html += '</tbody></table></div>';
  content.innerHTML = html;

  content.querySelectorAll('thead th[data-col]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.col;
      if (col === 'id_num' || col === 'alt' || col === 'tags') return;
      if (sortCol === col) sortDir = -sortDir;
      else { sortCol = col; sortDir = 1; }
      renderTable();
    });
  });
}

// ── Export CSV ────────────────────────────────────────────────────────────────
exportBtn.addEventListener('click', () => {
  const rows = ['filename,id_dec,content,alt,flags,warnings'];
  for (const [filename, { entries }] of files) {
    for (const e of entries) {
      const esc  = s => (s ?? '').replace(/"/g, '""');
      const tags = e.tags || [];
      const flags    = tags.filter(t => !t.startsWith('warn:')).join('|');
      const warnings = tags.filter(t =>  t.startsWith('warn:')).join('|');
      rows.push(`"${filename}",${e.id},"${esc(e.content)}","${esc(e.alt)}","${esc(flags)}","${esc(warnings)}"`);
    }
  }
  const csv = rows.join('\r\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bin_strings.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
