import React,{useState} from 'react';
function UseState() {
    const [count, setCount] = useState(0);
    const handleInc = ()=>{
        setCount(count+1)
    }
    const handleDec = ()=>{
      setCount(count-1)
  }
  return (
    <div>
        <h1>..........USE STATE.........</h1>
        <h2>Increment Count {count}</h2>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>

    </div>
  )
}

export default UseState