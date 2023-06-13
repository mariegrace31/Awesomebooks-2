// Retrieve saved book collection from localStorage, if available
const savedCollection = localStorage.getItem('bookCollection');
const bookCollection = savedCollection ? JSON.parse(savedCollection) : [];

// Function to render the book list
function renderBookList() {
  const bookListElement = document.getElementById('bookListItems');
  bookListElement.innerHTML = '';

  bookCollection.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} - ${book.author}`;
    li.className = 'single-book';

    // Function to remove a book from the collection
    function removeBook(index) {
      bookCollection.splice(index, 1);
      localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
      renderBookList();
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    li.appendChild(removeButton);
    bookListElement.appendChild(li);
  });
}

// Function to add a new book to the collection
function addBook(title, author) {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  renderBookList();
}

// Event handler for the form submission
document.getElementById('addBookForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  addBook(title, author);

  // Reset form inputs
  titleInput.value = '';
  authorInput.value = '';
});

// Event listener for navigation links
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href').substring(1); // Get the target id
    const sections = document.querySelectorAll('.content-section');

    // Show the target section and hide the others
    sections.forEach((section) => {
      if (section.id === target) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  });
});

renderBookList(); // Initial rendering
