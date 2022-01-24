import React from "react";
import ClassB from "./ClassB";
class ClassA extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'KALYANI'
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
    shouldComponentUpdate(){
        console.log('ClassA: shouldComponentUpdate')
        return true;    
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('ClassA: getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('ClassA: componentDidUpdate')

    }
    Changestate =()=>{
        this.setState({
            name: 'KALYANI CHALLAPALLI'
        })
    }
    render(){
        console.log('ClassA: render')
        return <div>
            <h2>ClassA Created By {this.state.name}</h2>
            <ClassB></ClassB>
            <button onClick = {this.Changestate}>Change State</button>
        </div>
    }   
}
export default ClassA;