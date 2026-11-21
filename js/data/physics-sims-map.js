// Tailored 3D PBR + Open-Source Multi-Simulator Profiles for ALL 67 Physics Topics
// Every Physics topic offers 3 to 4 switchable realistic 3D / PhET / Falstad / WebGL labs

const P3D = (scene) => `sims/phys3d/lab3d.html?scene=${scene}`;
const OPEN = (sim) => `sims/phys3d/openlab.html?sim=${sim}`;
const EFF = (file) => `sims/effectuall/${file}`;
const CX = (file) => `sims/cx20/${file}`;
const PBF = (preset) => (preset ? `sims/pbf/index.html?preset=${preset}` : 'sims/pbf/index.html');
const MBS = 'sims/mbsaloka/index.html';

const S3D = 'Three.js PBR 3D';
const PHET = 'PhET Interactive Sims';
const FAL = 'Falstad Open-Source';
const E3D = 'Effectuall 3D Lab';
const CXS = 'cx20 Cannon-es 3D';
const PBFS = 'Three.js Particle Fluids (PBF)';
const MBSS = 'mbsaloka WebGL2';

export const PHYSICS_SIM_PROFILES = {
  // 1. Kirish va Fizik Kattaliklar
  '1-1': {
    title: '3D SI O‘lchov Stendi, Shtangensirkul va Zichlik Laboratoriyasi',
    openSourceUrl: P3D('vernier_si'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Kuchlar va Tabiiy Harakat Kuzatuvi', source: PHET, url: OPEN('forces-and-motion-basics') },
      { label: '3D Hajm va Geometrik O‘lchash (Effectuall)', source: E3D, url: EFF('Games__volume.html') },
      { label: '3D Suyuqlik Zarralari Kuzatuvi (PBF)', source: PBFS, url: PBF('buoyancy') },
    ],
  },
  '1-2': {
    title: '3D Aniq O‘lchov Asboblari (Shtangensirkul va Tarozi)',
    openSourceUrl: P3D('vernier_si'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Richag Tarozida Massa O‘lchash', source: PHET, url: OPEN('balancing-act') },
      { label: '3D Hajm O‘lchash Stendi (Effectuall)', source: E3D, url: EFF('Games__volume.html') },
      { label: 'PhET: Gidrostatik Bosim O‘lchagichi', source: PHET, url: OPEN('under-pressure') },
    ],
  },
  '1-3': {
    title: '3D Fazoviy Vektorlar Qo‘shish va Vektor Ko‘paytma (A × B)',
    openSourceUrl: P3D('vectors_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Vektorlar Algebrasi va Proyeksiyalar', source: PHET, url: OPEN('vector-addition') },
      { label: 'Effectuall: 3D Vektor Algebrasi Stendi', source: E3D, url: EFF('Mechanics_Vector_Algebra.html') },
    ],
  },

  // 2A. Kinematika
  '2A-1': {
    title: '3D Tekislikdagi Harakat, Trayektoriya va Ko‘chish Vektori',
    openSourceUrl: EFF('Mechanics_Motion_in_a_Plane.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Fazoviy Vektorlar', source: S3D, url: P3D('vectors_3d') },
      { label: 'PhET: Vektorli Ko‘chish va Sanoq Sistemasi', source: PHET, url: OPEN('vector-addition') },
    ],
  },
  '2A-2': {
    title: 'To‘g‘ri Chiziqli Tekis Harakat va Tezlik Grafiklari',
    openSourceUrl: EFF('Mechanics_Motion_in_straight_line.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Kuchlar va Tekis Harakat Stendi', source: PHET, url: OPEN('forces-and-motion-basics') },
      { label: 'Three.js PBR: 3D Ballistika va Tezlik', source: S3D, url: P3D('projectile_3d') },
    ],
  },
  '2A-3': {
    title: '3D Erkin Tushish va Tekis Tezlanuvchan Harakat (Cannon-es)',
    openSourceUrl: CX('restitution.html'),
    openSourceSource: CXS,
    alternateSims: [
      { label: 'Three.js PBR: 3D Qiya Tekislikda Tezlanish', source: S3D, url: P3D('inclined_friction') },
      { label: 'PhET: Energiya va Erkin Tushish Treki', source: PHET, url: OPEN('energy-skate-park') },
      { label: 'Effectuall: To‘g‘ri Chiziqli Tezlanish', source: E3D, url: EFF('Mechanics_Motion_in_straight_line.html') },
    ],
  },
  '2A-4': {
    title: '3D Ballistika Poligoni: Burchak Ostida Otilgan Jism',
    openSourceUrl: P3D('projectile_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Interaktiv To‘p Ballistikasi (Havo qarshiligi bilan)', source: PHET, url: OPEN('projectile-motion') },
      { label: 'Effectuall: 3D Parabolik Trayektoriya', source: E3D, url: EFF('Mechanics_Projectile_Motion.html') },
    ],
  },
  '2A-5': {
    title: '3D Aylanma Harakat & Markazga Intilma Tezlanish Stendi',
    openSourceUrl: P3D('circular_centripetal'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: Aylana Bo‘ylab Tekis Harakat (3D)', source: E3D, url: EFF('Mechanics_Circular_Motion.html') },
      { label: 'PhET: Orbital Aylanma Harakat', source: PHET, url: OPEN('gravity-and-orbits') },
    ],
  },

  // 2B. Dinamika
  '2B-1': {
    title: 'PhET & WebGL2: Nyuton Qonunlari va Dinamika Laboratoriyasi',
    openSourceUrl: OPEN('forces-and-motion-basics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Qiya Tekislik & Blok Kuchlari', source: S3D, url: P3D('inclined_friction') },
      { label: 'mbsaloka WebGL2: Qattiq Jismlar Dinamikasi', source: MBSS, url: MBS },
      { label: 'cx20 Cannon-es: 3D Koptoklar Dinamikasi', source: CXS, url: CX('balls.html') },
    ],
  },
  '2B-2': {
    title: '3D Butun Olam Tortishish Qonuni va Gravitatsion Maydon',
    openSourceUrl: EFF('Mechanics_Gravitation_Law.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Gravitatsiya Kuchini O‘lchash Stendi', source: PHET, url: OPEN('gravity-force-lab') },
      { label: 'Three.js PBR: 3D Quyosh Sistemasi Tortishishi', source: S3D, url: P3D('solar_kepler_3d') },
      { label: 'PhET: Sayyoralar Orbitalari', source: PHET, url: OPEN('gravity-and-orbits') },
    ],
  },
  '2B-3': {
    title: '3D Qiya Tekislik, Sirpanish Ishqalanishi va Guk Prujinasi',
    openSourceUrl: P3D('inclined_friction'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Guk Qonuni va Prujina Bikrligi', source: PHET, url: OPEN('hookes-law') },
      { label: 'PhET: Mikroskopik Ishqalanish va Issiqlik', source: PHET, url: OPEN('friction') },
      { label: 'Effectuall: 3D Elastiklik Kuchi', source: E3D, url: EFF('Mechanics_Spring_Force.html') },
    ],
  },
  '2B-4': {
    title: '3D Qiya Burilish (Banking) va Markazdan Qochma Kuch',
    openSourceUrl: EFF('Mechanics_Banking_on_a_Road.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Aylanma & Inersiya Kuchlari', source: S3D, url: P3D('circular_centripetal') },
      { label: 'Three.js PBR: 3D Giroskop Aylanish O‘qi', source: S3D, url: P3D('gyro_torque') },
    ],
  },

  // 2C. Saqlanish Qonunlari
  '2C-1': {
    title: '3D Reaktiv Raketa, Impuls Saqlanishi & Nyuton Beshigi',
    openSourceUrl: P3D('rocket_impulse'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: 2D Impuls Saqlanishi Laboratoriyasi', source: PHET, url: OPEN('collision-lab') },
      { label: 'Effectuall: Impuls Saqlanishi (3D)', source: E3D, url: EFF('conservationofmomentum__index.html') },
    ],
  },
  '2C-2': {
    title: 'PhET: Mexanik Energiya Saqlanishi (Kinetik ↔ Potensial)',
    openSourceUrl: OPEN('energy-skate-park'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: Mayatnikda Energiya Almashinuvi', source: E3D, url: EFF('Mechanics_Simple_Pendulum.html') },
      { label: 'Three.js PBR: 3D Qiya Tekislikda Mexanik Ish', source: S3D, url: P3D('inclined_friction') },
    ],
  },
  '2C-3': {
    title: '3D Mutlaq Elastik va Noelastik To‘qnashuvlar (Cannon-es & PhET)',
    openSourceUrl: OPEN('collision-lab'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'cx20 Cannon-es: 3D Sharlar To‘qnashuvi', source: CXS, url: CX('balls.html') },
      { label: 'Three.js PBR: 3D Nyuton Beshigi', source: S3D, url: P3D('rocket_impulse') },
      { label: 'cx20 Cannon-es: Tiklanish Koeffitsienti', source: CXS, url: CX('restitution.html') },
    ],
  },

  // 2D. Statika va Qattiq Jism
  '2D-1': {
    title: 'PhET: Richag Muvozanati, Kuch Momenti va Oddiy Mexanizmlar',
    openSourceUrl: OPEN('balancing-act'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: 3D Kuch Momenti (Torque)', source: E3D, url: EFF('Mechanics_Torque.html') },
      { label: 'Three.js PBR: 3D Giroskop & Aylantiruvchi Moment', source: S3D, url: P3D('gyro_torque') },
    ],
  },
  '2D-2': {
    title: '3D Giroskop Pretsessiyasi va Impuls Momenti Saqlanishi',
    openSourceUrl: P3D('gyro_torque'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: Impuls Momenti Saqlanishi (3D)', source: E3D, url: EFF('Mechanics_Conservation_of_Angular_Momentum.html') },
      { label: 'Effectuall: 3D Kuch Momenti', source: E3D, url: EFF('Mechanics_Torque.html') },
    ],
  },
  '2D-3': {
    title: '3D Qattiq Jismlar Muvozanati va Massalar Markazi (Cannon-es)',
    openSourceUrl: CX('box.html'),
    openSourceSource: CXS,
    alternateSims: [
      { label: 'PhET: Massalar Markazi va Muvozanat Richagi', source: PHET, url: OPEN('balancing-act') },
      { label: 'mbsaloka WebGL2: 3D Jismlar Barqarorligi', source: MBSS, url: MBS },
    ],
  },

  // 2E. Suyuqlik va Gazlar
  '2E-1': {
    title: '3D Particle Fluids: Arximed Qonuni va Jismlarning Suzishi',
    openSourceUrl: PBF('buoyancy'),
    openSourceSource: PBFS,
    alternateSims: [
      { label: 'PhET: Arximed Suzuvchanlik Laboratoriyasi', source: PHET, url: OPEN('buoyancy') },
      { label: 'PhET: Gidrostatik Bosim va Tutash Idishlar', source: PHET, url: OPEN('under-pressure') },
      { label: 'Effectuall: Paskal Gidravlik Pressi', source: E3D, url: EFF('Thermodynamics_Pascals_Law.html') },
    ],
  },
  '2E-2': {
    title: '3D Aerodinamik Qanot (Bernulli) & PBF Gidrodinamika Oqimi',
    openSourceUrl: P3D('hydro_windtunnel'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBF: 3D To‘g‘on Buzilishi (Dam-Break Oqimi)', source: PBFS, url: PBF('dam-break') },
      { label: 'Effectuall: Torrichelli Oqib Chiqish Qonuni', source: E3D, url: EFF('Thermodynamics_Torricellis_Law.html') },
      { label: 'PhET: Bosim va Suyuqlik Dinamikasi', source: PHET, url: OPEN('under-pressure') },
    ],
  },

  // 3. Tebranishlar va To'lqinlar
  '3-1': {
    title: 'PhET: Matematik Mayatnik va Garmonik Tebranishlar Laboratoriyasi',
    openSourceUrl: OPEN('pendulum-lab'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'PhET: Prujinali Mayatnik va Energiya', source: PHET, url: OPEN('masses-and-springs') },
      { label: 'Effectuall: 3D Oddiy Mayatnik', source: E3D, url: EFF('Mechanics_Simple_Pendulum.html') },
    ],
  },
  '3-2': {
    title: '3D So‘nuvchi va Majburiy Tebranishlar, Rezonans Stendi',
    openSourceUrl: EFF('Mechanics_Damped_SHM.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Prujinali Tizimda So‘nish va Rezonans', source: PHET, url: OPEN('masses-and-springs') },
      { label: 'PhET: Mayatnikda Ishqalanish So‘nishi', source: PHET, url: OPEN('pendulum-lab') },
    ],
  },
  '3-3': {
    title: 'PhET & Falstad: Mexanik To‘lqinlar, Interferensiya va Difraksiya',
    openSourceUrl: OPEN('wave-on-a-string'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Falstad Ripple Tank: 2D Interferensiya & Difraksiya', source: FAL, url: OPEN('falstad-ripple') },
      { label: 'PhET: Suv va Tovush To‘lqinlari Interferensiyasi', source: PHET, url: OPEN('wave-interference') },
      { label: 'Effectuall: 3D Interaktiv To‘lqin', source: E3D, url: EFF('Games__InteractiveWave.html') },
    ],
  },
  '3-4': {
    title: '3D Dopler Effekti (Max Konusi) va Akustik Tovush Laboratoriyasi',
    openSourceUrl: P3D('doppler_acoustic'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Tovush To‘lqinlari, Chastota va Amplituda', source: PHET, url: OPEN('sound-waves') },
      { label: 'Falstad: 2D Dopler Effekti & Aks-Sado', source: FAL, url: OPEN('falstad-ripple') },
      { label: 'Effectuall: Audio Spektr Analizatori', source: E3D, url: EFF('AudioVisualizer.html') },
    ],
  },

  // 4. Molekulyar Fizika va Termodinamika
  '4A-1': {
    title: '3D Shisha Porshenli MKN va Molekulalar Issiqlik Harakati',
    openSourceUrl: P3D('thermo_engine_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Moddaning Molekulyar Tuzilishi', source: PHET, url: OPEN('states-of-matter') },
      { label: 'Effectuall: Gazlarning Kinetik Nazariyasi (3D)', source: E3D, url: EFF('Thermodynamics_Kinetic_Theory_of_Gases.html') },
    ],
  },
  '4A-2': {
    title: 'PhET: Ideal Gaz Xossalari va Mendeleyev-Klapeyron Tenglamasi',
    openSourceUrl: OPEN('gas-properties'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Shisha Porshen Ideal Gaz', source: S3D, url: P3D('thermo_engine_3d') },
      { label: 'Effectuall: Ideal Gaz Holat Tenglamasi', source: E3D, url: EFF('Thermodynamics_Ideal_Gas_Equation.html') },
    ],
  },
  '4A-3': {
    title: '3D Izoprotsesslar: Boyl-Mariott, Gey-Lyussak va Sharl Qonunlari',
    openSourceUrl: EFF('Thermodynamics_Boyles_Law.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'Effectuall: Sharl (Izobarik) Qonuni 3D', source: E3D, url: EFF('Thermodynamics_Charles_Law.html') },
      { label: 'PhET: Izotermik, Izobarik, Izoxorik Rejimlar', source: PHET, url: OPEN('gas-properties') },
      { label: 'Three.js PBR: 3D Porshenli Gaz Kamerasi', source: S3D, url: P3D('thermo_engine_3d') },
    ],
  },
  '4B-1': {
    title: 'PhET: Ichki Energiya, Issiqlik O‘tkazuvchanlik va Konveksiya',
    openSourceUrl: OPEN('energy-forms-and-changes'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBF: 3D Termal Konveksiya Oqimi', source: PBFS, url: PBF('vortex-plume') },
      { label: 'Three.js PBR: 3D Gaz Ichki Energiyasi', source: S3D, url: P3D('thermo_engine_3d') },
    ],
  },
  '4B-2': {
    title: 'Termodinamika Qonunlari va P-V Diagramma Laboratoriyasi',
    openSourceUrl: EFF('Games__carnotcycle.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Gazning Bajargan Ishi va Ichki Energiya', source: PHET, url: OPEN('gas-properties') },
      { label: 'Three.js PBR: 3D Termodinamik Porshen', source: S3D, url: P3D('thermo_engine_3d') },
    ],
  },
  '4B-3': {
    title: '3D Karno Sikli, Issiqlik Mashinalari va FIK Stendi',
    openSourceUrl: EFF('Games__carnotcycle.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Issiqlik Energiyasi va Mexanik Ish Generator', source: PHET, url: OPEN('energy-forms-and-changes') },
      { label: 'Three.js PBR: 3D Porshenli Dvigatel Kamerasi', source: S3D, url: P3D('thermo_engine_3d') },
    ],
  },
  '4C-1': {
    title: 'PhET: Agregat Holatlar — Erish, Bug‘lanish va Qaynash',
    openSourceUrl: OPEN('states-of-matter'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: Termodinamika Faza Kirishi (3D)', source: E3D, url: EFF('Thermodynamics_Introduction.html') },
      { label: 'Three.js PBR: 3D Harorat & Fazalar Porsheni', source: S3D, url: P3D('thermo_engine_3d') },
    ],
  },
  '4C-2': {
    title: '3D To‘yingan Bug‘, Havo Namligi va Issiq Havo Sharchasi',
    openSourceUrl: EFF('Thermodynamics_Hot_Air_Balloon.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: Bug‘lanish va Kondensatsiya Muvozanati', source: PHET, url: OPEN('states-of-matter') },
      { label: 'PhET: Gaz Bosimi va Harorat', source: PHET, url: OPEN('gas-properties') },
    ],
  },
  '4C-3': {
    title: '3D Particle Fluids: Sirt Tarangligi, Tomchilar va Qattiq Jismlar',
    openSourceUrl: PBF('liquid-marble'),
    openSourceSource: PBFS,
    alternateSims: [
      { label: 'PhET: Qattiq Kristall va Suyuqlik Xossalari', source: PHET, url: OPEN('states-of-matter') },
      { label: 'PhET: Qattiq Jism Elastiklik Deformatsiyasi', source: PHET, url: OPEN('hookes-law') },
    ],
  },

  // 5. Elektr va Magnetizm (Tuzatilgan!)
  '5A-1': {
    title: '3D Elektr Dipol Maydoni va Kulon Qonuni Laboratoriyasi',
    openSourceUrl: P3D('electro_field_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Kulon Qonuni Interaktiv O‘lchov Stendi', source: PHET, url: OPEN('coulombs-law') },
      { label: 'PhET: Elektr Zaryadlari va Kuch Chiziqlari', source: PHET, url: OPEN('charges-and-fields') },
      { label: 'Effectuall: 3D Kulon Qonuni', source: E3D, url: EFF('Electricity_Coulombs_Law.html') },
    ],
  },
  '5A-2': {
    title: 'PhET: Elektr Maydon Potensiali va Ekvipotensial Sirtlar',
    openSourceUrl: OPEN('charges-and-fields'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Elektr Dipol & Dielektrik', source: S3D, url: P3D('electro_field_3d') },
      { label: 'Effectuall: 3D Elektr Maydon Chiziqlari', source: E3D, url: EFF('Electricity_The_Electric_Field.html') },
    ],
  },
  '5A-3': {
    title: 'PhET: Kondensator Sig‘imi, Dielektrik va Maydon Energiyasi',
    openSourceUrl: OPEN('capacitor-lab-basics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: Kondensator Sig‘im Omillari (3D)', source: E3D, url: EFF('Electricity_Factors_Effecting_Capacitance.html') },
      { label: 'Falstad CircuitJS1: RC Zaryadlanish Sxemasi', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5B-1': {
    title: '3D Elektr Zanjiri Stendi: Om Qonuni, EYuK va Elektron Oqimi',
    openSourceUrl: P3D('circuit_board_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Zanjirning Bir Qismi Uchun Om Qonuni', source: PHET, url: OPEN('ohms-law') },
      { label: 'PhET: O‘zgarmas Tok Zanjirlari Konstruktori (DC)', source: PHET, url: OPEN('circuit-construction-kit-dc') },
      { label: 'Falstad CircuitJS1: Jonli Elektr Sxemalar', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5B-2': {
    title: 'PhET: Rezistorlarni Ketma-ket/Parallel Ulash va Kirxgof Qoidalari',
    openSourceUrl: OPEN('circuit-construction-kit-dc'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'PhET: O‘tkazgich Qarshiligi R = ρ·l/S', source: PHET, url: OPEN('resistance-in-a-wire') },
      { label: 'Three.js PBR: 3D Elektr Zanjir Plitasi', source: S3D, url: P3D('circuit_board_3d') },
      { label: 'Falstad CircuitJS1: Murakkab Tarmoqlangan Zanjir', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5B-3': {
    title: '3D Joul-Lens Qizishi, Tokning Ishi va Elektr Quvvati',
    openSourceUrl: P3D('circuit_board_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Elektr Zanjirida Quvvat va Lampochkalar', source: PHET, url: OPEN('circuit-construction-kit-dc') },
      { label: 'Falstad CircuitJS1: Real-Time Quvvat (W) O‘lchovi', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5C-1': {
    title: '3D Metallarda Erkin Elektronlar Dreifi va Qarshilik',
    openSourceUrl: P3D('circuit_board_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: O‘tkazgich Solishtirma Qarshiligi (ρ, l, S)', source: PHET, url: OPEN('resistance-in-a-wire') },
      { label: '3Dmol: Mis (Cu) Metall Panjara Tuzilishi', source: '3Dmol.js · MolView', url: 'sims/chem3d/mol3d.html?mol=cu_metal' },
    ],
  },
  '5C-2': {
    title: '3D Elektroliz Vannasi, Ionlar Migratsiyasi va Faradey Qonunlari',
    openSourceUrl: P3D('electrolysis_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Virtual Lab: Faradey Elektroliz va Gaz Yig‘ish', source: 'ChemCollective · PhET', url: 'sims/chem3d/vlab.html?lab=electrolysis' },
      { label: 'Virtual Lab: Elektrolit Tok O‘tkazuvchanlik Chirog‘i', source: PHET, url: 'sims/chem3d/vlab.html?lab=dissociation' },
    ],
  },
  '5C-3': {
    title: '3D Gazlarda Elektr Razryadi va Plazma Naychasi',
    openSourceUrl: P3D('plasma_crt_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: Katod Nurlari va Gaz Razryadi (3D)', source: E3D, url: EFF('Quantum_Cathode_Rays_The_Electrons.html') },
      { label: 'PhET: Elektr Maydon & Ionlanish', source: PHET, url: OPEN('charges-and-fields') },
    ],
  },
  '5C-4': {
    title: '3D Vakuum Elektron-Nur Trubkasi (ELT) va Termoelektron Emissiya',
    openSourceUrl: P3D('plasma_crt_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: 3D Katod Nurlari (Tomson Tajribasi)', source: E3D, url: EFF('Quantum_Cathode_Rays_The_Electrons.html') },
      { label: 'Falstad CircuitJS1: Vakuum Diod va Triod', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5C-5': {
    title: '3D Yarimo‘tkazgich p-n O‘tish, Diod va LED Foton Nurlanishi',
    openSourceUrl: P3D('semiconductor_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Falstad CircuitJS1: Diod, Tranzistor va To‘g‘rilagich', source: FAL, url: OPEN('falstad-circuit') },
      { label: 'Effectuall: Xoll Effekti (3D Yarimo‘tkazgich)', source: E3D, url: EFF('Magnetism_Hall_Effect.html') },
    ],
  },
  '5D-1': {
    title: 'PhET: Magnit Maydon, Lorens va Amper Kuchlari Laboratoriyasi',
    openSourceUrl: OPEN('faradays-electromagnetic-lab'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: 3D Lorens Kuchi Trayektoriyasi', source: E3D, url: EFF('Magnetism_Understanding_Lorentz_Force.html') },
      { label: 'Three.js PBR: 3D Solenoid va Magnit Induksiya', source: S3D, url: P3D('magnet_induction_3d') },
      { label: 'Effectuall: Tokli O‘tkazgichga Amper Kuchi', source: E3D, url: EFF('Magnetism_Force_on_a_Current_Carrying_Conductor.html') },
    ],
  },
  '5D-2': {
    title: '3D Solenoid, Ferromagnetizm va Muhitning Magnit Xossalari',
    openSourceUrl: P3D('magnet_induction_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Elektromagnit va Kompas Maydon Skaneri', source: PHET, url: OPEN('faradays-electromagnetic-lab') },
      { label: 'Effectuall: Tokning Magnit Ta’siri (3D)', source: E3D, url: EFF('Magnetism_Magnetic_Effect_due_to_Current.html') },
    ],
  },
  '5D-3': {
    title: '3D Faradey Elektromagnit Induksiyasi, Lens Qoidasi & Generator',
    openSourceUrl: P3D('magnet_induction_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Faradey Induksiya va Generator Stendi', source: PHET, url: OPEN('faradays-electromagnetic-lab') },
      { label: 'Effectuall: 3D Elektromagnit Induksiya', source: E3D, url: EFF('Magnetism_Electromagnetic_Induction.html') },
    ],
  },
  '5E-1': {
    title: '3D LC Tebranish Konturi va Tomson Formulasi',
    openSourceUrl: EFF('Electricity_LC_Oscillator.html'),
    openSourceSource: E3D,
    alternateSims: [
      { label: 'PhET: AC/RLC Tebranish Zanjiri Laboratoriyasi', source: PHET, url: OPEN('circuit-construction-kit-ac') },
      { label: 'Falstad CircuitJS1: L-C Rezonans Ossillografi', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5E-2': {
    title: 'PhET & Falstad: O‘zgaruvchan Tok (AC), Rezonans va Transformator',
    openSourceUrl: OPEN('circuit-construction-kit-ac'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D AC Induksiya & Transformator', source: S3D, url: P3D('magnet_induction_3d') },
      { label: 'Falstad CircuitJS1: Transformator & RLC Rezonans', source: FAL, url: OPEN('falstad-circuit') },
    ],
  },
  '5E-3': {
    title: '3D Elektromagnit To‘lqin (E ⊥ B ⊥ c) Fazoviy Tarqalishi',
    openSourceUrl: P3D('em_wave_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Elektromagnit To‘lqin Interferensiyasi', source: PHET, url: OPEN('wave-interference') },
      { label: 'Effectuall: To‘lqinlar Tabiati (3D)', source: E3D, url: EFF('Optics_Understanding_Waves.html') },
    ],
  },

  // 6. Optika
  '6A-1': {
    title: 'PhET: Yorug‘lik Qaytishi, Yassi va Sferik Ko‘zgular',
    openSourceUrl: OPEN('geometric-optics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: 3D Yorug‘likning Qaytishi', source: E3D, url: EFF('Optics_Reflection_of_Light.html') },
      { label: 'Three.js PBR: 3D Optik Laboratoriya Stendi', source: S3D, url: P3D('optics_bench_3d') },
    ],
  },
  '6A-2': {
    title: 'PhET: Snellius Sinish Qonuni, Prizma va To‘la Ichki Qaytish',
    openSourceUrl: OPEN('bending-light'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Shisha Prizma Dispersiyasi', source: S3D, url: P3D('optics_bench_3d') },
      { label: 'Effectuall: 3D Yorug‘lik Sinishi', source: E3D, url: EFF('Optics_Refraction_of_Light.html') },
    ],
  },
  '6A-3': {
    title: 'PhET & 3D: Yupqa Linzalar, Tasvir Yasash va Optik Asboblar',
    openSourceUrl: OPEN('geometric-optics'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: 3D Yig‘uvchi Linza & Fokus', source: E3D, url: EFF('Optics_Converging_Lens.html') },
      { label: 'Effectuall: 3D Astronomik Teleskop', source: E3D, url: EFF('Optics_Astronomical_Telescope.html') },
    ],
  },
  '6B-1': {
    title: '3D Shisha Prizma Dispersiyasi, Yung Interferensiyasi va Difraksiya',
    openSourceUrl: P3D('optics_bench_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Ikki Tirqish Interferensiya va Difraksiya', source: PHET, url: OPEN('wave-interference') },
      { label: 'Effectuall: 3D Yung Tajribasi', source: E3D, url: EFF('Optics_Youngs_Double_Slit_Experiment.html') },
      { label: 'PhET: Prizmada Yorug‘lik Dispersiyasi', source: PHET, url: OPEN('bending-light') },
    ],
  },
  '6B-2': {
    title: '3D Yorug‘lik Qutblanishi (Polyarizatsiya), Malyus va Bryuster',
    openSourceUrl: P3D('optics_bench_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Ko‘ndalang EM To‘lqin Qutblanishi', source: S3D, url: P3D('em_wave_3d') },
      { label: 'Effectuall: Nur va To‘lqin Optikasi', source: E3D, url: EFF('Optics_Light_as_Rays_and_Waves.html') },
    ],
  },
  '6C-1': {
    title: '3D Fotometriya Stendi, Yoritilganlik va Spektrofotometr',
    openSourceUrl: P3D('optics_bench_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Virtual Lab: UV-Vis Spektrofotometriya & Yorug‘lik Oqimi', source: PHET, url: 'sims/chem3d/vlab.html?lab=spectroscopy' },
      { label: 'PhET: Qora Jism Yorug‘lik Spektri', source: PHET, url: OPEN('blackbody-spectrum') },
    ],
  },

  // 7. Nisbiylik Nazariyasi, Kvant va Yadro (Tuzatilgan!)
  '7A-1': {
    title: '3D Fazo-Vaqt Egriligi, Lorens Qisqarishi va Eynshteyn Nisbiyligi',
    openSourceUrl: P3D('relativity_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Qora Tuynuk & Relyativistik Gravitatsiya', source: S3D, url: P3D('blackhole_cosmos_3d') },
      { label: 'Three.js PBR: 3D Yorug‘lik Tezligi (EM To‘lqin c)', source: S3D, url: P3D('em_wave_3d') },
    ],
  },
  '7B-1': {
    title: 'PhET: Mutlaq Qora Jism Nurlanishi, Vin va Plank Kvantlari',
    openSourceUrl: OPEN('blackbody-spectrum'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Foton Nurlanishi & Lazer', source: S3D, url: P3D('photoelectric_laser_3d') },
      { label: 'Effectuall: 3D Vodorod Kvant Sathi', source: E3D, url: EFF('Quantum_Hydrogen_Atom.html') },
    ],
  },
  '7B-2': {
    title: '3D Fotoeffekt Vakuum Kamerasi va Eynshteyn Tenglamasi',
    openSourceUrl: P3D('photoelectric_laser_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: 3D Fotoeffekt Tajribasi', source: E3D, url: EFF('Quantum_Photoelectric_Effect.html') },
      { label: 'PhET: Fotonlar Spektri va Energiyasi', source: PHET, url: OPEN('blackbody-spectrum') },
    ],
  },
  '7C-1': {
    title: 'PhET & 3D: Bor Atom Postulatlari, Rezerford Tajribasi va Lazer',
    openSourceUrl: OPEN('models-of-the-hydrogen-atom'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Effectuall: 3D Bor Atom Modeli', source: E3D, url: EFF('Quantum_The_Bohr_Atom.html') },
      { label: 'Three.js PBR: 3D Rubin Lazer Rezonatori', source: S3D, url: P3D('photoelectric_laser_3d') },
      { label: 'PhET: Rezerford Alfa-Zarra Sochilishi', source: PHET, url: OPEN('rutherford-scattering') },
    ],
  },
  '7C-2': {
    title: 'PhET & 3D: Rezerford Yadro Modeli, Massa Defekti & Bog‘lanish',
    openSourceUrl: OPEN('rutherford-scattering'),
    openSourceSource: PHET,
    alternateSims: [
      { label: 'Three.js PBR: 3D Yadro Energiya Reaktori', source: S3D, url: P3D('nuclear_reactor_3d') },
      { label: 'Effectuall: 3D Atom Yadrosi & Qobiq', source: E3D, url: EFF('Quantum_The_Bohr_Atom.html') },
    ],
  },
  '7C-3': {
    title: '3D Radioaktiv Yemirilish (α, β, γ) va Yarim Yemirilish Davri',
    openSourceUrl: P3D('nuclear_reactor_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Alfa-Zarra Rezerford Yadro To‘qnashuvi', source: PHET, url: OPEN('rutherford-scattering') },
      { label: 'Three.js PBR: 3D Zarralar Detektori', source: S3D, url: P3D('lhc_collider_3d') },
    ],
  },
  '7C-4': {
    title: '3D Tokamak Termoyadro Sintezi va U-235 Zanjir Reaksiyasi',
    openSourceUrl: P3D('nuclear_reactor_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D CERN Adron Kollayderi', source: S3D, url: P3D('lhc_collider_3d') },
      { label: 'PhET: Yadro To‘qnashuvlar Modeli', source: PHET, url: OPEN('rutherford-scattering') },
    ],
  },
  '7C-5': {
    title: '3D CERN Adron Kollayderi (LHC), Kvarklar va Standart Model',
    openSourceUrl: P3D('lhc_collider_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Effectuall: 3D Katod Elektron Zarralari', source: E3D, url: EFF('Quantum_Cathode_Rays_The_Electrons.html') },
      { label: 'Effectuall: 3D Magnit Maydonda Lorens Treki', source: E3D, url: EFF('Magnetism_Understanding_Lorentz_Force.html') },
    ],
  },

  // 8. Astrofizika va Kosmologiya (Tuzatilgan!)
  '8-1': {
    title: '3D Quyosh Sistemasi, Sayyoralar va Kepler Qonunlari Observatoriyasi',
    openSourceUrl: P3D('solar_kepler_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'PhET: Gravitatsiya va Sayyoralar Orbitalari', source: PHET, url: OPEN('gravity-and-orbits') },
      { label: 'Effectuall: 3D Butun Olam Tortishish Qonuni', source: E3D, url: EFF('Mechanics_Gravitation_Law.html') },
    ],
  },
  '8-2': {
    title: '3D Qora Tuynuk Akkretsiya Diski, Yulduzlar va Galaktikalar',
    openSourceUrl: P3D('blackhole_cosmos_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Fazo-Vaqt Gravitatsion Egriligi', source: S3D, url: P3D('relativity_3d') },
      { label: 'PhET: Yulduzlar Issiqlik Spektri (Qora Jism)', source: PHET, url: OPEN('blackbody-spectrum') },
      { label: 'Effectuall: 3D Astronomik Teleskop', source: E3D, url: EFF('Optics_Astronomical_Telescope.html') },
    ],
  },
  '8-3': {
    title: '3D Xabbl Kengayayotgan Koinot, Qizil Siljish va Katta Portlash',
    openSourceUrl: P3D('blackhole_cosmos_3d'),
    openSourceSource: S3D,
    alternateSims: [
      { label: 'Three.js PBR: 3D Fazo-Vaqt Metrikasi (EYN)', source: S3D, url: P3D('relativity_3d') },
      { label: 'Three.js PBR: 3D Quyosh Sistemasi & Galaktika', source: S3D, url: P3D('solar_kepler_3d') },
      { label: 'PhET: Relikt Nurlanish (Qora Jism 2.7 K)', source: PHET, url: OPEN('blackbody-spectrum') },
    ],
  },
};
