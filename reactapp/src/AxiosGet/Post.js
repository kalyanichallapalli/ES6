import React, { Component } from 'react';

export class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: '',
         title:  '',
         body : ''
      }
    }
ChangeHandler = (e)=>{
    this.setState({[e.target.name]: e.target.value})
    
}
SubmitHandler = (e)=>{
    e.preventDefault ()
    console.log(this.state)
   
}
    
  render() {
      const{userid, title, body} = this.state
    return <div>
        <form onSubmit = {this.SubmitHandler}>
            <div type = 'text' 
                 name = 'userid' 
                 value = {userid} 
                 onChange = {this.ChangeHandler}>
                </div>
            <div type = 'text' 
                 name = 'title' 
                 value = {title}   
                 onChange = {this.ChangeHandler}>
                 </div>
            <div type = 'text' 
                 name = 'body' 
                value = {body}     
                onChange = {this.ChangeHandler}>
                </div>
                <button type = 'submit'> Submit </button>
        </form>
        </div>

  }
}

export default Post;
