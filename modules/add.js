import renderBookList from './booklist.js';
// Function to add a new book to the collection
function addBook(title, author) {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
}
export default function handleAddBookFormSubmit(event) {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);
  
  // Reset form inputs
  titleInput.value = '';
  authorInput.value = '';
}