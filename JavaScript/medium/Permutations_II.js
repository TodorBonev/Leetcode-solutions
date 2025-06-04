function permuteUnique(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }

            path.push(nums[i]);
            used[i] = true;
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
}

console.log(permuteUnique([1,1,2]));