// Map
// The Map object holds key-value pairs 
const map1 = new Map(); // creating a map 
map1.set("name1","kalyani")
map1.set("name2","rasna")
map1.set("name3","srini")
console.log(map1)
//Map.prototype.get()
//The get() method returns a specified element from a Map object. 
console.log(map1.get("name2"))
//Map.prototype.keys()
console.log(map1.keys())
const key1 = map1.keys()
console.log("Map.prototype.keys() :", key1.next().value)
console.log(key1.next().value)
console.log(key1.next().value)
//Map.prototype.values()
// The values() method returns a new Iterator object that contains the values for each element 
// in the Map object in insertion ord
console.log(map1.values())
const val = map1.values();
console.log("Map.prototype.values", val.next().value)
//map.has //key exists or not 
console.log(map1)
console.log(map1.has("name1"))
//Map.prototype.forEach()
//The forEach() method executes a provided function once per each key/value pair 
//in the Map object, in insertion order.
map1.forEach((keys,values) => {
    console.log(values +':' +keys)
})
//Map.prototype.entries()
let mapitr = map1.entries();
console.log("Map.prototype.entries()", mapitr.next().value)    

//Set
//The Set object lets you store unique values of any type, 
//whether primitive values or object reference

let set1 = new Set(); // creating set object
set1.add(1);set1.add(2);set1.add(4);set1.add(3) //add
console.log(set1)
console.log(set1.has(1)) //has
let setit = set1.values();//values
console.log(setit.next().value);console.log(setit.next().value) //accesssing values 
let sum = set1.forEach((values,value) =>{
 console.log(values)
});
console.log(sum)
