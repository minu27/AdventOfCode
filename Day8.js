const fs = require('fs')

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let displays = fileData.split('\n');
    let outputs = []; 
    displays.map(display => {
        let digits = display.split(' ');
        let index = digits.indexOf('|');
        let output = digits.splice(index+1);
        outputs.push(output);
        
    });
    return outputs; 
}

function solve1(Digits)
{
    let count = 0;
    for(let i=0; i<Digits.length; i++){
        let numbers = Digits[i];
        for(let x=0;x<numbers.length; x++){
            if(numbers[x].length == 2 || numbers[x].length == 3 || numbers[x].length == 4 || numbers[x].length == 7){
                count++;
            }
        }
    }

    return count;
}

function solve2(Digits) {
    let count = 0;
    for(let i=0; i<Digits.length; i++){
        let numbers = Digits[i];
        console.log('Output Digits = '+numbers);
        let num = '';
        for(let x=0;x<numbers.length; x++){
            if(numbers[x].length == 2){
                num = num + 1;
            }   
            if(numbers[x].length == 3) {
                num = num + 7;
            }     
            if(numbers[x].length == 4) {
                num = num + 4;
            }
            if(numbers[x].length == 7) {
                num = num + 8;
            }  
                
            if(numbers[x].length == 6){
                if(numbers[x].indexOf('g') > -1 && numbers[x].indexOf('f') > -1 )
                    num = num + 6;
                if(numbers[x].indexOf('a') > -1 && numbers[x].indexOf('f') > -1 )
                    num = num + 9;
                if(numbers[x].indexOf('f') == -1 )
                    num = num + 0;
            }
            if(numbers[x].length == 5){
                if(numbers[x].indexOf('a') > -1 && numbers[x].indexOf('g') > -1 )
                    num = num + 2;
                if(numbers[x].indexOf('e') > -1 && numbers[x].indexOf('b') > -1 )
                    num = num + 5;
                if(numbers[x].indexOf('f') > -1 && numbers[x].indexOf('d') > -1 && numbers[x].indexOf('c') > -1 )
                    num = num + 3;
            }
        }
        console.log('Output digit = '+Number(num));
        count = count + Number(num);
    }
    return count;
}


//let outputDigits = readFromFile('./inputs/Day8input.txt');
let outputDigits = [
    ['fdgacbe','cefdb','cefbgd','gcbe'],
    ['fcgedb','cgb','dgebacf','gc'],
    ['cg','cg','fdcagb','cbg'],
    ['efabcd','cedba','gadfec','cb'],
    ['gecf','egdcabf','bgf','bfgea'],
    ['gebdcfa','ecba','ca','fadegcb'],
    ['cefg','dcbef','fcge','gbcadfe'],
    ['ed','bcgafe','cdgba','cbgef'],
    ['gbdfcae','bgc','cg','cgb'],
    ['fgae','cfgab','fg','bagce']
];
console.log('Part 1 Number of unique digits = '+solve1(outputDigits)); //387
console.log('Part 2 Addition of all digits = '+solve2(outputDigits)); 