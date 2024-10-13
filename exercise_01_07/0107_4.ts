// 4. SwitchARooney
function SwitchARooney(input: Arek[]): any[] {
    let temp: {} = {};
    let output: any[] = [];

    input.map((element: any) => {
        for (const key in element) {
            // ! kurung siku menandakan bahwa mengakses value nya ke dalam sistem
            let keyBaru = element[key];
            console.log(keyBaru);

            temp[keyBaru] = key;
        }
        output.push(temp);
        temp = {};
    });

    return output;
}

interface Arek {
    name: string;
    age: number;
}
let areks: Arek[] = [
    { name: "Andi", age: 18 },
    { name: "Budi", age: 20 },
];

console.log(areks);
console.log(SwitchARooney(areks));
