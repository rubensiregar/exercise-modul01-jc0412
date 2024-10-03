// 1. Multiplication Table
const multiTarget: number = 9;
const limit: number = 10;

for (let i: number = 1; i <= 10; i++) {
  console.log(`${multiTarget} x ${i} = ${multiTarget * i

  }`);
}

// 2. Palindrome Checker
const wordInput: string = "madam madam";
const wordArray: string[] = wordInput.split("");
const wordLength: number = wordInput.length;
let palindrome: boolean = true;

for (let i: number = 0; i < wordLength; i++) {
  if (wordArray[i] !== wordArray[wordLength - 1 - i]) {
    palindrome = false;
    break;
  }
}

console.log(palindrome);

// 3. CM to KM
const cm: number = 150000;
const km: string = `${cm / 100000} km`;
console.log(km);

// 4.
const duit: number = 150000;
const rp: string = `Rp ${duit.toLocaleString()},00`;
console.log(rp);

// 5. Remove string first occurrence 
const sentence: string = "Hello World"
let sentenceResult:string=sentence.slice()