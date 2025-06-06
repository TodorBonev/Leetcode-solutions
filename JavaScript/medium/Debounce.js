/**
 * @param {Function} fn 
 * @param {number} t 
 * @return {Function}
 */

function debounce(fn, t) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

let start = Date.now();

function log(...inputs) {
    console.log([Date.now() - start, inputs]);
}

const dlog = debounce(log, 50);

setTimeout(() => dlog(1), 50); 
setTimeout(() => dlog(2), 75);