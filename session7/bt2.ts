class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(): void {
        this.speed -= 5;
    }

    speedUp(): void {
        this.speed += 5;
    }

    showSpeed(): void {
        console.log(`Current speed of ${this.name}: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Bicycle Info:`);
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}

const myBike = new Bicycle("Mountain Bike", 20, 1, 18);
myBike.speedUp();
myBike.showSpeed();
myBike.showInfo();
