import './App.css';
// import ClassA from './lifecyclemethods/ClassA';
// import Message from './State/Message';
// import SetState from './State/Setstate';
// import PureComp from './pureComponent/purecomp';
// import ClickCount from './HOC/ClickCount';
// import HoverCounter from './HOC/HoverCounter';
import Click from './HOC/click';
import Hover from './HOC/hover';
function App() {
  return (
    <div className="App">
      {/* <h2>Increment the number if count is even</h2>  */}
      {/* <ClassA></ClassA>  */}
      {/* <Message></Message>
      <SetState></SetState> */}
      {/* <PureComp></PureComp> */}
      {/* <ClickCount></ClickCount>
      <HoverCounter></HoverCounter> */}
      <Click></Click>
      <Hover></Hover>


    </div>
  )
}

export default App;
