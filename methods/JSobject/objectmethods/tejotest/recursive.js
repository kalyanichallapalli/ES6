// Return cumulative single digit count of a number
// Ex: 93 - 9 +3 = 12 -> 1 + 2 = 3. Return 3
// Ex: 164 -> 1 + 6 + 4 = 11 -> 1 + 1 = 2 , return 2

function cumnum(num) {   
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    let sum = 0;
   for(let i =0; i<realDigits.length; i++){
    sum +=  realDigits[i]
   } 

    if (sum > 9){
      cumnum(sum);
        
    }
    else {
    console.log(sum)
    }
}

cumnum(931);