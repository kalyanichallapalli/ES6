import React from 'react'

function Calculator() {
  return (
    <div>
        <div class = 'display'><span></span></div>
        <div>
            <button>Del</button>
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
        </div>
        <div>
           <button>0</button>
           <button>.</button>
           <button>=</button>
        </div>
    </div>
  )
}

export default Calculator