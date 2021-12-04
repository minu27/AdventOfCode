const fs = require('fs')
let inputData = fs.readFileSync("Day3input.txt", 'utf8').split("\n");
//let inputData = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010'];
let gamma_rate = '';
let epsilon_rate = '';

for(let i=0;i<12;i++) {
    let count_1 = 0;
    let count_0 = 0;
    inputData.map(data => {
        //Check the count of 1s and 0s
        if(data[i] === '1'){
            count_1++;
        }else{
            count_0++;
        }
    });
    console.log('Count of 1 = '+count_1+' and count of 0 = '+count_0);
    //Set the gamma_rate and epsilon_rate values
    if(count_1 > count_0) {
        gamma_rate = gamma_rate + '1';
        epsilon_rate = epsilon_rate + '0';
    }else{
        gamma_rate = gamma_rate + '0';
        epsilon_rate = epsilon_rate + '1';
    }
}

let gamma_decimal = parseInt(gamma_rate, 2);
let epsilon_decimal = parseInt(epsilon_rate, 2);
let power_consumption = gamma_decimal * epsilon_decimal;
console.log('power_consumption = '+power_consumption);