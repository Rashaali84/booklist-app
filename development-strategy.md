# Book-List: development strategy

Building this site one step at a time to add /remove books to browser local storage using vanilla java-script .

## 0. Setup

> - Create empty folders ( data-models , interactions-views)
> - Create empty files ( index.html , init.js,log.js,README.md ,style.css , development-strategy.md)

## 1. Data & Log

> - Edit `log.js` , Edit folder data-models add (`book.js` ,`store.js`).
> - in `log.js`--> add basic structure to store app changes .
> - in `book.js , store.js` --> add classes for both of book and store .

## 2. Init

> - Create init.js for any further initialization .

## 3. User Story: Add Book

**A user can add a book(title,author,isbn) and the new book will appear after submit**

> - `interactions` --> `add-book.js`, views--> `user-interface.js`,display-books.js.
> - `add-book.js` --> add the new book to list on index.html , add new book to local storage .

## 4. User Story: Remove Book

**A user can remove a book form the list displayed to the user in the front page.**

> - interactions -->`remove-book.js`,`views-->user-interface.js` , `display-books.js`.
> - remove-`book.js` --> we remove the book form the local displayed list and display the new updated list again , user-interface.js --> remove the row from the table which has all books.

## 5. User Story: Add Store Functionality

**A user can add or remove the books form browser local storage.and the browser persists its state after refreshing**

> - data-models --> `store.js` (add, remove,get).
> - interactions--> `add-book.js` + `remove-books.js` + `display-books.js`
> - in both adding functions and removing or display functions we will add a local-storage update .

## 6. User Story: Add Validation and Alerts

**A user can set the state and DOM back to it's initial values**

> - views--> `user-interface.js` .
> - Add a show-alert function to display errors and force validation whenever needed in the app .
