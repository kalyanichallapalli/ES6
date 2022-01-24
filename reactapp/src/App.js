import './App.css';
// import ClassA from './lifecyclemethods/ClassA';
// import Message from './State/Message';
// import SetState from './State/Setstate';
// import PureComp from './pureComponent/purecomp';
import ClickCount from './HOC/ClickCount';
import HoverCounter from './HOC/HoverCounter';
function App() {
  return (
    <div className="App">
      {/* <h2>Increment the number if count is even</h2>  */}
      {/* <ClassA></ClassA>  */}
      {/* <Message></Message>
      <SetState></SetState> */}
      {/* <PureComp></PureComp> */}
      <ClickCount></ClickCount>
      <HoverCounter></HoverCounter>


    </div>
  )
}

export default App;
