import { buildTopicQuestions } from '../quiz-generator.js';
import { SEC1_TOPICS } from './sec1-intro.js';
import { SEC2_AB_TOPICS } from './sec2-mechanics-ab.js';
import { SEC2_CDE_TOPICS } from './sec2-mechanics-cde.js';
import { SEC3_TOPICS } from './sec3-waves.js';
import { SEC4_TOPICS } from './sec4-thermo.js';
import { SEC5_AB_TOPICS } from './sec5-electromag-ab.js';
import { SEC5_CDE_TOPICS } from './sec5-electromag-cde.js';
import { SEC6_TOPICS } from './sec6-optics.js';
import { SEC7_TOPICS } from './sec7-quantum.js';
import { SEC8_TOPICS } from './sec8-astro.js';

import { CHEM_SEC1_TOPICS } from './chem-sec1.js';
import { CHEM_SEC2_TOPICS } from './chem-sec2.js';
import { CHEM_SEC3_TOPICS } from './chem-sec3.js';
import { CHEM_SEC4_TOPICS } from './chem-sec4.js';
import { CHEM_SEC5_TOPICS } from './chem-sec5.js';
import { CHEM_SIM_PROFILES } from './chem-sims-map.js';
import { PHYSICS_SIM_PROFILES } from './physics-sims-map.js';
import { PHYSICS_BOOKS_DB } from './physics-books-db.js';

export const PHYSICS_SECTIONS = [
  {
    id: 'sec-1', num: '1', subject: 'physics',
    title: 'Kirish va Fizik Kattaliklar', shortTitle: 'Kirish & SI', accent: '#22d3ee',
    description: 'Ilmiy metod, SI birliklar tizimi, o‘lchov xatoliklari va vektor algebrasi asoslari.',
    subsections: [{ id: '1A', title: 'Asosiy tushunchalar va vektorlar' }],
  },
  {
    id: 'sec-2', num: '2', subject: 'physics',
    title: 'Mexanika', shortTitle: 'Mexanika', accent: '#38bdf8',
    description: 'Kinematika, Nyuton dinamikasi, saqlanish qonunlari, statika va gidro-aeromexanika.',
    subsections: [
      { id: '2A', title: 'A. Kinematika (Harakat tasnifi)' },
      { id: '2B', title: 'B. Dinamika (Harakat sabablari)' },
      { id: '2C', title: 'C. Saqlanish Qonunlari' },
      { id: '2D', title: 'D. Statika va Qattiq Jism Mexanikasi' },
      { id: '2E', title: 'E. Suyuqlik va Gazlar Mexanikasi' },
    ],
  },
  {
    id: 'sec-3', num: '3', subject: 'physics',
    title: 'Tebranishlar va To‘lqinlar (Akustika)', shortTitle: 'Tebranish & Tovush', accent: '#a78bfa',
    description: 'Garmonik va so‘nuvchi tebranishlar, rezonans, mexanik to‘lqinlar hamda Dopler akustikasi.',
    subsections: [{ id: '3A', title: 'Tebranishlar, To‘lqinlar va Akustika' }],
  },
  {
    id: 'sec-4', num: '4', subject: 'physics',
    title: 'Molekulyar Fizika va Termodinamika', shortTitle: 'Termodinamika', accent: '#fb923c',
    description: 'MKN, ideal gaz qonunlari, izoprotsesslar, termodinamika qonunlari, Karno va faza o‘tishlari.',
    subsections: [
      { id: '4A', title: 'A. Molekulyar-Kinetik Nazariya (MKN)' },
      { id: '4B', title: 'B. Termodinamika' },
      { id: '4C', title: 'C. Agregat Holatlar va Suyuqlik Xossalari' },
    ],
  },
  {
    id: 'sec-5', num: '5', subject: 'physics',
    title: 'Elektr va Magnetizm', shortTitle: 'Elektromagnetizm', accent: '#34d399',
    description: 'Elektrostatika, o‘zgarmas tok, turli muhitlarda tok, magnit maydon, induksiya va EM to‘lqinlar.',
    subsections: [
      { id: '5A', title: 'A. Elektrostatika' },
      { id: '5B', title: 'B. O‘zgarmas Elektr Toki' },
      { id: '5C', title: 'C. Turli Muhitlarda Elektr Toki' },
      { id: '5D', title: 'D. Magnetizm va Elektromagnit Induksiya' },
      { id: '5E', title: 'E. Elektromagnit Tebranishlar va To‘lqinlar' },
    ],
  },
  {
    id: 'sec-6', num: '6', subject: 'physics',
    title: 'Optika', shortTitle: 'Optika', accent: '#f472b6',
    description: 'Ko‘zgu va linzalar geometrik optikasi, dispersiya, interferensiya, difraksiya, qutblanish va fotometriya.',
    subsections: [
      { id: '6A', title: 'A. Geometrik Optika' },
      { id: '6B', title: 'B. To‘lqin Optikasi' },
      { id: '6C', title: 'C. Fotometriya' },
    ],
  },
  {
    id: 'sec-7', num: '7', subject: 'physics',
    title: 'Nisbiylik Nazariyasi va Kvant Fizikasi', shortTitle: 'Kvant & Yadro', accent: '#818cf8',
    description: 'Eynshteyn postulatlari, Plank kvantlari, fotoeffekt, Bor atomi, yadro reaksiyalari va Standart model.',
    subsections: [
      { id: '7A', title: 'A. Maxsus Nisbiylik Nazariyasi (MNN)' },
      { id: '7B', title: 'B. Kvant Fizikasi va Yorug‘lik Kvantlari' },
      { id: '7C', title: 'C. Atom va Yadro Fizikasi' },
    ],
  },
  {
    id: 'sec-8', num: '8', subject: 'physics',
    title: 'Astrofizika va Kosmologiya', shortTitle: 'Astrofizika', accent: '#facc15',
    description: 'Kepler qonunlari, Quyosh sistemasi, yulduzlar evolyutsiyasi, qora tuynuklar, Xabbl va Katta Portlash.',
    subsections: [{ id: '8A', title: '8. Astrofizika va Kosmologiya' }],
  },
];

export const CHEM_SECTIONS = [
  {
    id: 'csec-1', num: '1', subject: 'chemistry',
    title: 'Umumiy va Nazariy Kimyo Asoslari', shortTitle: 'Umumiy Kimyo', accent: '#34d399',
    description: 'Stoxiometriya, atom tuzilishi, kvant sonlari, Mendeleyev davriy qonuni, kimyoviy bog‘lanish va kristall panjaralar.',
    subsections: [
      { id: 'C1A', title: 'A. Kirish va Dastlabki Tushunchalar' },
      { id: 'C1B', title: 'B. Atom Tuzilishi va Davriy Qonun' },
      { id: 'C1C', title: 'C. Kimyoviy Bog‘lanish va Geometiya' },
    ],
  },
  {
    id: 'csec-2', num: '2', subject: 'chemistry',
    title: 'Kimyoviy Jarayonlar Qonuniyatlari', shortTitle: 'Fizik Kimyo', accent: '#22d3ee',
    description: 'Termokimyo, Gess qonuni, kinetika, kataliz, Le Shatelye muvozanati, eritmalar, pH va elektrokimyo.',
    subsections: [
      { id: 'C2A', title: 'A. Kinetika va Termodinamika' },
      { id: 'C2B', title: 'B. Eritmalar, EDN va pH' },
      { id: 'C2C', title: 'C. OQR va Elektrokimyo' },
    ],
  },
  {
    id: 'csec-3', num: '3', subject: 'chemistry',
    title: 'Noorganik Kimyo', shortTitle: 'Noorganik Kimyo', accent: '#38bdf8',
    description: 'Oksidlar, asoslar, kislotalar, tuzlar, VII–IV A metallmaslar hamda ishqoriy, alyuminiy va d-metallar.',
    subsections: [
      { id: 'C3A', title: 'A. Asosiy Sinflar va Genetika' },
      { id: 'C3B', title: 'B. Metallmaslar Kimyosi' },
      { id: 'C3C', title: 'C. Metallar va Verner Komplekslari' },
    ],
  },
  {
    id: 'csec-4', num: '4', subject: 'chemistry',
    title: 'Organik Kimyo va Polimerlar', shortTitle: 'Organik Kimyo', accent: '#a78bfa',
    description: 'Butlerov nazariyasi, uglevodorodlar, spirt, aldegid, karbon kislota, yog‘lar, uglevodlar, oqsillar va DNK.',
    subsections: [
      { id: 'C4A', title: 'A. Organik Kimyo Asoslari' },
      { id: 'C4B', title: 'B. Uglevodorodlar (Alkan..Aren)' },
      { id: 'C4C', title: 'C. Kislorodli Birikmalar' },
      { id: 'C4D', title: 'D. Azotli va Polimer Moddalar' },
    ],
  },
  {
    id: 'csec-5', num: '5', subject: 'chemistry',
    title: 'Analitik Kimyo va Amaliy Usullar', shortTitle: 'Analitik Kimyo', accent: '#f472b6',
    description: 'Sifat analizi (alanga testlari), gravimetriya, titrimetriya, spektrofotometriya, YaMR va xromatografiya.',
    subsections: [{ id: 'C5A', title: '5. Analitik va Instrumental Usullar' }],
  },
];

const RAW_PHYSICS = [
  ...SEC1_TOPICS, ...SEC2_AB_TOPICS, ...SEC2_CDE_TOPICS, ...SEC3_TOPICS,
  ...SEC4_TOPICS, ...SEC5_AB_TOPICS, ...SEC5_CDE_TOPICS, ...SEC6_TOPICS,
  ...SEC7_TOPICS, ...SEC8_TOPICS,
];

const RAW_CHEM = [
  ...CHEM_SEC1_TOPICS, ...CHEM_SEC2_TOPICS, ...CHEM_SEC3_TOPICS,
  ...CHEM_SEC4_TOPICS, ...CHEM_SEC5_TOPICS,
];

export const PHYSICS_TOPICS = RAW_PHYSICS.map((topic, index) => {
  const simProf = PHYSICS_SIM_PROFILES[topic.id];
  const merged = simProf
    ? {
        ...topic,
        simulation: {
          ...topic.simulation,
          title: simProf.title,
          openSourceUrl: simProf.openSourceUrl,
          openSourceSource: simProf.openSourceSource,
          alternateSims: simProf.alternateSims,
        },
      }
    : topic;
  return {
    ...merged,
    subject: 'physics',
    order: index + 1,
    textbook: PHYSICS_BOOKS_DB[topic.id] || null,
    questions: buildTopicQuestions(merged),
  };
});

export const CHEM_TOPICS = RAW_CHEM.map((topic, index) => {
  const profile = CHEM_SIM_PROFILES[topic.id];
  const merged = profile
    ? {
        ...topic,
        simulation: {
          ...topic.simulation,
          title: profile.title,
          openSourceUrl: profile.openSourceUrl,
          openSourceSource: profile.openSourceSource,
          alternateSims: profile.alternateSims,
        },
      }
    : topic;
  return {
    ...merged,
    subject: 'chemistry',
    order: index + 1,
    questions: buildTopicQuestions(merged),
  };
});

// Backward compatible aliases
export const SECTIONS = PHYSICS_SECTIONS;
export const TOPICS = PHYSICS_TOPICS;
export const ALL_SECTIONS = [...PHYSICS_SECTIONS, ...CHEM_SECTIONS];
export const ALL_TOPICS = [...PHYSICS_TOPICS, ...CHEM_TOPICS];

export const SUBJECTS = {
  physics: {
    id: 'physics',
    title: 'Fizika Akademiyasi',
    sections: PHYSICS_SECTIONS,
    topics: PHYSICS_TOPICS,
  },
  chemistry: {
    id: 'chemistry',
    title: 'Kimyo Akademiyasi',
    sections: CHEM_SECTIONS,
    topics: CHEM_TOPICS,
  },
};

const TOPIC_MAP = new Map(ALL_TOPICS.map((t) => [t.id, t]));
const SECTION_MAP = new Map(ALL_SECTIONS.map((s) => [s.id, s]));

export function getTopicById(id) {
  return TOPIC_MAP.get(id) || ALL_TOPICS[0];
}

export function getSectionById(id) {
  return SECTION_MAP.get(id) || ALL_SECTIONS[0];
}

export function getTopicsBySection(sectionId) {
  return ALL_TOPICS.filter((t) => t.sectionId === sectionId);
}
