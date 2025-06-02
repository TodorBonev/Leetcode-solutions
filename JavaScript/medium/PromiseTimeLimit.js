/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
        ]);
    };
};

const limitedFn1 = timeLimit(async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
}, 50);

limitedFn1(5)
    .then(res => console.log({ resolved: res, time: 50 }))
    .catch(err => console.log({ rejected: err, time: 50 }));

const limitedFn2 = timeLimit(async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
}, 150);

limitedFn2(5)
    .then(res => console.log({ resolved: res, time: 100 }))
    .catch(err => console.log({ rejected: err, time: 100 }));