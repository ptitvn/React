"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidNumber(value) {
    if (typeof value === 'number') {
        return !isNaN(value);
    }
    const num = parseFloat(value);
    return !isNaN(num);
}
function add(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return 'Invalid input';
    }
    return Number(a) + Number(b);
}
function subtract(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return 'Invalid input';
    }
    return Number(a) - Number(b);
}
function multiply(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return 'Invalid input';
    }
    return Number(a) * Number(b);
}
function divide(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return 'Invalid input';
    }
    if (Number(b) === 0) {
        return 'Division by zero error';
    }
    return Number(a) / Number(b);
}
console.log(add(5, '10'));
console.log(subtract('20', 5));
console.log(multiply('3.5', '2'));
console.log(divide(10, '2'));
//# sourceMappingURL=bt8.js.map