//JavaScript Functions

function myFunction(p1, p2) {
    return p1 * p2;   
  }
  console.log("FD with Name :",myFunction(5, 4))


let x = myFunction(4, 3);   // Function is called, return value will end up in x
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
console.log("Function as a variBLE :",x)

let x1 = function(a,b){ //block syntax
    return a+b;
}
(2,3);
console.log("Anonymous function:",x1)

//Arrow Function
let add = (x, y) => {return (x % y)};
console.log("Arrow Function:",add(25,10));

// Call back function
function average(arr) {
    let sum =0;
    for (i=0; i< arr.length; i++){
       sum+=arr[i];
    }
   
    const average = sum/arr.length; 
    return average;
}

function call(arr,callback) {

    const average =  callback(arr);

    console.log("average of different age's:",average);
}

call([50,60,80,60],average)
//Recursive Function 

// program to count down numbers to 1
function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
     
    if (newNumber > 0) {
        
        countDown(newNumber);
        
    }
}
countDown(4);

//IIFE : Immediately Invoked Function Expression 

function hello(arg) {
    console.log("Hello " + arg)
}
hello("kalyani");

((arg) => {
console.log("Hello " + arg)
})("kalyani");










