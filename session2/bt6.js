function checkEndString(longStr, shortStr) {
    if (typeof longStr !== 'string' || typeof shortStr !== 'string') {
        return 'Cả hai tham số phải là chuỗi.';
    }
    return longStr.endsWith(shortStr);
}
console.log(checkEndString("Hello, World!", "Hello")); 
console.log(checkEndString("Hi there!", "there!")); 