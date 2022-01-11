//MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

  function Char(str) {
    let max = 0,
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };
   console.log(Char("javascript"))
   console.log(Char("whatsapp"))