import React from "react";
class Message extends React.Component{
    constructor(){
        super();

        this.state ={
            message: 'Welcome to React World2'
        }   
    }
    onClick(){
        this.setState({
            message: 'Thanks for subscribing'
        })
    }
    render(){
        return <div>
            <h2>{this.state.message}</h2>
            <button onClick = {() => this.onClick()}>Subscribe</button>
        </div>
    }
}
export default Message;
