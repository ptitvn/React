"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}
const student = new Student("Alice", 123);
student.displayInfo();
const teacher = new Teacher("Bob", "Mathematics");
teacher.displayInfo();
//# sourceMappingURL=bt4.js.map