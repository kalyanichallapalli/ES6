import React, {useState} from 'react';

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
     const updateCar =()=>{
      setCar(prevstate => { return{...prevstate,brand:'TESLA', model:'Model S', year:'2020',color:'Blue'}})
  }
  return <div>
      <h2>My car {car.brand} </h2>
      <p>IT IS A {car.color} {car.model} from {car.year}</p>
      <button type = 'button' onClick ={updateCar}>Updated Car</button>

  </div>;
}

export default Car;
