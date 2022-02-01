import React, { Component } from 'react';
import ComponentF from './ComponentF';
class ComponentE extends Component {
  render() {
    console.log('Component E')

    return <div>
      <ComponentF></ComponentF>
    </div>;
  }
}
export default  ComponentE;