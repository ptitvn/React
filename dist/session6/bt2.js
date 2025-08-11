"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job type: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    static fullTimeSalary = 10000000;
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return FulltimeJob.fullTimeSalary;
    }
}
// Example usage
const partTimeJob = new ParttimeJob("Part-time Developer", 160);
const fullTimeJob = new FulltimeJob("Full-time Developer");
partTimeJob.printType();
console.log(`Part-time salary: ${partTimeJob.calculateSalary()}`);
fullTimeJob.printType();
console.log(`Full-time salary: ${fullTimeJob.calculateSalary()}`);
//# sourceMappingURL=bt2.js.map