import React, {useState } from 'react';
function Updatedstate() {
   const [color, setcolor] = useState('Red')   //Initialize useState
   const [car, setCar] = useState({
       brand:'Ford',
       model:'Mustang',
       color:'Red',
       year:' 1964'

   })
   const updateCar =()=>{
     setCar(prevstate =>{return{...prevstate, brand:'TESLA', model:'Model-S', color:'Blue', year:'2020'}})
   }
  return <div>
     
      <h1>My FavoriteColor is {color} !</h1> 
      <button onClick = {()=>setcolor('Blue')}>Blue</button>
      <h2> My Car is {car.brand} {car.model}</h2>
      <p> It Is a {car.color} color and manfactured in the year {car.year}</p>
      <button type = 'button' onClick = {updateCar}>update Your Car </button>

  </div>;
}

export default Updatedstate;

