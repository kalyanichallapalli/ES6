function sayTorF(string1,string2){
    let result = string1.toUpperCase();
    let num = result.length - string2.length;
    count = 0; 
   for(i=0; i<result.length; i++) {
      if(string2.includes(result[i])){
          count++;
       };
       if(count > num)
       return false;
   }
  return true
  }
  console.log(sayTorF('ebCde','BCD'))
  console.log(sayTorF('eCB','ECB'))
  console.log(sayTorF('BcdEF','BCEF'))
  console.log(sayTorF('BCD','BcD'))
 // console.log(sayTorF('BCd','BCd'))

