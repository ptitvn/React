abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    public id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
    }
}

class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}

const student = new Student("Alice", 123);
student.displayInfo();

const teacher = new Teacher("Bob", "Mathematics");
teacher.displayInfo();

