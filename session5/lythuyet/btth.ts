class Animal{
    private name: string;
    protected age: number;
    species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak(): void {
        console.log("random sound");
        
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        this.age = age;
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, species: string , breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Woof! Woof!");
    }
}
