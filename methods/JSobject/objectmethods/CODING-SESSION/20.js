//11)Write a program that can perform arithmetic operations (calculator)?
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
//12)Find the greatest common divisor of two numbers?