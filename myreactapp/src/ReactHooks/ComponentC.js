import React from 'react';
import ComponentE from './ComponentE';

 function ComponentC() {
    console.log("ComponentC")
  return <div>
      <ComponentE></ComponentE>
  </div>;
}
export default ComponentC
