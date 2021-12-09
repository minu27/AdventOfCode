const fs = require('fs')
let inputData = fs.readFileSync("./inputs/Day2input.txt", 'utf8').split("\n");
let horizontal_position = 0;
let depth = 0;
inputData.map(data => {
    let move = data.split(' ')
    let units = Number(move[1])
    if (move[0].includes('forward')) {
        horizontal_position = horizontal_position + units;
    } 
    
    if (move[0].includes('up')) {
        depth = depth - units;
    } 
    
    if (move[0].includes('down')) {
        depth = depth + units;
    } 
})

console.log('Multiplication = '+horizontal_position * depth); //1936494