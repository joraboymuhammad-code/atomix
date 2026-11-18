// 7-bo'lim: Nisbiylik Nazariyasi va Kvant Fizikasi (8 mavzu: 7A-1, 7B-1, 7B-2, 7C-1 .. 7C-5)

export const SEC7_TOPICS = [
  {
    id: '7A-1',
    code: '7A.1',
    sectionId: 'sec-7',
    subsectionId: '7A',
    subsectionTitle: 'A. Maxsus Nisbiylik Nazariyasi (MNN)',
    title: "Eynshteyn postulatlari va relyativistik dinamika",
    subtitle: "Yorug'lik tezligining doimiyligi, vaqt sekinlashuvi, uzunlik qisqarishi, E = mc²",
    theory: {
      overview:
        "1905-yilda Albert Eynshteyn yaratgan Maxsus Nisbiylik Nazariyasi (MNN) yorug'lik tezligiga yaqin tezliklardagi ($v \\sim c$) fazo, vaqt va energiya qonuniyatlarini ochib beradi. U ikkita postulatga asoslanadi: 1) Barcha inersial sanoq sistemalarida tabiat qonunlari bir xil; 2) Vakuumdagi yorug'lik tezligi $c$ manba va kuzatuvchining harakatiga bog'liq emas. Buning natijasida harakatlanayotgan sistemada vaqt sekinlashadi ($\\Delta t = \\gamma \\Delta t_0$), harakat yo'nalishi bo'yicha uzunlik qisqaradi ($l = l_0 / \\gamma$) va har qanday tinchlikdagi massa $m_0$ ulkan energiyaga ekvivalent bo'ladi ($E_0 = m_0 c^2$).",
      keyLaws: [
        {
          title: "Eynshteynning ikki postulati",
          text: "1-postulat (Nisbiylik prinsipi): barcha fizik jarayonlar hamma inersial sistemalarda bir xil kechadi. 2-postulat: vakuumdagi yorug'lik tezligi $c$ barcha inersial sistemalarda doimiydir.",
        },
        {
          title: "Vaqt sekinlashuvi va Lorens qisqarishi",
          text: "Lorens omili $\\gamma = 1/\\sqrt{1 - v^2/c^2} \\ge 1$ bo'lib, kuzatuvchiga nisbatan $v$ tezlik bilan harakatlanayotgan soat $\\gamma$ marta sekin yuradi, sterjen esa $\\gamma$ marta qisqa ko'rinadi.",
        },
        {
          title: "Massa va energiya ekvivalentligi",
          text: "Zarrachaning to'la energiyasi $E = \\gamma m_0 c^2$, tinchlik energiyasi $E_0 = m_0 c^2$, kinetik energiyasi esa $E_k = (\\gamma - 1) m_0 c^2$ ga teng.",
        },
      ],
      formulas: [
        { latex: '\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}', name: 'Lorens (relyativistik) omili', symbols: 'v — jism tezligi, c — yorug‘lik tezligi' },
        { latex: '\\Delta t = \\gamma \\Delta t_0, \\quad l = \\frac{l_0}{\\gamma}', name: 'Vaqt dilatatsiyasi va uzunlik qisqarishi', symbols: '\\Delta t_0, l_0 — xususiy vaqt va uzunlik' },
        { latex: 'E = \\gamma m_0 c^2, \\quad E_0 = m_0 c^2', name: 'Eynshteyn energiya tenglamasi', symbols: 'm_0 — tinchlik massasi' },
        { latex: 'u = \\frac{u\' + v}{1 + \\frac{u\' v}{c^2}}', name: 'Tezliklarni relyativistik qo‘shish', symbols: 'Hech qachon c dan oshmaydi' },
      ],
      constants: [
        { name: "Vakuumdagi yorug'lik tezligi", symbol: 'c', value: '2.99792 × 10⁸', unit: 'm/s' },
        { name: "Elektron tinchlik energiyasi", symbol: 'm_e c²', value: '0.511', unit: 'MeV' },
        { name: "Proton tinchlik energiyasi", symbol: 'm_p c²', value: '938.27', unit: 'MeV' },
      ],
      applications: [
        "GPS va GLONASS sun'iy yo'ldoshlari soatlarida ham maxsus, ham umumiy nisbiylik tuzatmalari kiritilmasa, koordinatalar kuniga ~11 km ga xato ketadi.",
        "Atmosferada kosmik nurlardan hosil bo'lgan myuonlarning Yer sirtigacha yetib kelishi relyativistik vaqt sekinlashuvining bevosita isbotidir.",
        "Zarrachalar tezlatkichlari (LHC) da energiya ortishi asosan γ ortishi hisobiga bo'ladi.",
      ],
      calculator: {
        title: "Relyativistik Lorens omili va energiya kalkulyatori",
        formulaDisplay: 'γ = 1 / √(1 - β²),   E₀ = m₀c²,   Δt = γΔt₀',
        inputs: [
          { key: 'beta', label: 'Nisbiy tezlik β = v/c', symbol: 'v/c', unit: 'c', min: 0, max: 0.995, step: 0.01, default: 0.80 },
          { key: 'l0', label: 'Xususiy uzunlik l₀', symbol: 'l₀', unit: 'm', min: 1, max: 100, step: 1, default: 10 },
          { key: 'dt0', label: 'Xususiy vaqt Δt₀', symbol: 'Δt₀', unit: 's', min: 1, max: 100, step: 1, default: 10 },
        ],
        compute: (v) => {
          const gamma = 1 / Math.sqrt(1 - v.beta * v.beta);
          const l = v.l0 / gamma;
          const dt = v.dt0 * gamma;
          return {
            value: `γ = ${gamma.toFixed(3)}`,
            unit: '',
            summary: `Qisqargan uzunlik l = ${l.toFixed(2)} m | Laboratoriya vaqti Δt = ${dt.toFixed(2)} s | Kinetik/tinchlik nisbati = ${(gamma - 1).toFixed(3)}`,
          };
        },
      },
    },
    simulation: {
      title: "Fazogir va yorug'lik tezligi yaqinidagi harakat simulyatsiyasi",
      openSourceUrl: 'sims/effectuall/Astronaut.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D fazo muhitini kuzating va pastdagi MNN parametr stendida yorug'lik soati hamda Lorens uzunlik qisqarishini boshqaring.",
      alternateSims: [
        { label: "Gravitatsiya va fazo-vaqt (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Gravitation_Law.html' },
      ],
      parametric: {
        mode: 'relativity_dilation',
        title: "Yorug'lik soati va Lorens qisqarishi stendi",
        description: "Raketa tezligi v/c ni oshirib, yorug'lik nuri trayektoriyasi cho'zilishini va vaqt sekinlashuvini kuzating.",
        controls: [
          { key: 'beta', label: 'Tezlik nisbati v/c', unit: 'c', min: 0, max: 0.96, step: 0.02, value: 0.8 },
          { key: 'l0', label: 'Raketa uzunligi l₀', unit: 'm', min: 20, max: 100, step: 5, value: 60 },
          { key: 'mass', label: 'Tinchlik massasi m₀', unit: 'kg', min: 1, max: 10, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Eynshteynning ikkinchi postulatiga ko'ra vakuumdagi yorug'lik tezligi nimaga bog'liq?",
        options: ["Manba tezligiga", "Kuzatuvchi tezligiga", "Hech biriga bog'liq emas, barcha ISS larda c ga teng", "Yorug'lik rangiga"],
        answer: 2,
        explain: "Vakuumda yorug'lik tezligi barcha inersial sanoq sistemalarida c = const.",
      },
      {
        q: "Tezligi v = 0.6c bo'lgan kosmik kemadagi soat Yer kuzatuvchisiga nisbatan necha marta sekin yuradi?",
        options: ["0.6 marta", "0.8 marta", "1.25 marta", "1.67 marta"],
        answer: 2,
        explain: "γ = 1 / √(1 - 0.36) = 1 / 0.8 = 1.25 marta sekin yuradi.",
      },
      {
        q: "Sterjen o'z o'qi bo'ylab v = 0.8c tezlikda uchmoqda. Uning laboratoriya sistemasidagi uzunligi xususiy uzunligining necha qismiga teng?",
        options: ["0.8", "0.6", "0.36", "1.67"],
        answer: 1,
        explain: "l = l₀·√(1 - 0.64) = 0.6·l₀.",
      },
      {
        q: "Bir-biriga qarab har biri 0.8c tezlik bilan uchayotgan ikkita elektronning nisbiy tezligi nimaga teng?",
        options: ["1.6c", "c", "0.976c", "0.4c"],
        answer: 2,
        explain: "u = (0.8c + 0.8c) / (1 + 0.8·0.8) = 1.6c / 1.64 ≈ 0.976c < c.",
      },
      {
        q: "Δm = 1 g massaning yo'qolishi (energiyaga aylanishi) qancha energiya ajratadi? (c = 3·10⁸ m/s)",
        options: ["9·10¹⁰ J", "9·10¹³ J", "3·10¹¹ J", "9·10¹⁶ J"],
        answer: 1,
        explain: "E = Δm·c² = 10⁻³ kg · 9·10¹⁶ m²/s² = 9·10¹³ J.",
      },
      {
        q: "Elektron qanday tezlikka erishganda uning kinetik energiyasi tinchlik energiyasiga teng bo'ladi (γ = 2)?",
        options: ["0.5c", "0.707c", "0.866c", "0.99c"],
        answer: 2,
        explain: "E_k = (γ - 1)m₀c² = m₀c² => γ = 2 => √(1 - v²/c²) = 0.5 => v = (√3/2)c ≈ 0.866c.",
      },
      {
        q: "Tinchlik massasi nolga teng bo'lgan zarralar (masalan, fotonlar) qanday tezlik bilan harakatlanadi?",
        options: ["Istalgan tezlikda", "Faqat vakuumda c tezlik bilan", "Tovush tezligida", "Harakatlana olmaydi"],
        answer: 1,
        explain: "E² = (pc)² + (m₀c²)² dan m₀ = 0 da E = pc, bu esa v = pc²/E = c tezlikni anglatadi.",
      },
      {
        q: "Tinch holatdagi hayoti τ₀ = 2.2 mks bo'lgan myuon yuqori tezlikda γ = 5 bilan harakatlansa, uning laboratoriyadagi o'rtacha yashash vaqti qancha?",
        options: ["0.44 mks", "2.2 mks", "11 mks", "55 mks"],
        answer: 2,
        explain: "τ = γ·τ₀ = 5 · 2.2 = 11 mks.",
      },
    ],
    problems: [
      {
        variants: [[0.6, 10], [0.8, 20], [0.6, 5], [0.8, 15]],
        build(i) {
          const [beta, l0] = this.variants[i];
          const l = l0 * Math.sqrt(1 - beta * beta);
          return {
            q: `Xususiy uzunligi l₀ = ${l0} m bo'lgan kosmik zond Yer bo'ylab v = ${beta}c tezlikda uchmoqda. Yerlik kuzatuvchi zond uzunligini necha metr o'lchaydi?`,
            correct: Number(l.toFixed(2)),
            unit: 'm',
            explain: `l = l₀·√(1 - β²) = ${l0}·√(1 - ${(beta * beta).toFixed(2)}) = ${l.toFixed(2)} m.`,
          };
        },
      },
      {
        variants: [[2], [5], [0.5], [10]],
        build(i) {
          const [mg] = this.variants[i];
          const eTJ = (mg * 1e-6 * 9e16) / 1e12;
          return {
            q: `Yadro reaksiyasida Δm = ${mg} mg massa defekti energiyaga aylandi. Qancha energiya (TJ = 10¹² J) ajralgan?`,
            correct: Number(eTJ.toFixed(2)),
            unit: 'TJ',
            explain: `E = Δmc² = ${mg}·10⁻⁶ · 9·10¹⁶ = ${eTJ.toFixed(2)}·10¹² J = ${eTJ.toFixed(2)} TJ.`,
          };
        },
      },
      {
        variants: [[0.8, 12], [0.6, 16], [0.8, 6], [0.6, 8]],
        build(i) {
          const [beta, dt0] = this.variants[i];
          const dt = dt0 / Math.sqrt(1 - beta * beta);
          return {
            q: `v = ${beta}c tezlikda harakatlanayotgan kemada Δt₀ = ${dt0} s o'tdi. Yer soatlarida qancha vaqt (s) o'tadi?`,
            correct: Number(dt.toFixed(1)),
            unit: 's',
            explain: `Δt = Δt₀ / √(1 - ${beta}²) = ${dt0} / ${Math.sqrt(1 - beta * beta).toFixed(2)} = ${dt.toFixed(1)} s.`,
          };
        },
      },
    ],
  },
  {
    id: '7B-1',
    code: '7B.1',
    sectionId: 'sec-7',
    subsectionId: '7B',
    subsectionTitle: 'B. Kvant Fizikasi va Yorug‘lik Kvantlari',
    title: "Issiqlik nurlanishi, Plank gipotezasi va fotonlar",
    subtitle: "Mutlaq qora jism, Stefan-Bolsman va Vin qonunlari, Plank formulasi, foton energiyasi/impulsi",
    theory: {
      overview:
        "XIX asr oxirida klassik elektrodinamika mutlaq qora jismning qisqa to'lqinlar sohasidagi nurlanish energiyasi cheksizlikka intilishini bashorat qilib ('ultrabinafsha halokati'), tajribaga zid keldi. 1900-yilda Maks Plank nurlanish energiyasi uzluksiz emas, balki alohida porsiyalar — kvantlar $E = h\\nu$ ko'rinishida chiqarilishi va yutilishi haqida gipoteza ilgari surdi va kvant fizikasiga asos soldi. Fotonning tinchlik massasi nolga teng, uning energiyasi $E = h\\nu = hc/\\lambda$, impulsi esa $p = E/c = h/\\lambda$.",
      keyLaws: [
        {
          title: "Plank kvant gipotezasi",
          text: "Elektromagnit nurlanish faqat diskret energiya kvantlari ($E = h\\nu$) tarzida tarqaladi va yutiladi, bu yerda $h = 6.626\\cdot 10^{-34}\\text{ J}\\cdot\\text{s}$ Plank doimiysi.",
        },
        {
          title: "Stefan-Bolsman va Vin siljish qonunlari",
          text: "Mutlaq qora jismning integral nurlanish qobiliyati haroratning to'rtinchi darajasiga proporsional ($R = \\sigma T^4$), maksimal nurlanish to'lqin uzunligi esa haroratga teskari proporsional ($\\lambda_{\\max} = b/T$).",
        },
      ],
      formulas: [
        { latex: 'E = h\\nu = \\frac{hc}{\\lambda}', name: 'Foton energiyasi', symbols: 'h — Plank doimiysi, \\nu — chastota' },
        { latex: 'p = \\frac{E}{c} = \\frac{h}{\\lambda}', name: 'Foton impulsi', symbols: '\\lambda — to‘lqin uzunligi' },
        { latex: 'R = \\sigma T^4, \\quad \\lambda_{\\max} = \\frac{b}{T}', name: 'Stefan-Bolsman va Vin qonunlari', symbols: '\\sigma = 5.67\\cdot 10^{-8}, b = 2.898\\cdot 10^{-3}\\text{ m}\\cdot\\text{K}' },
      ],
      constants: [
        { name: "Plank doimiysi", symbol: 'h', value: '6.626 × 10⁻³⁴', unit: 'J·s' },
        { name: "Stefan-Bolsman doimiysi", symbol: 'σ', value: '5.670 × 10⁻⁸', unit: 'Vt/(m²·K⁴)' },
        { name: "Vin siljish doimiysi", symbol: 'b', value: '2.898 × 10⁻³', unit: 'm·K' },
        { name: "1 elektron-volt", symbol: '1 eV', value: '1.602 × 10⁻¹⁹', unit: 'J' },
      ],
      applications: [
        "Optik pirometrlar va teplovizorlar Vin hamda Stefan-Bolsman qonunlariga ko'ra masofadan turib haroratni o'lchaydi.",
        "Astrofizikada yulduzlar spektri maksimumiga qarab ularning sirt harorati aniqlanadi (Quyosh: 5778 K -> ~500 nm).",
        "Relikt mikroto'lqinli nurlanish (2.725 K) Koinotdagi eng mukammal mutlaq qora jism spektrini beradi.",
      ],
      calculator: {
        title: "Plank nurlanishi va foton parametrlari hisoblagichi",
        formulaDisplay: 'E = hc/λ,   λ_max = b/T,   R = σT⁴',
        inputs: [
          { key: 'T', label: 'Qora jism harorati T', symbol: 'T', unit: 'K', min: 500, max: 12000, step: 100, default: 5800 },
          { key: 'lambda', label: 'Foton to‘lqin uzunligi', symbol: 'λ', unit: 'nm', min: 100, max: 2000, step: 10, default: 500 },
        ],
        compute: (v) => {
          const lamMaxNm = (2.898e-3 / v.T) * 1e9;
          const R = 5.67e-8 * Math.pow(v.T, 4);
          const eJ = (6.626e-34 * 2.9979e8) / (v.lambda * 1e-9);
          const eEv = eJ / 1.602e-19;
          const p = 6.626e-34 / (v.lambda * 1e-9);
          return {
            value: `${eEv.toFixed(2)} eV`,
            unit: '',
            summary: `Foton E = ${eJ.toExponential(2)} J, p = ${p.toExponential(2)} kg·m/s | T=${v.T}K da λ_max = ${lamMaxNm.toFixed(0)} nm, R = ${(R / 1e6).toFixed(2)} MVt/m²`,
          };
        },
      },
    },
    simulation: {
      title: "Kvant nurlanish va vodorod spektri 3D simulyatori",
      openSourceUrl: 'sims/effectuall/Quantum_Hydrogen_Atom.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Foton energiyasi va spektr kvantlashuvini 3D laboratoriyada ko'ring va pastdagi Mutlaq qora jism Plank egri chizig'ini o'rganing.",
      alternateSims: [
        { label: "Fotoeffekt 3D laboratoriyasi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Photoelectric_Effect.html' },
      ],
      parametric: {
        mode: 'blackbody_planck',
        title: "Plank spektral taqsimoti va Vin siljishi simulyatori",
        description: "Jism harorati T ni 2000 K dan 9000 K gacha o'zgartirib, Plank egri chizig'i va ko'rinadigan rang o'zgarishini kuzating.",
        controls: [
          { key: 'temp', label: 'Harorat T', unit: 'K', min: 2000, max: 9000, step: 100, value: 5500 },
          { key: 'emissivity', label: 'Qoralik darajasi ε', unit: '', min: 0.2, max: 1.0, step: 0.05, value: 1.0 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Mutlaq qora jism harorati 2 marta oshirilsa, uning to'liq issiqlik nurlanish quvvati necha marta ortadi?",
        options: ["2 marta", "4 marta", "8 marta", "16 marta"],
        answer: 3,
        explain: "Stefan-Bolsman qonuni R = σT⁴ ga ko'ra 2⁴ = 16 marta ortadi.",
      },
      {
        q: "Yulduz harorati 3000 K dan 6000 K gacha ko'tarilsa, maksimal nurlanish to'lqin uzunligi λ_max qanday o'zgaradi?",
        options: ["2 marta ortadi", "2 marta kamayadi", "4 marta kamayadi", "O'zgarmaydi"],
        answer: 1,
        explain: "Vin siljish qonuni λ_max = b/T ga ko'ra harorat 2 marta ortsa, λ_max 2 marta kamayadi.",
      },
      {
        q: "Fotonning tinchlik massasi nimaga teng?",
        options: ["hν / c²", "m_e", "0 (nol)", "h / (cλ)"],
        answer: 2,
        explain: "Fotonning tinchlik massasi nolga teng; u hech qachon tinch holatda bo'lmaydi va faqat c tezlikda uchadi.",
      },
      {
        q: "To'lqin uzunligi λ = 620 nm bo'lgan fotonning energiyasi taxminan necha elektron-voltga (eV) teng?",
        options: ["1 eV", "2 eV", "4 eV", "6.2 eV"],
        answer: 1,
        explain: "E(eV) ≈ 1240 / λ(nm) = 1240 / 620 = 2.0 eV.",
      },
      {
        q: "Qaysi fotonning impulsi eng katta?",
        options: ["Infraqizil", "Qizil", "Yashil", "Rentgen kvanti"],
        answer: 3,
        explain: "p = h / λ; to'lqin uzunligi eng qisqa bo'lgan rentgen fotonining impulsi eng katta.",
      },
      {
        q: "Nima uchun sovuq xona haroratidagi jismlar qorong'ida ko'rinmaydi?",
        options: ["Nurlanmaydi", "Vin qonuniga ko'ra ularning nurlanish maksimumi infraqizil sohada (~10 mkm) yotadi", "Faqat ultrabinafsha chiqaradi", "Havo yutib oladi"],
        answer: 1,
        explain: "T = 300 K da λ_max = 2.9·10⁻³/300 ≈ 9.6 mkm (uzoq infraqizil soha).",
      },
      {
        q: "Lazer nuri 1 sekundda N = 10¹⁸ ta λ = 600 nm foton chiqarsa, uning nurlanish quvvati taxminan qancha? (h ≈ 6.63·10⁻³⁴, c = 3·10⁸)",
        options: ["0.33 Vt", "3.3 Vt", "33 Vt", "0.033 Vt"],
        answer: 0,
        explain: "E₁ = hc/λ ≈ 3.315·10⁻¹⁹ J; P = N·E₁ ≈ 0.33 Vt.",
      },
      {
        q: "Maks Plank qaysi muammoni hal qilish jarayonida energiya kvanti tushunchasini kiritgan?",
        options: ["Fotoeffekt", "Mutlaq qora jism nurlanish spektri", "Yorug'lik sinishi", "Vodorod spektri"],
        answer: 1,
        explain: "1900-yilda Plank mutlaq qora jism nurlanishidagi ultrabinafsha halokatini bartaraf etish uchun E = hν kvantlashuvini kiritdi.",
      },
    ],
    problems: [
      {
        variants: [[620], [413], [310], [248]],
        build(i) {
          const [lamNm] = this.variants[i];
          const eV = 1240 / lamNm;
          return {
            q: `To'lqin uzunligi λ = ${lamNm} nm bo'lgan fotonning energiyasini (eV) hisoblang. (hc ≈ 1240 eV·nm)`,
            correct: Number(eV.toFixed(2)),
            unit: 'eV',
            explain: `E = hc / λ ≈ 1240 / ${lamNm} = ${eV.toFixed(2)} eV.`,
          };
        },
      },
      {
        variants: [[5800], [2900], [7250], [10000]],
        build(i) {
          const [T] = this.variants[i];
          const lamNm = (2.898e6) / T;
          return {
            q: `Mutlaq qora jismning harorati T = ${T} K bo'lsa, uning maksimal nurlanishiga mos to'lqin uzunligi (nm) qancha? (b = 2.898·10⁻³ m·K)`,
            correct: Number(lamNm.toFixed(0)),
            unit: 'nm',
            explain: `λ_max = b / T = 2.898·10⁶ / ${T} = ${lamNm.toFixed(0)} nm.`,
          };
        },
      },
      {
        variants: [[2], [3], [1.5], [4]],
        build(i) {
          const [k] = this.variants[i];
          const ratio = Math.pow(k, 4);
          return {
            q: `Qora jismning absolyut harorati ${k} marta oshirilsa, uning sirtidan nurlanayotgan energiya oqimi zichligi necha marta ortadi?`,
            correct: Number(ratio.toFixed(2)),
            unit: 'marta',
            explain: `R₂ / R₁ = (T₂/T₁)⁴ = ${k}⁴ = ${ratio.toFixed(2)} marta.`,
          };
        },
      },
    ],
  },
  {
    id: '7B-2',
    code: '7B.2',
    sectionId: 'sec-7',
    subsectionId: '7B',
    subsectionTitle: 'B. Kvant Fizikasi va Yorug‘lik Kvantlari',
    title: "Fotoeffekt va yorug'lik bosimi",
    subtitle: "Stoletov qonunlari, Eynshteynning fotoeffekt tenglamasi, fotoelementlar, Lebedev tajribasi",
    theory: {
      overview:
        "Fotoeffekt — yorug'lik ta'sirida moddadan elektronlarning ajralib chiqishi hodisasi (tashqi fotoeffekt metallardan vakuumga chiqish, ichki fotoeffekt esa yarimo'tkazgichda o'tkazuvchanlik ortishi). A.G. Stoletov tajribalari fotoelektronlarning maksimal tezligi yorug'lik intensivligiga emas, faqat uning chastotasiga bog'liq ekanligini ko'rsatdi. 1905-yilda Eynshteyn buni energiya saqlanish qonuni asosida tushuntirdi: bitta foton energiyasi $h\\nu$ elektronning chiqish ishi $A_{\\text{chiq}}$ va maksimal kinetik energiyasiga sarflanadi: $h\\nu = A_{\\text{chiq}} + E_{k\\max}$. Fotonlar impuls tashiganligi sababli yorug'lik sirtga bosim beradi ($p = (1+R)I/c$) — buni P.N. Lebedev nozik buralma tarozida tajriba yo'li bilan o'lchagan.",
      keyLaws: [
        {
          title: "Eynshteynning fotoeffekt tenglamasi",
          text: "$h\\nu = A_{\\text{chiq}} + \\frac{m v_{\\max}^2}{2} = A_{\\text{chiq}} + e U_{\\text{to‘xt}}$. Fotoeffekt sodir bo'lishi uchun $\\nu \\ge \\nu_{\\min} = A_{\\text{chiq}}/h$ (qizil chegara) bajarilishi shart.",
        },
        {
          title: "Stoletov qonunlari",
          text: "1) To'yinish fototoki tushayotgan yorug'lik intensivligiga to'g'ri proporsional; 2) Fotoelektronlarning maksimal kinetik energiyasi faqat chastotaga chiziqli bog'liq; 3) Har bir metall uchun qizil chegara mavjud; 4) Fotoeffekt deyarli oniy ($< 10^{-9}\\text{ s}$) boshlanadi.",
        },
        {
          title: "Lebedev yorug'lik bosimi qonuni",
          text: "Qaytarish koeffitsienti $R$ bo'lgan sirtga normal tushayotgan $I$ intensivlikli nurning bosimi $P = (1 + R)I / c$ (ko'zgu sirt uchun $2I/c$, qora sirt uchun $I/c$).",
        },
      ],
      formulas: [
        { latex: 'h\\nu = A_{\\text{chiq}} + \\frac{m_e v_{\\max}^2}{2}', name: 'Eynshteyn fotoeffekt tenglamasi', symbols: 'A_{chiq} — chiqish ishi' },
        { latex: 'E_{k\\max} = e U_{\\text{to‘xt}}', name: "To'xtatuvchi kuchlanish", symbols: 'U_{to‘xt} — tokni 0 ga tushiruvchi teskari kuchlanish' },
        { latex: '\\lambda_{\\max} = \\frac{hc}{A_{\\text{chiq}}}', name: 'Fotoeffektning qizil chegarasi', symbols: '\\lambda > \\lambda_{max} da fotoeffekt bo‘lmaydi' },
        { latex: 'P_{\\text{yor}} = (1 + R) \\frac{I}{c}', name: "Yorug'lik bosimi", symbols: 'R — qaytarish koeffitsienti (0 ≤ R ≤ 1)' },
      ],
      constants: [
        { name: "Seziy (Cs) chiqish ishi", symbol: 'A_Cs', value: '1.9', unit: 'eV' },
        { name: "Rux (Zn) chiqish ishi", symbol: 'A_Zn', value: '4.3', unit: 'eV' },
        { name: "Platina (Pt) chiqish ishi", symbol: 'A_Pt', value: '5.3', unit: 'eV' },
      ],
      applications: [
        "Quyosh panellari (fotovoltaik elementlar) ichki fotoeffekt va p-n o'tish orqali quyosh nurini elektr energiyasiga aylantiradi.",
        "Avtomatik yoritish datchiklari, shtrix-kod skanerlari va tungi ko'rish fotokuchaytirgichlari fotoeffektga asoslangan.",
        "Koinot yelkanlari (solar sails) Lebedev yorug'lik bosimidan yoqilg'isiz sayyoralararo parvozda foydalanadi.",
      ],
      calculator: {
        title: "Fotoeffekt va to'xtatuvchi kuchlanish kalkulyatori",
        formulaDisplay: 'hν = A_chiq + e·U_to‘xt,   λ₀ = hc / A_chiq',
        inputs: [
          { key: 'lambda', label: 'Yorug‘lik to‘lqin uzunligi', symbol: 'λ', unit: 'nm', min: 150, max: 800, step: 10, default: 300 },
          { key: 'work', label: 'Metall chiqish ishi A_chiq', symbol: 'A', unit: 'eV', min: 1.5, max: 6.0, step: 0.1, default: 2.1 },
        ],
        compute: (v) => {
          const ePhoton = 1240 / v.lambda;
          const lam0 = 1240 / v.work;
          if (ePhoton < v.work) {
            return {
              value: 'Fotoeffekt yo‘q',
              unit: '',
              summary: `Foton energiyasi ${ePhoton.toFixed(2)} eV < A = ${v.work} eV. Qizil chegara λ₀ = ${lam0.toFixed(0)} nm.`,
            };
          }
          const ek = ePhoton - v.work;
          const vmaxKmS = Math.sqrt((2 * ek * 1.602e-19) / 9.109e-31) / 1000;
          return {
            value: `${ek.toFixed(2)} V`,
            unit: '',
            summary: `To'xtatuvchi kuchlanish U_to'xt = ${ek.toFixed(2)} V | E_k = ${ek.toFixed(2)} eV | v_max = ${vmaxKmS.toFixed(0)} km/s | Qizil chegara λ₀ = ${lam0.toFixed(0)} nm`,
          };
        },
      },
    },
    simulation: {
      title: "Fotoeffekt 3D virtual laboratoriyasi (Effectuall)",
      openSourceUrl: 'sims/effectuall/Quantum_Photoelectric_Effect.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Katod materialini, yorug'lik to'lqin uzunligini, intensivlikni va batareya kuchlanishini o'zgartirib, VAX grafigini 3D stendda kuzating.",
      alternateSims: [
        { label: "Elektron-nur trubkasi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html' },
      ],
      parametric: {
        mode: 'photoelectric',
        title: "Fotoeffekt va to'xtatuvchi kuchlanish parametrik simulyatori",
        description: "Chastota (to'lqin uzunligi), nurlanish intensivligi va tormozlovchi kuchlanishni boshqarib elektronlar harakatini kuzating.",
        controls: [
          { key: 'lambda', label: 'To‘lqin uzunligi λ', unit: 'nm', min: 200, max: 700, step: 10, value: 360 },
          { key: 'work', label: 'Chiqish ishi A', unit: 'eV', min: 1.8, max: 4.5, step: 0.1, value: 2.1 },
          { key: 'intensity', label: 'Intensivlik', unit: '%', min: 10, max: 100, step: 10, value: 70 },
          { key: 'voltage', label: 'Kuchlanish U', unit: 'V', min: -3.0, max: 3.0, step: 0.1, value: 0.5 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Yorug'lik intensivligi 3 marta oshirilsa (chastota o'zgarmas), fotoelektronlarning maksimal kinetik energiyasi qanday o'zgaradi?",
        options: ["3 marta ortadi", "√3 marta ortadi", "O'zgarmaydi", "9 marta ortadi"],
        answer: 2,
        explain: "E_k,max = hν - A_chiq faqat yorug'lik chastotasiga va metall chiqish ishiga bog'liq; intensivlik faqat fotonlar sonini (fototokni) oshiradi.",
      },
      {
        q: "Chiqish ishi 2 eV bo'lgan metallga energiyasi 4.5 eV bo'lgan fotonlar tushmoqda. Fotoeffektni to'xtatuvchi kuchlanish qancha?",
        options: ["6.5 V", "2.5 V", "2.0 V", "4.5 V"],
        answer: 1,
        explain: "e·U_to'xt = E_foton - A = 4.5 - 2.0 = 2.5 eV => U_to'xt = 2.5 V.",
      },
      {
        q: "Fotoeffektning qizil chegarasi nimani bildiradi?",
        options: ["Eng kuchli tok beradigan qizil nur", "Fotoeffekt kuzatilishi mumkin bo'lgan minimal chastota (yoki maksimal λ)", "Metallning erish harorati", "Faqat qizil fotonlar energiyasi"],
        answer: 1,
        explain: "ν_min = A_chiq/h dan kichik chastotalarda foton energiyasi elektronni metalldan chiqarishga yetmaydi.",
      },
      {
        q: "Ko'zgu sirtiga (R = 1) tushayotgan yorug'lik bosimi xuddi shu intensivlikdagi mutlaq qora sirtga (R = 0) tushgan bosimdan necha marta katta?",
        options: ["Teng", "2 marta katta", "4 marta katta", "2 marta kichik"],
        answer: 1,
        explain: "P = (1 + R)·I/c bo'lgani uchun ko'zgu sirtda (1+1) = 2, qora sirtda (1+0) = 1 => 2 marta katta.",
      },
      {
        q: "P.N. Lebedev tajribasi nimani isbotladi?",
        options: ["Yorug'likning tezligini", "Yorug'likning sirtlarga mexanik bosim ko'rsatishini", "Atom yadrosi borligini", "Supero'tkazuvchanlikni"],
        answer: 1,
        explain: "Lebedev nozik buralma tarozida yorug'likning qora va ko'zgu qanotchalarga beradigan bosimini o'lchab, foton impulsini tasdiqladi.",
      },
      {
        q: "Katodga tushayotgan yorug'likning intensivligi 2 marta kamaytirilsa, to'yinish fototoki qanday o'zgaradi?",
        options: ["2 marta kamayadi", "4 marta kamayadi", "O'zgarmaydi", "2 marta ortadi"],
        answer: 0,
        explain: "Stoletov qonuniga ko'ra to'yinish fototoki katodga tushayotgan yorug'lik oqimiga (intensivligiga) to'g'ri proporsional.",
      },
      {
        q: "Chiqish ishi A = 3.1 eV bo'lgan metall uchun fotoeffektning qizil chegarasi λ_max nechaga teng? (hc ≈ 1240 eV·nm)",
        options: ["200 nm", "400 nm", "620 nm", "310 nm"],
        answer: 1,
        explain: "λ_max = hc / A = 1240 / 3.1 = 400 nm.",
      },
      {
        q: "Kometa dumining Quyoshdan teskari tomonga yo'nalishiga sabab bo'luvchi ikkita asosiy omil nimalar?",
        options: ["Magnit maydon va Yer tortishishi", "Quyosh shamoli va Lebedev yorug'lik bosimi", "Koriolis kuchi va ishqalanish", "Kometaning aylanishi"],
        answer: 1,
        explain: "Yengil gaz va chang zarralari Quyoshdan chiqayotgan yorug'lik bosimi hamda quyosh shamoli ta'sirida Quyoshdan nariga itariladi.",
      },
    ],
    problems: [
      {
        variants: [[248, 2.0], [310, 1.8], [200, 4.2], [400, 1.9]],
        build(i) {
          const [lam, A] = this.variants[i];
          const u = 1240 / lam - A;
          return {
            q: `Chiqish ishi A = ${A} eV bo'lgan metall sirtiga λ = ${lam} nm to'lqin uzunlikli yorug'lik tushmoqda. Fotoelektronlarning to'xtatuvchi kuchlanishini (V) toping. (hc ≈ 1240 eV·nm)`,
            correct: Number(u.toFixed(2)),
            unit: 'V',
            explain: `E_f = 1240 / ${lam} = ${(1240 / lam).toFixed(2)} eV; U_to'xt = (${(1240 / lam).toFixed(2)} - ${A}) = ${u.toFixed(2)} V.`,
          };
        },
      },
      {
        variants: [[2.0], [4.0], [2.5], [1.55]],
        build(i) {
          const [A] = this.variants[i];
          const lam0 = 1240 / A;
          return {
            q: `Chiqish ishi ${A} eV bo'lgan katod uchun fotoeffektning qizil chegarasiga mos to'lqin uzunligini (nm) hisoblang. (hc ≈ 1240 eV·nm)`,
            correct: Number(lam0.toFixed(0)),
            unit: 'nm',
            explain: `λ_max = 1240 / ${A} = ${lam0.toFixed(0)} nm.`,
          };
        },
      },
      {
        variants: [[1200, 1], [1500, 0], [900, 0.5], [600, 1]],
        build(i) {
          const [I, R] = this.variants[i];
          const P = ((1 + R) * I) / 3e8;
          const uPa = P * 1e6;
          return {
            q: `Intensivligi I = ${I} Vt/m² yorug'lik qaytarish koeffitsienti R = ${R} bo'lgan sirtga tik tushmoqda. Yorug'lik bosimini mkPa (10⁻⁶ Pa) da toping.`,
            correct: Number(uPa.toFixed(2)),
            unit: 'mkPa',
            explain: `P = (1 + ${R})·${I} / (3·10⁸) = ${uPa.toFixed(2)}·10⁻⁶ Pa = ${uPa.toFixed(2)} mkPa.`,
          };
        },
      },
    ],
  },
  {
    id: '7C-1',
    code: '7C.1',
    sectionId: 'sec-7',
    subsectionId: '7C',
    subsectionTitle: 'C. Atom va Yadro Fizikasi',
    title: "Atom tuzilishi, Bor postulatlari va lazerlar",
    subtitle: "Tomson va Rezerford modellari, Bor postulatlari, energetik sathlar, spektrlar, lazerlar",
    theory: {
      overview:
        "1911-yilda Ernest Rezerford α-zarralarni oltin folgada sochish tajribasi orqali atomning markazida musbat zaryadlangan kichik og'ir yadro va atrofida elektronlar aylanuvchi planetar modelini kashf etdi. Klassik elektrodinamika bo'yicha bunday elektron tezda yadroga qulashi kerak edi. Nils Bor 1913-yilda kvant postulatlari bilan atom turg'unligini tushuntirdi: elektron faqat ruxsat etilgan statsionar orbitalarda nurlanmasdan aylanadi ($mvr = n\\hbar$) va bir sathdan boshqasiga sakragandagina $h\\nu = |E_m - E_n|$ kvant chiqaradi yoki yutadi. Aholining teskari bandligi (inversiya) va majburiy nurlanishga asoslangan lazerlar esa fazoviy va vaqt bo'yicha kogerent monoxromatik nur yaratadi.",
      keyLaws: [
        {
          title: "Borning I va II postulatlari",
          text: "1) Atom ma'lum statsionar energetik holatlarda nurlanish chiqarmay uzoq tura oladi; 2) Energiyasi $E_m$ sathdan $E_n$ sathga o'tganda $h\\nu = E_m - E_n$ energiyali foton nurlanadi yoki yutiladi.",
        },
        {
          title: "Vodorod atomining energetik sathlari",
          text: "$n$-orbitadagi elektronning to'liq energiyasi $E_n = -13.6 / n^2\\text{ eV}$, radiusi esa $r_n = r_1 n^2$ ($r_1 = 0.0529\\text{ nm}$) qonuniga bo'ysunadi.",
        },
        {
          title: "Lazer ishlash prinsipi (Majburiy nurlanish)",
          text: "Tashqi foton ta'sirida uyg'ongan atom aynan o'sha yo'nalish, faza va chastotaga ega egizak foton chiqaradi (Einsteinning A va B koeffitsientlari).",
        },
      ],
      formulas: [
        { latex: 'E_n = -\\frac{13.6\\text{ eV}}{n^2}', name: 'Vodorod atomi energetik sathlari', symbols: 'n = 1, 2, 3... — bosh kvant soni' },
        { latex: 'h\\nu = E_m - E_n', name: 'Bor chastota sharti', symbols: 'nurlanish m > n, yutilish n < m' },
        { latex: '\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n^2} - \\frac{1}{m^2}\\right)', name: 'Ridberg-Balmer formulasi', symbols: 'R_H = 1.097\\cdot 10^7\\text{ m}^{-1}' },
        { latex: 'm_e v r_n = n \\frac{h}{2\\pi}', name: 'Impuls momentining kvantlanishi', symbols: 'r_n = 0.0529\\cdot n^2\\text{ nm}' },
      ],
      constants: [
        { name: "Vodorod atomining ionizatsiya energiyasi", symbol: 'E_ion', value: '13.6', unit: 'eV' },
        { name: "Birinchi Bor radiusi", symbol: 'a_0', value: '5.292 × 10⁻¹¹', unit: 'm' },
        { name: "Ridberg doimiysi", symbol: 'R_H', value: '1.0974 × 10⁷', unit: 'm⁻¹' },
      ],
      applications: [
        "Spektral tahlil metallurgiya, kriminalistika va astrofizikada elementlar tarkibini milliarddan bir ulush aniqlikda belgilaydi.",
        "Tibbiy, sanoat va aloqa lazerlari (CO₂, YAG, diod lazerlar) jarrohlik, mikrochip litografiyasi va optik internetda qo'llaniladi.",
        "Seziy-133 atom o'tish chastotasiga asoslangan atom soatlari sekundning global etalonini ta'minlaydi.",
      ],
      calculator: {
        title: "Bor vodorod atomi sath va spektr hisoblagichi",
        formulaDisplay: 'ΔE = 13.6 · (1/n₁² − 1/n₂²) eV,   λ = 1240 / ΔE',
        inputs: [
          { key: 'n2', label: 'Yuqori energetik sath n₂', symbol: 'n₂', unit: '', min: 2, max: 8, step: 1, default: 3 },
          { key: 'n1', label: 'Quyi energetik sath n₁', symbol: 'n₁', unit: '', min: 1, max: 7, step: 1, default: 2 },
        ],
        compute: (v) => {
          if (v.n2 <= v.n1) return { value: 'n₂ > n₁ tanlang', unit: '', summary: 'Nurlanish o‘tishi uchun yuqori sath n₂ pastki sath n₁ dan katta bo‘lishi kerak.' };
          const dE = 13.6 * (1 / (v.n1 * v.n1) - 1 / (v.n2 * v.n2));
          const lam = 1240 / dE;
          const series = v.n1 === 1 ? 'Layman (UB)' : v.n1 === 2 ? 'Balmer (Ko‘rinadigan)' : 'Pashen (IQ)';
          return {
            value: `${dE.toFixed(2)} eV`,
            unit: '',
            summary: `To'lqin uzunligi λ = ${lam.toFixed(1)} nm | Seriya: ${series} | r(n₂) = ${(0.0529 * v.n2 * v.n2).toFixed(2)} nm`,
          };
        },
      },
    },
    simulation: {
      title: "Bor atom modeli va vodorod energetik sathlari 3D simulyatori",
      openSourceUrl: 'sims/effectuall/Quantum_The_Bohr_Atom.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Borning statsionar orbitalarini va kvant o'tishlarida foton chiqarilishini 3D fazoda kuzating.",
      alternateSims: [
        { label: "Vodorod atomi kvant orbitallari (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Hydrogen_Atom.html' },
      ],
      parametric: {
        mode: 'bohr_atom',
        title: "Bor atomi kvant o'tishlari va spektr simulyatori",
        description: "Elektronning boshlang'ich va yakuniy energetik sathlarini (n₁, n₂) tanlab foton chiqarilishini/yutilishini kuzating.",
        controls: [
          { key: 'nFrom', label: 'Boshlang‘ich sath n', unit: '', min: 1, max: 5, step: 1, value: 4 },
          { key: 'nTo', label: 'Yakuniy sath m', unit: '', min: 1, max: 5, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Rezerfordning α-zarralarni oltin folgada sochish tajribasi nimani kashf qildi?",
        options: ["Elektron massasini", "Atom markazida kichik, zich, musbat zaryadli yadro borligini", "Neytron mavjudligini", "Fotoeffektni"],
        answer: 1,
        explain: "Ayrim α-zarralarning 180° ga yaqin orqaga qaytishi atom massasining deyarli barchasi musbat zaryadli mitti yadroda to'planganini ko'rsatdi.",
      },
      {
        q: "Vodorod atomi n = 2 sathdan asosiy n = 1 sathga o'tganda qancha energiyali foton chiqaradi? (E₁ = -13.6 eV)",
        options: ["3.4 eV", "10.2 eV", "13.6 eV", "1.51 eV"],
        answer: 1,
        explain: "ΔE = E₂ - E₁ = (-3.4) - (-13.6) = 10.2 eV.",
      },
      {
        q: "Atomning energetik sathlari orasidagi o'tishda 4 ta ruxsat etilgan sath mavjud bo'lsa, uyg'onishdan so'ng nechta turli spektr chizig'i chiqishi mumkin?",
        options: ["3", "4", "6", "8"],
        answer: 2,
        explain: "Kombinatsiyalar soni N = n(n - 1)/2 = 4·3/2 = 6 ta chiziq.",
      },
      {
        q: "Vodorod atomi 2-statsionar orbitasining radiusi 1-Bor radiusidan necha marta katta?",
        options: ["2 marta", "4 marta", "8 marta", "16 marta"],
        answer: 1,
        explain: "r_n = r₁·n² bo'lgani uchun r₂ = 4·r₁.",
      },
      {
        q: "Lazer nurlanishini oddiy lampochka nuridan ajratib turuvchi asosiy xossalar nimalar?",
        options: ["Yuqori kogerentlik, monoxromatiklik va tor yo'nalganlik", "Faqat qizil rangda bo'lishi", "Past intensivlik", "Dispersiyaga uchramasligi"],
        answer: 0,
        explain: "Majburiy nurlanish tufayli barcha fotonlar bir xil faza, chastota va yo'nalishga ega bo'ladi.",
      },
      {
        q: "Qaysi spektr turi siyraklashtirilgan atomar gazlar tomonidan chiqariladi?",
        options: ["Uzluksiz spektr", "Chiziqli nurlanish spektri", "Polosali spektr", "Rentgen tormoz spektri"],
        answer: 1,
        explain: "Izolyatsiyalangan atomlardagi diskret sathlar orasidagi o'tishlar aniq chastotali chiziqli spektrni hosil qiladi.",
      },
      {
        q: "Vodorod atomini n = 2 holatdan to'liq ionlashtirish (elektronni uzib olish) uchun qancha energiya kerak?",
        options: ["13.6 eV", "10.2 eV", "3.4 eV", "1.51 eV"],
        answer: 2,
        explain: "E₂ = -13.6 / 2² = -3.4 eV; uni E = 0 gacha chiqarish uchun +3.4 eV kerak.",
      },
      {
        q: "Bor postulatiga ko'ra elektronning statsionar orbitadagi burchak momenti qanday kvantlanadi?",
        options: ["L = n·h", "L = n·h/(2π)", "L = h/n", "L = n²·h"],
        answer: 1,
        explain: "mvr = nħ = n·h/(2π).",
      },
    ],
    problems: [
      {
        variants: [[2, 1], [3, 2], [4, 2], [3, 1]],
        build(i) {
          const [n2, n1] = this.variants[i];
          const dE = 13.6 * (1 / (n1 * n1) - 1 / (n2 * n2));
          return {
            q: `Vodorod atomi n₂ = ${n2} sathdan n₁ = ${n1} sathga o'tganda chiqariladigan foton energiyasini (eV) hisoblang. (E_n = -13.6/n² eV)`,
            correct: Number(dE.toFixed(2)),
            unit: 'eV',
            explain: `ΔE = 13.6·(1/${n1}² - 1/${n2}²) = ${dE.toFixed(2)} eV.`,
          };
        },
      },
      {
        variants: [[3], [4], [5], [6]],
        build(i) {
          const [n] = this.variants[i];
          const lines = (n * (n - 1)) / 2;
          return {
            q: `Vodorod atomlari n = ${n} energetik sathgacha uyg'otilgan. Ularning asosiy holatga qaytishida spektrda maksimal nechta turli chiziq kuzatiladi?`,
            correct: lines,
            unit: 'ta',
            explain: `N = n(n - 1)/2 = ${n}·${n - 1}/2 = ${lines} ta chiziq.`,
          };
        },
      },
      {
        variants: [[2], [3], [4], [5]],
        build(i) {
          const [n] = this.variants[i];
          const En = -13.6 / (n * n);
          return {
            q: `Vodorod atomida elektron n = ${n} statsionar holatda turibdi. Uni ionlashtirish uchun minimal necha eV energiya zarur?`,
            correct: Number((-En).toFixed(2)),
            unit: 'eV',
            explain: `E_${n} = -13.6 / ${n}² = ${En.toFixed(2)} eV; ionizatsiya uchun |E_${n}| = ${(-En).toFixed(2)} eV kerak.`,
          };
        },
      },
    ],
  },
  {
    id: '7C-2',
    code: '7C.2',
    sectionId: 'sec-7',
    subsectionId: '7C',
    subsectionTitle: 'C. Atom va Yadro Fizikasi',
    title: "Atom yadrosi, massa defekti va bog'lanish energiyasi",
    subtitle: "Proton-neytron modeli, izotoplar, massa defekti, bog'lanish energiyasi, kuchli o'zaro ta'sir",
    theory: {
      overview:
        "Atom yadrosi musbat zaryadli protonlar ($Z$ ta) va elektroneytral neytronlardan ($N = A - Z$ ta) tashkil topgan; birgalikda ular nuklonlar deb ataladi ($A$ — massa soni). Protonlari soni bir xil, lekin neytronlari soni turlicha bo'lgan atomlar izotoplar deyiladi (masalan, vodorodning deyteriy $^2_1\\text{H}$ va tritiy $^3_1\\text{H}$ izotoplari). Yadroning massasi $M_{\\text{yadro}}$ tarkibidagi erkin nuklonlar massalari yig'indisidan doimo kichik — bu farq massa defekti $\\Delta m = Z m_p + N m_n - M_{\\text{yadro}}$ deb ataladi va $\\Delta E = \\Delta m c^2$ yadro bog'lanish energiyasini beradi. Protonlarning Kulon itarishishini yenguvchi qisqa ta'sir doirali (~$10^{-15}\\text{ m}$) kuchli yadroviy o'zaro ta'sir yadroni barqaror ushlab turadi.",
      keyLaws: [
        {
          title: "Yadro tarkibi va izotoplar",
          text: "$^A_Z X$ belgilashda $Z$ — zaryad soni (protonlar va neytral atomdagi elektronlar soni), $A$ — massa soni (nuklonlar yig'indisi), $N = A - Z$ — neytronlar soni.",
        },
        {
          title: "Massa defekti va bog'lanish energiyasi",
          text: "Yadroni alohida nuklonlarga ajratish uchun zarur energiya $E_{\\text{bog‘}} = \\Delta m c^2 \\approx 931.5 \\cdot \\Delta m\\text{ (m.a.b.) MeV}$ ga teng.",
        },
        {
          title: "Kuchli yadroviy o'zaro ta'sir xossalari",
          text: "Yadro kuchlari Kulon kuchidan ~100 marta kuchli, zaryadga bog'liq emas ($p-p, n-n, p-n$ bir xil), lekin juda qisqa masofada (~1–2 fm) ta'sir ko'rsatib to'yinish xossasiga ega.",
        },
      ],
      formulas: [
        { latex: 'A = Z + N', name: 'Nuklonlar (massa) soni', symbols: 'Z — protonlar, N — neytronlar soni' },
        { latex: '\\Delta m = Z m_p + (A - Z) m_n - M_{\\text{yad}}', name: 'Massa defekti', symbols: '1 m.a.b. = 1.6605\\cdot 10^{-27}\\text{ kg}' },
        { latex: 'E_{\\text{bog‘}} = \\Delta m \\cdot c^2 = 931.5\\text{ MeV/m.a.b.} \\cdot \\Delta m', name: 'Bog‘lanish energiyasi', symbols: '\\varepsilon = E_{bog‘}/A — solishtirma bog‘lanish energiyasi' },
        { latex: 'R = R_0 A^{1/3}', name: 'Atom yadrosi radiusi', symbols: 'R_0 \\approx 1.2\\text{ fm} = 1.2\\cdot 10^{-15}\\text{ m}' },
      ],
      constants: [
        { name: "Proton massasi", symbol: 'm_p', value: '1.007276', unit: 'm.a.b.' },
        { name: "Neytron massasi", symbol: 'm_n', value: '1.008665', unit: 'm.a.b.' },
        { name: "1 massa atom birligi energiyasi", symbol: '1 u·c²', value: '931.49', unit: 'MeV' },
      ],
      applications: [
        "Temir-56 ($^{56}_{26}\\text{Fe}$) atrofidagi yadrolar eng yuqori solishtirma bog'lanish energiyasiga (~8.8 MeV/nuklon) ega, shuning uchun ular eng barqarordir.",
        "Mass-spektrometriya va radiouglerod ($^{14}\\text{C}$) sanalash usullari izotoplar nisbati orqali qadimiy ashyolar yoshini belgilaydi.",
        "Yadro magnit rezonansi (MRT tibbiy tomografiya) proton yadrolarining spin xususiyatlaridan tasvir yaratadi.",
      ],
      calculator: {
        title: "Massa defekti va bog'lanish energiyasi kalkulyatori",
        formulaDisplay: 'Δm = Z·m_H + N·m_n − M_atom,   E = Δm · 931.5 MeV',
        inputs: [
          { key: 'Z', label: 'Protonlar soni Z', symbol: 'Z', unit: '', min: 1, max: 92, step: 1, default: 2 },
          { key: 'A', label: 'Massa soni A', symbol: 'A', unit: '', min: 2, max: 238, step: 1, default: 4 },
          { key: 'Matom', label: 'Atom massasi M (m.a.b.)', symbol: 'M', unit: 'u', min: 1.5, max: 238.5, step: 0.001, default: 4.0026 },
        ],
        compute: (v) => {
          const N = Math.max(0, v.A - v.Z);
          const mH = 1.007825;
          const mn = 1.008665;
          const dm = v.Z * mH + N * mn - v.Matom;
          const eBog = dm * 931.49;
          const eps = v.A > 0 ? eBog / v.A : 0;
          return {
            value: `${eBog.toFixed(2)} MeV`,
            unit: '',
            summary: `Neytronlar N = ${N} | Δm = ${dm.toFixed(5)} m.a.b. | Solishtirma bog'lanish ε = ${eps.toFixed(2)} MeV/nuklon`,
          };
        },
      },
    },
    simulation: {
      title: "Atom yadrosi tuzilishi va proton-neytron kuchlari",
      openSourceUrl: 'sims/effectuall/Quantum_The_Bohr_Atom.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Atom markaziy modeli bilan tanishing va pastdagi Yadro bog'lanish energiyasi hamda massa defekti simulatorini sinab ko'ring.",
      alternateSims: [
        { label: "Vodorod atomi 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Hydrogen_Atom.html' },
      ],
      parametric: {
        mode: 'nucleus_binding',
        title: "Yadro nuklonlari va solishtirma bog'lanish energiyasi egri chizig'i",
        description: "Z va A nuklon sonlarini o'zgartirib, kuchli o'zaro ta'sir va temir cho'qqisigacha bo'lgan barqarorlikni kuzating.",
        controls: [
          { key: 'Z', label: 'Protonlar Z', unit: '', min: 1, max: 92, step: 1, value: 6 },
          { key: 'N', label: 'Neytronlar N', unit: '', min: 0, max: 146, step: 1, value: 6 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Uran-235 ($^{235}_{92}\\text{U}$) yadrosi tarkibida nechta proton va nechta neytron bor?",
        options: ["92 proton, 235 neytron", "92 proton, 143 neytron", "143 proton, 92 neytron", "235 proton, 92 neytron"],
        answer: 1,
        explain: "Z = 92 ta proton, N = A - Z = 235 - 92 = 143 ta neytron.",
      },
      {
        q: "Izotoplar bir-biridan nimasi bilan farq qiladi?",
        options: ["Protonlar soni bilan", "Kimyoviy xossalari bilan", "Neytronlar soni (va massa soni A) bilan", "Elektron qobig'i bilan"],
        answer: 2,
        explain: "Izotoplarda Z bir xil (bir kimyoviy element), lekin neytronlar soni N va demak A har xil.",
      },
      {
        q: "Yadro kuchlari qanday xususiyatga ega?",
        options: ["Cheksiz uzoq masofada ta'sir qiladi", "Faqat musbat zaryadlar orasida itarishadi", "Juda qisqa masofada (~10⁻¹⁵ m) kuchli tortishish kuchi", "Gravitatsiyadan kuchsiz"],
        answer: 2,
        explain: "Kuchli yadroviy kuchlar ~10⁻¹⁵ m radiusda proton va neytronlarni zaryadidan qat'i nazar tortib turadi.",
      },
      {
        q: "Yadroning massa defekti Δm = 0.03 m.a.b. bo'lsa, uning bog'lanish energiyasi taxminan qancha? (1 m.a.b. ≈ 931.5 MeV)",
        options: ["9.31 MeV", "27.95 MeV", "93.15 MeV", "0.03 MeV"],
        answer: 1,
        explain: "E_bog' = 0.03 · 931.5 ≈ 27.95 MeV.",
      },
      {
        q: "Quyidagi elementlarning qaysi biri eng katta solishtirma bog'lanish energiyasiga (~8.8 MeV/nuklon) ega?",
        options: ["Vodorod (A=1)", "Geliy (A=4)", "Temir (A=56)", "Uran (A=238)"],
        answer: 2,
        explain: "Solishtirma bog'lanish energiyasi egri chizig'ining maksimumi temir-nikel sohasida (A ≈ 56–62) joylashgan.",
      },
      {
        q: "Neytronni qaysi olim kashf etgan?",
        options: ["E. Rezerford (1911)", "J. Chedvik (1932)", "N. Bor (1913)", "J. Tomson (1897)"],
        answer: 1,
        explain: "1932-yilda Jeyms Chedvik berilliyni α-zarralar bilan bombardimon qilish orqali neytronni kashf etgan.",
      },
      {
        q: "Agar 2 ta og'ir proton va 2 ta neytron birlashib geliy-4 yadrosini hosil qilsa, yadroning massasi alohida nuklonlar massalari yig'indisidan qanday bo'ladi?",
        options: ["Katta bo'ladi", "Teng bo'ladi", "Kichik bo'ladi (massa defekti qadar)", "Nol bo'ladi"],
        answer: 2,
        explain: "Bog'langan tizim energiya chiqargani uchun E = mc² ga binoan uning massasi Δm ga kamayadi.",
      },
      {
        q: "Deyteriy $^2_1\\text{H}$ yadrosining bog'lanish energiyasi 2.22 MeV bo'lsa, bitta nuklonga to'g'ri keladigan solishtirma bog'lanish energiyasi qancha?",
        options: ["4.44 MeV", "2.22 MeV", "1.11 MeV", "0.55 MeV"],
        answer: 2,
        explain: "ε = E_bog' / A = 2.22 / 2 = 1.11 MeV/nuklon.",
      },
    ],
    problems: [
      {
        variants: [[238, 92], [14, 6], [60, 27], [137, 55]],
        build(i) {
          const [A, Z] = this.variants[i];
          const N = A - Z;
          return {
            q: `Izotop belgilanishi A = ${A}, Z = ${Z}. Bu yadroda nechta neytron mavjud?`,
            correct: N,
            unit: 'ta',
            explain: `N = A - Z = ${A} - ${Z} = ${N} ta neytron.`,
          };
        },
      },
      {
        variants: [[0.03038], [0.10], [0.1419], [1.916]],
        build(i) {
          const [dm] = this.variants[i];
          const MeV = dm * 931.5;
          return {
            q: `Yadroning massa defekti Δm = ${dm} m.a.b. ga teng. Yadroning bog'lanish energiyasini (MeV) hisoblang. (1 m.a.b. = 931.5 MeV)`,
            correct: Number(MeV.toFixed(1)),
            unit: 'MeV',
            explain: `E_bog' = Δm · 931.5 = ${dm} · 931.5 = ${MeV.toFixed(1)} MeV.`,
          };
        },
      },
      {
        variants: [[28.3, 4], [92.16, 12], [127.6, 16], [492, 56]],
        build(i) {
          const [E, A] = this.variants[i];
          const eps = E / A;
          return {
            q: `Massa soni A = ${A} bo'lgan yadroning bog'lanish energiyasi ${E} MeV bo'lsa, solishtirma bog'lanish energiyasi (MeV/nuklon) qancha?`,
            correct: Number(eps.toFixed(2)),
            unit: 'MeV',
            explain: `ε = E / A = ${E} / ${A} = ${eps.toFixed(2)} MeV/nuklon.`,
          };
        },
      },
    ],
  },
  {
    id: '7C-3',
    code: '7C.3',
    sectionId: 'sec-7',
    subsectionId: '7C',
    subsectionTitle: 'C. Atom va Yadro Fizikasi',
    title: "Radioaktivlik va yarim yemirilish qonuni",
    subtitle: "α, β, γ nurlanishlar, radioaktiv yemirilish qonuni, yarim yemirilish davri, dozimetriya",
    theory: {
      overview:
        "Radioaktivlik — beqaror atom yadrolarining o'z-o'zidan boshqa element yadrolariga aylanib, zarralar yoki kvantlar chiqarishi hodisasi (1896-yilda A. Bekkerel ochgan, M. va P. Kyurilar rivojlantirgan). Uch asosiy tur mavjud: $\\alpha$-nurlanish ($^4_2\\text{He}$ yadrolari oqimi — qog'oz ushlab qoladi, lekin ionlash qobiliyati yuqori), $\\beta^-$-nurlanish (tez elektronlar va antineytrino — alyuminiy ushlab qoladi) va $\\gamma$-nurlanish (yuqori energiyali fotonlar — qalin qo'rg'oshin/beton bilan kuchsizlantiriladi). Radioaktiv yemirilish statistik qonunga bo'ysunadi: $N(t) = N_0 \\cdot 2^{-t/T_{1/2}}$. Dozimetriyada yutilgan doza $D = E/m$ (Grey) va biologik ta'sirni hisobga oluvchi ekvivalent doza $H = Q\\cdot D$ (Zivert) ishlatiladi.",
      keyLaws: [
        {
          title: "Soddi-Fajans siljish qoidalari",
          text: "$\\alpha$-yemirilishda yadro $^4_2\\text{He}$ chiqarib, $Z$ soni 2 taga, $A$ soni 4 taga kamayadi. $\\beta^-$-yemirilishda neytron protonga aylanib, $Z$ soni 1 taga ortadi, $A$ o'zgarmaydi.",
        },
        {
          title: "Radioaktiv yemirilish qonuni",
          text: "$t$ vaqtdan keyin yemirilmay qolgan yadrolar soni: $N(t) = N_0 e^{-\\lambda t} = N_0 2^{-t/T_{1/2}}$, bu yerda $T_{1/2} = \\ln(2)/\\lambda$ — yarim yemirilish davri.",
        },
      ],
      formulas: [
        { latex: 'N(t) = N_0 \\cdot 2^{-t / T_{1/2}} = N_0 e^{-\\lambda t}', name: 'Radioaktiv yemirilish qonuni', symbols: 'T_{1/2} — yarim yemirilish davri, \\lambda — doimiy' },
        { latex: 'A = \\lambda N = \\frac{\\ln 2}{T_{1/2}} N', name: 'Manba aktivligi (Bekkerel)', symbols: '1 Bq = 1 yemirilish/s' },
        { latex: 'D = \\frac{E}{m}\\;(\\text{Gy}), \\quad H = Q \\cdot D\\;(\\text{Sv})', name: 'Yutilgan va ekvivalent doza', symbols: 'Q — nurlanish sifat omili' },
      ],
      constants: [
        { name: "Yod-131 yarim yemirilish davri", symbol: 'T₁/₂ (I-131)', value: '8.02', unit: 'kun' },
        { name: "Uglerod-14 yarim yemirilish davri", symbol: 'T₁/₂ (C-14)', value: '5730', unit: 'yil' },
        { name: "1 Kyuri (aktivlik birligi)", symbol: '1 Ci', value: '3.7 × 10¹⁰', unit: 'Bq' },
      ],
      applications: [
        "Yadro tibbiyotida Tc-99m va F-18 izotoplari PET va gamma-tomografiya tashxislashda qo'llaniladi.",
        "Arxeologiyada $^{14}\\text{C}$ izotopining yemirilish ulushi bo'yicha organik qoldiqlar yoshi 50 000 yilgacha aniqlanadi.",
        "Tutun detektorlari (Am-241) va aerokosmik RTG batareyalari (Pu-238) radioaktiv issiqlikdan uzoq muddatli energiya beradi.",
      ],
      calculator: {
        title: "Radioaktiv yemirilish va aktivlik kalkulyatori",
        formulaDisplay: 'N(t) = N₀ · 2^(-t / T₁/₂),   N_yem = N₀ − N(t)',
        inputs: [
          { key: 'N0', label: 'Boshlang‘ich massa/yadrolar N₀', symbol: 'N₀', unit: 'g', min: 1, max: 1000, step: 1, default: 100 },
          { key: 'T', label: 'Yarim yemirilish davri T₁/₂', symbol: 'T', unit: 'kun', min: 1, max: 100, step: 1, default: 8 },
          { key: 't', label: 'O‘tgan vaqt t', symbol: 't', unit: 'kun', min: 0, max: 200, step: 1, default: 24 },
        ],
        compute: (v) => {
          const n = v.t / v.T;
          const rem = v.N0 * Math.pow(0.5, n);
          const decayed = v.N0 - rem;
          const pct = (rem / v.N0) * 100;
          return {
            value: `${rem.toFixed(2)} g`,
            unit: '',
            summary: `${n.toFixed(2)} ta yarim davr o'tdi | Qolgan: ${pct.toFixed(1)}% (${rem.toFixed(2)} g) | Yemirilgan: ${decayed.toFixed(2)} g`,
          };
        },
      },
    },
    simulation: {
      title: "Radioaktiv yemirilish va nurlanish turlari simulyatori",
      openSourceUrl: 'sims/effectuall/Quantum_The_Bohr_Atom.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Atom kvant strukturasini 3D da ko'ring va pastdagi Radioaktiv yemirilish Monte-Karlo tajriba stendida α/β/γ nurlarini hamda T₁/₂ egri chizig'ini kuzating.",
      alternateSims: [
        { label: "Elektron nurlanish trubkasi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html' },
      ],
      parametric: {
        mode: 'radioactive_decay',
        title: "Radioaktiv yemirilish egri chizig'i va α/β/γ kiruvchanlik stendi",
        description: "Yarim yemirilish davri T₁/₂ va izotop turini o'zgartirib, vaqt o'tishi bilan qolgan faol yadrolar sonining eksponensial kamayishini kuzating.",
        controls: [
          { key: 'halfLife', label: 'Yarim davr T₁/₂', unit: 's', min: 2, max: 20, step: 1, value: 6 },
          { key: 'initialN', label: 'Yadrolar soni N₀', unit: 'dona', min: 50, max: 300, step: 25, value: 150 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Radioaktiv yadro bitta α-zarra chiqarganda uning massa soni A va zaryad soni Z qanday o'zgaradi?",
        options: ["A 4 taga, Z 2 taga kamayadi", "A o'zgarmaydi, Z 1 taga ortadi", "A 2 taga, Z 4 taga kamayadi", "Hech narsa o'zgarmaydi"],
        answer: 0,
        explain: "α-zarra bu $^4_2\\text{He}$ yadrosi; demak A' = A - 4, Z' = Z - 2.",
      },
      {
        q: "Yarim yemirilish davri T = 5 kun bo'lgan izotopning 15 kundan keyin qancha qismi yemirilmay qoladi?",
        options: ["1/3 qismi", "1/4 qismi", "1/8 qismi", "7/8 qismi"],
        answer: 2,
        explain: "t/T = 15/5 = 3; N = N₀ · (1/2)³ = N₀ / 8.",
      },
      {
        q: "Qaysi nurlanish turi magnit maydonda og'maydi va eng katta kiruvchanlik qobiliyatiga ega?",
        options: ["α-nurlar", "β-nurlar", "γ-nurlar", "Protonlar oqimi"],
        answer: 2,
        explain: "γ-nurlar elektr zaryadsiz yuqori energiyali fotonlar bo'lgani uchun magnit maydonda og'maydi va juda chuqur kiradi.",
      },
      {
        q: "$^{234}_{90}\\text{Th}$ yadrosi β⁻-yemirilishga uchrasa, qaysi yadro hosil bo'ladi?",
        options: ["$^{230}_{88}\\text{Ra}$", "$^{234}_{91}\\text{Pa}$", "$^{234}_{89}\\text{Ac}$", "$^{235}_{90}\\text{Th}$"],
        answer: 1,
        explain: "β⁻-yemirilishda elektron ($^0_{-1}e$) chiqadi, shuning uchun A = 234 saqlanadi, Z = 90 + 1 = 91 bo'ladi.",
      },
      {
        q: "Radioaktiv manbaning aktivligi nimani bildiradi va SI birligi nima?",
        options: ["Vaqt birligidagi yemirilishlar soni; Bekkerel (Bq)", "Umumiy massa; kg", "Yutilgan issiqlik; Joul", "Zaryad; Kulon"],
        answer: 0,
        explain: "A = |dN/dt|, SI birligi 1 Bq = 1 s⁻¹ (sekundiga bitta yemirilish).",
      },
      {
        q: "Dozimetriyada inson to'qimalariga nurlanishning biologik xavfliligini hisobga oluvchi ekvivalent doza birligi nima?",
        options: ["Grey (Gy)", "Zivert (Sv)", "Bekkerel (Bq)", "Vatt (W)"],
        answer: 1,
        explain: "Yutilgan doza birligi Grey (J/kg), nurlanish sifat omili Q ga ko'paytirilgan ekvivalent doza birligi Zivert (Sv).",
      },
      {
        q: "Agar 3 ta α-yemirilish va 2 ta β⁻-yemirilish sodir bo'lsa, yadroning zaryad soni Z nechaga o'zgaradi?",
        options: ["4 taga kamayadi", "6 taga kamayadi", "2 taga kamayadi", "8 taga kamayadi"],
        answer: 0,
        explain: "ΔZ = -3·2 + 2·1 = -6 + 2 = -4 (4 taga kamayadi).",
      },
      {
        q: "Qazilma yog'ochda $^{14}\\text{C}$ izotopining ulushi tirik daraxtdagidan 4 marta kam bo'lsa (T₁/₂ = 5730 yil), yog'ochning yoshi necha yil?",
        options: ["2865 yil", "5730 yil", "11460 yil", "22920 yil"],
        answer: 2,
        explain: "1/4 = (1/2)² => 2 ta yarim davr o'tgan: 2 · 5730 = 11 460 yil.",
      },
    ],
    problems: [
      {
        variants: [[80, 5, 15], [160, 8, 32], [64, 10, 40], [200, 4, 12]],
        build(i) {
          const [N0, T, t] = this.variants[i];
          const rem = N0 * Math.pow(0.5, t / T);
          return {
            q: `Boshlang'ich massasi ${N0} g bo'lgan radioaktiv izotopning yarim yemirilish davri T = ${T} kun. t = ${t} kundan keyin necha gramm izotop yemirilmay qoladi?`,
            correct: Number(rem.toFixed(1)),
            unit: 'g',
            explain: `N = N₀·2^(-t/T) = ${N0}·2^(-${t}/${T}) = ${N0}·2^(-${t / T}) = ${rem.toFixed(1)} g.`,
          };
        },
      },
      {
        variants: [[100, 3], [160, 4], [80, 2], [240, 3]],
        build(i) {
          const [N0, n] = this.variants[i];
          const decayed = N0 * (1 - Math.pow(0.5, n));
          return {
            q: `Dastlab ${N0} g radioaktiv modda bor edi. ${n} ta yarim yemirilish davri o'tgach, necha gramm modda yemirilgan bo'ladi?`,
            correct: Number(decayed.toFixed(1)),
            unit: 'g',
            explain: `Qolgani: ${N0}/2^${n} = ${(N0 / Math.pow(2, n)).toFixed(1)} g; yemirilgani: ${N0} - ${(N0 / Math.pow(2, n)).toFixed(1)} = ${decayed.toFixed(1)} g.`,
          };
        },
      },
      {
        variants: [[2, 1], [4, 2], [3, 4], [1, 2]],
        build(i) {
          const [a, b] = this.variants[i];
          const dz = 2 * a - b;
          return {
            q: `Og'ir yadro ${a} marta α-yemirilish va ${b} marta β⁻-yemirilishga uchradi. Yadroning zaryad soni Z jami nechtaga kamayadi?`,
            correct: dz,
            unit: '',
            explain: `ΔZ = 2·${a} - ${b} = ${dz} taga kamayadi (agar manfiy bo'lsa ortadi).`,
          };
        },
      },
    ],
  },
  {
    id: '7C-4',
    code: '7C.4',
    sectionId: 'sec-7',
    subsectionId: '7C',
    subsectionTitle: 'C. Atom va Yadro Fizikasi',
    title: "Yadro reaksiyalari: Bo'linish va termoyadro sintezi",
    subtitle: "Og'ir yadrolarning bo'linishi, zanjirli reaksiya, atom reaktori, termoyadro sintezi (Quyosh)",
    theory: {
      overview:
        "Yadro reaksiyasi — atom yadrolarining elementar zarralar yoki boshqa yadrolar bilan to'qnashishi natijasida yangi yadrolarga aylanish jarayoni. Unda elektr zaryadi, nuklonlar soni, massa-energiya va impuls saqlanadi. Og'ir yadrolar ($^{235}\\text{U}$, $^{239}\\text{Pu}$) sekin neytron yutib ikkita o'rta yadroga bo'linganda 2–3 ta yangi neytron va ~200 MeV energiya ajraladi — neytron ko'payish koeffitsienti $k \\ge 1$ bo'lsa, boshqariladigan (AES) yoki portlovchi zanjirli reaksiya boshlanadi. Teskari jarayon — o'ta yuqori haroratda ($> 10^7\\text{ K}$) yengil vodorod izotoplarining geliyga birikishi termoyadro sintezi bo'lib, Quyosh va yulduzlarning asosiy energiya manbaidir.",
      keyLaws: [
        {
          title: "Yadro reaksiyalarining saqlanish qonunlari",
          text: "Har qanday yadro reaksiyasida chap va o'ng tomonlarning massa sonlari yig'indisi ($\\sum A$) va zaryad sonlari yig'indisi ($\\sum Z$) teng bo'ladi.",
        },
        {
          title: "Zanjirli bo'linish va kritik massa",
          text: "Reaksiyaning uzluksiz davom etishi uchun neytronlar ko'payish koeffitsienti $k \\ge 1$ bo'lishi, buning uchun esa bo'linuvchi modda massasi kritik massadan ($m \\ge m_{\\text{kr}}$) katta bo'lishi kerak.",
        },
        {
          title: "Termoyadro sintezi energetik afzalligi",
          text: "1 g deyteriy-tritiy aralashmasi sintezlanganda 1 g uran bo'linishiga qaraganda ~4 baravar ko'proq energiya (~340 GJ) ajraladi va uzoq umrli radioaktiv chiqindi bermaydi.",
        },
      ],
      formulas: [
        { latex: 'Q = (\\sum m_{\\text{bosh}} - \\sum m_{\\text{oxir}}) c^2', name: 'Yadro reaksiyasi energiyasi', symbols: 'Q > 0 ekzotermik, Q < 0 endotermik' },
        { latex: '^{235}_{92}\\text{U} + ^1_0n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3^1_0n + 200\\text{ MeV}', name: 'Uran bo‘linish reaksiyasi', symbols: 'Har bo‘linishda ≈ 200 MeV' },
        { latex: '^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n + 17.6\\text{ MeV}', name: 'D-T termoyadro sintezi', symbols: '3.5 MeV nuklonga' },
      ],
      constants: [
        { name: "1 ta U-235 yadrosi bo'linish energiyasi", symbol: 'Q_U', value: '≈ 200', unit: 'MeV' },
        { name: "1 kg U-235 to'liq bo'linish energiyasi", symbol: 'q_U', value: '8.2 × 10¹³', unit: 'J/kg' },
        { name: "Quyosh markazi harorati", symbol: 'T_Quyosh', value: '1.5 × 10⁷', unit: 'K' },
      ],
      applications: [
        "Atom elektr stansiyalari (AES) bo'linish neytronlarini suv yoki grafit bilan sekinlashtirib, bor/kadmiy sterjenlar bilan $k = 1$ holatda ushlab turadi.",
        "ITER va Tokamak loyihalari magnit qafasda D-T plazmasini 150 mln K da ushlab boshqariladigan termoyadro energiyasi olishga qaratilgan.",
        "Tibbiy izotop ishlab chiqarish (tadqiqot reaktorlari) saraton kasalligini davolashda zarur izotoplarni tayyorlaydi.",
      ],
      calculator: {
        title: "Atom reaktori va yadro energiyasi kalkulyatori",
        formulaDisplay: 'N = P / (η · Q₁),   M_kun = N · t · m_atom',
        inputs: [
          { key: 'P', label: 'AES elektr quvvati P', symbol: 'P', unit: 'MVt', min: 100, max: 3000, step: 50, default: 1000 },
          { key: 'eff', label: 'Stansiya FIK η', symbol: 'η', unit: '%', min: 25, max: 45, step: 1, default: 33 },
          { key: 'days', label: 'Ishlash muddati', symbol: 't', unit: 'kun', min: 1, max: 365, step: 1, default: 30 },
        ],
        compute: (v) => {
          const Ptot = (v.P * 1e6) / (v.eff / 100);
          const E1 = 200e6 * 1.602e-19;
          const rate = Ptot / E1;
          const mKg = rate * (v.days * 86400) * (0.235 / 6.022e23);
          return {
            value: `${mKg.toFixed(2)} kg`,
            unit: 'U-235',
            summary: `Issiqlik quvvati: ${(Ptot / 1e6).toFixed(0)} MVt | Sekundiga ${(rate / 1e19).toFixed(2)}×10¹⁹ yadro bo'linadi | ${v.days} kunda ${mKg.toFixed(2)} kg uran sarflanadi`,
          };
        },
      },
    },
    simulation: {
      title: "Zanjirli yadro bo'linish reaksiyasi va termoyadro sintezi stendi",
      openSourceUrl: 'sims/effectuall/Quantum_The_Bohr_Atom.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Atom kvant strukturasini 3D da kuzatib, pastdagi Zanjirli bo'linish va boshqaruv sterjenlari reaktor simulyatorini sinang.",
      alternateSims: [
        { label: "Vodorod atomi 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Hydrogen_Atom.html' },
      ],
      parametric: {
        mode: 'fission_fusion',
        title: "Atom reaktori zanjirli bo'linishi va ko'payish koeffitsienti k",
        description: "Boshqaruv sterjenlari (yutish darajasi) va boyitish darajasini o'zgartirib, k < 1, k = 1 (statsionar) va k > 1 rejimlarini kuzating.",
        controls: [
          { key: 'rods', label: 'Boshqaruv sterjenlari (tormoz)', unit: '%', min: 0, max: 90, step: 5, value: 40 },
          { key: 'enrichment', label: 'Yoqilg‘i zichligi', unit: '%', min: 20, max: 100, step: 10, value: 60 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "$^{14}_7\\text{N} + ^4_2\\text{He} \\to ^{17}_8\\text{O} + X$ yadro reaksiyasida noma'lum $X$ zarracha nima?",
        options: ["Neytron ($^1_0n$)", "Proton ($^1_1\\text{H}$)", "Elektron ($^0_{-1}e$)", "Deytron ($^2_1\\text{H}$)"],
        answer: 1,
        explain: "A: 14+4 - 17 = 1; Z: 7+2 - 8 = 1. Demak $X = ^1_1\\text{H}$ (proton).",
      },
      {
        q: "Uran-235 ning bitta yadrosi bo'linganda o'rtacha necha MeV energiya ajraladi?",
        options: ["2 MeV", "17.6 MeV", "200 MeV", "2000 MeV"],
        answer: 2,
        explain: "Bitta U-235 yadrosi bo'linishida qisqa masofada ~200 MeV energiya chiqadi.",
      },
      {
        q: "Atom reaktorida kadmiy yoki bor sterjenlarining vazifasi nima?",
        options: ["Neytronlarni tezlashtirish", "Ortiqcha neytronlarni yutib, reaksiya tezligini (k=1) boshqarish", "Bug'ni sovutish", "Elektr toki ishlab chiqarish"],
        answer: 1,
        explain: "Bor va kadmiy issiqlik neytronlarini kuchli yutadi va zanjirli reaksiyani portlashdan saqlaydi.",
      },
      {
        q: "Quyosh va yulduzlar bag'rida energiya manbai bo'lib xizmat qiluvchi asosiy yadroviy jarayon qaysi?",
        options: ["Uranning zanjirli bo'linishi", "Vodorodning geliyga aylanish termoyadro sintezi", "Radioaktiv α-yemirilish", "Kimyoviy yonish"],
        answer: 1,
        explain: "Quyosh yadrosida ~15 mln K haroratda protonlar birikib geliy hosil qiladigan termoyadro sintezi kechadi.",
      },
      {
        q: "Termoyadro sintezi reaksiyasini amalga oshirish uchun nima sababdan millionlab kelvin harorat talab qilinadi?",
        options: ["Yadrolarni eritish uchun", "Musbat zaryadli yadrolar orasidagi Kulon itarishish to'sig'ini yengish uchun", "Elektronlarni tezlashtirish uchun", "Gravitatsiyani kamaytirish uchun"],
        answer: 1,
        explain: "Ikki musbat yadro kuchli yadro kuchi ta'sir doirasiga (~10⁻¹⁵ m) kirishi uchun yuqori issiqlik tezligi bilan Kulon to'sig'idan o'tishi kerak.",
      },
      {
        q: "Atom reaktorida grafit yoki og'ir suv sekinlashtirgich (moderator) sifatida nega qo'llaniladi?",
        options: ["Tez neytronlarni sekinlashtirib, U-235 yutish ehtimolini keskin oshirish uchun", "Protonlarni yutish uchun", "Haroratni ko'tarish uchun", "Reaksiyani to'xtatish uchun"],
        answer: 0,
        explain: "U-235 yadrosi sekin (issiq) neytronlarni tez neytronlarga qaraganda yuzlab marta yaxshiroq yutadi.",
      },
      {
        q: "Reaktor statsionar rejimda barqaror ishlashi uchun neytron ko'payish koeffitsienti k nechaga teng bo'lishi kerak?",
        options: ["k = 0", "k < 1", "k = 1", "k > 2"],
        answer: 2,
        explain: "k = 1 bo'lganda har bir avlodda bo'linishlar soni o'zgarmas qoladi.",
      },
      {
        q: "$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + X$ termoyadro reaksiyasida qaysi zarracha ajraladi?",
        options: ["Proton", "Neytron ($^1_0n$)", "Pozitron", "Elektron"],
        answer: 1,
        explain: "A = 2+3 - 4 = 1; Z = 1+1 - 2 = 0 => neytron.",
      },
    ],
    problems: [
      {
        variants: [[27, 4, 1, 24], [14, 4, 1, 17], [9, 4, 1, 12], [23, 2, 1, 24]],
        build(i) {
          const [A1, A2, a3, Ares] = this.variants[i];
          const b = A1 + A2 - Ares;
          return {
            q: `Yadro reaksiyasida massa sonlari A₁ = ${A1} va A₂ = ${A2} bo'lgan zarralar to'qnashib, A₃ = ${Ares} yadro va bitta yengil zarracha hosil qildi. Yengil zarrachaning massa sonini toping.`,
            correct: b,
            unit: '',
            explain: `Massa soni saqlanishi: ${A1} + ${A2} = ${Ares} + A_x => A_x = ${b}.`,
          };
        },
      },
      {
        variants: [[10, 200], [5, 200], [20, 17.6], [100, 200]],
        build(i) {
          const [n10, Q] = this.variants[i];
          const totalMeV = n10 * Q;
          return {
            q: `Har bir reaksiya aktida ${Q} MeV energiya ajralsin. ${n10} ta reaksiya aktida jami necha MeV energiya hosil bo'ladi?`,
            correct: Number(totalMeV.toFixed(1)),
            unit: 'MeV',
            explain: `E_jami = N·Q = ${n10} · ${Q} = ${totalMeV.toFixed(1)} MeV.`,
          };
        },
      },
      {
        variants: [[1, 30, 8.2e13], [2, 25, 8.2e13], [3, 40, 8.2e13]],
        build(i) {
          const [days, eff, qU] = this.variants[i];
          const pMW = 500;
          const massG = ((pMW * 1e6 * days * 86400) / ((eff / 100) * qU)) * 1000;
          return {
            q: `Elektr quvvati 500 MVt va FIK = ${eff}% bo'lgan AES ${days} sutka uzluksiz ishladi. Necha gramm U-235 sarflangan? (q = 8.2·10¹³ J/kg)`,
            correct: Math.round(massG),
            unit: 'g',
            explain: `Sarflangan issiqlik E = P·t / η; m = E / q = ${Math.round(massG)} g.`,
          };
        },
      },
    ],
  },
  {
    id: '7C-5',
    code: '7C.5',
    sectionId: 'sec-7',
    subsectionId: '7C',
    subsectionTitle: 'C. Atom va Yadro Fizikasi',
    title: "Elementar zarralar, Standart model va tezlatkichlar",
    subtitle: "Antizarralar, kvarklar, leptonlar, bozonlar (Standart model), zamonaviy tezlatkichlar (Katta adron kollayderi)",
    theory: {
      overview:
        "Elementar zarralar fizikasi materiyaning eng fundamental tuzilish birliklarini va ular orasidagi to'rtta asosiy o'zaro ta'sirni (kuchli, elektromagnit, kuchsiz va gravitatsion) tadqiq etadi. Zamonaviy Standart modelga ko'ra barcha ko'rinadigan modda 6 ta kvarkdan (u, d, s, c, b, t — proton $uud$, neytron $udd$) va 6 ta leptondan (elektron, myuon, tau hamda ularning neytrinolari) tashkil topgan. Ta'sirlarni tashuvchi kalibrlash bozonlari: foton (elektromagnit), glyuonlar (kuchli), $W^\\pm, Z^0$ (kuchsiz), shuningdek zarralarga massa beruvchi Xiggs bozoni (2012-yilda CERN Katta adron kollayderida kashf qilingan). Har bir zarrachaning massasi bir xil, lekin zaryadlari qarama-qarshi antizarrasi (masalan, elektron — pozitron $e^+$) mavjud; uchrashganda ular annigilyatsiyalanib fotonlarga aylanadi.",
      keyLaws: [
        {
          title: "Annigilyatsiya va juft tug'ilishi",
          text: "Zarracha va antizarracha ($e^- + e^+ \\to 2\\gamma$) to'qnashganda ularning barcha massasi elektromagnit energiyaga aylanadi ($E_{\\min} = 2 m_e c^2 = 1.022\\text{ MeV}$).",
        },
        {
          title: "Kvark modeli (Adronlar tuzilishi)",
          text: "Barionlar (proton, neytron) 3 ta kvarkdan ($q q q$), mezonlar esa 1 ta kvark va 1 ta antikvarkdan ($q \\bar{q}$) iborat; kvarklarning elektr zaryadi kasrli ($+2/3\\,e$ yoki $-1/3\\,e$).",
        },
        {
          title: "Katta adron kollayderi (LHC) prinsipi",
          text: "27 km halqasimon tunnelda o'ta o'tkazuvchan magnitlar yordamida protonlarni 6.8 TeV gacha (jami 13.6 TeV) tezlatib qarama-qarshi to'qnashtirish orqali yangi zarralar tug'iladi.",
        },
      ],
      formulas: [
        { latex: 'q_p = \\frac{2}{3}e + \\frac{2}{3}e - \\frac{1}{3}e = +e', name: 'Proton kvark tarkibi (uud)', symbols: 'u = +2/3 e, d = -1/3 e' },
        { latex: 'q_n = \\frac{2}{3}e - \\frac{1}{3}e - \\frac{1}{3}e = 0', name: 'Neytron kvark tarkibi (udd)', symbols: 'Elektroneytral barion' },
        { latex: 'e^- + e^+ \\to 2\\gamma \\quad (h\\nu \\ge 0.511\\text{ MeV})', name: 'Juft annigilyatsiyasi', symbols: 'Impuls saqlanishi uchun ≥ 2 foton' },
      ],
      constants: [
        { name: "Pozitron va elektron tinchlik energiyasi", symbol: 'm_e c²', value: '0.511', unit: 'MeV' },
        { name: "Xiggs bozoni massasi", symbol: 'm_H c²', value: '125.1', unit: 'GeV' },
        { name: "LHC to'qnashuv energiyasi", symbol: '√s', value: '13.6', unit: 'TeV' },
      ],
      applications: [
        "PET-skanerlar (Pozitron Emission Tomografiya) bemor tanasidagi $e^- + e^+ \\to 2\\gamma$ annigilyatsiya fotonlarini qayd etib 3D tasvir yaratadi.",
        "World Wide Web (WWW) 1989-yilda CERN elementar zarralar fiziklari ma'lumot almashishi uchun yaratilgan.",
        "Sinxrotron tezlatkichlar nurlanishi oqsil kristallografiyasi va nanomaterialshunoslikda ishlatiladi.",
      ],
      calculator: {
        title: "Annigilyatsiya va kollayder energiya hisoblagichi",
        formulaDisplay: 'E_tot = 2m₀c² + E_k,   λ_γ = hc / E_γ',
        inputs: [
          { key: 'ek', label: 'Har bir elektron kinetik energiyasi', symbol: 'E_k', unit: 'MeV', min: 0, max: 10, step: 0.1, default: 0.5 },
        ],
        compute: (v) => {
          const me = 0.511;
          const eGamma = me + v.ek;
          const eTot = 2 * eGamma;
          const lamFm = 1240 / eGamma;
          return {
            value: `${eTot.toFixed(3)} MeV`,
            unit: '',
            summary: `Har bir hosil bo'lgan γ-foton energiyasi: ${eGamma.toFixed(3)} MeV | To'lqin uzunligi: ${lamFm.toFixed(1)} fm (0.00${(lamFm / 1000).toFixed(3)} nm)`,
          };
        },
      },
    },
    simulation: {
      title: "Tezlatkichda zarrachalar va antizarralar to'qnashuvi 3D stendi",
      openSourceUrl: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D muhitda zaryadli zarralar oqimi va og'ishini o'rganing; pastda LHC magnit halqasidagi kvark/bozon to'qnashuv izlarini kuzating.",
      alternateSims: [
        { label: "Lorentz siklotron harakati (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Understanding_Lorentz_Force.html' },
      ],
      parametric: {
        mode: 'particle_collider',
        title: "Katta adron kollayderi (LHC) to'qnashuv detektori simulyatori",
        description: "Nurlar energiyasini va magnit maydon kuchini sozlab, adronlar to'qnashuvidan chiqayotgan zarrachalar izlarining egriligini tahlil qiling.",
        controls: [
          { key: 'energy', label: 'To‘qnashuv energiyasi', unit: 'TeV', min: 1, max: 14, step: 1, value: 10 },
          { key: 'B', label: 'Detektor magnit maydoni B', unit: 'T', min: 0.5, max: 5.0, step: 0.5, value: 3.0 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Elektronning antizarrachasi qanday nomlanadi va zaryadi nimaga teng?",
        options: ["Neytron, 0", "Pozitron, +e", "Myuon, -e", "Antiproton, -e"],
        answer: 1,
        explain: "Pozitron (e⁺) elektron bilan bir xil massaga (0.511 MeV) va qarama-qarshi +e zaryadga ega.",
      },
      {
        q: "Proton va neytron qanday fundamental zarralardan tuzilgan?",
        options: ["Leptonlardan", "Kvarklardan", "Fotonlardan", "Mezonlardan"],
        answer: 1,
        explain: "Proton uud, neytron esa udd kvark uchligidan tashkil topgan.",
      },
      {
        q: "Elektromagnit o'zaro ta'sirni tashuvchi kvant bozon nima?",
        options: ["Glyuon", "Foton", "W bozoni", "Graviton"],
        answer: 1,
        explain: "Foton elektromagnit ta'sir tashuvchisidir; kuchli ta'sirni glyuonlar, kuchsizni W/Z bozonlar tashiydi.",
      },
      {
        q: "Tinch turgan elektron va pozitron annigilyatsiyalansa, jami qancha minimal energiya ajraladi?",
        options: ["0.511 MeV", "1.022 MeV", "938 MeV", "13.6 eV"],
        answer: 1,
        explain: "Ikkita zarrachaning tinchlik energiyasi 2·0.511 = 1.022 MeV bo'lib, ikkita 0.511 MeV li γ-fotonga aylanadi.",
      },
      {
        q: "Nima uchun elektron-pozitron annigilyatsiyasida bitta emas, kamida ikkita foton hosil bo'ladi?",
        options: ["Energiya yetishmasligi uchun", "Impulsning saqlanish qonunini ta'minlash uchun", "Zaryad saqlanishi uchun", "Massa ortishi uchun"],
        answer: 1,
        explain: "Massa markazi sistemasida boshlang'ich impuls nolga teng; bitta foton nol impulsga ega bo'la olmaydi (p = E/c ≠ 0).",
      },
      {
        q: "2012-yilda CERN da kashf etilgan va zarralarga massa berish mexanizmini tushuntiruvchi zarracha qaysi?",
        options: ["Top-kvark", "Xiggs bozoni", "Tau-lepton", "Pozitron"],
        answer: 1,
        explain: "Xiggs bozoni (125 GeV) Standart modelning yetishmayotgan bo'g'ini sifatida 2012-yilda topilgan.",
      },
      {
        q: "u-kvark zaryadi +2/3 e, d-kvark zaryadi -1/3 e. Ikki d va bir u kvarkdan tuzilgan zarrachaning zaryadi qancha?",
        options: ["+e", "0 (Neytron)", "-e", "+2e"],
        answer: 1,
        explain: "udd: 2/3 - 1/3 - 1/3 = 0 — bu neytron.",
      },
      {
        q: "Vilson kamerasi yoki pufakchali kamerada magnit maydon nima maqsadda qo'llaniladi?",
        options: ["Zarrachalar izini qizdirish uchun", "Iz egriligiga qarab zarrachaning zaryad ishorasi va impulsini aniqlash uchun", "Zarrachalarni to'xtatish uchun", "Yorug'lik chiqarish uchun"],
        answer: 1,
        explain: "Lorens kuchi tufayli musbat va manfiy zarralar qarama-qarshi tomonga egiladi, egrilik radiusi R = p/(qB) impulsni beradi.",
      },
    ],
    problems: [
      {
        variants: [[0], [0.5], [1.0], [2.0]],
        build(i) {
          const [ek] = this.variants[i];
          const etot = 2 * (0.511 + ek);
          return {
            q: `Har biri E_k = ${ek} MeV kinetik energiyaga ega elektron va pozitron to'qnashib annigilyatsiyalandi. Hosil bo'lgan ikkita γ-kvantning umumiy energiyasini (MeV) toping. (m_e c² = 0.511 MeV)`,
            correct: Number(etot.toFixed(3)),
            unit: 'MeV',
            explain: `E_jami = 2·(0.511 + ${ek}) = ${etot.toFixed(3)} MeV.`,
          };
        },
      },
      {
        variants: [[13.6], [6.5], [7.0], [10.0]],
        build(i) {
          const [tev] = this.variants[i];
          const eGeV = (tev / 2) * 1000;
          return {
            q: `Kollayderda ikkita bir xil proton qarama-qarshi to'qnashtirildi va jami ${tev} TeV energiya ajraldi. Har bir proton dastasi necha GeV energiyaga ega bo'lgan?`,
            correct: Math.round(eGeV),
            unit: 'GeV',
            explain: `Har bir proton: ${tev}/2 TeV = ${(tev / 2).toFixed(1)} TeV = ${Math.round(eGeV)} GeV.`,
          };
        },
      },
      {
        variants: [[3, 2], [2, 1], [3, 0], [1, 2]],
        build(i) {
          const [nu, nd] = this.variants[i];
          const q = (2 * nu - nd) / 3;
          return {
            q: `Adron ${nu} ta u-kvark (+2/3 e) va ${nd} ta d-kvark (-1/3 e) dan iborat bo'lsa, uning to'liq elektr zaryadi necha e ga teng?`,
            correct: Number(q.toFixed(2)),
            unit: 'e',
            explain: `Q = (${nu}·2 - ${nd}·1)/3 = ${(2 * nu - nd)}/3 = ${q.toFixed(2)} e.`,
          };
        },
      },
    ],
  },
];
