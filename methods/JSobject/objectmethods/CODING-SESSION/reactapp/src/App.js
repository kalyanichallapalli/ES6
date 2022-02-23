import './App.css';
import A from './Context/A';
// import { UseProvider } from './Context/ContextApi';
import { UseProvider } from  './Hooks/ContextHook'

// import UseEffecthook from './Hooks/UseEffecthook';
// import UseStatehook from './Hooks/UseStatehook';
// import Fcomponent from './Components/functionalcomponent';
// import ClassComponent from './Components/classComponent';
// import Funcomp1 from './props/Funcomp1';
// import Class1 from './props/Class1';
// import FunEvent from './Events/FunEvent'
// import Parent from './PureandMemo/Parent';

function App() {
  console.log('App')
  return (
    <div className="App">
      This is App componet 
      {/* <Fcomponent></Fcomponent>
      <ClassComponent></ClassComponent>
      <Funcomp1></Funcomp1>
      <Class1></Class1>
      <FunEvent></FunEvent>*/}
      {/* <Parent></Parent> */}
      {/* <UseStatehook></UseStatehook>
      <UseEffecthook></UseEffecthook> */}
      <UseProvider value = 'Kalyani Challapalli'>
        <A></A>
      </UseProvider>
   </div> 
  );
}

export default App;
