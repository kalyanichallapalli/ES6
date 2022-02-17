function num (num){

    const len = num.length;
    
    for(let i=0; i<len/2; i++){
        if(num[i] !== num[len -1 + i]){
            return false;
        }
    }
    return true;
}

console.log(num(12321))