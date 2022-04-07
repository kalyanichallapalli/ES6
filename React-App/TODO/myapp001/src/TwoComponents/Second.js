import React from 'react'

function Second(props) {
  return (
    <div>
        <h2>Second Component created by: {props.username}</h2>
        <h2>Second Component count : {props.count}</h2>

    </div>
  )
}

export default Second;