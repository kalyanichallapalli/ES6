import React from 'react'

function TodoDelete({todos, handleDelete}) {
    console.log('todos:',todos)
    console.log()

  return (
    <div>
       {todos.map((todo, index)=> 
               <div key = {index}>
                   <h5>{todo} <span/> <button className='Delete' onClick={()=> handleDelete(index)}>Delete</button></h5>
               </div>)}
    </div>
  )
}

export default TodoDelete;