import React, { Component } from 'react';
import List from './List';

class ClassToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:[],
            currentItem: {
               text: '',
               key: ''

            }
        }
        // this.handleInput = this.handleInput.bind(this)
        //  this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.setUpdate = this.setUpdate.bind(this)

    }
    handleInput = (e) =>{
        this.setState({
            currentItem:{
                text:e.target.value,
                // key: Math.floor(Math.random()*1000)
                key: Date.now()

          
            }
        })
      }
      
      addItem = (e) =>{
          e.preventDefault();
          const newItem = this.state.currentItem;
          if(newItem.text !== '' ) {
              const newItems = [...this.state.items,newItem];
              this.setState({
                  items: newItems,
                  currentItem:{
                      text:'',
                      key: ''
      
                  }
              })
          }
    }

    deleteItem(key){
        console.log(this.state)
        console.log(key)
       const filterItems = this.state.items.filter(item => item.key!==key)     
       this.setState({
           items:filterItems
       })
    }
  setUpdate(text, key){
      const items = this.state.items;
      items.map(item =>{
          if(item.key ===key){
              item.text = text;
          }
      })
      this.setState({
          items: items
      })
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
      <List items={this.state.items} 
      deleteItem={this.deleteItem}
      setUpdate = {this.setUpdate}></List>
      </div>
    );
  }
}
export default ClassToDoList;