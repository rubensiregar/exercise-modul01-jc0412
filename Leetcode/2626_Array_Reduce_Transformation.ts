type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let val = init;
    console.log(val);

    nums.forEach((ele, i) => {
        console.log(i);
        console.log(val);
        val = fn(val, ele);
    });
    return val;
}

let arr = [1, 2, 3, 4];
let f = (accum, curr) => {
    return accum + curr * curr;
};

let coba = reduce(arr, f, 100);
console.log(coba);
