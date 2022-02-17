function palindrome(str){
    const len =str.length
    for( let i =0; i<len/2; i++){
        if (str[i] !== str[len-1 -i]){
            return 'its not polindrom'
        }
    }
    return 'its palindrom'
}
console.log(palindrome('ABA'))
console.log(palindrome(12321))