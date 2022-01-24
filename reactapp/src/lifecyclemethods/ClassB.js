import React from "react";
class ClassB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Rasna'
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
    shouldComponentUpdate(){
        console.log('ClassB: shouldComponentUpdate')
        return true;    
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('ClassB: getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(){
        console.log('ClassB: componentDidUpdate')

    }
    Changename = ()=>{
        this.setState({
            name: 'KALYANI CHALLAPALLI'
        })
    }
    render(){
        console.log('ClassB: render')
        return <div>
            <h2>ClassB Created by {this.state.name}</h2>
            <button onClick = {this.Changename}>Change Name</button>
           
        </div>
    }   
}
export default ClassB;