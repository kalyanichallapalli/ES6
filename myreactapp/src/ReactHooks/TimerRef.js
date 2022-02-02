import React,{useState,useEffect, useRef} from 'react';
function TimerRef() {
  const [timer, setTimer] = useState(0)
  const intervalref = useRef()
  useEffect(()=>{
       intervalref.current = setInterval(()=>{

       setTimer(prevtimer=> prevtimer + 1)

      },2000)

    return()=>{
          clearInterval(intervalref.current)
      };
  },[])
  return <div>
        timer{timer}
        <button onClick= {()=> clearInterval(intervalref.current)}>clear timer</button>
  </div>;
}
export default  TimerRef
