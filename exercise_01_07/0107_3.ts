function mergeClean(
    a: { name: any; email: any }[],
    b: { name: any; email: any }[]
) {
    let out: any = [...a];

    // ! menggunakan for...in karena akan mengeluarkan indeks. jika for...of akan mengeluarkan elemen
    for (let i in b) {
        if (out[i].name !== b[i].name) {
            out.push(b[i]);
        }
    }

    return out;
}

let students1: { name: any; email: any }[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
];

let students2: { name: any; email: any }[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
    { name: "Student 4", email: "student444@mail.com" },
];

console.log(mergeClean(students1, students2));
