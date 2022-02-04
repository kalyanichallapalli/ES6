import React,{useState,useCallback} from 'react';
import Count from './Count';
import Button from './Button';


function CallBackHook() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000)
  console.log(age,salary)

  const IncrementAge = useCallback(()=>{
    setAge(age+1)
  },[age])
  console.log("age",age)

  const IncrementSalary = useCallback(()=>{
    setSalary(salary + 1000)
  },[salary])
  console.log("salary", salary)

  return <div>
    <h2>Call Back Hook Performance</h2>
    <Count text = 'Age' Count = {age}></Count>
    <Button onClick = {IncrementAge}></Button>
    <Count text = 'Salary' Count = {salary}></Count>
    <Button onClick= {IncrementSalary}></Button>   
  </div>;
}

export default CallBackHook;
