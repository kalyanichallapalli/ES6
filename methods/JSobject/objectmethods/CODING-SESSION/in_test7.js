// let str -= "console"; remove both oo;
// write a code to remove duplicates
// o/p     consle

let str = "console"; 
let str1 = '';
for(let char of str){
    if(str1.includes(char) == false){
        str1+= char;
    }
}
console.log(str1)
     

