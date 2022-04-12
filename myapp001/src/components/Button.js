import React,{useState} from 'react'
import ListComponent from './ListComponent'
function Button() {
    const[count , setCount] = useState(0);
    const[name , setName]   = useState('')
    const updateCount = ()=>{
        setCount(()=>count +1)
    };
    const updateName = ()=>{
        setName(()=>'kalyani')
    } 
    const restName = ()=>{
        setName(() => '');
        setCount(() => 0)  
    }
  return ( 
    <div>
        <h2>count in Button component {count}</h2>
        <button type ='button' onClick={updateCount}>click</button>
        <button type = 'button' onClick={updateName}>changename</button>
        <button type = 'button' onClick={restName}>Reset</button>
        <ListComponent newvalue = {count} username ={name}></ListComponent>
    </div>
  )
}

export default Button;