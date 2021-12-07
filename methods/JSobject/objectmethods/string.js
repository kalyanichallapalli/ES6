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
var values = '';
count = 0;
for(let i=0; i<test.length; i++){
   for(let j=i+1; j<test.length; j++){
   if(test[i] == test[j]){
      count ++;
      console.log(count)
    }  
}
values+=test[i];
} 
return values; 
}
console.log(string1("ABABBC")) 

