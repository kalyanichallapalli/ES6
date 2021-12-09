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

//convert string to aray...//
let str1 =("GOOGLE:5")
let converttoarray= [];
for(i=0; i<=str1.length-1; i++){
    converttoarray.push(str1[i]); 
} 
console.log(converttoarray)
