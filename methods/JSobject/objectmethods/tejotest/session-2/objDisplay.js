//how to display an object to sting
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
 console.log(person.name +','+ person.age +','+ person.city)
//Displaying the Object in a Loop

  let text ="";
  for (let x in person){
      text+= person[x]+ ",";

  }
  console.log(text)
//Using Object.values()Any JavaScript object can be converted to an array using Object.values():
 const array = Object.values(person);
 console.log(array)
//Using JSON.stringify()
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
 let mystring = JSON.stringify(person);
 console.log(mystring)


   

