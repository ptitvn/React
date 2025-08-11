interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Circle perimeter: ${circle.calculatePerimeter()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
