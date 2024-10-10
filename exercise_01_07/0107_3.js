var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeClean(a, b) {
    var out = __spreadArray([], a, true);
    for (var i in b) {
        console.log(i);
        // console.log(b[i].email);
        if (out[i].name !== b[i].name) {
            out.push(b[i]);
        }
    }
    return out;
}
var students1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
];
var students2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
];
console.log(mergeClean(students1, students2));
