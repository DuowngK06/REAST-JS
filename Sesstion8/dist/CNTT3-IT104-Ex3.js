function reverseArray(arr) {
    return arr.slice().reverse();
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers1));
const strings = ["A", "B", "C"];
console.log(reverseArray(strings));
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(reverseArray(objects));
