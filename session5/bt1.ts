class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    displayInfo(): void {
        console.log(`Tên phương tiện: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}

const vehicle1 = new Vehicle("Xe hơi", 2020, "Toyota");
const vehicle2 = new Vehicle("Xe máy", 2018, "Yamaha");

vehicle1.displayInfo();
vehicle2.displayInfo();