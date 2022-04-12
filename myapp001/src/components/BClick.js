import react,{useState} from 'react';

function BClick(){ 
 const[name, setName] = useState('');
 const handleClick = ()=>{
   setName('kalyani challapalli');
 } 
  return(
    <div>
      <h5>Name:{name} </h5>
      <button onClick={handleClick}>Click</button>
      </div>
  )
}
export default BClick;