"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = "hello world apple banana orange grape";
function checkWord(inputString) {
    let result = '';
    // tách chuỗi ban đầu thành mảng các từ
    // ["hello", "world", "apple", "banana", "orange", "grape"]
    let words = inputString.split(" ");
    // b2 xét từng từ con trong mảng
    words.forEach((word) => {
        // b3 kiểm tra ký tự trùng lặp
        let charset = new Set(word);
        if (charset.size === word.length) {
            if (result.length === 0 || word.length > result.length) {
                result = word;
            }
        }
    });
    // b4 kiểm tra độ dài so với từ dài nhất hiện tại 
    return result;
}
//# sourceMappingURL=bt10.js.map