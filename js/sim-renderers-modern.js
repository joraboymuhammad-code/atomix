import { clamp, drawArrow, drawLabelPill, wavelengthToColor } from './sim-primitives.js';

export function renderModernEmOptMode(ctx, mode, p, t, w, h) {
  const cx = w * 0.5;
  const cy = h * 0.5;
  const deg2rad = (d) => (d * Math.PI) / 180;

  switch (mode) {
    // ───────── SECTION 5 ─────────
    case 'electric_field': {
      const q1 = p.q1 ?? 4, q2 = p.q2 ?? -4, dist = p.dist ?? 1.5;
      const gap = clamp(dist * 75, 80, w * 0.65);
      const x1 = cx - gap / 2, x2 = cx + gap / 2;
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2;
        ctx.strokeStyle = 'rgba(52,211,153,0.28)';
        ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x1 + Math.cos(ang) * 75, cy + Math.sin(ang) * 75); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x2, cy); ctx.lineTo(x2 + Math.cos(ang) * 75, cy + Math.sin(ang) * 75); ctx.stroke();
      }
      ctx.fillStyle = q1 >= 0 ? '#ef4444' : '#38bdf8'; ctx.beginPath(); ctx.arc(x1, cy, 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = q2 >= 0 ? '#ef4444' : '#38bdf8'; ctx.beginPath(); ctx.arc(x2, cy, 16, 0, Math.PI * 2); ctx.fill();
      const Fk = (9e9 * Math.abs(q1 * q2) * 1e-12) / (dist * dist);
      const attr = q1 * q2 < 0;
      drawArrow(ctx, x1, cy - 28, x1 + (attr ? 42 : -42), cy - 28, '#34d399', 2.4, 'F₁');
      drawArrow(ctx, x2, cy - 28, x2 + (attr ? -42 : 42), cy - 28, '#34d399', 2.4, 'F₂');
      return {
        scopeTitle: 'Kulon kuchi F(r) ~ 1/r² va markazdagi maydon E',
        traceA: Fk * 1e3,
        traceB: Math.abs(q1 - q2),
        labelA: `F = ${(Fk * 1e3).toFixed(2)} mN`,
        labelB: attr ? 'Tortishish' : 'Itarishish',
        metrics: [
          { label: 'Kulon kuchi F', value: `${(Fk * 1e3).toFixed(3)} mN`, color: '#34d399' },
          { label: 'Ta‘sir turi', value: attr ? 'Tortishish' : 'Itarishish', color: '#22d3ee' },
        ],
      };
    }

    case 'potential_equip': {
      const U = p.U ?? 240, d = p.d ?? 12;
      const E = (U / (d * 1e-2));
      const plateGap = clamp(d * 8, 60, w * 0.55);
      ctx.fillStyle = '#ef4444'; ctx.fillRect(cx - plateGap / 2 - 8, 28, 10, h - 56);
      ctx.fillStyle = '#38bdf8'; ctx.fillRect(cx + plateGap / 2 - 2, 28, 10, h - 56);
      for (let i = 1; i <= 5; i++) {
        const y = 38 + (i / 6) * (h - 76);
        drawArrow(ctx, cx - plateGap / 2 + 6, y, cx + plateGap / 2 - 6, y, 'rgba(52,211,153,0.55)', 1.8);
      }
      ctx.strokeStyle = 'rgba(250,204,21,0.45)'; ctx.setLineDash([4, 4]);
      for (let i = 1; i < 4; i++) {
        const ex = cx - plateGap / 2 + (i / 4) * plateGap;
        ctx.beginPath(); ctx.moveTo(ex, 26); ctx.lineTo(ex, h - 26); ctx.stroke();
      }
      ctx.setLineDash([]);
      return {
        scopeTitle: 'Yassi plastinalar orasida maydon E = U/d va potensial φ(x)',
        traceA: E,
        traceB: U,
        labelA: `E = ${E.toFixed(0)} V/m`,
        labelB: `U = ${U} V`,
        metrics: [
          { label: 'Kuchlanganlik E', value: `${E.toFixed(0)} V/m`, color: '#34d399' },
          { label: 'Potensiallar farqi', value: `${U} V`, color: '#22d3ee' },
        ],
      };
    }

    case 'capacitor': {
      const eps = p.eps ?? 4, d = p.d ?? 2.0, U = p.U ?? 120;
      const Cpf = (8.85e-12 * eps * 0.02) / (d * 1e-3) * 1e12;
      const Wuj = 0.5 * Cpf * 1e-12 * U * U * 1e6;
      const gap = clamp(d * 14, 24, 140);
      ctx.fillStyle = eps > 1.2 ? 'rgba(167,139,250,0.22)' : 'transparent';
      ctx.fillRect(cx - 90, cy - gap / 2, 180, gap);
      ctx.fillStyle = '#34d399'; ctx.fillRect(cx - 96, cy - gap / 2 - 10, 192, 10);
      ctx.fillStyle = '#38bdf8'; ctx.fillRect(cx - 96, cy + gap / 2, 192, 10);
      return {
        scopeTitle: 'Kondensator sig‘imi C ~ ε/d va energiya W = CU²/2',
        traceA: Cpf,
        traceB: Wuj,
        labelA: `C = ${Cpf.toFixed(0)} pF`,
        labelB: `W = ${Wuj.toFixed(2)} mkJ`,
        metrics: [
          { label: 'Elektr sig‘imi C', value: `${Cpf.toFixed(1)} pF`, color: '#34d399' },
          { label: 'Maydon energiyasi W', value: `${Wuj.toFixed(2)} mkJ`, color: '#a78bfa' },
        ],
      };
    }

    case 'ohm_circuit': {
      const emf = p.emf ?? 12, R = p.R ?? 6, r = p.r ?? 1.0;
      const I = emf / (R + r);
      const U = I * R;
      const P = I * I * R;
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2.6;
      ctx.strokeRect(cx - 120, cy - 48, 240, 96);
      ctx.fillStyle = '#070b18'; ctx.fillRect(cx - 42, cy - 60, 84, 24);
      ctx.strokeStyle = '#38bdf8'; ctx.strokeRect(cx - 42, cy - 60, 84, 24);
      drawLabelPill(ctx, `R = ${R} Ω`, cx - 32, cy - 59);
      // Electron drift dots
      for (let i = 0; i < 12; i++) {
        const s = ((i / 12) + t * I * 0.12) % 1;
        let dx, dy;
        if (s < 0.25) { dx = cx - 120 + (s / 0.25) * 240; dy = cy - 48; }
        else if (s < 0.5) { dx = cx + 120; dy = cy - 48 + ((s - 0.25) / 0.25) * 96; }
        else if (s < 0.75) { dx = cx + 120 - ((s - 0.5) / 0.25) * 240; dy = cy + 48; }
        else { dx = cx - 120; dy = cy + 48 - ((s - 0.75) / 0.25) * 96; }
        ctx.fillStyle = '#facc15'; ctx.beginPath(); ctx.arc(dx, dy, 4, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'To‘liq zanjir toki I = ε/(R+r) va tashqi kuchlanish U',
        traceA: I,
        traceB: U,
        labelA: `I = ${I.toFixed(2)} A`,
        labelB: `U = ${U.toFixed(1)} V`,
        metrics: [
          { label: 'Tok kuchi I', value: `${I.toFixed(2)} A`, color: '#34d399' },
          { label: 'Tashqi kuchlanish U', value: `${U.toFixed(2)} V`, color: '#22d3ee' },
          { label: 'Foydali quvvat P', value: `${P.toFixed(1)} Vt`, color: '#fb923c' },
        ],
      };
    }

    case 'resistor_network': {
      const R1 = p.R1 ?? 6, R2 = p.R2 ?? 12, U = p.U ?? 24;
      const Rser = R1 + R2;
      const Rpar = (R1 * R2) / (R1 + R2);
      const Iser = U / Rser, Ipar = U / Rpar;
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2;
      // Top branch series, bottom parallel
      ctx.beginPath(); ctx.moveTo(60, h * 0.3); ctx.lineTo(w - 60, h * 0.3); ctx.stroke();
      ctx.fillStyle = '#0f172a'; ctx.fillRect(cx - 100, h * 0.3 - 12, 64, 24); ctx.strokeRect(cx - 100, h * 0.3 - 12, 64, 24);
      ctx.fillRect(cx + 36, h * 0.3 - 12, 64, 24); ctx.strokeRect(cx + 36, h * 0.3 - 12, 64, 24);
      ctx.beginPath(); ctx.moveTo(60, h * 0.68); ctx.lineTo(120, h * 0.68);
      ctx.moveTo(120, h * 0.56); ctx.lineTo(w - 120, h * 0.56);
      ctx.moveTo(120, h * 0.80); ctx.lineTo(w - 120, h * 0.80);
      ctx.moveTo(120, h * 0.56); ctx.lineTo(120, h * 0.80);
      ctx.moveTo(w - 120, h * 0.56); ctx.lineTo(w - 120, h * 0.80);
      ctx.moveTo(w - 120, h * 0.68); ctx.lineTo(w - 60, h * 0.68); ctx.stroke();
      drawLabelPill(ctx, `Ketma-ket: R=${Rser}Ω (I=${Iser.toFixed(2)}A)`, 60, 18);
      drawLabelPill(ctx, `Parallel: R=${Rpar.toFixed(2)}Ω (I=${Ipar.toFixed(2)}A)`, 60, h * 0.84);
      return {
        scopeTitle: 'Ketma-ket va Parallel ulanishlar tok taqqoslashi',
        traceA: Iser,
        traceB: Ipar,
        labelA: `I_ket = ${Iser.toFixed(2)} A`,
        labelB: `I_par = ${Ipar.toFixed(2)} A`,
        metrics: [
          { label: 'Ketma-ket R', value: `${Rser} Ω`, color: '#22d3ee' },
          { label: 'Parallel R', value: `${Rpar.toFixed(2)} Ω`, color: '#34d399' },
        ],
      };
    }

    case 'joule_lenz': {
      const U = p.U ?? 220, R = p.R ?? 44;
      const I = U / R, P = (U * U) / R;
      const glow = clamp(P / 2500, 0.2, 1);
      ctx.strokeStyle = `rgba(251,146,60,${glow})`; ctx.lineWidth = 6;
      ctx.beginPath();
      for (let i = 0; i <= 14; i++) {
        const px = 80 + (i / 14) * (w - 160);
        const py = cy + (i % 2 === 0 ? -18 : 18);
        if (i === 0) ctx.moveTo(px, cy); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      return {
        scopeTitle: 'Joul-Lens issiqlik quvvati P = U²/R',
        traceA: P,
        traceB: I * 100,
        labelA: `P = ${P.toFixed(0)} Vt`,
        labelB: `I = ${I.toFixed(2)} A`,
        metrics: [
          { label: 'Tok kuchi I', value: `${I.toFixed(2)} A`, color: '#22d3ee' },
          { label: 'Issiqlik quvvati P', value: `${P.toFixed(0)} Vt`, color: '#fb923c' },
          { label: '1 min da issiqlik Q', value: `${((P * 60) / 1000).toFixed(1)} kJ`, color: '#34d399' },
        ],
      };
    }

    case 'metal_superconductor': {
      const T = p.T ?? 90, Tk = p.Tk ?? 92;
      const isSC = T <= Tk;
      const ox = 54, oy = h - 30, pw = w - 108, ph = h - 60;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(ox, 22); ctx.lineTo(ox, oy); ctx.lineTo(w - 30, oy); ctx.stroke();
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const Ti = (i / 60) * 300;
        const Rval = Ti <= Tk ? 0 : 0.1 + 0.003 * Ti;
        const px = ox + (i / 60) * pw;
        const py = oy - Rval * ph;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      const curX = ox + (T / 300) * pw;
      const curR = isSC ? 0 : 0.1 + 0.003 * T;
      ctx.fillStyle = isSC ? '#22d3ee' : '#fb923c';
      ctx.beginPath(); ctx.arc(curX, oy - curR * ph, 8, 0, Math.PI * 2); ctx.fill();
      drawLabelPill(ctx, isSC ? 'O‘TA O‘TKAZUVCHANLIK (R = 0 Ω!)' : 'Normal metall holati', ox + 12, 22);
      return {
        scopeTitle: 'Solishtirma qarshilikning haroratga bog‘liqligi R(T)',
        traceA: curR * 100,
        traceB: T,
        labelA: isSC ? 'R = 0 Ω' : 'Metall R(T)',
        labelB: `T = ${T} K (T_k = ${Tk} K)`,
        metrics: [
          { label: 'Holat', value: isSC ? 'O‘ta o‘tkazuvchan (R=0)' : 'Oddiy o‘tkazgich', color: isSC ? '#34d399' : '#fb923c' },
          { label: 'Harorat T', value: `${T} K`, color: '#22d3ee' },
        ],
      };
    }

    case 'electrolysis': {
      const I = p.I ?? 5.0, n = p.n ?? 2;
      const kCu = 0.3294;
      const mMgS = kCu * (2 / n);
      const tSec = (t % 30) * 10;
      const mTotal = mMgS * I * tSec;
      ctx.fillStyle = 'rgba(56,189,248,0.18)'; ctx.fillRect(cx - 110, 44, 220, h - 72);
      ctx.fillStyle = '#64748b'; ctx.fillRect(cx - 80, 32, 16, h - 76);
      ctx.fillStyle = '#d97706'; ctx.fillRect(cx + 64, 32, 16 + clamp(mTotal * 0.04, 0, 18), h - 76);
      for (let i = 0; i < 10; i++) {
        const px = cx - 56 + ((i * 15 + t * I * 12) % 112);
        const py = 70 + (i % 5) * 26;
        ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'Katodda ajralayotgan modda massasi m = kIt',
        traceA: mTotal,
        traceB: I * 10,
        labelA: `m = ${mTotal.toFixed(1)} mg`,
        labelB: `I = ${I} A`,
        metrics: [
          { label: 'Ajralish tezligi', value: `${(mMgS * I).toFixed(2)} mg/s`, color: '#fb923c' },
          { label: '1 soatda massa', value: `${((mMgS * I * 3600) / 1000).toFixed(2)} g`, color: '#34d399' },
        ],
      };
    }

    case 'gas_plasma': {
      const U = p.U ?? 2000, pressure = p.p ?? 20;
      const glow = clamp((U / 4000) * (120 / (pressure + 20)), 0.15, 1.0);
      ctx.strokeStyle = 'rgba(148,163,184,0.45)'; ctx.strokeRect(56, cy - 38, w - 112, 76);
      ctx.fillStyle = `rgba(167,139,250,${glow * 0.65})`; ctx.fillRect(62, cy - 32, w - 124, 64);
      for (let i = 0; i < 18; i++) {
        const px = 70 + ((i * 31 + t * (U * 0.04)) % (w - 140));
        const py = cy + Math.sin(i * 4 + t * 5) * 22;
        ctx.fillStyle = i % 2 === 0 ? '#22d3ee' : '#f472b6';
        ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'Gaz razryadi plazma ionlashuvi va razryad toki',
        traceA: glow * 100,
        traceB: U / (pressure + 1),
        labelA: `Ionlashuv: ${(glow * 100).toFixed(0)}%`,
        labelB: `U/p nisbat`,
        metrics: [
          { label: 'Plazma zichligi', value: `${(glow * 100).toFixed(0)}%`, color: '#a78bfa' },
          { label: 'Kuchlanish U', value: `${U} V`, color: '#22d3ee' },
        ],
      };
    }

    case 'cathode_ray': {
      const Ua = p.Ua ?? 1500, Ud = p.Ud ?? 40;
      const vxNorm = Math.sqrt(Ua / 1500);
      const defl = (Ud / Ua) * 1800;
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 50; i++) {
        const s = i / 50;
        const px = 48 + s * (w - 96);
        const py = cy - (s > 0.25 ? Math.pow((s - 0.25) / 0.75, 1.5) * defl : 0);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, clamp(py, 18, h - 18));
      }
      ctx.stroke();
      ctx.fillStyle = '#334155'; ctx.fillRect(w * 0.25, cy - 55, 60, 14); ctx.fillRect(w * 0.25, cy + 41, 60, 14);
      const vKmS = Math.sqrt((2 * 1.6e-19 * Ua) / 9.11e-31) / 1000;
      return {
        scopeTitle: 'Elektron nurining elektr maydonida og‘ishi y(x)',
        traceA: defl,
        traceB: vKmS * 0.01,
        labelA: `Og‘ish Δy`,
        labelB: `v = ${vKmS.toFixed(0)} km/s`,
        metrics: [
          { label: 'Elektron tezligi v', value: `${vKmS.toFixed(0)} km/s`, color: '#22d3ee' },
          { label: 'Ekrandagi og‘ish', value: `${defl.toFixed(1)} mm`, color: '#fb923c' },
        ],
      };
    }

    case 'pn_junction': {
      const U = p.U ?? 0.7, T = p.T ?? 300;
      const Is = 1e-6 * Math.pow(T / 300, 3);
      const Ut = (1.38e-23 * T) / 1.6e-19;
      const I = U >= 0 ? Math.min(200, Is * (Math.exp(clamp(U / Ut, -20, 14)) - 1) * 1e3) : -0.02;
      const depW = clamp(44 - U * 28, 6, 90);
      ctx.fillStyle = 'rgba(239,68,68,0.22)'; ctx.fillRect(cx - 120, cy - 38, 120 - depW / 2, 76);
      ctx.fillStyle = 'rgba(56,189,248,0.22)'; ctx.fillRect(cx + depW / 2, cy - 38, 120 - depW / 2, 76);
      ctx.fillStyle = 'rgba(148,163,184,0.16)'; ctx.fillRect(cx - depW / 2, cy - 38, depW, 76);
      drawLabelPill(ctx, `p-n o‘tish to‘sig‘i | I = ${I.toFixed(2)} mA`, 24, 18);
      return {
        scopeTitle: 'Diod volt-amper xarakteristikasi (VAX) I(U)',
        traceA: I,
        traceB: depW,
        labelA: `I = ${I.toFixed(2)} mA`,
        labelB: `To‘siq eni: ${depW.toFixed(0)}`,
        metrics: [
          { label: 'Tok I', value: `${I.toFixed(2)} mA`, color: '#34d399' },
          { label: 'Rejim', value: U > 0.4 ? 'To‘g‘ri ochiq' : U < 0 ? 'Teskari yopiq' : 'Bo‘sag‘a', color: '#22d3ee' },
        ],
      };
    }

    case 'lorentz_cyclotron': {
      const B = p.B ?? 1.5, v = p.v ?? 4, qSign = p.qSign ?? 1;
      const R = clamp((v * 24) / Math.max(0.3, B), 22, h * 0.42);
      const omega = (B * 1.4) * (qSign >= 0 ? 1 : -1);
      const phi = t * omega;
      ctx.strokeStyle = 'rgba(34,211,238,0.28)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
      const px = cx + R * Math.cos(phi), py = cy + R * Math.sin(phi);
      ctx.fillStyle = qSign >= 0 ? '#ef4444' : '#38bdf8';
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill();
      drawArrow(ctx, px, py, px - Math.cos(phi) * 32, py - Math.sin(phi) * 32, '#34d399', 2.2, 'F_L');
      return {
        scopeTitle: 'Lorentz kuchi F = qvB va Larmor radiusi R = mv/(qB)',
        traceA: R,
        traceB: Math.abs(omega),
        labelA: `R ~ ${R.toFixed(0)}`,
        labelB: `ω_c ~ ${Math.abs(omega).toFixed(2)}`,
        metrics: [
          { label: 'Orbita radiusi R', value: `${(v / B).toFixed(2)} mm`, color: '#22d3ee' },
          { label: 'Zaryad ishorasi', value: qSign >= 0 ? 'Musbat (+q)' : 'Manfiy (−q)', color: '#34d399' },
        ],
      };
    }

    case 'ferromagnetism': {
      const H = p.H ?? 60, T = p.T ?? 400;
      const Tc = 1043;
      const isFerro = T < Tc;
      const align = isFerro ? clamp((H / 100) * (1 - T / Tc), 0, 1) : (H / 100) * 0.1;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 6; c++) {
          const dx = 90 + c * ((w - 180) / 5), dy = 52 + r * 54;
          const ang = (1 - align) * Math.sin(r * 7 + c * 5 + t * (T / 200)) * 2.6;
          drawArrow(ctx, dx - Math.cos(ang) * 14, dy - Math.sin(ang) * 14, dx + Math.cos(ang) * 14, dy + Math.sin(ang) * 14, isFerro ? '#34d399' : '#fb923c', 2);
        }
      }
      drawLabelPill(ctx, T >= Tc ? 'KYURI HARORATIDAN YUQORI (Paramagnetik!)' : 'Ferromagnetik domenlar', 24, 18);
      return {
        scopeTitle: 'Domenlar magnitlanishi M(H, T)',
        traceA: align * 100,
        traceB: T,
        labelA: `Tartib: ${(align * 100).toFixed(0)}%`,
        labelB: `T = ${T} K`,
        metrics: [
          { label: 'Magnitlanish tartibi', value: `${(align * 100).toFixed(0)}%`, color: '#34d399' },
          { label: 'Temir Kyuri T_C', value: '1043 K', color: '#fb923c' },
        ],
      };
    }

    case 'faraday_induction': {
      const N = p.N ?? 50, speed = p.speed ?? 3.0, B = p.B ?? 0.8;
      const mx = cx + Math.sin(t * speed) * 110;
      const emfv = N * B * speed * Math.cos(t * speed) * 0.12;
      ctx.fillStyle = '#ef4444'; ctx.fillRect(mx - 42, cy - 16, 42, 32);
      ctx.fillStyle = '#38bdf8'; ctx.fillRect(mx, cy - 16, 42, 32);
      ctx.strokeStyle = '#fb923c'; ctx.lineWidth = 3;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath(); ctx.ellipse(cx - 25 + i * 10, cy, 12, 46, 0, 0, Math.PI * 2); ctx.stroke();
      }
      return {
        scopeTitle: 'Faradey induksiya EYUK ε = −N·(dΦ/dt)',
        traceA: emfv,
        traceB: B * Math.sin(t * speed) * 10,
        labelA: `ε(t) = ${emfv.toFixed(2)} V`,
        labelB: `Oqim Φ(t)`,
        metrics: [
          { label: 'Induksiya EYUK max', value: `${(N * B * speed * 0.12).toFixed(2)} V`, color: '#fb923c' },
          { label: 'O‘ramlar soni N', value: `${N}`, color: '#22d3ee' },
        ],
      };
    }

    case 'lc_oscillator': {
      const Lmh = p.L ?? 20, Cuf = p.C ?? 50, R = p.R ?? 2;
      const L = Lmh * 1e-3, C = Cuf * 1e-6;
      const w0 = 1 / Math.sqrt(L * C);
      const damp = R / (2 * L);
      const simT = t % 6;
      const q = Math.exp(-damp * simT * 0.008) * Math.cos(w0 * simT * 0.004);
      const cur = -Math.exp(-damp * simT * 0.008) * Math.sin(w0 * simT * 0.004);
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2.6;
      ctx.strokeRect(cx - 100, cy - 44, 200, 88);
      ctx.fillStyle = '#38bdf8'; ctx.fillRect(cx - 110, cy - 14, 20, 10); ctx.fillRect(cx - 110, cy + 4, 20, 10);
      drawLabelPill(ctx, `ν₀ = ${(w0 / (2 * Math.PI)).toFixed(1)} Hz | T = ${((2 * Math.PI / w0) * 1000).toFixed(2)} ms`, 24, 18);
      return {
        scopeTitle: 'Kondensator zaryadi q(t) va g‘altak toki I(t)',
        traceA: q,
        traceB: cur,
        labelA: `q(t)`,
        labelB: `I(t)`,
        metrics: [
          { label: 'Xususiy chastota ν₀', value: `${(w0 / (2 * Math.PI)).toFixed(1)} Hz`, color: '#34d399' },
          { label: 'Tomson davri T', value: `${((2 * Math.PI / w0) * 1000).toFixed(2)} ms`, color: '#22d3ee' },
        ],
      };
    }

    case 'ac_rlc': {
      const R = p.R ?? 30, XL = p.XL ?? 50, XC = p.XC ?? 20;
      const Z = Math.hypot(R, XL - XC);
      const phi = Math.atan2(XL - XC, R);
      const ox = cx - 40, oy = cy + 20;
      drawArrow(ctx, ox, oy, ox + R * 2.2, oy, '#34d399', 2.6, `R=${R}`);
      drawArrow(ctx, ox + R * 2.2, oy, ox + R * 2.2, oy - (XL - XC) * 2.2, '#fb923c', 2.4, `X=${XL - XC}`);
      drawArrow(ctx, ox, oy, ox + R * 2.2, oy - (XL - XC) * 2.2, '#22d3ee', 3, `Z=${Z.toFixed(1)}`);
      return {
        scopeTitle: 'O‘zgaruvchan tok kuchlanishi u(t) va toki i(t)',
        traceA: Math.sin(t * 4),
        traceB: Math.sin(t * 4 - phi) * (30 / Z),
        labelA: `u(t)`,
        labelB: `i(t) (φ=${((phi * 180) / Math.PI).toFixed(0)}°)`,
        metrics: [
          { label: 'To‘liq qarshilik Z', value: `${Z.toFixed(1)} Ω`, color: '#22d3ee' },
          { label: 'Quvvat koeffitsienti cosφ', value: `${(R / Z).toFixed(2)}`, color: '#34d399' },
        ],
      };
    }

    case 'em_wave': {
      const freq = p.freq ?? 2.0, amp = p.amp ?? 38;
      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.beginPath(); ctx.moveTo(24, cy); ctx.lineTo(w - 24, cy); ctx.stroke();
      ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.5; ctx.beginPath();
      for (let x = 24; x <= w - 24; x += 6) {
        const val = Math.sin(x * 0.03 * freq - t * 4) * amp;
        if (x === 24) ctx.moveTo(x, cy - val); else ctx.lineTo(x, cy - val);
      }
      ctx.stroke();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2.2; ctx.beginPath();
      for (let x = 24; x <= w - 24; x += 6) {
        const val = Math.sin(x * 0.03 * freq - t * 4) * amp * 0.65;
        if (x === 24) ctx.moveTo(x, cy + val * 0.6); else ctx.lineTo(x + val * 0.4, cy + val * 0.6);
      }
      ctx.stroke();
      return {
        scopeTitle: 'E⃗ (qizil) va B⃗ (ko‘k) o‘zaro perpendikulyar tebranishi',
        traceA: Math.sin(t * 4 * freq) * amp,
        traceB: Math.sin(t * 4 * freq) * amp * 0.7,
        labelA: `E(t)`,
        labelB: `B(t)`,
        metrics: [
          { label: 'Tarqalish tezligi c', value: '3.00 × 10⁸ m/s', color: '#22d3ee' },
          { label: 'Nurlanish quvvati S ~ E·B', value: `${((amp * amp) / 20).toFixed(1)}`, color: '#34d399' },
        ],
      };
    }

    // ───────── SECTION 6 ─────────
    case 'ray_reflection': {
      const ang = deg2rad(p.angle ?? 38), focal = p.focal ?? 40, dObj = p.objDist ?? 90;
      const mx = cx + 60, mY = cy;
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(mx - focal * 2, mY, focal * 2, -0.55, 0.55); ctx.stroke();
      ctx.strokeStyle = 'rgba(148,163,184,0.28)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(20, mY); ctx.lineTo(w - 20, mY); ctx.stroke();
      const ox = mx - dObj * 1.4;
      drawArrow(ctx, ox, mY, ox, mY - 38, '#34d399', 2.6, 'Jism');
      // Ray reflection illustration
      drawArrow(ctx, ox, mY - 38, mx - 8, mY - 38, '#f472b6', 2);
      const f = (dObj * focal) / (dObj - focal || 0.01);
      const ix = mx - f * 1.4;
      if (dObj > focal + 1) {
        drawArrow(ctx, mx - 8, mY - 38, clamp(ix, 20, mx + 80), mY + 38 * (f / dObj), '#22d3ee', 2);
        drawArrow(ctx, clamp(ix, 20, mx + 80), mY, clamp(ix, 20, mx + 80), clamp(mY + 38 * (f / dObj), 20, h - 20), '#fb923c', 2.4, 'Tasvir');
      }
      return {
        scopeTitle: 'Tasvir masofasi f va burchak α = β',
        traceA: f,
        traceB: p.angle ?? 38,
        labelA: `f = ${f.toFixed(1)} sm`,
        labelB: `α = ${p.angle ?? 38}°`,
        metrics: [
          { label: 'Tasvir masofasi f', value: `${f.toFixed(1)} sm`, color: '#fb923c' },
          { label: 'Kattalashtirish Γ', value: `${Math.abs(f / dObj).toFixed(2)}×`, color: '#22d3ee' },
        ],
      };
    }

    case 'ray_refraction': {
      const n1 = p.n1 ?? 1.5, n2 = p.n2 ?? 1.0, alpha = p.angle ?? 32;
      const radA = deg2rad(alpha);
      ctx.fillStyle = 'rgba(56,189,248,0.14)'; ctx.fillRect(0, cy, w, h - cy);
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.moveTo(cx, 16); ctx.lineTo(cx, h - 16); ctx.stroke();
      const ix = cx - Math.sin(radA) * 110, iy = cy - Math.cos(radA) * 110;
      drawArrow(ctx, ix, iy, cx, cy, '#f472b6', 2.6, `α=${alpha}°`);
      const sinG = (n1 / n2) * Math.sin(radA);
      let gammaDeg = 90;
      if (sinG <= 1) {
        const gRad = Math.asin(sinG);
        gammaDeg = (gRad * 180) / Math.PI;
        drawArrow(ctx, cx, cy, cx + Math.sin(gRad) * 110, cy + Math.cos(gRad) * 110, '#22d3ee', 2.6, `γ=${gammaDeg.toFixed(1)}°`);
      } else {
        drawArrow(ctx, cx, cy, cx + Math.sin(radA) * 110, cy - Math.cos(radA) * 110, '#34d399', 2.8, 'TO‘LA QAYTISH!');
      }
      return {
        scopeTitle: 'Sinish burchagi γ va chegaraviy burchak α₀',
        traceA: sinG <= 1 ? gammaDeg : 90,
        traceB: alpha,
        labelA: sinG <= 1 ? `γ = ${gammaDeg.toFixed(1)}°` : 'To‘la ichki qaytish',
        labelB: `α = ${alpha}°`,
        metrics: [
          { label: 'Sinish burchagi γ', value: sinG <= 1 ? `${gammaDeg.toFixed(1)}°` : 'To‘la qaytish!', color: '#22d3ee' },
          { label: 'Tezlik v₁', value: `${(300 / n1).toFixed(0)} Mm/s`, color: '#f472b6' },
        ],
      };
    }

    case 'lens_optics': {
      const F = p.focal ?? 30, d = p.objDist ?? 75, hObj = p.objHeight ?? 25;
      ctx.strokeStyle = 'rgba(148,163,184,0.3)';
      ctx.beginPath(); ctx.moveTo(20, cy); ctx.lineTo(w - 20, cy); ctx.stroke();
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, 24); ctx.lineTo(cx, h - 24); ctx.stroke();
      const pxScale = 1.6;
      const ox = cx - d * pxScale;
      drawArrow(ctx, ox, cy, ox, cy - hObj * 1.4, '#34d399', 2.6, 'Jism');
      const f = (d * F) / (d - F || 0.1);
      const ix = cx + f * pxScale;
      const hImg = hObj * 1.4 * (-f / d);
      drawArrow(ctx, clamp(ix, 20, w - 20), cy, clamp(ix, 20, w - 20), clamp(cy - hImg, 20, h - 20), '#fb923c', 2.6, 'Tasvir');
      ctx.strokeStyle = 'rgba(244,114,182,0.65)'; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(ox, cy - hObj * 1.4); ctx.lineTo(cx, cy - hObj * 1.4); ctx.lineTo(clamp(ix, 20, w - 20), clamp(cy - hImg, 20, h - 20)); ctx.stroke();
      return {
        scopeTitle: 'Tasvir masofasi f va chiziqli kattalashtirish Γ',
        traceA: f,
        traceB: Math.abs(f / d) * 20,
        labelA: `f = ${f.toFixed(1)} sm`,
        labelB: `Γ = ${Math.abs(f / d).toFixed(2)}×`,
        metrics: [
          { label: 'Optik kuch D', value: `${(100 / F).toFixed(2)} dptr`, color: '#22d3ee' },
          { label: 'Tasvir masofasi f', value: `${f.toFixed(1)} sm`, color: '#fb923c' },
        ],
      };
    }

    case 'double_slit': {
      const lam = p.lambda ?? 530, d = p.slitDist ?? 50, L = p.screenL ?? 1.5;
      const col = wavelengthToColor(lam);
      const slitX = w * 0.25, scrX = w * 0.84;
      ctx.strokeStyle = '#64748b'; ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(slitX, 20); ctx.lineTo(slitX, cy - 24);
      ctx.moveTo(slitX, cy - 12); ctx.lineTo(slitX, cy + 12);
      ctx.moveTo(slitX, cy + 24); ctx.lineTo(slitX, h - 20); ctx.stroke();
      // Interference fringes on screen
      const dxMm = ((lam * 1e-9 * L) / (d * 1e-6)) * 1000;
      for (let py = 22; py < h - 22; py += 2) {
        const yOff = py - cy;
        const I = Math.pow(Math.cos((yOff / Math.max(8, dxMm * 1.1)) * Math.PI), 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = I * 0.9;
        ctx.fillRect(scrX, py, 16, 2);
      }
      ctx.globalAlpha = 1;
      return {
        scopeTitle: 'Ekrandagi intensivlik taqsimoti I(y) = I₀ cos²(δ/2)',
        traceA: dxMm,
        traceB: lam,
        labelA: `Δx = ${dxMm.toFixed(2)} mm`,
        labelB: `λ = ${lam} nm`,
        metrics: [
          { label: 'Yo‘l kengligi Δx', value: `${dxMm.toFixed(2)} mm`, color: '#f472b6' },
          { label: 'To‘lqin uzunligi λ', value: `${lam} nm`, color: '#22d3ee' },
        ],
      };
    }

    case 'polarization': {
      const ang = p.angle ?? 45, I0 = p.I0 ?? 100;
      const I1 = I0 / 2;
      const cosT = Math.cos(deg2rad(ang));
      const I2 = I1 * cosT * cosT;
      ctx.strokeStyle = '#a78bfa'; ctx.strokeRect(cx - 80, cy - 48, 12, 96);
      ctx.strokeStyle = '#f472b6'; ctx.strokeRect(cx + 60, cy - 48, 12, 96);
      drawArrow(ctx, 40, cy, cx + 120, cy, '#22d3ee', 2.4);
      drawLabelPill(ctx, `Malyus: I = ${I2.toFixed(1)} Vt/m²`, 24, 18);
      return {
        scopeTitle: 'Malyus qonuni I(θ) = I₁·cos²θ',
        traceA: I2,
        traceB: cosT * 50,
        labelA: `I = ${I2.toFixed(1)} Vt/m²`,
        labelB: `θ = ${ang}°`,
        metrics: [
          { label: 'Chiqish intensivligi', value: `${I2.toFixed(1)} Vt/m²`, color: '#f472b6' },
          { label: 'O‘tkazuvchanlik', value: `${((I2 / I0) * 100).toFixed(1)}%`, color: '#22d3ee' },
        ],
      };
    }

    case 'photometry': {
      const I = p.intensity ?? 400, r = p.dist ?? 1.5, ang = p.angle ?? 0;
      const E = (I * Math.cos(deg2rad(ang))) / (r * r);
      const lampY = 38;
      ctx.fillStyle = '#fde047'; ctx.beginPath(); ctx.arc(cx, lampY, 14, 0, Math.PI * 2); ctx.fill();
      const grad = ctx.createRadialGradient(cx, lampY, 8, cx, h * 0.72, 180);
      grad.addColorStop(0, `rgba(250,204,21,${clamp(E / 600, 0.1, 0.55)})`);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad; ctx.beginPath(); ctx.moveTo(cx, lampY); ctx.lineTo(40, h - 22); ctx.lineTo(w - 40, h - 22); ctx.closePath(); ctx.fill();
      return {
        scopeTitle: 'Yoritilganlik E = (I·cos α)/r²',
        traceA: E,
        traceB: 4 * Math.PI * I,
        labelA: `E = ${E.toFixed(1)} lx`,
        labelB: `Φ = ${(4 * Math.PI * I).toFixed(0)} lm`,
        metrics: [
          { label: 'Yoritilganlik E', value: `${E.toFixed(1)} lx`, color: '#facc15' },
          { label: 'To‘liq oqim Φ', value: `${(4 * Math.PI * I).toFixed(0)} lm`, color: '#22d3ee' },
        ],
      };
    }

    // ───────── SECTION 7 ─────────
    case 'relativity_dilation': {
      const beta = p.beta ?? 0.8, l0 = p.l0 ?? 60, m0 = p.mass ?? 2;
      const gamma = 1 / Math.sqrt(Math.max(0.01, 1 - beta * beta));
      const lApp = l0 / gamma;
      const rx = 50 + ((t * beta * 95) % (w - 140));
      ctx.fillStyle = '#818cf8';
      ctx.beginPath(); ctx.roundRect(rx, cy - 16, lApp * 1.4, 32, 8); ctx.fill();
      const bounce = Math.abs(Math.sin(t * 2 / gamma));
      ctx.fillStyle = '#facc15'; ctx.beginPath(); ctx.arc(rx + lApp * 0.7, cy - 12 + bounce * 24, 4.5, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Lorens omili γ va qisqargan uzunlik l = l₀/γ',
        traceA: gamma,
        traceB: lApp,
        labelA: `γ = ${gamma.toFixed(2)}`,
        labelB: `l = ${lApp.toFixed(1)} m`,
        metrics: [
          { label: 'Lorens omili γ', value: `${gamma.toFixed(3)}`, color: '#818cf8' },
          { label: 'Ko‘rinuvchi uzunlik', value: `${lApp.toFixed(1)} m`, color: '#22d3ee' },
          { label: 'Relyativistik massa', value: `${(m0 * gamma).toFixed(2)} kg`, color: '#fb923c' },
        ],
      };
    }

    case 'blackbody_planck': {
      const T = p.temp ?? 5500, eps = p.emissivity ?? 1.0;
      const lamMax = 2.898e6 / T;
      const ox = 52, oy = h - 28, pw = w - 104, ph = h - 56;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(ox, 20); ctx.lineTo(ox, oy); ctx.lineTo(w - 24, oy); ctx.stroke();
      ctx.strokeStyle = wavelengthToColor(clamp(lamMax, 380, 760)); ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 1; i <= 70; i++) {
        const lam = 150 + (i / 70) * 1850;
        const x = (14388000 / (lam * T));
        const val = eps * (1e15 / Math.pow(lam, 5)) / (Math.exp(Math.min(40, x)) - 1);
        const px = ox + (i / 70) * pw;
        const py = oy - clamp(val * 3.5, 0, 1) * ph;
        if (i === 1) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      drawLabelPill(ctx, `λ_max = ${lamMax.toFixed(0)} nm | R = ${(eps * 5.67e-8 * Math.pow(T, 4) / 1e6).toFixed(2)} MVt/m²`, ox + 10, 20);
      return {
        scopeTitle: 'Plank nurlanish spektri va Vin maksimumi',
        traceA: lamMax,
        traceB: T,
        labelA: `λ_max = ${lamMax.toFixed(0)} nm`,
        labelB: `T = ${T} K`,
        metrics: [
          { label: 'Pik to‘lqin uzunligi', value: `${lamMax.toFixed(0)} nm`, color: '#facc15' },
          { label: 'Nurlanish quvvati R', value: `${(eps * 5.67e-8 * Math.pow(T, 4) / 1e6).toFixed(2)} MVt/m²`, color: '#fb923c' },
        ],
      };
    }

    case 'photoelectric': {
      const lam = p.lambda ?? 360, work = p.work ?? 2.1, inten = p.intensity ?? 70, U = p.voltage ?? 0.5;
      const eF = 1240 / lam;
      const ek = eF - work;
      const reaches = ek + U > 0 && ek >= 0;
      ctx.fillStyle = '#64748b'; ctx.fillRect(58, 36, 14, h - 72); ctx.fillRect(w - 72, 36, 14, h - 72);
      const col = wavelengthToColor(lam);
      for (let i = 0; i < 4; i++) drawArrow(ctx, 180, 40 + i * 24, 72, 70 + i * 22, col, 2);
      if (ek >= 0) {
        const num = Math.round((inten / 100) * 14);
        for (let i = 0; i < num; i++) {
          const prog = ((t * 0.9 + i / num) % 1);
          const px = 76 + (reaches ? prog * (w - 152) : Math.sin(prog * Math.PI) * 90);
          const py = 54 + (i % 6) * 24;
          ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2); ctx.fill();
        }
      }
      return {
        scopeTitle: 'Foton energiyasi E_f va fotoelektron kinetik energiyasi',
        traceA: Math.max(0, ek),
        traceB: reaches ? inten : 0,
        labelA: `E_k = ${Math.max(0, ek).toFixed(2)} eV`,
        labelB: reaches ? `Fototok bor` : `Tok to‘xtagan`,
        metrics: [
          { label: 'Foton hν', value: `${eF.toFixed(2)} eV`, color: '#a78bfa' },
          { label: 'Max E_k', value: `${Math.max(0, ek).toFixed(2)} eV`, color: '#22d3ee' },
          { label: 'Anod toki', value: reaches ? 'O‘tmoqda' : 'To‘xtatilgan', color: '#34d399' },
        ],
      };
    }

    case 'bohr_atom': {
      const n1 = Math.round(p.nFrom ?? 4), n2 = Math.round(p.nTo ?? 2);
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.fill();
      for (let k = 1; k <= 5; k++) {
        const rk = 18 + k * 20;
        ctx.strokeStyle = k === n1 || k === n2 ? 'rgba(56,189,248,0.65)' : 'rgba(148,163,184,0.22)';
        ctx.lineWidth = k === n1 || k === n2 ? 2 : 1;
        ctx.beginPath(); ctx.arc(cx, cy, rk, 0, Math.PI * 2); ctx.stroke();
      }
      const dE = Math.abs(-13.6 / (n2 * n2) - -13.6 / (n1 * n1));
      const lamNm = dE > 0.01 ? 1240 / dE : 0;
      const curR = 18 + n2 * 20;
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(cx + curR * Math.cos(t * 3), cy + curR * Math.sin(t * 3), 6, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Kvant o‘tish energiyasi ΔE va spektr chizig‘i',
        traceA: dE,
        traceB: lamNm,
        labelA: `ΔE = ${dE.toFixed(2)} eV`,
        labelB: `λ = ${lamNm.toFixed(0)} nm`,
        metrics: [
          { label: 'O‘tish energiyasi ΔE', value: `${dE.toFixed(2)} eV`, color: '#22d3ee' },
          { label: 'Spektr chizig‘i λ', value: lamNm ? `${lamNm.toFixed(1)} nm` : '—', color: '#f472b6' },
        ],
      };
    }

    case 'nucleus_binding': {
      const Z = Math.round(p.Z ?? 6), N = Math.round(p.N ?? 6);
      const A = Z + N;
      const shown = Math.min(48, A);
      for (let i = 0; i < shown; i++) {
        const ang = i * 2.39996;
        const rad = Math.sqrt(i + 0.5) * 6.5;
        ctx.fillStyle = i % 2 === 0 ? '#ef4444' : '#38bdf8';
        ctx.beginPath(); ctx.arc(cx + rad * Math.cos(ang), cy + rad * Math.sin(ang), 4.5, 0, Math.PI * 2); ctx.fill();
      }
      const eps = A <= 56 ? 8.8 * (1 - Math.exp(-A / 10)) : 8.8 - (A - 56) * 0.007;
      return {
        scopeTitle: 'Solishtirma bog‘lanish energiyasi ε(A)',
        traceA: eps,
        traceB: A,
        labelA: `ε ≈ ${eps.toFixed(2)} MeV/nuklon`,
        labelB: `A = ${A}`,
        metrics: [
          { label: 'Massa soni A', value: `${A}`, color: '#22d3ee' },
          { label: 'Bog‘lanish ε', value: `${eps.toFixed(2)} MeV/nuklon`, color: '#34d399' },
        ],
      };
    }

    case 'radioactive_decay': {
      const T = p.halfLife ?? 6, N0 = p.initialN ?? 150;
      const simT = t % (T * 4);
      const rem = Math.round(N0 * Math.pow(0.5, simT / T));
      const cols = 15;
      for (let i = 0; i < N0; i++) {
        const r = Math.floor(i / cols), c = i % cols;
        ctx.fillStyle = i < rem ? '#34d399' : 'rgba(148,163,184,0.22)';
        ctx.fillRect(60 + c * 18, 28 + r * 12, 12, 8);
      }
      return {
        scopeTitle: 'Yemirilmagan yadrolar soni N(t) = N₀·2^(-t/T)',
        traceA: rem,
        traceB: N0 - rem,
        labelA: `Qolgan: ${rem}`,
        labelB: `Yemirilgan: ${N0 - rem}`,
        metrics: [
          { label: 'Faol yadrolar N(t)', value: `${rem} ta`, color: '#34d399' },
          { label: 'Yemirilganlar', value: `${N0 - rem} ta`, color: '#94a3b8' },
        ],
      };
    }

    case 'fission_fusion': {
      const rods = p.rods ?? 40, enr = p.enrichment ?? 60;
      const kEff = (enr / 50) * (1 - rods / 100) * 1.4;
      const power = clamp(kEff * 1000, 50, 3200);
      ctx.strokeStyle = '#38bdf8'; ctx.strokeRect(cx - 100, 26, 200, h - 46);
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = '#475569';
        ctx.fillRect(cx - 75 + i * 44, 26, 12, ((h - 60) * rods) / 100);
      }
      drawLabelPill(ctx, `k_eff = ${kEff.toFixed(2)} | Quvvat: ${power.toFixed(0)} MVt`, 24, 18);
      return {
        scopeTitle: 'Neytron ko‘payish koeffitsienti k_eff va quvvat',
        traceA: kEff,
        traceB: power,
        labelA: `k = ${kEff.toFixed(2)}`,
        labelB: `P = ${power.toFixed(0)} MVt`,
        metrics: [
          { label: 'Ko‘payish k_eff', value: `${kEff.toFixed(2)}`, color: kEff > 1.1 ? '#ef4444' : '#34d399' },
          { label: 'Rejim', value: Math.abs(kEff - 1) < 0.12 ? 'Kritik (Barqaror)' : kEff > 1 ? 'Tezlanuvchi' : 'So‘nuvchi', color: '#22d3ee' },
        ],
      };
    }

    case 'particle_collider': {
      const E = p.energy ?? 10, B = p.B ?? 3.0;
      ctx.strokeStyle = 'rgba(129,140,248,0.35)';
      ctx.beginPath(); ctx.arc(cx, cy, h * 0.4, 0, Math.PI * 2); ctx.stroke();
      for (let i = 0; i < 14; i++) {
        const a0 = (i / 14) * Math.PI * 2;
        const curv = (B / E) * 0.9 * (i % 2 === 0 ? 1 : -1);
        ctx.strokeStyle = i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#f472b6' : '#facc15';
        ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.moveTo(cx, cy);
        for (let s = 1; s <= 16; s++) {
          const r = s * 5.2;
          const a = a0 + curv * s * 0.08;
          ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        }
        ctx.stroke();
      }
      return {
        scopeTitle: 'Kollayder to‘qnashuv energiyasi √s va trek egriligi',
        traceA: E,
        traceB: B * 2,
        labelA: `√s = ${E} TeV`,
        labelB: `B = ${B} T`,
        metrics: [
          { label: 'To‘qnashuv √s', value: `${E} TeV`, color: '#f472b6' },
          { label: 'Magnit maydoni B', value: `${B} T`, color: '#22d3ee' },
        ],
      };
    }

    // ───────── SECTION 8 ─────────
    case 'kepler_orbits': {
      const a = p.a ?? 2.2, e = p.e ?? 0.5;
      const aPx = Math.min(w * 0.36, a * 55);
      const bPx = aPx * Math.sqrt(1 - e * e);
      const cPx = aPx * e;
      const sunX = cx - cPx;
      ctx.strokeStyle = 'rgba(250,204,21,0.35)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(cx, cy, aPx, bPx, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#facc15'; ctx.beginPath(); ctx.arc(sunX, cy, 12, 0, Math.PI * 2); ctx.fill();
      const E = t * 1.4;
      const px = cx + aPx * Math.cos(E), py = cy + bPx * Math.sin(E);
      ctx.strokeStyle = 'rgba(56,189,248,0.4)'; ctx.beginPath(); ctx.moveTo(sunX, cy); ctx.lineTo(px, py); ctx.stroke();
      ctx.fillStyle = '#38bdf8'; ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
      const T = Math.pow(a, 1.5);
      const rCur = a * (1 - e * Math.cos(E));
      const vOrb = 29.78 * Math.sqrt(2 / rCur - 1 / a);
      return {
        scopeTitle: 'Sayyora tezligi v(r) — Kepler 2-qonuni',
        traceA: vOrb,
        traceB: rCur,
        labelA: `v = ${vOrb.toFixed(1)} km/s`,
        labelB: `r = ${rCur.toFixed(2)} a.b.`,
        metrics: [
          { label: 'Davr T = a^1.5', value: `${T.toFixed(2)} yil`, color: '#facc15' },
          { label: 'Orbital tezlik v', value: `${vOrb.toFixed(1)} km/s`, color: '#38bdf8' },
        ],
      };
    }

    case 'stellar_blackhole': {
      const M = p.massSolar ?? 18, spin = p.spin ?? 1.0;
      const stage = M < 8 ? 'Oq mitti (≤1.44 M_☉)' : M < 20 ? 'Neytron yulduz (Pulsar)' : 'Qora tuynuk (r_s)';
      const rs = 2.95 * M;
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgba(251,146,60,${0.6 - i * 0.12})`;
        ctx.lineWidth = 4 - i * 0.7;
        ctx.beginPath(); ctx.ellipse(cx, cy, 55 + i * 22, 20 + i * 7, 0.25, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.fillStyle = M >= 20 ? '#020617' : M >= 8 ? '#38bdf8' : '#e2e8f0';
      ctx.strokeStyle = '#fb923c'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, M >= 20 ? 22 : 16, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      return {
        scopeTitle: 'Gravitatsion radius r_s va aylanish energiyasi',
        traceA: rs,
        traceB: spin * 10,
        labelA: `r_s = ${rs.toFixed(1)} km`,
        labelB: stage,
        metrics: [
          { label: 'Yakuniy bosqich', value: stage, color: '#facc15' },
          { label: 'Shvartsshild r_s', value: `${rs.toFixed(1)} km`, color: '#fb923c' },
        ],
      };
    }

    case 'hubble_expansion': {
      const sc = p.scale ?? 1.8, H0 = p.H0 ?? 70;
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2 + 0.3;
        const baseR = 14 + (i % 4) * 16;
        const r = baseR * sc;
        const gx = cx + r * Math.cos(a), gy = cy + r * Math.sin(a);
        ctx.fillStyle = sc > 2.2 ? '#ef4444' : '#f472b6';
        ctx.beginPath(); ctx.arc(gx, gy, 5, 0, Math.PI * 2); ctx.fill();
      }
      const age = 977.8 / H0;
      return {
        scopeTitle: 'Kengayish masshtabi a(t) va Xabbl tezligi',
        traceA: sc * 100,
        traceB: H0 * sc,
        labelA: `Masshtab: ${sc.toFixed(1)}×`,
        labelB: `Yosh: ${age.toFixed(2)} mlrd yil`,
        metrics: [
          { label: 'Fazo masshtabi', value: `${sc.toFixed(1)}×`, color: '#f472b6' },
          { label: 'Koinot yoshi (~1/H₀)', value: `${age.toFixed(2)} mlrd yil`, color: '#facc15' },
        ],
      };
    }

    default:
      return null;
  }
}
