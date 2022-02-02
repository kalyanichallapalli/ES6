
import './App.css';
import React from 'react';
// import Car from './Hooks/UseState';
// import UseEffect from './Hooks/UseEffect';
import ComponentC from './Hooks/ComponentC';

export const UserContext = React.createContext()
function App() {
 
  return (
    <div className="App">
      {/* <Car></Car>
      <UseEffect></UseEffect> */}
      <UserContext.Provider value = {'Kalyani Challapalli'}>
      <ComponentC></ComponentC>
      </UserContext.Provider>
   
     </div>
  );
}

export default App;
