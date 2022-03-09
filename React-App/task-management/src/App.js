import './App.css';
import React,{useState} from 'react';
import ClassToDoList from './components/ClassToDoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import FunToDoList from './components/FunToDoList';
library.add(faTrash)

// add items to the list 
//delet item formthe list 
//edit item in the list 

function App() {
  return (
    <div className = 'App'>
      {/* <ClassToDoList></ClassToDoList> */}
      <FunToDoList></FunToDoList>
       </div>
    
  )      
}

export default App;
