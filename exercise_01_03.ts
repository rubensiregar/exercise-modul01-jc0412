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
// bisa: let result = text.replace(regex-nya, function (x) {return x.toUpperCase()

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
let biggest: number = 0;

if (num1 > num2) {
  biggest = num1;
} else if (num2 > num1) {
  biggest = num2;
}
console.log(biggest);

// 9. Sorting
let i: number = 10;
let j: number = 50;
let k: number = 100;
let sort: string = "";
let saku: number = 0;

if (i < j && i < k) {
  sort += `${i}, `;
  if (j < k) {
    sort += `${j}, ${k}`;
  } else {
    sort += `${k}, ${j}`;
  }
} else if (j < i && j < k) {
  sort += `${j}, `;
  if (i < k) {
    sort += `${i}, ${k}`;
  } else {
    sort += `${k}, ${i}`;
  }
} else if (k < i && k < j) {
  sort += `${k}, `;
  if (i < j) {
    sort += `${i}, ${j}`;
  } else {
    sort += `${j}, ${i}`;
  }
}
console.log(sort);

// cara geraldo
if (i > j) {
  saku = i;
  i = j;
  j = saku;
}
if (i > k) {
  saku = i;
  i = k;
  k = saku;
}
if (j > k) {
  saku = j;
  j = k;
  k = saku;
}
console.log(`${i}, ${j}, ${k}`);

// 10. Type checker
let masukan = true;
let keluaran;

switch (typeof masukan) {
  case "string": {
    keluaran = 1;
    break;
  }
  case "number": {
    keluaran = 2;
    break;
  }
  default: {
    keluaran = 3;
    break;
  }
}
console.log(keluaran);

// 11. Asterisk Changer
// bisa: let result = text.replace(/blue|house|car/gi, function (x) {return x.toUpperCase()
const targetAst: string = "An apple a day keeps the doctor away";
let resAst: string = targetAst.toLowerCase();
for (let i: number = 0; i < targetAst.length; i++) {
  console.log(i);

  resAst = resAst.replace("a", "*");
  console.log(resAst);
}

console.log(resAst);
