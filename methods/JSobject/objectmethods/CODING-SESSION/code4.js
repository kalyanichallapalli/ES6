// Given an input of an array of digits, return the array with each digit incremented by its position 
// in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start 
// counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you 
// a multiple-digit number, only the last digit of the number should be returned.
    
function number(num){
    let arr2 = [];
for(let i=0; i<num.length; i++){
  arr2.push((num[i]+i+1)%10);
}
return arr2;
}
function number(arr1){
  //return arr1.map((v,i) => (v+i+1)) 
  return arr1.map((v,i) => (v+i+1)%10) //using MAP
}
console.log(number([1,2,3]));
console.log(number([4, 6, 9, 1, 3]));