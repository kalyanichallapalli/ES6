//lets crate a counter and incrrest on click button
import React from "react";
class SetState extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            counter: 0
        }

    }
// increment(){     
//    this.setState({
//        counter: this.state.counter + 1
//    }, ()=> {console.log(this.state.counter)})
//    console.log(this.state.counter)
// 
//}

increment(){ 
this.setState((prevstate) => ({
    counter: prevstate.counter + 1
}))
console.log(this.state.counter)
}
incrementfive(){
    this.increment()
    this.increment()
}
    
render(){
    return (<div>
        <h2>count {this.state.counter}</h2>
        <button onClick ={() => this.incrementfive()} >INC</button>
    </div>
    )}
}
export default SetState;