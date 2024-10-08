// 6. Sum number from random elements
const arrMix: any[] = ["3", 1, "string", null, false, undefined, 2];

function sumOfMix(arrMix: any[]): number {
    let out: number = 0;

    for (const ele of arrMix) {
        typeof ele == "number" ? (out += ele) : (out += 0);
    }

    return out;
}

console.log(sumOfMix(arrMix));

// 7. inToArray
const maxSize: number = 5;
function inToArray(size: number, ...lanjut: number[]): number[] {
    let out: number[] = [];
    for (let i: number = 0; i < size; i++) {
        out.push(lanjut[i]);
    }
    return out;
}

console.log(inToArray(maxSize, 2, 3, 4, 5, 67, 8, 8, 9, 9));

// 8. Combine
const arrE: number[] = [1, 2, 3];
const arrF: number[] = [4, 5, 6, 7, 8];

function combine(arr1: number[], arr2: number[]): number[] {
    let out: number[] = [];
    for (const element of arr1) {
        out.push(element);
    }
    for (const element of arr2) {
        out.push(element);
    }

    return out;
}

console.log(combine(arrE, arrF));

// 9. Dupe Catcher
const arrG: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function dupePrint(arr: number[]): number[] {
    let out: number[] = [];
    let count = 0;
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            arr[i] === arr[j] && !out.includes(arr[i]) ? out.push(arr[i]) : {};
        }
    }

    return out;
}

console.log(dupePrint(arrG));

// 10. Diff Catcher
const arrI: number[] = [1, 2, 3, 4, 5];
const arrJ: number[] = [3, 4, 5, 6, 7, 8, 1];
arrI.find;
function diffPrint(arr1: number[], arr2: number[]): number[] {
    const out: number[] = [];
    const index: number = Math.max(arr1.length, arr2.length);
    console.log(index);

    arr1.find((element, index) => element === arr2[index])
        ? {}
        : out.push(arr1[index]);
    // for (let i: number = 0; i < index; i++) {
    // }

    return out;
}

console.log(diffPrint(arrI, arrJ));
