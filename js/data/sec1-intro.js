export const SEC1_TOPICS = [
  {
    id: '1-1',
    code: '1.1',
    sectionId: 'sec-1',
    subsectionId: null,
    subsectionTitle: null,
    title: 'Fizika va tabiat',
    subtitle: 'Kuzatish va tajriba, fizik hodisalar, ilmiy tadqiqot usullari.',
    theory: {
      overview:
        'Fizika (yunoncha «physis» — tabiat) materiyaning eng umumiy shakllari, ularning tuzilishi, xossalari va o‘zaro ta’sir qonuniyatlarini o‘rganuvchi fundamental fandir. Oliy ta’lim kursida fizika makroskopik jismlardan tortib kvant zarralari va kosmik tuzilmalargacha bo‘lgan barcha hodisalarni yagona matematik modellar asosida izohlaydi.\n\nIlmiy bilish uch asosiy bosqichdan iborat: 1) tabiat hodisalarini maqsadli kuzatish; 2) ilmiy gipoteza (faraz) ilgari surish va fizik model qurish; 3) nazorat qilinadigan sharoitda miqdoriy tajriba (eksperiment) o‘tkazib, nazariyani tekshirish. Fizik hodisalar mexanik, issiqlik, elektromagnit, optik, atom-yadro va kvant turlariga bo‘linadi, ammo ularning barchasi energiya va impuls saqlanishi kabi umumiy tamoyillarga bo‘ysunadi.',
      keyLaws: [
        { title: 'Kuzatish va tajriba tamoyili', text: 'Kuzatishda tadqiqotchi hodisaga aralashmaydi, tajribada esa tashqi parametrlarni (harorat, bosim, kuch) maqsadli boshqarib, takrorlanuvchi natija oladi.' },
        { title: 'Fizik modellashtirish', text: 'Haqiqiy murakkab ob’ektni asosiy xossalarini saqlagan holda soddalashtirish (masalan: moddiy nuqta, ideal gaz, mutlaq qattiq jism).' },
        { title: 'Sabab-oqibat va determinizm', text: 'Klassik fizikada tizimning boshlang‘ich holati va ta’sir etuvchi kuchlar uning keyingi evolyutsiyasini bir qiymatli aniqlaydi.' },
        { title: 'Moslik tamoyili (N. Bor)', text: 'Har qanday yangi umumiy nazariya (nisbiylik, kvant mexanikasi) chegaraviy hollarda eski klassik nazariyaga (Nyuton mexanikasiga) aylanishi shart.' },
      ],
      formulas: [
        { latex: 'E = m c²', name: 'Massa va energiya bog‘liqligi', symbols: 'E — energiya (J), m — massa (kg), c = 3·10⁸ m/s — yorug‘lik tezligi' },
        { latex: 'ρ = m / V', name: 'Modda zichligi', symbols: 'ρ — zichlik (kg/m³), m — massa (kg), V — hajm (m³)' },
        { latex: 'N(t) = N₀ · 2^(−t/T)', name: 'Tabiiy jarayonlar dinamikasi namunasi', symbols: 'N — holat kattaligi, t — vaqt, T — xarakterli davr' },
        { latex: 'Δx = x₂ − x₁', name: 'Kuzatilayotgan holat o‘zgarishi', symbols: 'x₁, x₂ — boshlang‘ich va oxirgi koordinatalar' },
      ],
      constants: [
        { name: 'Yorug‘likning vakuumdagi tezligi', symbol: 'c', value: '2.998·10⁸', unit: 'm/s' },
        { name: 'Gravitatsiya doimiysi', symbol: 'G', value: '6.674·10⁻¹¹', unit: 'N·m²/kg²' },
        { name: 'Plank doimiysi', symbol: 'h', value: '6.626·10⁻³⁴', unit: 'J·s' },
      ],
      applications: [
        'Katta adron kollayderi (CERN) va kosmik teleskoplar orqali fundamental zarralar hamda koinot evolyutsiyasini tadqiq qilish.',
        'Muhandislikda yangi konstruksiyalarni yaratishdan oldin raqamli kompyuter modellashtirish (WebGL/FEM simulyatsiya) qo‘llash.',
        'Tibbiyotda fizik hodisalarga asoslangan MRT, rentgen va lazer diagnostika tizimlari.',
      ],
      calculator: {
        title: 'Zichlik va massa ekvivalentini hisoblash',
        formulaDisplay: 'ρ = m / V  va  E = m·c²',
        inputs: [
          { key: 'm', label: 'Jism massasi', symbol: 'm', unit: 'kg', min: 0.1, max: 1000, step: 0.5, default: 5 },
          { key: 'V', label: 'Jism hajmi', symbol: 'V', unit: 'm³', min: 0.001, max: 10, step: 0.005, default: 0.002 },
        ],
        compute: (v) => {
          const rho = v.m / Math.max(1e-6, v.V);
          const E = v.m * 9e16;
          return {
            value: rho.toFixed(1),
            unit: 'kg/m³',
            summary: `Zichlik ρ = ${rho.toFixed(1)} kg/m³. Tinchlikdagi to‘la energiya E = ${E.toExponential(2)} J.`,
          };
        },
      },
    },
    simulation: {
      title: 'Ilmiy Tajriba va 3D Fizik Modellar Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Games__volume.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Geometrik jismlarning o‘lchamlari, hajmi va fizik modellashtirish parametrlarini 3D muhitda o‘rganing.',
      alternateSims: [
        { label: 'Hajm va Modellashtirish 3D', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__volume.html' },
        { label: 'WebGL2 Dinamika Tajribasi', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'intro_phenomena',
        title: 'Fizik Hodisalar va Model Parametrlari Simulyatori',
        description: 'Tajriba parametrlarini (vaqt masshtabi, massa, gravitatsiya) o‘zgartirib, nazariy egri chiziq va real tajriba nuqtalari mosligini kuzating.',
        controls: [
          { key: 'mass', label: 'Namuna massasi', unit: 'kg', min: 1, max: 50, step: 1, value: 10 },
          { key: 'g', label: 'Muhit gravitatsiyasi', unit: 'm/s²', min: 1.6, max: 20, step: 0.2, value: 9.8 },
          { key: 'noise', label: 'Tajriba shovqini', unit: '%', min: 0, max: 15, step: 1, value: 3 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ilmiy bilishning qaysi usulida tadqiqotchi hodisaning tabiiy kechishiga aralashmasdan faqat ma’lumot yig‘adi?', options: ['Kuzatish', 'Eksperiment', 'Ekstrapolyatsiya', 'Kalibrlash'], answer: 0, explain: 'Kuzatishda fizik hodisa tabiiy sharoitda aralashuvsiz qayd etiladi; eksperimentda esa parametrlar sun’iy boshqariladi.' },
      { q: 'Fizik model tushunchasi nimani anglatadi?', options: ['Tadqiqot uchun hodisaning ikkilamchi jihatlarini tashlab, asosiy xossalarini ajratib olish', 'Faqat plastikdan yasalgan maket', 'O‘lchov asbobining pasporti', 'Tasodifiy taxmin'], answer: 0, explain: 'Fizik model (moddiy nuqta, ideal gaz) murakkab tizimni matematik tahlil qilish imkonini beradi.' },
      { q: 'Qaysi hodisa issiqlik hodisalari turkumiga kiradi?', options: ['Muzning erishi va bug‘lanish', 'Yorug‘likning sinishi', 'Magnit strelkasining burilishi', 'Yadro bo‘linishi'], answer: 0, explain: 'Muzning erishi va bug‘lanish molekulalarning issiqlik harakati bilan bog‘liq faza o‘tishlaridir.' },
      { q: 'Nima uchun nazariya albatta tajribada tekshirilishi kerak?', options: ['Tajriba nazariyaning haqiqatga mosligi mezonidir', 'Faqat darslik chiroyli bo‘lishi uchun', 'Birliklarni yo‘qotish uchun', 'Kuzatishni taqiqlash uchun'], answer: 0, explain: 'Fizikada har qanday gipoteza va nazariya tajriba orqali tasdiqlanishi yoki rad etilishi lozim.' },
      { q: 'Qaysi kattalik moddaning o‘ziga xos fizik xossasini (zichligini) ifodalaydi?', options: ['Massaning hajmga nisbati (m/V)', 'Og‘irlikning tezlikka nisbati', 'Kuchning vaqtga ko‘paytmasi', 'Masofaning kvadratiga teskari kattalik'], answer: 0, explain: 'Zichlik ρ = m / V birlik hajmga to‘g‘ri keluvchi massani bildiradi.' },
      { q: 'Borning moslik tamoyiliga ko‘ra:', options: ['Yangi nazariya chegaraviy hollarda eski nazariya natijalariga o‘tishi kerak', 'Yangi nazariya eski qonunlarni butunlay bekor qiladi', 'Fizikada faqat bitta doimiy mavjud', 'Tajriba natijasi doimo nolga teng'], answer: 0, explain: 'Masalan, tezlik c dan ancha kichik bo‘lganda relyativistik formulalar Nyuton mexanikasiga aylanadi.' },
      { q: 'Quyidagilardan qaysi biri elektromagnit hodisa hisoblanadi?', options: ['O‘tkazgichda elektr toki oqishi va chaqmoq', 'Jismning erkin tushishi', 'Tovushning havoda tarqalishi', 'Diffuziya jarayoni'], answer: 0, explain: 'Elektr toki va chaqmoq zaryadlangan zarralar hamda elektromagnit maydon ta’siridir.' },
      { q: 'Gipoteza va fizik qonun orasidagi asosiy farq nimada?', options: ['Qonun tajribada ko‘p marta tasdiqlangan va barqaror bog‘lanishni ifodalaydi', 'Gipoteza faqat formulalardan iborat', 'Qonun tekshirilmaydi', 'Farqi yo‘q'], answer: 0, explain: 'Gipoteza — asoslangan ilmiy taxmin; tajriba bilan tasdiqlangach u qonun maqomini oladi.' },
      { q: 'Moddiy nuqta modeli qaysi sharoitda qo‘llaniladi?', options: ['Jism o‘lchamlari harakat masofasiga nisbatan juda kichik bo‘lganda', 'Jism faqat gaz holatida bo‘lganda', 'Jism harakatsiz turganda', 'Massasi nol bo‘lganda'], answer: 0, explain: 'Masalan, Yerning Quyosh atrofidagi orbitasini hisoblashda Yer moddiy nuqta deb olinadi.' },
      { q: 'Fizikada makroskopik va mikroskopik darajalar chegarasi nimaga bog‘liq?', options: ['O‘rganilayotgan ob’ekt o‘lchamlari (10⁻¹⁰ m atomlar vs katta jismlar)', 'Faqat laboratoriya haroratiga', 'Ranglar soniga', 'Vaqt mintaqasiga'], answer: 0, explain: 'Mikroolam atom va elementar zarralarni, makroolam esa ko‘plab zarralardan tashkil topgan jismlarni qamrab oladi.' },
    ],
    problems: [
      {
        variants: [[2.7, 0.001], [7.8, 0.001], [8.9, 0.002], [11.3, 0.002]],
        build: (i) => {
          const [m, V] = [[2.7, 0.001], [7.8, 0.001], [8.9, 0.002], [11.3, 0.002]][i];
          const rho = m / V;
          return {
            q: `Massasi ${m} kg va hajmi ${V} m³ bo‘lgan metall namunasining zichligini (kg/m³) toping.`,
            correct: rho,
            unit: 'kg/m³',
            explain: `Zichlik formulasi: ρ = m / V = ${m} / ${V} = ${rho} kg/m³.`,
          };
        },
      },
      {
        variants: [[0.002, 2700], [0.005, 7800], [0.004, 1000], [0.003, 8900]],
        build: (i) => {
          const [V, rho] = [[0.002, 2700], [0.005, 7800], [0.004, 1000], [0.003, 8900]][i];
          const m = rho * V;
          return {
            q: `Zichligi ${rho} kg/m³ bo‘lgan moddadan yasalgan ${V} m³ hajmli jismning massasi necha kilogramm?`,
            correct: m,
            unit: 'kg',
            explain: `m = ρ · V = ${rho} · ${V} = ${m} kg.`,
          };
        },
      },
    ],
  },
  {
    id: '1-2',
    code: '1.2',
    sectionId: 'sec-1',
    subsectionId: null,
    subsectionTitle: null,
    title: "O'lchashlar",
    subtitle: "Xalqaro birliklar tizimi (SI), asosiy va hosilaviy kattaliklar, o'lchov asboblari va xatoliklar.",
    theory: {
      overview:
        'Fizik kattalikni o‘lchash — uni shu turdagi birlik sifatida qabul qilingan etalon kattalik bilan taqqoslash demakdir. 1960-yilda qabul qilingan va 2019-yilda fundamental doimiylar asosida qayta aniqlangan Xalqaro birliklar tizimi (SI) 7 ta asosiy kattalikdan iborat: uzunlik (metr, m), massa (kilogramm, kg), vaqt (sekund, s), elektr toki kuchi (amper, A), termodinamik harorat (kelvin, K), modda miqdori (mol) va yorug‘lik kuchi (kandela, kd).\n\nBarcha boshqa fizik kattaliklar (tezlik m/s, kuch N = kg·m/s², energiya J = kg·m²/s², bosim Pa = N/m²) asosiy birliklardan matematik bog‘lanishlar orqali olinadigan hosilaviy kattaliklardir. Har qanday real o‘lchashda xatolik mavjud bo‘ladi: asbob shkalasi bo‘linmasi qiymati bilan bog‘liq asbob xatoligi (Δx_asbob) va tasodifiy og‘ishlar natijasidagi statistik xatolik (Δx_tasodifiy). O‘lchash aniqligi nisbiy xatolik ε = (Δx / x_o‘rt)·100% bilan baholanadi.',
      keyLaws: [
        { title: 'SI tizimining 7 asosiy birligi', text: 'Metr (m), kilogramm (kg), sekund (s), amper (A), kelvin (K), mol (mol) va kandela (kd) mustaqil etalonlarga tayanadi.' },
        { title: 'O‘lchov asbobi bo‘linma qiymati', text: 'Shkaladagi ikki qo‘shni raqam farqini ular orasidagi bo‘linmalar soniga bo‘lish orqali topiladi: C = (b − a) / n.' },
        { title: 'Absolyut va nisbiy xatolik', text: 'Absolyut xatolik Δx = |x − x₀| o‘lchangan qiymatning haqiqiy qiymatdan og‘ishini, nisbiy xatolik ε = Δx / x esa sifatni ko‘rsatadi.' },
        { title: 'O‘lchamlar tahlili (Dimensional Analysis)', text: 'Har qanday fizik tenglamaning chap va o‘ng tomonidagi SI birliklar o‘lchami bir xil bo‘lishi shart.' },
      ],
      formulas: [
        { latex: 'x = x_o‘rt ± Δx', name: 'O‘lchash natijasini yozish shakli', symbols: 'x_o‘rt — o‘rtacha qiymat, Δx — to‘liq absolyut xatolik' },
        { latex: 'ε = (Δx / x_o‘rt) · 100%', name: 'Nisbiy xatolik', symbols: 'ε — foizda ifodalangan nisbiy xatolik' },
        { latex: 'C = (x₂ − x₁) / n', name: 'Asbob shkalasi bo‘linma qiymati', symbols: 'x₁, x₂ — qo‘shni sonlar, n — ular orasidagi bo‘linmalar soni' },
        { latex: 'Δx_to‘liq = √(Δx_tas² + Δx_asb²)', name: 'To‘liq absolyut xatolik', symbols: 'Δx_tas — tasodifiy xatolik, Δx_asb — asbob xatoligi' },
      ],
      constants: [
        { name: '1 kilometr', symbol: 'km', value: '10³', unit: 'm' },
        { name: '1 millimetr', symbol: 'mm', value: '10⁻³', unit: 'm' },
        { name: '1 mikrometr', symbol: 'μm', value: '10⁻⁶', unit: 'm' },
        { name: '1 nanometr', symbol: 'nm', value: '10⁻⁹', unit: 'm' },
      ],
      applications: [
        'Shtangensirkul (0.05 mm) va mikrometr (0.01 mm) yordamida mashinasozlik detallariga ishlov berish aniqligini nazorat qilish.',
        'Laboratoriya tajribalarida ko‘p martalik o‘lchashlarning o‘rtacha qiymati va standart og‘ishini hisoblash.',
        'Formulalarning to‘g‘riligini SI birliklar o‘lchamini tekshirish orqali tezkor verifikatsiya qilish.',
      ],
      calculator: {
        title: 'Absolyut va nisbiy o‘lchash xatoligi kalkulyatori',
        formulaDisplay: 'Δx = √(Δx₁² + Δx₂²),  ε = (Δx / x)·100%',
        inputs: [
          { key: 'x', label: 'O‘rtacha o‘lchangan qiymat', symbol: 'x', unit: 'birlik', min: 1, max: 1000, step: 0.5, default: 25 },
          { key: 'dx1', label: 'Asbob xatoligi', symbol: 'Δx₁', unit: 'birlik', min: 0.01, max: 50, step: 0.05, default: 0.5 },
          { key: 'dx2', label: 'Tasodifiy xatolik', symbol: 'Δx₂', unit: 'birlik', min: 0, max: 50, step: 0.05, default: 0.3 },
        ],
        compute: (v) => {
          const dx = Math.hypot(v.dx1, v.dx2);
          const eps = (dx / Math.max(1e-6, v.x)) * 100;
          return {
            value: eps.toFixed(2),
            unit: '%',
            summary: `To‘liq absolyut xatolik Δx = ±${dx.toFixed(3)}. Natija: (${v.x} ± ${dx.toFixed(3)}), nisbiy xatolik ε = ${eps.toFixed(2)}%.`,
          };
        },
      },
    },
    simulation: {
      title: 'SI Birliklari, O‘lchov Asboblari va Xatoliklar Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Games__volume.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: '3D o‘lchov modellarida chiziqli o‘lchamlarni o‘zgartirib, hajm va yuza kattaliklarining o‘zgarishini o‘lchang.',
      alternateSims: [
        { label: '3D Geometrik O‘lchashlar', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__volume.html' },
        { label: 'WebGL2 O‘lchov va Koordinata Gridi', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'measurement_error',
        title: 'Shtangensirkul va Statistik Xatolik Simulyatori',
        description: 'Shkala bo‘linma qiymati va takroriy o‘lchashlar soni (N) ning o‘lchash xatoligiga ta’sirini real vaqtda ko‘ring.',
        controls: [
          { key: 'trueVal', label: 'Haqiqiy uzunlik', unit: 'mm', min: 10, max: 120, step: 1, value: 45 },
          { key: 'div', label: 'Asbob bo‘linma qiymati', unit: 'mm', min: 0.05, max: 2, step: 0.05, value: 0.5 },
          { key: 'trials', label: 'O‘lchashlar soni N', unit: 'ta', min: 3, max: 30, step: 1, value: 12 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Xalqaro birliklar tizimida (SI) nechta asosiy fizik kattalik mavjud?', options: ['7 ta', '5 ta', '9 ta', '3 ta'], answer: 0, explain: 'SI tizimida 7 ta asosiy birlik bor: m, kg, s, A, K, mol, kd.' },
      { q: 'Quyidagilardan qaysi biri SI tizimidagi ASOSIY birlik hisoblanadi?', options: ['Amper (A)', 'Nyuton (N)', 'Joul (J)', 'Volt (V)'], answer: 0, explain: 'Amper (tok kuchi birligi) asosiy birlik; Nyuton, Joul va Volt esa hosilaviy birliklardir.' },
      { q: 'Kuch birligi 1 Nyutonning asosiy SI birliklari orqali ifodasi qanday?', options: ['1 kg·m/s²', '1 kg·m²/s²', '1 kg·m/s', '1 kg/m·s²'], answer: 0, explain: 'Nyutonning 2-qonunidan F = m·a => [F] = kg · m/s².' },
      { q: 'Chizg‘ichning 2 sm va 3 sm belgilari orasida 10 ta teng bo‘linma bo‘lsa, bo‘linma qiymati qancha?', options: ['1 mm', '0.5 mm', '2 mm', '0.1 mm'], answer: 0, explain: 'C = (3 sm − 2 sm) / 10 = 10 mm / 10 = 1 mm.' },
      { q: '10⁻⁶ old qo‘shimchasi qaysi nom bilan ataladi?', options: ['Mikro (μ)', 'Milli (m)', 'Nano (n)', 'Piko (p)'], answer: 0, explain: 'milli = 10⁻³, mikro = 10⁻⁶, nano = 10⁻⁹, piko = 10⁻¹².' },
      { q: 'Agar l = (50 ± 0.5) sm bo‘lsa, o‘lchashning nisbiy xatoligi necha foiz?', options: ['1%', '0.5%', '2%', '5%'], answer: 0, explain: 'ε = (0.5 / 50) · 100% = 1%.' },
      { q: '72 km/soat tezlik SI tizimida qanchaga teng?', options: ['20 m/s', '7.2 m/s', '36 m/s', '25 m/s'], answer: 0, explain: '72 km/soat = 72000 m / 3600 s = 20 m/s.' },
      { q: 'Tasodifiy o‘lchash xatoligini kamaytirishning eng samarali usuli qaysi?', options: ['Tajribani bir necha marta takrorlab, o‘rtacha arifmetik qiymatni olish', 'Natijani yaxlitlash', 'Bitta o‘lchash bilan cheklanish', 'Asbobni almashtirmasdan faqat ko‘z bilan chamalash'], answer: 0, explain: 'Ko‘p martalik o‘lchashda tasodifiy og‘ishlar 1/√N ga proporsional ravishda kamayadi.' },
      { q: 'Energiya birligi 1 Joulning asosiy SI birliklaridagi ko‘rinishi qaysi?', options: ['kg·m²/s²', 'kg·m/s²', 'kg·m²/s³', 'kg·m/s'], answer: 0, explain: 'Ish A = F·s bo‘lgani uchun [A] = (kg·m/s²)·m = kg·m²/s².' },
      { q: '1 g/sm³ zichlik SI tizimida necha kg/m³ ga teng?', options: ['1000 kg/m³', '100 kg/m³', '10 kg/m³', '0.001 kg/m³'], answer: 0, explain: '1 g/sm³ = 10⁻³ kg / (10⁻² m)³ = 10⁻³ / 10⁻⁶ = 1000 kg/m³.' },
    ],
    problems: [
      {
        variants: [[20, 0.4], [40, 0.8], [50, 1.5], [100, 2.5]],
        build: (i) => {
          const [x, dx] = [[20, 0.4], [40, 0.8], [50, 1.5], [100, 2.5]][i];
          const eps = (dx / x) * 100;
          return {
            q: `Uzunlik l = (${x} ± ${dx}) sm tarzida o‘lchandi. Nisbiy xatolikni (%) toping.`,
            correct: eps,
            unit: '%',
            explain: `ε = (Δx / x) · 100% = (${dx} / ${x}) · 100% = ${eps}%.`,
          };
        },
      },
      {
        variants: [[10, 20, 10], [0, 50, 25], [10, 30, 5], [20, 60, 20]],
        build: (i) => {
          const [a, b, n] = [[10, 20, 10], [0, 50, 25], [10, 30, 5], [20, 60, 20]][i];
          const c = (b - a) / n;
          return {
            q: `Dinamometr shkalasida ${a} N va ${b} N belgilari orasida ${n} ta bo‘linma bor. Asbobning bo‘linma qiymati (N) qancha?`,
            correct: c,
            unit: 'N',
            explain: `C = (${b} − ${a}) / ${n} = ${c} N.`,
          };
        },
      },
    ],
  },
  {
    id: '1-3',
    code: '1.3',
    sectionId: 'sec-1',
    subsectionId: null,
    subsectionTitle: null,
    title: 'Vektorlar va skalyarlar',
    subtitle: "Vektorlarni qo'shish, ayirish, ko'paytirish va koordinata o'qlariga proyeksiyalash.",
    theory: {
      overview:
        'Fizik kattaliklar matematik tabiatiga ko‘ra ikki sinfga bo‘linadi: skalyar va vektor kattaliklar. Skalyar kattaliklar (massa m, vaqt t, harorat T, energiya E, zichlik ρ) faqat son qiymati va birligi bilan to‘liq aniqlanadi. Vektor kattaliklar (ko‘chish r⃗, tezlik v⃗, tezlanish a⃗, kuch F⃗, impuls p⃗) esa son qiymatidan (modulidan) tashqari fazodagi yo‘nalishga ham egadir.\n\nVektorlarni uchburchak, parallelogramm yoki ko‘pburchak qoidalari bo‘yicha geometrik qo‘shish mumkin, ammo muhandislik va oliy fizikada eng qulay usul koordinata o‘qlariga proyeksiyalashdir. Agar A⃗ = (A_x, A_y, A_z) va B⃗ = (B_x, B_y, B_z) bo‘lsa, u holda R⃗ = A⃗ + B⃗ ning komponentalari R_x = A_x + B_x, R_y = A_y + B_y bo‘ladi. Ikki vektorning skalyar ko‘paytmasi A⃗·B⃗ = A·B·cosα ish va energiya hisoblarida, vektor ko‘paytmasi |A⃗×B⃗| = A·B·sinα esa kuch momenti va Lorens kuchida asosiy rol o‘ynaydi.',
      keyLaws: [
        { title: 'Vektor proyeksiyalari', text: 'A_x = A·cosθ va A_y = A·sinθ; bu yerda θ — vektorning OX o‘qi musbat yo‘nalishi bilan hosil qilgan burchagi.' },
        { title: 'Vektorlarni qo‘shish (analitik usul)', text: 'Yig‘indi vektorning proyeksiyalari qo‘shiluvchi vektorlar proyeksiyalarining algebraik yig‘indisiga teng.' },
        { title: 'Skalyar ko‘paytma', text: 'A⃗·B⃗ = A·B·cosα = A_x·B_x + A_y·B_y + A_z·B_z — natija skalyar son (masalan, mexanik ish A = F⃗·s⃗).' },
        { title: 'Vektor ko‘paytma', text: 'C⃗ = A⃗ × B⃗ ning moduli C = A·B·sinα, yo‘nalishi esa o‘ng parma (o‘ng qo‘l) qoidasi bilan aniqlanadi.' },
      ],
      formulas: [
        { latex: 'A_x = A · cosθ,   A_y = A · sinθ', name: 'Dekart proyeksiyalari', symbols: 'A — vektor moduli, θ — OX o‘qidan burchak' },
        { latex: '|R⃗| = √(R_x² + R_y² + R_z²)', name: 'Vektor moduli (Pifagor)', symbols: 'R_x, R_y, R_z — koordinata proyeksiyalari' },
        { latex: 'A⃗ · B⃗ = A · B · cosα', name: 'Skalyar ko‘paytma', symbols: 'α — ikki vektor orasidagi burchak' },
        { latex: '|A⃗ × B⃗| = A · B · sinα', name: 'Vektor ko‘paytma moduli', symbols: 'α — ikki vektor orasidagi burchak' },
      ],
      constants: [
        { name: 'Ortogonaldagi birlik ortlar', symbol: 'i⃗, j⃗, k⃗', value: '|i⃗|=|j⃗|=|k⃗|=1', unit: 'o‘lchamsiz' },
        { name: 'Perpendikulyar vektorlar skalyar ko‘paytmasi', symbol: 'α = 90°', value: 'A⃗ · B⃗ = 0', unit: '—' },
      ],
      applications: [
        'Mexanikada bir nechta kuchlarning natijaviy (teng ta’sir etuvchi) kuchini topish.',
        'Robototexnika va 3D kompyuter grafikasida fazoviy burilishlar va yorug‘lik nurlarini hisoblash.',
        'Elektrodinamikada Lorens kuchi F⃗ = q(v⃗ × B⃗) va Poynting vektorini aniqlash.',
      ],
      calculator: {
        title: 'Ikki vektorni qo‘shish va skalyar ko‘paytma kalkulyatori',
        formulaDisplay: 'R = √(A² + B² + 2AB·cosα)',
        inputs: [
          { key: 'A', label: 'A vektor moduli', symbol: '|A|', unit: 'birlik', min: 1, max: 100, step: 1, default: 6 },
          { key: 'B', label: 'B vektor moduli', symbol: '|B|', unit: 'birlik', min: 1, max: 100, step: 1, default: 8 },
          { key: 'deg', label: 'Orasidagi burchak', symbol: 'α', unit: '°', min: 0, max: 180, step: 5, default: 90 },
        ],
        compute: (v) => {
          const rad = (v.deg * Math.PI) / 180;
          const R = Math.sqrt(v.A ** 2 + v.B ** 2 + 2 * v.A * v.B * Math.cos(rad));
          const dot = v.A * v.B * Math.cos(rad);
          const cross = v.A * v.B * Math.sin(rad);
          return {
            value: R.toFixed(2),
            unit: 'birlik',
            summary: `|A⃗+B⃗| = ${R.toFixed(2)}, Skalyar ko‘paytma A⃗·B⃗ = ${dot.toFixed(2)}, Vektor ko‘paytma |A⃗×B⃗| = ${cross.toFixed(2)}.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Vektor Algebrasi va Proyeksiyalar Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Vector_Algebra.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: '3D fazoda vektorlarni qo‘shish, ayirish va koordinata o‘qlariga proyeksiyalashni interaktiv sinab ko‘ring.',
      alternateSims: [
        { label: '3D Vektorlar Algebrasi', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Vector_Algebra.html' },
        { label: 'Vektor Komponentalari Tasviri', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Vector_Display.html' },
      ],
      parametric: {
        mode: 'vectors',
        title: 'Interaktiv Vektorlar Qo‘shish, Ayirish va Proyeksiya Simulyatori',
        description: 'A⃗ va B⃗ vektorlarning uzunligi va burchagini o‘zgartirib, R⃗ = A⃗ + B⃗ natijaviy vektor hamda proyeksiyalarni kuzating.',
        controls: [
          { key: 'aMag', label: 'A vektor uzunligi', unit: 'birlik', min: 20, max: 140, step: 5, value: 90 },
          { key: 'aAng', label: 'A burchagi θ₁', unit: '°', min: 0, max: 360, step: 5, value: 25 },
          { key: 'bMag', label: 'B vektor uzunligi', unit: 'birlik', min: 20, max: 140, step: 5, value: 75 },
          { key: 'bAng', label: 'B burchagi θ₂', unit: '°', min: 0, max: 360, step: 5, value: 105 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyidagi kattaliklardan qaysi biri SKALYAR kattalik hisoblanadi?', options: ['Energiya', 'Tezlik', 'Tezlanish', 'Kuch'], answer: 0, explain: 'Energiya faqat son qiymati bilan aniqlanadi, uning fazoviy yo‘nalishi yo‘q.' },
      { q: 'Modullari 3 va 4 birlik bo‘lgan ikki o‘zaro perpendikulyar vektor yig‘indisining moduli qanchaga teng?', options: ['5 birlik', '7 birlik', '1 birlik', '12 birlik'], answer: 0, explain: 'R = √(3² + 4²) = √25 = 5 birlik.' },
      { q: 'Ikki vektor orasidagi burchak 90° bo‘lsa, ularning skalyar ko‘paytmasi nimaga teng?', options: ['0', 'A·B', '−A·B', 'A/B'], answer: 0, explain: 'A⃗·B⃗ = A·B·cos(90°) = 0.' },
      { q: 'OX o‘qiga 60° burchak ostida yo‘nalgan 10 N kuchning OX o‘qidagi proyeksiyasi qancha?', options: ['5 N', '8.66 N', '10 N', '6 N'], answer: 0, explain: 'F_x = F·cos(60°) = 10 · 0.5 = 5 N.' },
      { q: 'Ikki vektorning vektor ko‘paytmasi moduli qaysi holda maksimal bo‘ladi?', options: ['Vektorlar o‘zaro perpendikulyar (α = 90°) bo‘lganda', 'Vektorlar parallel (α = 0°) bo‘lganda', 'Vektorlar qarama-qarshi (α = 180°) bo‘lganda', 'Birining moduli ikkinchisiga teng bo‘lganda'], answer: 0, explain: '|A⃗×B⃗| = A·B·sinα; sin(90°) = 1 maksimal qiymatdir.' },
      { q: 'Agar A⃗ = (2, 3, 0) va B⃗ = (4, −1, 0) bo‘lsa, skalyar ko‘paytma A⃗·B⃗ nimaga teng?', options: ['5', '11', '8', '−3'], answer: 0, explain: 'A⃗·B⃗ = 2·4 + 3·(−1) + 0·0 = 8 − 3 = 5.' },
      { q: 'Qaysi vektor kattaliklar yig‘indisi faqat modulini qo‘shish bilan emas, parallelogramm qoidasi bilan topiladi?', options: ['Barcha vektor kattaliklar (masalan, kuch va tezlik)', 'Faqat massa va hajm', 'Faqat harorat', 'Faqat bosim'], answer: 0, explain: 'Vektorlar yo‘nalishga ega bo‘lgani uchun parallelogramm yoki uchburchak qoidasi bilan qo‘shiladi.' },
      { q: 'Bitta tekislikda yotuvchi ikki bir xil A modulli vektor 120° burchak ostida yo‘nalgan. Yig‘indi vektor moduli qancha?', options: ['A', '2A', 'A√2', '0'], answer: 0, explain: 'R = √(A² + A² + 2A²·cos120°) = √(2A² − A²) = A.' },
      { q: 'Agar vektorning proyeksiyalari A_x = −6 va A_y = 8 bo‘lsa, uning moduli qanchaga teng?', options: ['10', '14', '2', '48'], answer: 0, explain: '|A⃗| = √((−6)² + 8²) = √(36 + 64) = 10.' },
      { q: 'Qaysi fizik kattalik ikki vektorning vektor ko‘paytmasi orqali aniqlanadi?', options: ['Kuch momenti (M⃗ = r⃗ × F⃗)', 'Mexanik ish (A = F⃗ · s⃗)', 'Zichlik', 'Bosim'], answer: 0, explain: 'Kuch momenti M⃗ = r⃗ × F⃗ vektor ko‘paytmadir; ish esa skalyar ko‘paytmadir.' },
    ],
    problems: [
      {
        variants: [[6, 8], [5, 12], [9, 12], [8, 15]],
        build: (i) => {
          const [a, b] = [[6, 8], [5, 12], [9, 12], [8, 15]][i];
          const r = Math.hypot(a, b);
          return {
            q: `O‘zaro tik (90°) yo‘nalgan F₁ = ${a} N va F₂ = ${b} N kuchlarning teng ta’sir etuvchi moduli (N) qancha?`,
            correct: r,
            unit: 'N',
            explain: `R = √(${a}² + ${b}²) = ${r} N.`,
          };
        },
      },
      {
        variants: [[10, 5, 60], [8, 6, 0], [12, 4, 60], [20, 3, 180]],
        build: (i) => {
          const [a, b, deg] = [[10, 5, 60], [8, 6, 0], [12, 4, 60], [20, 3, 180]][i];
          const dot = a * b * Math.cos((deg * Math.PI) / 180);
          return {
            q: `Modullari ${a} va ${b} bo‘lgan vektorlar orasidagi burchak ${deg}°. Ularning skalyar ko‘paytmasini toping.`,
            correct: dot,
            unit: '',
            explain: `A⃗·B⃗ = ${a} · ${b} · cos(${deg}°) = ${dot}.`,
          };
        },
      },
    ],
  },
];
