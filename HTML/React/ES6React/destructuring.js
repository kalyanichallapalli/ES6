//array 
function calculator(a,b) {
     const Add = a+b;
     const Sub = a-b;
     const Div = a/b;
     const Mul = a*b;
     const Mod = a%b;
    
     return [Add,Sub,Div,Mul,Mod]
}
const [Add,Sub,Div,Mul,Mod] = calculator(4,2)
console.log(Add)
console.log(Sub)
console.log(Div)
console.log(Mul)
console.log(Mod)
//object

let Vehicle = {
    type : 'Car',
    brand: 'ford',
    name: 'mustang',
    year: 1999,
    color: 'Red',
    
}
function myCar(Car) {
    const message = 'My ' + Vehicle.type + ' is ' + Vehicle.brand + ' : ' + Vehicle.name
    return message
}
console.log(myCar(Vehicle))
