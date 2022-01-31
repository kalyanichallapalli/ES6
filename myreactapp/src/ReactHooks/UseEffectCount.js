
import React,{useState,useEffect} from 'react';

function UseEffectCount() {
    const[count, setCount] = useState(0)

    useEffect(() =>{
      document.title = `you clicked ${count}`
    })

  return <div>
    <button onClick ={() => setCount(count + 1)}>Click{count}</button>
  </div>;
}

export default UseEffectCount;
