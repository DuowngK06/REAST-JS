class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Mã SV: ${this.id}, Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Giáo viên: ${this.name}, Môn: ${this.subject}`);
    }
}
const student = new Student("Nguyễn Văn A", "SV001");
const teacher = new Teacher("Trần Thị B", "Toán");
student.displayInfo();
teacher.displayInfo();
