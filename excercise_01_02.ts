// 1. oddCeck   ------------------------------------------------------------------
const n1: number = 25;
//metode utama yang digunakan adalah modulo/remainder
//langkah pertama mengecek apakah input merupakan bilangan nol

if (n1 === 0) {
  console.log("zero is a zero");
  //jika input dimodulo 2 sama dengan 1 maka input adalah angka ganjil
} else if (n1 % 2 === 1) {
  console.log(n1, " is an odd number");
  //jika input habis dimodulo 2 maka input adalah angka genap
} else if (n1 % 2 === 0) {
  console.log(n1, " is an even number");
}

// 2. prime check   ----------------------------------------------------------------
// bilangan hanya memiliki 2 faktor
// deklarasi variabel counter untuk menanampung setiap kali input habis dimodulo
const n2: number = 7;
let countPrime: number = 0;

for (let i: number = 1; i <= n2; i++) {
  if (n2 % i === 0) {
    countPrime++;
  }
}
// penentuan apakah input memiliki tepat 2 faktor atau tidak
// jika benar, maka input merupakan bilangan prima
// jika salah, input bukan bilangan prima
if (countPrime == 2) {
  console.log(n2, " is a prime number");
} else {
  console.log(n2, " is not a prime number");
}

// cara lain kak bk(tidak include bilangan 1)(hemat resource)
const _n2: number = 7;
let isPrime: boolean = true;
for (let i: number = 2; i < _n2; i++) {
  console.log(i);
  console.log(_n2 % i);
  if (_n2 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

// 3. sum 1 to N    ----------------------------------------------------------------
const n3: number = 5;
// deklarasi variabel counter untuk menampung penjumlahan total selama proses loop
let countSum: number = 0;
for (let i: number = 1; i <= n3; i++) {
  countSum += i;
}
console.log(`Sum of 1 to ${n3} is ${countSum}`);

// 4. Factorial of a number   -------------------------------------------------------
const n4: number = 6;
// deklarasi variabel counter untuk menampung total hasil perkalian selama proses loop
let countFactorial: number = 1;
for (let i: number = 1; i <= n4; i++) {
  countFactorial *= i;
}
console.log(`${n4}! is equal to  ${countFactorial}`);

// 5. First N Fibonacci   --------------------------------------------------------
// ! tidak menyelesaikan N=0
const n5: number = 15;
// deklarasi variabel utama untuk menyimpan proses perhitungan fibonacci
// variabel kosong(saku) untuk menyimpan bilangan fibonacci dari iterasi sblmnya
// re-assign prefib dengan nilai counter
// nilai saku akan di-assign ke counter setelah counter dijumlahkan dengan fib
// inti dari program ini adalah pergeseran nilai antar variabel
let fib: number = 1;
let countFib: number = 0;
let preFib: number = 0;
let saku: number;

for (let i: number = 1; i < n5; i++) {
  saku = fib;
  fib += countFib;
  preFib = countFib;
  countFib = saku;
}
console.log(preFib);
console.log(countFib);
console.log(fib);
console.log(`Bilangan Fibonacci ke-${n5} adalah ${fib}`);

// cara lain. credit: Geraldo
const input: number = 6;
let a: number = 0;
let b: number = 1;
let next: number;

for (let j: number = 0; j < input; j++) {
  next = a + b;
  a = b;
  b = next;
}
console.log(a);

// kak bk
const input5 = 15;
let _fib = 0;
let _fib1 = 0;
let _fib2 = 1;
for (let i = 1; i <= input5; i++) {
  _fib = _fib1 + _fib2;
  _fib1 = _fib2;
  _fib2 = _fib;
  console.log(_fib1);
}
console.log(_fib1);
