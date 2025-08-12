"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((e, idx) => {
            console.log(`${idx + 1}. ${e.getInfo()}`);
        });
    }
}
const boook1 = new Book("Mèn mén", "Tô Hoài");
const boook2 = new Book("Sách sách", "J.K. Rowling");
const boook3 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
const boook4 = new Book("Tuổi Trẻ Đáng Giá Bao Nhiêu", "Rosie Nguyễn");
const boook5 = new Book("Nhà Giả Kim", "Paulo Coelho");
const library = new Library();
library.addBook(boook1);
library.addBook(boook2);
library.addBook(boook3);
library.addBook(boook4);
library.addBook(boook5);
library.showBooks();
//# sourceMappingURL=CNTT3-IT104-EX6.js.map