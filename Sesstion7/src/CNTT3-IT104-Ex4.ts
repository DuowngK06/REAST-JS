abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }


    public displayInfo(): void {
        console.log(`Tên: ${this.name}`);
    }
}

class Student extends Person {
    public id: string;

    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }


    public override displayInfo(): void {
        console.log(`Mã SV: ${this.id}, Tên: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }


    public override displayInfo(): void {
        console.log(`Giáo viên: ${this.name}, Môn: ${this.subject}`);
    }
}


const student = new Student("Nguyễn Văn A", "SV001");
const teacher = new Teacher("Trần Thị B", "Toán");


student.displayInfo();
teacher.displayInfo(); 
