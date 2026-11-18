// Tailored Multi-Simulator Profiles for ALL 55 Chemistry Topics
// Every topic provides 4 distinct switchable visual simulators (1 primary + 3 alternates)

const L = (lab) => `sims/chem3d/vlab.html?lab=${lab}`;
const M = (mol) => `sims/chem3d/mol3d.html?mol=${mol}`;
const EFF = (file) => `sims/effectuall/${file}`;
const PBF = 'sims/pbf/index.html';

const VLAB = 'ChemCollective · PhET';
const MOL = '3Dmol.js · MolView';
const OLAB = 'Amrita OLabs · VLab';
const PHET = 'PhET Interactive Sims';
const E3D = 'Effectuall 3D Lab';
const PBF_SRC = 'Three.js Particle Fluids (PBF)';

export const CHEM_SIM_PROFILES = {
  // 1A
  'C1A-1': {
    title: 'Laboratoriya Xavfsizligi va Bunsen Qizdirish Stendi',
    openSourceUrl: L('lab_safety'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Suv va Kislota Aralashtirish (3D)', source: MOL, url: M('h2o') },
      { label: 'Bug‘lanish va Suyuqlik Dinamikasi', source: PBF_SRC, url: PBF },
      { label: 'Filtrlash va Bug‘latish Apparati', source: OLAB, url: L('filtration') },
    ],
  },
  'C1A-2': {
    title: 'Distillyatsiya Kolonnasi va Xromatografiya Stendi',
    openSourceUrl: L('separation'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Filtrlash va Kristallash Tajribasi', source: VLAB, url: L('filtration') },
      { label: 'Etanol va Suv 3D Molekulalari', source: MOL, url: M('c2h5oh') },
      { label: 'Suyuqliklar Diffuziyasi (PBF 3D)', source: PBF_SRC, url: PBF },
    ],
  },
  'C1A-3': {
    title: 'Suv va Molekulalar Nisbiy Massasi (3Dmol)',
    openSourceUrl: M('h2o'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Sulfat Kislota H₂SO₄ (Mr = 98) 3D', source: MOL, url: M('h2so4') },
      { label: 'Mol Tarozisi va Evdiometr Stendi', source: VLAB, url: L('stoichiometry') },
      { label: 'Bor Atom Modeli (3D)', source: E3D, url: EFF('Quantum_The_Bohr_Atom.html') },
    ],
  },
  'C1A-4': {
    title: 'Valentlik va Oksidlanish Darajasi Laboratoriyasi',
    openSourceUrl: M('h2so4'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Nitrat Kislota HNO₃ (N +5) 3D Modeli', source: MOL, url: M('hno3') },
      { label: 'Davriy Jadval Valent Elektronlari', source: PHET, url: L('periodic') },
      { label: 'Galvanik OQR Juftligi Stendi', source: VLAB, url: L('redox_galvanic') },
    ],
  },
  'C1A-5': {
    title: 'Stexiometrik Mol Tarozisi va Evdiometr Reaktori',
    openSourceUrl: L('stoichiometry'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Ideal Gaz va Avogadro Hajmi (3D)', source: E3D, url: EFF('Thermodynamics_Ideal_Gas_Equation.html') },
      { label: 'Gaz Molekulalari Kinetikasi (3D)', source: E3D, url: EFF('Thermodynamics_Kinetic_Theory_of_Gases.html') },
      { label: 'CO₂ va H₂O Reaksiya 3D Modellari', source: MOL, url: M('co2') },
    ],
  },

  // 1B
  'C1B-1': {
    title: 'Rezerford-Bor 3D Kvant Atom Modeli',
    openSourceUrl: EFF('Quantum_The_Bohr_Atom.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'Katod Nurlari va Elektron Tajribasi (3D)', source: E3D, url: EFF('Quantum_Cathode_Rays_The_Electrons.html') },
      { label: 'Mendeleyev Davriy Jadvali Qobiqlari', source: PHET, url: L('periodic') },
      { label: 'Vodorod 3D Kvant Orbitali', source: E3D, url: EFF('Quantum_Hydrogen_Atom.html') },
    ],
  },
  'C1B-2': {
    title: 's, p, d Orbitallar va Vodorod Kvant Simulyatori',
    openSourceUrl: EFF('Quantum_Hydrogen_Atom.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'Davriy Jadval Konfiguratsiya Stendi', source: PHET, url: L('periodic') },
      { label: 'Fotoeffekt va Energetik Pog‘onalar', source: E3D, url: EFF('Quantum_Photoelectric_Effect.html') },
      { label: 'Bor Orbital Sakrashlari (3D)', source: E3D, url: EFF('Quantum_The_Bohr_Atom.html') },
    ],
  },
  'C1B-3': {
    title: 'Mendeleyev Davriy Qonuni Interaktiv Stendi',
    openSourceUrl: L('periodic'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Kationlar Spektral Alanga Testi', source: OLAB, url: L('flame_test') },
      { label: 'Elektromanfiylik va Bog‘ Qutbliligi', source: VLAB, url: L('bonding') },
      { label: 'Osh Tuzi (NaCl) Ion Kristall 3D', source: MOL, url: M('nacl_lattice') },
    ],
  },

  // 1C
  'C1C-1': {
    title: 'Kovalent, Ion va Donor-Akseptor Bog‘lanish Stendi',
    openSourceUrl: L('bonding'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Ammiak NH₃ Donor-Akseptor 3D', source: MOL, url: M('nh3') },
      { label: 'Vodorod Xlorid (HCl) Qutbli Dipol 3D', source: MOL, url: M('hcl') },
      { label: 'Kulon Elektrostatik Tortishish (3D)', source: E3D, url: EFF('Electricity_Coulombs_Law.html') },
    ],
  },
  'C1C-2': {
    title: 'VSEPR Nazariyasi: Tetraedr CH₄ va Gibridlanish (3D)',
    openSourceUrl: M('ch4'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'sp Chiziqli CO₂ (180°) 3D Modeli', source: MOL, url: M('co2') },
      { label: 'sp² Yassi Etilen (120°) 3D Modeli', source: MOL, url: M('c2h4') },
      { label: 'Burchakli Suv H₂O (104.5°) 3D Modeli', source: MOL, url: M('h2o') },
    ],
  },
  'C1C-3': {
    title: 'NaCl Ion Panjarasi va Kvars/Olmos Kristallari (3D)',
    openSourceUrl: M('nacl_lattice'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Olmos sp³ Atom Kristall Karkasi 3D', source: MOL, url: M('diamond') },
      { label: 'Grafit va Grafen 2D Qatlamlari 3D', source: MOL, url: M('graphite') },
      { label: 'Fulleren Sferik Nano-Kristall 3D', source: MOL, url: M('fullerene') },
    ],
  },

  // 2A
  'C2A-1': {
    title: 'Kalorimetr va Entalpiya (ΔH) Termokimyo Stendi',
    openSourceUrl: L('calorimetry'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Gazlar Kinetik Energiyasi (3D)', source: E3D, url: EFF('Thermodynamics_Kinetic_Theory_of_Gases.html') },
      { label: 'Reaksiya To‘qnashuvlar Labi', source: PHET, url: L('kinetics') },
      { label: 'Yonish Mahsuloti CO₂ 3D Tuzilishi', source: MOL, url: M('co2') },
    ],
  },
  'C2A-2': {
    title: 'Vant-Goff Tezlik Qoidasi va Maksvell-Bolsman Labi',
    openSourceUrl: L('kinetics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Katalitik Aktivatsiya Stendi', source: VLAB, url: L('catalysis') },
      { label: 'Molekulyar Issiqlik Harakati (3D)', source: E3D, url: EFF('Thermodynamics_Kinetic_Theory_of_Gases.html') },
      { label: 'Boyl-Mariott Bosim Qonuni (3D)', source: E3D, url: EFF('Thermodynamics_Boyles_Law.html') },
    ],
  },
  'C2A-3': {
    title: 'Gomogen va Geterogen Kataliz (Pt/V₂O₅) Reaktori',
    openSourceUrl: L('catalysis'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Sulfat Kislota V₂O₅ Kontakt Apparati', source: OLAB, url: L('contact_h2so4') },
      { label: 'Kinetik To‘qnashuvlar Labi', source: PHET, url: L('kinetics') },
      { label: 'Ammiak Sintezi Porshen Muvozanati', source: PHET, url: L('equilibrium') },
    ],
  },
  'C2A-4': {
    title: 'Le Shatelye Prinsipi va Porshenli Muvozanat Stendi',
    openSourceUrl: L('equilibrium'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Ammiak NH₃ 3D Molekula Modeli', source: MOL, url: M('nh3') },
      { label: 'Kontakt Usuli Muvozanat Siljishi', source: OLAB, url: L('contact_h2so4') },
      { label: 'Sharl Harorat Qonuni (3D)', source: E3D, url: EFF('Thermodynamics_Charles_Law.html') },
    ],
  },

  // 2B
  'C2B-1': {
    title: 'Eruvchanlik Egri Chizig‘i va Gidratlanish Stendi',
    openSourceUrl: L('solutions'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Filtrlash va Qayta Kristallash Labi', source: OLAB, url: L('filtration') },
      { label: 'Spektrofotometr Konsentratsiya O‘lchovi', source: PHET, url: L('spectroscopy') },
      { label: 'NaCl Ion Panjarasining Suvda Erishi', source: MOL, url: M('nacl_lattice') },
    ],
  },
  'C2B-2': {
    title: 'Elektrolit va Noelektrolit Tok O‘tkazuvchanlik Labi',
    openSourceUrl: L('dissociation'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'pH Indikatorlar va Ionlar Stendi', source: VLAB, url: L('ph_scale') },
      { label: 'Sirka Kislota (Kuchsiz Elektrolit) 3D', source: MOL, url: M('ch3cooh') },
      { label: 'Osh Tuzi (Kuchli Elektrolit) 3D', source: MOL, url: M('nacl_lattice') },
    ],
  },
  'C2B-3': {
    title: 'Raqamli pH-Metr, Gidroliz va Indikatorlar Stendi',
    openSourceUrl: L('ph_scale'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Byuretka Kislota-Asos Titrlashi', source: VLAB, url: L('titration') },
      { label: 'Suv (H₂O) Avtoprotoliz 3D Modeli', source: MOL, url: M('h2o') },
      { label: 'Elektrolit Dissotsilanish Kuchi', source: PHET, url: L('dissociation') },
    ],
  },

  // 2C
  'C2C-1': {
    title: 'Oksidlanish-Qaytarilish Elektron Balansi Stendi',
    openSourceUrl: L('inorganic_classes'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Galvanik Element Elektronlar Oqimi', source: VLAB, url: L('redox_galvanic') },
      { label: 'Nitrat Kislota (Kuchli Oksidlovchi) 3D', source: MOL, url: M('hno3') },
      { label: 'Galogen Oksidlovchi Siqib Chiqarishi', source: OLAB, url: L('halogens_lab') },
    ],
  },
  'C2C-2': {
    title: 'Daniel-Yakobi Galvanik Elementi va Tuz Ko‘prigi',
    openSourceUrl: L('redox_galvanic'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Elektroliz Vannasi va Katod Qoplamasi', source: VLAB, url: L('electrolysis') },
      { label: 'Mis (Cu) Metall Panjara 3D Modeli', source: MOL, url: M('cu_metal') },
      { label: 'Elektr Maydon Kuchlanishi (3D)', source: E3D, url: EFF('Electricity_The_Electric_Field.html') },
    ],
  },
  'C2C-3': {
    title: 'Faradey Elektroliz Qonunlari va Gaz Yig‘ish Labi',
    openSourceUrl: L('electrolysis'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Galvanik Element vs Elektroliz Solishtirish', source: VLAB, url: L('redox_galvanic') },
      { label: 'Osh Tuzi (NaCl) Suyuqlanma Panjarasi 3D', source: MOL, url: M('nacl_lattice') },
      { label: 'Elektrolit Lampochka Sinovi', source: PHET, url: L('dissociation') },
    ],
  },

  // 3A
  'C3A-1': {
    title: 'Oksidlar: Asosli, Kislotali va Amfoter O‘tishlar (3D)',
    openSourceUrl: M('so2'),
    openSourceSource: MOL,
    alternateSims: [
      { label: '4 Sinfli Sifat Reaksiyalar Stendi', source: OLAB, url: L('inorganic_classes') },
      { label: 'CO₂ (Kislotali Oksid) 3D Modeli', source: MOL, url: M('co2') },
      { label: 'SiO₂ Kvars Oksidi Atom Panjarasi 3D', source: MOL, url: M('sio2_quartz') },
    ],
  },
  'C3A-2': {
    title: 'Asoslar, Ishqorlar va Amfoter Gidroksidlar Titrlashi',
    openSourceUrl: L('titration'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Amfoter Zn(OH)₂ Erish Reaksiyasi Stendi', source: OLAB, url: L('inorganic_classes') },
      { label: 'pH Shkalasi va Fenolftalein Labi', source: PHET, url: L('ph_scale') },
      { label: 'Ammiakli Suv (NH₃) 3D Molekulasi', source: MOL, url: M('nh3') },
    ],
  },
  'C3A-3': {
    title: 'Kislorodli va Kislorodsiz Kislotalar Laboratoriyasi',
    openSourceUrl: M('h3po4'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Sulfat Kislota (H₂SO₄) 3D Tuzilishi', source: MOL, url: M('h2so4') },
      { label: 'Kislota-Indikator va pH Stendi', source: PHET, url: L('ph_scale') },
      { label: 'Byuretka Neytrallash Titrlashi', source: VLAB, url: L('titration') },
    ],
  },
  'C3A-4': {
    title: 'Tuzlar Tasnifi va Genetik Bog‘lanish Stendi',
    openSourceUrl: L('inorganic_classes'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Tuz Kationlari Alanga Rangi Testi', source: OLAB, url: L('flame_test') },
      { label: 'Eritmalarda Ion Almashinuvi va Cho‘kma', source: VLAB, url: L('solutions') },
      { label: 'NaCl O‘rta Tuz Kristall 3D', source: MOL, url: M('nacl_lattice') },
    ],
  },

  // 3B
  'C3B-1': {
    title: 'Galogenlar Sublimatsiyasi va Faollik Qatori (Cl₂, Br₂, I₂)',
    openSourceUrl: L('halogens_lab'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Vodorod Xlorid (HCl) 3D Molekulasi', source: MOL, url: M('hcl') },
      { label: '2H₂ + O₂ Vodorod Stexiometriyasi', source: PHET, url: L('stoichiometry') },
      { label: 'Kation va Galogenid Alanga Sinovi', source: OLAB, url: L('flame_test') },
    ],
  },
  'C3B-2': {
    title: 'Kontakt Usulida Sulfat Kislota Zavodi (H₂SO₄)',
    openSourceUrl: L('contact_h2so4'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Oltingugurt S₈ Toj Allotropi 3D', source: MOL, url: M('s8_crown') },
      { label: 'Ozon O₃ va SO₂ Molekulalari 3D', source: MOL, url: M('o3') },
      { label: 'H₂SO₄ Kislota 3D Fazoviy Tuzilishi', source: MOL, url: M('h2so4') },
    ],
  },
  'C3B-3': {
    title: 'Azot (NH₃, HNO₃) va Oq Fosfor P₄ Tetraedri (3D)',
    openSourceUrl: M('p4_white'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Nitrat Kislota HNO₃ (+5) 3D Modeli', source: MOL, url: M('hno3') },
      { label: 'Ortofosfat Kislota H₃PO₄ 3D Modeli', source: MOL, url: M('h3po4') },
      { label: 'Ammiak Sintezi (Le Shatelye Porsheni)', source: PHET, url: L('equilibrium') },
    ],
  },
  'C3B-4': {
    title: 'Uglerod Allotropiyasi (Olmos, Grafit, Fulleren) va Kvars 3D',
    openSourceUrl: M('sio2_quartz'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Grafit va Grafen 2D Qatlami 3D', source: MOL, url: M('graphite') },
      { label: 'Fulleren Nano-Sferasi 3D', source: MOL, url: M('fullerene') },
      { label: 'Olmos Tetraedrik Panjara 3D', source: MOL, url: M('diamond') },
    ],
  },

  // 3C
  'C3C-1': {
    title: 'Domna Pechi — Cho‘yan, Po‘lat va Metallurgiya',
    openSourceUrl: L('metallurgy'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Mis (Cu) Metall Panjara 3D Modeli', source: MOL, url: M('cu_metal') },
      { label: 'Metallarning Elektrod Potensiallari', source: VLAB, url: L('redox_galvanic') },
      { label: 'Elektrolitik Tozalash va Faradey', source: VLAB, url: L('electrolysis') },
    ],
  },
  'C3C-2': {
    title: 'Ishqoriy Metallar (Li⁺, Na⁺, K⁺, Ca²⁺) Alanga Spektri',
    openSourceUrl: L('flame_test'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Eritmada Tuzlarning Gidratlanishi', source: VLAB, url: L('solutions') },
      { label: 'Davriy Jadvalda IA va IIA Guruhi', source: PHET, url: L('periodic') },
      { label: 'Osh Tuzi (NaCl) Kubik Ion Panjarasi', source: MOL, url: M('nacl_lattice') },
    ],
  },
  'C3C-3': {
    title: 'Alyuminiy Amfoterligi va Elektroliz Olinishi',
    openSourceUrl: L('electrolysis'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Amfoter Gidroksid Erish Stendi', source: OLAB, url: L('inorganic_classes') },
      { label: 'Metallurgiya Qaytarish Jarayoni', source: OLAB, url: L('metallurgy') },
      { label: 'Kuchli Ishqor Titrlash Labi', source: VLAB, url: L('titration') },
    ],
  },
  'C3C-4': {
    title: 'Verner Komplekslari: [Cu(NH₃)₄]²⁺ (3D Koordinatsiya)',
    openSourceUrl: M('cu_nh3_4'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Cu²⁺ va d-Element Alanga Ranglari', source: OLAB, url: L('flame_test') },
      { label: 'Mis (Cu) Metall Panjara 3D', source: MOL, url: M('cu_metal') },
      { label: 'Mis (II) Ionlari Spektrofotometriyasi', source: PHET, url: L('spectroscopy') },
    ],
  },

  // 4A
  'C4A-1': {
    title: 'A.M. Butlerov Nazariyasi: Butan va Izobutan Izomeriyasi (3D)',
    openSourceUrl: M('isobutane'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Etan (C₂H₆) σ-Bog‘ Aylanishi 3D', source: MOL, url: M('c2h6') },
      { label: 'Propan (C₃H₈) Zanjirli Tuzilish 3D', source: MOL, url: M('c3h8') },
      { label: 'Etanol va Dimetil Efir Asosi 3D', source: MOL, url: M('c2h5oh') },
    ],
  },
  'C4A-2': {
    title: 'Radikal & Ion Mexanizmlar, Induktiv (+I/−I) Effekt',
    openSourceUrl: L('kinetics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Toluol (+I) vs Fenol (+M) Elektron 3D', source: MOL, url: M('toluene') },
      { label: 'Sirka Kislota Qutbli Bog‘i 3D', source: MOL, url: M('ch3cooh') },
      { label: 'Bog‘ Qutbliligi va Morze Egri Chizig‘i', source: VLAB, url: L('bonding') },
    ],
  },

  // 4B
  'C4B-1': {
    title: 'Alkanlar Gomologik Qatori: Metan, Etan, Propan (3D)',
    openSourceUrl: M('c3h8'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Metan (CH₄) sp³ Tetraedri 3D', source: MOL, url: M('ch4') },
      { label: 'Izobutan Tarmoqlangan Izomeri 3D', source: MOL, url: M('isobutane') },
      { label: 'Yoqilg‘i Yonishi Kalorimetriyasi', source: VLAB, url: L('calorimetry') },
    ],
  },
  'C4B-2': {
    title: 'Tsiklogeksan Kreslo Konformatsiyasi va Tsikloalkanlar (3D)',
    openSourceUrl: M('cyclohexane'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Benzol Aromatik Halqa Solishtirish', source: MOL, url: M('c6h6') },
      { label: 'To‘yinmagan Br₂ Sifat Testi', source: OLAB, url: L('silver_mirror') },
      { label: 'Propan Chiziqli Zanjiri 3D', source: MOL, url: M('c3h8') },
    ],
  },
  'C4B-3': {
    title: 'Alkenlar (C=C): Etilen sp² Yassi Bog‘i va Br₂ Testi',
    openSourceUrl: M('c2h4'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Alken + Bromli Suv Rangsizlanishi', source: OLAB, url: L('silver_mirror') },
      { label: 'Polietilen Polimerlanish Reaktori', source: VLAB, url: L('polymer_reactor') },
      { label: 'Reaksiya Energetik Profili', source: PHET, url: L('catalysis') },
    ],
  },
  'C4B-4': {
    title: 'Izopren Dienlari va Kauchuk Vulkanizatsiyasi Reaktori',
    openSourceUrl: L('polymer_reactor'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Izopren (C₅H₈) Kon’yugirlangan 3D Model', source: MOL, url: M('isoprene') },
      { label: 'Oltingugurt S₈ Vulkanizator Toji 3D', source: MOL, url: M('s8_crown') },
      { label: 'Etilen Qo‘shbog‘i (sp²) 3D', source: MOL, url: M('c2h4') },
    ],
  },
  'C4B-5': {
    title: 'Alkinlar (C≡C): Atsetilen 180° sp Chiziqli Molekulasi',
    openSourceUrl: M('c2h2'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Atsetaldegid (Kucherov Mahsuloti) 3D', source: MOL, url: M('ch3cho') },
      { label: 'Yonish Issiqligi Kalorimetri', source: VLAB, url: L('calorimetry') },
      { label: 'Bromli Suv Sifat Reaksiyasi', source: OLAB, url: L('silver_mirror') },
    ],
  },
  'C4B-6': {
    title: 'Aromatik Uglevodorodlar: Benzol C₆H₆ va Toluol (3D)',
    openSourceUrl: M('c6h6'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Toluol (+I Orto/Para Yo‘naltirish) 3D', source: MOL, url: M('toluene') },
      { label: 'Tsiklogeksan (Benzol Gidrogenlanishi) 3D', source: MOL, url: M('cyclohexane') },
      { label: 'UV-Vis Aromatik Yutilish Spektri', source: PHET, url: L('spectroscopy') },
    ],
  },
  'C4B-7': {
    title: 'Neft Rektifikatsiya Kolonnasi va Fraksiyalash Stendi',
    openSourceUrl: L('organic_cracking'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Qaynash Haroratiga Ko‘ra Haydash Labi', source: OLAB, url: L('separation') },
      { label: 'Metan va Propan Tabiiy Gazlari 3D', source: MOL, url: M('c3h8') },
      { label: 'Benzol Koks-Kimyo Mahsuloti 3D', source: MOL, url: M('c6h6') },
    ],
  },

  // 4C
  'C4C-1': {
    title: 'Spirtlar (Etanol, Glitserin) va Fenol (C₆H₅OH) 3D',
    openSourceUrl: M('glycerol'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Fenol (Karbol Kislota) 3D Modeli', source: MOL, url: M('phenol') },
      { label: 'Etanol (C₂H₅OH) 3D Tuzilishi', source: MOL, url: M('c2h5oh') },
      { label: 'Glitserin + Cu(OH)₂ To‘q Ko‘k Sifat Testi', source: OLAB, url: L('silver_mirror') },
    ],
  },
  'C4C-2': {
    title: 'Kumush Ko‘zgu Stendi, Atsetaldegid va Atseton (3D)',
    openSourceUrl: L('silver_mirror'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: 'Atsetaldegid (−CHO) 3D Molekulasi', source: MOL, url: M('ch3cho') },
      { label: 'Atseton (>C=O Keton) 3D Molekulasi', source: MOL, url: M('acetone') },
      { label: 'IQ Spektrofotometriya Karbonil Cho‘qqisi', source: PHET, url: L('spectroscopy') },
    ],
  },
  'C4C-3': {
    title: 'Karbon Kislotalar (Sirka Kislota) va Eterifikatsiya (3D)',
    openSourceUrl: M('ch3cooh'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Etilasetat Eterifikatsiya Mahsuloti 3D', source: MOL, url: M('ethyl_acetate') },
      { label: 'Sirka Kislota NaOH bilan Titrlash', source: VLAB, url: L('titration') },
      { label: 'Kuchsiz Elektrolit Dissotsilanishi', source: PHET, url: L('dissociation') },
    ],
  },
  'C4C-4': {
    title: 'Murakkab Efirlar (Etilasetat), Yog‘lar va Sovunlar (3D)',
    openSourceUrl: M('ethyl_acetate'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Glitserin (Yog‘larning Asosi) 3D Modeli', source: MOL, url: M('glycerol') },
      { label: 'Sovunlanish va pH Ishqoriy Muhit Labi', source: PHET, url: L('ph_scale') },
      { label: 'Eterifikatsiya Qaytar Muvozanati', source: PHET, url: L('equilibrium') },
    ],
  },
  'C4C-5': {
    title: 'Uglevodlar: α-D-Glyukoza 3D Tsiklik Tuzilishi',
    openSourceUrl: M('glucose'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Glyukoza Kumush Ko‘zgu & Cu(OH)₂ Testi', source: OLAB, url: L('silver_mirror') },
      { label: 'Glitserin Ko‘p Atomli Spirt Modeli 3D', source: MOL, url: M('glycerol') },
      { label: 'Saxaroza Noelektrolit Sinovi', source: PHET, url: L('dissociation') },
    ],
  },

  // 4D
  'C4D-1': {
    title: 'Aminlar va Anilin (N.N. Zinin Reaksiyasi) 3D',
    openSourceUrl: M('aniline'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Metilamin (Kuchli Organik Asos) 3D', source: MOL, url: M('methylamine') },
      { label: 'Ammiak (NH₃) bilan Asoslilikni Qiyoslash', source: MOL, url: M('nh3') },
      { label: 'Aminlarning pH Asosli Muhiti', source: PHET, url: L('ph_scale') },
    ],
  },
  'C4D-2': {
    title: 'Aminokislotalar (Glitsin) va Dipeptid Peptid Bog‘i (3D)',
    openSourceUrl: M('dipeptide'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Glitsin (Amfoter Aminokislota) 3D', source: MOL, url: M('glycine') },
      { label: 'Buitter-ion Amfoter Muhit (pH Lab)', source: PHET, url: L('ph_scale') },
      { label: 'Oqsil Ferment Kataliz Tezlanishi', source: VLAB, url: L('catalysis') },
    ],
  },
  'C4D-3': {
    title: 'DNK Qo‘sh Spirali va Purin-Pirimidin Juftligi (3D)',
    openSourceUrl: M('dna_helix'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Purin (Adenin/Guanin) Asosi 3D', source: MOL, url: M('purine') },
      { label: 'Ortofosfat Kislota DNK Skeleti 3D', source: MOL, url: M('h3po4') },
      { label: 'UV-Vis 260 nm Nuklein Spektri', source: PHET, url: L('spectroscopy') },
    ],
  },
  'C4D-4': {
    title: 'Geterosikllar: Pirrol, Piridin va Purin Yadrosi (3D)',
    openSourceUrl: M('pyridine'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Pirrol (Porfirin / Gemoglobin Bloki) 3D', source: MOL, url: M('pyrrole') },
      { label: 'Purin (ATF va Kofein Asosi) 3D', source: MOL, url: M('purine') },
      { label: 'Piridin Asosliligi Titrlashi', source: VLAB, url: L('titration') },
    ],
  },
  'C4D-5': {
    title: 'Polimerlar, Tolalar va Aspirin Dorivor Sintezi (3D)',
    openSourceUrl: M('aspirin'),
    openSourceSource: MOL,
    alternateSims: [
      { label: 'Polimerlanish Zanjiri Reaktori', source: VLAB, url: L('polymer_reactor') },
      { label: 'Fenolformaldegid Monomeri Fenol 3D', source: MOL, url: M('phenol') },
      { label: 'Katalitik Polikondensatlanish Stendi', source: VLAB, url: L('catalysis') },
    ],
  },

  // 5
  'C5-1': {
    title: 'Amrita OLabs: Kationlar Alanga Testi va Sifat Analizi',
    openSourceUrl: L('flame_test'),
    openSourceSource: OLAB,
    alternateSims: [
      { label: '4-Naychali Noorganik Cho‘kma Analizi', source: OLAB, url: L('inorganic_classes') },
      { label: 'Organik Kumush Ko‘zgu va Br₂ Testi', source: OLAB, url: L('silver_mirror') },
      { label: 'Mis Kompleks Ioni [Cu(NH₃)₄]²⁺ 3D', source: MOL, url: M('cu_nh3_4') },
    ],
  },
  'C5-2': {
    title: 'Miqdoriy Analiz: Byuretka Titrimetriya va Gravimetriya',
    openSourceUrl: L('titration'),
    openSourceSource: VLAB,
    alternateSims: [
      { label: 'Filtrlash va Cho‘kma Tortish (Gravimetriya)', source: OLAB, url: L('filtration') },
      { label: 'Raqamli pH-Metr Ekvivalent Nuqtasi', source: PHET, url: L('ph_scale') },
      { label: 'Stexiometrik Mol Nisbati Kalkulyatori', source: PHET, url: L('stoichiometry') },
    ],
  },
  'C5-3': {
    title: 'Instrumental Analiz: Spektrofotometriya, Xromatografiya',
    openSourceUrl: L('spectroscopy'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Qog‘oz Xromatografiyasi va Distillyatsiya', source: OLAB, url: L('separation') },
      { label: 'Alanga Atom-Emission Spektri', source: OLAB, url: L('flame_test') },
      { label: 'Aspirin Farmatsevtik Tahlil 3D Modeli', source: MOL, url: M('aspirin') },
    ],
  },
};
