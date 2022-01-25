import React from "react";
import ParentComp from "./ParentComp";
class PureComp extends React.Component{
    constructor(props){
       super(props);
       
    }
    render(){
        return <div>
         <h2>This is a Pure Component</h2>
        </div>
    }
}
export default PureComp;