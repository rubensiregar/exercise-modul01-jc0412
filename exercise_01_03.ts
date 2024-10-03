// 1. Multiplication Table
const multiTarget: number = 9;
const limit: number = 10;
let tabelPerkalian: string = "";
for (let i: number = 1; i <= 10; i++) {
  tabelPerkalian += `${multiTarget} x ${i} = ${multiTarget * i} \n`;
}
console.log(tabelPerkalian);

// 2. Palindrome Checker
const wordInput: string = "madam madam";
const wordLength: number = wordInput.length;
let palindrome: boolean = true;

for (let i: number = 0; i < wordLength; i++) {
  if (wordInput.charAt(i) !== wordInput.charAt(wordLength - i - 1)) {
    palindrome = false;
    break;
  }
}
console.log(palindrome);

// 3. CM to KM
const cm: number = 150000;
const km: string = `${cm / 100000} km`;
console.log(km);

// 4. Format currency
const duit: number = 150000;
const rp: string = `Rp ${duit.toLocaleString()},00`;
console.log(rp);

// 5. Remove string first occurrence
const sentence: string = "Hello World";
let sentenceResult: string = sentence.replace("ell", "");
console.log(sentenceResult);

// 6. Capitalize first letter per word
let sentenceCap: string = "hello new world, im here to learn";
let resultCap: string = "";
// sentenceCap.split(" ")
// lalu bisa di join menggunakan Array.join()

for (let i: number = 0; i < sentenceCap.length; i++) {
  let char: string = sentenceCap.charAt(i);
  let charPrev: string = sentenceCap.charAt(i - 1);

  if (i === 0 || charPrev === " ") {
    resultCap += char.toUpperCase();
  } else {
    resultCap += char;
  }
  console.log(resultCap);
}
console.log(resultCap);

// 7. Swap case each character
const sSwap: string = "The QuiCk BrOwN Fox";
let resSwap: string = "";

for (let i = 0; i < sSwap.length; i++) {
  if (sSwap.charAt(i) === sSwap.charAt(i).toUpperCase()) {
    resSwap += sSwap.charAt(i).toLowerCase();
  } else {
    resSwap += sSwap.charAt(i).toUpperCase();
  }
}
console.log(resSwap);

// 8. Biggest
const num1: number = 42;
const num2: number = 27;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
}

// 9. Sorting
const i: number = 42;
const j: number = 50;
const k: number = 100;
let sort: string="";
/**harus ada permutasi
 ijk---
 ikj
 jik---
 jki
 kij---
 kji---
 **/
if (i > j) {
  if (j > k) {
    sort = `${i}, ${j}, ${k}`;
  } else if (k > i) {
    sort = `${k}, ${i}, ${j}`;
  }
} else if (i > k) {
  sort = `${j}, ${i}, ${k}`;
} else if (k > j) {
  sort = `${k}, ${j}, ${i}`;
}
console.log(sort);

// 10. Type checker

// 11. Asterisk Changer
