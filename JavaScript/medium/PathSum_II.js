function pathSum(root, targetSum) {
    if (!root) return [];

    const result = [];
    const path = [];

    function dfs(node, sum) {
        if (!node) return;

        path.push(node.val);
        sum -= node.val;

        if (!node.left && !node.right && sum === 0) {
            result.push([...path]);
        }

        dfs(node.left, sum);
        dfs(node.right, sum);

        path.pop();
    }

    dfs(root, targetSum);
    return result;
}

const root = {
    val: 5,
    left: {
        val: 4,
        left: {val : 11, left: null, right: null},
        right: null
    },
    right: {
        val: 8,
        left: {val : 13, left: null, right: null},
        right: {val : 4, left: null, right: {val : 1, left: null, right: null}}
    }
}

const targetSum = 22;
console.log(pathSum(root, targetSum));