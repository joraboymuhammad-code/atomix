// 6-bo'lim: Optika (6 mavzu: 6A-1, 6A-2, 6A-3, 6B-1, 6B-2, 6C-1)

export const SEC6_TOPICS = [
  {
    id: '6A-1',
    code: '6A.1',
    sectionId: 'sec-6',
    subsectionId: '6A',
    subsectionTitle: 'A. Geometrik Optika',
    title: "Yorug'lik tarqalishi, soya va ko'zgular",
    subtitle: "Yorug'lik tezligi, soya-yarimsoya, yorug'likning qaytish qonuni, yassi va sferik ko'zgular",
    theory: {
      overview:
        "Geometrik optika yorug'lik to'lqin uzunligi to'siq o'lchamlaridan juda kichik bo'lgan holatda ($\lambda \\ll d$) yorug'likning nur chiziqlari bo'ylab tarqalishini o'rganadi. Bir jinsli shaffof muhitda yorug'lik to'g'ri chiziq bo'ylab tarqaladi; buning bevosita natijasi — keskin soya (nuqtaviy manba) va yarimsoya (keng manba) hosil bo'lishidir. Ikki muhit chegarasida yorug'lik qaytish qonuniga bo'ysunadi: tushuvchi nur, qaytgan nur va tushish nuqtasiga o'tkazilgan normal bir tekislikda yotadi, tushish burchagi qaytish burchagiga teng. Yassi ko'zgu jismga teng o'lchamli mavhum simmetrik tasvir beradi, botiq va qavariq sferik ko'zgular esa fokus masofasi $F = R/2$ bilan xarakterlanib, proyektorlar, teleskop ko'zgulari va avtomobil faralarida qo'llaniladi.",
      keyLaws: [
        {
          title: "Yorug'likning to'g'ri chiziqli tarqalish qonuni",
          text: "Optik jihatdan bir jinsli va izotrop muhitda yorug'lik nurlari to'g'ri chiziq bo'ylab tarqaladi (Quyosh va Oy tutilishlari shunga asoslanadi).",
        },
        {
          title: "Yorug'likning qaytish qonuni",
          text: "Tushish burchagi $\\alpha$ qaytish burchagi $\\beta$ ga teng ($\\alpha = \\beta$) va nurlar normal bilan bir tekislikda yotadi; nurlar qaytuvchanlik xossasiga ega.",
        },
        {
          title: "Sferik ko'zgu formulasi",
          text: "Paraksial nurlar uchun jism masofasi $d$, tasvir masofasi $f$ va fokus masofasi $F = R/2$ orasidagi bog'lanish: $1/F = 1/d + 1/f$.",
        },
      ],
      formulas: [
        { latex: '\\alpha = \\beta', name: 'Yorug‘lik qaytish qonuni', symbols: '\\alpha — tushish burchagi, \\beta — qaytish burchagi' },
        { latex: 'F = \\frac{R}{2}', name: 'Sferik ko‘zgu fokus masofasi', symbols: 'R — sfera egrilik radiusi' },
        { latex: '\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f}', name: 'Sferik ko‘zgu tenglamasi', symbols: 'd — jism masofasi, f — tasvir masofasi' },
        { latex: '\\Gamma = \\left|\\frac{f}{d}\\right| = \\frac{H}{h}', name: 'Chiziqli kattalashtirish', symbols: 'H — tasvir balandligi, h — jism balandligi' },
      ],
      constants: [
        { name: "Vakuumdagi yorug'lik tezligi", symbol: 'c', value: '2.99792 × 10⁸', unit: 'm/s' },
        { name: "Yerdan Quyoshgacha o'rtacha masofa", symbol: '1 a.b.', value: '1.496 × 10¹¹', unit: 'm' },
        { name: "Yorug'likning Quyoshdan Yerga kelish vaqti", symbol: 't', value: '499', unit: 's' },
      ],
      applications: [
        "Yassi va burchakli ko'zgular periskoplarda, lazer rezonatorlarida va geodezik prizmalarda ishlatiladi.",
        "Botiq parabolik ko'zgular astronomik reflektor teleskoplarda va quyosh konsentratorlarida nurlarni fokuslaydi.",
        "Qavariq sferik ko'zgular avtomobil yon oynalari va chorraha xavfsizlik oynalarida keng ko'rish burchagini beradi.",
      ],
      calculator: {
        title: "Sferik ko'zgu tasvir hisoblagichi",
        formulaDisplay: 'f = (d · F) / (d - F),   F = R / 2',
        inputs: [
          { key: 'R', label: 'Egrilik radiusi (+ botiq, − qavariq)', symbol: 'R', unit: 'sm', min: -200, max: 200, step: 2, default: 40 },
          { key: 'd', label: 'Jismdan ko‘zgugacha masofa', symbol: 'd', unit: 'sm', min: 5, max: 300, step: 1, default: 30 },
        ],
        compute: (v) => {
          const F = v.R / 2;
          if (Math.abs(F) < 0.1) return { value: 'Yassi ko‘zgu', unit: '', summary: 'R = 0 holat yassi ko‘zguga mos: f = -d, kattalashtirish 1×.' };
          const denom = v.d - F;
          if (Math.abs(denom) < 0.05) {
            return { value: '∞ (cheksiz)', unit: 'sm', summary: `F = ${F.toFixed(1)} sm; jism fokusda joylashgan, qaytgan nurlar parallel chiqadi.` };
          }
          const f = (v.d * F) / denom;
          const mag = Math.abs(f / v.d);
          const kind = f > 0 ? 'Haqiqiy (teskari)' : "Mavhum (to'g'ri)";
          return {
            value: `${f.toFixed(2)}`,
            unit: 'sm',
            summary: `F = ${F.toFixed(1)} sm | ${kind} tasvir | Kattalashtirish Γ = ${mag.toFixed(2)}×`,
          };
        },
      },
    },
    simulation: {
      title: "Yorug'likning qaytishi va sferik ko'zgular 3D laboratoriyasi",
      openSourceUrl: 'sims/effectuall/Optics_Reflection_of_Light.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D yorug'lik manbai, normal chizig'i, yassi va sferik ko'zgular bilan burchak hamda nur yo'nalishini real vaqtda tekshiring.",
      alternateSims: [
        { label: "Botiq sferik ko'zgu (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Converging_Mirror.html' },
        { label: "Qavariq sferik ko'zgu (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Diverging_Mirror.html' },
        { label: "Nur va to'lqin optikasi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Light_as_Rays_and_Waves.html' },
      ],
      parametric: {
        mode: 'ray_reflection',
        title: "Nur qaytishi va botiq ko'zgu parametrik stendi",
        description: "Tushish burchagini va botiq ko'zgudan jism masofasini o'zgartirib, tasvirning haqiqiy yoki mavhum hosil bo'lishini kuzating.",
        controls: [
          { key: 'angle', label: 'Tushish burchagi', unit: '°', min: 5, max: 80, step: 1, value: 38 },
          { key: 'focal', label: 'Ko‘zgu fokusi F', unit: 'sm', min: 15, max: 80, step: 5, value: 40 },
          { key: 'objDist', label: 'Jism masofasi d', unit: 'sm', min: 10, max: 140, step: 2, value: 90 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Nuqtaviy yorug'lik manbai va shaffof bo'lmagan to'siq yordamida ekranda nima hosil bo'ladi?",
        options: ["Faqat keskin soya", "Faqat yarimsoya", "Interferensiya yo'llari", "Kamalak spektri"],
        answer: 0,
        explain: "Nuqtaviy manbadan chiqqan nurlar to'siq chetidan to'g'ri chiziqli keskin soya chegarasini hosil qiladi; yarimsoya keng manba uchun xos.",
      },
      {
        q: "Agar nur ko'zguga 32° tushish burchagi bilan tushsa, tushuvchi va qaytgan nurlar orasidagi burchak nechaga teng?",
        options: ["32°", "58°", "64°", "116°"],
        answer: 2,
        explain: "Qaytish burchagi β = α = 32°. Nurlar orasidagi burchak α + β = 32° + 32° = 64°.",
      },
      {
        q: "Yassi ko'zgudagi tasvir qanday xususiyatlarga ega?",
        options: ["Haqiqiy, teskari, kattalashgan", "Mavhum, to'g'ri, jismga teng o'lchamli", "Haqiqiy, to'g'ri, kichiklashgan", "Mavhum, teskari, kichiklashgan"],
        answer: 1,
        explain: "Yassi ko'zgu jismga simmetrik, teng o'lchamli, to'g'ri va mavhum tasvir hosil qiladi.",
      },
      {
        q: "Egrilik radiusi R = 50 sm bo'lgan botiq ko'zguning bosh fokus masofasi nechaga teng?",
        options: ["100 sm", "50 sm", "25 sm", "12.5 sm"],
        answer: 2,
        explain: "Paraksial nurlar uchun F = R / 2 = 50 / 2 = 25 sm.",
      },
      {
        q: "Botiq ko'zguga jism d = F nuqtasidan ko'zguga yaqinroq (d < F) joylashtirilsa, qanday tasvir olinadi?",
        options: ["Haqiqiy va kichiklashgan", "Haqiqiy va teskari", "Mavhum, to'g'ri va kattalashgan", "Tasvir hosil bo'lmaydi"],
        answer: 2,
        explain: "d < F da ko'zgudan qaytgan nurlar sochiladi va orqa tomonda kesishib, kattalashgan mavhum to'g'ri tasvir beradi.",
      },
      {
        q: "Ko'zgu tekisligini tushuvchi nur o'zgarmagan holda 10° ga bursak, qaytgan nur necha gradusga buriladi?",
        options: ["5°", "10°", "20°", "40°"],
        answer: 2,
        explain: "Normal 10° burilganda tushish burchagi ham, qaytish burchagi ham 10° o'zgaradi, demak qaytgan nur 2·10° = 20° ga buriladi.",
      },
      {
        q: "Qavariq ko'zgu qanday tasvirlar bera oladi (haqiqiy jism uchun)?",
        options: ["Faqat haqiqiy", "Faqat mavhum, to'g'ri va kichiklashgan", "Mavhum va kattalashgan", "Haqiqiy va teng o'lchamli"],
        answer: 1,
        explain: "Qavariq ko'zguning F < 0 bo'lgani uchun f = dF/(d-F) doimo manfiy va |f| < d, demak tasvir doimo mavhum, to'g'ri va kichiklashgan.",
      },
      {
        q: "Yorug'likning vakuumdagi tezligi c taqriban qanchaga teng?",
        options: ["3·10⁶ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s", "340 m/s"],
        answer: 1,
        explain: "Vakuumda yorug'lik tezligi c = 299 792 458 m/s ≈ 3·10⁸ m/s fundamental doimiydir.",
      },
    ],
    problems: [
      {
        variants: [[20, 60], [25, 75], [30, 90], [15, 60]],
        build(i) {
          const [F, d] = this.variants[i];
          const f = (d * F) / (d - F);
          return {
            q: `Fokus masofasi F = ${F} sm bo'lgan botiq ko'zgudan d = ${d} sm masofada jism turibdi. Tasvir ko'zgudan qancha masofada (sm) hosil bo'ladi?`,
            correct: Number(f.toFixed(1)),
            unit: 'sm',
            explain: `1/f = 1/F - 1/d = 1/${F} - 1/${d} => f = (${d}·${F})/(${d}-${F}) = ${f.toFixed(1)} sm.`,
          };
        },
      },
      {
        variants: [[30, 90, 12], [20, 60, 10], [25, 100, 15], [40, 120, 8]],
        build(i) {
          const [F, d, h] = this.variants[i];
          const f = (d * F) / (d - F);
          const H = h * (f / d);
          return {
            q: `Balandligi h = ${h} sm bo'lgan jism F = ${F} sm botiq ko'zgudan d = ${d} sm masofada turibdi. Tasvir balandligi H (sm) qancha?`,
            correct: Number(H.toFixed(1)),
            unit: 'sm',
            explain: `f = ${f.toFixed(1)} sm. Chiziqli kattalashtirish Γ = f/d = ${(f / d).toFixed(2)}, shunda H = h·Γ = ${H.toFixed(1)} sm.`,
          };
        },
      },
      {
        variants: [[18], [24], [35], [42]],
        build(i) {
          const [alpha] = this.variants[i];
          const between = 2 * alpha;
          return {
            q: `Yorug'lik nuri yassi ko'zguga ${alpha}° tushish burchagi ostida tushmoqda. Tushuvchi va qaytgan nurlar orasidagi burchakni (gradusda) toping.`,
            correct: between,
            unit: '°',
            explain: `Qaytish burchagi ham ${alpha}°. Nurlar orasidagi burchak 2·${alpha}° = ${between}°.`,
          };
        },
      },
    ],
  },
  {
    id: '6A-2',
    code: '6A.2',
    sectionId: 'sec-6',
    subsectionId: '6A',
    subsectionTitle: 'A. Geometrik Optika',
    title: "Yorug'likning sinishi va to'la ichki qaytish",
    subtitle: "Snell qonuni, sinish ko'rsatkichi, to'la ichki qaytish, optik tolalar",
    theory: {
      overview:
        "Yorug'lik bir shaffof muhitdan ikkinchi shaffof muhitga o'tishda uning faza tezligi o'zgaradi ($v = c/n$), natijada ikki muhit chegarasida tarqalish yo'nalishi sinadi. Mutlaq sinish ko'rsatkichi $n = c/v$ muhitning optik zichligini ifodalaydi. Snell qonuniga ko'ra $n_1 \\sin\\alpha = n_2 \\sin\\gamma$. Agar yorug'lik optik zichroq muhitdan ($n_1 > n_2$) siyrakroq muhitga ma'lum chegara burchagidan $\\alpha_0 = \\arcsin(n_2/n_1)$ katta burchak ostida tushsa, sinish yo'qolib, barcha energiya qaytadi — bu hodisa to'la ichki qaytish deb ataladi va yuqori tezlikli optik tolali aloqa tizimlarining negizini tashkil etadi.",
      keyLaws: [
        {
          title: "Snell sinish qonuni",
          text: "Tushish burchagi sinusining sinish burchagi sinusiga nisbati ikki muhit uchun o'zgarmas kattalik bo'lib, nisbiy sinish ko'rsatkichiga teng: $n_1 \\sin\\alpha = n_2 \\sin\\gamma$.",
        },
        {
          title: "Mutlaq sinish ko'rsatkichining fizik ma'nosi",
          text: "Muhitning mutlaq sinish ko'rsatkichi vakuumdagi yorug'lik tezligining shu muhitdagi yorug'lik tezligiga nisbatiga teng: $n = c/v$.",
        },
        {
          title: "To'la ichki qaytish sharti",
          text: "Yorug'lik $n_1 > n_2$ muhit chegarasiga $\\alpha \\ge \\alpha_0 = \\arcsin(n_2/n_1)$ burchak ostida tushsa, nur ikkinchi muhitga o'tmay 100% qaytadi.",
        },
      ],
      formulas: [
        { latex: 'n = \\frac{c}{v} = \\sqrt{\\varepsilon \\mu}', name: "Mutlaq sinish ko'rsatkichi", symbols: 'c — vakuum tezligi, v — muhitdagi tezlik' },
        { latex: 'n_1 \\sin\\alpha = n_2 \\sin\\gamma', name: 'Snellius (sinish) qonuni', symbols: '\\alpha — tushish burchagi, \\gamma — sinish burchagi' },
        { latex: '\\sin\\alpha_0 = \\frac{n_2}{n_1}', name: "To'la ichki qaytish chegara burchagi", symbols: 'n_1 > n_2 shartida' },
        { latex: 'h_{\\text{ko‘r}} = \\frac{h}{n}', name: "Ko'rinuvchi (taxminiy) chuqurlik", symbols: 'h — haqiqiy chuqurlik (normal ko‘rishda)' },
      ],
      constants: [
        { name: "Havo sinish ko'rsatkichi (normal)", symbol: 'n_havo', value: '1.00029', unit: '' },
        { name: "Suv sinish ko'rsatkichi (20°C)", symbol: 'n_suv', value: '1.333', unit: '' },
        { name: "Kron shisha sinish ko'rsatkichi", symbol: 'n_shisha', value: '1.52', unit: '' },
        { name: "Olmos sinish ko'rsatkichi", symbol: 'n_olmos', value: '2.417', unit: '' },
      ],
      applications: [
        "Kvars optik tolalar to'la ichki qaytish tufayli signallarni yuzlab kilometrga deyarli yo'qotishsiz uzatadi.",
        "Binokl va periskoplardagi 45° qaytuvchi prizmalar ko'zgularga nisbatan energiyani yaxshiroq saqlaydi.",
        "Refraktometrlar sinish ko'rsatkichini o'lchab, eritmalar konsentratsiyasi va moy sifatini aniqlaydi.",
      ],
      calculator: {
        title: "Snell sinishi va to'la ichki qaytish kalkulyatori",
        formulaDisplay: 'n₁ · sin(α) = n₂ · sin(γ),   sin(α₀) = n₂ / n₁',
        inputs: [
          { key: 'n1', label: '1-muhit sinish ko‘rsatkichi', symbol: 'n₁', unit: '', min: 1.0, max: 2.6, step: 0.01, default: 1.50 },
          { key: 'n2', label: '2-muhit sinish ko‘rsatkichi', symbol: 'n₂', unit: '', min: 1.0, max: 2.6, step: 0.01, default: 1.00 },
          { key: 'alpha', label: 'Tushish burchagi', symbol: 'α', unit: '°', min: 0, max: 89, step: 1, default: 35 },
        ],
        compute: (v) => {
          const rad = (v.alpha * Math.PI) / 180;
          const sinG = (v.n1 / v.n2) * Math.sin(rad);
          const crit = v.n1 > v.n2 ? (Math.asin(v.n2 / v.n1) * 180) / Math.PI : null;
          if (sinG > 1) {
            return {
              value: "To'la ichki qaytish",
              unit: '',
              summary: `Chegara burchagi α₀ = ${crit.toFixed(1)}°; α = ${v.alpha}° > α₀ bo'lgani uchun nur to'liq qaytadi!`,
            };
          }
          const gamma = (Math.asin(sinG) * 180) / Math.PI;
          const v1 = 299.79 / v.n1;
          const v2 = 299.79 / v.n2;
          return {
            value: `${gamma.toFixed(2)}`,
            unit: '°',
            summary: `Sinish burchagi γ = ${gamma.toFixed(2)}° | v₁ = ${v1.toFixed(1)} Mm/s, v₂ = ${v2.toFixed(1)} Mm/s${crit ? ` | α₀ = ${crit.toFixed(1)}°` : ''}`,
          };
        },
      },
    },
    simulation: {
      title: "Yorug'lik sinishi va to'la ichki qaytish 3D simulyatori",
      openSourceUrl: 'sims/effectuall/Optics_Refraction_of_Light.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D interfeysda muhitlar sinish ko'rsatkichlarini va tushish burchagini o'zgartirib, sinish hamda to'la ichki qaytishni o'rganing.",
      alternateSims: [
        { label: "To'la ichki qaytish 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Total_Internal_Reflection.html' },
        { label: "Ko'rinuvchi chuqurlik (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Apparent_depth.html' },
        { label: "Interaktiv sinish o'yini (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__InteractiveRefrationOfLight.html' },
      ],
      parametric: {
        mode: 'ray_refraction',
        title: "Snell qonuni va to'la ichki qaytish parametrik modeli",
        description: "Muhitlarning sinish ko'rsatkichlari n₁ va n₂ hamda tushish burchagini o'zgartiring.",
        controls: [
          { key: 'n1', label: '1-muhit n₁', unit: '', min: 1.0, max: 2.5, step: 0.05, value: 1.5 },
          { key: 'n2', label: '2-muhit n₂', unit: '', min: 1.0, max: 2.5, step: 0.05, value: 1.0 },
          { key: 'angle', label: 'Tushish burchagi α', unit: '°', min: 2, max: 85, step: 1, value: 32 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Yorug'lik havodan (n=1) shishaga (n=1.5) o'tganda uning tezligi va to'lqin uzunligi qanday o'zgaradi?",
        options: ["Tezlik va λ 1.5 marta ortadi", "Tezlik va λ 1.5 marta kamayadi", "Tezlik kamayadi, chastota kamayadi", "O'zgarmaydi"],
        answer: 1,
        explain: "Muhitda v = c/n va λ = λ₀/n bo'ladi, chastota ν esa manbaga bog'liq bo'lgani uchun o'zgarmaydi.",
      },
      {
        q: "To'la ichki qaytish hodisasi qachon kuzatilishi mumkin?",
        options: ["Har qanday muhitda", "Faqat n₁ < n₂ bo'lganda", "Faqat nur optik zich muhitdan siyrak muhitga α ≥ α₀ burchakda tushganda", "Faqat normal tushishda (α = 0°)"],
        answer: 2,
        explain: "sin α₀ = n₂/n₁ ≤ 1 sharti faqat n₁ > n₂ da bajariladi; shuningdek α ≥ α₀ bo'lishi kerak.",
      },
      {
        q: "Sinish ko'rsatkichi n = 2 bo'lgan olmos/shishaning havo (n ≈ 1) bilan chegarasidagi to'la ichki qaytish burchagi α₀ qancha?",
        options: ["15°", "30°", "45°", "60°"],
        answer: 1,
        explain: "sin α₀ = 1 / 2 = 0.5 => α₀ = 30°.",
      },
      {
        q: "Suv tubidagi tangaga yuqoridan tik qaraganda (n = 4/3), tanga suv yuzasidan qanday chuqurlikda ko'rinadi?",
        options: ["Haqiqiy chuqurlikdan 4/3 marta chuqur", "Haqiqiy chuqurlikdan 3/4 marta sayoz", "Haqiqiy chuqurlik bilan bir xil", "Yarim chuqurlikda"],
        answer: 1,
        explain: "h_ko'r = h / n = h / (4/3) = (3/4)·h, ya'ni suv sayozroq ko'rinadi.",
      },
      {
        q: "Optik tolada signalning yadro ichida saqlanishi qaysi qonunga tayanadi?",
        options: ["Dispersiya", "To'la ichki qaytish", "Difraksiya", "Polyarizatsiya"],
        answer: 1,
        explain: "Tolaning yadrosi qobiqdan katta sinish ko'rsatkichiga (n_yadro > n_qobiq) ega, shuning uchun nur to'la ichki qaytadi.",
      },
      {
        q: "Yorug'lik sinish ko'rsatkichi n = 1.5 bo'lgan muhitda qanday tezlik bilan tarqaladi?",
        options: ["3·10⁸ m/s", "2.25·10⁸ m/s", "2·10⁸ m/s", "1.5·10⁸ m/s"],
        answer: 2,
        explain: "v = c / n = 3·10⁸ / 1.5 = 2·10⁸ m/s.",
      },
      {
        q: "Nur ikki muhit chegarasiga normal bo'ylab (α = 0°) tushsa, sinish burchagi nechaga teng bo'ladi?",
        options: ["0°", "45°", "90°", "n₁/n₂ ga bog'liq"],
        answer: 0,
        explain: "n₁·sin(0°) = n₂·sin(γ) => sin(γ) = 0 => γ = 0°; nur yo'nalishini o'zgartirmaydi.",
      },
      {
        q: "Olmosning yuqori darajada yaltirashi uning qaysi optik xossasi bilan izohlanadi?",
        options: ["Katta sinish ko'rsatkichi (n ≈ 2.42) va kichik chegara burchagi (24.4°)", "Kam yutish koeffitsienti", "Magnit o'tkazuvchanligi", "Faqat oq rangni qaytarishi"],
        answer: 0,
        explain: "n = 2.42 juda kichik α₀ ≈ 24.4° beradi, bu olmos ichida ko'p marta to'la ichki qaytish yuzaga keltiradi.",
      },
    ],
    problems: [
      {
        variants: [[1.5], [1.25], [2.0], [1.6]],
        build(i) {
          const [n] = this.variants[i];
          const v = 300 / n;
          return {
            q: `Mutlaq sinish ko'rsatkichi n = ${n} bo'lgan shaffof moddada yorug'lik tezligi necha Mm/s (10⁶ m/s) ga teng? (c = 300 Mm/s)`,
            correct: Number(v.toFixed(1)),
            unit: 'Mm/s',
            explain: `v = c / n = 300 / ${n} = ${v.toFixed(1)} Mm/s.`,
          };
        },
      },
      {
        variants: [[1.414], [2.0], [1.155], [1.333]],
        build(i) {
          const [n] = this.variants[i];
          const deg = (Math.asin(1 / n) * 180) / Math.PI;
          return {
            q: `Sinish ko'rsatkichi n = ${n} bo'lgan muhitdan havoga (n₂ = 1) chiqishda to'la ichki qaytish chegara burchagi necha gradus?`,
            correct: Number(deg.toFixed(1)),
            unit: '°',
            explain: `sin α₀ = 1 / ${n} = ${(1 / n).toFixed(3)} => α₀ = ${deg.toFixed(1)}°.`,
          };
        },
      },
      {
        variants: [[1.33, 60], [1.5, 45], [1.6, 48], [1.33, 40]],
        build(i) {
          const [n, h] = this.variants[i];
          const hk = h / n;
          return {
            q: `Chuqurligi h = ${h} sm bo'lgan va sinish ko'rsatkichi n = ${n} suyuqlik bilan to'ldirilgan idish tubi tepadan tik qaraganda necha sm chuqurda ko'rinadi?`,
            correct: Number(hk.toFixed(1)),
            unit: 'sm',
            explain: `h_ko'r = h / n = ${h} / ${n} = ${hk.toFixed(1)} sm.`,
          };
        },
      },
    ],
  },
  {
    id: '6A-3',
    code: '6A.3',
    sectionId: 'sec-6',
    subsectionId: '6A',
    subsectionTitle: 'A. Geometrik Optika',
    title: "Linzalar va optik asboblar",
    subtitle: "Yig'uvchi va sochuvchi linzalar, linza formulasi, lupa, mikroskop, teleskop, ko'z",
    theory: {
      overview:
        "Yupqa linzalar ikki sferik sirt bilan chegaralangan shaffof jismlar bo'lib, yorug'lik nurlarini sindirib tasvir hosil qiladi. Yig'uvchi linza ($D > 0$) parallel nurlarni fokusda to'playdi, sochuvchi linza ($D < 0$) esa ularni mavhum fokusdan chiqayotgandek sochadi. Yupqa linza formulasi $D = 1/F = 1/d + 1/f$ va linzachi formulasi $D = (n - 1)(1/R_1 + 1/R_2)$ barcha optik asboblar hisobining asosi hisoblanadi. Lupa, mikroskop, teleskop, fotoapparat va inson ko'zi turlicha fokus va kattalashtirish kombinatsiyalariga tayanadi; ko'zning yaqindan ko'rish (miopiya) nuqsoni sochuvchi, uzoqdan ko'rish (gipermetropiya) esa yig'uvchi linza bilan tuzatiladi.",
      keyLaws: [
        {
          title: "Yupqa linza formulasi va optik kuch",
          text: "Linzaning optik kuchi $D = 1/F$ (birligi dioptriya, dptr = m⁻¹) bo'lib, ishoralar qoidasiga rioya qilgan holda $1/F = 1/d + 1/f$ bajariladi.",
        },
        {
          title: "Linzalar tizimining optik kuchi",
          text: "Zich joylashgan ikki yupqa linza tizimining umumiy optik kuchi alohida linzalar optik kuchlarining algebraik yig'indisiga teng: $D = D_1 + D_2$.",
        },
        {
          title: "Optik asboblarning burchak kattalashtirishi",
          text: "Lupa: $\\Gamma = d_0/F$ ($d_0 = 25$ sm); mikroskop: $\\Gamma = (\\Delta \\cdot d_0)/(F_1 F_2)$; teleskop: $\\Gamma = F_{\\text{ob}}/F_{\\text{ok}}$.",
        },
      ],
      formulas: [
        { latex: '\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f} = D', name: 'Yupqa linza formulasi', symbols: 'D — optik kuch (dptr), F — fokus masofasi (m)' },
        { latex: 'D = \\left(\\frac{n_{\\text{linza}}}{n_{\\text{muhit}}} - 1\\right)\\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)', name: 'Linzachi formulasi', symbols: 'R_1, R_2 — sirt egrilik radiuslari' },
        { latex: '\\Gamma_{\\text{mik}} = \\frac{\\Delta \\cdot d_0}{F_{\\text{ob}} F_{\\text{ok}}}, \\quad \\Gamma_{\\text{tel}} = \\frac{F_{\\text{ob}}}{F_{\\text{ok}}}', name: 'Mikroskop va teleskop kattalashtirishi', symbols: '\\Delta — tubus uzunligi, d_0 = 0.25\\text{ m}' },
        { latex: '\\Gamma = \\frac{f}{d}', name: 'Chiziqli kattalashtirish', symbols: 'f — tasvir masofasi, d — jism masofasi' },
      ],
      constants: [
        { name: "Normal ko'zning eng yaxshi ko'rish masofasi", symbol: 'd_0', value: '0.25', unit: 'm' },
        { name: "Sog'lom ko'zning optik kuchi (tinch)", symbol: 'D_ko‘z', value: '≈ 58.5', unit: 'dptr' },
        { name: "Dioptriya o'lchov birligi", symbol: '1 dptr', value: '1', unit: 'm⁻¹' },
      ],
      applications: [
        "Biologik va metallografik mikroskoplar qisqa fokusli obyektiv hamda okulyar orqali 1000× gacha kattalashtirish beradi.",
        "Ko'zoynak va kontakt linzalar miopiya (manfiy dptr) hamda gipermetropiya (musbat dptr) nuqsonlarini tuzatadi.",
        "Avtofokus kamera obyektivlari linza elementlarini siljitib, turli masofadagi jismlarni matritsaga keskin tushiradi.",
      ],
      calculator: {
        title: "Yupqa linza va optik kuch kalkulyatori",
        formulaDisplay: 'D = 1/F,   1/f = 1/F − 1/d',
        inputs: [
          { key: 'F', label: 'Fokus masofasi (+ yig‘uvchi, − sochuvchi)', symbol: 'F', unit: 'sm', min: -100, max: 100, step: 2, default: 20 },
          { key: 'd', label: 'Jism masofasi d', symbol: 'd', unit: 'sm', min: 5, max: 200, step: 1, default: 30 },
        ],
        compute: (v) => {
          if (Math.abs(v.F) < 1) return { value: 'F ≠ 0 tanlang', unit: '', summary: 'Fokus masofasi nolga teng bo‘lishi mumkin emas.' };
          const D = 100 / v.F;
          const denom = v.d - v.F;
          if (Math.abs(denom) < 0.05) {
            return { value: '∞', unit: 'sm', summary: `Optik kuch D = ${D.toFixed(2)} dptr. Jism fokusda — nurlar parallel chiqadi.` };
          }
          const f = (v.d * v.F) / denom;
          const gamma = Math.abs(f / v.d);
          const type = f > 0 ? 'Haqiqiy, teskari' : "Mavhum, to'g'ri";
          return {
            value: `${f.toFixed(2)}`,
            unit: 'sm',
            summary: `D = ${D > 0 ? '+' : ''}${D.toFixed(2)} dptr | ${type} tasvir | Γ = ${gamma.toFixed(2)}×`,
          };
        },
      },
    },
    simulation: {
      title: "Yig'uvchi va sochuvchi linzalar 3D simulyatori",
      openSourceUrl: 'sims/effectuall/Optics_Converging_Lens.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "Yig'uvchi linzada jism o'rnini va fokus masofasini siljitib nurlar yo'nalishini hamda tasvir xossalarini 3D da tahlil qiling.",
      alternateSims: [
        { label: "Sochuvchi linza 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Diverging_Lens.html' },
        { label: "Murakkab mikroskop 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Compound_Microscope.html' },
        { label: "Astronomik teleskop 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Astronomical_Telescope.html' },
      ],
      parametric: {
        mode: 'lens_optics',
        title: "Linzada tasvir yasash va optik kuch stendi",
        description: "Fokus masofasi ishorasi (yig'uvchi / sochuvchi) va jism masofasini o'zgartirib, 3 ta asosiy nurning kesishishini kuzating.",
        controls: [
          { key: 'focal', label: 'Fokus F (+yig‘, −soch)', unit: 'sm', min: -60, max: 60, step: 5, value: 30 },
          { key: 'objDist', label: 'Jism masofasi d', unit: 'sm', min: 15, max: 130, step: 5, value: 75 },
          { key: 'objHeight', label: 'Jism balandligi h', unit: 'sm', min: 10, max: 45, step: 5, value: 25 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Fokus masofasi F = 25 sm bo'lgan yig'uvchi linzaning optik kuchi necha dioptriyaga teng?",
        options: ["+0.25 dptr", "+2.5 dptr", "+4 dptr", "+25 dptr"],
        answer: 2,
        explain: "D = 1 / F(m) = 1 / 0.25 = +4 dptr.",
      },
      {
        q: "Yig'uvchi linza qaysi holda kattalashgan va mavhum (lupa rejimi) tasvir hosil qiladi?",
        options: ["d > 2F", "F < d < 2F", "d = 2F", "d < F"],
        answer: 3,
        explain: "Jism fokus va linza orasida (d < F) joylashganda yig'uvchi linza kattalashgan, to'g'ri, mavhum tasvir beradi.",
      },
      {
        q: "Yaqindan ko'ruvchi (miopiya) inson ko'zoynaklari uchun qanday linza tanlanadi?",
        options: ["Yig'uvchi (musbat D)", "Sochuvchi (manfiy D)", "Yassi oyna", "Silindrik ko'zgu"],
        answer: 1,
        explain: "Yaqindan ko'rishda tasvir to'r pardadan oldinda hosil bo'ladi; sochuvchi linza nurlarni kengaytirib, tasvirni to'r pardaga tushiradi.",
      },
      {
        q: "Optik kuchlari D₁ = +5 dptr va D₂ = −2 dptr bo'lgan ikki yupqa linza zich qo'shilsa, tizim fokus masofasi qancha?",
        options: ["33.3 sm", "14.3 sm", "50 sm", "−33.3 sm"],
        answer: 0,
        explain: "D = D₁ + D₂ = 5 - 2 = +3 dptr, shunda F = 1 / 3 m ≈ 33.3 sm.",
      },
      {
        q: "Astronomik refraktor teleskopning burchak kattalashtirishi qaysi formula bilan aniqlanadi?",
        options: ["Γ = F_ok / F_ob", "Γ = F_ob / F_ok", "Γ = F_ob + F_ok", "Γ = F_ob · F_ok"],
        answer: 1,
        explain: "Teleskopda obyektiv uzoq fokusli, okulyar qisqa fokusli bo'ladi va Γ = F_ob / F_ok.",
      },
      {
        q: "Shisha linza (n = 1.5) havodan suvga (n = 1.33) tushirilsa, uning fokus masofasi qanday o'zgaradi?",
        options: ["Kamayadi", "Ortadi", "O'zgarmaydi", "Manfiy bo'lib qoladi"],
        answer: 1,
        explain: "Nisbiy sinish ko'rsatkichi n_l/n_m kamaygani uchun optik kuch D kamayadi, demak F = 1/D ortadi.",
      },
      {
        q: "Yig'uvchi linzada haqiqiy, teskari va jismga teng o'lchamli tasvir olish uchun jism qayerda turishi kerak?",
        options: ["d = F", "d = 2F", "d < F", "d = 3F"],
        answer: 1,
        explain: "d = 2F bo'lganda f = 2F bo'lib, Γ = f/d = 1 hosil bo'ladi.",
      },
      {
        q: "Fotoapparatda obyektivning linzasini plyonkaga/matritsaga yaqinlashtirish nimaga xizmat qiladi?",
        options: ["Yaqin jismlarni suratga olish uchun", "Uzoq jismlarni fokuslash uchun", "Yorqinlikni oshirish uchun", "Dispersiyani yo'qotish uchun"],
        answer: 1,
        explain: "d ortganda (uzoq jism) 1/f = 1/F - 1/d ga ko'ra f kamayib F ga yaqinlashadi, shuning uchun linza matritsaga yaqinlashtiriladi.",
      },
    ],
    problems: [
      {
        variants: [[20, 60], [15, 30], [25, 100], [10, 50]],
        build(i) {
          const [F, d] = this.variants[i];
          const f = (d * F) / (d - F);
          return {
            q: `Fokus masofasi F = ${F} sm yig'uvchi linzadan d = ${d} sm masofada jism qo'yildi. Ekrandagi aniq tasvirgacha masofani (sm) toping.`,
            correct: Number(f.toFixed(1)),
            unit: 'sm',
            explain: `f = (d·F)/(d - F) = (${d}·${F})/(${d}-${F}) = ${f.toFixed(1)} sm.`,
          };
        },
      },
      {
        variants: [[0.5], [0.2], [0.125], [0.4]],
        build(i) {
          const [F] = this.variants[i];
          const D = 1 / F;
          return {
            q: `Fokus masofasi F = ${F} m bo'lgan linzaning optik kuchini (dptr) hisoblang.`,
            correct: Number(D.toFixed(2)),
            unit: 'dptr',
            explain: `D = 1 / F = 1 / ${F} = ${D.toFixed(2)} dptr.`,
          };
        },
      },
      {
        variants: [[120, 4], [150, 5], [90, 3], [200, 10]],
        build(i) {
          const [Fob, Fok] = this.variants[i];
          const mag = Fob / Fok;
          return {
            q: `Teleskop obyektivining fokus masofasi ${Fob} sm, okulyariniki ${Fok} sm bo'lsa, teleskop necha marta kattalashtiradi?`,
            correct: Number(mag.toFixed(1)),
            unit: '×',
            explain: `Γ = F_ob / F_ok = ${Fob} / ${Fok} = ${mag} marta.`,
          };
        },
      },
    ],
  },
  {
    id: '6B-1',
    code: '6B.1',
    sectionId: 'sec-6',
    subsectionId: '6B',
    subsectionTitle: "B. To'lqin Optikasi",
    title: "Yorug'likning dispersiyasi, interferensiyasi va difraksiyasi",
    subtitle: "Prizma va kamalak, yupqa pardalar, Nyuton halqalari, Yung tajribasi, difraksion panjara",
    theory: {
      overview:
        "To'lqin optikasi yorug'likni $\\lambda \\approx 380\\text{–}760\\text{ nm}$ diapazondagi ko'ndalang elektromagnit to'lqin sifatida tadqiq etadi. Dispersiya — muhit sinish ko'rsatkichining yorug'lik chastotasi (yoki to'lqin uzunligi)ga bog'liqligi $n(\\lambda)$ bo'lib, prizmada oq yorug'likning spektrga ajralishi va tabiiy kamalakni tushuntiradi. Kogerent yorug'lik to'lqinlari qo'shilganda fazalar va yo'l farqi $\\Delta$ ga qarab interferensiya maksimumlari ($\\Delta = k\\lambda$) va minimumlari ($\\Delta = (2k+1)\\lambda/2$) yuzaga keladi (Yung ikki tirqishli tajribasi, yupqa sovun pufagi pardalari, Nyuton halqalari). Difraksiya esa yorug'likning kichik tirqish va to'siqlarni aylanib o'tishidir; difraksion panjara formulasi $d\\sin\\varphi = k\\lambda$ spektral tahlilda asosiy asbob hisoblanadi.",
      keyLaws: [
        {
          title: "Interferensiya ekstremum shartlari",
          text: "Kogerent to'lqinlarning optik yo'l farqi $\\Delta = n_2 r_2 - n_1 r_1$ butun to'lqin uzunlikka teng ($\\Delta = k\\lambda$) bo'lganda maksimum, yarim to'lqinlarga teng ($\\Delta = (k + 1/2)\\lambda$) bo'lganda minimum kuzatiladi.",
        },
        {
          title: "Difraksion panjara bosh maksimumlari sharti",
          text: "Davri $d$ bo'lgan difraksion panjaraga normal tushgan $\\lambda$ to'lqin uzunlikli nur uchun $k$-tartibli maksimum burchagi: $d\\sin\\varphi = k\\lambda$.",
        },
        {
          title: "Dispersiya qonuniyati",
          text: "Normal dispersiya hududida qisqa to'lqinli (binafsha) nurlarning sinish ko'rsatkichi uzun to'lqinli (qizil) nurlarnikidan kattaroq ($n_{\\text{bin}} > n_{\\text{qiz}}$), shuning uchun binafsha nur prizmada kuchliroq og'adi.",
        },
      ],
      formulas: [
        { latex: '\\Delta = k\\lambda \\;(\\text{max}), \\quad \\Delta = \\left(k + \\frac{1}{2}\\right)\\lambda \\;(\\text{min})', name: 'Interferensiya shartlari', symbols: '\\Delta — optik yo‘l farqi, k = 0,1,2...' },
        { latex: '\\Delta x = \\frac{\\lambda L}{d}', name: 'Yung interferensiya yo‘li kengligi', symbols: 'L — ekrangacha masofa, d — tirqishlar orasi' },
        { latex: 'r_k = \\sqrt{k R \\lambda}', name: 'Nyuton qorong‘i halqa radiusi', symbols: 'R — linza egrilik radiusi, k — halqa tartibi' },
        { latex: 'd \\sin\\varphi = k \\lambda', name: 'Difraksion panjara tenglamasi', symbols: 'd — panjara davri, k — spektr tartibi' },
      ],
      constants: [
        { name: "Ko'rinadigan yorug'lik diapazoni", symbol: 'λ', value: '380 – 760', unit: 'nm' },
        { name: "Qizil yorug'lik (He-Ne lazer)", symbol: 'λ_HeNe', value: '632.8', unit: 'nm' },
        { name: "Yashil spektr chizig'i (e-chiziq)", symbol: 'λ_yashil', value: '546.1', unit: 'nm' },
      ],
      applications: [
        "Yorug'lik o'tkazuvchanligini oshirish va akslarni kamaytirish uchun obyektivlarga interferension (qoraytiruvchi) $d = \\lambda/(4n)$ parda qoplanadi.",
        "Difraksion spektrometrlar yulduzlar va kimyoviy namunalar tarkibini pikometr aniqlikda aniqlaydi.",
        "Maykelson interferometri va LIGO lazer observatoriyalari tortishish to'lqinlarini proton radiusidan ming baravar kichik siljishlarda qayd etadi.",
      ],
      calculator: {
        title: "Yung interferensiyasi va difraksion panjara hisoblagichi",
        formulaDisplay: 'Δx = λL / d,   sin(φₖ) = k·λ / d',
        inputs: [
          { key: 'lambda', label: 'To‘lqin uzunligi', symbol: 'λ', unit: 'nm', min: 380, max: 760, step: 5, default: 550 },
          { key: 'd', label: 'Panjara / tirqish davri', symbol: 'd', unit: 'mkm', min: 1.0, max: 200, step: 0.5, default: 5.0 },
          { key: 'k', label: 'Maksimum tartibi k', symbol: 'k', unit: '', min: 1, max: 6, step: 1, default: 1 },
        ],
        compute: (v) => {
          const lamUm = v.lambda / 1000;
          const sinPhi = (v.k * lamUm) / v.d;
          const kMax = Math.floor(v.d / lamUm);
          const fringe1m = ((v.lambda * 1e-9 * 1.0) / (v.d * 1e-6)) * 1000;
          if (sinPhi > 1) {
            return {
              value: 'Kuzatilmaydi',
              unit: '',
              summary: `sin(φ) = ${sinPhi.toFixed(2)} > 1. Eng katta mumkin bo'lgan tartib k_max = ${kMax}.`,
            };
          }
          const phi = (Math.asin(sinPhi) * 180) / Math.PI;
          return {
            value: `${phi.toFixed(2)}`,
            unit: '°',
            summary: `${v.k}-tartibli maksimum burchagi φ = ${phi.toFixed(2)}° | k_max = ${kMax} | L=1m da yo‘l kengligi Δx = ${fringe1m.toFixed(2)} mm`,
          };
        },
      },
    },
    simulation: {
      title: "Yung qo'sh tirqish interferensiyasi 3D tajribasi",
      openSourceUrl: 'sims/effectuall/Optics_Youngs_Double_Slit_Experiment.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D laboratoriya stendida to'lqin uzunligi, tirqishlar orasidagi masofa va ekrangacha masofani o'zgartirib interferensiya manzarasini o'rganing.",
      alternateSims: [
        { label: "Yorug'lik interferensiyasi 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Interference.html' },
        { label: "To'lqinlar fizikasi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Understanding_Waves.html' },
      ],
      parametric: {
        mode: 'double_slit',
        title: "Qo'sh tirqish interferensiyasi va difraksiya simulyatori",
        description: "To'lqin uzunligi λ (rang spektrini), tirqishlar masofasi d va ekran masofasi L ni sozlab intensivlik grafigini kuzating.",
        controls: [
          { key: 'lambda', label: 'To‘lqin uzunligi λ', unit: 'nm', min: 400, max: 700, step: 10, value: 530 },
          { key: 'slitDist', label: 'Tirqishlar orasi d', unit: 'mkm', min: 20, max: 120, step: 5, value: 50 },
          { key: 'screenL', label: 'Ekran masofasi L', unit: 'm', min: 0.5, max: 3.0, step: 0.1, value: 1.5 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Oq yorug'lik shisha prizmadan o'tganda qaysi rangli nur eng kuchli og'adi?",
        options: ["Qizil", "Sariq", "Yashil", "Binafsha"],
        answer: 3,
        explain: "Dispersiya tufayli to'lqin uzunligi eng qisqa bo'lgan binafsha nur uchun shishaning sinish ko'rsatkichi eng katta, shuning uchun u eng ko'p sinadi.",
      },
      {
        q: "Ikki kogerent to'lqinning yo'l farqi Δ = 2.5 λ bo'lgan nuqtada nima kuzatiladi?",
        options: ["Interferensiya maksimumi", "Interferensiya minimumi", "Difraksiya qutblanishi", "Dispersiya"],
        answer: 1,
        explain: "Δ = (2k + 1)·(λ/2) yarim to'lqinlarning toq soni (5·λ/2) bo'lganda to'lqinlar qarama-qarshi fazada uchrashib so'nadi (minimum).",
      },
      {
        q: "Yung tajribasida tirqishlar orasidagi d masofani 2 marta kamaytirsak, ekrandagi interferensiya yo'llari orasidagi Δx masofa qanday o'zgaradi?",
        options: ["2 marta kamayadi", "2 marta ortadi", "4 marta ortadi", "O'zgarmaydi"],
        answer: 1,
        explain: "Δx = λL / d ga ko'ra d ikki marta kamaysa, qo'shni maksimumlar orasi 2 marta kengayadi.",
      },
      {
        q: "Sovun pufagi yuzasida rang-barang jilolarning paydo bo'lishi qaysi hodisaga asoslanadi?",
        options: ["Dispersiya", "Yupqa pardalarda interferensiya", "Fotoeffekt", "Yorug'lik qutblanishi"],
        answer: 1,
        explain: "Pardaning tashqi va ichki sirtlaridan qaytgan kogerent nurlar interferensiyasi tufayli turli to'lqin uzunliklari kuchayadi.",
      },
      {
        q: "Difraksion panjaraga λ = 500 nm to'lqin uzunlikli nur normal tushmoqda. Panjara davri d = 2 mkm bo'lsa, eng katta kuzatiladigan spektr tartibi k_max nechaga teng?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explain: "k_max ≤ d / λ = 2000 nm / 500 nm = 4.",
      },
      {
        q: "Yorug'likning geometrik soya sohasiga o'tib ketishi qanday ataladi?",
        options: ["Sinish", "Difraksiya", "Polyarizatsiya", "Yutilish"],
        answer: 1,
        explain: "To'lqinlarning o'lchami λ ga yaqin to'siq va tirqishlarni aylanib o'tishi difraksiya deyiladi.",
      },
      {
        q: "Kogerent to'lqinlar deb qanday to'lqinlar aytiladi?",
        options: ["Faqat amplitudasi teng to'lqinlar", "Chastotasi bir xil va fazalar farqi vaqt bo'yicha o'zgarmas to'lqinlar", "Tezligi turlicha to'lqinlar", "Faqat qizil rangli to'lqinlar"],
        answer: 1,
        explain: "Turgan interferensiya manzarasi hosil bo'lishi uchun to'lqinlar bir xil chastotali va doimiy fazalar farqiga ega (kogerent) bo'lishi shart.",
      },
      {
        q: "Obyektiv linzalariga qoraytiruvchi yupqa parda qoplanganda optimal parda qalinligi nimaga teng bo'ladi?",
        options: ["λ / 2", "λ / (4n)", "λ", "2λ"],
        answer: 1,
        explain: "Ikkala sirtdan qaytgan nurlarning yo'l farqi 2nd = λ/2 bo'lishi uchun parda qalinligi d = λ / (4n) tanlanadi.",
      },
    ],
    problems: [
      {
        variants: [[600, 2.0, 0.4], [500, 1.5, 0.5], [640, 2.5, 0.8], [480, 2.0, 0.3]],
        build(i) {
          const [lamNm, L, dMm] = this.variants[i];
          const dxMm = ((lamNm * 1e-9 * L) / (dMm * 1e-3)) * 1000;
          return {
            q: `Yung tajribasida d = ${dMm} mm masofadagi ikki tirqish λ = ${lamNm} nm yorug'lik bilan yoritilmoqda. Ekrangacha L = ${L} m bo'lsa, interferensiya yo'lining kengligi Δx (mm) nechaga teng?`,
            correct: Number(dxMm.toFixed(2)),
            unit: 'mm',
            explain: `Δx = λL / d = (${lamNm}·10⁻⁹ · ${L}) / (${dMm}·10⁻³) = ${dxMm.toFixed(2)} mm.`,
          };
        },
      },
      {
        variants: [[2.5, 500, 1], [4.0, 600, 2], [2.0, 500, 1], [3.0, 600, 1]],
        build(i) {
          const [dUm, lamNm, k] = this.variants[i];
          const sinP = (k * (lamNm / 1000)) / dUm;
          const deg = (Math.asin(sinP) * 180) / Math.PI;
          return {
            q: `Davri d = ${dUm} mkm bo'lgan difraksion panjaraga λ = ${lamNm} nm nur tushmoqda. ${k}-tartibli maksimum necha gradus burchakda kuzatiladi?`,
            correct: Number(deg.toFixed(1)),
            unit: '°',
            explain: `sin φ = kλ / d = (${k}·${lamNm / 1000}) / ${dUm} = ${sinP.toFixed(3)} => φ = ${deg.toFixed(1)}°.`,
          };
        },
      },
      {
        variants: [[4.0, 500], [3.2, 640], [2.4, 600], [3.5, 500]],
        build(i) {
          const [dUm, lamNm] = this.variants[i];
          const kmax = Math.floor((dUm * 1000) / lamNm);
          return {
            q: `1 mm da ${(1000 / dUm).toFixed(0)} ta chizig'i bor (d = ${dUm} mkm) panjarada λ = ${lamNm} nm nur uchun eng yuqori nechanchi tartibli bosh maksimum kuzatiladi?`,
            correct: kmax,
            unit: '',
            explain: `k_max = ⌊d / λ⌋ = ⌊${dUm * 1000} / ${lamNm}⌋ = ${kmax}.`,
          };
        },
      },
    ],
  },
  {
    id: '6B-2',
    code: '6B.2',
    sectionId: 'sec-6',
    subsectionId: '6B',
    subsectionTitle: "B. To'lqin Optikasi",
    title: "Yorug'likning qutblanishi (Polyarizatsiya)",
    subtitle: "Yorug'likning ko'ndalang to'lqin ekanligi, polyaroidlar, Malyus va Bryuster qonunlari",
    theory: {
      overview:
        "Yorug'likning interferensiyasi va difraksiyasi uning to'lqin tabiatini isbotlasa, qutblanish (polyarizatsiya) hodisasi yorug'lik elektromagnit to'lqinlarining aynan ko'ndalang to'lqin ekanligini qat'iy isbotlaydi. Tabiiy yorug'likda elektr maydon kuchlanganligi vektori $\\vec{E}$ nurlanish yo'nalishiga perpendikulyar tekislikdagi barcha yo'nalishlar bo'ylab tartibsiz tebranadi. Polyaroid (masalan, turmalin kristalli) orqali o'tganda faqat bitta tekislikdagi tebranishlar ajralib qolib, chiziqli qutblangan yorug'lik hosil bo'ladi; uning intensivligi ikki marta kamayadi ($I_1 = I_0/2$). Analizator orqali o'tganda intensivlik Malyus qonuni $I = I_1 \\cos^2\\theta$ ga ko'ra o'zgaradi.",
      keyLaws: [
        {
          title: "Malyus qonuni",
          text: "Chiziqli qutblangan yorug'lik intensivligi $I_1$ analizator o'qi bilan $\\theta$ burchak hosil qilganda o'tuvchi yorug'lik intensivligi $I = I_1 \\cos^2\\theta$ ga teng bo'ladi.",
        },
        {
          title: "Bryuster qonuni",
          text: "Dielektrik sirtiga $\\tan\\alpha_B = n$ burchak ostida tushgan tabiiy yorug'likning qaytgan qismi to'liq chiziqli qutblanadi; bunda qaytgan va singan nurlar o'zaro perpendikulyar ($\\alpha_B + \\gamma = 90°$) bo'ladi.",
        },
        {
          title: "Bo'ylama va ko'ndalang to'lqin mezoni",
          text: "Tovush kabi bo'ylama to'lqinlar fazoviy simmetriya tufayli hech qachon qutblanmaydi; faqat ko'ndalang to'lqinlardagina tebranish tekisligini tanlash mumkin.",
        },
      ],
      formulas: [
        { latex: 'I_1 = \\frac{I_0}{2}', name: 'Tabiiy nurning polyarizatordan o‘tishi', symbols: 'I_0 — tabiiy nur intensivligi' },
        { latex: 'I = I_1 \\cos^2 \\theta', name: 'Malyus qonuni', symbols: '\\theta — polyarizator va analizator o‘qlari orasidagi burchak' },
        { latex: '\\tan \\alpha_B = \\frac{n_2}{n_1}', name: 'Bryuster burchagi formulasi', symbols: '\\alpha_B — to‘liq qutblanish burchagi' },
      ],
      constants: [
        { name: "Shisha (n=1.52) uchun Bryuster burchagi", symbol: 'α_B', value: '56.7', unit: '°' },
        { name: "Suv (n=1.33) uchun Bryuster burchagi", symbol: 'α_B', value: '53.1', unit: '°' },
      ],
      applications: [
        "LCD ekranlar o'zaro 90° ga burilgan ikkita polyarizator va suyuq kristall qatlamidan iborat.",
        "Polyaroid quyosh ko'zoynaklari va fotoobyektiv filtrlari asfalt hamda suv sirtidan qaytgan gorizontal qutblangan shu'lalarni to'sadi.",
        "Fotoelastiklik usulida qutblangan nur orqali muhandislik detallari ichidagi mexanik kuchlanishlar vizual tekshiriladi.",
      ],
      calculator: {
        title: "Malyus va Bryuster qonuni hisoblagichi",
        formulaDisplay: 'I = (I₀ / 2) · cos²(θ),   α_B = arctan(n)',
        inputs: [
          { key: 'I0', label: 'Tabiiy nur intensivligi I₀', symbol: 'I₀', unit: 'Vt/m²', min: 10, max: 1000, step: 10, default: 200 },
          { key: 'theta', label: 'Polyarizator-analizator burchagi', symbol: 'θ', unit: '°', min: 0, max: 90, step: 1, default: 45 },
          { key: 'n', label: 'Dielektrik sinish ko‘rsatkichi', symbol: 'n', unit: '', min: 1.1, max: 2.5, step: 0.05, default: 1.52 },
        ],
        compute: (v) => {
          const I1 = v.I0 / 2;
          const cosT = Math.cos((v.theta * Math.PI) / 180);
          const I2 = I1 * cosT * cosT;
          const brew = (Math.atan(v.n) * 180) / Math.PI;
          return {
            value: `${I2.toFixed(1)}`,
            unit: 'Vt/m²',
            summary: `1-polyarizatordan keyin I₁ = ${I1.toFixed(1)} Vt/m² | Analizatordan keyin I = ${I2.toFixed(1)} Vt/m² | Bryuster α_B = ${brew.toFixed(1)}°`,
          };
        },
      },
    },
    simulation: {
      title: "Elektromagnit to'lqinning ko'ndalang tebranishi va polyaroid modeli",
      openSourceUrl: 'sims/effectuall/Optics_Light_as_Rays_and_Waves.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D muhitda yorug'likning ko'ndalang elektromagnit to'lqin xususiyati va fazoviy tebranish tekisliklarini o'rganing.",
      alternateSims: [
        { label: "Interaktiv ko'ndalang to'lqin (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__InteractiveWave.html' },
        { label: "To'lqinlar fizikasi 3D (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Understanding_Waves.html' },
      ],
      parametric: {
        mode: 'polarization',
        title: "Polyarizator va Analizator (Malyus qonuni) 3D proyeksiya simulyatori",
        description: "Analizator o'qi burchagi θ ni 0° dan 90° gacha burib, uzatilgan elektr maydon amplitudasi va intensivlik o'zgarishini kuzating.",
        controls: [
          { key: 'angle', label: 'Analizator burchagi θ', unit: '°', min: 0, max: 90, step: 5, value: 45 },
          { key: 'I0', label: 'Tabiiy nur I₀', unit: 'Vt/m²', min: 20, max: 200, step: 10, value: 100 },
          { key: 'freq', label: 'To‘lqin tezligi', unit: '×', min: 0.5, max: 2.5, step: 0.25, value: 1.0 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Qaysi fizik hodisa yorug'likning ko'ndalang to'lqin ekanligini bevosita isbotlaydi?",
        options: ["Interferensiya", "Difraksiya", "Qutblanish (Polyarizatsiya)", "Dispersiya"],
        answer: 2,
        explain: "Interferensiya va difraksiya bo'ylama to'lqinlarda ham bo'ladi, lekin qutblanish faqat ko'ndalang to'lqinlarga xos.",
      },
      {
        q: "Tabiiy yorug'lik intensivligi I₀ bitta ideal polyarizatordan o'tganda intensivlik qanday o'zgaradi?",
        options: ["O'zgarmaydi", "2 marta kamayadi (I₀/2)", "4 marta kamayadi", "Nolga teng bo'ladi"],
        answer: 1,
        explain: "Tabiiy yorug'likdagi barcha yo'nalishlar bo'yicha cos²φ ning o'rtacha qiymati 1/2 ga teng, shuning uchun I₁ = I₀/2.",
      },
      {
        q: "Polyarizator va analizator o'qlari orasidagi burchak θ = 90° (kesishgan holat) bo'lsa, analizatordan chiqadigan yorug'lik intensivligi qancha?",
        options: ["I₁ / 2", "I₁ / 4", "I₁", "0 (to'liq qorong'ulik)"],
        answer: 3,
        explain: "Malyus qonuniga ko'ra I = I₁·cos²(90°) = 0.",
      },
      {
        q: "Qutblangan nur intensivligi analizatordan o'tgandan so'ng 4 marta kamayishi uchun θ burchagi nechaga teng bo'lishi kerak?",
        options: ["30°", "45°", "60°", "75°"],
        answer: 2,
        explain: "cos²θ = 1/4 => cos θ = 1/2 => θ = 60°.",
      },
      {
        q: "Bryuster burchagi ostida shishaga tushgan tabiiy yorug'likning qaytgan va singan nurlari orasidagi burchak nechaga teng?",
        options: ["45°", "60°", "90°", "180°"],
        answer: 2,
        explain: "tan α_B = n = sin α_B / sin γ dan cos α_B = sin γ => α_B + γ = 90°, ya'ni qaytgan va singan nurlar tik bo'ladi.",
      },
      {
        q: "Tovush to'lqinlarini havoda polyaroid yordamida qutblash mumkinmi?",
        options: ["Ha, past chastotalarda", "Yo'q, chunki havoda tovush bo'ylama to'lqindir", "Ha, ultratovushda", "Faqat yuqori bosimda"],
        answer: 1,
        explain: "Gazlarda tovush bo'ylama to'lqin bo'lib, zarrachalar tarqalish chizig'i bo'ylab tebranadi va qutblanmaydi.",
      },
      {
        q: "Polyaroid quyosh ko'zoynaklari suv yuzasidagi yaltirashni qanday yo'qotadi?",
        options: ["Suvdan qaytgan gorizontal qutblangan nurni vertikal polyaroid to'sib qo'yadi", "Suv sinish ko'rsatkichini o'zgartiradi", "Faqat ko'k rangni yutadi", "Difraksiya hosil qiladi"],
        answer: 0,
        explain: "Gorizontal sirtdan qaytgan shu'la asosan gorizontal qutblangan bo'ladi; ko'zoynak vertikal o'tish o'qiga ega bo'lgani uchun shu'lani kesadi.",
      },
      {
        q: "Agar I₀ = 160 Vt/m² tabiiy yorug'lik ketma-ket θ = 45° burchakdagi ikki ideal polyarizatordan o'tsa, chiqish intensivligi qancha?",
        options: ["80 Vt/m²", "40 Vt/m²", "20 Vt/m²", "113 Vt/m²"],
        answer: 1,
        explain: "Birinchi polyarizatordan keyin I₁ = 160/2 = 80; ikkinchisidan keyin I = 80·cos²(45°) = 80·0.5 = 40 Vt/m².",
      },
    ],
    problems: [
      {
        variants: [[200, 60], [160, 45], [320, 60], [100, 30]],
        build(i) {
          const [I0, theta] = this.variants[i];
          const I = (I0 / 2) * Math.pow(Math.cos((theta * Math.PI) / 180), 2);
          return {
            q: `Intensivligi I₀ = ${I0} Vt/m² bo'lgan tabiiy yorug'lik o'qlari orasidagi burchak θ = ${theta}° bo'lgan polyarizator va analizatordan o'tdi. Chiqish intensivligini (Vt/m²) toping.`,
            correct: Number(I.toFixed(1)),
            unit: 'Vt/m²',
            explain: `I₁ = ${I0}/2 = ${I0 / 2}; I = ${I0 / 2}·cos²(${theta}°) = ${I.toFixed(1)} Vt/m².`,
          };
        },
      },
      {
        variants: [[1.5], [1.732], [1.333], [1.6]],
        build(i) {
          const [n] = this.variants[i];
          const deg = (Math.atan(n) * 180) / Math.PI;
          return {
            q: `Sinish ko'rsatkichi n = ${n} bo'lgan shaffof plastinka uchun havodan tushishdagi Bryuster burchagini (gradusda) hisoblang.`,
            correct: Number(deg.toFixed(1)),
            unit: '°',
            explain: `α_B = arctan(${n}) = ${deg.toFixed(1)}°.`,
          };
        },
      },
      {
        variants: [[100, 25], [80, 10], [120, 30], [200, 100]],
        build(i) {
          const [I1, I2] = this.variants[i];
          const deg = (Math.acos(Math.sqrt(I2 / I1)) * 180) / Math.PI;
          return {
            q: `Chiziqli qutblangan yorug'lik (I₁ = ${I1} Vt/m²) analizatordan o'tgach intensivligi I = ${I2} Vt/m² bo'lib qoldi. Analizator o'qi necha gradus burchakda turibdi?`,
            correct: Number(deg.toFixed(1)),
            unit: '°',
            explain: `cos²θ = ${I2}/${I1} = ${(I2 / I1).toFixed(2)} => θ = ${deg.toFixed(1)}°.`,
          };
        },
      },
    ],
  },
  {
    id: '6C-1',
    code: '6C.1',
    sectionId: 'sec-6',
    subsectionId: '6C',
    subsectionTitle: 'C. Fotometriya',
    title: "Yorug'lik kattaliklari va fotometriya qonunlari",
    subtitle: "Yorug'lik oqimi, yorug'lik kuchi, yoritilganlik va ularning SI birliklari",
    theory: {
      overview:
        "Fotometriya ko'rinadigan yorug'likning inson ko'ziga ta'siriga ko'ra baholanadigan energetik va vizual xususiyatlarini o'lchaydi. Asosiy kattaliklar: nuqtaviy manbaning yorug'lik kuchi $I$ (SI asosiy birligi kandela, cd — ko'zning $\\lambda = 555\\text{ nm}$ yashil-sariq nurga maksimal sezgirligiga bog'langan), vaqt birligida o'tayotgan yorug'lik energiyasi — yorug'lik oqimi $\\Phi = I\\cdot\\Omega$ (lyumen, lm) hamda sirt birligiga tushayotgan oqim — yoritilganlik $E = \\Phi/S$ (lyuks, lx = lm/m²). Masofa ortishi bilan yoritilganlik teskari kvadrat qonuniga ko'ra kamayadi, qiya tushishda esa Lamberg kosinus qonuni amal qiladi: $E = (I\\cos\\alpha)/r^2$.",
      keyLaws: [
        {
          title: "Yoritilganlikning teskari kvadrat va kosinus qonuni",
          text: "Nuqtaviy manbadan $r$ masofada normali manbaga $\\alpha$ burchak ostida joylashgan kichik sirt yoritilganligi $E = (I \\cos\\alpha)/r^2$ ga teng.",
        },
        {
          title: "To'liq sfera yorug'lik oqimi",
          text: "Izotrop nuqtaviy manbaning barcha yo'nalishlarga chiqaradigan to'liq yorug'lik oqimi $\\Omega = 4\\pi$ steradian fazoviy burchak bo'yicha $\\Phi = 4\\pi I$ bo'ladi.",
        },
      ],
      formulas: [
        { latex: '\\Phi = I \\cdot \\Omega \\quad (\\text{to‘liq: } \\Phi = 4\\pi I)', name: 'Yorug‘lik oqimi (lyumen)', symbols: 'I — yorug‘lik kuchi (cd), \\Omega — fazoviy burchak (sr)' },
        { latex: 'E = \\frac{\\Phi}{S} = \\frac{I \\cos\\alpha}{r^2}', name: 'Sirt yoritilganligi (lyuks)', symbols: 'S — yuza (m²), r — masofa, \\alpha — tushish burchagi' },
        { latex: '\\frac{I_1}{r_1^2} = \\frac{I_2}{r_2^2}', name: 'Fotometr muvozanat sharti', symbols: 'Ikkala tomondan teng yoritilganlik holati' },
      ],
      constants: [
        { name: "SI asosiy yorug'lik kuchi birligi", symbol: '1 cd', value: '540 THz', unit: '1/683 Vt/sr' },
        { name: "Quyoshli kunda yer yoritilganligi", symbol: 'E_quyosh', value: '≈ 10⁵', unit: 'lx' },
        { name: "O'quv xonasi me'yoriy yoritilganligi", symbol: 'E_norm', value: '300 – 500', unit: 'lx' },
      ],
      applications: [
        "Auditoriyalar, laboratoriyalar va shifoxona operatsiya xonalarini yoritish loyihalari lyuksmetr o'lchovlariga asoslanadi.",
        "LED lampalar samaradorligi lm/Vt (lyumen/vatt) ko'rsatkichi bilan o'lchanadi (zamonaviy LED 100–160 lm/Vt).",
        "Kamera eksponometrlari sahna yoritilganligiga qarab diafragma va tortish vaqtini avtomatik tanlaydi.",
      ],
      calculator: {
        title: "Fotometriya va yoritilganlik kalkulyatori",
        formulaDisplay: 'E = (I · cos α) / r²,   Φ = 4π I',
        inputs: [
          { key: 'I', label: 'Manba yorug‘lik kuchi I', symbol: 'I', unit: 'cd', min: 10, max: 2000, step: 10, default: 400 },
          { key: 'r', label: 'Manbadan masofa r', symbol: 'r', unit: 'm', min: 0.5, max: 10, step: 0.1, default: 2.0 },
          { key: 'alpha', label: 'Sirtga tushish burchagi α', symbol: 'α', unit: '°', min: 0, max: 85, step: 1, default: 0 },
        ],
        compute: (v) => {
          const cosA = Math.cos((v.alpha * Math.PI) / 180);
          const E = (v.I * cosA) / (v.r * v.r);
          const phi = 4 * Math.PI * v.I;
          return {
            value: `${E.toFixed(1)}`,
            unit: 'lx',
            summary: `Yoritilganlik E = ${E.toFixed(1)} lk | To'liq yorug'lik oqimi Φ = ${phi.toFixed(0)} lm`,
          };
        },
      },
    },
    simulation: {
      title: "Yorug'lik oqimi va masofaga bog'liq yoritilganlik 3D stendi",
      openSourceUrl: 'sims/effectuall/Optics_Light_as_Rays_and_Waves.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote:
        "3D yorug'lik manbasining fazoviy tarqalishini ko'ring va pastdagi Fotometriya parametr stendida burchak hamda masofani sinang.",
      alternateSims: [
        { label: "Yorug'lik qaytishi va tarqalishi (Effectuall)", source: 'Effectuall 3D Lab', url: 'sims/effectuall/Optics_Reflection_of_Light.html' },
      ],
      parametric: {
        mode: 'photometry',
        title: "Teskari kvadrat qonuni va Lamberg kosinusi fotometrik stendi",
        description: "Chiroq kuchi I, stol balandligi r va sirt og'ish burchagi α ni o'zgartirib, sirtdagi yoritilganlik E (lk) taqsimotini kuzating.",
        controls: [
          { key: 'intensity', label: 'Yorug‘lik kuchi I', unit: 'cd', min: 50, max: 1000, step: 25, value: 400 },
          { key: 'dist', label: 'Masofa r', unit: 'm', min: 0.8, max: 4.0, step: 0.1, value: 1.5 },
          { key: 'angle', label: 'Og‘ish burchagi α', unit: '°', min: 0, max: 75, step: 5, value: 0 },
        ],
      },
    },
    coreQuestions: [
      {
        q: "Xalqaro birliklar tizimi (SI) da yorug'lik kuchining birligi nima?",
        options: ["Lyumen (lm)", "Lyuks (lx)", "Kandela (cd)", "Vatt (W)"],
        answer: 2,
        explain: "Yorug'lik kuchi yettita asosiy SI kattaliklaridan biri bo'lib, birligi kandela (cd).",
      },
      {
        q: "1 lyuks (lx) nimaga teng?",
        options: ["1 cd / m²", "1 lm / m²", "1 lm · m²", "1 cd · sr"],
        answer: 1,
        explain: "Yoritilganlik E = Φ / S bo'lib, birligi 1 lx = 1 lm / m².",
      },
      {
        q: "Nuqtaviy yorug'lik manbaidan ekrangacha bo'lgan masofa 3 marta orttirilsa, ekran yoritilganligi necha marta kamayadi?",
        options: ["3 marta", "6 marta", "9 marta", "27 marta"],
        answer: 2,
        explain: "E ∝ 1/r² bo'lgani uchun r 3 marta ortsa, yoritilganlik 3² = 9 marta kamayadi.",
      },
      {
        q: "Yorug'lik kuchi I = 100 cd bo'lgan izotrop nuqtaviy manba chiqaradigan to'liq yorug'lik oqimi nechaga teng?",
        options: ["100 lm", "314 lm", "628 lm", "1256 lm"],
        answer: 3,
        explain: "Φ = 4πI = 4 · 3.14 · 100 ≈ 1256 lm.",
      },
      {
        q: "Stol sirtiga nurlar α = 60° burchak ostida tushsa, tik tushishdagiga (α = 0°) nisbatan yoritilganlik qancha bo'ladi?",
        options: ["2 marta kam", "2 marta ko'p", "√3/2 marta", "4 marta kam"],
        answer: 0,
        explain: "E = (I/r²)·cos(60°) = 0.5·E_max, ya'ni 2 marta kam.",
      },
      {
        q: "Sirt yuzasi S = 2 m² ga tushayotgan yorug'lik oqimi Φ = 600 lm bo'lsa, sirtning o'rtacha yoritilganligi qancha?",
        options: ["1200 lx", "600 lx", "300 lx", "150 lx"],
        answer: 2,
        explain: "E = Φ / S = 600 / 2 = 300 lx.",
      },
      {
        q: "Fotometr ekrani I₁ = 40 cd va I₂ = 160 cd lampalar orasida teng yoritilgan. Agar 1-lampa r₁ = 1 m masofada bo'lsa, 2-lampa qayerda turibdi?",
        options: ["2 m", "4 m", "0.5 m", "1.5 m"],
        answer: 0,
        explain: "I₁/r₁² = I₂/r₂² => 40/1 = 160/r₂² => r₂² = 4 => r₂ = 2 m.",
      },
      {
        q: "Inson ko'zi kunduzgi yorug'likda qaysi to'lqin uzunligiga eng yuqori sezgirlikka ega?",
        options: ["400 nm (binafsha)", "555 nm (yashil-sariq)", "650 nm (qizil)", "750 nm (infraqizil chegara)"],
        answer: 1,
        explain: "Kunduzgi ko'rish egri chizig'ining maksimumi aynan 555 nm (540 THz) da yotadi; kandela ta'rifi ham shu chastotaga bog'langan.",
      },
    ],
    problems: [
      {
        variants: [[360, 3], [500, 2], [900, 3], [200, 2]],
        build(i) {
          const [I, r] = this.variants[i];
          const E = I / (r * r);
          return {
            q: `Yorug'lik kuchi I = ${I} cd bo'lgan chiroqdan r = ${r} m pastda stolga tik tushayotgan nurlar hosil qilgan yoritilganlikni (lx) toping.`,
            correct: Number(E.toFixed(1)),
            unit: 'lx',
            explain: `E = I / r² = ${I} / ${r}² = ${E.toFixed(1)} lx.`,
          };
        },
      },
      {
        variants: [[800, 2, 60], [600, 2, 60], [1000, 5, 60], [400, 2, 0]],
        build(i) {
          const [I, r, ang] = this.variants[i];
          const E = (I * Math.cos((ang * Math.PI) / 180)) / (r * r);
          return {
            q: `Yorug'lik kuchi I = ${I} cd manbadan r = ${r} m masofadagi maydonchaga nurlar ${ang}° burchak ostida tushmoqda. Yoritilganlikni (lx) hisoblang.`,
            correct: Number(E.toFixed(1)),
            unit: 'lx',
            explain: `E = (I·cos α) / r² = (${I}·cos ${ang}°) / ${r}² = ${E.toFixed(1)} lx.`,
          };
        },
      },
      {
        variants: [[50], [100], [250], [25]],
        build(i) {
          const [I] = this.variants[i];
          const phi = 4 * Math.PI * I;
          return {
            q: `Barcha yo'nalishlarda bir tekis nurlanuvchi I = ${I} cd manbaning to'liq yorug'lik oqimi necha lyumen? (π ≈ 3.14)`,
            correct: Math.round(4 * 3.14 * I),
            unit: 'lm',
            explain: `Φ = 4πI = 4 · 3.14 · ${I} = ${Math.round(4 * 3.14 * I)} lm (aniq π bilan ${phi.toFixed(0)} lm).`,
          };
        },
      },
    ],
  },
];
