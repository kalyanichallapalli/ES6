import React from 'react';
import { useContext } from 'react/cjs/react.development';
import {UserContext} from '../App'


function ComponentF() {
 const username = useContext(UserContext)
  return (
      <div>
         Component F Consumers {username} from App Component 
   </div>
  )
  
}
  export default ComponentF;
