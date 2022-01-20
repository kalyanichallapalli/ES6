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
function gcd_two_numbers(x, y) {
    // if ((typeof x !== 'number') || (typeof y !== 'number')) 
    //   return false;
    // x = Math.abs(x);
    // y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(8, 12));
  console.log(gcd_two_numbers(9, 3));
  console.log(gcd_two_numbers(15, 5));
  console.log(gcd_two_numbers(2, 4));
 
 