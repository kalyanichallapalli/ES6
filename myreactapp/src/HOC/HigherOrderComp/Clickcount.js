import React from "react";
import UpdatedComonent from "./UpdatedComponent";

class ClickCount extends React.Component{
    
    render(){
        const{count,name, IncrementCount} = this.props
        return <div>
         <h2>This the the ClickCount component Created By {name}</h2>
        <button onClick = {IncrementCount}>chickhere {count} time </button>
        </div>
    }
}
export default UpdatedComonent(ClickCount);