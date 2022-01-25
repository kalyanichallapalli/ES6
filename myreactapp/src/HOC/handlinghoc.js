import React from "react";

const HigherOrderComponent = (WrappedComponent) =>{
    class HOC extends React.Component{
        constructor(){
            super();
            this.state = {
                count: 0
            }
        }
    
    Incrementcount =()=>{
        this.setState(prevstate =>{
            return {count: prevstate.count + 1} 
        })
    }
        render(){
            return <div>
                <WrappedComponent 
                count = {this.state.count} 
                Incrementcount = {this.Incrementcount}
                />

            </div>
        }
    }
    return HOC;
}
export default HigherOrderComponent;