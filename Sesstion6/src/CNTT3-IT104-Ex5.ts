interface changeSpeed {
    speedUp(amount: number): void; // Tăng tốc
    slowDown(amount: number): void; // Giảm tốc
    stop(): void;                   // Dừng phương tiện
}

class Vehicle implements changeSpeed {
    private speed: number; // Tốc độ hiện tại

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; // Không âm tốc độ
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

const myCar = new Vehicle();

myCar.speedUp(50);
myCar.slowDown(20);
myCar.speedUp(30);
myCar.stop();       