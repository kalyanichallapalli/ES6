import React from 'react';
import ComponentE from './ComponentE';

 function ComponentC() {
   console.log('Component C')
  return <div>
      <ComponentE></ComponentE>
  </div>;
}

export default ComponentC
