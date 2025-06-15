const levelQuestions = {
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
  question: "Congratulations! You completed the dungeon!",
  options: [
    { text: "Play again?", correct: true, doorIndex: 0 }
  ]
},
// 1: {
//   question: "1",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "true", correct: true, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 2: {
//   question: "2",
//   options: [
//     { text: "true", correct: true, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 3: {
//   question: "3",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "true", correct: true, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 4: {
//   question: "4",
//   options: [
//     { text: "true", correct: true, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 5: {
//   question: "5",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "true", correct: true, doorIndex: 3 },
//   ]
// },
// 6: {
//   question: "6",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "true", correct: true, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 7: {
//   question: "7",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "true", correct: true, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 8: {
//   question: "8",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "true", correct: true, doorIndex: 3 },
//   ]
// },
// 9: {
//   question: "9",
//   options: [
//     { text: "false", correct: false, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "true", correct: true, doorIndex: 3 },
//   ]
// },
// 10: {
//   question: "10",
//   options: [
//     { text: "true", correct: true, doorIndex: 0 },
//     { text: "false", correct: false, doorIndex: 1 },
//     { text: "false", correct: false, doorIndex: 2 },
//     { text: "false", correct: false, doorIndex: 3 },
//   ]
// },
// 11: {
//   question: "Congratulations! You completed the dungeon!",
//   options: [
//     { text: "Play again?", correct: false, doorIndex: 0 }
//   ]
// },

};
