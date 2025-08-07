// Định nghĩa kiểu Student bằng interface
interface Student {
    name: string;
    age: number;
    email: string;
}

// Hàm nhận vào một đối tượng Student và in ra câu giới thiệu
function introduceStudent(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

// Ví dụ sử dụng
const student1: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};

introduceStudent(student1);
