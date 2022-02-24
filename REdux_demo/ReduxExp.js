//store 
 
const  { createStore } = require("redux");  //to create a store use redux before create //IMPORT (1)

const initialState ={                     //create a default state
    age: 21    

};

const myreducer = (state = initialState, action) =>{// we are creating a reducer using function it will take state and Action REDUCER(3)
      
           const newState = {...state}
           if(action.type === 'ADD'){

               newState.age += action.value;
           }
           if(action.type === 'SUB'){

            newState.age -= action.value;
           }
           return newState;

}

const store = createStore(myreducer); // create a store. it will take two things action and reducer //STORE CREATE(2)

store.subscribe(() =>{
    console.log ('State change',store.getState())

})

store.dispatch({type: 'ADD', value: 10}) ;  ///dispatching Action DISPATCHACTIONS(4)
store.dispatch({type: 'SUB', value: 5}) ;  ///dispatching Action 

