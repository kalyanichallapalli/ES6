//Write a program to separate each digit from a given number? without using prefined methods?

function num(n){
    let arr = [];

    while(n>0){
        arr.push(n%10)
        arr.reverse()
        n = Math.trunc(n/10)
    }
    return arr
}
console.log(num(123456))

function digit(num){
    let result = '';
    let newarr = num.toString()
    for(let i =0; i<newarr.length; i++){
        result += newarr[i] + ','
    }
    return result;
}

console.log(digit(123456))