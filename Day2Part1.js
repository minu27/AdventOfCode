const fs = require('fs')
let inputData = fs.readFileSync("Day2input.txt", 'utf8').split("\n");
//let inputData =['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
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

console.log('Final depth '+depth);
console.log('Final horizontal Position = '+horizontal_position);
console.log('Multiplication = '+horizontal_position * depth);