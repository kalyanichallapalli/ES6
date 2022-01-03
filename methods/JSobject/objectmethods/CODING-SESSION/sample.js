// function sayTorF(s1,s2){
//     let num = s1.length - s2.length;
//     count = 0; 
//    for(let i of s1) 
//    {
//       if(!(s2.includes(i) || s2.includes(i.toUpperCase())))

//           count++;
//    }      
//     if(count == num)
//        return true;
//     else
//        return false;
//   }
//   console.log(sayTorF('ebCde','BCD'))
//   console.log(sayTorF('eCB','ECB'))
//   console.log(sayTorF('BcdEF','BCEF'))
//   console.log(sayTorF('BCD','BcD'))
//   console.log(sayTorF('BCd','BCd'))
//   console.log(sayTorF('BCD','CBD'))
  

function strcompare(str1,str2)
{
    let l=str1.length - str2.length;
    let count=0;
for(let i of str1)
{
    if(!(str2.includes(i)||str2.includes(i.toUpperCase())))
    count++;  
}
      if(count===l)
      return true;
      else 
      return false;  
}
// console.log(strcompare('ebCde','BCD'));
// console.log(strcompare('eCB','ECB'));
// console.log(strcompare('BcdEF','BCEF'));
// console.log(strcompare('BCD','BCd'));
// console.log(strcompare('xyEzw','xyz')) 
console.log(strcompare('BCD','CBD'))