import './App.css';
import React from 'react';
// import ComponentC from './ReactHooks/ComponentC';
import ComponentC from './Hooks/ComponentC';
export const UserContext = React.createContext()
function App() {
  console.log("App")
  return (
    <div className="App">
   <UserContext.Provider value = {'Kalyani Challapalli'}>
   <ComponentC/>
   </UserContext.Provider>
   {/* <UserContext.Provider value = {"Kalyani Challapalli"}>
   <ComponentC/>
   </UserContext.Provider> */}
   </div>
  );
}

export default App;
