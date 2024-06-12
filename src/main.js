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

  // Показать индикатор загрузки
  loader.classList.remove('hidden');

  const query = searchInput.value.trim();
  if (query === '') {
    // Установить таймер на 2 секунды перед отображением ошибки
    setTimeout(() => {
      showErrorToast('Search query cannot be empty');
      loader.classList.add('hidden'); // Скрыть индикатор загрузки после 2 секунд
    }, 2000);
    return;
  }

  clearGallery();

  try {
    const data = await fetchImages(query);

    // Установить таймер на 2 секунды перед отображением результата
    setTimeout(() => {
      if (data.hits.length === 0) {
        showErrorToast('Sorry, there are no images matching your search query. Please try again.');
      } else {
        renderImages(data.hits);
      }
      loader.classList.add('hidden'); // Скрыть индикатор загрузки после 2 секунд
    }, 2000);
  } catch (error) {
    // Установить таймер на 2 секунды перед отображением ошибки
    setTimeout(() => {
      showErrorToast(error.message);
      loader.classList.add('hidden'); // Скрыть индикатор загрузки после 2 секунд
    }, 2000);
  }
});

function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 5000, // Время, в течение которого сообщение будет отображаться
  });
}