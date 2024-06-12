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

  const query = searchInput.value.trim();
  if (query === '') {
    showErrorToast('Search query cannot be empty');
    return;
  }

  // Показати індикатор завантаження
  loader.classList.remove('hidden');

  clearGallery();

  try {
    const data = await fetchImages(query);

    // Установити таймер на 2 секунди перед відображенням результату
    setTimeout(() => {
      if (data.hits.length === 0) {
        showErrorToast('Sorry, there are no images matching your search query. Please try again.');
      } else {
        renderImages(data.hits);
      }
      loader.classList.add('hidden'); // Приховати індикатор завантаження після 2 секунд
    }, 2000);
  } catch (error) {
    // Установити таймер на 2 секунди перед відображенням помилки
    setTimeout(() => {
      showErrorToast(error.message);
      loader.classList.add('hidden'); // Приховати індикатор завантаження після 2 секунд
    }, 2000);
  }
});

function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 5000, // Час, протягом якого повідомлення буде відображатися
  });
}