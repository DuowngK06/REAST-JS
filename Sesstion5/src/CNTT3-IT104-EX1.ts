class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    displayInfo(): void {
        console.log(`Tên: ${this.name}, Năm SX: ${this.year}, Hãng: ${this.company}`);
    }
}

const car1 = new Vehicle("Camry", 2020, "Toyota");
const car2 = new Vehicle("Civic", 2022, "Honda");

car1.displayInfo();
car2.displayInfo();