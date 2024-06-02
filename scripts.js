const myLibrary = [];

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

const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', () => {
    const titleValue = document.querySelector('#title').value;
    const authorValue = document.querySelector('#author').value;
    const pagesValue = document.querySelector('#pages').value;
    const readStatusValue = document.querySelector('#readStatus').value;

    addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    console.log(myLibrary);
})