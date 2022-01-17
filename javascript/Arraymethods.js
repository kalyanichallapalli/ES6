// array is an variable or object that holds mlre than one value 
//Array declaration 
let Array1 = [1, 2, 3, 4, 5]; console.log(Array1)
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
let fruits = ['Apple','Banana','Grapes','Pinapple','Mango','Banana'];
let marks = [100,85,96,77,85,65];
let top3 = marks.filter(a => a > 80); console.log(top3)
let filterarray = fruits.filter(a => a.length > 5) ;console.log(filterarray)
//Array.prototype.find()
//find method will returms the first value chich satisfies the condition of the provided 
//function 
let findarr = marks.find(a => a < 85);console.log(findarr)
//Array.prototype.findIndex() which satisfies the condition of the provided function 
let findin = marks.findIndex(a => a < 85);console.log(findin)
//Array.prototype.flat() will create a new array  will all sub-array elements   concantenated into it 
let narr = [1,2,3,[4,5],[6,7]];
console.log(narr.flat())
//Array.prototype.forEach() will executes a provided function for each element in an array.
marks.forEach(Element => console.log(Element))
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like
// or iterable object.
console.log(Array.from([1, 2, 3], x => x + x));
//Array.prototype.includes()  will chwck the value in the entries return true if not false 
console.log(marks.includes(100))
console.log(narr.includes(1))
//Array.prototype.indexOf() will find the index of the element in the given array
console.log(marks.indexOf(100))
//Array.isArray() method determines whether the passed value is an Array.
console.log(Array.isArray([1,2,3]))
//Array.prototype.join() willreturn a string seperated by commas
console.log(fruits.join())
//Array.prototype.keys()
//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const itr = fruits.keys();
for(let key of itr){
    console.log(key)
}
//Array.prototype.lastIndexOf() will return last index of element found in array
console.log(fruits.lastIndexOf('Banana'))
//Array.prototype.map(): will created a new array with the result of the calling function on each element 
//of the array
let newarray = [1,2,3,4,5,6,7,8,9,10]
let result = newarray.map(x => x * 2)
console.log(result)
//Array.of() will created a new array instance for the given aruguments 
    console.log(Array(7))
    console.log(Array.of(7))
    console.log(Array(1, 2, 3))
    console.log(Array.of(1, 2, 3))
//Array.pop will remove the last element in the array the length of the array will chage 
let a = [1,2,3,4,5,6];
console.log(a.pop())
//Array.push will add one or more new element to the end of the array and returns new length
const animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows'));console.log(animals)
//Array.Reduce() method will executes reduce function on each element of the array  and returns a single 
//value
let add = [2,4,6,8];
result = (x,y) => y+x;
console.log(add.reduce(result))
//Array.prototype.reduceRight() method executes a reducer function for each array element. but it works 
//right to left and gives a single value 
console.log(add.reduceRight(result))
let RR = [2,4,6];
let PP = (previousvalue,currentvalue) => currentvalue * previousvalue;
console.log(RR.reduceRight(PP))
//Array.prototype.reverse()
console.log(fruits)
console.log(fruits.reverse())
//Array.prototype.shift() will removes the first element of the array so the length of tye array will chage 
// it will retyurn the removed element
console.log(fruits.shift())
//Array.prototype.unshift() will add one or more el;ements to the  beginning of the array 
//and returns new length of the array

console.log(fruits.unshift('banana','banana'))
console.log(fruits)
//Array.prototype.slice()  will return an new array with the selected elements
// from start position to given end 
console.log(fruits.slice(0,3))
//Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns true if, in the array, it finds an element for which the provided function returns true; 
const array = [1, 2, 4, 7, 5];
const even  = (Element) => Element%2 ==0;
console.log(array.some(even));
//Array.prototype.sort()
const months = ['March', 'Jan', 'Feb', 'Dec']; // string it will take first char in alphabitical order
console.log(months.sort())
console.log([3,6,4,9,1].sort())
// /Array.prototype.splice() will add or remove the elements to/from the array. 
console.log(months)
months.splice(1,0,'April'); console.log(months) // insert April at index 1 
months.splice(2,3,'June'); console.log(months)  // insert June at index 2 replace 3 element 
//Array.prototype.toString() method returns a string with array values separated by commas.
console.log(months.toString())
//Array.prototype.values()method returns 
//a new array iterator object that contains the values for each index in the array.
let Is = months.keys(); //keys
let It = months.values();//values
for(let value of It){
    console.log(value)
}
for(let key of Is){
    console.log(key)
}















