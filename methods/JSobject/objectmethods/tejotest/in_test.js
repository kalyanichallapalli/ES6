
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

// let numbers = 12345;
// let output = String(numbers).split("")
// var finaloutput = output.split(',').map(Number);


// console.log(output)
// console.log(finaloutput)

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


function map(numbers){

    let output = String(numbers).split("")
    console.log(output)
    var finaloutput = map((values) => {return parseInt(values)});
    console.log(finaloutput)
}
map(12345)

/* let string = "hsiw,u,lla,yppah,samtsirhc"
let arr1 = string.split('');
console.log(arr1)
let arr2 = arr1.reverse();
console.log(arr2)

let arr3 = String(arr2).split('');
console.log(arr3) */

