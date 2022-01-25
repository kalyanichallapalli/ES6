
import './App.css';
import Clickcount from './HOC/HigherOrderComp/Clickcount';
import HoverComp from './HOC/HigherOrderComp/HoverComp';

function App() {
  return (
    <div className="App">
      <Clickcount></Clickcount>
      <HoverComp></HoverComp>
    </div>
  );
}

export default App;
