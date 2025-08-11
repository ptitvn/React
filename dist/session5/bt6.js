"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("Brave New World", "Aldous Huxley");
const book5 = new Book("css", "Charles Dickens");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
//# sourceMappingURL=bt6.js.map