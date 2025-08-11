abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract makeSound(): string;
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Woof!";
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "Meow!";
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(`${dog.getName()} says: ${dog.makeSound()}`);
console.log(`${cat.getName()} says: ${cat.makeSound()}`);
console.log(`Dog's name: ${dog.getName()}`);