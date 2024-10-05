// 3. BMI
let beratKG: number = 90;
let tinggiCM: number = 170;
let hasilBMI: string = "";

function cekBMI(weight: number, height: number): string {
    let outputBMI: string = "";
    let heightM: number = height / 100;
    let calcBMI: number = weight / Math.pow(heightM, 2);
    console.log(calcBMI);

    if (calcBMI < 18.5) {
        outputBMI = "less weight";
    } else if (calcBMI >= 18.5 && calcBMI < 25) {
        outputBMI = "ideal";
    } else if (calcBMI >= 25 && calcBMI < 30) {
        outputBMI = "overweight";
    } else if (calcBMI >= 30 && calcBMI < 40) {
        outputBMI = "very overweight";
    } else {
        outputBMI = "obesity";
    }

    return outputBMI;
}
hasilBMI = cekBMI(beratKG, tinggiCM);
console.log(hasilBMI);
