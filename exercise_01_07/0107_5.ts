function factorial(n: number): number {
    let total: number;

    if (n === 0) {
        return 1;
    } else {
        total = n * factorial(n - 1);
    }

    return total;
}

console.log(factorial(5));
