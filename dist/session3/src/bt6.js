"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = 10;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
num3 = num1 + num2;
console.log(`Kết quả cộng: ${num3}`); // 15
num3 = num1 - num2;
console.log(`Kết quả trừ: ${num3}`); // 5
num3 = num1 * num2;
console.log(`Kết quả nhân: ${num3}`); // 50
num3 = num1 / num2;
console.log(`Kết quả chia: ${num3}`); // 2
console.log(`Kết quả cộng giữa num4 và num5: ${num4 + num5}`); // "10true"
// Khi cộng một chuỗi với một giá trị boolean, JavaScript sẽ tự động ép kiểu giá trị boolean thành chuỗi.
// Trong trường hợp này, true sẽ được chuyển thành "true", và kết quả cuối cùng sẽ là "10true".
//# sourceMappingURL=bt6.js.map