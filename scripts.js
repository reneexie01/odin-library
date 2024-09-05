let myLibrary = [
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: "311",
    readStatus: "read",
  },
  { title: "1984", author: "George Orwell", pages: "384", readStatus: "read" },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    pages: "224",
    readStatus: "unread",
  },
];

/* Class constructor version */
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleReadStatus() {
    this.readStatus = this.readStatus === "read" ? "unread" : "read";
  }

  displayBook() {
    return `
        <ul>
            <li>Title: ${this.title}</li>
            <li>Author: ${this.author}</li>
            <li>Pages: ${this.pages}</li>
            <li>Read Status: ${this.readStatus}</li>
        </ul>
        <button class="update-book">Update</button>
        <button class="delete-book">Delete</button>
        `;
  }
  /*
  static validateBook(book) {
    return book.title && book.author && book.pages && book.readStatus;
  }
    */
}

/* Mapping existing books to class */
myLibrary = myLibrary.map(
  (book) => new Book(book.title, book.author, book.pages, book.readStatus)
);

/* Input function */
function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

/* Adding new submissions */
const submitButton = document.querySelector(".submitButton");
const form = document.querySelector("form");
const badSubmission = document.querySelector(".bad-submission");

submitButton.addEventListener("click", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    badSubmission.textContent = "Invalid submission. Ensure you add a title, author, and the page numbers of your book.";
  } else {
    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readStatusValue = document.querySelector("#readStatus").value;
        /*
    const newBook = new Book(
      titleValue,
      authorValue,
      pagesValue,
      readStatusValue
    );
        if (!Book.validateBook(newBook)) {
          badSubmission.textContent = `Invalid submission. Try again.`;
          return;
        }
      */
    addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    updateLibrary();

    form.reset();
    badSubmission.textContent = "";
  }
});

/* Printing the library */
myLibrary.forEach((book, index) => printBooks(book, index));

function printBooks(book, index) {
  const libraryContainer = document.querySelector(".library-container");
  const libraryBook = document.createElement("div");

  libraryBook.innerHTML = book.displayBook();
  libraryContainer.appendChild(libraryBook);

  const deleteButton = libraryBook.querySelector(".delete-book");
  deleteButton.addEventListener("click", () => deleteBook(index));

  const updateButton = libraryBook.querySelector(".update-book");
  updateButton.addEventListener("click", () => updateBook(index));
}

/* Modal form */
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open-modal");
const closeButton = document.querySelector(".close-modal");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", () => {
  dialog.close();
});

/* Delete functions */
function deleteBook(index) {
  myLibrary.splice(index, 1);
  updateLibrary();
}

function updateLibrary() {
  const libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book, index) => printBooks(book, index));
}

/* Update functions */
function updateBook(index) {
  myLibrary[index].toggleReadStatus();
  updateLibrary();
}
