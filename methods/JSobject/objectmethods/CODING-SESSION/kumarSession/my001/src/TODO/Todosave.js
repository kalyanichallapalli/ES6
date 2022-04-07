import React from 'react'

function Todosave({todos, handleDelete}) {

  return (
    <div>
        {
            todos.map((todo,index)=>
            <div key={index}>
                <h5>{todo} <span/> <button className='delete' onClick={()=> handleDelete(index)}>Delete</button></h5>
            </div>)
        }
    </div>
    )
}

export default Todosave; 
