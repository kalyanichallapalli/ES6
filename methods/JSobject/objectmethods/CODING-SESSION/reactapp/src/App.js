import logo from './logo.svg';
import './App.css';
import Fcomponent from './Components/functionalcomponent';
import ClassComponent from './Components/classComponent';
import Funcomp1 from './props/Funcomp1';
import Class1 from './props/Class1';
import FunEvent from './Events/FunEvent'
function App() {
  return (
    <div className="App">
      This is App componet 
      <Fcomponent></Fcomponent>
      <ClassComponent></ClassComponent>
      <Funcomp1></Funcomp1>
      <Class1></Class1>
      <FunEvent></FunEvent>
   </div>
  );
}

export default App;
