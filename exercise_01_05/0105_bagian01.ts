// 1. Lowest, Highest, & Average
const arr1: number[] = [12, 5, 23, 18, 4, 45, 32];

function LowHiAvg(arrIn: number[]) {
    // const arrOut: string[] = [" "];
    // let lowest: number = Math.min(...arrIn);
    // let highest: number = Math.max(...arrIn);
    // let avg: number = 0;
    // for (let i: number = 0; i < arrIn.length; i++) {
    //     avg += arrIn[i];
    // }
    // avg = avg / arrIn.length;
    arrIn.sort((a, b) => a - b);
    console.log(arrIn);
    const lowest = arrIn[0];
    const highest = arrIn[arrIn.length - 1];
    const sum = arrIn.reduce((a, b) => a + b);
    const avg = sum / arrIn.length;

    return { lowest, highest, avg };
}

let statDariArr1 = LowHiAvg(arr1);
console.log(statDariArr1);
console.log(statDariArr1.lowest);
console.log(statDariArr1.highest);
console.log(statDariArr1.avg);

// 2. Array to String Commas
const arr2: string[] = ["apple", "banana", "cherry", "date"];

function toStringComma(arr2: string[]) {
    let outString: string = "";
    for (let i: number = 0; i < arr2.length; i++) {
        if (i === arr2.length - 1) {
            outString += `and ${arr2[i]}`;
        } else {
            outString += `${arr2[i]}, `;
        }
    }
    return outString;
}

let coba = toStringComma(arr2);
console.log(coba);

// 3. Second Smallest
const arr3: number[] = [5, 2, 1, 1, 1, 3, 1, 1, 7, 2, 6];

function secondLowest(arr3: number[]): number {
    arr3.sort((a: number, b: number) => {
        return a - b;
    });
    let second: number = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] < arr3[i + 1]) {
            second = arr3[i + 1];
            break;
        }
    }

    return second;
}

console.log(secondLowest(arr3));

// 4. Array Add
const arr4a: number[] = [1, 2, 3, 77];
const arr4b: number[] = [3, 2, 1, 8];

function arrAdd(a: number[], b: number[]): number[] {
    const out: number[] = a.map(function (e, i) {
        return e + b[i];
    });
    return out;
}

console.log(arrAdd(arr4a, arr4b));

// 5. addNewElement
const arr5: number[] = [1, 2, 3, 4];

function addNew(arr5: number[], n: number): number[] {
    if (arr5.includes(n) === false) {
        arr5.push(n);
    }
    return arr5;
}

console.log(addNew(arr5, 44));
