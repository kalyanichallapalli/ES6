//1)Write a program to check whether a number is prime or not?
//number divided by itself is called prime number

const { notEqual } = require("assert");

function primenumber(n){
    if(n===1){
        return false;
    }
    else if(n===2){
        return true;    
    }
    else if(n>1){
            for(let i=2; i<n; i++){
                if(n%i !== 0){
                    return true;
                }
            return false;
            }
        }
}
// console.log(primenumber(1));
// console.log(primenumber(2));
// console.log(primenumber(3));
// console.log(primenumber(4));
// console.log(primenumber(87))
//2)Write a program to calculate the area of triangle? When sides are given?Using the herons formula?
//asume a=5,b=5,c=5 as length of three sides.
//Area = Square root of√s(s - a)(s - b)(s - c)
function istriangle(a,b,c){
    let S = (a+b+c)/2; //half of the triangles perimeter
    let A = S-a;
    let B = S-b;
    let C = S-c;
    let AreaOfTriangle = Math.sqrt(S*A*B*C);
return AreaOfTriangle;
}
// console.log(istriangle(5,5,5));
// console.log(istriangle(12,4,7));
// console.log(istriangle(12,6,8));

//3)Write a program to separate each digit from a given number? without using prefined methods?
let number = 123456;
let result = '';
//4)Write a program to separate each digit from number using prefined methods?

let number1 = 123456;
let result1 = '';
let newnum = number1.toString();
for(let i=0; i<newnum.length; i++){
 result1 +=  newnum[i]+ ',';
}
//console.log(result1)
//5)Write a program to check whether a number is Armstrong or not?1a=

function arm(number){
number = number.toString();
let result = 0;
for(let i=0; i<number.length; i++){
  result+= number[i] * number[i] *number[i]; 
}
if(result == number){
   console.log("Amstrong number:",result)
} else{
    console.log("Not Amstrong: ",result)
}
}
arm(153)
arm(152)
//6)Write a program to check number is a strong number or not?
