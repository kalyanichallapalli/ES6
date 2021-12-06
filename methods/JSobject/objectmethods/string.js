//given a string find all unique characters and print them. 
// ex : BABBCA will output B A C
//given a string find all unique characters and its count
// Ex: BABBCA will print B - 3, A - 2, C - 1 
// let text = "ABABBC";
// let char = text.charAt(0);
// console.log(char)
// console.log(text.length)
// console.log(text[0])

function string1(test){
    
    for (let i = 0; i < test.length; i++) {
        var fstr = test[i];
        var sstr = test[i + 1] ;
         if (sstr = fstr){

        }
        else {
            sstr = test[i+1]
        } 
        return fstr;    
    } 

      
}
console.log(string1("ABABBC")) 