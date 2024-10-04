// 7. Swap case each character
const input: string = "The QuiCk BrOwN Fox";
let hasil: string = "";
let panjangInput: number = input.length;
//
//

let z: number = 0;
++z;
z++;
console.log(z);

let x: number = 0;
x = x + 1;
console.log(x);

let p: number = 0;
p += 10;
console.log(p);

//
//
//
//
//
//
//
//
console.log(panjangInput);

for (let i = panjangInput; i > panjangInput; i--) {
  //
  //
  //

  if (input.charAt(i) === input.charAt(i).toUpperCase()) {
    hasil += input.charAt(i).toLowerCase();
  }
  //
  //
  //
  else {
    hasil += input.charAt(i).toUpperCase();
  }
}

console.log(hasil);
