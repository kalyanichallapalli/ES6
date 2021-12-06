// Create a Map using new MAP() method
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//Add the values to  MAP using Set() method

const fruit = new Map();

    fruit.set("apple",500);
    fruit.set("mango",300);
    fruit.set("grapes",400);
    console.log(fruit)

 //To get the vaule  of a key use Map.get()
 
 console.log(fruit.get('apple'));

 //Map.size: will return the no of values in Map
 console.log(fruit.size);

 //Map.delete mehtods delete elements in Map
 fruit.delete("apple");
 console.log(fruit)

 //Map.clear() if you want to del all elemenyts in the Map
 fruits.clear();
 console.log(fruits)

 //Map.has() method will find the element existence if its there or not 
 console.log(fruit.has("mango"));

 //typeof map returns object:
 console.log(typeof fruits)
 //instanceof Map ??//?////////////////////////////??????

 //Map.forEach(): invokes a callback for each key/value pait in the map
 const vegitables = new Map([
     ["carrot", 100],["eggplant", 200],["beans", 500]
    ]); 
 let text = "";
 vegitables.forEach (function(value, key) {
    text += key +' = '+ value;
    
  })

  console.log("here to check map entries")
  //Map.entries():The entries() method returns a new Iterator object that contains the [key, value]
  // pairs for each element in the Map object.
const marks = new Map();
marks.set(["math",100]);
marks.set(["english",70]);
marks.set(["social",80]);
marks.set(["{}",60]);

const list = marks.entries( );
console.log("list:",list)
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)

//Map.keys() method will returns a new itrator object 
//thats contain keys for each element in the map object


  //Map.values() ??????????

  

  console.log(text)






 


    





