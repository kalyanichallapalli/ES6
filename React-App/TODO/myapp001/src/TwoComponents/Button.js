import React,{useState} from 'react';
import Second from './Second'

function Button() {
   const[name , setName] = useState('');
   const[count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=> setName('kalyani challapalli')}>Change-Name</button>
        <button onClick={()=> setCount(count + 1)}>Click-count</button>
        <Second username = {name} count = {count}></Second>
    </div>
  )
}


// this program works on props