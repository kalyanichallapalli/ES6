
import './App.css';
import UpdatedComonent from './HigherOrderComp/UpdatedComponent';
// import ComponentC from './ReactContext/ComponentC';
// import { UserProvider } from './ReactContext/UserContext';

function App() {
  console.log('APP')

  return (
    <div className="App">
      {/* <UserProvider value = 'Kalyani Challapalli'>
      <ComponentC/>
      </UserProvider> */}
      <UpdatedComponent></UpdatedComponent>
    </div>
  )
}
export default App;
