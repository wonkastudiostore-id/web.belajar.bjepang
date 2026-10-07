/* =========================================================
   GERBANG PASSWORD
   Tambah/hapus password sepuasnya di array ini — semua yang ada
   di daftar akan dianggap valid.
   CATATAN: ini bukan keamanan sungguhan, cuma penahan orang iseng
   karena semua password tetap kebaca kalau file ini dibuka langsung.
========================================================= */
const SITE_PASSWORDS = [
  "wkn231",
];

const gate = document.getElementById('gate');
const mainWrap = document.getElementById('mainWrap');
const gateInput = document.getElementById('gateInput');
const gateBtn = document.getElementById('gateBtn');
const gateError = document.getElementById('gateError');
const gateBox = document.querySelector('.gate-box');

function tryUnlock(){
  if(SITE_PASSWORDS.includes(gateInput.value)){
    gate.style.display = 'none';
    showMenu();
  } else {
    gateError.classList.add('show');
    gateBox.classList.remove('shake');
    void gateBox.offsetWidth; // reset animasi
    gateBox.classList.add('shake');
    gateInput.value = '';
    gateInput.focus();
  }
}

gateBtn.addEventListener('click', tryUnlock);
gateInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') tryUnlock();
});
gateInput.focus();

/* =========================================================
   DATA KARTU
   Tambahkan / edit entri di sini. Setiap entri:
   { type: 'vocab' atau 'kanji', word: '...', reading: '...', meaning: '...', extra: '...' (opsional) }
   extra dipakai untuk contoh kalimat singkat atau info onyomi/kunyomi.
   Ini contoh starter ~60 kartu, silakan diperluas sampai 900.
========================================================= */
const flashcardData = [
  { level:'N5', type:'vocab', word:'わたし', reading:'わたし', meaning:'saya' },
  { level:'N5', type:'vocab', word:'あなた', reading:'あなた', meaning:'kamu/Anda' },
  { level:'N5', type:'vocab', word:'ひと', reading:'ひと', meaning:'orang' },
  { level:'N5', type:'vocab', word:'ともだち', reading:'ともだち', meaning:'teman' },
  { level:'N5', type:'vocab', word:'かぞく', reading:'かぞく', meaning:'keluarga' },
  { level:'N5', type:'vocab', word:'ちち', reading:'ちち', meaning:'ayah' },
  { level:'N5', type:'vocab', word:'はは', reading:'はは', meaning:'ibu' },
  { level:'N5', type:'vocab', word:'あに', reading:'あに', meaning:'kakak laki-laki' },
  { level:'N5', type:'vocab', word:'あね', reading:'あね', meaning:'kakak perempuan' },
  { level:'N5', type:'vocab', word:'おとうと', reading:'おとうと', meaning:'adik laki-laki' },
  { level:'N5', type:'vocab', word:'いもうと', reading:'いもうと', meaning:'adik perempuan' },
  { level:'N5', type:'vocab', word:'がくせい', reading:'がくせい', meaning:'pelajar' },
  { level:'N5', type:'vocab', word:'せんせい', reading:'せんせい', meaning:'guru' },
  { level:'N5', type:'vocab', word:'がっこう', reading:'がっこう', meaning:'sekolah' },
  { level:'N5', type:'vocab', word:'だいがく', reading:'だいがく', meaning:'universitas' },
  { level:'N5', type:'vocab', word:'かいしゃ', reading:'かいしゃ', meaning:'perusahaan' },
  { level:'N5', type:'vocab', word:'しごと', reading:'しごと', meaning:'pekerjaan' },
  { level:'N5', type:'vocab', word:'いえ', reading:'いえ', meaning:'rumah' },
  { level:'N5', type:'vocab', word:'へや', reading:'へや', meaning:'kamar' },
  { level:'N5', type:'vocab', word:'ほん', reading:'ほん', meaning:'buku' },
  { level:'N5', type:'vocab', word:'ノート', reading:'のおと', meaning:'buku catatan' },
  { level:'N5', type:'vocab', word:'ペン', reading:'ぺん', meaning:'pena' },
  { level:'N5', type:'vocab', word:'えんぴつ', reading:'えんぴつ', meaning:'pensil' },
  { level:'N5', type:'vocab', word:'つくえ', reading:'つくえ', meaning:'meja' },
  { level:'N5', type:'vocab', word:'いす', reading:'いす', meaning:'kursi' },
  { level:'N5', type:'vocab', word:'かばん', reading:'かばん', meaning:'tas' },
  { level:'N5', type:'vocab', word:'でんわ', reading:'でんわ', meaning:'telepon' },
  { level:'N5', type:'vocab', word:'とけい', reading:'とけい', meaning:'jam' },
  { level:'N5', type:'vocab', word:'くるま', reading:'くるま', meaning:'mobil' },
  { level:'N5', type:'vocab', word:'でんしゃ', reading:'でんしゃ', meaning:'kereta' },
  { level:'N5', type:'vocab', word:'えき', reading:'えき', meaning:'stasiun' },
  { level:'N5', type:'vocab', word:'みせ', reading:'みせ', meaning:'toko' },
  { level:'N5', type:'vocab', word:'びょういん', reading:'びょういん', meaning:'rumah sakit' },
  { level:'N5', type:'vocab', word:'ぎんこう', reading:'ぎんこう', meaning:'bank' },
  { level:'N5', type:'vocab', word:'こうえん', reading:'こうえん', meaning:'taman' },
  { level:'N5', type:'vocab', word:'みち', reading:'みち', meaning:'jalan' },
  { level:'N5', type:'vocab', word:'やま', reading:'やま', meaning:'gunung' },
  { level:'N5', type:'vocab', word:'かわ', reading:'かわ', meaning:'sungai' },
  { level:'N5', type:'vocab', word:'うみ', reading:'うみ', meaning:'laut' },
  { level:'N5', type:'vocab', word:'みず', reading:'みず', meaning:'air' },
  { level:'N5', type:'vocab', word:'おちゃ', reading:'おちゃ', meaning:'teh' },
  { level:'N5', type:'vocab', word:'ごはん', reading:'ごはん', meaning:'nasi/makanan' },
  { level:'N5', type:'vocab', word:'パン', reading:'ぱん', meaning:'roti' },
  { level:'N5', type:'vocab', word:'にく', reading:'にく', meaning:'daging' },
  { level:'N5', type:'vocab', word:'さかな', reading:'さかな', meaning:'ikan' },
  { level:'N5', type:'vocab', word:'やさい', reading:'やさい', meaning:'sayuran' },
  { level:'N5', type:'vocab', word:'くだもの', reading:'くだもの', meaning:'buah' },
  { level:'N5', type:'vocab', word:'りんご', reading:'りんご', meaning:'apel' },
  { level:'N5', type:'vocab', word:'ぎゅうにゅう', reading:'ぎゅうにゅう', meaning:'susu' },
  { level:'N5', type:'vocab', word:'たまご', reading:'たまご', meaning:'telur' },
  { level:'N5', type:'vocab', word:'あさ', reading:'あさ', meaning:'pagi' },
  { level:'N5', type:'vocab', word:'ひる', reading:'ひる', meaning:'siang' },
  { level:'N5', type:'vocab', word:'よる', reading:'よる', meaning:'malam' },
  { level:'N5', type:'vocab', word:'きょう', reading:'きょう', meaning:'hari ini' },
  { level:'N5', type:'vocab', word:'あした', reading:'あした', meaning:'besok' },
  { level:'N5', type:'vocab', word:'きのう', reading:'きのう', meaning:'kemarin' },
  { level:'N5', type:'vocab', word:'いま', reading:'いま', meaning:'sekarang' },
  { level:'N5', type:'vocab', word:'じかん', reading:'じかん', meaning:'waktu' },
  { level:'N5', type:'vocab', word:'まいにち', reading:'まいにち', meaning:'setiap hari' },
  { level:'N5', type:'vocab', word:'しゅう', reading:'しゅう', meaning:'minggu' },
  { level:'N5', type:'vocab', word:'いく', reading:'いく', meaning:'pergi' },
  { level:'N5', type:'vocab', word:'くる', reading:'くる', meaning:'datang' },
  { level:'N5', type:'vocab', word:'かえる', reading:'かえる', meaning:'pulang' },
  { level:'N5', type:'vocab', word:'たべる', reading:'たべる', meaning:'makan' },
  { level:'N5', type:'vocab', word:'のむ', reading:'のむ', meaning:'minum' },
  { level:'N5', type:'vocab', word:'みる', reading:'みる', meaning:'melihat' },
  { level:'N5', type:'vocab', word:'きく', reading:'きく', meaning:'mendengar/bertanya' },
  { level:'N5', type:'vocab', word:'はなす', reading:'はなす', meaning:'berbicara' },
  { level:'N5', type:'vocab', word:'よむ', reading:'よむ', meaning:'membaca' },
  { level:'N5', type:'vocab', word:'かく', reading:'かく', meaning:'menulis' },
  { level:'N5', type:'vocab', word:'かう', reading:'かう', meaning:'membeli' },
  { level:'N5', type:'vocab', word:'うる', reading:'うる', meaning:'menjual' },
  { level:'N5', type:'vocab', word:'つかう', reading:'つかう', meaning:'menggunakan' },
  { level:'N5', type:'vocab', word:'つくる', reading:'つくる', meaning:'membuat' },
  { level:'N5', type:'vocab', word:'べんきょうする', reading:'べんきょうする', meaning:'belajar' },
  { level:'N5', type:'vocab', word:'はたらく', reading:'はたらく', meaning:'bekerja' },
  { level:'N5', type:'vocab', word:'ねる', reading:'ねる', meaning:'tidur' },
  { level:'N5', type:'vocab', word:'おきる', reading:'おきる', meaning:'bangun' },
  { level:'N5', type:'vocab', word:'あそぶ', reading:'あそぶ', meaning:'bermain' },
  { level:'N5', type:'vocab', word:'まつ', reading:'まつ', meaning:'menunggu' },
  { level:'N5', type:'vocab', word:'おおきい', reading:'おおきい', meaning:'besar' },
  { level:'N5', type:'vocab', word:'ちいさい', reading:'ちいさい', meaning:'kecil' },
  { level:'N5', type:'vocab', word:'あたらしい', reading:'あたらしい', meaning:'baru' },
  { level:'N5', type:'vocab', word:'ふるい', reading:'ふるい', meaning:'lama/tua' },
  { level:'N5', type:'vocab', word:'いい', reading:'いい', meaning:'baik/bagus' },
  { level:'N5', type:'vocab', word:'わるい', reading:'わるい', meaning:'buruk' },
  { level:'N5', type:'vocab', word:'あつい', reading:'あつい', meaning:'panas' },
  { level:'N5', type:'vocab', word:'さむい', reading:'さむい', meaning:'dingin' },
  { level:'N5', type:'vocab', word:'たかい', reading:'たかい', meaning:'tinggi/mahal' },
  { level:'N5', type:'vocab', word:'やすい', reading:'やすい', meaning:'murah' },
  { level:'N5', type:'vocab', word:'おもしろい', reading:'おもしろい', meaning:'menarik/lucu' },
  { level:'N5', type:'vocab', word:'むずかしい', reading:'むずかしい', meaning:'sulit' },
  { level:'N5', type:'vocab', word:'かんたん', reading:'かんたん', meaning:'mudah/sederhana' },
  { level:'N5', type:'vocab', word:'すき', reading:'すき', meaning:'suka' },
  { level:'N5', type:'vocab', word:'きらい', reading:'きらい', meaning:'tidak suka' },
  { level:'N5', type:'vocab', word:'げんき', reading:'げんき', meaning:'sehat/bersemangat' },
  { level:'N5', type:'vocab', word:'いそがしい', reading:'いそがしい', meaning:'sibuk' },
  { level:'N5', type:'vocab', word:'たのしい', reading:'たのしい', meaning:'menyenangkan' },
  { level:'N5', type:'vocab', word:'きれい', reading:'きれい', meaning:'indah/bersih' },
  { level:'N5', type:'vocab', word:'しずか', reading:'しずか', meaning:'tenang' },

  { level:'N5', type:'vocab', word:'これ', reading:'これ', meaning:'ini' },
  { level:'N5', type:'vocab', word:'それ', reading:'それ', meaning:'itu' },
  { level:'N5', type:'vocab', word:'あれ', reading:'あれ', meaning:'itu di sana' },
  { level:'N5', type:'vocab', word:'ここ', reading:'ここ', meaning:'di sini' },
  { level:'N5', type:'vocab', word:'そこ', reading:'そこ', meaning:'di situ' },
  { level:'N5', type:'vocab', word:'あそこ', reading:'あそこ', meaning:'di sana' },
  { level:'N5', type:'vocab', word:'だれ', reading:'だれ', meaning:'siapa' },
  { level:'N5', type:'vocab', word:'なに', reading:'なに', meaning:'apa' },
  { level:'N5', type:'vocab', word:'どこ', reading:'どこ', meaning:'di mana' },
  { level:'N5', type:'vocab', word:'いつ', reading:'いつ', meaning:'kapan' },
  { level:'N5', type:'vocab', word:'どうして', reading:'どうして', meaning:'mengapa' },
  { level:'N5', type:'vocab', word:'どう', reading:'どう', meaning:'bagaimana' },
  { level:'N5', type:'vocab', word:'どれ', reading:'どれ', meaning:'yang mana' },
  { level:'N5', type:'vocab', word:'どちら', reading:'どちら', meaning:'yang mana/di mana' },
  { level:'N5', type:'vocab', word:'どんな', reading:'どんな', meaning:'seperti apa' },
  { level:'N5', type:'vocab', word:'いくら', reading:'いくら', meaning:'berapa harga' },
  { level:'N5', type:'vocab', word:'いくつ', reading:'いくつ', meaning:'berapa jumlah/umur' },
  { level:'N5', type:'vocab', word:'こちら', reading:'こちら', meaning:'sebelah sini' },
  { level:'N5', type:'vocab', word:'そちら', reading:'そちら', meaning:'sebelah situ' },
  { level:'N5', type:'vocab', word:'あちら', reading:'あちら', meaning:'sebelah sana' },
  { level:'N5', type:'vocab', word:'だいじょうぶ', reading:'だいじょうぶ', meaning:'tidak apa-apa' },
  { level:'N5', type:'vocab', word:'ありがとう', reading:'ありがとう', meaning:'terima kasih' },
  { level:'N5', type:'vocab', word:'すみません', reading:'すみません', meaning:'permisi/maaf' },
  { level:'N5', type:'vocab', word:'ごめんなさい', reading:'ごめんなさい', meaning:'maaf' },
  { level:'N5', type:'vocab', word:'おねがいします', reading:'おねがいします', meaning:'mohon/tolong' },
  { level:'N5', type:'vocab', word:'どういたしまして', reading:'どういたしまして', meaning:'sama-sama' },
  { level:'N5', type:'vocab', word:'おはよう', reading:'おはよう', meaning:'selamat pagi' },
  { level:'N5', type:'vocab', word:'こんにちは', reading:'こんにちは', meaning:'halo/selamat siang' },
  { level:'N5', type:'vocab', word:'こんばんは', reading:'こんばんは', meaning:'selamat malam' },
  { level:'N5', type:'vocab', word:'おやすみ', reading:'おやすみ', meaning:'selamat tidur' },
  { level:'N5', type:'vocab', word:'はい', reading:'はい', meaning:'ya' },
  { level:'N5', type:'vocab', word:'いいえ', reading:'いいえ', meaning:'tidak' },
  { level:'N5', type:'vocab', word:'もちろん', reading:'もちろん', meaning:'tentu saja' },
  { level:'N5', type:'vocab', word:'ほんとう', reading:'ほんとう', meaning:'benar' },
  { level:'N5', type:'vocab', word:'たぶん', reading:'たぶん', meaning:'mungkin' },
  { level:'N5', type:'vocab', word:'とても', reading:'とても', meaning:'sangat' },
  { level:'N5', type:'vocab', word:'すこし', reading:'すこし', meaning:'sedikit' },
  { level:'N5', type:'vocab', word:'たくさん', reading:'たくさん', meaning:'banyak' },
  { level:'N5', type:'vocab', word:'いつも', reading:'いつも', meaning:'selalu' },
  { level:'N5', type:'vocab', word:'よく', reading:'よく', meaning:'sering/dengan baik' },
  { level:'N5', type:'vocab', word:'ときどき', reading:'ときどき', meaning:'kadang-kadang' },
  { level:'N5', type:'vocab', word:'あまり', reading:'あまり', meaning:'tidak terlalu' },
  { level:'N5', type:'vocab', word:'ぜんぜん', reading:'ぜんぜん', meaning:'sama sekali tidak' },
  { level:'N5', type:'vocab', word:'もう', reading:'もう', meaning:'sudah' },
  { level:'N5', type:'vocab', word:'まだ', reading:'まだ', meaning:'masih/belum' },
  { level:'N5', type:'vocab', word:'また', reading:'また', meaning:'lagi' },
  { level:'N5', type:'vocab', word:'いっしょに', reading:'いっしょに', meaning:'bersama' },
  { level:'N5', type:'vocab', word:'すぐ', reading:'すぐ', meaning:'segera' },
  { level:'N5', type:'vocab', word:'ゆっくり', reading:'ゆっくり', meaning:'perlahan' },
  { level:'N5', type:'vocab', word:'ちょっと', reading:'ちょっと', meaning:'sedikit/sebentar' },
  { level:'N5', type:'vocab', word:'おいしい', reading:'おいしい', meaning:'enak' },
  { level:'N5', type:'vocab', word:'まずい', reading:'まずい', meaning:'tidak enak' },
  { level:'N5', type:'vocab', word:'あまい', reading:'あまい', meaning:'manis' },
  { level:'N5', type:'vocab', word:'からい', reading:'からい', meaning:'pedas' },
  { level:'N5', type:'vocab', word:'しょっぱい', reading:'しょっぱい', meaning:'asin' },
  { level:'N5', type:'vocab', word:'にがい', reading:'にがい', meaning:'pahit' },
  { level:'N5', type:'vocab', word:'すっぱい', reading:'すっぱい', meaning:'asam' },
  { level:'N5', type:'vocab', word:'あたたかい', reading:'あたたかい', meaning:'hangat' },
  { level:'N5', type:'vocab', word:'つめたい', reading:'つめたい', meaning:'dingin' },
  { level:'N5', type:'vocab', word:'つまらない', reading:'つまらない', meaning:'membosankan' },
  { level:'N5', type:'vocab', word:'かなしい', reading:'かなしい', meaning:'sedih' },
  { level:'N5', type:'vocab', word:'うれしい', reading:'うれしい', meaning:'senang' },
  { level:'N5', type:'vocab', word:'こわい', reading:'こわい', meaning:'takut/menakutkan' },
  { level:'N5', type:'vocab', word:'やさしい', reading:'やさしい', meaning:'baik/lembut' },
  { level:'N5', type:'vocab', word:'きびしい', reading:'きびしい', meaning:'ketat/keras' },
  { level:'N5', type:'vocab', word:'ひま', reading:'ひま', meaning:'senggang' },
  { level:'N5', type:'vocab', word:'きたない', reading:'きたない', meaning:'kotor' },
  { level:'N5', type:'vocab', word:'にぎやか', reading:'にぎやか', meaning:'ramai' },
  { level:'N5', type:'vocab', word:'べんり', reading:'べんり', meaning:'praktis/berguna' },
  { level:'N5', type:'vocab', word:'ふべん', reading:'ふべん', meaning:'tidak praktis' },
  { level:'N5', type:'vocab', word:'ゆうめい', reading:'ゆうめい', meaning:'terkenal' },
  { level:'N5', type:'vocab', word:'たいへん', reading:'たいへん', meaning:'berat/sulit' },
  { level:'N5', type:'vocab', word:'ひろい', reading:'ひろい', meaning:'luas' },
  { level:'N5', type:'vocab', word:'せまい', reading:'せまい', meaning:'sempit' },
  { level:'N5', type:'vocab', word:'ながい', reading:'ながい', meaning:'panjang' },
  { level:'N5', type:'vocab', word:'みじかい', reading:'みじかい', meaning:'pendek' },
  { level:'N5', type:'vocab', word:'おもい', reading:'おもい', meaning:'berat' },
  { level:'N5', type:'vocab', word:'かるい', reading:'かるい', meaning:'ringan' },
  { level:'N5', type:'vocab', word:'はやい', reading:'はやい', meaning:'cepat/awal' },
  { level:'N5', type:'vocab', word:'おそい', reading:'おそい', meaning:'lambat/terlambat' },
  { level:'N5', type:'vocab', word:'ちかい', reading:'ちかい', meaning:'dekat' },
  { level:'N5', type:'vocab', word:'とおい', reading:'とおい', meaning:'jauh' },
  { level:'N5', type:'vocab', word:'あかい', reading:'あかい', meaning:'merah' },
  { level:'N5', type:'vocab', word:'あおい', reading:'あおい', meaning:'biru' },
  { level:'N5', type:'vocab', word:'しろい', reading:'しろい', meaning:'putih' },
  { level:'N5', type:'vocab', word:'くろい', reading:'くろい', meaning:'hitam' },
  { level:'N5', type:'vocab', word:'きいろい', reading:'きいろい', meaning:'kuning' },
  { level:'N5', type:'vocab', word:'みどり', reading:'みどり', meaning:'hijau' },
  { level:'N5', type:'vocab', word:'むらさき', reading:'むらさき', meaning:'ungu' },
  { level:'N5', type:'vocab', word:'ちゃいろ', reading:'ちゃいろ', meaning:'cokelat' },
  { level:'N5', type:'vocab', word:'いろ', reading:'いろ', meaning:'warna' },
  { level:'N5', type:'vocab', word:'かお', reading:'かお', meaning:'wajah' },
  { level:'N5', type:'vocab', word:'め', reading:'め', meaning:'mata' },
  { level:'N5', type:'vocab', word:'みみ', reading:'みみ', meaning:'telinga' },


  { level:'N5', type:'vocab', word:'あたま', reading:'あたま', meaning:'kepala' },
  { level:'N5', type:'vocab', word:'かみ', reading:'かみ', meaning:'rambut' },
  { level:'N5', type:'vocab', word:'くち', reading:'くち', meaning:'mulut' },
  { level:'N5', type:'vocab', word:'はな', reading:'はな', meaning:'hidung' },
  { level:'N5', type:'vocab', word:'は', reading:'は', meaning:'gigi' },
  { level:'N5', type:'vocab', word:'くび', reading:'くび', meaning:'leher' },
  { level:'N5', type:'vocab', word:'かた', reading:'かた', meaning:'bahu' },
  { level:'N5', type:'vocab', word:'うで', reading:'うで', meaning:'lengan' },
  { level:'N5', type:'vocab', word:'て', reading:'て', meaning:'tangan' },
  { level:'N5', type:'vocab', word:'ゆび', reading:'ゆび', meaning:'jari' },
  { level:'N5', type:'vocab', word:'あし', reading:'あし', meaning:'kaki' },
  { level:'N5', type:'vocab', word:'おなか', reading:'おなか', meaning:'perut' },
  { level:'N5', type:'vocab', word:'せなか', reading:'せなか', meaning:'punggung' },
  { level:'N5', type:'vocab', word:'からだ', reading:'からだ', meaning:'tubuh' },
  { level:'N5', type:'vocab', word:'こころ', reading:'こころ', meaning:'hati/perasaan' },
  { level:'N5', type:'vocab', word:'びょうき', reading:'びょうき', meaning:'penyakit/sakit' },
  { level:'N5', type:'vocab', word:'くすり', reading:'くすり', meaning:'obat' },
  { level:'N5', type:'vocab', word:'いしゃ', reading:'いしゃ', meaning:'dokter' },
  { level:'N5', type:'vocab', word:'かんごし', reading:'かんごし', meaning:'perawat' },
  { level:'N5', type:'vocab', word:'たいおん', reading:'たいおん', meaning:'suhu tubuh' },
  { level:'N5', type:'vocab', word:'ふく', reading:'ふく', meaning:'pakaian' },
  { level:'N5', type:'vocab', word:'シャツ', reading:'シャツ', meaning:'kemeja' },
  { level:'N5', type:'vocab', word:'ズボン', reading:'ズボン', meaning:'celana' },
  { level:'N5', type:'vocab', word:'スカート', reading:'スカート', meaning:'rok' },
  { level:'N5', type:'vocab', word:'くつ', reading:'くつ', meaning:'sepatu' },
  { level:'N5', type:'vocab', word:'くつした', reading:'くつした', meaning:'kaus kaki' },
  { level:'N5', type:'vocab', word:'ぼうし', reading:'ぼうし', meaning:'topi' },
  { level:'N5', type:'vocab', word:'コート', reading:'コート', meaning:'mantel' },
  { level:'N5', type:'vocab', word:'かさ', reading:'かさ', meaning:'payung' },
  { level:'N5', type:'vocab', word:'さいふ', reading:'さいふ', meaning:'dompet' },
  { level:'N5', type:'vocab', word:'たべもの', reading:'たべもの', meaning:'makanan' },
  { level:'N5', type:'vocab', word:'のみもの', reading:'のみもの', meaning:'minuman' },
  { level:'N5', type:'vocab', word:'あさごはん', reading:'あさごはん', meaning:'sarapan' },
  { level:'N5', type:'vocab', word:'ひるごはん', reading:'ひるごはん', meaning:'makan siang' },
  { level:'N5', type:'vocab', word:'ばんごはん', reading:'ばんごはん', meaning:'makan malam' },
  { level:'N5', type:'vocab', word:'べんとう', reading:'べんとう', meaning:'bekal' },
  { level:'N5', type:'vocab', word:'おにぎり', reading:'おにぎり', meaning:'nasi kepal' },
  { level:'N5', type:'vocab', word:'ラーメン', reading:'ラーメン', meaning:'ramen' },
  { level:'N5', type:'vocab', word:'うどん', reading:'うどん', meaning:'udon' },
  { level:'N5', type:'vocab', word:'そば', reading:'そば', meaning:'soba' },
  { level:'N5', type:'vocab', word:'すし', reading:'すし', meaning:'sushi' },
  { level:'N5', type:'vocab', word:'カレー', reading:'カレー', meaning:'kari' },
  { level:'N5', type:'vocab', word:'サラダ', reading:'サラダ', meaning:'salad' },
  { level:'N5', type:'vocab', word:'スープ', reading:'スープ', meaning:'sup' },
  { level:'N5', type:'vocab', word:'ケーキ', reading:'ケーキ', meaning:'kue' },
  { level:'N5', type:'vocab', word:'アイスクリーム', reading:'アイスクリーム', meaning:'es krim' },
  { level:'N5', type:'vocab', word:'チョコレート', reading:'チョコレート', meaning:'cokelat' },
  { level:'N5', type:'vocab', word:'ジュース', reading:'ジュース', meaning:'jus' },
  { level:'N5', type:'vocab', word:'コーヒー', reading:'コーヒー', meaning:'kopi' },
  { level:'N5', type:'vocab', word:'くだものや', reading:'くだものや', meaning:'toko buah' },
  { level:'N5', type:'vocab', word:'レストラン', reading:'レストラン', meaning:'restoran' },
  { level:'N5', type:'vocab', word:'コンビニ', reading:'コンビニ', meaning:'minimarket' },
  { level:'N5', type:'vocab', word:'スーパー', reading:'スーパー', meaning:'supermarket' },
  { level:'N5', type:'vocab', word:'デパート', reading:'デパート', meaning:'department store' },
  { level:'N5', type:'vocab', word:'ホテル', reading:'ホテル', meaning:'hotel' },
  { level:'N5', type:'vocab', word:'ちかてつ', reading:'ちかてつ', meaning:'kereta bawah tanah' },
  { level:'N5', type:'vocab', word:'くうこう', reading:'くうこう', meaning:'bandara' },
  { level:'N5', type:'vocab', word:'くりにっく', reading:'くりにっく', meaning:'klinik' },
  { level:'N5', type:'vocab', word:'としょかん', reading:'としょかん', meaning:'perpustakaan' },
  { level:'N5', type:'vocab', word:'じどうはんばいき', reading:'じどうはんばいき', meaning:'mesin penjual otomatis' },
  { level:'N5', type:'vocab', word:'ゆうびんきょく', reading:'ゆうびんきょく', meaning:'kantor pos' },
  { level:'N5', type:'vocab', word:'けいさつ', reading:'けいさつ', meaning:'polisi' },
  { level:'N5', type:'vocab', word:'どうぶつえん', reading:'どうぶつえん', meaning:'kebun binatang' },
  { level:'N5', type:'vocab', word:'えいがかん', reading:'えいがかん', meaning:'bioskop' },
  { level:'N5', type:'vocab', word:'ほんや', reading:'ほんや', meaning:'toko buku' },
  { level:'N5', type:'vocab', word:'きっさてん', reading:'きっさてん', meaning:'kedai kopi' },
  { level:'N5', type:'vocab', word:'じゅうたく', reading:'じゅうたく', meaning:'rumah/perumahan' },
  { level:'N5', type:'vocab', word:'アパート', reading:'アパート', meaning:'apartemen' },
  { level:'N5', type:'vocab', word:'げんかん', reading:'げんかん', meaning:'pintu masuk rumah' },
  { level:'N5', type:'vocab', word:'だいどころ', reading:'だいどころ', meaning:'dapur' },
  { level:'N5', type:'vocab', word:'おふろ', reading:'おふろ', meaning:'bak mandi' },
  { level:'N5', type:'vocab', word:'トイレ', reading:'トイレ', meaning:'toilet' },
  { level:'N5', type:'vocab', word:'ベッド', reading:'ベッド', meaning:'tempat tidur' },
  { level:'N5', type:'vocab', word:'テーブル', reading:'テーブル', meaning:'meja' },
  { level:'N5', type:'vocab', word:'でんき', reading:'でんき', meaning:'listrik/lampu' },
  { level:'N5', type:'vocab', word:'れいぞうこ', reading:'れいぞうこ', meaning:'kulkas' },
  { level:'N5', type:'vocab', word:'せんたくき', reading:'せんたくき', meaning:'mesin cuci' },
  { level:'N5', type:'vocab', word:'テレビ', reading:'テレビ', meaning:'televisi' },
  { level:'N5', type:'vocab', word:'ラジオ', reading:'ラジオ', meaning:'radio' },
  { level:'N5', type:'vocab', word:'パソコン', reading:'パソコン', meaning:'komputer' },
  { level:'N5', type:'vocab', word:'スマートフォン', reading:'スマートフォン', meaning:'ponsel pintar' },
  { level:'N5', type:'vocab', word:'ボールペン', reading:'ボールペン', meaning:'pulpen' },
  { level:'N5', type:'vocab', word:'けしゴム', reading:'けしゴム', meaning:'penghapus' },
  { level:'N5', type:'vocab', word:'はさみ', reading:'はさみ', meaning:'gunting' },
  { level:'N5', type:'vocab', word:'ものさし', reading:'ものさし', meaning:'penggaris' },
  { level:'N5', type:'vocab', word:'じしょ', reading:'じしょ', meaning:'kamus' },
  { level:'N5', type:'vocab', word:'きょうかしょ', reading:'きょうかしょ', meaning:'buku pelajaran' },
  { level:'N5', type:'vocab', word:'しゅくだい', reading:'しゅくだい', meaning:'pekerjaan rumah' },
  { level:'N5', type:'vocab', word:'しつもん', reading:'しつもん', meaning:'pertanyaan' },
  { level:'N5', type:'vocab', word:'こたえ', reading:'こたえ', meaning:'jawaban' },
  { level:'N5', type:'vocab', word:'もんだい', reading:'もんだい', meaning:'soal/masalah' },
  { level:'N5', type:'vocab', word:'よしゅう', reading:'よしゅう', meaning:'belajar sebelum pelajaran' },
  { level:'N5', type:'vocab', word:'じゅぎょう', reading:'じゅぎょう', meaning:'pelajaran/kelas' },
  { level:'N5', type:'vocab', word:'テスト', reading:'テスト', meaning:'ujian/tes' },
  { level:'N5', type:'vocab', word:'せいせき', reading:'せいせき', meaning:'nilai/prestasi' },
  { level:'N5', type:'vocab', word:'クラス', reading:'クラス', meaning:'kelas' },
  { level:'N5', type:'vocab', word:'せいと', reading:'せいと', meaning:'murid/siswa' },
  { level:'N5', type:'vocab', word:'きょうしつ', reading:'きょうしつ', meaning:'ruang kelas' },
  { level:'N5', type:'vocab', word:'こうちょう', reading:'こうちょう', meaning:'kepala sekolah' },

  { level:'N5', type:'vocab', word:'しんせき', reading:'しんせき', meaning:'kerabat' },
  { level:'N5', type:'vocab', word:'まご', reading:'まご', meaning:'cucu' },
  { level:'N5', type:'vocab', word:'めい', reading:'めい', meaning:'keponakan perempuan' },
  { level:'N5', type:'vocab', word:'おい', reading:'おい', meaning:'keponakan laki-laki' },
  { level:'N5', type:'vocab', word:'りょうしん', reading:'りょうしん', meaning:'orang tua' },
  { level:'N5', type:'vocab', word:'きょうだい', reading:'きょうだい', meaning:'saudara kandung' },
  { level:'N5', type:'vocab', word:'ふうふ', reading:'ふうふ', meaning:'pasangan suami istri' },
  { level:'N5', type:'vocab', word:'しんゆう', reading:'しんゆう', meaning:'sahabat dekat' },
  { level:'N5', type:'vocab', word:'どうりょう', reading:'どうりょう', meaning:'rekan kerja' },
  { level:'N5', type:'vocab', word:'となりのひと', reading:'となりのひと', meaning:'orang sebelah/tetangga' },
  { level:'N5', type:'vocab', word:'ちかじょ', reading:'ちかじょ', meaning:'lingkungan sekitar' },
  { level:'N5', type:'vocab', word:'まわり', reading:'まわり', meaning:'sekitar/sekeliling' },
  { level:'N5', type:'vocab', word:'こども', reading:'こども', meaning:'anak' },
  { level:'N5', type:'vocab', word:'あかちゃん', reading:'あかちゃん', meaning:'bayi' },
  { level:'N5', type:'vocab', word:'おとな', reading:'おとな', meaning:'orang dewasa' },
  { level:'N5', type:'vocab', word:'おとこのこ', reading:'おとこのこ', meaning:'anak laki-laki' },
  { level:'N5', type:'vocab', word:'おんなのこ', reading:'おんなのこ', meaning:'anak perempuan' },
  { level:'N5', type:'vocab', word:'おきゃくさん', reading:'おきゃくさん', meaning:'tamu/pelanggan' },
  { level:'N5', type:'vocab', word:'となり', reading:'となり', meaning:'sebelah' },
  { level:'N5', type:'vocab', word:'ちかく', reading:'ちかく', meaning:'dekat/sekitar' },
  { level:'N5', type:'vocab', word:'うえ', reading:'うえ', meaning:'atas' },
  { level:'N5', type:'vocab', word:'した', reading:'した', meaning:'bawah' },
  { level:'N5', type:'vocab', word:'まえ', reading:'まえ', meaning:'depan' },
  { level:'N5', type:'vocab', word:'うしろ', reading:'うしろ', meaning:'belakang' },
  { level:'N5', type:'vocab', word:'なか', reading:'なか', meaning:'dalam' },
  { level:'N5', type:'vocab', word:'そと', reading:'そと', meaning:'luar' },
  { level:'N5', type:'vocab', word:'みぎ', reading:'みぎ', meaning:'kanan' },
  { level:'N5', type:'vocab', word:'ひだり', reading:'ひだり', meaning:'kiri' },
  { level:'N5', type:'vocab', word:'よこ', reading:'よこ', meaning:'samping' },
  { level:'N5', type:'vocab', word:'あいだ', reading:'あいだ', meaning:'antara' },
  { level:'N5', type:'vocab', word:'いりぐち', reading:'いりぐち', meaning:'pintu masuk' },
  { level:'N5', type:'vocab', word:'でぐち', reading:'でぐち', meaning:'pintu keluar' },
  { level:'N5', type:'vocab', word:'かいだん', reading:'かいだん', meaning:'tangga' },
  { level:'N5', type:'vocab', word:'エレベーター', reading:'エレベーター', meaning:'lift' },
  { level:'N5', type:'vocab', word:'エスカレーター', reading:'エスカレーター', meaning:'eskalator' },
  { level:'N5', type:'vocab', word:'ろうか', reading:'ろうか', meaning:'lorong' },
  { level:'N5', type:'vocab', word:'にわ', reading:'にわ', meaning:'halaman' },
  { level:'N5', type:'vocab', word:'まど', reading:'まど', meaning:'jendela' },
  { level:'N5', type:'vocab', word:'ドア', reading:'ドア', meaning:'pintu' },
  { level:'N5', type:'vocab', word:'かべ', reading:'かべ', meaning:'dinding' },
  { level:'N5', type:'vocab', word:'ゆか', reading:'ゆか', meaning:'lantai' },
  { level:'N5', type:'vocab', word:'やね', reading:'やね', meaning:'atap' },
  { level:'N5', type:'vocab', word:'しょくどう', reading:'しょくどう', meaning:'ruang makan/kantin' },
  { level:'N5', type:'vocab', word:'おてあらい', reading:'おてあらい', meaning:'toilet' },
  { level:'N5', type:'vocab', word:'ひるね', reading:'ひるね', meaning:'tidur siang' },
  { level:'N5', type:'vocab', word:'あさごろ', reading:'あさごろ', meaning:'sekitar pagi' },
  { level:'N5', type:'vocab', word:'ゆうがた', reading:'ゆうがた', meaning:'sore' },
  { level:'N5', type:'vocab', word:'よなか', reading:'よなか', meaning:'tengah malam' },
  { level:'N5', type:'vocab', word:'まよなか', reading:'まよなか', meaning:'tengah malam' },
  { level:'N5', type:'vocab', word:'きせつ', reading:'きせつ', meaning:'musim' },
  { level:'N5', type:'vocab', word:'はる', reading:'はる', meaning:'musim semi' },
  { level:'N5', type:'vocab', word:'なつ', reading:'なつ', meaning:'musim panas' },
  { level:'N5', type:'vocab', word:'あき', reading:'あき', meaning:'musim gugur' },
  { level:'N5', type:'vocab', word:'ふゆ', reading:'ふゆ', meaning:'musim dingin' },
  { level:'N5', type:'vocab', word:'てんき', reading:'てんき', meaning:'cuaca' },
  { level:'N5', type:'vocab', word:'はれ', reading:'はれ', meaning:'cerah' },
  { level:'N5', type:'vocab', word:'くもり', reading:'くもり', meaning:'berawan' },
  { level:'N5', type:'vocab', word:'ゆき', reading:'ゆき', meaning:'salju' },
  { level:'N5', type:'vocab', word:'かぜ', reading:'かぜ', meaning:'angin' },
  { level:'N5', type:'vocab', word:'たいふう', reading:'たいふう', meaning:'topan' },
  { level:'N5', type:'vocab', word:'そら', reading:'そら', meaning:'langit' },
  { level:'N5', type:'vocab', word:'ほし', reading:'ほし', meaning:'bintang' },
  { level:'N5', type:'vocab', word:'つき', reading:'つき', meaning:'bulan' },
  { level:'N5', type:'vocab', word:'たいよう', reading:'たいよう', meaning:'matahari' },
  { level:'N5', type:'vocab', word:'くも', reading:'くも', meaning:'awan' },
  { level:'N5', type:'vocab', word:'にじ', reading:'にじ', meaning:'pelangi' },
  { level:'N5', type:'vocab', word:'もり', reading:'もり', meaning:'hutan' },
  { level:'N5', type:'vocab', word:'しま', reading:'しま', meaning:'pulau' },
  { level:'N5', type:'vocab', word:'いけ', reading:'いけ', meaning:'kolam' },
  { level:'N5', type:'vocab', word:'みずうみ', reading:'みずうみ', meaning:'danau' },
  { level:'N5', type:'vocab', word:'うさぎ', reading:'うさぎ', meaning:'kelinci' },
  { level:'N5', type:'vocab', word:'ねずみ', reading:'ねずみ', meaning:'tikus' },
  { level:'N5', type:'vocab', word:'うし', reading:'うし', meaning:'sapi' },
  { level:'N5', type:'vocab', word:'ぶた', reading:'ぶた', meaning:'babi' },
  { level:'N5', type:'vocab', word:'とり', reading:'とり', meaning:'burung' },
  { level:'N5', type:'vocab', word:'うま', reading:'うま', meaning:'kuda' },
  { level:'N5', type:'vocab', word:'ひつじ', reading:'ひつじ', meaning:'domba' },
  { level:'N5', type:'vocab', word:'ぞう', reading:'ぞう', meaning:'gajah' },
  { level:'N5', type:'vocab', word:'きりん', reading:'きりん', meaning:'jerapah' },
  { level:'N5', type:'vocab', word:'パンダ', reading:'パンダ', meaning:'panda' },
  { level:'N5', type:'vocab', word:'サル', reading:'サル', meaning:'monyet' },
  { level:'N5', type:'vocab', word:'ライオン', reading:'ライオン', meaning:'singa' },
  { level:'N5', type:'vocab', word:'とら', reading:'とら', meaning:'harimau' },
  { level:'N5', type:'vocab', word:'へび', reading:'へび', meaning:'ular' },
  { level:'N5', type:'vocab', word:'かめ', reading:'かめ', meaning:'kura-kura' },
  { level:'N5', type:'vocab', word:'むし', reading:'むし', meaning:'serangga' },
  { level:'N5', type:'vocab', word:'ちょう', reading:'ちょう', meaning:'kupu-kupu' },
  { level:'N5', type:'vocab', word:'はち', reading:'はち', meaning:'lebah' },
  { level:'N5', type:'vocab', word:'か', reading:'か', meaning:'nyamuk' },
  { level:'N5', type:'vocab', word:'はえ', reading:'はえ', meaning:'lalat' },
  { level:'N5', type:'vocab', word:'き', reading:'き', meaning:'pohon' },
  { level:'N5', type:'vocab', word:'たね', reading:'たね', meaning:'biji' },
  { level:'N5', type:'vocab', word:'み', reading:'み', meaning:'buah/biji' },
  { level:'N5', type:'vocab', word:'えだ', reading:'えだ', meaning:'dahan' },
  { level:'N5', type:'vocab', word:'はっぱ', reading:'はっぱ', meaning:'daun' },
  { level:'N5', type:'vocab', word:'ね', reading:'ね', meaning:'akar' },

  { level:'N5', type:'vocab', word:'そうじ', reading:'そうじ', meaning:'bersih-bersih' },
  { level:'N5', type:'vocab', word:'せんたく', reading:'せんたく', meaning:'mencuci pakaian' },
  { level:'N5', type:'vocab', word:'りょうり', reading:'りょうり', meaning:'memasak/masakan' },
  { level:'N5', type:'vocab', word:'さんぽ', reading:'さんぽ', meaning:'jalan-jalan' },
  { level:'N5', type:'vocab', word:'うんどう', reading:'うんどう', meaning:'olahraga' },
  { level:'N5', type:'vocab', word:'りょこう', reading:'りょこう', meaning:'perjalanan/wisata' },
  { level:'N5', type:'vocab', word:'おんがく', reading:'おんがく', meaning:'musik' },
  { level:'N5', type:'vocab', word:'うた', reading:'うた', meaning:'lagu' },
  { level:'N5', type:'vocab', word:'おどり', reading:'おどり', meaning:'tarian' },
  { level:'N5', type:'vocab', word:'しゃしん', reading:'しゃしん', meaning:'foto' },
  { level:'N5', type:'vocab', word:'え', reading:'え', meaning:'gambar/lukisan' },

  { level:'N5', type:'vocab', word:'そうじする', reading:'そうじする', meaning:'membersihkan' },
  { level:'N5', type:'vocab', word:'せんたくする', reading:'せんたくする', meaning:'mencuci pakaian' },
  { level:'N5', type:'vocab', word:'りょうりする', reading:'りょうりする', meaning:'memasak' },
  { level:'N5', type:'vocab', word:'うんどうする', reading:'うんどうする', meaning:'berolahraga' },
  { level:'N5', type:'vocab', word:'さんぽする', reading:'さんぽする', meaning:'berjalan-jalan' },
  { level:'N5', type:'vocab', word:'りょこうする', reading:'りょこうする', meaning:'bepergian' },
  { level:'N5', type:'vocab', word:'うたう', reading:'うたう', meaning:'bernyanyi' },
  { level:'N5', type:'vocab', word:'おどる', reading:'おどる', meaning:'menari' },
  { level:'N5', type:'vocab', word:'とる', reading:'とる', meaning:'mengambil' },
  { level:'N5', type:'vocab', word:'あらう', reading:'あらう', meaning:'mencuci' },
  { level:'N5', type:'vocab', word:'きる', reading:'きる', meaning:'memakai/memotong' },
  { level:'N5', type:'vocab', word:'ぬぐ', reading:'ぬぐ', meaning:'melepas pakaian' },
  { level:'N5', type:'vocab', word:'はく', reading:'はく', meaning:'memakai sepatu/celana' },
  { level:'N5', type:'vocab', word:'かぶる', reading:'かぶる', meaning:'memakai topi' },
  { level:'N5', type:'vocab', word:'もつ', reading:'もつ', meaning:'membawa/memegang' },
  { level:'N5', type:'vocab', word:'おく', reading:'おく', meaning:'meletakkan' },
  { level:'N5', type:'vocab', word:'しる', reading:'しる', meaning:'mengetahui' },
  { level:'N5', type:'vocab', word:'わかる', reading:'わかる', meaning:'mengerti' },
  { level:'N5', type:'vocab', word:'おぼえる', reading:'おぼえる', meaning:'menghafal/mengingat' },
  { level:'N5', type:'vocab', word:'わすれる', reading:'わすれる', meaning:'lupa' },
  { level:'N5', type:'vocab', word:'おしえる', reading:'おしえる', meaning:'mengajar/memberi tahu' },
  { level:'N5', type:'vocab', word:'ならう', reading:'ならう', meaning:'belajar dari seseorang' },
  { level:'N5', type:'vocab', word:'すわる', reading:'すわる', meaning:'duduk' },
  { level:'N5', type:'vocab', word:'つかれる', reading:'つかれる', meaning:'lelah' },
  { level:'N5', type:'vocab', word:'はじまる', reading:'はじまる', meaning:'mulai' },
  { level:'N5', type:'vocab', word:'おわる', reading:'おわる', meaning:'selesai' },
  { level:'N5', type:'vocab', word:'あける', reading:'あける', meaning:'membuka' },
  { level:'N5', type:'vocab', word:'しめる', reading:'しめる', meaning:'menutup' },
  { level:'N5', type:'vocab', word:'つける', reading:'つける', meaning:'menyalakan/memasang' },
  { level:'N5', type:'vocab', word:'けす', reading:'けす', meaning:'mematikan/menghapus' },
  { level:'N5', type:'vocab', word:'はいる', reading:'はいる', meaning:'masuk' },
  { level:'N5', type:'vocab', word:'でる', reading:'でる', meaning:'keluar' },
  { level:'N5', type:'vocab', word:'のる', reading:'のる', meaning:'naik' },
  { level:'N5', type:'vocab', word:'おりる', reading:'おりる', meaning:'turun' },
  { level:'N5', type:'vocab', word:'あるく', reading:'あるく', meaning:'berjalan' },
  { level:'N5', type:'vocab', word:'はしる', reading:'はしる', meaning:'berlari' },
  { level:'N5', type:'vocab', word:'とまる', reading:'とまる', meaning:'berhenti/menginap' },
  { level:'N5', type:'vocab', word:'わたる', reading:'わたる', meaning:'menyeberang' },
  { level:'N5', type:'vocab', word:'まがる', reading:'まがる', meaning:'berbelok' },
  { level:'N5', type:'vocab', word:'さがす', reading:'さがす', meaning:'mencari' },
  { level:'N5', type:'vocab', word:'みつける', reading:'みつける', meaning:'menemukan' },
  { level:'N5', type:'vocab', word:'えらぶ', reading:'えらぶ', meaning:'memilih' },
  { level:'N5', type:'vocab', word:'かりる', reading:'かりる', meaning:'meminjam' },
  { level:'N5', type:'vocab', word:'かす', reading:'かす', meaning:'meminjamkan' },
  { level:'N5', type:'vocab', word:'かえす', reading:'かえす', meaning:'mengembalikan' },
  { level:'N5', type:'vocab', word:'おくる', reading:'おくる', meaning:'mengirim' },
  { level:'N5', type:'vocab', word:'もらう', reading:'もらう', meaning:'menerima' },
  { level:'N5', type:'vocab', word:'あげる', reading:'あげる', meaning:'memberi' },
  { level:'N5', type:'vocab', word:'てつだう', reading:'てつだう', meaning:'membantu' },
  { level:'N5', type:'vocab', word:'よぶ', reading:'よぶ', meaning:'memanggil' },
  { level:'N5', type:'vocab', word:'いそぐ', reading:'いそぐ', meaning:'bergegas' },
  { level:'N5', type:'vocab', word:'おくれる', reading:'おくれる', meaning:'terlambat' },
  { level:'N5', type:'vocab', word:'なくす', reading:'なくす', meaning:'kehilangan' },
  { level:'N5', type:'vocab', word:'なおす', reading:'なおす', meaning:'memperbaiki' },
  { level:'N5', type:'vocab', word:'こわれる', reading:'こわれる', meaning:'rusak' },
  { level:'N5', type:'vocab', word:'なおる', reading:'なおる', meaning:'menjadi sembuh/baik' },
  { level:'N5', type:'vocab', word:'つかまる', reading:'つかまる', meaning:'tertangkap/berpegangan' },
  { level:'N5', type:'vocab', word:'うごく', reading:'うごく', meaning:'bergerak' },
  { level:'N5', type:'vocab', word:'かわる', reading:'かわる', meaning:'berubah' },
  { level:'N5', type:'vocab', word:'くらべる', reading:'くらべる', meaning:'membandingkan' },
  { level:'N5', type:'vocab', word:'ねむい', reading:'ねむい', meaning:'mengantuk' },
  { level:'N5', type:'vocab', word:'いたい', reading:'いたい', meaning:'sakit' },
  { level:'N5', type:'vocab', word:'かゆい', reading:'かゆい', meaning:'gatal' },
  { level:'N5', type:'vocab', word:'つよい', reading:'つよい', meaning:'kuat' },
  { level:'N5', type:'vocab', word:'よわい', reading:'よわい', meaning:'lemah' },
  { level:'N5', type:'vocab', word:'あかるい', reading:'あかるい', meaning:'terang/ceria' },
  { level:'N5', type:'vocab', word:'くらい', reading:'くらい', meaning:'gelap' },
  { level:'N5', type:'vocab', word:'うるさい', reading:'うるさい', meaning:'berisik' },
  { level:'N5', type:'vocab', word:'あぶない', reading:'あぶない', meaning:'berbahaya' },
  { level:'N5', type:'vocab', word:'あんぜん', reading:'あんぜん', meaning:'aman' },
  { level:'N5', type:'vocab', word:'たいせつ', reading:'たいせつ', meaning:'penting/berharga' },
  { level:'N5', type:'vocab', word:'ひつよう', reading:'ひつよう', meaning:'perlu' },
  { level:'N5', type:'vocab', word:'じょうず', reading:'じょうず', meaning:'pandai' },
  { level:'N5', type:'vocab', word:'へた', reading:'へた', meaning:'tidak pandai' },
  { level:'N5', type:'vocab', word:'とくい', reading:'とくい', meaning:'mahir/unggul' },
  { level:'N5', type:'vocab', word:'にがて', reading:'にがて', meaning:'kurang pandai/tidak suka' },
  { level:'N5', type:'vocab', word:'すてき', reading:'すてき', meaning:'bagus/menawan' },
  { level:'N5', type:'vocab', word:'へん', reading:'へん', meaning:'aneh' },
  { level:'N5', type:'vocab', word:'ふしぎ', reading:'ふしぎ', meaning:'misterius/aneh' },
  { level:'N5', type:'vocab', word:'まじめ', reading:'まじめ', meaning:'serius/rajin' },
  { level:'N5', type:'vocab', word:'しんせつ', reading:'しんせつ', meaning:'baik hati' },
  { level:'N5', type:'vocab', word:'げんじゅう', reading:'げんじゅう', meaning:'ketat/ketat dalam aturan' },
  { level:'N5', type:'vocab', word:'じょうぶ', reading:'じょうぶ', meaning:'kuat/tahan lama' },
  { level:'N5', type:'vocab', word:'らく', reading:'らく', meaning:'nyaman/mudah' },
  { level:'N5', type:'vocab', word:'たいくつ', reading:'たいくつ', meaning:'membosankan' },
  { level:'N5', type:'vocab', word:'すばらしい', reading:'すばらしい', meaning:'luar biasa' },
  { level:'N5', type:'vocab', word:'かわいい', reading:'かわいい', meaning:'imut' },
  { level:'N5', type:'vocab', word:'かっこいい', reading:'かっこいい', meaning:'keren' },
  { level:'N5', type:'vocab', word:'うつくしい', reading:'うつくしい', meaning:'indah' },
  { level:'N5', type:'vocab', word:'わかい', reading:'わかい', meaning:'muda' },
  { level:'N5', type:'vocab', word:'とし', reading:'とし', meaning:'usia/tahun' },
  { level:'N5', type:'vocab', word:'しあわせ', reading:'しあわせ', meaning:'kebahagiaan' },
  { level:'N5', type:'vocab', word:'しっぱい', reading:'しっぱい', meaning:'kegagalan' },
  { level:'N5', type:'vocab', word:'せいこう', reading:'せいこう', meaning:'keberhasilan' },
  { level:'N5', type:'vocab', word:'ゆめ', reading:'ゆめ', meaning:'mimpi' },
  { level:'N5', type:'vocab', word:'きぼう', reading:'きぼう', meaning:'harapan' },
  { level:'N5', type:'vocab', word:'りゆう', reading:'りゆう', meaning:'alasan' },
  { level:'N5', type:'vocab', word:'いみ', reading:'いみ', meaning:'arti/makna' },
  { level:'N5', type:'vocab', word:'ほうほう', reading:'ほうほう', meaning:'cara/metode' },
  { level:'N5', type:'vocab', word:'じゅんび', reading:'じゅんび', meaning:'persiapan' },

  { level:'N5', type:'vocab', word:'まち', reading:'まち', meaning:'kota' },
  { level:'N5', type:'vocab', word:'ちず', reading:'ちず', meaning:'peta' },
  { level:'N5', type:'vocab', word:'ばしょ', reading:'ばしょ', meaning:'tempat' },
  { level:'N5', type:'vocab', word:'くに', reading:'くに', meaning:'negara' },
  { level:'N5', type:'vocab', word:'せかい', reading:'せかい', meaning:'dunia' },
  { level:'N5', type:'vocab', word:'まんなか', reading:'まんなか', meaning:'tengah' },
  { level:'N5', type:'vocab', word:'うちがわ', reading:'うちがわ', meaning:'bagian dalam' },
  { level:'N5', type:'vocab', word:'ひがし', reading:'ひがし', meaning:'timur' },
  { level:'N5', type:'vocab', word:'にし', reading:'にし', meaning:'barat' },
  { level:'N5', type:'vocab', word:'みなみ', reading:'みなみ', meaning:'selatan' },
  { level:'N5', type:'vocab', word:'きた', reading:'きた', meaning:'utara' },
  { level:'N5', type:'vocab', word:'じゅうしょ', reading:'じゅうしょ', meaning:'alamat' },
  { level:'N5', type:'vocab', word:'ばんごう', reading:'ばんごう', meaning:'nomor' },
  { level:'N5', type:'vocab', word:'なまえ', reading:'なまえ', meaning:'nama' },
  { level:'N5', type:'vocab', word:'でんこうばん', reading:'でんこうばん', meaning:'papan elektronik' },
  { level:'N5', type:'vocab', word:'でんち', reading:'でんち', meaning:'baterai' },
  { level:'N5', type:'vocab', word:'かぎ', reading:'かぎ', meaning:'kunci' },
  { level:'N5', type:'vocab', word:'かがみ', reading:'かがみ', meaning:'cermin' },
  { level:'N5', type:'vocab', word:'せっけん', reading:'せっけん', meaning:'sabun' },
  { level:'N5', type:'vocab', word:'タオル', reading:'タオル', meaning:'handuk' },
  { level:'N5', type:'vocab', word:'はブラシ', reading:'はブラシ', meaning:'sikat gigi' },
  { level:'N5', type:'vocab', word:'くし', reading:'くし', meaning:'sisir' },
  { level:'N5', type:'vocab', word:'ふとん', reading:'ふとん', meaning:'kasur/futon' },
  { level:'N5', type:'vocab', word:'まくら', reading:'まくら', meaning:'bantal' },
  { level:'N5', type:'vocab', word:'もうふ', reading:'もうふ', meaning:'selimut' },
  { level:'N5', type:'vocab', word:'ひきだし', reading:'ひきだし', meaning:'laci' },
  { level:'N5', type:'vocab', word:'たな', reading:'たな', meaning:'rak' },
  { level:'N5', type:'vocab', word:'ごみばこ', reading:'ごみばこ', meaning:'tempat sampah' },
  { level:'N5', type:'vocab', word:'れんしゅう', reading:'れんしゅう', meaning:'latihan' },
  { level:'N5', type:'vocab', word:'しけん', reading:'しけん', meaning:'ujian' },
  { level:'N5', type:'vocab', word:'きゅうけい', reading:'きゅうけい', meaning:'istirahat' },
  { level:'N5', type:'vocab', word:'せつめい', reading:'せつめい', meaning:'penjelasan' },
  { level:'N5', type:'vocab', word:'れんらく', reading:'れんらく', meaning:'kontak/kabar' },
  { level:'N5', type:'vocab', word:'しりょう', reading:'しりょう', meaning:'bahan/dokumen' },
  { level:'N5', type:'vocab', word:'じゅうよう', reading:'じゅうよう', meaning:'penting' },
  { level:'N5', type:'vocab', word:'せんもん', reading:'せんもん', meaning:'bidang khusus' },
  { level:'N5', type:'vocab', word:'けんきゅう', reading:'けんきゅう', meaning:'penelitian' },
  { level:'N5', type:'vocab', word:'ほうもん', reading:'ほうもん', meaning:'kunjungan' },
  { level:'N5', type:'vocab', word:'よてい', reading:'よてい', meaning:'rencana/jadwal' },
  { level:'N5', type:'vocab', word:'やくそく', reading:'やくそく', meaning:'janji' },
  { level:'N5', type:'vocab', word:'じかんわり', reading:'じかんわり', meaning:'jadwal pelajaran' },
  { level:'N5', type:'vocab', word:'かいもの', reading:'かいもの', meaning:'berbelanja' },
  { level:'N5', type:'vocab', word:'りょうきん', reading:'りょうきん', meaning:'biaya/tarif' },
  { level:'N5', type:'vocab', word:'ねだん', reading:'ねだん', meaning:'harga' },
  { level:'N5', type:'vocab', word:'おつり', reading:'おつり', meaning:'uang kembalian' },
  { level:'N5', type:'vocab', word:'しょうひん', reading:'しょうひん', meaning:'barang dagangan' },
  { level:'N5', type:'vocab', word:'しょうたい', reading:'しょうたい', meaning:'undangan' },
  { level:'N5', type:'vocab', word:'きっぷ', reading:'きっぷ', meaning:'tiket' },
  { level:'N5', type:'vocab', word:'りょこうかいしゃ', reading:'りょこうかいしゃ', meaning:'perusahaan perjalanan' },
  { level:'N5', type:'vocab', word:'りょかん', reading:'りょかん', meaning:'penginapan tradisional Jepang' },
  { level:'N5', type:'vocab', word:'おてら', reading:'おてら', meaning:'kuil Buddha' },
  { level:'N5', type:'vocab', word:'じんじゃ', reading:'じんじゃ', meaning:'kuil Shinto' },
  { level:'N5', type:'vocab', word:'はくぶつかん', reading:'はくぶつかん', meaning:'museum' },
  { level:'N5', type:'vocab', word:'びじゅつかん', reading:'びじゅつかん', meaning:'museum seni' },
  { level:'N5', type:'vocab', word:'たいしかん', reading:'たいしかん', meaning:'kedutaan' },
  { level:'N5', type:'vocab', word:'みなと', reading:'みなと', meaning:'pelabuhan' },
  { level:'N5', type:'vocab', word:'えきまえ', reading:'えきまえ', meaning:'depan stasiun' },
  { level:'N5', type:'vocab', word:'あさって', reading:'あさって', meaning:'lusa' },
  { level:'N5', type:'vocab', word:'おととい', reading:'おととい', meaning:'kemarin lusa' },
  { level:'N5', type:'vocab', word:'こんしゅう', reading:'こんしゅう', meaning:'minggu ini' },
  { level:'N5', type:'vocab', word:'らいしゅう', reading:'らいしゅう', meaning:'minggu depan' },
  { level:'N5', type:'vocab', word:'せんしゅう', reading:'せんしゅう', meaning:'minggu lalu' },
  { level:'N5', type:'vocab', word:'こんげつ', reading:'こんげつ', meaning:'bulan ini' },
  { level:'N5', type:'vocab', word:'らいげつ', reading:'らいげつ', meaning:'bulan depan' },
  { level:'N5', type:'vocab', word:'せんげつ', reading:'せんげつ', meaning:'bulan lalu' },
  { level:'N5', type:'vocab', word:'ことし', reading:'ことし', meaning:'tahun ini' },
  { level:'N5', type:'vocab', word:'らいねん', reading:'らいねん', meaning:'tahun depan' },
  { level:'N5', type:'vocab', word:'きょねん', reading:'きょねん', meaning:'tahun lalu' },
  { level:'N5', type:'vocab', word:'まいしゅう', reading:'まいしゅう', meaning:'setiap minggu' },
  { level:'N5', type:'vocab', word:'まいつき', reading:'まいつき', meaning:'setiap bulan' },
  { level:'N5', type:'vocab', word:'わらう', reading:'わらう', meaning:'tertawa' },
  { level:'N5', type:'vocab', word:'なく', reading:'なく', meaning:'menangis' },
  { level:'N5', type:'vocab', word:'しぬ', reading:'しぬ', meaning:'meninggal' },
  { level:'N5', type:'vocab', word:'うまれる', reading:'うまれる', meaning:'lahir' },
  { level:'N5', type:'vocab', word:'けっこんする', reading:'けっこんする', meaning:'menikah' },
  { level:'N5', type:'vocab', word:'そつぎょうする', reading:'そつぎょうする', meaning:'lulus' },
  { level:'N5', type:'vocab', word:'れんしゅうする', reading:'れんしゅうする', meaning:'berlatih' },
  { level:'N5', type:'vocab', word:'けんかする', reading:'けんかする', meaning:'bertengkar' },
  { level:'N5', type:'vocab', word:'でんわする', reading:'でんわする', meaning:'menelepon' },
  { level:'N5', type:'vocab', word:'そうだんする', reading:'そうだんする', meaning:'berkonsultasi' },
  { level:'N5', type:'vocab', word:'よやくする', reading:'よやくする', meaning:'memesan/membuat reservasi' },
  { level:'N5', type:'vocab', word:'しょうかいする', reading:'しょうかいする', meaning:'memperkenalkan' },
  { level:'N5', type:'vocab', word:'あつめる', reading:'あつめる', meaning:'mengumpulkan' },
  { level:'N5', type:'vocab', word:'つづける', reading:'つづける', meaning:'melanjutkan' },
  { level:'N5', type:'vocab', word:'やめる', reading:'やめる', meaning:'berhenti' },
  { level:'N5', type:'vocab', word:'きめる', reading:'きめる', meaning:'memutuskan' },
  { level:'N5', type:'vocab', word:'かんがえる', reading:'かんがえる', meaning:'berpikir' },
  { level:'N5', type:'vocab', word:'うごかす', reading:'うごかす', meaning:'menggerakkan' },
  { level:'N5', type:'vocab', word:'つたえる', reading:'つたえる', meaning:'menyampaikan' },
  { level:'N5', type:'vocab', word:'たずねる', reading:'たずねる', meaning:'bertanya/mengunjungi' },
  { level:'N5', type:'vocab', word:'こたえる', reading:'こたえる', meaning:'menjawab' },
  { level:'N5', type:'vocab', word:'まもる', reading:'まもる', meaning:'melindungi/menaati' },
  { level:'N5', type:'vocab', word:'ひろう', reading:'ひろう', meaning:'memungut' },
  { level:'N5', type:'vocab', word:'すてる', reading:'すてる', meaning:'membuang' },
  { level:'N5', type:'vocab', word:'かわく', reading:'かわく', meaning:'menjadi kering' },
  { level:'N5', type:'vocab', word:'ぬれる', reading:'ぬれる', meaning:'menjadi basah' },
  { level:'N5', type:'vocab', word:'さわる', reading:'さわる', meaning:'menyentuh' },
  { level:'N5', type:'vocab', word:'つく', reading:'つく', meaning:'tiba/menyala' },
  { level:'N5', type:'vocab', word:'さわぐ', reading:'さわぐ', meaning:'membuat keributan' },
  { level:'N5', type:'vocab', word:'ねがう', reading:'ねがう', meaning:'berharap/memohon' },

  { level:'N5', type:'vocab', word:'みかん', reading:'みかん', meaning:'jeruk mandarin' },
  { level:'N5', type:'vocab', word:'バナナ', reading:'バナナ', meaning:'pisang' },
  { level:'N5', type:'vocab', word:'ぶどう', reading:'ぶどう', meaning:'anggur' },
  { level:'N5', type:'vocab', word:'いちご', reading:'いちご', meaning:'stroberi' },
  { level:'N5', type:'vocab', word:'すいか', reading:'すいか', meaning:'semangka' },
  { level:'N5', type:'vocab', word:'メロン', reading:'メロン', meaning:'melon' },
  { level:'N5', type:'vocab', word:'レモン', reading:'レモン', meaning:'lemon' },
  { level:'N5', type:'vocab', word:'にんじん', reading:'にんじん', meaning:'wortel' },
  { level:'N5', type:'vocab', word:'たまねぎ', reading:'たまねぎ', meaning:'bawang bombai' },
  { level:'N5', type:'vocab', word:'じゃがいも', reading:'じゃがいも', meaning:'kentang' },
  { level:'N5', type:'vocab', word:'トマト', reading:'トマト', meaning:'tomat' },
  { level:'N5', type:'vocab', word:'キャベツ', reading:'キャベツ', meaning:'kol' },
  { level:'N5', type:'vocab', word:'レタス', reading:'レタス', meaning:'selada' },
  { level:'N5', type:'vocab', word:'きゅうり', reading:'きゅうり', meaning:'mentimun' },
  { level:'N5', type:'vocab', word:'なす', reading:'なす', meaning:'terong' },
  { level:'N5', type:'vocab', word:'だいこん', reading:'だいこん', meaning:'lobak' },
  { level:'N5', type:'vocab', word:'とうもろこし', reading:'とうもろこし', meaning:'jagung' },
  { level:'N5', type:'vocab', word:'まめ', reading:'まめ', meaning:'kacang' },
  { level:'N5', type:'vocab', word:'こめ', reading:'こめ', meaning:'beras' },
  { level:'N5', type:'vocab', word:'しお', reading:'しお', meaning:'garam' },
  { level:'N5', type:'vocab', word:'さとう', reading:'さとう', meaning:'gula' },
  { level:'N5', type:'vocab', word:'しょうゆ', reading:'しょうゆ', meaning:'kecap asin' },
  { level:'N5', type:'vocab', word:'ソース', reading:'ソース', meaning:'saus' },
  { level:'N5', type:'vocab', word:'バター', reading:'バター', meaning:'mentega' },
  { level:'N5', type:'vocab', word:'チーズ', reading:'チーズ', meaning:'keju' },
  { level:'N5', type:'vocab', word:'たまごやき', reading:'たまごやき', meaning:'telur dadar Jepang' },
  { level:'N5', type:'vocab', word:'みそしる', reading:'みそしる', meaning:'sup miso' },
  { level:'N5', type:'vocab', word:'てんぷら', reading:'てんぷら', meaning:'tempura' },
  { level:'N5', type:'vocab', word:'やきそば', reading:'やきそば', meaning:'mi goreng Jepang' },
  { level:'N5', type:'vocab', word:'おこのみやき', reading:'おこのみやき', meaning:'panekuk gurih Jepang' },
  { level:'N5', type:'vocab', word:'ぎょうざ', reading:'ぎょうざ', meaning:'pangsit Jepang' },
  { level:'N5', type:'vocab', word:'なっとう', reading:'なっとう', meaning:'natto' },
  { level:'N5', type:'vocab', word:'もち', reading:'もち', meaning:'mochi' },
  { level:'N5', type:'vocab', word:'だんご', reading:'だんご', meaning:'kue bola Jepang' },
  { level:'N5', type:'vocab', word:'あめ', reading:'あめ', meaning:'permen' },
  { level:'N5', type:'vocab', word:'ガム', reading:'ガム', meaning:'permen karet' },
  { level:'N5', type:'vocab', word:'クッキー', reading:'クッキー', meaning:'kukis' },
  { level:'N5', type:'vocab', word:'プリン', reading:'プリン', meaning:'puding' },
  { level:'N5', type:'vocab', word:'ジャム', reading:'ジャム', meaning:'selai' },
  { level:'N5', type:'vocab', word:'かみなり', reading:'かみなり', meaning:'petir' },
  { level:'N5', type:'vocab', word:'つゆ', reading:'つゆ', meaning:'musim hujan' },
  { level:'N5', type:'vocab', word:'しずく', reading:'しずく', meaning:'tetes air' },
  { level:'N5', type:'vocab', word:'ひかり', reading:'ひかり', meaning:'cahaya' },
  { level:'N5', type:'vocab', word:'かげ', reading:'かげ', meaning:'bayangan' },
  { level:'N5', type:'vocab', word:'におい', reading:'におい', meaning:'bau/aroma' },
  { level:'N5', type:'vocab', word:'おと', reading:'おと', meaning:'suara/bunyi' },
  { level:'N5', type:'vocab', word:'こえ', reading:'こえ', meaning:'suara manusia' },
  { level:'N5', type:'vocab', word:'やまびこ', reading:'やまびこ', meaning:'gema' },
  { level:'N5', type:'vocab', word:'なみ', reading:'なみ', meaning:'ombak' },
  { level:'N5', type:'vocab', word:'すな', reading:'すな', meaning:'pasir' },
  { level:'N5', type:'vocab', word:'いわ', reading:'いわ', meaning:'batu besar' },
  { level:'N5', type:'vocab', word:'つち', reading:'つち', meaning:'tanah' },
  { level:'N5', type:'vocab', word:'ほこり', reading:'ほこり', meaning:'debu' },
  { level:'N5', type:'vocab', word:'けむり', reading:'けむり', meaning:'asap' },
  { level:'N5', type:'vocab', word:'ひ', reading:'ひ', meaning:'api' },
  { level:'N5', type:'vocab', word:'たき', reading:'たき', meaning:'air terjun' },
  { level:'N5', type:'vocab', word:'どうくつ', reading:'どうくつ', meaning:'gua' },
  { level:'N5', type:'vocab', word:'たに', reading:'たに', meaning:'lembah' },
  { level:'N5', type:'vocab', word:'さばく', reading:'さばく', meaning:'gurun' },
  { level:'N5', type:'vocab', word:'きょうりゅう', reading:'きょうりゅう', meaning:'dinosaurus' },
  { level:'N5', type:'vocab', word:'くじら', reading:'くじら', meaning:'paus' },
  { level:'N5', type:'vocab', word:'イルカ', reading:'イルカ', meaning:'lumba-lumba' },
  { level:'N5', type:'vocab', word:'サメ', reading:'サメ', meaning:'hiu' },
  { level:'N5', type:'vocab', word:'タコ', reading:'タコ', meaning:'gurita' },
  { level:'N5', type:'vocab', word:'えび', reading:'えび', meaning:'udang' },
  { level:'N5', type:'vocab', word:'かに', reading:'かに', meaning:'kepiting' },
  { level:'N5', type:'vocab', word:'あり', reading:'あり', meaning:'semut' },
  { level:'N5', type:'vocab', word:'せみ', reading:'せみ', meaning:'tonggeret' },
  { level:'N5', type:'vocab', word:'すずめ', reading:'すずめ', meaning:'burung pipit' },
  { level:'N5', type:'vocab', word:'カラス', reading:'カラス', meaning:'burung gagak' },
  { level:'N5', type:'vocab', word:'フクロウ', reading:'フクロウ', meaning:'burung hantu' },
  { level:'N5', type:'vocab', word:'たぬき', reading:'たぬき', meaning:'anjing rakun' },
  { level:'N5', type:'vocab', word:'きつね', reading:'きつね', meaning:'rubah' },
  { level:'N5', type:'vocab', word:'しか', reading:'しか', meaning:'rusa' },
  { level:'N5', type:'vocab', word:'くま', reading:'くま', meaning:'beruang' },
  { level:'N5', type:'vocab', word:'いのしし', reading:'いのしし', meaning:'babi hutan' },
  { level:'N5', type:'vocab', word:'ゴリラ', reading:'ゴリラ', meaning:'gorila' },
  { level:'N5', type:'vocab', word:'カバ', reading:'カバ', meaning:'kuda nil' },
  { level:'N5', type:'vocab', word:'じてんしゃ', reading:'じてんしゃ', meaning:'sepeda' },
  { level:'N5', type:'vocab', word:'バイク', reading:'バイク', meaning:'sepeda motor' },
  { level:'N5', type:'vocab', word:'タクシー', reading:'タクシー', meaning:'taksi' },
  { level:'N5', type:'vocab', word:'バス', reading:'バス', meaning:'bus' },
  { level:'N5', type:'vocab', word:'ひこうき', reading:'ひこうき', meaning:'pesawat' },
  { level:'N5', type:'vocab', word:'ふね', reading:'ふね', meaning:'kapal' },
  { level:'N5', type:'vocab', word:'じどうしゃ', reading:'じどうしゃ', meaning:'kendaraan bermotor' },
  { level:'N5', type:'vocab', word:'しんかんせん', reading:'しんかんせん', meaning:'kereta cepat' },
  { level:'N5', type:'vocab', word:'こうそくどうろ', reading:'こうそくどうろ', meaning:'jalan tol' },
  { level:'N5', type:'vocab', word:'こうさてん', reading:'こうさてん', meaning:'persimpangan' },
  { level:'N5', type:'vocab', word:'しんごう', reading:'しんごう', meaning:'lampu lalu lintas' },
  { level:'N5', type:'vocab', word:'ほどう', reading:'ほどう', meaning:'trotoar' },
  { level:'N5', type:'vocab', word:'はし', reading:'はし', meaning:'jembatan' },
  { level:'N5', type:'vocab', word:'トンネル', reading:'トンネル', meaning:'terowongan' },
  { level:'N5', type:'vocab', word:'ちゅうしゃじょう', reading:'ちゅうしゃじょう', meaning:'tempat parkir' },
  { level:'N5', type:'vocab', word:'ガソリンスタンド', reading:'ガソリンスタンド', meaning:'pom bensin' },
  { level:'N5', type:'vocab', word:'うんてんしゅ', reading:'うんてんしゅ', meaning:'pengemudi' },
  { level:'N5', type:'vocab', word:'きゃく', reading:'きゃく', meaning:'penumpang/pelanggan' },
  { level:'N5', type:'vocab', word:'にもつ', reading:'にもつ', meaning:'barang bawaan' },
  { level:'N5', type:'vocab', word:'ていりゅうじょ', reading:'ていりゅうじょ', meaning:'halte' },
  { level:'N5', type:'vocab', word:'ほうき', reading:'ほうき', meaning:'sapu' },
  { level:'N5', type:'vocab', word:'ぞうきん', reading:'ぞうきん', meaning:'kain lap' },
  { level:'N5', type:'vocab', word:'かいしゃいん', reading:'かいしゃいん', meaning:'karyawan perusahaan' },
  { level:'N5', type:'vocab', word:'しゃちょう', reading:'しゃちょう', meaning:'direktur/presiden perusahaan' },
  { level:'N5', type:'vocab', word:'ぶちょう', reading:'ぶちょう', meaning:'kepala departemen' },
  { level:'N5', type:'vocab', word:'てんいん', reading:'てんいん', meaning:'pegawai toko' },
  { level:'N5', type:'vocab', word:'ぎんこういん', reading:'ぎんこういん', meaning:'pegawai bank' },
  { level:'N5', type:'vocab', word:'えきいん', reading:'えきいん', meaning:'petugas stasiun' },
  { level:'N5', type:'vocab', word:'うんてんしさん', reading:'うんてんしさん', meaning:'pengemudi' },
  { level:'N5', type:'vocab', word:'りょうりにん', reading:'りょうりにん', meaning:'juru masak' },
  { level:'N5', type:'vocab', word:'かしゅ', reading:'かしゅ', meaning:'penyanyi' },
  { level:'N5', type:'vocab', word:'がか', reading:'がか', meaning:'pelukis' },
  { level:'N5', type:'vocab', word:'さっか', reading:'さっか', meaning:'penulis' },
  { level:'N5', type:'vocab', word:'せんしゅ', reading:'せんしゅ', meaning:'atlet/pemain' },
  { level:'N5', type:'vocab', word:'かんこうきゃく', reading:'かんこうきゃく', meaning:'wisatawan' },
  { level:'N5', type:'vocab', word:'けいさつかん', reading:'けいさつかん', meaning:'polisi' },
  { level:'N5', type:'vocab', word:'かんごしさん', reading:'かんごしさん', meaning:'perawat' },
  { level:'N5', type:'vocab', word:'うんてんめんきょ', reading:'うんてんめんきょ', meaning:'surat izin mengemudi' },
  { level:'N5', type:'vocab', word:'かいぎ', reading:'かいぎ', meaning:'rapat' },
  { level:'N5', type:'vocab', word:'かいぎしつ', reading:'かいぎしつ', meaning:'ruang rapat' },
  { level:'N5', type:'vocab', word:'じむしょ', reading:'じむしょ', meaning:'kantor' },
  { level:'N5', type:'vocab', word:'しょくば', reading:'しょくば', meaning:'tempat kerja' },
  { level:'N5', type:'vocab', word:'きゅうりょう', reading:'きゅうりょう', meaning:'gaji' },
  { level:'N5', type:'vocab', word:'ざんぎょう', reading:'ざんぎょう', meaning:'lembur' },
  { level:'N5', type:'vocab', word:'やすみじかん', reading:'やすみじかん', meaning:'waktu istirahat' },
  { level:'N5', type:'vocab', word:'しゅっきん', reading:'しゅっきん', meaning:'masuk kerja' },
  { level:'N5', type:'vocab', word:'たいきん', reading:'たいきん', meaning:'pulang kerja' },
  { level:'N5', type:'vocab', word:'しゅっちょう', reading:'しゅっちょう', meaning:'perjalanan dinas' },
  { level:'N5', type:'vocab', word:'けいけん', reading:'けいけん', meaning:'pengalaman' },
  { level:'N5', type:'vocab', word:'ちから', reading:'ちから', meaning:'kekuatan' },
  { level:'N5', type:'vocab', word:'どりょく', reading:'どりょく', meaning:'usaha' },
  { level:'N5', type:'vocab', word:'せきにん', reading:'せきにん', meaning:'tanggung jawab' },
  { level:'N5', type:'vocab', word:'じょうほう', reading:'じょうほう', meaning:'informasi' },
  { level:'N5', type:'vocab', word:'いけん', reading:'いけん', meaning:'pendapat' },
  { level:'N5', type:'vocab', word:'かんそう', reading:'かんそう', meaning:'kesan' },
  { level:'N5', type:'vocab', word:'しつもんする', reading:'しつもんする', meaning:'bertanya' },
  { level:'N5', type:'vocab', word:'へんじする', reading:'へんじする', meaning:'membalas/menjawab' },
  { level:'N5', type:'vocab', word:'しらべる', reading:'しらべる', meaning:'memeriksa/meneliti' },
  { level:'N5', type:'vocab', word:'せつめいする', reading:'せつめいする', meaning:'menjelaskan' },
  { level:'N5', type:'vocab', word:'りかいする', reading:'りかいする', meaning:'memahami' },
  { level:'N5', type:'vocab', word:'せいりする', reading:'せいりする', meaning:'merapikan/mengatur' },
  { level:'N5', type:'vocab', word:'かくにんする', reading:'かくにんする', meaning:'memastikan' },
  { level:'N5', type:'vocab', word:'ちゅういする', reading:'ちゅういする', meaning:'memperhatikan/berhati-hati' },
  { level:'N5', type:'vocab', word:'せつやくする', reading:'せつやくする', meaning:'menghemat' },
  { level:'N5', type:'vocab', word:'せいかつする', reading:'せいかつする', meaning:'menjalani kehidupan' },
  { level:'N5', type:'vocab', word:'けいかくする', reading:'けいかくする', meaning:'merencanakan' },
  { level:'N5', type:'vocab', word:'かたづける', reading:'かたづける', meaning:'merapikan/membereskan' },
  { level:'N5', type:'vocab', word:'ひっこす', reading:'ひっこす', meaning:'pindah rumah' },
  { level:'N5', type:'vocab', word:'とどく', reading:'とどく', meaning:'sampai/terkirim' },
  { level:'N5', type:'vocab', word:'とどける', reading:'とどける', meaning:'mengantarkan' },
  { level:'N5', type:'vocab', word:'うけとる', reading:'うけとる', meaning:'menerima' },
  { level:'N5', type:'vocab', word:'はらう', reading:'はらう', meaning:'membayar' },
  { level:'N5', type:'vocab', word:'もうしこむ', reading:'もうしこむ', meaning:'mendaftar/mengajukan' },
  { level:'N5', type:'vocab', word:'ことわる', reading:'ことわる', meaning:'menolak' },
  { level:'N5', type:'vocab', word:'たのむ', reading:'たのむ', meaning:'meminta/memesan' },
  { level:'N5', type:'vocab', word:'ことば', reading:'ことば', meaning:'kata/bahasa' },
  { level:'N5', type:'vocab', word:'ぶん', reading:'ぶん', meaning:'kalimat' },
  { level:'N5', type:'vocab', word:'もじ', reading:'もじ', meaning:'huruf/karakter' },
  { level:'N5', type:'vocab', word:'こえだ', reading:'こえだ', meaning:'ranting kecil' },
  { level:'N5', type:'vocab', word:'じょうだん', reading:'じょうだん', meaning:'lelucon' },
  { level:'N5', type:'vocab', word:'うそ', reading:'うそ', meaning:'kebohongan' },
  { level:'N5', type:'vocab', word:'ほんとうに', reading:'ほんとうに', meaning:'benar-benar' },
  { level:'N5', type:'vocab', word:'たしか', reading:'たしか', meaning:'pasti/seingat saya' },
  { level:'N5', type:'vocab', word:'きっと', reading:'きっと', meaning:'pasti' },
  { level:'N5', type:'vocab', word:'ぜったい', reading:'ぜったい', meaning:'pasti/mutlak' },
  { level:'N5', type:'vocab', word:'たいてい', reading:'たいてい', meaning:'biasanya' },
  { level:'N5', type:'vocab', word:'かなり', reading:'かなり', meaning:'cukup/agak sangat' },
  { level:'N5', type:'vocab', word:'ほとんど', reading:'ほとんど', meaning:'hampir/sebagian besar' },
  { level:'N5', type:'vocab', word:'いっぱい', reading:'いっぱい', meaning:'penuh/banyak' },
  { level:'N5', type:'vocab', word:'ぜんぶ', reading:'ぜんぶ', meaning:'semuanya' },
  { level:'N5', type:'vocab', word:'いろいろ', reading:'いろいろ', meaning:'berbagai macam' },
  { level:'N5', type:'vocab', word:'べつべつ', reading:'べつべつ', meaning:'terpisah' },
  { level:'N5', type:'vocab', word:'さいご', reading:'さいご', meaning:'terakhir' },
  { level:'N5', type:'vocab', word:'はじめ', reading:'はじめ', meaning:'awal' },
  { level:'N5', type:'vocab', word:'さいしょ', reading:'さいしょ', meaning:'pertama' },
  { level:'N5', type:'vocab', word:'つぎ', reading:'つぎ', meaning:'berikutnya' },
  { level:'N5', type:'vocab', word:'さいきん', reading:'さいきん', meaning:'akhir-akhir ini' },
  { level:'N5', type:'vocab', word:'むかし', reading:'むかし', meaning:'dahulu' },
  { level:'N5', type:'vocab', word:'しょうらい', reading:'しょうらい', meaning:'masa depan' },
  { level:'N5', type:'vocab', word:'せんげん', reading:'せんげん', meaning:'pernyataan/deklarasi' },
  { level:'N5', type:'vocab', word:'きかい', reading:'きかい', meaning:'kesempatan' },
  { level:'N5', type:'vocab', word:'ばあい', reading:'ばあい', meaning:'keadaan/kasus' },
  { level:'N5', type:'vocab', word:'しゅみ', reading:'しゅみ', meaning:'hobi' },
  { level:'N5', type:'vocab', word:'えんげき', reading:'えんげき', meaning:'drama/pertunjukan' },
  { level:'N5', type:'vocab', word:'どくしょ', reading:'どくしょ', meaning:'membaca buku' },
  { level:'N5', type:'vocab', word:'しゃしんか', reading:'しゃしんか', meaning:'fotografer' },
  { level:'N5', type:'vocab', word:'えんそう', reading:'えんそう', meaning:'pertunjukan musik' },
  { level:'N5', type:'vocab', word:'がっき', reading:'がっき', meaning:'alat musik' },
  { level:'N5', type:'vocab', word:'ギター', reading:'ギター', meaning:'gitar' },
  { level:'N5', type:'vocab', word:'ピアノ', reading:'ピアノ', meaning:'piano' },
  { level:'N5', type:'vocab', word:'ドラム', reading:'ドラム', meaning:'drum' },
  { level:'N5', type:'vocab', word:'スポーツ', reading:'スポーツ', meaning:'olahraga' },
  { level:'N5', type:'vocab', word:'サッカー', reading:'サッカー', meaning:'sepak bola' },
  { level:'N5', type:'vocab', word:'バスケットボール', reading:'バスケットボール', meaning:'bola basket' },
  { level:'N5', type:'vocab', word:'テニス', reading:'テニス', meaning:'tenis' },
  { level:'N5', type:'vocab', word:'バドミントン', reading:'バドミントン', meaning:'bulu tangkis' },
  { level:'N5', type:'vocab', word:'スキー', reading:'スキー', meaning:'ski' },
  { level:'N5', type:'vocab', word:'スケート', reading:'スケート', meaning:'seluncur' },
  { level:'N5', type:'vocab', word:'プール', reading:'プール', meaning:'kolam renang' },
  { level:'N5', type:'vocab', word:'キャンプ', reading:'キャンプ', meaning:'berkemah' },
  { level:'N5', type:'vocab', word:'つり', reading:'つり', meaning:'memancing' },
  { level:'N5', type:'vocab', word:'ゲーム', reading:'ゲーム', meaning:'permainan/game' },

  // --- N5 KANJI (100 kanji dasar N5) ---
  { level:'N5', type:'kanji', word:'一', reading:'イチ / ひとつ', meaning:'satu' },
  { level:'N5', type:'kanji', word:'二', reading:'ニ / ふたつ', meaning:'dua' },
  { level:'N5', type:'kanji', word:'三', reading:'サン / みっつ', meaning:'tiga' },
  { level:'N5', type:'kanji', word:'四', reading:'シ / よっつ', meaning:'empat' },
  { level:'N5', type:'kanji', word:'五', reading:'ゴ / いつつ', meaning:'lima' },
  { level:'N5', type:'kanji', word:'六', reading:'ロク / むっつ', meaning:'enam' },
  { level:'N5', type:'kanji', word:'七', reading:'シチ / ななつ', meaning:'tujuh' },
  { level:'N5', type:'kanji', word:'八', reading:'ハチ / やっつ', meaning:'delapan' },
  { level:'N5', type:'kanji', word:'九', reading:'キュウ / ここのつ', meaning:'sembilan' },
  { level:'N5', type:'kanji', word:'十', reading:'ジュウ / とお', meaning:'sepuluh' },
  { level:'N5', type:'kanji', word:'百', reading:'ヒャク', meaning:'seratus' },
  { level:'N5', type:'kanji', word:'千', reading:'セン / ち', meaning:'seribu' },
  { level:'N5', type:'kanji', word:'万', reading:'マン', meaning:'sepuluh ribu' },
  { level:'N5', type:'kanji', word:'円', reading:'エン / まる', meaning:'yen / bulat' },
  { level:'N5', type:'kanji', word:'日', reading:'ニチ / ひ', meaning:'hari / matahari' },
  { level:'N5', type:'kanji', word:'月', reading:'ゲツ / つき', meaning:'bulan' },
  { level:'N5', type:'kanji', word:'火', reading:'カ / ひ', meaning:'api' },
  { level:'N5', type:'kanji', word:'水', reading:'スイ / みず', meaning:'air' },
  { level:'N5', type:'kanji', word:'木', reading:'モク / き', meaning:'pohon / kayu' },
  { level:'N5', type:'kanji', word:'金', reading:'キン / かね', meaning:'emas / uang' },
  { level:'N5', type:'kanji', word:'土', reading:'ド / つち', meaning:'tanah' },
  { level:'N5', type:'kanji', word:'年', reading:'ネン / とし', meaning:'tahun' },
  { level:'N5', type:'kanji', word:'時', reading:'ジ / とき', meaning:'waktu / jam' },
  { level:'N5', type:'kanji', word:'分', reading:'ブン / わ', meaning:'menit / bagian' },
  { level:'N5', type:'kanji', word:'半', reading:'ハン / なか', meaning:'setengah' },
  { level:'N5', type:'kanji', word:'人', reading:'ジン / ひと', meaning:'orang' },
  { level:'N5', type:'kanji', word:'男', reading:'ダン / おとこ', meaning:'laki-laki' },
  { level:'N5', type:'kanji', word:'女', reading:'ジョ / おんな', meaning:'perempuan' },
  { level:'N5', type:'kanji', word:'子', reading:'シ / こ', meaning:'anak' },
  { level:'N5', type:'kanji', word:'父', reading:'フ / ちち', meaning:'ayah' },
  { level:'N5', type:'kanji', word:'母', reading:'ボ / はは', meaning:'ibu' },
  { level:'N5', type:'kanji', word:'友', reading:'ユウ / とも', meaning:'teman' },
  { level:'N5', type:'kanji', word:'先', reading:'セン / さき', meaning:'sebelumnya / depan' },
  { level:'N5', type:'kanji', word:'生', reading:'セイ / い', meaning:'hidup / kelahiran' },
  { level:'N5', type:'kanji', word:'学', reading:'ガク / まな', meaning:'belajar' },
  { level:'N5', type:'kanji', word:'校', reading:'コウ', meaning:'sekolah' },
  { level:'N5', type:'kanji', word:'本', reading:'ホン / もと', meaning:'buku / asli' },
  { level:'N5', type:'kanji', word:'名', reading:'メイ / な', meaning:'nama' },
  { level:'N5', type:'kanji', word:'上', reading:'ジョウ / うえ', meaning:'atas' },
  { level:'N5', type:'kanji', word:'下', reading:'カ / した', meaning:'bawah' },
  { level:'N5', type:'kanji', word:'中', reading:'チュウ / なか', meaning:'tengah / dalam' },
  { level:'N5', type:'kanji', word:'外', reading:'ガイ / そと', meaning:'luar' },
  { level:'N5', type:'kanji', word:'左', reading:'サ / ひだり', meaning:'kiri' },
  { level:'N5', type:'kanji', word:'右', reading:'ウ / みぎ', meaning:'kanan' },
  { level:'N5', type:'kanji', word:'前', reading:'ゼン / まえ', meaning:'depan / sebelum' },
  { level:'N5', type:'kanji', word:'後', reading:'ゴ / うしろ', meaning:'belakang / setelah' },
  { level:'N5', type:'kanji', word:'東', reading:'トウ / ひがし', meaning:'timur' },
  { level:'N5', type:'kanji', word:'西', reading:'セイ / にし', meaning:'barat' },
  { level:'N5', type:'kanji', word:'南', reading:'ナン / みなみ', meaning:'selatan' },
  { level:'N5', type:'kanji', word:'北', reading:'ホク / きた', meaning:'utara' },
  { level:'N5', type:'kanji', word:'山', reading:'サン / やま', meaning:'gunung' },
  { level:'N5', type:'kanji', word:'川', reading:'セン / かわ', meaning:'sungai' },
  { level:'N5', type:'kanji', word:'田', reading:'デン / た', meaning:'sawah' },
  { level:'N5', type:'kanji', word:'天', reading:'テン / あめ', meaning:'langit' },
  { level:'N5', type:'kanji', word:'気', reading:'キ', meaning:'energi / perasaan' },
  { level:'N5', type:'kanji', word:'雨', reading:'ウ / あめ', meaning:'hujan' },
  { level:'N5', type:'kanji', word:'空', reading:'クウ / そら', meaning:'langit / kosong' },
  { level:'N5', type:'kanji', word:'花', reading:'カ / はな', meaning:'bunga' },
  { level:'N5', type:'kanji', word:'草', reading:'ソウ / くさ', meaning:'rumput' },
  { level:'N5', type:'kanji', word:'森', reading:'シン / もり', meaning:'hutan' },
  { level:'N5', type:'kanji', word:'林', reading:'リン / はやし', meaning:'hutan kecil' },
  { level:'N5', type:'kanji', word:'石', reading:'セキ / いし', meaning:'batu' },
  { level:'N5', type:'kanji', word:'犬', reading:'ケン / いぬ', meaning:'anjing' },
  { level:'N5', type:'kanji', word:'猫', reading:'ビョウ / ねこ', meaning:'kucing' },
  { level:'N5', type:'kanji', word:'魚', reading:'ギョ / さかな', meaning:'ikan' },
  { level:'N5', type:'kanji', word:'鳥', reading:'チョウ / とり', meaning:'burung' },
  { level:'N5', type:'kanji', word:'食', reading:'ショク / た', meaning:'makan' },
  { level:'N5', type:'kanji', word:'飲', reading:'イン / の', meaning:'minum' },
  { level:'N5', type:'kanji', word:'見', reading:'ケン / み', meaning:'melihat' },
  { level:'N5', type:'kanji', word:'聞', reading:'ブン / き', meaning:'mendengar / bertanya' },
  { level:'N5', type:'kanji', word:'話', reading:'ワ / はな', meaning:'bicara / cerita' },
  { level:'N5', type:'kanji', word:'読', reading:'ドク / よ', meaning:'membaca' },
  { level:'N5', type:'kanji', word:'書', reading:'ショ / か', meaning:'menulis' },
  { level:'N5', type:'kanji', word:'買', reading:'バイ / か', meaning:'membeli' },
  { level:'N5', type:'kanji', word:'行', reading:'コウ / い', meaning:'pergi / menjalankan' },
  { level:'N5', type:'kanji', word:'来', reading:'ライ / く', meaning:'datang' },
  { level:'N5', type:'kanji', word:'帰', reading:'キ / かえ', meaning:'pulang' },
  { level:'N5', type:'kanji', word:'入', reading:'ニュウ / はい', meaning:'masuk' },
  { level:'N5', type:'kanji', word:'出', reading:'シュツ / で', meaning:'keluar' },
  { level:'N5', type:'kanji', word:'立', reading:'リツ / た', meaning:'berdiri' },
  { level:'N5', type:'kanji', word:'休', reading:'キュウ / やす', meaning:'istirahat' },
  { level:'N5', type:'kanji', word:'会', reading:'カイ / あ', meaning:'bertemu' },
  { level:'N5', type:'kanji', word:'語', reading:'ゴ / かた', meaning:'bahasa / kata' },
  { level:'N5', type:'kanji', word:'電', reading:'デン', meaning:'listrik' },
  { level:'N5', type:'kanji', word:'車', reading:'シャ / くるま', meaning:'kendaraan / mobil' },
  { level:'N5', type:'kanji', word:'駅', reading:'エキ', meaning:'stasiun' },
  { level:'N5', type:'kanji', word:'店', reading:'テン / みせ', meaning:'toko' },
  { level:'N5', type:'kanji', word:'道', reading:'ドウ / みち', meaning:'jalan' },
  { level:'N5', type:'kanji', word:'国', reading:'コク / くに', meaning:'negara' },
  { level:'N5', type:'kanji', word:'高', reading:'コウ / たか', meaning:'tinggi / mahal' },
  { level:'N5', type:'kanji', word:'安', reading:'アン / やす', meaning:'murah / aman' },
  { level:'N5', type:'kanji', word:'大', reading:'ダイ / おお', meaning:'besar' },
  { level:'N5', type:'kanji', word:'小', reading:'ショウ / ちい', meaning:'kecil' },
  { level:'N5', type:'kanji', word:'新', reading:'シン / あたら', meaning:'baru' },
  { level:'N5', type:'kanji', word:'古', reading:'コ / ふる', meaning:'lama / tua' },
  { level:'N5', type:'kanji', word:'長', reading:'チョウ / なが', meaning:'panjang' },
  { level:'N5', type:'kanji', word:'多', reading:'タ / おお', meaning:'banyak' },
  { level:'N5', type:'kanji', word:'少', reading:'ショウ / すく', meaning:'sedikit' },

  { level:'N5', type:'kanji', word:'白', reading:'ハク / しろ', meaning:'putih' },
  { level:'N5', type:'kanji', word:'黒', reading:'コク / くろ', meaning:'hitam' },

  // --- HIRAGANA (46 huruf dasar / gojuon) ---
  { type:'hiragana', word:'あ', reading:'a', meaning:'huruf hiragana "a"' },
  { type:'hiragana', word:'い', reading:'i', meaning:'huruf hiragana "i"' },
  { type:'hiragana', word:'う', reading:'u', meaning:'huruf hiragana "u"' },
  { type:'hiragana', word:'え', reading:'e', meaning:'huruf hiragana "e"' },
  { type:'hiragana', word:'お', reading:'o', meaning:'huruf hiragana "o"' },
  { type:'hiragana', word:'か', reading:'ka', meaning:'huruf hiragana "ka"' },
  { type:'hiragana', word:'き', reading:'ki', meaning:'huruf hiragana "ki"' },
  { type:'hiragana', word:'く', reading:'ku', meaning:'huruf hiragana "ku"' },
  { type:'hiragana', word:'け', reading:'ke', meaning:'huruf hiragana "ke"' },
  { type:'hiragana', word:'こ', reading:'ko', meaning:'huruf hiragana "ko"' },
  { type:'hiragana', word:'さ', reading:'sa', meaning:'huruf hiragana "sa"' },
  { type:'hiragana', word:'し', reading:'shi', meaning:'huruf hiragana "shi"' },
  { type:'hiragana', word:'す', reading:'su', meaning:'huruf hiragana "su"' },
  { type:'hiragana', word:'せ', reading:'se', meaning:'huruf hiragana "se"' },
  { type:'hiragana', word:'そ', reading:'so', meaning:'huruf hiragana "so"' },
  { type:'hiragana', word:'た', reading:'ta', meaning:'huruf hiragana "ta"' },
  { type:'hiragana', word:'ち', reading:'chi', meaning:'huruf hiragana "chi"' },
  { type:'hiragana', word:'つ', reading:'tsu', meaning:'huruf hiragana "tsu"' },
  { type:'hiragana', word:'て', reading:'te', meaning:'huruf hiragana "te"' },
  { type:'hiragana', word:'と', reading:'to', meaning:'huruf hiragana "to"' },
  { type:'hiragana', word:'な', reading:'na', meaning:'huruf hiragana "na"' },
  { type:'hiragana', word:'に', reading:'ni', meaning:'huruf hiragana "ni"' },
  { type:'hiragana', word:'ぬ', reading:'nu', meaning:'huruf hiragana "nu"' },
  { type:'hiragana', word:'ね', reading:'ne', meaning:'huruf hiragana "ne"' },
  { type:'hiragana', word:'の', reading:'no', meaning:'huruf hiragana "no"' },
  { type:'hiragana', word:'は', reading:'ha', meaning:'huruf hiragana "ha"' },
  { type:'hiragana', word:'ひ', reading:'hi', meaning:'huruf hiragana "hi"' },
  { type:'hiragana', word:'ふ', reading:'fu', meaning:'huruf hiragana "fu"' },
  { type:'hiragana', word:'へ', reading:'he', meaning:'huruf hiragana "he"' },
  { type:'hiragana', word:'ほ', reading:'ho', meaning:'huruf hiragana "ho"' },
  { type:'hiragana', word:'ま', reading:'ma', meaning:'huruf hiragana "ma"' },
  { type:'hiragana', word:'み', reading:'mi', meaning:'huruf hiragana "mi"' },
  { type:'hiragana', word:'む', reading:'mu', meaning:'huruf hiragana "mu"' },
  { type:'hiragana', word:'め', reading:'me', meaning:'huruf hiragana "me"' },
  { type:'hiragana', word:'も', reading:'mo', meaning:'huruf hiragana "mo"' },
  { type:'hiragana', word:'や', reading:'ya', meaning:'huruf hiragana "ya"' },
  { type:'hiragana', word:'ゆ', reading:'yu', meaning:'huruf hiragana "yu"' },
  { type:'hiragana', word:'よ', reading:'yo', meaning:'huruf hiragana "yo"' },
  { type:'hiragana', word:'ら', reading:'ra', meaning:'huruf hiragana "ra"' },
  { type:'hiragana', word:'り', reading:'ri', meaning:'huruf hiragana "ri"' },
  { type:'hiragana', word:'る', reading:'ru', meaning:'huruf hiragana "ru"' },
  { type:'hiragana', word:'れ', reading:'re', meaning:'huruf hiragana "re"' },
  { type:'hiragana', word:'ろ', reading:'ro', meaning:'huruf hiragana "ro"' },
  { type:'hiragana', word:'わ', reading:'wa', meaning:'huruf hiragana "wa"' },
  { type:'hiragana', word:'を', reading:'wo', meaning:'huruf hiragana "wo" (partikel objek)' },
  { type:'hiragana', word:'ん', reading:'n', meaning:'huruf hiragana "n"' },

  // --- HIRAGANA DAKUTEN (゛) & HANDAKUTEN (゜) ---
  { type:'hiragana_dakuten', word:'が', reading:'ga', meaning:'huruf hiragana "ga"' },
  { type:'hiragana_dakuten', word:'ぎ', reading:'gi', meaning:'huruf hiragana "gi"' },
  { type:'hiragana_dakuten', word:'ぐ', reading:'gu', meaning:'huruf hiragana "gu"' },
  { type:'hiragana_dakuten', word:'げ', reading:'ge', meaning:'huruf hiragana "ge"' },
  { type:'hiragana_dakuten', word:'ご', reading:'go', meaning:'huruf hiragana "go"' },
  { type:'hiragana_dakuten', word:'ざ', reading:'za', meaning:'huruf hiragana "za"' },
  { type:'hiragana_dakuten', word:'じ', reading:'ji', meaning:'huruf hiragana "ji"' },
  { type:'hiragana_dakuten', word:'ず', reading:'zu', meaning:'huruf hiragana "zu"' },
  { type:'hiragana_dakuten', word:'ぜ', reading:'ze', meaning:'huruf hiragana "ze"' },
  { type:'hiragana_dakuten', word:'ぞ', reading:'zo', meaning:'huruf hiragana "zo"' },
  { type:'hiragana_dakuten', word:'だ', reading:'da', meaning:'huruf hiragana "da"' },
  { type:'hiragana_dakuten', word:'ぢ', reading:'ji', meaning:'huruf hiragana "ji" (ぢ)' },
  { type:'hiragana_dakuten', word:'づ', reading:'zu', meaning:'huruf hiragana "zu" (づ)' },
  { type:'hiragana_dakuten', word:'で', reading:'de', meaning:'huruf hiragana "de"' },
  { type:'hiragana_dakuten', word:'ど', reading:'do', meaning:'huruf hiragana "do"' },
  { type:'hiragana_dakuten', word:'ば', reading:'ba', meaning:'huruf hiragana "ba"' },
  { type:'hiragana_dakuten', word:'び', reading:'bi', meaning:'huruf hiragana "bi"' },
  { type:'hiragana_dakuten', word:'ぶ', reading:'bu', meaning:'huruf hiragana "bu"' },
  { type:'hiragana_dakuten', word:'べ', reading:'be', meaning:'huruf hiragana "be"' },
  { type:'hiragana_dakuten', word:'ぼ', reading:'bo', meaning:'huruf hiragana "bo"' },
  { type:'hiragana_dakuten', word:'ぱ', reading:'pa', meaning:'huruf hiragana "pa"' },
  { type:'hiragana_dakuten', word:'ぴ', reading:'pi', meaning:'huruf hiragana "pi"' },
  { type:'hiragana_dakuten', word:'ぷ', reading:'pu', meaning:'huruf hiragana "pu"' },
  { type:'hiragana_dakuten', word:'ぺ', reading:'pe', meaning:'huruf hiragana "pe"' },
  { type:'hiragana_dakuten', word:'ぽ', reading:'po', meaning:'huruf hiragana "po"' },

  // --- HIRAGANA YOUON (ゃゅょ) ---
  { type:'hiragana_youon', word:'きゃ', reading:'kya', meaning:'huruf hiragana "kya"' },
  { type:'hiragana_youon', word:'きゅ', reading:'kyu', meaning:'huruf hiragana "kyu"' },
  { type:'hiragana_youon', word:'きょ', reading:'kyo', meaning:'huruf hiragana "kyo"' },
  { type:'hiragana_youon', word:'ぎゃ', reading:'gya', meaning:'huruf hiragana "gya"' },
  { type:'hiragana_youon', word:'ぎゅ', reading:'gyu', meaning:'huruf hiragana "gyu"' },
  { type:'hiragana_youon', word:'ぎょ', reading:'gyo', meaning:'huruf hiragana "gyo"' },
  { type:'hiragana_youon', word:'しゃ', reading:'sha', meaning:'huruf hiragana "sha"' },
  { type:'hiragana_youon', word:'しゅ', reading:'shu', meaning:'huruf hiragana "shu"' },
  { type:'hiragana_youon', word:'しょ', reading:'sho', meaning:'huruf hiragana "sho"' },
  { type:'hiragana_youon', word:'じゃ', reading:'ja', meaning:'huruf hiragana "ja"' },
  { type:'hiragana_youon', word:'じゅ', reading:'ju', meaning:'huruf hiragana "ju"' },
  { type:'hiragana_youon', word:'じょ', reading:'jo', meaning:'huruf hiragana "jo"' },
  { type:'hiragana_youon', word:'ちゃ', reading:'cha', meaning:'huruf hiragana "cha"' },
  { type:'hiragana_youon', word:'ちゅ', reading:'chu', meaning:'huruf hiragana "chu"' },
  { type:'hiragana_youon', word:'ちょ', reading:'cho', meaning:'huruf hiragana "cho"' },
  { type:'hiragana_youon', word:'にゃ', reading:'nya', meaning:'huruf hiragana "nya"' },
  { type:'hiragana_youon', word:'にゅ', reading:'nyu', meaning:'huruf hiragana "nyu"' },
  { type:'hiragana_youon', word:'にょ', reading:'nyo', meaning:'huruf hiragana "nyo"' },
  { type:'hiragana_youon', word:'ひゃ', reading:'hya', meaning:'huruf hiragana "hya"' },
  { type:'hiragana_youon', word:'ひゅ', reading:'hyu', meaning:'huruf hiragana "hyu"' },
  { type:'hiragana_youon', word:'ひょ', reading:'hyo', meaning:'huruf hiragana "hyo"' },
  { type:'hiragana_youon', word:'びゃ', reading:'bya', meaning:'huruf hiragana "bya"' },
  { type:'hiragana_youon', word:'びゅ', reading:'byu', meaning:'huruf hiragana "byu"' },
  { type:'hiragana_youon', word:'びょ', reading:'byo', meaning:'huruf hiragana "byo"' },
  { type:'hiragana_youon', word:'ぴゃ', reading:'pya', meaning:'huruf hiragana "pya"' },
  { type:'hiragana_youon', word:'ぴゅ', reading:'pyu', meaning:'huruf hiragana "pyu"' },
  { type:'hiragana_youon', word:'ぴょ', reading:'pyo', meaning:'huruf hiragana "pyo"' },
  { type:'hiragana_youon', word:'みゃ', reading:'mya', meaning:'huruf hiragana "mya"' },
  { type:'hiragana_youon', word:'みゅ', reading:'myu', meaning:'huruf hiragana "myu"' },
  { type:'hiragana_youon', word:'みょ', reading:'myo', meaning:'huruf hiragana "myo"' },
  { type:'hiragana_youon', word:'りゃ', reading:'rya', meaning:'huruf hiragana "rya"' },
  { type:'hiragana_youon', word:'りゅ', reading:'ryu', meaning:'huruf hiragana "ryu"' },
  { type:'hiragana_youon', word:'りょ', reading:'ryo', meaning:'huruf hiragana "ryo"' },

  // --- KATAKANA (46 huruf dasar / gojuon) ---
  { type:'katakana', word:'ア', reading:'a', meaning:'huruf katakana "a"' },
  { type:'katakana', word:'イ', reading:'i', meaning:'huruf katakana "i"' },
  { type:'katakana', word:'ウ', reading:'u', meaning:'huruf katakana "u"' },
  { type:'katakana', word:'エ', reading:'e', meaning:'huruf katakana "e"' },
  { type:'katakana', word:'オ', reading:'o', meaning:'huruf katakana "o"' },
  { type:'katakana', word:'カ', reading:'ka', meaning:'huruf katakana "ka"' },
  { type:'katakana', word:'キ', reading:'ki', meaning:'huruf katakana "ki"' },
  { type:'katakana', word:'ク', reading:'ku', meaning:'huruf katakana "ku"' },
  { type:'katakana', word:'ケ', reading:'ke', meaning:'huruf katakana "ke"' },
  { type:'katakana', word:'コ', reading:'ko', meaning:'huruf katakana "ko"' },
  { type:'katakana', word:'サ', reading:'sa', meaning:'huruf katakana "sa"' },
  { type:'katakana', word:'シ', reading:'shi', meaning:'huruf katakana "shi"' },
  { type:'katakana', word:'ス', reading:'su', meaning:'huruf katakana "su"' },
  { type:'katakana', word:'セ', reading:'se', meaning:'huruf katakana "se"' },
  { type:'katakana', word:'ソ', reading:'so', meaning:'huruf katakana "so"' },
  { type:'katakana', word:'タ', reading:'ta', meaning:'huruf katakana "ta"' },
  { type:'katakana', word:'チ', reading:'chi', meaning:'huruf katakana "chi"' },
  { type:'katakana', word:'ツ', reading:'tsu', meaning:'huruf katakana "tsu"' },
  { type:'katakana', word:'テ', reading:'te', meaning:'huruf katakana "te"' },
  { type:'katakana', word:'ト', reading:'to', meaning:'huruf katakana "to"' },
  { type:'katakana', word:'ナ', reading:'na', meaning:'huruf katakana "na"' },
  { type:'katakana', word:'ニ', reading:'ni', meaning:'huruf katakana "ni"' },
  { type:'katakana', word:'ヌ', reading:'nu', meaning:'huruf katakana "nu"' },
  { type:'katakana', word:'ネ', reading:'ne', meaning:'huruf katakana "ne"' },
  { type:'katakana', word:'ノ', reading:'no', meaning:'huruf katakana "no"' },
  { type:'katakana', word:'ハ', reading:'ha', meaning:'huruf katakana "ha"' },
  { type:'katakana', word:'ヒ', reading:'hi', meaning:'huruf katakana "hi"' },
  { type:'katakana', word:'フ', reading:'fu', meaning:'huruf katakana "fu"' },
  { type:'katakana', word:'ヘ', reading:'he', meaning:'huruf katakana "he"' },
  { type:'katakana', word:'ホ', reading:'ho', meaning:'huruf katakana "ho"' },
  { type:'katakana', word:'マ', reading:'ma', meaning:'huruf katakana "ma"' },
  { type:'katakana', word:'ミ', reading:'mi', meaning:'huruf katakana "mi"' },
  { type:'katakana', word:'ム', reading:'mu', meaning:'huruf katakana "mu"' },
  { type:'katakana', word:'メ', reading:'me', meaning:'huruf katakana "me"' },
  { type:'katakana', word:'モ', reading:'mo', meaning:'huruf katakana "mo"' },
  { type:'katakana', word:'ヤ', reading:'ya', meaning:'huruf katakana "ya"' },
  { type:'katakana', word:'ユ', reading:'yu', meaning:'huruf katakana "yu"' },
  { type:'katakana', word:'ヨ', reading:'yo', meaning:'huruf katakana "yo"' },
  { type:'katakana', word:'ラ', reading:'ra', meaning:'huruf katakana "ra"' },
  { type:'katakana', word:'リ', reading:'ri', meaning:'huruf katakana "ri"' },
  { type:'katakana', word:'ル', reading:'ru', meaning:'huruf katakana "ru"' },
  { type:'katakana', word:'レ', reading:'re', meaning:'huruf katakana "re"' },
  { type:'katakana', word:'ロ', reading:'ro', meaning:'huruf katakana "ro"' },
  { type:'katakana', word:'ワ', reading:'wa', meaning:'huruf katakana "wa"' },
  { type:'katakana', word:'ヲ', reading:'wo', meaning:'huruf katakana "wo"' },
  { type:'katakana', word:'ン', reading:'n', meaning:'huruf katakana "n"' },

  // --- KATAKANA DAKUTEN (゛) & HANDAKUTEN (゜) ---
  { type:'katakana_dakuten', word:'ガ', reading:'ga', meaning:'huruf katakana "ga"' },
  { type:'katakana_dakuten', word:'ギ', reading:'gi', meaning:'huruf katakana "gi"' },
  { type:'katakana_dakuten', word:'グ', reading:'gu', meaning:'huruf katakana "gu"' },
  { type:'katakana_dakuten', word:'ゲ', reading:'ge', meaning:'huruf katakana "ge"' },
  { type:'katakana_dakuten', word:'ゴ', reading:'go', meaning:'huruf katakana "go"' },
  { type:'katakana_dakuten', word:'ザ', reading:'za', meaning:'huruf katakana "za"' },
  { type:'katakana_dakuten', word:'ジ', reading:'ji', meaning:'huruf katakana "ji"' },
  { type:'katakana_dakuten', word:'ズ', reading:'zu', meaning:'huruf katakana "zu"' },
  { type:'katakana_dakuten', word:'ゼ', reading:'ze', meaning:'huruf katakana "ze"' },
  { type:'katakana_dakuten', word:'ゾ', reading:'zo', meaning:'huruf katakana "zo"' },
  { type:'katakana_dakuten', word:'ダ', reading:'da', meaning:'huruf katakana "da"' },
  { type:'katakana_dakuten', word:'ヂ', reading:'ji', meaning:'huruf katakana "ji" (ヂ)' },
  { type:'katakana_dakuten', word:'ヅ', reading:'zu', meaning:'huruf katakana "zu" (ヅ)' },
  { type:'katakana_dakuten', word:'デ', reading:'de', meaning:'huruf katakana "de"' },
  { type:'katakana_dakuten', word:'ド', reading:'do', meaning:'huruf katakana "do"' },
  { type:'katakana_dakuten', word:'バ', reading:'ba', meaning:'huruf katakana "ba"' },
  { type:'katakana_dakuten', word:'ビ', reading:'bi', meaning:'huruf katakana "bi"' },
  { type:'katakana_dakuten', word:'ブ', reading:'bu', meaning:'huruf katakana "bu"' },
  { type:'katakana_dakuten', word:'ベ', reading:'be', meaning:'huruf katakana "be"' },
  { type:'katakana_dakuten', word:'ボ', reading:'bo', meaning:'huruf katakana "bo"' },
  { type:'katakana_dakuten', word:'パ', reading:'pa', meaning:'huruf katakana "pa"' },
  { type:'katakana_dakuten', word:'ピ', reading:'pi', meaning:'huruf katakana "pi"' },
  { type:'katakana_dakuten', word:'プ', reading:'pu', meaning:'huruf katakana "pu"' },
  { type:'katakana_dakuten', word:'ペ', reading:'pe', meaning:'huruf katakana "pe"' },
  { type:'katakana_dakuten', word:'ポ', reading:'po', meaning:'huruf katakana "po"' },

  // --- KATAKANA YOUON (ャュョ) ---
  { type:'katakana_youon', word:'キャ', reading:'kya', meaning:'huruf katakana "kya"' },
  { type:'katakana_youon', word:'キュ', reading:'kyu', meaning:'huruf katakana "kyu"' },
  { type:'katakana_youon', word:'キョ', reading:'kyo', meaning:'huruf katakana "kyo"' },
  { type:'katakana_youon', word:'ギャ', reading:'gya', meaning:'huruf katakana "gya"' },
  { type:'katakana_youon', word:'ギュ', reading:'gyu', meaning:'huruf katakana "gyu"' },
  { type:'katakana_youon', word:'ギョ', reading:'gyo', meaning:'huruf katakana "gyo"' },
  { type:'katakana_youon', word:'シャ', reading:'sha', meaning:'huruf katakana "sha"' },
  { type:'katakana_youon', word:'シュ', reading:'shu', meaning:'huruf katakana "shu"' },
  { type:'katakana_youon', word:'ショ', reading:'sho', meaning:'huruf katakana "sho"' },
  { type:'katakana_youon', word:'ジャ', reading:'ja', meaning:'huruf katakana "ja"' },
  { type:'katakana_youon', word:'ジュ', reading:'ju', meaning:'huruf katakana "ju"' },
  { type:'katakana_youon', word:'ジョ', reading:'jo', meaning:'huruf katakana "jo"' },
  { type:'katakana_youon', word:'チャ', reading:'cha', meaning:'huruf katakana "cha"' },
  { type:'katakana_youon', word:'チュ', reading:'chu', meaning:'huruf katakana "chu"' },
  { type:'katakana_youon', word:'チョ', reading:'cho', meaning:'huruf katakana "cho"' },
  { type:'katakana_youon', word:'ニャ', reading:'nya', meaning:'huruf katakana "nya"' },
  { type:'katakana_youon', word:'ニュ', reading:'nyu', meaning:'huruf katakana "nyu"' },
  { type:'katakana_youon', word:'ニョ', reading:'nyo', meaning:'huruf katakana "nyo"' },
  { type:'katakana_youon', word:'ヒャ', reading:'hya', meaning:'huruf katakana "hya"' },
  { type:'katakana_youon', word:'ヒュ', reading:'hyu', meaning:'huruf katakana "hyu"' },
  { type:'katakana_youon', word:'ヒョ', reading:'hyo', meaning:'huruf katakana "hyo"' },
  { type:'katakana_youon', word:'ビャ', reading:'bya', meaning:'huruf katakana "bya"' },
  { type:'katakana_youon', word:'ビュ', reading:'byu', meaning:'huruf katakana "byu"' },
  { type:'katakana_youon', word:'ビョ', reading:'byo', meaning:'huruf katakana "byo"' },
  { type:'katakana_youon', word:'ピャ', reading:'pya', meaning:'huruf katakana "pya"' },
  { type:'katakana_youon', word:'ピュ', reading:'pyu', meaning:'huruf katakana "pyu"' },
  { type:'katakana_youon', word:'ピョ', reading:'pyo', meaning:'huruf katakana "pyo"' },
  { type:'katakana_youon', word:'ミャ', reading:'mya', meaning:'huruf katakana "mya"' },
  { type:'katakana_youon', word:'ミュ', reading:'myu', meaning:'huruf katakana "myu"' },
  { type:'katakana_youon', word:'ミョ', reading:'myo', meaning:'huruf katakana "myo"' },
  { type:'katakana_youon', word:'リャ', reading:'rya', meaning:'huruf katakana "rya"' },
  { type:'katakana_youon', word:'リュ', reading:'ryu', meaning:'huruf katakana "ryu"' },
  { type:'katakana_youon', word:'リョ', reading:'ryo', meaning:'huruf katakana "ryo"' },
];

/* =========================================================
   MENU: PILIH LEVEL / HIRAGANA / KATAKANA
========================================================= */
const LEVELS = ['N5','N4','N3','N2','N1'];
const KANA_SETS = [
  { key:'hiragana', label:'Hiragana', sample:'あ' },
  { key:'katakana', label:'Katakana', sample:'ア' },
  { key:'hiragana_dakuten', label:'Hiragana (Dakuten/Maru)', sample:'が' },
  { key:'katakana_dakuten', label:'Katakana (Dakuten/Maru)', sample:'ガ' },
  { key:'hiragana_youon', label:'Hiragana (Youon ゃゅょ)', sample:'きゃ' },
  { key:'katakana_youon', label:'Katakana (Youon ゃゅょ)', sample:'キャ' },
];

const menuEl = document.getElementById('menu');
const levelGrid = document.getElementById('levelGrid');
const kanaGrid = document.getElementById('kanaGrid');
const backBtn = document.getElementById('backBtn');
const modeEyebrow = document.getElementById('modeEyebrow');
const modeTitle = document.getElementById('modeTitle');

const scriptMenuEl = document.getElementById('scriptMenu');
const scriptMenuEyebrow = document.getElementById('scriptMenuEyebrow');
const scriptGrid = document.getElementById('scriptGrid');
const scriptBackBtn = document.getElementById('scriptBackBtn');

const SCRIPT_OPTIONS = [
  { key:'kanji', label:'Full Kanji', sample:'漢', desc:'Kartu kanji saja' },
  { key:'gabungan', label:'Hiragana dan Katakana', sample:'あ', desc:'Semua kosakata (hiragana + katakana campur)' },
];

function buildMenu(){
  levelGrid.innerHTML = '';
  LEVELS.forEach(level => {
    const count = flashcardData.filter(d => d.level === level).length;
    const card = document.createElement('div');
    card.className = 'level-card' + (count === 0 ? ' disabled' : '');
    card.innerHTML = `
      <div class="big">${level}</div>
      <div class="sub">${count > 0 ? count + ' kartu' : 'Belum ada data'}</div>
      ${count === 0 ? '<span class="badge">Segera hadir</span>' : ''}
    `;
    card.addEventListener('click', () => {
      if(count === 0) return;
      showScriptMenu(level);
    });
    levelGrid.appendChild(card);
  });

  kanaGrid.innerHTML = '';
  KANA_SETS.forEach(set => {
    const count = flashcardData.filter(d => d.type === set.key).length;
    const card = document.createElement('div');
    card.className = 'level-card' + (count === 0 ? ' disabled' : '');
    card.innerHTML = `
      <div class="big">${set.sample}</div>
      <div class="sub">${set.label} · ${count > 0 ? count + ' huruf' : 'Belum ada data'}</div>
    `;
    card.addEventListener('click', () => {
      if(count === 0) return;
      openMode(
        flashcardData.filter(d => d.type === set.key),
        'Huruf Dasar',
        `暗記帳 — ${set.label}`,
        false,
        'kana',
        'kanji'
      );
    });
    kanaGrid.appendChild(card);
  });
}

function showScriptMenu(level){
  menuEl.style.display = 'none';
  scriptMenuEl.style.display = 'block';
  scriptMenuEyebrow.textContent = `JLPT ${level}`;

  scriptGrid.innerHTML = '';
  SCRIPT_OPTIONS.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="big">${opt.sample}</div>
      <div class="sub">${opt.label}</div>
    `;
    card.title = opt.desc;
    card.addEventListener('click', () => {
      const data = opt.key === 'kanji'
        ? flashcardData.filter(d => d.level === level && d.type === 'kanji')
        : flashcardData.filter(d => d.level === level && d.type === 'vocab');
      openMode(
        data,
        `JLPT ${level} · ${opt.label}`,
        `暗記帳 — ${level}`,
        true,
        'level',
        opt.key
      );
    });
    scriptGrid.appendChild(card);
  });
}

function showMenu(){
  mainWrap.style.display = 'none';
  scriptMenuEl.style.display = 'none';
  galleryScreen.style.display = 'none';
  menuEl.style.display = 'block';
  buildMenu();
}

function openMode(data, eyebrowText, titleText, showTypeChips, context, mode){
  filtered = [...data];
  currentModeData = data;
  currentContext = context;
  scriptMode = mode;
  idx = 0;
  correctCount = 0;
  answeredCount = 0;
  menuEl.style.display = 'none';
  scriptMenuEl.style.display = 'none';
  mainWrap.style.display = 'block';
  modeEyebrow.textContent = eyebrowText;
  modeTitle.textContent = titleText;
  render();
}

backBtn.addEventListener('click', showMenu);
scriptBackBtn.addEventListener('click', showMenu);

/* =========================================================
   GALERI HURUF — referensi visual, bukan kuis
========================================================= */
const galleryScreen = document.getElementById('galleryScreen');
const galleryContent = document.getElementById('galleryContent');
const openGalleryBtn = document.getElementById('openGalleryBtn');
const galleryBackBtn = document.getElementById('galleryBackBtn');

const GALLERY_SECTIONS = [
  { type:'hiragana', title:'Hiragana — Dasar' },
  { type:'hiragana_dakuten', title:'Hiragana — Dakuten (゛) & Handakuten (゜)' },
  { type:'hiragana_youon', title:'Hiragana — Youon (ゃゅょ)' },
  { type:'katakana', title:'Katakana — Dasar' },
  { type:'katakana_dakuten', title:'Katakana — Dakuten (゛) & Handakuten (゜)' },
  { type:'katakana_youon', title:'Katakana — Youon (ゃゅょ)' },
];

function buildGallery(){
  galleryContent.innerHTML = '';
  GALLERY_SECTIONS.forEach(sec => {
    const items = flashcardData.filter(d => d.type === sec.type);
    if(items.length === 0) return;
    const section = document.createElement('div');
    section.className = 'gallery-section';
    const heading = document.createElement('h3');
    heading.textContent = `${sec.title} (${items.length})`;
    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    items.forEach(item => {
      const tile = document.createElement('div');
      tile.className = 'gallery-tile';
      tile.innerHTML = `<div class="kana">${item.word}</div><div class="romaji">${item.reading}</div>`;
      grid.appendChild(tile);
    });
    section.appendChild(heading);
    section.appendChild(grid);
    galleryContent.appendChild(section);
  });
}

openGalleryBtn.addEventListener('click', () => {
  menuEl.style.display = 'none';
  galleryScreen.style.display = 'block';
  buildGallery();
});
galleryBackBtn.addEventListener('click', showMenu);

/* =========================================================
   HELPER: KONVERSI HIRAGANA <-> KATAKANA <-> ROMAJI
========================================================= */
function hiraganaToKatakana(str){
  return (str || '').replace(/[\u3041-\u3096]/g, c => String.fromCharCode(c.charCodeAt(0) + 0x60));
}
function katakanaToHiragana(str){
  return (str || '').replace(/[\u30A1-\u30F6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

const HIRA_TO_ROMAJI = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','を':'wo','ん':'n',
};
const YOUON_TO_ROMAJI = {
  'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu','しょ':'sho',
  'ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya','にゅ':'nyu','にょ':'nyo',
  'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo','みゃ':'mya','みゅ':'myu','みょ':'myo',
  'りゃ':'rya','りゅ':'ryu','りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo',
  'じゃ':'ja','じゅ':'ju','じょ':'jo','びゃ':'bya','びゅ':'byu','びょ':'byo',
  'ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo',
};

function hiraganaToRomaji(str){
  const s = katakanaToHiragana(str || '');
  let result = '', i = 0;
  while(i < s.length){
    const two = s.slice(i, i + 2);
    if(YOUON_TO_ROMAJI[two]){ result += YOUON_TO_ROMAJI[two]; i += 2; continue; }
    const ch = s[i];
    if(ch === 'っ'){
      const nextRomaji = YOUON_TO_ROMAJI[s.slice(i + 1, i + 3)] || HIRA_TO_ROMAJI[s[i + 1]] || '';
      if(nextRomaji) result += nextRomaji[0];
      i++; continue;
    }
    if(ch === 'ー'){
      const lastVowel = result.slice(-1);
      if('aiueo'.includes(lastVowel)) result += lastVowel;
      i++; continue;
    }
    if(HIRA_TO_ROMAJI[ch]){ result += HIRA_TO_ROMAJI[ch]; i++; continue; }
    result += ch;
    i++;
  }
  return result;
}

// Ambil bacaan dasar (hiragana) dari sebuah item.
// Untuk kanji, field reading formatnya "ON'YOMI / kun'yomi" — ambil kun'yomi.
function getBaseReadingHiragana(item){
  let r = item.reading || '';
  if(item.type === 'kanji' && r.includes('/')){
    const parts = r.split('/').map(s => s.trim());
    r = parts[1] || parts[0];
  }
  return katakanaToHiragana(r);
}

/* =========================================================
   LOGIKA FLASHCARD — mode tebak jawaban
========================================================= */
let filtered = [];
let currentModeData = [];
let currentContext = 'level'; // 'level' (N5-N1) atau 'kana' (hiragana/katakana huruf)
let scriptMode = 'kanji';     // 'kanji' | 'gabungan'
let showRomaji = false;
let indoOnly = false;
let idx = 0;
let answered = false;

const els = {
  card: document.getElementById('card'),
  tagFront: document.getElementById('tagFront'),
  frontWord: document.getElementById('frontWord'),
  frontSub: document.getElementById('frontSub'),
  answerForm: document.getElementById('answerForm'),
  answerInput: document.getElementById('answerInput'),
  checkBtn: document.getElementById('checkBtn'),
  feedback: document.getElementById('feedback'),
  feedbackVerdict: document.getElementById('feedbackVerdict'),
  feedbackAnswer: document.getElementById('feedbackAnswer'),
  nextBtn: document.getElementById('nextBtn'),
  counter: document.getElementById('counter'),
  masteredCount: document.getElementById('masteredCount'),
  barFill: document.getElementById('barFill'),
};

let correctCount = 0;
let answeredCount = 0;

function typeLabel(t){
  if(t === 'kanji') return 'kanji';
  if(t === 'hiragana') return 'hiragana';
  if(t === 'katakana') return 'katakana';
  if(t === 'hiragana_dakuten') return 'hiragana';
  if(t === 'katakana_dakuten') return 'katakana';
  if(t === 'hiragana_youon') return 'hiragana';
  if(t === 'katakana_youon') return 'katakana';
  return 'kosakata';
}

// Jawaban dianggap benar jika mirip dengan reading ATAU meaning
// (dibersihkan dari kapitalisasi, spasi berlebih, tanda baca).
function normalize(str){
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/[.!?、。]/g, '')
    .replace(/\s+/g, ' ');
}
function isCorrect(userAnswer, item){
  const guess = normalize(userAnswer);
  if(!guess) return false;
  const sources = indoOnly ? [item.meaning] : [item.reading, item.meaning];
  const candidates = sources
    .filter(Boolean)
    .flatMap(v => v.split(/[,\/]/))
    .map(s => normalize(s));
  return candidates.includes(guess);
}

function render(){
  answered = false;
  els.feedback.classList.remove('show', 'correct', 'incorrect');
  els.answerForm.style.display = 'flex';
  els.answerInput.value = '';
  els.answerInput.disabled = false;
  els.checkBtn.disabled = false;

  if(filtered.length === 0){
    els.frontWord.textContent = '—';
    els.frontSub.textContent = 'Belum ada kartu di sini';
    els.answerForm.style.display = 'none';
    els.counter.textContent = '0 / 0';
    els.masteredCount.textContent = '0 benar';
    els.barFill.style.width = '0%';
    return;
  }
  if(idx >= filtered.length) idx = 0;
  if(idx < 0) idx = filtered.length - 1;

  const item = filtered[idx];
  els.tagFront.textContent = typeLabel(item.type);
  els.tagFront.className = 'tag ' + item.type;

  if(currentContext === 'level'){
    const baseHira = getBaseReadingHiragana(item);
    els.frontWord.textContent = item.word;
    els.frontSub.textContent = showRomaji ? hiraganaToRomaji(baseHira) : '';
  } else {
    els.frontWord.textContent = item.word;
    els.frontSub.textContent = showRomaji ? item.reading : '';
  }

  els.counter.textContent = `${idx + 1} / ${filtered.length}`;
  els.masteredCount.textContent = `${correctCount} / ${answeredCount} benar`;
  els.barFill.style.width = `${(idx / filtered.length) * 100}%`;

  els.answerInput.focus();
}

function checkAnswer(){
  if(filtered.length === 0 || answered) return;
  const item = filtered[idx];
  const correct = isCorrect(els.answerInput.value, item);

  answered = true;
  answeredCount++;
  if(correct) correctCount++;
  els.masteredCount.textContent = `${correctCount} / ${answeredCount} benar`;

  els.answerInput.disabled = true;
  els.checkBtn.disabled = true;

  els.feedback.classList.add('show', correct ? 'correct' : 'incorrect');
  els.feedback.classList.remove(correct ? 'incorrect' : 'correct');
  els.feedbackVerdict.textContent = correct ? 'Benar!' : 'Salah.';
  els.feedbackAnswer.textContent = correct
    ? `${item.reading} — ${item.meaning}`
    : `Jawaban yang benar: ${item.reading} — ${item.meaning}`;
}

els.checkBtn.addEventListener('click', checkAnswer);
els.answerInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    if(!answered) checkAnswer();
    else { idx++; render(); }
  }
});
els.nextBtn.addEventListener('click', () => { idx++; render(); });

document.getElementById('shuffleBtn').addEventListener('click', () => {
  for(let i = filtered.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  idx = 0;
  render();
});


/* =========================================================
   PENGATURAN: tombol gear + toggle tampilkan romaji
========================================================= */
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const romajiToggle = document.getElementById('romajiToggle');
const indoToggle = document.getElementById('indoToggle');

settingsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  settingsPanel.classList.toggle('open');
  settingsBtn.classList.toggle('active', settingsPanel.classList.contains('open'));
});

document.addEventListener('click', (e) => {
  if(!settingsPanel.contains(e.target) && e.target !== settingsBtn){
    settingsPanel.classList.remove('open');
    settingsBtn.classList.remove('active');
  }
});

romajiToggle.addEventListener('change', () => {
  showRomaji = romajiToggle.checked;
  render();
});

indoToggle.addEventListener('change', () => {
  indoOnly = indoToggle.checked;
});
