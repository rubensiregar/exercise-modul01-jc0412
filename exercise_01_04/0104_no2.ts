// 2. Fizz Buzz
let input2: number = 50;
let fizzbuzz: string[] = [];

function toFizzBuzz(n: number): string[] {
    let output: string[] = [];
    for (let i: number = 0; i < n; i++) {
        if ((i + 1) % 3 === 0) {
            output[i] = `Fizz`;
            if ((i + 1) % 5 === 0) {
                output[i] += `Buzz`;
            }
        } else if ((i + 1) % 5 === 0) {
            output[i] = `Buzz`;
        } else {
            output[i] = `${i + 1}`;
        }
    }
    return output;
}

fizzbuzz = toFizzBuzz(input2);
console.log(fizzbuzz);
