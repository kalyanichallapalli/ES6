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
console.log(isTriangle(1,2,2));
console.log(isTriangle(7,2,2));
console.log(isTriangle(9,2,2));
console.log(isTriangle(7,2,3));
// You are going to be given a word. 
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{

}

