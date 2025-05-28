/**
 * @param {string} n
 * @return {number}
 */

var minPartitions = function(n) {
    return Math.max(...n.split("").map(Number));
};

console.log(minPartitions("32"));        


