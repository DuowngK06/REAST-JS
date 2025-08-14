function findElement<T>(arr: T[], value: T): T | undefined {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return undefined;
}

const number = [1, 2, 3, 4, 5];
console.log(findElement(number, 3));
console.log(findElement(number, 10));

const names = ["Duong", "Minh", "Hoang"];
console.log(findElement(names, "Lan"));
console.log(findElement(names, "Tú")); 