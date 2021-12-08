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
    var fileName = "kalyani.txt";
    readFile(fileName)
    .then(tejo => {
        console.log("Data is : " + tejo);
    })
    .catch(kalyani => {
        console.log("Error is : " + kalyani);
    })
}

mainProgram();
// Database requests
// Web requests
