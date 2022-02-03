import React,{useReducer} from 'react'; 

const initialstate = {
    FirstCount : 0,
    SecondCount : 5
};
const reducer = (state, action) =>{
     switch(action.type){
         case 'Increment':
             return {...state,FirstCount: state.FirstCount + action.value}
         case 'Decrement':
             return {...state,FirstCount: state.FirstCount - action.value}
        case 'Increment2':
             return {...state,SecondCount: state.SecondCount + action.value}
        case 'Decrement2':
             return {...state,SecondCount: state.SecondCount - action.value}
        case 'Reset':
             return initialstate
        default:
             return  state            

     }
}

function ReducerCount2() {
   const[count, dispatch] = useReducer(reducer, initialstate)
  
  return <div>
      <div>First Count: {count.FirstCount} </div> 
      <div>Second Count: {count.SecondCount} </div> 
      <button onClick = { ()=>  dispatch({type:'Increment', value: 1 })}>Increment-1</button>
      <button onClick = { ()=>  dispatch({type:'Decrement', value: 1 })}>Decrement-1</button>
      <button onClick = { ()=>  dispatch({type:'Increment2', value: 5 })}>Increment-2</button>
      <button onClick = { ()=>  dispatch({type:'Decrement2', value: 5 })}>Decrement-2</button>
      <button onClick = { ()=>  dispatch({type:'Reset'})}>reset</button>
  </div>;
}

export default ReducerCount2;
