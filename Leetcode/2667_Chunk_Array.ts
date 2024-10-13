function chunk(arr: number[], size: number): number[][] {
    let out: number[][] = [];
    let count: number = 0;

    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        let sub: number[] = [];
        for (let j = 0; j < size; j++) {
            if (typeof arr[count] !== "undefined") {
                sub.push(arr[count]);
                count++;
            }
        }
        out.push(sub);
    }

    return out;
}

const arr: number[] = [1, 2, 3, 4, 5];
const size: number = 3;
console.log(chunk(arr, size));
