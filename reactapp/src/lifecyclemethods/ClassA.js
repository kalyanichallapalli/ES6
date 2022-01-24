import React from "react";
import ClassB from "./ClassB";
class ClassA extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'kalyani'
        } 
        console.log('ClassA: Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('ClassA: gerDerivedStateFromProps')
        return null;
    }
    componentDidMount(){ 
    
        console.log('ClassA: componentDidMount')
    }

    render(){
        console.log('ClassA: render')
        return <div>
            <h2>ClassA</h2>
            <ClassB></ClassB>
        </div>
    }   
}
export default ClassA;