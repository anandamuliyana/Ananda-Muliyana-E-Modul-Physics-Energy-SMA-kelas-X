import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Zap, Flame, Speaker, Sun, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

type LabType = "skate-park" | "kalor-jenis" | "listrik-joule" | "bunyi-wave" | "surya-panel";

export default function InteractiveSimulation() {
  const [activeLab, setActiveLab] = useState<LabType>("skate-park");

  return (
    <div id="simulation-section" className="bg-[#132237] text-white rounded-[32px] shadow-lg border border-natural-border/20 overflow-hidden">
      {/* Tab bar header */}
      <div className="bg-[#0B1523] border-b border-white/5 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-natural-secondary flex items-center space-x-2 font-serif">
            <Sparkles className="w-5 h-5 text-natural-accent shrink-0" />
            <span>Laboratorium Praktikum Virtual Interaktif</span>
          </h2>
          <p className="text-xs text-white/70">Gunakan simulator virtual fisis untuk membuktikan hukum-hukum alam (sunnatullah) secara kuantitatif</p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-1 bg-[#132237] border border-white/5 p-1 rounded-xl">
          {(
            [
              { id: "skate-park", label: "Skate Park", icon: "🛹" },
              { id: "kalor-jenis", label: "Kalor Jenis", icon: "🔥" },
              { id: "listrik-joule", label: "Joule Heating", icon: "⚡" },
              { id: "bunyi-wave", label: "Gelombang Bunyi", icon: "🔊" },
              { id: "surya-panel", label: "Daya Surya", icon: "☀️" }
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                activeLab === tab.id
                  ? "bg-natural-primary text-white shadow font-bold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Simulator panels */}
      <div className="p-6">
        {activeLab === "skate-park" && <SkateParkSim />}
        {activeLab === "kalor-jenis" && <KalorJenisSim />}
        {activeLab === "listrik-joule" && <ListrikJouleSim />}
        {activeLab === "bunyi-wave" && <BunyiWaveSim />}
        {activeLab === "surya-panel" && <SuryaPanelSim />}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 1. SKATE PARK SIMULATOR (Kinetik, Potensial, Thermal, Total)
// -------------------------------------------------------------
function SkateParkSim() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mass, setMass] = useState(50); // kg
  const [gravity, setGravity] = useState(10); // m/s²
  const [friction, setFriction] = useState(0.02); // friction coeff
  const [kinetic, setKinetic] = useState(0);
  const [potential, setPotential] = useState(0);
  const [thermal, setThermal] = useState(0);
  const [total, setTotal] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Physical coordinates modeling U-shaped path
  const stateRef = useRef({
    theta: Math.PI / 4, // angle of swing
    omega: 0.0, // angular velocity
    totalThermal: 0.0
  });

  const resetSim = () => {
    stateRef.current.theta = Math.PI / 3;
    stateRef.current.omega = 0.0;
    stateRef.current.totalThermal = 0.0;
    setThermal(0);
  };

  useEffect(() => {
    resetSim();
  }, [gravity, mass, friction]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let localThermal = stateRef.current.totalThermal;

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = 60;
      const radius = 110;

      // Update Physics
      if (isPlaying) {
        // Pendulum style skater slide (parabolic approximation)
        const angularAcceleration = -(gravity / (radius / 10)) * Math.sin(stateRef.current.theta) - friction * stateRef.current.omega;
        stateRef.current.omega += angularAcceleration * 0.025; // dt dt approximation
        stateRef.current.theta += stateRef.current.omega * 0.025;

        // Friction depletes mechanical energy and converts to thermal
        const mechanicalLoss = Math.abs(friction * stateRef.current.omega * 0.6);
        localThermal += mechanicalLoss * mass;
        stateRef.current.totalThermal = localThermal;
      }

      // Coordinates of Skater on U-Track
      const currentX = cx + radius * Math.sin(stateRef.current.theta);
      const currentY = cy + radius * Math.cos(stateRef.current.theta);
      const currentHeight = Math.max(0, (cy + radius - currentY) / 10); // arbitrary meter sizing

      // Draw U-Track
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI);
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 6;
      ctx.stroke();

      // Support pillars
      ctx.beginPath();
      ctx.moveTo(cx - radius - 3, cy);
      ctx.lineTo(cx - radius - 3, canvas.height - 10);
      ctx.moveTo(cx + radius + 3, cy);
      ctx.lineTo(cx + radius + 3, canvas.height - 10);
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 4;
      ctx.stroke();

      // Ground lane
      ctx.beginPath();
      ctx.moveTo(10, canvas.height - 10);
      ctx.lineTo(canvas.width - 10, canvas.height - 10);
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw Skater ball/avatar
      ctx.beginPath();
      ctx.arc(currentX, currentY, 14, 0, 2 * Math.PI);
      ctx.fillStyle = "#3b82f6";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#3b82f6";
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Skater face/details
      ctx.beginPath();
      ctx.arc(currentX, currentY, 14, 0, 2 * Math.PI);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Calculate parameters in Joules
      const finalPotential = Math.max(0, mass * gravity * currentHeight * 1.5);
      const skaterVel = Math.abs(stateRef.current.omega * radius * 0.1);
      const finalKinetic = Math.max(0, 0.5 * mass * skaterVel * skaterVel);
      const maxEnergy = 800 + mass * gravity * 1.5;
      const rawTotal = finalPotential + finalKinetic + stateRef.current.totalThermal;

      setPotential(finalPotential);
      setKinetic(finalKinetic);
      setThermal(stateRef.current.totalThermal);
      setTotal(rawTotal);

      if (isPlaying) {
        animationFrameId.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPlaying, mass, gravity, friction]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Controls & Metrics */}
      <div className="lg:col-span-4 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-5 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-emerald-400">Variabel Skate Park</h3>
            <p className="text-[10px] text-slate-400 mt-1">Mengukur perubahan konversi energi kinetik, potensial, dan disipasi kalor thermal</p>
          </div>

          {/* Mass Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Massa Skater (m)</span>
              <span className="font-mono text-emerald-300">{mass} kg</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              value={mass}
              onChange={(e) => setMass(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1 rounded"
            />
          </div>

          {/* Gravity Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Konstanta Gravitasi (g)</span>
              <span className="font-mono text-emerald-300">{gravity} m/s²</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={gravity}
              onChange={(e) => setGravity(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1 rounded"
            />
          </div>

          {/* Friction Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Gesekan Lintasan (mu)</span>
              <span className="font-mono text-emerald-300">{friction.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.005"
              value={friction}
              onChange={(e) => setFriction(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1 rounded"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 pt-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? "Pause" : "Jalankan"}</span>
          </button>
          <button
            onClick={resetSim}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-all flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulator canvas */}
      <div className="lg:col-span-5 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-center relative">
        <canvas ref={canvasRef} width="300" height="230" className="bg-slate-900 border border-slate-800 rounded-xl" />
        <span className="absolute bottom-6 text-[10px] text-slate-400 bg-slate-950 px-2 py-1 rounded-full border border-slate-800 tracking-wide font-mono z-10">
          U-shaped Parabolic track track
        </span>
      </div>

      {/* Real-time bar chart of energies */}
      <div className="lg:col-span-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Status Energi (Joule)</h4>
        <div className="space-y-4">
          {/* Kinetic Energy Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-emerald-400 font-semibold">Kinetik (Ek)</span>
              <span>{Math.round(kinetic)} J</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
              <div className="bg-emerald-500 h-full transition-all" style={{ width: `${Math.min(100, (kinetic / Math.max(1, total)) * 100)}%` }} />
            </div>
          </div>

          {/* Potential Energy Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-blue-400 font-semibold">Potensial (Ep)</span>
              <span>{Math.round(potential)} J</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
              <div className="bg-blue-500 h-full transition-all" style={{ width: `${Math.min(100, (potential / Math.max(1, total)) * 100)}%` }} />
            </div>
          </div>

          {/* Thermal Energy Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-rose-400 font-semibold">Kalor Termal</span>
              <span>{Math.round(thermal)} J</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
              <div className="bg-rose-500 h-full transition-all" style={{ width: `${Math.min(100, (thermal / Math.max(1, total)) * 100)}%` }} />
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">Total Energi (Em)</span>
            <span className="text-amber-400 font-bold">{Math.round(total)} J</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. KALOR JENIS SIMULATOR (Pemanasan Larutan)
// -------------------------------------------------------------
function KalorJenisSim() {
  const [substance, setSubstance] = useState<"air" | "besi">("air");
  const [mass, setMass] = useState(0.2); // kg
  const [power, setPower] = useState(500); // burner power Watts
  const [time, setTime] = useState(10); // s
  const [tempInit, setTempInit] = useState(25); // °C
  const [isHeating, setIsHeating] = useState(false);
  const [finalTemp, setFinalTemp] = useState(25);
  const [heatAbsorbed, setHeatAbsorbed] = useState(0); // Q

  const specificHeat = substance === "air" ? 4200 : 450; // J/kg°C

  const startHeating = () => {
    setIsHeating(true);
    let currentT = tempInit;
    const totalQ = power * time; // Joule
    const dTMax = totalQ / (mass * specificHeat);
    const targetT = tempInit + dTMax;

    setHeatAbsorbed(totalQ);

    const steps = 30;
    const stepDiff = (targetT - tempInit) / steps;
    let i = 0;

    const timer = setInterval(() => {
      i++;
      currentT += stepDiff;
      setFinalTemp(Math.min(substance === "air" ? 100 : 1500, currentT));
      if (i >= steps) {
        clearInterval(timer);
        setIsHeating(false);
      }
    }, 45);
  };

  useEffect(() => {
    setFinalTemp(tempInit);
    setHeatAbsorbed(0);
  }, [substance, mass, power, time, tempInit]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h3 className="text-sm font-bold text-amber-400">Variabel Pemanas Kalorimeter</h3>
        </div>

        <div className="space-y-4">
          {/* Substance selector */}
          <div className="space-y-1">
            <span className="text-xs">Zat Cair/Padat</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSubstance("air")}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  substance === "air" ? "bg-cyan-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400"
                }`}
              >
                Air (c = 4200 J/kg°C)
              </button>
              <button
                onClick={() => setSubstance("besi")}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                  substance === "besi" ? "bg-rose-800 text-white" : "bg-slate-900 border border-slate-800 text-slate-400"
                }`}
              >
                Logam Besi (c = 450 J/kg°C)
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span>Massa Bahan (m)</span>
              <span className="font-mono text-amber-300">{mass} kg</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.0"
              step="0.05"
              value={mass}
              onChange={(e) => setMass(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-amber-500 rounded"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span>Daya Pemanas Burner (P)</span>
              <span className="font-mono text-amber-300">{power} Watt</span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={power}
              onChange={(e) => setPower(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-amber-500 rounded"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span>Durasi Pembakaran (t)</span>
              <span className="font-mono text-amber-300">{time} sekon</span>
            </div>
            <input
              type="range"
              min="1"
              max="60"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-amber-500 rounded"
            />
          </div>
        </div>

        <button
          onClick={startHeating}
          disabled={isHeating}
          className="w-full py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 disabled:from-slate-800 disabled:to-slate-800 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1"
        >
          <Flame className="w-4 h-4" />
          <span>{isHeating ? "Pemanasan Berlangsung..." : "Nyalakan Kompor Bunsen"}</span>
        </button>
      </div>

      {/* Visual beaker burner visualization */}
      <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Flame animation if heating */}
        {isHeating && (
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.9, 0.7] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute bottom-16 bg-gradient-to-t from-red-500 via-amber-500 to-transparent w-24 h-24 blur-md rounded-full pointer-events-none"
          />
        )}

        {/* Beaker / Crucible */}
        <div className={`w-36 h-40 border-4 border-slate-400 rounded-b-3xl relative flex flex-col justify-end overflow-hidden ${
          substance === "air" ? "bg-blue-950/20" : "bg-slate-950"
        }`}>
          {/* Inside Liquid or Block */}
          {substance === "air" ? (
            <motion.div
              animate={isHeating ? { y: [0, -3, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
              className="bg-cyan-500/30 border-t border-cyan-400/50 w-full h-[60%] flex items-center justify-center font-bold text-xs"
            >
              H₂O Cair
            </motion.div>
          ) : (
            <div className="absolute inset-x-4 bottom-4 top-12 bg-slate-700 border-2 border-slate-500 rounded flex items-center justify-center font-bold text-xs">
              <motion.div
                animate={isHeating ? { backgroundColor: ["#475569", "#dc2626", "#475569"] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-full h-full rounded flex items-center justify-center"
              >
                Logam Fe
              </motion.div>
            </div>
          )}
        </div>

        {/* Bunsen burner base */}
        <div className="w-40 h-8 bg-slate-800 border-t border-slate-700 rounded-t-lg z-10" />
      </div>

      {/* Results output */}
      <div className="lg:col-span-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Laporan Termal</h4>
        <div className="space-y-4 pt-1">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Temperatur Terkini</span>
            <div className="font-mono text-2xl font-bold text-orange-400">{finalTemp.toFixed(1)} °C</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Kalor Diserap (Q)</span>
            <div className="font-mono text-xl font-bold text-amber-300">
              {heatAbsorbed >= 1000 ? `${(heatAbsorbed / 1000).toFixed(1)} kJ` : `${heatAbsorbed} J`}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg space-y-1.5 text-[10px] leading-relaxed text-slate-400">
            <div className="font-semibold text-slate-300">Hubungan Fisika (Asas Black)</div>
            <span>Q = m · c · ΔT</span>
            <span>Kalor jenis murni {substance} setara {specificHeat} J/kg°C. Terbukti suhu naik sebanding daya api penyuplai.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. JOULE HEATING SIMULATOR (Elektron, Resistor, Voltase)
// -------------------------------------------------------------
function ListrikJouleSim() {
  const [voltage, setVoltage] = useState(12); // V
  const [resistance, setResistance] = useState(10); // Ohm
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const current = voltage / resistance; // Ampere
  const power = voltage * current; // Watt

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let electronX = 10;
    const numElectrons = 12;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw wire loop
      ctx.beginPath();
      ctx.rect(30, 30, canvas.width - 60, canvas.height - 60);
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 14;
      ctx.stroke();

      // Resistor section (right side)
      ctx.beginPath();
      ctx.moveTo(canvas.width - 30, 60);
      ctx.lineTo(canvas.width - 30, canvas.height - 60);
      // Resistor thermal glowing depending on power
      const redVal = Math.min(255, Math.ceil(power * 15)).toString(16).padStart(2, "0");
      ctx.strokeStyle = `#${redVal}2020`;
      ctx.lineWidth = 16;
      ctx.stroke();

      // Draw battery (left side)
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(15, canvas.height / 2 - 25, 30, 50);
      ctx.fillStyle = "#10b981";
      ctx.fillRect(15, canvas.height / 2 - 25, 30, 20); // green anode
      ctx.fillStyle = "white";
      ctx.font = "bold 10px sans-serif";
      ctx.fillText("+", 27, canvas.height / 2 - 10);
      ctx.fillText("-", 27, canvas.height / 2 + 15);

      // Animate flowing electrons
      electronX += current * 1.5;
      if (electronX > canvas.width) {
        electronX = 0;
      }

      ctx.fillStyle = "#38bdf8"; // Light blue electrons
      for (let i = 0; i < numElectrons; i++) {
        const offset = (canvas.width / numElectrons) * i;
        let pos = (electronX + offset) % (2 * (canvas.width - 60 + canvas.height - 60));

        let x = 30;
        let y = 30;

        const w = canvas.width - 60;
        const h = canvas.height - 60;

        if (pos < w) {
          x = 30 + pos;
          y = 30;
        } else if (pos < w + h) {
          x = 30 + w;
          y = 30 + (pos - w);
        } else if (pos < 2 * w + h) {
          x = 30 + w - (pos - w - h);
          y = 30 + h;
        } else {
          x = 30;
          y = 30 + h - (pos - 2 * w - h);
        }

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [voltage, resistance, current, power]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h3 className="text-sm font-bold text-sky-400">Parameter Kelistrikan</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Voltase/Tegangan Listrik (V)</span>
              <span className="font-mono text-sky-300">{voltage} Volt</span>
            </div>
            <input
              type="range"
              min="1"
              max="48"
              value={voltage}
              onChange={(e) => setVoltage(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-sky-500 rounded"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Hambatan Jenis Semikonduktor (R)</span>
              <span className="font-mono text-sky-300">{resistance} Ohm</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={resistance}
              onChange={(e) => setResistance(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-sky-500 rounded"
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 mt-4 text-[11px] leading-relaxed text-slate-400">
          <div className="font-semibold text-slate-300 flex items-center space-x-1">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>Asas Joule Heating</span>
          </div>
          <span>W = I² · R · t</span>
          <span>Semakin kencang laju elektron yang mengalir (naiknya arus I), benturan elektron pada dinding atom resistor R melepaskan kalor termal disipasi kian membara red-hot!</span>
        </div>
      </div>

      {/* Electron Circuit Frame Canvas */}
      <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-center relative">
        <canvas ref={canvasRef} width="240" height="200" className="bg-slate-900 border border-slate-800 rounded-xl" />
        <span className="absolute right-6 text-[10px] text-rose-400 tracking-wide font-mono italic">
          Resistor {resistance} Ω
        </span>
      </div>

      {/* Result Metrics */}
      <div className="lg:col-span-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Status Hidup Sinyal</h4>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Laju Arus Listrik (I)</span>
            <div className="font-mono text-2xl font-bold text-sky-400">{current.toFixed(2)} Ampere</div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Daya Listrik Terdisipasi (P)</span>
            <div className="font-mono text-xl font-bold text-orange-400">{power.toFixed(1)} Watt (J/s)</div>
          </div>

          <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">Beban Hambat</span>
            <span className="text-amber-500 font-bold">{resistance} Ω</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. GELOMBANG BUNYI SIMULATOR (Oscilloscope wave & desibel)
// -------------------------------------------------------------
function BunyiWaveSim() {
  const [freq, setFreq] = useState(440); // Hz
  const [amp, setAmp] = useState(0.5); // arb
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Decibel Calculation
  const intensity = amp * amp * (freq / 400); // arbitrary approximation
  const decibel = Math.round(10 * Math.log10(intensity * 1e10));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let timeOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1;

      // Draw Oscilloscope Grid lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw horizontal baseline
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Sine Wave Drawing representing acoustic pressure fluctuation
      ctx.beginPath();
      ctx.strokeStyle = "#10b981"; // neon green
      ctx.lineWidth = 3.5;

      const scaleX = freq / 80; // wave frequency scale on canvas
      const scaleY = amp * 70; // height of wave amplitude on canvas

      timeOffset += 0.15; // wave animation speed

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * 0.05 * scaleX - timeOffset) * scaleY;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [freq, amp]);

  const soundLevelMapping = (db: number) => {
    if (db < 40) return { label: "Perpustakaan sepi ultra sunyi", style: "text-cyan-400" };
    if (db < 65) return { label: "Percakapan wajar normal", style: "text-green-400" };
    if (db < 85) return { label: "Kebingungan lalu lintas sibuk kota", style: "text-yellow-400" };
    if (db < 110) return { label: "Konser rock stadion keras gila", style: "text-orange-500" };
    return { label: "Pesawat jet lepas landas berbahaya", style: "text-red-500" };
  };

  const levelInfo = soundLevelMapping(decibel);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h3 className="text-sm font-bold text-emerald-400">Variabel Suara</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Frekuensi Getaran Bunyi (f)</span>
              <span className="font-mono text-emerald-300">{freq} Hertz (Hz)</span>
            </div>
            <input
              type="range"
              min="100"
              max="1500"
              step="10"
              value={freq}
              onChange={(e) => setFreq(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-emerald-500 rounded"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Amplitudo Simpangan (A)</span>
              <span className="font-mono text-emerald-300">{amp} m</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="1.0"
              step="0.05"
              value={amp}
              onChange={(e) => setAmp(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-emerald-500 rounded"
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 mt-4 text-[11px] leading-relaxed text-slate-400">
          <div className="font-semibold text-slate-300 flex items-center space-x-1">
            <Speaker className="w-4 h-4 text-emerald-400" />
            <span>Ketinggian Amplitudo Acara</span>
          </div>
          <span>I ∝ A²</span>
          <span>Intensitas energi suara berbanding lurus kuadrat amplitudo. Melembutkan suara menyederhanakan volume polusi akustik sekeliling.</span>
        </div>
      </div>

      {/* Oscilloscope screen frame */}
      <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-center relative">
        <canvas ref={canvasRef} width="240" height="200" className="bg-slate-900 border border-slate-800 rounded-xl" />
        <span className="absolute top-6 left-6 text-[9px] text-emerald-500 bg-slate-950 px-2 py-0.5 rounded border border-emerald-500/20 tracking-widest font-mono">
          CH_A: SINE_WAVE
        </span>
      </div>

      {/* Sound Decibels meter */}
      <div className="lg:col-span-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Desibel Meter</h4>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Tingkat Intensitas Bunyi</span>
            <div className="font-mono text-3xl font-bold text-emerald-400">{decibel} dB</div>
          </div>

          <div className="space-y-1.5 border-t border-slate-800 pt-3">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Efek Terhadap Kesehatan</span>
            <div className={`font-bold text-xs leading-relaxed ${levelInfo.style}`}>
              {levelInfo.label}
            </div>
            {decibel >= 110 && (
              <div className="flex items-center space-x-1.5 text-[9px] text-red-400">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Batas bahaya pendengaran!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. SOLAR PANEL EFFICIENCY SIMULATOR (Matahari, Panel, Sudut)
// -------------------------------------------------------------
function SuryaPanelSim() {
  const [intensity, setIntensity] = useState(1000); // W/m²
  const [angle, setAngle] = useState(0); // degrees
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Output power computation: Ps = I * A * eta * cos(angle)
  const eta = 0.2; // 20%
  const A = 2; // m²
  const angleRad = (angle * Math.PI) / 180;
  const powerOutput = intensity * A * eta * Math.cos(angleRad); // Watts

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height - 40;

    // Draw Sun representing solar source on top left
    ctx.beginPath();
    ctx.arc(44, 44, 18, 0, 2 * Math.PI);
    ctx.fillStyle = "#f59e0b"; // yellow sun
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#f59e0b";
    ctx.fill();
    ctx.shadowBlur = 0; // reset

    // Draw solar beams shooting down to panel
    ctx.beginPath();
    ctx.strokeStyle = "rgba(245, 158, 11, 0.35)"; // translucent gold beam
    ctx.lineWidth = 2;
    for (let xOffset = -50; xOffset <= 50; xOffset += 20) {
      ctx.moveTo(44, 44);
      ctx.lineTo(cx + xOffset, cy);
    }
    ctx.stroke();

    // Draw solar panel structure rotating based on angle
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angleRad); // rotate panel based on angle slider

    // Draw panel frame
    ctx.fillStyle = "#1e293b"; // base
    ctx.fillRect(-45, -6, 90, 12);
    // Draw cells (blue silicon modules)
    ctx.fillStyle = "#1e40af";
    ctx.fillRect(-40, -4, 24, 8);
    ctx.fillRect(-12, -4, 24, 8);
    ctx.fillRect(16, -4, 24, 8);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeRect(-45, -6, 90, 12);

    ctx.restore();

    // Ground leg support
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, canvas.height - 10);
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 4;
    ctx.stroke();
  }, [intensity, angle, angleRad]);

  const chargingStatus = (power: number) => {
    if (power < 50) return { label: "Mati / Gelap total", style: "text-slate-400" };
    if (power < 150) return { label: "Arus lambat lemah", style: "text-yellow-400" };
    if (power < 300) return { label: "Arus stabil normal", style: "text-green-400" };
    return { label: "Arus deras pengisian cepat terpanggang", style: "text-emerald-400" };
  };

  const currentLevel = chargingStatus(powerOutput);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="border-b border-slate-800 pb-2">
          <h3 className="text-sm font-bold text-amber-400">Parameter Radiasi & Sudut</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Intensitas Terik Surya (I)</span>
              <span className="font-mono text-amber-300">{intensity} W/m²</span>
            </div>
            <input
              type="range"
              min="10"
              max="2000"
              step="50"
              value={intensity}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-amber-500 rounded"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Sudut Kemiringan Panel (θ)</span>
              <span className="font-mono text-amber-300">{angle} Derajat</span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 accent-amber-500 rounded"
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 mt-4 text-[11px] leading-relaxed text-slate-400">
          <div className="font-semibold text-slate-300 flex items-center space-x-1">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Optimalisasi Sudut Kosinus</span>
          </div>
          <span>P = I · A · η · cos(θ)</span>
          <span>Sudut panel surya wajib tegak lurus (0 derajat) terhadap arah rambat sinar surya sasar agar koefisien cos(θ) bernilai 1.0 penuh demi tangkapan listrik optimal!</span>
        </div>
      </div>

      {/* Sun ray projecting canvas space */}
      <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-center relative">
        <canvas ref={canvasRef} width="240" height="200" className="bg-slate-900 border border-slate-800 rounded-xl" />
        <span className="absolute top-6 right-6 text-[10px] text-amber-400 tracking-wide font-mono">
          Efisiensi η = 20%
        </span>
      </div>

      {/* Solar Panel energy stats */}
      <div className="lg:col-span-3 bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Listrik Diproduksi</h4>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400">Arus Daya Bersih PLTS (P)</span>
            <div className="font-mono text-2xl font-bold text-emerald-400">{powerOutput.toFixed(1)} Watt</div>
          </div>

          <div className="space-y-1.5 border-t border-slate-800 pt-3">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Status Pengisian Baterai</span>
            <div className={`font-bold text-xs leading-relaxed ${currentLevel.style}`}>
              {currentLevel.label}
            </div>
            {powerOutput >= 300 && (
              <div className="text-[10px] text-amber-300 animate-pulse font-semibold mt-1">
                ⭐ Pengisian daya listrik optimal!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
