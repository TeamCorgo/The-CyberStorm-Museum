const COLORS = [
  '#e94560','#00b4d8','#f4a261','#2ec4b6','#e76f51',
  '#8ecae6','#a8dadc','#90e0ef','#caf0f8','#ffb347'
];

let DATA = null;
let selected = null;
let currentFilename = '';

const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');

// ---------- File input / drag-drop ----------

function triggerUpload() {
  document.getElementById('file-input').click();
}

const dz = document.getElementById('drop-zone');
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
dz.addEventListener('drop', e => {
  e.preventDefault();
  dz.classList.remove('drag-over');
  const f = e.dataTransfer.files[0];
  if (f) handleFile(f);
});

function handleFile(file) {
  if (!file) return;
  currentFilename = file.name;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      DATA = parseBox(new Uint8Array(e.target.result), file.name, file.size);
      showError(null);
      loadUI();
    } catch(err) {
      showError(err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function showError(msg) {
  let banner = document.getElementById('err-banner');
  if (!msg) { if (banner) banner.remove(); return; }
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'err-banner';
    banner.className = 'error-banner';
    document.getElementById('main-layout').prepend(banner);
  }
  banner.textContent = msg;
}

// ---------- Parser ----------

function parseBox(bytes, filename, filesize) {
  if (bytes.length < 20) throw new Error(`File too small (${bytes.length} bytes) — not a valid .BOX file`);

  const view = new DataView(bytes.buffer);
  const sx = view.getInt32(0, true);
  const sy = view.getInt32(4, true);
  const f2 = view.getInt32(8, true);
  const f3 = view.getInt32(12, true);
  const reserved = view.getInt32(16, true);

  const remaining = bytes.length - 20;
  if (remaining % 20 !== 0) throw new Error(`Widget data is not a multiple of 20 bytes (${remaining} bytes remaining) — may not be a .BOX file`);

  const n = remaining / 20;
  const widgets = [];
  for (let i = 0; i < n; i++) {
    const off = 20 + i * 20;
    const rx = view.getInt32(off, true);
    const ry = view.getInt32(off + 4, true);
    const w  = view.getInt32(off + 8, true);
    const h  = view.getInt32(off + 12, true);
    const extra = [bytes[off+16], bytes[off+17], bytes[off+18], bytes[off+19]];
    widgets.push({ i, rx, ry, ax: sx + rx, ay: sy + ry, w, h, extra });
  }

  return { filename, filesize, screen_x: sx, screen_y: sy, field2: f2, field3: f3, reserved, widget_count: n, widgets };
}

// ---------- UI ----------

function loadUI() {
  // Show canvas + sidebar, hide drop zone
  document.getElementById('drop-zone').style.display = 'none';
  document.getElementById('canvas-wrap').style.display = 'flex';
  document.getElementById('sidebar').style.display = 'flex';
  document.getElementById('export-btn').style.display = '';
  document.getElementById('toggle-row').style.display = 'flex';

  // Update header badges
  document.getElementById('h-title').textContent = DATA.filename;
  document.getElementById('b-widgets').textContent = DATA.widget_count + ' widget' + (DATA.widget_count !== 1 ? 's' : '');
  document.getElementById('b-widgets').style.display = '';
  document.getElementById('b-canvas').style.display = '';
  document.getElementById('b-size').textContent = DATA.filesize + ' bytes';
  document.getElementById('b-size').style.display = '';

  // Screen info
  document.getElementById('screen-info').innerHTML = `
    <div class="si-row"><span>screen_x</span><span>${DATA.screen_x}</span></div>
    <div class="si-row"><span>screen_y</span><span>${DATA.screen_y}</span></div>
    <div class="si-row"><span>field2</span><span>${DATA.field2} (0x${DATA.field2.toString(16).toUpperCase().padStart(2,'0')})</span></div>
    <div class="si-row"><span>field3</span><span>${DATA.field3} (0x${DATA.field3.toString(16).toUpperCase().padStart(2,'0')})</span></div>
    <div class="si-row"><span>file size</span><span>${DATA.filesize} bytes</span></div>
  `;

  // Widget list
  selected = null;
  document.getElementById('detail').style.display = 'none';
  const wlist = document.getElementById('wlist');
  wlist.innerHTML = '';
  DATA.widgets.forEach((w, i) => {
    const div = document.createElement('div');
    div.className = 'widget-item';
    div.id = `wi-${i}`;
    div.innerHTML = `
      <div class="wi-head">
        <span class="wi-name" style="color:${COLORS[i%COLORS.length]}">Widget #${i}</span>
        <span class="wi-size">${w.w}×${w.h}</span>
      </div>
      <div class="wi-pos">abs: (${w.ax}, ${w.ay})  rel: (${w.rx}, ${w.ry})</div>
      ${w.extra.some(b=>b!==0) ? `<div class="wi-extra">extra: [${w.extra.join(', ')}]</div>` : ''}
    `;
    div.onclick = () => selectWidget(i);
    wlist.appendChild(div);
  });

  render();
}

// ---------- Canvas ----------

function drawScene(tctx, opts) {
  const { showAbs, showIdx, showGrid, showOrigin } = opts;
  tctx.fillStyle = '#0d0d1a';
  tctx.fillRect(0, 0, 640, 480);

  if (showGrid) {
    tctx.strokeStyle = '#1a2040'; tctx.lineWidth = 0.5;
    for (let x = 0; x <= 640; x += 32) { tctx.beginPath(); tctx.moveTo(x,0); tctx.lineTo(x,480); tctx.stroke(); }
    for (let y = 0; y <= 480; y += 32) { tctx.beginPath(); tctx.moveTo(0,y); tctx.lineTo(640,y); tctx.stroke(); }
  }

  if (showOrigin) {
    const ox = DATA.screen_x, oy = DATA.screen_y;
    tctx.strokeStyle = 'rgba(255,255,100,0.4)'; tctx.lineWidth = 1;
    tctx.setLineDash([4,4]);
    tctx.beginPath(); tctx.moveTo(ox-8,oy); tctx.lineTo(ox+8,oy); tctx.stroke();
    tctx.beginPath(); tctx.moveTo(ox,oy-8); tctx.lineTo(ox,oy+8); tctx.stroke();
    tctx.setLineDash([]);
    tctx.fillStyle = 'rgba(255,255,100,0.7)';
    tctx.font = '9px monospace';
    tctx.fillText(`origin (${ox},${oy})`, ox+4, oy-3);
  }

  DATA.widgets.forEach((w, i) => {
    const isSel = selected === i;
    const color = COLORS[i % COLORS.length];
    tctx.fillStyle = isSel ? color+'44' : color+'22';
    tctx.fillRect(w.ax, w.ay, w.w, w.h);
    tctx.strokeStyle = isSel ? color : color+'aa';
    tctx.lineWidth = isSel ? 2 : 1;
    tctx.strokeRect(w.ax+0.5, w.ay+0.5, w.w-1, w.h-1);
    if (showIdx) {
      tctx.fillStyle = color;
      tctx.font = 'bold 10px monospace';
      tctx.fillText(`#${i}`, w.ax+3, w.ay+11);
    }
    if (showAbs && w.w > 50) {
      tctx.fillStyle = 'rgba(255,255,255,0.45)';
      tctx.font = '9px monospace';
      tctx.fillText(`${w.ax},${w.ay}`, w.ax+(showIdx?22:3), w.ay+11);
    }
    if (w.w > 80) {
      tctx.fillStyle = 'rgba(255,255,255,0.3)';
      tctx.font = '9px monospace';
      const sz = `${w.w}×${w.h}`;
      tctx.fillText(sz, w.ax+w.w-tctx.measureText(sz).width-3, w.ay+11);
    }
  });

  if (selected !== null) {
    const w = DATA.widgets[selected];
    tctx.strokeStyle = COLORS[selected % COLORS.length];
    tctx.lineWidth = 2; tctx.setLineDash([5,3]);
    tctx.strokeRect(w.ax-2, w.ay-2, w.w+4, w.h+4);
    tctx.setLineDash([]);
  }
}

function render() {
  if (!DATA) return;
  drawScene(ctx, {
    showAbs: document.getElementById('tog-abs').checked,
    showIdx: document.getElementById('tog-idx').checked,
    showGrid: document.getElementById('tog-grid').checked,
    showOrigin: document.getElementById('tog-origin').checked,
  });
}

function selectWidget(i) {
  selected = (selected === i) ? null : i;
  document.querySelectorAll('.widget-item').forEach(el => el.classList.remove('active'));
  const detail = document.getElementById('detail');
  if (selected !== null) {
    document.getElementById(`wi-${selected}`).classList.add('active');
    const w = DATA.widgets[selected];
    detail.style.display = '';
    document.getElementById('detail-rows').innerHTML = `
      <div class="detail-row"><span class="dk">index</span><span class="dv">${w.i}</span></div>
      <div class="detail-row"><span class="dk">abs position</span><span class="dv accent">(${w.ax}, ${w.ay})</span></div>
      <div class="detail-row"><span class="dk">rel position</span><span class="dv">(${w.rx}, ${w.ry})</span></div>
      <div class="detail-row"><span class="dk">size</span><span class="dv accent">${w.w} × ${w.h} px</span></div>
      <div class="detail-row"><span class="dk">right edge</span><span class="dv">${w.ax+w.w}</span></div>
      <div class="detail-row"><span class="dk">bottom edge</span><span class="dv">${w.ay+w.h}</span></div>
      <div class="detail-row"><span class="dk">extra[0..3]</span><span class="dv">[${w.extra.join(', ')}]</span></div>
      <div class="detail-row"><span class="dk">file offset</span><span class="dv">+${20 + w.i * 20} bytes</span></div>
    `;
  } else {
    detail.style.display = 'none';
  }
  render();
}

cv.addEventListener('click', e => {
  if (!DATA) return;
  const rect = cv.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  let hit = null;
  for (let i = DATA.widgets.length - 1; i >= 0; i--) {
    const w = DATA.widgets[i];
    if (cx >= w.ax && cx <= w.ax+w.w && cy >= w.ay && cy <= w.ay+w.h) { hit = i; break; }
  }
  selectWidget(hit);
});

cv.addEventListener('mousemove', e => {
  if (!DATA) return;
  const rect = cv.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  cv.style.cursor = DATA.widgets.some(w => cx>=w.ax && cx<=w.ax+w.w && cy>=w.ay && cy<=w.ay+w.h) ? 'pointer' : 'crosshair';
});

// ---------- Export ----------

async function exportPNG() {
  if (!DATA) return;
  const off = document.createElement('canvas');
  off.width = 640; off.height = 480;
  drawScene(off.getContext('2d'), {
    showAbs: document.getElementById('tog-abs').checked,
    showIdx: document.getElementById('tog-idx').checked,
    showGrid: document.getElementById('tog-grid').checked,
    showOrigin: document.getElementById('tog-origin').checked,
  });
  const outName = DATA.filename.replace(/\.box$/i, '') + '.png';
  off.toBlob(async blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = outName;
    a.click();
  }, 'image/png');
}
