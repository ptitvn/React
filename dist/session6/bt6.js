"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    students = [];
    showStudents() {
        console.log("Students in the classroom:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.find(student => student.getId() === id);
    }
    addStudentInClass(allStudents, id) {
        const student = this.filterStudent(id);
        if (student) {
            this.addStudent(student);
            const index = allStudents.indexOf(student);
            if (index > -1) {
                allStudents.splice(index, 1);
            }
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
}
// Example usage
const allStudents = [];
allStudents.push(new Student(1, "Alice"));
allStudents.push(new Student(2, "Bob"));
allStudents.push(new Student(3, "Charlie"));
allStudents.push(new Student(4, "David"));
allStudents.push(new Student(5, "Eve"));
allStudents.push(new Student(6, "Frank"));
const classroom1 = new Classroom();
const classroom2 = new Classroom();
classroom1.addStudentInClass(allStudents, 1);
classroom1.addStudentInClass(allStudents, 2);
classroom1.addStudentInClass(allStudents, 3);
classroom2.addStudentInClass(allStudents, 4);
classroom2.addStudentInClass(allStudents, 5);
classroom2.addStudentInClass(allStudents, 6);
console.log("Classroom 1:");
classroom1.showStudents();
console.log("Classroom 2:");
classroom2.showStudents();
console.log("Remaining students in allStudents array:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});
//# sourceMappingURL=bt6.js.map