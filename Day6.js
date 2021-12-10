const fs = require('fs')

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let timers = fileData.split(',');
    return timers; 
}

function solve(fishes, days)
{
    let timerVals = {};
    //Initial count
    for(let i = 0;i<9;i++){
        let key = i.toString();
        timerVals[key] = 0;
    }
    
    fishes.forEach(fish => {
        timerVals[fish.toString()] += 1;  
    });
    
    for(let d = 0;d<days; d++) {
        let zeroVal = timerVals['0'];
        for(let x = 0; x<8; x++) {
            timerVals[x.toString()] = timerVals[(x+1).toString()];
        }
        timerVals['6'] += zeroVal;
        timerVals['8'] = zeroVal;
        
    }

    let sum = 0;
    for(let z = 0 ;z<9; z++) {
        sum += timerVals[z.toString()];
    }
    
    return sum;
}

let timerValues = readFromFile('./inputs/Day6input.txt');

console.log('Part 1 - No of fishes = '+solve(timerValues, 80)); //363101
console.log('Part 2 - No of fishes = '+solve(timerValues, 256)); //1644286074024
