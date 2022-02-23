import React from 'react'
import B from './B'

 class A extends React.Component {
  render() {
    console.log('A')
    return (
      <div>
          <h2>A Component</h2>
          <B></B>
      </div>

    )
  }
}

export default A