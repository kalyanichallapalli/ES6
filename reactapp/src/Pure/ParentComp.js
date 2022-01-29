import React from "react";
import PureComp from "./PureComp";
import Regcomp from "./RegularComp";
import MemoComp from "./MemoComp";
class ParentComp extends React.Component{
    constructor(props){
       super(props);
       this.state ={
           name : 'Kalyani'
       }

    }
    componentDidMount(){
        setInterval(()=> {},2000)
        this.setState ({
            name:'Kalyani'
        })
    }
    render(){
        console.log('............Here in the Parent Component..........')
        return <div>
            <h2>This is a Parent Component</h2>
            <PureComp name = {this.state.name}></PureComp>
            <Regcomp name = {this.state.name}></Regcomp>
            <MemoComp name = {this.state.name}></MemoComp>
        </div>
    }
}
export default ParentComp;