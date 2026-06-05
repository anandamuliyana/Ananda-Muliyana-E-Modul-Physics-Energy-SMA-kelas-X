export interface Section {
  id: string;
  title: string;
  icon?: string;
  contentCode?: string; // identifier of the section renderer
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  sections: Section[];
}

export interface QuranVerse {
  verseKey: string;
  surahName: string;
  verseNumber: number;
  scientificLink: string;
  arabic: string;
  translation: string;
  scientificTafsir: string;
}

export interface EnergyConcept {
  id: string;
  title: string;
  definition: string;
  formula: string;
  derivation: string;
  explanation: string;
  quranVerse: {
    reference: string;
    arabic: string;
    latin: string;
    translation: string;
    tafsir?: string;
  };
  tafsir?: string;
  scientist: {
    name: string;
    era: string;
    contribution: string;
    quote?: string;
  };
  applications: string[];
  sampleProblem: {
    question: string;
    solutionSteps: string[];
    answerValue: number;
    answerUnit: string;
    variables: { name: string; value: string; desc: string }[];
  };
  reflection: string;
  calculatorParams: {
    label: string;
    key: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    unit: string;
  }[];
  calculateFn: (inputs: Record<string, number>) => { result: number; steps: string[] };
}

export interface LKPDResponse {
  nama: string;
  kelas: string;
  kelompok: string;
  masalahVideo: string;
  pengamatanPhet: string;
  tabelK: string;
  tabelW: string;
  tabelL: string;
  ayatPilihan: string;
  hipotesis: string;
  laporanInvestigasi: string;
  refleksiQurani: string;
  kesimpulan: string;
}

export interface QuestionMC {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  domain: 'Mengamati' | 'Menganalisis' | 'Mengidentifikasi' | 'Menyimpulkan';
  quranMatch?: string; // Optional reference to Quran
}

export interface QuestionEssay {
  id: number;
  question: string;
  rubric: string[];
  sampleAnswer: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  scenario: string;
  hint: string;
  rubric: string;
  sampleSol: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Fisika' | 'Al-Qur’an' | 'Pedagogi/PBL' | 'Umum';
}
