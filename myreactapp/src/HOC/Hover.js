import React from 'react';
import HigherOrderComponent from './handlinghoc';
class Hover extends React.Component{

render(){
    const {count, Incrementcount} = this.props
    return <div>
        <h2>Hover Here To increment Count</h2>
        <h2 onMouseOver = {Incrementcount}>Hover here to Increment {count}</h2> 
           </div>

}
}
export default HigherOrderComponent(Hover);