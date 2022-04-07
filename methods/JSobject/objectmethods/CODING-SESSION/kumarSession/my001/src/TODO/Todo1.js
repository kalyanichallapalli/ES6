import React,{useState} from 'react'

function Todo1() {
  const[task, setTask] = useState('');
  const[todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(task == ''){
      alert('enter data') 
      return ;
    }
  } 

  return (
    <div>
      <center>
      <div>
        <h5>ToDoList</h5>
      <form onChange={handleSubmit}>
        <input type='text' name= 'task' value={task} onChange={handleChange}></input>
        <input type='submit' name = 'Add' value ='Add'></input>
      </form>
      </div>
      </center>
    </div>
  )
}

export default Todo1