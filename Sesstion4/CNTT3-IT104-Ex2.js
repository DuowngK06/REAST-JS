"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tạo mảng điểm của 10 sinh viên (kiểu number)
const studentScores = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 7.8];
// Tính tổng điểm
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);
// Tính điểm trung bình
const averageScore = totalScore / studentScores.length;
// In kết quả ra console
console.log("Điểm trung bình của 10 sinh viên là:", averageScore);
//# sourceMappingURL=CNTT3-IT104-Ex2.js.map