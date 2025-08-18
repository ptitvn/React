"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person = { name: "Alice" };
const job = { role: "Developer" };
const merged = mergeObjects(person, job);
console.log(merged);
//# sourceMappingURL=bt3.js.map