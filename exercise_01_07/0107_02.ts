function findIntersection(objA: any, objB: any) {
    let out: any = {};

    for (let key in objB) {
        console.log(key);

        if (objA[key] === objB[key]) {
            console.log(key);
            out[key] = objA[key];
        }
    }

    return out;
}

let obj3: {} = { az: 1, b: 2, d: 4, c: 44 };
let obj4: {} = { a: 1, b: 2, z: 66, c: 4, d: 4 };
console.log(findIntersection(obj3, obj4));
