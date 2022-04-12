import react,{useState} from 'react';

function button(){ 
 const[name, setName] = setState('kalyani')
  return(
    <div>
      <h5>Name:{name} </h5>
      <button onClick={()=>setName('kalyani challapalli')(setName(''))}>Click</button>
      </div>
  )
}
export default button;