import React,{useState} from 'react'
import './App.css'

function Calculator() {
  const[input, setInput] = useState('')
  const[result ,setResult] = useState(0)
  const handleChange = (e) =>{
      setInput(e.target.value)
  }
  return (
    <div>
        <center>
        <input type='text' value={input} name ='input' onChange={handleChange}></input>
        <h5>Result: {result}</h5>
        <button onClick={()=> setResult(eval(input))}>Result</button><br/>
        <button onClick={()=> setInput('')}>Clr</button>
        <button onClick={()=> setInput(input + '/')}>/</button>
        <button onClick={()=> setInput(input + '*')}>*</button>
        <button onClick={()=> setInput(input + '-')}>-</button>
        <button onClick={()=> setInput(input + '+')}>+</button><br/>
        <button onClick={()=> setInput(input + '0')}>0</button>
        <button onClick={()=> setInput(input + '1')}>1</button>
        <button onClick={()=> setInput(input + '2')}>2</button>
        <button onClick={()=> setInput(input + '3')}>3</button>
        <button onClick={()=> setInput(input + '4')}>4</button><br/>
        <button onClick={()=> setInput(input + '5')}>5</button>
        <button onClick={()=> setInput(input + '6')}>6</button>
        <button onClick={()=> setInput(input + '7')}>7</button>
        <button onClick={()=> setInput(input + '8')}>8</button>
        <button onClick={()=> setInput(input + '9')}>9</button>
        </center>
    </div>
  )
}

export default Calculator