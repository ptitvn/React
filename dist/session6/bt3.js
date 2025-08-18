"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "Meow!";
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(`${dog.getName()} says: ${dog.makeSound()}`);
console.log(`${cat.getName()} says: ${cat.makeSound()}`);
console.log(`Dog's name: ${dog.getName()}`);
//# sourceMappingURL=bt3.js.map