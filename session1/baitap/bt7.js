function sumArrays(...arrays) {
    return arrays.map(array => {
        if (!Array.isArray(array)) {
            throw new Error("Tất cả các đối số phải là mảng");
        }
        return array.reduce((sum, num) => {
            if (typeof num !== 'number') {
                throw new Error("Tất cả các phần tử trong mảng phải là số");
            }
            return sum + num;
        }, 0);
    });
}
console.log(sumArrays([1, 2], [6, 7, 8], [12, 8])); 
