// Bespoke Quantum Observatory Emblems, Section Logos, Engine Badges & 3D Ambient Canvases

export const ATOMIX_MAIN_LOGO_SVG = `
<svg viewBox="0 0 64 64" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg" class="atomix-crest">
  <defs>
    <linearGradient id="ax-squircle-bg" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#091326" />
      <stop offset="100%" stop-color="#050814" />
    </linearGradient>
    <linearGradient id="ax-rim" x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#67e8f9" stop-opacity="0.9" />
      <stop offset="48%" stop-color="#818cf8" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#f472b6" stop-opacity="0.85" />
    </linearGradient>
    <linearGradient id="ax-orbit-1" x1="8" y1="16" x2="56" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.25" />
    </linearGradient>
    <linearGradient id="ax-orbit-2" x1="56" y1="16" x2="8" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#f472b6" stop-opacity="0.3" />
    </linearGradient>
    <radialGradient id="ax-core-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="32%" stop-color="#38bdf8" />
      <stop offset="70%" stop-color="#818cf8" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
    </radialGradient>
  </defs>
  <!-- Continuous-curvature squircle crest -->
  <path d="M32 3C49.5 3 61 10.2 61 32C61 53.8 49.5 61 32 61C14.5 61 3 53.8 3 32C3 10.2 14.5 3 32 3Z" fill="url(#ax-squircle-bg)" stroke="url(#ax-rim)" stroke-width="1.6"/>
  <!-- Top specular rim -->
  <path d="M13 13C19 7.8 25.2 5.4 32 5.4C38.8 5.4 45 7.8 51 13" stroke="rgba(255,255,255,0.45)" stroke-width="1.1" stroke-linecap="round"/>
  <!-- Core aura -->
  <circle cx="32" cy="32" r="14" fill="url(#ax-core-glow)" opacity="0.65"/>
  <!-- Three intersecting 3D quantum orbitals -->
  <g transform="rotate(28 32 32)">
    <ellipse cx="32" cy="32" rx="21.5" ry="7.8" stroke="url(#ax-orbit-1)" stroke-width="1.5"/>
    <circle cx="53.5" cy="32" r="2.5" fill="#67e8f9">
      <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="7s" repeatCount="indefinite"/>
    </circle>
  </g>
  <g transform="rotate(-28 32 32)">
    <ellipse cx="32" cy="32" rx="21.5" ry="7.8" stroke="url(#ax-orbit-2)" stroke-width="1.5"/>
    <circle cx="10.5" cy="32" r="2.3" fill="#f472b6">
      <animateTransform attributeName="transform" type="rotate" from="360 32 32" to="0 32 32" dur="5.6s" repeatCount="indefinite"/>
    </circle>
  </g>
  <g transform="rotate(90 32 32)">
    <ellipse cx="32" cy="32" rx="21.5" ry="7.6" stroke="rgba(52,211,153,0.65)" stroke-width="1.3" stroke-dasharray="3 3"/>
    <circle cx="53.5" cy="32" r="2.1" fill="#34d399">
      <animateTransform attributeName="transform" type="rotate" from="90 32 32" to="450 32 32" dur="9s" repeatCount="indefinite"/>
    </circle>
  </g>
  <!-- Nucleus spark -->
  <circle cx="32" cy="32" r="4.6" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.4"/>
  <circle cx="32" cy="32" r="1.9" fill="#22d3ee"/>
</svg>`;

export const SECTION_LOGOS = {
  // 1. Kirish va SI — Precision 3D Coordinate Triad & Vector Compass
  'sec-1': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="rgba(34,211,238,0.28)" stroke-width="1.2" stroke-dasharray="3 3"/>
    <circle cx="24" cy="24" r="11" stroke="rgba(34,211,238,0.45)" stroke-width="1.2"/>
    <path d="M24 27V7M24 7L20.5 11.5M24 7L27.5 11.5" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 27L39 36M39 36L33.5 36.2M39 36L36.8 31.2" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 27L9 36M9 36L14.5 36.2M9 36L11.2 31.2" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 27L36 14" stroke="#34d399" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="36" cy="14" r="2.5" fill="#34d399"/>
    <circle cx="24" cy="27" r="3" fill="#f8fafc" stroke="#22d3ee" stroke-width="1.5"/>
  </svg>`,

  // 2. Mexanika — Precision Gyroscope, Ballistic Parabolic Arc & Vectors
  'sec-2': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(-24 24 24)" stroke="#38bdf8" stroke-width="1.7"/>
    <ellipse cx="24" cy="24" rx="18" ry="8" transform="rotate(24 24 24)" stroke="rgba(129,140,248,0.75)" stroke-width="1.5"/>
    <line x1="24" y1="6" x2="24" y2="42" stroke="#94a3b8" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M9 36Q24 10 39 34" stroke="#34d399" stroke-width="2" stroke-dasharray="3 2.5" stroke-linecap="round"/>
    <circle cx="24" cy="24" r="4.5" fill="#38bdf8" stroke="#f8fafc" stroke-width="1.2"/>
    <circle cx="32" cy="19" r="2.6" fill="#facc15"/>
  </svg>`,

  // 3. Tebranishlar va To'lqinlar — Dual Phase-Locked Standing Harmonic Waves
  'sec-3': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="24" x2="43" y2="24" stroke="rgba(167,139,250,0.35)" stroke-width="1.2"/>
    <path d="M5 24C9.5 10 14 10 18.5 24C23 38 27.5 38 32 24C36.5 10 40 12 43 24" stroke="#a78bfa" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M5 24C9.5 38 14 38 18.5 24C23 10 27.5 10 32 24C36.5 38 40 36 43 24" stroke="#22d3ee" stroke-width="1.7" stroke-dasharray="2.5 2.5" stroke-linecap="round"/>
    <circle cx="18.5" cy="24" r="2.6" fill="#f8fafc"/>
    <circle cx="32" cy="24" r="2.6" fill="#f8fafc"/>
    <circle cx="11.8" cy="14" r="2" fill="#f472b6"/>
    <circle cx="25.2" cy="34" r="2" fill="#38bdf8"/>
  </svg>`,

  // 4. Termodinamika — Carnot P-V Thermodynamic Cycle & Thermal Core
  'sec-4': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10V38H38" stroke="rgba(148,163,184,0.65)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M15 15Q24 17 34 25Q28 31 20 33Q17 24 15 15Z" fill="rgba(251,146,60,0.2)" stroke="#fb923c" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="15" cy="15" r="2.6" fill="#ef4444"/>
    <circle cx="34" cy="25" r="2.6" fill="#fb923c"/>
    <circle cx="20" cy="33" r="2.6" fill="#38bdf8"/>
    <path d="M29 12L33 9M33 14L37 12" stroke="#facc15" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  // 5. Elektr va Magnetizm — Magnetic Flux Dipole & Induction Helix
  'sec-5': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="14" cy="24" rx="8" ry="15" stroke="rgba(52,211,153,0.45)" stroke-width="1.4"/>
    <ellipse cx="34" cy="24" rx="8" ry="15" stroke="rgba(52,211,153,0.45)" stroke-width="1.4"/>
    <path d="M25.5 8L18 25H25L22.5 40L32 22H24.5L25.5 8Z" fill="rgba(52,211,153,0.28)" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="9" cy="16" r="2.2" fill="#22d3ee"/>
    <circle cx="39" cy="32" r="2.2" fill="#34d399"/>
  </svg>`,

  // 6. Optika — Optical Dispersion Prism & Neon Spectrum Beams
  'sec-6': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="24,8 8,37 40,37" fill="rgba(244,114,182,0.14)" stroke="#e2e8f0" stroke-width="1.8" stroke-linejoin="round"/>
    <line x1="4" y1="24" x2="17" y2="21" stroke="#f8fafc" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="17" y1="21" x2="31" y2="21" stroke="rgba(255,255,255,0.65)" stroke-width="1.4"/>
    <line x1="31" y1="21" x2="44" y2="17" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="31" y1="22" x2="44" y2="23" stroke="#facc15" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="32" y1="23" x2="44" y2="29" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="32.5" y1="24" x2="43" y2="35" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  // 7. Nisbiylik va Kvant — Wavefunction Orbitals, Relativistic Cone & Quarks
  'sec-7': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="17" stroke="rgba(129,140,248,0.35)" stroke-width="1.3" stroke-dasharray="2.5 2.5"/>
    <ellipse cx="24" cy="24" rx="17" ry="6.5" transform="rotate(42 24 24)" stroke="#818cf8" stroke-width="1.6"/>
    <ellipse cx="24" cy="24" rx="17" ry="6.5" transform="rotate(-42 24 24)" stroke="#22d3ee" stroke-width="1.6"/>
    <circle cx="22.5" cy="22.5" r="2.2" fill="#f472b6"/>
    <circle cx="26.2" cy="22.8" r="2.2" fill="#34d399"/>
    <circle cx="24.2" cy="26.2" r="2.2" fill="#facc15"/>
  </svg>`,

  // 8. Astrofizika — Black Hole Gravitational Lensing & Accretion Jet
  'sec-8': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="24" y1="4" x2="24" y2="44" stroke="rgba(250,204,21,0.45)" stroke-width="1.5" stroke-dasharray="3 2.5"/>
    <ellipse cx="24" cy="24" rx="19" ry="6.2" transform="rotate(-14 24 24)" stroke="#fb923c" stroke-width="2.2"/>
    <ellipse cx="24" cy="24" rx="13.5" ry="4.4" transform="rotate(-14 24 24)" stroke="#fde047" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="7.5" fill="#030712" stroke="#facc15" stroke-width="1.8"/>
    <circle cx="10" cy="11" r="1.6" fill="#f8fafc"/>
    <circle cx="39" cy="36" r="1.4" fill="#38bdf8"/>
  </svg>`,
};

export const ENGINE_LOGOS = {
  'Effectuall 3D Lab': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22d3ee" stroke-width="1.9"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z"/><path d="M12 22V12M21 7L12 12L3 7"/></svg>`,
  'cx20 Cannon-es 3D': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" stroke-width="1.9"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="4"/></svg>`,
  'Three.js Particle Fluids (PBF)': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38bdf8" stroke-width="1.9"><path d="M12 2.5C12 2.5 5 10.2 5 15a7 7 0 0 0 14 0c0-4.8-7-12.5-7-12.5Z"/></svg>`,
  'mbsaloka WebGL2': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fb923c" stroke-width="1.9"><circle cx="8.5" cy="12" r="4.5"/><circle cx="16.5" cy="12" r="3.5"/></svg>`,
};

// Living Cosmic Quantum Canvas (sits behind Liquid Glass layers so blur samples live color & motion)
export function initQuantumAmbientCanvas(canvas) {
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let w = 0, h = 0, raf = 0;
  let accentHex = '#22d3ee';
  let mouseX = 0.5, mouseY = 0.4;
  let targetX = 0.5, targetY = 0.4;

  const particles = Array.from({ length: 48 }, (_, i) => ({
    x: (i * 0.6180339) % 1,
    y: (i * 0.381966) % 1,
    vx: (Math.sin(i * 4.7) * 0.00018),
    vy: (Math.cos(i * 3.1) * 0.00016),
    r: 1.1 + (i % 4) * 0.55,
    phase: i * 0.9,
  }));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const onMove = (e) => {
    targetX = e.clientX / Math.max(1, w);
    targetY = e.clientY / Math.max(1, h);
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  const obs = new MutationObserver(() => {
    const val = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    if (val) accentHex = val;
  });
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

  let t = 0;
  function tick() {
    t += 0.012;
    mouseX += (targetX - mouseX) * 0.04;
    mouseY += (targetY - mouseY) * 0.04;

    ctx.clearRect(0, 0, w, h);

    // Three slow atmospheric nebula washes for frosted glass layers to refract
    const orbs = [
      { x: w * (0.78 + (mouseX - 0.5) * 0.08), y: h * (0.14 + (mouseY - 0.5) * 0.08), r: Math.max(w, h) * 0.42, c: accentHex, a: 0.14 },
      { x: w * (0.16 - (mouseX - 0.5) * 0.06), y: h * (0.82 - (mouseY - 0.5) * 0.06), r: Math.max(w, h) * 0.38, c: '#818cf8', a: 0.11 },
      { x: w * (0.52 + Math.sin(t * 0.25) * 0.05), y: h * (0.48 + Math.cos(t * 0.2) * 0.05), r: Math.max(w, h) * 0.3, c: '#f472b6', a: 0.055 },
    ];
    for (const o of orbs) {
      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      g.addColorStop(0, o.c);
      g.addColorStop(1, 'transparent');
      ctx.save();
      ctx.globalAlpha = o.a;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Subtle quantum particles & weak neighbor links
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x = (p.x + p.vx + 1) % 1;
      p.y = (p.y + p.vy + 1) % 1;
      const px = p.x * w + (mouseX - 0.5) * (16 + p.r * 5);
      const py = p.y * h + (mouseY - 0.5) * (16 + p.r * 5);

      ctx.fillStyle = i % 3 === 0 ? accentHex : 'rgba(226, 232, 240, 0.5)';
      ctx.globalAlpha = 0.22 + 0.18 * Math.sin(t * 1.4 + p.phase);
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onMove);
    obs.disconnect();
  };
}

// Interactive 3D Projected Quantum Hologram inside Hero Observatory Deck
export function initHeroAtomCanvas(canvas) {
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let cw = 360, ch = 280, raf = 0;
  let tiltX = 0.35, tiltY = -0.25;
  let targetTiltX = 0.35, targetTiltY = -0.25;

  function sync() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 40 || rect.height < 40) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = rect.width;
    ch = rect.height;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  sync();
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
  ro?.observe(canvas);

  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    targetTiltY = ((e.clientX - r.left) / r.width - 0.5) * 1.2;
    targetTiltX = ((e.clientY - r.top) / r.height - 0.5) * 1.0;
  });

  function project3D(x, y, z, rx, ry) {
    const cy1 = Math.cos(ry), sy1 = Math.sin(ry);
    const x1 = x * cy1 + z * sy1;
    const z1 = -x * sy1 + z * cy1;
    const cx1 = Math.cos(rx), sx1 = Math.sin(rx);
    const y2 = y * cx1 - z1 * sx1;
    const z2 = y * sx1 + z1 * cx1;
    const fov = 320;
    const scale = fov / (fov + z2 + 120);
    return { x: cw * 0.5 + x1 * scale, y: ch * 0.5 + y2 * scale, z: z2, s: scale };
  }

  const orbits = [
    { rx: 0.45, rz: 0.25, col: '#22d3ee', speed: 1.5, phase: 0 },
    { rx: -0.45, rz: 1.32, col: '#a78bfa', speed: 1.85, phase: 2.1 },
    { rx: 0.92, rz: -0.78, col: '#f472b6', speed: 1.25, phase: 4.2 },
    { rx: 1.35, rz: 0.52, col: '#34d399', speed: 2.1, phase: 1.1 },
  ];

  let t = 0;
  function frame() {
    t += 0.016;
    tiltX += (targetTiltX + Math.sin(t * 0.5) * 0.14 - tiltX) * 0.06;
    tiltY += (targetTiltY + t * 0.38 - tiltY) * 0.05;

    ctx.clearRect(0, 0, cw, ch);
    const R = Math.min(cw, ch) * 0.39;

    // Outer calibrated holographic rings
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.14)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, R * 1.15, 0, Math.PI * 2);
    ctx.stroke();

    // Central relativistic core glow
    const grad = ctx.createRadialGradient(cw * 0.5, ch * 0.5, 2, cw * 0.5, ch * 0.5, R * 0.65);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.22, 'rgba(34,211,238,0.48)');
    grad.addColorStop(0.55, 'rgba(129,140,248,0.18)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, R * 0.65, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus protons/neutrons cluster
    for (let i = 0; i < 6; i++) {
      const a = t * 1.2 + (i * Math.PI) / 3;
      const np = project3D(Math.cos(a) * 8, Math.sin(a * 1.3) * 8, Math.sin(a) * 8, tiltX, tiltY);
      ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#f472b6';
      ctx.beginPath();
      ctx.arc(np.x, np.y, 4.2 * np.s, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4 inclined 3D electron orbitals
    orbits.forEach((orb) => {
      const cRx = Math.cos(orb.rx), sRx = Math.sin(orb.rx);
      const cRz = Math.cos(orb.rz), sRz = Math.sin(orb.rz);

      const ptAt = (theta) => {
        const lx = Math.cos(theta) * R;
        const ly = Math.sin(theta) * R;
        const y1 = ly * cRx;
        const z1 = ly * sRx;
        const x2 = lx * cRz - y1 * sRz;
        const y2 = lx * sRz + y1 * cRz;
        return project3D(x2, y2, z1, tiltX, tiltY);
      };

      ctx.strokeStyle = orb.col;
      ctx.globalAlpha = 0.34;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let s = 0; s <= 64; s++) {
        const p = ptAt((s / 64) * Math.PI * 2);
        if (s === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // Electron + glowing comet wake
      const theta = t * orb.speed + orb.phase;
      ctx.globalAlpha = 0.72;
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      for (let k = 0; k <= 12; k++) {
        const p = ptAt(theta - k * 0.07);
        if (k === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      const ep = ptAt(theta);
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ep.x, ep.y, 3.8 * ep.s, 0, Math.PI * 2);
      ctx.fill();
    });

    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    ro?.disconnect();
  };
}
