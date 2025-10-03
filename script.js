// final script.js - safe, DOM-ready, no-sound version
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Envelope Opening ----------
  const envelope = document.querySelector(".envelope");
  const seal = document.querySelector(".seal");
  const letter = document.querySelector(".letter");
  const mainContent = document.getElementById("main-content");

  if (seal && envelope && letter && mainContent) {
    seal.addEventListener("click", () => {
      envelope.classList.add("open");
      setTimeout(() => {
        letter.classList.remove("hidden");
      }, 1000);
      setTimeout(() => {
        const envScreen = document.getElementById("envelope-screen");
        if (envScreen) envScreen.style.display = "none";
        mainContent.classList.remove("hidden");
      }, 3000);
    });
  }

  // ---------- Kitten Click Game ----------
  const kitten = document.getElementById('kitten');
  const gameArea = document.getElementById('game-area');
  const scoreDisplay = document.getElementById('score');
  let score = 0;
  let kittenTimer = null;

  function randomPosition() {
    if (!kitten || !gameArea) return;
    // fallback size if kitten not measured yet
    const kW = (kitten.clientWidth && kitten.clientWidth > 0) ? kitten.clientWidth : 60;
    const kH = (kitten.clientHeight && kitten.clientHeight > 0) ? kitten.clientHeight : 60;
    const maxX = Math.max(0, gameArea.clientWidth - kW);
    const maxY = Math.max(0, gameArea.clientHeight - kH);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    kitten.style.left = `${x}px`;
    kitten.style.top = `${y}px`;
  }

  function randomKitten() {
    if (!kitten) return;
    const kittenNum = Math.floor(Math.random() * 3) + 1; // 1..3
    kitten.src = `images/kitten${kittenNum}.jpg`;
  }

  function showKittenOnce() {
    if (!kitten || !gameArea) return;
    randomKitten();
    // display first so size can be measured
    kitten.style.display = 'block';
    // allow a tiny moment for image to render sizes (if needed)
    setTimeout(() => {
      randomPosition();
    }, 20);
    // hide after 1 second
    if (kittenTimer) clearTimeout(kittenTimer);
    kittenTimer = setTimeout(() => {
      kitten.style.display = 'none';
    }, 1000);
  }

  if (kitten && gameArea) {
    // click on kitten - count once per appearance
    kitten.addEventListener('click', (e) => {
      // Only count if visible (display block)
      if (getComputedStyle(kitten).display === 'block') {
        score++;
        if (scoreDisplay) scoreDisplay.textContent = 'Score: ' + score;
        kitten.style.display = 'none';
        if (kittenTimer) { clearTimeout(kittenTimer); kittenTimer = null; }
      }
      // prevent event bubbling to document click (burst hearts)
      e.stopPropagation();
    });

    // start showing kittens every 1.5s
    setInterval(showKittenOnce, 1500);
  }

  // ---------- Click/Tap Burst Hearts ----------
  document.addEventListener("click", function(e) {
    // If mainContent is still hidden (envelope visible), don't show hearts
    if (mainContent && mainContent.classList.contains('hidden')) return;

    // Ignore clicks that are on kitten or on the seal itself (avoid overlapping)
    if (e.target && (e.target.id === 'kitten' || e.target.classList && e.target.classList.contains('seal'))) {
      return;
    }

    const heart = document.createElement("div");
    heart.className = "heart-burst";

    const emojis = ["❤️","💋","💕","💖","🐱"];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // basic inline style for consistent animation (CSS class handles rest)
    heart.style.position = "absolute";
    heart.style.left = (e.pageX - 12) + "px";
    heart.style.top = (e.pageY - 12) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = 9999;

    document.body.appendChild(heart);

    // small animation via JS fallback if CSS not present
    requestAnimationFrame(() => {
      heart.style.transition = "transform 1.1s ease-out, opacity 1.1s ease-out";
      heart.style.transform = "translateY(-100px) scale(1.4)";
      heart.style.opacity = "0";
    });

    setTimeout(() => {
      heart.remove();
    }, 1200);
  });

  // ---------- Photo Slideshow ----------
  const slides = Array.from(document.getElementsByClassName("slide"));
  if (slides.length > 0) {
    slides.forEach(s => s.style.display = 'none');
    let slideIndex = 0;
    slides[0].style.display = 'block';
    setInterval(() => {
      slides[slideIndex].style.display = 'none';
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].style.display = 'block';
    }, 3000);
  }
});
