function isEqual(a: any, b: any): boolean {
    let longer: any;
    let shorter: any;

    if (Object.keys(a).length > Object.keys(b).length) {
        longer = { ...a };
        shorter = { ...b };
    } else {
        longer = { ...b };
        shorter = { ...a };
    }

    for (let kunci in longer) {
        if (longer[kunci] !== shorter[kunci]) {
            return false;
            break;
        }
    }

    return true;
}

let obj1: {} = { a: 1, b: 2, c: 3, d: 4 };
let obj2: {} = { a: 1, b: 2, c: 3 };
console.log(isEqual(obj1, obj2));
