import renderBookList from './booklist.js';

export const addBook = (title, author) => {
  const bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
};

export const handleAddBookFormSubmit = (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);
  // Reset form inputs
  titleInput.value = '';
  authorInput.value = '';
};
