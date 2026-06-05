import React, { useState, useEffect } from "react";
import { energyConcepts } from "../data/energyData";
import { Calculator, Milestone, AlertCircle, HelpCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { formatMathFormula } from "../utils/formulaFormatter";

export default function InteractiveCalculator() {
  const [selectedId, setSelectedId] = useState(energyConcepts[0].id);
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [resultData, setResultData] = useState<{ result: number; steps: string[] }>({
    result: 0,
    steps: []
  });
  const [userAnswer, setUserAnswer] = useState("");
  const [answerFeedback, setAnswerFeedback] = useState<{ status: 'idle' | 'correct' | 'incorrect'; msg: string }>({
    status: 'idle',
    msg: ""
  });

  const concept = energyConcepts.find((c) => c.id === selectedId) || energyConcepts[0];

  // Initialize sliders with default values
  useEffect(() => {
    const defaultInputs: Record<string, number> = {};
    concept.calculatorParams.forEach((param) => {
      defaultInputs[param.key] = param.defaultValue;
    });
    setInputs(defaultInputs);
    setUserAnswer("");
    setAnswerFeedback({ status: 'idle', msg: "" });
  }, [selectedId, concept]);

  // Recalculate
  useEffect(() => {
    if (Object.keys(inputs).length > 0) {
      const res = concept.calculateFn(inputs);
      setResultData(res);
    }
  }, [inputs, concept]);

  const handleInputChange = (key: string, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const checkAnswer = () => {
    const parsed = parseFloat(userAnswer.replace(",", "."));
    const expected = concept.sampleProblem.answerValue;
    const tolerance = expected * 0.02; // 2% tolerance
    if (isNaN(parsed)) {
      setAnswerFeedback({
        status: 'incorrect',
        msg: "Harap masukkan nilai numerik yang valid."
      });
      return;
    }
    if (Math.abs(parsed - expected) <= tolerance) {
      setAnswerFeedback({
        status: 'correct',
        msg: `Masya Allah, jawaban Anda tepat! Nilainya adalah ${expected} ${concept.sampleProblem.answerUnit}.`
      });
    } else {
      setAnswerFeedback({
        status: 'incorrect',
        msg: `Jawaban kurang tepat. Petunjuk: coba ikuti langkah-langkah pembahasan dan periksa hitungan perkalian Anda.`
      });
    }
  };

  return (
    <div id="interactive-calculator-box" className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-natural-secondary rounded-xl text-natural-primary shadow-sm">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Kalkulator dan Latihan Soal Interaktif</h2>
          <p className="text-sm text-[#8C897A] font-serif">Pilih jenis energi untuk memulai perhitungan simulasi rumus fisika secara real-time</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Navigation of 15 energy types */}
        <div className="lg:col-span-4 bg-natural-sidebar rounded-xl p-4 max-h-[500px] overflow-y-auto border border-natural-border/40">
          <span className="text-xs font-bold text-[#8C897A] uppercase tracking-widest px-2 block mb-3 font-sans">Pilih Sumber/Jenis Energi</span>
          <div className="space-y-1">
            {energyConcepts.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                  selectedId === item.id
                    ? "bg-natural-primary text-white font-bold shadow"
                    : "text-[#5A5A40] hover:bg-natural-secondary"
                }`}
              >
                <span className="truncate">{item.title.substring(3)}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  selectedId === item.id ? "bg-white/20 text-white" : "bg-natural-secondary text-natural-primary font-bold"
                }`}>
                  {formatMathFormula(item.formula)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interaction Sliders + Steps + Practice Check */}
        <div className="lg:col-span-8 space-y-6">
          <div className="border-b border-natural-border/40 pb-4">
            <h3 className="text-xl font-bold text-natural-heading font-serif">{concept.title}</h3>
            <p className="text-sm text-[#8C897A] mt-1 font-serif">{concept.definition}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Variable sliders */}
            <div className="bg-[#FAF9F6] rounded-xl p-5 border border-natural-border/60 space-y-4">
              <h4 className="text-xs font-bold text-natural-accent uppercase tracking-widest flex items-center space-x-2 font-sans">
                <span>Sesuaikan Variabel Rumus</span>
              </h4>
              <div className="space-y-4 pt-2">
                {concept.calculatorParams.map((param) => (
                  <div key={param.key} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-natural-text font-serif">
                      <span>{param.label}</span>
                      <span className="font-bold text-natural-primary font-mono">
                        {inputs[param.key]?.toFixed(param.step >= 0.1 ? 2 : 0)} {param.unit}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={param.min}
                      max={param.max}
                      step={param.step}
                      value={inputs[param.key] || param.defaultValue}
                      onChange={(e) => handleInputChange(param.key, parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-natural-secondary rounded-lg appearance-none cursor-pointer accent-natural-primary"
                    />
                    <div className="flex justify-between text-[10px] text-[#8C897A] font-mono">
                      <span>{param.min}</span>
                      <span>{param.max}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live calculation steps */}
            <div className="bg-natural-bg/50 rounded-xl p-5 border border-natural-border/50 space-y-3 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-natural-primary uppercase tracking-widest mb-3 font-sans">Langkah Penyelesaian Matematis</h4>
                <div className="font-mono text-xs text-natural-text space-y-2">
                  {resultData.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-natural-accent font-bold">↳</span>
                      <span>{formatMathFormula(step)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-natural-border/40 pt-3 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8C897A] font-sans">Hasil Akhir:</span>
                <span className="text-lg font-bold text-natural-primary font-mono">
                  {resultData.result >= 1000000 
                    ? `${(resultData.result / 1000000).toFixed(3)} MJ` 
                    : resultData.result >= 1000 
                      ? `${(resultData.result / 1000).toFixed(2)} kJ` 
                      : `${resultData.result.toFixed(2)} J`}
                </span>
              </div>
            </div>
          </div>

          {/* Practice Question component */}
          <div className="mt-4 border-t border-natural-border/40 pt-6">
            <div className="bg-natural-bg/40 rounded-xl p-5 border border-natural-border/55">
              <div className="flex items-start space-x-3 mb-3">
                <Milestone className="w-5 h-5 text-natural-accent shrink-0 mt-0.5 animate-bounce-slow" />
                <div>
                  <h4 className="text-sm font-bold text-natural-heading font-serif">Latihan Mandiri (HOTS)</h4>
                  <p className="text-xs text-[#8C897A] font-serif mt-0.5">Kerjakan soal berikut dan periksa akurasinya menggunakan formulasi fisika di atas</p>
                </div>
              </div>

              <div className="text-sm text-natural-text leading-relaxed bg-white border border-natural-border/40 p-4 rounded-lg my-3 shadow-inner font-serif">
                {concept.sampleProblem.question}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={`Masukkan angka jawaban (Format satuan: ${concept.sampleProblem.answerUnit})`}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full px-4 py-2 border border-natural-border rounded-lg text-sm bg-white focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent outline-none font-serif"
                  />
                  <span className="absolute right-3 top-2.5 text-xs font-semibold text-[#8C897A] font-mono">
                    {concept.sampleProblem.answerUnit}
                  </span>
                </div>
                <button
                  onClick={checkAnswer}
                  className="px-5 py-2 bg-natural-primary hover:opacity-90 text-white font-bold rounded-lg text-sm transition-all font-sans shadow"
                >
                  Periksa Jawaban
                </button>
              </div>

              {answerFeedback.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start space-x-2 p-3.5 rounded-lg text-xs font-semibold mt-4 ${
                    answerFeedback.status === 'correct'
                      ? "bg-natural-secondary border border-natural-accent/30 text-natural-primary"
                      : "bg-red-50 border border-red-150 text-red-700"
                  }`}
                >
                  {answerFeedback.status === 'correct' ? (
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-natural-accent" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                  )}
                  <div>
                    <span className="font-serif block whitespace-pre-line">{answerFeedback.msg}</span>
                    {answerFeedback.status === 'incorrect' && (
                      <button
                        onClick={() => {
                          setAnswerFeedback({
                            status: 'correct',
                            msg: `PEMBAHASAN RUNTUT:\n\n` + concept.sampleProblem.solutionSteps.map(s => formatMathFormula(s)).join("\n")
                          });
                        }}
                        className="block underline mt-1.5 hover:text-natural-primary text-left font-bold"
                      >
                        Buka Rahasia Solusi Langkah-Demi-Langkah 🗝️
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
