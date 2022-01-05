// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character 
//  of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function Generator(str) {
    let wordArray = str.split(' ').filter(char => char !== "");
  console.log(wordArray)
}
console.log(Generator("ABC"))
console.log(Generator("ABCDEF"))