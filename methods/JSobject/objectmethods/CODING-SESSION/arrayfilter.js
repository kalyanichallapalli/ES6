// filter the vaues less than 10

let arra1 = [1,3,5,69,4,10, 6,45];
let filteredvalues = arra1.filter((value,index,arr) => value> 10);
console.log(filteredvalues);

let res = arra1.map((val,index,arr)=>val*index);


//splice and slice 

//arra1.splice(1,3 , 0)
arra1.sort((num1,num2)=>num2-num1);
console.log(arra1);

//shift  unshift 

//
let car = {
     brand: "ford",
     color: "yellow"
}

console.log(Object.keys(car))

