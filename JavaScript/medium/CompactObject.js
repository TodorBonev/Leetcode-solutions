function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((acc, item) => {
        const compactedItem = compactObject(item);
        if (compactedItem) {
            acc.push(compactedItem);
        }
        return acc;
        }, []);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
        const compactedValue = compactObject(value);
        if (compactedValue) {
            acc[key] = compactedValue;
        }
        return acc;
        }, {});
    }
    return obj || undefined;
}

console.log(compactObject([null, 0, false, 1]));