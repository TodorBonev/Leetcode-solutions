function isValidSudoku(board) {
    let subBoxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== ".") {
                let subBoxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                if (subBoxes[subBoxIndex].has(num)) {
                    return false;
                }
                
                subBoxes[subBoxIndex].add(num);
            }
        }
    }
    
    return true;
}

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))