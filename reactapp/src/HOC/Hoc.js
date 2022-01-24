import React from "react";
const UpdatedComponent = (OrginalComponent) =>{
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state ={
                count: 0
            }   
        }
        IncrementCount =()=>{
            this.setState( prevstate => {return {count: prevstate.count + 1}})
        }
        render(){
            return <OrginalComponent countc= {this.state.count} IncrementCount = {this.IncrementCount}>
                
            </OrginalComponent>
        }
    }
    return NewComponent
}
export default UpdatedComponent;