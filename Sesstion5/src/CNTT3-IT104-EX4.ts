
class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    getInfo(): string {
        return `ID: ${this.id}, Ten xe: ${this.name}, Nam san xuat: ${this.year}, Hang xe: ${this.company}`;
    }
}

// Tạo thực thể và kiểm tra
const v1 = new Vehicle(1, "Accent", 2023, "Hyundai");
console.log(v1.getInfo());