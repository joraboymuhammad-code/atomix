export const SEC3_TOPICS = [
  {
    id: '3-1',
    code: '3.1',
    sectionId: 'sec-3',
    subsectionId: null,
    subsectionTitle: null,
    title: 'Mexanik tebranishlar',
    subtitle: 'Garmonik tebranishlar, amplituda, davr, chastota, faza, matematik va prujinali mayatniklar.',
    theory: {
      overview:
        'Mexanik tebranishlar — jismning muvozanat vaziyati atrofida vaqt bo‘yicha davriy ravishda takrorlanuvchi harakatidir. Eng sodda va fundamental tur — garmonik tebranishlar bo‘lib, bunda siljish sinus yoki kosinus qonuni bo‘yicha o‘zgaradi: x(t) = A·cos(ωt + φ₀).\n\nBu yerda A — amplituda (muvozanatdan maksimal og‘ish), T — tebranish davri (s), ν = 1/T — chastota (Hz), ω = 2πν — siklik chastota (rad/s), ωt + φ₀ — tebranish fazasi. Kichik burchaklardagi matematik mayatnikning davri T = 2π·√(l/g) faqat ip uzunligi l va gravitatsiya g ga bog‘liq (massaga bog‘liq emas!). Prujinali mayatnikning davri esa T = 2π·√(m/k) massa m va prujina bikrligi k orqali aniqlanadi.',
      keyLaws: [
        { title: 'Garmonik tebranish differensial tenglamasi', text: 'x\'\' + ω²x = 0 — tezlanish muvozanatdan siljishga proporsional va qarama-qarshi yo‘nalgan (a = −ω²x).' },
        { title: 'Matematik mayatnik (Galiley izoxronizmi)', text: 'T = 2π√(l/g) — tebranish davri mayatnik yukining massasiga bog‘liq emas.' },
        { title: 'Prujinali mayatnik', text: 'T = 2π√(m/k) — gorizontal va vertikal holatlarda bir xil davrga ega.' },
      ],
      formulas: [
        { latex: 'x(t) = A · cos(ωt + φ₀)', name: 'Garmonik tebranish tenglamasi', symbols: 'A — amplituda (m), ω — siklik chastota (rad/s), φ₀ — boshlang‘ich faza' },
        { latex: 'T_mat = 2π · √(l / g)', name: 'Matematik mayatnik davri', symbols: 'l — ip uzunligi (m), g = 9.81 m/s²' },
        { latex: 'T_pruj = 2π · √(m / k)', name: 'Prujinali mayatnik davri', symbols: 'm — yuk massasi (kg), k — prujina bikrligi (N/m)' },
        { latex: 'v_max = ω·A,   a_max = ω²·A', name: 'Maksimal tezlik va tezlanish', symbols: 'Muvozanatda v_max, chekka nuqtada a_max' },
      ],
      constants: [
        { name: 'Sekundli mayatnik uzunligi (T=2 s)', symbol: 'l_sec', value: '≈ 0.994', unit: 'm' },
      ],
      applications: [
        'Mexanik soatlar, gravimetrlar (g ni o‘lchab yer osti foydali qazilmalarini topish) va seysmometrlarda.',
        'Kvarst generatorlari va avtomobil osma prujinalarini hisoblashda.',
      ],
      calculator: {
        title: 'Matematik va prujinali mayatnik kalkulyatori',
        formulaDisplay: 'T_mat = 2π√(l/g),  T_pruj = 2π√(m/k)',
        inputs: [
          { key: 'l', label: 'Matematik mayatnik uzunligi l', symbol: 'l', unit: 'm', min: 0.1, max: 10, step: 0.1, default: 1.0 },
          { key: 'g', label: 'Gravitatsiya g', symbol: 'g', unit: 'm/s²', min: 1.6, max: 20, step: 0.2, default: 9.81 },
          { key: 'm', label: 'Prujinali yuk massasi m', symbol: 'm', unit: 'kg', min: 0.1, max: 50, step: 0.2, default: 2.0 },
          { key: 'k', label: 'Bikrlik k', symbol: 'k', unit: 'N/m', min: 10, max: 1000, step: 10, default: 200 },
        ],
        compute: (v) => {
          const Tm = 2 * Math.PI * Math.sqrt(v.l / v.g);
          const Tp = 2 * Math.PI * Math.sqrt(v.m / v.k);
          return {
            value: Tm.toFixed(3),
            unit: 's',
            summary: `Matematik mayatnik T = ${Tm.toFixed(3)} s (ν = ${(1 / Tm).toFixed(2)} Hz). Prujinali mayatnik T = ${Tp.toFixed(3)} s.`,
          };
        },
      },
    },
    simulation: {
      title: 'Matematik Mayatnik va Garmonik Tebranishlar 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Simple_Pendulum.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Mayatnik uzunligi va gravitatsiyani o‘zgartirib, davr, chastota va energiya grafigini 3D kuzating.',
      alternateSims: [
        { label: 'Matematik mayatnik (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Simple_Pendulum.html' },
        { label: 'Davriy harakat (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Periodic_Motion.html' },
      ],
      parametric: {
        mode: 'harmonic_oscillation',
        title: 'Garmonik Tebranish, Faza Portreti va Osillograf Simulyatori',
        description: 'Amplituda A, uzunlik l va bikrlik k ni o‘zgartirib, x(t), v(t) va energiyalar grafigini real vaqtda ko‘ring.',
        controls: [
          { key: 'amp', label: 'Amplituda A', unit: 'sm', min: 10, max: 100, step: 5, value: 60 },
          { key: 'l', label: 'Ip uzunligi l', unit: 'm', min: 0.4, max: 4.0, step: 0.2, value: 1.6 },
          { key: 'g', label: 'Gravitatsiya g', unit: 'm/s²', min: 1.6, max: 20, step: 0.4, value: 9.8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Matematik mayatnik uzunligi 4 marta oshirilsa, uning tebranish davri qanday o‘zgaradi?', options: ['2 marta ortadi', '4 marta ortadi', '2 marta kamayadi', 'O‘zgarmaydi'], answer: 0, explain: 'T = 2π√(l/g) => √4 = 2 marta ortadi.' },
      { q: 'Prujinali mayatnik yukining massasi 4 marta kamaytirilsa, siklik chastota ω qanday o‘zgaradi?', options: ['2 marta ortadi', '2 marta kamayadi', '4 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'ω = √(k/m) => m 4 marta kamaysa ω 2 marta ortadi.' },
      { q: 'Garmonik tebranayotgan jism muvozanat vaziyatidan o‘tayotganda qaysi kattalik maksimal bo‘ladi?', options: ['Tezlik va kinetik energiya', 'Tezlanish', 'Potensial energiya', 'Qaytaruvchi kuch'], answer: 0, explain: 'x = 0 da E_p = 0, v = v_max = ωA, E_k = E_um.' },
      { q: 'Tebranish tenglamasi x = 0.2·sin(10πt) (m) bo‘lsa, tebranish chastotasi ν qancha?', options: ['5 Hz', '10 Hz', '0.2 Hz', '20 Hz'], answer: 0, explain: 'ω = 2πν = 10π => ν = 5 Hz.' },
      { q: 'Matematik mayatnik Oyga olib chiqilsa (g_Oy ≈ g_Yer / 6), uning tebranish davri qanday o‘zgaradi?', options: ['√6 ≈ 2.45 marta ortadi', '6 marta kamayadi', 'O‘zgarmaydi', '6 marta ortadi'], answer: 0, explain: 'g kamaysa T = 2π√(l/g) ortadi.' },
      { q: '10 sekundda 25 marta to‘liq tebrangan mayatnikning davri T necha sekund?', options: ['0.4 s', '2.5 s', '250 s', '0.25 s'], answer: 0, explain: 'T = t / N = 10 / 25 = 0.4 s.' },
      { q: 'Garmonik tebranishning bitta to‘liq davrida jism bosib o‘tadigan yo‘l amplituda A orqali qanday ifodalanadi?', options: ['4A', '2A', 'A', '0'], answer: 0, explain: 'Jism bir davrda to‘rt marta A masofani bosadi.' },
      { q: 'Matematik mayatnik yukining massasi 2 marta oshirilsa, tebranish davri qanday o‘zgaradi?', options: ['O‘zgarmaydi', '2 marta ortadi', '√2 marta ortadi', '2 marta kamayadi'], answer: 0, explain: 'T = 2π√(l/g) formulasida massa qatnashmaydi.' },
    ],
    problems: [
      {
        variants: [[0.5, 50], [2, 200], [4.5, 50], [1, 100]],
        build: (i) => {
          const [m, k] = [[0.5, 50], [2, 200], [4.5, 50], [1, 100]][i];
          const w = Math.sqrt(k / m);
          return {
            q: `Massasi ${m} kg yuk bikrligi ${k} N/m bo‘lgan prujinaga osilgan. Siklik chastota ω (rad/s) qancha?`,
            correct: w,
            unit: 'rad/s',
            explain: `ω = √(k / m) = √(${k} / ${m}) = ${w} rad/s.`,
          };
        },
      },
      {
        variants: [[0.1, 4], [0.2, 5], [0.05, 8], [0.25, 4]],
        build: (i) => {
          const [A, w] = [[0.1, 4], [0.2, 5], [0.05, 8], [0.25, 4]][i];
          const vmax = A * w;
          return {
            q: `Garmonik tebranish amplitudasi A = ${A} m, siklik chastotasi ω = ${w} rad/s. Jismning maksimal tezligini (m/s) toping.`,
            correct: vmax,
            unit: 'm/s',
            explain: `v_max = ω · A = ${w} · ${A} = ${vmax} m/s.`,
          };
        },
      },
    ],
  },
  {
    id: '3-2',
    code: '3.2',
    sectionId: 'sec-3',
    subsectionId: null,
    subsectionTitle: null,
    title: 'Tebranish turlari',
    subtitle: 'Erkin, so‘nuvchi va majburiy tebranishlar, rezonans hodisasi.',
    theory: {
      overview:
        'Tebranuvchi tizimga tashqi davriy kuchlar ta’sir etmasa va energiya yo‘qotilmasa, erkin (xususiy) tebranishlar yuz beradi. Real tizimlarda muhit qarshiligi (F_q = −r·v) tufayli mexanik energiya issiqlikka aylanib, amplituda eksponensial qonun bo‘yicha kamayadi — bu so‘nuvchi tebranishlardir: x(t) = A₀·e^(−βt)·cos(ωt + φ₀), bu yerda β = r/(2m) — so‘nish koeffitsiyenti.\n\nTizimga davriy tashqi kuch F(t) = F₀·cos(Ωt) ta’sir qilganda majburiy tebranishlar hosil bo‘ladi (chastotasi tashqi kuch chastotasi Ω ga teng). Agar tashqi majburlovchi kuch chastotasi Ω tizimning xususiy chastotasi ω₀ ga yaqinlashsa (Ω ≈ ω₀), majburiy tebranishlar amplitudasi keskin ortadi — bu hodisa REZONANS deb ataladi. So‘nish koeffitsiyenti β qancha kichik bo‘lsa, rezonans cho‘qqisi shuncha baland va o‘tkir bo‘ladi.',
      keyLaws: [
        { title: 'So‘nuvchi tebranishlar qonuni', text: 'A(t) = A₀·e^(−βt) — qarshilik kuchi tufayli amplituda har bir davrda bir xil nisbatda (logarifmik dekrement δ = β·T) kamayadi.' },
        { title: 'Majburiy tebranishlar chastotasi', text: 'Barqarorlashgan rejimda tizim o‘z xususiy chastotasida emas, tashqi kuch chastotasi Ω bilan tebranadi.' },
        { title: 'Rezonans sharti', text: 'Ω ≈ ω₀ — tashqi kuch har davrda tebranish bilan bir fazada energiya uzatgani uchun amplituda keskin o‘sadi.' },
      ],
      formulas: [
        { latex: 'x(t) = A₀ · e^(−βt) · cos(ωt + φ₀)', name: 'So‘nuvchi tebranish tenglamasi', symbols: 'β = r/(2m) — so‘nish koeffitsiyenti (s⁻¹)' },
        { latex: 'δ = ln(A_n / A_{n+1}) = β · T', name: 'Logarifmik so‘nish dekrementi', symbols: 'A_n, A_{n+1} — qo‘shni amplitudalar' },
        { latex: 'A_maj = (F₀ / m) / √((ω₀² − Ω²)² + 4β²Ω²)', name: 'Rezonans egri chizig‘i', symbols: 'Ω — tashqi kuch chastotasi, ω₀ — xususiy chastota' },
      ],
      constants: [
        { name: 'Kritik so‘nish sharti', symbol: 'β = ω₀', value: 'Aperiodik rejim', unit: 's⁻¹' },
      ],
      applications: [
        'Foydali rezonans: musiqa asboblari, radio qabul qilgichlar va magnit-rezonans tomografiya (MRT).',
        'Zararli rezonans: ko‘priklar (Takoma ko‘prigi), turbinalar va binolarda dempferlar (so‘ndirgichlar) o‘rnatish.',
      ],
      calculator: {
        title: 'So‘nish koeffitsiyenti va rezonans amplitudasi kalkulyatori',
        formulaDisplay: 'A(t) = A₀·e^(−βt),  A_rez = F₀ / (2mβω₀)',
        inputs: [
          { key: 'A0', label: 'Boshlang‘ich amplituda A₀', symbol: 'A₀', unit: 'sm', min: 1, max: 100, step: 1, default: 20 },
          { key: 'beta', label: 'So‘nish koef. β', symbol: 'β', unit: 's⁻¹', min: 0.05, max: 2, step: 0.05, default: 0.25 },
          { key: 't', label: 'Vaqt t', symbol: 't', unit: 's', min: 0, max: 20, step: 0.5, default: 4 },
        ],
        compute: (v) => {
          const At = v.A0 * Math.exp(-v.beta * v.t);
          const pct = (At / v.A0) * 100;
          return {
            value: At.toFixed(2),
            unit: 'sm',
            summary: `t = ${v.t} s dan keyin amplituda A(t) = ${At.toFixed(2)} sm (dastlabkisining ${pct.toFixed(1)}% qismi).`,
          };
        },
      },
    },
    simulation: {
      title: 'So‘nuvchi Tebranishlar (Damped SHM) va Rezonans 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Damped_SHM.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'So‘nish koeffitsiyenti β, xususiy chastota va qarshilikni o‘zgartirib, amplituda pasayishini 3D da kuzating.',
      alternateSims: [
        { label: 'So‘nuvchi garmonik tebranishlar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Damped_SHM.html' },
        { label: 'Erkin va majburiy tebranish (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Periodic_Motion.html' },
      ],
      parametric: {
        mode: 'damped_resonance',
        title: 'So‘nuvchi Tebranish va Rezonans Egri Chizig‘i Simulyatori',
        description: 'Tashqi kuch chastotasi Ω ni xususiy chastota ω₀ ga yaqinlashtirib, rezonans cho‘qqisini va β so‘nish ta’sirini kuzating.',
        controls: [
          { key: 'w0', label: 'Xususiy chastota ω₀', unit: 'rad/s', min: 1, max: 8, step: 0.2, value: 4.0 },
          { key: 'omega', label: 'Tashqi kuch chastotasi Ω', unit: 'rad/s', min: 1, max: 8, step: 0.2, value: 3.8 },
          { key: 'beta', label: 'So‘nish β', unit: 's⁻¹', min: 0.05, max: 1.5, step: 0.05, value: 0.25 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Rezonans hodisasi qanday sharoitda kuzatiladi?', options: ['Tashqi majburlovchi kuch chastotasi tizimning xususiy tebranish chastotasiga tenglashganda (Ω ≈ ω₀)', 'Tashqi kuch nol bo‘lganda', 'So‘nish cheksiz katta bo‘lganda', 'Faqat vakuumda'], answer: 0, explain: 'Ω ≈ ω₀ bo‘lganda tizim tashqi manbadan maksimal samaradorlik bilan energiya oladi.' },
      { q: 'Muhit qarshiligi ortishi bilan so‘nuvchi tebranishlarning rezonans amplitudasi qanday o‘zgaradi?', options: ['Kamayadi va cho‘qqi yassilashadi', 'Ortadi', 'O‘zgarmaydi', 'Cheksizlikka intiladi'], answer: 0, explain: 'Rezonansda A_max = F₀ / (2mβω₀); β ortishi bilan A_max kamayadi.' },
      { q: 'Majburiy tebranishlarning barqarorlashgan chastotasi nimaga teng?', options: ['Tashqi davriy kuchning chastotasiga (Ω)', 'Faqat tizimning xususiy chastotasiga', 'Nolga', 'Ikkalasining yig‘indisiga'], answer: 0, explain: 'Tizim o‘z xususiy chastotasi tezda so‘nib, tashqi kuch chastotasida tebrana boshlaydi.' },
      { q: 'Askarga ko‘prikdan o‘tayotganda qadamni buzib yurish buyrug‘i nima sababdan beriladi?', options: ['Ko‘prikda xavfli mexanik rezonans vujudga kelishining oldini olish uchun', 'Tezroq o‘tish uchun', 'Ishqalanishni oshirish uchun', 'Massani kamaytirish uchun'], answer: 0, explain: 'Baravar qadam chastotasi ko‘prikning xususiy chastotasi bilan mos kelsa, rezonans ko‘prikni buzishi mumkin.' },
      { q: 'So‘nuvchi tebranishda β koeffitsiyent qancha katta bo‘lsa, tebranish qanday so‘nadi?', options: ['Shuncha tez so‘nadi', 'Shuncha sekin so‘nadi', 'Umuman so‘nmaydi', 'Amplituda ortib boradi'], answer: 0, explain: 'A(t) = A₀·e^(−βt) — β katta bo‘lsa eksponenta tez nolga yaqinlashadi.' },
      { q: 'Avtomobil amortizatorlarining vazifasi nima?', options: ['Kuzovning so‘nuvchi tebranishlarini tez so‘ndirish (dempferlash)', 'Chastotani cheksiz oshirish', 'Rezonans hosil qilish', 'Benzin sarfini oshirish'], answer: 0, explain: 'Amortizator kritik so‘nishga yaqin qarshilik yaratib, tebranishni bir davr ichida to‘xtatadi.' },
      { q: 'So‘nish bo‘lmaganda (β = 0) va Ω = ω₀ da majburiy tebranish amplitudasi nazariy jihatdan qanday bo‘ladi?', options: ['Cheksiz o‘sib boradi', 'Nolga teng bo‘ladi', 'O‘zgarmaydi', 'Kamayadi'], answer: 0, explain: 'Energiya sarfi bo‘lmagani uchun har bir davrda amplituda cheksiz ortaveradi.' },
      { q: 'Logarifmik so‘nish dekrementi δ = β·T nimani ko‘rsatadi?', options: ['Bir davr ichida qo‘shni amplitudalar nisbatining natural logarifmini', 'Tashqi kuchning maksimal qiymatini', 'Bikrlik koeffitsiyentini', 'Tezlik kvadratini'], answer: 0, explain: 'δ = ln(A(t)/A(t+T)) = β·T.' },
    ],
    problems: [
      {
        variants: [[20, 4], [50, 10], [100, 2], [40, 8]],
        build: (i) => {
          const [A0, k] = [[20, 4], [50, 10], [100, 2], [40, 8]][i];
          const a = A0 / Math.exp(1);
          return {
            q: `So‘nuvchi tebranish boshlang‘ich amplitudasi A₀ = ${A0} sm. Relaksatsiya vaqti τ = 1/β = ${k} s o‘tganda amplituda (sm) taxminan qanchaga tushadi (e ≈ 2.72)?`,
            correct: Number(a.toFixed(2)),
            unit: 'sm',
            explain: `t = 1/β bo‘lganda A = A₀/e = ${A0} / 2.718 ≈ ${a.toFixed(2)} sm.`,
          };
        },
      },
      {
        variants: [[0.5, 2], [0.25, 4], [0.2, 5], [0.4, 2.5]],
        build: (i) => {
          const [beta, T] = [[0.5, 2], [0.25, 4], [0.2, 5], [0.4, 2.5]][i];
          const delta = beta * T;
          return {
            q: `So‘nish koeffitsiyenti β = ${beta} s⁻¹ va tebranish davri T = ${T} s bo‘lgan tizimning logarifmik dekrementi δ qancha?`,
            correct: delta,
            unit: '',
            explain: `δ = β · T = ${beta} · ${T} = ${delta}.`,
          };
        },
      },
    ],
  },
  {
    id: '3-3',
    code: '3.3',
    sectionId: 'sec-3',
    subsectionId: null,
    subsectionTitle: null,
    title: "Mexanik to'lqinlar",
    subtitle: "Bo'ylama va ko'ndalang to'lqinlar, to'lqin uzunligi, to'lqin tezligi, interferensiya va difraksiya.",
    theory: {
      overview:
        'Mexanik to‘lqin — elastik muhitda tebranishlarning fazoda vaqt o‘tishi bilan tarqalish jarayonidir. To‘lqin zarralarni ko‘chirmasdan, fazoda energiya va impulsni uzatadi. Zarralarning tebranish yo‘nalishi to‘lqin tarqalish yo‘nalishiga perpendikulyar bo‘lsa ko‘ndalang to‘lqin (qattiq jismlar va suyuqlik sirtida), parallel bo‘lsa bo‘ylama to‘lqin (barcha muhitlarda — qattiq, suyuq va gazlarda) deyiladi.\n\nTo‘lqin bir davr T ichida bosib o‘tadigan masofa to‘lqin uzunligi λ = v·T = v/ν bilan aniqlanadi. Bir xil chastotali va doimiy fazalar farqiga ega (kogerent) ikki to‘lqin qo‘shilganda fazo nuqtalarida amplitudaning kuchayishi yoki susayishi — interferensiya hosil bo‘ladi (kuchayish sharti: yo‘llar farqi Δd = kλ; susayish sharti: Δd = (2k+1)λ/2). To‘lqinlarning o‘lchamlari to‘lqin uzunligiga qiyoslanadigan to‘siqlarni aylanib o‘tishi difraksiya deyiladi (Gyuygens-Frenel tamoyili).',
      keyLaws: [
        { title: 'To‘lqin asosiy tenglamasi', text: 'v = λ · ν = λ / T — to‘lqin tezligi muhitning elastik xossalariga bog‘liq.' },
        { title: 'Kogerentlik va Interferensiya', text: 'Δd = kλ da konstruktiv (maksimal) interferensiya, Δd = (2k+1)λ/2 da destruktiv (minimal) interferensiya yuz beradi.' },
        { title: 'Difraksiya', text: 'To‘lqin uzunligi λ to‘siq yoki tirqish o‘lchamiga yaqin bo‘lganda to‘lqin soyaga og‘adi.' },
      ],
      formulas: [
        { latex: 'λ = v · T = v / ν', name: 'To‘lqin uzunligi', symbols: 'λ — to‘lqin uzunligi (m), v — faza tezligi (m/s), ν — chastota (Hz)' },
        { latex: 'y(x, t) = A · cos(ωt − kx)', name: 'Yuguruvchi garmonik to‘lqin tenglamasi', symbols: 'k = 2π/λ — to‘lqin soni (rad/m)' },
        { latex: 'Δd = k·λ  (max),   Δd = (k + ½)·λ  (min)', name: 'Interferensiya shartlari', symbols: 'Δd — yo‘llar farqi, k = 0, 1, 2...' },
      ],
      constants: [
        { name: 'To‘lqin soni ta’rifi', symbol: 'k', value: '2π / λ', unit: 'm⁻¹' },
      ],
      applications: [
        'Seysmologiyada bo‘ylama (P) va ko‘ndalang (S) to‘lqinlar farqi orqali Yer yadrosi suyuqligini va zilzila epitsentrini aniqlash.',
        'Suv to‘lqinlari energiyasi hamda akustik va radioantennalarda interferension yo‘naltirish.',
      ],
      calculator: {
        title: 'To‘lqin uzunligi va interferensiya kalkulyatori',
        formulaDisplay: 'λ = v / ν,  k = Δd / λ',
        inputs: [
          { key: 'v', label: 'To‘lqin tezligi v', symbol: 'v', unit: 'm/s', min: 1, max: 6000, step: 10, default: 340 },
          { key: 'nu', label: 'Chastota ν', symbol: 'ν', unit: 'Hz', min: 1, max: 2000, step: 10, default: 170 },
          { key: 'dd', label: 'Yo‘llar farqi Δd', symbol: 'Δd', unit: 'm', min: 0, max: 20, step: 0.5, default: 4.0 },
        ],
        compute: (v) => {
          const lam = v.v / v.nu;
          const k = v.dd / lam;
          const frac = Math.abs(k - Math.round(k));
          const state = frac < 0.15 ? 'Kuchayish (Maksimum)' : Math.abs(frac - 0.5) < 0.15 ? 'Susayish (Minimum)' : 'Oraliq holat';
          return {
            value: lam.toFixed(2),
            unit: 'm',
            summary: `To‘lqin uzunligi λ = ${lam.toFixed(2)} m. Δd/λ = ${k.toFixed(2)} → ${state}.`,
          };
        },
      },
    },
    simulation: {
      title: 'Interaktiv To‘lqinlar, Interferensiya va Difraksiya Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Games__InteractiveWave.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'To‘lqin amplitudasi, chastotasi va uzunligini o‘zgartirib, yuguruvchi va turg‘un to‘lqinlarni hamda interferensiyani kuzating.',
      alternateSims: [
        { label: 'Interaktiv To‘lqin Moduli', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__InteractiveWave.html' },
        { label: 'To‘lqin tushunchalari (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Understanding_Waves.html' },
        { label: 'To‘lqin interferensiyasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Interference.html' },
      ],
      parametric: {
        mode: 'wave_interference',
        title: 'Bo‘ylama/Ko‘ndalang To‘lqin va Ikki Manba Interferensiyasi Simulyatori',
        description: 'To‘lqin uzunligi λ, chastota ν va ikki manba orasidagi fazalar farqini sozlab, superpozitsiya va tugunlarni kuzating.',
        controls: [
          { key: 'amp', label: 'Amplituda A', unit: 'px', min: 10, max: 60, step: 2, value: 36 },
          { key: 'lambda', label: 'To‘lqin uzunligi λ', unit: 'm', min: 0.5, max: 4, step: 0.1, value: 1.5 },
          { key: 'phase', label: '2-manba fazasi Δφ', unit: '°', min: 0, max: 360, step: 15, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Gazlar va suyuqliklar ichida faqat qanday mexanik to‘lqinlar tarqalishi mumkin?', options: ['Bo‘ylama to‘lqinlar', 'Faqat ko‘ndalang to‘lqinlar', 'Faqat elektromagnit to‘lqinlar', 'Hech qanday to‘lqin tarqalmaydi'], answer: 0, explain: 'Gaz va suyuqliklarda siljish elastikligi bo‘lmagani uchun ichida faqat siqilish-cho‘zilish (bo‘ylama) to‘lqinlar tarqaladi.' },
      { q: 'Tezligi 340 m/s va chastotasi 170 Hz bo‘lgan to‘lqinning uzunligi λ qancha?', options: ['2 m', '0.5 m', '510 m', '170 m'], answer: 0, explain: 'λ = v / ν = 340 / 170 = 2 m.' },
      { q: 'Kogerent to‘lqinlarning yo‘llar farqi to‘lqin uzunligining butun soniga (Δd = kλ) teng bo‘lgan nuqtada nima kuzatiladi?', options: ['Interferension maksimum (kuchayish)', 'Interferension minimum (so‘nish)', 'Difraksiya yo‘qolishi', 'Chastotaning nolga tushishi'], answer: 0, explain: 'Ikki to‘lqin bir fazada uchrashib amplituda ikki baravar ortadi.' },
      { q: 'Mexanik to‘lqin bir muhitdan ikkinchi muhitga o‘tganda uning qaysi kattaligi O‘ZGARMAYDI?', options: ['Chastotasi (ν)', 'Tezligi (v)', 'To‘lqin uzunligi (λ)', 'Yo‘nalishi'], answer: 0, explain: 'Chastota manba tomonidan belgilanadi va muhit o‘zgarganda saqlanadi; tezlik va λ esa o‘zgaradi.' },
      { q: 'To‘lqinlarning to‘siq orqasiga o‘tish (aylanib o‘tish) hodisasi nima deb ataladi?', options: ['Difraksiya', 'Dispersiya', 'Polyarizatsiya', 'Rezonans'], answer: 0, explain: 'Difraksiya barcha to‘lqin jarayonlariga xos fundamental xossadir.' },
      { q: 'Turg‘un to‘lqinda qo‘shni ikki tugun (amplitudasi nol bo‘lgan nuqta) orasidagi masofa nimaga teng?', options: ['λ / 2', 'λ', '2λ', 'λ / 4'], answer: 0, explain: 'Qo‘shni tugunlar (yoki qorinlar) orasidagi masofa yarim to‘lqin uzunligiga teng.' },
      { q: 'Mexanik to‘lqin tarqalishida muhit zarralari bilan nima sodir bo‘ladi?', options: ['O‘z muvozanat vaziyati atrofida tebranadi, fazoda ko‘chmaydi', 'To‘lqin bilan birga cheksiz uzoqqa ketadi', 'Tebranmaydi', 'Yo‘qolib ketadi'], answer: 0, explain: 'To‘lqin moddani emas, energiya va harakat holatini uzatadi.' },
      { q: 'Ko‘ndalang to‘lqinda zarralarning tebranish yo‘nalishi to‘lqin tarqalish yo‘nalishiga nisbatan qanday bo‘ladi?', options: ['Perpendikulyar (90°)', 'Parallel (0°)', '45° burchak ostida', 'Teskari'], answer: 0, explain: 'Ko‘ndalang to‘lqin ta’rifiga ko‘ra tebranishlar tarqalish nuriga tik bo‘ladi.' },
    ],
    problems: [
      {
        variants: [[340, 85], [1500, 300], [5000, 1000], [600, 150]],
        build: (i) => {
          const [v, nu] = [[340, 85], [1500, 300], [5000, 1000], [600, 150]][i];
          const lam = v / nu;
          return {
            q: `Muhitda ${v} m/s tezlik bilan tarqalayotgan ${nu} Hz chastotali to‘lqinning uzunligini (m) toping.`,
            correct: lam,
            unit: 'm',
            explain: `λ = v / ν = ${v} / ${nu} = ${lam} m.`,
          };
        },
      },
      {
        variants: [[2, 50], [4, 25], [1.5, 40], [3, 100]],
        build: (i) => {
          const [lam, nu] = [[2, 50], [4, 25], [1.5, 40], [3, 100]][i];
          const v = lam * nu;
          return {
            q: `To‘lqin uzunligi ${lam} m va chastotasi ${nu} Hz bo‘lgan to‘lqinning tarqalish tezligi (m/s) qancha?`,
            correct: v,
            unit: 'm/s',
            explain: `v = λ · ν = ${lam} · ${nu} = ${v} m/s.`,
          };
        },
      },
    ],
  },
  {
    id: '3-4',
    code: '3.4',
    sectionId: 'sec-3',
    subsectionId: null,
    subsectionTitle: null,
    title: 'Akustika (Tovush)',
    subtitle: 'Tovush to‘lqinlari, balandlik, tembr, qattiqlik, aks-sado, ultratovush va infratovush, Dopler effekti.',
    theory: {
      overview:
        'Akustika — elastik muhitlarda tarqaluvchi tovush to‘lqinlarini o‘rganuvchi bo‘lim. Inson qulog‘i 16 Hz dan 20 000 Hz (20 kHz) gacha chastotali bo‘ylama to‘lqinlarni eshitadi. 16 Hz dan past tovushlar infratovush (zilzila, bo‘ronlar), 20 kHz dan yuqorisi esa ultratovush (exolokatsiya, UZI) deyiladi.\n\nTovushning fiziologik xossalari fizik kattaliklarga bog‘liq: tovush balandligi (toni) chastota ν bilan, qattiqligi intensivlik I (yoki amplituda kvadratiga) va desibel shkalasi L = 10·lg(I/I₀) bilan, tembri esa obertonlar (garmonikalar) tarkibi bilan belgilanadi. Havoda 20°C da tovush tezligi v ≈ 343 m/s, suvda ~1480 m/s, po‘latda ~5000 m/s. Dopler effektiga ko‘ra, manba va kuzatuvchi bir-biriga yaqinlashganda qabul qilinadigan chastota ortadi, uzoqlashganda kamayadi: ν\' = ν₀·(v ± v_k) / (v ∓ v_m).',
      keyLaws: [
        { title: 'Tovushning eshitilish diapazoni', text: 'Infratovush (< 16 Hz) | Eshitiladigan tovush (16 Hz – 20 kHz) | Ultratovush (> 20 kHz).' },
        { title: 'Tovush qattiqligi (Desibel shkalasi)', text: 'L = 10·lg(I/I₀) — intensivlik 10 marta ortsa, tovush darajasi 10 dB ga oshadi.' },
        { title: 'Dopler effekti', text: 'ν\' = ν₀·(v ± v_k)/(v ∓ v_m) — yaqinlashishda chastota ortadi (balandlashadi), uzoqlashishda pasayadi.' },
      ],
      formulas: [
        { latex: 'L = 10 · lg(I / I₀)', name: 'Tovush darajasi (dB)', symbols: 'I₀ = 10⁻¹² W/m² — eshitish bo‘sag‘asi' },
        { latex: 'S = (v · t) / 2', name: 'Exolokatsiya va aks-sado masofasi', symbols: 't — tovushning borib qaytish vaqti' },
        { latex: 'ν\' = ν₀ · (v + v_k) / (v − v_m)', name: 'Dopler effekti (yaqinlashishda)', symbols: 'v — tovush tezligi, v_k — kuzatuvchi, v_m — manba tezligi' },
      ],
      constants: [
        { name: 'Havoda tovush tezligi (20°C)', symbol: 'v_havo', value: '343', unit: 'm/s' },
        { name: 'Eshitish bo‘sag‘asi intensivligi', symbol: 'I₀', value: '10⁻¹²', unit: 'W/m²' },
      ],
      applications: [
        'Tibbiyotda ultratovush diagnostikasi (UZI) va dengiz tubini exolot yordamida o‘lchash.',
        'Dopler radarlari yordamida avtomobil tezligi va qon oqimi tezligini aniqlash.',
      ],
      calculator: {
        title: 'Dopler effekti va exolokatsiya kalkulyatori',
        formulaDisplay: 'ν\' = ν₀·(v_tov / (v_tov ∓ v_man)),  d = v_tov·t/2',
        inputs: [
          { key: 'nu0', label: 'Manba chastotasi ν₀', symbol: 'ν₀', unit: 'Hz', min: 100, max: 5000, step: 20, default: 600 },
          { key: 'vm', label: 'Manba tezligi (+yaqinlashish)', symbol: 'v_m', unit: 'm/s', min: -100, max: 100, step: 2, default: 34 },
          { key: 'echoT', label: 'Aks-sado qaytish vaqti t', symbol: 't', unit: 's', min: 0.1, max: 10, step: 0.1, default: 2.0 },
        ],
        compute: (v) => {
          const vs = 340;
          const nuObs = v.nu0 * (vs / (vs - v.vm));
          const dist = (vs * v.echoT) / 2;
          return {
            value: nuObs.toFixed(1),
            unit: 'Hz',
            summary: `Qabul qilinayotgan chastota ν' = ${nuObs.toFixed(1)} Hz. Exolokatsiya masofasi d = ${dist.toFixed(1)} m.`,
          };
        },
      },
    },
    simulation: {
      title: 'Akustika, Tovush Spektri va Dopler Effekti Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/AudioVisualizer.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: '3D audio spektri, chastota va garmonikalar amplitudasini interaktiv akustik muhitda kuzating.',
      alternateSims: [
        { label: '3D Akustika va Spektr', source: 'Effectuall 3D Lab', url: 'sims/effectuall/AudioVisualizer.html' },
        { label: 'Interaktiv Tovush To‘lqini', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__InteractiveWave.html' },
      ],
      parametric: {
        mode: 'doppler_acoustics',
        title: 'Dopler Effekti va Tovush Chastotasi Simulyatori',
        description: 'Harakatlanuvchi tovush manbasi tezligini o‘zgartirib, to‘lqin frontlarining siqilishi (yaqinlashishda ν\' > ν₀) va cho‘zilishini kuzating.',
        controls: [
          { key: 'vs', label: 'Manba tezligi v_m', unit: 'm/s', min: 0, max: 320, step: 10, value: 120 },
          { key: 'nu0', label: 'Asosiy chastota ν₀', unit: 'Hz', min: 200, max: 1200, step: 50, value: 500 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Inson qulog‘i qaysi chastota oralig‘idagi tovush to‘lqinlarini eshitadi?', options: ['16 Hz dan 20 000 Hz gacha', '0 Hz dan 100 Hz gacha', '20 kHz dan 1 MHz gacha', '1 Hz dan 16 Hz gacha'], answer: 0, explain: '16 Hz – 20 kHz akustik eshitish diapazonidir.' },
      { q: 'Tovushning balandligi (toni) qaysi fizik kattalikka bog‘liq?', options: ['Tebranish chastotasiga', 'Amplitudaga', 'Tovush tezligiga', 'Muhit bosimiga'], answer: 0, explain: 'Chastota katta bo‘lsa tovush ingichka (baland), kichik bo‘lsa yo‘g‘on (past) eshitiladi.' },
      { q: 'Nima uchun vakuumda tovush tarqalmaydi?', options: ['Tovush elastik muhit zarrachalari tebranishi orqali uzatiladi, vakuumda esa muhit yo‘q', 'Vakuumda chastota cheksiz', 'Vakuum yorug‘likni to‘sadi', 'Gravitatsiya nol'], answer: 0, explain: 'Mexanik to‘lqin tarqalishi uchun elastik muhit (gaz, suyuqlik yoki qattiq jism) shart.' },
      { q: 'Kema exoloti dengiz tubiga yuborgan ultratovush signali 4 sekunddan keyin qaytib keldi. Dengiz chuqurligi qancha (v = 1500 m/s)?', options: ['3000 m', '6000 m', '1500 m', '750 m'], answer: 0, explain: 'h = v·t / 2 = 1500 · 4 / 2 = 3000 m.' },
      { q: 'Tez yordam mashinasi sirena chalib kuzatuvchiga yaqinlashayotganda tovush chastotasi qanday tuyuladi?', options: ['Asl chastotasidan yuqoriroq (Dopler effekti)', 'Pastroq', 'O‘zgarmaydi', 'Eshitilmaydi'], answer: 0, explain: 'Yaqinlashganda to‘lqin frontlari siqilib, qabul qilinayotgan chastota ortadi.' },
      { q: 'Tovush tezligi qaysi muhitda eng katta bo‘ladi?', options: ['Qattiq jismlarda (masalan, po‘latda ~5000 m/s)', 'Havoda (~340 m/s)', 'Suvda (~1480 m/s)', 'Vakuumda'], answer: 0, explain: 'Qattiq jismlarning elastiklik moduli juda katta bo‘lgani uchun tovush eng tez tarqaladi.' },
      { q: 'Turli musiqa asboblarida bir xil notani (bir xil chastotani) ajrata olishimizga sabab bo‘luvchi xossa nima?', options: ['Tembr (obertonlar tarkibi)', 'Qattiqlik', 'Aks-sado', 'Dispersiya'], answer: 0, explain: 'Tembr asosiy tonga qo‘shilgan qo‘shimcha garmonikalar (obertonlar) spektriga bog‘liq.' },
      { q: 'Tovush intensivligi 100 marta ortganda tovush darajasi necha desibel (dB) ga ortadi?', options: ['20 dB', '10 dB', '100 dB', '2 dB'], answer: 0, explain: 'ΔL = 10·lg(100) = 10 · 2 = 20 dB.' },
    ],
    problems: [
      {
        variants: [[1500, 2], [1500, 6], [340, 4], [1480, 5]],
        build: (i) => {
          const [v, t] = [[1500, 2], [1500, 6], [340, 4], [1480, 5]][i];
          const d = (v * t) / 2;
          return {
            q: `Tovush tezligi ${v} m/s bo‘lgan muhitda yuborilgan signal to‘siqdan aks etib ${t} sekunddan so‘ng qaytib keldi. To‘siqgacha bo‘lgan masofani (m) toping.`,
            correct: d,
            unit: 'm',
            explain: `d = v·t/2 = ${v} · ${t} / 2 = ${d} m.`,
          };
        },
      },
      {
        variants: [[680, 340, 34], [510, 340, 17], [900, 340, 40], [340, 340, 68]],
        build: (i) => {
          const [nu, vs, vm] = [[680, 340, 34], [510, 340, 17], [900, 340, 40], [340, 340, 68]][i];
          const obs = Number((nu * (vs / (vs - vm))).toFixed(1));
          return {
            q: `Chastotasi ${nu} Hz sirena chalayotgan mashina qo‘zg‘almas kuzatuvchiga ${vm} m/s tezlikda yaqinlashmoqda (v_tov = ${vs} m/s). Qabul qilingan chastotani (Hz) toping.`,
            correct: obs,
            unit: 'Hz',
            explain: `ν' = ν₀·v/(v − v_m) = ${nu} · ${vs} / (${vs} − ${vm}) = ${obs} Hz.`,
          };
        },
      },
    ],
  },
];
