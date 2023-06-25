function Gameboard() {
    let rows = 3;
    let cols = 3;
    let board = [];
    for(let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < cols; j++) {
            board[i][j] = "";
        }
    }
    
    
    // const getCells = () => availableCells;

    function addSign(sign, column) {
        let availableCells = board.filter((row) => row[column] === "").map(row => row[column]);
        if(!availableCells.length) return;
        
        for(let i = 0; i < availableCells.length; i++) {
            availableCells[row][column] = sign;
            break;
        
        }
        
    }

    return {addSign};
}

let game = Gameboard();