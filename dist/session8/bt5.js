"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirstEven(arr, predicate) {
    return arr.find((item) => typeof item === "number" && item % 2 === 0 && predicate(item));
}
console.log(findFirstEven([1, 2, 3, 4, 5], (item) => item % 2 === 0));
//# sourceMappingURL=bt5.js.map