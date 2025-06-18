function addOperators(num, target) {
    const results = [];

    function backtrack(index, prevOperand, currentValue, expression) {
        if (index === num.length) {
            if (currentValue === target) {
                results.push(expression);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {

            if (i !== index && num[index] === '0') break;

            const currStr = num.substring(index, i + 1);
            const currNum = parseInt(currStr, 10);

            if (index === 0) {

                backtrack(i + 1, currNum, currNum, currStr);
            } else {
                backtrack(i + 1, currNum, currentValue + currNum, expression + '+' + currStr);
                backtrack(i + 1, -currNum, currentValue - currNum, expression + '-' + currStr);
                backtrack(i + 1, prevOperand * currNum,
                          currentValue - prevOperand + (prevOperand * currNum),
                          expression + '*' + currStr);
            }
        }
    }

    backtrack(0, 0, 0, '');
    return results;
}

console.log(addOperators("123", 6));
console.log(addOperators("232", 8));
console.log(addOperators("3456237490", 9191));