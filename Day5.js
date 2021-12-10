const fs = require('fs')

function readFromFile(filename)
{
    const fileData = fs.readFileSync(filename, 'utf8');
    let lines = fileData.split(/\n/);
    let points = [];
    lines.forEach(line => {
        let pairs = line.split(' -> ');
        let p1 = pairs[0].split(',');
        let p2 = pairs[1].split(',');
        points.push([p1,p2]);
    });
    return points; 
}

function solve(Pairs, diagonal = false) 
{
    let obj = {};
    let map = new Map(Object.entries(obj));
    Pairs.forEach(pair => {
            let pair1 = pair[0];
            let pair2 = pair[1];
            let x1 = Number(pair1[0]);
            let y1 = Number(pair1[1]);
            let x2 = Number(pair2[0]);
            let y2 = Number(pair2[1]);
            let xpoint = 0;
            let ypoint = 0;
            let points = 0;
            if(x1 == x2) {
                //Vertical line
                points = Math.abs(y2 - y1) + 1;
                if(y2 > y1)
                    ypoint = 1;
                else 
                    ypoint = -1;
            }
            if(y1 == y2) {
                //Horizontal line
                points = Math.abs(x2 - x1) + 1;
                if(x2 > x1)
                    xpoint = 1;
                else 
                    xpoint = -1;
            }
            
            if(diagonal && Math.abs(x2 - x1) == Math.abs(y2 - y1)) {
                points = Math.abs(y1 - y2) + 1
                if(x2 > x1)
                    xpoint = 1;  
                else
                    xpoint = -1;
                if(y2 > y1)
                    ypoint = 1;
                else 
                    ypoint = -1;
            }

            let x = x1;
            let y = y1;
            while(points > 0){
                let key = x+','+y;
                if(key in map)
                    map[key] += 1;
                else
                    map[key] = 1;
                x += xpoint;
                y += ypoint;
                points -= 1;
            }
           
    });
    let overlaps = [];
    for (const [key, value] of Object.entries(map)) {
        if(value > 1) {
            overlaps.push(key);
        }
    }
    return overlaps.length;
    
}

let inputPairs = readFromFile('./inputs/Day5input.txt');
console.log(' Part 1 answer = '+solve(inputPairs)); //5147
console.log(' Part 2 answer = '+solve(inputPairs, true)); //16925