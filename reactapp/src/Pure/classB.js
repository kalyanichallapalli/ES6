import React from "react";
import { PureComponent } from "react";
class ClassB  extends PureComponent{
    render(){
        console.log('Pure Component')
        return <div>THIS IS A PURE COMPONENT CREATED BY{this.props.name} </div>
    }
}
export default ClassB;