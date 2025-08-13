function findFirstEven<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find((item) => typeof item === "number" && item % 2 === 0 && predicate(item)); 
}
console.log(findFirstEven([1, 2, 3, 4, 5], (item) => item % 2 === 0));
