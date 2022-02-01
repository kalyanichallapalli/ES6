import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
  render() {
    console.log('Component F')

    return (
      <UserConsumer>
        {
          (username)=>{
            return     <div>Componet F Consume {username} from Main Component</div>  
          
          }
        }
        
      </UserConsumer>
    )
      
  }
}
export default ComponentF;
