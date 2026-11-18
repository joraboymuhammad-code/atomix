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

export const SECTIONS = [
  {
    id: 'sec-1',
    num: '1',
    title: 'Kirish va Fizik Kattaliklar',
    shortTitle: 'Kirish & SI',
    accent: '#22d3ee',
    description: 'Ilmiy metod, SI birliklar tizimi, o‘lchov xatoliklari va vektor algebrasi asoslari.',
    subsections: [
      { id: '1A', title: 'Asosiy tushunchalar va vektorlar' },
    ],
  },
  {
    id: 'sec-2',
    num: '2',
    title: 'Mexanika',
    shortTitle: 'Mexanika',
    accent: '#38bdf8',
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
    id: 'sec-3',
    num: '3',
    title: 'Tebranishlar va To‘lqinlar (Akustika)',
    shortTitle: 'Tebranish & Tovush',
    accent: '#a78bfa',
    description: 'Garmonik va so‘nuvchi tebranishlar, rezonans, mexanik to‘lqinlar hamda Dopler akustikasi.',
    subsections: [
      { id: '3A', title: 'Tebranishlar, To‘lqinlar va Akustika' },
    ],
  },
  {
    id: 'sec-4',
    num: '4',
    title: 'Molekulyar Fizika va Termodinamika',
    shortTitle: 'Termodinamika',
    accent: '#fb923c',
    description: 'MKN, ideal gaz qonunlari, izoprotsesslar, termodinamika qonunlari, Karno va faza o‘tishlari.',
    subsections: [
      { id: '4A', title: 'A. Molekulyar-Kinetik Nazariya (MKN)' },
      { id: '4B', title: 'B. Termodinamika' },
      { id: '4C', title: 'C. Agregat Holatlar va Suyuqlik Xossalari' },
    ],
  },
  {
    id: 'sec-5',
    num: '5',
    title: 'Elektr va Magnetizm',
    shortTitle: 'Elektromagnetizm',
    accent: '#34d399',
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
    id: 'sec-6',
    num: '6',
    title: 'Optika',
    shortTitle: 'Optika',
    accent: '#f472b6',
    description: 'Ko‘zgu va linzalar geometrik optikasi, dispersiya, interferensiya, difraksiya, qutblanish va fotometriya.',
    subsections: [
      { id: '6A', title: 'A. Geometrik Optika' },
      { id: '6B', title: 'B. To‘lqin Optikasi' },
      { id: '6C', title: 'C. Fotometriya' },
    ],
  },
  {
    id: 'sec-7',
    num: '7',
    title: 'Nisbiylik Nazariyasi va Kvant Fizikasi',
    shortTitle: 'Kvant & Yadro',
    accent: '#818cf8',
    description: 'Eynshteyn postulatlari, Plank kvantlari, fotoeffekt, Bor atomi, yadro reaksiyalari va Standart model.',
    subsections: [
      { id: '7A', title: 'A. Maxsus Nisbiylik Nazariyasi (MNN)' },
      { id: '7B', title: 'B. Kvant Fizikasi va Yorug‘lik Kvantlari' },
      { id: '7C', title: 'C. Atom va Yadro Fizikasi' },
    ],
  },
  {
    id: 'sec-8',
    num: '8',
    title: 'Astrofizika va Kosmologiya',
    shortTitle: 'Astrofizika',
    accent: '#facc15',
    description: 'Kepler qonunlari, Quyosh sistemasi, yulduzlar evolyutsiyasi, qora tuynuklar, Xabbl va Katta Portlash.',
    subsections: [
      { id: '8A', title: '8. Astrofizika va Kosmologiya' },
    ],
  },
];

const RAW_TOPICS = [
  ...SEC1_TOPICS,
  ...SEC2_AB_TOPICS,
  ...SEC2_CDE_TOPICS,
  ...SEC3_TOPICS,
  ...SEC4_TOPICS,
  ...SEC5_AB_TOPICS,
  ...SEC5_CDE_TOPICS,
  ...SEC6_TOPICS,
  ...SEC7_TOPICS,
  ...SEC8_TOPICS,
];

export const TOPICS = RAW_TOPICS.map((topic, index) => ({
  ...topic,
  order: index + 1,
  questions: buildTopicQuestions(topic),
}));

const TOPIC_MAP = new Map(TOPICS.map((t) => [t.id, t]));
const SECTION_MAP = new Map(SECTIONS.map((s) => [s.id, s]));

export function getTopicById(id) {
  return TOPIC_MAP.get(id) || TOPICS[0];
}

export function getSectionById(id) {
  return SECTION_MAP.get(id) || SECTIONS[0];
}

export function getTopicsBySection(sectionId) {
  return TOPICS.filter((t) => t.sectionId === sectionId);
}
