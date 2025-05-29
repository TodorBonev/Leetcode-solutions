function permute(nums) {
    let res = [[]];

    for (let num of nums) {
        const temp = [];

        for (let arr of res) {
            for (let i = 0; i <= arr.length; i++) {
                const newArr = [...arr];
                newArr.splice(i, 0, num);
                temp.push(newArr);
            }
        }

        res = temp;
    }

    return res;
}

console.log(permute([1,2,3]));