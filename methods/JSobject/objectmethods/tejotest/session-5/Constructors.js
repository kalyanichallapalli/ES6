//The constructor method is a special method of a class for creating and initializing an object 
//instance of that class.
  class Rectangle {
  
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
let twoValues = new Rectangle(4,5);
console.log(twoValues);
console.log(twoValues.height)