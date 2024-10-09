// 1. Student Data
class Student {
    name: string;
    email: string;
    age: number;
    score: number;

    constructor(_name: string, _email: string, _age: number, _score: number) {
        this.name = _name;
        this.email = _email;
        this.age = _age;
        this.score = _score;
    }
}

const muridList: Student[] = [
    new Student("Adi", "adi@mail.com", 18, 80),
    new Student("Budi", "budi@mail.com", 17, 70),
    new Student("Cindi", "cindi@mail.com", 18, 100),
    new Student("Diana", "diana@mail.com", 16, 90),
];
console.log(muridList);
console.log(muridList[1]);

function printScore(arr: Student[]): string {
    let out: string = "";
    let min: number = arr[0].score;
    let max: number = arr[arr.length - 1].score;
    let avg: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score < min) {
            min = arr[i].score;
        }
        if (arr[i].score > max) {
            max = arr[i].score;
        }
        avg += arr[i].score;
    }

    avg = avg / arr.length;
    out = `Score: \nHighest: ${max} \nLowest: ${min} \nAverage: ${avg}`;
    return out;
}

console.log(printScore(muridList));

function printAge(arr: Student[]): string {
    let out: string = "";
    let min: number = arr[0].age;
    let max: number = arr[arr.length - 1].age;
    let avg: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < min) {
            min = arr[i].age;
        }
        if (arr[i].age > max) {
            max = arr[i].age;
        }
        avg += arr[i].age;
    }

    avg = avg / arr.length;
    out = `Age: \nHighest: ${max} \nLowest: ${min} \nAverage: ${avg}`;
    return out;
}

console.log(printAge(muridList));
