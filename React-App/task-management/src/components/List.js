import React from 'react';
import './List.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function List(props) {

  const items = props.items;
  const listItems = items.map(item => {
    return <div className='list' key={item.key}>
      <p>
        {/* {item.text} */}
        <input type='text' id={item.key} value={item.text} onChange ={
          (e)=>{
            props.setUpdate(e.target.value, item.key)
          }
        } />
        <span> 
           <FontAwesomeIcon className='faicon' icon='trash' onClick={()=> props.deleteItem(item.key)}></FontAwesomeIcon>
        </span>
     </p>
    </div>
  })

  return (
    <div>
     {listItems}
    </div>
  )
}

export default List;
