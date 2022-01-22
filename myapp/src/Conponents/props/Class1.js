import React from "react";
class Objstate extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <dev><h2>This is a class object created by {this.props.username}</h2></dev>
    }
}
export default Objstate;