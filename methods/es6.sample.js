///block scope The let keyword allows you to declare a variable with block scope.
// block scope means using the variable throght out the program which is declared globially.

var x = 10; // Here x is 10

{
  let x = 2; // Here x is 2
  console.log("function scope:", x)
  
}
console.log("blockscope:",x)
// Here x is 10

const y = 10;
{
    const y = 10;
    console.log("function scope:", y)
}
console.log("blockscope:",y)