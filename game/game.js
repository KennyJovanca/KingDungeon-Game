// === Kembali ke Halaman Awal ===
function goBackHome() {
  window.location.href = "../index.html";
}

// === Inisialisasi Canvas ===
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 64 * 16; // 1024 px
canvas.height = 64 * 9; // 576 px

// === Status Game ===
let level = 0;
let nextLevel = null;
let correctAnswerChosen = false;
let currentShuffledIndex = 0;
let correctAnswers = 0; // skor jawaban benar

let parsedCollisions, collisionBlocks, background, doors, npcs = [];
let fullLevelSequence = [];         // urutan level dan pertanyaan
let shuffledQuestions = {};         // daftar pertanyaan setelah diacak

// === Overlay untuk transisi antar level ===
const overlay = { opacity: 0 };

// === Tombol Input Keyboard ===
const keys = {
  w: { pressed: false },
  a: { pressed: false },
  d: { pressed: false },
};

// === Setup Player dan Animasi ===
const player = new Player({
  imageSrc: './img/king/idle.png',
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11, frameBuffer: 8, loop: true,
      imageSrc: './img/king/idle.png',
    },
    idleLeft: {
      frameRate: 11, frameBuffer: 8, loop: true,
      imageSrc: './img/king/idleLeft.png',
    },
    runRight: {
      frameRate: 8, frameBuffer: 7, loop: true,
      imageSrc: './img/king/runRight.png',
    },
    runLeft: {
      frameRate: 8, frameBuffer: 7, loop: true,
      imageSrc: './img/king/runLeft.png',
    },
    enterDoor: {
      frameRate: 8, frameBuffer: 12, loop: false,
      imageSrc: './img/king/enterDoor.png',
      onComplete: handleDoorEnterComplete, // dipanggil saat animasi selesai
    },
  },
});

// === Fungsi Transisi Saat Masuk Pintu ===
function handleDoorEnterComplete() {
  gsap.to(overlay, {
    opacity: 1,
    onComplete: () => {
      if (!correctAnswerChosen && level !== 0 && level !== 11) {
        // Pemain salah, kembali ke ruang awal dan reset semua urutan
      generateShuffledSequence(); // ⬅️ acak ulang semua urutan
      currentShuffledIndex = 0;
      correctAnswers = 0;
      updateScoreDisplay();
      level = fullLevelSequence[currentShuffledIndex].mapLevel;
      npcs = [];
      levels[level].init();
      showQuestionText(level);
      } else if (level === 11) {
        // Jika sudah sampai level akhir, mulai ulang
        generateShuffledSequence();
        currentShuffledIndex = 0;
        correctAnswers = 0;
        updateScoreDisplay();
        level = fullLevelSequence[currentShuffledIndex].mapLevel;
        npcs = [];
        levels[level].init();
        showQuestionText(level);
      } else {
        // Menuju level berikutnya
        if (nextLevel === null) {
          currentShuffledIndex++;
          level = currentShuffledIndex >= fullLevelSequence.length
            ? 11 // akhir
            : fullLevelSequence[currentShuffledIndex].mapLevel;
        } else {
          level = nextLevel;
          nextLevel = null;
        }

        levels[level].init();
        showQuestionText(level);
      }

      correctAnswerChosen = false;
      player.switchSprite('idleRight');
      player.preventInput = false;

      gsap.to(overlay, { opacity: 0 }); // fade in
    }
  });
}

// === Mengecek Jawaban Saat Pemain Memilih Pintu ===
function handleAnswerAtCurrentLevel(doorIndex) {
  const questionData = shuffledQuestions[level];
  if (questionData) {
    const correctOption = questionData.options.find(o => o.correct);
    correctAnswerChosen = correctOption.doorIndex === doorIndex;

    if (correctAnswerChosen) {
      correctAnswers++;
      updateScoreDisplay();
    }
  } else {
    // Jika tidak ada pertanyaan di level ini
    correctAnswerChosen = true;
  }
}

// === Loop Utama Game ===
function animate() {
  window.requestAnimationFrame(animate);

  background.draw();

  // collisionBlocks.forEach(block => block.draw()); // debug red collision
  npcs.forEach(npc => npc.draw());
  doors.forEach(door => door.draw());

  drawQuestionOverlay(level); // Tampilkan teks di atas pintu

  player.handleInput(keys);
  player.draw();
  player.update();

  // Efek transisi hitam
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

// === Menampilkan Pilihan Jawaban di Atas Pintu ===
function drawQuestionOverlay(currentLevel) {
  const data = shuffledQuestions[currentLevel];
  if (!data) return;

  data.options.forEach(option => {
    const door = doors[option.doorIndex];
    if (!door) return;

    const fontSize = 12;
    const padding = 2;
    const maxWidth = door.width - padding * 3;
    const lines = wrapText(option.text, maxWidth, fontSize);
    const lineHeight = fontSize + 4;
    const boxHeight = lines.length * lineHeight + padding * 2;

    // Tentukan posisi box
    let boxY = door.position.y - boxHeight - 7;
    if (boxY < canvas.height * 0.1) {
      boxY = door.position.y + door.height + 7;
    }

    const boxX = door.position.x;

    // Gambar kotak teks jawaban
    c.fillStyle = 'rgba(0, 0, 0, 0.8)';
    c.fillRect(boxX, boxY, door.width, boxHeight);
    c.strokeStyle = 'white';
    c.strokeRect(boxX, boxY, door.width, boxHeight);

    // Gambar teks jawaban
    c.fillStyle = 'white';
    c.font = `${fontSize}px GomePixel`;
    c.textAlign = 'left';

    lines.forEach((line, i) => {
      c.fillText(line, boxX + padding, boxY + padding + (i + 1) * lineHeight - 6);
    });
  });
}

// === Bungkus Teks Otomatis Berdasarkan Lebar Pintu ===
function wrapText(text, maxWidth, fontSize) {
  c.font = `${fontSize}px Arial`; // Digunakan untuk menghitung lebar kata
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach(word => {
    const testLine = currentLine + word + " ";
    const { width } = c.measureText(testLine);
    if (width < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  });

  if (currentLine) lines.push(currentLine.trim());
  return lines;
}

// === Menampilkan Pertanyaan di UI HTML ===
function showQuestionText(currentLevel) {
  const data = shuffledQuestions[currentLevel];
  const box = document.getElementById('question-box');
  const text = document.getElementById('question-text');

  if (!data) {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
    text.textContent = data.question;
  }
}

// === Membuat Urutan Acak Level dan Pertanyaan ===
function generateShuffledSequence() {
  const maps = fisherYatesShuffle([1,2,3,4,5,6,7,8,9,10]);
  const questions = fisherYatesShuffle([1,2,3,4,5,6,7,8,9,10]);

  fullLevelSequence = [
    { mapLevel: 0, questionIndex: null }, // Ruang awal
    ...maps.map((mapLevel, i) => ({ mapLevel, questionIndex: questions[i] })),
    { mapLevel: 11, questionIndex: null }, // Ruang akhir
  ];

  shuffledQuestions = {};

  fullLevelSequence.forEach(entry => {
    if (!entry.questionIndex) return;

    const q = levelQuestions[entry.questionIndex];
    const options = fisherYatesShuffle([...q.options]).map((opt, i) => ({
      ...opt,
      doorIndex: i,
    }));

    shuffledQuestions[entry.mapLevel] = { question: q.question, options };
  });

  // Tambahkan pesan akhir di level 11
  shuffledQuestions[11] = levelQuestions[11];
}

// === Menampilkan Skor Jawaban Benar di UI ===
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('score-indicator');
  if (scoreDisplay) {
    scoreDisplay.textContent = `${correctAnswers}/10`;
  }
}

// === Mulai Game Saat Halaman Dimuat ===
document.addEventListener('DOMContentLoaded', () => {
  generateShuffledSequence();
  currentShuffledIndex = 0;
  level = fullLevelSequence[currentShuffledIndex].mapLevel;
  levels[level].init();
  showQuestionText(level);
  animate();
});
