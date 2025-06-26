const levelQuestions = {
 0: {
  question: "Selamat! Anda Telah Menyelesaikan Permainan!",
  options: [
    { text: "Play again?", correct: true, doorIndex: 0 }
  ]
},
  1: {
  question: "Manakah dari pilihan berikut yang merupakan kata sandi paling kuat?",
  options: [
    { text: "penguasaDunia", correct: false, doorIndex: 0 },
    { text: "Qwerty123", correct: false, doorIndex: 1 },
    { text: "PD5rKOXqTS", correct: true, doorIndex: 2 },
    { text: "12345678", correct: false, doorIndex: 3 },
  ]
},
2: {
  question: "Apa manfaat utama menggunakan VPN?",
  options: [
    { text: "Melindungi data saat menggunakan internet", correct: true, doorIndex: 0 },
    { text: "Mempercepat unduhan file besar secara otomatis", correct: false, doorIndex: 1 },
    { text: "Menghapus virus secara otomatis dari perangkat", correct: false, doorIndex: 2 },
    { text: "Meningkatkan kapasitas penyimpanan", correct: false, doorIndex: 3 },
  ]
},
3: {
    question: "Apa manfaat utama menggunakan password manager?",
    options: [
      { text: "Menyimpan semua file penting", correct: false, doorIndex: 0 },
      { text: "Membantu membuat dan menyimpan kata sandi kuat", correct: true, doorIndex: 1 },
      { text: "Mempercepat waktu login tanpa internet", correct: false, doorIndex: 2 },
      { text: "Menghindari virus dari situs berbahaya", correct: false, doorIndex: 3 },
    ]
  },
4: {
  question: "Aktivitas usaha untuk mengakses sistem dan mendapatkan informasi tentang sistem disebut?",
  options: [
    { text: "Probe", correct: true, doorIndex: 0 },
    { text: "Packet Sniffer", correct: false, doorIndex: 1 },
    { text: "SQL Injection", correct: false, doorIndex: 2 },
    { text: "Brute Force", correct: false, doorIndex: 3 },
  ]
},
5: {
    question: "Apa yang dimaksud dengan virus komputer?",
    options: [
      { text: "Program yang memperbaiki kesalahan sistem", correct: false, doorIndex: 0 },
      { text: "Perangkat keras yang rusak", correct: false, doorIndex: 1 },
      { text: "Aplikasi untuk memperbarui sistem", correct: false, doorIndex: 2 },
      { text: "Software yang bisa merusak atau mencuri data", correct: true, doorIndex: 3 },
    ]
  },
6: {
    question: "Pesan palsu yang berusaha agar kita memberikan informasi pribadi disebut",
    options: [
      { text: "Denial of Service", correct: false, doorIndex: 0 },
      { text: "Malicious code", correct: false, doorIndex: 1 },
      { text: "Phishing", correct: true, doorIndex: 2 },
      { text: "Social Engineering", correct: false, doorIndex: 3 },
    ]
  },
7: {
  question: "Apa keuntungan menggunakan autentikasi dua faktor (2FA)?",
  options: [
    { text: "Tidak perlu memasukkan kata sandi lagi", correct: false, doorIndex: 0 },
    { text: "Memberi akun perlindungan tambahan", correct: true, doorIndex: 1 },
    { text: "Melindungi dari virus", correct: false, doorIndex: 2 },
    { text: "Menghapus akun yang mencurigakan", correct: false, doorIndex: 3 },
  ]
},
8: {
    question: "Mengapa tidak disarankan menggunakan kata sandi yang sama untuk semua akun?",
    options: [
      { text: "Karena lebih sulit diingat", correct: false, doorIndex: 0 },
      { text: "Karena lebih lambat saat login", correct: false, doorIndex: 1 },
      { text: "Karena sistem akan memblokir", correct: false, doorIndex: 2 },
      { text: "Ketika satu akun diretas, akun lainnya akan lebih berisiko", correct: true, doorIndex: 3 },
    ]
  },
9: {
    question: "Apa fungsi utama dari firewall dalam sistem komputer?",
    options: [
      { text: "Mengatur kecepatan internet", correct: false, doorIndex: 0 },
      { text: "Mengatur sistem input dan output", correct: false, doorIndex: 1 },
      { text: "Menyimpan file secara otomatis", correct: false, doorIndex: 2 },
      { text: "Melindungi jaringan dari akses berbahaya", correct: true, doorIndex: 3 },
    ]
  },
10: {
    question: "Saat menggunakan Wi-Fi publik, apa risiko terbesarnya?",
    options: [
      { text: "Data bisa disadap oleh orang lain", correct: true, doorIndex: 0 },
      { text: "Koneksi menjadi lebih lambat", correct: false, doorIndex: 1 },
      { text: "Komputer menjadi panas", correct: false, doorIndex: 2 },
      { text: "Tidak bisa membuka media sosial", correct: false, doorIndex: 3 },
    ]
  },
11: {
  question: "Mengapa kita harus waspada terhadap QR code yang tidak dikenal?",
  options: [
    { text: "Bisa mengarahkan ke situs berbahaya", correct: true, doorIndex: 0 },
    { text: "Membuat kamera rusak", correct: false, doorIndex: 1 },
    { text: "Menghabiskan baterai", correct: false, doorIndex: 2 },
    { text: "Membuat layar buram", correct: false, doorIndex: 3 },
  ]
},
12: {
  question: "Jenis malware yang menyamarkan diri sebagai program normal tetapi memiliki fungsi jahat disebut?",
  options: [
    { text: "Ransomware", correct: false, doorIndex: 0 },
    { text: "Spyware", correct: false, doorIndex: 1 },
    { text: "Trojan", correct: true, doorIndex: 2 },
    { text: "Adware", correct: false, doorIndex: 3 },
  ]
},
13: {
  question: "Apa arti dari huruf 'S' pada HTTPS?",
  options: [
    { text: "Secure (Aman)", correct: true, doorIndex: 0 },
    { text: "Speed (Cepat)", correct: false, doorIndex: 1 },
    { text: "System (Sistem)", correct: false, doorIndex: 2 },
    { text: "Standard (Standar)", correct: false, doorIndex: 3 },
  ]
},
14: {
  question: "Jejak data yang Anda tinggalkan saat menggunakan internet disebut?",
  options: [
    { text: "Jejak Digital", correct: true, doorIndex: 0 },
    { text: "Jejak Karbon", correct: false, doorIndex: 1 },
    { text: "Log Aktivitas", correct: false, doorIndex: 2 },
    { text: "Riwayat Browser", correct: false, doorIndex: 3 },
  ]
},
15: {
  question: "Malware yang mengenkripsi file Anda dan meminta tebusan untuk membukanya disebut?",
  options: [
    { text: "Virus", correct: false, doorIndex: 0 },
    { text: "Worm", correct: false, doorIndex: 1 },
    { text: "Spyware", correct: false, doorIndex: 2 },
    { text: "Ransomware", correct: true, doorIndex: 3 },
  ]
},
16: {
  question: "Apa tujuan utama dari 'Spyware'?",
  options: [
    { text: "Menampilkan iklan", correct: false, doorIndex: 0 },
    { text: "Mengunci file penting", correct: false, doorIndex: 1 },
    { text: "Merusak perangkat keras", correct: false, doorIndex: 2 },
    { text: "Memata-matai aktivitas pengguna", correct: true, doorIndex: 3 },
  ]
},
17: {
  question: "Mengapa penting untuk selalu memperbarui perangkat lunak (software)?",
  options: [
    { text: "Agar tampilan lebih baru", correct: false, doorIndex: 0 },
    { text: "Menambah ruang penyimpanan", correct: false, doorIndex: 1 },
    { text: "Memperbaiki celah keamanan", correct: true, doorIndex: 2 },
    { text: "Mempercepat koneksi internet", correct: false, doorIndex: 3 },
  ]
},
18: {
  question: "Teknik rekayasa sosial yang menggunakan SMS untuk menipu korban disebut?",
  options: [
    { text: "Vishing", correct: false, doorIndex: 0 },
    { text: "Phishing", correct: false, doorIndex: 1 },
    { text: "Smishing", correct: true, doorIndex: 2 },
    { text: "Baiting", correct: false, doorIndex: 3 },
  ]
},
19: {
  question: "Manakah yang BUKAN merupakan praktik keamanan siber yang baik?",
  options: [
    { text: "Menggunakan 2FA", correct: false, doorIndex: 0 },
    { text: "Memakai Wi-Fi publik tanpa VPN", correct: true, doorIndex: 1 },
    { text: "Mengunci layar perangkat", correct: false, doorIndex: 2 },
    { text: "Rutin mengganti kata sandi", correct: false, doorIndex: 3 },
  ]
},
20: {
  question: "Proses mengubah data menjadi format yang tidak bisa dibaca tanpa kunci disebut?",
  options: [
    { text: "Kompresi", correct: false, doorIndex: 0 },
    { text: "Dekripsi", correct: false, doorIndex: 1 },
    { text: "Hashing", correct: false, doorIndex: 2 },
    { text: "Enkripsi", correct: true, doorIndex: 3 },
  ]
},
21: {
  question: "Apa itu 'Shoulder Surfing'?",
  options: [
    { text: "Serangan melalui email", correct: false, doorIndex: 0 },
    { text: "Mengintip layar untuk mencuri info", correct: true, doorIndex: 1 },
    { text: "Virus dari internet", correct: false, doorIndex: 2 },
    { text: "Menyebarkan hoaks", correct: false, doorIndex: 3 },
  ]
},
22: {
  question: "Apa fungsi dari 'Cookie' pada browser?",
  options: [
    { text: "Menyimpan preferensi & info sesi", correct: true, doorIndex: 0 },
    { text: "Membersihkan virus", correct: false, doorIndex: 1 },
    { text: "Memblokir iklan", correct: false, doorIndex: 2 },
    { text: "Mempercepat loading gambar", correct: false, doorIndex: 3 },
  ]
},
23: {
  question: "Mana yang paling aman untuk menghubungkan perangkat?",
  options: [
    { text: "Bluetooth tanpa kata sandi", correct: false, doorIndex: 0 },
    { text: "Wi-Fi publik di kafe", correct: false, doorIndex: 1 },
    { text: "Jaringan Wi-Fi pribadi di rumah", correct: true, doorIndex: 2 },
    { text: "Tethering dari teman", correct: false, doorIndex: 3 },
  ]
},
24: {
  question: "Serangan yang membanjiri server dengan lalu lintas data hingga tidak bisa diakses disebut?",
  options: [
    { text: "Phishing", correct: false, doorIndex: 0 },
    { text: "Man-in-the-middle", correct: false, doorIndex: 1 },
    { text: "Denial of Service (DoS)", correct: true, doorIndex: 2 },
    { text: "SQL Injection", correct: false, doorIndex: 3 },
  ]
},
25: {
  question: "Mengunduh perangkat lunak dari sumber tidak resmi berisiko terkena?",
  options: [
    { text: "Pembaruan otomatis", correct: false, doorIndex: 0 },
    { text: "Garansi produk", correct: false, doorIndex: 1 },
    { text: "Lisensi gratis", correct: false, doorIndex: 2 },
    { text: "Malware atau virus", correct: true, doorIndex: 3 },
  ]
},
26: {
  question: "Apa itu 'Clickjacking'?",
  options: [
    { text: "Mencuri klik iklan", correct: false, doorIndex: 0 },
    { text: "Menipu pengguna untuk mengklik sesuatu", correct: true, doorIndex: 1 },
    { text: "Membuat mouse rusak", correct: false, doorIndex: 2 },
    { text: "Mempercepat klik mouse", correct: false, doorIndex: 3 },
  ]
},
27: {
  question: "Apa fungsi utama dari enkripsi end-to-end pada aplikasi pesan?",
  options: [
    { text: "Menambah emoji baru", correct: false, doorIndex: 0 },
    { text: "Hanya pengirim & penerima yang bisa baca", correct: true, doorIndex: 1 },
    { text: "Mengirim pesan lebih cepat", correct: false, doorIndex: 2 },
    { text: "Menyimpan riwayat chat selamanya", correct: false, doorIndex: 3 },
  ]
},
28: {
  question: "Alamat email yang meminta data pribadi Anda kemungkinan adalah?",
  options: [
    { text: "Tawaran resmi", correct: false, doorIndex: 0 },
    { text: "Layanan pelanggan", correct: false, doorIndex: 1 },
    { text: "Upaya phishing", correct: true, doorIndex: 2 },
    { text: "Notifikasi sistem", correct: false, doorIndex: 3 },
  ]
},
29: {
  question: "Istilah untuk 'perangkat lunak periklanan' yang seringkali mengganggu adalah?",
  options: [
    { text: "Spyware", correct: false, doorIndex: 0 },
    { text: "Adware", correct: true, doorIndex: 1 },
    { text: "Ransomware", correct: false, doorIndex: 2 },
    { text: "Firmware", correct: false, doorIndex: 3 },
  ]
},
30: {
  question: "Apa langkah pertama jika Anda merasa akun media sosial Anda diretas?",
  options: [
    { text: "Menghapus akun", correct: false, doorIndex: 0 },
    { text: "Membuat akun baru", correct: false, doorIndex: 1 },
    { text: "Membiarkannya saja", correct: false, doorIndex: 2 },
    { text: "Segera ganti kata sandi", correct: true, doorIndex: 3 },
  ]
},
};
