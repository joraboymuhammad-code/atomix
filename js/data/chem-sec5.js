// Kimyo 5-bo'lim: Analitik Kimyo va Amaliy Laboratoriya Usullari (3 mavzu: C5-1, C5-2, C5-3)

export const CHEM_SEC5_TOPICS = [
  {
    id: 'C5-1', code: 'K5.1', sectionId: 'csec-5', subsectionId: 'C5A',
    subsectionTitle: '5. Analitik Kimyo va Amaliy Laboratoriya Usullari',
    title: 'Sifat analizi: Kation va anionlar, alanga testlari',
    subtitle: 'Kationlar va anionlarni aniqlash reaksiyalari, alanga rangini o‘zgartirish testlari',
    theory: {
      overview:
        'Sifat analizi noma’lum modda yoki aralashma tarkibida aynan qaysi kimyoviy elementlar, kationlar va anionlar borligini aniqlash usullari majmuasidir. Kationlar maxsus guruh reagentlari (masalan, $HCl$ bilan $Ag^+, Pb^{2+}$; ishqor bilan $Fe^{3+}, Cu^{2+}$) hamda xarakterli rangli cho‘kma va gaz hosil qiluvchi sezgir sifat reaksiyalari orqali topiladi. Anionlardan $Cl^-$ ($AgNO_3$ bilan oq $AgCl\\downarrow$), $SO_4^{2-}$ ($BaCl_2$ bilan erimaydigan oq $BaSO_4\\downarrow$), $CO_3^{2-}$ (kislota bilan $CO_2\\uparrow$) alohida o‘rin tutadi. Alanga testi (pirokimyoviy tahlil) da ishqoriy va ishqoriy-yer metall tuzlari atomlarning qo‘zg‘algan elektronlari asosiy holatga qaytishida qat’iy to‘lqin uzunlikli chiroyli spektr chiqaradi: $Li^+$ qirmizi, $Na^+$ sariq, $K^+$ binafsha, $Ca^{2+}$ g‘isht-qizil, $Cu^{2+}$ zumrad-yashil, $Ba^{2+}$ sariq-yashil.',
      keyLaws: [
        { title: 'Alanga emissiyasi kvant mexanizmi', text: 'Gorelka alangasidagi yuqori harorat metall atomining valent elektronlarini uyg‘otadi; ular qaytishda $\\Delta E = hc/\\lambda$ energiyali xarakterli rangli foton chiqaradi.' },
        { title: 'Tanlovchanlik (Selektivlik) sharti', text: 'Yaxshi sifat reaktivi aralashmadagi boshqa begona ionlar xalaqit bermagan holda faqat bitta ion bilan keskin ko‘rinadigan cho‘kma yoki rang hosil qilishi kerak.' },
      ],
      formulas: [
        { latex: '\\text{Cu}^{2+} + 4\\text{NH}_3 \\to [\\text{Cu(NH}_3)_4]^{2+}\\;(\\text{to‘q ko‘k})', name: 'Mis kationini ammiak bilan aniqlash', symbols: 'Juda sezgir sifat reaksiyasi' },
        { latex: '\\Delta E = h\\nu = \\frac{hc}{\\lambda_{\\text{alanga}}}', name: 'Alanga rangi foton energiyasi', symbols: 'Na⁺: 589 nm (sariq), Li⁺: 671 nm (qizil)' },
      ],
      constants: [
        { name: 'Natriy (Na⁺) alanga chizig‘i', symbol: 'λ(Na)', value: '589', unit: 'nm (yorqin sariq)' },
        { name: 'Bariy (Ba²⁺) va Mis (Cu²⁺) alangasi', symbol: 'λ(Ba / Cu)', value: '524 / 515', unit: 'nm (yashil)' },
      ],
      applications: [
        'Mushakbozlik (piroteхnika) da rang-barang uchqunlar olish uchun stronsiy (qizil), bariy (yashil), mis (ko‘k-yashil) va natriy (oltin sariq) tuzlari aralashtiriladi.',
        'Kriminalistika va metallurgiya ekspress-tahlilida stilokopiya alanga spektriga qarab qotishma tarkibini soniyalar ichida aniqlaydi.',
      ],
      calculator: {
        title: 'Alanga Spektri To‘lqin Uzunligi va Foton Energiyasi',
        formulaDisplay: 'E (eV) = 1240 / λ(nm)',
        inputs: [
          { key: 'lam', label: 'Alanga pik λ (Cu=515, Ba=524, Na=589, Li=671)', symbol: 'λ', unit: 'nm', min: 400, max: 770, step: 1, default: 589 },
        ],
        compute: (v) => {
          const eEv = 1240 / v.lam;
          const rng = v.lam < 450 ? 'Binafsha (K⁺)' : v.lam < 545 ? 'Yashil / Ko‘k-yashil (Cu²⁺, Ba²⁺)' : v.lam < 605 ? 'Sariq (Na⁺)' : 'Qizil / G‘isht-qizil (Ca²⁺, Li⁺)';
          return { value: `${eEv.toFixed(2)} eV`, unit: '', summary: `λ = ${v.lam} nm | Rang va mos kation: ${rng}` };
        },
      },
    },
    simulation: {
      title: 'Amrita OLabs Alanga Rangi va Kationlar Sifat Tahlili',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=flame_test',
      openSourceSource: 'Amrita OLabs · VLab',
      openSourceNote: 'Platina ilgakda tuzlarni gorelka alangasiga tutib Li⁺, Na⁺, K⁺, Cu²⁺, Ba²⁺ va Ca²⁺ ranglarini ko‘ring.',
      alternateSims: [
        { label: 'pH va indikator sifat testi (PhET)', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_flame_analysis',
        title: 'Alanga Rangi Pirokimyoviy Spektrometri',
        description: 'Kationni almashtirib alanga rangini va chiziqli emissiya to‘lqin uzunligini kuzating.',
        controls: [
          { key: 'cation', label: 'Kation (1:Li 2:Na 3:K 4:Cu 5:Ba 6:Ca)', unit: '', min: 1, max: 6, step: 1, value: 4 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Gorelka alangasini yorqin sariq rangga ($589\\text{ nm}$) bo‘yaydigan kation qaysi?', options: ['K⁺', 'Na⁺', 'Cu²⁺', 'Ba²⁺'], answer: 1, explain: 'Natriy ionlari hatto iz miqdorda ham alangani sariqqa bo‘yaydi.' },
      { q: 'Mis ($Cu^{2+}$) tuzlari gorelka alangasini qanday rangga keltiradi?', options: ['Sariq', 'Zumrad-yashil / ko‘k-yashil', 'Qirmizi', 'Binafsha'], answer: 1, explain: 'Cu²⁺ ionlari alangani chiroyli zumrad-yashil tusga kiritadi.' },
      { q: 'Kaliy ($K^+$) tuzlarining alanga rangi odatda kobalt ko‘k shisha orqali kuzatilganda qanday ko‘rinadi?', options: ['Binafsha', 'Sariq', 'Oq', 'Qora'], answer: 0, explain: 'Kaliy kationi alangaga och binafsha rang beradi.' },
      { q: 'Eritmada $I^-$ (yodid) anioni borligini $AgNO_3$ yordamida qanday cho‘kmadan aniqlanadi?', options: ['Oq AgCl', 'To‘q sariq $AgI\\downarrow$ ($NH_3$ da erimaydi)', 'Qora CuS', 'Ko‘k Cu(OH)₂'], answer: 1, explain: 'Kumush yodid (AgI) sariq rangli cho‘kma bo‘lib, ammiak eritmasida ham erimaydi.' },
      { q: 'Ammoniy ($NH_4^+$) ionining asosiy sifat belgisi nima?', options: ['Ishqor bilan qizdirilganda o‘tkir ammiak ($NH_3$) hidi va lakmus ko‘karishi', 'Oq cho‘kma', 'Yashil alanga', 'CO₂ chiqishi'], answer: 0, explain: 'NH₄⁺ + OH⁻ → NH₃↑ + H₂O.' },
      { q: 'Alanga testida tuz namunasini tutish uchun nega oddiy temir sim emas, balki platina yoki nixrom sim ishlatiladi?', options: ['Arzonligi uchun', 'Platina juda yuqori haroratda erimaydi va alangani o‘zi bo‘yamaydi', 'Yashil rang berish uchun', 'Kislota bilan reaksiyaga kirishishi uchun'], answer: 1, explain: 'Platina inert va alanga spektrini buzmaydi; har sinovdan oldin HCl da yuvib tozalash oson.' },
      { q: 'Sifat analizida $Pb^{2+}$ va $I^-$ ionlari qo‘shilganda tushadigan mashhur "oltin yomg‘ir" cho‘kmasi nima?', options: ['PbI₂ (oltin sariq kristallar)', 'PbSO₄', 'PbCl₂', 'AgI'], answer: 0, explain: 'Issiq eritma soviganda yaltiroq oltinrang PbI₂ plastinkalari cho‘kadi.' },
      { q: 'Kislotali muhitda $Fe^{2+}$ tuziga qaysi reaktiv qo‘shilsa to‘q ko‘k "Turnbul ko‘ki" cho‘kmasi hosil bo‘ladi?', options: ['Qizil qon tuzi $K_3[Fe(CN)_6]$', 'NaCl', 'BaCl₂', 'KSCN'], answer: 0, explain: 'Fe²⁺ + K₃[Fe(CN)₆] → KFe[Fe(CN)₆]↓.' },
    ],
    problems: [
      { variants: [[620], [500], [400], [589]], build(i) { const [lam] = this.variants[i]; const e = 1240 / lam; return { q: `Alanga testida kation λ = ${lam} nm to‘lqin uzunlikda nur chiqardi. Foton energiyasini (eV) toping. (hc ≈ 1240 eV·nm)`, correct: Number(e.toFixed(2)), unit: 'eV', explain: `E = 1240 / ${lam} = ${e.toFixed(2)} eV.` }; } },
      { variants: [[0.1, 14.35], [0.2, 28.7], [0.05, 7.18]], build(i) { const [n, m] = this.variants[i]; return { q: `AgNO₃ ta’sirida ${m.toFixed(2)} g oq AgCl (M=143.5) cho‘kmasi tushdi. Eritmada necha mol xlorid (Cl⁻) ioni bo‘lgan?`, correct: n, unit: 'mol', explain: `n = ${m.toFixed(2)} / 143.5 = ${n} mol.` }; } },
    ],
  },
  {
    id: 'C5-2', code: 'K5.2', sectionId: 'csec-5', subsectionId: 'C5A',
    subsectionTitle: '5. Analitik Kimyo va Amaliy Laboratoriya Usullari',
    title: 'Miqdoriy analiz: Gravimetriya va Titrimetriya',
    subtitle: 'Gravimetriya va titrimetriya (kislota-asosli titrlash, oksidimetriya, kompleksonometriya)',
    theory: {
      overview:
        'Miqdoriy analiz modda tarkibidagi komponentlarning aniq massasini yoki konsentratsiyasini o‘lchaydi. Asosiy klassik usullar ikkita: 1) Gravimetriya (tortish usuli) — aniqlanadigan ion kam eruvchan cho‘kmaga o‘tkaziladi, filtrlanadi, quritilib/kuydirilib analitik tarozida tortiladi ($BaSO_4$ shaklida sulfat aniqlash); 2) Titrimetriya (hajmiy tahlil) — aniqligi ma’lum eritma (titrant) byuretkadan tekshirilayotgan eritmaga ekvivalent nuqtagacha (indikator rangi o‘zgarguncha) tomiziladi. Turlari: kislota-asosli titrlash (alkalimetriya/atsidimetriya), oksidimetriya (permanganatometriya — $KMnO_4$ indikatorsiz o‘zi rang beradi) va kompleksonometriya (Trilon B bilan suv qattiqligi $Ca^{2+}, Mg^{2+}$ ni o‘lchash). Ekvivalentlar qonuni: $C_{N1} V_1 = C_{N2} V_2$.',
      keyLaws: [
        { title: 'Titrimetriya ekvivalentlar qonuni', text: 'Ekvivalent nuqtada reaksiyaga kirishgan kislota va asos (yoki oksidlovchi va qaytaruvchi) gram-ekvivalentlari soni teng bo‘ladi: $C_{N1}\\cdot V_1 = C_{N2}\\cdot V_2$.' },
        { title: 'Indikator tanlash qoidasi', text: 'Kuchli kislota + kuchsiz asos ($NH_3 + HCl$) da ekvivalent nuqta $\\text{pH}<7$ (metiloranj qulay); kuchsiz kislota + kuchli asos ($CH_3COOH + NaOH$) da $\\text{pH}>7$ (fenolftalein).' },
      ],
      formulas: [
        { latex: 'C_{N1} V_1 = C_{N2} V_2', name: 'Hajmiy tahlil asosiy formulasi', symbols: 'C_N — normal konsentratsiya, V — hajm (mL)' },
        { latex: 'T = \\frac{m}{V\\text{ (mL)}} = \\frac{C_N \\cdot M_{\\text{ekv}}}{1000}', name: 'Eritma titri', symbols: '1 mL eritmadagi modda grammi' },
      ],
      constants: [
        { name: 'Analitik tarozi aniqligi', symbol: 'Δm', value: '±0.0001', unit: 'g (0.1 mg)' },
        { name: 'Trilon B (EDTA) kompleksonometriyasi', symbol: 'M(Na₂H₂Y·2H₂O)', value: '372.24', unit: 'g/mol' },
      ],
      applications: [
        'Suv tozalash stansiyalarida suv qattiqligi har kuni Trilon B bilan kompleksonometrik titrlash orqali tekshiriladi.',
        'Sut va sharbatlardagi kislotalilik darajasi NaOH eritmasi bilan fenolftalein ishtirokida titrlanib aniqlanadi.',
      ],
      calculator: {
        title: 'Titrlash Ekvivalent Nuqtasi Hisoblagichi (C₁V₁ = C₂V₂)',
        formulaDisplay: 'C₂ = (C₁ · V₁) / V₂',
        inputs: [
          { key: 'c1', label: 'Titrant konsentratsiyasi C₁ (NaOH)', symbol: 'C₁', unit: 'N', min: 0.05, max: 1.0, step: 0.05, default: 0.1 },
          { key: 'v1', label: 'Sarflangan titrant V₁', symbol: 'V₁', unit: 'mL', min: 5, max: 50, step: 0.5, default: 24.0 },
          { key: 'v2', label: 'Namuna hajmi V₂ (HCl)', symbol: 'V₂', unit: 'mL', min: 10, max: 50, step: 5, default: 20.0 },
        ],
        compute: (v) => {
          const c2 = (v.c1 * v.v1) / v.v2;
          return { value: `C₂ = ${c2.toFixed(3)} N`, unit: '', summary: `Kislota konsentratsiyasi ${c2.toFixed(3)} M/N | 1 L dagi HCl massasi: ${(c2 * 36.5).toFixed(2)} g/L` };
        },
      },
    },
    simulation: {
      title: 'ChemCollective Kislota-Asosli Byuretka Titrlashi Virtual Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=titration',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Byuretkadan NaOH tomizib, pH sakrashi va ekvivalent nuqtani aniqlang.',
      alternateSims: [
        { label: 'pH shkalasi (PhET)', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_ph_titration',
        title: 'Titrlash Sakrash Egri Chizig‘i va Ekvivalent Nuqta Stendi',
        description: 'pH sakrash hududini va indikator o‘zgarish zonasini kuzating.',
        controls: [
          { key: 'pH', label: 'Joriy titrlash pH', unit: '', min: 1, max: 14, step: 0.2, value: 7.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Titrlash paytida qo‘shilgan titrant hajmi tahlil qilinayotgan modda miqdoriga aniq tenglashgan lahza nima deyiladi?', options: ['Qaynash nuqtasi', 'Ekvivalent nuqta', 'Kritik nuqta', 'Shudring nuqtasi'], answer: 1, explain: 'Ekvivalent nuqtada n_ekv(titrant) = n_ekv(aniqlanayotgan modda).' },
      { q: '25 mL noma’lum $HCl$ eritmasini to‘liq titrlash uchun $0.1\\text{ M}$ li $NaOH$ dan 50 mL sarflandi. $HCl$ ning molyarligi qancha?', options: ['0.05 M', '0.1 M', '0.2 M', '0.4 M'], answer: 2, explain: 'C₂ = (0.1 · 50) / 25 = 0.2 M.' },
      { q: 'Permanganatometriya ($KMnO_4$ bilan titrlash) da nega qo‘shimcha indikator qo‘shish shart emas?', options: ['Qimmatligi uchun', 'KMnO₄ o‘zi to‘q binafsha bo‘lib, ortiqcha 1 tomchisi eritmani pushti rangga bo‘yaydi', 'Rang o‘zgarmaydi', 'Gaz chiqadi'], answer: 1, explain: 'KMnO₄ ham titrant, ham avtoindikator vazifasini bajaradi.' },
      { q: 'Suvning qattiqligini ($Ca^{2+}$ va $Mg^{2+}$ ni) aniq o‘lchashda qaysi titrlash usuli qo‘llaniladi?', options: ['Gravimetriya', 'Kompleksonometriya (Trilon B / EDTA bilan)', 'Alanga testi', 'Distillyatsiya'], answer: 1, explain: 'Trilon B (EDTA) barcha ikki valentli kationlar bilan 1:1 mustahkam kompleks hosil qiladi.' },
      { q: 'Cho‘ktma massasini analitik tarozida aniq tortishga asoslangan miqdoriy tahlil usuli nima?', options: ['Titrimetriya', 'Gravimetriya', 'Kolorimetriya', 'Xromatografiya'], answer: 1, explain: 'Gravimetriya (lotincha gravis — og‘ir) cho‘ktirilgan shakl massasini o‘lchaydi.' },
      { q: 'Eritma titri ($T$) nimani bildiradi?', options: ['100 g eritmadagi gramm', '1 mL eritmada erigan moddaning gramm miqdorini (g/mL)', '1 kg suvda mol', 'Eruvchanlik'], answer: 1, explain: 'T = m / V(mL).' },
      { q: 'Kuchsiz sirka kislotani ($CH_3COOH$) kuchli $NaOH$ bilan titrlashda ekvivalent nuqta $\\text{pH} \\approx 8.7$ ga tushadi. Qaysi indikator eng mos?', options: ['Metiloranj (3.1–4.4)', 'Fenolftalein (8.2–10.0)', 'Metil qizil', 'Kraxmal'], answer: 1, explain: 'Fenolftalein pH ≈ 8.2–10.0 ishqoriy o‘tish oralig‘ida keskin rang o‘zgartiradi.' },
      { q: 'Gravimetriyada $BaSO_4$ cho‘kmasini quritishda doimiy massagacha kuydirilgan chinni tigelni sovutish uchun qaysi idishga qo‘yiladi?', options: ['Ochiq stolga', 'Eksikatorga (namlik tortib olmasligi uchun)', 'Suvli stakanga', 'Sovutkichga'], answer: 1, explain: 'Quruq cho‘kma havodan suv bug‘i yutib og‘irligini buzmasligi uchun eksikatorda sovutiladi.' },
    ],
    problems: [
      { variants: [[0.1, 40, 20], [0.2, 30, 15], [0.1, 15, 30], [0.25, 20, 25]], build(i) { const [c1, v1, v2] = this.variants[i]; const c2 = (c1 * v1) / v2; return { q: `${v2} mL HCl eritmasini titrlashga ${c1} M li NaOH dan ${v1} mL sarflandi. HCl ning molyar konsentratsiyasi qancha?`, correct: Number(c2.toFixed(2)), unit: 'M', explain: `C₂ = (${c1}·${v1})/${v2} = ${c2.toFixed(2)} M.` }; } },
      { variants: [[2.33, 233], [4.66, 233], [1.165, 233]], build(i) { const [m, M] = this.variants[i]; const mmol = (m / M) * 1000; return { q: `Gravimetrik tahlilda ${m} g quruq BaSO₄ (M=233) cho‘kmasi olindi. Namuna tarkibida necha millimol (mmol) SO₄²⁻ bo‘lgan?`, correct: Number(mmol.toFixed(1)), unit: 'mmol', explain: `n = (${m}/233)·1000 = ${mmol.toFixed(1)} mmol.` }; } },
    ],
  },
  {
    id: 'C5-3', code: 'K5.3', sectionId: 'csec-5', subsectionId: 'C5A',
    subsectionTitle: '5. Analitik Kimyo va Amaliy Laboratoriya Usullari',
    title: 'Fizik-kimyoviy analiz usullari: Spektrofotometriya, YaMR, MS',
    subtitle: 'Spektrofotometriya, mass-spektrometriya, YaMR (yadro magnit rezonansi), gaz va suyuqlik xromatografiyasi',
    theory: {
      overview:
        'Zamonaviy analitik laboratoriyalar fizik-kimyoviy (instrumental) tahlil usullariga tayanadi: 1) Spektrofotometriya — rangli yoki ultrabinafsha nurni yutuvchi eritmalar konsentratsiyasini Buger-Lambert-Ber qonuni $A = \\varepsilon \\cdot l \\cdot C$ bo‘yicha yorug‘lik yutilishi (optik zichlik $A$) orqali o‘lchaydi; 2) Mass-spektrometriya (MS) — molekulalarni ionlab magnit/elektr maydonida massa-zaryad nisbati ($m/z$) bo‘yicha ajratib, aniq molekulyar massani aniqlaydi; 3) Yadro Magnit Rezonansi (YaMR / NMR) — vodorod ($^1H$) va uglerod ($^{13}C$) yadrolarining magnit maydondagi spin rezonansi orqali organik molekula strukturasini 100% tiklaydi; 4) Gaz (GC) va Yuqori Samarali Suyuqlik Xromatografiyasi (HPLC) — ko‘p komponentli murakkab aralashmalarni ajratib har birining miqdorini o‘lchaydi.',
      keyLaws: [
        { title: 'Buger-Lambert-Ber qonuni', text: 'Monoxromatik nurning eritma orqali o‘tishidagi optik zichlik $A = -\\log_{10}(I/I_0)$ yutish koeffitsienti $\\varepsilon$, kyuvet qalinligi $l$ va konsentratsiya $C$ ga to‘g‘ri proporsional: $A = \\varepsilon l C$.' },
        { title: 'YaMR (NMR) kimyoviy siljishi', text: 'Atom atrofidagi elektron zichligi yadroni magnit maydondan ekranlaydi; shuning uchun turli funksional guruhdagi ($CH_3, OH, CHO$) protonlar spektrometrda turlicha ppm siljishda pik beradi.' },
      ],
      formulas: [
        { latex: 'A = \\varepsilon \\cdot l \\cdot C = \\log_{10}\\frac{I_0}{I}', name: 'Buger-Lambert-Ber qonuni', symbols: 'A — optik zichlik, l — qalinlik (sm), C — konsentratsiya (mol/L)' },
        { latex: 'T\\% = \\frac{I}{I_0} \\cdot 100\\% = 10^{-A} \\cdot 100\\%', name: 'O‘tkazuvchanlik va optik zichlik bog‘lanishi', symbols: 'A = 1 da atigi 10% nur o‘tadi' },
      ],
      constants: [
        { name: 'Standart kyuvet qalinligi', symbol: 'l', value: '1.00', unit: 'sm' },
        { name: 'Tetrametilsilan (TMS) YaMR etaloni', symbol: 'δ(TMS)', value: '0.00', unit: 'ppm' },
      ],
      applications: [
        'GC-MS (Gaz xromatografiya + Mass-spektrometriya) aeroportlarda, ekologiya va doping nazoratida pikogramm miqdordagi moddalarni aniqlaydi.',
        'YaMR spektroskopiyasining tibbiy varianti — MRT (Magnit Rezonans Tomografiya) inson ichki a’zolarini nurlanishsiz tasvirlaydi.',
      ],
      calculator: {
        title: 'Buger-Lambert-Ber Optik Zichlik va Konsentratsiya Kalkulyatori',
        formulaDisplay: 'A = ε · l · C,   T(%) = 10^(-A) · 100%',
        inputs: [
          { key: 'eps', label: 'Molyar yutish ε', symbol: 'ε', unit: 'L/(mol·sm)', min: 100, max: 5000, step: 100, default: 1000 },
          { key: 'C', label: 'Konsentratsiya C (mmol/L)', symbol: 'C', unit: 'mM', min: 0.1, max: 2.0, step: 0.1, default: 0.5 },
          { key: 'l', label: 'Kyuvet qalinligi l', symbol: 'l', unit: 'sm', min: 0.5, max: 5.0, step: 0.5, default: 1.0 },
        ],
        compute: (v) => {
          const A = v.eps * v.l * (v.C * 1e-3);
          const T = Math.pow(10, -A) * 100;
          return { value: `A = ${A.toFixed(3)}`, unit: '', summary: `Yorug‘lik o‘tkazuvchanligi T = ${T.toFixed(1)}% | Yutilgan nur: ${(100 - T).toFixed(1)}%` };
        },
      },
    },
    simulation: {
      title: 'PhET Ber Qonuni va UV-Vis Spektrofotometriya Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=spectroscopy',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'To‘lqin uzunligi va kyuvet konsentratsiyasini o‘zgartirib, yorug‘lik yutilishini (A = εlC) jonli o‘lchang.',
      alternateSims: [
        { label: 'Benzol ¹H YaMR / 3D molekulasi', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=c6h6' },
      ],
      parametric: {
        mode: 'chem_spectroscopy',
        title: 'UV-Vis Spektrofotometriya va Xromatografiya Piklari Stendi',
        description: 'To‘lqin uzunligi λ va eritma konsentratsiyasi C ni sozlab, yutilish spektri hamda uzatish nisbatini ko‘ring.',
        controls: [
          { key: 'conc', label: 'Konsentratsiya C', unit: 'mM', min: 0.1, max: 2.0, step: 0.1, value: 0.8 },
          { key: 'lam', label: 'To‘lqin uzunligi λ', unit: 'nm', min: 400, max: 700, step: 10, value: 520 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Buger-Lambert-Ber qonuniga ko‘ra eritmaning optik zichligi ($A$) nimaga to‘g‘ri proporsional?', options: ['Harorat kvadratiga', 'Eritma konsentratsiyasi ($C$) va nur o‘tayotgan qatlam qalinligi ($l$) ga', 'Bosimga', 'Idish hajmiga'], answer: 1, explain: 'A = ε · l · C.' },
      { q: 'Organik molekulaning aniq uglerod-vodorod skeleti va funksional guruhlar joylashuvini aniqlaydigan eng qudratli usul qaysi?', options: ['Filtrlash', 'YaMR (Yadro Magnit Rezonansi) spektroskopiyasi', 'Gravimetriya', 'Alanga testi'], answer: 1, explain: '¹H va ¹³C YaMR har bir atomning kimyoviy muhitini va qo‘shni vodorodlar sonini ko‘rsatadi.' },
      { q: 'Mass-spektrometriyada zarrachalarni ajratish qaysi kattalik nisbatiga asoslanadi?', options: ['Rang intensivligiga', 'Ionlarning massa va zaryad nisbatiga ($m/z$)', 'Qaynash haroratiga', 'Viskozlikka'], answer: 1, explain: 'Magnit maydonda og‘ish radiusi ionning m/z nisbatiga proporsional.' },
      { q: 'Agar kyuvetdan o‘tgan yorug‘lik intensivligi 10 marta kamaysa ($I = 0.1 I_0$), eritmaning optik zichligi $A$ nechaga teng?', options: ['0.1', '1.0', '2.0', '10'], answer: 1, explain: 'A = log₁₀(I₀/I) = log₁₀(10) = 1.0.' },
      { q: 'Gaz xromatografiyasida (GC) aralashma komponentlari qaysi tashuvchi gaz oqimida kolonkadan o‘tkaziladi?', options: ['Kislorod', 'Inert gazlar (geliy He, azot N₂ yoki argon)', 'Xlor', 'Ammiak'], answer: 1, explain: 'Tashuvchi gaz moddalar bilan reaksiyaga kirishmaydigan inert gaz bo‘lishi shart.' },
      { q: 'Uchuvchan emas va yuqori haroratda parchalanadigan dorivor moddalar va oqsillarni ajratish uchun qaysi xromatografiya ishlatiladi?', options: ['Gaz xromatografiyasi', 'Yuqori samarali suyuqlik xromatografiyasi (HPLC)', 'Quruq haydash', 'Alanga fotometriyasi'], answer: 1, explain: 'HPLC xona haroratida suyuq harakatchan fazada ishlaydi va parchalanishga olib kelmaydi.' },
      { q: 'Molekuladagi funksional guruhlarni (masalan C=O, O−H) ularning tebranish chastotasiga qarab aniqlaydigan usul qaysi?', options: ['Infraqizil (IQ) spektroskopiya', 'Gravimetriya', 'Kompleksonometriya', 'Elektroliz'], answer: 0, explain: 'Kimyoviy bog‘larning tebranishlari IQ sohada xarakterli yutilish polosalari beradi.' },
      { q: 'Konsentratsiya 2 marta oshirilganda kyuvet qalinligi o‘zgarmas qolsa, optik zichlik $A$ necha marta ortadi?', options: ['2 marta', '4 marta', '10 marta', 'O‘zgarmaydi'], answer: 0, explain: 'A = εlC chiziqli bog‘lanishga ko‘ra A ham 2 marta ortadi.' },
    ],
    problems: [
      { variants: [[2000, 1, 0.0004], [1500, 2, 0.0005], [1000, 1, 0.001]], build(i) { const [eps, l, C] = this.variants[i]; const A = eps * l * C; return { q: `ε = ${eps} L/(mol·sm), kyuvet qalinligi l = ${l} sm va konsentratsiya C = ${C} M bo‘lsa, optik zichlik A nechaga teng?`, correct: Number(A.toFixed(2)), unit: '', explain: `A = ${eps}·${l}·${C} = ${A.toFixed(2)}.` }; } },
      { variants: [[1.0, 10], [2.0, 1], [0, 100]], build(i) { const [A, T] = this.variants[i]; return { q: `Eritmaning optik zichligi A = ${A}. Undan o‘tadigan yorug‘lik ulushi (o‘tkazuvchanlik T) necha foizga teng?`, correct: T, unit: '%', explain: `T = 10^(-${A}) · 100% = ${T}%.` }; } },
    ],
  },
];
