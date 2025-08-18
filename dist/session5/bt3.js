"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
const employee = new Employee("Nguyễn Văn A", "Công ty ABC", "0123456789");
employee.printInfo();
//# sourceMappingURL=bt3.js.map