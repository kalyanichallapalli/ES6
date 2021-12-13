//Destructing Arrays

function display(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    console.log([add, subtract, multiply, divide]);
  }
  
display(10, 5);
    
//Destructing object
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle(vehicleOne)
  
  function myVehicle({ model, registration: { state } }) {
   const message = ('My ' + model + ' is registered in ' + state + '.');
   console.log(message)
  }

  
