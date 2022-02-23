import React from 'react'
import C from './C'
 class B extends React.Component {
  render() {
    console.log('B')

    return (
      <div>
          <h2>B Component</h2>
          <C></C>
      
      </div>
    )
  }
}

export default B