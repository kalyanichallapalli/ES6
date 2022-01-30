import './App.css';
// import ClickCount from './HOC/HigherOrderComp/Clickcount';
// import HoverCount from './HOC/HigherOrderComp/HoverCount';
import StateHook from './ReactHooks/StateHook';
import Car from './ReactHooks/UseState';
function App() {
  return (
    <div className="App">
    {/* <ClickCount></ClickCount>
    <HoverCount></HoverCount> */}
    <StateHook></StateHook>
    <Car></Car>
    </div>
  );
}

export default App;
