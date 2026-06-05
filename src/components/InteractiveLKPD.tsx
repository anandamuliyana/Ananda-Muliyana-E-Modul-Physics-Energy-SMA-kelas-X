import React, { useState } from "react";
import { ClipboardList, Award, Download, Printer, Layers, HelpCircle, CheckCircle, Flame, Sun, Wind, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MeetingResponses {
  masalahVideo: string;
  pengamatanPhet: string;
  tabelK: string;
  tabelW: string;
  ayatPilihan: string;
  hipotesis: string;
  refleksiQurani: string;
  kesimpulan: string;
}

const initialMeetings: Record<1 | 2 | 3, MeetingResponses> = {
  1: {
    masalahVideo: "Wacana Krisis Energi Waduk PLTA:\nBagaimana korelasi fisis antara ketinggian bendungan waduk PLTA pedalaman dengan daya gerak generator turbin yang dihasilkan melingkar? Mengapa di beberapa daerah debit air hulu yang mengalir menyusut drastis, serta bagaimana Al-Qur'an mengisyaratkan ketetapan takaran air di tempat tinggi?",
    pengamatanPhet: "Eksperimen PhET Skate Park:\nSaat lintasan track berbentuk parabola tanpa gesekan, total energi mekanik konstan di setiap titik koordinat. Energi potensial bernilai maksimum di puncak tanjakan saat kelajuan nol. Sebaliknya, energi kinetik melonjak maksimum di dasar lintasan karena seluruh Ep berubah total menjadi Ek (Em = Ep + Ek = Konstan).",
    tabelK: "Energi mekanik merupakan penjumlahan Ep fisis dan Ek fisis. Ketinggian (h) menyimpan energi potensial gravitasi m · g · h, sedangkan gerak (v) menghasilkan kinetik ½ · m · v².",
    tabelW: "Bagaimana korelasi matematis sasis Skate Park mengonfirmasi kekekalan energi secara lestari, dan apa tafsir fisis QS. Al-Mu'minun ayat 18 tentang takaran air gunung?",
    ayatPilihan: "Q.S. Al-Mu'minun [23]: 18 (Tuhan menurunkan air hujan dari langit menurut takaran fisis tertentu, menetapkannya menetap di dalam bumi di posisi elevasi gunung berenergi potensial tinggi untuk kemudahan hidup).",
    hipotesis: "Jika tinggi lubang pipa penjatuhan air penstock (h) dilipatgandakan dua kali lipat, maka daya kinetik tumbukan pusaran air generator turbin akan berlipat ganda dua kali lipat secara sebanding lurus.",
    refleksiQurani: "Memanfaatkan kedudukan tinggi (posisi vertikal vertikal kepemimpinan) sebagai amanah luhur pemberi kesuburan bagi masyarakat bawah laksana hukum air mengalir dari puncak bukit mengairi sawah di lembah.",
    kesimpulan: "Hukum kekekalan energi mekanik berlaku mutlak pada sistem tertutup, membuktikan keteraturan sunnatullah keteraturan rancangan kosmis."
  },
  2: {
    masalahVideo: "Krisis Polusi Batubara & Potensi Angin-Surya Pesisir:\nMengapa polusi emisi jelaga pembakaran batubara pembangkit kota merusak mizan udara atmosfer (mengakibatkan efek kaca), dan bagaimana mendesain kombinasi kincir angin pesisir dan solar panel sekolah anti-israf secara mandiri?",
    pengamatanPhet: "Eksperimen PhET Energy Forms and Changes:\nMengamati konversi turbin kincir angin mekanis mementaskan hantaran arus induksi dinamo, serta konversi panel surya menyerap foton mengubah sasis semi-konduktor seketika melepaskan muatan listrik DC searah.",
    tabelK: "Pembakaran batubara melepas sisa karbon CO₂ perusak struktur ozon. Alternatif hijau adalah Energi Baru Terbarukan (EBT) seperti Angin bebas emisi (P = ½ · ρ · A · v³) dan Surya fotovoltaik.",
    tabelW: "Bagaimana cara mendesain dan menyeimbangkan pembangkit hybrid surya-angin agar listrik sekolah menyala stabil, dan bagaimana petunjuk Al-Qur'an mengenai larangan berbuat israf (anti-israf) dalam konsumsi daya?",
    ayatPilihan: "Q.S. Ar-Rum [30]: 41 (Berbagai bentuk kerusakan / fasad di darat dan di laut ditimbulkan akibat ulah serakah tangan manusia, agar mereka mencicipi akibat buruk kelakuannya).",
    hipotesis: "Transisi penggunaan energi bersih terbarukan (hybrid kincir dan sel surya) secara berkelanjutan di area sekolah sanggup menekan emisi karbon lokal hingga 85%.",
    refleksiQurani: "Mengaktifkan akhlak ekologis berupa penghematan listrik harian, menjauhi sifat israf pemborosan, dan menghormati jaring keseimbangan mizan bumi.",
    kesimpulan: "Teknologi konversi energi bersih adalah jembatan fisis-syar'i mengembalikan kelayakan hidup planet ini dari ancaman pemanasan global."
  },
  3: {
    masalahVideo: "Mini-Proyek Biogas Biomassa Pertanian Lokal:\nBagaimana merancang instalasi kubah reaktor digester biogas sederhana berbasis fermentasi kotoran hewan ternak sekolah guna menggantikan kompor minyak/gas elpiji fosil yang kian langka dan mahal?",
    pengamatanPhet: "Uji Rencana Desain Proyek Biogas:\nFermentasi sisa selulosa jerami kering dan feses sapi dipicu oleh bakteri metanogen anaerob dalam tabung bersekat melepaskan gas CH₄ metana hidrokarbon bersih berdaya bakar tinggi (Q = m · LCV).",
    tabelK: "Materi biomassa tanaman menyimpan energi kimia ikatan kovalen karbon dari proses fotosintesis klorofil matahari. Sifatnya terbarukan (netral karbon).",
    tabelW: "Bagaimana menguji perbandingan nyala api kompor biogas dengan kompor minyak tanah biasa, dan apa tafsir mendalam ayat QS. Yasin ayat 80 tentang api dari kayu hijau?",
    ayatPilihan: "Q.S. Yasin [36]: 80 (Tuhan yang menciptakan api pemanas dari bahan hijau klorofil pohon yang basah, yang seketika dapat kamu nyalakan untuk energi pembakar).",
    hipotesis: "Jika rasio Karbon-Nitrogen (C/N) di dalam tangki reaktor dikelola konstan pada rentang 25 - 30, maka kecepatan produksi gas metana biogas akan melesat maksimal.",
    refleksiQurani: "Melaksanakan amanah khalifah fil-ardh dengan mendaur ulang bahan buangan kotor (najis/limbah) menjadi berkah energi bersih tanpa menyisakan kerusakan pencemaran bau.",
    kesimpulan: "Reaktor biogas terbukti bertindak sebagai teknologi hijau terapan unggulan penyelesai krisis bahan bakar sekolah berasaskan kemandirian ekologis."
  }
};

export default function InteractiveLKPD() {
  const [activeMeeting, setActiveMeeting] = useState<1 | 2 | 3>(1);
  const [studentInfo, setStudentInfo] = useState({
    nama: "",
    kelas: "",
    kelompok: ""
  });
  const [meetings, setMeetings] = useState<Record<1 | 2 | 3, MeetingResponses>>(initialMeetings);
  const [isExported, setIsExported] = useState(false);

  const handleStudentInfoChange = (key: 'nama' | 'kelas' | 'kelompok', val: string) => {
    setStudentInfo(prev => ({ ...prev, [key]: val }));
    setIsExported(false);
  };

  const handleMeetingInputChange = (key: keyof MeetingResponses, val: string) => {
    setMeetings((prev) => ({
      ...prev,
      [activeMeeting]: {
        ...prev[activeMeeting],
        [key]: val
      }
    }));
    setIsExported(false);
  };

  const exportAsJSON = () => {
    const backupObj = {
      informasiPeserta: studentInfo,
      lembarKerja: meetings,
      timestamp: new Date().toISOString(),
      metode: "PBL-Qur'an Integrated Learning"
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `LKPD_Fisika_3_Pertemuan_${studentInfo.kelompok || "Kelompok"}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setIsExported(true);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div id="lkpd-section" className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-6 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-natural-secondary rounded-xl text-natural-primary shadow-sm">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Workbook LKPD Digital (3 Pertemuan Lengkap)</h2>
            <p className="text-sm text-[#8C897A] font-serif">Rangkaian Kegiatan Siswa Berbasis Masalah Runtut Berdasarkan Sintaks Pembelajaran Terpadu</p>
          </div>
        </div>

        <div className="flex space-x-2 font-sans shrink-0">
          <button
            onClick={exportAsJSON}
            className="px-4 py-2 bg-natural-primary hover:opacity-90 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 shadow"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Seluruh Workbook (JSON)</span>
          </button>
          <button
            onClick={triggerPrint}
            className="px-4 py-2 bg-natural-sidebar border border-natural-border text-natural-primary hover:bg-natural-secondary rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Cetak PDF</span>
          </button>
        </div>
      </div>

      {isExported && (
        <div className="bg-natural-secondary border border-natural-accent/30 p-3 rounded-lg text-xs font-bold text-[#1E2E3D] flex items-center space-x-1.5 font-serif">
          <Award className="w-4 h-4 text-natural-primary animate-bounce" />
          <span>Alhamdulillah, seluruh workbook kerja kelompok dalam 3 sesi pertemuan berhasil dicadangkan dan terunduh dengan sukses dan aman.</span>
        </div>
      )}

      {/* Group Identity Form (Unified) */}
      <div className="bg-[#F3F8FC] rounded-xl p-5 border border-natural-border/60 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-natural-primary uppercase tracking-wider block">1. Nama Anggota Kelompok / Peneliti</label>
          <input
            type="text"
            placeholder="Ketik nama lengkap siswa..."
            value={studentInfo.nama}
            onChange={(e) => handleStudentInfoChange("nama", e.target.value)}
            className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-sm text-natural-text focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent outline-none font-serif"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-natural-primary uppercase tracking-wider block">2. Kelas & Urutan Absensi</label>
          <input
            type="text"
            placeholder="Contoh: Kelas X MIPA-1"
            value={studentInfo.kelas}
            onChange={(e) => handleStudentInfoChange("kelas", e.target.value)}
            className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-sm text-natural-text focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent outline-none font-serif"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-natural-primary uppercase tracking-wider block">3. Kelompok Fokus Kerja</label>
          <input
            type="text"
            placeholder="Contoh: Kelompok B (Eco-Physics)"
            value={studentInfo.kelompok}
            onChange={(e) => handleStudentInfoChange("kelompok", e.target.value)}
            className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-sm text-natural-text focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent outline-none font-serif"
          />
        </div>
      </div>

      {/* 3 Meetings Tab Controller */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-natural-accent uppercase tracking-wider font-sans block">PILIH SESI PERTEMUAN LKPD:</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-sans">
          {[
            { id: 1, tag: "PERTEMUAN I", subtitle: "Usaha, Energi Mekanik & Kauniyah", icon: <Layers className="w-4 h-4" /> },
            { id: 2, tag: "PERTEMUAN II", subtitle: "Konversi Energi, EBT & Krisis Fasad", icon: <Wind className="w-4 h-4" /> },
            { id: 3, tag: "PERTEMUAN III", subtitle: "Rencana Mini-Proyek Biogas Hijau", icon: <Flame className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMeeting(tab.id as 1 | 2 | 3)}
              className={`p-3 border text-left rounded-2xl transition-all flex items-center space-x-3 cursor-pointer ${
                activeMeeting === tab.id
                  ? "border-natural-primary bg-natural-secondary text-natural-primary font-bold shadow-sm"
                  : "border-natural-border hover:bg-natural-secondary/30 text-natural-text/80"
              }`}
            >
              <div className={`p-1.5 rounded-lg ${activeMeeting === tab.id ? "bg-natural-primary text-white" : "bg-natural-secondary text-natural-primary"}`}>
                {tab.icon}
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-extrabold tracking-wider">{tab.tag}</span>
                <span className="block text-xs truncate leading-relaxed">{tab.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Worksheets */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMeeting}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="space-y-6 pt-2 font-serif"
        >
          <div className="bg-[#F8FAFC] border border-blue-100 p-4 rounded-2xl text-xs flex items-start space-x-2.5 text-natural-text font-serif">
            <Layers className="w-5 h-5 text-natural-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-natural-primary block font-sans uppercase text-[10px]">Silabus Pembelajaran Aktif - Sesi Pertemuan {activeMeeting}</span>
              <span className="text-[#516C82] block mt-0.5 leading-relaxed">
                {activeMeeting === 1 && "Fokus Konsep: Memahami formulasi matematis Usaha (W = F · s), Energi Kinetik (Ek), Energi Potensial Gravitasi (Ep), serta Hukum Kekekalan Energi Mekanik bertaut isyarat tadabbur Al-Qur'an."}
                {activeMeeting === 2 && "Fokus Konsep: Menganalisis diagram konversi energi terbarukan (EBT) angin, air, surya, biomassa dan mengecam bahaya polusi emisi pemanas batubara yang merobek mizan ekosistem global (Q.S. Ar-Rum: 41)."}
                {activeMeeting === 3 && "Fokus Konsep: Mendesain inovasi dan model kognitif terapan hijau berupa kubah digester pengubah gas kotoran ternak (biomassa) menjadi gas metana siap pakai sesuai petunjuk Q.S. Yasin ayat 80."}
              </span>
            </div>
          </div>

          {/* Sintaks 1 */}
          <div className="border border-natural-border bg-gradient-to-r from-natural-bg/10 to-white rounded-[24px] p-5 md:p-6 space-y-4">
            <div className="flex items-start space-x-3 border-b border-natural-border/30 pb-3 font-sans">
              <span className="bg-natural-secondary text-natural-primary text-xs px-2.5 py-0.5 rounded font-extrabold uppercase font-mono mt-0.5">Sintaks 1</span>
              <div>
                <h3 className="text-base font-bold text-natural-heading font-serif">Tahap 1: Orientasi Masalah Ilmiah & Pengisian Tabel K-W</h3>
                <p className="text-xs text-[#8C897A] mt-0.5 font-serif">Simak wacana krisis fisis di bawah dan kemukakan rumusan masalah kelompok Anda</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Wacana Kasus / Pertanyaan Pemantik Guru:</span>
                <textarea
                  rows={3}
                  value={meetings[activeMeeting].masalahVideo}
                  onChange={(e) => handleMeetingInputChange("masalahVideo", e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Tabel K (What we Know - Apa yang sudah kita ketahui dari fisika):</span>
                  <textarea
                    rows={3}
                    placeholder="Tulis pengetahuan dasar fisika yang telah dimiliki..."
                    value={meetings[activeMeeting].tabelK}
                    onChange={(e) => handleMeetingInputChange("tabelK", e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Tabel W (What we Want - Apa yang ingin kita pelajari/pecahkan):</span>
                  <textarea
                    rows={3}
                    placeholder="Tulis rasa penasaran, target hitungan, atau target analisis Quran..."
                    value={meetings[activeMeeting].tabelW}
                    onChange={(e) => handleMeetingInputChange("tabelW", e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-[#1E2E3D] outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sintaks 2 & 3 */}
          <div className="border border-natural-border bg-gradient-to-r from-natural-bg/10 to-white rounded-[24px] p-5 md:p-6 space-y-4">
            <div className="flex items-start space-x-3 border-b border-natural-border/30 pb-3 font-sans">
              <span className="bg-natural-secondary text-natural-primary text-xs px-2.5 py-0.5 rounded font-extrabold uppercase font-mono mt-0.5">Sintaks 2 & 3</span>
              <div>
                <h3 className="text-base font-bold text-natural-heading font-serif">Tahap 2 & 3: Pengajuan Hipotesis & Rekaman Hasil Praktikum Virtual</h3>
                <p className="text-xs text-[#8C897A] mt-0.5 font-serif font-serif">Ketik hipotesis fisis kelompok dan dokumentasikan tabel/catatan angka observasi lab hara</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Pengajuan Hipotesis Hubungan Variabel Fisis:</span>
                <textarea
                  rows={4}
                  placeholder="Contoh: 'Semakin tinggi h, maka Ep naik linier...' "
                  value={meetings[activeMeeting].hipotesis}
                  onChange={(e) => handleMeetingInputChange("hipotesis", e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Laporan Pengamatan Data Virtual Lab (PhET / Proyek):</span>
                <textarea
                  rows={4}
                  placeholder="Ketik angka hasil simulasi rukun fisika atau langkah desain..."
                  value={meetings[activeMeeting].pengamatanPhet}
                  onChange={(e) => handleMeetingInputChange("pengamatanPhet", e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                />
              </div>
            </div>
          </div>

          {/* Sintaks 4 */}
          <div className="border border-natural-border bg-gradient-to-r from-natural-bg/10 to-white rounded-[24px] p-5 md:p-6 space-y-4">
            <div className="flex items-start space-x-3 border-b border-natural-border/30 pb-3 font-sans">
              <span className="bg-natural-secondary text-natural-primary text-xs px-2.5 py-0.5 rounded font-extrabold uppercase font-mono mt-0.5">Sintaks 4</span>
              <div>
                <h3 className="text-base font-bold text-natural-heading font-serif">Tahap 4: Hubungan Integrasi Al-Qur'an & Kajian Tafsir</h3>
                <p className="text-xs text-[#8C897A] mt-0.5 font-serif font-serif">Kaji dalil teologis, arti, dan tinjauan ilmiah ayat kauniyah bersesuaian</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Analisis Relasi Teo-Sains (Ayat, Terjemahan, Mukjizat Ilmiah):</span>
              <textarea
                rows={4}
                value={meetings[activeMeeting].ayatPilihan}
                onChange={(e) => handleMeetingInputChange("ayatPilihan", e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
              />
            </div>
          </div>

          {/* Sintaks 5 */}
          <div className="border border-natural-border bg-gradient-to-r from-natural-bg/10 to-white rounded-[24px] p-5 md:p-6 space-y-4">
            <div className="flex items-start space-x-3 border-b border-natural-border/30 pb-3 font-sans">
              <span className="bg-natural-secondary text-natural-primary text-xs px-2.5 py-0.5 rounded font-extrabold uppercase font-mono mt-0.5">Sintaks 5</span>
              <div>
                <h3 className="text-base font-bold text-natural-heading font-serif">Tahap 5: Evaluasi Pengalaman, Komitmen Nilai Moral, & Kesimpulan</h3>
                <p className="text-xs text-[#8C897A] mt-0.5 font-serif font-serif">Nyatakan tekad peduli hemat listrik Anda serta simpulkan pembelajaran paripurna</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Akhlaqul Karimah Ekologis (Aksi Peduli Hemat Energi):</span>
                <textarea
                  rows={4}
                  placeholder="Ketik janji kelompok menghemat kelistrikan demi menjaga mizan keseimbangan..."
                  value={meetings[activeMeeting].refleksiQurani}
                  onChange={(e) => handleMeetingInputChange("refleksiQurani", e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-natural-primary font-sans block uppercase tracking-wide text-[10px]">Kesimpulan Paripurna Kelompok:</span>
                <textarea
                  rows={4}
                  placeholder="Tuliskan intisari hukum fisika dan nilai religius yang dipeluk dari kegiatan ini..."
                  value={meetings[activeMeeting].kesimpulan}
                  onChange={(e) => handleMeetingInputChange("kesimpulan", e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-natural-border rounded-lg text-xs leading-relaxed text-natural-text outline-none focus:border-natural-accent focus:ring-2 focus:ring-natural-accent/20 font-serif"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
