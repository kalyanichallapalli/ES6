import React, { useState } from 'react'
import F1 from './F1';
function F2() {
    const[name,setName]=useState('');
   
  return (
    <div>
       
        <F1 name={name} setName={setName}></F1>
    </div>
  )
}

export default F2;