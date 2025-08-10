"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm nhận vào một đối tượng Student và in ra câu giới thiệu
function introduceStudent(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
// Ví dụ sử dụng
const student1 = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
introduceStudent(student1);
//# sourceMappingURL=CNTT3-IT104-Ex3.js.map