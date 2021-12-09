 
let arr1 =[0,2,5,3,6,2,3,1,3,]; 
let arr2 =[];
let arr3 =[];

for (i=0; i<arr1.length; i++){

    arr2.push(arr1[i] * i);
    arr3.push(arr1[i] * arr1[i]);
    

}

console.log(arr2)
console.log(arr3)
