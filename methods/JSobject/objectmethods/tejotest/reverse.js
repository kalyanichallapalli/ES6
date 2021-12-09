// array reverse
let arr1 = ['a','b','c','d']
let arr2 = [];
for(i= arr1.length-1; i>=0; i--){
    arr2.push(arr1[i]);   
}
console.log("REVERSE ARRAY:",arr2)

//Using reverse() function Array reverse
let reversearray = arr1.reverse();
console.log("REVERSE ARRAY USING REVERSE FUNCTION:",reversearray)

//string reverse
let mystring = "KALYANI";
let reverstr ='';
for(i= mystring.length-1; i>=0; i--){
    reverstr += (mystring[i]); 
}
console.log("REVERSE STRING:",reverstr)

// usig reverse function
console.log(mystring)
function reversestring(mystring){
return mystring.split().reverse().join("");
}

console.log(reversestring("KALYANI"))

//convert string to aray...//


let converttoarray= [];
for(i=0; i<=mystring.length-1; i++){
    converttoarray.push(mystring[i]); 
} 
console.log(mystring)
console.log(converttoarray)
//converting array to string

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
console.log
