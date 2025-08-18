"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
let students = [];
students.push(new Student(1, 20, "student1@example.com"));
students.push(new Student(2, 22, "student2@example.com"));
for (const student of students) {
    student.displayInfo();
}
//# sourceMappingURL=bt2.js.map