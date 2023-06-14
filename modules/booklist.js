// Retrieve saved book collection from localStorage, if available
const bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
// Function to render the book list
export default function renderBookList() {
  const bookListElement = document.getElementById('bookListItems');
  bookListElement.innerHTML = '';
  bookCollection.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    li.className = 'single-book';
    // Function to remove a book from the collection
    function removeBook() {
      bookCollection.splice(index, 1);
      localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
      renderBookList();
    }
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', removeBook);
    li.appendChild(removeButton);
    bookListElement.appendChild(li);
  });
}