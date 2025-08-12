"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    _width;
    _height;
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    getArea() {
        return this._width * this._height;
    }
    getPerimeter() {
        return 2 * (this._width + this._height);
    }
    setSize(width, height) {
        this._width = width;
        this._height = height;
    }
}
const retangle = new Rectangle(5, 3);
console.log("Chiều dài:", retangle.width);
console.log("Chiều rộng:", retangle.height);
console.log("Chu vi:", retangle.getPerimeter());
console.log("Diện tích:", retangle.getArea());
retangle.setSize(10, 7);
console.log("Sau khi cập nhật kích thước:");
console.log("Chiều dài:", retangle.width);
console.log("Chiều rộng:", retangle.height);
console.log("Chu vi:", retangle.getPerimeter());
console.log("Diện tích:", retangle.getArea());
//# sourceMappingURL=CNTT3-IT104-EX5.js.map