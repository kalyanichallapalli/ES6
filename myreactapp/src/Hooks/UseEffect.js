import React,{useState, useEffect} from "react";

function UseEffect() {
    const[count, setCount] = useState(0)
    const[calculation, setcalucation] = useState(0)

    useEffect(()=>{
        setcalucation(()=> count * 2)
    },[count])

  return <div>
      <h2>Click Count to increment {count}</h2>
      <button onClick ={()=> setCount(count+1)}>Click Count</button>
      <p>Calculation: {calculation}</p>
  </div>;
}

export default UseEffect;

