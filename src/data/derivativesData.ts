export interface EnergyDerivative {
  title: string;
  content: string;
  verseRef: string;
  verseArabic: string;
  verseLatin: string;
  verseTranslation: string;
  tafsirUlama: string;
  penjelasanFisika: string;
}

export const derivativesData: Record<string, EnergyDerivative[]> = {
  "energi-kinetik": [
    {
      title: "1. Kecepatan Translasi Linier",
      content: "Gerak lurus partikel yang menempuh lintasan spasial linear. Energi kinetik translasional bergantung langsung pada kuadrat kecepatan linier (v²) relatif terhadap kerangka acuan diam.",
      verseRef: "Q.S. Yasin [36]: 40",
      verseArabic: "لَا الشَّمْسُ يَنْبَغِي لَهَا أَنْ تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
      verseLatin: "Lasy-syamsu yambaghī lahā an tudrikal-qamara wa lal-laylu sābiqun-nahār, wa kullun fī falakiy yasbahūn.",
      verseTranslation: "Tidaklah mungkin bagi matahari mengejar bulan dan malam pun tidak dapat mendahului siang. Masing-masing beredar pada garis edarnya.",
      tafsirUlama: "Tafsir Al-Azhar menerangkan bahwa kata 'yasbahun' menggambarkan gerakan berenang yang aktif, lancar, dan berkesinambungan. Hal ini mengisyaratkan bahwa benda-benda langit memiliki energi gerak intrinsik sejak penciptaannya.",
      penjelasanFisika: "Dalam mekanika klasik, partikel bermassa m yang bergerak dengan kecepatan translasi linear v mengaitkan energi kinetik Ek = ½mv²; persamaan orbit Newton menjamin kestabilan energi ini sepanjang kedudukan koordinat radial."
    },
    {
      title: "2. Kecepatan Sudut & Kinetik Rotasi",
      content: "Energi gerak melingkar melintasi sumbu putar gasing. Momen inersia (I) bertindak sebagai hambatan geometris putaran massa atomik partikel.",
      verseRef: "Q.S. Luqman [31]: 29",
      verseArabic: "أَلَمْ تَرَ أَنَّ اللَّهَ يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ",
      verseLatin: "Alam tara annallāha yūlijul-layla fin-nahāri wa yūlijun-nahāra fil-layli wa sakhkharasy-syamsa wal-qamar...",
      verseTranslation: "Tidakkah engkau memperhatikan bahwa Allah memasukkan malam ke dalam siang dan memasukkan siang ke dalam malam dan Dia menundukkan matahari dan bulan...",
      tafsirUlama: "Tafsir Ibnu Katsir mengaitkan proses masuknya siang ke dalam malam dengan rotasi bumi yang melahirkan pergeseran waktu secara gradual demi kemakmuran hayati di bumi.",
      penjelasanFisika: "Rotasi bumi pada porosnya dengan kecepatan sudut ω memiliki energi kinetic rotasi Er = ½Iω², di mana momen inersia bumi I = 0,33MA² menjaga momentum sudut kosmis tetap kekal."
    },
    {
      title: "3. Momentum Linier & Impuls",
      content: "Hubungan integral gaya terhadap interval waktu. Momentum merepresentasikan kapasitas tumbukan hantaman linier partikel bermassa yang sedang melaju dinamis.",
      verseRef: "Q.S. Al-Anbya [21]: 87",
      verseArabic: "وَذَا النُّونِ إِذْ ذَهَبَ مُغَاضِبًا فَظَنَّ أَنْ لَنْ نَقْدِرَ عَلَيْهِ فَنَادَىٰ فِي الظُّلُمَاتِ",
      verseLatin: "Wa dhan-nūni idh dhahaba mughādhibāan fadhanna al lan naqdira 'alayhi fanādā fidz-dzulumāt...",
      verseTranslation: "Dan (ingatlah kisah) Dzun Nun (Yunus), ketika dia pergi dalam keadaan marah, lalu dia menyangka bahwa Kami tidak akan menyulitkannya...",
      tafsirUlama: "Para mufassir menjelaskan bahwa dorongan kuat di laut lepas menghempaskan paus pembawa Yunus; ada hukum takdir fisis tumbukan di dalam air.",
      penjelasanFisika: "Tumbukan fisis diatur momentum linier p = m·v. Impuls J = F·Δt mewakili perubahan momentum saat terjadi gaya desakan singkat searah lintasan fluida."
    },
    {
      title: "4. Hambatan Udara & Deselerasi",
      content: "Gaya gesekan fluida udara (drag force) yang melawan gerak arah laju benda. Hambatan ini mendisipasi nilai energi kinetik menjadi deselerasi termal.",
      verseRef: "Q.S. Al-Furqan [25]: 45",
      verseArabic: "أَلَمْ تَرَ إِلَىٰ رَبِّكَ كَيْفَ مَدَّ الظِّلَّ وَلَوْ شَاءَ لَجَعَلَهُ سَاكِنًا",
      verseLatin: "Alam tara ilā rabbika kayfa maddadh-dhilla walow syā'a laja'alahū sākinā...",
      verseTranslation: "Tidakkah engkau memperhatikan (penciptaan) Tuhanmu, bagaimana Dia memanjangkan bayang-bayang; dan sekiranya Dia menghendaki, niscaya Dia menjadikannya diam...",
      tafsirUlama: "Kandungan kata 'sakinan' (diam/statis) mengarah pada sunnatullah bahwa pergerakan relatif alam semestinya memiliki batas hambatan penyerap gejolak liar.",
      penjelasanFisika: "Hambatan udara (Fd = ½ρv²CdA) bertindak melawan vektor kecepatan, menyerap energi kinetik translasi secara eksponensial menuju kondisi deselerasi diam (v=0)."
    },
    {
      title: "5. Teorema Usaha-Energi Mekanik",
      content: "Menegaskan bahwa total usaha netto luar (W) yang bekerja pada suatu benda tegar akan sebanding seutuhnya dengan perubahan selisih energi kinetik (ΔEk) objek.",
      verseRef: "Q.S. An-Najm [53]: 39",
      verseArabic: "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ",
      verseLatin: "Wa al laysa lil-insāni illā mā sa'ā.",
      verseTranslation: "Dan bahwa manusia hanya memperoleh apa yang telah diusahakannya.",
      tafsirUlama: "Hasil usaha (sa'i) manusia di akhirat ditentukan mutlak dari akumulasi usaha real di dunia, mencerminkan asas keadilan mizan tuhan.",
      penjelasanFisika: "Teorema Usaha-Energi (W = ΔEk) menyatakan usaha mekanik total bernilai setara perubahan tingkat energi fisis, membuktikan ketergantungan kuantitas hasil terhadap kuantitas usaha."
    }
  ],
  "energi-potensial-gravitasi": [
    {
      title: "1. Ketinggian Elevasi Relatif (h)",
      content: "Jarak vertikal lurus di atas permukaan bidang acuan datum nol. Ketinggian (h) menentukan intensitas potensi akumulasi tumpukan energi jatuh bebas.",
      verseRef: "Q.S. Az-Zumar [39]: 21",
      verseArabic: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ",
      verseLatin: "Alam tara annallāha anzala minas-samā'i mā'an fasalakahū yanābī'a fil-ardh...",
      verseTranslation: "Apakah engkau tidak memperhatikan, bahwa sesungguhnya Allah menurunkan air dari langit, lalu dialirkannya menjadi sumber-sumber air di bumi...",
      tafsirUlama: "Tafsir Al-Maraghi menjelaskan air diposisikan di ketinggian untuk mengalir ke dataran yang lebih rendah agar dapat menghidupkan tanah tandus.",
      penjelasanFisika: "Massa air m di ketinggian h menyimpan energi potensial gravitasi Ep = mgh. Perbedaan tinggi (Δh) menciptakan gradien tekanan pendorong air mengalir lancar."
    },
    {
      title: "2. Medan Gravitasi Uniform Lokal (g)",
      content: "Gaya tarik gravitasi bumi yang bernilai seragam (~9.8 m/s² atau ~10 m/s²) pada area permukaan sempit, menentukan laju percepatan konstan ke pusat bumi.",
      verseRef: "Q.S. Luqman [31]: 10",
      verseArabic: "خَلَقَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا ۖ وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ أَنْ تَمِيدَ بِكُمْ",
      verseLatin: "Khalaqas-samāwāti bighayri 'amadin tarawnahā wa alqā fil-ardhi rawāsiya an tamīda bikum...",
      verseTranslation: "Dia menciptakan langit tanpa tiang yang kamu melihatnya dan Dia meletakkan gunung-gunung di permukaan bumi agar bumi itu tidak mengguncangkan kamu...",
      tafsirUlama: "Gunung diletakkan sebagai pasak bumi (rawasiya) penstabil lempeng dari getaran berlebih akibat interaksi gaya gravitasi internal mantel bumi.",
      penjelasanFisika: "Medan gravitasi lokal g = G·M/R² diatur oleh distribusi massa bumi. Keadaan bumi yang setimbang merupakan sunnatullah gaya gravitasi pasak."
    },
    {
      title: "3. Sifat Gaya Konservatif",
      content: "Gaya tarik yang usahanya tidak bergantung pada lintasan melainkan murni gayut pada perbedaan koordinat posisi awal dan posisi akhir sistem fisis.",
      verseRef: "Q.S. Fatir [35]: 41",
      verseArabic: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَنْ تَزُولَا ۚ وَلَئِنْ زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِنْ بَعْدِهِ",
      verseLatin: "Innallāha yumsikus-samāwāti wal-ardha an tazūlā, wa la'in zālatā in amsakahumā min ahadim mim ba'dih...",
      verseTranslation: "Sesungguhnya Allah menahan langit dan bumi agar tidak lenyap; dan sungguh jika keduanya lenyap tidak ada seorang pun yang dapat menahannya selain Dia...",
      tafsirUlama: "Tafsir Al-Muyassar menerangkan kekuasaan tuhan mengendalikan langit dan bumi agar tetap pada posisinya tanpa pernah bergeser keluar jalur hukum fisisnya.",
      penjelasanFisika: "Gaya gravitasi bersifat konservatif (∮F·dr = 0). Usaha memindahkan partikel dalam loop tertutup bernilai nol, menjaga kekonstanan energi ikat gravitasi semesta."
    },
    {
      title: "4. Medan Potensi Newton Kosmis",
      content: "Hukum tarik-menarik benda langit sebagai penstabil sirkuit orbit galaksi melingkar dalam gravitasi makrokosmos.",
      verseRef: "Q.S. Ar-Rad [13]: 2",
      verseArabic: "اللَّهُ الَّذِي رَفَعَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا ۖ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ ۖ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ",
      verseLatin: "Allāhulladhī rafa'as-samāwāti bighayri 'amadin tarawnahā thummas-tawā 'alal-'arsyi wa sakhkharasy-syamsa wal-qamar...",
      verseTranslation: "Allah-lah yang meninggikan langit tanpa tiang (sebagaimana) yang kamu lihat, kemudian Dia bersemayam di atas 'Arsy, dan menundukkan matahari dan bulan...",
      tafsirUlama: "Tiang yang tidak terlihat oleh indera manusia ditafsirkan oleh para ulama sains sebagai gaya gravitasi tidak kasat mata yang menahan seluruh tata surya.",
      penjelasanFisika: "Antara dua benda langit bermassa m₁ dan m₂ bekerja medan potensi Newton U(r) = -G·m₁m₂/r. Medan negatif ini mengikat planet dalam lintasan orbit elips elok."
    },
    {
      title: "5. Energi Ikat Gravitasi Bintang",
      content: "Kuantitas kerja minimum yang dibutuhkan untuk mencerai-beraikan material bintang gas hidrogen masif keluar dari pengaruh cekungan medan gravitasi lokal.",
      verseRef: "Q.S. At-Takwir [81]: 15-16",
      verseArabic: "فَلَا أُقْسِمُ بِالْخُنَّسِ الْجَوَارِ الْكُنَّسِ",
      verseLatin: "Falā uqsimu bil-khunnasil jawāril-kunnas.",
      verseTranslation: "Sungguh, Aku bersumpah demi bintang-bintang yang meredup, yang berjalan cepat lagi bersembunyi.",
      tafsirUlama: "Isyarat tentang lubang hitam (black hole) atau bintang sekarat yang mengalami runtuhan gravitasi mahadahsyat hingga melahap seluruh foton cahayanya.",
      penjelasanFisika: "Ketika energi ikat gravitasi bintang melebihi tekanan degenerasi elektronnya (Batas Chandrasekhar), runtuhan gravitasi melahirkan densitas massa tak terhingga."
    }
  ],
  "energi-potensial-elastis": [
    {
      title: "1. Hukum Deformasi Simpangan Hooke",
      content: "Gaya pemulih pegas beroperasi sebanding lurus arah simpangan deformasi (F = -k · x). Konsep ini mendasari energi pegas tersimpan akibat tarikan regang.",
      verseRef: "Q.S. Asy-Syu'ara [26]: 111-112",
      verseArabic: "قَالُوا أَنُؤْمِنُ لَكَ وَاتَّبَعَكَ الْأَرْذَلُونَ قَالَ وَمَا عِلْمِي بِمَا كَانُوا يَعْمَلُونَ",
      verseLatin: "Qālū anu'minu laka wattaba'akal-ardhalūn, qāla wa mā 'ilmī bimā kānū ya'malūn.",
      verseTranslation: "Mereka berkata: 'Apakah kami harus beriman kepadamu, padahal pengikut-pengikutmu adalah orang-orang yang hina?'...",
      tafsirUlama: "Tafsir QS. Asy-Syu'ara menekankan bahwa respon atas tekanan sosial harus dihadapi dengan kesabaran fleksibel laksana pegas penahan beban.",
      penjelasanFisika: "Hukum Hooke menyatakan F = -kx. Sifat elastisitas pegas menyimpan energi potensial elastik Ep = ½kx², di mana gaya pemulih selalu melawan deformasi asalnya."
    },
    {
      title: "2. Konstanta Kekakuan Fisis Pegas (k)",
      content: "Ukuran rigiditas atau kekakuan pegas fisis. Nilai k yang tinggi merepresentasikan pegas yang tangguh menahan gaya tekan luar mekanik.",
      verseRef: "Q.S. As-Saff [61]: 4",
      verseArabic: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُمْ بُنْيَانٌ مَرْصُوصٌ",
      verseLatin: "Innallāha yuhibbul-ladhīna yuqātilūna fī sabīlihī saffan ka-annahum bunyānum marsūs.",
      verseTranslation: "Sesungguhnya Allah menyukai orang yang berperang di jalan-Nya dalam barisan yang teratur seakan-akan mereka seperti suatu bangunan yang tersusun kokoh.",
      tafsirUlama: "Bunyānum marsūs (bangunan kokoh tersusun rapat) melambangkan ikatan molekul padat yang memiliki ketahanan deformasi tinggi menghadapi guncangan badai.",
      penjelasanFisika: "Konstanta pegas k ditentukan oleh struktur mikro material dan geometri heliksnya (k = Gd⁴/8D³N). Struktur kawat baja rapat menyumbangkan konstanta k masif."
    },
    {
      title: "3. Batas Elastisitas Kritis",
      content: "Titik batas deformasi material padat sebelum mengalami perubahan bentuk plastis permanen (tidak mampu kembali pulih ke panjang semula).",
      verseRef: "Q.S. Al-A'raf [7]: 31",
      verseArabic: "يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِنْدَ كُلِّ مَسْجِدٍ وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفُونَ",
      verseLatin: "Yā banī ādama khudhū zīnatakum 'inda kulli masjidiw wa kulū wasyrabū wa lā tusrifū, innahū lā yuhibbul-musrifīn.",
      verseTranslation: "Wahai anak cucu Adam! Pakailah pakaianmu yang bagus pada setiap (memasuki) masjid, makan dan minumlah, tetapi jangan berlebih-lebihan. Sungguh, Allah tidak menyukai orang yang berlebih-lebihan.",
      tafsirUlama: "Israf (melampaui batas) adalah tindakan destruktif. Dalam materi struktural, deformasi melampaui batas aman menyebabkan kehancuran permanen.",
      penjelasanFisika: "Batas elastisitas memisahkan daerah deformasi reversibel dengan deformasi plastis irreversible. Beban kerja di atas batas kritis ini merusak kisi atom kristal."
    },
    {
      title: "4. Modulus Elastik Young",
      content: "Rasio tegangan (stress) terhadap regangan (strain) tingkat molekuler atomik bahan solid dalam mempertahankan kisi kristal aslinya.",
      verseRef: "Q.S. Hadid [57]: 25",
      verseArabic: "وَأَنْزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
      verseLatin: "Wa anzalnal-hadīda fīhi ba'sun syadīduw wa manāfi'u lin-nās...",
      verseTranslation: "Dan Kami ciptakan besi yang mempunyai kekuatan luar biasa dan banyak sekali manfaat bagi manusia...",
      tafsirUlama: "Tafsir Al-Misbah menguraikan kelebihan metalurgi besi (hadid) yang berdaya tahan tinggi, menjadikannya pilar konstruksi peradaban modern.",
      penjelasanFisika: "Modulus Young E = σ/ε mengukur kekakuan material besi baja (E ≈ 200 GPa), menggambarkan besarnya gaya ikatan elektrostatik antar inti besi."
    },
    {
      title: "5. Regangan Geser Tekan",
      content: "Deformasi mikro akibat gaya paralel keping yang melahirkan tegangan geser internal penstabil posisi molekul struktural besi material.",
      verseRef: "Q.S. Al-Kahf [18]: 96",
      verseArabic: "آتُونِي زُبَرَ الْحَدِيدِ ۖ حَتَّىٰ إِذَا سَاوَىٰ بَيْنَ الصَّدَفَيْنِ قَالَ انْفُخُوا",
      verseLatin: "Ātūnī zubaral-hadīd, hattā idhā sāwā baynas-sadafayni qālan-fukhū...",
      verseTranslation: "Berilah aku potongan-potongan besi! Hingga ketika (potongan besi) itu telah (terpasang) sama rata dengan kedua (puncak) gunung itu, dia berkata: 'Tiuplah'...",
      tafsirUlama: "Zulkarnain merancang dinding paduan besi tembaga (Sadd) yang tahan terhadap geseran transversal dan benturan desakan liar kaum perusak.",
      penjelasanFisika: "Regangan geser γ berkorelasi dengan Modulus Geser G = τ/γ. Struktur dinding logam paduan tinggi mengisolasi tegangan geser gesekan mekanis perintis."
    }
  ],
  "energi-mekanik": [
    {
      title: "1. Kekekalan Energi Mekanik Murni",
      content: "Menegaskan jumlah kuantitatif total Ep dan Ek bernilai konstan (Em₁ = Em₂) pada sistem konservatif terisolasi di mana gaya eksternal luar ditiadakan.",
      verseRef: "Q.S. Al-Qamar [54]: 49",
      verseArabic: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
      verseLatin: "Innā kulla syay'in khalaqnāhu bi qadar.",
      verseTranslation: "Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran.",
      tafsirUlama: "Kata 'qadar' bermakna takaran fisis dan fithrah hukum mekanis alam semesta yang terpelihara secara konstan, seimbang, dan adil.",
      penjelasanFisika: "Hukum Kekekalan Energi Mekanik (Em = Ep + Ek = konstan) berakar pada homogenitas waktu, melarang energi musnah atau tercipta secara acak."
    },
    {
      title: "2. Dissipative Forces (Gesekan)",
      content: "Gaya non-konservatif (seperti gesek mekanik, hambatan udara) yang memindahkan sebagian porsi energi mekanik murni keluar menjadi kalor.",
      verseRef: "Q.S. Al-Hadid [57]: 20",
      verseArabic: "اعْلَمُوا أَنَّمَا الْحَيَاةُ الدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌ بَيْنَكُمْ",
      verseLatin: "I'lamū annamal-hayātud-dunyā la'ibuw wa lahwuw wa zīnatuw wa tafākhur...",
      verseTranslation: "Ketahuilah, sesungguhnya kehidupan dunia itu hanyalah permainan dan sendagurau, dan perhiasan serta saling bermegah-megah di antara kamu...",
      tafsirUlama: "Dunia disamakan dengan kesia-siaan yang menghabiskan amal saleh; laksana gesekan dissipatif yang mengikis kepurnaan energi murni sistem.",
      penjelasanFisika: "Gaya gesek fisis Fk = μk·N memindahkan sebagian energi kinetik makroskopis menjadi getaran termal acak mikroskopis (panas) tak balik."
    },
    {
      title: "3. Titik Balik Kecepatan Nol",
      content: "Posisi ekstrem saat laju kelajuan partikel habis (v = 0) sehingga total energi mekanik diwakili penuh oleh energi potensial termaksimal.",
      verseRef: "Q.S. Yunus [10]: 24",
      verseArabic: "حَتَّىٰ إِذَا أَخَذَتِ الْأَرْضُ زُخْرُفَهَا وَازَّيَّنَتْ وَظَنَّ أَهْلُهَا أَنَّهُمْ قَادِرُونَ عَلَيْهَا",
      verseLatin: "Hattā idhā akhadhatil-ardhu zukhrufahā wazzayyanat wa zhanna ahluhā annahum qādirūna 'alayhā...",
      verseTranslation: "Hingga apabila bumi itu telah sempurna keindahannya, dan berhias, dan pemiliknya mengira bahwa mereka pasti menguasainya, tiba-tiba datanglah azab Kami...",
      tafsirUlama: "Keindahan puncak bumi merupakan kedudukan tertinggi yang rapuh, sewaktu-waktu titik balik kehancuran seketika merubah arah gerak sejarahnya.",
      penjelasanFisika: "Pada lintasan gerak harmonik, simpangan maksimum (amplitudo) merupakan titik balik di mana kelajuan v = 0, membalikkan arah vektor percepatan."
    },
    {
      title: "4. Sistem Terisolasi Massa Termal",
      content: "Kerangka batasan fisis tertutup yang mencegah transfer massa dari dan keluar batas sirkuit, menjaga keutuhan simetri hukum energi mekanis.",
      verseRef: "Q.S. Rahman [55]: 19-20",
      verseArabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ",
      verseLatin: "Marajal-bahrayni yaltaqiyān, baynahumā barzakhul lā yabghiyān.",
      verseTranslation: "Dia membiarkan dua muara laut mengalir yang keduanya kemudian bertemu, di antara keduanya ada batas yang tidak dilampaui oleh masing-masing.",
      tafsirUlama: "Sebuah batas pembatas alami (barzakh) yang memisahkan dua entitas agar kerapatan massa dan hukum energinya tidak campur baur secara bising.",
      penjelasanFisika: "Batas sistem terisolasi adiabatik mencegah pertukaran massa dan kalor (dQ = 0). Menjamin pelestarian hukum konservasi daya dalam kesatuan murni."
    },
    {
      title: "5. Teorema Noether Simetri Waktu",
      content: "Menunjukkan sifat kekekalan energi timbul akibat kekekalan simetri translasi waktu fisika teoritis—bahwa hukum alam tidak berubah kemarin, kini, dan nanti.",
      verseRef: "Q.S. Al-Kahf [18]: 27",
      verseArabic: "وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِنْ كِتَابِ رَبِّكَ ۖ لَا مُبَدِّلَ لِكَلِمَاتِهِ",
      verseLatin: "Watlu mā ūhiya ilayka min kitābi rabbika lā mubaddila likalimātih...",
      verseTranslation: "Dan bacakanlah apa yang diwahyukan kepadamu dari Kitab Tuhanmu. Tidak ada yang dapat merubah kalimat-kalimat-Nya...",
      tafsirUlama: "Ketetapan khalik dalam merancang sunnatullah hukum fisika dialam raya bersifat kokoh tanpa ada satu mahluk pun mampu mengubah ketetapan-Nya.",
      penjelasanFisika: "Sesuai Teorema Emmy Noether, invariance di bawah translasi waktu (t → t + dt) berimplikasi langsung pada hukum pelestarian kuantitas energi."
    }
  ],
  "energi-kalor": [
    {
      title: "1. Kapasitas Panas Spesifik (c)",
      content: "Kebutuhan panas kalor per satuan massa zat untuk menaikkan suhu sebesar satu derajat Kelvin/Celsius (Q = m · c · ΔT).",
      verseRef: "Q.S. Al-Anbya [21]: 69",
      verseArabic: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",
      verseLatin: "Qulnā yā nāru kūnī bardaw wa salāman 'alā Ibrāhīm.",
      verseTranslation: "Kami berfirman: 'Hai api, menjadilah dingin dan penyelamat bagi Ibrahim!'",
      tafsirUlama: "Kejadian mukjizat Ibrahim mendinginkan api merupakan intervensi ilahi mengubah kapasitas kalor intrinsik api menjadi tidak ramah membakar.",
      penjelasanFisika: "Kalor Q diserap zat sebanding massa m dan kenaikan suhu ΔT. Pemadaman api Ibrahim secara fisis merubah drastis parameter termis konduktivitas."
    },
    {
      title: "2. Konduktivitas Termal Logam",
      content: "Laju perambatan panas konduksi melintasi koordinat material tegar tanpa perpindahan massa fisik atomik material pengantar tersebut.",
      verseRef: "Q.S. Al-Anbya [21]: 80",
      verseArabic: "وَعَلَّمْنَاهُ صُنْعَةَ لَبُوسٍ لَكُمْ لِتُحْصِنَكُمْ مِنْ بَأْسِكُمْ",
      verseLatin: "Wa 'allamnāhu sun'ata labūsil lakum lituhsinakum mim ba'sikum...",
      verseTranslation: "Dan Kami ajarkan kepada Daud membuat baju besi untuk kamu, guna memelihara kamu dalam peperanganmu...",
      tafsirUlama: "Baju perang dirancang dari kepingan besi yang dilapis rapat agar dapat meredam penetrasi senjata dan mendisipasikan kalor panas tubuh prajurit.",
      penjelasanFisika: "Laju perambatan kalor konduksi dQ/dt = -kA(dT/dx). Logam besi memiliki koefisien k tinggi yang cepat meratakan energi termis eksternal."
    },
    {
      title: "3. Arus Konveksi Dinamis Fluida",
      content: "Perpindahan kalor berpola pusaran akibat perbedaan berat jenis (kerapatan massa) saat zat cair/gas dipanaskan.",
      verseRef: "Q.S. An-Nur [24]: 43",
      verseArabic: "أَلَمْ تَرَ أَنَّ اللَّهَ يُزْجِي سَحَابًا ثُمَّ يُؤَلِّفُ بَيْنَهُ ثُمَّ يَجْعَلُهُ رُكَامًا",
      verseLatin: "Alam tara annallāha yuzjī sahāban thumma yu'allifu baynahū thumma yaj'alahū rukāmā...",
      verseTranslation: "Tidakkah engkau melihat bahwa Allah mengarak awan berserakan, lalu mengumpulkan antara bagian-bagiannya, kemudian menjadikannya bertumpuk-tumpuk...",
      tafsirUlama: "Proses bertumpuknya awan komulonimbus digerakkan oleh tiupan angin vertikal (updraft) yang membawa uap air panas dari permukaan laut hangat.",
      penjelasanFisika: "Arus konveksional fluida terjadi akibat kerapatan massa udara ρ(T) menurun saat dipanaskan, memicu sirkulasi termal pendorong laju awan."
    },
    {
      title: "4. Radiasi Foton Gelombang Hitam",
      content: "Pancaran energi elektromagnetik oleh benda bermassa akibat suhu termis internalnya, menyebar tanpa bantuan medium rambat.",
      verseRef: "Q.S. An-Naba [78]: 13",
      verseArabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
      verseLatin: "Wa ja'alnā sirājaw wahhājā.",
      verseTranslation: "Dan Kami jadikan pelita yang amat terang (matahari).",
      tafsirUlama: "Matahari digambarkan sebagai 'sirajan wahhaja', tungku termonuklir yang secara terus menerus memancarkan limpahan radiasi elektromagnetik.",
      penjelasanFisika: "Daya radiasi benda hitam dirumuskan Hukum Stefan-Boltzmann P = e·σ·A·T⁴. Radiasi surya didominasi pada panjang gelombang cahaya tampak."
    },
    {
      title: "5. Entropi Hukum Termodinamika II",
      content: "Prinsip degradasi kualitas energi alami, di mana alam semesta cenderung bergeser menuju keadaan kekacauan (entropi tinggi) tak terpakai.",
      verseRef: "Q.S. Ar-Rahman [55]: 26",
      verseArabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ",
      verseLatin: "Kullu man 'alayhā fān.",
      verseTranslation: "Semua yang ada di bumi itu akan binasa.",
      tafsirUlama: "Kefanaan merupakan takdir mutlak material ciptaan. Menunjukkan bahwa keteraturan alam akan usai secara gradual menurut ketetapan tuhan.",
      penjelasanFisika: "Hukum II Termodinamika (dS ≥ 0) menegaskan entropi alam semesta selalu meningkat. Proses energi berakhir pada disolusi termal total."
    }
  ],
  "energi-listrik": [
    {
      title: "1. Beda Potensial Tegangan (V)",
      content: "Selisih usaha energi potensial elektrostatik per satuan muatan antara dua titik di kutub arus, bertindak sebagai pendorong laju arus.",
      verseRef: "Q.S. Al-Baqarah [2]: 22",
      verseArabic: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً",
      verseLatin: "Alladhī ja'ala lakumul-ardha firāsyaw was-samā'a binā'aw wa anzala...",
      verseTranslation: "Dialah yang menjadikan bumi sebagai hamparan bagimu, langit sebagai atap, dan Dia menurunkan air dari langit...",
      tafsirUlama: "Penurunan hujan disertai kilat halilintar yang melompat akibat beda potensial petir awan ke hamparan tanah bumi.",
      penjelasanFisika: "Beda potensial V = ΔU/q membebaskan muatan berpindah. Kilat petir dipicu kegagalan dielektrik udara saat beda potensial melebihi 3 MV/m."
    },
    {
      title: "2. Kuat Arus Aliran Elektron (I)",
      content: "Laju transportasi muatan listrik melintasi penampang sirkuit kabel per satuan detik (I = dQ/dt) akibat dorongan tegangan potensial.",
      verseRef: "Q.S. Kahf [18]: 96",
      verseArabic: "حَتَّىٰ إِذَا جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا",
      verseLatin: "Hattā idhā ja'alahū nāran qāla ātūnī ufrigh 'alayhi qitrā.",
      verseTranslation: "Hingga ketika besi itu sudah menjadi merah seperti api, dia berkata: 'Berilah aku tembaga/timbel cair untuk kutuangkan di atasnya'...",
      tafsirUlama: "Tembaga (qitr) cair bertindak mengisi celah potongan besi membentuk logam paduan tangguh penghantar energi listrik terbaik dunia.",
      penjelasanFisika: "Aliran elektron melahirkan kuat arus I = v_d·n·q·A. Tembaga merupakan material konduktor terbaik berkat densitas elektron bebas tinggi."
    },
    {
      title: "3. Hambatan Disipasi Ohm (R)",
      content: "Resistansi kawat kawat terhadap hantaran muatan elektron, melahirkan energi panas terbuang (disipasi kalor Joule: P = I² · R).",
      verseRef: "Q.S. An-Najm [53]: 14",
      verseArabic: "عِنْدَ سِدْرَةِ الْمُنْتَهَىٰ",
      verseLatin: "Inda sidratil muntahā.",
      verseTranslation: "Di Sidratul Muntaha (pohon batas tempat pemberhentian).",
      tafsirUlama: "Sebuah batas (Muntaha) yang melambangkan sekat pembatas perjalanan spiritual makhluk, tidak ada satu jiwa pun melampauinya.",
      penjelasanFisika: "Hambatan R = ρ·L/A merupakan gesekan penghambat jalannya laju elektron, melahirkan disipasi panas Joule tak-balik di sekeliling material."
    },
    {
      title: "4. Kapasitor Medan Elektrostatik",
      content: "Komponen dwi-keping sejajar penyimpan sirkuit muatan listrik sementara waktu dalam bentuk kerapatan medan gaya listrik statis.",
      verseRef: "Q.S. At-Tur [52]: 44",
      verseArabic: "وَإِنْ يَرَوْا كِسْفًا مِنَ السَّمَاءِ سَاقِطًا يَقُولُوا سَحَابٌ مَرْكُومٌ",
      verseLatin: "Wa iy yaraw kisfam minas-samā'i sāqitay yaqūlū sahābum markūm.",
      verseTranslation: "Dan jika mereka melihat gumpalan awan jatuh dari langit, mereka akan berkata: 'Ini hanyalah awan bertumpuk-tumpuk'.",
      tafsirUlama: "Tumpukan awan dipisahkan muatan dielektrik potensial tinggi layaknya kapasitor raksasa kosmis penyimpan bahaya badai.",
      penjelasanFisika: "Kapasitansi kapasitor keping sejajar dirumuskan C = ε₀A/d, menahan muatan listrik statis dalam bentuk kerapatan energi fisis Ue = ½CV²."
    },
    {
      title: "5. Hukum Induksi Elektromagnetik",
      content: "Prinsip Faraday-Lenz yang menyatakan fluktuasi medan magnet kumparan kawat akan menginduksi gaya gerak listrik (GGL) pemicu arus dinamis.",
      verseRef: "Q.S. Al-An'am [6]: 125",
      verseArabic: "يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ",
      verseLatin: "Yaj'al sadrahū dhayyiqan harajan ka-annamā yassa''adu fis-samā'...",
      verseTranslation: "Dia menjadikan dadanya sempit lagi sesak, seolah-olah dia sedang mendaki ke langit...",
      tafsirUlama: "Pendakian atmosfer menurunkan tekanan udara dan induksi oksigen secara ekponensial menyesakkan pernapasan manusia.",
      penjelasanFisika: "Arus induksi timbul dari fluks magnetik dinamis dΦ/dt. Hukum Lenz menyatakan arah GGL induksi (ε = -N·dΦ/dt) selalu membalik efek pemicunya."
    }
  ],
  "energi-kimia": [
    {
      title: "1. Entalpi Ikatan Kovalen Ikatan",
      content: "Energi ikat murni yang tersimpan dalam pemakaian bersama pasangan kelopak terluar elektron atom (valensi) logam.",
      verseRef: "Q.S. Az-Zariyat [51]: 49",
      verseArabic: "وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ",
      verseLatin: "Wa min kulli syay'in khalaqnā zawjayni la'allakum tadhakkarūn.",
      verseTranslation: "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).",
      tafsirUlama: "Ayat berpasangan mencakup polaritas muatan positif-negatif, proton-elektron, yang membentuk formasi senyawa kimia di alam raya.",
      penjelasanFisika: "Ikatan kovalen terbentuk dari pemakaian bersama pasangan elektron terluar dua atom non-metal agar mencapai konfigurasi gas mulia stabil."
    },
    {
      title: "2. Entalpi Reaksi Eksotermis",
      content: "Reaksi kimia pembakaran yang melepas energi panas kalor ke lingkungan sekitar karena entalpi reaktan melebihi entalpi produk.",
      verseRef: "Q.S. Yasin [36]: 80",
      verseArabic: "الَّذِي جَعَلَ لَكُمْ مِنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنْتُمْ مِنْهُ تُوقِدُونَ",
      verseLatin: "Alladhī ja'ala lakum minasy-syajaril-akhdhari nāran fa idhā antum minhu tūqidūn.",
      verseTranslation: "Yaitu (Allah) yang menjadikan api untukmu dari kayu yang hijau, maka seketika itu kamu menyalakan api dari kayu itu.",
      tafsirUlama: "Proses biologis klorofil merubah energi surya menjadi rantai karbon organik kering pada ranting kayu hijau yang seketika dapat dibakar kayu.",
      penjelasanFisika: "Reaksi pembakaran selulosa (C₆H₁₀O₅)_n merupakan reaksi eksotermik (ΔH < 0), melepaskan entalpi ikatan menjadi energi termal murni."
    },
    {
      title: "3. Energi Aktivasi Penghalang",
      content: "Batas ambang energi kinetik minimum yang harus dilampaui agar tumbukan molekul memicu pemutusan ikatan kimia awal.",
      verseRef: "Q.S. Al-Kahf [18]: 39",
      verseArabic: "وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
      verseLatin: "Walowlā idh dakhalta jannataka qulta mā syā'allāhu lā quwwata illā billāh...",
      verseTranslation: "Dan mengapa kamu tidak mengucapkan tatkala kamu masuk kebunmu: 'Masya Allah, la quwwata illa billah'...",
      tafsirUlama: "Ambang rintangan kebun buah tumbuh subur memerlukan stimulus air dan usaha keras pemilik kebun melompati rintangan kegagalan panen.",
      penjelasanFisika: "Menurut Teori Tumbukan, reaksi kimia berlangsung jika energi kinetik interaksi partikel melebihi batas penghalang Energi Aktivasi Ea."
    },
    {
      title: "4. Elektrolisis Sel Elektrokimia",
      content: "Proses konversi aliran arus listrik searah (DC) menjadi reaksi oksidasi-reduksi kimia non-spontan pada cairan pelarut elektrolit.",
      verseRef: "Q.S. Al-Waqi'ah [56]: 68-70",
      verseArabic: "أَفَرَأَيْتُمُ الْمَاءَ الَّذِي تَشْرَبُونَ أَأَنْتُمْ أَنْزَلْتُمُوهُ مِنَ الْمُزْنِ",
      verseLatin: "Afa-ra'aytumul-mā'alladhī tasyrabūn, a-antum anzaltumūhu minal-muzni...",
      verseTranslation: "Pernahkah kamu memperhatikan air yang kamu minum? Kamukah yang menurunkannya dari awan ataukah Kami yang menurunkannya?...",
      tafsirUlama: "Molekul air asin laut dapat dimurnikan dan dipisah unsur penyusun hidrogen oksigennya sebagai berkah rekayasa sains anugrah tuhan.",
      penjelasanFisika: "Elektrolisis air (2H₂O → 2H₂ + O₂) mengalirkan arus listrik searah melintasi elektroda, mereduksi ion H+ dan mengoksidasi ion OH-."
    },
    {
      title: "5. Pembakaran Hidrokarbon Bersih",
      content: "Oksidasi termogenik senyawa hidrokarbon menggunakan oksigen melahirkan panas murni, uap air (H₂O), dan gas karbon dioksida.",
      verseRef: "Q.S. Al-A'raf [7]: 56",
      verseArabic: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا",
      verseLatin: "Wa lā tufsidū fil-ardhi ba'da ishlāhihā wad'ūhu khowfaw wa thoma'ā...",
      verseTranslation: "Dan janganlah kamu membuat kerusakan di muka bumi, sesudah Allah memperbaikinya, dan berdoalah kepada-Nya dengan rasa takut...",
      tafsirUlama: "Mencegah fasad (kerusakan lingkungan) akibat limbah asap hitam pembakaran kotor batubara; dianjurkan beralih pada pembakaran gas bersih.",
      penjelasanFisika: "Reaksi stoikiometri pembakaran hidrokarbon bersih (C_nH_2n+2 + XO₂ → NCO₂ + MH₂O) menekan terbentuknya jelaga asap karbon monoksida beracun."
    }
  ],
  "energi-bunyi": [
    {
      title: "1. Amplitudo Kerapatan Tekanan",
      content: "Ukuran deviasi tekanan udara gelombang akustik dari kesetimbangan lurus, menentukan derajat intensitas keras-lemah desibel suara.",
      verseRef: "Q.S. Luqman [31]: 19",
      verseArabic: "وَاقْصِدْ فِي مَشْيِكَ وَاغْضُضْ مِنْ صَوْتِكَ ۚ إِنَّ أَنْكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ",
      verseLatin: "Waqsid fī masy-yika waghdhudh min sowtik, inna ankaral-aswāti lasowtul-hamīr.",
      verseTranslation: "...dan lunakkanlah suaramu. Sesungguhnya seburuk-buruk suara ialah suara keledai.",
      tafsirUlama: "Anjuran memperhalus intonasi bicara agar tidak menusuk telinga orang lain; dilarang keras berteriak membabi buta tanpa faedah.",
      penjelasanFisika: "Tingkat Intensitas Bunyi dirumuskan β = 10 log(I/I₀) desibel. Keras suara sebanding kuadrat amplitudo tekanan gelombang akustik udara."
    },
    {
      title: "2. Frekuensi Getar Akustik (f)",
      content: "Intensitas getaran rambat per detik penentu tinggi rendah nada bunyi, terbagi menjadi wilayah infrasonik, audiosonik, dan ultrasonik.",
      verseRef: "Q.S. Al-Mu'minun [23]: 78",
      verseArabic: "وَهُوَ الَّذِي أَنْشَأَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۚ قَلِيلًا مَا تَشْكُرُونَ",
      verseLatin: "Wa huwalladhī ansya'a lakumus-sam'a wal-absyāra wal-af'idah, qalīlam mā tasykurūn.",
      verseTranslation: "Dan Dialah yang telah menciptakan bagi kamu pendengaran, penglihatan, dan hati nurani. Sedikit sekali kamu bersyukur.",
      tafsirUlama: "Pendengaran (sam'a) diposisikan pertama sebagai indrawi vital penyerap getaran merdu lantunan kalam ilahi secara spiritual.",
      penjelasanFisika: "Telinga manusia normal beroperasi terbatas pada rentang frekuensi audiosonik (20 Hz hingga 20.000 Hz) akibat sasis mekanis koklea."
    },
    {
      title: "3. Kecepatan Rambat Zat Padat Cair",
      content: "Kelajuan transmisi energi mekanik longitudinal suara bergantung pada sifat kerapatan massa jenuh dan derajat elastisitas medium bulk.",
      verseRef: "Q.S. Saba [34]: 10",
      verseArabic: "وَلَقَدْ آتَيْنَا دَاوُدَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ",
      verseLatin: "Wa laqad ātaynā Dāwūda minnā fadhlan yā jibālu awwibī ma'ahū wat-toyra wa alannā...",
      verseTranslation: "Dan sungguh, Telah Kami berikan kepada Daud karunia dari Kami. 'Wahai gunung-gunung dan burung-burung, bertasbihlah berulang-ulang bersama Daud', dan Kami telah melunakkan besi untuknya.",
      tafsirUlama: "Gema tasbih Daud bergetar merambat di batuan gunung berstruktur padat berpadu gema akustik yang lantang melintasi lembah daratan.",
      penjelasanFisika: "Cepat rambat suara v = √ (Y/ρ). Zat padat besi tembaga menghantarkan suara 15 kali lebih cepat dibanding udara berkat kepadatan elastis partikel."
    },
    {
      title: "4. Resonansi Selaras Frekuensi",
      content: "Fenomena ikut bergetarnya suatu materi akibat dipicu oleh gelombang bunyi eksternal yang frekuensi getarnya bersesuaian.",
      verseRef: "Q.S. Al-Haqqah [69]: 13",
      verseArabic: "فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ",
      verseLatin: "Fa idhā nufikha fis-sūri nafkhatuw wāhidah.",
      verseTranslation: "Maka apabila sangkakala ditiup sekali tiupan.",
      tafsirUlama: "Guncangan maut ditiupnya sangkakala Malaikat Israfil meluluhlantahkan seisi jagad raya lewat rambatan resonansi hancur kosmik.",
      penjelasanFisika: "Resonansi terjadi saat f_pemicu = f_alami. Energi transfer bertambah maksimal, mampu memutus ikatan struktur bangunan semen batu rapuh."
    },
    {
      title: "5. Kompresi Udara Longitudinal",
      content: "Rambatan rapatan mampatan dan renggangan fasa medium partikel udara sejajar arah gerak rambat laju gelombang suara.",
      verseRef: "Q.S. Qaf [50]: 42",
      verseArabic: "يَوْمَ يَسْمَعُونَ الصَّيْحَةَ بِالْحَقِّ ۚ ذَٰلِكَ يَوْمُ الْخُرُوجِ",
      verseLatin: "Yowma yasma'ūnas-soyhata bil-haqqi dhālika yowmul-khurūj.",
      verseTranslation: "(Yaitu) pada hari mereka mendengar teriakan dengan sebenar-benarnya. Itulah hari keluar (dari kubur).",
      tafsirUlama: "Gelombang kejut pekikan (Sayhah) dasyat bertindak merambat cepat menggerakkan molekul sel hancur bangkit.",
      penjelasanFisika: "Gelombang longitudinal mentransmisikan energi melalui kompresi mampatan densed (rapatan) dan ekspansi renggangan gas keping udara."
    }
  ],
  "energi-cahaya": [
    {
      title: "1. Teori Foton & Paket Kuanta (E = h · f)",
      content: "Dualitas cahaya sebagai paket kuanta foton yang membawa energi momentum tanpa massa istirahat konvensional.",
      verseRef: "Q.S. An-Nur [24]: 35",
      verseArabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
      verseLatin: "Allāhu nūrus-samāwāti wal-ardhi, mathalu nūrihī kamisykātin fīhā misbāh...",
      verseTranslation: "Allah (pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya-Nya seperti lubang yang tidak tembus yang di dalamnya ada pelita besar...",
      tafsirUlama: "Nur ilahi menyinari seluruh alam, diilustrasikan bertingkat seperti sumber pelita kaca jernih penghasil kuanta sinar benderang.",
      penjelasanFisika: "Teori Kuantum Planck menyatakan foton membawa paket energi diskret E = hf, menjelaskan interaksi mikro penyerapan sinar materi."
    },
    {
      title: "2. Gelombang Elektromagnetik Transversal",
      content: "Medan listrik dan medan magnet berosilasi tegak lurus meluncur melintasi ruang hampa pada kelajuan konstan c.",
      verseRef: "Q.S. Az-Zumar [39]: 69",
      verseArabic: "وَأَشْرَقَتِ الْأَرْضُ بِنُورِ رَبِّهَا وَوُضِعَ الْكِتَابُ",
      verseLatin: "Wa asyraqatil-ardhu binūri rabbihā wa wudhi'al-kitābu...",
      verseTranslation: "Dan terang benderanglah bumi dengan cahaya Tuhannya, dan diberikanlah buku catatan (amal)...",
      tafsirUlama: "Cahaya tuhan menyinari seisi bumi mengheradikasikan selimut kegelapan fisis dan moral yang menyelimuti peradaban manusia.",
      penjelasanFisika: "Cahaya melesat sebagai gelombang transversal transversal konstan c = 299.792.458 m/s hampa, mengacu persamaan Maxwell homogen."
    },
    {
      title: "3. Spektrum Warna Panjang Gelombang",
      content: "Rentang gelombang optik tampak mulai dari merah (λ panjang) mendaki hingga ungu (λ pendek membawa energi termaksimal).",
      verseRef: "Q.S. Al-Inshiqaq [84]: 16",
      verseArabic: "فَلَا أُقْسِمُ بِالشَّفَقِ",
      verseLatin: "Falā uqsimu bisy-syafaq.",
      verseTranslation: "Maka Aku bersumpah demi cahaya merah di waktu senja.",
      tafsirUlama: "Cahaya merah (Syafaq) senja melambangkan selang transisi pembiasan spektrum surya terpanjang menghias cakrawala langit.",
      penjelasanFisika: "Fenomena warna langit kemerahan di senja hari diatur Hamburan Rayleigh, di mana foton gelombang ungu-biru tersebar hebat dan menyisakan merah."
    },
    {
      title: "4. Pembiasan Indeks Medium (Refraksi)",
      content: "Pembelokan arah laju cahaya saat melintas miring menuju medium lain akibat perubahan kelajuan optis relatif bahan.",
      verseRef: "Q.S. An-Nur [24]: 39",
      verseArabic: "وَالَّذِينَ كَفَرُوا أَعْمَالُهُمْ كَسَرَابٍ بِقِيعَةٍ يَحْسَبُهُ الظَّمْآنُ مَاءً",
      verseLatin: "Walladhīna kafarū a'māluhum kasarābim biqī'atiy yahsabuhudh-dham'ānu mā'ā...",
      verseTranslation: "Dan orang-orang kafir, amal perbuatan mereka laksana fatamorgana di tanah yang datar, yang disangka air oleh orang-orang yang dahaga...",
      tafsirUlama: "Fatamorgana (Sarab) timbul akibat ilusi optik pembiasan cahaya udara panas gurun pasir membodohi pelintas jalan.",
      penjelasanFisika: "Hukum Snellius (n₁ sin θ₁ = n₂ sin θ₂) merumuskan refraksi cahaya akibat transisi cepat rambat optik saat melintasi lapisan temperatur udara padat."
    },
    {
      title: "5. Efek Tekanan Radiasi Foton",
      content: "Gaya dorong mekanis mikro yang dialami suatu bidang cermin akibat tumbukan pemantulan foton cahaya surya.",
      verseRef: "Q.S. Yusuf [12]: 96",
      verseArabic: "فَلَمَّا أَنْ جَاءَ الْبَشِيرُ أَلْقَاهُ عَلَىٰ وَجْهِهِ فَارْتَدَّ بَصِيرًا",
      verseLatin: "Falammā an jā'al-bas yīru alqāhu 'alā wajhihī fartadda basīrā...",
      verseTranslation: "Tatkala telah datang pembawa kabar gembira itu, maka diletakkannya baju gamis itu ke wajah Yusuf, lalu seteleh itu dia dapat melihat kembali...",
      tafsirUlama: "Pemulihan mata Yakub diilustrasikan laksana rangsangan foton sinar benderang menyapu retina mengaktifkan penglihatan matinya.",
      penjelasanFisika: "Foton membawa momentum p = E/c. Jika menyentuh permukaan, pancaran surya menerapkan tekanan radiasi P_rad = (1+R)I/c pemicu desak layang."
    }
  ],
  "energi-nuklir": [
    {
      title: "1. Defek Massa & Energi Ikat ($E = \\Delta m · c^2$)",
      content: "Hilangnya selisih massa penyusun nukleon (proton-neutron) saat menyatu, menjelma energi ikat perekat sasis inti atom kokoh.",
      verseRef: "Q.S. Yunus [10]: 61",
      verseArabic: "وَمَا يَعْزُبُ عَنْ رَبِّكَ مِنْ مِثْقَالِ ذَرَّةٍ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
      verseLatin: "Wa mā ya'zubu 'an rabbika mim mithqāli dharratin fil-ardhi wa lā fis-samā'...",
      verseTranslation: "...dan tidak luput dari pengetahuan Tuhanmu biarpun sebesar zarrah (atom) di bumi ataupun di langit...",
      tafsirUlama: "Zarrah ditafsirkan ulama kontemporer sebagai unit penyusun atomik terdalam yang menyimpan massa dan rahasia rancang bangun kosmik tuhan.",
      penjelasanFisika: "Rumus Einstein (E = Δm·c²) membuktikan konversi cacat massa inti Δm menjadi energi pengikat proton-neutron dari tolakan Coulomb."
    },
    {
      title: "2. Fisi Pembelahan Berantai",
      content: "Pemecahan inti berat tidak stabil oleh neutron lambat menjadi inti ringan baru dengan pelepasan energi kalor ekstrem.",
      verseRef: "Q.S. Al-An'am [6]: 95",
      verseArabic: "إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ ۖ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ",
      verseLatin: "Innallāha fāliqul-habbi wan-nawā, yukhrijul-hayya minal-mayyit...",
      verseTranslation: "Sesungguhnya Allah yang membelah butir tumbuh-tumbuhan dan biji buah-buahan. Dia mengeluarkan yang hidup dari yang mati...",
      tafsirUlama: "Kata 'Nawa' secara mengejutkan dalam kosakata Arab modern berarti inti sel atau inti atom (nucleus). Pembelahan (faliq) bermakna proses fisi inti atom.",
      penjelasanFisika: "Reaksi fisi berantai U-235 memecah inti setelah ditumbuk neutron termal, melahirkan Ba-141 dan Kr-92 disertai pembelasan 3 neutron ggl dinamis."
    },
    {
      title: "3. Fusi Termonuklir Panas Bintang",
      content: "Penyatuan dua inti hidrogen ringan menjadi helium pada kondisi suhu-tekanan ultra ekstrem di inti matahari bintang.",
      verseRef: "Q.S. Yasin [36]: 38",
      verseArabic: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَهَا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ",
      verseLatin: "Wasy-syamsu tajrī limustaqarril lahā, dhālika taqdīrul-'Azīzil-'Alīm.",
      verseTranslation: "Dan matahari berjalan di tempat peredarannya. Demikianlah ketetapan Yang Maha Perkasa lagi Maha Mengetahui.",
      tafsirUlama: "Matahari bersinar berdasar ketetapan 'Taqdir' kosmis tatasurya, menyala tanpa bahan bakar konvensional berkat reaktor gas internalnya.",
      penjelasanFisika: "Siklus rantai proton-proton fusi di inti matahari menggabungkan hidrogen menjadi helium-4, melepaskan energi bersih Q = 26,7 MeV konstan."
    },
    {
      title: "4. Gaya Nuklir Kuat Pengikat",
      content: "Gaya interaksi fundamental jarak pendek yang menyatukan proton-neutron melawan tolakan elektrostatik Coulomb.",
      verseRef: "Q.S. Al-Insyirah [94]: 2-3",
      verseArabic: "وَوَضَعْنَا عَنْكَ وِزْرَكَ الَّذِي أَنْقَضَ ظَهْرَكَ",
      verseLatin: "Wa wadha'nā 'anka wizrakalladhī anqadha zzahrak...",
      verseTranslation: "Dan Kami telah menggugurkan darimu bebanmu, yang memberatkan punggungmu...",
      tafsirUlama: "Beban berat yang menekan pundak diringankan tuhan; diibaratkan gaya ikat kuat yang mengalahkan beban tolakan proton dalam rongga sempit.",
      penjelasanFisika: "Gaya nuklir kuat dimediasi gluon melintasi kuark, memiliki kekuatan 100 kali gaya elektrostatik, menahan nukleon tetap mampat murni."
    },
    {
      title: "5. Waktu Paruh Peluruhan Radioaktif",
      content: "Waktu wajib bagi separuh jumlah sampel inti radioaktif tidak stabil meluruh secara eksponensial melepaskan radiasi.",
      verseRef: "Q.S. Al-Furqan [25]: 2",
      verseArabic: "الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ... وَخَلَقَ كُلَّ شَيْءٍ فَقَدَّرَهُ تَقْدِيرًا",
      verseLatin: "Alladhī lahū mulkus-samāwāti wal-ardhi... wa khalaqa kulla syay'in faqaddarahū taqdīrā.",
      verseTranslation: "...yang kepemilikan-Nya di langit dan bumi... dan Dia menciptakan segala sesuatu, lalu menetapkan ukuran-ukurannya dengan sangat rapi.",
      tafsirUlama: "Peluruhan material radioaktif diatur oleh ketetapan peluang (probabilitas) konstan yang sangat presisi seiring berjalannya poros waktu.",
      penjelasanFisika: "Hukum Peluruhan Radioaktif N(t) = N₀e^(-λt). Waktu paruh T_½ = ln(2)/λ memberikan ukuran pasti umur fosil purba geologi."
    }
  ],
  "energi-angin": [
    {
      title: "1. Sapuan Luas Turbin Baling-Baling",
      content: "Hambatan penangkap angin berbanding jari-jari kuadrat baling. Menentukan luasan volume tangkapan energi angin efektif.",
      verseRef: "Q.S. Sad [38]: 36",
      verseArabic: "فَسَخَّرْنَا لَهُ الرِّيحَ تَجْرِي بِأَمْرِهِ رُخَاءً حَيْثُ أَصَابَ",
      verseLatin: "Fasakh-kharnā lahur-rīha tajrī bi-amrihī rukhā'an haytsu asāb.",
      verseTranslation: "Kemudian Kami tundukkan kepadanya angin yang berhembus dengan baik menurut perintahnya ke mana saja yang dikehendakinya.",
      tafsirUlama: "Angin ditundukkan tuhan kepada Sulaiman untuk menggerakkan armada layarnya secara dinamis melintasi kepulauan samudra.",
      penjelasanFisika: "Daya maksimum terdistribusi angin P = ½·ρ·A·v³ sebanding dengan sapuan luas lingkaran penampang bilah kipas baling-baling A = πR²."
    },
    {
      title: "2. Batas Kritis Efisiensi Betz (~59.3%)",
      content: "Batas limit matematis ideal ekstraksi energi kinetik dari angin oleh kincir angin; tidak mungkin mengonversi angin melampaui angka ini.",
      verseRef: "Q.S. Al-Balad [90]: 4",
      verseArabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي كَبَدٍ",
      verseLatin: "Laqad khalaqnal-insāna fī kabad.",
      verseTranslation: "Sungguh, Kami telah menciptakan manusia berada dalam susah payah (batas keterbatasan).",
      tafsirUlama: "Keterbatasan eksistensi manusia disandingkan hukum alam fisis sains yang memiliki tapas batas efisiensi rekayasa mesin.",
      penjelasanFisika: "Hukum Albert Betz (1919) membuktikan efisiensi maksimum teoretis ekstraktor angin bernilai 16/27 (≈ 59.3%) akibat sisa momentum kinetik udara lepas."
    },
    {
      title: "3. Gaya Angkat Bernoulli (Lift Force)",
      content: "Selisih kecepatan aliran udara di sisi atas-bawah sayap bilah yang memicu perbedaan desakan gaya dorong putar kincir.",
      verseRef: "Q.S. Fatir [35]: 1",
      verseArabic: "الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ",
      verseLatin: "Alhamdu lillāhi fātiris-samāwāti wal-ardhi jā'ilil-malā'ikati rusulan ulī ajnihah...",
      verseTranslation: "Segala puji bagi Allah Pencipta langit dan bumi, yang menjadikan malaikat sebagai utusan-utusan yang mempunyai sayap-sayap...",
      tafsirUlama: "Sayap (ajnihah) dirancang khusus sebagai struktur aerodinamis penangkap hembusan udara demi menopang kestabilan gaya terbang.",
      penjelasanFisika: "Perbedaan kecepatan udara di lengkungan sayap melahirkan selisih tekanan hidrostatik pendorong gaya angkat Bernoulli F_lift = ½·ρ·v²·Cl·A."
    },
    {
      title: "4. Gradien Gesek Permukaan Tanah",
      content: "Perubahan kecepatan hembus angin udara terhadap elevasi ketinggian akibat hambatan batuan permukaan daratan.",
      verseRef: "Q.S. Al-Hijr [15]: 22",
      verseArabic: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً",
      verseLatin: "Wa arsalnar-riyāha lawāqiha fa anzalnā minas-samā'i mā'an...",
      verseTranslation: "Dan Kami telah meniupkan angin untuk mengawinkan (tumbuh-tumbuhan) dan Kami turunkan hujan dari langit...",
      tafsirUlama: "Angin menyapu permukaan tumbuhan rendah, membawa serbuk sari bergesekan dengan vegetasi tanah perintis ekosistem hijau.",
      penjelasanFisika: "Profil kecepatan angin logaritmik v(z) = v_ref·ln(z/z₀)/ln(z_ref/z₀) dipicu gesekan struktural permukaan kasar bumi (parameter kasar z₀)."
    },
    {
      title: "5. Pusaran Angin Efek Coriolis",
      content: "Pembelokan arah angin global bumi melingkar akibat efek gaya fiktif dinamika rotasi bola bumi terhadap sirkulasi.",
      verseRef: "Q.S. Al-Jasiyah [45]: 5",
      verseArabic: "وَتَصْرِيفِ الرِّيَاحِ وَمَا أَنْزَلَ اللَّهُ مِنَ السَّمَاءِ مِنْ رِزْقٍ",
      verseLatin: "Wa tasrīfir-riyāhi wa mā anzalallāhu minas-samā'i mir rizqin...",
      verseTranslation: "Dan pada perkisaran angin dan rezeki yang diturunkan Allah dari langit...",
      tafsirUlama: "Sirkulasi angin (Tasrif) diputar ke utara-selatan khatulistiwa, menghadirkan pembagian musim basah kering yang teratur.",
      penjelasanFisika: "Gaya Coriolis F_cor = -2m(ω × v) membelokkan angin ke kanan di belahan utara dan kiri di belahan selatan bumi memutar badai."
    }
  ],
  "energi-air": [
    {
      title: "1. Kapasitas Tekanan Kepala (Head Hidrolik)",
      content: "Beda ketinggian elevasi vertikal cairan penentu besar dorongan tekanan hidrostatik zat cair ke bilah sudu turbin.",
      verseRef: "Q.S. Gafir [40]: 64",
      verseArabic: "اللَّهُ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ قَرَارًا وَالسَّمَاءَ بِنَاءً",
      verseLatin: "Allāhulladhī ja'ala lakumul-ardha qarāraw was-samā'a binā'a...",
      verseTranslation: "Allah-lah yang menjadikan bumi tempat menetap bagimu dan langit sebagai atap...",
      tafsirUlama: "Bumi dirancang stabil agar genangan waduk air raksasa dapat menetap tenang menanti disalurkan ke wilayah turbin pembangkit.",
      penjelasanFisika: "Tekanan hidrostatik P = ρ·g·h sebanding ketinggian jatuh head air (h), mengubah energi potensial air menjadi pancaran desakan pancar."
    },
    {
      title: "2. Debit Aliran Volume Fluida ($Q = A · v$)",
      content: "Laju transportasi kubikasi volume air per detik melintasi corong pipa penstock bendungan hidroelektrik.",
      verseRef: "Q.S. Ar-Ra'd [13]: 17",
      verseArabic: "أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَسَالَتْ أَوْدِيَةٌ بِقَدَرِهَا فَاحْتَمَلَ السَّيْلُ",
      verseLatin: "Anzala minas-samā'i mā'an fasālat awdiyatumb biqadarihā fahtamalas-saylu...",
      verseTranslation: "Allah telah menurunkan air (hujan) dari langit, maka mengalirlah air di lembah-lembah menurut ukurannya, maka arus itu membawa buih yang mengambang...",
      tafsirUlama: "Kata 'Biqadariha' menunjukkan aliran sungai didesain membawa debit air dengan takaran kapasitas volume aman penawar banjir.",
      penjelasanFisika: "Debit Q = dV/dt = A·v mematuhi Asas Kontinuitas, menjamin kelestarian laju massa fluida di sepanjang sirkuit penyempitan pipa baja."
    },
    {
      title: "3. Hukum Bernoulli Aliran",
      content: "Formulasi kekekalan energi aliran fluida sebanding totalitas penjumlahan tekanan hidrolik, energi kinetik aliran, dan posisi vertikal.",
      verseRef: "Q.S. Al-Furqan [25]: 53",
      verseArabic: "وَهُوَ الَّذِي مَرَجَ الْبَحْرَيْنِ هَٰذَا عَذْبٌ فُرَاتٌ وَهَٰذَا مِلْحٌ أُجَاجٌ",
      verseLatin: "Wa huwalladhī marajal-bahrayni hādhā 'adhbun furātuw wa hādhā milhun ujāj...",
      verseTranslation: "Dan Dialah yang membiarkan dua laut mengalir berdampingan; yang ini tawar lagi segar dan yang lain asin lagi pahit...",
      tafsirUlama: "Pertemuan fluida berbeda salinitas mengalir seimbang tanpa bercampur kacau berkat perbedaan tekanan hidrolik alirannya.",
      penjelasanFisika: "Persamaan Bernoulli (P + ½ρv² + ρgh = konstan) membuktikan korelasi timbal-balik tekanan aliran fluida terhadap kelajuan alirnya."
    },
    {
      title: "4. Hambatan Viskositas Fluida Pipa",
      content: "Gesekan geser internal antar lapisan zat cair yang memicu rugi-daya tekanan di sepanjang kawat pipa.",
      verseRef: "Q.S. Al-An'am [6]: 59",
      verseArabic: "وَمَا تَسْقُطُ مِنْ وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ",
      verseLatin: "Wa mā tasqutu miw waraqatin illā ya'lamuhā wa lā habbatin fī dhulumāt...",
      verseTranslation: "Dan tidak jatuh selembar daun pun melainkan Dia mengetahuinya (dan tidak jatuh) sebutir biji pun dalam kegelapan bumi...",
      tafsirUlama: "Gesekan daun jatuh dan rintangan batuan sungai jenuh diatur dalam khazanah pengawasan sunnatullah peredam kekacauan air.",
      penjelasanFisika: "Hambatan viskositas dihitung Hukum Hagen-Poiseuille ΔP = 8μLQ/πR⁴. Viskositas fluida μ mencuri sebagian porsi tekanan kinetik air."
    },
    {
      title: "5. Transisi Aliran Laminar-Turbulen",
      content: "Fluktuasi pola air berdasarkan Bilangan Reynolds; pola turbulen melahirkan riak tak teratur yang mengikis bilah turbin.",
      verseRef: "Q.S. Al-Kahf [18]: 45",
      verseArabic: "وَاضْرِبْ لَهُمْ مَثَلَ الْحَيَاةِ الدُّنْيَا كَمَاءٍ أَنْزَلْنَاهُ مِنَ السَّمَاءِ فَاخْتَلَطَ بِهِ",
      verseLatin: "Wadhrib lahum mathalal-hayātid-dunyā kamā'in anzalnāhu minas-samā'i fakhtalatha bihī...",
      verseTranslation: "Dan buatlah untuk mereka perumpamaan kehidupan dunia ini, seperti air hujan yang Kami turunkan dari langit, maka menjadi subur karenanya...",
      tafsirUlama: "Campur baur kencang sisa tumpukan riak air hujan merupakan perumpamaan kekacauan hidup duniawi yang labil berkecamuk.",
      penjelasanFisika: "Transisi aliran dari tenang laminar melompat bergejolak turbulen terjadi kala Bilangan Reynolds Re = ρvD/μ melampaui batas kritis ~2300."
    }
  ],
  "energi-surya": [
    {
      title: "1. Eksitasi Elektron Efek Fotovoltaik",
      content: "Lompatan elektron melepaskan diri dari ikatan silikon akibat hantaman kuanta foton matahari, menumbuhkan arus searah listrik.",
      verseRef: "Q.S. Yunus [10]: 5",
      verseArabic: "هُوَ الَّذِي جَعَلَ الشَّمْسَ ضِيَاءً وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ",
      verseLatin: "Huwalladhī ja'alasy-syamsa dhiyā'aw wal-qamara nūrāw wa qaddarahū manāzila...",
      verseTranslation: "Dialah yang menjadikan matahari bersinar-sinar dan bulan bercahaya, dan Dialah yang menetapkan tempat-tempat orbitnya...",
      tafsirUlama: "Matahari memancarkan dhiyah (energi cahaya aktif mandiri) yang mampu bertindak memicu reaksi fisis seketika pada material silikon.",
      penjelasanFisika: "Efek Fotovoltaik dipicu penyerapan foton dengan energi hf > Eg. Pasangan elektron-lubang terpisah memicu medan potensial persambungan p-n."
    },
    {
      title: "2. Celah Pita Terlarang Semikonduktor (Bandgap)",
      content: "Kebutuhan tingkat energi minimum foton cahaya pembatas wilayah isolator melompat menjadi konduktor penghantar.",
      verseRef: "Q.S. Al-An'am [6]: 125",
      verseArabic: "يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ",
      verseLatin: "Yaj'al sadrahū dhayyiqan harajan ka-annamā yassa''adu fis-samā'...",
      verseTranslation: "Dia menjadikan dadanya sempit lagi sesak, seolah-olah dia sedang mendaki ke langit...",
      tafsirUlama: "Pendakian sasar ambang batas ketersediaan oksigen melambangkan batasan kritis energi loncat partikel transisi gas sempit.",
      penjelasanFisika: "Celah pita energi (Bandgap Eg) semen silikon kovalen bertindak mengisolasi elektron valensi melompat ke pita konduksi (Eg ≈ 1.1 eV)."
    },
    {
      title: "3. Konstanta Radiasi Matahari",
      content: "Intensitas daya foton matahari melintasi puncak luar atmosfer bumi konstan bernilai ~1367 Watt per meter persegi.",
      verseRef: "Q.S. Ar-Rahman [55]: 5",
      verseArabic: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
      verseLatin: "Asy-syamsu wal-qamaru bi husbān.",
      verseTranslation: "Matahari dan bulan (beredar) menurut perhitungan.",
      tafsirUlama: "Segala peredaran benda langit diikat regulasi perhitungan matematika (Husbān) maha teliti pemicu kestabilan pasokan energi global.",
      penjelasanFisika: "Konstanta Surya G_sc = σ·T⁴·(R_sun/D_earth)² ≈ 1367 W/m² dipelihara konstan berkat simetri pendaran fusi nuklir matahari."
    },
    {
      title: "4. Efisiensi Konversi Elektrik Sel",
      content: "Rasio keluaran kapasitas energi listrik murni sel surya silikon dibanding total daya pancar cahaya surya yang menyapu sel.",
      verseRef: "Q.S. At-Talaq [65]: 3",
      verseArabic: "قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
      verseLatin: "Qad ja'alallāhu likulli syay'in qadrā.",
      verseTranslation: "Sesungguhnya Allah telah mengadakan ketentuan bagi tiap-tiap sesuatu.",
      tafsirUlama: "Semua sistem rekayasa buatan makhluk dibatasi garis ketentuan hukum fisis fithrah tuhan yang melarang manipulasi efisiensi sempurna.",
      penjelasanFisika: "Batas teoritis efisiensi sel surya keping tunggal dirumuskan Batas Shockley-Queisser (~33.7%) akibat disipasi termis foton berenergi besar."
    },
    {
      title: "5. Hambatan Hamburan Atmosfer",
      content: "Penurunan konsentrasi pancaran foton surya akibat pemantulan dan penyerapan oleh uap air, ozon, dan aerosol debu udara.",
      verseRef: "Q.S. An-Naba [78]: 12",
      verseArabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا",
      verseLatin: "Wa banaynā fawqakum sab'an syidādā.",
      verseTranslation: "Dan Kami bangun di atas kamu tujuh buah (langit) yang kokoh.",
      tafsirUlama: "Tujuh lapisan atmosfer kokoh (Syidada) bertindak menyaring gelombang ultraviolet berbahaya agar tidak langsung melukai makhluk bumi.",
      penjelasanFisika: "Hambatan atmosferik (Massa Udara AM1.5) mendispersikan spektrum cahaya surya melalui hamburan Mie dan absorbsi gas H₂O dan CO₂."
    }
  ],
  "energi-biomassa": [
    {
      title: "1. Nilai Kalor Bawah (LCV vs HCV)",
      content: "Panas pembakaran bersih bahan organik kering tanpa menghitung energi laten uap kondensasi air sisa kimiawi.",
      verseRef: "Q.S. Abasa [80]: 27-28",
      verseArabic: "فَأَنْبَتْنَا فِيهَا حَبًّا وَعِنَبًا وَقَضْبًا",
      verseLatin: "Fa ambatnā fīhā habbaw wa 'inabaw wa qadhbā.",
      verseTranslation: "Lalu Kami tumbuhkan di sana biji-bijian, anggur dan sayur-sayuran.",
      tafsirUlama: "Toleransi pertumbuhan ranting basah penimbun selulosa organik yang siap dikeringkan demi penyediaan bahan bakar.",
      penjelasanFisika: "Lower Heating Value (LHV) dihitung dengan mengurangkan energi penguapan air dari Higher Heating Value (HHV) sisa gas buang pembakaran."
    },
    {
      title: "2. Pencernaan Anaerobik Bakteri Metanogen",
      content: "Perombakan biologi sisa limbah organik kotor tanpa oksigen menghasilkan gas metana pembakaran dan karbon dioksida.",
      verseRef: "Q.S. Al-An'am [6]: 141",
      verseArabic: "وَهُوَ الَّذِي أَنْشَأَ جَنَّاتٍ مَعْرُوشَاتٍ وَغَيْرَ مَعْرُوشَاتٍ",
      verseLatin: "Wa huwalladhī ansya'a jannātim ma'rūsyātiw wa ghayra ma'rūsyāt...",
      verseTranslation: "Dan Dialah yang menjadikan kebun-kebun yang menjalar dan yang tidak menjalar...",
      tafsirUlama: "Pembusukan daun-daun rontok di dasar tanah subur dikerjakan mikroba renik tanah penyedia humus penopang hayat kebun.",
      penjelasanFisika: "Bakteri metanogen memproses dekomposisi biomassa seluler melalui fase asidogenesis dan metanogenesis menghasilkan gas CH₄ terbakar."
    },
    {
      title: "3. Kandungan Kadar Air Kotoran",
      content: "Sifat pengencer nilai kalor potensial; biomassa basah membutuhkan energi evaporasi tinggi menurunkan efisiensi bakar.",
      verseRef: "Q.S. Al-An'am [6]: 99",
      verseArabic: "وَهُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ",
      verseLatin: "Wa huwalladhī anzala minas-samā'i mā'an fa-akhrajnā bihī nabāta kulli syay'...",
      verseTranslation: "Dan Dialah yang menurunkan air hujan dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan...",
      tafsirUlama: "Kandungan air hujan melimpah menghidupkan tanaman namun menyisakan kadar air internal tinggi pada ranting basah sisa pangkas.",
      penjelasanFisika: "Kadar air (Moisture Content MC_wet) merugikan efisiensi termal pembakaran langsung karena mencuri kalor laten penguapan air (2260 kJ/kg)."
    },
    {
      title: "4. Nisbah Rasio Karbon-Nitrogen (C/N)",
      content: "Rasio keseimbangan pakan kimiawi bakteri pembusuk anaerobik di dalam kubah digester reaktor pembiak biogas.",
      verseRef: "Q.S. Al-Hadid [57]: 25",
      verseArabic: "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنْزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ",
      verseLatin: "Laqad arsalnā rusulanā bil-bayyināti wa anzalnā ma'ahumul-kitāba wal-mīzān...",
      verseTranslation: "Sungguh, Kami telah mengutus rasul-rasul Kami dengan bukti-bukti yang nyata dan Kami turunkan bersama mereka Kitab dan Keadilan (Keseimbangan)...",
      tafsirUlama: "Tafsir Al-Misbah menekankan bahwa mizan (keadilan/keseimbangan) mengikat segala aspek interaksi fisis zat organik kimiawi.",
      penjelasanFisika: "Rasio optimal C/N untuk kelangsungan metabolisme bakteri anaerob reaktor biogas berkisar pada angka seimbang 25:1 hingga 30:1."
    },
    {
      title: "5. Gasifikasi Pirolisis Termal",
      content: "Pemanasan residu kayu jerami temperatur tinggi tanpa oksigen melahirkan arang aktif karbon dan synth-gas bahan bakar.",
      verseRef: "Q.S. Ibrahim [14]: 24",
      verseArabic: "أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّه_ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ",
      verseLatin: "Alam tara kayfa dharaballāhu mathalan kalimatan toyyibatan kasyajaratin toyyibah...",
      verseTranslation: "Tidakkah kamu memperhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya kokoh...",
      tafsirUlama: "Struktur batang pohon (Syajarah) menyimpan rantai karbon padu kokoh penimbun senyawa kimiawi berkepurnaan pembawa manfaat bahar.",
      penjelasanFisika: "Pirolisis merekatkan zat karbon pelet kayu suhu tinggi (>400°C) tanpa gas pembakar menghasilkan arang padat dan gas gas bio-oil."
    }
  ],
  "energi-geotermal": [
    {
      title: "1. Gradien Geotermal Mantel Bumi",
      content: "Laju lonjakan suhu lingkungan batuan bumi seiring pertambahan kedalaman sumur (rata-rata naik ~30 °C per km).",
      verseRef: "Q.S. Yasin [36]: 82",
      verseArabic: "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ",
      verseLatin: "Innamā amruhū idhā arāda syay'an ay yaqūla lahū kun fa-yakūn.",
      verseTranslation: "Sesungguhnya urusan-Nya apabila Dia menghendaki sesuatu hanyalah berkata kepadanya: 'Jadilah!' maka jadilah ia.",
      tafsirUlama: "Proses interior pembentukan magma panas bumi di bawah kerak bumi dipicu perintah kun fathan tuhan pemicu geodinamika mantel.",
      penjelasanFisika: "Gradien temperatur dT/dz diatur oleh persamaan konduksi panas satu dimensi Fourier, menghantarkan daya termis inti bumi ke batuan terluar."
    },
    {
      title: "2. Entalpi Spesifik Uap Jenuh ($h$)",
      content: "Derajat kandungan energi panas potensial total per kilogram uap fluida panas bumi pelopor putaran turbin elektrik.",
      verseRef: "Q.S. Al-Waqi'ah [56]: 42-43",
      verseArabic: "فِي سَمُومٍ وَحَمِيمٍ وَظِلٍّ مِنْ يَحْمُومٍ",
      verseLatin: "Fī samūmiw wa hamīm, wa dhillim miy yahmūm.",
      verseTranslation: "Dalam (siksaan) angin yang amat panas dan air yang mendidih, dan naungan asap yang hitam.",
      tafsirUlama: "Gambaran gas uap panas (Samum) mendidih bertekanan ekstrem mencerminkan potensi fisis uap air panas basah reservoar geothermal maut.",
      penjelasanFisika: "Uap jenuh kering (dry steam) membawa entalpi tinggi h ≈ 2800 kJ/kg mampu membentur pisau sudu turbin menghasilkan mekanis rotasi generator."
    },
    {
      title: "3. Struktur Batuan Tudung Kedap (Cap Rock)",
      content: "Lapisan lempung batuan padat kedap air bertugas menjebak uap air bertekanan menetap stabil di dalam reservoar alam.",
      verseRef: "Q.S. Al-Kahf [18]: 97",
      verseArabic: "فَمَا اسْطَاعُوا أَنْ يَظْهَرُوهُ وَمَا اسْتَطَاعُوا لَهُ نَقْبًا",
      verseLatin: "Famastā'ū ay yazhharūhu wa mastatā'ū lahū naqbā.",
      verseTranslation: "Maka mereka tidak dapat mendakinya dan tidak dapat (pula) melubanginya.",
      tafsirUlama: "Lapisan dinding pelindung tebal nan kedap perangkap desakan liar diisolasi tumpukan tanah mencegah runtuhnya stabilitas reservoar.",
      penjelasanFisika: "Batuan tudung (Cap Rock) memiliki permeabilitas hidrolik sangat rendah k ≈ 10⁻¹⁸ m², bertindak mengisolasi uap fluida bertekanan tinggi peningkat entalpi."
    },
    {
      title: "4. Permeabilitas Retakan Batuan Panas",
      content: "Konduktivitas hidrogeologi pori batu dalam mengalirkan uap/air panas dari cekungan reservoar kedalaman ke sumur bor.",
      verseRef: "Q.S. Al-Baqarah [2]: 74",
      verseArabic: "وَإِنَّ مِنَ الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْأَنْهَارُ ۚ وَإِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ الْمَاءُ",
      verseLatin: "Wa inna minal-hijārati lamā yatafajjaru minhul-anhār, wa inna minhā lamā yasy-yaqqaqu...",
      verseTranslation: "...dan di antaranya sungguh ada batuan yang memancar sungai-sungai daripadanya, dan di antaranya ada pula yang terbelah lalu keluarlah air daripadanya...",
      tafsirUlama: "Isyarat geologi batuan beku terbelah (terretak alami) yang mengalirkan air panas murni bersuhu tinggi melintasi gua bawah.",
      penjelasanFisika: "Hukum Darcy aliran fluida menyatakan Q = -k·A/μ · (dP/dx). Permeabilitas rekahan k mengontrol aliran uap panas keluar menuju sumur produksi."
    },
    {
      title: "5. Siklus Konveksi Magma Bawah",
      content: "Aliran konveksi sel magma tebal bawah kerak bumi menyalurkan panas radiogenik ke batuan beku terdekat sumur.",
      verseRef: "Q.S. At-Tur [52]: 6",
      verseArabic: "وَالْبَحْرِ الْمَسْجُورِ",
      verseLatin: "Wal-bahril-masjūr.",
      verseTranslation: "Dan laut yang di dalam tanahnya ada api.",
      tafsirUlama: "Samudra magma cair membara (Masjur) di bawah kerak samudera bumi mensirkulasikan energi termal geodinamis pembentuk kontinen secara megah.",
      penjelasanFisika: "Sirkulasi magma digerakkan bilangan Rayleigh termal tinggi Ra > Ra_crit, menghantarkan fluks bahang konvektif radiogenik hulu reservoar."
    }
  ]
};
