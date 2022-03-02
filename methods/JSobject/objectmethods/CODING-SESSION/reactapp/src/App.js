import './App.css';
import React from 'react';
import store from './Redux/store';
import ReduxAge from './Redux/ReduxAge';
import {Provider} from 'react-redux'

function App() {
 
  return (
    <div className="App">
     <Provider store ={store}>
     <ReduxAge></ReduxAge>
     </Provider>
     </div>
  );
}

export default App;
