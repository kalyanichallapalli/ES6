import React from 'react';
import { UserConsumer } from './ContextHook';

class C extends React.Component {
  render() {
    console.log('Component C')

    return (
      <UserConsumer>
        {
          (username)=>{
            return     <div>Componet C Consume {username} from Main Component</div>  
          
          }
        }
        
      </UserConsumer>
    )
      
  }
}
export default C;
