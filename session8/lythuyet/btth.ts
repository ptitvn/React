// xây dựng lớp book
class Book {
  public id: number;
  public title: string;
  public author: string;
  public year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
class textBook extends Book {
  public subject: string;

  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    subject: string
  ) {
    super(id, title, author, year);
    this.subject = subject;
  }
}
class comic extends Book {
  public illustrator: string;

  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    illustrator: string
  ) {
    super(id, title, author, year);
    this.illustrator = illustrator;
  }
}

// xây dựng lớp generic library
class Library<T extends Book> {
  books: T[] = [];
  addBook(book: T): void {
    this.books.push(book);
  }
  getBookById(id: number): T | undefined {
    return this.books.find((book) => (book as any).id === id);
  }
  removeBook(id: number): void {
    this.books = this.books.filter((book) => (book as any).id !== id);
  }
  updateBook(id: number, updatedBook: T): void {
    const index = this.books.findIndex((book) => (book as any).id === id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }
  listBooks(): T[] {
    return this.books;
  }
  findBooksTitleByAuthor(author: string): T[] {
    return this.books.filter(
      (book) => book.title.includes(author) || book.author.includes(author)
    );
  }
  getTotalBooks(): number {
    return this.books.length;
  }
  findBooksByYear(year: number): T[] {
    return this.books.filter((book) => book.year === year);
  }
}
