// ================= Envelope Opening =================
const seal = document.querySelector('.seal');
const letter = document.querySelector('.letter');
const envelopeScreen = document.getElementById('envelope-screen');
const mainContent = document.getElementById('main-content');

seal.addEventListener('click', () => {
  // Show the letter
  letter.classList.remove('hidden');
  // Wait a bit, then reveal main content
  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 2000); // letter shows for 2s before switching
});

// ================= Slideshow =================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // change image every 3s
}
if (slides.length > 0) {
  showSlides();
}

// ================= Kitten Game =================
const kitten = document.getElementById('kitten');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

// kitten images (add your 3 kitten images here)
const kittenImages = ["images/kitten1.jpg", "images/kitten2.jpg", "images/kitten3.jpg"];

function randomPosition() {
  const x = Math.random() * (gameArea.clientWidth - kitten.clientWidth);
  const y = Math.random() * (gameArea.clientHeight - kitten.clientHeight);
  kitten.style.left = `${x}px`;
  kitten.style.top = `${y}px`;
}

function changeKittenImage() {
  const randomImg = kittenImages[Math.floor(Math.random() * kittenImages.length)];
  kitten.src = randomImg;
}

kitten.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  changeKittenImage();
  randomPosition();
});

// Initialize kitten position
window.addEventListener('load', () => {
  kitten.style.position = 'absolute';
  randomPosition();
});
