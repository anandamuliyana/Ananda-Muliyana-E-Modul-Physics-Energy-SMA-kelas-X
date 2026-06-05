// E-Modul Fisika Quranic Data: Landasan PBL Pedagogis dan Sintaks PQIL
import { LKPDResponse } from "../types";

export const pblTheories = [
  {
    theorist: "John Dewey (1859–1952 M)",
    concept: "Teori Belajar Eksperiensial (Learning by Doing)",
    academicLink: "Menegaskan bahwa proses pembelajaran sains paling produktif terjadi ketika peserta didik dihadapkan langsung pada draf masalah nyata kontekstual secara kooperatif. Dewey memandang kelas-sekolah bertindak sebagai miniatur lab sosial di mana peserta didik menyelesaikan rintangan hidup harian terarah."
  },
  {
    theorist: "Jean Piaget (1896–1980 M)",
    concept: "Teori Konstruktivisme Kognitif",
    academicLink: "Membuktikan bahwa pengetahuan ilmiah tidak dapat disuntikkan secara mentah hafalan dari kepala pendidik ke memori pasif anak. Peserta didik wajib proaktif mengonstruksi pengetahuannya sendiri lewat sirkuit asimilasi dan akomodasi kognitif saat memanipulasi koordinat fisik fisis."
  },
  {
    theorist: "Lev Vygotsky (1896–1934 M)",
    concept: "Sosial Konstruktivisme (Zone of Proximal Development)",
    academicLink: "Menguraikan perkembangan kognitif melompat pesat saat sasis berinteraksi kolaboratif dalam tim belajar heterogen. Vygotsky mendalilkan pentingnya Scaffolding—yaitu sokongan bimbingan terukur dari guru pendamping sela sasis buntu menderas derivasi konsep rumit."
  },
  {
    theorist: "Jerome Bruner (1915–2016 M)",
    concept: "Pembelajaran Penemuan Terbimbing (Discovery Learning)",
    academicLink: "Mendorong agar peserta didik didampingi menemukan prinsip utama rumus mekanis, formulasi, atau kesesuaian nilai ketuhanan secara mandiri (eksplorasi), meluncurkan rasa bangga penemu (Eureka effect) yang memperkuat memori jangkar jangka panjang."
  }
];

export const pblSyntaxList = [
  {
    stepNumber: 1,
    stepName: "Orientasi Peserta Didik pada Masalah Kontekstual-Qur'ani",
    teacherActivity: "Guru menyajikan video atau bacaan masalah krisis kelistrikan di timur Indonesia vs pemborosan energi batubara perkotaan. Guru menyandarkannya dengan ayat QS. Yunus: 101 serta melontarkan pertanyaan pemantik konseptual.",
    studentActivity: "Siswa membaca seksama wacana, mengisi baris pertama tabel KWL (Know, Want, Learned) di LKPD, bertukar pikiran dugaan hipotesis sebab-akibat, serta merancang rancangan rumusan masalah fisis.",
    spiritualBasis: "Yunus [10]: 101 (Perintah mengamati benda langit dan bumi sebagai ayat)",
    hotsElement: "Mengevaluasi kesesuaian fakta, merumuskan hipotesis, mendeteksi prasangka",
    deepLearningAspect: "Amanah eksistensial memandang energi sebagai nikmat luhur titipan Allah"
  },
  {
    stepNumber: 2,
    stepName: "Mengorganisasikan Peserta Didik untuk Belajar",
    teacherActivity: "Guru membagi sasis berpasangan kelompok heterogen (4-5 orang). Guru menegaskan pembagian peran setara (Presenter, Sekretaris, Peneliti Sains, Peneliti Tafsir Al-Qur'an), serta membagikan akses LKPD digital.",
    studentActivity: "Siswa berkumpul tertib di kelompok, mengonfirmasi peran fungsional tim, menyamakan ritme pengerjaan tugas, serta membaca draf instruksi laboratorium praktikum virtual.",
    spiritualBasis: "Ali Imran [3]: 104 (Keutamaan berkolaborasi kolektif)",
    hotsElement: "Organisasi sasaran, dekomposisi masalah, aliansi tanggung jawab rasi",
    deepLearningAspect: "Gotong royong kolaboratif, kesantunan syuro bermusyawarah mufakat"
  },
  {
    stepNumber: 3,
    stepName: "Membimbing Penyelidikan Mandiri dan Kelompok",
    teacherActivity: "Guru mendampingi sasis bereksperimen dengan 5 simulator virtual, memberikan scaffolding scaffolding (pertanyaan sokratis penuntun) sasis sela menjumpai rintangan pengerjaan hitungan fisika.",
    studentActivity: "Siswa memanipulasi parameter di virtual lab, melacak fluktuasi angka, menguji kebenaran rumus, serta melayangkan pencantuman ayat teologis pendukung yang relevan menggunakan peranti LKPD.",
    spiritualBasis: "Al-Isra [17]: 36 (Urgensi verifikasi pendengaran, penglihatan, akal empiris)",
    hotsElement: "Menganalisis pola tren, inferensi matematis, kalkulasi konversi mekanis",
    deepLearningAspect: "Kejujuran merekam data empiris, ketelitian saksama tadabbur ayat kauniyah"
  },
  {
    stepNumber: 4,
    stepName: "Mengembangkan dan Menyajikan Hasil Karya (Presentasi)",
    teacherActivity: "Guru mempersilakan presenter kelompok memaparkan lisan hasil kerja, mengoordinasi sanggahan kritis-ilmiah antar kelompok secara kondusif dan santun.",
    studentActivity: "Presenter kelompok memaparkan presentasi model perhitungan fisika dan kaitannya dengan ajaran Quran pelestarian alam. Sekretaris mencatatkan umpan balik masukan dari audiens.",
    spiritualBasis: "Al-Hujurat [49]: 6 (Asas tabayyun verifikasi kebenaran sajian argumentasi)",
    hotsElement: "Sintesis argumentasi logis, menangkis sanggahan konseptual secara akademis",
    deepLearningAspect: "Kesantunan verbal ilmiah, kerendahan hati mengevaluasi masukan kritis rekan eksternal"
  },
  {
    stepNumber: 5,
    stepName: "Menganalisis dan Mengevaluasi Proses Pemecahan Masalah",
    teacherActivity: "Guru meluruskan miskonsepsi rumus fisika, menayangkan peta konsep final, membimbing refleksi spiritual ekologis, serta membukakan tes kuis sumatif HOTS.",
    studentActivity: "Siswa melengkapi draf isian LKPD, menuliskan esai refleksi kepemimpinan hijau energi di sela draf kolom, dan memberesi cleanup area kerja praktikum.",
    spiritualBasis: "Ar-Rahman [55]: 7-8 (Larangan merusak mizan keseimbangan sirkuit bumi)",
    hotsElement: "Metakognisi efektivitas problem solving, koreksi draf miskonsepsi",
    deepLearningAspect: "Komitmen moral kepedulian ekologis konkrit (hemat listrik anti-israf)"
  }
];

export const defaultLKPDResponse: LKPDResponse = {
  nama: "",
  kelas: "",
  kelompok: "",
  masalahVideo: "Berdasarkan video orientasi, kami menemukan kesenjangan berupa Jakarta yang dilanda kabut asap polusi kendaraan fosil merajalela, sementara di sisi lain masih terdapat ribuan titik dusun pedesaan di Papua dan pedalaman Kalimantan yang belum menikmati aliran listrik standar.",
  pengamatanPhet: "Saat lintasan track berbentuk parabola tanpa gesekan, total energi mekanik konstan di setiap titik koordinat. Energi potensial bernilai maksimum di puncak tanjakan saat kelajuan nol. Sebaliknya, energi kinetik melonjak maksimum di dasar lintasan karena seluruh Ep berubah total menjadi Ek.",
  tabelK: "Energi didefinisikan sebagai kecakapan melakukan usaha. Ada energi kinetik, potensial, kalor, dan listrik.",
  tabelW: "Bagaimana cara merumuskan rumus matematis konversi dari masing-masing 15 jenis energi dan mengintegrasikannya dengan isyarat ayat suci Al-Qur'an secara substansial?",
  tabelL: "Kami telah mengerti bahwa hukum kekekalan energi mekanik Em1 = Em2 terikat dalam kesatuan simetri translasi waktu (Teorema Noether) yang selaras dengan mizan keseimbangan ciptaan Allah bebas cacat.",
  ayatPilihan: "QS. Yasin [36]: 80 tentang kayu hijau yang mengoksidasi pelepasan kalor panas api pembakaran.",
  hipotesis: "Jika ketinggian elevasi h diperbesar dua kali lipat, maka energi potensial gravitasi (Ep = mgh) akan melonjak sebanding dua kali lipat pula secara linier.",
  laporanInvestigasi: "Hasil praktikum virtual lab Skate Park menunjukkan perputaran konversi Ep and Ek selalu linier menjamin totalitas Em konstan 100% pada sistem konservatif.",
  refleksiQurani: "Sebagai khalifah di bumi, kami mengemban amanah memelihara kelestarian energi terbarukan tanpa israf (pemborosan) agar tidak merobek jaring mizan ekologis.",
  kesimpulan: "Hukum Kekekalan Energi Mekanik terbukti berjalan sempurna sebagai sunnatullah keteraturan alam semesta."
};
