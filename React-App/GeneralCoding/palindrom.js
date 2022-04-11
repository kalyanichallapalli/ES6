function palindrom(str){       
    console.log(str)   
 let newstr = str.split('').reverse().join('')
        console.log(newstr)
        if(str == newstr){
            return 'palindrome';
        } else {
            return 'not palindrome'
        }
}

console.log(palindrom('aba'))
console.log(palindrom('abca'))