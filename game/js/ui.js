// Menggambar UI pertanyaan utama
function drawQuestionUI() {
  const currentQuestion = gameState.shuffledQuestions[gameState.level]?.question;
  if (!questionScrollImg.naturalWidth || !currentQuestion) return;

  const boxWidth = canvas.width * 0.6;
  const boxHeight = 55;
  const boxX = (canvas.width - boxWidth) / 2;
  const boxY = 5;

  c.drawImage(questionScrollImg, boxX, boxY, boxWidth, boxHeight);
  
  c.fillStyle = '#4a2d24';
  c.font = '20px GomePixel';
  c.textAlign = 'center';
  
  const lines = wrapText(currentQuestion, boxWidth - 60, 20);
  const lineHeight = 24;
  const totalTextHeight = lines.length * lineHeight;
  let textY = boxY + (boxHeight - totalTextHeight) / 2 + (lineHeight / 2) + 6;

  lines.forEach(line => {
    c.fillText(line, boxX + boxWidth / 2, textY);
    textY += lineHeight;
  });
}

// Menggambar UI pilihan jawaban di atas pintu
function drawQuestionOverlay() {
  const data = gameState.shuffledQuestions[gameState.level];
  if (!data?.options) return;

  data.options.forEach(option => {
    const door = doors[option.doorIndex];
    if (!door) return;

    const fontSize = 12;
    const lineHeight = fontSize + 4; // Menjadi 16

    // Langsung menggunakan teks dari opsi, karena sudah dipastikan bersih
    // (Asumsi fungsi wrapText sudah ada)
    let lines = wrapText(option.text, door.width - 10, fontSize);

    // REKOMENDASI: Tetap saring baris kosong untuk berjaga-jaga
    // jika wrapText menghasilkan array dengan string kosong.
    lines = lines.filter(line => line.trim() !== '');
    
    if (lines.length === 0) return;

    // Padding vertikal di dalam kotak (misal: 4px atas, 4px bawah)
    const verticalPadding = 8;
    const boxHeight = lines.length * lineHeight + verticalPadding;
    
    const boxX = door.position.x;
    let boxY = door.position.y - boxHeight - 7;

    if (boxY < 130) { 
      boxY = door.position.y + door.height + 7;
    }

    // Gambar background jawaban
    c.drawImage(answerScrollImg, boxX, boxY, door.width, boxHeight);

    // Atur style teks
    c.fillStyle = '#4a2d24';
    c.font = `${fontSize}px GomePixel`;
    c.textAlign = 'center';

    // Kalkulasi posisi Y teks yang sudah diperbaiki untuk rata tengah
    const totalTextHeight = lines.length * lineHeight;
    const topPadding = (boxHeight - totalTextHeight) / 2;
    let textY = boxY + topPadding + (lineHeight / 2) + 2; // Penyesuaian baseline font

    // Gambar setiap baris teks
    lines.forEach(line => {
        const textX = boxX + door.width / 2;
        c.fillText(line, textX, textY);
        textY += lineHeight;
    });
  });
}

function goBackHome() {
  window.location.href = "../index.html";
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('score-indicator');
  if (scoreDisplay) scoreDisplay.textContent = `${gameState.correctAnswers}/10`;
}

function wrapText(text, maxWidth, fontSize) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine + word + " ";
    if (c.measureText(testLine).width < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  }
  if (currentLine) lines.push(currentLine.trim());
  return lines;
}