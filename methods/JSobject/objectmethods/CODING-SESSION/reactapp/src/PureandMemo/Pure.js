import React  from "react";
import { PureComponent } from "react/cjs/react.production.min";
class PureComp extends PureComponent{
    render(){
        console.log('Pure COMPONENT')
        return (<div>
            <h2  style={{color: 'red'}}>This is a Pure Component Created by {this.props.name}</h2>
        </div>)
    }
}
export default PureComp;