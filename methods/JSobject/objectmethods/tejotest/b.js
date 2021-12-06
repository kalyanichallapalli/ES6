
 function divnum(num){
  for (let i=0; i<num.length; i++){

      if (!((num[i]%2==0)&&(num[i]%3==0))){ 
          return false;
      } 
   } 
   return true;      
} 
console.log(divnum([6,18,24,12,30]))
console.log(divnum([2,3,6,8])) 


function resp(num){
let res=num.every((value=>{return((value%2==0)&&(value%3==0))}));
return res;
}

console.log(resp([6,18,24,30]))
console.log(resp([2,3,6,8])) 





