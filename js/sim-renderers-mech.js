import { clamp, drawArrow, drawSpring, drawLabelPill } from './sim-primitives.js';

export function renderMechThermoMode(ctx, mode, p, t, w, h, state) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  const deg2rad = (d) => (d * Math.PI) / 180;

  switch (mode) {
    // ───────── SECTION 1 ─────────
    case 'intro_phenomena': {
      const m = p.mass ?? 10;
      const g = p.g ?? 9.8;
      const noise = p.noise ?? 3;
      const ox = 56, oy = h - 34, pw = w - 92, ph = h - 68;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath();
      ctx.moveTo(ox, 20); ctx.lineTo(ox, oy); ctx.lineTo(w - 28, oy);
      ctx.stroke();

      // Exact Galileo curve h(t) = 0.5 * g * t^2
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const ts = (i / 60) * 4;
        const val = 0.5 * g * ts * ts;
        const px = ox + (i / 60) * pw * 0.72;
        const py = oy - clamp(val / 160, 0, 1) * ph;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Experimental scattered points
      for (let i = 1; i <= 10; i++) {
        const ts = (i / 10) * 4;
        const jitter = Math.sin(i * 7.3 + m) * (noise / 100) * 14;
        const val = 0.5 * g * ts * ts + jitter;
        const px = ox + (i / 10) * pw * 0.72;
        const py = oy - clamp(val / 160, 0, 1) * ph;
        ctx.fillStyle = '#fb923c';
        ctx.beginPath(); ctx.arc(px, py, 4.2, 0, Math.PI * 2); ctx.fill();
      }

      // Live falling test mass on the right
      const fallPhase = (t * 0.65) % 2.4;
      const normY = Math.min(1, (0.5 * g * fallPhase * fallPhase) / (0.5 * g * 2.4 * 2.4));
      const bx = w * 0.85;
      const by = 40 + normY * (oy - 58);
      ctx.strokeStyle = 'rgba(34,211,238,0.28)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(bx, 36); ctx.lineTo(bx, oy); ctx.stroke();
      ctx.setLineDash([]);
      const r = 10 + Math.sqrt(m) * 1.4;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2); ctx.fill();
      drawLabelPill(ctx, `Nazariya (ko‘k) vs Tajriba (to‘q sariq)`, ox + 12, 24);
      const W = m * g;
      return {
        scopeTitle: 'Erkin tushish tezligi v(t) va tajriba og‘ishi',
        traceA: g * fallPhase,
        traceB: noise * Math.sin(t * 5),
        labelA: `v = ${(g * fallPhase).toFixed(1)} m/s`,
        labelB: `Shovqin: ±${noise}%`,
        metrics: [
          { label: 'Og‘irlik P', value: `${W.toFixed(1)} N`, color: '#22d3ee' },
          { label: 'Tezlanish g', value: `${g.toFixed(1)} m/s²`, color: '#38bdf8' },
          { label: 'Tajriba xatoligi', value: `±${noise}%`, color: '#fb923c' },
        ],
      };
    }

    case 'measurement_error': {
      const trueV = p.trueVal ?? 45;
      const div = p.div ?? 0.5;
      const N = Math.round(p.trials ?? 12);
      const sysErr = div * 0.5;
      // Draw ruler + caliper jaws
      const rx = 40, rw = w - 80, ry = h * 0.36;
      ctx.fillStyle = 'rgba(30,41,59,0.85)';
      ctx.strokeStyle = 'rgba(56,189,248,0.45)';
      ctx.beginPath(); ctx.roundRect(rx, ry, rw, 44, 6); ctx.fill(); ctx.stroke();

      const mmScale = rw / 130;
      ctx.strokeStyle = '#cbd5e1';
      for (let mm = 0; mm <= 125; mm += 1) {
        const x = rx + 10 + mm * mmScale;
        if (x > rx + rw - 8) break;
        if (mm % 5 === 0) {
          ctx.beginPath(); ctx.moveTo(x, ry); ctx.lineTo(x, ry + (mm % 10 === 0 ? 18 : 12)); ctx.stroke();
        }
      }
      // Object bar
      const objW = trueV * mmScale;
      ctx.fillStyle = 'rgba(34,211,238,0.28)';
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2;
      ctx.fillRect(rx + 10, ry - 32, objW, 28);
      ctx.strokeRect(rx + 10, ry - 32, objW, 28);

      // Trials bell scatter below ruler
      let sum = 0;
      const samples = [];
      for (let i = 0; i < N; i++) {
        const delta = Math.sin(i * 12.7 + 1.3) * div * 1.4;
        const xVal = trueV + delta;
        samples.push(xVal);
        sum += xVal;
      }
      const mean = sum / N;
      const randErr = (div * 1.3) / Math.sqrt(N);
      const totalErr = sysErr + randErr;

      samples.forEach((sv, idx) => {
        const px = cx + (sv - trueV) * 40;
        const py = h * 0.72 + Math.cos(idx * 2.1) * 14;
        ctx.fillStyle = '#fb923c';
        ctx.beginPath(); ctx.arc(clamp(px, 30, w - 30), py, 4, 0, Math.PI * 2); ctx.fill();
      });
      ctx.strokeStyle = '#34d399';
      ctx.beginPath(); ctx.moveTo(cx, h * 0.56); ctx.lineTo(cx, h * 0.88); ctx.stroke();
      drawLabelPill(ctx, `Natija: ${mean.toFixed(2)} ± ${totalErr.toFixed(2)} mm`, 24, 18);

      return {
        scopeTitle: 'O‘lchashlarning tasodifiy tarqalishi (N ta tajriba)',
        traceA: randErr,
        traceB: totalErr,
        labelA: `Tasodifiy Δx_t: ${randErr.toFixed(3)} mm`,
        labelB: `Umumiy Δx: ${totalErr.toFixed(3)} mm`,
        metrics: [
          { label: 'O‘rtacha qiymat', value: `${mean.toFixed(2)} mm`, color: '#22d3ee' },
          { label: 'Asbob xatoligi Δ_as', value: `±${sysErr.toFixed(3)} mm`, color: '#94a3b8' },
          { label: 'Nisbiy xatolik ε', value: `${((totalErr / trueV) * 100).toFixed(2)}%`, color: '#fb923c' },
        ],
      };
    }

    case 'vectors': {
      const aM = p.aMag ?? 90, aA = deg2rad(p.aAng ?? 25);
      const bM = p.bMag ?? 75, bA = deg2rad(p.bAng ?? 105);
      const scale = Math.min(w, h) * 0.0024;
      const ax = aM * Math.cos(aA) * scale;
      const ay = -aM * Math.sin(aA) * scale;
      const bx = bM * Math.cos(bA) * scale;
      const by = -bM * Math.sin(bA) * scale;
      const rx = ax + bx, ry = ay + by;

      const ox = cx, oy = h * 0.54;
      ctx.strokeStyle = 'rgba(148,163,184,0.22)';
      ctx.beginPath(); ctx.moveTo(20, oy); ctx.lineTo(w - 20, oy); ctx.moveTo(ox, 16); ctx.lineTo(ox, h - 16); ctx.stroke();

      // Parallelogram ghost
      ctx.strokeStyle = 'rgba(148,163,184,0.32)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(ox + ax, oy + ay); ctx.lineTo(ox + rx, oy + ry);
      ctx.moveTo(ox + bx, oy + by); ctx.lineTo(ox + rx, oy + ry);
      ctx.stroke(); ctx.setLineDash([]);

      drawArrow(ctx, ox, oy, ox + ax, oy + ay, '#22d3ee', 2.8, 'A');
      drawArrow(ctx, ox, oy, ox + bx, oy + by, '#a78bfa', 2.8, 'B');
      drawArrow(ctx, ox, oy, ox + rx, oy + ry, '#34d399', 3.4, 'R = A+B');

      const rMag = Math.hypot(aM * Math.cos(aA) + bM * Math.cos(bA), aM * Math.sin(aA) + bM * Math.sin(bA));
      const rDeg = ((Math.atan2(aM * Math.sin(aA) + bM * Math.sin(bA), aM * Math.cos(aA) + bM * Math.cos(bA)) * 180) / Math.PI + 360) % 360;
      const dot = aM * bM * Math.cos(aA - bA);
      return {
        scopeTitle: 'Vektor proyeksiyalari va skalyar ko‘paytma',
        traceA: (rx / scale),
        traceB: -(ry / scale),
        labelA: `Rx = ${(rx / scale).toFixed(1)}`,
        labelB: `Ry = ${(-ry / scale).toFixed(1)}`,
        metrics: [
          { label: 'Natijaviy |R|', value: `${rMag.toFixed(1)}`, color: '#34d399' },
          { label: 'Yo‘nalish θ_R', value: `${rDeg.toFixed(1)}°`, color: '#22d3ee' },
          { label: 'Skalyar A·B', value: `${dot.toFixed(0)}`, color: '#a78bfa' },
        ],
      };
    }

    // ───────── SECTION 2A ─────────
    case 'path_displacement': {
      const vx = p.vx ?? 4, amp = p.amp ?? 35, freq = p.freq ?? 1.2;
      const yBase = h * 0.52;
      const startX = 48, spanW = w - 96;
      const u = ((t * vx * 0.14) % 1);
      ctx.strokeStyle = 'rgba(56,189,248,0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      let pathLen = 0, prevX = startX, prevY = yBase;
      for (let i = 0; i <= 80; i++) {
        const s = i / 80;
        const px = startX + s * spanW;
        const py = yBase - Math.sin(s * Math.PI * 2 * freq) * amp;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        if (s <= u) {
          pathLen += Math.hypot(px - prevX, py - prevY);
          prevX = px; prevY = py;
        }
      }
      ctx.stroke();

      drawArrow(ctx, startX, yBase, prevX, prevY, '#fb923c', 2.6, 'Δr');
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath(); ctx.arc(prevX, prevY, 7, 0, Math.PI * 2); ctx.fill();
      const disp = Math.hypot(prevX - startX, prevY - yBase) * 0.25;
      const sMeters = pathLen * 0.25;
      return {
        scopeTitle: 'Bosib o‘tilgan yo‘l S (ko‘k) va ko‘chish |Δr| (to‘q sariq)',
        traceA: sMeters,
        traceB: disp,
        labelA: `S = ${sMeters.toFixed(1)} m`,
        labelB: `|Δr| = ${disp.toFixed(1)} m`,
        metrics: [
          { label: 'Yo‘l S', value: `${sMeters.toFixed(1)} m`, color: '#22d3ee' },
          { label: 'Ko‘chish |Δr|', value: `${disp.toFixed(1)} m`, color: '#fb923c' },
          { label: 'Nisbat S/|Δr|', value: `${(sMeters / Math.max(0.1, disp)).toFixed(2)}`, color: '#34d399' },
        ],
      };
    }

    case 'uniform_motion': {
      const v1 = p.v1 ?? 18, v2 = p.v2 ?? 10, d = p.d ?? 120;
      const trackL = 48, trackR = w - 48, span = trackR - trackL;
      const maxX = Math.max(d + 80, 260);
      const tMeet = v1 > v2 ? d / (v1 - v2) : null;
      const simT = (t * 1.4) % (tMeet ? Math.min(20, tMeet + 3) : 10);
      const x1 = (v1 * simT) % maxX;
      const x2 = (d + v2 * simT) % maxX;

      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(trackL, h * 0.44); ctx.lineTo(trackR, h * 0.44);
      ctx.moveTo(trackL, h * 0.68); ctx.lineTo(trackR, h * 0.68); ctx.stroke();

      const px1 = trackL + (x1 / maxX) * span;
      const px2 = trackL + (x2 / maxX) * span;
      ctx.fillStyle = '#22d3ee'; ctx.fillRect(px1 - 14, h * 0.44 - 22, 28, 16);
      drawArrow(ctx, px1, h * 0.44 - 14, px1 + v1 * 1.8, h * 0.44 - 14, '#22d3ee', 2, `v₁=${v1}`);
      ctx.fillStyle = '#fb923c'; ctx.fillRect(px2 - 14, h * 0.68 - 22, 28, 16);
      drawArrow(ctx, px2, h * 0.68 - 14, px2 + v2 * 1.8, h * 0.68 - 14, '#fb923c', 2, `v₂=${v2}`);

      return {
        scopeTitle: 'Jismlar koordinatasi x₁(t) va x₂(t)',
        traceA: v1 * simT,
        traceB: d + v2 * simT,
        labelA: `x₁=${(v1 * simT).toFixed(0)} m`,
        labelB: `x₂=${(d + v2 * simT).toFixed(0)} m`,
        metrics: [
          { label: 'Nisbiy tezlik v_nis', value: `${(v1 - v2).toFixed(1)} m/s`, color: '#22d3ee' },
          { label: 'Quvib yetish vaqti', value: tMeet ? `${tMeet.toFixed(1)} s` : 'Quvib yetolmaydi', color: '#34d399' },
        ],
      };
    }

    case 'accelerated_motion': {
      const v0 = p.v0 ?? 4, a = p.a ?? 2.5;
      const simT = t % 8;
      const S = v0 * simT + 0.5 * a * simT * simT;
      const v = v0 + a * simT;
      const px = 48 + clamp(S / 120, 0, 1) * (w - 110);
      const y = h * 0.56;
      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(w - 40, y); ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.roundRect(px - 18, y - 26, 36, 24, 5); ctx.fill();
      drawArrow(ctx, px, y - 34, px + clamp(v * 2.5, -90, 120), y - 34, '#22d3ee', 2.4, `v=${v.toFixed(1)}`);
      drawArrow(ctx, px, y - 52, px + a * 10, y - 52, '#fb923c', 2.2, `a=${a}`);
      return {
        scopeTitle: 'Tezlik v(t) va ko‘chish S(t)',
        traceA: v,
        traceB: S * 0.2,
        labelA: `v = ${v.toFixed(1)} m/s`,
        labelB: `S = ${S.toFixed(1)} m`,
        metrics: [
          { label: 'Oniy tezlik v', value: `${v.toFixed(1)} m/s`, color: '#22d3ee' },
          { label: 'Ko‘chish S', value: `${S.toFixed(1)} m`, color: '#34d399' },
          { label: 'Tezlanish a', value: `${a.toFixed(1)} m/s²`, color: '#fb923c' },
        ],
      };
    }

    case 'projectile': {
      const v0 = p.v0 ?? 35, ang = deg2rad(p.angle ?? 45), g = p.g ?? 9.8;
      const vx = v0 * Math.cos(ang), vy = v0 * Math.sin(ang);
      const tFlight = (2 * vy) / g;
      const Rmax = vx * tFlight;
      const Hmax = (vy * vy) / (2 * g);
      const ox = 48, oy = h - 30, scaleX = (w - 96) / Math.max(80, Rmax * 1.1), scaleY = (h - 60) / Math.max(25, Hmax * 1.2);
      const s = Math.min(scaleX, scaleY);

      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(32, oy); ctx.lineTo(w - 28, oy); ctx.stroke();

      ctx.strokeStyle = 'rgba(34,211,238,0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      for (let i = 0; i <= 50; i++) {
        const ti = (i / 50) * tFlight;
        const x = ox + vx * ti * s;
        const y = oy - (vy * ti - 0.5 * g * ti * ti) * s;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke(); ctx.setLineDash([]);

      const curT = t % (tFlight + 0.6);
      const ct = Math.min(curT, tFlight);
      const cxp = ox + vx * ct * s;
      const cyp = oy - Math.max(0, vy * ct - 0.5 * g * ct * ct) * s;
      const curVy = vy - g * ct;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.arc(cxp, cyp, 8, 0, Math.PI * 2); ctx.fill();
      drawArrow(ctx, cxp, cyp, cxp + vx * 1.3, cyp - curVy * 1.3, '#fb923c', 2.2, 'v⃗');

      return {
        scopeTitle: 'Balandlik y(t) va vertikal tezlik vy(t)',
        traceA: Math.max(0, vy * ct - 0.5 * g * ct * ct),
        traceB: curVy,
        labelA: `y = ${Math.max(0, vy * ct - 0.5 * g * ct * ct).toFixed(1)} m`,
        labelB: `vy = ${curVy.toFixed(1)} m/s`,
        metrics: [
          { label: 'Max masofa L', value: `${Rmax.toFixed(1)} m`, color: '#22d3ee' },
          { label: 'Max balandlik H', value: `${Hmax.toFixed(1)} m`, color: '#34d399' },
          { label: 'Uchish vaqti', value: `${tFlight.toFixed(2)} s`, color: '#fb923c' },
        ],
      };
    }

    case 'circular_motion': {
      const R = p.R ?? 2.5, wOmega = p.omega ?? 3.0;
      const radPx = Math.min(w, h) * 0.34;
      const phi = t * wOmega;
      const px = cx + radPx * Math.cos(phi);
      const py = cy + radPx * Math.sin(phi);
      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, radPx, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = 'rgba(56,189,248,0.45)';
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill();

      const tx = -Math.sin(phi), ty = Math.cos(phi);
      const vLin = wOmega * R, ac = wOmega * wOmega * R;
      drawArrow(ctx, px, py, px + tx * 46, py + ty * 46, '#34d399', 2.4, `v=${vLin.toFixed(1)}`);
      drawArrow(ctx, px, py, px - Math.cos(phi) * 44, py - Math.sin(phi) * 44, '#fb923c', 2.4, `a_m=${ac.toFixed(1)}`);

      return {
        scopeTitle: 'x(t) va y(t) proyeksiyalari garmonik o‘zgarishi',
        traceA: R * Math.cos(phi),
        traceB: R * Math.sin(phi),
        labelA: `x = ${(R * Math.cos(phi)).toFixed(2)} m`,
        labelB: `y = ${(R * Math.sin(phi)).toFixed(2)} m`,
        metrics: [
          { label: 'Chiziqli tezlik v', value: `${vLin.toFixed(2)} m/s`, color: '#34d399' },
          { label: 'Markazga intilma a_m', value: `${ac.toFixed(2)} m/s²`, color: '#fb923c' },
          { label: 'Davr T', value: `${((2 * Math.PI) / wOmega).toFixed(2)} s`, color: '#22d3ee' },
        ],
      };
    }

    // ───────── SECTION 2B ─────────
    case 'newton_laws': {
      const F = p.F ?? 40, m = p.m ?? 8, mu = p.mu ?? 0.25;
      const g = 9.8;
      const FfMax = mu * m * g;
      const net = Math.max(0, F - FfMax);
      const a = net / m;
      const simT = t % 6;
      const xPos = 60 + clamp(0.5 * a * simT * simT * 4, 0, w - 150);
      const floorY = h * 0.65;
      ctx.strokeStyle = 'rgba(148,163,184,0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(30, floorY); ctx.lineTo(w - 30, floorY); ctx.stroke();
      ctx.fillStyle = 'rgba(56,189,248,0.28)';
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath(); ctx.roundRect(xPos, floorY - 44, 58, 44, 6); ctx.fill(); ctx.stroke();
      const bx = xPos + 29, by = floorY - 22;
      drawArrow(ctx, bx + 29, by, bx + 29 + F * 1.4, by, '#34d399', 2.8, `F=${F}N`);
      drawArrow(ctx, bx - 29, by, bx - 29 - Math.min(F, FfMax) * 1.4, by, '#fb923c', 2.6, `F_i=${Math.min(F, FfMax).toFixed(0)}N`);
      drawArrow(ctx, bx, by, bx, by - 46, '#22d3ee', 2, 'N');
      drawArrow(ctx, bx, by, bx, by + 46, '#a78bfa', 2, 'mg');
      return {
        scopeTitle: 'Tezlanish a va natijaviy kuch F_nat',
        traceA: net,
        traceB: a * simT,
        labelA: `F_nat = ${net.toFixed(1)} N`,
        labelB: `v = ${(a * simT).toFixed(1)} m/s`,
        metrics: [
          { label: 'Ishqalanish kuchi', value: `${FfMax.toFixed(1)} N`, color: '#fb923c' },
          { label: 'Natijaviy kuch', value: `${net.toFixed(1)} N`, color: '#34d399' },
          { label: 'Tezlanish a', value: `${a.toFixed(2)} m/s²`, color: '#22d3ee' },
        ],
      };
    }

    case 'gravitation': {
      const m1 = p.m1 ?? 100, r = p.r ?? 2.0, ay = p.ay ?? 0;
      const g = 9.8, weight = m1 * Math.max(0, g + ay);
      const liftY = clamp(cy - ay * 4, 48, h - 68);
      ctx.strokeStyle = 'rgba(56,189,248,0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(cx - 56, liftY - 44, 112, 88);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(cx - 18, liftY + 8, 36, 28);
      drawArrow(ctx, cx, liftY + 22, cx, liftY + 22 + 34, '#a78bfa', 2.2, 'mg');
      drawArrow(ctx, cx, liftY + 22, cx, liftY + 22 - clamp(weight / 35, 0, 56), '#34d399', 2.4, `P=${weight.toFixed(0)}N`);
      const fgRel = 1 / (r * r);
      drawLabelPill(ctx, ay <= -9.8 ? 'VAZNSIZLIK!' : ay > 0 ? 'O‘ta yuklanish' : 'Normal / Yengillashgan', 24, 18);
      return {
        scopeTitle: 'Liftdagi vazn P va gravitatsiya F(r) ~ 1/r²',
        traceA: weight,
        traceB: fgRel * 1000,
        labelA: `P = ${weight.toFixed(0)} N`,
        labelB: `g_masofa ~ ${(fgRel * 100).toFixed(0)}%`,
        metrics: [
          { label: 'Jism vazni P', value: `${weight.toFixed(0)} N`, color: '#34d399' },
          { label: 'Yuklanish n = P/mg', value: `${(weight / (m1 * g)).toFixed(2)} g`, color: '#22d3ee' },
          { label: 'Masofa omili (R/r)²', value: `${fgRel.toFixed(3)}`, color: '#a78bfa' },
        ],
      };
    }

    case 'spring_friction': {
      const k = p.k ?? 50, m = p.m ?? 2.0, mu = p.mu ?? 0.08;
      const w0 = Math.sqrt(k / m);
      const damp = mu * 2.4;
      const x = Math.exp(-damp * ((t % 7) * 0.4)) * Math.cos(w0 * (t % 7));
      const boxX = cx + x * (w * 0.25);
      const y = cy + 12;
      ctx.strokeStyle = 'rgba(148,163,184,0.45)';
      ctx.beginPath(); ctx.moveTo(42, y - 50); ctx.lineTo(42, y + 32); ctx.lineTo(w - 30, y + 32); ctx.stroke();
      drawSpring(ctx, 42, y, boxX - 24, y, 12, 10, '#38bdf8');
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath(); ctx.roundRect(boxX - 24, y - 22, 48, 44, 6); ctx.fill();
      drawArrow(ctx, boxX, y - 34, boxX - x * 60, y - 34, '#fb923c', 2.4, 'F_el=-kx');
      return {
        scopeTitle: 'Prujinaning so‘nuvchi tebranishlari x(t)',
        traceA: x,
        traceB: -x * k * 0.05,
        labelA: `x = ${(x * 20).toFixed(1)} sm`,
        labelB: `F_el = ${(-x * k * 0.2).toFixed(1)} N`,
        metrics: [
          { label: 'Xususiy chastota ω₀', value: `${w0.toFixed(2)} rad/s`, color: '#22d3ee' },
          { label: 'Bikrlik k', value: `${k} N/m`, color: '#34d399' },
          { label: 'Ishqalanish μ', value: `${mu.toFixed(2)}`, color: '#fb923c' },
        ],
      };
    }

    case 'noninertial_coriolis': {
      const omega = p.omega ?? 2.0, vrad = p.vrad ?? 40;
      const R = Math.min(w, h) * 0.36;
      const diskAng = t * omega;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(diskAng);
      ctx.strokeStyle = 'rgba(56,189,248,0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, R, 0, Math.PI * 2); ctx.stroke();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(R * Math.cos(a), R * Math.sin(a)); ctx.stroke();
      }
      ctx.restore();

      const prog = ((t * vrad * 0.025) % 1);
      const pr = prog * R;
      const curAng = -prog * omega * 1.4;
      const px = cx + pr * Math.cos(curAng);
      const py = cy + pr * Math.sin(curAng);
      ctx.fillStyle = '#fb923c';
      ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
      const Fcf = omega * omega * (pr * 0.01);
      const Fcor = 2 * omega * vrad * 0.02;
      drawArrow(ctx, px, py, px + Math.cos(curAng) * 32, py + Math.sin(curAng) * 32, '#22d3ee', 2, 'F_mq');
      drawArrow(ctx, px, py, px - Math.sin(curAng) * 32, py + Math.cos(curAng) * 32, '#a78bfa', 2, 'F_K');
      return {
        scopeTitle: 'Markazdan qochma va Koriolis inersiya kuchlari',
        traceA: Fcf,
        traceB: Fcor,
        labelA: `F_mq ∝ ω²r`,
        labelB: `F_Kor = 2mωv`,
        metrics: [
          { label: 'Burchak tezlik ω', value: `${omega.toFixed(1)} rad/s`, color: '#22d3ee' },
          { label: 'Koriolis tezlanishi', value: `${(2 * omega * vrad * 0.01).toFixed(2)} m/s²`, color: '#a78bfa' },
        ],
      };
    }

    // ───────── SECTION 2C ─────────
    case 'momentum_rocket': {
      const m1 = p.m1 ?? 5, v1 = p.v1 ?? 6, m2 = p.m2 ?? 5, v2 = p.v2 ?? -2;
      const pTot = m1 * v1 + m2 * v2;
      const simT = t % 4;
      const x1 = clamp(cx - 120 + v1 * simT * 10, 40, w - 40);
      const x2 = clamp(cx + 120 + v2 * simT * 10, 40, w - 40);
      const py = cy + 6;
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(x1, py, 14 + m1, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(x2, py, 14 + m2, 0, Math.PI * 2); ctx.fill();
      drawArrow(ctx, x1, py - 28, x1 + v1 * 8, py - 28, '#22d3ee', 2.2, `p₁=${(m1 * v1).toFixed(0)}`);
      drawArrow(ctx, x2, py - 28, x2 + v2 * 8, py - 28, '#fb923c', 2.2, `p₂=${(m2 * v2).toFixed(0)}`);
      return {
        scopeTitle: 'To‘liq impuls Σp = const saqlanishi',
        traceA: m1 * v1,
        traceB: pTot,
        labelA: `p₁ = ${m1 * v1}`,
        labelB: `Σp = ${pTot}`,
        metrics: [
          { label: '1-jism impulsi', value: `${m1 * v1} kg·m/s`, color: '#22d3ee' },
          { label: '2-jism impulsi', value: `${m2 * v2} kg·m/s`, color: '#fb923c' },
          { label: 'Umumiy impuls Σp', value: `${pTot} kg·m/s`, color: '#34d399' },
        ],
      };
    }

    case 'work_energy': {
      const m = p.m ?? 4, hStart = p.h ?? 20, loss = p.loss ?? 5;
      const g = 9.8, E0 = m * g * hStart;
      const damp = (loss / 100) * 0.4;
      const phase = Math.cos(t * 2.2) * Math.exp(-damp * (t % 8) * 0.35);
      const curH = hStart * (1 - phase * phase) * 0.85 + hStart * 0.15 * (1 - phase);
      const hFrac = clamp(Math.abs(phase), 0, 1);
      const px = cx + phase * (w * 0.3);
      const py = 46 + (1 - hFrac * hFrac) * (h - 76);

      ctx.strokeStyle = 'rgba(56,189,248,0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = -20; i <= 20; i++) {
        const s = i / 20;
        const tx = cx + s * (w * 0.32);
        const ty = 46 + (1 - s * s) * (h - 76);
        if (i === -20) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
      }
      ctx.stroke();
      ctx.fillStyle = '#34d399';
      ctx.beginPath(); ctx.arc(px, py, 12, 0, Math.PI * 2); ctx.fill();

      const Ep = E0 * (hFrac * hFrac);
      const Ek = Math.max(0, E0 * (1 - damp * 0.3) - Ep);
      return {
        scopeTitle: 'Kinetik (yashil) va Potensial (ko‘k) energiyalar almashinuvi',
        traceA: Ek,
        traceB: Ep,
        labelA: `E_k = ${Ek.toFixed(0)} J`,
        labelB: `E_p = ${Ep.toFixed(0)} J`,
        metrics: [
          { label: 'To‘liq boshlang‘ich E₀', value: `${E0.toFixed(0)} J`, color: '#22d3ee' },
          { label: 'Kinetik E_k', value: `${Ek.toFixed(0)} J`, color: '#34d399' },
          { label: 'Potensial E_p', value: `${Ep.toFixed(0)} J`, color: '#a78bfa' },
        ],
      };
    }

    case 'collisions': {
      const m1 = p.m1 ?? 4, v1 = p.v1 ?? 8, m2 = p.m2 ?? 4, e = p.e ?? 1.0;
      const v1p = ((m1 - e * m2) * v1) / (m1 + m2);
      const v2p = ((1 + e) * m1 * v1) / (m1 + m2);
      const cyc = (t * 0.9) % 4;
      const hitT = 1.6;
      const xHit = cx;
      const px1 = cyc < hitT ? xHit - (hitT - cyc) * v1 * 18 : xHit + (cyc - hitT) * v1p * 18;
      const px2 = cyc < hitT ? xHit + 28 : xHit + 28 + (cyc - hitT) * v2p * 18;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(30, cy + 20); ctx.lineTo(w - 30, cy + 20); ctx.stroke();
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(clamp(px1, 30, w - 30), cy, 14 + m1, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(clamp(px2, 30, w - 30), cy, 14 + m2, 0, Math.PI * 2); ctx.fill();

      const EkBefore = 0.5 * m1 * v1 * v1;
      const EkAfter = 0.5 * m1 * v1p * v1p + 0.5 * m2 * v2p * v2p;
      return {
        scopeTitle: 'To‘qnashuvdan oldin va keyin kinetik energiya',
        traceA: cyc < hitT ? EkBefore : EkAfter,
        traceB: m1 * v1,
        labelA: `E_k = ${(cyc < hitT ? EkBefore : EkAfter).toFixed(1)} J`,
        labelB: `Σp = ${m1 * v1}`,
        metrics: [
          { label: 'v₁′ (keyin)', value: `${v1p.toFixed(2)} m/s`, color: '#22d3ee' },
          { label: 'v₂′ (keyin)', value: `${v2p.toFixed(2)} m/s`, color: '#fb923c' },
          { label: 'Qolgan energiya', value: `${((EkAfter / EkBefore) * 100).toFixed(0)}%`, color: '#34d399' },
        ],
      };
    }

    // ───────── SECTION 2D ─────────
    case 'lever_torque': {
      const m1 = p.m1 ?? 6, d1 = p.d1 ?? 2.0, m2 = p.m2 ?? 4, d2 = p.d2 ?? 3.0;
      const M1 = m1 * 9.8 * d1, M2 = m2 * 9.8 * d2;
      const netM = M2 - M1;
      const tilt = clamp(netM * 0.004, -0.32, 0.32);
      const pxPerM = (w * 0.38) / 4;
      ctx.save();
      ctx.translate(cx, cy + 16);
      ctx.fillStyle = '#475569';
      ctx.beginPath(); ctx.moveTo(-18, 42); ctx.lineTo(18, 42); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
      ctx.rotate(tilt);
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath(); ctx.roundRect(-w * 0.4, -6, w * 0.8, 12, 5); ctx.fill();
      ctx.fillStyle = '#22d3ee'; ctx.fillRect(-d1 * pxPerM - 18, -42, 36, 36);
      ctx.fillStyle = '#fb923c'; ctx.fillRect(d2 * pxPerM - 18, -42, 36, 36);
      ctx.restore();
      return {
        scopeTitle: 'Chap va o‘ng kuch momentlari M₁ va M₂',
        traceA: M1,
        traceB: M2,
        labelA: `M₁=${M1.toFixed(1)} N·m`,
        labelB: `M₂=${M2.toFixed(1)} N·m`,
        metrics: [
          { label: 'Chap moment M₁', value: `${M1.toFixed(1)} N·m`, color: '#22d3ee' },
          { label: 'O‘ng moment M₂', value: `${M2.toFixed(1)} N·m`, color: '#fb923c' },
          { label: 'Holat', value: Math.abs(netM) < 2 ? 'MUVOZANAT' : netM > 0 ? 'O‘ngga og‘moqda' : 'Chapga og‘moqda', color: '#34d399' },
        ],
      };
    }

    case 'angular_momentum': {
      const m = p.m ?? 2.0, r = p.r ?? 0.8, L = p.L ?? 12;
      const I = m * r * r;
      const omega = L / Math.max(0.05, I);
      const ang = t * omega * 0.6;
      const radPx = r * 55;
      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.beginPath(); ctx.arc(cx, cy, radPx, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      const x1 = cx + radPx * Math.cos(ang), y1 = cy + radPx * Math.sin(ang);
      const x2 = cx - radPx * Math.cos(ang), y2 = cy - radPx * Math.sin(ang);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath(); ctx.arc(x1, y1, 10 + m, 0, Math.PI * 2); ctx.arc(x2, y2, 10 + m, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Impuls momenti L = Iω saqlanganda burchak tezlik ω(t)',
        traceA: omega,
        traceB: I,
        labelA: `ω = ${omega.toFixed(2)} rad/s`,
        labelB: `I = ${I.toFixed(2)} kg·m²`,
        metrics: [
          { label: 'Inersiya momenti I', value: `${I.toFixed(2)} kg·m²`, color: '#a78bfa' },
          { label: 'Burchak tezlik ω', value: `${omega.toFixed(2)} rad/s`, color: '#22d3ee' },
          { label: 'Aylanish energiyasi', value: `${((0.5 * L * L) / I).toFixed(1)} J`, color: '#34d399' },
        ],
      };
    }

    case 'center_of_mass': {
      const m1 = p.m1 ?? 8, m2 = p.m2 ?? 4, tiltDeg = p.tilt ?? 12;
      const xComNorm = (m2 - m1) / (m1 + m2);
      const rad = deg2rad(tiltDeg);
      const rodHalf = w * 0.34;
      const comPx = xComNorm * rodHalf * 0.8;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rad);
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(-rodHalf, 0); ctx.lineTo(rodHalf, 0); ctx.stroke();
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(-rodHalf * 0.8, 0, 10 + m1, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(rodHalf * 0.8, 0, 10 + m2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#34d399'; ctx.beginPath(); ctx.arc(comPx, 0, 7, 0, Math.PI * 2); ctx.fill();
      drawArrow(ctx, comPx, 0, comPx, 48, '#34d399', 2.4, 'COM');
      ctx.restore();
      return {
        scopeTitle: 'Massalar markazi siljishi va og‘ish momenti',
        traceA: comPx,
        traceB: Math.sin(rad) * 100,
        labelA: `x_cm = ${(xComNorm * 100).toFixed(0)}%`,
        labelB: `Og‘ish: ${tiltDeg}°`,
        metrics: [
          { label: 'Massalar markazi', value: `${(xComNorm * 50).toFixed(1)} sm`, color: '#34d399' },
          { label: 'Umumiy massa', value: `${m1 + m2} kg`, color: '#22d3ee' },
        ],
      };
    }

    // ───────── SECTION 2E ─────────
    case 'hydrostatics': {
      const rhoO = p.rhoObj ?? 700, rhoF = p.rhoFl ?? 1000, depth = p.depth ?? 2.0;
      const waterTop = h * 0.34;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
      ctx.fillRect(48, waterTop, w - 96, h - waterTop - 16);
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath(); ctx.moveTo(48, waterTop); ctx.lineTo(w - 48, waterTop); ctx.stroke();

      const subm = clamp(rhoO / rhoF, 0.1, 1.0);
      const boxH = 54;
      const boxY = rhoO > rhoF ? h - 18 - boxH : waterTop - boxH * (1 - subm);
      ctx.fillStyle = rhoO > rhoF ? '#fb923c' : '#34d399';
      ctx.beginPath(); ctx.roundRect(cx - 32, boxY, 64, boxH, 6); ctx.fill();
      drawArrow(ctx, cx, boxY + boxH / 2, cx, boxY + boxH / 2 - 42, '#22d3ee', 2.4, 'F_A');
      drawArrow(ctx, cx, boxY + boxH / 2, cx, boxY + boxH / 2 + 42 * (rhoO / rhoF), '#fb923c', 2.4, 'mg');
      const Pabs = 101.3 + (rhoF * 9.8 * depth) / 1000;
      return {
        scopeTitle: 'Gidrostatik bosim P(h) va Arximed ko‘tarish kuchi',
        traceA: Pabs,
        traceB: subm * 100,
        labelA: `P = ${Pabs.toFixed(1)} kPa`,
        labelB: `Botish: ${(subm * 100).toFixed(0)}%`,
        metrics: [
          { label: 'Gidrostatik bosim', value: `${Pabs.toFixed(1)} kPa`, color: '#22d3ee' },
          { label: 'Botgan qism', value: `${(subm * 100).toFixed(0)}%`, color: '#34d399' },
          { label: 'Holat', value: rhoO > rhoF ? 'Cho‘kadi' : 'Suzadi', color: '#fb923c' },
        ],
      };
    }

    case 'bernoulli': {
      const v1 = p.v1 ?? 2.0, ratio = p.ratio ?? 2.5, visc = p.visc ?? 1.0;
      const v2 = v1 * ratio;
      const rho = 1000;
      const dP = 0.5 * rho * (v2 * v2 - v1 * v1) / 1000;
      const midY = cy;
      // Venturi pipe outline
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2.5;
      ctx.fillStyle = 'rgba(56,189,248,0.1)';
      ctx.beginPath();
      ctx.moveTo(40, midY - 46); ctx.lineTo(w * 0.35, midY - 46);
      ctx.lineTo(w * 0.45, midY - 46 / Math.sqrt(ratio));
      ctx.lineTo(w * 0.55, midY - 46 / Math.sqrt(ratio));
      ctx.lineTo(w * 0.65, midY - 46);
      ctx.lineTo(w - 40, midY - 46);
      ctx.lineTo(w - 40, midY + 46);
      ctx.lineTo(w * 0.65, midY + 46);
      ctx.lineTo(w * 0.55, midY + 46 / Math.sqrt(ratio));
      ctx.lineTo(w * 0.45, midY + 46 / Math.sqrt(ratio));
      ctx.lineTo(w * 0.35, midY + 46);
      ctx.lineTo(40, midY + 46);
      ctx.closePath(); ctx.fill(); ctx.stroke();

      // Moving fluid tracer particles
      for (let i = 0; i < 16; i++) {
        const s = ((i / 16) + t * v1 * 0.08) % 1;
        const px = 45 + s * (w - 90);
        const narrow = px > w * 0.4 && px < w * 0.6 ? 1 / Math.sqrt(ratio) : 1;
        const py = midY + Math.sin(i * 3.1) * 32 * narrow;
        ctx.fillStyle = '#22d3ee';
        ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fill();
      }
      const Re = Math.round((v2 * 2000) / Math.max(0.2, visc));
      return {
        scopeTitle: 'Tor qismda tezlik v₂ va bosim pasayishi ΔP',
        traceA: v2,
        traceB: dP,
        labelA: `v₂ = ${v2.toFixed(1)} m/s`,
        labelB: `ΔP = ${dP.toFixed(1)} kPa`,
        metrics: [
          { label: 'Tor qism tezligi v₂', value: `${v2.toFixed(1)} m/s`, color: '#22d3ee' },
          { label: 'Bosim farqi ΔP', value: `${dP.toFixed(2)} kPa`, color: '#34d399' },
          { label: 'Oqim rejimi (Re)', value: `${Re} (${Re > 2300 ? 'Turbulent' : 'Laminar'})`, color: '#fb923c' },
        ],
      };
    }

    // ───────── SECTION 3 ─────────
    case 'harmonic_oscillation': {
      const amp = p.amp ?? 20, l = p.l ?? 1.0, g = p.g ?? 9.8;
      const w0 = Math.sqrt(g / l);
      const T = (2 * Math.PI) / w0;
      const theta = deg2rad(amp) * Math.cos(w0 * t);
      const lenPx = clamp(l * 90, 60, h * 0.68);
      const bx = cx + lenPx * Math.sin(theta), by = 24 + lenPx * Math.cos(theta);
      ctx.fillStyle = '#475569'; ctx.fillRect(cx - 40, 18, 80, 8);
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(cx, 24); ctx.lineTo(bx, by); ctx.stroke();
      ctx.fillStyle = '#a78bfa'; ctx.beginPath(); ctx.arc(bx, by, 14, 0, Math.PI * 2); ctx.fill();
      drawArrow(ctx, bx, by, bx + Math.cos(theta) * (-Math.sin(w0 * t)) * 38, by - Math.sin(theta) * (-Math.sin(w0 * t)) * 38, '#22d3ee', 2, 'v⃗');
      return {
        scopeTitle: 'Garmonik og‘ish θ(t) va burchak tezligi',
        traceA: amp * Math.cos(w0 * t),
        traceB: -amp * w0 * Math.sin(w0 * t),
        labelA: `θ(t)`,
        labelB: `v(t)`,
        metrics: [
          { label: 'Tebranish davri T', value: `${T.toFixed(2)} s`, color: '#22d3ee' },
          { label: 'Chastota ν', value: `${(1 / T).toFixed(2)} Hz`, color: '#a78bfa' },
          { label: 'Sikllik chastota ω₀', value: `${w0.toFixed(2)} rad/s`, color: '#34d399' },
        ],
      };
    }

    case 'damped_resonance': {
      const w0 = p.w0 ?? 6, omega = p.omega ?? 5.5, beta = p.beta ?? 0.5;
      const A = 18 / Math.sqrt(Math.pow(w0 * w0 - omega * omega, 2) + 4 * beta * beta * omega * omega);
      const ox = 48, oy = h - 28, pw = w - 96, ph = h - 56;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(ox, 20); ctx.lineTo(ox, oy); ctx.lineTo(w - 30, oy); ctx.stroke();
      ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const wi = 0.5 + (i / 80) * 14;
        const ai = 18 / Math.sqrt(Math.pow(w0 * w0 - wi * wi, 2) + 4 * beta * beta * wi * wi);
        const px = ox + (i / 80) * pw;
        const py = oy - clamp(ai / 4.5, 0, 1) * ph;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      const curX = ox + clamp((omega - 0.5) / 14, 0, 1) * pw;
      const curY = oy - clamp(A / 4.5, 0, 1) * ph;
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(curX, curY, 7, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Majburiy tebranishlar amplitudasi A(ω)',
        traceA: A * Math.cos(omega * t),
        traceB: Math.cos(omega * t),
        labelA: `Rezonans A = ${A.toFixed(2)}`,
        labelB: `Tashqi kuch`,
        metrics: [
          { label: 'Amplituda A', value: `${A.toFixed(2)}`, color: '#22d3ee' },
          { label: 'Holat', value: Math.abs(w0 - omega) < 0.7 ? 'REZONANS!' : 'Majburiy rejim', color: '#fb923c' },
        ],
      };
    }

    case 'wave_interference': {
      const amp = p.amp ?? 30, lam = p.lambda ?? 120, phase = deg2rad(p.phase ?? 0);
      ctx.lineWidth = 2.4;
      const drawW = (fn, col, dash = []) => {
        ctx.strokeStyle = col; ctx.setLineDash(dash); ctx.beginPath();
        for (let x = 24; x <= w - 24; x += 4) {
          const y = cy + fn((x - 24) / lam, t);
          if (x === 24) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke(); ctx.setLineDash([]);
      };
      drawW((k, tm) => amp * Math.sin(k * Math.PI * 2 - tm * 4), 'rgba(34,211,238,0.45)', [4, 4]);
      drawW((k, tm) => amp * Math.sin(k * Math.PI * 2 - tm * 4 + phase), 'rgba(167,139,250,0.45)', [4, 4]);
      drawW((k, tm) => amp * (Math.sin(k * Math.PI * 2 - tm * 4) + Math.sin(k * Math.PI * 2 - tm * 4 + phase)), '#34d399');
      const netAmp = 2 * amp * Math.abs(Math.cos(phase / 2));
      return {
        scopeTitle: 'Superpozitsiya: y₁ + y₂ (yashil natija)',
        traceA: amp * Math.sin(t * 4),
        traceB: amp * (Math.sin(t * 4) + Math.sin(t * 4 + phase)),
        labelA: `y₁`,
        labelB: `Natija y`,
        metrics: [
          { label: 'Natijaviy amplituda', value: `${netAmp.toFixed(1)}`, color: '#34d399' },
          { label: 'Fazalar farqi Δφ', value: `${p.phase ?? 0}°`, color: '#a78bfa' },
        ],
      };
    }

    case 'doppler_acoustics': {
      const vs = p.vs ?? 120, nu0 = p.nu0 ?? 440;
      const cSound = 340;
      const vNorm = (vs / cSound) * 0.45;
      const sx = ((t * vs * 0.25) % (w - 120)) + 60;
      for (let i = 0; i < 6; i++) {
        const age = ((t * 1.6 + i * 0.28) % 1.7);
        const rx = age * 95;
        const cxRing = sx - vNorm * rx * 1.8;
        ctx.strokeStyle = `rgba(167,139,250,${clamp(1 - age / 1.7, 0.05, 0.75)})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cxRing, cy, rx, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(sx, cy, 10, 0, Math.PI * 2); ctx.fill();
      const nuFront = nu0 * (cSound / Math.max(10, cSound - vs));
      const nuBack = nu0 * (cSound / (cSound + vs));
      return {
        scopeTitle: 'Oldinda (ko‘k) va orqada (to‘q sariq) tovush to‘lqini chastotasi',
        traceA: Math.sin(t * nuFront * 0.04),
        traceB: Math.sin(t * nuBack * 0.04),
        labelA: `Oldinda: ${nuFront.toFixed(0)} Hz`,
        labelB: `Orqada: ${nuBack.toFixed(0)} Hz`,
        metrics: [
          { label: 'Oldidagi chastota', value: `${nuFront.toFixed(0)} Hz`, color: '#22d3ee' },
          { label: 'Orqadagi chastota', value: `${nuBack.toFixed(0)} Hz`, color: '#fb923c' },
          { label: 'Max soni M = v/c', value: `${(vs / cSound).toFixed(2)}`, color: '#a78bfa' },
        ],
      };
    }

    // ───────── SECTION 4 ─────────
    case 'molecular_brownian': {
      const T = p.T ?? 300, count = p.count ?? 45;
      const speed = Math.sqrt(T / 300) * 1.4;
      const rx = 44, ry = 20, rw = w - 88, rh = h - 38;
      ctx.strokeStyle = 'rgba(251,146,60,0.45)'; ctx.strokeRect(rx, ry, rw, rh);
      for (let i = 0; i < count; i++) {
        const px = rx + 8 + (Math.abs(Math.sin(i * 3.17 + t * speed * (0.7 + (i % 5) * 0.15))) * (rw - 16));
        const py = ry + 8 + (Math.abs(Math.cos(i * 5.41 + t * speed * (0.6 + (i % 7) * 0.12))) * (rh - 16));
        ctx.fillStyle = i === 0 ? '#22d3ee' : 'rgba(251,146,60,0.85)';
        ctx.beginPath(); ctx.arc(px, py, i === 0 ? 11 : 3.6, 0, Math.PI * 2); ctx.fill();
      }
      const vRms = 483 * Math.sqrt(T / 300);
      return {
        scopeTitle: 'Molekulalarning o‘rtacha kvadratik tezligi va E_k',
        traceA: vRms * (1 + 0.08 * Math.sin(t * 9)),
        traceB: T,
        labelA: `v_kv ≈ ${vRms.toFixed(0)} m/s`,
        labelB: `T = ${T} K`,
        metrics: [
          { label: 'O‘rtacha tezlik (N₂)', value: `${vRms.toFixed(0)} m/s`, color: '#fb923c' },
          { label: 'Kinetik energiya', value: `${(1.5 * 1.38e-23 * T * 1e21).toFixed(2)}×10⁻²¹ J`, color: '#22d3ee' },
        ],
      };
    }

    case 'ideal_gas': {
      const T = p.T ?? 300, V = p.V ?? 20, N = p.N ?? 40;
      const P = (N * 8.31 * T * 0.05) / Math.max(5, V);
      const boxW = clamp(V * 8, 90, w - 120);
      const bx = cx - boxW / 2, by = 28, bh = h - 52;
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.strokeRect(bx, by, boxW, bh);
      // Piston
      ctx.fillStyle = '#64748b'; ctx.fillRect(bx + boxW - 10, by, 14, bh);
      const spd = Math.sqrt(T / 300) * 1.5;
      for (let i = 0; i < N; i++) {
        const px = bx + 8 + Math.abs(Math.sin(i * 2.1 + t * spd)) * (boxW - 24);
        const py = by + 8 + Math.abs(Math.cos(i * 4.3 + t * spd * 1.1)) * (bh - 16);
        ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'Gaz bosimi P = nkT devorga urilish impulslari',
        traceA: P,
        traceB: T,
        labelA: `P = ${P.toFixed(1)} kPa`,
        labelB: `T = ${T} K`,
        metrics: [
          { label: 'Bosim P', value: `${P.toFixed(1)} kPa`, color: '#fb923c' },
          { label: 'Hajm V', value: `${V} L`, color: '#22d3ee' },
          { label: 'Harorat T', value: `${T} K`, color: '#34d399' },
        ],
      };
    }

    case 'isoprocesses': {
      const mIdx = Math.round(p.modeIdx ?? 1);
      const Vrat = p.Vratio ?? 2.0, T1 = p.T1 ?? 300;
      const labels = ['Izotermik (T=const)', 'Izobarik (P=const)', 'Izoxorik (V=const)', 'Adiabatik (Q=0)'];
      const ox = 54, oy = h - 30, pw = w - 108, ph = h - 56;
      ctx.strokeStyle = 'rgba(148,163,184,0.4)';
      ctx.beginPath(); ctx.moveTo(ox, 20); ctx.lineTo(ox, oy); ctx.lineTo(w - 30, oy); ctx.stroke();
      ctx.strokeStyle = '#fb923c'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const s = i / 40;
        let x, y;
        if (mIdx === 1) { x = ox + (0.2 + s * 0.6) * pw; y = oy - (0.3 / (0.2 + s * 0.6)) * ph * 0.55; }
        else if (mIdx === 2) { x = ox + (0.2 + s * 0.6) * pw; y = oy - 0.55 * ph; }
        else if (mIdx === 3) { x = ox + 0.45 * pw; y = oy - (0.25 + s * 0.55) * ph; }
        else { x = ox + (0.2 + s * 0.6) * pw; y = oy - (0.14 / Math.pow(0.2 + s * 0.6, 1.4)) * ph * 0.3; }
        if (i === 0) ctx.moveTo(x, clamp(y, 24, oy)); else ctx.lineTo(x, clamp(y, 24, oy));
      }
      ctx.stroke();
      drawLabelPill(ctx, `${labels[mIdx - 1] || labels[0]} (P-V diagramma)`, ox + 12, 22);
      const T2 = mIdx === 1 ? T1 : mIdx === 2 ? T1 * Vrat : mIdx === 4 ? T1 * Math.pow(1 / Vrat, 0.4) : T1 * Vrat;
      return {
        scopeTitle: 'P-V izoprotsess holat o‘zgarishi',
        traceA: T2,
        traceB: Vrat * 100,
        labelA: `T₂ = ${T2.toFixed(0)} K`,
        labelB: `V₂/V₁ = ${Vrat}`,
        metrics: [
          { label: 'Jarayon', value: labels[mIdx - 1] || labels[0], color: '#fb923c' },
          { label: 'Yakuniy T₂', value: `${T2.toFixed(0)} K`, color: '#22d3ee' },
        ],
      };
    }

    case 'heat_transfer': {
      const c = p.c ?? 4200, P = p.P ?? 2000, m = p.m ?? 2.0;
      const rate = P / (c * m);
      const dT = Math.min(80, rate * (t % 25) * 3);
      const frac = dT / 80;
      ctx.strokeStyle = '#38bdf8'; ctx.strokeRect(cx - 60, 42, 120, h - 76);
      const grad = ctx.createLinearGradient(0, 42, 0, h - 34);
      grad.addColorStop(0, `rgba(251,146,60,${0.25 + frac * 0.55})`);
      grad.addColorStop(1, 'rgba(34,211,238,0.3)');
      ctx.fillStyle = grad; ctx.fillRect(cx - 58, 60, 116, h - 96);
      drawLabelPill(ctx, `Q = P·t = ${(P * (t % 25) * 3 / 1000).toFixed(1)} kJ | +${dT.toFixed(1)} °C`, 24, 18);
      return {
        scopeTitle: 'Haroratning vaqt bo‘yicha o‘sishi ΔT(t)',
        traceA: dT,
        traceB: rate * 100,
        labelA: `ΔT = ${dT.toFixed(1)} K`,
        labelB: `Tezlik = ${(rate * 60).toFixed(1)} K/min`,
        metrics: [
          { label: 'Isish tezligi', value: `${(rate * 60).toFixed(2)} K/min`, color: '#fb923c' },
          { label: 'Issiqlik Q(10s)', value: `${(P * 10 / 1000).toFixed(1)} kJ`, color: '#22d3ee' },
        ],
      };
    }

    case 'thermo_laws': {
      const Q = p.Q ?? 500, T = p.T ?? 300;
      const dS = Q / T;
      const W = Q * 0.4, dU = Q - W;
      ctx.fillStyle = 'rgba(251,146,60,0.22)'; ctx.fillRect(cx - 130, cy - 30, 80, 60);
      ctx.fillStyle = 'rgba(34,211,238,0.22)'; ctx.fillRect(cx + 50, cy - 30, 80, 60);
      drawArrow(ctx, cx - 46, cy, cx + 46, cy, '#34d399', 3, `ΔS=+${dS.toFixed(2)}`);
      drawLabelPill(ctx, `Q = ΔU + A | ${Q} = ${dU} + ${W} J`, 24, 18);
      return {
        scopeTitle: '1-qonun (Q = ΔU + A) va entropiya o‘zgarishi ΔS',
        traceA: Q,
        traceB: dS * 100,
        labelA: `Q = ${Q} J`,
        labelB: `ΔS = ${dS.toFixed(2)} J/K`,
        metrics: [
          { label: 'Ichki energiya ΔU', value: `${dU.toFixed(0)} J`, color: '#fb923c' },
          { label: 'Gaz ishi A', value: `${W.toFixed(0)} J`, color: '#22d3ee' },
          { label: 'Entropiya ΔS', value: `${dS.toFixed(2)} J/K`, color: '#34d399' },
        ],
      };
    }

    case 'carnot_cycle': {
      const T1 = p.T1 ?? 600, T2 = p.T2 ?? 300;
      const eta = Math.max(0, 1 - T2 / Math.max(T2 + 1, T1));
      const pts = [[0.25, 0.25], [0.55, 0.38], [0.75, 0.72], [0.38, 0.60]];
      const ox = 60, oy = h - 28, pw = w - 120, ph = h - 56;
      ctx.strokeStyle = '#fb923c'; ctx.fillStyle = 'rgba(251,146,60,0.16)'; ctx.lineWidth = 2.6;
      ctx.beginPath();
      pts.forEach(([sx, sy], i) => {
        const px = ox + sx * pw, py = oy - sy * ph;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      });
      ctx.closePath(); ctx.fill(); ctx.stroke();
      const idx = (t * 0.6) % 4;
      const i0 = Math.floor(idx), i1 = (i0 + 1) % 4, f = idx - i0;
      const mx = ox + (pts[i0][0] * (1 - f) + pts[i1][0] * f) * pw;
      const my = oy - (pts[i0][1] * (1 - f) + pts[i1][1] * f) * ph;
      ctx.fillStyle = '#34d399'; ctx.beginPath(); ctx.arc(mx, my, 7, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Karno FIK va foydali ish A',
        traceA: eta * 100,
        traceB: T1 - T2,
        labelA: `FIK η = ${(eta * 100).toFixed(1)}%`,
        labelB: `ΔT = ${T1 - T2} K`,
        metrics: [
          { label: 'Maksimal FIK η', value: `${(eta * 100).toFixed(1)}%`, color: '#34d399' },
          { label: 'Isitkich T₁', value: `${T1} K`, color: '#fb923c' },
          { label: 'Sovitkich T₂', value: `${T2} K`, color: '#22d3ee' },
        ],
      };
    }

    case 'phase_transition': {
      const m = p.m ?? 1.0, P = p.P ?? 500;
      const cyc = (t * 0.4) % 10;
      let T = -20, phase = 'Muz (qattiq)';
      if (cyc < 2) { T = -20 + cyc * 10; phase = 'Muz qizimoqda'; }
      else if (cyc < 4) { T = 0; phase = 'Erish (0°C, Q=λm)'; }
      else if (cyc < 7) { T = ((cyc - 4) / 3) * 100; phase = 'Suv qizimoqda'; }
      else { T = 100; phase = 'Qaynash (100°C, Q=Lm)'; }
      const ox = 52, oy = h - 30, pw = w - 104;
      const segs = [[0, -20], [0.2, 0], [0.4, 0], [0.7, 100], [1.0, 100]];
      ctx.strokeStyle = '#fb923c'; ctx.lineWidth = 3;
      ctx.beginPath();
      segs.forEach(([sx, tv], i) => {
        const px = ox + sx * pw;
        const py = oy - ((tv + 25) / 140) * (h - 60);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath(); ctx.arc(ox + (cyc / 10) * pw, oy - ((T + 25) / 140) * (h - 60), 7, 0, Math.PI * 2); ctx.fill();
      drawLabelPill(ctx, phase, ox + 12, 22);
      return {
        scopeTitle: 'Faza o‘tish harorat egri chizig‘i T(Q)',
        traceA: T,
        traceB: m * 334,
        labelA: `T = ${T.toFixed(1)} °C`,
        labelB: `Q_erish = ${m * 334} kJ`,
        metrics: [
          { label: 'Joriy fazaviy holat', value: phase, color: '#22d3ee' },
          { label: 'Harorat', value: `${T.toFixed(1)} °C`, color: '#fb923c' },
          { label: 'Erish vaqti (t=λm/P)', value: `${((m * 334000) / P).toFixed(0)} s`, color: '#34d399' },
        ],
      };
    }

    case 'humidity_dewpoint': {
      const T = p.temp ?? 22, rho = p.rho ?? 12;
      const rhoSat = 4.8 * Math.exp(0.062 * T);
      const phi = clamp((rho / rhoSat) * 100, 0, 100);
      const dewT = Math.log(rho / 4.8) / 0.062;
      const barW = w * 0.55;
      ctx.fillStyle = 'rgba(30,41,59,0.75)'; ctx.fillRect(cx - barW / 2, cy - 22, barW, 44);
      ctx.fillStyle = phi > 85 ? '#38bdf8' : '#22d3ee';
      ctx.fillRect(cx - barW / 2, cy - 22, barW * (phi / 100), 44);
      drawLabelPill(ctx, `Nisbiy namlik φ = ${phi.toFixed(1)}% | Shudring: ${dewT.toFixed(1)} °C`, cx - 150, 22);
      return {
        scopeTitle: 'To‘yingan ρ₀(T) va nisbiy namlik φ',
        traceA: phi,
        traceB: dewT,
        labelA: `φ = ${phi.toFixed(1)}%`,
        labelB: `t_shud = ${dewT.toFixed(1)} °C`,
        metrics: [
          { label: 'Nisbiy namlik φ', value: `${phi.toFixed(1)}%`, color: '#22d3ee' },
          { label: 'To‘yingan ρ₀', value: `${rhoSat.toFixed(1)} g/m³`, color: '#a78bfa' },
          { label: 'Shudring nuqtasi', value: `${dewT.toFixed(1)} °C`, color: '#34d399' },
        ],
      };
    }

    case 'capillary_tension': {
      const rMm = p.r ?? 0.5, sigma = p.sigma ?? 73, wet = p.wet ?? 1;
      const rM = rMm * 1e-3, sig = sigma * 1e-3;
      const hCapMm = ((2 * sig) / (1000 * 9.8 * rM)) * 1000 * (wet ? 1 : -1);
      const tubeW = clamp(rMm * 32, 12, 60);
      const levelY = h * 0.65 - clamp(hCapMm * 2.5, -55, 85);
      ctx.fillStyle = 'rgba(56,189,248,0.22)'; ctx.fillRect(48, h * 0.65, w - 96, h * 0.3);
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2;
      ctx.strokeRect(cx - tubeW / 2, 26, tubeW, h - 50);
      ctx.fillStyle = 'rgba(34,211,238,0.48)';
      ctx.fillRect(cx - tubeW / 2 + 1, levelY, tubeW - 2, h - 25 - levelY);
      return {
        scopeTitle: 'Kapillyar ko‘tarilish h = 2σ/(ρgr)',
        traceA: hCapMm,
        traceB: sigma,
        labelA: `h = ${hCapMm.toFixed(1)} mm`,
        labelB: `σ = ${sigma} mN/m`,
        metrics: [
          { label: 'Suyuqlik ustuni h', value: `${hCapMm.toFixed(1)} mm`, color: '#22d3ee' },
          { label: 'Sirt taranglik σ', value: `${sigma} mN/m`, color: '#34d399' },
          { label: 'Rejim', value: wet ? 'Ho‘llovchi (botiq menisk)' : 'Ho‘llamaydigan (qavariq)', color: '#fb923c' },
        ],
      };
    }

    default:
      return null;
  }
}
