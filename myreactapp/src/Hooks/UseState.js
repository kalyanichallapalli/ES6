import React,{usestate} from "react";
import { useState } from "react/cjs/react.development";
function Car(){
    const[car, setCar] = useState({
        brand:'Ford',
        model:'Mustang',
        color:'Red',
        year: '2000'
    })

    const updatedCar=()=>{
        setCar(prevstate =>{return{prevstate, brand:'Tesal', model:'Model-S', color:'Blue', year:'2020'}})
    }

    return <div>
        My Car Is {car.brand} Model is  {car.model}
        <p>It Is A{car.color} manufactured in the Year {car.year}r</p>
        <button onClick = {updatedCar}>Upadate your Car</button>
    </div>
}
export default Car;