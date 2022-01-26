import React from "react";
class ClassComp extends React.Component{
    constructor(){
        super();
        this.state = {
            name : 'KALYANI'

        }
    }
    render(){
        return <div>This is the Class Component Created By {this.state.name}</div>
    }
}
export default ClassComp;