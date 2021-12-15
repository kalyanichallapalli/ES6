//ES6 Spread Operator

let A = [1,2,3,4];
let B = [5,6,7,8];
let C = [...A,...B]
console.log(C)

// using spread operator in combinaction of destructuring

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...x] = numbers;
console.log([one])
console.log([two])
console.log(x)

//object spread 
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const myupdatedvechial = {
      ...myVehicle,...updateMyVehicle
  }
  console.log(myupdatedvechial)

  