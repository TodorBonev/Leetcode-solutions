function maxProfit(k, prices) {
    if (k === 0 || prices.length === 0) return 0;

    if (k > prices.length / 2) {
        let maxProfit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }

    const dp = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));

    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < prices.length; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }

    return dp[k][prices.length - 1];
}

console.log(maxProfit(2, [2,4,1])); 
console.log(maxProfit(2, [3,2,6,5,0,3]));