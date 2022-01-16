
function giveHelloDifferently() {
    return new Promise((resolve, reject) => {
        resolve("Hello from function2");
    }); 
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
    
    giveHelloDifferently()
    .then(result2 => {
        console.log(result2);
    })

    getNumber(3)
    .then(result => {
        console.log("It is a number " + result);
    })
    .catch(error => {
        console.log(error);
    })
    var myString = "tejo"
    getNumber(myString)
    .then(result => {
        console.log("It is a number " + result);
    })
    .catch(error => {
        console.log(error);
    })
    
}
mainProgram();