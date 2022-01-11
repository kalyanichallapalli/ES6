const { name } = require("ejs");

 class person{
     constructorO(name, age){
         this.name = name;
         this.age = age;
     }
 }
 //let objperson = new person("john",40);
 let obj1 = new person("tejo", 40)
console.log(obj1,name)