import EventListener from './modules/event.js';
import renderBookList from './modules/booklist.js';
import addBook from './modules/add.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';


setInterval(() => {
    const date = DateTime.now();
    document.querySelector('#date').innerHTML = date.toLocaleString(
      DateTime.DATETIME_MED,
    );
  }, 1000);

EventListener();
renderBookList();
addBook();
