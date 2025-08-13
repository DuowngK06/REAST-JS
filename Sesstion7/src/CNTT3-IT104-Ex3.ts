
abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract makeNoise(): void;


    public printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}


class Cat extends Animal {
    public makeNoise(): void {
        console.log("meo meo");
    }
}


class Dog extends Animal {
    public makeNoise(): void {
        console.log("gâu gâu");
    }
}


const cat = new Cat("Mèo Mun");
const dog = new Dog("Cún Vàng");

cat.printName();
cat.makeNoise();

dog.printName();
dog.makeNoise(); 
