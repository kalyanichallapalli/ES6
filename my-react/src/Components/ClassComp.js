import react from "react";

class ClassComp extends react.Component{
    constructor(){
        super();
            this.name = "Kalyani"

    }
    render(){
        return <dev>
            <h1>Class Component Created By {this.name}</h1>
            
        </dev>
    }
}
export default ClassComp;