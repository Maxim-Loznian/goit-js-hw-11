import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-form input');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Показати індикатор завантаження
  loader.classList.remove('hidden');

  const query = searchInput.value.trim();
  if (query === '') {
    showErrorToast('Search query cannot be empty');
    return;
  }

  clearGallery();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      showErrorToast('Sorry, there are no images matching your search query.Please try again.');
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    // Приховати індикатор завантаження незалежно від результату
    loader.classList.add('hidden');
  }
});

function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
   });
}

 