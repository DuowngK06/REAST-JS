"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    id;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `ID: ${this.id}, Ten xe: ${this.name}, Nam san xuat: ${this.year}, Hang xe: ${this.company}`;
    }
}
// Tạo thực thể và kiểm tra
const v1 = new Vehicle(1, "Accent", 2023, "Hyundai");
console.log(v1.getInfo());
//# sourceMappingURL=CNTT3-IT104-EX4.js.map