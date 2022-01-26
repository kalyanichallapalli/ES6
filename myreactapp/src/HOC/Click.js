import React from 'react';
import HigherOrderComponent from './handlinghoc';
class Click extends React.Component{
render(){
    const {count, Incrementcount} = this.props
    return <div>
        <h2>Click Here To Count</h2>
        <button onClick = {Incrementcount}>Click{count}</button> 
           </div>
}
}
export default HigherOrderComponent(Click);