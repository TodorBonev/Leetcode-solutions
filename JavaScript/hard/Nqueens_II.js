function totalNQueens(n) {
    let count = 0;

    const cols = new Set();
    const posDiags = new Set();
    const negDiags = new Set();

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const posDiag = row + col;
            const negDiag = row - col;

            if (cols.has(col) || posDiags.has(posDiag) || negDiags.has(negDiag)) {
                continue;
            }

            cols.add(col);
            posDiags.add(posDiag);
            negDiags.add(negDiag);

            backtrack(row + 1);

            cols.delete(col);
            posDiags.delete(posDiag);
            negDiags.delete(negDiag);
        }
    }

    backtrack(0);
    return count;
}

console.log(totalNQueens(4));