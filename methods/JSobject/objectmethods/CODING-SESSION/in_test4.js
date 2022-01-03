//**** Problem 3-1 ********
// Create a data structure for createCaptain such that...
// The following code logs Captain America
//console.log(createCaptain().aliases.superheroName)
/*() ?? */

const createCaptain1 = () => {
  return {
      aliases: {superheroName: "Captain America"}
  }
}
console.log(createCaptain1().aliases.superheroName);

// **** Problem 3-2 ********
//console.log(createCaptain().sayPhrase())

const createCaptain = () => {
    return {
         sayPhrase : () => {return "I can do this all day"}}
    }
    console.log(createCaptain().sayPhrase()) 