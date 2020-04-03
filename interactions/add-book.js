// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values there two ways to get the data from the form object
    //way 1 
    /* const title = document.querySelector('#title').value;
     const author = document.querySelector('#author').value;
     const isbn = document.querySelector('#isbn').value;*/
    //way 2  using new FormDAta(and has the target of the event which is the form 
    //to be submitted )
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const isbn = formData.get('isbn');

    // Validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instatiate book
        const book = new Book(title, author, isbn);
        // Add book to store
        Store.addBook(book);
        // Add Book to UI
        UI.addBookToList(book);
        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});