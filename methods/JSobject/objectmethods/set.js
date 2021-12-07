//The new Set() Method: will crrate a new set by passing an array
const letters = new Set(["a","b","c"]);
console.log("Set object and add elements togeter:",letters)
const fruit= new Set();
//add()
fruit.add("apple");
fruit.add("mango");
fruit.add("pinapple");
console.log(fruit)
//The forEach() Method  executes a provided function 
//once for each value in the Set object, in insertion order.
const number = new Set([1,2,3,4,5]);
let total = 0;

number.forEach(function(values){

    total+= values;
})
console.log(total)

//The values() Method returns an Iterator object containing all the values in a Set
let numvalues = number.values(); 
console.log(numvalues)

//The keys() Method : A Set has no keys. but if you give key() it will return same as value()
let numvalue = number.keys(); 
console.log(numvalue)
//entries() returns [value,value] pairs instead of [key,value] pairs.
const marks= new Set([100,80,50,70]);
const list = marks.entries();
for (const entry of list) {
    console.log(entry);

}
// const mark= new Map([["a",10],["b",20],["c",30]]);
// const list1 = mark.entries();
// for (const entr of list1) {
//     console.log(entr);

// }

//SET has() it will return boolen vale wether the seqrching element with specified vale exist or not ? 
console.log(marks.has(100));
// set delete() will delete an specified value that is in the set
console.log(marks.delete(100))
console.log(marks)
//SET clear() will remove all element values from set
let A = new Set([1,2,2,3,3,4,4,])
A.clear();
console.log(A.size)
