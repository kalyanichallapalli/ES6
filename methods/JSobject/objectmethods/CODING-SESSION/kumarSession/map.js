//      0 1 2 3
arr1 = [1,2,3,4];
// arr2 = arr1.map((e) => { return e * 2})
// console.log(arr2)
// arr1.forEach(element => { console.log(element)
//     });
let arr3 = arr1.filter((value ,index) => {

   return   arr1[index]>3
})
console.log(arr3);
/*
index = 1     arr1[1]= 2     1>2 = false
index= 2       arr1[2]= 3      2>3 false
index = 3      arr[3]= 4       3>4  true 


*/

let str = "hello world";
//"olleh dlrow";//split() , reverse  join 
let arr = str.split(' ').map((text)=>text.split('').reverse().join('')).join(' ')

console.log(arr);
//promise.all -> return result  if all promises reslved or reject 
//promise.allSettled - will return result for all promises ,


//how to make copy  of Object  or an array .
//shallow copy and deep copy 
//shallow comparison

//promise.race return result of first promise that is  resolved/rejected


