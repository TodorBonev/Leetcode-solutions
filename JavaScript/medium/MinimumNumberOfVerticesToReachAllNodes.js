/**
 * @param {number} n 
 * @param {number[][]} edges
 * @return {number[]} 
 */

var findSmallestSetOfVertices = function(n, edges) { 
    let hasIncomingEdge = new Array(n).fill(false); 

    for (let [from, to] of edges) { 
        hasIncomingEdge[to] = true; 
    }

    let result = []; 
    for (let i = 0; i < n; i++) { 
        if (!hasIncomingEdge[i]) { 
            result.push(i); 
        }
    }

    return result;
};

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]));

