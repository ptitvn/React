interface StudentInterface {
    getId(): number;
    getName(): string;
}

class Student implements StudentInterface {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        console.log("Students in the classroom:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student | undefined {
        return this.students.find(student => student.getId() === id);
    }

    addStudentInClass(allStudents: Student[], id: number): void {
        const student = allStudents.find(student => student.getId() === id);
        if (student) {
            this.addStudent(student);
            const index = allStudents.indexOf(student);
            if (index > -1) {
                allStudents.splice(index, 1);
            }
        } else {
            console.log(`Student with ID ${id} not found in allStudents.`);
        }
    }

    removeStudent(id: number, allStudents: Student[]): void {
        const student = this.filterStudent(id);
        if (student) {
            this.students = this.students.filter(s => s.getId() !== id);
            allStudents.push(student);
            console.log(`Removed student with ID ${id} from the classroom and added back to allStudents.`);
        } else {
            console.log(`Student with ID ${id} not found in the classroom.`);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.filterStudent(id);
        if (student) {
            this.students = this.students.map(s => {
                if (s.getId() === id) {
                    return new Student(id, newName);
                }
                return s;
            });
            console.log(`Updated student with ID ${id} to new name: ${newName}`);
        } else {
            console.log(`Student with ID ${id} not found in the classroom.`);
        }
    }
}

const allStudents: Student[] = [];
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

classroom1.removeStudent(2, allStudents); 
classroom1.editStudent(3, "Chuck");      

console.log("After modifications:");
console.log("Classroom 1:");
classroom1.showStudents();

console.log("Updated allStudents array:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});