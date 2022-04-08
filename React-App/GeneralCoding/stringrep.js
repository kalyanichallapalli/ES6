let Astr ="Kalyani" 
let rstr = Astr.split('')
let mymap = new Map();
for(let i=0; i<rstr.length; i++){

   mymap.set(rstr[i], mymap.has(rstr[i])? mymap.get(rstr[i]) +1: 1)

}
console.log(mymap);  

function stringrep(str){

    let mymap = new Map();
    const arr = str.split('')

for(let i=0; i<arr.length; i++){

   mymap.set(arr[i],mymap.has(arr[i])? mymap.get(arr[i]) +1: 1)

}
console.log(mymap) 
}
stringrep("aabbdddc")

let array1 = [1,6,5,4,7,6,4,1,6,8,9];
let map1 = new Map();
for(let i = 0; i<array1.length; i++){
    map1.set(array1[i], map1.has(array1[i]) ? map1.get(array1[i]) + 1 : 1)
}
console.log(map1)
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
function name(arr){

    for(let i=0; i<arr.length; i++){
        let mymap = new Map();
        let arra = [];
        
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
   }
   console.log(arr['car', 'rac', "tap", "pat"])