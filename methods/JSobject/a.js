
function divnum(num){
   
 for (let i=0; i<num.length; i++){
     console.log(num[i])
     
     if (!((num[i]%3==0)||(num[i]%4==0))){ 

        return false; 
     } 
     
  } 
  return true;      
} 
console.log(divnum([6,8,12,30]))
console.log(divnum([2,7,10,11,13]))
