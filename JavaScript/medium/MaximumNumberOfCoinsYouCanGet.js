/**
 * @param {number[]} piles
 * @return {number}
 */

var maxCoins = function(piles) {

    piles.sort((a, b) => a - b);

    let myCoins = 0;
    let n = piles.length / 3;


    for (let i = piles.length - 2; i >= n; i -= 2) {
        myCoins += piles[i]; 
    }

    return myCoins;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]));