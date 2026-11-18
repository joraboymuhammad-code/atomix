/* Atomix Real-Time Uzbek Localization & Bridge for Open-Source Simulations */
(function () {
  if (window.__ATOMIX_BRIDGE_ACTIVE__) return;
  window.__ATOMIX_BRIDGE_ACTIVE__ = true;

  // Redirect Theory buttons back to Atomix Tab 1 instead of external English pages
  window.theorySite = function () {
    try {
      window.parent.postMessage({ type: 'atomix-open-tab', tab: 'theory' }, '*');
    } catch (_) {}
  };

  const PHRASES = [
    // Longer phrases first
    ['Adjust launch height, angle and velocity of the projectile, to visualise the trajectory.', 'Trayektoriyani ko‘rish uchun otish balandligi, burchagi va boshlang‘ich tezligini sozlang.'],
    ['Three Point Charges at Triangle Corners', 'Uchburchak uchlaridagi uchta nuqtaviy zaryad'],
    ['Three Point Charges in a Line', 'To‘g‘ri chiziqdagi uchta nuqtaviy zaryad'],
    ['Conservation of Angular Momentum', 'Impuls momentining saqlanish qonuni'],
    ['Conservation of Momentum', 'Impulsning saqlanish qonuni'],
    ['Force on a Current Carrying Conductor', 'Tokli o‘tkazgichga ta’sir etuvchi Amper kuchi'],
    ['Force on a Current Carrying Wire', 'Tokli o‘tkazgichga ta’sir etuvchi kuch'],
    ['Close Up Force on a Current Carrying Wire', 'Tokli o‘tkazgichga ta’sir etuvchi kuch (yaqin ko‘rinish)'],
    ['Understanding Force on a Current Carrying Wire', 'Tokli o‘tkazgichga ta’sir etuvchi kuch tahlili'],
    ['Magnetic Effect due to Current', 'Tokning magnit maydoni'],
    ['Young\'s Double Slit Experiment', 'Yungning ikki tirqishli interferensiya tajribasi'],
    ['Total Internal Reflection', 'To‘la ichki qaytish hodisasi'],
    ['Electromagnetic Induction', 'Elektromagnit induksiya'],
    ['Factors Effecting Capacitance', 'Kondensator sig‘imiga ta’sir etuvchi omillar'],
    ['Understanding Capacitance', 'Elektr sig‘imi tushunchasi'],
    ['Understanding Inductance', 'Induktivlik tushunchasi'],
    ['Understanding Lorentz Force', 'Lorens kuchini o‘rganish'],
    ['Cathode Rays The Electrons', 'Katod nurlari va elektronlar'],
    ['Kinetic Theory of Gases', 'Gazlarning molekulyar-kinetik nazariyasi'],
    ['Ideal Gas Equation', 'Ideal gaz holat tenglamasi (Mendeleyev-Klapeyron)'],
    ['Astronomical Telescope', 'Astronomik teleskop'],
    ['Compound Microscope', 'Murakkab mikroskop'],
    ['Photoelectric Effect', 'Fotoeffekt hodisasi'],
    ['Simple Harmonic Motion', 'Garmonik tebranma harakat'],
    ['Damped Harmonic Motion', 'So‘nuvchi tebranishlar'],
    ['Gravitational Force', 'Gravitatsion o‘zaro ta’sir kuchi'],
    ['Law of Gravitation', 'Butun olam tortishish qonuni'],
    ['Projectile Motion', 'Burchak ostida otilgan jism harakati'],
    ['Circular Motion', 'Aylana bo‘ylab harakat'],
    ['Angular Momentum', 'Impuls momenti'],
    ['Precession Motion', 'Presessiya harakati'],
    ['Simple Pendulum', 'Matematik mayatnik'],
    ['Periodic Motion', 'Davriy harakat'],
    ['Banking on a Road', 'Burilish yo‘lining qiyaligi'],
    ['Motion in a Plane', 'Tekislikdagi harakat'],
    ['Motion in straight line', 'To‘g‘ri chiziqli harakat'],
    ['Motion in a Straight Line', 'To‘g‘ri chiziqli harakat'],
    ['Vector Algebra', 'Vektorlar algebrasi'],
    ['Vector Display', 'Vektorlar tasviri'],
    ['Spring Force', 'Elastiklik kuchi (Guk qonuni)'],
    ['Buoyant Force', 'Arximed kuchi (ko‘tarish kuchi)'],
    ['Torricellis Law', 'Torrichelli tajribasi va qonuni'],
    ['Torricelli\'s Law', 'Torrichelli tajribasi va qonuni'],
    ['Pascal\'s Law', 'Paskal qonuni'],
    ['Boyle\'s Law', 'Boyl-Mariott qonuni'],
    ['Charle\'s Law', 'Gey-Lyussak / Sharl qonuni'],
    ['Charles\'s Law', 'Sharl / Gey-Lyussak qonuni'],
    ['Hot Air Balloon', 'Issiq havo shari (Arximed kuchi)'],
    ['Coulomb\'s Law', 'Kulon qonuni'],
    ['The Electric Field', 'Elektr maydoni'],
    ['Electric Field', 'Elektr maydon kuchlanganligi'],
    ['LC Oscillator', 'Tebranish konturi (LC)'],
    ['Fleming\'s Thumb Rule', 'O‘ng va chap qo‘l qoidasi'],
    ['Motional EMF', 'Harakatdagi o‘tkazgichda EYuK'],
    ['Hall Effect', 'Xoll effekti'],
    ['Converging Lens', 'Yig‘uvchi linza'],
    ['Diverging Lens', 'Sochuvchi linza'],
    ['Converging Mirror', 'Botik sferik ko‘zgu'],
    ['Diverging Mirror', 'Qavariq sferik ko‘zgu'],
    ['Refraction of Light', 'Yorug‘likning sinishi (Snell qonuni)'],
    ['Reflection of Light', 'Yorug‘likning qaytishi'],
    ['Apparent depth', 'Ko‘rinma chuqurlik'],
    ['Apparent Depth', 'Ko‘rinma chuqurlik'],
    ['Light as Rays and Waves', 'Yorug‘lik: nurlar va to‘lqinlar'],
    ['Understanding Waves', 'To‘lqinlarni o‘rganish'],
    ['Hydrogen Atom', 'Vodorod atomi'],
    ['The Bohr Atom', 'Bor atom modeli'],
    ['Carnot Cycle Simulation', 'Karno sikli 3D simulyatsiyasi'],
    ['Launch Height', 'Otish balandligi'],
    ['Launch Velocity', 'Boshlang‘ich tezlik'],
    ['Launch Angle', 'Otish burchagi'],
    ['Maximum Height', 'Maksimal ko‘tarilish balandligi'],
    ['Maximum Range', 'Maksimal uchish uzoqligi'],
    ['Time of Flight', 'Uchish vaqti'],
    ['Initial Velocity', 'Boshlang‘ich tezlik'],
    ['Final Velocity', 'Oxirgi tezlik'],
    ['Angular Velocity', 'Burchak tezlik'],
    ['Linear Velocity', 'Chiziqli tezlik'],
    ['Centripetal Acceleration', 'Markazga intilma tezlanish'],
    ['Centripetal Force', 'Markazga intilma kuch'],
    ['Moment of Inertia', 'Inersiya momenti'],
    ['Kinetic Energy', 'Kinetik energiya'],
    ['Potential Energy', 'Potensial energiya'],
    ['Total Energy', 'To‘la energiya'],
    ['Mechanical Energy', 'Mexanik energiya'],
    ['Spring Constant', 'Prujina bikrligi (k)'],
    ['Surface Tension', 'Sirt taranglik'],
    ['Relative Density', 'Nisbiy zichlik'],
    ['Angle of Incidence', 'Tushish burchagi'],
    ['Angle of Refraction', 'Sinish burchagi'],
    ['Refractive Index', 'Sinish ko‘rsatkichi'],
    ['Focal Length', 'Fokus masofasi'],
    ['Object Distance', 'Buyum masofasi'],
    ['Image Distance', 'Tasvir masofasi'],
    ['Work Function', 'Chiqish ishi'],
    ['Stopping Potential', 'Tormozlovchi kuchlanish'],
    ['Threshold Frequency', 'Qizil chegara chastotasi'],
    ['Magnetic Field', 'Magnit maydon induksiyasi (B)'],
    ['Magnetic Flux', 'Magnit oqimi (Φ)'],
    ['Electric Potential', 'Elektr potensial'],
    ['Potential Difference', 'Potensiallar farqi (Kuchlanish)'],
    ['Slow Motion', 'Sekinlashtirilgan'],
    ['Real Time', 'Real vaqt'],
    ['Pause / Resume', 'Pauza / Davom etish'],
    ['Play / Pause', 'Ijro / Pauza']
  ];

  const WORDS = new Map([
    ['PROJECTILE MOTION', 'BURCHAK OSTIDA OTILGAN JISM'],
    ['THEORY', 'NAZARIYA (1-PUNKT)'],
    ['SHOOT', 'OTISH'],
    ['LAUNCH', 'UCHIRISH'],
    ['RESET', 'QAYTA TIKLASH'],
    ['START', 'BOSHLASH'],
    ['STOP', 'TO‘XTATISH'],
    ['PAUSE', 'PAUZA'],
    ['PLAY', 'IJRO ETISH'],
    ['CLEAR', 'TOZALASH'],
    ['GRID', 'PANJARA'],
    ['VECTOR', 'VEKTOR'],
    ['VECTORS', 'VEKTORLAR'],
    ['COMPONENTS', 'PROYEKSIYALAR'],
    ['LABELS', 'YORLIQLAR'],
    ['AXES', 'O‘QLAR'],
    ['CONTROLS', 'BOSHQARUV'],
    ['PARAMETERS', 'PARAMETRLAR'],
    ['SETTINGS', 'SOZLAMALAR'],
    ['VELOCITY', 'TEZLIK'],
    ['SPEED', 'TEZLIK'],
    ['ACCELERATION', 'TEZLANISH'],
    ['HEIGHT', 'BALANDLIK'],
    ['DISTANCE', 'MASOFA'],
    ['DISPLACEMENT', 'KO‘CHISH'],
    ['POSITION', 'KOORDINATA'],
    ['ANGLE', 'BURCHAK'],
    ['MASS', 'MASSA'],
    ['FORCE', 'KUCH'],
    ['TORQUE', 'KUCH MOMENTI'],
    ['GRAVITY', 'GRAVITATSIYA (g)'],
    ['WEIGHT', 'OG‘IRLIK'],
    ['FRICTION', 'ISHQALANISH'],
    ['TENSION', 'TARANGLIK'],
    ['PRESSURE', 'BOSIM'],
    ['VOLUME', 'HAJM'],
    ['TEMPERATURE', 'HARORAT'],
    ['DENSITY', 'ZICHLIK'],
    ['VISCOSITY', 'QOVUSHQOQLIK'],
    ['AMPLITUDE', 'AMPLITUDA'],
    ['FREQUENCY', 'CHASTOTA'],
    ['PERIOD', 'DAVR'],
    ['WAVELENGTH', 'TO‘LQIN UZUNLIGI'],
    ['PHASE', 'FAZA'],
    ['DAMPING', 'SO‘NISH'],
    ['RESONANCE', 'REZONANS'],
    ['CHARGE', 'ZARYAD'],
    ['VOLTAGE', 'KUCHLANISH'],
    ['CURRENT', 'TOK KUCHI'],
    ['RESISTANCE', 'QARSHILIK'],
    ['CAPACITANCE', 'SIG‘IM'],
    ['INDUCTANCE', 'INDUKTIVLIK'],
    ['ENERGY', 'ENERGIYA'],
    ['WORK', 'ISH'],
    ['POWER', 'QUVVAT'],
    ['MOMENTUM', 'IMPULS'],
    ['IMPULSE', 'KUCH IMPULSI'],
    ['EFFICIENCY', 'FIK'],
    ['ENTROPY', 'ENTROPIYA'],
    ['HEAT', 'ISSIQLIK'],
    ['TIME', 'VAQT'],
    ['RADIUS', 'RADIUS'],
    ['LENGTH', 'UZUNLIK'],
    ['WIDTH', 'KENGLIK'],
    ['AREA', 'YUZA'],
    ['MAGNIFICATION', 'KATTALASHTIRISH'],
    ['INTENSITY', 'INTENSIVLIK'],
    ['PHOTONS', 'FOTONLAR'],
    ['ELECTRONS', 'ELEKTRONLAR'],
    ['ORBIT', 'ORBITA'],
    ['SHOW', 'KO‘RSATISH'],
    ['HIDE', 'YASHIRISH'],
    ['ENABLE', 'YOQISH'],
    ['DISABLE', 'O‘CHIRISH'],
    ['ADD', 'QO‘SHISH'],
    ['REMOVE', 'OLIB TASHLASH'],
    ['CHANGE', 'O‘ZGARTIRISH'],
    ['GRAPH', 'GRAFIK'],
    ['DATA', 'MA’LUMOTLAR'],
    ['RESULT', 'NATIJA'],
    ['VALUE', 'QIYMAT']
  ]);

  function translateString(str) {
    if (!str || typeof str !== 'string') return str;
    let out = str;
    for (const [en, uz] of PHRASES) {
      if (out.includes(en)) {
        out = out.split(en).join(uz);
      } else {
        const re = new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        if (re.test(out)) out = out.replace(re, uz);
      }
    }
    // Single-word whole-token replacements for common labels
    out = out.replace(/\b([A-Za-z][A-Za-z\s\/]{1,22})\b/g, (m) => {
      const upper = m.trim().toUpperCase();
      if (WORDS.has(upper)) return WORDS.get(upper);
      return m;
    });
    return out;
  }

  let translating = false;
  function translateDOM(root) {
    if (translating || !root) return;
    translating = true;
    try {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent) continue;
        const tag = parent.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE' || parent.closest('.atomix-skip-translate')) continue;
        const orig = node.nodeValue;
        if (!orig || !/[A-Za-z]{2,}/.test(orig)) continue;
        const next = translateString(orig);
        if (next !== orig) node.nodeValue = next;
      }

      // Wire theory button if present
      const theoryBtn = document.getElementById('theorybutton');
      if (theoryBtn && !theoryBtn.dataset.atomixWired) {
        theoryBtn.dataset.atomixWired = '1';
        theoryBtn.textContent = 'NAZARIYA (1-PUNKT)';
        theoryBtn.onclick = function (e) {
          e.preventDefault();
          window.theorySite();
        };
      }
    } finally {
      translating = false;
    }
  }

  function initBridge() {
    if (!document.body) return;
    translateDOM(document.body);

    // Keep anchor links (#section) inside the local localized page instead of following <base href>
    document.addEventListener('click', (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash && hash.length > 1) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    const observer = new MutationObserver((mutations) => {
      if (translating) return;
      for (const m of mutations) {
        for (const n of m.addedNodes) {
          if (n.nodeType === 1) translateDOM(n);
          else if (n.nodeType === 3 && n.parentElement) translateDOM(n.parentElement);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: false });

    // Periodic light pass for dynamic table/lil-gui text mutations
    setInterval(() => translateDOM(document.body), 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBridge);
  } else {
    initBridge();
  }
})();
