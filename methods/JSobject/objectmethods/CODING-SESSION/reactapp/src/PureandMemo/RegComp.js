import React from 'react'

 class RegComp extends React.Component {

  render() {
    console.log('Regular Component')

    return (
      <div> Thsi is regular function: {this.props.name}
          
      </div>
    )
  }
}
export default RegComp  ;
