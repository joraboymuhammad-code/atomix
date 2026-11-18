import { clamp, drawArrow, drawLabelPill, wavelengthToColor } from './sim-primitives.js';

export function renderChemMode(ctx, mode, p, t, w, h) {
  const cx = w * 0.5;
  const cy = h * 0.5;

  switch (mode) {
    case 'chem_reactions_lab': {
      const T = p.temp ?? 60, conc = p.conc ?? 2.5;
      const spd = Math.sqrt(Math.max(20, T) / 40) * 1.4;
      ctx.strokeStyle = 'rgba(52,211,153,0.45)'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(cx - 110, 26, 220, h - 46, 12); ctx.stroke();
      ctx.fillStyle = `rgba(52,211,153,${clamp(0.1 + conc * 0.08, 0.1, 0.45)})`;
      ctx.fillRect(cx - 107, cy - 10, 214, h - cy - 14);
      const count = Math.round(conc * 8);
      for (let i = 0; i < count; i++) {
        const px = cx - 95 + Math.abs(Math.sin(i * 2.7 + t * spd)) * 190;
        const py = 40 + Math.abs(Math.cos(i * 3.1 + t * spd * 1.1)) * (h - 70);
        ctx.fillStyle = i % 2 === 0 ? '#34d399' : '#38bdf8';
        ctx.beginPath(); ctx.arc(px, py, 4.5, 0, Math.PI * 2); ctx.fill();
      }
      const rate = conc * Math.pow(2, (T - 30) / 20);
      return {
        scopeTitle: 'Reaktor harorati T va faol zarralar to‘qnashuv tezligi',
        traceA: rate,
        traceB: T,
        labelA: `Tezlik ~ ${rate.toFixed(1)}×`,
        labelB: `T = ${T} °C`,
        metrics: [
          { label: 'Harorat', value: `${T} °C`, color: '#fb923c' },
          { label: 'Konsentratsiya', value: `${conc.toFixed(1)} M`, color: '#34d399' },
          { label: 'Reaksiya faolligi', value: `${rate.toFixed(1)}×`, color: '#22d3ee' },
        ],
      };
    }

    case 'chem_separation': {
      const T = p.temp ?? 82, mix = p.mixPct ?? 40;
      const boiling = T >= 78.4;
      ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.arc(w * 0.28, cy + 10, 48, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(w * 0.28, cy - 38); ctx.lineTo(w * 0.28, 34); ctx.lineTo(w * 0.68, 56); ctx.stroke();
      ctx.strokeRect(w * 0.66, cy - 8, 58, 70);
      const distPct = boiling ? clamp(((T - 78) / 25) * mix, 0, mix) : 0;
      ctx.fillStyle = 'rgba(34,211,238,0.45)';
      const dh = (distPct / 100) * 60;
      ctx.fillRect(w * 0.66 + 2, cy + 60 - dh, 54, dh);
      if (boiling) {
        for (let i = 0; i < 6; i++) {
          const dropY = 58 + (((t * 70 + i * 28) % 90));
          ctx.fillStyle = '#67e8f9'; ctx.beginPath(); ctx.arc(w * 0.69, clamp(dropY, 56, cy + 54), 3.5, 0, Math.PI * 2); ctx.fill();
        }
      }
      return {
        scopeTitle: 'Distillyatsiya harorati va ajralgan fraksiya %',
        traceA: distPct,
        traceB: T,
        labelA: `Distillyat: ${distPct.toFixed(1)}%`,
        labelB: `T = ${T} °C`,
        metrics: [
          { label: 'Qaynash rejimi', value: T < 78 ? 'Isitilmoqda' : T < 100 ? 'Yengil fraksiya (78°C) chiqmoqda' : 'Suv/og‘ir fraksiya (100°C+)', color: '#22d3ee' },
          { label: 'Ajralgan fraksiya', value: `${distPct.toFixed(1)}%`, color: '#34d399' },
        ],
      };
    }

    case 'chem_stoichiometry': {
      const h2 = p.nH2 ?? 4, o2 = p.nO2 ?? 2;
      const reactedO2 = Math.min(h2 / 2, o2);
      const reactedH2 = reactedO2 * 2;
      const madeH2O = reactedO2 * 2;
      const excessH2 = h2 - reactedH2;
      const excessO2 = o2 - reactedO2;
      const bar = (x, label, val, max, col) => {
        const bh = clamp((val / max) * (h - 70), 4, h - 70);
        ctx.fillStyle = col; ctx.fillRect(x, h - 28 - bh, 52, bh);
        drawLabelPill(ctx, `${label}: ${val.toFixed(1)} mol`, x - 14, h - 22);
      };
      bar(w * 0.22, 'H₂ qoldiq', excessH2, 10, '#38bdf8');
      bar(w * 0.46, 'O₂ qoldiq', excessO2, 10, '#fb923c');
      bar(w * 0.70, 'H₂O hosil', madeH2O, 10, '#34d399');
      return {
        scopeTitle: 'Stoxiometrik reaksiya mahsuloti (2H₂ + O₂ → 2H₂O)',
        traceA: madeH2O,
        traceB: excessH2 + excessO2,
        labelA: `Mahsulot: ${madeH2O.toFixed(1)} mol`,
        labelB: `Ortib qolgan: ${(excessH2 + excessO2).toFixed(1)} mol`,
        metrics: [
          { label: 'Olingan H₂O', value: `${madeH2O.toFixed(1)} mol (${(madeH2O * 18).toFixed(0)} g)`, color: '#34d399' },
          { label: 'Ortib qolgan reagent', value: excessH2 > 0 ? `H₂ (${excessH2.toFixed(1)} mol)` : excessO2 > 0 ? `O₂ (${excessO2.toFixed(1)} mol)` : 'Teng stexiometrik!', color: '#22d3ee' },
        ],
      };
    }

    case 'chem_periodic': {
      const Z = Math.round(p.Z ?? 11);
      const shells = Z <= 2 ? [Z] : Z <= 10 ? [2, Z - 2] : Z <= 18 ? [2, 8, Z - 10] : [2, 8, 8, Z - 18];
      const names = ['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca'];
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2); ctx.fill();
      shells.forEach((cnt, idx) => {
        const r = 26 + idx * 24;
        ctx.strokeStyle = 'rgba(52,211,153,0.45)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        for (let e = 0; e < cnt; e++) {
          const a = (e / cnt) * Math.PI * 2 + t * (1.2 - idx * 0.15);
          ctx.fillStyle = '#38bdf8'; ctx.beginPath(); ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 4, 0, Math.PI * 2); ctx.fill();
        }
      });
      return {
        scopeTitle: 'Elektron qavatlar soni va tashqi valent elektronlar',
        traceA: shells.length * 30,
        traceB: shells[shells.length - 1],
        labelA: `Element: ${names[Z - 1] || 'Na'} (Z=${Z})`,
        labelB: `Qavat: ${shells.length} ta`,
        metrics: [
          { label: 'Element', value: `${names[Z - 1] || 'Na'} (Z = ${Z})`, color: '#34d399' },
          { label: 'Konfiguratsiya', value: shells.join('-'), color: '#22d3ee' },
        ],
      };
    }

    case 'chem_bonding': {
      const dx = p.dx ?? 1.2;
      const ionPct = (1 - Math.exp(-0.25 * dx * dx)) * 100;
      const shift = clamp(dx * 22, 0, 72);
      ctx.fillStyle = 'rgba(56,189,248,0.28)';
      ctx.beginPath(); ctx.ellipse(cx + shift * 0.45, cy, 90 + shift * 0.35, 52 - shift * 0.18, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(cx - 56, cy, 14, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#f472b6'; ctx.beginPath(); ctx.arc(cx + 56, cy, 16, 0, Math.PI * 2); ctx.fill();
      drawLabelPill(ctx, `δ⁺`, cx - 64, cy - 40);
      drawLabelPill(ctx, `δ⁻ (Zichlik ${ionPct.toFixed(0)}% siljigan)`, cx + 22, cy - 40);
      return {
        scopeTitle: 'Elektron zichligining qutbli/ion siljishi (%)',
        traceA: ionPct,
        traceB: dx * 30,
        labelA: `Ionlilik: ${ionPct.toFixed(1)}%`,
        labelB: `Δχ = ${dx.toFixed(1)}`,
        metrics: [
          { label: 'Bog‘ turi', value: dx >= 1.7 ? 'Ion bog‘lanish' : dx >= 0.4 ? 'Qutbli kovalent' : 'Qutbsiz kovalent', color: '#34d399' },
          { label: 'Ionlilik ulushi', value: `${ionPct.toFixed(1)}%`, color: '#f472b6' },
        ],
      };
    }

    case 'chem_vsepr': {
      const sig = Math.round(p.sig ?? 4), lp = Math.round(p.lp ?? 0);
      const sn = sig + lp;
      const angDeg = sn <= 2 ? 180 : sn === 3 ? (lp === 0 ? 120 : 116) : lp === 0 ? 109.5 : lp === 1 ? 107 : 104.5;
      ctx.fillStyle = '#fb923c'; ctx.beginPath(); ctx.arc(cx, cy, 14, 0, Math.PI * 2); ctx.fill();
      for (let i = 0; i < sig; i++) {
        const theta = ((i - (sig - 1) / 2) * (angDeg * Math.PI)) / 180 + Math.sin(t) * 0.08;
        const bx = cx + 92 * Math.cos(theta), by = cy + 92 * Math.sin(theta);
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, by); ctx.stroke();
        ctx.fillStyle = '#34d399'; ctx.beginPath(); ctx.arc(bx, by, 10, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'VSEPR Gibridlanish burchagi (°)',
        traceA: angDeg,
        traceB: sn * 20,
        labelA: `Burchak: ${angDeg}°`,
        labelB: sn <= 2 ? 'sp' : sn === 3 ? 'sp²' : 'sp³',
        metrics: [
          { label: 'Gibridlanish', value: sn <= 2 ? 'sp' : sn === 3 ? 'sp²' : 'sp³', color: '#34d399' },
          { label: 'Valent burchak', value: `${angDeg}°`, color: '#22d3ee' },
        ],
      };
    }

    case 'chem_thermo_kinetics': {
      const T = p.T ?? 320, Ea = p.Ea ?? 50;
      const rate = Math.exp(-Ea / (0.008314 * T)) * 10000;
      const ox = 52, oy = h - 26, pw = w - 104, ph = h - 54;
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.beginPath(); ctx.moveTo(ox, 22); ctx.lineTo(ox, oy); ctx.lineTo(w - 28, oy); ctx.stroke();
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 3; ctx.beginPath();
      for (let i = 0; i <= 50; i++) {
        const s = i / 50;
        const yv = 0.35 + (Ea / 130) * 0.6 * Math.exp(-Math.pow((s - 0.5) * 4.5, 2)) - s * 0.2;
        const px = ox + s * pw, py = oy - clamp(yv, 0.05, 0.95) * ph;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      drawLabelPill(ctx, `Energetik to‘siq E_a = ${Ea} kJ/mol`, ox + 12, 22);
      return {
        scopeTitle: 'Faollanish energiyasi Ea va tezlik konstantasi k(T)',
        traceA: rate,
        traceB: Ea,
        labelA: `k_rel = ${rate.toFixed(1)}`,
        labelB: `Ea = ${Ea} kJ`,
        metrics: [
          { label: 'Aktivatsiya to‘sig‘i Ea', value: `${Ea} kJ/mol`, color: '#fb923c' },
          { label: 'Nisbiy reaksiya tezligi', value: `${rate.toFixed(1)}`, color: '#34d399' },
        ],
      };
    }

    case 'chem_equilibrium': {
      const P = p.P ?? 5, T = p.T ?? 400;
      const yieldPct = clamp(18 + P * 4.8 - (T - 200) * 0.055, 5, 88);
      ctx.fillStyle = 'rgba(15,23,42,0.75)'; ctx.fillRect(cx - 120, cy - 26, 240, 52);
      ctx.fillStyle = '#34d399'; ctx.fillRect(cx - 118, cy - 24, 236 * (yieldPct / 100), 48);
      drawLabelPill(ctx, `Mahsulot unumi: ${yieldPct.toFixed(1)}% (P=${P} atm, ${T}°C)`, cx - 120, 22);
      return {
        scopeTitle: 'Le Shatelye muvozanat unumi (%)',
        traceA: yieldPct,
        traceB: 100 - yieldPct,
        labelA: `Mahsulot: ${yieldPct.toFixed(1)}%`,
        labelB: `Boshlang‘ich: ${(100 - yieldPct).toFixed(1)}%`,
        metrics: [
          { label: 'Muvozanat unumi', value: `${yieldPct.toFixed(1)}%`, color: '#34d399' },
          { label: 'Siljish yo‘nalishi', value: P >= 5 && T <= 420 ? 'O‘ngga (Mahsulotga)' : 'Chapga', color: '#22d3ee' },
        ],
      };
    }

    case 'chem_solutions': {
      const sol = p.solute ?? 40, T = p.temp ?? 30;
      const satLimit = 28 + T * 0.55;
      const excess = Math.max(0, sol - satLimit);
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2.5;
      ctx.strokeRect(cx - 90, 32, 180, h - 54);
      ctx.fillStyle = 'rgba(56,189,248,0.28)';
      ctx.fillRect(cx - 88, 64, 176, h - 88);
      if (excess > 0) {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(cx - 86, h - 30 - clamp(excess * 0.8, 4, 26), 172, clamp(excess * 0.8, 4, 26));
      }
      return {
        scopeTitle: 'Eruvchanlik chegarasi S(T) va erigan tuz',
        traceA: Math.min(sol, satLimit),
        traceB: satLimit,
        labelA: `Erigan: ${Math.min(sol, satLimit).toFixed(1)} g`,
        labelB: `Chegara: ${satLimit.toFixed(1)} g`,
        metrics: [
          { label: 'Eritma holati', value: excess > 0 ? `To‘yingan (+${excess.toFixed(1)} g cho‘kma)` : 'To‘yinmagan', color: excess > 0 ? '#fb923c' : '#34d399' },
          { label: 'Chegara S(T)', value: `${satLimit.toFixed(1)} g`, color: '#22d3ee' },
        ],
      };
    }

    case 'chem_ph_titration': {
      const pH = p.pH ?? 4.0;
      const hue = pH < 6.5 ? pH * 14 : pH > 7.5 ? 210 + (pH - 7) * 14 : 145;
      ctx.fillStyle = `hsla(${hue}, 85%, 52%, 0.45)`;
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2.5;
      ctx.strokeRect(cx - 80, 32, 160, h - 56);
      ctx.fillRect(cx - 78, 72, 156, h - 98);
      return {
        scopeTitle: 'Vodorod ko‘rsatkichi pH va muhit indikatori',
        traceA: pH,
        traceB: 14 - pH,
        labelA: `pH = ${pH.toFixed(1)}`,
        labelB: `pOH = ${(14 - pH).toFixed(1)}`,
        metrics: [
          { label: 'pH qiymati', value: `${pH.toFixed(1)}`, color: '#34d399' },
          { label: 'Muhit', value: pH < 6.8 ? 'Kislotali' : pH > 7.2 ? 'Ishqoriy' : 'Neytral', color: '#22d3ee' },
        ],
      };
    }

    case 'chem_electrochem': {
      const E = p.E ?? 1.1, I = p.I ?? 2.5;
      ctx.fillStyle = '#38bdf8'; ctx.fillRect(cx - 105, 42, 22, h - 76);
      ctx.fillStyle = '#d97706'; ctx.fillRect(cx + 83, 42, 22, h - 76);
      ctx.strokeStyle = '#facc15'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(cx - 94, 42); ctx.lineTo(cx - 94, 24); ctx.lineTo(cx + 94, 24); ctx.lineTo(cx + 94, 42); ctx.stroke();
      for (let i = 0; i < 6; i++) {
        const ex = cx - 80 + (((t * I * 38 + i * 32) % 160));
        ctx.fillStyle = '#fef08a'; ctx.beginPath(); ctx.arc(ex, 24, 4, 0, Math.PI * 2); ctx.fill();
      }
      return {
        scopeTitle: 'Elektrod potensiallari farqi E va elektr toki I',
        traceA: E,
        traceB: E * I,
        labelA: `EYUK = ${E.toFixed(2)} V`,
        labelB: `Quvvat = ${(E * I).toFixed(1)} Vt`,
        metrics: [
          { label: 'Kuchlanish E', value: `${E.toFixed(2)} V`, color: '#34d399' },
          { label: 'Tok kuchi I', value: `${I.toFixed(1)} A`, color: '#22d3ee' },
        ],
      };
    }

    case 'chem_flame_analysis': {
      const cat = Math.round(p.cation ?? 4);
      const specs = [
        ['Li⁺', 671, '#f43f5e'], ['Na⁺', 589, '#facc15'], ['K⁺', 766, '#c084fc'],
        ['Cu²⁺', 515, '#10b981'], ['Ba²⁺', 524, '#a3e635'], ['Ca²⁺', 622, '#fb923c'],
      ];
      const [ion, lam, col] = specs[(cat - 1) % 6];
      ctx.fillStyle = '#475569'; ctx.fillRect(cx - 18, h - 55, 36, 40);
      const r = 46 + Math.sin(t * 7) * 5;
      const g = ctx.createRadialGradient(cx, h - 95, 2, cx, h - 95, r);
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.4, col); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx, h - 105, r * 0.7, r * 1.4, 0, 0, Math.PI * 2); ctx.fill();
      return {
        scopeTitle: 'Alanga spektral emissiya chizig‘i λ (nm)',
        traceA: lam,
        traceB: 1240 / lam,
        labelA: `${ion}: ${lam} nm`,
        labelB: `E = ${(1240 / lam).toFixed(2)} eV`,
        metrics: [
          { label: 'Kation', value: ion, color: col },
          { label: 'To‘lqin uzunligi', value: `${lam} nm`, color: '#22d3ee' },
        ],
      };
    }

    case 'chem_spectroscopy': {
      const C = p.conc ?? 0.8, lam = p.lam ?? 520;
      const eps = Math.exp(-Math.pow((lam - 525) / 55, 2)) * 1.2;
      const A = eps * C;
      const T = Math.pow(10, -A) * 100;
      const col = wavelengthToColor(lam);
      drawArrow(ctx, 40, cy, cx - 38, cy, col, 6);
      ctx.strokeStyle = '#94a3b8'; ctx.strokeRect(cx - 38, cy - 48, 76, 96);
      ctx.fillStyle = `rgba(56,189,248,${clamp(C * 0.35, 0.1, 0.7)})`; ctx.fillRect(cx - 36, cy - 26, 72, 72);
      ctx.globalAlpha = clamp(T / 100, 0.12, 1);
      drawArrow(ctx, cx + 38, cy, w - 40, cy, col, 6);
      ctx.globalAlpha = 1;
      return {
        scopeTitle: 'Buger-Lambert-Ber yutilish A = εlC va o‘tkazish T%',
        traceA: A,
        traceB: T,
        labelA: `Optik zichlik A = ${A.toFixed(2)}`,
        labelB: `O‘tish T = ${T.toFixed(1)}%`,
        metrics: [
          { label: 'Optik zichlik A', value: `${A.toFixed(2)}`, color: '#f472b6' },
          { label: 'O‘tkazuvchanlik T', value: `${T.toFixed(1)}%`, color: '#22d3ee' },
        ],
      };
    }

    default:
      return null;
  }
}
