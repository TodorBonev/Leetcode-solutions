/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));

    const isSafe = (row, col) => {
        
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    };

    const solve = (row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    };

    solve(0);
    return result;
};

console.log(solveNQueens(4));
