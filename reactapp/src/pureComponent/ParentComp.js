import React from "react";
class ParentComp extends React.Component{
    constructor(props){
       super(props);
       this.state ={
           name = 'Kalyani'
       }

    }
    render(){
        return <div>
            <h2>This is a Parent Component</h2>
        </div>
    }
}
export default ParentComp;