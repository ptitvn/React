let str: string = "banana";
let uniqueChars: string = Array.from(new Set(str.split(''))).join('');
console.log(uniqueChars);

str = "hello world";
uniqueChars = Array.from(new Set(str.split(''))).join('');
console.log(uniqueChars);