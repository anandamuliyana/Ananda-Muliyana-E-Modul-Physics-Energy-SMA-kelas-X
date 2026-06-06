import React, { useState, useEffect } from "react";
import { 
  ClipboardList, 
  Award, 
  Download, 
  Printer, 
  Layers, 
  HelpCircle, 
  CheckCircle, 
  Flame, 
  Sun, 
  Wind, 
  Droplets, 
  Video, 
  Calculator, 
  Sparkles, 
  BookOpen, 
  Users, 
  Compass, 
  ChevronRight, 
  AlertCircle, 
  RefreshCw 
} from "lucide-react";
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

const initialMeetings: Record<1 | 2 | 3 | 4, MeetingResponses> = {
  1: {
    masalahVideo: "Wacana Krisis Energi Waduk PLTA:\nBagaimana korelasi fisis antara ketinggian bendungan waduk PLTA pedalaman dengan daya gerak generator turbin yang dihasilkan melingkar? Mengapa di beberapa daerah debit air hulu yang mengalir menyusut drastis, serta bagaimana Al-Qur'an mengisyaratkan ketetapan takaran air di tempat tinggi?",
    pengamatanPhet: "Eksperimen PhET Skate Park:\nSaat lintasan track berbentuk parabola tanpa gesekan, total energi mekanik konstan di setiap titik koordinat. Energi potensial bernilai maksimum di puncak tanjakan saat kelajuan nol. Sebaliknya, energi kinetik melonjak maksimum di dasar lintasan karena seluruh Ep berubah total menjadi Ek (Em = Ep + Ek = Konstan).",
    tabelK: "Energi mekanik merupakan penjumlahan Ep fisis dan Ek fisis. Ketinggian (h) menyimpan energi potensial gravitasi m · g · h, sedangkan gerak (v) menghasilkan kinetik ½ · m · v².",
    tabelW: "Bagaimana korelasi matematis sasis Skate Park mengonfirmasi kekekalan energi secara lestari, dan apa tafsir fisis QS. Al-Mu'minun ayat 18 tentang takaran air gunung?",
    ayatPilihan: "Q.S. Al-Mu'minun [23]: 18 (Tuhan menurunkan air hujan dari langit menurut takaran fisis tertentu, menetapkannya menetap di dalam bumi di posisi elevasi gunung berenergi potensial tinggi untuk kemudahan hidup).",
    hipotesis: "Jika tinggi lubang pipa penjatuhan air penstock (h) dilipatgandakan dua kali lipat, maka daya kinetik tumbukan pusaran air generator turbin akan berlipat ganda dua kali lipat secara sebanding lurus.",
    refleksiQurani: "Memanfaatkan kedudukan tinggi (posisi vertikal kepemimpinan) sebagai amanah luhur pemberi kesuburan bagi masyarakat bawah laksana hukum air mengalir dari puncak bukit mengairi sawah di lembah.",
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
  },
  4: {
    masalahVideo: "Video Menilai Pemborosan Energi & Pola Hidup Mewah (Mubazir/Israf):\nBagaimana konsumsi listrik standby power dari tancapan pengisi daya (charger) tak terpakai atau pemanas air di rumah tinggal berkontribusi pada pemborosan energi makro? Berdasarkan video demonstrasi, apa dampak fisis akumulasi kebocoran energi fokal ini terhadap keseimbangan beban transformator gardu induk, serta apa makna larangan Al-Qur'an tentang melampaui batas (israf) dalam memanfaatkan nikmat alam?",
    pengamatanPhet: "Hasil Telaah Video & Studi Kasus Kebocoran Energi Standby:\nDari cuplikan video edukatif, teramati bahwa peralatan elektronik dalam mode mati 'standby' tetap menyerap listrik konstan antara 1-8 Watt per perangkat (Vampire Draw). Tim menyurvei 5 rumah anggota kelompok dan mengidentifikasi kebocoran energi pasif akibat charger HP dibiarkan tercolok, lampu hidup siang hari, kipas angin menyala kosong, router Wi-Fi menyala semalaman, dan penanak nasi dispenser tetap memanas.",
    tabelK: "Energi merupakan perkalian daya (P = V · I) dengan durasi waktu (t). Meskipun peranti dalam status off, arus bocor mikro tetap ditarik oleh trafo internal induktor pengisi daya selama steker terhubung ke jaringan tegangan AC.",
    tabelW: "Bagaimana merancang taktik kampanye sosial non-praktikum (seperti rancangan infografis 'Green Eco-Akhlaq' sekolah) guna memicu kesadaran menghentikan standby power harian secara massal, serta apa pesan utama Q.S. Al-Isra' ayat 26-27?",
    ayatPilihan: "Q.S. Al-Isra' [17]: 26-27 (Janganlah menghambur-hamburkan secara boros. Sesungguhnya orang-orang pemboros itu adalah saudara setan). Teologi ini mengategorikan perbuatan menyia-nyiakan energi terbuang tanpa manfaat sebagai bentuk pengingkaran atas amanah kedaulatan sumber daya.",
    hipotesis: "Jika seluruh siswa di satu sekolah serentak mencabut steker dari saluran dinding setiap meninggalkan kelas, konsumsi energi fisis (kWh) non-produktif sekolah akan mengalami reduksi signifikan hingga 18%.",
    refleksiQurani: "Meluncurkan aksi dakwah kultural non-praktikum berupa penempelan stiker buatan kelompok bertuliskan 'Stop Israf Listrik!' di samping setiap sakelar kelas sebagai manifestasi kepemimpinan Khalifah fil-Ardh yang penuh amanah.",
    kesimpulan: "Penyelamatan krisis energi tidak hanya bertumpu pada kemajuan riset pembangkitan teknologi kuantum, melainkan dimulai dari perubahan akhlak individu (Eco-Akhlaq) yang menolak perilaku mubazir demi melestarikan mizan bumi."
  }
};

export default function InteractiveLKPD() {
  const [activeMeeting, setActiveMeeting] = useState<1 | 2 | 3 | 4>(1);
  const [activeSintaks, setActiveSintaks] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [studentInfo, setStudentInfo] = useState({
    nama: "Kelompok Al-Fatih (X-B)",
    kelas: "Fase E - Sepuluh 2 (MA/SMA)",
    kelompok: "Tim Litbang Kedaulatan Energi"
  });
  const [meetings, setMeetings] = useState<Record<1 | 2 | 3 | 4, MeetingResponses>>(initialMeetings);
  const [isExported, setIsExported] = useState(false);

  // States for interactive spreadsheet components
  // Meeting 1 spreadsheets
  const [m1Mass, setM1Mass] = useState<number>(1000);
  const [m1Velocity, setM1Velocity] = useState<number>(20);
  const [m1Height, setM1Height] = useState<number>(50);
  const [m1CalcStatus, setM1CalcStatus] = useState<string>("");

  // Meeting 2 spreadsheets (Appliance lists for audit)
  const [m2Appliances, setM2Appliance] = useState([
    { name: "Lampu Kelas (LED)", qty: 6, power: 10, hours: 8 },
    { name: "Proyektor LCD", qty: 1, power: 250, hours: 4 },
    { name: "Air Conditioner (AC)", qty: 1, power: 1100, hours: 6 },
    { name: "Laptop Guru", qty: 1, power: 65, hours: 5 }
  ]);

  // Meeting 3 spreadsheets (biogas parameter comparison and feedstock)
  const [m3Matrix, setM3Matrix] = useState([
    { criteria: "Dampak Lingkungan (CO₂)", fossil: "Sangat Tinggi (Emisi Jelaga)", biogas: "Nir-Bersih Netral Karbon", theology: "Q.S. Ar-Rum: 41 (Mencegah Fasad)", score: "Unggul Biogas" },
    { criteria: "Biaya Operasional", fossil: "Fluktuatif & Terus Naik", biogas: "Murah Berkelanjutan", theology: "Q.S. Al-An'am: 141 (Bebas Israf)", score: "Unggul Biogas" },
    { criteria: "Ketersediaan Lahan", fossil: "Tergantung Tambang Pusat", biogas: "Mandiri Lokal Terjamin", theology: "Q.S. Yasin: 80 (Kemudahan Energi)", score: "Unggul Biogas" }
  ]);
  const [m3Feedstock, setM3Feedstock] = useState<number>(150); // Daily animal manure in kg
  const [m3GasYield, setM3GasYield] = useState<number>(0.04);   // m3 of biogas produced per kg manure

  // Meeting 4 spreadsheets (vampire draw calculator)
  const [m4Vampires, setM4Vampires] = useState([
    { name: "Charger HP dibiarkan tercolok", qty: 5, power: 2.5, hours: 20 },
    { name: "Dispenser Kosong status On", qty: 1, power: 450, hours: 12 },
    { name: "Modem Wi-Fi malam hari", qty: 1, power: 12, hours: 8 },
    { name: "TV Standby Lampu LED", qty: 2, power: 4.8, hours: 18 }
  ]);

  // Sintaks 2: Interactive Group Roles
  const [assignedRoles, setAssignedRoles] = useState<Record<string, string>>({
    ketua: "Ananda Muliyana",
    sekretaris: "Siti Rahma",
    presenter: "Muhammad Fahri",
    sains: "Rizki Hidayat",
    quran: "Nurul Husna"
  });

  // Sintaks 5: Interactive Self-Assessment Eco-Akhlaq
  const [ecoAkhlaqScores, setEcoAkhlaqScores] = useState<Record<number, string>>({
    0: "Sering",
    1: "Sangat Sering",
    2: "Sering",
    3: "Sangat Sering"
  });

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
      pembagianPeran: assignedRoles,
      evaluasiEcoAkhlaq: ecoAkhlaqScores,
      lembarKerja: meetings,
      spreadsheetData: {
        pertemuan1: { m1Mass, m1Velocity, m1Height },
        pertemuan2: { m2Appliances },
        pertemuan3: { m3Matrix, m3Feedstock, m3GasYield },
        pertemuan4: { m4Vampires }
      },
      timestamp: new Date().toISOString(),
      metode: "PBL-Qur'an Integrated Learning (PQIL)"
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `LKPD_Fisika_4_Pertemuan_${studentInfo.kelompok || "Kelompok"}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setIsExported(true);
  };

  const triggerPrint = () => {
    window.print();
  };

  // Calculations for spreadsheets
  // Pertemuan 1 Calculations
  const calculatedM1Ek = 0.5 * m1Mass * Math.pow(m1Velocity, 2);
  const calculatedM1Ep = m1Mass * 9.8 * m1Height;
  const calculatedM1Em = calculatedM1Ek + calculatedM1Ep;

  // Pertemuan 2 Calculations (Auditing costs)
  const calculateTotalm2Kwh = () => {
    let wattHourTotal = 0;
    m2Appliances.forEach(app => {
      wattHourTotal += app.qty * app.power * app.hours;
    });
    return (wattHourTotal / 1000) * 30; // 30 Days in Month
  };
  const totalM2Cost = calculateTotalm2Kwh() * 1500; // Rp 1500 per kWh

  // Pertemuan 4 Calculations (Vampire Draw)
  const calculateM4TotalKwh = () => {
    let whTotal = 0;
    m4Vampires.forEach(v => {
      whTotal += v.qty * v.power * v.hours;
    });
    return (whTotal / 1000) * 30;
  };
  const m4TotalCost = calculateM4TotalKwh() * 1500;

  // Update appliance list handler
  const handleApplianceChange = (index: number, field: "qty" | "power" | "hours", value: any) => {
    const updated = [...m2Appliances];
    updated[index] = { ...updated[index], [field]: Number(value) };
    setM2Appliance(updated);
  };

  // Update vampire draw list
  const handleVampireChange = (index: number, field: "qty" | "power" | "hours", value: any) => {
    const updated = [...m4Vampires];
    updated[index] = { ...updated[index], [field]: Number(value) };
    setM4Vampires(updated);
  };

  return (
    <div id="lkpd-section" className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 lg:p-8 space-y-6">
      
      {/* --- WEB HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-natural-border/40 pb-6 gap-4 print:hidden">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-natural-secondary rounded-xl text-natural-primary shadow-sm space-y-1">
            <ClipboardList className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-natural-accent font-extrabold uppercase tracking-widest font-sans bg-natural-secondary px-2.5 py-0.5 rounded-full border border-natural-accent/25 block w-fit">
              Kurikulum Merdeka Terintegrasi Al-Qur'an
            </span>
            <h2 className="text-xl md:text-2xl font-black text-natural-heading tracking-tight font-serif mt-1">
              Workbook LKPD Digital (4 Pertemuan Lengkap)
            </h2>
            <p className="text-xs text-[#8C897A] font-serif">
              Lembar Kerja Berbasis Model Problem Based Learning (PBL) Terpadu Ayat Kauniyah
            </p>
          </div>
        </div>

        <div className="flex space-x-2 font-sans shrink-0">
          <button
            onClick={exportAsJSON}
            className="px-4 py-2 bg-natural-primary hover:opacity-90 text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Seluruh Workbook (JSON)</span>
          </button>
          <button
            onClick={triggerPrint}
            className="px-4 py-2 bg-natural-sidebar border border-natural-border text-natural-primary hover:bg-natural-secondary rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Rekap Mengajar</span>
          </button>
        </div>
      </div>

      {isExported && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs font-bold text-emerald-800 flex items-center space-x-1.5 font-serif print:hidden animate-bounce">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>Alhamdulillah, berkas pengerjaan siswa dalam format JSON berhasil dicadangkan dan terunduh ke komputer Anda.</span>
        </div>
      )}

      {/* --- STUDENT IDENTITY HEADER --- */}
      <div className="bg-gradient-to-br from-[#FAF9F6] to-[#F1EFE9] rounded-[24px] p-5 border border-natural-border/70 space-y-3">
        <div className="flex items-center space-x-2 text-natural-accent font-sans">
          <Users className="w-4 h-4" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Identitas Peneliti Muda Muslim (Kelompok PBL)</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-natural-primary block uppercase">1. Peneliti Terdaftar (Anggota Kelompok):</span>
            <input
              type="text"
              value={studentInfo.nama}
              onChange={(e) => handleStudentInfoChange("nama", e.target.value)}
              className="w-full px-3 py-2 bg-white border border-natural-border rounded-xl text-xs text-natural-text focus:ring-1 focus:ring-natural-accent outline-none font-serif"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-natural-primary block uppercase">2. Kelas / Fase E:</span>
            <input
              type="text"
              value={studentInfo.kelas}
              onChange={(e) => handleStudentInfoChange("kelas", e.target.value)}
              className="w-full px-3 py-2 bg-white border border-natural-border rounded-xl text-xs text-natural-text focus:ring-1 focus:ring-natural-accent outline-none font-serif"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-natural-primary block uppercase">3. Nama Kelompok Fokus:</span>
            <input
              type="text"
              value={studentInfo.kelompok}
              onChange={(e) => handleStudentInfoChange("kelompok", e.target.value)}
              className="w-full px-3 py-2 bg-white border border-natural-border rounded-xl text-xs text-natural-text focus:ring-1 focus:ring-natural-accent outline-none font-serif"
            />
          </div>
        </div>
      </div>

      {/* --- MEETING / PERTEMUAN CONTROLLER --- */}
      <div className="space-y-3 print:hidden">
        <span className="text-[10px] font-bold text-natural-accent uppercase tracking-wider font-sans block">Sesi Pertemuan Unit Pembelajaran:</span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 font-sans">
          {[
            { id: 1, tag: "PERTEMUAN I", subtitle: "Usaha & Energi Mekanik", badge: "Kinetik-Potensial", icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 2, tag: "PERTEMUAN II", subtitle: "EBT & Dampak Krisis Fasad", badge: "Audit Termal-Listrik", icon: <Wind className="w-3.5 h-3.5" /> },
            { id: 3, tag: "PERTEMUAN III", subtitle: "Mini-Proyek Biogas Hijau", badge: "Biomassa-Fotosintesis", icon: <Flame className="w-3.5 h-3.5" /> },
            { id: 4, tag: "PERTEMUAN IV", subtitle: "Analisis Video & Kampanye", badge: "Standby Power Israf", icon: <Video className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveMeeting(tab.id as 1 | 2 | 3 | 4);
                setActiveSintaks(1); // Reset step progress when changing meeting
              }}
              className={`p-3 border text-left rounded-2xl transition-all flex items-center space-x-2.5 cursor-pointer ${
                activeMeeting === tab.id
                  ? "border-natural-accent bg-natural-secondary text-natural-primary font-bold shadow-md shadow-natural-accent/10 ring-1 ring-natural-accent/40"
                  : "border-natural-border hover:bg-neutral-50 text-natural-text/80"
              }`}
            >
              <div className={`p-1.5 rounded-lg ${activeMeeting === tab.id ? "bg-natural-primary text-white" : "bg-[#FAF9F6] text-[#7A603D]"}`}>
                {tab.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="block text-[8px] font-extrabold tracking-widest text-natural-accent">{tab.tag}</span>
                  <span className="block text-[7.5px] bg-natural-sidebar text-[#7A603D] px-1 rounded-sm border border-natural-accent/15 leading-none shrink-0 font-sans font-bold">{tab.badge}</span>
                </div>
                <span className="block text-xs truncate leading-normal text-natural-heading mt-0.5">{tab.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- PIPELINE SINTAKS PBL (1 - 5) --- */}
      <div className="bg-[#FCFAF7] border border-natural-accent/15 rounded-[24px] p-4 font-sans print:hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-natural-accent animate-spin" />
            <span className="text-[10px] font-black uppercase tracking-wider text-natural-primary">Sintaks Arus PBL Qur'ani ({studentInfo.kelompok})</span>
          </div>
          <span className="text-[10px] text-[#8C897A] font-bold">Langkah {activeSintaks} dari 5 Selesai</span>
        </div>

        {/* Horizontal Navigation Step bubbles */}
        <div className="grid grid-cols-5 gap-1.5">
          {[
            { step: 1, label: "01. Orientasi", desc: "Masalah Fisis" },
            { step: 2, label: "02. Organisasi", desc: "Tugas Tim" },
            { step: 3, label: "03. Penyelidikan", desc: "Tabel Data" },
            { step: 4, label: "04. Karya Saji", desc: "Draf Proposal" },
            { step: 5, label: "05. Evaluasi", desc: "Uji & Refleksi" }
          ].map((st) => (
            <button
              key={st.step}
              onClick={() => setActiveSintaks(st.step as 1 | 2 | 3 | 4 | 5)}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-between items-center ${
                activeSintaks === st.step
                  ? "border-natural-primary bg-natural-primary text-white shadow-sm"
                  : "border-natural-border bg-white hover:bg-neutral-50 text-[#8C897A]"
              }`}
            >
              <span className="block text-[9px] font-black tracking-wider uppercase leading-none">{st.label}</span>
              <span className={`block text-[7.5px] mt-1 truncate leading-none capitalize ${activeSintaks === st.step ? "text-slate-200" : "text-[#A6A290]"}`}>{st.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- ACTIVE WORKBOOK BODY --- */}
      <div className="border border-natural-border rounded-[32px] p-5 md:p-8 space-y-6 bg-gradient-to-b from-white to-[#FCFAF7]">
        
        {/* Step Header */}
        <div className="flex items-center space-x-3 border-b border-natural-border/30 pb-4 mb-2">
          <span className="text-xs font-black uppercase tracking-widest bg-natural-accent text-white px-3 py-1 rounded-full font-sans">
            Sintaks {activeSintaks}
          </span>
          <div>
            <h3 className="text-base md:text-lg font-extrabold text-natural-heading">
              {activeSintaks === 1 && "Orientasi Masalah Ilmiah & Pengisian Tabel K-W"}
              {activeSintaks === 2 && "Organisasi Pembelajaran & Pembagian Peran Kelompok"}
              {activeSintaks === 3 && `Bimbingan Penyelidikan & Olah Data Spreadsheet Pertemuan ${activeMeeting}`}
              {activeSintaks === 4 && "Diseminasi Karya, Diagram Alir, & Presentasi Akhir"}
              {activeSintaks === 5 && "Evaluasi Pengalaman, Kognisi Sumatif, & Eco-Akhlaq Pledge"}
            </h3>
            <p className="text-[11px] text-[#8C897A] font-sans mt-0.5">
              {activeSintaks === 1 && "Fase pembacaan wacana krisis energi, fiksasi tabel K-W (Know-Want), serta identifikasi ayat Kauniyah pendukung."}
              {activeSintaks === 2 && "Fase pembagian kartu peranan saintis, penetapan pertanyaan investigasi, dan formulasi hipotesis logis."}
              {activeSintaks === 3 && "Fase memasukkan hasil lab virtual PhET, menghitung parameter fisis dengan kalkulator di bawah ini."}
              {activeSintaks === 4 && "Fase penyusunan solusi, diagram rantai konversi energi, dan catatan interaksi presentasi forum."}
              {activeSintaks === 5 && "Fase refleksi spiritual anti-israf, pengisian korelasi teologis, dan pemecahan kuis evaluasi."}
            </p>
          </div>
        </div>

        {/* --- SINTAKS 1 RENDERING --- */}
        {activeSintaks === 1 && (
          <div className="space-y-6">
            <div className="bg-[#FAF9F6] border-l-4 border-natural-accent rounded-r-2xl p-5 space-y-3 text-justify">
              <div className="flex items-center space-x-2 text-natural-primary">
                <Video className="w-4 h-4 text-cyan-600 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-sans">Video Orientasi & Isu Kontekstual Masalah Fisis</span>
              </div>
              <p className="text-xs leading-relaxed text-natural-heading font-serif">
                {activeMeeting === 1 && "Krisis energi di hulu sungai mengancam keberlangsungan pasokan listrik turbin PLTA Indonesia. Ketinggian air (h) menyimpan energi potensial (mgh) yang merosot akibat kerusakan vegetasi hutan penangkap air hujan."}
                {activeMeeting === 2 && "Asap polusi emisi batubara perkotaan merugikan paru-paru anak sekolah dan melubangi lapisan ozon bumi. Mengubah kedaulatan energi ke kombinasi solar panel (Surya) dan dinamo kincir (Angin) melestarikan sunnatullah."}
                {activeMeeting === 3 && "Limbah kotoran feses peternakan yang dibuang sembarangan menerbitkan bau busuk tak Islami dan melepaskan emisi gas rumah kaca berbahaya. Mengubah najis kotoran menjadi gas metana memasak adalah model berdaya guna."}
                {activeMeeting === 4 && "Pemborosan terselubung (standby power/vampire draw) terus mengalir tanpa kita sadari saat peralatan mati tetap tercolok ke stopkontak. Perilaku israf ini memicu over-heating transformator transmisi listrik umum secara akumulatif."}
              </p>
              
              <div className="bg-white rounded-xl border border-natural-border p-3.5 mt-2">
                <span className="text-[9px] font-bold text-natural-accent block uppercase mb-1 font-sans">Glos Ikhtisar Pertanyaan Guru & Sesi Masalah:</span>
                <p className="text-xs text-[#5A5A40] italic leading-normal font-sans">
                  "{meetings[activeMeeting].masalahVideo}"
                </p>
              </div>
            </div>

            {/* === DETAILED SYSTEMATIC GUIDE TABLE === */}
            <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
              <div className="bg-[#FCFAF7] px-4 py-3 border-b border-natural-border font-sans font-bold text-xs text-[#7A603D] flex items-center justify-between">
                <span>TABEL PANDUAN PENYELIDIKAN DAN PARAMETER FISIS (PERTEMUAN {activeMeeting})</span>
                <span className="text-[8px] bg-[#FAF9F6] text-[#7A603D] px-2 py-0.5 rounded border uppercase">Sains-Syar'i Map</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                      <th className="p-3">Fokus Bahasan</th>
                      <th className="p-3">Hukum & Variabel Fisika Utama</th>
                      <th className="p-3">Rujukan Kalam Al-Qur'an</th>
                      <th className="p-3">Sasaran Desain Proyek Kelompok</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeMeeting === 1 && (
                      <tr className="font-serif">
                        <td className="p-3 font-semibold text-natural-primary font-sans">Energi Mekanik PLTA</td>
                        <td className="p-3 text-[#5A5A40] text-xs">Energi Mekanik Konstan ($Em = Ep + Ek$), Massa ($m$), Tinggi ($h$), Gravitasi ($g$), Kelajuan ($v$)</td>
                        <td className="p-3 italic text-cyan-800 text-xs font-semibold">Q.S. Al-Mu'minun: 18 (Koleksi air sesuai ukuran gravitasi di elevasi bukit)</td>
                        <td className="p-3 text-natural-heading text-xs font-sans">Menentukan korelasi tinggi jatuh ($h$) dengan daya kinetik turbin hulu secara presisi.</td>
                      </tr>
                    )}
                    {activeMeeting === 2 && (
                      <tr className="font-serif">
                        <td className="p-3 font-semibold text-natural-primary font-sans">Pembangkit EBT Hybrid</td>
                        <td className="p-3 text-[#5A5A40] text-xs">Konversi Sel Surya Foton Elektromagnetik, Gaya Angin kinetis ($P = \frac{1}{2}\rho Av^3$), Arus Listrik ($I$)</td>
                        <td className="p-3 italic text-[#7A603D] text-xs font-semibold">Q.S. Ar-Rum: 41 (Mencegah fasad/kerusakan akibat kepulan asap batubara)</td>
                        <td className="p-3 text-natural-heading text-xs font-sans">Merancang audit konsumsi listrik sekolah dan transisi ke solar-angin mandiri.</td>
                      </tr>
                    )}
                    {activeMeeting === 3 && (
                      <tr className="font-serif">
                        <td className="p-3 font-semibold text-natural-primary font-sans">Sintesis Gas Metana</td>
                        <td className="p-3 text-[#5A5A40] text-xs">Energi Kimiawi Biomassa Organik ke Kalor Termodinamika ($Q = mc\Delta T$), Fermentasi Anaerob</td>
                        <td className="p-3 italic text-purple-800 text-xs font-semibold">Q.S. Yasin: 80 (Mengambil bahan pembakar api dari struktur hijau klorofil)</td>
                        <td className="p-3 text-natural-heading text-xs font-sans">Memodelkan reaktor digester pengolah ampas kotoran menjadi energi kompor hijau.</td>
                      </tr>
                    )}
                    {activeMeeting === 4 && (
                      <tr className="font-serif">
                        <td className="p-3 font-semibold text-natural-primary font-sans">Standby Vampire Power</td>
                        <td className="p-3 text-[#5A5A40] text-xs">Kebocoran Daya Standby Pasif ($W = P \times t$), Induksi Trafo Trafo Listrik Semu</td>
                        <td className="p-3 italic text-emerald-800 text-xs font-semibold">Q.S. Al-Isra: 26-27 (Larangan keras mubazir/israf perusak daya mizan)</td>
                        <td className="p-3 text-natural-heading text-xs font-sans">Melakukan audit vampir steker rumah kelompok dan kampanye penempelan stiker cerdas.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* K-W Interactive Double Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-2">
                <div className="flex items-center space-x-2 text-[#7A603D]">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider font-sans">Tabel K (What we Know - Fisika Kita)</span>
                </div>
                <p className="text-[10px] text-[#8C897A] font-sans">Apa hukum, teori fisis fokal, atau rumus dasar yang relevan dengan krisis energi saat ini?</p>
                <textarea
                  rows={4}
                  value={meetings[activeMeeting].tabelK}
                  onChange={(e) => handleMeetingInputChange("tabelK", e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF8F5] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-accent outline-none font-sans"
                />
              </div>

              <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-2">
                <div className="flex items-center space-x-2 text-natural-primary">
                  <Compass className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider font-sans">Tabel W (What we Want - Penasaran Kita)</span>
                </div>
                <p className="text-[10px] text-[#8C897A] font-sans">Hal spesifik apa yang perlu diselidiki melalui data PhET, kalkulator, or draf proyek harian?</p>
                <textarea
                  rows={4}
                  value={meetings[activeMeeting].tabelW}
                  onChange={(e) => handleMeetingInputChange("tabelW", e.target.value)}
                  className="w-full text-xs p-3 bg-[#F4F7F6] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-primary outline-none font-sans"
                />
              </div>
            </div>
          </div>
        )}

        {/* --- SINTAKS 2 RENDERING --- */}
        {activeSintaks === 2 && (
          <div className="space-y-6">
            <div className="bg-[#FAF9F6] border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
              <div className="bg-[#FCFAF7] px-4 py-3 border-b border-natural-border font-sans font-bold text-xs text-[#7A603D] flex items-center justify-between">
                <span>TABEL PERAN & HUBUNGAN TUGAS TIM INVESTIGATOR</span>
                <span className="text-[8px] bg-amber-100 text-[#7A603D] px-2 py-0.5 rounded font-black font-sans uppercase">Sistem Fungsional</span>
              </div>
              <div className="p-4.5 bg-white border-b border-natural-border/40 text-[10px] text-[#8C897A] leading-relaxed">
                Tiap siswa memegang peranan asasi agar penyelidikan berjalan terukur laksana fusi organ tubuh yang saling melengkapi (kohesif). Silakan ubah secara fungsional nama anggota di bawah:
              </div>
              <div className="overflow-x-auto font-sans text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50/50 border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                      <th className="p-3">Peran Fungsional</th>
                      <th className="p-3">Nama Anggota Kelompok</th>
                      <th className="p-3">Spesialisasi Lingkup Investigasi</th>
                      <th className="p-3">Amanah Teknis Sintaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "ketua", r: "Ketua Kelompok (Penyusun)", duty: "Navigasi alur draf, penyunting narasi, pengambil keputusan akhir kelompok.", spec: "Fokus kebenaran struktur pengerjaan" },
                      { key: "sekretaris", r: "Sekretaris (Pencatat Data)", duty: "Fungsionaris rekap hitung, pencatat data amatan PhET secara rapi.", spec: "Kombinasi data angka & teks deskriptif" },
                      { key: "presenter", r: "Presenter Utama (Penyaji)", duty: "Pendedah lisan argumen di depan forum mubar, juru bicara utama.", spec: "Artikulasi gagasan fisis & teologis" },
                      { key: "sains", r: "Peneliti Sains (Validator)", duty: "Verifikasi parameter $m$, $v$, $h$, $P$, $W$ ke dalam sasis matematika.", spec: "Pembuktian rumus ke dalam satuan SI" },
                      { key: "quran", r: "Peneliti Al-Qur'an (Mufassir)", duty: "Tadabbur sasis teologi, melacak hadis/ayat kauniyah pendukung masalah.", spec: "Kontekstualitas makna fisis" }
                    ].map((peran) => (
                      <tr key={peran.key} className="border-b border-natural-border/30 hover:bg-[#FCFAF7]/20 font-serif">
                        <td className="p-3 font-bold text-[#7A603D] font-sans">{peran.r}</td>
                        <td className="p-3">
                          <input
                            type="text"
                            value={assignedRoles[peran.key] || ""}
                            onChange={(e) => {
                              const updated = { ...assignedRoles, [peran.key]: e.target.value };
                              setAssignedRoles(updated);
                              setIsExported(false);
                            }}
                            className="bg-[#FCFAF7] border border-natural-border/60 px-2 py-1 rounded w-full font-bold font-serif text-xs text-natural-heading focus:bg-white"
                          />
                        </td>
                        <td className="p-3 text-xs font-sans text-natural-text">{peran.spec}</td>
                        <td className="p-3 text-[11px] italic font-serif text-[#8C897A]">{peran.duty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hipotesis input */}
            <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-3">
              <div className="flex items-center space-x-2.5 text-natural-primary">
                <HelpCircle className="w-4 h-4 text-cyan-600 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider font-sans">Langkah Perumusan Hipotesis Kelompok (Praduga Teknis)</span>
              </div>
              <p className="text-[10px] text-[#8C897A] font-sans">
                Ketik praduga fisis berdasarkan hubungan antar variabel (Misalnya: Ketinggian bendungan vs Kelajuan kinetik air, Watt vs Biaya kotor, dll):
              </p>
              
              <textarea
                rows={3}
                value={meetings[activeMeeting].hipotesis}
                onChange={(e) => handleMeetingInputChange("hipotesis", e.target.value)}
                className="w-full text-xs p-3.5 bg-gradient-to-r from-neutral-50 to-[#F6FAF9] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-primary outline-none font-serif leading-relaxed"
                placeholder="Tulis draf hipotesis di sini..."
              />
            </div>
          </div>
        )}

        {/* --- SINTAKS 3 RENDERING (DYNAMIC TABLES) --- */}
        {activeSintaks === 3 && (
          <div className="space-y-6">
            
            {/* === SPREADSHEET INDIKATOR PERTEMUAN I === */}
            {activeMeeting === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#EBF7F5] border border-[#CBDED9] rounded-2xl p-4 flex items-center justify-between gap-4 font-sans text-xs">
                  <div className="flex items-center space-x-2.5">
                    <Calculator className="w-5 h-5 text-natural-primary" />
                    <div>
                      <span className="font-extrabold text-natural-primary block text-[11px] uppercase">A. Spreadsheet Simulator Energi Mekanik (Em = Ep + Ek)</span>
                      <p className="text-[10px] text-[#5A6F69] font-serif">Ketik nilai Massa (kg), Kelajuan (m/s), dan Ketinggian (m) untuk menghitung Energi Mekanik sunnatullah secara langsung:</p>
                    </div>
                  </div>
                </div>

                {/* Computational Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
                  <div className="space-y-1.5 p-4 bg-white border border-natural-border rounded-xl">
                    <span className="block font-bold text-natural-primary uppercase text-[10px]">1. MASSA BENDA / AIR (m):</span>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        value={m1Mass}
                        onChange={(e) => setM1Mass(Number(e.target.value))}
                        className="w-full p-2 border border-natural-border/60 rounded focus:ring-1 focus:ring-natural-primary font-mono text-center font-bold"
                      />
                      <span className="text-[#8C897A] font-extrabold font-mono">kg</span>
                    </div>
                    <span className="text-[8px] text-[#A6A290] block mt-1 font-serif">Misal: Massa air 1000 kg PLTA.</span>
                  </div>

                  <div className="space-y-1.5 p-4 bg-white border border-natural-border rounded-xl">
                    <span className="block font-bold text-[#7A603D] uppercase text-[10px]">2. KELAJUAN ALIRAN (v):</span>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        value={m1Velocity}
                        onChange={(e) => setM1Velocity(Number(e.target.value))}
                        className="w-full p-2 border border-natural-border/60 rounded focus:ring-1 focus:ring-natural-accent font-mono text-center font-bold"
                      />
                      <span className="text-[#8C897A] font-extrabold font-mono">m/s</span>
                    </div>
                    <span className="text-[8px] text-[#A6A290] block mt-1 font-serif">Misal: Kelajuan jatuh skater/air.</span>
                  </div>

                  <div className="space-y-1.5 p-4 bg-white border border-natural-border rounded-xl">
                    <span className="block font-bold text-natural-primary uppercase text-[10px]">3. KETINGGIAN BENDUNGAN (h):</span>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number"
                        value={m1Height}
                        onChange={(e) => setM1Height(Number(e.target.value))}
                        className="w-full p-2 border border-natural-border/60 rounded focus:ring-1 focus:ring-natural-primary font-mono text-center font-bold"
                      />
                      <span className="text-[#8C897A] font-extrabold font-mono">meter</span>
                    </div>
                    <span className="text-[8px] text-[#A6A290] block mt-1 font-serif">Misal: Ketinggian elevasi waduk hulu.</span>
                  </div>
                </div>

                {/* Mathematical Output Spreadsheet Table */}
                <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
                  <div className="bg-[#FAF9F6] border-b border-natural-border p-3.5 font-sans font-bold text-xs text-natural-primary flex items-center justify-between">
                    <span>TABEL INVESTIGASI KEKEKALAN ENERGI MEKANIK</span>
                    <span className="text-[9px] bg-natural-sidebar text-natural-accent border border-natural-accent/15 px-2 py-0.5 rounded uppercase">Komputasi Realtime</span>
                  </div>

                  <table className="w-full text-left font-sans text-xs border-collapse">
                    <thead>
                      <tr className="bg-neutral-50/50 border-b border-natural-border text-[#8C897A] font-extrabold uppercase text-[9px] tracking-wider">
                        <th className="p-3">Koordinat Posisi</th>
                        <th className="p-3">Energi Kinetik (Ek = ½mv²)</th>
                        <th className="p-3">Energi Potensial (Ep = mgh)</th>
                        <th className="p-3 bg-emerald-50/20 text-emerald-800">Total Energi Mekanik (Em)</th>
                        <th className="p-3">Status Verifikasi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-natural-border/40 font-mono">
                        <td className="p-3 font-serif font-bold text-natural-heading">Posisi A (Puncak, v=0)</td>
                        <td className="p-3 text-[#8C897A]">0 Joule</td>
                        <td className="p-3 text-natural-heading font-extrabold">{(m1Mass * 9.8 * m1Height).toLocaleString('id-ID')} Joule</td>
                        <td className="p-3 bg-emerald-50/10 text-emerald-900 font-black">{(m1Mass * 9.8 * m1Height).toLocaleString('id-ID')} Joule</td>
                        <td className="p-3"><span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black font-sans uppercase">Em Konsist</span></td>
                      </tr>
                      <tr className="border-b border-natural-border/40 font-mono">
                        <td className="p-3 font-serif font-bold text-natural-heading">Posisi B (Tengah, v & h acak)</td>
                        <td className="p-3 text-cyan-800">{calculatedM1Ek.toLocaleString('id-ID')} Joule</td>
                        <td className="p-3 text-amber-800">{calculatedM1Ep.toLocaleString('id-ID')} Joule</td>
                        <td className="p-3 bg-emerald-50/10 text-emerald-950 font-black">{(calculatedM1Ek + calculatedM1Ep).toLocaleString('id-ID')} Joule</td>
                        <td className="p-3"><span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black font-sans uppercase">Hukum Kekal</span></td>
                      </tr>
                      <tr className="font-mono">
                        <td className="p-3 font-serif font-bold text-natural-heading">Posisi C (Dasar, h=0)</td>
                        <td className="p-3 text-natural-heading font-extrabold">{calculatedM1Em.toLocaleString('id-ID')} Joule</td>
                        <td className="p-3 text-[#8C897A]">0 Joule</td>
                        <td className="p-3 bg-emerald-50/10 text-emerald-900 font-extrabold">{calculatedM1Em.toLocaleString('id-ID')} Joule</td>
                        <td className="p-3"><span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black font-sans uppercase">Sunnatullah mizan</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#FAFDFD] border border-cyan-100 rounded-2xl p-4.5 font-serif text-xs text-justify">
                  <span className="font-sans font-bold text-[9px] text-cyan-800 uppercase tracking-widest block mb-1">Poin Pembelajaran Peneliti:</span>
                  Tabel spreadsheet komputasi di atas secara matematis meyakinkan kita bahwa sekalipun wujud kelajuan gerak dan ketinggian air berfluktuasi secara dinamis, total energi mekanik konstan di setiap titik. Inilah manifestasi ketetapan presisi Sunnatullah yang diisyaratkan Al-Qur'an—tidak ada cacat ketidakseimbangan kosmis dalam takaran penciptaan.
                </div>
              </div>
            )}

            {/* === SPREADSHEET INDIKATOR PERTEMUAN II === */}
            {activeMeeting === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#F3F8FC] border border-[#D5E6F0] rounded-2xl p-4 flex items-center justify-between gap-4 font-sans text-xs">
                  <div className="flex items-center space-x-2.5">
                    <Calculator className="w-5 h-5 text-blue-600 animate-bounce" />
                    <div>
                      <span className="font-extrabold text-blue-900 block text-[11px] uppercase">B. Lembar Audit Energi Kelas (Calculator Konversi Biaya)</span>
                      <p className="text-[10px] text-[#425867] font-serif">Ketik jumlah peranti, daya (Watt), dan estimasi lama menyala per hari untuk mengetahui beban tagihan riil bulanan sekolah:</p>
                    </div>
                  </div>
                </div>

                {/* Audit Grid Table */}
                <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
                  <table className="w-full text-left font-sans text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                        <th className="p-3">Nama Alat Kelistrikan</th>
                        <th className="p-3 text-center">Jumlah Unit (qty)</th>
                        <th className="p-3 text-center">Daya Satuan (Watt)</th>
                        <th className="p-3 text-center">Durasi Nyala (Jam/hari)</th>
                        <th className="p-3 text-right">Konsumsi Bulanan (kWh)</th>
                        <th className="p-3 text-right">Estimasi Biaya (Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m2Appliances.map((app, idx) => {
                        const monthlyKwh = (app.qty * app.power * app.hours * 30) / 1000;
                        const cost = monthlyKwh * 1500;
                        return (
                          <tr key={idx} className="border-b border-natural-border/40 font-mono">
                            <td className="p-3 font-serif font-bold text-natural-heading">{app.name}</td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={app.qty} 
                                onChange={(e) => handleApplianceChange(idx, "qty", e.target.value)}
                                className="w-12 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={app.power} 
                                onChange={(e) => handleApplianceChange(idx, "power", e.target.value)}
                                className="w-16 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={app.hours} 
                                onChange={(e) => handleApplianceChange(idx, "hours", e.target.value)}
                                className="w-12 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-right text-cyan-800 font-extrabold">{monthlyKwh.toFixed(1)} kWh</td>
                            <td className="p-3 text-right text-natural-heading font-black">Rp {cost.toLocaleString('id-ID')}</td>
                          </tr>
                        );
                      })}
                      <tr className="bg-emerald-50/30 font-bold font-sans">
                        <td className="p-4" colSpan={4}>TOTAL AKUMULASI KONSUMSI ATAU BEBAN BULANAN:</td>
                        <td className="p-4 text-right text-emerald-800 text-sm font-black font-mono">{calculateTotalm2Kwh().toFixed(1)} kWh</td>
                        <td className="p-4 text-right text-emerald-950 text-sm font-black font-mono">Rp {totalM2Cost.toLocaleString('id-ID')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F4F9F6] border border-emerald-100 rounded-2xl p-4.5 font-serif text-xs text-justify">
                  <span className="font-sans font-bold text-[9px] text-emerald-800 uppercase tracking-widest block mb-1">Rekomendasi Hemat Energi (Relasi QS. Al-Isra: 26-27):</span>
                  Berdasarkan audit kelistrikan di atas, jika AC diturunkan run-time nya 2 jam saja per hari, sekolah berhasil memangkas emisi karbon pendukung batubara secara simultan. Tindakan kecil ini merupakan pertahanan asasi melawan bencana kerakusan (israf) yang dilarang penuh oleh Kedaulatan Syariat.
                </div>
              </div>
            )}

            {/* === SPREADSHEET INDIKATOR PERTEMUAN III === */}
            {activeMeeting === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#FAF4FC] border border-[#E9D9F3] rounded-2xl p-4 flex items-center justify-between gap-4 font-sans text-xs">
                  <div className="flex items-center space-x-2.5">
                    <Calculator className="w-5 h-5 text-purple-600 animate-pulse" />
                    <div>
                      <span className="font-extrabold text-purple-900 block text-[11px] uppercase font-sans">C. Matriks Keputusan Energi & Kelayakan Projek Biogas</span>
                      <p className="text-[10px] text-[#5C4564] font-serif">Analisis sasis multi-indikator perbandingan energi kotor vs reaktor hijau terpadu:</p>
                    </div>
                  </div>
                </div>

                {/* Matrix Table */}
                <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm font-sans text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                        <th className="p-3.5">Kriteria Evaluasi Kelayakan</th>
                        <th className="p-3.5">Energi Fosil (Minyak/Gas)</th>
                        <th className="p-3.5">Energi Terbarukan (Biogas Hijau)</th>
                        <th className="p-3.5">Pertimbangan Nilai Islam (Teologis)</th>
                        <th className="p-3.5 text-center">Skor Akhir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m3Matrix.map((item, idx) => (
                        <tr key={idx} className="border-b border-natural-border/40 font-serif">
                          <td className="p-3.5 font-sans font-bold text-natural-primary">{item.criteria}</td>
                          <td className="p-3.5 text-[#8C897A] text-xs">{item.fossil}</td>
                          <td className="p-3.5 text-natural-heading text-xs font-bold">{item.biogas}</td>
                          <td className="p-3.5 text-natural-accent text-xs italic">{item.theology}</td>
                          <td className="p-3.5 text-center"><span className="text-[9px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-black font-sans uppercase">{item.score}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* === INTERACTIVE BIOGAS CALCULATOR === */}
                <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-4">
                  <div className="flex items-center space-x-2 text-purple-700 font-sans">
                    <Sparkles className="w-4.5 h-4.5" />
                    <span className="text-xs font-black uppercase tracking-wider">Kalkulator Produktivitas Reaktor Biogas & Substitusi LPG Teknis</span>
                  </div>
                  <p className="text-[10px] text-[#8C897A]">
                    Simulasi konversi kimiawi penangkapan gas metana ($CH_4$) berdasarkan berat bahan baku kotoran ternak harian yang dimasukkan ke digester:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50/40 border border-purple-100 rounded-xl space-y-2">
                      <label className="block text-[10px] font-bold text-purple-900 uppercase">Massa Bahan Baku Kotoran Sapi/Ternak ($m\_umpan$):</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={m3Feedstock}
                          onChange={(e) => {
                            setM3Feedstock(Math.max(0, Number(e.target.value)));
                            setIsExported(false);
                          }}
                          className="w-full p-2 border border-purple-200 rounded font-mono font-bold text-center text-xs bg-white text-purple-950 focus:ring-1 focus:ring-purple-600 outline-none"
                        />
                        <span className="font-extrabold text-[#7A603D] text-xs">kg/hari</span>
                      </div>
                      <span className="text-[8px] text-[#8C897A] block italic">Rata-rata 1 Sapi merilis 10-15 kg feses per hari.</span>
                    </div>

                    <div className="p-4 bg-purple-50/40 border border-purple-100 rounded-xl space-y-2">
                      <label className="block text-[10px] font-bold text-purple-900 uppercase">Koefisien Rendemen Yield Biogas ($Y$):</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          step="0.01"
                          value={m3GasYield}
                          onChange={(e) => {
                            setM3GasYield(Math.max(0, Number(e.target.value)));
                            setIsExported(false);
                          }}
                          className="w-full p-2 border border-purple-200 rounded font-mono font-bold text-center text-xs bg-white text-purple-950 focus:ring-1 focus:ring-purple-600 outline-none"
                        />
                        <span className="font-extrabold text-[#7A603D] text-xs">$m^3/kg$</span>
                      </div>
                      <span className="text-[8px] text-[#8C897A] block italic">Standar rendemen biogas murni metanogenesis feses basah.</span>
                    </div>
                  </div>

                  {/* Math calculation display table */}
                  <div className="bg-gradient-to-r from-purple-50 to-[#FAF4FC] p-4.5 rounded-2xl border border-purple-100/50">
                    <span className="text-[9px] font-extrabold text-purple-900 block uppercase mb-2 font-sans tracking-wide">ESTIMASI DETEKSI ENERGI HIJAU & SUBSTISUSI BULANAN</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-center">
                      <div className="bg-white p-3 rounded-xl border border-purple-100">
                        <span className="block text-[8px] font-sans font-bold text-[#8C897A] uppercase">Volume Biogas Harian</span>
                        <span className="block text-sm font-black text-purple-950 mt-1">{(m3Feedstock * m3GasYield).toFixed(2)} $m^3$</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-purple-100">
                        <span className="block text-[8px] font-sans font-bold text-[#8C897A] uppercase">Berat Setara LPG (30 Hr)</span>
                        <span className="block text-sm font-black text-purple-950 mt-1">{(m3Feedstock * m3GasYield * 0.46 * 30).toFixed(1)} kg</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-purple-100">
                        <span className="block text-[8px] font-sans font-bold text-[#8C897A] uppercase">Substitusi Tabung LPG 3kg</span>
                        <span className="block text-sm font-black text-purple-950 mt-1">{Math.ceil((m3Feedstock * m3GasYield * 0.46 * 30) / 3)} Canisters</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-purple-100">
                        <span className="block text-[8px] font-sans font-bold text-[#8C897A] uppercase">Penghematan Bulanan</span>
                        <span className="block text-sm font-black text-emerald-800 mt-1">Rp {(Math.ceil((m3Feedstock * m3GasYield * 0.46 * 30) / 3) * 20000).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FCFAF7] border border-purple-100 rounded-2xl p-4.5 font-serif text-xs text-justify">
                  <span className="font-sans font-bold text-[9px] text-[#7A603D] uppercase tracking-widest block mb-1">Misi Desain Projek Kelompok:</span>
                  Proyek reaktor digester sederhana di halaman belakang kelas memasok kedaulatan memasak gas metana bersih dari fermentasi feses alami. Hubungan fisis konversi kimiawi (metanogenesis) lurus dengan tuntunan QS. Yasin: 80—mengambil berkah energi dari klorofil subur.
                </div>
              </div>
            )}

            {/* === SPREADSHEET INDIKATOR PERTEMUAN IV === */}
            {activeMeeting === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#FDF9ED] border border-[#F2E5D2] rounded-2xl p-4 flex items-center justify-between gap-4 font-sans text-xs">
                  <div className="flex items-center space-x-2.5">
                    <Calculator className="w-5 h-5 text-amber-600 animate-pulse" />
                    <div>
                      <span className="font-extrabold text-amber-900 block text-[11px] uppercase">D. Kalkulator Kebocoran Daya Berselubung (Vampire Draw Standby)</span>
                      <p className="text-[10px] text-[#705F41] font-serif">Identifikasi kabel stopkontak yang dibiarkan tercolok tanpa menyalakan peranti di rumah kelompok:</p>
                    </div>
                  </div>
                </div>

                {/* Vampire Draw List */}
                <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm text-xs font-sans">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                        <th className="p-3">Daftar Vampire Appliance</th>
                        <th className="p-3 text-center">Jumlah Charger (pcs)</th>
                        <th className="p-3 text-center">Daya Standby Bocor (W)</th>
                        <th className="p-3 text-center">Lama Terabai (Jam/hari)</th>
                        <th className="p-3 text-right">Daya Bocor Bulanan (kWh)</th>
                        <th className="p-3 text-right">Akumulasi Rugi Biaya (Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m4Vampires.map((vamp, idx) => {
                        const monthlyKwh = (vamp.qty * vamp.power * vamp.hours * 30) / 1000;
                        const cost = monthlyKwh * 1500;
                        return (
                          <tr key={idx} className="border-b border-natural-border/40 font-mono">
                            <td className="p-3 font-serif font-bold text-natural-heading">{vamp.name}</td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={vamp.qty} 
                                onChange={(e) => handleVampireChange(idx, "qty", e.target.value)}
                                className="w-12 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={vamp.power} 
                                onChange={(e) => handleVampireChange(idx, "power", e.target.value)}
                                className="w-14 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-center">
                              <input 
                                type="number" 
                                value={vamp.hours} 
                                onChange={(e) => handleVampireChange(idx, "hours", e.target.value)}
                                className="w-12 p-1 border rounded text-center font-bold" 
                              />
                            </td>
                            <td className="p-3 text-right text-cyan-800 font-extrabold">{monthlyKwh.toFixed(2)} kWh</td>
                            <td className="p-3 text-right text-natural-heading font-black">Rp {cost.toLocaleString('id-ID')}</td>
                          </tr>
                        );
                      })}
                      <tr className="bg-amber-50/30 font-bold font-sans">
                        <td className="p-4" colSpan={4}>TOTAL KEBOCORAN DAYA SISA YANG SIA-SIA (ISRAF):</td>
                        <td className="p-4 text-right text-amber-800 text-sm font-black font-mono">{calculateM4TotalKwh().toFixed(2)} kWh</td>
                        <td className="p-4 text-right text-amber-950 text-sm font-black font-mono">Rp {m4TotalCost.toLocaleString('id-ID')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#FAFDFD] border border-cyan-100 rounded-2xl p-4.5 font-serif text-xs text-justify">
                  <span className="font-sans font-bold text-[9px] text-[#7A603D] uppercase tracking-widest block mb-1">Misi Dakwah Akhlaqul Karimah Ekologis (Kampanye Poster):</span>
                  Gabus kebocoran sisa (vampire draw) di atas sesungguhnya setara dengan mengakhiri perilaku mubazir yang dilarang keras QS. Al-Isra: 26-27. Kelompok merencanakan kampanye penempelan stiker cerdas di samping colokan kelas sebagai sumbangsih khalifah fil-ardh penjaga ekosistem bumi.
                </div>
              </div>
            )}

            {/* Input field for virtual lab observations */}
            <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-3">
              <span className="text-xs font-black uppercase text-natural-primary tracking-wide block font-sans">
                Laporan Tertulis Analisis Parameter Fisis & Hasil Eksperimen Virtual (PhET):
              </span>
              <p className="text-[10px] text-[#8C897A] font-sans">Ketik rangkuman pembacaan, perbandingan angka simulasi, atau evaluasi kualitatif kelompok di sini:</p>
              <textarea
                rows={4}
                value={meetings[activeMeeting].pengamatanPhet}
                onChange={(e) => handleMeetingInputChange("pengamatanPhet", e.target.value)}
                className="w-full text-xs p-3.5 bg-[#FCFAF7] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-primary outline-none font-serif leading-relaxed"
                placeholder="Tuliskan data angka atau catatan penting simulasi di sini..."
              />
            </div>
          </div>
        )}

        {/* --- SINTAKS 4 RENDERING --- */}
        {activeSintaks === 4 && (
          <div className="space-y-6">
            <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-4">
              <div className="flex items-center space-x-2 text-natural-accent font-sans">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-wider">A. Hubungan Integrasi Al-Qur'an & Kajian Tafsir Ilmiah</span>
              </div>
              <p className="text-[10px] text-[#8C897A] font-sans leading-relaxed">
                Tulis kajian mendalam sasis ayat kauniyah pendukung yang diselidiki. Tinjulah dari segi arti secara gramatikal Arab murni maupun penafsiran ulama sains mutabar:
              </p>

              <textarea
                rows={4}
                value={meetings[activeMeeting].ayatPilihan}
                onChange={(e) => handleMeetingInputChange("ayatPilihan", e.target.value)}
                className="w-full text-xs p-3.5 bg-[#FCFAF7] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-accent outline-none font-serif leading-relaxed text-justify"
                placeholder="Rincilah keterpautan ayat Al-Qur'an dengan konsep fisika yang diteliti..."
              />
            </div>

            {/* === DETAILED ENERGY TRANSFORMATION CHAIN TABLE === */}
            <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
              <div className="bg-[#FCFAF7] px-4 py-3 border-b border-natural-border font-sans font-bold text-xs text-natural-primary flex items-center justify-between">
                <span>TABEL DIAGRAM RANTAI TRANSFORMASI ENERGI & TAFSIR TRANS-DISIPLINER</span>
                <span className="text-[8px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black font-sans uppercase">Aksi Aliran Daya</span>
              </div>
              <div className="overflow-x-auto text-xs font-sans">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50/50 border-b border-natural-border text-[#8C897A] font-extrabold uppercase text-[9px] tracking-wider">
                      <th className="p-3">Mata Rantai Konversi Energi</th>
                      <th className="p-3">Persamaan Fisika yang Berlaku</th>
                      <th className="p-3">Hukum Termodinamika & Fisika</th>
                      <th className="p-3">Korelasi Filosofis-Tadabbur Qur'any</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeMeeting === 1 && (
                      <tr className="font-serif hover:bg-neutral-50/30">
                        <td className="p-3 font-bold font-sans text-natural-heading">Potensial Gravitasi Hulu $\rightarrow$ Kinetik Air $\rightarrow$ Putaran Magnetik Turbin $\rightarrow$ Induksi Generator Listrik</td>
                        <td className="p-3 font-mono text-cyan-800 text-[11px]">$Ep = mgh \rightarrow Ek = 0.5 mv^2 \rightarrow P = \eta \rho Q g h$</td>
                        <td className="p-3 text-xs font-sans">Kekekalan Energi Mekanik ($Em$), Hukum Induksi Faraday (GGL Elektro-magnet)</td>
                        <td className="p-3 text-natural-accent text-xs">Konsistensi Sunnatullah Mizan Kosmik. Kedudukan tinggi penguasa bumi harus mengalir limpah sebagai penyejuk kemakmuran rakyat luas (QS. Al-Mu'minun: 18).</td>
                      </tr>
                    )}
                    {activeMeeting === 2 && (
                      <tr className="font-serif hover:bg-neutral-50/30">
                        <td className="p-3 font-bold font-sans text-natural-heading">Foton Radiasi Surya / Kinetik Angin $\rightarrow$ Aliran Elektron Sel Silikon $\rightarrow$ Arus Listrik Kisi Dinamo</td>
                        <td className="p-3 font-mono text-cyan-800 text-[11px]">$E = h \nu$, $P = V \cdot I$, $P\_angin = 0.5 \rho A v^3$</td>
                        <td className="p-3 text-xs font-sans">Efek Fotovoltaik Semi-konduktor, Momentum Fluida Udara Aerodinamis</td>
                        <td className="p-3 text-natural-accent text-xs">Menolak krisis eksploitasi batubara kotor (penyulut fasad ozon) dengan merangkul berkah matahari-angin yang bersih (QS. Ar-Rum: 41).</td>
                      </tr>
                    )}
                    {activeMeeting === 3 && (
                      <tr className="font-serif hover:bg-neutral-50/30">
                        <td className="p-3 font-bold font-sans text-natural-heading">Energi Kimiawi Feses $\rightarrow$ Metanogenesis Anaerob Gas Metana ($CH_4$) $\rightarrow$ Pembakaran Kalor Kompor</td>
                        <td className="p-3 font-mono text-cyan-800 text-[11px]">$Q = mc\Delta T$, $Q\_api = m \cdot LCV$</td>
                        <td className="p-3 text-xs font-sans">Asas Black (Transfer Panas Kalor), Hukum Kekekalan Energi Kimia-Termal</td>
                        <td className="p-3 text-natural-accent text-xs">Mengambil faedah energi kayu/biomassa klorofil subur bentukan ilahi (QS. Yasin: 80). Kebersihan najis bernilai kemandirian gas.</td>
                      </tr>
                    )}
                    {activeMeeting === 4 && (
                      <tr className="font-serif hover:bg-neutral-50/30">
                        <td className="p-3 font-bold font-sans text-natural-heading">Tegangan Listrik AC $\rightarrow$ Hambatan Induktif Standby Charger $\rightarrow$ Kerugian Panas Joule Efek</td>
                        <td className="p-3 font-mono text-cyan-800 text-[11px]">$P\_bocor = V \cdot I$, $W = P \cdot t$, $P\_losses = I^2 R$</td>
                        <td className="p-3 text-xs font-sans">Disipasi Energi Panas (Rugi Panas Joule Efek), Standby Vampire Draw</td>
                        <td className="p-3 text-natural-accent text-xs">Arus semu standby yang dibiarkan terabaikan bertindak sebagai perilaku mubazir / israf kotor (QS. Al-Isra: 26-27) yang memotong hak keberlanjutan bumi.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-4">
              <div className="flex items-center space-x-2 text-natural-primary font-sans">
                <Award className="w-4 h-4 text-cyan-600 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider">B. Catatan Masukan Dari Kelompok Pendengar & Guru (Feedback Forum)</span>
              </div>
              <p className="text-[10px] text-[#8C897A] font-sans">
                Tuliskan intisari sanggahan tanggapan ilmiah, kritik membangun, atau penguatan konsep yang disampaikan saat presentasi kelompok Anda didepan mimbar:
              </p>
              
              <textarea
                rows={3}
                value={meetings[activeMeeting].refleksiQurani}
                onChange={(e) => handleMeetingInputChange("refleksiQurani", e.target.value)}
                className="w-full text-xs p-3.5 bg-[#FAF9F6] border border-natural-border/50 rounded-xl focus:ring-1 focus:ring-natural-primary outline-none font-serif leading-relaxed"
                placeholder="Catat pertanyaan penting rekan forum di sini..."
              />
            </div>
          </div>
        )}

        {/* --- SINTAKS 5 RENDERING --- */}
        {activeSintaks === 5 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Kesimpulan Paripurna */}
              <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-3">
                <div className="flex items-center space-x-2 text-natural-primary font-sans">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-black uppercase tracking-wider">Kesimpulan Akhir Pelajaran (Fisika-Tafsir)</span>
                </div>
                <p className="text-[10px] text-[#8C897A] font-sans">Silakan simpulkan korelasi materi fisika dengan ajaran Islam yang Anda peroleh hari ini:</p>
                <textarea
                  rows={4}
                  value={meetings[activeMeeting].kesimpulan}
                  onChange={(e) => handleMeetingInputChange("kesimpulan", e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAFDFD] border border-natural-border/40 rounded-xl focus:ring-1 focus:ring-natural-primary outline-none font-serif leading-relaxed text-justify"
                />
              </div>

              {/* Islamic Eco-Akhlaq Commitment Pledge */}
              <div className="bg-[#FCFAF7] border border-natural-accent/35 rounded-[24px] p-5 space-y-3">
                <div className="flex items-center space-x-2 text-[#7A603D] font-sans animate-pulse">
                  <Sparkles className="w-4.5 h-4.5" />
                  <span className="text-xs font-black uppercase tracking-wider">Ikrar Keimanan & Komitmen Hemat Energi (Eco-Akhlaq)</span>
                </div>
                <p className="text-[10px] text-[#7A603D] leading-relaxed font-serif text-justify">
                  "Menyadari bahwa segenap kandungan energi (termal, kimiawi, mekanik, listrik) dirancang Allah secara seimbang (Mizan) pelindung kehidupan, kami berjanji selaku khalifah fil-ardh akan senantiasa menjaga keseimbangan tersebut dengan menuntut pemakaian hemat anti-israf."
                </p>

                <div className="p-3 bg-white rounded-xl border border-natural-accent/15 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  <span className="text-[10px] font-bold text-natural-primary font-sans uppercase">KELOMPOK AKTIF MEMELUK ZERO ISRAF POLICY</span>
                </div>
              </div>
            </div>

            {/* === INTERACTIVE SELF-ASSESSMENT ECO-AKHLAQ TABLE === */}
            <div className="bg-white border border-natural-border rounded-[24px] overflow-hidden shadow-sm">
              <div className="bg-[#FCFAF7] px-4 py-3 border-b border-natural-border font-sans font-bold text-xs text-natural-primary flex items-center justify-between">
                <span>TABEL EVALUASI DIRI & KOMITMEN ECO-AKHLAQ (ZERO-ISRAF INDEX)</span>
                <span className="text-[8px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black font-sans uppercase">Sikap & Amaliyah</span>
              </div>
              <div className="p-4.5 bg-white border-b border-natural-border/30 text-[10px] text-[#8C897A] leading-relaxed">
                Tiap fungsionaris tim wajib mengonfirmasi komitmen fisis dan rohaniah pribadi terhadap ancaman kerusakan bumi. Silakan pilih derajat aktivitas riil yang telah atau akan dibiasakan:
              </div>
              <div className="overflow-x-auto text-xs font-sans">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50/50 border-b border-natural-border text-natural-primary font-bold uppercase text-[9px] tracking-wider">
                      <th className="p-3">Butir Pernyataan Sikap Eco-Akhlaq</th>
                      <th className="p-3">Hukum Sains / Nilai Syariat Terkait</th>
                      <th className="p-3 text-center">Tingkat Kebiasaan</th>
                      <th className="p-3 text-right">Skor Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 0, text: "Memelihara stopkontak dengan mencabut steker saat peranti mati demi memotong Vampire Draw.", rule: "Kebocoran Standby Power (Israf Semu / Mubazir) — QS. Al-Isra: 26-27" },
                      { id: 1, text: "Mengatur temperatur pendingin ruangan (AC) minimum di batas proporsional (24°C - 25°C).", rule: "Termodinamika & Efisiensi Energi Mesin Karnot — QS. Al-An'am: 141" },
                      { id: 2, text: "Berkomitmen memilah dan menolak pembuangan kotoran limbah organik mentah demi energi biogas.", rule: "Fermentasi Kimiawi ramah lingkungan — QS. Yasin: 80 (Mandat Khalifah)" },
                      { id: 3, text: "Aktif mengajak, menegur, atau mensosialisasikan kampanye hemat energi di lingkungan sekolah/rumah.", rule: "Mencegah Degradasi & Kerusakan Keseimbangan Ekosistem — QS. Ar-Rum: 41" }
                    ].map((item) => {
                      const selValue = ecoAkhlaqScores[item.id] || "Sering";
                      const pts = selValue === "Sangat Sering" ? 4 : selValue === "Sering" ? 3 : selValue === "Kadang-kadang" ? 2 : 1;
                      return (
                        <tr key={item.id} className="border-b border-natural-border/20 hover:bg-[#FAF9F6]/20 font-serif">
                          <td className="p-3 font-semibold text-natural-heading text-xs font-sans">{item.text}</td>
                          <td className="p-3 text-[#7A603D] text-[11px] italic">{item.rule}</td>
                          <td className="p-3 text-center">
                            <select
                              value={selValue}
                              onChange={(e) => {
                                const updated = { ...ecoAkhlaqScores, [item.id]: e.target.value };
                                setEcoAkhlaqScores(updated);
                                setIsExported(false);
                              }}
                              className="bg-white border border-natural-border rounded px-2 py-1 text-xs text-natural-heading focus:ring-1 focus:ring-natural-accent outline-none font-sans"
                            >
                              <option value="Sangat Sering">Sangat Sering</option>
                              <option value="Sering">Sering</option>
                              <option value="Kadang-kadang">Kadang-kadang</option>
                              <option value="Jarang">Jarang</option>
                            </select>
                          </td>
                          <td className="p-3 text-right font-mono font-bold text-natural-primary">{pts} Poin</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-[#F4FDFB] font-bold font-sans">
                      <td className="p-4 uppercase colSpan={3}">AKUMULASI SKOR INDEKS ECO-AKHLAQ KELOMPOK (ZERO-ISRAF LEVEL):</td>
                      <td className="p-4 text-right text-emerald-800 text-sm font-black font-mono">
                        {Object.values(ecoAkhlaqScores).reduce((acc: number, curr: string) => {
                          const pts = curr === "Sangat Sering" ? 4 : curr === "Sering" ? 3 : curr === "Kadang-kadang" ? 2 : 1;
                          return acc + pts;
                        }, 0)} / 16
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- HOTS MINI EVALUATION --- */}
            <div className="bg-white border border-natural-border rounded-[24px] p-5 space-y-4">
              <div className="flex items-center space-x-2 text-natural-primary font-sans">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                <span className="text-xs font-black uppercase tracking-wider">Lembar Evaluasi Mandiri Sumatif (HOTs Checkpoint)</span>
              </div>
              <p className="text-[10px] text-[#8C897A] font-sans leading-none">Jawablah pertanyaan penguji sumatif berikut berdasarkan konsep yang Anda peluk:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                <div className="bg-neutral-50 p-4 rounded-xl border border-[#E9E8DE]/60">
                  <span className="font-extrabold text-natural-accent block text-[9.5px] uppercase">Soal 1: Energi Mekanik</span>
                  <p className="text-[11px] text-[#5A5A40] mt-1 font-serif">Mengapa total energi mekanik bernilai konstan ketika gesekan udara diabaikan?</p>
                  <span className="block mt-2 font-bold text-[9px] bg-emerald-100 text-emerald-800 p-1 rounded w-fit uppercase">Kunci: Sunnatullah Konstan</span>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-[#E9E8DE]/60">
                  <span className="font-extrabold text-blue-800 block text-[9.5px] uppercase">Soal 2: Israf & Entropi</span>
                  <p className="text-[11px] text-[#5A5A40] mt-1 font-serif">Mengapa membiarkan charger HP tercolok semalaman dikategorikan perbuatan mubazir?</p>
                  <span className="block mt-2 font-bold text-[9px] bg-emerald-100 text-emerald-800 p-1 rounded w-fit uppercase">Kunci: Arus Vampire Draw</span>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-[#E9E8DE]/60">
                  <span className="font-extrabold text-purple-800 block text-[9.5px] uppercase">Soal 3: Khalifah Mandat</span>
                  <p className="text-[11px] text-[#5A5A40] mt-1 font-serif">Bagaimana kaitan fisis konversi ampas pertanian biogas terhadap tugas Khalifah fil-ardh?</p>
                  <span className="block mt-2 font-bold text-[9px] bg-emerald-100 text-emerald-800 p-1 rounded w-fit uppercase">Kunci: Mandat Anti-Fasad</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
