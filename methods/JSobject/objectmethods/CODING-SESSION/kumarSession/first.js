//find largest number in an array,,
const arr1 = [9,4,9,10,17]
temp = 0
arr1.forEach((element) => { 
    if (element > 0){
       temp = element
}

})

console.log(temp)

//find the factorial of a positive number 

function factnum(num){

   if(num <0){
       console.log('Error!: negtive int')
   
   }else if(num === 0) {
       console.log(`factorial of ${num} is: 1`)
   }else if(num > 0){
      let fact = 1;
     for(let i=1; i<=num; i++ ){

        fact*= i;
     }

     console.log(fact)
   }   

}
factnum(-5)
factnum(0)
factnum(3)
factnum(4)
factnum(5)

//string reverse
function reverseString(str){
  let str1 = str.split('')
  let str2 = str1.reverse()
  let str3 = str2.join('')
  return str3;
}
console.log(reverseString('APPLE'))
console.log(reverseString('WISH YOU HAPPY NEW YEAR '))
console.log(reverseString('12345678'))

//string word reverse 

let a = 'WISH YOU HAPPY NEW YEAR';
let b = a.split(' ');
let c = b.reverse();
let d = c.join(' ');
console.log(d)


