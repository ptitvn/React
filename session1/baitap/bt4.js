function checkParity(num) {
    if (!Number.isFinite(num)) {
        return  `${num} not is number`;
    }
    if (num % 2 === 0) {
        return `${num} is an even number`;
    } else {
        return `${num} is odd`;
    }
}
console.log(checkParity(10)); // 10 is an even number
console.log(checkParity(7)); // 7 is odd
console.log(checkParity('abc')); // a not is number