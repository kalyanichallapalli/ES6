import React from "react"
 class ToDoList extends React.Component {

        constructor(props){
            super(props)
            this.state = {
                list: [{name: 'Kalyani', id: 9},
                         {name: 'Nidhi', id: 7},
                         {name: 'sudeep', id: 3},
                         {name: 'Tejo', id: 5},
                        ],
                };
                

       }
   
  handleClick = ()=>{
      let newlist = [].concat(this.state.list)
      newlist.sort((obj1,obj2)=> obj1.id - obj2.id)
      this.setState({list:newlist})
  }
  render() {
    return (
      <div>
          <h2>ToDoList</h2>
          <ul>
              {this.state.list.map((value) => <li>{value.name}<span>  :  </span>{value.id}</li>)}
          </ul>
          <button onClick={this.handleClick}>Sort</button>  
      </div>
    )
  }
}

export default ToDoList