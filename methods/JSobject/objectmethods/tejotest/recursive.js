// Return cumulative single digit count of a number
// Ex: 93 - 9 +3 = 12 -> 1 + 2 = 3. Return 3
// Ex: 164 -> 1 + 6 + 4 = 11 -> 1 + 1 = 2 , return 2

function cumnum(num) {   
    var digits = num.toString().split('');
    var realDigits = digits.map(Number)
    var i = 0;
    let sum = realDigits[i] +realDigits[i + 1];
    sum = sum.toString().split('');
    console.log(sum)

    if (sum.length = 1){
      console.log(sum)
        
    }
    else {
    cumnum(sum); 
    }
}

cumnum(93);