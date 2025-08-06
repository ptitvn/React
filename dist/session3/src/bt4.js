"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let strValue = "2";
let numValue = 2;
// So sánh bằng toán tử == (so sánh lỏng)
// @ts-expect-error
let isEqualLoose = (strValue == numValue);
// Ở đây, strValue được ép kiểu thành số trước khi so sánh.
// So sánh bằng toán tử === (so sánh chặt)
// @ts-expect-error
let isEqualStrict = (strValue === numValue);
// Toán tử === yêu cầu giá trị và kiểu phải giống nhau.
console.log(`So sánh lỏng (==): ${isEqualLoose}`);
console.log(`So sánh chặt (===): ${isEqualStrict}`);
//# sourceMappingURL=bt4.js.map