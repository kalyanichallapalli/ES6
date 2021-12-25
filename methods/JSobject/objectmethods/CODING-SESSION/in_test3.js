/* You will be given an array of numbers.For each number in the array you will need to create an object.
The object key will be the number, as a string. The value will be the corresponding character code,
as a string.Return an array of the resulting objects.All inputs will be arrays of numbers. 
All character codes are valid lower case letters. The input array will not be empty
 */

// let number = 97;
// let ascii = String.fromCharCode(number); 
//     console.log(ascii)

function asciicode(arra1){                                  
  var asciivalue = {};
  for (let i =0; i<arra1.length; i++){
  asciivalue [i] = String.fromCharCode(arra1[i]);  
  }
 return asciivalue;
}
console.log(asciicode([118,117,120]))
console.log(asciicode([101,121,110,113,113,103]))


