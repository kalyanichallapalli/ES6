const {createStore} = require("redux")
//State
const initialState = {
    count: 0
}
//Action 
//Action Creator 

function Inc(){
    console.log("inc")
    return {
        type: "INCREMENT",
    };

}
function Dec(){
    return {
        type: "DECREMENT",
    };
}
//Reducer will accept State, Action

const myReducer = ((state = {initialState}, action) =>{
    switch(action.type) {
    case "INCREMENT":
        return count = state.count + 1 
    case "DECREMENT":
        return count = state.count - 1
    default:
        return state;
    }
    
})

//Store: Create

const store = createStore(myReducer);

//to get the state we have to subscribe
const  subscribe = store.subscribe(() =>store.getState())
console.log(store.getState());
//to update the state 
store.dispatch(Inc());

