function mergeObjects(obj1, obj2) {
    const result = {};
    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            result[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            result[key] = obj2[key];
        }
    }
    return result;
}
const person = { name: "Duong", age: 25 };
const job = { title: "Developer", salary: 2000 };
const merged = mergeObjects(person, job);
console.log(merged);
