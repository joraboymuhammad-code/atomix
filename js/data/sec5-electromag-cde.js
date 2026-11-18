export const SEC5_CDE_TOPICS = [
  {
    id: '5C-1',
    code: '5C.1',
    sectionId: 'sec-5',
    subsectionId: '5C',
    subsectionTitle: 'C. Turli Muhitlarda Elektr Toki',
    title: 'Metallarda',
    subtitle: "O'ta o'tkazuvchanlik hodisasi va metallarda elektr o'tkazuvchanlik.",
    theory: {
      overview:
        'Metallarda elektr tokini erkin elektronlar («elektron gazi») tashiydi, shuning uchun tok o‘tishida modda ko‘chishi yuz bermaydi. Rikke (1901) va Mandelstam-Papaleksi (1913) tajribalari metallardagi zaryad tashuvchilar elektronlar ekanini isbotlagan. Harorat oshishi bilan kristall panjara ionlarining issiqlik tebranishi kuchayadi va elektronlarning erkin yugurish masofasi qisqaradi, natijada metall qarshiligi chiziqli ortadi: R = R₀(1 + αt).\n\n1911-yilda X. Kamerling-Onnes simobni 4.15 K gacha sovitganda uning elektr qarshiligi sakrash bilan aniq NOL ga tushishini kashf etdi — bu hodisa O‘TA O‘TKAZUVCHANLIK (superconductivity) deyiladi. Kritik harorat T_k dan pastda o‘ta o‘tkazuvchan halqada uyg‘otilgan tok manbasiz ham yillar davomida so‘nmasdan oqadi, va tashqi magnit maydon o‘tkazgich ichidan itarib chiqariladi (Meyssner effekti).',
      keyLaws: [
        { title: 'Metall qarshiligining haroratga bog‘liqligi', text: 'ρ = ρ₀(1 + αt) — termik qarshilik koeffitsiyenti metallar uchun musbat (α > 0).' },
        { title: 'O‘ta o‘tkazuvchanlik (T ≤ T_k)', text: 'Kritik haroratdan pastda elektr qarshilik R = 0 ga tenglashadi (Kuper elektron juftlari — BKSh nazariyasi).' },
        { title: 'Meyssner effekti', text: 'O‘ta o‘tkazgich ichida magnit maydon induksiyasi B = 0 — magnit maydon siqib chiqariladi (magnit levitatsiya).' },
      ],
      formulas: [
        { latex: 'R = R₀ · (1 + α · Δt)', name: 'Metall qarshiligi harorat bog‘lanishi', symbols: 'α — qarshilikning harorat koeffitsiyenti (K⁻¹)' },
        { latex: 'R(T ≤ T_k) = 0', name: 'O‘ta o‘tkazuvchanlik sharti', symbols: 'T_k — kritik o‘tish harorati (K)' },
      ],
      constants: [
        { name: 'Simobning kritik harorati', symbol: 'T_k(Hg)', value: '4.15', unit: 'K' },
        { name: 'Yuqori haroratli keramikalar (YBCO)', symbol: 'T_k(YBCO)', value: '93', unit: 'K' },
      ],
      applications: [
        'MRT tomograflari, Katta adron kollayderi (CERN) magnitlari va Maglev (magnit yostiqli) poyezdlar.',
        'Kvant kompyuterlarining Jozefson o‘tishiga asoslangan kubitlari.',
      ],
      calculator: {
        title: 'Metall qarshiligining harorat o‘zgarishi kalkulyatori',
        formulaDisplay: 'R = R₀ · (1 + α·(t − t₀))',
        inputs: [
          { key: 'R0', label: '0°C dagi qarshilik R₀', symbol: 'R₀', unit: 'Ω', min: 1, max: 500, step: 1, default: 20 },
          { key: 'alpha', label: 'Harorat koef. α (×10⁻³ K⁻¹)', symbol: 'α', unit: '10⁻³ K⁻¹', min: 1, max: 7, step: 0.2, default: 4.0 },
          { key: 't', label: 'Ishchi harorat t', symbol: 't', unit: '°C', min: -200, max: 1000, step: 10, default: 150 },
        ],
        compute: (v) => {
          const R = v.R0 * (1 + v.alpha * 1e-3 * v.t);
          return {
            value: R.toFixed(2),
            unit: 'Ω',
            summary: `${v.t} °C haroratda o‘tkazgich qarshiligi R = ${R.toFixed(2)} Ω.`,
          };
        },
      },
    },
    simulation: {
      title: 'Metallarda Elektronlar Harakati va O‘ta O‘tkazuvchanlik Lab',
      openSourceUrl: 'sims/effectuall/Magnetism_Close_Up_Force_on_a_Current_Carrying_Wire.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Metall kristall panjarasida elektronlar harakatini 3D yaqin ko‘rinishda kuzating.',
      alternateSims: [
        { label: 'Metall o‘tkazgichda elektronlar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Close_Up_Force_on_a_Current_Carrying_Wire.html' },
      ],
      parametric: {
        mode: 'metal_superconductor',
        title: 'Metall Kristall Panjarasi va O‘ta O‘tkazuvchanlik Simulyatori',
        description: 'Harorat T ni pasaytirib, ionlar tebranishi susayishi va T < T_k da elektronlar qarshiliksiz (Kuper juftlari) o‘tishini kuzating.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 2, max: 400, step: 5, value: 290 },
          { key: 'Tk', label: 'Kritik harorat T_k', unit: 'K', min: 4, max: 100, step: 2, value: 90 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Metallarda elektr tokini qaysi zarrachalar tashiydi?', options: ['Erkin elektronlar', 'Musbat va manfiy ionlar', 'Protonlar', 'Neytronlar'], answer: 0, explain: 'Metall kristall panjarasida ionlar o‘z joyida tebranadi, tokni faqat erkin elektronlar tashiydi.' },
      { q: 'O‘ta o‘tkazuvchanlik hodisasi qachon kuzatiladi?', options: ['Harorat kritik T_k dan pastga tushganda qarshilik nolga tenglashganda', 'Harorat 1000 °C dan oshganda', 'Kuchlanish cheksiz ortganda', 'Vakuumda'], answer: 0, explain: 'Kamerling-Onnes tomonidan kashf etilganidek, T ≤ T_k da R = 0 bo‘ladi.' },
      { q: 'O‘ta o‘tkazgich ichidan tashqi magnit maydonning itarib chiqarilishi nima deyiladi?', options: ['Meyssner effekti', 'Xoll effekti', 'Dopler effekti', 'Fotoeffekt'], answer: 0, explain: 'Meyssner effekti ideal diamagnetizm bo‘lib, magnit levitatsiya asosidir.' },
      { q: 'Metall o‘tkazgich sovitilganda (T > T_k sohada) uning qarshiligi qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Nolga teng bo‘lmaydi lekin cheksizga intiladi'], answer: 0, explain: 'T kamaysa panjara ionlari tebranishi susayib, elektronlar kamroq sochiladi.' },
      { q: '0 °C da qarshiligi 100 Ω bo‘lgan mis sim (α = 0.004 K⁻¹) 100 °C gacha qizdirilsa, qarshiligi qancha bo‘ladi?', options: ['140 Ω', '104 Ω', '40 Ω', '200 Ω'], answer: 0, explain: 'R = 100·(1 + 0.004·100) = 140 Ω.' },
      { q: 'O‘ta o‘tkazuvchan halqada uyg‘otilgan tok manba uzilgandan keyin qancha vaqt saqlanadi?', options: ['Issiqlik yo‘qotilishi (I²R = 0) bo‘lmagani uchun amalda so‘nmasdan saqlanadi', 'Darhol to‘xtaydi', '1 sekund saqlanadi', 'Teskari aylanadi'], answer: 0, explain: 'R = 0 bo‘lgani uchun Joul issiqligi ajralmaydi.' },
      { q: 'Yuqori haroratli o‘ta o‘tkazgichlarni sovitishda qaysi arzon sovituvchidan foydalaniladi?', options: ['Suyuq azot (77 K)', 'Suv', 'Simob', 'Ftor'], answer: 0, explain: 'T_k > 77 K bo‘lgan keramikalar (masalan YBCO, 93 K) suyuq azotda o‘ta o‘tkazuvchan bo‘ladi.' },
      { q: 'Metall o‘tkazgichdan tok o‘tganda uning kimyoviy tarkibi o‘zgaradimi?', options: ['Yo‘q, chunki elektronlar hamma metallarda bir xil', 'Ha, katodda metall cho‘kadi', 'Ha, modda bug‘lanadi', 'Faqat o‘zgaruvchan tokda'], answer: 0, explain: 'Ionlar panjarada qo‘zg‘almas qolgani uchun modda ko‘chishi yuz bermaydi.' },
    ],
    problems: [
      {
        variants: [[50, 100, 0.004], [100, 50, 0.004], [20, 200, 0.005], [40, 100, 0.005]],
        build: (i) => {
          const [R0, t, a] = [[50, 100, 0.004], [100, 50, 0.004], [20, 200, 0.005], [40, 100, 0.005]][i];
          const R = R0 * (1 + a * t);
          return {
            q: `0 °C da qarshiligi ${R0} Ω bo‘lgan metall sim (α = ${a} K⁻¹) ${t} °C gacha qizdirildi. Yangi qarshilikni (Ω) toping.`,
            correct: R,
            unit: 'Ω',
            explain: `R = R₀(1 + α·t) = ${R0}·(1 + ${a}·${t}) = ${R} Ω.`,
          };
        },
      },
      {
        variants: [[10, 5], [20, 4], [25, 2], [15, 6]],
        build: (i) => {
          const [I, dt] = [[10, 5], [20, 4], [25, 2], [15, 6]][i];
          return {
            q: `O‘ta o‘tkazgichli halqada I = ${I} A tok oqmoqda. ${dt} s ichida ko‘ndalang kesimdan o‘tadigan zaryad (C) va ajraladigan issiqlik (J) dan zaryad qiymati qancha?`,
            correct: I * dt,
            unit: 'C',
            explain: `q = I · t = ${I} · ${dt} = ${I * dt} C (issiqlik esa R = 0 bo‘lgani uchun 0 J).`,
          };
        },
      },
    ],
  },
  {
    id: '5C-2',
    code: '5C.2',
    sectionId: 'sec-5',
    subsectionId: '5C',
    subsectionTitle: 'C. Turli Muhitlarda Elektr Toki',
    title: 'Suyuqliklarda',
    subtitle: 'Elektrolitlar, elektroliz va Faradey qonunlari.',
    theory: {
      overview:
        'Tuz, kislota va ishqorlarning suvdagi eritmalari hamda suyuqlanmalari elektrolitlar deyiladi. Ularda molekulalar qutbli suv molekulalari ta’sirida musbat (kationlar) va manfiy (anionlar) ionlarga ajraladi (elektrolitik dissotsiatsiya). Elektrolitlarda elektr tokini musbat va manfiy ionlar tashiydi.\n\nTok o‘tganda elektrodlarda modda ajralib chiqishi jarayoni ELEKTROLIZ deb ataladi. Maykl Faradeyning 1-qonuniga ko‘ra, elektrodda ajralgan modda massasi m eritmadan o‘tgan zaryad q = I·t ga to‘g‘ri proporsional: m = k·I·t, bu yerda k — elektrokimyoviy ekvivalent (kg/C). Faradeyning 2-qonuniga ko‘ra, elektrokimyoviy ekvivalent modda molyar massasi M ga to‘g‘ri, valentligi n ga teskari proporsional: k = (1/F)·(M/n), bu yerda F = e·N_A ≈ 96485 C/mol — Faradey doimiysi.',
      keyLaws: [
        { title: 'Elektrolitlarda o‘tkazuvchanlik', text: 'Harorat ortishi bilan dissotsiatsiya darajasi ortib, qovushqoqlik kamaygani uchun elektrolit qarshiligi KAMAYADI (metallarga teskari!).' },
        { title: 'Faradeyning 1-qonuni', text: 'm = k · q = k · I · t — ajralgan modda massasi o‘tgan elektr zaryadiga to‘g‘ri proporsional.' },
        { title: 'Faradeyning 2-qonuni', text: 'k = M / (F · n) — bir xil zaryad o‘tganda moddalarning ajralgan massalari ularning kimyoviy ekvivalentlariga proporsional.' },
      ],
      formulas: [
        { latex: 'm = k · I · t', name: 'Faradeyning 1-qonuni', symbols: 'k — elektrokimyoviy ekvivalent (kg/C), I — tok (A), t — vaqt (s)' },
        { latex: 'm = (M / (F · n)) · I · t', name: 'Faradeyning birlashgan qonuni', symbols: 'M — molyar massa (kg/mol), n — valentlik, F = 96485 C/mol' },
      ],
      constants: [
        { name: 'Faradey doimiysi', symbol: 'F = e·N_A', value: '96485', unit: 'C/mol' },
        { name: 'Mis (Cu²⁺) elektrokimyoviy ekvivalenti', symbol: 'k_Cu', value: '0.329·10⁻⁶', unit: 'kg/C' },
      ],
      applications: [
        'Galvanotexnika (xromlash, nikellash, oltin yuritish) va toza metallar (alyuminiy, mis) olish.',
        'Akkumulyatorlarning kimyoviy energiya to‘plash va berish jarayonlari.',
      ],
      calculator: {
        title: 'Faradey elektroliz qonuni kalkulyatori',
        formulaDisplay: 'm = (M / (F·n)) · I · t',
        inputs: [
          { key: 'Mg', label: 'Molyar massa M', symbol: 'M', unit: 'g/mol', min: 1, max: 250, step: 0.5, default: 63.5 },
          { key: 'n', label: 'Ion valentligi n', symbol: 'n', unit: '', min: 1, max: 4, step: 1, default: 2 },
          { key: 'I', label: 'Tok kuchi I', symbol: 'I', unit: 'A', min: 0.5, max: 100, step: 0.5, default: 10 },
          { key: 'tmin', label: 'Elektroliz vaqti t', symbol: 't', unit: 'min', min: 1, max: 180, step: 1, default: 30 },
        ],
        compute: (v) => {
          const F = 96485;
          const k = (v.Mg * 1e-3) / (F * v.n);
          const m = k * v.I * (v.tmin * 60);
          return {
            value: (m * 1000).toFixed(3),
            unit: 'g',
            summary: `Elektrokimyoviy ekvivalent k = ${(k * 1e6).toFixed(3)} mg/C. Katodda ajralgan massa m = ${(m * 1000).toFixed(3)} g.`,
          };
        },
      },
    },
    simulation: {
      title: 'Elektrolitda Ionlar Harakati va Elektroliz Simulyatori',
      openSourceUrl: 'sims/effectuall/Electricity_Coulombs_Law.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Ionlarning elektrostatik o‘zaro ta’sirini 3D sahnada kuzating hamda quyidagi Atomix Elektroliz vannasi simulyatorida katodda qatlam o‘sishini boshqaring.',
      alternateSims: [
        { label: 'Zaryadlar va ion maydoni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Coulombs_Law.html' },
      ],
      parametric: {
        mode: 'electrolysis',
        title: 'Elektroliz Vannasi va Faradey Qonuni Simulyatori',
        description: 'Tok kuchi I va ion valentligini sozlab, kationlarning katodga, anionlarning anodga ko‘chishini va cho‘kkan modda massasini kuzating.',
        controls: [
          { key: 'I', label: 'Tok kuchi I', unit: 'A', min: 1, max: 30, step: 1, value: 8 },
          { key: 'n', label: 'Valentlik n', unit: '', min: 1, max: 3, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Elektrolit eritmalarida elektr tokini qaysi zarrachalar tashiydi?', options: ['Musbat va manfiy ionlar', 'Faqat erkin elektronlar', 'Neytral molekulalar', 'Protonlar'], answer: 0, explain: 'Elektrolitik dissotsiatsiya natijasida hosil bo‘lgan kation va anionlar tok tashuvchilaridir.' },
      { q: 'Elektrolizda katodda ajralib chiqqan modda massasi m qaysi formula bilan topiladi?', options: ['m = k·I·t', 'm = I·R·t', 'm = k / (I·t)', 'm = U·I·t'], answer: 0, explain: 'Faradeyning 1-qonuni: m = k·q = k·I·t.' },
      { q: 'Elektrolit eritmasi qizdirilganda uning elektr qarshiligi qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Avval ortadi keyin cheksiz bo‘ladi'], answer: 0, explain: 'Harorat oshsa ko‘proq molekula ionlarga ajraladi va ionlar harakatchanligi ortadi.' },
      { q: 'Faradey doimiysi F ≈ 96 500 C/mol nimani anglatadi?', options: ['1 mol bir valentli moddani ajratish uchun zarur bo‘lgan elektr zaryadini', '1 kg elektron zaryadini', '1 ta elektron massasini', '1 Amper tok kuchini'], answer: 0, explain: 'F = e·N_A = 1.602·10⁻¹⁹ · 6.022·10²³ ≈ 96 485 C/mol.' },
      { q: 'Elektrolitdan o‘tayotgan tok kuchi 2 marta va vaqt 3 marta oshirilsa, ajraladigan modda massasi necha marta ortadi?', options: ['6 marta', '5 marta', '1.5 marta', '2 marta'], answer: 0, explain: 'm ~ I·t => 2 · 3 = 6 marta.' },
      { q: 'Elektrokimyoviy ekvivalent k = 0.33 mg/C bo‘lgan mis vannasidan 1000 C zaryad o‘tganda necha gramm mis ajraladi?', options: ['0.33 g', '3.3 g', '33 g', '0.033 g'], answer: 0, explain: 'm = 0.33 mg/C · 1000 C = 330 mg = 0.33 g.' },
      { q: 'Elektrodlarni yupqa qimmatbaho metall qatlami bilan qoplash usuli nima deyiladi?', options: ['Galvanostegiya', 'Sublimatsiya', 'Rectifikatsiya', 'Diffuziya'], answer: 0, explain: 'Galvanotexnika (galvanostegiya va galvanoplastika) elektrolizga asoslangan.' },
      { q: 'Qaysi moddalar toza holatda (suvda eritilmagan) elektr tokini deyarli o‘tkazmaydi?', options: ['Distillangan suv va qattiq osh tuzi (NaCl)', 'Mis sim', 'Simob', 'Plazma'], answer: 0, explain: 'Toza suvda va qattiq tuz kristallida erkin ionlar juda kam.' },
    ],
    problems: [
      {
        variants: [[0.33, 5, 200], [1.12, 2, 100], [0.5, 4, 100], [0.3, 10, 50]],
        build: (i) => {
          const [kmg, I, t] = [[0.33, 5, 200], [1.12, 2, 100], [0.5, 4, 100], [0.3, 10, 50]][i];
          const mg = Number((kmg * I * t).toFixed(1));
          return {
            q: `Elektrokimyoviy ekvivalenti k = ${kmg} mg/C bo‘lgan elektrolitdan ${I} A tok ${t} s davomida o‘tdi. Ajralgan modda massasi (mg) qancha?`,
            correct: mg,
            unit: 'mg',
            explain: `m = k·I·t = ${kmg} · ${I} · ${t} = ${mg} mg.`,
          };
        },
      },
      {
        variants: [[0.5, 100], [0.4, 250], [0.2, 500], [0.6, 150]],
        build: (i) => {
          const [k, q] = [[0.5, 100], [0.4, 250], [0.2, 500], [0.6, 150]][i];
          return {
            q: `Elektroliz vannasidan ${q} C zaryad o‘tganda katodda elektrokimyoviy ekvivalenti ${k} mg/C bo‘lgan metallning necha milligrammi ajralib chiqadi?`,
            correct: k * q,
            unit: 'mg',
            explain: `m = k · q = ${k} · ${q} = ${k * q} mg.`,
          };
        },
      },
    ],
  },
  {
    id: '5C-3',
    code: '5C.3',
    sectionId: 'sec-5',
    subsectionId: '5C',
    subsectionTitle: 'C. Turli Muhitlarda Elektr Toki',
    title: 'Gazlarda',
    subtitle: 'Gaz razryadlari (toj, uchqun, yoy, chog‘lanma razryadlar), plazma.',
    theory: {
      overview:
        'Oddiy sharoitda gazlar neytral atom va molekulalardan iborat bo‘lgani uchun dielektrikdir. Tashqi ionizator (rentgen, ultrabinafsha nurlar, yuqori harorat) ta’sirida molekulalardan elektron ajralib, erkin elektronlar hamda musbat va manfiy ionlar hosil bo‘ladi (ionizatsiya). Elektr maydoni qo‘yilganda gazda elektr toki — gaz razryadi boshlanadi.\n\nTashqi ionizator o‘chirilganda to‘xtaydigan tok mustaqil bo‘lmagan razryad, zarbiy ionizatsiya (tezlashgan elektronlar neytral atomlarni urib ionlashtirishi) hisobiga o‘z-o‘zidan davom etadigan razryad esa mustaqil razryad deyiladi. Bosim va kuchlanishga qarab 4 ta asosiy mustaqil razryad turi mavjud: 1) Chog‘lanma razryad (past bosimda — reklama neon naychalari, lyuminessent lampalar); 2) Elektr yoy (katta tok, past kuchlanish, yuqori T ≈ 4000 K — elektr payvandlash); 3) Uchqun razryadi (yuqori kuchlanishda — chaqmoq, svecha); 4) Toj razryadi (uchli qismlar atrofidagi kuchli maydonda — yuqori voltli simlar, Avliyo Elm olovlari). Yuqori darajada ionlashgan kvazineytral gaz PLAZMA (moddaning 4-agregat holati) deb ataladi.',
      keyLaws: [
        { title: 'Ionlanish energiyasi sharti', text: 'e·U ≥ A_ion — elektron erkin yugurish masofasida to‘plagan energiya atomni ionlashtirishga yetarli bo‘lishi kerak.' },
        { title: 'Chog‘lanma va Yoy razryadlari', text: 'Past bosimda chog‘lanma razryad; atmosfera bosimida va katta tokda termoelektron emissiyali elektr yoy.' },
        { title: 'Plazma holati', text: 'n_+ ≈ n_− — musbat va manfiy zaryadlar konsentratsiyasi deyarli teng bo‘lgan ionlashgan gaz (Koinot moddasining >99%).' },
      ],
      formulas: [
        { latex: 'E_ion = e · Δφ_ion = ½ · m_e · v²', name: 'Zarbiy ionizatsiya sharti', symbols: 'Δφ_ion — ionizatsiya potensiali (V)' },
        { latex: 'α_pl = N_ion / N_um', name: 'Plazmaning ionlanish darajasi', symbols: 'α_pl — ionlashgan atomlar ulushi' },
      ],
      constants: [
        { name: 'Vodorodning ionlanish energiyasi', symbol: 'E_i(H)', value: '13.6', unit: 'eV' },
        { name: 'Havoning teshilish elektr maydoni', symbol: 'E_tesh', value: '≈ 3·10⁶', unit: 'V/m' },
      ],
      applications: [
        'Elektr yoy bilan metallarni payvandlash va kesish, plazmali metallurgiya.',
        'Termoyadro reaktorlarida (Tokamak) yuqori haroratli plazmani magnit maydoni bilan ushlab turish.',
      ],
      calculator: {
        title: 'Zarbiy ionizatsiya energiyasi va tezligi kalkulyatori',
        formulaDisplay: 'E = e·U,  v = √(2·e·U / m_e)',
        inputs: [
          { key: 'U', label: 'Tezlatuvchi kuchlanish U', symbol: 'U', unit: 'V', min: 5, max: 500, step: 5, default: 25 },
        ],
        compute: (v) => {
          const e = 1.602e-19;
          const me = 9.109e-31;
          const vel = Math.sqrt((2 * e * v.U) / me);
          const status = v.U >= 15.6 ? 'Zarbiy ionizatsiya uchun yetarli (N₂ ≈ 15.6 eV)' : 'Yetarli emas';
          return {
            value: (vel / 1e6).toFixed(2),
            unit: '10⁶ m/s',
            summary: `Elektron tezligi v = ${(vel / 1e6).toFixed(2)}·10⁶ m/s, energiyasi ${v.U} eV (${status}).`,
          };
        },
      },
    },
    simulation: {
      title: 'Gaz Razryadlari, Zarbiy Ionizatsiya va Plazma Simulyatori',
      openSourceUrl: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Past bosimli gaz razryad naychasida elektronlar oqimini 3D kuzating va quyidagi simulyatorda zarbiy ionizatsiyani sinang.',
      alternateSims: [
        { label: 'Razryad trubkasida elektronlar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html' },
      ],
      parametric: {
        mode: 'gas_plasma',
        title: 'Gaz Razryadi va Zarbiy Ionizatsiya Lavinasi Simulyatori',
        description: 'Kuchlanish U va gaz bosimini p o‘zgartirib, elektron-ion lavinasi (razryad teshilishi) va plazma nurlanishini kuzating.',
        controls: [
          { key: 'U', label: 'Kuchlanish U', unit: 'V', min: 10, max: 300, step: 10, value: 180 },
          { key: 'p', label: 'Gaz bosimi p', unit: 'kPa', min: 1, max: 100, step: 5, value: 20 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Gazlarda elektr tokini qaysi zarrachalar tashiydi?', options: ['Erkin elektronlar, musbat va manfiy ionlar', 'Faqat neytral molekulalar', 'Faqat musbat ionlar', 'Faqat fotonlar'], answer: 0, explain: 'Gazlarda ikki xil (elektron va ionli) o‘tkazuvchanlik mavjud.' },
      { q: 'Chaqmoq tabiatda qaysi gaz razryadi turiga kiradi?', options: ['Uchqun razryadi', 'Chog‘lanma razryad', 'Elektr yoy', 'Tinch razryad'], answer: 0, explain: 'Yuqori bosimli havoda kuchli elektr maydon tufayli qisqa muddatli uchqun razryadi (chaqmoq) yuz beradi.' },
      { q: 'Yuqori voltli elektr uzatish liniyasi simlari atrofida nam havoda eshitiladigan shivirlash va binafsha shu’la qaysi razryaddir?', options: ['Toj razryadi', 'Yoy razryadi', 'Chog‘lanma razryad', 'Uchqun razryadi'], answer: 0, explain: 'Kuchli bir jinsli bo‘lmagan maydonda (uchlar va yupqa simlar atrofida) toj razryadi hosil bo‘ladi.' },
      { q: 'Elektr payvandlashda qo‘llaniladigan razryad turi qaysi?', options: ['Elektr yoy razryadi', 'Chog‘lanma razryad', 'Toj razryadi', 'Mustaqil bo‘lmagan razryad'], answer: 0, explain: 'Elektr yoyi kichik kuchlanishda juda katta tok va 4000–5000 K harorat beradi.' },
      { q: 'Reklama neon naychalari va lyuminessent lampalarda qaysi razryad ishlatiladi?', options: ['Chog‘lanma razryad (past bosimda)', 'Uchqun razryadi', 'Yoy razryadi', 'Toj razryadi'], answer: 0, explain: 'Past bosimli gaz naychasida chog‘lanma razryad butun naychani tekis yoritadi.' },
      { q: 'Plazma moddaning qanday holatidir?', options: ['Musbat va manfiy zaryadlari konsentratsiyasi deyarli teng bo‘lgan kuchli ionlashgan gaz', 'O‘ta sovutilgan suyuqlik', 'Kristall panjara', 'Mutlaq neytral gaz'], answer: 0, explain: 'Plazma — kvazineytral ionlashgan gaz (moddaning 4-holati).' },
      { q: 'Mustaqil razryadni tutib turuvchi asosiy fizik mexanizm nima?', options: ['Zarbiy ionizatsiya (elektronlarning gaz atomlarini urib ionlashtirishi)', 'Tashqi rentgen manbai', 'Gravitatsiya', 'Diffuziya'], answer: 0, explain: 'Zarbiy ionizatsiya elektron lavinasini hosil qiladi.' },
      { q: 'Koinotdagi ko‘rinadigan materiyaning (yulduzlar, tumanliklar) taxminan necha foizi plazma holatida?', options: ['99% dan ortig‘i', '10%', '50%', '1%'], answer: 0, explain: 'Quyosh, barcha yulduzlar va yulduzlararo gazning asosiy qismi plazmadir.' },
    ],
    problems: [
      {
        variants: [[20], [50], [100], [15]],
        build: (i) => {
          const [U] = [[20], [50], [100], [15]][i];
          const E = U;
          return {
            q: `Elektron potensiallar farqi ${U} V bo‘lgan oraliqni to‘qnashuvsiz o‘tganda necha eV energiya oladi?`,
            correct: E,
            unit: 'eV',
            explain: `E = e·U = ${U} eV.`,
          };
        },
      },
      {
        variants: [[3000, 0.01], [3000, 0.02], [3000, 0.05], [3000, 0.005]],
        build: (i) => {
          const [EkVmm, d] = [[3000, 0.01], [3000, 0.02], [3000, 0.05], [3000, 0.005]][i];
          const UkV = (EkVmm * (d * 1000)) / 1000;
          return {
            q: `Quruq havoning teshilish maydoni 3 kV/mm ga teng. Orasidagi masofa ${d * 100} sm bo‘lgan elektrodlarda uchqun razryadi chiqishi uchun necha kV kuchlanish kerak?`,
            correct: UkV,
            unit: 'kV',
            explain: `U = E_tesh · d = 3 kV/mm · ${d * 1000} mm = ${UkV} kV.`,
          };
        },
      },
    ],
  },
  {
    id: '5C-4',
    code: '5C.4',
    sectionId: 'sec-5',
    subsectionId: '5C',
    subsectionTitle: 'C. Turli Muhitlarda Elektr Toki',
    title: 'Vakuumda',
    subtitle: 'Termoelektron emissiya, elektron-nur trubkasi.',
    theory: {
      overview:
        'Vakuumda zaryad tashuvchilar yo‘q, shuning uchun vakuum ideal izolyatordir. Ammo vakuumli ballonga joylashtirilgan metall katod yuqori haroratgacha qizdirilsa, undagi eng tezkor erkin elektronlar metalldan chiqish ishi A_chiq ni yengib vakuumga uchib chiqadi — bu hodisa TERMOELEKTRON EMISSIYA deyiladi.\n\nVakuum diodi faqat katod manfiy, anod musbat bo‘lganda tok o‘tkazadi (bir tomonlama o‘tkazuvchanlik — o‘zgaruvchan tokni to‘g‘rilash xossasi). Anodga uchib borgan elektronlar tezligi energiya saqlanishidan topiladi: e·U = m_e·v²/2. Elektron-nur trubkasi (osillograf, eski kineskoplar) katoddan chiqqan elektronlarni fokuslab tezlatadi hamda elektr yoki magnit maydonlari bilan og‘dirib ekranda yorug‘lik izi chizadi.',
      keyLaws: [
        { title: 'Termoelektron emissiya', text: 'Qizdirilgan metalldan elektronlarning issiqlik energiyasi hisobiga chiqish ishini yengib vakuumga uchib chiqishi.' },
        { title: 'Vakuum diodining bir tomonlama o‘tkazuvchanligi', text: 'Tok faqat katoddan anodga qarab elektronlar harakatlanganda (U_anod > U_katod) o‘tadi.' },
        { title: 'Tezlatilgan elektron energiyasi', text: '½·m_e·v² = e·U => v = √(2eU/m_e).' },
      ],
      formulas: [
        { latex: '½ · m_e · v² = e · U  ⇒  v = √(2eU / m_e)', name: 'Vakuumda elektron tezligi', symbols: 'U — anod kuchlanishi (V), m_e = 9.11·10⁻³¹ kg' },
        { latex: 'I_a = k · U_a^(3/2)', name: 'Boguslavskiy-Lengmyur «uch yarim» qonuni', symbols: 'To‘yinishgacha anod tokining kuchlanishga bog‘liqligi' },
      ],
      constants: [
        { name: 'Elektron massasi', symbol: 'm_e', value: '9.109·10⁻³¹', unit: 'kg' },
        { name: 'Elektron solishtirma zaryadi', symbol: 'e / m_e', value: '1.759·10¹¹', unit: 'C/kg' },
      ],
      applications: [
        'Rentgen trubkalari (tezlatilgan elektronlarning anodga urilib tormozlanishidan rentgen nurlanishi olish).',
        'Elektron mikroskoplar, magnetronlar (mikroto‘lqinli pech) va elektron-nurli osillograflar.',
      ],
      calculator: {
        title: 'Vakuum trubkasida elektron tezligi kalkulyatori',
        formulaDisplay: 'v = √(2·e·U / m_e),  E_k = e·U',
        inputs: [
          { key: 'U', label: 'Anod-katod kuchlanishi U', symbol: 'U', unit: 'V', min: 10, max: 20000, step: 50, default: 1000 },
        ],
        compute: (v) => {
          const e = 1.602e-19;
          const me = 9.109e-31;
          const vel = Math.sqrt((2 * e * v.U) / me);
          const ek = e * v.U;
          return {
            value: (vel / 1e6).toFixed(2),
            unit: '10⁶ m/s',
            summary: `Elektronlar tezligi v = ${(vel / 1e6).toFixed(2)}·10⁶ m/s (yorug‘lik tezligining ${((vel / 3e8) * 100).toFixed(1)}% i), kinetik energiyasi ${ek.toExponential(2)} J.`,
          };
        },
      },
    },
    simulation: {
      title: 'Katod Nurlari va Vakuumda Elektronlar Oqimi 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Elektron-nur trubkasida elektr va magnit maydonlari elektronlar nurini qanday og‘dirishini 3D kuzating.',
      alternateSims: [
        { label: 'Katod nurlari va elektronlar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html' },
      ],
      parametric: {
        mode: 'cathode_ray',
        title: 'Elektron-Nur Trubkasi (CRT) Og‘ish Simulyatori',
        description: 'Tezlatuvchi anod kuchlanishi U_a va og‘diruvchi plastina kuchlanishi U_og‘ ni sozlab, elektronlar nuri trayektoriyasini kuzating.',
        controls: [
          { key: 'Ua', label: 'Anod kuchlanishi U_a', unit: 'V', min: 200, max: 3000, step: 100, value: 1200 },
          { key: 'Ud', label: 'Og‘diruvchi kuchlanish U_d', unit: 'V', min: -100, max: 100, step: 10, value: 40 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Vakuumda elektr tokini qaysi zarrachalar tashiydi?', options: ['Termoelektron emissiya natijasida katoddan chiqqan elektronlar', 'Gaz ionlari', 'Protonlar', 'Pozitronlar'], answer: 0, explain: 'Qizdirilgan katoddan uchib chiqqan elektronlar anodga harakatlanib tok hosil qiladi.' },
      { q: 'Vakuum diodining asosiy xossasi qaysi?', options: ['Bir tomonlama o‘tkazuvchanlik (o‘zgaruvchan tokni to‘g‘rilash)', 'Tokni har ikki yo‘nalishda bir xil o‘tkazish', 'Magnit maydonini yo‘qotish', 'Haroratni pasaytirish'], answer: 0, explain: 'Anod sovuq bo‘lgani uchun elektronlar faqat katoddan anodga qarab oqadi.' },
      { q: 'Tezlatuvchi kuchlanish 4 marta oshirilsa, vakuumda elektron tezligi necha marta ortadi (norelyativistik)?', options: ['2 marta', '4 marta', '16 marta', 'O‘zgarmaydi'], answer: 0, explain: 'v = √(2eU/m_e) => √4 = 2 marta.' },
      { q: 'Termoelektron emissiyani kuchaytirish uchun katod bilan nima qilinadi?', options: ['Harorati oshiriladi (yoki chiqish ishi kichik oksid qoplama surtiladi)', 'Sovitiladi', 'Musbat zaryadlanadi', 'Vakuum buziladi'], answer: 0, explain: 'Yuqori T elektronlarning issiqlik energiyasini oshirib chiqish ishini yengishini osonlashtiradi.' },
      { q: 'Elektron-nur trubkasida ekran yuzasida tasvir qanday hosil qilinadi?', options: ['Tez elektronlarning lyuminofor qoplamasiga urilib shu’lalanishi hisobiga', 'Lazer nuri bilan', 'Suyuqlik purkash bilan', 'Tovush bilan'], answer: 0, explain: 'Katodoluminestsensiya — elektronlar lyuminoforni yoritadi.' },
      { q: 'Anod kuchlanishi juda katta bo‘lganda vakuum diodidagi tok ma’lum qiymatdan oshmay qolishi nima deyiladi?', options: ['To‘yinish toki', 'Qisqa tutashuv', 'Rezonans', 'Teshilish'], answer: 0, explain: 'Katoddan 1 s da uchib chiqqan barcha elektronlar anodga yetib borganda to‘yinish toki kuzatiladi.' },
      { q: '2000 V kuchlanish bilan tezlatilgan elektronning kinetik energiyasi necha elektronvolt?', options: ['2000 eV (2 keV)', '200 eV', '20 eV', '1000 eV'], answer: 0, explain: 'E_k = e·U = 2000 eV.' },
      { q: 'Rentgen trubkasida qisqa to‘lqinli rentgen nurlari qanday olinadi?', options: ['Vakuumda o‘n minglab Volt bilan tezlatilgan elektronlarning metall anodda keskin tormozlanishidan', 'Gaz razryadidan', 'Elektrolizdan', 'Prujina tebranishidan'], answer: 0, explain: 'Tormozlanish nurlanishi e·U = h·ν_max.' },
    ],
    problems: [
      {
        variants: [[500], [2000], [1000], [4500]],
        build: (i) => {
          const [U] = [[500], [2000], [1000], [4500]][i];
          const v = Number((Math.sqrt((2 * 1.6e-19 * U) / 9.11e-31) / 1e7).toFixed(2));
          return {
            q: `Vakuumda tinch holatdan U = ${U} V kuchlanish bilan tezlatilgan elektronning tezligini (×10⁷ m/s) toping (e/m ≈ 1.76·10¹¹ C/kg).`,
            correct: v,
            unit: '×10⁷ m/s',
            explain: `v = √(2·(e/m)·U) = √(2 · 1.76·10¹¹ · ${U}) ≈ ${v}·10⁷ m/s.`,
          };
        },
      },
      {
        variants: [[400], [1200], [2500], [800]],
        build: (i) => {
          const [U] = [[400], [1200], [2500], [800]][i];
          return {
            q: `Katoddan chiqqan elektron U = ${U} V kuchlanish maydonidan o‘tganda uning kinetik energiyasi (eV) qanchaga teng bo‘ladi?`,
            correct: U,
            unit: 'eV',
            explain: `E_k = e·U = ${U} eV.`,
          };
        },
      },
    ],
  },
  {
    id: '5C-5',
    code: '5C.5',
    sectionId: 'sec-5',
    subsectionId: '5C',
    subsectionTitle: 'C. Turli Muhitlarda Elektr Toki',
    title: "Yarimo'tkazgichlarda",
    subtitle: "Xususiy va aralashmali o'tkazuvchanlik (p va n tip), p-n o'tish, diod, tranzistor, termistor, fotorezistor.",
    theory: {
      overview:
        'Yarimo‘tkazgichlar (Si, Ge, GaAs) solishtirma qarshiligi bo‘yicha o‘tkazgichlar va dielektriklar orasida turadi, ammo ularning qarshiligi harorat oshishi va yoritilish bilan KESKIN KAMAYADI! Toza yarimo‘tkazgichda qizdirilganda kovalent bog‘lar uzilib, teng miqdorda erkin elektronlar va «kovaklar» (musbat zaryad kabi harakatlanuvchi bo‘sh o‘rinlar) hosil bo‘ladi — bu xususiy o‘tkazuvchanlikdir.\n\nAralashmalar qo‘shish (legirlash) bilan o‘tkazuvchanlik millionlab marta oshiriladi: 5-valentli donor aralashma (P, As) qo‘shilsa elektronlar ustun bo‘lgan n-tip, 3-valentli akseptor aralashma (B, In) qo‘shilsa kovaklar ustun bo‘lgan p-tip yarimo‘tkazgich olinadi. p va n sohalar tutashgan chegarada p-n o‘tish hosil bo‘ladi: to‘g‘ri ulanishda (p ga +, n ga −) to‘siq qatlami torayib katta tok o‘tadi, teskari ulanishda qatlam kengayib tok o‘tmaydi. Bu diod (to‘g‘rilagich), tranzistor (kuchaytirgich va mantiqiy kalit — protsessor asosi), termistor va fotorezistorlarning ishlash tamoyilidir.',
      keyLaws: [
        { title: 'Yarimo‘tkazgich harorat xossasi', text: 'Harorat oshishi bilan elektron-kovak juftlari eksponensial ko‘paygani uchun qarshilik keskin kamayadi (termistorlar).' },
        { title: 'n-tip va p-tip (Donor vs Akseptor)', text: 'n-tip: asosiy tashuvchilar elektronlar (donor, 5-guruh). p-tip: asosiy tashuvchilar kovaklar (akseptor, 3-guruh).' },
        { title: 'p-n o‘tishning ventil (to‘g‘rilash) xossasi', text: 'To‘g‘ri yo‘nalishda (U > U_to‘siq ≈ 0.7 V kremniy uchun) tok yaxshi o‘tadi, teskari yo‘nalishda deyarli berk.' },
      ],
      formulas: [
        { latex: 'n_i · p_i = n_i²(T)  ∝  exp(−E_g / (k_B · T))', name: 'Xususiy zaryad tashuvchilar konsentratsiyasi', symbols: 'E_g — taqiqlangan zona kengligi (Si uchun ≈ 1.12 eV)' },
        { latex: 'I = I_s · (exp(e·U / (k_B·T)) − 1)', name: 'Shokli p-n diod tenglamasi', symbols: 'I_s — teskari to‘yinish toki' },
      ],
      constants: [
        { name: 'Kremniy (Si) taqiqlangan zonasi', symbol: 'E_g(Si)', value: '1.12', unit: 'eV' },
        { name: 'Kremniy diod ochilish kuchlanishi', symbol: 'U_0', value: '≈ 0.7', unit: 'V' },
      ],
      applications: [
        'Zamonaviy kompyuter protsessorlari va xotira chiplaridagi milliardlab MOSFET tranzistorlar.',
        'Quyosh panellari (fotovoltaik p-n o‘tish), yorug‘lik diodlari (LED) va lazer diodlari.',
      ],
      calculator: {
        title: 'Yarimo‘tkazgich p-n diodi va zanjiri kalkulyatori',
        formulaDisplay: 'I = (U_manba − U_diod) / R',
        inputs: [
          { key: 'U', label: 'Manba kuchlanishi U', symbol: 'U', unit: 'V', min: 0, max: 24, step: 0.5, default: 5 },
          { key: 'Ud', label: 'Diod ochilish kuchlanishi U₀', symbol: 'U₀', unit: 'V', min: 0.3, max: 3.3, step: 0.1, default: 0.7 },
          { key: 'R', label: 'Cheklovchi rezistor R', symbol: 'R', unit: 'Ω', min: 10, max: 2000, step: 10, default: 220 },
        ],
        compute: (v) => {
          if (v.U <= v.Ud) return { value: '0.00', unit: 'mA', summary: `U ≤ ${v.Ud} V bo‘lgani uchun p-n o‘tish yopiq (tok ~ 0 mA).` };
          const I = (v.U - v.Ud) / v.R;
          return {
            value: (I * 1000).toFixed(1),
            unit: 'mA',
            summary: `To‘g‘ri yo‘nalishda dioddan o‘tuvchi tok I = ${(I * 1000).toFixed(1)} mA.`,
          };
        },
      },
    },
    simulation: {
      title: 'Yarimo‘tkazgichlar, Xoll Effekti va p-n O‘tish Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Hall_Effect.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Yarimo‘tkazgich plastinasida Xoll effekti yordamida n-tip (elektron) va p-tip (kovak) zaryad tashuvchilarning ishorasi qanday aniqlanishini 3D kuzating.',
      alternateSims: [
        { label: 'Xoll effekti (p va n tip aniqlash, 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Hall_Effect.html' },
      ],
      parametric: {
        mode: 'pn_junction',
        title: 'p-n O‘tish (Diod), Qatlam Kengligi va VAX Simulyatori',
        description: 'Kuchlanish qutbliligi (+ to‘g‘ri, − teskari) va harorat T ni o‘zgartirib, p-n to‘siq qatlami va voltemper xarakteristikani (VAX) kuzating.',
        controls: [
          { key: 'U', label: 'Kuchlanish U', unit: 'V', min: -5, max: 5, step: 0.2, value: 1.4 },
          { key: 'T', label: 'Harorat T', unit: 'K', min: 200, max: 450, step: 10, value: 300 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Toza kremniyga (4-valentli) 5-valentli mishyak yoki fosfor qo‘shilsa, qanday turdagi yarimo‘tkazgich hosil bo‘ladi?', options: ['n-tip (asosiy tashuvchilar — elektronlar)', 'p-tip (asosiy tashuvchilar — kovaklar)', 'Dielektrik', 'O‘ta o‘tkazgich'], answer: 0, explain: '5-valentli donor aralashma ortiqcha erkin elektron beradi → n-tip.' },
      { q: 'p-tip yarimo‘tkazgichda asosiy zaryad tashuvchilar nima?', options: ['Kovaklar (musbat zaryad kabi harakatlanuvchi bo‘sh o‘rinlar)', 'Elektronlar', 'Neytronlar', 'Fotonlar'], answer: 0, explain: 'Akseptor aralashma elektronni tortib olib, kovak konsentratsiyasini oshiradi.' },
      { q: 'Yarimo‘tkazgich qizdirilganda yoki yoritilganda uning elektr qarshiligi qanday o‘zgaradi?', options: ['Keskin kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Avval ortadi keyin nol bo‘ladi'], answer: 0, explain: 'Issiqlik va fotonlar kovalent bog‘larni uzib, yangi elektron-kovak juftlarini yaratadi.' },
      { q: 'p-n o‘tish qaysi xossaga ega?', options: ['Bir tomonlama elektr o‘tkazuvchanlik (to‘g‘ri yo‘nalishda ochiq, teskarisida yopiq)', 'Har ikki yo‘nalishda bir xil o‘tkazadi', 'Faqat o‘ta past haroratda ishlaydi', 'Energiya ishlab chiqarmaydi lekin magnitlanadi'], answer: 0, explain: 'To‘g‘ri kuchlanishda potensial to‘siq pasayib tok o‘tadi; teskarisida to‘siq oshib yopiladi.' },
      { q: 'Bipolyar yoki maydon tranzistorining asosiy vazifasi nima?', options: ['Kuchsiz elektr signallarini kuchaytirish va elektron kalit (0/1) vazifasini bajarish', 'Faqat tokni to‘g‘rilash', 'Issiqlik o‘lchash', 'Bosim o‘lchash'], answer: 0, explain: 'Tranzistorlar barcha elektron kuchaytirgichlar va raqamli mikrosxemalarning asosiy elementidir.' },
      { q: 'Harorat o‘zgarishiga o‘ta sezgir yarimo‘tkazgich rezistori nima deb ataladi?', options: ['Termistor', 'Fotorezistor', 'Kondensator', 'Induktivlik g‘altagi'], answer: 0, explain: 'Termistor harorat oshganda qarshiligini kuchli kamaytiradi (yoki PTC da oshiradi).' },
      { q: 'Yorug‘lik tushganda yarimo‘tkazgich qarshiligining kamayishi hodisasiga asoslangan asbob qaysi?', options: ['Fotorezistor', 'Termistor', 'Varistor', 'Transformator'], answer: 0, explain: 'Ichki fotoeffekt natijasida fotorezistorda zaryad tashuvchilar soni ortadi.' },
      { q: 'Xususiy yarimo‘tkazgichda elektronlar va kovaklar konsentratsiyasi nisbati qanday?', options: ['Teng (n = p)', 'n ≫ p', 'p ≫ n', 'p = 0'], answer: 0, explain: 'Har bir uzilgan kovalent bog‘ bitta elektron va bitta kovak hosil qiladi.' },
    ],
    problems: [
      {
        variants: [[5, 0.7, 215], [9, 0.7, 415], [12, 0.7, 565], [3.3, 0.7, 130]],
        build: (i) => {
          const [U, Ud, R] = [[5, 0.7, 215], [9, 0.7, 415], [12, 0.7, 565], [3.3, 0.7, 130]][i];
          const Ima = Number((((U - Ud) / R) * 1000).toFixed(1));
          return {
            q: `Kuchlanishi ${U} V manbaga kremniy diodi (ochilish kuchlanishi ${Ud} V) va ${R} Ω rezistor ketma-ket to‘g‘ri ulandi. Zanjirdagi tokni (mA) toping.`,
            correct: Ima,
            unit: 'mA',
            explain: `I = (U − U₀)/R = (${U} − ${Ud})/${R} = ${(Ima / 1000).toFixed(3)} A = ${Ima} mA.`,
          };
        },
      },
      {
        variants: [[10, 2], [12, 3], [15, 5], [20, 4]],
        build: (i) => {
          const [U, R] = [[10, 2], [12, 3], [15, 5], [20, 4]][i];
          const I = U / R;
          return {
            q: `Ideal yarimo‘tkazgich diodi to‘g‘ri ulanganda qarshiligi ${R} Ω rezistor orqali U = ${U} V kuchlanish ostida qancha tok (A) o‘tadi?`,
            correct: I,
            unit: 'A',
            explain: `To‘g‘ri ulanishda ideal diod qarshiligi nol: I = U / R = ${U} / ${R} = ${I} A.`,
          };
        },
      },
    ],
  },
  {
    id: '5D-1',
    code: '5D.1',
    sectionId: 'sec-5',
    subsectionId: '5D',
    subsectionTitle: 'D. Magnetizm va Elektromagnit Induksiya',
    title: 'Magnit maydon',
    subtitle: 'Magnit induksiya vektori, Amper kuchi, Lorens kuchi, zaryadlangan zarrachaning magnit maydondagi harakati (mass-spektrometr, siklotron).',
    theory: {
      overview:
        'Magnit maydon harakatdagi elektr zaryadlar (toklar) tomonidan yaratiladi va faqat harakatlanayotgan zaryadlarga ta’sir ko‘rsatadi. Maydonning kuch tavsifi — magnit induksiya vektori B⃗ (Tesla, 1 Tl = 1 N/(A·m)). Magnit maydoni tokli o‘tkazgichga Amper kuchi bilan ta’sir qiladi: F_A = I·B·l·sinα (yo‘nalishi chap qo‘l qoidasi bilan aniqlanadi).\n\nMagnit maydonda v⃗ tezlik bilan harakatlanayotgan q zaryadga Lorens kuchi ta’sir etadi: F_L = |q|·v·B·sinα (vektor shaklda F⃗_L = q·(v⃗ × B⃗)). Lorens kuchi doimo tezlikka perpendikulyar bo‘lgani uchun ISH BAJARMAYDI va tezlik modulini o‘zgartirmaydi — u faqat trayektoriyani egadi! B⃗ ga perpendikulyar uchib kirgan zarracha R = m·v / (|q|·B) radiusli aylana bo‘ylab (siklotron chastotasi ω = |q|·B / m tezlikka bog‘liq emas!), burchak ostida kirsa vint chizig‘i (spiral) bo‘ylab harakatlanadi. Bu tamoyil mass-spektrometrlar va siklotronlarda qo‘llanadi.',
      keyLaws: [
        { title: 'Amper kuchi', text: 'F_A = I·B·l·sinα — yo‘nalishi chap qo‘l qoidasi (B kaftga, 4 barmoq I ga → bosh barmoq F_A ga).' },
        { title: 'Lorens kuchi xossasi', text: 'F⃗_L = q(v⃗ × B⃗) — tezlikka tik bo‘lgani uchun kinetik energiyani o‘zgartirmaydi (A_L = 0).' },
        { title: 'Siklotron radiusi va davri', text: 'R = mv/(|q|B), davr T = 2πm/(|q|B) zarracha tezligiga va radiusga bog‘liq emas!' },
      ],
      formulas: [
        { latex: 'F_A = I · B · l · sinα', name: 'Amper kuchi', symbols: 'B — magnit induksiya (Tl), l — o‘tkazgich uzunligi (m)' },
        { latex: 'F_L = |q| · v · B · sinα', name: 'Lorens kuchi', symbols: 'v — zarracha tezligi (m/s), α — v⃗ va B⃗ burchagi' },
        { latex: 'R = (m · v) / (|q| · B),   T = (2π · m) / (|q| · B)', name: 'Magnit maydonda aylana harakat', symbols: 'R — trayektoriya radiusi (m), T — aylanish davri (s)' },
      ],
      constants: [
        { name: 'Magnit induksiya SI birligi', symbol: 'Tl', value: '1 Tl = 1 N/(A·m)', unit: 'Tesla' },
        { name: 'Vakuum magnit doimiysi', symbol: 'μ₀', value: '4π·10⁻⁷', unit: 'H/m' },
      ],
      applications: [
        'Mass-spektrometrlar (izotoplarni m/q nisbati bo‘yicha ajratish) va zarracha tezlatkichlari (siklotron, LHC).',
        'Elektrodvigatellar, karnaylar (dinamiklar) va elektromagnit nasoslar.',
      ],
      calculator: {
        title: 'Amper kuchi va Lorens siklotroni kalkulyatori',
        formulaDisplay: 'F_A = IBl·sinα,  R = mv/(qB)',
        inputs: [
          { key: 'B', label: 'Magnit induksiya B', symbol: 'B', unit: 'Tl', min: 0.05, max: 10, step: 0.05, default: 0.5 },
          { key: 'I', label: 'Tok kuchi I', symbol: 'I', unit: 'A', min: 1, max: 50, step: 1, default: 8 },
          { key: 'l', label: 'O‘tkazgich uzunligi l', symbol: 'l', unit: 'm', min: 0.1, max: 5, step: 0.1, default: 0.4 },
          { key: 'v', label: 'Proton tezligi v (×10⁶ m/s)', symbol: 'v', unit: '10⁶ m/s', min: 0.5, max: 20, step: 0.5, default: 4 },
        ],
        compute: (v) => {
          const FA = v.I * v.B * v.l;
          const mp = 1.673e-27;
          const e = 1.602e-19;
          const R = (mp * v.v * 1e6) / (e * v.B);
          return {
            value: FA.toFixed(2),
            unit: 'N',
            summary: `Maksimal Amper kuchi F_A = ${FA.toFixed(2)} N. Protonning siklotron radiusi R = ${(R * 100).toFixed(2)} sm.`,
          };
        },
      },
    },
    simulation: {
      title: 'Lorens Kuchi, Amper Kuchi va Fleming Qoidasi 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Understanding_Lorentz_Force.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Zaryadlangan zarracha harakati, Lorens kuchi vektorlari va tokli o‘tkazgichga ta’sir etuvchi Amper kuchini 3D kuzating.',
      alternateSims: [
        { label: 'Lorens kuchini o‘rganish (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Understanding_Lorentz_Force.html' },
        { label: 'Amper kuchi tahlili (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Understanding_Force_on_a_Current_Carrying_Wire.html' },
        { label: 'Fleming qo‘l qoidasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Flemings_Thumb_Rule.html' },
        { label: 'Tokli o‘tkazgichga kuch (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Force_on_a_Current_Carrying_Conductor.html' },
      ],
      parametric: {
        mode: 'lorentz_cyclotron',
        title: 'Lorens Kuchi va Siklotron Trayektoriyasi Simulyatori',
        description: 'Magnit maydon induksiyasi B, zarracha tezligi v va massasi m ni o‘zgartirib, aylanish radiusi R = mv/(qB) ni kuzating.',
        controls: [
          { key: 'B', label: 'Magnit induksiya B', unit: 'Tl', min: 0.2, max: 3.0, step: 0.1, value: 1.0 },
          { key: 'v', label: 'Zarracha tezligi v', unit: 'birlik', min: 1, max: 10, step: 0.5, value: 5 },
          { key: 'qSign', label: 'Zaryad ishorasi (+1 / -1)', unit: '', min: -1, max: 1, step: 2, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Lorens kuchi magnit maydonda harakatlanayotgan zaryadlangan zarrachaning qaysi parametrini O‘ZGARTIRADI?', options: ['Faqat tezlik yo‘nalishini (trayektoriyani egadi, ish bajarmaydi)', 'Tezlik modulini', 'Zaryad miqdorini', 'Massasini'], answer: 0, explain: 'Lorens kuchi doimo tezlikka perpendikulyar bo‘lgani uchun A = 0 va |v| = const.' },
      { q: 'Uzunligi 0.5 m o‘tkazgichdan 10 A tok o‘tmoqda. 0.4 Tl magnit maydoniga tik joylashgan o‘tkazgichga qancha Amper kuchi ta’sir qiladi?', options: ['2 N', '20 N', '0.2 N', '8 N'], answer: 0, explain: 'F_A = I·B·l·sin(90°) = 10 · 0.4 · 0.5 = 2 N.' },
      { q: 'Zaryadlangan zarracha bir jinsli magnit maydoniga induksiya chiziqlariga PARALLEL (α = 0°) uchib kirsa, qanday harakatlanadi?', options: ['To‘g‘ri chiziqli tekis harakatlanadi (F_L = 0)', 'Aylana bo‘ylab', 'Spiral bo‘ylab', 'Darhol to‘xtaydi'], answer: 0, explain: 'sin(0°) = 0 bo‘lgani uchun Lorens kuchi nolga teng.' },
      { q: 'Bir jinsli magnit maydoniga perpendikulyar uchib kirgan zarrachaning aylanish davri T = 2πm/(qB) nimaga bog‘liq EMAS?', options: ['Zarrachaning tezligi v va aylana radiusi R ga', 'Zarracha massasi m ga', 'Magnit induksiya B ga', 'Zaryadi q ga'], answer: 0, explain: 'Tezlik oshsa radius ham proporsional oshgani uchun aylanish davri bir xil qoladi — siklotron ishlash prinsipi!' },
      { q: 'Amper kuchi va Lorens kuchi yo‘nalishi qaysi qoida bilan aniqlanadi?', options: ['Chap qo‘l qoidasi', 'O‘ng qo‘l qoidasi', 'Richag qoidasi', 'Lens qoidasi'], answer: 0, explain: 'Chap qo‘l kaftiga B kirsin, 4 barmoq tok/musbat zaryad tezligi bo‘ylab yo‘nalsin → bosh barmoq kuchni ko‘rsatadi.' },
      { q: 'Magnit induksiya birligi 1 Tesla (Tl) qaysi kattaliklarga teng?', options: ['1 N / (A·m)', '1 J / C', '1 V · s', '1 A · m'], answer: 0, explain: 'B = F / (I·l) => N / (A·m).' },
      { q: 'Mass-spektrometr qurilmasi izotoplarni nimasi bo‘yicha ajratadi?', options: ['Massasining zaryadiga nisbati (m/q) va trayektoriya radiusi R orqali', 'Haroratiga ko‘ra', 'Rangiga ko‘ra', 'Hajmiga ko‘ra'], answer: 0, explain: 'R = (m/q)·(v/B) — og‘irroq izotoplar kattaroq radiusli yoy chizadi.' },
      { q: 'Magnit maydon qo‘zg‘almas elektr zaryadiga ta’sir ko‘rsatadimi?', options: ['Yo‘q (v = 0 da F_L = 0)', 'Ha, kuchli tortadi', 'Ha, itaradi', 'Faqat musbat zaryadga'], answer: 0, explain: 'F_L = qvBsinα; v = 0 bo‘lsa Lorens kuchi nolga teng.' },
    ],
    problems: [
      {
        variants: [[5, 0.4, 2], [10, 0.2, 1.5], [8, 0.5, 0.5], [4, 1.5, 0.5]],
        build: (i) => {
          const [I, B, l] = [[5, 0.4, 2], [10, 0.2, 1.5], [8, 0.5, 0.5], [4, 1.5, 0.5]][i];
          const F = I * B * l;
          return {
            q: `Induksiyasi ${B} Tl magnit maydoniga tik joylashgan ${l} m uzunlikdagi o‘tkazgichdan ${I} A tok o‘tmoqda. Amper kuchi (N) qancha?`,
            correct: F,
            unit: 'N',
            explain: `F_A = I·B·l = ${I} · ${B} · ${l} = ${F} N.`,
          };
        },
      },
      {
        variants: [[2, 5, 0.5], [4, 3, 2], [1, 6, 0.5], [5, 2, 1]],
        build: (i) => {
          const [q, v, B] = [[2, 5, 0.5], [4, 3, 2], [1, 6, 0.5], [5, 2, 1]][i];
          const FL = q * v * B;
          return {
            q: `Induksiyasi ${B} Tl magnit maydoniga perpendikulyar ravishda ${v} m/s tezlikda harakatlanayotgan ${q} μC zaryadga ta’sir etuvchi Lorens kuchini (μN) toping.`,
            correct: FL,
            unit: 'μN',
            explain: `F_L = q·v·B = ${q} μC · ${v} · ${B} = ${FL} μN.`,
          };
        },
      },
    ],
  },
  {
    id: '5D-2',
    code: '5D.2',
    sectionId: 'sec-5',
    subsectionId: '5D',
    subsectionTitle: 'D. Magnetizm va Elektromagnit Induksiya',
    title: 'Moddaning magnit xossalari',
    subtitle: 'Diamagnetiklar, paramagnetiklar, ferromagnetiklar, Kyuri harorati.',
    theory: {
      overview:
        'Har qanday modda tashqi magnit maydonga kiritilganda magnitlanadi va maydonni o‘zgartiradi. Buni tavsiflovchi kattalik — moddaning nisbiy magnit singdiruvchanligi μ = B / B₀ (bu yerda B₀ — vakuumdagi maydon, B — modda ichidagi maydon).\n\nMagnit xossalariga ko‘ra barcha moddalar uch sinfga bo‘linadi: 1) Diamagnetiklar (μ < 1, masalan: mis, kumush, oltin, suv, vismut) — tashqi maydonni biroz kuchsizlantiradi va maydonning kuchsiz tomoniga itariladi (atomlarda elektronlarning orbital o‘zaro induksiyasi tufayli); 2) Paramagnetiklar (μ > 1, lekin ≈ 1, masalan: alyuminiy, platina, kislorod) — maydonni biroz kuchaytiradi; 3) Ferromagnetiklar (μ ≫ 1, 10²–10⁵ marta kuchaytiradi, masalan: temir, nikel, kobalt) — o‘z-o‘zidan magnitlangan «domen» sohalariga ega, kuchli magnitlanadi va gisterezis (qoldiq magnitlanish) xossasini namoyon qiladi. Ferromagnetiklar ma’lum Kyuri harorati T_C dan yuqori qizdirilganda domen tuzilishi buzilib, oddiy paramagnetikka aylanadi.',
      keyLaws: [
        { title: 'Diamagnetiklar (μ < 1)', text: 'Tashqi magnit maydoniga qarama-qarshi magnitlanadi va maydondan itariladi.' },
        { title: 'Paramagnetiklar (μ > 1)', text: 'Doimiy atom magnit momentlariga ega; tashqi maydon bo‘ylab tartiblanib uni biroz kuchaytiradi.' },
        { title: 'Ferromagnetiklar va Kyuri nuqtasi', text: 'μ ≫ 1; domen tuzilishiga va magnit gisterezisga ega. T > T_Kyuri da ferromagnetizm yo‘qoladi (masalan, Fe uchun 770 °C).' },
      ],
      formulas: [
        { latex: 'μ = B / B₀ = 1 + χ', name: 'Nisbiy magnit singdiruvchanlik', symbols: 'μ — magnit singdiruvchanlik, χ — magnit qabul qiluvchanlik' },
        { latex: 'χ_para = C / T', name: 'Paramagnetiklar uchun Kyuri qonuni', symbols: 'C — Kyuri doimiysi, T — mutlaq harorat' },
      ],
      constants: [
        { name: 'Temirning Kyuri harorati', symbol: 'T_C(Fe)', value: '1043 (770°C)', unit: 'K' },
        { name: 'Nikelning Kyuri harorati', symbol: 'T_C(Ni)', value: '631 (358°C)', unit: 'K' },
      ],
      applications: [
        'Transformatorlar va elektrodvigatellar o‘zaklarida yumshoq ferromagnetiklar (elektrotexnik po‘lat).',
        'Qattiq disklar, bank kartalari va doimiy magnitlarda (NdFeB) qattiq ferromagnetik materiallar.',
      ],
      calculator: {
        title: 'Modda ichidagi magnit induksiya va Kyuri holati kalkulyatori',
        formulaDisplay: 'B = μ · B₀,  μ = 1 + χ',
        inputs: [
          { key: 'B0', label: 'Vakuum maydoni B₀', symbol: 'B₀', unit: 'mTl', min: 1, max: 500, step: 5, default: 20 },
          { key: 'mu', label: 'Magnit singdiruvchanlik μ', symbol: 'μ', unit: '', min: 0.99, max: 2000, step: 1, default: 400 },
        ],
        compute: (v) => {
          const B = v.mu * v.B0;
          const kind = v.mu < 1 ? 'Diamagnetik' : v.mu < 1.1 ? 'Paramagnetik' : 'Ferromagnetik';
          return {
            value: (B / 1000).toFixed(3),
            unit: 'Tl',
            summary: `Muhit turi: ${kind}. Modda ichidagi magnit induksiya B = ${(B / 1000).toFixed(3)} Tl (${B.toFixed(1)} mTl).`,
          };
        },
      },
    },
    simulation: {
      title: 'Magnit Materiallar, Domenlar va Induksiya 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Elektromagnetizm tajribalari va magnit o‘zaklar ta’sirini 3D ko‘ring hamda quyida domenlar va Kyuri haroratini simulyatsiya qiling.',
      alternateSims: [
        { label: 'Tok va magnit o‘zaro ta’siri (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html' },
        { label: 'Elektromagnit induksiya (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Electromagnetic_Induction.html' },
      ],
      parametric: {
        mode: 'ferromagnetism',
        title: 'Ferromagnetik Domenlar, Gisterezis va Kyuri Harorati Simulyatori',
        description: 'Tashqi maydon H va harorat T ni o‘zgartirib, magnit domenlarining yo‘nalishini hamda Kyuri nuqtasida tartibsizlanishini kuzating.',
        controls: [
          { key: 'H', label: 'Tashqi maydon H', unit: 'kA/m', min: -100, max: 100, step: 10, value: 40 },
          { key: 'T', label: 'Harorat T', unit: '°C', min: 20, max: 900, step: 20, value: 25 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi moddalar guruhi tashqi magnit maydonni yuzlab va minglab marta kuchaytiradi?', options: ['Ferromagnetiklar (temir, nikel, kobalt)', 'Diamagnetiklar', 'Paramagnetiklar', 'Dielektriklar'], answer: 0, explain: 'Ferromagnetiklarda domenlar tashqi maydon bo‘ylab birgalikda yo‘nalib B ni keskin oshiradi.' },
      { q: 'Ferromagnetikni Kyuri haroratidan yuqori qizdirilganda u qanday xossaga o‘tadi?', options: ['Paramagnetik holatga o‘tadi (ferromagnetizm yo‘qoladi)', 'O‘ta o‘tkazgich bo‘ladi', 'Doimiy magnitga aylanadi', 'Diamagnetik bo‘ladi'], answer: 0, explain: 'Issiqlik harakati domenlarning o‘z-o‘zidan magnitlanishini buzadi.' },
      { q: 'Nisbiy magnit singdiruvchanligi μ < 1 bo‘lgan moddalar nima deb ataladi?', options: ['Diamagnetiklar (mis, vismut, suv)', 'Paramagnetiklar', 'Ferromagnetiklar', 'Plazma'], answer: 0, explain: 'Diamagnetiklar tashqi maydondan kuchsiz itariladi (χ < 0, μ < 1).' },
      { q: 'Tashqi magnit maydoni o‘chirilgandan keyin ham ferromagnetikda magnitlanishning saqlanib qolishi hodisasi nima bilan bog‘liq?', options: ['Magnit gisterezis (qoldiq induksiya)', 'Kyuri qonuni', 'Xoll effekti', 'Diffuziya'], answer: 0, explain: 'Gisterezis tufayli doimiy magnitlar va magnit xotira qurilmalari ishlaydi.' },
      { q: 'Transformator o‘zaklari uchun qanday ferromagnetik material tanlanadi?', options: ['Tor gisterezis sirtmoqli yumshoq ferromagnetik (energiya isrofi kam)', 'Keng sirtmoqli qattiq magnit', 'Diamagnetik mis', 'Yog‘och'], answer: 0, explain: 'O‘zgaruvchan tokda qayta magnitlash isrofi gisterezis sirtmog‘i yuzasiga proporsional.' },
      { q: 'Magnit maydoni ichiga tortiluvchi, ammo μ ≈ 1.00002 bo‘lgan modda qaysi?', options: ['Paramagnetik (masalan, alyuminiy, kislorod)', 'Diamagnetik', 'Ferromagnetik', 'Vakuum'], answer: 0, explain: 'Paramagnetiklarda μ > 1, lekin birdan juda kam farq qiladi.' },
      { q: 'Temirning Kyuri harorati taxminan necha gradus Selsiy?', options: ['770 °C', '100 °C', '0 °C', '3500 °C'], answer: 0, explain: 'Temir uchun T_C ≈ 770 °C (1043 K).' },
      { q: 'G‘altak ichiga temir o‘zak kiritilsa, g‘altakning magnit maydoni va induktivligi qanday o‘zgaradi?', options: ['Keskin (μ marta) ortadi', 'Kamayadi', 'O‘zgarmaydi', 'Nolga tushadi'], answer: 0, explain: 'B = μ·B₀ va L = μ·L₀.' },
    ],
    problems: [
      {
        variants: [[0.02, 500], [0.01, 1200], [0.05, 200], [0.004, 1500]],
        build: (i) => {
          const [B0, mu] = [[0.02, 500], [0.01, 1200], [0.05, 200], [0.004, 1500]][i];
          const B = B0 * mu;
          return {
            q: `Ichki maydoni B₀ = ${B0} Tl bo‘lgan g‘altak ichiga magnit singdiruvchanligi μ = ${mu} bo‘lgan po‘lat o‘zak kiritildi. Magnit induksiya B (Tl) qancha bo‘ladi?`,
            correct: B,
            unit: 'Tl',
            explain: `B = μ·B₀ = ${mu} · ${B0} = ${B} Tl.`,
          };
        },
      },
      {
        variants: [[40, 1000], [60, 500], [20, 800], [10, 2000]],
        build: (i) => {
          const [B_Tl, B0_mTl] = [[40, 1000], [60, 500], [20, 800], [10, 2000]][i];
          const mu = B_Tl / (B0_mTl / 1000);
          return {
            q: `Vakuumda ${B0_mTl} mTl magnit maydoni ferromagnetik ichida ${B_Tl} Tl ga yetdi. Materialning magnit singdiruvchanligi μ qancha?`,
            correct: mu,
            unit: '',
            explain: `μ = B / B₀ = ${B_Tl} / (${B0_mTl}·10⁻³) = ${mu}.`,
          };
        },
      },
    ],
  },
  {
    id: '5D-3',
    code: '5D.3',
    sectionId: 'sec-5',
    subsectionId: '5D',
    subsectionTitle: 'D. Magnetizm va Elektromagnit Induksiya',
    title: 'Elektromagnit induksiya',
    subtitle: 'Magnit oqimi, Faradeyning induksiya qonuni, Lens qoidasi, o‘zinduksiya, induktivlik, magnit maydon energiyasi.',
    theory: {
      overview:
        '1831-yilda Maykl Faradey yopiq kontur chegaralagan yuzadan o‘tuvchi magnit oqimi Φ = B·S·cosα (Veber, 1 Wb = 1 Tl·m²) o‘zgarganda konturda induksiya EYuK va induksiya toki hosil bo‘lishini kashf etdi. Faradeyning elektromagnit induksiya qonuni: ε_i = −N·(ΔΦ/Δt) — hosil bo‘ladigan EYuK magnit oqimining o‘zgarish tezligiga proporsional.\n\nFormuladagi «minus» ishorasi Lens qoidasini (energiya saqlanishining ko‘rinishi) bildiradi: konturda vujudga kelgan induksiya toki o‘zining magnit maydoni bilan uni yuzaga keltirgan magnit oqimi o‘zgarishiga qarshilik ko‘rsatadi. G‘altakning o‘zidan o‘tayotgan tok I o‘zgarganda uning o‘zida induksiya EYuK hosil bo‘lishi O‘ZINDUKSIYA deyiladi: ε_si = −L·(ΔI/Δt), bu yerda L (Genri, H) — g‘altak induktivligi (Φ = L·I). Tokli g‘altakning magnit maydon energiyasi W_m = ½·L·I².',
      keyLaws: [
        { title: 'Faradey induksiya qonuni', text: 'ε_i = −N·dΦ/dt — magnit maydoni o‘zgarishi (B, S yoki α o‘zgarishi) elektr maydoni (EYuK) uyg‘otadi.' },
        { title: 'Lens qoidasi', text: 'Induksiya toki doimo o‘zini hosil qilgan magnit oqimining o‘zgarishiga qarshi ta’sir ko‘rsatadigan yo‘nalishda oqadi.' },
        { title: 'O‘zinduksiya va Magnit energiyasi', text: 'ε_o‘z = −L·ΔI/Δt; magnit maydoni W_m = ½·L·I² energiya to‘playdi (mexanikadagi kinetik energiya ½mv² ga analog).' },
      ],
      formulas: [
        { latex: 'Φ = B · S · cosα', name: 'Magnit oqimi (Veber)', symbols: 'B — induksiya (Tl), S — yuza (m²), α — B⃗ va normal n⃗ burchagi' },
        { latex: 'ε_i = −N · (ΔΦ / Δt)', name: 'Faradey induksiya qonuni', symbols: 'N — o‘ramlar soni, ΔΦ/Δt — oqim o‘zgarish tezligi' },
        { latex: 'ε_har = B · l · v · sinα', name: 'Harakatdagi o‘tkazgichda EYuK', symbols: 'l — o‘tkazgich uzunligi, v — tezlik' },
        { latex: 'ε_o‘z = −L · (ΔI / Δt),   W_m = ½ · L · I²', name: 'O‘zinduksiya EYuK va magnit energiyasi', symbols: 'L — induktivlik (H)' },
      ],
      constants: [
        { name: 'Magnit oqimi SI birligi', symbol: 'Wb', value: '1 Wb = 1 Tl·m²', unit: 'Veber' },
        { name: 'Induktivlik SI birligi', symbol: 'H', value: '1 H = 1 Wb/A', unit: 'Genri' },
      ],
      applications: [
        'Barcha elektr generatorlari (GES, AES, shamol turbinalari) va transformatorlar.',
        'Induksion plitalar, metall detektorlari va elektr poyezdlardagi uyurmali (Fuko) tormozlar.',
      ],
      calculator: {
        title: 'Faradey induksiyasi, O‘zinduksiya va Magnit energiyasi kalkulyatori',
        formulaDisplay: 'ε_i = N·ΔΦ/Δt,  W_m = ½·L·I²',
        inputs: [
          { key: 'N', label: 'O‘ramlar soni N', symbol: 'N', unit: 'ta', min: 1, max: 1000, step: 10, default: 100 },
          { key: 'dPhi', label: 'Oqim o‘zgarishi ΔΦ', symbol: 'ΔΦ', unit: 'mWb', min: 0.1, max: 100, step: 0.5, default: 5 },
          { key: 'dt', label: 'Vaqt Δt', symbol: 'Δt', unit: 's', min: 0.01, max: 5, step: 0.05, default: 0.1 },
          { key: 'L', label: 'Induktivlik L', symbol: 'L', unit: 'mH', min: 1, max: 500, step: 5, default: 40 },
          { key: 'I', label: 'Tok kuchi I', symbol: 'I', unit: 'A', min: 0.5, max: 50, step: 0.5, default: 5 },
        ],
        compute: (v) => {
          const emf = (v.N * v.dPhi * 1e-3) / v.dt;
          const Wm = 0.5 * (v.L * 1e-3) * v.I * v.I;
          return {
            value: emf.toFixed(1),
            unit: 'V',
            summary: `Induksiya EYuK |ε_i| = ${emf.toFixed(1)} V. G‘altak magnit energiyasi W_m = ${Wm.toFixed(3)} J.`,
          };
        },
      },
    },
    simulation: {
      title: 'Elektromagnit Induksiya, Harakat EYuK va Induktivlik 3D Lab',
      openSourceUrl: 'sims/effectuall/Magnetism_Electromagnetic_Induction.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Magnitni g‘altak ichida harakatlantirib, magnit oqimi o‘zgarishi va Faradey induksiya EYuK ini 3D kuzating.',
      alternateSims: [
        { label: 'Elektromagnit induksiya (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Electromagnetic_Induction.html' },
        { label: 'Harakatdagi o‘tkazgichda EYuK (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Motional_EMF.html' },
        { label: 'Induktivlik va o‘zinduksiya (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Understanding_Inductance.html' },
      ],
      parametric: {
        mode: 'faraday_induction',
        title: 'Faradey Induksiyasi va Lens Qoidasi Simulyatori',
        description: 'G‘altak o‘ramlari N va magnit harakat tezligini o‘zgartirib, Φ(t) hamda induksiya kuchlanishi ε(t) grafigini real vaqtda kuzating.',
        controls: [
          { key: 'N', label: 'O‘ramlar soni N', unit: 'ta', min: 10, max: 200, step: 10, value: 80 },
          { key: 'speed', label: 'Magnit tezligi', unit: 'rad/s', min: 0.5, max: 6, step: 0.25, value: 2.5 },
          { key: 'B', label: 'Magnit induksiyasi B', unit: 'Tl', min: 0.2, max: 2.0, step: 0.1, value: 1.0 },
        ],
      },
    },
    coreQuestions: [
      { q: '200 o‘ramli g‘altakda magnit oqimi 0.1 s da 0.05 Wb ga o‘zgardi. Induksiya EYuK moduli qancha?', options: ['100 V', '10 V', '0.5 V', '1000 V'], answer: 0, explain: '|ε| = N · ΔΦ/Δt = 200 · 0.05 / 0.1 = 100 V.' },
      { q: 'Lens qoidasi fizikaning qaysi fundamental qonunidan kelib chiqadi?', options: ['Energiyaning saqlanish qonunidan', 'Kulon qonunidan', 'Boyl-Mariott qonunidan', 'Arximed qonunidan'], answer: 0, explain: 'Induksiya toki qarshilik ko‘rsatgani uchun uni yuzaga keltirishda mexanik ish bajariladi (energiya saqlanadi).' },
      { q: 'Induktivligi 0.4 H g‘altakdan 5 A tok o‘tmoqda. G‘altak magnit maydonining energiyasi qancha?', options: ['5 J', '10 J', '2 J', '20 J'], answer: 0, explain: 'W_m = ½·L·I² = 0.5 · 0.4 · 25 = 5 J.' },
      { q: 'Yuzasi 0.2 m² ramka 0.5 Tl magnit maydoniga tekisligi bilan PERPENDIKULYAR (normali B bilan 0° burchak) turibdi. Magnit oqimi qancha?', options: ['0.1 Wb', '0 Wb', '2.5 Wb', '0.25 Wb'], answer: 0, explain: 'Φ = B·S·cos(0°) = 0.5 · 0.2 · 1 = 0.1 Wb.' },
      { q: 'G‘altakdagi tok kuchi 0.02 s da 4 A ga o‘zgarganda 40 V o‘zinduksiya EYuK hosil bo‘ldi. G‘altak induktivligi L qancha?', options: ['0.2 H', '0.8 H', '2 H', '5 H'], answer: 0, explain: 'L = ε · Δt / ΔI = 40 · 0.02 / 4 = 0.2 H.' },
      { q: 'Uzunligi 1 m sterjen 0.5 Tl magnit maydoniga tik ravishda 8 m/s tezlik bilan harakatlanmoqda. Uchlaridagi EYuK qancha?', options: ['4 V', '16 V', '0.5 V', '8 V'], answer: 0, explain: 'ε = B·l·v = 0.5 · 1 · 8 = 4 V.' },
      { q: 'Qalin metall plastina kuchli magnit qutblari orasida tebratilsa tez to‘xtaydi. Buning sababi nima?', options: ['Plastinada hosil bo‘luvchi Fuko uyurmali toklari (induksion tormoz)', 'Havo qarshiligi', 'Elektr sig‘imi', 'Zichlik ortishi'], answer: 0, explain: 'Uyurmali toklar Lens qoidasi bo‘yicha harakatni tormozlab, mexanik energiyani issiqlikka aylantiradi.' },
      { q: 'Magnit maydoni ramka tekisligiga PARALLEL (normaliga 90°) yo‘nalganda magnit oqimi nimaga teng?', options: ['0 Wb', 'B·S', 'B/S', 'Maksimal'], answer: 0, explain: 'cos(90°) = 0 => Φ = 0.' },
    ],
    problems: [
      {
        variants: [[100, 0.04, 0.2], [50, 0.08, 0.1], [200, 0.03, 0.5], [150, 0.06, 0.3]],
        build: (i) => {
          const [N, dPhi, dt] = [[100, 0.04, 0.2], [50, 0.08, 0.1], [200, 0.03, 0.5], [150, 0.06, 0.3]][i];
          const e = (N * dPhi) / dt;
          return {
            q: `${N} o‘ramli g‘altakda magnit oqimi ${dt} s ichida ${dPhi} Wb ga kamaydi. Induksiya EYuK moduli (V) qancha?`,
            correct: e,
            unit: 'V',
            explain: `ε = N·ΔΦ/Δt = ${N} · ${dPhi} / ${dt} = ${e} V.`,
          };
        },
      },
      {
        variants: [[0.5, 4], [0.2, 10], [0.8, 5], [0.4, 6]],
        build: (i) => {
          const [L, I] = [[0.5, 4], [0.2, 10], [0.8, 5], [0.4, 6]][i];
          const W = Number((0.5 * L * I * I).toFixed(2));
          return {
            q: `Induktivligi ${L} H g‘altakdan ${I} A tok o‘tayotganda uning magnit maydon energiyasi (J) qancha bo‘ladi?`,
            correct: W,
            unit: 'J',
            explain: `W = ½·L·I² = 0.5 · ${L} · ${I}² = ${W} J.`,
          };
        },
      },
    ],
  },
  {
    id: '5E-1',
    code: '5E.1',
    sectionId: 'sec-5',
    subsectionId: '5E',
    subsectionTitle: "E. Elektromagnit Tebranishlar va To'lqinlar",
    title: 'Tebranish konturi',
    subtitle: 'Erkin va majburiy elektromagnit tebranishlar, Tomson formulasi.',
    theory: {
      overview:
        'Tebranish konturi — C sig‘imli kondensator va L induktivlikli g‘altakning ketma-ket ulangan yopiq zanjiridir. Kondensator zaryadlanib g‘altakka ulanganda zaryad, kuchlanish va tok kuchi garmonik qonun bo‘yicha tebrana boshlaydi: elektr maydon energiyasi (W_e = q²/2C) davriy ravishda g‘altakning magnit maydon energiyasiga (W_m = LI²/2) va aksincha aylanib turadi.\n\nAktiv qarshilik R = 0 bo‘lgan ideal konturda erkin elektromagnit tebranishlar davri Tomson (Kelvin) formulasi bilan aniqlanadi: T = 2π·√(L·C), siklik chastota ω₀ = 1 / √(L·C), chastota ν₀ = 1 / (2π√(LC)). Konturda faol qarshilik R > 0 bo‘lsa, energiyaning bir qismi issiqlik (I²Rt) sifatida sarflanib, tebranishlar so‘nadi; so‘nmas tebranishlar olish uchun tranzistorli avtogeneratorlar qo‘llanadi.',
      keyLaws: [
        { title: 'Tomson formulasi', text: 'T = 2π√(L·C) — tebranish davri faqat g‘altak induktivligi L va kondensator sig‘imi C ga bog‘liq.' },
        { title: 'Energiya aylanishi', text: 'W_um = q_m²/(2C) = L·I_m²/2 = const — q maksimalda tok 0, tok maksimalda q = 0 (fazalar siljishi π/2).' },
        { title: 'Tok va Zaryad amplitudasi', text: 'I_m = ω·q_m = q_m / √(LC).' },
      ],
      formulas: [
        { latex: 'T = 2π · √(L · C),   ν = 1 / (2π·√(L·C))', name: 'Tomson formulasi', symbols: 'L — induktivlik (H), C — sig‘im (F)' },
        { latex: 'q(t) = q_m · cos(ω₀t),   I(t) = −I_m · sin(ω₀t)', name: 'Garmonik zaryad va tok', symbols: 'I_m = ω₀·q_m' },
        { latex: 'q_m² / (2C) = L · I_m² / 2', name: 'Konturda energiya saqlanishi', symbols: 'Maksimal elektr = maksimal magnit energiya' },
      ],
      constants: [
        { name: 'Siklik rezonans chastotasi', symbol: 'ω₀', value: '1 / √(L·C)', unit: 'rad/s' },
      ],
      applications: [
        'Radio va televizor qabul qilgichlarini kerakli stansiya chastotasiga sozlash (o‘zgaruvchan kondensatorli LC kontur).',
        'Simsiz quvvatlantirish (Qi), RFID teglar va yuqori chastotali generatorlar.',
      ],
      calculator: {
        title: 'LC tebranish konturi (Tomson) kalkulyatori',
        formulaDisplay: 'T = 2π√(LC),  ν = 1/T,  λ_to‘lqin = c·T',
        inputs: [
          { key: 'LmH', label: 'Induktivlik L', symbol: 'L', unit: 'mH', min: 0.01, max: 100, step: 0.05, default: 1 },
          { key: 'CuF', label: 'Sig‘im C', symbol: 'C', unit: 'μF', min: 0.001, max: 50, step: 0.01, default: 0.1 },
        ],
        compute: (v) => {
          const L = v.LmH * 1e-3;
          const C = v.CuF * 1e-6;
          const T = 2 * Math.PI * Math.sqrt(L * C);
          const nu = 1 / T;
          const lam = 3e8 * T;
          return {
            value: (nu / 1000).toFixed(2),
            unit: 'kHz',
            summary: `Davr T = ${(T * 1e6).toFixed(1)} μs, chastota ν = ${(nu / 1000).toFixed(2)} kHz, mos radio to‘lqin uzunligi λ = ${(lam / 1000).toFixed(2)} km.`,
          };
        },
      },
    },
    simulation: {
      title: '3D LC Tebranish Konturi (Tomson) Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Electricity_LC_Oscillator.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Kondensator elektr maydoni va g‘altak magnit maydoni orasidagi energiya almashinuvini 3D kuzating.',
      alternateSims: [
        { label: 'LC tebranish konturi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_LC_Oscillator.html' },
        { label: 'Induktivlik va g‘altak (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Understanding_Inductance.html' },
      ],
      parametric: {
        mode: 'lc_oscillator',
        title: 'LC Kontur Energiyasi va Garmonik Tebranish Osillografi',
        description: 'L induktivlik va C sig‘imni sozlab, W_elektr va W_magnit energiyalarining qarama-qarshi fazada almashishini kuzating.',
        controls: [
          { key: 'L', label: 'Induktivlik L', unit: 'mH', min: 1, max: 50, step: 1, value: 10 },
          { key: 'C', label: 'Sig‘im C', unit: 'μF', min: 1, max: 50, step: 1, value: 10 },
          { key: 'R', label: 'So‘nish qarshiligi R', unit: 'Ω', min: 0, max: 5, step: 0.2, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Tebranish konturidagi kondensator sig‘imi 4 marta oshirilsa, erkin tebranishlar davri T qanday o‘zgaradi?', options: ['2 marta ortadi', '4 marta ortadi', '2 marta kamayadi', 'O‘zgarmaydi'], answer: 0, explain: 'T = 2π√(LC) => √4 = 2 marta ortadi.' },
      { q: 'Kondensator to‘liq zaryadlangan paytda konturdagi g‘altakdan o‘tayotgan tok kuchi nimaga teng?', options: ['0 A', 'Maksimal I_m', 'I_m / 2', 'Cheksiz'], answer: 0, explain: 'Zaryad maksimalda barcha energiya kondensatorda bo‘ladi, demak I = 0.' },
      { q: 'Tebranish konturining xususiy chastotasi qaysi formula bilan hisoblanadi?', options: ['ν = 1 / (2π·√(L·C))', 'ν = 2π·√(L·C)', 'ν = L·C', 'ν = √(L / C)'], answer: 0, explain: 'Tomson formulasidan ν = 1/T = 1/(2π√(LC)).' },
      { q: 'Konturda maksimal zaryad q_m = 2 mC va siklik chastota ω = 500 rad/s bo‘lsa, maksimal tok kuchi I_m qancha?', options: ['1 A', '0.004 A', '250 A', '10 A'], answer: 0, explain: 'I_m = ω · q_m = 500 · 0.002 = 1 A.' },
      { q: 'Kondensator sig‘imi 9 marta kamaytirilib, g‘altak induktivligi o‘zgartirilmasa, konturning chastotasi ν qanday o‘zgaradi?', options: ['3 marta ortadi', '3 marta kamayadi', '9 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'ν ~ 1/√C; C 9 marta kamaysa ν √9 = 3 marta ortadi.' },
      { q: 'Ideal tebranish konturida qaysi fizik kattalik doimo o‘zgarmas qoladi?', options: ['To‘la elektromagnit energiya (W_e + W_m)', 'Zaryad q', 'Tok kuchi I', 'Kuchlanish U'], answer: 0, explain: 'R = 0 da energiya issiqlikka sarflanmaydi.' },
      { q: 'Induktivligi 4 mH va sig‘imi 10 μF konturda maksimal tok 2 A bo‘lsa, to‘la energiya qancha?', options: ['8 mJ', '4 mJ', '16 mJ', '2 mJ'], answer: 0, explain: 'W = ½·L·I² = 0.5 · 0.004 · 4 = 0.008 J = 8 mJ.' },
      { q: 'Real konturda tebranishlar nima sababdan so‘nadi?', options: ['Simlar va g‘altakdagi aktiv qarshilikda energiya issiqlikka (va qisman nurlanishga) aylangani uchun', 'Magnit maydon yo‘qligi uchun', 'Sig‘im nol bo‘lgani uchun', 'Massasi kamligi uchun'], answer: 0, explain: 'Q = I²Rt Joul yo‘qotishlari amplitudani so‘ndiradi.' },
    ],
    problems: [
      {
        variants: [[0.01, 0.0001], [0.04, 0.0001], [0.009, 0.001], [0.025, 0.0004]],
        build: (i) => {
          const [L, C] = [[0.01, 0.0001], [0.04, 0.0001], [0.009, 0.001], [0.025, 0.0004]][i];
          const w = Math.round(1 / Math.sqrt(L * C));
          return {
            q: `Induktivligi L = ${L} H va sig‘imi C = ${C * 1e6} μF bo‘lgan tebranish konturining siklik chastotasi ω₀ (rad/s) qancha?`,
            correct: w,
            unit: 'rad/s',
            explain: `ω₀ = 1 / √(L·C) = 1 / √(${L} · ${C}) = ${w} rad/s.`,
          };
        },
      },
      {
        variants: [[2, 1000], [5, 400], [3, 500], [4, 250]],
        build: (i) => {
          const [qm_mC, w] = [[2, 1000], [5, 400], [3, 500], [4, 250]][i];
          const Im = (qm_mC * 1e-3) * w;
          return {
            q: `Konturdagi maksimal zaryad q_m = ${qm_mC} mC, siklik chastota ω = ${w} rad/s. Maksimal tok kuchi I_m (A) qancha?`,
            correct: Im,
            unit: 'A',
            explain: `I_m = ω · q_m = ${w} · ${qm_mC}·10⁻³ = ${Im} A.`,
          };
        },
      },
    ],
  },
  {
    id: '5E-2',
    code: '5E.2',
    sectionId: 'sec-5',
    subsectionId: '5E',
    subsectionTitle: "E. Elektromagnit Tebranishlar va To'lqinlar",
    title: "O'zgaruvchan tok",
    subtitle: "Generatorlar, aktiv, sig'im va induktiv qarshiliklar, rezonans, transformatorlar, elektr energiyasini uzatish.",
    theory: {
      overview:
        'O‘zgaruvchan tok — vaqt bo‘yicha kattaligi va yo‘nalishi davriy (odatda sinus/kosinus) o‘zgarib turadigan majburiy elektromagnit tebranishlardir: u = U_m·sin(ωt). Generatorlar mexanik energiyani magnit maydonida sim ramkani aylantirish (ε = N·B·S·ω·sinωt) orqali elektr energiyasiga aylantiradi. Amalda ta’sir etuvchi (effektiv) qiymatlar ishlatiladi: I = I_m / √2, U = U_m / √2 (maishiy tarmoq 220 V — bu effektiv qiymat, amplitudasi 311 V, chastota 50 Hz).\n\nO‘zgaruvchan tok zanjirida uch turdagi qarshilik mavjud: 1) Aktiv qarshilik R; 2) Induktiv qarshilik X_L = ω·L = 2πνL (tok kuchlanishdan π/2 ga kechikadi); 3) Sig‘im qarshiligi X_C = 1 / (ω·C) (tok kuchlanishdan π/2 ga ilgarilaydi). Ketma-ket RLC zanjirining to‘la qarshiligi (impedans): Z = √(R² + (X_L − X_C)²). X_L = X_C bo‘lganda kuchlanishlar REZONANSI yuz berib, Z = R minimal va tok maksimal bo‘ladi. Transformatorlar (U₁/U₂ = N₁/N₂ = I₂/I₁) o‘zgaruvchan kuchlanishni o‘zaro induksiya yordamida oshirish yoki pasaytirish uchun xizmat qiladi.',
      keyLaws: [
        { title: 'Effektiv (ta’sir etuvchi) qiymat', text: 'U_eff = U_max / √2 ≈ 0.707·U_max — shu o‘zgarmas kuchlanish bilan bir xil issiqlik ajratadigan o‘zgaruvchan kuchlanish.' },
        { title: 'Reaktiv qarshiliklar (X_L va X_C)', text: 'X_L = ωL chastota ortishi bilan ortadi; X_C = 1/(ωC) esa chastota ortishi bilan kamayadi.' },
        { title: 'RLC zanjirida rezonans', text: 'ωL = 1/(ωC) => ω = 1/√(LC) da Z = R (minimal), tok I = U/R (maksimal) va quvvat koeffitsiyenti cosφ = 1.' },
        { title: 'Transformator qonuni', text: 'U₁ / U₂ = N₁ / N₂ = I₂ / I₁ — ideal transformatorda birlamchi va ikkilamchi chulg‘am quvvatlari teng (P₁ = P₂).' },
      ],
      formulas: [
        { latex: 'I_eff = I_m / √2,   U_eff = U_m / √2', name: 'Effektiv qiymatlar', symbols: '220 V tarmoqda U_m = 220·√2 ≈ 311 V' },
        { latex: 'X_L = ω·L,   X_C = 1 / (ω·C)', name: 'Induktiv va sig‘im qarshiliklari', symbols: 'ω = 2πν — burchak chastota (50 Hz da 100π rad/s)' },
        { latex: 'Z = √(R² + (X_L − X_C)²),   I = U / Z', name: 'To‘la qarshilik (impedans) va Om qonuni', symbols: 'Z — impedans (Ω), cosφ = R/Z — quvvat koeffitsiyenti' },
        { latex: 'U₁ / U₂ = N₁ / N₂ = I₂ / I₁', name: 'Transformator transformatsiya koeffitsiyenti', symbols: 'N₁, N₂ — birlamchi va ikkilamchi o‘ramlar soni' },
      ],
      constants: [
        { name: 'O‘zbekiston tarmog‘i standart chastotasi', symbol: 'ν', value: '50', unit: 'Hz' },
        { name: 'Standart fazaviy kuchlanish', symbol: 'U_eff', value: '220', unit: 'V' },
      ],
      applications: [
        'Transformator podstansiyalari yordamida elektr stansiyalardan shaharlarga 220–500 kV kuchlanishda energiya uzatish.',
        'Radio-chastota filtrlarida (yuqori chastota induktor bilan to‘siladi, kondensator orqali o‘tkaziladi) va rezonans kuchaytirgichlarda.',
      ],
      calculator: {
        title: 'Ketma-ket RLC zanjir impedansi va Transformator kalkulyatori',
        formulaDisplay: 'Z = √(R² + (X_L − X_C)²),  I = U/Z',
        inputs: [
          { key: 'R', label: 'Aktiv qarshilik R', symbol: 'R', unit: 'Ω', min: 1, max: 500, step: 5, default: 30 },
          { key: 'XL', label: 'Induktiv qarshilik X_L', symbol: 'X_L', unit: 'Ω', min: 0, max: 500, step: 5, default: 80 },
          { key: 'XC', label: 'Sig‘im qarshilik X_C', symbol: 'X_C', unit: 'Ω', min: 0, max: 500, step: 5, default: 40 },
          { key: 'U', label: 'Effektiv kuchlanish U', symbol: 'U', unit: 'V', min: 10, max: 380, step: 10, default: 220 },
        ],
        compute: (v) => {
          const Z = Math.sqrt(v.R ** 2 + (v.XL - v.XC) ** 2);
          const I = v.U / Z;
          const cosPhi = v.R / Z;
          const P = v.U * I * cosPhi;
          return {
            value: Z.toFixed(1),
            unit: 'Ω',
            summary: `Impedans Z = ${Z.toFixed(1)} Ω, tok I = ${I.toFixed(2)} A, quvvat koef. cosφ = ${cosPhi.toFixed(2)}, aktiv quvvat P = ${P.toFixed(0)} W.`,
          };
        },
      },
    },
    simulation: {
      title: 'O‘zgaruvchan Tok, Generator va Rezonans 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Electromagnetic_Induction.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Magnit oqimining davriy o‘zgarishidan o‘zgaruvchan EYuK hosil bo‘lishini 3D kuzating hamda quyidagi RLC Fazaviy Osillografda rezonansni sozlang.',
      alternateSims: [
        { label: 'Generator va induksiya (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Electromagnetic_Induction.html' },
        { label: 'LC tebranish va rezonans (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_LC_Oscillator.html' },
      ],
      parametric: {
        mode: 'ac_rlc',
        title: 'O‘zgaruvchan Tok RLC Zanjiri va Fazalar Siljishi Osillografi',
        description: 'R, X_L va X_C ni sozlab, kuchlanish u(t) va tok i(t) sinusoidalarining faza siljishi φ hamda rezonans holatini (X_L = X_C) kuzating.',
        controls: [
          { key: 'R', label: 'Aktiv qarshilik R', unit: 'Ω', min: 10, max: 100, step: 5, value: 30 },
          { key: 'XL', label: 'Induktiv X_L', unit: 'Ω', min: 10, max: 120, step: 5, value: 70 },
          { key: 'XC', label: 'Sig‘im X_C', unit: 'Ω', min: 10, max: 120, step: 5, value: 30 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Maishiy elektr tarmog‘idagi effektiv kuchlanish 220 V bo‘lsa, kuchlanishning amplituda (maksimal) qiymati taxminan qancha?', options: ['311 V (220·√2)', '220 V', '155 V', '440 V'], answer: 0, explain: 'U_m = U_eff · √2 ≈ 220 · 1.414 ≈ 311 V.' },
      { q: 'Ketma-ket ulangan RLC zanjirida R = 30 Ω, X_L = 70 Ω, X_C = 30 Ω bo‘lsa, to‘la qarshilik Z qancha?', options: ['50 Ω', '130 Ω', '70 Ω', '40 Ω'], answer: 0, explain: 'Z = √(30² + (70−30)²) = √(900 + 1600) = 50 Ω.' },
      { q: 'Transformator birlamchi chulg‘amida 200 o‘ram va kuchlanish 220 V; ikkilamchi chulg‘amda 1000 o‘ram bo‘lsa, chiqish kuchlanishi qancha?', options: ['1100 V', '44 V', '220 V', '2000 V'], answer: 0, explain: 'U₂ = U₁·(N₂/N₁) = 220 · (1000/200) = 1100 V.' },
      { q: 'Nima uchun transformator o‘zgarmas tokda (DC) ishlay olmaydi?', options: ['O‘zgarmas tok o‘zgaruvchan magnit oqimi (ΔΦ/Δt ≠ 0) hosil qilmaydi', 'Qarshiligi juda katta', 'O‘ramlar qizib ketadi', 'Elektronlar to‘xtaydi'], answer: 0, explain: 'Elektromagnit induksiya faqat magnit oqimi o‘zgargandagina (AC da) ishlaydi.' },
      { q: 'Ketma-ket RLC zanjirida kuchlanishlar rezonansi qaysi shartda yuz beradi?', options: ['X_L = X_C', 'R = 0', 'X_L = 0', 'X_C = R'], answer: 0, explain: 'X_L = X_C bo‘lganda reaktiv qarshiliklar o‘zaro kompensatsiyalanadi va Z = R minimal bo‘ladi.' },
      { q: 'O‘zgaruvchan tokda g‘altakning induktiv qarshiligi X_L = ωL chastota 2 marta oshganda qanday o‘zgaradi?', options: ['2 marta ortadi', '2 marta kamayadi', '4 marta ortadi', 'O‘zgarmaydi'], answer: 0, explain: 'X_L = 2πνL chastotaga to‘g‘ri proporsional.' },
      { q: 'O‘zgaruvchan tok zanjirida aktiv quvvat P qaysi formula bilan hisoblanadi?', options: ['P = U · I · cosφ', 'P = U · I · sinφ', 'P = U / I', 'P = ½·L·I²'], answer: 0, explain: 'cosφ = R/Z quvvat koeffitsiyenti deyiladi; faqat aktiv qarshilikda o‘rtacha quvvat ajraladi.' },
      { q: 'Ideal pasaytiruvchi transformatorda kuchlanish 5 marta kamaysa, ikkilamchi chulg‘amdagi tok kuchi qanday o‘zgaradi?', options: ['5 marta ortadi (P = U·I saqlanadi)', '5 marta kamayadi', 'O‘zgarmaydi', '25 marta kamayadi'], answer: 0, explain: 'U₁I₁ = U₂I₂ => kuchlanish pasaysa tok kuchi proporsional ortadi.' },
    ],
    problems: [
      {
        variants: [[6, 12, 4], [8, 20, 14], [12, 15, 10], [3, 10, 6]],
        build: (i) => {
          const [R, XL, XC] = [[6, 12, 4], [8, 20, 14], [12, 15, 10], [3, 10, 6]][i];
          const Z = Math.hypot(R, XL - XC);
          return {
            q: `Ketma-ket ulangan zanjirda R = ${R} Ω, X_L = ${XL} Ω va X_C = ${XC} Ω. Zanjirning to‘la qarshiligi Z (Ω) qancha?`,
            correct: Z,
            unit: 'Ω',
            explain: `Z = √(R² + (X_L − X_C)²) = √(${R}² + (${XL}−${XC})²) = ${Z} Ω.`,
          };
        },
      },
      {
        variants: [[220, 100, 500], [110, 50, 200], [220, 400, 100], [380, 200, 100]],
        build: (i) => {
          const [U1, N1, N2] = [[220, 100, 500], [110, 50, 200], [220, 400, 100], [380, 200, 100]][i];
          const U2 = (U1 * N2) / N1;
          return {
            q: `Ideal transformator birlamchi chulg‘amida N₁ = ${N1} o‘ram va U₁ = ${U1} V. Ikkilamchi chulg‘amda N₂ = ${N2} o‘ram bo‘lsa, U₂ (V) qancha?`,
            correct: U2,
            unit: 'V',
            explain: `U₂ = U₁·(N₂/N₁) = ${U1} · (${N2}/${N1}) = ${U2} V.`,
          };
        },
      },
    ],
  },
  {
    id: '5E-3',
    code: '5E.3',
    sectionId: 'sec-5',
    subsectionId: '5E',
    subsectionTitle: "E. Elektromagnit Tebranishlar va To'lqinlar",
    title: "Elektromagnit to'lqinlar",
    subtitle: "Maksvell tenglamalari (nazariy asos), Gers tajribasi, elektromagnit to'lqinlar shkalasi, radioaloqa tamoyillari.",
    theory: {
      overview:
        'Jeyms Klerk Maksvell (1864) elektr va magnit hodisalarini 4 ta yagona tenglamada birlashtirib, o‘zgaruvchan magnit maydoni uyurmali elektr maydonini, o‘zgaruvchan elektr maydoni (siljish toki) esa uyurmali magnit maydonini uyg‘otishini isbotladi. Natijada fazoda bir-birini hosil qilib tarqaluvchi elektromagnit to‘lqinlar (EM) mavjudligini bashorat qildi; ularning vakuumdagi tezligi yorug‘lik tezligi c = 1/√(ε₀μ₀) ≈ 3·10⁸ m/s ga teng!\n\n1887–1888-yillarda Genrix Gers vibrator (ochiq tebranish konturi) yordamida EM to‘lqinlarni tajribada hosil qilib, ularning qaytishi, sinishi, interferensiyasi va ko‘ndalang to‘lqin ekanini (E⃗ ⊥ B⃗ ⊥ v⃗) isbotladi. Elektromagnit to‘lqinlar shkalasi chastotasi ortishi (λ kamayishi) bo‘yicha quyidagicha joylashgan: radioto‘lqinlar → mikroto‘lqinlar → infraqizil (IQ) → ko‘rinadigan yorug‘lik (380–780 nm) → ultrabinafsha (UB) → rentgen nurlari → gamma-nurlar. Radioaloqada yuqori chastotali tashuvchi to‘lqinga past chastotali tovush/ma’lumot signali modulyatsiya (AM, FM) qilinib uzatiladi va qabul qilgichda detektorlanadi.',
      keyLaws: [
        { title: 'Maksvell gipotezalari', text: 'O‘zgaruvchan magnit maydoni elektr maydonni, o‘zgaruvchan elektr maydoni (siljish toki) magnit maydonni hosil qiladi; EM to‘lqinlarni tezlanish bilan harakatlanayotgan zaryadlar nurlatadi.' },
        { title: 'Ko‘ndalanglik va Vakuum tezligi', text: 'E⃗ ⊥ B⃗ ⊥ c⃗; vakuumda tezlik c = λ·ν = 3·10⁸ m/s, muhitda v = c / √(εμ).' },
        { title: 'Radioaloqa tamoyili', text: 'Modulyatsiya (signalni tashuvchi to‘lqinga yuklash) → Nurlatish → Qabul qilish (rezonans) → Detektorlash.' },
      ],
      formulas: [
        { latex: 'c = 1 / √(ε₀ · μ₀) = λ · ν ≈ 3 · 10⁸ m/s', name: 'EM to‘lqin tezligi va to‘lqin uzunligi', symbols: 'λ — to‘lqin uzunligi (m), ν — chastota (Hz)' },
        { latex: 'I_nurl ∝ a² ∝ ω⁴', name: 'Dipol nurlanish intensivligi', symbols: 'Chastota ortishi bilan nurlanish keskin kuchayadi' },
        { latex: 'd_max = (c · τ) / 2', name: 'Radiolokatsiya (radar) masofasi', symbols: 'τ — impuls borib qaytish vaqti' },
      ],
      constants: [
        { name: 'Vakuumdagi EM to‘lqin tezligi', symbol: 'c', value: '2.998·10⁸', unit: 'm/s' },
      ],
      applications: [
        'Wi-Fi (2.4 / 5 GHz), 5G mobil aloqa, GPS va sun’iy yo‘ldosh televideniyesi.',
        'Radiolokatsiya (aviatsiya va ob-havo radarlari), mikroto‘lqinli pechlar va optik tolali aloqa.',
      ],
      calculator: {
        title: 'Elektromagnit to‘lqin uzunligi va radar masofasi kalkulyatori',
        formulaDisplay: 'λ = c / ν,  L = c·τ / 2',
        inputs: [
          { key: 'nuMHz', label: 'Chastota ν (MHz)', symbol: 'ν', unit: 'MHz', min: 1, max: 10000, step: 5, default: 100 },
          { key: 'tauUs', label: 'Radar impuls kechikishi τ', symbol: 'τ', unit: 'μs', min: 1, max: 1000, step: 5, default: 200 },
        ],
        compute: (v) => {
          const c = 3e8;
          const lam = c / (v.nuMHz * 1e6);
          const dist = (c * (v.tauUs * 1e-6)) / 2;
          return {
            value: lam.toFixed(2),
            unit: 'm',
            summary: `${v.nuMHz} MHz (FM/radio) chastotada to‘lqin uzunligi λ = ${lam.toFixed(2)} m. Radar aniqlagan masofa d = ${(dist / 1000).toFixed(2)} km.`,
          };
        },
      },
    },
    simulation: {
      title: 'Elektromagnit To‘lqinlar (E ⊥ B ⊥ v) va Spektr Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Optics_Understanding_Waves.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Ko‘ndalang to‘lqinning elektr E⃗ va magnit B⃗ tebranishlarini 3D fazoda kuzating hamda Atomix EM spektr va modulyatsiya simulyatoridan foydalaning.',
      alternateSims: [
        { label: 'To‘lqin va elektromagnit modellar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Understanding_Waves.html' },
        { label: 'Yorug‘lik to‘lqin xossasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Light_as_Rays_and_Waves.html' },
      ],
      parametric: {
        mode: 'em_wave',
        title: '3D Proyeksiya: Ko‘ndalang Elektromagnit To‘lqin (E⃗ va B⃗) Simulyatori',
        description: 'Chastota ν va amplitudani o‘zgartirib, o‘zaro tik E⃗ (vertikal) va B⃗ (gorizontal) vektorlarning sinfaz tarqalishini kuzating.',
        controls: [
          { key: 'freq', label: 'Nisbiy chastota ν', unit: 'GHz', min: 0.5, max: 5, step: 0.25, value: 2.0 },
          { key: 'amp', label: 'Maydon amplitudasi E₀', unit: 'V/m', min: 10, max: 50, step: 5, value: 35 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Elektromagnit to‘lqinlar qanday sharoitda nurlanadi?', options: ['Elektr zaryadlari tezlanish bilan (tebranib) harakatlanganda', 'Zaryadlar tinch turganda', 'Zaryadlar to‘g‘ri chiziqli tekis harakatlanganda', 'Faqat neytral jismlar harakatida'], answer: 0, explain: 'Tezlanishli harakatdagi zaryad o‘zgaruvchan E va B maydonlari (EM to‘lqin) nurlatadi.' },
      { q: 'Chastotasi 100 MHz (10⁸ Hz) bo‘lgan FM radioto‘lqinning vakuumdagi to‘lqin uzunligi qancha (c = 3·10⁸ m/s)?', options: ['3 m', '30 m', '0.3 m', '300 m'], answer: 0, explain: 'λ = c / ν = 3·10⁸ / 10⁸ = 3 m.' },
      { q: 'Elektromagnit to‘lqinda elektr E⃗, magnit B⃗ vektorlari va tarqalish tezligi v⃗ o‘zaro qanday yo‘nalgan?', options: ['Har uchalasi o‘zaro perpendikulyar (ko‘ndalang to‘lqin)', 'Uchalasi parallel', 'E va B parallel, v ularga tik', 'Ixtiyoriy burchakda'], answer: 0, explain: 'EM to‘lqin ko‘ndalang to‘lqin bo‘lib, E⃗ ⊥ B⃗ ⊥ v⃗.' },
      { q: 'Quyidagi nurlanishlardan qaysi biri eng katta chastota va eng kichik to‘lqin uzunligiga ega?', options: ['Gamma-nurlar (γ)', 'Rentgen nurlari', 'Ultrabinafsha nurlar', 'Radioto‘lqinlar'], answer: 0, explain: 'EM shkalada eng yuqori chastota (va foton energiyasi) gamma-nurlarga tegishli.' },
      { q: 'Radiolokator yuborgan signal nishondan aks etib 100 μs (10⁻⁴ s) dan keyin qaytib keldi. Nishongacha masofa qancha?', options: ['15 km', '30 km', '1.5 km', '300 km'], answer: 0, explain: 'd = c·τ/2 = 3·10⁸ · 10⁻⁴ / 2 = 15,000 m = 15 km.' },
      { q: 'Radioaloqada yuqori chastotali tashuvchi to‘lqin amplitudasini tovush signali bilan o‘zgartirish nima deyiladi?', options: ['Amplituda modulyatsiyasi (AM)', 'Detektorlash', 'Difraksiya', 'Polyarizatsiya'], answer: 0, explain: 'Modulyatsiya past chastotali signalni uzoqqa uchadigan yuqori chastotali tashuvchiga joylaydi.' },
      { q: 'Gers tajribasida EM to‘lqinlarni hosil qilish uchun qanday qurilmadan foydalanilgan?', options: ['Gers vibratori (ochiq tebranish konturi)', 'Lazer', 'Yadro reaktori', 'Volta ustuni'], answer: 0, explain: 'Genrix Gers uchqunli vibrator orqali ilk bor laboratoriya radioto‘lqinlarini hosil qilgan.' },
      { q: 'Modulyatsiyalangan yuqori chastotali signaldan past chastotali foydali tovush signalini ajratib olish jarayoni nima deyiladi?', options: ['Detektorlash (demodulyatsiya)', 'Modulyatsiya', 'Dispersiya', 'Ionizatsiya'], answer: 0, explain: 'Qabul qilgichdagi diodli detektor tashuvchi chastotani filtrlab, tovush signalini ajratadi.' },
    ],
    problems: [
      {
        variants: [[150], [60], [300], [15]],
        build: (i) => {
          const [mhz] = [[150], [60], [300], [15]][i];
          const lam = 300 / mhz;
          return {
            q: `Chastotasi ${mhz} MHz bo‘lgan radioto‘lqinning vakuumdagi to‘lqin uzunligini (m) toping (c = 3·10⁸ m/s).`,
            correct: lam,
            unit: 'm',
            explain: `λ = c / ν = 300·10⁶ / (${mhz}·10⁶) = ${lam} m.`,
          };
        },
      },
      {
        variants: [[40], [200], [60], [120]],
        build: (i) => {
          const [us] = [[40], [200], [60], [120]][i];
          const km = (3e8 * us * 1e-6) / 2 / 1000;
          return {
            q: `Radiolokator chiqargan impuls ${us} μs dan keyin samolyotdan aks etib qaytdi. Samolyotgacha bo‘lgan masofani (km) hisoblang.`,
            correct: km,
            unit: 'km',
            explain: `d = c·t/2 = 3·10⁸ · ${us}·10⁻⁶ / 2 = ${km * 1000} m = ${km} km.`,
          };
        },
      },
    ],
  },
];
