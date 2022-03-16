import React from 'react';
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './style.css'

export const ACTION = {
    ADD_DIGIT: 'add-digit',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    CHOOSE_OPERATION:  'operation',
    EVALUATE: 'evaluate'

}

function reducer (state, {type,payload}){
  console.log(currentOperand)

   switch(type){
       case ACTION.ADD_DIGIT:
           if(payload.digit === '0' && state.currentOperand ==='0')
           {
               return state;
           }
           if(payload.digit === '.' && state.currentOperand.includes('.'))
           {
               return state;
           }
               return {...state,currentOperand: `$(currentOperand) $(payload.digit)`}
       case ACTION.CLEAR: return
       case ACTION.DELETE_DIGIT: return
       case ACTION.EVALUATE:return
       default:    
   }

}

function Calculator() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})
  return(
    <div className='calculator-grid'> 
      <div className='output'>        
        <div className='previous-operand'>{previousOperand} {operation} </div>
        <div className='current-operand'>{currentOperand}</div>
      </div>   
          <button className='span-two'>Ac</button>
          <button>DEL</button>
          <OperationButton operation = '÷' dispatch={dispatch}/>    
          <DigitButton digit = '1' dispatch={dispatch}/>
          <DigitButton digit = '2' dispatch={dispatch}/>
          <DigitButton digit = '3' dispatch={dispatch}/>
          <OperationButton operation = '*' dispatch={dispatch}/>    
          <DigitButton digit = '4' dispatch={dispatch}/>
          <DigitButton digit = '5' dispatch={dispatch}/>
          <DigitButton digit = '6' dispatch={dispatch}/>
          <OperationButton operation = '+' dispatch={dispatch}/>    
          <DigitButton digit = '7' dispatch={dispatch}/>
          <DigitButton digit = '8' dispatch={dispatch}/>
          <DigitButton digit = '9' dispatch={dispatch}/>
          <OperationButton operation = '-' dispatch={dispatch}/>    
          <DigitButton digit = '.' dispatch={dispatch}/>
          <DigitButton digit = '0' dispatch={dispatch}/>
          <button className='span-two'>=</button>

    </div>
  

  )
}

export default Calculator