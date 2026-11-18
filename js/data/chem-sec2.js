// Kimyo 2-bo'lim: Kimyoviy Jarayonlar Qonuniyatlari (Fizik Kimyo - 10 mavzu)

export const CHEM_SEC2_TOPICS = [
  {
    id: 'C2A-1', code: 'K2A.1', sectionId: 'csec-2', subsectionId: 'C2A',
    subsectionTitle: 'A. Kimyoviy Kinetika va Termodinamika',
    title: 'Termokimyo, entalpiya (ΔH) va Gess qonuni',
    subtitle: 'Ekzotermik va endotermik reaksiyalar, entalpiya (ΔH), Gess qonuni, entropiya va Gibbs energiyasi',
    theory: {
      overview:
        'Termokimyo kimyoviy reaksiyalarda ajraladigan yoki yutiladigan issiqlik effektlarini o‘rganadi. Issiqlik chiqarib boradigan reaksiyalar ekzotermik ($\\Delta H < 0$, $+Q$, masalan yonish, neytrallanish), issiqlik yutib boradiganlari endotermik ($\\Delta H > 0$, $-Q$, masalan $CaCO_3$ parchalanishi) deyiladi. Gess qonuniga ko‘ra reaksiyaning issiqlik effekti oraliq bosqichlarga emas, faqat boshlang‘ich va yakuniy holatga bog‘liq: $\\Delta H_{\\text{reak}} = \\sum \\Delta H_f^\\circ(\\text{mahs}) - \\sum \\Delta H_f^\\circ(\\text{bosh})$. Jarayonning o‘z-o‘zidan borish mezoni Gibbs erkin energiyasidir: $\\Delta G = \\Delta H - T\\Delta S < 0$.',
      keyLaws: [
        { title: 'Gess qonuni (1840)', text: 'O‘zgarmas bosim va haroratda reaksiyaning entalpiya o‘zgarishi $\\Delta H$ reaksiya yo‘liga bog‘liq emas, u faqat mahsulotlar va boshlang‘ich moddalar hosil bo‘lish entalpiyalari farqiga teng.' },
        { title: 'Gibbs mezoni', text: '$\\Delta G < 0$ bo‘lsa reaksiya berilgan haroratda o‘z-o‘zidan kechadi; $\\Delta G > 0$ da bormaydi; $\\Delta G = 0$ da tizim muvozanatda.' },
      ],
      formulas: [
        { latex: '\\Delta H_{\\text{reak}} = \\sum \\Delta H_f^\\circ(\\text{mahs}) - \\sum \\Delta H_f^\\circ(\\text{bosh})', name: 'Gess qonunining 1-natijasi', symbols: 'Oddiy moddalar uchun \\Delta H_f^\\circ = 0' },
        { latex: '\\Delta G = \\Delta H - T\\Delta S', name: 'Gibbs erkin energiyasi tenglamasi', symbols: '\\Delta S — entropiya o‘zgarishi, T — Kelvin harorati' },
      ],
      constants: [
        { name: 'Suv (suyuq) hosil bo‘lish entalpiyasi', symbol: 'ΔH_f°(H₂O)', value: '−285.8', unit: 'kJ/mol' },
        { name: 'CO₂ (gaz) hosil bo‘lish entalpiyasi', symbol: 'ΔH_f°(CO₂)', value: '−393.5', unit: 'kJ/mol' },
      ],
      applications: [
        'Kalorimetriyada oziq-ovqat kaloriyasi va raketa yoqilg‘ilari issiqlik quvvati o‘lchanadi.',
        'Metallurgiyada oksidlarni qaytarish reaksiyalari qaysi haroratdan boshlab o‘z-o‘zidan borishi Ellingem (ΔG-T) diagrammasi bilan topiladi.',
      ],
      calculator: {
        title: 'Gibbs Energiyasi (ΔG) va Spontanlik Hisoblagichi',
        formulaDisplay: 'ΔG = ΔH − T · (ΔS / 1000)',
        inputs: [
          { key: 'dH', label: 'Entalpiya o‘zgarishi ΔH', symbol: 'ΔH', unit: 'kJ', min: -300, max: 300, step: 5, default: 120 },
          { key: 'dS', label: 'Entropiya ΔS', symbol: 'ΔS', unit: 'J/K', min: -200, max: 400, step: 10, default: 250 },
          { key: 'T', label: 'Harorat T', symbol: 'T', unit: 'K', min: 200, max: 1500, step: 25, default: 600 },
        ],
        compute: (v) => {
          const dG = v.dH - v.T * (v.dS / 1000);
          return { value: `${dG.toFixed(1)} kJ`, unit: '', summary: dG < 0 ? 'ΔG < 0: Reaksiya O‘Z-O‘ZIDAN boradi (spontan)' : dG > 0 ? 'ΔG > 0: Reaksiya o‘z-o‘zidan ketmaydi' : 'ΔG = 0: Muvozanat' };
        },
      },
    },
    simulation: {
      title: 'Termokimyo, Entalpiya va Kalorimetriya Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=kinetics',
      openSourceSource: 'PhET · ChemCollective',
      openSourceNote: 'Harorat va issiqlik o‘zgarishining reaksiya tezligi va muvozanatiga ta’sirini tekshiring.',
      alternateSims: [
        { label: 'Karno issiqlik sikli (Effectuall)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Games__carnotcycle.html' },
      ],
      parametric: {
        mode: 'chem_thermo_kinetics',
        title: 'Entalpiya Energiya Profili va Gibbs Simulyatori',
        description: 'Aktivatsiya energiyasi va ΔH ni o‘zgartirib, ekzotermik hamda endotermik energetik diagrammani kuzating.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 250, max: 500, step: 10, value: 320 },
          { key: 'Ea', label: 'Aktivatsiya Ea', unit: 'kJ', min: 20, max: 120, step: 5, value: 60 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ekzotermik reaksiyalar uchun entalpiya o‘zgarishi ($\\Delta H$) qanday ishoraga ega bo‘ladi?', options: ['ΔH > 0 (musbat)', 'ΔH < 0 (manfiy)', 'ΔH = 0', 'Haroratga bog‘liq'], answer: 1, explain: 'Tizim tashqariga issiqlik bergani uchun ichki entalpiya kamayadi: ΔH < 0.' },
      { q: 'Gess qonuni nimani ifodalaydi?', options: ['Issiqlik effekti reaksiya tezligiga teng', 'Reaksiya issiqlik effekti oraliq bosqichlarga emas, bosh va oxirgi holatga bog‘liq', 'Katalizator issiqlikni oshiradi', 'Bosim entropiyaga teng'], answer: 1, explain: 'Entalpiya holat funksiyasi bo‘lgani uchun o‘tish yo‘liga bog‘liq emas.' },
      { q: '$\\Delta G = \\Delta H - T\\Delta S$ tenglamasida reaksiya o‘z-o‘zidan borishi uchun shart qaysi?', options: ['ΔG > 0', 'ΔG < 0', 'ΔG = +100', 'ΔS = 0'], answer: 1, explain: 'Izobar-izotermik jarayonlar faqat Gibbs energiyasi kamayadigan (ΔG < 0) yo‘nalishda spontan kechadi.' },
      { q: 'Oddiy moddalarning standart sharoitdagi ($298\\text{ K}$) hosil bo‘lish entalpiyasi ($\\Delta H_f^\\circ$) nechaga teng deb olinadi?', options: ['100 kJ/mol', '0 kJ/mol', '−285 kJ/mol', '+1 kJ/mol'], answer: 1, explain: 'Barqaror oddiy moddalar (O₂, N₂, C_grafit, Fe) uchun ΔH_f° = 0.' },
      { q: '$CH_4 + 2O_2 \\to CO_2 + 2H_2O + 890\\text{ kJ}$ tenglamasi bo‘yicha 0.5 mol metan yonganda qancha issiqlik ajraladi?', options: ['890 kJ', '445 kJ', '1780 kJ', '222.5 kJ'], answer: 1, explain: '0.5 · 890 = 445 kJ.' },
      { q: 'Tizimda tartibsizlik darajasini tavsiflovchi termodinamik funksiya nima?', options: ['Entalpiya', 'Entropiya (S)', 'Viskozlik', 'Kuchlanish'], answer: 1, explain: 'Gaz moddalar miqdori ortadigan reaksiyalarda entropiya ortadi (ΔS > 0).' },
      { q: 'Agar $\\Delta H < 0$ va $\\Delta S > 0$ bo‘lsa, reaksiya qaysi haroratlarda spontan boradi?', options: ['Hech qachon', 'Barcha haroratlarda', 'Faqat past haroratda', 'Faqat 1000 K dan yuqorida'], answer: 1, explain: 'ΔG = (-) − T(+) doimo manfiy bo‘ladi.' },
      { q: 'Termokimyoviy tenglamada $CaCO_3(q) \\to CaO(q) + CO_2(g) - 178\\text{ kJ}$ yozuvi nimani bildiradi?', options: ['Ekzotermik reaksiya', 'Endotermik reaksiya (ΔH = +178 kJ)', 'Neytrallanish', 'Kataliz'], answer: 1, explain: '−Q yozuvi 178 kJ issiqlik yutilishini, ya’ni endotermik jarayonni bildiradi.' },
    ],
    problems: [
      { variants: [[100, 200, 600], [-80, 100, 300], [150, 250, 800], [50, -100, 400]], build(i) { const [dh, ds, T] = this.variants[i]; const dg = dh - (T * ds) / 1000; return { q: `ΔH = ${dh} kJ va ΔS = ${ds} J/K bo‘lgan reaksiyaning T = ${T} K dagi Gibbs energiyasi ΔG (kJ) nechaga teng?`, correct: Number(dg.toFixed(1)), unit: 'kJ', explain: `ΔG = ${dh} − ${T}·(${ds}/1000) = ${dg.toFixed(1)} kJ.` }; } },
      { variants: [[890, 2], [572, 0.5], [1367, 3]], build(i) { const [q, n] = this.variants[i]; return { q: `1 mol modda yonganda ${q} kJ issiqlik chiqadi. ${n} mol modda yonganda necha kJ issiqlik ajraladi?`, correct: q * n, unit: 'kJ', explain: `Q = ${n}·${q} = ${q * n} kJ.` }; } },
    ],
  },
  {
    id: 'C2A-2', code: 'K2A.2', sectionId: 'csec-2', subsectionId: 'C2A',
    subsectionTitle: 'A. Kimyoviy Kinetika va Termodinamika',
    title: 'Kimyoviy reaksiya tezligi va Vant-Goff qoidasi',
    subtitle: 'Gomogen va geterogen reaksiyalar tezligi, konsentratsiya, harorat (Vant-Goff qoidasi), bosim va sirt yuzasining ta’siri',
    theory: {
      overview:
        'Kimyoviy reaksiya tezligi ($v$) vaqt birligida hajm (gomogen) yoki sirt yuzasi (geterogen) birligida modda konsentratsiyasining o‘zgarishi bilan o‘lchanadi: $v = \\pm \\Delta C / \\Delta t$. Massalar ta’siri qonuniga ko‘ra (Guldberg-Vaage) reaksiya tezligi reaksiyaga kirishuvchi gaz yoki erigan moddalar konsentratsiyalari ko‘paytmasiga proporsional: $v = k \\cdot C_A^a \\cdot C_B^b$ (qattiq jismlar tezlik tenglamasiga kirmaydi, ular uchun sirt yuzasi muhim). Harorat har $10^\\circ\\text{C}$ ga ko‘tarilganda reaksiya tezligi $\\gamma = 2\\text{–}4$ marta ortadi (Vant-Goff qoidasi), aniq harorat bog‘liqligini esa Arrenius tenglamasi beradi.',
      keyLaws: [
        { title: 'Massalar ta’siri qonuni', text: '$aA + bB \\to \\dots$ elementar gomogen reaksiyasining tezligi $v = k [A]^a [B]^b$ formulaga bo‘ysunadi.' },
        { title: 'Vant-Goff qoidasi', text: 'Harorat $T_1$ dan $T_2$ gacha ko‘tarilganda tezlikning ortishi: $v_2 / v_1 = \\gamma^{(T_2 - T_1)/10}$.' },
      ],
      formulas: [
        { latex: 'v = \\pm \\frac{\\Delta C}{\\Delta t}\\;(\\text{mol/(L}\\cdot\\text{s)})', name: 'O‘rtacha reaksiya tezligi', symbols: 'C — molyar konsentratsiya, t — vaqt' },
        { latex: 'v_2 = v_1 \\cdot \\gamma^{\\frac{T_2 - T_1}{10}}', name: 'Vant-Goff harorat qoidasi', symbols: '\\gamma = 2\\text{..}4 — harorat koeffitsienti' },
        { latex: 'k = A e^{-E_a / (RT)}', name: 'Arrenius tenglamasi', symbols: 'E_a — faollanish energiyasi' },
      ],
      constants: [
        { name: 'Vant-Goff koeffitsienti diapazoni', symbol: 'γ', value: '2 – 4', unit: '' },
        { name: 'Universal gaz doimiysi', symbol: 'R', value: '8.314', unit: 'J/(mol·K)' },
      ],
      applications: [
        'Sovutkichlarda haroratni pasaytirish Vant-Goff qoidasiga ko‘ra ovqat buzilish reaksiyalarini o‘nlab marta sekinlashtiradi.',
        'Dvigatel va sanoat pechlarida suyuq yoqilg‘ini mayda purkash sirt yuzasini oshirib yonishni keskin tezlatadi.',
      ],
      calculator: {
        title: 'Vant-Goff Harorat va Konsentratsiya Tezlik Kalkulyatori',
        formulaDisplay: 'v₂ / v₁ = γ^((T₂ − T₁) / 10)',
        inputs: [
          { key: 'gamma', label: 'Harorat koeffitsienti γ', symbol: 'γ', unit: '', min: 2, max: 4, step: 0.5, default: 2 },
          { key: 'dT', label: 'Harorat o‘zgarishi ΔT', symbol: 'ΔT', unit: '°C', min: 10, max: 60, step: 10, default: 30 },
        ],
        compute: (v) => {
          const factor = Math.pow(v.gamma, v.dT / 10);
          return { value: `${factor.toFixed(1)}× tez`, unit: '', summary: `Harorat +${v.dT}°C oshganda reaksiya tezligi ${factor.toFixed(1)} marta ortadi (vaqt ${factor.toFixed(1)} marta qisqaradi).` };
        },
      },
    },
    simulation: {
      title: 'PhET To‘qnashuvlar va Reaksiya Tezligi Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=kinetics',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Harorat va katalizatorning aktiv to‘qnashuvlar soniga hamda tezlikka ta’sirini tekshiring.',
      alternateSims: [
        { label: 'Molekulalar harorati va tezligi (Effectuall)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Thermodynamics_Kinetic_Theory_of_Gases.html' },
      ],
      parametric: {
        mode: 'chem_thermo_kinetics',
        title: 'Vant-Goff Tezlik Egri Chizig‘i va To‘qnashuv Stendi',
        description: 'Harorat T ni ko‘targanda aktivatsiya to‘sig‘idan o‘tuvchi molekulalar ulushi keskin oshishini kuzating.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 250, max: 500, step: 10, value: 340 },
          { key: 'Ea', label: 'Faollanish Ea', unit: 'kJ', min: 20, max: 120, step: 5, value: 50 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Reaksiya harorat koeffitsienti $\\gamma = 3$ ga teng. Harorat $20^\\circ\\text{C}$ dan $50^\\circ\\text{C}$ ga ko‘tarilganda reaksiya tezligi necha marta ortadi?', options: ['3 marta', '9 marta', '27 marta', '81 marta'], answer: 2, explain: 'ΔT = 30 °C => 3^(30/10) = 3³ = 27 marta.' },
      { q: '$2CO(g) + O_2(g) \\to 2CO_2(g)$ reaksiyasida moddalar konsentratsiyasi 2 marta oshirilsa, tezlik necha marta ortadi?', options: ['2 marta', '4 marta', '8 marta', '16 marta'], answer: 2, explain: 'v = k[CO]²[O₂] => 2² · 2 = 8 marta ortadi.' },
      { q: 'Qaysi omil geterogen reaksiya ($Zn(q) + 2HCl(e)$) tezligini oshiradi, lekin gomogen reaksiyalarga xos emas?', options: ['Qattiq ruxni maydalash (sirt yuzasini oshirish)', 'Konsentratsiyani oshirish', 'Haroratni oshirish', 'Katalizator'], answer: 0, explain: 'Geterogen reaksiya faqat fazalar chegarasi sirtida borgani uchun maydalash sirt yuzasini kengaytiradi.' },
      { q: 'Modda konsentratsiyasi 20 sekundda $0.8\\text{ mol/L}$ dan $0.2\\text{ mol/L}$ gacha kamaydi. O‘rtacha reaksiya tezligi qancha?', options: ['0.03 mol/(L·s)', '0.06 mol/(L·s)', '0.3 mol/(L·s)', '12 mol/(L·s)'], answer: 0, explain: 'v = (0.8 − 0.2) / 20 = 0.6 / 20 = 0.03 mol/(L·s).' },
      { q: 'Qattiq moddalar ($C + O_2 \\to CO_2$) ishtirokidagi reaksiya tezligi tenglamasiga nima yozilmaydi?', options: ['Gazlar konsentratsiyasi', 'Qattiq uglerod konsentratsiyasi (u doimiy)', 'Tezlik konstantasi k', 'Kislorod konsentratsiyasi'], answer: 1, explain: 'Qattiq modda zichligi hajm bo‘yicha o‘zgarmas deb qabul qilinadi va tezlik konstantasi k tarkibiga kiritiladi.' },
      { q: 'Idish hajmi 3 marta kichraytirilsa, gaz reaksiyasi $N_2 + 3H_2 \\to 2NH_3$ tezligi necha marta ortadi?', options: ['3 marta', '9 marta', '27 marta', '81 marta'], answer: 3, explain: 'Hajm 3 marta kamaysa bosim/konsentratsiya 3 marta ortadi: 3¹ · 3³ = 3⁴ = 81 marta.' },
      { q: 'Harorat $30^\\circ\\text{C}$ ga ko‘tarilganda reaksiya 8 marta tezlashdi. Harorat koeffitsienti $\\gamma$ qancha?', options: ['2', '3', '4', '2.5'], answer: 0, explain: 'γ³ = 8 => γ = 2.' },
      { q: 'Reaksiya faollanish energiyasi ($E_a$) deb nimaga aytiladi?', options: ['Umumiy ajralgan issiqlik', 'To‘qnashayotgan zarralarning reaksiyaga kirishishi uchun zarur minimal qo‘shimcha energiya', 'Tashqi bosim', 'Entropiya qiymati'], answer: 1, explain: 'Faqat energiyasi E_a to‘sig‘idan katta bo‘lgan "faol to‘qnashuvlar" kimyoviy bog‘larni uza oladi.' },
    ],
    problems: [
      { variants: [[2, 40], [3, 30], [2, 50], [4, 20]], build(i) { const [g, dt] = this.variants[i]; const f = Math.pow(g, dt / 10); return { q: `γ = ${g} bo‘lganda harorat ΔT = ${dt} °C ga oshirildi. Reaksiya tezligi necha marta ortadi?`, correct: f, unit: 'marta', explain: `${g}^(${dt}/10) = ${f} marta.` }; } },
      { variants: [[1.2, 0.4, 20], [2.0, 0.5, 30], [0.9, 0.3, 15]], build(i) { const [c1, c2, t] = this.variants[i]; const v = (c1 - c2) / t; return { q: `Konsentratsiya ${t} s da ${c1} M dan ${c2} M gacha kamaydi. O‘rtacha tezlikni (mol/L·s) toping.`, correct: Number(v.toFixed(3)), unit: 'mol/(L·s)', explain: `v = (${c1}−${c2})/${t} = ${v.toFixed(3)}.` }; } },
    ],
  },
  {
    id: 'C2A-3', code: 'K2A.3', sectionId: 'csec-2', subsectionId: 'C2A',
    subsectionTitle: 'A. Kimyoviy Kinetika va Termodinamika',
    title: 'Kataliz, katalizatorlar va fermentlar',
    subtitle: 'Katalizatorlar va ingibitorlar, gomogen va geterogen kataliz, fermentlar',
    theory: {
      overview:
        'Katalizator — reaksiya tezligini oshirib, lekin reaksiya oxirida o‘z kimyoviy tarkibi va miqdori o‘zgarmasdan qoladigan modda. U kimyoviy reaksiyani aktivatsiya energiyasi ($E_a$) pastroq bo‘lgan yangi oraliq bosqichli yo‘lga burib yuboradi (reaksiyaning umumiy $\\Delta H$ issiqligini ham, muvozanat holatini ham o‘zgartirmaydi — faqat muvozanatga kelishni tezlatadi). Reaksiyani sekinlashtiruvchi moddalar ingibitorlar deyiladi. Reaktivlar va katalizator bir fazada bo‘lsa gomogen kataliz (masalan, $NO$ gazi ishtirokida $SO_2$ oksidlanishi), turli fazada bo‘lsa geterogen kataliz ($Pt, Ni, V_2O_5$ qattiq sirtida gazlar reaksiyasi) deb ataladi. Tirik organizmlardagi biologik katalizatorlar — fermentlar (enzimlar) o‘ta yuqori selektivlikka ega.',
      keyLaws: [
        { title: 'Katalizatorning energetik ta’siri', text: 'Katalizator aktivatsiya energiyasi $E_a$ to‘sig‘ini pasaytiradi, ammo boshlang‘ich va oxirgi moddalar energiya farqi $\\Delta H$ ni o‘zgartirmaydi.' },
        { title: 'Muvozanatga ta’siri', text: 'Katalizator to‘g‘ri va teskari reaksiyalar tezligini bir xil darajada oshiradi, shuning uchun muvozanat konstantasi va unumni o‘zgartirmaydi.' },
      ],
      formulas: [
        { latex: 'E_a^{\\text{kat}} < E_a^{\\text{kat.siz}} \\implies k_{\\text{kat}} \\gg k', name: 'Katalitik tezlanish sharti', symbols: 'Katalizator faollanish energiyasini kamaytiradi' },
        { latex: 'A + K \\rightarrow AK \\xrightarrow{+B} AB + K', name: 'Gomogen oraliq birikma mexanizmi', symbols: 'Katalizator K reaksiya oxirida asl holida ajraladi' },
      ],
      constants: [
        { name: 'Ammiak sintezi katalizatori', symbol: 'Fe (+Al₂O₃, K₂O)', value: 'Geterogen', unit: '(Gaber jarayoni)' },
        { name: 'SO₂ → SO₃ oksidlanish katalizatori', symbol: 'V₂O₅', value: '450 °C', unit: '(Kontakt usuli)' },
      ],
      applications: [
        'Avtomobil katalitik neytralizatorlari (Pt/Pd/Rh) zaharli $CO$ va $NO_x$ gazlarini zararsiz $CO_2$ va $N_2$ ga aylantiradi.',
        'Amilaza, pepsin va katalaza fermentlari tana haroratida ($36.6^\\circ\\text{C}$) murakkab biokimyoviy reaksiyalarni millionlab marta tezlatadi.',
      ],
      calculator: {
        title: 'Katalizator Tufayli Tezlik Ortishi (Arrenius nisbati)',
        formulaDisplay: 'k_kat / k = exp((Ea₁ − Ea₂) / (RT))',
        inputs: [
          { key: 'Ea1', label: 'Katalizatorsiz Ea₁', symbol: 'Ea₁', unit: 'kJ/mol', min: 40, max: 120, step: 5, default: 75 },
          { key: 'Ea2', label: 'Katalizator bilan Ea₂', symbol: 'Ea₂', unit: 'kJ/mol', min: 15, max: 90, step: 5, default: 45 },
          { key: 'T', label: 'Harorat T', symbol: 'T', unit: 'K', min: 273, max: 700, step: 10, default: 350 },
        ],
        compute: (v) => {
          const ratio = Math.exp(((v.Ea1 - v.Ea2) * 1000) / (8.314 * v.T));
          return { value: `${ratio > 1e6 ? ratio.toExponential(2) : ratio.toFixed(0)}×`, unit: '', summary: `Faollanish to‘sig‘i ΔEa = ${v.Ea1 - v.Ea2} kJ/mol ga pasayishi reaksiyani shuncha marta tezlatdi.` };
        },
      },
    },
    simulation: {
      title: 'Kataliz va Aktivatsiya Energiyasi Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=kinetics',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Katalizator qo‘shilganda faollanish to‘sig‘i pasayishi va to‘qnashuvlar samaradorligini sinang.',
      alternateSims: [
        { label: 'Glitsin / Ferment bloki 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=glycine' },
      ],
      parametric: {
        mode: 'chem_thermo_kinetics',
        title: 'Katalitik va Oddiy Yo‘l Energiya To‘sig‘i Simulyatori',
        description: 'Faollanish energiyasi Ea ni pasaytirib, samarali reaksiyaga kirishuvchi molekulalar ulushi o‘sishini ko‘ring.',
        controls: [
          { key: 'T', label: 'Harorat T', unit: 'K', min: 260, max: 500, step: 10, value: 310 },
          { key: 'Ea', label: 'Faollanish Ea', unit: 'kJ', min: 20, max: 120, step: 5, value: 35 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Katalizator kimyoviy reaksiya tezligini qanday mexanizm orqali oshiradi?', options: ['Haroratni oshirib', 'Faollanish energiyasi (E_a) pastroq bo‘lgan yangi reaksiya yo‘lini ochib', 'Muvozanatni mahsulotga siljitib', 'Bosimni ko‘tarib'], answer: 1, explain: 'Katalizator oraliq birikma hosil qilib aktivatsiya energiyasini pasaytiradi.' },
      { q: 'Reaksiya tezligini sekinlashtiruvchi moddalar qanday ataladi?', options: ['Promotorlar', 'Ingibitorlar', 'Katalizatorlar', 'Indikatorlar'], answer: 1, explain: 'Ingibitorlar zanjir yoki korroziya reaksiyalarini tormozlaydi.' },
      { q: 'Qattiq $MnO_2$ ishtirokida suyuq vodorod peroksid ($H_2O_2$) ning parchalanishi katalizning qaysi turiga kiradi?', options: ['Gomogen kataliz', 'Geterogen kataliz', 'Avtokataliz', 'Biokataliz'], answer: 1, explain: 'Katalizator (qattiq) va reaktiv (suyuq) turli fazada bo‘lgani uchun geterogen kataliz.' },
      { q: 'Katalizator kimyoviy muvozanat konstantasiga va reaksiyaning issiqlik effektiga ($\Delta H$) qanday ta’sir qiladi?', options: ['Ikkalasini oshiradi', 'Hech birini o‘zgartirmaydi', 'ΔH ni kamaytiradi', 'Faqat teskari reaksiyani tezlatadi'], answer: 1, explain: 'Katalizator ham to‘g‘ri, ham teskari reaksiyani teng tezlatadi; ΔH ham o‘zgarmaydi.' },
      { q: 'Tirik hujayralardagi oqsil tabiatli o‘ta selektiv biologik katalizatorlar nima deyiladi?', options: ['Vitaminlar', 'Fermentlar (enzimlar)', 'Alkaloidlar', 'Esterlar'], answer: 1, explain: 'Fermentlar faqat bitta aniq substratga "kalit-qulf" shaklida ta’sir ko‘rsatadi.' },
      { q: 'Alkenlarni gidrogenlashda (masalan, margarin olishda) qaysi metall katalizator sifatida qo‘llaniladi?', options: ['Na', 'Ni, Pt yoki Pd', 'Hg', 'Al'], answer: 1, explain: 'Nikel, platina va palladiy sirtida vodorod molekulasi atomlarga ajralib qo‘shbog‘ga birikadi.' },
      { q: 'Kontakt usulida $SO_2$ ni $SO_3$ ga oksidlashda qaysi katalizator ishlatiladi?', options: ['V₂O₅ (vanadiy (V) oksid)', 'CuO', 'ZnCl₂', 'KMnO₄'], answer: 0, explain: 'Sanoatda sulfat kislota olishning kontakt apparatida V₂O₅ ishlatiladi.' },
      { q: 'Katalizator sirtini zaharlab uning faolligini yo‘qotuvchi moddalar (H₂S, CO, As birikmalari) nima deyiladi?', options: ['Katalitik zaharlar', 'Promotorlar', 'Stabilizatorlar', 'Buferlar'], answer: 0, explain: 'Zaharlar katalizatorning faol markazlarini to‘sib qo‘yadi.' },
    ],
    problems: [
      { variants: [[80, 50], [100, 60], [95, 45], [70, 35]], build(i) { const [e1, e2] = this.variants[i]; return { q: `Reaksiyaning faollanish energiyasi Ea₁ = ${e1} kJ/mol edi. Katalizator qo‘shilgach Ea₂ = ${e2} kJ/mol bo‘ldi. Energiya to‘sig‘i necha kJ/mol ga kamaydi?`, correct: e1 - e2, unit: 'kJ/mol', explain: `ΔEa = ${e1} − ${e2} = ${e1 - e2} kJ/mol.` }; } },
      { variants: [[3, 20], [2, 30], [4, 20]], build(i) { const [g, dt] = this.variants[i]; const f = Math.pow(g, dt / 10); return { q: `Katalizatorli reaksiyada γ = ${g}. Harorat ${dt}°C oshsa tezlik necha marta ortadi?`, correct: f, unit: 'marta', explain: `${g}^(${dt}/10) = ${f} marta.` }; } },
    ],
  },
  {
    id: 'C2A-4', code: 'K2A.4', sectionId: 'csec-2', subsectionId: 'C2A',
    subsectionTitle: 'A. Kimyoviy Kinetika va Termodinamika',
    title: 'Kimyoviy muvozanat va Le Shatelye prinsipi',
    subtitle: 'Qaytar va qaytmas reaksiyalar, muvozanat konstantasi, Le Shatelye prinsipi',
    theory: {
      overview:
        'Bir vaqtning o‘zida ikki qarama-qarshi yo‘nalishda (to‘g‘ri va teskari) kecha oladigan reaksiyalar qaytar reaksiyalar deyiladi ($N_2 + 3H_2 \\rightleftharpoons 2NH_3$). To‘g‘ri reaksiya tezligi teskari reaksiya tezligiga tenglashganda ($v_{\\text{to‘g‘}} = v_{\\text{tesk}}$) dinamik kimyoviy muvozanat qaror topadi va bunda konsentratsiyalar o‘zgarmay qoladi. Muvozanat konstantasi $K_c = ([C]^c[D]^d)/([A]^a[B]^b)$ faqat haroratga bog‘liq. Le Shatelye prinsipiga ko‘ra, muvozanatdagi tizimga tashqi ta’sir (konsentratsiya, bosim, harorat) ko‘rsatilsa, muvozanat shu ta’sirni kamaytiradigan tomonga siljiydi: bosim oshirilsa — gaz mollari kam tarafga; harorat oshirilsa — endotermik ($-Q$) tarafga.',
      keyLaws: [
        { title: 'Le Shatelye siljish prinsipi', text: '1) $C_{\\text{bosh}}$ oshirilsa → o‘ngga (mahsulotga); 2) Bosim oshirilsa → gaz hajmi/moli kichik tarafga; 3) Harorat oshirilsa → issiqlik yutiladigan (endotermik) yo‘nalishga siljiydi.' },
        { title: 'Muvozanat sharti', text: 'Dinamik muvozanatda makroskopik konsentratsiyalar o‘zgarmaydi, ammo ikkala qarama-qarshi reaksiya teng tezlikda davom etadi.' },
      ],
      formulas: [
        { latex: 'K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}', name: 'Kimyoviy muvozanat konstantasi', symbols: 'Muvozanat paytidagi molyar konsentratsiyalar' },
        { latex: '\\Delta n = \\sum n_{\\text{gaz, mahs}} - \\sum n_{\\text{gaz, bosh}}', name: 'Gaz mollari soni o‘zgarishi', symbols: '\\Delta n = 0 da bosim muvozanatni siljitmaydi' },
      ],
      constants: [
        { name: 'Ammiak sintezi ΔH', symbol: 'N₂+3H₂⇌2NH₃', value: '−92.4', unit: 'kJ/mol (ekzotermik)' },
        { name: 'Gaber sanoat sharoiti', symbol: 'P, T', value: '200 atm, 450°C', unit: '' },
      ],
      applications: [
        'Gaber-Bosh usulida azot va vodoroddan ammiak olishda yuqori bosim (200–300 atm) gaz mollari 4→2 kamayadigan mahsulot tarafga muvozanatni siljitadi.',
        'Qonda kislorod gemoglobin bilan qaytar bog‘lanishi o‘pka va to‘qimalardagi $O_2$ bosimi farqi bilan boshqariladi.',
      ],
      calculator: {
        title: 'Muvozanat Konstantasi K_c va Boshlang‘ich/Sarflangan Hisoblagich',
        formulaDisplay: 'K_c = [C]² / ([A] · [B])',
        inputs: [
          { key: 'cA', label: 'Muvozanat [A]', symbol: '[A]', unit: 'M', min: 0.1, max: 5, step: 0.1, default: 0.5 },
          { key: 'cB', label: 'Muvozanat [B]', symbol: '[B]', unit: 'M', min: 0.1, max: 5, step: 0.1, default: 0.4 },
          { key: 'cC', label: 'Muvozanat [C] (A+B ⇌ 2C)', symbol: '[C]', unit: 'M', min: 0.1, max: 5, step: 0.1, default: 1.2 },
        ],
        compute: (v) => {
          const Kc = (v.cC * v.cC) / (v.cA * v.cB);
          return { value: `K_c = ${Kc.toFixed(2)}`, unit: '', summary: Kc > 1 ? 'Muvozanatda mahsulot [C] ustunlik qiladi' : 'Muvozanat boshlang‘ich moddalar tarafda' };
        },
      },
    },
    simulation: {
      title: 'PhET Qaytar Reaksiyalar va Le Shatelye Muvozanat Simulyatori',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=equilibrium',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Ammiak sintezi misolida bosim va harorat o‘zgarganda muvozanat siljishini tekshiring.',
      alternateSims: [
        { label: 'Ammiak (NH₃) 3D molekulasi', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nh3' },
      ],
      parametric: {
        mode: 'chem_equilibrium',
        title: 'Le Shatelye Muvozanat Siljishi: N₂ + 3H₂ ⇌ 2NH₃ + Q',
        description: 'Bosim (atm) va harorat (°C) ni o‘zgartirib, ammiak unumining siljishini kuzating.',
        controls: [
          { key: 'P', label: 'Bosim P', unit: 'atm', min: 1, max: 10, step: 1, value: 6 },
          { key: 'T', label: 'Harorat', unit: '°C', min: 200, max: 600, step: 25, value: 400 },
        ],
      },
    },
    coreQuestions: [
      { q: '$N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) + Q$ tizimida bosimni oshirsak, muvozanat qayerga siljiydi?', options: ['Chapga (N₂ va H₂ ga)', 'O‘ngga (NH₃ ga — 4 mol gazdan 2 molga)', 'Siljimaydi', 'Reaksiya to‘xtaydi'], answer: 1, explain: 'Chapda 1+3=4 mol gaz, o‘ngda 2 mol gaz bor; bosim ortganda kam molli o‘ng tarafga siljiydi.' },
      { q: '$H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ reaksiyasida bosimni o‘zgartirish muvozanatni siljitadimi?', options: ['O‘ngga siljitadi', 'Chapga siljitadi', 'Siljitmaydi (chap va o‘ngda teng 2 mol gaz)', 'Faqat past haroratda'], answer: 2, explain: 'Gaz molekulalari soni chapda ham (1+1=2), o‘ngda ham (2) teng (Δn = 0).' },
      { q: 'Endotermik ($+\\Delta H$) qaytar reaksiyada harorat ko‘tarilganda muvozanat qayerga siljiydi?', options: ['O‘ngga (mahsulot hosil bo‘lish tarafga)', 'Chapga', 'O‘zgarmaydi', 'Katalizatorsiz bormaydi'], answer: 0, explain: 'Le Shatelye prinsipiga ko‘ra qizdirish issiqlik yutadigan endotermik yo‘nalishni kuchaytiradi.' },
      { q: 'Muvozanat konstantasiga ($K_c$) qaysi omil bevosita ta’sir ko‘rsatadi?', options: ['Konsentratsiya', 'Bosim', 'Faqat harorat', 'Katalizator'], answer: 2, explain: 'K_c faqat reaksiyaning tabiati va haroratga bog‘liq.' },
      { q: 'Qachon kimyoviy reaksiya amalda qaytmas deb hisoblanadi?', options: ['Cho‘kma tushsa, gaz uchib ketsa yoki kam dissotsilanuvchi suv hosil bo‘lsa', 'Harorat 0 °C bo‘lsa', 'Faqat metallarda', 'Bosim 1 atm bo‘lsa'], answer: 0, explain: 'Mahsulotlardan biri reaksiya sohasini tark etsa, teskari reaksiya ketmaydi.' },
      { q: '$2SO_2 + O_2 \\rightleftharpoons 2SO_3$ muvozanatida tizimdan $SO_3$ ni chiqarib olsak, muvozanat qayerga siljiydi?', options: ['O‘ngga ($SO_3$ hosil bo‘lishiga)', 'Chapga', 'O‘zgarmaydi', 'Teskari tezlik ortadi'], answer: 0, explain: 'Mahsulot kamayishi o‘rnini to‘ldirish uchun reaksiya o‘ngga siljiydi.' },
      { q: 'Kimyoviy muvozanat paytida qaysi tenglik o‘rinli?', options: ['[Boshlang‘ich] = [Mahsulot]', '$v_{\\text{to‘g‘ri}} = v_{\\text{teskari}}$', '$v_{\\text{to‘g‘ri}} = 0$', 'K_c = 1'], answer: 1, explain: 'Muvozanat to‘g‘ri va teskari reaksiyalar tezligi tenglashganda qaror topadi.' },
      { q: '$CaCO_3(q) \\rightleftharpoons CaO(q) + CO_2(g) - Q$ da bosim oshirilsa muvozanat qayerga siljiydi?', options: ['O‘ngga', 'Chapga (gaz yo‘q tarafga)', 'O‘zgarmaydi', 'Haroratga ko‘ra'], answer: 1, explain: 'Chapda gaz (0 mol) kamroq bo‘lgani uchun bosim oshishi muvozanatni chapga siljitadi.' },
    ],
    problems: [
      { variants: [[0.5, 0.5, 1.0], [0.2, 0.5, 1.0], [0.4, 0.5, 0.8], [1.0, 2.0, 2.0]], build(i) { const [a, b, c] = this.variants[i]; const kc = (c * c) / (a * b); return { q: `A + B ⇌ 2C muvozanatida [A]=${a} M, [B]=${b} M, [C]=${c} M. Muvozanat konstantasi K_c nechaga teng?`, correct: Number(kc.toFixed(2)), unit: '', explain: `K_c = ${c}²/(${a}·${b}) = ${kc.toFixed(2)}.` }; } },
      { variants: [[4, 2], [3, 2], [5, 2]], build(i) { const [a, b] = this.variants[i]; return { q: `Gaz fazali qaytar reaksiyaning chap tomonida ${a} mol gaz, o‘ng tomonida ${b} mol gaz bor. Gaz mollari farqi Δn = n_o‘ng − n_chap nechaga teng?`, correct: b - a, unit: 'mol', explain: `Δn = ${b} − ${a} = ${b - a} mol.` }; } },
    ],
  },
  {
    id: 'C2B-1', code: 'K2B.1', sectionId: 'csec-2', subsectionId: 'C2B',
    subsectionTitle: 'B. Eritmalar va Elektrolitik Dissotsilanish',
    title: 'Eritmalar, eruvchanlik va konsentratsiya turlari',
    subtitle: 'Eruvchanlik, to‘yingan, to‘yinmagan va o‘ta to‘yingan eritmalar, konsentratsiya turlari (foiz, molyar, normal, molyal)',
    theory: {
      overview:
        'Eritma — ikki yoki undan ortiq komponentdan iborat gomogen (bir jinsli) tizim (erituvchi va erigan modda). Berilgan haroratda $100\\text{ g}$ erituvchida eriy oladigan maksimal modda massasi eruvchanlik koeffitsienti ($S$) deyiladi: bunga ko‘ra eritmalar to‘yingan, to‘yinmagan va o‘ta to‘yingan bo‘ladi. Konsentratsiya ifodalari: 1) Foiz konsentratsiya (massa ulushi) $w = (m_{\\text{modda}}/m_{\\text{eritma}})\\cdot 100\\%$; 2) Molyarlik $C_M = n/V\\;(\\text{mol/L})$; 3) Normallik $C_N = n_{\\text{ekv}}/V$; 4) Molyallik $C_m = n / m_{\\text{erituvchi(kg)}}$.',
      keyLaws: [
        { title: 'Eruvchanlikning harorat va bosimga bog‘liqligi', text: 'Ko‘pchilik qattiq tuzlarning eruvchanligi harorat ortganda ko‘payadi; gazlarning suvda eruvchanligi esa harorat ko‘tarilganda kamayadi va bosim ortganda ortadi (Genri qonuni).' },
        { title: 'Suyultirish va aralashtirish qoidasi', text: 'Eritmani suv bilan suyultirganda erigan modda massasi va moli o‘zgarmaydi: $C_1 V_1 = C_2 V_2$ yoki $m_1 w_1 = m_2 w_2$.' },
      ],
      formulas: [
        { latex: 'w = \\frac{m_{\\text{modda}}}{m_{\\text{eritma}}} \\cdot 100\\%, \\quad C_M = \\frac{n}{V_{\\text{eritma(L)}}}', name: 'Foiz va molyar konsentratsiya', symbols: 'n = m / M' },
        { latex: 'C_M = \\frac{10 \\cdot \\rho \\cdot w}{M}', name: 'Foiz va molyarlik bog‘lanishi', symbols: '\\rho — eritma zichligi (g/mL), w — foiz (%)' },
      ],
      constants: [
        { name: 'Osh tuzi (NaCl) eruvchanligi (20 °C)', symbol: 'S(NaCl)', value: '36.0', unit: 'g / 100 g suv' },
        { name: 'Fiziologik eritma (NaCl)', symbol: 'w(NaCl)', value: '0.9', unit: '%' },
      ],
      applications: [
        'Tibbiyotda 0.9% li natriy xlorid (fiziologik) va 5% li glyukoza eritmalari hujayra osmotik bosimiga moslab tayyorlanadi.',
        'Sovuq qishda muzlagan yo‘llarga NaCl yoki CaCl₂ sepilishi muzlash haroratini tushirish (krioskopik effekt) ga tayanadi.',
      ],
      calculator: {
        title: 'Foiz (w), Molyarlik (C_M) va Molyallik Hisoblagichi',
        formulaDisplay: 'w = m / (m + m_suv) · 100%,   C_M = (m / M) / V_L',
        inputs: [
          { key: 'mSol', label: 'Erigan modda massasi', symbol: 'm', unit: 'g', min: 2, max: 200, step: 2, default: 40 },
          { key: 'mWat', label: 'Suv massasi', symbol: 'm_suv', unit: 'g', min: 50, max: 1000, step: 25, default: 200 },
          { key: 'M', label: 'Molyar massa M (masalan NaOH=40)', symbol: 'M', unit: 'g/mol', min: 16, max: 200, step: 1, default: 40 },
        ],
        compute: (v) => {
          const tot = v.mSol + v.mWat;
          const w = (v.mSol / tot) * 100;
          const n = v.mSol / v.M;
          const molal = n / (v.mWat / 1000);
          const approxCm = n / (tot / 1000);
          return { value: `${w.toFixed(1)}% · ${molal.toFixed(2)} m`, unit: '', summary: `Modda miqdori: ${n.toFixed(2)} mol | Molyallik: ${molal.toFixed(2)} mol/kg | Taxminiy C_M ≈ ${approxCm.toFixed(2)} M` };
        },
      },
    },
    simulation: {
      title: 'Eritma Konsentratsiyasi va Ber Qonuni Laboratoriyasi (PhET)',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=spectroscopy',
      openSourceSource: 'PhET · ChemCollective',
      openSourceNote: 'Eritma konsentratsiyasi rang intensivligi va optik yutilishga qanday ta’sir qilishini sinang.',
      alternateSims: [
        { label: 'Suv molekulasi 3D (solvatatsiya)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=h2o' },
      ],
      parametric: {
        mode: 'chem_solutions',
        title: 'To‘yinganlik va Konsentratsiya Simulyatori',
        description: 'Erigan tuz massasini va suv haroratini o‘zgartirib, to‘yinganlik chegarasi hamda kristall cho‘kishini kuzating.',
        controls: [
          { key: 'solute', label: 'Tuz massasi', unit: 'g', min: 10, max: 100, step: 5, value: 35 },
          { key: 'temp', label: 'Suv harorati', unit: '°C', min: 10, max: 90, step: 5, value: 25 },
        ],
      },
    },
    coreQuestions: [
      { q: '160 g suvda 40 g tuz eritildi. Hosil bo‘lgan eritmaning foiz konsentratsiyasi qancha?', options: ['16%', '20%', '25%', '40%'], answer: 1, explain: 'Eritma massasi 160 + 40 = 200 g; w = (40 / 200) · 100% = 20%.' },
      { q: '2 litr eritmada 80 g $NaOH$ ($M = 40\\text{ g/mol}$) erigan. Eritmaning molyar konsentratsiyasi ($C_M$) qancha?', options: ['0.5 M', '1.0 M', '2.0 M', '4.0 M'], answer: 1, explain: 'n = 80/40 = 2 mol; C_M = 2 mol / 2 L = 1.0 M.' },
      { q: 'Harorat oshganda gazlarning (masalan $CO_2, O_2$) suvda eruvchanligi qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Avval ortib keyin nolga tushadi'], answer: 0, explain: 'Gazlar erishi ekzotermik bo‘lgani uchun qizdirganda gaz suvdan chiqib ketadi (qaynatilgan suvda kislorod qolmaydi).' },
      { q: 'Eritma 200 g 15% li bo‘lsa, unga yana 100 g toza suv qo‘shilganda yangi konsentratsiya necha foiz bo‘ladi?', options: ['5%', '10%', '12%', '15%'], answer: 1, explain: 'Tuz = 200·0.15 = 30 g; yangi massa = 300 g => w = 30/300 = 10%.' },
      { q: '1 kg toza erituvchida erigan moddaning mollar soni qaysi konsentratsiya turini bildiradi?', options: ['Molyarlik ($C_M$)', 'Molyallik ($C_m$)', 'Normallik ($C_N$)', 'Titr ($T$)'], answer: 1, explain: 'Molyallik (mol/kg erituvchi) harorat o‘zgarganda hajm kengayishiga bog‘liq bo‘lmagani bilan qulay.' },
      { q: 'Tibbiyotda ishlatiladigan fiziologik eritma tarkibi qanday?', options: ['5% NaCl', '0.9% NaCl', '10% HCl', '9% spirt'], answer: 1, explain: '0.9% NaCl eritmasi inson qon plazmasi bilan izotonik.' },
      { q: 'Ma’lum haroratda ortiqcha tuz qattiq holatda erimay cho‘kib turgan muvozanatdagi eritma nima deyiladi?', options: ['To‘yinmagan', 'To‘yingan eritma', 'Suyultirilgan', 'Kolloid'], answer: 1, explain: 'Eruvchanlik chegarasiga yetgan eritma to‘yingan hisoblanadi.' },
      { q: '0.5 M li $H_2SO_4$ eritmasining normal konsentratsiyasi ($C_N$) nechaga teng? (ekvivalent faktori f=2)', options: ['0.25 N', '0.5 N', '1.0 N', '2.0 N'], answer: 2, explain: 'H₂SO₄ ikki negizli bo‘lgani uchun C_N = 2 · C_M = 2 · 0.5 = 1.0 N.' },
    ],
    problems: [
      { variants: [[30, 120], [50, 200], [20, 80], [45, 105]], build(i) { const [ms, mw] = this.variants[i]; const w = (ms / (ms + mw)) * 100; return { q: `${mw} g suvda ${ms} g shakar eritildi. Eritma konsentratsiyasini (%) toping.`, correct: Number(w.toFixed(1)), unit: '%', explain: `w = ${ms}/(${ms}+${mw})·100% = ${w.toFixed(1)}%.` }; } },
      { variants: [[120, 40, 1.5], [117, 58.5, 2], [98, 98, 0.5]], build(i) { const [m, M, V] = this.variants[i]; const cm = (m / M) / V; return { q: `${V} L eritmada ${m} g (M=${M} g/mol) modda eritilgan. Molyar konsentratsiya C_M (mol/L) qancha?`, correct: Number(cm.toFixed(2)), unit: 'M', explain: `n = ${m}/${M} = ${(m / M).toFixed(2)} mol; C_M = n/${V} = ${cm.toFixed(2)} M.` }; } },
    ],
  },
  {
    id: 'C2B-2', code: 'K2B.2', sectionId: 'csec-2', subsectionId: 'C2B',
    subsectionTitle: 'B. Eritmalar va Elektrolitik Dissotsilanish',
    title: 'Elektrolitik dissotsilanish nazariyasi (EDN)',
    subtitle: 'Kuchli va kuchsiz elektrolitlar, dissotsilanish darajasi, ion almashinish reaksiyalari',
    theory: {
      overview:
        '1887-yilda Svante Arrenius yaratgan Elektrolitik Dissotsilanish Nazariyasiga (EDN) ko‘ra, elektrolitlar (kislota, asos, tuzlar) suvda eriganda yoki suyuqlanganda dipol suv molekulalari ta’sirida musbat kationlar va manfiy anionlarga ajraladi; shuning uchun ular elektr tokini o‘tkazadi. Qand, spirt, atseton kabi moddalar noelektrolitlardir. Dissotsilanish darajasi ($\\alpha = N_{\\text{ion}} / N_{\\text{jami}}$) ga ko‘ra: kuchli elektrolitlar ($HCl, HNO_3, H_2SO_4, NaOH, KOH$, eruvchan tuzlar $\\alpha \\approx 100\\%$ to‘liq ajraladi) va kuchsiz elektrolitlar ($CH_3COOH, H_2CO_3, NH_4OH, H_2O$) farqlanadi. Ion almashinish reaksiyalari faqat cho‘kma ($\\downarrow$), gaz ($\\uparrow$) yoki kam dissotsilanuvchi modda ($H_2O$) hosil bo‘lgandagina oxirigacha boradi.',
      keyLaws: [
        { title: 'Ostvald suyultirish qonuni', text: 'Kuchsiz elektrolit uchun eritma suyultirilganda (konsentratsiya $C$ kamaysa) dissotsilanish darajasi ortadi: $K_d = \\alpha^2 C / (1 - \\alpha) \\approx \\alpha^2 C$.' },
        { title: 'Ion tenglamalar sharti', text: 'Reaksiyaning qisqa ion tenglamasida faqat cho‘kma, gaz yoki suv hosil qilishda qatnashgan faol ionlar qoldiriladi (masalan $H^+ + OH^- \\to H_2O$).' },
      ],
      formulas: [
        { latex: '\\alpha = \\frac{n_{\\text{diss}}}{n_{\\text{jami}}} \\cdot 100\\%', name: 'Dissotsilanish darajasi', symbols: 'α > 30% kuchli, α < 3% kuchsiz' },
        { latex: 'K_d = \\frac{C \\alpha^2}{1 - \\alpha}', name: 'Ostvald suyultirish qonuni', symbols: 'K_d — dissotsilanish konstantasi' },
      ],
      constants: [
        { name: 'Sirka kislota (CH₃COOH) K_d (25°C)', symbol: 'K_a', value: '1.8 × 10⁻⁵', unit: 'mol/L' },
        { name: 'Ammiak eritmasi (NH₃·H₂O) K_b', symbol: 'K_b', value: '1.8 × 10⁻⁵', unit: 'mol/L' },
      ],
      applications: [
        'Inson qonidagi $Na^+, K^+, Ca^{2+}, Cl^-$ elektrolitlar muvozanati nerv impulslari va yurak urishini boshqaradi.',
        'Suvdagi qattiq ionlarni ($Ca^{2+}, Mg^{2+}$) cho‘ktirish (ion almashinish) qozonlarni quyqumdan saqlaydi.',
      ],
      calculator: {
        title: 'Kuchsiz Elektrolit Dissotsilanish Darajasi (Ostvald Qonuni)',
        formulaDisplay: 'α ≈ √(K_d / C),   [H⁺] = C · α',
        inputs: [
          { key: 'C', label: 'Kislota konsentratsiyasi C', symbol: 'C', unit: 'M', min: 0.01, max: 2.0, step: 0.01, default: 0.10 },
          { key: 'pKa', label: 'pK_a (CH₃COOH ≈ 4.74)', symbol: 'pKa', unit: '', min: 2.0, max: 7.0, step: 0.1, default: 4.74 },
        ],
        compute: (v) => {
          const Kd = Math.pow(10, -v.pKa);
          const alpha = Math.min(1, Math.sqrt(Kd / v.C));
          const h = v.C * alpha;
          return { value: `α = ${(alpha * 100).toFixed(2)}%`, unit: '', summary: `[H⁺] = ${h.toExponential(2)} M | pH = ${(-Math.log10(h)).toFixed(2)} | K_d = ${Kd.toExponential(2)}` };
        },
      },
    },
    simulation: {
      title: 'Elektrolitik Dissotsilanish va Ion Almashinuvi Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=ph_scale',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'Kislota va asoslarning H⁺ / OH⁻ ionlariga ajralishini va elektr muhitini virtual laboratoriyada tekshiring.',
      alternateSims: [
        { label: 'NaCl ion kristallining suvda ajralishi (3D)', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
      ],
      parametric: {
        mode: 'chem_solutions',
        title: 'Ionlar Konsentratsiyasi va Elektrolit O‘tkazuvchanligi',
        description: 'Erigan elektrolit miqdori ortgan sari eritmadagi erkin ionlar va elektr toki o‘sishini kuzating.',
        controls: [
          { key: 'solute', label: 'Elektrolit miqdori', unit: 'g', min: 10, max: 100, step: 5, value: 45 },
          { key: 'temp', label: 'Harorat', unit: '°C', min: 10, max: 90, step: 5, value: 30 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi moddalar suvda eriganda deyarli 100% ionlarga ajraladi (kuchli elektrolit)?', options: ['CH₃COOH va H₂CO₃', 'HCl, NaOH va NaCl', 'Glyukoza va spirt', 'NH₄OH va H₂S'], answer: 1, explain: 'Kuchli kislota (HCl), ishqor (NaOH) va eruvchan tuz (NaCl) suvda to‘liq dissotsilanadi.' },
      { q: 'Quyidagilardan qaysi biri noelektrolit (eritmasi elektr tokini o‘tkazmaydi)?', options: ['Kaliy sulfat', 'Sulfat kislota', 'Saxaroza (shakar) va etanol', 'Natriy gidroksid'], answer: 2, explain: 'Shakar va spirt kovalent molekulalar holida eriydi, ionlarga parchalanmaydi.' },
      { q: '$Na_2SO_4$ to‘liq dissotsilanganda 1 mol tuzdan jami necha mol ion hosil bo‘ladi?', options: ['1 mol', '2 mol', '3 mol', '4 mol'], answer: 2, explain: 'Na₂SO₄ → 2Na⁺ + SO₄²⁻ => 2 + 1 = 3 mol ion.' },
      { q: 'Kuchsiz kislota eritmasini suv qo‘shib suyultirsak, dissotsilanish darajasi $\\alpha$ qanday o‘zgaradi?', options: ['Kamayadi', 'Ortadi', 'O‘zgarmaydi', 'Nolga tushadi'], answer: 1, explain: 'Ostvald qonuni α = √(K/C) ga ko‘ra konsentratsiya kamayganda α ortadi.' },
      { q: 'Qaysi ionlar jufti bir eritmada uchrashsa cho‘kma hosil bo‘lib ion reaksiyasi oxirigacha boradi?', options: ['Na⁺ va NO₃⁻', 'Ba²⁺ va SO₄²⁻', 'K⁺ va Cl⁻', 'H⁺ va Cl⁻'], answer: 1, explain: 'BaSO₄ suvda va kislotalarda erimaydigan oq cho‘kma.' },
      { q: 'H⁺ + OH⁻ → H₂O qisqa ion tenglamasi qaysi reaksiya turiga mos keladi?', options: ['Kuchli kislota va ishqor neytrallanishi', 'Tuzlar cho‘kishi', 'Oksidlanish', 'Elektroliz'], answer: 0, explain: 'Masalan, HCl + NaOH → NaCl + H₂O.' },
      { q: 'Agar 200 ta kislota molekulasidan 10 tasi ionlarga ajralgan bo‘lsa, dissotsilanish darajasi α necha foiz?', options: ['2%', '5%', '10%', '20%'], answer: 1, explain: 'α = (10 / 200) · 100% = 5%.' },
      { q: '$FeCl_3$ va $KOH$ reaksiyasida qanday rangli cho‘kma hosil bo‘ladi?', options: ['Oq', 'Qo‘ng‘ir (qizil-jigarrang) Fe(OH)₃', 'Ko‘k', 'Qora'], answer: 1, explain: 'Fe³⁺ + 3OH⁻ → Fe(OH)₃↓ qo‘ng‘ir cho‘kma.' },
    ],
    problems: [
      { variants: [[40, 500], [15, 300], [6, 200], [120, 400]], build(i) { const [d, tot] = this.variants[i]; const a = (d / tot) * 100; return { q: `${tot} ta molekuladan ${d} tasi ionlarga ajralgan. Dissotsilanish darajasi α necha foiz?`, correct: Number(a.toFixed(1)), unit: '%', explain: `α = (${d}/${tot})·100% = ${a.toFixed(1)}%.` }; } },
      { variants: [[2, 3], [1, 2], [3, 4]], build(i) { const [nSalt, ions] = this.variants[i]; return { q: `Har 1 moli to‘liq dissotsilanganda ${ions} ta ion beradigan tuzdan ${nSalt} mol olindi. Eritmada jami necha mol ion bor?`, correct: nSalt * ions, unit: 'mol', explain: `${nSalt}·${ions} = ${nSalt * ions} mol ion.` }; } },
    ],
  },
  {
    id: 'C2B-3', code: 'K2B.3', sectionId: 'csec-2', subsectionId: 'C2B',
    subsectionTitle: 'B. Eritmalar va Elektrolitik Dissotsilanish',
    title: 'Suvning dissotsilanishi, pH va tuzlar gidrolizi',
    subtitle: 'Vodorod ko‘rsatkich (pH), indikatorlar, tuzlar gidrolizi, bufer eritmalar',
    theory: {
      overview:
        'Toza suv nihoyatda kuchsiz elektrolit bo‘lib qisman ionlanadi: $H_2O \\rightleftharpoons H^+ + OH^-$. $25^\\circ\\text{C}$ da suvning ion ko‘paytmasi $K_w = [H^+][OH^-] = 10^{-14}$. Muhit xarakteri vodorod ko‘rsatkich $\\text{pH} = -\\log_{10}[H^+]$ bilan belgilanadi: $\\text{pH} = 7$ — neytral, $\\text{pH} < 7$ — kislotali (lakmus qizil, metiloranj qizil), $\\text{pH} > 7$ — ishqoriy (lakmus ko‘k, fenolftalein malina-pushti). Tuz ionlarining suv bilan qaytar ta’sirlashib kuchsiz kislota yoki asos hosil qilishi tuzlar gidrolizi deyiladi: kuchli asos + kuchsiz kislota tuzi ($Na_2CO_3$) ishqoriy ($\text{pH}>7$), kuchsiz asos + kuchli kislota tuzi ($NH_4Cl, AlCl_3$) kislotali ($\text{pH}<7$) muhit beradi; kuchli + kuchli ($NaCl$) gidrolizlanmaydi ($\text{pH}=7$).',
      keyLaws: [
        { title: 'pH + pOH = 14 qonuni', text: '$25^\\circ\\text{C}$ da har qanday suvli eritmada $[H^+]\\cdot[OH^-] = 10^{-14}$, ya’ni $\\text{pH} + \\text{pOH} = 14$.' },
        { title: 'Gidroliz qoidasi (Kuchli tomon g‘alaba qiladi)', text: 'Tuzning muhitini uni hosil qilgan kuchli tarkibiy qism belgilaydi: $Na_2CO_3$ (kuchli $NaOH$) → ishqoriy; $CuSO_4$ (kuchli $H_2SO_4$) → kislotali.' },
      ],
      formulas: [
        { latex: '\\text{pH} = -\\log_{10}[H^+], \\quad \\text{pH} + \\text{pOH} = 14', name: 'Vodorod ko‘rsatkich formulasi', symbols: '[H^+] = 10^{-\\text{pH}}' },
        { latex: '\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{tuz}]}{[\\text{kislota}]}', name: 'Genderson-Xasselbax bufer tenglamasi', symbols: 'Bufer eritma oz kislota/ishqor qo‘shilganda pH ni ushlab turadi' },
      ],
      constants: [
        { name: 'Suvning ion ko‘paytmasi (25 °C)', symbol: 'K_w', value: '1.0 × 10⁻¹⁴', unit: 'mol²/L²' },
        { name: 'Odam qoni fiziologik pH i (bufer)', symbol: 'pH(qon)', value: '7.35 – 7.45', unit: '(karbonat/fosfat bufer)' },
      ],
      applications: [
        'Qon pH ini $7.4$ atrofida ushlab turuvchi gidrokarbonat ($H_2CO_3/NaHCO_3$) bufer tizimi hayotiy zaruratdir.',
        'Tuproq va oqova suvlar kislotaliligi pH-metrlar bilan nazorat qilinib ohaklash yoki neytrallash rejalashtiriladi.',
      ],
      calculator: {
        title: 'pH, pOH va [H⁺] / [OH⁻] Kalkulyatori',
        formulaDisplay: 'pH = −log₁₀[H⁺],   pOH = 14 − pH',
        inputs: [
          { key: 'exp', label: '[H⁺] darajasi (10⁻ˣ M), x =', symbol: 'pH', unit: '', min: 0, max: 14, step: 0.2, default: 3.0 },
        ],
        compute: (v) => {
          const pH = v.exp;
          const pOH = 14 - pH;
          const ind = pH < 7 ? 'KISLOTALI · Lakmus: Qizil · Fenolftalein: Rangsiz' : pH > 7 ? 'ISHQORIY · Lakmus: Ko‘k · Fenolftalein: Pushti' : 'NEYTRAL · Lakmus: Binafsha';
          return { value: `pH = ${pH.toFixed(1)}`, unit: '', summary: `pOH = ${pOH.toFixed(1)} | [H⁺] = ${Math.pow(10, -pH).toExponential(1)} M | ${ind}` };
        },
      },
    },
    simulation: {
      title: 'PhET pH Shkalasi, Indikatorlar va Gidroliz Virtual Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=ph_scale',
      openSourceSource: 'PhET Interactive Sims',
      openSourceNote: 'pH qiymatini 1 dan 14 gacha siljitib, H⁺/OH⁻ muvozanati va indikator rangini tekshiring (PhET HTML5 bilan birga).',
      alternateSims: [
        { label: 'Kislota-asosli titrlash (ChemCollective)', source: 'ChemCollective', url: 'sims/chem3d/vlab.html?lab=titration' },
      ],
      parametric: {
        mode: 'chem_ph_titration',
        title: 'pH Shkalasi va Titrlash Egri Chizig‘i Stendi',
        description: 'Ishqor hajmini qo‘shib borib, pH ning sakrash nuqtasini (ekvivalent nuqta) kuzating.',
        controls: [
          { key: 'pH', label: 'Eritma pH', unit: '', min: 1, max: 14, step: 0.2, value: 4.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Agar eritmada $[H^+] = 10^{-3}\\text{ mol/L}$ bo‘lsa, uning pH va pOH qiymatlari nechaga teng?', options: ['pH = 3, pOH = 11', 'pH = 11, pOH = 3', 'pH = 7, pOH = 7', 'pH = 4, pOH = 10'], answer: 0, explain: 'pH = −log(10⁻³) = 3; pOH = 14 − 3 = 11.' },
      { q: 'Qaysi tuz suvda eritilganda ishqoriy muhit (pH > 7, fenolftaleinni qizartiradi) beradi?', options: ['NaCl', 'NH₄Cl', 'Na₂CO₃ (soda)', 'CuSO₄'], answer: 2, explain: 'Na₂CO₃ kuchli asos NaOH va kuchsiz kislota H₂CO₃ dan hosil bo‘lgan, anion bo‘yicha gidrolizlanib OH⁻ chiqaradi.' },
      { q: 'Qaysi tuz suvda umuman gidrolizlanmaydi (pH = 7)?', options: ['KNO₃ va NaCl', 'AlCl₃', 'CH₃COONa', 'Fe₂(SO₄)₃'], answer: 0, explain: 'Kuchli asos va kuchli kislota tuzlari suv bilan ta’sirlashmaydi.' },
      { q: 'Ishqoriy eritmada fenolftalein indikatori qanday rangga kiradi?', options: ['Rangsiz qoladi', 'Sariq', 'To‘q malina-pushti', 'Ko‘k'], answer: 2, explain: 'Fenolftalein kislotali va neytral muhitda rangsiz, ishqoriy muhitda (pH > 8.2) yorqin pushti rang beradi.' },
      { q: 'Aluminiy xlorid ($AlCl_3$) eritmasida muhit qanday bo‘ladi?', options: ['Kislotali (pH < 7)', 'Ishqoriy (pH > 7)', 'Neytral (pH = 7)', 'Amfoter'], answer: 0, explain: 'Al(OH)₃ kuchsiz asos va HCl kuchli kislota -> kation bo‘yicha gidroliz => kislotali muhit.' },
      { q: 'Oz miqdorda kuchli kislota yoki ishqor qo‘shilganda ham o‘z pH qiymatini deyarli o‘zgartirmaydigan eritma nima deyiladi?', options: ['Indikator', 'Bufer eritma', 'To‘yingan eritma', 'Katalizator'], answer: 1, explain: 'Bufer eritmalar kuchsiz kislota va uning kuchli asosli tuzi aralashmasidan iborat.' },
      { q: 'Eritma pH i 4 dan 6 gacha ko‘tarilsa, vodorod ionlari konsentratsiyasi $[H^+]$ necha marta kamayadi?', options: ['2 marta', '10 marta', '100 marta', '1000 marta'], answer: 2, explain: 'Logarifmik shkala bo‘yicha ΔpH = 2 => 10² = 100 marta kamayadi.' },
      { q: '0.01 M li $HCl$ eritmasining pH qiymati nechaga teng?', options: ['1', '2', '12', '13'], answer: 1, explain: '[H⁺] = 0.01 = 10⁻² M => pH = 2.' },
    ],
    problems: [
      { variants: [[2], [4], [5], [11]], build(i) { const [ph] = this.variants[i]; return { q: `25 °C da eritmaning vodorod ko‘rsatkichi pH = ${ph}. Uning pOH qiymatini toping.`, correct: 14 - ph, unit: '', explain: `pOH = 14 − ${ph} = ${14 - ph}.` }; } },
      { variants: [[3], [1], [6], [2]], build(i) { const [dp] = this.variants[i]; return { q: `Eritma suyultirilganda uning pH qiymati ${dp} birlikka oshdi. [H⁺] konsentratsiyasi necha marta kamaygan?`, correct: Math.pow(10, dp), unit: 'marta', explain: `10^${dp} = ${Math.pow(10, dp)} marta.` }; } },
    ],
  },
  {
    id: 'C2C-1', code: 'K2C.1', sectionId: 'csec-2', subsectionId: 'C2C',
    subsectionTitle: 'C. OQR va Elektrokimyo',
    title: 'Oksidlanish-Qaytarilish Reaksiyalari (OQR) asoslari',
    subtitle: 'Oksidlovchi va qaytaruvchi, elektron balans usuli, yarim reaksiyalar (ion-elektron) usuli',
    theory: {
      overview:
        'Element atomlari oksidlanish darajasining o‘zgarishi bilan kechadigan reaksiyalar Oksidlanish-Qaytarilish Reaksiyalari (OQR) deyiladi. Elektron berish jarayoni oksidlanish (OD ortadi; elektron beruvchi zarracha — qaytaruvchi), elektron olish jarayoni qaytarilish (OD kamayadi; elektron oluvchi — oksidlovchi) deb ataladi. OQR tenglamalarini tenglashtirishning ikki asosiy usuli bor: 1) Elektron balans usuli — qaytaruvchi bergan elektronlar soni oksidlovchi qabul qilgan elektronlar soniga tenglashtiriladi; 2) Ion-elektron (yarim reaksiyalar) usuli — ayniqsa muhit ($H^+$ kislotali, $OH^-$ ishqoriy, $H_2O$ neytral) ta’sirida kechadigan reaksiyalarda aniq natija beradi.',
      keyLaws: [
        { title: 'Oksidlovchi va Qaytaruvchi xossasi', text: 'Eng yuqori OD dagi element ($Mn^{+7}$ in $KMnO_4$, $Cr^{+6}$ in $K_2Cr_2O_7$, $N^{+5}$ in $HNO_3$) faqat oksidlovchi; eng quyi OD dagi ($S^{-2}$, $I^-$, $NH_3$, metallar) faqat qaytaruvchi; oraliq OD dagilar ($SO_2$, $NO_2^-$, $H_2O_2$) ham oksidlovchi, ham qaytaruvchi bo‘la oladi.' },
        { title: 'Elektron balans tengligi', text: '$n_{\\text{berilgan } e^-} = n_{\\text{olingan } e^-}$.' },
      ],
      formulas: [
        { latex: '\\text{MnO}_4^- + 8H^+ + 5e^- \\to \\text{Mn}^{2+} + 4H_2O', name: 'KMnO₄ ning kislotali muhitda qaytarilishi', symbols: 'Binafsha eritma rangsizlanadi (ΔOD = 5)' },
        { latex: '\\text{Cr}_2\\text{O}_7^{2-} + 14H^+ + 6e^- \\to 2\\text{Cr}^{3+} + 7H_2O', name: 'Bixromatning kislotali yarim reaksiyasi', symbols: 'To‘q sariqdan yashilga o‘tadi (6e⁻)' },
      ],
      constants: [
        { name: 'KMnO₄ neytral muhitdagi mahsuloti', symbol: 'MnO₂↓', value: '+7 → +4 (3e⁻)', unit: 'qo‘ng‘ir cho‘kma' },
        { name: 'KMnO₄ ishqoriy muhitdagi mahsuloti', symbol: 'K₂MnO₄', value: '+7 → +6 (1e⁻)', unit: 'yashil eritma' },
      ],
      applications: [
        'Nafas alkotesteri haydovchi nafasidagi etanolning to‘q sariq $K_2Cr_2O_7$ ni yashil $Cr^{3+}$ gacha qaytarish OQR reaksiyasiga asoslangan.',
        'Metallurgiyada rudalardan temir, mis, alyuminiy olish to‘liq qaytarish OQR jarayonidir.',
      ],
      calculator: {
        title: 'OQR Elektron Balans EKUK va Koeffitsiyent Kalkulyatori',
        formulaDisplay: 'e_qayt · a = e_oks · b (EKUK orqali)',
        inputs: [
          { key: 'eLose', label: '1 ta qaytaruvchi beradigan elektronlar', symbol: 'n₁', unit: 'e⁻', min: 1, max: 8, step: 1, default: 2 },
          { key: 'eGain', label: '1 ta oksidlovchi oladigan elektronlar', symbol: 'n₂', unit: 'e⁻', min: 1, max: 8, step: 1, default: 5 },
        ],
        compute: (v) => {
          const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
          const g = gcd(v.eLose, v.eGain);
          const ekuk = (v.eLose * v.eGain) / g;
          return { value: `${ekuk / v.eLose} Qayt + ${ekuk / v.eGain} Oks`, unit: '', summary: `EKUK(almashilgan elektronlar) = ${ekuk} e⁻ | Qaytaruvchi oldiga ${ekuk / v.eLose}, oksidlovchi oldiga ${ekuk / v.eGain} koeffitsiyent qo‘yiladi.` };
        },
      },
    },
    simulation: {
      title: 'OQR Yarim Reaksiyalar va Galvanik Tajriba Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=redox_galvanic',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Oksidlovchi va qaytaruvchi juftliklarni tanlab elektronlar ko‘chishi va EYUK ni kuzating.',
      alternateSims: [
        { label: 'Titrlash (OQR / Kislota-asos)', source: 'ChemCollective', url: 'sims/chem3d/vlab.html?lab=titration' },
      ],
      parametric: {
        mode: 'chem_electrochem',
        title: 'Oksidlanish-Qaytarilish Elektron Oqimi Stendi',
        description: 'Elektrodlar potensial farqini o‘zgartirib, elektronlarning qaytaruvchidan oksidlovchiga o‘tish tezligini ko‘ring.',
        controls: [
          { key: 'E', label: 'Standart EYUK', unit: 'V', min: 0.2, max: 3.2, step: 0.1, value: 1.1 },
          { key: 'I', label: 'Tok kuchi I', unit: 'A', min: 0.5, max: 8.0, step: 0.5, value: 2.5 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Kimyoviy reaksiyada elektronlarni biriktirib oluvchi (kamayish tomoniga o‘tuvchi) modda nima deyiladi?', options: ['Qaytaruvchi', 'Oksidlovchi', 'Katalizator', 'Elektrolit'], answer: 1, explain: 'Oksidlovchi elektron olib o‘zi qaytariladi (OD si pasayadi).' },
      { q: 'Kaliy permanganat ($KMnO_4$) kislotali muhitda ($H_2SO_4$) qaytarilganda marganetsning oksidlanish darajasi +7 dan nechaga tushadi?', options: ['+6 (K₂MnO₄)', '+4 (MnO₂)', '+2 (Mn²⁺)', '0 (Mn)'], answer: 2, explain: 'Kislotali muhitda rangsiz Mn²⁺ (5 ta elektron biriktiradi) hosil bo‘ladi.' },
      { q: 'Qaysi zarracha faqat oksidlovchi xossasini namoyon eta oladi?', options: ['$H_2S$', '$SO_2$', '$HNO_3$ (N⁺⁵)', '$Fe$'], answer: 2, explain: 'Azot +5 eng yuqori oksidlanish darajasida bo‘lgani uchun elektron bera olmaydi, faqat oladi.' },
      { q: '$Zn + H_2SO_4 \\to ZnSO_4 + H_2\\uparrow$ reaksiyasida rux qanday rol o‘ynaydi?', options: ['Oksidlovchi', 'Qaytaruvchi (2e⁻ beradi)', 'Katalizator', 'Erituvchi'], answer: 1, explain: 'Zn⁰ − 2e⁻ → Zn²⁺ (oksidlanadi, ya’ni qaytaruvchi).' },
      { q: 'Qaysi modda ham oksidlovchi, ham qaytaruvchi bo‘la oladi (OQR amfoterligi)?', options: ['$KMnO_4$', '$SO_2$ (S⁺⁴) va $H_2O_2$ (O⁻¹)', '$Na$', '$F_2$'], answer: 1, explain: 'Oraliq oksidlanish darajasidagi oltingugurt (+4) ham +6 gacha ko‘tarilishi, ham 0/−2 gacha tushishi mumkin.' },
      { q: 'Disproporsiyalanish (o‘z-o‘zidan oksidlanish-qaytarilish) reaksiyasiga misol qaysi?', options: ['$Cl_2 + 2KOH \\to KCl + KClO + H_2O$', '$NaOH + HCl \\to NaCl + H_2O$', '$CaCO_3 \\to CaO + CO_2$', '$2H_2 + O_2 \\to 2H_2O$'], answer: 0, explain: 'Xlor (0) bir vaqtning o‘zida ham Cl⁻ (−1) ga qaytariladi, ham Cl⁺ (+1) ga oksidlanadi.' },
      { q: 'Kuchli qaytaruvchilar qatoriga qaysilar kiradi?', options: ['F₂, O₃, KMnO₄', 'Ishqoriy metallar (K, Na), H₂S, CO, C', 'Inert gazlar', 'Sulfat kislota'], answer: 1, explain: 'Metallar va quyi OD dagi metallmas birikmalari elektronini oson berib kuchli qaytaruvchilik qiladi.' },
      { q: '$Cu + 4HNO_3(\\text{kons}) \\to Cu(NO_3)_2 + 2NO_2\\uparrow + 2H_2O$ reaksiyasida 1 mol mis necha mol elektron beradi?', options: ['1 mol', '2 mol', '4 mol', '6 mol'], answer: 1, explain: 'Cu⁰ − 2e⁻ → Cu²⁺: 1 mol Cu 2 mol elektron beradi.' },
    ],
    problems: [
      { variants: [[5, 2], [3, 2], [6, 1], [5, 1]], build(i) { const [n1, n2] = this.variants[i]; const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); const lcm = (n1 * n2) / gcd(n1, n2); return { q: `Oksidlovchi ${n1}e⁻ oladi, qaytaruvchi ${n2}e⁻ beradi. Elektron balansda almashinadigan umumiy elektronlar soni (EKUK) nechta?`, correct: lcm, unit: 'e⁻', explain: `EKUK(${n1}, ${n2}) = ${lcm}.` }; } },
      { variants: [[7, 2], [6, 3], [7, 4], [5, 2]], build(i) { const [a, b] = this.variants[i]; return { q: `Element reaksiyada +${a} oksidlanish darajasidan +${b} darajasigacha qaytarildi. Bitta atom nechta elektron biriktirgan?`, correct: a - b, unit: 'e⁻', explain: `${a} − ${b} = ${a - b} ta elektron.` }; } },
    ],
  },
  {
    id: 'C2C-2', code: 'K2C.2', sectionId: 'csec-2', subsectionId: 'C2C',
    subsectionTitle: 'C. OQR va Elektrokimyo',
    title: 'Elektrokimyo, kuchlanishlar qatori, galvanik element va korroziya',
    subtitle: 'Metallarning elektrokimyoviy kuchlanishlar qatori, galvanik elementlar, akkumulyatorlar, metallar korroziyasi va undan himoyalanish',
    theory: {
      overview:
        'Metallar suvdagi eritmalardagi faolligiga ko‘ra standart elektrod potensiallari ($E^\\circ$) o‘sish tartibida Beketov kuchlanishlar qatoriga terilgan: $Li..K..Mg..Zn..Fe..(H_2)..Cu..Ag..Au$. Vodoroddan chapdagi metallar ($E^\\circ < 0$) suyultirilgan kislotalardan $H_2$ ni siqib chiqaradi; har bir oldingi metall o‘zidan keyingi metallni tuz eritmasidan siqib chiqaradi. Galvanik element (Daniel-Yakobi $Zn | ZnSO_4 || CuSO_4 | Cu$) kimyoviy OQR energiyasini bevosita elektr tokiga aylantiradi: faolroq metall Anod (−, oksidlanadi), passivroq metall Katod (+, qaytariladi), $E_{\\text{EYUK}} = E_{\\text{kat}}^\\circ - E_{\\text{an}}^\\circ$. Akkumulyatorlar qayta zaryadlanuvchi elementlardir (qo‘rg‘oshinli, Li-ion). Korroziya — metallarning atrof-muhit ta’sirida yemirilishi bo‘lib, qoplamalar, legirlash va protektor (masalan, kemaga rux ulash) orqali himoya qilinadi.',
      keyLaws: [
        { title: 'Galvanik element qutblari (Anod = Oksidlanish)', text: 'Har doim Anodda oksidlanish ($Zn \\to Zn^{2+} + 2e^-$), Katodda qaytarilish ($Cu^{2+} + 2e^- \\to Cu$) boradi. Galvanik elementda anod (−), elektrolizerda esa anod (+) bo‘ladi.' },
        { title: 'Protektor himoya qoidasi', text: 'Po‘lat quvur yoki kema korpusiga undan faolroq metall ($Mg$ yoki $Zn$) ulansa, korroziya avval protektorni yemirib asosiy konstruksiyani saqlab qoladi.' },
      ],
      formulas: [
        { latex: 'E_{\\text{EYUK}}^\\circ = E_{\\text{katod}}^\\circ - E_{\\text{anod}}^\\circ', name: 'Galvanik element standart EYUK i', symbols: 'E(H⁺/H₂) = 0.00 V etalon' },
        { latex: 'E = E^\\circ + \\frac{0.059}{n}\\log[\\text{Me}^{n+}]', name: 'Nernst tenglamasi (25 °C)', symbols: 'Elektrod potensialining konsentratsiyaga bog‘liqligi' },
      ],
      constants: [
        { name: 'Rux standart potensiali E°(Zn²⁺/Zn)', symbol: 'E°(Zn)', value: '−0.76', unit: 'V' },
        { name: 'Mis standart potensiali E°(Cu²⁺/Cu)', symbol: 'E°(Cu)', value: '+0.34', unit: 'V' },
      ],
      applications: [
        'Litiy-ion akkumulyatorlar ($LiCoO_2 / C_6$) zamonaviy smartfonlar va elektromobillarda yuqori energiya zichligi beradi.',
        'Zanglamaydigan po‘lat tarkibiga xrom va nikel qo‘shish (legirlash) passiv oksid parda hosil qilib korroziyadan himoya qiladi.',
      ],
      calculator: {
        title: 'Galvanik Element EYUK Kalkulyatori',
        formulaDisplay: 'EYUK = E°(Katod) − E°(Anod)',
        inputs: [
          { key: 'eKat', label: 'Katod standart potensiali E°_kat', symbol: 'E°_k', unit: 'V', min: -0.5, max: 1.5, step: 0.02, default: 0.34 },
          { key: 'eAn', label: 'Anod standart potensiali E°_an', symbol: 'E°_a', unit: 'V', min: -3.1, max: 0.2, step: 0.02, default: -0.76 },
        ],
        compute: (v) => {
          const emf = v.eKat - v.eAn;
          return { value: `${emf.toFixed(2)} V`, unit: '', summary: `Element kuchlanishi = ${emf.toFixed(2)} V | Elektronlar anoddan katodga oqadi.` };
        },
      },
    },
    simulation: {
      title: 'Daniel-Yakobi Galvanik Elementi Virtual Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=redox_galvanic',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Turli metall juftliklarini (Zn, Mg, Fe vs Cu, Ag) tanlab galvanik element EYUK ini o‘lchang.',
      alternateSims: [
        { label: 'Elektroliz va Faraday tajribasi', source: 'VLab', url: 'sims/chem3d/vlab.html?lab=redox_galvanic' },
      ],
      parametric: {
        mode: 'chem_electrochem',
        title: 'Galvanik Element Elektronlar Oqimi Simulyatori',
        description: 'EYUK va yuklama tokini o‘zgartirib, elektronlar oqimini va elektrod massasi o‘zgarishini kuzating.',
        controls: [
          { key: 'E', label: 'Element EYUK', unit: 'V', min: 0.4, max: 3.5, step: 0.1, value: 1.1 },
          { key: 'I', label: 'Tok kuchi', unit: 'A', min: 0.5, max: 6.0, step: 0.5, value: 2.0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Daniel-Yakobi galvanik elementida ($Zn | ZnSO_4 || CuSO_4 | Cu$) rux ($E^\\circ = -0.76\\text{ V}$) va mis ($+0.34\\text{ V}$) ishlatilsa, EYUK necha volt bo‘ladi?', options: ['0.42 V', '1.10 V', '−1.10 V', '2.20 V'], answer: 1, explain: 'EYUK = 0.34 − (−0.76) = 1.10 V.' },
      { q: 'Qaysi metall suyultirilgan xlorid kislotadan ($HCl$) vodorod gazini siqib chiqara OLMAYDI?', options: ['Rux (Zn)', 'Temir (Fe)', 'Mis (Cu)', 'Magniy (Mg)'], answer: 2, explain: 'Mis elektrokuchlanish qatorida vodoroddan o‘ngda (+0.34 V) joylashgan.' },
      { q: 'Galvanik element ishlayotganda qaysi elektrodda oksidlanish jarayoni sodir bo‘ladi?', options: ['Katodda', 'Anodda (faolroq metallda)', 'Tuz ko‘prigida', 'Hech birida'], answer: 1, explain: 'Har qanday elektrokimyoviy tizimda oksidlanish anodda boradi.' },
      { q: 'Po‘lat quvurni tuproqda korroziyadan saqlash uchun unga rux yoki magniy bo‘lagi ulanadi. Bu usul qanday nomlanadi?', options: ['Legirlash', 'Protektorli himoya', 'Ingibirlash', 'Passivatsiya'], answer: 1, explain: 'Faolroq metall (protektor) o‘zini qurbon qilib anod sifatida eriydi, po‘latni saqlaydi.' },
      { q: 'Birlamchi batareyadan farqli o‘laroq akkumulyatorning asosiy xususiyati nima?', options: ['Tashqi tok bilan zaryadlab ko‘p marta qayta ishlatish mumkin', 'Faqat bir marta ishlaydi', 'Suvsiz ishlaydi', 'Metall emas'], answer: 0, explain: 'Akkumulyatorda elektrokimyoviy reaksiya qaytardir.' },
      { q: 'Temir mixni mis kuporosi ($CuSO_4$) eritmasiga solganda mix sirtida qizil mis qoplanadi. Buning sababi nima?', options: ['Fe qatorda Cu dan chapda (faolroq) turadi va Cu²⁺ ni qaytaradi', 'Cu faolroq', 'Eritma qiziydi', 'Gidroliz sodir bo‘ladi'], answer: 0, explain: 'Fe + Cu²⁺ → Fe²⁺ + Cu↓.' },
      { q: 'Metallarning kislorod va suv bilan nam muhitda o‘z-o‘zidan zanglashi qaysi jarayonga kiradi?', options: ['Elektrokimyoviy korroziya', 'Sublimatsiya', 'Polimerlanish', 'Kataliz'], answer: 0, explain: 'Nam havoda mikrogalvanik juftliklar hosil bo‘lib temirni oksidlaydi.' },
      { q: 'Beketov qatorida eng chapda joylashgan eng faol metall qaysi?', options: ['Temir (Fe)', 'Litiy (Li)', 'Oltin (Au)', 'Kumush (Ag)'], answer: 1, explain: 'Litiy E° = −3.04 V bilan qatorning boshida turadi.' },
    ],
    problems: [
      { variants: [[0.34, -0.76], [0.80, -0.76], [0.34, -2.37], [0.80, -0.44]], build(i) { const [k, a] = this.variants[i]; const e = k - a; return { q: `Katod potensiali +${k} V, anod potensiali ${a} V. Galvanik elementning standart EYUK i (V) nechaga teng?`, correct: Number(e.toFixed(2)), unit: 'V', explain: `E = ${k} − (${a}) = ${e.toFixed(2)} V.` }; } },
      { variants: [[56, 64, 0.5], [65, 64, 0.2], [56, 216, 0.1]], build(i) { const [mf, mc, n] = this.variants[i]; const dm = (mc - mf) * n; return { q: `Fe/Zn (M=${mf}) plastinka CuSO₄/AgNO₃ eritmasiga tushirildi va ${n} mol metall (M=${mc}) ajraldi. Plastinka massasi necha grammga og‘irlashgan?`, correct: Number(dm.toFixed(1)), unit: 'g', explain: `Δm = ${n}·(${mc} − ${mf}) = ${dm.toFixed(1)} g.` }; } },
    ],
  },
  {
    id: 'C2C-3', code: 'K2C.3', sectionId: 'csec-2', subsectionId: 'C2C',
    subsectionTitle: 'C. OQR va Elektrokimyo',
    title: 'Elektroliz va Faradey qonunlari',
    subtitle: 'Suyuqlanmalar va suvli eritmalar elektrolizi, Faradey qonunlari',
    theory: {
      overview:
        'Elektroliz — tashqi o‘zgarmas elektr toki ta’sirida elektrolit suyuqlanmasi yoki eritmasi elektrodlari ustida sodir bo‘ladigan oksidlanish-qaytarilish jarayonidir. Katodda (−) qaytarilish, anodda (+) oksidlanish ketadi. Suyuqlanmalar elektrolizida barcha faol metallar ($Na, Ca, Al$) olinadi. Suvli eritmalar elektrolizida esa katodda Beketov qatoridagi metall faolligiga qarab $Me^{n+}$ yoki suvdan $H_2$ ajraladi ($Li..Al$ oralig‘ida katodda faqat $H_2$, $Zn..H$ da metall ham $H_2$ ham, $Cu..Au$ da faqat metall). Inert anodda kislorodsiz anionlar ($Cl^-, Br^-, I^-$) oksidlanadi, kislorodli kislota qoldiqlari ($SO_4^{2-}, NO_3^-$) o‘rniga esa suvdan $O_2$ ajraladi. Ajralgan modda massasi Faradey qonuni bilan topiladi: $m = (M\\cdot I\\cdot t)/(n\\cdot F)$.',
      keyLaws: [
        { title: 'Katoddagi tanlov qoidasi (suvli eritma)', text: 'Li–Al tuzlari eritmasida metall ajralmaydi (katodda $2H_2O + 2e^- \\to H_2\\uparrow + 2OH^-$); $Cu, Ag, Hg, Au$ da faqat toza metall cho‘kadi.' },
        { title: 'Faradey elektroliz qonuni', text: '1 mol ekvivalent modda ajralishi uchun $1\\text{ F} = 96\\,485\\text{ C/mol}$ elektr miqdori sarflanadi: $m = \\frac{M \\cdot I \\cdot t}{z \\cdot F}$.' },
      ],
      formulas: [
        { latex: 'm = \\frac{M \\cdot I \\cdot t}{z \\cdot F}', name: 'Faradey birlashgan elektroliz qonuni', symbols: 'z — elektronlar soni, F = 96485 C/mol' },
        { latex: '2\\text{NaCl} + 2H_2O \\xrightarrow{\\text{tok}} H_2\\uparrow + Cl_2\\uparrow + 2\\text{NaOH}', name: 'Osh tuzi eritmasi elektrolizi', symbols: 'Katodda H₂, anodda Cl₂, eritmada NaOH' },
      ],
      constants: [
        { name: 'Faradey doimiysi', symbol: 'F', value: '96 485', unit: 'C/mol' },
        { name: '1 mol gaz H₂ uchun tok', symbol: 'Q(1 mol H₂)', value: '2 · 96485 = 192 970', unit: 'C' },
      ],
      applications: [
        'Boksitdan kriolit suyuqlanmasida elektroliz bilan alyuminiy ($Al$) va osh tuzidan natriy/xlor/ishqor sanoat miqyosida olinadi.',
        'Galvanostegiya va galvanoplastika detallarni xrom, nikel, oltin bilan yupqa qoplashda qo‘llaniladi.',
      ],
      calculator: {
        title: 'Faradey Elektroliz Massasi Kalkulyatori',
        formulaDisplay: 'm = (M · I · t) / (z · 96485)',
        inputs: [
          { key: 'M', label: 'Metall molyar massasi M (Cu=64, Ag=108)', symbol: 'M', unit: 'g/mol', min: 23, max: 207, step: 1, default: 64 },
          { key: 'z', label: 'Ion zaryadi z', symbol: 'z', unit: '', min: 1, max: 3, step: 1, default: 2 },
          { key: 'I', label: 'Tok kuchi I', symbol: 'I', unit: 'A', min: 1, max: 50, step: 1, default: 10 },
          { key: 'tMin', label: 'Vaqt t', symbol: 't', unit: 'min', min: 5, max: 120, step: 5, default: 30 },
        ],
        compute: (v) => {
          const m = (v.M * v.I * (v.tMin * 60)) / (v.z * 96485);
          return { value: `${m.toFixed(2)} g`, unit: '', summary: `${(v.I * v.tMin * 60 / 96485).toFixed(3)} Faradey zaryad o‘tdi | Ajralgan modda massasi: ${m.toFixed(2)} g` };
        },
      },
    },
    simulation: {
      title: 'Elektroliz Jarayoni va Faradey Qonuni Laboratoriyasi',
      openSourceUrl: 'sims/chem3d/vlab.html?lab=redox_galvanic',
      openSourceSource: 'ChemCollective · PhET',
      openSourceNote: 'Elektroliz reaktorida elektr toki va elektrodlar ustidagi mahsulotlarni kuzating.',
      alternateSims: [
        { label: 'Ion panjarali NaCl 3D', source: '3Dmol.js', url: 'sims/chem3d/mol3d.html?mol=nacl_lattice' },
      ],
      parametric: {
        mode: 'chem_electrochem',
        title: 'Elektrolizer Katod Massasi va Tok Stendi',
        description: 'Tok kuchi va kuchlanishni oshirib, katodda metall ajralish tezligini o‘lchang.',
        controls: [
          { key: 'E', label: 'Elektroliz kuchlanishi', unit: 'V', min: 1.5, max: 12.0, step: 0.5, value: 4.5 },
          { key: 'I', label: 'Tok kuchi I', unit: 'A', min: 1, max: 20, step: 1, value: 8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Osh tuzi ($NaCl$) suvli eritmasi inert elektrodlarda elektroliz qilinsa, katodda va anodda nima ajraladi?', options: ['Katodda Na, anodda O₂', 'Katodda H₂, anodda Cl₂ (eritmada NaOH)', 'Katodda Na, anodda Cl₂', 'Faqat H₂ va O₂'], answer: 1, explain: 'Na faol metall bo‘lgani uchun katodda suvdan H₂, anodda esa kislorodsiz xlorid ionidan Cl₂ ajraladi.' },
      { q: 'Mis (II) sulfat ($CuSO_4$) suvli eritmasi elektroliz qilinganda katod va anodda nima hosil bo‘ladi?', options: ['Katodda H₂, anodda SO₂', 'Katodda Cu (sof mis), anodda O₂ gazi', 'Katodda Cu, anodda SO₃', 'Katodda H₂, anodda O₂'], answer: 1, explain: 'Cu passiv metall bo‘lgani uchun katodga o‘tiradi; kislorodli SO₄²⁻ o‘rniga suv anodda O₂ ajratadi.' },
      { q: 'Sanoatda sof natriy ($Na$) va alyuminiy ($Al$) olish uchun qaysi usuldan foydalaniladi?', options: ['Suvli eritmalar elektrolizi', 'Tuz va oksidlarning suyuqlanmasi elektrolizi', 'Suv bilan qaytarish', 'Distillyatsiya'], answer: 1, explain: 'Suvli eritmada faol metallar o‘rniga H₂ chiqadi; shuning uchun suvsiz suyuqlanma elektroliz qilinadi.' },
      { q: '1 Faradey elektr miqdori nechaga teng?', options: ['1.6·10⁻¹⁹ C', '96 485 C/mol', '6.02·10²³ C', '8.31 C'], answer: 1, explain: 'F = e · N_A ≈ 96 485 Kulon/mol.' },
      { q: 'Kaliy sulfat ($K_2SO_4$) suvli eritmasi elektrolizida amalda qaysi modda parchalanadi?', options: ['Faqat suv (katodda H₂, anodda O₂)', 'Kaliy ajraladi', 'Oltingugurt chiqadi', 'Reaksiya bormaydi'], answer: 0, explain: 'K⁺ va SO₄²⁻ ikkalasi ham suvdan passiv (elektrolizga uchramaydi), natijada suv parchalanadi.' },
      { q: 'Mis ($Cu$, M=64, z=2) tuzidan 1 Faradey tok o‘tkazilganda necha gramm mis ajraladi?', options: ['64 g', '32 g', '16 g', '128 g'], answer: 1, explain: 'm = M / z = 64 / 2 = 32 g (1 ekvivalent massa).' },
      { q: 'Elektrolizerda anodning elektr zaryad ishorasi va undagi jarayon qanday?', options: ['Manfiy (−), qaytarilish', 'Musbat (+), oksidlanish', 'Neytral', 'Musbat (+), qaytarilish'], answer: 1, explain: 'Elektrolizerda tashqi manba musbat qutbi anodga ulanadi va unda oksidlanish boradi.' },
      { q: 'AgNO₃ eritmasidan 2 Faradey tok o‘tkazilsa, katodda necha gramm kumush ($A_r=108$, $z=1$) ajraladi?', options: ['54 g', '108 g', '216 g', '432 g'], answer: 2, explain: '2 Faradey => 2 mol Ag = 2 · 108 = 216 g.' },
    ],
    problems: [
      { variants: [[64, 2, 2], [108, 1, 1], [27, 3, 3], [56, 2, 2]], build(i) { const [M, z, Fnum] = this.variants[i]; const m = (M / z) * Fnum; return { q: `M = ${M} g/mol, z = ${z} valentli metall tuzi eritmasidan ${Fnum} Faradey tok o‘tkazildi. Katodda necha gramm metall ajraladi?`, correct: Number(m.toFixed(1)), unit: 'g', explain: `m = (${M}/${z}) · ${Fnum} = ${m.toFixed(1)} g.` }; } },
      { variants: [[1, 11.2], [2, 22.4], [0.5, 5.6]], build(i) { const [Fnum, vL] = this.variants[i]; return { q: `Suv elektrolizida ${Fnum} Faradey elektr miqdori o‘tkazilsa, katodda n.sh. da necha litr H₂ gazi ajraladi? (1 ekv = 11.2 L)`, correct: vL, unit: 'L', explain: `V = ${Fnum} · 11.2 = ${vL} L.` }; } },
    ],
  },
];
