//ANA GRAM
function name(A,B){
    let C = A.split('').sort().join('').toLowerCase();
    let D = B.split('').sort().join('').toLowerCase();
    console.log(C)
    console.log(D)
      if(C==D){
          return true;
      }else{
          return false
      }
   }
  console.log(name('car','rac'))
  //anagram with array
  
  function collectAnagrams(words){
      let anagrams ={}
      let arra = [];
  
      for(let word of words){
          let letters = word.split('').sort().join('').toLocaleLowerCase()
          anagrams[letters] = anagrams[letters] || [];
          anagrams[letters].push(word);
  
      }
      for(let key in anagrams){
          arra.push(anagrams[key])
      }
      return arra;
     }
  
     console.log(collectAnagrams(['bag', 'gab','abg', 'dog', 'god']))
  
  