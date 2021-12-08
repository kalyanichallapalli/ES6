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

function mainProgram() {
    var fileName = "name.txt";
    readFile(fileName)
    .then(tejo => {
        console.log("Data is : " + tejo);
    })
    .catch(err => {
        console.log("Error is : " + err);
    })
}

mainProgram();
// Database requests
// Web requests
