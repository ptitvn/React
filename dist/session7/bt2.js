"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 5;
    }
    speedUp() {
        this.speed += 5;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
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
//# sourceMappingURL=bt2.js.map