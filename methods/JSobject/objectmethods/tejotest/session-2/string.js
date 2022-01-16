// find the replace  letter with its position in the alphabet.
function str1(text){
    var result ="";
    for( let i = 0; i<text.length; i++){
 //   var code = text.toUpperCase().charCodeAt(i)
    var code = text.charCodeAt(i)

    if (code > 64 && code < 91){
        result += (code - 64) + " ";
        
    }
    
    }
    console.log(result)
    }

str1('HELLO WORLD')


function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));

  //Given an array of integers, find the one that appears an odd number of times.

  console.log(findOdd([1,1,2,2,3]))
  function findOdd(numbers) {
    var count = 0;
    for(var i = 0; i<numbers.length; i++){
      for(var j = 0; j<numbers.length; j++){
        if(numbers[i] == numbers[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return numbers[i];
      }
    }
  };
  console.log(findOdd([2,2,2,2,2,2,4,4,4,2,4,2,3]))

  //Counting number of vowels in a string with JavaScript

  function getVowels(str){
      console.log(str)
  }
console.log(getVowels("kaleyaniou"))

//

function highandlow(numbers){
    
   const arr1 = numbers.split('');  
   return Math.max.apply(0, numbers) + " " +  Math.min.apply(0, numbers)
}
console.log(highandlow('12345'))
