function removeStars (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
        stack.pop()
        } else {
        stack.push(s[i])
        }
    }
    return stack.join('')
}

const s = "leet**cod*e"
console.log(removeStars(s))