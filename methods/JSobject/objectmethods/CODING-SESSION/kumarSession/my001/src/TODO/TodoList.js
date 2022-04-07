import React,{useState} from 'react';
import Todosave from './Todosave';

function TodoList() {
  const[task, setTask] = useState(''); 
  const[todos, setTodos] = useState([])

  const handleChange = (e)=>{
    setTask(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(task == ''){
      alert('enter data') 
      return ;
    }
    const newList = [...todos,task]
    setTodos(newList)
    setTask("");
    console.log(task)
  }
  const handleDelete = (indexvalue)=>{
     const newtodo = todos.filter((todo,index) => index !== indexvalue)
     setTodos(newtodo)
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
          </div>
          <h5 className='card-title'>ToDo App</h5>
          <form onSubmit={handleSubmit}>
            <input size = '25' type='text' name = 'task' value = {task} onChange={handleChange}/>  <span/>
            <input type = 'submit' value='Add' name = 'Add'/>
          </form>
          <Todosave todos={todos} handleDelete={handleDelete}></Todosave>
        </div>
      </center>
    </div>
  )
}

export default TodoList