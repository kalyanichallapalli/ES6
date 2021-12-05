function drom(num){
    const len = num.length;

    for (i=0; i<len/2; i++){
        
        if (num[i] !== num[len-1-i])
           return false;

    }
    return true;
}

console.log(drom([1,2,3,2,1]))
console.log(drom([1,2,3,4]))

