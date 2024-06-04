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
    } 
    
    addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    updateLibrary();
    console.log(myLibrary);
})

/* Printing the library */
myLibrary.forEach((book, index) => printBooks(book, index));

function printBooks(book, index) {
    const libraryContainer = document.querySelector(".library-container");
    const libraryBook = document.createElement("div");

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

    const deleteButton = libraryBook.querySelector(".delete-book");
    deleteButton.addEventListener("click", () => deleteBook(index));
        
    const updateButton = libraryBook.querySelector(".update-book");
    updateButton.addEventListener("click", () => updateBook(index));

    console.log(myLibrary);
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
    if (myLibrary[index].readStatus === "read") {
        myLibrary[index].readStatus = "unread";
    } else {
        myLibrary[index].readStatus = "read";
    }

    updateLibrary();
}
