function partialUpdate(obj, updates) {
    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    for (const key in updates) {
        if (Object.prototype.hasOwnProperty.call(updates, key)) {
            result[key] = updates[key];
        }
    }
    return result;
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' }));
