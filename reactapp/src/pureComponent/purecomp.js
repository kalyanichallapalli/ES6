import React  from "react"

class PureComp extends pureComponent{
    constructor(props){
        super(props);
        this.state = {
            name:'Kalyani'
        }
 
     }
    render(){
        console.log('REGULAR COMPONENT')
        return (<div>
            <h2>This is a Pure Component Created by {this.state.name}</h2>
        </div>)
    }
}
export default PureComp;