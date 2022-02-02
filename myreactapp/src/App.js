import './App.css';
import React from 'react';
// import ComponentC from './ReactHooks/ComponentC';
// import ComponentC from './Hooks/ComponentC';
// export const UserContext = React.createContext()
// import Updatedstate from './ReactHooks/StateHook'; 
import UseEffect from './ReactHooks/UseEffect'; 
function App() {
  console.log("App")
  return (
    <div className="App">
   {/* <UserContext.Provider value = {'Kalyani Challapalli'}>
   <ComponentC/>
   </UserContext.Provider> */}
   <UseEffect></UseEffect>

   </div>
  );
}

export default App;
