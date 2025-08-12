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
    // Getter để lấy thông tin (vì thuộc tính là private)
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    // Setter để cập nhật thông tin
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    displayBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()} - "${book.getTitle()}" của ${book.getAuthor()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(` Đã cập nhật sách ID ${id}`);
        }
        else {
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
//# sourceMappingURL=CNTT3-IT104-EX7.js.map