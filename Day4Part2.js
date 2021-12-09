const fs = require('fs');

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let lines = fileData.split(/\n/);
    const nums = lines[0].split(',');
    let bblocks = [];
    let numBlocks = (lines.length - 1)/6;
    for (let blockNo=0; blockNo < numBlocks; ++blockNo){
        bblocks.push(checkBlock(lines, (blockNo*6 + 2)));
    }
    let solution = solve(nums, bblocks);
    return solution;
}

function checkBlock(lines, startLine)
{
    let block = {rows: [], cols: [], solved: false}
    for (let rowNo=0; rowNo<5; ++rowNo){
        block.rows.push(lines[startLine+rowNo].trim().split(/\s+/));
    }
    // Also figure out columns now to make it easier later.
    for (let colNo=0; colNo<5; ++colNo){
        let col = [];
        for (let rowNo=0; rowNo<5; ++rowNo){
            col.push(block.rows[rowNo][colNo]);
        }
        block.cols.push(col);
        //console.log('Block Cols = '+block.cols);
    }
    //console.log('Blocks = '+JSON.stringify(block, null, 2));
    return block;
}

function markBlock(number, block)
{
    // Remove number from rows and cols.
    block.rows = block.rows.map(row => row.reduce((prev, cellVal) => {return cellVal === number ? prev : [...prev, cellVal]}, []));
    block.cols = block.cols.map(row => row.reduce((prev, cellVal) => {return cellVal === number ? prev : [...prev, cellVal]}, []));

    // Check if complete (i.e. if any of the rows or cols are empty)
    block.solved = block.solved ||  block.rows.reduce((prev, val) => prev || val.length === 0, false);
    block.solved = block.solved ||  block.cols.reduce((prev, val) => prev || val.length === 0, false);
}

function calcSum(block)
{
    let sum = 0;
    block.rows.forEach(row => {
        sum = row.reduce((prev, val) => prev + Number(val), sum)
    })
    return sum;
}

function solve(numbers, blocks)
{
    let winners = []
    numbers.forEach(number => {
        blocks.forEach(block => {
            if (!block.solved){
                markBlock(number, block);
                if (block.solved){
                    winners.push(Number(number) * calcSum(block));
                }
            }
        })
    });
    return winners;
}

let answer = readFromFile('./inputs/Day4input.txt');
console.log("Answer = " + answer[answer.length -1]); //23042