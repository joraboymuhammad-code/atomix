// Kimyo 1-bo'lim: Umumiy va Nazariy Kimyo Asoslari (11 mavzu: C1A-1..C1A-5, C1B-1..C1B-3, C1C-1..C1C-3)

export const CHEM_SEC1_TOPICS = [
  {
    id: 'C1A-1', code: 'K1A.1', sectionId: 'csec-1', subsectionId: 'C1A',
    subsectionTitle: 'A. Kirish va Dastlabki Kimyoviy Tushunchalar',
    title: 'Kimyo fani, hodisalar va laboratoriya xavfsizligi',
    subtitle: 'Moddalar va ularning o‘zgarishlari, fizik va kimyoviy hodisalar, laboratoriya jihozlari va xavfsizlik qoidalari',
    theory: {
      overview:
        'Kimyo — moddalarning tarkibi, tuzilishi, xossalari hamda bir moddadan yangi tarkibli boshqa moddalarga aylanish jarayonlarini o‘rganuvchi fundamental fan. Fizik hodisalarda moddaning agregat holati yoki shakli o‘zgarsada, uning kimyoviy tarkibi saqlanadi (muz erishi, spirt bug‘lanishi). Kimyoviy hodisalar (reaksiyalar) da esa kimyoviy bog‘lar uzilib yangi bog‘lar hosil bo‘ladi; buning tashqi belgilari — cho‘kma tushishi, gaz ajralishi, rang o‘zgarishi, issiqlik yoki yorug‘lik chiqishidir. Laboratoriyada kolba, byuretka, pipetka, eksikator va tortish tarozilari bilan ishlashda qat’iy texnika xavfsizligi (kislotani suvga quyish, mo‘rili shkaf, himoya ko‘zoynagi) talab etiladi.',
      keyLaws: [
        { title: 'Fizik va kimyoviy hodisalar farqi', text: 'Fizik hodisada molekulalar tarkibi o‘zgarmaydi; kimyoviy reaksiyada boshlang‘ich moddalardan sifat jihatidan yangi moddalar hosil bo‘ladi.' },
        { title: 'Kislotalarni suyultirish qoidasi', text: 'Konsentrlangan sulfat kislotani ($H_2SO_4$) suyultirishda hech qachon suvni kislotaga quymaslik, balki ingichka oqim bilan kislotani sovuq suvga quyib aralashtirish kerak.' },
      ],
      formulas: [
        { latex: '\\rho = \\frac{m}{V}', name: 'Modda va eritma zichligi', symbols: 'm — massa (g), V — hajm (mL yoki sm³)' },
        { latex: '\\eta = \\frac{m_{\\text{amal}}}{m_{\\text{naz}}} \\cdot 100\\%', name: 'Reaksiya mahsulot unumi', symbols: 'm_amal — tajriba massasi, m_naz — nazariy massa' },
      ],
      constants: [
        { name: 'Suvning standart zichligi (4 °C)', symbol: 'ρ(H₂O)', value: '1.000', unit: 'g/mL' },
        { name: 'Konsentrlangan H₂SO₄ (98%) zichligi', symbol: 'ρ(H₂SO₄)', value: '1.84', unit: 'g/mL' },
      ],
      applications: [
        'Farmatsevtika va tahliliy laboratoriyalarda byuretka va analitik tarozi yordamida aniq titrimetrik tahlil o‘tkaziladi.',
        'Kimyoviy xavfsizlik standartlari (GHS piktogrammalari) zaharli, yonuvchi va korroziy reagentlarni xavfsiz saqlashni ta’minlaydi.',
      ],
      calculator: {
        title: 'Reagent zichligi va reaksiya unumi hisoblagichi',
        formulaDisplay: 'm = ρ · V,   η = (m_amal / m_naz) · 100%',
        inputs: [
          { key: 'rho', label: 'Suyuqlik zichligi ρ', symbol: 'ρ', unit: 'g/mL', min: 0.6, max: 2.0, step: 0.05, default: 1.84 },
          { key: 'V', label: 'Hajm V', symbol: 'V', unit: 'mL', min: 10, max: 500, step: 10, default: 100 },
          { key: 'yieldPct', label: 'Reaksiya unumi', symbol: 'η', unit: '%', min: 10, max: 100, step: 5, default: 85 },
        ],
        compute: (v) => {
          const mass = v.rho * v.V;
          const actual = (mass * v.yieldPct) / 100;
          return { value: `${mass.toFixed(1)} g`, unit: '', summary: `To‘liq reagent massasi: ${mass.toFixed(1)} g | ${v.yieldPct}% unumda olinadigan massa: ${actual.toFixed(1)} g` };
        },
      },
    },
    simulation: {
      title: 'Virtual Kimyo Laboratoriyasi: Jihozlar, Reaktivlar va Xavfsizlik',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=separation',
      openSourceSource: 'ChemCollective · Amrita OLabs',
      openSourceNote: 'Laboratoriya idishlari, isitish jarayonlari va moddalar holatini 3D virtual laboratoriyada sinab ko‘ring.',
      alternateSims: [
        { label: 'Molekula 3D tuzilishi (3Dmol)', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=h2o' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Laboratoriya Termo-Reaktor va Xavfsizlik Indikatori',
        description: 'Reaktiv konsentratsiyasi va isitish haroratini o‘zgartirib, gaz ajralishi hamda xavfsiz harorat chegarasini kuzating.',
        controls: [
          { key: 'temp', label: 'Harorat', unit: '°C', min: 20, max: 120, step: 5, value: 65 },
          { key: 'conc', label: 'Reaktiv konsentratsiyasi', unit: 'M', min: 0.5, max: 5, step: 0.5, value: 2.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyidagilardan qaysi biri kimyoviy hodisaga misol bo‘ladi?', options: ['Muzning erishi', 'Temirning zanglashi', 'Suvning qaynashi', 'Shakar kristallarining maydalanishi'], answer: 1, explain: 'Temir zanglashida Fe oksidlanib yangi modda — temir (III) gidroksid/oksid hosil qiladi.' },
      { q: 'Konsentrlangan sulfat kislotani suyultirishda xavfsizlik qoidasi qanday?', options: ['Suvni kislotaga quyish', 'Kislotani ingichka oqim bilan sovuq suvga quyib aralashtirish', 'Qaynoq suvga quyish', 'Metall idishda aralashtirish'], answer: 1, explain: 'Suv kislotaga quyilsa kuchli issiqlik ajralishi tufayli bug‘lanib kislotani sachratadi; shuning uchun kislota suvga quyiladi.' },
      { q: 'Suyuqlik hajmini 0.01 mL gacha yuqori aniqlikda titrlab o‘lchaydigan idish nima?', options: ['Stakan', 'Byuretka', 'Tigellar', 'Voronka'], answer: 1, explain: 'Byuretka krani va millimetrli shkalasi orqali titrant hajmini aniq o‘lchash imkonini beradi.' },
      { q: 'Qaysi belgi kimyoviy reaksiya borayotganidan darak bermaydi?', options: ['Cho‘kma tushishi', 'Gaz pufakchalari ajralishi', 'Jism shaklini kesib o‘zgartirish', 'Rang o‘zgarishi'], answer: 2, explain: 'Jism shaklini mexanik o‘zgartirish modda tarkibini o‘zgartirmaydigan fizik hodisadir.' },
      { q: 'Zaharli yoki o‘tkir hidli gazlar (Cl₂, NH₃, HCl) bilan qayerda ishlanadi?', options: ['Ochiq deraza yonida', 'Mo‘rili shkaf (vytyajka) ostida', 'Tarozixona stolida', 'Oddiy xonada'], answer: 1, explain: 'Zaharsiz ishlash uchun barcha uchuvchan gazlar mo‘rili shkaf ichida olib boriladi.' },
      { q: 'Yuqori haroratda (1000 °C gacha) qizdirish va kuydirish uchun qaysi idish ishlatiladi?', options: ['Chinni tigel', 'Shisha kolba', 'Plastik mensurka', 'Pipetka'], answer: 0, explain: 'Chinni tigel issiqqa chidamli bo‘lib, mufl pechlarda va gorelka alangasida qizdirishga mos.' },
      { q: 'Moddalarni namlikdan saqlash va quritilgan namunalarni sovutish uchun qaysi asbob qo‘llaniladi?', options: ['Eksikator', 'Sovutkich (Libix)', 'Pipetka', 'Sentrifuga'], answer: 0, explain: 'Eksikator tubida quritgich (CaCl₂, silikagel) joylashgan germetik shisha idishdir.' },
      { q: 'Zichligi 1.2 g/mL bo‘lgan 250 mL eritmaning massasi necha grammga teng?', options: ['200 g', '250 g', '300 g', '350 g'], answer: 2, explain: 'm = ρ · V = 1.2 · 250 = 300 g.' },
    ],
    problems: [
      { variants: [[1.84, 50], [1.2, 150], [0.8, 250], [1.5, 200]], build(i) { const [r, V] = this.variants[i]; const m = r * V; return { q: `Zichligi ρ = ${r} g/mL bo‘lgan reagentdan V = ${V} mL olindi. Uning massasini (g) toping.`, correct: Number(m.toFixed(1)), unit: 'g', explain: `m = ρ·V = ${r}·${V} = ${m.toFixed(1)} g.` }; } },
      { variants: [[40, 50], [36, 45], [85, 100], [63, 70]], build(i) { const [ma, mn] = this.variants[i]; const y = (ma / mn) * 100; return { q: `Reaksiyada nazariy hisob bo‘yicha ${mn} g mahsulot olinishi kerak edi, amalda ${ma} g olindi. Reaksiya unumini (%) hisoblang.`, correct: Number(y.toFixed(1)), unit: '%', explain: `η = (${ma}/${mn})·100% = ${y.toFixed(1)}%.` }; } },
    ],
  },
  {
    id: 'C1A-2', code: 'K1A.2', sectionId: 'csec-1', subsectionId: 'C1A',
    subsectionTitle: 'A. Kirish va Dastlabki Kimyoviy Tushunchalar',
    title: 'Modda, aralashmalar va ularni ajratish usullari',
    subtitle: 'Sof moddalar, gomogen va geterogen aralashmalar, filtrlash, bug‘latish, distillyatsiya, xromatografiya',
    theory: {
      overview:
        'Tabiatda moddalar sof holda yoki aralashmalar ko‘rinishida uchraydi. Sof modda o‘zgarmas tarkib va fizik konstantalar (qaynash va suyuqlanish harorati, zichlik) ga ega. Aralashmalar bir jinsli — gomogen (tarkibiy qismlari mikroskopda ham ko‘rinmaydi: havo, tuz eritmasi) va har jinsli — geterogen (ajralish chegarasi aniq: qum-suv, neft-suv) bo‘ladi. Geterogen aralashmalar tindirish, filtrlash, magnitlash va sentrifugalash bilan; gomogen eritmalar esa bug‘latish, kristallash, fraksion distillyatsiya (qaynash harorati farqiga ko‘ra) hamda adsorbsiyaga asoslangan xromatografiya usullari bilan ajratiladi.',
      keyLaws: [
        { title: 'Gomogen vs Geterogen mezon', text: 'Gomogen tizimlarda fazalar chegarasi mavjud emas (zarracha < 1 nm); geterogen tizimlar ikki va undan ortiq fazadan iborat.' },
        { title: 'Distillyatsiya prinsipi', text: 'Suyuqliklar aralashmasi komponentlarining qaynash haroratlari ($T_{\\text{qayn}}$) farqi asosida navbatma-navbat bug‘lanib kondensatsiyalanishiga tayanadi.' },
      ],
      formulas: [
        { latex: 'w_{\\text{komp}} = \\frac{m_{\\text{komp}}}{m_{\\text{aralashma}}} \\cdot 100\\%', name: 'Aralashmadagi komponent ulushi', symbols: 'm_komp — ajratilgan komponent massasi' },
        { latex: 'R_f = \\frac{l_{\\text{modda}}}{l_{\\text{erituvchi}}}', name: 'Xromatografiya ushlab qolish koeffitsienti', symbols: '0 ≤ R_f ≤ 1 (komponent siljish nisbati)' },
      ],
      constants: [
        { name: 'Etanol qaynash harorati', symbol: 'T_q(C₂H₅OH)', value: '78.4', unit: '°C' },
        { name: 'Suv qaynash harorati (1 atm)', symbol: 'T_q(H₂O)', value: '100.0', unit: '°C' },
      ],
      applications: [
        'Neftni qayta ishlash zavodlarida rektifikatsiya kolonnasi orqali benzin, kerosin, dizel va mazut fraksiyalariga ajratiladi.',
        'Suyuqlik va gaz xromatografiyasi qon tahlili, doping nazorati va oziq-ovqat sifatini tekshirishda qo‘llaniladi.',
      ],
      calculator: {
        title: 'Xromatografiya R_f va aralashma tarkibi kalkulyatori',
        formulaDisplay: 'R_f = l_modda / l_erituvchi,   w = (m_A / m_jami) · 100%',
        inputs: [
          { key: 'lMod', label: 'Modda dog‘i yurgan masofa', symbol: 'l_m', unit: 'sm', min: 1, max: 20, step: 0.5, default: 6.0 },
          { key: 'lSolv', label: 'Erituvchi fronti masofasi', symbol: 'l_e', unit: 'sm', min: 5, max: 25, step: 0.5, default: 15.0 },
        ],
        compute: (v) => {
          const rf = Math.min(1, v.lMod / v.lSolv);
          return { value: `R_f = ${rf.toFixed(3)}`, unit: '', summary: `Modda erituvchi frontining ${(rf * 100).toFixed(1)}% yo‘lini bosib o‘tdi.` };
        },
      },
    },
    simulation: {
      title: 'Distillyatsiya, Filtrlash va Aralashmalarni Ajratish Virtual Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=separation',
      openSourceSource: 'Amrita OLabs · PhET',
      openSourceNote: 'Etanol va suv aralashmasini fraksion distillyatsiya qilish haroratini boshqaring.',
      alternateSims: [
        { label: 'Etanol molekulasi 3D (3Dmol)', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=c2h5oh' },
      ],
      parametric: {
        mode: 'chem_separation',
        title: 'Fraksion Distillyatsiya va Xromatografiya Stendi',
        description: 'Kolba qizish haroratini o‘zgartirib, past qaynashli fraksiyaning (78.4 °C) ajralishini kuzating.',
        controls: [
          { key: 'temp', label: 'Kolba harorati', unit: '°C', min: 25, max: 115, step: 1, value: 82 },
          { key: 'mixPct', label: 'Spirt ulushi', unit: '%', min: 10, max: 90, step: 5, value: 40 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi aralashma gomogen (bir jinsli) aralashma hisoblanadi?', options: ['Qum va suv', 'Osh tuzining suvdagi shaffof eritmasi', 'Moy va suv', 'Bo‘r va suv suspensiyasi'], answer: 1, explain: 'NaCl suvda ionlarga to‘liq erib ketadi va fazalar chegarasisiz bir jinsli tizim beradi.' },
      { q: 'Bir-biri bilan aralashmaydigan moy va suv aralashmasini qaysi asbob yordamida ajratish eng qulay?', options: ['Ajratish voronkasi', 'Distillyatsiya kolbasi', 'Qog‘oz filtr', 'Kristallizator'], answer: 0, explain: 'Zichligi turlicha va aralashmaydigan suyuqliklar ajratish voronkasida qavatlanib, pastki kran orqali ajratiladi.' },
      { q: 'Spirt (78.4 °C) va suv (100 °C) aralashmasini qaysi usul bilan ajratiladi?', options: ['Filtrlash', 'Magnit bilan', 'Distillyatsiya (haydash)', 'Tindirish'], answer: 2, explain: 'Gomogen suyuq aralashma komponentlari qaynash harorati farqi asosida distillyatsiya bilan ajratiladi.' },
      { q: 'Daryo suvidagi loy va qum zarralarini tozalashda birinchi bo‘lib qaysi usul qo‘llaniladi?', options: ['Elektroliz', 'Tindirish va filtrlash', 'Xromatografiya', 'Sublimatsiya'], answer: 1, explain: 'Erimaydigan qattiq zarralar (geterogen aralashma) filtrlash bilan ajratiladi.' },
      { q: 'Sof modda aralashmadan nimasi bilan farq qiladi?', options: ['O‘zgarmas qaynash/erish harorati va doimiy tarkibiga ega', 'Har doim rangli bo‘ladi', 'Ajratib bo‘lmaydi', 'Faqat gaz holatda bo‘ladi'], answer: 0, explain: 'Sof modda fizik doimiylarining keskinligi va kimyoviy tarkib bir xilligi bilan ajralib turadi.' },
      { q: 'Neftni benzin, kerosin va dizelga ajratish sanoatda qaysi jarayonga asoslangan?', options: ['Filtrlash', 'Fraksion rektifikatsiya (haydash)', 'Kristallash', 'Gidroliz'], answer: 1, explain: 'Neft tarkibidagi uglevodorodlar qaynash harorati bo‘yicha rektifikatsiya minorasida fraksiyalarga ajratiladi.' },
      { q: 'Murakkab bo‘yoqlar yoki o‘simlik pigmentlarini juda kichik miqdorda tahlil qilib ajratish usuli nima?', options: ['Xromatografiya', 'Bug‘latish', 'Dekantatsiya', 'Magnitlash'], answer: 0, explain: 'Xromatografiya harakatchan va qo‘zg‘almas fazalar orasida moddalarning turlicha sorbsiyalanish tezligiga asoslanadi.' },
      { q: '120 g aralashmada 30 g tuz va 90 g qum bor. Tuzning massa ulushi necha foiz?', options: ['20%', '25%', '33.3%', '75%'], answer: 1, explain: 'w = (30 / 120) · 100% = 25%.' },
    ],
    problems: [
      { variants: [[8, 16], [6, 15], [12, 20], [5, 25]], build(i) { const [lm, le] = this.variants[i]; const rf = lm / le; return { q: `Xromatografiyada bo‘yoq dog‘i ${lm} sm, erituvchi fronti ${le} sm siljidi. R_f qiymatini toping.`, correct: Number(rf.toFixed(2)), unit: '', explain: `R_f = ${lm} / ${le} = ${rf.toFixed(2)}.` }; } },
      { variants: [[40, 160], [25, 100], [18, 120], [45, 150]], build(i) { const [ma, mt] = this.variants[i]; const w = (ma / mt) * 100; return { q: `Massasi ${mt} g bo‘lgan qum-tuz aralashmasidan bug‘latish yo‘li bilan ${ma} g sof tuz ajratib olindi. Tuzning ulushini (%) toping.`, correct: Number(w.toFixed(1)), unit: '%', explain: `w = (${ma}/${mt})·100% = ${w.toFixed(1)}%.` }; } },
    ],
  },
  {
    id: 'C1A-3', code: 'K1A.3', sectionId: 'csec-1', subsectionId: 'C1A',
    subsectionTitle: 'A. Kirish va Dastlabki Kimyoviy Tushunchalar',
    title: 'Atom, molekula va nisbiy massalar (Ar, Mr)',
    subtitle: 'Kimyoviy elementlar va ularning belgilari, nisbiy atom massa (Ar), nisbiy molekulyar massa (Mr), oddiy va murakkab moddalar',
    theory: {
      overview:
        'Atom — kimyoviy elementning barcha kimyoviy xossalarini saqlab qoluvchi eng kichik bo‘linmas (kimyoviy jihatdan) zarrachasidir. Bir xil yadro zaryadiga ega atomlar turi kimyoviy element deb ataladi. Molekula — moddaning kimyoviy xossalarini o‘zida saqlovchi, mustaqil mavjud bo‘la oladigan eng kichik zarracha. Bir element atomlaridan tuzilgan moddalar oddiy moddalar ($O_2, O_3, Fe, P_4$), ikki va undan ortiq har xil element atomlaridan iborat moddalar murakkab moddalar ($H_2O, H_2SO_4$) deyiladi. Nisbiy atom massa $A_r$ element atomi massasining uglerod-12 ($^{12}C$) atomi massasining $1/12$ qismiga nisbati; nisbiy molekulyar massa $M_r$ esa molekula tarkibidagi atomlar $A_r$ lari yig‘indisiga teng.',
      keyLaws: [
        { title: 'Allotropiya hodisasi', text: 'Bitta kimyoviy elementning bir necha xil oddiy modda (masalan, kislorod $O_2$ va ozon $O_3$; uglerod: olmos va grafit) hosil qilish xususiyati.' },
        { title: 'Nisbiy molekulyar massa', text: '$M_r(A_x B_y) = x \\cdot A_r(A) + y \\cdot A_r(B)$ (o‘lchamsiz nisbiy kattalik).' },
      ],
      formulas: [
        { latex: '1\\text{ u} = \\frac{1}{12} m_a(^{12}\\text{C}) = 1.6605\\cdot 10^{-27}\\text{ kg}', name: 'Atom massa birligi (m.a.b.)', symbols: 'Uglerod shkalasi etaloni' },
        { latex: 'M_r = \\sum_i n_i \\cdot A_r(E_i)', name: 'Nisbiy molekulyar massa', symbols: 'n_i — formuladagi indeks soni' },
      ],
      constants: [
        { name: 'Vodorod, Uglerod, Kislorod, Oltingugurt A_r', symbol: 'A_r(H, C, O, S)', value: '1, 12, 16, 32', unit: 'm.a.b.' },
        { name: 'Kalsiy, Temir, Mis, Xlor A_r', symbol: 'A_r(Ca, Fe, Cu, Cl)', value: '40, 56, 64, 35.5', unit: 'm.a.b.' },
      ],
      applications: [
        'Mass-spektrometriyada izotoplar va murakkab oqsil molekulalari massasi m.a.b. (Dalton) da o‘lchanadi.',
        'Kimyoviy reaksiyalarda molyar hisoblashlar uchun modda formulasi bo‘yicha aniq $M_r$ topish birinchi qadamdir.',
      ],
      calculator: {
        title: 'Nisbiy molekulyar massa (Mr) hisoblagichi: C_x H_y O_z N_k',
        formulaDisplay: 'M_r = 12x + 1y + 16z + 14k',
        inputs: [
          { key: 'C', label: 'Uglerod (C) atomlari x', symbol: 'x', unit: 'ta', min: 0, max: 12, step: 1, default: 6 },
          { key: 'H', label: 'Vodorod (H) atomlari y', symbol: 'y', unit: 'ta', min: 0, max: 24, step: 1, default: 12 },
          { key: 'O', label: 'Kislorod (O) atomlari z', symbol: 'z', unit: 'ta', min: 0, max: 12, step: 1, default: 6 },
          { key: 'N', label: 'Azot (N) atomlari k', symbol: 'k', unit: 'ta', min: 0, max: 6, step: 1, default: 0 },
        ],
        compute: (v) => {
          const mr = 12 * v.C + 1 * v.H + 16 * v.O + 14 * v.N;
          return { value: `M_r = ${mr}`, unit: 'g/mol', summary: `Uglerod: ${((12 * v.C / Math.max(1, mr)) * 100).toFixed(1)}% | Kislorod: ${((16 * v.O / Math.max(1, mr)) * 100).toFixed(1)}%` };
        },
      },
    },
    simulation: {
      title: '3D Molekula Tuzilishi: Suv, Ozon va Murakkab Moddalar (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=h2o',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Suv (H₂O), metan (CH₄) va glyukoza molekulalarining fazoviy atomlarini 3D aylantirib tahlil qiling.',
      alternateSims: [
        { label: 'Ammiak (NH₃) 3D modeli', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=nh3' },
        { label: 'CO₂ molekulasi 3D modeli', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=co2' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Atomlar va Molekulalar Termal Harakati',
        description: 'Moddadagi zarrachalarning haroratga bog‘liq kinetik faolligini kuzating.',
        controls: [
          { key: 'temp', label: 'Harorat', unit: '°C', min: 10, max: 150, step: 10, value: 40 },
          { key: 'conc', label: 'Zarrachalar zichligi', unit: 'M', min: 1, max: 5, step: 1, value: 3 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyidagilardan qaysi biri oddiy modda hisoblanadi?', options: ['Suv (H₂O)', 'Ozon (O₃)', 'Karbonat angidrid (CO₂)', 'Ammiak (NH₃)'], answer: 1, explain: 'Ozon (O₃) faqat bitta element — kislorod atomlaridan tuzilgani uchun oddiy modda hisoblanadi.' },
      { q: 'Sulfat kislotaning ($H_2SO_4$) nisbiy molekulyar massasi $M_r$ nechaga teng? (H=1, S=32, O=16)', options: ['64', '82', '98', '100'], answer: 2, explain: 'M_r(H₂SO₄) = 2·1 + 32 + 4·16 = 98.' },
      { q: 'Atom massa birligi (1 m.a.b.) qaysi etalonga asosan kiritilgan?', options: ['Vodorod-1 atomi massasiga', 'Kislorod-16 atomining 1/16 qismiga', 'Uglerod-12 atomi massasining 1/12 qismiga', 'Azot-14 massasiga'], answer: 2, explain: 'Zamonaviy Xalqaro kimyoda 1 m.a.b. = ¹²C atomi massasining 1/12 qismiga teng.' },
      { q: 'Kalsiy karbonat ($CaCO_3$) tarkibida jami nechta atom bor? (Ca=40, C=12, O=16)', options: ['3 ta', '4 ta', '5 ta', '6 ta'], answer: 2, explain: '1 ta Ca + 1 ta C + 3 ta O = 5 ta atom; M_r = 40 + 12 + 48 = 100.' },
      { q: 'Bitta kimyoviy elementning bir necha oddiy moddalar ko‘rinishida uchrashi nima deyiladi?', options: ['Izomeriya', 'Allotropiya', 'Dissotsilanish', 'Polimerlanish'], answer: 1, explain: 'Masalan, uglerod olmos va grafit shaklida, kislorod O₂ va O₃ shaklida allotropiya hosil qiladi.' },
      { q: 'Glyukoza ($C_6H_{12}O_6$) ning nisbiy molekulyar massasi nechaga teng?', options: ['160', '180', '200', '342'], answer: 1, explain: 'M_r = 6·12 + 12·1 + 6·16 = 72 + 12 + 96 = 180.' },
      { q: 'Temir (Fe) elementining lotincha nomi va kimyoviy belgisi nima?', options: ['Ferrum (Fe)', 'Cuprum (Cu)', 'Argentum (Ag)', 'Plumbum (Pb)'], answer: 0, explain: 'Temir — Ferrum (Fe), Mis — Cuprum (Cu), Kumush — Argentum (Ag).' },
      { q: 'Moddaning kimyoviy xossalarini saqlovchi eng kichik zarrachasi odatda nima deb ataladi?', options: ['Proton', 'Molekula', 'Kvark', 'Foton'], answer: 1, explain: 'Molekulyar tuzilishli moddalarda kimyoviy xossalar molekula darajasida saqlanadi.' },
    ],
    problems: [
      { variants: [[98], [180], [342], [100]], build(i) { const map = [[98, 'H₂SO₄'], [180, 'C₆H₁₂O₆'], [342, 'C₁₂H₂₂O₁₁'], [100, 'CaCO₃']]; const [mr, f] = map[i]; return { q: `${f} murakkab moddasining nisbiy molekulyar massasi (M_r) nechaga teng?`, correct: mr, unit: '', explain: `Atomlar nisbiy massalari yig‘indisidan M_r(${f}) = ${mr}.` }; } },
      { variants: [[3, 4], [2, 3], [4, 2], [5, 1]], build(i) { const [c, o] = this.variants[i]; const mr = 12 * c + 16 * o; return { q: `C_${c}H_0O_${o} tarkibli oksid/radikal bo‘lagining molekulyar massasi nechaga teng? (C=12, O=16)`, correct: mr, unit: '', explain: `${c}·12 + ${o}·16 = ${mr}.` }; } },
    ],
  },
  {
    id: 'C1A-4', code: 'K1A.4', sectionId: 'csec-1', subsectionId: 'C1A',
    subsectionTitle: 'A. Kirish va Dastlabki Kimyoviy Tushunchalar',
    title: 'Kimyoviy formulalar, valentlik va oksidlanish darajasi',
    subtitle: 'Valentlik, oksidlanish darajasi, moddaning massa ulushi, kimyoviy tenglamalar tuzish va koeffitsiyentlar qo‘yish',
    theory: {
      overview:
        'Valentlik — element atomining boshqa element atomlarining ma’lum sonini biriktirib olish qobiliyati (bog‘lar soni, butun va ishorasiz: H — I, O — II, Al — III, C — IV). Oksidlanish darajasi (OD) esa birikmadagi elektronlarning ko‘proq elektromanfiy atom tomon siljishiga qarab hisoblanadigan shartli zaryad bo‘lib, musbat, manfiy, nol yoki kasr bo‘lishi mumkin (oddiy moddada 0, neytral molekulada OD lar yig‘indisi 0 ga teng). Moddadagi elementning massa ulushi $w(E) = (n \\cdot A_r(E))/M_r$ formula bilan topiladi; kimyoviy tenglamalarni tenglashtirishda esa reaksiyaga kirishuvchi va hosil bo‘luvchi barcha atomlar soni teng bo‘lishi shart.',
      keyLaws: [
        { title: 'Valentlik va elektroneytrallik qoidasi', text: 'Binar birikma $A_x B_y$ da $x \\cdot \\text{Val}(A) = y \\cdot \\text{Val}(B)$; neytral molekulada barcha atomlar oksidlanish darajalarining yig‘indisi nolga teng ($\\sum \\text{OD} = 0$).' },
        { title: 'Doimiy oksidlanish darajalari', text: 'Ftor (F) birikmalarda doimo $-1$, ishqoriy metallar $+1$, ishqoriy-yer metallar $+2$, kislorod ko‘pincha $-2$ ($OF_2$ da $+2$, peroksidlarda $-1$), vodorod ko‘pincha $+1$ (gidridlarda $-1$).' },
      ],
      formulas: [
        { latex: 'w(E) = \\frac{n \\cdot A_r(E)}{M_r} \\cdot 100\\%', name: 'Elementning massa ulushi', symbols: 'n — atomlar indeksi' },
        { latex: '\\sum_i n_i \\cdot \\text{OD}_i = 0', name: 'Oksidlanish darajalari balansi', symbols: 'Neytral molekula uchun' },
      ],
      constants: [
        { name: 'Ftorning oksidlanish darajasi', symbol: 'OD(F)', value: '−1', unit: '(barcha birikmada)' },
        { name: 'Kislorodning asosiy valentligi', symbol: 'Val(O)', value: 'II', unit: '(OD odatda −2)' },
      ],
      applications: [
        'Mineral o‘g‘itlarda (masalan, selitra $NH_4NO_3$ va karbamid) ozuqa elementi azotning massa ulushini hisoblash agronomiyada asosiy mezon.',
        'Kimyoviy sintez zavodlarida tenglashtirilgan reaksiya koeffitsiyentlari bo‘yicha xomashyo me’yori belgilanadi.',
      ],
      calculator: {
        title: 'Kaliy permanganat / Sulfat turidagi birikmada OD va massa ulushi',
        formulaDisplay: 'w(O) = (4·16 / M_r) · 100%,   OD(Markaziy) = 2z − x',
        inputs: [
          { key: 'z', label: 'Kislorod atomlari soni z (H_x E O_z)', symbol: 'z', unit: 'ta', min: 1, max: 7, step: 1, default: 4 },
          { key: 'x', label: 'Vodorod/K⁺ (+1) atomlari soni x', symbol: 'x', unit: 'ta', min: 1, max: 3, step: 1, default: 2 },
          { key: 'Ae', label: 'Markaziy element A_r(E)', symbol: 'A_r', unit: 'g/mol', min: 12, max: 185, step: 1, default: 32 },
        ],
        compute: (v) => {
          const od = 2 * v.z - v.x;
          const mr = v.x + v.Ae + 16 * v.z;
          const wO = ((16 * v.z) / mr) * 100;
          return { value: `OD(E) = +${od}`, unit: '', summary: `M_r = ${mr} | Kislorod ulushi w(O) = ${wO.toFixed(1)}%` };
        },
      },
    },
    simulation: {
      title: 'PhET Tenglamalar Tenglashtirish va Stoxiometriya Simulyatori',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=stoichiometry',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'PhET HTML5 tenglamalarni tenglashtirish simulyatoriga o‘ting yoki virtual reaksiyada koeffitsiyentlarni tekshiring.',
      alternateSims: [
        { label: 'CO₂ molekulasi 3D bog‘lari', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=co2' },
      ],
      parametric: {
        mode: 'chem_stoichiometry',
        title: 'Kimyoviy Tenglama Balansi: 2H₂ + O₂ → 2H₂O',
        description: 'Boshlang‘ich H₂ va O₂ mollarini o‘zgartirib, ortib qoluvchi reagent va hosil bo‘lgan suvni kuzating.',
        controls: [
          { key: 'nH2', label: 'Vodorod H₂', unit: 'mol', min: 1, max: 10, step: 1, value: 4 },
          { key: 'nO2', label: 'Kislorod O₂', unit: 'mol', min: 1, max: 6, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kaliy permanganat ($KMnO_4$) tarkibidagi marganetsning oksidlanish darajasi nechaga teng?', options: ['+2', '+4', '+6', '+7'], answer: 3, explain: '+1 + x + 4·(−2) = 0 => x = +7.' },
      { q: 'Metan ($CH_4$) molekulasida uglerodning valentligi va oksidlanish darajasi qanday?', options: ['Valentlik IV, OD = −4', 'Valentlik II, OD = +2', 'Valentlik IV, OD = +4', 'Valentlik I, OD = −1'], answer: 0, explain: 'Uglerod 4 ta H bilan bog‘langan (valentlik IV), C elektromanfiyroq bo‘lgani uchun OD = −4.' },
      { q: '$H_2SO_4$ molekulasida oltingugurtning oksidlanish darajasi qancha?', options: ['+2', '+4', '+6', '−2'], answer: 2, explain: '2·(+1) + x + 4·(−2) = 0 => x = +6.' },
      { q: 'Al₂(SO₄)₃ (alyuminiy sulfat) formulasida barcha atomlar soni nechta?', options: ['12', '15', '17', '19'], answer: 2, explain: '2 ta Al + 3 ta S + 12 ta O = 17 ta atom.' },
      { q: '$\_Fe + \_Cl_2 \\to \_FeCl_3$ tenglamasidagi koeffitsiyentlar yig‘indisi nechaga teng?', options: ['5', '6', '7', '8'], answer: 2, explain: '2Fe + 3Cl₂ → 2FeCl₃; koeffitsiyentlar yig‘indisi 2 + 3 + 2 = 7.' },
      { q: 'Suv ($H_2O$) dagi kislorodning massa ulushi necha foizga teng? (H=1, O=16)', options: ['11.1%', '50%', '88.9%', '94.1%'], answer: 2, explain: 'M_r(H₂O) = 18; w(O) = (16 / 18) · 100% ≈ 88.9%.' },
      { q: 'Peroksidlar (masalan, $H_2O_2$) da kislorodning oksidlanish darajasi nechaga teng?', options: ['−2', '−1', '+1', '+2'], answer: 1, explain: 'Peroksid bog‘i (−O−O−) hisobiga 2·(+1) + 2x = 0 => x = −1.' },
      { q: 'Azot (II) oksid ($NO$) da azotning valentligi va oksidlanish darajasi qanday?', options: ['Valentlik II, OD = +2', 'Valentlik III, OD = +3', 'Valentlik V, OD = +5', 'Valentlik I, OD = +1'], answer: 0, explain: 'Kislorod −2 bo‘lgani uchun azot +2 OD ga va II valentlikka ega.' },
    ],
    problems: [
      { variants: [[1, 4], [2, 7], [1, 3], [2, 4]], build(i) { const [x, z] = this.variants[i]; const od = 2 * z - x; return { q: `H_${x}E O_${z} formulasida E elementining oksidlanish darajasini (+) toping.`, correct: od, unit: '', explain: `${x}·(+1) + OD + ${z}·(−2) = 0 => OD = +${od}.` }; } },
      { variants: [[40, 100], [32, 80], [28, 80], [24, 60]], build(i) { const [elM, mr] = this.variants[i]; const w = (elM / mr) * 100; return { q: `M_r = ${mr} bo‘lgan murakkab moddada ma’lum element massasi ${elM} ga teng. Shu elementning massa ulushini (%) toping.`, correct: Number(w.toFixed(1)), unit: '%', explain: `w = (${elM}/${mr})·100% = ${w.toFixed(1)}%.` }; } },
    ],
  },
  {
    id: 'C1A-5', code: 'K1A.5', sectionId: 'csec-1', subsectionId: 'C1A',
    subsectionTitle: 'A. Kirish va Dastlabki Kimyoviy Tushunchalar',
    title: 'Kimyoning asosiy stexiometrik qonunlari',
    subtitle: 'Massaning saqlanish qonuni, tarkibning doimiylik qonuni, Avogadro qonuni, molyar massa, molyar hajm',
    theory: {
      overview:
        'Kimyoning miqdoriy poydevori stexiometrik qonunlarga tayanadi. M.V. Lomonosov va A. Lavuazye ochgan Massaning saqlanish qonuni: reaksiyaga kirishgan moddalar massasi hosil bo‘lgan moddalar massasiga teng ($\\sum m_{\\text{bosh}} = \\sum m_{\\text{mahs}}$). J. Prustning Tarkibning doimiylik qonuni: molekulyar tuzilishli har qanday sof modda olinish usulidan qat’i nazar doimiy sifat va miqdoriy tarkibga ega. 1 mol moddada $N_A = 6.022\\cdot 10^{23}$ ta zarracha mavjud. Avogadro qonuniga ko‘ra, bir xil sharoitda (harorat va bosim teng) har xil gazlarning teng hajmlarida teng miqdordagi molekulalar bo‘ladi; normal sharoitda (n.sh.: $0^\\circ\\text{C}, 101.3\\text{ kPa}$) 1 mol har qanday ideal gazning molyar hajmi $V_m = 22.4\\text{ L/mol}$ ga teng.',
      keyLaws: [
        { title: 'Massaning saqlanish qonuni', text: 'Reaksiyada atomlar yo‘qolmaydi va yangidan yaratilmaydi — faqat qayta guruhlanadi, shuning uchun umumiy massa saqlanadi.' },
        { title: 'Avogadro qonuni va zichliklar', text: 'Bir xil $T, P$ da gazlar zichliklari nisbati ularning molyar massalari nisbatiga teng: $D_{B}(A) = M_A / M_B$ (masalan, havoga nisbatan $D_{\\text{havo}} = M / 29$).' },
      ],
      formulas: [
        { latex: 'n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{V_m}', name: 'Modda miqdori (mol) formulalari', symbols: 'M — molyar massa (g/mol), V_m = 22.4\\text{ L/mol}' },
        { latex: 'D_{\\text{havo}} = \\frac{M_{\\text{gaz}}}{29}', name: 'Gazning havoga nisbatan zichligi', symbols: 'M_havo ≈ 29 g/mol' },
      ],
      constants: [
        { name: 'Avogadro doimiysi', symbol: 'N_A', value: '6.022 × 10²³', unit: 'mol⁻¹' },
        { name: 'Gazning n.sh. dagi molyar hajmi', symbol: 'V_m', value: '22.4', unit: 'L/mol' },
        { name: 'Havoning o‘rtacha molyar massasi', symbol: 'M_havo', value: '29.0', unit: 'g/mol' },
      ],
      applications: [
        'Sanoat ammiak va sulfat kislota sintezida gaz hajmlari va massalarini stexiometrik hisoblash tannarxni belgilaydi.',
        'Avtomobil xavfsizlik yostiqchalarida ($2NaN_3 \\to 2Na + 3N_2$) millisekundlarda aniq litr azot gazi hosil qilish mol hisobiga asoslanadi.',
      ],
      calculator: {
        title: 'Mol, Massa, Hajm (n.sh.) va Zarrachalar Soni Kalkulyatori',
        formulaDisplay: 'n = m / M,   V = n · 22.4 L,   N = n · 6.022·10²³',
        inputs: [
          { key: 'mass', label: 'Modda massasi m', symbol: 'm', unit: 'g', min: 1, max: 200, step: 1, default: 44 },
          { key: 'M', label: 'Molyar massa M', symbol: 'M', unit: 'g/mol', min: 2, max: 120, step: 1, default: 44 },
        ],
        compute: (v) => {
          const n = v.mass / v.M;
          const vol = n * 22.4;
          const Dh = v.M / 29;
          return { value: `${n.toFixed(2)} mol`, unit: '', summary: `Gaz hajmi (n.sh.): ${vol.toFixed(1)} L | Havoga nisbatan zichlik: ${Dh.toFixed(2)} | Molekulalar: ${(n * 6.022).toFixed(2)}×10²³` };
        },
      },
    },
    simulation: {
      title: 'Stoxiometriya va Gazlar Hajmiy Nisbati Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=stoichiometry',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Reaksiyada modda mollari va hosil bo‘ladigan mahsulotlar nisbatini interaktiv tekshiring.',
      alternateSims: [
        { label: 'Ideal gaz hajmi va mol soni (Effectuall)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html' },
      ],
      parametric: {
        mode: 'chem_stoichiometry',
        title: 'Avogadro Qonuni va Mollar Nisbati Stendi',
        description: 'Vodorod va kislorod mollarini sozlab, reaksiya mahsuloti hamda hajm o‘zgarishini kuzating.',
        controls: [
          { key: 'nH2', label: 'H₂ miqdori', unit: 'mol', min: 1, max: 10, step: 1, value: 6 },
          { key: 'nO2', label: 'O₂ miqdori', unit: 'mol', min: 1, max: 6, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Normal sharoitda (n.sh.) 1 mol har qanday gaz qancha hajmni egallaydi?', options: ['11.2 L', '22.4 L', '44.8 L', '6.02 L'], answer: 1, explain: 'Avogadro qonuniga ko‘ra n.sh. da 1 mol gaz hajmi V_m = 22.4 L/mol.' },
      { q: '88 g karbonat angidrid ($CO_2$, M = 44 g/mol) n.sh. da necha litr hajm egallaydi?', options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'], answer: 2, explain: 'n = 88/44 = 2 mol; V = 2 · 22.4 = 44.8 L.' },
      { q: 'Havoga ($M = 29$) nisbatan zichligi 1.517 ga teng bo‘lgan gazning molyar massasi taxminan qancha?', options: ['16 g/mol', '28 g/mol', '44 g/mol', '64 g/mol'], answer: 2, explain: 'M = 1.517 · 29 ≈ 44 g/mol (CO₂ yoki C₃H₈).' },
      { q: 'Avogadro doimiysi $N_A$ nimaga teng?', options: ['6.02·10²³ mol⁻¹', '1.6·10⁻¹⁹ mol⁻¹', '8.31 J/(mol·K)', '22.4 L/mol'], answer: 0, explain: '1 mol modda tarkibidagi struktura birliklari soni N_A = 6.022·10²³ ta.' },
      { q: 'Massaning saqlanish qonunini tajriba asosida kimlar isbotlagan?', options: ['Dalton va Bor', 'Lomonosov va Lavuazye', 'Mendeleyev va Prust', 'Avogadro va Faradey'], answer: 1, explain: 'M. Lomonosov (1748) va A. Lavuazye (1789) yopiq idishdagi reaksiyada massa saqlanishini isbotlagan.' },
      { q: '0.5 mol metan ($CH_4$) ning massasi necha grammga teng? (M = 16 g/mol)', options: ['4 g', '8 g', '16 g', '32 g'], answer: 1, explain: 'm = n · M = 0.5 · 16 = 8 g.' },
      { q: '67.2 L (n.sh.) azot gazida ($N_2$) nechta mol modda bor?', options: ['1.5 mol', '2 mol', '3 mol', '4 mol'], answer: 2, explain: 'n = V / 22.4 = 67.2 / 22.4 = 3 mol.' },
      { q: '10 g vodorod va 80 g kislorod to‘liq reaksiyaga kirishsa, necha gramm suv hosil bo‘ladi?', options: ['70 g', '80 g', '90 g', '100 g'], answer: 2, explain: 'Massa saqlanish qonuniga ko‘ra 10 + 80 = 90 g (10 g H₂ va 80 g O₂ = 5 mol va 2.5 mol, stexiometrik nisbat 2:1!).' },
    ],
    problems: [
      { variants: [[2, 44], [3, 32], [0.5, 98], [4, 18]], build(i) { const [n, M] = this.variants[i]; return { q: `${n} mol (M = ${M} g/mol) moddaning massasi necha grammga teng?`, correct: n * M, unit: 'g', explain: `m = n·M = ${n}·${M} = ${n * M} g.` }; } },
      { variants: [[44.8], [67.2], [11.2], [89.6]], build(i) { const [V] = this.variants[i]; const n = V / 22.4; return { q: `Normal sharoitda ${V} L gaz necha molga teng?`, correct: n, unit: 'mol', explain: `n = ${V} / 22.4 = ${n} mol.` }; } },
    ],
  },
  {
    id: 'C1B-1', code: 'K1B.1', sectionId: 'csec-1', subsectionId: 'C1B',
    subsectionTitle: 'B. Atom Tuzilishi va Davriy Qonun',
    title: 'Atom modellari, yadro tarkibi va izotoplar',
    subtitle: 'Tomson, Rezerford va Bor modellari, yadro tarkibi (proton, neytron, elektron), izotoplar, izobarlar',
    theory: {
      overview:
        'Atom tuzilishi haqidagi tasavvur J.J. Tomsonning "olxo‘rili puding" modelidan E. Rezerfordning 1911-yildagi planetar yadro modeliga va Nils Borning 1913-yildagi kvantlangan energetik sathlar nazariyasiga qadar rivojlandi. Atom markazida $Z$ ta musbat proton ($p^+$) va $N$ ta zaryadsiz neytrondan ($n^0$) tashkil topgan yadro, atrofida esa $Z$ ta manfiy elektron ($e^-$) joylashgan. Yadro zaryadi (tartib raqami $Z$) kimyoviy element turini belgilaydi. Protonlari ($Z$) bir xil, lekin neytronlari soni va demak massa soni ($A = Z + N$) turlicha bo‘lgan atomlar izotoplar ($^{12}_6C, ^{14}_6C$), massa soni $A$ bir xil ammo zaryadi $Z$ turlicha bo‘lganlari esa izobarlar ($^{40}_{18}Ar, ^{40}_{20}Ca$) deyiladi.',
      keyLaws: [
        { title: 'Atom tarkibiy formulasi', text: 'Neytral atomda: $p^+ = e^- = Z$ (element tartib raqami), neytronlar soni $N = A - Z$.' },
        { title: 'Izotop va Izobarlar', text: 'Izotoplarda $Z_1 = Z_2$, kimyoviy xossalar bir xil ($^{35}Cl, ^{37}Cl$). Izobarlarda $A_1 = A_2$, kimyoviy xossalari har xil.' },
      ],
      formulas: [
        { latex: 'A = Z + N, \\quad N = A - Z', name: 'Massa va nuklonlar tenglamasi', symbols: 'Z — protonlar, N — neytronlar' },
        { latex: '\\bar{A}_r = \\sum_i w_i A_i', name: 'Izotoplar bo‘yicha o‘rtacha atom massa', symbols: 'w_i — tabiiy ulush (masalan Cl: 35.5)' },
      ],
      constants: [
        { name: 'Xlor tabiiy o‘rtacha atom massasi', symbol: 'A_r(Cl)', value: '35.45', unit: 'm.a.b.' },
        { name: 'Proton va elektron nisbiy massasi', symbol: 'm_p / m_e', value: '1836', unit: '' },
      ],
      applications: [
        'Tabiiy xlor 75% $^{35}Cl$ va 25% $^{37}Cl$ izotoplaridan iborat bo‘lgani uchun jadvalda $A_r(Cl) = 35.5$ yoziladi.',
        'Tibbiyotda radioaktiv izotoplar ($^{99m}Tc$, $^{131}I$) tashxis va davolashda qo‘llaniladi.',
      ],
      calculator: {
        title: 'Yadro tarkibi (p, n, e) va o‘rtacha Ar hisoblagichi',
        formulaDisplay: 'N = A − Z,   A_o‘rt = w₁·A₁ + (1−w₁)·A₂',
        inputs: [
          { key: 'Z', label: 'Tartib raqami Z', symbol: 'Z', unit: '', min: 1, max: 92, step: 1, default: 17 },
          { key: 'A', label: 'Massa soni A', symbol: 'A', unit: '', min: 1, max: 238, step: 1, default: 35 },
          { key: 'charge', label: 'Ion zaryadi (+ yoki −)', symbol: 'q', unit: '', min: -4, max: 4, step: 1, default: 0 },
        ],
        compute: (v) => {
          const N = Math.max(0, v.A - v.Z);
          const e = Math.max(0, v.Z - v.charge);
          return { value: `${v.Z}p⁺ · ${N}n⁰ · ${e}e⁻`, unit: '', summary: `Proton: ${v.Z} | Neytron: ${N} | Elektron: ${e} | ${v.charge === 0 ? 'Neytral atom' : v.charge > 0 ? 'Kation' : 'Anion'}` };
        },
      },
    },
    simulation: {
      title: 'Bor Atomi va Element Yaratish 3D Simulyatori (Effectuall / PhET)',
      openSourceUrl: 'sims/effectuall/Quantum_The_Bohr_Atom.html',
      openSourceSource: 'Effectuall 3D Lab · PhET',
      openSourceNote: 'Atom yadrosi va elektron qavatlarini 3D aylantiring yoki PhET element qurish laboratoriyasiga o‘ting.',
      alternateSims: [
        { label: 'PhET Davriy Jadval va Atom (Z tanlash)', source: 'PhET · VLab', url: 'sims/chem3d/vlab.html?lab=periodic' },
      ],
      parametric: {
        mode: 'bohr_atom',
        title: 'Elektron Energetik Qavatlari va O‘tishlar',
        description: 'Elektron qavatlari orasidagi kvant o‘tishlarni va foton spektrini kuzating.',
        controls: [
          { key: 'nFrom', label: 'Yuqori qavat n', unit: '', min: 1, max: 5, step: 1, value: 4 },
          { key: 'nTo', label: 'Quyi qavat m', unit: '', min: 1, max: 5, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Xlor atomining $^{37}_{17}Cl$ izotopida nechta proton, neytron va elektron mavjud?', options: ['17 p, 17 n, 20 e', '17 p, 20 n, 17 e', '20 p, 17 n, 20 e', '37 p, 17 n, 17 e'], answer: 1, explain: 'Z = 17 => 17 proton va 17 elektron; N = 37 − 17 = 20 neytron.' },
      { q: 'Yadro modellari rivojlanishidagi to‘g‘ri xronologik ketma-ketlik qaysi?', options: ['Bor → Rezerford → Tomson', 'Tomson → Rezerford → Bor', 'Rezerford → Tomson → Bor', 'Bor → Tomson → Rezerford'], answer: 1, explain: 'Tomson (1904) → Rezerford yadro modeli (1911) → Bor kvant modeli (1913).' },
      { q: '$^{40}_{18}Ar$ va $^{40}_{20}Ca$ atomlari o‘zaro nima hisoblanadi?', options: ['Izotoplar', 'Izobarlar', 'Allotroplar', 'Izomerlar'], answer: 1, explain: 'Massa sonlari A = 40 bir xil, lekin proton soni Z turlicha — bular izobarlardir.' },
      { q: 'Tabiiy bor elementi 20% $^{10}B$ va 80% $^{11}B$ dan iborat. O‘rtacha atom massasi qancha?', options: ['10.2', '10.5', '10.8', '11.0'], answer: 2, explain: 'A_r = 0.2·10 + 0.8·11 = 2 + 8.8 = 10.8.' },
      { q: '$Al^{3+}$ (Z=13, A=27) ionida nechta elektron mavjud?', options: ['16', '13', '10', '27'], answer: 2, explain: 'Neytral Al da 13 ta elektron bor; 3 ta elektron bergach 13 − 3 = 10 ta qoladi.' },
      { q: 'Qaysi zarracha atomning qaysi elementga mansubligini bir qiymatli belgilaydi?', options: ['Neytronlar soni', 'Protonlar soni (Z)', 'Valentin bog‘lar', 'Massa soni'], answer: 1, explain: 'Kimyoviy element — bir xil yadro zaryadiga (Z ta protonga) ega atomlar turidir.' },
      { q: 'Vodorodning og‘ir izotopi deyteriy ($^2_1H$) yadrosida nechta neytron bor?', options: ['0', '1', '2', '3'], answer: 1, explain: 'N = 2 − 1 = 1 ta neytron (protiyda 0, tritiyda 2).' },
      { q: 'Rezerford oltin folga tajribasida α-zarralarning bir qismi orqaga qaytishi nimani isbotladi?', options: ['Atom bo‘sh emasligini', 'Atom markazida zich musbat yadro borligini', 'Elektron og‘irligini', 'Neytron zaryadsizligini'], answer: 1, explain: 'Kichik hajmli, lekin katta massali musbat yadrogina og‘ir α-zarralarni qaytara oladi.' },
    ],
    problems: [
      { variants: [[26, 56], [19, 39], [29, 64], [15, 31]], build(i) { const [Z, A] = this.variants[i]; return { q: `Element tartib raqami Z = ${Z}, massa soni A = ${A}. Yadrodagi neytronlar sonini toping.`, correct: A - Z, unit: 'ta', explain: `N = A − Z = ${A} − ${Z} = ${A - Z}.` }; } },
      { variants: [[75, 35, 37], [80, 11, 10], [50, 79, 81]], build(i) { const [w1, a1, a2] = this.variants[i]; const avg = (w1 * a1 + (100 - w1) * a2) / 100; return { q: `Element ${w1}% A=${a1} va ${100 - w1}% A=${a2} izotoplardan iborat. O‘rtacha atom massasini hisoblang.`, correct: Number(avg.toFixed(2)), unit: '', explain: `A_o‘rt = (${w1}·${a1} + ${100 - w1}·${a2})/100 = ${avg.toFixed(2)}.` }; } },
    ],
  },
  {
    id: 'C1B-2', code: 'K1B.2', sectionId: 'csec-1', subsectionId: 'C1B',
    subsectionTitle: 'B. Atom Tuzilishi va Davriy Qonun',
    title: 'Kvant sonlari, orbitallar va elektron konfiguratsiya',
    subtitle: 'Orbitallar shakli (s, p, d, f), elektron konfiguratsiya, Pauli prinsipi, Xund qoidasi, Klechkovskiy qoidasi',
    theory: {
      overview:
        'Kvant mexanikasida atomdagi har bir elektronning holati 4 ta kvant soni bilan tavsiflanadi: 1) Bosh kvant soni $n$ (1, 2, 3...) — energetik qavat va o‘lcham ($N_{\\max} = 2n^2$); 2) Orbital kvant soni $l$ ($0..n-1$) — orbital shaklini belgilaydi ($l=0 \\to s$ sfera, $l=1 \\to p$ gantel, $l=2 \\to d$, $l=3 \\to f$); 3) Magnit kvant soni $m_l$ ($-l..+l$) — fazoviy yo‘nalishlar soni ($2l+1$); 4) Spin kvant soni $m_s = \\pm 1/2$. Orbitallarning to‘lish tartibini Klechkovskiy qoidasi ($n+l$ o‘sish tartibida), sig‘imini Pauli prinsipi (bir orbitalda max 2 ta qarama-qarshi spinli elektron) va teng energetik kataklarni to‘ldirishni Xund qoidasi (yig‘indi spin maksimal bo‘lishi uchun avval bittadan joylashish) boshqaradi.',
      keyLaws: [
        { title: 'Pauli taqiqlash prinsipi', text: 'Bitta atomda barcha to‘rtta kvant soni ($n, l, m_l, m_s$) bir xil bo‘lgan ikkita elektron bo‘lishi mumkin emas; bitta orbitalda eng ko‘pi bilan 2 ta qarama-qarshi spinli elektron sig‘adi.' },
        { title: 'Klechkovskiy va Xund qoidalari', text: 'Elektronlar avval $(n+l)$ yig‘indisi kichik pog‘onachani to‘ldiradi (masalan, $4s$ ($4+0=4$) $3d$ ($3+2=5$) dan oldin to‘ladi). Teng energiyali $p, d, f$ kataklar avval parallel spin bilan bittadan band qilinadi.' },
      ],
      formulas: [
        { latex: 'N_{\\max}(n) = 2n^2', name: 'n-qavatdagi maksimal elektronlar soni', symbols: 'n=1: 2, n=2: 8, n=3: 18, n=4: 32' },
        { latex: 'N_{\\text{orb}}(l) = 2l + 1', name: 'Pog‘onachadagi orbitallar soni', symbols: 's: 1, p: 3, d: 5, f: 7' },
      ],
      constants: [
        { name: 'Xrom (Cr, Z=24) barqaror konfiguratsiyasi', symbol: 'Cr', value: '[Ar] 3d⁵ 4s¹', unit: '(elektron sakrashi)' },
        { name: 'Mis (Cu, Z=29) barqaror konfiguratsiyasi', symbol: 'Cu', value: '[Ar] 3d¹⁰ 4s¹', unit: '(to‘lgan d-qavat)' },
      ],
      applications: [
        'Juftlashmagan $d$-elektronlar soni orqali o‘tish metallar va tuzlarining paramagnit xossalari hamda rangdorligi bashorat qilinadi.',
        'Lazerlar va yarimo‘tkazgich diodlarning ishlashi atomlardagi kvant energetik qobiq o‘tishlariga asoslangan.',
      ],
      calculator: {
        title: 'Kvant Qavati va Orbital Sig‘imi Hisoblagichi',
        formulaDisplay: 'Max e⁻ = 2n²,   Pog‘ona sig‘imi = 2(2l + 1)',
        inputs: [
          { key: 'n', label: 'Bosh kvant soni n', symbol: 'n', unit: '', min: 1, max: 7, step: 1, default: 3 },
          { key: 'l', label: 'Orbital soni l (0=s, 1=p, 2=d, 3=f)', symbol: 'l', unit: '', min: 0, max: 3, step: 1, default: 2 },
        ],
        compute: (v) => {
          const validL = Math.min(v.l, v.n - 1);
          const names = ['s', 'p', 'd', 'f'];
          const maxLayer = 2 * v.n * v.n;
          const orbCount = 2 * validL + 1;
          return { value: `${v.n}${names[validL]} (max ${orbCount * 2} e⁻)`, unit: '', summary: `${v.n}-qavat sig‘imi: ${maxLayer} e⁻ | n+l = ${v.n + validL} | ${orbCount} ta orbital katakcha` };
        },
      },
    },
    simulation: {
      title: 'Vodorod va Kvant Orbitallari (s, p, d) 3D Simulyatori',
      openSourceUrl: 'sims/effectuall/Quantum_Hydrogen_Atom.html',
      openSourceSource: 'Effectuall 3D Lab · PhET',
      openSourceNote: 'Elektron bulutlari va energetik qavatlarni 3D kuzating yoki PhET element konstruktorini sinang.',
      alternateSims: [
        { label: 'PhET Elektron Qavatlar (Z=1..20)', source: 'PhET · VLab', url: 'sims/chem3d/vlab.html?lab=periodic' },
      ],
      parametric: {
        mode: 'bohr_atom',
        title: 'Atom Orbitallari Kvant Sathi Simulyatori',
        description: 'Kvant soni n ni o‘zgartirib, elektron qobiqlari radiusi va energiyasini kuzating.',
        controls: [
          { key: 'nFrom', label: 'Yuqori qavat n', unit: '', min: 1, max: 5, step: 1, value: 3 },
          { key: 'nTo', label: 'Asosiy qavat m', unit: '', min: 1, max: 5, step: 1, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: '$3$-energetik qavatda (n = 3) eng ko‘pi bilan nechta elektron sig‘ishi mumkin?', options: ['8', '18', '32', '50'], answer: 1, explain: 'N_max = 2n² = 2·3² = 18 ta elektron.' },
      { q: '$d$-pog‘onachada nechta orbital (kvant katakcha) va eng ko‘pi bilan nechta elektron bo‘ladi?', options: ['3 katakcha, 6 e⁻', '5 katakcha, 10 e⁻', '7 katakcha, 14 e⁻', '1 katakcha, 2 e⁻'], answer: 1, explain: 'd uchun l = 2 => orbitallar soni 2(2)+1 = 5 ta, jami 5·2 = 10 e⁻.' },
      { q: 'Klechkovskiy qoidasiga ko‘ra qaysi pog‘onacha oldinroq to‘ladi: $4s$ mi yoki $3d$ mi?', options: ['$3d$ oldin', '$4s$ oldin (n+l=4 < 5)', 'Bir vaqtda', 'Faqat ionlarda to‘ladi'], answer: 1, explain: '4s uchun n+l = 4+0 = 4; 3d uchun 3+2 = 5, demak 4s avval to‘ladi.' },
      { q: 'Uglerod atomi ($Z=6$, $1s^2 2s^2 2p^2$) ning normal holatida nechta toq (juftlashmagan) elektron bor?', options: ['0', '1', '2', '4'], answer: 2, explain: 'Xund qoidasiga ko‘ra 2p² da ikkita elektron 2 ta alohida p-orbitalga bittadan joylashadi -> 2 ta toq e⁻.' },
      { q: 'Sferik shaklga ega bo‘lgan elektron bulut qaysi harf bilan belgilanadi?', options: ['$s$', '$p$', '$d$', '$f$'], answer: 0, explain: 'l = 0 ga mos s-orbital sferik simmetriyaga, p-orbital esa gantel shakliga ega.' },
      { q: 'Bir orbitalda 2 ta elektron faqat qarama-qarshi spinga ega bo‘lishi qaysi prinsip bilan belgilanadi?', options: ['Avogadro qonuni', 'Pauli prinsipi', 'Gess qonuni', 'Xabbl qonuni'], answer: 1, explain: 'Pauli taqiqlash prinsipiga binoan bitta katakchada spinlar qarama-qarshi (+1/2 va −1/2) bo‘lishi shart.' },
      { q: 'Azot ($Z=7$) atomining $2p^3$ pog‘onachasida nechta juftlashmagan elektron mavjud?', options: ['1', '2', '3', '5'], answer: 2, explain: 'Xund qoidasiga ko‘ra uchta p-katakning har birida 1 tadan 3 ta toq elektron joylashadi.' },
      { q: '$1s^2 2s^2 2p^6 3s^2 3p^5$ elektron konfiguratsiya qaysi elementga tegishli?', options: ['Oltingugurt (S)', 'Xlor (Cl)', 'Argon (Ar)', 'Ftor (F)'], answer: 1, explain: '2+2+6+2+5 = 17 — bu davriy sistemadagi Xlor (Z=17).' },
    ],
    problems: [
      { variants: [[2], [3], [4], [5]], build(i) { const [n] = this.variants[i]; return { q: `Bosh kvant soni n = ${n} bo‘lgan energetik qavatda eng ko‘pi bilan nechta elektron joylasha oladi?`, correct: 2 * n * n, unit: 'e⁻', explain: `N_max = 2n² = 2·${n}² = ${2 * n * n}.` }; } },
      { variants: [[0], [1], [2], [3]], build(i) { const [l] = this.variants[i]; const names = ['s', 'p', 'd', 'f']; const maxE = 2 * (2 * l + 1); return { q: `${names[l]}-pog‘onachada (l=${l}) maksimal nechta elektron sig‘adi?`, correct: maxE, unit: 'e⁻', explain: `2·(2·${l} + 1) = ${maxE} ta elektron.` }; } },
    ],
  },
  {
    id: 'C1B-3', code: 'K1B.3', sectionId: 'csec-1', subsectionId: 'C1B',
    subsectionTitle: 'B. Atom Tuzilishi va Davriy Qonun',
    title: 'D.I. Mendeleyevning davriy qonuni va xossalar davriyligi',
    subtitle: 'Davriy jadval tuzilishi, davr va guruhlarda element xossalarining (atom radiusi, ionlanish energiyasi, elektromanfiylik) o‘zgarishi',
    theory: {
      overview:
        '1869-yilda D.I. Mendeleyev kashf etgan Davriy qonunning zamonaviy ta’rifi: kimyoviy elementlar va ular hosil qilgan oddiy hamda murakkab moddalarning xossalari atom yadrosi zaryadi ($Z$) oshib borishiga davriy ravishda bog‘liq. Davriy jadval 7 ta davr (gorizontal qatorlar — energetik qavatlar soni) va 18 ta (yoki I–VIII A/B) guruhdan iborat. Davrda chapdan o‘ngga borilgan sari yadro zaryadi ortib elektronlarni kuchliroq tortgani uchun atom radiusi kichrayadi, ionlanish energiyasi, elektromanfiylik (EN) va metallmaslik kuchayadi. Guruhda yuqoridan pastga tushilgan sari yangi qavatlar qo‘shilgani sabab atom radiusi kattalashadi, valentlik elektronlarini berish osonlashib metallik kuchayadi.',
      keyLaws: [
        { title: 'Davr bo‘yicha (chapdan o‘ngga)', text: 'Qavatlar soni o‘zgarmaydi, yadro zaryadi ortadi → Atom radiusi kamayadi, elektromanfiylik ($F = 4.0$ max) va kislotali xossa ortadi.' },
        { title: 'Guruh bo‘yicha (yuqoridan pastga)', text: 'Elektron qavatlar soni ortadi → Atom radiusi kattalashadi, ionlanish energiyasi kamayadi, metallik va qaytaruvchanlik ($Fr, Cs$ max) kuchayadi.' },
      ],
      formulas: [
        { latex: 'E \\to E^+ + e^- \\quad (I_1 > 0)', name: 'Birinchi ionlanish energiyasi', symbols: 'Guruh bo‘yicha pastga kamayadi' },
        { latex: 'E + e^- \\to E^- \\quad (\\text{EA})', name: 'Elektronga moyillik', symbols: 'Galogenlarda (Cl, F) maksimal' },
      ],
      constants: [
        { name: 'Eng yuqori elektromanfiylik (Poling)', symbol: 'χ(F)', value: '3.98', unit: '(Ftor)' },
        { name: 'Eng faol ishqoriy metall (davriy)', symbol: 'χ(Cs / Fr)', value: '0.79 / 0.7', unit: '(Seziy)' },
      ],
      applications: [
        'Mendeleyev davriy tizim yordamida hali ochilmagan elementlar (galliy, skandiy, germaniy) xossalarini ajoyib aniqlikda bashorat qilgan.',
        'Yarimo‘tkazgichlar (Si, Ge, GaAs) va litiy-ion batareya elektrodlari davriy guruhlardagi elektron tuzilishiga ko‘ra tanlanadi.',
      ],
      calculator: {
        title: 'Davriy Jadval Koordinatasi va Poling Bog‘ Qutbliligi (Δχ)',
        formulaDisplay: 'Δχ = |χ_B − χ_A|,   qutb: 0–0.4 kovalent · 0.4–1.7 qutbli · >1.7 ion',
        inputs: [
          { key: 'xa', label: '1-element elektromanfiyligi χ₁', symbol: 'χ₁', unit: '', min: 0.7, max: 4.0, step: 0.1, default: 0.9 },
          { key: 'xb', label: '2-element elektromanfiyligi χ₂', symbol: 'χ₂', unit: '', min: 0.7, max: 4.0, step: 0.1, default: 3.2 },
        ],
        compute: (v) => {
          const d = Math.abs(v.xb - v.xa);
          const type = d >= 1.7 ? 'Ion bog‘lanish (masalan, NaCl)' : d >= 0.4 ? 'Qutbli kovalent bog‘lanish' : 'Qutbsiz/kam qutbli kovalent';
          return { value: `Δχ = ${d.toFixed(2)}`, unit: '', summary: `Bog‘lanish xarakteri: ${type}` };
        },
      },
    },
    simulation: {
      title: 'Interaktiv Davriy Jadval va Atom Radiusi Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=periodic',
      openSourceSource: 'PhET Interactive Sims · VLab',
      openSourceNote: 'Tartib raqami Z ni o‘zgartirib, element qavati, radiusi va PhET Atom tuzilishi simulyatorini tekshiring.',
      alternateSims: [
        { label: 'Vodorod kvant sathlari (Effectuall)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Hydrogen_Atom.html' },
      ],
      parametric: {
        mode: 'chem_periodic',
        title: 'Davrlar Bo‘yicha Atom Radiusi va Elektromanfiylik',
        description: 'Tartib raqami Z = 1..20 bo‘ylab atom radiusining sakrab o‘zgarish grafigini kuzating.',
        controls: [
          { key: 'Z', label: 'Tartib raqam Z', unit: '', min: 1, max: 20, step: 1, value: 11 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Davriy sistemada eng yuqori elektromanfiylikka ega bo‘lgan element qaysi?', options: ['Kislorod (O)', 'Xlor (Cl)', 'Ftor (F)', 'Azot (N)'], answer: 2, explain: 'Ftor (χ ≈ 4.0) barcha elementlar ichida eng kichik radius va eng kuchli elektromanfiylikka ega.' },
      { q: 'Davrda chapdan o‘ngga borilgan sari atom radiusi qanday o‘zgaradi?', options: ['Ortadi', 'Kamayadi', 'O‘zgarmaydi', 'Avval ortib keyin kamayadi'], answer: 1, explain: 'Qavatlar soni o‘zgarmay, yadro zaryadi ortgani uchun elektron bulut yadroga kuchliroq tortilib radius kichrayadi.' },
      { q: 'Asosiy guruhcha (A guruh) da yuqoridan pastga tushgan sari metallik xossalar qanday o‘zgaradi?', options: ['Kamayadi', 'Kuchayadi', 'Yo‘qoladi', 'O‘zgarmaydi'], answer: 1, explain: 'Radius ortgani sari tashqi elektronlarni uzish osonlashadi va metallik kuchayadi (Li → Na → K → Rb → Cs).' },
      { q: 'Elementning davriy sistemadagi davr raqami nimani ko‘rsatadi?', options: ['Valentlikni', 'Atomdagi elektron qavatlar sonini', 'Neytronlar sonini', 'Izotoplar sonini'], answer: 1, explain: 'Davr raqami atomdagi to‘ldirilayotgan energetik qobiqlar (qavatlar) soniga teng.' },
      { q: 'Quyidagi elementlardan qaysi birining atom radiusi eng katta?', options: ['Litiy (Li)', 'Natriy (Na)', 'Kaliy (K)', 'Rubidiy (Rb)'], answer: 3, explain: 'I A guruhda eng pastda turgan Rb (5-davr) 5 ta elektron qavatga ega bo‘lib eng yirik radiusli.' },
      { q: 'Sirtqi elektron konfiguratsiyasi $3s^2 3p^4$ bo‘lgan element qaysi davr va guruhda joylashgan?', options: ['2-davr, IV guruh', '3-davr, VI A guruh (Oltingugurt)', '3-davr, IV A guruh', '4-davr, VI guruh'], answer: 1, explain: 'n=3 => 3-davr; tashqi 2+4 = 6 ta elektron => VI A guruh (S).' },
      { q: 'Biror davrda chapdan o‘ngga o‘tganda oksidlarning asosli xossasi qanday o‘zgaradi?', options: ['Kuchayadi', 'Asosli → Amfoter → Kislotali tomonga o‘tadi', 'Faqat amfoter qoladi', 'O‘zgarmaydi'], answer: 1, explain: 'Masalan 3-davrda: Na₂O (asosli) → MgO → Al₂O₃ (amfoter) → SiO₂ → P₂O₅ → SO₃ (kislotali).' },
      { q: 'Inert gazlar (VIII A guruh: He, Ne, Ar) kimyoviy faol emasligining sababi nima?', options: ['Tashqi elektron qavati to‘la (oktet/dublet) va barqaror', 'Yadrosi kichik', 'Zaryadi yo‘q', 'Faqat past haroratda bo‘ladi'], answer: 0, explain: 'ns²np⁶ barqaror oktet konfiguratsiyasi elektron berish yoki olishni energetik jihatdan noqulay qiladi.' },
    ],
    problems: [
      { variants: [[0.9, 3.0], [2.1, 3.5], [1.0, 4.0], [2.5, 2.5]], build(i) { const [a, b] = this.variants[i]; const d = Math.abs(b - a); return { q: `A (χ=${a}) va B (χ=${b}) elementlari orasidagi Poling elektromanfiyliklar farqini (Δχ) hisoblang.`, correct: Number(d.toFixed(2)), unit: '', explain: `Δχ = |${b} − ${a}| = ${d.toFixed(2)}.` }; } },
      { variants: [[3, 6], [4, 7], [2, 5], [3, 2]], build(i) { const [per, grp] = this.variants[i]; return { q: `${per}-davr ${grp}A guruh elementida nechta elektron qavat va tashqi qavatda nechta elektron bor? Yig‘indisini toping.`, correct: per + grp, unit: '', explain: `Qavatlar = ${per}, tashqi e⁻ = ${grp} => jami ${per + grp}.` }; } },
    ],
  },
  {
    id: 'C1C-1', code: 'K1C.1', sectionId: 'csec-1', subsectionId: 'C1C',
    subsectionTitle: 'C. Kimyoviy Bog‘lanish va Modda Tuzilishi',
    title: 'Kimyoviy bog‘lanish turlari',
    subtitle: 'Kovalent bog‘lanish (qutbli va qutbsiz, donor-akseptor mexanizm), ion bog‘lanish, metall bog‘lanish, vodorod bog‘lanish',
    theory: {
      overview:
        'Atomlar barqaror tashqi sakkizlik (oktet) yoki duplet elektron qavatiga erishish uchun o‘zaro kimyoviy bog‘ hosil qiladi. Kovalent bog‘lanish ikki atomning umumiy elektron juftlar hisobiga vujudga keladi: bir xil metallmaslar orasida qutbsiz ($H_2, N_2, Cl_2$), har xil metallmaslar orasida qutbli ($HCl, H_2O$) bo‘ladi. Agar elektron juft bitta atom (donor, masalan $NH_3$ dagi azot) tomonidan berilib, ikkinchisi (akseptor, masalan $H^+$) bo‘sh orbitalini taqdim etsa, donor-akseptor mexanizm hosil bo‘ladi ($NH_4^+$). Ion bog‘lanish elektrostatik tortishish natijasida ($\\Delta\\chi \\ge 1.7$, masalan $Na^+Cl^-$) qarama-qarshi zaryadli ionlar orasida yuzaga keladi. Metallarda erkin "elektron gazi" musbat kationlarni bog‘lab metall bog‘lanish beradi. $F, O, N$ kabi kuchli elektromanfiy elementlarga bog‘langan vodorod ishtirokida esa molekulalararo vodorod bog‘lanishi vujudga kelib, suv va DNK ga noyob xossalar beradi.',
      keyLaws: [
        { title: 'σ-bog‘ va π-bog‘', text: 'Atom markazlarini tutashtiruvchi o‘q bo‘ylab qoplangan bog‘ $\\sigma$-bog‘ (barcha yakka bog‘lar); o‘qning ikki tomonida yonlama qoplangan bog‘ $\\pi$-bog‘ (qo‘shbog‘da 1σ+1π, uchbog‘da 1σ+2π).' },
        { title: 'Vodorod bog‘lanish mezoni', text: 'Suvning ($100^\\circ C$) o‘xshashi $H_2S$ ($-60^\\circ C$) dan ancha yuqori haroratda qaynashi kuchli molekulalararo vodorod bog‘lari tufaylidir.' },
      ],
      formulas: [
        { latex: '\\mu = q \\cdot l', name: 'Bog‘ning dipol momenti', symbols: 'q — samarali zaryad, l — bog‘ uzunligi (Debay)' },
        { latex: 'E(\\text{H-bog‘}) \\approx 10\\text{–}40\\text{ kJ/mol}', name: 'Vodorod bog‘ energiyasi', symbols: 'Kovalent bog‘dan ~10 marta kuchsiz' },
      ],
      constants: [
        { name: 'N₂ molekulasidagi N≡N bog‘ energiyasi', symbol: 'E(N≡N)', value: '945', unit: 'kJ/mol' },
        { name: 'Suv molekulalari orasidagi H-bog‘', symbol: 'E(O−H···O)', value: '≈ 21', unit: 'kJ/mol' },
      ],
      applications: [
        'DNK qo‘sh spiralidagi ikki zanjir A=T va G≡C juftliklari orasidagi vodorod bog‘lari orqali mustahkam va qaytar tarzda tutashib turadi.',
        'Kevlar va neylon sintetik tolalarining o‘ta yuqori mustahkamligi zanjirlararo vodorod bog‘lari hisobigadir.',
      ],
      calculator: {
        title: 'σ va π Bog‘lar hamda Ionlilik Ulushi Kalkulyatori',
        formulaDisplay: 'Ionlilik % ≈ (1 − exp(−0.25·Δχ²)) · 100%',
        inputs: [
          { key: 'dx', label: 'Elektromanfiyliklar farqi Δχ', symbol: 'Δχ', unit: '', min: 0, max: 3.3, step: 0.1, default: 1.4 },
          { key: 'single', label: 'Yakka bog‘lar soni', symbol: 'n₁', unit: '', min: 0, max: 10, step: 1, default: 4 },
          { key: 'dbl', label: 'Qo‘shbog‘lar soni', symbol: 'n₂', unit: '', min: 0, max: 5, step: 1, default: 1 },
          { key: 'trp', label: 'Uchbog‘lar soni', symbol: 'n₃', unit: '', min: 0, max: 3, step: 1, default: 0 },
        ],
        compute: (v) => {
          const ionPct = (1 - Math.exp(-0.25 * v.dx * v.dx)) * 100;
          const sigma = v.single + v.dbl + v.trp;
          const pi = v.dbl + 2 * v.trp;
          return { value: `${sigma}σ, ${pi}π`, unit: '', summary: `Poling bo‘yicha ionlilik darajasi: ${ionPct.toFixed(1)}% | Jami bog‘lar: ${sigma + pi}` };
        },
      },
    },
    simulation: {
      title: 'Kovalent, Ion va Vodorod Bog‘lanishlari 3D Laboratoriyasi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=nh3',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Ammiak (NH₃), Suv (H₂O), NaCl ion panjarasi va Benzol π-bog‘larini 3D aylantirib ko‘ring.',
      alternateSims: [
        { label: 'Osh tuzi (NaCl) ion kristalli 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
        { label: 'Etilen (C₂H₄) σ va π bog‘lari 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h4' },
      ],
      parametric: {
        mode: 'chem_bonding',
        title: 'Kovalent-Ion Bog‘ Qutbliligi va Zaryad Siljishi Stendi',
        description: 'Δχ qiymatini oshirib, elektron bulutining umumiy kovalent holatdan ion juftiga ko‘chishini kuzating.',
        controls: [
          { key: 'dx', label: 'Farq Δχ', unit: '', min: 0, max: 3.3, step: 0.1, value: 1.2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi birikmada donor-akseptor mexanizmi bo‘yicha hosil bo‘lgan kovalent bog‘ mavjud?', options: ['CH₄', 'NH₄Cl (ammoniy xlorid)', 'NaCl', 'Cl₂'], answer: 1, explain: 'NH₄⁺ kationida NH₃ dagi azot bo‘linmagan juftini (donor) H⁺ ning bo‘sh orbitaliga (akseptor) beradi.' },
      { q: 'Qaysi moddada faqat kovalent qutbsiz bog‘lanish mavjud?', options: ['H₂O', 'N₂', 'CO₂', 'KCl'], answer: 1, explain: 'N₂ bir xil elektromanfiylikka ega ikki azot atomidan iborat bo‘lib, qutbsiz N≡N bog‘ga ega.' },
      { q: 'Atsetilen ($H-C\\equiv C-H$) molekulasida nechta $\\sigma$ va nechta $\\pi$ bog‘ bor?', options: ['3σ va 2π', '2σ va 3π', '5σ va 0π', '4σ va 1π'], answer: 0, explain: '2 ta C−H (2σ) va C≡C uchbog‘da 1σ + 2π => jami 3σ va 2π.' },
      { q: 'Suv ($H_2O$) ning normal sharoitda suyuq bo‘lishiga asosiy sabab qaysi bog‘lanishdir?', options: ['Ion bog‘lanish', 'Molekulalararo vodorod bog‘lanish', 'Metall bog‘lanish', 'Donor bog‘'], answer: 1, explain: 'O−H qutbli guruhlari o‘zaro kuchli molekulalararo vodorod bog‘lari hosil qilib assotsiatlar beradi.' },
      { q: 'Metallarning elektr va issiqlik o‘tkazuvchanligi hamda bolg‘alanuvchanligi nimaga bog‘liq?', options: ['Delokallashgan erkin elektron gazi va metall bog‘lanishga', 'Ion kristall panjaraga', 'Vodorod bog‘larga', 'Qutbsiz molekulalarga'], answer: 0, explain: 'Erkin harakatlanuvchi elektron gazi qatlamlar siljishida ham bog‘lanishni saqlab qoladi va tok o‘tkazadi.' },
      { q: 'Kaliy ftorid ($KF$) molekulasida qaysi kimyoviy bog‘lanish turi hukmron?', options: ['Kovalent qutbsiz', 'Ion bog‘lanish', 'Metall bog‘lanish', 'Vodorod bog‘lanish'], answer: 1, explain: 'K (χ=0.8) va F (χ=4.0) orasida Δχ = 3.2 >> 1.7 bo‘lgani uchun tipik ion bog‘ hosil bo‘ladi.' },
      { q: 'Azot ($N_2$) molekulasining o‘ta barqarorligi va yuqori haroratdagina reaksiyaga kirishishi nimadan?', options: ['Uch karra (1σ + 2π) kovalent bog‘ energiyasi juda katta (945 kJ/mol)', 'Azot atomi katta', 'Ion bog‘i tufayli', 'Vodorod bog‘i tufayli'], answer: 0, explain: 'Uchbog‘ni uzish uchun ulkan aktivatsiya energiyasi talab qilinadi.' },
      { q: 'Ammoniy xlorid ($NH_4Cl$) kristalida bir vaqtda qanday bog‘lanish turlari uchraydi?', options: ['Faqat ion', 'Kovalent qutbli, donor-akseptor va ion bog‘lanish', 'Faqat metall', 'Faqat vodorod'], answer: 1, explain: 'NH₄⁺ ichida 3 ta oddiy kovalent + 1 ta donor-akseptor, NH₄⁺ va Cl⁻ orasida esa ion bog‘i bor.' },
    ],
    problems: [
      { variants: [[3, 2, 0], [5, 1, 0], [2, 0, 1], [6, 3, 0]], build(i) { const [s, d, tr] = this.variants[i]; const sig = s + d + tr; return { q: `Organik molekulada ${s} ta yakka, ${d} ta qo‘sh va ${tr} ta uchbog‘ bor. Jami σ-bog‘lar sonini toping.`, correct: sig, unit: 'ta', explain: `Har bir kimyoviy bog‘da aynan 1 ta σ-bog‘ bor: ${s}+${d}+${tr} = ${sig}.` }; } },
      { variants: [[1, 1], [3, 0], [0, 2], [2, 1]], build(i) { const [d, tr] = this.variants[i]; const pi = d + 2 * tr; return { q: `Molekulada ${d} ta qo‘shbog‘ va ${tr} ta uchbog‘ mavjud. Jami π-bog‘lar soni nechta?`, correct: pi, unit: 'ta', explain: `Qo‘shbog‘da 1π, uchbog‘da 2π: ${d}·1 + ${tr}·2 = ${pi}.` }; } },
    ],
  },
  {
    id: 'C1C-2', code: 'K1C.2', sectionId: 'csec-1', subsectionId: 'C1C',
    subsectionTitle: 'C. Kimyoviy Bog‘lanish va Modda Tuzilishi',
    title: 'Molekulalar geometriyasi, gibridlanish va VSEPR',
    subtitle: 'Orbitallarning gibridlanishi (sp, sp², sp³), VSEPR nazariyasi, bog‘lanish burchaklari va uzunligi',
    theory: {
      overview:
        'Molekulalarning fazoviy shakli markaziy atom orbitallarining gibridlanishi hamda VSEPR (valent qavat elektron juftlarining o‘zaro itarilish) nazariyasi bilan aniqlanadi. Elektron juftlar (bog‘lovchi σ va bo‘linmagan juftlar) fazoda bir-biridan maksimal uzoqlashishga intiladi: 2 ta elektron yo‘nalish — $sp$ gibridlanish, chiziqli shakl, $180^\\circ$ ($BeCl_2, CO_2, C_2H_2$); 3 ta yo‘nalish — $sp^2$ gibridlanish, yassi uchburchak, $120^\\circ$ ($BF_3, C_2H_4, C_6H_6$); 4 ta yo‘nalish — $sp^3$ gibridlanish, tetraedrik burchak $109.5^\\circ$ ($CH_4$). Agar markaziy atomda bo‘linmagan elektron juft bo‘lsa (masalan $NH_3$ da 1 juft, $H_2O$ da 2 juft), u kuchliroq itarganligi sabab burchak mos ravishda $107^\\circ$ (trigonal piramida) va $104.5^\\circ$ (burchakli) gacha kichrayadi.',
      keyLaws: [
        { title: 'Gibridlanish turlari va bog‘ burchaklari', text: '$sp \\to 180^\\circ$ (chiziqli); $sp^2 \\to 120^\\circ$ (trigonal yassi); $sp^3 \\to 109.5^\\circ$ (tetraedr).' },
        { title: 'VSEPR qoidasi (Bo‘linmagan juftlar ta’siri)', text: 'Itarishish kuchi tartibi: (Juft–Juft) > (Juft–Bog‘) > (Bog‘–Bog‘). Shu bois $CH_4 (109.5^\\circ) > NH_3 (107^\\circ) > H_2O (104.5^\\circ)$.' },
      ],
      formulas: [
        { latex: '\\text{Sterik son} = N_{\\sigma\\text{-bog‘}} + N_{\\text{bo‘linmagan juft}}', name: 'Gibridlanish turini aniqlash', symbols: '2 → sp, 3 → sp², 4 → sp³' },
        { latex: 'L(C\\equiv C) = 0.120\\text{ nm} < L(C=C) = 0.134\\text{ nm} < L(C-C) = 0.154\\text{ nm}', name: 'Karrali bog‘lar uzunligi', symbols: 'Bog‘ karraligi ortganda uzunlik qisqaradi' },
      ],
      constants: [
        { name: 'C−C yakka bog‘ uzunligi (sp³)', symbol: 'L(C−C)', value: '0.154', unit: 'nm' },
        { name: 'Benzol halqasidagi C···C uzunligi', symbol: 'L(arom)', value: '0.139', unit: 'nm' },
      ],
      applications: [
        'Dorivor preparat molekulalarining biologik retseptorlar bilan mos kelishi (kalit-qulf tamoyili) to‘liq 3D VSEPR geometriyasiga bog‘liq.',
        'Polimer va grafit/olmos kabi materiallarning mustahkamligi $sp^2$ yassi qatlamlar yoki $sp^3$ 3D karkas hosil qilishiga asoslanadi.',
      ],
      calculator: {
        title: 'VSEPR Gibridlanish va Fazoviy Burchak Aniqlagichi',
        formulaDisplay: 'SN = σ_bog‘ + E_juft',
        inputs: [
          { key: 'sig', label: 'Markaziy atom σ-bog‘lari soni', symbol: 'σ', unit: '', min: 2, max: 4, step: 1, default: 3 },
          { key: 'lp', label: 'Bo‘linmagan elektron juftlar soni', symbol: 'E', unit: '', min: 0, max: 2, step: 1, default: 1 },
        ],
        compute: (v) => {
          const sn = v.sig + v.lp;
          let hyb = sn <= 2 ? 'sp' : sn === 3 ? 'sp²' : 'sp³';
          let angle = sn <= 2 ? '180° (Chiziqli)' : sn === 3 ? (v.lp === 0 ? '120° (Yassi uchburchak)' : '116° (Burchakli)') : v.lp === 0 ? '109.5° (Tetraedr)' : v.lp === 1 ? '107° (Piramida)' : '104.5° (Burchakli)';
          return { value: hyb, unit: '', summary: `Sterik son SN = ${sn} | Taxminiy geometriya va burchak: ${angle}` };
        },
      },
    },
    simulation: {
      title: '3D Molekula Geometriyasi: CH₄ (sp³), C₂H₄ (sp²) va C₂H₂ (sp)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=ch4',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Tetraedr (109.5°), yassi uchburchak (120°) va chiziqli (180°) molekulalarni 3D aylantirib burchaklarini taqqoslang.',
      alternateSims: [
        { label: 'Etilen (sp², 120°) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h4' },
        { label: 'Atsetilen (sp, 180°) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h2' },
        { label: 'Suv (H₂O, 104.5°) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=h2o' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'VSEPR Fazoviy Burchaklar Simulyatori',
        description: 'Sterik son va bo‘linmagan juftlar sonini tanlab bog‘lanish burchagining o‘zgarishini kuzating.',
        controls: [
          { key: 'sig', label: 'σ-bog‘lar soni', unit: '', min: 2, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Bo‘linmagan juftlar', unit: '', min: 0, max: 2, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Metan ($CH_4$) molekulasida uglerodning gibridlanishi va valent burchagi qanday?', options: ['$sp$, $180^\\circ$', '$sp^2$, $120^\\circ$', '$sp^3$, $109.5^\\circ$', '$sp^3$, $90^\\circ$'], answer: 2, explain: 'Metanda 4 ta σ-bog‘ tetraedrik $sp^3$ gibridlanish va $109.5^\\circ$ burchak hosil qiladi.' },
      { q: 'Atsetilen ($C_2H_2$) va karbonat angidrid ($CO_2$) molekulalari qanday fazoviy shaklga ega?', options: ['Tetraedrik', 'Chiziqli ($sp$, $180^\\circ$)', 'Piramidal', 'Yassi uchburchak'], answer: 1, explain: 'Ikkala molekulada markaziy atom 2 ta σ-bog‘ga va 0 ta bo‘linmagan juftga ega -> sp chiziqli.' },
      { q: 'Nima uchun suv ($H_2O$) da bog‘ burchagi $104.5^\\circ$ bo‘lib, $CH_4$ ($109.5^\\circ$) dan kichik?', options: ['Vodorod kichik', 'Kisloroddagi 2 ta bo‘linmagan elektron juft bog‘larni kuchliroq siqib itaradi', 'Kislorod sp holatda', 'Ion bog‘i sabab'], answer: 1, explain: 'VSEPR nazariyasiga ko‘ra kisloroddagi 2 ta erkin juft o‘rtasidagi itarishish O−H bog‘larini $104.5^\\circ$ gacha yaqinlashtiradi.' },
      { q: 'Etilen ($C_2H_4$) va benzol ($C_6H_6$) uglerod atomlari qanday gibridlangan?', options: ['$sp$', '$sp^2$ ($120^\\circ$)', '$sp^3$ ($109.5^\\circ$)', 'Gibridlanmagan'], answer: 1, explain: 'Qo‘shbog‘ va aromatik halqadagi har bir uglerod 3 ta σ-bog‘ bilan $sp^2$ (yassi $120^\\circ$) holatda turadi.' },
      { q: 'Qaysi qatorda bog‘ uzunligi eng qisqa?', options: ['$C-C$ ($0.154$ nm)', '$C=C$ ($0.134$ nm)', '$C\\equiv C$ ($0.120$ nm)', '$C\\cdots C$ ($0.139$ nm)'], answer: 2, explain: 'Bog‘ karraligi ortishi bilan yadrolar bir-biriga kuchliroq tortiladi va bog‘ uzunligi qisqaradi.' },
      { q: 'Ammiak ($NH_3$) molekulasi qanday geometrik shaklga ega?', options: ['Yassi uchburchak', 'Trigonal piramida ($107^\\circ$)', 'Chiziqli', 'Kvadrat'], answer: 1, explain: 'Azotda 3 ta σ-bog‘ va 1 ta bo‘linmagan juft ($sp^3$) bo‘lgani uchun trigonal piramida hosil qiladi.' },
      { q: 'Yassi $120^\\circ$ burchakli trigonal geometriya qaysi gibridlanishga xos?', options: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3d^2$'], answer: 1, explain: '1 ta s va 2 ta p orbital qo‘shilib tekislikda $120^\\circ$ ostida 3 ta $sp^2$ orbital beradi.' },
      { q: 'Qaysi zarrachalar jufti bir xil $sp^3$ tetraedrik tuzilishga ega?', options: ['$CH_4$ va $NH_4^+$', '$CO_2$ va $H_2O$', '$C_2H_2$ va $C_2H_4$', '$BF_3$ va $NH_3$'], answer: 0, explain: 'Ikkalasida ham 4 ta σ-bog‘ va 0 ta erkin juft mavjud — izoelektron tetraedrlar.' },
    ],
    problems: [
      { variants: [[4, 0], [3, 1], [2, 2], [3, 0]], build(i) { const [s, lp] = this.variants[i]; return { q: `Markaziy atomda ${s} ta σ-bog‘ va ${lp} ta bo‘linmagan elektron juft bo‘lsa, VSEPR sterik soni nechaga teng?`, correct: s + lp, unit: '', explain: `SN = σ + E = ${s} + ${lp} = ${s + lp}.` }; } },
      { variants: [[180, 120], [120, 109.5], [109.5, 104.5], [180, 109.5]], build(i) { const [a, b] = this.variants[i]; const diff = a - b; return { q: `Ikki gibridlanish turiga mos bog‘ burchaklari ${a}° va ${b}° orasidagi farq necha gradus?`, correct: Number(diff.toFixed(1)), unit: '°', explain: `${a}° − ${b}° = ${diff.toFixed(1)}°.` }; } },
    ],
  },
  {
    id: 'C1C-3', code: 'K1C.3', sectionId: 'csec-1', subsectionId: 'C1C',
    subsectionTitle: 'C. Kimyoviy Bog‘lanish va Modda Tuzilishi',
    title: 'Kristall panjaralar va moddalarning fizik xossalari',
    subtitle: 'Ion, atom, molekulyar va metall kristall panjaralar, allotropiya',
    theory: {
      overview:
        'Qattiq moddalar amorf (tartibsiz joylashgan: shisha, smola) va kristall (zarralari fazoda qat’iy davriy tartibda joylashgan) holatga bo‘linadi. Kristall panjara tugunlaridagi zarralar va bog‘ tabiatiga ko‘ra 4 asosiy tur mavjud: 1) Ion panjara ($NaCl, CaCO_3$) — tugunlarda ionlar; qattiq, mo‘rt, qiyin suyuqlanuvchan, eritma va suyuqlanmasi tok o‘tkazadi; 2) Atom panjara (olmos, $SiC, SiO_2$) — tugunlarda kovalent bog‘langan atomlar; o‘ta qattiq, erimaydi, suyuqlanish harorati juda yuqori; 3) Molekulyar panjara (muz $H_2O$, yod $I_2$, quruq muz $CO_2$) — kuchsiz molekulalararo kuchlar bilan bog‘langan; uchuvchan, oson suyuqlanadi va yumshoq; 4) Metall panjara ($Fe, Cu, Al$) — yaltiroq, egiluvchan va yuqori elektr o‘tkazuvchan.',
      keyLaws: [
        { title: 'Tuzilish → Xossa bog‘liqligi', text: 'Atom panjarali moddalar ($C_{\\text{olmos}}, SiO_2$) eng qattiq va qiyin eruvchan; molekulyar panjarali moddalar esa ($I_2, CO_2, S_8$) past haroratda sublimatsiyalanadi yoki suyuqlanadi.' },
        { title: 'Uglerod allotropiyasi', text: 'Olmos — $sp^3$ tetraedrik karkas (izolyator, eng qattiq); Grafit — $sp^2$ oltiburchakli qatlamlar (yumshoq, tok o‘tkazadi); Fulleren $C_{60}$ va Grafen — zamonaviy nanomateriallar.' },
      ],
      formulas: [
        { latex: 'C_{\\text{olmos}} \\;(sp^3,\\text{ 3D}) \\longleftrightarrow C_{\\text{grafit}} \\;(sp^2,\\text{ 2D}) \\longleftrightarrow C_{60}', name: 'Uglerod allotropik shakllari', symbols: 'Turlicha kristall panjara → keskin farq qiluvchi xossalar' },
        { latex: 'T_{\\text{er}}(\\text{atom}) > T_{\\text{er}}(\\text{ion}) > T_{\\text{er}}(\\text{molekulyar})', name: 'Kristall panjaralar mustahkamlik qatori', symbols: 'Kovalent atom karkasi eng barqaror' },
      ],
      constants: [
        { name: 'Olmos qattiqligi (Moos shkalasi)', symbol: 'H(olmos)', value: '10 / 10', unit: '(maksimal)' },
        { name: 'Osh tuzi (NaCl) erish harorati', symbol: 'T_er(NaCl)', value: '801', unit: '°C' },
      ],
      applications: [
        'Kvars ($SiO_2$) va karborund ($SiC$) atom kristall panjarasi tufayli abraziv asboblar va o‘tga chidamli materiallar ishlab chiqarishda qo‘llaniladi.',
        'Grafen (bir atom qalinligidagi $sp^2$ uglerod to‘ri) o‘ta yuqori mustahkamligi va tok o‘tkazuvchanligi bilan nanoelektronikada inqilob qilmoqda.',
      ],
      calculator: {
        title: 'NaCl Tipidagi Kubik Panjara Zichligi va Ionlar Soni Baholagichi',
        formulaDisplay: 'N_hujayra = (2k+1)³,   M_birlik = 58.44 g/mol',
        inputs: [
          { key: 'side', label: 'Kubik panjara o‘lchami n×n×n', symbol: 'n', unit: 'atom', min: 2, max: 6, step: 1, default: 3 },
        ],
        compute: (v) => {
          const tot = v.side * v.side * v.side;
          const na = Math.ceil(tot / 2);
          const cl = Math.floor(tot / 2);
          return { value: `${tot} ta ion`, unit: '', summary: `${v.side}×${v.side}×${v.side} blokda: ${na} ta Na⁺ kationi va ${cl} ta Cl⁻ anioni` };
        },
      },
    },
    simulation: {
      title: '3D Kristall Panjaralar: Osh Tuzi (NaCl) va Olmos (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=nacl_lattice',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'NaCl kubik ion panjarasi va Olmos tetraedrik atom kristall panjarasini 3D fazoda aylantirib solishtiring.',
      alternateSims: [
        { label: 'Olmos (C, sp³) atom kristall panjarasi', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=diamond' },
        { label: 'Suv (H₂O) molekulyar tuzilishi', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=h2o' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Kristall Panjara Koordinatsiya va Bog‘lanish Burchagi',
        description: 'Atom panjarali olmos tetraedri (109.5°) hamda boshqa tuzilishlar burchagini tekshiring.',
        controls: [
          { key: 'sig', label: 'Koordinatsion σ-bog‘lar', unit: '', min: 2, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 2, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi modda atom kristall panjarasiga ega bo‘lib, o‘ta qattiq va juda yuqori haroratda eriydi?', options: ['Quruq muz (CO₂)', 'Olmos (C) va Kvars (SiO₂)', 'Yod (I₂)', 'Osh tuzi (NaCl)'], answer: 1, explain: 'Olmos va kvarsda barcha atomlar fazoda kuchli kovalent bog‘lar bilan bog‘langan.' },
      { q: 'Molekulyar kristall panjarali moddalarga xos bo‘lgan fizik xossalar qaysilar?', options: ['Past erish harorati, uchuvchanlik, yumshoqlik', '3500 °C erish harorati', 'Elektr o‘tkazuvchanlik', 'Yuqori plastiklik'], answer: 0, explain: 'Molekulalararo kuchsiz Van-der-Vaals kuchlari tufayli molekulyar kristallar (CO₂, I₂, S₈) oson eriydi va uchuvchan.' },
      { q: 'Osh tuzi ($NaCl$) qattiq holda tok o‘tkazmaydi, lekin suyuqlanmasi va eritmasi tok o‘tkazadi. Nima uchun?', options: ['Ionlar qattiq holda panjara tugunlarida bog‘langan, eriganda esa erkin harakatlanadi', 'Suv metallga aylanadi', 'Suyuqlanganda elektronlar paydo bo‘ladi', 'Yorug‘lik ta’sirida'], answer: 0, explain: 'Ion kristallarda ionlar joyidan siljiy olmaydi; eritma yoki suyuqlanmada esa erkin kation/anionlar zaryad tashiydi.' },
      { q: 'Grafitning elektr tokini o‘tkazishi va qog‘ozga iz qoldirishi nimadan dalolat beradi?', options: ['Ion panjaradan', 'Qatlamli sp² tuzilish va qatlamlar orasida erkin π-elektronlar borligidan', 'Vodorod bog‘idan', 'Molekulyar tuzilishdan'], answer: 1, explain: 'Grafit qatlamlari kuchsiz bog‘langan bo‘lib oson ko‘chadi, delokallashgan π-elektronlar esa tok o‘tkazadi.' },
      { q: 'Sublimatsiya (qattiq holatdan to‘g‘ridan-to‘g‘ri gazga o‘tish) qaysi kristall panjarali moddalar (yod $I_2$, quruq muz $CO_2$) uchun xos?', options: ['Atom', 'Ion', 'Molekulyar', 'Metall'], answer: 2, explain: 'Molekulyar kristallarda molekulalararo bog‘ juda kuchsiz bo‘lgani uchun qizdirilganda oson uchib chiqadi.' },
      { q: 'Shisha va plastilin kabi qattiq jismlar aniq erish haroratiga ega emas va sindirilganda tekis qirralar bermaydi. Ular nima deyiladi?', options: ['Kristall jismlar', 'Amorf jismlar', 'Allotroplar', 'Polimer elektrolitlar'], answer: 1, explain: 'Amorf jismlarda uzoq tartibli kristall panjara yo‘q, shuning uchun ular sekin yumshaydi.' },
      { q: 'Mis ($Cu$) va temir ($Fe$) qaysi kristall panjara turiga mansub?', options: ['Metall kristall panjara', 'Atom', 'Ion', 'Molekulyar'], answer: 0, explain: 'Tugunlarda metall kationlari va atomlari, orasida esa umumlashgan erkin elektronlar mavjud.' },
      { q: 'Fulleren $C_{60}$ molekulasining shakli nimaga o‘xshaydi?', options: ['Yassi lenta', 'Futbol to‘pi (60 ta uglerodli sfera)', 'Kvadrat prizma', 'Kubik kristall'], answer: 1, explain: 'Fulleren besh- va oltiburchaklardan iborat yopiq sferik karkas tuzilishiga ega.' },
    ],
    problems: [
      { variants: [[3], [4], [5], [2]], build(i) { const [n] = this.variants[i]; return { q: `NaCl panjarasining ${n}×${n}×${n} kubik fragmentida jami nechta ion joylashgan?`, correct: n * n * n, unit: 'ta', explain: `${n}³ = ${n * n * n} ta ion.` }; } },
      { variants: [[3550, 801], [1720, 114], [1085, 801]], build(i) { const [a, b] = this.variants[i]; return { q: `Atom kristall modda erish harorati ${a} °C, ion kristall moddaniki ${b} °C. Farq necha gradus?`, correct: a - b, unit: '°C', explain: `${a} − ${b} = ${a - b} °C.` }; } },
    ],
  },
];
