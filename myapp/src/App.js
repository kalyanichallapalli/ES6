import './App.css';
import Functioncomp from './Conponents/Functioncomponent';
import ClassComponent from './Conponents/ClassComponent';
import F1 from './Conponents/props/f1';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the React World </h2>
      <Functioncomp></Functioncomp>
      <ClassComponent></ClassComponent>
      <F1></F1>
    </div>
  );
}

export default App;
