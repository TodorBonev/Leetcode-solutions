function maxProfit(prices) {
    let buy1 = -Infinity;
    let sell1 = 0;
    let buy2 = -Infinity;
    let sell2 = 0;

    for (let price of prices) {
        buy1 = Math.max(buy1, -price);
        sell1 = Math.max(sell1, buy1 + price);
        buy2 = Math.max(buy2, sell1 - price);
        sell2 = Math.max(sell2, buy2 + price);
    }

    return sell2;
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));