import React, { Component } from 'react'
import Class2 from './Class2'

 class Class1 extends React.Component {
         constructor(){
             super()
             this.name ="Kalyani Challapalli"
         }  
  render() {
    return (
      <div>
       <h2>Class1 is passing props to Class2</h2>   
      <Class2 username = {this.name}></Class2>
      </div>
    )
  }
}
export default Class1