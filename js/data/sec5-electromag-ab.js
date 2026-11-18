export const SEC5_AB_TOPICS = [
  {
    id: '5A-1',
    code: '5A.1',
    sectionId: 'sec-5',
    subsectionId: '5A',
    subsectionTitle: 'A. Elektrostatika',
    title: 'Elektr zaryadi',
    subtitle: 'Zaryadning saqlanish qonuni, Kulon qonuni, elektr maydon kuchlanganligi, kuch chiziqlari.',
    theory: {
      overview:
        'Elektr zaryadi q (Kulon, C) — zarralarning elektromagnit o‘zaro ta’sirga kirishish xossasini belgilovchi fundamental kattalikdir. Eng kichik erkin zaryad — elementar zaryad e = 1.602·10⁻¹⁹ C. Elektr izolyatsiyalangan (yopiq) tizimda barcha zaryadlarning algebraik yig‘indisi o‘zgarmaydi: ∑qᵢ = const (Zaryadning saqlanish qonuni).\n\nVakuumdagi ikki qo‘zg‘almas nuqtaviy zaryad q₁ va q₂ orasidagi o‘zaro ta’sir kuchi Kulon qonuni bilan beriladi: F = k·|q₁·q₂| / (ε·r²), bu yerda k = 1/(4πε₀) ≈ 8.99·10⁹ N·m²/C², ε — muhitning dielektrik singdiruvchanligi. Zaryad atrofidagi fazoning moddiy xossasi — elektr maydoni bo‘lib, uning kuch tavsifi maydon kuchlanganligi E⃗ = F⃗ / q₀ (V/m yoki N/C) dir. Superpozitsiya tamoyiliga ko‘ra, bir nechta zaryad hosil qilgan maydon kuchlanganligi har bir zaryad maydonlarining vektor yig‘indisiga teng: E⃗ = ∑E⃗ᵢ.',
      keyLaws: [
        { title: 'Zaryadning saqlanish qonuni', text: 'Elektr izolyatsiyalangan tizimda zaryadlar yig‘indisi o‘zgarmaydi: q₁ + q₂ = q₁\' + q₂\'.' },
        { title: 'Kulon qonuni', text: 'F = k·|q₁q₂|/(εr²) — bir xil ishorali zaryadlar itarishadi, har xil ishoralilar tortishadi.' },
        { title: 'Maydon superpozitsiyasi', text: 'E⃗_nat = E⃗₁ + E⃗₂ + ... — elektr maydon kuch chiziqlari musbat zaryaddan chiqib, manfiy zaryadda tugaydi va hech qachon kesishmaydi.' },
      ],
      formulas: [
        { latex: 'F = k · |q₁ · q₂| / (ε · r²)', name: 'Kulon qonuni', symbols: 'k = 9·10⁹ N·m²/C², ε — dielektrik singdiruvchanlik' },
        { latex: 'E = F / q₀ = k · |q| / (ε · r²)', name: 'Elektr maydon kuchlanganligi', symbols: 'E — kuchlanganlik (V/m = N/C)' },
        { latex: 'Φ_E = ∮ E⃗·dS⃗ = ∑q_ich / ε₀', name: 'Gauss teoremasi', symbols: 'ε₀ = 8.85·10⁻¹² F/m — elektr doimiysi' },
      ],
      constants: [
        { name: 'Elementar elektr zaryadi', symbol: 'e', value: '1.602·10⁻¹⁹', unit: 'C' },
        { name: 'Kulon doimiysi', symbol: 'k = 1/(4πε₀)', value: '8.988·10⁹', unit: 'N·m²/C²' },
        { name: 'Vakuum elektr doimiysi', symbol: 'ε₀', value: '8.854·10⁻¹²', unit: 'F/m' },
      ],
      applications: [
        'Lazer printerlari, elektrostatik chang tozalash filtrlari (elektrofiltr) va bo‘yash texnologiyalari.',
        'Chaqmoq qaytargichlar va elektron nurlarini boshqarish tizimlari.',
      ],
      calculator: {
        title: 'Kulon kuchi va elektr maydon kuchlanganligi kalkulyatori',
        formulaDisplay: 'F = k·|q₁q₂|/(εr²),  E = k·|q₁|/(εr²)',
        inputs: [
          { key: 'q1', label: '1-zaryad q₁', symbol: 'q₁', unit: 'μC', min: 0.1, max: 100, step: 0.5, default: 4 },
          { key: 'q2', label: '2-zaryad q₂', symbol: 'q₂', unit: 'μC', min: 0.1, max: 100, step: 0.5, default: 6 },
          { key: 'r', label: 'Masofa r', symbol: 'r', unit: 'm', min: 0.05, max: 10, step: 0.05, default: 0.3 },
          { key: 'eps', label: 'Muhit singdiruvchanligi ε', symbol: 'ε', unit: '', min: 1, max: 81, step: 1, default: 1 },
        ],
        compute: (v) => {
          const k = 8.99e9;
          const q1 = v.q1 * 1e-6;
          const q2 = v.q2 * 1e-6;
          const F = (k * q1 * q2) / (v.eps * v.r * v.r);
          const E1 = (k * q1) / (v.eps * v.r * v.r);
          return {
            value: F.toFixed(2),
            unit: 'N',
            summary: `Kulon o‘zaro ta’sir kuchi F = ${F.toFixed(2)} N. q₁ zaryadning r masofadagi maydon kuchlanganligi E = ${E1.toExponential(2)} V/m.`,
          };
        },
      },
    },
    simulation: {
      title: 'Kulon Qonuni va 3D Elektr Maydon Kuch Chiziqlari Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Electricity_Coulombs_Law.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Zaryadlar qiymati va masofani o‘zgartirib, Kulon kuchi va 3D elektr maydon kuch chiziqlarini o‘rganing.',
      alternateSims: [
        { label: 'Kulon qonuni (Effectuall 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Coulombs_Law.html' },
        { label: 'Elektr maydoni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_The_Electric_Field.html' },
        { label: 'Uchburchakdagi uchta zaryad (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Three_Point_Charges_at_Triangle_Corners.html' },
        { label: 'Chiziqdagi uchta zaryad (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Three_Point_Charges_in_a_Line.html' },
      ],
      parametric: {
        mode: 'electric_field',
        title: 'Elektrostatik Maydon Kuch Chiziqlari va Kulon Kuchi Simulyatori',
        description: 'q₁ va q₂ zaryadlar ishorasi hamda qiymatini o‘zgartirib, maydon kuch chiziqlari va vektorlarni jonli kuzating.',
        controls: [
          { key: 'q1', label: '1-zaryad q₁', unit: 'μC', min: -10, max: 10, step: 1, value: 6 },
          { key: 'q2', label: '2-zaryad q₂', unit: 'μC', min: -10, max: 10, step: 1, value: -5 },
          { key: 'dist', label: 'Masofa r', unit: 'm', min: 1, max: 6, step: 0.5, value: 3 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ikki nuqtaviy zaryad orasidagi masofa 3 marta kamaytirilsa, Kulon kuchi qanday o‘zgaradi?', options: ['9 marta ortadi', '3 marta ortadi', '9 marta kamayadi', '3 marta kamayadi'], answer: 0, explain: 'F ~ 1/r² bo‘lgani uchun r 3 marta kamaysa kuch 9 marta ortadi.' },
      { q: 'Vakuumdagi ikki zaryad orasidagi masofa o‘zgarmay, ular dielektrik singdiruvchanligi ε = 4 bo‘lgan muhitga tushirilsa, kuch qanday o‘zgaradi?', options: ['4 marta kamayadi', '4 marta ortadi', '2 marta kamayadi', 'O‘zgarmaydi'], answer: 0, explain: 'F_muhit = F_vak / ε = F_vak / 4.' },
      { q: 'Elektr maydon kuchlanganligi E ning SI tizimidagi birligi qaysi?', options: ['N/C yoki V/m', 'J/C', 'F/m', 'C·m'], answer: 0, explain: 'E = F/q => N/C, shuningdek E = U/d => V/m.' },
      { q: 'Zaryadlari +6 nC va −2 nC bo‘lgan ikki bir xil metall sharcha tekkizilib yana ajratilsa, har birining zaryadi qancha bo‘ladi?', options: ['+2 nC', '+4 nC', '−2 nC', '+8 nC'], answer: 0, explain: 'Q_um = +6 + (−2) = +4 nC; teng sharchalarga teng taqsimlanadi: +4 / 2 = +2 nC.' },
      { q: 'Elektrostatik maydon kuch chiziqlari qaysi xossaga ega?', options: ['Musbat zaryaddan chiqib manfiyda tugaydi va hech qachon kesishmaydi', 'Doimo yopiq halqa shaklida bo‘ladi', 'O‘zaro kesishadi', 'Faqat manfiydan musbatga boradi'], answer: 0, explain: 'Elektrostatik maydon potensial maydon bo‘lib, kuch chiziqlari uzluksiz emas (manbadan boshlanib oqimga boradi) va kesishmaydi.' },
      { q: 'Kuchlanganligi 500 V/m bo‘lgan maydonga kiritilgan 4 mC (4·10⁻³ C) zaryadga qancha kuch ta’sir qiladi?', options: ['2 N', '125 N', '0.2 N', '2000 N'], answer: 0, explain: 'F = q·E = 4·10⁻³ · 500 = 2 N.' },
      { q: 'Qanday zaryad miqdori tabiatda mavjud bo‘la OLMAYDI?', options: ['0.8 · 10⁻¹⁹ C (elementar zaryadga karrali emas)', '3.2 · 10⁻¹⁹ C', '4.8 · 10⁻¹⁹ C', '1.6 · 10⁻¹⁹ C'], answer: 0, explain: 'Erkin zaryad kvantlangan: q = n·e, ya’ni 1.6·10⁻¹⁹ C ning butun karralisi bo‘lishi shart.' },
      { q: 'Qaysi fizik olim Kulon qonunini buralma tarozilar yordamida kashf etgan?', options: ['Sharl Kulon (1785)', 'Maykl Faradey', 'Georg Om', 'Jeyms Maksvell'], answer: 0, explain: 'Sharl Ogyusten de Kulon 1785-yilda aniq tajriba o‘tkazgan.' },
    ],
    problems: [
      {
        variants: [[2, 3, 0.3], [4, 2, 0.2], [5, 5, 0.5], [1, 4, 0.2]],
        build: (i) => {
          const [q1u, q2u, r] = [[2, 3, 0.3], [4, 2, 0.2], [5, 5, 0.5], [1, 4, 0.2]][i];
          const F = Number(((9e9 * q1u * 1e-6 * q2u * 1e-6) / (r * r)).toFixed(2));
          return {
            q: `Vakuumda r = ${r} m masofada joylashgan q₁ = ${q1u} μC va q₂ = ${q2u} μC zaryadlar orasidagi Kulon kuchi (N) qancha (k = 9·10⁹ N·m²/C²)?`,
            correct: F,
            unit: 'N',
            explain: `F = k·q₁·q₂/r² = 9·10⁹ · (${q1u}·10⁻⁶)·(${q2u}·10⁻⁶) / ${r}² = ${F} N.`,
          };
        },
      },
      {
        variants: [[200, 0.02], [500, 0.01], [400, 0.03], [1000, 0.005]],
        build: (i) => {
          const [E, q] = [[200, 0.02], [500, 0.01], [400, 0.03], [1000, 0.005]][i];
          const F = E * q;
          return {
            q: `Kuchlanganligi ${E} V/m bo‘lgan elektr maydonida ${q} C zaryadga ta’sir etuvchi kuch (N) qancha?`,
            correct: F,
            unit: 'N',
            explain: `F = q · E = ${q} · ${E} = ${F} N.`,
          };
        },
      },
    ],
  },
  {
    id: '5A-2',
    code: '5A.2',
    sectionId: 'sec-5',
    subsectionId: '5A',
    subsectionTitle: 'A. Elektrostatika',
    title: "Potensial va sig'im",
    subtitle: "Potensial, potensiallar farqi (kuchlanish), elektr maydondagi dielektriklar va o'tkazgichlar.",
    theory: {
      overview:
        'Elektrostatik maydon konservativ (potensial) maydon bo‘lib, zaryadni bir nuqtadan ikkinchisiga ko‘chirishda bajarilgan ish trayektoriya shakliga bog‘liq emas: A = q·(φ₁ − φ₂) = q·U. Maydonning energetik tavsifi — potensial φ = W_p / q (Volt, 1 V = 1 J/C). Nuqtaviy zaryad q dan r masofadagi potensial φ = k·q/(ε·r). Bir jinsli elektr maydonida kuchlanganlik va kuchlanish orasida E = U / d (yoki umumiy shaklda E⃗ = −grad φ) bog‘lanish mavjud.\n\nO‘tkazgich tashqi elektr maydonga kiritilganda erkin elektronlar siljib (elektrostatik induksiya), o‘tkazgich ichidagi natijaviy maydonni nolga tushiradi (E_ich = 0, sirt bo‘ylab potensial doimiy — ekvipotensial sirt, Faradey qafasi himoyasi). Dielektriklar (izolyatorlar) kiritilganda esa bog‘langan zaryadlar qutblanadi va maydon ichkarida ε marta susayadi.',
      keyLaws: [
        { title: 'Kuchlanish (Potensiallar farqi)', text: 'U = φ₁ − φ₂ = A / q — 1 Kulon zaryadni ko‘chirishda maydon bajargan ish.' },
        { title: 'E va U bog‘lanishi', text: 'E = U / d — elektr maydon kuchlanganligi potensialning kamayish tezligiga teng (gradijent).' },
        { title: 'O‘tkazgich elektrostatik muvozanati', text: 'O‘tkazgich ichida E = 0, barcha ortiqcha zaryad tashqi sirtda taqsimlanadi va butun hajm ekvipotensialdir.' },
      ],
      formulas: [
        { latex: 'φ = k · q / (ε · r)', name: 'Nuqtaviy zaryad potensiali', symbols: 'φ — potensial (V)' },
        { latex: 'A = q · (φ₁ − φ₂) = q · U', name: 'Elektr maydonining bajargan ishi', symbols: 'U — kuchlanish (V)' },
        { latex: 'E = U / d', name: 'Bir jinsli maydon kuchlanganligi', symbols: 'd — kuch chiziqlari bo‘ylab masofa (m)' },
      ],
      constants: [
        { name: 'Kuchlanish va potensial SI birligi', symbol: 'V', value: '1 V = 1 J/C', unit: 'Volt' },
        { name: '1 elektronvolt (energiya birligi)', symbol: '1 eV', value: '1.602·10⁻¹⁹', unit: 'J' },
      ],
      applications: [
        'Faradey qafasi (ekranlash) orqali nozik elektronika va samolyotlarni chaqmoqdan himoyalash.',
        'Katta kuchlanishli elektr izolyatorlari (keramika, shisha, SF₆ gazi) teshilish chegarasini hisoblash.',
      ],
      calculator: {
        title: 'Elektr potensiali, ish va maydon kuchlanganligi kalkulyatori',
        formulaDisplay: 'A = q·U,  E = U/d,  φ = kq/r',
        inputs: [
          { key: 'U', label: 'Potensiallar farqi U', symbol: 'U', unit: 'V', min: 1, max: 10000, step: 10, default: 220 },
          { key: 'd', label: 'Plastinalar orasidagi masofa d', symbol: 'd', unit: 'sm', min: 0.5, max: 100, step: 0.5, default: 5 },
          { key: 'q', label: 'Ko‘chirilgan zaryad q', symbol: 'q', unit: 'mC', min: 0.1, max: 100, step: 0.5, default: 2 },
        ],
        compute: (v) => {
          const dm = v.d * 1e-2;
          const E = v.U / dm;
          const A = v.q * 1e-3 * v.U;
          return {
            value: E.toFixed(0),
            unit: 'V/m',
            summary: `Maydon kuchlanganligi E = ${E.toFixed(0)} V/m. Zaryadni ko‘chirishdagi ish A = ${A.toFixed(3)} J.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Elektr Maydoni, Potensial va Zaryadlar Tizimi Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Electricity_The_Electric_Field.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Elektr maydon kuch chiziqlari va potensial taqsimotini 3D fazoda o‘rganing.',
      alternateSims: [
        { label: '3D Elektr maydoni va potensial', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_The_Electric_Field.html' },
        { label: 'Uchta zaryad chiziqda (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Three_Point_Charges_in_a_Line.html' },
      ],
      parametric: {
        mode: 'potential_equip',
        title: 'Potensial Sirtlar va Bir Jinsli Maydon Simulyatori',
        description: 'Kuchlanish U va plastinalar oralig‘i d ni o‘zgartirib, ekvipotensial chiziqlar zichligi hamda sinov zaryadining tezlanishini kuzating.',
        controls: [
          { key: 'U', label: 'Kuchlanish U', unit: 'V', min: 50, max: 1000, step: 50, value: 300 },
          { key: 'd', label: 'Oraliq masofa d', unit: 'sm', min: 2, max: 20, step: 1, value: 8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Elektr maydonida 4 C zaryadni bir nuqtadan ikkinchisiga ko‘chirishda 80 J ish bajarildi. Potensiallar farqi (kuchlanish) qancha?', options: ['20 V', '320 V', '0.05 V', '76 V'], answer: 0, explain: 'U = A / q = 80 / 4 = 20 V.' },
      { q: 'Orasidagi masofa 5 sm bo‘lgan yassi kondensator qoplamalari orasida kuchlanish 100 V. Maydon kuchlanganligi E qancha?', options: ['2000 V/m', '500 V/m', '20 V/m', '5000 V/m'], answer: 0, explain: 'E = U / d = 100 / 0.05 = 2000 V/m.' },
      { q: 'O‘tkazgich tashqi elektr maydonga kiritilganda uning ichki qismidagi elektrostatik maydon kuchlanganligi nimaga teng bo‘ladi?', options: ['0 V/m (nolga)', 'Tashqi maydondan 2 marta katta', 'O‘zgarmaydi', 'Cheksizga intiladi'], answer: 0, explain: 'Erkin elektronlar siljib, ichki maydonni to‘liq kompensatsiyalaydi (E_ich = 0).' },
      { q: 'Dielektrik (ε > 1) kiritilganda bir jinsli maydon kuchlanganligi vakuumdagiga nisbatan qanday o‘zgaradi?', options: ['ε marta kamayadi', 'ε marta ortadi', 'O‘zgarmaydi', 'Nolga tushadi'], answer: 0, explain: 'Dielektrik qutblanishi natijasida hosil bo‘lgan qarshi maydon asosiy maydonni ε marta kuchsizlantiradi.' },
      { q: 'Elektron (q = 1.6·10⁻¹⁹ C) potensiallar farqi 100 V bo‘lgan maydondan o‘tganda necha elektronvolt (eV) energiya oladi?', options: ['100 eV', '1.6·10⁻¹⁷ eV', '10 eV', '1000 eV'], answer: 0, explain: '1 eV — 1 V kuchlanishda elektron oladigan energiya; 100 V da 100 eV!' },
      { q: 'Ekvipotensial sirt va elektr maydon kuch chiziqlari orasidagi burchak qancha?', options: ['90° (perpendikulyar)', '0°', '45°', '180°'], answer: 0, explain: 'Ekvipotensial sirt bo‘ylab zaryad ko‘chganda ish nol bo‘lishi uchun kuch chizig‘i sirtga tik (90°) bo‘lishi kerak.' },
      { q: 'Yopiq kontur bo‘ylab elektrostatik kuchlar bajargan ish nimaga teng?', options: ['0 J', 'q·E·l', 'q·U', 'C·U²/2'], answer: 0, explain: 'Elektrostatik maydon konservativ bo‘lgani uchun yopiq yo‘ldagi sirkulyatsiyasi nolga teng.' },
      { q: 'Potensial qaysi kattalik turiga kiradi?', options: ['Skalyar kattalik', 'Vektor kattalik', 'Tenzor', 'O‘lchamsiz'], answer: 0, explain: 'Potensial energetik skalyar tavsifdir, kuchlanganlik E⃗ esa vektor.' },
    ],
    problems: [
      {
        variants: [[5, 250], [2, 120], [0.5, 400], [4, 1000]],
        build: (i) => {
          const [q, U] = [[5, 250], [2, 120], [0.5, 400], [4, 1000]][i];
          const A = q * U;
          return {
            q: `Potensiallar farqi ${U} V bo‘lgan ikki nuqta orasida ${q} mC zaryadni ko‘chirishda elektr maydoni necha mJ ish bajaradi?`,
            correct: A,
            unit: 'mJ',
            explain: `A = q · U = ${q} mC · ${U} V = ${A} mJ.`,
          };
        },
      },
      {
        variants: [[300, 0.02], [450, 0.05], [600, 0.03], [800, 0.04]],
        build: (i) => {
          const [U, d] = [[300, 0.02], [450, 0.05], [600, 0.03], [800, 0.04]][i];
          const E = U / d;
          return {
            q: `Orasidagi masofa ${d * 100} sm bo‘lgan parallel plastinalar orasida ${U} V kuchlanish qo‘yilgan. Maydon kuchlanganligi (V/m) qancha?`,
            correct: E,
            unit: 'V/m',
            explain: `E = U / d = ${U} / ${d} = ${E} V/m.`,
          };
        },
      },
    ],
  },
  {
    id: '5A-3',
    code: '5A.3',
    sectionId: 'sec-5',
    subsectionId: '5A',
    subsectionTitle: 'A. Elektrostatika',
    title: 'Kondensatorlar',
    subtitle: "Elektr sig'imi, yassi kondensator, kondensatorlarni ketma-ket va parallel ulash, elektr maydon energiyasi.",
    theory: {
      overview:
        'Elektr sig‘imi C (Farad, 1 F = 1 C/V) — o‘tkazgich yoki kondensatorning elektr zaryadini to‘plash qobiliyatini ifodalaydi: C = q / U. Yassi kondensator dielektrik qatlam bilan ajratilgan ikki parallel plastinadan iborat bo‘lib, sig‘imi C = (ε·ε₀·S) / d — plastina yuzasi S va dielektrik singdiruvchanlik ε ga to‘g‘ri, plastinalar orasidagi masofa d ga teskari proporsional.\n\nKondensatorlarni parallel ulashda kuchlanishlar teng (U = U₁ = U₂), zaryadlar qo‘shiladi va umumiy sig‘im ortadi: C_um = C₁ + C₂. Ketma-ket ulashda zaryadlar teng (q = q₁ = q₂), kuchlanishlar qo‘shiladi va umumiy sig‘im kamayadi: 1/C_um = 1/C₁ + 1/C₂. Zaryadlangan kondensatorning elektr maydoni energiyasi W = C·U²/2 = q·U/2 = q²/(2C) bilan, energiyaning hajmiy zichligi esa w = ε·ε₀·E²/2 bilan topiladi.',
      keyLaws: [
        { title: 'Yassi kondensator sig‘imi', text: 'C = ε·ε₀·S / d — kuchlanish U ga ham, zaryad q ga ham bog‘liq emas, faqat geometriya va dielektrikka bog‘liq.' },
        { title: 'Parallel va Ketma-ket ulash', text: 'Parallel: C = ∑Cᵢ; Ketma-ket: 1/C = ∑(1/Cᵢ).' },
        { title: 'Kondensator energiyasi', text: 'W = ½·C·U² = ½·q·U = q²/(2C).' },
      ],
      formulas: [
        { latex: 'C = q / U = (ε · ε₀ · S) / d', name: 'Kondensator elektr sig‘imi', symbols: 'C — sig‘im (F), S — plastina yuzasi (m²), d — masofa (m)' },
        { latex: 'C_par = C₁ + C₂,   1/C_ket = 1/C₁ + 1/C₂', name: 'Kondensatorlarni ulash', symbols: 'C_par — parallel, C_ket — ketma-ket ulash' },
        { latex: 'W = ½ · C · U² = q² / (2C)', name: 'Elektr maydon energiyasi', symbols: 'W — energiya (J)' },
      ],
      constants: [
        { name: 'Elektr sig‘imi SI birligi', symbol: 'F', value: '1 F = 1 C/V', unit: 'Farad' },
      ],
      applications: [
        'Fotoapparat chaqnog‘i (vspishka), defibrillyator va elektr tarmog‘i filtrlarida tez energiya to‘plash va berish.',
        'Sensorli (sig‘imli) smartfon ekranlari — barmoq yaqinlashganda pikofarad darajasida C o‘zgarishini sezadi.',
      ],
      calculator: {
        title: 'Yassi kondensator sig‘imi va energiyasi kalkulyatori',
        formulaDisplay: 'C = ε·ε₀·S / d,  W = ½·C·U²',
        inputs: [
          { key: 'S', label: 'Plastina yuzasi S', symbol: 'S', unit: 'sm²', min: 10, max: 5000, step: 10, default: 200 },
          { key: 'd', label: 'Oraliq d', symbol: 'd', unit: 'mm', min: 0.1, max: 20, step: 0.1, default: 2 },
          { key: 'eps', label: 'Dielektrik ε', symbol: 'ε', unit: '', min: 1, max: 100, step: 1, default: 5 },
          { key: 'U', label: 'Kuchlanish U', symbol: 'U', unit: 'V', min: 1, max: 2000, step: 10, default: 200 },
        ],
        compute: (v) => {
          const eps0 = 8.854e-12;
          const C = (v.eps * eps0 * (v.S * 1e-4)) / (v.d * 1e-3);
          const W = 0.5 * C * v.U * v.U;
          const q = C * v.U;
          return {
            value: (C * 1e12).toFixed(1),
            unit: 'pF',
            summary: `Sig‘im C = ${(C * 1e12).toFixed(1)} pF, zaryad q = ${(q * 1e9).toFixed(2)} nC, maydon energiyasi W = ${(W * 1e6).toFixed(2)} μJ.`,
          };
        },
      },
    },
    simulation: {
      title: 'Kondensator Sig‘imi va Dielektrik Omillari 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Electricity_Factors_Effecting_Capacitance.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Plastina yuzasi S, oralig‘i d va dielektrik moddani o‘zgartirib, kondensator sig‘imining C = εε₀S/d bo‘yicha o‘zgarishini 3D kuzating.',
      alternateSims: [
        { label: 'Sig‘imga ta’sir etuvchi omillar (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Factors_Effecting_Capacitance.html' },
        { label: 'Elektr sig‘imi tushunchasi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Electricity_Understanding_Capacitance.html' },
      ],
      parametric: {
        mode: 'capacitor',
        title: 'Yassi Kondensator, Dielektrik va Energiya Simulyatori',
        description: 'Plastina yuzasi, oralig‘i d, dielektrik ε va kuchlanish U ni sozlab, elektr maydon kuchlanganligi E hamda zaryad to‘planishini kuzating.',
        controls: [
          { key: 'eps', label: 'Dielektrik ε', unit: '', min: 1, max: 12, step: 1, value: 4 },
          { key: 'd', label: 'Oraliq d', unit: 'mm', min: 1, max: 10, step: 0.5, value: 3 },
          { key: 'U', label: 'Kuchlanish U', unit: 'V', min: 50, max: 500, step: 25, value: 200 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Yassi kondensator plastinalari orasidagi masofa d 2 marta oshirilsa, sig‘imi C qanday o‘zgaradi?', options: ['2 marta kamayadi', '2 marta ortadi', '4 marta kamayadi', 'O‘zgarmaydi'], answer: 0, explain: 'C = εε₀S/d bo‘lgani uchun d ga teskari proporsional.' },
      { q: 'Sig‘imlari 6 μF va 3 μF bo‘lgan ikki kondensator ketma-ket ulansa, umumiy sig‘im qancha?', options: ['2 μF', '9 μF', '4.5 μF', '18 μF'], answer: 0, explain: 'C_um = (6·3)/(6+3) = 18/9 = 2 μF.' },
      { q: 'Sig‘imi 10 μF bo‘lgan kondensator 100 V kuchlanishgacha zaryadlandi. Uning energiyasi qancha?', options: ['0.05 J (50 mJ)', '0.1 J', '0.5 J', '1 J'], answer: 0, explain: 'W = ½·C·U² = 0.5 · 10·10⁻⁶ · 10000 = 0.05 J.' },
      { q: 'Sig‘imlari 4 μF va 8 μF bo‘lgan kondensatorlar parallel ulansa, umumiy sig‘im qancha bo‘ladi?', options: ['12 μF', '2.67 μF', '32 μF', '6 μF'], answer: 0, explain: 'Parallel ulashda sig‘imlar qo‘shiladi: 4 + 8 = 12 μF.' },
      { q: 'Zaryadlanib manbadan uzilgan (q = const) kondensator plastinalari orasiga ε = 4 dielektrik kiritilsa, maydon energiyasi qanday o‘zgaradi?', options: ['4 marta kamayadi', '4 marta ortadi', 'O‘zgarmaydi', '16 marta kamayadi'], answer: 0, explain: 'W = q² / (2C); C 4 marta ortgani uchun q = const da W 4 marta kamayadi.' },
      { q: 'Manbaga doimiy ulangan (U = const) kondensator orasiga ε = 3 dielektrik kiritilsa, energiya qanday o‘zgaradi?', options: ['3 marta ortadi', '3 marta kamayadi', 'O‘zgarmaydi', '9 marta ortadi'], answer: 0, explain: 'W = ½·C·U²; U = const da C 3 marta ortsa W ham 3 marta ortadi.' },
      { q: 'Kondensator qaysi kattaliklarga qarab elektr sig‘imiga ega bo‘ladi?', options: ['Plastinalar yuzasi, oralig‘i va orasidagi dielektrikka', 'Faqat ulangan batareyaga', 'Faqat simlar uzunligiga', 'Tok kuchiga'], answer: 0, explain: 'Sig‘im — faqat kondensatorning konstruktiv va muhit xossasidir.' },
      { q: 'Elektr sig‘imi birligi 1 Farad nimaga teng?', options: ['1 C / 1 V', '1 V / 1 C', '1 J · 1 V', '1 A · 1 s'], answer: 0, explain: 'C = q / U => 1 F = 1 C / V.' },
    ],
    problems: [
      {
        variants: [[20, 100], [40, 50], [10, 200], [8, 500]],
        build: (i) => {
          const [C_uF, U] = [[20, 100], [40, 50], [10, 200], [8, 500]][i];
          const W = Number((0.5 * C_uF * 1e-6 * U * U * 1000).toFixed(1));
          return {
            q: `Sig‘imi ${C_uF} μF bo‘lgan kondensator ${U} V kuchlanishgacha zaryadlangan. Kondensatorda to‘plangan energiya (mJ) qancha?`,
            correct: W,
            unit: 'mJ',
            explain: `W = ½·C·U² = 0.5 · ${C_uF}·10⁻⁶ · ${U}² = ${W} mJ.`,
          };
        },
      },
      {
        variants: [[12, 4], [10, 15], [6, 12], [20, 5]],
        build: (i) => {
          const [c1, c2] = [[12, 4], [10, 15], [6, 12], [20, 5]][i];
          const c = (c1 * c2) / (c1 + c2);
          return {
            q: `Sig‘imlari C₁ = ${c1} μF va C₂ = ${c2} μF bo‘lgan ikki kondensator ketma-ket ulandi. Umumiy sig‘im (μF) qancha?`,
            correct: c,
            unit: 'μF',
            explain: `C_um = (${c1}·${c2})/(${c1}+${c2}) = ${c} μF.`,
          };
        },
      },
    ],
  },
  {
    id: '5B-1',
    code: '5B.1',
    sectionId: 'sec-5',
    subsectionId: '5B',
    subsectionTitle: "B. O'zgarmas Elektr Toki",
    title: 'Tok qonunlari',
    subtitle: "Elektr toki, tok kuchi, elektr yurituvchi kuch (EYUK), Om qonuni (zanjirning bir qismi va to'liq zanjir uchun).",
    theory: {
      overview:
        'Elektr toki — zaryadlangan zarralarning tartibli (yo‘nalgan) harakatidir. Tokning yo‘nalishi sifatida shartli ravishda musbat zaryadlar harakat yo‘nalishi qabul qilingan. O‘tkazgich ko‘ndalang kesimidan 1 sekundda o‘tgan zaryad miqdori tok kuchi I = Δq / Δt = n·e·S·v_dr (Amper, 1 A = 1 C/s) deyiladi.\n\nZanjirning bir jinsli qismi uchun Om qonuni: I = U / R (tok kuchi kuchlanishga to‘g‘ri, qarshilikka teskari proporsional). Manba zaryadlarni ajratish uchun tashqi (nokulon) kuchlar ish bajaradi va bu ish birlik zaryadga nisbatan elektr yurituvchi kuch (EYuK) deb ataladi: ε = A_tash / q (Volt). Ichki qarshiligi r bo‘lgan manbaga ulangan R tashqi yuklamali to‘liq (yopiq) zanjir uchun Om qonuni: I = ε / (R + r), qisqa tutashuvda (R = 0) esa maksimal tok I_qt = ε / r hosil bo‘ladi.',
      keyLaws: [
        { title: 'Zanjir bir qismi uchun Om qonuni', text: 'I = U / R — metallar uchun voltemper xarakteristikasi chiziqli (R = const).' },
        { title: 'Elektr yurituvchi kuch (EYuK)', text: 'ε = A_tash / q — manba ichidagi nokulon (kimyoviy, induksion) kuchlarning zaryadni ko‘chirishdagi ishi.' },
        { title: 'To‘liq zanjir uchun Om qonuni', text: 'I = ε / (R + r); manba qisqichlaridagi kuchlanish U = ε − I·r.' },
      ],
      formulas: [
        { latex: 'I = Δq / Δt = n · e · v_d · S', name: 'Tok kuchi va dreyf tezligi', symbols: 'n — elektron konsentratsiyasi, v_d — dreyf tezligi, S — kesim yuzasi' },
        { latex: 'I = U / R', name: 'Zanjir qismi uchun Om qonuni', symbols: 'U — kuchlanish (V), R — qarshilik (Ω)' },
        { latex: 'I = ε / (R + r),   U = ε − I·r', name: 'To‘liq zanjir uchun Om qonuni', symbols: 'ε — EYuK (V), r — manba ichki qarshiligi (Ω)' },
      ],
      constants: [
        { name: 'Tok kuchi SI birligi', symbol: 'A', value: '1 A = 1 C/s', unit: 'Amper' },
        { name: 'Qarshilik SI birligi', symbol: 'Ω', value: '1 Ω = 1 V/A', unit: 'Om' },
      ],
      applications: [
        'Akkumulyatorlarning ichki qarshiligini aniqlash va yuklama ostidagi kuchlanish pasayishini hisoblash.',
        'Avtomobil starteri yoki mikroprotsessor ta’minot zanjirlarini Om qonuni asosida loyihalash.',
      ],
      calculator: {
        title: 'To‘liq zanjir uchun Om qonuni kalkulyatori',
        formulaDisplay: 'I = ε / (R + r),  U = I·R,  I_qt = ε / r',
        inputs: [
          { key: 'emf', label: 'Manba EYuK ε', symbol: 'ε', unit: 'V', min: 1, max: 240, step: 1, default: 12 },
          { key: 'R', label: 'Tashqi qarshilik R', symbol: 'R', unit: 'Ω', min: 0.1, max: 200, step: 0.5, default: 5 },
          { key: 'r', label: 'Manba ichki qarshiligi r', symbol: 'r', unit: 'Ω', min: 0.05, max: 20, step: 0.1, default: 1 },
        ],
        compute: (v) => {
          const I = v.emf / (v.R + v.r);
          const U = I * v.R;
          const Iqt = v.emf / v.r;
          return {
            value: I.toFixed(2),
            unit: 'A',
            summary: `Zanjirdagi tok I = ${I.toFixed(2)} A, qisqichlardagi kuchlanish U = ${U.toFixed(2)} V, qisqa tutashuv toki I_qt = ${Iqt.toFixed(1)} A.`,
          };
        },
      },
    },
    simulation: {
      title: 'Elektr Toki, Kuchlanish va Tokning Magnit Ta’siri 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'O‘tkazgichda tok kuchi va yo‘nalishini o‘zgartirib, zaryadlar harakati hamda tokning atrofga ta’sirini 3D kuzating.',
      alternateSims: [
        { label: 'O‘tkazgichdagi elektr toki (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html' },
        { label: 'Katod nurlari va zaryad oqimi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Quantum_Cathode_Rays_The_Electrons.html' },
      ],
      parametric: {
        mode: 'ohm_circuit',
        title: 'To‘liq Zanjir va Om Qonuni (I = ε/(R+r)) Simulyatori',
        description: 'Manba EYuK ε, tashqi qarshilik R va ichki qarshilik r ni sozlab, elektronlar dreyf tezligi va V-A xarakteristikani kuzating.',
        controls: [
          { key: 'emf', label: 'EYuK ε', unit: 'V', min: 3, max: 24, step: 1, value: 12 },
          { key: 'R', label: 'Tashqi qarshilik R', unit: 'Ω', min: 1, max: 20, step: 1, value: 5 },
          { key: 'r', label: 'Ichki qarshilik r', unit: 'Ω', min: 0.2, max: 5, step: 0.2, value: 1 },
        ],
      },
    },
    coreQuestions: [
      { q: 'O‘tkazgich ko‘ndalang kesimidan 10 sekundda 40 C elektr zaryadi o‘tdi. Tok kuchi necha Amper?', options: ['4 A', '400 A', '0.25 A', '10 A'], answer: 0, explain: 'I = q / t = 40 / 10 = 4 A.' },
      { q: 'EYuK 12 V va ichki qarshiligi 1 Ω bo‘lgan manbaga 5 Ω rezistor ulandi. Zanjirdagi tok kuchi qancha?', options: ['2 A', '2.4 A', '12 A', '1 A'], answer: 0, explain: 'I = ε / (R + r) = 12 / (5 + 1) = 2 A.' },
      { q: 'Qisqa tutashuv (R = 0) paytida to‘liq zanjirdagi tok kuchi nimaga teng?', options: ['I = ε / r', 'I = 0', 'I = ε · r', 'I = U / R'], answer: 0, explain: 'R = 0 bo‘lganda tokni faqat manbaning ichki qarshiligi r cheklaydi.' },
      { q: 'Elektr yurituvchi kuch (EYuK) qaysi kuchlar bajargan ish hisobiga hosil bo‘ladi?', options: ['Tashqi (nokulon: kimyoviy, induksion, yorug‘lik) kuchlar', 'Faqat Kulon elektrostatik kuchlari', 'Gravitatsiya kuchlari', 'Elastiklik kuchlari'], answer: 0, explain: 'Yopiq konturda Kulon kuchlarining ishi nol bo‘lgani uchun tokni faqat nokulon tashqi kuchlar yurgizadi.' },
      { q: 'Kuchlanishi 220 V bo‘lgan tarmoqqa ulangan 44 Ω qarshilikli isitgichdan qancha tok o‘tadi?', options: ['5 A', '0.2 A', '10 A', '4.4 A'], answer: 0, explain: 'I = U / R = 220 / 44 = 5 A.' },
      { q: 'Zanjirdan tok o‘tmayotgan (uzilgan) holatda manba qisqichlaridagi voltmetr nimani ko‘rsatadi?', options: ['Manbaning EYuK ini (U = ε)', '0 V', 'I·r', 'ε / 2'], answer: 0, explain: 'I = 0 da U = ε − 0·r = ε.' },
      { q: 'Ampermetr va Voltmetr zanjirga qanday ulanadi?', options: ['Ampermetr ketma-ket, voltmetr parallel', 'Ampermetr parallel, voltmetr ketma-ket', 'Ikkalasi ham parallel', 'Ikkalasi ham ketma-ket'], answer: 0, explain: 'Ampermetr ichki qarshiligi juda kichik (ketma-ket), voltmetrniki juda katta (parallel).' },
      { q: 'Metall o‘tkazgichda erkin elektronlarning tartibli ko‘chish (dreyf) tezligi taxminan qancha?', options: ['~0.1 – 1 mm/s (juda sekin, ammo maydon c tezlikda tarqaladi)', '3·10⁸ m/s', '1000 m/s', '340 m/s'], answer: 0, explain: 'Elektr maydoni yorug‘lik tezligida tarqaladi, elektronlarning o‘zi esa millimetr/sekund tezlikda siljiydi.' },
    ],
    problems: [
      {
        variants: [[24, 5, 1], [18, 8, 1], [15, 4, 1], [36, 7, 2]],
        build: (i) => {
          const [emf, R, r] = [[24, 5, 1], [18, 8, 1], [15, 4, 1], [36, 7, 2]][i];
          const I = emf / (R + r);
          return {
            q: `EYuK ε = ${emf} V, ichki qarshiligi r = ${r} Ω bo‘lgan manba R = ${R} Ω rezistorga ulandi. Tok kuchini (A) toping.`,
            correct: I,
            unit: 'A',
            explain: `I = ε / (R + r) = ${emf} / (${R} + ${r}) = ${I} A.`,
          };
        },
      },
      {
        variants: [[5, 12], [3, 20], [10, 15], [4, 25]],
        build: (i) => {
          const [I, t] = [[5, 12], [3, 20], [10, 15], [4, 25]][i];
          const q = I * t;
          return {
            q: `O‘tkazgichdan ${I} A o‘zgarmas tok ${t} sekund davomida o‘tdi. Ko‘ndalang kesimdan o‘tgan elektr zaryadini (C) toping.`,
            correct: q,
            unit: 'C',
            explain: `q = I · t = ${I} · ${t} = ${q} C.`,
          };
        },
      },
    ],
  },
  {
    id: '5B-2',
    code: '5B.2',
    sectionId: 'sec-5',
    subsectionId: '5B',
    subsectionTitle: "B. O'zgarmas Elektr Toki",
    title: 'Qarshilik va ulanishlar',
    subtitle: "Solishtirma qarshilik, o'tkazgichlarni ketma-ket, parallel va aralash ulash, Kirxgof qoidalari.",
    theory: {
      overview:
        'O‘tkazgichning elektr qarshiligi uning geometrik o‘lchamlari va modda tabiatiga bog‘liq: R = ρ·l / S, bu yerda ρ (Ω·m) — solishtirma qarshilik, l — uzunlik, S — ko‘ndalang kesim yuzasi. Metallarda harorat oshishi bilan R ortadi: R(t) = R₀(1 + αt).\n\nKetma-ket ulashda barcha elementlarda tok kuchi bir xil (I = I₁ = I₂), kuchlanishlar va qarshiliklar qo‘shiladi: R_um = R₁ + R₂. Parallel ulashda kuchlanishlar teng (U = U₁ = U₂), toklar qo‘shiladi va umumiy qarshilik kamayadi: 1/R_um = 1/R₁ + 1/R₂. Murakkab tarmoqlangan zanjirlarni hisoblashda Gustav Kirxgofning ikki qoidasi qo‘llanadi: 1) Tugun qoidasi: tugunga kiruvchi va undan chiquvchi toklarning algebraik yig‘indisi nolga teng (∑Iᵢ = 0, zaryad saqlanishi); 2) Kontur qoidasi: har qanday yopiq konturda kuchlanish tushishlari yig‘indisi EYuKlar yig‘indisiga teng (∑IᵢRᵢ = ∑εₖ, energiya saqlanishi).',
      keyLaws: [
        { title: 'O‘tkazgich qarshiligi formulasi', text: 'R = ρ·l/S — sim 2 marta cho‘zilsa (hajm o‘zgarmay), uzunlik 2× ortib, kesim 2× kamayadi → qarshilik 4 marta ortadi!' },
        { title: 'Kirxgof 1-qoidasi (Tugun)', text: '∑I_kir = ∑I_chiq — tugunlarda elektr zaryad to‘planib qolmaydi.' },
        { title: 'Kirxgof 2-qoidasi (Kontur)', text: 'Yopiq konturda ∑(I·R) = ∑ε — potensialning to‘liq aylanma o‘zgarishi nolga teng.' },
      ],
      formulas: [
        { latex: 'R = ρ · (l / S)', name: 'O‘tkazgich qarshiligi', symbols: 'ρ — solishtirma qarshilik (Ω·m), l — uzunlik, S — yuza' },
        { latex: 'R_ket = R₁ + R₂,   1/R_par = 1/R₁ + 1/R₂', name: 'Ketma-ket va parallel ulash', symbols: 'Ikkita teng R uchun R_par = R/2' },
        { latex: '∑ I_k = 0,   ∑ I_k·R_k = ∑ ε_k', name: 'Kirxgof 1 va 2-qoidalari', symbols: 'Murakkab zanjirlarni yechish tizimi' },
      ],
      constants: [
        { name: 'Misning solishtirma qarshiligi', symbol: 'ρ_Cu', value: '1.7·10⁻⁸', unit: 'Ω·m' },
        { name: 'Alyuminiyning solishtirma qarshiligi', symbol: 'ρ_Al', value: '2.8·10⁻⁸', unit: 'Ω·m' },
      ],
      applications: [
        'Xonadon elektr tarmog‘ida barcha iste’molchilarni bir xil 220 V kuchlanish olishi uchun parallel ulash.',
        'Uitson ko‘prigi va mikrochiplar ichki taqsimot tarmoqlarini Kirxgof tenglamalari bilan hisoblash.',
      ],
      calculator: {
        title: 'Aralash ulanish va sim qarshiligi kalkulyatori',
        formulaDisplay: 'R_um = (R₁·R₂)/(R₁+R₂) + R₃',
        inputs: [
          { key: 'R1', label: 'Parallel R₁', symbol: 'R₁', unit: 'Ω', min: 1, max: 500, step: 1, default: 12 },
          { key: 'R2', label: 'Parallel R₂', symbol: 'R₂', unit: 'Ω', min: 1, max: 500, step: 1, default: 6 },
          { key: 'R3', label: 'Ketma-ket R₃', symbol: 'R₃', unit: 'Ω', min: 0, max: 500, step: 1, default: 4 },
          { key: 'U', label: 'Umumiy kuchlanish U', symbol: 'U', unit: 'V', min: 1, max: 240, step: 1, default: 24 },
        ],
        compute: (v) => {
          const Rpar = (v.R1 * v.R2) / (v.R1 + v.R2);
          const Rum = Rpar + v.R3;
          const I = v.U / Rum;
          const Upar = I * Rpar;
          return {
            value: Rum.toFixed(2),
            unit: 'Ω',
            summary: `Umumiy R = ${Rum.toFixed(2)} Ω, asosiy tok I = ${I.toFixed(2)} A (I₁ = ${(Upar / v.R1).toFixed(2)} A, I₂ = ${(Upar / v.R2).toFixed(2)} A).`,
          };
        },
      },
    },
    simulation: {
      title: 'Zanjir Qarshiligi, Parallel/Ketma-ket Ulash va Kirxgof Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Force_on_a_Current_Carrying_Conductor.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'O‘tkazgichdagi tok taqsimotini 3D sahnada kuzating hamda quyidagi Atomix Kirxgof tarmoq simulyatorida R₁, R₂, R₃ ni o‘zgartiring.',
      alternateSims: [
        { label: 'Tokli o‘tkazgich zanjiri (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Force_on_a_Current_Carrying_Conductor.html' },
        { label: 'Tokning magnit maydoni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html' },
      ],
      parametric: {
        mode: 'resistor_network',
        title: 'Ketma-ket / Parallel Zanjir va Kirxgof Tugunlari Simulyatori',
        description: 'R₁, R₂ va R₃ qarshiliklarni o‘zgartirib, tarmoqlardagi tok I₁, I₂ va kuchlanish U tushishini real vaqtda kuzating.',
        controls: [
          { key: 'R1', label: 'R₁ (yuqori shox)', unit: 'Ω', min: 2, max: 30, step: 1, value: 12 },
          { key: 'R2', label: 'R₂ (quyi shox)', unit: 'Ω', min: 2, max: 30, step: 1, value: 6 },
          { key: 'U', label: 'Manba kuchlanishi U', unit: 'V', min: 6, max: 60, step: 2, value: 24 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qarshiliklari 10 Ω va 40 Ω bo‘lgan ikki rezistor parallel ulansa, umumiy qarshilik qancha bo‘ladi?', options: ['8 Ω', '50 Ω', '25 Ω', '4 Ω'], answer: 0, explain: 'R = (10·40)/(10+40) = 400/50 = 8 Ω.' },
      { q: 'Sim hajmi o‘zgarmasdan uzunligi 2 marta cho‘zilsa, uning qarshiligi necha marta ortadi?', options: ['4 marta', '2 marta', '8 marta', 'O‘zgarmaydi'], answer: 0, explain: 'l 2× ortsa S 2× kamayadi; R = ρ·l/S => 2 / 0.5 = 4 marta ortadi.' },
      { q: 'Kirxgofning 1-qoidasi (tugun qoidasi) qaysi fundamental saqlanish qonuniga asoslanadi?', options: ['Elektr zaryadining saqlanish qonuniga', 'Impuls saqlanishiga', 'Massa saqlanishiga', 'Impuls momenti saqlanishiga'], answer: 0, explain: 'Tugunga kirgan zaryad undan chiqishi shart (∑I = 0).' },
      { q: 'Har biri 15 Ω dan bo‘lgan 3 ta bir xil rezistor parallel ulansa, umumiy qarshilik qancha?', options: ['5 Ω', '45 Ω', '15 Ω', '3 Ω'], answer: 0, explain: 'n ta teng rezistor parallel ulansa R_um = R / n = 15 / 3 = 5 Ω.' },
      { q: 'Ketma-ket ulangan ikki rezistordan qaysi birida kuchlanish tushishi kattaroq bo‘ladi?', options: ['Qarshiligi kattasida (U = I·R)', 'Qarshiligi kichigida', 'Ikkalasida doim teng', 'Manbaga yaqinida'], answer: 0, explain: 'I bir xil bo‘lgani uchun U ~ R.' },
      { q: 'Metall o‘tkazgich qizdirilganda uning elektr qarshiligi qanday o‘zgaradi?', options: ['Ortadi', 'Kamayadi', 'O‘zgarmaydi', 'Nolga tushadi'], answer: 0, explain: 'Harorat oshganda kristall panjara ionlari tebranishi kuchayib, elektronlar sochilishini oshiradi.' },
      { q: 'Parallel ulangan R₁ = 6 Ω va R₂ = 12 Ω rezistorlardan R₁ orqali 4 A tok o‘tmoqda. R₂ dan qancha tok o‘tadi?', options: ['2 A', '4 A', '8 A', '6 A'], answer: 0, explain: 'U = I₁·R₁ = 4·6 = 24 V; I₂ = U/R₂ = 24/12 = 2 A.' },
      { q: 'Kirxgofning 2-qoidasi qaysi saqlanish qonunining ifodasidir?', options: ['Energiyaning saqlanish qonuni', 'Zaryadning saqlanishi', 'Impuls saqlanishi', 'Massa saqlanishi'], answer: 0, explain: 'Yopiq kontur bo‘ylab birlik zaryadga berilgan va sarflangan energiyalar muvozanatda.' },
    ],
    problems: [
      {
        variants: [[6, 3], [12, 6], [20, 5], [30, 15]],
        build: (i) => {
          const [r1, r2] = [[6, 3], [12, 6], [20, 5], [30, 15]][i];
          const r = (r1 * r2) / (r1 + r2);
          return {
            q: `Qarshiliklari ${r1} Ω va ${r2} Ω bo‘lgan ikki rezistor parallel ulangan. Umumiy qarshilik (Ω) qancha?`,
            correct: r,
            unit: 'Ω',
            explain: `R_um = (${r1}·${r2})/(${r1}+${r2}) = ${r} Ω.`,
          };
        },
      },
      {
        variants: [[4, 12], [6, 18], [5, 25], [8, 16]],
        build: (i) => {
          const [r1, r2] = [[4, 12], [6, 18], [5, 25], [8, 16]][i];
          const rum = r1 + r2;
          return {
            q: `Qarshiliklari ${r1} Ω va ${r2} Ω bo‘lgan ikki rezistor ketma-ket ulandi. Umumiy qarshilik (Ω) qancha?`,
            correct: rum,
            unit: 'Ω',
            explain: `R_um = ${r1} + ${r2} = ${rum} Ω.`,
          };
        },
      },
    ],
  },
  {
    id: '5B-3',
    code: '5B.3',
    sectionId: 'sec-5',
    subsectionId: '5B',
    subsectionTitle: "B. O'zgarmas Elektr Toki",
    title: 'Tokning ishi va quvvati',
    subtitle: 'Joul-Lens qonuni, elektr isitish asboblari, qisqa tutashuv.',
    theory: {
      overview:
        'Elektr toki zanjir qismidan o‘tayotganda elektr maydoni zaryadlarni ko‘chirishda A = U·q = U·I·t ish bajaradi. Qo‘zg‘almas metall o‘tkazgichda bu ish to‘liq ichki energiyaga (issiqlikka) aylanadi — Joul-Lens qonuni: Q = I²·R·t = (U²/R)·t = U·I·t.\n\nTokning quvvati P = A/t = U·I = I²·R = U²/R (Vatt, W) bilan o‘lchanadi. Yuklama qarshiligi R manbaning ichki qarshiligiga tenglashganda (R = r) tashqi zanjirda maksimal foydali quvvat ajraladi: P_max = ε²/(4r), bunda FIK η = 50% ga teng. Qisqa tutashuv — manba qutblari juda kichik qarshilikli o‘tkazgich bilan tutashtirilganda tokning keskin ortishi (I_qt = ε/r) va simlarning Q = I²Rt tufayli qizib yonib ketish xavfidir; bundan saqlanish uchun eruvchan saqlagichlar va avtomatik o‘chirgichlar ishlatiladi.',
      keyLaws: [
        { title: 'Joul-Lens qonuni', text: 'Q = I²·R·t — ketma-ket ulashda ko‘proq qarshilikli o‘tkazgichda, parallel ulashda (U = const, Q = U²t/R) kamroq qarshilikli o‘tkazgichda ko‘proq issiqlik ajraladi.' },
        { title: 'Maksimal quvvat sharti (Yakobi teoremasi)', text: 'Tashqi yuklamada maksimal quvvat R = r bo‘lganda ajraladi.' },
        { title: 'Qisqa tutashuv va Himoya', text: 'Zanjirdagi tok ruxsat etilgan me’yordan oshganda avtomatik uzgich (avtomat) zanjirni darhol uzadi.' },
      ],
      formulas: [
        { latex: 'Q = I² · R · t = (U² / R) · t = U · I · t', name: 'Joul-Lens qonuni', symbols: 'Q — ajralgan issiqlik (J), I — tok (A), R — qarshilik (Ω), t — vaqt (s)' },
        { latex: 'P = U · I = I² · R = U² / R', name: 'Elektr tokining quvvati', symbols: 'P — quvvat (W)' },
        { latex: 'η = R / (R + r) = U / ε', name: 'Elektr manbai FIK i', symbols: 'R — tashqi, r — ichki qarshilik' },
      ],
      constants: [
        { name: '1 kW·soat (elektr hisoblagich birligi)', symbol: '1 kW·h', value: '3.6·10⁶', unit: 'J' },
      ],
      applications: [
        'Elektr choynak, dazmol, sanoat induksion va qarshilik pechlarining isitish elementlarini (nikrom, volfram) hisoblash.',
        'Elektr uzatish liniyalarida I²R yo‘qotishlarni kamaytirish uchun kuchlanishni yuz minglab Voltgacha oshirish.',
      ],
      calculator: {
        title: 'Joul-Lens issiqligi va FIK kalkulyatori',
        formulaDisplay: 'P = I²R,  Q = P·t,  η = R/(R+r)',
        inputs: [
          { key: 'U', label: 'Kuchlanish U', symbol: 'U', unit: 'V', min: 1, max: 380, step: 1, default: 220 },
          { key: 'R', label: 'Isitgich qarshiligi R', symbol: 'R', unit: 'Ω', min: 1, max: 500, step: 1, default: 44 },
          { key: 'tmin', label: 'Ishlash vaqti t', symbol: 't', unit: 'min', min: 1, max: 120, step: 1, default: 10 },
        ],
        compute: (v) => {
          const I = v.U / v.R;
          const P = (v.U * v.U) / v.R;
          const Q = P * (v.tmin * 60);
          return {
            value: P.toFixed(0),
            unit: 'W',
            summary: `Tok I = ${I.toFixed(2)} A, Quvvat P = ${P.toFixed(0)} W. ${v.tmin} daqiqada ajraladigan issiqlik Q = ${(Q / 1000).toFixed(1)} kJ.`,
          };
        },
      },
    },
    simulation: {
      title: 'Joul-Lens Issiqligi, Qisqa Tutashuv va Quvvat 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Magnetism_Close_Up_Force_on_a_Current_Carrying_Wire.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'O‘tkazgichdagi elektronlar oqimini yaqindan 3D ko‘ring hamda quyidagi Atomix Joul-Lens issiqlik va quvvat simulyatorida harorat o‘sishini kuzating.',
      alternateSims: [
        { label: 'O‘tkazgichda elektronlar oqimi (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Close_Up_Force_on_a_Current_Carrying_Wire.html' },
        { label: 'Tok va Magnit maydoni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Magnetism_Magnetic_Effect_due_to_Current.html' },
      ],
      parametric: {
        mode: 'joule_lenz',
        title: 'Joul-Lens Qonuni (Q = I²Rt) va Qisqa Tutashuv Simulyatori',
        description: 'Kuchlanish U va qarshilik R ni o‘zgartirib, ajralayotgan issiqlik quvvati P, spiral qizishi va himoya avtomati ishlash chegarasini kuzating.',
        controls: [
          { key: 'U', label: 'Kuchlanish U', unit: 'V', min: 10, max: 240, step: 10, value: 120 },
          { key: 'R', label: 'Yuklama qarshiligi R', unit: 'Ω', min: 2, max: 50, step: 2, value: 12 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qarshiligi 10 Ω bo‘lgan o‘tkazgichdan 3 A tok 20 sekund davomida o‘tsa, necha Joul issiqlik ajraladi?', options: ['1800 J', '600 J', '900 J', '180 J'], answer: 0, explain: 'Q = I²·R·t = 9 · 10 · 20 = 1800 J.' },
      { q: 'Elektr tarmog‘iga parallel ulangan 20 Ω va 40 Ω ikki isitgichdan qaysi birida ko‘proq issiqlik ajraladi?', options: ['20 Ω li isitgichda 2 marta ko‘proq', '40 Ω li isitgichda', 'Ikkalasida teng', 'Ajralmaydi'], answer: 0, explain: 'Parallel ulashda U bir xil: P = U²/R => qarshiligi kichigida quvvat katta.' },
      { q: 'Ketma-ket ulangan 20 Ω va 40 Ω ikki isitgichdan qaysi birida ko‘proq issiqlik ajraladi?', options: ['40 Ω li isitgichda 2 marta ko‘proq', '20 Ω li isitgichda', 'Ikkalasida teng', 'Hech birida'], answer: 0, explain: 'Ketma-ket ulashda I bir xil: P = I²R => qarshiligi kattasida issiqlik ko‘p.' },
      { q: 'Nima uchun elektr energiyasini uzoq masofalarga uzatishda kuchlanish transformatorlar bilan keskin oshiriladi?', options: ['Bir xil quvvatda tok I = P/U kamayib, simlardagi issiqlik yo‘qotilishi (I²R) keskin kamayadi', 'Simlar uzunligini qisqartirish uchun', 'Qarshilikni oshirish uchun', 'Chastotani oshirish uchun'], answer: 0, explain: 'U 10 marta oshsa, I 10 marta kamayadi va I²R issiqlik isrofi 100 marta kamayadi!' },
      { q: '220 V kuchlanishda 1100 W quvvat iste’mol qiladigan dazmolning ishchi toki qancha?', options: ['5 A', '0.2 A', '2.5 A', '10 A'], answer: 0, explain: 'I = P / U = 1100 / 220 = 5 A.' },
      { q: 'Manba tashqi yuklamaga maksimal quvvat berishi uchun tashqi qarshilik R va ichki qarshilik r qanday bog‘langan bo‘lishi kerak?', options: ['R = r', 'R = 0', 'R ≫ r', 'R = 2r'], answer: 0, explain: 'P = ε²R/(R+r)² funksiyasi R = r da maksimal qiymatga erishadi.' },
      { q: 'Eruvchan saqlagichlarning vazifasi nima?', options: ['Qisqa tutashuv yoki ortiqcha yuklamada erib, elektr zanjirini uzish', 'Kuchlanishni oshirish', 'Tokni kuchaytirish', 'Energiya saqlash'], answer: 0, explain: 'Tok chegaradan oshganda Q = I²Rt issiqlik saqlagich simini eritib yong‘inning oldini oladi.' },
      { q: '2 kW quvvatli elektr pech 3 soat ishlaganda necha kW·soat energiya sarflaydi?', options: ['6 kW·soat', '1.5 kW·soat', '0.67 kW·soat', '12 kW·soat'], answer: 0, explain: 'A = P · t = 2 kW · 3 h = 6 kW·h.' },
    ],
    problems: [
      {
        variants: [[4, 5, 10], [2, 10, 30], [5, 4, 20], [3, 8, 10]],
        build: (i) => {
          const [I, R, t] = [[4, 5, 10], [2, 10, 30], [5, 4, 20], [3, 8, 10]][i];
          const Q = I * I * R * t;
          return {
            q: `Qarshiligi ${R} Ω rezistordan ${I} A tok ${t} s davomida o‘tsa, necha Joul issiqlik ajraladi?`,
            correct: Q,
            unit: 'J',
            explain: `Q = I²·R·t = ${I}² · ${R} · ${t} = ${Q} J.`,
          };
        },
      },
      {
        variants: [[220, 22], [110, 11], [220, 44], [100, 25]],
        build: (i) => {
          const [U, R] = [[220, 22], [110, 11], [220, 44], [100, 25]][i];
          const P = (U * U) / R;
          return {
            q: `${U} V kuchlanishli tarmoqqa ulangan ${R} Ω qarshilikli elektr asbobning quvvatini (W) toping.`,
            correct: P,
            unit: 'W',
            explain: `P = U² / R = ${U}² / ${R} = ${P} W.`,
          };
        },
      },
    ],
  },
];
