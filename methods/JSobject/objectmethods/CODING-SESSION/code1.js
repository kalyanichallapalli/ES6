function smallEnough(a, limit){
 count = 0;
for(let i =0; i<a.length; i++) {
  if(a[i] < limit){
     count++;
   } else {
     return false;
   }
   }
   return true;
}
console.log(smallEnough([1,2,3,4],3))//false
console.log(smallEnough([1,2,3,4],5)) //true
console.log(smallEnough([3,8,1], 8))//true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))  //false
//USIMG MATH
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}
console.log(smallEnough([1,2,3,4],3)) //false
console.log(smallEnough([1,2,3,4],5)) //true
// USING ARROW FUNCTIONS
smallEnough = (a,limit) => a.every(e => e < limit);
console.log(smallEnough([1,2,3,4],3)) //false
console.log(smallEnough([1,2,3,4],5)) //true