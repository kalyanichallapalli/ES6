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
  // console.log(Char("javascript"))
  // console.log(Char("whatsapp"))

   function maxelements(str){
       let newmap = '';
        newmap = str.split('').reduce((newarr, i) => {
            (newarr[i] === undefined)?
            (newarr[i] = 1): newarr[i]++;return newarr;},{});
            console.log(newmap)
       return Object.keys(newmap).filter(key => newmap[key] === Math.max(...Object.values(newmap)));
   }
   console.log(maxelements("apple"))

   function maxcharacter(str){    
   let res = str.split('').reduce((obj,val)=>{
    obj[val] = obj[val]?++obj[val]:1;
     return obj;
   },{})
   
   let result = Object.entries(res).sort((val1,val2)=>val2[1]-val1[1])[0][0];
   return result; 
   }
   console.log(maxcharacter('javascript'));   
   