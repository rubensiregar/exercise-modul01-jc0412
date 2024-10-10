function mergeClean(
    a: { name: any; email: any }[],
    b: { name: any; email: any }[]
) {
    let out: any = [...a];

    for (let i in b) {
        let sama = false;

        for (let j in out) {
            if (b[i].name === out[j].name) {
                sama = true;
            }
        }

        if (!sama) {
            out.push(b[i]);
        }
    }

    return out;
}

let students1: { name: any; email: any }[] = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
    { name: "Student 4", email: "student456@mail.com" },
];

let students2: { name: any; email: any }[] = [
    { name: "Student 4", email: "student444@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
    { name: "Student 1", email: "student1@mail.com" },
];

console.log(mergeClean(students1, students2));

//  menggunakan for...in karena akan mengeluarkan indeks. jika for...of akan mengeluarkan elemen
