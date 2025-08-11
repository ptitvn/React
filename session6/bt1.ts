abstract class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): string;
}
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): string {
        return `Rectangle ${this.getName()} has width ${this.width} and height ${this.height}.`;
    }
}
const rectangle = new Rectangle("MyRectangle", 10, 5);
console.log(rectangle.getName()); 
console.log(rectangle.getSize()); 