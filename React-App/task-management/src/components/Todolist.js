import React from 'react'
import List from './List'
class ToDoList extends React.Component() {
     constructor(props){
         super(props)
         this.state ={
             items:[],
             currentItem:{
                 text: '',
                 key: ''
             }
         }
         this.handleInput = this.handleInput.bind(this)
         this.addItem = this.addItem.bind(this)

     }
handleInput = (e) =>{
  this.setState({
      currentItem:{
          text:e.target.value,
          key: Math.floor(Math.random()*1000)
    
      }
  })
}

addItem = (e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '' ) {
        const items = [...this.state.items,newItem];
        this.setState({
            items: newItem,
            currentItem:{
                text:'',
                key: ''

            }
        })
    }

}

render(){
  return (
      <div>
      <header>
        <form id = 'to-do-form' onSubmit={this.addItem}> 
        <input type='text' placeholder='Enter text'
            value={this.state.currentItem.text} 
            onChange={this.handleInput}/>
        <button type='submit'>Add</button>
        </form>
      </header>
      <List items = {this.state.items}></List>
      </div>
  )
}
}
export default ToDoList;