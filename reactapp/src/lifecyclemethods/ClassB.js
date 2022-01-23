import React from "react";
import ClassA from "./ClassA";

class ClassB extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            num: 0
        }

    }
    handleClick = ()=>{
        this.setState({num: this.state.num+1})
    }
    render(){
        return <dev>
            <h2>This is a num {this.state.Number}</h2>
            <button onClick = {this.handleClick}>INC Number</button>
            <ClassA num={this.state.num}></ClassA>
        </dev>
    }
}
export default ClassB;