const fs = require('fs')
let inputData = fs.readFileSync("./inputs/Day2input.txt", 'utf8').split("\n");

let horizontal_position = 0;
let final_depth = 0;
let depth = 0;
let aim = 0;
inputData.map(data => {
    let move = data.split(' ')
    let units = Number(move[1])
    if (move[0].includes('forward')) {
        horizontal_position = horizontal_position + units;
        depth = aim * units;
        final_depth = final_depth + depth;
    } 
    
    if (move[0].includes('up')) {
        aim = aim - units;
    } 
    
    if (move[0].includes('down')) {
        aim = aim + units;
    } 
})

console.log('Multiplication = '+horizontal_position * final_depth); //1997106066