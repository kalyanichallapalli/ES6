///block scope The let keyword allows you to declare a variable with block scope.
// block scope means using the variable throght out the program which is declared globially.

var x = 10; // Here x is 10

{
  let x = 2; // Here x is 2
  console.log("block scope:", x)
  
}
console.log("globel scope:",x)
// Here x is 10

const y = 10;
{
    const y = 10;
    console.log("block scope:", y)
}
console.log("globel scope:",y)

var age = 100;
  if (age > 12){
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`); // block scope
  }
  //console.log(dogYears);
  console.log(age)

//  function scope 
function setWidth(){
  var width = 100;
  console.log(width);
}
//width;




