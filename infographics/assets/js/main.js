const posterRegistry = [
  {
    id: 'pos-atlas',
    title: 'POS Atlas',
    description: 'A starter poster skeleton for the POS architecture poster. Uses placeholder sections ready for future content.',
    path: 'posters/pos-atlas/index.html',
    status: 'Draft'
  }
];

function renderPosterCards() {
  const grid = document.getElementById('posterGrid');
  if (!grid) {
    return;
  }

  grid.innerHTML = posterRegistry
    .map((poster) => {
      return `
        <article class="poster-card" aria-labelledby="poster-${poster.id}-title">
          <div class="poster-card__title" id="poster-${poster.id}-title">${poster.title}</div>
          <p class="poster-card__description">${poster.description}</p>
          <div class="poster-card__meta">
            <span class="status-badge status-badge--info">${poster.status}</span>
            <a class="poster-card__link" href="${poster.path}">Open poster</a>
          </div>
        </article>
      `;
    })
    .join('');
}

function registerPoster(poster) {
  if (!poster || !poster.id || !poster.title || !poster.path) {
    console.warn('Poster registration requires id, title and path.');
    return;
  }

  if (posterRegistry.some((item) => item.id === poster.id)) {
    console.warn(`Poster with id "${poster.id}" is already registered.`);
    return;
  }

  posterRegistry.push({
    id: poster.id,
    title: poster.title,
    description: poster.description || 'Poster entry has been registered and is ready to use.',
    path: poster.path,
    status: poster.status || 'Draft'
  });
}

function initApp() {
  renderPosterCards();
}

window.addEventListener('DOMContentLoaded', initApp);

// Example usage:
// registerPoster({
//   id: 'foundation',
//   title: 'Foundation',
//   description: 'A poster for core platform principles and system foundations.',
//   path: 'posters/foundation/index.html',
//   status: 'Planned'
// });
