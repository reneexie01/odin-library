const myLibrary = [
    {title: 'Brave New World', author: 'Aldous Huxley', pages: '311', readStatus: 'read'},
    {title: '1984', author: 'George Orwell', pages: '384', readStatus: 'read'},
    {title: 'Lord of the Flies', author: 'William Golding', pages: '224', readStatus: 'unread'},
];

/* Constructor function */
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

/* Input function */
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook);
}

/* Adding new submissions */
const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', () => {
    const titleValue = document.querySelector('#title').value;
    const authorValue = document.querySelector('#author').value;
    const pagesValue = document.querySelector('#pages').value;
    const readStatusValue = document.querySelector('#readStatus').value;

    addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    const lastBook = myLibrary[myLibrary.length - 1];
    printBooks(lastBook);
    console.log(myLibrary);
})

/* Printing the library */
myLibrary.forEach((book) => printBooks(book));

function printBooks(book) {
    const libraryContainer = document.querySelector('.library-container');
    const libraryBook = document.createElement('div');
    libraryBook.classList.add('library-book');

    libraryBook.textContent = 
    `
    Title: ${book.title}
    Author: ${book.author}
    Pages: ${book.pages}
    Read Status: ${book.readStatus}
    `;
    libraryContainer.appendChild(libraryBook);
}