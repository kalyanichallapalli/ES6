import React from "react";
class Regcomp extends React.Component{
    constructor(props){
        super(props);
 
     }
    render(){
        console.log('REGULAR COMPONENT')
        return (<div>
            <h2>This is a Regular Component Created by {this.props.name}</h2>
        </div>)
    }
}
export default Regcomp;