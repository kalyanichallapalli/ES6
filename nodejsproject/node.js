
function Sayhello(name){
   console.log('welcome to the: '+ name + ' project');
}

Sayhello('Node.js');

console.log('My directory is :' + __dirname) // node objects 
console.log('My file Name is :' + __filename) //node objects

// globel modules or core module
const os = require('os')
console.log(os.platform());
console.log(os.release());
console.log(os.freemem())



