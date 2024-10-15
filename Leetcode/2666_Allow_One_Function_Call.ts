function once(fn) {
    var flag = 0;
    return function (...args) {
        if (flag > 0) {
            return undefined;
        }
        flag++;
        return fn(...args);
    };
}
