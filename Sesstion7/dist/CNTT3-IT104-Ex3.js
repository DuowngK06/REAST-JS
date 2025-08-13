class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Mèo Mun");
const dog = new Dog("Cún Vàng");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
