//METHOD :1
/*function add2array(a, b) {

   let R1 = parseInt(a.join(''));
   let R2 = parseInt(b.join(''));
   let R3 = R1 + R2;
//   let R3 = parseInt(a.join('')) + parseInt(b.join(''));
   let result = String(R3).split("").map((R3)=>{
    return Number(R3)
  })
 console.log('FINAL RESULT :',result)
     
}
add2array([1],[5,7,6])
add2array([3,2,9],[1,2])
add2array([4,7,3],[1,2,3]) */


//METHOD :2
/*(function add2array(a, b) {
    let R3 = parseInt(a.join('')) + parseInt(b.join(''));
    let result = String(R3).split("").map((R3)=>{
    return Number(R3)
    })
    console.log('FINAL RESULT :',result)
        
}
add2array([1],[5,7,6])
add2array([3,2,9],[1,2])
add2array([4,7,3],[1,2,3]) */

//METHOD :3
function add2array(a, b) {
    return result = (parseInt(a.join('')) + parseInt(b.join(''))).toString().split('').map((values)=> +values);
          
}
console.log(add2array([1],[5,7,6]))
console.log(add2array([3,2,9],[1,2]))
console.log(add2array([4,7,3],[1,2,3])) 
console.log(add2array([9,9,9],[2,2,2])) 





