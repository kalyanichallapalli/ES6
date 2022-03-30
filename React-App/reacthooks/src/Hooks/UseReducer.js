import React,{useReducer} from 'react';

const initialstate = 21;
const reducer = (state,action) =>{
    console.log(action);
    console.log(state);

    switch(action){
        case 'Increment': return state + 1
        case 'Decrement': return state - 1
        case 'Reset'    : return initialstate
        default:  return state    
    }
}

function UseReducer() {
    const[count,dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
        <h1>......USE REDUCER......</h1>
        <h2>AGE OF THE PERSON: {count}</h2>
        <button onClick={()=> dispatch('Increment')}>INC</button>
        <button onClick={()=> dispatch('Decrement')}>DEC</button>
        <button onClick={()=> dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default UseReducer