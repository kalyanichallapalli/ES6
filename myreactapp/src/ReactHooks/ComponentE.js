import React from 'react';
import ComponentF from './ComponentF';

 function ComponentE() {
  console.log('Component E')
  return <div>
      <ComponentF></ComponentF>
  </div>;
}
export default ComponentE
