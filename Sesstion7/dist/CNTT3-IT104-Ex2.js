class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount = 5) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Đã giảm tốc độ xuống ${this.speed} km/h.`);
    }
    speedUp(amount = 5) {
        this.speed += amount;
        console.log(`Đã tăng tốc độ lên ${this.speed} km/h.`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log("===== Thông tin xe đạp =====");
        console.log(`Tên xe: ${this.name}`);
        console.log(`Mã xe: ${this.id}`);
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 10, "B123", 6);
bike.speedUp(10);
bike.showSpeed();
bike.slowDown(5);
bike.showSpeed();
bike.showInfo();
