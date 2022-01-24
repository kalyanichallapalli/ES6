import React from "react";
import UpdatedComponent from "./Hoc";
class HoverCounter extends React.Component{
    
    render(){
        const {count, IncrementCount} = this.props;
        return <div>
            <h2 onMouseOver = {IncrementCount}>HoverCounter {count} times</h2>
        </div>
    }
}
export default UpdatedComponent(HoverCounter);