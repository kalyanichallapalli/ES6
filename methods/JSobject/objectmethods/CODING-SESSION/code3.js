// Implement a function that accepts 3 integer values a, b, c. The function should 
// return true if a triangle can be built with the sides of given lengthand false in any other case.
function isTriangle(a,b,c){
if((a+b > c) && (b+c > a) && (a+c > b)){
    return true;
}
else{
    return false;
}
}
// console.log(isTriangle(1,2,2));
// console.log(isTriangle(7,2,2));
// console.log(isTriangle(9,2,2));
// console.log(isTriangle(7,2,3));
function checkValidity(a, b, c) 
{ 
    // check condition 
    if (a + b <= c || a + c <= b || b + c <= a) 
        return false; 
    else
        return true; 
} 
// console.log(checkValidity(1,2,2))
// console.log(checkValidity(7,2,2))
// console.log(checkValidity(9,2,3))


// You are going to be given a word. 
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
    var middleIndex = s.length / 2;
    let a = s.length;
     if((a%2 == 0)){
        console.log(middleIndex)
        return s.slice(middleIndex - 1, middleIndex + 1); //"TEST" : 1,3
     }else{
        console.log(middleIndex)
        return s.slice(middleIndex,middleIndex + 1) // "TESTS": 2.5,3.5
        
     }
}

function getMiddle(s)
{
    let len = s.length;
  return s.slice((len-1)/2, len/2+1);
}

console.log(getMiddle("TEST"))
console.log(getMiddle("TESTS"))
console.log(getMiddle("APPLE"))
console.log(getMiddle("BANANA"))



