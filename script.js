// ===================== Envelope Opening =====================
const envelope = document.querySelector(".envelope");
const seal = document.querySelector(".seal");
const letter = document.querySelector(".letter");
const mainContent = document.getElementById("main-content");

seal.addEventListener("click", () => {
  envelope.classList.add("open"); // flap opens
  setTimeout(() => {
    letter.classList.remove("hidden"); // show first greeting
  }, 1000); 

  setTimeout(() => {
    document.getElementById("envelope-screen").style.display = "none"; // hide envelope screen
    mainContent.classList.remove("hidden"); // reveal main site
  }, 3000); 
});

// ===================== Kitten Click Game =====================
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
  const kittenNum = Math.floor(Math.random() * 3) + 1; // 1,2,3
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
    kitten.style.display = 'none';
  }
});

// Show a new kitten every 1.5 seconds
setInterval(showKitten, 1500);

// ===================== Click/Tap Burst Hearts =====================
document.addEventListener("click", function(e) {
  const heart = document.createElement("div");
  heart.classList.add("heart-burst");

  // Random romantic emoji
  const emojis = ["❤️", "💋", "💕", "💖", "🐱"];
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Position at click/tap
  heart.style.left = (e.pageX - 10) + "px";
  heart.style.top = (e.pageY - 10) + "px";

  document.body.appendChild(heart);

  // Remove after animation ends
  setTimeout(() => {
    heart.remove();
  }, 1200);
});
