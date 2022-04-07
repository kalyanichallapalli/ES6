import React,{useState} from 'react'
import TodoDelete from './TodoDelete'

function TodoList() {
    const[task, setTask] = useState('');
    const[todos, setTodos] = useState([])

    const handleChange =(e) =>{
        setTask(e.target.value)
    }
    const handleSubmit = (e) =>{
       e.preventDefault();
       if(task == ""){
           alert('Enter Data');
           return;
       }
       let newtodos = [...todos, task];
       setTodos(newtodos);
       setTask('');
       console.log('task:',task)
    }
    const handleDelete = (indexvalue) =>{
        
        const newtodos = todos.filter((todo, index) =>index !== indexvalue)    
        setTodos(newtodos)
    }

  return (
    <div>
        <div className='card'>
            <div className='card-diaply'>
                <form onSubmit={handleSubmit}>
                    <h5>TODO LIST</h5>
                    <input type='text' size = '25' name= 'task' value={task} onChange={handleChange}></input>
                    <input type ='submit' name= 'Add' value='Add'/>
                </form>
                <TodoDelete todos={todos} handleDelete = {handleDelete}></TodoDelete>
            </div>
        </div>
    </div>
  )
}

export default TodoList;