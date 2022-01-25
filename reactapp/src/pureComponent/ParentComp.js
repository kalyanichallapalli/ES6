import React from "react";
import PureComp from "./purecomp";
import Regcomp from "./regularComp";
class ParentComp extends React.Component{
    constructor(props){
       super(props);
       this.state ={
           name : 'Kalyani'
       }

    }
    render(){
        return <div>
            <h2>This is a Parent Component</h2>
            <PureComp></PureComp>
            <Regcomp></Regcomp>
        </div>
    }
}
export default ParentComp;