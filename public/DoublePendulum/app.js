// Double Pendulum Chaos — vanilla canvas app (RK4)
// Responsive + cyberpunk render

const cv = document.getElementById("cv");
const ctx = cv.getContext("2d", { alpha: false });

const els = {
  btnPlay: document.getElementById("btnPlay"),
  btnReset: document.getElementById("btnReset"),
  btnShuffle: document.getElementById("btnShuffle"),
  mode: document.getElementById("mode"),

  eps: document.getElementById("eps"),
  th1: document.getElementById("th1"),
  th2: document.getElementById("th2"),
  L1: document.getElementById("L1"),
  L2: document.getElementById("L2"),
  g: document.getElementById("g"),
  speed: document.getElementById("speed"),
  tail: document.getElementById("tail"),
  glow: document.getElementById("glow"),
  seed: document.getElementById("seed"),
  btnSeed: document.getElementById("btnSeed"),
  palette: document.getElementById("palette"),
  showArms: document.getElementById("showArms"),

  epsVal: document.getElementById("epsVal"),
  th1Val: document.getElementById("th1Val"),
  th2Val: document.getElementById("th2Val"),
  L1Val: document.getElementById("L1Val"),
  L2Val: document.getElementById("L2Val"),
  gVal: document.getElementById("gVal"),
  speedVal: document.getElementById("speedVal"),
  tailVal: document.getElementById("tailVal"),
  glowVal: document.getElementById("glowVal"),
};

const BG = "#05050A";
const MAGENTA = "#FF00FF";
const CYAN = "#00FFFF";
const VIOLET = "#8A2BE2";

function clamp01(x){ return Math.max(0, Math.min(1, x)); }

function hexToRgb(hex){
  const h = hex.replace("#","");
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  return {r,g,b};
}
function mix(a,b,t){
  t = clamp01(t);
  return { r: Math.round(a.r*(1-t)+b.r*t), g: Math.round(a.g*(1-t)+b.g*t), b: Math.round(a.b*(1-t)+b.b*t) };
}
function rgbStr({r,g,b}, a=1){ return `rgba(${r},${g},${b},${a})`; }

function paletteColor(t, name){
  // t in [0,1]
  const M = hexToRgb(MAGENTA), C = hexToRgb(CYAN), V = hexToRgb(VIOLET);
  if(name === "cyanmag") return mix(C, M, t);
  if(name === "violet") return mix(V, M, t*0.5);
  return M; // magenta
}

// Seeded RNG (mulberry32)
function mulberry32(seed){
  let a = seed >>> 0;
  return function(){
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const state = {
  running: true,
  // physics
  m1: 1.0, m2: 1.0,
  L1: 1.0, L2: 0.8,
  g: 9.81,
  // dt for simulation
  dt: 1/240, // stable
  speed: 6,  // steps per frame
  // initial conditions (radians)
  th1: deg2rad(117),
  th2: deg2rad(-17),
  w1: 0,
  w2: 0,
  eps: 1e-4,
  // second pendulum
  th1b: 0, th2b: 0, w1b: 0, w2b: 0,

  // render
  tailLen: 400,
  glow: 50,
  palette: "magenta",
  showArms: true,
  mode: "overlay",

  // tail history (end mass positions)
  tailA: [],
  tailB: [],

  rngSeed: 777,
  rng: mulberry32(777),
};

function deg2rad(d){ return d * Math.PI / 180; }

function resetSystem(){
  state.th1 = deg2rad(parseFloat(els.th1.value));
  state.th2 = deg2rad(parseFloat(els.th2.value));
  state.w1 = 0;
  state.w2 = 0;

  state.eps = parseFloat(els.eps.value);
  state.th1b = state.th1 + state.eps;
  state.th2b = state.th2;
  state.w1b = 0;
  state.w2b = 0;

  state.tailA.length = 0;
  state.tailB.length = 0;
}

function deriv([th1,w1,th2,w2], params){
  const {m1,m2,L1,L2,g} = params;
  const d = th1 - th2;

  const den1 = (m1+m2)*L1 - m2*L1*Math.cos(d)*Math.cos(d);
  const den2 = (L2/L1)*den1;

  const dth1 = w1;
  const dth2 = w2;

  const dw1 = (
    (m2*L1*w1*w1*Math.sin(d)*Math.cos(d)
      + m2*g*Math.sin(th2)*Math.cos(d)
      + m2*L2*w2*w2*Math.sin(d)
      - (m1+m2)*g*Math.sin(th1)
    ) / (den1 + 1e-12)
  );

  const dw2 = (
    (-m2*L2*w2*w2*Math.sin(d)*Math.cos(d)
      + (m1+m2)*g*Math.sin(th1)*Math.cos(d)
      - (m1+m2)*L1*w1*w1*Math.sin(d)
      - (m1+m2)*g*Math.sin(th2)
    ) / (den2 + 1e-12)
  );

  return [dth1, dw1, dth2, dw2];
}

function rk4Step(y, h, params){
  const k1 = deriv(y, params);
  const y2 = y.map((v,i)=> v + 0.5*h*k1[i]);
  const k2 = deriv(y2, params);
  const y3 = y.map((v,i)=> v + 0.5*h*k2[i]);
  const k3 = deriv(y3, params);
  const y4 = y.map((v,i)=> v + h*k3[i]);
  const k4 = deriv(y4, params);

  return y.map((v,i)=> v + (h/6)*(k1[i] + 2*k2[i] + 2*k3[i] + k4[i]));
}

function toXY(th1, th2, L1, L2){
  const x1 = L1*Math.sin(th1);
  const y1 = -L1*Math.cos(th1);
  const x2 = x1 + L2*Math.sin(th2);
  const y2 = y1 - L2*Math.cos(th2);
  return {x1,y1,x2,y2};
}

// Resize canvas to fit parent (keeps sharpness)
function resize(){
  const rect = cv.getBoundingClientRect();
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  cv.width = Math.floor(rect.width * dpr);
  cv.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0); // draw in CSS pixels
}
window.addEventListener("resize", resize);

// Draw helpers
function clear(){
  ctx.fillStyle = BG;
  ctx.fillRect(0,0,cv.clientWidth, cv.clientHeight);
}

function drawGlowLine(xa,ya,xb,yb, color, glowStrength){
  // glowStrength 0..100
  const g = clamp01(glowStrength/100);
  // outer glow
  ctx.strokeStyle = rgbStr(color, 0.10 + 0.20*g);
  ctx.lineWidth = 16 + 24*g;
  ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(xa,ya); ctx.lineTo(xb,yb); ctx.stroke();
  // core
  ctx.strokeStyle = rgbStr(color, 0.85);
  ctx.lineWidth = 6 + 6*g;
  ctx.beginPath(); ctx.moveTo(xa,ya); ctx.lineTo(xb,yb); ctx.stroke();
}

function drawGlowDot(x,y, color, glowStrength){
  const g = clamp01(glowStrength/100);
  // outer glow
  ctx.fillStyle = rgbStr(color, 0.08 + 0.20*g);
  ctx.beginPath(); ctx.arc(x,y, 18 + 24*g, 0, Math.PI*2); ctx.fill();
  // inner
  ctx.fillStyle = rgbStr(color, 0.85);
  ctx.beginPath(); ctx.arc(x,y, 5 + 4*g, 0, Math.PI*2); ctx.fill();
}

function drawTail(points, color, glowStrength){
  const n = points.length;
  if(n < 2) return;
  const g = clamp01(glowStrength/100);

  // glow
  ctx.strokeStyle = rgbStr(color, 0.10 + 0.10*g);
  ctx.lineWidth = 18 + 18*g;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for(let i=1;i<n;i++) ctx.lineTo(points[i].x, points[i].y);
  ctx.stroke();

  // core with fade
  ctx.lineWidth = 4 + 6*g;
  ctx.beginPath();
  for(let i=1;i<n;i++){
    const t = i/(n-1);
    ctx.strokeStyle = rgbStr(color, 0.06 + 0.85*(t*t));
    ctx.beginPath();
    ctx.moveTo(points[i-1].x, points[i-1].y);
    ctx.lineTo(points[i].x, points[i].y);
    ctx.stroke();
  }
}

function stepPhysics(){
  const params = {m1:state.m1, m2:state.m2, L1:state.L1, L2:state.L2, g:state.g};
  let yA = [state.th1, state.w1, state.th2, state.w2];
  let yB = [state.th1b, state.w1b, state.th2b, state.w2b];

  for(let s=0; s<state.speed; s++){
    yA = rk4Step(yA, state.dt, params);
    yB = rk4Step(yB, state.dt, params);
  }

  [state.th1, state.w1, state.th2, state.w2] = yA;
  [state.th1b, state.w1b, state.th2b, state.w2b] = yB;

  const A = toXY(state.th1, state.th2, state.L1, state.L2);
  const B = toXY(state.th1b, state.th2b, state.L1, state.L2);

  // store tail (end mass)
  state.tailA.push({x:A.x2, y:A.y2});
  state.tailB.push({x:B.x2, y:B.y2});
  if(state.tailA.length > state.tailLen) state.tailA.shift();
  if(state.tailB.length > state.tailLen) state.tailB.shift();
}

function draw(){
  clear();

  // camera transform (world → screen)
  const w = cv.clientWidth;
  const h = cv.clientHeight;
  const reach = (state.L1 + state.L2);
  const scale = Math.min(w, h) * 0.34 / reach;

  function worldToScreen(x,y, view){
    // view: {cx, cy} center shift in world coords
    const cx = view?.cx || 0;
    const cy = view?.cy || 0;
    const sx = w * 0.5 + (x - cx) * scale;
    const sy = h * 0.3 - (y - cy) * scale; 
    return {x:sx, y:sy};
  }

  const pal = state.palette;
  const colA = paletteColor(1.0, pal);     // main
  const colB = paletteColor(0.25, pal);    // ghost-ish

  // compute current points
  const A = toXY(state.th1, state.th2, state.L1, state.L2);
  const B = toXY(state.th1b, state.th2b, state.L1, state.L2);

  // mode: overlay or split
  if(state.mode === "split"){
    // left: A, right: B
    const viewA = {cx: -0.75*reach, cy: 0};
    const viewB = {cx: +0.75*reach, cy: 0};

    // tails
    drawTail(state.tailA.map(p => worldToScreen(p.x,p.y, viewA)), colA, state.glow);
    drawTail(state.tailB.map(p => worldToScreen(p.x,p.y, viewB)), colB, state.glow);

    // arms and masses
    if(state.showArms){
      const oA = worldToScreen(0,0, viewA);
      const p1A = worldToScreen(A.x1,A.y1, viewA);
      const p2A = worldToScreen(A.x2,A.y2, viewA);
      drawGlowLine(oA.x,oA.y,p1A.x,p1A.y, colA, state.glow);
      drawGlowLine(p1A.x,p1A.y,p2A.x,p2A.y, colA, state.glow);

      const oB = worldToScreen(0,0, viewB);
      const p1B = worldToScreen(B.x1,B.y1, viewB);
      const p2B = worldToScreen(B.x2,B.y2, viewB);
      drawGlowLine(oB.x,oB.y,p1B.x,p1B.y, colB, state.glow);
      drawGlowLine(p1B.x,p1B.y,p2B.x,p2B.y, colB, state.glow);
    }

    // masses (end only is enough visually)
    drawGlowDot(worldToScreen(A.x2,A.y2, viewA).x, worldToScreen(A.x2,A.y2, viewA).y, colA, state.glow);
    drawGlowDot(worldToScreen(B.x2,B.y2, viewB).x, worldToScreen(B.x2,B.y2, viewB).y, colB, state.glow);

  } else {
    // overlay
    const view = {cx:0, cy:0};

    // tails
    drawTail(state.tailA.map(p => worldToScreen(p.x,p.y, view)), colA, state.glow);
    drawTail(state.tailB.map(p => worldToScreen(p.x,p.y, view)), colB, state.glow);

    if(state.showArms){
      const o = worldToScreen(0,0, view);

      const p1A = worldToScreen(A.x1,A.y1, view);
      const p2A = worldToScreen(A.x2,A.y2, view);
      drawGlowLine(o.x,o.y,p1A.x,p1A.y, colA, state.glow);
      drawGlowLine(p1A.x,p1A.y,p2A.x,p2A.y, colA, state.glow);

      const p1B = worldToScreen(B.x1,B.y1, view);
      const p2B = worldToScreen(B.x2,B.y2, view);
      drawGlowLine(o.x,o.y,p1B.x,p1B.y, colB, state.glow);
      drawGlowLine(p1B.x,p1B.y,p2B.x,p2B.y, colB, state.glow);
    }

    drawGlowDot(worldToScreen(A.x2,A.y2, view).x, worldToScreen(A.x2,A.y2, view).y, colA, state.glow);
    drawGlowDot(worldToScreen(B.x2,B.y2, view).x, worldToScreen(B.x2,B.y2, view).y, colB, state.glow);
  }
}

function tick(){
  if(state.running) stepPhysics();
  draw();
  requestAnimationFrame(tick);
}

// UI binding
function updateLabels(){
  els.epsVal.textContent = Number(els.eps.value).toFixed(5);
  els.th1Val.textContent = `${els.th1.value}°`;
  els.th2Val.textContent = `${els.th2.value}°`;
  els.L1Val.textContent = Number(els.L1.value).toFixed(2);
  els.L2Val.textContent = Number(els.L2.value).toFixed(2);
  els.gVal.textContent = Number(els.g.value).toFixed(2);
  els.speedVal.textContent = els.speed.value;
  els.tailVal.textContent = els.tail.value;
  els.glowVal.textContent = els.glow.value;
}

function applyParams(){
  state.eps = parseFloat(els.eps.value);
  state.L1 = parseFloat(els.L1.value);
  state.L2 = parseFloat(els.L2.value);
  state.g = parseFloat(els.g.value);
  state.speed = parseInt(els.speed.value,10);
  state.tailLen = parseInt(els.tail.value,10);
  state.glow = parseInt(els.glow.value,10);
  state.palette = els.palette.value;
  state.showArms = els.showArms.checked;
  state.mode = els.mode.value;
}

function hookInputs(){
  const inputs = ["eps","th1","th2","L1","L2","g","speed","tail","glow","palette","showArms","mode"];
  inputs.forEach(id=>{
    els[id].addEventListener("input", ()=>{
      updateLabels();
      applyParams();
      // reset only when initial angles changed (th1/th2/eps)
      if(id === "th1" || id === "th2" || id === "eps") resetSystem();
    });
  });

  els.btnPlay.addEventListener("click", ()=>{
    state.running = !state.running;
    els.btnPlay.textContent = state.running ? "❚❚" : "▶";
  });

  els.btnReset.addEventListener("click", ()=>{
    resetSystem();
  });

  els.btnShuffle.addEventListener("click", ()=>{
    // change seed and slightly randomize initial angles (small)
    const newSeed = Math.floor(Math.random()*1e9);
    els.seed.value = String(newSeed);
    state.rngSeed = newSeed;
    state.rng = mulberry32(newSeed);

    const j1 = (state.rng()-0.5)*6; // ±3 deg
    const j2 = (state.rng()-0.5)*6;
    els.th1.value = String(Math.round(117 + j1));
    els.th2.value = String(Math.round(-17 + j2));
    updateLabels();
    resetSystem();
  });

  els.btnSeed.addEventListener("click", ()=>{
    const s = parseInt(els.seed.value,10);
    if(Number.isFinite(s)){
      state.rngSeed = s;
      state.rng = mulberry32(s);
      resetSystem();
    }
  });
}

// Init
function init(){
  resize();
  updateLabels();
  applyParams();
  resetSystem();
  els.btnPlay.textContent = "❚❚";
  requestAnimationFrame(tick);
}
hookInputs();
init();