import React, { Component } from 'react';
import ComponentE from './ComponentE';
class ComponentC extends Component {
  render() {
    console.log('Component C')
    return <div>
      <ComponentE></ComponentE>
    </div>;
  }
}
export default  ComponentC;