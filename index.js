document.addEventListener('DOMContentLoaded', () => {
  const howToPlayLink = document.getElementById('howToPlayLink');
  const howToPlayPopup = document.getElementById('howToPlayPopup');
  const cardElement = howToPlayPopup?.querySelector('.card');
  const startButton = document.getElementById('start-button');

  // Show How to Play popup
  howToPlayLink?.addEventListener('click', (e) => {
    e.preventDefault();
    howToPlayPopup.style.display = 'flex';
  });

  // Hide popup when clicking outside card
  howToPlayPopup?.addEventListener('click', (e) => {
    if (e.target === howToPlayPopup) {
      howToPlayPopup.style.display = 'none';
    }
  });

  // Hide popup when clicking the card
  cardElement?.addEventListener('click', () => {
    howToPlayPopup.style.display = 'none';
  });

  // Close popup on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && howToPlayPopup.style.display === 'flex') {
      howToPlayPopup.style.display = 'none';
    }
  });

  // Go to game page on start
  startButton?.addEventListener('click', () => {
    window.location.href = 'game/game.html';
  });
});
