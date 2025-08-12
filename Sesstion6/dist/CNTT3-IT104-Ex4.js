class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        console.log(`chu vi hinh tron la:`, 2 * 3.14 * this.radius);
    }
    calculatePrimeter() {
        console.log("dien tich hinh tron la:", 3.14 * Math.pow(this.radius, 2));
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = width;
    }
    calculateArea() {
        console.log("chu vi hinh chu nhat la:", 2 * (this.width + this.height));
    }
    calculatePrimeter() {
        console.log("dien tich hinh chu nhat la:", this.width * this.height);
    }
}
let circle = new Circle(3);
circle.calculateArea();
circle.calculatePrimeter();
let rectangle = new Rectangle(3, 5);
rectangle.calculateArea();
rectangle.calculatePrimeter();
