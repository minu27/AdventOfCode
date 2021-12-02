const fs = require('fs')
let inputData = fs.readFileSync("Day2input.txt", 'utf8').split("\n");
//let inputData =['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
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

console.log('Final depth '+final_depth);
console.log('Final horizontal Position = '+horizontal_position);
console.log('Multiplication = '+horizontal_position * final_depth);