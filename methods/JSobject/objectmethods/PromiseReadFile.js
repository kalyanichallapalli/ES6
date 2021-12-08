const fs = require('fs')

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName,(err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        });
    })
}

function mainProgram() {
    var fileName = "tejo.txt";
    readFile(fileName)
    .then(data => {
        console.log("Data is : " + data);
    })
    .catch(err => {
        console.log("Error is : " + err);
    })
}

mainProgram();
// Database requests
// Web requests
