class Book {
  private id: number;
  private title: string;
  private author: string;
  private year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
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

  public getYear(): number {
    return this.year;
  }

  // Setter
  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public setAuthor(newAuthor: string): void {
    this.author = newAuthor;
  }

  public setYear(newYear: number): void {
    this.year = newYear;
  }
}
class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    console.log("Danh sách sách trong thư viện:");
    this.books.forEach(book => {
      console.log(`ID: ${book.getId()} | ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`);
    });
  }

  public deleteBookById(id: number): void {
    const index = this.books.findIndex(book => book.getId() === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(` Đã xóa sách có ID ${id}`);
    } else {
      console.log(`Không tìm thấy sách có ID ${id}`);
    }
  }

  public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
    const book = this.books.find(book => book.getId() === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
      book.setYear(newYear);
      console.log(`Đã cập nhật sách có ID ${id}`);
    } else {
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