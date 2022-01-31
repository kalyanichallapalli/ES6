import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)
         this.inputRef = React.createRef()
    }
    
    componentDidMount(){

        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    HandlerClick = ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return <div>
        <input type ='text' ref = {this.inputRef}></input>
        <br/>
        <button onClick = {this.HandlerClick}>Click</button>
    </div>;
  }
}

export default RefsDemo;
