import React from "react";
import UpdatedComponent from "./Hoc";
class ClickCount extends React.Component{
                                                                
    render(){
        const {count, IncrementCount} = this.props;
        return <div>
            <button onClick = {IncrementCount}>Click {count} times</button>
        </div>
    }
}
export default UpdatedComponent(ClickCount);