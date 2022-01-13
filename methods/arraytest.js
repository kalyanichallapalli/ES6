//Array.prototype.every()
function age(num){
    let count = 0;
for(let i=0; i<num.length; i++){
    if(num[i] < 10){
     count++
    }

}
if(count>0){
 console.log("under age")
} 
}

age([1,2,3,4,5,6,50]);
//Array.prototype.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 5);
console.log(result)
//Array.prototype.find()
const result1 = words.find(word => word.length > 5);
console.log(result1)
const result2 = words.findIndex(word => word.length > 5);
console.log(result2)
///Array.prototype.forEach()
let marks = [80,50,100,45]
marks.forEach(value => console.log(value));
//Array.from()
console.log(Array.from([1, 2, 3], x => x + x));
console.log(Array.from([1, 2, 3], x => x + x));
console.log(words.includes("spray"))
console.log(words.indexOf("spray"))
console.log(Array.isArray([1,2,3]))
//Array.prototype.pop() : 
//The pop() method removes the last element from an
// array and returns that element. This method changes the length of the array.
console.log(words.pop())
//Array.prototype.push()
//The push() method adds one or more elements to the end of an array and
// returns the new length of the array.
console.log(words.push("apple"))
//Array.prototype.join() will return a new string concatnation 
let joinstrung = words.join();
console.log(joinstrung)
//Array.prototype.keys()
//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
let itr = words.keys();
for(const key of itr){
console.log(key);
}
//Array.prototype.lastIndexOf()
let animals = ['cat','dog','rat'];
console.log(animals.lastIndexOf('cat'))
let numbers =[1,2,3,4]
let map1 = numbers.map(value =>(value*2))
console.log(map1)
//Array.prototype.reduce()
let sum = numbers.reduce((previousvalue, currentvalue) => currentvalue + previousvalue);
console.log(sum)
console.log(animals.reverse())
//Array.prototype.shift()
//The shift() method removes the first element from an array and returns that removed element.
 //This method changes the length of the array.
 console.log(animals.shift())
 console.log(animals.unshift("rat","bat"))
 console.log(animals)
 //Array.prototype.slice()
 console.log(animals.slice(2,3)) // 2== no of elements, 3= indix
 //Array.Sort
 const months = ['March', 'Jan', 'Feb', 'Dec'];
 console.log(months.sort())
 //Array.prototype.splice()
 months.splice(1,0,'May');
 console.log(months)
console.log(months.toString())
//Array.prototype.values()
let itrator = months.values();
for(const value of itrator){
    console.log(value)
}

