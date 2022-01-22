import React from "react";
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.name ="Kalyani"
        
    }
    
    render() {
        return<dev><h2>This is a Class Component Created by {this.name}</h2></dev>
    }

}
export default ClassComponent;