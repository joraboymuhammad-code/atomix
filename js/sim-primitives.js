// Shared Neon Observatory Canvas 2D primitives & scientific colormaps for Atomix

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function drawGrid(ctx, w, h, step = 36) {
  ctx.save();
  ctx.fillStyle = '#070b18';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(148, 163, 184, 0.065)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = step; x < w; x += step) {
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, h);
  }
  for (let y = step; y < h; y += step) {
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(w, y + 0.5);
  }
  ctx.stroke();

  // Axes tint
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.14)';
  ctx.beginPath();
  ctx.moveTo(0, Math.round(h * 0.72) + 0.5);
  ctx.lineTo(w, Math.round(h * 0.72) + 0.5);
  ctx.stroke();
  ctx.restore();
}

export function drawArrow(ctx, x1, y1, x2, y2, color = '#22d3ee', width = 2.4, label = '') {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 3) return;
  const ang = Math.atan2(dy, dx);
  const head = Math.min(11, Math.max(6, len * 0.25));

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(ang - 0.42), y2 - head * Math.sin(ang - 0.42));
  ctx.lineTo(x2 - head * Math.cos(ang + 0.42), y2 - head * Math.sin(ang + 0.42));
  ctx.closePath();
  ctx.fill();

  if (label) {
    ctx.font = '600 11px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, x2 + 12 * Math.cos(ang + 0.35), y2 + 12 * Math.sin(ang + 0.35));
  }
  ctx.restore();
}

export function drawSpring(ctx, x1, y1, x2, y2, coils = 10, amp = 8, color = '#94a3b8') {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 10) return;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const pad = Math.min(14, len * 0.12);

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + ux * pad, y1 + uy * pad);
  const span = len - 2 * pad;
  for (let i = 1; i <= coils * 2 - 1; i++) {
    const f = i / (coils * 2);
    const side = i % 2 === 1 ? amp : -amp;
    ctx.lineTo(
      x1 + ux * (pad + f * span) + nx * side,
      y1 + uy * (pad + f * span) + ny * side
    );
  }
  ctx.lineTo(x2 - ux * pad, y2 - uy * pad);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

export function drawLabelPill(ctx, text, x, y, bg = 'rgba(15, 23, 42, 0.85)', fg = '#e2e8f0', border = 'rgba(56, 189, 248, 0.35)') {
  ctx.save();
  ctx.font = '600 11.5px "JetBrains Mono", Consolas, monospace';
  const tw = ctx.measureText(text).width;
  const pw = tw + 14;
  const ph = 22;
  ctx.fillStyle = bg;
  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, pw, ph, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = fg;
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x + 7, y + ph / 2 + 0.5);
  ctx.restore();
}

export function wavelengthToColor(nm) {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm >= 440 && nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm >= 490 && nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm >= 510 && nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm >= 580 && nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else if (nm >= 645 && nm <= 780) { r = 1; }
  else if (nm < 380) { r = 0.68; b = 1; }
  else { r = 0.9; }
  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}

export function drawScope(ctx, w, topY, h, seriesList, title) {
  ctx.save();
  ctx.fillStyle = 'rgba(4, 8, 18, 0.92)';
  ctx.fillRect(0, topY, w, h);
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
  ctx.beginPath();
  ctx.moveTo(0, topY + 0.5);
  ctx.lineTo(w, topY + 0.5);
  ctx.stroke();

  const midY = topY + h * 0.56;
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.14)';
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(14, midY);
  ctx.lineTo(w - 14, midY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.font = '600 11px Inter, system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(title, 14, topY + 16);

  let lx = w - 14;
  for (let s = seriesList.length - 1; s >= 0; s--) {
    const sr = seriesList[s];
    const label = sr.label || '';
    const tw = ctx.measureText(label).width;
    ctx.fillStyle = sr.color;
    ctx.fillText(label, lx - tw, topY + 16);
    lx -= tw + 16;

    const data = sr.data || [];
    if (data.length < 2) continue;
    let maxAbs = 1e-6;
    for (let i = 0; i < data.length; i++) {
      if (Math.abs(data[i]) > maxAbs) maxAbs = Math.abs(data[i]);
    }
    const scaleY = (h * 0.34) / maxAbs;
    ctx.strokeStyle = sr.color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const px = 14 + (i / (data.length - 1)) * (w - 28);
      const py = midY - data[i] * scaleY;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }
  ctx.restore();
}
