const envelope = document.querySelector('.envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const mainContent = document.getElementById('main-content');

envelope.addEventListener('click', () => {
  envelopeScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
});
