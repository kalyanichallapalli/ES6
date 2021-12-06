//Map.entries():The entries() method returns a new Iterator object that contains the [key, value]
// pairs for each element in the Map object.
const marks = new Map();
marks.set(["math",100]);
marks.set(["english",70]);
marks.set(["social",80]);

const list = marks.entries();
console.log(list.value)
console.log(list.value)
//Map.keys() method will returns a new itrator object 
//thats contain keys for each element in the map object
const newmarks = marks.keys();
console.log(newmarks)
//Map.values() The values method returns an iterator object with the values in a Map:
let total = 0;
for (let x of marks.values()) {
  total += x;
}
console.log(total)










 


    





