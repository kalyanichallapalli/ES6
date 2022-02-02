import React,{useEffect, useRef} from 'react';

export default function FocusRef() {
    const UserRef = React.useRef(null)

   useEffect(() =>{
      UserRef.current.focus()
   },[]) 
  return <div>
      <p>Login id:  
      <input ref ={UserRef} type = 'text'></input>
      </p>
  </div>;
}
