import React from "react";
import PureComp from "./purecomp";
import Regcomp from "./regularComp";
class ParentComp extends React.Component{
    constructor(props){
       super(props);
       this.state ={
           name : 'Kalyani'
       }

    }
    componentDidMount= ()=>{
        setInterval(()=> {},2000)
        this.setState = {
            name:'Kalyani'
        }
    }
    render(){
        console.log('............Here in the Parent Component..........')
        console.log(this.state.name)
        return <div>
            <h2>This is a Parent Component</h2>
            <PureComp name = {this.state.name}></PureComp>
            <Regcomp name = {this.state.name}></Regcomp>
        </div>
    }
}
export default ParentComp;