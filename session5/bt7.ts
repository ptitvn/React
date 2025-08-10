class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }
}
class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public updateBook(id: number, title: string, author: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(title);
            book.setAuthor(author);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }

    public listBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ID: ${book.getId()}, Tiêu đề: ${book.getTitle()} - Tác giả: ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book(1, "To Kill a Mockingbird", "Harper Lee");
const book2 = new Book(2, "1984", "George Orwell");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();
// sua thong tin
library.updateBook(1, "To Kill a Mockingbird - Updated", "Harper Lee Updated");
library.listBooks();