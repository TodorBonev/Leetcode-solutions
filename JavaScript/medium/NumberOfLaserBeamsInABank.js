/**
 * @param {string[]} bank
 * @return {number}
 */

var numberOfBeams = function(bank) {
    let deviceCounts = [];
    
    for (let row of bank) {
        let count = row.split('').filter(char => char === '1').length;
        if (count > 0) {
            deviceCounts.push(count);
        }
    }

    let totalBeams = 0;

    for (let i = 1; i < deviceCounts.length; i++) {
        totalBeams += deviceCounts[i - 1] * deviceCounts[i];
    } 

    return totalBeams; 
};

console.log(numberOfBeams(["011001","000000","010100","001000"])); 
