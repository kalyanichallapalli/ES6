let input = [1,2]

//using recurssive factorial 
function factorial(x) { 
  if (x === 0){
    return 1;
}
  return x * factorial(x-1);
         
}
console.log(factorial(5));
//-----------factorial--------Arrow Function----------------------------------
let fact = (x) => x*factorial(x-1)
myfun = fact(5)

console.log(myfun)
//---------------------Q3--[1,2,3,4,5] = [1,2,3,4,5,1,2,3,4,5]-----------------
let arr = [1,2,3,4,5,]
let newarr = arr.concat(arr)
console.log(newarr)
//-------------------Multiplying--Currying function-Q4-------------------------
function Mulfun(a){
  return function(b){
    return function(c){
      return a*b*c;

    }
  }
}
console.log(Mulfun(2)(3)(4));
//----------------------------Bind method mul------------------------
//==========================Q5==Anagram==============================
function Anagram(a,b){
 let c = a.split('').sort().join('').toLowerCase();
 let d = b.split('').sort().join('').toLowerCase();
 if(c==d){
   return true;
 }else{
   return false
 }
;
}
console.log(Anagram('Dog','god'))
console.log(Anagram('Fog','god'))
//---------------------------------------------------------------------------


