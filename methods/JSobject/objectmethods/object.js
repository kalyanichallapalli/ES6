//create  object
let name = {
      first_name : 'kalyani',
      last_name  : 'challapalli',
      age        :  36
}
//accessing accessing an object
let fname = name.first_name;
let lname = name["last_name"];
console.log(fname,lname)

//object with function def 
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; // here this keyword mens the owner of the object 
    }
  };
  //accessing object function 
  let name1=person.fullName();
  console.log(person.firstName)
  console.log(name1)
 

  
 