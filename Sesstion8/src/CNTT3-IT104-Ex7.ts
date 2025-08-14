function flatten<T>(arr: T[][]) {
    let result: T[] = [];

    for (let c of arr) {
        result.push(...c);
    }

    return result;
}

console.log(
    flatten([
        [1, 2],
        [3, 4],
        [5, 6],
    ])
);

console.log(flatten([["apple", "banana"], ["cherry"], ["date", "elderberry"]]));