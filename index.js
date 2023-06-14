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


// // Event listener for navigation links
// function handleNavigationLinkClick(event) {
//   event.preventDefault();
//   const target = this.getAttribute('href').substring(1); // Get the target id
//   const sections = document.querySelectorAll('.content-section');

//   // Show the target section and hide the others
//   sections.forEach((section) => {
//     if (section.id === target) {
//       section.classList.add('show');
//     } else {
//       section.classList.remove('show');
//     }
//   });

//   if (target === 'bookList') {
//     renderBookList();
//   }
// }

// function addEventListeners() {
//   // Event listener for navigation links
//   document.querySelectorAll('nav a').forEach((link) => {
//     link.addEventListener('click', handleNavigationLinkClick);
//   });
// }

EventListener();
renderBookList();
addBook();
// addEventListeners();
