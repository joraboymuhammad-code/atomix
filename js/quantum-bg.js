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

  // Chemistry 1. Umumiy va Nazariy Kimyo — Flask + VSEPR Electron Orbit
  'csec-1': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 8H29M21 8V18L11.5 34.5C10.5 36.3 11.8 38.5 13.9 38.5H34.1C36.2 38.5 37.5 36.3 36.5 34.5L27 18V8" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.5 29.5H33.5L36 34.2C36.4 35.1 35.8 36 34.8 36H13.2C12.2 36 11.6 35.1 12 34.2L14.5 29.5Z" fill="rgba(16,185,129,0.28)"/>
    <circle cx="21" cy="25" r="2.1" fill="#34d399"/>
    <circle cx="27" cy="21" r="1.7" fill="#22d3ee"/>
    <circle cx="24" cy="14" r="1.5" fill="#facc15"/>
  </svg>`,

  // Chemistry 2. Fizik Kimyo — Gibbs Activation Curve & Galvanic Electrode
  'csec-2': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10V38H41" stroke="rgba(148,163,184,0.55)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M10 30C15 30 18 13 24 13C30 13 33 34 39 34" stroke="#06b6d4" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M10 30C16 30 19 21 24 21C29 21 33 34 39 34" stroke="#facc15" stroke-width="1.7" stroke-dasharray="3 2.5" stroke-linecap="round"/>
    <circle cx="24" cy="13" r="2.6" fill="#06b6d4"/>
    <circle cx="24" cy="21" r="2.4" fill="#facc15"/>
  </svg>`,

  // Chemistry 3. Noorganik Kimyo — Cubic Crystal Lattice & Flame Spectrum
  'csec-3': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" stroke="#f59e0b" stroke-width="1.7" fill="rgba(245,158,11,0.12)" stroke-linejoin="round"/>
    <path d="M10 16L24 24L38 16M24 24V40" stroke="#fbbf24" stroke-width="1.5"/>
    <circle cx="24" cy="8" r="2.6" fill="#fbbf24"/>
    <circle cx="24" cy="24" r="3" fill="#38bdf8"/>
    <circle cx="10" cy="32" r="2.4" fill="#34d399"/>
    <circle cx="38" cy="32" r="2.4" fill="#f472b6"/>
  </svg>`,

  // Chemistry 4. Organik Kimyo — Aromatic Benzene Hexagon & Resonance Ring
  'csec-4': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" stroke="#ec4899" stroke-width="2.1" fill="rgba(236,72,153,0.14)" stroke-linejoin="round"/>
    <circle cx="24" cy="24" r="7.5" stroke="#f472b6" stroke-width="1.7" stroke-dasharray="3.5 2"/>
    <line x1="24" y1="3" x2="24" y2="8" stroke="#f9a8d4" stroke-width="2" stroke-linecap="round"/>
    <line x1="38" y1="32" x2="43" y2="35" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24" cy="24" r="2.3" fill="#fdf2f8"/>
  </svg>`,

  // Chemistry 5. Amaliy, Sanoat va Bioorganik Kimyo — DNA Helix & Bio-Reactor
  'csec-5': `
  <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8C14 16 34 16 34 24C34 32 14 32 14 40" stroke="#8b5cf6" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M34 8C34 16 14 16 14 24C14 32 34 32 34 40" stroke="#22d3ee" stroke-width="2.1" stroke-linecap="round"/>
    <line x1="16" y1="12" x2="32" y2="12" stroke="#a78bfa" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="18" y1="20" x2="30" y2="20" stroke="#38bdf8" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="18" y1="28" x2="30" y2="28" stroke="#34d399" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="16" y1="36" x2="32" y2="36" stroke="#f472b6" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,
};

const ICON_3DMOL = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" stroke-width="1.9"><circle cx="12" cy="7" r="3"/><circle cx="6.5" cy="16.5" r="2.7"/><circle cx="17.5" cy="16.5" r="2.7"/><path d="M10.4 9.5L7.9 14.1M13.6 9.5L16.1 14.1"/></svg>`;
const ICON_CHEM_BENCH = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" stroke-width="1.9"><path d="M9 3H15M10 3V9L5.5 17.5A2 2 0 0 0 7.2 20.5H16.8A2 2 0 0 0 18.5 17.5L14 9V3"/><path d="M7.5 15H16.5"/></svg>`;
const ICON_PHET = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f59e0b" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(35 12 12)"/><circle cx="12" cy="12" r="2" fill="#f59e0b"/></svg>`;

export const ENGINE_LOGOS = {
  'Three.js PBR 3D': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38bdf8" stroke-width="1.9"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8"/><path d="M12 22V12M22 8L12 12L2 8"/></svg>`,
  'Falstad Open-Source': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#facc15" stroke-width="1.9"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>`,
  'Effectuall 3D Lab': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22d3ee" stroke-width="1.9"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z"/><path d="M12 22V12M21 7L12 12L3 7"/></svg>`,
  'cx20 Cannon-es 3D': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" stroke-width="1.9"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="4"/></svg>`,
  'Three.js Particle Fluids (PBF)': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#38bdf8" stroke-width="1.9"><path d="M12 2.5C12 2.5 5 10.2 5 15a7 7 0 0 0 14 0c0-4.8-7-12.5-7-12.5Z"/></svg>`,
  'mbsaloka WebGL2': `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fb923c" stroke-width="1.9"><circle cx="8.5" cy="12" r="4.5"/><circle cx="16.5" cy="12" r="3.5"/></svg>`,
  '3Dmol.js': ICON_3DMOL,
  '3Dmol.js · MolView': ICON_3DMOL,
  '3Dmol.js · PhET': ICON_3DMOL,
  '3Dmol.js · ChemCollective': ICON_3DMOL,
  'ChemCollective': ICON_CHEM_BENCH,
  'ChemCollective · PhET': ICON_CHEM_BENCH,
  'ChemCollective · Amrita OLabs': ICON_CHEM_BENCH,
  'Amrita OLabs · PhET': ICON_CHEM_BENCH,
  'Amrita OLabs · VLab': ICON_CHEM_BENCH,
  'VLab': ICON_CHEM_BENCH,
  'OLabs': ICON_CHEM_BENCH,
  'PhET': ICON_PHET,
  'PhET Interactive Sims': ICON_PHET,
  'PhET · VLab': ICON_PHET,
  'PhET Interactive Sims · VLab': ICON_PHET,
  'PhET · ChemCollective': ICON_PHET,
  'PhET · Amrita OLabs': ICON_PHET,
  'PhET · 3Dmol.js': ICON_PHET,
  'Effectuall 3D Lab · PhET': ICON_PHET,
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

    // 1. Perspective 3D cyber-laboratory floor grid fading toward horizon
    const horY = h * 0.48;
    ctx.save();
    ctx.strokeStyle = accentHex;
    ctx.globalAlpha = 0.055;
    ctx.lineWidth = 1;
    const vanishX = w * 0.5 + (mouseX - 0.5) * 90;
    for (let i = -10; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(vanishX + i * 28, horY);
      ctx.lineTo(w * 0.5 + i * (w * 0.14), h + 40);
      ctx.stroke();
    }
    for (let r = 1; r <= 7; r++) {
      const p = Math.pow(r / 7, 1.85);
      const ry = horY + p * (h - horY);
      ctx.beginPath();
      ctx.moveTo(0, ry);
      ctx.lineTo(w, ry);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Three atmospheric volumetric aurora orbs for frosted folio refraction
    const orbs = [
      { x: w * (0.78 + (mouseX - 0.5) * 0.09), y: h * (0.14 + (mouseY - 0.5) * 0.09), r: Math.max(w, h) * 0.45, c: accentHex, a: 0.16 },
      { x: w * (0.16 - (mouseX - 0.5) * 0.07), y: h * (0.82 - (mouseY - 0.5) * 0.07), r: Math.max(w, h) * 0.40, c: '#818cf8', a: 0.13 },
      { x: w * (0.50 + Math.sin(t * 0.25) * 0.06), y: h * (0.46 + Math.cos(t * 0.2) * 0.06), r: Math.max(w, h) * 0.34, c: '#10b981', a: 0.08 },
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

    // 3. Flowing quantum wave ribbon across horizon
    ctx.save();
    ctx.strokeStyle = accentHex;
    ctx.globalAlpha = 0.08;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 24) {
      const y = horY + Math.sin(x * 0.008 + t * 1.1) * 26 + Math.cos(x * 0.015 - t * 0.7) * 14;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();

    // 4. Quantum depth particles & constellation links
    const coords = [];
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x = (p.x + p.vx + 1) % 1;
      p.y = (p.y + p.vy + 1) % 1;
      const px = p.x * w + (mouseX - 0.5) * (18 + p.r * 6);
      const py = p.y * h + (mouseY - 0.5) * (18 + p.r * 6);
      coords.push([px, py]);

      ctx.fillStyle = i % 3 === 0 ? accentHex : i % 3 === 1 ? '#34d399' : 'rgba(226, 232, 240, 0.55)';
      ctx.globalAlpha = 0.28 + 0.2 * Math.sin(t * 1.4 + p.phase);
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i < coords.length; i += 2) {
      const [x1, y1] = coords[i];
      const [x2, y2] = coords[(i + 7) % coords.length];
      if (Math.hypot(x2 - x1, y2 - y1) < 210) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
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

// Interactive 3D Projected Quantum Hologram inside Hero & Landing Decks
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
    targetTiltY = ((e.clientX - r.left) / r.width - 0.5) * 1.4;
    targetTiltX = ((e.clientY - r.top) / r.height - 0.5) * 1.1;
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

  // Outer 3D geodesic ring vertices for depth cage
  const cagePts = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return [Math.cos(a), Math.sin(a) * 0.55, Math.sin(a * 2) * 0.45];
  });

  let t = 0;
  function frame() {
    t += 0.016;
    tiltX += (targetTiltX + Math.sin(t * 0.5) * 0.16 - tiltX) * 0.06;
    tiltY += (targetTiltY + t * 0.38 - tiltY) * 0.05;

    ctx.clearRect(0, 0, cw, ch);
    const R = Math.min(cw, ch) * 0.39;

    // Outer calibrated holographic rings + tick marks
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, R * 1.18, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(52, 211, 153, 0.16)';
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, R * 1.28, -t * 0.25, Math.PI * 1.6 - t * 0.25);
    ctx.stroke();
    ctx.setLineDash([]);

    // Geodesic outer polygon wireframe
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    cagePts.forEach((pt, idx) => {
      const p = project3D(pt[0] * R * 1.12, pt[1] * R * 1.12, pt[2] * R * 1.12, tiltX * 0.7, -tiltY * 0.7);
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.stroke();

    // Central relativistic core glow
    const grad = ctx.createRadialGradient(cw * 0.5, ch * 0.5, 2, cw * 0.5, ch * 0.5, R * 0.68);
    grad.addColorStop(0, 'rgba(255,255,255,0.92)');
    grad.addColorStop(0.22, 'rgba(34,211,238,0.52)');
    grad.addColorStop(0.55, 'rgba(129,140,248,0.20)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, R * 0.68, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus protons/neutrons cluster
    for (let i = 0; i < 8; i++) {
      const a = t * 1.25 + (i * Math.PI) / 4;
      const np = project3D(Math.cos(a) * 9, Math.sin(a * 1.3) * 9, Math.sin(a) * 9, tiltX, tiltY);
      ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#f472b6';
      ctx.beginPath();
      ctx.arc(np.x, np.y, 4.4 * np.s, 0, Math.PI * 2);
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
      ctx.globalAlpha = 0.38;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let s = 0; s <= 64; s++) {
        const p = ptAt((s / 64) * Math.PI * 2);
        if (s === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      const theta = t * orb.speed + orb.phase;
      ctx.globalAlpha = 0.82;
      ctx.lineWidth = 2.8;
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
      ctx.arc(ep.x, ep.y, 4 * ep.s, 0, Math.PI * 2);
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

// Live 3D Mini-Canvases embedded inside Physics & Chemistry Academy Cards on Landing Page
export function initMiniAcademyCanvases(physCanvas, chemCanvas) {
  let raf = 0;
  let t = 0;

  function setup(c) {
    if (!c) return null;
    const r = c.getBoundingClientRect();
    if (r.width < 20) return null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (c.width !== Math.round(r.width * dpr)) {
      c.width = Math.round(r.width * dpr);
      c.height = Math.round(r.height * dpr);
    }
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w: r.width, h: r.height };
  }

  function frame() {
    t += 0.03;

    // Physics 3D Gyroscope + Harmonic Wavefront
    const p = setup(physCanvas);
    if (p) {
      const { ctx, w, h } = p;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.25, cy = h * 0.5;
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.6 + i * 0.35) + i);
        ctx.strokeStyle = i === 0 ? '#38bdf8' : i === 1 ? '#818cf8' : '#22d3ee';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, 34, 14 + i * 5, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(cx, cy, 4.5, 0, Math.PI * 2); ctx.fill();

      // Standing wave beam
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      for (let x = w * 0.44; x < w - 16; x += 4) {
        const u = (x - w * 0.44) / (w * 0.52);
        const y = cy + Math.sin(u * Math.PI * 4 - t * 2) * Math.sin(u * Math.PI) * 26;
        if (x === Math.ceil(w * 0.44)) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Chemistry 3D Spinning Benzene Ring + Lattice Nodes
    const ch = setup(chemCanvas);
    if (ch) {
      const { ctx, w, h } = ch;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.30, cy = h * 0.5;
      const ca = Math.cos(t * 0.7), sa = Math.sin(t * 0.7);
      const ring = [0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i * Math.PI) / 3;
        const x0 = Math.cos(a) * 32, y0 = Math.sin(a) * 32;
        return { x: cx + x0 * ca, y: cy + y0, z: x0 * sa };
      });
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ring.forEach((pt, idx) => (idx === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
      ctx.closePath();
      ctx.stroke();
      ring.forEach((pt) => {
        ctx.fillStyle = '#6ee7b7';
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2); ctx.fill();
      });

      // Titration / Molecular bond pulse on right
      const rx = w * 0.74;
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.strokeRect(rx - 22, cy - 26, 44, 54);
      ctx.fillStyle = `rgba(16, 185, 129, ${0.4 + 0.25 * Math.sin(t * 2)})`;
      ctx.fillRect(rx - 20, cy - 2, 40, 28);
      ctx.fillStyle = '#f472b6';
      ctx.beginPath(); ctx.arc(rx, cy - 30 + ((t * 18) % 24), 3.2, 0, Math.PI * 2); ctx.fill();
    }

    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(raf);
}
