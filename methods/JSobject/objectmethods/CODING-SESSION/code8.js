// You will be given a number and you will need to return it as a string in Expanded Form. 
// For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedNums (num) {
    num = num.toString();
    const equation = [];
    let multiplier = 1;
    for(let i = 1; i<=num.length;i++){
      const digit = num[num.length-i];
      digit > 0 && equation.unshift(digit*multiplier);
      multiplier*=10;
    }
 
    return equation.join(' + ');
  }
console.log(expandedNums(12))
//console.log(expandedNums(1112))

// function expandedNums(num){
//     const str = String(num);
//     let res = '';
//     let multiplier = Math.pow(10, str.length - 1);
//     for(let i = 0; i < str.length; i++){
//         const el = +str[i];
//         const next = +str[i + 1];
//         if(el){
//             res += (el * multiplier);
        
//          };
//          if(next){
//             res += ' + ';
//         };
//         multiplier /= 10;
// } 
// return res;
// }
// console.log(expandedNums(12))
// console.log(expandedNums(1112))

  