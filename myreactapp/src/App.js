
import './App.css';
import UseEffectCount from './ReactHooks/UseEffectCount';
import Calculation from './UseEffect';
// import ClassComp from './ReactHooks/ClassComp';
// import ClickCount from './HOC/HigherOrderComp/Clickcount';
// import HoverCount from './HOC/HigherOrderComp/HoverCount';
// import StateHook from './ReactHooks/StateHook';
// import Car from './ReactHooks/UseState';
function App() {
  return (
    <div className="App">
    {/* <ClickCount></ClickCount>
    <HoverCount></HoverCount> */}
    {/* <StateHook></StateHook> */}
    {/* <Car></Car> */}
    {/* <ClassComp></ClassComp> */}
   <UseEffectCount></UseEffectCount>
   <Calculation></Calculation>
    </div>
  );
}

export default App;
