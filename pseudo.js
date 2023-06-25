/*Gameboard will contain the board */
function Gameboard() {
    let board = 
    ['', '', '',
     '', '', '', 
     '', '', ''
    ];
    const getBoard = () => board;

    function addSign(sign, cell) {

        for(let i = 0; i < board.length; i++) {
            if(board[cell] === "") {
                board[cell] = sign;
                console.log(board);
                break;

            }
            else {
                console.log("error");
                console.log(board);
                break
            }
            
            

        }
        
    }

    

    return {addSign, board}
}

function Gamecontroller(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    let board = Gameboard();
    const players = [
        {name: playerOneName, sign: 'x'},
        {name: playerTwoName, sign: 'o'}
    ];

    let activePlayer = players[0];

    const getWinCombos = (arr, sign) => {
        if(
            (arr[0] === sign && arr[1] === sign && arr[2] === sign) ||
            (arr[3] === sign && arr[4] === sign && arr[5] === sign) ||
            (arr[6] === sign && arr[7] === sign && arr[8] === sign) ||
            (arr[0] === sign && arr[3] === sign && arr[6] === sign) ||
            (arr[1] === sign && arr[4] === sign && arr[7] === sign) ||
            (arr[2] === sign && arr[5] === sign && arr[8] === sign) ||
            (arr[0] === sign && arr[4] === sign && arr[8] === sign) ||
            (arr[2] === sign && arr[4] === sign && arr[6] === sign)

        ) {
            return sign;
        }
    }

    const changePlayerTurn = () => {
       
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer

    const playRound = (cell) => {
        const currentPlayer = getActivePlayer();
        const previousBoard = [...board.board];
       
        board.addSign(currentPlayer.sign, cell);

        if (previousBoard.toString() === board.board.toString()) {
            console.log("Error: Cell is not empty. Try again.");
            console.log(board.board);
            return; // Prevent changing the active player
        }
        const winningPlayer = getWinCombos(board.board, getActivePlayer().sign);
        if(winningPlayer) {
            console.log(`${winningPlayer} wins`);
            return
        }
        changePlayerTurn();
        
        
        
        
        
        
        console.log(`${getActivePlayer().name}'s turn`)

    }

    console.log(`${getActivePlayer().name}'s turn`)
   

    

    return {
        playRound,
        getActivePlayer,
        changePlayerTurn
    }
}

let game = Gamecontroller();