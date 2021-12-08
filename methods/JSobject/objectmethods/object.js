//create  object or define 
let name = {
      first_name : 'kalyani',
      last_name  : 'challapalli',
      age        :  36
}
//accessing accessing an object
let fname = name.first_name;
let lname = name["last_name"];
console.log("Accessing properties from object:",fname,lname)

//object with function def 
const person = {
    firstName: "kalyani",
    lastName : "challapalli",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; // here this keyword mens the owner of the object 
    }
  };
  console.log("Accessing object property name :",person.firstName)
  //accessing object function 
  let name1=person.fullName();
  console.log("Accessing object function:",name1)
 

  
 