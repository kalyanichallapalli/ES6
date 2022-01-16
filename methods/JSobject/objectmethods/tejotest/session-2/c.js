function divnum(num){
   
   for (let i=0; i<num.length; i++){
       console.log(num[i])
       
      if (num[i]%12==0){ 
  
          return true; 

      } 
       
    } 
    return false;      
  } 
  console.log(divnum([10,24,40,30]))
  console.log(divnum([2,7,10,11,13]))
  