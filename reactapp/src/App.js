
import './App.css';
import ComponentC from './ReactContext/ComponentC';
import { UserProvider } from './ReactContext/UserContext';

function App() {
  console.log('APP')

  return (
    <div className="App">
      <UserProvider value = 'Kalyani Challapalli'>
      <ComponentC/>
      </UserProvider>
    </div>
  )
}
export default App;
