import React, {useState } from 'react';
function FavoriteColor() {
   const [color, setcolor] = useState('Red')   //Initialize useState
  return <div>
      {/* Read State */}
      <h2>My FavoriteColor is {color} !</h2> 
      {/* update the State */}
      <button onClick = {()=>setcolor('Blue')}>Blue</button>

  </div>;
}

export default FavoriteColor;

