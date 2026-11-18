// Kimyo 3-bo'lim: Noorganik Kimyo (12 mavzu: C3A-1..C3A-4, C3B-1..C3B-4, C3C-1..C3C-4)

export const CHEM_SEC3_TOPICS = [
  {
    id: 'C3A-1', code: 'K3A.1', sectionId: 'csec-3', subsectionId: 'C3A',
    subsectionTitle: 'A. Noorganik Birikmalarning Asosiy Sinflari',
    title: 'Oksidlar tasnifi, olinishi va xossalari',
    subtitle: 'Asosli, kislotali, amfoter va befarq oksidlar, ularning olinishi va kimyoviy xossalari',
    theory: {
      overview:
        'Oksidlar — ikki elementdan tashkil topgan va ulardan biri oksidlanish darajasi $-2$ ga teng kislorod bo‘lgan murakkab moddalar ($E_x O_y$). Kimyoviy xossalariga ko‘ra oksidlar tuz hosil qilmaydigan (befarq: $CO, NO, N_2O, SiO$) va tuz hosil qiluvchi 3 guruhga bo‘linadi: 1) Asosli oksidlar — quyi valentli metall oksidlari ($Na_2O, CaO, FeO$); kislotalar va kislotali oksidlar bilan tuz beradi; 2) Kislotali oksidlar — metallmas hamda yuqori OD (+5..+7) metall oksidlari ($SO_2, SO_3, CO_2, P_2O_5, CrO_3, Mn_2O_7$); ishqorlar bilan tuz beradi; 3) Amfoter oksidlar — ham kislota, ham ishqor bilan ta’sirlashadi ($BeO, ZnO, Al_2O_3, Cr_2O_3$).',
      keyLaws: [
        { title: 'Amfoterlik qoidasi', text: 'Amfoter oksid ($Al_2O_3, ZnO$) kislota bilan odatdagi tuz ($AlCl_3$), kuchli ishqor bilan esa alyuminat/sinkat ($NaAlO_2$ yoki $Na[Al(OH)_4]$) hosil qiladi.' },
        { title: 'Asosli + Kislotali → Tuz', text: 'Qarama-qarshi xossali oksidlar o‘zaro ta’sirlashib suv ajratmasdan tuz beradi: $CaO + CO_2 \\to CaCO_3$.' },
      ],
      formulas: [
        { latex: '\\text{CaO} + H_2O \\to \\text{Ca(OH)}_2, \\quad \\text{SO}_3 + H_2O \\to H_2\\text{SO}_4', name: 'Oksidlarning suv bilan reaksiyasi', symbols: 'Faqat faol metall va kislotali oksidlar' },
        { latex: '\\text{ZnO} + 2\\text{NaOH} \\to \\text{Na}_2\\text{ZnO}_2 + H_2O', name: 'Amfoter oksidning ishqor bilan erishi', symbols: 'Kuchli ishqor bilan qo‘shaloq tuz beradi' },
      ],
      constants: [
        { name: 'So‘ndirilmagan ohak (CaO) M_r', symbol: 'M(CaO)', value: '56', unit: 'g/mol' },
        { name: 'Korund (Al₂O₃) M_r', symbol: 'M(Al₂O₃)', value: '102', unit: 'g/mol' },
      ],
      applications: [
        'Kaltsiy oksid (so‘ndirilmagan ohak, CaO) qurilishda sement va ohak tayyorlashda asosiy xomashyo.',
        'Kremniy (IV) oksid ($SiO_2$) kvars shisha, optik tolalar va mikrochip izolyatorlari tayyorlashda ishlatiladi.',
      ],
      calculator: {
        title: 'Oksidda Kislorod Ulushi va Metall Valentligi Hisoblagichi',
        formulaDisplay: 'Val(E) = (2 · y) / x,   w(O) = (16y / M_r) · 100%',
        inputs: [
          { key: 'x', label: 'Element indeksi x (E_x O_y)', symbol: 'x', unit: '', min: 1, max: 3, step: 1, default: 2 },
          { key: 'y', label: 'Kislorod indeksi y', symbol: 'y', unit: '', min: 1, max: 7, step: 1, default: 3 },
          { key: 'Ar', label: 'Element A_r(E)', symbol: 'Ar', unit: '', min: 7, max: 140, step: 1, default: 27 },
        ],
        compute: (v) => {
          const val = (2 * v.y) / v.x;
          const mr = v.x * v.Ar + 16 * v.y;
          const wo = ((16 * v.y) / mr) * 100;
          return { value: `Val = ${val.toFixed(1)}`, unit: '', summary: `M_r = ${mr} | Kislorod ulushi w(O) = ${wo.toFixed(1)}% | Oksid turi: ${val <= 2 ? 'Asosli' : val === 3 ? 'Amfoter (Al/Fe/Cr)' : 'Kislotali'}` };
        },
      },
    },
    simulation: {
      title: 'Oksidlar Tuzilishi va CO₂ / Kislota-Asos Reaksiyalari (3Dmol & VLab)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=co2',
      openSourceSource: '3Dmol.js · PhET',
      openSourceNote: 'CO₂ kislotali oksid molekulasini 3D kuzating yoki virtual laboratoriyada reaksiya muhitini tekshiring.',
      alternateSims: [
        { label: 'pH va Oksidlar eritmasi muhiti', source: 'PhET · VLab', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Oksidlar Gidratatsiyasi va Muhit Harorati Stendi',
        description: 'Kislotali yoki asosli oksid suvga tushganda harorat va muhit ko‘rsatkichi o‘zgarishini kuzating.',
        controls: [
          { key: 'temp', label: 'Suv harorati', unit: '°C', min: 10, max: 100, step: 5, value: 45 },
          { key: 'conc', label: 'Oksid miqdori', unit: 'M', min: 0.5, max: 5, step: 0.5, value: 2.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyidagi oksidlarning qaysi biri tuz hosil qilmaydigan (befarq) oksid hisoblanadi?', options: ['CO₂', 'CO va NO', 'SO₃', 'CaO'], answer: 1, explain: 'CO, NO, N₂O va SiO tuz hosil qilmaydigan befarq oksidlardir.' },
      { q: 'Qaysi oksid amfoter xossaga ega (ham HCl, ham NaOH bilan reaksiyaga kirishadi)?', options: ['MgO', 'ZnO va Al₂O₃', 'SO₂', 'K₂O'], answer: 1, explain: 'BeO, ZnO, Al₂O₃, Cr₂O₃ amfoter oksidlardir.' },
      { q: 'Marganets (VII) oksidi ($Mn_2O_7$) qaysi oksid turiga mansub?', options: ['Asosli', 'Kislotali (HMnO₄ ga mos)', 'Amfoter', 'Befarq'], answer: 1, explain: 'Metallarning +5, +6, +7 yuqori oksidlanish darajasidagi oksidlari (CrO₃, Mn₂O₇) kislotali xossa ko‘rsatadi.' },
      { q: 'Qaysi kislotali oksid suvda bevosita erimaydi (angidrididan suv bilan olib bo‘lmaydi)?', options: ['SO₃', 'P₂O₅', 'SiO₂ (qum)', 'N₂O₅'], answer: 2, explain: 'SiO₂ atom kristall panjarali bo‘lgani uchun suvda erimaydi; H₂SiO₃ silikat tuzlaridan olinadi.' },
      { q: '1 mol $CaO$ bilan necha mol $CO_2$ ta’sirlashib $CaCO_3$ hosil qiladi?', options: ['0.5 mol', '1 mol', '2 mol', '3 mol'], answer: 1, explain: 'CaO + CO₂ → CaCO₃ (1:1 nisbatda).' },
      { q: 'Temir (III) oksidining ($Fe_2O_3$) nisbiy molekulyar massasi nechaga teng? (Fe=56, O=16)', options: ['112', '144', '160', '216'], answer: 2, explain: '2·56 + 3·16 = 112 + 48 = 160.' },
      { q: 'Sulfit kislotaga ($H_2SO_3$) mos keluvchi kislotali oksid qaysi?', options: ['SO₃', 'SO₂', 'H₂S', 'SF₆'], answer: 1, explain: 'Oltingugurt +4 bo‘lgani uchun SO₂ + H₂O ⇌ H₂SO₃.' },
      { q: '$CaO + 2HCl \\to CaCl_2 + H_2O$ reaksiyasi oksidlarning qaysi xossasini isbotlaydi?', options: ['Asosli oksidning kislota bilan reaksiyasini', 'Kislotali xossani', 'Parachalanishni', 'OQR ni'], answer: 0, explain: 'Asosli oksid kislota bilan reaksiyaga kirishib tuz va suv beradi.' },
    ],
    problems: [
      { variants: [[112, 56], [84, 56], [28, 56]], build(i) { const [m, M] = this.variants[i]; const gCO2 = (m / M) * 44; return { q: `${m} g CaO (M=56) bilan to‘liq reaksiyaga kirishib CaCO₃ beradigan CO₂ (M=44) massasi necha gramm?`, correct: Number(gCO2.toFixed(1)), unit: 'g', explain: `n = ${m}/56 = ${m / 56} mol; m(CO₂) = ${m / 56}·44 = ${gCO2} g.` }; } },
      { variants: [[2, 5], [2, 3], [1, 3]], build(i) { const [x, y] = this.variants[i]; const val = (2 * y) / x; return { q: `E_${x}O_${y} oksidida E elementining valentligi nechaga teng?`, correct: val, unit: '', explain: `Val = (2·${y})/${x} = ${val}.` }; } },
    ],
  },
  {
    id: 'C3A-2', code: 'K3A.2', sectionId: 'csec-3', subsectionId: 'C3A',
    subsectionTitle: 'A. Noorganik Birikmalarning Asosiy Sinflari',
    title: 'Asoslar, ishqorlar va amfoter gidroksidlar',
    subtitle: 'Ishqorlar va suvda erimaydigan asoslar, amfoter gidroksidlar',
    theory: {
      overview:
        'Asoslar — metall kationi (yoki $NH_4^+$) va bir yoki bir nechta gidroksid guruhidan ($OH^-$) iborat murakkab moddalar ($Me(OH)_n$). Suvda eriydigan asoslar ishqorlar ($LiOH, NaOH, KOH, RbOH, CsOH, Ba(OH)_2, Ca(OH)_2$) deyiladi; ular indikatorlar rangini o‘zgartiradi ($\\text{pH}>7$), kislotalar, kislotali oksidlar va eruvchan tuzlar bilan cho‘kma hosil qilib reaksiyaga kirishadi. Suvda erimaydigan asoslar ($Cu(OH)_2, Fe(OH)_3$) qizdirilganda oksid va suvga parchalanadi. Amfoter gidroksidlar ($Zn(OH)_2, Al(OH)_3$) ham kislotada, ham ishqorda erib ketadi.',
      keyLaws: [
        { title: 'Qizdirishga munosabati', text: 'Ishqorlar ($NaOH, KOH$) erisa ham parchalanmaydi; suvda erimaydigan asoslar esa parchalanadi: $Cu(OH)_2 \\xrightarrow{t} CuO + H_2O$.' },
        { title: 'Amfoter gidroksid xossasi', text: '$Al(OH)_3 + 3HCl \\to AlCl_3 + 3H_2O$;  $Al(OH)_3 + NaOH \\to Na[Al(OH)_4]$.' },
      ],
      formulas: [
        { latex: '\\text{Me(OH)}_n + nH^+ \\to \\text{Me}^{n+} + nH_2O', name: 'Asosning kislota bilan neytrallanishi', symbols: 'Tuz va suv hosil bo‘ladi' },
        { latex: '2\\text{Fe(OH)}_3 \\xrightarrow{t^\\circ} \\text{Fe}_2\\text{O}_3 + 3H_2O', name: 'Erimaydigan asos parchalanishi', symbols: 'Tegishli oksid ajraladi' },
      ],
      constants: [
        { name: 'O‘yuvchi natriy (NaOH) M_r', symbol: 'M(NaOH)', value: '40.0', unit: 'g/mol' },
        { name: 'So‘ndirilgan ohak Ca(OH)₂ M_r', symbol: 'M(Ca(OH)₂)', value: '74.1', unit: 'g/mol' },
      ],
      applications: [
        'Natriy gidroksid (kaustik soda, NaOH) sovun pishirish, sellyuloza-qog‘oz va alyuminiy sanoatida millionlab tonna ishlatiladi.',
        'Magniy va alyuminiy gidroksidlari tibbiyotda oshqozon kislotaliligini pasaytiruvchi antatsid preparatlarda qo‘llaniladi.',
      ],
      calculator: {
        title: 'Ishqor Eritmasi pH va Neytrallash Kalkulyatori',
        formulaDisplay: 'n(OH⁻) = z · (m / M),   V(HCl) = n(OH⁻) / C_kislota',
        inputs: [
          { key: 'mass', label: 'NaOH (M=40) massasi', symbol: 'm', unit: 'g', min: 2, max: 80, step: 2, default: 20 },
          { key: 'cAcid', label: 'HCl konsentratsiyasi', symbol: 'C', unit: 'M', min: 0.5, max: 4, step: 0.5, default: 1.0 },
        ],
        compute: (v) => {
          const nOH = v.mass / 40;
          const vAcidL = nOH / v.cAcid;
          return { value: `${(vAcidL * 1000).toFixed(0)} mL`, unit: 'HCl', summary: `${nOH.toFixed(2)} mol NaOH ni to‘liq neytrallash uchun ${v.cAcid} M li HCl dan ${(vAcidL * 1000).toFixed(0)} mL kerak.` };
        },
      },
    },
    simulation: {
      title: 'Ishqorlar pH Muhiti va Titrlash Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=titration',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Byuretka orqali NaOH eritmasini kislotaga qo‘shib borib neytrallanish nuqtasini kuzating.',
      alternateSims: [
        { label: 'pH va Indikatorlar (PhET)', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_ph_titration',
        title: 'Ishqoriy Muhit (pH > 7) va Fenolftalein Indikatori',
        description: 'pH qiymatini 7 dan 14 gacha ko‘tarib ishqoriy muhit kuchayishini kuzating.',
        controls: [
          { key: 'pH', label: 'Eritma pH', unit: '', min: 7, max: 14, step: 0.2, value: 11.4 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi birikmalar suvda yaxshi eriydigan ishqorlar qatoriga kiradi?', options: ['Cu(OH)₂ va Fe(OH)₃', 'NaOH, KOH va Ba(OH)₂', 'Zn(OH)₂ va Al(OH)₃', 'Fe(OH)₂ va Mg(OH)₂'], answer: 1, explain: 'Ishqoriy metall va Ba gidroksidlari suvda yaxshi erib kuchli ishqor hosil qiladi.' },
      { q: 'Mis (II) gidroksid ($Cu(OH)_2$) qanday rangli cho‘kma va qizdirilganda nimaga aylanadi?', options: ['Oq, erib ketadi', 'Havorang cho‘kma, qizdirilganda qora CuO va H₂O ga parchalanadi', 'Qizil, o‘zgarmaydi', 'Yashil gaz chiqadi'], answer: 1, explain: 'Cu(OH)₂ havorang cho‘kma; qizdirilsa CuO (qora) + H₂O beradi.' },
      { q: 'Qaysi gidroksid amfoter xossaga ega (ham kislotada, ham ishqor eritmasida eriydi)?', options: ['NaOH', 'Al(OH)₃', 'Ba(OH)₂', 'Ca(OH)₂'], answer: 1, explain: 'Alyuminiy gidroksid kislota va kuchli ishqorda eriydigan amfoter birikmadir.' },
      { q: '80 g natriy gidroksid ($NaOH$, M=40) ni to‘liq neytrallash uchun necha mol xlorid kislota ($HCl$) zarur?', options: ['1 mol', '2 mol', '3 mol', '4 mol'], answer: 1, explain: 'n(NaOH) = 80/40 = 2 mol; NaOH + HCl -> 1:1 => 2 mol HCl.' },
      { q: 'So‘ndirilgan ohak suvining ($Ca(OH)_2$) xiralashishi qaysi gaz borligining sifat reaksiyasi hisoblanadi?', options: ['Kislorod (O₂)', 'Karbonat angidrid (CO₂)', 'Vodorod (H₂)', 'Azot (N₂)'], answer: 1, explain: 'Ca(OH)₂ + CO₂ → CaCO₃↓ (oq cho‘kma) + H₂O.' },
      { q: 'Eritmada fenolftalein qaysi muhitda yorqin pushti rang beradi?', options: ['Kislotali', 'Neytral', 'Ishqoriy (OH⁻ bor joyda)', 'Faqat tuzli'], answer: 2, explain: 'Fenolftalein ishqoriy muhit indikatoridir.' },
      { q: 'Kalsiy gidroksid ($Ca(OH)_2$) tarkibida nechta kislorod va vodorod atomi bor?', options: ['1 ta O, 1 ta H', '2 ta O, 2 ta H', '2 ta O, 1 ta H', '1 ta O, 2 ta H'], answer: 1, explain: 'Qavs tashqarisidagi 2 indeksi har ikkala elementga tegishli: 2 O va 2 H.' },
      { q: '$FeSO_4$ eritmasiga $NaOH$ qo‘shilsa avval qanday cho‘kma tushadi?', options: ['Oq', 'Yashil-oq Fe(OH)₂ (havoda qo‘ng‘ir Fe(OH)₃ ga aylanadi)', 'Sariq', 'Qizil'], answer: 1, explain: 'Fe(OH)₂ havodagi kislorod ta’sirida tezda qo‘ng‘ir Fe(OH)₃ ga oksidlanadi.' },
    ],
    problems: [
      { variants: [[40, 1], [80, 2], [20, 0.5]], build(i) { const [m, c] = this.variants[i]; const vl = (m / 40) / c; return { q: `${m} g NaOH (M=40) ni neytrallash uchun ${c} M li HCl dan necha litr kerak?`, correct: vl, unit: 'L', explain: `n = ${m / 40} mol; V = n/${c} = ${vl} L.` }; } },
      { variants: [[98, 80], [196, 160], [49, 40]], build(i) { const [mCu, mO] = this.variants[i]; return { q: `${mCu} g Cu(OH)₂ (M=98) qizdirib to‘liq parchalandi. Necha gramm qora CuO (M=80) hosil bo‘ladi?`, correct: mO, unit: 'g', explain: `n = ${mCu}/98 = ${mCu / 98} mol CuO => ${mO} g.` }; } },
    ],
  },
  {
    id: 'C3A-3', code: 'K3A.3', sectionId: 'csec-3', subsectionId: 'C3A',
    subsectionTitle: 'A. Noorganik Birikmalarning Asosiy Sinflari',
    title: 'Kislotalar tasnifi, negizligi va kimyoviy xossalari',
    subtitle: 'Kislorodli va kislorodsiz kislotalar, negizligi, kimyoviy xossalari',
    theory: {
      overview:
        'Kislotalar — suvli eritmada $H^+$ (aniqrog‘i $H_3O^+$) kationlari va kislota qoldig‘i anioniga ajraladigan murakkab moddalar. Tarkibiga ko‘ra kislorodsiz ($HCl, HBr, H_2S$) va kislorodli ($HNO_3, H_2SO_4, H_3PO_4$) bo‘ladi. Metallga almashina oladigan vodorod atomlari soniga qarab bir negizli ($HCl, HNO_3$), ikki negizli ($H_2SO_4, H_2CO_3$) va uch negizli ($H_3PO_4$) kislotalar farqlanadi. Umumiy xossalari: indikatorni qizartiradi, asoslar/ishqorlar va asosli oksidlar bilan tuz beradi, Beketov qatorida H dan chapdagi metallardan $H_2$ ni siqib chiqaradi (istisno: $HNO_3$ va kons. $H_2SO_4$ metallar bilan $H_2$ emas, azot/oltingugurt oksidlari chiqaradi).',
      keyLaws: [
        { title: 'Kuchli vs Kuchsiz kislotalar', text: 'Eng kuchli noorganik kislotalar: $HClO_4 > HI > HBr > HCl > H_2SO_4 > HNO_3$. Kuchsiz va beqarorlari: $H_2CO_3, H_2SO_3, H_2SiO_3, H_2S$.' },
        { title: 'Nitrat va kons. Sulfat kislota o‘ziga xosligi', text: 'Ular juda kuchli oksidlovchilar bo‘lib, hatto passiv mis ($Cu$) bilan ham ta’sirlashadi, bunda vodorod gazi o‘rniga $NO_2 / NO$ yoki $SO_2$ ajraladi.' },
      ],
      formulas: [
        { latex: '\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + H_2\\uparrow', name: 'Faol metallning kislota bilan reaksiyasi', symbols: 'Vodoroddan chapdagi metallar uchun' },
        { latex: '\\text{Cu} + 2H_2\\text{SO}_{4(\\text{kons})} \\xrightarrow{t} \\text{CuSO}_4 + \\text{SO}_2\\uparrow + 2H_2O', name: 'Konsentrlangan sulfat kislotaning mis bilan reaksiyasi', symbols: 'OQR oksidlovchi xossasi' },
      ],
      constants: [
        { name: 'Ortofosfat kislota (H₃PO₄) M_r', symbol: 'M(H₃PO₄)', value: '98.0', unit: 'g/mol (3 negizli)' },
        { name: 'Nitrat kislota (HNO₃) M_r', symbol: 'M(HNO₃)', value: '63.0', unit: 'g/mol (1 negizli)' },
      ],
      applications: [
        'Sulfat kislota ($H_2SO_4$) "kimyo sanoatining noni" bo‘lib, o‘g‘itlar, qo‘rg‘oshin akkumulyatorlari va bo‘yoqlar ishlab chiqarishda yetakchi o‘rinda.',
        'Xlorid kislota ($HCl$) odam oshqozon shirasi (~0.4%) tarkibida bo‘lib, ovqat hazm qilish fermentlarini faollashtiradi.',
      ],
      calculator: {
        title: 'Kislota-Metall Vodorod Ajralishi Hisoblagichi',
        formulaDisplay: 'n(H₂) = (m_Me / Ar_Me) · (Val / 2),   V = n · 22.4 L',
        inputs: [
          { key: 'mMe', label: 'Metall massasi (Zn=65, Mg=24, Al=27)', symbol: 'm', unit: 'g', min: 1, max: 130, step: 1, default: 65 },
          { key: 'Ar', label: 'Metall A_r', symbol: 'Ar', unit: 'g/mol', min: 23, max: 65, step: 1, default: 65 },
          { key: 'val', label: 'Metall valentligi', symbol: 'Val', unit: '', min: 1, max: 3, step: 1, default: 2 },
        ],
        compute: (v) => {
          const nH2 = (v.mMe / v.Ar) * (v.val / 2);
          const vL = nH2 * 22.4;
          return { value: `${vL.toFixed(1)} L H₂`, unit: '', summary: `Ajralgan vodorod moli: ${nH2.toFixed(2)} mol | Massasi: ${(nH2 * 2).toFixed(2)} g` };
        },
      },
    },
    simulation: {
      title: 'Kislotalar Kuchliligi, pH va Titrlash Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=ph_scale',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Kuchli va kuchsiz kislotalarning pH qiymatini va indikatorlarga ta’sirini virtual laboratoriyada tekshiring.',
      alternateSims: [
        { label: 'Kislota-asos titrlash (ChemCollective)', source: 'ChemCollective', url: 'sims/chem3d/vlab.html?lab=titration' },
      ],
      parametric: {
        mode: 'chem_ph_titration',
        title: 'Kislotali Muhit pH va Lakmus Indikatori',
        description: 'pH = 1..6.5 oraliqda vodorod ionlari konsentratsiyasi va kislotalilik kuchini kuzating.',
        controls: [
          { key: 'pH', label: 'Kislota pH', unit: '', min: 1, max: 7, step: 0.2, value: 2.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi kislota kislorodsiz va ikki negizli kislotadir?', options: ['HCl', 'H₂S (sulfid kislota)', 'H₂SO₄', 'H₃PO₄'], answer: 1, explain: 'H₂S tarkibida kislorod yo‘q va 2 ta vodorod ionini bera oladi.' },
      { q: 'Qaysi kislota tarkibida kislorod bo‘lib, lekin 3 ta emas faqat 1 ta negizga (almashinuvchi H ga) ega?', options: ['H₃PO₄ (3 negizli)', 'HNO₃ (nitrat)', 'H₂SO₄ (2 negizli)', 'H₃PO₂ (fosfinat — istisno!)'], answer: 1, explain: 'HNO₃ bir negizli kuchli kislorodli kislotadir (H₃PO₂ ham 1 negizli, lekin maktab/asosiy tasnifda HNO₃ va CH₃COOH ko‘p uchraydi).' },
      { q: 'Suyultirilgan sulfat kislota bilan qaysi metall reaksiyaga kirishib vodorod ($H_2$) chiqaradi?', options: ['Cu', 'Ag', 'Zn va Fe', 'Au'], answer: 2, explain: 'Zn va Fe vodoroddan chapda turadi; Cu, Ag, Au esa suyultirilgan H₂SO₄ dan H₂ chiqara olmaydi.' },
      { q: 'Shisha idishlarni o‘yib yozishda ishlatiladigan plavik (ftorid) kislotaning formulasi nima?', options: ['HCl', 'HF', 'HBr', 'HNO₃'], answer: 1, explain: 'HF kremniy (IV) oksid SiO₂ bilan reaksiyaga kirishib SiF₄ gazini hosil qilgani uchun shishani eritadi.' },
      { q: '65 g rux ($A_r = 65$) mo‘l $HCl$ da to‘liq eriganda n.sh. da necha litr vodorod chiqadi?', options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'], answer: 1, explain: '1 mol Zn + 2HCl → ZnCl₂ + H₂↑ => 1 mol H₂ = 22.4 L.' },
      { q: 'Konsentrlangan nitrat kislotada ($HNO_3$) sovuqda qaysi metallar passivlashadi (erib ketmaydi)?', options: ['Cu va Ag', 'Fe, Al va Cr', 'Zn va Mg', 'Na va K'], answer: 1, explain: 'Sovuq kons. HNO₃ da Fe, Al, Cr sirtida zich himoya oksid pardasi hosil bo‘ladi.' },
      { q: 'H₂SiO₃ (silikat kislota) qanday agregat holatda bo‘ladi?', options: ['Gaz', 'Suvda erimaydigan jel/qattiq modda', 'Oson uchuvchi suyuqlik', 'Kuchli gaz'], answer: 1, explain: 'Silikat kislota noorganik kislotalar ichida suvda erimaydigan kam sonli vakildir.' },
      { q: 'Oqsil bilan sariq rangli "ksantoprotein" reaksiya beradigan kislota qaysi?', options: ['HCl', 'HNO₃ (konsentrlangan)', 'H₂CO₃', 'H₃PO₄'], answer: 1, explain: 'Kons. HNO₃ teri va oqsillardagi aromatik halqalarni nitrolab sariq dog‘ qoldiradi.' },
    ],
    problems: [
      { variants: [[24, 24, 2], [65, 65, 2], [54, 27, 3]], build(i) { const [m, Ar, v] = this.variants[i]; const vL = (m / Ar) * (v / 2) * 22.4; return { q: `${m} g (Ar=${Ar}, val=${v}) metall mo‘l HCl da eridi. N.sh. da necha litr H₂ ajraladi?`, correct: Number(vL.toFixed(1)), unit: 'L', explain: `n(H₂) = ${(m / Ar) * (v / 2)} mol => V = ${vL.toFixed(1)} L.` }; } },
      { variants: [[98, 2], [147, 3], [196, 2]], build(i) { const [m, neg] = this.variants[i]; const na = (m / 98) * neg * 40; return { q: `${m} g (M=98) ${neg}-negizli kislotani to‘liq neytrallash uchun necha gramm NaOH (M=40) zarur?`, correct: na, unit: 'g', explain: `n(H⁺) = (${m}/98)·${neg} = ${(m / 98) * neg} mol => ${na} g NaOH.` }; } },
    ],
  },
  {
    id: 'C3A-4', code: 'K3A.4', sectionId: 'csec-3', subsectionId: 'C3A',
    subsectionTitle: 'A. Noorganik Birikmalarning Asosiy Sinflari',
    title: 'Tuzlar tasnifi va genetik bog‘lanish',
    subtitle: 'O‘rta, nordon, asosli, qo‘shaloq va kompleks tuzlar, genetik bog‘lanish',
    theory: {
      overview:
        'Tuzlar — metall kationi (yoki $NH_4^+$) va kislota qoldig‘i anionidan tashkil topgan kristall elektrolitlar. Tasnifi: 1) O‘rta (normal) tuzlar — kislotadagi barcha H atomlari metallga almashgan ($NaCl, K_2SO_4, CaCO_3$); 2) Nordon (gidrotuzlar) — tarkibida almashinmagan H atomi saqlanadi ($NaHCO_3$ ichimlik sodasi, $Ca(H_2PO_4)_2$); 3) Asosli (gidroksotuzlar) — tarkibida ortiqcha $OH^-$ guruhi bor ($(CuOH)_2CO_3$ malaxit); 4) Qo‘shaloq ($KAl(SO_4)_2$ achchiqtosh) va Aralash ($CaOCl_2$ xlorli ohak) tuzlar; 5) Kompleks tuzlar — markaziy ion va ligandlardan iborat ($K_4[Fe(CN)_6], [Ag(NH_3)_2]Cl$). Moddalarning asosiy sinflari o‘rtasidagi genetik qatorlar: Metall → Asosli oksid → Asos → Tuz hamda Metallmas → Kislotali oksid → Kislota → Tuz.',
      keyLaws: [
        { title: 'Nordon tuzlar olinish sharti', text: 'Faqat ko‘p negizli kislotalar ($H_2SO_4, H_2CO_3, H_3PO_4$) ga yetishmaydigan miqdorda asos yoki ortiqcha kislotali oksid qo‘shilganda nordon tuz hosil bo‘ladi: $NaOH + CO_2(\\text{mo‘l}) \\to NaHCO_3$.' },
        { title: 'Genetik qator qonuniyati', text: 'Har qanday sinf moddasidan ketma-ket kimyoviy reaksiyalar zanjiri orqali o‘sha elementning boshqa sinflariga o‘tish mumkin.' },
      ],
      formulas: [
        { latex: '\\text{Ca} \\xrightarrow{+O_2} \\text{CaO} \\xrightarrow{+H_2O} \\text{Ca(OH)}_2 \\xrightarrow{+CO_2} \\text{CaCO}_3', name: 'Kalsiyning genetik qatori', symbols: 'Metall → Oksid → Asos → Tuz' },
        { latex: '\\text{NaHCO}_3 + \\text{NaOH} \\to \\text{Na}_2\\text{CO}_3 + H_2O', name: 'Nordon tuzning o‘rta tuzga o‘tishi', symbols: 'Ishqor bilan neytrallash' },
      ],
      constants: [
        { name: 'Ichimlik sodasi (NaHCO₃) M_r', symbol: 'M(NaHCO₃)', value: '84.0', unit: 'g/mol' },
        { name: 'Ohaktosh / Bo‘r (CaCO₃) M_r', symbol: 'M(CaCO₃)', value: '100.0', unit: 'g/mol' },
      ],
      applications: [
        'Natriy gidrokarbonat ($NaHCO_3$, ichimlik sodasi) oziq-ovqat pishirishda va oshqozon zardasini bosishda qo‘llaniladi.',
        'Kalsiy digidrofosfat $Ca(H_2PO_4)_2$ suvda yaxshi eruvchan nordon tuz bo‘lib, superfosfat o‘g‘itining asosini tashkil etadi.',
      ],
      calculator: {
        title: 'Nordon / O‘rta Tuz Mol Nisbati Kalkulyatori (NaOH + H₃PO₄)',
        formulaDisplay: 'n(NaOH) / n(H₃PO₄):  1:1 → NaH₂PO₄ | 2:1 → Na₂HPO₄ | 3:1 → Na₃PO₄',
        inputs: [
          { key: 'nBase', label: 'NaOH moli', symbol: 'n(NaOH)', unit: 'mol', min: 1, max: 6, step: 0.5, default: 2.0 },
          { key: 'nAcid', label: 'H₃PO₄ moli', symbol: 'n(H₃PO₄)', unit: 'mol', min: 0.5, max: 3, step: 0.5, default: 1.0 },
        ],
        compute: (v) => {
          const r = v.nBase / v.nAcid;
          const prod = r <= 1.2 ? 'NaH₂PO₄ (digidrofosfat — nordon)' : r <= 2.3 ? 'Na₂HPO₄ (gidrofosfat — nordon)' : 'Na₃PO₄ (ortofosfat — o‘rta tuz)';
          return { value: `Nisbat ${r.toFixed(1)} : 1`, unit: '', summary: `Hosil bo‘ladigan asosiy tuz: ${prod}` };
        },
      },
    },
    simulation: {
      title: 'Tuzlar Cho‘kmasi va Kompleks Ionlar Laboratoriyasi (3Dmol & VLab)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=flame_test',
      openSourceSource: 'Amrita OLabs · VLab',
      openSourceNote: 'Turli metall tuzlarining kation va anionlarini sifat reaksiyalarida tekshiring.',
      alternateSims: [
        { label: 'NaCl tuz kristall panjarasi 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Tuz Kristallizatsiyasi va Genetik O‘zgarish',
        description: 'Eritma konsentratsiyasi va haroratiga ko‘ra tuzlar hosil bo‘lishini kuzating.',
        controls: [
          { key: 'temp', label: 'Harorat', unit: '°C', min: 10, max: 100, step: 5, value: 35 },
          { key: 'conc', label: 'Tuz konsentratsiyasi', unit: 'M', min: 0.5, max: 5, step: 0.5, value: 2.5 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Quyidagi tuzlardan qaysi biri nordon tuz (gidrotuz) hisoblanadi?', options: ['Na₂CO₃', 'NaHCO₃ (ichimlik sodasi)', '(CuOH)₂CO₃', 'KAl(SO₄)₂'], answer: 1, explain: 'NaHCO₃ tarkibida metallga almashinmagan bitta H atomi bor.' },
      { q: 'Malaxit ($(CuOH)_2CO_3$) qaysi tuzlar sinfiga kiradi?', options: ['Nordon tuz', 'Asosli tuz', 'O‘rta tuz', 'Kompleks tuz'], answer: 1, explain: 'Tarkibida OH⁻ guruhi tutgan tuzlar asosli tuzlardir.' },
      { q: 'Qaysi moddalar genetik qatorni to‘g‘ri ifodalaydi: $S \\to SO_2 \\to ? \\to Na_2SO_3$?', options: ['H₂SO₄', 'H₂SO₃', 'SO₃', 'H₂S'], answer: 1, explain: 'S (+4) sulfid emas, sulfit qatoriga kiradi: SO₂ + H₂O → H₂SO₃ → Na₂SO₃.' },
      { q: 'Qaysi birikma kompleks tuzga misol bo‘ladi?', options: ['K₄[Fe(CN)₆]', 'CaCl₂', 'NaHSO₄', 'Mg(NO₃)₂'], answer: 0, explain: 'Kvadrat qavs ichida kompleks ion tutuvchi tuzlar kompleks tuzlardir.' },
      { q: '1 mol $H_3PO_4$ ga 1 mol $KOH$ qo‘shilsa, qanday tuz hosil bo‘ladi?', options: ['K₃PO₄', 'K₂HPO₄', 'KH₂PO₄', 'KPO₃'], answer: 2, explain: 'Faqat bitta H⁺ ioniga almashadi: H₃PO₄ + KOH → KH₂PO₄ + H₂O.' },
      { q: 'Qaysi birikma bir negizli kislota ($HCl, HNO_3$) dan nordon tuz hosil qila oladimi?', options: ['Ha, har doim', 'Yo‘q, chunki bir negizli kislota faqat 1 ta H⁺ beradi', 'Faqat qizdirilganda', 'Faqat kaliy bilan'], answer: 1, explain: 'Nordon tuz olish uchun kislota kamida 2 negizli bo‘lishi kerak.' },
      { q: 'Qaysi juftlik "qo‘shaloq tuz" va "aralash tuz"ga misol?', options: ['KAl(SO₄)₂ va CaOCl₂', 'NaCl va KCl', 'NaHCO₃ va CuSO₄', 'FeCl₂ va FeCl₃'], answer: 0, explain: 'KAl(SO₄)₂ da 2 xil kation (qo‘shaloq), CaOCl₂ da 2 xil kislota qoldig‘i bor (aralash).' },
      { q: '$NaHCO_3$ (qattiq) qizdirilganda qaysi gazlar va tuz hosil bo‘ladi?', options: ['Na₂O va H₂', 'Na₂CO₃, CO₂↑ va H₂O', 'NaOH va O₂', 'Faqat NaCl'], answer: 1, explain: '2NaHCO₃ → Na₂CO₃ + CO₂↑ + H₂O.' },
    ],
    problems: [
      { variants: [[168, 84], [84, 84], [252, 84]], build(i) { const [m, M] = this.variants[i]; const co2L = (m / M / 2) * 22.4; return { q: `${m} g ichimlik sodasi NaHCO₃ (M=84) to‘liq qizdirib parchalandi (2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O). N.sh. da necha litr CO₂ chiqadi?`, correct: Number(co2L.toFixed(1)), unit: 'L', explain: `n(NaHCO₃)=${m / 84}; n(CO₂)=${m / 84 / 2} mol => V = ${co2L.toFixed(1)} L.` }; } },
      { variants: [[100, 100], [50, 100], [200, 100]], build(i) { const [m, M] = this.variants[i]; return { q: `${m} g ohaktosh (CaCO₃, M=100) qizdirib to‘liq parchalandi. Necha gramm so‘ndirilmagan ohak CaO (M=56) olinadi?`, correct: (m / M) * 56, unit: 'g', explain: `n = ${m / M} mol; m(CaO) = ${m / M}·56 = ${(m / M) * 56} g.` }; } },
    ],
  },
  {
    id: 'C3B-1', code: 'K3B.1', sectionId: 'csec-3', subsectionId: 'C3B',
    subsectionTitle: 'B. Metallmaslar Kimyosi',
    title: 'Vodorod va Galogenlar (VII A guruh)',
    subtitle: 'Vodorod, ftor, xlor, brom, yod va ularning birikmalari (vodorod xlorid, xlorid kislota)',
    theory: {
      overview:
        'Vodorod ($Z=1, 1s^1$) tabiatda va Koinotda eng ko‘p tarqalgan yengil gaz ($H_2$ — rangsiz, eng yengil gaz, havodan $14.5$ marta yengil); ham qaytaruvchi ($+1$), ham faol metallar bilan gidridlarda ($NaH$) $-1$ daraja namoyon qiladi. Galogenlar (VII A guruh: $F, Cl, Br, I$) tashqi qavatida $ns^2 np^5$ (7 ta elektron) tutadi va bitta elektron olib $-1$ gacha qaytariluvchi eng kuchli oksidlovchi metallmaslardir. Guruhda yuqoridan pastga agregat holat o‘zgaradi: $F_2$ (och sariq gaz), $Cl_2$ (sarg‘ish-yashil gaz), $Br_2$ (qizil-qo‘ng‘ir suyuqlik), $I_2$ (binafsha kristall). Har bir yuqori galogen o‘zidan pastki galogenni galogenidlaridan siqib chiqaradi ($Cl_2 + 2KI \\to 2KCl + I_2$). Vodorod xlorid ($HCl$) suvda juda yaxshi erib kuchli xlorid kislota hosil qiladi.',
      keyLaws: [
        { title: 'Galogenlar faolligi qatori', text: 'Oksidlovchilik kuchi yuqoridan pastga kamayadi: $F_2 > Cl_2 > Br_2 > I_2$. Ftor hatto suvni ham oksidlab $O_2$ chiqaradi!' },
        { title: 'Galogenid ionlarga sifat reaksiyasi', text: 'Kumush nitrat ($AgNO_3$) bilan: $AgCl\\downarrow$ (oq tvorogsimon), $AgBr\\downarrow$ (och sariq), $AgI\\downarrow$ (to‘q sariq) cho‘kmalar tushadi.' },
      ],
      formulas: [
        { latex: 'Cl_2 + 2\\text{KBr} \\to 2\\text{KCl} + Br_2', name: 'Faol galogenning siqib chiqarish reaksiyasi', symbols: 'Cl₂ kuchliroq oksidlovchi' },
        { latex: '\\text{Ag}^+ + \\text{Cl}^- \\to \\text{AgCl}\\downarrow\\;(\\text{oq})', name: 'Xlorid ionini aniqlash reaksiyasi', symbols: 'Nitrat kislotada erimaydi' },
      ],
      constants: [
        { name: 'Vodorod (H₂) molyar massasi', symbol: 'M(H₂)', value: '2.016', unit: 'g/mol' },
        { name: 'Xlor (Cl₂) havoga nisbatan zichligi', symbol: 'D_havo(Cl₂)', value: '2.45', unit: '(71/29)' },
      ],
      applications: [
        'Vodorod ekologik toza kelajak yoqilg‘isi (yoqilg‘i elementlarida $2H_2 + O_2 \\to 2H_2O$) va ammiak sintezida ishlatiladi.',
        'Xlor ichimlik suvini zararsizlantirishda va PVX polimerlari olishda; yod esa tibbiyotda antiseptik va qalqonsimon bez faoliyati uchun zarur.',
      ],
      calculator: {
        title: 'Vodorod / Xlor Gaz Zichligi va Kislota Reaksiyasi Kalkulyatori',
        formulaDisplay: 'M(X₂) = 2 · Ar,   D_havo = M / 29,   V(HCl) = n · 22.4 L',
        inputs: [
          { key: 'massCl', label: 'Xlor (Cl₂, M=71) massasi', symbol: 'm(Cl₂)', unit: 'g', min: 7.1, max: 142, step: 7.1, default: 71 },
        ],
        compute: (v) => {
          const n = v.massCl / 71;
          const nHCl = 2 * n;
          return { value: `${nHCl.toFixed(1)} mol HCl`, unit: '', summary: `${n.toFixed(2)} mol Cl₂ dan ${(nHCl * 36.5).toFixed(1)} g (${(nHCl * 22.4).toFixed(1)} L n.sh.) HCl gazi olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Kation va Galogenid Analizi (VLab / 3Dmol)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=stoichiometry',
      openSourceSource: 'PhET · Amrita OLabs',
      openSourceNote: '2H₂ + O₂ reaksiya stexiometriyasi va vodorod gazining hosil bo‘lishini virtual stendda tekshiring.',
      alternateSims: [
        { label: 'Suv (H₂O) yonish mahsuloti 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=h2o' },
      ],
      parametric: {
        mode: 'chem_stoichiometry',
        title: 'Vodorod Yonishi va Xlorid Kislota Sintezi',
        description: 'Vodorod va oksidlovchi mollari nisbatini o‘zgartirib, mahsulot unumini kuzating.',
        controls: [
          { key: 'nH2', label: 'Vodorod H₂', unit: 'mol', min: 1, max: 10, step: 1, value: 4 },
          { key: 'nO2', label: 'Kislorod / Oksidlovchi', unit: 'mol', min: 1, max: 6, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Oddiy sharoitda qizil-qo‘ng‘ir rangli og‘ir suyuqlik holatida bo‘ladigan galogen qaysi?', options: ['Ftor (F₂)', 'Xlor (Cl₂)', 'Brom (Br₂)', 'Yod (I₂)'], answer: 2, explain: 'Galogenlar ichida faqat brom (Br₂) xona haroratida suyuq metallmasdir.' },
      { q: 'Qaysi galogen xlorid kislota ($HCl$) va boshqa barcha galogenid tuzlaridan o‘zidan pastki galogenni siqib chiqaradi?', options: ['Faqat yod', 'Ftor (va Xlor Br⁻, I⁻ ni)', 'Brom Cl⁻ ni', 'Hech qaysisi'], answer: 1, explain: 'Oksidlovchilik qatori F₂ > Cl₂ > Br₂ > I₂.' },
      { q: 'Xlorid ionini ($Cl^-$) sifat jihatdan aniqlash uchun qaysi reaktiv ishlatiladi?', options: ['BaCl₂', 'AgNO₃ (oq cho‘kma AgCl beradi)', 'NaOH', 'Fenolftalein'], answer: 1, explain: 'Ag⁺ + Cl⁻ → AgCl↓ (nitrat kislotada erimaydigan oq cho‘kma).' },
      { q: 'Vodorod ($H_2$) molekulasining havoga nisbatan zichligi taxminan nechaga teng?', options: ['0.069 (havodan 14.5 marta yengil)', '1.0', '2.45', '14.5'], answer: 0, explain: 'D_havo = 2 / 29 ≈ 0.069 — eng yengil gaz.' },
      { q: 'Qaysi birikmada vodorodning oksidlanish darajasi −1 ga teng?', options: ['H₂O', 'HCl', 'NaH va CaH₂ (metall gidridlari)', 'NH₃'], answer: 2, explain: 'Metallarning elektromanfiyligi H dan kichik bo‘lgani uchun gidridlarda H⁻¹ bo‘ladi.' },
      { q: 'Xlorid kislota ($HCl$) ning kumush ($Ag$) bilan reaksiyasida nima hosil bo‘ladi?', options: ['AgCl + H₂', 'Reaksiya bormaydi (Ag vodoroddan o‘ngda)', 'Ag₂O', 'Cl₂ gazi'], answer: 1, explain: 'Kumush passiv metall bo‘lib, kislotadan vodorodni siqib chiqarmaydi.' },
      { q: 'Kraxmal eritmasi bilan to‘q ko‘k rang hosil qiluvchi galogen qaysi?', options: ['Ftor', 'Xlor', 'Yod (I₂)', 'Brom'], answer: 2, explain: 'Yod kraxmalga xos sezgir sifat reaksiyasini (to‘q ko‘k rang) beradi.' },
      { q: 'Laboratoriyada vodorod gazini olishning eng keng tarqalgan usuli qaysi?', options: ['Zn + H₂SO₄(suyult) → ZnSO₄ + H₂↑', 'Cu + HCl', 'NaCl + H₂O', 'CaCO₃ ni qizdirish'], answer: 0, explain: 'Rux suyultirilgan kislota (HCl yoki H₂SO₄) bilan tinch va xavfsiz H₂ ajratadi.' },
    ],
    problems: [
      { variants: [[71], [35.5], [142], [17.75]], build(i) { const [m] = this.variants[i]; const hclL = (m / 71) * 2 * 22.4; return { q: `${m} g xlor (Cl₂, M=71) mo‘l vodorod bilan reaksiyaga kirishganda n.sh. da necha litr HCl hosil bo‘ladi?`, correct: Number(hclL.toFixed(1)), unit: 'L', explain: `n(Cl₂) = ${m / 71}; n(HCl) = ${(m / 71) * 2} mol => ${hclL.toFixed(1)} L.` }; } },
      { variants: [[11.2], [22.4], [44.8]], build(i) { const [v] = this.variants[i]; const mZn = (v / 22.4) * 65; return { q: `N.sh. da ${v} L vodorod olish uchun necha gramm rux (Ar=65) ni HCl da eritish kerak?`, correct: Number(mZn.toFixed(1)), unit: 'g', explain: `n(Zn)=n(H₂)=${v / 22.4} mol => m = ${mZn.toFixed(1)} g.` }; } },
    ],
  },
  {
    id: 'C3B-2', code: 'K3B.2', sectionId: 'csec-3', subsectionId: 'C3B',
    subsectionTitle: 'B. Metallmaslar Kimyosi',
    title: 'Xalkogenlar (VI A guruh) va sulfat kislota',
    subtitle: 'Kislorod, ozon, oltingugurt, vodorod sulfid, oltingugurt oksidlari, sulfat kislota ishlab chiqarish',
    theory: {
      overview:
        'VI A guruh elementlari — xalkogenlar ("ruda hosil qiluvchilar": $O, S, Se, Te$) tashqi qavatida $ns^2np^4$ (6 ta elektron) tutadi. Kislorod havoning 21% ini (hajm bo‘yicha), Yer po‘stlog‘ining ~49% ini (massa bo‘yicha) tashkil qiladi va faqat $-2$ (peroksidlarda $-1$, $OF_2$ da $+2$) darajaga ega. Uning allotropik shakli ozon ($O_3$) stratosferada ultrabinafsha nurlarni to‘suvchi qalqondir. Oltingugurt esa $-2$ ($H_2S$ palag‘da tuxum hidli gaz), $+4$ ($SO_2$ o‘tkir hidli gaz) va $+6$ ($SO_3, H_2SO_4$) oksidlanish darajalarini namoyon etadi. Sanoatda sulfat kislota ($H_2SO_4$) kontakt usulida pirit ($FeS_2$) yoki oltingugurtni yoqib $SO_2$ ga, $V_2O_5$ katalizatorida $SO_3$ ga aylantirish va oleumga yuttirish orqali olinadi.',
      keyLaws: [
        { title: 'Kontakt usuli 3 bosqichi', text: '1) $4FeS_2 + 11O_2 \\to 2Fe_2O_3 + 8SO_2$;  2) $2SO_2 + O_2 \\xrightleftharpoons{V_2O_5} 2SO_3$;  3) $SO_3 + H_2O \\to H_2SO_4$ (kons. $H_2SO_4$ da yuttirilib oleum olinadi).' },
        { title: 'Kons. H₂SO₄ ning gigroskopik va oksidlovchi xossasi', text: 'Suvni kuchli tortib olgani uchun quritgich sifatida qo‘llaniladi; shakarni ko‘mirga aylantirib qoraytiradi.' },
      ],
      formulas: [
        { latex: '3O_2 \\xrightarrow{\\text{elektr razryadi / UB}} 2O_3', name: 'Ozon hosil bo‘lish reaksiyasi', symbols: 'O₃ kuchli bakteritsid oksidlovchi' },
        { latex: '\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\to \\text{BaSO}_4\\downarrow\\;(\\text{oq})', name: 'Sulfat ioniga sifat reaksiyasi', symbols: 'Kislotalarda ham erimaydigan cho‘kma' },
      ],
      constants: [
        { name: 'Havodagi kislorod hajmiy ulushi', symbol: 'φ(O₂)', value: '20.95', unit: '%' },
        { name: 'Sulfat kislota (H₂SO₄) M_r', symbol: 'M(H₂SO₄)', value: '98.08', unit: 'g/mol' },
      ],
      applications: [
        'Sulfat kislota mineral o‘g‘itlar (superfosfat, ammoniy sulfat), metall tozalash va akkumulyator elektroliti ishlab chiqarishning asosi.',
        'Oltingugurt kauchukni vulkanizatsiya qilib rezina olishda va qishloq xo‘jaligida fungitsid sifatida ishlatiladi.',
      ],
      calculator: {
        title: 'Kontakt Usulida Piritdan (FeS₂) Sulfat Kislota Unumi',
        formulaDisplay: '1 mol FeS₂ (120 g) → 2 mol SO₂ → 2 mol H₂SO₄ (196 g)',
        inputs: [
          { key: 'mPirit', label: 'Sof pirit FeS₂ (M=120) massasi', symbol: 'm(FeS₂)', unit: 'kg', min: 10, max: 500, step: 10, default: 120 },
          { key: 'eff', label: 'Umumiy sanoat unumi η', symbol: 'η', unit: '%', min: 50, max: 100, step: 2, default: 90 },
        ],
        compute: (v) => {
          const mTheor = (v.mPirit / 120) * 2 * 98;
          const mAct = (mTheor * v.eff) / 100;
          return { value: `${mAct.toFixed(1)} kg H₂SO₄`, unit: '', summary: `Nazariy maksimal massa: ${mTheor.toFixed(1)} kg | ${v.eff}% unum bilan olinadigan 100% H₂SO₄: ${mAct.toFixed(1)} kg` };
        },
      },
    },
    simulation: {
      title: 'Oltingugurt Oksidlari (SO₂ ⇌ SO₃) Muvozanati va Kislota Muhiti',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=equilibrium',
      openSourceSource: 'PhET · ChemCollective',
      openSourceNote: 'Qaytar reaksiya va kontakt katalizi muvozanatini tekshiring.',
      alternateSims: [
        { label: 'pH shkalasi (Sulfat kislota muhiti)', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_equilibrium',
        title: 'SO₂ → SO₃ Kontakt Oksidlanish Muvozanati Stendi',
        description: 'Bosim va harorat ta’sirida ekzotermik muvozanat siljishini kuzating.',
        controls: [
          { key: 'P', label: 'Bosim', unit: 'atm', min: 1, max: 10, step: 1, value: 4 },
          { key: 'T', label: 'Harorat', unit: '°C', min: 200, max: 600, step: 25, value: 450 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kislorodning allotropik shakli bo‘lgan ozonning formulasi va asosiy roli qanday?', options: ['O₂, yonishni qo‘llaydi', 'O₃, stratosferada UB nurlarni yutadi va suvlarni zararsizlantiradi', 'CO₂, issiqxona gazi', 'H₂O₂, peroksid'], answer: 1, explain: 'Ozon uch atomli kislorod bo‘lib, atmosferada himoya qatlami hosil qiladi.' },
      { q: 'Sulfat ionini ($SO_4^{2-}$) eritmada aniqlash uchun qaysi reaktiv qo‘llaniladi?', options: ['AgNO₃', 'BaCl₂ (kislotada erimaydigan oq cho‘kma BaSO₄)', 'KOH', 'Fenolftalein'], answer: 1, explain: 'Ba²⁺ + SO₄²⁻ → BaSO₄↓ oq cho‘kma tushadi.' },
      { q: 'Konsentrlangan sulfat kislota ($H_2SO_4$) dan tayyorlangan sulfat kislotada ortiqcha $SO_3$ erigan suyuqlik nima deyiladi?', options: ['Shoh aroq', 'Oleum ($H_2SO_4 \\cdot nSO_3$)', 'Kauchuk', 'Suvli ammiak'], answer: 1, explain: 'SO₃ suvda tuman hosil qilmasligi uchun kons. H₂SO₄ ga yuttirilib oleum olinadi.' },
      { q: 'Palag‘da tuxum hidini beruvchi zaharli gaz $H_2S$ qaysi sinf moddalariga kiradi?', options: ['Asos', 'Kuchsiz ikki negizli kislorodsiz kislota (vodorod sulfid)', 'Kuchli oksidlovchi', 'Ishqor'], answer: 1, explain: 'Vodorod sulfid (H₂S) kuchsiz kislota va kuchli qaytaruvchi.' },
      { q: 'Kontakt usulida $SO_2$ ni $SO_3$ ga oksidlashda qaysi katalizator ishlatiladi?', options: ['V₂O₅', 'Temir (Fe)', 'Al₂O₃', 'KMnO₄'], answer: 0, explain: 'Vanadiy (V) oksidi 450 °C da reaksiya tezligini keskin oshiradi.' },
      { q: 'Qaysi gaz "bo‘g‘uvchi oltingugurt hidi"ga ega bo‘lib, kislotali yomg‘irlar hosil bo‘lishiga sababchi?', options: ['O₂', 'SO₂ (oltingugurt (IV) oksid)', 'N₂', 'CH₄'], answer: 1, explain: 'SO₂ ko‘mir va neft yonganda ajralib, atmosferada H₂SO₃/H₂SO₄ yomg‘irlariga aylanadi.' },
      { q: 'Kislorodni laboratoriyada $2KMnO_4$ yoki $2H_2O_2$ dan parchalab olishda $O_2$ havodan og‘irroq ekanligi idishda qanday to‘planadi?', options: ['Idish og‘zini yuqoriga qaratib yoki suv ustida', 'Og‘zini pastga qaratib', 'Faqat muzlatib', 'Vakuumda'], answer: 0, explain: 'M(O₂) = 32 > M(havo) = 29, shuning uchun tubida to‘planadi va suvda kam eriydi.' },
      { q: '1 mol piritdan ($FeS_2$) nazariy jihatdan ko‘pi bilan necha mol $H_2SO_4$ olish mumkin?', options: ['1 mol', '2 mol', '3 mol', '4 mol'], answer: 1, explain: 'Bitta FeS₂ formulasida 2 ta S atomi bor -> 2 mol H₂SO₄.' },
    ],
    problems: [
      { variants: [[120], [240], [60], [360]], build(i) { const [m] = this.variants[i]; const mh = (m / 120) * 2 * 98; return { q: `${m} kg sof piritdan (FeS₂, M=120) 100% unum bilan necha kg H₂SO₄ (M=98) olish mumkin?`, correct: mh, unit: 'kg', explain: `n(FeS₂)=${m / 120}; n(H₂SO₄)=${(m / 120) * 2} kmol => ${mh} kg.` }; } },
      { variants: [[32, 32], [64, 64], [16, 16]], build(i) { const [ms, mo] = this.variants[i]; return { q: `${ms} g oltingugurt (Ar=32) va ${mo} g kislorod (M=32) reaksiyasidan necha gramm SO₂ (M=64) hosil bo‘ladi?`, correct: ms + mo, unit: 'g', explain: `S + O₂ → SO₂ (32+32=64 g); ${ms + mo} g.` }; } },
    ],
  },
  {
    id: 'C3B-3', code: 'K3B.3', sectionId: 'csec-3', subsectionId: 'C3B',
    subsectionTitle: 'B. Metallmaslar Kimyosi',
    title: 'Azot guruhi (V A), ammiak, nitrat kislota va fosfor',
    subtitle: 'Azot, ammiak, ammoniy tuzlari, azot oksidlari, nitrat kislota, fosfor va uning allotropik shakl o‘zgarishlari, fosfat kislota, mineral o‘g‘itlar',
    theory: {
      overview:
        'V A guruh elementlari azot ($N$) va fosfor ($P$) tashqi qavatida $ns^2np^3$ (5 ta elektron) tutib, $-3$ dan $+5$ gacha oksidlanish darajasini namoyon etadi. Atmosfera havosining 78% ini tashkil etuvchi azot ($N_2$) mustahkam uchbog‘li inert gaz. Ammiak ($NH_3$) — o‘tkir hidli, suvda juda yaxshi erib kuchsiz ishqor ($NH_3\\cdot H_2O$) hosil qiluvchi gaz; kislotalar bilan donor-akseptor mexanizmli ammoniy tuzlari ($NH_4Cl, NH_4NO_3$) beradi. Nitrat kislota ($HNO_3$) kuchli bir negizli kislota va o‘ta faol oksidlovchi. Fosfor oq ($P_4$, zaharli, qorong‘ida yonadi), qizil (gugurt qutisida) va qora allotropik shakllarga ega; $H_3PO_4$ va azotli-fosforli-kaliyli (NPK) mineral o‘g‘itlar ($NH_4NO_3$, karbamid $(NH_2)_2CO$, ammofos, superfosfat) hosildorlikni ta’minlaydi.',
      keyLaws: [
        { title: 'Ammoniy ioniga sifat reaksiyasi', text: 'Ammoniy tuziga ishqor qo‘shib qizdirilganda o‘tkir ammiak hidi va ho‘l qizil lakmusni ko‘kartiruvchi gaz chiqadi: $NH_4^+ + OH^- \\to NH_3\\uparrow + H_2O$.' },
        { title: 'Nitratlar parchalanish qoidasi', text: 'Faol metall (K–Na) nitratlari → nitrit + $O_2$; o‘rtacha metallar (Mg–Cu) → metall oksidi + $NO_2 + O_2$; passiv metallar (Ag, Hg) → sof metall + $NO_2 + O_2$.' },
      ],
      formulas: [
        { latex: 'N_2 + 3H_2 \\xrightleftharpoons{\\text{Fe, }P, t} 2\\text{NH}_3 \\quad (\\Delta H = -92\\text{ kJ})', name: 'Ammiak sintezi (Gaber jarayoni)', symbols: 'Donor-akseptor tuzlar uchun asos' },
        { latex: '4\\text{NH}_3 + 5O_2 \\xrightarrow{\\text{Pt}} 4\\text{NO} + 6H_2O', name: 'Nitrat kislota ishlab chiqarish 1-bosqichi', symbols: 'Ostvald usuli (NO → NO₂ → HNO₃)' },
      ],
      constants: [
        { name: 'Havodagi azot hajmiy ulushi', symbol: 'φ(N₂)', value: '78.08', unit: '%' },
        { name: 'Karbamid CO(NH₂)₂ dagi azot ulushi', symbol: 'w(N)', value: '46.7', unit: '%' },
      ],
      applications: [
        'Karbamid ($CO(NH_2)_2$) va ammiakli selitra ($NH_4NO_3$) dunyo qishloq xo‘jaligining eng asosiy azotli mineral o‘g‘itlaridir.',
        'Suvli ammiak (nashatir spirti) tibbiyotda hushdan ketishda nafasni qo‘zg‘atish uchun va sanoat sovutkichlarida ishlatiladi.',
      ],
      calculator: {
        title: 'Mineral O‘g‘itlarda Ozuqa Elementi (N yoki P₂O₅) Ulushi Kalkulyatori',
        formulaDisplay: 'w(N) = (n_N · 14 / M_r) · 100%',
        inputs: [
          { key: 'nN', label: 'Azot atomlari soni (NH₄NO₃=2, (NH₄)₂SO₄=2)', symbol: 'n_N', unit: 'ta', min: 1, max: 3, step: 1, default: 2 },
          { key: 'Mr', label: 'O‘g‘it molyar massasi (NH₄NO₃=80, Karbamid=60)', symbol: 'M_r', unit: 'g/mol', min: 17, max: 200, step: 1, default: 80 },
        ],
        compute: (v) => {
          const wN = ((v.nN * 14) / v.Mr) * 100;
          return { value: `${wN.toFixed(1)}% N`, unit: '', summary: `100 kg o‘g‘itda ${wN.toFixed(1)} kg sof azot ozuqasi mavjud.` };
        },
      },
    },
    simulation: {
      title: 'Ammiak (NH₃) 3D Strukturasi va Gaber Sintezi Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=nh3',
      openSourceSource: '3Dmol.js · PhET',
      openSourceNote: 'Trigonal piramida shaklidagi ammiak molekulasini 3D aylantirib, donor elektron juftini tasavvur qiling.',
      alternateSims: [
        { label: 'Gaber ammiak sintezi muvozanati', source: 'PhET · VLab', url: 'sims/chem3d/vlab.html?lab=equilibrium' },
      ],
      parametric: {
        mode: 'chem_equilibrium',
        title: 'Ammiak Sintezi (N₂ + 3H₂ ⇌ 2NH₃) Parametrik Stendi',
        description: 'Gaber reaktorida bosim va haroratga bog‘liq ammiak unumini kuzating.',
        controls: [
          { key: 'P', label: 'Reaktor bosimi', unit: 'atm', min: 1, max: 10, step: 1, value: 8 },
          { key: 'T', label: 'Harorat', unit: '°C', min: 200, max: 600, step: 25, value: 450 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qattiq mineral o‘g‘itlar orasida azotning massa ulushi eng yuqori (46.7%) bo‘lgan o‘g‘it qaysi?', options: ['Ammoniy sulfat', 'Ammiakli selitra (NH₄NO₃ — 35%)', 'Karbamid CO(NH₂)₂', 'Kaliy nitrat (13.8%)'], answer: 2, explain: 'w(N) in CO(NH₂)₂ = 28 / 60 = 46.7%.' },
      { q: 'Fosforning qaysi allotropik shakl o‘zgarishi $P_4$ molekulyar panjaraga ega bo‘lib, o‘ta zaharli va havoda o‘z-o‘zidan yonadi?', options: ['Qizil fosfor', 'Oq fosfor', 'Qora fosfor', 'Amorf fosfor'], answer: 1, explain: 'Oq fosfor P₄ tetraedrlaridan tuzilgan, qorong‘ida shu’lalanadi (xemilyuminestsensiya) va suv ostida saqlanadi.' },
      { q: 'Ammoniy xlorid ($NH_4Cl$) tuzini aniqlash uchun unga $NaOH$ qo‘shib qizdirilsa qaysi belgi kuzatiladi?', options: ['Oq cho‘kma', 'O‘tkir hidli ammiak ($NH_3$) chiqadi va nam qizil lakmus ko‘karadi', 'Qo‘ng‘ir gaz chiqadi', 'Yashil alanga'], answer: 1, explain: 'NH₄⁺ + OH⁻ → NH₃↑ + H₂O.' },
      { q: '"Tulkining dumi" nomi bilan ataladigan zaharli qo‘ng‘ir gaz — bu...', options: ['N₂O (kuldiruvchi gaz)', 'NO₂ (azot IV oksid)', 'NH₃', 'N₂'], answer: 1, explain: 'NO₂ qizg‘ish-qo‘ng‘ir rangli o‘tkir hidli gazdir.' },
      { q: 'Mis ($Cu$) ning nitrat kislota ($HNO_3$) bilan reaksiyasida hech qachon qaysi gaz ajralmaydi?', options: ['NO₂ (kons. HNO₃)', 'NO (suyult. HNO₃)', 'H₂ (vodorod gazi)', 'Hamma metallmas oksidlar'], answer: 2, explain: 'Nitrat kislota juda kuchli oksidlovchi bo‘lgani uchun metallardan H₂ emas, azot qaytarilish mahsulotlarini chiqaradi.' },
      { q: 'Qaysi gaz "kuldiruvchi gaz" nomi bilan tibbiyotda yengil og‘riqsizlantirishda qo‘llanilgan?', options: ['N₂O', 'NO₂', 'NH₃', 'N₂O₅'], answer: 0, explain: 'Azot (I) oksid N₂O shirinroq hidli befarq oksid.' },
      { q: 'Qishloq xo‘jaligida o‘simliklarning meva pishishi va ildiz rivoji uchun zarur 3 asosiy element (NPK) qaysilar?', options: ['Na, P, Cl', 'Azot (N), Fosfor (P), Kaliy (K)', 'Ni, Pt, Kr', 'C, H, O'], answer: 1, explain: 'NPK kompleksi tuproqdagi uchta asosiy makroelementdir.' },
      { q: '22.4 L (n.sh.) azot to‘liq vodorod bilan reaksiyaga kirishsa, necha litr ammiak ($NH_3$) hosil bo‘ladi?', options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'], answer: 2, explain: 'N₂ + 3H₂ → 2NH₃: 1 hajm azotdan 2 hajm ammiak = 44.8 L.' },
    ],
    problems: [
      { variants: [[60, 28], [80, 28], [132, 28], [101, 14]], build(i) { const [mr, mn] = this.variants[i]; const w = (mn / mr) * 100; return { q: `Molyar massasi ${mr} g/mol bo‘lgan azotli o‘g‘it tarkibida ${mn} g azot bor. Azotning massa ulushini (%) toping.`, correct: Number(w.toFixed(1)), unit: '%', explain: `w = (${mn}/${mr})·100% = ${w.toFixed(1)}%.` }; } },
      { variants: [[33.6], [67.2], [22.4]], build(i) { const [vh] = this.variants[i]; const vNH3 = (vh / 3) * 2; return { q: `N₂ + 3H₂ → 2NH₃ reaksiyasida ${vh} L (n.sh.) vodorod to‘liq sarflandi. Necha litr ammiak NH₃ hosil bo‘ladi?`, correct: Number(vNH3.toFixed(1)), unit: 'L', explain: `3 hajm H₂ dan 2 hajm NH₃: (${vh}/3)·2 = ${vNH3.toFixed(1)} L.` }; } },
    ],
  },
  {
    id: 'C3B-4', code: 'K3B.4', sectionId: 'csec-3', subsectionId: 'C3B',
    subsectionTitle: 'B. Metallmaslar Kimyosi',
    title: 'Uglerod, kremniy va silikat sanoati (IV A)',
    subtitle: 'Uglerod (olmos, grafit, fulleren, grafen), CO, CO₂, karbonatlar, kremniy, shisha, sement, keramika',
    theory: {
      overview:
        'IV A guruh elementlari uglerod ($C$) va kremniy ($Si$) tashqi qavatida 4 ta valent elektronga ($ns^2np^2$) ega bo‘lib, odatda IV valentlik namoyon etadi. Uglerod — barcha tirik organizmlar va organik kimyoning asosi; allotropik shakllari olmos ($sp^3$), grafit ($sp^2$), fulleren ($C_{60}$) va grafen. Is gazi ($CO$) chala yonishdan chiqadigan rangsiz-hidsiz zaharli gaz (gemoglobinni bog‘laydi, metallurgiyada kuchli qaytaruvchi). Karbonat angidrid ($CO_2$) havodan 1.5 marta og‘ir gaz, qattiq holatda "quruq muz"; suvda erib beqaror karbonat kislota ($H_2CO_3$), o‘rta karbonatlar ($CaCO_3, Na_2CO_3$) va nordon gidrokarbonatlar ($NaHCO_3$) beradi. Kremniy ($Si$) yarimo‘tkazgichlar elektronikasi poydevori, $SiO_2$ va silikatlar esa shisha ($Na_2O\\cdot CaO\\cdot 6SiO_2$), sement va keramika sanoatining negizidir.',
      keyLaws: [
        { title: 'Karbonat-gidrokarbonat o‘zaro o‘tishi', text: 'Ohakli suvga $CO_2$ yuborilsa avval $CaCO_3\\downarrow$ tushadi; ortiqcha $CO_2$ da cho‘kma erib $Ca(HCO_3)_2$ ga o‘tadi (karst g‘orlari shakllanishi).' },
        { title: 'Shisha tarkibi', text: 'Oddiy deraza oynasi $Na_2CO_3$, $CaCO_3$ va kvars qumi $SiO_2$ ni $1400^\\circ\\text{C}$ da pishirib olinadi ($Na_2O\\cdot CaO\\cdot 6SiO_2$).' },
      ],
      formulas: [
        { latex: '\\text{CaCO}_3 + CO_2 + H_2O \\rightleftharpoons \\text{Ca(HCO}_3)_2', name: 'Tabiatda ohaktosh erishi va qotishi', symbols: 'G‘or stalaktitlari va vaqtinchalik qattiqlik' },
        { latex: '\\text{SiO}_2 + 2C \\xrightarrow{2000^\\circ C} \\text{Si} + 2\\text{CO}\\uparrow', name: 'Texnik kremniy olish', symbols: 'Kvars qumidan qaytarish' },
      ],
      constants: [
        { name: 'Oddiy shisha formulasi', symbol: 'Shisha', value: 'Na₂O · CaO · 6SiO₂', unit: '' },
        { name: 'Kvars (SiO₂) molyar massasi', symbol: 'M(SiO₂)', value: '60.1', unit: 'g/mol' },
      ],
      applications: [
        'O‘ta toza monokristall kremniy (99.9999999%) zamonaviy mikroprotsessorlar va quyosh batareyalarining asosiy materialidir.',
        'Faollashtirilgan ko‘mir yuqori g‘ovakliligi hisobiga gazniqoblarda va tibbiyotda zaharlarni adsorbsiyalashda qo‘llaniladi.',
      ],
      calculator: {
        title: 'Karbonat / Silikat Reaksiya Massasi va CO₂ Hajmi',
        formulaDisplay: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
        inputs: [
          { key: 'mLimestone', label: 'Ohaktosh massasi (100% CaCO₃)', symbol: 'm', unit: 'g', min: 10, max: 500, step: 10, default: 100 },
          { key: 'purity', label: 'Soflik darajasi', symbol: '%', unit: '%', min: 50, max: 100, step: 5, default: 90 },
        ],
        compute: (v) => {
          const pureG = (v.mLimestone * v.purity) / 100;
          const n = pureG / 100;
          const vL = n * 22.4;
          return { value: `${vL.toFixed(1)} L CO₂`, unit: '', summary: `Sof CaCO₃ = ${pureG.toFixed(1)} g (${n.toFixed(2)} mol) | Hosil bo‘ladigan CaO = ${(n * 56).toFixed(1)} g` };
        },
      },
    },
    simulation: {
      title: 'Olmos va CO₂ 3D Kristall/Molekula Tuzilishi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=diamond',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Olmos kristallidagi sp³ uglerod karkasini va CO₂ molekulasining sp chiziqli tuzilishini 3D aylantirib ko‘ring.',
      alternateSims: [
        { label: 'CO₂ molekulasi 3D (180°)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=co2' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Uglerod Gibridlanishi (Olmos sp³ vs Grafit/CO₂ sp²/sp)',
        description: 'Uglerod atomining sterik sonini o‘zgartirib, fazoviy bog‘lanish geometriyalarini solishtiring.',
        controls: [
          { key: 'sig', label: 'Uglerod σ-bog‘lari', unit: '', min: 2, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 1, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Oddiy deraza shishasini ishlab chiqarish uchun qanday 3 ta asosiy xomashyo aralashtirib pishiriladi?', options: ['Kvars qumi (SiO₂), soda (Na₂CO₃) va ohaktosh (CaCO₃)', 'Ko‘mir, temir va oltingugurt', 'Gips, tuz va shakar', 'Kvars, alyuminiy va xlor'], answer: 0, explain: 'Na₂O·CaO·6SiO₂ tarkibli shisha soda, ohaktosh va qumdan olinadi.' },
      { q: 'Is gazi ($CO$) nima sababdan o‘ta zaharli hisoblanadi?', options: ['Terini kuydiradi', 'Qondagi gemoglobin bilan kisloroddan 200–300 marta mahkam birikib karboksigemoglobin hosil qiladi', 'Kislota beradi', 'Suvda yaxshi eriydi'], answer: 1, explain: 'Gemoglobin kislorod tashish qobiliyatini yo‘qotadi va to‘qimalarda kislorod yetishmovchiligi yuzaga keladi.' },
      { q: 'Qattiq holatda "quruq muz" sifatida muzqaymoq va mahsulotlarni sovutishda ishlatiladigan modda nima?', options: ['Qattiq suv', 'Qattiq karbonat angidrid ($CO_2$)', 'Qattiq azot', 'Qattiq ammiak'], answer: 1, explain: 'Qattiq CO₂ −78.5 °C da erimasdan suyuq fazasiz to‘g‘ridan-to‘g‘ri gazga sublimatsiyalanadi.' },
      { q: 'Qaysi uglerod modifikatsiyasi elektr tokini yaxshi o‘tkazadi va qalam sterjenida ishlatiladi?', options: ['Olmos', 'Grafit', 'Karbonat', 'Silikagel'], answer: 1, explain: 'Grafitda uglerod sp² holatda qatlamlar hosil qiladi va har bir atomdagi 4-elektron erkin π-bulut yaratib tok o‘tkazadi.' },
      { q: 'Zamonaviy mikrochip va quyosh panellarida yarimo‘tkazgich sifatida qaysi element ishlatiladi?', options: ['Uglerod', 'O‘ta toza kremniy (Si)', 'Kalsiy', 'Azot'], answer: 1, explain: 'Kremniy kristalli (Si) zamonaviy elektronikaning bosh yarimo‘tkazgichidir.' },
      { q: 'Karbonat kislota tuzlarini ($CO_3^{2-}$) aniqlashda qaysi sifat reaksiyasi qo‘llaniladi?', options: ['Kislota (HCl) qo‘shganda rangsiz-hidsiz CO₂ gazining shiddatli ajralishi', 'Oq cho‘kma', 'Ko‘k alanga', 'Yomon hid chiqishi'], answer: 0, explain: 'CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ (ohak suvini loyqalantiradi).' },
      { q: 'Sement (portlandsement) pishirish uchun asosiy xomashyo aralashmasi nima?', options: ['Ohaktosh (CaCO₃) va gil (alyumosilikatlar)', 'Soda va shakar', 'Tuz va qum', 'Temir va ko‘mir'], answer: 0, explain: 'Ohaktosh va gil ~1450 °C da kuydirilib klinker va sement olinadi.' },
      { q: 'Kremniy (IV) oksidini ($SiO_2$) oddiy kislotalardan faqat qaysi biri erita oladi?', options: ['H₂SO₄', 'HNO₃', 'HF (ftorid kislota)', 'HCl'], answer: 2, explain: 'SiO₂ + 4HF → SiF₄↑ + 2H₂O.' },
    ],
    problems: [
      { variants: [[200], [50], [150], [300]], build(i) { const [m] = this.variants[i]; const v = (m / 100) * 22.4; return { q: `${m} g sof CaCO₃ (M=100) HCl ta’sirida to‘liq eriganda n.sh. da necha litr CO₂ ajraladi?`, correct: Number(v.toFixed(1)), unit: 'L', explain: `n = ${m / 100} mol => V = ${v.toFixed(1)} L.` }; } },
      { variants: [[24], [60], [12], [36]], build(i) { const [mc] = this.variants[i]; const v = (mc / 12) * 22.4; return { q: `${mc} g ko‘mir (Ar=12) to‘liq yonganda n.sh. da necha litr CO₂ hosil bo‘ladi?`, correct: Number(v.toFixed(1)), unit: 'L', explain: `n(C)=${mc / 12} mol => V = ${v.toFixed(1)} L.` }; } },
    ],
  },
  {
    id: 'C3C-1', code: 'K3C.1', sectionId: 'csec-3', subsectionId: 'C3C',
    subsectionTitle: 'C. Metallar Kimyosi',
    title: 'Metallar umumiy xossalari, metallurgiya va qotishmalar',
    subtitle: 'Metallurgiya (pirometallurgiya, gidrometallurgiya, elektrometallurgiya), qotishmalar',
    theory: {
      overview:
        'Davriy sistemadagi elementlarning 80% dan ortig‘i metallardir. Metall atomlarining tashqi qavatida odatda 1–3 ta elektron bo‘ladi; kimyoviy reaksiyalarda ular faqat elektron berib musbat kationlarga oksidlanadi (qaytaruvchilik). Fizik jihatdan metallar yuqori elektr va issiqlik o‘tkazuvchanlik, metall yaltiroqligi va plastiklikka (bolg‘alanuvchanlik) ega. Metallurgiya — rudalardan sof metallar ajratib olish fani bo‘lib, 3 usulga bo‘linadi: 1) Pirometallurgiya — yuqori haroratda koks ($C$), is gazi ($CO$), vodorod ($H_2$) yoki alyuminiy (alyuminotermiya) yordamida oksidlarni qaytarish ($Fe_2O_3 + 3CO \\to 2Fe + 3CO_2$); 2) Gidrometallurgiya — rudani eritmaga o‘tkazib faolroq metall bilan siqib chiqarish ($CuSO_4 + Fe$); 3) Elektrometallurgiya — $Na, K, Mg, Al$ kabi faol metallarni suyuqlanma elektrolizi bilan olish. Qotishmalar (cho‘yan, po‘lat, bronza, jez, dyuralyumin) sof metallarga qaraganda mustahkamroqdir.',
      keyLaws: [
        { title: 'Pirometallurgiya qaytaruvchilari', text: 'Domna pechida temir olishda $C$ va $CO$; qiyin eruvchi $Cr, Mn, W$ olishda $Al$ (alyuminotermiya) va $H_2$ ishlatiladi.' },
        { title: 'Cho‘yan va Po‘lat farqi', text: 'Cho‘yanda uglerod miqdori $w(C) > 2\\%$ (odatda 2.5–4.5% — mo‘rt); po‘latda esa $w(C) < 2\\%$ (plastik va mustahkam).' },
      ],
      formulas: [
        { latex: '\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{t^\\circ} 2\\text{Fe} + 3\\text{CO}_2', name: 'Domna pechida temir qaytarilishi', symbols: 'Pirometallurgiya asosiy jarayoni' },
        { latex: '\\text{Cr}_2\\text{O}_3 + 2\\text{Al} \\xrightarrow{t^\\circ} 2\\text{Cr} + \\text{Al}_2\\text{O}_3', name: 'Alyuminotermiya (Golshmidt usuli)', symbols: 'Al kuchi yuqori haroratda metallarni qaytaradi' },
      ],
      constants: [
        { name: 'Po‘latdagi uglerod chegarasi', symbol: 'w(C) po‘lat', value: '< 2.0', unit: '%' },
        { name: 'Eng yuqori erish haroratli metall (Volfram)', symbol: 'T_er(W)', value: '3422', unit: '°C' },
      ],
      applications: [
        'Bronza ($Cu + Sn$) va jez/latun ($Cu + Zn$) mashinasozlik va podshipniklarda; dyuralyumin ($Al + Cu + Mg$) aviasozlikda keng qo‘llaniladi.',
        'Simob ($Hg$) — xona haroratida suyuq bo‘lgan yagona metall (termometr, barometr va amalgamalarda).',
      ],
      calculator: {
        title: 'Pirometallurgiya: Temir Rudasidan Sof Temir Unumi Kalkulyatori',
        formulaDisplay: 'Fe₂O₃ (M=160) → 2Fe (2·56 = 112 g)',
        inputs: [
          { key: 'mRuda', label: 'Qizil temirtosh Fe₂O₃ massasi', symbol: 'm', unit: 'tonna', min: 10, max: 1000, step: 10, default: 160 },
          { key: 'pct', label: 'Rudadagi Fe₂O₃ ulushi', symbol: '%', unit: '%', min: 40, max: 100, step: 5, default: 80 },
        ],
        compute: (v) => {
          const pureOx = (v.mRuda * v.pct) / 100;
          const mFe = pureOx * (112 / 160);
          return { value: `${mFe.toFixed(1)} t Fe`, unit: '', summary: `Sof Fe₂O₃ = ${pureOx.toFixed(1)} t | Olinadigan sof temir: ${mFe.toFixed(1)} tonna (${(mFe / 0.96).toFixed(1)} t cho‘yan).` };
        },
      },
    },
    simulation: {
      title: 'Metallarning Elektrokuchlanishi va Qaytarilish Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=redox_galvanic',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Metallarning faollik qatoriga ko‘ra oksidlanish-qaytarilish reaksiyalarini virtual laboratoriyada kuzating.',
      alternateSims: [
        { label: 'Kristall panjara va metall xossalari', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
      ],
      parametric: {
        mode: 'chem_electrochem',
        title: 'Metallarni Qaytarish va Elektrometallurgiya Stendi',
        description: 'Elektrometallurgik kuchlanish va tok kuchining sof metall ajralish tezligiga ta’sirini tekshiring.',
        controls: [
          { key: 'E', label: 'Vanna kuchlanishi', unit: 'V', min: 1, max: 8, step: 0.5, value: 4.5 },
          { key: 'I', label: 'Tok kuchi', unit: 'kA', min: 1, max: 20, step: 1, value: 10 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Xona haroratida suyuq holatda mavjud bo‘ladigan metall qaysi?', options: ['Galliy (Ga)', 'Simob (Hg)', 'Seziy (Cs)', 'Qo‘rg‘oshin (Pb)'], answer: 1, explain: 'Simob −38.9 °C da eriydi, shuning uchun xona haroratida suyuq.' },
      { q: 'Qaysi qotishma temirning 2% dan kam uglerod bilan qotishmasi bo‘lib, plastik va mustahkam hisoblanadi?', options: ['Cho‘yan', 'Po‘lat', 'Bronza', 'Jez (latun)'], answer: 1, explain: 'Cho‘yanda C > 2% (mo‘rt), po‘latda C < 2%.' },
      { q: 'Jez (latun) qotishmasi asosan qaysi ikki metalldan tashkil topgan?', options: ['Mis va rux ($Cu + Zn$)', 'Mis va qalay ($Cu + Sn$)', 'Temir va uglerod', 'Alyuminiy va magniy'], answer: 0, explain: 'Cu + Zn = jez (latun); Cu + Sn = bronza.' },
      { q: 'Qiyin eruvchi oksidlar ($Cr_2O_3, Fe_3O_4$) dan metallarni alyuminiy kukuni yordamida qaytarish usuli nima deyiladi?', options: ['Gidrometallurgiya', 'Alyuminotermiya (pirometallurgiya)', 'Elektroliz', 'Distillyatsiya'], answer: 1, explain: 'Termit aralashmasida Al oksidlardan kislorodni tortib olib ~2500 °C harorat hosil qiladi.' },
      { q: 'Eng yuqori elektr o‘tkazuvchanlikka va yorug‘lik qaytarishga ega bo‘lgan metall qaysi?', options: ['Temir (Fe)', 'Kumush (Ag)', 'Qo‘rg‘oshin (Pb)', 'Volfram (W)'], answer: 1, explain: 'Elektr o‘tkazuvchanlik qatori: Ag > Cu > Au > Al.' },
      { q: 'Cho‘g‘lanma lampa spirallari uchun erish harorati eng yuqori ($3422^\\circ\\text{C}$) qaysi metall tanlanadi?', options: ['Alyuminiy', 'Volfram (W)', 'Mis', 'Nikel'], answer: 1, explain: 'Volfram barcha metallar orasida eng qiyin eruvchanidir.' },
      { q: 'Natriy, kalsiy va alyuminiy kabi faol metallarni sanoatda olishning yagona asosiy usuli nima?', options: ['Koks bilan qaytarish', 'Elektrometallurgiya (suyuqlanma elektrolizi)', 'Gidrometallurgiya', 'Suv bilan yuvish'], answer: 1, explain: 'Faol metallar oksidlarini koks qaytara olmaydi, shuning uchun suyuqlanma elektrolizidan foydalaniladi.' },
      { q: 'Gidrometallurgiya usuli bilan mis ($Cu$) qanday olinadi?', options: ['Mis rudasini $H_2SO_4$ da eritib, so‘ng temir qirindisi bilan cho‘ktirish', 'Yuqori pechda eritish', 'Muzlatish', 'HCl bug‘lash'], answer: 0, explain: 'CuSO₄ + Fe → FeSO₄ + Cu↓.' },
    ],
    problems: [
      { variants: [[160], [320], [80], [480]], build(i) { const [m] = this.variants[i]; const mfe = (m / 160) * 112; return { q: `${m} tonna sof Fe₂O₃ (M=160) dan to‘liq qaytarilganda necha tonna sof temir (Ar=56) olinadi?`, correct: mfe, unit: 't', explain: `Fe₂O₃ → 2Fe: (${m}/160)·112 = ${mfe} t.` }; } },
      { variants: [[1000, 96], [500, 98], [200, 95]], build(i) { const [m, w] = this.variants[i]; const mc = (m * (100 - w)) / 100; return { q: `Massasi ${m} kg bo‘lgan po‘lat/cho‘yan tarkibida ${w}% sof temir, qolgani uglerod. Necha kg uglerod bor?`, correct: mc, unit: 'kg', explain: `100 − ${w} = ${100 - w}% => ${mc} kg.` }; } },
    ],
  },
  {
    id: 'C3C-2', code: 'K3C.2', sectionId: 'csec-3', subsectionId: 'C3C',
    subsectionTitle: 'C. Metallar Kimyosi',
    title: 'Ishqoriy, ishqoriy-yer metallar va suvning qattiqligi',
    subtitle: 'Natriy, kaliy, magniy, kalsiy va ularning birikmalari, suvning qattiqligi',
    theory: {
      overview:
        'I A guruh (ishqoriy metallar: $Li, Na, K, Rb, Cs$) va II A guruh (magniy hamda ishqoriy-yer metallar: $Ca, Sr, Ba$) eng faol yengil metallardir. Tashqi qavatida 1 yoki 2 ta s-elektron bo‘lgani uchun ular darhol $+1$ va $+2$ kationlarga oksidlanadi; havoda tez oksidlangani sababli natriy va kaliy kerosin ostida saqlanadi. Suv bilan shiddatli reaksiyaga kirishib ishqor va vodorod chiqaradi ($2Na + 2H_2O \\to 2NaOH + H_2\\uparrow$). Kalsiyning muhim birikmalari: ohaktosh ($CaCO_3$), so‘ndirilmagan ohak ($CaO$), so‘ndirilgan ohak ($Ca(OH)_2$) va gips ($CaSO_4\\cdot 2H_2O$). Tabiiy suvda erigan $Ca^{2+}$ va $Mg^{2+}$ ionlari suvning qattiqligini keltirib chiqaradi: vaqtinchalik qattiqlik (gidrokarbonatlar $Ca(HCO_3)_2$ — qaynatish bilan yo‘qoladi) va doimiy qattiqlik ($CaSO_4, MgCl_2$ — soda $Na_2CO_3$ qo‘shib yo‘qotiladi).',
      keyLaws: [
        { title: 'Alanga ranglari (sifat tahlili)', text: 'Natriy tuzlari alangani yorqin sariq, kaliy binafsha, kalsiy g‘isht-qizil, litiy qirmizi, bariy sariq-yashil rangga bo‘yaydi.' },
        { title: 'Suvning qattiqligini yo‘qotish', text: 'Vaqtinchalik qattiqlik: $Ca(HCO_3)_2 \\xrightarrow{t} CaCO_3\\downarrow + CO_2\\uparrow + H_2O$. Doimiy qattiqlik: $CaSO_4 + Na_2CO_3 \\to CaCO_3\\downarrow + Na_2SO_4$.' },
      ],
      formulas: [
        { latex: '2\\text{Na} + 2H_2O \\to 2\\text{NaOH} + H_2\\uparrow', name: 'Ishqoriy metallning suv bilan reaksiyasi', symbols: 'Kaliy hatto alangalanib ketadi' },
        { latex: '\\text{Ca(HCO}_3)_2 \\xrightarrow{t^\\circ} \\text{CaCO}_3\\downarrow + CO_2\\uparrow + H_2O', name: 'Vaqtinchalik qattiqlikni qaynatib yumshatish', symbols: 'Choynakda quyqum (CaCO₃) hosil bo‘lishi' },
      ],
      constants: [
        { name: 'Natriy alanga spektri (D-chiziq)', symbol: 'λ(Na⁺)', value: '589', unit: 'nm (sariq)' },
        { name: 'Gips formulasi', symbol: 'Gips', value: 'CaSO₄ · 2H₂O', unit: '(alebsatr: ·0.5H₂O)' },
      ],
      applications: [
        'Natriy va kaliy qotishmasi yadro reaktorlarida suyuq metall issiqlik tashuvchi sifatida; gips esa qurilish va tibbiyotda qo‘llaniladi.',
        'Maishiy va sanoat suv filtrlarida kationit smolalar $Ca^{2+}, Mg^{2+}$ ionlarini $Na^+$ ga almashtirib suvni yumshatadi.',
      ],
      calculator: {
        title: 'Suvning Qattiqligini Yumshatish Uchun Soda (Na₂CO₃) Sarfi',
        formulaDisplay: 'm(Na₂CO₃) = C_qattiqlik(mmol/L) · V(L) · 53 mg',
        inputs: [
          { key: 'hardness', label: 'Suv qattiqligi (mmol-ekv/L)', symbol: 'Q', unit: 'mEq/L', min: 1, max: 15, step: 0.5, default: 6.0 },
          { key: 'volL', label: 'Tozalanadigan suv hajmi', symbol: 'V', unit: 'L', min: 10, max: 1000, step: 10, default: 100 },
        ],
        compute: (v) => {
          const mgSoda = v.hardness * v.volL * 53;
          return { value: `${(mgSoda / 1000).toFixed(1)} g Na₂CO₃`, unit: '', summary: `${v.volL} L suvni yumshatish uchun ${(mgSoda / 1000).toFixed(1)} g kalsinatsiyalangan soda kerak.` };
        },
      },
    },
    simulation: {
      title: 'Ishqoriy/Ishqoriy-Yer Metallar Alanga Rangi Testi (OLabs)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=flame_test',
      openSourceSource: 'Amrita OLabs · VLab',
      openSourceNote: 'Li⁺, Na⁺, K⁺, Ca²⁺ va Ba²⁺ kationlarini tanlab alanga spektral ranglarini solishtiring.',
      alternateSims: [
        { label: 'NaCl kristall panjarasi 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
      ],
      parametric: {
        mode: 'chem_flame_analysis',
        title: 'Kationlar Spektral Alanga Emissiyasi Stendi',
        description: 'Kation raqamini tanlab, atom qo‘zg‘alishida ajraladigan xarakterli alanga to‘lqin uzunligini kuzating.',
        controls: [
          { key: 'cation', label: 'Kation (1:Li 2:Na 3:K 4:Cu 5:Ba 6:Ca)', unit: '', min: 1, max: 6, step: 1, value: 2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Tabiiy suvning qattiqligi asosan unda qaysi ionlarning eriganligi bilan bog‘liq?', options: ['Na⁺ va K⁺', 'Ca²⁺ va Mg²⁺', 'Cl⁻ va NO₃⁻', 'Cu²⁺ va Ag⁺'], answer: 1, explain: 'Suvdagi kalsiy va magniy tuzlari sovun bilan erimaydigan cho‘kma berib suvni qattiq qiladi.' },
      { q: 'Qaynatish orqali yo‘qotiladigan vaqtinchalik (karbonatli) qattiqlikni qaysi tuzlar keltirib chiqaradi?', options: ['CaSO₄ va MgCl₂', 'Ca(HCO₃)₂ va Mg(HCO₃)₂', 'NaCl va K₂SO₄', 'CaCO₃'], answer: 1, explain: 'Gidrokarbonatlar qizdirilganda CO₂ uchib ketib erimaydigan karbonatga aylanadi.' },
      { q: 'Natriy tuzlari gaz gorelkasi alangasini qanday rangga bo‘yaydi?', options: ['Binafsha', 'Yorqin sariq (589 nm)', 'Yashil', 'Ko‘k'], answer: 1, explain: 'Na⁺ ionlari kuchli sariq D-chiziq chiqaradi.' },
      { q: 'Natriy va kaliy metallari laboratoriyada nima uchun kerosin ostida saqlanadi?', options: ['Suvdan og‘irligi uchun', 'Havodagi kislorod va namlik bilan shiddatli reaksiyaga kirishib ketmasligi uchun', 'Qaynab ketmasligi uchun', 'Yaltiroqligini saqlash uchun'], answer: 1, explain: 'Ishqoriy metallar kerosin bilan reaksiyaga kirishmaydi va havo/suvdan ajratib turadi.' },
      { q: '4.6 g natriy ($A_r = 23$) mo‘l suv bilan reaksiyaga kirishganda n.sh. da necha litr vodorod chiqadi?', options: ['1.12 L', '2.24 L', '4.48 L', '11.2 L'], answer: 1, explain: 'n(Na) = 4.6/23 = 0.2 mol; 2Na → 1H₂ => 0.1 mol H₂ = 2.24 L.' },
      { q: 'Tibbiyotda singan suyaklarni bog‘lashda ishlatiladigan alebastr qizdirilgan gipsdan olinib, qaysi formulaga ega?', options: ['CaSO₄·2H₂O', 'CaSO₄ · 0.5H₂O (yoki 2CaSO₄·H₂O)', 'CaCO₃', 'CaO'], answer: 1, explain: 'Gips (2 H₂O) 150 °C da qizdirilsa suvining 3/4 qismini yo‘qotib alebastrga aylanadi va suv bilan yana qotadi.' },
      { q: 'Doimiy qattiqlikdagi suvni ($CaSO_4, MgCl_2$) yumshatish uchun nima qo‘shiladi?', options: ['Qaynatish yetarli', 'Soda ($Na_2CO_3$) yoki $Na_3PO_4$', 'HCl kislota', 'Osh tuzi'], answer: 1, explain: 'CO₃²⁻ ionlari Ca²⁺ va Mg²⁺ ni erimaydigan cho‘kmaga tushiradi.' },
      { q: 'Natriy havoda yonganda oksid emas, asosan qaysi modda hosil bo‘ladi?', options: ['Na₂O', 'Na₂O₂ (natriy peroksid)', 'NaOH', 'NaH'], answer: 1, explain: '2Na + O₂ → Na₂O₂ (peroksid suv osti kemalarida CO₂ dan O₂ olishda ishlatiladi).' },
    ],
    problems: [
      { variants: [[46], [23], [9.2], [11.5]], build(i) { const [m] = this.variants[i]; const vL = (m / 23 / 2) * 22.4; return { q: `${m} g natriy (Ar=23) mo‘l suvga tashlandi. N.sh. da necha litr vodorod gazi ajraladi?`, correct: Number(vL.toFixed(1)), unit: 'L', explain: `n(Na)=${m / 23}; n(H₂)=${m / 46} mol => V = ${vL.toFixed(1)} L.` }; } },
      { variants: [[40], [80], [20]], build(i) { const [mca] = this.variants[i]; const mh2 = (mca / 40) * 2; return { q: `${mca} g kalsiy (Ar=40) suv bilan to‘liq reaksiyaga kirishsa necha gramm vodorod ajraladi?`, correct: mh2, unit: 'g', explain: `Ca + 2H₂O → Ca(OH)₂ + H₂↑ => ${mca / 40} mol H₂ = ${mh2} g.` }; } },
    ],
  },
  {
    id: 'C3C-3', code: 'K3C.3', sectionId: 'csec-3', subsectionId: 'C3C',
    subsectionTitle: 'C. Metallar Kimyosi',
    title: 'Alyuminiy va uning amfoter birikmalari (III A)',
    subtitle: 'Alyuminiyning amfoter xossalari, oksidi va gidroksidi',
    theory: {
      overview:
        'Alyuminiy ($Z=13$, $1s^2 2s^2 2p^6 3s^2 3p^1$) Yer po‘stlog‘ida eng ko‘p tarqalgan metall (8.1%, barcha elementlar ichida kislorod va kremniydan keyin 3-o‘rinda). Yengil ($\rho = 2.7\\text{ g/sm}^3$), elektr va issiqlikni yaxshi o‘tkazuvchi metall. Oddiy sharoitda alyuminiy sirtini o‘ta zich va pishiq $Al_2O_3$ oksid pardasi qoplab turgani uchun u suv bilan reaksiyaga kirishmaydi; lekin oksid pardasi simob yoki ishqor bilan olib tashlansa suv bilan shiddatli $H_2$ chiqaradi. Alyuminiy, uning oksidi ($Al_2O_3$, korund, yoqut/sapfir) va gidroksidi ($Al(OH)_3$) yaqqol amfoter xossaga ega: ham kislotalarda ($Al^{3+}$), ham ishqor eritmalarida (tetragidroksoalyuminat $[Al(OH)_4]^-$) erib vodorod ajratadi.',
      keyLaws: [
        { title: 'Amfoter metall va ishqor reaksiyasi', text: '$2Al + 2NaOH + 6H_2O \\to 2Na[Al(OH)_4] + 3H_2\\uparrow$.' },
        { title: 'Alyuminiy olish (Xoll-Eru jarayoni)', text: 'Boksitdan ajratilgan $Al_2O_3$ ($T_{\\text{er}} = 2050^\\circ C$) ni $950^\\circ C$ gacha tushirish uchun suyuq kriolit ($Na_3AlF_6$) da eritib elektroliz qilinadi.' },
      ],
      formulas: [
        { latex: '2\\text{Al} + 6HCl \\to 2\\text{AlCl}_3 + 3H_2\\uparrow', name: 'Alyuminiyning kislotada erishi', symbols: '1 mol Al → 1.5 mol H₂' },
        { latex: '2\\text{Al} + 2\\text{NaOH} + 6H_2O \\to 2\\text{Na[Al(OH)}_4] + 3H_2\\uparrow', name: 'Alyuminiyning ishqorda erishi', symbols: 'Amfoter metall isboti' },
      ],
      constants: [
        { name: 'Alyuminiy atom massasi va zichligi', symbol: 'Al', value: '27 g/mol · 2.7', unit: 'g/sm³' },
        { name: 'Kriolit erituvchi formulasi', symbol: 'Kriolit', value: 'Na₃AlF₆', unit: '(950 °C elektroliz)' },
      ],
      applications: [
        'Dyuralyumin qotishmasi (Al+Cu+Mg) yengil va mustahkam bo‘lgani uchun samolyot, raketa va tezyurar poyezd korpuslarida ishlatiladi.',
        'Termit payvandlashda ($Fe_2O_3 + 2Al \\to Al_2O_3 + 2Fe$) temiryo‘l relslari joyida biriktiriladi.',
      ],
      calculator: {
        title: 'Alyuminiy Kislota/Ishqor Reaksiyasi Vodorod Unumi',
        formulaDisplay: '2Al (54 g) → 3H₂ (67.2 L)',
        inputs: [
          { key: 'mAl', label: 'Alyuminiy massasi (Ar=27)', symbol: 'm(Al)', unit: 'g', min: 2.7, max: 108, step: 2.7, default: 27 },
        ],
        compute: (v) => {
          const nAl = v.mAl / 27;
          const nH2 = nAl * 1.5;
          return { value: `${(nH2 * 22.4).toFixed(1)} L H₂`, unit: '', summary: `${nAl.toFixed(2)} mol Al kislotada ham, ishqorda ham ${nH2.toFixed(2)} mol (${(nH2 * 2).toFixed(1)} g) H₂ beradi.` };
        },
      },
    },
    simulation: {
      title: 'Alyuminiy Elektrometallurgiyasi va Amfoterlik Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=redox_galvanic',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Alyuminiy elektrolizi va amfoter reaksiya tokini virtual laboratoriyada kuzating.',
      alternateSims: [
        { label: 'pH muhit va Al(OH)₃ cho‘kmasi', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=ph_scale' },
      ],
      parametric: {
        mode: 'chem_electrochem',
        title: 'Kriolit-Glinozyom Elektroliz Vanna Simulyatori',
        description: 'Vanna toki va kuchlanishiga ko‘ra katodda suyuq alyuminiy ajralishini kuzating.',
        controls: [
          { key: 'E', label: 'Kuchlanish', unit: 'V', min: 2, max: 8, step: 0.5, value: 4.5 },
          { key: 'I', label: 'Tok kuchi', unit: 'kA', min: 2, max: 25, step: 1, value: 15 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Yer po‘stlog‘ida metallar orasida eng ko‘p tarqalgan metall qaysi?', options: ['Temir', 'Alyuminiy (8.1%)', 'Kalsiy', 'Natriy'], answer: 1, explain: 'Tarqalish tartibi: O (49%) > Si (26%) > Al (8.1%) > Fe (4.7%).' },
      { q: 'Nima uchun alyuminiy sovuq konsentrlangan $HNO_3$ va $H_2SO_4$ bilan reaksiyaga kirishmaydi?', options: ['Passiv metall bo‘lgani uchun', 'Sirtida zich himoya oksid pardasi ($Al_2O_3$) hosil bo‘lib passivlashadi', 'Zichligi kichik', 'Qattiq emas'], answer: 1, explain: 'Shuning uchun kons. HNO₃ alyuminiy sisternalarda tashiladi.' },
      { q: 'Alyuminiyni sanoatda $Al_2O_3$ suyuqlanmasidan elektroliz qilib olishda nima uchun kriolit ($Na_3AlF_6$) qo‘shiladi?', options: ['Rang berish uchun', '$Al_2O_3$ ning erish haroratini 2050 °C dan ~950 °C gacha tushirish uchun', 'Massani oshirish uchun', 'Kislorodni yutish uchun'], answer: 1, explain: 'Kriolit elektrolit erituvchi bo‘lib energiya sarfini keskin kamaytiradi.' },
      { q: '54 g alyuminiy ($A_r=27$) mo‘l $NaOH$ eritmasida eriganda n.sh. da necha litr vodorod chiqadi?', options: ['22.4 L', '33.6 L', '44.8 L', '67.2 L'], answer: 3, explain: '2 mol Al → 3 mol H₂ = 3 · 22.4 = 67.2 L.' },
      { q: 'Qaysi modda amfoter gidroksid bo‘lib, mo‘l $NaOH$ qo‘shilganda erib shaffof eritmaga o‘tadi?', options: ['Fe(OH)₃', 'Mg(OH)₂', 'Al(OH)₃', 'Cu(OH)₂'], answer: 2, explain: 'Al(OH)₃ + NaOH → Na[Al(OH)₄] (tiniq kompleks eritma).' },
      { q: 'Tabiiy qimmatbaho toshlar — qizil yoqut (rubin) va ko‘k sapfir asosan qaysi birikmaning kristallaridir?', options: ['SiO₂', 'Al₂O₃ (korund, xrom yoki titan aralashmasi bilan)', 'CaCO₃', 'FeS₂'], answer: 1, explain: 'Korund (α-Al₂O₃) Moos bo‘yicha 9 qattiqlikka ega.' },
      { q: 'Temir yo‘l relslarini payvandlashda ishlatiladigan termit aralashmasi tarkibi qanday?', options: ['Al kukuni + Fe₂O₃ (yoki Fe₃O₄)', 'Cu + ZnO', 'Na + C', 'Al + CaCO₃'], answer: 0, explain: 'Alyuminotermiya reaksiyasida ~2500 °C da erigan temir ajraladi.' },
      { q: '1 mol $AlCl_3$ eritmasiga 4 mol $NaOH$ qo‘shilsa yakunda nima hosil bo‘ladi?', options: ['Al(OH)₃ cho‘kma qoladi', 'Avval Al(OH)₃ tushib, keyin ortiqcha NaOH da erib Na[Al(OH)₄] ga o‘tadi', 'H₂ gazi chiqadi', 'Reaksiya bormaydi'], answer: 1, explain: '3 mol OH⁻ cho‘ktiradi, 4-mol OH⁻ esa cho‘kmani kompleksga eritadi.' },
    ],
    problems: [
      { variants: [[27], [13.5], [54], [81]], build(i) { const [m] = this.variants[i]; const v = (m / 27) * 1.5 * 22.4; return { q: `${m} g alyuminiy (Ar=27) mo‘l HCl da eridi. N.sh. da necha litr H₂ ajraladi?`, correct: Number(v.toFixed(1)), unit: 'L', explain: `n(H₂) = (${m}/27)·1.5 = ${(m / 27) * 1.5} mol => ${v.toFixed(1)} L.` }; } },
      { variants: [[102], [204], [51]], build(i) { const [m] = this.variants[i]; const mal = (m / 102) * 54; return { q: `${m} kg sof glinozyom (Al₂O₃, M=102) elektrolizidan necha kg sof alyuminiy (Ar=27) olinadi?`, correct: Number(mal.toFixed(1)), unit: 'kg', explain: `Al₂O₃ → 2Al: (${m}/102)·54 = ${mal.toFixed(1)} kg.` }; } },
    ],
  },
  {
    id: 'C3C-4', code: 'K3C.4', sectionId: 'csec-3', subsectionId: 'C3C',
    subsectionTitle: 'C. Metallar Kimyosi',
    title: 'Oraliq metallar (d-elementlar) va kompleks birikmalar',
    subtitle: 'Temir, mis, rux, xrom, marganets, kumush va kompleks birikmalar nazariyasi (Verner nazariyasi)',
    theory: {
      overview:
        'Davriy sistemaning B guruhlarida joylashgan d-elementlar (oraliq metallar: $Cr, Mn, Fe, Cu, Zn, Ag$) tashqi s- va ichki $(n-1)d$-elektronlari hisobiga bir necha xil oksidlanish darajasiga ($Fe^{+2,+3,+6}$, $Cr^{+2,+3,+6}$, $Mn^{+2,+4,+6,+7}$) va rangdor birikmalarga ega. Temir ikki xil oksid va gidroksid beradi ($FeO$ asosli; $Fe_2O_3$ zaif amfoter); xrom oksidlarida oksidlanish darajasi ortishi bilan xossa asoslidan ($CrO$) amfoter ($Cr_2O_3$) va kislotaliga ($CrO_3$) o‘tadi. Alfred Vernerning koordinatsion nazariyasiga ko‘ra $d$-metallar markaziy kompleks hosil qiluvchi sifatida neytral molekulalar ($NH_3, H_2O$) yoki anionlar ($CN^-, OH^-$) — ligandlarni donor-akseptor bog‘lar orqali biriktirib kompleks birikmalar ($[Cu(NH_3)_4]SO_4$, gemoglobin, xlorofill) tuzadi.',
      keyLaws: [
        { title: 'Verner koordinatsion nazariyasi', text: 'Kompleks birikma $[ML_k]X_m$ ichki sfera (markaziy ion $M$ va uning atrofidagi $k$ ta ligand — koordinatsion son) hamda tashqi sfera ($X$) dan iborat.' },
        { title: 'Xrom qatorida oksidlar evolyutsiyasi', text: '$CrO$ (+2, asosli) → $Cr_2O_3$ (+3, amfoter, yashil) → $CrO_3$ (+6, kislotali: $H_2CrO_4, H_2Cr_2O_7$).' },
      ],
      formulas: [
        { latex: '\\text{Fe}^{3+} + 3\\text{SCN}^- \\to \\text{Fe(SCN)}_3\\;(\\text{qon-qizil})', name: 'Fe³⁺ ioniga sifat reaksiyasi', symbols: 'KSCN rodanid bilan qon-qizil rang' },
        { latex: '\\text{Cu(OH)}_2 + 4\\text{NH}_3 \\to [\\text{Cu(NH}_3)_4](\\text{OH})_2', name: 'Shveytser reaktivi (to‘q ko‘k)', symbols: 'Koordinatsion son k = 4' },
      ],
      constants: [
        { name: 'KMnO₄ va K₂Cr₂O₇ dagi rang', symbol: 'Mn⁺⁷ / Cr⁺⁶', value: 'Binafsha / To‘q sariq', unit: '(kuchli oksidlovchi)' },
        { name: 'Mis (II) sulfat kristallogidrati', symbol: 'CuSO₄·5H₂O', value: '249.7', unit: 'g/mol (ko‘k kuporos)' },
      ],
      applications: [
        'Gemoglobin markazida $Fe^{2+}$, xlorofillda $Mg^{2+}$, B12 vitaminida esa $Co$ ionlari joylashgan tabiiy biologik komplekslardir.',
        'Sisplatin $[Pt(NH_3)_2Cl_2]$ kompleksi saraton kasalligiga qarshi eng samarali kimyoterapevtik dori hisoblanadi.',
      ],
      calculator: {
        title: 'Verner Kompleks Ion Zaryadi va Markaziy Ion OD Kalkulyatori',
        formulaDisplay: 'Q_kompleks = OD(M) + k · Q_ligand',
        inputs: [
          { key: 'odM', label: 'Markaziy metall OD (masalan Fe=+2,+3; Cu=+2)', symbol: 'OD(M)', unit: '', min: 1, max: 4, step: 1, default: 2 },
          { key: 'kLig', label: 'Ligandlar soni (koordinatsion son)', symbol: 'k', unit: 'ta', min: 2, max: 6, step: 1, default: 6 },
          { key: 'qLig', label: '1 ta ligand zaryadi (NH₃/CO=0; CN⁻/OH⁻/Cl⁻=−1)', symbol: 'q_L', unit: '', min: -2, max: 0, step: 1, default: -1 },
        ],
        compute: (v) => {
          const qNet = v.odM + v.kLig * v.qLig;
          return { value: `[ML_${v.kLig}]^(${qNet >= 0 ? '+' + qNet : qNet})`, unit: '', summary: `Koordinatsion son = ${v.kLig} | Kompleks sfera zaryadi: ${qNet === 0 ? '0 (neytral)' : qNet > 0 ? '+' + qNet + ' (kation kompleksi)' : qNet + ' (anion kompleksi, masalan K₄[Fe(CN)₆])'}` };
        },
      },
    },
    simulation: {
      title: 'd-Elementlar Rangdor Reaksiyalari va Komplekslar (VLab)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=flame_test',
      openSourceSource: 'Amrita OLabs · VLab',
      openSourceNote: 'Mis va boshqa metall kationlarining spektral ranglari hamda komplekslarini kuzating.',
      alternateSims: [
        { label: 'Glitsin komplekslovchi ligand 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=glycine' },
      ],
      parametric: {
        mode: 'chem_flame_analysis',
        title: 'd-Elementlar va Kationlar Spektro-Sifat Stendi',
        description: 'Kationni (Cu²⁺ va boshqalar) tanlab, elektron o‘tishiga mos alanga va rangdor spektrni kuzating.',
        controls: [
          { key: 'cation', label: 'Kation (4 = Cu²⁺)', unit: '', min: 1, max: 6, step: 1, value: 4 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Xrom birikmalari qatorida $CrO \\to Cr_2O_3 \\to CrO_3$ oksidlanish darajasi ortganda kimyoviy xossa qanday o‘zgaradi?', options: ['Kislotalidan asosliga', 'Asosli → Amfoter → Kislotaliga', 'Faqat asosli qoladi', 'Metallmas bo‘ladi'], answer: 1, explain: 'd-elementlarda ham quyi OD asosli, +3/+4 amfoter, +6/+7 kislotali oksid beradi.' },
      { q: '$K_4[Fe(CN)_6]$ (sariq qon tuzi) kompleks birikmasida temirning oksidlanish darajasi va koordinatsion soni nechaga teng?', options: ['OD = +2, k = 6', 'OD = +3, k = 6', 'OD = +2, k = 4', 'OD = +4, k = 6'], answer: 0, explain: '4·(+1) + x + 6·(−1) = 0 => x = +2; 6 ta CN⁻ ligand -> k = 6.' },
      { q: '$Fe^{3+}$ ionini eritmada eng sezgir aniqlovchi sifat reaktivi qaysi?', options: ['KSCN (qon-qizil $Fe(SCN)_3$) yoki $K_4[Fe(CN)_6]$ (Berlin lazuri)', 'NaCl', 'BaCl₂', 'AgNO₃'], answer: 0, explain: 'Temir (III) rodanid eritmaga yorqin qon-qizil tus beradi.' },
      { q: 'Misning asosli xossasidan tashqari kuchli qaytaruvchi emasligi uning qayerda joylashganidan?', options: ['Ishqoriy guruhda', 'Beketov qatorida vodoroddan o‘ngda (+0.34 V)', 'Galogenlar yonida', 'Inert gazlarda'], answer: 1, explain: 'Cu suyultirilgan kislotalardan H₂ siqib chiqara olmaydi, faqat oksidlovchi kislotalarda (HNO₃, kons. H₂SO₄) eriydi.' },
      { q: 'Verner nazariyasiga ko‘ra $[Ag(NH_3)_2]Cl$ kompleksida ligand vazifasini nima bajaradi?', options: ['Ag⁺', 'NH₃ (ammiak molekulalari)', 'Cl⁻', 'K⁺'], answer: 1, explain: 'Kvadrat qavs ichidagi markaziy ionga birikkan neytral molekulalar yoki ionlar ligand deyiladi.' },
      { q: 'Kaliy dixromat ($K_2Cr_2O_7$) kislotali muhitda qaytarilganda to‘q sariq rang qaysi rangga aylanadi?', options: ['Rangsiz', 'Yashil ($Cr^{3+}$)', 'Qora', 'Pushti'], answer: 1, explain: 'Cr⁶⁺ (to‘q sariq) → Cr³⁺ (yashil).' },
      { q: 'Inson qonidagi kislorod tashuvchi gemoglobin molekulasining markazida qaysi d-element ioni joylashgan?', options: ['Cu²⁺', 'Fe²⁺', 'Zn²⁺', 'Cr³⁺'], answer: 1, explain: 'Gem tarkibidagi Fe²⁺ ioni O₂ ni qaytar tarzda biriktirib tashishga xizmat qiladi.' },
      { q: 'Mis (II) sulfat suvsiz tuzi ($CuSO_4$) oq kukun bo‘lib, suv tomizilganda zudlik bilan ko‘k rangga ($CuSO_4\\cdot 5H_2O$) kiradi. Bundan nima uchun foydalaniladi?', options: ['Moddalarda suv/namlik borligini aniqlash uchun', 'Kislota olish uchun', 'Alanga bo‘yash uchun', 'Gaz quritmaslik uchun'], answer: 0, explain: 'Suvsiz CuSO₄ — namlik indikatori.' },
    ],
    problems: [
      { variants: [[4, 6], [3, 6], [2, 4]], build(i) { const [kPlus, kLig] = this.variants[i]; const od = kLig - kPlus; return { q: `K_${kPlus}[Fe(CN)_${kLig}] kompleks tuzida CN⁻ zaryadi −1. Markaziy Fe ionining oksidlanish darajasini (+) toping.`, correct: od, unit: '', explain: `${kPlus}·(+1) + OD − ${kLig} = 0 => OD = +${od}.` }; } },
      { variants: [[250], [500], [125]], build(i) { const [m] = this.variants[i]; const mCuSO4 = (m / 250) * 160; return { q: `${m} g ko‘k kuporos (CuSO₄·5H₂O, M=250) tarkibida necha gramm suvsiz CuSO₄ (M=160) bor?`, correct: mCuSO4, unit: 'g', explain: `n = ${m / 250} mol => ${mCuSO4} g.` }; } },
    ],
  },
];
