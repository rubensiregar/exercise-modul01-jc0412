// Duplikasi array.map
// const newData = duplicateMap(dataArray, callbackFn);
// const newData = duplicateMap([1, 2, 3], (value: any, index: number) => {
//     return value * 2;
// });
// console.log(newData);>>>>>[2, 4, 6]

function dupMap(arr: any[], cbfn: Function) {
    let out: any[] = [];
    for (let element of arr) {
        out.push(cbfn(element));
    }

    return out;
}

const arrAwal: number[] = [1, 2, 3];
function func(input) {
    return input * 2;
}

let arrBaru: number[] = dupMap(arrAwal, func);
console.log(arrBaru);
