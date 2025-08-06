let strValue: string = "2";    
let numValue: number = 2;     

// So sánh bằng toán tử == (so sánh lỏng)
// @ts-expect-error
let isEqualLoose: boolean = (strValue == numValue);
// Ở đây, strValue được ép kiểu thành số trước khi so sánh.

// So sánh bằng toán tử === (so sánh chặt)
// @ts-expect-error
let isEqualStrict: boolean = (strValue === numValue);
// Toán tử === yêu cầu giá trị và kiểu phải giống nhau.

console.log(`So sánh lỏng (==): ${isEqualLoose}`);   
console.log(`So sánh chặt (===): ${isEqualStrict}`); 
