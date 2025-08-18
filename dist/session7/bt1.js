"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const manager = new Manager("Alice", "Tech Corp", "123-456-7890", 5);
manager.printInfo();
//# sourceMappingURL=bt1.js.map