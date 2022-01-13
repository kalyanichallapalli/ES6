//string is a sequence of characters 
//JavaScript String Length
let string = "wish you happy new year";
console.log(string.length)
//Extracting String Parts
//JavaScript String slice(start,end)
let sliced = string.slice(0,4)
console.log(sliced)
//substring(start, end)
let sub = string.substring(0,4) // slice and substring both are same but substring cannot accept negtive indexes
console.log(sub)
//JavaScript String substr() si similar to slice but the seconf parameter will specifies  the length  

let sunstr = string.substr(0,9)// second element is the length
console.log(sunstr)
//String.prototype.charAt()
let index = 5;
console.log(`character ${index} in the string is ${string.charAt(index)}`)
//String.prototype.charCodeAt()
console.log(`character ${string.charCodeAt(index)} in the string is ${string.charAt(index)}`)
//String.prototype.concat()
let a = "Fruit:";
let b = "apple";
console.log (a.concat(' ',b));
//String.prototype.endsWith()

let q = "what is your name ?"
console.log(q.endsWith('.')) // ? is true else false
//String.fromCharCode()
console.log(string.includes("happy"))
//String.prototype.indexOf()
console.log(string.indexOf("you"))
// const regex = /[A-Z]/h;
// const found = string.match(regex);
// console.log(found)
//String.prototype.repeat()
console.log(string.repeat(2))
//String.prototype.replace()
console.log(string.replace("year", "year all"))
//String.prototype.search()
console.log(string.search("year"))
//String.pro    totype.split()
console.log(string.split(''))
console.log(string.split(' '))
console.log(string.split())
//String.prototype.startsWith()
console.log(string.startsWith("wish"))
//String.prototype.toLocaleUpperCase() and upper
console.log(string.toLocaleUpperCase())
console.log(string.toLocaleLowerCase())
//String.prototype.toString()
let stringobj = new String('happy');
console.log(stringobj.toString())
//String.prototype.valueOf(
    console.log(stringobj.valueOf())



