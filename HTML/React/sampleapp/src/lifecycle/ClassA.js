import React from 'react'
//import ClassB from './ClassB';

class ClassA extends React.Component {
    constructor(){
        super();

        this.state = {
            name: 'Kalyani'
        }
        console.log('.............ClassA Constructor............')
    }
    static getDerivedStateFromProps(props, state){
        console.log('ClassA....getDerivedStateFromprops')
        return null
    }
    shouldComponentUpdate(){
        console.log('ClassA....shouldComponentUpdate...')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('ClassA....getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('ClassA .....componentDidUpdate.....')
    }
    Changestate =()=>{
        this.setState({
            name: 'KALYANI CHALLAPALLI'
        })
    }
  render() {
      console.log('ClassA...Render')
      
    return <div>
        <h2>Lifecycle ClassA Created by {this.state.name}</h2>
        <button onClick = {this.Changestate}>Change State Class A</button>
        {/* <ClassB></ClassB> */}
        </div>
  }

  componentDidMount(){
      console.log('ClassA......componentDidMount')
    return null  

  }
}
export default ClassA;
