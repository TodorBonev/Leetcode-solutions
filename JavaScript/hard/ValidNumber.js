function isNumber(s) {
    s = s.trim();

    const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

    return numberRegex.test(s);
}

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));