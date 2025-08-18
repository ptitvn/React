"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// xây dựng lớp book
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class textBook extends Book {
    constructor(id, title, author, year, subject) {
        super(id, title, author, year);
        this.subject = subject;
    }
}
class comic extends Book {
    constructor(id, title, author, year, illustrator) {
        super(id, title, author, year);
        this.illustrator = illustrator;
    }
}
// xây dựng lớp generic library
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, updatedBook) {
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksTitleByAuthor(author) {
        return this.books.filter((book) => book.title.includes(author) || book.author.includes(author));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter((book) => book.year === year);
    }
}
//# sourceMappingURL=btth.js.map