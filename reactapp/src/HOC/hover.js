import React from "react";
class Hover extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            count : 0
        }

    }
    incrementer= ()=>{
        this.setState(prevstate =>{ return this.prevstate.count + 1})
    }
    render(){
        return <div>
        <h2 onMouseMove= {this.incrementer}>Hover here {count} times</h2>
    </div>

}    
}
export default Hover;