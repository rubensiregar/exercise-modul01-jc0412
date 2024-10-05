// 5. toArray
let inputText: string = "Hello World Lets Learn Something New";
let cobaSlice: string = inputText.charAt(6); //slice index dari 1
console.log(cobaSlice);

function jadiArray(inText: string): string[] {
    let outWord: string[] = [""];
    let jumKata: number = 1;
    let panjang: number = inText.length;
    for (let i: number = 0; i < panjang; i++) {
        if (inText.charAt(i) === " ") jumKata++;
    }
    console.log(jumKata);

    for (let i: number = 0; i < jumKata; i++) {
        let panjKata: number = 0;
        outWord[i + 1] = "";
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
