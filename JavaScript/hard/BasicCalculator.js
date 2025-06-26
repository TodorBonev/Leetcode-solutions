function calculate(s) {
    let stack = [];
    let num = 0;
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * num;
            sign = 1;
            num = 0;
        } else if (char === '-') {
            result += sign * num;
            sign = -1;
            num = 0;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    return result + (sign * num);
}

console.log(calculate("1 + 1"));
console.log(calculate(" 2-1 + 2 "));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));