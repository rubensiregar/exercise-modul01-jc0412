function minLength(s: string): number {
    const rm1: RegExp = /AB/g;
    const rm2: RegExp = /CD/g;
    while (s.includes("AB") || s.includes("CD")) {
        s = s.replace(rm1, "");
        s = s.replace(rm2, "");
    }
    return s.length;
}
