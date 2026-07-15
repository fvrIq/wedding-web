export const config = {

  // ── Welcome Section ──────────────────────────────────────────
  welcome: {
    quote: '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."',
    quoteSource: 'QS. Ar-Rum: 21',
    mainPhoto: '/images/opening.jpg',
  },

  // ── Pasangan ──────────────────────────────────────────────────
  couple: {
    groom: {
      name: 'Nama Pengantin Pria',
      nickname: 'Pria',
      parents: 'Bapak ... & Ibu ...',
    },
    bride: {
      name: 'Nama Pengantin Wanita',
      nickname: 'Wanita',
      parents: 'Bapak ... & Ibu ...',
    },
  },

  // ── Acara ─────────────────────────────────────────────────────
  event: {
    countdownTarget: '2026-09-20T08:00:00',

    sessions: [
      {
        id: 'akad',
        title: 'Akad Nikah',
        date: 'Minggu, 20 September 2026',
        time: '08:00 - 11:00 WIB',
        location: 'Gedung Serbaguna',
        address: 'Jl. Gatot Subroto No.1, RT.1/RW.3, Senayan, Kec. Tanah Abang, Jakarta Pusat, DKI Jakarta 10270',
      },
      {
        id: 'resepsi',
        title: 'Resepsi',
        date: 'Minggu, 20 September 2026',
        time: '11:00 - 17:00 WIB',
        location: 'Gedung Serbaguna',
        address: 'Jl. Gatot Subroto No.1, RT.1/RW.3, Senayan, Kec. Tanah Abang, Jakarta Pusat, DKI Jakarta 10270',
      },
    ],

    mapEmbedUrl: 'https://www.google.com/maps?q=Jl.+Gatot+Subroto+No.1,+RT.1/RW.3,+Senayan,+Kec.+Tanah+Abang,+Jakarta+Pusat,+DKI+Jakarta+10270&output=embed',
    mapLinkUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Gatot+Subroto+No.1,+RT.1/RW.3,+Senayan,+Kec.+Tanah+Abang,+Jakarta+Pusat,+DKI+Jakarta+10270',
  },

  // ── Love Story ────────────────────────────────────────────────
  loveStory: [
    {
      id: 1,
      date: 'Januari 2020',
      title: 'Cara Semesta Mempertemukan.',
      description: 'Katanya, semesta punya cara aneh buat mempertemukan dua orang yang harusnya berjodoh. Buat kami, caranya sesederhana satu pertemuan yang bahkan tidak direncanakan siapa-siapa. Tidak ada kembang api, tidak ada slow motion seperti di film, hanya obrolan singkat yang entah kenapa terasa lebih lama dari yang seharusnya. Siapa sangka, momen "biasa saja" itu ternyata adalah bab pertama dari cerita yang sedang kalian baca sekarang.',
      photo: '/images/story-1.jpg',
    },
    {
      id: 2,
      date: 'Juni 2020',
      title: 'Rindu yang Belum Punya Nama',
      description: 'Dari sekadar saling sapa, perlahan berubah jadi saling tunggu kabar. Chat yang awalnya basa-basi mulai berubah jadi obrolan panjang sampai lupa waktu dan salah satu dari kami mulai sering "tiba-tiba online" tengah malam, entah kenapa. Kalau kedekatan itu ibarat tanaman, yang satu ini tumbuh tanpa perlu banyak disiram. Cukup diberi waktu, ia menjalar sendiri ke tempat yang paling tidak terduga :)',
      photo: '/images/story-2.jpg',
    },
    {
      id: 3,
      date: 'Desember 2020',
      title: 'Satu Kata yang Mengubah Segalanya',
      description: 'Setelah melewati masa penuh keraguan yang malu-malu untuk diungkapkan, akhirnya keberanian mengalahkan gengsi. Satu pertanyaan jujur diajukan dengan suara yang sedikit gemetar di pojok kiri alfamart, dan dijawab dengan satu kata yang membuat dunia terasa berhenti sejenak: IYA. Sejak hari itu, dua nama yang dulunya berjalan sendiri-sendiri mulai belajar melangkah beriringan. Bukan lagi tentang "aku" dan "kamu" yang berdiri terpisah, melainkan "kami" yang memilih untuk saling menggenggam.',
      photo: '/images/story-3.jpg',
    },
    {
      id: 4,
      date: 'Maret 2024',
      title: 'Sebelum Kata Terucap, Hati Sudah Lebih Dulu Mengiyakan',
      description: 'Setelah bertahun-tahun melewati tawa, diam, dan segala hal kecil yang justru merekatkan, tibalah satu momen yang dijaga penuh haru hingga detik terakhir. Satu lutut menyentuh tanah, satu kotak kecil terbuka, dan jantung berdegup seperti pertama kali bertemu  seolah waktu sengaja diperlambat agar momen ini bisa dikenang selamanya. Bukan soal seberapa meriah suasananya, tapi tentang satu pertanyaan yang jawabannya sudah lama bersemayam di hati, jauh sebelum kata itu sempat terucap. Dan dari sinilah, sebuah babak baru dimulai. Babak yang akan ditulis bersama, untuk selamanya.',
      photo: '/images/story-4.jpg',
    },
  ],

  // ── Gallery ───────────────────────────────────────────────────
  gallery: [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
  ],

  // ── Hadiah ────────────────────────────────────────────────────
  gift: {
    message: 'Doa restu Anda adalah karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami dengan tulus menerimanya.',
    banks: [
      { bank: 'BCA', accountNumber: '1234567890', accountName: ' Pengantin Pria' },
      { bank: 'BRI', accountNumber: '0987654321', accountName: ' Pengantin Wanita' },
    ],
    qris: {
      image: '/images/qris.jpg',
      label: 'Scan pakai QRIS / e-wallet apa saja',
    },
    address: {
      recipient: 'Nama Penerima',
      fullAddress: 'Jl. Contoh Alamat No. 123, Kel. Contoh, Kec. Contoh, Bandar Lampung, Lampung, 35xxx',
      note: 'Mohon konfirmasi ke kontak kami sebelum mengirim, ya 🙏',
    },
  },

  // ── Closing ───────────────────────────────────────────────────
  closing: {
    message: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    coupleNames: 'Nama Pria & Nama Wanita',
    backgroundImage: '/images/cover.jpg',
  },

  // ── Musik ─────────────────────────────────────────────────────
  music: {
    src: '/audio/lagu.mp3',
    volume: 0.5,
  },

}