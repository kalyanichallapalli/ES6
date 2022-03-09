import React from 'react';
import {useState} from 'react';

function TaskAdd(props) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)

const onSubmit = (e)=>{
    e.preventDefault()

    if(!text){
        alert('Please enter the details')
        return
    }
}
    
  return (
      <form className='add-form' onSubmit='{onSubmit}'>
          <div className='form-control'>
              <label>Task</label>
              <input type='text' placeholder='Add Task' value ={text} onChange = {(e)=> setText(e.target.text)}></input>
          </div>
          <div className='form-control'>
              <label>Day & Time </label>
              <input type='text' placeholder='Add Day & Time' value ={day} onChange = {(e)=> setDay(e.target.day)}></input>
          </div>
          <div className='form-control'>
              <label>Set Remainder</label>
              <input type='checkbox' checked={remainder} value ={remainder} onChange = {(e)=> setRemainder(e.currentTarget.checked)}></input>
          </div>
          <input type='submit' value = 'Set Task' className='btn btn-block' ></input>
      </form>
  )
}

export default TaskAdd;