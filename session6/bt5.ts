interface ChangeSpeed {
    speedUp(increment: number): void;
    slowDown(decrement: number): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(increment: number): void {
        this.speed += increment;
        console.log(`Speed increased by ${increment}. Current speed: ${this.speed}`);
    }

    slowDown(decrement: number): void {
        this.speed -= decrement;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Speed decreased by ${decrement}. Current speed: ${this.speed}`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Vehicle stopped. Current speed: ${this.speed}`);
    }
}
const vehicle = new Vehicle();
vehicle.speedUp(50);
vehicle.slowDown(20);