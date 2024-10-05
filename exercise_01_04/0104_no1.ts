// 1 Triangle print (coba recrusive)
const tinggi: number = 18;

function printTri(t: number): string {
    let count: number = 0;
    let tri: string = "";
    let digit1: number = 0;
    let digit2: number = 0;

    for (let i: number = 1; i <= t; i++) {
        count++;
        // console.log(count);
        tri += "\n";

        for (let j: number = 1; j <= count; j++) {
            if (digit2 < 9) {
                digit2++;
            } else {
                digit2 = 0;
                digit1++;
            }
            // console.log(`${digit1}${digit2}`);
            tri += `${digit1}${digit2} `;
        }
    }
    return tri;
}

let tri: string = printTri(tinggi);
console.log(tri);
