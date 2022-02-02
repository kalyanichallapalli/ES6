import React from 'react';
import ComponentC from './ComponentC';
import ComponentF from './ComponentF';
 function ComponentE() {
     console.log("ComponentE")
  return <div>
      <ComponentF></ComponentF>
  </div>;
}

export default ComponentE
