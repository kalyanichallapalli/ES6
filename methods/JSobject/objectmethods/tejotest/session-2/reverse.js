const { CONDITIONAL_TYPES } = require("@babel/types");

// array reverse
let arr1 = ['A','B','C','D']
let arr2 = [];
for(i= arr1.length-1; i>=0; i--){
    arr2.push(arr1[i]);   
}
console.log("REVERSE ARRAY=1:",arr2)

//Using reverse() function Array reverse
let reversearray = arr1.reverse();
console.log("REVERSE ARRAY USING REVERSE FUNCTION=2:",reversearray)
console.log("----------------------------------------------------------------")

//string reverse
let mystring = "KALYANI";
let reverstr ='';
for(i= mystring.length-1; i>=0; i--){
    reverstr += (mystring[i]); 
}
console.log("REVERSE STRING=3:",reverstr)

//ARRAY TO STRING
const fruits = ["A", "P", "P", "L","E"];
let text = fruits.toString();
console.log(text)
// using loops
const fruit = ["M", "A", "P"];
let convertstr= '';
for(i=0; i<=fruit.length-1; i++){
    convertstr+=(fruit[i]); 
} 
console.log(convertstr)
//STRING TO ARRAY
let str = "kalyani challapalli";
const myArray = str.split(" ");
console.log(myArray)


//convert string to aray.loop..//
let str1 =("GOOGLE")
let converttoarray= [];
for(i=0; i<=str1.length-1; i++){
    converttoarray.push(str1[i]); 
} 
console.log(converttoarray)
