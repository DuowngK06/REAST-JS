"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(value) {
    if (typeof value === "string") {
        // Đếm số ký tự trong chuỗi (bao gồm cả số và chữ)
        const length = value.length;
        console.log(`${length} ký tự`);
    }
    else if (typeof value === "number") {
        // Kiểm tra số chẵn hay lẻ
        if (value % 2 === 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
    else {
        console.log("Kiểu dữ liệu không hợp lệ");
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(7);
//# sourceMappingURL=CNTT3-IT104-Ex4.js.map