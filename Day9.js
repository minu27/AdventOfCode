const { setupMaster } = require('cluster');
const fs = require('fs')

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let areas = fileData.split('\n');
    let outputs = []; 
    areas.map(area => {
        let output = area.split("");
        let nums = [];
        let num = 0;
        for(let i =0; i< output.length; i++){
            num = parseInt(output[i], 10);
            nums.push(num);
        }
        outputs.push(nums);
    });
    return outputs; 
}

function sum(Points)
{
    let total = 0;
    Points.forEach(m => total += 1 + m);
    return total;
}

function findLowPoints(heights)
{
    let lowPoints = []
    let maplength = heights.length;
    let rowlength = heights[0].length;
    for(let row = 0;row<maplength; row++){
        for(let num = 0; num<rowlength;num++){
            const val = heights[row][num];
            if (num == 0 || heights[row][num-1] > val){
                if (num == rowlength-1 || heights[row][num+1] > val){
                    if (row == 0 || heights[row-1][num] > val){
                        if (row == maplength-1 || heights[row+1][num] > val){
                            lowPoints.push(heights[row][num]);
                        }
                    }
                }
            }
        }
    }
    return lowPoints;
}

function solve(heights)
{
    let lowPoints = findLowPoints(heights);
    let sumofpoints = sum(lowPoints);
    return sumofpoints;
}

let heightmap = readFromFile('./inputs/Day9input.txt');
console.log('Part 1 sum of the risk levels = '+solve(heightmap));
