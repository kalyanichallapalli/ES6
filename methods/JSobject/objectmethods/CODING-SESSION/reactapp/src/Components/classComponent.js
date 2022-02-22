import React, { Component } from 'react'

 class ClassComponent extends Component {
     constructor(){
         super();
         this.name = "Kalyani"
     }
  render() {
    return (
      <div>This is the class component created by {this.name}</div>
    )
  }
}
export default ClassComponent;
