import React from "react";
class ClassA extends React.Component{
    render(){
        console.log('Regular Component')
        return<div>THIS IS A REGULAR COMPONENT CREATED BY {this.props.name}</div>
    }
}
export default ClassA;