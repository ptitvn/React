"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(initialSpeed = 0) {
        this.speed = initialSpeed;
    }
    speedUp(increment) {
        this.speed += increment;
        console.log(`Speed increased by ${increment}. Current speed: ${this.speed}`);
    }
    slowDown(decrement) {
        this.speed -= decrement;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Speed decreased by ${decrement}. Current speed: ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Vehicle stopped. Current speed: ${this.speed}`);
    }
}
const vehicle = new Vehicle();
vehicle.speedUp(50);
vehicle.slowDown(20);
//# sourceMappingURL=bt5.js.map