export const SEC2_CDE_TOPICS = [
  {
    id: '2C-1',
    code: '2C.1',
    sectionId: 'sec-2',
    subsectionId: '2C',
    subsectionTitle: 'C. Saqlanish Qonunlari',
    title: 'Impuls',
    subtitle: 'Jism impulsi, kuch impulsi, impulsning saqlanish qonuni, reaktiv harakat.',
    theory: {
      overview:
        'Jismning impulsi (harakat miqdori) p⃗ = m·v⃗ — jism massasi va tezligi ko‘paytmasiga teng vektor kattalik bo‘lib, SI birligi kg·m/s (yoki N·s). Tashqi kuch F⃗ ning Δt vaqt davomidagi ta’siri kuch impulsi J⃗ = F⃗·Δt deb ataladi. Nyutonning 2-qonuni impuls ko‘rinishida F⃗·Δt = Δp⃗ = m·v⃗ − m·v⃗₀ yoziladi.\n\nTashqi kuchlar ta’sir etmaydigan yoki ularning yig‘indisi nolga teng bo‘lgan yopiq (berk) tizimda barcha jismlar impulslarining vektor yig‘indisi o‘zgarmas qoladi: ∑p⃗ᵢ = const (Impulsning saqlanish qonuni). Bu fundamental qonun fazo birjinsliligi (simmetriyasi) natijasi bo‘lib, o‘q otar qurolning tepishi, kemalar va K. Sialkovskiy asoslagan reaktiv raketalar harakatini (Δv = u·ln(M₀/M)) boshqaradi.',
      keyLaws: [
        { title: 'Kuch impulsi teoremasi', text: 'Jism impulsining o‘zgarishi unga qo‘yilgan barcha kuchlarning impulsiga teng: Δp⃗ = F⃗_o‘rt · Δt.' },
        { title: 'Impulsning saqlanish qonuni', text: 'Berk tizimda jismlar orasida qanday ichki kuchlar (portlash, to‘qnashuv) ta’sir etmasin, umumiy impuls saqlanadi: m₁v⃗₁ + m₂v⃗₂ = m₁v⃗₁\' + m₂v⃗₂\'.' },
        { title: 'Reaktiv harakat (Sialkovskiy formulasi)', text: 'Raketa o‘zidan gaz oqimini u nisbiy tezlikda chiqarib tashlashi natijasida qarama-qarshi tomonga tezlanish oladi.' },
      ],
      formulas: [
        { latex: 'p⃗ = m · v⃗', name: 'Jism impulsi', symbols: 'p — impuls (kg·m/s), m — massa (kg), v — tezlik (m/s)' },
        { latex: 'F⃗ · Δt = m·v⃗ − m·v⃗₀', name: 'Kuch impulsi va impuls o‘zgarishi', symbols: 'F — kuch (N), Δt — ta’sir vaqti (s)' },
        { latex: 'm₁v⃗₁ + m₂v⃗₂ = const', name: 'Impuls saqlanish qonuni', symbols: 'Berk tizim uchun vektor yig‘indi' },
        { latex: 'v = u · ln(M₀ / M)', name: 'Sialkovskiy raketa tenglamasi', symbols: 'u — gaz chiqish tezligi, M₀/M — boshlang‘ich va oxirgi massa' },
      ],
      constants: [
        { name: 'Impuls SI birligi', symbol: 'kg·m/s', value: '1 kg·m/s = 1 N·s', unit: 'N·s' },
      ],
      applications: [
        'Kosmik raketalar va reaktiv samolyotlarni loyihalash.',
        'Avtomobil to‘qnashuvlarida bamper va havo yostiqchalari orqali Δt ni uzaytirib, zarba kuchini F = Δp/Δt kamaytirish.',
      ],
      calculator: {
        title: 'Impuls saqlanishi va reaktiv tezlik kalkulyatori',
        formulaDisplay: 'v_bir = (m₁v₁ + m₂v₂)/(m₁ + m₂),  F_zarba = Δp / Δt',
        inputs: [
          { key: 'm1', label: '1-jism massasi m₁', symbol: 'm₁', unit: 'kg', min: 1, max: 500, step: 1, default: 10 },
          { key: 'v1', label: '1-jism tezligi v₁', symbol: 'v₁', unit: 'm/s', min: -50, max: 50, step: 1, default: 12 },
          { key: 'm2', label: '2-jism massasi m₂', symbol: 'm₂', unit: 'kg', min: 1, max: 500, step: 1, default: 20 },
          { key: 'v2', label: '2-jism tezligi v₂', symbol: 'v₂', unit: 'm/s', min: -50, max: 50, step: 1, default: 0 },
        ],
        compute: (v) => {
          const pTot = v.m1 * v.v1 + v.m2 * v.v2;
          const vCom = pTot / (v.m1 + v.m2);
          return {
            value: pTot.toFixed(1),
            unit: 'kg·m/s',
            summary: `Tizimning to‘liq impulsi p = ${pTot.toFixed(1)} kg·m/s. Birlashgan holdagi tezlik v_um = ${vCom.toFixed(2)} m/s.`,
          };
        },
      },
    },
    simulation: {
      title: 'Impuls Saqlanishi va Domino Impuls Uzatish 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/conservationofmomentum__index.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Elastik, noelastik to‘qnashuvlar va portlash jarayonida impulsning saqlanishini interaktiv sinab ko‘ring.',
      alternateSims: [
        { label: 'Impuls saqlanishi laboratoriyasi', source: 'Effectuall 3D Lab', url: 'sims/effectuall/conservationofmomentum__index.html' },
        { label: 'Domino impuls zanjiri (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/domino.html' },
      ],
      parametric: {
        mode: 'momentum_rocket',
        title: 'Impuls va Reaktiv Harakat Simulyatori',
        description: 'Ikki aravachaning massasi va tezligini sozlab, o‘zaro ta’sir vaqtida umumiy impulsning o‘zgarmasligini kuzating.',
        controls: [
          { key: 'm1', label: '1-jism massasi m₁', unit: 'kg', min: 1, max: 20, step: 1, value: 4 },
          { key: 'v1', label: '1-jism tezligi v₁', unit: 'm/s', min: 1, max: 15, step: 0.5, value: 8 },
          { key: 'm2', label: '2-jism massasi m₂', unit: 'kg', min: 1, max: 20, step: 1, value: 6 },
          { key: 'v2', label: '2-jism tezligi v₂', unit: 'm/s', min: -10, max: 10, step: 0.5, value: -2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Massasi 3 kg jism 8 m/s tezlikda harakatlanmoqda. Uning impulsi qanchaga teng?', options: ['24 kg·m/s', '11 kg·m/s', '2.67 kg·m/s', '96 kg·m/s'], answer: 0, explain: 'p = m · v = 3 · 8 = 24 kg·m/s.' },
      { q: '10 N kuch jismga 4 s davomida ta’sir qilsa, jism impulsi qanchaga o‘zgaradi?', options: ['40 N·s', '2.5 N·s', '14 N·s', '160 N·s'], answer: 0, explain: 'Δp = F · Δt = 10 · 4 = 40 N·s.' },
      { q: 'Impulsning saqlanish qonuni qanday sharoitda o‘rinli?', options: ['Tashqi kuchlar yig‘indisi nol bo‘lgan berk (yopiq) tizimda', 'Faqat ishqalanish katta bo‘lganda', 'Faqat elastik kuchlar mavjud bo‘lganda', 'Faqat bir jism uchun'], answer: 0, explain: '∑F_tashqi = 0 bo‘lganda dp⃗/dt = 0 va p⃗_um = const.' },
      { q: 'Tinch turgan miltiqdan 10 g o‘q 600 m/s tezlikda otilib chiqdi. Miltiq massasi 3 kg bo‘lsa, uning tepish tezligi qancha?', options: ['2 m/s', '6 m/s', '0.2 m/s', '1.8 m/s'], answer: 0, explain: 'm₁v₁ = m₂v₂ => 0.01 · 600 = 3 · v₂ => v₂ = 6 / 3 = 2 m/s.' },
      { q: 'Nima uchun balandlikdan sakraganda tizzalarni bukish shikastlanishni kamaytiradi?', options: ['To‘xtash vaqti Δt ortib, zarba kuchi F = Δp/Δt kamayadi', 'Impuls nolga aylanadi', 'Massa kamayadi', 'Gravitatsiya o‘zgaradi'], answer: 0, explain: 'Δp o‘zgarmas bo‘lganda Δt ni oshirish F_o‘rt = Δp/Δt ni kamaytiradi.' },
      { q: 'Vakuumda raketa qanday harakatlanadi?', options: ['Yoqilg‘i yonishidan hosil bo‘lgan gazlarni orqaga otib, impuls saqlanishi hisobiga', 'Havoga itarilib', 'Quyosh shamoli bilan tortilib', 'Vakuumda harakatlana olmaydi'], answer: 0, explain: 'Reaktiv harakat tashqi muhitga tayanmaydi, u berk tizim impulsining saqlanishiga asoslanadi.' },
      { q: 'Jism impulsi 2 marta, tezligi 2 marta oshirilsa, kinetik energiyasi qanday o‘zgaradi?', options: ['E_k = p·v/2 bo‘lgani uchun 4 marta ortadi', '2 marta ortadi', 'O‘zgarmaydi', '8 marta ortadi'], answer: 0, explain: 'p = mv oshishi tezlik 2 marta oshganini bildiradi; E_k = mv²/2 -> 4 marta ortadi.' },
      { q: 'Qaysi fizik kattalik impuls bilan bir xil o‘lchov birligiga ega?', options: ['Kuch impulsi (N·s)', 'Energiya (J)', 'Quvvat (W)', 'Kuch momenti (N·m)'], answer: 0, explain: '1 N·s = 1 (kg·m/s²)·s = 1 kg·m/s.' },
    ],
    problems: [
      {
        variants: [[5, 6], [4, 12], [10, 3], [8, 7]],
        build: (i) => {
          const [m, v] = [[5, 6], [4, 12], [10, 3], [8, 7]][i];
          return {
            q: `Massasi ${m} kg jism ${v} m/s tezlikda harakatlanmoqda. Jismning impulsini (kg·m/s) toping.`,
            correct: m * v,
            unit: 'kg·m/s',
            explain: `p = m·v = ${m} · ${v} = ${m * v} kg·m/s.`,
          };
        },
      },
      {
        variants: [[20, 5], [50, 3], [15, 4], [40, 2.5]],
        build: (i) => {
          const [F, t] = [[20, 5], [50, 3], [15, 4], [40, 2.5]][i];
          return {
            q: `Jismga ${F} N o‘zgarmas kuch ${t} s davomida ta’sir ko‘rsatdi. Kuch impulsi (N·s) qanchaga teng?`,
            correct: F * t,
            unit: 'N·s',
            explain: `J = F·Δt = ${F} · ${t} = ${F * t} N·s.`,
          };
        },
      },
    ],
  },
  {
    id: '2C-2',
    code: '2C.2',
    sectionId: 'sec-2',
    subsectionId: '2C',
    subsectionTitle: 'C. Saqlanish Qonunlari',
    title: 'Ish, quvvat va energiya',
    subtitle: 'Mexanik ish, quvvat, FIK (foydali ish koeffitsiyenti), kinetik va potensial energiya, mexanik energiyaning saqlanish qonuni.',
    theory: {
      overview:
        'O‘zgarmas F⃗ kuch jismni s⃗ masofaga ko‘chirganda bajargan mexanik ishi A = F·s·cosα (Joul, 1 J = 1 N·m) bilan o‘lchanadi. Ishning bajarilish tezligi quvvat N = A/t = F·v (Vatt, 1 W = 1 J/s) deyiladi. Har qanday real mexanizmning samaradorligi foydali ish koeffitsiyenti η = (A_foyd / A_um)·100% bilan baholanadi.\n\nEnergiya — tizimning ish bajarish qobiliyati o‘lchovi. Harakatdagi jism kinetik energiyaga E_k = m·v²/2, o‘zaro ta’sirlashuvchi jismlar esa potensial energiyaga ega (gravitatsion E_p = m·g·h, elastik deformatsiya E_p = k·Δx²/2). Faqat konservativ (og‘irlik, elastiklik) kuchlar ta’sir etuvchi yopiq tizimda to‘la mexanik energiya o‘zgarmaydi: E_k + E_p = const. Ishqalanish mavjud bo‘lganda mexanik energiyaning bir qismi issiqlikka aylanadi (ΔE_mex = A_ishq).',
      keyLaws: [
        { title: 'Kinetik energiya haqidagi teorema', text: 'Jismga qo‘yilgan barcha kuchlarning bajargan natijaviy ishi uning kinetik energiyasi o‘zgarishiga teng: A_nat = ΔE_k = mv₂²/2 − mv₁²/2.' },
        { title: 'Mexanik energiyaning saqlanish qonuni', text: 'Dissipativ (ishqalanish) kuchlar bo‘lmaganda E = E_k + E_p = const.' },
        { title: 'Foydali ish koeffitsiyenti (FIK)', text: 'Energiya saqlanish qonuniga ko‘ra real mashinada η = A_foyd / A_sarf < 100%.' },
      ],
      formulas: [
        { latex: 'A = F · s · cosα', name: 'Mexanik ish', symbols: 'F — kuch (N), s — ko‘chish (m), α — kuch va ko‘chish orasidagi burchak' },
        { latex: 'P = A / t = F · v', name: 'Mexanik quvvat', symbols: 'P — quvvat (W), v — tezlik (m/s)' },
        { latex: 'E_k = (m · v²) / 2,   E_p = m·g·h', name: 'Kinetik va potensial energiya', symbols: 'h — balandlik (m)' },
        { latex: 'E_el = (k · Δx²) / 2', name: 'Deformatsiyalangan prujina energiyasi', symbols: 'k — bikrlik (N/m)' },
      ],
      constants: [
        { name: 'Ish va energiya SI birligi', symbol: 'J', value: '1 J = 1 N·m', unit: 'Joul' },
        { name: 'Quvvat SI birligi', symbol: 'W', value: '1 W = 1 J/s', unit: 'Vatt' },
      ],
      applications: [
        'Gidroelektr stansiyalarida (GES) suvning potensial energiyasini elektr energiyasiga aylantirish FIK ini hisoblash.',
        'Transport vositalari dvigatellari quvvati va rekuperativ tormozlash energiyasini loyihalash.',
      ],
      calculator: {
        title: 'Ish, Quvvat, FIK va Mexanik Energiya kalkulyatori',
        formulaDisplay: 'E_k = ½mv²,  E_p = mgh,  P = A/t',
        inputs: [
          { key: 'm', label: 'Massa m', symbol: 'm', unit: 'kg', min: 1, max: 500, step: 1, default: 10 },
          { key: 'v', label: 'Tezlik v', symbol: 'v', unit: 'm/s', min: 0, max: 50, step: 1, default: 8 },
          { key: 'h', label: 'Balandlik h', symbol: 'h', unit: 'm', min: 0, max: 100, step: 1, default: 5 },
          { key: 't', label: 'Bajarish vaqti t', symbol: 't', unit: 's', min: 1, max: 100, step: 1, default: 4 },
        ],
        compute: (v) => {
          const ek = 0.5 * v.m * v.v * v.v;
          const ep = v.m * 9.81 * v.h;
          const etot = ek + ep;
          const P = etot / v.t;
          return {
            value: etot.toFixed(1),
            unit: 'J',
            summary: `E_k = ${ek.toFixed(1)} J, E_p = ${ep.toFixed(1)} J, To‘la E = ${etot.toFixed(1)} J, O‘rtacha quvvat P = ${P.toFixed(1)} W.`,
          };
        },
      },
    },
    simulation: {
      title: 'Mexanik Ish, Quvvat va Energiya Saqlanishi Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Simple_Pendulum.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Kuch ta’sirida bajarilgan mexanik ish, kinetik va potensial energiyalar almashinuvini tajribada tekshiring.',
      alternateSims: [
        { label: 'Energiya almashinuvi (Mayatnik 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Simple_Pendulum.html' },
        { label: 'Prujina potensial energiyasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Spring_Force.html' },
      ],
      parametric: {
        mode: 'work_energy',
        title: 'Potensial va Kinetik Energiya Konversiyasi Simulyatori',
        description: 'G‘ildirak/sharcha qiyalikdan tushganda E_p va E_k energiyalarning qanday almashishini va ishqalanish ta’sirini real vaqtda kuzating.',
        controls: [
          { key: 'm', label: 'Massa m', unit: 'kg', min: 1, max: 20, step: 1, value: 4 },
          { key: 'h', label: 'Boshlang‘ich balandlik h', unit: 'm', min: 2, max: 20, step: 1, value: 12 },
          { key: 'loss', label: 'Ishqalanish yo‘qotishi', unit: '%', min: 0, max: 40, step: 5, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Jismga ta’sir etuvchi kuch ko‘chishga perpendikulyar (α = 90°) bo‘lsa, bajarilgan ish nimaga teng?', options: ['0 J', 'F·s', '−F·s', 'F/s'], answer: 0, explain: 'A = F·s·cos(90°) = 0 J (masalan, aylana bo‘ylab harakatda markazga intilma kuch ish bajarmaydi).' },
      { q: 'Massasi 4 kg bo‘lgan jism 5 m/s tezlikda harakatlanmoqda. Uning kinetik energiyasi qancha?', options: ['50 J', '20 J', '100 J', '25 J'], answer: 0, explain: 'E_k = m·v²/2 = 4 · 25 / 2 = 50 J.' },
      { q: 'Kran 500 kg yukni 10 s ichida 12 m balandlikka ko‘tardi. Kranning foydali quvvati qancha (g = 10 m/s²)?', options: ['6000 W (6 kW)', '600 W', '60 kW', '5000 W'], answer: 0, explain: 'N = A/t = (mgh)/t = (500 · 10 · 12) / 10 = 6000 W.' },
      { q: 'Bikrligi 400 N/m prujina 0.1 m ga cho‘zilsa, undagi potensial energiya qancha bo‘ladi?', options: ['2 J', '40 J', '4 J', '0.2 J'], answer: 0, explain: 'E_p = k·Δx²/2 = 400 · 0.01 / 2 = 2 J.' },
      { q: 'Qiya tekislik yordamida 1000 J foydali ish bajarish uchun 1250 J ish sarflandi. FIK (%) qancha?', options: ['80%', '75%', '90%', '25%'], answer: 0, explain: 'η = (1000 / 1250) · 100% = 80%.' },
      { q: 'Erkin tushayotgan jism balandligi 2 marta kamayganda (qarshiliksiz) uning potensial energiyasi qanday o‘zgaradi?', options: ['2 marta kamayadi va shuncha qismi kinetik energiyaga o‘tadi', '4 marta kamayadi', 'O‘zgarmaydi', '2 marta ortadi'], answer: 0, explain: 'E_p = m·g·h balandlikka chiziqli bog‘liq, yo‘qolgan E_p kinetik energiyaga aylanadi.' },
      { q: '1 kilovatt·soat (kW·h) energiya necha Joulga teng?', options: ['3.6 · 10⁶ J', '1000 J', '3600 J', '6.0 · 10⁵ J'], answer: 0, explain: '1000 W · 3600 s = 3,600,000 J = 3.6 MJ.' },
      { q: 'Konservativ kuchlarga qaysi kuchlar kiradi?', options: ['Gravitatsiya va elastiklik kuchlari', 'Sirpanish ishqalanish kuchi', 'Havo qarshilik kuchi', 'Qovushqoqlik kuchi'], answer: 0, explain: 'Konservativ kuchning bajargan ishi trayektoriya shakliga bog‘liq emas (yopiq konturda 0).' },
    ],
    problems: [
      {
        variants: [[6, 10], [8, 5], [4, 15], [10, 4]],
        build: (i) => {
          const [m, v] = [[6, 10], [8, 5], [4, 15], [10, 4]][i];
          const ek = 0.5 * m * v * v;
          return {
            q: `Massasi ${m} kg va tezligi ${v} m/s bo‘lgan jismning kinetik energiyasini (J) toping.`,
            correct: ek,
            unit: 'J',
            explain: `E_k = m·v²/2 = ${m} · ${v}² / 2 = ${ek} J.`,
          };
        },
      },
      {
        variants: [[200, 15, 5], [400, 10, 8], [150, 20, 6], [500, 12, 10]],
        build: (i) => {
          const [m, h, t] = [[200, 15, 5], [400, 10, 8], [150, 20, 6], [500, 12, 10]][i];
          const P = (m * 10 * h) / t;
          return {
            q: `Elektrodvigatel ${m} kg yukni ${t} s ichida ${h} m balandlikka tekis ko‘tardi. Quvvatni (W) hisoblang (g = 10 m/s²).`,
            correct: P,
            unit: 'W',
            explain: `P = (m·g·h) / t = (${m} · 10 · ${h}) / ${t} = ${P} W.`,
          };
        },
      },
    ],
  },
  {
    id: '2C-3',
    code: '2C.3',
    sectionId: 'sec-2',
    subsectionId: '2C',
    subsectionTitle: 'C. Saqlanish Qonunlari',
    title: "To'qnashuvlar",
    subtitle: 'Mutlaq elastik va mutlaq noelastik to‘qnashuvlar.',
    theory: {
      overview:
        'To‘qnashuv — ikki yoki undan ortiq jismning juda qisqa Δt vaqt oralig‘ida katta ichki kuchlar bilan o‘zaro ta’sirlashuvidir. Barcha to‘qnashuvlarda tashqi kuchlar impulsini e’tiborga olmaslik mumkin bo‘lgani uchun umumiy impuls saqlanadi: m₁v⃗₁ + m₂v⃗₂ = m₁v⃗₁\' + m₂v⃗₂\'.\n\nMutlaq elastik to‘qnashuvda (tiklanish koeffitsiyenti e = 1) tizimning ham impulsi, ham to‘la kinetik energiyasi saqlanadi; bilyard sharchalari to‘qnashuvi bunga yaqin misoldir. Markaziy elastik to‘qnashuvda bir xil massali sharchalar tezliklari bilan almashinadi. Mutlaq noelastik to‘qnashuvda (e = 0) jismlar to‘qnashgandan so‘ng birgalikda bitta umumiy v_um = (m₁v₁ + m₂v₂)/(m₁ + m₂) tezlik bilan harakatlanadi, kinetik energiyaning bir qismi esa ichki (issiqlik va deformatsiya) energiyaga aylanadi: ΔQ = ½·[m₁m₂/(m₁+m₂)]·(v₁ − v₂)².',
      keyLaws: [
        { title: 'Mutlaq elastik to‘qnashuv (e = 1)', text: 'Impuls ham, kinetik energiya ham 100% saqlanadi: ∑p⃗ = const va ∑E_k = const.' },
        { title: 'Mutlaq noelastik to‘qnashuv (e = 0)', text: 'Jismlar yopishib bir butun bo‘lib qoladi; impuls saqlanadi, lekin kinetik energiya qisman issiqlikka sarflanadi.' },
        { title: 'Nyuton tiklanish koeffitsiyenti (e)', text: 'e = |v₂\' − v₁\'| / |v₁ − v₂|; oraliq real to‘qnashuvlar 0 < e < 1 ga ega.' },
      ],
      formulas: [
        { latex: 'v_um = (m₁v₁ + m₂v₂) / (m₁ + m₂)', name: 'Noelastik to‘qnashuvdan keyingi tezlik', symbols: 'm₁, m₂ — massalar, v₁, v₂ — boshlang‘ich tezliklar' },
        { latex: 'ΔQ = ½ · [m₁m₂ / (m₁ + m₂)] · (v₁ − v₂)²', name: 'Noelastik to‘qnashuvdagi issiqlik yo‘qotilishi', symbols: 'ΔQ — ajralgan issiqlik/deformatsiya energiyasi (J)' },
        { latex: 'v₁\' = [(m₁−m₂)v₁ + 2m₂v₂] / (m₁+m₂)', name: 'Elastik markaziy to‘qnashuv tezligi', symbols: '1-jismning to‘qnashuvdan keyingi tezligi' },
      ],
      constants: [
        { name: 'Mutlaq elastik koeffitsiyent', symbol: 'e_el', value: '1', unit: 'o‘lchamsiz' },
        { name: 'Mutlaq noelastik koeffitsiyent', symbol: 'e_noel', value: '0', unit: 'o‘lchamsiz' },
      ],
      applications: [
        'Yadro fizikasida neytronlarni sekinlashtirish (eng samarali sekinlashish teng massali vodorod yadrolari bilan elastik to‘qnashganda yuz beradi).',
        'Yo‘l-transport hodisalarini ekspertiza qilishda avtomobillar massasi va tezligini tiklash.',
      ],
      calculator: {
        title: 'Elastik va Noelastik to‘qnashuvlar kalkulyatori',
        formulaDisplay: 'p = const,  e ∈ [0; 1]',
        inputs: [
          { key: 'm1', label: '1-shar massasi m₁', symbol: 'm₁', unit: 'kg', min: 1, max: 100, step: 1, default: 4 },
          { key: 'v1', label: '1-shar tezligi v₁', symbol: 'v₁', unit: 'm/s', min: -30, max: 30, step: 1, default: 10 },
          { key: 'm2', label: '2-shar massasi m₂', symbol: 'm₂', unit: 'kg', min: 1, max: 100, step: 1, default: 6 },
          { key: 'v2', label: '2-shar tezligi v₂', symbol: 'v₂', unit: 'm/s', min: -30, max: 30, step: 1, default: 0 },
          { key: 'e', label: 'Tiklanish koef. e (1=elastik, 0=noelastik)', symbol: 'e', unit: '', min: 0, max: 1, step: 0.1, default: 1 },
        ],
        compute: (v) => {
          const mSum = v.m1 + v.m2;
          const v1p = (v.m1 * v.v1 + v.m2 * v.v2 + v.m2 * v.e * (v.v2 - v.v1)) / mSum;
          const v2p = (v.m1 * v.v1 + v.m2 * v.v2 + v.m1 * v.e * (v.v1 - v.v2)) / mSum;
          const dQ = 0.5 * ((v.m1 * v.m2) / mSum) * Math.pow(v.v1 - v.v2, 2) * (1 - v.e * v.e);
          return {
            value: dQ.toFixed(1),
            unit: 'J',
            summary: `To‘qnashuvdan keyin: v₁' = ${v1p.toFixed(2)} m/s, v₂' = ${v2p.toFixed(2)} m/s. Issiqlikka aylangan energiya ΔQ = ${dQ.toFixed(1)} J.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Sharchalar To‘qnashuvi va Impuls Saqlanishi Laboratoriyasi',
      openSourceUrl: 'sims/cx20/balls.html',
      openSourceSource: 'cx20 Cannon-es 3D',
      openSourceNote: 'Tiklanish koeffitsiyenti e ni 0 dan 1 gacha o‘zgartirib, 3D sharchalarning noelastik va elastik to‘qnashuvlarini kuzating.',
      alternateSims: [
        { label: '3D Elastik To‘qnashuvlar (Cannon-es)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/balls.html' },
        { label: 'Ko‘p jismli to‘qnashuvlar (Marbles 3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/marbles.html' },
        { label: 'Elastik va Noelastik To‘qnashuv Moduli', source: 'Effectuall 3D Lab', url: 'sims/effectuall/conservationofmomentum__index.html' },
      ],
      parametric: {
        mode: 'collisions',
        title: '1D Elastik va Noelastik To‘qnashuvlar Simulyatori',
        description: 'm₁, m₂ massalar, v₁, v₂ tezliklar va tiklanish koeffitsiyenti e ni boshqarib, energiya va impuls diagrammalarini kuzating.',
        controls: [
          { key: 'm1', label: '1-shar massasi m₁', unit: 'kg', min: 1, max: 15, step: 1, value: 5 },
          { key: 'v1', label: '1-shar tezligi v₁', unit: 'm/s', min: 1, max: 12, step: 0.5, value: 8 },
          { key: 'm2', label: '2-shar massasi m₂', unit: 'kg', min: 1, max: 15, step: 1, value: 5 },
          { key: 'e', label: 'Tiklanish koef. e', unit: '', min: 0, max: 1, step: 0.1, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Mutlaq elastik to‘qnashuvda qaysi fizik kattaliklar saqlanadi?', options: ['Ham impuls, ham mexanik (kinetik) energiya', 'Faqat impuls', 'Faqat kinetik energiya', 'Hech qaysisi saqlanmaydi'], answer: 0, explain: 'Mutlaq elastik to‘qnashuvda energiya issiqlikka aylanmaydi, shuning uchun p va E_k saqlanadi.' },
      { q: 'Bir xil massali ikki shar markaziy mutlaq elastik to‘qnashdi (2-shar tinch turgan edi). To‘qnashuvdan keyin ular qanday harakatlanadi?', options: ['1-shar to‘xtaydi, 2-shar uning tezligi bilan harakatlanadi', 'Ikkalasi yopishib birga ketadi', 'Ikkalasi orqaga qaytadi', 'Tezliklari 2 marta ortadi'], answer: 0, explain: 'm₁ = m₂ da v₁\' = v₂ = 0 va v₂\' = v₁ (tezlik almashinuvi).' },
      { q: 'Massasi 2 kg va tezligi 6 m/s bo‘lgan shar tinch turgan 4 kg shar bilan mutlaq noelastik to‘qnashdi. Umumiy tezlik qancha?', options: ['2 m/s', '3 m/s', '6 m/s', '1.5 m/s'], answer: 0, explain: 'v_um = (2·6 + 4·0) / (2+4) = 12 / 6 = 2 m/s.' },
      { q: 'Mutlaq noelastik to‘qnashuvda tiklanish koeffitsiyenti e nimaga teng?', options: ['0', '1', '0.5', '∞'], answer: 0, explain: 'To‘qnashuvdan keyin nisbiy tezlik nolga teng bo‘lgani uchun e = 0.' },
      { q: 'Qaysi to‘qnashuvda kinetik energiyaning bir qismi ichki energiyaga (issiqlikka) aylanadi?', options: ['Noelastik to‘qnashuvda', 'Faqat mutlaq elastik to‘qnashuvda', 'Hech qanday to‘qnashuvda', 'Faqat vakuumdagi elastik zarbada'], answer: 0, explain: 'Noelastik to‘qnashuvda plastik deformatsiya tufayli mexanik energiya yo‘qotiladi.' },
      { q: 'Bilyard sharlari orasidagi to‘qnashuv qaysi modelga yaqin?', options: ['Mutlaq elastik to‘qnashuvga', 'Mutlaq noelastik to‘qnashuvga', 'Portlashga', 'Diffuziyaga'], answer: 0, explain: 'Qattiq po‘lat yoki bilyard sharlari uchun tiklanish koeffitsiyenti e ≈ 0.95–0.98.' },
      { q: 'Massalari bir xil (2 kg dan) bo‘lgan ikki plastilin shar bir-biriga qarab 3 m/s tezlikda kelib yopishib qoldi. Qancha issiqlik ajraldi?', options: ['18 J', '9 J', '36 J', '0 J'], answer: 0, explain: 'Dastlabki E_k = 2 · (½·2·9) = 18 J; oxirgi tezlik 0 => barcha 18 J issiqlikka aylanadi.' },
      { q: 'O‘zaro to‘qnashish vaqtida jismlarning ichki kuchlari tizimning to‘liq impulsini o‘zgartira oladimi?', options: ['Yo‘q, Nyutonning 3-qonuniga ko‘ra ichki kuchlar impulsi o‘zaro qisqaradi', 'Ha, doimo ikki marta oshiradi', 'Ha, noelastik to‘qnashuvda nolga tushiradi', 'Faqat katta tezliklarda'], answer: 0, explain: 'Ichki kuchlar F₁₂ + F₂₁ = 0 bo‘lgani uchun ular umumiy impulsni o‘zgartirmaydi.' },
    ],
    problems: [
      {
        variants: [[3, 10, 2, 0], [4, 15, 6, 0], [5, 8, 3, 0], [2, 12, 4, 0]],
        build: (i) => {
          const [m1, v1, m2, v2] = [[3, 10, 2, 0], [4, 15, 6, 0], [5, 8, 3, 0], [2, 12, 4, 0]][i];
          const vu = (m1 * v1 + m2 * v2) / (m1 + m2);
          return {
            q: `Massasi ${m1} kg, tezligi ${v1} m/s bo‘lgan shar tinch turgan ${m2} kg shar bilan mutlaq noelastik to‘qnashdi. Birlashgan jismlarning tezligi (m/s) qancha?`,
            correct: vu,
            unit: 'm/s',
            explain: `v_um = (${m1}·${v1}) / (${m1}+${m2}) = ${vu} m/s.`,
          };
        },
      },
      {
        variants: [[2, 4, 2, 0], [4, 6, 4, 0], [2, 10, 2, 0], [4, 8, 4, 0]],
        build: (i) => {
          const [m1, v1, m2, v2] = [[2, 4, 2, 0], [4, 6, 4, 0], [2, 10, 2, 0], [4, 8, 4, 0]][i];
          const dq = 0.5 * ((m1 * m2) / (m1 + m2)) * (v1 - v2) ** 2;
          return {
            q: `${m1} kg massali shar ${v1} m/s tezlikda kelib, tinch turgan ${m2} kg sharga mutlaq noelastik urildi. Qancha mexanik energiya (J) issiqlikka aylandi?`,
            correct: dq,
            unit: 'J',
            explain: `ΔQ = ½·[m₁m₂/(m₁+m₂)]·(v₁−v₂)² = ${dq} J.`,
          };
        },
      },
    ],
  },
  {
    id: '2D-1',
    code: '2D.1',
    sectionId: 'sec-2',
    subsectionId: '2D',
    subsectionTitle: 'D. Statika va Qattiq Jism Mexanikasi',
    title: 'Muvozanat shartlari',
    subtitle: 'Kuch momenti, richag qoidasi, bloklar, qiya tekislik, oddiy mexanizmlar.',
    theory: {
      overview:
        'Statika qattiq jismlarning muvozanat shartlarini o‘rganadi. Qattiq jism to‘liq muvozanatda bo‘lishi uchun ikkita shart bir vaqtda bajarilishi kerak: 1) unga ta’sir etuvchi barcha kuchlarning vektor yig‘indisi nolga teng (∑F⃗ᵢ = 0 — ilgarilanma harakat yo‘q); 2) ixtiyoriy o‘qqa nisbatan barcha kuch momentlarining algebraik yig‘indisi nolga teng (∑Mᵢ = 0 — aylanma harakat yo‘q).\n\nKuch momenti M = F·d (N·m) bo‘lib, d — aylanish o‘qidan kuch ta’sir chizig‘igacha bo‘lgan eng qisqa masofa (kuch yelkasi). Richag muvozanati F₁·d₁ = F₂·d₂ ko‘rinishida bo‘ladi. Qo‘zg‘almas blok kuchdan yutuq bermaydi (faqat yo‘nalishni o‘zgartiradi), bitta ko‘char blok esa ideal holda kuchdan 2 marta yutuq beradi. Mexanikaning «oltin qoidasi»: hech bir oddiy mexanizm ishdan yutuq bermaydi — kuchdan necha marta yutilsa, masofadan shuncha marta yutqaziladi.',
      keyLaws: [
        { title: 'Muvozanatning ikki sharti', text: '∑F⃗ = 0 (kuchlar muvozanati) va ∑M⃗ = 0 (momentlar qoidasi).' },
        { title: 'Richag qoidasi (Arximed)', text: 'F₁·d₁ = F₂·d₂ — kuchlar nisbati yelkalar nisbatiga teskari proporsional.' },
        { title: 'Mexanikaning «oltin qoidasi»', text: 'Ideal oddiy mexanizmlarda kuchdan qancha yutuq olinsa, yo‘ldan shuncha yutqaziladi (F₁·h₁ = F₂·h₂).' },
      ],
      formulas: [
        { latex: 'M = F · d = r · F · sinα', name: 'Kuch momenti', symbols: 'M — moment (N·m), F — kuch (N), d — kuch yelkasi (m)' },
        { latex: 'F₁ · d₁ = F₂ · d₂', name: 'Richag muvozanat sharti', symbols: 'd₁, d₂ — kuch yelkalari' },
        { latex: 'F = (m·g) / (2n)  (ko‘char bloklar)', name: 'Polispastda kuchdan yutuq', symbols: 'n — ko‘char bloklar soni' },
      ],
      constants: [
        { name: 'Kuch momenti SI birligi', symbol: 'N·m', value: 'M = r⃗ × F⃗', unit: 'N·m' },
      ],
      applications: [
        'Qurilish minora kranlari, ko‘priklar fermasi va yuk ko‘tarish polispastlarini loyihalash.',
        'Gayka kalitlari, domkratlar va inson qo‘l-oyoq suyaklari biomexanikasida richag tamoyili.',
      ],
      calculator: {
        title: 'Kuch momenti va richag muvozanati kalkulyatori',
        formulaDisplay: 'M = F₁·r₁·sinα,  F₂ = (F₁·r₁·sinα) / d₂',
        inputs: [
          { key: 'F1', label: '1-kuch F₁', symbol: 'F₁', unit: 'N', min: 1, max: 500, step: 5, default: 60 },
          { key: 'd1', label: '1-yelka d₁', symbol: 'd₁', unit: 'm', min: 0.1, max: 10, step: 0.1, default: 2 },
          { key: 'deg', label: 'Kuch burchagi α', symbol: 'α', unit: '°', min: 10, max: 90, step: 5, default: 90 },
          { key: 'd2', label: '2-yelka d₂', symbol: 'd₂', unit: 'm', min: 0.1, max: 10, step: 0.1, default: 0.5 },
        ],
        compute: (v) => {
          const M = v.F1 * v.d1 * Math.sin((v.deg * Math.PI) / 180);
          const F2 = M / v.d2;
          return {
            value: M.toFixed(1),
            unit: 'N·m',
            summary: `Kuch momenti M = ${M.toFixed(1)} N·m. Muvozanat uchun 2-yelkadagi zarur kuch F₂ = ${F2.toFixed(1)} N.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Kuch Momenti (Torque) va Richag Muvozanati Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Torque.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Kuch, yelka uzunligi va burchak α ni o‘zgartirib, 3D fazoda kuch momenti M⃗ = r⃗ × F⃗ vektorini kuzating.',
      alternateSims: [
        { label: 'Kuch momenti 3D (Torque)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Torque.html' },
        { label: 'Qattiq jismlar minorasi (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/box.html' },
      ],
      parametric: {
        mode: 'lever_torque',
        title: 'Richag Muvozanati va Kuch Momenti Simulyatori',
        description: 'Ikki tomondagi massalar m₁, m₂ va tayanchdan masofalarni d₁, d₂ sozlab, richagning muvozanat yoki og‘ish holatini kuzating.',
        controls: [
          { key: 'm1', label: 'Chap yuk m₁', unit: 'kg', min: 1, max: 20, step: 1, value: 6 },
          { key: 'd1', label: 'Chap yelka d₁', unit: 'm', min: 0.5, max: 4, step: 0.25, value: 2 },
          { key: 'm2', label: 'O‘ng yuk m₂', unit: 'kg', min: 1, max: 20, step: 1, value: 4 },
          { key: 'd2', label: 'O‘ng yelka d₂', unit: 'm', min: 0.5, max: 4, step: 0.25, value: 3 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kuch momenti M = F·d ning SI tizimidagi birligi qaysi?', options: ['N·m', 'N/m', 'J/s', 'kg·m/s'], answer: 0, explain: 'Kuch momenti kuch va yelka ko‘paytmasi bo‘lgani uchun birligi N·m.' },
      { q: 'Richagning 2 m yelkasiga 30 N kuch qo‘yilgan. Muvozanat saqlanishi uchun 0.5 m yelkasiga qancha kuch qo‘yish kerak?', options: ['120 N', '7.5 N', '60 N', '15 N'], answer: 0, explain: 'F₂ = F₁·d₁/d₂ = 30 · 2 / 0.5 = 120 N.' },
      { q: 'Bitta ideal ko‘char blok kuchdan necha marta yutuq beradi?', options: ['2 marta', 'Yutuq bermaydi', '4 marta', '0.5 marta'], answer: 0, explain: 'Ko‘char blokda yuk ikki ipga taqsimlangani uchun F = P / 2.' },
      { q: 'Qo‘zg‘almas blok nimaga xizmat qiladi?', options: ['Kuchdan yutuq bermaydi, faqat kuch yo‘nalishini qulay o‘zgartiradi', 'Kuchdan 2 marta yutuq beradi', 'Ishdan yutuq beradi', 'Massani kamaytiradi'], answer: 0, explain: 'Qo‘zg‘almas blok teng yelkali richag kabi ishlaydi (d₁ = d₂ = R).' },
      { q: 'Mexanikaning «oltin qoidasi» nimani bildiradi?', options: ['Hech bir oddiy mexanizm ishdan yutuq bermaydi', 'Ishqalanish doimo nol', 'Kuchdan 100 marta yutish mumkin', 'Energiya yo‘qdan paydo bo‘ladi'], answer: 0, explain: 'Kuchdan necha marta yutilsak, ko‘chish masofasidan shuncha marta yutqazamiz.' },
      { q: 'Agar kuch ta’sir chizig‘i aylanish o‘qidan o‘tsa (d = 0), kuch momenti nimaga teng?', options: ['0 N·m', 'Maksimal', 'F', 'F/r'], answer: 0, explain: 'Yelka d = 0 bo‘lganda M = F · 0 = 0.' },
      { q: 'Qiya tekislik uzunligi balandligidan 4 marta katta bo‘lsa, ishqalanishsiz u kuchdan necha marta yutuq beradi?', options: ['4 marta', '2 marta', '8 marta', 'Yutuq bermaydi'], answer: 0, explain: 'F = P · (h / l) = P / 4.' },
      { q: 'Qattiq jism to‘liq muvozanatda bo‘lishi uchun qaysi shartlar bajarilishi kerak?', options: ['Kuchlar yig‘indisi ham, momentlar yig‘indisi ham nolga teng bo‘lishi', 'Faqat kuchlar yig‘indisi nol', 'Faqat momentlar yig‘indisi nol', 'Tezlik maksimal'], answer: 0, explain: '∑F⃗ = 0 (ilgarilanmaslik) va ∑M = 0 (aylanmaslik).' },
    ],
    problems: [
      {
        variants: [[40, 3, 1.5], [60, 2, 0.5], [100, 1.2, 0.4], [50, 4, 2]],
        build: (i) => {
          const [F1, d1, d2] = [[40, 3, 1.5], [60, 2, 0.5], [100, 1.2, 0.4], [50, 4, 2]][i];
          const F2 = (F1 * d1) / d2;
          return {
            q: `Richagning d₁ = ${d1} m yelkasiga ${F1} N kuch ta’sir etmoqda. Muvozanat uchun d₂ = ${d2} m yelkaga necha Nyuton kuch qo‘yish kerak?`,
            correct: F2,
            unit: 'N',
            explain: `F₂ = F₁·d₁/d₂ = ${F1}·${d1}/${d2} = ${F2} N.`,
          };
        },
      },
      {
        variants: [[80, 0.5], [50, 1.2], [120, 0.4], [90, 0.8]],
        build: (i) => {
          const [F, d] = [[80, 0.5], [50, 1.2], [120, 0.4], [90, 0.8]][i];
          return {
            q: `Aylanish o‘qidan ${d} m masofada perpendikulyar ravishda ${F} N kuch qo‘yilgan. Kuch momentini (N·m) toping.`,
            correct: F * d,
            unit: 'N·m',
            explain: `M = F · d = ${F} · ${d} = ${F * d} N·m.`,
          };
        },
      },
    ],
  },
  {
    id: '2D-2',
    code: '2D.2',
    sectionId: 'sec-2',
    subsectionId: '2D',
    subsectionTitle: 'D. Statika va Qattiq Jism Mexanikasi',
    title: 'Aylanma harakat dinamikasi',
    subtitle: 'Inersiya momenti, burchak tezlanish, impuls momenti va uning saqlanish qonuni, giroskop.',
    theory: {
      overview:
        'Qattiq jismning qo‘zg‘almas o‘q atrofida aylanishida ilgarilanma harakatdagi massa o‘rnini inersiya momenti I = ∑mᵢrᵢ² (kg·m²), kuch o‘rnini kuch momenti M, tezlanish o‘rnini esa burchak tezlanish ε = dω/dt egallaydi. Aylanma harakat dinamikasining asosiy tenglamasi: M = I·ε.\n\nAylanuvchi jismning impuls momenti L = I·ω (kg·m²/s) va aylanish kinetik energiyasi E_k = I·ω²/2 bo‘ladi. Tashqi kuch momentlari yig‘indisi nol bo‘lganda (∑M_tash = 0) jismning impuls momenti saqlanadi: I₁·ω₁ = I₂·ω₂. Masalan, figurali uchuvchi qo‘llarini tanasiga tortganda inersiya momenti I kamayib, burchak tezligi ω keskin ortadi. Giroskop — katta impuls momentiga ega tez aylanuvchi simmetrik jism bo‘lib, o‘z o‘qi yo‘nalishini fazoda saqlash xossasiga ega; tashqi kuch momenti ta’sirida u presessiya harakatini bajaradi.',
      keyLaws: [
        { title: 'Aylanma harakat asosiy tenglamasi', text: 'M = I·ε — tashqi kuch momenti inersiya momenti bilan burchak tezlanish ko‘paytmasiga teng.' },
        { title: 'Impuls momentining saqlanish qonuni', text: 'Tashqi kuch momentlari nol bo‘lsa, L = I·ω = const (fazoning izotroplik simmetriyasi).' },
        { title: 'Shteyner teoremasi', text: 'Ixtiyoriy parallel o‘qqa nisbatan inersiya momenti: I = I₀ + m·d² (I₀ — massalar markazidan o‘tuvchi o‘qqa nisbatan).' },
      ],
      formulas: [
        { latex: 'I = ∑ mᵢ · rᵢ²  (disk: ½mR², shar: ⅖mR², halqa: mR²)', name: 'Inersiya momenti', symbols: 'I — inersiya momenti (kg·m²), R — radius' },
        { latex: 'M = I · ε = dL / dt', name: 'Aylanma dinamika tenglamasi', symbols: 'ε — burchak tezlanish (rad/s²)' },
        { latex: 'L = I · ω = const', name: 'Impuls momenti saqlanishi', symbols: 'ω — burchak tezlik (rad/s)' },
        { latex: 'E_ayl = ½ · I · ω²', name: 'Aylanish kinetik energiyasi', symbols: 'E_ayl — energiya (J)' },
      ],
      constants: [
        { name: 'Bir jinsli disk inersiya momenti', symbol: 'I_disk', value: '½ · m · R²', unit: 'kg·m²' },
        { name: 'Yaxlit shar inersiya momenti', symbol: 'I_shar', value: '⅖ · m · R²', unit: 'kg·m²' },
      ],
      applications: [
        'Samolyotlar, kemalar va smartfonlarda fazoviy orientatsiyani aniqlovchi giroskoplar.',
        'Energiya saqlovchi maxoviklar (flywheel) va sun’iy yo‘ldoshlarning reaktiv g‘ildiraklari.',
      ],
      calculator: {
        title: 'Inersiya momenti va impuls momenti saqlanishi kalkulyatori',
        formulaDisplay: 'I = k·m·R²,  ω₂ = (I₁·ω₁)/I₂',
        inputs: [
          { key: 'm', label: 'Disk/Jism massasi m', symbol: 'm', unit: 'kg', min: 1, max: 100, step: 1, default: 10 },
          { key: 'R1', label: 'Boshlang‘ich radius R₁', symbol: 'R₁', unit: 'm', min: 0.2, max: 5, step: 0.1, default: 1.0 },
          { key: 'w1', label: 'Boshlang‘ich ω₁', symbol: 'ω₁', unit: 'rad/s', min: 0.5, max: 30, step: 0.5, default: 4 },
          { key: 'R2', label: 'Yangi radius R₂', symbol: 'R₂', unit: 'm', min: 0.2, max: 5, step: 0.1, default: 0.5 },
        ],
        compute: (v) => {
          const I1 = 0.5 * v.m * v.R1 * v.R1;
          const I2 = 0.5 * v.m * v.R2 * v.R2;
          const w2 = (I1 * v.w1) / I2;
          const L = I1 * v.w1;
          return {
            value: w2.toFixed(2),
            unit: 'rad/s',
            summary: `I₁ = ${I1.toFixed(2)} kg·m², L = ${L.toFixed(2)} kg·m²/s. Radius R₂ ga o‘zgarganda ω₂ = ${w2.toFixed(2)} rad/s.`,
          };
        },
      },
    },
    simulation: {
      title: 'Impuls Momenti Saqlanishi va Giroskop Presessiyasi 3D Lab',
      openSourceUrl: 'sims/effectuall/Mechanics_Conservation_of_Angular_Momentum.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Radiusni qisqartirganda burchak tezligining oshishini va giroskop presessiyasini 3D sahnalarda sinab ko‘ring.',
      alternateSims: [
        { label: 'Impuls momenti saqlanishi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Conservation_of_Angular_Momentum.html' },
        { label: 'Impuls momenti (Angular Momentum)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Angular_Momentum.html' },
        { label: 'Giroskop Presessiyasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Precession_Motion.html' },
      ],
      parametric: {
        mode: 'angular_momentum',
        title: 'Inersiya Momenti va Impuls Momenti Saqlanishi Simulyatori',
        description: 'Massalarning o‘qdan masofasi r ni o‘zgartirib, I = ∑mr² kamayganda ω burchak tezlik qanday keskin oshishini kuzating.',
        controls: [
          { key: 'm', label: 'Yukchalar massasi m', unit: 'kg', min: 1, max: 15, step: 1, value: 4 },
          { key: 'r', label: 'Qo‘l radiusi r', unit: 'm', min: 0.4, max: 2.5, step: 0.1, value: 1.8 },
          { key: 'L', label: 'Impuls momenti L', unit: 'kg·m²/s', min: 5, max: 60, step: 2, value: 24 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Massasi m va radiusi R bo‘lgan bir jinsli silindr (disk) ning markaziy o‘qqa nisbatan inersiya momenti qancha?', options: ['½·m·R²', 'm·R²', '⅖·m·R²', '⅔·m·R²'], answer: 0, explain: 'Silindr va disk uchun I = ½·m·R²; yupqa halqa uchun m·R²; yaxlit shar uchun ⅖·m·R².' },
      { q: 'Figurali uchuvchi aylanish paytida qo‘llarini tanasiga yaqinlashtirsa, uning burchak tezligi qanday o‘zgaradi?', options: ['Ortadi, chunki inersiya momenti I kamayib, L = I·ω saqlanadi', 'Kamayadi', 'O‘zgarmaydi', 'Nolga tushadi'], answer: 0, explain: 'Tashqi kuch momenti nol bo‘lgani uchun I₁·ω₁ = I₂·ω₂; I kamaysa ω ortadi.' },
      { q: 'Inersiya momenti 4 kg·m² bo‘lgan g‘ildirakka 12 N·m kuch momenti ta’sir etmoqda. Burchak tezlanish qancha?', options: ['3 rad/s²', '48 rad/s²', '0.33 rad/s²', '8 rad/s²'], answer: 0, explain: 'ε = M / I = 12 / 4 = 3 rad/s².' },
      { q: 'Aylanma harakatdagi qattiq jismning kinetik energiyasi qaysi formula bilan hisoblanadi?', options: ['E = ½ · I · ω²', 'E = I · ω', 'E = ½ · m · ω²', 'E = I² · ω'], answer: 0, explain: 'E_ayl = ½·I·ω² (ilgarilanmadagi ½mv² ga analog).' },
      { q: 'Giroskopning asosiy amaliy xossasi nimadan iborat?', options: ['Tez aylanayotganda tashqi turtkilarga qaramay aylanish o‘qi yo‘nalishini saqlash', 'Massani oshirish', 'Issiqlik chiqarish', 'Faqat to‘g‘ri chiziq bo‘ylab yurish'], answer: 0, explain: 'Katta impuls momenti tufayli giroskop o‘z o‘qini fazoda barqaror ushlab turadi.' },
      { q: 'Inersiya momenti 2 kg·m² jism 5 rad/s burchak tezlikda aylanmoqda. Impuls momenti qancha?', options: ['10 kg·m²/s', '25 kg·m²/s', '2.5 kg·m²/s', '50 kg·m²/s'], answer: 0, explain: 'L = I · ω = 2 · 5 = 10 kg·m²/s.' },
      { q: 'Bir xil massali va bir xil radiusli halqa va yaxlit disk bir vaqtda qiya tekislikdan dumalatib yuborildi. Qaysi biri oldin pastga tushadi?', options: ['Yaxlit disk (inersiya momenti kichikroq bo‘lgani uchun)', 'Halqa', 'Ikkalasi bir vaqtda', 'Og‘irligi kattasi'], answer: 0, explain: 'Diskning I = 0.5mR² < halqaning I = mR²; shuning uchun disk ko‘proq ilgarilanma tezlanish oladi.' },
      { q: 'Impuls momentining saqlanish qonuni fazoning qaysi fundamental simmetriyasidan kelib chiqadi?', options: ['Fazoning izotropligi (barcha yo‘nalishlarda bir xilligi)', 'Vaqtning birjinsliligi', 'Fazoning birjinsliligi', 'Zaryad saqlanishi'], answer: 0, explain: 'Nyoter teoremasiga ko‘ra, fazo burilishga nisbatan simmetrik (izotrop) bo‘lgani uchun impuls momenti saqlanadi.' },
    ],
    problems: [
      {
        variants: [[10, 0.5], [4, 2], [8, 1], [6, 0.5]],
        build: (i) => {
          const [m, R] = [[10, 0.5], [4, 2], [8, 1], [6, 0.5]][i];
          const I = 0.5 * m * R * R;
          return {
            q: `Massasi ${m} kg va radiusi ${R} m bo‘lgan bir jinsli diskning markaziy o‘qqa nisbatan inersiya momentini (kg·m²) toping.`,
            correct: I,
            unit: 'kg·m²',
            explain: `I = ½·m·R² = 0.5 · ${m} · ${R}² = ${I} kg·m².`,
          };
        },
      },
      {
        variants: [[4, 3, 1.5], [6, 4, 2], [5, 6, 3], [2, 10, 5]],
        build: (i) => {
          const [I1, w1, I2] = [[4, 3, 1.5], [6, 4, 2], [5, 6, 3], [2, 10, 5]][i];
          const w2 = (I1 * w1) / I2;
          return {
            q: `Inersiya momenti ${I1} kg·m² bo‘lgan tizim ${w1} rad/s tezlikda aylanmoqda. Inersiya momenti ${I2} kg·m² gacha kamaytirilsa, burchak tezlik (rad/s) qancha bo‘ladi?`,
            correct: w2,
            unit: 'rad/s',
            explain: `ω₂ = I₁·ω₁ / I₂ = (${I1}·${w1}) / ${I2} = ${w2} rad/s.`,
          };
        },
      },
    ],
  },
  {
    id: '2D-3',
    code: '2D.3',
    sectionId: 'sec-2',
    subsectionId: '2D',
    subsectionTitle: 'D. Statika va Qattiq Jism Mexanikasi',
    title: 'Massalar markazi',
    subtitle: "Og'irlik markazi va muvozanat turlari (turg'un, turg'unsiz, befarq).",
    theory: {
      overview:
        'Massalar markazi (inersiya markazi) — jism yoki jismlar tizimining barcha massasi go‘yo shu nuqtada mujassamlashgandek harakatlanadigan geometrik nuqtadir. Koordinatalari r⃗_cm = (∑mᵢ·r⃗ᵢ) / ∑mᵢ bilan aniqlanadi. Bir jinsli gravitatsiya maydonida jismning og‘irlik markazi massalar markazi bilan ustma-ust tushadi.\n\nJismlarning muvozanati uch xil bo‘ladi: 1) Turg‘un muvozanat — kichik chetlashishda tiklovchi kuch/moment paydo bo‘lib, jism avvalgi holatiga qaytadi (potensial energiya E_p minimumda, og‘irlik markazi eng pastda); 2) Turg‘unsiz muvozanat — kichik og‘ishda jism avvalgi holatidan yanada uzoqlashadi (E_p maksimumda); 3) Befarq muvozanat — istalgan siljishda ham muvozanat saqlanadi (E_p = const, masalan tekis sirtdagi shar). Jism tayanch yuzasida turg‘un bo‘lishi uchun uning og‘irlik markazidan tushirilgan vertikal chiziq tayanch yuzasi ichidan o‘tishi shart.',
      keyLaws: [
        { title: 'Massalar markazi koordinatasi', text: 'x_cm = (m₁x₁ + m₂x₂ + ...) / (m₁ + m₂ + ...) — ichki kuchlar massalar markazi tezligini o‘zgartira olmaydi.' },
        { title: 'Turg‘un muvozanat mezoni', text: 'Tizim potensial energiyasi minimal qiymatga ega bo‘lgan holat eng turg‘un muvozanatdir.' },
        { title: 'Ag‘darilmaslik sharti', text: 'Og‘irlik markazidan o‘tuvchi vertikal tayanch konturi ichida qolsa, jism ag‘darilmaydi.' },
      ],
      formulas: [
        { latex: 'x_cm = (∑ mᵢ xᵢ) / (∑ mᵢ)', name: 'Massalar markazi koordinatasi', symbols: 'mᵢ — zarracha massasi, xᵢ — uning koordinatasi' },
        { latex: 'v⃗_cm = (∑ mᵢ v⃗ᵢ) / (∑ mᵢ) = P⃗_um / M', name: 'Massalar markazi tezligi', symbols: 'M — umumiy massa' },
        { latex: 'tg(α_kr) = b / (2h)', name: 'Jismning kritik ag‘darilish burchagi', symbols: 'b — asos kengligi, h — og‘irlik markazi balandligi' },
      ],
      constants: [
        { name: 'Uchburchak og‘irlik markazi', symbol: 'h_cm', value: 'h / 3', unit: 'asosdan balandlik' },
      ],
      applications: [
        'Sport avtomobillarida ag‘darilib ketmaslik uchun og‘irlik markazini iloji boricha pastga tushirish.',
        'Piza minorasi va ko‘p qavatli binolarning statik turg‘unlik chegaralarini hisoblash.',
      ],
      calculator: {
        title: 'Ikki jismli tizim massalar markazi kalkulyatori',
        formulaDisplay: 'x_cm = (m₁x₁ + m₂x₂) / (m₁ + m₂)',
        inputs: [
          { key: 'm1', label: '1-jism massasi m₁', symbol: 'm₁', unit: 'kg', min: 1, max: 100, step: 1, default: 6 },
          { key: 'x1', label: '1-jism koordinatasi x₁', symbol: 'x₁', unit: 'm', min: -20, max: 20, step: 0.5, default: 0 },
          { key: 'm2', label: '2-jism massasi m₂', symbol: 'm₂', unit: 'kg', min: 1, max: 100, step: 1, default: 2 },
          { key: 'x2', label: '2-jism koordinatasi x₂', symbol: 'x₂', unit: 'm', min: -20, max: 20, step: 0.5, default: 8 },
        ],
        compute: (v) => {
          const xcm = (v.m1 * v.x1 + v.m2 * v.x2) / (v.m1 + v.m2);
          return {
            value: xcm.toFixed(2),
            unit: 'm',
            summary: `Umumiy massa M = ${v.m1 + v.m2} kg, massalar markazi koordinatasi x_cm = ${xcm.toFixed(2)} m.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Qattiq Jismlar Muvozanati va Massalar Markazi Laboratoriyasi',
      openSourceUrl: 'sims/cx20/box.html',
      openSourceSource: 'cx20 Cannon-es 3D',
      openSourceNote: 'Kublar minorasiga zarba bering va massalar markazi tayanch yuzasidan chiqqanda muvozanat qanday buzilishini 3D da kuzating.',
      alternateSims: [
        { label: 'Qattiq jismlar minorasi muvozanati (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/box.html' },
        { label: 'Domino turg‘unsiz muvozanati (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/domino.html' },
      ],
      parametric: {
        mode: 'center_of_mass',
        title: 'Massalar Markazi va Muvozanat Turlari Simulyatori',
        description: 'Jism qiyalik burchagini o‘zgartirib, og‘irlik markazi proyeksiyasi tayanch asosidan chiqqanda ag‘darilish yuz berishini kuzating.',
        controls: [
          { key: 'm1', label: 'Chap yuk m₁', unit: 'kg', min: 1, max: 15, step: 1, value: 6 },
          { key: 'm2', label: 'O‘ng yuk m₂', unit: 'kg', min: 1, max: 15, step: 1, value: 3 },
          { key: 'tilt', label: 'Tayanch qiyaligi α', unit: '°', min: 0, max: 45, step: 2, value: 12 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Turg‘un muvozanatdagi tizimning potensial energiyasi qanday qiymatga ega bo‘ladi?', options: ['Minimal qiymatga', 'Maksimal qiymatga', 'Nolga', 'Cheksizlikka'], answer: 0, explain: 'Turg‘un muvozanatdan chetlashganda potensial energiya ortadi, shuning uchun jism qaytishga intiladi.' },
      { q: 'Tekis gorizontal stolda turgan bir jinsli shar qanday muvozanatda bo‘ladi?', options: ['Befarq muvozanatda', 'Turg‘un muvozanatda', 'Turg‘unsiz muvozanatda', 'Muvozanatsiz'], answer: 0, explain: 'Sharni istalgan joyga siljitganda og‘irlik markazi balandligi o‘zgarmaydi (E_p = const).' },
      { q: 'x₁ = 0 da 3 kg va x₂ = 10 m da 2 kg massalar joylashgan. Tizimning massalar markazi qayerda?', options: ['x = 4 m', 'x = 5 m', 'x = 6 m', 'x = 2 m'], answer: 0, explain: 'x_cm = (3·0 + 2·10) / (3 + 2) = 20 / 5 = 4 m.' },
      { q: 'Jism tayanch yuzasi ustida ag‘darilmasligi uchun nima bajarilishi shart?', options: ['Og‘irlik markazidan tushirilgan vertikal chiziq tayanch yuzasi ichidan o‘tishi kerak', 'Jism massasi 10 kg dan kam bo‘lishi kerak', 'Jism sferik bo‘lishi kerak', 'Tezligi katta bo‘lishi kerak'], answer: 0, explain: 'Vertikal chiziq tayanch konturidan chiqsa, og‘irlik kuchi ag‘daruvchi moment hosil qiladi.' },
      { q: 'Bir jinsli yupqa uchburchakning og‘irlik markazi qayerda joylashadi?', options: ['Medianalar kesishgan nuqtada', 'Gipotenuzada', 'Eng katta burchak uchida', 'Tashqi chizilgan aylana markazida'], answer: 0, explain: 'Uchburchakning massalar markazi uning uchta medianasi kesishgan nuqtadir.' },
      { q: 'Botiq chashka tubida turgan sharcha qanday muvozanatda?', options: ['Turg‘un muvozanatda', 'Turg‘unsiz muvozanatda', 'Befarq muvozanatda', 'Dinamik muvozanatda'], answer: 0, explain: 'Chetga siljitilsa ko‘tariladi (E_p ortadi) va tubiga qaytib tushadi.' },
      { q: 'Qavariq gumbaz cho‘qqisida turgan sharcha qanday muvozanatda bo‘ladi?', options: ['Turg‘unsiz muvozanatda', 'Turg‘un muvozanatda', 'Befarq muvozanatda', 'Statik o‘zgarmas'], answer: 0, explain: 'Kichik turtkidan keyin potensial energiya kamayish tomoniga — pastga dumalab ketadi.' },
      { q: 'Tashqi kuchlarsiz berk tizimda ichki portlash yuz bersa, bo‘laklarning umumiy massalar markazi qanday harakatlanadi?', options: ['Portlashdan oldingi tezligini o‘zgartirmay saqlaydi', 'Keskin to‘xtaydi', 'Teskari uchadi', 'Tezlanishi cheksiz bo‘ladi'], answer: 0, explain: 'Ichki kuchlar umumiy impulsni, demak massalar markazi harakatini o‘zgartira olmaydi.' },
    ],
    problems: [
      {
        variants: [[4, 0, 4, 10], [6, 0, 2, 12], [3, 2, 5, 10], [8, 0, 2, 15]],
        build: (i) => {
          const [m1, x1, m2, x2] = [[4, 0, 4, 10], [6, 0, 2, 12], [3, 2, 5, 10], [8, 0, 2, 15]][i];
          const xcm = (m1 * x1 + m2 * x2) / (m1 + m2);
          return {
            q: `OX o‘qida x₁ = ${x1} m nuqtada m₁ = ${m1} kg va x₂ = ${x2} m nuqtada m₂ = ${m2} kg yuklar joylashgan. Massalar markazi koordinatasini (m) toping.`,
            correct: xcm,
            unit: 'm',
            explain: `x_cm = (${m1}·${x1} + ${m2}·${x2}) / (${m1}+${m2}) = ${xcm} m.`,
          };
        },
      },
      {
        variants: [[2, 4], [1, 2], [3, 6], [4, 10]],
        build: (i) => {
          const [b, h] = [[2, 4], [1, 2], [3, 6], [4, 10]][i];
          const ratio = b / (2 * h);
          return {
            q: `Asosi eni b = ${b} m va og‘irlik markazi balandligi h = ${h} m bo‘lgan bir jinsli blok ag‘darilmasligi uchun kritik burchak tangensi tg(α) = b/(2h) qancha bo‘ladi?`,
            correct: ratio,
            unit: '',
            explain: `tg(α_kr) = ${b} / (2 · ${h}) = ${ratio}.`,
          };
        },
      },
    ],
  },
  {
    id: '2E-1',
    code: '2E.1',
    sectionId: 'sec-2',
    subsectionId: '2E',
    subsectionTitle: 'E. Suyuqlik va Gazlar Mexanikasi (Gidro-aeromexanika)',
    title: 'Gidrostatika',
    subtitle: 'Bosim, Paskal qonuni, gidravlik press, tutash idishlar, atmosfera bosimi (Torrichelli tajribasi), Arximed qonuni va jismlarning suzishi.',
    theory: {
      overview:
        'Gidrostatika tinch holatdagi suyuqlik va gazlarning muvozanatini o‘rganadi. Bosim — sirt yuzasiga tik ta’sir etuvchi kuchning shu yuzaga nisbati: p = F/S (Paskal, 1 Pa = 1 N/m²). Paskal qonuniga ko‘ra, suyuqlik yoki gazga tashqaridan berilgan bosim hamma yo‘nalishda bir xilda o‘zgarishsiz uzatiladi; gidravlik pressda bu kuchdan F₂/F₁ = S₂/S₁ marta yutuq beradi.\n\nOg‘irlik maydonida h chuqurlikdagi gidrostatik bosim p = ρ·g·h ga teng. Tutash idishlarda bir jinsli suyuqlik sathlari teng bo‘ladi. Atmosfera bosimini ilk bor E. Torrichelli simob barometri orqali o‘lchagan (p₀ = 101325 Pa ≈ 760 mm sim. ust.). Suyuqlik yoki gazga botirilgan jismga uning siqib chiqargan suyuqlik og‘irligiga teng yuqoriga yo‘nalgan Arximed kuchi ta’sir qiladi: F_A = ρ_s·g·V_bot. Agar ρ_j < ρ_s bo‘lsa jism suzadi, ρ_j = ρ_s bo‘lsa ichida muallaq qoladi, ρ_j > ρ_s bo‘lsa cho‘kadi.',
      keyLaws: [
        { title: 'Paskal qonuni', text: 'Suyuqlik va gazlar o‘ziga berilgan tashqi bosimni hamma yo‘nalishda bir xil uzatadi.' },
        { title: 'Gidrostatik bosim', text: 'p = p₀ + ρ·g·h — idishning shakli va ko‘ndalang kesimiga bog‘liq emas (gidrostatik paradoks).' },
        { title: 'Arximed qonuni', text: 'F_A = ρ_suy·g·V_bot — itarib chiqaruvchi kuch siqib chiqarilgan suyuqlik og‘irligiga teng.' },
      ],
      formulas: [
        { latex: 'p = F / S = ρ · g · h', name: 'Bosim va gidrostatik bosim', symbols: 'p — bosim (Pa), ρ — suyuqlik zichligi (kg/m³), h — chuqurlik (m)' },
        { latex: 'F₂ / F₁ = S₂ / S₁', name: 'Gidravlik press tenglamasi', symbols: 'S₁, S₂ — kichik va katta porshen yuzalari' },
        { latex: 'F_A = ρ_s · g · V_bot', name: 'Arximed kuchi', symbols: 'V_bot — jismning suyuqlikka botgan qismi hajmi (m³)' },
        { latex: 'ρ₁·h₁ = ρ₂·h₂', name: 'Tutash idishlarda aralashmas suyuqliklar', symbols: 'h₁, h₂ — chegara sathidan ustun balandliklari' },
      ],
      constants: [
        { name: 'Normal atmosfera bosimi', symbol: 'p₀', value: '101325', unit: 'Pa' },
        { name: 'Toza suv zichligi', symbol: 'ρ_suv', value: '1000', unit: 'kg/m³' },
        { name: 'Simob zichligi', symbol: 'ρ_Hg', value: '13600', unit: 'kg/m³' },
      ],
      applications: [
        'Gidravlik tormoz tizimlari, ekskavatorlar va sanoat gidro-presslari.',
        'Kemalar suv sig‘imi (vaterliniya), suvosti kemalari ballast tizimi va aerostatlarning suzish shartlari.',
      ],
      calculator: {
        title: 'Gidrostatik bosim va Arximed kuchi kalkulyatori',
        formulaDisplay: 'p = p₀ + ρgh,  F_A = ρ_s·g·V',
        inputs: [
          { key: 'rho', label: 'Suyuqlik zichligi ρ', symbol: 'ρ', unit: 'kg/m³', min: 500, max: 13600, step: 50, default: 1000 },
          { key: 'h', label: 'Chuqurlik h', symbol: 'h', unit: 'm', min: 0, max: 1000, step: 1, default: 10 },
          { key: 'V', label: 'Botgan hajm V', symbol: 'V', unit: 'm³', min: 0.01, max: 10, step: 0.05, default: 0.2 },
        ],
        compute: (v) => {
          const pHydro = v.rho * 9.81 * v.h;
          const pTot = 101325 + pHydro;
          const fa = v.rho * 9.81 * v.V;
          return {
            value: (pHydro / 1000).toFixed(2),
            unit: 'kPa',
            summary: `Gidrostatik bosim p_g = ${(pHydro / 1000).toFixed(2)} kPa, To‘la bosim = ${(pTot / 1000).toFixed(2)} kPa. Arximed kuchi F_A = ${fa.toFixed(1)} N.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Arximed Suzishi (PBF), Paskal Qonuni va Bosim Laboratoriyasi',
      openSourceUrl: 'sims/pbf/index.html?preset=buoyancy',
      openSourceSource: 'Three.js Particle Fluids (PBF)',
      openSourceNote: 'Suyuqlikdagi jismning nisbiy zichligini (ρ/ρ₀) o‘zgartirib, Arximed kuchi va suzish/cho‘kish chegarasini 3D zarraviy suyuqlikda sinab ko‘ring.',
      alternateSims: [
        { label: 'Arximed kuchi va suzish (3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=buoyancy' },
        { label: 'Paskal qonuni (Effectuall 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Pascals_Law.html' },
        { label: 'Arximed ko‘tarish kuchi (Effectuall 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Buoyant_Force.html' },
        { label: 'Gidrostatik bosim (Effectuall 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Pressure.html' },
      ],
      parametric: {
        mode: 'hydrostatics',
        title: 'Arximed Kuchi va Gidravlik Press Simulyatori',
        description: 'Jism zichligi ρ_j va suyuqlik zichligi ρ_s ni o‘zgartirib, botish chuqurligi, F_A va Paskal bosimi taqsimotini kuzating.',
        controls: [
          { key: 'rhoObj', label: 'Jism zichligi ρ_j', unit: 'kg/m³', min: 200, max: 2500, step: 50, value: 650 },
          { key: 'rhoFl', label: 'Suyuqlik zichligi ρ_s', unit: 'kg/m³', min: 600, max: 2000, step: 50, value: 1000 },
          { key: 'depth', label: 'Chuqurlik sensori h', unit: 'm', min: 1, max: 20, step: 1, value: 8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Suv ostida 10 m chuqurlikdagi gidrostatik bosim qancha (ρ = 1000 kg/m³, g = 10 m/s²)?', options: ['100 kPa', '10 kPa', '1000 kPa', '1 kPa'], answer: 0, explain: 'p = ρ·g·h = 1000 · 10 · 10 = 100,000 Pa = 100 kPa.' },
      { q: 'Gidravlik press porshenlari yuzalari nisbati S₂/S₁ = 25 bo‘lsa, kichik porshenga 200 N kuch berilganda katta porshenda qancha kuch olinadi?', options: ['5000 N', '8 N', '2500 N', '1000 N'], answer: 0, explain: 'F₂ = F₁ · (S₂/S₁) = 200 · 25 = 5000 N.' },
      { q: 'Suyuqlik va gazlarning o‘ziga berilgan bosimni barcha yo‘nalishlarda o‘zgarishsiz uzatish qonuni kimning nomi bilan ataladi?', options: ['Blez Paskal', 'Arximed', 'Torrichelli', 'Bernulli'], answer: 0, explain: 'Bu Paskal qonunidir.' },
      { q: 'Hajmi 0.02 m³ bo‘lgan jism suvga to‘liq botirilgan. Unga ta’sir etuvchi Arximed kuchi qancha (ρ = 1000 kg/m³, g = 10 m/s²)?', options: ['200 N', '20 N', '2000 N', '2 N'], answer: 0, explain: 'F_A = ρ·g·V = 1000 · 10 · 0.02 = 200 N.' },
      { q: 'Zichligi 800 kg/m³ bo‘lgan yog‘och suvda (1000 kg/m³) suzganda uning hajmining necha foizi suv ostida bo‘ladi?', options: ['80%', '20%', '50%', '100%'], answer: 0, explain: 'V_bot / V = ρ_j / ρ_s = 800 / 1000 = 0.80 (80%).' },
      { q: 'Torrichelli tajribasida normal atmosfera bosimi necha millimetr simob ustuniga teng chiqqan?', options: ['760 mm', '1000 mm', '500 mm', '1030 mm'], answer: 0, explain: '760 mm simob ustuni ≈ 101325 Pa.' },
      { q: 'Gidrostatik paradoks nimadan iborat?', options: ['Idish tubiga tushadigan gidrostatik bosim kuchi idish shakliga emas, faqat asos yuzasi va suyuqlik balandligiga bog‘liq', 'Suyuqlik massasi doimo nol', 'Bosim yuqoriga qarab ortadi', 'Arximed kuchi faqat qattiq jismlar orasida ishlaydi'], answer: 0, explain: 'Turli shakldagi idishlarda bir xil balandlik va bir xil tub yuzasi bo‘lsa, tubga bosim kuchi F = ρghS bir xil bo‘ladi.' },
      { q: 'Kemalar daryodan (chuchuk suv) dengizga (sho‘r suv) chiqqanda uning suvga botish chuqurligi qanday o‘zgaradi?', options: ['Kamayadi (kema biroz ko‘tariladi), chunki sho‘r suv zichligi katta', 'Ortadi', 'O‘zgarmaydi', 'Cho‘kib ketadi'], answer: 0, explain: 'F_A = m·g o‘zgarmas; ρ_sho‘r > ρ_chuchuk bo‘lgani uchun V_bot kamayadi.' },
    ],
    problems: [
      {
        variants: [[1000, 15], [1000, 25], [800, 10], [1030, 20]],
        build: (i) => {
          const [rho, h] = [[1000, 15], [1000, 25], [800, 10], [1030, 20]][i];
          const p = (rho * 10 * h) / 1000;
          return {
            q: `Zichligi ${rho} kg/m³ bo‘lgan suyuqlikning ${h} m chuqurligidagi gidrostatik bosimini (kPa) toping (g = 10 m/s²).`,
            correct: p,
            unit: 'kPa',
            explain: `p = ρ·g·h = ${rho} · 10 · ${h} = ${p * 1000} Pa = ${p} kPa.`,
          };
        },
      },
      {
        variants: [[1000, 0.05], [1000, 0.08], [800, 0.05], [1000, 0.12]],
        build: (i) => {
          const [rho, V] = [[1000, 0.05], [1000, 0.08], [800, 0.05], [1000, 0.12]][i];
          const fa = rho * 10 * V;
          return {
            q: `Hajmi ${V} m³ bo‘lgan jism zichligi ${rho} kg/m³ suyuqlikka to‘liq botirilgan. Arximed kuchini (N) toping (g = 10 m/s²).`,
            correct: fa,
            unit: 'N',
            explain: `F_A = ρ·g·V = ${rho} · 10 · ${V} = ${fa} N.`,
          };
        },
      },
    ],
  },
  {
    id: '2E-2',
    code: '2E.2',
    sectionId: 'sec-2',
    subsectionId: '2E',
    subsectionTitle: 'E. Suyuqlik va Gazlar Mexanikasi (Gidro-aeromexanika)',
    title: 'Gidrodinamika',
    subtitle: 'Suyuqlik oqimining uzluksizlik tenglamasi, Bernulli qonuni, ko‘tarish kuchi, qovushqoqlik va laminar/turbulent oqimlar.',
    theory: {
      overview:
        'Gidrodinamika harakatdagi suyuqlik va gazlar qonuniyatlarini o‘rganadi. Siqilmaydigan suyuqlikning o‘zgaruvchan kesimli quvurdagi statsionar oqimi uchun uzluksizlik tenglamasi bajariladi: S₁·v₁ = S₂·v₂ = Q (hajmiy oqim sarfi, m³/s). Demak, quvur toraygan joyda oqim tezligi ortadi.\n\nDaniil Bernulli qonuni (1738) ideal suyuqlik oqimi uchun energiya saqlanish qonunining ifodasidir: p + ½ρv² + ρgh = const. Bu yerda p — statik bosim, ½ρv² — dinamik bosim. Uzluksizlik va Bernulli qonunidan muhim xulosa kelib chiqadi: oqim tezligi katta bo‘lgan joyda statik bosim kamayadi! Samolyot qanotining ko‘tarish kuchi, pulverizator, Karbyurator va Torrichelli tezlik formulasi (v = √(2gh)) aynan shu tamoyilga asoslanadi. Real suyuqliklarda ichki ishqalanish (qovushqoqlik η) mavjud bo‘lib, oqim tartibini Reynolds soni Re = ρvd/η belgilaydi: kichik Re larda laminar (qatlamli), Re > 2300 da esa turbulent (uyurmali) oqim vujudga keladi.',
      keyLaws: [
        { title: 'Uzluksizlik tenglamasi', text: 'S₁·v₁ = S₂·v₂ — toraygan kesimda oqim tezligi ko‘ndalang kesim yuzasiga teskari proporsional ravishda ortadi.' },
        { title: 'Bernulli qonuni', text: 'p + ½ρv² + ρgh = const — gorizontal oqimda tezlik ortgan joyda statik bosim pasayadi.' },
        { title: 'Torrichelli formulasi', text: 'Idishdagi h chuqurlikdagi teshikdan oqib chiqayotgan suyuqlik tezligi v = √(2gh).' },
        { title: 'Reynolds soni (Laminar vs Turbulent)', text: 'Re = ρ·v·d / η; Re < 2300 da silliq laminar oqim, Re > 2300 da uyurmali turbulent oqim.' },
      ],
      formulas: [
        { latex: 'S₁ · v₁ = S₂ · v₂ = const', name: 'Oqim uzluksizlik tenglamasi', symbols: 'S — quvur kesimi yuzasi (m²), v — oqim tezligi (m/s)' },
        { latex: 'p + ½·ρ·v² + ρ·g·h = const', name: 'Bernulli tenglamasi', symbols: 'p — statik bosim, ½ρv² — dinamik bosim' },
        { latex: 'v = √(2 · g · h)', name: 'Torrichelli oqib chiqish tezligi', symbols: 'h — suyuqlik sathi balandligi' },
        { latex: 'Re = (ρ · v · d) / η', name: 'Reynolds soni', symbols: 'd — quvur diametri, η — dinamik qovushqoqlik (Pa·s)' },
      ],
      constants: [
        { name: 'Suvning qovushqoqligi (20°C)', symbol: 'η_suv', value: '1.002·10⁻³', unit: 'Pa·s' },
        { name: 'Kritik Reynolds soni (quvurda)', symbol: 'Re_kr', value: '≈ 2300', unit: 'o‘lchamsiz' },
      ],
      applications: [
        'Samolyot qanotlarining aerodinamik profili orqali ko‘tarish kuchini hosil qilish.',
        'Venturi sarf o‘lchagichlari, neft-gaz quvurlari va qon tomirlari (gemodinamika) oqimini tahlil qilish.',
      ],
      calculator: {
        title: 'Bernulli, Uzluksizlik va Torrichelli kalkulyatori',
        formulaDisplay: 'v₂ = v₁·(S₁/S₂),  Δp = ½ρ(v₂² − v₁²)',
        inputs: [
          { key: 'S1', label: '1-kesim yuzasi S₁', symbol: 'S₁', unit: 'sm²', min: 1, max: 500, step: 1, default: 40 },
          { key: 'S2', label: '2-kesim yuzasi S₂', symbol: 'S₂', unit: 'sm²', min: 1, max: 500, step: 1, default: 10 },
          { key: 'v1', label: '1-kesim tezligi v₁', symbol: 'v₁', unit: 'm/s', min: 0.2, max: 20, step: 0.2, default: 2 },
          { key: 'rho', label: 'Suyuqlik zichligi ρ', symbol: 'ρ', unit: 'kg/m³', min: 1, max: 2000, step: 10, default: 1000 },
        ],
        compute: (v) => {
          const v2 = v.v1 * (v.S1 / v.S2);
          const dp = 0.5 * v.rho * (v2 * v2 - v.v1 * v.v1);
          return {
            value: v2.toFixed(2),
            unit: 'm/s',
            summary: `Tor kesimda tezlik v₂ = ${v2.toFixed(2)} m/s, statik bosim tushishi Δp = ${(dp / 1000).toFixed(2)} kPa.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Suyuqlik Oqimi, To‘g‘on O‘pirilishi (PBF) va Torrichelli Lab',
      openSourceUrl: 'sims/pbf/index.html?preset=dam-break',
      openSourceSource: 'Three.js Particle Fluids (PBF)',
      openSourceNote: 'PBF 3D suyuqlik simulyatsiyasida to‘g‘on o‘pirilishi, qovushqoqlik (Asal) va to‘lqin kamerasi oqimlarini real vaqtda boshqaring.',
      alternateSims: [
        { label: 'To‘g‘on o‘pirilishi va to‘siq (3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=dam-break' },
        { label: 'Qovushqoqlik (Asal vs Suv 3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=viscous-pour' },
        { label: 'To‘lqin kamerasi (3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=wave-chamber' },
        { label: 'Gidrodinamik uyurma (3D PBF)', source: 'Three.js Particle Fluids (PBF)', url: 'sims/pbf/index.html?preset=banana-blender' },
        { label: 'Torrichelli qonuni (Effectuall 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Torricellis_Law.html' },
      ],
      parametric: {
        mode: 'bernoulli',
        title: 'Venturi Quvuri: Uzluksizlik va Bernulli Qonuni Simulyatori',
        description: 'Quvur torayish koeffitsiyentini va kirish tezligini o‘zgartirib, tezlik oshishi bilan piezometr ustunlaridagi statik bosim pasayishini kuzating.',
        controls: [
          { key: 'v1', label: 'Kirish tezligi v₁', unit: 'm/s', min: 1, max: 8, step: 0.5, value: 2.5 },
          { key: 'ratio', label: 'Torayish nisbati d₁/d₂', unit: '', min: 1.2, max: 3.0, step: 0.2, value: 2.0 },
          { key: 'visc', label: 'Qovushqoqlik η', unit: 'mPa·s', min: 1, max: 20, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quvurning kesim yuzasi 4 marta toraysa, siqilmaydigan suyuqlik oqimining tezligi qanday o‘zgaradi?', options: ['4 marta ortadi', '4 marta kamayadi', '2 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'S₁·v₁ = S₂·v₂ => S₂ = S₁/4 bo‘lganda v₂ = 4v₁.' },
      { q: 'Bernulli qonuniga ko‘ra, gorizontal oqimning tezligi ortgan qismida statik bosim qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Cheksizga intiladi'], answer: 0, explain: 'p + ½ρv² = const; v ortganda p kamayishi shart.' },
      { q: 'Idish devoridagi suv sathidan 5 m pastda ochilgan kichik teshikdan suv qanday tezlikda oqib chiqadi (g = 10 m/s²)?', options: ['10 m/s', '5 m/s', '50 m/s', '2.2 m/s'], answer: 0, explain: 'Torrichelli formulasi: v = √(2gh) = √(2·10·5) = √100 = 10 m/s.' },
      { q: 'Samolyot qanotida ko‘tarish kuchi qaysi fizik effekt tufayli vujudga keladi?', options: ['Qanot ustida havo oqimi tezligi katta bo‘lgani uchun bosim pastga qaraganda kichik bo‘ladi (Bernulli)', 'Faqat Arximed kuchi', 'Qanot ostida vakuum hosil bo‘lishi', 'Magnit maydon'], answer: 0, explain: 'Qanotning yuqori profili bo‘ylab oqim tezroq o‘tadi, natijada yuqorida bosim pasayib ko‘tarish kuchi hosil bo‘ladi.' },
      { q: 'Suyuqlik qatlamlarining aralashmasdan silliq oqishi qanday oqim deyiladi?', options: ['Laminar oqim', 'Turbulent oqim', 'Kavitatsion oqim', 'Adiabatik oqim'], answer: 0, explain: 'Laminar oqimda suyuqlik zarralari parallel qatlamlar bo‘ylab sirpanadi.' },
      { q: 'Reynolds soni qaysi kattaliklarga bog‘liq?', options: ['Zichlik, oqim tezligi, quvur o‘lchami va qovushqoqlik (Re = ρvd/η)', 'Faqat bosim va harorat', 'Gravitatsiya va massa', 'Faqat hajm'], answer: 0, explain: 'Re = ρ·v·d / η laminar va turbulent rejim chegarasini aniqlaydi.' },
      { q: '½·ρ·v² ifoda gidrodinamikada nima deb ataladi?', options: ['Dinamik bosim', 'Gidrostatik bosim', 'Atmosfera bosimi', 'Sirt taranglik bosimi'], answer: 0, explain: 'Dinamik bosim oqimning kinetik energiya zichligiga teng.' },
      { q: 'Qovushqoqlik koeffitsiyenti η ning SI birligi qaysi?', options: ['Pa·s', 'N/m', 'J/K', 'kg/m³'], answer: 0, explain: 'Dinamik qovushqoqlik SI da Pa·s (Paskal·sekund) da o‘lchanadi.' },
    ],
    problems: [
      {
        variants: [[20, 5, 3], [30, 10, 4], [50, 10, 2], [40, 8, 5]],
        build: (i) => {
          const [S1, S2, v1] = [[20, 5, 3], [30, 10, 4], [50, 10, 2], [40, 8, 5]][i];
          const v2 = (S1 * v1) / S2;
          return {
            q: `Quvurning S₁ = ${S1} sm² keng qismida suv ${v1} m/s tezlikda oqmoqda. Kesimi S₂ = ${S2} sm² bo‘lgan tor qismidagi oqim tezligi (m/s) qancha?`,
            correct: v2,
            unit: 'm/s',
            explain: `v₂ = v₁·(S₁/S₂) = ${v1} · (${S1}/${S2}) = ${v2} m/s.`,
          };
        },
      },
      {
        variants: [[0.8], [1.25], [3.2], [5.0]],
        build: (i) => {
          const [h] = [[0.8], [1.25], [3.2], [5.0]][i];
          const v = Math.sqrt(2 * 10 * h);
          return {
            q: `Bakdagi suv sathidan ${h} m chuqurlikdagi teshikdan suv qanday tezlik (m/s) bilan oqib chiqadi (g = 10 m/s²)?`,
            correct: v,
            unit: 'm/s',
            explain: `v = √(2gh) = √(2 · 10 · ${h}) = ${v} m/s.`,
          };
        },
      },
    ],
  },
];
