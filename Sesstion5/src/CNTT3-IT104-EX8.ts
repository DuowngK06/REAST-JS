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

    public displayInfo(): void {
        console.log(`ID: ${this.id} | Title: ${this.title} | Author: ${this.author}`);
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => book.displayInfo());
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Sách có ID ${id} đã được cập nhật.`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }

    public findBooksByTitle(title: string): void {
        const foundBooks = this.books.filter(b =>
            b.getTitle().toLowerCase().includes(title.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Tìm thấy ${foundBooks.length} sách với từ khóa "${title}":`);
            foundBooks.forEach(book => book.displayInfo());
        } else {
            console.log(`Không tìm thấy sách nào có tên chứa "${title}".`);
        }
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình C++", "Nguyễn Văn A");
const book2 = new Book(2, "Học JavaScript", "Trần Văn B");
const book3 = new Book(3, "Lập trình Python", "Lê Văn C");
const book4 = new Book(4, "Java cơ bản", "Phạm Văn D");
const book5 = new Book(5, "TypeScript nâng cao", "Vũ Văn E");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.showBooks();

console.log("\n Tìm kiếm sách theo từ khóa 'lập trình':");
library.findBooksByTitle("lập trình");

console.log("\n Tìm kiếm sách theo từ khóa 'Java':");
library.findBooksByTitle("Java");