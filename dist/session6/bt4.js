"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Circle perimeter: ${circle.calculatePerimeter()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
//# sourceMappingURL=bt4.js.map