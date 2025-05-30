function singleNumber(nums) {
    let ones = 0, twos = 0;

    for (let num of nums) {
        ones = (ones ^ num) & ~twos;

        twos = (twos ^ num) & ~ones;
    }

    return ones;
}

const nums = [2,2,3,2];
console.log(singleNumber(nums));
    