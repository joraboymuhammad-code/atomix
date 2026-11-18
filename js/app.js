import { SECTIONS, TOPICS, getTopicById, getSectionById } from './data/curriculum.js';
import { AtomixParametricSim } from './sim-engine.js';

const STORAGE_KEY = 'atomix_quiz_v1';

const state = {
  topicId: TOPICS[0].id,
  tab: 'theory', // 'theory' | 'sim' | 'quiz'
  simMode: '3d', // '3d' | 'param' | 'split'
  simUrl: TOPICS[0].simulation.openSourceUrl,
  quizFilter: 'all', // 'all' | 'unanswered' | 'wrong'
  answers: loadAnswers(),
  openSections: new Set(['sec-1']),
  calcValues: {},
};

const els = {
  shell: document.getElementById('app-shell'),
  sidebar: document.getElementById('sidebar'),
  sidebarToggle: document.getElementById('sidebar-toggle'),
  drawerBackdrop: document.getElementById('drawer-backdrop'),
  sectionStrip: document.getElementById('section-strip'),
  searchInput: document.getElementById('topic-search'),
  searchResults: document.getElementById('search-results'),
  globalScore: document.getElementById('global-score'),
  breadcrumb: document.getElementById('topic-breadcrumb'),
  title: document.getElementById('topic-title'),
  subtitle: document.getElementById('topic-subtitle'),
  prevBtn: document.getElementById('prev-topic-btn'),
  nextBtn: document.getElementById('next-topic-btn'),
  tabBtns: Array.from(document.querySelectorAll('.tab-btn')),
  panelTheory: document.getElementById('tab-panel-theory'),
  panelSim: document.getElementById('tab-panel-sim'),
  panelQuiz: document.getElementById('tab-panel-quiz'),
};

let paramSim = null;

function loadAnswers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveAnswers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
  } catch {}
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

// Convert LaTeX snippets into crisp accessible HTML math without external CDN failure
function formatTexExpr(expr) {
  let s = escapeHtml(expr);
  // Replace \frac{a}{b} iteratively (supports single-level braces cleanly)
  for (let i = 0; i < 4; i++) {
    s = s.replace(
      /\\frac\{([^{}]+)\}\{([^{}]+)\}/g,
      '<span class="math-frac"><span>$1</span><span>$2</span></span>'
    );
  }
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√(<span style="border-top:1px solid currentColor;padding:0 2px">$1</span>)');
  s = s.replace(/\\text\{([^{}]+)\}/g, '<span style="font-family:var(--font-sans);font-weight:500">$1</span>');
  s = s.replace(/\\mathrm\{([^{}]+)\}/g, '$1');
  s = s.replace(/\\vec\{([^{}]+)\}/g, '$1&#x20D7;');
  s = s.replace(/\\bar\{([^{}]+)\}/g, '$1&#x0304;');
  s = s.replace(/\\left\(|\\left\\\{|\\left\[/g, (m) => m.slice(5));
  s = s.replace(/\\right\)|\\right\\\}|\\right\]/g, (m) => m.slice(6));
  s = s.replace(/\\left\|/g, '|').replace(/\\right\|/g, '|');

  const syms = {
    '\\alpha': 'α', '\\beta': 'β', '\\gamma': 'γ', '\\delta': 'δ', '\\Delta': 'Δ',
    '\\varepsilon': 'ε', '\\epsilon': 'ε', '\\zeta': 'ζ', '\\eta': 'η',
    '\\theta': 'θ', '\\Theta': 'Θ', '\\lambda': 'λ', '\\Lambda': 'Λ',
    '\\mu': 'μ', '\\nu': 'ν', '\\xi': 'ξ', '\\pi': 'π', '\\rho': 'ρ',
    '\\sigma': 'σ', '\\Sigma': '∑', '\\tau': 'τ', '\\phi': 'φ', '\\varphi': 'φ',
    '\\Phi': 'Φ', '\\omega': 'ω', '\\Omega': 'Ω', '\\hbar': 'ℏ',
    '\\cdot': '·', '\\times': '×', '\\pm': '±', '\\le': '≤', '\\ge': '≥',
    '\\neq': '≠', '\\approx': '≈', '\\propto': '∝', '\\infty': '∞',
    '\\to': '→', '\\Rightarrow': '⇒', '\\perp': '⊥', '\\parallel': '∥',
    '\\circ': '°', '\\sin': 'sin', '\\cos': 'cos', '\\tan': 'tan',
    '\\arcsin': 'arcsin', '\\arctan': 'arctan', '\\ln': 'ln', '\\log': 'log',
    '\\sum': '∑', '\\quad': '&nbsp;&nbsp;', '\\;': ' ', '\\,': '', '\\\\': '<br>',
  };
  for (const [k, v] of Object.entries(syms)) {
    s = s.replaceAll(k, v);
  }
  s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
  s = s.replace(/\^([A-Za-z0-9\-+′*]+)/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
  s = s.replace(/_([A-Za-z0-9]+)/g, '<sub>$1</sub>');
  s = s.replace(/\{|\}/g, '');
  return s;
}

function renderInlineMath(text) {
  const str = String(text || '');
  const parts = str.split('$');
  let out = '';
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1 && i < parts.length - 1) {
      out += `<span class="inline-math">${formatTexExpr(parts[i])}</span>`;
    } else {
      out += escapeHtml(parts[i]);
    }
  }
  return out;
}

function getTopicQuizStats(topic) {
  const ans = state.answers[topic.id] || {};
  let answered = 0;
  let correct = 0;
  topic.questions.forEach((q, idx) => {
    if (typeof ans[idx] === 'number') {
      answered++;
      if (ans[idx] === q.answer) correct++;
    }
  });
  return { answered, correct, total: topic.questions.length };
}

function updateGlobalProgress() {
  let totalCorrect = 0;
  let totalQs = 0;
  for (const t of TOPICS) {
    const st = getTopicQuizStats(t);
    totalCorrect += st.correct;
    totalQs += st.total;
  }
  els.globalScore.textContent = `${totalCorrect} / ${totalQs}`;
}

function renderSectionStrip() {
  const activeTopic = getTopicById(state.topicId);
  els.sectionStrip.innerHTML = SECTIONS.map((sec) => {
    const firstTopic = TOPICS.find((t) => t.sectionId === sec.id);
    const active = activeTopic.sectionId === sec.id;
    return `
      <button class="section-pill ${active ? 'active' : ''}"
              style="--sec-color:${sec.accent}"
              data-first-topic="${firstTopic.id}"
              type="button">
        ${sec.num}. ${sec.shortTitle}
      </button>`;
  }).join('');
}

function renderSidebar() {
  const html = SECTIONS.map((sec) => {
    const isOpen = state.openSections.has(sec.id);
    const secTopics = TOPICS.filter((t) => t.sectionId === sec.id);
    let bodyHtml = '';
    if (isOpen) {
      let lastSub = '';
      for (const t of secTopics) {
        if (t.subsectionTitle && t.subsectionTitle !== lastSub) {
          lastSub = t.subsectionTitle;
          if (sec.subsections.length > 1) {
            bodyHtml += `<div class="subsec-label">${escapeHtml(t.subsectionTitle)}</div>`;
          }
        }
        const st = getTopicQuizStats(t);
        const badge = st.answered > 0 ? `${st.correct}/${st.total}` : '';
        bodyHtml += `
          <button class="topic-link ${t.id === state.topicId ? 'active' : ''}" data-topic="${t.id}" type="button">
            <span class="topic-code">${t.code}</span>
            <span class="topic-name">${escapeHtml(t.title)}</span>
            ${badge ? `<span class="topic-check">${badge}</span>` : ''}
          </button>`;
      }
    }
    return `
      <div class="sidebar-sec">
        <button class="sec-toggle" data-toggle-sec="${sec.id}" type="button">
          <span class="sec-dot" style="background:${sec.accent}"></span>
          <span class="sec-toggle-title">${sec.num}. ${escapeHtml(sec.title)}</span>
          <span class="sec-count">${secTopics.length}</span>
        </button>
        ${isOpen ? `<div class="sec-body">${bodyHtml}</div>` : ''}
      </div>`;
  }).join('');
  els.sidebar.innerHTML = html;
}

function renderTheoryTab(topic) {
  const th = topic.theory;
  const calc = th.calculator;
  state.calcValues = {};
  if (calc && Array.isArray(calc.inputs)) {
    for (const inp of calc.inputs) {
      state.calcValues[inp.key] = inp.default;
    }
  }

  const calcInputsHtml = calc
    ? calc.inputs
        .map(
          (inp) => `
      <div class="calc-field">
        <div class="calc-field-top">
          <span>${escapeHtml(inp.label)} (${inp.symbol})</span>
          <strong class="tabular">${inp.default} ${inp.unit}</strong>
        </div>
        <input type="range" data-calc-range="${inp.key}" min="${inp.min}" max="${inp.max}" step="${inp.step}" value="${inp.default}" />
        <input class="calc-num-input" type="number" data-calc-num="${inp.key}" min="${inp.min}" max="${inp.max}" step="${inp.step}" value="${inp.default}" />
      </div>`
        )
        .join('')
    : '';

  els.panelTheory.innerHTML = `
    <div class="theory-stack">
      <div class="panel">
        <h2 class="panel-title">Nazariy asoslar va fizik mazmun</h2>
        <p class="overview-text">${renderInlineMath(th.overview)}</p>
      </div>

      <div class="panel">
        <h2 class="panel-title">Asosiy qonunlar va tamoyillar</h2>
        <div class="laws-grid">
          ${th.keyLaws
            .map(
              (l) => `
            <div class="law-box">
              <h4>${escapeHtml(l.title)}</h4>
              <p>${renderInlineMath(l.text)}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="panel">
        <h2 class="panel-title">Matematik apparat va asosiy formulalar</h2>
        <div class="formulas-grid">
          ${th.formulas
            .map(
              (f) => `
            <div class="formula-card">
              <div class="formula-math">${formatTexExpr(f.latex)}</div>
              <div class="formula-name">${escapeHtml(f.name)}</div>
              <div class="formula-symbols">${formatTexExpr(f.symbols)}</div>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="two-col-grid">
        <div class="panel">
          <h2 class="panel-title">Fundamental doimiylar va birliklar</h2>
          <table class="constants-table">
            <thead>
              <tr><th>Kattalik</th><th>Belgi</th><th>Qiymati</th><th>Birlik</th></tr>
            </thead>
            <tbody>
              ${th.constants
                .map(
                  (c) => `
                <tr>
                  <td>${escapeHtml(c.name)}</td>
                  <td class="mono">${escapeHtml(c.symbol)}</td>
                  <td class="mono tabular">${escapeHtml(c.value)}</td>
                  <td>${escapeHtml(c.unit)}</td>
                </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>

        <div class="panel">
          <h2 class="panel-title">Muhandislik va ilmiy qo‘llanilishi</h2>
          <ul class="apps-list">
            ${th.applications.map((a) => `<li>${renderInlineMath(a)}</li>`).join('')}
          </ul>
        </div>
      </div>

      ${
        calc
          ? `
      <div class="panel">
        <h2 class="panel-title">${escapeHtml(calc.title)}</h2>
        <div class="calc-formula">${escapeHtml(calc.formulaDisplay)}</div>
        <div class="calc-grid">${calcInputsHtml}</div>
        <div class="calc-result" id="calc-result-box"></div>
      </div>`
          : ''
      }
    </div>
  `;

  if (calc) updateCalcResult(calc);
}

function updateCalcResult(calc) {
  const box = document.getElementById('calc-result-box');
  if (!box || !calc) return;
  try {
    const res = calc.compute(state.calcValues);
    box.innerHTML = `
      <div>
        <div style="font-size:12px;color:var(--text-muted)">Hisoblangan natija</div>
        <div class="calc-result-val tabular">${escapeHtml(res.value)} <span style="font-size:14px">${escapeHtml(res.unit || '')}</span></div>
      </div>
      <div class="calc-result-summary">${escapeHtml(res.summary || '')}</div>
    `;
  } catch {
    box.innerHTML = `<div class="calc-result-summary">Hisoblash parametrlarini tekshiring.</div>`;
  }
}

function renderSimTab(topic) {
  const sim = topic.simulation;
  const allSims = [
    { label: `${sim.title}`, source: sim.openSourceSource, url: sim.openSourceUrl },
    ...(sim.alternateSims || []),
  ];
  if (!allSims.some((s) => s.url === state.simUrl)) {
    state.simUrl = sim.openSourceUrl;
  }
  const activeEntry = allSims.find((s) => s.url === state.simUrl) || allSims[0];

  const show3d = state.simMode === '3d' || state.simMode === 'split';
  const showParam = state.simMode === 'param' || state.simMode === 'split';

  els.panelSim.innerHTML = `
    <div class="sim-toolbar">
      <div class="sim-mode-group" role="group" aria-label="Simulyator rejimi">
        <button class="mode-btn ${state.simMode === '3d' ? 'active' : ''}" data-sim-mode="3d" type="button">3D Open-Source Lab</button>
        <button class="mode-btn ${state.simMode === 'param' ? 'active' : ''}" data-sim-mode="param" type="button">Parametrik Stend</button>
        <button class="mode-btn ${state.simMode === 'split' ? 'active' : ''}" data-sim-mode="split" type="button">Yonma-yon (Split View)</button>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <span class="source-badge">${escapeHtml(activeEntry.source)}</span>
        <button id="sim-reload-btn" class="btn" type="button" ${!show3d ? 'disabled' : ''}>Qayta yuklash</button>
        <button id="sim-full-btn" class="btn" type="button" ${!show3d ? 'disabled' : ''}>To‘liq ekran</button>
      </div>
    </div>

    ${
      allSims.length > 1 && show3d
        ? `<div class="sim-alt-row">
            <span style="font-size:12.5px;color:var(--text-muted)">Tajriba tanlash:</span>
            ${allSims
              .map(
                (s) => `
              <button class="alt-chip ${s.url === state.simUrl ? 'active' : ''}" data-sim-url="${s.url}" type="button">
                ${escapeHtml(s.label)}
              </button>`
              )
              .join('')}
          </div>`
        : ''
    }

    <p style="margin:0 0 14px;font-size:13.8px;color:var(--text-secondary)">${escapeHtml(sim.openSourceNote || '')}</p>

    <div class="sim-stage-wrap ${state.simMode === 'split' ? 'split' : ''}">
      ${
        show3d
          ? `<div class="iframe-panel">
              <div class="iframe-head">
                <span>${escapeHtml(activeEntry.label)}</span>
                <span style="color:var(--text-muted)">${escapeHtml(activeEntry.url)}</span>
              </div>
              <iframe id="sim-iframe" class="sim-iframe" src="${escapeHtml(state.simUrl)}" title="${escapeHtml(activeEntry.label)}" allow="fullscreen; accelerometer; gyroscope"></iframe>
            </div>`
          : ''
      }
      ${
        showParam
          ? `<div class="param-panel">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
                <div>
                  <h3 style="margin:0;font-size:15.5px">${escapeHtml(sim.parametric.title)}</h3>
                  <p style="margin:3px 0 0;font-size:12.5px;color:var(--text-muted)">${escapeHtml(sim.parametric.description)}</p>
                </div>
                <div style="display:flex;gap:8px">
                  <button id="param-play-btn" class="btn btn-primary" type="button">Pauza / Davom</button>
                  <button id="param-reset-btn" class="btn" type="button">Qayta boshlash</button>
                </div>
              </div>
              <div class="param-canvas-box">
                <canvas id="param-canvas" class="param-canvas"></canvas>
              </div>
              <div id="param-telemetry" class="telemetry-bar"></div>
              <div class="param-controls">
                ${sim.parametric.controls
                  .map(
                    (c) => `
                  <div class="param-ctrl">
                    <div class="param-ctrl-head">
                      <span>${escapeHtml(c.label)}</span>
                      <strong class="tabular" data-param-readout="${c.key}">${c.value} ${escapeHtml(c.unit || '')}</strong>
                    </div>
                    <input type="range" data-param-key="${c.key}" data-param-unit="${escapeHtml(c.unit || '')}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" />
                  </div>`
                  )
                  .join('')}
              </div>
            </div>`
          : ''
      }
    </div>
  `;

  if (showParam) {
    const canvas = document.getElementById('param-canvas');
    const telem = document.getElementById('param-telemetry');
    if (paramSim) paramSim.stop();
    paramSim = new AtomixParametricSim(canvas, telem);
    paramSim.setTopic(topic);
  } else if (paramSim) {
    paramSim.stop();
  }
}

function renderQuizTab(topic) {
  const ans = state.answers[topic.id] || {};
  const stats = getTopicQuizStats(topic);
  const pct = stats.answered > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const letters = ['A', 'B', 'C', 'D'];

  const visibleIndices = topic.questions
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => {
      if (state.quizFilter === 'unanswered') return typeof ans[i] !== 'number';
      if (state.quizFilter === 'wrong') return typeof ans[i] === 'number' && ans[i] !== q.answer;
      return true;
    });

  els.panelQuiz.innerHTML = `
    <div class="quiz-header-card">
      <div class="quiz-stats tabular">
        <span>Javob berildi: <strong>${stats.answered} / ${stats.total}</strong></span>
        <span>To‘g‘ri javoblar: <strong style="color:var(--success)">${stats.correct}</strong></span>
        <span>Natija: <strong>${pct}%</strong></span>
      </div>
      <div class="quiz-filters">
        <button class="filter-btn ${state.quizFilter === 'all' ? 'active' : ''}" data-qfilter="all" type="button">Barchasi (20)</button>
        <button class="filter-btn ${state.quizFilter === 'unanswered' ? 'active' : ''}" data-qfilter="unanswered" type="button">Javobsizlar</button>
        <button class="filter-btn ${state.quizFilter === 'wrong' ? 'active' : ''}" data-qfilter="wrong" type="button">Xato javoblar</button>
        <button id="quiz-reset-btn" class="btn" type="button">Testni qayta boshlash</button>
      </div>
    </div>

    <div class="quiz-list">
      ${
        visibleIndices.length === 0
          ? `<div class="panel" style="text-align:center;color:var(--text-muted)">Tanlangan filtr bo‘yicha savollar yo‘q.</div>`
          : visibleIndices
              .map(({ q, i }) => {
                const chosen = ans[i];
                const isAnswered = typeof chosen === 'number';
                const isCorrect = isAnswered && chosen === q.answer;
                const cardCls = isAnswered ? (isCorrect ? 'correct' : 'wrong') : '';
                return `
                  <article class="q-card ${cardCls}">
                    <div class="q-head">
                      <span class="q-num tabular">${i + 1}/20</span>
                      <div class="q-text">${renderInlineMath(q.q)}</div>
                    </div>
                    <div class="q-options">
                      ${q.options
                        .map((opt, oi) => {
                          let cls = '';
                          if (isAnswered) {
                            if (oi === q.answer) cls = 'is-correct';
                            else if (oi === chosen) cls = 'is-wrong';
                          }
                          return `
                            <button class="opt-btn ${cls}" data-qidx="${i}" data-oidx="${oi}" ${isAnswered ? 'disabled' : ''} type="button">
                              <span class="opt-letter">${letters[oi]}</span>
                              <span>${formatTexExpr(opt)}</span>
                            </button>`;
                        })
                        .join('')}
                    </div>
                    ${
                      isAnswered
                        ? `<div class="q-explain">
                            <strong style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                              ${isCorrect ? 'To‘g‘ri!' : `Xato — to‘g‘ri javob: ${letters[q.answer]}`}
                            </strong>
                            ${q.explain ? ` — ${renderInlineMath(q.explain)}` : ''}
                          </div>`
                        : ''
                    }
                  </article>`;
              })
              .join('')
      }
    </div>
  `;
}

function syncRouteHash() {
  const target = `#topic=${state.topicId}&tab=${state.tab}`;
  if (location.hash !== target) {
    history.replaceState(null, '', target);
  }
}

function readRouteHash() {
  const mTopic = location.hash.match(/topic=([^&]+)/);
  const mTab = location.hash.match(/tab=(theory|sim|quiz)/);
  if (mTopic) {
    const found = TOPICS.find((t) => t.id === mTopic[1]);
    if (found) state.topicId = found.id;
  }
  if (mTab) state.tab = mTab[1];
}

function renderActiveView() {
  const topic = getTopicById(state.topicId);
  const sec = getSectionById(topic.sectionId);
  const idx = TOPICS.findIndex((t) => t.id === topic.id);

  document.documentElement.style.setProperty('--accent', sec.accent);
  document.documentElement.style.setProperty('--accent-soft', `color-mix(in srgb, ${sec.accent} 13%, transparent)`);
  document.documentElement.style.setProperty('--accent-border', `color-mix(in srgb, ${sec.accent} 38%, transparent)`);
  state.openSections.add(sec.id);

  els.breadcrumb.textContent = `${sec.num}. ${sec.title} · ${topic.code}`;
  els.title.textContent = topic.title;
  els.subtitle.textContent = topic.subtitle;
  els.prevBtn.disabled = idx <= 0;
  els.nextBtn.disabled = idx >= TOPICS.length - 1;

  for (const b of els.tabBtns) {
    const act = b.dataset.tab === state.tab;
    b.classList.toggle('active', act);
    b.setAttribute('aria-selected', act ? 'true' : 'false');
  }

  els.panelTheory.hidden = state.tab !== 'theory';
  els.panelSim.hidden = state.tab !== 'sim';
  els.panelQuiz.hidden = state.tab !== 'quiz';

  renderSectionStrip();
  renderSidebar();
  updateGlobalProgress();

  if (state.tab === 'theory') {
    if (paramSim) paramSim.stop();
    renderTheoryTab(topic);
  } else if (state.tab === 'sim') {
    renderSimTab(topic);
  } else {
    if (paramSim) paramSim.stop();
    renderQuizTab(topic);
  }

  syncRouteHash();
}

function selectTopic(topicId, tabOverride) {
  const t = getTopicById(topicId);
  state.topicId = t.id;
  state.simUrl = t.simulation.openSourceUrl;
  state.quizFilter = 'all';
  if (tabOverride) state.tab = tabOverride;
  els.shell.classList.remove('mobile-open');
  renderActiveView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
els.sidebarToggle.addEventListener('click', () => {
  if (window.innerWidth <= 980) {
    els.shell.classList.toggle('mobile-open');
  } else {
    els.shell.classList.toggle('sidebar-collapsed');
  }
});

els.drawerBackdrop.addEventListener('click', () => {
  els.shell.classList.remove('mobile-open');
});

els.sectionStrip.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-first-topic]');
  if (btn) selectTopic(btn.dataset.firstTopic);
});

els.sidebar.addEventListener('click', (e) => {
  const secBtn = e.target.closest('[data-toggle-sec]');
  if (secBtn) {
    const sid = secBtn.dataset.toggleSec;
    if (state.openSections.has(sid)) state.openSections.delete(sid);
    else state.openSections.add(sid);
    renderSidebar();
    return;
  }
  const topBtn = e.target.closest('[data-topic]');
  if (topBtn) selectTopic(topBtn.dataset.topic);
});

els.tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    state.tab = btn.dataset.tab;
    renderActiveView();
  });
});

els.prevBtn.addEventListener('click', () => {
  const idx = TOPICS.findIndex((t) => t.id === state.topicId);
  if (idx > 0) selectTopic(TOPICS[idx - 1].id);
});
els.nextBtn.addEventListener('click', () => {
  const idx = TOPICS.findIndex((t) => t.id === state.topicId);
  if (idx < TOPICS.length - 1) selectTopic(TOPICS[idx + 1].id);
});

// Search
els.searchInput.addEventListener('input', () => {
  const q = els.searchInput.value.trim().toLowerCase();
  if (!q) {
    els.searchResults.hidden = true;
    return;
  }
  const matches = TOPICS.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q) ||
      t.code.toLowerCase().includes(q)
  ).slice(0, 12);

  els.searchResults.hidden = false;
  els.searchResults.innerHTML =
    matches.length === 0
      ? `<div style="padding:10px;color:var(--text-muted);font-size:13px">Mos mavzu topilmadi.</div>`
      : matches
          .map(
            (m) => `
          <button class="search-item" data-search-topic="${m.id}" type="button">
            <span class="search-code">${m.code}</span>
            <span class="search-title">${escapeHtml(m.title)}</span>
          </button>`
          )
          .join('');
});

els.searchResults.addEventListener('click', (e) => {
  const item = e.target.closest('[data-search-topic]');
  if (item) {
    els.searchResults.hidden = true;
    els.searchInput.value = '';
    selectTopic(item.dataset.searchTopic);
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrap')) {
    els.searchResults.hidden = true;
  }
});

// Tab 1 Calculator delegation
els.panelTheory.addEventListener('input', (e) => {
  const topic = getTopicById(state.topicId);
  const calc = topic.theory.calculator;
  if (!calc) return;
  const rKey = e.target.dataset.calcRange;
  const nKey = e.target.dataset.calcNum;
  const key = rKey || nKey;
  if (!key) return;
  const val = Number(e.target.value);
  if (!Number.isFinite(val)) return;
  state.calcValues[key] = val;
  const pairedRange = els.panelTheory.querySelector(`[data-calc-range="${key}"]`);
  const pairedNum = els.panelTheory.querySelector(`[data-calc-num="${key}"]`);
  if (pairedRange && rKey !== key) pairedRange.value = val;
  if (pairedNum && nKey !== key) pairedNum.value = val;
  const inpDef = calc.inputs.find((i) => i.key === key);
  const labelStrong = pairedRange?.closest('.calc-field')?.querySelector('.calc-field-top strong');
  if (labelStrong && inpDef) labelStrong.textContent = `${val} ${inpDef.unit}`;
  updateCalcResult(calc);
});

// Tab 2 Simulation delegation
els.panelSim.addEventListener('click', (e) => {
  const modeBtn = e.target.closest('[data-sim-mode]');
  if (modeBtn) {
    state.simMode = modeBtn.dataset.simMode;
    renderSimTab(getTopicById(state.topicId));
    return;
  }
  const altBtn = e.target.closest('[data-sim-url]');
  if (altBtn) {
    state.simUrl = altBtn.dataset.simUrl;
    renderSimTab(getTopicById(state.topicId));
    return;
  }
  if (e.target.id === 'sim-reload-btn') {
    const iframe = document.getElementById('sim-iframe');
    if (iframe) iframe.src = state.simUrl;
    return;
  }
  if (e.target.id === 'sim-full-btn') {
    const iframe = document.getElementById('sim-iframe');
    if (iframe && iframe.requestFullscreen) iframe.requestFullscreen().catch(() => {});
    return;
  }
  if (e.target.id === 'param-play-btn' && paramSim) {
    paramSim.togglePlay();
    return;
  }
  if (e.target.id === 'param-reset-btn' && paramSim) {
    paramSim.reset();
  }
});

els.panelSim.addEventListener('input', (e) => {
  const key = e.target.dataset.paramKey;
  if (!key || !paramSim) return;
  const val = Number(e.target.value);
  paramSim.setParam(key, val);
  const ro = els.panelSim.querySelector(`[data-param-readout="${key}"]`);
  if (ro) ro.textContent = `${val} ${e.target.dataset.paramUnit || ''}`.trim();
});

// Tab 3 Quiz delegation
els.panelQuiz.addEventListener('click', (e) => {
  const opt = e.target.closest('.opt-btn');
  if (opt) {
    const qIdx = Number(opt.dataset.qidx);
    const oIdx = Number(opt.dataset.oidx);
    if (!state.answers[state.topicId]) state.answers[state.topicId] = {};
    state.answers[state.topicId][qIdx] = oIdx;
    saveAnswers();
    updateGlobalProgress();
    renderSidebar();
    renderQuizTab(getTopicById(state.topicId));
    return;
  }
  const fBtn = e.target.closest('[data-qfilter]');
  if (fBtn) {
    state.quizFilter = fBtn.dataset.qfilter;
    renderQuizTab(getTopicById(state.topicId));
    return;
  }
  if (e.target.id === 'quiz-reset-btn') {
    delete state.answers[state.topicId];
    saveAnswers();
    state.quizFilter = 'all';
    updateGlobalProgress();
    renderSidebar();
    renderQuizTab(getTopicById(state.topicId));
  }
});

// Listen for postMessage from embedded Effectuall "Nazariya" button
window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'atomix-open-tab' && e.data.tab === 'theory') {
    state.tab = 'theory';
    renderActiveView();
  }
});

window.addEventListener('hashchange', () => {
  readRouteHash();
  renderActiveView();
});

// Boot
readRouteHash();
renderActiveView();
