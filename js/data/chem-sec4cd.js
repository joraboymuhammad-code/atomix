// Kimyo 4-bo'lim (C va D): Kislorodli (5) va Azotli/Yuqori Molekulyar Birikmalar (5) = 10 mavzu

export const CHEM_SEC4CD_TOPICS = [
  {
    id: 'C4C-1', code: 'K4C.1', sectionId: 'csec-4', subsectionId: 'C4C',
    subsectionTitle: 'C. Kislorodli Organik Birikmalar',
    title: 'Spirtlar va Fenollar',
    subtitle: 'Bir atomli va ko‘p atomli spirtlar (metanol, etanol, etilenglikol, glitserin), fenolning xossalari',
    theory: {
      overview:
        'Spirtlar — uglevodorod radikali va bir yoki bir nechta gidroksil ($-OH$) guruhidan tashkil topgan moddalar (umumiy formulasi $C_n H_{2n+1} OH$). Bir atomli spirtlar: metanol ($CH_3OH$, o‘ta zaharli yog‘och spirti) va etanol ($C_2H_5OH$); ikki atomli spirt etilenglikol ($HO-CH_2-CH_2-OH$, antifriz) va uch atomli shirin qovushqoq suyuqlik glitserin ($C_3H_5(OH)_3$). Molekulalararo vodorod bog‘i sabab spirtlar orasida gaz yo‘q (qaynash harorati yuqori). Kuchsiz kislotalik xossasi tufayli faol metallar ($Na$) bilan alkogolyat va $H_2$ beradi; degidratlanganda esa alken yoki oddiy efir hosil qiladi. Fenol ($C_6H_5OH$, karbol kislota) da $-OH$ bevosita benzol halqasiga bog‘langani uchun spirtlardan kuchliroq kislota xossasiga ega (ishqor $NaOH$ bilan fenolyat beradi, bromli suv bilan oq cho‘kma 2,4,6-tribromfenol tushadi va $FeCl_3$ bilan binafsha rang hosil qiladi).',
      keyLaws: [
        { title: 'Ko‘p atomli spirtlarga sifat reaksiyasi', text: 'Etilenglikol va glitserin yangi cho‘ktirilgan havorang $Cu(OH)_2$ cho‘kmasini eritib, to‘q ko‘k (ko‘k-binafsha) rangli kompleks mis glitserat eritmasini hosil qiladi.' },
        { title: 'Fenolning kislotaliligi va sifat reaksiyalari', text: 'Benzol halqasi kislorod elektron juftini tortib O−H bog‘ini bo‘shashtiradi: $C_6H_5OH + NaOH \\to C_6H_5ONa + H_2O$ (oddiy spirtlar NaOH bilan ta’sirlashmaydi!). $FeCl_3$ bilan binafsha rang, $Br_2$ suvli bilan oq cho‘kma beradi.' },
      ],
      formulas: [
        { latex: 'C_6H_{12}O_6 \\xrightarrow{\\text{achitqi}} 2C_2H_5OH + 2CO_2\\uparrow', name: 'Glyukoza bijg‘ishidan etanol olish', symbols: 'Biokimyoviy spirt olish' },
        { latex: '2C_2H_5OH + 2Na \\to 2C_2H_5ONa + H_2\\uparrow', name: 'Spirtning metall natriy bilan reaksiyasi', symbols: 'Natriy etilat va vodorod ajralishi' },
      ],
      constants: [
        { name: 'Etanol qaynash harorati (M=46)', symbol: 'T_q(C₂H₅OH)', value: '78.4', unit: '°C' },
        { name: 'Glitserin C₃H₅(OH)₃ M_r', symbol: 'M(Glitserin)', value: '92.1', unit: 'g/mol' },
      ],
      applications: [
        'Etilenglikol suvli eritmalari muzlash haroratini $-40^\\circ C$ gacha pasaytirgani uchun avtomobil antifrizlarida qo‘llaniladi.',
        'Glitserin kosmetika, farmatsevtika (namlovchi) va nitrolash orqali nitroglitserin (dori va portlovchi modda) olishda ishlatiladi.',
      ],
      calculator: {
        title: 'Spirt va Fenol Na bilan Vodorod Ajralishi Kalkulyatori',
        formulaDisplay: '2R−OH + 2Na → 2R−ONa + H₂↑ (har 2 mol −OH guruh → 1 mol H₂)',
        inputs: [
          { key: 'mEt', label: 'Etanol (M=46) massasi', symbol: 'm', unit: 'g', min: 23, max: 230, step: 23, default: 92 },
          { key: 'ohCount', label: '−OH guruhlar soni (etanol=1, glitserin=3)', symbol: 'k_OH', unit: 'ta', min: 1, max: 3, step: 1, default: 1 },
        ],
        compute: (v) => {
          const M = v.ohCount === 1 ? 46 : v.ohCount === 2 ? 62 : 92;
          const nMol = v.mEt / M;
          const nH2 = (nMol * v.ohCount) / 2;
          return { value: `${(nH2 * 22.4).toFixed(1)} L H₂`, unit: '', summary: `Modda moli: ${nMol.toFixed(2)} mol (M=${M}) | Natriy bilan reaksiyada ${nH2.toFixed(2)} mol H₂ chiqadi.` };
        },
      },
    },
    simulation: {
      title: 'Etanol (C₂H₅OH) 3D Tuzilishi va Vodorod Bog‘lari (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h5oh',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Etanol molekulasidagi −OH funksional guruhini 3D aylantirib, suv bilan vodorod bog‘i hosil qilishini tekshiring.',
      alternateSims: [
        { label: 'Etanol-Suv fraksion distillyatsiyasi (VLab)', source: 'OLabs', url: 'sims/chem3d/vlab.html?lab=separation' },
      ],
      parametric: {
        mode: 'chem_separation',
        title: 'Etanol Qaynashi va Spirt-Suv Ajratish Stendi',
        description: '78.4 °C da etanolning bug‘lanib distillyatga o‘tishini kuzating.',
        controls: [
          { key: 'temp', label: 'Harorat', unit: '°C', min: 25, max: 110, step: 1, value: 80 },
          { key: 'mixPct', label: 'Etanol ulushi', unit: '%', min: 10, max: 95, step: 5, value: 50 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi modda ishqor ($NaOH$) eritmasi bilan reaksiyaga kirishib tuz hosil qiladi, oddiy spirtlar esa kirishmaydi?', options: ['Metanol', 'Etanol', 'Fenol ($C_6H_5OH$)', 'Glitserin'], answer: 2, explain: 'Fenolda benzol halqasi −OH bog‘ini qutblab kislotalilikni oshiradi (karbol kislota).' },
      { q: 'Glitserin va etilenglikol (ko‘p atomli spirtlar) ni bir atomli spirtlardan ajratuvchi sifat reaktivi qaysi?', options: ['Yangi cho‘ktirilgan $Cu(OH)_2$ (to‘q ko‘k eritma beradi)', 'NaCl', 'Lakmus', 'Brom'], answer: 0, explain: 'Ko‘p atomli spirtlar havorang Cu(OH)₂ ni eritib yorqin ko‘k xelat kompleks beradi.' },
      { q: 'Fenol ($C_6H_5OH$) ni eritmada aniqlash uchun qaysi ikki sifat reaksiyasi qo‘llaniladi?', options: ['$FeCl_3$ (binafsha rang) va bromli suv (oq cho‘kma 2,4,6-tribromfenol)', 'AgNO₃ va NaCl', 'Cu(OH)₂ va qizdirish', 'Kraxmal'], answer: 0, explain: 'Ikkalasi ham fenol uchun o‘ta sezgir klassik sifat testidir.' },
      { q: 'Etanolning $170^\\circ\\text{C}$ dan yuqorida $H_2SO_4(\\text{kons})$ bilan ichki molekulyar degidratatsiyasidan nima olinadi?', options: ['Dietil efir', 'Etilen ($C_2H_4$) + suv', 'Sirka kislota', 'Metan'], answer: 1, explain: '>140–170 °C da bitta spirt molekulasidan suv chiqib alken (etilen) hosil bo‘ladi.' },
      { q: 'Hatto kichik dozasi ham ko‘rish nervini shikastlab ko‘r qiladigan va o‘limga olib keladigan zaharli spirt qaysi?', options: ['Etanol', 'Metanol ($CH_3OH$)', 'Glitserin', 'Sorbit'], answer: 1, explain: 'Metanol organizmda zaharli chumoli aldegid va kislotaga oksidlanadi.' },
      { q: '1 mol glitserin ($C_3H_5(OH)_3$) mo‘l metall natriy ($Na$) bilan reaksiyaga kirishsa, necha mol $H_2$ ajraladi?', options: ['0.5 mol', '1 mol', '1.5 mol (33.6 L)', '3 mol'], answer: 2, explain: '3 ta −OH guruhi 3 mol Na bilan almashinib 1.5 mol H₂ beradi.' },
      { q: 'Bir atomli to‘yingan spirtlarning umumiy formulasi qaysi?', options: ['$C_n H_{2n+2} O$ ($C_n H_{2n+1} OH$)', '$C_n H_{2n} O$', '$C_n H_{2n} O_2$', '$C_n H_{2n-6} O$'], answer: 0, explain: 'Masalan metanol CH₄O, etanol C₂H₆O.' },
      { q: 'Spirtlarning o‘xshash massali alkanlardan (etan −88°C vs etanol +78°C) ancha yuqori qaynash sababi nima?', options: ['Molekulalararo vodorod bog‘lanish', 'Ion panjara', 'Katta zichlik', 'Qutbsizlik'], answer: 0, explain: 'O−H guruhlari orasidagi vodorod bog‘larni uzish uchun qo‘shimcha issiqlik kerak.' },
    ],
    problems: [
      { variants: [[92], [46], [23], [138]], build(i) { const [m] = this.variants[i]; const v = (m / 46 / 2) * 22.4; return { q: `${m} g etanol (M=46) mo‘l natriy bilan ta’sirlashganda n.sh. da necha litr H₂ ajraladi?`, correct: Number(v.toFixed(1)), unit: 'L', explain: `n(C₂H₅OH)=${m / 46}; n(H₂)=${m / 92} mol => ${v.toFixed(1)} L.` }; } },
      { variants: [[94], [188], [47]], build(i) { const [m] = this.variants[i]; const mNa = (m / 94) * 116; return { q: `${m} g fenol (M=94) NaOH eritmasi bilan to‘liq reaksiyaga kirishganda necha gramm natriy fenolyat (C₆H₅ONa, M=116) hosil bo‘ladi?`, correct: Number(mNa.toFixed(1)), unit: 'g', explain: `n = ${m / 94} mol => m = ${mNa.toFixed(1)} g.` }; } },
    ],
  },
  {
    id: 'C4C-2', code: 'K4C.2', sectionId: 'csec-4', subsectionId: 'C4C',
    subsectionTitle: 'C. Kislorodli Organik Birikmalar',
    title: 'Aldegidlar va Ketonlar (Karbonil birikmalar)',
    subtitle: 'Karbonil guruhi, formaldegid, atsetaldegid, atseton, “kumush ko‘zgu” reaksiyasi',
    theory: {
      overview:
        'Aldegidlar ($R-CHO$) va ketonlar ($R-CO-R\'$) tarkibida karbonil guruhi ($>C=O$, $sp^2$ gibrid, $120^\\circ$) saqlaydi. Eng sodda vakillari: chumoli aldegidi — formaldegid ($HCHO$, o‘tkir hidli gaz; 40% li suvli eritmasi formalin), sirka aldegidi — atsetaldegid ($CH_3CHO$) hamda eng muhim keton — atseton ($CH_3-CO-CH_3$, sanoat erituvchisi). Aldegidlar birlamchi spirtlarni oksidlash yoki atsetilen gidratatsiyasidan (Kucherov) olinadi. Aldegidlar oson oksidlanib karbon kislota beradi va "kumush ko‘zgu" ($Ag_2O$ ammiakli eritmasini metall kumushga qaytaradi) hamda qizil cho‘kma ($Cu(OH)_2 \\to Cu_2O\\downarrow$) sifat reaksiyalarini beradi; ketonlar esa bu reaksiyalarni bermaydi.',
      keyLaws: [
        { title: 'Aldegidlarga 2 sifat reaksiyasi', text: '1) Kumush ko‘zgu: $R-CHO + 2[Ag(NH_3)_2]OH \\to R-COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O$;  2) Yangi $Cu(OH)_2$ bilan qizdirganda qizil-g‘isht rangli $Cu_2O\\downarrow$ cho‘kmasi tushadi.' },
        { title: 'Aldegid vs Keton qaytarilishi', text: 'Gidrogenlashda aldegidlardan birlamchi spirt, ketonlardan (atseton → propanol-2) ikkilamchi spirt hosil bo‘ladi.' },
      ],
      formulas: [
        { latex: 'C_n H_{2n} O \\quad (\\text{aldegidlar: } n\\ge 1,\\; \\text{ketonlar: } n\\ge 3)', name: 'To‘yingan karbonil birikmalar formulasi', symbols: 'Aldegid va ketonlar sinflararo izomer' },
        { latex: '\\text{CH}_3\\text{CHO} + \\text{Ag}_2\\text{O} \\xrightarrow{\\text{NH}_3\\cdot H_2O} \\text{CH}_3\\text{COOH} + 2\\text{Ag}\\downarrow', name: 'Kumush ko‘zgu reaksiyasi', symbols: '1 mol aldegid → 2 mol Ag (216 g)' },
      ],
      constants: [
        { name: 'Formalin tarkibidagi HCHO', symbol: 'w(HCHO)', value: '37 – 40%', unit: '(suvli eritma)' },
        { name: 'Atseton (CH₃COCH₃) qaynash harorati', symbol: 'T_q(atseton)', value: '56.1', unit: '°C' },
      ],
      applications: [
        'Formaldegid fenolformaldegid smolalari (plastmassa), DSP yog‘och plitalari va biologik namunalarni formalin bilan saqlashda qo‘llaniladi.',
        'Atseton bo‘yoq, lak, tirnoq laki tozalagich va organik sintezlarda universal erituvchi sifatida keng ishlatiladi.',
      ],
      calculator: {
        title: 'Kumush Ko‘zgu (Ag) Massasi va Spirtga Qaytarish Kalkulyatori',
        formulaDisplay: '1 mol R-CHO → 2 mol Ag (216 g) [HCHO → 4 mol Ag!]',
        inputs: [
          { key: 'mAld', label: 'Atsetaldegid CH₃CHO (M=44) massasi', symbol: 'm', unit: 'g', min: 11, max: 220, step: 11, default: 44 },
        ],
        compute: (v) => {
          const n = v.mAld / 44;
          const mAg = n * 2 * 108;
          return { value: `${mAg.toFixed(1)} g Ag`, unit: '', summary: `${n.toFixed(2)} mol atsetaldegiddan ${(2 * n).toFixed(2)} mol kumush (${mAg.toFixed(1)} g) hamda ${(n * 60).toFixed(1)} g sirka kislota hosil bo‘ladi.` };
        },
      },
    },
    simulation: {
      title: 'Atsetaldegid (CH₃CHO) 3D Molekulasi va Karbonil Bog‘i (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=ch3cho',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Aldegid C=O karbonil guruhining sp² tekisligini 3D aylantirib kuzating.',
      alternateSims: [
        { label: 'Spirtga oksidlanish/qaytarilish (Etanol 3D)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h5oh' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Karbonil Uglerodi (C=O, sp², 120°) Fazoviy Stendi',
        description: 'Karbonil uglerodining 3 ta σ-bog‘ atrofida tekis trigonal joylashishini kuzating.',
        controls: [
          { key: 'sig', label: 'Karbonil σ-bog‘lari', unit: '', min: 3, max: 3, step: 1, value: 3 },
          { key: 'lp', label: 'Erkin juftlar', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi reaksiyalar faqat aldegidlarni (masalan atsetaldegidni) ketonlardan (atsetondan) ajratishda ishlatiladi?', options: ['Kumush ko‘zgu ($[Ag(NH_3)_2]OH$) va qizil $Cu_2O$ cho‘kma berishi', 'Na bilan reaksiya', 'Yonish', 'Suvda erishi'], answer: 0, explain: 'Aldegidlar oson oksidlanadi, ketonlar esa yumshoq oksidlovchilar bilan kumush ko‘zgu bermaydi.' },
      { q: 'Formaldegid ($HCHO$) ning 37–40% li suvli eritmasi nima deb ataladi?', options: ['Aroq', 'Formalin', 'Oleum', 'Glitserin'], answer: 1, explain: 'Formalin tibbiyotda va biologiyada konservant va dezinfeksiyalovchi sifatida ishlatiladi.' },
      { q: 'Atseton ($CH_3-CO-CH_3$) katalizator ishtirokida vodorod bilan qaytarilganda qaysi spirt olinadi?', options: ['Propanol-1', 'Propanol-2 (ikkilamchi spirt)', 'Etanol', 'Butanol-1'], answer: 1, explain: 'Ketonlar gidrogenlanganda C=O guruhi −CH(OH)− ikkilamchi spirtga aylanadi.' },
      { q: 'Ikkilamchi spirtni (masalan, propanol-2 ni) qizdirilgan $CuO$ bilan oksidlasak nima hosil bo‘ladi?', options: ['Aldegid', 'Keton (atseton)', 'Alkan', 'Ester'], answer: 1, explain: 'Birlamchi spirt → aldegid; ikkilamchi spirt → keton.' },
      { q: 'Eng sodda formaldegid molekulasi ($HCHO$) boshqa aldegidlardan farqli ravishda 1 mol $HCHO$ nechta mol $Ag$ qaytaradi?', options: ['1 mol', '2 mol', '4 mol (CH₂O → CO₂ gacha to‘liq oksidlanadi)', '0 mol'], answer: 2, explain: 'HCHO da ikkala tomonida ham oksidlanuvchi C−H bog‘i borligi uchun oxirida CO₂ gacha o‘tib 4 mol Ag chiqarishi mumkin.' },
      { q: 'Propanal ($CH_3CH_2CHO$) va propanon (atseton, $CH_3COCH_3$) o‘zaro nima?', options: ['Gomologlar', 'Sinflararo izomerlar (ikkalasi ham $C_3H_6O$)', 'Polimerlar', 'Allotroplar'], answer: 1, explain: 'Ikkalasi bitta C₃H₆O formulasiga ega, lekin biri aldegid, biri keton.' },
      { q: 'Aldegid va $Cu(OH)_2$ ni qizdirganda avval sariq $CuOH$, so‘ngra qanday rangli cho‘kma hosil bo‘ladi?', options: ['Qora CuO', 'Qizil-g‘isht rangli $Cu_2O\\downarrow$', 'Oq CuCl', 'Yashil malaxit'], answer: 1, explain: 'Cu²⁺ + 1e⁻ → Cu⁺ (qizil Cu₂O).' },
      { q: '88 g atsetaldegid ($M=44$) kumush ko‘zgu reaksiyasiga kirishganda necha gramm sof kumush ($A_r=108$) ajraladi?', options: ['108 g', '216 g', '432 g', '54 g'], answer: 2, explain: '88/44 = 2 mol aldegid => 4 mol Ag = 4 · 108 = 432 g.' },
    ],
    problems: [
      { variants: [[44], [22], [88], [11]], build(i) { const [m] = this.variants[i]; const mag = (m / 44) * 216; return { q: `${m} g atsetaldegid (M=44) kumush ko‘zgu reaksiyasiga to‘liq kirishganda necha gramm kumush (Ar=108) tushadi?`, correct: Number(mag.toFixed(1)), unit: 'g', explain: `n = ${m / 44} mol => 2·n mol Ag = ${mag.toFixed(1)} g.` }; } },
      { variants: [[58, 60], [44, 46], [30, 32]], build(i) { const [m1, m2] = this.variants[i]; return { q: `1 mol molyar massasi ${m1} g/mol bo‘lgan aldegid/keton to‘liq vodorod biriktirib spirtga aylandi. Hosil bo‘lgan spirt molyar massasi necha g/mol?`, correct: m2, unit: 'g/mol', explain: `2 ta H (+2 g/mol) qo‘shiladi: ${m1} + 2 = ${m2} g/mol.` }; } },
    ],
  },
  {
    id: 'C4C-3', code: 'K4C.3', sectionId: 'csec-4', subsectionId: 'C4C',
    subsectionTitle: 'C. Kislorodli Organik Birikmalar',
    title: 'Karbon kislotalar va eterifikatsiya',
    subtitle: 'Chumoli, sirka, stearin, olein kislotalari, eterifikatsiya reaksiyasi',
    theory: {
      overview:
        'Karbon kislotalar — uglevodorod radikaliga bir yoki bir nechta karboksil guruhi ($-COOH$) birikkan organik moddalar (umumiy formulasi $C_n H_{2n} O_2$). Muhim vakillari: chumoli kislota ($HCOOH$, metan kislota — tarkibida ham aldegid guruhi bo‘lgani uchun kumush ko‘zgu beradi!), sirka kislota ($CH_3COOH$, oziq-ovqatda ~9% li sirka, suvsiz holatda $16.6^\\circ C$ da muzlaydigan "muz sirka kislota"), yuqori yog‘ kislotalari: to‘yingan palmitin ($C_{15}H_{31}COOH$) va stearin ($C_{17}H_{35}COOH$), to‘yinmagan olein ($C_{17}H_{33}COOH$). Karbon kislotalar kuchsiz kislotalar bo‘lib, metallar, asoslar, karbonat tuzlari ($CO_2$ chiqaradi) bilan reaksiyaga kirishadi hamda spirtlar bilan $H_2SO_4$ katalizatorligida qaytar eterifikatsiya reaksiyasiga kirishib murakkab efir beradi.',
      keyLaws: [
        { title: 'Eterifikatsiya reaksiyasi (Fisher)', text: '$R-COOH + R\'-OH \\xrightleftharpoons{H_2SO_4, t} R-COOR\' + H_2O$ (kislotadan $-OH$, spirtdan $-H$ ajralib suv chiqadi!).' },
        { title: 'Chumoli kislotaning o‘ziga xosligi', text: '$H-C(=O)-OH$ molekulasida bir vaqtning o‘zida ham $-COOH$, ham aldegid ($-CHO$) guruhi mavjud; shuning uchun u yagona "kumush ko‘zgu" beruvchi karbon kislotadir.' },
      ],
      formulas: [
        { latex: '\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{H^+} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + H_2O', name: 'Etilatsetat sintezi (Eterifikatsiya)', symbols: 'Xushbo‘y meva hidli murakkab efir' },
        { latex: '2\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\to 2\\text{CH}_3\\text{COONa} + CO_2\\uparrow + H_2O', name: 'Soda bilan reaksiya', symbols: 'Kislota ekanligining isboti' },
      ],
      constants: [
        { name: 'Sirka kislota (CH₃COOH) M_r va K_a', symbol: 'CH₃COOH', value: '60.05 g/mol · 1.8×10⁻⁵', unit: '' },
        { name: 'Stearin / Olein kislota uglerod soni', symbol: 'C₁₈', value: 'C₁₇H₃₅COOH / C₁₇H₃₃COOH', unit: '' },
      ],
      applications: [
        'Sirka kislota oziq-ovqat konservalashda, atsetat ipak tolasi, aspirin va bo‘yoqlar ishlab chiqarishda keng qo‘llaniladi.',
        'Stearin va palmitin kislotalarning natriy va kaliy tuzlari qattiq va suyuq sovunlarni tashkil qiladi.',
      ],
      calculator: {
        title: 'Sirka Kislotaning pH qiymati va Eterifikatsiya Kalkulyatori',
        formulaDisplay: 'CH₃COOH (60 g) + C₂H₅OH (46 g) → CH₃COOC₂H₅ (88 g)',
        inputs: [
          { key: 'mAcid', label: 'Sirka kislota (M=60) massasi', symbol: 'm', unit: 'g', min: 15, max: 300, step: 15, default: 60 },
          { key: 'eff', label: 'Eterifikatsiya muvozanat unumi', symbol: 'η', unit: '%', min: 30, max: 95, step: 5, default: 67 },
        ],
        compute: (v) => {
          const n = v.mAcid / 60;
          const mEst = (n * 88 * v.eff) / 100;
          return { value: `${mEst.toFixed(1)} g etilatsetat`, unit: '', summary: `${n.toFixed(2)} mol kislota ${(n * 46).toFixed(1)} g etanol bilan ${v.eff}% unumda ${mEst.toFixed(1)} g murakkab efir beradi.` };
        },
      },
    },
    simulation: {
      title: 'Sirka Kislota (CH₃COOH) 3D Strukturasi va Titrlash (3Dmol & VLab)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=ch3cooh',
      openSourceSource: '3Dmol.js · ChemCollective',
      openSourceNote: 'Karboksil guruh (−COOH) dagi qo‘shbog‘li va gidroksilli kislorodlarni 3D aylantirib ko‘ring.',
      alternateSims: [
        { label: 'Sirka kislotani NaOH bilan titrlash (VLab)', source: 'ChemCollective', url: 'sims/chem3d/vlab.html?lab=titration' },
      ],
      parametric: {
        mode: 'chem_ph_titration',
        title: 'Kuchsiz Karbon Kislota Dissotsilanishi va Titrlashi',
        description: 'Sirka kislotani ishqor bilan titrlaganda pH o‘zgarishini kuzating.',
        controls: [
          { key: 'pH', label: 'Eritma pH', unit: '', min: 2, max: 12, step: 0.2, value: 3.2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi karbon kislota tarkibida aldegid guruhi saqlaganligi sababli "kumush ko‘zgu" reaksiyasini ham beradi?', options: ['Sirka kislota', 'Chumoli kislota ($HCOOH$)', 'Stearin kislota', 'Olein kislota'], answer: 1, explain: 'H−C(=O)−OH molekulasining chap qismi aldegid strukturaga ega.' },
      { q: 'Karbon kislota va spirtning konsentrlangan $H_2SO_4$ ishtirokida o‘zaro ta’sirlashib murakkab efir hosil qilishi nima deyiladi?', options: ['Sovunlanish', 'Eterifikatsiya reaksiyasi', 'Polimerlanish', 'Gidrogenlash'], answer: 1, explain: 'Eterifikatsiya qaytar reaksiya bo‘lib, muvozanatni siljitish uchun H₂SO₄ suvni tortib oladi.' },
      { q: 'Yuqori yog‘ kislotalari orasida qaysi biri to‘yinmagan (zanjirida bitta $C=C$ qo‘shbog‘li va suyuq) kislota?', options: ['Palmitin ($C_{15}H_{31}COOH$)', 'Stearin ($C_{17}H_{35}COOH$)', 'Olein ($C_{17}H_{33}COOH$)', 'Chumoli'], answer: 2, explain: 'Olein kislota bromli suvni rangsizlantiradi va suyuq moylar tarkibiga kiradi.' },
      { q: 'Sirka kislotaning etil spirt bilan eterifikatsiyasidan qaysi xushbo‘y murakkab efir hosil bo‘ladi?', options: ['Metilformiat', 'Etilatsetat ($CH_3COOC_2H_5$)', 'Etilenglikol', 'Dietil efir'], answer: 1, explain: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.' },
      { q: '100% li suvsiz sirka kislotasi +16.6 °C da muzga o‘xshab qotgani uchun nima deb nomlanadi?', options: ['Formalin', '"Muz sirka kislotasi"', 'Oleum', 'Kaustik'], answer: 1, explain: 'Suvsiz toza CH₃COOH xona salqinida qattiq kristall massaga aylanadi.' },
      { q: 'Qattiq sovun tayyorlash uchun stearin kislota qaysi ishqor bilan tuz hosil qiladi?', options: ['NaOH (natriy stearat — qattiq sovun)', 'Cu(OH)₂', 'Fe(OH)₃', 'NH₃'], answer: 0, explain: 'Natriy tuzlari qattiq sovun, kaliy tuzlari ($C_{17}H_{35}COOK$) suyuq sovun beradi.' },
      { q: 'Bir asosli to‘yingan karbon kislotalar ($C_2H_4O_2, C_3H_6O_2$) qaysi organik sinf bilan izomer hisoblanadi?', options: ['Alkanlar', 'Murakkab efirlar ($R-COOR\'$)', 'Ketonlar', 'Spirtlar'], answer: 1, explain: 'Sirka kislota CH₃COOH va metilformiat HCOOCH₃ ikkalasi ham C₂H₄O₂ formulaga ega.' },
      { q: '60 g sirka kislotasi ($M=60$) osh sodasi ($NaHCO_3$) bilan to‘liq reaksiyaga kirishganda n.sh. da necha litr $CO_2$ ajraladi?', options: ['11.2 L', '22.4 L (1 mol)', '44.8 L', '5.6 L'], answer: 1, explain: 'CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂↑ => 1 mol CO₂ = 22.4 L.' },
    ],
    problems: [
      { variants: [[60], [120], [30], [90]], build(i) { const [m] = this.variants[i]; const me = (m / 60) * 88; return { q: `${m} g sirka kislotasi (M=60) mo‘l etanol bilan 100% unumda reaksiyaga kirishsa, necha gramm etilatsetat (M=88) hosil bo‘ladi?`, correct: me, unit: 'g', explain: `n = ${m / 60} mol => m = ${me} g.` }; } },
      { variants: [[46, 22.4], [92, 44.8], [23, 11.2]], build(i) { const [m, v] = this.variants[i]; return { q: `${m} g chumoli kislotasi (HCOOH, M=46) mo‘l NaHCO₃ bilan reaksiyaga kirishganda n.sh. da necha litr CO₂ chiqadi?`, correct: v, unit: 'L', explain: `n = ${m / 46} mol => ${v} L.` }; } },
    ],
  },
  {
    id: 'C4C-4', code: 'K4C.4', sectionId: 'csec-4', subsectionId: 'C4C',
    subsectionTitle: 'C. Kislorodli Organik Birikmalar',
    title: 'Murakkab efirlar, yog‘lar va sovunlar',
    subtitle: 'Suyuq va qattiq yog‘lar, gidrogenlash, sovun va sintetik yuvish vositalari',
    theory: {
      overview:
        'Murakkab efirlar — karbon kislota va spirt qoldig‘idan tuzilgan moddalar ($R-COO-R\'$). Ular tabiatda gullar va mevalarga xushbo‘y hid beradi. Yog‘lar — uch atomli spirt glitserin va yuqori yog‘ kislotalarning murakkab efirlari (triglitseridlar). Hayvon yog‘lari (mol, qo‘y yog‘i) tarkibida asosan to‘yingan stearin va palmitin qoldiqlari bo‘lgani uchun xona haroratida qattiq; o‘simlik moylari (kungaboqar, zaytun, paxta moyi) esa to‘yinmagan olein va linol kislotalari qoldig‘iga ega bo‘lgani uchun suyuq va bromli suvni rangsizlantiradi. Suyuq moyni katalizator ($Ni$) ustida vodorod bilan gidrogenlab qattiq yog‘ — margarin (salomas) olinadi. Yog‘larni ishqor bilan qaynatib gidrolizlash sovunlanish reaksiyasi deyiladi va undan sovun ($C_{17}H_{35}COONa$) hamda glitserin olinadi.',
      keyLaws: [
        { title: 'Yog‘larning gidrolizi va sovunlanishi', text: 'Kislotali gidrolizda glitserin + erkin yog‘ kislota; ishqoriy gidrolizda (sovunlanishda) glitserin + sovun (yog‘ kislotasining Na/K tuzi) hosil bo‘ladi.' },
        { title: 'Sintetik yuvish vositalari (SYV) ustunligi', text: 'Oddiy sovun $Ca^{2+}, Mg^{2+}$ ionli qattiq suvda erimaydigan cho‘kma berib ko‘piklanmaydi; alkilsulfatli sintetik yuvish kukunlari esa qattiq suvda ham yuvish qobiliyatini yo‘qotmaydi.' },
      ],
      formulas: [
        { latex: '\\text{Triglitserid (olein)} + 3H_2 \\xrightarrow{\\text{Ni, }t} \\text{Tristearin (qattiq)}', name: 'Suyuq yog‘ni gidrogenlash (Margarin)', symbols: '3 ta qo‘shbog‘ to‘yinadi' },
        { latex: '\\text{Yog‘} + 3\\text{NaOH} \\xrightarrow{t^\\circ} \\text{Glitserin} + 3C_{17}H_{35}\\text{COONa}', name: 'Sovunlanish reaksiyasi', symbols: 'Qattiq sovun olish' },
      ],
      constants: [
        { name: 'Tristearin yog‘i molyar massasi', symbol: 'M(Tristearin)', value: '891.5', unit: 'g/mol' },
        { name: 'Triolein yog‘i molyar massasi', symbol: 'M(Triolein)', value: '885.4', unit: 'g/mol' },
      ],
      applications: [
        'Biologik organizmlarda yog‘lar eng yuqori energiya zaxirasi ($1\\text{ g} \\approx 39\\text{ kJ}$, uglevoddan 2 marta ko‘p) va issiqlik izolyatsiyasi vazifasini bajaradi.',
        'Biodizel yoqilg‘isi o‘simlik moylarini metanol bilan pereeterifikatsiya qilish orqali olinadigan ekologik yoqilg‘idir.',
      ],
      calculator: {
        title: 'Yog‘ni Gidrogenlash (H₂) va Sovun Olish Kalkulyatori',
        formulaDisplay: '1 mol Triolein (885 g) + 3 mol H₂ → 1 mol Tristearin (891 g)',
        inputs: [
          { key: 'mOil', label: 'Suyuq moy (Triolein, M=885) massasi', symbol: 'm', unit: 'kg', min: 88.5, max: 885, step: 88.5, default: 177 },
        ],
        compute: (v) => {
          const n = v.mOil / 885;
          const mH2 = n * 6;
          const mSoap = n * 3 * 306;
          return { value: `${(mSoap).toFixed(1)} kg sovun`, unit: '', summary: `Gidrogenlash uchun ${mH2.toFixed(2)} kg H₂ (${(n * 3 * 22.4).toFixed(1)} m³) sarflanadi | Sovunlanishda ${mSoap.toFixed(1)} kg qattiq sovun olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Karbon Kislota/Efir 3D Modeli va Gidroliz Reaksiyasi',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=ch3cooh',
      openSourceSource: '3Dmol.js · PhET',
      openSourceNote: 'Ester bog‘i hosil qiluvchi karboksil va spirt fragmentlarining 3D fazosini tekshiring.',
      alternateSims: [
        { label: 'Etanol 3D modeli', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=c2h5oh' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Sovunlanish va Gidrogenlash Reaktori Stendi',
        description: 'Reaksiya harorati va ishqor konsentratsiyasi ta’sirida yog‘larning sovunga aylanish tezligini kuzating.',
        controls: [
          { key: 'temp', label: 'Qozon harorati', unit: '°C', min: 40, max: 120, step: 5, value: 90 },
          { key: 'conc', label: 'NaOH konsentratsiyasi', unit: 'M', min: 0.5, max: 5, step: 0.5, value: 3.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kimyoviy jihatdan tabiiy yog‘lar qaysi moddalar sinfiga mansub?', options: ['Murakkab efirlar (glitserin va yuqori yog‘ kislotalari triglitseridlari)', 'Oddiy efirlar', 'Uglevodlar', 'Oqsillar'], answer: 0, explain: 'Barcha o‘simlik va hayvon yog‘lari glitserinning murakkab efirlaridir.' },
      { q: 'O‘simlik moylari (suyuq yog‘lar) ni sanoatda qattiq margaringa aylantirish uchun qaysi reaksiya o‘tkaziladi?', options: ['Oksidlash', 'Katalitik gidrogenlash ($+H_2$, Ni ishtirokida)', 'Nitrolash', 'Kreking'], answer: 1, explain: 'Olein kislotadagi C=C qo‘shbog‘lar H₂ biriktirib stearin (qattiq) qoldig‘iga o‘tadi.' },
      { q: 'Yog‘larni ishqor ($NaOH$) bilan qaynatib sovun va glitserin olish reaksiyasi qanday ataladi?', options: ['Eterifikatsiya', 'Sovunlanish reaksiyasi', 'Vulkanizatsiya', 'Bijg‘ish'], answer: 1, explain: 'Ishqoriy gidrolizda yuqori yog‘ kislotasining natriyli tuzi (qattiq sovun) chiqadi.' },
      { q: 'Qattiq sovun va suyuq sovun tarkibida qaysi kationlar bo‘lishi bilan farq qiladi?', options: ['Qattiq — $Na^+$ tuzi, Suyuq — $K^+$ tuzi', 'Qattiq — Ca²⁺, Suyuq — Fe³⁺', 'Qattiq — Cu²⁺', 'Farqi yo‘q'], answer: 0, explain: 'C₁₇H₃₅COONa qattiq sovun, C₁₇H₃₅COOK esa suyuq sovundir.' },
      { q: 'Nima uchun sintetik yuvish kukunlari (SYV) qattiq ($Ca^{2+}, Mg^{2+}$) suvda ham kirni yaxshi yuvadi?', options: ['Kalsiy tuzlari suvda eriydi va cho‘kmaga tushmaydi', 'Qattiq suvni bug‘latadi', 'Sovun emas', 'Haroratni oshiradi'], answer: 0, explain: 'Oddiy sovun Ca²⁺ bilan erimaydigan cho‘kma beradi, SYV esa eruvchan qolib ko‘piklanaveradi.' },
      { q: 'Kungaboqar va zaytun moylari bromli suvni rangsizlantiradi, mol yog‘i esa yo‘q. Sababi nima?', options: ['O‘simlik moyi tarkibida to‘yinmagan ($C=C$ qo‘shbog‘li) olein/linol qoldiqlari bor', 'Mol yog‘i og‘ir', 'Suv ko‘p', 'Glitserin yo‘q'], answer: 0, explain: 'Qo‘shbog‘ bromni biriktiradi.' },
      { q: '1 mol murakkab efir suv bilan gidrolizlanganda (kislotali) qanday mahsulotlar qaytadan hosil bo‘ladi?', options: ['Alkan va gaz', 'Karbon kislota va spirt', 'Aldegid va amin', 'Tuz va H₂'], answer: 1, explain: 'Gidroliz eterifikatsiyaning teskari jarayonidir.' },
      { q: '1 g yog‘ organizmda to‘liq oksidlanganda qancha energiya ajraladi?', options: ['4 kJ', '17 kJ (uglevod/oqsil)', '≈ 39 kJ (9.3 kkal)', '100 kJ'], answer: 2, explain: 'Yog‘lar kaloriya jihatidan oqsil va uglevodlardan ikki baravar energiyali.' },
    ],
    problems: [
      { variants: [[885, 3], [442.5, 1.5], [1770, 6]], build(i) { const [m, nH2] = this.variants[i]; const vL = nH2 * 22.4; return { q: `${m} g triolein (M=885) ni to‘liq qattiq tristearinga gidrogenlash uchun n.sh. da necha litr H₂ zarur?`, correct: Number(vL.toFixed(1)), unit: 'L', explain: `1 mol triolein + 3 mol H₂ => ${nH2} mol H₂ = ${vL.toFixed(1)} L.` }; } },
      { variants: [[890, 3], [445, 1.5], [1780, 6]], build(i) { const [m, nNa] = this.variants[i]; return { q: `${m} g tristearin (M=890) ni to‘liq sovunlash uchun necha mol NaOH kerak?`, correct: nNa, unit: 'mol', explain: `1 mol yog‘ 3 mol NaOH bilan reaksiyaga kirishadi => ${nNa} mol.` }; } },
    ],
  },
  {
    id: 'C4C-5', code: 'K4C.5', sectionId: 'csec-4', subsectionId: 'C4C',
    subsectionTitle: 'C. Kislorodli Organik Birikmalar',
    title: 'Uglevodlar: Mono-, Di- va Polisaxaridlar',
    subtitle: 'Monosaxaridlar (glyukoza, fruktoza, riboza), disaxaridlar (saxaroza, maltoza, laktoza), polisaxaridlar (kraxmal, sellyuloza)',
    theory: {
      overview:
        'Uglevodlar — o‘simlik va hayvonot olamida eng keng tarqalgan organik moddalar sinfi (umumiy ko‘rinishi $C_n(H_2O)_m$). Uch guruhga bo‘linadi: 1) Monosaxaridlar (gidrolizlanmaydi): geksozalar $C_6H_{12}O_6$ — glyukoza (aldegidospirt: ham spirtli 5 ta $-OH$, ham $-CHO$ bor!) va uning ketospirt izomeri fruktoza (eng shirin), shuningdek DNK/RNK tarkibiga kiruvchi pentozalar — dezoksiriboza va riboza ($C_5H_{10}O_5$); 2) Disaxaridlar ($C_{12}H_{22}O_{11}$): saxaroza (lavlagi/qamish shakari → glyukoza + fruktoza), maltoza (glyukoza + glyukoza) va laktoza (sut shakari); 3) Polisaxaridlar ($(C_6H_{10}O_5)_n$): oziqa zaxirasi — kraxmal (yod bilan to‘q ko‘k rang beradi!) va o‘simlik hujayra devori tayanchi — sellyuloza (paxta tolasi 95–98% sellyuloza, chiziqli tuzilishli).',
      keyLaws: [
        { title: 'Glyukozaning ikki xil tabiatli sifat reaksiyasi', text: 'Glyukoza tarkibida 5 ta $-OH$ bo‘lgani uchun sovuqda $Cu(OH)_2$ ni eritib to‘q ko‘k rang beradi; $-CHO$ aldegid guruhi tufayli esa qizdirganda qizil $Cu_2O\\downarrow$ va kumush ko‘zgu hosil qiladi!' },
        { title: 'Kraxmal vs Sellyuloza farqi', text: 'Ikkalasining formulasi $(C_6H_{10}O_5)_n$ bo‘lsada, kraxmal α-glyukozadan tuzilgan oziqa va yod bilan ko‘karadi; sellyuloza β-glyukozadan tuzilgan chiziqli tola bo‘lib inson oshqozonida hazm bo‘lmaydi.' },
      ],
      formulas: [
        { latex: '6CO_2 + 6H_2O \\xrightarrow{\\text{h}\\nu,\\;\\text{xlorofill}} C_6H_{12}O_6 + 6O_2', name: 'Fotosintez tenglamasi', symbols: 'Quyosh energiyasi hisobiga uglevod sintezi' },
        { latex: 'C_{12}H_{22}O_{11} + H_2O \\xrightarrow{H^+} C_6H_{12}O_6\\text{ (glyukoza)} + C_6H_{12}O_6\\text{ (fruktoza)}', name: 'Saxarozaning gidrolizi (inversiya)', symbols: 'Disaxaridning parchalanishi' },
      ],
      constants: [
        { name: 'Glyukoza / Fruktoza (C₆H₁₂O₆) M_r', symbol: 'M(C₆H₁₂O₆)', value: '180.16', unit: 'g/mol' },
        { name: 'Saxaroza / Laktoza (C₁₂H₂₂O₁₁) M_r', symbol: 'M(Saxaroza)', value: '342.30', unit: 'g/mol' },
      ],
      applications: [
        'Paxta va yog‘och sellyulozasidan tabiiy gazlama, qog‘oz, viskoza ipak va nitrotsellyuloza (tutuqnsiz porox) ishlab chiqariladi.',
        'Glyukoza (uzum shakari) hujayra nafas olishining ($C_6H_{12}O_6 + 6O_2$) asosiy energetik yoqilg‘isidir.',
      ],
      calculator: {
        title: 'Kraxmal/Saxaroza Gidrolizi va Glyukoza Bijg‘ishi Kalkulyatori',
        formulaDisplay: 'C₆H₁₂O₆ (180 g) → 2 C₂H₅OH (92 g) + 2 CO₂ (44.8 L)',
        inputs: [
          { key: 'mGluc', label: 'Glyukoza (M=180) massasi', symbol: 'm', unit: 'g', min: 45, max: 900, step: 45, default: 180 },
          { key: 'eff', label: 'Bijg‘ish unumi', symbol: 'η', unit: '%', min: 50, max: 100, step: 5, default: 90 },
        ],
        compute: (v) => {
          const n = v.mGluc / 180;
          const mEt = (n * 92 * v.eff) / 100;
          const vCo2 = (n * 44.8 * v.eff) / 100;
          return { value: `${mEt.toFixed(1)} g etanol`, unit: '', summary: `${n.toFixed(2)} mol glyukoza ${v.eff}% bijg‘ishda ${mEt.toFixed(1)} g etanol va ${vCo2.toFixed(1)} L CO₂ beradi.` };
        },
      },
    },
    simulation: {
      title: 'Uglevodlar Tuzilishi va Konsentratli Eritmalar Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h5oh',
      openSourceSource: '3Dmol.js · PhET',
      openSourceNote: 'Glyukoza bijg‘ishidan olinadigan etanol hamda qutbli OH guruhli molekulalarni 3D kuzating.',
      alternateSims: [
        { label: 'Ber qonuni: Shakar eritmasi konsentratsiyasi', source: 'PhET', url: 'sims/chem3d/vlab.html?lab=spectroscopy' },
      ],
      parametric: {
        mode: 'chem_solutions',
        title: 'Saxaroza / Glyukoza Eritmasi va Kristallizatsiya Stendi',
        description: 'Harorat va erigan shakar massasini o‘zgartirib, o‘ta to‘yingan sirop hosil bo‘lishini kuzating.',
        controls: [
          { key: 'solute', label: 'Shakar massasi', unit: 'g', min: 15, max: 100, step: 5, value: 55 },
          { key: 'temp', label: 'Harorat', unit: '°C', min: 15, max: 95, step: 5, value: 45 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Glyukoza ($C_6H_{12}O_6$) kimyoviy tuzilishiga ko‘ra qanday bifunksional birikma hisoblanadi?', options: ['Aminokislota', 'Ko‘p atomli aldegidospirt (5 ta −OH va 1 ta −CHO)', 'Keton', 'Murakkab efir'], answer: 1, explain: 'Glyukoza ochiq zanjirda aldegid, siklik shaklda 5 ta OH guruhli halqa hosil qiladi.' },
      { q: 'Kraxmal eritmasiga yod ($I_2$) tomizilganda qanday rang hosil bo‘ladi (sifat reaksiyasi)?', options: ['Sariq', 'To‘q ko‘k rang', 'Qizil', 'Rangsiz'], answer: 1, explain: 'Amiloza spirali ichiga yod molekulalari kirib to‘q ko‘k kompleks beradi.' },
      { q: 'Saxaroza (oddiy shakar, $C_{12}H_{22}O_{11}$) kislotali gidrolizlanganda qaysi ikkita monosaxaridga ajraladi?', options: ['2 mol glyukoza', 'Glyukoza va Fruktoza', 'Glyukoza va Galaktoza (bu laktoza!)', 'Riboza va dezoksiriboza'], answer: 1, explain: 'Saxaroza → glyukoza + fruktoza; Laktoza → glyukoza + galaktoza.' },
      { q: 'RNK tarkibiga kiruvchi $C_5H_{10}O_5$ va DNK tarkibiga kiruvchi $C_5H_{10}O_4$ monosaxaridlar nima deyiladi?', options: ['Geksozalar', 'Riboza va Dezoksiriboza (pentozalar)', 'Maltoza', 'Sellyuloza'], answer: 1, explain: 'Nuklein kislotalar nomidagi R (riboza) va D (dezoksiriboza) shu pentozalardan kelib chiqqan.' },
      { q: 'Paxta tolasi deyarli toza (95–98%) holda qaysi tabiiy polisaxariddan iborat?', options: ['Kraxmal', 'Glikogen', 'Sellyuloza (kletchatka)', 'Xitin'], answer: 2, explain: 'Sellyuloza chiziqli mustahkam tolalar hosil qiladi.' },
      { q: 'Saxaroza tarkibida ochiq aldegid guruhi yo‘qligi sababli kumush ko‘zgu reaksiyasini beradimi?', options: ['Ha', 'Yo‘q (qaytaruvchi shakar emas)', 'Ha, kuchli', 'Faqat sovuqda'], answer: 1, explain: 'Glyukoza va maltoza kumush ko‘zgu beradi, saxaroza esa bermaydi.' },
      { q: 'Glyukoza va fruktoza ($C_6H_{12}O_6$) o‘zaro qanday munosabatda?', options: ['Gomologlar', 'Funksional sinflararo izomerlar (aldegidospirt vs ketospirt)', 'Allotroplar', 'Polimerlar'], answer: 1, explain: 'Ikkalasining formulasi C₆H₁₂O₆, lekin fruktozada keton >C=O guruhi bor.' },
      { q: '180 g glyukoza ($M=180$) spirtli bijg‘ishida ($C_6H_{12}O_6 \\to 2C_2H_5OH + 2CO_2$) necha gramm etanol (M=46) olinadi?', options: ['46 g', '92 g', '138 g', '180 g'], answer: 1, explain: '1 mol glyukoza → 2 mol etanol = 2 · 46 = 92 g.' },
    ],
    problems: [
      { variants: [[180], [90], [360], [45]], build(i) { const [m] = this.variants[i]; const met = (m / 180) * 92; return { q: `${m} g glyukoza (M=180) to‘liq spirtli bijg‘iganda necha gramm etanol (M=46) hosil bo‘ladi?`, correct: met, unit: 'g', explain: `C₆H₁₂O₆ → 2C₂H₅OH => (${m}/180)·92 = ${met} g.` }; } },
      { variants: [[342], [171], [684]], build(i) { const [m] = this.variants[i]; const mgl = (m / 342) * 360; return { q: `${m} g saxaroza (M=342) to‘liq gidrolizlanganda hosil bo‘lgan glyukoza va fruktozaning umumiy massasi necha gramm? (1 mol H₂O = 18 g qo‘shiladi)`, correct: mgl, unit: 'g', explain: `C₁₂H₂₂O₁₁ + H₂O (342+18=360) => (${m}/342)·360 = ${mgl} g.` }; } },
    ],
  },
  {
    id: 'C4D-1', code: 'K4D.1', sectionId: 'csec-4', subsectionId: 'C4D',
    subsectionTitle: 'D. Azotli va Yuqori Molekulyar Birikmalar',
    title: 'Aminlar va Anilin (Zinin reaksiyasi)',
    subtitle: 'Birlamchi, ikkilamchi va uchlamchi aminlar, anilin (Zinin reaksiyasi)',
    theory: {
      overview:
        'Aminlar — ammiak ($NH_3$) molekulasidagi bir, ikki yoki uchta vodorod atomining uglevodorod radikallariga almashinishidan hosil bo‘lgan organik asoslar: birlamchi ($R-NH_2$: metilamin), ikkilamchi ($R_2NH$: dimetilamin) va uchlamchi ($R_3N$: trimetilamin). Azot atomida bo‘linmagan elektron juft mavjudligi sababli aminlar kislotalar bilan donor-akseptor tuzlar beradi ($CH_3NH_2 + HCl \\to [CH_3NH_3]Cl$) va gaz/suyuq holda suvli eritmasi ishqoriy muhitga ega. Alifatik aminlarda $+I$ effekt azot elektron zichligini oshirgani uchun ular ammiakdan KUCHLIROQ asos; aksincha, eng muhim aromatik amin — anilin ($C_6H_5NH_2$, fenilamin) da azot elektron jufti benzol halqasi bilan kon’yugatsiyaga kirishgani uchun u ammiakdan KUCHSIZ asos (hatto lakmus rangini o‘zgartirmaydi, lekin kislotalar bilan tuz beradi). Anilin sanoatda N.N. Zinin reaksiyasi (nitrobenzolni qaytarish) bilan olinadi.',
      keyLaws: [
        { title: 'Aminlar asosliligi qatori', text: 'Suvli eritmada asoslilik tartibi: $(CH_3)_2NH$ (ikkilamchi) $> CH_3NH_2$ (birlamchi) $> NH_3$ (ammiak) $> C_6H_5NH_2$ (anilin).' },
        { title: 'Zinin reaksiyasi va Anilin sifat testi', text: '$C_6H_5NO_2 + 6[H] \\xrightarrow{Fe + HCl} C_6H_5NH_2 + 2H_2O$. Anilin bromli suv bilan darhol oq cho‘kma — 2,4,6-tribromanilin beradi.' },
      ],
      formulas: [
        { latex: 'C_6H_5NO_2 + 3H_2 \\xrightarrow{\\text{kat (Zinin)}} C_6H_5NH_2 + 2H_2O', name: 'Anilin sintezi (N.N. Zinin, 1842)', symbols: 'Nitrobenzoldan anilin olish' },
        { latex: '4CH_3NH_2 + 9O_2 \\to 4CO_2 + 10H_2O + 2N_2\\uparrow', name: 'Aminlarning yonishi', symbols: 'Azot oddiy modda N₂ holida ajraladi!' },
      ],
      constants: [
        { name: 'Anilin (C₆H₅NH₂) M_r', symbol: 'M(Anilin)', value: '93.13', unit: 'g/mol' },
        { name: 'Metilamin (CH₃NH₂) M_r', symbol: 'M(CH₃NH₂)', value: '31.06', unit: 'g/mol (baliq hidli gaz)' },
      ],
      applications: [
        'Anilin dunyo bo‘yicha minglab anilin bo‘yoqlar, sulfanilamid antibakterial dorilar, paratsetamol va poliuretanlar sintezining asosiy xomashyosi.',
        'Etilendiamin va geksaetilendiamin neylon-6,6 kabi mustahkam poliamid tolalar olishda monomerdir.',
      ],
      calculator: {
        title: 'Zinin Reaksiyasi: Nitrobenzoldan Anilin Unumi Kalkulyatori',
        formulaDisplay: 'C₆H₅NO₂ (123 g) + 3H₂ → C₆H₅NH₂ (93 g) + 2H₂O',
        inputs: [
          { key: 'mNitro', label: 'Nitrobenzol (M=123) massasi', symbol: 'm', unit: 'g', min: 61.5, max: 615, step: 61.5, default: 123 },
          { key: 'eff', label: 'Zinin sintezi unumi', symbol: 'η', unit: '%', min: 50, max: 100, step: 5, default: 80 },
        ],
        compute: (v) => {
          const n = v.mNitro / 123;
          const mAn = (n * 93 * v.eff) / 100;
          return { value: `${mAn.toFixed(1)} g anilin`, unit: '', summary: `${n.toFixed(2)} mol nitrobenzoldan ${v.eff}% unum bilan ${mAn.toFixed(1)} g anilin olinadi.` };
        },
      },
    },
    simulation: {
      title: 'Ammiak, Aminlar 3D Piramidasi va Anilin Halqasi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=nh3',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Azot atomining bo‘linmagan juftiga ega trigonal piramida shaklini 3D da aylantirib ko‘ring.',
      alternateSims: [
        { label: 'Glitsin amino guruhi 3D modeli', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=glycine' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Amin Azot Atomi (sp³ Piramida, ~107°)',
        description: 'Azotning 3 ta σ-bog‘ va 1 ta bo‘linmagan juft bilan donor asos xossasini kuzating.',
        controls: [
          { key: 'sig', label: 'Azot σ-bog‘lari', unit: '', min: 3, max: 4, step: 1, value: 3 },
          { key: 'lp', label: 'Bo‘linmagan juft', unit: '', min: 0, max: 1, step: 1, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi qatorda moddalarning asoslik kuchi to‘g‘ri o‘sish/kamayish tartibida berilgan?', options: ['Anilin > Ammiak > Metilamin', 'Dimetilamin > Metilamin > Ammiak > Anilin', 'Ammiak > Dimetilamin > Anilin', 'Anilin eng kuchli asos'], answer: 1, explain: 'Alkil +I effekti asoslilikni oshiradi, anilinda esa benzol halqasi azot elektron juftini tortib asoslilikni pasaytiradi.' },
      { q: 'Nitrobenzolni qaytarib sanoat miqyosida anilin ($C_6H_5NH_2$) olish reaksiyasini kim kashf qilgan?', options: ['A.M. Butlerov', 'N.N. Zinin (1842)', 'D.I. Mendeleyev', 'S.V. Lebedev'], answer: 1, explain: 'Zinin reaksiyasi organik bo‘yoqlar va farmatsevtika sanoatiga yo‘l ochgan.' },
      { q: 'Anilin suvda erib lakmusni ko‘kartirmasada, bromli suv bilan qanday xarakterli sifat reaksiyasi beradi?', options: ['Oq cho‘kma (2,4,6-tribromanilin) tushadi', 'Gaz chiqadi', 'Yashil rang', 'Reaksiya bormaydi'], answer: 0, explain: '−NH₂ kuchli I tur faollashtiruvchi o‘rinbosar bo‘lgani uchun darhol 3 ta Br halqaga o‘tiradi.' },
      { q: 'Aminlar yonish reaksiyaga kirishganda tarkibidagi azot atomlari qaysi modda shaklida ajralib chiqadi?', options: ['NH₃', 'Erkin azot gazi ($N_2$)', 'HNO₃', 'NO₂'], answer: 1, explain: 'Organik aminlar havoda yonganda CO₂, H₂O va N₂ gazi hosil bo‘ladi.' },
      { q: 'Ikkilamchi amin ($R-NH-R\'$) ga misol qaysi formula?', options: ['$CH_3NH_2$', '$(CH_3)_2NH$ (dimetilamin)', '$(CH_3)_3N$', '$C_6H_5NH_2$'], answer: 1, explain: 'Azotdagi ikkita vodorod uglevodorod radikaliga almashgan amin ikkilamchi deyiladi.' },
      { q: 'Aminlarning asosli xossasi (ya’ni H⁺ ionini biriktira olishi) nimaga bog‘liq?', options: ['Azot atomidagi bo‘linmagan elektron juftning donor-akseptor bog‘ hosil qilishiga', 'Uglerodlar soniga', 'Kislorod borligiga', 'Vodorod bog‘iga'], answer: 0, explain: 'H⁺ bo‘sh orbitali azot elektron jufti bilan ammoniy tipidagi kation beradi.' },
      { q: 'Metilamin ($CH_3NH_2$) xlorid kislota ($HCl$) bilan reaksiyaga kirishganda qanday modda hosil bo‘ladi?', options: ['Metanol', 'Metilammoniy xlorid tuzi $[CH_3NH_3]Cl$', 'Xloroform', 'Azot'], answer: 1, explain: 'Tuzlar kislotali asos neytrallanishidan hosil bo‘ladi.' },
      { q: '123 g nitrobenzol ($M=123$) Zinin usulida to‘liq qaytarilsa necha gramm anilin ($M=93$) olinadi?', options: ['46.5 g', '93 g', '123 g', '186 g'], answer: 1, explain: '1 mol C₆H₅NO₂ → 1 mol C₆H₅NH₂ = 93 g.' },
    ],
    problems: [
      { variants: [[123], [246], [61.5], [369]], build(i) { const [m] = this.variants[i]; const man = (m / 123) * 93; return { q: `${m} g nitrobenzol (M=123) Zinin reaksiyasi bo‘yicha 100% unum bilan qaytarilganda necha gramm anilin (M=93) hosil bo‘ladi?`, correct: Number(man.toFixed(1)), unit: 'g', explain: `n = ${m / 123} mol => m = ${man.toFixed(1)} g.` }; } },
      { variants: [[62], [31], [93]], build(i) { const [m] = this.variants[i]; const vL = (m / 31) * 22.4; return { q: `${m} g metilamin (CH₃NH₂, M=31) mo‘l HCl bilan ta’sirlashdi. Necha litr (n.sh.) metilamin gazi sarflangan?`, correct: Number(vL.toFixed(1)), unit: 'L', explain: `n = ${m / 31} mol => V = ${vL.toFixed(1)} L.` }; } },
    ],
  },
  {
    id: 'C4D-2', code: 'K4D.2', sectionId: 'csec-4', subsectionId: 'C4D',
    subsectionTitle: 'D. Azotli va Yuqori Molekulyar Birikmalar',
    title: 'Aminokislotalar va Oqsillar',
    subtitle: 'Amfoterlik, peptid bog‘, oqsilning birlamchi, ikkilamchi, uchlamchi va to‘rtlamchi tuzilishi, denaturatsiya',
    theory: {
      overview:
        'Aminokislotalar — molekulasida ham asosli amino ($-NH_2$), ham kislotali karboksil ($-COOH$) funksional guruhini saqlovchi geterofunksional amfoter organik birikmalardir ($H_2N-CH(R)-COOH$). Amfoterligi tufayli ular ham kislotalar, ham ishqorlar bilan tuz beradi va ichki tuz — bipolyar ion ($^+H_3N-CH(R)-COO^-$) holida bo‘ladi. $\\alpha$-aminokislotalar polikondensatlanib suv ajratishi va peptid (amid, $-CO-NH-$) bog‘lari orqali bog‘lanishidan polipeptidlar — Oqsillar hosil bo‘ladi. Oqsil strukturasining 4 darajasi: 1) Birlamchi — aminokislota qoldiqlarining chiziqli ketma-ketligi; 2) Ikkilamchi — vodorod bog‘lari tutib turuvchi $\\alpha$-spiral yoki $\\beta$-varaq; 3) Uchlamchi — disulfid ($-S-S-$) va hidrofob kuchlar hosil qilgan 3D globula; 4) To‘rtlamchi — bir necha globulalar kompleksi (gemoglobin). Harorat, kuchli kislota/spirt ta’sirida fazoviy strukturaning buzilishi denaturatsiya deyiladi.',
      keyLaws: [
        { title: 'Peptid bog‘i (-CO-NH-)', text: 'Bir aminokislotaning $-COOH$ guruhi ikkinchisining $-NH_2$ guruhi bilan suv ajratib peptid bog‘i hosil qiladi ($k$ ta aminokislotadan $k-1$ ta peptid bog‘i va $k-1$ ta $H_2O$ chiqadi).' },
        { title: 'Oqsillarga 2 sifat reaksiyasi', text: '1) Biuret reaksiyasi ($CuSO_4 + NaOH$) — binafsha rang (peptid bog‘larni aniqlaydi); 2) Ksantoprotein reaksiyasi (kons. $HNO_3$) — sariq rang (aromatik aminokislotalar borligini bildiradi).' },
      ],
      formulas: [
        { latex: 'n\\,H_2N\\text{-CH}(R)\\text{-COOH} \\to (-HN\\text{-CH}(R)\\text{-CO}-)_n + (n-1)H_2O', name: 'Oqsil (polipeptid) sintezi', symbols: 'Polikondensatlanish' },
        { latex: 'N_{\\text{peptid}} = N_{\\text{aminokislota}} - 1', name: 'Peptid bog‘lar soni', symbols: 'Har bir bog‘da 1 ta H₂O ajraladi' },
      ],
      constants: [
        { name: 'Tirik tabiatdagi asosiy α-aminokislotalar', symbol: 'n_AA', value: '20 xil', unit: '(oqsil qurilish bloklari)' },
        { name: 'Eng sodda aminokislota: Glitsin', symbol: 'M(Glitsin)', value: '75.07', unit: 'g/mol (optik faol emas)' },
      ],
      applications: [
        'Tuxum pishishi, qon ivishi va spirt bilan dezinfeksiya qilish oqsil denaturatsiyasi hodisasiga asoslangan.',
        'Insulin, antitanachalar va barcha biologik fermentlar maxsus uchlamchi fazoviy tuzilishli oqsillardir.',
      ],
      calculator: {
        title: 'Peptid Zanjiri Massasi va Suv Miqdori Kalkulyatori',
        formulaDisplay: 'M_peptid = n · M_AA − (n − 1) · 18',
        inputs: [
          { key: 'nAA', label: 'Aminokislotalar soni n', symbol: 'n', unit: 'ta', min: 2, max: 50, step: 1, default: 10 },
          { key: 'mAA', label: 'O‘rtacha aminokislota massasi (Glitsin=75)', symbol: 'M_AA', unit: 'g/mol', min: 75, max: 180, step: 5, default: 75 },
        ],
        compute: (v) => {
          const bonds = v.nAA - 1;
          const mTot = v.nAA * v.mAA - bonds * 18;
          return { value: `${mTot} g/mol`, unit: '', summary: `Zanjirda ${bonds} ta peptid (−CO−NH−) bog‘i mavjud | Sintezda ${bonds} mol (${bonds * 18} g) suv ajraladi.` };
        },
      },
    },
    simulation: {
      title: 'Glitsin (α-Aminokislota) 3D Strukturasi (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=glycine',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Glitsin molekulasidagi −NH₂ asosli va −COOH kislotali guruhlarning 3D joylashishini aylantirib ko‘ring.',
      alternateSims: [
        { label: 'DNK 3D biomolekula tuzilishi', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=dna_helix' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'Oqsil Denaturatsiyasi va Harorat Ta’siri Stendi',
        description: 'Harorat > 42–60 °C ga ko‘tarilganda oqsilning ikkilamchi/uchlamchi vodorod bog‘lari uzilishini kuzating.',
        controls: [
          { key: 'temp', label: 'Muhit harorati', unit: '°C', min: 20, max: 95, step: 5, value: 37 },
          { key: 'conc', label: 'Kislota / Tuz ta’siri', unit: 'M', min: 0.5, max: 5, step: 0.5, value: 1.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Aminokislotalarning bir vaqtning o‘zida ham kislotalar, ham ishqorlar bilan tuz berishi (amfoterligi) nimadan?', options: ['Halqali tuzilishidan', 'Tarkibida asosli −NH₂ va kislotali −COOH guruhlari borligidan', 'Vodorod bog‘idan', 'Katta massasidan'], answer: 1, explain: '−NH₂ H⁺ biriktirib −NH₃⁺ beradi; −COOH esa H⁺ berib −COO⁻ hosil qiladi.' },
      { q: 'Aminokislota qoldiqlarini oqsil molekulasiga bog‘lab turadigan guruh nima deb ataladi?', options: ['Ester bog‘', 'Peptid (amid) bog‘i −CO−NH−', 'Disulfid bog‘', 'Glikozid bog‘'], answer: 1, explain: 'Peptid bog‘i oqsilning birlamchi strukturasini hosil qiladi.' },
      { q: 'Oqsilning ikkilamchi (α-spiral) tuzilishini asosan qaysi kimyoviy bog‘lar ushlab turadi?', options: ['Ion bog‘lar', 'Peptid guruhlar orasidagi vodorod bog‘lari (−NH···O=C−)', 'Metall bog‘lar', 'Uchbog‘lar'], answer: 1, explain: 'Spiral halqalari o‘rtasidagi vodorod bog‘lar α-spiralni mustahkamlaydi.' },
      { q: 'Qizdirilganda, kuchli kislota yoki og‘ir metall tuzlari ta’sirida oqsilning ikkilamchi va uchlamchi fazoviy tuzilishining buzilishi nima deyiladi?', options: ['Polimerlanish', 'Denaturatsiya', 'Renaturatsiya', 'Gidroliz'], answer: 1, explain: 'Denaturatsiyada peptid zanjiri saqlanadi, lekin 3D shakl va biologik faollik yo‘qoladi (masalan, tuxum oqi qotishi).' },
      { q: 'Oqsildagi peptid bog‘larni aniqlaydigan va eritmaga chiroyli binafsha rang beradigan sifat reaksiyasi qaysi?', options: ['Yod reaksiyasi', 'Biuret reaksiyasi ($CuSO_4 + NaOH$)', 'Bromli suv', 'Alanga testi'], answer: 1, explain: 'Mis (II) ionlari ishqoriy muhitda peptid guruhlari bilan binafsha rangli kompleks beradi.' },
      { q: '10 ta glitsin molekulasidan polikondensatlanish natijasida necha ta peptid bog‘i va necha mol suv hosil bo‘ladi?', options: ['10 ta peptid bog‘i', '9 ta peptid bog‘i va 9 mol H₂O', '8 ta peptid bog‘i', '11 ta'], answer: 1, explain: 'n ta zvenoli zanjirda n−1 = 9 ta bog‘lanish va 9 ta suv ajraladi.' },
      { q: 'Tabiatdagi 20 xil α-aminokislota ichida qaysi biri optik izomeriyaga ega emas (xiral markazi yo‘q)?', options: ['Alanin', 'Glitsin ($H_2N-CH_2-COOH$)', 'Serin', 'Sistein'], answer: 1, explain: 'Glitsinda α-uglerod atomiga ikkita bir xil vodorod (CH₂) bog‘langan.' },
      { q: 'Oqsil to‘liq gidrolizlanganda qanday oxirgi mahsulotlarga parchalanadi?', options: ['Glyukoza', 'α-aminokislotalar aralashmasiga', 'Yog‘ kislotalari', 'Ammiak va metan'], answer: 1, explain: 'Ovqat hazm qilishda pepsin va tripsin oqsillarni α-aminokislotalarga parchalaydi.' },
    ],
    problems: [
      { variants: [[15], [20], [8], [12]], build(i) { const [n] = this.variants[i]; return { q: `Polipeptid zanjiri ${n} ta α-aminokislota qoldig‘idan tuzilgan. Sintez jarayonida nechta peptid bog‘i va necha mol suv ajralgan?`, correct: n - 1, unit: 'ta', explain: `N_peptid = n − 1 = ${n} − 1 = ${n - 1}.` }; } },
      { variants: [[4, 75], [5, 75], [3, 89]], build(i) { const [n, maa] = this.variants[i]; const mp = n * maa - (n - 1) * 18; return { q: `${n} ta bir xil aminokislotadan (M=${maa}) hosil bo‘lgan polipeptidning molyar massasini (g/mol) toping.`, correct: mp, unit: 'g/mol', explain: `${n}·${maa} − ${n - 1}·18 = ${mp} g/mol.` }; } },
    ],
  },
  {
    id: 'C4D-3', code: 'K4D.3', sectionId: 'csec-4', subsectionId: 'C4D',
    subsectionTitle: 'D. Azotli va Yuqori Molekulyar Birikmalar',
    title: 'Nuklein kislotalar: DNK va RNK tuzilishi',
    subtitle: 'DNK va RNK tuzilishi asoslari',
    theory: {
      overview:
        'Nuklein kislotalar (DNK va RNK) — tirik organizmlarda irsiy axborotni saqlash, ko‘paytirish (replikatsiya) va oqsil sintezida (transkripsiya, translyatsiya) hal qiluvchi rol o‘ynovchi biopolimerlar — polinukleotidlardir. Har bir monomer (nukleotid) uch qismdan iborat: 1) Fosfat kislota qoldig‘i ($H_3PO_4$); 2) Pentoza shakar (DNK da — dezoksiriboza, RNK da — riboza); 3) Azotli asos — DNK da Adenin ($A$), Timin ($T$), Guanin ($G$), Sitozin ($C$); RNK da Timin o‘rnida Uratsil ($U$) keladi. 1953-yilda J. Uotson va F. Krik kashf etgan DNK modeli ikkita antiparallel zanjirli qo‘sh spiral bo‘lib, zanjirlar o‘zaro Chargaff komplementarlik qoidasi asosida vodorod bog‘lari bilan tutashgan: $A = T$ (2 ta H-bog‘), $G \\equiv C$ (3 ta H-bog‘).',
      keyLaws: [
        { title: 'Chargaff komplementarlik qoidasi', text: 'Ikki zanjirli DNK da har doim Adenin soni Timinga ($A = T$), Guanin soni esa Sitozinga ($G = C$) teng va purinlar yig‘indisi pirimidinlarga teng: $A + G = T + C$.' },
        { title: 'DNK vs RNK 3 asosiy farqi', text: '1) Shakar: dezoksiriboza vs riboza; 2) Asos: Timin ($T$) vs Uratsil ($U$); 3) Tuzilishi: qo‘sh spiral vs ko‘pincha bitta zanjir.' },
      ],
      formulas: [
        { latex: '\\text{A} = \\text{T}\\;(2\\text{ H-bog‘}), \\quad \\text{G} \\equiv \\text{C}\\;(3\\text{ H-bog‘})', name: 'Chargaff komplementarlik tengligi', symbols: 'Purin (A,G) bilan Pirimidin (T,C) juftlashishi' },
        { latex: 'N_{\\text{H-bog‘}} = 2A + 3G', name: 'DNK zanjirlari orasidagi H-bog‘lar soni', symbols: 'G−C juftliklar ko‘p bo‘lsa DNK issiqqa chidamli' },
      ],
      constants: [
        { name: 'DNK bitta spiral o‘rami uzunligi', symbol: 'L_o‘ram', value: '3.4', unit: 'nm (10 juft nukleotid)' },
        { name: 'Qo‘shni nukleotidlar orasi', symbol: 'l_0', value: '0.34', unit: 'nm' },
      ],
      applications: [
        'PZR (Polimeraza Zanjir Reaksiyasi) va DNK sekvenirlash tibbiy genetika, viruslarni aniqlash va kriminalistikada qo‘llaniladi.',
        'mRNK texnologiyasi zamonaviy vaksinalar va gen terapiyasining asosiga aylandi.',
      ],
      calculator: {
        title: 'Chargaff DNK Tarkibi (%A, %T, %G, %C) va Vodorod Bog‘i Kalkulyatori',
        formulaDisplay: 'A = T,   G = C,   A + T + G + C = 100%',
        inputs: [
          { key: 'pctA', label: 'Adenin (A) ulushi', symbol: '%A', unit: '%', min: 5, max: 45, step: 1, default: 28 },
          { key: 'pairs', label: 'Nukleotid juftlari soni', symbol: 'N_bp', unit: 'bp', min: 10, max: 1000, step: 10, default: 100 },
        ],
        compute: (v) => {
          const pctT = v.pctA;
          const pctG = 50 - v.pctA;
          const pctC = pctG;
          const nA = Math.round((v.pairs * 2 * v.pctA) / 100);
          const nG = Math.round((v.pairs * 2 * pctG) / 100);
          const hb = 2 * nA + 3 * nG;
          return { value: `G=C=${pctG}%`, unit: '', summary: `T=${pctT}%, G=C=${pctG}% | Uzunlik: ${(v.pairs * 0.34).toFixed(1)} nm | Vodorod bog‘lari: ~${Math.round(hb / 2)} ta` };
        },
      },
    },
    simulation: {
      title: 'DNK Qo‘sh Spiral (Double Helix) 3D Molekulyar Modeli (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=dna_helix',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'DNK qo‘sh spiralining fosfat-shakar skeleti va komplementar juftliklarini 3D aylantirib kuzating.',
      alternateSims: [
        { label: 'Aminokislota (oqsil kodi natijasi) 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=glycine' },
      ],
      parametric: {
        mode: 'chem_reactions_lab',
        title: 'DNK Zanjirlari Issiqlik Denaturatsiyasi (PZR Erishi)',
        description: 'G−C juftliklar va harorat ta’sirida DNK spirallarining ajralishini (melting) kuzating.',
        controls: [
          { key: 'temp', label: 'PZR Harorati', unit: '°C', min: 35, max: 98, step: 3, value: 72 },
          { key: 'conc', label: 'G−C ulushi (×0.1)', unit: 'M', min: 2, max: 5, step: 0.5, value: 3.5 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Chargaff qoidasiga ko‘ra ikki zanjirli DNK molekulasida Adenin ($A$) ulushi 22% bo‘lsa, Sitozin ($C$) ulushi necha foiz?', options: ['22%', '28%', '44%', '56%'], answer: 1, explain: 'A = T = 22% (jami 44%); qolgan 56% teng bo‘linadi: G = C = 56/2 = 28%.' },
      { q: 'RNK tarkibida DNK dagi Timin ($T$) azotli asosi o‘rnida qaysi asos joylashadi?', options: ['Guanin (G)', 'Uratsil (U)', 'Adenin (A)', 'Sitozin (C)'], answer: 1, explain: 'RNK da A bilan U (Uratsil) komplementar juftlik hosil qiladi.' },
      { q: 'DNK nukleotidi tarkibidagi besh uglerodli shakar qanday nomlanadi?', options: ['Glyukoza', 'Dezoksiriboza ($C_5H_{10}O_4$)', 'Riboza', 'Saxaroza'], answer: 1, explain: 'DNK = Dezoksiribonuklein kislota.' },
      { q: 'DNK qo‘sh spiralidagi ikki zanjir o‘rtasida qaysi komplementar juftliklar orasida 3 ta vodorod bog‘i bo‘ladi?', options: ['A va T orasida (2 ta)', 'G va C orasida (3 ta)', 'A va U orasida', 'T va C orasida'], answer: 1, explain: 'G≡C da 3 ta, A=T da 2 ta vodorod bog‘i bor.' },
      { q: 'Nukleotidning uchta tarkibiy qismini to‘g‘ri ko‘rsating:', options: ['Aminokislota, yog‘, tuz', 'Azotli asos, pentoza shakar, fosfat kislota qoldig‘i', 'Glitserin, kraxmal, spirt', 'Benzol, spirt, efir'], answer: 1, explain: 'Barcha DNK va RNK monomerlari shu uch qismdan tuzilgan.' },
      { q: 'Oqsil sintezida bitta aminokislotani kodlovchi mRNK dagi uchta nukleotid ketma-ketligi nima deyiladi?', options: ['Gomolog', 'Kodon (triplet)', 'Izomer', 'Ligand'], answer: 1, explain: 'Genetik kod tripletli (3 ta nukleotid = 1 aminokislota).' },
      { q: 'DNK qo‘sh spiralining bitta to‘liq o‘ramiga 10 ta nukleotid jufti to‘g‘ri keladi. Bitta o‘ram uzunligi qancha?', options: ['0.34 nm', '3.4 nm', '34 nm', '10 nm'], answer: 1, explain: '10 · 0.34 nm = 3.4 nm.' },
      { q: 'DNK qo‘sh spiral modelini 1953-yilda kimlar kashf etgan (Rozalind Franklin rentgenogrammalari asosida)?', options: ['Butlerov va Mendeleyev', 'Jeyms Uotson va Frensis Krik', 'Zinin va Lebedev', 'Arrenius va Ostvald'], answer: 1, explain: 'Uotson va Krik 1962-yilda Nobel mukofotini olgan.' },
    ],
    problems: [
      { variants: [[30], [20], [18], [35]], build(i) { const [pctA] = this.variants[i]; const pctG = 50 - pctA; return { q: `Ikki zanjirli DNK bo‘lagida Adenin (A) ulushi ${pctA}% ga teng. Guanin (G) ning foiz ulushini toping.`, correct: pctG, unit: '%', explain: `A+G = 50% => G = 50 − ${pctA} = ${pctG}%.` }; } },
      { variants: [[100], [50], [200]], build(i) { const [bp] = this.variants[i]; const len = bp * 0.34; return { q: `DNK fragmentida ${bp} juft nukleotid bor. Uning uzunligini (nm) hisoblang. (l₀ = 0.34 nm)`, correct: Number(len.toFixed(1)), unit: 'nm', explain: `L = ${bp} · 0.34 = ${len.toFixed(1)} nm.` }; } },
    ],
  },
  {
    id: 'C4D-4', code: 'K4D.4', sectionId: 'csec-4', subsectionId: 'C4D',
    subsectionTitle: 'D. Azotli va Yuqori Molekulyar Birikmalar',
    title: 'Geterosiklik birikmalar: Pirrol, Piridin, Purin va Pirimidin',
    subtitle: 'Pirrol, piridin, purin va pirimidin asoslari',
    theory: {
      overview:
        'Geterosiklik birikmalar — halqa tarkibida uglerod atomlaridan tashqari boshqa element atomlari (geteroatomlar: $N, O, S$) saqlovchi siklik organik moddalar. Xyukkel $4n+2$ ($6\\pi$-elektron) qoidasiga ko‘ra ko‘pchiligi aromatik xossaga ega: 1) Besh a’zoli aromatik geterotsikl — pirrol ($C_4H_5N$): azotning bo‘linmagan juft 2 elektronlari ham umumiy 6π aromatik bulutga qo‘shiladi (shuning uchun pirrol kuchsiz kislota, asosligi yo‘q!). To‘rtta pirrol halqasi birikib porfirin — gemoglobin va xlorofill skeletini beradi; 2) Olti a’zoli geterotsikl — piridin ($C_5H_5N$): azotning juft elektronlari halqadan tashqarida turadi, shuning uchun piridin kuchli asos xossali; 3) Pirimidin (2 ta azotli 6-halqa: Sitozin, Timin, Uratsil asosi) va Purin (pirimidin + imidazol kondensirlangan: Adenin, Guanin, Kofein asosi).',
      keyLaws: [
        { title: 'Pirrol vs Piridin asosliligi', text: 'Piridinda azotning erkin elektron jufti $sp^2$ orbitalda tashqarida turgani uchun H⁺ ni biriktira oladi (asos!); Pirrolda esa azot jufti 6π aromatik oktet hosil qilishga sarflangani uchun asoslilik namoyon qilmaydi.' },
        { title: 'Biologik porfirin va nuklein asoslari', text: 'Pirrol halqalari gemoglobin va xlorofillda; pirimidin hamda purin esa DNK/RNK va ATF (adenozintrifosfat) da markaziy rol o‘ynaydi.' },
      ],
      formulas: [
        { latex: 'C_4H_5N\\;(\\text{Pirrol: } 4\\pi + 2_N = 6\\pi), \\quad C_5H_5N\\;(\\text{Piridin: } 5C + 1N = 6\\pi)', name: 'Aromatik geterotsikllar elektron tuzilishi', symbols: 'Ikkalasi ham Xyukkel 6π tizimi' },
        { latex: '4n + 2 = 6 \\; (n = 1) \\implies \\text{Aromatik barqarorlik}', name: 'Xyukkel aromatiklik qoidasi', symbols: 'Piridin asosli, pirrol neytral/kuchsiz kislotali' },
      ],
      constants: [
        { name: 'Piridin (C₅H₅N) M_r', symbol: 'M(Piridin)', value: '79.10', unit: 'g/mol' },
        { name: 'Pirrol (C₄H₅N) M_r', symbol: 'M(Pirrol)', value: '67.09', unit: 'g/mol' },
      ],
      applications: [
        'Nikotinamid (vitamin PP / B₃), piridoksin (vitamin B₆), kofein va ko‘plab zamonaviy antibiotik/dorilar piridin hamda purin geterotsikllari hosilalaridir.',
        'Xlorofill va gemoglobin porfirin (4 pirrol halqa) markazida metall ionlarini ushlab turadi.',
      ],
      calculator: {
        title: 'Geterosiklik Halqa Azot va π-Elektron Hisoblagichi',
        formulaDisplay: 'M(C_x H_y N_z) = 12x + y + 14z',
        inputs: [
          { key: 'x', label: 'Halqa uglerodlari C', symbol: 'x', unit: '', min: 3, max: 5, step: 1, default: 5 },
          { key: 'z', label: 'Halqa azotlari N (piridin=1, pirimidin=2)', symbol: 'z', unit: '', min: 1, max: 4, step: 1, default: 1 },
        ],
        compute: (v) => {
          const y = v.x === 4 && v.z === 1 ? 5 : v.x === 5 && v.z === 1 ? 5 : v.x === 4 && v.z === 2 ? 4 : 4;
          const mr = 12 * v.x + y + 14 * v.z;
          return { value: `M_r = ${mr} g/mol`, unit: '', summary: `6 ta π-elektronli aromatik geterotsikl | Azot massa ulushi: ${((14 * v.z / mr) * 100).toFixed(1)}%` };
        },
      },
    },
    simulation: {
      title: 'Aromatik Halqalar va DNK Geterotsikllari 3D (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c6h6',
      openSourceSource: '3Dmol.js · MolView',
      openSourceNote: 'Yassi 6π aromatik halqa (benzol/piridin tipi) va purin-pirimidin juftliklarini 3D aylantirib ko‘ring.',
      alternateSims: [
        { label: 'Purin va pirimidinli DNK 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=dna_helix' },
      ],
      parametric: {
        mode: 'chem_vsepr',
        title: 'Geterosikl Halqada sp² Aromatik Geometriya',
        description: 'Geteroatom va uglerodlarning 120° tekis trigonal bog‘lanishini kuzating.',
        controls: [
          { key: 'sig', label: 'Halqa σ-bog‘lari', unit: '', min: 3, max: 3, step: 1, value: 3 },
          { key: 'lp', label: 'Halqa tekisligi', unit: '', min: 0, max: 0, step: 1, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Tarkibida 4 ta uglerod va 1 ta azot atomi tutuvchi besh a’zoli aromatik geterotsikl (gemoglobin va xlorofill asosi) nima?', options: ['Piridin', 'Pirrol ($C_4H_5N$)', 'Purin', 'Anilin'], answer: 1, explain: '4 ta pirrol halqasi birikib porfirin skeletini hosil qiladi.' },
      { q: 'Olti a’zoli bitta azotli aromatik geterotsikl — benzol halqasida bitta CH guruhi N atomiga almashgan modda qaysi?', options: ['Pirrol', 'Piridin ($C_5H_5N$)', 'Pirimidin', 'Furan'], answer: 1, explain: 'Piridin (C₅H₅N) o‘tkir hidli suyuqlik, kuchli organik asos va vitamin PP asosi.' },
      { q: 'Piridin nima sababdan pirrolga qaraganda kuchli asos xossasini namoyon qiladi?', options: ['Kattaligi uchun', 'Piridinda azotning erkin elektron jufti 6π halqaga kirmay tashqarida turadi va H⁺ ni bog‘laydi', 'Pirrolda azot yo‘q', 'Kislorod borligi uchun'], answer: 1, explain: 'Pirrolda azot jufti 6π aromatiklikni ta’minlash uchun band.' },
      { q: 'DNK va RNK dagi Sitozin (C), Timin (T) va Uratsil (U) qaysi geterotsiklning hosilalaridir?', options: ['Piridin', 'Pirimidin (6 a’zoli ikkita N li halqa)', 'Purin', 'Tiofen'], answer: 1, explain: 'C, T, U — pirimidin asoslari; A va G — kattaroq purin asoslari.' },
      { q: 'Adenin (A) va Guanin (G), shuningdek choy va kofedagi kofein qaysi qo‘sh halqali geterotsiklga asoslangan?', options: ['Pirrol', 'Purin', 'Piridin', 'Benzol'], answer: 1, explain: 'Purin halqasi pirimidin va imidazol halqalarining birikishidan tuzilgan.' },
      { q: 'Organik kimyoda qaysi geteroatomlar geterosiklik halqa tarkibida eng ko‘p uchraydi?', options: ['Fe, Cu, Zn', 'Azot (N), Kislorod (O) va Oltingugurt (S)', 'Na, K, Ca', 'He, Ne, Ar'], answer: 1, explain: 'N (piridin, pirrol), O (furan), S (tiofen).' },
      { q: 'Pirrol molekulasida nechta umumiy aromatik $\\pi$-elektron halqa bo‘ylab delokallashgan?', options: ['4 ta', '6 ta (4 ta C dan + 2 ta N juftidan, Xyukkel qoidasi)', '8 ta', '2 ta'], answer: 1, explain: '4n + 2 = 6π elektron unga aromatik barqarorlik beradi.' },
      { q: 'Inson energiya valyutasi bo‘lgan ATF (adenozintrifosfat) molekulasida qaysi purin asosi bor?', options: ['Timin', 'Adenin', 'Uratsil', 'Sitozin'], answer: 1, explain: 'ATF tarkibida adenin + riboza + 3 ta fosfat guruhi bor.' },
    ],
    problems: [
      { variants: [[79], [67], [80]], build(i) { const [M] = this.variants[i]; const wN = (14 / M) * 100; return { q: `Bitta azot atomi tutuvchi aromatik geterotsiklning molyar massasi ${M} g/mol. Undagi azotning massa ulushini (%) hisoblang.`, correct: Number(wN.toFixed(1)), unit: '%', explain: `w(N) = (14/${M})·100% = ${wN.toFixed(1)}%.` }; } },
      { variants: [[158, 79], [134, 67], [237, 79]], build(i) { const [m, M] = this.variants[i]; return { q: `${m} g (M=${M}) piridin/pirrol to‘liq bromlash yoki tuz olishda necha mol qatnashadi?`, correct: m / M, unit: 'mol', explain: `n = ${m}/${M} = ${m / M} mol.` }; } },
    ],
  },
  {
    id: 'C4D-5', code: 'K4D.5', sectionId: 'csec-4', subsectionId: 'C4D',
    subsectionTitle: 'D. Azotli va Yuqori Molekulyar Birikmalar',
    title: 'Polimerlar: Plastmassalar, tolalar va polikondensatlanish',
    subtitle: 'Plastmassalar, sintetik tolalar (kapron, lavsan), polikondensatlanish',
    theory: {
      overview:
        'Yuqori molekulyar birikmalar (polimerlar) — ko‘p marta takrorlanuvchi elementar zvenolardan tashkil topgan gigant molekulalar ($M_r = 10^4\\text{–}10^7$). Olinishiga ko‘ra ikki asosiy reaksiya mavjud: 1) Polimerlanish — qo‘shbog‘li monomerlarning ($CH_2=CH_2, CH_2=CHCl, CF_2=CF_2$) qo‘shimcha mahsulotsiz birikishi (polietilen, polipropilen, PVX, polistirol, teflon); 2) Polikondensatlanish — ikki funksional guruhli monomerlardan qo‘shimcha kichik molekula ($H_2O, NH_3$) ajralishi bilan polimer olish (fenolformaldegid smola, poliamid tola — kapron va neylon, poliefir tola — lavsan). Plastmassalar qizdirilganda qayta yumshaydigan termoplastik (PE, PVX) va qayta erimaydigan termoreaktiv (bakelit/fenolformaldegid) turlarga bo‘linadi.',
      keyLaws: [
        { title: 'Polimerlanish vs Polikondensatlanish', text: 'Polimerlanishda monomer va zveno tarkibi bir xil, qo‘shimcha modda chiqmaydi; Polikondensatlanishda suv/HCl kabi qo‘shimcha mahsulot ajraladi.' },
        { title: 'Sintetik tolalar (Kapron va Lavsan)', text: 'Kapron — ε-aminokapron kislotadan olinadigan poliamid tola ($-CO-NH-$); Lavsan — tereftal kislota va etilenglikoldan olinadigan poliefir tola ($-COO-$).' },
      ],
      formulas: [
        { latex: 'n\\,H_2N\\text{-(CH}_2)_5\\text{-COOH} \\to [-HN\\text{-(CH}_2)_5\\text{-CO}-]_n + nH_2O', name: 'Kapron (poliamid tola) polikondensatlanishi', symbols: 'Zveno massasi = 113 g/mol' },
        { latex: 'M_{\\text{polimer}} = n \\cdot M_{\\text{zveno}}', name: 'Polimer molekulyar massasi', symbols: 'n — polimerlanish darajasi' },
      ],
      constants: [
        { name: 'PVX (polivinilxlorid) zveno massasi', symbol: 'M(−CH₂−CHCl−)', value: '62.5', unit: 'g/mol' },
        { name: 'Kapron (poliamid) zveno massasi', symbol: 'M(Kapron)', value: '113.2', unit: 'g/mol' },
      ],
      applications: [
        'Teflon (politetraftoretilen, $[-CF_2-CF_2-]_n$) kimyoviy kislota-ishqorlarga va 300 °C gacha issiqqa chidamli ("organik platina") tova qoplamasidir.',
        'Kapron va neylon arqonlar, paypoqlar va texnik to‘qimachilikda; lavsan esa g‘ijimlanmaydigan matolar va plastik butilkalar (PET) da qo‘llaniladi.',
      ],
      calculator: {
        title: 'Polimerlanish Darajasi (n) va Polikondensatlanish Suv Unumi',
        formulaDisplay: 'n = M_polimer / M_zveno',
        inputs: [
          { key: 'mZveno', label: 'Zveno massasi (PE=28, PP=42, PVX=62.5, Kapron=113)', symbol: 'M_z', unit: 'g/mol', min: 28, max: 200, step: 0.5, default: 62.5 },
          { key: 'nDeg', label: 'Polimerlanish darajasi n', symbol: 'n', unit: 'zveno', min: 100, max: 5000, step: 100, default: 1000 },
        ],
        compute: (v) => {
          const mPol = v.mZveno * v.nDeg;
          return { value: `${(mPol / 1000).toFixed(1)} kg/mol`, unit: '', summary: `Makromolekula massasi: ${mPol.toLocaleString('en-US')} g/mol (${v.nDeg} ta zveno).` };
        },
      },
    },
    simulation: {
      title: 'Polimer Zanjirlari va Sintetik Monomerlar 3D (3Dmol.js)',
      openSourceUrl: 'sims/chem3d/mol3d.html?mol=c2h4',
      openSourceSource: '3Dmol.js · PhET',
      openSourceNote: 'Polietilen monomerini 3D aylantiring va kinetika bo‘limida polimer o‘sish tezligini tekshiring.',
      alternateSims: [
        { label: 'Polikondensatlanish aminokislotasi (Glitsin 3D)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=glycine' },
      ],
      parametric: {
        mode: 'chem_thermo_kinetics',
        title: 'Polimerlanish Harorat va Katalizator Rejim Stendi',
        description: 'Harorat va aktivatsiya to‘sig‘iga qarab makromolekula o‘sish tezligini kuzating.',
        controls: [
          { key: 'T', label: 'Reaktor harorati', unit: 'K', min: 300, max: 520, step: 10, value: 380 },
          { key: 'Ea', label: 'Faollanish Ea', unit: 'kJ', min: 20, max: 110, step: 5, value: 45 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi sintetik tola poliamidlar sinfiga kiradi va ε-aminokapron kislotadan polikondensatlanish yo‘li bilan olinadi?', options: ['Lavsan', 'Kapron (va Neylon)', 'Polietilen', 'Viskoza'], answer: 1, explain: 'Kapron zanjirida −CO−NH− amid (peptid) bog‘lari takrorlanadi.' },
      { q: 'Qizdirilganda yumshab yangi shaklga kiradigan va soviganda qotadigan polimerlar (polietilen, PVX) nima deyiladi?', options: ['Termoreaktiv', 'Termoplastik plastmassalar', 'Allotroplar', 'Monomerlar'], answer: 1, explain: 'Termoplastik chiziqli polimerlarni qayta eritib ishlatish (qayta ishlash) mumkin.' },
      { q: 'Teflon (politetraftoretilen) qaysi monomerning polimerlanishidan hosil bo‘ladi?', options: ['$CF_2=CF_2$ (tetraftoretilen)', 'CH₂=CHCl', 'CH₂=CH₂', 'C₆H₅−CH=CH₂'], answer: 0, explain: 'Teflon kuchli C−F bog‘lari tufayli hatto "shoh aroqda" ham erimaydi.' },
      { q: 'Lavsan (PET / poliefir tolasi) qaysi ikki monomerning polikondensatlanishidan sintez qilinadi?', options: ['Etilen va xlor', 'Tereftal kislota va etilenglikol', 'Fenol va atseton', 'Glitsin va alanin'], answer: 1, explain: 'Kislota va ikki atomli spirt murakkab efir zanjiri (−COO−) hosil qiladi.' },
      { q: 'Polimerlanish reaksiyasi polikondensatlanishdan nimasi bilan asosiy farq qiladi?', options: ['Faqat harorati bilan', 'Polimerlanishda qo‘shimcha kichik molekula (suv, NH₃) ajralib chiqmaydi', 'Polimerlar qattiq bo‘lmaydi', 'Farqi yo‘q'], answer: 1, explain: 'Polikondensatlanishda har bir zveno birikishida H₂O kabi qo‘shimcha modda chiqadi.' },
      { q: 'Qaysi tabiiy polimer emas, balki inson tomonidan kimyoviy qayta ishlangan sun’iy tola hisoblanadi?', options: ['Paxta', 'Jun va tabiiy ipak (oqsil)', 'Atsetat va viskoza ipak (sellyulozadan kimyoviy qayta ishlangan)', 'Kapron (to‘liq sintetik)'], answer: 2, explain: 'Viskoza tabiiy sellyulozani kimyoviy eritib qayta yigirilgan sun’iy toladir; kapron esa sintetik.' },
      { q: 'Fenol va formaldegiddan olinadigan fenolformaldegid smolasi qaysi plastik turiga kiradi?', options: ['Termoplastik', 'Termoreaktiv (qayta erimaydigan to‘rsimon)', 'Elastomer', 'Gazsimon'], answer: 1, explain: 'Qizdirilganda uch o‘lchamli pishiq bakelit to‘riga aylanadi.' },
      { q: 'Polivinilxlorid (PVX) zvenosining ($-CH_2-CHCl-$) molyar massasi nechaga teng? (C=12, H=1, Cl=35.5)', options: ['28 g/mol', '42 g/mol', '62.5 g/mol', '104 g/mol'], answer: 2, explain: '2·12 + 3·1 + 35.5 = 62.5 g/mol.' },
    ],
    problems: [
      { variants: [[62500, 62.5], [42000, 42], [113000, 113], [56000, 28]], build(i) { const [mp, mz] = this.variants[i]; return { q: `Polimer makromolekulasining o‘rtacha massasi ${mp} g/mol, elementar zveno massasi ${mz} g/mol. Polimerlanish darajasini (n) toping.`, correct: mp / mz, unit: 'zveno', explain: `n = ${mp}/${mz} = ${mp / mz}.` }; } },
      { variants: [[100, 1000], [62.5, 2000], [104, 500]], build(i) { const [mz, n] = this.variants[i]; const m = (mz * n) / 1000; return { q: `Zveno massasi ${mz} g/mol va polimerlanish darajasi n = ${n} bo‘lgan polimer massasini kg/mol da hisoblang.`, correct: m, unit: 'kg/mol', explain: `(${mz}·${n})/1000 = ${m} kg/mol.` }; } },
    ],
  },
];
