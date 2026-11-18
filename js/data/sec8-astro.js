// 8-bo'lim: Astrofizika va Kosmologiya (3 mavzu: 8-1, 8-2, 8-3)

export const SEC8_TOPICS = [
  {
    id: '8-1',
    code: '8.1',
    sectionId: 'sec-8',
    subsectionId: '8A',
    subsectionTitle: '8. Astrofizika va Kosmologiya',
    title: "Quyosh sistemasi va Kepler qonunlari",
    subtitle: "Sayyoralar harakati (Kepler qonunlari), Quyosh tuzilishi, kometalar va asteroidlar",
    theory: {
      overview:
        "Iogann Kepler Tyuxo Bragening ko'p yillik aniq astronomik kuzatuvlarini matematik tahlil qilib, sayyoralar harakatining uchta empirik qonunini ochdi — keyinchalik Isaak Nyuton ularni Butun olam tortishish qonuni ($F = GMm/r^2$) ning qat'iy natijasi ekanligini isbotladi. Sayyoralar Quyosh atrofida ellips bo'ylab aylanadi, periheliyda (Quyoshga eng yaqin nuqtada) maksimal tezlikka, afeliyda esa minimal tezlikka ega bo'ladi. Quyosh — o'z bag'rida sekundiga ~600 million tonna vodorodni geliyga aylantiruvchi asosiy ketma-ketlikdagi G2V spektral sinf yulduzidir. Quyosh sistemasida 8 ta sayyora bilan birga Mars-Yupiter orasidagi asteroidlar belbog'i, Koyper belbog'i va uzoq elliptik orbitali muzli kometalar ham harakatlanadi.",
      keyLaws: [
        {
          title: "Keplerning 1-qonuni (Orbitalar qonuni)",
          text: "Har bir sayyora Quyosh atrofida fokuslaridan birida Quyosh joylashgan ellips bo'ylab harakatlanadi.",
        },
        {
          title: "Keplerning 2-qonuni (Yuzalar qonuni)",
          text: "Sayyoraning radius-vektori teng vaqt oralig'ida teng yuzalar chizadi ($dS/dt = \\text{const}$), bu impuls momentining saqlanish qonuni ($r v_\\perp = \\text{const}$) natijasidir.",
        },
        {
          title: "Keplerning 3-qonuni (Garmonik qonun)",
          text: "Sayyoralar aylanish davrlari kvadratlarining nisbati ularning katta yarim o'qlari kublari nisbatiga teng: $T_1^2 / T_2^2 = a_1^3 / a_2^3$.",
        },
      ],
      formulas: [
        { latex: '\\frac{T_1^2}{T_2^2} = \\frac{a_1^3}{a_2^3}', name: 'Keplerning 3-qonuni (birliklar a.b., yil)', symbols: 'T (yil), a (a.b.): T^2 = a^3' },
        { latex: 'T^2 = \\frac{4\\pi^2}{G(M + m)} a^3', name: 'Nyuton umumlashtirgan Kepler qonuni', symbols: 'M — markaziy jism massasi' },
        { latex: 'r_p v_p = r_a v_a', name: 'Periheliyda va afeliyda impuls momenti', symbols: 'r_p = a(1-e), r_a = a(1+e)' },
        { latex: 'v = \\sqrt{GM\\left(\\frac{2}{r} - \\frac{1}{a}\\right)}', name: 'Orbital tezlik (Vis-viva tenglamasi)', symbols: 'r — ayni masofa, a — katta yarim o‘q' },
      ],
      constants: [
        { name: "Astronomik birlik (Yer-Quyosh)", symbol: '1 a.b.', value: '1.496 × 10¹¹', unit: 'm' },
        { name: "Quyosh massasi", symbol: 'M_☉', value: '1.989 × 10³⁰', unit: 'kg' },
        { name: "Quyosh nurlanish quvvati (yorqinligi)", symbol: 'L_☉', value: '3.828 × 10²⁶', unit: 'Vt' },
        { name: "Quyosh radiusi", symbol: 'R_☉', value: '6.957 × 10⁸', unit: 'm' },
      ],
      applications: [
        "Yupiter (a = 5.2 a.b., T = 11.86 yil) va Neptun gibrid orbitalarini hamda ko'plab ekzosayyoralar massasini Kepler 3-qonuni aniqlaydi.",
        "Goman o'tish orbitasi bo'yicha Mars yoki Yupiterga kosmik stansiyalarni eng kam yoqilg'i sarfi bilan uchirish hisoblanadi.",
        "Xavfli asteroidlarning (NEA) Yer bilan kesishish ehtimoli ularning orbital elementlari (a, e, i) orqali bashorat qilinadi.",
      ],
      calculator: {
        title: "Kepler qonunlari va orbital tezlik kalkulyatori",
        formulaDisplay: 'T = a^(3/2) yil,   r_p = a(1-e),   r_a = a(1+e)',
        inputs: [
          { key: 'a', label: 'Katta yarim o‘q a', symbol: 'a', unit: 'a.b.', min: 0.3, max: 40, step: 0.1, default: 5.2 },
          { key: 'e', label: 'Orbita ekssentrisiteti e', symbol: 'e', unit: '', min: 0.0, max: 0.90, step: 0.02, default: 0.05 },
        ],
        compute: (v) => {
          const T = Math.pow(v.a, 1.5);
          const rp = v.a * (1 - v.e);
          const ra = v.a * (1 + v.e);
          const vp = 29.78 * Math.sqrt(2 / rp - 1 / v.a);
          const va = 29.78 * Math.sqrt(2 / ra - 1 / v.a);
          return {
            value: `${T.toFixed(2)} yil`,
            unit: '',
            summary: `Periheliyda r_p = ${rp.toFixed(2)} a.b. (v = ${vp.toFixed(1)} km/s) | Afeliyda r_a = ${ra.toFixed(2)} a.b. (v = ${va.toFixed(1)} km/s)`,
          };
        },
      },
    },
    simulation: {
      title: "Gravitatsiya va orbital harakat 3D simulyatori",
      openSourceUrl: 'sims/effectuall/Mechanics_Gravitation_Law.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Markaziy tortishish kuchini 3D fazoda kuzating va pastdagi Kepler elliptik orbitalari simulyatorida ekssentrisitet hamda periheliyni boshqaring.",
      alternateSims: [
        { label: "Astronomik teleskop 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Astronomical_Telescope.html' },
        { label: "Koinot va fazogir (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Astronaut.html' },
      ],
      parametric: {
        mode: 'kepler_orbits',
        title: "Keplerning 1-, 2- va 3-qonunlari elliptik orbita simulyatori",
        description: "Katta yarim o'q a va ekssentrisitet e ni o'zgartirib, sayyora/kometaning teng vaqtlarda chizgan teng sektor yuzalarini kuzating.",
        controls: [
          { key: 'a', label: 'Katta yarim o‘q a', unit: 'a.b.', min: 1.0, max: 6.0, step: 0.2, value: 2.2 },
          { key: 'e', label: 'Ekssentrisitet e', unit: '', min: 0.0, max: 0.75, step: 0.05, value: 0.5 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Keplerning birinchi qonuniga ko'ra sayyoralar Quyosh atrofida qanday trayektoriya bo'ylab harakatlanadi?",
        options: ["Parabolik", "Fokusida Quyosh turgan ellips bo'ylab", "Giperbolik", "Spiralsimon"],
        answer: 1,
        explain: "Kepler 1-qonuni: barcha sayyoralarning orbitalari ellips bo'lib, Quyosh uning ikki fokusidan birida joylashgan.",
      },
      {
        q: "Quyoshdan o'rtacha masofasi a = 4 a.b. bo'lgan asteroidning Quyosh atrofida aylanish davri necha Yer yiliga teng?",
        options: ["2 yil", "4 yil", "8 yil", "16 yil"],
        answer: 2,
        explain: "T² = a³ => T² = 4³ = 64 => T = 8 yil.",
      },
      {
        q: "Sayyora orbitasining qaysi nuqtasida uning chiziqli tezligi maksimal bo'ladi?",
        options: ["Afeliyda (eng uzoq nuqtada)", "Periheliyda (Quyoshga eng yaqin nuqtada)", "Kichik o'q uchida", "Hamma nuqtada bir xil"],
        answer: 1,
        explain: "Kepler 2-qonuni r·v_⊥ = const ga ko'ra r eng kichik bo'lgan periheliyda tezlik maksimal.",
      },
      {
        q: "Keplerning ikkinchi (yuzalar) qonuni fizikaning qaysi fundamental saqlanish qonunidan kelib chiqadi?",
        options: ["Elektr zaryadining saqlanishi", "Impuls momentining saqlanishi", "Entropiyaning o'sishi", "Massa saqlanishi"],
        answer: 1,
        explain: "Gravitatsiya markaziy kuch bo'lgani uchun kuch momenti nol, demak sayyoraning impuls momenti L = m r² ω saqlanadi.",
      },
      {
        q: "Agar sayyoraning Quyoshdan masofasi periheliyda r_p = 1 a.b., afeliyda r_a = 3 a.b. bo'lsa, periheliydagi tezlik afeliydagidan necha marta katta?",
        options: ["3 marta", "9 marta", "1.5 marta", "√3 marta"],
        answer: 0,
        explain: "r_p·v_p = r_a·v_a => v_p / v_a = r_a / r_p = 3 / 1 = 3 marta.",
      },
      {
        q: "Quyosh sirtining (fotosferaning) o'rtacha harorati taxminan qancha?",
        options: ["600 K", "5780 K", "15 000 K", "15 000 000 K"],
        answer: 1,
        explain: "Quyosh markazi ~1.5·10⁷ K, tashqi nurlanuvchi fotosfera sirti esa ~5780 K.",
      },
      {
        q: "Quyosh sistemasidagi asosiy asteroidlar belbog'i qaysi ikki sayyora orbitalari orasida joylashgan?",
        options: ["Venera va Yer", "Yer va Mars", "Mars va Yupiter", "Saturn va Uran"],
        answer: 2,
        explain: "Mars (1.52 a.b.) va Yupiter (5.2 a.b.) orasidagi 2.1–3.3 a.b. hududda asosiy asteroid belbog'i yotadi.",
      },
      {
        q: "Yerdan Neptungacha (a = 30 a.b.) bo'lgan sayyoraning Quyoshdan yorug'lik olishi Yerga nisbatan necha marta kam? (Yorug'lik oqimi E ∝ 1/r²)",
        options: ["30 marta", "90 marta", "900 marta", "27000 marta"],
        answer: 2,
        explain: "30² = 900 marta kuchsizroq yoritiladi.",
      },
    ],
    problems: [
      {
        variants: [[4], [9], [16], [25]],
        build(i) {
          const [a] = this.variants[i];
          const T = Math.pow(a, 1.5);
          return {
            q: `Kichik sayyoraning Quyoshdan o'rtacha masofasi (katta yarim o'qi) a = ${a} a.b. Uning Quyosh atrofida aylanish davrini (Yer yilida) toping.`,
            correct: T,
            unit: 'yil',
            explain: `T² = a³ = ${a}³ => T = ${a}^1.5 = ${T} yil.`,
          };
        },
      },
      {
        variants: [[0.5, 4.5, 10], [1.0, 5.0, 8], [0.8, 3.2, 12], [2.0, 8.0, 6]],
        build(i) {
          const [rp, ra, va] = this.variants[i];
          const vp = (ra / rp) * va;
          return {
            q: `Kometa periheliyda Quyoshdan ${rp} a.b., afeliyda esa ${ra} a.b. uzoqlikda bo'ladi. Afeliyda tezligi ${va} km/s bo'lsa, periheliydagi tezligi (km/s) qancha?`,
            correct: Number(vp.toFixed(1)),
            unit: 'km/s',
            explain: `v_p = v_a · (r_a / r_p) = ${va} · (${ra} / ${rp}) = ${vp.toFixed(1)} km/s.`,
          };
        },
      },
      {
        variants: [[8], [27], [64], [125]],
        build(i) {
          const [T] = this.variants[i];
          const a = Math.cbrt(T * T);
          return {
            q: `Sayyora Quyosh atrofini T = ${T} yilda aylanib chiqadi. Uning orbitasining katta yarim o'qi necha astronomik birlikka (a.b.) teng?`,
            correct: Number(a.toFixed(1)),
            unit: 'a.b.',
            explain: `a = T^(2/3) = (${T}²)^(1/3) = ${a.toFixed(1)} a.b.`,
          };
        },
      },
    ],
  },
  {
    id: '8-2',
    code: '8.2',
    sectionId: 'sec-8',
    subsectionId: '8A',
    subsectionTitle: '8. Astrofizika va Kosmologiya',
    title: "Yulduzlar evolyutsiyasi va galaktikalar",
    subtitle: "Yulduzlar evolyutsiyasi, oq mittilar, neytron yulduzlar, qora tuynuklar, Somon yo'li",
    theory: {
      overview:
        "Yulduzlar sovuq molekulyar gaz-chang bulutlarining gravitatsion siqilishidan tug'ilib, milliardlab yillar davomida ichki termoyadro sintezi bosimi bilan o'z og'irligi orasidagi gidrostatik muvozanatda yashaydi (Gertsshprung-Rassell diagrammasi). Hayotining oxirida yulduzning boshlang'ich massasi uning taqdirini belgilaydi: Quyosh kabi o'rtacha massali yulduzlar ($M < 8 M_\\odot$) qizil gigant bosqichidan o'tib sayyoraviy tumanlik tashlaydi va markazida oq mitti qoladi (Chandraxekar chegarasi $M \\le 1.44 M_\\odot$). Massiv yulduzlar ($M > 8 M_\\odot$) o'ta yangi yulduz (supernova) portlashi bilan yakunlanib, neytron yulduz (pulsar) yoki juda massiv bo'lsa, Shvartsshild radiusi $r_s = 2GM/c^2$ ga ega qora tuynuk hosil qiladi. Quyoshimiz diametri ~100 000 yorug'lik yili bo'lgan Somon yo'li spiral galaktikasi markazidan ~26 000 yorug'lik yili uzoqlikda aylanadi.",
      keyLaws: [
        {
          title: "Chandrasekhar chegarasi (1.44 M_☉)",
          text: "Elektronlarning degenerativ kvant bosimi faqat massasi $M \\le 1.44 M_\\odot$ bo'lgan oq mittini gravitatsion qulashdan ushlab tura oladi.",
        },
        {
          title: "Shvartsshild radiusi (Hodisalar gorizonti)",
          text: "Massasi $M$ bo'lgan jism uchun ikkinchi kosmik tezlik yorug'lik tezligiga tenglashadigan chegara radius: $r_s = 2GM / c^2$; uning ichidan hatto fotonlar ham chiqa olmaydi.",
        },
        {
          title: "Massa-yorqinlik qonuni",
          text: "Asosiy ketma-ketlik yulduzlarining nurlanish quvvati $L \\propto M^{3.5}$; shuning uchun o'ta massiv ko'k gigantlar yoqilg'ini bir necha million yildayoq sarflab bo'ladi.",
        },
      ],
      formulas: [
        { latex: 'r_s = \\frac{2 G M}{c^2} \\approx 2.95\\text{ km} \\cdot \\frac{M}{M_\\odot}', name: 'Shvartsshild (qora tuynuk) radiusi', symbols: 'M — yulduz yoki tuynuk massasi' },
        { latex: 'L = 4\\pi R^2 \\sigma T^4', name: 'Yulduz yorqinligi (luminosity)', symbols: 'R — yulduz radiusi, T — sirt harorati' },
        { latex: 'd\\text{ (pk)} = \\frac{1}{p\\text{ (\'\')}}, \\quad 1\\text{ pk} = 3.26\\text{ yorug‘lik yili}', name: 'Yillik parallaks va masofa', symbols: 'p — yoy sekundidagi parallaks' },
      ],
      constants: [
        { name: "1 yorug'lik yili", symbol: '1 ly', value: '9.461 × 10¹⁵', unit: 'm' },
        { name: "1 parsek", symbol: '1 pk', value: '3.086 × 10¹⁶', unit: 'm' },
        { name: "Chandrasekhar chegarasi", symbol: 'M_Ch', value: '1.44', unit: 'M_☉' },
      ],
      applications: [
        "Event Horizon Telescope (EHT) M87* va Somon yo'li markazidagi Sagittarius A* o'ta massiv qora tuynuklar soyasini bevosita suratga oldi.",
        "Neytron yulduzlar (pulsarlar) nihoyatda barqaror radio-impulslari tufayli chuqur koinot navigatsiyasida mayoq vazifasini bajaradi.",
        "O'ta yangi yulduz (Supernova) portlashlari Koinotni temir, oltin, uran kabi barcha og'ir elementlar bilan boyitadi.",
      ],
      calculator: {
        title: "Qora tuynuk Shvartsshild radiusi va yulduz yorqinligi kalkulyatori",
        formulaDisplay: 'r_s = 2GM / c²,   L / L_☉ = (R / R_☉)² · (T / 5778)⁴',
        inputs: [
          { key: 'M', label: 'Jism massasi (Quyosh massasida)', symbol: 'M/M_☉', unit: 'M_☉', min: 1, max: 1000000, step: 1, default: 10 },
          { key: 'R', label: 'Yulduz radiusi R/R_☉', symbol: 'R/R_☉', unit: 'R_☉', min: 0.01, max: 100, step: 0.1, default: 2.0 },
          { key: 'T', label: 'Sirt harorati T', symbol: 'T', unit: 'K', min: 2500, max: 30000, step: 250, default: 8000 },
        ],
        compute: (v) => {
          const rsKm = 2.953 * v.M;
          const Lratio = v.R * v.R * Math.pow(v.T / 5778, 4);
          return {
            value: rsKm > 10000 ? `${(rsKm / 1e6).toFixed(3)} mln km` : `${rsKm.toFixed(1)} km`,
            unit: '',
            summary: `Shvartsshild radiusi r_s = ${rsKm.toFixed(1)} km | Yulduz yorqinligi L = ${Lratio.toFixed(1)} L_☉`,
          };
        },
      },
    },
    simulation: {
      title: "Yulduzlar gravitatsiyasi va astronomik teleskop 3D simulyatsiyasi",
      openSourceUrl: 'sims/effectuall/Optics_Astronomical_Telescope.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Astronomik teleskop optikasini 3D fazoda o'rganing va pastdagi Yulduzlar evolyutsiyasi hamda Qora tuynuk akkretsiya diski simulyatoridan foydalaning.",
      alternateSims: [
        { label: "Gravitatsiya qonuni 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Gravitation_Law.html' },
      ],
      parametric: {
        mode: 'stellar_blackhole',
        title: "Yulduz massasiga ko'ra evolyutsiya (Oq mitti / Neytron yulduz / Qora tuynuk)",
        description: "Yulduzning boshlang'ich massasini o'zgartirib, oq mitti, pulsar yoki qora tuynuk hodisalar gorizonti hosil bo'lishini kuzating.",
        controls: [
          { key: 'massSolar', label: 'Yulduz massasi', unit: 'M_☉', min: 0.5, max: 30, step: 0.5, value: 18 },
          { key: 'spin', label: 'Aylanish tezligi', unit: '×', min: 0.2, max: 2.5, step: 0.1, value: 1.0 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Quyosh tipidagi yulduz (M ≈ 1 M_☉) evolyutsiyasi oxirida qanday qoldiq obyekti hosil bo'ladi?",
        options: ["Qora tuynuk", "Neytron yulduz", "Oq mitti", "Kvazar"],
        answer: 2,
        explain: "M < 8 M_☉ yulduzlar qizil gigant bosqichidan so'ng zich uglerod-kislorodli oq mitti bo'lib soviydi.",
      },
      {
        q: "Oq mittining maksimal turg'un massasi (Chandrasekhar chegarasi) nechaga teng?",
        options: ["0.5 M_☉", "1.44 M_☉", "3.0 M_☉", "8.0 M_☉"],
        answer: 1,
        explain: "Subrahmanyan Chandrasekhar 1.44 Quyosh massasidan og'ir oq mitti gravitatsiyaga dosh berolmasligini isbotlagan.",
      },
      {
        q: "Massasi 10 Quyosh massasiga teng qora tuynukning Shvartsshild radiusi taxminan qancha? (Quyosh uchun r_s ≈ 3 km)",
        options: ["3 km", "30 km", "300 km", "3000 km"],
        answer: 1,
        explain: "r_s = 2GM/c² massaga to'g'ri proporsional bo'lgani uchun 10 · 3 km = 30 km.",
      },
      {
        q: "Neytron yulduzning o'rtacha zichligi nimaga yaqin?",
        options: ["Suv zichligiga (10³ kg/m³)", "Qo'rg'oshin zichligiga", "Atom yadrosi zichligiga (~10¹⁷ kg/m³)", "Havo zichligiga"],
        answer: 2,
        explain: "Protonlar va elektronlar neytronlarga siqilib, bir necha Quyosh massasini ~20 km diametrli yadro zichligidagi sharga joylaydi.",
      },
      {
        q: "Bizning Somon yo'li galaktikamiz tuzilishiga ko'ra qaysi turdagi galaktikalarga kiradi?",
        options: ["Elliptik galaktika", "Kesimli (barli) spiral galaktika", "Noto'g'ri (irregulyar) galaktika", "Halqasimon galaktika"],
        answer: 1,
        explain: "Somon yo'li markaziy bar (to'sin) ga va bir necha spiral qo'llarga ega SBbc tipidagi spiral galaktikadir.",
      },
      {
        q: "Ikki yulduz bir xil sirt haroratiga ega, ammo birinchisining radiusi ikkinchisinikidan 2 marta katta. Birinchi yulduzning yorqinligi necha marta katta?",
        options: ["2 marta", "4 marta", "8 marta", "16 marta"],
        answer: 1,
        explain: "L = 4πR²σT⁴ bo'lgani uchun R 2 marta ortsa, L 2² = 4 marta ortadi.",
      },
      {
        q: "Yillik parallaksi p = 0.25'' (yoy sekundi) bo'lgan yulduzgacha masofa necha parsekga teng?",
        options: ["0.25 pk", "2 pk", "4 pk", "12.5 pk"],
        answer: 2,
        explain: "d(pk) = 1 / p('') = 1 / 0.25 = 4 parsek (≈ 13 yorug'lik yili).",
      },
      {
        q: "Qora tuynuk hodisalar gorizonti (r = r_s) ning asosiy fizik ta'rifi nima?",
        options: ["Yulduzning yuzasi", "Ikkinchi kosmik tezlik yorug'lik tezligi c ga teng bo'lgan chegara sirt", "Magnit qutblar chizig'i", "Harorat nol bo'lgan joy"],
        answer: 1,
        explain: "v_II = √(2GM/r_s) = c bo'lgani uchun ichkaridan hech bir signal tashqariga chiqa olmaydi.",
      },
    ],
    problems: [
      {
        variants: [[10], [20], [5], [100]],
        build(i) {
          const [msun] = this.variants[i];
          const rs = 2.95 * msun;
          return {
            q: `Massasi M = ${msun} M_☉ bo'lgan qora tuynukning Shvartsshild radiusi (km) taxminan qancha? (Quyosh uchun r_s = 2.95 km)`,
            correct: Number(rs.toFixed(1)),
            unit: 'km',
            explain: `r_s = 2.95 · ${msun} = ${rs.toFixed(1)} km.`,
          };
        },
      },
      {
        variants: [[0.5], [0.2], [0.1], [0.4]],
        build(i) {
          const [p] = this.variants[i];
          const d = 1 / p;
          return {
            q: `Yulduzning yillik parallaksi p = ${p}'' (yoy sekundi). Yulduzgacha bo'lgan masofani parsekda (pk) toping.`,
            correct: Number(d.toFixed(1)),
            unit: 'pk',
            explain: `d = 1 / p = 1 / ${p} = ${d.toFixed(1)} pk.`,
          };
        },
      },
      {
        variants: [[2, 1], [3, 1], [1, 2], [4, 1]],
        build(i) {
          const [rRat, tRat] = this.variants[i];
          const lRat = rRat * rRat * Math.pow(tRat, 4);
          return {
            q: `A yulduz radiusi B yulduznikidan ${rRat} marta, harorati esa ${tRat} marta katta. A yulduzning yorqinligi B nikidan necha marta katta?`,
            correct: Number(lRat.toFixed(1)),
            unit: 'marta',
            explain: `L_A / L_B = (R_A/R_B)²·(T_A/T_B)⁴ = ${rRat}² · ${tRat}⁴ = ${lRat.toFixed(1)} marta.`,
          };
        },
      },
    ],
  },
  {
    id: '8-3',
    code: '8.3',
    sectionId: 'sec-8',
    subsectionId: '8A',
    subsectionTitle: '8. Astrofizika va Kosmologiya',
    title: "Koinot tuzilishi, Xabbl qonuni va Katta Portlash",
    subtitle: "Xabbl qonuni, Koinotning kengayishi, Katta Portlash (Big Bang), qorong'i materiya va qorong'i energiya",
    theory: {
      overview:
        "1929-yilda Edvin Xabbl uzoq galaktikalar spektridagi qizil siljishni ($z = \\Delta\\lambda/\\lambda_0$) o'lchab, ularning barchasi bizdan uzoqlashayotganini va uzoqlashish tezligi masofaga to'g'ri proporsional ekanligini kashf etdi: $v = H_0 \\cdot d$. Bu Koinotning dinamik ravishda kengayayotganini ko'rsatdi va Katta Portlash (Big Bang) nazariyasini tasdiqladi (Koinot yoshi $\\approx 13.8$ mlrd yil, relikt nurlanish harorati 2.725 K). Zamonaviy kosmologik kuzatuvlar (galaktikalar aylanish egri chiziqlari va Ia tipdagi o'ta yangi yulduzlar) shuni ko'rsatadiki, Koinotdagi oddiy barion materiya atigi ~5% ni tashkil qiladi; ~27% yorug'lik chiqarmaydigan qorong'i materiyaga, ~68% esa Koinotning tezlanuvchan kengayishini ta'minlaydigan qorong'i energiyaga to'g'ri keladi.",
      keyLaws: [
        {
          title: "Xabbl qonuni",
          text: "Uzoq galaktikalarning kosmologik kengayish tufayli uzoqlashish tezligi ularning masofasiga to'g'ri proporsional: $v = H_0 \\cdot d$, bu yerda $H_0 \\approx 70\\text{ km/(s}\\cdot\\text{Mpk)}$ — Xabbl doimiysi.",
        },
        {
          title: "Katta Portlash (Big Bang) dalillari",
          text: "1) Xabbl kengayishi; 2) 2.725 K relikt (CMB) mikroto'lqinli fon nurlanishi; 3) Yengil elementlar (75% H, 25% He) birlamchi nukleosintezi.",
        },
        {
          title: "Koinotning massa-energiya balansi",
          text: "ΛCDM modeliga ko'ra: ~68% qorong'i energiya (kengayishni tezlashtiradi), ~27% qorong'i materiya (galaktikalarni bog'lab turadi), ~5% ko'rinadigan atomar (barion) materiya.",
        },
      ],
      formulas: [
        { latex: 'v = H_0 \\cdot d', name: 'Xabbl qonuni', symbols: 'H_0 \\approx 70\\text{ km/(s}\\cdot\\text{Mpk)}, d — masofa (Mpk)' },
        { latex: 't_0 \\approx \\frac{1}{H_0}', name: 'Koinotning Xabbl yoshi', symbols: '\\approx 13.8\\text{ milliard yil}' },
        { latex: 'z = \\frac{\\lambda_{\\text{kuz}} - \\lambda_0}{\\lambda_0} \\approx \\frac{v}{c}\\; (v \\ll c)', name: 'Kosmologik qizil siljish', symbols: 'z > 0 kengayishni bildiradi' },
      ],
      constants: [
        { name: "Xabbl doimiysi (o'rtacha)", symbol: 'H_0', value: '≈ 70', unit: 'km/(s·Mpk)' },
        { name: "Koinotning yoshi (Planck/ΛCDM)", symbol: 't_0', value: '13.79 × 10⁹', unit: 'yil' },
        { name: "Relikt nurlanish harorati", symbol: 'T_CMB', value: '2.725', unit: 'K' },
      ],
      applications: [
        "Jeyms Uebb (JWST) infraqizil teleskopi kuchli qizil siljishli (z > 10) ilk galaktikalarning yorug'ligini qayd etmoqda.",
        "Gravitatsion linzalash usuli orqali galaktika klasterlari ichidagi ko'rinmas qorong'i materiya xaritasi tuziladi.",
        "Ia tipdagi o'ta yangi yulduzlar ('standart shamlar') Koinotning tezlanib kengayishini kashf qilishda (2011 Nobel mukofoti) hal qiluvchi rol o'ynadi.",
      ],
      calculator: {
        title: "Xabbl qonuni va kosmologik qizil siljish kalkulyatori",
        formulaDisplay: 'v = H₀ · d,   z = Δλ / λ₀ ≈ v / c',
        inputs: [
          { key: 'd', label: 'Galaktikagacha masofa d', symbol: 'd', unit: 'Mpk', min: 10, max: 2000, step: 10, default: 200 },
          { key: 'H0', label: 'Xabbl doimiysi H₀', symbol: 'H₀', unit: 'km/(s·Mpk)', min: 65, max: 75, step: 0.5, default: 70 },
        ],
        compute: (v) => {
          const vel = v.H0 * v.d;
          const z = vel / 299792;
          const mly = v.d * 3.2616;
          return {
            value: `${vel.toFixed(0)} km/s`,
            unit: '',
            summary: `Masofa: ${mly.toFixed(0)} mln yorug'lik yili | Taxminiy qizil siljish z ≈ ${z.toFixed(4)} | Koinot yoshi ~ ${(977.8 / v.H0).toFixed(2)} mlrd yil`,
          };
        },
      },
    },
    simulation: {
      title: "Koinotning kengayishi va Xabbl qonuni 3D kuzatuvi",
      openSourceUrl: 'sims/effectuall/Astronaut.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D koinot sahnasini ko'ring va pastdagi Xabbl kengayishi hamda galaktikalar qizil siljishi simulyatorida vaqt/masofa o'zgarishini sinang.",
      alternateSims: [
        { label: "Gravitatsiya va fazo (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Gravitation_Law.html' },
      ],
      parametric: {
        mode: 'hubble_expansion',
        title: "Katta Portlash va galaktikalarning Xabbl kengayishi simulyatori",
        description: "Kengayish shkalasi (vaqt) va Xabbl doimiysini o'zgartirib, masofa ortgan sari galaktikalarning qizil siljishi qanday oshishini kuzating.",
        controls: [
          { key: 'scale', label: 'Fazo masshtabi a(t)', unit: '×', min: 1.0, max: 3.5, step: 0.1, value: 1.8 },
          { key: 'H0', label: 'Xabbl doimiysi H₀', unit: 'km/s/Mpk', min: 60, max: 80, step: 2, value: 70 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Xabbl qonuniga ko'ra uzoq galaktikaning bizdan uzoqlashish tezligi nimaga proporsional?",
        options: ["Galaktika massasiga", "Galaktikagacha bo'lgan masofaga (v = H₀·d)", "Masofa kvadratiga", "Haroratiga"],
        answer: 1,
        explain: "Galaktika qancha uzoq bo'lsa, oradagi fazo shuncha tez kengayadi: v = H₀·d.",
      },
      {
        q: "Uzoq galaktikalardan kelayotgan yorug'lik spektr chiziqlarining qizil tomonga siljishi nimani anglatadi?",
        options: ["Galaktikalar bizga yaqinlashmoqda", "Galaktikalar bizdan uzoqlashmoqda (Koinot kengaymoqda)", "Yorug'lik yo'lda soviydi", "Teleskop oynasi kirlangan"],
        answer: 1,
        explain: "Fazo kengayishi yorug'lik to'lqin uzunligini cho'zadi (qizil siljish, Δλ > 0), bu Koinot kengayishining asosiy dalilidir.",
      },
      {
        q: "Katta Portlash nazariyasining eng muhim kuzatuv tasdiqlaridan biri bo'lgan relikt (CMB) nurlanishning hozirgi harorati qancha?",
        options: ["0 K", "2.725 K", "300 K", "6000 K"],
        answer: 1,
        explain: "Koinot ~380 ming yoshida shaffoflashganda chiqqan nurlanish kengayish natijasida ~1100 marta sovib, T ≈ 2.725 K mikroto'lqinli fonga aylangan.",
      },
      {
        q: "Zamonaviy kosmologiyaga ko'ra Koinot energiya zichligining eng katta (~68%) qismini nima tashkil etadi?",
        options: ["Yulduzlar va sayyoralar", "Qora tuynuklar", "Qorong'i energiya", "Neytrinolar"],
        answer: 2,
        explain: "Koinot balansi: ~68% qorong'i energiya, ~27% qorong'i materiya, ~5% oddiy barion modda.",
      },
      {
        q: "Spiral galaktikalar tashqi qismidagi yulduzlarning kutilganidan tezroq aylanishi nimaning mavjudligini isbotlaydi?",
        options: ["Qorong'i materiya", "Antimodda", "Qizil gigantlar", "Quyosh shamoli"],
        answer: 0,
        explain: "Qo'shimcha ko'rinmas gravitatsion massa (qorong'i materiya galosi) galaktika chetidagi yulduzlarni sochilib ketishdan ushlab turadi.",
      },
      {
        q: "Koinotning hozirgi yoshi taxminan necha milliard yilga teng?",
        options: ["4.5 mlrd yil", "13.8 mlrd yil", "100 mlrd yil", "1 mlrd yil"],
        answer: 1,
        explain: "Kosmologik kuzatuvlar Koinot yoshini 13.79 ± 0.02 milliard yil deb beradi (Quyosh sistemasi ~4.6 mlrd yil).",
      },
      {
        q: "H₀ = 70 km/(s·Mpk) bo'lganda bizdan d = 100 Mpk uzoqlikdagi galaktikaning uzoqlashish tezligi qancha?",
        options: ["700 km/s", "7000 km/s", "70 km/s", "1400 km/s"],
        answer: 1,
        explain: "v = H₀·d = 70 · 100 = 7000 km/s.",
      },
      {
        q: "Qorong'i energiyaning Koinot evolyutsiyasidagi asosiy roli nima?",
        options: ["Galaktikalarni bir-biriga tortadi", "Koinotning kengayishini tezlashtiradi", "Yorug'likni yutadi", "Yulduzlarni yoqadi"],
        answer: 1,
        explain: "Manfiy bosimga ega qorong'i energiya gravitatsiyaga qarshi itarish ta'siri berib, Koinot kengayishini tezlashtirmoqda.",
      },
    ],
    problems: [
      {
        variants: [[100, 70], [300, 70], [50, 72], [200, 68]],
        build(i) {
          const [d, H0] = this.variants[i];
          const v = d * H0;
          return {
            q: `Galaktikagacha bo'lgan masofa d = ${d} Mpk, Xabbl doimiysi H₀ = ${H0} km/(s·Mpk). Galaktikaning uzoqlashish tezligini (km/s) hisoblang.`,
            correct: v,
            unit: 'km/s',
            explain: `v = H₀·d = ${H0} · ${d} = ${v} km/s.`,
          };
        },
      },
      {
        variants: [[14000, 70], [21000, 70], [3500, 70], [10800, 72]],
        build(i) {
          const [v, H0] = this.variants[i];
          const d = v / H0;
          return {
            q: `Kosmologik qizil siljish bo'yicha galaktikaning uzoqlashish tezligi v = ${v} km/s aniqlandi. H₀ = ${H0} km/(s·Mpk) bo'lsa, galaktikagacha masofa (Mpk) qancha?`,
            correct: Number(d.toFixed(1)),
            unit: 'Mpk',
            explain: `d = v / H₀ = ${v} / ${H0} = ${d.toFixed(1)} Mpk.`,
          };
        },
      },
      {
        variants: [[600, 612], [500, 520], [400, 412], [656, 688.8]],
        build(i) {
          const [l0, lkuz] = this.variants[i];
          const z = (lkuz - l0) / l0;
          return {
            q: `Laboratoriyada λ₀ = ${l0} nm bo'lgan vodorod spektr chizig'i uzoq galaktika spektrida λ = ${lkuz} nm da kuzatildi. Qizil siljish z qiymatini toping.`,
            correct: Number(z.toFixed(3)),
            unit: '',
            explain: `z = (λ - λ₀) / λ₀ = (${lkuz} - ${l0}) / ${l0} = ${z.toFixed(3)}.`,
          };
        },
      },
    ],
  },
];
