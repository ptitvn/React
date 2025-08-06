"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "banana";
let uniqueChars = Array.from(new Set(str.split(''))).join('');
console.log(uniqueChars);
str = "hello world";
uniqueChars = Array.from(new Set(str.split(''))).join('');
console.log(uniqueChars);
//# sourceMappingURL=bt7.js.map