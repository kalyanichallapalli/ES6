import React,{useState} from 'react';
import './List.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function FunToDoList() {
    const[text, setText] = useState(''); 
    const[items, setItems]  = useState([]) 

    const onSubmithandler = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Please Enter text')
            return;
        }
        const newitem = {
            id: Math.floor(Math.random()*1000),
            text: text

        }
        setItems([...items, newitem])
        setText('')
    }
    const deleteHandler = (id)=>{
      setItems(items.filter(item => item.id !== id
      ))
    }
    const setUpdate = (text,id)=>{
        
        const newItems = items.map(item =>{ 
            if(item.id === id){
                return {...item, text:text}
            }
            return item
        })
        setItems(newItems);   
    }

  return (
    <div>
        <form  id='to-do-form' onSubmit={onSubmithandler}>
            <input type='text' 
            placeholder='Enter here' 
            value = {text}
            onChange={(e) => setText(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form>

        {
            items.map((item)=>
            <div className='list' key={item.id}>
                <p>
                {/* {item.text} */}
                <input type='text'id={item.key} value={item.text} onChange={(e)=>setUpdate(e.target.value, item.id)} ></input>
                <span>
                <FontAwesomeIcon className='faicon' icon='trash' onClick={()=> deleteHandler(item.id)}></FontAwesomeIcon>
                </span>
                </p>
            </div>    
            )
        }
    </div>
  )
}

export default FunToDoList