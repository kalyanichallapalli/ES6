import React from 'react';

 class Ref1 extends React.Component {
     constructor(props){
         super(props)
         this.inputRef = React.createRef();

     }
     handleChange =()=>{

     }
     componentDidMount(){
         this.inputRef.current.focus();
     }
  render() {
    return (
      <div>
           <h2> REF COmponent </h2> 
           <input type= 'text' onChange={this.handleChange} ref = {this.inputRef} ></input>
        
          </div>
    );
  }
}
export default Ref1;
