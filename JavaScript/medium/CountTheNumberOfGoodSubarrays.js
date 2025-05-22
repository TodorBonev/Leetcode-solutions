function countGood(nums, k) {
    let left = 0;
    let count = 0;
    let freq = new Map();
    let pairs = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        const currentCount = freq.get(num) || 0;

        pairs += currentCount;
        freq.set(num, currentCount + 1);

        while (pairs >= k) {
            count += nums.length - right;

            const leftCount = freq.get(nums[left]);
            freq.set(nums[left], leftCount - 1);
            pairs -= leftCount - 1;
            left++;
        }
    }

    return count;
}

console.log(countGood([1, 1, 1, 1, 1], 10));