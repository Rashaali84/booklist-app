
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // Remove book from UI
    UI.deleteBook(e.target);
    // Show success message
    UI.showAlert('Book Removed', 'success');
});