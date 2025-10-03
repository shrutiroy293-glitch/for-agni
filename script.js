// ===================== Envelope Opening =====================
document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const seal = document.querySelector(".seal");
  const letter = document.querySelector(".letter");
  const mainContent = document.getElementById("main-content");

  seal.addEventListener("click", () => {
    envelope.classList.add("open"); // flap opens
    setTimeout(() => {
      letter.classList.remove("hidden"); // show greeting
    }, 1000);

    setTimeout(() => {
      document.getElementById("envelope-screen").style.display = "none"; // hide envelope screen
      mainContent.classList.remove("hidden"); // reveal main content
    }, 3000);
  });

  // ===================== Kitten Click Game =====================
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
    const kittenNum = Math.floor(Math.random() * 3) + 1;
    kitten.src = `images/kitten${kittenNum}.jpg`;
  }

  function showKitten() {
    randomPosition();
    randomKitten();
    kitten.style.display = 'block';
    setTimeout(() => { kitten.style.display = 'none'; }, 1000);
  }

  kitten.addEventListener('click', () => {
    if (kitten.style.display === 'block') {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      kitten.style.display = 'none';
    }
  });

  setInterval(showKitten, 1500);

  // ===================== Click/Tap Burst Hearts =====================
  document.addEventListener("click", function(e) {
    // Ignore clicks on kitten or seal
    if(e.target.id === "kitten" || e.target.classList.contains("seal")) return;

    const heart = document.createElement("div");
    heart.classList.add("heart-burst");
    const emojis = ["❤️","💋","💕","💖","🐱"];
    heart.textContent = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.position = "absolute";
    heart.style.left = (e.pageX - 10) + "px";
    heart.style.top = (e.pageY - 10) + "px";
    heart.style.fontSize = "24px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = 9999;
    heart.style.opacity = 1;
    heart.style.transition = "all 1.2s ease-out";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = "translateY(-50px) scale(1.5)";
      heart.style.opacity = 0;
    }, 10);

    setTimeout(() => { heart.remove(); }, 1200);
  });

  // ===================== Photo Slideshow =====================
  let slideIndex = 0;
  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
  }
  showSlides();
});
