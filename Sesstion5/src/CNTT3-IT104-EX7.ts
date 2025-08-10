class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    // Getter để lấy thông tin (vì thuộc tính là private)
    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    // Setter để cập nhật thông tin
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


    public displayBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()} - "${book.getTitle()}" của ${book.getAuthor()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(` Đã cập nhật sách ID ${id}`);
        } else {
            console.log(` Không tìm thấy sách có ID ${id}`);
        }
    }
}

const book1 = new Book(1, "Sách A", "Tác giả A");
const book2 = new Book(2, "Sách B", "Tác giả B");
const book3 = new Book(3, "Sách C", "Tác giả C");
const book4 = new Book(4, "Sách D", "Tác giả D");
const book5 = new Book(5, "Sách E", "Tác giả E");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.displayBooks();

library.updateBookById(3, "Sách C (phiên bản mới)", "Tác giả Cập nhật");

library.displayBooks();