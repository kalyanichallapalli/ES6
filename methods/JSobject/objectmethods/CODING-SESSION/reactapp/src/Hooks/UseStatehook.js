import {React, useState} from "react";

function UseStatehook() {
    const[color, setColor] = useState('Red')
  return (
    <div>
        <h2>UseStatehook</h2>
        <h2>My fav color is: {color}</h2>
        <button onClick={() => setColor('Blue')}>Click to chnage the color</button>
    </div>

  )
}

export default UseStatehook