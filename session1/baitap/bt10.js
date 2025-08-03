const groupAnagrams = (strs) => {
    if (!Array.isArray(strs)) {
        throw new Error("Tham số phải là mảng");
    }

    const map = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));