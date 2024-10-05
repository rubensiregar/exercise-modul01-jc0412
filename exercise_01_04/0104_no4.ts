let inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeOdd(inArr: number[]): number[] {
    let outArr: number[] = [];
    let j: number = 0;
    for (const i of inArr) {
        if (inArr[i] % 2 === 0) {
            outArr[j] = inArr[i];
            j++;
        }
    }
    return outArr;
}

let arrayGenap: number[] = removeOdd(inputArray);
console.log(arrayGenap);
