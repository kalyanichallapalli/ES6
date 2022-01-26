import React, { Component } from 'react';
import ClassA from './classA';
import ClassB from './classB';

export class PARENT  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kalyani',
         count: 0
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Kalyani'
            })
        },5000)
    }
   
  render() {
      console.log('Parent component')
    return <div>
        <h2>PARENT COMPONENT</h2>
        <ClassA name ={this.state.name}></ClassA>
        <ClassB name ={this.state.name}></ClassB>
    </div>;
  }
}

export default PARENT ;
