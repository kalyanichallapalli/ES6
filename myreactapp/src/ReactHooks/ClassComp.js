import React, { Component } from 'react';

 class ClassComp extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count: 0
     }
   }
   
  HandlerClick =()=>{
    this.setState(prevstate => {return{count:prevstate.count + 1}})
  }
  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`
  }
  componentDidUpdate(prevprops, prevstate){
  
      document.title = `Clicked ${this.state.count} times`
  }
  

  render() {
    return <div>
      <button onClick = {this.HandlerClick}>click{this.state.count}</button>
    </div>;
  }
}
export default ClassComp;

/// this Class Component will do