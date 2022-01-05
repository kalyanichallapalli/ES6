// Description:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
 function Generator(str) {
   let wordArray = str.split(' ').filter(char => char !== "");
    let has = "#";
    let result = "";
    if (wordArray.length === 0) {
        return false;
    }
    else{
       result = has + wordArray.map(word => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1); 
        return capitalizedWord;
       }).join('');

       } 
       return result;
} 
console.log(Generator(" "))
console.log(Generator("Hello there thanks for trying my Kata"))
console.log(Generator("hello world"))