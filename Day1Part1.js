const fs = require('fs')
let input = fs.readFileSync("./inputs/Day1input.txt", 'utf8').split("\n");
let numberArray = input.map(Number)

let count = 0;
for (let i=1;i<numberArray.length;i++) {
    if(numberArray[i] > numberArray[i-1]) {
        count++;
    }
}
console.log(count); //1154

