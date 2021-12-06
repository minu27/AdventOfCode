const fs = require('fs')
let inputData = fs.readFileSync("Day4input.txt", 'utf8').split("\n");
//Create array of numbers drawn
let numbersDrawn = inputData[0].split(",");
console.log('Number of Rounds = '+numbersDrawn.length);
let boards = inputData.slice(2);
//Create array of boards
let boardArray = []; 
let removeCount = 0;
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
        //Remove winning boards
        if(removeCount < 100 && array) {
            //Check rows
            for(let b = 0; b < array.length; b++) {
                for(let c = 0; c < 5; c++) {

                    let checkBingo = array[b][c].every( (val, i, arr) => val === arr[0]);
                    if(checkBingo) {
                        //let rWinnerBoard = b;
                        let removedArray =  array.splice(b, 1); 
                        removeCount++;
                        console.log('Number Drawn is '+drawn[a]);
                        console.log('Board '+b)
                        console.log('Removed Rows is '+removedArray);
                        console.log('Boards removed Count = '+removeCount)
                        console.log('ROUND #'+a);
                        break;
                        // let rluckyNumber = drawn[a];
                        // let rpack = [];
                        // rpack.push(rluckyNumber);
                        // rpack.push(rWinnerBoard);
                        // return rpack;
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
                        // let cWinnerBoard = b; 
                        let removedArray =  array.splice(b, 1); 
                        removeCount++;
                        console.log('Number Drawn is '+drawn[a]);
                        console.log('Board '+b)
                        console.log('Removed Columns is '+removedArray);
                        console.log('Boards removed Count = '+removeCount)
                        console.log('ROUND #'+a);
                        break;
                        // let cluckyNumber = drawn[a];
                        // let cpack = [];
                        // cpack.push(cluckyNumber);
                        // cpack.push(cWinnerBoard);
                        // return cpack;
                    }
                }
            }
        }
        if(removeCount == 99){
            array.push(drawn[a]);
            return array;
        }
        
    }
    
}

//Starts the Game
let pack = startGame(boardArray, numbersDrawn);
console.log('Size of returned array '+pack.length)
let number = pack[1];
let WinBoard = pack[0];
console.log('----------------------------------');
console.log("Number drawn is "+number)
console.log('Last Winning Board is '+WinBoard)
let WinnerBoard = []
for(let d = 0; d<5; d++){
    WinnerBoard.push(WinBoard[d]);
    console.log(WinBoard[d])
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
console.log('Final Score = '+score); 