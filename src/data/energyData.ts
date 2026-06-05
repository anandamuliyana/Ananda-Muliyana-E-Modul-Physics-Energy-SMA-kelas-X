import { EnergyConcept } from "../types";

export const energyConcepts: EnergyConcept[] = [
  {
    id: "energi-kinetik",
    title: "1. Energi Kinetik (Gerak)",
    definition: "Energi kinetik adalah bentuk energi fisis yang dimiliki oleh suatu materi atau benda yang disebabkan oleh keadaan geraknya (kecepatan translasional maupun rotasional) terhadap suatu kerangka acuan tertentu.",
    formula: "E_k = \\frac{1}{2} m v^2",
    derivation: "Penurunan rumus energi kinetik berasal dari Teorema Usaha-Energi (Work-Energy Theorem). Dimulai dari definisi usaha: W = \\int F \\, dx. Menurut Hukum Newton II: F = m \\, a. Kita tahu percepatan a = \\frac{dv}{dt}, sehingga F = m \\frac{dv}{dt}. Mengikut aturan rantai kalkulus: dx = v \\, dt, maka W = \\int m \\frac{dv}{dt} (v \\, dt) = \\int_{v_i}^{v_f} m v \\, dv. Hasil integral mendatangkan: W = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2 = \\Delta E_k. Jika benda bermula dari keadaan diam (v_i = 0), maka energi kinetiknya menjadi: E_k = \\frac{1}{2} m v^2.",
    explanation: "Setiap partikel bermassa m yang melakukan perpindahan posisi linier dengan kelajuan v akan senantiasa mengonsumsi atau membawa energi kinetik. Parameter kecepatan bernilai kuadratik, bermakna pelipatgandaan limit kecepatan akan memperbesar hantaman kinetik sebanyak kuadrat dari faktor kelipatan tersebut. Hal ini mendasari urgensi rem pengaman jalan raya dan bahaya tabrakan laju tinggi.",
    quranVerse: {
      reference: "QS. An-Naml [27]: 88",
      arabic: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ ۚ صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ ۚ إِنَّهُ خَبِيرٌ بِمَا تَفْعَلُونَ",
      latin: "Wa taral-jibāla tahsabuhā jāmidataw wa hiya tamurru marras-sahāb, sun'allāhil-ladhī atqana kulla syay', innahū khabīrum bimā taf'alūn.",
      translation: "Dan kamu lihat gunung-gunung itu, kamu sangka dia tetap di tempatnya, padahal ia berjalan sebagai jalannya awan. (Begitulah) perbuatan Allah yang membuat dengan kokoh tiap-tiap sesuatu; sesungguhnya Allah Maha Mengetahui apa yang kamu kerjakan."
    },
    tafsir: "Imam Al-Qurthubi dan Ibnu Katsir menguraikan ayat ini sebagai gambaran gerakan gunung yang lebur saat Kiamat, atau secara implisit mengisyaratkan gerakan lempeng tektonik bumi yang kokoh tetapi dinamis. Dari sudut pandang geofisika modern, kerak bumi bermassa triliunan ton terus bergerak lambat beberapa sentimeter per tahun. Meskipun tampak diam secara indrawi (inkonsistensi nisbi terhadap bumi), gunung-gunung membawa energi kinetik tektonik yang luar biasa besar dan diatur dalam sistem gesekan elastis yang seimbang demi kelayakan huni planet.",
    scientist: {
      name: "Gaspard-Gustave de Coriolis (1792–1843 M)",
      era: "Abad ke-19, Perancis",
      contribution: "Mengajukan istilah matematis resmi 'energi kinetik' (kinetic energy) dalam karyanya 'Calcul de l'Effet des Machines' dan memantapkan angka koefisien setengah (1/2) di dalam rumus bersama konsep usaha teknik fisis mekanik.",
      quote: "Energi kinetik menggambarkan kapasitas material bergerak untuk menggerakkan mesin-mesin industri kita."
    },
    applications: [
      "Sistem pengereman regeneratif pada mobil listrik (konversi kinetik ke listrik).",
      "Kincir air pembangkit daya mengubah energi kinetik aliran air sungai.",
      "Desain peluru balistik perusak hambatan material."
    ],
    sampleProblem: {
      question: "Sebuah mobil listrik dengan berat massa total 1.500 kg melaju dengan kecepatan konstan 72 km/jam (20 m/s) di jalan tol. Berapakah energi kinetik yang dimiliki mobil tersebut?",
      variables: [
        { name: "m", value: "1500 kg", desc: "Massa mobil listrik" },
        { name: "v", value: "20 m/s", desc: "Kecepatan linier mobil (72 km/jam)" }
      ],
      solutionSteps: [
        "Langkah 1: Tuliskan rumus energi kinetik: Ek = 1/2 * m * v^2",
        "Langkah 2: Substitusikan nilai variabel yang diketahui: Ek = 1/2 * 1500 * (20)^2",
        "Langkah 3: Hitung nilai kuadrat kecepatan: (20)^2 = 400 m^2/s^2",
        "Langkah 4: Kalikan seluruh hasil: Ek = 750 * 400 = 300.000 Joule = 300 kJ."
      ],
      answerValue: 300,
      answerUnit: "kJ"
    },
    reflection: "Gerakan dinamis adalah sunnatullah penciptaan. Gunung yang disangka statis nyatanya dinamis. Ini mengajarkan bahwa kebenaran hakiki memerlukan penyelidikan mendalam melampaui fatamorgana pengamatan mata lahiriah.",
    calculatorParams: [
      { label: "Massa (m)", key: "m", min: 1, max: 5000, step: 1, defaultValue: 1500, unit: "kg" },
      { label: "Kecepatan (v)", key: "v", min: 0, max: 150, step: 0.5, defaultValue: 20, unit: "m/s" }
    ],
    calculateFn: (inputs) => {
      const { m, v } = inputs;
      const res = 0.5 * m * v * v;
      return {
        result: res,
        steps: [
          `Ek = 0.5 * m * v²`,
          `Ek = 0.5 * ${m} * (${v})²`,
          `Ek = 0.5 * ${m} * ${v * v}`,
          `Ek = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-potensial-gravitasi",
    title: "2. Energi Potensial Gravitasi",
    definition: "Energi potensial gravitasi adalah energi yang tersimpan pada suatu material/benda akibat kedudukan posisi relatifnya dalam ruang medan gravitasi bumi atau kosmis.",
    formula: "E_p = m \\cdot g \\cdot h",
    derivation: "Ketika gaya konservatif (gravitasi) melakukan usaha pada benda bermassa m yang diangkat secara vertikal berlawanan arah gravitasi sejauh dy, gaya luar F_ext = m \\cdot g harus melawan gaya tarik gravitasi F_g = -m \\cdot g. Usaha luar yang dilakukan adalah: W = \\int_{y_i}^{y_f} F_{ext} \\, dy = \\int_{h_0}^{h} m g \\, dy = m g (h - h_0). Energi potensial didefinisikan sebagai kemampuan melakukan usaha akibat kedudukan: U(h) - U(h_0) = m g h. Jika titik acuan dasar nol berada pada h_0 = 0, maka rumus menjadi: Ep = m * g * h.",
    explanation: "Energi potensial merepresentasikan energi tersimpan (latent) yang belum dikonversi langsung menjadi gerakan nyata tetapi siap dilepaskan secara spontan begitu gaya hambatan eksternal ditiadakan.",
    quranVerse: {
      reference: "QS. Al-Mu'minun [23]: 18",
      arabic: "وَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً بِقَدَرٍ فَأَسْكَنَّاهُ فِي الْأَرْضِ ۖ وَإِنَّا عَلَىٰ ذَهَابٍ بِهِ لَقَادِرُونَ",
      latin: "Wa anzalnā minas-samā'i mā'am bi qadarin fa askannāhu fil-ardhi wa innā 'alā dhahābim bihī laqādirūn.",
      translation: "Dan Kami turunkan air dari langit menurut suatu ukuran; lalu Kami jadikan air itu menetap di bumi, dan sesungguhnya Kami benar-benar berkuasa melenyapkannya."
    },
    tafsir: "Tafsir Al-Misbah menjabarkan kata 'bi qadarin' sebagai takaran yang tepat secara kuantitas dan proses fisikanya. Air hujan yang diturunkan di puncak gunung menaruh energi potensial gravitasi yang tinggi (Ep = mgh) akibat faktor h (tinggi elevasi). Air ini kemudian dilarikan mengalir mementaskan proses konversi energi fisis yang dahsyat membentuk air terjun, membelah lembah sungai, dan menggerakkan ekosistem alami hutan.",
    scientist: {
      name: "Sir Isaac Newton (1643–1727 M)",
      era: "Abad ke-17, Inggris",
      contribution: "Merumuskan Hukum Gravitasi Universal (F = G * m1*m2/r²) yang menjadi fundamen integratif dalam memahami bagaimana medan gaya gravitasi menyimpan energi potensial objek kosmik.",
      quote: "Saya melihat energi tersembunyi yang mengikat sebutir apel jatuh hingga pergerakan planet di langit agung."
    },
    applications: [
      "Waduk Pembangkit Listrik Tenaga Air (PLTA) menyimpan jutaan kubik air di elevasi tinggi.",
      "Saddle pemicu tiang pancang pondasi berat bangunan sipil.",
      "Kereta wahana Roller Coaster mendaki tanjakan puncak guna mengumpulkan Ep."
    ],
    sampleProblem: {
      question: "Air sebanyak 2.000 kg berada di sebuah waduk bendungan dengan ketinggian elevasi 40 meter di atas turbin generator. Tentukan energi potensial gravitasi air tersebut jika konstanta percepatan gravitasi bumi g = 10 m/s²!",
      variables: [
        { name: "m", value: "2000 kg", desc: "Massa volume air waduk" },
        { name: "g", value: "10 m/s²", desc: "Percepatan gravitasi bumi" },
        { name: "h", value: "40 m", desc: "Ketinggian dari atas turbin" }
      ],
      solutionSteps: [
        "Langkah 1: Tuliskan rumus energi potensial gravitasi: Ep = m * g * h",
        "Langkah 2: Substitusikan variabel fisis: Ep = 2000 * 10 * 40",
        "Langkah 3: Hitung hasil perkalian: Ep = 20000 * 40 = 800.000 Joule = 800 kJ."
      ],
      answerValue: 800,
      answerUnit: "kJ"
    },
    reflection: "Ketinggian suatu posisi menyimpan tanggung jawab besar. Sama seperti air di puncak gunung yang memiliki energi tinggi untuk mengairi lembah, kedudukan tinggi manusia menaruh tanggung jawab sosial yang luhur.",
    calculatorParams: [
      { label: "Massa (m)", key: "m", min: 0.1, max: 10000, step: 1, defaultValue: 2000, unit: "kg" },
      { label: "Gravitasi (g)", key: "g", min: 1, max: 30, step: 0.1, defaultValue: 10, unit: "m/s²" },
      { label: "Ketinggian (h)", key: "h", min: 0, max: 1000, step: 1, defaultValue: 40, unit: "m" }
    ],
    calculateFn: (inputs) => {
      const { m, g, h } = inputs;
      const res = m * g * h;
      return {
        result: res,
        steps: [
          `Ep = m * g * h`,
          `Ep = ${m} * ${g} * ${h}`,
          `Ep = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-potensial-elastis",
    title: "3. Energi Potensial Elastis (Pegas)",
    definition: "Energi potensial elastis adalah energi yang tersimpan dalam material elastik (seperti pegas, busur panah, karet) saat material tersebut dideformasi (diregangkan atau dimampatkan) dari posisi setimbangnya.",
    formula: "E_p = \\frac{1}{2} k x^2",
    derivation: "Menurut Hukum Hooke, gaya pulih pegas bertindak sebanding dengan simpangan deformasi: F = -k \\cdot x. Gaya luar yang diperlukan untuk menekan pegas adalah F_ext = k \\cdot x. Usaha yang dilakukan oleh gaya luar untuk mengubah pegas sepanjang dx adalah: W = \\int_0^x F_{ext} \\, dx = \\int_0^x k \\cdot u \\, du = \\frac{1}{2} k x^2. Usaha ini disimpan seutuhnya dalam bentuk energi potensial pegas: Ep = 1/2 * k * x².",
    explanation: "Sifat elastisitas zat padat timbul akibat kecenderungan ikatan elektrostatik kisi atom materi untuk mempertahankan posisi kesetimbangan inter-atomik stabil.",
    quranVerse: {
      reference: "QS. Al-Anfal [8]: 60",
      arabic: "وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ وَمِنْ رِبَاطِ الْخَيْلِ تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ",
      latin: "Wa a'iddū lahum masta-tha'tum min quwwatiw wa mir ribāthil-khayli turhibūna bihī 'aduwallāhi wa 'aduwakum.",
      translation: "Dan persiapkanlah dengan segala kekuatan untuk menghadapi mereka dengan apa saja yang kamu sanggupi dari kekuatan dan dari pasukan berkuda yang ditambat untuk menggentarkan musuh Allah dan musuhmu..."
    },
    tafsir: "Syaikh Wahbah Az-Zuhaili mengulas 'quwwah' (kekuatan) dalam tafsir Al-Wajiz mencakup semua instrumen pelontar persenjataan pertahanan. Pada aspek sejarah teknik fisis pertahanan Islam abad pertengahan, katapel pengepungan besar (manjanik/trebuchet) dan busur panah militer beroperasi murni dengan memampatkan material elastik organik hingga menyimpan energi potensial elastik masif (Ep = 1/2 kx²) yang seketika berubah menjadi kinetik mematikan.",
    scientist: {
      name: "Robert Hooke (1635–1703 M)",
      era: "Abad ke-17, Inggris",
      contribution: "Mengumumkan Hukum Elastisitas Hooke (F = -kx) pada tahun 1678 yang menghubungkan gaya deformis pegas dengan regangannya, melandasi hitungan energi elastik material.",
      quote: "Sebagaimana ketegangan simpangan bertambah, demikian pula gaya elastik melawan bergejolak."
    },
    applications: [
      "Sistem suspensi pegas absorber shock breaker kendaran roda dua dan empat.",
      "Mekanisme pelatuk pegas pada katup pengaman tekanan uap air.",
      "Busur panah modern penahan karbon dalam perlombaan hulu busur olahraga."
    ],
    sampleProblem: {
      question: "Sebuah pegas mekanis suspensi motor memiliki konstanta elastisitas k = 5.000 N/m. Ketika diberi beban hentakan, pegas memampat sejauh 10 cm (0,1 m). Berapakah energi potensial elastis yang tersimpan di dalam pegas?",
      variables: [
        { name: "k", value: "5000 N/m", desc: "Konstanta kekakuan pegas" },
        { name: "x", value: "0,1 m", desc: "Simpangan pemampatan pegas" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan persamaan energi potensial elastis: Ep = 1/2 * k * x^2",
        "Langkah 2: Substitusikan variabel yang diketahui: Ep = 1/2 * 5000 * (0.1)^2",
        "Langkah 3: Hitung nilai kuadrat simpangan: (0.1)^2 = 0.01",
        "Langkah 4: Kalikan seluruh koefisien: Ep = 2500 * 0.01 = 25 Joule."
      ],
      answerValue: 25,
      answerUnit: "J"
    },
    reflection: "Peregangan melatih kekuatan. Material elastis yang ditekan hebat justru menyimpan potensi energi yang besar untuk meloncat ke depan. Begitupun cobaan hidup yang menuntut kesabaran, melatih daya lentur mental (resiliensi) untuk melentingkan kesuksesan.",
    calculatorParams: [
      { label: "Konstanta Pegas (k)", key: "k", min: 10, max: 20000, step: 10, defaultValue: 5000, unit: "N/m" },
      { label: "Simpangan (x)", key: "x", min: 0.01, max: 2, step: 0.01, defaultValue: 0.1, unit: "m" }
    ],
    calculateFn: (inputs) => {
      const { k, x } = inputs;
      const res = 0.5 * k * x * x;
      return {
        result: res,
        steps: [
          `Ep = 0.5 * k * x²`,
          `Ep = 0.5 * ${k} * (${x})²`,
          `Ep = 0.5 * ${k} * ${x * x}`,
          `Ep = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-mekanik",
    title: "4. Energi Mekanik & Hukum Kekekalannya",
    definition: "Energi mekanik merupakan jumlah total akumulasi dari energi kinetik translasi/rotasi dan energi potensial sistem pada suatu kondisi tertentu.",
    formula: "E_m = E_k + E_p",
    derivation: "Dalam medan gaya konservatif (di mana gaya gesek diabaikan), usaha total yang dilakukan oleh gaya internal konservatif adalah W = -\\Delta Ep. Sesuai Teorema Usaha-Energi, usaha total ini juga sama dengan perubahan energi kinetik: W = \\Delta Ek. Oleh karena itu: \\Delta Ek = -\\Delta Ep, yang berarti Ek_akhir - Ek_awal = -(Ep_akhir - Ep_awal). Dengan menata kembali suku-suku persamaan: Ek_awal + Ep_awal = Ek_akhir + Ep_akhir. Kuantitas ini didefinisikan sebagai Energi Mekanik konstan: Em = Ek + Ep.",
    explanation: "Hukum Kekekalan Energi Mekanik menyatakan bahwa dalam koordinat tertutup tanpa pengaruh gaya gesekan non-konservatif luar, jumlah energi mekanik melintasi lintasan manapun selalu bernilai konstan sepanjang waktu.",
    quranVerse: {
      reference: "QS. Al-Mulk [67]: 3",
      arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِنْ تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِنْ فُطُورٍ",
      latin: "Alladhī khalaqa sab'a samāwātin thibāqā, mā tarā fī khalqir-rahmāni min tafāwut, farji'il-basara hal tarā min futhūr.",
      translation: "Yang telah menciptakan tujuh langit berlapis-lapis. Kamu sekali-kali tidak melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang (tafawut). Maka lihatlah berulang-ulang, adakah kamu lihat sesuatu yang cacat?"
    },
    tafsir: "Syaikh Prof. KH. Didin Hafidhuddin menguatkan bahwa kata 'tafawut' bermakna ketidakseimbangan fisis atau asimetri. Alam kosmos dikonstruksi Allah dengan derajat simetri dan harmonisasi mutlak. Di dalam fisika teoretis modern, Teorema Noether mengonfirmasi bahwa simetri translasi waktu secara matematis melahirkan properti Hukum Kekekalan Energi universal. Ketidakadaan 'futhur' (ketidakstabilan/cacat) mengonfirmasi keteraturan makro dan mikro partikel yang melestarikan totalitas energi alam.",
    scientist: {
      name: "Emmy Noether (1882–1935 M)",
      era: "Abad ke-20, Jerman",
      contribution: "Membuktikan teoremanya yang legendaris bahwa setiap simetri kontinu fisis berelasi langsung dengan hukum kekekalan kuantitatif fisis spesifik. Simetri translasi waktu melahirkan kekekalan energi.",
      quote: "Kekekalan energi tidak lain adalah ekspresi matematis dari keteguhan hukum fisik terhadap perputaran waktu."
    },
    applications: [
      "Operasional turbin air mengubah energi potensial gravitasi waduk menjadi kinetik putar turbin.",
      "Tembakan sistem pelontar katapel silinder mekanis.",
      "Lompat tinggi senam galah menyimpan energi elastis pelompat."
    ],
    sampleProblem: {
      question: "Sebuah buah mangga bermassa 2 kg bergantung tenang pada dahan pohon dengan ketinggian h_1 = 10 m di atas tanah. Buah mangga jatuh bebas tanpa gesekan udara. Tentukan kecepatan buah mangga saat berada di ketinggian h_2 = 2 m di atas tanah! (g = 10 m/s²)",
      variables: [
        { name: "m", value: "2 kg", desc: "Massa mangga" },
        { name: "h1", value: "10 m", desc: "Ketinggian awal diam (v1=0)" },
        { name: "h2", value: "2 m", desc: "Ketinggian saat bergerak (v2)" }
      ],
      solutionSteps: [
        "Langkah 1: Karena sistem jatuh bebas ideal, gunakan Hukum Kekekalan Energi Mekanik: Em1 = Em2",
        "Langkah 2: Terapkan rumus lengkap: Ep1 + Ek1 = Ep2 + Ek2",
        "Langkah 3: Karena mula-mula diam, Ek1 = 0. Persamaan menjadi: m * g * h1 = m * g * h2 + 1/2 * m * v2^2",
        "Langkah 4: Bagi seluruh suku dengan massa m: g * h1 = g * h2 + 1/2 * v2^2",
        "Langkah 5: Masukkan nilai numerik: 10 * 10 = 10 * 2 + 1/2 * v2^2 => 100 = 20 + 1/2 * v2^2",
        "Langkah 6: Kurangi suku konstan: 80 = 1/2 * v2^2 => v2^2 = 160",
        "Langkah 7: Hitung akar kuadrat: v2 = sqrt(160) ≈ 12,65 m/s."
      ],
      answerValue: 12.65,
      answerUnit: "m/s"
    },
    reflection: "Keseimbangan tanpa cacat (mizan) adalah hukum kosmos. Energi kinetik naik mengorbankan energi potensial, begitu juga sebaliknya, namun jumlahnya tetap konstan. Kehidupan harus menjaga keadilan porsi materi-spiritual secara konstan.",
    calculatorParams: [
      { label: "Massa Benda (m)", key: "m", min: 0.1, max: 100, step: 0.1, defaultValue: 2, unit: "kg" },
      { label: "Tinggi Awal (h1)", key: "h1", min: 1, max: 500, step: 1, defaultValue: 10, unit: "m" },
      { label: "Tinggi Akhir (h2)", key: "h2", min: 0, max: 500, step: 1, defaultValue: 2, unit: "m" }
    ],
    calculateFn: (inputs) => {
      const { m, h1, h2 } = inputs;
      const g = 10;
      const ep1 = m * g * h1;
      const ep2 = m * g * h2;
      const ek1 = 0;
      const ek2 = ep1 - ep2;
      const v2_sq = (2 * ek2) / m;
      const v2 = v2_sq > 0 ? Math.sqrt(v2_sq) : 0;
      return {
        result: v2,
        steps: [
          `Em1 = Em2 => Ep1 + Ek1 = Ep2 + Ek2`,
          `Ep1 = m * g * h1 = ${m} * 10 * ${h1} = ${ep1} J`,
          `Ep2 = m * g * h2 = ${m} * 10 * ${h2} = ${ep2} J`,
          `Ek2 = Ep1 - Ep2 = ${ep1} - ${ep2} = ${ek2} J`,
          `v2 = √(2 * Ek2 / m) = √(2 * ${ek2} / ${m}) = √(${v2_sq})`,
          `v2 ≈ ${v2.toFixed(2)} m/s`
        ]
      };
    }
  },
  {
    id: "energi-kalor",
    title: "5. Energi Kalor (Panas)",
    definition: "Energi kalor adalah energi kinetik mikroskopis rata-rata akibat aktivitas getar acak partikel-partikel atomik atau molekuler penyusun zat yang berpindah karena gradien perbedaan suhu.",
    formula: "Q = m \\cdot c \\cdot \\Delta T",
    derivation: "Berdasarkan prinsip kalor jenis mekanis klasik (dilandaskan dalam perumusan Asas Black): Q = m \\cdot c \\cdot (T_f - T_i). Ketika kalor jenis c merupakan ukuran kapasitas kalor spesifik serapan suatu zat, dan perpindahan kalor netto terjadi hingga tercapainya temperatur setimbang fisis homogen (termodinamika nol).",
    explanation: "Kalor berpindah secara konduksi (lewat tumbukan elektron kisi padat), konveksi (lewat pusaran arus fluida renggang), dan radiasi (lewat gelombang elektromagnetik gelombang inframerah tanpa zat perantara).",
    quranVerse: {
      reference: "QS. Yasin [36]: 80",
      arabic: "الَّذِي جَعَلَ لَكُمْ مِنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنْتُمْ مِنْهُ تُوقِدُونَ",
      latin: "Alladhī ja'ala lakum minasy-syajaril-akhdhari nāran fa idhā antum minhu tūqidūn.",
      translation: "Yaitu (Tuhan) yang menjadikan untukmu api dari kayu yang hijau, maka tiba-tiba kamu menyalakan (api) dari kayu itu."
    },
    tafsir: "Syaikh Thanthawi Jauhari dalam Tafsir Al-Jawahir menggarisbawahi bahwa 'kayu hijau' menyimpan kandungan klorofil penghasil glukosa padat penyimpan energi kimia fotosintesis. Pembakaran arang kayu mengubah energi potensial kimia molekul selulosa menjadi energi kalor (panas) bergradien suhu tinggi. Ini menguraikan rantai fisis konversi energi biomassa tertua yang melepaskan kalor dalam bentuk transfer radiasi elektromagnetik inframerah.",
    scientist: {
      name: "James Prescott Joule (1818–1889 M)",
      era: "Abad ke-19, Inggris",
      contribution: "Menguji eksperimen ekivalensi mekanis kalor, menunjukkan bahwa usaha mekanis dapat diubah menjadi kalor jenis fluida secara kuantitatif konstan (1 kalori ≈ 4,184 Joule).",
      quote: "Dunia beroperasi dalam rantai tak tegap: energi kerja diubah menjadi energi panas dan tak dapat binasa."
    },
    applications: [
      "Penukar kalor (Heat Exchanger) pada pabrik petrokimia cair.",
      "Isolator termis jaket serat bulu domba tebal.",
      "Alat pengukur kalor jenis air (Kalorimeter) tembaga."
    ],
    sampleProblem: {
      question: "Air bermassa m = 500 gram (0,5 kg) dipanaskan dari suhu awal T_1 = 25 °C hingga mendidih T_2 = 75 °C. Jika kalor jenis air c = 4.200 J/kg°C, hitunglah jumlah energi kalor yang diserap oleh air tersebut!",
      variables: [
        { name: "m", value: "0,5 kg", desc: "Massa cairan air padat" },
        { name: "c", value: "4200 J/kg°C", desc: "Kalor jenis air spesifik" },
        { name: "dT", value: "50 °C", desc: "Kenaikan suhu (75 - 25)" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan persamaan transfer kalor: Q = m * c * dT",
        "Langkah 2: Tentukan delta suhu (dT): dT = 75 - 25 = 50 °C",
        "Langkah 3: Substitusikan ke rumus fisis: Q = 0.5 * 4200 * 50",
        "Langkah 4: Hitung perkalian: Q = 2100 * 50 = 105.000 Joule = 105 kJ."
      ],
      answerValue: 105,
      answerUnit: "kJ"
    },
    reflection: "Kayu hijau yang basah dingin melahirkan api merah yang menyala-nyala. Ini mengisyaratkan bahwa di balik kelemahan rupa lahiriah tersimpan potensi kekuatan luar biasa yang dapat dinyalakan oleh dorongan motivasi tulus.",
    calculatorParams: [
      { label: "Massa Air (m)", key: "m", min: 0.1, max: 100, step: 0.1, defaultValue: 0.5, unit: "kg" },
      { label: "Kalor Jenis (c)", key: "c", min: 100, max: 5000, step: 10, defaultValue: 4200, unit: "J/kg°C" },
      { label: "Kenaikan Suhu (dT)", key: "dT", min: 1, max: 100, step: 1, defaultValue: 50, unit: "°C" }
    ],
    calculateFn: (inputs) => {
      const { m, c, dT } = inputs;
      const res = m * c * dT;
      return {
        result: res,
        steps: [
          `Q = m * c * dT`,
          `Q = ${m} * ${c} * ${dT}`,
          `Q = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-listrik",
    title: "6. Energi Listrik",
    definition: "Energi listrik adalah bentuk energi yang ditimbulkan akibat adanya pergerakan elektron-elektron muatan bebas melintasi penghantar karena adanya perbedaan tegangan (beda potensial listrik).",
    formula: "W = V \\cdot I \\cdot t",
    derivation: "Usaha fisis untuk memindahkan muatan dQ sejauh beda potensial V didefinisikan sebagai: dW = V \\, dQ. Hubungan arus listrik dengan laju muatan adalah: I = \\frac{dQ}{dt} \\Rightarrow dQ = I \\, dt. Dengan demikian: dW = V \\, I \\, dt. Jika tegangan dan arus konstan sepanjang interval waktu t, integral mengalirkan hasil: W = V \\cdot I \\cdot t. Melalui Hukum Ohm V = I \\cdot R, korelasi dapat ditulis ulang: W = I^2 \\cdot R \\cdot t atau W = \\frac{V^2}{R} \\cdot t.",
    explanation: "Faktor tegangan mengukur seberapa besar tolakan atau dorongan beda energi potensial sirkuit, sedangkan arus menandakan intensitas laju perpindahan muatan riil per unit detik.",
    quranVerse: {
      reference: "QS. Ar-Ra'd [13]: 13",
      arabic: "وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ وَيُرْسِلُ الصَّوَاعِقَ فَيُصِيبُ بِهَا مَنْ يَشَاءُ",
      latin: "Wa yusabbihur-ra'du bi hamdihī wal-malā'ikatu min khīfatihī wa yursilus-shawā'iqa fa yushību bihā may ya-syā'...",
      translation: "Dan guruh itu bertasbih dengan memuji-Nya, (demikian pula) para malaikat karena takut kepada-Nya, dan Allah melepaskan halilintar (shawa'iq), lalu menimpakannya kepada siapa yang Dia kehendaki..."
    },
    tafsir: "Imam Al-Qurthubi menguraikan 'shawa'iq' sebagai kobaran api petir dahsyat yang menyambar dari langit. Secara fisika modern, petir adalah fenomena transien aliran arus muatan elektron bebas dalam orde puluhan ribu Ampere dengan beda tegangan antara gumpal awan berrongga air dan bumi melampaui ratusan juta Volt. Hal ini membuktikan isyarat agung kelistrikan elektrostatik alamiah di alam.",
    scientist: {
      name: "Michael Faraday (1791–1867 M)",
      era: "Abad ke-19, Inggris",
      contribution: "Menemukan hukum induksi elektromagnetik yang membuka jalan bagi rekayasa generator listrik dinamo pengubah gerakan fluida menjadi daya sirkuit listrik komersial.",
      quote: "Perubahan medan magnetik yang menembus kumparan kawat melahirkan dorongan elektron tak tampak yang menggerakkan kota dunia."
    },
    applications: [
      "Motor listrik industri bertorsi kuat.",
      "Sel elektrokimia baterai penyimpan daya lithium handphone.",
      "Kabel kawat tembaga transmisi tegangan tinggi jarak jauh."
    ],
    sampleProblem: {
      question: "Sebuah kipas angin pendingin dicolokkan ke stopkontak bertegangan AC AC = 220 Volt dan mengaliri arus sebesar 0,5 Ampere selama 2 jam (7.200 sekon). Berapakah jumlah energi listrik yang dikonsumsi kipas angin tersebut?",
      variables: [
        { name: "V", value: "220 V", desc: "Beda tegangan stopkontak" },
        { name: "I", value: "0,5 A", desc: "Kuat arus kipas" },
        { name: "t", value: "7200 s", desc: "Durasi pemakaian (2 jam)" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan rumus energi listrik dasar: W = V * I * t",
        "Langkah 2: Konversi satuan jam ke sekon: 2 jam = 2 * 3600 = 7.200 s",
        "Langkah 3: Substitusikan variabel yang diketahui: W = 220 * 0.5 * 7200",
        "Langkah 4: Kalikan hasil: W = 110 * 7200 = 792.000 Joule = 792 kJ = 0,22 kWh."
      ],
      answerValue: 792,
      answerUnit: "kJ"
    },
    reflection: "Elektron yang mengalir secara tenang membakar filamen lampu hingga bersinar terang. Kehidupan manusia kian bermakna jika mau mengalirkan pengaruh kearifan yang mencerahkan lingkungan sekitarnya.",
    calculatorParams: [
      { label: "Tegangan (V)", key: "V", min: 1, max: 400, step: 1, defaultValue: 220, unit: "Volt" },
      { label: "Kuat Arus (I)", key: "I", min: 0.1, max: 100, step: 0.1, defaultValue: 0.5, unit: "Ampere" },
      { label: "Waktu (t)", key: "t", min: 1, max: 86400, step: 10, defaultValue: 7200, unit: "sekon" }
    ],
    calculateFn: (inputs) => {
      const { V, I, t } = inputs;
      const res = V * I * t;
      return {
        result: res,
        steps: [
          `W = V * I * t`,
          `W = ${V} * ${I} * ${t}`,
          `W = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-kimia",
    title: "7. Energi Kimia",
    definition: "Energi kimia adalah bentuk energi potensial elektrostatik yang tersimpan di dalam susunan ikatan kovalen, ionik, atau logam antar gugus atom dan molekul zat, yang dibebaskan atau diserap melalui reaksi kimia (eksotermal/endotermal).",
    formula: "E_{chem} = N \\cdot \\Delta H_c",
    derivation: "Berdasarkan prinsip kalorimetri reaksi kimia (hukum Hess), entalpi pembakaran menyatakan selisih energi pemutusan ikatan reaktan dan pembentukan ikatan produk: \\Delta H = \\sum E_{putus} - \\sum E_{bentuk}. Energi kimia yang dibebaskan sebanding jumlah mol senyawa N dan entalpi molar \\Delta H_c.",
    explanation: "Energi kimia merupakan basis metabolisme biokimia makhluk hidup (ATP) serta penyimpanan bahan bakar utama seperti batu bara, biomassa kayu, gas alam, dan sel baterai listrik.",
    quranVerse: {
      reference: "QS. 'Abasa [80]: 24",
      arabic: "فَلْيَنْظُرِ الْإِنْسَانُ إِلَىٰ طَعَامِهِ",
      latin: "Falyanzhuril-insānu ilā tha'āmihī.",
      translation: "Maka hendaklah manusia itu memperhatikan makanannya."
    },
    tafsir: "Syaikh Muhammad Abduh menerangkan ayat ini melatih manusia bersyukur atas rantaian rantai panjang klorofil, air, dan cahaya matahari yang mengonstruksi komponen tanaman pangan. Dari perspektif sains fisis terapan, makanan yang kita kunyah menaruh energi kimia tinggi (seperti kandungan pati karbohidrat). Lambung kita bertindak sebagai reaktor kimia mengoksidasi ikatan karbon makanan menjadi energi metabolisme sel adenosin trifosfat (ATP) pendorong kerja otot.",
    scientist: {
      name: "Antoine Lavoisier (1743–1794 M)",
      era: "Abad ke-18, Perancis",
      contribution: "Menetapkan Hukum Kekekalan Massa dalam reaksi kimia, dan membuktikan bahwa respirasi makhluk hidup bermassa paru-paru merupakan reaksi pembakaran kimiawi lambat yang membebaskan energi panas.",
      quote: "Massa tak pernah hilang; ia berpindah bentuk dalam interaksi materi pembentuk energi kimia."
    },
    applications: [
      "Pembakaran karbon pada ruang piston silinder motor bakar bensin.",
      "Respirasi seluler mengubah glukosa menjadi tenaga gerak fisik.",
      "Baterai isi ulang Li-Ion memicu reaksi kimia elektrokimia."
    ],
    sampleProblem: {
      question: "Satu mol bahan bakar gas propana (C₃H₈) terbakar sempurna dalam ruang pembakaran membebaskan energi kalor entalpi dHc = 2.220 kJ. Jika kita membakar 44 gram propana (setara 1 mol), berapakah energi kimia yang berhasil dikonversi menjadi energi panas dalam Joule?",
      variables: [
        { name: "n", value: "1 mol", desc: "Jumlah zat propana sengaja dibakar" },
        { name: "dHc", value: "2220 kJ/mol", desc: "Entalpi pembakaran propana spesifik" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan korelasi entalpi: Q = n * dHc",
        "Langkah 2: Substitusikan variabel numerik: Q = 1 * 2220 = 2.220 kJ",
        "Langkah 3: Konversikan kJ ke Joule: 2220 * 1000 = 2.220.000 Joule = 2,22 MegaJoule."
      ],
      answerValue: 2.22,
      answerUnit: "MJ"
    },
    reflection: "Makanan yang tidak dimanfaatkan untuk amal saleh mencederai amanah energi. Setiap kalori kimia yang masuk ke dalam tubuh harus dikonversikan menjadi kontribusi bermanfaat demi kemaslahatan masyarakat.",
    calculatorParams: [
      { label: "Jumlah Mol (N)", key: "N", min: 0.1, max: 100, step: 0.1, defaultValue: 1, unit: "mol" },
      { label: "Entalpi Reaksi (dH)", key: "dH", min: 1, max: 10000, step: 10, defaultValue: 2220, unit: "kJ/mol" }
    ],
    calculateFn: (inputs) => {
      const { N, dH } = inputs;
      const res = N * dH;
      return {
        result: res,
        steps: [
          `E_chem = N * dH`,
          `E_chem = ${N} * ${dH}`,
          `E_chem = ${res} kJ`
        ]
      };
    }
  },
  {
    id: "energi-bunyi",
    title: "8. Energi Bunyi (Akustik)",
    definition: "Energi bunyi adalah energi mekanik transisional yang berpindah dalam bentuk gelombang tekanan longitudinal (rapatan dan renggangan) akibat perambatan getaran partikel melintasi medium elastis (padat, cair, gas).",
    formula: "E_{acoustic} = \\frac{1}{2} \\rho A^2 \\omega^2 V",
    derivation: "Gelombang akustik mengalirkan getaran mekanis harmonik. Massa mikro partikel dalam volume V adalah dm = \\rho \\, dV. Energi mekanik total vibrasi harmonik sederhana partikel dE = 1/2 \\, dm \\, A^2 \\, \\omega^2, di mana A adalah amplitudo simpangan gelombang bunyi dan \\omega = 2\\pi f adalah frekuensi pulsasi getaran bunyi. Hasil integrasi mendatangkan: E = 1/2 * \\rho * A^2 * \\omega^2 * V.",
    explanation: "Intensitas bunyi mengalirkan energi per unit luas per sekon (I = P/Area). Tingkat intensitas pendengaran telinga manusia diukur secara logaritmis menggunakan skala Desibel (L = 10 * log10(I/Io)) karena sensitivitas membran gendang telinga yang membentang lebar melampaui 12 orde tingkat nilai.",
    quranVerse: {
      reference: "QS. Al-Anbiya [21]: 79",
      arabic: "فَفَهَّمْنَاهَا سُلَيْمَانَ ۚ وَكُلًّا آتَيْنَا حُكْمًا وَعِلْمًا ۚ وَسَخَّرْنَا مَعَ دَاوُودَ الْجِبَالَ يُسَبِّحْنَ وَالطَّيْرَ ۚ وَكُنَّا فَاعِلِينَ",
      latin: "Fafahhamnāhā sulaymāna, wa kullanātaynā hukmaw wa 'ilmā, wa sakhkharnā ma'a dāwūdal-jibāla yusabbihna wat-tayr, wa kunnā fā'ilīn.",
      translation: "Maka Kami telah memberikan pengertian kepada Sulaiman tentang hukum (yang lebih tepat); dan kepada masing-masing mereka Kami berikan hikmah dan ilmu dan Kami tundukkan gunung-gunung dan burung-burung, semua bertasbih bersama Dawud. Dan Kamilah yang melakukannya."
    },
    tafsir: "Ulama ahli tafsir menerangkan mukjizat suara merdu Nabi Dawud as mampu menggetarkan lingkungan fisik material di sekitarnya. Struktur kokoh formasi batu gunung bertasbih bergetar harmonis mencerminkan fenomena fisis 'resonansi akustik'. Getaran suara Nabi Dawud yang merambat di udara memiliki frekuensi harmonis alami yang sefasa dengan frekuensi kisi batu gunung, memicu transfer energi akustik maksimum hingga menggetarkan partikel batuan besar.",
    scientist: {
      name: "Hermann von Helmholtz (1821–1894 M)",
      era: "Abad ke-19, Jerman",
      contribution: "Mengubah bidang teori harmonik bunyi dan resonansi lewat penyusunan instrumen 'Resonator Helmholtz' guna memisahkan komponen suara kompleks.",
      quote: "Bunyi adalah fenomena fisis getaran yang dengannya manusia dapat mengurai tatanan musik alam raya."
    },
    applications: [
      "Sensor ultrasonik navigasi kapal selam laut dalam (SONAR).",
      "Pencitraan USG medis menggunakan gelombang bunyi ultra frekuensi tinggi.",
      "Rancangan peredam gema akustik gedung konser modern."
    ],
    sampleProblem: {
      question: "Sebuah sirine pabrik menyebarkan gelombang bunyi dengan daya akustik 12,56 Watt ke segala penjuru. Berapakah intensitas bunyi sirine pada jarak radius R = 10 meter dari sumber sirine? (Gunakan rumus luas bola Area = 4 * PI * R²)",
      variables: [
        { name: "P", value: "12,56 W", desc: "Daya mekanik sumber bunyi" },
        { name: "R", value: "10 m", desc: "Radius jarak dari sumber" }
      ],
      solutionSteps: [
        "Langkah 1: Tuliskan persamaan luas rambat bola suara: Area = 4 * PI * R^2",
        "Langkah 2: Hitung luas area: Area ≈ 4 * 3.14 * (10)^2 = 1256 m^2",
        "Langkah 3: Gunakan rumus intensitas dasar: I = P / Area",
        "Langkah 4: Hitung hasil pembagian: I = 12.56 / 1256 = 0.01 Watt/m^2 = 10^-2 W/m^2 (setara skala kebisingan 100 Desibel)."
      ],
      answerValue: 0.01,
      answerUnit: "W/m²"
    },
    reflection: "Resonansi menggetarkan sekitar. Tasbih Dawud didengar batu gunung karena ia menggetarkan ketulusan spiritual dari dalam hati. Suara bermakna lahir dari keheningan niat yang murni.",
    calculatorParams: [
      { label: "Amplitudo (A)", key: "A", min: 0.0001, max: 0.5, step: 0.001, defaultValue: 0.01, unit: "m" },
      { label: "Massa Jenis (ρ)", key: "rho", min: 0.1, max: 2000, step: 0.1, defaultValue: 1.2, unit: "kg/m³" },
      { label: "Frekuensi (f)", key: "f", min: 20, max: 20000, step: 10, defaultValue: 440, unit: "Hz" },
      { label: "Volume (V)", key: "V", min: 0.1, max: 100, step: 0.1, defaultValue: 1, unit: "m³" }
    ],
    calculateFn: (inputs) => {
      const { A, rho, f, V } = inputs;
      const omega = 2 * Math.PI * f;
      const res = 0.5 * rho * A * A * omega * omega * V;
      return {
        result: res,
        steps: [
          `omega = 2 * pi * f = 2 * 3.14 * ${f} = ${omega.toFixed(1)} rad/s`,
          `E = 0.5 * rho * A² * omega² * V`,
          `E = 0.5 * ${rho} * (${A})² * (${omega.toFixed(1)})² * ${V}`,
          `E = ${res} Joule`
        ]
      };
    }
  },
  {
    id: "energi-cahaya",
    title: "9. Energi Cahaya (Elektromagnetik)",
    definition: "Energi cahaya adalah energi radiasi berbentuk gelombang transversal medan listrik dan medan magnetik (elektromagnetik) yang dipancarkan secara paket diskrit kuantum partikel (foton) tanpa membutuhkan zat perantara perambat.",
    formula: "E = h \\cdot f = h \\cdot \\frac{c}{\\lambda}",
    derivation: "Hipotesis Kuantum Max Planck membuktikan energi gelombang teradiasi tidak kontinu, melainkan berpaket bungkusan diskrit: E = h \\cdot f. Dengan c merupakan konstanta kelajuan cahaya di ruang hampa (3 * 10^8 m/s), f merupakan frekuensi gelombang EM, dan h merupakan konstanta fundamental Planck (6,626 * 10^-34 J.s).",
    explanation: "Cahaya menaruh dualisme sifat fisis gelombang-partikel yang revolusioner dalam fisika modern, bertindak sebagai pemicu reaksi efek fotolistrik generator sel surya.",
    quranVerse: {
      reference: "QS. An-Nuur [24]: 35",
      arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
      latin: "Allāhu nūrus-samāwāti wal-ardh, mathalu nūrihī ka misykātin fīhā mishbāh...",
      translation: "Allah (pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya-Nya, seperti sebuah lubang yang tidak tembus, yang di dalamnya ada pelita besar..."
    },
    tafsir: "Ibnu Abbas menafsirkan 'nur' di sini bermakna pembimbing kegelapan ketiadaan kosmos menjadi ketatanan materi hidup yang teratur. Cahaya matahari membawa spektrum energi elektromagnetik melimpah yang mutlak diperlukan bagi fotosintesis klorofil bumi. Persamaan fisis Einstein E = mc² menyelaraskan bahwa massa fisis bumi diikat oleh kesetaraan energi cahaya purba kosmos ciptaan Allah.",
    scientist: {
      name: "Albert Einstein (1879–1955 M)",
      era: "Abad ke-20, Jerman/USA",
      contribution: "Mengulas efek fotolistrik pada tahun 1905 dengan merumuskan cahaya bertindak sebagai berkas partikel foton pembawa energi h.f, memenangkan penghargaan Nobel Fisika.",
      quote: "Sinar cahaya bukan sekadar gelombang kontinu, melainkan rantaian paket kuanta fungsional penembus atom."
    },
    applications: [
      "Pembangkit Listrik Tenaga Surya (PLTS) sel fotovoltaik silikon.",
      "Transmisi sinyal data super cepat kabel serat optik modern.",
      "Pengelasan presisi industri menggunakan kawat laser monokromis."
    ],
    sampleProblem: {
      question: "Sebuah kawat laser memancarkan gelombang cahaya hijau monokromatis dengan nilai frekuensi f = 5 * 10^14 Hertz. Hitung ekivalensi energi elektromagnetik yang dimiliki oleh tiap satu butir foton cahaya laser tersebut! (Konstanta h = 6,63 * 10^-34 Joule.sekon)",
      variables: [
        { name: "h", value: "6,63 * 10^-34 J.s", desc: "Konstanta universal Planck" },
        { name: "f", value: "5 * 10^14 Hz", desc: "Frekuensi getaran gelombang laser" }
      ],
      solutionSteps: [
        "Langkah 1: Tuliskan persamaan kuantum Planck: E = h * f",
        "Langkah 2: Substitusikan konstanta numerik: E = (6.63 * 10^-34) * (5 * 10^14)",
        "Langkah 3: Kalikan koefisien desimal: 6.63 * 5 = 33.15",
        "Langkah 4: Kalikan eksponen pangkat sepuluh: 10^-34 * 10^14 = 10^-20",
        "Langkah 5: Tuliskan hasil akhir ilmiah: E = 3,315 * 10^-19 Joule."
      ],
      answerValue: 3.315e-19,
      answerUnit: "J"
    },
    reflection: "Cahaya adalah perusak kegelapan. Sedikit radiasi cahaya mampu menembus pekatnya gua yang gelap gulita. Begitu pula ilmu sains yang berintegritas Al-Qur'an, melenyapkan kabut kebodohan peradaban.",
    calculatorParams: [
      { label: "Frekuensi (f) (*10^14)", key: "f_scale", min: 1, max: 100, step: 0.1, defaultValue: 5, unit: "Hz" }
    ],
    calculateFn: (inputs) => {
      const { f_scale } = inputs;
      const h = 6.626e-34;
      const f = f_scale * 1e14;
      const res = h * f;
      return {
        result: res,
        steps: [
          `E = h * f`,
          `E = (${h} J.s) * (${f} Hz)`,
          `E = ${res} Joules`
        ]
      };
    }
  },
  {
    id: "energi-nuklir",
    title: "10. Energi Nuklir (Inti)",
    definition: "Energi nuklir adalah bentuk energi potensial sangat besar yang tersimpan di dalam struktur ikat gaya kuat inti atom yang merekat proton dan neutron, dibebaskan melalui reaksi pembelahan (fisi) atau penggabungan (fusi) inti atom.",
    formula: "E = \\Delta m \\cdot c^2",
    derivation: "Teori Relativitas Khusus Einstein menyatakan adanya kesetaraan mutlak antara defek perubahan massa materi (\\Delta m) dengan pelepasan kuantitas energi sirkular: E = \\Delta m \\cdot c^2. Dengan c merupakan kecepatan cahaya konstan kuadrat (9 * 10^16 m²/s²), membuktikan hilangnya massa kecil melepaskan energi raksasa.",
    explanation: "Reaksi fusi menggabungkan inti hidrogen ringan menjadi helium pada inti matahari, memasok seluruh sebaran energi sistem tata surya bumi sepanjang milyaran tahun.",
    quranVerse: {
      reference: "QS. Al-Hadid [57]: 25",
      arabic: "وَأَنْزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
      latin: "Wa anzalnal-hadīda fīhi ba'sun syadīduw wa manāfi'u lin-nās...",
      translation: "Dan Kami turunkan besi yang padanya ada kekuatan yang hebat (ba's) dan berbagai manfaat bagi manusia..."
    },
    tafsir: "Syaikh Mutawalli Al-Sya'rawi menguraikan kata 'anzalna' diturunkan dari angkasa luar. Riset astrofisika nuklir kontemporer menegaskan logam besi (Fe-56) memiliki nilai 'nuclear binding energy per nucleon' (energi ikat inti per nukleon) tertinggi dan paling stabil di seluruh alam semesta. Pembentukan besi tidak terjadi di kerak bumi, melainkan melalui reaksi sintesis fusi nuklir bintang raksasa dalam kompresi gravitasi ekstrim sebelum melesat meledak mementaskan hujan meteorid kosmik bumi.",
    scientist: {
      name: "Enrico Fermi (1901–1954 M)",
      era: "Abad ke-20, Italia/USA",
      contribution: "Merancang reaktor reaksi fisi nuklir berantai buatan pertama di dunia Chicago Pile-1 pada tahun 1942 yang melahirkan era pembelahan atom komersial.",
      quote: "Inti atom adalah tabung rapat yang menyimpan energi dahsyat alam yang baru saja kita buka kuncinya."
    },
    applications: [
      "Pembangkit Listrik Tenaga Nuklir (PLTN) turbin reaktor fisi uranium.",
      "Sistem propulsi kapal selam militer berdaya jelajah samudera otonom.",
      "Pengobatan terapi kedokteran kanker menggunakan isotop radioaktif kobalt."
    ],
    sampleProblem: {
      question: "Sebuah reaksi pembelahan fisi uranium di dalam reaktor PLTN mengalami penyusutan massa bahan (defek massa) sebesar 1 miligram (10^-6 kg). Berapakah jumlah energi nuklir yang dibebaskan dalam bentuk kalor dalam Joule? (c = 3 * 10^8 m/s)",
      variables: [
        { name: "dm", value: "10^-6 kg", desc: "Defek perubahan massa rektan" },
        { name: "c", value: "3 * 10^8 m/s", desc: "Kecepatan rambat cahaya kosmis" }
      ],
      solutionSteps: [
        "Langkah 1: Terapkan persamaan Einstein: E = dm * c^2",
        "Langkah 2: Substitusikan konstanta numerik: E = (10^-6) * (3 * 10^8)^2",
        "Langkah 3: Hitung kuadrat kelajuan cahaya: (3 * 10^8)^2 = 9 * 10^16 m^2/s^2",
        "Langkah 4: Kalikan defek massa: E = 10^-6 * 9 * 10^16 = 9 * 10^10 Joule = 90 GigaJoule (setara pembakaran 3.000 ton batubara murni)."
      ],
      answerValue: 90,
      answerUnit: "GJ"
    },
    reflection: "Kekuatan dahsyat tersimpan di dalam bagian terkecil (inti atom). Begitu pula keyakinan (iman) di dalam kalbu manusia yang tampak kecil secara fisik, dapat melahirkan kekuatan akhlak yang mengubah dunia peradaban.",
    calculatorParams: [
      { label: "Defek Massa (dm) (mg)", key: "dm_mg", min: 0.1, max: 1000, step: 0.1, defaultValue: 1, unit: "mg" }
    ],
    calculateFn: (inputs) => {
      const { dm_mg } = inputs;
      const c = 3e8;
      const dm = dm_mg / 1e6; // to kg
      const res = dm * c * c;
      return {
        result: res,
        steps: [
          `dm = ${dm_mg} mg = ${dm} kg`,
          `E = dm * c²`,
          `E = ${dm} * (3 * 10⁸)²`,
          `E = ${dm} * 9 * 10¹⁶`,
          `E = ${res} Joules`
        ]
      };
    }
  },
  {
    id: "energi-angin",
    title: "11. Energi Angin",
    definition: "Energi angin adalah energi kinetik fluida gas atmosfer bumi berpindah posisi massa akibat fluktuasi perbedaan suhu pemanasan matahari dan rotasi bumi.",
    formula: "P = \\frac{1}{2} \\rho A v^3",
    derivation: "Massa aliran udara melintasi penampang kincir berketinggian A dalam durasi dt adalah: dm = \\rho \\, A \\, dx = \\rho \\, A \\, v \\, dt. Energi kinetik massa gas bergerak adalah dEk = 1/2 \\, dm \\, v^2 = 1/2 (\\rho \\, A \\, v \\, dt) v^2. Daya fisis kincir tiupan angin adalah laju energi per detik: P = dEk/dt = 1/2 * \\rho * A * v^3.",
    explanation: "Variabel kelajuan angin v bernilai kubik (pangkat tiga), berkonsekuensi bahwa kenaikan tipis kecepatan tiupan angin akan meledakkan pasokan daya kincir secara eksponensial ekstrem.",
    quranVerse: {
      reference: "QS. Al-Hijr [15]: 22",
      arabic: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً",
      latin: "Wa arsalnar-riyāha lawāqiha fa anzalnā minas-samā'i mā'ā...",
      translation: "Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan) dan Kami turunkan hujan dari langit..."
    },
    tafsir: "Syaikh Prof. Dr. Wahbah Az-Zuhaili dalam Tafsir Munir menguraikan 'lawaqih' bermakna faktor pengawin awan berrongga uap air hingga menggumpal kondensi hujan lebat. Transisi angin menggerakkan sistem cuaca di seluruh permukaan lautan dan benua, melarikan potensi perpindahan energi kinetik fluida udara masif yang dapat dikonversi kincir angin modern menjadi kedaulatan listrik terbarukan.",
    scientist: {
      name: "Albert Betz (1885–1968 M)",
      era: "Abad ke-20, Jerman",
      contribution: "Mengumumkan batas teoritis efisiensi pemanfaatan daya kincir angin (Batas Betz / Betz Limit = 59,3%) yang menyatakan kincir angin tidak mungkin mengambil seluruh daya tiupan fluida murni.",
      quote: "Kinetik fluida angin menaruh limit fisis maksimal penangkapan yang diatur geometri bilah kipas."
    },
    applications: [
      "Pembangkit Listrik Tenaga Bayu (PLTB) kincir angin raksasa di daerah pesisir pantai.",
      "Perahu layar niaga tradisional memotong lautan ombak.",
      "Pompa mekanis hisap air sawah ladang pertanian."
    ],
    sampleProblem: {
      question: "Sebuah turbin angin PLTB memiliki panjang bilah kipas rotor menyapu luas area sirkular A = 10 m². Jika kerapatan kerapatan udara pesisir pantai rho = 1,2 kg/m³ dan kecepatan hembusan angin konstan v = 10 m/s, berapakah perkiraan daya total fisis mekanik yang menghantam bilah turbin?",
      variables: [
        { name: "rho", value: "1,2 kg/m³", desc: "Massa jenis udara standard" },
        { name: "A", value: "10 m²", desc: "Luas sapuan perimeter bilah" },
        { name: "v", value: "10 m/s", desc: "Kecepatan aliran linier angin" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan rumus daya angin: P = 1/2 * rho * A * v^3",
        "Langkah 2: Substitusikan variabel numerik: P = 0.5 * 1.2 * 10 * (10)^3",
        "Langkah 3: Hitung nilai kubik kecepatan: (10)^3 = 1000 m^3/s^3",
        "Langkah 4: Kalikan hasil: P = 6 * 1000 = 6.000 Watt = 6 kW."
      ],
      answerValue: 6,
      answerUnit: "kW"
    },
    reflection: "Angin bertiup lembut tak kasat mata tetapi memiliki daya mengawinkan awan hujan dan melarikan daya listrik raksasa. Menunjukkan bahwa kelembutan perilaku yang dipadukan keyakinan kokoh mampu menghasilkan perubahan peradaban yang besar.",
    calculatorParams: [
      { label: "Kerapatan (rho)", key: "rho", min: 0.1, max: 5, step: 0.05, defaultValue: 1.2, unit: "kg/m³" },
      { label: "Luas Area (A)", key: "A", min: 1, max: 200, step: 1, defaultValue: 10, unit: "m²" },
      { label: "Kecepatan (v)", key: "v", min: 0, max: 50, step: 0.5, defaultValue: 10, unit: "m/s" }
    ],
    calculateFn: (inputs) => {
      const { rho, A, v } = inputs;
      const res = 0.5 * rho * A * v * v * v;
      return {
        result: res,
        steps: [
          `P = 0.5 * rho * A * v³`,
          `P = 0.5 * ${rho} * ${A} * (${v})³`,
          `P = ${res.toFixed(1)} Watts`
        ]
      };
    }
  },
  {
    id: "energi-air",
    title: "12. Energi Air (Hidro)",
    definition: "Energi air adalah konversi dari energi potensial gravitasi curah air pegas yang bergerak turun menjadi energi kinetik arus deras menggerakkan turbin pembangkit mekanik generator.",
    formula: "P_h = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot h",
    derivation: "Massa debit laju air per sekon mengalir setara Q = dV/dt (m³/s). Laju energi potensial gravitasi air jatuh berpantulan vertikal h per detik: P = dEp/dt = (dm/dt) * g * h = (\\rho * dV/dt) * g * h = \\rho * g * Q * h. Bila efisiensi konversi mekanik turbin dilambangkan \\eta, maka daya listrik netto PLTA dirumuskan: Ph = \\eta * \\rho * g * Q * h.",
    explanation: "Faktor ketinggian tajam h air terjun bendungan melipatgandakan desakan tekanan kinetik aliran, meledakkan putaran dinamo generator.",
    quranVerse: {
      reference: "QS. Ibrahim [14]: 32",
      arabic: "اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَكُمْ ۖ وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ ۖ وَسَخَّرَ لَكُمُ الْأَنْهَارَ",
      latin: "Allāhul-ladhī khalaqa samāwāti wal-ardha wa anzala minas-samā'i mā'an fa akhraja bihī minath-thamarāti rizqal lakum, wa sakhkhara lakumul-fulka li-tajriya fil-bahri bi-amrih, wa sakhkhara lakumul-anhār.",
      translation: "Allah-lah yang telah menciptakan langit dan bumi dan menurunkan air hujan dari langit, kemudian Dia mengeluarkan dengan air hujan itu berbagai buah-buahan menjadi rezeki untukmu; dan Dia telah menundukkan bahtera bagimu supaya bahtera itu berlayar di lautan dengan kehendak-Nya, dan Dia telah menundukkan (pula) bagimu sungai-sungai."
    },
    tafsir: "Tafsir Al-Misbah memaparkan 'sungai-sungai' yang ditundukkan (sakhkhara) airnya mengalir berkesinambungan merupakan tatanan infrastruktur alami bernilai guna tinggi. Mengalir derasnya debit sungai membawa energi hidro terbarukan konstan sebagai poros utama pembangkit daya bagi peradaban yang setimbang.",
    scientist: {
      name: "Lester Allan Pelton (1829–1908 M)",
      era: "Abad ke-19, USA",
      contribution: "Menciptakan turbin air berimpuls tinggi 'Pelton Wheel' yang merevolusi konversi energi air berdebit deras elevasi curam menjadi daya rotor dinamo generator.",
      quote: "Kecepatan air jatuh menyimpan daya dorong optimal yang dapat dipanen seutuhnya menggunakan sudu turbin impuls."
    },
    applications: [
      "Pembangkit Listrik Tenaga Air (PLTA) penyuplai transmisi listrik nasional.",
      "Kincir penggilas gandum mekanis di pinggir bendungan kuno.",
      "Kincir generator terapung pengalir arus ombak sungai."
    ],
    sampleProblem: {
      question: "Sebuah instalasi PLTA bendungan mikrohidro beroperasi memanfaatkan tinggi terjun air h = 10 meter dengan laju debit aliran air Q = 0,2 m³/s. Jika efisiensi generator eta = 80% (0,8) dan gravitasi g = 10 m/s², hitunglah keluaran daya listrik netto instalasi tersebut! (rho_air = 1000 kg/m³)",
      variables: [
        { name: "eta", value: "0,8", desc: "Efisiensi konversi turbin" },
        { name: "rho", value: "1000 kg/m³", desc: "Kerapatan massa jenis air" },
        { name: "Q", value: "0,2 m³/s", desc: "Laju debit volume aliran air" },
        { name: "h", value: "10 m", desc: "Ketinggian pancuran air jatuh" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan rumus daya hidroelektrik PLTA: P = eta * rho * g * Q * h",
        "Langkah 2: Substitusikan variabel numerik: P = 0.8 * 1000 * 10 * 0.2 * 10",
        "Langkah 3: Hitung bertahap: 0.8 * 1000 = 800 kg/s",
        "Langkah 4: Kalikan sisa variabel: P = 800 * 10 * 0.2 * 10 = 8000 * 2 = 16.000 Watt = 16 kW."
      ],
      answerValue: 16,
      answerUnit: "kW"
    },
    reflection: "Air sungai yang mengalir tunduk searah kontur bumi melambangkan fleksibilitas yang kokoh. Di dalam perjalanannya menyusuri lembah rendah, ia menyalurkan daya penggerak turbin kemaslahatan mahluk di sekitarnya.",
    calculatorParams: [
      { label: "Efisiensi (eta)", key: "eta", min: 0.1, max: 1, step: 0.05, defaultValue: 0.8, unit: "-" },
      { label: "Debit (Q)", key: "Q", min: 0.01, max: 100, step: 0.01, defaultValue: 0.2, unit: "m³/s" },
      { label: "Tinggi Jatuh (h)", key: "h", min: 1, max: 500, step: 1, defaultValue: 10, unit: "m" }
    ],
    calculateFn: (inputs) => {
      const { eta, Q, h } = inputs;
      const rho = 1000;
      const g = 10;
      const res = eta * rho * g * Q * h;
      return {
        result: res,
        steps: [
          `P = eta * rho * g * Q * h`,
          `P = ${eta} * ${rho} * ${g} * ${Q} * ${h}`,
          `P = ${res.toFixed(1)} Watts`
        ]
      };
    }
  },
  {
    id: "energi-surya",
    title: "13. Energi Surya (Solar)",
    definition: "Energi surya adalah energi radiasi foton panjang gelombang tampak dan tidak tampak yang dipancarkan oleh reaksi fusi nuklir hidrogen pada inti matahari.",
    formula: "P_s = I \\cdot A \\cdot \\eta_{solar}",
    derivation: "Radiasi matahari memancarkan intensitas pancar gelombang EM (I, Watt/m²) melintasi luas permukaan panel sel surya A (m²). Daya pancar total surya yang tiba adalah P_total = I * A. Jika persentase efisiensi absorbsi bahan konduktivitas fotovoltaik bahan adalah \\eta, maka daya kelistrikan yang dilepaskan adalah: P_s = I * A * \\eta.",
    explanation: "Sel surya silikon memanfaatkan fenomena fisika moderen efek fotolistrik untuk melejitkan elektron keluar dari struktur pita valensi silikon begitu bertumbukan dengan paket foton cahaya matahari.",
    quranVerse: {
      reference: "QS. Nuh [71]: 16",
      arabic: "وَجَعَلَ الْقَمَرَ فِيهِنَّ نُورًا وَجَعَلَ الشَّمْسَ سِرَاجًا",
      latin: "Wa ja'alal-qamara fīhinna nūraw wa ja'alasy-syamsa sirājā.",
      translation: "Dan Allah menciptakan padanya bulan sebagai cahaya (nur) dan menjadikan matahari sebagai pelita (sirajan) yang terang benderang."
    },
    tafsir: "Syaikh Prof. Dr. Wahbah Az-Zuhaili menjabarkan 'siraj' merepresentasikan obor pelita mandiri yang memancarkan energi panas-cahaya hasil reaksi internalnya. Hal ini bersesuaian dengan fisika bintang bahwa matahari memroduksi kalor memancar fusi sendiri secara berkeseimbangan merayapi orbit angkasa.",
    scientist: {
      name: "Alexandre-Edmond Becquerel (1820–1891 M)",
      era: "Abad ke-19, Perancis",
      contribution: "Mendokumentasikan penemuan fenomena efek fotokimia fotovoltaik pertama kali pada tahun 1839 menggunakan sel larutan asam elektrolit kawat platina.",
      quote: "Sinar surya terbukti melepaskan kelistrikan konduksi begitu membentur persambungan logam kimiawi."
    },
    applications: [
      "Stasiun PLTS terapung sel modul fotovoltaik silikon monokristalin.",
      "Sel surya atap pemutar kipas filter udara mandiri rumah susun.",
      "Satelit luar angkasa bertenaga solar panel penjelajah orbit bumi."
    ],
    sampleProblem: {
      question: "Perangkat modul sel panel surya monokristal memiliki luas area penampang A = 2 m² dipasang mendatar pada atap sekolah. Jika intensitas radiasi matahari terik tengah hari I = 1.000 W/m² dan efisiensi panel surya eta_solar = 15% (0,15), berapakah keluaran daya listrik instan modul tersebut?",
      variables: [
        { name: "I", value: "1000 W/m²", desc: "Intensitas dwi pancar radiasi matahari" },
        { name: "A", value: "2 m²", desc: "Luas penampang modul surya" },
        { name: "eta", value: "0,15", desc: "Efisiensi sirkuit fotovoltaik" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan rumus konversi panel surya: Ps = I * A * eta",
        "Langkah 2: Substitusikan numerik: Ps = 1000 * 2 * 0.15",
        "Langkah 3: Hitung bertahap: 1000 * 2 = 2.000 Watt daya surya tiba",
        "Langkah 4: Kalikan faktor efisiensi: Ps = 2000 * 0.15 = 300 Watt daya kelistrikan murni."
      ],
      answerValue: 300,
      answerUnit: "W"
    },
    reflection: "Matahari menyebarkan pelita energi tanpa pamrih (sirajan). Ia bertindak sebagai generator utama bagi roda klorofil tumbuhan memproduksi oksigen gratis demi kehidupan bumi. Mencontohkan kemurahan hati mutlak.",
    calculatorParams: [
      { label: "Intensitas (I)", key: "I", min: 10, max: 2000, step: 10, defaultValue: 1000, unit: "W/m²" },
      { label: "Luas Area (A)", key: "A", min: 0.1, max: 50, step: 0.1, defaultValue: 2, unit: "m²" },
      { label: "Efisiensi (eta)", key: "eta", min: 0.01, max: 0.99, step: 0.01, defaultValue: 0.15, unit: "-" }
    ],
    calculateFn: (inputs) => {
      const { I, A, eta } = inputs;
      const res = I * A * eta;
      return {
        result: res,
        steps: [
          `P = I * A * eta`,
          `P = ${I} * ${A} * ${eta}`,
          `P = ${res.toFixed(1)} Watts`
        ]
      };
    }
  },
  {
    id: "energi-biomassa",
    title: "14. Energi Biomassa",
    definition: "Energi biomassa adalah bentuk energi potensial kimia tersimpan yang bersumber dari bahan-bahan biologis organik buangan sisa pertanian, kotoran hewan, tanaman, dan runtuhan kayu hutan.",
    formula: "Q_{bio} = m \\cdot LCV",
    derivation: "Nilai kalor bahan bakar organik dinyatakan lewat Parameter Nilai Kalor Bawah (LCV, Lower Calorific Value) dalam MJ/kg. Kalor yang dibebaskan pembakaran total massa m jerami pertanian kering adalah: Qbio = m * LCV.",
    explanation: "Biomassa dapat dikonversi menjadi bahan bakar gas biogas (hidrokarbon metana CH4) melalui proses fermentasi pencernaan mikroba anaerobik sisa limbah jerami atau padatan tinja kandang.",
    quranVerse: {
      reference: "QS. 'Abasa [80]: 27-32",
      arabic: "فَأَنْبَتْنَا فِيهَا حَبًّا وَعِنَبًا وَقَضْبًا وَزَيْتُونًا وَنَخْلًا وَحَدَائِقَ غُلْبًا وَفَاكِهَةً وَأَبًّا مَتَاعًا لَكُمْ وَلِأَنْعَامِكُمْ",
      latin: "Fa anbatnā fīhā habbā, wa 'inabaw wa qadhbā, wa zaytūnaw wa nakhlā, wa hadā'iqa ghulbā, wa fākihataw wa abbā, matā'al lakum wa li-an'āmikum.",
      translation: "Lalu Kami tumbuhkan biji-bijian di bumi itu, anggur dan sayur-sayuran, zaitun dan pohon kurma, kebun-kebun (yang) lebat, dan buah-buahan serta rumput-rumputan, untuk kesenanganmu dan untuk hewan-hewan ternakmu."
    },
    tafsir: "Syaikh Mutawalli Syarawi menafsirkan 'abba' bermakna rerumputan pakan ternak. Pertumbuhan masif kebun lebat (hadaiq) merupakan reaktor alami penimbun energi biomassa di darat. Sisa dedaunan, kotoran hewan ternak pengonsumsi rumput, merupakan limbah organik kaya hidrogen karbon kimiawi yang dapat difermentasi melepaskan biogas bersih ramah lingkungan.",
    scientist: {
      name: "Jan Baptista van Helmont (1580–1644 M)",
      era: "Abad ke-17, Belgia",
      contribution: "Ilmuwan perintis kimia gas yang membuktikan pertumbuhan massa kayu pohon berasal dari air tanah dan udara karbon secara biokimia sintesis, bukan unsur padat tanah steril.",
      quote: "Massa pohon basah menumpuk pembakaran energi kimia kayu murni dari penggabungan rahasia udara air alami."
    },
    applications: [
      "Reaktor digester biogas skala peternakan sapi.",
      "Pembangkit bertenaga pelet sekam jerami pertanian.",
      "Bahan bakar etanol fermentasi sisa tebu industri gula."
    ],
    sampleProblem: {
      question: "Sebuah unit reaktor digester biogas pedesaan mengolah sampah jerami pertanian seberat m = 50 kg sampah kering memiliki nilai kalor pembakaran kalor LCV = 15 MegaJoule/kg. Berapakah kuantitas energi panas teoritis yang dilepaskan jika biomassa tersebut habis dibakar dalam tungku ruang sirkuit uap?",
      variables: [
        { name: "m", value: "50 kg", desc: "Massa biomassa kering pertanian" },
        { name: "LCV", value: "15 MJ/kg", desc: "Nilai kalor bawah jerami basah" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan formula kalor pembakaran biomassa: Q = m * LCV",
        "Langkah 2: Substitusikan variabel yang diketahui: Q = 50 * 15",
        "Langkah 3: Hitung nilai numerik: Q = 750 MegaJoule = 750.000 kJ."
      ],
      answerValue: 750,
      answerUnit: "MJ"
    },
    reflection: "Limbah kotoran ternak dan sekam padi yang biasanya terbuang kotor menyebarkan bau, ternyata menyimpan energi bernilai tinggi di tangan manusia yang berilmu. Menunjukkan bahwa tidak ada satupun ciptaan Allah yang sia-sia tanpa guna.",
    calculatorParams: [
      { label: "Massa (m)", key: "m", min: 1, max: 1000, step: 1, defaultValue: 50, unit: "kg" },
      { label: "Nilai Kalor (LCV)", key: "LCV", min: 1, max: 50, step: 0.5, defaultValue: 15, unit: "MJ/kg" }
    ],
    calculateFn: (inputs) => {
      const { m, LCV } = inputs;
      const res = m * LCV;
      return {
        result: res,
        steps: [
          `Q = m * LCV`,
          `Q = ${m} * ${LCV}`,
          `Q = ${res} MJ`
        ]
      };
    }
  },
  {
    id: "energi-geotermal",
    title: "15. Energi Geotermal (Panas Bumi)",
    definition: "Energi geotermal adalah energi panas alami yang tersimpan di dalam batuan magma dan air pori dalam kedalaman kerak bumi akibat peluruhan radioaktif alami unsur berat.",
    formula: "P_{geo} = \\dot{m} \\cdot (h_{uap} - h_{cair})",
    derivation: "Siklus termodinamika entalpi geotermal memompa laju fluida uap uap super jenuh dari kedalaman sumur produksi sebesar dot_m (kg/s). Perubahan entalpi daya adalah perkalian laju massa fluida dengan selisih entalpi uap jenuh h_uap dan fase cair kembali sumur injeksi h_cair: P = dot_m * (h_uap - h_cair).",
    explanation: "Indonesia menimbun sekitar 40% cadangan geotermal bumi dunia karena dilintasi gugus sabuk jalur magma gunung api aktif ring of fire Pasifik.",
    quranVerse: {
      reference: "QS. An-Naba' [78]: 6-7",
      arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا وَالْجِبَالَ أَوْتَادًا",
      latin: "Alam naj'alil-ardha mihādā, wal-jibāla awtādā.",
      translation: "Bukankah Kami telah menjadikan bumi itu sebagai hamparan? Dan gunung-gunung sebagai pasak?"
    },
    tafsir: "Imam Al-Baghowi menjabarkan 'awtad' sebagai penancap penstabil getaran bumi. Dari perspektif geologi moderen, pasak akar pegunungan bertindak sebagai penyeimbang mekanis kerak litosfer bumi melintasi patahan tektonik. Saluran lava akar gunung api bertindak sebagai ventilasi termal alami menyalurkan desakan tekanan uap magma super jenuh dari mantel tengah bumi ke luar, menjaga stabilitas suhu internal bumi laksana katup pengaman ketel uap raksasa.",
    scientist: {
      name: "Prince Piero Ginori Conti (1873–1939 M)",
      era: "Abad ke-20, Italia",
      contribution: "Merancang unit turbin dinamo pengubah semburan uap geotermal bumi pertama di dunia Larderello Italia pada tahun 1904, meretas era listrik panas bumi komersial.",
      quote: "Semburan uap dari neraka bawah magma terbukti sanggup memutar baling-baling logam menyalakan lampu peradaban."
    },
    applications: [
      "Pembangkit Listrik Tenaga Panas Bumi (PLTP) sumur injeksi uap kering batuan magma.",
      "Sirkuit pipa pemanas kamar perkotaan daerah musim salju.",
      "Pemandian air panas belerang rekreasi kesehatan."
    ],
    sampleProblem: {
      question: "Sebuah PLTP geotermal menyedot laju massa uap air panas sedalam perut bumi sebesar dot_m = 10 kg/s dengan perubahan entalpi spesifik generator h_uap - h_cair = 2.000 kiloJoule/kg. Berapakah keluaran daya termis teoritis yang dikonsumsi turbin PLTP tersebut?",
      variables: [
        { name: "dot_m", value: "10 kg/s", desc: "Laju aliran massa uap panas" },
        { name: "dh", value: "2000 kJ/kg", desc: "Selisih entalpi spesifik fluida" }
      ],
      solutionSteps: [
        "Langkah 1: Gunakan rumus daya entalpi termodinamika: P = dot_m * dh",
        "Langkah 2: Substitusikan variabel numerik: P = 10 * 2000",
        "Langkah 3: Hitung perkalian: P = 20.000 kiloWatt = 20 MegaWatt (MW) daya termal."
      ],
      answerValue: 20,
      answerUnit: "MW"
    },
    reflection: "Gunung api sebagai pasak bumi menyeimbangkan energi termal internal bumi agar tidak meledak hancur. Begitu pentingnya kehadiran sosok pemikir bijaksana (ulama/ilmuwan) penyeimbang gejolak moral masyarakat di sekitarnya.",
    calculatorParams: [
      { label: "Laju Massa (dm/dt)", key: "dm_dt", min: 1, max: 200, step: 1, defaultValue: 10, unit: "kg/s" },
      { label: "Selisih Entalpi (dh)", key: "dh", min: 100, max: 4000, step: 10, defaultValue: 2000, unit: "kJ/kg" }
    ],
    calculateFn: (inputs) => {
      const { dm_dt, dh } = inputs;
      const res = dm_dt * dh; // to kW
      return {
        result: res,
        steps: [
          `P_geo = (dm/dt) * dh`,
          `P_geo = ${dm_dt} * ${dh}`,
          `P_geo = ${res} kW`
        ]
      };
    }
  }
];
