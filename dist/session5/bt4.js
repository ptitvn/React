"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
        console.log(`ID: ${this.id}`);
    }
}
const vehicle = new Vehicle("Car", 2020, "Toyota", 1);
vehicle.displayInfo();
//# sourceMappingURL=bt4.js.map