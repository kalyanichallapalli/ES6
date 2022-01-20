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
function digit(numm){
    let resp = [];
  while(numm>0){
      resp.push(numm%10);
      resp.reverse()
      numm = Math.trunc(numm/10);
  }  
  return resp;
}
 console.log(digit(123456));
 
//4)Write a program to separate each digit from number using prefined methods?

let number1 = 123456;
let result1 = '';
let newnum = number1.toString();
for(let i=0; i<newnum.length; i++){
 result1 +=  newnum[i]+ ',';
}
console.log(result1)
//method 2
function seperate(x2)
{
  
 return (x2+"").split('');
}
console.log(seperate(123456));

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
// arm(153)
// arm(152)
//6)Write a program to check number is a strong number or not? 145 returns 145????????????????
function strong(strnum){

}
strong(145)
//7)Swap two numbers without using a temp variable?
let a = 10;
let b = 5;
console.log(a,b);
[a,b] = [b,a];
console.log(a,b);
//using temp variable 
temp = a;
a = b ;
b = temp
console.log(a,b);
//swap using Addition and difference
a=a+b; b=a-b; a=a-b;
console.log(a,b);
//8)Write a program that adds each digit of a number?(do not use predefined method)
let num1 = 1234;
let sum = 0
let rem = 0;

while(num1){
    rem = num1%10;
    sum = sum +rem;
    num1 = Math.floor(num1/10);
}
//console.log(sum)

//methods
let num2 = 12345;
let newnum2 = num2.toString().split('').map(Number).reduce((a,b) => a+b);
//console.log(newnum2)
//9)Write a program to print fibonacci series?
//0,1,1,2,3,5,8,13.....n
function fibonacci(limit){
let a=1,b=1,c;
for(let i=0; i<=limit; i++){
    console.log(a)
    c = a+b;a=b;b=c;
}
}
//fibonacci(8);
//10)Write a program to get a factorial of a number (Using recursive function).
function fact(ax){
    let relt = 1;
    while(ax>0){
        relt = relt * ax;
        ax--;
    }
   return relt;
}
console.log(fact(5))
console.log(fact(6))


function countDown(number) {
    if (number == 1) {
        return 1;
    } else {
        return number * countDown(number -1);
    }
}
console.log(countDown(5))
console.log(countDown(6))
//Write a program that can perform arithmetic operations (calculator)?
let numberr1 = 5
let numberr2 = 4
let operator = '+';
let result = 0; 
if(operator == '+'){
 result = numberr1 + numberr2;
}else if(operator == '-'){
 result = numberr1 - numberr2;   
}else if(operator == '*'){
    result = numberr1 * numberr2;
}else if(operator == '/'){
    result = numberr1 / numberr2;
}
console.log(`${numberr1} ${operator} ${numberr2} = ${result}`);

//Find the greatest common divisor of two numbers?