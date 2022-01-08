// array with objects
//group same ages users into one array
/*
{
    "30":["syed","vikas"],
    "25":["aditya","harish"]
}
*/
let Arr1 = [{name: "syed",id: 6, age: "30", },
            {name: "aditya",id: 9,age: "25", },
            {name: "harish",id: 8,age: "25",},
            {name: "vikas",id: 10,age: "30",},];
let output = {};

Arr1.forEach (a =>{ // a is value of object.
    if(output[a.age] === undefined){
      output[a.age] = [] //a.age[30] ...> first time 
    }
    output[a.age].push(a.name)                      
    });  
  console.log(output);

    


