const fs = require('fs')

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    })
}

function getNumber(input) {
    return new Promise((resolve, reject) => {
        if (!isNaN(input)) {
            resolve(input);
        } else {
            reject("Not a number")
        }
    }); 
}

function mainProgram() {
    var fileName = "number.txt";
    readFile(fileName)
    .then(tejo => {
        return getNumber(tejo)
    })
    .then(numberResult => {
        console.log("Result is " + numberResult)
    })
    .catch(kalyani => {
        console.log("Error is : " + kalyani);
    })
}

mainProgram();