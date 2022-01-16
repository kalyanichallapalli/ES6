import './App.css';
import FunctionComponent from './Components/Functionalcomp';
import ClassComp from './Components/ClassComp';
import F1 from './Props/f1';
function App() {
  return (
    <div className="App">
      <h2>React Project</h2>
     <FunctionComponent></FunctionComponent>
     <ClassComp></ClassComp>
     <F1></F1>
    </div>
  );
}

export default App;
