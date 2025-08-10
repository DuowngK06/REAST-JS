"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm in thông tin nhân viên
function printStaffInfo(staff) {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff1);
//# sourceMappingURL=CNTT3-IT104-Ex5.js.map