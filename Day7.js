const fs = require('fs')

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let positions = fileData.split(',').map(n => Number(n));
    return positions; 
}

function findVal(numbers, pos)
{
    return numbers.reduce((prev, curr) => prev + Math.abs(pos-curr), 0);
}

function getSum(x)
{
    return x*(x+1)/2;
}

function findVal2(numbers, pos)
{
    return numbers.reduce((prev, curr) => prev + getSum(Math.abs(pos-curr)), 0);
}


function solve1(Positions)
{
    let maxPos = Positions.reduce((prev, curr) => Math.max(prev, curr), 0);
    let val = Number.MAX_VALUE;
    for (let pos=0; pos <= maxPos; ++pos){
        let val2 = findVal(Positions, pos);
        if (val2 < val){
            val = val2;
        }
    }
    return val;
}

function solve2(Positions)
{
    let maxPos = Positions.reduce((prev, curr) => Math.max(prev, curr), 0);
    let val = Number.MAX_VALUE;
    for (let pos=0; pos <= maxPos; ++pos){
        let val2 = findVal2(Positions, pos);
        if (val2 < val){
            val = val2;
        }
    }
    return val;
}

let crabPositions = readFromFile('./inputs/Day7input.txt');
console.log('Part 1 Fuel Spent = '+solve1(crabPositions)); //336701
console.log('Part 2 Fuel Spent = '+solve2(crabPositions)); //95167302
