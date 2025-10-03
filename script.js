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

function showKitten() {
  randomPosition();
  kitten.style.display = 'block';
  setTimeout(() => kitten.style.display = 'none', 1000);
}

kitten.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = 'Score: ' + score;
});

setInterval(showKitten, 1500);
