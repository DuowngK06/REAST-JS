function isEven(arr, predicate) {
    let result = [];
    for (let item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = isEven(numbers, (n) => n % 2 === 0);
console.log("Số chẵn:", evenNumbers);
