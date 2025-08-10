import SimpleLightbox from 'simplelightbox';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryEl = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      img => `
      <li class="gallery__item">
        <a class="gallery__link" href="${img.largeImageURL}">
          <div class="photo-card">
            <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b><span>${img.likes}</span></p>
              <p class="info-item"><b>Views</b><span>${img.views}</span></p>
              <p class="info-item"><b>Comments</b><span>${img.comments}</span></p>
              <p class="info-item"><b>Downloads</b><span>${img.downloads}</span></p>
            </div>
          </div>
        </a>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('hidden');
  loaderEl.setAttribute('aria-hidden', 'false');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('hidden');
  loaderEl.setAttribute('aria-hidden', 'true');
}
