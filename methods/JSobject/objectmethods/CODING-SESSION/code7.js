// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character 
//  of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function Generator(str) {
    let i=0;
    let result = [];
    if((str.length%2 !== 0)){
        str+= '_'
        console.log(str)
    } 
    while(i<str.length){
        result.push(str[i] + str[i+1])
        i+= 2
    }
    return result;
}
console.log(Generator("ABC"))
console.log(Generator("ABCDEF"))