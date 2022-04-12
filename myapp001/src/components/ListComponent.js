import React from 'react';

function ListComponent(props) {
  return (
    <div>
        <h2>ListComponent Created by: {props.username}</h2>
        <h2>ListComponent count : {props.newvalue}</h2>

    </div>
  )
}

export default ListComponent;