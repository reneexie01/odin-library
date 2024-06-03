const myLibrary = [
    {title: "Brave New World", author: "Aldous Huxley", pages: "311", readStatus: "read"},
    {title: "1984", author: "George Orwell", pages: "384", readStatus: "read"},
    {title: "Lord of the Flies", author: "William Golding", pages: "224", readStatus: "unread"},
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
const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", () => {
    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readStatusValue = document.querySelector("#readStatus").value;

    const badSubmission = document.querySelector(".bad-submission");

    if (titleValue == "" || authorValue == "" || pagesValue == "" || readStatusValue == "") {
        badSubmission.textContent = `Invalid submission. Try again.`
        return;
    } addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    const lastBook = myLibrary[myLibrary.length - 1];
    printBooks(lastBook);
    console.log(myLibrary);
})

/* Printing the library */
myLibrary.forEach((book) => printBooks(book));

function printBooks(book) {
    const libraryContainer = document.querySelector(".library-container");
    const libraryBook = document.createElement("div");
    libraryBook.setAttribute("data-index", "index"); //need to figure out how to get the index number here

    libraryBook.innerHTML = 
    `
    <ul>
        <li>Title: ${book.title}</li>
        <li>Author: ${book.author}</li>
        <li>Pages: ${book.pages}</li>
        <li>Read Status: ${book.readStatus}</li>
    </ul>
    <button class="update-book">Update</button>
    <button class="delete-book">Delete</button>
    `;
    libraryContainer.appendChild(libraryBook);
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
})