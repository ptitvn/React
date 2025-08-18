"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
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
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
        });
    }
    searchByTitle(keyword) {
        console.log(`\n🔍 Kết quả tìm kiếm cho từ khóa: '${keyword}'`);
        const foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                console.log(`- ${book.getTitle()} - ${book.getAuthor()}`);
            });
        }
        else {
            console.log(" Không tìm thấy quyển sách nào phù hợp.");
        }
    }
}
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
const book3 = new Book("Harry Potter và Hòn Đá Phù Thủy", "J.K. Rowling");
const book4 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
const book5 = new Book("Nhà Giả Kim", "Paulo Coelho");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Xem danh sách sách
library.viewBooks();
// Tìm kiếm sách
library.searchByTitle("Harry");
library.searchByTitle("Tuổi");
library.searchByTitle("Lập trình");
//# sourceMappingURL=bt8.js.map