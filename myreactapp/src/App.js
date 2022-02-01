
import React from 'react';
import { useContext } from 'react';
import './App.css';
import ComponentC from './ReactHooks/ComponentC';
export const UserContext = React.createContext()
function App() {
  return (
    <div className="App">
   <UserContext.Provider value = {'Kalyani Challapalli'}>
   <ComponentC/>
   </UserContext.Provider>
   </div>
  );
}

export default App;
