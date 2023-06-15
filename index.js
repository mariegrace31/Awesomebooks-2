import { DateTime } from './node_modules/luxon/src/luxon.js';
import addEventListeners from './modules/event.js';
import renderBookList from './modules/booklist.js';
import { handleAddBookFormSubmit } from './modules/add.js';

setInterval(() => {
  const dateElement = document.querySelector('#date');
  const date = DateTime.now();
  dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);
}, 1000);

addEventListeners();
renderBookList();

const form = document.getElementById('addBookForm');
form.addEventListener('submit', handleAddBookFormSubmit);
