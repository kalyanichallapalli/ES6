import React from "react";
import RegComp from "./RegComp";
import PureComp from "./Pure";
import Memo from "./Memo";
class Parent extends React.Component{
    constructor(props){
       super(props);
       this.state ={
           name : 'Kalyani'
       }

    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Kalyani'
            })
        },5000)
    }
    
    render(){
        console.log('............Here in the Parent Component..........')
        return <div>
            <h2>This is a Parent Component</h2>
            <PureComp name = {this.state.name}></PureComp>
            <RegComp name = {this.state.name}></RegComp>
            <Memo name = {this.state.name}></Memo>
        </div>
    }
}
export default Parent;