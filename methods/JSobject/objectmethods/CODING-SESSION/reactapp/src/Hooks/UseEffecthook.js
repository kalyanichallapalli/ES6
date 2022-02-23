import {React,useEffect, useState } from 'react'

function UseEffecthook() {
    const[count, setCount] = useState(0)
    const[calculation, setCaluclation] = useState(0)

useEffect(() =>{
    setCaluclation(() => count * 2)
},[count]);

  return (
    <div>
        <h2>UseEffecthook: {count}</h2> 
        <button onClick = {()=> setCount(count + 1)}>Count</button>
        <h2>calculation: {calculation}</h2>
    </div>
  ) 
}

export default UseEffecthook