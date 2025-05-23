/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function(groupSizes) {
    let groups = new Map();
    let result = [];

    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];
        
        if (!groups.has(size)) {
            groups.set(size, []);
        }
        
        groups.get(size).push(i);

        if (groups.get(size).length === size) {
            result.push(groups.get(size)); 
            groups.set(size, []);
        }
    }

    return result;
};

console.log(groupThePeople([3,3,3,3,3,1,3]));


