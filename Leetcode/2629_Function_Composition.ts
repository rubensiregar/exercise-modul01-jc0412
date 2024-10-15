type F = (x: number) => number;

function compose(functions: F[]): F {
    return (x) => {
        let out = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            out = functions[i](out);
            console.log(out);
        }
        return out;
    };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
