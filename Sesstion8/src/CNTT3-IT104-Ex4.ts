function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    const result = {} as T & U;

    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            (result as any)[key] = (obj1 as any)[key];
        }
    }

    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            (result as any)[key] = (obj2 as any)[key];
        }
    }

    return result;
}

const person = { name: "Duong", age: 25 };
const job = { title: "Developer", salary: 2000 };

const merged = mergeObjects(person, job);
console.log(merged);
