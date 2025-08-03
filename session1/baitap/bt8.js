function insertArrayAtPosition(array1, array2, position) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error("Cả hai tham số phải là mảng");
    }
    if (typeof position !== 'number' || position < 0 || position > array1.length) {
        throw new Error("Vị trí không hợp lệ");
    }
    
    const result = [...array1];
    result.splice(position, 0, ...array2);
    return result;
}
console.log(insertArrayAtPosition([1, 2, 3, 7, 8], [4, 5, 6], 3)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(insertArrayAtPosition(['a', 'b', 'e', 'f'], ['c', 'd'], 2)); // ['a', 'b', 'c', 'd', 'e', 'f']
