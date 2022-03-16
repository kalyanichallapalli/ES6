import './App.css';
import React,{useState} from 'react';
import ClassToDoList from './components/ClassToDoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import FunToDoList from './components/FunToDoList';

function App() {
  return (
    <div>
          {/* <div className = 'App'> */}
      {/* <ClassToDoList></ClassToDoList> */}
      {/* <FunToDoList></FunToDoList> */}
      {/* <Calculator></Calculator> */}
      <Cal></Cal>
       </div>
    
  )      
}

export default App;
