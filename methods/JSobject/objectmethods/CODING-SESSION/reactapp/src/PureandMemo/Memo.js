import React from 'react'

function Memo({name}) {
    console.log('Memo component :')

  return (
    <div>This is Memo component created by {name}</div>
  )
}

export default React.memo(Memo);