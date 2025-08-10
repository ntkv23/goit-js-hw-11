// src/main.js
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import './styles/styles.css';
import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.getElementById('search-form');
const input = document.getElementById('search-text');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = data.hits || [];

      if (hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);

      iziToast.success({
        title: 'Found',
        message: `Found ${data.totalHits} images.`,
        position: 'topRight',
      });
    })
    .catch(err => {
      console.error('Error fetching images:', err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching images. Try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
