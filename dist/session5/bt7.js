"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    updateBook(id, title, author) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(title);
            book.setAuthor(author);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    listBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ID: ${book.getId()}, Tiêu đề: ${book.getTitle()} - Tác giả: ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book(1, "To Kill a Mockingbird", "Harper Lee");
const book2 = new Book(2, "1984", "George Orwell");
const book3 = new Book(3, "The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book(4, "Brave New World", "Aldous Huxley");
const book5 = new Book(5, "CSS: The Definitive Guide", "Charles Dickens");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
// sua thong tin
library.updateBook(1, "To Kill a Mockingbird - Updated", "Harper Lee Updated");
library.listBooks();
//# sourceMappingURL=bt7.js.map