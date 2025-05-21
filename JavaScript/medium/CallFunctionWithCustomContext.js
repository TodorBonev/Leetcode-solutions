Function.prototype.callPolyfill = function(context, ...args) {
    context = context || globalThis;

    const uniqueKey = Symbol();
    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
};

const fn = function add(b) {
    return this.a + b;
};

console.log(fn.callPolyfill({ a: 5 }, 7));