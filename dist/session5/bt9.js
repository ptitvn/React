"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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
    getYear() {
        return this.year;
    }
    // Setter
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    setYear(newYear) {
        this.year = newYear;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()} | ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`);
        });
    }
    deleteBookById(id) {
        const index = this.books.findIndex(book => book.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(` Đã xóa sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(book => book.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id}`);
        }
    }
}
const library = new Library();
const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const book2 = new Book(2, "Tuổi Thơ Dữ Dội", "Phùng Quán", 1988);
const book3 = new Book(3, "Harry Potter", "J.K. Rowling", 1997);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.viewBooks();
// Xóa sách có ID 2
library.deleteBookById(2);
// Chỉnh sửa sách có ID 3
library.updateBookById(3, "Harry Potter và Phòng Chứa Bí Mật", "J.K. Rowling", 1998);
library.viewBooks();
//# sourceMappingURL=bt9.js.map