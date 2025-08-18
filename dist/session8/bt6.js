"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(arr, value) {
    for (const element of arr) {
        if (element === value) {
            return element;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement(['apple', 'banana', 'cherry'], 'banana'));
console.log(findElement([true, false, true], false));
console.log(findElement([1, 2, 3], 4));
//# sourceMappingURL=bt6.js.map