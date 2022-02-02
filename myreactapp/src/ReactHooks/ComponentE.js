import React from 'react';
import ComponentF from './ComponentF';
import{UserContext, CityContext} from '../App'
import { useContext } from 'react';

 function ComponentE() {

  const user = useContext(UserContext)
  const city = useContext(CityContext)
  console.log('Component E')
  return <div>
      {/* <ComponentF></ComponentF> */}
      {user} {city}
  </div>;
}
export default ComponentE
