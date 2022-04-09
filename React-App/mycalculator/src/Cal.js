import react,{ useState } from "react";

function Cal() {
const [cal, setCal] = useState('');
  const [result, setResult] = useState('');
  const operator = ['/', '*', '+', '-', '.'];

  const updateCal = (value) =>{
    if(operator.includes(value) && cal === '' || operator.includes(value) && operator.includes(cal.slice(-1))){
      return;
    }       
    setCal(cal + value);

    if(!operator.includes(value)){
      setResult(eval(cal + value).toString())
    }
  };

  const createDigits = ()=>{
    const digits = [];
    for(let i=1; i<10; i++){
        digits.push(
          <button onClick={() => updateCal(i.toString())} key={i}>{i}</button>
        )
    }
    return digits;
  }
  const calculate = () => {
    setCal(eval(cal).toString());
  }
  const deletelist = () => {
    if(cal == ''){
      return;
    }
    const value = cal.slice(0,-1);
    setCal(value);
  }
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          { result? <span></span>: ''} {cal || '0'}
        </div>
        <div className='operators'>
            <button onClick = { ()=> updateCal ('/')}>/</button>
            <button onClick = { ()=> updateCal ('*')}>*</button>
            <button onClick = { ()=> updateCal ('+')}>+</button>
            <button onClick = { ()=> updateCal ('-')}>-</button>
            <button onClick={deletelist}>DEL</button>
        </div>
        <div className='digits'>
            {createDigits()}
            <button onClick = { ()=> updateCal ('0')}>0</button>
            <button onClick = { ()=> updateCal ('.')}>.</button>
            <button onClick = {calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Cal;
