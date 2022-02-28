import './App.css';
import React from 'react';
import React_Redux from './Redux/React_Redux';
import store from './Redux/store';
import {Provider} from 'react-redux'
function App() {
 
  return (
    <div className="App">
     <Provider store ={store}>
     <React_Redux></React_Redux>
     </Provider>
     </div>
  );
}

export default App;
