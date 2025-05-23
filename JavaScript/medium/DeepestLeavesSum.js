function TreeNode(val, left = null, right = null) {
    this.val = val; 
    this.left = left; 
    this.right = right; 
}

var deepestLeavesSum = function(root) { 
    if (!root) return 0; 
    
    let queue = [root]; 
    let sum = 0; 

    while (queue.length > 0) { 
        sum = 0; 
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) { 
            let node = queue.shift(); 
            sum += node.val; 
            
            if (node.left) queue.push(node.left); 
            if (node.right) queue.push(node.right); 
        }
    }

    return sum; 
};

let root = new TreeNode(1,
    new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)), 
    new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8))) 
); 

console.log(deepestLeavesSum(root)); 
