const fs = require('fs')
let input = fs.readFileSync("Day1input.txt", 'utf8').split("\n");
let numberArray = input.map(Number)

//let numberArray = [199,200,208,210,200,207,250,269,260,263];
let count = 0;
let prevSum = 0;
for (let i=0;i<numberArray.length-2;i++) {
    let sum = numberArray[i] + numberArray[i+1] + numberArray[i+2];
    if(i!=0) {
        if(sum > prevSum) {
            count++;
        }
    }
    prevSum = sum;
}
console.log(count);