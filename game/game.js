// Konfigurasi utama game
const GAME_CONFIG = {
  CANVAS_WIDTH: 1024,
  CANVAS_HEIGHT: 576,
  TOTAL_QUESTIONS_IN_POOL: 30,
  QUESTIONS_PER_GAME: 10,
  PLAYER_ANIMATIONS: {
    idleRight: { frameRate: 11, frameBuffer: 8, loop: true, imageSrc: './img/king/idle.png' },
    idleLeft: { frameRate: 11, frameBuffer: 8, loop: true, imageSrc: './img/king/idleLeft.png' },
    runRight: { frameRate: 8, frameBuffer: 7, loop: true, imageSrc: './img/king/runRight.png' },
    runLeft: { frameRate: 8, frameBuffer: 7, loop: true, imageSrc: './img/king/runLeft.png' },
    enterDoor: { frameRate: 8, frameBuffer: 12, loop: false, imageSrc: './img/king/enterDoor.png', onComplete: handleDoorEnterComplete },
  },
};

// Inisialisasi Canvas
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = GAME_CONFIG.CANVAS_WIDTH;
canvas.height = GAME_CONFIG.CANVAS_HEIGHT;

// Objek untuk menampung semua status dinamis game
let gameState = {
  level: 0,
  correctAnswers: 0,
  currentShuffledIndex: 0,
  correctAnswerChosen: false,
  fullLevelSequence: [],
  shuffledQuestions: {},
  overlay: { opacity: 0 },
};

// Inisialisasi Player, Aset UI, dan Tombol Keyboard
const player = new Player({ imageSrc: './img/king/idle.png', frameRate: 11, animations: GAME_CONFIG.PLAYER_ANIMATIONS });
const questionScrollImg = new Image();
questionScrollImg.src = './img/Q.png';
const answerScrollImg = new Image();
answerScrollImg.src = './img/A.png';
const keys = { w: { pressed: false }, a: { pressed: false }, d: { pressed: false } };

// --- FUNGSI UTAMA GAME ---

// Memulai atau mereset permainan ke kondisi awal
function resetGame() {
  generateShuffledSequence();
  gameState.currentShuffledIndex = 0;
  gameState.correctAnswers = 0;
  updateScoreDisplay();
  
  gameState.level = gameState.fullLevelSequence[gameState.currentShuffledIndex].mapLevel;
  levels[gameState.level].init();
}

// Menghasilkan urutan acak untuk level dan pertanyaan
function generateShuffledSequence() {
  const mapIndices = Array.from({ length: GAME_CONFIG.QUESTIONS_PER_GAME }, (_, i) => i + 1);
  const questionIndices = Array.from({ length: GAME_CONFIG.TOTAL_QUESTIONS_IN_POOL }, (_, i) => i + 1);

  const shuffledMaps = fisherYatesShuffle(mapIndices);
  const shuffledAllQuestions = fisherYatesShuffle(questionIndices);
  const questionsForThisGame = shuffledAllQuestions.slice(0, GAME_CONFIG.QUESTIONS_PER_GAME);

  gameState.fullLevelSequence = [
    { mapLevel: 0, questionIndex: null }, // Ruang awal
    ...shuffledMaps.map((mapLevel, i) => ({ mapLevel, questionIndex: questionsForThisGame[i] })),
  ];

  gameState.shuffledQuestions = {};
  gameState.fullLevelSequence.forEach(entry => {
    if (entry.questionIndex === null) return;
    const q = levelQuestions[entry.questionIndex];
    const options = fisherYatesShuffle([...q.options]).map((opt, i) => ({ ...opt, doorIndex: i }));
    gameState.shuffledQuestions[entry.mapLevel] = { question: q.question, options };
  });
  
  gameState.shuffledQuestions[11] = levelQuestions[0]; // Pesan di ruang akhir
}

// Menangani logika saat pemain memilih jawaban
function handleAnswerAtCurrentLevel(doorIndex) {
  const questionData = gameState.shuffledQuestions[gameState.level];
  if (questionData && questionData.options) {
    const correctOption = questionData.options.find(o => o.correct);
    gameState.correctAnswerChosen = correctOption.doorIndex === doorIndex;
    if (gameState.correctAnswerChosen) {
      gameState.correctAnswers++;
      updateScoreDisplay();
    }
  } else {
    gameState.correctAnswerChosen = true; // Untuk level tanpa pertanyaan (awal/akhir)
  }
}

// Menangani transisi setelah animasi masuk pintu selesai
function handleDoorEnterComplete() {
  gsap.to(gameState.overlay, {
    opacity: 1,
    onComplete: () => {
      // Jika salah jawaban atau main lagi, reset game
      if ((!gameState.correctAnswerChosen && gameState.level !== 0 && gameState.level !== 11) || gameState.level === 11) {
        resetGame();
      } else {
        // Jika benar, lanjut ke level berikutnya
        gameState.currentShuffledIndex++;
        gameState.level = gameState.currentShuffledIndex >= gameState.fullLevelSequence.length
          ? 11 // akhir
          : gameState.fullLevelSequence[gameState.currentShuffledIndex].mapLevel;
        levels[gameState.level].init();
      }

      gameState.correctAnswerChosen = false;
      player.switchSprite('idleRight');
      player.preventInput = false;
      gsap.to(gameState.overlay, { opacity: 0 });
    },
  });
}

// --- FUNGSI RENDER (MENGGAMBAR) ---
// Loop utama game yang dipanggil setiap frame
function animate() {
  window.requestAnimationFrame(animate);

  background.draw();
  doors.forEach(door => door.draw());
  npcs.forEach(npc => npc.draw());
  player.handleInput(keys);
  player.draw();
  player.update();
  
  drawQuestionUI();
  drawQuestionOverlay();

  // Efek transisi layar
  c.save();
  c.globalAlpha = gameState.overlay.opacity;
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

// --- INISIALISASI GAME ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('Starting game.');

    testFisherYates(); // <-- FUNGSI UNTUK MENGUJICOBA FUNGSI FISHER-YATES

    resetGame();
    animate();
});