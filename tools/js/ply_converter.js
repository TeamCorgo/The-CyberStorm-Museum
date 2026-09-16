const RECORD_SIZE = 0x84; // 132 bytes
const MAX_VERTS   = 16;   // 32 ints / 2 = 16 (x,y) pairs
const VERT_COUNT_OFFSET = 0x20; // int index 0x20 = byte offset 0x80

// Visually distinct, accessible palette
const PALETTE = [
  '#4f7cff','#ff6b6b','#4ecdc4','#ffe66d','#a29bfe',
  '#fd79a8','#55efc4','#fdcb6e','#74b9ff','#e17055',
  '#00cec9','#ffeaa7','#6c5ce7','#fab1a0','#81ecec',
  '#ff7675','#a29bfe','#dfe6e9','#b2bec3','#636e72',
  '#0984e3','#d63031','#00b894','#e84393','#2d3436',
  '#6ab04c','#eb4d4b','#22a6b3','#f9ca24','#686de0',
];

function colorFor(i) { return PALETTE[i % PALETTE.length]; }

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

let polygons = [];

function parsePLY(buffer) {
  const view = new DataView(buffer);
  const count = Math.floor(buffer.byteLength / RECORD_SIZE);
  const result = [];
  for (let i = 0; i < count; i++) {
    const base = i * RECORD_SIZE;
    const vertCount = view.getInt32(base + VERT_COUNT_OFFSET * 4, true);
    if (vertCount < 1 || vertCount > MAX_VERTS) continue;
    const verts = [];
    for (let v = 0; v < vertCount; v++) {
      const x = view.getInt32(base + v * 8,     true);
      const y = view.getInt32(base + v * 8 + 4, true);
      verts.push({x, y});
    }
    result.push({ index: i, verts, vertCount });
  }
  return result;
}

function bounds(poly) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const {x,y} of poly.verts) {
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  return {minX, minY, maxX, maxY};
}

function allBounds(polys) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of polys) {
    const b = bounds(p);
    if (b.minX < minX) minX = b.minX; if (b.maxX > maxX) maxX = b.maxX;
    if (b.minY < minY) minY = b.minY; if (b.maxY > maxY) maxY = b.maxY;
  }
  return {minX, minY, maxX, maxY};
}

function render() {
  if (!polygons.length) return;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const doFill    = document.getElementById('chk-fill').checked;
  const doOutline = document.getElementById('chk-outline').checked;
  const doVerts   = document.getElementById('chk-verts').checked;
  const doLabels  = document.getElementById('chk-labels').checked;

  const PAD = 32;
  const b = allBounds(polygons);
  const dataW = b.maxX - b.minX || 1;
  const dataH = b.maxY - b.minY || 1;
  const MAX_W = 800, MAX_H = 600;
  const scale = Math.min((MAX_W - PAD*2) / dataW, (MAX_H - PAD*2) / dataH, 2);
  const W = Math.round(dataW * scale + PAD*2);
  const H = Math.round(dataH * scale + PAD*2);
  canvas.width  = W;
  canvas.height = H;

  // Background grid
  ctx.fillStyle = '#0d0f14';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#1a1e2a';
  ctx.lineWidth = 1;
  const GRID = 40;
  for (let gx = 0; gx < W; gx += GRID) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
  for (let gy = 0; gy < H; gy += GRID) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }

  function tx(x) { return (x - b.minX) * scale + PAD; }
  function ty(y) { return (y - b.minY) * scale + PAD; }

  for (const poly of polygons) {
    const color = colorFor(poly.index);
    ctx.beginPath();
    ctx.moveTo(tx(poly.verts[0].x), ty(poly.verts[0].y));
    for (let v = 1; v < poly.verts.length; v++) {
      ctx.lineTo(tx(poly.verts[v].x), ty(poly.verts[v].y));
    }
    ctx.closePath();

    if (doFill) {
      ctx.fillStyle = hexToRgba(color, 0.28);
      ctx.fill();
    }
    if (doOutline) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    if (doVerts) {
      ctx.fillStyle = color;
      for (const {x,y} of poly.verts) {
        ctx.beginPath();
        ctx.arc(tx(x), ty(y), 3, 0, Math.PI*2);
        ctx.fill();
      }
    }
    if (doLabels) {
      const pb = bounds(poly);
      const cx = tx((pb.minX + pb.maxX) / 2);
      const cy = ty((pb.minY + pb.maxY) / 2);
      ctx.font = 'bold 11px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillText(poly.index, cx+1, cy+1);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(poly.index, cx, cy);
    }
  }
}

function buildLegend() {
  const tbody = document.getElementById('legend-body');
  tbody.innerHTML = '';
  for (const poly of polygons) {
    const color = colorFor(poly.index);
    const b = bounds(poly);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${poly.index}</td>
      <td><span class="color-swatch" style="background:${color}"></span>${color}</td>
      <td>${poly.vertCount}</td>
      <td>(${b.minX},${b.minY}) → (${b.maxX},${b.maxY})</td>
    `;
    tbody.appendChild(tr);
  }
}

function buildStats() {
  const b = allBounds(polygons);
  const maxVerts = Math.max(...polygons.map(p => p.vertCount));
  const el = document.getElementById('stats');
  el.innerHTML = `
    <div class="stat"><div class="stat-val">${polygons.length}</div><div class="stat-lbl">Polygons</div></div>
    <div class="stat"><div class="stat-val">${b.maxX - b.minX} × ${b.maxY - b.minY}</div><div class="stat-lbl">Extent (px)</div></div>
    <div class="stat"><div class="stat-val">${maxVerts}</div><div class="stat-lbl">Max vertices</div></div>
  `;
}

function showError(msg) {
  const el = document.getElementById('error-msg');
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

function loadFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const buf = e.target.result;
    if (buf.byteLength % RECORD_SIZE !== 0 && buf.byteLength < RECORD_SIZE) {
      showError(`File is ${buf.byteLength} bytes — not a multiple of 132 (0x84). May not be a valid .ply region file.`);
      return;
    }
    polygons = parsePLY(buf);
    if (!polygons.length) {
      showError('No valid polygon records found. Check that this is a .ply region binary.');
      return;
    }
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('drop-zone').style.display = 'none';
    document.getElementById('ply-main').style.display = 'flex';
    buildStats();
    buildLegend();
    render();
  };
  reader.readAsArrayBuffer(file);
}

// Drag and drop
const dz = document.getElementById('drop-zone');
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
dz.addEventListener('dragleave', () => dz.classList.remove('over'));
dz.addEventListener('drop', e => {
  e.preventDefault();
  dz.classList.remove('over');
  loadFile(e.dataTransfer.files[0]);
});
document.getElementById('file-input').addEventListener('change', e => loadFile(e.target.files[0]));

// Controls re-render
['chk-fill','chk-outline','chk-verts','chk-labels'].forEach(id => {
  document.getElementById(id).addEventListener('change', render);
});

// PNG export
document.getElementById('btn-export').addEventListener('click', () => {
  const canvas = document.getElementById('canvas');
  const filename = (document.title || 'ply_regions') + '.png';
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
});

// Reset
document.getElementById('reset').addEventListener('click', () => {
  polygons = [];
  document.getElementById('ply-main').style.display = 'none';
  document.getElementById('drop-zone').style.display = 'block';
  document.getElementById('file-input').value = '';
});
