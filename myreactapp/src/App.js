import './App.css';
import React, { createContext } from 'react';
import ComponentC from './ReactHooks/ComponentC';
export const UserContext = React.createContext();
export const CityContext = React.createContext();

function App() {
  console.log("App")
  return (
    <div className="App">
   <UserContext.Provider value = {'Kalyani Challapalli'}> 
   <CityContext.Provider value = {'Mountain House'}>
   <ComponentC/>
   </CityContext.Provider>
   </UserContext.Provider>
     </div>
  );
}

export default App;
