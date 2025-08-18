function flatten<T>(arr: T[][]): T[] {
    const result: T[] = [];
    for (const subArray of arr) {
        for (const item of subArray) {
            result.push(item);
        }
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
//Giá trị mặc định của thành viên đầu tiên trong một enum (nếu không được gán) là gì?
//A. 1
// B. 0
// C. null
// D. undefined
// laf