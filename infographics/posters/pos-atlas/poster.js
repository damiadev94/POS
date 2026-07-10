function initPoster() {
  const title = document.querySelector('h1');
  if (title) {
    title.textContent = 'POS Atlas';
  }
}

document.addEventListener('DOMContentLoaded', initPoster);
