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
// Khởi tạo các đối tượng Book
const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();
//# sourceMappingURL=bt6.js.map