const {createStore} = require('redux')

const initailState = { // initial state 
    age:21
}
//Action 
const Incementage = () =>{
    console.log('Incrementor')
    return 
        type: 'INCREMENT'    
}

//reducer
const myreducer = ((state ={initailState},action)=>{
    switch(action.type){
        case "INCREMENT" : return state.age + 1
        case "DECREMENT" : return state.age - 1
        default: return state

        }
})
//store

const store = createStore(myreducer)

//to get the state component have to subscribe the store 

const subscribe = store.subscribe(()=> store.getState());

console.log(store.getState());
    
store.dispatch(Incementage());