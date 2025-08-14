function partialUpdate<T extends object, U extends Partial<T>>(obj: T, updates: U): T {
    const result = {} as T;

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            (result as any)[key] = (obj as any)[key];
        }
    }

    for (const key in updates) {
        if (Object.prototype.hasOwnProperty.call(updates, key)) {
            (result as any)[key] = (updates as any)[key];
        }
    }

    return result;
}


console.log(
    partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 })
);

console.log(
    partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' })
);