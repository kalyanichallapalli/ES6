import './App.css';
import ClickCount from './HOC/HigherOrderComp/Clickcount';
import HoverCount from './HOC/HigherOrderComp/HoverCount';
function App() {
  return (
    <div className="App">
    <ClickCount></ClickCount>
    <HoverCount></HoverCount>
    </div>
  );
}

export default App;
