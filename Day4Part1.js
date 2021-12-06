const fs = require('fs')
let inputData = fs.readFileSync("Day4input.txt", 'utf8').split("\n");
//Create array of numbers drawn
let numbersDrawn = inputData[0].split(",");
let boards = inputData.slice(2);
//Create array of boards
let boardArray = []; 
for(let i = 0;i<boards.length;i++) {
    let board = [];
    if(boards[i] != '') {
        for(let j = 0;j<5;j++) {
            boards[i].replace("\\s+", " ").trim();
            let row = boards[i].split(" ");
            const result =  row.filter(e =>  e);
            board.push(result);
            i++;
        }
        boardArray.push(board);
    }
}

function startGame(array, drawn) {
    for(let a = 0; a < drawn.length; a++) {
        for(let b = 0; b < array.length; b++) {
            for(let c = 0; c < 5; c++) {
                if(array[b][c].includes(drawn[a])) {
                    let bingoIndex = array[b][c].indexOf(drawn[a]);
                    array[b][c][bingoIndex] = "-";
                }
            }
        }
        //Check rows
        for(let b = 0; b < array.length; b++) {
            for(let c = 0; c < 5; c++) {
                if(array[b][c].every( (val, i, arr) => val === arr[0] ) ) {
                    let rWinnerBoard = b; 
                    let rluckyNumber = drawn[a];
                    let rpack = [];
                    rpack.push(rluckyNumber);
                    rpack.push(rWinnerBoard);
                    return rpack;
                }  
            }
        }
        //Check columns
        for(let b = 0; b < array.length; b++) {
            for(let char = 0; char < 5 ; char++) {
                let column = [];
                for(let c = 0; c < 5; c++) {
                    column.push(array[b][c][char]);
                }
                if(column.every( (val, i, arr) => val === arr[0] )) {
                    let cWinnerBoard = b; 
                    let cluckyNumber = drawn[a];
                    let cpack = [];
                    cpack.push(cluckyNumber);
                    cpack.push(cWinnerBoard);
                    return cpack;
                }
            }
        }

    }
}

//Starts the Game
let pack = startGame(boardArray, numbersDrawn);
let number = pack[0];
let WinBoard = pack[1];
console.log('----------------------------------');
console.log("Number drawn is "+number)
console.log('Winning Board is '+WinBoard)
let WinnerBoard = []
for(let d = 0; d<5; d++){
    WinnerBoard.push(boardArray[WinBoard][d]);
    console.log(boardArray[WinBoard][d])
}

//Calculates final score
function calcScore(board, num){
    let sum = 0;
    for(let i = 0;i<5;i++){
        board[i].map(b => {
            if(b != '-'){
                let n = Number(b);
                sum = sum + n;
            }
        })
    }
    console.log('Sum of remaining board numbers = '+sum)
    let res = sum * num;
    return res;
}

let score = calcScore(WinnerBoard, number)
console.log('Final Score = '+score); //31424