function findElement<T>(arr: T[], value: T): T | undefined {
    for (const element of arr) {
        if (element === value) {
            return element;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement(['apple', 'banana', 'cherry'], 'banana'));
console.log(findElement([true, false, true], false));
console.log(findElement([1, 2, 3], 4)); 
