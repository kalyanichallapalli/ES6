import React from 'react';
import ClassA from './ClassA';
class ClassB extends React.Component {
    constructor(){
        super();

        this.state = {
            name: 'Rasna'
        }
        console.log('.............ClassB Constructor............')
    }
    static getDerivedStateFromProps(props, state){
        console.log('ClassB....getDerivedStateFromprops')
        return null
    }
    shouldComponentUpdate(){
        console.log('....ClassB -----uodating---shouldComponentUpdate...')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('ClassB--uodating--getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('ClassB.....componentDidUpdate.....')
    }

  render() {
      console.log('ClassB...Render')
    return <div>Lifecycle ClassB</div>;
  }

  componentDidMount(){
      console.log('ClassB......componentDidMount')
    return null  

  }
}
export default ClassB;
