// 5. String to Array(spt split)
let inputText: string = "Hello World Lets Learn";

function jadiArray(inText: string): string[] {
    let outWord: string[] = [""];
    let jumKata: number = 1;
    let panjang: number = inText.length;

    for (let i: number = 0; i < panjang; i++) {
        if (inText.charAt(i) === " ") jumKata++;
    }

    for (let i: number = 0; i < jumKata; i++) {
        let panjKata: number = 0;
        outWord[i] = "";
        for (let j: number = 0; j < panjang; j++) {
            panjKata++;
            if (inText.charAt(j) === " ") {
                break;
            }
            outWord[i] += inText.charAt(j);
        }
        inText = inText.slice(panjKata);
    }

    return outWord;
}

let textSplit: string[] = jadiArray(inputText);
console.log(textSplit);

let arrayAngka: number[] = [1, 2, 3, 4, 5, 6, 7];

// arrayAngka.map((angka) => {
//     console.log(angka);
//     angka === 1 ? console.log(true) : console.log(false);
// });

// arrayAngka[0] === 1 ? console.log(true) : console.log(false);
