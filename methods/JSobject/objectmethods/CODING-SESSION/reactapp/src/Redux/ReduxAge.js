import React from 'react';
import{connect} from 'react-redux'
import { Increment } from './store';

 class ReactAge extends React.Component {
   constructor(props){
     super(props)
   }

  render() {
    console.log(this.props)
    return (
      <div>React_Redux
          <h2>Count: {this.props.count} </h2>
           <button onClick={this.props.Increment}>Inc</button>
           <span>  and    </span>
           <button onClick={this.props.Decrement}>Dec</button>

      </div>
    )
  }
}

const MapStateToProps = (state) =>{
  return {count:state.count}
}
const MapDispatchToProps = (dispatch) =>{
    return {
      Increment: () => dispatch(Increment())
}  
}
export default connect(MapStateToProps,MapDispatchToProps)(ReactAge);