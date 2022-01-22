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
//console.log(`${numberr1} ${operator} ${numberr2} = ${result}`);
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
 // console.log(gcd_two_numbers(8, 12));
// 
function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        console.log('here')
        return Math.abs(a);
    }
}
 //console.log(gcd(4,8))
 //
 function gcd1(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
//console.log(gcd1(4,8))
function gcd2(a,b) {
    
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
////console.log(gcd2(4,8))
//13)Write a program to check whether a string is palindrome or not?
//ABA
function palindrome(string){
let len = string.length;
   for(let i=0; i<len; i++){
       if(string[i] != string[len-1-i]){ // r=r;e=e
           return 'its not palindrome';
       }
    }
    return 'its palindrome';
}
console.log(palindrome('redivider'))
console.log(palindrome('kalyani'))
//14)
