import React, { PureComponent } from "react";
class PureComp extends PureComponent{
    constructor(props){
        super(props);
 
     }
    render(){
        console.log('PURE COMPONENT')
        return (<div>
         <h2>This is a Pure Component Created by {this.props.name}</h2>
        </div>)
    }
}
export default PureComp;