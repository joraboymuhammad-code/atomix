export const SEC2_AB_TOPICS = [
  {
    id: '2A-1',
    code: '2A.1',
    sectionId: 'sec-2',
    subsectionId: '2A',
    subsectionTitle: 'A. Kinematika (Harakat tasnifi)',
    title: 'Mexanik harakat',
    subtitle: "Sanoq sistemasi, moddiy nuqta, trayektoriya, yo'l va ko'chish.",
    theory: {
      overview:
        'Mexanik harakat — jismning vaqt o‘tishi bilan fazoda boshqa jismlarga nisbatan vaziyatining o‘zgarishidir. Harakat nisbiy bo‘lgani uchun uni tavsiflashda tanlangan sanoq jismi, unga bog‘langan koordinata sistemasi va vaqtni o‘lchovchi soat majmuasi — sanoq sistemasi kiritiladi.\n\nJismning harakat davomida fazoda chizgan uzluksiz chizig‘i trayektoriya deyiladi. Trayektoriyaning uzunligi bosib o‘tilgan yo‘l (S, skalyar, doimo S ≥ 0) bo‘lsa, jismning boshlang‘ich vaziyatidan oxirgi vaziyatiga yo‘nalgan vektor ko‘chish (Δr⃗ = r⃗₂ − r⃗₁) deb ataladi. To‘g‘ri chiziqli bir yo‘nalishli harakatdagina yo‘l ko‘chish moduliga teng bo‘ladi (S = |Δr⃗|); umumiy holda S ≥ |Δr⃗|.',
      keyLaws: [
        { title: 'Sanoq sistemasi', text: 'Sanoq jismi + koordinata o‘qlari (X, Y, Z) + vaqt o‘lchagich (t). Sanoq sistemasisiz harakat haqida gapirish ma’nosizdir.' },
        { title: 'Yo‘l va ko‘chish farqi', text: 'Yo‘l S — trayektoriya uzunligi (skalyar, faqat ortadi). Ko‘chish Δr⃗ — boshlang‘ich nuqtadan oxirgi nuqtaga tortilgan vektor.' },
        { title: 'Radius-vektor va harakat tenglamasi', text: 'Moddiy nuqtaning fazodagi o‘rni r⃗(t) = x(t)i⃗ + y(t)j⃗ + z(t)k⃗ funksiyasi bilan beriladi.' },
      ],
      formulas: [
        { latex: 'Δr⃗ = r⃗₂ − r⃗₁', name: 'Ko‘chish vektori', symbols: 'r⃗₁, r⃗₂ — boshlang‘ich va oxirgi radius-vektorlar' },
        { latex: '|Δr⃗| = √((x₂ − x₁)² + (y₂ − y₁)²)', name: 'Ko‘chish moduli (2D)', symbols: 'x, y — Dekart koordinatalari (m)' },
        { latex: 'S ≥ |Δr⃗|', name: 'Yo‘l va ko‘chish munosabati', symbols: 'S — bosib o‘tilgan yo‘l (m)' },
      ],
      constants: [
        { name: 'Uzunlik SI birligi', symbol: 'm', value: '1', unit: 'metr' },
        { name: 'Vaqt SI birligi', symbol: 's', value: '1', unit: 'sekund' },
      ],
      applications: [
        'GPS/GLONASS sun’iy yo‘ldosh navigatsiyasida ob’ektning koordinatalari va ko‘chish vektorini aniqlash.',
        'Aviatsiya va dronlarda haqiqiy uchish trayektoriyasi (yo‘l) hamda start-finish orasidagi to‘g‘ri masofani (ko‘chish) hisoblash.',
      ],
      calculator: {
        title: '2D koordinatalar bo‘yicha ko‘chish kalkulyatori',
        formulaDisplay: '|Δr⃗| = √((x₂ − x₁)² + (y₂ − y₁)²)',
        inputs: [
          { key: 'x1', label: 'Boshlang‘ich X₁', symbol: 'x₁', unit: 'm', min: -100, max: 100, step: 1, default: 2 },
          { key: 'y1', label: 'Boshlang‘ich Y₁', symbol: 'y₁', unit: 'm', min: -100, max: 100, step: 1, default: 3 },
          { key: 'x2', label: 'Oxirgi X₂', symbol: 'x₂', unit: 'm', min: -100, max: 100, step: 1, default: 10 },
          { key: 'y2', label: 'Oxirgi Y₂', symbol: 'y₂', unit: 'm', min: -100, max: 100, step: 1, default: 9 },
        ],
        compute: (v) => {
          const dx = v.x2 - v.x1;
          const dy = v.y2 - v.y1;
          const dr = Math.hypot(dx, dy);
          return {
            value: dr.toFixed(2),
            unit: 'm',
            summary: `Δx = ${dx} m, Δy = ${dy} m. Ko‘chish moduli |Δr⃗| = ${dr.toFixed(2)} m.`,
          };
        },
      },
    },
    simulation: {
      title: 'Tekislikdagi Harakat, Trayektoriya va Ko‘chish 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Motion_in_a_Plane.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Tekislikdagi harakatda radius-vektor, trayektoriya va ko‘chish vektorini 3D fazoda kuzating.',
      alternateSims: [
        { label: 'Tekislikdagi harakat 3D', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Motion_in_a_Plane.html' },
        { label: 'Vektorlar Tasviri', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Vector_Display.html' },
      ],
      parametric: {
        mode: 'path_displacement',
        title: 'Yo‘l (S) va Ko‘chish (Δr⃗) Taqqoslash Simulyatori',
        description: 'Nuqtaning egri chiziqli trayektoriya bo‘ylab harakatida jami yo‘l S va to‘g‘ri ko‘chish moduli |Δr⃗| qanday farqlanishini kuzating.',
        controls: [
          { key: 'vx', label: 'X bo‘yicha tezlik', unit: 'm/s', min: 1, max: 10, step: 0.5, value: 4 },
          { key: 'amp', label: 'Egri og‘ish amplitudasi', unit: 'm', min: 0, max: 5, step: 0.5, value: 2.5 },
          { key: 'freq', label: 'Burilish chastotasi', unit: 'Hz', min: 0.2, max: 2, step: 0.1, value: 0.8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Sanoq sistemasi qaysi uch elementdan tashkil topadi?', options: ['Sanoq jismi, koordinata sistemasi va vaqt o‘lchagich (soat)', 'Jism, kuch va massa', 'Tezlik, yo‘l va energiya', 'Trayektoriya, radius va burchak'], answer: 0, explain: 'Sanoq sistemasi = sanoq jismi + koordinata sistemasi + soat.' },
      { q: 'Jism to‘liq aylana bo‘ylab bir marta aylanib boshlang‘ich nuqtasiga qaytdi. Ko‘chish nimaga teng?', options: ['0', '2πR', 'πR', 'πR²'], answer: 0, explain: 'Boshlang‘ich va oxirgi nuqta ustma-ust tushgani uchun ko‘chish vektori nolga teng, yo‘l esa 2πR.' },
      { q: 'Jism avval shimolga 3 km, so‘ngra sharqqa 4 km yurdi. Yo‘l va ko‘chish modulini toping.', options: ['Yo‘l = 7 km, ko‘chish = 5 km', 'Yo‘l = 5 km, ko‘chish = 7 km', 'Yo‘l = 7 km, ko‘chish = 7 km', 'Yo‘l = 1 km, ko‘chish = 5 km'], answer: 0, explain: 'Yo‘l S = 3 + 4 = 7 km; ko‘chish |Δr⃗| = √(3² + 4²) = 5 km.' },
      { q: 'Qaysi harakatda yo‘l doimo ko‘chish moduliga teng bo‘ladi?', options: ['Yo‘nalishini o‘zgartirmaydigan to‘g‘ri chiziqli harakatda', 'Aylana bo‘ylab harakatda', 'Tebranma harakatda', 'Parabolik harakatda'], answer: 0, explain: 'Faqat bir tomonga to‘g‘ri chiziq bo‘ylab harakatlangandagina S = |Δr⃗|.' },
      { q: 'Trayektoriya nima?', options: ['Jismning harakat davomida fazoda chizgan izi (chizig‘i)', 'Jismning boshlang‘ich tezligi', 'Vektorning uzunligi', 'Vaqt oralig‘i'], answer: 0, explain: 'Trayektoriya — moddiy nuqta fazoda qoldiradigan uzluksiz chiziq.' },
      { q: 'Mexanik harakatning nisbiyligi nimani anglatadi?', options: ['Jism trayektoriyasi va tezligi tanlangan sanoq sistemasiga bog‘liq', 'Massa tezlikka bog‘liq', 'Kuch birligi o‘zgaruvchan', 'Vaqt hamma joyda to‘xtaydi'], answer: 0, explain: 'Masalan, poyezd ichida tushayotgan koptok trayektoriyasi yo‘lovchi uchun to‘g‘ri chiziq, yerdagi kuzatuvchi uchun parabola bo‘ladi.' },
      { q: 'Radiusi R = 10 m bo‘lgan aylana yarmini bosib o‘tgan jismning ko‘chishi qancha?', options: ['20 m', '31.4 m', '10 m', '0 m'], answer: 0, explain: 'Yarim aylanada boshlang‘ich va oxirgi nuqta diametr uchlarida yotadi: |Δr⃗| = 2R = 20 m.' },
      { q: 'Nuqta A(1; 2) koordinatadan B(4; 6) nuqtaga ko‘chdi. Ko‘chish moduli qancha?', options: ['5', '7', '3', '4'], answer: 0, explain: '√((4−1)² + (6−2)²) = √(9 + 16) = 5.' },
    ],
    problems: [
      {
        variants: [[6, 8], [9, 12], [5, 12], [12, 16]],
        build: (i) => {
          const [a, b] = [[6, 8], [9, 12], [5, 12], [12, 16]][i];
          const c = Math.hypot(a, b);
          return {
            q: `Piyoda to‘g‘ri burchak ostida avval ${a} m, so‘ngra ${b} m masofani bosib o‘tdi. Uning ko‘chish moduli (m) qancha?`,
            correct: c,
            unit: 'm',
            explain: `|Δr⃗| = √(${a}² + ${b}²) = ${c} m.`,
          };
        },
      },
      {
        variants: [[10, 2], [25, 2], [15, 2], [30, 2]],
        build: (i) => {
          const [R] = [[10, 2], [25, 2], [15, 2], [30, 2]][i];
          return {
            q: `Radiusi R = ${R} m bo‘lgan aylana bo‘ylab jism 0.5 marta aylandi. Ko‘chish modulini (m) toping.`,
            correct: 2 * R,
            unit: 'm',
            explain: `Yarim aylana oxirida ko‘chish diametrga teng: |Δr⃗| = 2R = ${2 * R} m.`,
          };
        },
      },
    ],
  },
  {
    id: '2A-2',
    code: '2A.2',
    sectionId: 'sec-2',
    subsectionId: '2A',
    subsectionTitle: 'A. Kinematika (Harakat tasnifi)',
    title: "To'g'ri chiziqli tekis harakat",
    subtitle: 'Tezlik, tezlik va ko‘chish grafiklari, harakatning nisbiyligi.',
    theory: {
      overview:
        'To‘g‘ri chiziqli tekis harakat — jism istalgan teng vaqt oraliqlarida bir xil yo‘nalishda teng ko‘chishlar bajaradigan harakatdir. Bu harakatda tezlik vektori v⃗ = const bo‘lib, ham moduli, ham yo‘nalishi o‘zgarmaydi.\n\nKoordinata o‘qi bo‘ylab harakat tenglamasi x(t) = x₀ + v_x·t ko‘rinishida yoziladi. Tezlikning vaqtga bog‘liqlik grafigi v_x(t) — vaqt o‘qiga parallel to‘g‘ri chiziq bo‘lib, bu grafik ostidagi yuzaning son qiymati jismning ko‘chishiga teng (S_x = v_x · t). Galileyning tezliklarni qo‘shish qonuniga ko‘ra, jismning qo‘zg‘almas sanoq sistemasiga nisbatan tezligi v⃗ = v⃗_nis + v⃗_ko‘ch (harakatlanuvchi sistema tezligi va unga nisbatan tezlikning vektor yig‘indisi) bilan topiladi.',
      keyLaws: [
        { title: 'Tekis harakat tenglamasi', text: 'x(t) = x₀ + v_x·t — koordinata vaqtga chiziqli bog‘liq.' },
        { title: 'Tezlik grafigining geometrik ma’nosi', text: 'v_x(t) grafigi bilan vaqt o‘qi orasidagi to‘g‘ri to‘rtburchak yuzasi ko‘chishga teng.' },
        { title: 'Galiley tezliklarni qo‘shish qonuni', text: 'v⃗_abs = v⃗_nis + v⃗_ko‘ch — tezlik sanoq sistemasiga bog‘liq nisbiy kattalikdir.' },
      ],
      formulas: [
        { latex: 'v = S / t', name: 'Tekis harakat tezligi', symbols: 'v — tezlik (m/s), S — yo‘l (m), t — vaqt (s)' },
        { latex: 'x(t) = x₀ + v_x · t', name: 'Koordinata tenglamasi', symbols: 'x₀ — boshlang‘ich koordinata, v_x — tezlik proyeksiyasi' },
        { latex: 'v⃗ = v⃗₁ + v⃗₂', name: 'Klassik tezliklarni qo‘shish', symbols: 'v⃗₁ — tizimga nisbatan tezlik, v⃗₂ — tizim tezligi' },
      ],
      constants: [
        { name: 'Tezlik SI birligi', symbol: 'm/s', value: '1 m/s = 3.6 km/soat', unit: 'm/s' },
      ],
      applications: [
        'Transport logistikasi va temir yo‘l harakat jadvallarini tuzish, uchrashish nuqtasini aniqlash.',
        'Daryoda qayiqning yoki shamolli havoda samolyotning yerga nisbatan tezligini hisoblash.',
      ],
      calculator: {
        title: 'Ikki jismning uchrashish vaqti va joyi kalkulyatori',
        formulaDisplay: 'x₁₀ + v₁·t = x₂₀ + v₂·t  ⇒  t_uch = (x₂₀ − x₁₀) / (v₁ − v₂)',
        inputs: [
          { key: 'x1', label: '1-jism boshi x₁₀', symbol: 'x₁₀', unit: 'm', min: -500, max: 500, step: 10, default: 0 },
          { key: 'v1', label: '1-jism tezligi v₁', symbol: 'v₁', unit: 'm/s', min: -50, max: 50, step: 1, default: 15 },
          { key: 'x2', label: '2-jism boshi x₂₀', symbol: 'x₂₀', unit: 'm', min: -500, max: 500, step: 10, default: 200 },
          { key: 'v2', label: '2-jism tezligi v₂', symbol: 'v₂', unit: 'm/s', min: -50, max: 50, step: 1, default: -10 },
        ],
        compute: (v) => {
          if (Math.abs(v.v1 - v.v2) < 1e-6) {
            return { value: '∞', unit: 's', summary: 'Tezliklar teng va bir yo‘nalishda bo‘lgani uchun jismlar uchrashmaydi.' };
          }
          const t = (v.x2 - v.x1) / (v.v1 - v.v2);
          if (t < 0) {
            return { value: '—', unit: 's', summary: 'Jismlar uzoqlashmoqda (kelajakda uchrashmaydi).' };
          }
          const x = v.x1 + v.v1 * t;
          return {
            value: t.toFixed(2),
            unit: 's',
            summary: `Uchrashish vaqti t = ${t.toFixed(2)} s, uchrashish koordinatasi x = ${x.toFixed(2)} m.`,
          };
        },
      },
    },
    simulation: {
      title: 'To‘g‘ri Chiziqli Harakat va Grafiklar 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Motion_in_straight_line.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'To‘g‘ri chiziqli harakatda tezlik, koordinata va vaqt bog‘lanishini 3D kuzating.',
      alternateSims: [
        { label: 'To‘g‘ri chiziqli harakat 3D', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Motion_in_straight_line.html' },
        { label: 'WebGL2 Harakat Simulyatori', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'uniform_motion',
        title: 'Tekis Harakat va x(t), v(t) Grafiklari Simulyatori',
        description: 'Ikki jismning boshlang‘ich koordinatasi va tezligini sozlab, x(t) grafigida ularning kesishish (uchrashish) nuqtasini kuzating.',
        controls: [
          { key: 'v1', label: '1-jism tezligi v₁', unit: 'm/s', min: 2, max: 30, step: 1, value: 12 },
          { key: 'v2', label: '2-jism tezligi v₂', unit: 'm/s', min: -30, max: 20, step: 1, value: -8 },
          { key: 'd', label: 'Boshlang‘ich masofa', unit: 'm', min: 40, max: 200, step: 10, value: 120 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Jismning harakat tenglamasi x = 12 − 4t (m) ko‘rinishida berilgan. Uning tezlik proyeksiyasi qancha?', options: ['−4 m/s', '12 m/s', '4 m/s', '8 m/s'], answer: 0, explain: 'x(t) = x₀ + v_x·t bilan solishtirsak, x₀ = 12 m va v_x = −4 m/s.' },
      { q: 'To‘g‘ri chiziqli tekis harakatda v(t) tezlik grafigi qanday ko‘rinishga ega?', options: ['Vaqt o‘qiga parallel to‘g‘ri chiziq', 'Parabola', 'Giperbola', 'Koordinata boshidan chiquvchi qiya chiziq'], answer: 0, explain: 'v = const bo‘lgani uchun grafik gorizontal to‘g‘ri chiziq bo‘ladi.' },
      { q: '108 km/soat tezlikni m/s da ifodalang.', options: ['30 m/s', '25 m/s', '36 m/s', '20 m/s'], answer: 0, explain: '108 / 3.6 = 30 m/s.' },
      { q: 'Tezligi 15 m/s bo‘lgan avtomobil 1 daqiqada necha metr yo‘l bosadi?', options: ['900 m', '15 m', '150 m', '600 m'], answer: 0, explain: 'S = v · t = 15 m/s · 60 s = 900 m.' },
      { q: 'Eskalator pastga 1 m/s tezlik bilan tushmoqda. Yo‘lovchi uning ustida yuqoriga eskalatorga nisbatan 1 m/s tezlikda yursa, yerga nisbatan tezligi qancha?', options: ['0 m/s', '2 m/s', '1 m/s', '0.5 m/s'], answer: 0, explain: 'Qarama-qarshi teng tezliklar ayiriladi: 1 − 1 = 0 m/s.' },
      { q: 'x₁ = 10 + 5t va x₂ = 40 − 10t tenglamali jismlar necha sekunddan keyin uchrashadi?', options: ['2 s', '4 s', '3 s', '5 s'], answer: 0, explain: '10 + 5t = 40 − 10t => 15t = 30 => t = 2 s.' },
      { q: 'Daryo oqimi tezligi 3 m/s, qayiqning suvga nisbatan tezligi perpendikulyar yo‘nalishda 4 m/s bo‘lsa, qirg‘oqqa nisbatan tezligi qancha?', options: ['5 m/s', '7 m/s', '1 m/s', '3.5 m/s'], answer: 0, explain: 'v = √(3² + 4²) = 5 m/s.' },
      { q: 'x(t) grafigidagi to‘g‘ri chiziqning og‘ish burchagi tangensi nimani bildiradi?', options: ['Tezlikni', 'Tezlanishni', 'Ko‘chishni', 'Vaqtning kvadratini'], answer: 0, explain: 'tgα = Δx / Δt = v_x.' },
    ],
    problems: [
      {
        variants: [[10, 20, 150], [15, 10, 250], [12, 8, 100], [20, 10, 300]],
        build: (i) => {
          const [v1, v2, d] = [[10, 20, 150], [15, 10, 250], [12, 8, 100], [20, 10, 300]][i];
          const t = d / (v1 + v2);
          return {
            q: `Orasidagi masofa ${d} m bo‘lgan ikki poyezd bir-biriga qarab ${v1} m/s va ${v2} m/s tezlikda tekis harakatlanmoqda. Ular necha sekunddan keyin uchrashadi?`,
            correct: t,
            unit: 's',
            explain: `Nisbiy yaqinlashish tezligi v = ${v1} + ${v2} = ${v1 + v2} m/s. t = ${d} / ${v1 + v2} = ${t} s.`,
          };
        },
      },
      {
        variants: [[20, 40], [25, 12], [18, 50], [15, 80]],
        build: (i) => {
          const [v, t] = [[20, 40], [25, 12], [18, 50], [15, 80]][i];
          const s = v * t;
          return {
            q: `Tezligi ${v} m/s bo‘lgan tekis harakatda jism ${t} sekundda necha metr yo‘l bosadi?`,
            correct: s,
            unit: 'm',
            explain: `S = v · t = ${v} · ${t} = ${s} m.`,
          };
        },
      },
    ],
  },
  {
    id: '2A-3',
    code: '2A.3',
    sectionId: 'sec-2',
    subsectionId: '2A',
    subsectionTitle: 'A. Kinematika (Harakat tasnifi)',
    title: 'Notekis va tekis tezlanuvchan harakat',
    subtitle: "O'rtacha va oniy tezlik, tezlanish, erkin tushish tezlanishi (g).",
    theory: {
      overview:
        'Notekis harakatda jismning tezligi vaqt o‘tishi bilan o‘zgaradi. Butun yo‘lning umumiy vaqtga nisbati o‘rtacha tezlik v_o‘rt = S_um / t_um deyiladi, trayektoriyaning cheksiz kichik Δt vaqtidagi tezligi esa oniy tezlik v⃗ = dr⃗/dt deb ataladi.\n\nTezlikning vaqt birligidagi o‘zgarish jadalligi tezlanish a⃗ = dv⃗/dt (m/s²) bilan tavsiflanadi. Agar a⃗ = const bo‘lsa, harakat tekis o‘zgaruvchan (tekis tezlanuvchan yoki sekinlanuvchan) deyiladi: tezlik v(t) = v₀ + a·t, ko‘chish S(t) = v₀·t + a·t²/2 va vaqtsiz formula v² − v₀² = 2aS. Yer sirti yaqinida havoning qarshiligisiz barcha jismlar bir xil erkin tushish tezlanishi g ≈ 9.81 m/s² bilan tushadi (Galiley qonuni).',
      keyLaws: [
        { title: 'Tezlanish ta’rifi', text: 'a⃗ = (v⃗ − v⃗₀) / Δt — tezlik vektorining 1 sekundda qanchaga o‘zgarishini bildiradi.' },
        { title: 'Galileyning toq sonlar qonuni', text: 'Boshlang‘ich tezliksiz tekis tezlanuvchan harakatda ketma-ket teng vaqtlarda bosilgan yo‘llar 1 : 3 : 5 : 7 nisbatda bo‘ladi.' },
        { title: 'Erkin tushish (g ≈ 9.81 m/s²)', text: 'Vakuumda jismning tushish tezlanishi uning massasi va shakliga bog‘liq emas.' },
      ],
      formulas: [
        { latex: 'a = (v − v₀) / t', name: 'Tezlanish formulasi', symbols: 'v₀ — boshlang‘ich tezlik, v — oxirgi tezlik, a — tezlanish (m/s²)' },
        { latex: 'S = v₀·t + (a·t²) / 2', name: 'Ko‘chish tenglamasi', symbols: 'S — ko‘chish (m), t — vaqt (s)' },
        { latex: 'v² − v₀² = 2·a·S', name: 'Vaqtsiz kinematik tenglama', symbols: 'v, v₀ — tezliklar, a — tezlanish, S — yo‘l' },
        { latex: 'h = g·t² / 2,  v = √(2gh)', name: 'Erkin tushish formulalari', symbols: 'h — balandlik (m), g = 9.81 m/s²' },
      ],
      constants: [
        { name: 'Standart erkin tushish tezlanishi', symbol: 'g', value: '9.80665', unit: 'm/s²' },
      ],
      applications: [
        'Avtomobillarning tormozlanish yo‘lini (S = v₀² / 2a) va xavfsizlik masofasini hisoblash.',
        'Raketalar startidagi ortiqcha yuklanish (a / g) hamda parashyut ochilish balandligini aniqlash.',
      ],
      calculator: {
        title: 'Tekis tezlanuvchan harakat va erkin tushish kalkulyatori',
        formulaDisplay: 'v = v₀ + a·t,  S = v₀·t + ½·a·t²',
        inputs: [
          { key: 'v0', label: 'Boshlang‘ich tezlik v₀', symbol: 'v₀', unit: 'm/s', min: 0, max: 100, step: 1, default: 4 },
          { key: 'a', label: 'Tezlanish a (yoki g)', symbol: 'a', unit: 'm/s²', min: -20, max: 30, step: 0.2, default: 9.8 },
          { key: 't', label: 'Harakat vaqti t', symbol: 't', unit: 's', min: 0.2, max: 20, step: 0.2, default: 3 },
        ],
        compute: (v) => {
          const vel = v.v0 + v.a * v.t;
          const s = v.v0 * v.t + 0.5 * v.a * v.t * v.t;
          return {
            value: s.toFixed(2),
            unit: 'm',
            summary: `Oxirgi tezlik v = ${vel.toFixed(2)} m/s, bosib o‘tilgan yo‘l S = ${s.toFixed(2)} m.`,
          };
        },
      },
    },
    simulation: {
      title: 'Erkin Tushish va Tiklanish Koeffitsiyenti 3D Simulyatsiyasi',
      openSourceUrl: 'sims/cx20/restitution.html',
      openSourceSource: 'cx20 Cannon-es 3D',
      openSourceNote: 'Turli balandlikdan erkin tushayotgan sharchalarning tezlanishini va sakrash energiyasini 3D fazoda kuzating.',
      alternateSims: [
        { label: 'Erkin tushish va sakrash (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/restitution.html' },
        { label: 'WebGL2 Tezlanuvchan Harakat', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'accelerated_motion',
        title: 'Tekis Tezlanuvchan Harakat va v(t), S(t) Osillografi',
        description: 'Boshlang‘ich tezlik v₀ va tezlanish a ni o‘zgartirib, koordinata parabolasi S(t) hamda tezlik chizig‘i v(t) ni kuzating.',
        controls: [
          { key: 'v0', label: 'Boshlang‘ich tezlik v₀', unit: 'm/s', min: 0, max: 30, step: 1, value: 5 },
          { key: 'a', label: 'Tezlanish a', unit: 'm/s²', min: -10, max: 15, step: 0.5, value: 4 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Jismning koordinatasi x = 4 + 6t + 2t² (m) tenglama bilan o‘zgaradi. Tezlanish qancha?', options: ['4 m/s²', '2 m/s²', '6 m/s²', '1 m/s²'], answer: 0, explain: 'x = x₀ + v₀t + (a/2)t² bilan solishtirsak, a/2 = 2 => a = 4 m/s².' },
      { q: 'Boshlang‘ich tezliksiz erkin tushayotgan jism 3 sekundda necha metr masofa bosadi (g = 10 m/s²)?', options: ['45 m', '30 m', '90 m', '15 m'], answer: 0, explain: 'h = g·t²/2 = 10 · 9 / 2 = 45 m.' },
      { q: 'Avtomobil yo‘lning birinchi yarmini 40 km/soat, ikkinchi yarmini 60 km/soat tezlik bilan o‘tdi. O‘rtacha tezlik qancha?', options: ['48 km/soat', '50 km/soat', '52 km/soat', '45 km/soat'], answer: 0, explain: 'Teng masofalarda o‘rtacha tezlik garmonik o‘rta: 2·40·60 / (40+60) = 4800/100 = 48 km/soat.' },
      { q: 'Jism 20 m/s boshlang‘ich tezlik bilan 4 m/s² sekinlanish bilan tormozlansa, to‘xtaguncha necha metr yuradi?', options: ['50 m', '100 m', '40 m', '25 m'], answer: 0, explain: 'S = v₀² / (2a) = 400 / 8 = 50 m.' },
      { q: 'Vakuumda bir xil balandlikdan tashlangan temir shar va qush pati qanday tushadi?', options: ['Bir vaqtda yerga yetib boradi', 'Temir shar oldin tushadi', 'Pat oldin tushadi', 'Ikkalasi havoda muallaq qoladi'], answer: 0, explain: 'Havoning qarshiligi bo‘lmaganda barcha jismlar g tezlanish bilan bir vaqtda tushadi.' },
      { q: 'Tezlik tenglamasi v = 10 − 2t (m/s) bo‘lsa, jism necha sekunddan keyin to‘xtaydi?', options: ['5 s', '2 s', '10 s', '4 s'], answer: 0, explain: 'v = 0 => 10 − 2t = 0 => t = 5 s.' },
      { q: 'Erkin tushayotgan jism 4-sekund oxirida qanday tezlikka erishadi (g = 10 m/s²)?', options: ['40 m/s', '80 m/s', '20 m/s', '160 m/s'], answer: 0, explain: 'v = g·t = 10 · 4 = 40 m/s.' },
      { q: 'Tik yuqoriga 30 m/s tezlik bilan otilgan tosh maksimal qancha balandlikka ko‘tariladi (g = 10 m/s²)?', options: ['45 m', '90 m', '30 m', '60 m'], answer: 0, explain: 'H = v₀² / (2g) = 900 / 20 = 45 m.' },
    ],
    problems: [
      {
        variants: [[0, 4, 5], [2, 3, 6], [5, 2, 10], [0, 6, 4]],
        build: (i) => {
          const [v0, a, t] = [[0, 4, 5], [2, 3, 6], [5, 2, 10], [0, 6, 4]][i];
          const s = v0 * t + 0.5 * a * t * t;
          return {
            q: `Boshlang‘ich tezligi ${v0} m/s bo‘lgan jism ${a} m/s² tezlanish bilan ${t} s harakatlandi. Bosib o‘tilgan yo‘lni (m) toping.`,
            correct: s,
            unit: 'm',
            explain: `S = v₀t + at²/2 = ${v0}·${t} + 0.5·${a}·${t}² = ${s} m.`,
          };
        },
      },
      {
        variants: [[20, 10], [80, 10], [125, 10], [45, 10]],
        build: (i) => {
          const [h, g] = [[20, 10], [80, 10], [125, 10], [45, 10]][i];
          const v = Math.sqrt(2 * g * h);
          return {
            q: `${h} m balandlikdan boshlang‘ich tezliksiz erkin tushayotgan jismning yerga urilish tezligi (m/s) qancha (g = 10 m/s²)?`,
            correct: v,
            unit: 'm/s',
            explain: `v = √(2gh) = √(2 · 10 · ${h}) = ${v} m/s.`,
          };
        },
      },
    ],
  },
  {
    id: '2A-4',
    code: '2A.4',
    sectionId: 'sec-2',
    subsectionId: '2A',
    subsectionTitle: 'A. Kinematika (Harakat tasnifi)',
    title: 'Egri chiziqli harakat',
    subtitle: 'Gorizontal va burchak ostida otilgan jism harakati (ballistika).',
    theory: {
      overview:
        'Egri chiziqli harakatda tezlik vektori uzluksiz ravishda trayektoriyaning har bir nuqtasiga urinma bo‘ylab yo‘naladi. Ballistikada gravitatsiya maydonida (g = const, havo qarshiligisiz) otilgan jism ikkita mustaqil harakatning yig‘indisi sifatida qaraladi: gorizontal OX o‘qi bo‘ylab tekis harakat (v_x = v₀·cosα = const) va vertikal OY o‘qi bo‘ylab erkin tushish tezlanishi ostidagi harakat (v_y = v₀·sinα − g·t).\n\nTrayektoriya tenglamasi y(x) = x·tgα − (g·x²)/(2·v₀²·cos²α) bo‘lib, bu parabola tenglamasidir. Maksimal uchish uzoqligi gorizontal sirtda α = 45° burchakda erishiladi: L = (v₀²·sin2α)/g. Maksimal ko‘tarilish balandligi H_max = (v₀²·sin²α)/(2g) va uchish vaqti T = (2·v₀·sinα)/g bilan aniqlanadi.',
      keyLaws: [
        { title: 'Harakatlar mustaqilligi tamoyili', text: 'Gorizontal (OX) tekis harakat va vertikal (OY) tekis o‘zgaruvchan harakat bir-biriga bog‘liq bo‘lmagan holda kechadi.' },
        { title: '45° optimal otish burchagi', text: 'Bir xil balandlikdagi sirtda maksimal gorizontal uzoqlik L_max = v₀²/g ga α = 45° da erishiladi.' },
        { title: 'Simmetrik burchaklar qoidasi', text: 'α va (90° − α) burchaklar ostida bir xil v₀ bilan otilgan jismlarning gorizontal uchish uzoqligi teng.' },
      ],
      formulas: [
        { latex: 'x(t) = v₀ · cosα · t,   y(t) = y₀ + v₀ · sinα · t − ½·g·t²', name: 'Ballistik koordinata tenglamalari', symbols: 'v₀ — boshlang‘ich tezlik, α — ufqqa burchak, y₀ — boshlang‘ich balandlik' },
        { latex: 'H_max = (v₀² · sin²α) / (2g)', name: 'Maksimal ko‘tarilish balandligi', symbols: 'g = 9.81 m/s²' },
        { latex: 'L = (v₀² · sin(2α)) / g', name: 'Uchish uzoqligi (y₀ = 0 da)', symbols: 'α — otish burchagi' },
        { latex: 'T = (2 · v₀ · sinα) / g', name: 'To‘liq uchish vaqti (y₀ = 0 da)', symbols: 'T — havoda bo‘lish vaqti (s)' },
      ],
      constants: [
        { name: 'Optimal uchish burchagi', symbol: 'α_opt', value: '45°', unit: 'gradus' },
        { name: 'Egri chiziqli harakat normal tezlanishi', symbol: 'a_n', value: 'v² / R', unit: 'm/s²' },
      ],
      applications: [
        'Artilleriya, sportda yadro uloqtirish va favvora suv oqimlari trayektoriyasini hisoblash.',
        'Koinot kemalarining suborbital parvoz trayektoriyalarini loyihalash.',
      ],
      calculator: {
        title: 'Ballistik uchish parametrlari kalkulyatori',
        formulaDisplay: 'H = (v₀sinα)²/2g,  L = v₀²sin(2α)/g',
        inputs: [
          { key: 'v0', label: 'Otish tezligi v₀', symbol: 'v₀', unit: 'm/s', min: 1, max: 100, step: 1, default: 20 },
          { key: 'deg', label: 'Otish burchagi α', symbol: 'α', unit: '°', min: 5, max: 89, step: 1, default: 45 },
          { key: 'g', label: 'Gravitatsiya g', symbol: 'g', unit: 'm/s²', min: 1.6, max: 20, step: 0.2, default: 9.8 },
        ],
        compute: (v) => {
          const rad = (v.deg * Math.PI) / 180;
          const vx = v.v0 * Math.cos(rad);
          const vy = v.v0 * Math.sin(rad);
          const T = (2 * vy) / v.g;
          const H = (vy * vy) / (2 * v.g);
          const L = vx * T;
          return {
            value: L.toFixed(2),
            unit: 'm',
            summary: `Uchish uzoqligi L = ${L.toFixed(2)} m, Maks. balandlik H = ${H.toFixed(2)} m, Uchish vaqti T = ${T.toFixed(2)} s.`,
          };
        },
      },
    },
    simulation: {
      title: '3D Ballistika va Parabolik Trayektoriya Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Projectile_Motion.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Otish balandligi, tezligi va burchagini sozlab, 3D parabolik trayektoriya hamda vx, vy tezlik vektorlarini kuzating.',
      alternateSims: [
        { label: 'Burchak ostida otilgan jism (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Projectile_Motion.html' },
        { label: 'WebGL2 Parabolik Trayektoriya', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'projectile',
        title: 'Ballistika va Tezlik Proyeksiyalari Simulyatori',
        description: 'Ufqqa burchak ostida otilgan jismning parabolik trayektoriyasi, maksimal nuqtadagi tezligi va H, L qiymatlarini real vaqtda tekshiring.',
        controls: [
          { key: 'v0', label: 'Boshlang‘ich tezlik v₀', unit: 'm/s', min: 5, max: 40, step: 1, value: 22 },
          { key: 'angle', label: 'Otish burchagi α', unit: '°', min: 10, max: 85, step: 5, value: 45 },
          { key: 'g', label: 'Gravitatsiya g', unit: 'm/s²', min: 2, max: 20, step: 0.5, value: 9.8 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ufqqa burchak ostida otilgan jism trayektoriyasining eng yuqori nuqtasida tezlik vektori qanday yo‘nalgan?', options: ['Faqat gorizontal (v_y = 0, v = v₀·cosα)', 'Nolga teng', 'Tik pastga', 'Tik yuqoriga'], answer: 0, explain: 'Eng yuqori nuqtada vertikal tashkil etuvchi v_y = 0 bo‘ladi, gorizontal tezlik v_x = v₀·cosα esa saqlanadi.' },
      { q: 'Havo qarshiligi bo‘lmaganda gorizontal sirtda maksimal uchish uzoqligiga qaysi burchakda erishiladi?', options: ['45°', '30°', '60°', '90°'], answer: 0, explain: 'L = v₀²·sin(2α)/g; sin(2α) maksimal qiymat 1 ga 2α = 90°, ya’ni α = 45° da erishadi.' },
      { q: 'Gorizontal yo‘nalishda 20 m/s tezlik bilan 45 m balandlikdan otilgan tosh yerga necha sekundda tushadi (g = 10 m/s²)?', options: ['3 s', '2 s', '4.5 s', '6 s'], answer: 0, explain: 'Tushish vaqti gorizontal tezlikka bog‘liq emas: t = √(2h/g) = √(90/10) = 3 s.' },
      { q: 'Egri chiziqli harakatda tezlanishning normal (markazga intilma) tashkil etuvchisi nimani o‘zgartiradi?', options: ['Tezlikning yo‘nalishini', 'Tezlikning faqat modulini', 'Jism massasini', 'Hech narsani'], answer: 0, explain: 'Normal tezlanish a_n = v²/R tezlik yo‘nalishini, tangensial tezlanish a_τ esa modulini o‘zgartiradi.' },
      { q: 'Ufqqa 30° va 60° burchaklar ostida bir xil tezlikda otilgan ikki snaryadning qaysi kattaligi teng bo‘ladi?', options: ['Gorizontal uchish uzoqligi', 'Maksimal ko‘tarilish balandligi', 'Uchish vaqti', 'Boshlang‘ich vertikal tezligi'], answer: 0, explain: 'sin(2·30°) = sin(60°) = sin(120°) = sin(2·60°), demak L₁ = L₂.' },
      { q: 'Burchak ostida otilgan jism parvozining har bir nuqtasida tezlanishi qanday (havo qarshiligisiz)?', options: ['Doimiy g ga teng va tik pastga yo‘nalgan', 'Trayektoriya bo‘ylab nolga teng', 'Yuqori nuqtada nol', 'Tezlikka parallel'], answer: 0, explain: 'Jismga faqat og‘irlik kuchi ta’sir qilgani uchun a⃗ = g⃗ = const.' },
      { q: 'Gorizontal 15 m/s tezlikda 20 m balandlikdan otilgan jism gorizontal yo‘nalishda qancha masofaga tushadi (g = 10 m/s²)?', options: ['30 m', '15 m', '45 m', '60 m'], answer: 0, explain: 't = √(2·20/10) = 2 s; L = v₀·t = 15 · 2 = 30 m.' },
      { q: 'Ufqqa 30° burchak ostida 40 m/s tezlik bilan otilgan jismning eng yuqori nuqtadagi tezligi qancha?', options: ['20√3 m/s (≈34.6 m/s)', '20 m/s', '40 m/s', '0 m/s'], answer: 0, explain: 'v_top = v₀·cos(30°) = 40 · (√3/2) = 20√3 m/s.' },
    ],
    problems: [
      {
        variants: [[20, 45], [30, 45], [40, 45], [10, 45]],
        build: (i) => {
          const [v0, deg] = [[20, 45], [30, 45], [40, 45], [10, 45]][i];
          const L = (v0 * v0) / 10;
          return {
            q: `Ufqqa ${deg}° burchak ostida ${v0} m/s tezlikda otilgan jismning uchish uzoqligini (m) toping (g = 10 m/s²).`,
            correct: L,
            unit: 'm',
            explain: `L = v₀²·sin(90°)/g = ${v0}² / 10 = ${L} m.`,
          };
        },
      },
      {
        variants: [[20, 30], [40, 30], [60, 30], [50, 30]],
        build: (i) => {
          const [v0, deg] = [[20, 30], [40, 30], [60, 30], [50, 30]][i];
          const T = (2 * v0 * 0.5) / 10;
          return {
            q: `Ufqqa ${deg}° burchak ostida ${v0} m/s tezlikda otilgan tosh necha sekunddan keyin yerga qaytib tushadi (g = 10 m/s²)?`,
            correct: T,
            unit: 's',
            explain: `T = 2·v₀·sin(30°)/g = 2·${v0}·0.5 / 10 = ${T} s.`,
          };
        },
      },
    ],
  },
  {
    id: '2A-5',
    code: '2A.5',
    sectionId: 'sec-2',
    subsectionId: '2A',
    subsectionTitle: 'A. Kinematika (Harakat tasnifi)',
    title: "Aylana bo'ylab tekis harakat",
    subtitle: "Davr, chastota, burchak tezlik, chiziqli tezlik, markazga intilma tezlanish.",
    theory: {
      overview:
        'Moddiy nuqta R radiusli aylana bo‘ylab o‘zgarmas son qiymatli tezlikda harakatlansa, bunday harakat aylana bo‘ylab tekis harakat deyiladi. Tezlik moduli o‘zgarmasa-da, uning yo‘nalishi uzluksiz o‘zgarib turadi, shu sababli harakat tezlanuvchandir.\n\nTo‘liq bir marta aylanish uchun ketgan vaqt aylanish davri T (s), 1 sekunddagi aylanishlar soni esa chastota ν = 1/T (Hz yoki s⁻¹) deyiladi. Radius-vektorning vaqt birligida burilish burchagi burchak tezlik ω = 2π/T = 2πν (rad/s) dir. Chiziqli tezlik v = ω·R = 2πR/T. Tezlik yo‘nalishining o‘zgarishini ta’minlovchi va doimo aylana markaziga yo‘nalgan tezlanish markazga intilma tezlanish deyiladi: a_n = v²/R = ω²·R.',
      keyLaws: [
        { title: 'Davr va chastota aloqasi', text: 'T = 1/ν va ν = N/t; bu yerda N — t vaqtdagi to‘liq aylanishlar soni.' },
        { title: 'Chiziqli va burchak tezlik', text: 'v = ω·R — aylanish o‘qidan uzoqlashgan sari chiziqli tezlik ortadi, burchak tezlik esa qattiq jismning barcha nuqtalari uchun bir xil.' },
        { title: 'Markazga intilma tezlanish', text: 'a_n = v²/R = ω²·R = ω·v — har doim tezlik vektoriga perpendikulyar va aylana markaziga yo‘nalgan.' },
      ],
      formulas: [
        { latex: 'T = 1 / ν,   ω = 2π / T = 2πν', name: 'Davr, chastota va burchak tezlik', symbols: 'T — davr (s), ν — chastota (Hz), ω — burchak tezlik (rad/s)' },
        { latex: 'v = ω · R = (2πR) / T', name: 'Chiziqli tezlik', symbols: 'R — aylana radiusi (m)' },
        { latex: 'a_n = v² / R = ω² · R', name: 'Markazga intilma tezlanish', symbols: 'a_n — normal tezlanish (m/s²)' },
      ],
      constants: [
        { name: 'To‘liq aylana burchagi', symbol: '2π', value: '6.2832', unit: 'rad' },
        { name: 'Yerning o‘z o‘qi atrofida davri', symbol: 'T_Yer', value: '86164', unit: 's' },
      ],
      applications: [
        'Tishli uzatmalar, turbinalar, sentrifugalar va avtomobil burilishidagi xavfsiz tezlikni hisoblash.',
        'Sun’iy yo‘ldoshlarning orbital davri va markazga intilma tezlanishini aniqlash.',
      ],
      calculator: {
        title: 'Aylana harakat parametrlari kalkulyatori',
        formulaDisplay: 'ω = 2πν,  v = ωR,  a_n = ω²R',
        inputs: [
          { key: 'R', label: 'Aylana radiusi R', symbol: 'R', unit: 'm', min: 0.1, max: 100, step: 0.2, default: 2 },
          { key: 'nu', label: 'Chastota ν', symbol: 'ν', unit: 'Hz', min: 0.1, max: 50, step: 0.1, default: 1.5 },
        ],
        compute: (v) => {
          const T = 1 / v.nu;
          const omega = 2 * Math.PI * v.nu;
          const linV = omega * v.R;
          const an = omega * omega * v.R;
          return {
            value: an.toFixed(2),
            unit: 'm/s²',
            summary: `Davr T = ${T.toFixed(3)} s, ω = ${omega.toFixed(2)} rad/s, chiziqli tezlik v = ${linV.toFixed(2)} m/s, a_n = ${an.toFixed(2)} m/s².`,
          };
        },
      },
    },
    simulation: {
      title: 'Aylana Bo‘ylab Harakat va Burilish Qiyaligi 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Circular_Motion.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Aylana bo‘ylab harakatda chiziqli tezlik va markazga intilma tezlanish vektorlarining yo‘nalishini 3D da kuzating.',
      alternateSims: [
        { label: 'Aylana bo‘ylab harakat (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Circular_Motion.html' },
        { label: 'Yo‘l burilishidagi qiyalik (Banking)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Banking_on_a_Road.html' },
      ],
      parametric: {
        mode: 'circular_motion',
        title: 'Aylana Harakat va Vektorlar Simulyatori',
        description: 'Radius R va burchak tezlik ω ni o‘zgartirib, urinma tezlik v⃗ hamda markazga intilma tezlanish a⃗_n vektorlarining o‘zgarishini kuzating.',
        controls: [
          { key: 'R', label: 'Aylana radiusi R', unit: 'm', min: 0.5, max: 4.5, step: 0.2, value: 2.4 },
          { key: 'omega', label: 'Burchak tezlik ω', unit: 'rad/s', min: 0.5, max: 8, step: 0.25, value: 2.5 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Aylana bo‘ylab tekis harakatda tezlik va markazga intilma tezlanish vektorlari orasidagi burchak qancha?', options: ['90°', '0°', '180°', '45°'], answer: 0, explain: 'Tezlik urinma bo‘ylab, markazga intilma tezlanish esa radius bo‘ylab markazga yo‘nalgani uchun ular doimo perpendikulyar (90°).' },
      { q: 'Agar chiziqli tezlik 2 marta oshirilib, radius o‘zgarmasa, markazga intilma tezlanish necha marta o‘zgaradi?', options: ['4 marta ortadi', '2 marta ortadi', '2 marta kamayadi', 'O‘zgarmaydi'], answer: 0, explain: 'a_n = v²/R bo‘lgani uchun v ikki barobar oshsa, a_n 2² = 4 marta ortadi.' },
      { q: 'Soatning minut strelkasining aylanish davri necha sekund?', options: ['3600 s', '60 s', '43200 s', '86400 s'], answer: 0, explain: 'Minut strelkasi 1 soatda (60 min = 3600 s) bir marta to‘liq aylanadi.' },
      { q: 'Chastotasi 5 Hz bo‘lgan g‘ildirakning burchak tezligi ω (rad/s) qanchaga teng?', options: ['10π rad/s', '5π rad/s', '2.5π rad/s', '20π rad/s'], answer: 0, explain: 'ω = 2πν = 2π · 5 = 10π rad/s.' },
      { q: 'Radiusi 2 m bo‘lgan aylana bo‘ylab 6 m/s tezlikda harakatlanayotgan jismning markazga intilma tezlanishi qancha?', options: ['18 m/s²', '12 m/s²', '3 m/s²', '36 m/s²'], answer: 0, explain: 'a_n = v²/R = 36 / 2 = 18 m/s².' },
      { q: 'Aylanuvchi diskdagi markazdan R va 2R masofada joylashgan ikki nuqtaning burchak tezliklari nisbati ω₁/ω₂ qancha?', options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'], answer: 0, explain: 'Qattiq diskning barcha nuqtalari bir xil burchak tezlik ω bilan aylanadi.' },
      { q: '120 ayl/min chastota SI tizimida necha Gerts (Hz) bo‘ladi?', options: ['2 Hz', '120 Hz', '0.5 Hz', '60 Hz'], answer: 0, explain: 'ν = 120 / 60 s = 2 Hz.' },
      { q: 'Burchak tezligi 4 rad/s, radiusi 0.5 m bo‘lgan nuqtaning chiziqli tezligi qancha?', options: ['2 m/s', '8 m/s', '4 m/s', '1 m/s'], answer: 0, explain: 'v = ω · R = 4 · 0.5 = 2 m/s.' },
    ],
    problems: [
      {
        variants: [[2, 8], [5, 10], [4, 12], [1, 5]],
        build: (i) => {
          const [R, v] = [[2, 8], [5, 10], [4, 12], [1, 5]][i];
          const an = (v * v) / R;
          return {
            q: `Radiusi ${R} m bo‘lgan aylana bo‘ylab ${v} m/s tezlikda harakatlanayotgan jismning markazga intilma tezlanishini (m/s²) toping.`,
            correct: an,
            unit: 'm/s²',
            explain: `a_n = v² / R = ${v}² / ${R} = ${an} m/s².`,
          };
        },
      },
      {
        variants: [[3, 2], [4, 0.5], [5, 3], [2, 4]],
        build: (i) => {
          const [w, R] = [[3, 2], [4, 0.5], [5, 3], [2, 4]][i];
          const an = w * w * R;
          return {
            q: `Burchak tezligi ω = ${w} rad/s va radiusi R = ${R} m bo‘lgan nuqtaning markazga intilma tezlanishi (m/s²) qancha?`,
            correct: an,
            unit: 'm/s²',
            explain: `a_n = ω² · R = ${w}² · ${R} = ${an} m/s².`,
          };
        },
      },
    ],
  },
  {
    id: '2B-1',
    code: '2B.1',
    sectionId: 'sec-2',
    subsectionId: '2B',
    subsectionTitle: 'B. Dinamika (Harakat sabablari)',
    title: 'Nyuton qonunlari',
    subtitle: "Inersiya va massa (1-qonun), kuch va tezlanish (2-qonun), ta'sir va aks ta'sir (3-qonun).",
    theory: {
      overview:
        'Dinamika jismlar harakatining vujudga kelish va o‘zgarish sabablarini — kuchlar va massa ta’sirini o‘rganadi. Klassik mexanika Isaak Nyutonning uchta fundamental qonuniga tayanadi.\n\n1-qonun (Inersiya qonuni): shunday inersial sanoq sistemalari mavjudki, ularda tashqi ta’sir bo‘lmaganda yoki kuchlar muvozanatlashganda jism tinch holatini yoki to‘g‘ri chiziqli tekis harakatini saqlaydi. 2-qonun: jismning olgan tezlanishi unga ta’sir etuvchi natijaviy kuchga to‘g‘ri, massasiga esa teskari proporsionaldir (a⃗ = F⃗_nat / m yoki umumiy shaklda F⃗ = dp⃗/dt). 3-qonun: ikki jism bir-biriga modul jihatdan teng, bir to‘g‘ri chiziq bo‘ylab qarama-qarshi yo‘nalgan kuchlar bilan ta’sir qiladi (F⃗₁₂ = −F⃗₂₁); bu kuchlar har xil jismlarga qo‘yilgani uchun bir-birini muvozanatlamaydi.',
      keyLaws: [
        { title: 'Nyutonning 1-qonuni (Inersiya)', text: 'Tashqi kuchlar yig‘indisi nol bo‘lsa (∑F⃗ = 0), jismning tezligi o‘zgarmaydi (v⃗ = const). Massa — inertlik o‘lchovidir.' },
        { title: 'Nyutonning 2-qonuni', text: '∑F⃗ = m·a⃗ — tezlanish vektorining yo‘nalishi doimo natijaviy kuch yo‘nalishi bilan bir xil.' },
        { title: 'Nyutonning 3-qonuni', text: 'F⃗₁₂ = −F⃗₂₁ — ta’sir va aks ta’sir kuchlari doimo juft bo‘lib, bir xil fizik tabiatga ega va ikki xil jismga qo‘yiladi.' },
      ],
      formulas: [
        { latex: '∑F⃗ = m · a⃗', name: 'Nyutonning 2-qonuni', symbols: 'F — natijaviy kuch (N), m — massa (kg), a — tezlanish (m/s²)' },
        { latex: 'F⃗₁₂ = −F⃗₂₁', name: 'Nyutonning 3-qonuni', symbols: 'F⃗₁₂ — 2-jismga 1-jism ta’siri, F⃗₂₁ — aks ta’sir' },
        { latex: 'F⃗ = dp⃗ / dt', name: 'Nyuton 2-qonunining impuls shakli', symbols: 'p⃗ = m·v⃗ — jism impulsi' },
      ],
      constants: [
        { name: 'Kuch SI birligi (Nyuton)', symbol: 'N', value: '1 N = 1 kg·m/s²', unit: 'N' },
      ],
      applications: [
        'Avtomobil xavfsizlik yostiqchalari va kamarlarining inersiya qonuni asosida ishlashi.',
        'Reaktiv dvigatellarda Nyutonning 3-qonuni asosida tortish kuchi hosil qilish.',
      ],
      calculator: {
        title: 'Nyutonning 2-qonuni kalkulyatori (a = F_nat / m)',
        formulaDisplay: 'a = (F_tort − F_qarsh) / m',
        inputs: [
          { key: 'Ft', label: 'Tortish kuchi F₁', symbol: 'F₁', unit: 'N', min: 0, max: 500, step: 2, default: 60 },
          { key: 'Fq', label: 'Qarshilik kuchi F₂', symbol: 'F₂', unit: 'N', min: 0, max: 500, step: 2, default: 15 },
          { key: 'm', label: 'Jism massasi m', symbol: 'm', unit: 'kg', min: 0.5, max: 100, step: 0.5, default: 5 },
        ],
        compute: (v) => {
          const fnet = v.Ft - v.Fq;
          const a = fnet / v.m;
          return {
            value: a.toFixed(2),
            unit: 'm/s²',
            summary: `Natijaviy kuch F_nat = ${fnet.toFixed(1)} N, tezlanish a = ${a.toFixed(2)} m/s².`,
          };
        },
      },
    },
    simulation: {
      title: 'WebGL2 Nyuton Dinamikasi va Kuchlar Laboratoriyasi',
      openSourceUrl: 'sims/mbsaloka/index.html',
      openSourceSource: 'mbsaloka WebGL2',
      openSourceNote: 'Tashqi kuch F, burchak θ, massa m va ishqalanish μ parametrlarini kiritib Nyuton qonunlari bo‘yicha 3D harakatni kuzating.',
      alternateSims: [
        { label: 'WebGL2 Kuch va Massa Simulyatori', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
        { label: 'Cannon-es 3D Zarba va Dinamika', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/balls.html' },
      ],
      parametric: {
        mode: 'newton_laws',
        title: 'Nyutonning 2-Qonuni Dinamika Simulyatori',
        description: 'Kuch F, qarshilik va massa m ni o‘zgartirib, aravacha tezlanishi, tezlik o‘sishi va kuch vektorlarini kuzating.',
        controls: [
          { key: 'F', label: 'Tashqi kuch F', unit: 'N', min: 0, max: 100, step: 2, value: 40 },
          { key: 'm', label: 'Massa m', unit: 'kg', min: 1, max: 25, step: 1, value: 5 },
          { key: 'mu', label: 'Ishqalanish μ', unit: '', min: 0, max: 0.8, step: 0.05, value: 0.15 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Avtobus keskin tormozlanganda yo‘lovchilarning oldinga og‘ishi qaysi qonun bilan tushuntiriladi?', options: ['Nyutonning 1-qonuni (inersiya)', 'Nyutonning 3-qonuni', 'Guk qonuni', 'Paskal qonuni'], answer: 0, explain: 'Yo‘lovchilar tanasi avtobus tormozlanishidan oldingi tezligini saqlashga (inersiya) intiladi.' },
      { q: 'Massasi 4 kg bo‘lgan jismga 20 N natijaviy kuch ta’sir qilsa, u qanday tezlanish oladi?', options: ['5 m/s²', '80 m/s²', '0.2 m/s²', '16 m/s²'], answer: 0, explain: 'a = F / m = 20 / 4 = 5 m/s².' },
      { q: 'Nima uchun Nyutonning 3-qonunidagi ta’sir va aks ta’sir kuchlari bir-birini muvozanatlamaydi?', options: ['Ular har xil jismlarga qo‘yilgan', 'Ularning modullari teng emas', 'Yo‘nalishlari bir xil', 'Faqat vakuumda ta’sir qiladi'], answer: 0, explain: 'Muvozanatlashish uchun kuchlar bitta jismga qo‘yilgan bo‘lishi kerak; F⃗₁₂ va F⃗₂₁ esa ikki xil jismga ta’sir etadi.' },
      { q: 'Jismga 30 N va 40 N kuchlar o‘zaro perpendikulyar (90°) yo‘nalishda ta’sir etmoqda. Massasi 10 kg bo‘lsa, tezlanishi qancha?', options: ['5 m/s²', '7 m/s²', '1 m/s²', '50 m/s²'], answer: 0, explain: 'F_nat = √(30² + 40²) = 50 N; a = 50 / 10 = 5 m/s².' },
      { q: 'Jismning inertlik xossasini belgilovchi asosiy fizik kattalik qaysi?', options: ['Massa', 'Hajm', 'Tezlik', 'Kuch'], answer: 0, explain: 'Massa qancha katta bo‘lsa, jismning tezligini o‘zgartirish shuncha qiyin (inertligi yuqori).' },
      { q: 'Agar jism tekis va to‘g‘ri chiziqli harakatlanayotgan bo‘lsa, unga ta’sir etuvchi barcha kuchlarning vektor yig‘indisi nimaga teng?', options: ['Nolga teng', 'Massaga teng', 'Tezlikka teng', 'O‘zgarmas musbat songa teng'], answer: 0, explain: 'v = const => a = 0 => ∑F⃗ = m·a⃗ = 0.' },
      { q: '10 kg massali jism 3 m/s² tezlanish bilan harakatlanishi uchun necha Nyuton natijaviy kuch kerak?', options: ['30 N', '3.3 N', '13 N', '90 N'], answer: 0, explain: 'F = m · a = 10 · 3 = 30 N.' },
      { q: 'Yer Oyni F kuch bilan tortsa, Oy Yerni qanday kuch bilan tortadi?', options: ['Xuddi shunday F ga teng kuch bilan (qarama-qarshi yo‘nalishda)', 'Ancha kichik kuch bilan', 'Katta kuch bilan', 'Tortmaydi'], answer: 0, explain: 'Nyutonning 3-qonuniga ko‘ra F_Yer-Oy = F_Oy-Yer.' },
    ],
    problems: [
      {
        variants: [[40, 8], [60, 12], [75, 15], [90, 10]],
        build: (i) => {
          const [F, m] = [[40, 8], [60, 12], [75, 15], [90, 10]][i];
          const a = F / m;
          return {
            q: `Massasi ${m} kg bo‘lgan jismga ${F} N natijaviy kuch ta’sir etsa, jismning tezlanishi (m/s²) qancha bo‘ladi?`,
            correct: a,
            unit: 'm/s²',
            explain: `a = F / m = ${F} / ${m} = ${a} m/s².`,
          };
        },
      },
      {
        variants: [[6, 5], [12, 4], [15, 2], [8, 7]],
        build: (i) => {
          const [m, a] = [[6, 5], [12, 4], [15, 2], [8, 7]][i];
          const F = m * a;
          return {
            q: `Massasi ${m} kg jismga ${a} m/s² tezlanish berish uchun necha Nyuton natijaviy kuch kerak?`,
            correct: F,
            unit: 'N',
            explain: `F = m · a = ${m} · ${a} = ${F} N.`,
          };
        },
      },
    ],
  },
  {
    id: '2B-2',
    code: '2B.2',
    sectionId: 'sec-2',
    subsectionId: '2B',
    subsectionTitle: 'B. Dinamika (Harakat sabablari)',
    title: 'Tabiatdagi kuchlar',
    subtitle: "Butun olam tortishish qonuni, og'irlik kuchi, jismning vazni va vaznsizlik.",
    theory: {
      overview:
        'Tabiatdagi jismlar orasida tortishish (gravitatsiya) o‘zaro ta’siri mavjud. Nyutonning butun olam tortishish qonuniga ko‘ra, har qanday ikki moddiy nuqta massalari ko‘paytmasiga to‘g‘ri, orasidagi masofa kvadratiga teskari proporsional kuch bilan tortishadi: F = G·(m₁·m₂)/r², bu yerda G = 6.674·10⁻¹¹ N·m²/kg².\n\nSayyora sirtidan h balandlikdagi erkin tushish tezlanishi g(h) = G·M/(R+h)² bilan kamayadi. Og‘irlik kuchi F_og‘ = m·g jismga qo‘yilgan va sayyora markaziga yo‘nalgan; jismning vazni P esa jism o‘z og‘irligi tufayli tayanchga yoki osma ipga beradigan kuchdir. Tayanch a tezlanish bilan yuqoriga harakatlansa P = m(g + a) (ortiqcha yuklanish), pastga a tezlanish bilan tushsa P = m(g − a), erkin tushishda (a = g) esa P = 0 — vaznsizlik holati kuzatiladi.',
      keyLaws: [
        { title: 'Butun olam tortishish qonuni', text: 'F = G·m₁·m₂ / r² — tortishish kuchi doimo jismlar markazlarini tutashtiruvchi to‘g‘ri chiziq bo‘ylab yo‘nalgan.' },
        { title: 'Og‘irlik kuchi va Vazn farqi', text: 'Og‘irlik kuchi jismga qo‘yilgan (m·g), vazn P esa tayanchga yoki osmaga qo‘yilgan kuchdir.' },
        { title: 'Vaznsizlik (a = g)', text: 'Faqat gravitatsiya ta’sirida erkin harakatlanayotgan sun’iy yo‘ldosh va kosmonavtlarda vazn P = 0 bo‘ladi, ammo og‘irlik kuchi saqlanadi!' },
      ],
      formulas: [
        { latex: 'F = G · (m₁ · m₂) / r²', name: 'Butun olam tortishish qonuni', symbols: 'G = 6.674·10⁻¹¹ N·m²/kg², r — markazlar orasidagi masofa' },
        { latex: 'g(h) = G·M / (R + h)²', name: 'Balandlikka qarab g o‘zgarishi', symbols: 'M, R — sayyora massasi va radiusi, h — balandlik' },
        { latex: 'P = m(g ± a)', name: 'Tezlanishli harakatdagi vazn', symbols: '+ yuqoriga tezlanganda, − pastga tezlanganda' },
        { latex: 'v₁ = √(G·M / R) = √(g·R)', name: 'Birinchi kosmik tezlik', symbols: 'Yer uchun v₁ ≈ 7.91 km/s' },
      ],
      constants: [
        { name: 'Gravitatsiya doimiysi', symbol: 'G', value: '6.674·10⁻¹¹', unit: 'N·m²/kg²' },
        { name: 'Yerning o‘rtacha radiusi', symbol: 'R_Yer', value: '6.371·10⁶', unit: 'm' },
      ],
      applications: [
        'Geostatsionar va past orbitadagi sun’iy yo‘ldoshlarning birinchi kosmik tezligini hisoblash.',
        'Liftlar va kosmik apparatlarda ortiqcha yuklanish koeffitsiyentini (n = P / mg) aniqlash.',
      ],
      calculator: {
        title: 'Gravitatsiya kuchi va liftdagi vazn kalkulyatori',
        formulaDisplay: 'g(h) = g₀·(R/(R+h))²,  P = m(g₀ + a_y)',
        inputs: [
          { key: 'm', label: 'Jism massasi m', symbol: 'm', unit: 'kg', min: 1, max: 500, step: 1, default: 70 },
          { key: 'hkm', label: 'Yer sirtidan balandlik h', symbol: 'h', unit: 'km', min: 0, max: 20000, step: 100, default: 400 },
          { key: 'ay', label: 'Lift tezlanishi (+yuqori, -past)', symbol: 'a_y', unit: 'm/s²', min: -9.8, max: 30, step: 0.5, default: 2 },
        ],
        compute: (v) => {
          const R = 6371;
          const gh = 9.81 * Math.pow(R / (R + v.hkm), 2);
          const P = Math.max(0, v.m * (9.81 + v.ay));
          return {
            value: P.toFixed(1),
            unit: 'N',
            summary: `h = ${v.hkm} km balandlikda g(h) = ${gh.toFixed(2)} m/s². Liftdagi vazn P = ${P.toFixed(1)} N.`,
          };
        },
      },
    },
    simulation: {
      title: 'Butun Olam Tortishish Qonuni va Vaznsizlik 3D Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Gravitation_Law.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Ikki jism massasi va orasidagi masofani o‘zgartirib, tortishish kuchining 1/r² qonuni bo‘yicha o‘zgarishini kuzating.',
      alternateSims: [
        { label: 'Butun olam tortishish qonuni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Gravitation_Law.html' },
        { label: 'Gravitatsiya kuchi vektorlari', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Gravitational_Force.html' },
        { label: 'Astronavt va Vaznsizlik (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Astronaut.html' },
      ],
      parametric: {
        mode: 'gravitation',
        title: 'Gravitatsion Tortishish va Vazn Simulyatori',
        description: 'Massalar m₁, m₂ va masofa r ni sozlab, F = Gm₁m₂/r² bog‘lanishi va balandlikka qarab g(h) pasayishini kuzating.',
        controls: [
          { key: 'm1', label: '1-jism massasi (M)', unit: '×10²⁴ kg', min: 1, max: 20, step: 0.5, value: 6 },
          { key: 'r', label: 'Masofa r', unit: '×10⁶ m', min: 4, max: 20, step: 0.5, value: 6.4 },
          { key: 'ay', label: 'Tayanch tezlanishi a', unit: 'm/s²', min: -9.8, max: 15, step: 0.5, value: 0 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Ikki jism orasidagi masofa 3 marta orttirilsa, gravitatsion tortishish kuchi necha marta o‘zgaradi?', options: ['9 marta kamayadi', '3 marta kamayadi', '9 marta ortadi', '3 marta ortadi'], answer: 0, explain: 'F ~ 1/r², shuning uchun masofa 3 marta oshsa kuch 3² = 9 marta kamayadi.' },
      { q: 'Yer sirtidan Yer radiusiga teng h = R balandlikda erkin tushish tezlanishi qancha bo‘ladi?', options: ['g / 4 (≈ 2.45 m/s²)', 'g / 2', 'g / 9', '0'], answer: 0, explain: 'g(h) = G·M / (R + R)² = g₀ / 4.' },
      { q: 'Orbitadagi kosmonavt nima sababdan vaznsizlik holatida bo‘ladi?', options: ['Kosmik kema va kosmonavt bir xil g tezlanish bilan erkin tushayotgani (tayanch reaksiyasi N=0) uchun', 'U yerda gravitatsiya mutlaqo nol bo‘lgani uchun', 'Havo yo‘qligi uchun', 'Massasi nolga tenglashgani uchun'], answer: 0, explain: 'Orbitada gravitatsiya kuchli (g ≈ 8.7 m/s²), lekin kema doimiy erkin tushishda (a = g) bo‘lgani uchun tayanchga bosim yo‘q.' },
      { q: 'Massasi 60 kg odam 2 m/s² tezlanish bilan yuqoriga ko‘tarilayotgan liftda polga necha Nyuton kuch bilan bosadi (g = 10 m/s²)?', options: ['720 N', '600 N', '480 N', '120 N'], answer: 0, explain: 'P = m(g + a) = 60 · (10 + 2) = 720 N.' },
      { q: 'Yer uchun birinchi kosmik tezlik taxminan qanchaga teng?', options: ['7.9 km/s', '11.2 km/s', '3.1 km/s', '16.7 km/s'], answer: 0, explain: 'v₁ = √(g·R) ≈ 7.9 km/s — aylanma orbitaga chiqish tezligi.' },
      { q: 'Gravitatsiya doimiysi G ni birinchi bo‘lib laboratoriya sharoitida kim o‘lchagan?', options: ['Genri Kavendish (1798)', 'Galileo Galiley', 'Iogann Kepler', 'Maykl Faradey'], answer: 0, explain: 'Kavendish buralma tarozilar yordamida G ning qiymatini aniqlagan.' },
      { q: 'Massasi 50 kg jism 4 m/s² tezlanish bilan pastga tushayotgan liftda qanday vaznga ega bo‘ladi (g = 10 m/s²)?', options: ['300 N', '700 N', '500 N', '200 N'], answer: 0, explain: 'P = m(g − a) = 50 · (10 − 4) = 300 N.' },
      { q: 'Og‘irlik kuchi va jism vaznining o‘lchov birligi SI tizimida nima?', options: ['Nyuton (N)', 'Kilogramm (kg)', 'Joul (J)', 'Paskal (Pa)'], answer: 0, explain: 'Ikkalasi ham kuch bo‘lgani uchun Nyuton (N) da o‘lchanadi.' },
    ],
    problems: [
      {
        variants: [[60, 2], [80, 5], [50, 4], [70, 3]],
        build: (i) => {
          const [m, a] = [[60, 2], [80, 5], [50, 4], [70, 3]][i];
          const P = m * (10 + a);
          return {
            q: `Massasi ${m} kg bo‘lgan yuk ${a} m/s² tezlanish bilan yuqoriga ko‘tarilmoqda. Yukning vaznini (N) toping (g = 10 m/s²).`,
            correct: P,
            unit: 'N',
            explain: `P = m(g + a) = ${m} · (10 + ${a}) = ${P} N.`,
          };
        },
      },
      {
        variants: [[2], [3], [4], [5]],
        build: (i) => {
          const [k] = [[2], [3], [4], [5]][i];
          const f = 100 / (k * k);
          return {
            q: `Ikki jism orasidagi tortishish kuchi 100 N edi. Orasidagi masofa ${k} marta orttirilsa, tortishish kuchi (N) qancha bo‘ladi?`,
            correct: f,
            unit: 'N',
            explain: `F' = F / k² = 100 / ${k}² = ${f} N.`,
          };
        },
      },
    ],
  },
  {
    id: '2B-3',
    code: '2B.3',
    sectionId: 'sec-2',
    subsectionId: '2B',
    subsectionTitle: 'B. Dinamika (Harakat sabablari)',
    title: 'Elastiklik va ishqalanish',
    subtitle: 'Guk qonuni, bikrlik, sirpanish, tinchlik va dumalanish ishqalanish kuchlari.',
    theory: {
      overview:
        'Jism tashqi kuch ta’sirida o‘lcham yoki shaklini o‘zgartirganda (deformatsiya) dastlabki holatiga qaytarishga intiluvchi elektromagnit tabiatli elastiklik kuchi yuzaga keladi. Kichik elastik deformatsiyalarda Guk qonuni bajariladi: F_el = −k·Δx, bu yerda k (N/m) — bikrlik koeffitsiyenti, Δx — mutlaq uzayish yoki siqilish. Material xossalarini hisobga oluvchi umumiy shakli: mexanik kuchlanish σ = E·ε (Yung moduli E va nisbiy uzayish ε = Δl/l₀).\n\nJismlar sirtlari tutashganda nisbiy harakatga to‘sqinlik qiluvchi ishqalanish kuchi hosil bo‘ladi. Tinchlikdagi ishqalanish kuchi F_tinch ≤ μ·N tashqi kuchga moslashadi; maksimal qiymatidan oshganda jism siljiydi va sirpanish ishqalanish kuchi F_ishq = μ·N ta’sir qiladi (N — tayanchning normal reaksiya kuchi). Dumalanish ishqalanishi sirpanishga qaraganda o‘nlab marta kichik bo‘ladi.',
      keyLaws: [
        { title: 'Guk qonuni', text: 'F_el = −k·Δx — elastiklik kuchi deformatsiyaga proporsional va doimo qarama-qarshi yo‘nalgan.' },
        { title: 'Prujinalarni ulash', text: 'Parallel ulashda k_um = k₁ + k₂; ketma-ket ulashda 1/k_um = 1/k₁ + 1/k₂.' },
        { title: 'Amonton-Kulon ishqalanish qonuni', text: 'F_ishq = μ·N — sirpanish ishqalanishi tegib turgan sirtlar yuzasiga emas, normal reaksiya kuchi N va sirtlar materialiga (μ) bog‘liq.' },
      ],
      formulas: [
        { latex: 'F_el = −k · Δx', name: 'Guk qonuni', symbols: 'k — bikrlik (N/m), Δx — deformatsiya (m)' },
        { latex: 'F_ishq = μ · N', name: 'Sirpanish ishqalanish kuchi', symbols: 'μ — ishqalanish koeffitsiyenti, N — normal bosim kuchi (N)' },
        { latex: 'σ = F / S = E · (Δl / l₀)', name: 'Yung moduli va mexanik kuchlanish', symbols: 'E — Yung moduli (Pa), S — ko‘ndalang kesim yuzasi' },
      ],
      constants: [
        { name: 'Po‘latning Yung moduli', symbol: 'E_po‘lat', value: '2.0·10¹¹', unit: 'Pa' },
      ],
      applications: [
        'Avtomobil amortizatorlari, dinamometrlar va seysmik himoya prujinalarini hisoblash.',
        'Shinalar va tormoz kolodkalarida yuqori μ, podshipniklarda esa dumalanish hisobiga juda kichik ishqalanish yaratish.',
      ],
      calculator: {
        title: 'Guk qonuni va qiya tekislik ishqalanishi kalkulyatori',
        formulaDisplay: 'F_el = k·Δx,  F_ishq = μ·m·g·cosα',
        inputs: [
          { key: 'k', label: 'Prujina bikrligi k', symbol: 'k', unit: 'N/m', min: 10, max: 2000, step: 10, default: 200 },
          { key: 'dx', label: 'Deformatsiya Δx', symbol: 'Δx', unit: 'm', min: 0.01, max: 1, step: 0.01, default: 0.15 },
          { key: 'm', label: 'Massa m', symbol: 'm', unit: 'kg', min: 1, max: 100, step: 1, default: 10 },
          { key: 'mu', label: 'Ishqalanish koef. μ', symbol: 'μ', unit: '', min: 0.05, max: 1, step: 0.05, default: 0.25 },
          { key: 'alpha', label: 'Tekislik qiyaligi α', symbol: 'α', unit: '°', min: 0, max: 60, step: 5, default: 30 },
        ],
        compute: (v) => {
          const Fel = v.k * v.dx;
          const rad = (v.alpha * Math.PI) / 180;
          const N = v.m * 9.81 * Math.cos(rad);
          const Fishq = v.mu * N;
          return {
            value: Fel.toFixed(1),
            unit: 'N',
            summary: `Elastiklik kuchi F_el = ${Fel.toFixed(1)} N; qiya tekislikda N = ${N.toFixed(1)} N va ishqalanish F_ishq = ${Fishq.toFixed(1)} N.`,
          };
        },
      },
    },
    simulation: {
      title: 'Prujina Kuchi (Guk) va 3D Qiya Tekislik Ishqalanishi Laboratoriyasi',
      openSourceUrl: 'sims/effectuall/Mechanics_Spring_Force.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Prujina bikrligi va yuk massasini o‘zgartirib Guk qonuni bo‘yicha cho‘zilishni kuzating, hamda Cannon-es 3D qiya tekislikda ishqalanishni sinang.',
      alternateSims: [
        { label: 'Prujina va Guk qonuni (3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Spring_Force.html' },
        { label: 'Qiya tekislikda ishqalanish (3D)', source: 'cx20 Cannon-es 3D', url: 'sims/cx20/friction.html' },
        { label: 'WebGL2 Ishqalanish va Harakat', source: 'mbsaloka WebGL2', url: 'sims/mbsaloka/index.html' },
      ],
      parametric: {
        mode: 'spring_friction',
        title: 'Guk Qonuni va Ishqalanish Kuchlari Simulyatori',
        description: 'Prujina bikrligi k, jism massasi m va ishqalanish koeffitsiyenti μ ni sozlab, muvozanat va sirpanish shartlarini kuzating.',
        controls: [
          { key: 'k', label: 'Bikrlik k', unit: 'N/m', min: 20, max: 400, step: 10, value: 120 },
          { key: 'm', label: 'Massa m', unit: 'kg', min: 1, max: 20, step: 1, value: 5 },
          { key: 'mu', label: 'Ishqalanish μ', unit: '', min: 0, max: 0.9, step: 0.05, value: 0.2 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Bikrligi 500 N/m bo‘lgan prujinani 4 sm ga cho‘zish uchun necha Nyuton kuch kerak?', options: ['20 N', '2000 N', '125 N', '2 N'], answer: 0, explain: 'F = k · Δx = 500 · 0.04 = 20 N.' },
      { q: 'Gorizontal yo‘lda sirpanayotgan 10 kg massali jismga ta’sir etuvchi ishqalanish kuchi 20 N bo‘lsa, ishqalanish koeffitsiyenti μ qancha (g = 10 m/s²)?', options: ['0.2', '0.5', '2.0', '0.02'], answer: 0, explain: 'μ = F_ishq / (m·g) = 20 / 100 = 0.2.' },
      { q: 'Bikrliklari k₁ = 100 N/m va k₂ = 100 N/m bo‘lgan ikki prujina ketma-ket ulansa, umumiy bikrlik qancha bo‘ladi?', options: ['50 N/m', '200 N/m', '100 N/m', '25 N/m'], answer: 0, explain: 'Ketma-ket ulashda k_um = (k₁·k₂)/(k₁+k₂) = 100/2 = 50 N/m.' },
      { q: 'Qiya tekislik burchagi α bo‘lganda, tekislikning jismga normal reaksiya kuchi qaysi formula bilan topiladi?', options: ['N = m·g·cosα', 'N = m·g·sinα', 'N = m·g·tgα', 'N = m·g'], answer: 0, explain: 'Tekislikka perpendikulyar tashkil etuvchi m·g·cosα ga teng.' },
      { q: 'Tinchlikdagi ishqalanish kuchi qachon maksimal qiymatiga yetadi?', options: ['Jism qo‘zg‘alish arafasida bo‘lganda', 'Jism katta tezlikda harakatlanganda', 'Tashqi kuch nol bo‘lganda', 'Sirt muz bilan qoplanganda'], answer: 0, explain: 'F_tinch tashqi kuch bilan birga o‘sib, F_tinch,max = μ·N ga yetganda jism siljiy boshlaydi.' },
      { q: 'Nima uchun og‘ir yuklarni ko‘chirishda g‘ildiraklar ishlatiladi?', options: ['Dumalanish ishqalanishi sirpanish ishqalanishidan ancha kichik bo‘lgani uchun', 'Massani kamaytirish uchun', 'Gravitatsiyani yo‘qotish uchun', 'Elastiklikni oshirish uchun'], answer: 0, explain: 'Dumalanish ishqalanishi sirtlar deformatsiyasining kichikligi sababli sirpanishdan 10–100 marta kam.' },
      { q: 'Bikrligi 200 N/m va 300 N/m bo‘lgan ikki prujina parallel ulansa, umumiy bikrlik qancha?', options: ['500 N/m', '120 N/m', '250 N/m', '100 N/m'], answer: 0, explain: 'Parallel ulashda k_um = k₁ + k₂ = 200 + 300 = 500 N/m.' },
      { q: 'Jism qiya tekislikdan ishqalanishsiz sirpanganda uning tezlanishi nimaga teng?', options: ['a = g·sinα', 'a = g·cosα', 'a = μ·g', 'a = g'], answer: 0, explain: 'm·a = m·g·sinα => a = g·sinα.' },
    ],
    problems: [
      {
        variants: [[400, 0.05], [600, 0.03], [250, 0.08], [500, 0.06]],
        build: (i) => {
          const [k, dx] = [[400, 0.05], [600, 0.03], [250, 0.08], [500, 0.06]][i];
          const f = k * dx;
          return {
            q: `Bikrligi ${k} N/m bo‘lgan prujina ${dx * 100} sm ga siqilganda hosil bo‘ladigan elastiklik kuchini (N) toping.`,
            correct: f,
            unit: 'N',
            explain: `F_el = k · Δx = ${k} · ${dx} = ${f} N.`,
          };
        },
      },
      {
        variants: [[20, 0.25], [15, 0.4], [30, 0.1], [10, 0.35]],
        build: (i) => {
          const [m, mu] = [[20, 0.25], [15, 0.4], [30, 0.1], [10, 0.35]][i];
          const f = mu * m * 10;
          return {
            q: `Gorizontal tekislikda turgan ${m} kg massali jism bilan sirt orasidagi ishqalanish koeffitsiyenti μ = ${mu}. Sirpanish ishqalanish kuchi (N) qancha (g = 10 m/s²)?`,
            correct: f,
            unit: 'N',
            explain: `F_ishq = μ · m · g = ${mu} · ${m} · 10 = ${f} N.`,
          };
        },
      },
    ],
  },
  {
    id: '2B-4',
    code: '2B.4',
    sectionId: 'sec-2',
    subsectionId: '2B',
    subsectionTitle: 'B. Dinamika (Harakat sabablari)',
    title: 'Inersial va noinersial sanoq sistemalari',
    subtitle: 'Inersiya kuchlari, markazdan qochma kuch, Koriolis kuchi.',
    theory: {
      overview:
        'Nyuton qonunlari bevosita faqat inersial sanoq sistemalarida (tinch turgan yoki to‘g‘ri chiziqli tekis harakatlanayotgan sistemalarda) bajariladi. Tezlanish bilan yoki aylanma harakat qilayotgan har qanday sistema noinersial sanoq sistemasi (NSS) deyiladi.\n\nNoinersial sanoq sistemasida Nyutonning 2-qonunini qo‘llash uchun real o‘zaro ta’sir kuchlariga qo‘shimcha ravishda xayoliy (kinematik kelib chiqishga ega) inersiya kuchlari kiritiladi: 1) chiziqli tezlanishli sistemada F⃗_in = −m·a⃗_s; 2) ω burchak tezlik bilan aylanuvchi sistemada — aylanish o‘qidan tashqariga yo‘nalgan markazdan qochma inersiya kuchi F_mq = m·ω²·r; 3) aylanuvchi sistemada v⃗_nis tezlik bilan harakatlanayotgan jismga ta’sir etuvchi Koriolis kuchi F⃗_K = 2m·(v⃗_nis × ω⃗). Koriolis kuchi Yerda shamollar (passatlar, siklonlar), daryo o‘zanlarining yuvilishi va Fuko mayatnigining og‘ishiga sabab bo‘ladi.',
      keyLaws: [
        { title: 'Galiley nisbiylik tamoyili', text: 'Barcha inersial sanoq sistemalarida mexanikaning barcha qonunlari bir xil shaklda o‘rinlidir.' },
        { title: 'Chiziqli inersiya kuchi', text: 'F⃗_in = −m·a⃗₀ — sistemaning tezlanishiga qarama-qarshi yo‘naladi.' },
        { title: 'Markazdan qochma kuch', text: 'F_mq = m·ω²·r = m·v²/r — faqat aylanuvchi (noinersial) sanoq sistemasida qaralganda paydo bo‘ladi.' },
        { title: 'Koriolis kuchi', text: 'F⃗_K = 2m(v⃗_nis × ω⃗) — Shimoliy yarimsharda harakatlanayotgan jismlarni o‘ngga, Janubiy yarimsharda chapga og‘diradi.' },
      ],
      formulas: [
        { latex: 'm·a⃗_nis = F⃗_real − m·a⃗₀', name: 'Noinersial sistemada dinamika tenglamasi', symbols: 'a⃗₀ — sistemaning tezlanishi' },
        { latex: 'F_mq = m · ω² · r', name: 'Markazdan qochma inersiya kuchi', symbols: 'ω — aylanish burchak tezligi, r — o‘qdan masofa' },
        { latex: 'F_K = 2 · m · v_nis · ω · sinθ', name: 'Koriolis kuchi moduli', symbols: 'θ — v⃗_nis va ω⃗ vektorlari orasidagi burchak' },
      ],
      constants: [
        { name: 'Yerning sutkalik burchak tezligi', symbol: 'ω_Yer', value: '7.292·10⁻⁵', unit: 'rad/s' },
      ],
      applications: [
        'Tibbiyot va kosmonavtikada moddalarni ajratuvchi sentrifugalar va sun’iy gravitatsiya yaratish.',
        'Meteorologiyada Koriolis kuchi ta’sirida siklon va antitsiklonlarning aylanish yo‘nalishini modellashtirish.',
        'Avtomobil yo‘llarining burilish joylarini qiya (banked) qilib qurish.',
      ],
      calculator: {
        title: 'Markazdan qochma va Koriolis kuchi kalkulyatori',
        formulaDisplay: 'F_mq = m·ω²·r,  F_K = 2·m·v·ω·sinθ',
        inputs: [
          { key: 'm', label: 'Massa m', symbol: 'm', unit: 'kg', min: 1, max: 200, step: 1, default: 10 },
          { key: 'w', label: 'Burchak tezlik ω', symbol: 'ω', unit: 'rad/s', min: 0.1, max: 20, step: 0.2, default: 4 },
          { key: 'r', label: 'O‘qdan masofa r', symbol: 'r', unit: 'm', min: 0.2, max: 20, step: 0.2, default: 2 },
          { key: 'vnis', label: 'Nisbiy tezlik v_nis', symbol: 'v', unit: 'm/s', min: 0, max: 30, step: 1, default: 5 },
        ],
        compute: (v) => {
          const fmq = v.m * v.w * v.w * v.r;
          const fk = 2 * v.m * v.vnis * v.w;
          return {
            value: fmq.toFixed(1),
            unit: 'N',
            summary: `Markazdan qochma kuch F_mq = ${fmq.toFixed(1)} N; maksimal Koriolis kuchi (θ=90°) F_K = ${fk.toFixed(1)} N.`,
          };
        },
      },
    },
    simulation: {
      title: 'Burilish Qiyaligi (Banking) va Aylanuvchi Sanoq Sistemasi 3D Lab',
      openSourceUrl: 'sims/effectuall/Mechanics_Banking_on_a_Road.html',
      openSourceSource: 'Effectuall 3D Lab',
      openSourceNote: 'Aylanuvchi sanoq sistemasida markazdan qochma kuch va yo‘l qiyalik burchagi o‘zaro qanday muvozanatlanishini 3D kuzating.',
      alternateSims: [
        { label: 'Burilishda muvozanat (Banking 3D)', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Banking_on_a_Road.html' },
        { label: 'Presessiya va Aylanma Harakat', source: 'Effectuall 3D Lab', url: 'sims/effectuall/Mechanics_Precession_Motion.html' },
      ],
      parametric: {
        mode: 'noninertial_coriolis',
        title: 'Aylanuvchi Platforma: Markazdan Qochma va Koriolis Kuchi Simulyatori',
        description: 'Aylanuvchi diskda markazdan chetga harakatlanayotgan sharchaning inertsiya (qo‘zg‘almas) va aylanuvchi (noinersial) sistemadagi trayektoriyasini solishtiring.',
        controls: [
          { key: 'omega', label: 'Disk burchak tezligi ω', unit: 'rad/s', min: 0.5, max: 5, step: 0.25, value: 2 },
          { key: 'vrad', label: 'Radial tezlik v_nis', unit: 'm/s', min: 0.5, max: 5, step: 0.25, value: 1.5 },
        ],
      },
    },
    coreQuestions: [
      { q: 'Qaysi sanoq sistemasi INERSIAL sanoq sistemasi hisoblanadi?', options: ['To‘g‘ri chiziqli tekis harakatlanayotgan poyezd', 'Tezlanib borayotgan raketa', 'Burilayotgan avtomobil', 'Aylanayotgan karusel'], answer: 0, explain: 'Tezlanishi a = 0 bo‘lgan to‘g‘ri chiziqli tekis harakatdagi sistema inersialdir.' },
      { q: 'Koriolis kuchi qachon yuzaga keladi?', options: ['Jism aylanuvchi sanoq sistemasiga nisbatan harakatlanganda (v_nis ≠ 0)', 'Jism aylanuvchi tizimda tinch turganda', 'Faqat vakuumdagi to‘g‘ri harakatda', 'Massa nolga teng bo‘lganda'], answer: 0, explain: 'F⃗_K = 2m(v⃗_nis × ω⃗) — agar jism aylanuvchi tizimga nisbatan tinch bo‘lsa (v_nis = 0), Koriolis kuchi nolga teng.' },
      { q: 'Shimoliy yarimsharda shimoldan janubga oqayotgan daryo Koriolis kuchi ta’sirida qaysi qirg‘og‘ini ko‘proq yuvadi?', options: ['O‘ng qirg‘og‘ini', 'Chap qirg‘og‘ini', 'Hech qaysi qirg‘oqni yuvmasdan chuqurlashadi', 'Faqat markazini'], answer: 0, explain: 'Shimoliy yarimsharda Koriolis kuchi harakat yo‘nalishiga nisbatan o‘ngga og‘diradi.' },
      { q: 'Fuko mayatnigining tebranish tekisligi sekin burilishi nimani isbotlaydi?', options: ['Yerning o‘z o‘qi atrofida aylanishini', 'Oyning Yerga tortilishini', 'Quyoshning haroratini', 'Havo bosimini'], answer: 0, explain: 'Fuko mayatnigiga Yerning aylanishi tufayli Koriolis kuchi ta’sir qilib, tebranish tekisligini buradi.' },
      { q: 'Inersiya kuchlarining Nyuton mexanikasidagi real kuchlardan asosiy farqi nimada?', options: ['Ularning aks ta’sir jufti (3-qonun jufti) mavjud emas', 'Ularning birligi Nyuton emas', 'Faqat gazlarda uchraydi', 'Massaga bog‘liq emas'], answer: 0, explain: 'Inersiya kuchlari biror ikkinchi jism ta’siridan emas, sanoq sistemasining tezlanishidan kelib chiqadi.' },
      { q: 'Radiusi 2 m bo‘lgan aylanuvchi platforma chetida 3 rad/s burchak tezlikda turgan 5 kg jismga ta’sir etuvchi markazdan qochma kuch qancha?', options: ['90 N', '30 N', '45 N', '15 N'], answer: 0, explain: 'F_mq = m·ω²·r = 5 · 9 · 2 = 90 N.' },
      { q: 'Vagon a = 5 m/s² tezlanish bilan oldinga harakatlanayotganda shiftga osilgan mayatnik qaysi tomonga og‘adi?', options: ['Harakatga qarama-qarshi (orqaga)', 'Oldinga', 'Og‘maydi', 'Tepaga ko‘tariladi'], answer: 0, explain: 'Inersiya kuchi F_in = −m·a vagon tezlanishiga qarama-qarshi yo‘naladi.' },
      { q: 'Galileyning mexanik nisbiylik tamoyili nimani tasdiqlaydi?', options: ['Inersial sistema ichida hech qanday mexanik tajriba bilan uning tinch yoki tekis harakatda ekanini aniqlab bo‘lmaydi', 'Tezlik hamma tizimlarda bir xil', 'Koriolis kuchi hamma joyda teng', 'Gravitatsiya faqat Yerda bor'], answer: 0, explain: 'Mexanika qonunlari barcha inersial sanoq sistemalarida invariant (bir xil) dir.' },
    ],
    problems: [
      {
        variants: [[4, 5, 2], [2, 3, 4], [10, 2, 3], [5, 4, 1.5]],
        build: (i) => {
          const [m, w, r] = [[4, 5, 2], [2, 3, 4], [10, 2, 3], [5, 4, 1.5]][i];
          const f = m * w * w * r;
          return {
            q: `Burchak tezligi ${w} rad/s bo‘lgan aylanuvchi platformada o‘qdan ${r} m masofada joylashgan ${m} kg jismga ta’sir etuvchi markazdan qochma kuch (N) qancha?`,
            correct: f,
            unit: 'N',
            explain: `F_mq = m·ω²·r = ${m} · ${w}² · ${r} = ${f} N.`,
          };
        },
      },
      {
        variants: [[2, 10, 3], [5, 4, 2], [3, 8, 5], [4, 6, 2]],
        build: (i) => {
          const [m, v, w] = [[2, 10, 3], [5, 4, 2], [3, 8, 5], [4, 6, 2]][i];
          const fk = 2 * m * v * w;
          return {
            q: `ω = ${w} rad/s tezlikda aylanuvchi tizimda aylanish o‘qiga perpendikulyar ravishda ${v} m/s tezlikda harakatlanayotgan ${m} kg jismga ta’sir etuvchi Koriolis kuchi (N) qancha?`,
            correct: fk,
            unit: 'N',
            explain: `F_K = 2·m·v·ω = 2 · ${m} · ${v} · ${w} = ${fk} N.`,
          };
        },
      },
    ],
  },
];
