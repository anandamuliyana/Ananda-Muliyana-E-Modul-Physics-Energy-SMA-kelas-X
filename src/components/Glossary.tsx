import React, { useState } from "react";
import { GlossaryItem } from "../types";
import { Search, Filter, BookOpen, Bookmark } from "lucide-react";

export const glossaryTerms: GlossaryItem[] = [
  // FISIKA TERMS (approx 40+)
  { term: "Energi Kinetik", definition: "Energi yang dimiliki oleh suatu benda atau sistem fisis karena faktor gerak mekanik atau kecepatannya.", category: "Fisika" },
  { term: "Energi Potensial Gravitasi", definition: "Energi yang tersimpan pada benda karena posisi atau kedudukan ketinggiannya dalam medan hukum tarik gravitasi.", category: "Fisika" },
  { term: "Energi Potensial Elastis", definition: "Energi yang tersimpan pada material elastis (pegas, karet, busur) akibat adanya deformasi regang dari kesetimbangan.", category: "Fisika" },
  { term: "Energi Mekanik", definition: "Jumlah total akumulasi dari energi kinetik dan energi potensial pada suatu koordinat fisis tertentu.", category: "Fisika" },
  { term: "Energi Kalor", definition: "Energi termal panas yang berpindah antar sistem dipicu gradien perbedaan temperatur suhu zat.", category: "Fisika" },
  { term: "Energi Listrik", definition: "Energi yang dihasilkan oleh aliran muatan partikel elektron bebas melintasi penghantar karena beda tegangan.", category: "Fisika" },
  { term: "Energi Kimia", definition: "Energi potensial elektrostatik yang tersimpan di dalam susunan atom ikatan kovalen klorofil atau glukosa.", category: "Fisika" },
  { term: "Energi Bunyi", definition: "Energi mekanik longitudinal merambat di udara padat cair dalam rasi rapatan renggangan tekanan akustik.", category: "Fisika" },
  { term: "Energi Cahaya", definition: "Energi spekter radiasi elektromagnetik merambat transversal berbentuk sirkuit paket foton tanpa zat perantara.", category: "Fisika" },
  { term: "Energi Nuklir", definition: "Energi ikat inti proton-neutron yang dilepas karena proses reaksi fusi penggabungan atau fisi pembelahan atom.", category: "Fisika" },
  { term: "Energi Angin", definition: "Energi kinetik massa fluida gas atmosfer bergerak akibat gradien sirkuit pemanasan matahari dan rotasi bumi.", category: "Fisika" },
  { term: "Energi Air", definition: "Energi potensial fluida waduk curam dikonversi kinetik arus turbin dinamo pembangkit kelisitrikan.", category: "Fisika" },
  { term: "Energi Surya", definition: "Energi radiasi spektrum gelombang elektromagnetik fusi matahari yang ditangkap sel modul fotovoltaik silikon.", category: "Fisika" },
  { term: "Energi Biomassa", definition: "Energi kimia tersimpan dalam bahan limbah organik hidup turunan sisa padi jerami peternakan kotoran kandang.", category: "Fisika" },
  { term: "Energi Geotermal", definition: "Energi panas alam bumi tersimpan di batuan magma mantel tengah bumi sirkuit reservoir uap jenuh air.", category: "Fisika" },
  { term: "Daya (Power)", definition: "Laju konversi atau transfer energi per unit waktu sekon, diukur dengan satuan kelipatan Watt.", category: "Fisika" },
  { term: "Usaha (Work)", definition: "Perkalian gaya searah pergeseran komponen dengan jarak lintasan perpindahan yang diderita benda.", category: "Fisika" },
  { term: "Teorema Usaha-Energi", definition: "Teorema fisis fungsional bahwa usaha total yang dikerjakan gaya luar setara perubahan energi kinetik netto.", category: "Fisika" },
  { term: "Hukum Kekekalan Energi", definition: "Prinsip asasi bahwa kuantitas energi total di koordinat alam terisolasi konstan bebas hancur, sebatas kelokan bentuk fasis.", category: "Fisika" },
  { term: "Sistem Konservatif", definition: "Sistem fisis ideal di mana rintangan gesek non-konservatif dinisbikan, melestarikan totalitas energi mekanik murninya.", category: "Fisika" },
  { term: "Efisiensi Mekanis", definition: "Rasio perbandingan daya keluaran bermanfaat berbanding total daya masukan energi sistem mesin fisis.", category: "Fisika" },
  { term: "Disipasi Energi", definition: "Penyusutan kuantitas energi berguna terdegradasi menjadi energi buang tidak bermutu (seperti kalor gesekan mesin).", category: "Fisika" },
  { term: "Entalpi Reaksi", definition: "Porsi energi termodinamika kimia fasa pelepasan atau absorbsi kalor per mol produk reaksi kovalen.", category: "Fisika" },
  { term: "Hukum Hooke", definition: "Hukum linearitas keelastisan pegas bahwa gaya pulih beraksi sebanding simpangan regangan pegas.", category: "Fisika" },
  { term: "Fisi Nuklir", definition: "Proses pembelahan inti berat uranium-235 membebaskan pecahan massa magnetik dan energi radiasi tinggi.", category: "Fisika" },
  { term: "Fusi Nuklir", definition: "Proses penggabungan inti hidrogen ringan menjadi helium melepaskan konversi energi fusi kinetik terbesar di matahari.", category: "Fisika" },
  { term: "Desibel (dB)", definition: "Skala logaritmis tingkat kepekatan intensitas tekanan akustik bunyi sasar pendengaran telinga manusia.", category: "Fisika" },
  { term: "Kalor Jenis", definition: "Kapasitas serapan kalor per satu kilogram bahan demi melonjakkan temperatur suhu sebesar satu derajat Celcius.", category: "Fisika" },
  { term: "Teori Kinetik Gas", definition: "Teori fisika statistik menghubungkan temperatur makros gas sebanding energi kinetik vibrasi molekul mikros.", category: "Fisika" },
  { term: "Hukum Ohm", definition: "Hukum dasar kelistrikan bahwa beda potensial sirkuit sebanding intensitas arus dikalikan rintangan hambat.", category: "Fisika" },
  { term: "Efek Fotolistrik", definition: "Pelepasan elektron terikat dari atom silikon logam sirkuit begitu menyerap benturan partikel foton cahaya surya.", category: "Fisika" },
  { term: "Debit Aliran", definition: "Volume aliran fluida cair melintasi penampang sirkuit pipa air PLTA per sekon detik.", category: "Fisika" },
  { term: "Panas (Heat)", definition: "Energi kinetik mikro acak berpindah melintasi batas sistem dipicu gradien ketimpangan suhu.", category: "Fisika" },
  { term: "Suhu (Temperature)", definition: "Ukuran derajat energi kinetik getar rata-rata per molekul konstituen kisi padat fisis.", category: "Fisika" },
  { term: "Joule (J)", definition: "Satuan standar internasional (SI) pengukur kuantitas usaha mekanik kerja dan transfer energi fisis.", category: "Fisika" },
  { term: "Watt (W)", definition: "Satuan dasar sistem SI untuk mengukur kapasitas laju transfer energi persis satu Joule per sekon detik.", category: "Fisika" },
  { term: "Entropi (Entropy)", definition: "Ukuran derajat ketidakefektifan, ketidakteraturan molekuler sistem searah degradasi mekanik termodinamika.", category: "Fisika" },
  { term: "Resonansi Akustik", definition: "Getaran simpang maksimum zat padat akibat menerima frekuensi gelombang rambat suara luar sefasa alami.", category: "Fisika" },
  { term: "Efek Doppler", definition: "Sumbatan pergeseran tingkat frekuensi gelombang akibat pergerakan nisbi sumber bunyi berbanding posisi penyimak.", category: "Fisika" },
  { term: "Momentum Linier", definition: "Kuantitas ukuran kesukaran menghentikan gerakan massa zat bermassa m melaju kecapatan v.", category: "Fisika" },
  { term: "Turbin Impuls", definition: "Bilah kipas kincir pembagi momentum fluida kinetik menyapu rotor generator kelistrikan air.", category: "Fisika" },

  // AL-QUR'AN & ISLAM TERMS (30+)
  { term: "Ayat Kauniyah", definition: "Fenomena keteraturan alam semesta fisis fungsional yang bertindak sebagai isyarat tertulis kebesaran Allah.", category: "Al-Qur’an" },
  { term: "Ayat Qauliyah", definition: "Kumpulan wahyu suci tertulis di dalam draf Mushaf Al-Qur'an penuntut moralitas hidup manusia.", category: "Al-Qur’an" },
  { term: "Khalifah fil-Ardh", definition: "Mandat kepemimpinan asasi manusia di bumi untuk melestarikan kemakmuran ekologis tanpa kerusakan.", category: "Al-Qur’an" },
  { term: "Mizan", definition: "Timbangan neraca keseimbangan kosmos fisis ekologis ciptaan tuhan agar sirkuit alam berjalan serasi.", category: "Al-Qur’an" },
  { term: "Israf", definition: "Perilaku pemborosan berlebih-lebihan mengonsumsi energi, makanan, material fisis yang dilarang keras dalam Islam.", category: "Al-Qur’an" },
  { term: "Fasad", definition: "Tindakan destruktif perusakan tatanan ekologi hutan dan air yang memicu ketidakseimbangan iklim lokal bumi.", category: "Al-Qur’an" },
  { term: "Sunnatullah", definition: "Ketetapan hukum-hukum fisis sebab-akibat baku yang Allah instal melintasi materi alam semesta (Hukum Alam).", category: "Al-Qur’an" },
  { term: "Tafakkur", definition: "Aktivitas memfungsikan akal rasional menyelidiki gejala alam kauniyah guna memperkokoh iman ketauhidan.", category: "Al-Qur’an" },
  { term: "Ulil Albab", definition: "Golongan intelektual cendekiawan muslim yang saksama menyeimbangkan dzikir spiritual dan pikir penelitian alam.", category: "Al-Qur’an" },
  { term: "Tafsir Ilmi", definition: "Metodologi penafsiran alinea ayat suci Al-Qur'an bersandarkan pendekatan penemuan ilmiah kebenaran sains.", category: "Al-Qur’an" },
  { term: "Tabayyun", definition: "Asas verifikasi empiris menguji akor data fisis kebenaran berita menyapu prasangka cocoklogi melantur.", category: "Al-Qur’an" },
  { term: "Siraj", definition: "Metafora pelita obor penghasil spektrum pancaran kalor panas dan energi cahaya mandiri (Matahari).", category: "Al-Qur’an" },
  { term: "Nur", definition: "Pantulan pendaran cahaya menerangi fasa gelap, memandu jalur kebenaran (Bulan/Ilmu).", category: "Al-Qur’an" },
  { term: "Shawa'iq", definition: "Petir halilintar alam pembawa kilat kelistrikan elektrostatik awan raksasa kumulonimbus.", category: "Al-Qur’an" },
  { term: "Ra'd", definition: "Guruh suara akustik menggelegar di sela badai kondensasi air awan petir.", category: "Al-Qur’an" },
  { term: "Awtad", definition: "Pasak gunung penahan getaran fisis kerak litosfer bumi sekaligus katup buang geotermal Kamojang.", category: "Al-Qur’an" },
  { term: "Riyah", definition: "Gugusan massa hembusan gejolak sirkulasi angin pembawa gerak kinetik kincir kedaulatan warga.", category: "Al-Qur’an" },
  { term: "Lawaqih", definition: "Karakter kawin sirkulasi tiup angin mengumpulkan uap air awan hingga presipitasi herba hujan.", category: "Al-Qur’an" },
  { term: "Maa'", definition: "Air hidrogen oksida (H2O) prekursor penyimpanan energi kimia latent fondasi biokimia hidup.", category: "Al-Qur’an" },
  { term: "Hadaiq", definition: "Kebun rimba rindang penyerap karbon biosida bumi pemicu konversi biomasa terbesar daratan.", category: "Al-Qur’an" },
  { term: "Ratq", definition: "Kondisi singularitas maha rapat maha menyatu saat awal mula draf penciptaan semesta Big Bang.", category: "Al-Qur’an" },
  { term: "Fatq", definition: "Peledakan pemisahan kosmis melepaskan radiasi partikel fusi awal kedaulatan fisis alam semesta.", category: "Al-Qur’an" },
  { term: "Ukhuwah Ekologis", definition: "Persaudaraan semesta sirkuit hidrologi air menyatukan masyarakat hulu pegunungan dan hilir pantai.", category: "Al-Qur’an" },
  { term: "Syuro", definition: "Prinsip musyawarah mufakat kelompok sela memecahkan draf rintangan kasus PBL sasar modul.", category: "Al-Qur’an" },
  { term: "Ta'awun", definition: "Etika tolong menolong bekerjasama sela gotong royong merakit proyek solusi terbarukan.", category: "Al-Qur’an" },
  { term: "Qurthubi", definition: "Ulama ahli tafsir klasik Spanyol muktabar penjelas detail fisis petir elektrostatik.", category: "Al-Qur’an" },
  { term: "Ibn Katsir", definition: "Ulama pakar tafsir riwayat masyhur abad ke-14 peneras awal konseptual Big Bang samawi.", category: "Al-Qur’an" },
  { term: "Ba's", definition: "Kekuatan militer dahsyat pertahanan yang terpatri di dalam mineral besi fusi bintang Fe-56.", category: "Al-Qur’an" },
  { term: "Tasbih Kosmis", definition: "Ketundukan getar dinamis seantero isi langit bumi sikat frekuensi ultrasonik infrasonic batu gunung asmara.", category: "Al-Qur’an" },
  { term: "Al-Haqq", definition: "Atribut Kebenaran Tunggal tuhan yang menyatukan sains empiris rasional teologis qabuliyah.", category: "Al-Qur’an" },

  // PEDAGOGI & PBL TERMS (15+)
  { term: "Problem Based Learning", definition: "Model instruksional berpori melatih nalar kritis siswa sela dihadapkan skenario rentetan kasus nyata kontekstual.", category: "Pedagogi/PBL" },
  { term: "PQIL Approach", definition: "Synthesizer model PBL dengan refleksi moral dan pencarian konseptual ayat suci kalam Al-Qur'an.", category: "Pedagogi/PBL" },
  { term: "John Dewey", definition: "Tokoh filosof bapak experiential learning penentu relevansi belajar sela memecahkan draf rintangan kehidupan.", category: "Pedagogi/PBL" },
  { term: "Constructivism", definition: "Teori belajar Piaget-Vygotsky bahwa pengetahuan dirangkai aktif mandiri bermitra lingkungan sosial sasis.", category: "Pedagogi/PBL" },
  { term: "Scaffolding", definition: "Bantuan konseptual bertahap sokratis guru sela sasis buntu fasa hitungan rumus fisika teoretis.", category: "Pedagogi/PBL" },
  { term: "HOTS Standards", definition: "Kecakapan berpikir tingkat tinggi (analisis, evaluasi, sintesis kreasi) melampaui sirkuit hapalan mekanikal.", category: "Pedagogi/PBL" },
  { term: "Collaborative Learning", definition: "Pembagian peran fungsional kelompok melatih kepemimpinan kolektif memecahkan draf LKPD.", category: "Pedagogi/PBL" },
  { term: "Self-Regulated Learning", definition: "Kemampuan otonom sasis meregulasi durasi, target, mental belajar melintasi modul fisis interaktif.", category: "Pedagogi/PBL" },
  { term: "Zone of Proximal Development", definition: "Rentang jarak kemampuan pemecahan masalah mandiri berbanding sela kolaborasi bimbingan fasilitator pas.", category: "Pedagogi/PBL" },
  { term: "Discovery Learning", definition: "Asas penemuan hukum fisis terbimbing memantapkan kepuasan intelektual penemu sasi sains.", category: "Pedagogi/PBL" },
  { term: "Authentic Assessment", definition: "Penilaian menyeluruh performa, sikap ketakwaan ekologis, draf karya orisinal sasis melintasi rubrik.", category: "Pedagogi/PBL" },
  { term: "Formative Assessment", definition: "Evaluasi berjalan sela sasis praktikum memverifikasi data numerik kincir wind PLTB.", category: "Pedagogi/PBL" },
  { term: "Sumative Assessment", definition: "Evaluasi final mengukur porsi tamatan pencapaian kognitif 20 butir PG HOTS sasis.", category: "Pedagogi/PBL" },
  { term: "Socrates Questions", definition: "Gugus pancingan interogatif guru menuntut sasis menggali struktur logika asasi variabel fisika.", category: "Pedagogi/PBL" },
  { term: "Interdisciplinary study", definition: "Studi menyatukan pilar fisika, kimia material, ekofisika pelindung alam, tafsir moral qurani seimbang.", category: "Pedagogi/PBL" },

  // UMUM / REVOLUSI GREEN TERMS (15+)
  { term: "Energi Terbarukan", definition: "Pilar energi kedaulatan baru bebas emisi karbon disiapkan alam pulih siklik (solar, hidro, bayu).", category: "Umum" },
  { term: "Green Greenhouse Gas", definition: "Selimut karbon dioksida metana berlebih mengunci radiasi infra bumi mempercepat global warming.", category: "Umum" },
  { term: "Regenerative Break", definition: "Rekayasan sirkuit pengereman motor listrik dinamo charger batubara mengubah kinetik balik listrik.", category: "Umum" },
  { term: "Dunia Ketel Uap", definition: "Infrastruktur mesin kuno james watt pemutus awal revolusi industri pembakaran batubara kotor.", category: "Umum" },
  { term: "Solar Photovoltaic", definition: "Semikonduktor silikon penangkap spekter surya pelempar elektron bebas sirkuit daya.", category: "Umum" },
  { term: "PLTB Bayu", definition: "Kincir angin tiang penyangga kedaulatan daya listrik pesisir sumatera selatan merdeka.", category: "Umum" },
  { term: "Krisis Energi Global", definition: "Penyusutan deposit minyak bumi batubara diiringi lonjakan konsumsi boros israf industri dunia.", category: "Umum" },
  { term: "Pemanasan Global", definition: "Pemberatan temperatur suhu makros bumi akibat disipasi israf emisi gas batubara kotor PLTU.", category: "Umum" },
  { term: "Kapasitor", definition: "Material dielektrik penyimpan rapat medan energi potensial listrik statis buatan michael faraday.", category: "Umum" },
  { term: "Torium", definition: "Material berat isotop aman penghasil fusi fisi nuklir PLTN generasi IV MSR aman.", category: "Umum" },
  { term: "Biogas Metana", definition: "Bahan bakar gas metana besutan anaerobik kotoran sapi penepis sanitasi lalat gatal.", category: "Umum" },
  { term: "Larderello Italia", definition: "Sirkuit sumur PLTP tertua di dunia rancang PRINCE Conti meledakkan uap magma.", category: "Umum" },
  { term: "Betz Limit", definition: "Batas teoretis tangkapan kincir angin aerodinamik bernilai konstan 59,3 persen saja gratis.", category: "Umum" },
  { term: "Microgrid Mandiri", definition: "Sirkuit distribusi transmisi listrik lokal terbarukan mandiri penyuplai dusun pedalaman papua.", category: "Umum" },
  { term: "Al-Qanun al-Mas'udi", definition: "Karya astronomi geografi megah Al-Biruni rujukan piknometer spesifik berat kisi materi.", category: "Umum" }
];

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Fisika" | "Al-Qur’an" | "Pedagogi/PBL" | "Umum">("All");

  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="glossary-section" className="bg-white rounded-[32px] shadow-sm border border-natural-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-natural-border/40 pb-4">
        <div className="p-3 bg-natural-secondary rounded-xl text-natural-primary shadow-sm">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-natural-heading tracking-tight font-serif">Glosarium Istilah Terpadu (100+ Istilah)</h2>
          <p className="text-sm text-[#8C897A] font-serif">Kamus istilah ilmiah fisika, tafsir Al-Qur'an, dan pedagogi PBL lengkap.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#8C897A] absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Cari istilah atau kata kunci definisi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-natural-border rounded-lg text-sm text-natural-text outline-none bg-white focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent font-serif"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-1 bg-natural-bg/80 border border-natural-border/30 p-1 rounded-xl items-center">
          {["All", "Fisika", "Al-Qur’an", "Pedagogi/PBL", "Umum"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat ? "bg-natural-primary text-white shadow font-bold" : "text-[#5A5A40] hover:text-natural-heading"
              }`}
            >
              {cat === "All" ? "Semua Istilah" : cat}
            </button>
          ))}
        </div>
      </div>

      <span className="text-[10px] text-[#8C897A] font-bold uppercase tracking-wider block mb-3 pl-1 font-sans">
        Menampilkan {filteredTerms.length} istilah terfilter
      </span>

      {/* Grid result list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 border border-natural-border/40 p-2 rounded-xl bg-[#FAF9F6]">
        {filteredTerms.map((item, idx) => (
          <div key={idx} className="bg-white p-4.5 rounded-[16px] border border-natural-border/60 shadow-xs space-y-2 flex flex-col justify-between hover:border-natural-accent/80 transition-all">
            <div className="space-y-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-xs font-bold text-natural-heading flex items-center space-x-1 font-sans">
                  <Bookmark className="w-3.5 h-3.5 text-natural-accent shrink-0" />
                  <span>{item.term}</span>
                </h3>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-extrabold uppercase font-mono ${
                  item.category === "Fisika" ? "bg-natural-secondary text-natural-primary" :
                  item.category === "Al-Qur’an" ? "bg-natural-bg text-[#5A5A40]" :
                  item.category === "Pedagogi/PBL" ? "bg-[#E6DFD3] text-[#5C5C4A]" :
                  "bg-[#ECEAE1] text-[#7A786B]"
                }`}>
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-natural-text leading-relaxed pt-1 select-all font-serif">{item.definition}</p>
            </div>
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <div className="col-span-2 text-center py-12 text-[#8C897A] text-xs font-serif">
            Tidak ada istilah yang cocok dengan pencarian Anda. Coba istilah lain.
          </div>
        )}
      </div>
    </div>
  );
}
