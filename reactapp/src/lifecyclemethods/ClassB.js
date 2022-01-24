import React from "react";
class ClassB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'kalyani'
        } 
        console.log('ClassB: Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('ClassB: gerDerivedStateFromProps')
        return null;
    }
    componentDidMount(){ 
    
        console.log('ClassB: componentDidMount')
    }

    render(){
        console.log('ClassB: render')
        return <div>ClassB</div>
    }   
}
export default ClassB;