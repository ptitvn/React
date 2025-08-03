const a = 5;
const arr = [1, 2, 3];
// a = 10; // Lỗi: Không thể gán giá trị mới cho biến const
arr.push(4); // Thêm phần tử mới vào mảng
console.log(a); 
console.log(arr); // In ra [1, 2, 3, 4]