// 1. Luas rectangle
const panjangRect: number = 5;
const lebarRect: number = 3;
// rumus luas persegi adalah sisi kali sisi
const luasRect: number = panjangRect * lebarRect;
console.log("Luas rectangle= ", luasRect);

// 2. Keliling rectangle
// rumus keliling persegi adalah sisi + sisi + sisi + sisi
const kelilingRect: number = 2 * (panjangRect + lebarRect);
console.log("Keliling rectangle= ", kelilingRect);

// 3. Diamter, keliling, luas lingkaran
const radius: number = 5;
const diameter: number = 2 * radius; //diameter adalah 2 kali radius

const pi: number = Math.PI; //membuat var baru untuk menampung nilai PI dari library Math
const kelilingCir: number = pi * diameter; //rumus keliling lingkaran adalah pi * diame ter
const luasCir: number = pi * Math.pow(radius, 2); //rumus luas lingkaran adalah pi * radius^2

const outputCir: string = `Diameter= ${diameter} 
Circumference= ${kelilingCir} 
Area= ${luasCir}`;
console.log(outputCir);

// console.log("Diameter lingkaran= ", diameter);
// console.log("Keliling lingkaran= ", kelilingCir);
// console.log("Luas lingkaran= ", luasCir);

// 4. Find angle of triangle if two angles are given
// total sudut segitiga adalah 180 derajat
const a: number = 80;
const b: number = 60;
const c: number = 180 - a - b;
console.log("Sudut c= ", c);

// 5. Convert days to years, months, and days
function daysConvert(days: number): string {
  const years: number = Math.floor(days / 365); //mencari tahun dari intput hari
  const months: number = Math.floor((days % 365) / 30); //mencari bulan dari input hari modulo tahun
  const daysRemain: number = (days % 365) % 30; //mencari hari dari input hari modulo tahun modulo bulan
  const hasil: string = `${years} year, ${months} month, ${daysRemain} days`;
  return hasil;
}
const hasilConvert1: string = daysConvert(400);
const hasilConvert2: string = daysConvert(366);
console.log("Hasil konversi 400 hari= ", hasilConvert1);
console.log("Hasil konversi 366 hari= ", hasilConvert2);

// 6. Selisih hari dari tanggal
// membuat kedua var date dengan konstruktor Date
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");
//selisih dicari dengan cara memanggil milisecond dari date lalu menselisihkannya dan dibuat mutlak dengan Math.abs
const selisih: number = Math.abs(
  (date1.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24
);
console.log("Selisih hari= ", selisih);
