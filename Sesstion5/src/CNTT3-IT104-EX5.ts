class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    getArea(): number {
        return this._width * this._height;
    }

    getPerimeter(): number {
        return 2 * (this._width + this._height);
    }

    setSize(width: number, height: number): void {
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