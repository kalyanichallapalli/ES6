import React from "react"
 class Shop extends React.Component {

        constructor(props){
            super(props);
            this.state = {list:[],
                          text: ''
                        };  
                

       }
  handleChange = (event)=>{
      this.text = event.target.value
      console.log(event.target.value)
      
  } 
  handleClick = ()=>{
      this.setState({list:this.state.list.concat(this.state.text)})
      this.setState({text:''});
  }
  render() {
    return (
      <div>
          <h2>ToDoList</h2>
          <input onChange ={this.handleChange} value={this.state.text}></input>
          <button onClick ={this.handleClick}>Submit</button>
          <ul>
              {
                  this.state.list.map((value,index) => <li key={index}>{value}</li>)
              }
          </ul>
      </div>
    )
  }
}

export default Shop;