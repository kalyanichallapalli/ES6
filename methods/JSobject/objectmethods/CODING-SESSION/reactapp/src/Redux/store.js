import { createStore } from "redux"
const initialState = {
    age:21
}

export const Increment = () =>{
    return {
        type: 'INCREMENT'
    }
}

const myReducer  = ((state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT" : return {age: this.state.age + 1 }
        case "DECREMENT" : return {age: this.state.age - 1 }
        default: return state

    }

})

const store = createStore(myReducer);
export default store;