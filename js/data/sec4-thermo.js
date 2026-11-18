export const SEC4_TOPICS = [
  {
    id: '4A-1',
    code: '4A.1',
    sectionId: 'sec-4',
    subsectionId: '4A',
    subsectionTitle: 'A. Molekulyar-Kinetik Nazariya (MKN)',
    title: 'Modda tuzilishi',
    subtitle: 'Atom va molekula o‘lchamlari, Broun harakati, diffuziya, Avogadro doimiysi, molyar massa.',
    theory: {
      overview:
        'Molekulyar-kinetik nazariya (MKN) barcha makroskopik moddalarning xossalarini ularning ichki mikroskopik tuzilishi orqali tushuntiradi. MKN uch asosiy qoidaga asoslanadi: 1) barcha moddalar zarralardan (atom va molekulalardan) tashkil topgan; 2) bu zarralar uzluksiz va tartibsiz (xaotik) issiqlik harakatida bo‘ladi; 3) zarralar orasida o‘zaro tortishish va itarishish kuchlari mavjud.\n\nZarralarning tartibsiz harakatini tasdiqlovchi bevosita tajriba dalillari — Broun harakati (suyuqlik yoki gazdagi muallaq zarralarning molekulalar zarbi ostidagi betartib harakati) va diffuziya (modda molekulalarining o‘zaro aralashishi). 1 mol moddadagi molekulalar soni Avogadro doimiysi N_A = 6.022·10²³ mol⁻¹ ga teng. Moddaning miqdori ν = m / M = N / N_A (bu yerda M — molyar massa, kg/mol) bilan topiladi.',
      keyLaws: [
        { title: 'MKNning uch asosiy qoidasi', text: 'Moddalar diskret zarralardan iborat; zarralar tinimsiz issiqlik harakatida; zarralar orasida qisqa masofada itarishish, uzoqroqda tortishish kuchlari mavjud.' },
        { title: 'Broun harakati va Diffuziya', text: 'Harorat ortishi bilan molekulalarning o‘rtacha tezligi ortadi, natijada Broun harakati va diffuziya tezlashadi.' },
        { title: 'Avogadro doimiysi (N_A)', text: 'Har qanday moddaning 1 mol miqdorida bir xil sondagi zarra — N_A = 6.022·10²³ ta molekula mavjud.' },
      ],
      formulas: [
        { latex: 'ν = m / M = N / N_A', name: 'Modda miqdori (mol)', symbols: 'm — massa (kg), M — molyar massa (kg/mol), N — molekulalar soni' },
        { latex: 'm₀ = M / N_A', name: 'Bitta molekulaning massasi', symbols: 'm₀ — bitta molekula massasi (kg)' },
        { latex: 'n = N / V = (ρ · N_A) / M', name: 'Molekulalar konsentratsiyasi', symbols: 'n — birlik hajmdagi molekulalar soni (m⁻³)' },
      ],
      constants: [
        { name: 'Avogadro doimiysi', symbol: 'N_A', value: '6.022·10²³', unit: 'mol⁻¹' },
        { name: 'Atom massa birligi', symbol: '1 a.m.b.', value: '1.6605·10⁻²⁷', unit: 'kg' },
      ],
      applications: [
        'Yarimo‘tkazgichlar texnologiyasida kremniy kristallariga diffuziya usulida aralashmalar kiritish.',
        'Nanotexnologiyada atom o‘lchamlari (~10⁻¹⁰ m) darajasida materiallarni sintez qilish.',
      ],
      calculator: {
        title: 'Molekulalar soni va bitta molekula massasi kalkulyatori',
        formulaDisplay: 'ν = m / M,  N = ν · N_A,  m₀ = M / N_A',
        inputs: [
          { key: 'm', label: 'Modda massasi m', symbol: 'm', unit: 'g', min: 0.1, max: 1000, step: 0.5, default: 18 },
          { key: 'M', label: 'Molyar massa M', symbol: 'M', unit: 'g/mol', min: 1, max: 300, step: 1, default: 18 },
        ],
        compute: (v) => {
          const nu = v.m / v.M;
          const N = nu * 6.022e23;
          const m0 = (v.M * 1e-3) / 6.022e23;
          return {
            value: nu.toFixed(3),
            unit: 'mol',
            summary: `Modda miqdori ν = ${nu.toFixed(3)} mol, molekulalar soni N = ${N.toExponential(3)}, 1 molekula massasi m₀ = ${m0.toExponential(3)} kg.`,
          };
        },
      },
    },
    simulation: {
      title: 'Molekulalar Issiqlik Harakati va Gazlar MKN 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Thermodynamics_Introduction.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Molekulalarning xaotik harakati, to‘qnashuvlar va harorat ta’sirini 3D fazoda o‘rganing.',
      alternateSims: [
        { label: 'Termodinamika va MKN Kirish (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Introduction.html' },
        { label: 'Gazlarning kinetik nazariyasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Kinetic_Theory_of_Gases.html' },
      ],
      parametric: {
        mode: 'molecular_brownian',
        title: 'Broun Harakati va Diffuziya Simulyatori',
        description: 'Harorat T ni oshirib, molekulalarning tezligi hamda katta Broun zarrasining tasodifiy trayektoriyasi qanday faollashishini kuzating.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 100, max: 900, step: 25, value: 300 },
          { key: 'count', label: 'Molekulalar soni', unit: 'ta', min: 30, max: 160, step: 10, value: 80 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Broun harakati nimani isbotlaydi?', options: ['Suyuqlik yoki gaz molekulalarining uzluksiz tartibsiz issiqlik harakatida ekanligini', 'Gravitatsiya kuchini', 'Elektromagnit nurlanishni', 'Molekulalar mutlaqo harakatsiz ekanligini'], answer: 0, explain: 'Muallaq zarrachaning tartibsiz siljishi atrofdagi molekulalarning notekis zarbalari natijasidir.' },
      { q: 'Har qanday moddaning 1 mol miqdorida nechta molekula (atom) bo‘ladi?', options: ['6.02·10²³ ta', '1.38·10⁻²³ ta', '8.31 ta', '10⁶ ta'], answer: 0, explain: 'Avogadro doimiysi N_A = 6.022·10²³ mol⁻¹.' },
      { q: 'Diffuziya tezligi moddaning qaysi agregat holatida eng yuqori bo‘ladi?', options: ['Gazlarda', 'Suyuqliklarda', 'Qattiq jismlarda', 'Hamma holatda bir xil'], answer: 0, explain: 'Gaz molekulalari orasidagi masofa katta va erkin yugurish yo‘li uzun bo‘lgani uchun diffuziya eng tez kechadi.' },
      { q: 'Suvning molyar massasi 18 g/mol (0.018 kg/mol). 36 g suvda necha mol modda bor?', options: ['2 mol', '0.5 mol', '18 mol', '1 mol'], answer: 0, explain: 'ν = m / M = 36 / 18 = 2 mol.' },
      { q: 'Molekulaning taxminiy chiziqli o‘lchami qanday tartibda?', options: ['10⁻¹⁰ m (angstrem tartibida)', '10⁻³ m', '10⁻⁶ m', '10⁻¹⁵ m'], answer: 0, explain: 'Oddiy atom va molekulalar diametri ~1–3·10⁻¹⁰ m (0.1–0.3 nm).' },
      { q: 'Harorat oshganda diffuziya jarayoni qanday o‘zgaradi?', options: ['Tezlashadi', 'Sekinlashadi', 'To‘xtaydi', 'O‘zgarmaydi'], answer: 0, explain: 'Yuqori haroratda molekulalar o‘rtacha kinetik energiyasi va tezligi ortadi.' },
      { q: 'Bitta molekulaning massasini molyar massa M va Avogadro soni N_A orqali qanday topamiz?', options: ['m₀ = M / N_A', 'm₀ = M · N_A', 'm₀ = N_A / M', 'm₀ = M + N_A'], answer: 0, explain: '1 mol (N_A ta molekula) massasi M ga teng, demak bittasining massasi M / N_A.' },
      { q: 'Molekulalar konsentratsiyasi n ning SI tizimidagi birligi qaysi?', options: ['m⁻³', 'mol', 'kg/m³', 'm³'], answer: 0, explain: 'n = N / V — birlik hajmdagi molekulalar soni, birligi m⁻³.' },
    ],
    problems: [
      {
        variants: [[32, 32], [44, 22], [18, 90], [28, 56]],
        build: (i) => {
          const [M, m] = [[32, 32], [44, 22], [18, 90], [28, 56]][i];
          const nu = m / M;
          return {
            q: `Molyar massasi M = ${M} g/mol bo‘lgan gazning massasi m = ${m} g. Modda miqdorini (mol) toping.`,
            correct: nu,
            unit: 'mol',
            explain: `ν = m / M = ${m} / ${M} = ${nu} mol.`,
          };
        },
      },
      {
        variants: [[2], [3], [0.5], [4]],
        build: (i) => {
          const [nu] = [[2], [3], [0.5], [4]][i];
          const val = Number((nu * 6.02).toFixed(2));
          return {
            q: `${nu} mol gazdagi molekulalar soni necha ×10²³ ta ga teng (N_A = 6.02·10²³ mol⁻¹)?`,
            correct: val,
            unit: '×10²³',
            explain: `N = ν·N_A = ${nu} · 6.02·10²³ = ${val}·10²³ ta.`,
          };
        },
      },
    ],
  },
  {
    id: '4A-2',
    code: '4A.2',
    sectionId: 'sec-4',
    subsectionId: '4A',
    subsectionTitle: 'A. Molekulyar-Kinetik Nazariya (MKN)',
    title: 'Ideal gaz qonunlari',
    subtitle: 'MKN ning asosiy tenglamasi, harorat va uning molekulyar ma’nosi, Mendeleyev-Klapeyron tenglamasi.',
    theory: {
      overview:
        'Ideal gaz — molekulalarining xususiy hajmi idish hajmiga nisbatan e’tiborsiz darajada kichik va molekulalar faqat mutlaq elastik to‘qnashuvlar vaqtida o‘zaro ta’sirlashadigan nazariy gaz modeli. Gaz bosimi molekulalarning idish devorlariga uzluksiz urilishi natijasida yuzaga keladi va MKNning asosiy tenglamasi bilan ifodalanadi: p = ⅓·n·m₀·v_kv² = ⅔·n·Ē_k.\n\nMutlaq harorat T (Kelvin, T = t°C + 273.15) — molekulalarning ilgarilanma issiqlik harakati o‘rtacha kinetik energiyasining o‘lchovidir: Ē_k = (3/2)·k_B·T, bundan p = n·k_B·T. Makroskopik parametrlar (bosim p, hajm V, harorat T va massa m) ni bog‘lovchi universal tenglama Mendeleyev-Klapeyron tenglamasidir: p·V = ν·R·T = (m/M)·R·T, bu yerda R = 8.314 J/(mol·K) — universal gaz doimiysi.',
      keyLaws: [
        { title: 'MKN ning asosiy tenglamasi', text: 'p = ⅓·ρ·v_kv² = ⅔·n·Ē_k — gaz bosimi molekulalar konsentratsiyasi va o‘rtacha kinetik energiyasiga proporsional.' },
        { title: 'Haroratning molekulyar ma’nosi', text: 'Ē_k = 3/2 · k_B · T — harorat faqat molekulalarning o‘rtacha kinetik energiyasi bilan belgilanadi (p = n·k_B·T).' },
        { title: 'Mendeleyev-Klapeyron tenglamasi', text: 'p·V = (m/M)·R·T — ideal gazning ixtiyoriy muvozanat holatini bir qiymatli bog‘laydi.' },
      ],
      formulas: [
        { latex: 'p = ⅓ · n · m₀ · v_kv² = n · k_B · T', name: 'MKN asosiy tenglamasi', symbols: 'n — konsentratsiya (m⁻³), k_B = 1.38·10⁻²³ J/K — Bolsman doimiysi' },
        { latex: 'Ē_k = (3/2) · k_B · T', name: 'Ilgarilanma harakat o‘rtacha energiyasi', symbols: 'T — mutlaq harorat (K)' },
        { latex: 'v_kv = √(3·R·T / M) = √(3·k_B·T / m₀)', name: 'O‘rtacha kvadratik tezlik', symbols: 'M — molyar massa (kg/mol)' },
        { latex: 'p · V = (m / M) · R · T', name: 'Mendeleyev-Klapeyron tenglamasi', symbols: 'R = 8.314 J/(mol·K) — universal gaz doimiysi' },
      ],
      constants: [
        { name: 'Universal gaz doimiysi', symbol: 'R', value: '8.314', unit: 'J/(mol·K)' },
        { name: 'Bolsman doimiysi', symbol: 'k_B', value: '1.381·10⁻²³', unit: 'J/K' },
        { name: 'Mutlaq nol', symbol: '0 K', value: '−273.15', unit: '°C' },
      ],
      applications: [
        'Yuqori bosimli gaz ballonlari, pnevmatik tizimlar va meteorologik zondlar parametrlarini hisoblash.',
        'Atmosfera gazlarining sayyoralardan qochish shartini (v_kv vs ikkinchi kosmik tezlik) baholash.',
      ],
      calculator: {
        title: 'Mendeleyev-Klapeyron va O‘rtacha Kvadratik Tezlik kalkulyatori',
        formulaDisplay: 'p = (ν·R·T)/V,  v_kv = √(3RT/M)',
        inputs: [
          { key: 'nu', label: 'Modda miqdori ν', symbol: 'ν', unit: 'mol', min: 0.1, max: 50, step: 0.5, default: 2 },
          { key: 'T', label: 'Harorat T', symbol: 'T', unit: 'K', min: 50, max: 1500, step: 10, default: 300 },
          { key: 'V', label: 'Hajm V', symbol: 'V', unit: 'l (litr)', min: 1, max: 500, step: 1, default: 50 },
          { key: 'Mg', label: 'Molyar massa M', symbol: 'M', unit: 'g/mol', min: 2, max: 100, step: 1, default: 29 },
        ],
        compute: (v) => {
          const Vm3 = v.V * 1e-3;
          const p = (v.nu * 8.314 * v.T) / Vm3;
          const vkv = Math.sqrt((3 * 8.314 * v.T) / (v.Mg * 1e-3));
          return {
            value: (p / 1000).toFixed(2),
            unit: 'kPa',
            summary: `Gaz bosimi p = ${(p / 1000).toFixed(2)} kPa (${(p / 101325).toFixed(2)} atm). O‘rtacha kvadratik tezlik v_kv = ${vkv.toFixed(1)} m/s.`,
          };
        },
      },
    },
    simulation: {
      title: 'Ideal Gaz Tenglamasi va Kinetik Nazariya 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Molekulalar soni, harorat T va idish hajmi V ni o‘zgartirib, ideal gaz bosimi p = n·k_B·T o‘zgarishini 3D ko‘ring.',
      alternateSims: [
        { label: 'Ideal gaz tenglamasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html' },
        { label: 'Gazlarning kinetik nazariyasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Kinetic_Theory_of_Gases.html' },
      ],
      parametric: {
        mode: 'ideal_gas',
        title: 'Ideal Gaz Zarralari va Bosim Simulyatori',
        description: 'Porshen ostidagi gaz harorati T va hajmi V ni o‘zgartirib, devorga urilishlar soni va bosim p ning ortishini kuzating.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 150, max: 900, step: 25, value: 300 },
          { key: 'V', label: 'Hajm V', unit: 'l', min: 20, max: 100, step: 5, value: 60 },
          { key: 'N', label: 'Zarralar soni', unit: 'ta', min: 20, max: 120, step: 10, value: 60 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ideal gazning mutlaq harorati 4 marta oshirilsa, molekulalarning o‘rtacha kvadratik tezligi qanday o‘zgaradi?', options: ['2 marta ortadi', '4 marta ortadi', '16 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'v_kv = √(3RT/M) => √4 = 2 marta ortadi.' },
      { q: 'Gaz bosimi, konsentratsiyasi va mutlaq harorati orasidagi bog‘lanish qaysi formula bilan beriladi?', options: ['p = n · k_B · T', 'p = n / (k_B · T)', 'p = k_B · T / n', 'p = 3/2 · k_B · T'], answer: 0, explain: 'p = ⅔·n·(3/2·k_B·T) = n·k_B·T.' },
      { q: '27 °C harorat Kelvin shkalasida necha Kelvinga teng?', options: ['300 K', '273 K', '246 K', '327 K'], answer: 0, explain: 'T = t + 273 ≈ 27 + 273 = 300 K.' },
      { q: 'Agar hajmi o‘zgarmas idishdagi gaz molekulalari konsentratsiyasi 2 marta, harorati esa 1.5 marta oshirilsa, bosim necha marta ortadi?', options: ['3 marta', '2 marta', '1.5 marta', '0.75 marta'], answer: 0, explain: 'p = n·k_B·T => 2 · 1.5 = 3 marta.' },
      { q: 'Bir xil haroratda vodorod (M=2) va kislorod (M=32) molekulalarining o‘rtacha kinetik energiyalari nisbati qancha?', options: ['1 : 1 (teng)', '16 : 1', '4 : 1', '1 : 16'], answer: 0, explain: 'Ē_k = (3/2)k_B·T — molekula massasiga bog‘liq emas, faqat haroratga bog‘liq!' },
      { q: 'Mendeleyev-Klapeyron tenglamasida R universal gaz doimiysining qiymati qancha?', options: ['8.31 J/(mol·K)', '1.38·10⁻²³ J/K', '6.02·10²³ mol⁻¹', '9.81 m/s²'], answer: 0, explain: 'R = N_A · k_B ≈ 8.314 J/(mol·K).' },
      { q: 'Ideal gaz modelida molekulalar orasidagi qaysi ta’sir hisobga olinmaydi?', options: ['Molekulalarning xususiy hajmi va uzoq masofali tortishish kuchlari', 'Elastik to‘qnashuvlar', 'Issiqlik harakati', 'Devorlarga urilish impulsi'], answer: 0, explain: 'Ideal gaz molekulalari nuqtaviy va to‘qnashuvdan tashqari o‘zaro ta’sirlashmaydi deb olinadi.' },
      { q: 'Mutlaq nol harorat (0 K) nimani anglatadi?', options: ['Molekulalarning ilgarilanma issiqlik harakati to‘xtaydigan nazariy eng past chegara (−273.15 °C)', 'Suvning qaynash nuqtasi', 'Suvning muzlash nuqtasi', 'Normal atmosfera bosimi'], answer: 0, explain: 'T → 0 K da klassik issiqlik energiyasi nolga intiladi.' },
    ],
    problems: [
      {
        variants: [[2, 300, 0.0831], [4, 300, 0.1662], [1, 400, 0.0831], [5, 200, 0.0831]],
        build: (i) => {
          const [nu, T, V] = [[2, 300, 0.0831], [4, 300, 0.1662], [1, 400, 0.0831], [5, 200, 0.0831]][i];
          const p = Math.round((nu * 8.31 * T) / V / 1000);
          return {
            q: `Hajmi ${V} m³ idishda ${T} K haroratda ${nu} mol ideal gaz bor. Gaz bosimini (kPa) toping (R = 8.31 J/(mol·K)).`,
            correct: p,
            unit: 'kPa',
            explain: `p = νRT/V = (${nu} · 8.31 · ${T}) / ${V} = ${p * 1000} Pa = ${p} kPa.`,
          };
        },
      },
      {
        variants: [[27, 4], [127, 9], [327, 1], [727, 16]],
        build: (i) => {
          const [tc, mult] = [[27, 4], [127, 9], [327, 1], [727, 16]][i];
          const T1 = tc + 273;
          const T2 = T1 * mult;
          return {
            q: `Harorati ${tc} °C bo‘lgan gaz molekulalarining o‘rtacha kvadratik tezligi ${Math.sqrt(mult)} marta ortishi uchun harorat necha Kelvinga yetishi kerak?`,
            correct: T2,
            unit: 'K',
            explain: `v_kv ~ √T; tezlik ${Math.sqrt(mult)} marta ortishi uchun T₁ = ${T1} K ni ${mult} ga ko‘paytiramiz: T₂ = ${T2} K.`,
          };
        },
      },
    ],
  },
  {
    id: '4A-3',
    code: '4A.3',
    sectionId: 'sec-4',
    subsectionId: '4A',
    subsectionTitle: 'A. Molekulyar-Kinetik Nazariya (MKN)',
    title: 'Izoprotsesslar',
    subtitle: 'Izotermik (Boyl-Mariott), izobarik (Gey-Lyussak), izoxorik (Sharl) va adiabatik jarayonlar.',
    theory: {
      overview:
        'O‘zgarmas massali ideal gazning uch makroskopik parametridan (p, V, T) biri o‘zgarmas qolgan holda kechuvchi termodinamik jarayonlar izoprotsesslar deyiladi (Klapeyron tenglamasi pV/T = const dan kelib chiqadi).\n\n1) Izotermik jarayon (T = const) — Boyl-Mariott qonuni: p·V = const; p(V) grafigi giperbola (izoterma). 2) Izobarik jarayon (p = const) — Gey-Lyussak qonuni: V/T = const; hajm mutlaq haroratga to‘g‘ri proporsional. 3) Izoxorik jarayon (V = const) — Sharl qonuni: p/T = const; bosim mutlaq haroratga to‘g‘ri proporsional. 4) Adiabatik jarayon (Q = 0 — tashqi muhit bilan issiqlik almashinuvi yo‘q, masalan juda tez siqilish): Puasson tenglamasi p·V^γ = const (bu yerda γ = C_p/C_V > 1 — adiabata ko‘rsatkichi). Adiabata izotermadan tikroq o‘tadi, chunki siqilishda harorat ham ko‘tariladi.',
      keyLaws: [
        { title: 'Boyl-Mariott qonuni (T = const)', text: 'p₁·V₁ = p₂·V₂ — harorat o‘zgarmaganda bosim hajmga teskari proporsional.' },
        { title: 'Gey-Lyussak qonuni (p = const)', text: 'V₁/T₁ = V₂/T₂ — bosim o‘zgarmaganda hajm mutlaq haroratga to‘g‘ri proporsional.' },
        { title: 'Sharl qonuni (V = const)', text: 'p₁/T₁ = p₂/T₂ — hajm o‘zgarmaganda bosim mutlaq haroratga to‘g‘ri proporsional.' },
        { title: 'Adiabatik jarayon (Q = 0)', text: 'p·V^γ = const va T·V^(γ−1) = const; tez siqishda gaz isiydi, tez kengayishda soviydi.' },
      ],
      formulas: [
        { latex: '(p₁ · V₁) / T₁ = (p₂ · V₂) / T₂', name: 'Birlashtirilgan Klapeyron tenglamasi', symbols: 'T — albatta Kelvinda (K)' },
        { latex: 'p₁V₁ = p₂V₂  (T=const)', name: 'Izotermik jarayon', symbols: 'Boyl-Mariott qonuni' },
        { latex: 'V₁/T₁ = V₂/T₂  (p=const),   p₁/T₁ = p₂/T₂  (V=const)', name: 'Izobarik va Izoxorik jarayonlar', symbols: 'Gey-Lyussak va Sharl qonunlari' },
        { latex: 'p · V^γ = const  (γ = C_p / C_V)', name: 'Adiabatik jarayon (Puasson)', symbols: 'Bir atomli gaz uchun γ = 5/3 ≈ 1.67, ikki atomli uchun 7/5 = 1.4' },
      ],
      constants: [
        { name: 'Bir atomli gaz adiabata ko‘rsatkichi', symbol: 'γ₁', value: '1.67', unit: 'o‘lchamsiz' },
        { name: 'Havo (ikki atomli) adiabata ko‘rsatkichi', symbol: 'γ₂', value: '1.40', unit: 'o‘lchamsiz' },
      ],
      applications: [
        'Dizel dvigatelida havoni adiabatik siqish orqali yoqilg‘ini alangalash darajasigacha qizdirish.',
        'Sovutgich va konditsionerlarda freonning adiabatik kengayishi orqali sovutish.',
      ],
      calculator: {
        title: 'Birlashgan gaz qonuni (Klapeyron) kalkulyatori',
        formulaDisplay: 'p₂ = p₁ · (V₁/V₂) · (T₂/T₁)',
        inputs: [
          { key: 'p1', label: 'Boshlang‘ich bosim p₁', symbol: 'p₁', unit: 'kPa', min: 10, max: 1000, step: 10, default: 100 },
          { key: 'V1', label: 'Boshlang‘ich hajm V₁', symbol: 'V₁', unit: 'l', min: 1, max: 100, step: 1, default: 10 },
          { key: 'T1', label: 'Boshlang‘ich harorat T₁', symbol: 'T₁', unit: 'K', min: 100, max: 1000, step: 10, default: 300 },
          { key: 'V2', label: 'Oxirgi hajm V₂', symbol: 'V₂', unit: 'l', min: 1, max: 100, step: 1, default: 5 },
          { key: 'T2', label: 'Oxirgi harorat T₂', symbol: 'T₂', unit: 'K', min: 100, max: 1000, step: 10, default: 600 },
        ],
        compute: (v) => {
          const p2 = v.p1 * (v.V1 / v.V2) * (v.T2 / v.T1);
          return {
            value: p2.toFixed(1),
            unit: 'kPa',
            summary: `Oxirgi bosim p₂ = ${p2.toFixed(1)} kPa.`,
          };
        },
      },
    },
    simulation: {
      title: 'Boyl-Mariott va Sharl/Gey-Lyussak Qonunlari 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Thermodynamics_Boyles_Law.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Porshen hajmi va haroratni o‘zgartirib, Boyl-Mariott (T=const) va Sharl/Gey-Lyussak qonunlarini 3D tajribada tekshiring.',
      alternateSims: [
        { label: 'Boyl-Mariott qonuni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Boyles_Law.html' },
        { label: 'Sharl / Gey-Lyussak qonuni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Charles_Law.html' },
      ],
      parametric: {
        mode: 'isoprocesses',
        title: 'PV-Diagramma: Izotermik, Izobarik, Izoxorik va Adiabatik Simulyator',
        description: 'Jarayon turini tanlab, gaz kengayishi/siqilishida P-V grafigi va harorat T qanday o‘zgarishini kuzating.',
        controls: [
          { key: 'modeIdx', label: 'Jarayon (1=Izoterm, 2=Izobar, 3=Adiabat)', unit: '', min: 1, max: 3, step: 1, value: 1 },
          { key: 'Vratio', label: 'Hajm o‘zgarish nisbati V₂/V₁', unit: '', min: 0.4, max: 3.0, step: 0.1, value: 2.0 },
          { key: 'T1', label: 'Boshlang‘ich harorat T₁', unit: 'K', min: 200, max: 600, step: 25, value: 300 },
        ],
      },
    },
    coreQuestions: [
      { q: 'O‘zgarmas haroratda gaz hajmi 3 marta kamaytirilsa, uning bosimi qanday o‘zgaradi?', options: ['3 marta ortadi (Boyl-Mariott)', '3 marta kamayadi', '9 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'p₁V₁ = p₂V₂ => V₂ = V₁/3 da p₂ = 3p₁.' },
      { q: 'Izoxorik (V = const) jarayonda gazning mutlaq harorati 300 K dan 450 K gacha oshirilsa, bosim necha marta ortadi?', options: ['1.5 marta', '2 marta', '3 marta', 'O‘zgarmaydi'], answer: 0, explain: 'p₂/p₁ = T₂/T₁ = 450 / 300 = 1.5 marta.' },
      { q: 'Tashqi muhit bilan issiqlik almashinuvi bo‘lmaydigan (Q = 0) jarayon qanday ataladi?', options: ['Adiabatik jarayon', 'Izotermik jarayon', 'Izobarik jarayon', 'Izoxorik jarayon'], answer: 0, explain: 'Adiabatik jarayonda δQ = 0.' },
      { q: 'Dizel dvigateli silindrida havo tez adiabatik siqilganda harorat nima uchun keskin ko‘tariladi?', options: ['Tashqi kuch bajargan ish hisobiga gazning ichki energiyasi ortadi', 'Tashqaridan issiqlik berilgani uchun', 'Massa ortgani uchun', 'Bosim tushgani uchun'], answer: 0, explain: 'Q = 0 da ΔU = A_tash > 0 bo‘ladi va harorat ortadi.' },
      { q: 'P-V diagrammada qaysi jarayon grafigi eng tik (kuchliroq qiyalikda) tushadi?', options: ['Adiabata (p·V^γ = const, γ > 1)', 'Izoterma (p·V = const)', 'Izobara', 'Izoxora'], answer: 0, explain: 'γ > 1 bo‘lgani uchun adiabata izotermadan tikroq.' },
      { q: 'Izobarik jarayonda ideal gaz harorati 200 K dan 600 K gacha qizdirildi. Gaz hajmi qanday o‘zgaradi?', options: ['3 marta ortadi', '3 marta kamayadi', 'O‘zgarmaydi', '9 marta ortadi'], answer: 0, explain: 'V₂/V₁ = T₂/T₁ = 600/200 = 3 marta ortadi.' },
      { q: 'V-T koordinatalarida izobarik jarayon grafigi qanday chiziq?', options: ['Koordinata boshidan (T = 0 K) chiquvchi to‘g‘ri chiziq', 'Giperbola', 'Parabola', 'Vertikal chiziq'], answer: 0, explain: 'V = const · T chiziqli bog‘lanishdir.' },
      { q: 'Porshen ostidagi gaz tez kengaytirilsa (adiabatik kengayish), gazning harorati qanday o‘zgaradi?', options: ['Pasayadi (soviydi)', 'Ortadi', 'O‘zgarmaydi', 'Ikki barobar ortadi'], answer: 0, explain: 'Gaz o‘z ichki energiyasi hisobiga musbat kengayish ishi bajaradi, shu bois soviydi.' },
    ],
    problems: [
      {
        variants: [[100, 12, 4], [200, 10, 5], [150, 8, 2], [120, 15, 3]],
        build: (i) => {
          const [p1, V1, V2] = [[100, 12, 4], [200, 10, 5], [150, 8, 2], [120, 15, 3]][i];
          const p2 = (p1 * V1) / V2;
          return {
            q: `Izotermik jarayonda bosimi ${p1} kPa va hajmi ${V1} l bo‘lgan gaz ${V2} l hajmgacha siqildi. Yangi bosim (kPa) qancha?`,
            correct: p2,
            unit: 'kPa',
            explain: `p₂ = p₁·V₁/V₂ = ${p1}·${V1}/${V2} = ${p2} kPa.`,
          };
        },
      },
      {
        variants: [[120, 300, 450], [100, 250, 500], [150, 300, 400], [200, 400, 300]],
        build: (i) => {
          const [p1, T1, T2] = [[120, 300, 450], [100, 250, 500], [150, 300, 400], [200, 400, 300]][i];
          const p2 = (p1 * T2) / T1;
          return {
            q: `Izoxorik jarayonda boshlang‘ich bosimi ${p1} kPa va harorati ${T1} K bo‘lgan gaz ${T2} K gacha o‘zgartirildi. Oxirgi bosim (kPa) qancha?`,
            correct: p2,
            unit: 'kPa',
            explain: `p₂ = p₁·T₂/T₁ = ${p1}·${T2}/${T1} = ${p2} kPa.`,
          };
        },
      },
    ],
  },
  {
    id: '4B-1',
    code: '4B.1',
    sectionId: 'sec-4',
    subsectionId: '4B',
    subsectionTitle: 'B. Termodinamika',
    title: 'Ichki energiya va issiqlik',
    subtitle: "Ichki energiya, issiqlik miqdori, solishtirma issiqlik sig'imi, issiqlik o'tkazuvchanlik, konveksiya, nurlanish.",
    theory: {
      overview:
        'Jismning ichki energiyasi U — uni tashkil etuvchi barcha molekulalarning issiqlik harakati kinetik energiyalari va o‘zaro ta’sir potensial energiyalari yig‘indisidir. Ideal gaz uchun ichki energiya faqat mutlaq haroratga bog‘liq: U = (i/2)·ν·R·T (bir atomli gaz uchun i=3 => U = 3/2 νRT; ikki atomli gaz uchun i=5 => U = 5/2 νRT).\n\nIchki energiyani o‘zgartirishning ikki usuli bor: mexanik ish bajarish va issiqlik almashinuvi. Issiqlik almashinuvida uzatilgan energiya issiqlik miqdori Q = c·m·ΔT (J) bilan o‘lchanadi, bu yerda c — moddaning solishtirma issiqlik sig‘imi (J/(kg·K)). Issiqlik uzatishning uch turi mavjud: 1) Issiqlik o‘tkazuvchanlik (modda ko‘chmasdan zarrachalar to‘qnashuvi orqali); 2) Konveksiya (suyuqlik va gaz oqimlari aralashishi hisobiga); 3) Issiqlik nurlanishi (vakuumda ham elektromagnit to‘lqinlar orqali).',
      keyLaws: [
        { title: 'Ideal gaz ichki energiyasi', text: 'U = (i/2)·(m/M)·R·T — faqat T va modda miqdoriga bog‘liq (holat funksiyasi).' },
        { title: 'Issiqlik balansi tenglamasi', text: '∑Q = 0 — issiqlikdan izolyatsiyalangan tizimda issiq jism bergan issiqlik sovuq jism olgan issiqlikka teng.' },
        { title: 'Uch issiqlik uzatish mexanizmi', text: 'Qattiq jismlarda asosan issiqlik o‘tkazuvchanlik, suyuqlik/gazlarda konveksiya, koinotda nurlanish ustun.' },
      ],
      formulas: [
        { latex: 'U = (i / 2) · ν · R · T', name: 'Ideal gazning ichki energiyasi', symbols: 'i — erkinlik darajasi (3 — bir atomli, 5 — ikki atomli)' },
        { latex: 'Q = c · m · (T₂ − T₁)', name: 'Isitish/sovutishdagi issiqlik miqdori', symbols: 'c — solishtirma issiqlik sig‘imi (J/(kg·K))' },
        { latex: 'q = −λ · (dT / dx)', name: 'Furye issiqlik o‘tkazuvchanlik qonuni', symbols: 'λ — issiqlik o‘tkazuvchanlik koeffitsiyenti (W/(m·K))' },
      ],
      constants: [
        { name: 'Suvning solishtirma issiqlik sig‘imi', symbol: 'c_suv', value: '4186 (≈ 4200)', unit: 'J/(kg·K)' },
        { name: 'Misning issiqlik o‘tkazuvchanligi', symbol: 'λ_Cu', value: '401', unit: 'W/(m·K)' },
      ],
      applications: [
        'Binolar issiqlik izolyatsiyasi va radiatorlar konveksiya tizimini loyihalash.',
        'Termos (Dyuar idishi) da vakuum orqali konveksiya va o‘tkazuvchanlikni, kumush qoplama bilan esa nurlanishni to‘sish.',
      ],
      calculator: {
        title: 'Issiqlik miqdori va gaz ichki energiyasi kalkulyatori',
        formulaDisplay: 'Q = c·m·ΔT,  U = (i/2)·ν·R·T',
        inputs: [
          { key: 'm', label: 'Jism massasi m', symbol: 'm', unit: 'kg', min: 0.1, max: 100, step: 0.5, default: 2 },
          { key: 'c', label: 'Solishtirma issiqlik sig‘imi c', symbol: 'c', unit: 'J/(kg·K)', min: 100, max: 4500, step: 50, default: 4200 },
          { key: 'dT', label: 'Harorat o‘zgarishi ΔT', symbol: 'ΔT', unit: 'K', min: 1, max: 200, step: 1, default: 25 },
        ],
        compute: (v) => {
          const Q = v.c * v.m * v.dT;
          return {
            value: (Q / 1000).toFixed(2),
            unit: 'kJ',
            summary: `Zarur issiqlik miqdori Q = ${(Q / 1000).toFixed(2)} kJ (${Q.toFixed(0)} J).`,
          };
        },
      },
    },
    simulation: {
      title: '3D Issiqlik Konveksiyasi (Vortex Plume PBF) va Issiqlik Laboratoriyasi',
      openSourceUrl: 'sims/pbf/index.html?preset=vortex-plume',
      openSourceSource: 'Three.js Particle Fluids (PBF)',
      openSourceNote: 'Pastki qizdirgichdan ko‘tarilayotgan issiq gaz uyurmasi (konveksiya) va issiqlik oqimini 3D zarraviy muhitda boshqaring.',
      alternateSims: [
        { label: 'Issiqlik konveksiyasi (Vortex Plume PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=vortex-plume' },
        { label: 'Issiq havo shari va konveksiya (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Hot_Air_Balloon.html' },
      ],
      parametric: {
        mode: 'heat_transfer',
        title: 'Issiqlik O‘tkazuvchanlik, Konveksiya va Kalorimetriya Simulyatori',
        description: 'Material issiqlik sig‘imi c va qizdirgich quvvatini sozlab, jism haroratining T(t) o‘sishini va issiqlik muvozanatini kuzating.',
        controls: [
          { key: 'c', label: 'Issiqlik sig‘imi c', unit: 'J/(kg·K)', min: 400, max: 4200, step: 200, value: 4200 },
          { key: 'P', label: 'Isitgich quvvati P', unit: 'W', min: 200, max: 2500, step: 100, value: 1000 },
          { key: 'm', label: 'Modda massasi m', unit: 'kg', min: 0.5, max: 5, step: 0.5, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyoshdan Yerga issiqlik energiyasi kosmos vakuumi orqali qaysi usul bilan yetib keladi?', options: ['Issiqlik nurlanishi (elektromagnit to‘lqinlar)', 'Konveksiya', 'Issiqlik o‘tkazuvchanlik', 'Diffuziya'], answer: 0, explain: 'Vakuumda modda yo‘qligi sababli faqat nurlanish orqali energiya uzatiladi.' },
      { q: 'Massasi 2 kg suvni 20 °C dan 70 °C gacha isitish uchun qancha issiqlik miqdori kerak (c = 4200 J/(kg·K))?', options: ['420 kJ', '84 kJ', '210 kJ', '588 kJ'], answer: 0, explain: 'Q = 4200 · 2 · (70−20) = 420,000 J = 420 kJ.' },
      { q: 'Bir atomli ideal gazning 1 moli uchun ichki energiya formulasi qaysi?', options: ['U = (3/2)·R·T', 'U = (5/2)·R·T', 'U = R·T', 'U = ½·R·T'], answer: 0, explain: 'Bir atomli gaz faqat 3 ta ilgarilanma erkinlik darajasiga ega (i = 3).' },
      { q: 'Suyuqlik va gazlarni pastdan isitganda issiqlik butun hajmga asosan qaysi jarayon orqali tarqaladi?', options: ['Konveksiya', 'Nurlanish', 'Kristall panjara tebranishi', 'Ionlanish'], answer: 0, explain: 'Isigan qatlam zichligi kamayib yuqoriga ko‘tariladi, sovuq qatlam pastga tushadi.' },
      { q: 'Qattiq jismlar orasida issiqlik o‘tkazuvchanligi eng yuqori bo‘lgan guruh qaysi?', options: ['Metallar (erkin elektronlar hisobiga)', 'Yog‘och va plastmassa', 'Shisha', 'Quruq havo'], answer: 0, explain: 'Metallarda erkin elektron gazi issiqlikni juda tez uzatadi.' },
      { q: 'Termos idishining devorlari orasidan havo so‘rib olinishi (vakuum) qaysi issiqlik almashinuvlarini to‘xtatadi?', options: ['Issiqlik o‘tkazuvchanlik va konveksiyani', 'Faqat nurlanishni', 'Faqat bug‘lanishni', 'Hech birini'], answer: 0, explain: 'Vakuumda o‘tkazuvchanlik va konveksiya bo‘lmaydi, nurlanishni esa oynasimon sirt qaytaradi.' },
      { q: 'Solishtirma issiqlik sig‘imi c nimaga bog‘liq?', options: ['Moddaning turiga va agregat holatiga', 'Jismning massasiga', 'Jismning hajmiga', 'Faqat isitish vaqtiga'], answer: 0, explain: 'c — moddaning xususiy fizik konstantasi.' },
      { q: 'Ideal gazning ichki energiyasi o‘zgarmas haroratli (izotermik) jarayonda qanday o‘zgaradi?', options: ['O‘zgarmaydi (ΔU = 0)', 'Ortadi', 'Kamayadi', 'Nolga teng bo‘ladi'], answer: 0, explain: 'Ideal gaz ichki energiyasi faqat T ga bog‘liq; T = const => ΔU = 0.' },
    ],
    problems: [
      {
        variants: [[2, 4200, 30], [5, 4200, 20], [4, 500, 100], [3, 900, 40]],
        build: (i) => {
          const [m, c, dT] = [[2, 4200, 30], [5, 4200, 20], [4, 500, 100], [3, 900, 40]][i];
          const Q = (m * c * dT) / 1000;
          return {
            q: `Massasi ${m} kg va solishtirma issiqlik sig‘imi ${c} J/(kg·K) bo‘lgan jismni ${dT} K ga isitish uchun necha kJ issiqlik miqdori zarur?`,
            correct: Q,
            unit: 'kJ',
            explain: `Q = c·m·ΔT = ${c} · ${m} · ${dT} = ${Q * 1000} J = ${Q} kJ.`,
          };
        },
      },
      {
        variants: [[2, 300], [4, 400], [1, 600], [3, 200]],
        build: (i) => {
          const [nu, T] = [[2, 300], [4, 400], [1, 600], [3, 200]][i];
          const U = Number((1.5 * nu * 8.31 * T / 1000).toFixed(2));
          return {
            q: `${nu} mol bir atomli ideal gaz ${T} K haroratda turibdi. Uning ichki energiyasini (kJ) hisoblang (R = 8.31 J/(mol·K)).`,
            correct: U,
            unit: 'kJ',
            explain: `U = 1.5·ν·R·T = 1.5 · ${nu} · 8.31 · ${T} / 1000 = ${U} kJ.`,
          };
        },
      },
    ],
  },
  {
    id: '4B-2',
    code: '4B.2',
    sectionId: 'sec-4',
    subsectionId: '4B',
    subsectionTitle: 'B. Termodinamika',
    title: 'Termodinamika qonunlari',
    subtitle: '1-qonun (energiya saqlanishi), 2-qonun (jarayonlarning qaytmasligi, entropiya), 3-qonun (mutlaq nol).',
    theory: {
      overview:
        'Termodinamika makroskopik tizimlardagi energiya o‘zgarishlari va jarayonlar yo‘nalishini o‘rganadi. Termodinamikaning 1-qonuni energiya saqlanish qonunining issiqlik jarayonlari uchun ifodasidir: tizimga berilgan issiqlik miqdori Q uning ichki energiyasi o‘zgarishi ΔU va tizimning tashqi kuchlarga qarshi bajargan ishi A ga sarflanadi: Q = ΔU + A (bu yerda A = p·ΔV izobarik jarayonda).\n\nTermodinamikaning 2-qonuni tabiatdagi real jarayonlarning bir yo‘nalishda (qaytmas) kechishini bildiradi: issiqlik o‘z-o‘zidan sovuq jismdan issiq jismga o‘ta olmaydi (Klauzius) va bitta issiqlik manbaidan olingan issiqlikni to‘liq ishga aylantiruvchi davriy mashina (ikkinchi tur abadiy dvigatel) yaratib bo‘lmaydi (Kelvin-Plank). Bu qonun entropiya S (dS = δQ/T, ΔS ≥ 0) kattaligi orqali ifodalanadi (Bolsman: S = k_B·lnW). Termodinamikaning 3-qonuni (Nernst teoremasi): T → 0 K ga yaqinlashganda barcha muvozanatli tizimlarning entropiyasi nolga intiladi va mutlaq nolga chekli qadamlar bilan erishib bo‘lmaydi.',
      keyLaws: [
        { title: 'Termodinamika 1-qonuni', text: 'Q = ΔU + A — birinchi tur abadiy dvigatel (energiya sarflamay ish bajaruvchi mashina) qurish mumkin emas.' },
        { title: 'Termodinamika 2-qonuni va Entropiya', text: 'Yopiq tizimda barcha real jarayonlar entropiya ortishi (ΔS > 0 — tartibsizlik ortishi) tomon boradi.' },
        { title: 'Termodinamika 3-qonuni (Nernst)', text: 'Mutlaq nol (0 K) haroratga amalda erishib bo‘lmaydi; T → 0 da ΔS → 0.' },
      ],
      formulas: [
        { latex: 'Q = ΔU + A', name: 'Termodinamika 1-qonuni', symbols: 'Q — issiqlik, ΔU — ichki energiya o‘zgarishi, A — gaz ishi' },
        { latex: 'A = p · ΔV  (p = const),   A = νRT · ln(V₂/V₁)  (T = const)', name: 'Gazning bajargan ishi', symbols: 'ΔV — hajm o‘zgarishi (m³)' },
        { latex: 'ΔS = ∫ (δQ / T) ≥ 0,   S = k_B · ln(W)', name: 'Entropiya (Klauzius va Bolsman)', symbols: 'W — mikroholatlar soni (termodinamik ehtimollik)' },
      ],
      constants: [
        { name: 'Entropiya SI birligi', symbol: 'J/K', value: 'ΔS = Q / T', unit: 'J/K' },
      ],
      applications: [
        'Kimyoviy reaksiyalar o‘z-o‘zidan borishi mumkinligini Gibbs erkin energiyasi (ΔG = ΔH − TΔS) orqali aniqlash.',
        'Kriogen texnikada mutlaq nolga yaqin haroratlarni (millikelvin) olish chegara shartlari.',
      ],
      calculator: {
        title: 'Termodinamika 1-qonuni va Entropiya kalkulyatori',
        formulaDisplay: 'Q = ΔU + A,  ΔS = Q / T',
        inputs: [
          { key: 'Q', label: 'Berilgan issiqlik Q', symbol: 'Q', unit: 'J', min: -5000, max: 10000, step: 50, default: 2000 },
          { key: 'A', label: 'Gaz bajargan ish A', symbol: 'A', unit: 'J', min: -5000, max: 5000, step: 50, default: 800 },
          { key: 'T', label: 'Jarayon harorati T', symbol: 'T', unit: 'K', min: 50, max: 1500, step: 10, default: 400 },
        ],
        compute: (v) => {
          const dU = v.Q - v.A;
          const dS = v.Q / v.T;
          return {
            value: dU.toFixed(0),
            unit: 'J',
            summary: `Ichki energiya o‘zgarishi ΔU = ${dU.toFixed(0)} J. Entropiya o‘zgarishi ΔS = ${dS.toFixed(2)} J/K.`,
          };
        },
      },
    },
    simulation: {
      title: 'Termodinamika Qonunlari va Karno Jarayonlari 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Games__carnotcycle.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: '3D silindrda izotermik va adiabatik bosqichlarni kuzatib, ichki energiya ΔU, ish A va issiqlik Q almashinuvini tahlil qiling.',
      alternateSims: [
        { label: 'Termodinamik sikl va porshen (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__carnotcycle.html' },
        { label: 'Gaz bosimi va ish (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html' },
      ],
      parametric: {
        mode: 'thermo_laws',
        title: 'Termodinamika 1-Qonuni va Entropiya Simulyatori',
        description: 'Gazga Q issiqlik berilganda izoxorik, izobarik va izotermik jarayonlarda ΔU hamda A ishga qancha ulush ketishini kuzating.',
        controls: [
          { key: 'Q', label: 'Issiqlik miqdori Q', unit: 'J', min: 200, max: 3000, step: 100, value: 1500 },
          { key: 'T', label: 'Harorat T', unit: 'K', min: 200, max: 800, step: 25, value: 350 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Gazga 600 J issiqlik miqdori berilganda u kengayib 250 J ish bajardi. Ichki energiya qanchaga o‘zgardi?', options: ['+350 J ga ortdi', '+850 J ga ortdi', '−350 J ga kamaydi', '+250 J'], answer: 0, explain: 'ΔU = Q − A = 600 − 250 = 350 J.' },
      { q: 'Izotermik (T = const) jarayonda gazga berilgan butun issiqlik nimaga sarflanadi?', options: ['Tashqi kuchlarga qarshi ish bajarishga (Q = A)', 'Faqat ichki energiyani oshirishga', 'Entropiyani nolga tushirishga', 'Massani oshirishga'], answer: 0, explain: 'T = const => ΔU = 0 => Q = A.' },
      { q: 'Izoxorik (V = const) jarayonda gaz bajargan ish nimaga teng?', options: ['0 J', 'Q', 'p·V', '−ΔU'], answer: 0, explain: 'Hajm o‘zgarmagani (ΔV = 0) uchun mexanik ish A = p·ΔV = 0.' },
      { q: 'Termodinamikaning 2-qonuni nimani taqiqlaydi?', options: ['Issiqlikni hech qanday o‘zgarishsiz to‘liq ishga aylantiruvchi davriy dvigatel (2-tur abadiy dvigatel) yaratishni', 'Energiyaning bir turdan ikkinchisiga o‘tishini', 'Gazning kengayishini', 'Issiqlikning issiqdan sovuqqa o‘tishini'], answer: 0, explain: 'Kelvin-Plank ta’rifiga ko‘ra ikkinchi tur abadiy dvigatel mumkin emas.' },
      { q: 'Yopiq tizimdagi barcha qaytmas real jarayonlarda entropiya S qanday o‘zgaradi?', options: ['Ortadi (ΔS > 0)', 'Kamayadi', 'Doim nolga teng', 'Manfiy bo‘ladi'], answer: 0, explain: 'Entropiyaning o‘sish qonuni: yopiq tizim tartibsizlik ortishi tomon evolyutsiya qiladi.' },
      { q: 'O‘zgarmas 200 kPa bosimda gaz hajmi 0.02 m³ dan 0.05 m³ gacha kengaydi. Gaz bajargan ish qancha?', options: ['6 kJ', '10 kJ', '4 kJ', '0.6 kJ'], answer: 0, explain: 'A = p·ΔV = 200·10³ · (0.05 − 0.02) = 6000 J = 6 kJ.' },
      { q: 'Termodinamikaning 3-qonuniga (Nernst teoremasi) ko‘ra:', options: ['Mutlaq nol (0 K) haroratga chekli jarayonlar bilan erishib bo‘lmaydi', 'Energiya saqlanmaydi', 'Bosim 0 K da cheksiz ortadi', 'Hamma gazlar suyuqlikka aylanmaydi'], answer: 0, explain: 'T → 0 K da ΔS → 0 bo‘ladi va mutlaq nolga amalda yetib bo‘lmaydi.' },
      { q: 'Bir atomli ideal gaz izobarik kengayganda unga berilgan issiqlikning necha foizi ish bajarishga sarflanadi?', options: ['40% (2/5 qismi)', '60%', '50%', '100%'], answer: 0, explain: 'A = νRΔT, ΔU = 1.5νRΔT, Q = 2.5νRΔT => A/Q = 1/2.5 = 0.40 (40%).' },
    ],
    problems: [
      {
        variants: [[1200, 450], [800, 300], [2000, 750], [1500, 900]],
        build: (i) => {
          const [Q, A] = [[1200, 450], [800, 300], [2000, 750], [1500, 900]][i];
          return {
            q: `Ideal gazga ${Q} J issiqlik berilganda u kengayib ${A} J ish bajardi. Gazning ichki energiyasi necha Joulga o‘zgardi?`,
            correct: Q - A,
            unit: 'J',
            explain: `ΔU = Q − A = ${Q} − ${A} = ${Q - A} J.`,
          };
        },
      },
      {
        variants: [[100, 0.03], [250, 0.04], [400, 0.02], [150, 0.06]],
        build: (i) => {
          const [pkPa, dV] = [[100, 0.03], [250, 0.04], [400, 0.02], [150, 0.06]][i];
          const A = pkPa * dV;
          return {
            q: `O‘zgarmas ${pkPa} kPa bosimda gazning hajmi ${dV} m³ ga kengaydi. Gaz bajargan ishni (kJ) toping.`,
            correct: A,
            unit: 'kJ',
            explain: `A = p·ΔV = ${pkPa} kPa · ${dV} m³ = ${A} kJ.`,
          };
        },
      },
    ],
  },
  {
    id: '4B-3',
    code: '4B.3',
    sectionId: 'sec-4',
    subsectionId: '4B',
    subsectionTitle: 'B. Termodinamika',
    title: 'Issiqlik mashinalari',
    subtitle: 'Karno sikli, ichki yonuv dvigatellari, bug‘ turbinasi, sovutgichlar va issiqlik nasoslari.',
    theory: {
      overview:
        'Issiqlik mashinasi — isitgichdan olingan ichki energiyani davriy sikl orqali mexanik ishga aylantiruvchi qurilma. Har qanday issiqlik mashinasi uch qismdan iborat: 1) Isitgich (harorati T₁, Q₁ issiqlik beradi); 2) Ishchi jism (gaz yoki bug‘, foydali ish A = Q₁ − |Q₂| bajaradi); 3) Sovutgich (harorati T₂ < T₁, qolgan Q₂ issiqlikni oladi).\n\nIssiqlik mashinasining FIK i: η = (Q₁ − Q₂) / Q₁ = A / Q₁. Sadi Karno (1824) isbotlashicha, T₁ va T₂ haroratlar orasida ishlaydigan barcha issiqlik mashinalari ichida eng katta FIK ga faqat ideal qaytar Karno sikli (2 izoterma + 2 adiabata) ega: η_max = (T₁ − T₂) / T₁ = 1 − T₂/T₁. Teskari yo‘nalishda (tashqi ish sarflab sovuq jismdan issiq jismga issiqlik o‘tkazuvchi) sikl esa sovutgich mashinalari va issiqlik nasoslarining asosidir (sovitish koeffitsiyenti ε = Q₂ / A).',
      keyLaws: [
        { title: 'Issiqlik mashinasi FIK i', text: 'η = A / Q₁ = (Q₁ − Q₂) / Q₁ < 1 — sovutgichsiz davriy issiqlik dvigateli ishlay olmaydi.' },
        { title: 'Karno teoremasi', text: 'η_Karno = 1 − T₂ / T₁ — ideal mashina FIK i ishchi jism turiga bog‘liq emas, faqat isitgich (T₁) va sovutgich (T₂) haroratlariga bog‘liq.' },
        { title: 'Sovutgich va Issiqlik nasosi', text: 'Tashqi elektr/mexanik ish A hisobiga issiqlikni past haroratli T₂ muhitdan yuqori haroratli T₁ muhitga haydaydi.' },
      ],
      formulas: [
        { latex: 'η = A / Q₁ = (Q₁ − Q₂) / Q₁', name: 'Haqiqiy FIK formulasi', symbols: 'Q₁ — isitgichdan olingan, Q₂ — sovutgichga berilgan issiqlik' },
        { latex: 'η_max = (T₁ − T₂) / T₁ = 1 − T₂ / T₁', name: 'Ideal Karno sikli FIK i', symbols: 'T₁, T₂ — Kelvinlarda (K)' },
        { latex: 'COP_sov = Q₂ / A,   COP_nas = Q₁ / A', name: 'Sovutgich va issiqlik nasosi samaradorligi', symbols: 'COP — energiya o‘zgartirish koeffitsiyenti' },
      ],
      constants: [
        { name: 'Zamonaviy bug‘ turbinasi FIK i', symbol: 'η_TES', value: '40% – 45%', unit: '%' },
        { name: 'Ichki yonuv dvigateli FIK i', symbol: 'η_IYD', value: '25% – 42%', unit: '%' },
      ],
      applications: [
        'Issiqlik elektr stansiyalarida (IES) bug‘ turbinalari va kombinatsiyalashgan gaz-bug‘ sikllari.',
        'Avtomobil Otto (benzin) va Dizel dvigatellari hamda energiya tejamkor issiqlik nasoslari.',
      ],
      calculator: {
        title: 'Karno sikli va Issiqlik mashinasi FIK kalkulyatori',
        formulaDisplay: 'η_max = (1 − T₂/T₁)·100%,  A = η·Q₁',
        inputs: [
          { key: 'T1', label: 'Isitgich harorati T₁', symbol: 'T₁', unit: 'K', min: 350, max: 2500, step: 25, default: 800 },
          { key: 'T2', label: 'Sovutgich harorati T₂', symbol: 'T₂', unit: 'K', min: 200, max: 800, step: 10, default: 300 },
          { key: 'Q1', label: 'Isitgichdan olingan Q₁', symbol: 'Q₁', unit: 'kJ', min: 10, max: 1000, step: 10, default: 200 },
        ],
        compute: (v) => {
          if (v.T2 >= v.T1) return { value: '0', unit: '%', summary: 'Isitgich harorati T₁ > T₂ bo‘lishi shart!' };
          const eta = (v.T1 - v.T2) / v.T1;
          const A = eta * v.Q1;
          const Q2 = v.Q1 - A;
          return {
            value: (eta * 100).toFixed(1),
            unit: '%',
            summary: `Maksimal FIK η = ${(eta * 100).toFixed(1)}%. Maksimal ish A = ${A.toFixed(1)} kJ, sovutgichga Q₂ = ${Q2.toFixed(1)} kJ.`,
          };
        },
      },
    },
    simulation: {
      title: 'Karno Sikli (2 Izoterma + 2 Adiabata) 3D Interaktiv Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Games__carnotcycle.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: '3D silindr va porshenda Karno siklining barcha 4 ta bosqichini (izotermik kengayish, adiabatik kengayish, izotermik siqilish, adiabatik siqilish) kuzating.',
      alternateSims: [
        { label: 'Karno sikli 3D simulyatsiyasi', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__carnotcycle.html' },
        { label: 'Termodinamika va gaz ishi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Introduction.html' },
      ],
      parametric: {
        mode: 'carnot_cycle',
        title: 'Karno Sikli P-V Diagrammasi va FIK Simulyatori',
        description: 'Isitgich T₁ va sovutgich T₂ haroratlarini o‘zgartirib, P-V sikl ichidagi yuza (foydali ish A) va η_max FIK ni real vaqtda kuzating.',
        controls: [
          { key: 'T1', label: 'Isitgich T₁', unit: 'K', min: 450, max: 1400, step: 25, value: 900 },
          { key: 'T2', label: 'Sovutgich T₂', unit: 'K', min: 200, max: 420, step: 10, value: 300 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ideal Karno mashinasining isitgich harorati 600 K, sovutgich harorati 300 K bo‘lsa, uning maksimal FIK i necha foiz?', options: ['50%', '100%', '25%', '75%'], answer: 0, explain: 'η = (600 − 300)/600 = 0.5 = 50%.' },
      { q: 'Karno sikli qaysi to‘rtta jarayondan tashkil topadi?', options: ['Ikki izoterma va ikki adiabata', 'Ikki izoxora va ikki izobara', 'To‘rtta izoterma', 'Ikki izobara va ikki adiabata'], answer: 0, explain: 'Karno sikli = izotermik kengayish → adiabatik kengayish → izotermik siqilish → adiabatik siqilish.' },
      { q: 'Issiqlik mashinasi isitgichdan 1000 J issiqlik olib, sovutgichga 600 J issiqlik berdi. Dvigatelning FIK i qancha?', options: ['40%', '60%', '100%', '25%'], answer: 0, explain: 'η = (1000 − 600) / 1000 = 400 / 1000 = 40%.' },
      { q: 'Sovutgichsiz (Q₂ = 0) ishlaydigan davriy issiqlik mashinasining FIK i 100% bo‘lishi mumkinmi?', options: ['Yo‘q, bu termodinamikaning 2-qonuniga zid', 'Ha, ideal gazda mumkin', 'Ha, vakuumda mumkin', 'Faqat bug‘ turbinasida'], answer: 0, explain: 'Termodinamikaning 2-qonuni tufayli Q₂ > 0 va η < 100% bo‘lishi shart.' },
      { q: 'Ichki yonuv dvigatelida yonilg‘i aralashmasini siqish qaysi taktda amalga oshadi?', options: ['2-takt (siqish takti)', '1-takt (kiritish)', '3-takt (ish yo‘li)', '4-takt (chiqarish)'], answer: 0, explain: '4 taktli dvigatel: 1-kiritish, 2-siqish, 3-ish yo‘li, 4-chiqarish.' },
      { q: 'Issiqlik nasosining asosiy vazifasi nima?', options: ['Tashqi energiya sarflab sovuq muhitdan issiq xonaga issiqlik o‘tkazish', 'Mexanik energiya ishlab chiqarish', 'Xonani faqat sovutish', 'Gazni yoqish'], answer: 0, explain: 'Issiqlik nasosi tashqaridagi salqin havo/yerdan issiqlik olib, uy ichini isitadi.' },
      { q: 'Karno mashinasining FIK ini oshirishning eng samarali usuli qaysi?', options: ['Isitgich harorati T₁ ni oshirish va sovutgich harorati T₂ ni pasaytirish', 'Ishchi gaz massasini oshirish', 'Silindr devorlarini qalinlashtirish', 'Tezlikni kamaytirish'], answer: 0, explain: 'η = 1 − T₂/T₁ faqat T₁ va T₂ nisbatiga bog‘liq.' },
      { q: 'P-V diagrammadagi yopiq Karno sikli egri chizig‘i bilan chegaralangan yuza nimaga teng?', options: ['Bir sikl davomida bajarilgan foydali mexanik ishga (A)', 'Sovutgich haroratiga', 'Isitgichdan olingan Q₁ ga', 'Entropiyaga'], answer: 0, explain: 'Yopiq kontur yuzasi A = ∮p·dV — siklning foydali ishi.' },
    ],
    problems: [
      {
        variants: [[800, 200], [1000, 300], [750, 300], [900, 360]],
        build: (i) => {
          const [T1, T2] = [[800, 200], [1000, 300], [750, 300], [900, 360]][i];
          const eta = ((T1 - T2) / T1) * 100;
          return {
            q: `Ideal issiqlik mashinasi isitgichi T₁ = ${T1} K va sovutgichi T₂ = ${T2} K haroratda ishlaydi. Mashinaning maksimal FIK ini (%) toping.`,
            correct: eta,
            unit: '%',
            explain: `η = (1 − T₂/T₁)·100% = (1 − ${T2}/${T1})·100% = ${eta}%.`,
          };
        },
      },
      {
        variants: [[500, 300], [1200, 900], [2000, 1200], [800, 500]],
        build: (i) => {
          const [Q1, Q2] = [[500, 300], [1200, 900], [2000, 1200], [800, 500]][i];
          const eta = ((Q1 - Q2) / Q1) * 100;
          return {
            q: `Issiqlik dvigateli isitgichdan ${Q1} kJ issiqlik olib, sovutgichga ${Q2} kJ berdi. FIK (%) qancha?`,
            correct: eta,
            unit: '%',
            explain: `η = ((${Q1} − ${Q2}) / ${Q1}) · 100% = ${eta}%.`,
          };
        },
      },
    ],
  },
  {
    id: '4C-1',
    code: '4C.1',
    sectionId: 'sec-4',
    subsectionId: '4C',
    subsectionTitle: 'C. Agregat Holatlar va Suyuqlik Xossalari',
    title: "Faza o'tishlari",
    subtitle: "Erish va qotish, bug'lanish va kondensatsiya, qaynash, sublimatsiya.",
    theory: {
      overview:
        'Moddalar bosim va haroratga qarab to‘rt asosiy agregat holatda (qattiq, suyuq, gaz, plazma) bo‘lishi mumkin. Bir holatdan ikkinchisiga o‘tish faza o‘tishi deyiladi: kristall moddalarning qattiqdan suyuqlikka o‘tishi erish (teskarisi qotish), suyuqlikdan gazga o‘tishi bug‘lanish (teskarisi kondensatsiya), qattiq moddaning suyuqlanmasdan to‘g‘ridan-to‘g‘ri bug‘ga aylanishi esa sublimatsiya (masalan, quruq muz CO₂, yod) deb ataladi.\n\n1-tur faza o‘tishlarida (erish va bug‘lanish) harorat o‘zgarmagan holda yashirin issiqlik yutiladi: erish issiqligi Q = λ·m (λ — solishtirma erish issiqligi, J/kg), bug‘ hosil bo‘lish issiqligi Q = L·m (L — solishtirma bug‘lanish issiqligi, J/kg). Suyuqlikning butun hajmi bo‘ylab bug‘ pufakchalari hosil bo‘lib yuzaga ko‘tarilishi qaynash deyiladi; qaynash to‘yingan bug‘ bosimi tashqi bosimga tenglashganda (p_to‘y = p_tash) boshlanadi, shuning uchun tog‘da bosim past bo‘lganda suv 100 °C dan pastda qaynaydi.',
      keyLaws: [
        { title: 'Erish va qotish izotermi', text: 'Kristall jism erish haroratida turganda berilgan issiqlik haroratni emas, kristall panjarani buzishga (potensial energiyaga) sarflanadi.' },
        { title: 'Qaynash sharti', text: 'p_to‘y = p_tash — tashqi bosim oshsa (avtoklav, skorovarka), qaynash harorati ko‘tariladi; bosim kamaysa pasayadi.' },
        { title: 'Bug‘lanishda sovish', text: 'Eng tez (yuqori energiyali) molekulalar suyuqlikni tark etgani uchun qolgan suyuqlik o‘rtacha kinetik energiyasi va harorati pasayadi.' },
      ],
      formulas: [
        { latex: 'Q = λ · m', name: 'Erish / qotish issiqligi', symbols: 'λ — solishtirma erish issiqligi (J/kg), m — massa (kg)' },
        { latex: 'Q = L · m', name: 'Bug‘lanish / kondensatsiya issiqligi', symbols: 'L — solishtirma bug‘lanish issiqligi (J/kg)' },
        { latex: 'Q_um = c·m·ΔT + λ·m', name: 'Muzni isitib eritish to‘la issiqligi', symbols: 'c_muz = 2100 J/(kg·K), λ_muz = 3.34·10⁵ J/kg' },
      ],
      constants: [
        { name: 'Muzning solishtirma erish issiqligi', symbol: 'λ_muz', value: '3.34·10⁵', unit: 'J/kg' },
        { name: 'Suvning solishtirma bug‘lanish issiqligi (100°C)', symbol: 'L_suv', value: '2.26·10⁶', unit: 'J/kg' },
      ],
      applications: [
        'Issiqlik elektr stansiyalarida suv bug‘i kondensatorlari va sovutish minoralari.',
        'Liofilizatsiya (sublimatsion quritish) orqali oziq-ovqat va dori vositalarini saqlash.',
      ],
      calculator: {
        title: 'Muzni eritish va suvni bug‘latish energiyasi kalkulyatori',
        formulaDisplay: 'Q_er = λ·m,  Q_bug‘ = L·m',
        inputs: [
          { key: 'm', label: 'Suv/Muz massasi m', symbol: 'm', unit: 'kg', min: 0.1, max: 50, step: 0.5, default: 2 },
          { key: 't0', label: 'Boshlang‘ich harorat t₀', symbol: 't₀', unit: '°C', min: -30, max: 100, step: 5, default: 0 },
        ],
        compute: (v) => {
          let q = 0;
          if (v.t0 < 0) q += 2100 * v.m * (0 - v.t0);
          if (v.t0 <= 0) q += 334000 * v.m;
          q += 4200 * v.m * (100 - Math.max(0, v.t0));
          q += 2260000 * v.m;
          return {
            value: (q / 1e6).toFixed(2),
            unit: 'MJ',
            summary: `${v.m} kg massani ${v.t0} °C dan to‘liq 100 °C bug‘ga aylantirish uchun jami Q = ${(q / 1e6).toFixed(2)} MJ issiqlik kerak.`,
          };
        },
      },
    },
    simulation: {
      title: 'Faza O‘tishlari, Agregat Holatlar va Issiqlik Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Thermodynamics_Introduction.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Tabiatdagi bug‘lanish, kondensatsiya va agregat holatlar o‘zgarishini interaktiv 3D muhitda kuzating.',
      alternateSims: [
        { label: 'Agregat holatlar va termodinamika (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Introduction.html' },
        { label: 'Suyuqlik zarralari fazalari (3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=liquid-marble' },
      ],
      parametric: {
        mode: 'phase_transition',
        title: 'Isitish Egri Chizig‘i (Muz → Suv → Bug‘) Simulyatori',
        description: 'Isitgich quvvatini o‘zgartirib, 0 °C (erish) va 100 °C (qaynash) da harorat platolarini va yashirin issiqlik sarfini kuzating.',
        controls: [
          { key: 'm', label: 'Massa m', unit: 'kg', min: 0.5, max: 5, step: 0.5, value: 1 },
          { key: 'P', label: 'Isitgich quvvati P', unit: 'kW', min: 1, max: 10, step: 0.5, value: 4 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qattiq jismning suyuqlanmasdan to‘g‘ridan-to‘g‘ri gaz holatiga o‘tishi nima deb ataladi?', options: ['Sublimatsiya', 'Kondensatsiya', 'Kristallanish', 'Qaynash'], answer: 0, explain: 'Masalan, muzning sovuqda bug‘lanishi yoki quruq muz CO₂ ning gazga aylanishi sublimatsiyadir.' },
      { q: 'Kristall jism eriyotganda tashqaridan berilayotgan issiqlik nimaga sarflanadi?', options: ['Haroratni o‘zgartirmasdan kristall panjarani buzishga (molekulalar potensial energiyasini oshirishga)', 'Haroratni tez oshirishga', 'Massani kamaytirishga', 'Bosimni tushirishga'], answer: 0, explain: 'Erish vaqtida t = const qoladi, Q = λ·m panjara bog‘larini uzishga ketadi.' },
      { q: 'Baland tog‘ cho‘qqisida suv nima uchun 100 °C dan past haroratda (masalan, 85 °C da) qaynaydi?', options: ['Atmosfera bosimi past bo‘lgani uchun to‘yingan bug‘ bosimi pastroq haroratda tashqi bosimga tenglashadi', 'Gravitatsiya kuchaygani uchun', 'Quyosh yaqinligi uchun', 'Suv zichligi ortgani uchun'], answer: 0, explain: 'Qaynash p_to‘y(T) = p_tash shartida boshlanadi.' },
      { q: '0 °C haroratli 3 kg muzni to‘liq eritish uchun qancha issiqlik kerak (λ = 3.34·10⁵ J/kg)?', options: ['1.002 MJ', '334 kJ', '6.78 MJ', '111 kJ'], answer: 0, explain: 'Q = λ·m = 3.34·10⁵ · 3 = 1.002·10⁶ J = 1.002 MJ.' },
      { q: 'Qaysi jarayonda issiqlik AJRALIB CHIQADI (ekzotermik faza o‘tishi)?', options: ['Kondensatsiya va qotish (kristallanish)', 'Bug‘lanish', 'Erish', 'Sublimatsiya'], answer: 0, explain: 'Bug‘ suyuqlikka yoki suyuqlik kristallga aylanganda ortiqcha bog‘lanish energiyasi atrofga chiqariladi.' },
      { q: 'Amorf jismlarning (shisha, mum, smola) kristall jismlardan asosiy farqi nima?', options: ['Aniq erish haroratiga ega emas (asta-sekin yumshaydi) va izotropdir', 'Kristall panjaraga ega', 'Hech qachon erimaydi', 'Faqat gaz holatida bo‘ladi'], answer: 0, explain: 'Amorf jismlarda uzoq tartib yo‘qligi sababli aniq erish nuqtasi bo‘lmaydi.' },
      { q: 'Suyuqlik bug‘lanishi qanday haroratda yuz beradi?', options: ['Istalgan haroratda (faqat sirtdan)', 'Faqat 100 °C da', 'Faqat 0 °C da', 'Faqat qaynashda'], answer: 0, explain: 'Bug‘lanish har qanday haroratda suyuqlik sirtidan, qaynash esa ma’lum haroratda butun hajmdan ketadi.' },
      { q: '100 °C li 1 kg bug‘ 100 °C li 1 kg suvdan necha Joul ko‘proq ichki energiyaga ega (L = 2.26·10⁶ J/kg)?', options: ['2.26 MJ', '334 kJ', '4.2 kJ', '0 J'], answer: 0, explain: 'Bug‘ hosil bo‘lish yashirin issiqligi Q = L·m = 2.26 MJ aynan bug‘ning qo‘shimcha ichki energiyasidir.' },
    ],
    problems: [
      {
        variants: [[2], [5], [0.5], [4]],
        build: (i) => {
          const [m] = [[2], [5], [0.5], [4]][i];
          const Q = m * 334;
          return {
            q: `Erish haroratidagi ${m} kg muzni to‘liq suyuqlikka aylantirish uchun necha kJ issiqlik kerak (λ = 334 kJ/kg)?`,
            correct: Q,
            unit: 'kJ',
            explain: `Q = λ · m = 334 · ${m} = ${Q} kJ.`,
          };
        },
      },
      {
        variants: [[2], [3], [0.5], [4]],
        build: (i) => {
          const [m] = [[2], [3], [0.5], [4]][i];
          const Q = Number((m * 2.26).toFixed(2));
          return {
            q: `100 °C haroratdagi ${m} kg suvni to‘liq bug‘latish uchun necha MJ issiqlik miqdori sarflanadi (L = 2.26 MJ/kg)?`,
            correct: Q,
            unit: 'MJ',
            explain: `Q = L · m = 2.26 · ${m} = ${Q} MJ.`,
          };
        },
      },
    ],
  },
  {
    id: '4C-2',
    code: '4C.2',
    sectionId: 'sec-4',
    subsectionId: '4C',
    subsectionTitle: 'C. Agregat Holatlar va Suyuqlik Xossalari',
    title: 'Havo namligi',
    subtitle: "To'yingan va to'yinmagan bug', mutlaq va nisbiy namlik, shudring nuqtasi.",
    theory: {
      overview:
        'O‘z suyuqligi bilan dinamik muvozanatda turgan bug‘ to‘yingan bug‘ deyiladi (1 sekundda uchib chiqayotgan va qaytib tushayotgan molekulalar soni teng). To‘yingan bug‘ bosimi va zichligi hajmga bog‘liq bo‘lmaydi (faqat harorat ortishi bilan keskin ortadi), shuning uchun u Boyl-Mariott qonuniga bo‘ysunmaydi.\n\nAtmosferadagi suv bug‘i tarkibini ikki kattalik ifodalaydi: mutlaq namlik ρ (1 m³ havodagi suv bug‘i massasi, g/m³) va nisbiy namlik φ = (ρ / ρ_to‘y)·100% = (p / p_to‘y)·100%. Havo izobarik sovitilganda undagi suv bug‘i to‘yinish holatiga yetadigan va tuman/shudring tusha boshlaydigan harorat shudring nuqtasi (t_sh) deb ataladi. Havo namligi gigrometr va psixrometr (quruq hamda nam termometrlar farqi asosida) bilan o‘lchanadi.',
      keyLaws: [
        { title: 'To‘yingan bug‘ xossasi', text: 'O‘zgarmas haroratda to‘yingan bug‘ siqilsa, uning bosimi ortmaydi — ortiqcha bug‘ kondensatsiyalanadi!' },
        { title: 'Nisbiy namlik formulasi', text: 'φ = (p / p_to‘y) · 100% = (ρ / ρ_to‘y) · 100%; inson uchun qulay namlik 40%–60%.' },
        { title: 'Shudring nuqtasi', text: 'Havo harorati shudring nuqtasiga tenglashganda nisbiy namlik φ = 100% ga yetadi va kondensatsiya boshlanadi.' },
      ],
      formulas: [
        { latex: 'φ = (ρ / ρ_to‘y) · 100% = (p / p_to‘y) · 100%', name: 'Nisbiy namlik', symbols: 'ρ — mutlaq namlik (g/m³), ρ_to‘y — shu haroratdagi to‘yingan bug‘ zichligi' },
        { latex: 'm_suv = ρ · V', name: 'Xonadagi suv bug‘i massasi', symbols: 'V — xona hajmi (m³)' },
      ],
      constants: [
        { name: '20 °C da to‘yingan suv bug‘i zichligi', symbol: 'ρ_to‘y(20°C)', value: '17.3', unit: 'g/m³' },
        { name: '20 °C da to‘yingan suv bug‘i bosimi', symbol: 'p_to‘y(20°C)', value: '2.33', unit: 'kPa' },
      ],
      applications: [
        'Meteorologiyada tuman, shudring, bulut hosil bo‘lishi va yog‘ingarchilikni bashorat qilish.',
        'Muzeylar, issiqxonalar va server xonalarida iqlim nazorati (HVAC) tizimlari.',
      ],
      calculator: {
        title: 'Nisbiy namlik va xona havosidagi suv massasi kalkulyatori',
        formulaDisplay: 'φ = (ρ / ρ_to‘y)·100%,  m_bug‘ = ρ·V',
        inputs: [
          { key: 'rho', label: 'Mutlaq namlik ρ', symbol: 'ρ', unit: 'g/m³', min: 1, max: 30, step: 0.2, default: 10.4 },
          { key: 'rhot', label: 'To‘yingan bug‘ zichligi ρ_to‘y', symbol: 'ρ_to‘y', unit: 'g/m³', min: 5, max: 50, step: 0.5, default: 17.3 },
          { key: 'V', label: 'Xona hajmi V', symbol: 'V', unit: 'm³', min: 10, max: 500, step: 10, default: 100 },
        ],
        compute: (v) => {
          const phi = Math.min(100, (v.rho / v.rhot) * 100);
          const m = v.rho * v.V;
          return {
            value: phi.toFixed(1),
            unit: '%',
            summary: `Nisbiy namlik φ = ${phi.toFixed(1)}%. ${v.V} m³ havodagi jami suv bug‘i massasi m = ${(m / 1000).toFixed(2)} kg (${m.toFixed(0)} g).`,
          };
        },
      },
    },
    simulation: {
      title: 'To‘yingan Bug‘, Kondensatsiya va Namlik Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Thermodynamics_Hot_Air_Balloon.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Issiq havo va gaz/bug‘ bosimi hamda namlikning zichlikka ta’sirini 3D laboratoriyada kuzating.',
      alternateSims: [
        { label: 'Issiq gaz va bug‘ zichligi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Hot_Air_Balloon.html' },
        { label: 'Gaz va bug‘ holat tenglamasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html' },
      ],
      parametric: {
        mode: 'humidity_dewpoint',
        title: 'Psixrometr, Nisbiy Namlik va Shudring Nuqtasi Simulyatori',
        description: 'Xona harorati t va mutlaq namlik ρ ni o‘zgartirib, nisbiy namlik φ va shudring nuqtasi t_sh qanday siljishini kuzating.',
        controls: [
          { key: 'temp', label: 'Havo harorati t', unit: '°C', min: 5, max: 35, step: 1, value: 20 },
          { key: 'rho', label: 'Suv bug‘i zichligi ρ', unit: 'g/m³', min: 2, max: 25, step: 0.5, value: 10 },
        ],
      },
    },
    coreQuestions: [
      { q: 'O‘z suyuqligi bilan dinamik muvozanatda bo‘lgan bug‘ nima deyiladi?', options: ['To‘yingan bug‘', 'To‘yinmagan bug‘', 'Ideal gaz', 'O‘ta qizigan bug‘'], answer: 0, explain: 'Dinamik muvozanatda bug‘lanish tezligi kondensatsiya tezligiga teng bo‘ladi.' },
      { q: 'Psixrometrning quruq va nam termometrlari ko‘rsatishlari bir xil bo‘lsa, nisbiy namlik qanchaga teng?', options: ['100%', '0%', '50%', '40%'], answer: 0, explain: 'Agar havo to‘yingan bo‘lsa (φ = 100%), ho‘l latta bug‘lanmaydi va nam termometr sovimaydi.' },
      { q: '20 °C haroratda to‘yingan suv bug‘i zichligi 17.3 g/m³. Agar 1 m³ havoda 8.65 g suv bug‘i bo‘lsa, nisbiy namlik qancha?', options: ['50%', '25%', '86.5%', '100%'], answer: 0, explain: 'φ = (8.65 / 17.3) · 100% = 50%.' },
      { q: 'Yopiq idishdagi suv ustida to‘yingan bug‘ bor. Harorat o‘zgarmasdan porshen bilan hajm 2 marta kamaytirilsa, bug‘ bosimi qanday o‘zgaradi?', options: ['O‘zgarmaydi (ortiqcha bug‘ suyuqlikka aylanadi)', '2 marta ortadi', '2 marta kamayadi', '4 marta ortadi'], answer: 0, explain: 'To‘yingan bug‘ bosimi faqat haroratga bog‘liq, hajmga bog‘liq emas.' },
      { q: 'Shudring nuqtasi deganda nima tushuniladi?', options: ['Havodagi to‘yinmagan suv bug‘i sovish natijasida to‘yingan holatga o‘tadigan harorat', 'Suvning qaynash harorati', 'Muzning erish harorati', 'Mutlaq nol'], answer: 0, explain: 'Harorat shudring nuqtasiga yetganda nisbiy namlik 100% bo‘lib shudring tushadi.' },
      { q: 'Yozda issiq xonani qizdirgich bilan qizdirsak (tashqaridan suv bug‘i kirmasa), xonadagi nisbiy namlik φ qanday o‘zgaradi?', options: ['Kamayadi, chunki ρ_to‘y ortadi, ρ esa o‘zgarmaydi', 'Ortadi', 'O‘zgarmaydi', '100% ga yetadi'], answer: 0, explain: 'Harorat oshishi bilan havo ko‘proq bug‘ sig‘dira oladi (ρ_to‘y ortadi), shuning uchun φ = ρ/ρ_to‘y kamayadi.' },
      { q: 'Mutlaq namlik qanday birlikda o‘lchanadi?', options: ['g/m³ yoki kg/m³', 'Foiz (%)', 'Paskal/metr', 'Joul'], answer: 0, explain: 'Mutlaq namlik 1 m³ havodagi suv bug‘ining massasidir.' },
      { q: 'Havo namligini o‘lchovchi asbob nima deb ataladi?', options: ['Gigrometr / Psixrometr', 'Barometr', 'Dinamometr', 'Ampermetr'], answer: 0, explain: 'Gigrometr va psixrometr havo namligini o‘lchaydi.' },
    ],
    problems: [
      {
        variants: [[12, 20], [9, 15], [13.84, 17.3], [15, 25]],
        build: (i) => {
          const [rho, rhot] = [[12, 20], [9, 15], [13.84, 17.3], [15, 25]][i];
          const phi = Math.round((rho / rhot) * 100);
          return {
            q: `Havoning mutlaq namligi ${rho} g/m³, shu haroratdagi to‘yingan bug‘ zichligi ${rhot} g/m³ bo‘lsa, nisbiy namlik (%) qancha?`,
            correct: phi,
            unit: '%',
            explain: `φ = (${rho} / ${rhot}) · 100% = ${phi}%.`,
          };
        },
      },
      {
        variants: [[80, 10], [50, 12], [120, 15], [60, 10]],
        build: (i) => {
          const [V, rho] = [[80, 10], [50, 12], [120, 15], [60, 10]][i];
          const m = V * rho;
          return {
            q: `Hajmi ${V} m³ xonadagi havoning mutlaq namligi ${rho} g/m³ bo‘lsa, xona havosida necha gramm suv bug‘i bor?`,
            correct: m,
            unit: 'g',
            explain: `m = ρ · V = ${rho} · ${V} = ${m} g.`,
          };
        },
      },
    ],
  },
  {
    id: '4C-3',
    code: '4C.3',
    sectionId: 'sec-4',
    subsectionId: '4C',
    subsectionTitle: 'C. Agregat Holatlar va Suyuqlik Xossalari',
    title: 'Suyuqlik va qattiq jismlar',
    subtitle: "Sirt taranglik kuchi, ho'llash va ho'llamaslik, kapillyarlik, kristall va amorf jismlar, qattiq jismlarning deformatsiyasi.",
    theory: {
      overview:
        'Suyuqlik sirtidagi molekulalar ichki qatlam molekulalari tomonidan ichkariga tortilib turadi, shuning uchun suyuqlik o‘z sirt yuzasini minimallashga (vaznsizlikda sharga aylanishga) intiladi. Sirt konturining l uzunligiga perpendikulyar ravishda sirt bo‘ylab ta’sir etuvchi kuch sirt taranglik kuchi deyiladi: F_st = σ·l, bu yerda σ (N/m) — sirt taranglik koeffitsiyenti.\n\nSuyuqlik molekulalari qattiq jism molekulalariga o‘zaro tortishishidan kuchliroq tortilsa ho‘llash (masalan, shisha va suv, botiq menisk), aks holda ho‘llamaslik (shisha va simob, qavariq menisk) yuz beradi. Ingichka naychalarda (kapillyarlarda) ho‘llovchi suyuqlik ko‘tariladi, ho‘llamaydigan suyuqlik esa pasayadi: h = (2·σ·cosθ)/(ρ·g·r). Qattiq jismlar kristall (uzoq tartibli panjara, aniq erish nuqtasi, anizotrop monokristallar) va amorf (uzoq tartib yo‘q, izotrop, aniq erish haroratiga ega emas) bo‘ladi.',
      keyLaws: [
        { title: 'Sirt taranglik kuchi', text: 'F_st = σ·l — kontur uzunligiga proporsional; harorat ortishi va sirt-faol moddalar (sovun) qo‘shilishi bilan σ kamayadi.' },
        { title: 'Laplas bosimi va Kapillyarlik', text: 'Egrilangan suyuqlik sirti ostida qo‘shimcha bosim Δp = 2σ/R yuzaga keladi; kapillyarda ko‘tarilish h = 2σ/(ρgr).' },
        { title: 'Kristall va Amorf jismlar', text: 'Monokristallar anizotrop (xossalari yo‘nalishga bog‘liq), polikristallar va amorf jismlar izotropdir.' },
      ],
      formulas: [
        { latex: 'F_st = σ · l', name: 'Sirt taranglik kuchi', symbols: 'σ — sirt taranglik koeffitsiyenti (N/m), l — kontur uzunligi (m)' },
        { latex: 'h = (2 · σ · cosθ) / (ρ · g · r)', name: 'Kapillyar ko‘tarilish balandligi (Jyuren)', symbols: 'r — kapillyar radiusi, θ — chekka ho‘llash burchagi' },
        { latex: 'Δp = 2σ / R  (pufakcha uchun 4σ / R)', name: 'Laplas qo‘shimcha bosimi', symbols: 'R — sirt egrilik radiusi' },
      ],
      constants: [
        { name: 'Suvning sirt tarangligi (20°C)', symbol: 'σ_suv', value: '0.0728', unit: 'N/m' },
        { name: 'Simobning sirt tarangligi', symbol: 'σ_Hg', value: '0.47', unit: 'N/m' },
      ],
      applications: [
        'O‘simlik ildizlari va poyalarida suvning kapillyar naychalar bo‘ylab yuqoriga ko‘tarilishi.',
        'Sirt-faol moddalar (yuvish vositalari) orqali σ ni pasaytirib ho‘llashni kuchaytirish.',
      ],
      calculator: {
        title: 'Kapillyar ko‘tarilish va Sirt taranglik kalkulyatori',
        formulaDisplay: 'h = 2σ / (ρ·g·r),  F_st = σ·2πr',
        inputs: [
          { key: 'sigma', label: 'Sirt taranglik σ', symbol: 'σ', unit: 'N/m', min: 0.01, max: 0.5, step: 0.005, default: 0.073 },
          { key: 'rmm', label: 'Kapillyar radiusi r', symbol: 'r', unit: 'mm', min: 0.05, max: 5, step: 0.05, default: 0.5 },
          { key: 'rho', label: 'Suyuqlik zichligi ρ', symbol: 'ρ', unit: 'kg/m³', min: 500, max: 13600, step: 50, default: 1000 },
        ],
        compute: (v) => {
          const r = v.rmm * 1e-3;
          const h = (2 * v.sigma) / (v.rho * 9.81 * r);
          const fst = v.sigma * 2 * Math.PI * r;
          return {
            value: (h * 100).toFixed(2),
            unit: 'sm',
            summary: `To‘liq ho‘llashda kapillyar ko‘tarilish balandligi h = ${(h * 100).toFixed(2)} sm (${(h * 1000).toFixed(1)} mm). Sirt taranglik kuchi F_st = ${(fst * 1000).toFixed(3)} mN.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Sirt Taranglik (Liquid Marble PBF) va Elastik Deformatsiya Lab',
      openSourceUrl: 'sims/pbf/index.html?preset=liquid-marble',
      openSourceSource: 'Three.js Particle Fluids (PBF)',
      openSourceNote: 'Sirt taranglik σ parametrini o‘zgartirib, suyuqlik tomchisining sferik shaklga tortilishini va elastik jismlar deformatsiyasini 3D kuzating.',
      alternateSims: [
        { label: 'Sirt taranglik (Suyuq sharcha PBF 3D)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=liquid-marble' },
        { label: 'Elastik deformatsiya va siqilish (PBF 3D)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=elastic-studies' },
        { label: 'Elastiklik modullari taqqoslovi (PBF 3D)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=bunny-lineup' },
      ],
      parametric: {
        mode: 'capillary_tension',
        title: 'Kapillyar Ko‘tarilish, Menisk va Sirt Taranglik Simulyatori',
        description: 'Kapillyar radiusi r va sirt taranglik σ ni o‘zgartirib, ho‘llash/ho‘llamaslik holatida suyuqlik ustuni balandligi h ni kuzating.',
        controls: [
          { key: 'r', label: 'Naycha radiusi r', unit: 'mm', min: 0.2, max: 3.0, step: 0.1, value: 0.6 },
          { key: 'sigma', label: 'Sirt taranglik σ', unit: 'mN/m', min: 20, max: 120, step: 5, value: 73 },
          { key: 'wet', label: 'Ho‘llash (1=Ha, -1=Yo‘q)', unit: '', min: -1, max: 1, step: 2, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kosmik kemada (vaznsizlikda) suyuqlik tomchisi sirt taranglik kuchi tufayli qanday shakl oladi?', options: ['Shar shaklini (berilgan hajmda minimal sirt yuzasiga ega)', 'Kub shaklini', 'Yassi disk shaklini', 'Silindr shaklini'], answer: 0, explain: 'Sirt taranglik sirt energiyasini minimallashga intiladi; minimal sirt yuzali shakl — shar.' },
      { q: 'Kapillyar naychaning radiusi 2 marta kamaytirilsa, ho‘llovchi suyuqlikning ko‘tarilish balandligi qanday o‘zgaradi?', options: ['2 marta ortadi', '2 marta kamayadi', '4 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'h = 2σ / (ρ·g·r) => r ga teskari proporsional.' },
      { q: 'Suvning harorati oshirilganda va unga sovun qo‘shilganda sirt taranglik koeffitsiyenti σ qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Avval ortib keyin nol bo‘ladi'], answer: 0, explain: 'Harorat ortishi va sirt-faol moddalar (sovun) molekulalararo bog‘lanishni zaiflashtirib σ ni kamaytiradi.' },
      { q: 'Ho‘llamaydigan suyuqlik (masalan, shisha naychadagi simob) qanday menisk hosil qiladi va kapillyarda qanday joylashadi?', options: ['Qavariq menisk va sathi idishdagidan pastda tushadi', 'Botiq menisk va yuqoriga ko‘tariladi', 'Tekis sirt', 'Tepaga otiladi'], answer: 0, explain: 'Simob shishani ho‘llamaydi (cosθ < 0), shuning uchun qavariq menisk bilan pastga tushadi.' },
      { q: 'Monokristall jismlarning fizik xossalari turli yo‘nalishlarda turlicha bo‘lishi nima deb ataladi?', options: ['Anizotropiya', 'Izotropiya', 'Plastiklik', 'Sublimatsiya'], answer: 0, explain: 'Kristall panjara yo‘nalishiga qarab issiqlik/elektr o‘tkazuvchanlik va mustahkamlik farq qilishi anizotropiyadir.' },
      { q: 'Sirt taranglik koeffitsiyenti σ ning SI tizimidagi o‘lchov birligi qaysi?', options: ['N/m (yoki J/m²)', 'N·m', 'Pa/m', 'kg/m'], answer: 0, explain: 'σ = F_st / l => N/m = J/m².' },
      { q: 'Qishloq xo‘jaligida tuproq yuzasini yumshatish (kultivatsiya) nima maqsadda qilinadi?', options: ['Tuproqdagi kapillyarlarni buzib, namlikning yuqoriga chiqib bug‘lanishini kamaytirish uchun', 'Tuproq zichligini oshirish uchun', 'Sirt taranglikni oshirish uchun', 'Yomg‘irni to‘sish uchun'], answer: 0, explain: 'Kapillyarlarni buzish namlikni tuproq ostida saqlab qolishga yordam beradi.' },
      { q: 'Uzunligi 5 sm bo‘lgan kontur bo‘ylab suv sirt taranglik kuchi (σ = 0.073 N/m) qanchaga teng?', options: ['3.65 mN', '7.3 mN', '1.46 mN', '36.5 mN'], answer: 0, explain: 'F = σ · l = 0.073 · 0.05 = 0.00365 N = 3.65 mN.' },
    ],
    problems: [
      {
        variants: [[0.072, 0.1], [0.05, 0.2], [0.073, 0.05], [0.06, 0.15]],
        build: (i) => {
          const [sigma, l] = [[0.072, 0.1], [0.05, 0.2], [0.073, 0.05], [0.06, 0.15]][i];
          const f = Number((sigma * l * 1000).toFixed(2));
          return {
            q: `Sirt taranglik koeffitsiyenti σ = ${sigma} N/m bo‘lgan suyuqlik sirtidagi ${l} m uzunlikdagi chegaraga ta’sir etuvchi sirt taranglik kuchini (mN) toping.`,
            correct: f,
            unit: 'mN',
            explain: `F = σ · l = ${sigma} · ${l} = ${(sigma * l).toFixed(5)} N = ${f} mN.`,
          };
        },
      },
      {
        variants: [[0.07, 0.0005], [0.075, 0.0003], [0.05, 0.0002], [0.06, 0.0004]],
        build: (i) => {
          const [sigma, r] = [[0.07, 0.0005], [0.075, 0.0003], [0.05, 0.0002], [0.06, 0.0004]][i];
          const h = Number((((2 * sigma) / (1000 * 10 * r)) * 100).toFixed(1));
          return {
            q: `Radiusi r = ${r * 1000} mm bo‘lgan shisha kapillyarda sirt tarangligi σ = ${sigma} N/m bo‘lgan suv (ρ = 1000 kg/m³, g = 10 m/s²) necha santimetr ko‘tariladi?`,
            correct: h,
            unit: 'sm',
            explain: `h = 2σ / (ρ·g·r) = (2·${sigma}) / (1000·10·${r}) = ${(h / 100).toFixed(3)} m = ${h} sm.`,
          };
        },
      },
    ],
  },
];
