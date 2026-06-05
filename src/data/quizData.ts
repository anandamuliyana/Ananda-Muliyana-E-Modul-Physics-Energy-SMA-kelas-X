import { CaseStudy, QuestionEssay, QuestionMC } from "../types";

export const mcQuestions: QuestionMC[] = [
  // DOMAIN MENGAMATI (Soal 1-5)
  {
    id: 1,
    question: "Perhatikan pernyataan berikut:\n(i) Air waduk yang diam tertahan di balik dinding bendungan tinggi 50 m.\n(ii) Batu yang sedang meluncur jatuh bebas dari atas tebing setinggi 10 m.\n(iii) Pegas suspensi katup generator sedang dimampatkan sejauh 5 cm.\n(iv) Aliran gas buang panas yang bergerak cepat merayapi pipa ventilasi turbin.\n\nContoh benda yang mutlak membawa ENERGI KINETIK ditunjukkan oleh nomor...",
    options: [
      "A. (i) dan (iii)",
      "B. (i) dan (ii)",
      "C. (ii) dan (iv)",
      "D. (i), (iii), dan (iv)",
      "E. (ii), (iii), dan (iv)"
    ],
    answerIndex: 2,
    domain: "Mengamati",
    explanation: "Energi kinetik adalah energi yang timbul akibat laju pergerakan (kecepatan v). (ii) Batu yang meluncur jatuh bebas memiliki kelajuan jatuh v. (iv) Aliran gas yang bergerak cepat membawa laju partikel v. Sedangkan (i) Air waduk yang diam menyimpan energi potensial gravitasi (Ep), dan (iii) Pegas yang dimampatkan menyimpan energi potensial elastik pegas."
  },
  {
    id: 2,
    question: "QS. Ar-Ra'd: 13 menguraikan getaran guruh (ra'd) yang bertasbih dengan memuji-Nya, diiringi kilatan halilintar (shawa'iq) yang menyambar bumia. Berdasarkan pengamatan fisika gelombang, dua bentuk manifestasi energi yang terlibat langsung dalam fenomena dinamis awan badai tersebut adalah...",
    options: [
      "A. Energi Kimia dan Energi Mekanik",
      "B. Energi Nuklir dan Energi Kalor",
      "C. Energi Listrik dan Energi Bunyi",
      "D. Energi Potensial Elastis dan Energi Kimia",
      "E. Energi Mekanik Bumi dan Energi Hidro"
    ],
    answerIndex: 2,
    domain: "Mengamati",
    explanation: "Kilatan halilintar (shawa'iq) merupakan peristiwa pelepasan muatan listrik statis masif rasi awan kumulonimbus (Energi Listrik). Guruh (ra'd) merupakan gelombang tekanan longitudinal udara akibat pemanasan mendadak oleh rambat petir yang merambat terdengar sebagai suara menggelegar (Energi Bunyi).",
    quranMatch: "QS. Ar-Ra'd [13]: 13"
  },
  {
    id: 3,
    question: "Seorang anak mendorong balok kargo kayu seberat 50 kg dengan mengerahkan gaya konstan F = 100 N secara horizontal di atas bidang datar. Apabila balok tersebut bergeser sejauh s = 5 meter, berapakah besar usaha mekanik yang dikerjakan oleh anak tersebut?",
    options: [
      "A. 100 Joule",
      "B. 250 Joule",
      "C. 500 Joule",
      "D. 1.000 Joule",
      "E. 2.500 Joule"
    ],
    answerIndex: 2,
    domain: "Mengamati",
    explanation: "Usaha (W) didefinisikan sebagai hasil kali gaya searah perpindahan dengan jarak tempuh: W = F * s. Karena gaya beraksi horizontal searah lintasan: W = 100 N * 5 m = 500 Joule."
  },
  {
    id: 4,
    question: "QS. An-Naba: 13 menyatakan matahari sebagai 'sirajan wahhaajan' (pelita pemancar yang sangat panas dan terang benderang). Jenis mekanisme fisis internal pada matahari yang bertindak sebagai pasokan energi konstan tersebut adalah...",
    options: [
      "A. Pembakaran kimiawi gas oksigen dan hidrogen",
      "B. Pembelahan rantai fisi nuklir unsur uranium berat",
      "C. Penggabungan fusi nuklir inti hidrogen menjadi helium",
      "D. Gesekan kinetik rotasi partikel magma geologis",
      "E. Efek fotolistrik radiasi atmosfer korona luar matahari"
    ],
    answerIndex: 2,
    domain: "Mengamati",
    explanation: "Matahari memproduksi energi mandiri tanpa henti melalui reaksi fusi nuklir berantai (penggabungan inti-inti hidrogen ringan menjadi helium pada temperatur dan tekanan sangat ekstrim pada inti dalam matahari), yang melepaskan defek massa m menjadi pancaran elektromagnetik luas.",
    quranMatch: "QS. An-Naba' [78]: 13"
  },
  {
    id: 5,
    question: "Sebuah pegas absorber elastis dengan nilai konstanta k = 1.000 N/m diregangkan sejauh x = 10 cm (0,1 m). Kuantitas energi potensial elastik yang terorganisasi aman di dalam pegas tersebut sebesar...",
    options: [
      "A. 1 Joule",
      "B. 5 Joule",
      "C. 10 Joule",
      "D. 50 Joule",
      "E. 100 Joule"
    ],
    answerIndex: 1,
    domain: "Mengamati",
    explanation: "Ep_elastik = 1/2 * k * x² = 0.5 * 1000 N/m * (0.1 m)² = 500 * 0.01 = 5 Joule."
  },

  // DOMAIN MENGANALISIS (Soal 6-12)
  {
    id: 6,
    question: "Sebuah kelapa bermassa 2 kg terlepas dari dahan pohonnya setinggi h = 20 meter dari tanah dan jatuh bebas. Jika hambatan udara diabaikan dan g = 10 m/s², tentukan kecepatan kelapa tersebut tepat sesaat sebelum menghantam permukaan tanah!",
    options: [
      "A. 10 m/s",
      "B. 15 m/s",
      "C. 20 m/s",
      "D. 25 m/s",
      "E. 40 m/s"
    ],
    answerIndex: 2,
    domain: "Menganalisis",
    explanation: "Menggunakan Hukum Kekekalan Energi Mekanik: Em_awal = Em_akhir. m*g*h = 1/2*m*v² => v = sqrt(2gh). v = sqrt(2 * 10 * 20) = sqrt(400) = 20 m/s."
  },
  {
    id: 7,
    question: "Sebuah ruang kelas kelas sekolah madrasah mengganti 5 lampu pijar lama masing-masing berdaya 60 Watt dengan 5 buah lampu LED hemat energi modern masing-masing berdaya 10 Watt. Jika lampu dinyalakan konstan 8 jam per hari, berapakah PENGHEMATAN konsumsi energi listrik sekolah tersebut dalam jangka waktu satu hari?",
    options: [
      "A. 200 Wh",
      "B. 400 Wh",
      "C. 1.200 Wh",
      "D. 2.000 Wh",
      "E. 2.400 Wh"
    ],
    answerIndex: 3,
    domain: "Menganalisis",
    explanation: "Daya lampu pijar total = 5 * 60 W = 300 W. Daya lampu LED total = 5 * 10 W = 50 W. Selisih daya penghematan = 300 W - 50 W = 250 W. Penghematan energi per hari (250 W * 8 jam) = 2.000 Wh = 2 kWh."
  },
  {
    id: 8,
    question: "Analisis fisis alur rantai konversi energi yang berlangsung di dalam unit Pembangkit Listrik Tenaga Air (PLTA) bendungan dari hulu hingga jaringan sirkuit transmisi listrik yang seimbang adalah...",
    options: [
      "A. Energi Kinetik Air -> Energi Potensial Gravitasi -> Energi Mekanik -> Energi Listrik",
      "B. Energi Potensial Gravitasi -> Energi Kinetik Air -> Energi Mekanik Turbin -> Energi Listrik",
      "C. Energi Kalor Terbakar -> Energi Kinetik -> Energi Potensial -> Energi Listrik",
      "D. Energi Kimia -> Energi Listrik -> Energi Mekanik -> Energi Kalor",
      "E. Energi Listrik -> Energi Kinetik -> Energi Mekanik -> Energi Nuklir"
    ],
    answerIndex: 1,
    domain: "Menganalisis",
    explanation: "Air waduk di posisi tinggi menaruh Energi Potensial Gravitasi. Mengalir deras ke pipa menyemburkan Energi Kinetik air. Menghantam sudu turbin menghasilkan Energi Mekanik putaran kipas. Dinamo generator mengonversi putaran rotor magnetik menjadi Energi Listrik."
  },
  {
    id: 9,
    question: "Menurut isyarat QS. Yasin: 80, Allah SWT memproduksi nyala api pembakaran bergradien kalor dari keberadaan 'kayu hijau'. Analisis rantai konversi energi fisis yang bersesuaian dengan peristiwa alami tersebut adalah...",
    options: [
      "A. Energi Nuklir Fisi -> Energi Kinetik Translasi -> Energi Geotermal",
      "B. Energi Mekanik Kincir -> Energi Listrik Aliran -> Energi Bunyi",
      "C. Energi Cahaya Matahari -> Energi Kimia Fotosintesis Kayu -> Energi Kalor Pembakaran",
      "D. Energi Kalor Bumi -> Energi Potensial Gravitasi -> Energi Listrik",
      "E. Energi Bunyi Tasbih -> Energi Elastis Pegas -> Energi Kimia Rektan"
    ],
    answerIndex: 2,
    domain: "Menganalisis",
    explanation: "Matahari menyebarkan Energi Cahaya matahari. Ditangkap daun hijau berpigmen klorofil lewat fotosintesis mengikatnya menjadi Energi Kimia karbohidrat serat kayu. Pembakaran kayu kering memutus ikatan karbon melepaskan Energi Kalor termal nyala api pembakaran.",
    quranMatch: "QS. Yā Sīn [36]: 80"
  },
  {
    id: 10,
    question: "Sebuah mesin mobil bermotor bakar mengubah 30% energi kimia bensin bakar menjadi energi mekanik roda penggerak kendaraan. Apabila mesin tersebut mengonsumsi bahan bakar yang melepaskan energi kimia total 100 kJ, berapakah jumlah energi yang terbuang percuma (mengalami dissipasi) sebagai kalor panas lingkungan akibat rintangan gesekan?",
    options: [
      "A. 30 kJ",
      "B. 40 kJ",
      "C. 50 kJ",
      "D. 70 kJ",
      "E. 100 kJ"
    ],
    answerIndex: 3,
    domain: "Menganalisis",
    explanation: "Efisiensi sistem = 30%. Daya guna bermanfaat = 30% * 100 kJ = 30 kJ. Sisanya merupakan energi hilang tak guna (terdisipasi gesekan menjadi panas mesin): 100 kJ - 30 kJ = 70 kJ."
  },
  {
    id: 11,
    question: "Sebuah bejana kalorimeter terbuat dari tembaga diisi air seberat 1.000 gram (1 kg) bertemperatur suhu mula 20 °C. Apabila air menyerap pasokan energi kalor netto sebesar Q = 168.000 Joule dan c_air = 4.200 J/kg°C, tentukan temperatur suhu akhir kestabilan termal air tersebut!",
    options: [
      "A. 30 °C",
      "B. 40 °C",
      "C. 50 °C",
      "D. 60 °C",
      "E. 80 °C"
    ],
    answerIndex: 3,
    domain: "Menganalisis",
    explanation: "Q = m * c * dT => dT = Q / (m * c) = 168000 / (1 * 4200) = 40 °C. Suhu akhir = Suhu mula + dT = 20 °C + 40 °C = 60 °C."
  },
  {
    id: 12,
    question: "Hukum Kekekalan Energi menegaskan ketiadaan energi sirkular yang musnah dari alam terisolasi melainkan sebatas beralih rupa fisis. Kalimat deklarasi sains murni tersebut merefleksikan hikmah dari prinsip keseimbangan alam 'mizan' pada QS. Ar-Rahman: 7. Apabila sebuah bola menggelinding licin di lantai kasar lambat laun terhenti habis kecepatannya, ke mana arah perubahan energi kinetik mula bola tersebut?",
    options: [
      "A. Energi kinetik bola tersebut musnah menjadi ketiadaan mutlak",
      "B. Berubah seutuhnya menjadi energi kerja listrik dalam atom lantai",
      "C. Berubah menjadi energi potensial elastis pengencangan ubin lantai",
      "D. Berubah menjadi energi termal (panas gesek) sela molekul bola dan lantai",
      "E. Diserap total oleh medan gaya gravitasi vertikal bumi"
    ],
    answerIndex: 3,
    domain: "Menganalisis",
    explanation: "Gaya gesekan mekanik non-konservatif antara material bola dan permukaan ubin kasarnya lantai mengonversikan energi kinetik makroskopik bola menjadi energi kinetik mikroskopis getaran getar acak atom (Energi Kalor/Panas gesekan), menaikkan sedikit suhu lokal.",
    quranMatch: "QS. Ar-Rahmān [55]: 7"
  },

  // DOMAIN MENGIDENTIFIKASI (Soal 13-17)
  {
    id: 13,
    question: "Identifikasi rantaian pasangan nama jenis energi fisik beserta pasangan satuan ukuran SI-nya yang terbukti BENAR dan presisi secara internasional adalah...",
    options: [
      "A. Energi Kinetik - kalori; Energi Listrik - Newton",
      "B. Energi Kalor - Joule; Daya Listrik - Watt; Energi Listrik PLN - kWh",
      "C. Energi Potensial - Watt; Daya Mekanik - Joule/sekon",
      "D. Energi Bunyi - Ampere; Daya Listrik - Volt.sekon",
      "E. Energi Nuklir - Pascal; Kecepatan Mekanik - Kelvin"
    ],
    answerIndex: 1,
    domain: "Mengidentifikasi",
    explanation: "Satuan dasar integral energi di SI adalah Joule (termasuk Energi Kalor). Daya fisis diukur dalam Watt (Joule/sekon). Energi kelistrikan tagihan PLN diukur dalam kiloWatt-hour (kWh)."
  },
  {
    id: 14,
    question: "Identifikasi jajaran fisikawan dunia berpandangan integratif yang berjasa mengonseptualisasikan kebenaran Hukum Kekekalan Energi dalam sejarah pengembangan termodinamika fisika klasik adalah...",
    options: [
      "A. Albert Einstein dan Enrico Fermi",
      "B. James Clerk Maxwell dan Sir Isaac Newton",
      "C. Julius Robert von Mayer dan Hermann von Helmholtz",
      "D. Galileo Galilei dan Daniel Bernoulli",
      "E. Nicolas Sadi Carnot dan James Watt"
    ],
    answerIndex: 2,
    domain: "Mengidentifikasi",
    explanation: "Julius Robert von Mayer (1842) dan Hermann von Helmholtz (1847) merupakan ilmuwan-ilmuwan utama yang memproklamirkan secara independen kebenaran prinsip mekanikal bahwa kuantitas energi total di alam semesta bersifat lestari tidak dapat dimusnahkan."
  },
  {
    id: 15,
    question: "Identifikasi mode mekanisme perpindahan panas (kalor) yang beroperasi mutlak mandiri di alam tanpa memerlukan keberadaan zat perantara (medium) rambat fisis sama sekali adalah...",
    options: [
      "A. Konduksi",
      "B. Konveksi",
      "C. Konduksi dan Konveksi",
      "D. Radiasi Spekter elektromagnetik",
      "E. Evaporasi fase dinamis"
    ],
    answerIndex: 3,
    domain: "Mengidentifikasi",
    explanation: "Radiasi adalah perpindahan panas dalam bentuk gelombang elektromagnetik transversal (seperti pancaran foton inframerah matahari merayapi kehampaan vakum ruang angkasa) sehingga tidak memerlukan kontak partikel perantara fisis."
  },
  {
    id: 16,
    question: "Berdasarkan kajian fisis-spiritual terpadu di dalam e-modul ini, identifikasi pernyataan proposisi akademis tentang hubungan sains agama Al-Qur'an yang paling BENAR dan substantif adalah...",
    options: [
      "A. Al-Qur'an dan fisika bertentangan tajam dalam mendefinisikan fenomena alam semesta",
      "B. Al-Qur'an sekadar mengatur dogma ibadah murni tanpa menaruh isyarat rasional sains sama sekali",
      "C. Al-Qur'an telah mengisyaratkan prinsip keteraturan, kekekalan, dan konversi energi jauh sebelum ilmuwan modern membuktikannya lewat instrumen kuantitatif",
      "D. Fisika empiris meniadakan keabsahan teologis karena mengandalkan metode sekuler",
      "E. Manusia tidak perlu mengkaji fisika karena Al-Qur'an sudah melarang akal menjelajah terlalu jauh"
    ],
    answerIndex: 2,
    domain: "Mengidentifikasi",
    explanation: "Penyusunan e-modul membuktikan Al-Qur'an kaya isyarat kauniyah teoretis (seperti mizan, gerakan tektonik, kilat listrik, mutlaknya kecepatan cahaya) yang menuntun dorongan metodologis bagi penemuan empiris sains moderen.",
    quranMatch: "QS. Az-Zumar [39]: 9"
  },
  {
    id: 17,
    question: "Identifikasi alur transformasi perubahan bentuk energi yang tengah berlangsung aktif di dalam sel sirkuit baterai handphone Anda ketika sedang dihubung pengisi daya (DICHARGE) adalah...",
    options: [
      "A. Energi Kimia -> Energi Listrik",
      "B. Energi Mekanik -> Energi Kimia",
      "C. Energi Listrik -> Energi Kimia",
      "D. Energi Kalor -> Energi Listrik",
      "E. Energi Kinetik -> Energi Potensial"
    ],
    answerIndex: 2,
    domain: "Mengidentifikasi",
    explanation: "Saat proses pengisian daya baterai (charging), energi listrik dari luar (stopkontak charger) memicu terjadinya reaksi kimia reduksi-oksidasi non-spontan untuk menumpuk penampungan ion-ion lithium (Energi Listrik berubah menjadi Energi Kimia latent baterai)."
  },

  // DOMAIN MENYIMPULKAN (Soal 18-20)
  {
    id: 18,
    question: "Berasas pada keseluruhan telaah interdisipliner di dalam e-modul sains-islam ini, simpulkan hakikat relasi harmonis yang terjalin antara ilmu fisika murni dan kalam mulia Al-Qur'an!",
    options: [
      "A. Keduanya bermusuhan berebut otoritas penafsiran",
      "B. Fisika menggantikan peran Al-Qur'an dalam menuntun moralitas manusia",
      "C. Keduanya saling melengkapi: Al-Qur'an meletakkan basis makna spiritual, etis-ekologis, sementara fisika menjelaskan rumus cara kerja teknis mekanikal partikel alamnya",
      "D. Al-Qur'an hanya berfaedah untuk ritual doa penyembuh penyakit medis saja",
      "E. Fisika harus tunduk pada interpretasi penaksiran mistisisme absolut tanpa verifikasi"
    ],
    answerIndex: 2,
    domain: "Menyimpulkan",
    explanation: "Keduanya merupakan rute komplementer penemuan satu kebenaran hakiki ilahi. Al-Qur'an memancarkan peta nilai etis ekologis yang aman, sedangkan fisika menguraikan representasi pemodelan hitungan matematis empiris.",
    quranMatch: "QS. Ali 'Imran [3]: 190"
  },
  {
    id: 19,
    question: "QS. Al-Isra: 27 mendeklarasikan bahwasanya para pelaku israf (pemboros) diklasifikasikan sebagai 'saudara-saudara setan.' Berpijakan pada kajian prinsip efisiensi daya energi sirkuit fisika, simpulkan relevansi ancaman teologis tersebut dalam pembentukan kepribadian ekologis sehari-hari!",
    options: [
      "A. Penghematan energi hanya diwajibkan sela krisis inflasi barang saja",
      "B. Perilaku boros energi terintegrasi dosa perusakan lingkungan hidup karena mempercepat laju disipasi energi buruk (kenaikan entropi tak guna) yang merobek kestabilan mizan bumi ciptaan Allah",
      "C. Islam melarang penggunaan peralatan bertenaga kelistrikan boros Watt",
      "D. Pemborosan dibolehkan jika kita membayar tagihan bulanan secara rutin",
      "E. Penghematan hanya tugas fungsional pemerintah dan perusahaan swasta kelistrikan"
    ],
    answerIndex: 1,
    domain: "Menyimpulkan",
    explanation: "Pemborosan energi mempercepat pelepasan gas emisi karbon pembakaran fosil secara sia-sia, menumpuk kalor buangan buruk tak berguna yang merusak tatanan ekologis (mizan) bumi. Hal ini dikategorikan kezaliman fisis ekologis.",
    quranMatch: "QS. Al-Isrā' [17]: 27"
  },
  {
    id: 20,
    question: "Menimbang seluruh rantaian pilar pembelajaran fisika berbasis PBL Al-Qur'an di modul ini, simpulkan profil peranan ekologis ideal yang selayaknya diamalkan oleh seorang siswa Muslim terdidik!",
    options: [
      "A. Cukup beribadah di dalam masjid tanpa perlu peduli krisis energi sekitarnya",
      "B. Menolak kemajuan teknologi listrik modern karena dinilai bercorak sekuler bid'ah",
      "C. Memanfaatkan energi eksploitasi alam sepuasnya tanpa batas karena dinilai hak istimewa ketundukan",
      "D. Membaca kalam ayat aktif, menguasai ilmu hitung fisika teoretis, hidup sederhana hemat hemat daya, serta mendedikasikan kreativitasnya guna merancang teknologi energi terbarukan bersih ramah lingkungan",
      "E. Memasrahkan penyelesaian problem lingkungan kepada insinyur non-Muslim saja"
    ],
    answerIndex: 3,
    domain: "Menyimpulkan",
    explanation: "Seorang muslim berpendidikan sains utuh mengemban mandat ganda: pilar kecakapan berpikir kritis (literasi fisika) yang diselaras dengan komitmen spiritual ekologis pelestari (taqwa ekologis) guna memberikan kemaslahatan rahmatan lil-'alamin."
  }
];

export const essayQuestions: QuestionEssay[] = [
  {
    id: 1,
    question: "Uraikan dengan runtut bagaimana Teorema Usaha-Energi (Work-Energy Theorem) diturunkan secara kalkulus matematis hingga memunculkan angka setengah (1/2) kuadrat pada formulasi Energi Kinetik (Ek = 1/2 m v²)! Hubungkan pula esensi gerakan kinetik partikel tersebut dengan isyarat geofisika berjalan dinamisnya gunung-gunung laksana awan pada QS. An-Naml Ayat 88!",
    rubric: [
      "Skor 4: Menurunkan rumus secara kalkulus integratif lengkap (W = ∫ F dx, substitusi F = m dv/dt, dt = dx/v dst) secara presisi, serta mengaitkan fenomena tektonisme gunung QS. An-Naml: 88 secara geofisika-teologis mendalam.",
      "Skor 3: Melakukan penurunan rumus integrasi matematika benar tetapi kurang saksama di bagian aturan rantai kalkulus, serta menyertakan pembahasan ayat Al-Qur'an yang cukup saksama.",
      "Skor 2: Hanya menyajikan rumus linear tanpa integral, penjelasan kaitan ayat Al-Qur'an dangkal atau sekadar tempelan murni.",
      "Skor 1: Formula salah, ketiadaan integrasi tafsir Al-Qur'an pendukung lurus."
    ],
    sampleAnswer: "Dimulai dari persamaan usaha dasar W = ∫ F dx. Berdasarkan Hukum Newton II F = m * a = m * (dv/dt). Sesuai aturan rantai diferensial, dx = v * dt. Kita substitusikan dx ke dalam integral usaha: W = ∫ m * (dv/dt) * (v * dt) = ∫ m * v dv. Rentang batas integrasi kecepatan dari v_awal (vi) ke v_akhir (vf) menghasilkan: W = [1/2 * m * v²] dari vi ke vf = 1/2 m vf² - 1/2 m vi². Jika vi = 0, maka Ek = 1/2 m v². Pada QS. An-Naml: 88, gunung-gunung yang tampak tegap kokoh sesungguhnya berjalan mengalir bersama lempeng tektonik bumi laksana awan. Kerak bumi bermassa masif bergerak konstan membawa muatan energi kinetik geodinamik megah, membuktikan keteraturan sunnatullah bahwa ketetapan ilahi dirancang mengalir fasa dinamis."
  },
  {
    id: 2,
    question: "Sebuah waduk PLTA mikrohidro di daratan tinggi Sumatera Barat mengalirkan debit air konstan Q = 0,5 m³/s melintasi pipa vertikal air terjun berketinggian h = 20 meter menuju sudu turbin generator. Apabila nilai efisiensi turbin generator adalah eta = 75% dan g = 10 m/s², hitunglah daya listrik bersih konstan yang disuplai dinamo ke desa sekitar! Sambungkan makna sungai yang ditundukkan rezekinya pada QS. Ibrahim Ayat 32 dengan komitmen penghematan energi listrik desa!",
    rubric: [
      "Skor 4: Perhitungan matematis presisi 100% lengkap satuan internasional (Hasil: 75 kW), analisis teologis QS. Ibrahim: 32 tentang ketundukan rivers/sungai fungsional diuraikan sangat bagus dikaitkan etika daya.",
      "Skor 3: Perhitungan keliru kecil kalkulasi angka akhir tetapi formula dan runtutan unit benar, kaitan tafsir memadai.",
      "Skor 2: Rumus PLTA salah, penjelasan teologis minim analisis fisis.",
      "Skor 1: Jawaban melantur tanpa rumus dan ayat."
    ],
    sampleAnswer: "Diketahui: Q = 0,5 m³/s; h = 20 m; eta = 0,75; g = 10 m/s², ρ_air = 1.000 kg/m³. Rumus daya air: P_netto = eta * ρ_air * g * Q * h. Substitusikan angka: P_netto = 0,75 * 1000 * 10 * 0,5 * 20 = 750 * 10 * 10 = 75.000 Watt = 75 kW. Pada QS. Ibrahim: 32, sungai-sungai ditundukkan (sakhkhara lakumul-anhar) sebagai limpahan rezeki. Menundukkan aliran air sungai bermakna hukum fisis aliran fluida gravitasi siap dipanen energinya demi kemakmuran warga. Konsekuensi atas penundukan nikmat sungai ini mewajibkan warga desa menjaga kelestarian hutan tangkapan air dan hemat daya kedaulatan listrik sebagai bentuk kesyukuran aktif (anti-israf)."
  },
  {
    id: 3,
    question: "Bagaimanakah Hukum Kekekalan Energi Mekanik dianalisis pada peristiwa pendulum berayun (atau wahana skate park) melintasi lintasan lengkung licin ideal? Bandingkan pula analisis sistem ideal tersebut dengan sistem kenyataan yang melibatkan rintangan gesekan udara penahan, dan sambungkan fenomenanya dengan larangan kerusakan keseimbangan kosmos 'mizan' pada QS. Ar-Rahman: 7-8!",
    rubric: [
      "Skor 4: Menganalisis transisi energi kinetik-potensial ayunan pendulum ideal (Em konstan) vs nyata (Em menyusut terdisipasi kalor gesek) secara fisika termodinamika presisi, mengaitkan dengan mizan QS. Ar-Rahman: 7-8 secara luhur.",
      "Skor 3: Menjelaskan perbedaan ideal vs nyata memadai tetapi formula termodinamika degradasi energi terlewat fasa, uraian ayat memadai.",
      "Skor 2: Analisis pendulum dangkal, korelasi mizan ayat sekadar mengulang teks terjemahan murni.",
      "Skor 1: Penjelasan melantur salah kaprah fisis."
    ],
    sampleAnswer: "Pada pendulum ideal tanpa gesekan udara, ia melestarikan energi mekanik total (Em = Ep + Ek = konstan). Di titik simpang puncak tertinggi, kecepatan nol maka Ek = 0, sehingga Em = Ep_maks = mgh. Di titik terendah lintasan h = 0, maka Ep = 0, seluruh energi berubah menjadi Ek_maks = 1/2 mv². Pada sistem kenyataan, terdapat gaya gesek non-konservatif udara yang melakukan usaha disipasi W_gesek. Akibatnya, sebagian energi mekanik menyusut terdegradasi menjadi energi kalor panas (suhu getar atom) yang terbuang ke atmosfer. Energi total semesta tetap lestari, namun kualitas energi mekanik yang berguna menurun (Entropi naik). Hal ini selaras dengan QS. Ar-Rahman: 7-8 tentang larangan merusak mizan. Allah merancang mizan sistem alam semesta beroperasi seimbang. Tindakan merusak keseimbangan alam dengan mengekspos pembuangan energi buruk tak terkontrol (israf karbon) akan merusak jaring mizan lokal atmosfer bumi (pemanasan global)."
  },
  {
    id: 4,
    question: "Uraikan konsep pemisahan langit dan bumi primordial pada QS. Al-Anbiya: 30 dan hubungannya secara analogi ilmiah teoretis dengan teori ledakan Big Bang serta Hukum Termodinamika I tentang konservasi energi primordial semesta!",
    rubric: [
      "Skor 4: Analisis korelasi Big Bang - singularitas - konservasi massa energi purba - QS Al-Anbiya: 30 ditulis secara ilmiah, ketat tanpa cocologi ekstrem.",
      "Skor 3: Penjelasan kosmologi baik tetapi bahasan termodinamika kurang terarah matematis.",
      "Skor 2: Cocologi memaksakan ayat tanpa landasan argumentasi fisika teoretis matang.",
      "Skor 1: Deskripsi salah fatal."
    ],
    sampleAnswer: "QS. Al-Anbiya: 30 menguraikan langit dan bumi dulunya padat menyatu rapat (ratqan) sebelum akhirnya diledakkan dipisahkan (fatqan) oleh kekuasaan Allah. Analogi kosmologis menyelaraskannya dengan Big Bang: sekitar 13,8 milyar tahun silam seluruh entitas materi fisis and energi terhimpun erat dalam satu titik singularitas maha rapat maha panas dimensi volum nol. Peristiwa ekspansi primordial melepaskan rantaian radiasi foton dahsyat yang mendingin mengonstruksi formasi kisi atom pembentuk bintang, bumi, air dan mahluk hidup. Sesuai Hukum Termodinamika I, totalitas muatan entitas energi semesta beraksi kekal lestari sejak hembusan ledakan Big Bang, tidak bertambah maupun mengurang, melestarikan ketetapan sunnatullah mutlak."
  },
  {
    id: 5,
    question: "Sebuah perangkat panel sel surya silikon berukuran A = 4 m² menangkap pancaran intensitas terik matahari siang I = 800 W/m² dengan angka efisiensi kelistrikan bahan sel surya adalah eta = 20%. Hitung keluaran daya listrik bersih panel surya tersebut! Jika lampu bohlam sekolah berdaya 40 Watt dinyalakan konstan menggunakan listrik panel surya ini, berapakah jumlah maksimal bohlam lampu yang sanggup dinyalakan sekaligus?",
    rubric: [
      "Skor 4: Langkah perhitungan berurutan rapi presisi 100% (Hasil daya surya: 640 Watt, maksimal bola lampu: 16 bohlam), unit satuan lengkap.",
      "Skor 3: Perhitungan keliru di bagian porsi pembagian jumlah bohlam lampu tetapi hitungan daya surya benar, langkah runtut.",
      "Skor 2: Formula panel surya salah, hitungan bohlam melantur jauh.",
      "Skor 1: Ketiadaan hasil dan rumus fisis."
    ],
    sampleAnswer: "Diketahui: A = 4 m²; I = 800 W/m²; eta = 0,20; P_lampu = 40 Watt. Langkah 1: Hitung daya listrik netto panel surya (P_surya): P_surya = I * A * eta = 800 * 4 * 0,20 = 3200 * 0,20 = 640 Watt. Langkah 2: Hitung jumlah bohlam lampu maksimal yang dinyalakan (N): N = P_surya / P_lampu = 640 Watt / 40 Watt = 16 buah bohlam lampu. Jadi, panel surya sanggup menyuplai penyalaan maksimal 16 buah bohlam lampu 40 Watt sekaligus."
  },
  {
    id: 6,
    question: "Jelaskan perbedaan mendasar konsepsi panas (kalor) dan temperatur (suhu) ditinjau secara mikroskopis partikel atom fisis! Berikan satu ayat Al-Qur'an pendukung tentang konversi termal kayu hijau kayu bakar!",
    rubric: [
      "Skor 4: Menjelaskan perbedaan kalor (energi mikroskopis kumulatif ditransfer perbedaan suhu) vs suhu (derajat energi kinetik rata-rata partikel) secara fisika statistik benar, menyertakan QS. Yasin: 80 secara jitu.",
      "Skor 3: Penjelasan fisika benar murni tetapi tidak menyandingkan korelasi kimia selulosa dan klorofil kayu hijau.",
      "Skor 2: Definisi kalor suhu tertukar lepas, uraian ayat sekadar tempelan kasat mata.",
      "Skor 1: Definisi ngawur salah kaprah."
    ],
    sampleAnswer: "Secara mikroskopis fisis, temperatur (suhu) mengukur derajat energi kinetik rata-rata (vibrasi/translasi) per satu butir partikel penyusun zat (berkorelasi kuadratik dengan kecepatan partikel). Sedangkan kalor (panas) mengukur total kuantitas energi kinetik mikroskopis kumulatif yang ditransfer antar dua sistem sirkuit karena dipicu gradien perbedaan suhu. Ayat pendukung konversi termal biomassa berada pada QS. Yasin: 80 tentang Tuhan yang mengeluarkan api membakar dari kayu hijau yang basah subur. Kayu hijau mengonsumsi energi surya foton menyimpannya dalam ikatan kovalen kimia selulosa, pembakaran kering membebaskan entalpi reaksi pembakaran eksotermal mengeluarkan pancaran kalor panas radiasi elektromagnetik api."
  },
  {
    id: 7,
    question: "Sebutkan minimal 4 tokoh ilmuwan peradaban emas Islam abad pertengahan yang meletakkan fundamen riset awal energi serta rincilah penemuan mekanik fisis mereka masing-masing!",
    rubric: [
      "Skor 4: Menyebutkan 4 nama ilmuwan lengkap (Ibnu Sina, Ibnu Al-Haytham, Al-Biruni, Al-Jazari) beserta inovasi mekanika fisika dan teori energinya dikaji secara akademik tegap.",
      "Skor 3: Menyebutkan 3 ilmuwan benar lengkap detail fisis kontribusinya.",
      "Skor 2: Menyebutkan 2 ilmuwan seadanya tanpa uraian fisis fungsional karyanya.",
      "Skor 1: Salah tokoh salah karya."
    ],
    sampleAnswer: "1. Ibnu Sina (Avicenna, 980-1037 M): Menganalisis teori gerak inersia awal (mayl) mendahului Newton, serta menyimpulkan bahwa kalor jenis termal berkaitan langsung dengan gerakan kinetik mikroskopis dalam organ tubuh fisis. 2. Ibnu Al-Haytham (Alhazen, 965-1040 M): Membuktikan sifat perambatan gelombang garis lurus energi cahaya foton lewat eksperimen kamar gelap (camera obscura). 3. Al-Biruni (973-1048 M): Membuktikan kecepatan rambat cahaya melampaui kelajuan rambat suara di udara hampa udara serta piknometer spesifik gravitasi zat. 4. Al-Jazari (1136-1206 M): Mendesain poros engkol (crankshaft) konverter momentum rotasi dinamis ke gerak translasi linier serta pompa air roda kincir air terapung hidraulis."
  },
  {
    id: 8,
    question: "Mengapa besi (Fe-56) diidentifikasi dalam fisika nuklir modern memiliki kestabilan inti (binding energy per nucleon) tertinggi di jagat semesta? Kaitkan rahasia kegagahan daya logam besi pertahanan tersebut dengan kalam QS. Al-Hadid Ayat 25!",
    rubric: [
      "Skor 4: Menganalisis kurva energi ikat inti (binding energy curve), posisi puncak besi-56, teori fusi supernovas logam tinggi, dan kesesuaian istilah 'ba'sun syadid' QS. Al-Hadid: 25 secara komparatif akademis.",
      "Skor 3: Menjelaskan kestabilan inti besi memadai tetapi tidak menyandingkan penjelasan astrofisika proses pembentukan sintesis fusi bintang tua nuleosintesis.",
      "Skor 2: Pembahasan sekadar menyebut besi kuat untuk pisau tanpa dasar fisika inti nuklir.",
      "Skor 1: Salah penafsiran fisis total."
    ],
    sampleAnswer: "Kurva energi ikat inti per nukleon (nuclear binding energy curve) mencapai puncak koordinat tertingi dan paling stabil pada isotop Besi-56 (Fe-56) dengan nilai ~8,8 Megaelektronvolt (MeV) per nukleon. Akibatnya, besi menolak reaksi pembelahan (fisi) maupun penggabungan (fusi) spontan karena saking rapatnya ikatan penstabil gaya kuat inti proton-neutronnya. Besi tidak dapat disintesis di kerak bumi melainkan lewat fusi bintang super raksasa (stellar nucleosynthesis) sebelum meledak dahsyat. Hal ini bersesuaian dengan QS. Al-Hadid: 25 yang menyatakan Kami turunkan logam besi (anzalnal-hadid) yang meluncur dari langit meteorid, di mana padanya ada kekuatan pertahanan militer yang sangat dahsyat hebat (ba'sun syadid)—merujuk ikatan rapat partikel inti besi terkuat di semesta sains fisis."
  },
  {
    id: 9,
    question: "Rumuskan persamaan matematis keterkaitan kuantitatif antara Energi Kinetik (Ek) dan Momentum Linier (p) suatu materi fisis bermassa m! Bagaimanakah pemeliharan momentum linier ini direfleksikan secara kiasan keadilan hukum beban dosa individual pada QS. Al-An'am Ayat 164?",
    rubric: [
      "Skor 4: Penurunan matematis murni benar (Ek = p² / 2m) presisi, interpretasi teologis analogi momentum linier dan beban amal individual diulas secara filosofis cerdas dan terarah.",
      "Skor 3: Hubungan rumus matematika benar tetapi ketiadaan langkah penurunan, korelasi ayat memadai.",
      "Skor 2: Formula salah, uraian kiasan ayat tidak koheren.",
      "Skor 1: Ketiadaan draf jawaban."
    ],
    sampleAnswer: "Momentum linier didefinisikan sebagai p = m * v => v = p / m. Persamaan energi kinetik dasar: Ek = 1/2 * m * v². Substitusikan kecepatan v ke dalam rumus Ek: Ek = 1/2 * m * (p/m)² = 1/2 * m * (p² / m²) = p² / 2m. Terbukti Ek = p² / 2m. Pada QS. Al-An'am: 164 declared 'seseorang tidak memikul beban kemaksiatan orang lain'. Secara analogis fisis, kiasan keadilan kosmik ini selaras dengan Hukum Kekekalan Momentum Linier pada tumbukan partikel terisolasi: tiap benda partikel membawa koordinat momentumnya sendiri m_i * v_i dan tidak bisa memindah beban momentum internalnya ke sembarang koordinat luar tanpa sirkuit interaksi fisis gaya luar yang tepat. Melambangkan keadilan penegakan neraca sebab-akibat mizan penciptaan."
  },
  {
    id: 10,
    question: "Bagaimanakah bunyi di dalam skala kepekatan kebisingan Desibel dihitung secara matematis menggunakan logaritma basis sepuluh? Mengapa firman nasihat Luqman as untuk melembutkan suara dan mencela suara keledai (QS. Luqman Ayat 19) selaras dengan kajian kesehatan polusi kebisingan akustik?",
    rubric: [
      "Skor 4: Menyajikan rumus Desibel akustik logaritma (L = 10 log(I/Io)) benar lengkap ambang Io, mengaitkan QS. Luqman: 19 tentang polusi kebisingan di atas 100 dB merusak gendang telinga manusia secara akustik-biologis saksama.",
      "Skor 3: Rumus benar fisis tetapi ketiadaan uraian batas ambang pendengaran standard manusia (10^-12 W/m²).",
      "Skor 2: Definisi logaritma Desibel salah, uraian etis suara minim porsi fisis sains.",
      "Skor 1: Kosong melantur."
    ],
    sampleAnswer: "Tingkat kebisingan diukur lewat rumus Desibel (dB): L = 10 * log10(I / Io), di mana I merupakan intensitas riil gelombang bunyi merambat (W/m²), dan Io merupakan konstanta batas ambang pendengaran manusia normal paling lirih setara 10^-12 W/m² pada frekuensi standar 1.000 Hz. Pada QS. Luqman: 19, manusia diperintahkan melembutkan suaranya (waghdhudh min shautik) dan mencela suara keledai yang melengking pekak kasar. Sesuai akustik fisis terapan, ringkikan suara keledai mencapai intensitas ambang atas melampaui 100 Desibel dalam frekuensi tinggi, berdekatan dengan ambang rasa sakit (threshold of pain) rasi gendang pendengaran manusia. Perintah melembutkan suara merupakan regulasi etis-ekologis Islam untuk meredam pencemaran kebisingan (noise pollution) yang memicu hipertensi psikis sosial warga."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Studi Kasus 1: Transisi Pembangkit Listrik Batubara Jakarta vs PLTS Atap Nasional",
    scenario: "Jakarta didera kabut polusi udara berat (PM2.5) akibat asap pembakaran PLTU batubara di sekeliling wilayah penyangga. Sebagai dewan perwakilan remaja, Anda ditantang menyusun argumentasi ilmiah fisis-ekologis: mengapa beralih ke panel surya sel fotovoltaik (ESurya = I*A*eta) sejajar dengan komitmen syariat mencegah kerusakan alam (fasad) pada QS. Ar-Rum Ayat 41? Buatlah perhitungan ringkas: jika atap sekolah geduang madrasah seluas A = 100 m² dilapasang panel berdaya guna eta = 20% dengan intensitas harian rata-rata matahari I = 800 W/m², berapakah daya listrik instan yang dipanen?",
    hint: "Hitung daya bersih: Ps = I * A * eta. dH aspar batubara melepaskan racun CO2 fly ash pemicu karat asam air hujan.",
    rubric: "Proposal mencakup argumentasi fisis-ekologis, kalkulasi matematis (Hasil: 16 kW), integrasi nilai QS. Ar-Rum: 41, serta konkrit langkah transisi sirkuit mandiri sekolah.",
    sampleSol: "Kalkulasi fisis daya dipanen: P_surya = I * A * eta = 800 W/m² * 100 m² * 0,20 = 80.000 * 0,20 = 16.000 Watt = 16 kW daya listrik mandiri ramah lingkungan. Argumentasi Ekologis-Teologis: Pembakaran batu bara PLTU di sekeliling Jakarta memutus ikatan kimia batubara melepaskan sulfur dioksida, PM2.5 toksik, dan gas rumah kaca CO2 yang mempercepat perubahan iklim global. Tindakan eksploitasi kotor batubara ini merupakan wujud nyata kerusakan alam akibat tindakan tangan manusia jahil (fasad fil-ardhi) yang dicela keras dalam QS. Ar-Rum: 41. Beralih ke sistem PLTS atap sekolah 16 kW menghemat konsumsi energi fosil, mencegah emisi berbahaya, melestarikan kesehatan warga sekitar, dan menegakkan pilar ketakwaan ekologis sebagai pemimpin khalifah penjaga bumi."
  },
  {
    id: 2,
    title: "Studi Kasus 2: Elektrifikasi Mandiri Dusun Terpencil Papua dengan Mikrohidro Sungai",
    scenario: "Sebuah dusun mualaf di pelosok Papua Barat belum menikmati kelistrikan nasional karena sirkuit grid transmisi tebing curam terputus. Dusun tersebut dilintasi jeram sungai berbatu dengan debit air alami konstan Q = 0,4 m³/s dan tinggi pancur gravitasi h = 5 meter. Kelompok mualaf bersepakat merakit instalasi turbin air kayu mikrohidro sederhana berdaya guna efisiensi turbin eta = 50% untuk menyalakan kawat listrik rumah-rumah, didampingi naskah teologis QS. Ibrahim: 32 tentang penundukan sungai. Hitung daya netto listrik terbangun dan jelaskan etika keutamaan berbaik hati merawat bendungan sungai hulu!",
    hint: "Gunakan rumus Ph = eta * rho * g * Q * h. Sambungkan etika pemeliharaan ukhuwah hulu-hilir sungai.",
    rubric: "Kalkulasi benar (Hasil: 10 kW), analisis penundukan sungai QS. Ibrahim: 32, serta etika ukhuwah ekologis hidrologi air pegunungan.",
    sampleSol: "Kalkulasi fisis daya mikrohidro PLTA: P_listrik = eta * ρ_air * g * Q * h = 0,5 * 1000 kg/m³ * 10 m/s² * 0,4 m³/s * 5 m = 500 * 4 = 2.000 * 5 = 10.000 Watt = 10 kW. Daya 10 kW sanggup menerangi lampu 100 rumah gubuk pedesaan mualaf masing-masing 100 Watt secara mandiri gratis. Argumentas ekologis teologis: Penundukan sungai (sakhkhara lakumul-anhar) adalah bentuk welas asih Allah. Untuk melestarikan daya sirkuit turbin 10 kW konstan, komunitas mualaf hillir berkolaborasi dengan suku pedalaman hulu pegunungan untuk melarang penebangan pohon sela hutan resapan di puncak elevasi h. Ini melahirkan ukhuwah ekologis (silaturahmi air) yang menyatukan hati lintas suku selaras dengan rukun mandat persaudaraan iman."
  },
  {
    id: 3,
    title: "Studi Kasus 3: Reaktor Biogas Kotoran Ternak Desa Mandiri Energi Terintegrasi Hijau",
    scenario: "Sebuah perkampungan peternak sapi di Jawa Timur menyebarkan limbah kotoran basah berbau menyengat ke saluran parit irigasi sawah memicu ledakan wabah penyakit lalat gatal. Anda ditugaskan merancang reaktor kubah silinder digester biogas untuk menampung fermentasi kotoran sapi guna menghasilkan bahan bakar gas metana (CH₄) kompor gas warga, menyelaraskan aktivitas dengan larangan israf pembuangan nikmat terselubung. Jika total kotoran m = 100 kg sampah kandang diproses setiap hari dengan nilai LCV biogas = 20 MJ/kg, hitung energi kimia panas yang bisa dihemat tiap bulan (30 hari)!",
    hint: "Energi per hari Q = m * LCV. Kalikan 30 untuk bulanan.",
    rubric: "Kalkulasi bulanan benar (Hasil: 60.000 MJ), strategi reaktor biogas anaerobik, hikmah anti-israf penanganan sanitasi lingkungan kotor terpadu.",
    sampleSol: "Kombinasi kalkulasi energi kimia bulanan: Q_harian = m * LCV = 100 kg * 20 MJ/kg = 2.000 MJ per hari. Q_bulanan = 2.000 MJ * 30 hari = 60.000 MegaJoule (MJ) per bulan energi metana terbarukan. Strategi dan hikmah ekologis: Kotoran sapi yang dibuang sembarangan ke selokan memicu pertumbuhan bakteri Coli merusak sanitasi air bersih pemukiman warga. Tindakan semberono membuang kotoran menyia-nyiakan nilai kalori latent tinggi merupakan perbuatan israf mubazir. Reaktor digester menyalurkan mikroba anaerob megatrium meremukkan asam senyawa organik kotoran menjadi gas metana bersih kompor dapur warga, melestarikan nitrogen padat sisa sebagai pupuk alami ladang buah subur. Menutupi bau kotoran melahirkan aroma kesejahteraan sirkular ekonomi umat."
  },
  {
    id: 4,
    title: "Studi Kasus 4: Geotermal Kawah Kamojang Garut sebagai Penstabil Grid Listrik Jawa-Bali",
    scenario: "Kawah geotermal Kamojang Garut merupakan Pembangkit Listrik Panas Bumi tertua yang menyuplai grid sirkuit listrik interkoneksi Jawa-Bali secara andal bebas debu udara. Anda dituntut menelaah kestabilan pasokan energi geotermal magma bawah tanah Kamojang jika disandingkan dengan fungsi luhur gunung api sebagai pasak bumi ('awtad') pada QS. An-Naba: 7. Mengapa geotermal berkarakter andal (baseload) dibanding panel surya yang fluktuatif intermiten terhalang awan?",
    hint: "Uraikan magma sebagai sumber energi baseload bumi yang konstan melampaui perubahan cuaca musiman luar.",
    rubric: "Uraian geologi gunung api Kamojang, pemahaman rekayasa baseload listrik, keselarasan prinsip gunung api penyeimbang tekanan magma internal kosmik 'awtad' QS. An-Naba: 7.",
    sampleSol: "Penjelasan geologi dan fungsi pasak awtad: Panas bumi geotermal bersumber langsung dari peluruhan radioaktif batuan ultra mantel dalam serta magma aktif yang ditahan kokoh oleh struktur pasak akar geofisika pegunungan berapi (awtad). Gunung berapi mempertahankan stabilitas kerak litosfer dari gempa patahan elastis, sekaligus menyodorkan katup termal aman Kamojang. Karakter baseload fisis geotermal Kamojang dapat memompa uap air panas konstan tanpa dipengaruhi cuaca mendung awan angin luar 24 jam sehari, bertindak sebagai penstabil jangkar transmisi kelistrikan Jawa-Bali. Ini membuktikan rancangan mizan ciptaan Allah yang menaruh pasak gunung berapi di kerak bumi bukan sebatas penahan guncangan melainkan gudang raksasa energi termis bersih bagi peradaban."
  },
  {
    id: 5,
    title: "Studi Kasus 5: Pemanfaatan Energi Nuklir PLTN Indonesia di Bangka Belitung",
    scenario: "Pemerintah merencanakan pembangunan Pembangkit Listrik Tenaga Nuklir (PLTN) pertama di Pulau Bangka Belitung memanfaatkan deposit mineral rutil torium radioaktif daerah tambang timah. Proyek ini membelah opini masyarakat: dari aspek ketakutan bahaya radiasi reaktor bocor Chernobyl berbanding kebutuhan suplai listrik industri kedaulatan bangsa. Susunlah satu ulasan rekomendasi komparatif rekayasa teknologi keselamatan reaktor generasi IV (seperti reaktor garam cair MSR yang tak bisa meledak hancur meskipun mati sistem) dengan merujuk pada prinsip kesempurnaan ciptaan tanpa tafawut catat pada QS. Al-Mulk Ayat 3!",
    hint: "Fisika reaktor generasi IV menaruh proteksi keselamatan pasif fisika mandiri tanpa intervensi pompa kelistrikan luar sirkuit.",
    rubric: "Proposal analisis komparatif fisis teknologi keselamatan pasif MSR reaktor nuklir generasi IV, didukung pilar kecerdasan spiritual bersendikan penegakan hukum keseimbangan penciptaan dinamis bebas cacat QS. Al-Mulk: 3.",
    sampleSol: "Telaah rekayasa nuklir keselamatan pasif: Reaktor Garam Cair MSR (Molten Salt Reactor) generasi IV beroperasi memanfaatkan sifat fisis garam fluorida cair bermassa termal tinggi yang mengalir pada tekanan rendah atmosfer, meniadakan resiko meledak hidrogen seketika seperti Chernobyl. Jika aliran listrik sirkuit padam total, katup es pengaman (freeze plug) di dasar bejana reaktor akan meleleh alami akibat gravitasi murni tanpa dorongan pompa kelistrikan luar, meluncurkan seluruh cairan bahan bakar torium cair ke tangki pembuangan darurat bawah tanah yang seketika mendingin beku mati (anti melt-down). Kebersihan rancangan teknologi keselamatan pasif fisika murni ini merefleksikan prinsip kesempurnaan ciptaan tuhan tanpa cacat berrongga (tafawut/futur) pada QS. Al-Mulk: 3. Manusia berakal memanfaatkan ketepatan gaya ikat kuat inti nuklir secara aman lewat penjelajahan hukum material fisis, mendedikasikan energi terkuat semesta ini bagi kedaulatan industri obat dan listrik murni tanpa mencemari mizan bumi."
  }
];
export const diagnosticRubric = {
  title: "Rubrik Penilaian Asesmen Diagnostik",
  rows: [
    { kriteria: "Prasyarat Gaya & Usaha", mahir: "Sanggup merumuskan besaran gaya mekanik F ditarik kemiringan sudut theta secara vektor trigonometri presisi.", cukup: "Hafal persamaan W = F*s tetapi tidak mengerti komponen sudut kemiringan gaya.", berkembang: "Belum memahami kaitan usaha dan gaya fisis." },
    { kriteria: "Worldview Integrasi Al-Qur'an", mahir: "Memahami substansi korelasi ayat kauniyah-qauliyah secara epistemologis bebas cocoklogi pseudosains.", cukup: "Mengetahui terjemahan ayat energi Al-Qur'an secara kasat mata tanpa analisis fisis.", berkembang: "Memandang sains dan agama sebagai dua hal dikotomis musuhan." }
  ]
};

export const formativeRubric = {
  title: "Rubrik Penilaian Asesmen Formatif (Aktivitas LKPD Kelompok)",
  rows: [
    { kriteria: "Perumusan Masalah & Hipotesis", mahir: "Merumuskan rumusan masalah analitis tajam, hipotesis bersandarkan hukum korelasi variabel linier logis.", cukup: "Rumusan masalah ringkas seadanya, hipotesis tebakan murni tanpa landasan hukum fisik.", berkembang: "Tidak merumuskan hipotesis, sekadar mengulang kuesioner pertanyaan modul saja." },
    { kriteria: "Kinerja Virtual Lab", mahir: "Terampil memanipulasi koordinat parameter simulator virtual, mencatat data numerik jujur presisi di tabel.", cukup: "Melakukan simulasi tetapi langkah acak-acakan, draf isian data numerik berlobang.", berkembang: "Pasif sela tim kelompok praktikum, mencontoh salinan data kelompok lain." }
  ]
};

export const sumativeRubric = {
  title: "Rubrik Penilaian Asesmen Sumatif (Karya Proyek Proposal Solusi)",
  rows: [
    { kriteria: "Kelayakan Solusi Fisika", mahir: "Rancangan solusi berbasis formula fisis kokoh, kalkulasi daya netto presisi, feasible diterapkan sekolah.", cukup: "Rancangan solusi standard terkesan umum, hitungan matematis menaruh kekeliruan kecil logis.", berkembang: "Rancangan solusi khayalan pseudosains tanpa landasan hukum fisika terapan." },
    { kriteria: "Integrasi Komitmen Moral Islam", mahir: "Menghubungkan etika hemat daya sirkuit dengan tafsir rukun pelestari khalifah, draf esai refleksi spiritual digarap luar biasa.", cukup: "Menyertakan kutipan ayat qauliyah seadanya tanpa pembahasan implementasi komitmen moral.", berkembang: "Ketiadaan bahasan moral keagamaan di dalam proposal proyek solusi." }
  ]
};
