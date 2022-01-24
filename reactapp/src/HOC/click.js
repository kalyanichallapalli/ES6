import React from "react";
class Click extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            count : 0
        }

    }
    incrementer= ()=>{
        this.setState( prevstate => {return {count: prevstate.count + 1}})
    }
    render(){
        return <div>
        <button onClick = {this.incrementer}>Click {count} times </button>
    </div>

}    
}
export default Click;