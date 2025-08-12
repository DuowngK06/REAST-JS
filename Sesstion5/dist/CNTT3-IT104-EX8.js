"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
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
    displayInfo() {
        console.log(`ID: ${this.id} | Title: ${this.title} | Author: ${this.author}`);
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện hiện không có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => book.displayInfo());
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Sách có ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}.`);
        }
    }
    findBooksByTitle(title) {
        const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Tìm thấy ${foundBooks.length} sách với từ khóa "${title}":`);
            foundBooks.forEach(book => book.displayInfo());
        }
        else {
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
//# sourceMappingURL=CNTT3-IT104-EX8.js.map