// Atomix 2-Team Interactive 3D & PhET-Style Classroom Games Engine
// Works dynamically for all 122 topics across Physics (67) and Chemistry (55)

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function parseNumericVal(val) {
  if (typeof val === 'number') return Number.isFinite(val) ? val : NaN;
  const match = String(val ?? '').replace(',', '.').match(/-?\d+(\.\d+)?(e[+-]?\d+)?/i);
  return match ? Number(match[0]) : NaN;
}

function snapToStep(val, min, max, step) {
  const s = step > 0 ? step : 1;
  const clamped = Math.min(max, Math.max(min, val));
  const steps = Math.round((clamped - min) / s);
  const res = min + steps * s;
  return Number(res.toFixed(6));
}

function shuffleArr(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const GAME_CATALOG = [
  { id: 'tug', num: '01', name: '3D Arqon Tortishuv', tag: 'PhET Duel', icon: '⚡', desc: 'Savollarga aniq javob berib, 3D kvant aravachasini o‘z hududingizga tortib oling!' },
  { id: 'sniper', num: '02', name: '3D Lab Snayperi', tag: 'Parametrik Nishon', icon: '🎯', desc: 'Mavzu kalkulyatoridan parametr tanlab, nishondagi maqsad qiymatga aniq tegizing!' },
  { id: 'blitz', num: '03', name: 'Ikki Jamoa Blitsi', tag: 'Split-Screen Duel', icon: '🔥', desc: 'Bir vaqtning o‘zida 1-Jamoa va 2-Jamoa tezkor reaksiya va seriyali ochko musobaqasi!' },
  { id: 'builder', num: '04', name: 'Formula Konstruktori', tag: '3D Reaktor', icon: '🧬', desc: 'Formula va fizik/kimyoviy qonunlarni moslab, 3D reaktor yadrosini ishga tushiring!' },
  { id: 'boss', num: '05', name: 'Boss-Reyd Qamali', tag: '3-Bosqich Final', icon: '🏆', desc: '3 to‘lqinli yakuniy chempionat: blits, hisob-kitob va g‘olib kubogi!' },
];

export class AtomixTeamGames {
  constructor(containerEl, topic, formatMathFn, formatOptionFn) {
    this.root = containerEl;
    this.topic = topic;
    this.fmtMath = typeof formatMathFn === 'function' ? formatMathFn : (s) => esc(s);
    this.fmtOpt = typeof formatOptionFn === 'function' ? formatOptionFn : this.fmtMath;

    this.destroyed = false;
    this.rafs = [];
    this.timers = [];
    this.keyHandler = null;
    this.audioCtx = null;

    this.state = {
      activeGame: 'tug',
      soundOn: true,
      team1: { name: '1-Jamoa (Kvant)', score: 0, streak: 0 },
      team2: { name: '2-Jamoa (Foton)', score: 0, streak: 0 },
      turn: 1,
      pool: [],
      // Game 1: Tug of War
      tug: { pos: 0, qIdx: 0, feedback: null, winner: 0 },
      // Game 2: Lab Sniper
      sniper: null,
      // Game 3: Split-Screen Blitz
      blitz: null,
      // Game 4: Formula Builder
      builder: null,
      // Game 5: Boss Raid
      boss: null,
    };

    this.state.pool = shuffleArr(this.topic.questions || []);
    this._initSniperRound(true);
    this._initBlitz();
    this._initBuilder();
    this._initBoss();

    this.render();
  }

  destroy() {
    this.destroyed = true;
    this._clearRuntime();
  }

  _clearRuntime() {
    this.rafs.forEach((id) => cancelAnimationFrame(id));
    this.rafs = [];
    this.timers.forEach((id) => clearInterval(id));
    this.timers = [];
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
  }

  _playTone(freq = 520, dur = 0.12, type = 'sine') {
    if (!this.state.soundOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!this.audioCtx) this.audioCtx = new AC();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + dur);
    } catch { /* ignore audio policy errors */ }
  }

  _award(teamNum, pts) {
    const t = teamNum === 1 ? this.state.team1 : this.state.team2;
    t.streak += 1;
    t.score += pts + (t.streak >= 3 ? 5 : 0);
    this._playTone(teamNum === 1 ? 620 : 740, 0.14, 'triangle');
  }

  _penalize(teamNum) {
    const t = teamNum === 1 ? this.state.team1 : this.state.team2;
    t.streak = 0;
    this._playTone(210, 0.18, 'sawtooth');
  }

  _getQ(idx) {
    const p = this.state.pool.length ? this.state.pool : (this.topic.questions || []);
    return p[idx % p.length];
  }

  // ---------- GAME 2 INIT ----------
  _initSniperRound(resetAll = false) {
    const calc = this.topic.theory?.calculator;
    const inputs = calc?.inputs || [];
    const targetInputs = {};
    const curInputs = {};

    inputs.forEach((inp) => {
      const min = Number(inp.min ?? 0);
      const max = Number(inp.max ?? 10);
      const step = Number(inp.step ?? 1);
      const stepsCount = Math.max(1, Math.floor((max - min) / step));
      const randStep = Math.floor(Math.random() * (stepsCount + 1));
      targetInputs[inp.key] = snapToStep(min + randStep * step, min, max, step);
      curInputs[inp.key] = Number(inp.default ?? min);
    });

    let targetVal = NaN;
    let unit = '';
    if (calc?.compute) {
      const out = calc.compute(targetInputs);
      targetVal = parseNumericVal(out?.value);
      unit = out?.unit || '';
    }

    const prev = this.state.sniper;
    this.state.sniper = {
      round: resetAll ? 1 : (prev?.round || 1) + 1,
      team1Err: resetAll ? null : prev?.team1Err ?? null,
      team2Err: resetAll ? null : prev?.team2Err ?? null,
      shotCount: resetAll ? 0 : (prev?.shotCount || 0),
      targetInputs,
      targetVal: Number.isFinite(targetVal) ? targetVal : 10,
      unit,
      curInputs,
      lastShot: null,
    };
  }

  // ---------- GAME 3 INIT ----------
  _initBlitz() {
    this.state.blitz = {
      running: false,
      timeLeft: 45,
      qIdx1: 0,
      qIdx2: Math.min(5, Math.max(1, Math.floor((this.topic.questions?.length || 10) / 2))),
      p1Correct: 0,
      p2Correct: 0,
      flash1: '',
      flash2: '',
      finished: false,
    };
  }

  // ---------- GAME 4 INIT ----------
  _initBuilder() {
    const forms = this.topic.theory?.formulas || [];
    const laws = this.topic.theory?.keyLaws || [];
    const items = [];
    forms.forEach((f, idx) => {
      items.push({ id: `f-${idx}`, prompt: f.latex || f.name, isFormula: true, match: f.name || f.symbols });
    });
    laws.forEach((l, idx) => {
      if (items.length < 6) {
        items.push({ id: `l-${idx}`, prompt: l.title, isFormula: false, match: l.text });
      }
    });
    const usable = items.slice(0, 6);
    const leftCards = shuffleArr(usable.map((u, i) => ({ idx: i, id: u.id, text: u.prompt, isFormula: u.isFormula, matched: false })));
    const rightCards = shuffleArr(usable.map((u, i) => ({ idx: i, id: u.id, text: u.match, matched: false })));
    this.state.builder = {
      leftCards,
      rightCards,
      selLeft: null,
      teamTurn: 1,
      matchedCount: 0,
      total: usable.length,
      message: 'Chapdagi formula/qonunni tanlab, o‘ngdagi mos ta’rifga ulang!',
    };
  }

  // ---------- GAME 5 INIT ----------
  _initBoss() {
    const calc = this.topic.theory?.calculator;
    const inputs = calc?.inputs || [];
    const sample = {};
    inputs.forEach((inp) => {
      const min = Number(inp.min ?? 0);
      const max = Number(inp.max ?? 10);
      const step = Number(inp.step ?? 1);
      const mid = min + (max - min) * (0.35 + Math.random() * 0.45);
      sample[inp.key] = snapToStep(mid, min, max, step);
    });
    const calcOut = calc?.compute ? calc.compute(sample) : { value: 10, unit: '' };
    const exactAns = parseNumericVal(calcOut?.value);

    this.state.boss = {
      hp: 100,
      maxHp: 100,
      wave: 1,
      qIdx: 8,
      teamTurn: 1,
      calcInputs: sample,
      calcUnit: calcOut?.unit || '',
      calcAnswer: Number.isFinite(exactAns) ? exactAns : 10,
      log: 'Kvant Boss 100% qalqon bilan maydonga tushdi! Har ikki jamoa navbat bilan zarba bering.',
      victory: false,
    };
  }

  render() {
    if (this.destroyed || !this.root) return;
    this._clearRuntime();

    const s = this.state;
    const isChem = this.topic.subject === 'chemistry';
    const accentLabel = isChem ? 'Kimyo Arenasi' : 'Fizika Arenasi';

    this.root.innerHTML = `
      <div class="team-games-arena">
        <!-- Persistent 2-Team Scoreboard -->
        <div class="tg-scoreboard">
          <div class="tg-team-card t1 ${s.turn === 1 ? 'is-turn' : ''}">
            <div class="tg-team-head">
              <span class="tg-team-badge">1-JAMOA</span>
              <span class="tg-streak">${s.team1.streak >= 2 ? `🔥 ${s.team1.streak}x seriya` : 'Tayyor'}</span>
            </div>
            <input class="tg-name-input" data-team-name="1" value="${esc(s.team1.name)}" aria-label="1-jamoa nomi" />
            <div class="tg-score-row">
              <span class="tg-score-val" id="tg-score-1">${s.team1.score}</span>
              <span class="tg-score-unit">ball</span>
            </div>
          </div>

          <div class="tg-vs-center">
            <div class="tg-arena-kicker">${esc(accentLabel)} · ${esc(this.topic.code)}</div>
            <div class="tg-vs-pill">VS</div>
            <div class="tg-turn-label">Navbat: <strong>${s.turn === 1 ? esc(s.team1.name) : esc(s.team2.name)}</strong></div>
            <div class="tg-meta-actions">
              <button type="button" class="btn-3d btn-3d-sm" id="tg-sound-btn">${s.soundOn ? '🔊 Ovoz' : '🔇 Jim'}</button>
              <button type="button" class="btn-3d btn-3d-sm" id="tg-reset-scores">↺ Nolga</button>
            </div>
          </div>

          <div class="tg-team-card t2 ${s.turn === 2 ? 'is-turn' : ''}">
            <div class="tg-team-head">
              <span class="tg-team-badge">2-JAMOA</span>
              <span class="tg-streak">${s.team2.streak >= 2 ? `⚡ ${s.team2.streak}x seriya` : 'Tayyor'}</span>
            </div>
            <input class="tg-name-input" data-team-name="2" value="${esc(s.team2.name)}" aria-label="2-jamoa nomi" />
            <div class="tg-score-row">
              <span class="tg-score-val" id="tg-score-2">${s.team2.score}</span>
              <span class="tg-score-unit">ball</span>
            </div>
          </div>
        </div>

        <!-- 5 Game Mode Tabs -->
        <div class="tg-game-selector" role="tablist">
          ${GAME_CATALOG.map((g) => `
            <button type="button" class="tg-game-tab btn-3d ${s.activeGame === g.id ? 'active' : ''}" data-game="${g.id}">
              <span class="tg-g-icon">${g.icon}</span>
              <span class="tg-g-text">
                <span class="tg-g-num">${g.num} · ${g.tag}</span>
                <strong>${g.name}</strong>
              </span>
            </button>
          `).join('')}
        </div>

        <!-- Active Game Stage -->
        <div class="tg-stage book-folio" id="tg-stage"></div>
      </div>
    `;

    this._bindGlobalControls();
    this._renderActiveGame();
  }

  _bindGlobalControls() {
    this.root.querySelectorAll('[data-team-name]').forEach((inp) => {
      inp.addEventListener('input', (e) => {
        const team = e.target.getAttribute('data-team-name');
        if (team === '1') this.state.team1.name = e.target.value || '1-Jamoa';
        else this.state.team2.name = e.target.value || '2-Jamoa';
      });
    });

    this.root.querySelector('#tg-sound-btn')?.addEventListener('click', () => {
      this.state.soundOn = !this.state.soundOn;
      this.render();
    });

    this.root.querySelector('#tg-reset-scores')?.addEventListener('click', () => {
      this.state.team1.score = 0;
      this.state.team1.streak = 0;
      this.state.team2.score = 0;
      this.state.team2.streak = 0;
      this.state.tug = { pos: 0, qIdx: 0, feedback: null, winner: 0 };
      this._initSniperRound(true);
      this._initBlitz();
      this._initBuilder();
      this._initBoss();
      this.render();
    });

    this.root.querySelectorAll('[data-game]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.state.activeGame = btn.getAttribute('data-game');
        this.render();
      });
    });
  }

  _renderActiveGame() {
    const stage = this.root.querySelector('#tg-stage');
    if (!stage) return;
    const g = this.state.activeGame;
    if (g === 'tug') this._renderTugGame(stage);
    else if (g === 'sniper') this._renderSniperGame(stage);
    else if (g === 'blitz') this._renderBlitzGame(stage);
    else if (g === 'builder') this._renderBuilderGame(stage);
    else if (g === 'boss') this._renderBossGame(stage);
  }

  // =========================================================================
  // GAME 1: 3D ARQON TORTISHUV (PhET Tug-of-War Duel)
  // =========================================================================
  _renderTugGame(stage) {
    const tug = this.state.tug;
    const q = this._getQ(tug.qIdx);
    const turn = this.state.turn;
    const letters = ['A', 'B', 'C', 'D'];

    stage.innerHTML = `
      <div class="tg-stage-head">
        <div>
          <span class="tg-tag">01 · PhET Arqon Tortishuv Simulyatori</span>
          <h3>3D Kvant Aravachasini Tortish Musobaqasi</h3>
        </div>
        <button type="button" class="btn-3d btn-3d-sm" id="tug-restart">Yangi duel</button>
      </div>
      <div class="tg-canvas-wrap">
        <canvas id="tug-canvas" class="tg-canvas"></canvas>
      </div>
      ${tug.winner ? `
        <div class="tg-victory-banner">
          <h4>🏆 ${tug.winner === 1 ? esc(this.state.team1.name) : esc(this.state.team2.name)} g‘alaba qozondi!</h4>
          <p>3D aravacha marra chizig‘idan muvaffaqiyatli tortib o‘tildi (+30 bonus ball).</p>
          <button type="button" class="btn-3d btn-3d-primary" id="tug-play-again">Yana o‘ynash</button>
        </div>
      ` : `
        <div class="tg-duel-q-box">
          <div class="tg-turn-pill team-${turn}">Navbat: ${turn === 1 ? esc(this.state.team1.name) : esc(this.state.team2.name)}</div>
          <div class="tg-q-prompt">${this.fmtMath(q.q)}</div>
          <div class="tg-v-options">
            ${q.options.map((opt, idx) => `
              <button type="button" class="opt-btn opt-3d" data-tug-opt="${idx}">
                <span class="opt-letter">${letters[idx]}</span>
                <span class="opt-text">${this.fmtOpt(opt)}</span>
              </button>
            `).join('')}
          </div>
          ${tug.feedback ? `<div class="tg-feedback">${esc(tug.feedback)}</div>` : ''}
        </div>
      `}
    `;

    this._mountTugCanvas(stage.querySelector('#tug-canvas'));

    stage.querySelector('#tug-restart')?.addEventListener('click', () => {
      this.state.tug = { pos: 0, qIdx: (tug.qIdx + 1) % this.state.pool.length, feedback: null, winner: 0 };
      this.render();
    });
    stage.querySelector('#tug-play-again')?.addEventListener('click', () => {
      this.state.tug = { pos: 0, qIdx: (tug.qIdx + 1) % this.state.pool.length, feedback: null, winner: 0 };
      this.render();
    });

    stage.querySelectorAll('[data-tug-opt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosen = Number(btn.getAttribute('data-tug-opt'));
        if (chosen === q.answer) {
          const delta = turn === 1 ? -25 : 25;
          tug.pos = Math.max(-100, Math.min(100, tug.pos + delta));
          this._award(turn, 15);
          tug.feedback = `To‘g‘ri! ${turn === 1 ? this.state.team1.name : this.state.team2.name} kuchli impuls berib aravachani 25% siljitdi!`;
          if (tug.pos <= -100) { tug.winner = 1; this._award(1, 30); }
          if (tug.pos >= 100) { tug.winner = 2; this._award(2, 30); }
        } else {
          const delta = turn === 1 ? 15 : -15;
          tug.pos = Math.max(-100, Math.min(100, tug.pos + delta));
          this._penalize(turn);
          tug.feedback = `Xato javob! Aravacha raqib tomonga 15% og‘di.`;
        }
        tug.qIdx += 1;
        this.state.turn = turn === 1 ? 2 : 1;
        this.render();
      });
    });
  }

  _mountTugCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let dispPos = this.state.tug.pos;
    let t = 0;

    const draw = () => {
      if (this.destroyed) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 40) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = rect.width, h = 210;
        if (canvas.width !== Math.round(w * dpr)) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        t += 0.05;
        dispPos += (this.state.tug.pos - dispPos) * 0.14;

        // 3D perspective floor grid
        const cy = h * 0.68;
        ctx.fillStyle = 'rgba(10, 18, 36, 0.9)';
        ctx.fillRect(0, 0, w, h);

        // Team 1 Left Zone & Team 2 Right Zone
        ctx.fillStyle = 'rgba(34, 211, 238, 0.16)';
        ctx.fillRect(0, cy - 35, w * 0.16, 70);
        ctx.fillStyle = 'rgba(244, 114, 182, 0.16)';
        ctx.fillRect(w * 0.84, cy - 35, w * 0.16, 70);

        // Track rail
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(w * 0.08, cy + 20);
        ctx.lineTo(w * 0.92, cy + 20);
        ctx.stroke();

        // Center divider
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.55)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(w * 0.5, 24);
        ctx.lineTo(w * 0.5, h - 18);
        ctx.stroke();
        ctx.setLineDash([]);

        // Cart coordinates
        const cartX = w * 0.5 + (dispPos / 100) * (w * 0.33);
        const bounce = Math.sin(t * 2.5) * 1.5;

        // Rope left & right
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(w * 0.07, cy - 8 + Math.sin(t * 3) * 2);
        ctx.lineTo(cartX - 36, cy - 8 + bounce);
        ctx.moveTo(cartX + 36, cy - 8 + bounce);
        ctx.lineTo(w * 0.93, cy - 8 + Math.cos(t * 3) * 2);
        ctx.stroke();

        // Draw Team pullers (stylized 3D energy bots)
        const drawBot = (bx, color, dir) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(bx, cy - 32, 11, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(bx, cy - 20);
          ctx.lineTo(bx + dir * 8, cy + 6);
          ctx.lineTo(bx + dir * 2, cy + 20);
          ctx.stroke();
        };
        drawBot(w * 0.09, '#22d3ee', 1);
        drawBot(w * 0.14, '#38bdf8', 1);
        drawBot(w * 0.91, '#f472b6', -1);
        drawBot(w * 0.86, '#c084fc', -1);

        // 3D Extruded Cart
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(cartX - 38, cy - 34 + bounce, 76, 38, 10);
        ctx.fill();
        ctx.stroke();

        // Glowing core inside cart
        const grd = ctx.createRadialGradient(cartX, cy - 15 + bounce, 2, cartX, cy - 15 + bounce, 24);
        grd.addColorStop(0, '#ffffff');
        grd.addColorStop(0.5, dispPos < 0 ? '#22d3ee' : '#f472b6');
        grd.addColorStop(1, 'transparent');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(cartX, cy - 15 + bounce, 22, 0, Math.PI * 2);
        ctx.fill();

        // Wheels
        [-22, 22].forEach((ox) => {
          ctx.fillStyle = '#e2e8f0';
          ctx.beginPath();
          ctx.arc(cartX + ox, cy + 12, 9, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(cartX + ox, cy + 12, 3.5, 0, Math.PI * 2);
          ctx.fill();
        });

        // Labels
        ctx.fillStyle = '#22d3ee';
        ctx.font = '700 12px Inter, sans-serif';
        ctx.fillText('1-JAMOA MARRASI', 14, 24);
        ctx.fillStyle = '#f472b6';
        ctx.textAlign = 'right';
        ctx.fillText('2-JAMOA MARRASI', w - 14, 24);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(`Siljish: ${Math.round(dispPos)}%`, w * 0.5, 24);
        ctx.textAlign = 'left';
      }
      this.rafs.push(requestAnimationFrame(draw));
    };
    this.rafs.push(requestAnimationFrame(draw));
  }

  // =========================================================================
  // GAME 2: 3D LAB SNAYPERI (Parametric Target Challenge)
  // =========================================================================
  _renderSniperGame(stage) {
    const sn = this.state.sniper;
    const calc = this.topic.theory?.calculator;
    const inputs = calc?.inputs || [];
    const turn = this.state.turn;

    const previewOut = calc?.compute ? calc.compute(sn.curInputs) : { value: 0, unit: sn.unit };

    stage.innerHTML = `
      <div class="tg-stage-head">
        <div>
          <span class="tg-tag">02 · Parametrik Snayper · ${sn.round}-raund</span>
          <h3>3D Nishon Challenge: ${esc(calc?.title || 'Parametrlarni moslash')}</h3>
        </div>
        <button type="button" class="btn-3d btn-3d-sm" id="sn-new-target">🎯 Yangi nishon</button>
      </div>

      <div class="tg-sniper-target-bar">
        <div class="tg-target-box">
          <span>MAQSAD QIYMAT (NISHON):</span>
          <strong>${esc(sn.targetVal)} ${esc(sn.unit)}</strong>
        </div>
        <div class="tg-target-box cur">
          <span>SIZNING SOZLAMANGIZ:</span>
          <strong id="sn-live-val">${esc(previewOut?.value ?? 0)} ${esc(sn.unit)}</strong>
        </div>
        <div class="tg-target-turn team-${turn}">
          O‘q uzish navbati: <strong>${turn === 1 ? esc(this.state.team1.name) : esc(this.state.team2.name)}</strong>
        </div>
      </div>

      <div class="tg-canvas-wrap">
        <canvas id="sniper-canvas" class="tg-canvas"></canvas>
      </div>

      <div class="tg-sniper-controls">
        ${inputs.map((inp) => `
          <label class="tg-slider-row">
            <span>${esc(inp.label)} (<b>${esc(inp.symbol)}</b>): <strong id="sn-lbl-${esc(inp.key)}">${sn.curInputs[inp.key]}</strong> ${esc(inp.unit)}</span>
            <input type="range" min="${inp.min}" max="${inp.max}" step="${inp.step}" value="${sn.curInputs[inp.key]}" data-sn-key="${esc(inp.key)}" />
          </label>
        `).join('')}
      </div>

      <div class="tg-sniper-fire-row">
        <button type="button" class="btn-3d btn-3d-primary" id="sn-fire-btn">🚀 PARAMETRLAR BILAN OTISH (${turn === 1 ? '1-Jamoa' : '2-Jamoa'})</button>
        ${sn.lastShot ? `<div class="tg-feedback">${esc(sn.lastShot)}</div>` : ''}
      </div>
    `;

    this._mountSniperCanvas(stage.querySelector('#sniper-canvas'));

    stage.querySelectorAll('[data-sn-key]').forEach((sl) => {
      sl.addEventListener('input', (e) => {
        const k = e.target.getAttribute('data-sn-key');
        sn.curInputs[k] = Number(e.target.value);
        const lbl = stage.querySelector(`#sn-lbl-${CSS.escape(k)}`);
        if (lbl) lbl.textContent = String(sn.curInputs[k]);
        const out = calc?.compute ? calc.compute(sn.curInputs) : { value: 0 };
        const liveEl = stage.querySelector('#sn-live-val');
        if (liveEl) liveEl.textContent = `${out?.value ?? 0} ${sn.unit}`;
      });
    });

    stage.querySelector('#sn-new-target')?.addEventListener('click', () => {
      this._initSniperRound(false);
      this.render();
    });

    stage.querySelector('#sn-fire-btn')?.addEventListener('click', () => {
      const out = calc?.compute ? calc.compute(sn.curInputs) : { value: 0 };
      const val = parseNumericVal(out?.value);
      const denom = Math.max(Math.abs(sn.targetVal), 1e-6);
      const errPct = Math.min(100, Math.abs(val - sn.targetVal) / denom * 100);
      let pts = 0;
      if (errPct <= 5) pts = 30;
      else if (errPct <= 15) pts = 20;
      else if (errPct <= 30) pts = 10;

      if (pts > 0) this._award(turn, pts);
      else this._penalize(turn);

      sn.lastShot = `${turn === 1 ? this.state.team1.name : this.state.team2.name} natijasi: ${val} ${sn.unit} (xatolik ${errPct.toFixed(1)}%) → +${pts} ball!`;
      sn.shotCount += 1;
      this.state.turn = turn === 1 ? 2 : 1;
      if (sn.shotCount % 2 === 0) {
        const msg = sn.lastShot;
        this._initSniperRound(false);
        this.state.sniper.lastShot = `${msg} · Yangi nishon yaratildi!`;
      }
      this.render();
    });
  }

  _mountSniperCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let t = 0;

    const draw = () => {
      if (this.destroyed) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 40) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = rect.width, h = 190;
        if (canvas.width !== Math.round(w * dpr)) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        t += 0.04;

        ctx.fillStyle = 'rgba(7, 13, 28, 0.94)';
        ctx.fillRect(0, 0, w, h);

        const sn = this.state.sniper;
        const calc = this.topic.theory?.calculator;
        const curVal = parseNumericVal(calc?.compute?.(sn.curInputs)?.value);
        const ratio = sn.targetVal ? (curVal - sn.targetVal) / Math.max(Math.abs(sn.targetVal), 1e-6) : 0;
        const clamped = Math.max(-1, Math.min(1, ratio));

        // Glowing 3D target rings on right
        const tx = w * 0.78, ty = h * 0.5;
        [54, 38, 22, 9].forEach((r, idx) => {
          ctx.beginPath();
          ctx.arc(tx, ty, r + Math.sin(t + idx) * 1.2, 0, Math.PI * 2);
          ctx.strokeStyle = idx === 3 ? '#facc15' : idx % 2 === 0 ? '#22d3ee' : '#f472b6';
          ctx.lineWidth = idx === 3 ? 3 : 1.8;
          ctx.stroke();
        });

        // Aim curve from emitter on left toward target offset
        const sx = w * 0.14, sy = h * 0.52;
        const aimY = ty + clamped * 68;
        const grad = ctx.createLinearGradient(sx, sy, tx, aimY);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(1, Math.abs(clamped) < 0.08 ? '#34d399' : '#f472b6');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(w * 0.45, Math.min(sy, aimY) - 34, tx, aimY);
        ctx.stroke();

        // Emitter canon + aim dot
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(sx, sy, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = Math.abs(clamped) < 0.08 ? '#34d399' : '#facc15';
        ctx.beginPath();
        ctx.arc(tx, aimY, 6.5, 0, Math.PI * 2);
        ctx.fill();
      }
      this.rafs.push(requestAnimationFrame(draw));
    };
    this.rafs.push(requestAnimationFrame(draw));
  }

  // =========================================================================
  // GAME 3: IKKI JAMOA TEZKOR BLITS-ARENASI (Split-Screen Duel)
  // =========================================================================
  _renderBlitzGame(stage) {
    const bz = this.state.blitz;
    const q1 = this._getQ(bz.qIdx1);
    const q2 = this._getQ(bz.qIdx2);
    const letters = ['A', 'B', 'C', 'D'];
    const p2Keys = ['1', '2', '3', '4'];
    const p1Keys = ['A', 'S', 'D', 'F'];

    stage.innerHTML = `
      <div class="tg-stage-head">
        <div>
          <span class="tg-tag">03 · Bir Vaqtda Tezkor Blits Duel</span>
          <h3>Split-Screen Reaksiya Arenasi (${bz.timeLeft}s)</h3>
        </div>
        <div class="tg-blitz-ctrl">
          ${!bz.running ? `<button type="button" class="btn-3d btn-3d-primary" id="bz-start">${bz.finished ? 'Qayta boshlash' : '▶ Boshlash (45s)'}</button>` : `<span class="tg-timer-pill" id="bz-timer">⏱ ${bz.timeLeft}s</span>`}
        </div>
      </div>

      ${bz.finished ? `
        <div class="tg-victory-banner">
          <h4>🏁 Blits Tugadi! 1-Jamoa: ${bz.p1Correct} to‘g‘ri · 2-Jamoa: ${bz.p2Correct} to‘g‘ri</h4>
          <p>${bz.p1Correct === bz.p2Correct ? 'Durang natija!' : bz.p1Correct > bz.p2Correct ? `${esc(this.state.team1.name)} tezkor blitsda g‘olib!` : `${esc(this.state.team2.name)} tezkor blitsda g‘olib!`}</p>
        </div>
      ` : ''}

      <div class="tg-blitz-grid">
        <div class="tg-blitz-pane t1">
          <div class="tg-pane-top">
            <strong>${esc(this.state.team1.name)}</strong>
            <span>To‘g‘ri: ${bz.p1Correct} ${bz.flash1 ? `· ${esc(bz.flash1)}` : ''}</span>
          </div>
          <div class="tg-q-prompt sm">${this.fmtMath(q1.q)}</div>
          <div class="tg-v-options">
            ${q1.options.map((opt, idx) => `
              <button type="button" class="opt-btn opt-3d" data-bz-t="1" data-bz-o="${idx}" ${!bz.running ? 'disabled' : ''}>
                <span class="opt-letter">${letters[idx]} <small>[${p1Keys[idx]}]</small></span>
                <span class="opt-text">${this.fmtOpt(opt)}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="tg-blitz-pane t2">
          <div class="tg-pane-top">
            <strong>${esc(this.state.team2.name)}</strong>
            <span>To‘g‘ri: ${bz.p2Correct} ${bz.flash2 ? `· ${esc(bz.flash2)}` : ''}</span>
          </div>
          <div class="tg-q-prompt sm">${this.fmtMath(q2.q)}</div>
          <div class="tg-v-options">
            ${q2.options.map((opt, idx) => `
              <button type="button" class="opt-btn opt-3d" data-bz-t="2" data-bz-o="${idx}" ${!bz.running ? 'disabled' : ''}>
                <span class="opt-letter">${letters[idx]} <small>[${p2Keys[idx]}]</small></span>
                <span class="opt-text">${this.fmtOpt(opt)}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const answerBlitz = (team, optIdx) => {
      if (!bz.running) return;
      const curQ = team === 1 ? this._getQ(bz.qIdx1) : this._getQ(bz.qIdx2);
      if (optIdx === curQ.answer) {
        this._award(team, 10);
        if (team === 1) { bz.p1Correct += 1; bz.flash1 = '+10'; }
        else { bz.p2Correct += 1; bz.flash2 = '+10'; }
      } else {
        this._penalize(team);
        if (team === 1) bz.flash1 = 'Xato';
        else bz.flash2 = 'Xato';
      }
      if (team === 1) bz.qIdx1 += 1;
      else bz.qIdx2 += 1;
      this.render();
    };

    stage.querySelector('#bz-start')?.addEventListener('click', () => {
      this.state.blitz = {
        running: true, timeLeft: 45,
        qIdx1: 0, qIdx2: 7, p1Correct: 0, p2Correct: 0,
        flash1: '', flash2: '', finished: false,
      };
      this.render();
    });

    stage.querySelectorAll('[data-bz-t]').forEach((btn) => {
      btn.addEventListener('click', () => {
        answerBlitz(Number(btn.getAttribute('data-bz-t')), Number(btn.getAttribute('data-bz-o')));
      });
    });

    if (bz.running) {
      const iv = setInterval(() => {
        if (this.destroyed || !this.state.blitz.running) return;
        this.state.blitz.timeLeft -= 1;
        const tmEl = stage.querySelector('#bz-timer');
        if (tmEl) tmEl.textContent = `⏱ ${this.state.blitz.timeLeft}s`;
        if (this.state.blitz.timeLeft <= 0) {
          this.state.blitz.running = false;
          this.state.blitz.finished = true;
          this.render();
        }
      }, 1000);
      this.timers.push(iv);

      this.keyHandler = (e) => {
        if (e.target.tagName === 'INPUT') return;
        const k = e.key.toLowerCase();
        const p1Map = { a: 0, s: 1, d: 2, f: 3 };
        const p2Map = { '1': 0, '2': 1, '3': 2, '4': 3 };
        if (k in p1Map) answerBlitz(1, p1Map[k]);
        else if (k in p2Map) answerBlitz(2, p2Map[k]);
      };
      window.addEventListener('keydown', this.keyHandler);
    }
  }

  // =========================================================================
  // GAME 4: FORMULA VA QONUN KONSTRUKTORI (3D Reactor Assembly)
  // =========================================================================
  _renderBuilderGame(stage) {
    const bd = this.state.builder;
    const progressPct = bd.total ? Math.round((bd.matchedCount / bd.total) * 100) : 100;

    stage.innerHTML = `
      <div class="tg-stage-head">
        <div>
          <span class="tg-tag">04 · 3D Reaktor Juftlik Konstruktori</span>
          <h3>Formula va Qonunlarni Moslashtirish (${bd.matchedCount}/${bd.total})</h3>
        </div>
        <button type="button" class="btn-3d btn-3d-sm" id="bd-reset">Qayta aralashtirish</button>
      </div>

      <div class="tg-reactor-bar">
        <div class="tg-turn-pill team-${bd.teamTurn}">Navbat: ${bd.teamTurn === 1 ? esc(this.state.team1.name) : esc(this.state.team2.name)}</div>
        <div class="tg-reactor-meter">
          <div class="tg-reactor-fill" style="width:${progressPct}%"></div>
        </div>
        <span>Reaktor quvvati: <strong>${progressPct}%</strong></span>
      </div>

      <div class="tg-feedback">${esc(bd.message)}</div>

      <div class="tg-builder-cols">
        <div class="tg-b-col">
          <h4>1. Formula / Tushuncha</h4>
          ${bd.leftCards.map((c) => `
            <button type="button" class="btn-3d tg-match-card ${c.matched ? 'matched' : ''} ${bd.selLeft === c.id ? 'selected' : ''}" data-bd-left="${esc(c.id)}" ${c.matched ? 'disabled' : ''}>
              ${c.isFormula ? this.fmtMath(c.text) : esc(c.text)}
            </button>
          `).join('')}
        </div>
        <div class="tg-b-col">
          <h4>2. Izoh / Nomi</h4>
          ${bd.rightCards.map((c) => `
            <button type="button" class="btn-3d tg-match-card ${c.matched ? 'matched' : ''}" data-bd-right="${esc(c.id)}" ${c.matched ? 'disabled' : ''}>
              ${this.fmtOpt(c.text)}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stage.querySelector('#bd-reset')?.addEventListener('click', () => {
      this._initBuilder();
      this.render();
    });

    stage.querySelectorAll('[data-bd-left]').forEach((btn) => {
      btn.addEventListener('click', () => {
        bd.selLeft = btn.getAttribute('data-bd-left');
        this.render();
      });
    });

    stage.querySelectorAll('[data-bd-right]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!bd.selLeft) {
          bd.message = 'Avval chap ustundan formula yoki qonunni tanlang!';
          this.render();
          return;
        }
        const rid = btn.getAttribute('data-bd-right');
        if (rid === bd.selLeft) {
          bd.leftCards.forEach((c) => { if (c.id === rid) c.matched = true; });
          bd.rightCards.forEach((c) => { if (c.id === rid) c.matched = true; });
          bd.matchedCount += 1;
          this._award(bd.teamTurn, 20);
          bd.message = `Zo‘r! ${bd.teamTurn === 1 ? this.state.team1.name : this.state.team2.name} +20 ball bilan reaktor blokini uladi!`;
        } else {
          this._penalize(bd.teamTurn);
          bd.message = 'Mos kelmadi! Navbat raqib jamoaga o‘tdi.';
        }
        bd.selLeft = null;
        bd.teamTurn = bd.teamTurn === 1 ? 2 : 1;
        this.render();
      });
    });
  }

  // =========================================================================
  // GAME 5: BOSS-REYD (3-Wave Final Championship)
  // =========================================================================
  _renderBossGame(stage) {
    const bs = this.state.boss;
    const q = this._getQ(bs.qIdx);
    const calc = this.topic.theory?.calculator;
    const letters = ['A', 'B', 'C', 'D'];

    stage.innerHTML = `
      <div class="tg-stage-head">
        <div>
          <span class="tg-tag">05 · Boss-Reyd Yakuniy Sinov (${bs.wave}-to‘lqin / 3)</span>
          <h3>Kvant Qamalini Yechish Chempionati</h3>
        </div>
        <button type="button" class="btn-3d btn-3d-sm" id="bs-reset">Bossni tiklash</button>
      </div>

      <div class="tg-boss-hud">
        <div class="tg-boss-core">👾 Kvant Boss HP: <strong>${bs.hp}%</strong></div>
        <div class="tg-boss-bar"><div class="tg-boss-fill" style="width:${bs.hp}%"></div></div>
        <div class="tg-turn-pill team-${bs.teamTurn}">Hujumchi: ${bs.teamTurn === 1 ? esc(this.state.team1.name) : esc(this.state.team2.name)}</div>
      </div>

      <div class="tg-feedback">${esc(bs.log)}</div>

      ${bs.victory ? `
        <div class="tg-victory-banner">
          <h4>🏆 TABRIKLAYMIZ! Kvant Boss yengildi!</h4>
          <p>Yakuniy hisob: <b>${esc(this.state.team1.name)}</b> (${this.state.team1.score}) — <b>${esc(this.state.team2.name)}</b> (${this.state.team2.score}).</p>
          <button type="button" class="btn-3d btn-3d-primary" id="bs-again">Yangi Reyd Boshlash</button>
        </div>
      ` : bs.wave === 2 ? `
        <div class="tg-duel-q-box">
          <h4>2-To‘lqin · Formula Hisob-kitob Zarbasi</h4>
          <p>Quyidagi parametrlar berilgan: ${calc.inputs.map((i) => `<b>${esc(i.symbol)} = ${bs.calcInputs[i.key]} ${esc(i.unit)}</b>`).join(', ')}</p>
          <p>Formula: <code>${esc(calc.formulaDisplay)}</code> — natijani toping (${esc(bs.calcUnit)}):</p>
          <div class="tg-boss-calc-row">
            <input type="number" step="any" id="bs-calc-inp" class="tg-num-input" placeholder="Qiymatni kiriting..." />
            <button type="button" class="btn-3d btn-3d-primary" id="bs-calc-submit">⚡ Zarba berish (-40% HP)</button>
          </div>
        </div>
      ` : `
        <div class="tg-duel-q-box">
          <h4>${bs.wave}-To‘lqin · Kvant Nazariy Zarbasi (-35% HP)</h4>
          <div class="tg-q-prompt">${this.fmtMath(q.q)}</div>
          <div class="tg-v-options">
            ${q.options.map((opt, idx) => `
              <button type="button" class="opt-btn opt-3d" data-bs-opt="${idx}">
                <span class="opt-letter">${letters[idx]}</span>
                <span class="opt-text">${this.fmtOpt(opt)}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `}
    `;

    stage.querySelector('#bs-reset')?.addEventListener('click', () => {
      this._initBoss();
      this.render();
    });
    stage.querySelector('#bs-again')?.addEventListener('click', () => {
      this._initBoss();
      this.render();
    });

    stage.querySelectorAll('[data-bs-opt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosen = Number(btn.getAttribute('data-bs-opt'));
        if (chosen === q.answer) {
          bs.hp = Math.max(0, bs.hp - 35);
          this._award(bs.teamTurn, 25);
          bs.log = `${bs.teamTurn === 1 ? this.state.team1.name : this.state.team2.name} aniq zarba berdi! Boss HP −35%.`;
          if (bs.hp <= 0) { bs.victory = true; this._award(bs.teamTurn, 40); }
          else bs.wave = Math.min(3, bs.wave + 1);
        } else {
          this._penalize(bs.teamTurn);
          bs.log = 'Zarba qalqondan qaytdi! Navbat ikkinchi jamoaga o‘tdi.';
        }
        bs.qIdx += 1;
        bs.teamTurn = bs.teamTurn === 1 ? 2 : 1;
        this.render();
      });
    });

    stage.querySelector('#bs-calc-submit')?.addEventListener('click', () => {
      const inpVal = parseNumericVal(stage.querySelector('#bs-calc-inp')?.value);
      const tol = Math.max(Math.abs(bs.calcAnswer) * 0.08, 0.15);
      if (Number.isFinite(inpVal) && Math.abs(inpVal - bs.calcAnswer) <= tol) {
        bs.hp = Math.max(0, bs.hp - 40);
        this._award(bs.teamTurn, 35);
        bs.log = `MUKAMMAL HISOB! To‘g‘ri javob ${bs.calcAnswer} ${bs.calcUnit}. Boss HP −40%!`;
        bs.wave = 3;
      } else {
        this._penalize(bs.teamTurn);
        bs.log = `Hisob noaniq (kutilgan qiymat ~ ${bs.calcAnswer} ${bs.calcUnit}). 3-to‘lqinga o‘tamiz!`;
        bs.wave = 3;
      }
      bs.teamTurn = bs.teamTurn === 1 ? 2 : 1;
      this.render();
    });
  }
}
