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
console.log(smallEnough([1,2,3,4],3))
console.log(smallEnough([1,2,3,4],5)) //true
console.log(smallEnough([3,8,1], 8))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))  

