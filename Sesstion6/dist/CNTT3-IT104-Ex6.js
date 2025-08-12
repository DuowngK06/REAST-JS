let AllStudents = [];
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        AllStudents.push(this);
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        console.log("Danh sach sinh vien:");
        this.students.forEach((e) => console.log(`ID: ${e.getId} - NAME: ${e.getName}`));
    }
    addStudents(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        let student = this.students.find((e) => e.getId == id);
        if (student) {
            console.log(`Id: ${student.getId}
Name: ${student.getName}`);
        }
        else {
            console.log("Không tìm thấy sinh viên");
        }
    }
    addStudentInClass(id) {
        const index = AllStudents.findIndex((s) => s.getId === id);
        if (index !== -1) {
            this.students.push(AllStudents[index]);
            AllStudents.splice(index, 1);
        }
        else {
            console.log("khong tim thay sinh vien nao trung voi id");
        }
    }
}
new Student(1, "Duong");
new Student(2, "Hoang");
new Student(3, "Minh");
new Student(4, "Dat");
new Student(5, "Chi");
new Student(6, "Diep");
new Student(7, "tuan");
const class1 = new Classroom();
const class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
class2.addStudentInClass(7);
