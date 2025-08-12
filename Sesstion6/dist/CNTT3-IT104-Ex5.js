class Vehicle {
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // Không âm tốc độ
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
const myCar = new Vehicle();
myCar.speedUp(50);
myCar.slowDown(20);
myCar.speedUp(30);
myCar.stop();
