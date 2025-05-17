let compose = function(functions) { 
    return function(x) { 
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

const functions = [x => x + 1, x => x * x, x => 2 * x], x = 4;
const fn = compose(functions);
console.log(fn(4));

