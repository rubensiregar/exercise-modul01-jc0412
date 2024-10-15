interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function () {
    const i = this.length - 1;
    console.log(i);

    return this.length === 0 ? -1 : this[i];
};

const arr = [1, 2, 3];
console.log(arr.last());
