const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d", { alpha: false });

const el = (id) => document.getElementById(id);
const ui = {
    steps: el("steps"),
    sigma: el("sigma"),
    tail: el("tail"),
    speed: el("speed"),
    glow: el("glow"),
    seed: el("seed"),
    theme: el("theme"),
    accumulate: el("accumulate"),
    showAxes: el("showAxes"),

    vSteps: el("vSteps"),
    vSigma: el("vSigma"),
    vTail: el("vTail"),
    vSpeed: el("vSpeed"),
    vGlow: el("vGlow"),
    vSeed: el("vSeed"),

    btnRun: el("btnRun"),
    btnPause: el("btnPause"),
    btnReset: el("btnReset"),
    btnNew: el("btnNew"),
    btnSnap: el("btnSnap"),

    chipStatus: el("chipStatus"),
    };

const BG_CANVAS = "#050610";
const CYAN = "#00FFFF";
const MAGENTA = "#FF00FF";
const PURPLE = "#8A2BE2";
const WHITE = "#EAFBFF";

function lerp(a, b, t){ return a + (b - a) * t; }
function clamp(x, a, b){ return Math.max(a, Math.min(b, x)); }

function hexToRgb(hex){
  const h = hex.replace("#","");
  const n = parseInt(h, 16);
  return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
}
function rgba({r,g,b}, a=1){
  return `rgba(${r|0},${g|0},${b|0},${a})`;
}
function mix(c1, c2, t){
  return { r: lerp(c1.r,c2.r,t), g: lerp(c1.g,c2.g,t), b: lerp(c1.b,c2.b,t) };
}

function palette(theme){
  if(theme === "cyan-purple") return [CYAN, PURPLE];
  if(theme === "cyan-white")  return [CYAN, WHITE];
  return [CYAN, MAGENTA];
}

// Deterministic RNG (Mulberry32)
function seededRng(seed){
  let t = (seed >>> 0) || 1;
  return function(){
    t += 0x6D2B79F5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

// Normal random via Box–Muller
function randn(rng){
  let u = 0, v = 0;
  while(u === 0) u = rng();
  while(v === 0) v = rng();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

let points = [];        // array of {x,y}
let idx = 0;            // current step index
let running = false;

let bounds = { xmin:-1, xmax:1, ymin:-1, ymax:1 };

function setVals(){
  ui.vSteps.textContent = ui.steps.value;
  ui.vSigma.textContent = ui.sigma.value;
  ui.vTail.textContent  = ui.tail.value;
  ui.vSpeed.textContent = ui.speed.value;
  ui.vGlow.textContent  = ui.glow.value;
  ui.vSeed.textContent  = ui.seed.value;
}

function clearCanvas(){
  ctx.fillStyle = BG_CANVAS;
  ctx.fillRect(0,0,cnv.width, cnv.height);
}

function recomputeBounds(){
  let xmin=Infinity, xmax=-Infinity, ymin=Infinity, ymax=-Infinity;
  for(const p of points){
    xmin = Math.min(xmin, p.x);
    xmax = Math.max(xmax, p.x);
    ymin = Math.min(ymin, p.y);
    ymax = Math.max(ymax, p.y);
  }
  const dx = Math.max(xmax-xmin, 1e-9);
  const dy = Math.max(ymax-ymin, 1e-9);
  const pad = 0.2; // cinematic air
  bounds = {
    xmin: xmin - pad*dx, xmax: xmax + pad*dx,
    ymin: ymin - pad*dy, ymax: ymax + pad*dy
  };
}

function worldToScreen(p){
  const w = cnv.width, h = cnv.height;
  const dx = bounds.xmax - bounds.xmin;
  const dy = bounds.ymax - bounds.ymin;
  const s = Math.min(w/dx, h/dy); // aspect equal
  const x = (p.x - bounds.xmin) * s;
  const y = h - (p.y - bounds.ymin) * s;
  return { x, y };
}

function drawAxes(){
  ctx.save();
  ctx.strokeStyle = "rgba(255,69,0,0.3)";
  ctx.lineWidth = 1;
  const o = worldToScreen({x:0,y:0});
  ctx.beginPath();
  ctx.moveTo(0, o.y); ctx.lineTo(cnv.width, o.y);
  ctx.moveTo(o.x, 0); ctx.lineTo(o.x, cnv.height);
  ctx.stroke();
  ctx.restore();
}

function generatePath(){
  const steps = parseInt(ui.steps.value, 10);
  const sigma = parseFloat(ui.sigma.value);
  const seed  = parseInt(ui.seed.value || "7", 10);
  const rng = seededRng(seed);

  points = new Array(steps + 1);
  let x=0, y=0;
  points[0] = {x,y};

  for(let i=1; i<=steps; i++){
    x += randn(rng) * sigma;
    y += randn(rng) * sigma;
    points[i] = {x,y};
  }

  idx = 0;
  recomputeBounds();
  render();
}

function render(){
  const [cA, cB] = palette(ui.theme.value).map(hexToRgb);
  const glow = parseInt(ui.glow.value, 10) / 100;
  const tailLen = parseInt(ui.tail.value, 10);
  const showHist = ui.accumulate.checked;

  clearCanvas();
  if(ui.showAxes.checked) drawAxes();

  const total = Math.max(points.length - 1, 1);
  const iMax = Math.max(idx, 0);

  // ---- HISTORY (tenue) ----
  if(showHist && iMax > 2){
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // subtle glow behind history
    ctx.lineWidth = 3.2;
    ctx.globalAlpha = 0.05 + 0.10*glow;
    for(let i=1; i<iMax; i++){
      const t = i / total;
      const col = mix(cA, cB, t);
      ctx.strokeStyle = rgba(col, 0.08 + 0.10*glow);
      const p0 = worldToScreen(points[i-1]);
      const p1 = worldToScreen(points[i]);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    // thin line over
    ctx.lineWidth = 1.0;
    ctx.globalAlpha = 0.18;
    for(let i=1; i<iMax; i++){
      const t = i / total;
      const col = mix(cA, cB, t);
      ctx.strokeStyle = rgba(col, 0.24);
      const p0 = worldToScreen(points[i-1]);
      const p1 = worldToScreen(points[i]);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    ctx.restore();
  }

  // ---- TAIL (brillante) ----
  const start = Math.max(1, iMax - tailLen);
  if(iMax - start > 2){
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // glow underlay
    ctx.lineWidth = 6.0;
    ctx.globalAlpha = 0.12 + 0.40*glow;
    for(let i=start; i<iMax; i++){
      const t = i / total;
      const col = mix(cA, cB, t);
      ctx.strokeStyle = rgba(col, 0.10 + 0.22*glow);
      const p0 = worldToScreen(points[i-1]);
      const p1 = worldToScreen(points[i]);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    // main stroke
    ctx.lineWidth = 1.7;
    ctx.globalAlpha = 0.92;
    for(let i=start; i<iMax; i++){
      const t = i / total;
      const col = mix(cA, cB, t);
      ctx.strokeStyle = rgba(col, 0.98);
      const p0 = worldToScreen(points[i-1]);
      const p1 = worldToScreen(points[i]);
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }

    ctx.restore();
  }

  // ---- Fluorescent particle (cyan) ----
  if(points.length > 0){
    const p = worldToScreen(points[iMax]);
    ctx.save();

    // halo big
    ctx.fillStyle = `rgba(0,255,255,${0.06 + 0.14*glow})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, 28, 0, Math.PI*2); ctx.fill();

    // halo mid
    ctx.fillStyle = `rgba(0,255,255,${0.10 + 0.18*glow})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, 15, 0, Math.PI*2); ctx.fill();

    // core
    ctx.fillStyle = `rgba(0,255,255,0.96)`;
    ctx.beginPath(); ctx.arc(p.x, p.y, 4.8, 0, Math.PI*2); ctx.fill();

    ctx.restore();
  }
}

function tick(){
  if(!running) return;

  const speed = parseInt(ui.speed.value, 10);
  idx = Math.min(points.length - 1, idx + speed);

  render();

  if(idx >= points.length - 1){
    running = false;
    ui.btnPause.textContent = "Pause";
    return;
  }

  requestAnimationFrame(tick);
}

// --- UI wiring ---
function resizeCanvas(){
  const rect = cnv.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  // square canvas, sharp
  cnv.width  = Math.floor(rect.width * dpr);
  cnv.height = Math.floor(rect.width * dpr);

  render();
}

function downloadPNG(){
  const a = document.createElement("a");
  a.download = "barbidev-brownian.png";
  a.href = cnv.toDataURL("image/png");
  a.click();
}

function init(){
  setVals();

  // Generate initial path
  generatePath();

  ui.steps.addEventListener("input", () => { setVals(); generatePath(); });
  ui.sigma.addEventListener("input", () => { setVals(); generatePath(); });
  ui.seed.addEventListener("input",  () => { setVals(); });

  ui.tail.addEventListener("input",  () => { setVals(); render(); });
  ui.glow.addEventListener("input",  () => { setVals(); render(); });
  ui.theme.addEventListener("change", () => { render(); });

  ui.accumulate.addEventListener("change", () => { render(); });
  ui.showAxes.addEventListener("change",   () => { render(); });

  ui.speed.addEventListener("input", () => { setVals(); });

  ui.btnRun.addEventListener("click", () => {
    if(points.length === 0) generatePath();
    running = true;
    ui.btnPause.textContent = "⏸";
    requestAnimationFrame(tick);
  });

  ui.btnPause.addEventListener("click", () => {
    running = !running;
    ui.btnPause.textContent = running ? "⏸" : "▶⏸";
    if(running) requestAnimationFrame(tick);
  });

  ui.btnReset.addEventListener("click", () => {
    running = false;
    idx = 0;
    ui.btnPause.textContent = "⏸";
    render();
  });

  ui.btnNew.addEventListener("click", () => {
    running = false;
    ui.btnPause.textContent = "⏸";
    generatePath();
  });

  ui.btnSnap.addEventListener("click", downloadPNG);

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}

init();
