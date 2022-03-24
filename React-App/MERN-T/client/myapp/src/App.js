import './App.css';
import{useState} from 'react';
import{useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [employee, setEmployee] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() =>{
     Axios.get("http://localhost:3001/getUsers").then((response) =>{
       setEmployee(response.data)
     })
  },[]) 
  const createUser = () =>{
    Axios.post("http://localhost:3001/createUser",{
      id: id,
      name: name,
      age:age,
    }).then((response)=>{
        // alert("Inserted User")
        setEmployee([...employee, {id:id, name:name, age:age}])
    })
  }
  return (
    <div className="App">
       <div>
         {
           employee.map((user)=>{
             return(
               <div>
                  <h1>Id: {user.id} </h1>
                  <h1>name: {user.name} </h1>
                  <h1>age: {user.age} </h1>
               </div>
             );
           })}
       </div>
       <input type='number' placeholder='id...' onChange={(event) => { setId(event.target.value)}} />
       <input type='text' placeholder='name...' onChange={(event) => { setName(event.target.value)}} />
       <input type='number' placeholder='age...' onChange={(event) => { setAge(event.target.value)}} />
       <button onClick = {createUser}>create user</button>
    </div>
  );
}

export default App;
