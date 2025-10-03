// ================= Envelope Opening =================
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const envelopeScreen = document.getElementById('envelope-screen');
const mainContent = document.getElementById('main-content');

envelope.addEventListener('click', () => {
  letter.classList.remove('hidden');
  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 1500);
});

// ================= Kitten Game =================
const kitten = document.getElementById('kitten');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randomPosition() {
  const x = Math.random() * (gameArea.clientWidth - kitten.clientWidth);
  const y = Math.random() * (gameArea.clientHeight - kitten.clientHeight);
  kitten.style.left = x + 'px';
  kitten.style.top = y + 'px';
}

function randomKitten() {
  const kittenNum = Math.random() > 0.5 ? 1 : 2; // choose between kitten1 or kitten2
  kitten.src = `images/kitten${kittenNum}.jpg`;
}

function showKitten() {
  randomPosition();
  randomKitten();
  kitten.style.display = 'block';
  setTimeout(() => kitten.style.display = 'none', 1000);
}

kitten.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = 'Score: ' + score;
});

// Make kitten appear every 1.5 seconds
setInterval(showKitten, 1500);
