function dequeue(arr){
  let dstack = [];
  for(let i = 0; i<arr.length; i++){
    dstack = arr.shift()
    console.log(dstack)
  }
  return dstack;
}
function enqueue(arr){
      let enstack = [];
      for(let i = 0; i<arr.length; i++){
        enstack.push(arr[i])
      }

      dequeue (enstack);
}
console.log(enqueue([1,2]))

//using recurssive factorial 
function factorial(x) { 
  if (x === 0){
    return 1;
}
  return x * factorial(x-1);
         
}
// console.log(factorial(5));
//-----------factorial--------Arrow Function----------------------------------
let fact = (x) => x*factorial(x-1)
myfun = fact(5)

// console.log(myfun)
//---------------------Q3--[1,2,3,4,5] = [1,2,3,4,5,1,2,3,4,5]-----------------
let arr = [1,2,3,4,5,]
let newarr = arr.concat(arr)
// console.log(newarr)
//-------------------Multiplying--Currying function-Q4-------------------------
function Mulfun(a){
  return function(b){
    return function(c){
      return a*b*c;

    }
  }
}
 console.log(Mulfun(2)(3)(4));
 let mul = (a,b,c) =>{ return a*b*c}
 call = mul(2,3,4)
 console.log(call)
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
// console.log(Anagram('Dog','god'))
// console.log(Anagram('Fog','god'))
//---------------------------------------------------------------------------


