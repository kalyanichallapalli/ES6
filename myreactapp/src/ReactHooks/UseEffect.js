import React,{useState, useEffect} from "react";
function UseEffect(){
    const [count,setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

useEffect(()=>{
    setCalculation(()=> count * 2);
},[count]);

    return <div>
        <h2>Count: {count}</h2>
        <button onClick = {() => setCount(count+1)}>Count</button>
        <p>Calculation: {calculation}</p>
    </div>
}
export default UseEffect;
