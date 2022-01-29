import React from "react";
import UpdatedComonent from "./UpdatedComponent";
class HoverCount extends React.Component{
    
    render(){
        const{count,name, IncrementCount} = this.props
        return <div>This the the HoverCount component Created By {name}
        <h2 onMouseMove= {IncrementCount}>Hover here to Increasethe count{count}</h2>
        </div>
    }
}
export default UpdatedComonent(HoverCount);