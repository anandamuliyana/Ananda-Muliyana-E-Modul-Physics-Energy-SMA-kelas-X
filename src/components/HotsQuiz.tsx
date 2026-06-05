import React, { useState } from "react";
import { mcQuestions, essayQuestions, caseStudies, diagnosticRubric, formativeRubric, sumativeRubric } from "../data/quizData";
import { Award, CheckCircle, XCircle, ChevronRight, HelpCircle, FileText, AlertCircle, BookOpen, Lightbulb, Compass, Users, Crosshair } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type EvaluasiTab = "pilihan-ganda" | "essay" | "studi-kasus" | "rubrik-penilaian";

export default function HotsQuiz() {
  const [activeTab, setActiveTab] = useState<EvaluasiTab>("pilihan-ganda");

  // MCQ state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Essay & Case state
  const [expandedEssay, setExpandedEssay] = useState<Record<number, boolean>>({});
  const [expandedCase, setExpandedCase] = useState<Record<number, boolean>>({});
  const [essayInputs, setEssayInputs] = useState<Record<number, string>>({});
  const [caseInputs, setCaseInputs] = useState<Record<number, string>>({});

  const toggleEssaySelection = (id: number) => {
    setExpandedEssay((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCaseSelection = (id: number) => {
    setExpandedCase((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // MCQ calculations
  const totalQuestions = mcQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = mcQuestions.filter((q) => selectedAnswers[q.id] === q.answerIndex).length;
  const score = Math.round((correctCount / totalQuestions) * 100);

  // Stats by Domain
  const domainStats = () => {
    const categories: Record<string, { total: number; correct: number }> = {
      Mengamati: { total: 0, correct: 0 },
      Menganalisis: { total: 0, correct: 0 },
      Mengidentifikasi: { total: 0, correct: 0 },
      Menyimpulkan: { total: 0, correct: 0 }
    };

    mcQuestions.forEach((q) => {
      categories[q.domain].total++;
      if (selectedAnswers[q.id] === q.answerIndex) {
        categories[q.domain].correct++;
      }
    });

    return categories;
  };

  const currentQuestion = mcQuestions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion.id]: optIdx }));
    setShowExplanation(true);
  };

  const resetMCQ = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  return (
    <div id="quiz-section" className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 lg:p-8">
      {/* Tab select header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-6 mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Evaluasi Belajar Mandiri (HOTS)</h2>
          <p className="text-sm text-[#8C897A] font-serif">Uji tingkat pemahaman kognitif fisika dan literasi Qur'ani Anda secara komprehensif</p>
        </div>

        <div className="flex flex-wrap bg-natural-bg/80 border border-natural-border/30 p-1 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab("pilihan-ganda")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "pilihan-ganda" ? "bg-natural-primary text-white shadow font-bold" : "text-[#5A5A40] hover:text-natural-heading"
            }`}
          >
            Pilihan Ganda
          </button>
          <button
            onClick={() => setActiveTab("essay")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "essay" ? "bg-natural-primary text-white shadow font-bold" : "text-[#5A5A40] hover:text-natural-heading"
            }`}
          >
            Soal Essay
          </button>
          <button
            onClick={() => setActiveTab("studi-kasus")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "studi-kasus" ? "bg-natural-primary text-white shadow font-bold" : "text-[#5A5A40] hover:text-natural-heading"
            }`}
          >
            Studi Kasus
          </button>
          <button
            onClick={() => setActiveTab("rubrik-penilaian")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "rubrik-penilaian" ? "bg-natural-primary text-white shadow font-bold" : "text-[#5A5A40] hover:text-natural-heading"
            }`}
          >
            Rubrik Penilaian
          </button>
        </div>
      </div>

      {/* ---------------- PILIHAN GANDA TAB ---------------- */}
      {activeTab === "pilihan-ganda" && (
        <div>
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-serif">
              {/* Question panel */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between font-sans">
                  <span className="text-xs bg-natural-secondary text-natural-primary px-2.5 py-1 rounded-full font-bold tracking-wide">
                    Pertanyaan {currentIdx + 1} dari {totalQuestions}
                  </span>
                  <span className="text-xs text-[#8C897A] font-semibold font-mono">
                    Domain: <span className="text-natural-accent font-bold">{currentQuestion.domain}</span>
                  </span>
                </div>

                <div className="text-base text-natural-heading font-bold leading-relaxed whitespace-pre-line bg-[#FAF9F6] p-5 rounded-[20px] border border-natural-border/60">
                  {currentQuestion.question}
                </div>

                {/* Options List */}
                <div className="space-y-2.5 font-sans">
                  {currentQuestion.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[currentQuestion.id] === oIdx;
                    const isCorrectAnswer = currentQuestion.answerIndex === oIdx;
                    const answered = selectedAnswers[currentQuestion.id] !== undefined;

                    let btnStyles = "border-natural-border hover:bg-[#FAF9F6] text-natural-text hover:text-natural-heading";
                    if (isSelected) {
                      btnStyles = "border-natural-accent bg-natural-secondary text-natural-primary font-bold shadow-xs";
                    }

                    if (answered) {
                      if (isCorrectAnswer) {
                        btnStyles = "border-natural-accent bg-natural-secondary text-natural-primary font-bold shadow-inner";
                      } else if (isSelected) {
                        btnStyles = "border-red-300 bg-red-50 text-red-800";
                      } else {
                        btnStyles = "border-natural-border/30 opacity-65 text-[#A6A290]";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={answered}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left px-5 py-3.5 border rounded-xl text-xs transition-all flex items-center justify-between outline-none ${btnStyles}`}
                      >
                        <span>{opt}</span>
                        {answered && (
                          <span>
                            {isCorrectAnswer ? (
                              <CheckCircle className="w-5 h-5 text-natural-accent" />
                            ) : isSelected ? (
                              <XCircle className="w-5 h-5 text-red-500" />
                            ) : null}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Live Explanation box */}
                <AnimatePresence>
                  {showExplanation && selectedAnswers[currentQuestion.id] !== undefined && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-natural-bg/50 border border-natural-border/40 rounded-xl p-5 space-y-2"
                    >
                      <div className="flex items-center space-x-2 text-natural-primary">
                        <BookOpen className="w-4.5 h-4.5" />
                        <h4 className="text-xs font-bold uppercase tracking-wider font-sans">Tinjauan & Pembahasan Konseptual</h4>
                      </div>
                      <p className="text-xs text-natural-text leading-relaxed whitespace-pre-line font-serif">
                        {currentQuestion.explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation inside quiz */}
                <div className="flex justify-between items-center pt-4 border-t border-natural-border/40 font-sans">
                  <button
                    disabled={currentIdx === 0}
                    onClick={() => {
                      setCurrentIdx((p) => p - 1);
                      setShowExplanation(true);
                    }}
                    className="px-4 py-2 border border-natural-border text-natural-text hover:bg-natural-secondary disabled:opacity-50 font-bold rounded-lg text-xs"
                  >
                    Sebelumnya
                  </button>

                  {currentIdx === totalQuestions - 1 ? (
                    <button
                      disabled={answeredCount < totalQuestions}
                      onClick={() => setIsSubmitted(true)}
                      className="px-5 py-2 bg-natural-primary hover:opacity-90 disabled:opacity-50 text-white font-bold rounded-lg text-xs shadow"
                    >
                      Kirim Evaluasi Mandiri
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentIdx((p) => p + 1);
                        setShowExplanation(false);
                      }}
                      className="px-5 py-2 bg-natural-accent hover:opacity-90 text-natural-primary font-bold rounded-lg text-xs flex items-center space-x-1"
                    >
                      <span>Selanjutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of indicators */}
              <div className="lg:col-span-4 bg-natural-sidebar rounded-2xl p-5 border border-natural-border/40 space-y-4 font-sans">
                <h4 className="text-xs font-bold text-natural-heading uppercase tracking-widest pl-1">Lembar Jawaban Siswa</h4>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {mcQuestions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isPassedAndCorrect = isAnswered && selectedAnswers[q.id] === q.answerIndex;

                    let gridStyles = "bg-white border-natural-border text-natural-text";
                    if (isAnswered) {
                      gridStyles = isPassedAndCorrect
                        ? "bg-natural-accent border-natural-accent text-natural-primary"
                        : "bg-red-550 border-red-500 bg-red-100 text-red-800";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentIdx(idx);
                          setShowExplanation(true);
                        }}
                        className={`w-full aspect-square text-xs font-bold rounded-xl border flex items-center justify-center transition-all ${gridStyles} ${
                          currentIdx === idx ? "ring-2 ring-natural-primary/50" : ""
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="pt-4 border-t border-natural-border/30 flex flex-col justify-end space-y-2 text-[10px] text-natural-text font-medium">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-natural-accent rounded-full" />
                    <span>Jawaban Tepat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                    <span>Jawaban Kurang Tepat</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Results screen showing final score and breakdown
            <div className="text-center py-8 max-w-xl mx-auto space-y-8 font-serif">
              <div className="space-y-3">
                <div className="w-20 h-20 bg-natural-secondary rounded-full flex items-center justify-center text-natural-primary mx-auto shadow-xs border border-natural-border/40">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-natural-heading">Alhamdulillah! Evaluasi Selesai</h3>
                <p className="text-[#8C897A] text-sm">Berikut adalah pencapaian kognitif dari pengerjaan soal-soal HOTS Anda</p>
              </div>

              {/* Score Display */}
              <div className="bg-[#FAF9F6] border border-natural-border/60 rounded-[32px] p-6 relative max-w-xs mx-auto">
                <span className="text-[10px] bg-natural-secondary text-natural-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-widest absolute top-4 left-1/2 -translate-x-1/2 font-sans">
                  Skor Anda
                </span>
                <div className="text-6xl font-extrabold text-natural-primary font-mono mt-4">{score}</div>
                <div className="text-xs text-[#8C897A] mt-2 font-sans font-bold">
                  {correctCount} Jawaban Tepat dari {totalQuestions} Soal
                </div>
              </div>

              {/* Stats by Domain */}
              <div className="space-y-4 text-left font-sans">
                <h4 className="text-xs font-bold text-natural-heading uppercase tracking-widest pl-1 text-left">Pencapaian berdasarkan Domain Ilmiah</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(domainStats()).map(([domain, data]) => {
                    const domainPercent = Math.round((data.correct / data.total) * 100);
                    return (
                      <div key={domain} className="bg-natural-bg/40 border border-natural-border/40 p-4 rounded-xl space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-natural-text">
                          <span>Domain {domain}</span>
                          <span className="font-mono text-natural-primary">{domainPercent}%</span>
                        </div>
                        <div className="w-full bg-natural-secondary h-2 rounded-full overflow-hidden">
                          <div className="bg-natural-primary h-full rounded-full" style={{ width: `${domainPercent}%` }} />
                        </div>
                        <div className="text-[10px] text-[#8C897A] font-medium">
                          {data.correct} benar dari {data.total} pertanyaan
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={resetMCQ}
                className="px-6 py-2.5 bg-natural-primary hover:opacity-90 text-white font-bold rounded-lg text-xs font-sans shadow"
              >
                Ulangi Tes Kognitif
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------------- ESSAY QUESTIONS TAB ---------------- */}
      {activeTab === "essay" && (
        <div className="space-y-4 font-serif">
          <div className="flex items-center space-x-2 text-[#5A5A40] text-xs bg-natural-bg/50 p-3 rounded-lg border border-natural-border/30">
            <AlertCircle className="w-4 h-4 shrink-0 text-natural-accent" />
            <span>Ketik draf jawaban Anda di kolom input, lalu tekan tombol untuk mencocokkan dengan kunci jawaban resmi dan rubrik penskoran nasional.</span>
          </div>

          <div className="space-y-4 pt-2">
            {essayQuestions.map((essay, idx) => (
              <div key={essay.id} className="border border-natural-border/70 rounded-[20px] overflow-hidden shadow-xs">
                {/* Header question click bar */}
                <button
                  onClick={() => toggleEssaySelection(essay.id)}
                  className="w-full text-left px-5 py-4 bg-[#FAF9F6] hover:bg-natural-secondary border-b border-natural-border/40 flex justify-between items-center transition-all font-sans"
                >
                  <span className="text-sm font-bold text-natural-heading font-serif">
                    Soal Essay {idx + 1}
                  </span>
                  <span className="text-xs text-natural-primary font-extrabold underline">
                    {expandedEssay[essay.id] ? "Tutup Pembahasan" : "Tulis Jawaban & Buka Detail"}
                  </span>
                </button>

                {expandedEssay[essay.id] && (
                  <div className="p-5 space-y-4 bg-white">
                    <p className="text-sm text-natural-heading leading-relaxed font-bold whitespace-pre-line p-4 bg-[#FAF9F6] border border-natural-border/40 rounded-lg">
                      {essay.question}
                    </p>

                    <div className="space-y-1.5 font-sans">
                      <span className="text-xs font-bold text-[#8C897A] uppercase tracking-widest">Tulis Draf Analisis Anda</span>
                      <textarea
                        rows={3}
                        placeholder="Ketik draf jawaban hitungan dan argumentasi Anda di sini..."
                        value={essayInputs[essay.id] || ""}
                        onChange={(e) => setEssayInputs((p) => ({ ...p, [essay.id]: e.target.value }))}
                        className="w-full px-4 py-2 border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none bg-white focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-natural-border/30 text-xs">
                      {/* Rubric column */}
                      <div className="bg-[#FAF7F0] border border-natural-border/30 p-4 rounded-xl space-y-2">
                        <h4 className="font-bold text-[#7A603D] uppercase tracking-wider flex items-center space-x-1 font-sans">
                          <FileText className="w-4 h-4 shrink-0" />
                          <span>Rubrik Penskoran Nasional</span>
                        </h4>
                        <ul className="space-y-1.5 text-natural-text leading-relaxed">
                          {essay.rubric.map((rule, rIdx) => (
                            <li key={rIdx} className="list-disc ml-4 font-mono text-[10px]">
                              {rule}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Model Solution */}
                      <div className="bg-natural-bg/40 border border-natural-border/30 p-4 rounded-xl space-y-2">
                        <h4 className="font-bold text-natural-primary uppercase tracking-wider flex items-center space-x-1 font-sans">
                          <Lightbulb className="w-4.5 h-4.5 shrink-0" />
                          <span>Jawaban Model Utama</span>
                        </h4>
                        <p className="text-natural-heading leading-relaxed text-[11px] whitespace-pre-line">
                          {essay.sampleAnswer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- REAL CASE STUDIES TAB ---------------- */}
      {activeTab === "studi-kasus" && (
        <div className="space-y-4 font-serif">
          <div className="flex items-center space-x-2 text-[#5A5A40] text-xs bg-natural-bg/50 p-3 rounded-lg border border-natural-border/30">
            <Lightbulb className="w-4 h-4 text-natural-accent shrink-0" />
            <span>Petunjuk: Telaah kelayakan skenario kasus krisis transisi energi terpadu, dan rumuskan rencana teknologi hijau Anda di sela draf kolom.</span>
          </div>

          <div className="space-y-4 pt-2">
            {caseStudies.map((item, idx) => (
              <div key={item.id} className="border border-natural-border/70 rounded-[20px] overflow-hidden shadow-xs">
                <button
                  onClick={() => toggleCaseSelection(item.id)}
                  className="w-full text-left px-5 py-4 bg-[#FAF9F6] hover:bg-natural-secondary border-b border-natural-border/40 flex justify-between items-center transition-all font-sans"
                >
                  <span className="text-sm font-bold text-natural-heading font-serif">
                    Misi Kasus {idx + 1}: {item.title.substring(15)}
                  </span>
                  <span className="text-xs text-natural-primary font-extrabold underline">
                    {expandedCase[item.id] ? "Tutup Skenario" : "Buka Misi & Skenario Proyek"}
                  </span>
                </button>

                {expandedCase[item.id] && (
                  <div className="p-5 space-y-4 bg-white">
                    <p className="text-sm text-natural-heading leading-relaxed font-bold whitespace-pre-line p-4 bg-natural-bg/30 border border-natural-border/40 rounded-lg">
                      {item.scenario}
                    </p>

                    <div className="space-y-1.5 bg-[#FAF9F6] p-3.5 rounded-lg border border-natural-border/50 text-xs text-[#5A5A40] italic">
                      <span className="font-bold uppercase text-natural-heading block not-italic mb-1 font-sans">Clue/Petunjuk Perhitungan</span>
                      <span>{item.hint}</span>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <span className="text-xs font-bold text-[#8C897A] uppercase tracking-widest">Tulis Ringkasan Rekomendasi Solusi Anda</span>
                      <textarea
                        rows={4}
                        placeholder="Rancang langkah rekayasa fisik, taksiran daya, dan integrasi nilai Qurani kelompok..."
                        value={caseInputs[item.id] || ""}
                        onChange={(e) => setCaseInputs((p) => ({ ...p, [item.id]: e.target.value }))}
                        className="w-full px-4 py-2 border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none bg-white focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent font-serif"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-natural-border/30 text-xs font-sans">
                      {/* Rubric */}
                      <div className="bg-[#FAF7F0] border border-natural-border/30 p-4 rounded-xl space-y-2 text-[#5C5C4A] font-serif">
                        <span className="font-bold text-[#7A603D] uppercase block tracking-wider mb-1 font-sans">Rubrik Kompetensi Penilaian</span>
                        <span>{item.rubric}</span>
                      </div>

                      {/* Solution */}
                      <div className="bg-natural-bg/40 border border-natural-border/30 p-4 rounded-xl space-y-2 font-serif">
                        <span className="font-bold text-natural-primary uppercase block tracking-wider mb-1 font-sans">Model Rekomendasi Solusi Rekayasa</span>
                        <p className="text-natural-heading leading-relaxed text-[11px] whitespace-pre-line">
                          {item.sampleSol}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- ASSESSMENT RUBRICS TAB ---------------- */}
      {activeTab === "rubrik-penilaian" && (
        <div className="space-y-8 font-serif">
          {/* Header instructions */}
          <div className="flex items-center space-x-2.5 text-[#5A5A40] text-xs bg-natural-bg/50 p-3.5 rounded-lg border border-natural-border/30">
            <Compass className="w-4 h-4 text-natural-accent shrink-0 animate-spin-slow" />
            <span>Informasi: Berikut adalah matriks kriteria ketercapaian tujuan pembelajaran (KKTP) berbasis Kurikulum Merdeka Fase E terpadu spiritual-sains fisikawan Muslim.</span>
          </div>

          <div className="space-y-6">
            {[diagnosticRubric, formativeRubric, sumativeRubric].map((rubric, idx) => (
              <div key={idx} className="bg-white border border-natural-border/60 rounded-[20px] p-5 md:p-6 shadow-sm space-y-4">
                <div className="flex items-center space-x-2.5 border-b border-natural-border/40 pb-3">
                  <div className="w-8 h-8 bg-natural-secondary rounded-full flex items-center justify-center text-natural-primary font-bold text-xs uppercase font-sans">
                    {idx === 0 ? "Dia" : idx === 1 ? "For" : "Sum"}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-natural-heading font-sans">{rubric.title}</h3>
                    <p className="text-[10px] text-[#8C897A] font-serif mt-0.5">Aspek penilaian kemandirian dan kolaboratif peserta didik</p>
                  </div>
                </div>

                {/* Table for Desktop, Cards for Mobile */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-natural-border/60 text-[#8C897A] uppercase font-sans tracking-wider text-[9px]">
                        <th className="py-2.5 pr-4 font-bold max-w-[140px]">Kriteria Aspek</th>
                        <th className="py-2.5 px-4 font-bold bg-red-50/50 text-red-800 rounded-t-lg">Berkembang ({"<"} 60)</th>
                        <th className="py-2.5 px-4 font-bold bg-amber-50/50 text-amber-800 rounded-t-lg">Cukup (60-80)</th>
                        <th className="py-2.5 px-4 font-bold bg-emerald-50/50 text-emerald-800 rounded-t-lg">Mahir (81-100)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-natural-border/30">
                      {rubric.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#FAF9F6] transition-colors leading-relaxed">
                          <td className="py-3.5 pr-4 font-bold text-natural-heading font-sans align-middle max-w-[140px]">
                            {row.kriteria}
                          </td>
                          <td className="py-3.5 px-4 bg-red-50/10 text-red-950 align-top text-justify text-[11px] font-medium font-serif leading-relaxed">
                            {row.berkembang}
                          </td>
                          <td className="py-3.5 px-4 bg-amber-50/10 text-amber-950 align-top text-justify text-[11px] font-medium font-serif leading-relaxed">
                            {row.cukup}
                          </td>
                          <td className="py-3.5 px-4 bg-emerald-50/10 text-emerald-950 align-top text-justify text-[11px] font-medium font-serif leading-relaxed">
                            {row.mahir}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile version */}
                <div className="block md:hidden space-y-4">
                  {rubric.rows.map((row, rIdx) => (
                    <div key={rIdx} className="border border-natural-border/40 rounded-xl overflow-hidden space-y-2">
                      <div className="bg-[#FAF9F6] py-2 px-3 border-b border-natural-border/30 text-xs font-bold text-natural-heading font-sans">
                        {row.kriteria}
                      </div>
                      <div className="p-2.5 space-y-2 text-[11px] leading-relaxed">
                        <div className="bg-red-50/30 p-2.5 rounded-lg border border-red-100/50 text-red-950">
                          <span className="font-bold text-red-800 font-sans block text-[9px] uppercase tracking-wide">Berkembang:</span>
                          <span className="text-justify font-serif">{row.berkembang}</span>
                        </div>
                        <div className="bg-amber-50/30 p-2.5 rounded-lg border border-amber-100/50 text-amber-950">
                          <span className="font-bold text-amber-800 font-sans block text-[9px] uppercase tracking-wide">Cukup:</span>
                          <span className="text-justify font-serif">{row.cukup}</span>
                        </div>
                        <div className="bg-emerald-50/30 p-2.5 rounded-lg border border-emerald-100/50 text-emerald-950">
                          <span className="font-bold text-emerald-800 font-sans block text-[9px] uppercase tracking-wide">Mahir:</span>
                          <span className="text-justify font-serif">{row.mahir}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
