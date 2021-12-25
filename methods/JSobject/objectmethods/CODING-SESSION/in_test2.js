function sayTorF(s1,s2){
    let num = s1.length - s2.length;
    count = 0; 
   for(let i of s1) 
   {
      if(!(s2.includes(i) || s2.includes(i.toUpperCase())))

          count++;
   }      
    if(count == num)
       return true;
    else
       return false;
  }
  console.log(sayTorF('ebCde','BCD'))//T
  console.log(sayTorF('eCB','ECB'))//T
  console.log(sayTorF('BcdEF','BCEF'))//T
  console.log(sayTorF('BCD','BcD'))//F
  console.log(sayTorF('BCd','BCd'))//T
  console.log(sayTorF('xyEzw','xyz'))//T