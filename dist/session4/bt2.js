"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Điểm trung bình:", average.toFixed(2));
//# sourceMappingURL=bt2.js.map