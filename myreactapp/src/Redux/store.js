import {createStore} from 'redux';
// initial state;

const initialState = {count: 0}
//Action creator 
export const Incrementcount = () => {
    return{
        type: "INCREMENT"
    }
}
// reducer function 
const myReducer = (state = initialState, action) =>{

    switch(action.type){
        case "INCREMENT": return {count: this.state.count + 1};
        case "DECREMENT": return {count: this.state.count - 1};
        default: return state
}
};
//CREATE A STORE 
const store = createStore(myReducer);
export default store;

