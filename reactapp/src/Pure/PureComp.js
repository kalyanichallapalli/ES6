import React  from "react";
import { PureComponent } from "react/cjs/react.production.min";
class PureComp extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name:'Kalyani'
        }
 
     }
    render(){
        console.log('Pure COMPONENT')
        return (<div>
            <h2>This is a Pure Component Created by {this.state.name}</h2>
        </div>)
    }
}
export default PureComp;