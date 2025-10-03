const kitten = document.getElementById('kitten');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Random position inside game area
function randomPosition() {
  const x = Math.random() * (gameArea.clientWidth - kitten.clientWidth);
  const y = Math.random() * (gameArea.clientHeight - kitten.clientHeight);
  kitten.style.left = x + 'px';
  kitten.style.top = y + 'px';
}

// Randomly pick one of 3 kitten images
function randomKitten() {
  const kittenNum = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
  kitten.src = `images/kitten${kittenNum}.jpg`;
}

// Show kitten for 1 second
function showKitten() {
  randomPosition();
  randomKitten();
  kitten.style.display = 'block';
  setTimeout(() => kitten.style.display = 'none', 1000);
}

// Increment score on click
kitten.addEventListener('click', () => {
  if (kitten.style.display === 'block') {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
  }
});

// Show a new kitten every 1.5 seconds
setInterval(showKitten, 1500);
