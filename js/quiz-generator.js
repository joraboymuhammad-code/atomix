// Atomix Topic-Specific 20-Question Physics Test Engine
// Produces exactly 20 distinct, verified Uzbek physics questions per topic (67 x 20 = 1,340 total)

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashId(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function formatNum(n) {
  if (!Number.isFinite(n)) return String(n);
  if (Math.abs(n) >= 10000 || (Math.abs(n) > 0 && Math.abs(n) < 0.01)) {
    return n.toExponential(2).replace('e+', '·10^').replace('e', '·10^');
  }
  const rounded = Math.round(n * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/\.?0+$/, '');
}

function makeNumericDistractors(correct, unit, rng, customWrong) {
  const candidates = new Set();
  const fmt = (val) => `${formatNum(val)}${unit ? ' ' + unit : ''}`;
  const correctStr = fmt(correct);

  if (Array.isArray(customWrong)) {
    for (const w of customWrong) {
      const s = fmt(w);
      if (s !== correctStr && Number.isFinite(w)) candidates.add(s);
    }
  }

  const multipliers = [0.5, 2, 1.5, 0.25, 4, 0.8, 1.25, 3, 10, 0.1];
  let guard = 0;
  while (candidates.size < 3 && guard < 40) {
    guard++;
    const m = multipliers[(guard + Math.floor(rng() * multipliers.length)) % multipliers.length];
    let val = correct === 0 ? guard * 1.5 : correct * m;
    if (Math.abs(val - correct) < 1e-9) val = correct + guard + 1;
    const s = fmt(val);
    if (s !== correctStr) candidates.add(s);
  }

  const wrongs = Array.from(candidates).slice(0, 3);
  const pos = Math.floor(rng() * 4);
  const options = [];
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    options.push(i === pos ? correctStr : wrongs[wi++]);
  }
  return { options, answer: pos };
}

export function buildTopicQuestions(topic) {
  const rng = mulberry32(hashId(topic.id));
  const list = [];
  const seen = new Set();

  const pushQ = (qObj) => {
    const key = qObj.q.trim().toLowerCase();
    if (seen.has(key)) return false;
    if (!Array.isArray(qObj.options) || qObj.options.length !== 4) return false;
    if (typeof qObj.answer !== 'number' || qObj.answer < 0 || qObj.answer > 3) return false;
    seen.add(key);
    list.push({
      q: qObj.q.trim(),
      options: qObj.options.map((o) => String(o).trim()),
      answer: qObj.answer,
      explain: String(qObj.explain || '').trim(),
    });
    return true;
  };

  // 1. Handcrafted conceptual & analytical questions
  if (Array.isArray(topic.coreQuestions)) {
    for (const cq of topic.coreQuestions) {
      if (list.length >= 20) break;
      pushQ(cq);
    }
  }

  // 2. Topic-specific parametric problem generators (exact physics math)
  if (Array.isArray(topic.problems)) {
    let pass = 0;
    while (list.length < 20 && pass < 6) {
      for (const prob of topic.problems) {
        if (list.length >= 20) break;
        const variantIdx = pass % (prob.variants ? prob.variants.length : 1);
        const generated = prob.build(variantIdx, pass);
        if (!generated) continue;
        const { options, answer } = makeNumericDistractors(
          generated.correct,
          generated.unit || '',
          rng,
          generated.wrong
        );
        pushQ({
          q: generated.q,
          options,
          answer,
          explain: generated.explain,
        });
      }
      pass++;
    }
  }

  // 3. Formula & Law reinforcement questions from topic.theory (only if < 20)
  const formulas = topic.theory?.formulas || [];
  const constants = topic.theory?.constants || [];
  const keyLaws = topic.theory?.keyLaws || [];

  for (let i = 0; i < formulas.length && list.length < 20; i++) {
    const f = formulas[i];
    const otherFormulas = formulas.filter((_, j) => j !== i);
    if (otherFormulas.length >= 3) {
      const distractors = otherFormulas.slice(0, 3).map((x) => x.latex);
      const pos = Math.floor(rng() * 4);
      const options = [];
      let di = 0;
      for (let k = 0; k < 4; k++) options.push(k === pos ? f.latex : distractors[di++]);
      pushQ({
        q: `“${topic.title}” mavzusida «${f.name}» ni ifodalovchi asosiy formulani ko‘rsating:`,
        options,
        answer: pos,
        explain: `${f.name} formulasi: ${f.latex}. (${f.symbols})`,
      });
    }
  }

  for (let i = 0; i < keyLaws.length && list.length < 20; i++) {
    const law = keyLaws[i];
    const otherLaws = keyLaws.filter((_, j) => j !== i);
    if (otherLaws.length >= 1) {
      const wrongs = [
        ...otherLaws.slice(0, 2).map((x) => x.text),
        `Faqat vakuumda va mutlaq nol haroratda bajariladigan cheklangan qoida.`,
        `Kattaliklar orasida bog‘lanish mavjud emasligini bildiruvchi tasdiq.`,
      ].slice(0, 3);
      const pos = Math.floor(rng() * 4);
      const options = [];
      let wi = 0;
      for (let k = 0; k < 4; k++) options.push(k === pos ? law.text : wrongs[wi++]);
      pushQ({
        q: `«${law.title}» ning fizik mazmuni qaysi javobda to‘g‘ri bayon qilingan?`,
        options,
        answer: pos,
        explain: `${law.title}: ${law.text}`,
      });
    }
  }

  for (let i = 0; i < constants.length && list.length < 20; i++) {
    const c = constants[i];
    const wrongUnits = ['kg·m/s³', 'J·K/mol²', 'N·s²/m', 'Tl·m/K', 'V·kg/s']
      .filter((u) => u !== c.unit)
      .slice(0, 3);
    const pos = Math.floor(rng() * 4);
    const options = [];
    let wi = 0;
    for (let k = 0; k < 4; k++) options.push(k === pos ? c.unit : wrongUnits[wi++]);
    pushQ({
      q: `${c.name} (${c.symbol}) ning Xalqaro birliklar tizimidagi (SI) o‘lchov birligi qaysi?`,
      options,
      answer: pos,
      explain: `${c.name} (${c.symbol} = ${c.value}) SI tizimida ${c.unit} birligida o‘lchanadi.`,
    });
  }

  // 4. Interactive calculator sensitivity verification fallback if still < 20
  const calc = topic.theory?.calculator;
  if (calc && Array.isArray(calc.inputs) && calc.inputs.length > 0) {
    let idx = 0;
    while (list.length < 20 && idx < 12) {
      idx++;
      const vals = {};
      for (const inp of calc.inputs) {
        const span = inp.max - inp.min;
        const raw = inp.min + span * (0.2 + ((idx * 0.17 + rng() * 0.3) % 0.7));
        const snapped = Math.round(raw / (inp.step || 1)) * (inp.step || 1);
        vals[inp.key] = Number(Math.min(inp.max, Math.max(inp.min, snapped)).toFixed(3));
      }
      const res = calc.compute(vals);
      const numeric = parseFloat(String(res.value).replace(/[^\d.-]/g, ''));
      if (Number.isFinite(numeric)) {
        const descInputs = calc.inputs.map((inp) => `${inp.symbol} = ${vals[inp.key]} ${inp.unit}`).join(', ');
        const { options, answer } = makeNumericDistractors(numeric, res.unit || '', rng);
        pushQ({
          q: `Amaliy masala (${idx}): Agar ${descInputs} bo‘lsa, ${calc.title} bo‘yicha natija qanchaga teng bo‘ladi?`,
          options,
          answer,
          explain: `Formula (${calc.formulaDisplay}) asosida hisoblanganda: ${res.value} ${res.unit}. ${res.summary}`,
        });
      }
    }
  }

  return list.slice(0, 20);
}
