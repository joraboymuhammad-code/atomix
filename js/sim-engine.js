import { drawGrid, drawScope } from './sim-primitives.js';
import { renderMechThermoMode } from './sim-renderers-mech.js';
import { renderModernEmOptMode } from './sim-renderers-modern.js';

export class AtomixParametricSim {
  constructor(canvasEl, telemetryEl) {
    this.canvas = canvasEl;
    this.ctx = canvasEl ? canvasEl.getContext('2d') : null;
    this.telemetryEl = telemetryEl;
    this.topic = null;
    this.mode = '';
    this.params = {};
    this.playing = true;
    this.simTime = 0;
    this.lastFrame = 0;
    this.rafId = null;
    this.traceA = [];
    this.traceB = [];
    this.state = {};
    this.cssWidth = 640;
    this.cssHeight = 420;

    this._onFrame = this._frame.bind(this);
    this._setupResize();
  }

  _setupResize() {
    if (!this.canvas) return;
    const syncSize = () => {
      const rect = this.canvas.getBoundingClientRect();
      if (rect.width < 20 || rect.height < 20) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.cssWidth = rect.width;
      this.cssHeight = rect.height;
      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);
      if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
        this.canvas.width = targetW;
        this.canvas.height = targetH;
      }
      if (this.ctx) {
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    syncSize();
    if (typeof ResizeObserver !== 'undefined') {
      this._ro = new ResizeObserver(syncSize);
      this._ro.observe(this.canvas);
    }
    window.addEventListener('resize', syncSize);
    this._syncSize = syncSize;
  }

  setTopic(topic) {
    this.topic = topic;
    const spec = topic?.simulation?.parametric;
    this.mode = spec?.mode || 'intro_phenomena';
    this.params = {};
    if (Array.isArray(spec?.controls)) {
      for (const c of spec.controls) {
        this.params[c.key] = c.value;
      }
    }
    this.reset();
    this.start();
  }

  setParam(key, value) {
    this.params[key] = Number(value);
    if (!this.playing) this._drawOnce();
  }

  togglePlay() {
    this.playing = !this.playing;
    if (this.playing) {
      this.lastFrame = performance.now();
    }
    return this.playing;
  }

  reset() {
    this.simTime = 0;
    this.traceA = [];
    this.traceB = [];
    this.state = {};
    this.lastFrame = performance.now();
    this._drawOnce();
  }

  start() {
    if (this.rafId) return;
    this.lastFrame = performance.now();
    this.rafId = requestAnimationFrame(this._onFrame);
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  _frame(now) {
    const dt = Math.min(0.05, Math.max(0.001, (now - this.lastFrame) / 1000));
    this.lastFrame = now;
    if (this.playing) {
      this.simTime += dt;
      this._drawOnce();
    }
    this.rafId = requestAnimationFrame(this._onFrame);
  }

  _drawOnce() {
    if (!this.ctx || !this.canvas) return;
    if (this._syncSize) this._syncSize();

    const w = this.cssWidth || 640;
    const h = this.cssHeight || 420;
    const stageH = Math.round(h * 0.72);
    const scopeH = h - stageH;

    drawGrid(this.ctx, w, h, 36);

    // Clip physics stage
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(0, 0, w, stageH);
    this.ctx.clip();

    const res =
      renderMechThermoMode(this.ctx, this.mode, this.params, this.simTime, w, stageH, this.state) ||
      renderModernEmOptMode(this.ctx, this.mode, this.params, this.simTime, w, stageH, this.state);

    this.ctx.restore();

    if (res) {
      this.traceA.push(Number.isFinite(res.traceA) ? res.traceA : 0);
      this.traceB.push(Number.isFinite(res.traceB) ? res.traceB : 0);
      if (this.traceA.length > 140) this.traceA.shift();
      if (this.traceB.length > 140) this.traceB.shift();

      drawScope(
        this.ctx,
        w,
        stageH,
        scopeH,
        [
          { data: this.traceA, color: '#22d3ee', label: res.labelA || 'Ch1' },
          { data: this.traceB, color: '#fb923c', label: res.labelB || 'Ch2' },
        ],
        res.scopeTitle || 'Real vaqt ossillogrammasi'
      );

      if (this.telemetryEl && Array.isArray(res.metrics)) {
        this.telemetryEl.innerHTML = res.metrics
          .map(
            (m) => `
            <div class="telemetry-chip">
              <span class="telemetry-label">${m.label}</span>
              <strong class="telemetry-value" style="color:${m.color || '#22d3ee'}">${m.value}</strong>
            </div>`
          )
          .join('');
      }
    }
  }
}
