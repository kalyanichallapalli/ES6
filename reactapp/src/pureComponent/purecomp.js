import React from "react";
class PureComp extends React.Component{
    constructor(props){
        super(props);
 
     }
    render(){
        console.log('PURE COMPONENT')
        console.log(this.state.name)
        return (<div>
         <h2>This is a Pure Component Created by {this.props.name}</h2>
        </div>)
    }
}
export default PureComp;