import React,{useEffect, useState} from "react";
function Calculation(){
    const [count, setcCount] = useState(0);
    const [calculator, setCalculator] = useState(0);
    

    useEffect(()=>{
        setCalculator(()=> count * 2)
    },[count])
  
    return <div>
          <h2>click the button to increment count{count}</h2>
          <button type= 'button' onClick = {()=> setcCount(count+1)}>Click here</button>
          <p > Useeffect calculator: {calculator}</p>
    </div>
}

export default Calculation;