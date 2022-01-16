// array is an variable or object that holds mlre than one value 
//Array declaration 
let Array1 = [1,2,3,4,5]; console.log(Array1)
//Array.concat will merge one or more arrays
let Array2 = [6,7,8,9,10];
console.log(Array1.concat(Array2))
//Copywithin
let Array3 = Array2.copyWithin(0,2,4); console.log(Array3)
//Array.prototype.entries() wll return an object with key/value 
//pair for each index of the array
let Arrayiterator = Array1.entries();
console.log(Arrayiterator.next().value)
console.log(Arrayiterator.next().value)
//Array.prototype.every()
//The every() method tests whether all elements in the array pass the
//test implemented by the provided function. It returns a Boolean value.
let arraycheck = (currentvalue) => currentvalue < 10;
console.log(Array1.every(arraycheck))
//Array.prototype.fill()
//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). It returns the modified array.
console.log(Array1.fill(5,0,4))
//Array.prototype.filter()
//The filter() method creates a new array with all elements that pass the test
//implemented by the provided function.
let fruits = ['Apple','Banana','Grapes','Pinapple','Mango'];
let marks = [100,85,96,77,85,65];
let top3 = marks.filter(a => a > 80); console.log(top3)
let filterarray = fruits.filter(a => a.length > 5) ;console.log(filterarray)
//Array.prototype.find()
//find method will returms the first value chich satisfies the condition of the provided 
//function 
let findarr = marks.find(a => a < 85);console.log(findarr)
//Array.prototype.findIndex()
let findin = marks.findIndex(a => a < 85);console.log(findin)
//Array.prototype.flat() will create a new array  will all sub-array elements   concantenated into it 
let narr = [1,2,3,[4,5],[6,7]];
console.log(narr.flat())
//Array.prototype.forEach() will executes a provided function for each element in an array.
marks.forEach(Element => console.log(Element))
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like
// or iterable object.
console.log(Array.from([1, 2, 3], x => x + x));