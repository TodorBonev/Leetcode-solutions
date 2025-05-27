/**
 * @param {Array} arr
 * @return {Generator}
 */

function* inorderTraversal(arr) {
    for (const element of arr) {
        if (Array.isArray(element)) {
            yield* inorderTraversal(element);
        } else {
            yield element;
        }
    }
}

const generator = inorderTraversal([[[6]],[1,3],[]]);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);