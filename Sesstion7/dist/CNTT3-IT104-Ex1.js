class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team size: ${this.teamSize}`);
    }
}
// Test
const e = new Employee("Nguyen Van A", "ABC Corp", "0123456789");
const m = new Manager("Tran Van B", "XYZ Ltd", "0987654321", 5);
console.log("=== Employee Info ===");
e.printInfo();
console.log("\n=== Manager Info ===");
m.printInfo();
