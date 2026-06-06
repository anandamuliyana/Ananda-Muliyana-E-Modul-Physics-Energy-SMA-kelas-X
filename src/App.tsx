import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Book, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  BookOpen, 
  Calculator, 
  Lightbulb, 
  Users, 
  ClipboardCheck, 
  Layers, 
  Bookmark, 
  Flame, 
  ArrowRight, 
  Compass, 
  History, 
  Atom, 
  HelpCircle, 
  Cpu, 
  CheckCircle,
  FileText,
  Sun,
  Sparkles,
  Zap
} from "lucide-react";

import { 
  identitasModul, 
  petunjukPenggunaan,
  filosofiModul, 
  capaianPembelajaran, 
  tujuanPembelajaran, 
  profilPancasila, 
  latarBelakang, 
  researchGaps, 
  noveltyModul, 
  pblAlasan, 
  peranPBLTable
} from "./data/introData";
import { islamicPerspective, scholarsContributions, quranVerses } from "./data/quranData";
import { energyConcepts } from "./data/energyData";
import { pblTheories, pblSyntaxList } from "./data/pblData";
import { derivativesData } from "./data/derivativesData";
import { formatMathFormula } from "./utils/formulaFormatter";

import InteractiveCalculator from "./components/InteractiveCalculator";
import InteractiveSimulation from "./components/InteractiveSimulation";
import InteractiveLKPD from "./components/InteractiveLKPD";
import HotsQuiz from "./components/HotsQuiz";
import Glossary from "./components/Glossary";

type SidebarSection = 
  | "sampul"
  | "identitas"
  | "inovasi"
  | "novelty"
  | "petunjuk"
  | "bab1-intro"
  | "bab2-quranic"
  | "bab3-konsep-energi"
  | "bab4-teori-pbl"
  | "sims"
  | "lkpd"
  | "quiz"
  | "glosarium";

export default function App() {
  const [activeSection, setActiveSection] = useState<SidebarSection>("sampul");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedEnergyId, setSelectedEnergyId] = useState<string | null>(null);
  const [selectedDerivIdx, setSelectedDerivIdx] = useState<number>(0);
  const [selectedInovasiIdx, setSelectedInovasiIdx] = useState<number>(0);
  const [selectedInovasiLayer, setSelectedInovasiLayer] = useState<number>(0);
  const [selectedNoveltyIdx, setSelectedNoveltyIdx] = useState<number>(0);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Jump helper
  const jumpTo = (section: SidebarSection, energyId: string | null = null) => {
    setActiveSection(section);
    if (energyId) {
      setSelectedEnergyId(energyId);
      setSelectedDerivIdx(0);
    }
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-natural-bg font-sans flex text-natural-text">
      
      {/* --- SIDEBAR TABLE OF CONTENTS --- */}
      <aside className={`fixed inset-y-0 left-0 w-80 bg-[#FAF9F6] text-natural-text border-r border-natural-border z-50 flex flex-col justify-between transition-transform duration-300 transform lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        {/* Header Branding */}
        <div className="p-5 border-b border-natural-border flex items-center justify-between bg-white/50 backdrop-blur-sm">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 bg-natural-primary rounded-full flex items-center justify-center text-white font-bold font-serif shadow-sm">
              Φ
            </div>
            <div>
              <h1 className="text-sm font-bold text-natural-heading tracking-tight">E-MODUL FISIKA PQIL</h1>
              <span className="text-[9px] text-[#8C897A] font-bold tracking-[0.14em] uppercase font-sans">PBL Quranic Integrated</span>
            </div>
          </div>
          <button className="lg:hidden p-1.5 text-natural-heading hover:opacity-70" onClick={toggleSidebar}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Map Index */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          
          {/* Kelompok A: Pengantar */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">A. Pengantar & Karakteristik</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("sampul")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "sampul" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Book className="w-3.5 h-3.5" />
                <span>Sampul Modul Utama</span>
              </button>
              <button
                onClick={() => jumpTo("identitas")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "identitas" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Identitas & Capaian Belajar</span>
              </button>
              <button
                onClick={() => jumpTo("inovasi")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "inovasi" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Inovasi E-Modul Utama</span>
              </button>
              <button
                onClick={() => jumpTo("novelty")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "novelty" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                <span>Novelty (Kebaruan) Modul</span>
              </button>
              <button
                onClick={() => jumpTo("petunjuk")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "petunjuk" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Filosofi & Petunjuk Belajar</span>
              </button>
            </div>
          </div>

          {/* Kelompok B: Bab I Pendahuluan */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">B. Pendahuluan (Bab I)</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("bab1-intro")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "bab1-intro" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <History className="w-3.5 h-3.5" />
                <span>Rasional, Gaps & Desain PBL</span>
              </button>
            </div>
          </div>

          {/* Kelompok C: Bab II Teologi Islam */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">C. Integrasi Al-Qur'an (Bab II)</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("bab2-quranic")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "bab2-quranic" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Sains Islam & Kajian Tafsir</span>
              </button>
            </div>
          </div>

          {/* Kelompok D: Bab III 15 Konsep Energi */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">D. Materi Inti (Bab III)</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("bab3-konsep-energi")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                  activeSection === "bab3-konsep-energi" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Atom className="w-3.5 h-3.5" />
                  <span>15 Teori & Penghitungan</span>
                </span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                  activeSection === "bab3-konsep-energi" ? "bg-natural-active/50 text-white" : "bg-natural-secondary text-[#5A5A40]"
                }`}>15</span>
              </button>
            </div>
          </div>

          {/* Kelompok E: Bab IV Teori PBL & LKPD */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">E. Desain PBL & LKPD</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("bab4-teori-pbl")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "bab4-teori-pbl" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Landasan Pedagogis PBL</span>
              </button>
              <button
                onClick={() => jumpTo("lkpd")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "lkpd" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>LKPD Digital Kelompok</span>
              </button>
            </div>
          </div>

          {/* Kelompok F: Praktikum Sims, Evaluasi & Kamus */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#8C897A] uppercase tracking-widest px-2.5 font-sans">F. Laboratorium & Evaluasi</span>
            <div className="space-y-0.5">
              <button
                onClick={() => jumpTo("sims")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "sims" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Praktikum Virtual (5 Labs)</span>
              </button>
              <button
                onClick={() => jumpTo("quiz")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "quiz" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Uji Kognitif HOTS (Sumatif)</span>
              </button>
              <button
                onClick={() => jumpTo("glosarium")}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  activeSection === "glosarium" ? "bg-natural-primary text-white shadow" : "hover:bg-natural-secondary text-[#5A5A40]"
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Glosarium Istilah (100+)</span>
              </button>
            </div>
          </div>

        </nav>


      </aside>

      {/* --- MAIN PAGE VIEW --- */}
      <div className="flex-1 lg:pl-80 flex flex-col min-h-screen">
        
        {/* Mobile Sticky Navbar Header */}
        <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-natural-border px-5 py-4 flex items-center justify-between lg:hidden z-40">
          <div className="flex items-center space-x-2">
            <button className="p-1.5 text-natural-heading hover:bg-natural-secondary rounded" onClick={toggleSidebar}>
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-sm font-bold text-natural-heading font-serif">E-Modul Fisika Qur'ani</span>
          </div>
          <span className="text-[10px] font-bold bg-natural-secondary text-natural-primary px-2.5 py-0.5 rounded-full font-sans">PQIL Fase E</span>
        </header>

        {/* Dynamic page area */}
        <main className="flex-1 p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-auto space-y-8"
            >
              
              {/* === SECTION 1: COVER BOARD === */}
              {activeSection === "sampul" && (
                <div className="relative bg-gradient-to-b from-[#09222E] via-[#0D4434] to-[#051A14] rounded-[48px] p-6 md:p-12 text-white overflow-hidden shadow-2xl border border-white/10 select-none">
                  
                  {/* BACKGROUND ORNAMENTS & EFFECTS */}
                  {/* Islamic Geometric Pattern Aura (Upper-Right Top Corner) */}
                  <div className="absolute right-0 top-0 w-72 h-72 opacity-25 pointer-events-none mix-blend-color-dodge">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-400" fill="none" strokeWidth="0.4">
                      {/* Generates a complex nested Islamic Star star rosette */}
                      <circle cx="50" cy="50" r="45" strokeDasharray="1 1" />
                      <polygon points="50,5 91,35 75,85 25,85 9,35" />
                      <polygon points="50,95 9,65 25,15 75,15 91,65" />
                      <polygon points="50,5 79,26 91,59 75,85 38,94 12,79 9,45 23,15" />
                      <polygon points="50,95 21,74 9,41 25,15 62,6 88,21 91,55 77,85" />
                      {/* Concentric rings and radiant nodes */}
                      <circle cx="50" cy="50" r="30" strokeWidth="0.2" />
                      <circle cx="50" cy="50" r="15" strokeWidth="0.2" />
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x = 50 + 40 * Math.cos(angle);
                        const y = 50 + 40 * Math.sin(angle);
                        return <line key={i} x1="50" y1="50" x2={x} y2={y} strokeWidth="0.1" />;
                      })}
                    </svg>
                  </div>

                  {/* Neon Green Energy Flow Wave Trail traversing the mod space */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg viewBox="0 0 1440 800" className="absolute w-full h-full opacity-60 mix-blend-screen" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M-100,500 C400,650 300,200 800,450 C1300,700 1200,300 1600,400" stroke="url(#neonGreenGrad)" strokeWidth="6" className="filter drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      <path d="M-100,450 C380,600 280,180 780,420 C1280,660 1180,280 1580,380" stroke="url(#neonGoldGrad)" strokeWidth="1.5" className="filter drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" strokeDasharray="10 5" />
                      <defs>
                        <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#34D399" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        <linearGradient id="neonGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* UPPER-LEFT: GLOWING SOLAR LIGHT & INTELLECTUAL ENERGY SOURCE */}
                  <div className="absolute left-4 top-4 md:left-12 md:top-12 z-20 pointer-events-none group">
                    <div className="relative">
                      {/* Solar Flares & Glow ring */}
                      <div className="absolute -inset-6 bg-amber-400/30 rounded-full blur-2xl animate-pulse" />
                      <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl" />
                      
                      {/* Sun Graphic structure */}
                      <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">
                        <circle cx="50" cy="50" r="18" fill="url(#sunInnerGrad)" />
                        {/* Sunbeams (radiating spikes) */}
                        {[...Array(12)].map((_, i) => {
                          const rOuter = 38;
                          const rInner = 24;
                          const angle = (i * 30 * Math.PI) / 180;
                          const x1 = 50 + rInner * Math.cos(angle);
                          const y1 = 50 + rInner * Math.sin(angle);
                          const x2 = 50 + rOuter * Math.cos(angle);
                          const y2 = 50 + rOuter * Math.sin(angle);
                          return (
                            <line
                              key={i}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#FBBF24"
                              strokeWidth={i % 2 === 0 ? "3.5" : "2"}
                              strokeLinecap="round"
                            />
                          );
                        })}
                        <defs>
                          <radialGradient id="sunInnerGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FFFBEB" />
                            <stop offset="60%" stopColor="#FBBF24" />
                            <stop offset="100%" stopColor="#D97706" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* UPPER-RIGHT: EMBOSSED CALLIGRAPHIC EMBLEM OF SURAH (QUR'ANIC ORBIT STAMP) */}
                  <div className="absolute right-4 top-4 md:right-12 md:top-10 z-20 pointer-events-none">
                    <div className="relative flex flex-col items-center">
                      <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-dashed border-amber-400/40 rounded-full flex items-center justify-center p-1.5 animate-[spin_50s_linear_infinite]">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-300">
                          {/* Inner star and decorative circular scriptures text placeholder */}
                          <circle cx="50" cy="50" r="41" fill="none" stroke="#D97706" strokeWidth="0.8" />
                          <circle cx="50" cy="50" r="37" fill="none" stroke="#FBBF24" strokeWidth="1.2" strokeDasharray="3 3" />
                          <path id="circlePath" d="M 50,50 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
                          <text fontSize="5.5" className="font-serif font-bold fill-amber-300/90 tracking-widest">
                            <textPath href="#circlePath">
                              • AL-QUR'AN AL-KARIM • SUNNATULLAH • MIZAN •
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-center">
                        <span className="font-serif font-extrabold text-[8px] md:text-[10px] text-amber-300 bg-black/40 px-2 py-0.5 rounded-md border border-amber-500/20 shadow-xs">
                          QS 16:12
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* LEFT FLANK BACKGROUND: INTEGRATED ECO-ENERGY SYSTEM (SILHOUETTES) */}
                  <div className="absolute left-6 top-24 md:top-36 opacity-35 hover:opacity-50 transition-opacity duration-500 pointer-events-none z-10 hidden sm:block">
                    {/* Solar arrays + Wind Turbines with spinning blades! */}
                    <div className="relative space-y-6">
                      {/* Wind Turbine 1 */}
                      <div className="relative flex flex-col items-center select-none" style={{ marginLeft: "20px" }}>
                        <div className="w-1 h-14 bg-slate-300/80 rounded-t" />
                        <div className="absolute top-0 w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="w-10 h-10 text-slate-100 animate-[spin_8s_linear_infinite]">
                            <circle cx="50" cy="50" r="4" fill="#E2E8F0" />
                            {/* Three blades */}
                            <path d="M50,50 C50,30 46,10 50,5 C54,10 50,30 50,50 Z" fill="#F1F5F9" />
                            <path d="M50,50 C30,40 10,44 5,40 C10,36 30,40 50,50 Z" transform="rotate(120 50 50)" fill="#F1F5F9" />
                            <path d="M50,50 C30,60 10,56 5,60 C10,64 30,60 50,50 Z" transform="rotate(240 50 50)" fill="#F1F5F9" />
                          </svg>
                        </div>
                      </div>

                      {/* Power grid towers and PV Panels */}
                      <div className="flex items-end space-x-3">
                        {/* High voltage Pylon vector */}
                        <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-300/60" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M50,5 L30,95 M50,5 L70,95 M10,95 L90,95" />
                          <path d="M20,70 L80,70 M25,50 L75,50 M35,25 L65,25" />
                          <path d="M20,70 L50,50 M80,70 L50,50 M25,50 L50,25 M75,50 L50,25" />
                          <line x1="15" y1="50" x2="15" y2="60" strokeWidth="1.5" />
                          <line x1="85" y1="50" x2="85" y2="60" strokeWidth="1.5" />
                        </svg>

                        {/* Photovoltaic Solar array panel */}
                        <div className="border border-slate-300/40 bg-[#0c2e27]/50 p-1.5 rounded-lg transform -skew-x-12 flex flex-col space-y-1">
                          <div className="grid grid-cols-3 gap-0.5">
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="w-2.5 h-1.5 bg-cyan-500/30 border border-cyan-400/20" />
                            ))}
                          </div>
                          <div className="w-0.5 h-3 bg-slate-300/70 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HEADER & MAIN TITLES CONTAINER */}
                  <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center flex flex-col items-center pt-20 md:pt-16 pb-8">
                    
                    {/* Top Branding Section */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-300 tracking-[0.25em] uppercase font-sans animate-pulse">
                        E-MODUL INTERAKTIF DIGITAL
                      </span>
                      
                      {/* Heavy Glow "FISIKA" Title */}
                      <div className="relative">
                        <h2 className="text-5xl md:text-8xl font-black tracking-widest text-[#00E5FF] font-sans filter drop-shadow-[0_2px_15px_rgba(0,229,255,0.75)] select-none uppercase">
                          FISIKA
                        </h2>
                        {/* Core text overlay for glossy effect */}
                        <h2 className="absolute inset-0 text-5xl md:text-8xl font-black tracking-widest text-white font-sans mix-blend-overlay filter blur-[1px] select-none uppercase">
                          FISIKA
                        </h2>
                      </div>
                    </div>

                    {/* Level Tag Capsule */}
                    <div className="inline-flex border-2 border-[#10B981]/50 bg-black/60 px-6 py-2 rounded-2xl shadow-xl shadow-black/40 items-center justify-center space-x-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                      <span className="text-[11px] md:text-xs font-extrabold text-emerald-300 font-mono tracking-widest uppercase">
                        KELAS X SMA | FASE E
                      </span>
                    </div>

                    {/* Main Theme: ENERGI DALAM KEHIDUPAN */}
                    <div className="space-y-4 max-w-2xl">
                      <h1 className="text-4xl md:text-7xl font-sans font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] select-none bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text">
                        Energi Dalam <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white">Kehidupan</span>
                      </h1>
                    </div>

                    {/* Educational Framework Subtext Capsule */}
                    <div className="w-full max-w-3xl bg-[#06261F]/90 border-2 border-emerald-500/40 p-4 md:p-5 rounded-3xl tracking-wide shadow-2xl relative">
                      <div className="absolute -top-3 left-4 bg-emerald-500 text-neutral-primary px-3 py-0.5 rounded-full text-[9px] font-extrabold uppercase font-sans tracking-wider">
                        Sintaks Kurikulum Merdeka
                      </div>
                      <div className="text-center font-sans space-y-1">
                        <p className="text-[10px] md:text-sm font-extrabold text-emerald-300 tracking-wider">
                          BERBASIS MODEL PROBLEM BASED LEARNING (PBL)
                        </p>
                        <p className="text-[9px] md:text-xs text-amber-200 font-medium tracking-widest">
                          TERINTEGRASI NILAI-NILAI AL-QUR'AN & PROFIL PELAJAR PANCASILA
                        </p>
                      </div>
                    </div>

                    {/* INTERACTIVE BADGES ROW: COMPASS & HOLY QUR'AN */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl pt-4">
                      
                      {/* Left Badge: PBL Compass Widget */}
                      <div className="flex items-center space-x-4 bg-black/45 border border-white/10 p-4 rounded-3xl shadow-lg relative group">
                        {/* Decorative background radar circle */}
                        <div className="absolute inset-4 border border-dashed border-cyan-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
                        
                        {/* The Compass circle layout */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-[#0b2b35] border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-md shadow-black/50 overflow-hidden">
                          {/* Outer Dial Degrees */}
                          <div className="absolute inset-0.5 border border-cyan-300/30 rounded-full flex items-center justify-center">
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                              <div key={deg} className="absolute w-full text-center text-[5px] text-cyan-300/40" style={{ transform: `rotate(${deg}deg)` }}>
                                |
                              </div>
                            ))}
                          </div>

                          {/* Directions labels */}
                          <span className="absolute top-1 text-[7px] font-extrabold text-[#00E5FF] font-sans">N</span>
                          <span className="absolute bottom-1 text-[7px] font-extrabold text-cyan-300 font-sans">S</span>
                          <span className="absolute right-1 text-[7px] font-extrabold text-cyan-300 font-sans">E</span>
                          <span className="absolute left-1 text-[7px] font-extrabold text-cyan-300 font-sans">W</span>
                          
                          {/* Spinning needle on hover */}
                          <div className="relative w-1.5 h-12 flex items-center justify-center transition-transform duration-1000 ease-out group-hover:rotate-[315deg] rotate-[45deg]">
                            {/* Red north arrow */}
                            <div className="absolute top-0 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[24px] border-b-red-500 filter drop-shadow-[0_0_2px_red]" />
                            {/* Blue south arrow */}
                            <div className="absolute bottom-0 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[24px] border-t-cyan-300" />
                            {/* Central bronze node */}
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full z-10 border border-amber-600" />
                          </div>
                        </div>

                        <div className="text-left space-y-1">
                          <span className="text-[10px] font-extrabold text-cyan-400 block tracking-widest font-sans uppercase">
                            PROBLEM BASED LEARNING
                          </span>
                          <p className="text-[11px] text-slate-300 font-serif leading-relaxed line-clamp-2">
                            Penyelidikan saintifik inovatif dengan navigasi nalar kritis memecahkan masalah kontekstual.
                          </p>
                        </div>
                      </div>

                      {/* Right Badge: Shining Open Mushaf */}
                      <div className="flex items-center space-x-4 bg-black/45 border border-white/10 p-4 rounded-3xl shadow-lg relative group overflow-hidden">
                        {/* Glow beam emitter effect background */}
                        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-amber-500/20 to-transparent blur-md group-hover:h-16 transition-all duration-700" />
                        
                        {/* Glowing Book representation */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-gradient-to-b from-amber-950/60 to-black/80 border-2 border-amber-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                          {/* Radiant lightrays radiating upward */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent opacity-80 group-hover:scale-125 transition-all duration-1000" />
                          
                          {/* Simple Book SVG sitting on its golden support */}
                          <div className="relative z-10 space-y-1 flex flex-col items-center">
                            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-amber-300 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.7)] animate-pulse" />
                            <div className="w-6 h-1.5 border-t border-b border-amber-400/50 rounded-sm" />
                          </div>
                        </div>

                        <div className="text-left space-y-1">
                          <span className="text-[10px] font-extrabold text-amber-300 block tracking-widest font-sans uppercase">
                            INTEGRASI AL-QUR'AN
                          </span>
                          <p className="text-[11px] text-slate-300 font-serif leading-relaxed line-clamp-2">
                            Membuka petunjuk takdir keseimbangan alam semesta kauniyah terpadu akhlaqul karimah.
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* NEW COMPLETE AUTHOR BADGE CARD FROM THE ACTUAL IMAGE */}
                    <div className="w-full max-w-md mt-6">
                      <div className="relative bg-gradient-to-r from-[#011C1A]/95 to-[#043328]/95 border-2 border-emerald-500/50 rounded-[28px] p-5 shadow-2xl overflow-hidden text-center flex flex-col items-center">
                        {/* Gold borders and corners accents */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400/50 pointer-events-none" />
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400/50 pointer-events-none" />
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400/50 pointer-events-none" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400/50 pointer-events-none" />
                        
                        {/* Author text content */}
                        <div className="space-y-1">
                          <span className="text-[9px] md:text-[10px] text-amber-300 font-sans font-bold uppercase tracking-[0.3em]">
                            DISUSUN OLEH:
                          </span>
                          <h3 className="text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200 tracking-wide font-sans">
                            ANANDA MULIYANA
                          </h3>
                          <div className="text-[9px] md:text-xs text-slate-300 font-mono tracking-widest bg-black/40 px-3 py-1 rounded-xl border border-white/5 inline-block">
                            NPM. 250920017100003
                          </div>
                        </div>

                        {/* CUTE SMILING RETRO SUN FACE (BOTTOM-RIGHT COMPONENT OF THE IMAGE CARD) */}
                        <div className="absolute right-3 bottom-2 leading-none pointer-events-none select-none">
                          <svg viewBox="0 0 100 100" className="w-8 h-8 text-amber-400 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)] animate-[spin_40s_linear_infinite]">
                            <circle cx="50" cy="50" r="28" fill="#FBBF24" />
                            {/* Solar rays */}
                            {[...Array(16)].map((_, idx) => {
                              const angle = (idx * 22.5 * Math.PI) / 180;
                              const x1 = 50 + 26 * Math.cos(angle);
                              const y1 = 50 + 26 * Math.sin(angle);
                              const x2 = 50 + 38 * Math.cos(angle);
                              const y2 = 50 + 38 * Math.sin(angle);
                              return (
                                <line
                                  key={idx}
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke="#FBBF24"
                                  strokeWidth="3.5"
                                  strokeLinecap="round"
                                />
                              );
                            })}
                            {/* Cute smiling face outlines */}
                            {/* Eyes */}
                            <ellipse cx="40" cy="45" rx="3" ry="4" fill="#6B21A8" />
                            <ellipse cx="60" cy="45" rx="3" ry="4" fill="#6B21A8" />
                            {/* Cheeks */}
                            <circle cx="34" cy="53" r="3.5" fill="#EF4444" opacity="0.6" />
                            <circle cx="66" cy="53" r="3.5" fill="#EF4444" opacity="0.6" />
                            {/* Smiling mouth */}
                            <path d="M 40,55 A 10,10 0 0,0 60,55" fill="none" stroke="#6B21A8" strokeWidth="3.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* DIRECT BOOK LAUNCH ACTION HUB */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md pt-5 font-sans z-25 relative">
                      <button 
                        onClick={() => jumpTo("identitas")}
                        className="bg-white text-[#0D4434] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-[#10B981]/20 flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>Mulai Baca Modul</span>
                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                      </button>
                      <button 
                        onClick={() => jumpTo("sims")}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer backdrop-blur-md transform hover:-translate-y-0.5"
                      >
                        Buka Lab Virtual
                      </button>
                    </div>

                  </div>
                </div>
              )}
              {/* === SECTION 2: IDENTITAS & CAPAIAN === */}
              {activeSection === "identitas" && (
                <div className="space-y-6">
                  {/* Identitas Card */}
                  <div className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 md:p-8 space-y-6">
                    <h1 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Karakteristik Umum & Identitas Modul</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                      <div className="space-y-4">
                        <h3 className="font-bold text-natural-primary font-sans uppercase text-xs tracking-wider">Identitas Struktur</h3>
                        <div className="space-y-2 pt-1">
                          {[
                            { label: "Nama Modul", val: identitasModul.namaModul },
                            { label: "Mata Pelajaran", val: identitasModul.mataPelajaran },
                            { label: "Kelas & Jenjang", val: identitasModul.kelasJenjang },
                            { label: "Semester", val: identitasModul.semester },
                            { label: "Alokasi Waktu", val: identitasModul.alokasiWaktu },
                            { label: "Kurikulum", val: identitasModul.kurikulum },
                            { label: "Fase Berkas", val: identitasModul.fase },
                            { label: "Pendekatan Belajar", val: identitasModul.pendekatan },
                            { label: "Karakteristik", val: identitasModul.karakteristik },
                            { label: "Organisasi Materi", val: identitasModul.organisasiMateri },
                            { label: "Penyusun Utama", val: identitasModul.penyusun },
                            { label: "Tahun Terbit", val: identitasModul.tahun },
                          ].map((item, index) => (
                            <div key={index} className="border-b border-natural-border/30 pb-2 flex flex-col sm:flex-row justify-between text-xs gap-1">
                              <span className="text-[#8C897A] font-medium font-sans shrink-0">{item.label}</span>
                              <span className="font-semibold text-natural-text sm:text-right">{item.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-5 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <h3 className="font-bold text-natural-heading font-sans uppercase text-xs tracking-wider">Capaian Pembelajaran (CP Fase E)</h3>
                          <p className="text-xs text-natural-text leading-relaxed bg-[#FAF9F6] p-4 border rounded-xl border-natural-border/50 text-justify font-serif">
                            {capaianPembelajaran}
                          </p>
                        </div>

                        {/* Tujuan Pembelajaran (TP) */}
                        <div className="space-y-2.5">
                          <h3 className="font-bold text-natural-accent font-sans uppercase text-xs tracking-wider">Tujuan Pembelajaran Khusus (TP)</h3>
                          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                            {tujuanPembelajaran.map((tp, tpIdx) => (
                              <div key={tpIdx} className="bg-natural-bg/40 p-2.5 rounded-lg border border-natural-border/30 text-[11px] leading-relaxed text-natural-text font-serif">
                                <span className="font-sans font-bold text-natural-primary block mb-0.5 text-[10px]">Tujuan {tpIdx + 1}</span>
                                <span>{tp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profil Pelajar Pancasila indicators */}
                  <div className="bg-white rounded-[32px] p-6 md:p-8 border border-natural-border shadow-sm space-y-4">
                    <h2 className="text-lg font-bold text-natural-heading font-serif">Dimensi Profil Pelajar Pancasila Rahmatan Lil-Alamin</h2>
                    <p className="text-xs text-[#8C897A] font-serif">Integrasi karakter kebangsaan nasional Indonesia dalam nafas aktivitas sains dan keaktifan kelas:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-serif">
                      {profilPancasila.map((dim, idx) => (
                        <div key={idx} className="bg-[#FAF9F6] p-4 rounded-xl border border-natural-border/60 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs text-natural-primary font-bold bg-natural-secondary px-2 py-0.5 rounded">
                              0{idx + 1}
                            </span>
                            <h4 className="font-bold text-natural-heading text-xs font-sans">{dim.dimensi}</h4>
                          </div>
                          <div className="text-[11px] text-natural-text/90 space-y-1.5 pl-1">
                            <div>
                              <span className="font-bold text-natural-accent font-sans text-[10px] uppercase block">Indikator Kunci:</span>
                              <span className="text-justify leading-relaxed block">{dim.indikator}</span>
                            </div>
                            <div className="mt-1">
                              <span className="font-bold text-natural-primary font-sans text-[10px] uppercase block">Aktivitas di Modul:</span>
                              <span className="text-justify leading-relaxed block">{dim.aktivitas}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* === SECTION 3: INOVASI E-MODUL INTERAKTIF === */}
              {activeSection === "inovasi" && (
                <div className="space-y-8">
                  {/* Banner Header */}
                  <div className="bg-gradient-to-br from-natural-primary to-[#2C483F] rounded-[32px] p-6 md:p-10 text-white relative overflow-hidden shadow-lg border border-white/10">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10 space-y-3">
                      <span className="text-[10px] bg-natural-accent text-natural-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest inline-block font-sans">
                        Pilar Kebaruan Pembelajaran Transdisipliner
                      </span>
                      <h1 className="text-2xl md:text-4xl font-extrabold text-natural-secondary tracking-tight font-serif">
                        Empat Inovasi Utama E-Modul
                      </h1>
                      <p className="text-xs md:text-sm text-white/90 leading-relaxed max-w-3xl font-serif">
                        Kombinasi mutakhir dari landasan pembelajaran berbasis masalah (PBL), kedalaman tafsir ilmiah Al-Qur'an, praktikum virtual interaktif, dan kualifikasi tes HOTS multi-dimensi.
                      </p>
                    </div>
                  </div>

                  {/* 4 Innovations Tab Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        title: "Inovasi 1: Format Digital",
                        badge: "Digital & PBL",
                        short: "Laboratorium virtual PhET, LKPD modern & video orientasi kontekstual.",
                        color: "border-l-4 border-natural-accent",
                        activeBg: "bg-[#F3FAF7]"
                      },
                      {
                        title: "Inovasi 2: Struktur 5 Lapis",
                        badge: "Lima Lapis per Energi",
                        short: "Alur konsisten dari definisi rumus hingga perspektif integratif tafsir Al-Qur'an.",
                        color: "border-l-4 border-blue-500",
                        activeBg: "bg-[#EAF3FC]"
                      },
                      {
                        title: "Inovasi 3: Sintaks LKPD",
                        badge: "PBL & Refleksi",
                        short: "Lembar kerja 5 sintaks PBL terintegrasi esai kepemimpinan amanah Khalifah.",
                        color: "border-l-4 border-amber-500",
                        activeBg: "bg-[#FFF9EA]"
                      },
                      {
                        title: "Inovasi 4: Uji HOTS",
                        badge: "Evaluasi Multidimensi",
                        short: "Uji kognitif C2-C5 hibrida terpadu dengan basis Qur'anic Literacy.",
                        color: "border-l-4 border-purple-500",
                        activeBg: "bg-[#FAF3FF]"
                      }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedInovasiIdx(idx);
                          setSelectedInovasiLayer(0);
                        }}
                        className={`w-full text-left rounded-3xl p-5 border transition-all cursor-pointer flex flex-col justify-between h-full hover:shadow-md ${item.color} ${
                          selectedInovasiIdx === idx
                            ? "bg-white border-natural-primary shadow ring-1 ring-natural-primary/25"
                            : "bg-white/80 border-natural-border hover:bg-white"
                        }`}
                      >
                        <div className="space-y-2">
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider block w-fit ${
                            selectedInovasiIdx === idx 
                              ? "bg-natural-primary text-white" 
                              : "bg-[#FAF9F6] text-[#8C897A] border"
                          }`}>
                            {item.badge}
                          </span>
                          <h3 className={`font-bold text-sm tracking-tight font-serif ${
                            selectedInovasiIdx === idx ? "text-natural-primary" : "text-natural-heading"
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[11px] leading-relaxed text-[#5A5A40] mt-3 font-serif line-clamp-3">
                          {item.short}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Expansion Showcase Panel */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm">
                    {/* INOVASI 1 SECTION EXPANSION */}
                    {selectedInovasiIdx === 0 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-primary font-serif">
                              Inovasi 1: Format Digital Interaktif Berbasis PBL
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Solusi Edukasi Kaya Fitur Mengatasi Keterampilan Sains Teologis Luar Jaringan
                            </p>
                          </div>
                          <span className="text-[10px] bg-[#EAF5FE] text-natural-primary border px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Media Kaya Sensoris & Praktikum
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-natural-accent first-letter:mr-2 first-letter:float-left">
                          Modul hadir sebagai <strong>e-modul digital (bukan cetak)</strong> yang dilengkapi dengan instrumen-instrumen kaya interaktivitas: video orientasi kontekstual berbasis PBL, lembar LKPD digital responsif, dan simulasi PhET tersemat (<em>Energy Forms and Changes</em> & <em>Energy Skate Park</em>). Format ini dirancang secara orisinal guna mengatasi keterbatasan media pendukung fisik konvensional di Indonesia yang kerap memencilkan relasi fisis-teologis dalam modul sains.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-serif">
                          <div className="bg-natural-bg/30 p-5 rounded-2xl border border-natural-border/40 space-y-2">
                            <div className="w-8 h-8 bg-natural-primary rounded-full flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm font-sans">
                              01
                            </div>
                            <h4 className="font-bold text-natural-heading text-xs font-sans uppercase tracking-wider">Video Isu Kontekstual</h4>
                            <p className="text-[11px] leading-relaxed text-[#5A5A40] text-justify">
                              Dua klip video orientasi orisinal yang disematkan langsung untuk menantang nalar siswa menemukan disipasi daya real-life sebelum masuk ke detail matematis.
                            </p>
                          </div>

                          <div className="bg-natural-bg/30 p-5 rounded-2xl border border-natural-border/40 space-y-2">
                            <div className="w-8 h-8 bg-natural-primary rounded-full flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm font-sans">
                              02
                            </div>
                            <h4 className="font-bold text-natural-heading text-xs font-sans uppercase tracking-wider">LKPD Digital Tersemat</h4>
                            <p className="text-[11px] leading-relaxed text-[#5A5A40] text-justify">
                              Lembar kerja yang dapat diketik langsung di layar, menyimpan draft pekerjaan siswa secara lokal, dan mengesampingkan pemborosan kertas (Eco-Friendly).
                            </p>
                          </div>

                          <div className="bg-natural-bg/30 p-5 rounded-2xl border border-natural-border/40 space-y-2">
                            <div className="w-8 h-8 bg-natural-primary rounded-full flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm font-sans">
                              03
                            </div>
                            <h4 className="font-bold text-natural-heading text-xs font-sans uppercase tracking-wider">Virtual Labs Canvas</h4>
                            <p className="text-[11px] leading-relaxed text-[#5A5A40] text-justify">
                              5 simulator fisika berbasis interaksi kanvas yang memvisualisasikan hukum kelestarian mekanik, biogas, panel solar, dan termodinamika secara real-time.
                            </p>
                          </div>
                        </div>

                        {/* Interactive Direct Shortcuts */}
                        <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-natural-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
                          <div className="text-left space-y-1">
                            <span className="font-bold text-natural-primary uppercase tracking-wider block text-[10px]">Akses Laboratorium Digital Terintegrasi</span>
                            <p className="text-[11px] text-[#8C897A] font-serif">Buka langsung 5 jenis simulasi lab virtual orisinal yang disematkan dalam e-modul:</p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <button
                              onClick={() => jumpTo("sims")}
                              className="bg-natural-primary text-white hover:opacity-90 px-4 py-2 rounded-xl font-bold transition-all shadow-xs cursor-pointer"
                            >
                              Jelajahi Lab Virtual
                            </button>
                            <button
                              onClick={() => jumpTo("lkpd")}
                              className="bg-white text-natural-text hover:bg-natural-bg border border-natural-border px-4 py-2 rounded-xl font-bold transition-all cursor-pointer"
                            >
                              Buka LKPD Digital
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* INOVASI 2 SECTION EXPANSION (FIVE LAYERS) */}
                    {selectedInovasiIdx === 1 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-heading font-serif">
                              Inovasi 2: Struktur Konten Lima Lapis per Jenis Energi
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Konsep Orisinalitas Kedalaman Teoretis & Transdisipliner Epistemologis
                            </p>
                          </div>
                          <span className="text-[10px] bg-[#FCF3EB] text-natural-accent border px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Pola Orisinal 5 Lapisan
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-natural-accent first-letter:mr-2 first-letter:float-left">
                          Setiap jenis energi dalam modul ini tidak disajikan secara acak, melainkan diurai secara modular dan terstruktur dalam <strong>lima lapisan konten konsisten</strong> yang membimbing kesadaran kognitif ke ranah reflektif-teologis. Rancangan orisinal ini membedakan secara kontras e-modul buatan kami dari seluruh buku teks fisika konvensional di nusantara.
                        </p>

                        {/* Interactive layers selector */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                          <div className="lg:col-span-5 flex flex-col space-y-2">
                            <span className="text-[10px] uppercase font-bold text-[#8C897A] tracking-wider mb-1 font-sans text-left">
                              Klik setiap lapisan tumpukan untuk melihat penjelasan:
                            </span>
                            {[
                              { label: "(1) Definisi Fisika dengan Rumus", desc: "Formulasi matematis klasik dan mekanika fisis modern paling akurat." },
                              { label: "(2) Ayat Al-Qur'an Relevan", desc: "Isyarat teologis langsung qauliyah mengenai keteraturan alam." },
                              { label: "(3) Tafsir Ilmiah Ulama", desc: "Kombinasi sains empiris dan teologi bersumber dari tafsir muktabar." },
                              { label: "(4) Perspektif Ilmuwan Dunia", desc: "Tokoh peletak pondasi peradaban sains Barat maupun kejayaan Islam." },
                              { label: "(5) Aplikasi Kehidupan & Teknologi", desc: "Penerapan nyata energi terbarukan pendukung kemandirian bangsa." }
                            ].map((layer, lIdx) => (
                              <button
                                key={lIdx}
                                onClick={() => setSelectedInovasiLayer(lIdx)}
                                className={`w-full text-left p-3.5 rounded-xl transition-all font-sans text-xs flex justify-between items-center cursor-pointer shadow-xs ${
                                  selectedInovasiLayer === lIdx
                                    ? "bg-natural-secondary border-2 border-natural-accent font-bold ring-2 ring-natural-accent/15"
                                    : "bg-natural-bg/50 hover:bg-white text-natural-text border border-natural-border/60"
                                }`}
                              >
                                <span>{layer.label}</span>
                                <ChevronRight className={`w-4 h-4 text-natural-accent transition-transform duration-200 ${selectedInovasiLayer === lIdx ? "rotate-90" : ""}`} />
                              </button>
                            ))}
                          </div>

                          <div className="lg:col-span-7 bg-[#FAF9F6] p-5 rounded-2xl border border-natural-border/70 flex flex-col justify-between font-serif min-h-60 text-justify">
                            {(() => {
                              const layersDetails = [
                                {
                                  title: "Lapisan 1: Definisi Fisika dengan Rumus",
                                  text: "Setiap bahasan energi dibuka dengan formalisasi fisika murni mencakup rumusan matematis presisi tinggi, besaran satuan SI, dan hukum fisika yang mendasarinya (contoh: Hukum I Termodinamika, kinetika, atau energi mekanik). Siswa mengawali penemuan dari aspek kognitif sains obyektif.",
                                  impact: "Membangun landasan ilmiah murni yang kuat dan terukur secara akademis."
                                },
                                {
                                  title: "Lapisan 2: Ayat Al-Qur'an Relevan",
                                  text: "Langkah ini menyajikan ayat Al-Qur'an (ayat qauliyah) yang secara konseptual mengisyaratkan gejala fisika terkait. Ayat ini ditulis lengkap dalam aksara Arab, transliterasi latin, dan terjemahan resmi Kemenag RI, memicu kesadaran spiritual siswa atas takdir hukum alam (sunnatullah) pembangun kosmos.",
                                  impact: "Menautkan kajian empiris kauniyah dengan wahyu ontologis keimanan."
                                },
                                {
                                  title: "Lapisan 3: Tafsir Ilmiah Ulama",
                                  text: "Lapisan ketiga mengkaji ayat Al-Qur'an dari perspektif ulama tafsir kontemporer dan tafsir sains (seperti Tafsir Al-Mishbah karya Quraish Shihab, Tafsir Salman ITB, maupun kajian Lajnah Pentashihan Mushaf Al-Qur'an Kemenag). Hal ini menghindari 'cocoklogi' pseudosains dan memberikan fondasi metodologis penafsiran yang sahih.",
                                  impact: "Menghindari interpretasi dangkal sains-agama melalui otoritas tafsir muktabar."
                                },
                                {
                                  title: "Lapisan 4: Perspektif Ilmuwan Dunia",
                                  text: "Membawa benang merah sejarah sains dengan mendedahkan profil tokoh-tokoh penyusun konsep energi—baik ilmuwan muslim abad pertengahan (seperti Al-Khazini peletak kinetika gravitasi atau Banu Musa penemu mekanik) maupun ilmuwan universal Barat (seperti James Watt, Joule, Einstein).",
                                  impact: "Membentuk rasa bangga kepemimpinan ilmiah peradaban (saintis muslim) serta menghormati objektivitas kontribusi dunia."
                                },
                                {
                                  title: "Lapisan 5: Aplikasi Kehidupan Terapan & EBT",
                                  text: "Penutup lapisan berupa skenario pemanfaatan energi dalam keseharian muslim dan rekayasa teknologi energi baru terbarukan (EBT) ramah lingkungan (seperti panel surya pada atap masjid, instalasi biogas pesantren, pemanen biodiesel mikro, kincir angin daerah pesisir).",
                                  impact: "Membentuk komitmen akhlak ekologis nyata melestarikan stabilitas ekosistem bumi."
                                }
                              ];
                              const curLayer = layersDetails[selectedInovasiLayer];
                              return (
                                <div className="space-y-4">
                                  <div className="border-b border-natural-border/55 pb-2">
                                    <h4 className="font-bold text-xs font-sans text-natural-primary uppercase tracking-wider">{curLayer.title}</h4>
                                  </div>
                                  <p className="text-xs text-natural-text leading-relaxed">
                                    {curLayer.text}
                                  </p>
                                  <div className="bg-white p-3.5 rounded-xl border border-natural-border/40 text-[11px] leading-relaxed italic">
                                    <span className="font-bold font-sans text-natural-accent text-[9px] uppercase tracking-wider block mb-1">Dampak Pembelajaran:</span>
                                    {curLayer.impact}
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* INOVASI 3 SECTION EXPANSION (LKPD SYNTAX) */}
                    {selectedInovasiIdx === 2 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-primary font-serif">
                              Inovasi 3: LKPD Lima Sintaks PBL Terintegrasi Refleksi Islami
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Konstruksi Lembar Kerja Digital dengan Integrasi Karakter Khalifatullah
                            </p>
                          </div>
                          <span className="text-[10px] bg-[#FFF9EA] text-amber-700 border border-amber-300 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            PBL & Eco-Akhlaq
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-natural-accent first-letter:mr-2 first-letter:float-left">
                          Lembar Kerja Peserta Didik (LKPD) dirancang secara ketat mengikuti <strong>lima sintaks pembelajaran berbasis masalah (PBL)</strong> secara eksplisit. Keunikan mendasar LKPD modul ini terletak pada setiap sintaksnya yang menyertakan <strong>ruang refleksi Al-Qur'an</strong> (mencakup identifikasi ayat, tafsir ringkas, serta perumusan langkah praktis kehidupan umat muslim). Sintaks ke-5 memuat esai refleksi spiritual akhir kepemimpinan amanah Khalifah pembangun keselarasan hidup—sesuatu yang tidak akan pernah diperoleh pada lembar LKPD fisika umum yang mekanistik.
                        </p>

                        <div className="space-y-3 pt-2 font-serif text-xs">
                          {[
                            { step: "Sintaks 1", title: "Orientasi Masalah Kontekstual", desc: "Peserta didik menyimak wacana realitas krisis bahan bakar, kelangkaan daya listrik daerah, atau kerusakan alam (fasad) akibat eksploitasi berlebih untuk melatih kepekaan moral empati sosial mereka." },
                            { step: "Sintaks 2", title: "Mengorganisasi Belajar", desc: "Siswa membentuk tim kerja kolaboratif secara merdeka, membagi peran tim riset sasis fisis mekanik dan tim telaah relasi ayat kalam ilahi Al-Qur'an." },
                            { step: "Sintaks 3", title: "Penyelidikan Kelompok & Individu", desc: "Siswa mengumpulkan data empiris kuantitatif menggunakan 5 simulator virtual laboratorium mandiri, mengesampingkan manipulasi data tidak jujur sanksi luhur tatanan syariat." },
                            { step: "Sintaks 4", title: "Menyusun & Menyajikan Karya", desc: "Siswa merancang proyek draf alternatif teknologi bersih terbarukan (panel solar masjid, kincir, biogas) serta mempresentasikan laporan ilmiah di depan forum kelas." },
                            { step: "Sintaks 5", title: "Evaluasi & Refleksi Akhir: Tanggung Jawab Khalifah", desc: "Menjawab esai refleksi komitmen etika anti-pemborosan (anti-israf) dan tanggung jawab asasi manusia menjaga kelestarian kosmis (khalifah fil-ardh) di lembar LKPD digital secara langsung." }
                          ].map((syn, sIdx) => (
                            <div key={sIdx} className="bg-natural-bg/20 p-4 rounded-xl border border-natural-border/30 flex items-start space-x-3 text-justify hover:bg-white transition-all hover:shadow-xs">
                              <span className="font-mono text-[10px] font-bold bg-natural-primary text-white px-2 py-0.5 rounded-md shrink-0 uppercase tracking-widest font-sans">{syn.step}</span>
                              <div className="space-y-1">
                                <h4 className="font-sans font-bold text-xs text-natural-heading">{syn.title}</h4>
                                <p className="text-[11px] text-[#5A5A40] leading-relaxed">{syn.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* INOVASI 4 SECTION EXPANSION (EVALUATION MATRIX) */}
                    {selectedInovasiIdx === 3 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-primary font-serif">
                              Inovasi 4: Evaluasi Multidimensi (HOTS + Qur'anic Literacy)
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Model Asesmen Sumatif Hibrida yang Mengukur Kognisi Otonom dan Literasi Spiritual
                            </p>
                          </div>
                          <span className="text-[10px] bg-[#FAF3FF] text-purple-700 border border-purple-200 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Asesmen Sumatif HOTS
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-natural-accent first-letter:mr-2 first-letter:float-left">
                          Instrumen evaluasi didalam e-modul ini dirancang secara orisinal mencakup <strong>20 butir soal pilihan ganda</strong> dengan klasifikasi tipe HOTS sekelas standar asesmen draf internasional. Butir evaluasi diformulasikan membagi pemahaman sains dalam empat ranah kompetensi: mengamati (C2), menganalisis (C4), mengidentifikasi (C3), dan menyimpulkan (C5); sekaligus <strong>mengintegrasikan pertanyaan literasi Al-Qur'an</strong> dalam peristiwa fisik (contoh: soal nomor 2, 4, 9, 12, 16, 18, 19, 20).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {/* Domain HOTS Fisika */}
                          <div className="bg-white/80 p-5 rounded-2xl border border-natural-border space-y-4 shadow-xs text-justify">
                            <div className="flex items-center space-x-2.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-natural-primary" />
                              <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-natural-primary">Karakteristik HOTS Fisika (12 Soal)</h4>
                            </div>
                            <p className="text-[11px] leading-relaxed font-serif text-[#5A5A40]">
                              Menantang peserta didik melakukan kalkulasi matematis mekanis mutakhir, melakukan pembuktian grafik variabel, dan mengevaluasi efisiensi mekanis motor listrik atau turbin fluida terdisipasi. Meliputi aspek kognitif C2 hingga C5 secara utuh.
                            </p>
                            <div className="bg-natural-bg/30 p-3 rounded-xl border border-natural-border/30 text-[10px] font-sans font-bold text-[#8C897A]">
                              Nomor Soal Fisika HOTS: <br />
                              <span className="font-mono text-natural-primary text-xs tracking-wider">01, 03, 05, 06, 07, 08, 10, 11, 13, 14, 15, 17</span>
                            </div>
                          </div>

                          {/* Domain Qur'anic Literacy */}
                          <div className="bg-white/80 p-5 rounded-2xl border border-natural-border space-y-4 shadow-xs text-justify">
                            <div className="flex items-center space-x-2.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-natural-accent" />
                              <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-natural-accent">Karakteristik Qur'anic Literacy (8 Soal)</h4>
                            </div>
                            <p className="text-[11px] leading-relaxed font-serif text-[#5A5A40]">
                              Mengajukan analisis komparatif sasis pemikiran isyarat Al-Qur'an, kriteria menjaga stabilitas langit beralas mizan serta hubungan fisis entropi/disipasi dengan perbuatan israf (pemborosan energi) yang mendatangkan bahaya ekologi global.
                            </p>
                            <div className="bg-[#FCF3EB] p-3 rounded-xl border border-natural-border/30 text-[10px] font-sans font-bold text-[#8C897A]">
                              Nomor Soal Integrasi Qur’an: <br />
                              <span className="font-mono text-natural-accent text-xs tracking-wider">02, 04, 09, 12, 16, 18, 19, 20</span>
                            </div>
                          </div>
                        </div>

                        {/* Direct quiz jump */}
                        <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-natural-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
                          <div className="text-left space-y-1">
                            <span className="font-bold text-natural-accent uppercase tracking-wider block text-[10px]">Akses Langsung Uji Evaluasi HOTS</span>
                            <p className="text-[11px] text-[#8C897A] font-serif">Uji pemahaman kognitif dan kepedulian ekologis teologis secara langsung:</p>
                          </div>
                          <button
                            onClick={() => jumpTo("quiz")}
                            className="bg-natural-accent text-natural-primary hover:opacity-90 px-6 py-2.5 rounded-xl font-extrabold transition-all shadow-xs shrink-0 uppercase tracking-wider text-[11px] cursor-pointer"
                          >
                            Mulai Kerjakan Soal Sumatif
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* === SECTION 3B: NOVELTY (KEBARUAN) MODUL === */}
              {activeSection === "novelty" && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Banner Header */}
                  <div className="bg-gradient-to-br from-[#0A2F35] via-[#0D4434] to-[#122A26] rounded-[32px] p-6 md:p-10 text-white relative overflow-hidden shadow-lg border border-white/10">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="relative z-10 space-y-3">
                      <span className="text-[10px] bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full font-bold uppercase tracking-widest inline-block font-sans">
                        Pendidikan Transdisipliner Berkemajuan
                      </span>
                      <h1 className="text-2xl md:text-4xl font-extrabold text-amber-300 tracking-tight font-serif">
                        Novelty (Kebaruan) E-Modul Utama
                      </h1>
                      <p className="text-xs md:text-sm text-slate-200 leading-relaxed max-w-4xl font-serif">
                        Menembus sekat-sekat pemisah aliran sains empiris murni dengan kesadaran keagamaan transformatif melalui kajian orisinal 4 pilar diskursus teologis-sains.
                      </p>
                    </div>
                  </div>

                  {/* 4 Novelties Tab Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        title: "1. Pendekatan PQIL",
                        badge: "PBL & Qur'an",
                        short: "Sintesis model PBL dengan refleksi spiritual Al-Qur'an dalam setiap tahapan sintaks.",
                        color: "border-l-4 border-cyan-400",
                        activeBg: "bg-cyan-950/20"
                      },
                      {
                        title: "2. Cakupan Terpadu",
                        badge: "15 Jenis Energi",
                        short: "Mengintegrasikan 15 varian energi fisika dalam satu benang sasis materi koheren.",
                        color: "border-l-4 border-[#10B981]",
                        activeBg: "bg-emerald-950/20"
                      },
                      {
                        title: "3. Integrasi Sistematis",
                        badge: "Qur'an Per Konsep",
                        short: "Tafsir muktabar ilmiah & biografi ilmuwan internasional di setiap sub-topik fisis.",
                        color: "border-l-4 border-amber-400",
                        activeBg: "bg-amber-950/20"
                      },
                      {
                        title: "4. Etika Energi Islami",
                        badge: "Islamic Ethics",
                        short: "Membangun karakter anti-israf (pemborosan) dan amanah Khalifah fil-Ardh.",
                        color: "border-l-4 border-purple-400",
                        activeBg: "bg-purple-950/20"
                      }
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedNoveltyIdx(idx)}
                        className={`w-full text-left rounded-3xl p-5 border transition-all cursor-pointer flex flex-col justify-between h-full hover:shadow-md ${item.color} ${
                          selectedNoveltyIdx === idx
                            ? "bg-white border-natural-primary shadow ring-1 ring-natural-primary/25"
                            : "bg-white/80 border-natural-border hover:bg-white"
                        }`}
                      >
                        <div className="space-y-2">
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider block w-fit ${
                            selectedNoveltyIdx === idx 
                              ? "bg-natural-primary text-white" 
                              : "bg-[#FAF9F6] text-[#8C897A] border"
                          }`}>
                            {item.badge}
                          </span>
                          <h3 className={`font-bold text-sm tracking-tight font-serif ${
                            selectedNoveltyIdx === idx ? "text-natural-primary" : "text-natural-heading"
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-[11px] leading-relaxed text-[#5A5A40] mt-3 font-serif line-clamp-3">
                          {item.short}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Novelty Detail Panel */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm">
                    {/* NOVELTY 1 DISPLAY */}
                    {selectedNoveltyIdx === 0 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-primary font-serif">
                              1. Pendekatan PQIL (Problem Based Learning Qur'an Integrated Learning)
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Metodologi Sintesis Terobosan Pembelajaran Fisika Transdisipliner
                            </p>
                          </div>
                          <span className="text-[10px] bg-cyan-50 text-cyan-700 border border-cyan-200 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Breakthrough Pedagogi
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-cyan-600 first-letter:mr-2 first-letter:float-left">
                          Modul ini secara orisinal memperkenalkan pendekatan fusi eksklusif bernama <strong>PQIL (PBL Qur'an Integrated Learning)</strong>. Berbeda dari lembar ajar tradisional, pendekatan ini menyelaraskan secara ketat seluruh alur 5 sintaks pembelajaran berbasis masalah dengan telaah teologis mendalam. Masalah global konkret seperti krisis ketersediaan bahan bakar atau kerusakan hutan (fasad) berfungsi sebagai pemantik intelektual (kauniyah) yang membangkitkan kehausan spiritual siswa untuk bersandar pada petunjuk nilai etika Al-Qur'an (qauliyah) guna merumuskan draf kemandirian energi umat.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-serif">
                          <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-natural-border/50 text-justify">
                            <h4 className="font-sans font-bold text-xs uppercase text-cyan-700 tracking-wide mb-2">Mengapa PQIL Sangat Jarang Ditemukan?</h4>
                            <p className="text-[11px] leading-relaxed text-[#5A5A40]">
                              Buku teks umum di SMA memandang pelajaran fisika sebagai rangkaian prosedur mekanis, matematis, dan obyektif belaka yang netral nilai (value-free). PQIL membongkar sekat sekuler tersebut untuk membuktikan bahwa fenomena kelistrikan, termal, maupun mekanika merupakan manifestasi hukum takdir alam semesta (sunnatullah) yang tak terpisahkan dari wahyu ketuhanan. Pendekatan terpadu ini menuntun siswa dari sekadar tahu konsep (knowing) menuju kesadaran diri yang mendalam (being).
                            </p>
                          </div>
                          
                          <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-natural-border/50 text-justify flex flex-col justify-between">
                            <div>
                              <h4 className="font-sans font-bold text-xs uppercase text-natural-primary tracking-wide mb-2">Implementasi dalam Lembar Siswa</h4>
                              <p className="text-[11px] leading-relaxed text-[#5A5A40]">
                                Setiap tahapan LKPD didesain terstruktur agar siswa melatih nalar kritis (HOTS) fisika sembari merenungkan nilai asasi kepemimpinan Khalifah dalam menjaga ekosistem bumi secara meluas pada langkah penutup sintaks diskusi luhur.
                              </p>
                            </div>
                            <div className="pt-3 flex gap-2">
                              <button onClick={() => jumpTo("lkpd")} className="bg-natural-primary text-white hover:opacity-95 text-[10px] uppercase tracking-wider font-sans font-bold px-4 py-1.5 rounded-xl cursor-pointer">
                                Lihat LKPD Tersemat
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* NOVELTY 2 DISPLAY */}
                    {selectedNoveltyIdx === 1 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-heading font-serif">
                              2. Cakupan Jenis Energi Secara Terpadu (Comprehensive Unified Framework)
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Menghapus Sekat Pembatasan Pembelajaran Konvensional yang Terfragmentasi
                            </p>
                          </div>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            15 Konsep Energi Terintegrasi
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-2 first-letter:float-left">
                          Buku paket fisika umum biasanya memisah-misahkan bahasan jenis-jenis energi dalam sub-bab terpisah secara acak. E-Modul baru kami menyajikan varietas energi fisika (kinetik, potensial gravitasi, mekanik, kalor, gas ideal, listrik, kimiawi, gelombang akustik, serta energi baru terbarukan eko-green) dalam satu kerangka terpadu komparatif yang koheren. Setiap konsep dijelaskan dari segi formula mekanika empiris murni, kemudian ditarik benang merah ke teologi sunnatullah Al-Qur'an, dipadukan kajian orisinal ulama tafsir, dan disoroti sejarah tokoh ilmuwan yang menemuinya.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2 font-sans">
                          {[
                            { name: "Energi Kinetik", cat: "Fisika Mekanik" },
                            { name: "Energi Potensial Gravitasi", cat: "Fisika Mekanik" },
                            { name: "Energi Mekanik", cat: "Sistem Terpadu" },
                            { name: "Kalor (Termal)", cat: "Termodinamika" },
                            { name: "Energi Gas", cat: "Hukum Gas Ideal" },
                            { name: "Energi Listrik", cat: "Elektromagnetik" },
                            { name: "Energi Kimia", cat: "Entalpi Reaksi" },
                            { name: "Energi Bunyi (Akustik)", cat: "Mekanika Gelombang" },
                            { name: "Energi Angin", cat: "Teknologi Terbarukan" },
                            { name: "Minyak Bumi", cat: "Energi Fosil" },
                            { name: "Batubara", cat: "Energi Fosil" },
                            { name: "Gas Alam", cat: "Energi Fosil" },
                            { name: "Biogas", cat: "Sistem EBT Mandiri" },
                            { name: "Energi Matahari", cat: "Sistem Sel Surya" },
                            { name: "Energi Nuklir", cat: "Intra-Atomik" }
                          ].map((eng, eIdx) => (
                            <div key={eIdx} className="bg-natural-bg/30 p-3 rounded-xl border border-natural-border/30 hover:bg-emerald-50/20 transition-all text-center">
                              <span className="text-[10px] font-extrabold text-[#7A603D] block truncate">{eng.name}</span>
                              <span className="text-[8px] font-mono text-[#8C897A] uppercase tracking-wider block mt-0.5">{eng.cat}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-natural-border/50 text-justify flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
                          <div className="space-y-1">
                            <span className="font-extrabold text-emerald-700 uppercase tracking-widest text-[10px]">Eksplorasi Detail 15 Konsep Inti</span>
                            <p className="text-[11px] text-[#5A5A40] font-serif">Akses panel materi utama untuk melihat kelima lapisan pembahasan (Rumus, Ayat, Tafsir, Tokoh, Terapan) untuk setiap konsep energi diatas:</p>
                          </div>
                          <button onClick={() => jumpTo("bab3-konsep-energi")} className="bg-natural-primary text-white hover:opacity-90 px-4.5 py-2 rounded-xl font-bold transition-all shadow-xs shrink-0 cursor-pointer text-[10px]">
                            Buka Materi Bab III
                          </button>
                        </div>
                      </div>
                    )}

                    {/* NOVELTY 3 DISPLAY */}
                    {selectedNoveltyIdx === 2 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-[#7A603D] font-serif">
                              3. Integrasi Sains-Al-Qur'an Yang Sistematis Per Konsep (No Cocoklogi)
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Metode Pembuktian Akademik Sahih Berakar Tafsir Muktabar
                            </p>
                          </div>
                          <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Landasan Tafsir Shahih
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-2 first-letter:float-left">
                          Upaya mengaitkan fisika dengan Al-Qur'an kerap dituduh mengidap bias "cocoklogi" (penafsiran pseudosains yang dipaksakan). E-Modul ini membantah tuduhan itu dengan menyusun struktur penafsiran berlapis bersumber dari <strong>literatur metodologi tafsir ilmiah (ilmiah-kauniyah) sains-teologis yang absah</strong>: (a) kutipan orisinal teks Arab, (b) transliterasi latin fokal, (c) terjemahan standar Kemenag RI, dan (d) kajian tafsir sains yang dipelopori oleh ulama terkemuka seperti <em>Tafsir Al-Mishbah (Quraish Shihab)</em>, <em>Tafsir Salman ITB</em>, <em>Lajnah Pentashihan Kemenag RI</em>, serta tokoh klasik teologi kosmologi.
                        </p>

                        <div className="border-l-4 border-amber-400 bg-amber-50/20 p-5 rounded-r-2xl font-serif text-justify text-xs text-natural-text relative">
                          <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#7A603D] block mb-2">Tinjauan Literatur Pembanding (Sains & Agama)</span>
                          "Struktur integrasi multidimensi bersumber dari kajian tafsir sains ulama kontemporer pada modul ini menyajikan alur pemikiran sains-agama yang paling runtut, orisinal, serta sistematis jika ditarik kesejajaran komparatif di atas draf penulisan modul fisika SMA nasional biasa lainnya."
                          <span className="font-sans font-bold block mt-2 text-right text-[10px] text-[#8C897A]">— Nurhasanah & Syarifuddin, 2022</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-serif text-xs">
                          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-natural-border/40">
                            <span className="font-sans font-extrabold text-[9px] text-[#7A603D] uppercase tracking-wider block mb-1">Rujukan Tafsir Melimpah</span>
                            <p className="text-[11px] text-[#5A5A40] text-justify leading-relaxed">
                              Menghadirkan intisari tafsir muktabar ahli Al-Qur'an: Tafsir Al-Qurthubi, Tafsir Ibnu Katsir, Tafsir Salman ITB, Mafatih al-Ghaib, dll.
                            </p>
                          </div>
                          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-natural-border/40">
                            <span className="font-sans font-extrabold text-[9px] text-cyan-600 uppercase tracking-wider block mb-1">Kuntum Tokoh Peradaban</span>
                            <p className="text-[11px] text-[#5A5A40] text-justify leading-relaxed">
                              Mendedahkan sejarah orisinal ilmuwan peletak dasar sains Islam (seperti Banu Musa, Al-Khazini) penemu konsep gerak & keseimbangan.
                            </p>
                          </div>
                          <div className="bg-[#FAF9F6] p-4 rounded-xl border border-natural-border/40 flex flex-col justify-between">
                            <div>
                              <span className="font-sans font-extrabold text-[9px] text-emerald-600 uppercase tracking-wider block mb-1">Gugusan Ayat Pilihan</span>
                              <p className="text-[11px] text-[#5A5A40] text-justify leading-relaxed">
                                Menaruh 8 gugusan ayat kosmologi Al-Qur'an lengkap aksara Arab orisinal.
                              </p>
                            </div>
                            <button onClick={() => jumpTo("bab2-quranic")} className="mt-3 bg-natural-primary text-white hover:opacity-90 px-3 py-1 text-[10px] uppercase font-sans font-bold rounded-lg cursor-pointer text-center block w-full">
                              Jelajahi Sains Islam
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* NOVELTY 4 DISPLAY */}
                    {selectedNoveltyIdx === 3 && (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-4 gap-4">
                          <div className="space-y-1">
                            <h2 className="text-xl font-bold text-natural-primary font-serif">
                              4. Dimensi Etika Energi Islami (Islamic Energy Ethics: Eco-Akhlaq)
                            </h2>
                            <p className="text-xs text-[#8C897A] font-medium font-sans uppercase tracking-wider">
                              Membasuh Kekosongan Pendidikan Karakter Berbasis Pelestarian Bumi
                            </p>
                          </div>
                          <span className="text-[10px] bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full font-bold font-sans self-start md:self-auto shrink-0 uppercase tracking-wider">
                            Etika Lingkungan Rabbani
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-natural-text text-justify leading-relaxed font-serif first-letter:text-3xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-2 first-letter:float-left">
                          Modul ini tidak sekadar mendidik siswa mahir menghitung kilowatt-hour (kWh), melainkan menanamkan <strong>etika penggunaan energi islami (Islamic Energy Ethics / Eco-Akhlaq)</strong>. Siswa diajarkan memahami efisiensi termal dan disipasi daya (entropi) sebagai ukuran ilmiah dari perbuatan <em>israf</em> (pemborosan energi) yang dilarang keras oleh Allah SWT dalam QS. Al-A'raf: 31, serta memikul mandat asasi sebagai <em>Khalifah fil-Ardh</em> yang berkewajiban merawat keseimbangan kosmos.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-serif text-xs">
                          <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-natural-border">
                            <div className="flex items-center space-x-2.5 mb-2">
                              <span className="w-2 h-2 rounded-full bg-red-500" />
                              <h4 className="font-sans font-bold text-[#7A603D] uppercase text-[10px]">Etika Israf & Entropi Terdisipasi</h4>
                            </div>
                            <p className="text-[11px] text-[#5A5A40] text-justify leading-relaxed">
                              Fisika murni membuktikan bahwa tidak ada mesin dengan efisiensi 100%—pasti ada energi yang terbuang sia-sia menjadi panas tak berguna (entropi). Dalam teologi Islam, energi panas tak berguna akibat perbuatan boros ini dipersamakan dengan israf ekologis yang mempercepat krisis iklim global (fasad fi al-barr wa al-bahr). Hal ini menyadarkan siswa bahwa pelestarian lingkungan hidup adalah bagian teologis utuh dari kesalehan batiniaiah.
                            </p>
                          </div>

                          <div className="bg-[#FAF9F6] p-4.5 rounded-2xl border border-natural-border flex flex-col justify-between">
                            <div>
                              <div className="flex items-center space-x-2.5 mb-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <h4 className="font-sans font-bold text-natural-primary uppercase text-[10px]">Pemberdayaan Karakter Khalifah fil-Ardh</h4>
                              </div>
                              <p className="text-[11px] text-[#5A5A40] text-justify leading-relaxed">
                                Peserta didik ditantang merakit rancangan proyek kecil pendirian alternatif Energi Baru Terbarukan (EBT) ramah lingkungan secara kolaboratif guna mewujudkan amanat memelihara kemakmuran bumi tempat sujud ibadah.
                              </p>
                            </div>
                            <div className="pt-3">
                              <button onClick={() => jumpTo("quiz")} className="bg-natural-accent text-natural-primary hover:opacity-90 text-[10px] uppercase font-sans font-bold px-4 py-1.5 rounded-xl block w-full text-center cursor-pointer">
                                Uji Pemahaman Karakter Sumatif
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* === SECTION 4: PETUNJUK & FILOSOFI === */}
              {activeSection === "petunjuk" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Petunjuk Guru */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 space-y-4">
                      <h2 className="text-lg font-bold text-natural-primary flex items-center space-x-2 font-serif">
                        <Users className="w-5 h-5 text-natural-accent" />
                        <span>Petunjuk Guru & Fasilitator</span>
                      </h2>
                      <p className="text-xs text-[#8C897A]">Berikut adalah langkah otonom pendamping dalam mengarahkan kelas berbasis PQIL</p>
                      <ul className="space-y-3 pt-2 text-xs">
                        {petunjukPenggunaan.guru.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="bg-natural-secondary text-natural-primary font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0 font-mono">{idx+1}</span>
                            <span className="text-natural-text leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Petunjuk Siswa */}
                    <div className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 space-y-4">
                      <h2 className="text-lg font-bold text-natural-accent flex items-center space-x-2 font-serif">
                        <BookOpen className="w-5 h-5 text-natural-primary" />
                        <span>Skenario Belajar Siswa Mandiri</span>
                      </h2>
                      <p className="text-xs text-[#8C897A]">Ikuti kaidah belajar di bawah untuk optimalisasi serapan materi</p>
                      <ul className="space-y-3 pt-2 text-xs">
                        {petunjukPenggunaan.siswa.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="bg-natural-active text-natural-primary font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0 font-mono">{idx+1}</span>
                            <span className="text-natural-text leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Filosofi & Teologi Modul */}
                  <div className="bg-white rounded-[32px] p-6 md:p-8 border border-natural-border shadow-sm space-y-6">
                    <div className="border-b border-natural-border/40 pb-3">
                      <h2 className="text-xl font-bold text-natural-heading font-serif">Landasan Pembelajaran Terintegrasi</h2>
                      <p className="text-xs text-[#8C897A] font-serif mt-0.5">Fondasi filosofis dan teologi integrasi sains-spiritual dalam fisika energi</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 leading-relaxed text-xs text-justify font-serif text-natural-text">
                      <div className="space-y-2 bg-[#FAF7F0] p-5 rounded-[20px] border border-natural-border/50">
                        <h3 className="font-bold text-[#7A603D] font-sans text-xs uppercase tracking-wider">
                          {filosofiModul.landasanFilosofis.title}
                        </h3>
                        <p className="pt-1">{filosofiModul.landasanFilosofis.content}</p>
                      </div>

                      <div className="space-y-2 bg-natural-bg/40 p-5 rounded-[20px] border border-natural-border/50">
                        <h3 className="font-bold text-natural-primary font-sans text-xs uppercase tracking-wider">
                          {filosofiModul.landasanTeologis.title}
                        </h3>
                        <p className="pt-1 whitespace-pre-line">{filosofiModul.landasanTeologis.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === SECTION 5: Pendahuluan Bab I === */}
              {activeSection === "bab1-intro" && (
                <div className="space-y-6">
                  {/* Latar Belakang & Urgensi */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-6">
                    <h1 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Bab I: Pendahuluan & Rasional Kurikulum</h1>
                    
                    <div className="space-y-4 text-xs md:text-sm text-natural-text leading-relaxed text-justify font-serif">
                      <h3 className="font-bold text-natural-primary border-b border-natural-border/30 pb-2 text-sm font-sans uppercase tracking-wider">1.1 Latar Belakang & Urgensi Pendidikan Energi</h3>
                      <p className="whitespace-pre-line first-letter:text-3xl first-letter:font-bold first-letter:text-natural-accent first-letter:mr-2 first-letter:float-left">
                        {latarBelakang}
                      </p>
                    </div>
                  </div>

                  {/* Alasan Pengambilan Materi Energi */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h3 className="font-bold text-natural-primary border-b border-natural-border/30 pb-2 text-sm font-sans uppercase tracking-wider">
                      1.2 Alasan Pengambilan Materi Energi (Rasionalisasi Al-Qur'an & Fisika)
                    </h3>
                    <p className="text-xs md:text-sm text-[#8C897A] font-serif leading-relaxed">
                      Materi Energi dipilih sebagai fokus utama kurikulum Transdisipliner ini berdasarkan empat pilar rasionalitas fisis dan teologis syar'i:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-serif">
                      <div className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-2">
                        <div className="flex items-center space-x-2 text-natural-primary">
                          <span className="w-2.5 h-2.5 bg-natural-primary rounded-full" />
                          <h4 className="font-bold font-sans text-xs uppercase tracking-wide">Pilar I: Kurikulum & Fundamental Sains</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed text-natural-text text-justify">
                          Sesuai kualifikasi Capaian Pembelajaran (CP) Fase E Kurikulum Merdeka, energi merupakan jembatan fisis konseptual yang mengintegrasikan berbagai topik alam (mekanika, kelistrikan, termal) agar peserta didik sanggup merumuskan solusi atas krisis daya nyata.
                        </p>
                      </div>

                      <div className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-2">
                        <div className="flex items-center space-x-2 text-natural-accent">
                          <span className="w-2.5 h-2.5 bg-natural-accent rounded-full" />
                          <h4 className="font-bold font-sans text-xs uppercase tracking-wide">Pilar II: Teologi Mizan (Keseimbangan)</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed text-natural-text text-justify">
                          Hukum-hukum universal kelestarian sasis energi (seperti Hukum Kekekalan Mekanik) merupakan mizan/takaran mutlak ciptaan Allah yang bebas cacat. Memahaminya memicu tadabbur aktif atas kesempurnaan sunnatullah pembangun kosmos.
                        </p>
                      </div>

                      <div className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-2">
                        <div className="flex items-center space-x-2 text-[#7A603D]">
                          <span className="w-2.5 h-2.5 bg-[#7A603D] rounded-full" />
                          <h4 className="font-bold font-sans text-xs uppercase tracking-wide">Pilar III: Etika Anti-Israf (Eco-Akhlaq)</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed text-natural-text text-justify">
                          Islam menuntut manusia menjauhi perbuatan israf (pemborosan) eksploitasi daya bumi. Fisika memberikan instrumen kuantitatif rasional untuk mengukur sisa energi terbuang (entropi/disipasi), menguatkan komitmen moral akhlak mulia.
                        </p>
                      </div>

                      <div className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-2">
                        <div className="flex items-center space-x-2 text-[#4A7A71]">
                          <span className="w-2.5 h-2.5 bg-[#4A7A71] rounded-full" />
                          <h4 className="font-bold font-sans text-xs uppercase tracking-wide">Pilar IV: Transisi & Kemandirian Energi</h4>
                        </div>
                        <p className="text-[11px] leading-relaxed text-natural-text text-justify">
                          Materi ini membekali peserta didik dengan pemahaman teknologi hijau (solar sel, kincir, biogas, nuklir) demi menyiapkan pemimpin peradaban masa depan (khalifah fil-ardh) yang mampu mewujudkan kedaulatan energi berkelanjutan.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Alasan Pemilihan Model PBL */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h3 className="font-bold text-natural-primary border-b border-natural-border/30 pb-2 text-sm font-sans uppercase tracking-wider">
                      1.3 Alasan Pemilihan Problem Based Learning (PBL) Terpadu
                    </h3>
                    <p className="text-xs md:text-sm text-[#8C897A] font-serif leading-relaxed">
                      Model Problem Based Learning (PBL) berbasis masalah nyata diadopsi karena alasan peningkatan ranah kompetensi holistik siswa:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-serif">
                      {pblAlasan.map((item, idx) => (
                        <div key={idx} className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-1.5 hover:bg-natural-secondary/35 transition-all text-justify">
                          <h4 className="font-bold text-natural-primary font-sans text-xs uppercase tracking-wide">
                            {item.aspek}
                          </h4>
                          <p className="text-[11px] text-natural-text leading-relaxed">
                            {item.alasan}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Peran Guru & Siswa Table */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-5 md:p-6 shadow-sm space-y-4">
                    <div>
                      <h3 className="font-bold text-natural-primary border-b border-natural-border/30 pb-2 text-sm font-sans uppercase tracking-wider">
                        1.4 Struktur Sintaks Peran Guru & Siswa dalam PBL-PQIL
                      </h3>
                      <p className="text-[11px] text-[#8C897A] font-serif mt-1">Matriks komparatif kolaboratif interaksi aktif pendidik dan peserta didik dalam draf kurikulum terpadu:</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse font-serif">
                        <thead>
                          <tr className="border-b border-natural-border/60 text-[#8C897A] uppercase font-sans tracking-wider text-[9px]">
                            <th className="py-2.5 px-3 font-bold w-[25%]">Fokus Peran</th>
                            <th className="py-2.5 px-3 font-bold bg-natural-bg/30 text-natural-primary rounded-t-lg">Aktivitas Fasilitator Guru</th>
                            <th className="py-2.5 px-3 font-bold bg-natural-sidebar/30 text-natural-accent rounded-t-lg">Skenario Berpikir Siswa</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-natural-border/20 leading-relaxed text-natural-text text-[11px]">
                          {peranPBLTable.map((p, pIdx) => (
                            <tr key={pIdx} className="hover:bg-[#FAF9F6] transition-colors">
                              <td className="py-3 px-3 font-sans font-bold text-natural-heading align-middle border-r border-natural-border/10">
                                {p.peran}
                              </td>
                              <td className="py-3 px-3 text-justify text-[11.5px] bg-natural-bg/5 leading-relaxed">
                                {p.guru}
                              </td>
                              <td className="py-3 px-3 text-justify text-[11.5px] bg-natural-sidebar/5 leading-relaxed">
                                {p.siswa}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Research Gaps / Literature Review */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-5 md:p-6 shadow-sm space-y-4">
                    <div>
                      <h3 className="font-bold text-[#7A603D] text-xs font-sans uppercase tracking-wider">2. Kajian Kesenjangan Literatur (Research Gaps)</h3>
                      <p className="text-[11px] text-[#8C897A] font-serif mt-0.5">Identifikasi keterbatasan bahan ajar nasional yang diatasi oleh modul terintegrasi ini:</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-natural-border/60 text-[#8C897A] uppercase font-sans tracking-wider text-[9px]">
                            <th className="py-2 px-3 font-bold w-12 text-center">No</th>
                            <th className="py-2 px-3 font-bold">Kesenjangan Akademik di Sekolah</th>
                            <th className="py-2 px-3 font-bold max-w-[125px]">Rujukan Riset</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-natural-border/20 font-serif leading-relaxed text-natural-text text-[11px]">
                          {researchGaps.map((g) => (
                            <tr key={g.no} className="hover:bg-[#FAF9F6] transition-colors">
                              <td className="py-2.5 px-3 font-mono text-natural-primary font-bold text-center">{g.no}</td>
                              <td className="py-2.5 px-3 text-justify">{g.gap}</td>
                              <td className="py-2.5 px-3 font-medium text-[#8C897A] whitespace-nowrap">{g.sumber}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Novelty Modul */}
                  <div className="bg-natural-primary text-white rounded-[32px] p-6 md:p-8 shadow-lg border border-white/10 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-natural-secondary font-sans text-xs uppercase tracking-wider">3. Kebaruan & Orisinalitas E-Modul (Novelty)</h3>
                        <p className="text-white/80 text-xs font-serif mt-0.5">4 pilar unggulan yang menjadi terobosan metodologis bahan ajar digital ini:</p>
                      </div>
                      <button
                        onClick={() => jumpTo("novelty")}
                        className="bg-natural-accent text-natural-primary hover:opacity-90 text-[10.5px] uppercase font-sans font-bold px-4 py-2 rounded-xl shrink-0 transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Buka Ruang Novelty Interaktif</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-serif">
                      {noveltyModul.map((item, index) => (
                        <div key={index} className="bg-white/10 border border-white/10 p-4 rounded-xl backdrop-blur-sm space-y-1.5 hover:bg-white/15 transition-all">
                          <h4 className="font-bold text-natural-secondary text-xs font-sans tracking-wide">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-white/90 leading-relaxed text-justify">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* === SECTION 6: Integrasi Al-Quran Bab II === */}
              {activeSection === "bab2-quranic" && (
                <div className="space-y-6">
                  {/* Makro perspective */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h1 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Bab II: Teologi Energi & Integrasi Sains Islam</h1>
                    <p className="text-sm text-natural-text leading-relaxed text-justify font-serif">
                      {islamicPerspective}
                    </p>
                  </div>

                  {/* Scholar contributions */}
                  <div className="bg-natural-primary text-white rounded-[32px] p-6 md:p-8 border border-white/10 space-y-4 shadow-lg">
                    <h2 className="text-lg font-bold text-natural-secondary font-serif">Kontribusi Teoretis Ilmuwan Muslim Klasik</h2>
                    <p className="text-xs text-white/95 mb-4">Sumbangan rujukan geometer islam sela merintis konsep prapemikiran fisika mekanis</p>
                    <p className="text-xs text-white/90 leading-relaxed text-justify font-serif">
                      {scholarsContributions}
                    </p>
                  </div>

                  {/* Quran verses detail cards */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-[#8C897A] uppercase tracking-widest pl-1 font-sans">Gugusan Ayat Kauniyah Pilihan</h3>
                    
                    {quranVerses.map((verse) => (
                      <div key={verse.verseKey} className="bg-white rounded-[32px] border border-natural-border p-5 md:p-6 shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-natural-border/40 pb-3">
                          <span className="text-xs bg-natural-secondary text-natural-primary font-bold px-3 py-1 rounded-full font-serif">
                            Q.S. {verse.surahName}: {verse.verseNumber}
                          </span>
                          <span className="text-[11px] text-[#8C897A] font-semibold font-mono">
                            Topik: {verse.scientificLink}
                          </span>
                        </div>

                        {/* Arabic */}
                        <div className="text-right py-4 font-serif text-2xl font-medium text-natural-heading leading-loose">
                          {verse.arabic}
                        </div>

                        {/* Translation */}
                        <p className="text-xs text-natural-text/90 italic text-justify leading-relaxed font-serif">
                          "Artinya: {verse.translation}"
                        </p>

                        {/* Scientific Tafsir */}
                        <div className="bg-natural-bg/50 rounded-xl p-4 border border-natural-border/50 space-y-2">
                          <span className="text-[10px] bg-natural-secondary text-natural-primary px-2.5 py-1 rounded font-bold uppercase tracking-wider inline-block font-sans">
                            Analisis Khazanah Tafsir Ilmiah (Ulama Nasional)
                          </span>
                          <p className="text-xs text-natural-text text-justify leading-relaxed font-serif">
                            {verse.scientificTafsir}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* === SECTION 7: Bab III 15 Konsep Energi === */}
              {activeSection === "bab3-konsep-energi" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h1 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Bab III: Khasanah 15 Konsep Energi dalam Kehidupan</h1>
                    <p className="text-sm text-[#8C897A] font-serif">
                      Pilih salah satu sub-konsep energi di menu samping atau daftar di bawah untuk mempelajari formulasi matematis, derivasi mekanik, rujukan ayat Al-Qur'an pendukung, dan kalkulator kalkulasi interaktifnya.
                    </p>
                    {/* Compact selector list of 15 concepts */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-4">
                      {energyConcepts.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedEnergyId(item.id);
                            setSelectedDerivIdx(0);
                          }}
                          className={`p-3 border rounded-xl text-left text-xs transition-all ${
                            selectedEnergyId === item.id
                              ? "border-natural-accent bg-natural-secondary text-natural-primary font-bold shadow-sm"
                              : "border-natural-border hover:bg-natural-secondary text-[#5A5A40]"
                          }`}
                        >
                          <span className="block font-medium truncate font-sans">{item.title.substring(3)}</span>
                          <span className="text-[10px] font-semibold font-mono text-natural-primary block mt-1">{formatMathFormula(item.formula)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detail Panel Render */}
                  {selectedEnergyId && (
                    <motion.div
                      key={selectedEnergyId}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-lg space-y-6"
                    >
                      {(() => {
                        const activeConcept = energyConcepts.find((c) => c.id === selectedEnergyId);
                        if (!activeConcept) return null;

                        return (
                          <div className="space-y-6">
                            {/* Heading */}
                            <div className="border-b border-natural-border pb-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <div>
                                <h2 className="text-xl font-bold text-natural-heading font-serif">{activeConcept.title}</h2>
                                <p className="text-xs text-[#8C897A] mt-1 font-serif">{activeConcept.definition}</p>
                              </div>
                              <span className="text-xs bg-natural-primary text-white font-mono font-bold px-3 py-1 rounded-lg shadow shrink-0">
                                {formatMathFormula(activeConcept.formula)}
                              </span>
                            </div>

                            {/* Derivation explanations */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-natural-text leading-relaxed text-justify font-serif">
                              <div className="space-y-3">
                                <h4 className="font-bold text-natural-accent uppercase tracking-widest text-[10px] border-b border-natural-border/40 pb-1 font-sans">Derivasi Geometris & Rumus Fisika</h4>
                                <p>{formatMathFormula(activeConcept.derivation)}</p>
                              </div>

                              <div className="space-y-3">
                                <h4 className="font-bold text-natural-accent uppercase tracking-widest text-[10px] border-b border-natural-border/40 pb-1 font-sans">Ulasan Sejarah & Aplikasi</h4>
                                <p>{activeConcept.explanation}</p>
                              </div>
                            </div>

                            {/* Qur'anic verse associated to this physics formula */}
                            <div className="bg-natural-bg/50 rounded-xl p-5 border border-natural-border/50 space-y-4">
                              <div className="flex justify-between items-center text-xs text-natural-primary font-bold font-sans border-b border-natural-border/40 pb-2">
                                <span>Kajian Integrasi Al-Qur'an Terpadu</span>
                                <span>{activeConcept.quranVerse.reference}</span>
                              </div>
                              
                              <div className="space-y-3">
                                {activeConcept.quranVerse.latin && (
                                  <div className="text-xs text-natural-accent italic font-serif leading-relaxed">
                                    {activeConcept.quranVerse.latin}
                                  </div>
                                )}
                                <p className="text-right font-serif text-2xl leading-loose text-natural-heading font-medium">
                                  {activeConcept.quranVerse.arabic}
                                </p>
                                <div className="bg-white/40 border border-natural-border/30 rounded-xl p-3.5">
                                  <span className="font-sans font-bold text-[10px] text-natural-accent uppercase tracking-wider block mb-1">Arti / Terjemahan:</span>
                                  <p className="text-xs text-natural-text italic leading-relaxed font-serif">
                                    "{activeConcept.quranVerse.translation}"
                                  </p>
                                </div>
                              </div>

                              {/* Split Explanation Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="bg-white/60 border border-natural-border/40 rounded-xl p-4 space-y-2">
                                  <span className="text-[10px] bg-natural-primary text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block font-sans">
                                    Penjelasan Versi Ulama (Tafsir Muktabar)
                                  </span>
                                  <p className="text-[11px] text-natural-text text-justify leading-relaxed font-serif">
                                    {activeConcept.tafsir}
                                  </p>
                                </div>

                                <div className="bg-white/60 border border-natural-border/40 rounded-xl p-4 space-y-2">
                                  <span className="text-[10px] bg-natural-accent text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block font-sans">
                                    Penjelasan Versi Fisika (Analisis Sains)
                                  </span>
                                  <p className="text-[11px] text-natural-text text-justify leading-relaxed font-serif">
                                    Melalui korelasi sunnatullah hampa gesek, ayat suci kauniyah ini melambangkan ketetapan hukum fisika konversi fluks energi kinetik dan potensial di alam semesta. Formulasinya fisis ({formatMathFormula(activeConcept.formula)}) menegaskan relasi mutlak bahwa entitas materi yang sedang menempuh perpindahan, pemanasan kimiawi, induksi magnet, atau rotasi momentum selalu bergerak di dalam garis mizan seimbang, memperkokoh keagungan desain sang Pencipta tanpa rugi ketidakpastian.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* 5 Derivatives and Sub-Aspects Panel */}
                            <div className="border border-natural-border rounded-2xl p-5 md:p-6 space-y-5">
                              <div className="border-b border-natural-border/40 pb-2">
                                <h4 className="text-xs font-bold text-natural-primary uppercase tracking-widest font-sans">
                                  5 Turunan Konsep & Sub-Aspek Integratif
                                </h4>
                                <p className="text-[11px] text-[#8C897A] font-serif mt-0.5">
                                  Klik salah satu dari 5 sub-aspek di bawah ini untuk mengamati ayat Al-Qur'an, tafsir ilmiah ulama, serta analisis fisisnya secara mendalam:
                                </p>
                              </div>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                {(derivativesData[activeConcept.id] || []).map((deriv, dIdx) => (
                                  <button
                                    key={dIdx}
                                    onClick={() => setSelectedDerivIdx(dIdx)}
                                    className={`w-full text-left rounded-xl p-3.5 space-y-1.5 cursor-pointer transition-all flex flex-col justify-between h-full group text-justify border ${
                                      selectedDerivIdx === dIdx
                                        ? "border-natural-accent bg-[#F0F7FE] shadow-xs ring-1 ring-natural-accent"
                                        : "bg-natural-bg/30 border-natural-border/30 hover:bg-[#F3F8FC]"
                                    }`}
                                  >
                                    <h5 className={`font-bold font-sans text-[11px] leading-snug transition-colors ${
                                      selectedDerivIdx === dIdx ? "text-natural-primary" : "text-[#5A5A40] group-hover:text-natural-primary"
                                    }`}>
                                      {deriv.title}
                                    </h5>
                                    <p className="text-[10px] text-natural-text/90 leading-relaxed font-serif line-clamp-3">
                                      {deriv.content}
                                    </p>
                                  </button>
                                ))}
                              </div>

                              {/* Interactive Expanded Detail Pane for Selected Derivative */}
                              {(() => {
                                const activeDerivs = derivativesData[activeConcept.id] || [];
                                const activeDeriv = activeDerivs[selectedDerivIdx];
                                if (!activeDeriv) return null;

                                return (
                                  <motion.div
                                    key={selectedDerivIdx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-natural-bg/40 border border-natural-border/40 rounded-xl p-4 md:p-5 space-y-4 text-justify"
                                  >
                                    {/* Sub-Header */}
                                    <div className="border-b border-natural-border/30 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                      <h5 className="font-bold text-natural-accent font-sans text-xs uppercase tracking-wider">
                                        Kajian Integrasi Detil: {activeDeriv.title}
                                      </h5>
                                      <span className="text-[10px] bg-natural-primary text-white font-serif px-2.5 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap align-middle">
                                        Rujukan Ayat: {activeDeriv.verseRef}
                                      </span>
                                    </div>

                                    {/* Qur'anic Section */}
                                    <div className="bg-white/80 border border-natural-border/40 rounded-xl p-4 space-y-3">
                                      <p className="text-right font-serif text-xl sm:text-2xl leading-loose text-natural-heading font-medium">
                                        {activeDeriv.verseArabic}
                                      </p>
                                      {activeDeriv.verseLatin && (
                                        <div className="text-[11px] text-natural-accent italic font-serif leading-relaxed">
                                          {activeDeriv.verseLatin}
                                        </div>
                                      )}
                                      <div className="border-t border-natural-border/20 pt-2 text-justify">
                                        <span className="font-sans font-bold text-[9px] text-natural-accent uppercase tracking-wider block mb-0.5">Terjemahan:</span>
                                        <p className="text-xs text-natural-text italic leading-relaxed font-serif">
                                          "{activeDeriv.verseTranslation}"
                                        </p>
                                      </div>
                                    </div>

                                    {/* Split Explanation Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {/* Tafsir */}
                                      <div className="bg-white/95 border border-natural-border/35 rounded-xl p-4 space-y-2 text-justify shadow-xs">
                                        <span className="text-[10px] bg-[#EAF5FE] text-natural-primary px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block font-sans">
                                          Penjelasan Versi Ulama (Tafsir Sains)
                                        </span>
                                        <p className="text-[11px] text-natural-text leading-relaxed font-serif">
                                          {activeDeriv.tafsirUlama}
                                        </p>
                                      </div>

                                      {/* Physics */}
                                      <div className="bg-white/95 border border-natural-border/35 rounded-xl p-4 space-y-2 text-justify shadow-xs">
                                        <span className="text-[10px] bg-[#FCF3EB] text-natural-accent px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block font-sans">
                                          Penjelasan Versi Fisika (Analisis Sains)
                                        </span>
                                        <p className="text-[11px] text-natural-text leading-relaxed font-serif">
                                          {activeDeriv.penjelasanFisika}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })()}
                            </div>

                            {/* Quick shortcut to interact tool */}
                            <div className="bg-natural-bg/40 border border-natural-border/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                              <span className="text-[#8C897A] font-serif">Lakukan perhitungan rumus ini secara digital:</span>
                              <button
                                onClick={() => {
                                  const calcPanel = document.getElementById("interactive-calculator-box");
                                  if (calcPanel) calcPanel.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-4 py-1.5 bg-natural-primary hover:opacity-90 text-white rounded font-bold transition-all font-sans cursor-pointer"
                              >
                                Jalankan Kalkulator Interaktif
                              </button>
                            </div>
                          </div>
                        );
                      })()}
                    </motion.div>
                  )}

                  {/* Calculator Embed is always handy at bottom of Bab III */}
                  <InteractiveCalculator />
                </div>
              )}
              {/* === SECTION 8: PBL Pedagogi Bab IV === */}
              {activeSection === "bab4-teori-pbl" && (
                <div className="space-y-6">
                  {/* Theories */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h1 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Landasan Pedagogis Model PBL & PQIL</h1>
                    <p className="text-xs text-[#8C897A] italic mb-4">Uraian teori kognitivisme belajar konstruktivis oleh tokoh dunia</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pblTheories.map((theory) => (
                        <div key={theory.theorist} className="bg-natural-bg/50 p-4 rounded-xl border border-natural-border/50 space-y-1">
                          <h3 className="font-bold text-natural-heading text-xs font-sans">
                            {theory.theorist} ({theory.concept})
                          </h3>
                          <p className="text-[11px] text-natural-text leading-relaxed text-justify font-serif">
                            {theory.academicLink}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alur 5 Sintaks */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-[#8C897A] uppercase tracking-widest pl-1 font-sans">5 Sintaks PQIL (PBL Qur'an Integrated Learning)</h3>
                    
                    <div className="space-y-4">
                      {pblSyntaxList.map((step) => (
                        <div key={step.stepNumber} className="bg-white rounded-[32px] border border-natural-border p-5 shadow-sm space-y-3">
                          <div className="flex items-center space-x-2 border-b border-natural-border/40 pb-2">
                            <span className="text-xs bg-natural-secondary text-natural-primary font-extrabold px-2.5 py-0.5 rounded font-mono">
                              Sintaks {step.stepNumber}
                            </span>
                            <span className="text-xs font-bold text-natural-heading font-serif">{step.stepName}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-natural-text leading-relaxed text-justify font-serif">
                            <div>
                              <span className="font-bold text-natural-primary block mb-1 font-sans uppercase text-[10px] tracking-wide">Aktivitas Guru</span>
                              <p>{step.teacherActivity}</p>
                            </div>
                            <div>
                              <span className="font-bold text-natural-accent block mb-1 font-sans uppercase text-[10px] tracking-wide">Skenario Berpikir Siswa</span>
                              <p>{step.studentActivity}</p>
                            </div>
                          </div>

                          <div className="bg-natural-bg p-3 rounded-lg border border-natural-border/50 text-[10px] text-[#8C897A] font-medium font-serif">
                            <span className="text-natural-heading block font-semibold mb-0.5 font-sans">Pendukung Teologis: Q.S. {step.spiritualBasis}</span>
                            <span>Mendorong pengembangan HOTS: <span className="text-natural-primary font-bold">{step.hotsElement}</span>, dengan kedalaman {step.deepLearningAspect}.</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alasan Pemilihan Model PBL */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-6 md:p-8 shadow-sm space-y-4">
                    <h2 className="text-lg font-bold text-natural-heading font-serif">Rasional Serta Alasan Adopsi Model PBL</h2>
                    <p className="text-xs text-[#8C897A] font-serif">Alasan teoretis-praktis penggunaan metode Problem Based Learning dalam menumbuhkan ranah kompetensi utuh:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-serif">
                      {pblAlasan.map((item, idx) => (
                        <div key={idx} className="bg-natural-bg/40 p-4 rounded-xl border border-natural-border/40 space-y-1.5 hover:bg-natural-secondary/30 transition-all">
                          <h4 className="font-bold text-natural-primary font-sans text-xs uppercase tracking-wide">
                            {item.aspek}
                          </h4>
                          <p className="text-[11px] text-natural-text leading-relaxed text-justify">
                            {item.alasan}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Peran Guru & Siswa Table */}
                  <div className="bg-white rounded-[32px] border border-natural-border p-5 md:p-6 shadow-sm space-y-4">
                    <div>
                      <h3 className="font-bold text-[#7A603D] text-xs font-sans uppercase tracking-wider">Tabel Peran Guru & Siswa dalam Sintaks PQIL</h3>
                      <p className="text-[11px] text-[#8C897A] font-serif mt-0.5">Matriks siber kolaboratif interaksi pendidik dan peserta didik dalam kelas:</p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-natural-border/60 text-[#8C897A] uppercase font-sans tracking-wider text-[9px]">
                            <th className="py-2.5 px-3 font-bold w-[25%]">Fokus Peran Kerja</th>
                            <th className="py-2.5 px-3 font-bold bg-natural-bg/30 text-natural-primary rounded-t-lg">Aktivitas Guru/Fasilitator</th>
                            <th className="py-2.5 px-3 font-bold bg-natural-sidebar/30 text-natural-accent rounded-t-lg">Skenario Berpikir Siswa</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-natural-border/20 font-serif leading-relaxed text-natural-text text-[11px]">
                          {peranPBLTable.map((p, pIdx) => (
                            <tr key={pIdx} className="hover:bg-[#FAF9F6] transition-colors">
                              <td className="py-3 px-3 font-sans font-bold text-natural-heading align-middle border-r border-natural-border/10">
                                {p.peran}
                              </td>
                              <td className="py-3 px-3 text-justify text-[11.5px] bg-natural-bg/5 leading-relaxed">
                                {p.guru}
                              </td>
                              <td className="py-3 px-3 text-justify text-[11.5px] bg-natural-sidebar/5 leading-relaxed">
                                {p.siswa}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* === SECTION 9: INTERACTIVE SIMULATIONS === */}
              {activeSection === "sims" && (
                <InteractiveSimulation />
              )}

              {/* === SECTION 10: LKPD WORKSHEETS === */}
              {activeSection === "lkpd" && (
                <InteractiveLKPD />
              )}

              {/* === SECTION 11: EVALUATION CENTER === */}
              {activeSection === "quiz" && (
                <HotsQuiz />
              )}

              {/* === SECTION 12: GLOSSARY === */}
              {activeSection === "glosarium" && (
                <Glossary />
              )}

            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="bg-white/50 border-t border-natural-border py-6 text-center text-xs text-[#8C897A] font-medium mt-16 font-serif">
          <div>© 2026 E-Modul Pembelajaran Fisika Terintegrasi Al-Qur'an. Disusun oleh Ananda Muliyana (250920017100003).</div>
          <div className="text-[10px] text-[#A6A290] mt-1 font-sans">Dibuat Berlandaskan Kurikulum Merdeka Fase E Belajar Mandiri Berkarakter Muslim.</div>
        </footer>
      </div>

    </div>
  );
}
