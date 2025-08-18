"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Animal Name: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gâu gâu");
    }
}
const cat = new Cat("Tom");
cat.printName();
cat.makeNoise();
const dog = new Dog("Dog");
dog.printName();
dog.makeNoise();
//# sourceMappingURL=bt3.js.map