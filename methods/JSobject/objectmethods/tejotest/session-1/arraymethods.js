//TOSTRING METHOD: Array converts to string

/* const fruits = ["Banana", "Orange", "Apple", "mango"];
let str = fruits.toString();
console.log("Tostring:",str) */

//PUSH AND POP METHOD
/* fruits.push("kiwi");        // add new item to an arry at the end 
console.log('push..:',fruits)
 */
/* ruits.pop(" kiwi");        // remove last item of an arry 
console.log("pop...",fruits)
 */
//SHIFT AND UNSHIFT METHODS
/* fruits.shift();                       //remove first element of any array 
console.log("shift:",fruits)

fruits.unshift("Lemon","Pineapple"); // adds new items to the beginning of an array.
console.log("unshift:",fruits) */

//SPLICE():adds and/or removes array elements.
/* const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 1, "Lemon", "Kiwi"); 
console.log("splice:..",fruit)
fruit.splice(0,2,"orange","lemon");
console.log(fruit) */
 
//SLICE() :returns selected elements in an array, as a new array
/* const fruitts = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruitts.slice(1, 2);
console.log("slice:",citrus)
console.log(fruitts) 
 */
//CONCAT: method joins two or more arrays but  does not change the existing arrays.
/* const arr1 = ["child1", "child2"];
const arr2 = ["child3", "child4", "child5"];
const children = arr1.concat(arr2);
console.log('concat:',children) 
 */
//FINED 

const ages = [3, 10,18,  20]; //The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const found = ages.find(element => element > 10);
console.log("find:",found); 

//FIND-INDEX
const found1 = ages.findIndex(element => element > 10); // return index value of the array that satisfies the condition
console.log("findindex: ", found1);

//MAP-CREATES A NEW ARRAY RESULTING WITH THE CALLING FUNCTION FOR EACH ELEMENT IN AN ARRY 
console.log("map")
const array = [1,2,3,4,5];
const Map1 = array.map(x => x * 2);
console.log(Map1)

//FOREACH : The forEach() method executes a provided function once for each array element.

ages.forEach(element => console.log("expected output:",element)); 

//INDEXOF The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const name1 = ['kalyani', 'rasna', 'srini', 'nidhi', 'sudeep', 'rasna'];
console.log(name1.indexOf('kalyani'));
console.log(name1.indexOf('rasna', 2));
console.log(name1.indexOf('tejo1'));

//FILTER:The filter() method creates a new array with all elements that pass the test implemented by the function.
const names = ['kalyani', 'rasna', 'srini', 'nidhi', 'sudeep', 'rasna'];
const result = names.filter(names => names.length > 5);
console.log(result); 

//REVERSE: first element become last and last element become first
const order = [1,2,3,4]
const reorder = order.reverse();
console.log(reorder);

//REDUCER:method executes a reducer function for given each element in an array and  returns a single value
const num = [1, 2, 3, 4];
const total = (previousValue, currentValue) => previousValue + currentValue;
console.log(num.reduce(total));
