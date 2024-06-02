const myLibrary = [
    {title: 'Brave New World1', author: 'Aldous Huxley1', pages: '3111', readStatus: 'read1'},
    {title: 'Brave New World2', author: 'Aldous Huxley2', pages: '3112', readStatus: 'read2'},
    {title: 'Brave New World3', author: 'Aldous Huxley3', pages: '3113', readStatus: 'read3'},
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