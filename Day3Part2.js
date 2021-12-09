const fs = require('fs')
let Data1 = fs.readFileSync("./inputs/Day3input.txt", 'utf8').split("\n");
let Data2 = fs.readFileSync("./inputs/Day3input.txt", 'utf8').split("\n");

function findOGRValue(inputData) {
    let bit = '';
    //Calculate OGR value
    let OGR_value = '';
    let nonEmptyDataItems = inputData.length;
    for(let i=0;i<12;i++) {
        let count_1 = 0;
        let count_0 = 0;
        if(nonEmptyDataItems > 1 ) {
            inputData.map(data => {
                //Check the count of 1s and 0s
                if(data != '') {
                    if(data[i] === '1'){
                        count_1++;
                    }else{
                        count_0++;
                    }
                }
            });
            
            if(count_1 > count_0 || count_0 == count_1) {
                bit = '1';
            }else{
                bit = '0';
            }

            for(let x = 0;x<inputData.length;x++){
                if(inputData[x] != '' ) { 
                    let item = inputData[x];
                    if(item[i] != bit ){
                        inputData[x] = '';
                        nonEmptyDataItems--;
                    }
                }
            }
        }    

    }
    OGR_value = inputData.filter(Boolean);
    return parseInt(OGR_value, 2);
}

function findCSRValue(inputData2) {
    let bit2 = '';
    //Calculate CSR value
    let CSR_value = '';
    let nonEmptyDataItems = inputData2.length;
    for(let i=0;i<12;i++) {
        let count_1 = 0;
        let count_0 = 0;
        if(nonEmptyDataItems > 2 ) {
            inputData2.map(data => {
                //Check the count of 1s and 0s
                if(data != '') {
                    if(data[i] === '1'){
                        count_1++;
                    }else{
                        count_0++;
                    }
                }
            });
            
            if(count_0 < count_1 || count_0 == count_1) {
                bit2 = '0';
            }else{
                bit2 = '1';
            }

            for(let x = 0;x<inputData2.length;x++){
                if(inputData2[x] != '' ) { 
                    let item = inputData2[x];
                    if(item[i] != bit2 ){
                        inputData2[x] = '';
                        nonEmptyDataItems--;
                    }
                }
            }
        }    

    }
    
    CSR_value = inputData2.filter(Boolean);
    return parseInt(CSR_value, 2);
    
}

let OGR_dvalue = findOGRValue(Data1);
let CSR_dvalue = findCSRValue(Data2);
let finalAnswer = OGR_dvalue * CSR_dvalue;
console.log('Final Answer = '+finalAnswer); //6940518