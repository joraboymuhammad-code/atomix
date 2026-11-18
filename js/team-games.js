// Atomix 2-Team Simultaneous Race Games Engine (v5.0)
// Both teams receive DIFFERENT questions of EQUAL DIFFICULTY simultaneously;
// whichever team solves first wins the round and AUTO-ADVANCES both teams to the next round!

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shuffleArr(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleQuestionOptions(q) {
  const indexed = q.options.map((text, idx) => ({ text, isCorrect: idx === q.answer }));
  const mixed = shuffleArr(indexed);
  return {
    ...q,
    options: mixed.map((m) => m.text),
    answer: mixed.findIndex((m) => m.isCorrect),
  };
}

function snapToStep(val, min, max, step) {
  const s = step > 0 ? step : 1;
  const clamped = Math.min(max, Math.max(min, val));
  return Number((min + Math.round((clamped - min) / s) * s).toFixed(4));
}

function classifyDifficulty(q, originalIdx) {
  const txt = String(q.q || '');
  const hasNums = /\d/.test(txt) && /(hisoblang|toping|necha|qancha|teng\?|g\/mol|mol\/L|kg|m\/s|V|A|J|Hz|°C|pH)/i.test(txt);
  if (originalIdx >= 14 || hasNums) {
    return { tier: 3, label: '★★★ Hisob-kitob & Amaliy', color: '#f472b6' };
  }
  if (originalIdx >= 7 || txt.includes('$') || txt.length > 95) {
    return { tier: 2, label: '★★☆ Tahliliy & Qonuniyat', color: '#facc15' };
  }
  return { tier: 1, label: '★☆☆ Bazaviy Tushuncha', color: '#34d399' };
}

function buildCalculatorQuestionPair(topic, tierLabel) {
  const calc = topic.theory?.calculator;
  if (!calc || !calc.inputs?.length || typeof calc.compute !== 'function') return null;

  const makeOne = (seedOffset) => {
    const vals = {};
    calc.inputs.forEach((inp, idx) => {
      const min = Number(inp.min ?? 1);
      const max = Number(inp.max ?? 10);
      const step = Number(inp.step ?? 1);
      const steps = Math.max(2, Math.floor((max - min) / step));
      const pick = Math.floor(((Math.random() + idx * 0.27 + seedOffset) % 1) * (steps + 1));
      vals[inp.key] = snapToStep(min + pick * step, min, max, step);
    });
    const out = calc.compute(vals);
    const valStr = `${out.value}${out.unit ? ' ' + out.unit : ''}`.trim();
    const numMatch = String(out.value).replace(',', '.').match(/-?\d+(\.\d+)?/);
    const num = numMatch ? Number(numMatch[0]) : NaN;
    if (!Number.isFinite(num) || num === 0) return null;

    const unitSuffix = out.unit ? ` ${out.unit}` : '';
    const d1 = `${(num * 1.45).toFixed(num >= 10 ? 1 : 2)}${unitSuffix}`;
    const d2 = `${(num * 0.62).toFixed(num >= 10 ? 1 : 2)}${unitSuffix}`;
    const d3 = `${(num * 2.15).toFixed(num >= 10 ? 1 : 2)}${unitSuffix}`;
    const opts = new Set([valStr, d1, d2, d3]);
    if (opts.size < 4) return null;

    const givenText = calc.inputs.map((i) => `${i.symbol} = ${vals[i.key]} ${i.unit || ''}`.trim()).join(', ');
    return shuffleQuestionOptions({
      q: `${calc.title}: Agar ${givenText} bo‘lsa (${calc.formulaDisplay}), natija nimaga teng?`,
      options: Array.from(opts),
      answer: 0,
      tier: 3,
      tierLabel: tierLabel || '★★★ Formula Hisob-kitobi',
      tierColor: '#f472b6',
    });
  };

  const q1 = makeOne(0.11);
  const q2 = makeOne(0.67);
  if (q1 && q2 && q1.q !== q2.q) return [q1, q2];
  return null;
}

const GAME_CATALOG = [
  { id: 'tug', num: '01', name: '3D Arqon Tortishuv', tag: 'Birinchi topgan tortadi', icon: '⚡' },
  { id: 'sniper', num: '02', name: '3D Kvant Snayper', tag: 'Lazer Zarba Dueli', icon: '🎯' },
  { id: 'race', num: '03', name: 'Tezkor Kvant Poygasi', tag: '3D Minora Ko‘tarish', icon: '🚀' },
  { id: 'reactor', num: '04', name: '3D Reaktor Halqasi', tag: 'Sinteza Yadrosi', icon: '🧬' },
  { id: 'boss', num: '05', name: 'Boss-Reyd Qamali', tag: 'Birgalikda Hujum', icon: '🏆' },
];

export class AtomixTeamGames {
  constructor(containerEl, topic, formatMathFn, formatOptionFn) {
    this.root = containerEl;
    this.topic = topic;
    this.fmtMath = typeof formatMathFn === 'function' ? formatMathFn : (s) => esc(s);
    this.fmtOpt = typeof formatOptionFn === 'function' ? formatOptionFn : this.fmtMath;

    this.destroyed = false;
    this.rafs = [];
    this.timeouts = [];
    this.intervals = [];
    this.keyHandler = null;
    this.audioCtx = null;

    this.state = {
      activeGame: 'tug',
      soundOn: true,
      team1: { name: '1-Jamoa (Kvant)', score: 0, wins: 0, streak: 0, lockUntil: 0, wrongMsg: '' },
      team2: { name: '2-Jamoa (Foton)', score: 0, wins: 0, streak: 0, lockUntil: 0, wrongMsg: '' },
      rounds: [],
      roundIdx: 0,
      roundLocked: false,
      roundWinner: 0,
      bannerMsg: '',
      // Per-game 3D progress states
      tugPos: 0, // -100 (Team 1 win) .. +100 (Team 2 win)
      sniperHits1: 0,
      sniperHits2: 0,
      lastShotTeam: 0,
      raceProg1: 0, // 0..100
      raceProg2: 0, // 0..100
      reactor1: 0, // 0..6 segments
      reactor2: 0, // 0..6 segments
      bossHp: 100, // 100..0
      matchWinner: 0,
    };

    this._generateNewMatch();
    this.render();
  }

  destroy() {
    this.destroyed = true;
    this._clearRuntime();
  }

  _clearRuntime() {
    this.rafs.forEach((id) => cancelAnimationFrame(id));
    this.rafs = [];
    this.timeouts.forEach((id) => clearTimeout(id));
    this.timeouts = [];
    this.intervals.forEach((id) => clearInterval(id));
    this.intervals = [];
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
  }

  _playTone(freq = 540, dur = 0.13, type = 'triangle') {
    if (!this.state.soundOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!this.audioCtx) this.audioCtx = new AC();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.065, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + dur);
    } catch {}
  }

  // Pair strictly DIFFERENT questions of IDENTICAL difficulty tier for Team 1 and Team 2
  _generateNewMatch() {
    const tagged = (this.topic.questions || []).map((q, idx) => {
      const meta = classifyDifficulty(q, idx);
      return { ...shuffleQuestionOptions(q), tier: meta.tier, tierLabel: meta.label, tierColor: meta.color };
    });

    const tiers = { 1: shuffleArr(tagged.filter((q) => q.tier === 1)), 2: shuffleArr(tagged.filter((q) => q.tier === 2)), 3: shuffleArr(tagged.filter((q) => q.tier === 3)) };
    const pairs = [];

    [1, 2, 3].forEach((tierNum) => {
      const list = tiers[tierNum];
      for (let i = 0; i + 1 < list.length; i += 2) {
        if (list[i].q !== list[i + 1].q) {
          pairs.push({ q1: list[i], q2: list[i + 1], tier: tierNum, tierLabel: list[i].tierLabel, tierColor: list[i].tierColor });
        }
      }
    });

    // Inject randomized equal-difficulty formula calculator duels
    for (let k = 0; k < 3; k++) {
      const cp = buildCalculatorQuestionPair(this.topic);
      if (cp) pairs.push({ q1: cp[0], q2: cp[1], tier: 3, tierLabel: cp[0].tierLabel, tierColor: '#f472b6' });
    }

    // Fallback check if topic has unusual tier count
    if (pairs.length < 8) {
      const rest = shuffleArr(tagged);
      for (let i = 0; i + 1 < rest.length; i += 2) {
        if (rest[i].q !== rest[i + 1].q) {
          pairs.push({ q1: rest[i], q2: rest[i + 1], tier: rest[i].tier, tierLabel: rest[i].tierLabel, tierColor: rest[i].tierColor });
        }
      }
    }

    this.state.rounds = shuffleArr(pairs).slice(0, 10);
    this.state.roundIdx = 0;
    this.state.roundLocked = false;
    this.state.roundWinner = 0;
    this.state.bannerMsg = '';
    this.state.team1.lockUntil = 0;
    this.state.team2.lockUntil = 0;
    this.state.team1.wrongMsg = '';
    this.state.team2.wrongMsg = '';
    this.state.tugPos = 0;
    this.state.sniperHits1 = 0;
    this.state.sniperHits2 = 0;
    this.state.lastShotTeam = 0;
    this.state.raceProg1 = 0;
    this.state.raceProg2 = 0;
    this.state.reactor1 = 0;
    this.state.reactor2 = 0;
    this.state.bossHp = 100;
    this.state.matchWinner = 0;
  }

  _currentRound() {
    const r = this.state.rounds;
    if (!r.length) return null;
    return r[this.state.roundIdx % r.length];
  }

  _handleAnswer(teamNum, optIdx) {
    const s = this.state;
    if (s.matchWinner || s.roundLocked) return;
    const teamObj = teamNum === 1 ? s.team1 : s.team2;
    const otherObj = teamNum === 1 ? s.team2 : s.team1;
    if (Date.now() < teamObj.lockUntil) return;

    const round = this._currentRound();
    if (!round) return;
    const q = teamNum === 1 ? round.q1 : round.q2;

    if (optIdx === q.answer) {
      // FIRST SOLVER WINS ROUND & TRIGGERS AUTO-ADVANCE!
      s.roundLocked = true;
      s.roundWinner = teamNum;
      teamObj.streak += 1;
      teamObj.wins += 1;
      const pts = 20 + (round.tier - 1) * 5 + (teamObj.streak >= 2 ? 5 : 0);
      teamObj.score += pts;
      teamObj.wrongMsg = '';
      otherObj.wrongMsg = '';
      this._playTone(teamNum === 1 ? 660 : 780, 0.16, 'triangle');

      // Apply 3D visual progression for active game mode
      if (teamNum === 1) {
        s.tugPos = Math.max(-100, s.tugPos - 25);
        s.sniperHits1 += 1;
        s.lastShotTeam = 1;
        s.raceProg1 = Math.min(100, s.raceProg1 + 20);
        s.reactor1 = Math.min(6, s.reactor1 + 1);
      } else {
        s.tugPos = Math.min(100, s.tugPos + 25);
        s.sniperHits2 += 1;
        s.lastShotTeam = 2;
        s.raceProg2 = Math.min(100, s.raceProg2 + 20);
        s.reactor2 = Math.min(6, s.reactor2 + 1);
      }
      s.bossHp = Math.max(0, s.bossHp - 20);

      s.bannerMsg = `⚡ ${teamObj.name} BIRINCHI TOPDI (+${pts} ball)! Keyingi teng qiyinlikdagi savolga avtomatik o‘tilmoqda...`;

      // Check victory thresholds
      if (
        (s.activeGame === 'tug' && Math.abs(s.tugPos) >= 100) ||
        (s.activeGame === 'race' && (s.raceProg1 >= 100 || s.raceProg2 >= 100)) ||
        (s.activeGame === 'reactor' && (s.reactor1 >= 6 || s.reactor2 >= 6)) ||
        (s.activeGame === 'boss' && s.bossHp <= 0) ||
        s.roundIdx >= s.rounds.length - 1
      ) {
        s.matchWinner = s.team1.score >= s.team2.score ? (s.team1.score === s.team2.score ? teamNum : 1) : 2;
        this.render();
        return;
      }

      this.render();
      const tid = setTimeout(() => {
        if (this.destroyed) return;
        this._advanceNextRound();
      }, 750);
      this.timeouts.push(tid);
    } else {
      // Wrong choice: lock ONLY this team briefly for 1.6s so rival team can still steal
      teamObj.streak = 0;
      teamObj.lockUntil = Date.now() + 1600;
      teamObj.wrongMsg = '❌ Xato javob! 1.6s blok — raqib guruhda imkoniyat!';
      this._playTone(210, 0.18, 'sawtooth');

      const bothBlocked = Date.now() < s.team1.lockUntil && Date.now() < s.team2.lockUntil;
      if (bothBlocked) {
        s.roundLocked = true;
        s.bannerMsg = 'Har ikki jamoa adashdi — avtomatik keyingi savolga o‘tilmoqda...';
        this.render();
        const tid = setTimeout(() => {
          if (this.destroyed) return;
          if (s.roundIdx >= s.rounds.length - 1) {
            s.matchWinner = s.team1.score >= s.team2.score ? 1 : 2;
            this.render();
          } else {
            this._advanceNextRound();
          }
        }, 850);
        this.timeouts.push(tid);
      } else {
        this.render();
        const unlockTid = setTimeout(() => {
          if (this.destroyed || s.roundLocked) return;
          teamObj.wrongMsg = '';
          this.render();
        }, 1650);
        this.timeouts.push(unlockTid);
      }
    }
  }

  _advanceNextRound() {
    const s = this.state;
    s.roundIdx += 1;
    s.roundLocked = false;
    s.roundWinner = 0;
    s.bannerMsg = '';
    s.team1.lockUntil = 0;
    s.team2.lockUntil = 0;
    s.team1.wrongMsg = '';
    s.team2.wrongMsg = '';
    this.render();
  }

  render() {
    if (this.destroyed || !this.root) return;
    this._clearRuntime();

    const s = this.state;
    const round = this._currentRound();
    const isChem = this.topic.subject === 'chemistry';
    const letters = ['A', 'B', 'C', 'D'];
    const p1Keys = ['A', 'S', 'D', 'F'];
    const p2Keys = ['1', '2', '3', '4'];
    const locked1 = s.roundLocked || Date.now() < s.team1.lockUntil;
    const locked2 = s.roundLocked || Date.now() < s.team2.lockUntil;

    this.root.innerHTML = `
      <div class="team-games-arena">
        <!-- Scoreboard -->
        <div class="tg-scoreboard">
          <div class="tg-team-card t1 ${s.roundWinner === 1 ? 'is-turn' : ''}">
            <div class="tg-team-head">
              <span class="tg-team-badge">1-JAMOA · [A S D F]</span>
              <span class="tg-streak">${s.team1.streak >= 2 ? `🔥 ${s.team1.streak}x seriya` : `${s.team1.wins} raund yutdi`}</span>
            </div>
            <input class="tg-name-input" data-team-name="1" value="${esc(s.team1.name)}" aria-label="1-jamoa nomi" />
            <div class="tg-score-row">
              <span class="tg-score-val">${s.team1.score}</span>
              <span class="tg-score-unit">ball</span>
            </div>
          </div>

          <div class="tg-vs-center">
            <div class="tg-arena-kicker">${isChem ? 'Kimyo Tezkor Dueli' : 'Fizika Tezkor Dueli'} · ${esc(this.topic.code)}</div>
            <div class="tg-vs-pill">VS</div>
            <div class="tg-turn-label">Birinchi topgan guruh yutadi!</div>
            <div class="tg-meta-actions">
              <button type="button" class="btn-3d btn-3d-sm" id="tg-sound-btn">${s.soundOn ? '🔊 Ovoz' : '🔇 Jim'}</button>
              <button type="button" class="btn-3d btn-3d-sm" id="tg-new-match">↺ Yangi bellashuv</button>
            </div>
          </div>

          <div class="tg-team-card t2 ${s.roundWinner === 2 ? 'is-turn' : ''}">
            <div class="tg-team-head">
              <span class="tg-team-badge">2-JAMOA · [1 2 3 4]</span>
              <span class="tg-streak">${s.team2.streak >= 2 ? `⚡ ${s.team2.streak}x seriya` : `${s.team2.wins} raund yutdi`}</span>
            </div>
            <input class="tg-name-input" data-team-name="2" value="${esc(s.team2.name)}" aria-label="2-jamoa nomi" />
            <div class="tg-score-row">
              <span class="tg-score-val">${s.team2.score}</span>
              <span class="tg-score-unit">ball</span>
            </div>
          </div>
        </div>

        <!-- 5 Game Mode Selector Tabs -->
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

        <!-- Main Interactive 3D Stage & Simultaneous Equal-Difficulty Split Duel -->
        <div class="tg-stage book-folio">
          <div class="tg-stage-head">
            <div>
              <span class="tg-tag">${GAME_CATALOG.find((x) => x.id === s.activeGame)?.name} · Raund ${s.roundIdx + 1} / ${s.rounds.length}</span>
              <h3>Bir Vaqtda Ikki Guruh Poygasi — Ikkala Tomonga Bir Xil Murakkablikdagi Ikki Xil Savol!</h3>
            </div>
            ${round ? `<span class="tg-diff-pill" style="border-color:${round.tierColor};color:${round.tierColor}">${esc(round.tierLabel)}</span>` : ''}
          </div>

          <div class="tg-canvas-wrap">
            <canvas id="tg-arena-canvas" class="tg-canvas"></canvas>
          </div>

          ${s.bannerMsg ? `<div class="tg-race-banner">${esc(s.bannerMsg)}</div>` : ''}

          ${s.matchWinner ? `
            <div class="tg-victory-banner">
              <h4>🏆 G‘OLIB: ${s.matchWinner === 1 ? esc(s.team1.name) : esc(s.team2.name)}!</h4>
              <p>Yakuniy hisob: <b>${esc(s.team1.name)}</b> ${s.team1.score} ball (${s.team1.wins} raund) — <b>${esc(s.team2.name)}</b> ${s.team2.score} ball (${s.team2.wins} raund)</p>
              <button type="button" class="btn-3d btn-3d-primary btn-3d-lg" id="tg-replay-btn">🚀 Yangi Bellashuv Boshlash</button>
            </div>
          ` : round ? `
            <div class="tg-blitz-grid">
              <!-- TEAM 1 LEFT -->
              <div class="tg-blitz-pane t1 ${s.roundWinner === 1 ? 'won-flash' : ''}">
                <div class="tg-pane-top">
                  <strong>1-JAMOA SAVOLI (${esc(s.team1.name)})</strong>
                  <span class="tg-pane-status">${s.team1.wrongMsg ? esc(s.team1.wrongMsg) : 'Klaviaturada [A S D F] yoki bosing'}</span>
                </div>
                <div class="tg-q-prompt sm">${this.fmtMath(round.q1.q)}</div>
                <div class="tg-v-options">
                  ${round.q1.options.map((opt, idx) => `
                    <button type="button" class="opt-btn opt-3d" data-race-t="1" data-race-o="${idx}" ${locked1 ? 'disabled' : ''}>
                      <span class="opt-letter">${letters[idx]} <small>[${p1Keys[idx]}]</small></span>
                      <span>${this.fmtOpt(opt)}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- TEAM 2 RIGHT -->
              <div class="tg-blitz-pane t2 ${s.roundWinner === 2 ? 'won-flash' : ''}">
                <div class="tg-pane-top">
                  <strong>2-JAMOA SAVOLI (${esc(s.team2.name)})</strong>
                  <span class="tg-pane-status">${s.team2.wrongMsg ? esc(s.team2.wrongMsg) : 'Klaviaturada [1 2 3 4] yoki bosing'}</span>
                </div>
                <div class="tg-q-prompt sm">${this.fmtMath(round.q2.q)}</div>
                <div class="tg-v-options">
                  ${round.q2.options.map((opt, idx) => `
                    <button type="button" class="opt-btn opt-3d" data-race-t="2" data-race-o="${idx}" ${locked2 ? 'disabled' : ''}>
                      <span class="opt-letter">${letters[idx]} <small>[${p2Keys[idx]}]</small></span>
                      <span>${this.fmtOpt(opt)}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    this._bindEvents();
    this._mountArenaCanvas(this.root.querySelector('#tg-arena-canvas'));
  }

  _bindEvents() {
    this.root.querySelectorAll('[data-team-name]').forEach((inp) => {
      inp.addEventListener('input', (e) => {
        const tm = e.target.getAttribute('data-team-name');
        if (tm === '1') this.state.team1.name = e.target.value || '1-Jamoa';
        else this.state.team2.name = e.target.value || '2-Jamoa';
      });
    });

    this.root.querySelector('#tg-sound-btn')?.addEventListener('click', () => {
      this.state.soundOn = !this.state.soundOn;
      this.render();
    });

    const resetMatch = () => {
      this.state.team1.score = 0; this.state.team1.wins = 0; this.state.team1.streak = 0;
      this.state.team2.score = 0; this.state.team2.wins = 0; this.state.team2.streak = 0;
      this._generateNewMatch();
      this.render();
    };
    this.root.querySelector('#tg-new-match')?.addEventListener('click', resetMatch);
    this.root.querySelector('#tg-replay-btn')?.addEventListener('click', resetMatch);

    this.root.querySelectorAll('[data-game]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.state.activeGame = btn.getAttribute('data-game');
        this._generateNewMatch();
        this.render();
      });
    });

    this.root.querySelectorAll('[data-race-t]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this._handleAnswer(Number(btn.getAttribute('data-race-t')), Number(btn.getAttribute('data-race-o')));
      });
    });

    this.keyHandler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const k = e.key.toLowerCase();
      const p1Map = { a: 0, s: 1, d: 2, f: 3 };
      const p2Map = { '1': 0, '2': 1, '3': 2, '4': 3 };
      if (k in p1Map) {
        e.preventDefault();
        this._handleAnswer(1, p1Map[k]);
      } else if (k in p2Map) {
        e.preventDefault();
        this._handleAnswer(2, p2Map[k]);
      }
    };
    window.addEventListener('keydown', this.keyHandler);
  }

  _mountArenaCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let t = 0;
    let smoothTug = this.state.tugPos;

    const frame = () => {
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
        t += 0.04;
        smoothTug += (this.state.tugPos - smoothTug) * 0.12;

        ctx.fillStyle = '#050a18';
        ctx.fillRect(0, 0, w, h);

        // Perspective laboratory grid floor
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.lineWidth = 1;
        for (let i = -6; i <= 6; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.5 + i * (w * 0.08), h);
          ctx.lineTo(w * 0.5 + i * (w * 0.025), h * 0.25);
          ctx.stroke();
        }

        const g = this.state.activeGame;
        if (g === 'tug') {
          const cy = h * 0.65;
          const cx = w * 0.5 + (smoothTug / 100) * (w * 0.34);
          ctx.fillStyle = 'rgba(34,211,238,0.16)'; ctx.fillRect(0, 0, w * 0.14, h);
          ctx.fillStyle = 'rgba(244,114,182,0.16)'; ctx.fillRect(w * 0.86, 0, w * 0.14, h);
          ctx.strokeStyle = '#facc15'; ctx.lineWidth = 5;
          ctx.beginPath(); ctx.moveTo(w * 0.08, cy); ctx.lineTo(w * 0.92, cy); ctx.stroke();
          ctx.fillStyle = '#0f172a'; ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.roundRect(cx - 38, cy - 28, 76, 38, 10); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#fff'; ctx.font = '700 12px JetBrains Mono, monospace'; ctx.textAlign = 'center';
          ctx.fillText(`ARQON: ${Math.round(smoothTug)}%`, w * 0.5, 28);
        } else if (g === 'sniper') {
          const tx = w * 0.5, ty = h * 0.52;
          [56, 38, 20, 8].forEach((r, idx) => {
            ctx.beginPath(); ctx.arc(tx, ty, r + Math.sin(t + idx) * 1.5, 0, Math.PI * 2);
            ctx.strokeStyle = idx === 3 ? '#facc15' : idx % 2 === 0 ? '#22d3ee' : '#f472b6'; ctx.lineWidth = 2; ctx.stroke();
          });
          ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(w * 0.1, ty); ctx.lineTo(tx - 10, ty); ctx.stroke();
          ctx.strokeStyle = '#f472b6';
          ctx.beginPath(); ctx.moveTo(w * 0.9, ty); ctx.lineTo(tx + 10, ty); ctx.stroke();
          ctx.fillStyle = '#e2e8f0'; ctx.font = '700 13px JetBrains Mono, monospace'; ctx.textAlign = 'center';
          ctx.fillText(`Nishon zarbalari: 1-Jamoa (${this.state.sniperHits1}) vs 2-Jamoa (${this.state.sniperHits2})`, w * 0.5, 28);
        } else if (g === 'race') {
          const drawTrack = (y, prog, col, lbl) => {
            ctx.fillStyle = 'rgba(30,41,59,0.75)'; ctx.fillRect(60, y, w - 120, 22);
            ctx.fillStyle = col; ctx.fillRect(60, y, ((w - 120) * prog) / 100, 22);
            ctx.fillStyle = '#fff'; ctx.font = '700 12px Inter, sans-serif'; ctx.textAlign = 'left';
            ctx.fillText(`${lbl} (${prog}%)`, 60, y - 8);
          };
          drawTrack(62, this.state.raceProg1, '#22d3ee', this.state.team1.name);
          drawTrack(142, this.state.raceProg2, '#f472b6', this.state.team2.name);
        } else if (g === 'reactor') {
          const drawCore = (cx, segs, col, name) => {
            for (let i = 0; i < 6; i++) {
              ctx.beginPath(); ctx.arc(cx, h * 0.52, 50, (i * Math.PI) / 3, ((i + 0.8) * Math.PI) / 3);
              ctx.strokeStyle = i < segs ? col : 'rgba(148,163,184,0.22)'; ctx.lineWidth = 10; ctx.stroke();
            }
            ctx.fillStyle = '#fff'; ctx.font = '700 12px Inter, sans-serif'; ctx.textAlign = 'center';
            ctx.fillText(`${name}: ${segs}/6 blok`, cx, h - 18);
          };
          drawCore(w * 0.3, this.state.reactor1, '#22d3ee', this.state.team1.name);
          drawCore(w * 0.7, this.state.reactor2, '#f472b6', this.state.team2.name);
        } else {
          // Boss Raid
          const cx = w * 0.5, cy = h * 0.54;
          const gr = ctx.createRadialGradient(cx, cy, 4, cx, cy, 56);
          gr.addColorStop(0, '#f43f5e'); gr.addColorStop(0.6, '#7c3aed'); gr.addColorStop(1, 'transparent');
          ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(cx, cy, 56 + Math.sin(t * 2) * 4, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = 'rgba(30,41,59,0.9)'; ctx.fillRect(w * 0.25, 22, w * 0.5, 16);
          ctx.fillStyle = '#ef4444'; ctx.fillRect(w * 0.25, 22, (w * 0.5 * this.state.bossHp) / 100, 16);
          ctx.fillStyle = '#fff'; ctx.font = '700 12px JetBrains Mono, monospace'; ctx.textAlign = 'center';
          ctx.fillText(`KVANT BOSS HP: ${this.state.bossHp}%`, w * 0.5, 56);
        }
      }
      this.rafs.push(requestAnimationFrame(frame));
    };
    this.rafs.push(requestAnimationFrame(frame));
  }
}
