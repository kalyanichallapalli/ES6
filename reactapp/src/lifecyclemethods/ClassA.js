import React from "react";
class ClassA extends React.Component{
    constructor(props){
        super(props);
        this.color ='red';
        this.state = {
            count: 0
        }
    }
 static getDerivedStateFromProps(props, state){
     if(props.num%2 == 0){
        return {count: state.count+1}
    }
    else {
        return null;
    }
 }

    render(){
        return <dev><h2>my favourate color is {this.state.favcolor}</h2></dev>
    }
}

export default ClassA;