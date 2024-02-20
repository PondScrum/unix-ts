export function getNestedValue(obj: any, keys: Array<string>): any {
    for (const i in keys) {
        obj = obj[keys[i]];
    }
    return obj;
};