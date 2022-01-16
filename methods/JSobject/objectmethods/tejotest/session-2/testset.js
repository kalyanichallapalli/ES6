//in an array multiply all values with 5
function numbers(arr1){
 let arr2 = new Set();
 for(i=0; i<arr1.length; i++){
  arr2.add(arr1[i]*5);
 }
 return arr2;
}   
console.log(numbers([1,2,3,4,5,6,7,8,9,10]))
//get the unique values from any arry and double the number and add to the object 

function numbers(arr1){
    let arr2 = new Set();
    for(i=0; i<arr1.length; i++){
     arr2.add(arr1[i] *2);
    }
    console.log(arr1)
    return arr2;
   }   
   console.log(numbers([1,2,3,3,4,5,4,6,7,8,9,10]))

   