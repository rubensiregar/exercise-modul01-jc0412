function map(arr, fn: (x, i) => number) {
    const out: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        out[i] = fn(arr[i], i);
    }
    return out;
}

let arr: number[] = [1, 2, 3];
let hasil = map(arr, (el, i) => {
    el * 2;
});
console.log(hasil);
