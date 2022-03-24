import React,{useState,useEffect} from 'react'

function UseEffect() {
    const[count, setCount] = useState(0);
    const[calculator, setCalculator] = useState(0);

    useEffect(()=>{
        setCalculator(() => count * 2); // calculator count 
        document.title = `you clicked ${count}` //title chnage 

    },[count]);
    

  return (
    <div>
        <h2>.....USE STATE AND USE EFFECT.....</h2>
        <h2>Counter:{count}</h2>
        <h2>Calculator: {calculator}</h2>
        <button onClick = {()=> setCount(count + 1)}>Inc</button>
        <button onClick = {()=> setCount(count - 1)}>Dec</button>


    </div>
  )
}

export default UseEffect