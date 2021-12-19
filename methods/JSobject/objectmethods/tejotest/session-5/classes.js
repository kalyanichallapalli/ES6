//CLASS DECLARATION
//One way to define a class is using a class declaration. 
//To declare a class, you use the class keyword with the name of the class

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

console.log('CLASS DECLARATION WITH NAME:',Rectangle.name)

//CLASS EXPRESSION 
//A class expression is another way to define a class. Class expressions can be named or unnamed.
// The name given to a named class expression is local to the class's body.

let Rectanglex= class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log('CLASS EXPRESSION WITH OUT NAME:',Rectanglex.name);
  // output: "Rectangle"
  
  // named
  let Rectangley = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log('CLASS EXPRESSION WITH NAME:',Rectangley.name);
  // output: "Rectangle2"
