// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

function indexEqualsValue(arr1){

  for(let i=0; i<arr1.length; i++){
      
      if(arr1[i] === i){
          return arr1[i];
      }
      }
      return -1
  }

console.log(indexEqualsValue([-8,0,2,5]))
console.log(indexEqualsValue([-1,0,3,6]))

//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
//encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);