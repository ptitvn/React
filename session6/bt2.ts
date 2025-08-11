abstract class Job {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Job type: ${this.type}`);
    }

    abstract calculateSalary(): number;
}
class ParttimeJob extends Job {
    workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    private static readonly fullTimeSalary: number = 10000000;

    constructor(type: string) {
        super(type);
    }

    calculateSalary(): number {
        return FulltimeJob.fullTimeSalary;
    }
}
const partTimeJob = new ParttimeJob("Part-time Developer", 160);
const fullTimeJob = new FulltimeJob("Full-time Developer");
partTimeJob.printType();
console.log(`Part-time salary: ${partTimeJob.calculateSalary()}`);
fullTimeJob.printType();
console.log(`Full-time salary: ${fullTimeJob.calculateSalary()}`);