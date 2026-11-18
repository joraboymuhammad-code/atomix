// Kimyo 4-bo'lim (A va B): Organik Kimyo Asoslari (2) va Uglevodorodlar (7) = 9 mavzu

export const CHEM_SEC4AB_TOPICS = [
  {
    id: 'C4A-1', code: 'K4A.1', sectionId: 'csec-4', subsectionId: 'C4A',
    subsectionTitle: 'A. Organik Kimyoning Nazariy Asoslari',
    title: 'A.M. Butlerov nazariyasi va izomeriya',
    subtitle: 'Kimyoviy tuzilish nazariyasi, izomeriya (tuzilish va fazoviy/stereoizomeriya), gomologik qator, radikallar, funksional guruhlar',
    theory: {
      overview:
        '1861-yilda A.M. Butlerov yaratgan Organik birikmalar kimyoviy tuzilish nazariyasi organik kimyoning nazariy asosidir: 1) Molekuladagi atomlar o‘z valentligiga muvofiq tartibda birikadi (organik birikmalarda uglerod doimo IV valentli); 2) Moddalarning xossalari nafaqat sifat va miqdor tarkibiga, balki molekulaning kimyoviy tuzilishiga ham bog‘liq; 3) Atomlar o‘zaro ta’sirlashib reaksiyaga kirishuvchanligini o‘zgartiradi. Tarkibi bir xil, lekin atomlar bog‘lanish tartibi (tuzilish izomeriyasi: zanjir, o‘rin, sinflararo) yoki fazoviy joylashuvi (stereoizomeriya: cis-trans va optik) farq qiluvchi moddalar izomerlar deb ataladi. Bir-biridan bitta gomologik farq — $CH_2$ guruhi bilan farqlanuvchi o‘xshash birikmalar gomologik qatorni tashkil qiladi.',
      keyLaws: [
        { title: 'Butlerovning asosiy qoidasi', text: 'Barcha organik moddalarda uglerod atomlari o‘zaro birikib zanjir yoki halqa hosil qila oladi va doimo IV valentlik namoyon etadi.' },
        { title: 'Gomolog vs Izomer', text: 'Gomologlarning formulasi $-CH_2-$ ga farq qiladi (masalan $CH_4$ va $C_2H_6$), izomerlarning molekulyar formulasi esa mutlaqo bir xil ($M_r$ teng), tuzilishi har xil.' },
      ],
      formulas: [
        { latex: '\\Delta(\\text{gomolog}) = -\\text{CH}_2- \\quad (\\Delta M_r = 14)', name: 'Gomologik farq', symbols: 'Har keyingi a’zo massasi 14 g/mol ortadi' },
        { latex: '\\text{DBE} = C + 1 - \\frac{H + X - N}{2}', name: 'To‘yinmaganlik darajasi (DBE)', symbols: 'Qo‘shbog‘ va halqalar sonini aniqlaydi' },
      ],
      constants: [
        { name: 'Uglerodning organik birikmalardagi valentligi', symbol: 'Val(C)', value: 'IV (4)', unit: 'ta bog‘' },
        { name: 'Gomologik farq (CH₂) massasi', symbol: 'M(CH₂)', value: '14.03', unit: 'g/mol' },
      ],
      applications: [
        'Tarkibi bir xil etanol ($C_2H_5OH$, qaynash $78^\\circ C$) va dimetil efir ($CH_3-O-CH_3$, gaz $-24^\\circ C$) sinflararo izomeriya tufayli butunlay turlicha xossaga ega.',
        'Dori vositalarining ko‘zgudagi optik izomerlari (enantiomerlar) tirik organizmda mutlaqo turlicha farmakologik ta’sir ko‘rsatishi mumkin.',
      ],
      calculator: {
        title: 'To‘yinmaganlik Darajasi (DBE) va Izomer Tahlilchisi',
        formulaDisplay: 'DBE = C + 1 − (H − N) / 2',
        inputs: [
          { key: 'C', label: 'Uglerod atomlari C', symbol: 'C', unit: '', min: 1, max: 12, step: 1, default: 4 },
          { key: 'H', label: 'Vodorod atomlari H', symbol: 'H', unit: '', min: 2, max: 26, step: 2, default: 8 },
          { key: 'N', label: 'Azot atomlari N', symbol: 'N', unit: '', min: 0, max: 4, step: 1, default: 0 },
        ],
        compute: (v) => {
          const dbe = v.C + 1 - (v.H - v.N) / 2;
          const desc = dbe === 0 ? 'To‘yingan zanjir (alkan/spirt/efir)' : dbe === 1 ? '1 ta qo‘shbog‘ yoki 1 ta halqa (alken/sikloalkan)' : dbe === 2 ? 'Uchbog‘ yoki dien' : dbe >= 4 ? 'Aromatik halqa (benzol DBE=4)' : 'Polito‘yinmagan';
          return { value: `DBE = ${dbe}`, unit: '', summary: `Tuzilish sinfi: ${desc} | Molyar massa (C+H+N): ${12 * v.C + v.H + 14 * v.N} g/mol` };
        },
      },
    },
    simulation: {
      title: '3D Molekulyar Tuzilish va Izomeriya Modellar (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h5oh',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Etanol va funksional guruhli organik molekulalarning 3D tuzilishini aylantirib tekshiring.',
      alternateSims: [
        { label: 'Metan (CH₄) sp³ tuzilishi 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=ch4' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Uglerod Skeleti va Gibridlanish Geometriyasi',
        description: 'Uglerod bog‘lar soniga ko‘ra zanjir va halqa burchaklari o‘zgarishini kuzating.',
        controls: [
          { key: 'sig', label: 'Uglerod σ-bog‘lari', unit: '', min: 2, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Organik birikmalarning kimyoviy tuzilish nazariyasini kim yaratgan?', options: ['D.I. Mendeleyev', 'A.M. Butlerov (1861)', 'M.V. Lomonosov', 'F. Kekule'], answer: 1, explain: 'A.M. Butlerov atomlar birikish tartibi modda xossalarini belgilashini isbotlagan.' },
      { q: 'Organik birikmalarda uglerod atomi har doim necha valentli bo‘ladi?', options: ['II', 'III', 'IV (4)', 'VI'], answer: 2, explain: 'Uglerod qo‘zg‘algan holatda 4 ta toq elektronga ega bo‘lib, barcha barqaror organik moddalarda IV valentli.' },
      { q: 'Etanol ($CH_3CH_2OH$) va dimetil efir ($CH_3-O-CH_3$) molekulalari bir-biriga nisbatan nima?', options: ['Gomologlar', 'Sinflararo tuzilish izomerlari', 'Allotroplar', 'Polimerlar'], answer: 1, explain: 'Ikkalasining formulasi C₂H₆O, lekin funksional guruhi va atomlar tartibi boshqa.' },
      { q: 'Gomologik qatorda har bir keyingi a’zo oldingisidan qaysi guruhga va necha massaga farq qiladi?', options: ['−CH₃, 15', 'Gomologik farq −CH₂−, 14 g/mol', '−OH, 17', '−CO, 28'], answer: 1, explain: 'Masalan, metan (16) → etan (30) → propan (44): har safar +14.' },
      { q: 'Spirtlarda (−OH), aldegidlarda (−CHO), karbon kislotalarda (−COOH) xossalarni belgilovchi guruhlar qanday ataladi?', options: ['Radikallar', 'Funksional guruhlar', 'Gomologlar', 'Katalizatorlar'], answer: 1, explain: 'Funksional guruh moddaning qaysi kimyoviy sinfga kirishini belgilaydi.' },
      { q: 'C₄H₁₀ (butan va izobutan) uglevodorodining nechta tuzilish izomeri mavjud?', options: ['1 ta', '2 ta (n-butan va 2-metilpropan)', '3 ta', '5 ta'], answer: 1, explain: 'To‘g‘ri zanjirli n-butan va tarmoqlangan izobutan.' },
      { q: 'Tarkibida $C_5H_{12}$ formulasida nechta tuzilish izomeri mavjud?', options: ['2 ta', '3 ta (pentan, izopentan, neopentan)', '4 ta', '5 ta'], answer: 1, explain: 'Penta uglerodda 3 ta zanjir izomeri bor.' },
      { q: 'Optik (ko‘zguli) izomeriya uglerod atomi necha xil turli o‘rinbosarga bog‘langanda (xiral markaz) paydo bo‘ladi?', options: ['2 xil', '4 xil turli atom/guruhga', '1 xil', 'Halqasiz'], answer: 1, explain: 'To‘rtala bog‘i 4 ta har xil guruh bilan bog‘langan uglerod asimmetrik (xiral) markaz beradi.' },
    ],
    problems: [
      { variants: [[6, 14], [5, 10], [4, 6], [6, 6]], build(i) { const [c, h] = this.variants[i]; const dbe = c + 1 - h / 2; return { q: `Uglevodorod formulasi C_${c}H_${h}. Uning to‘yinmaganlik darajasi (DBE = π-bog‘ + halqalar soni) nechaga teng?`, correct: dbe, unit: '', explain: `DBE = ${c} + 1 − ${h}/2 = ${dbe}.` }; } },
      { variants: [[3, 16], [5, 16], [4, 30]], build(i) { const [steps, m0] = this.variants[i]; return { q: `Molyar massasi ${m0} g/mol bo‘lgan gomologik qator a’zosidan ${steps} ta −CH₂− (14 g/mol) farqi bilan keyingi gomologning molyar massasi qancha?`, correct: m0 + steps * 14, unit: 'g/mol', explain: `${m0} + ${steps}·14 = ${m0 + steps * 14} g/mol.` }; } },
    ],
  },
  {
    id: 'C4A-2', code: 'K4A.2', sectionId: 'csec-4', subsectionId: 'C4A',
    subsectionTitle: 'A. Organik Kimyoning Nazariy Asoslari',
    title: 'Reaksiya mexanizmlari va elektron effektlar',
    subtitle: 'Radikal va ionli mexanizmlar, elektrofil va nukleofil reagentlar, induktiv va mezomer effektlar',
    theory: {
      overview:
        'Organik reaksiyalarda kovalent bog‘ning uzilishi ikki xil kechadi: 1) Gomolitik uzilish — elektron juft atomlar orasida teng bo‘linib, toq elektronli erkin radikallar ($R^\\bullet$) hosil qiladi (alkanlarning yorug‘likda xlorlanishi — radikal o‘rin olish $S_R$); 2) Geterolitik uzilish — elektron juft bitta atomga o‘tib ionlar hosil qiladi. Ionli mexanizmlarda elektron juftiga boy donor zarralar ($OH^-, Cl^-, NH_3$) nukleofil ($Nu$), elektron yetishmaydigan zarralar ($H^+, Br^+, NO_2^+$) esa elektrofil ($E^+$) deb ataladi. Molekula ichida elektron zichligining $\\sigma$-bog‘ bo‘ylab siljishi induktiv ($\\pm I$) effekt (masalan, alkil radikallari $+I$, galogenlar $-I$ beradi), $\\pi$-bog‘lar tizimi bo‘ylab tarqalishi esa mezomer ($\\pm M$) effekt deyiladi.',
      keyLaws: [
        { title: 'Reagent turlari (Nu va E⁺)', text: 'Nukleofil ("yadro sevuvchi") elektron juft berib bog‘ hosil qiladi; Elektrofil ("elektron sevuvchi") bo‘sh orbitali bilan elektron juftni qabul qiladi.' },
        { title: 'Kislotalilikka elektron effekt ta’siri', text: 'Karbon kislotada $-I$ effektli elektron tortuvchi guruh ($ClCH_2COOH$) $O-H$ bog‘ini kuchli qutblab kislotalilikni oshiradi ($CH_3COOH$ dan kuchli).' },
      ],
      formulas: [
        { latex: 'A : B \\xrightarrow{\\text{gomolitik}} A^\\bullet + B^\\bullet, \\quad A : B \\xrightarrow{\\text{geterolitik}} A^+ + :B^-', name: 'Bog‘ uzilish mexanizmlari', symbols: 'Radikal vs Ion mexanizmlar' },
        { latex: '\\pm I\\;(\\sigma\\text{-bog‘ siljishi}), \\quad \\pm M\\;(\\pi\\text{-sistema kon’yugatsiyasi})', name: 'Induktiv va mezomer elektron effektlar', symbols: 'Reaktivlik markazida zaryad taqsimoti' },
      ],
      constants: [
        { name: 'Alkanlar xlorlanishi tashabbuskori', symbol: 'hν (UB)', value: 'Radikal (S_R)', unit: 'zanjir reaksiya' },
        { name: 'Benzol nitrolanishi mexanizmi', symbol: 'NO₂⁺', value: 'Elektrofil (S_E)', unit: 'o‘rin olish' },
      ],
      applications: [
        'Polimerlanish reaksiyalarining ko‘pchiligi (polietilen olish) erkin radikal yoki katalitik ion mexanizm orqali boshqariladi.',
        'Atmosfera ozon qatlamining yemirilishi freonlardan yorug‘likda ajraladigan erkin xlor radikallari ($Cl^\\bullet$) ning zanjirli reaksiyasi tufaylidir.',
      ],
      calculator: {
        title: 'Gomolitik / Geterolitik Reaksiya Faollanish Kuchi Baholagichi',
        formulaDisplay: 'k_rel = exp(ΔE_eff / (RT))',
        inputs: [
          { key: 'T', label: 'Reaksiya harorati T', symbol: 'T', unit: 'K', min: 273, max: 500, step: 10, default: 300 },
          { key: 'eff', label: 'Elektron effekt barqarorlashuvi ΔE', symbol: 'ΔE', unit: 'kJ/mol', min: 0, max: 25, step: 1, default: 12 },
        ],
        compute: (v) => {
          const boost = Math.exp((v.eff * 1000) / (8.314 * v.T));
          return { value: `${boost.toFixed(1)}× tez`, unit: '', summary: `Karbkation/radikalni barqarorlashtirish reaksiyani ${boost.toFixed(1)} marta tezlashtiradi.` };
        },
      },
    },
    simulation: {
      title: 'Bog‘ Qutbliligi, Radikal va Reaksiya Tezligi Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=kinetics',
      openSourceSource: 'PhET · 3Dmol.js',
      openSourceNote: 'Reaktiv zarralar to‘qnashuvi va elektron zichligi siljishini virtual laboratoriyada tekshiring.',
      alternateSims: [
        { label: 'Benzol π-elektron tizimi (mezomer) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c6h6' },
      ],
      parametric: {
        mode: 'chem_bonding',
        title: 'Elektron Zichligi Siljishi (Induktiv Effekt ±I) Stendi',
        description: 'Atomlar elektromanfiyligi farqini o‘zgartirib, elektron bulutining geterolitik siljishini kuzating.',
        controls: [
          { key: 'dx', label: 'Qutblanish Δχ', unit: '', min: 0, max: 3.0, step: 0.1, value: 1.3 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kovalent bog‘ning elektron jufti ikkala atomga bittadan teng bo‘linib erkin radikallar hosil qilishi qaysi uzilish?', options: ['Geterolitik', 'Gomolitik uzilish', 'Ionli', 'Donor-akseptor'], answer: 1, explain: 'Gomolitik uzilishda toq elektronli faol radikallar (A• + B•) yuzaga keladi.' },
      { q: 'Elektron juftiga boy bo‘lib, reaksiya vaqtida musbat markazga (yadroga) hujum qiluvchi zarracha nima deyiladi?', options: ['Elektrofil', 'Nukleofil ($OH^-, Cl^-, NH_3$)', 'Radikal', 'Kation'], answer: 1, explain: 'Nukleofil ("yadro sevuvchi") elektron juft donoridir.' },
      { q: 'Metanning yorug‘lik ($h\\nu$) ta’sirida xlor bilan reaksiyasi qaysi mexanizm bo‘yicha kechadi?', options: ['Elektrofil o‘rin olish', 'Erkin radikal zanjirli o‘rin olish ($S_R$)', 'Nukleofil birikish', 'Ion almashinish'], answer: 1, explain: 'UB nur Cl₂ molekulasini Cl• radikallariga parchalab zanjirli S_R reaksiyani boshlaydi.' },
      { q: 'Qaysi zarrachalar guruhi tipik elektrofillar (elektron tanqis zarralar) hisoblanadi?', options: ['$OH^-, CN^-$', '$H^+, NO_2^+, Br^+$', '$H_2O, NH_3$', '$Cl^-, I^-$'], answer: 1, explain: 'Musbat zaryadli yoki bo‘sh orbitalli zarralar elektron juft qabul qiladi.' },
      { q: 'Sirka kislotaga ($CH_3COOH$) qaraganda xlorcirka kislota ($ClCH_2COOH$) kuchliroq kislota bo‘lishiga sabab nima?', options: ['Xlor atomining kuchli manfiy induktiv (−I) effekti elektronni tortib H⁺ chiqishini osonlashtiradi', 'Xlor og‘irligi', 'Vodorod bog‘i', 'Mezomer ta’sir'], answer: 0, explain: '−I effekt karboksilat anionni barqarorlashtirib kislotalilikni ~100 marta kuchaytiradi.' },
      { q: 'Benzol va alkenlar kabi π-elektronlarga boy tizimlarga asosan qanday reagentlar birinchi bo‘lib hujum qiladi?', options: ['Nukleofillar', 'Elektrofillar ($E^+$)', 'Inert gazlar', 'Metalllar'], answer: 1, explain: 'Yuqori elektron zichlikli π-bog‘ elektrofil zarrachalarni o‘ziga tortadi (A_E va S_E).' },
      { q: 'π-bog‘lar tizimi bo‘ylab elektron bulutining delokallashishi va siljishi qaysi effekt deyiladi?', options: ['Induktiv', 'Mezomer (kon’yugatsiya) effekti', 'Diffuziya', 'Katalitik effekt'], answer: 1, explain: 'π–π yoki p–π bog‘lar tutashganda mezomer (±M) effekt yuzaga keladi.' },
      { q: 'Alkil guruhlari ($-CH_3, -C_2H_5$) elektron zichligini zanjirga itaruvchi qanday induktiv effektga ega?', options: ['Manfiy −I', 'Musbat +I elektronodonor effekt', 'Nol effekt', 'Oksidlovchi effekt'], answer: 1, explain: 'Alkil guruhlari elektronodonor (+I) ta’sir ko‘rsatib uchlamchi karbkationlarni barqarorlaydi.' },
    ],
    problems: [
      { variants: [[4], [2], [6], [1]], build(i) { const [n] = this.variants[i]; return { q: `Metan xlorlanishida (CH₄ → CCl₄) barcha vodorodlar almashishi uchun jami necha mol Cl₂ radikal mexanizmda sarflanadi (${n} ta H almashganda)?`, correct: n, unit: 'mol', explain: `Har bir H almashishi uchun 1 mol Cl₂ kerak (CH₄ + ${n}Cl₂): ${n} mol.` }; } },
      { variants: [[30, 12], [20, 8], [15, 5]], build(i) { const [e1, de] = this.variants[i]; return { q: `Radikal barqarorligi tufayli faollanish energiyasi ${e1} kJ/mol dan ${de} kJ/mol ga pasaydi. Yangi to‘siq necha kJ/mol?`, correct: e1 - de, unit: 'kJ/mol', explain: `${e1} − ${de} = ${e1 - de} kJ/mol.` }; } },
    ],
  },
  {
    id: 'C4B-1', code: 'K4B.1', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Alkanlar (To‘yingan uglevodorodlar)',
    subtitle: 'Metan, gomologlari, sp³-gibridlanish, o‘rin olish va kreking reaksiyalari',
    theory: {
      overview:
        'Alkanlar (paraffinlar) — barcha uglerod atomlari $sp^3$ gibridlangan ($109.5^\\circ$) faqat yakka $\\sigma$-bog‘lar orqali bog‘langan to‘yingan uglevodorodlar; umumiy formulasi $C_n H_{2n+2}$. Gomologik qatori: metan $CH_4$, etan $C_2H_6$, propan $C_3H_8$, butan $C_4H_{10}$ ($C_1–C_4$ gazlar, $C_5–C_{16}$ suyuqliklar, $C_{17}+$ qattiq). Qutbsiz C–H va C–C $\\sigma$-bog‘lari o‘ta pishiq bo‘lgani uchun alkanlar kislota, ishqor va $KMnO_4$ ta’siriga chidamli; ularga asosan radikal o‘rin olish (xlorlash), konovalov nitrolashi, izomerlanish, degidrogenlash va yuqori haroratli kreking ($C_8H_{18} \\to C_4H_{10} + C_4H_8$) hamda yonish reaksiyalari xos.',
      keyLaws: [
        { title: 'Alkanlarning yonish tenglamasi', text: '$C_n H_{2n+2} + \\frac{3n+1}{2}O_2 \\to nCO_2 + (n+1)H_2O + Q$.' },
        { title: 'O‘rin olish qonuniyati', text: 'Alkanlarga yorug‘likda galogen ta’sirida o‘rin olish ($S_R$) boradi; galogen avval uchlamchi, keyin ikkilamchi uglerod atomidagi H ni almashtiradi.' },
      ],
      formulas: [
        { latex: 'C_n H_{2n+2} \\quad (n \\ge 1)', name: 'Alkanlar umumiy formulasi', symbols: 'M = 14n + 2 g/mol' },
        { latex: '2R\\text{-Cl} + 2\\text{Na} \\xrightarrow{\\text{Vyurs}} R\\text{-}R + 2\\text{NaCl}', name: 'Vyurs sintezi (zanjir uzaytirish)', symbols: 'Galoalkanlardan alkan olish' },
      ],
      constants: [
        { name: 'Metan (CH₄) bog‘ burchagi', symbol: '∠H-C-H', value: '109.5', unit: '° (sp³ tetraedr)' },
        { name: 'Tabiiy gazdagi metan ulushi', symbol: 'φ(CH₄)', value: '85 – 98', unit: '%' },
      ],
      applications: [
        'Metan, propan-butan aralashmasi (suyultirilgan gaz) va benzin alkanlari asosiy yoqilg‘i va kimyo sanoati xomashyosi.',
        'Kreking jarayonida neftning og‘ir alkan fraksiyalaridan yuqori oktanli benzin va alkenlar olinadi.',
      ],
      calculator: {
        title: 'Alkan (C_n H_{2n+2}) Yonishi va Molyar Massasi Kalkulyatori',
        formulaDisplay: 'M = 14n + 2,   O₂ moli = (3n + 1) / 2',
        inputs: [
          { key: 'n', label: 'Uglerod atomlari soni n', symbol: 'n', unit: 'ta C', min: 1, max: 12, step: 1, default: 3 },
        ],
        compute: (v) => {
          const M = 14 * v.n + 2;
          const o2 = (3 * v.n + 1) / 2;
          return { value: `C_${v.n}H_${2 * v.n + 2} (M=${M})`, unit: '', summary: `1 mol yonishi uchun ${o2.toFixed(1)} mol (${(o2 * 22.4).toFixed(1)} L) O₂ sarflanib, ${v.n} mol CO₂ va ${v.n + 1} mol H₂O beradi.` };
        },
      },
    },
    simulation: {
      title: 'Metan (CH₄) sp³ Tetraedrik 3D Molekulasi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=ch4',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Metan molekulasini 3D aylantirib, barcha 4 ta C−H bog‘lari 109.5° burchakda bir xil simmetrik ekanligini ko‘ring.',
      alternateSims: [
        { label: 'Ideal gaz va uglevodorod bug‘lari (Effectuall)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Ideal_Gas_Equation.html' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Metan sp³ Tetraedr Modeli',
        description: '4 ta σ-bog‘ga ega to‘yingan uglerodning fazoviy simmetriyasini kuzating.',
        controls: [
          { key: 'sig', label: 'C σ-bog‘lari soni', unit: '', min: 4, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Bo‘linmagan juft', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Alkanlarning umumiy kimyoviy formulasi qaysi?', options: ['C_nH_{2n}', 'C_nH_{2n+2}', 'C_nH_{2n-2}', 'C_nH_{2n-6}'], answer: 1, explain: 'To‘yingan zanjirda har bir C ga 2 ta H + uchlarida 2 ta H to‘g‘ri keladi: C_nH_{2n+2}.' },
      { q: 'Qaysi molyar massali modda alkanlar gomologik qatorining 4-a’zosi (butan) ga to‘g‘ri keladi?', options: ['30 g/mol', '44 g/mol', '58 g/mol', '72 g/mol'], answer: 2, explain: 'C₄H₁₀ => 4·12 + 10 = 58 g/mol.' },
      { q: 'Alkanlarga xos bo‘lgan eng asosiy reaksiya turi qaysi?', options: ['Birikish', 'Yorug‘likda radikal o‘rin olish (xlorlash) va yonish', 'Polimerlanish', 'Kumush ko‘zgu'], answer: 1, explain: 'Alkanlar to‘yingan bo‘lgani uchun birikishga kirishmaydi, faqat o‘rin olish beradi.' },
      { q: '1 mol propan ($C_3H_8$) to‘liq yonishi uchun necha mol kislorod ($O_2$) sarflanadi?', options: ['3 mol', '4 mol', '5 mol', '6.5 mol'], answer: 2, explain: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.' },
      { q: 'Neft tarkibidagi uzun zanjirli alkanlarni qizdirib qisqaroq alkan va alkenga parchalash jarayoni nima deyiladi?', options: ['Gidroliz', 'Kreking', 'Eterifikatsiya', 'Vulkanizatsiya'], answer: 1, explain: 'Kreking natijasida benzin fraksiyasi unumi ikki baravar oshiriladi.' },
      { q: 'Vyurs reaksiyasi ($2CH_3Cl + 2Na$) natijasida qaysi uglevodorod hosil bo‘ladi?', options: ['Metan', 'Etan ($C_2H_6$)', 'Etilen', 'Atsetilen'], answer: 1, explain: 'Ikkita metil radikali birikib etan beradi: CH₃−CH₃ + 2NaCl.' },
      { q: 'Alkanlar bromli suvni ($Br_2$ suvli eritmasini) va kaliy permanganatni ($KMnO_4$) rangsizlantiradimi?', options: ['Ha, tezda', 'Yo‘q, oddiy sharoitda rangsizlantirmaydi', 'Faqat qorong‘ida', 'Faqat metan'], answer: 1, explain: 'Alkanlarda qo‘shbog‘ yoki uchbog‘ yo‘qligi sababli sifat reaktivlari bilan ta’sirlashmaydi.' },
      { q: 'Metan molekulasida C−H bog‘lari orasidagi burchak va gibridlanish turi qanday?', options: ['180°, sp', '120°, sp²', '109.5°, sp³', '90°'], answer: 2, explain: 'Alkanlarda barcha C atomlari sp³ gibridlangan.' },
    ],
    problems: [
      { variants: [[1, 22.4], [2, 22.4], [3, 11.2], [4, 22.4]], build(i) { const [n, v1] = this.variants[i]; const vo2 = ((3 * n + 1) / 2) * v1; return { q: `${v1} L (n.sh.) C_${n}H_${2 * n + 2} alkani to‘liq yonishi uchun necha litr O₂ zarur?`, correct: Number(vo2.toFixed(1)), unit: 'L', explain: `O₂ koeffitsienti (3·${n}+1)/2 = ${(3 * n + 1) / 2} => V = ${vo2.toFixed(1)} L.` }; } },
      { variants: [[5], [6], [7], [8]], build(i) { const [n] = this.variants[i]; return { q: `C_${n}H_${2 * n + 2} tarkibli alkanning molyar massasi necha g/mol?`, correct: 14 * n + 2, unit: 'g/mol', explain: `12·${n} + ${2 * n + 2} = ${14 * n + 2}.` }; } },
    ],
  },
  {
    id: 'C4B-2', code: 'K4B.2', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Sikloalkanlar va halqa konformatsiyalari',
    subtitle: 'Kichik va oddiy halqalar, konformatsiyalar',
    theory: {
      overview:
        'Sikloalkanlar (naftenlar) — molekulalarida bitta yoki bir nechta yopiq uglerod halqasi saqlovchi to‘yingan siklik uglevodorodlar; umumiy formulasi $C_n H_{2n}$ (alkenlar bilan sinflararo izomer). Uglerod atomlari $sp^3$ holatda bo‘lsada, halqa o‘lchamiga ko‘ra xossalari keskin farq qiladi: kichik halqalar — siklopropan ($C_3H_6$, $60^\\circ$ bog‘ burchagi — kuchli Bayer burchak kuchlanishi) va siklobutan ($C_4H_8$, $90^\\circ$) beqaror bo‘lib, $H_2$ va $HBr$ ni halqani uzish (birikish) bilan biriktiradi. Oddiy halqalar — siklopentan ($C_5H_{10}$) va siklogeksan ($C_6H_{12}$) burchak kuchlanishidan xoli ("kreslo" va "vanna" fazoviy konformatsiyalari) va alkanlar singari o‘rin olish reaksiyalariga kirishadi.',
      keyLaws: [
        { title: 'Bayer burchak kuchlanishi qoidasi', text: 'Tetraedr ideal burchagi $109.5^\\circ$ dan halqa burchagi qancha uzoq bo‘lsa (masalan siklopropan $60^\\circ$), halqa shuncha beqaror va halqa uzilish reaksiyalariga moyil.' },
        { title: 'Siklogeksan konformatsiyalari', text: 'Siklogeksan tekis oltiburchak emas, barcha burchaklari $109.5^\\circ$ bo‘lgan eng barqaror "kreslo" (chair) konformatsiyasida mavjud bo‘ladi.' },
      ],
      formulas: [
        { latex: 'C_n H_{2n} \\quad (n \\ge 3)', name: 'Monosiklik sikloalkanlar formulasi', symbols: 'Alkenlar bilan sinflararo izomer' },
        { latex: '\\triangle\\text{C}_3\\text{H}_6 + H_2 \\xrightarrow{\\text{Ni, }t} \\text{CH}_3\\text{-CH}_2\\text{-CH}_3', name: 'Kichik halqa ochilishi', symbols: 'Siklopropan propan beradi' },
      ],
      constants: [
        { name: 'Siklopropan (C₃H₆) halqa burchagi', symbol: '∠C-C-C', value: '60°', unit: '(kuchli kuchlanish)' },
        { name: 'Siklogeksan "kreslo" burchagi', symbol: '∠C-C-C', value: '109.5°', unit: '(kuchlanishsiz)' },
      ],
      applications: [
        'Siklopropan kuchli og‘riqsizlantiruvchi gaz sifatida tibbiy narkozda, siklogeksan esa neylon-6,6 va kapron sintezida xomashyo sifatida ishlatiladi.',
        'Boku va Farg‘ona neftlarida siklopentan hamda siklogeksan unumlari — naften uglevodorodlari yuqori ulushni tashkil qiladi.',
      ],
      calculator: {
        title: 'Sikloalkan (C_n H_{2n}) Formulasi va Yonish Kalkulyatori',
        formulaDisplay: 'M = 14n,   C_nH_{2n} + 1.5n O₂ → nCO₂ + nH₂O',
        inputs: [
          { key: 'n', label: 'Halqadagi uglerodlar soni n', symbol: 'n', unit: 'ta C', min: 3, max: 8, step: 1, default: 6 },
        ],
        compute: (v) => {
          const M = 14 * v.n;
          const o2 = 1.5 * v.n;
          const stab = v.n <= 4 ? 'Kichik kuchlanishli halqa (birikish beradi)' : 'Barqaror halqa (o‘rin olish xos)';
          return { value: `C_${v.n}H_${2 * v.n} (M=${M})`, unit: '', summary: `${stab} | 1 mol yonishi uchun ${o2.toFixed(1)} mol O₂ sarflanadi.` };
        },
      },
    },
    simulation: {
      title: 'Halqa Tuzilishi va 3D Konformatsiyalar (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c6h6',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Olti a’zoli halqaning 3D simmetriyasini va tetraedrik uglerod bog‘lanishini solishtiring.',
      alternateSims: [
        { label: 'sp³ Tetraedr burchagi 109.5° (CH₄)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=ch4' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Halqa Burchagi va Konformatsiya Kuchlanishi',
        description: 'sp³ uglerodlarning 109.5° gibridlanishiga mos bog‘lanish modelini kuzating.',
        controls: [
          { key: 'sig', label: 'Bog‘lar soni', unit: '', min: 4, max: 4, step: 1, value: 4 },
          { key: 'lp', label: 'Juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Sikloalkanlar qaysi boshqa uglevodorod sinfi bilan o‘zaro sinflararo izomer hisoblanadi?', options: ['Alkanlar', 'Alkenlar ($C_n H_{2n}$)', 'Alkinlar', 'Arenlar'], answer: 1, explain: 'Ikkalasining ham umumiy formulasi C_nH_{2n} (n≥3).' },
      { q: 'Qaysi sikloalkanlar burchak kuchlanishi katta bo‘lgani uchun vodorod va bromni halqa uzilishi hisobiga biriktirib oladi?', options: ['Siklogeksan', 'Siklopropan ($60^\\circ$) va siklobutan ($90^\\circ$)', 'Siklopentan', 'Siklooktan'], answer: 1, explain: '3- va 4-a’zoli halqalar beqaror bo‘lib, qo‘shilish reaksiyalarida ochilib ketadi.' },
      { q: 'Siklogeksan molekulasining tabiatda eng barqaror va energetik qulay fazoviy konformatsiyasi qanday nomlanadi?', options: ['Tekis oltiburchak', '"Kreslo" konformatsiyasi', 'Piramida', 'Kub'], answer: 1, explain: '"Kreslo" shaklida barcha burchaklar 109.5° va qo‘shni C−H bog‘lari to‘qnashmaydi.' },
      { q: 'Sikloalkanlarni alkanlardan farqlovchi asosiy xossa: siklopentan va siklogeksan oddiy sharoitda bromli suvni rangsizlantiradimi?', options: ['Ha', 'Yo‘q, qo‘shbog‘ yo‘qligi uchun KMnO₄ va bromli suvni rangsizlantirmaydi', 'Faqat kechasi', 'Ha, portlaydi'], answer: 1, explain: 'Kichik halqa (siklopropan) Br₂ bilan sekin ta’sirlashadi, oddiy halqalar esa KMnO₄ ga barqarordir.' },
      { q: 'Siklogeksan ($C_6H_{12}$) ni Pt katalizatorida 300 °C da degidrogenlasak (3 mol $H_2$ chiqsa) nima olinadi?', options: ['Geksan', 'Benzol ($C_6H_6$)', 'Geksen', 'Siklobutan'], answer: 1, explain: 'Zelinskiy reaksiyasi: C₆H₁₂ → C₆H₆ + 3H₂ (aromatizatsiya).' },
      { q: '1,2-dimetilsiklobutan molekulasida qanday fazoviy izomeriya uchraydi?', options: ['Faqat optik', 'Cis- va trans- geometrik izomeriya (halqaga nisbatan)', 'Izomeriyasi yo‘q', 'Tautomeriya'], answer: 1, explain: 'Halqada erkin aylanish cheklangani uchun metil guruhlari bir tomonda (cis) yoki qarama-qarshi tomonda (trans) joylashadi.' },
      { q: 'Neft kimyosida sikloalkanlarning tarixiy umumiy nomi nima deb yuritiladi?', options: ['Olefinlar', 'Naftenlar', 'Paraffinlar', 'Arenlar'], answer: 1, explain: 'Rus va jahon neft kimyosida Morkovnikov kashfiyotidan beri sikloalkanlar naftenlar deyiladi.' },
      { q: 'Molyar massasi 84 g/mol bo‘lgan sikloalkan molekulasida nechta uglerod atomi bor?', options: ['4 ta', '5 ta', '6 ta (siklogeksan $C_6H_{12}$)', '7 ta'], answer: 2, explain: '14n = 84 => n = 6.' },
    ],
    problems: [
      { variants: [[84], [70], [56], [42]], build(i) { const [mr] = this.variants[i]; return { q: `Molyar massasi ${mr} g/mol bo‘lgan sikloalkan molekulasida nechta vodorod atomi bor?`, correct: (mr / 14) * 2, unit: 'ta', explain: `14n = ${mr} => n = ${mr / 14}; H soni = 2n = ${(mr / 14) * 2}.` }; } },
      { variants: [[42, 22.4], [84, 22.4], [28, 22.4]], build(i) { const [m, v] = this.variants[i]; return { q: `42 g siklopropan (M=42) to‘liq gidrogenlanib propanga aylanishi uchun n.sh. da necha litr H₂ kerak? (1 mol siklopropan uchun)`, correct: (m / 42) * v, unit: 'L', explain: `n = ${m / 42} mol => ${(m / 42) * v} L.` }; } },
    ],
  },
  {
    id: 'C4B-3', code: 'K4B.3', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Alkenlar, qo‘shbog‘, Markovnikov va polimerlanish',
    subtitle: 'Etilen, qo‘shbog‘, sp²-gibridlanish, cis-trans izomeriya, birikish reaksiyalari (Markovnikov qoidasi), polimerlanish',
    theory: {
      overview:
        'Alkenlar (olefinlar) — uglerod zanjirida bitta qo‘shbog‘ ($C=C$: 1 ta mustahkam $\\sigma$ + 1 ta kuchsiz $\\pi$-bog‘) tutgan to‘yinmagan uglevodorodlar; umumiy formulasi $C_n H_{2n}$ ($n\\ge 2$). Qo‘shbog‘dagi uglerod atomlari $sp^2$ gibridlangan ($120^\\circ$, tekis tuzilish). Qo‘shbog‘ o‘qi atrofida erkin aylanish mumkin bo‘lmagani uchun o‘rinbosarlar har xil bo‘lsa cis- va trans- geometrik izomeriya vujudga keladi (masalan buten-2). Alkenlarning barcha asosiy reaksiyalari $\\pi$-bog‘ uzilib elektrofil birikish ($A_E$) orqali boradi: gidrogenlash ($+H_2$), galogenlash ($+Br_2$ — bromli suvni rangsizlantiradi!), gidrogalogenlash ($+HCl$), gidratatsiya ($+H_2O \\to$ spirt). Nosimmetrik alkenlarga ($CH_3-CH=CH_2 + HCl$) birikish V.V. Markovnikov qoidasiga bo‘ysunadi; polimerlanish esa minglab etilen molekulalaridan polietilen ($[-CH_2-CH_2-]_n$) olish imkonini beradi.',
      keyLaws: [
        { title: 'Markovnikov qoidasi', text: 'Nosimmetrik alkenga $HX$ (yoki $H_2O$) birikishida vodorod qo‘shbog‘dagi ko‘proq vodorod tutgan uglerodga, galogen/OH esa kamroq vodorod tutgan (ko‘proq o‘rinbosarli) uglerodga birikadi.' },
        { title: 'Qo‘shbog‘ga ikki sifat reaksiyasi', text: '1) Qizil-qo‘ng‘ir bromli suvni ($Br_2$) rangsizlantiradi; 2) Binafsha $KMnO_4$ eritmasini rangsizlantirib glikollar hosil qiladi (Vagner reaksiyasi).' },
      ],
      formulas: [
        { latex: 'n\\,\\text{CH}_2=\\text{CH}_2 \\xrightarrow{P, t, \\text{kat}} (-\\text{CH}_2-\\text{CH}_2-)_n', name: 'Etilenning polimerlanishi (Polietilen)', symbols: 'Polimerlanish darajasi n = 1000..10000' },
        { latex: '\\text{CH}_3\\text{-CH=CH}_2 + \\text{HBr} \\to \\text{CH}_3\\text{-CHBr-CH}_3', name: 'Markovnikov qoidasi bo‘yicha birikish', symbols: 'Asosiy mahsulot: 2-brompropan' },
      ],
      constants: [
        { name: 'Etilen (C₂H₄) qo‘shbog‘ uzunligi', symbol: 'L(C=C)', value: '0.134', unit: 'nm (120°)' },
        { name: 'Polietilen (PE) elementar zvenosi', symbol: 'M(−C₂H₄−)', value: '28.05', unit: 'g/mol' },
      ],
      applications: [
        'Polietilen va polipropilen dunyoda eng ko‘p ishlab chiqariladigan plastmassa paketlar, quvurlar va qadoqlash materiallaridir.',
        'Etilen gazi tabiiy o‘simlik gormoni bo‘lib, mevalarning pishishini tezlatish uchun sabzavot omborlarida ishlatiladi.',
      ],
      calculator: {
        title: 'Alken Formulasi va Polimerlanish Darajasi (n) Kalkulyatori',
        formulaDisplay: 'M_monomer = 14k,   n = M_polimer / M_monomer',
        inputs: [
          { key: 'k', label: 'Monomerdagi C atomlari (etilen=2, propilen=3)', symbol: 'k', unit: 'ta C', min: 2, max: 6, step: 1, default: 2 },
          { key: 'mPol', label: 'Polimer o‘rtacha massasi (ming g/mol)', symbol: 'M_p', unit: 'kg/mol', min: 14, max: 280, step: 14, default: 56 },
        ],
        compute: (v) => {
          const mMon = 14 * v.k;
          const deg = Math.round((v.mPol * 1000) / mMon);
          return { value: `n ≈ ${deg} zveno`, unit: '', summary: `Monomer: C_${v.k}H_${2 * v.k} (M=${mMon} g/mol) | Polimer zanjirida ${deg} ta takroriy bo‘g‘in bor.` };
        },
      },
    },
    simulation: {
      title: 'Etilen (C₂H₄, sp²) 3D Modeli va Bromli Suv Reaksiyasi',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h4',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Yassi etilen molekulasini 3D aylantirib, barcha 6 ta atom bir tekislikda (120°) yotishini ko‘ring.',
      alternateSims: [
        { label: 'Etanol (etilen gidratatsiya mahsuloti) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h5oh' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Etilen sp² Yassi Trigonal Geometrik Modeli',
        description: 'Qo‘shbog‘li uglerodning 3 ta σ-bog‘ga mos 120° burchagini kuzating.',
        controls: [
          { key: 'sig', label: 'C σ-bog‘lari', unit: '', min: 2, max: 4, step: 1, value: 3 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Alkenlar molekulasidagi qo‘shbog‘ atrofida uglerod atomlari qaysi gibridlanish holatida bo‘ladi?', options: ['$sp$', '$sp^2$ (yassi, $120^\\circ$)', '$sp^3$', 'Gibridlanmagan'], answer: 1, explain: 'Qo‘shbog‘ hosil qiluvchi uglerodlar 3 ta σ-bog‘ bilan sp² (120°) gibridlangan.' },
      { q: 'Alkenlarda qo‘shbog‘ mavjudligini laboratoriya sharoitida qaysi sifat reaksiyalari bilan aniqlanadi?', options: ['Lakmus bilan', 'Bromli suv ($Br_2$) va $KMnO_4$ eritmasini rangsizlantirishi bilan', 'AgNO₃ bilan', 'NaOH bilan'], answer: 1, explain: 'π-bog‘ Br₂ ni darhol biriktirib eritmani rangsizlantiradi.' },
      { q: 'Markovnikov qoidasiga ko‘ra propen ($CH_3-CH=CH_2$) ga $HCl$ birikishidan qaysi asosiy mahsulot olinadi?', options: ['1-xlorpropan', '2-xlorpropan ($CH_3-CHCl-CH_3$)', 'Xlorpropanon', 'Metan'], answer: 1, explain: 'Vodorod CH₂ ga, xlor esa o‘rtadagi CH ga birikadi.' },
      { q: 'Qaysi alkenda fazoviy cis- va trans- izomeriya mavjud?', options: ['Eten (etilen)', 'Propen', 'Buten-2 ($CH_3-CH=CH-CH_3$)', '2-metilpropen'], answer: 2, explain: 'Qo‘shbog‘ning har ikki uglerodida turlicha ikkita guruh bo‘lishi kerak (buten-2 da har bir C da H va CH₃ bor).' },
      { q: 'Etilenning kislotali katalizator ishtirokida suv biriktirishi (gidratatsiyasi) dan nima hosil bo‘ladi?', options: ['Sirka kislota', 'Etanol ($C_2H_5OH$)', 'Atsetilen', 'Etan'], answer: 1, explain: 'CH₂=CH₂ + H₂O → CH₃−CH₂−OH (sanoatda spirt olish usuli).' },
      { q: 'Polipropilenning o‘rtacha molekulyar massasi 42 000 g/mol bo‘lsa, uning polimerlanish darajasi ($n$) nechaga teng? (Propen M=42)', options: ['100', '500', '1000', '2000'], answer: 2, explain: 'n = 42 000 / 42 = 1000.' },
      { q: 'Etan ($C_2H_6$) va Etilen ($C_2H_4$) gazlarining aralashmasini ajratib olish uchun aralashmani nimadan o‘tkazish kerak?', options: ['Suvdan', 'Bromli suv (yoki KMnO₄) dan — etilen yutiladi, etan o‘tib ketadi', 'NaOH dan', 'Havodan'], answer: 1, explain: 'Alkan bromli suv bilan reaksiyaga kirishmaydi, alken esa birikib dibrometan (suyuqlik) bo‘lib qoladi.' },
      { q: 'Kucherov reaksiyasidan farqli ravishda alkenning KMnO₄ sovuq suvli eritmasi bilan yumshoq oksidlanishi (Vagner reaksiyasi) nima beradi?', options: ['Ikki atomli spirt (diol / etilenglikol)', 'Aldegid', 'Alkan', 'CO₂'], answer: 0, explain: 'CH₂=CH₂ + [O] + H₂O → HO−CH₂−CH₂−OH.' },
    ],
    problems: [
      { variants: [[28000, 28], [84000, 42], [104000, 104]], build(i) { const [mp, mm] = this.variants[i]; return { q: `Polimerning o‘rtacha molekulyar massasi ${mp} g/mol, monomerining molyar massasi ${mm} g/mol. Polimerlanish darajasini (n) toping.`, correct: mp / mm, unit: '', explain: `n = ${mp} / ${mm} = ${mp / mm}.` }; } },
      { variants: [[28, 160], [42, 160], [56, 160]], build(i) { const [ma, mbr] = this.variants[i]; return { q: `${ma} g (1 mol) alken to‘liq bromlanganda ${mbr} g Br₂ birikadi. Hosil bo‘lgan dibromalkan massasi necha gramm?`, correct: ma + mbr, unit: 'g', explain: `Birikish reaksiyasida m_mahsulot = ${ma} + ${mbr} = ${ma + mbr} g.` }; } },
    ],
  },
  {
    id: 'C4B-4', code: 'K4B.4', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Alkadiyenlar, kauchuklar va vulkanizatsiya',
    subtitle: 'Kauchuklar (tabiiy va sintetik), vulkanizatsiya',
    theory: {
      overview:
        'Alkadiyenlar — tarkibida ikkita qo‘shbog‘ tutuvchi to‘yinmagan uglevodorodlar ($C_n H_{2n-2}$). Muhim amaliy ahamiyatga ega vakillari qo‘shbog‘lari bitta yakka bog‘ bilan ajralgan kon’yugirlangan (tutashtirilgan) dienlardir: butadiyen-1,3 (divinil: $CH_2=CH-CH=CH_2$, S.V. Lebedev usulida etanoldan olinadi) va 2-metilbutadiyen-1,3 (izopren). Ularning polimerlanishidan elastik kauchuklar olinadi: tabiiy kauchuk izoprenning cis-polimeri, sun’iy kauchuk esa butadiyen, xloropren yoki stirol-butadiyendan sintezlanadi. Kauchuk yumshoq va haroratga sezgir bo‘lgani uchun uni oltingugurt ($S$) bilan qizdirib ko‘ndalang disulfid ko‘priklar ($-S-S-$) hosil qilish — vulkanizatsiya yo‘li bilan mustahkam rezina (yoki ko‘p oltingugurt qo‘shilganda qattiq ebonit) olinadi.',
      keyLaws: [
        { title: '1,4-birikish va polimerlanish', text: 'Butadiyen-1,3 polimerlanganda zanjir o‘rtasida bitta qo‘shbog‘ qoladi: $nCH_2=CH-CH=CH_2 \\to (-CH_2-CH=CH-CH_2-)_n$.' },
        { title: 'Vulkanizatsiya mohiyati', text: 'Chiziqli polimer kauchuk zanjirlarini 2–5% oltingugurt yordamida fazoviy to‘rsimon strukturaga (rezina) bog‘lash.' },
      ],
      formulas: [
        { latex: '2C_2H_5OH \\xrightarrow{\\text{Al}_2O_3,\\text{ ZnO, }400^\\circ C} \\text{CH}_2=\\text{CH-CH}=\\text{CH}_2 + H_2 + 2H_2O', name: 'Lebedev usulida divinil sintezi', symbols: 'Etanol xomashyosidan sintetik kauchuk monomerni olish' },
        { latex: 'n(\\text{C}_5H_8) \\longrightarrow (-\\text{CH}_2-\\text{C}(\\text{CH}_3)=\\text{CH}-\\text{CH}_2-)_n', name: 'Tabiiy izopren kauchuki polimerlanishi', symbols: 'Kon’yugirlangan dienlarda 1,4-birikish mexanizmi' },
      ],
      constants: [
        { name: 'Tabiiy kauchuk (geveya suti) monomeri', symbol: 'Izopren', value: 'C₅H₈ (68.1)', unit: 'g/mol' },
        { name: 'Rezina vulkanizatori', symbol: 'S (oltingugurt)', value: '2 – 5% (ebonit >30%)', unit: '' },
      ],
      applications: [
        'Avtomobil va samolyot shinalari, shlanglar, izolyatsion poyabzal hamda amortizatorlar vulkanizatsiyalangan kauchuk (rezina) dan yasaladi.',
        'Ebonit (yuqori % li oltingugurtli rezina) elektrotexnikada mustahkam izolyator sifatida ishlatiladi.',
      ],
      calculator: {
        title: 'Kauchuk Vulkanizatsiyasi va Butadiyen-1,3 Stexiometriyasi',
        formulaDisplay: '2 mol etanol (92 g) → 1 mol butadiyen (54 g)',
        inputs: [
          { key: 'mEt', label: 'Etanol C₂H₅OH (M=46) massasi', symbol: 'm', unit: 'kg', min: 46, max: 460, step: 23, default: 92 },
          { key: 'eff', label: 'Lebedev jarayoni unumi', symbol: 'η', unit: '%', min: 40, max: 100, step: 5, default: 75 },
        ],
        compute: (v) => {
          const mDiv = ((v.mEt / 92) * 54 * v.eff) / 100;
          return { value: `${mDiv.toFixed(1)} kg`, unit: 'divinil/kauchuk', summary: `${v.mEt} kg etanoldan ${v.eff}% unum bilan ${mDiv.toFixed(1)} kg butadiyen-1,3 kauchuk olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Kon’yugirlangan π-Bog‘lar va Izopren Zanjiri Modeli',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h4',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'sp² gibridlangan qo‘shbog‘ zvenolarining fazoviy tuzilishini 3D da tekshiring.',
      alternateSims: [
        { label: 'Kinetik polimerlanish tezligi', source: 'PhET · VLab', url: 'sims/chem3d/vlab.html?lab=kinetics' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Dien sp² Tutashgan Bog‘lar Geometriyasi',
        description: 'Qo‘shbog‘ burchagi (120°) va cis/trans halqalanish geometriyalarini kuzating.',
        controls: [
          { key: 'sig', label: 'σ-bog‘lar soni', unit: '', min: 3, max: 4, step: 1, value: 3 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Tabiiy kauchukning monomeri qaysi modda hisoblanadi?', options: ['Etilen', 'Izopren (2-metilbutadiyen-1,3, $C_5H_8$)', 'Atsetilen', 'Stirol'], answer: 1, explain: 'Tabiiy kauchuk tropik geveya daraxti shirasi (lateks) dan olinadigan poliizoprendir.' },
      { q: 'Yumshoq kauchukni oltingugurt bilan qizdirib elastik va chidamli rezinaga aylantirish jarayoni nima deyiladi?', options: ['Kreking', 'Vulkanizatsiya', 'Gidratatsiya', 'Polikondensatlanish'], answer: 1, explain: 'Oltingugurt kauchuk qo‘shbog‘lari orqali ko‘ndalang disulfid ko‘priklar hosil qiladi.' },
      { q: 'S.V. Lebedev usuli bilan etil spirtdan ($C_2H_5OH$) sintetik kauchuk uchun qaysi monomer olinadi?', options: ['Butadiyen-1,3 (divinil)', 'Propen', 'Benzol', 'Metan'], answer: 0, explain: '2C₂H₅OH → CH₂=CH−CH=CH₂ + H₂ + 2H₂O.' },
      { q: 'Kauchukka juda ko‘p miqdorda (30–40%) oltingugurt qo‘shib vulkanizatsiyalansa qanday qattiq izolyator modda olinadi?', options: ['Polietilen', 'Ebonit', 'Kapron', 'Sellofan'], answer: 1, explain: 'Ebonit ("qattiq rezina") elastikligini yo‘qotgan zich tikilgan polimerdir.' },
      { q: '1 mol butadiyen-1,3 ga maksimal necha mol brom ($Br_2$) birika oladi?', options: ['1 mol', '2 mol (ikkita qo‘shbog‘ bo‘lgani uchun)', '3 mol', '0.5 mol'], answer: 1, explain: 'Ikkita π-bog‘ to‘liq to‘yinishi uchun 2 mol Br₂ kerak.' },
      { q: 'Tabiiy kauchukning yuqori elastikligi uning makromolekulalaridagi qanday fazoviy tuzilish bilan izohlanadi?', options: ['Trans-tuzilish', 'Asosan cis-konfiguratsiya (1,4-cis-poliizopren)', 'Tarmoqlangan halqa', 'Ion kristall'], answer: 1, explain: 'Cis-zanjirlar spiral kabi buralib cho‘zilganda qayta tiklanuvchi elastiklik beradi.' },
      { q: 'Butadiyen-1,3 ning formulasi va sinflararo izomeri nima?', options: ['$C_4H_6$, butinlar (masalan, butin-1) bilan izomer', 'C₄H₈, buten', 'C₄H₁₀, butan', 'C₅H₈'], answer: 0, explain: 'Alkadiyenlar ham C_nH_{2n-2} formula bilan alkinlarga sinflararo izomer.' },
      { q: 'Xloropren kauchukning o‘ziga xos afzalligi nimada?', options: ['Yog‘, benzin va yonishga chidamliligi', 'Suvda erishi', 'Qattiq shisha bo‘lishi', 'Hidsizligi'], answer: 0, explain: 'Xlor atomlari mavjudligi xloropren rezinani erituvchilar va olovga bardoshli qiladi.' },
    ],
    problems: [
      { variants: [[92], [184], [46], [276]], build(i) { const [m] = this.variants[i]; const div = (m / 92) * 54; return { q: `Lebedev reaksiyasi (2C₂H₅OH → C₄H₆ + H₂ + 2H₂O) da ${m} kg etanoldan 100% unum bilan necha kg butadiyen-1,3 (M=54) olinadi?`, correct: div, unit: 'kg', explain: `(${m}/92)·54 = ${div} kg.` }; } },
      { variants: [[54, 2], [27, 2], [108, 2]], build(i) { const [m, k] = this.variants[i]; const mBr = (m / 54) * k * 160; return { q: `${m} g butadiyen-1,3 (M=54) bilan to‘liq reaksiyaga kirishib tetrabromid berish uchun necha gramm Br₂ (M=160) sarflanadi?`, correct: mBr, unit: 'g', explain: `n = ${m / 54} mol => 2·n mol Br₂ = ${mBr} g.` }; } },
    ],
  },
  {
    id: 'C4B-5', code: 'K4B.5', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Alkinlar, atsetilen va Kucherov reaksiyasi',
    subtitle: 'Atsetilen, uchbog‘, sp-gibridlanish, Kucherov reaksiyasi, trimerlanish',
    theory: {
      overview:
        'Alkinlar — tarkibida bitta uchbog‘ ($-C\\equiv C-$: 1 ta $\\sigma$ + 2 ta $\\pi$-bog‘) tutgan to‘yinmagan uglevodorodlar; umumiy formulasi $C_n H_{2n-2}$ ($n\\ge 2$). Uchbog‘ uglerod atomlari $sp$ gibridlangan, bog‘ burchagi $180^\\circ$ (chiziqli shakl). Bosh vakili — atsetilen ($C_2H_2$, etin) sanoatda metan pirolizidan ($2CH_4 \\xrightarrow{1500^\\circ C} C_2H_2 + 3H_2$) yoki kalsiy karbid gidrolizidan ($CaC_2 + 2H_2O \\to Ca(OH)_2 + C_2H_2\\uparrow$) olinadi. Uchbog‘da ikkita $\\pi$-bog‘ bo‘lgani uchun alkinlar 2 bosqichda birikish beradi; M.G. Kucherov reaksiyasida simob ($Hg^{2+}$) tuzlari ishtirokida suv birikib atsetilendan sirka aldegidi ($CH_3CHO$) olinadi. Faollashtirilgan ko‘mirda $600^\\circ\\text{C}$ da atsetilen trimerlanib benzol ($C_6H_6$) hosil qiladi (Zelinskiy).',
      keyLaws: [
        { title: 'Kucherov reaksiyasi', text: '$HC\\equiv CH + H_2O \\xrightarrow{Hg^{2+}, H^+} [CH_2=CH-OH] \\to CH_3-CHO$ (boshqa alkinlar esa keton beradi!).' },
        { title: 'Zelinskiy trimerlanishi va Oxirgi uchbog‘ kislotaliligi', text: '$3C_2H_2 \\xrightarrow{C_{\\text{akt}}, 600^\\circ C} C_6H_6$. Terminal alkinlar ($R-C\\equiv C-H$) kumush ammiakat $[Ag(NH_3)_2]OH$ bilan oq cho‘kma — kumush atsetilenid ($AgC\\equiv CAg\\downarrow$) beradi (sifat reaksiyasi!).' },
      ],
      formulas: [
        { latex: '\\text{CaC}_2 + 2H_2O \\to \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2\\uparrow', name: 'Karbiddan atsetilen olish', symbols: 'Laboratoriya va avtogen payvandlashda' },
        { latex: '3\\text{C}_2\\text{H}_2 \\xrightarrow{C_{\\text{akt}}, 600^\\circ C} \\text{C}_6\\text{H}_6', name: 'Atsetilen trimerlanishi (Benzol sintezi)', symbols: 'Zelinskiy-Bertlo reaksiyasi' },
      ],
      constants: [
        { name: 'Atsetilen (C≡C) bog‘ uzunligi', symbol: 'L(C≡C)', value: '0.120', unit: 'nm (sp, 180°)' },
        { name: 'Atsetilen-kislorod alangasi harorati', symbol: 'T_payvand', value: '> 3000', unit: '°C (metall kesish)' },
      ],
      applications: [
        'Atsetilen kislorod bilan yonganda 3000 °C dan yuqori alanga bergani uchun po‘lat metallarni gazli payvandlash va kesishda keng qo‘llaniladi.',
        'Atsetilen asosida sirka kislota, xloropren kauchuk, PVX (vinilxlorid) va ko‘plab organik erituvchilar sintez qilinadi.',
      ],
      calculator: {
        title: 'Kalsiy Karbiddan (CaC₂) Atsetilen va Benzol Unumi',
        formulaDisplay: 'CaC₂ (M=64) → C₂H₂ (22.4 L),   3C₂H₂ → C₆H₆ (78 g)',
        inputs: [
          { key: 'mCarb', label: 'Texnik CaC₂ (M=64) massasi', symbol: 'm(CaC₂)', unit: 'g', min: 16, max: 640, step: 16, default: 128 },
          { key: 'pure', label: 'Soflik darajasi', symbol: '%', unit: '%', min: 50, max: 100, step: 5, default: 80 },
        ],
        compute: (v) => {
          const n = ((v.mCarb * v.pure) / 100) / 64;
          const vC2H2 = n * 22.4;
          const mBenz = (n / 3) * 78;
          return { value: `${vC2H2.toFixed(1)} L C₂H₂`, unit: '', summary: `${n.toFixed(2)} mol atsetilen | Trimerlanganda ${mBenz.toFixed(1)} g benzol olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Atsetilen (C₂H₂, sp, 180°) 3D Tuzilishi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h2',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Atsetilen molekulasining to‘liq chiziqli (180°) shakli va uch karra bog‘lanishini 3D aylantirib ko‘ring.',
      alternateSims: [
        { label: 'Trimerlanish mahsuloti: Benzol (C₆H₆) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c6h6' },
        { label: 'Kucherov mahsuloti: Atsetaldegid 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=ch3cho' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Atsetilen sp Chiziqli Geometrik Modeli (180°)',
        description: 'Uchbog‘li uglerodning sp gibridlanishi chiziqli shakl berishini kuzating.',
        controls: [
          { key: 'sig', label: 'C σ-bog‘lari', unit: '', min: 2, max: 4, step: 1, value: 2 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Atsetilen ($H-C\\equiv C-H$) molekulasidagi uglerod atomlari qanday gibridlangan va bog‘ burchagi qancha?', options: ['$sp^3$, $109.5^\\circ$', '$sp^2$, $120^\\circ$', '$sp$, $180^\\circ$ (chiziqli)', '$sp^3d$'], answer: 2, explain: 'Alkinlarda uchbog‘li uglerodlar sp holatda 180° chiziqli joylashadi.' },
      { q: 'M.G. Kucherov reaksiyasi ($Hg^{2+}$ katalizatorida atsetilenga suv birikishi) dan qaysi modda hosil bo‘ladi?', options: ['Etanol', 'Sirka aldegidi (etanal, $CH_3CHO$)', 'Sirka kislota', 'Metan'], answer: 1, explain: 'C₂H₂ + H₂O → [CH₂=CH−OH] → CH₃−CHO.' },
      { q: 'Zelinskiy reaksiyasi bo‘yicha 3 mol atsetilen faollashtirilgan ko‘mir ustida 600 °C da trimerlanganda nima olinadi?', options: ['Siklogeksan', 'Benzol ($C_6H_6$)', 'Geksan', 'Polietilen'], answer: 1, explain: '3C₂H₂ → C₆H₆.' },
      { q: 'Atsetilenni (yoki butin-1 ni) butin-2 dan farqlash uchun qaysi sifat reaksiyasidan foydalaniladi?', options: ['Kumush oksidining ammiakli eritmasi $[Ag(NH_3)_2]OH$ bilan oq cho‘kma berishi', 'Lakmus bilan', 'Suv bilan', 'NaCl bilan'], answer: 0, explain: 'Faqat uchida H atomi bor (≡C−H) terminal alkinlar H ni Ag⁺ ga almashtirib cho‘kma beradi.' },
      { q: 'Sanoatda tabiiy gaz (metan) dan $1500^\\circ\\text{C}$ da atsetilen olish reaksiyasi tenglamasi qanday?', options: ['$2CH_4 \\to C_2H_2 + 3H_2$', '$CH_4 \\to C + 2H_2$', '$C_2H_6 \\to C_2H_2 + 2H_2$', '$CaC_2 + H_2O$'], answer: 0, explain: 'Metanni qisqa vaqt 1500 °C ga qizdirib tez sovutish (kreking/piroliz) dan atsetilen va vodorod olinadi.' },
      { q: '1 mol atsetilen bromli suv bilan to‘liq reaksiyaga kirishsa, necha mol $Br_2$ biriktirib tetrabrometan ($C_2H_2Br_4$) beradi?', options: ['1 mol', '2 mol', '3 mol', '4 mol'], answer: 1, explain: 'Uchbog‘da 2 ta π-bog‘ borligi uchun 2 mol Br₂ sarflanadi.' },
      { q: 'Atsetilen va HCl birikishidan olinadigan vinilxlorid ($CH_2=CHCl$) polimerlanishidan qaysi plastmassa ishlab chiqariladi?', options: ['Polietilen', 'Polivinilxlorid (PVX)', 'Polistirol', 'Teflon'], answer: 1, explain: 'PVX plastik deraza romlari va quvurlar tayyorlashda asosiy materialdir.' },
      { q: '64 g kalsiy karbid ($CaC_2$, M=64) suvda to‘liq eriganda n.sh. da necha litr atsetilen chiqadi?', options: ['11.2 L', '22.4 L', '44.8 L', '67.2 L'], answer: 1, explain: '1 mol CaC₂ → 1 mol C₂H₂ = 22.4 L.' },
    ],
    problems: [
      { variants: [[64], [128], [32], [192]], build(i) { const [mc] = this.variants[i]; const v = (mc / 64) * 22.4; return { q: `${mc} g sof CaC₂ (M=64) mo‘l suv bilan reaksiyaga kirishganda n.sh. da necha litr C₂H₂ ajraladi?`, correct: Number(v.toFixed(1)), unit: 'L', explain: `n = ${mc / 64} mol => V = ${v.toFixed(1)} L.` }; } },
      { variants: [[67.2], [134.4], [33.6]], build(i) { const [v] = this.variants[i]; const mb = (v / 22.4 / 3) * 78; return { q: `${v} L (n.sh.) atsetilen to‘liq trimerlanganda necha gramm benzol (C₆H₆, M=78) hosil bo‘ladi?`, correct: Number(mb.toFixed(1)), unit: 'g', explain: `n(C₂H₂)=${v / 22.4}; n(C₆H₆)=${v / 22.4 / 3} mol => ${mb.toFixed(1)} g.` }; } },
    ],
  },
  {
    id: 'C4B-6', code: 'K4B.6', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Aromatik uglevodorodlar (Arenlar) va benzol',
    subtitle: 'Benzol tuzilishi, aromatiklik (Xyukkel qoidasi), toluol, stirol, yo‘naltirish qoidalari',
    theory: {
      overview:
        'Arenlar — tarkibida bitta yoki bir nechta benzol halqasi saqlovchi siklik uglevodorodlar; monotsiklik gomologlar umumiy formulasi $C_n H_{2n-6}$ ($n\\ge 6$). Bosh vakili benzol ($C_6H_6$): barcha 6 ta uglerod $sp^2$ gibridlangan bir tekislikdagi muntazam oltiburchak, har birining gibridlanmagan 6 ta $p$-elektronlari halqa bo‘ylab umumiy yagona $\\pi$-elektron buluti (aromatik tizim) ni hosil qiladi ($L(C\\cdots C) = 0.139\\text{ nm}$). Xyukkel qoidasiga ko‘ra $4n+2$ ta ($n=1 \\to 6$) umumlashgan $\\pi$-elektronli yassi siklik tizim aromatiklikka ega. Aromatik tizim barqaror bo‘lgani uchun benzol birikish emas, balki elektrofil o‘rin olish ($S_E$: bromlash, nitrolash) ga moyil. Halqadagi I tur o‘rinbosarlar ($-CH_3, -OH, -NH_2, -Cl$) yangi guruhni orto- va para- holatga, II tur o‘rinbosarlar ($-NO_2, -COOH, -CHO$) esa meta- holatga yo‘naltiradi.',
      keyLaws: [
        { title: 'Xyukkel aromatiklik qoidasi', text: 'Yassi siklik tutash tizimda delokallashgan $\\pi$-elektronlar soni $4n + 2$ (masalan, 2, 6, 10, 14) ga teng bo‘lsa, molekula o‘ta barqaror aromatik xossa ko‘rsatadi.' },
        { title: 'O‘rinbosarlar yo‘naltirish qoidasi', text: 'Toluolda ($C_6H_5CH_3$) metil guruhi ($+I$) halqani faollashtirib o- va p-izomerlar (2,4,6-trinitrotoluol — trotil!) hosil qiladi; $-NO_2$ esa meta-yo‘naltiruvchidir.' },
      ],
      formulas: [
        { latex: 'C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4(\\text{kons})} C_6H_5NO_2 + H_2O', name: 'Benzolning nitrolanishi', symbols: 'Nitrobenzol (achchiq bodom hidli) olinishi' },
        { latex: 'C_6H_5CH_3 + 2[O] \\xrightarrow{\\text{KMnO}_4} C_6H_5COOH + H_2O', name: 'Toluolning oksidlanishi', symbols: 'Benzoy kislota (halqa parchalanmaydi)' },
      ],
      constants: [
        { name: 'Benzoldagi C···C bog‘ uzunligi', symbol: 'L(arom)', value: '0.139', unit: 'nm (barcha 6 bog‘ teng)' },
        { name: 'Benzol (C₆H₆) molyar massasi', symbol: 'M(C₆H₆)', value: '78.11', unit: 'g/mol' },
      ],
      applications: [
        'Stirol ($C_6H_5-CH=CH_2$) polimerlanib penoplast va qadoqlash materiallari (polistirol) tayyorlanadi.',
        'Benzol va toluoldan bo‘yoqlar, dorilar (aspirin, paratsetamol), portlovchi moddalar (TNT) va erituvchilar sintez qilinadi.',
      ],
      calculator: {
        title: 'Xyukkel Qoidasi (4n+2) va Aren Yonish/Nitrolash Kalkulyatori',
        formulaDisplay: 'π_elektron = 4n + 2,   C₆H₆ (78 g) → C₆H₅NO₂ (123 g)',
        inputs: [
          { key: 'n', label: 'Xyukkel butun soni n (benzol=1, naftalin=2)', symbol: 'n', unit: '', min: 0, max: 4, step: 1, default: 1 },
          { key: 'mBenz', label: 'Benzol (M=78) massasi', symbol: 'm', unit: 'g', min: 39, max: 390, step: 39, default: 78 },
        ],
        compute: (v) => {
          const pi = 4 * v.n + 2;
          const mNitro = (v.mBenz / 78) * 123;
          return { value: `${pi} π-elektron`, unit: '', summary: `Xyukkel aromatik qobiq: ${pi} e⁻ | ${v.mBenz} g benzoldan ${mNitro.toFixed(1)} g nitrobenzol olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Benzol (C₆H₆) 6π Aromatik Halqasi 3D Modeli (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c6h6',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Yassi muntazam oltiburchak shaklidagi benzol halqasini 3D aylantirib, simmetrik kon’yugatsiyasini ko‘ring.',
      alternateSims: [
        { label: 'Atsetilen (trimerlanish xomashyosi) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h2' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Aromatik sp² Yassi Halqa Geometrik Simulyatori',
        description: 'Benzoldagi har bir uglerodning sp² (120°) gibridlangan bog‘lanishini kuzating.',
        controls: [
          { key: 'sig', label: 'Uglerod σ-bog‘lari', unit: '', min: 3, max: 4, step: 1, value: 3 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Benzol molekulasida ($C_6H_6$) barcha C–C bog‘lar uzunligi teng ($0.139\\text{ nm}$). Buning sababi nima?', options: ['6 ta uglerod sp³ holatda', '6 ta p-elektronning halqa bo‘ylab yagona umumiy aromatik π-bulut hosil qilishi', 'Ion bog‘i', 'Vodorod bog‘i'], answer: 1, explain: 'Benzolda haqiqiy yakka va qo‘shbog‘ almashmaydi, balki barcha bog‘lar bir yarim karra ekvivalentdir.' },
      { q: 'Xyukkel qoidasiga ko‘ra aromatik xossaga ega bo‘lish uchun halqa tizimida nechta $\\pi$-elektron bo‘lishi kerak?', options: ['4n ta', '$4n + 2$ ta (masalan 6, 10, 14)', '3n ta', '2n + 1 ta'], answer: 1, explain: 'Benzol (n=1) -> 6 ta π-elektron; Naftalin (n=2) -> 10 ta.' },
      { q: 'Benzol oddiy sharoitda bromli suv va $KMnO_4$ eritmasini rangsizlantiradimi?', options: ['Ha', 'Yo‘q (toluoldan va alkenlardan farqli o‘laroq)', 'Faqat qizdirsa', 'Faqat 1 atm da'], answer: 1, explain: 'Aromatik π-tizim juda barqaror; benzol KMnO₄ ta’sirida oksidlanmaydi, brom bilan esa faqat FeBr₃ katalizatorida o‘rin olish beradi.' },
      { q: 'Toluolni ($C_6H_5CH_3$) $H_2SO_4$ ishtirokida konsentrlangan $HNO_3$ bilan nitrolasak qaysi portlovchi modda hosil bo‘ladi?', options: ['Nitrobenzol', '2,4,6-trinitrotoluol (Trotil / TNT)', 'Anilin', 'Benzoy kislota'], answer: 1, explain: 'CH₃ I tur orto- va para-yo‘naltiruvchi bo‘lgani uchun 2,4,6-holatlarga 3 ta −NO₂ kiradi.' },
      { q: 'Quyidagi guruhlardan qaysi biri II tur — meta-yo‘naltiruvchi o‘rinbosar hisoblanadi?', options: ['−CH₃', '−OH', '−NO₂ va −COOH', '−NH₂'], answer: 2, explain: 'Elektron tortuvchi −NO₂, −CHO, −COOH guruhlari halqani passivlab yangi o‘rinbosarni meta-holatga yo‘naltiradi.' },
      { q: 'Stirol ($C_6H_5-CH=CH_2$) benzoldan farqli ravishda bromli suvni rangsizlantira oladimi?', options: ['Ha, yon zanjiridagi qo‘shbog‘ hisobiga', 'Yo‘q', 'Faqat yorug‘likda', 'Faqat yuqori bosimda'], answer: 0, explain: 'Vinil guruhidagi C=C qo‘shbog‘ Br₂ va KMnO₄ bilan oson reaksiyaga kirishadi.' },
      { q: 'Benzolga yorug‘lik ($h\\nu$) ta’sirida ortiqcha xlor qo‘shilganda qaysi zaharli modda (geksaxloran) hosil bo‘ladi?', options: ['$C_6H_5Cl$', '$C_6H_6Cl_6$ (birikish reaksiyasi)', '$C_6Cl_6$', '$CHCl_3$'], answer: 1, explain: 'UB nur ostida benzol 3 mol Cl₂ biriktirib geksaxlorsiklogeksan beradi.' },
      { q: '78 g benzol ($M=78$) to‘liq gidrogenlanib siklogeksanga aylanishi uchun n.sh. da necha litr vodorod ($H_2$) sarflanadi?', options: ['22.4 L', '44.8 L', '67.2 L (3 mol)', '89.6 L'], answer: 2, explain: 'C₆H₆ + 3H₂ → C₆H₁₂ => 3 · 22.4 = 67.2 L.' },
    ],
    problems: [
      { variants: [[78], [156], [39], [234]], build(i) { const [m] = this.variants[i]; const mn = (m / 78) * 123; return { q: `${m} g benzol (M=78) to‘liq nitrolanganda necha gramm nitrobenzol (C₆H₅NO₂, M=123) hosil bo‘ladi?`, correct: Number(mn.toFixed(1)), unit: 'g', explain: `n = ${m / 78} mol => m = ${mn.toFixed(1)} g.` }; } },
      { variants: [[78], [39], [156]], build(i) { const [m] = this.variants[i]; const vH = (m / 78) * 3 * 22.4; return { q: `${m} g benzolni to‘liq gidrogenlab siklogeksanga aylantirish uchun necha litr (n.sh.) H₂ kerak?`, correct: Number(vH.toFixed(1)), unit: 'L', explain: `C₆H₆ + 3H₂ → C₆H₁₂ => ${(m / 78) * 3} mol H₂ = ${vH.toFixed(1)} L.` }; } },
    ],
  },
  {
    id: 'C4B-7', code: 'K4B.7', sectionId: 'csec-4', subsectionId: 'C4B',
    subsectionTitle: 'B. Uglevodorodlar',
    title: 'Tabiiy uglevodorod manbalari: Neft, gaz va ko‘mir',
    subtitle: 'Neft (haydash va kreking), tabiiy gaz, toshko‘mirni kokslash',
    theory: {
      overview:
        'Organik kimyo sanoatining uch asosiy tabiiy xomashyo bazasi: tabiiy va yo‘ldosh gazlar, neft hamda toshko‘mir. Tabiiy gazning 85–98% ini metan ($CH_4$) tashkil qiladi (yo‘ldosh neft gazida esa propan-butan fraksiyasi ko‘p). Neft — yuzlab suyuq uglevodorodlar (alkanlar, sikloalkanlar, arenlar) ning murakkab qora moyli aralashmasi. Neftni birlamchi qayta ishlash — rektifikatsiya kolonnasida qaynash harorati bo‘yicha haydash: benzin ($40–200^\\circ C$), ligroin ($150–250^\\circ C$), kerosin ($180–300^\\circ C$), dizel/gazoil va qoldiq mazut. Ikkilamchi qayta ishlash: termik va katalitik kreking (benzin chiqishini ~20% dan ~70% gacha oshiradi) hamda riforming (aromatizatsiya — oktan sonini ko‘taradi). Toshko‘mirni $1000^\\circ C$ da havosiz qizdirib kokslash orqali koks (metallurgiyaga), koks gazi va aromatik birikmalarga boy smola olinadi.',
      keyLaws: [
        { title: 'Oktan soni va antidetonatsiya', text: 'Benzinning siqilishda taqillamasdan (detonatsiyasiz) yonish chidamliligi: izooktan ($2,2,4$-trimetilpentan) = 100, n-geptan = 0 deb qabul qilingan.' },
        { title: 'Kreking vs Riforming', text: 'Kreking og‘ir alkanlarni kichik alkan+alkenga parchalab benzin miqdorini oshiradi; Riforming chiziqli alkanlarni siklik/aromatik moddalarga aylantirib benzin sifatini (oktan sonini) ko‘taradi.' },
      ],
      formulas: [
        { latex: 'C_{16}H_{34} \\xrightarrow{\\text{kreking } 500^\\circ C} C_8H_{18} + C_8H_{16}', name: 'Neft krekingi namunasi', symbols: 'Mazutdan benzin (C₈) olish' },
        { latex: 'C_6H_{14} \\xrightarrow{\\text{Pt, riforming}} C_6H_6 + 4H_2', name: 'Degidrotsiklizatsiya (Riforming)', symbols: 'Oktan sonini oshirish' },
      ],
      constants: [
        { name: 'AI-95 benzin oktan shkalasi etaloni', symbol: 'Izooktan', value: '100', unit: '(n-geptan = 0)' },
        { name: 'Toshko‘mirni kokslash harorati', symbol: 'T_koks', value: '950 – 1100', unit: '°C (havosiz)' },
      ],
      applications: [
        'O‘zbekistondagi Farg‘ona, Buxoro (Qorovulbozor) va Sho‘rtan GTL majmualari tabiiy gaz va neftdan yuqori sifatli Yevro-5 dizel, aviakerosin va polietilen ishlab chiqaradi.',
        'Mazutni vakuum ostida haydashdan surkov moylari, vazelin, parafin va yo‘l asfalt-bitumlari olinadi.',
      ],
      calculator: {
        title: 'Benzin Aralashmasi Oktan Soni (Izooktan + Geptan) Kalkulyatori',
        formulaDisplay: 'ON = %_izooktan · 100 + %_aralashma',
        inputs: [
          { key: 'iso', label: 'Izooktan (ON=100) ulushi', symbol: 'w_izo', unit: '%', min: 50, max: 100, step: 1, default: 92 },
          { key: 'ton', label: 'Qayta ishlanadigan neft tonnasi', symbol: 'm_neft', unit: 't', min: 10, max: 1000, step: 10, default: 100 },
        ],
        compute: (v) => {
          const directGas = v.ton * 0.2;
          const crackedGas = v.ton * 0.68;
          return { value: `AI-${v.iso}`, unit: '', summary: `${v.ton} t neftdan to‘g‘ri haydashda ~${directGas.toFixed(0)} t, kreking bilan esa ~${crackedGas.toFixed(0)} t AI-${v.iso} benzin olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Neft Fraksion Distillyatsiyasi (Haydash) Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=separation',
      openSourceSource: 'Amrita OLabs · PhET',
      openSourceNote: 'Qaynash harorati o‘zgarganda yengil va og‘ir uglevodorod fraksiyalarining ajralishini tekshiring.',
      alternateSims: [
        { label: 'Riforming mahsuloti Benzol 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c6h6' },
      ],
      parametric: {
        mode: 'chem_separation',
        title: 'Rektifikatsiya Kolonnasida Fraksiyalar Ajralishi',
        description: 'Kolonna haroratini o‘zgartirib, gazlar (<40°C), benzin (40–200°C) va dizel/mazut ajralishini kuzating.',
        controls: [
          { key: 'temp', label: 'Fraksiya harorati', unit: '°C', min: 25, max: 115, step: 1, value: 85 },
          { key: 'mixPct', label: 'Yengil fraksiya %', unit: '%', min: 15, max: 85, step: 5, value: 50 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Neftni birlamchi qayta ishlashda (rektifikatsiyada) qaynash haroratlari o‘sib borishi bo‘yicha fraksiyalar tartibi qaysi?', options: ['Mazut → Kerosin → Benzin', 'Uglevodorod gazlari → Benzin → Ligroin → Kerosin → Dizel → Mazut', 'Kerosin → Dizel → Benzin', 'Faqat benzin va mazut'], answer: 1, explain: 'Eng yengil molekulalar kolonna tepasidan (past T), og‘irlari pastdan chiqadi.' },
      { q: 'Benzinning detonatsiyaga (taqillamasdan yonishga) chidamlilik ko‘rsatkichi nima deb ataladi?', options: ['Suyuqlanish soni', 'Oktan soni (etaloni: izooktan = 100, n-geptan = 0)', 'Setan soni (dizel)', 'Massa soni'], answer: 1, explain: 'AI-92, AI-95 markalari benzinning tadqiqot usulidagi oktan sonini bildiradi.' },
      { q: 'Neftdan olinadigan benzin unumini keskin oshirish uchun og‘ir uglevodorodlarni ($C_{16}H_{34}$) parchalash jarayoni nima?', options: ['Kokslash', 'Kreking (termik va katalitik)', 'Rektifikatsiya', 'Polimerlanish'], answer: 1, explain: 'Kreking uzun zanjirlarni o‘rtacha benzin fraksiyasi molekulalariga parchalaydi.' },
      { q: 'Toshko‘mirni 1000 °C da havosiz qizdirib kokslashda qaysi mahsulotlar olinadi?', options: ['Faqat benzin', 'Koks (sof uglerod), toshko‘mir smolasi (benzol/fenolga boy), koks gazi', 'Suv va ohaktosh', 'Etanol'], answer: 1, explain: 'Koks domna pechlarida temir eritish uchun ishlatiladi, smoladan esa arenlar ajratiladi.' },
      { q: 'Neftni haydash natijasida qoladigan qora qovushqoq qoldiq nima va undan nima olinadi?', options: ['Kerosin', 'Mazut (vakuumda haydab surkov moylari, parafin va gudron/asfalt olinadi)', 'Metan', 'Toluol'], answer: 1, explain: 'Mazut atmosfera bosimida qizdirilsa parchalanadi, shuning uchun vakuumda haydaladi.' },
      { q: 'Tabiiy gaz tarkibining asosiy (85–98%) qismini qaysi gaz tashkil qiladi?', options: ['Etan', 'Metan ($CH_4$)', 'Propan', 'Is gazi'], answer: 1, explain: 'Tabiiy gaz asosan metandan, yo‘ldosh neft gazi esa metandan tashqari ko‘proq etan, propan, butandan iborat.' },
      { q: 'Riforming (aromatizatsiya) jarayonining asosiy maqsadi nima?', options: ['To‘g‘ri zanjirli alkanlarni benzol va izomerlarga aylantirib benzin oktan sonini oshirish', 'Kauchuk olish', 'Neftni muzlatish', 'Suv ajratish'], answer: 0, explain: 'Tarmoqlangan va aromatik uglevodorodlarning oktan soni juda yuqori (>100).' },
      { q: 'GTL (Gas-to-Liquids) zavodlarida tabiiy gazdan ($CH_4$) qaysi oraliq aralashma orqali sintetik suyuq yoqilg‘i olinadi?', options: ['Sintez-gaz ($CO + H_2$) orqali', 'Xlor bilan', 'Ammiak orqali', 'Gips orqali'], answer: 0, explain: 'Metan konversiyasidan CO + H₂ olinib, Fisher-Tropsh usulida toza dizel va kerosin sintezlanadi.' },
    ],
    problems: [
      { variants: [[200, 65], [100, 70], [500, 60]], build(i) { const [m, pct] = this.variants[i]; const b = (m * pct) / 100; return { q: `${m} tonna neftni katalitik kreking bilan qayta ishlashda ${pct}% benzin olindi. Necha tonna benzin olingan?`, correct: b, unit: 't', explain: `${m} · ${pct / 100} = ${b} tonna.` }; } },
      { variants: [[92], [95], [80]], build(i) { const [on] = this.variants[i]; return { q: `Benzinning detonatsiyaga chidamliligi ${on}% izooktan va ${100 - on}% n-geptan aralashmasiga teng. Ushbu benzinning oktan soni nechaga teng?`, correct: on, unit: 'AI', explain: `Oktan soni = izooktan hajmiy foizi = ${on}.` }; } },
    ],
  },
];
