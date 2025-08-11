"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `Rectangle ${this.getName()} has width ${this.width} and height ${this.height}.`;
    }
}
// Example usage
const rectangle = new Rectangle("MyRectangle", 10, 5);
console.log(rectangle.getName());
console.log(rectangle.getSize());
//# sourceMappingURL=bt1.js.map