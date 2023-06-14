import { DateTime } from './node_modules/luxon/src/luxon.js';
import EventListener from './modules/event.js';
import renderBookList from './modules/booklist.js';
import addBook from './modules/add.js';
// Update the current date every second
setInterval(() => {
  const dateElement = document.querySelector('#date');
  const date = DateTime.now();
  dateElement.textContent = date.toLocaleString(DateTime.DATETIME_MED);
}, 1000);

EventListener();
renderBookList();
addBook();
