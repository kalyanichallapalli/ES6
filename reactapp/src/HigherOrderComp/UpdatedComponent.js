import React from "react";

const UpdatedComponent = (OrginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(){
            super();
            this.state={
                name: 'Kalyani',
                count: 0
            }
    
    
        }
        IncrementCount=() =>{
            this.setState(prevstate =>{return{count:prevstate.count +1}})
        }
         render(){
             return <div>This is the UpdatedComponent
                 <OrginalComponent count = {this.state.count} IncrementCount = {this.IncrementCount}>

                 </OrginalComponent>
             </div>
         }
    }
    return NewComponent;
}
export default UpdatedComponent;

