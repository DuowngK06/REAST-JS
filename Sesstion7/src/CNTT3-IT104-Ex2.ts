class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    public slowDown(amount: number = 5): void {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Đã giảm tốc độ xuống ${this.speed} km/h.`);
    }

    public speedUp(amount: number = 5): void {
        this.speed += amount;
        console.log(`Đã tăng tốc độ lên ${this.speed} km/h.`);
    }

    public showSpeed(): void {
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number; // private

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    public showInfo(): void {
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
